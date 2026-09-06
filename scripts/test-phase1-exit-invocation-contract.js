#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { spawnSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  runPhase1ExitMatrix,
  parsePhase1ExitCliArgs,
  hashMatrixForIdentity,
  computeOwnerPrepSourceHash,
  assertFinalizedBundleIdentity,
  MATRIX_PATH,
} = require("./run-phase1-exit-matrix");
const { generateOwnerPrep, evaluateOwnerPrepCoverage } = require("./lib/content-discovery/phase1-owner-prep");
const { assignGlobalAuditIds } = require("./lib/content-discovery/phase1-global-audit-id");
const { runReportFinalizationDryRun } = require("./lib/phase1-report-finalization");

const EXIT_JSON = path.join(ROOT, "reports", "phase1-exit.json");
const EXIT_MD = path.join(ROOT, "reports", "phase1-exit.md");
const RUN_ID = "phase1-2026-08-30T08-56-50-163Z-a8e1dec1";

let testsRun = 0;
let testsFailed = 0;

function parseJsonPayload(output) {
  const match = String(output || "").match(/\{[\s\S]*\}/);
  return match ? JSON.parse(match[0]) : null;
}

function assert(condition, message) {
  testsRun += 1;
  if (!condition) {
    testsFailed += 1;
    console.error(`FAIL: ${message}`);
  }
}

function snapshotRepoExitReports() {
  const snap = {};
  for (const file of [EXIT_JSON, EXIT_MD]) {
    snap[file] = fs.existsSync(file)
      ? { mtimeMs: fs.statSync(file).mtimeMs, sha256: require("crypto").createHash("sha256").update(fs.readFileSync(file)).digest("hex") }
      : null;
  }
  return snap;
}

function assertRepoExitReportsUnchanged(before) {
  const after = snapshotRepoExitReports();
  assert(JSON.stringify(before) === JSON.stringify(after), "repo exit reports unchanged");
}

function buildMinimalStagedBundle(tempRoot) {
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
  const summary = Array.from({ length: 320 }, (_, i) => ({
    scopeId: `scope-${i}`,
    applicability: i < 318 ? "APPLICABLE" : "EXPECTED_NOT_APPLICABLE",
    inventoryApplicable: i < 309,
    inventoryCoverage: 1,
    unmappedMainTranslationFields: 0,
    multiScanApplicable: i < 309,
    multiScanCoverage: 1,
    lunaApplicable: i < 318,
    lunaProcessed: true,
    lunaStatus: "PASS",
    lunaObjectsExpected: 10,
    lunaObjectsReturned: 10,
  }));
  const ownerDir = path.join(tempRoot, "owner-prep");
  const prep = generateOwnerPrep(findings, ownerDir, {
    generatedAt: "1970-01-01T00:00:00.000Z",
  });
  const matrix = {
    summary,
    scope: { processed: 320, notApplicable: 2 },
    findings,
    totals: { findingsValidated: findings.length, findingsRaw: findings.length, findingsExcluded: 0 },
    validation: { pass: true, schemaErrors: [], dedupConflicts: [] },
    gates: { ownerPrepGenerated: true },
    ownerPrep: prep,
    lunaStats: {
      lunaScopesExpected: 318,
      lunaScopesProcessed: 318,
      lunaCalls: 15139,
      lunaRetryAttempts: 763,
      lunaSuccessfulBatches: 318,
      finalizationLunaCalls: 0,
      status: "REAL",
      transport: "REAL",
      tokensUsed: null,
      tokensUsedAvailable: false,
    },
    checkpointManifest: {
      count: 318,
      validPassCount: 318,
      manifestSha256: "fixture-manifest-sha256",
    },
    constraints: { lunaCalls: 15139, finalizationLunaCalls: 0 },
  };
  const matrixPath = path.join(tempRoot, "phase1-discovery-matrix.json");
  fs.mkdirSync(tempRoot, { recursive: true });
  fs.writeFileSync(matrixPath, `${JSON.stringify(matrix, null, 2)}\n`, "utf8");
  const matrixSha = hashMatrixForIdentity(matrix);
  const ownerPrepHash = computeOwnerPrepSourceHash(findings);
  const coverage = evaluateOwnerPrepCoverage({ matrix, ownerPrepOutDir: ownerDir });
  assert(coverage.SOURCE_HASH_MATCH, "fixture SOURCE_HASH_MATCH");
  return { matrixPath, ownerDir, matrixSha, ownerPrepHash, matrix };
}

