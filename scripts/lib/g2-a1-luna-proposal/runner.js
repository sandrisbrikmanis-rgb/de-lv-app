#!/usr/bin/env node
"use strict";

const fs = require("fs");
const { writeJsonAtomic } = require("../phase1-luna-checkpoint/atomic-io");
const {
  SCHEMA_VERSION,
  PROGRESS_SCHEMA_VERSION,
  manifestPath,
  progressPath,
  runDir,
  DEFAULT_RETRY,
} = require("./constants");
const { buildCheckpoint, saveCheckpoint, loadCheckpoint, validateCheckpoint } = require("./checkpoint");
const { hashObject } = require("./hash");
const { assertTransportReceipt } = require("./transport-factory");
const { RUNTIME_MODES } = require("./runtime-mode");

function buildRunManifest({ runId, gates, queues, batchPlan, transportMode }) {
  return {
    schemaVersion: SCHEMA_VERSION,
    runId,
    createdAt: new Date().toISOString(),
    transportMode,
    gates,
    queueCounts: queues.counts,
    batchPlanHash: hashObject(batchPlan),
    retryConfig: DEFAULT_RETRY,
  };
}

function buildProgress({ runId, batchPlan }) {
  return {
    schemaVersion: PROGRESS_SCHEMA_VERSION,
    runId,
    completedBatchIds: [],
    failedBatchIds: [],
    realCalls: 0,
    retries: 0,
    tokensUsed: 0,
    lastError: null,
    updatedAt: new Date().toISOString(),
  };
}

async function runProposalBatches({
  runId,
  gates,
  queues,
  batchPlan,
  transport,
  options = {},
}) {
  assertTransportReceipt(transport, transport.mode === "REAL_LUNA" ? RUNTIME_MODES.REAL_LUNA : RUNTIME_MODES.MOCK_DRY_RUN);
  if (!transport.authorizedRuntimeReceipt?.validated) {
    const err = new Error("REAL_LUNA_RUNTIME_AUTHORIZATION_REQUIRED");
    err.code = "REAL_LUNA_RUNTIME_AUTHORIZATION_REQUIRED";
    throw err;
  }
  fs.mkdirSync(runDir(runId), { recursive: true });
  writeJsonAtomic(manifestPath(runId), buildRunManifest({ runId, gates, queues, batchPlan, transportMode: transport.mode }));
  const progress = buildProgress({ runId, batchPlan });
  writeJsonAtomic(progressPath(runId), progress);

  const maxRetries = options.maxRetries ?? DEFAULT_RETRY.maxRetries;
  const results = [];

  for (const batch of batchPlan.batches) {
    const existing = loadCheckpoint(runId, batch.queueKind, batch.batchId);
    if (existing) {
      const v = validateCheckpoint(existing, batch);
      if (v.ok) {
        progress.completedBatchIds.push(batch.batchId);
        results.push({ batchId: batch.batchId, skipped: true, checkpoint: existing });
        continue;
      }
    }

    const tasks = batch.tasks || batch.items;

    let lastError = null;
    let normalizedItems = [];
    let attempt = 0;
    const startedAt = new Date().toISOString();

    while (attempt <= maxRetries) {
      try {
        const response = await transport.executeBatch(batch, tasks);
        progress.realCalls += response.realCalls || 0;
        progress.retries += response.retries || 0;
        progress.tokensUsed += response.tokensUsed || 0;
        normalizedItems = response.items;
        lastError = null;
        break;
      } catch (err) {
        lastError = err.message;
        progress.retries += 1;
        attempt += 1;
        if (attempt > maxRetries) break;
      }
    }

    const checkpoint = buildCheckpoint({
      runId,
      queueKind: batch.queueKind,
      batch,
      normalizedItems,
      transport: transport.mode,
      realCalls: transport.stats?.realCalls || 0,
      retries: progress.retries,
      tokensUsed: progress.tokensUsed,
      lastError,
      startedAt,
    });

    if (lastError) {
      progress.failedBatchIds.push(batch.batchId);
      progress.lastError = lastError;
      writeJsonAtomic(progressPath(runId), { ...progress, updatedAt: new Date().toISOString() });
      results.push({ batchId: batch.batchId, failed: true, lastError });
      break;
    }

    saveCheckpoint(runId, batch.queueKind, checkpoint);
    progress.completedBatchIds.push(batch.batchId);
    progress.lastError = null;
    writeJsonAtomic(progressPath(runId), { ...progress, updatedAt: new Date().toISOString() });
    results.push({ batchId: batch.batchId, checkpoint });
  }

  return { runId, progress, results };
}

module.exports = { buildRunManifest, buildProgress, runProposalBatches };
