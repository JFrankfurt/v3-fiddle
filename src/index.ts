import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { JsonRpcProvider } from '@ethersproject/providers'
import { Wallet } from '@ethersproject/wallet'
import { ChainId, Token } from '@uniswap/sdk-core'
import { abi as V3FactoryABI } from '@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json'
import { abi as PoolABI } from '@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json'
import { abi as WETH9ABI } from '@uniswap/v3-periphery/artifacts/contracts/interfaces/external/IWETH9.sol/IWETH9.json'
import { abi as NonfungiblePositionManagerABI } from '@uniswap/v3-periphery/artifacts/contracts/interfaces/INonfungiblePositionManager.sol/INonfungiblePositionManager.json'
import { abi as SwapRouterABI } from '@uniswap/v3-periphery/artifacts/contracts/interfaces/ISwapRouter.sol/ISwapRouter.json'
import { config } from 'dotenv'
import { IWETH9 } from 'types/IWETH9'
import { NonfungiblePositionManager } from 'types/NonfungiblePositionManager'
import { SwapRouter } from 'types/SwapRouter'
import { UniswapV3Factory } from 'types/UniswapV3Factory'
import { UniswapV3Pool } from 'types/UniswapV3Pool'
import * as addresses from './addresses'

config({})

enum FeeAmount {
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000,
}

export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200,
}

const gasLimit = 5000000
const gasPrice = 1
const fee = FeeAmount.LOW
const chainId = parseInt(process.env.chainId || '1') as ChainId

const getMinTick = (tickSpacing: number) =>
  Math.ceil(-887272 / tickSpacing) * tickSpacing
const getMaxTick = (tickSpacing: number) =>
  Math.floor(887272 / tickSpacing) * tickSpacing

// price === 1
const sqrtPriceX96 = BigNumber.from('79228162514264337593543950336')

const NonfungiblePositionManagerAddress =
  addresses.NonfungiblePositionManager[chainId]
const SwapRouterAddress = addresses.SwapRouter[chainId]
const WETH9Address = addresses.WETH9[chainId]
const Token2Address = addresses.Token2[chainId]
const V3FactoryAddress = addresses.V3Factory[chainId]

const provider = new JsonRpcProvider(process.env.rpc)

const pk = process.env.pk as string
let wallet = new Wallet(pk)
wallet = wallet.connect(provider)

const TokenContract = new Contract(WETH9Address, WETH9ABI, wallet) as IWETH9
const Token2Contract = new Contract(Token2Address, WETH9ABI, wallet) as IWETH9

const NonfungiblePositionManagerContract = new Contract(
  NonfungiblePositionManagerAddress,
  NonfungiblePositionManagerABI,
  wallet
) as NonfungiblePositionManager
const SwapRouterContract = new Contract(
  SwapRouterAddress,
  SwapRouterABI,
  wallet
) as SwapRouter
const PoolFactoryContract = new Contract(
  V3FactoryAddress,
  V3FactoryABI,
  wallet
) as UniswapV3Factory

const overrides = { gasPrice, gasLimit }

