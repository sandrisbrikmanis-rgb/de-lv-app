#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { buildExitPayload, evaluateF1Gates } = require("./run-phase1-exit-matrix");
const {
  enrichRawItemFromCheckpoint,
  reconstructFindingsFromCheckpoint,
  storedFindingsLackFullIdentity,
} = require("./lib/phase1-luna-checkpoint/finding-reconstruction");
const { assignGlobalAuditIds, countDuplicateAuditIds } = require("./lib/content-discovery/phase1-global-audit-id");
const { applyOwnerSeverityMappings } = require("./lib/content-discovery/phase1-owner-severity-mapping");
const { validateFindings } = require("./lib/content-discovery/phase1-findings-validation");
const { deduplicateFindings } = require("./lib/content-discovery/phase1-findings-dedup");
const { generateOwnerPrep, evaluateOwnerPrepCoverage } = require("./lib/content-discovery/phase1-owner-prep");
const { finalizeRun, initFreshRun } = require("./lib/phase1-luna-checkpoint/runner");
const { updateProgressAtomic, createInitialProgress } = require("./lib/phase1-luna-checkpoint/progress");
const { writeJsonAtomic } = require("./lib/phase1-luna-checkpoint/atomic-io");
const { progressPath, manifestPath } = require("./lib/phase1-luna-checkpoint/constants");
const { runReportFinalizationDryRun, buildMatrixShellFromCheckpoints, assertLunaStatsConsistency, deriveLunaStatsFromRuntime } = require("./lib/phase1-report-finalization");

const PHASE1_RUN_ID = "phase1-2026-08-30T08-56-50-163Z-a8e1dec1";

let testsRun = 0;
let testsFailed = 0;

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function sampleCheckpoint(overrides = {}) {
  return {
    batchId: "batch-0-test",
    scopeId: "g2/a1/bg",
    status: "PASS",
    canonicalToLegacyIdMap: {
      "g2/a1/bg|idx:12|raw:lernen|src:a1.js": "lernen",
    },
    rawResult: {
      items: [
        {
          id: "g2/a1/bg|idx:12|raw:lernen|src:a1.js",
          status: "FINDING",
          field: "lv",
          severity: "HIGH",
          category: "MEANING",
        },
      ],
    },
    normalizedFindings: [
      {
        auditId: "DISC-G2-A1-BG-L0001",
        findingStableId: "g2/a1/bg|unknown|idx:?|lv|MEANING|gpt-5.6-luna",
        dedupKey: "g2|a1|unknown|idx:?|lv|MEANING",
        scopeId: "g2/a1/bg",
        cardId: "unknown",
        objectIndex: null,
        fieldPath: "lv",
        category: "MEANING",
        severity: "HIGH",
        classificationStatus: "VALIDATED_REAL_FINDING",
        source: "gpt-5.6-luna",
      },
    ],
    ...overrides,
  };
}

function testFindingIdentityReconstruction() {
  const checkpoint = sampleCheckpoint();
  assert(storedFindingsLackFullIdentity(checkpoint), "stored findings lack full identity");
  const scope = { scopeId: "g2/a1/bg" };
  const result = reconstructFindingsFromCheckpoint(checkpoint, scope);
  assert(result.identityStatus === "RECONSTRUCTED", "reconstructed identity");
  assert(result.findings.length === 1, "one finding");
  assert(result.findings[0].objectIndex === 12, "objectIndex restored");
  assert(result.findings[0].cardId === "lernen", "cardId restored");
  assert(!String(result.findings[0].findingStableId).includes("idx:?|"), "no idx:? in stable id");
}

function testUnrecoverableIdentity() {
  const checkpoint = sampleCheckpoint({
    canonicalToLegacyIdMap: {},
    rawResult: {
      items: [{ id: "g2/a1/bg|idx:12|raw:|src:a1.js", status: "FINDING", field: "lv", category: "MEANING" }],
    },
  });
  const result = reconstructFindingsFromCheckpoint(checkpoint, { scopeId: "g2/a1/bg" });
  assert(result.identityStatus === "CHECKPOINT_FINDING_IDENTITY_UNRECOVERABLE", "unrecoverable classified");
}

