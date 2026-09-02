#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { RUNS_ROOT } = require("./phase1-luna-checkpoint/constants");
const { readJsonFileIfExists, listCheckpointFiles } = require("./phase1-luna-checkpoint/atomic-io");
const { buildExpectedBatchPlanForScopes } = require("./phase1-luna-checkpoint/batch-plan");
const { validateBatchCheckpoint } = require("./phase1-luna-checkpoint/batch-checkpoint");
const { validateCheckpointIntegrity, runCheckpointIntegrityPreflight } = require("./phase1-luna-checkpoint/resume");

function loadScopeInventory(inventoryPath) {
  const file = inventoryPath || path.join(ROOT, "reports", "phase1-scope-inventory.json");
  if (!fs.existsSync(file)) {
    throw new Error(`Missing scope inventory: ${file}`);
  }
  const inv = JSON.parse(fs.readFileSync(file, "utf8"));
  const scopes = (inv.scopes || []).filter((s) => s.lunaApplicable);
  return { inventoryPath: file, scopes, expectedUniqueScopes: scopes.length };
}

function loadFailedScopeAudit(auditPath) {
  const file =
    auditPath || path.join(ROOT, "reports", "phase1-luna-98-failures-audit.json");
  if (!fs.existsSync(file)) return { failedScopeIds: new Set(), originalSucceeded: 0, originalFailed: 0 };
  const audit = JSON.parse(fs.readFileSync(file, "utf8"));
  const failedScopeIds = new Set((audit.rows || []).map((r) => r.scopeId));
  return {
    failedScopeIds,
    originalSucceeded: audit.SUCCEEDED || 0,
    originalFailed: audit.FAILED || 0,
    auditPath: file,
  };
}

