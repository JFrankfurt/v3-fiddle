/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface ISwapRouterInterface extends ethers.utils.Interface {
  functions: {
    "exactInput(tuple)": FunctionFragment;
    "exactOutput(tuple)": FunctionFragment;
    "uniswapV3SwapCallback(int256,int256,bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "exactInput",
    values: [
      {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exactOutput",
    values: [
      {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "uniswapV3SwapCallback",
    values: [BigNumberish, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "exactInput", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "exactOutput",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "uniswapV3SwapCallback",
    data: BytesLike
  ): Result;

  events: {};
}

export class ISwapRouter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: ISwapRouterInterface;

  functions: {
    exactInput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "exactInput((bytes,address,uint256,uint256,uint256))"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    exactOutput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "exactOutput((bytes,address,uint256,uint256,uint256))"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "uniswapV3SwapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  exactInput(
    params: {
      path: BytesLike;
      recipient: string;
      deadline: BigNumberish;
      amountIn: BigNumberish;
      amountOutMinimum: BigNumberish;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "exactInput((bytes,address,uint256,uint256,uint256))"(
    params: {
      path: BytesLike;
      recipient: string;
      deadline: BigNumberish;
      amountIn: BigNumberish;
      amountOutMinimum: BigNumberish;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  exactOutput(
    params: {
      path: BytesLike;
      recipient: string;
      deadline: BigNumberish;
      amountOut: BigNumberish;
      amountInMaximum: BigNumberish;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "exactOutput((bytes,address,uint256,uint256,uint256))"(
    params: {
      path: BytesLike;
      recipient: string;
      deadline: BigNumberish;
      amountOut: BigNumberish;
      amountInMaximum: BigNumberish;
    },
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  uniswapV3SwapCallback(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "uniswapV3SwapCallback(int256,int256,bytes)"(
    amount0Delta: BigNumberish,
    amount1Delta: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    exactInput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exactInput((bytes,address,uint256,uint256,uint256))"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactOutput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exactOutput((bytes,address,uint256,uint256,uint256))"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "uniswapV3SwapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    exactInput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "exactInput((bytes,address,uint256,uint256,uint256))"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    exactOutput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "exactOutput((bytes,address,uint256,uint256,uint256))"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "uniswapV3SwapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    exactInput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "exactInput((bytes,address,uint256,uint256,uint256))"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountIn: BigNumberish;
        amountOutMinimum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    exactOutput(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "exactOutput((bytes,address,uint256,uint256,uint256))"(
      params: {
        path: BytesLike;
        recipient: string;
        deadline: BigNumberish;
        amountOut: BigNumberish;
        amountInMaximum: BigNumberish;
      },
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    uniswapV3SwapCallback(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "uniswapV3SwapCallback(int256,int256,bytes)"(
      amount0Delta: BigNumberish,
      amount1Delta: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
