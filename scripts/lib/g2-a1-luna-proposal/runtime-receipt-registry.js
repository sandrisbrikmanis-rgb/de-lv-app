#!/usr/bin/env node
"use strict";

/** Process-local registry of REAL_LUNA receipts issued by authorizeRuntimeExecution(). */
const issuedRealLunaReceipts = new WeakSet();

function registerIssuedRealLunaReceipt(receipt) {
  Object.freeze(receipt);
  issuedRealLunaReceipts.add(receipt);
  return receipt;
}

function isIssuedRealLunaReceipt(receipt) {
  return issuedRealLunaReceipts.has(receipt);
}

module.exports = {
  registerIssuedRealLunaReceipt,
  isIssuedRealLunaReceipt,
};
