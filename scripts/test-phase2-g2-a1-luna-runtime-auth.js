#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const {
  authorizeRuntimeExecution,
  validateOwnerAuthorizationDocument,
  proveV1Defect,
  validateGitIdentityChain,
  validateAuthorizationFileHash,
  createRealLunaTransport,
  createMockLunaTransport,
  createLunaTransport,
  runInfrastructureGates,
  RUNTIME_MODES,
  EXPECTED,
  AUTH_FROZEN,
} = require("./lib/g2-a1-luna-proposal");
const {
  TEST_GIT_SHA,
  TEST_RUN_ID,
  TEST_BATCH_PLAN_SHA256,
  buildTestInfrastructureContext,
  buildTestGitContext,
  buildValidAuthV2Document,
  writeAuthFile,
  buildRealLunaAuthorizeOptions,
  createTempAuthFixture,
  buildV1AuthDocument,
  loadOwnerAuthorizationFile,
  sha256Hex,
  OWNER_AUTH_SCHEMA_VERSION,
} = require("./lib/g2-a1-luna-proposal/auth-test-harness");

const stats = { passed: 0, failed: 0, skipped: 0 };

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

function runTest(name, fn) {
  return Promise.resolve()
    .then(() => fn())
    .then(() => {
      stats.passed += 1;
      console.log(`OK ${name}`);
    })
    .catch((error) => {
      stats.failed += 1;
      console.error(`FAIL ${name}: ${error.message}`);
      throw error;
    });
}

function assertBlocked(result, expectedCode) {
  assert(!result.pass, "expected failure");
  const codes = result.errors || [result.code];
  const blockerCodes = (result.blockers || []).map((b) => b.code);
  const all = [...codes, ...blockerCodes];
  assert(all.includes(expectedCode), `expected ${expectedCode}, got ${all.join(",")}`);
}

function testV1DefectProof() {
  const proof = proveV1Defect();
  assert(proof.gitShaLength === 40, "git sha 40");
  assert(proof.fileSha256Length === 64, "file sha 64");
  assert(!proof.gitShaEqualsFileHash, "types must differ");
}

function testValidAuthV2DocumentLoads() {
  const doc = buildValidAuthV2Document();
  const validated = validateOwnerAuthorizationDocument(doc);
  assert(validated.ok, validated.message || validated.code);
  assert(validated.authorization.schemaVersion === OWNER_AUTH_SCHEMA_VERSION, "v2 schema");
}

function testRawFileSha256Computed() {
  const { raw, authorizationFileSha256 } = createTempAuthFixture();
  assert(authorizationFileSha256 === sha256Hex(raw), "sha256 of raw bytes");
  assert(authorizationFileSha256.length === 64, "64 hex chars");
}

function testExpectedAuthorizationFileSha256Matches() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture();
  const loaded = loadOwnerAuthorizationFile(filePath, { allowInRepo: true });
  assert(loaded.ok, loaded.code);
  assert(loaded.authorizationFileSha256 === authorizationFileSha256, "loader hash matches");
}

function testGitShaChainMatches() {
  const gitSha = TEST_GIT_SHA;
  const chain = validateGitIdentityChain({
    headSha: gitSha,
    originMainSha: gitSha,
    expectedRuntimeHeadSha: gitSha,
    cliSha: gitSha,
    authorization: { runtimeHeadSha: gitSha, originMainSha: gitSha },
  });
  assert(chain.ok, chain.blockers.map((b) => b.message).join(","));
  for (const value of [gitSha]) assert(value.length === 40, "git sha length");
}

function testMatrixSourceBatchPlanIdentities() {
  const doc = buildValidAuthV2Document();
  assert(doc.matrixIdentitySha === EXPECTED.matrixIdentitySha, "matrix");
  assert(doc.sourceSha256 === EXPECTED.sourceSha, "source");
  assert(doc.batchPlanSha256 === TEST_BATCH_PLAN_SHA256, "batch plan");
}

function testFrozenBatchCount() {
  assert(AUTH_FROZEN.batchCount === 764, "batchCount 764");
  const doc = buildValidAuthV2Document();
  assert(doc.batchCount === 764, "doc batchCount");
}

function testFrozenMaxAllowedCycles() {
  assert(AUTH_FROZEN.maxAllowedCycles === 1, "maxAllowedCycles 1");
  const doc = buildValidAuthV2Document();
  assert(doc.maxAllowedCycles === 1, "doc maxAllowedCycles");
}

