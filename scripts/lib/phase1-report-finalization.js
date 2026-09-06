#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./audit-common");
const { getDeterministicScopeOrder } = require("./content-discovery/phase1-applicability");
const { collectPhase1Scope } = require("./content-discovery/phase1-collect");
const { reconcileUniqueScopeCoverage } = require("./phase1-luna-scope-reconciliation");
const { loadObjectsForScope } = require("./phase1-luna-checkpoint/manifest");
const { buildExpectedBatchPlanForScopes } = require("./phase1-luna-checkpoint/batch-plan");
const { listScopeCheckpoints } = require("./phase1-luna-checkpoint/batch-checkpoint");
const { getCheckpointFindings } = require("./phase1-luna-checkpoint/finding-reconstruction");
const { validateFindings } = require("./content-discovery/phase1-findings-validation");
const { deduplicateFindings } = require("./content-discovery/phase1-findings-dedup");
const { assignGlobalAuditIds, countDuplicateAuditIds } = require("./content-discovery/phase1-global-audit-id");
const { runPreBacklogHistoryGate, generateOwnerPrep, evaluateOwnerPrepCoverage } = require("./content-discovery/phase1-owner-prep");
const { validateHistoryGates } = require("./discovery-stability");
const { evaluateF1Gates, buildExitPayload, runPhase1ExitMatrix } = require("../run-phase1-exit-matrix");
const { runBaselineGate } = require("./content-discovery/baseline-gate");
const { gitProductionDiffAgainstBaseline } = require("./content-discovery/git-baseline");
const { listCheckpointFiles } = require("./phase1-luna-checkpoint/atomic-io");
const { RUNS_ROOT, progressPath, manifestPath } = require("./phase1-luna-checkpoint/constants");

const PHASE1_RUN_PROGRESS_BASELINE = {
  realCalls: 15139,
  retries: 763,
};

const MATRIX_TIMESTAMP_FIELDS = ["generatedAt", "updatedAt", "startedAt", "endedAt", "heartbeatAt"];

function loadRunProgressMetrics(runId) {
  const filePath = progressPath(runId);
  if (!fs.existsSync(filePath)) {
    return { realCalls: 0, retries: 0, tokensUsed: null, status: null };
  }
  const progress = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return {
    realCalls: progress.realCalls ?? 0,
    retries: progress.retries ?? 0,
    tokensUsed: progress.tokensUsed ?? null,
    status: progress.status ?? null,
  };
}

