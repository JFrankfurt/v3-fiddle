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
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TickLensInterface extends ethers.utils.Interface {
  functions: {
    "getPopulatedTicks(address,int24,int24)": FunctionFragment;
    "getStaticData(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getPopulatedTicks",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getStaticData",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getPopulatedTicks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStaticData",
    data: BytesLike
  ): Result;

  events: {};
}

export class TickLens extends Contract {
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

  interface: TickLensInterface;

  functions: {
    getPopulatedTicks(
      pool: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([number, BigNumber, BigNumber] & {
          tick: number;
          liquidityNet: BigNumber;
          liquidityGross: BigNumber;
        })[]
      ] & {
        populatedTicks: ([number, BigNumber, BigNumber] & {
          tick: number;
          liquidityNet: BigNumber;
          liquidityGross: BigNumber;
        })[];
      }
    >;

    "getPopulatedTicks(address,int24,int24)"(
      pool: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([number, BigNumber, BigNumber] & {
          tick: number;
          liquidityNet: BigNumber;
          liquidityGross: BigNumber;
        })[]
      ] & {
        populatedTicks: ([number, BigNumber, BigNumber] & {
          tick: number;
          liquidityNet: BigNumber;
          liquidityGross: BigNumber;
        })[];
      }
    >;

    getStaticData(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber] & {
        sqrtPriceX96: BigNumber;
        tick: number;
        liquidity: BigNumber;
      }
    >;

    "getStaticData(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber] & {
        sqrtPriceX96: BigNumber;
        tick: number;
        liquidity: BigNumber;
      }
    >;
  };

  getPopulatedTicks(
    pool: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([number, BigNumber, BigNumber] & {
      tick: number;
      liquidityNet: BigNumber;
      liquidityGross: BigNumber;
    })[]
  >;

  "getPopulatedTicks(address,int24,int24)"(
    pool: string,
    tickLower: BigNumberish,
    tickUpper: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([number, BigNumber, BigNumber] & {
      tick: number;
      liquidityNet: BigNumber;
      liquidityGross: BigNumber;
    })[]
  >;

  getStaticData(
    pool: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, BigNumber] & {
      sqrtPriceX96: BigNumber;
      tick: number;
      liquidity: BigNumber;
    }
  >;

  "getStaticData(address)"(
    pool: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, BigNumber] & {
      sqrtPriceX96: BigNumber;
      tick: number;
      liquidity: BigNumber;
    }
  >;

  callStatic: {
    getPopulatedTicks(
      pool: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([number, BigNumber, BigNumber] & {
        tick: number;
        liquidityNet: BigNumber;
        liquidityGross: BigNumber;
      })[]
    >;

    "getPopulatedTicks(address,int24,int24)"(
      pool: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([number, BigNumber, BigNumber] & {
        tick: number;
        liquidityNet: BigNumber;
        liquidityGross: BigNumber;
      })[]
    >;

    getStaticData(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber] & {
        sqrtPriceX96: BigNumber;
        tick: number;
        liquidity: BigNumber;
      }
    >;

    "getStaticData(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, BigNumber] & {
        sqrtPriceX96: BigNumber;
        tick: number;
        liquidity: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getPopulatedTicks(
      pool: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPopulatedTicks(address,int24,int24)"(
      pool: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStaticData(pool: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getStaticData(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPopulatedTicks(
      pool: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPopulatedTicks(address,int24,int24)"(
      pool: string,
      tickLower: BigNumberish,
      tickUpper: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStaticData(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getStaticData(address)"(
      pool: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