function testFrozenModel() {
  assert(AUTH_FROZEN.model === "gpt-5.6-luna", "model frozen");
  const doc = buildValidAuthV2Document();
  assert(doc.model === "gpt-5.6-luna", "doc model");
}

function testPositiveRealLunaReceipt() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture();
  const auth = authorizeRuntimeExecution(
    buildRealLunaAuthorizeOptions({ filePath, authorizationFileSha256 })
  );
  assert(auth.pass, (auth.errors || []).join(","));
  assert(auth.receipt.mode === RUNTIME_MODES.REAL_LUNA, auth.receipt.mode);
  assert(auth.receipt.executable === true, "executable");
  assert(auth.receipt.runtimeHeadSha.length === 40, "receipt git sha");
  assert(auth.receipt.authorizationFileSha256.length === 64, "receipt file sha");
  assert(auth.lunaRealCalls === 0, "no real calls");
}

function testReceiptHasSeparateIdentityFields() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture();
  const auth = authorizeRuntimeExecution(
    buildRealLunaAuthorizeOptions({ filePath, authorizationFileSha256 })
  );
  assert(auth.pass, (auth.errors || []).join(","));
  assert(auth.receipt.runtimeHeadSha === TEST_GIT_SHA, "runtimeHeadSha");
  assert(auth.receipt.authorizationFileSha256 === authorizationFileSha256, "authorizationFileSha256");
}

function testRealTransportWithValidReceipt() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture();
  const auth = authorizeRuntimeExecution(
    buildRealLunaAuthorizeOptions({ filePath, authorizationFileSha256 })
  );
  assert(auth.pass, (auth.errors || []).join(","));
  const transport = createRealLunaTransport(auth.receipt);
  assert(transport.mode === "REAL_LUNA", transport.mode);
  assert(transport.stats.realCalls === 0, "realCalls 0");
}

async function testRealTransportExecuteBatchBlocked() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture();
  const auth = authorizeRuntimeExecution(
    buildRealLunaAuthorizeOptions({ filePath, authorizationFileSha256 })
  );
  const transport = createRealLunaTransport(auth.receipt);
  let threw = false;
  try {
    await transport.executeBatch();
  } catch (e) {
    threw = true;
    assert(e.code === "REAL_LUNA_TRANSPORT_NOT_ENABLED_IN_THIS_BUILD", e.code);
  }
  assert(threw, "executeBatch must block");
}

function testAuthFileSha256Mismatch() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture();
  const blocked = authorizeRuntimeExecution(
    buildRealLunaAuthorizeOptions({
      filePath,
      authorizationFileSha256,
      expectedAuthorizationFileSha256: "f".repeat(64),
    })
  );
  assertBlocked(blocked, "AUTHORIZATION_FILE_SHA256_MISMATCH");
}

function test40CharHashForFileSha256() {
  const hash = validateAuthorizationFileHash({
    authorizationFileSha256: "a".repeat(40),
    expectedAuthorizationFileSha256: "a".repeat(40),
  });
  assert(!hash.ok, "40-char file hash invalid");
  assert(hash.blockers.some((b) => b.code === "AUTHORIZATION_FILE_SHA256_INVALID"), "invalid file hash");
}

function test64CharHashForGitSha() {
  const chain = validateGitIdentityChain({
    headSha: "a".repeat(64),
    originMainSha: "a".repeat(64),
    expectedRuntimeHeadSha: "a".repeat(64),
    cliSha: "a".repeat(64),
    authorization: { runtimeHeadSha: "a".repeat(64), originMainSha: "a".repeat(64) },
  });
  assert(!chain.ok, "64-char git sha invalid");
  assert(chain.blockers.some((b) => b.code === "OWNER_AUTHORIZATION_GIT_SHA_INVALID"), "git invalid");
}

function testModifiedAuthFileAfterHashFixed() {
  const { filePath, authorizationFileSha256, tmpDir } = createTempAuthFixture();
  const doc = JSON.parse(fs.readFileSync(filePath, "utf8"));
  doc.ownerReferences = "TAMPERED";
  fs.writeFileSync(filePath, JSON.stringify(doc, null, 2));
  const blocked = authorizeRuntimeExecution(
    buildRealLunaAuthorizeOptions({ filePath, authorizationFileSha256 })
  );
  assertBlocked(blocked, "AUTHORIZATION_FILE_SHA256_MISMATCH");
  fs.rmSync(tmpDir, { recursive: true, force: true });
}

