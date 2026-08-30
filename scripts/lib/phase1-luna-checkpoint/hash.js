#!/usr/bin/env node
"use strict";

const crypto = require("crypto");

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value, "utf8").digest("hex");
}

function hashSortedList(items) {
  const sorted = [...items].sort();
  return sha256Hex(sorted.join("\n"));
}

function hashObject(value) {
  return sha256Hex(JSON.stringify(value));
}

function stableBatchId(scopeId, batchIndex, expectedIds) {
  const payload = `${scopeId}|${batchIndex}|${expectedIds.join(",")}`;
  return `batch-${batchIndex}-${sha256Hex(payload).slice(0, 16)}`;
}

function hashRequestInput(payload) {
  return sha256Hex(JSON.stringify(payload));
}

module.exports = {
  sha256Hex,
  hashSortedList,
  hashObject,
  stableBatchId,
  hashRequestInput,
};
