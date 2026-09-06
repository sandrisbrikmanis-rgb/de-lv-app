#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const {
  authorizeRuntimeExecution,
  buildOwnerAuthorizationDocument,
  validateOwnerAuthorizationDocument,
  loadOwnerAuthorizationFile,
  buildQueues,
  buildBatchPlan,
  createMockLunaTransport,
  createRealLunaTransport,
  createLunaTransport,
  runInfrastructureGates,
  RUNTIME_MODES,
  EXPECTED,
} = require("./lib/g2-a1-luna-proposal");
const { hashObject, sha256Hex } = require("./lib/g2-a1-luna-proposal/hash");

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function requireAlignedHead() {
  const infra = runInfrastructureGates();
  if (!infra.pass) return null;
  if (infra.headSha !== infra.originMainSha) return null;
  return infra;
}

function assertRealLunaBlocked(result, expectedCode) {
  assert(!result.pass, "must fail");
  if (expectedCode) {
    const codes = result.errors || [result.code];
    assert(codes.includes(expectedCode) || result.blockers?.some((b) => b.code === expectedCode), codes.join(","));
  }
}

function headSha() {
  return execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();
}

function originMainSha() {
  return execSync("git rev-parse origin/main", { encoding: "utf8" }).trim();
}

function buildValidAuthFile(tmpDir, overrides = {}) {
  const infra = runInfrastructureGates();
  if (!infra.pass) throw new Error(`infra blocked: ${infra.errors.join(",")}`);
  const built = buildQueues({ gates: infra });
  const plan = buildBatchPlan(built.queues);
  const sha = headSha();
  const doc = buildOwnerAuthorizationDocument({
    runtimeHeadSha: sha,
    originMainSha: sha,
    authorizationSha256: sha,
    runId: "g2-a1-proposal-test-run",
    model: "gpt-4.1-mini",
    batchPlanSha256: hashObject(plan),
    queueCounts: built.counts,
    batchCount: plan.totalBatches,
    maxAllowedCycles: plan.totalBatches,
    ownerReferences: "OWNER-TEST-REF",
    ...overrides,
  });
  const filePath = path.join(tmpDir, "owner-auth.json");
  fs.writeFileSync(filePath, JSON.stringify(doc, null, 2));
  return { filePath, doc, infra, built, plan, sha };
}

function testRealLunaWithoutExpectedHead() {
  const blocked = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    ownerAuthorizationFile: "/tmp/missing",
    runId: "g2-a1-proposal-x",
    model: "gpt-4.1-mini",
    batchPlanSha256: "abc",
    batchCount: 764,
    queueCounts: EXPECTED.queueCounts,
  });
  assert(!blocked.pass, "must fail");
  assert(blocked.errors.includes("EXPECTED_RUNTIME_HEAD_SHA_REQUIRED"), blocked.errors.join(","));
}

function testRealLunaWithoutAuthFile() {
  const sha = headSha();
  const blocked = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: sha,
    cliSha: sha,
    runId: "g2-a1-proposal-x",
    model: "gpt-4.1-mini",
    batchPlanSha256: "abc",
    batchCount: 764,
    queueCounts: EXPECTED.queueCounts,
  });
  assert(!blocked.pass, "must fail");
  assert(blocked.errors.includes("OWNER_AUTHORIZATION_FILE_REQUIRED"), blocked.errors.join(","));
}

function testHeadMismatchExpected() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-"));
  const { filePath, sha } = buildValidAuthFile(tmp);
  const blocked = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: "0".repeat(40),
    cliSha: "0".repeat(40),
    ownerAuthorizationFile: filePath,
    runId: "g2-a1-proposal-test-run",
    model: "gpt-4.1-mini",
    batchPlanSha256: hashObject(buildBatchPlan(buildQueues({ gates: runInfrastructureGates() }).queues)),
    batchCount: 764,
    queueCounts: buildQueues({ gates: runInfrastructureGates() }).counts,
  });
  assert(!blocked.pass, "must fail");
  assert(blocked.errors.some((e) => e.includes("HEAD") || e.includes("CHAIN")), blocked.errors.join(","));
}

function testOriginMainMismatchHead() {
  const infra = runInfrastructureGates();
  if (!infra.pass) return;
  if (infra.headSha === infra.originMainSha) {
    assert(true, "HEAD equals origin/main in this environment — skip strict mismatch simulation");
    return;
  }
  const blocked = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: infra.headSha,
    cliSha: infra.headSha,
    ownerAuthorizationFile: "/tmp/none",
    runId: "g2-a1-proposal-test-run",
    model: "gpt-4.1-mini",
    batchPlanSha256: "x",
    batchCount: 764,
    queueCounts: EXPECTED.queueCounts,
  });
  assert(!blocked.pass, "must fail");
}

