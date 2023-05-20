import {
  RequestAdded as RequestAddedEvent,
  RequestCancelled as RequestCancelledEvent,
  RequestConfirmed as RequestConfirmedEvent,
  RequestRejected as RequestRejectedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
} from "../generated/RequestToken/RequestToken";
import {
  RequestAdded,
  RequestCancelled,
  RequestConfirmed,
  RequestRejected,
} from "../generated/schema";

export function handleRequestAdded(event: RequestAddedEvent): void {
  let entity = new RequestAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.request_nonce = event.params.request.nonce;
  entity.request_requestType = event.params.request.requestType;
  entity.request_requester = event.params.request.requester;
  entity.request_amount = event.params.request.amount;
  entity.request_blockhash = event.params.request.blockhash;
  entity.request_status = event.params.request.status;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRequestCancelled(event: RequestCancelledEvent): void {
  let entity = new RequestCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.request_nonce = event.params.request.nonce;
  entity.request_requestType = event.params.request.requestType;
  entity.request_requester = event.params.request.requester;
  entity.request_amount = event.params.request.amount;
  entity.request_blockhash = event.params.request.blockhash;
  entity.request_status = event.params.request.status;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRequestConfirmed(event: RequestConfirmedEvent): void {
  let entity = new RequestConfirmed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.request_nonce = event.params.request.nonce;
  entity.request_requestType = event.params.request.requestType;
  entity.request_requester = event.params.request.requester;
  entity.request_amount = event.params.request.amount;
  entity.request_blockhash = event.params.request.blockhash;
  entity.request_status = event.params.request.status;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRequestRejected(event: RequestRejectedEvent): void {
  let entity = new RequestRejected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.request_nonce = event.params.request.nonce;
  entity.request_requestType = event.params.request.requestType;
  entity.request_requester = event.params.request.requester;
  entity.request_amount = event.params.request.amount;
  entity.request_blockhash = event.params.request.blockhash;
  entity.request_status = event.params.request.status;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
