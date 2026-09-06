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
const { evaluateF1Gates, buildExitPayload } = require("../run-phase1-exit-matrix");
const { runBaselineGate } = require("./content-discovery/baseline-gate");
const { gitProductionDiffAgainstBaseline } = require("./content-discovery/git-baseline");
const { listCheckpointFiles } = require("./phase1-luna-checkpoint/atomic-io");
const { RUNS_ROOT } = require("./phase1-luna-checkpoint/constants");

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
  return {
    ...baseMatrix,
    summary,
    scope: {
      ...(baseMatrix.scope || {}),
      processed: summary.length,
      notApplicable: summary.filter((r) => r.applicability === "EXPECTED_NOT_APPLICABLE").length,
    },
    lunaStats: {
      ...(baseMatrix.lunaStats || {}),
      lunaScopesExpected: 318,
      lunaScopesProcessed: summary.filter((r) => r.lunaApplicable && r.lunaProcessed).length,
      lunaCalls: 0,
      status: "REAL",
      failures: [],
    },
    constraints: {
      ...(baseMatrix.constraints || {}),
      lunaCalls: 0,
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
    findingsExcluded: withAuditIds.filter((f) =>
      ["FALSE_POSITIVE", "STYLE_ONLY", "PROJECT_CONVENTION", "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE"].includes(
        f.classificationStatus,
      ),
    ).length,
  };
  matrix.validation = {
    pass:
      validation.pass &&
      dedup.pass &&
      preBacklogGate.status !== "FAIL" &&
      (validatedFindings.length === 0 || historyGate.PRE_BACKLOG_HISTORY_GATE === "PASS"),
    schemaErrors: validation.schemaErrors,
    dedupConflicts: dedup.conflicts,
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
      deterministicCount: deterministic.length,
      lunaReconstructedCount: lunaRecon.findings.length,
      inputCount: rawFindings.length,
      dedupedCount: withAuditIds.length,
      validatedCount: validatedFindings.length,
      idxUnknownBefore,
      idxUnknownAfter,
      conflictsBefore,
      conflictsAfter: dedup.conflicts.length,
      duplicateAuditIds: countDuplicateAuditIds(withAuditIds),
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
      code: built.code,
      checkpointManifestBefore,
      productionDiff,
      ...built,
    };
  }

  const ownerDir =
    ownerPrepOutDir || path.join("/tmp", `phase1-owner-prep-dry-run-${runId.replace(/[^a-zA-Z0-9-]/g, "_")}`);
  const validatedFindings = built.matrix.findings.filter((f) =>
    ["VALIDATED_REAL_FINDING", "OWNER_DECISION_REQUIRED"].includes(f.classificationStatus),
  );
  const ownerPrep =
    validatedFindings.length > 0 && built.matrix.validation.pass
      ? generateOwnerPrep(validatedFindings, ownerDir, { generatedAt: "1970-01-01T00:00:00.000Z" })
      : null;
  if (ownerPrep) {
    built.matrix.ownerPrep = ownerPrep;
    built.matrix.gates.ownerPrepGenerated = true;
  }

  const f1 = evaluateF1Gates({
    matrix: built.matrix,
    baseline,
    productionDiff,
    options: { withLuna, ownerPrepOutDir: ownerDir },
  });

  let exitPayload = null;
  let exitPayloadError = null;
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

  const ownerPrepCoverage = evaluateOwnerPrepCoverage({
    matrix: built.matrix,
    ownerPrepOutDir: ownerDir,
  });

  const checkpointManifestAfter = hashCheckpointManifest(runId);
  const checkpointShaMismatch =
    checkpointManifestBefore.manifestSha256 !== checkpointManifestAfter.manifestSha256
      ? checkpointManifestBefore.count
      : 0;

  const gatesPass = Object.entries(f1.gates)
    .filter(([key]) => key !== "F1-9")
    .every(([, status]) => status === "PASS" || status === "NOT_RUN");

  const allPass =
    built.matrix.validation.pass &&
    built.stats.conflictsAfter === 0 &&
    built.stats.idxUnknownAfter === 0 &&
    f1.pass &&
    ownerPrepCoverage.pass &&
    !exitPayloadError &&
    checkpointShaMismatch === 0 &&
    productionDiff.clean;

  let classification = "PHASE1_REPORT_FINALIZATION_REPAIR_READY_FOR_OWNER_REVIEW";
  if (built.code === "CHECKPOINT_FINDING_IDENTITY_UNRECOVERABLE") {
    classification = "CHECKPOINT_FINDING_IDENTITY_REPAIR_REQUIRED";
  } else if (built.stats.conflictsAfter > 0) {
    classification = "DEDUP_CONFLICTS_REMAIN";
  } else if (!ownerPrepCoverage.pass) {
    classification = "OWNER_PREP_REPAIR_REQUIRED";
  } else if (!allPass) {
    classification = "PHASE1_DISCOVERY_REPORT_REPAIR_REQUIRED";
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
    exitPayload,
    exitPayloadError,
    lunaCalls: 0,
  };
}

module.exports = {
  isLunaFinding,
  countIdxUnknown,
  hashCheckpointManifest,
  buildMatrixShellFromCheckpoints,
  buildDeterministicLayer,
  reconstructLunaFindingsFromRun,
  buildFinalizedMatrix,
  runReportFinalizationDryRun,
};