function testDedupAfterIdentityRestore() {
  const scope = { scopeId: "g2/a1/bg" };
  const a = reconstructFindingsFromCheckpoint(sampleCheckpoint(), scope).findings[0];
  const b = reconstructFindingsFromCheckpoint(
    sampleCheckpoint({
      batchId: "batch-1-test",
      rawResult: {
        items: [
          {
            id: "g2/a1/bg|idx:99|raw:sprechen|src:a1.js",
            status: "FINDING",
            field: "lv",
            severity: "HIGH",
            category: "GRAMMAR",
          },
        ],
      },
      normalizedFindings: [],
      canonicalToLegacyIdMap: {
        "g2/a1/bg|idx:99|raw:sprechen|src:a1.js": "sprechen",
      },
    }),
    scope,
  ).findings[0];
  const dedup = deduplicateFindings([a, a, b]);
  assert(dedup.pass, "exact duplicate collapses");
  assert(dedup.findings.length === 2, "distinct findings remain");
  const conflictPair = deduplicateFindings([
    { ...a, classificationStatus: "VALIDATED_REAL_FINDING", findingStableId: `${a.findingStableId}|variant-a` },
    { ...a, classificationStatus: "VALIDATED_REAL_FINDING", severity: "LOW", findingStableId: `${a.findingStableId}|variant-b` },
  ]);
  assert(!conflictPair.pass, "true conflict remains fail-closed");
}

function testGlobalAuditIdDeterminism() {
  const findings = [
    { findingStableId: "z|card|idx:2|lv|A|gpt-5.6-luna", classificationStatus: "VALIDATED_REAL_FINDING" },
    { findingStableId: "a|card|idx:1|lv|A|gpt-5.6-luna", classificationStatus: "VALIDATED_REAL_FINDING" },
  ];
  const first = assignGlobalAuditIds(findings);
  const second = assignGlobalAuditIds(findings);
  assert(JSON.stringify(first) === JSON.stringify(second), "deterministic audit ids");
  assert(countDuplicateAuditIds(first) === 0, "no duplicate audit ids");
  assert(first[0].auditId === "PH1-000001", "sorted stable id first");
}

function testOwnerMappingIdempotence() {
  const finding = {
    auditId: "PH1-000001",
    dedupKey: "g2/b2/fr|fr|g2|b2|unknown|idx:926|lv|STYLE_ONLY",
    scopeId: "g2/b2/fr",
    group: "g2",
    dataset: "b2",
    lang: "fr",
    cardId: "unknown",
    objectIndex: 926,
    fieldPath: "lv",
    category: "STYLE_ONLY",
    current: "",
    source: "gpt-5.6-luna",
    findingStableId: "g2/b2/fr|unknown|idx:926|lv|STYLE_ONLY|gpt-5.6-luna",
    severity: "STYLE_ONLY",
    classificationStatus: "VALIDATED_REAL_FINDING",
  };
  const first = applyOwnerSeverityMappings([finding]);
  assert(first.ownerMappingApplied === 1, "OWNER_MAPPING_APPLIED");
  const second = applyOwnerSeverityMappings(first.findings);
  assert(second.ownerMappingAlreadyApplied === 1, "OWNER_MAPPING_ALREADY_APPLIED");
  assert(second.mappingErrors.length === 0, "no mismatch on re-run");
  const validated = validateFindings(validateFindings(first.findings).findings);
  assert(validated.pass, "double validateFindings idempotent");
}

function testBuildExitPayloadOptions() {
  const baseline = {
    verdict: "PASS",
    fetchStatus: "PASS",
    revParseStatus: "PASS",
    activeUnmergedClosureCount: 0,
    originMainSha: "abc",
    deChanges: [],
  };
  const matrix = { summary: [], findings: [], totals: {}, validation: { pass: true } };
  const evaluation = evaluateF1Gates({
    matrix,
    baseline,
    productionDiff: { clean: true },
    options: { withLuna: false },
  });
  const without = buildExitPayload({ matrix, baseline, productionDiff: { clean: true }, evaluation });
  assert(without.ownerDecisionRef === "PENDING", "default ownerDecisionRef");
  const withOpts = buildExitPayload({
    matrix,
    baseline,
    productionDiff: { clean: true },
    evaluation,
    options: {
      ownerDecisionRef: "OWNER-1",
      phase1StartAuthorizationRef: "OWNER-2",
      phase1TechnicalOwnerDecisionRef: "OWNER-3",
    },
  });
  assert(withOpts.ownerDecisionRef === "OWNER-1", "custom ownerDecisionRef");
  assert(withOpts.phase1StartAuthorizationRef === "OWNER-2", "custom start auth ref");
  assert(withOpts.phase1TechnicalOwnerDecisionRef === "OWNER-3", "custom technical ref");
}

