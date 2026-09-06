#!/usr/bin/env node
"use strict";

const { PROGRESS_SCHEMA_VERSION } = require("./constants");
const { writeJsonAtomic, readJsonFileIfExists } = require("./atomic-io");

function progressFilePath(runId) {
  return require("./constants").progressPath(runId);
}

function createInitialProgress(runId, scopes) {
  const lunaScopes = scopes.filter((s) => s.lunaApplicable);
  return {
    schemaVersion: PROGRESS_SCHEMA_VERSION,
    runId,
    status: "IN_PROGRESS",
    startedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    heartbeatAt: new Date().toISOString(),
    scopesExpected: lunaScopes.length,
    scopesStarted: 0,
    scopesCompleted: 0,
    scopeAttemptSequence: 0,
    currentScopeId: null,
    batchesExpected: 0,
    batchesCompleted: 0,
    lastSuccessfulBatchId: null,
    objectsExpected: 0,
    objectsProcessed: 0,
    objectsReturned: 0,
    realCalls: 0,
    tokensUsed: 0,
    retries: 0,
    resumedBatches: 0,
    skippedBatches: 0,
    repeatedBatches: 0,
    missing: 0,
    duplicates: 0,
    malformed: 0,
    lastError: null,
  };
}

function updateProgressAtomic(runId, patch) {
  const target = progressFilePath(runId);
  const current = require("./atomic-io").readJsonFileIfExists(target) || createInitialProgress(runId, []);
  const next = {
    ...current,
    ...patch,
    updatedAt: new Date().toISOString(),
    heartbeatAt: new Date().toISOString(),
  };
  writeJsonAtomic(target, next);
  return next;
}

function touchHeartbeat(runId, extra = {}) {
  return updateProgressAtomic(runId, extra);
}

function formatProgressLine(progress) {
  const elapsedMs = Date.now() - new Date(progress.startedAt).getTime();
  const elapsedSec = Math.floor(elapsedMs / 1000);
  const attemptSeq = progress.scopeAttemptSequence ?? progress.scopesCompleted ?? 0;
  const uniqueComplete = progress.uniqueScopesComplete;
  const uniqueCoverage =
    uniqueComplete != null && progress.scopesExpected
      ? `uniqueComplete ${uniqueComplete}/${progress.scopesExpected}`
      : null;
  return [
    `scopeAttemptSequence ${attemptSeq}`,
    uniqueCoverage,
    `currentScope ${progress.currentScopeId || "—"}`,
    `batch ${progress.batchesCompleted}/${progress.batchesExpected}`,
    `objects ${progress.objectsProcessed}/${progress.objectsExpected}`,
    `realCalls ${progress.realCalls}`,
    `tokensUsed ${progress.tokensUsed}`,
    `retries ${progress.retries}`,
    `elapsed ${elapsedSec}s`,
    `updatedAt ${progress.updatedAt}`,
  ]
    .filter(Boolean)
    .join(" | ");
}

module.exports = {
  createInitialProgress,
  updateProgressAtomic,
  touchHeartbeat,
  formatProgressLine,
};
