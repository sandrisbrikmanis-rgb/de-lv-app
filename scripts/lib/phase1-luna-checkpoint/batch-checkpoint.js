#!/usr/bin/env node
"use strict";

const { CHECKPOINT_SCHEMA_VERSION } = require("./constants");
const { writeJsonAtomic, readJsonFile, readJsonFileIfExists, listCheckpointFiles } = require("./atomic-io");
const { hashSortedList, hashRequestInput, stableBatchId } = require("./hash");
const { normalizeLunaItemsToFindings } = require("./findings");
const { resolveLegacyObjectId } = require("./object-identity");

function checkpointFileFor(runId, scopeId, batchId) {
  return require("./constants").checkpointFilePath(runId, scopeId, batchId);
}

function checkpointDirFor(runId, scopeId) {
  return require("./constants").checkpointDir(runId, scopeId);
}

function buildBatchCheckpoint({
  runId,
  scopeId,
  batchIndex,
  expectedObjects,
  getId,
  requestPayload,
  rawResult,
  normalizedFindings,
  attemptCount,
  tokensUsed,
  model,
  transport,
  startedAt,
  endedAt = new Date().toISOString(),
}) {
  const expectedIds = expectedObjects.map(getId);
  const returnedIds = (rawResult?.items || []).map((item) => resolveLegacyObjectId(item));
  const batchId = stableBatchId(scopeId, batchIndex, expectedIds);

  return {
    schemaVersion: CHECKPOINT_SCHEMA_VERSION,
    runId,
    scopeId,
    batchId,
    batchIndex,
    expectedObjectIds: expectedIds,
    expectedIdsHash: hashSortedList(expectedIds),
    requestInputHash: hashRequestInput(requestPayload),
    returnedObjectIds: returnedIds,
    rawResult,
    normalizedFindings,
    attemptCount,
    tokensUsed: tokensUsed || 0,
    startedAt,
    endedAt,
    model,
    transport,
    status: "PASS",
  };
}

function classifyCheckpointValidation(validation, checkpoint) {
  if (!checkpoint || typeof checkpoint !== "object") return "CORRUPT";
  if (checkpoint.status === "CORRUPT") return "CORRUPT";
  if (checkpoint.status !== "PASS") return "PARTIAL";
  if (validation.ok) return "VALID_PASS";
  const issues = validation.issues || [];
  if (issues.length === 1 && issues[0] === "RETURNED_ID_POSITION_MISMATCH") {
    return "RESUMABLE_INVALID";
  }
  return "CORRUPT";
}

function validateBatchCheckpoint(checkpoint, context = {}) {
  const { expectedRunId, scopeId, batchIndex, expectedIds, requestInputHash } = context;
  const issues = [];
  if (!checkpoint || typeof checkpoint !== "object") {
    return { ok: false, issues: ["CHECKPOINT_MISSING_OR_INVALID"] };
  }
  if (checkpoint.schemaVersion !== CHECKPOINT_SCHEMA_VERSION) issues.push("CHECKPOINT_SCHEMA_MISMATCH");
  if (checkpoint.status !== "PASS") issues.push("CHECKPOINT_NOT_PASS");
  if (expectedRunId && checkpoint.runId !== expectedRunId) issues.push("RUN_ID_MISMATCH");
  if (scopeId && checkpoint.scopeId !== scopeId) issues.push("SCOPE_ID_MISMATCH");
  if (typeof batchIndex === "number" && checkpoint.batchIndex !== batchIndex) issues.push("BATCH_INDEX_MISMATCH");
  if (expectedIds) {
    const expectedHash = hashSortedList(expectedIds);
    if (checkpoint.expectedIdsHash !== expectedHash) issues.push("EXPECTED_IDS_HASH_MISMATCH");
    const returned = checkpoint.returnedObjectIds || [];
    if (returned.length !== expectedIds.length) issues.push("RETURNED_COUNT_MISMATCH");
    for (let i = 0; i < expectedIds.length; i += 1) {
      if (returned[i] !== expectedIds[i]) {
        issues.push("RETURNED_ID_POSITION_MISMATCH");
        break;
      }
    }
  }
  if (requestInputHash && checkpoint.requestInputHash !== requestInputHash) issues.push("REQUEST_INPUT_HASH_MISMATCH");
  if (!checkpoint.rawResult || !Array.isArray(checkpoint.rawResult.items)) issues.push("MALFORMED_RAW_RESULT");
  return { ok: issues.length === 0, issues };
}

function saveBatchCheckpoint(checkpoint) {
  const target = checkpointFileFor(checkpoint.runId, checkpoint.scopeId, checkpoint.batchId);
  writeJsonAtomic(target, checkpoint);
  const validation = validateBatchCheckpoint(checkpoint);
  if (!validation.ok) {
    const err = new Error(`Checkpoint validation failed after write: ${validation.issues.join(",")}`);
    err.code = "CHECKPOINT_WRITE_VALIDATION_FAILED";
    throw err;
  }
  return target;
}

function loadBatchCheckpoint(runId, scopeId, batchId) {
  const file = checkpointFileFor(runId, scopeId, batchId);
  if (!readJsonFileIfExists(file)) return null;
  try {
    return readJsonFile(file);
  } catch (_) {
    return null;
  }
}

function listScopeCheckpoints(runId, scopeId) {
  const dir = checkpointDirFor(runId, scopeId);
  const files = listCheckpointFiles(dir);
  const checkpoints = [];
  for (const file of files) {
    try {
      const cp = readJsonFile(file);
      checkpoints.push(cp);
    } catch (_) {
      checkpoints.push({ status: "CORRUPT", file });
    }
  }
  return checkpoints.sort((a, b) => (a.batchIndex ?? 0) - (b.batchIndex ?? 0));
}

function loadConfirmedCheckpoints(runId, scopeId, validationContext = {}) {
  const checkpoints = listScopeCheckpoints(runId, scopeId);
  const confirmed = [];
  for (const cp of checkpoints) {
    const validation = validateBatchCheckpoint(cp, {
      expectedRunId: runId,
      scopeId,
      batchIndex: cp.batchIndex,
      expectedIds: cp.expectedObjectIds,
      requestInputHash: cp.requestInputHash,
      ...validationContext,
    });
    if (validation.ok && cp.status === "PASS") confirmed.push(cp);
  }
  return confirmed;
}

module.exports = {
  buildBatchCheckpoint,
  validateBatchCheckpoint,
  classifyCheckpointValidation,
  saveBatchCheckpoint,
  loadBatchCheckpoint,
  listScopeCheckpoints,
  loadConfirmedCheckpoints,
  stableBatchId,
};
