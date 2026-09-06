#!/usr/bin/env node
"use strict";

const crypto = require("crypto");

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value, "utf8").digest("hex");
}

function hashSortedList(items) {
  return sha256Hex([...items].sort().join("\n"));
}

function hashObject(value) {
  return sha256Hex(JSON.stringify(value));
}

function stableTaskId(taskKind, locale, crowdinKey) {
  const payload = `${taskKind}\t${locale}\t${crowdinKey}`;
  return `g2-a1-proposal-v1:${sha256Hex(payload).slice(0, 32)}`;
}

function stableBatchId(queueKind, batchIndex, taskIds) {
  const payload = `${queueKind}|${batchIndex}|${taskIds.join(",")}`;
  return `batch-${batchIndex}-${sha256Hex(payload).slice(0, 16)}`;
}

function unitKey(locale, crowdinKey) {
  return `${locale}\t${crowdinKey}`;
}

module.exports = {
  sha256Hex,
  hashSortedList,
  hashObject,
  stableTaskId,
  stableBatchId,
  unitKey,
};