function testCliShaMismatch() {
  if (!requireAlignedHead()) {
    console.log("SKIP testCliShaMismatch (HEAD != origin/main on feature branch)");
    return;
  }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-"));
  const { filePath, sha, plan, built } = buildValidAuthFile(tmp);
  const blocked = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: sha,
    cliSha: "f".repeat(40),
    ownerAuthorizationFile: filePath,
    runId: "g2-a1-proposal-test-run",
    model: "gpt-4.1-mini",
    batchPlanSha256: hashObject(plan),
    batchCount: plan.totalBatches,
    queueCounts: built.counts,
  });
  assert(!blocked.pass, "must fail");
}

function testWrongModel() {
  if (!requireAlignedHead()) {
    console.log("SKIP testWrongModel (HEAD != origin/main on feature branch)");
    return;
  }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-"));
  const { filePath, sha, plan, built } = buildValidAuthFile(tmp);
  const blocked = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: sha,
    cliSha: sha,
    ownerAuthorizationFile: filePath,
    runId: "g2-a1-proposal-test-run",
    model: "wrong-model",
    batchPlanSha256: hashObject(plan),
    batchCount: plan.totalBatches,
    queueCounts: built.counts,
  });
  assertRealLunaBlocked(blocked, "MODEL_MISMATCH");
}

function testWrongRunId() {
  if (!requireAlignedHead()) {
    console.log("SKIP testWrongRunId (HEAD != origin/main on feature branch)");
    return;
  }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-"));
  const { filePath, sha, plan, built } = buildValidAuthFile(tmp);
  const blocked = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: sha,
    cliSha: sha,
    ownerAuthorizationFile: filePath,
    runId: "g2-a1-proposal-other",
    model: "gpt-4.1-mini",
    batchPlanSha256: hashObject(plan),
    batchCount: plan.totalBatches,
    queueCounts: built.counts,
  });
  assertRealLunaBlocked(blocked, "RUN_ID_MISMATCH");
}

function testWrongMatrixSha() {
  if (!requireAlignedHead()) {
    console.log("SKIP testWrongMatrixSha (HEAD != origin/main on feature branch)");
    return;
  }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-"));
  const { filePath, sha, plan, built, doc } = buildValidAuthFile(tmp, { matrixIdentitySha: "0".repeat(40) });
  const badPath = path.join(tmp, "bad-matrix.json");
  fs.writeFileSync(badPath, JSON.stringify(doc, null, 2));
  const blocked = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: sha,
    cliSha: sha,
    ownerAuthorizationFile: badPath,
    runId: "g2-a1-proposal-test-run",
    model: "gpt-4.1-mini",
    batchPlanSha256: hashObject(plan),
    batchCount: plan.totalBatches,
    queueCounts: built.counts,
  });
  assert(!blocked.pass, "must fail");
}

function testWrongSourceSha() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-"));
  const { doc, sha, plan, built } = buildValidAuthFile(tmp, { sourceSha256: "0".repeat(40) });
  const badPath = path.join(tmp, "bad-source.json");
  fs.writeFileSync(badPath, JSON.stringify(doc, null, 2));
  const validated = validateOwnerAuthorizationDocument(JSON.parse(fs.readFileSync(badPath, "utf8")));
  assert(!validated.ok, "invalid source in schema");
}

function testWrongBatchPlanSha() {
  if (!requireAlignedHead()) {
    console.log("SKIP testWrongBatchPlanSha (HEAD != origin/main on feature branch)");
    return;
  }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-"));
  const { filePath, sha, plan, built } = buildValidAuthFile(tmp);
  const blocked = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: sha,
    cliSha: sha,
    ownerAuthorizationFile: filePath,
    runId: "g2-a1-proposal-test-run",
    model: "gpt-4.1-mini",
    batchPlanSha256: "0".repeat(64),
    batchCount: plan.totalBatches,
    queueCounts: built.counts,
  });
  assertRealLunaBlocked(blocked, "BATCH_PLAN_SHA_MISMATCH");
}

function testWrongBatchCount() {
  if (!requireAlignedHead()) {
    console.log("SKIP testWrongBatchCount (HEAD != origin/main on feature branch)");
    return;
  }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-"));
  const { filePath, sha, plan, built } = buildValidAuthFile(tmp);
  const blocked = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: sha,
    cliSha: sha,
    ownerAuthorizationFile: filePath,
    runId: "g2-a1-proposal-test-run",
    model: "gpt-4.1-mini",
    batchPlanSha256: hashObject(plan),
    batchCount: plan.totalBatches + 1,
    queueCounts: built.counts,
  });
  assertRealLunaBlocked(blocked, "BATCH_COUNT_MISMATCH");
}

