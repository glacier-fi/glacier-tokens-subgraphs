import {
  assert,
  describe,
  test,
  beforeAll,
  clearStore,
  afterAll,
} from "matchstick-as/assembly/index";
import { Address } from "@graphprotocol/graph-ts";

import {
  createRegisteredEvent,
  createUnregisteredEvent,
} from "./request-token-registry-utils";

import {
  handleRegistered,
  handleUnregistered,
} from "../src/request-token-registry";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Request token registry", () => {
  beforeAll(() => {
    let newRegisteredEvent = createRegisteredEvent(
      Address.fromString("0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968"),
      "Token Test",
      "TTST",
      8,
      Address.fromString("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512")
    );

    handleRegistered(newRegisteredEvent);
  });
  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("RegisteredEvent created and stored", () => {
    assert.entityCount("RequestToken", 1);
    assert.entityCount("GlacierToken", 1);

    assert.fieldEquals(
      "GlacierToken",
      "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512".toLowerCase(),
      "symbol",
      "TTST"
    );
  });

  test("UnregisteredEvent created and stored", () => {
    let newUnregisteredEvent = createUnregisteredEvent(
      Address.fromString("0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968"),
      "Token Test",
      "TTST",
      8,
      Address.fromString("0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512")
    );
    assert.entityCount("RequestToken", 1);
    assert.entityCount("GlacierToken", 1);
    handleUnregistered(newUnregisteredEvent);
    assert.fieldEquals(
      "RequestToken",
      "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968".toLowerCase(),
      "active",
      "false"
    );
  });
});
