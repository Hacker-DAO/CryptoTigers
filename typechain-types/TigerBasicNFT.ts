/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TigerBasicNFTInterface extends utils.Interface {
  contractName: "TigerBasicNFT";
  functions: {
    "buyTiger(uint256)": FunctionFragment;
    "getBalance(address)": FunctionFragment;
    "getOwner(uint256)": FunctionFragment;
    "isForSale(uint256)": FunctionFragment;
    "pendingWithdrawals(address)": FunctionFragment;
    "putUpForSale(uint256,uint256)": FunctionFragment;
    "tigerByOwnerAndIndex(address,uint256)": FunctionFragment;
    "tigersForSale(uint256)": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "withdrawFromSale(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "buyTiger",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "getBalance", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getOwner",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isForSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "pendingWithdrawals",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "putUpForSale",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tigerByOwnerAndIndex",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tigersForSale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawFromSale",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "buyTiger", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isForSale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingWithdrawals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "putUpForSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tigerByOwnerAndIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tigersForSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawFromSale",
    data: BytesLike
  ): Result;

  events: {
    "TigerForSale(address,uint256,uint256)": EventFragment;
    "TigerSold(address,address,uint256,uint256)": EventFragment;
    "TigerWithdrawnFromSale(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TigerForSale"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TigerSold"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TigerWithdrawnFromSale"): EventFragment;
}

export type TigerForSaleEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { seller: string; tigerId: BigNumber; price: BigNumber }
>;

export type TigerForSaleEventFilter = TypedEventFilter<TigerForSaleEvent>;

export type TigerSoldEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { seller: string; buyer: string; tigerId: BigNumber; price: BigNumber }
>;

export type TigerSoldEventFilter = TypedEventFilter<TigerSoldEvent>;

export type TigerWithdrawnFromSaleEvent = TypedEvent<
  [string, BigNumber],
  { seller: string; tigerId: BigNumber }
>;

export type TigerWithdrawnFromSaleEventFilter =
  TypedEventFilter<TigerWithdrawnFromSaleEvent>;

export interface TigerBasicNFT extends BaseContract {
  contractName: "TigerBasicNFT";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TigerBasicNFTInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    buyTiger(
      tigerId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getBalance(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    getOwner(
      tigerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    isForSale(
      tigerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    pendingWithdrawals(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    putUpForSale(
      tigerId: BigNumberish,
      minSalePriceInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    tigerByOwnerAndIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tigersForSale(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber] & {
        isForSale: boolean;
        seller: string;
        price: BigNumber;
      }
    >;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawFromSale(
      tigerId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  buyTiger(
    tigerId: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getBalance(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  getOwner(tigerId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  isForSale(
    tigerId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[boolean, BigNumber]>;

  pendingWithdrawals(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  putUpForSale(
    tigerId: BigNumberish,
    minSalePriceInWei: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  tigerByOwnerAndIndex(
    owner: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tigersForSale(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [boolean, string, BigNumber] & {
      isForSale: boolean;
      seller: string;
      price: BigNumber;
    }
  >;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawFromSale(
    tigerId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    buyTiger(tigerId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    getBalance(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    getOwner(tigerId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    isForSale(
      tigerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[boolean, BigNumber]>;

    pendingWithdrawals(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    putUpForSale(
      tigerId: BigNumberish,
      minSalePriceInWei: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    tigerByOwnerAndIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tigersForSale(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [boolean, string, BigNumber] & {
        isForSale: boolean;
        seller: string;
        price: BigNumber;
      }
    >;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFromSale(
      tigerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "TigerForSale(address,uint256,uint256)"(
      seller?: string | null,
      tigerId?: BigNumberish | null,
      price?: null
    ): TigerForSaleEventFilter;
    TigerForSale(
      seller?: string | null,
      tigerId?: BigNumberish | null,
      price?: null
    ): TigerForSaleEventFilter;

    "TigerSold(address,address,uint256,uint256)"(
      seller?: string | null,
      buyer?: string | null,
      tigerId?: BigNumberish | null,
      price?: null
    ): TigerSoldEventFilter;
    TigerSold(
      seller?: string | null,
      buyer?: string | null,
      tigerId?: BigNumberish | null,
      price?: null
    ): TigerSoldEventFilter;

    "TigerWithdrawnFromSale(address,uint256)"(
      seller?: string | null,
      tigerId?: BigNumberish | null
    ): TigerWithdrawnFromSaleEventFilter;
    TigerWithdrawnFromSale(
      seller?: string | null,
      tigerId?: BigNumberish | null
    ): TigerWithdrawnFromSaleEventFilter;
  };

  estimateGas: {
    buyTiger(
      tigerId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getBalance(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    getOwner(
      tigerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isForSale(
      tigerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pendingWithdrawals(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    putUpForSale(
      tigerId: BigNumberish,
      minSalePriceInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    tigerByOwnerAndIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tigersForSale(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawFromSale(
      tigerId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTiger(
      tigerId: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getBalance(
      owner: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwner(
      tigerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isForSale(
      tigerId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pendingWithdrawals(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    putUpForSale(
      tigerId: BigNumberish,
      minSalePriceInWei: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    tigerByOwnerAndIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tigersForSale(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawFromSale(
      tigerId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}