async function main() {
  try {
    // ensure a WETH balance
    let wethBalance: BigNumber = await TokenContract.balanceOf(wallet.address)
    const targetTokenBalance = BigNumber.from(100)
    console.log('wethBalance:', wethBalance)
    if (!wethBalance.gt(targetTokenBalance)) {
      const depositTransaction = await TokenContract.deposit({
        ...overrides,
        value: targetTokenBalance,
      })
      console.log('depositing weth...')
      await depositTransaction.wait()
      wethBalance = await TokenContract.balanceOf(wallet.address)
      console.log('new wethBalance:', wethBalance)
    }
    const wethAllowance = await TokenContract.allowance(
      wallet.address,
      NonfungiblePositionManagerContract.address
    )
    console.log('wethAllowance: ', wethAllowance)
    if (wethAllowance.lt(targetTokenBalance)) {
      console.log('approving token1...')
      const tokenApprovalTx = await TokenContract.approve(
        NonfungiblePositionManagerContract.address,
        targetTokenBalance
      )
      const newWethAllowance = await tokenApprovalTx.wait()
      console.log('newWethAllowance: ', newWethAllowance)
    }
    // ensure a second token balance
    let weth2Balance: BigNumber = await Token2Contract.balanceOf(wallet.address)
    console.log('weth2Balance:', weth2Balance)
    if (!weth2Balance.gt(targetTokenBalance)) {
      const depositTransaction = await Token2Contract.deposit({
        ...overrides,
        value: targetTokenBalance,
      })
      console.log('depositing weth2...')
      await depositTransaction.wait()
      weth2Balance = await Token2Contract.balanceOf(wallet.address)
      console.log('new weth2Balance:', weth2Balance)
    }
    // ensure second token has approved the nft manager
    const weth2Allowance = await Token2Contract.allowance(
      wallet.address,
      NonfungiblePositionManagerContract.address
    )
    console.log('weth2Allowance: ', weth2Allowance)
    if (weth2Allowance.lt(targetTokenBalance)) {
      console.log('approving token2...')
      const token2ApprovalTx = await Token2Contract.approve(
        NonfungiblePositionManagerContract.address,
        targetTokenBalance
      )
      const newWeth2Allowance = await token2ApprovalTx.wait()
      console.log('newWeth2Allowance: ', newWeth2Allowance)
    }

    // sdk compute pool address
    const TokenA = new Token(chainId, WETH9Address, 18, 'WETH', 'WETH9')
    const TokenB = new Token(chainId, Token2Address, 18, 'WETH', 'WETH9')
    const poolAddress = await PoolFactoryContract.getPool(
      TokenA.address,
      TokenB.address,
      fee
    )
    console.log('pool address: ', poolAddress)
    if (
      BigNumber.from(poolAddress).eq(0x0000000000000000000000000000000000000000)
    ) {
      // await createPool()
      await PoolFactoryContract.createPool(
        TokenA.address,
        TokenB.address,
        fee,
        overrides
      )
    }

    const PoolContract = new Contract(
      poolAddress,
      PoolABI,
      wallet
    ) as UniswapV3Pool
    const slot0 = await PoolContract.slot0()
    // console.log('slot0', slot0)
    if (!slot0) {
      console.log('initializing...')
      const initialization = await PoolContract.initialize(
        sqrtPriceX96,
        overrides
      )
      const initializationReceipt = await initialization.wait()
      console.log('initialization receipt: ', initializationReceipt)
    }

    let balance = await NonfungiblePositionManagerContract.balanceOf(
      wallet.address
    )
    console.log('position balance: ', balance)
    const hasPositions = BigNumber.from(balance).gt(0)
    console.log('hasPositions: ', hasPositions)
    if (!hasPositions) {
      const currentBlockNumber = await provider.getBlockNumber()
      const currentBlock = await provider.getBlock(currentBlockNumber)
      const deadline = currentBlock.timestamp + 60 * 60 * 1000
      console.log('minting...')
      const mintTransaction = await NonfungiblePositionManagerContract.mint(
        {
          amount0Max: targetTokenBalance,
          amount1Max: targetTokenBalance,
          recipient: wallet.address,
          deadline,
          token0: TokenA.address,
          token1: TokenB.address,
          fee,
          tickLower: getMinTick(TICK_SPACINGS[fee]),
          tickUpper: getMaxTick(TICK_SPACINGS[fee]),
          amount: 1,
        },
        overrides
      )
      console.log('mint tx: ', await mintTransaction.wait())
      balance = await NonfungiblePositionManagerContract.balanceOf(
        wallet.address
      )
    }
    const positionIndex = await NonfungiblePositionManagerContract.tokenOfOwnerByIndex(
      wallet.address,
      0
    )
    console.log('positionIndex: ', positionIndex)
    const firstPosition = await NonfungiblePositionManagerContract.positions(
      positionIndex
    )
    console.log('firstPosition: ', firstPosition)
  } catch (e) {
    console.error('error: ', e)
  }
}

main()