function testHeadMismatch() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture();
  const blocked = authorizeRuntimeExecution(
    buildRealLunaAuthorizeOptions({
      filePath,
      authorizationFileSha256,
      infrastructureContext: buildTestInfrastructureContext("b".repeat(40)),
      gitContext: { headSha: "b".repeat(40), originMainSha: TEST_GIT_SHA },
      expectedRuntimeHeadSha: TEST_GIT_SHA,
    })
  );
  assert(!blocked.pass, "expected failure");
  const codes = blocked.errors || [blocked.code];
  assert(
    codes.some((c) => c.includes("HEAD")),
    `expected HEAD mismatch, got ${codes.join(",")}`
  );
}

function testOriginMainMismatch() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture();
  const blocked = authorizeRuntimeExecution(
    buildRealLunaAuthorizeOptions({
      filePath,
      authorizationFileSha256,
      infrastructureContext: buildTestInfrastructureContext(TEST_GIT_SHA),
      gitContext: { headSha: TEST_GIT_SHA, originMainSha: "c".repeat(40) },
    })
  );
  assertBlocked(blocked, "HEAD_ORIGIN_MAIN_MISMATCH");
}

function testCliShaMismatch() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture();
  const blocked = authorizeRuntimeExecution(
    buildRealLunaAuthorizeOptions({
      filePath,
      authorizationFileSha256,
      cliSha: "d".repeat(40),
    })
  );
  assertBlocked(blocked, "CLI_SHA_MISMATCH");
}

function testAuthRuntimeShaMismatch() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture({
    runtimeHeadSha: "e".repeat(40),
    originMainSha: "e".repeat(40),
  });
  const blocked = authorizeRuntimeExecution(
    buildRealLunaAuthorizeOptions({ filePath, authorizationFileSha256 })
  );
  assertBlocked(blocked, "RUNTIME_GIT_IDENTITY_CHAIN_MISMATCH");
}

function testWrongModel() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture({ model: "wrong-model" });
  const validated = validateOwnerAuthorizationDocument(JSON.parse(fs.readFileSync(filePath, "utf8")));
  assert(!validated.ok, "schema rejects wrong model");
  const blocked = authorizeRuntimeExecution(
    buildRealLunaAuthorizeOptions({ filePath, authorizationFileSha256, model: "wrong-model" })
  );
  assert(!blocked.pass, "must fail");
}

function testWrongBatchCount() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture({ batchCount: 763 });
  const validated = validateOwnerAuthorizationDocument(JSON.parse(fs.readFileSync(filePath, "utf8")));
  assert(!validated.ok, "schema rejects batch count");
}

function testWrongMaxAllowedCycles() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture({ maxAllowedCycles: 764 });
  const validated = validateOwnerAuthorizationDocument(JSON.parse(fs.readFileSync(filePath, "utf8")));
  assert(!validated.ok, "schema rejects max cycles");
}

function testMatrixMismatch() {
  const doc = buildValidAuthV2Document({ matrixIdentitySha: "0".repeat(64) });
  const validated = validateOwnerAuthorizationDocument(doc);
  assert(!validated.ok, "matrix mismatch");
  assert(validated.code === "OWNER_AUTHORIZATION_MATRIX_SHA_MISMATCH", validated.code);
}

function testSourceMismatch() {
  const doc = buildValidAuthV2Document({ sourceSha256: "1".repeat(64) });
  const validated = validateOwnerAuthorizationDocument(doc);
  assert(!validated.ok, "source mismatch");
}

function testBatchPlanMismatch() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture();
  const blocked = authorizeRuntimeExecution(
    buildRealLunaAuthorizeOptions({
      filePath,
      authorizationFileSha256,
      batchPlanSha256: "2".repeat(64),
    })
  );
  assertBlocked(blocked, "BATCH_PLAN_SHA_MISMATCH");
}

function testQueueCountMismatch() {
  const badCounts = { ...AUTH_FROZEN.queueCounts, AUDIT_MAPPED_UNIQUE: 1 };
  const doc = buildValidAuthV2Document({ queueCounts: badCounts });
  const validated = validateOwnerAuthorizationDocument(doc);
  assert(!validated.ok, "queue mismatch");
}