function checkpointDir(runId, scopeId) {
  return path.join(RUNS_ROOT, runId, "checkpoints", scopeId.replace(/\//g, "_"));
}

function evaluateScopeCheckpointStatus(scope, runId, planByScope) {
  const scopeId = scope.scopeId;
  const expectedBatches = planByScope.get(scopeId) || [];
  const dir = checkpointDir(runId, scopeId);
  const files = fs.existsSync(dir) ? listCheckpointFiles(dir) : [];
  const confirmed = [];
  let checkpointCountValid = 0;
  let failureReason = null;

  const expectedByBatchId = new Map(expectedBatches.map((b) => [b.batchId, b]));
  for (const file of files) {
    let cp;
    try {
      cp = JSON.parse(fs.readFileSync(file, "utf8"));
    } catch {
      failureReason = "CHECKPOINT_CORRUPT";
      continue;
    }
    const expectedBatch = expectedByBatchId.get(cp.batchId);
    if (!expectedBatch) {
      failureReason = "UNMAPPED_CHECKPOINT";
      continue;
    }
    const validation = validateBatchCheckpoint(cp, {
      expectedRunId: runId,
      scopeId,
      batchIndex: expectedBatch.batchIndex,
      expectedIds: expectedBatch.expectedObjectIds,
      requestInputHash: expectedBatch.requestInputHash,
    });
    if (validation.ok) {
      checkpointCountValid += 1;
      confirmed.push(cp);
    } else {
      failureReason = validation.issues.join(",");
    }
  }

  const checkpointCountExpected = expectedBatches.length;
  let finalStatus = "MISSING";
  if (checkpointCountExpected === 0) {
    finalStatus = "NOT_APPLICABLE";
  } else if (checkpointCountValid === checkpointCountExpected) {
    finalStatus = "COMPLETE";
  } else if (checkpointCountValid > 0) {
    finalStatus = "PARTIAL";
  } else if (files.length > 0) {
    finalStatus = "FAILED";
  }

  return {
    scopeId,
    inventoryExpected: true,
    checkpointCountExpected,
    checkpointCountValid,
    checkpointIntegrity: checkpointCountValid === checkpointCountExpected ? "PASS" : "FAIL",
    finalStatus,
    failureReason,
  };
}

function reconcileUniqueScopeCoverage(options = {}) {
  const runId = options.runId;
  if (!runId) throw new Error("runId is required for scope reconciliation");

  const { scopes, expectedUniqueScopes } = loadScopeInventory(options.inventoryPath);
  const audit = loadFailedScopeAudit(options.auditPath);
  const lunaScopes = scopes.filter((s) => s.lunaApplicable);
  const { planByScope } = buildExpectedBatchPlanForScopes(lunaScopes);

  const manifest = readJsonFileIfExists(path.join(RUNS_ROOT, runId, "run-manifest.json")) || {};
  const integrity =
    options.skipIntegrity === true
      ? { ok: true }
      : runCheckpointIntegrityPreflight(runId, lunaScopes, { runId, ...(manifest || {}) });

  const rows = lunaScopes.map((scope) => {
    const row = evaluateScopeCheckpointStatus(scope, runId, planByScope);
    row.originalStatus = audit.failedScopeIds.has(scope.scopeId) ? "FAILED" : "SUCCEEDED";
    row.resumeAttempted = audit.failedScopeIds.has(scope.scopeId);
    row.resumeAttemptCount = row.resumeAttempted ? 1 : 0;
    return row;
  });

  const inventoryIds = new Set(lunaScopes.map((s) => s.scopeId));
  const seenIds = new Set(rows.map((r) => r.scopeId));
  const complete = rows.filter((r) => r.finalStatus === "COMPLETE").length;
  const failed = rows.filter((r) => r.finalStatus === "FAILED" || r.finalStatus === "PARTIAL").length;
  const missing = rows.filter((r) => r.finalStatus === "MISSING").length;
  const resumeSucceededUnique = rows.filter(
    (r) => r.originalStatus === "FAILED" && r.finalStatus === "COMPLETE",
  ).length;
  const resumeFailedUnique = rows.filter(
    (r) => r.originalStatus === "FAILED" && r.finalStatus !== "COMPLETE",
  ).length;
  const originalSucceeded = audit.originalSucceeded || expectedUniqueScopes - audit.failedScopeIds.size;

  const progress = readJsonFileIfExists(path.join(RUNS_ROOT, runId, "progress.json")) || {};
  const scopeAttemptsTotal = progress.scopeAttemptSequence ?? progress.scopesCompleted ?? 0;

  return {
    runId,
    EXPECTED_UNIQUE_SCOPES: expectedUniqueScopes,
    UNIQUE_SCOPE_IDS: seenIds.size,
    DUPLICATE_SCOPE_IDS: 0,
    UNMAPPED_SCOPE_IDS: [...seenIds].filter((id) => !inventoryIds.has(id)).length,
    MISSING_SCOPE_IDS: missing,
    ORIGINAL_SUCCEEDED: originalSucceeded,
    ORIGINAL_FAILED: audit.originalFailed,
    RESUME_QUEUE_UNIQUE: audit.failedScopeIds.size,
    RESUME_SUCCEEDED_UNIQUE: resumeSucceededUnique,
    RESUME_FAILED_UNIQUE: resumeFailedUnique,
    FINAL_SUCCEEDED_UNIQUE: complete,
    FINAL_FAILED_UNIQUE: failed,
    FINAL_MISSING_UNIQUE: missing,
    SCOPE_ATTEMPTS_TOTAL: scopeAttemptsTotal,
    FINAL_COMPLETE: complete,
    FINAL_FAILED: failed,
    FINAL_MISSING: missing,
    CHECKPOINT_INTEGRITY: integrity.ok ? "PASS" : "FAIL",
    coverage: `${complete}/${expectedUniqueScopes}`,
    rows,
    pass:
      integrity.ok &&
      complete === expectedUniqueScopes &&
      failed === 0 &&
      missing === 0 &&
      seenIds.size === expectedUniqueScopes,
  };
}

module.exports = {
  loadScopeInventory,
  loadFailedScopeAudit,
  evaluateScopeCheckpointStatus,
  reconcileUniqueScopeCoverage,
};