function snapshotStagedBundle(bundle) {
  const crypto = require("crypto");
  const ownerFiles = fs.existsSync(bundle.ownerDir)
    ? fs.readdirSync(bundle.ownerDir).map((name) => {
        const filePath = path.join(bundle.ownerDir, name);
        return {
          name,
          sha256: crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex"),
        };
      })
    : [];
  return {
    matrixSha256: crypto.createHash("sha256").update(fs.readFileSync(bundle.matrixPath)).digest("hex"),
    ownerFiles,
  };
}

function assertStagedBundleUnchanged(before, bundle) {
  const after = snapshotStagedBundle(bundle);
  assert(JSON.stringify(before) === JSON.stringify(after), "staged bundle unchanged");
}

function buildFullCliArgs(bundle, omitFlag = null) {
  const args = [
    path.join(ROOT, "scripts/run-phase1-exit-matrix.js"),
    "--with-luna",
    "--dry-run",
    "--matrix-path",
    bundle.matrixPath,
    "--owner-prep-out-dir",
    bundle.ownerDir,
    "--expected-matrix-sha256",
    bundle.matrixSha,
    "--expected-owner-prep-source-hash",
    bundle.ownerPrepHash,
  ];
  if (omitFlag === "--matrix-path") return args.filter((a, i, arr) => a !== "--matrix-path" && arr[i - 1] !== "--matrix-path");
  if (omitFlag === "--owner-prep-out-dir") {
    return args.filter((a, i, arr) => a !== "--owner-prep-out-dir" && arr[i - 1] !== "--owner-prep-out-dir");
  }
  if (omitFlag === "--expected-matrix-sha256") {
    return args.filter((a, i, arr) => a !== "--expected-matrix-sha256" && arr[i - 1] !== "--expected-matrix-sha256");
  }
  if (omitFlag === "--expected-owner-prep-source-hash") {
    return args.filter(
      (a, i, arr) => a !== "--expected-owner-prep-source-hash" && arr[i - 1] !== "--expected-owner-prep-source-hash",
    );
  }
  return args;
}

function runCli(args) {
  return spawnSync("node", args, { cwd: ROOT, encoding: "utf8" });
}

function testEachMissingBundleArgFailsClosed() {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "phase1-exit-contract-missing-"));
  const bundle = buildMinimalStagedBundle(tempRoot);
  const stagedBefore = snapshotStagedBundle(bundle);
  const repoBefore = snapshotRepoExitReports();

  for (const omitFlag of [
    "--matrix-path",
    "--owner-prep-out-dir",
    "--expected-matrix-sha256",
    "--expected-owner-prep-source-hash",
  ]) {
    const result = runCli(buildFullCliArgs(bundle, omitFlag));
    assert(result.status === 1, `${omitFlag} omitted exits 1`);
    const payload = parseJsonPayload(`${result.stdout}\n${result.stderr}`);
    assert(payload?.code === "FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED", `${omitFlag} omitted code REQUIRED`);
    assert(payload?.missing?.length >= 1, `${omitFlag} omitted reports missing field`);
    assertStagedBundleUnchanged(stagedBefore, bundle);
  }
  assertRepoExitReportsUnchanged(repoBefore);
}

function testExplicitMatrixPathRequiredDespiteDefault() {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "phase1-exit-contract-explicit-"));
  const bundle = buildMinimalStagedBundle(tempRoot);
  const stagedBefore = snapshotStagedBundle(bundle);
  const repoBefore = snapshotRepoExitReports();
  let code = null;
  let missing = null;
  try {
    runPhase1ExitMatrix({
      withLuna: true,
      writeReports: false,
      ownerPrepOutDir: bundle.ownerDir,
      expectedMatrixSha256: bundle.matrixSha,
      expectedOwnerPrepSourceHash: bundle.ownerPrepHash,
    });
  } catch (error) {
    code = error.code;
    missing = error.missing;
  }
  assert(code === "FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED", "implicit default matrixPath rejected");
  assert(missing?.includes("matrixPath"), "matrixPath listed as missing");
  assertStagedBundleUnchanged(stagedBefore, bundle);
  assertRepoExitReportsUnchanged(repoBefore);
}

function testFlagWithoutValueFailsStructured() {
  const before = snapshotRepoExitReports();
  const result = runCli([
    path.join(ROOT, "scripts/run-phase1-exit-matrix.js"),
    "--with-luna",
    "--matrix-path",
  ]);
  assert(result.status === 1, "flag without value exits 1");
  const payload = parseJsonPayload(`${result.stdout}\n${result.stderr}`);
  assert(payload?.code === "PHASE1_EXIT_CLI_INVALID_ARGUMENT", "flag without value structured fail");
  assert(payload?.field === "--matrix-path", "flag without value names field");
  assertRepoExitReportsUnchanged(before);
}

