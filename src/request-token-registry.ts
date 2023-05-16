import { Bytes } from "@graphprotocol/graph-ts";
import {
  Registered as RegisteredEvent,
  Unregistered as UnregisteredEvent,
} from "../generated/RequestTokenRegistry/RequestTokenRegistry";
import { RequestToken, GlacierToken } from "../generated/schema";
import {
  RequestToken as RequestTokenImpl,
  GlacierToken as GlacierTokenIpml,
} from "../generated/templates";

let getRequestToken = (address: Bytes): RequestToken => {
  let requestToken = RequestToken.load(address.toHexString());

  if (!requestToken) {
    requestToken = new RequestToken(address.toHexString());
    requestToken.active = true;
  }

  return requestToken;
};

let getGlacierToken = (address: Bytes): GlacierToken => {
  let glacierToken = GlacierToken.load(address.toHexString());

  if (!glacierToken) {
    glacierToken = new GlacierToken(address.toHexString());
  }

  return glacierToken;
};

export function handleRegistered(event: RegisteredEvent): void {
  let requestToken = getRequestToken(event.params.requestToken);
  let glacierToken = getGlacierToken(event.params.tokenAddress);

  glacierToken.name = event.params.tokenName;
  glacierToken.symbol = event.params.tokenSymbol;
  glacierToken.decimals = event.params.tokenDecimals;
  glacierToken.requestToken = requestToken.id;

  requestToken.glacierToken = glacierToken.id;

  RequestTokenImpl.create(event.params.requestToken);
  GlacierTokenIpml.create(event.params.tokenAddress);

  glacierToken.save();
  requestToken.save();
}

export function handleUnregistered(event: UnregisteredEvent): void {
  let address = event.params.requestToken.toHexString();
  let requestToken = RequestToken.load(address);
  if (requestToken != null) {
    requestToken.active = false;
    requestToken.save();
  }
}
