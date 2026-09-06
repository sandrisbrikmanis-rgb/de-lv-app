#!/usr/bin/env node
"use strict";

const { RUNTIME_MODES } = require("./runtime-mode");
const { assertAuthorizedRuntimeReceipt } = require("./runtime-gates");

function createRealLunaTransport(authorizedRuntimeReceipt) {
  const receipt = assertAuthorizedRuntimeReceipt(authorizedRuntimeReceipt, RUNTIME_MODES.REAL_LUNA);
  if (!receipt.executable) {
    const err = new Error("REAL_LUNA_RUNTIME_AUTHORIZATION_REQUIRED");
    err.code = "REAL_LUNA_RUNTIME_AUTHORIZATION_REQUIRED";
    throw err;
  }

  const stats = { realCalls: 0, retries: 0, tokensUsed: 0 };
  return {
    mode: "REAL_LUNA",
    authorizedRuntimeReceipt: receipt,
    stats,
    async executeBatch() {
      const err = new Error("REAL_LUNA_TRANSPORT_NOT_ENABLED_IN_THIS_BUILD");
      err.code = "REAL_LUNA_TRANSPORT_NOT_ENABLED_IN_THIS_BUILD";
      throw err;
    },
  };
}

module.exports = { createRealLunaTransport };