function testStaleLastErrorFinalizeRun() {
  const constants = require("./lib/phase1-luna-checkpoint/constants");
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "phase1-lasterror-"));
  const runId = "phase1-test-lasterror-run";
  const previousRoot = constants.RUNS_ROOT;
  constants.RUNS_ROOT = dir;
  fs.mkdirSync(path.join(dir, runId), { recursive: true });

  writeJsonAtomic(progressPath(runId), {
    ...createInitialProgress(runId, []),
    lastError: "Luna ID recovery failed: TEST",
    status: "BLOCKED",
  });
  writeJsonAtomic(manifestPath(runId), { runId, status: "BLOCKED" });

  finalizeRun(runId, "COMPLETED");
  const progress = JSON.parse(fs.readFileSync(progressPath(runId), "utf8"));
  assert(progress.status === "COMPLETED", "completed status");
  assert(progress.lastError === null, "lastError cleared on COMPLETED");

  writeJsonAtomic(progressPath(runId), {
    ...progress,
    lastError: "blocked-error",
    status: "IN_PROGRESS",
  });
  finalizeRun(runId, "BLOCKED");
  const blocked = JSON.parse(fs.readFileSync(progressPath(runId), "utf8"));
  assert(blocked.lastError === "blocked-error", "lastError preserved on BLOCKED");

  writeJsonAtomic(progressPath(runId), {
    ...blocked,
    lastError: "interrupted-error",
    status: "IN_PROGRESS",
  });
  finalizeRun(runId, "INTERRUPTED");
  const interrupted = JSON.parse(fs.readFileSync(progressPath(runId), "utf8"));
  assert(interrupted.lastError === "interrupted-error", "lastError preserved on INTERRUPTED");

  constants.RUNS_ROOT = previousRoot;
}

function testExactDuplicateProof() {
  const scope = { scopeId: "g2/a1/bg", group: "g2", dataset: "a1", lang: "bg" };
  const primary = reconstructFindingsFromCheckpoint(sampleCheckpoint(), scope).findings[0];
  const duplicate = {
    ...primary,
    checkpointProvenance: { scopeId: "g2/a1/bg", batchId: "batch-1-dup", batchIndex: 1 },
  };
  const dedup = deduplicateFindings([primary, duplicate]);
  assert(dedup.exactDuplicatesCollapsedCount === 1, "exact duplicate collapsed with proof");
  assert(dedup.exactDuplicatesCollapsed[0].reason === "EXACT_STABLE_ID_DUPLICATE", "proof reason");
  assert(dedup.exactDuplicatesCollapsed[0].findingStableId === primary.findingStableId, "proof stable id");
  assert(dedup.findings.length === 1, "one canonical finding remains");
}

function testOwnerMappingWrongCategoryAlreadyApplied() {
  const {
    OWNER_SEVERITY_MAPPINGS,
    applyOwnerSeverityMappings,
    expectedAppliedCategory,
  } = require("./lib/content-discovery/phase1-owner-severity-mapping");

  for (const entry of OWNER_SEVERITY_MAPPINGS) {
    const applied = applyOwnerSeverityMappings([
      {
        findingStableId: entry.findingId,
        severity: entry.next.severity,
        category: expectedAppliedCategory(entry),
        classificationStatus: entry.next.classificationStatus,
        source: "gpt-5.6-luna",
      },
    ]);
    assert(applied.ownerMappingAlreadyApplied === 1, `already applied baseline ${entry.findingId}`);

    const wrongCategory = {
      ...applied.findings[0],
      category: "GRAMMAR",
    };
    const remapped = applyOwnerSeverityMappings([wrongCategory]);
    assert(remapped.mappingErrors.length === 1, `wrong category mismatch ${entry.findingId}`);
    assert(remapped.ownerMappingAlreadyApplied === 0, `no already-applied on wrong category ${entry.findingId}`);
  }
}