function testUnknownFlagFailsStructured() {
  const before = snapshotRepoExitReports();
  const result = runCli([path.join(ROOT, "scripts/run-phase1-exit-matrix.js"), "--with-luna", "--unknown-flag"]);
  assert(result.status === 1, "unknown flag exits 1");
  const payload = parseJsonPayload(`${result.stdout}\n${result.stderr}`);
  assert(payload?.code === "PHASE1_EXIT_CLI_INVALID_ARGUMENT", "unknown flag structured fail");
  assert(payload?.field === "--unknown-flag", "unknown flag names field");
  assertRepoExitReportsUnchanged(before);
}

function testWithLunaWithoutBundleFailsClosed() {
  const before = snapshotRepoExitReports();
  let code = null;
  try {
    runPhase1ExitMatrix({ withLuna: true, writeReports: true });
  } catch (error) {
    code = error.code;
  }
  assert(code === "FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED", "with-luna without bundle args fails");
  assertRepoExitReportsUnchanged(before);
}

function testCliWithLunaWithoutBundleFailsClosed() {
  const before = snapshotRepoExitReports();
  const result = spawnSync("node", [path.join(ROOT, "scripts/run-phase1-exit-matrix.js"), "--with-luna"], {
    cwd: ROOT,
    encoding: "utf8",
  });
  assert(result.status === 1, "CLI with-luna only exits 1");
  const payload = parseJsonPayload(`${result.stdout}\n${result.stderr}`);
  assert(payload?.code === "FINALIZED_REPORT_BUNDLE_IDENTITY_REQUIRED", "CLI code REQUIRED");
  assertRepoExitReportsUnchanged(before);
}

function testWrongMatrixHashMismatch() {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "phase1-exit-contract-"));
  const bundle = buildMinimalStagedBundle(tempRoot);
  let code = null;
  try {
    runPhase1ExitMatrix({
      withLuna: true,
      writeReports: false,
      matrixPath: bundle.matrixPath,
      ownerPrepOutDir: bundle.ownerDir,
      expectedMatrixSha256: `${bundle.matrixSha.slice(0, -1)}0`,
      expectedOwnerPrepSourceHash: bundle.ownerPrepHash,
    });
  } catch (error) {
    code = error.code;
  }
  assert(code === "FINALIZED_REPORT_BUNDLE_IDENTITY_MISMATCH", "wrong matrix hash mismatch");
}

function testWrongOwnerPrepHashMismatch() {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "phase1-exit-contract-"));
  const bundle = buildMinimalStagedBundle(tempRoot);
  let code = null;
  try {
    runPhase1ExitMatrix({
      withLuna: true,
      writeReports: false,
      matrixPath: bundle.matrixPath,
      ownerPrepOutDir: bundle.ownerDir,
      expectedMatrixSha256: bundle.matrixSha,
      expectedOwnerPrepSourceHash: `${bundle.ownerPrepHash.slice(0, -1)}0`,
    });
  } catch (error) {
    code = error.code;
  }
  assert(code === "FINALIZED_REPORT_BUNDLE_IDENTITY_MISMATCH", "wrong owner-prep hash mismatch");
}

function testCorrectStagedBundleCliDryRun() {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "phase1-exit-contract-"));
  const bundle = buildMinimalStagedBundle(tempRoot);
  const before = snapshotRepoExitReports();
  const result = spawnSync(
    "node",
    [
      path.join(ROOT, "scripts/run-phase1-exit-matrix.js"),
      "--with-luna",
      "--dry-run",
      "--matrix-path",
      bundle.matrixPath,
      "--owner-prep-out-dir",
      bundle.ownerDir,
      "--expected-matrix-sha256",
      bundle.matrixSha,
      "--expected-owner-prep-source-hash",
      bundle.ownerPrepHash,
    ],
    { cwd: ROOT, encoding: "utf8" },
  );
  assert(result.status === 0, `CLI dry-run staged bundle exits 0 (${result.stderr})`);
  const payload = parseJsonPayload(result.stdout);
  assert(payload.status === "PHASE_1_COMPLETE", "CLI dry-run PHASE_1_COMPLETE");
  assert(payload.pass === true, "CLI dry-run pass");
  assert(payload.matrixHasOwnerPrep === true, "CLI reads matrix with ownerPrep metadata");
  assert(payload.ownerPrepGenerated === true, "CLI reads ownerPrepGenerated gate");
  assert(payload.reports === null, "CLI dry-run writes no reports");
  assertRepoExitReportsUnchanged(before);
}

