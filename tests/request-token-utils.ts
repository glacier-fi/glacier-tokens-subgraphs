import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, Address } from "@graphprotocol/graph-ts"
import {
  Initialized,
  RequestAdded,
  RequestCancelled,
  RequestConfirmed,
  RequestRejected,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/RequestToken/RequestToken"

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createRequestAddedEvent(request: ethereum.Tuple): RequestAdded {
  let requestAddedEvent = changetype<RequestAdded>(newMockEvent())

  requestAddedEvent.parameters = new Array()

  requestAddedEvent.parameters.push(
    new ethereum.EventParam("request", ethereum.Value.fromTuple(request))
  )

  return requestAddedEvent
}

export function createRequestCancelledEvent(
  request: ethereum.Tuple
): RequestCancelled {
  let requestCancelledEvent = changetype<RequestCancelled>(newMockEvent())

  requestCancelledEvent.parameters = new Array()

  requestCancelledEvent.parameters.push(
    new ethereum.EventParam("request", ethereum.Value.fromTuple(request))
  )

  return requestCancelledEvent
}

export function createRequestConfirmedEvent(
  request: ethereum.Tuple
): RequestConfirmed {
  let requestConfirmedEvent = changetype<RequestConfirmed>(newMockEvent())

  requestConfirmedEvent.parameters = new Array()

  requestConfirmedEvent.parameters.push(
    new ethereum.EventParam("request", ethereum.Value.fromTuple(request))
  )

  return requestConfirmedEvent
}

export function createRequestRejectedEvent(
  request: ethereum.Tuple
): RequestRejected {
  let requestRejectedEvent = changetype<RequestRejected>(newMockEvent())

  requestRejectedEvent.parameters = new Array()

  requestRejectedEvent.parameters.push(
    new ethereum.EventParam("request", ethereum.Value.fromTuple(request))
  )

  return requestRejectedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}
