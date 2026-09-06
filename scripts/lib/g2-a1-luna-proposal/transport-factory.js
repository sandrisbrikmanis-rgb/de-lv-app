#!/usr/bin/env node
"use strict";

const { RUNTIME_MODES } = require("./runtime-mode");
const { createMockLunaTransport } = require("./mock-transport");
const { createRealLunaTransport } = require("./real-transport");
const { assertAuthorizedRuntimeReceipt } = require("./runtime-gates");

function createLunaTransport({ authorizedRuntimeReceipt, fixtureMap = {} } = {}) {
  if (!authorizedRuntimeReceipt) {
    const err = new Error("REAL_LUNA_RUNTIME_AUTHORIZATION_REQUIRED");
    err.code = "REAL_LUNA_RUNTIME_AUTHORIZATION_REQUIRED";
    throw err;
  }
  if (authorizedRuntimeReceipt.mode === RUNTIME_MODES.MOCK_DRY_RUN) {
    return createMockLunaTransport(fixtureMap, authorizedRuntimeReceipt);
  }
  if (authorizedRuntimeReceipt.mode === RUNTIME_MODES.REAL_LUNA) {
    return createRealLunaTransport(authorizedRuntimeReceipt);
  }
  const err = new Error(`RUNTIME_RECEIPT_MODE_MISMATCH:${authorizedRuntimeReceipt.mode}`);
  err.code = "RUNTIME_RECEIPT_MODE_MISMATCH";
  throw err;
}

function assertTransportReceipt(transport, expectedMode) {
  assertAuthorizedRuntimeReceipt(transport?.authorizedRuntimeReceipt, expectedMode);
  if (expectedMode === RUNTIME_MODES.MOCK_DRY_RUN && transport.mode !== "MOCK") {
    throw new Error("MOCK_RECEIPT_REQUIRED_FOR_MOCK_TRANSPORT");
  }
  if (expectedMode === RUNTIME_MODES.REAL_LUNA && transport.mode !== "REAL_LUNA") {
    throw new Error("REAL_RECEIPT_REQUIRED_FOR_REAL_TRANSPORT");
  }
}

module.exports = { createLunaTransport, assertTransportReceipt };