function testExitReadsMatrixWithOwnerPrepMetadata() {
  const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "phase1-exit-contract-"));
  const bundle = buildMinimalStagedBundle(tempRoot);
  const loadedBefore = JSON.parse(fs.readFileSync(bundle.matrixPath, "utf8"));
  assert(loadedBefore.ownerPrep, "staged matrix has ownerPrep before exit");
  assert(loadedBefore.gates?.ownerPrepGenerated === true, "staged matrix ownerPrepGenerated before exit");

  const result = runPhase1ExitMatrix({
    withLuna: true,
    writeReports: false,
    matrixPath: bundle.matrixPath,
    ownerPrepOutDir: bundle.ownerDir,
    expectedMatrixSha256: bundle.matrixSha,
    expectedOwnerPrepSourceHash: bundle.ownerPrepHash,
  });
  assert(result.matrix?.ownerPrep?.sourceHash, "exit loaded matrix ownerPrep.sourceHash");
  assert(result.matrix?.gates?.ownerPrepGenerated === true, "exit loaded ownerPrepGenerated");
  assert(hashMatrixForIdentity(result.matrix) === bundle.matrixSha, "exit matrix hash matches staged");
}

function testParseCliArgs() {
  const parsed = parsePhase1ExitCliArgs([
    "--with-luna",
    "--dry-run",
    "--matrix-path",
    "/tmp/matrix.json",
    "--owner-prep-out-dir",
    "/tmp/owner-prep",
    "--expected-matrix-sha256",
    "abc",
    "--expected-owner-prep-source-hash",
    "def",
  ]);
  assert(parsed.withLuna === true, "parse with-luna");
  assert(parsed.dryRun === true, "parse dry-run");
  assert(parsed.writeReports === false, "parse writeReports false");
  assert(parsed.matrixPath === "/tmp/matrix.json", "parse matrix path");
  assert(parsed.expectedMatrixSha256 === "abc", "parse matrix sha");
  assert(Object.prototype.hasOwnProperty.call(parsed, "matrixPath"), "parse sets explicit matrixPath property");

  let parseError = null;
  try {
    parsePhase1ExitCliArgs(["--matrix-path"]);
  } catch (error) {
    parseError = error;
  }
  assert(parseError?.code === "PHASE1_EXIT_CLI_INVALID_ARGUMENT", "parse rejects flag without value");
}

function testIntegrationDryRunIfRequested() {
  if (!process.env.PHASE1_EXIT_CONTRACT_INTEGRATION) return;
  const before = snapshotRepoExitReports();
  const dry = runReportFinalizationDryRun({ runId: RUN_ID });
  assert(dry.ok, "finalization dry-run ok for integration");
  assert(dry.stagedMatrixPath, "staged matrix path present");
  const staged = JSON.parse(fs.readFileSync(dry.stagedMatrixPath, "utf8"));
  assert(staged.ownerPrep, "integration staged matrix has ownerPrep");
  assert(staged.gates?.ownerPrepGenerated === true, "integration staged ownerPrepGenerated");

  const result = spawnSync(
    "node",
    [
      path.join(ROOT, "scripts/run-phase1-exit-matrix.js"),
      "--with-luna",
      "--dry-run",
      "--matrix-path",
      dry.stagedMatrixPath,
      "--owner-prep-out-dir",
      dry.ownerPrepOutDir,
      "--expected-matrix-sha256",
      dry.stagedMatrixSha256,
      "--expected-owner-prep-source-hash",
      dry.expectedOwnerPrepSourceHash,
    ],
    { cwd: ROOT, encoding: "utf8" },
  );
  assert(result.status === 0, "integration CLI dry-run ok");
  const payload = parseJsonPayload(result.stdout);
  assert(payload.status === "PHASE_1_COMPLETE", "integration PHASE_1_COMPLETE");
  assertRepoExitReportsUnchanged(before);
}

function main() {
  testParseCliArgs();
  testEachMissingBundleArgFailsClosed();
  testExplicitMatrixPathRequiredDespiteDefault();
  testFlagWithoutValueFailsStructured();
  testUnknownFlagFailsStructured();
  testWithLunaWithoutBundleFailsClosed();
  testCliWithLunaWithoutBundleFailsClosed();
  testWrongMatrixHashMismatch();
  testWrongOwnerPrepHashMismatch();
  testCorrectStagedBundleCliDryRun();
  testExitReadsMatrixWithOwnerPrepMetadata();
  testIntegrationDryRunIfRequested();
  console.log(`Phase 1 exit invocation contract tests: ${testsRun - testsFailed}/${testsRun} passed`);
  if (testsFailed) process.exit(1);
}

main();