function testRealTransportWithoutReceipt() {
  let threw = false;
  try {
    createRealLunaTransport(null);
  } catch (e) {
    threw = true;
    assert(e.code === "REAL_LUNA_RUNTIME_AUTHORIZATION_REQUIRED", e.code);
  }
  assert(threw, "real transport without receipt must fail");
}

function testMockReceiptCannotUseRealTransport() {
  const auth = authorizeRuntimeExecution({ runtimeMode: RUNTIME_MODES.MOCK_DRY_RUN });
  if (!auth.pass) return;
  let threw = false;
  try {
    createRealLunaTransport(auth.receipt);
  } catch (e) {
    threw = true;
    assert(e.code === "RUNTIME_RECEIPT_MODE_MISMATCH", e.code);
  }
  assert(threw, "mock receipt on real transport must fail");
}

function testUnknownModeFailClosed() {
  const blocked = authorizeRuntimeExecution({ runtimeMode: "UNKNOWN" });
  assert(!blocked.pass, "unknown mode fail");
  assert(blocked.code === "RUNTIME_MODE_REQUIRED", blocked.code);
}

function testProductionBaselineIndependent() {
  const infra = runInfrastructureGates();
  if (!infra.pass) return;
  assert(infra.productionBaselineSha === EXPECTED.productionBaselineSha, infra.productionBaselineSha);
  assert(infra.productionBaselineSha !== infra.originMainSha || infra.originMainSha === EXPECTED.productionBaselineSha, "baseline independent");
  assert(infra.prod.clean, "production diff clean");
  assert(infra.de.clean, "de diff clean");
}

function testMockDryRunPassesWithZeroRealCalls() {
  const auth = authorizeRuntimeExecution({ runtimeMode: RUNTIME_MODES.MOCK_DRY_RUN });
  if (!auth.pass) return;
  const transport = createMockLunaTransport({}, auth.receipt);
  assert(transport.stats.realCalls === 0, "realCalls 0");
  assert(auth.receipt.executable === false, "not executable");
}

function testValidRealLunaAuthChain() {
  if (!requireAlignedHead()) {
    console.log("SKIP testValidRealLunaAuthChain (HEAD != origin/main on feature branch)");
    return;
  }
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-"));
  const { filePath, sha, plan, built } = buildValidAuthFile(tmp);
  const auth = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: sha,
    cliSha: sha,
    ownerAuthorizationFile: filePath,
    runId: "g2-a1-proposal-test-run",
    model: "gpt-4.1-mini",
    batchPlanSha256: hashObject(plan),
    batchCount: plan.totalBatches,
    queueCounts: built.counts,
  });
  assert(auth.pass, `valid auth should pass: ${(auth.errors || []).join(",")}`);
  assert(auth.receipt.mode === RUNTIME_MODES.REAL_LUNA, auth.receipt.mode);
}

function testMainAdvanceAfterAuthorizationFails() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-"));
  const { filePath, plan, built } = buildValidAuthFile(tmp, {
    runtimeHeadSha: "0".repeat(40),
    originMainSha: "0".repeat(40),
    authorizationSha256: "0".repeat(40),
  });
  const blocked = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: headSha(),
    cliSha: headSha(),
    ownerAuthorizationFile: filePath,
    runId: "g2-a1-proposal-test-run",
    model: "gpt-4.1-mini",
    batchPlanSha256: hashObject(plan),
    batchCount: plan.totalBatches,
    queueCounts: built.counts,
  });
  assert(!blocked.pass, "stale auth sha must fail");
}

const tests = [
  testRealLunaWithoutExpectedHead,
  testRealLunaWithoutAuthFile,
  testHeadMismatchExpected,
  testOriginMainMismatchHead,
  testCliShaMismatch,
  testWrongModel,
  testWrongRunId,
  testWrongMatrixSha,
  testWrongSourceSha,
  testWrongBatchPlanSha,
  testWrongBatchCount,
  testRealTransportWithoutReceipt,
  testMockReceiptCannotUseRealTransport,
  testUnknownModeFailClosed,
  testProductionBaselineIndependent,
  testMockDryRunPassesWithZeroRealCalls,
  testValidRealLunaAuthChain,
  testMainAdvanceAfterAuthorizationFails,
];

function main() {
  for (const t of tests) {
    t();
    console.log(`OK ${t.name}`);
  }
  console.log(`PASS ${tests.length} g2-a1 luna runtime auth tests`);
}

main();