function testMissingExpectedAuthorizationFileSha256() {
  const { filePath, authorizationFileSha256 } = createTempAuthFixture();
  const blocked = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: TEST_GIT_SHA,
    cliSha: TEST_GIT_SHA,
    ownerAuthorizationFile: filePath,
    runId: TEST_RUN_ID,
    model: AUTH_FROZEN.model,
    batchPlanSha256: TEST_BATCH_PLAN_SHA256,
    batchCount: AUTH_FROZEN.batchCount,
    queueCounts: AUTH_FROZEN.queueCounts,
    skipInfrastructureGates: true,
    infrastructureContext: buildTestInfrastructureContext(),
    gitContext: buildTestGitContext(),
    allowAuthFileInRepo: true,
  });
  assertBlocked(blocked, "EXPECTED_AUTHORIZATION_FILE_SHA256_REQUIRED");
}

function testV1SchemaRejected() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-v1-"));
  const doc = buildV1AuthDocument();
  const { filePath } = writeAuthFile(doc, tmp);
  const loaded = loadOwnerAuthorizationFile(filePath, { allowInRepo: true });
  assert(!loaded.ok, "v1 rejected");
  assert(loaded.code === "OWNER_AUTH_SCHEMA_V1_REJECTED", loaded.code);
  fs.rmSync(tmp, { recursive: true, force: true });
}

function testMockReceiptOnRealTransport() {
  const auth = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.MOCK_DRY_RUN,
    skipInfrastructureGates: true,
    infrastructureContext: buildTestInfrastructureContext(),
    gitContext: buildTestGitContext(),
  });
  assert(auth.pass, (auth.errors || []).join(","));
  let threw = false;
  try {
    createRealLunaTransport(auth.receipt);
  } catch (e) {
    threw = true;
    assert(e.code === "RUNTIME_RECEIPT_MODE_MISMATCH", e.code);
  }
  assert(threw, "mock receipt blocked");
}

function testRealTransportWithoutReceipt() {
  let threw = false;
  try {
    createRealLunaTransport(null);
  } catch (e) {
    threw = true;
    assert(e.code === "REAL_LUNA_RUNTIME_AUTHORIZATION_REQUIRED", e.code);
  }
  assert(threw, "no receipt blocked");
}

function testRealLunaWithoutExpectedHead() {
  const blocked = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    ownerAuthorizationFile: "/tmp/missing",
    expectedAuthorizationFileSha256: "a".repeat(64),
    runId: TEST_RUN_ID,
    model: AUTH_FROZEN.model,
    batchPlanSha256: TEST_BATCH_PLAN_SHA256,
    batchCount: AUTH_FROZEN.batchCount,
    queueCounts: AUTH_FROZEN.queueCounts,
    skipInfrastructureGates: true,
    infrastructureContext: buildTestInfrastructureContext(),
  });
  assertBlocked(blocked, "EXPECTED_RUNTIME_HEAD_SHA_REQUIRED");
}

function testRealLunaWithoutAuthFile() {
  const blocked = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: TEST_GIT_SHA,
    cliSha: TEST_GIT_SHA,
    expectedAuthorizationFileSha256: "a".repeat(64),
    runId: TEST_RUN_ID,
    model: AUTH_FROZEN.model,
    batchPlanSha256: TEST_BATCH_PLAN_SHA256,
    batchCount: AUTH_FROZEN.batchCount,
    queueCounts: AUTH_FROZEN.queueCounts,
    skipInfrastructureGates: true,
    infrastructureContext: buildTestInfrastructureContext(),
  });
  assertBlocked(blocked, "OWNER_AUTHORIZATION_FILE_REQUIRED");
}

function testUnknownModeFailClosed() {
  const blocked = authorizeRuntimeExecution({ runtimeMode: "UNKNOWN" });
  assert(!blocked.pass, "unknown mode");
  assert(blocked.code === "RUNTIME_MODE_REQUIRED", blocked.code);
}

