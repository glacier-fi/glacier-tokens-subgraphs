import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  OwnershipTransferred,
  Registered,
  Unregistered
} from "../generated/RequestTokenRegistry/RequestTokenRegistry"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRegisteredEvent(
  requestToken: Address,
  tokenName: string,
  tokenSymbol: string,
  tokenDecimals: i32,
  tokenAddress: Address
): Registered {
  let registeredEvent = changetype<Registered>(newMockEvent())

  registeredEvent.parameters = new Array()

  registeredEvent.parameters.push(
    new ethereum.EventParam(
      "requestToken",
      ethereum.Value.fromAddress(requestToken)
    )
  )
  registeredEvent.parameters.push(
    new ethereum.EventParam("tokenName", ethereum.Value.fromString(tokenName))
  )
  registeredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenSymbol",
      ethereum.Value.fromString(tokenSymbol)
    )
  )
  registeredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenDecimals",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenDecimals))
    )
  )
  registeredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return registeredEvent
}

export function createUnregisteredEvent(
  factory: Address,
  tokenName: string,
  tokenSymbol: string,
  tokenDecimals: i32,
  tokenAddress: Address
): Unregistered {
  let unregisteredEvent = changetype<Unregistered>(newMockEvent())

  unregisteredEvent.parameters = new Array()

  unregisteredEvent.parameters.push(
    new ethereum.EventParam("factory", ethereum.Value.fromAddress(factory))
  )
  unregisteredEvent.parameters.push(
    new ethereum.EventParam("tokenName", ethereum.Value.fromString(tokenName))
  )
  unregisteredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenSymbol",
      ethereum.Value.fromString(tokenSymbol)
    )
  )
  unregisteredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenDecimals",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(tokenDecimals))
    )
  )
  unregisteredEvent.parameters.push(
    new ethereum.EventParam(
      "tokenAddress",
      ethereum.Value.fromAddress(tokenAddress)
    )
  )

  return unregisteredEvent
}
