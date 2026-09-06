#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { writeJsonAtomic, readJsonFile, readJsonFileIfExists, listCheckpointFiles } = require("../phase1-luna-checkpoint/atomic-io");
const { CHECKPOINT_SCHEMA_VERSION, checkpointFilePath, runDir } = require("./constants");
const { hashSortedList } = require("./hash");

function buildCheckpoint({
  runId,
  queueKind,
  batch,
  normalizedItems,
  transport,
  realCalls,
  retries,
  tokensUsed,
  lastError,
  startedAt,
  endedAt = new Date().toISOString(),
}) {
  const returnedIds = normalizedItems.map((i) => i.taskId);
  return {
    schemaVersion: CHECKPOINT_SCHEMA_VERSION,
    runId,
    queueKind,
    batchId: batch.batchId,
    batchIndex: batch.batchIndex,
    expectedTaskIds: batch.taskIds,
    expectedIdsHash: batch.expectedIdsHash,
    requestInputHash: batch.requestInputHash,
    returnedTaskIds: returnedIds,
    normalizedItems,
    status: lastError ? "FAILED" : "PASS",
    transport,
    realCalls,
    retries,
    tokensUsed,
    lastError,
    startedAt,
    endedAt,
  };
}

function validateCheckpoint(checkpoint, batch) {
  const issues = [];
  if (!checkpoint) return { ok: false, issues: ["CHECKPOINT_MISSING"] };
  if (checkpoint.batchId !== batch.batchId) issues.push("BATCH_ID_MISMATCH");
  if (checkpoint.expectedIdsHash !== batch.expectedIdsHash) issues.push("EXPECTED_IDS_HASH_MISMATCH");
  if (checkpoint.requestInputHash !== batch.requestInputHash) issues.push("REQUEST_INPUT_HASH_MISMATCH");
  if (hashSortedList(checkpoint.returnedTaskIds || []) !== hashSortedList(batch.taskIds)) {
    issues.push("RETURNED_IDS_MISMATCH");
  }
  if (checkpoint.status !== "PASS") issues.push(`STATUS_NOT_PASS:${checkpoint.status}`);
  return { ok: issues.length === 0, issues };
}

function saveCheckpoint(runId, queueKind, checkpoint) {
  const filePath = checkpointFilePath(runId, queueKind, checkpoint.batchId);
  writeJsonAtomic(filePath, checkpoint);
  const reread = readJsonFile(filePath);
  const v = validateCheckpoint(reread, {
    batchId: checkpoint.batchId,
    expectedIdsHash: checkpoint.expectedIdsHash,
    requestInputHash: checkpoint.requestInputHash,
    taskIds: checkpoint.expectedTaskIds,
  });
  if (!v.ok) {
    fs.unlinkSync(filePath);
    const err = new Error(`Checkpoint validation failed after write: ${v.issues.join(",")}`);
    err.code = "CHECKPOINT_WRITE_VALIDATION_FAILED";
    throw err;
  }
  return filePath;
}

function loadCheckpoint(runId, queueKind, batchId) {
  return readJsonFileIfExists(checkpointFilePath(runId, queueKind, batchId));
}

function listRunCheckpoints(runId, queueKind) {
  const dir = path.dirname(checkpointFilePath(runId, queueKind, "placeholder"));
  if (!fs.existsSync(dir)) return [];
  return listCheckpointFiles(dir).map((f) => readJsonFile(path.join(dir, f)));
}

function detectCheckpointIntegrity(runId, batchPlan) {
  const valid = [];
  const corrupt = [];
  const orphan = [];
  const missing = [];

  const expected = new Map();
  for (const batch of batchPlan.batches) {
    expected.set(`${batch.queueKind}\t${batch.batchId}`, batch);
  }

  const seen = new Set();
  for (const batch of batchPlan.batches) {
    const cp = loadCheckpoint(runId, batch.queueKind, batch.batchId);
    if (!cp) {
      missing.push(batch.batchId);
      continue;
    }
    seen.add(`${batch.queueKind}\t${batch.batchId}`);
    const v = validateCheckpoint(cp, batch);
    if (v.ok) valid.push(cp);
    else corrupt.push({ batchId: batch.batchId, issues: v.issues, checkpoint: cp });
  }

  for (const file of walkCheckpoints(runId)) {
    if (!expected.has(file.key)) orphan.push(file);
  }

  return { valid, corrupt, orphan, missing };
}

function walkCheckpoints(runId) {
  const root = path.join(runDir(runId), "checkpoints");
  const out = [];
  if (!fs.existsSync(root)) return out;
  for (const queueKind of fs.readdirSync(root)) {
    const dir = path.join(root, queueKind);
    for (const name of listCheckpointFiles(dir)) {
      out.push({ key: `${queueKind}\t${name.replace(/\.json$/, "")}`, path: path.join(dir, name) });
    }
  }
  return out;
}

module.exports = {
  buildCheckpoint,
  validateCheckpoint,
  saveCheckpoint,
  loadCheckpoint,
  listRunCheckpoints,
  detectCheckpointIntegrity,
};