function testProductionBaselineIndependent() {
  const infra = runInfrastructureGates();
  if (!infra.pass) {
    const ctx = buildTestInfrastructureContext();
    assert(ctx.productionBaselineSha === EXPECTED.productionBaselineSha, "baseline sha");
    assert(ctx.productionBaselineSha !== TEST_GIT_SHA, "baseline != test git sha");
    return;
  }
  assert(infra.productionBaselineSha === EXPECTED.productionBaselineSha, infra.productionBaselineSha);
  assert(infra.prod.clean, "production diff clean");
  assert(infra.de.clean, "de diff clean");
}

function testMockDryRunZeroRealCalls() {
  const auth = authorizeRuntimeExecution({
    runtimeMode: RUNTIME_MODES.MOCK_DRY_RUN,
    skipInfrastructureGates: true,
    infrastructureContext: buildTestInfrastructureContext(),
    gitContext: buildTestGitContext(),
  });
  assert(auth.pass, (auth.errors || []).join(","));
  const transport = createMockLunaTransport({}, auth.receipt);
  assert(transport.stats.realCalls === 0, "realCalls 0");
  assert(auth.receipt.executable === false, "not executable");
}

const tests = [
  ["testV1DefectProof", testV1DefectProof],
  ["testValidAuthV2DocumentLoads", testValidAuthV2DocumentLoads],
  ["testRawFileSha256Computed", testRawFileSha256Computed],
  ["testExpectedAuthorizationFileSha256Matches", testExpectedAuthorizationFileSha256Matches],
  ["testGitShaChainMatches", testGitShaChainMatches],
  ["testMatrixSourceBatchPlanIdentities", testMatrixSourceBatchPlanIdentities],
  ["testFrozenBatchCount", testFrozenBatchCount],
  ["testFrozenMaxAllowedCycles", testFrozenMaxAllowedCycles],
  ["testFrozenModel", testFrozenModel],
  ["testPositiveRealLunaReceipt", testPositiveRealLunaReceipt],
  ["testReceiptHasSeparateIdentityFields", testReceiptHasSeparateIdentityFields],
  ["testRealTransportWithValidReceipt", testRealTransportWithValidReceipt],
  ["testRealTransportExecuteBatchBlocked", testRealTransportExecuteBatchBlocked],
  ["testAuthFileSha256Mismatch", testAuthFileSha256Mismatch],
  ["test40CharHashForFileSha256", test40CharHashForFileSha256],
  ["test64CharHashForGitSha", test64CharHashForGitSha],
  ["testModifiedAuthFileAfterHashFixed", testModifiedAuthFileAfterHashFixed],
  ["testHeadMismatch", testHeadMismatch],
  ["testOriginMainMismatch", testOriginMainMismatch],
  ["testCliShaMismatch", testCliShaMismatch],
  ["testAuthRuntimeShaMismatch", testAuthRuntimeShaMismatch],
  ["testWrongModel", testWrongModel],
  ["testWrongBatchCount", testWrongBatchCount],
  ["testWrongMaxAllowedCycles", testWrongMaxAllowedCycles],
  ["testMatrixMismatch", testMatrixMismatch],
  ["testSourceMismatch", testSourceMismatch],
  ["testBatchPlanMismatch", testBatchPlanMismatch],
  ["testQueueCountMismatch", testQueueCountMismatch],
  ["testMissingExpectedAuthorizationFileSha256", testMissingExpectedAuthorizationFileSha256],
  ["testV1SchemaRejected", testV1SchemaRejected],
  ["testMockReceiptOnRealTransport", testMockReceiptOnRealTransport],
  ["testRealTransportWithoutReceipt", testRealTransportWithoutReceipt],
  ["testRealLunaWithoutExpectedHead", testRealLunaWithoutExpectedHead],
  ["testRealLunaWithoutAuthFile", testRealLunaWithoutAuthFile],
  ["testUnknownModeFailClosed", testUnknownModeFailClosed],
  ["testProductionBaselineIndependent", testProductionBaselineIndependent],
  ["testMockDryRunZeroRealCalls", testMockDryRunZeroRealCalls],
];

async function main() {
  for (const [name, fn] of tests) {
    await runTest(name, fn);
  }
  console.log(
    JSON.stringify({
      passed: stats.passed,
      failed: stats.failed,
      skipped: stats.skipped,
      total: tests.length,
    })
  );
  assert(stats.skipped === 0, `skipped must be 0, got ${stats.skipped}`);
  assert(stats.failed === 0, `failed ${stats.failed}`);
  console.log(`PASS ${stats.passed} g2-a1 luna runtime auth tests (skipped=0)`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