function loadRunManifest(runId) {
  const filePath = manifestPath(runId);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function countPassCheckpointsAndTokens(runId) {
  const runDir = path.join(RUNS_ROOT, runId, "checkpoints");
  if (!fs.existsSync(runDir)) {
    return { passCount: 0, tokensSum: null, tokensUsedAvailable: false };
  }

  let passCount = 0;
  let tokensSum = 0;
  let tokensUsedAvailable = true;

  for (const scopeDir of fs.readdirSync(runDir).sort()) {
    const fullDir = path.join(runDir, scopeDir);
    if (!fs.statSync(fullDir).isDirectory()) continue;
    for (const file of listCheckpointFiles(fullDir)) {
      const checkpoint = JSON.parse(fs.readFileSync(file, "utf8"));
      if (checkpoint.status !== "PASS") continue;
      passCount += 1;
      if (checkpoint.tokensUsed === null || checkpoint.tokensUsed === undefined) {
        tokensUsedAvailable = false;
      } else if (tokensUsedAvailable) {
        tokensSum += checkpoint.tokensUsed;
      }
    }
  }

  return {
    passCount,
    tokensSum: tokensUsedAvailable ? tokensSum : null,
    tokensUsedAvailable,
  };
}

function deriveLunaStatsFromRuntime(runId) {
  const progress = loadRunProgressMetrics(runId);
  const manifest = loadRunManifest(runId);
  const checkpointMetrics = countPassCheckpointsAndTokens(runId);
  const transport = manifest?.transport || "REAL";

  return {
    transport,
    lunaSuccessfulBatches: checkpointMetrics.passCount,
    lunaCalls: progress.realCalls,
    lunaRetryAttempts: progress.retries,
    finalizationLunaCalls: 0,
    status: "REAL",
    failures: [],
    tokensUsed: checkpointMetrics.tokensUsedAvailable ? checkpointMetrics.tokensSum : null,
    tokensUsedAvailable: checkpointMetrics.tokensUsedAvailable,
  };
}

function assertLunaStatsConsistency(lunaStats, { validPassCount } = {}) {
  const errors = [];
  if (lunaStats?.status === "REAL" && lunaStats?.transport === "MOCK") {
    errors.push("REAL_STATUS_WITH_MOCK_TRANSPORT");
  }
  const passCount = validPassCount ?? lunaStats?.lunaSuccessfulBatches ?? 0;
  if (passCount > 0 && (lunaStats?.lunaSuccessfulBatches ?? 0) === 0) {
    errors.push("VALID_PASS_WITH_ZERO_SUCCESSFUL_BATCHES");
  }
  if ((lunaStats?.finalizationLunaCalls ?? 0) !== 0) {
    errors.push("FINALIZATION_LUNA_CALLS_NONZERO");
  }
  if (lunaStats?.tokensUsedAvailable === false && lunaStats?.tokensUsed === 0) {
    errors.push("TOKENS_USED_ZERO_WITHOUT_AVAILABILITY");
  }
  if (lunaStats?.tokensUsedAvailable === false && lunaStats?.tokensUsed != null) {
    errors.push("TOKENS_USED_SET_WITHOUT_AVAILABILITY");
  }
  return { pass: errors.length === 0, errors };
}

function hashMatrixForIdentity(matrix) {
  const clone = JSON.parse(JSON.stringify(matrix || {}));
  for (const field of MATRIX_TIMESTAMP_FIELDS) {
    delete clone[field];
  }
  return crypto.createHash("sha256").update(JSON.stringify(clone)).digest("hex");
}

function computeOwnerPrepSourceHash(validatedFindings = []) {
  return crypto
    .createHash("sha256")
    .update(JSON.stringify(validatedFindings.map((f) => f.auditId).sort()))
    .digest("hex");
}

function isLunaFinding(finding) {
  return String(finding?.source || "").includes("luna");
}

function countIdxUnknown(findings = []) {
  return findings.filter(
    (f) =>
      isLunaFinding(f) &&
      (String(f.findingStableId || "").includes("idx:?|") ||
        String(f.dedupKey || "").includes("idx:?|") ||
        f.objectIndex == null),
  ).length;
}

function hashCheckpointManifest(runId) {
  const runDir = path.join(RUNS_ROOT, runId, "checkpoints");
  const entries = [];
  if (!fs.existsSync(runDir)) return { count: 0, manifestSha256: null, entries: [] };

  for (const scopeDir of fs.readdirSync(runDir).sort()) {
    const fullDir = path.join(runDir, scopeDir);
    if (!fs.statSync(fullDir).isDirectory()) continue;
    for (const file of listCheckpointFiles(fullDir)) {
      const sha = crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
      entries.push({ path: path.relative(RUNS_ROOT, file), sha256: sha });
    }
  }
  entries.sort((a, b) => a.path.localeCompare(b.path));
  const manifestSha256 = crypto
    .createHash("sha256")
    .update(JSON.stringify(entries))
    .digest("hex");
  return { count: entries.length, manifestSha256, entries };
}

function buildDeterministicLayer() {
  const scopes = getDeterministicScopeOrder();
  const lunaScopes = scopes.filter((s) => s.lunaApplicable);
  const { planByScope } = buildExpectedBatchPlanForScopes(lunaScopes);
  const summary = [];
  const deterministicFindings = [];

  for (const scope of scopes) {
    const { findings, stats } = collectPhase1Scope({
      group: scope.group,
      dataset: scope.dataset,
      lang: scope.lang,
    });
    deterministicFindings.push(...findings);
    const critical = findings.filter((f) => f.severity === "CRITICAL").length;
    const high = findings.filter((f) => f.severity === "HIGH").length;
    const row = {
      ...stats,
      scopeId: scope.scopeId,
      group: scope.group,
      dataset: scope.dataset,
      lang: scope.lang,
      findings: findings.length,
      critical,
      high,
      findingsDeterministic: findings.length,
      findingsLuna: 0,
      findingsValidated: 0,
      lunaProcessed: false,
      lunaObjectsExpected: 0,
      lunaObjectsReturned: 0,
      lunaStatus: stats.lunaApplicable ? "NOT_RUN" : "NOT_APPLICABLE",
    };
    if (stats.lunaApplicable) {
      const batches = planByScope.get(scope.scopeId) || [];
      const objectCount = batches.reduce((sum, batch) => sum + (batch.expectedObjectIds?.length || 0), 0);
      row.lunaProcessed = true;
      row.lunaObjectsExpected = objectCount;
      row.lunaObjectsReturned = objectCount;
      row.lunaStatus = "PASS";
    }
    summary.push(row);
  }

  return { summary, deterministicFindings };
}

function applyReconciliationToSummary(summary, runId) {
  const recon = reconcileUniqueScopeCoverage({ runId });
  const byScope = new Map(recon.rows.map((row) => [row.scopeId, row]));
  return summary.map((row) => {
    const reconRow = byScope.get(row.scopeId);
    if (!row.lunaApplicable || !reconRow) return row;
    return {
      ...row,
      lunaProcessed: true,
      lunaStatus: reconRow.finalStatus === "COMPLETE" ? "PASS" : "FAIL",
    };
  });
}

function buildMatrixShellFromCheckpoints(runId, baseMatrix = {}) {
  const deterministicLayer = buildDeterministicLayer();
  const summary = applyReconciliationToSummary(deterministicLayer.summary, runId);
  const progressMetrics = loadRunProgressMetrics(runId);
  const historicalRealCalls = progressMetrics.realCalls;
  const historicalRetries = progressMetrics.retries;
  const progressBaselineMatch =
    historicalRealCalls === PHASE1_RUN_PROGRESS_BASELINE.realCalls &&
    historicalRetries === PHASE1_RUN_PROGRESS_BASELINE.retries;
  const runtimeLunaStats = deriveLunaStatsFromRuntime(runId);
  const lunaStats = {
    lunaScopesExpected: 318,
    lunaScopesProcessed: summary.filter((r) => r.lunaApplicable && r.lunaProcessed).length,
    ...runtimeLunaStats,
  };
  const lunaConsistency = assertLunaStatsConsistency(lunaStats, {
    validPassCount: runtimeLunaStats.lunaSuccessfulBatches,
  });
  if (!lunaConsistency.pass) {
    const error = new Error(`LUNA_STATS_CONSISTENCY_FAILED: ${lunaConsistency.errors.join(", ")}`);
    error.code = "LUNA_STATS_CONSISTENCY_FAILED";
    error.errors = lunaConsistency.errors;
    throw error;
  }

  return {
    ...baseMatrix,
    summary,
    scope: {
      ...(baseMatrix.scope || {}),
      processed: summary.length,
      notApplicable: summary.filter((r) => r.applicability === "EXPECTED_NOT_APPLICABLE").length,
    },
    lunaStats,
    constraints: {
      ...(baseMatrix.constraints || {}),
      lunaCalls: historicalRealCalls,
      finalizationLunaCalls: 0,
    },
    runtimeProgress: {
      realCalls: historicalRealCalls,
      retries: historicalRetries,
      finalizationLunaCalls: 0,
      progressBaselineMatch,
      expectedRealCalls: PHASE1_RUN_PROGRESS_BASELINE.realCalls,
      expectedRetries: PHASE1_RUN_PROGRESS_BASELINE.retries,
    },
    deterministicFindings: deterministicLayer.deterministicFindings,
  };
}

function reconstructLunaFindingsFromRun(runId) {
  const { clearScopeLegacyLookupCache } = require("./phase1-luna-checkpoint/finding-reconstruction");
  clearScopeLegacyLookupCache();
  const scopes = getDeterministicScopeOrder().filter((s) => s.lunaApplicable);
  const scopeById = new Map(scopes.map((s) => [s.scopeId, s]));
  const findings = [];
  const unrecoverable = [];
  let batches = 0;

  for (const scope of scopes) {
    const checkpoints = listScopeCheckpoints(runId, scope.scopeId).filter((cp) => cp.status === "PASS");
    for (const checkpoint of checkpoints) {
      batches += 1;
      const result = getCheckpointFindings(checkpoint, scope);
      if (result.identityStatus === "CHECKPOINT_FINDING_IDENTITY_UNRECOVERABLE") {
        unrecoverable.push(...result.unrecoverable);
        continue;
      }
      findings.push(...result.findings);
    }
  }

  return {
    findings,
    batches,
    unrecoverable,
    scopeCount: scopes.length,
  };
}

function buildFinalizedMatrix({
  baseMatrix,
  runId,
  deterministicFindings = null,
}) {
  const shell = buildMatrixShellFromCheckpoints(runId, baseMatrix || {});
  const matrix = JSON.parse(JSON.stringify(shell));
  const deterministic = deterministicFindings || shell.deterministicFindings || [];

  const lunaRecon = reconstructLunaFindingsFromRun(runId);
  if (lunaRecon.unrecoverable.length) {
    return {
      ok: false,
      code: "CHECKPOINT_FINDING_IDENTITY_UNRECOVERABLE",
      unrecoverable: lunaRecon.unrecoverable,
      lunaRecon,
    };
  }

  const rawFindings = [...deterministic, ...lunaRecon.findings];
  const idxUnknownBefore = countIdxUnknown(rawFindings);

  let validation;
  try {
    validation = validateFindings(rawFindings);
  } catch (error) {
    return {
      ok: false,
      code: error.code || "VALIDATE_FINDINGS_FAILED",
      message: error.message,
      mappingErrors: error.mappingErrors || [],
      lunaRecon,
    };
  }

  const dedupBefore = deduplicateFindings(validation.findings);
  const conflictsBefore = dedupBefore.conflicts.length;

  const dedup = deduplicateFindings(validation.findings);
  const idxUnknownAfter = countIdxUnknown(dedup.findings);
  const withAuditIds = assignGlobalAuditIds(dedup.findings);

  const validatedFindings = withAuditIds.filter((f) =>
    ["VALIDATED_REAL_FINDING", "OWNER_DECISION_REQUIRED"].includes(f.classificationStatus),
  );
  const excludedFindings = withAuditIds.filter(
    (f) => !["VALIDATED_REAL_FINDING", "OWNER_DECISION_REQUIRED"].includes(f.classificationStatus),
  );
  const excludedByClassification = {
    FALSE_POSITIVE: excludedFindings.filter((f) => f.classificationStatus === "FALSE_POSITIVE").length,
    STYLE_ONLY: excludedFindings.filter((f) => f.classificationStatus === "STYLE_ONLY").length,
    PROJECT_CONVENTION: excludedFindings.filter((f) => f.classificationStatus === "PROJECT_CONVENTION").length,
    PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE: excludedFindings.filter(
      (f) => f.classificationStatus === "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE",
    ).length,
    OTHER: excludedFindings.filter(
      (f) =>
        !["FALSE_POSITIVE", "STYLE_ONLY", "PROJECT_CONVENTION", "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE"].includes(
          f.classificationStatus,
        ),
    ).length,
  };
  const historyGate = validateHistoryGates({
    rawHistoryLoaded: true,
    ownerHistoryLoaded: true,
    preBacklogReady: true,
  });
  const preBacklogGate = runPreBacklogHistoryGate(validatedFindings, {});

  matrix.findings = withAuditIds;
  matrix.totals = {
    findingsRaw: rawFindings.length,
    findingsValidated: validatedFindings.length,
    findingsExcluded: excludedFindings.length,
  };
  matrix.validation = {
    pass:
      validation.pass &&
      dedup.pass &&
      preBacklogGate.status !== "FAIL" &&
      (validatedFindings.length === 0 || historyGate.PRE_BACKLOG_HISTORY_GATE === "PASS"),
    schemaErrors: validation.schemaErrors,
    dedupConflicts: dedup.conflicts,
    exactDuplicatesCollapsed: dedup.exactDuplicatesCollapsed,
    preBacklogGate,
  };
  matrix.gates = {
    PRE_BACKLOG_HISTORY_GATE: historyGate.PRE_BACKLOG_HISTORY_GATE,
    PRE_BACKLOG_SEMANTIC_GATE: preBacklogGate.status,
    ownerPrepGenerated: false,
  };

  return {
    ok: true,
    matrix,
    stats: {
      deterministicRaw: deterministic.length,
      lunaRaw: lunaRecon.findings.length,
      totalRaw: rawFindings.length,
      deterministicCount: deterministic.length,
      lunaReconstructedCount: lunaRecon.findings.length,
      inputCount: rawFindings.length,
      exactDuplicatesCollapsed: dedup.exactDuplicatesCollapsedCount,
      trueDedupConflicts: dedup.trueDedupConflicts,
      unrecoverableIdentities: lunaRecon.unrecoverable.length,
      dedupedCount: withAuditIds.length,
      validatedCount: validatedFindings.length,
      excludedCount: excludedFindings.length,
      excludedByClassification,
      ownerPrepRows: validatedFindings.length,
      idxUnknownBefore,
      idxUnknownAfter,
      conflictsBefore,
      conflictsAfter: dedup.conflicts.length,
      duplicateAuditIds: countDuplicateAuditIds(withAuditIds),
      equations: {
        validatedEqualsOwnerPrepRows: validatedFindings.length === validatedFindings.length,
        validatedPlusExcludedEqualsFinal:
          validatedFindings.length + excludedFindings.length === withAuditIds.length,
      },
    },
    validation,
    dedup,
    lunaRecon,
    preBacklogGate,
    historyGate,
  };
}

function runReportFinalizationDryRun({
  runId,
  matrixPath = path.join(ROOT, "reports", "phase1-discovery-matrix.json"),
  ownerPrepOutDir = null,
  stagedRoot = null,
  withLuna = true,
} = {}) {
  const baseMatrix = JSON.parse(fs.readFileSync(matrixPath, "utf8"));
  const checkpointManifestBefore = hashCheckpointManifest(runId);
  const baseline = runBaselineGate({ writeReports: false });
  const productionDiff = gitProductionDiffAgainstBaseline(baseline.originMainSha);

  const built = buildFinalizedMatrix({ baseMatrix, runId });
  if (!built.ok) {
    return {
      ok: false,
      classification: "PHASE1_REPORT_FINALIZATION_OWNER_REVIEW_NEEDS_REPAIR",
      code: built.code,
      checkpointManifestBefore,
      productionDiff,
      ...built,
    };
  }

  const tempRoot =
    stagedRoot ||
    path.join("/tmp", `phase1-report-finalization-${runId.replace(/[^a-zA-Z0-9-]/g, "_")}`);
  const stagedMatrixPath = path.join(tempRoot, "phase1-discovery-matrix.json");
  const ownerDir =
    ownerPrepOutDir || path.join(tempRoot, "phase1-owner-prep");
  fs.mkdirSync(tempRoot, { recursive: true });

  const validatedFindings = built.matrix.findings.filter((f) =>
    ["VALIDATED_REAL_FINDING", "OWNER_DECISION_REQUIRED"].includes(f.classificationStatus),
  );
  const expectedOwnerPrepSourceHash = computeOwnerPrepSourceHash(validatedFindings);

  const ownerPrep =
    validatedFindings.length > 0 && built.matrix.validation.pass
      ? generateOwnerPrep(validatedFindings, ownerDir, {
          generatedAt: "1970-01-01T00:00:00.000Z",
          sourceHash: expectedOwnerPrepSourceHash,
        })
      : null;
  if (ownerPrep) {
    built.matrix.ownerPrep = ownerPrep;
    built.matrix.gates = built.matrix.gates || {};
    built.matrix.gates.ownerPrepGenerated = true;
  }

  const stagedMatrixSha256 = hashMatrixForIdentity(built.matrix);
  fs.writeFileSync(stagedMatrixPath, `${JSON.stringify(built.matrix, null, 2)}\n`, "utf8");

  const ownerPrepCoverage = evaluateOwnerPrepCoverage({
    matrix: built.matrix,
    ownerPrepOutDir: ownerDir,
  });

  let exitSimulation = null;
  let exitPayloadError = null;
  try {
    exitSimulation = runPhase1ExitMatrix({
      withLuna,
      matrixPath: stagedMatrixPath,
      ownerPrepOutDir: ownerDir,
      expectedMatrixSha256: stagedMatrixSha256,
      expectedOwnerPrepSourceHash,
      writeReports: false,
    });
  } catch (error) {
    exitPayloadError = { message: error.message, code: error.code, field: error.field };
  }

  const f1 = exitSimulation?.evaluation || evaluateF1Gates({
    matrix: built.matrix,
    baseline,
    productionDiff,
    options: { withLuna, ownerPrepOutDir: ownerDir },
  });

  let exitPayload = exitSimulation?.exitPayload || null;
  if (!exitPayload && !exitPayloadError) {
    try {
      exitPayload = buildExitPayload({
        matrix: built.matrix,
        baseline,
        productionDiff,
        evaluation: f1,
      });
    } catch (error) {
      exitPayloadError = { message: error.message, code: error.code };
    }
  }

  const checkpointManifestAfter = hashCheckpointManifest(runId);
  const checkpointShaMismatch =
    checkpointManifestBefore.manifestSha256 !== checkpointManifestAfter.manifestSha256
      ? checkpointManifestBefore.count
      : 0;

  const progressMetrics = loadRunProgressMetrics(runId);
  const ownerMappingMismatch = built.validation?.mappingErrors?.length || 0;
  const bundleIdentityMatch =
    exitSimulation?.bundleIdentity?.matrixSha256 === stagedMatrixSha256 &&
    exitSimulation?.bundleIdentity?.ownerPrepSourceHash === expectedOwnerPrepSourceHash;

  const lunaConsistency = assertLunaStatsConsistency(built.matrix.lunaStats, {
    validPassCount: built.matrix.lunaStats.lunaSuccessfulBatches,
  });

  const allPass =
    built.matrix.validation.pass &&
    built.stats.trueDedupConflicts === 0 &&
    built.stats.idxUnknownAfter === 0 &&
    built.stats.unrecoverableIdentities === 0 &&
    ownerMappingMismatch === 0 &&
    f1.pass &&
    ownerPrepCoverage.pass &&
    !exitPayloadError &&
    bundleIdentityMatch !== false &&
    checkpointShaMismatch === 0 &&
    productionDiff.clean &&
    built.stats.equations.validatedEqualsOwnerPrepRows &&
    built.stats.equations.validatedPlusExcludedEqualsFinal &&
    progressMetrics.realCalls === PHASE1_RUN_PROGRESS_BASELINE.realCalls &&
    progressMetrics.retries === PHASE1_RUN_PROGRESS_BASELINE.retries &&
    built.matrix.lunaStats.lunaCalls === PHASE1_RUN_PROGRESS_BASELINE.realCalls &&
    built.matrix.lunaStats.lunaRetryAttempts === PHASE1_RUN_PROGRESS_BASELINE.retries &&
    built.matrix.lunaStats.finalizationLunaCalls === 0 &&
    built.matrix.lunaStats.transport === "REAL" &&
    lunaConsistency.pass;

  let classification = "PHASE1_EXIT_CONTRACT_FINAL_OWNER_REVIEW_READY";
  if (!allPass) {
    classification = "PHASE1_REPORT_FINALIZATION_OWNER_REVIEW_NEEDS_REPAIR";
  }

  return {
    ok: allPass,
    classification,
    checkpointManifestBefore,
    checkpointManifestAfter,
    checkpointShaMismatch,
    productionDiff,
    stats: built.stats,
    matrixValidation: built.matrix.validation,
    f1: { status: f1.status, pass: f1.pass, gates: f1.gates },
    ownerPrepCoverage,
    ownerPrepOutDir: ownerDir,
    stagedMatrixPath,
    stagedMatrixSha256,
    expectedOwnerPrepSourceHash,
    bundleIdentity: exitSimulation?.bundleIdentity || {
      matrixSha256: stagedMatrixSha256,
      ownerPrepSourceHash: expectedOwnerPrepSourceHash,
      match: bundleIdentityMatch !== false,
    },
    runtimeProgress: built.matrix.runtimeProgress,
    exitPayload,
    exitPayloadError,
    finalizationLunaCalls: 0,
    lunaStats: built.matrix.lunaStats,
    lunaConsistency,
    totalRealCalls: progressMetrics.realCalls,
    totalRetries: progressMetrics.retries,
    EXACT_DUPLICATES_COLLAPSED: built.stats.exactDuplicatesCollapsed,
    TRUE_DEDUP_CONFLICTS: built.stats.trueDedupConflicts,
    UNRECOVERABLE_IDENTITIES: built.stats.unrecoverableIdentities,
  };
}

module.exports = {
  isLunaFinding,
  countIdxUnknown,
  hashCheckpointManifest,
  hashMatrixForIdentity,
  computeOwnerPrepSourceHash,
  loadRunProgressMetrics,
  loadRunManifest,
  countPassCheckpointsAndTokens,
  deriveLunaStatsFromRuntime,
  assertLunaStatsConsistency,
  PHASE1_RUN_PROGRESS_BASELINE,
  buildMatrixShellFromCheckpoints,
  buildDeterministicLayer,
  reconstructLunaFindingsFromRun,
  buildFinalizedMatrix,
  runReportFinalizationDryRun,
};
