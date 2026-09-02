#!/usr/bin/env node
"use strict";

const fs = require("fs");
const { CHECKPOINT_SCHEMA_VERSION } = require("./constants");
const { writeJsonAtomic, readJsonFile, readJsonFileIfExists, listCheckpointFiles } = require("./atomic-io");
const { hashSortedList, hashRequestInput, stableBatchId } = require("./hash");
const { normalizeLunaItemsToFindings } = require("./findings");
const {
  buildCanonicalToLegacyIdMap,
  mapResponseItemsToLegacyIds,
} = require("./object-identity");
const {
  validateCheckpointRequestInputHash,
  REQUEST_HASH_V1_CHECKPOINT_PAYLOAD,
  REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD,
} = require("./request-hash");

function checkpointFileFor(runId, scopeId, batchId) {
  return require("./constants").checkpointFilePath(runId, scopeId, batchId);
}

function checkpointDirFor(runId, scopeId) {
  return require("./constants").checkpointDir(runId, scopeId);
}

function buildExternalBatchValidationContext({
  runId,
  scopeId,
  batchIndex,
  expectedObjects,
  getId,
  requestPayload,
}) {
  const expectedIds = expectedObjects.map(getId);
  return {
    expectedRunId: runId,
    scopeId,
    batchIndex,
    expectedIds,
    requestInputHash: hashRequestInput(requestPayload),
    batchId: stableBatchId(scopeId, batchIndex, expectedIds),
  };
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
  const idMapResult = buildCanonicalToLegacyIdMap(scopeId, expectedObjects, getId);
  if (!idMapResult.ok) {
    const err = new Error(`Canonical ID map failed: ${idMapResult.issues.join(",")}`);
    err.code = "CANONICAL_ID_MAP_FAILED";
    err.issues = idMapResult.issues;
    throw err;
  }

  const mapping = mapResponseItemsToLegacyIds(
    rawResult?.items || [],
    idMapResult.map,
    idMapResult.orderedCanonicalIds,
  );
  if (!mapping.ok) {
    const err = new Error(`Legacy ID mapping failed: ${mapping.issues.join(",")}`);
    err.code = "LEGACY_ID_MAPPING_FAILED";
    err.issues = mapping.issues;
    throw err;
  }

  for (let i = 0; i < expectedIds.length; i += 1) {
    if (mapping.legacyIds[i] !== expectedIds[i]) {
      const err = new Error("Legacy ID position mismatch after canonical mapping");
      err.code = "LEGACY_ID_POSITION_MISMATCH";
      err.issues = ["RETURNED_ID_POSITION_MISMATCH"];
      throw err;
    }
  }

  const batchId = stableBatchId(scopeId, batchIndex, expectedIds);
  const canonicalToLegacyIdMap = Object.fromEntries(idMapResult.map);

  return {
    schemaVersion: CHECKPOINT_SCHEMA_VERSION,
    runId,
    scopeId,
    batchId,
    batchIndex,
    expectedObjectIds: expectedIds,
    expectedIdsHash: hashSortedList(expectedIds),
    requestInputHash: hashRequestInput(requestPayload),
    returnedObjectIds: mapping.legacyIds,
    canonicalToLegacyIdMap,
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

function classifyCheckpointValidation(validation, checkpoint, context = {}) {
  const untrusted = require("../phase1-luna-untrusted-checkpoint-registry");
  const idMapping = require("../phase1-luna-id-mapping-checkpoint-registry");
  if (
    context.filePath &&
    untrusted.isUntrustedLocalPatchCheckpoint(context.filePath, {
      scopeId: context.scopeId,
      batchId: checkpoint?.batchId,
    })
  ) {
    return "UNTRUSTED_LOCAL_PATCH_RUN";
  }
  if (
    context.filePath &&
    idMapping.isUntrustedIdMappingCheckpoint(context.filePath, {
      scopeId: context.scopeId,
      batchId: checkpoint?.batchId,
    })
  ) {
    return "UNTRUSTED_ID_MAPPING_RUN";
  }
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
  if (requestInputHash || context.requestInputHashVersions) {
    const hashCheck = validateCheckpointRequestInputHash(checkpoint, {
      requestInputHash,
      canonicalRequestInputHash:
        context.requestInputHashVersions?.[REQUEST_HASH_V2_CANONICAL_LUNA_PAYLOAD],
      requestHashVersions: context.requestInputHashVersions,
    });
    if (!hashCheck.ok) issues.push("REQUEST_INPUT_HASH_MISMATCH");
  }
  if (!checkpoint.rawResult || !Array.isArray(checkpoint.rawResult.items)) issues.push("MALFORMED_RAW_RESULT");
  return { ok: issues.length === 0, issues };
}

function saveBatchCheckpoint(checkpoint, validationContext) {
  if (!validationContext || !validationContext.expectedIds) {
    const err = new Error("saveBatchCheckpoint requires external batch validation context");
    err.code = "EXTERNAL_BATCH_VALIDATION_REQUIRED";
    throw err;
  }

  const target = checkpointFileFor(checkpoint.runId, checkpoint.scopeId, checkpoint.batchId);
  const preWrite = validateBatchCheckpoint(checkpoint, validationContext);
  if (!preWrite.ok) {
    const err = new Error(`Checkpoint write blocked: ${preWrite.issues.join(",")}`);
    err.code = "CHECKPOINT_WRITE_BLOCKED";
    err.issues = preWrite.issues;
    throw err;
  }

  const hadExisting = fs.existsSync(target);
  const previousBytes = hadExisting ? fs.readFileSync(target) : null;

  try {
    writeJsonAtomic(target, checkpoint);
    const reread = readJsonFile(target);
    const postWrite = validateBatchCheckpoint(reread, validationContext);
    if (!postWrite.ok) {
      if (previousBytes !== null) {
        fs.writeFileSync(target, previousBytes);
      } else if (fs.existsSync(target)) {
        fs.unlinkSync(target);
      }
      const err = new Error(`Checkpoint post-write validation failed: ${postWrite.issues.join(",")}`);
      err.code = "CHECKPOINT_WRITE_VALIDATION_FAILED";
      err.issues = postWrite.issues;
      throw err;
    }
  } catch (error) {
    if (previousBytes !== null && fs.existsSync(target)) {
      fs.writeFileSync(target, previousBytes);
    }
    throw error;
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
  buildExternalBatchValidationContext,
  validateBatchCheckpoint,
  classifyCheckpointValidation,
  saveBatchCheckpoint,
  loadBatchCheckpoint,
  listScopeCheckpoints,
  loadConfirmedCheckpoints,
  stableBatchId,
};