function testStagedBundleIdentityMismatch() {
  const {
    hashMatrixForIdentity,
    assertFinalizedBundleIdentity,
  } = require("./run-phase1-exit-matrix");
  const matrix = { summary: [{ scopeId: "x" }], findings: [], totals: {} };
  const sha = hashMatrixForIdentity(matrix);
  let threw = false;
  try {
    assertFinalizedBundleIdentity({
      matrix,
      matrixPath: "/tmp/test-matrix.json",
      ownerPrepOutDir: "/tmp/owner-prep",
      expectedMatrixSha256: `${sha.slice(0, -1)}0`,
      expectedOwnerPrepSourceHash: "00",
      requireExplicitHashes: true,
    });
  } catch (error) {
    threw = error.code === "FINALIZED_REPORT_BUNDLE_IDENTITY_MISMATCH";
  }
  assert(threw, "staged bundle matrix sha mismatch fail-closed");
}

function testOwnerPrepCoverageWithGlobalIds() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "owner-prep-global-"));
  const findings = assignGlobalAuditIds([
    {
      findingStableId: "g2/b1/lv|card|idx:1|lv|A|gpt-5.6-luna",
      dedupKey: "g2/b1/lv|lv|g2|b1|card|idx:1|lv|A",
      scopeId: "g2/b1/lv",
      group: "g2",
      dataset: "b1",
      lang: "lv",
      cardId: "card",
      objectIndex: 1,
      fieldPath: "lv",
      category: "A",
      severity: "HIGH",
      classificationStatus: "VALIDATED_REAL_FINDING",
      current: "x",
      source: "gpt-5.6-luna",
    },
  ]);
  const prep = generateOwnerPrep(findings, dir);
  const cov = evaluateOwnerPrepCoverage({ matrix: { findings, ownerPrep: prep }, ownerPrepOutDir: dir });
  assert(cov.OWNER_PREP_ROWS === 1, "owner prep row count");
  assert(cov.DUPLICATE_AUDIT_IDS === 0, "no duplicate audit ids");
  assert(cov.pass, "owner prep coverage pass");
}

function testLunaStatsConsistencyGates() {
  const baseStats = {
    status: "REAL",
    transport: "REAL",
    finalizationLunaCalls: 0,
    tokensUsed: 100,
    tokensUsedAvailable: true,
  };

  const exactMatch = assertLunaStatsConsistency(
    { ...baseStats, lunaSuccessfulBatches: 12830 },
    { validPassCount: 12830 },
  );
  assert(exactMatch.pass, "VALID_PASS 12830 + successful 12830 PASS");

  const zeroSuccessful = assertLunaStatsConsistency(
    { ...baseStats, lunaSuccessfulBatches: 0 },
    { validPassCount: 12830 },
  );
  assert(!zeroSuccessful.pass, "VALID_PASS 12830 + successful 0 FAIL");
  assert(zeroSuccessful.errors.includes("LUNA_SUCCESSFUL_BATCH_COUNT_MISMATCH"), "zero mismatch code");

  const offByOne = assertLunaStatsConsistency(
    { ...baseStats, lunaSuccessfulBatches: 12829 },
    { validPassCount: 12830 },
  );
  assert(!offByOne.pass, "VALID_PASS 12830 + successful 12829 FAIL");
  assert(offByOne.errors.includes("LUNA_SUCCESSFUL_BATCH_COUNT_MISMATCH"), "off-by-one mismatch code");

  const mockTransport = assertLunaStatsConsistency(
    { status: "REAL", transport: "MOCK", lunaSuccessfulBatches: 1, finalizationLunaCalls: 0 },
    { validPassCount: 1 },
  );
  assert(!mockTransport.pass, "REAL+MOCK transport fail-closed");
  assert(mockTransport.errors.includes("REAL_STATUS_WITH_MOCK_TRANSPORT"), "REAL+MOCK error code");

  const unavailableTokens = assertLunaStatsConsistency({
    status: "REAL",
    transport: "REAL",
    lunaSuccessfulBatches: 1,
    finalizationLunaCalls: 0,
    tokensUsed: 0,
    tokensUsedAvailable: false,
  }, { validPassCount: 1 });
  assert(!unavailableTokens.pass, "tokensUsed=0 without availability fail-closed");
}

function testStaleBaseMatrixLunaMetadataNotInherited() {
  const { RUNS_ROOT } = require("./lib/phase1-luna-checkpoint/constants");
  const runDir = path.join(RUNS_ROOT, PHASE1_RUN_ID);
  if (!fs.existsSync(runDir)) {
    console.log("SKIP: stale base matrix test (run artifacts unavailable)");
    return;
  }

  const staleBase = {
    lunaStats: {
      transport: "MOCK",
      lunaSuccessfulBatches: 0,
      tokensUsed: 0,
      status: "REAL",
      lunaCalls: 0,
      lunaRetryAttempts: 0,
    },
  };
  const shell = buildMatrixShellFromCheckpoints(PHASE1_RUN_ID, staleBase);
  const derived = deriveLunaStatsFromRuntime(PHASE1_RUN_ID);
  assert(shell.lunaStats.transport === "REAL", "transport reconstructed from runtime, not stale base");
  assert(shell.lunaStats.lunaSuccessfulBatches === derived.lunaSuccessfulBatches, "lunaSuccessfulBatches from checkpoints");
  assert(shell.lunaStats.lunaCalls === derived.lunaCalls, "lunaCalls from progress, not stale base");
  assert(shell.lunaStats.lunaRetryAttempts === derived.lunaRetryAttempts, "lunaRetryAttempts from progress");
  assert(shell.lunaStats.finalizationLunaCalls === 0, "finalizationLunaCalls zero");
  assert(
    shell.lunaStats.tokensUsedAvailable !== false || shell.lunaStats.tokensUsed !== 0,
    "tokensUsed not inherited as stale zero placeholder",
  );
  assert(shell.lunaStats.transport !== "MOCK", "stale MOCK transport not inherited");
  assert(shell.lunaStats.lunaSuccessfulBatches !== 0, "stale zero successful batches not inherited");
  assert(derived.transport === "REAL", "derived transport REAL");
}

function testDryRunIfRequested() {
  if (!process.env.PHASE1_REPORT_FINALIZATION_DRY_RUN) return;
  const result = runReportFinalizationDryRun({
    runId: PHASE1_RUN_ID,
  });
  assert(result.checkpointShaMismatch === 0, "checkpoint sha unchanged");
  assert(result.productionDiff.clean, "production diff clean");
  assert(result.matrixValidation?.pass, "matrix.validation.pass");
  assert(result.stats?.conflictsAfter === 0, "dedup conflicts after");
  assert(result.stats?.idxUnknownAfter === 0, "idx:? after zero");
  assert(result.f1?.pass, "F1 pass");
  assert(result.classification === "PHASE1_EXIT_CONTRACT_FINAL_OWNER_REVIEW_READY", "classification");
  assert(result.totalRealCalls === 15139, "historical realCalls preserved");
  assert(result.totalRetries === 763, "historical retries preserved");
  assert(result.finalizationLunaCalls === 0, "finalization luna calls zero");
  assert(result.stats.equations.validatedEqualsOwnerPrepRows, "validated = owner prep rows");
  assert(result.stats.equations.validatedPlusExcludedEqualsFinal, "validated + excluded = final");
  assert(result.bundleIdentity?.match, "staged bundle identity match");
  assert(result.lunaStats?.transport === "REAL", "luna transport REAL");
  assert(result.lunaStats?.lunaSuccessfulBatches === 12830, "lunaSuccessfulBatches matches VALID_PASS");
  assert(result.lunaStats?.lunaSuccessfulBatches === result.checkpointManifest?.validPassCount, "independent VALID_PASS match");
  assert(result.lunaStats?.lunaCalls === 15139, "lunaCalls baseline");
  assert(result.lunaStats?.lunaRetryAttempts === 763, "lunaRetryAttempts baseline");
  assert(result.lunaConsistency?.pass, "luna stats consistency pass");
  if (result.lunaStats?.tokensUsedAvailable) {
    assert(result.lunaStats.tokensUsed > 0, "tokensUsed sum from checkpoints when available");
  } else {
    assert(result.lunaStats?.tokensUsed == null, "tokensUsed null when unavailable");
  }
}

function main() {
  testFindingIdentityReconstruction();
  testUnrecoverableIdentity();
  testDedupAfterIdentityRestore();
  testExactDuplicateProof();
  testGlobalAuditIdDeterminism();
  testOwnerMappingIdempotence();
  testOwnerMappingWrongCategoryAlreadyApplied();
  testBuildExitPayloadOptions();
  testStaleLastErrorFinalizeRun();
  testStagedBundleIdentityMismatch();
  testOwnerPrepCoverageWithGlobalIds();
  testLunaStatsConsistencyGates();
  testStaleBaseMatrixLunaMetadataNotInherited();
  testDryRunIfRequested();
  console.log(`Phase 1 report finalization tests: ${testsRun - testsFailed}/${testsRun} passed`);
  if (testsFailed) process.exit(1);
}

main();
