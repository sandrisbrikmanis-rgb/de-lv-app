#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  authorizeRuntimeExecution,
  validateOwnerAuthorizationDocument,
  proveV1Defect,
  validateGitIdentityChain,
  validateAuthorizationFileHash,
  createRealLunaTransport,
  createMockLunaTransport,
  runInfrastructureGates,
  buildQueues,
  buildBatchPlan,
  assertAuthorizedRuntimeReceipt,
  RUNTIME_MODES,
  EXPECTED,
  AUTH_FROZEN,
} = require("./lib/g2-a1-luna-proposal");
const {
  TEST_RUN_ID,
  REAL_LUNA_FORBIDDEN_OPTIONS,
  buildValidAuthV2Document,
  writeAuthFile,
  buildMockAuthorizeOptions,
  buildProductionRealLunaOptions,
  createTempAuthFixture,
  buildV1AuthDocument,
  loadOwnerAuthorizationFile,
  runIsolatedProductionRealLunaAuth,
  sha256Hex,
  hashObject,
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

function baseRealOptions(filePath, authorizationFileSha256, gitSha, batchPlanSha256) {
  return buildProductionRealLunaOptions({
    filePath,
    authorizationFileSha256,
    gitSha,
    batchPlanSha256,
  });
}

function rejectReceipt(receipt) {
  let code = null;
  try {
    assertAuthorizedRuntimeReceipt(receipt, RUNTIME_MODES.REAL_LUNA);
  } catch (error) {
    code = error.code;
  }
  return code;
}

function auditPublicReceiptExports() {
  const libRoot = path.join(__dirname, "lib/g2-a1-luna-proposal");
  const forbidden = [
    "registerIssuedRealLunaReceipt",
    "buildRealLunaReceipt",
    "isIssuedRealLunaReceipt",
    "issueRealLunaReceipt",
  ];
  const indexKeys = Object.keys(require("./lib/g2-a1-luna-proposal"));
  const harnessKeys = Object.keys(require("./lib/g2-a1-luna-proposal/auth-test-harness"));
  const indexViolations = forbidden.filter((name) => indexKeys.includes(name));
  const harnessViolations = forbidden.filter((name) => harnessKeys.includes(name));
  const registryPath = path.join(libRoot, "runtime-receipt-registry.js");
  const sourceViolations = [];
  for (const file of fs.readdirSync(libRoot).filter((f) => f.endsWith(".js"))) {
    const content = fs.readFileSync(path.join(libRoot, file), "utf8");
    for (const name of forbidden) {
      if (content.includes(`${name},`) || content.includes(`${name}:`)) {
        if (content.includes("module.exports")) sourceViolations.push(`${file}:${name}`);
      }
    }
  }
  return {
    indexViolations,
    harnessViolations,
    registryExists: fs.existsSync(registryPath),
    sourceViolations,
  };
}

function testDirectRegistryImportUnavailable() {
  const registryPath = path.join(__dirname, "lib/g2-a1-luna-proposal/runtime-receipt-registry.js");
  assert(!fs.existsSync(registryPath), "runtime-receipt-registry.js must be removed");
  let threw = false;
  try {
    require("./lib/g2-a1-luna-proposal/runtime-receipt-registry");
  } catch (error) {
    threw = error.code === "MODULE_NOT_FOUND";
  }
  assert(threw, "direct registry import must fail");
}

function testFrozenFakeReceiptRejected() {
  const fake = Object.freeze({ mode: RUNTIME_MODES.REAL_LUNA, validated: true, executable: true });
  assert(rejectReceipt(fake) === "RUNTIME_RECEIPT_NOT_ISSUED", rejectReceipt(fake));
  let transportCode = null;
  try {
    createRealLunaTransport(fake);
  } catch (error) {
    transportCode = error.code;
  }
  assert(transportCode === "RUNTIME_RECEIPT_NOT_ISSUED", transportCode);
}

function testFakeReceiptWithFullShapeRejected() {
  const isolated = runIsolatedProductionRealLunaAuth();
  const template = isolated.result.auth.receipt;
  const fake = Object.freeze({
    mode: RUNTIME_MODES.REAL_LUNA,
    validated: true,
    executable: true,
    runtimeHeadSha: template.runtimeHeadSha,
    originMainSha: template.originMainSha,
    authorizationFileSha256: template.authorizationFileSha256,
    batchPlanSha256: template.batchPlanSha256,
    runId: template.runId,
    model: template.model,
    validatedAt: template.validatedAt,
  });
  assert(rejectReceipt(fake) === "RUNTIME_RECEIPT_NOT_ISSUED", rejectReceipt(fake));
}

function testReceiptFromOtherProcessRejected() {
  const isolated = runIsolatedProductionRealLunaAuth();
  const receiptJson = JSON.stringify(isolated.result.auth.receipt);
  const scriptPath = path.join(os.tmpdir(), `receipt-other-process-${process.pid}.js`);
  fs.writeFileSync(
    scriptPath,
    `const { assertAuthorizedRuntimeReceipt, RUNTIME_MODES } = require(${JSON.stringify(path.join(ROOT, "scripts/lib/g2-a1-luna-proposal"))});
try {
  assertAuthorizedRuntimeReceipt(JSON.parse(process.env.RECEIPT_JSON), RUNTIME_MODES.REAL_LUNA);
  process.exit(2);
} catch (error) {
  console.log(error.code || "ERR");
}
`
  );
  const out = execSync(`node ${scriptPath}`, {
    encoding: "utf8",
    env: { ...process.env, RECEIPT_JSON: receiptJson },
  }).trim();
  fs.unlinkSync(scriptPath);
  assert(out === "RUNTIME_RECEIPT_NOT_ISSUED", out);
}

function testPublicIndexHasNoIssuerExport() {
  const audit = auditPublicReceiptExports();
  assert(audit.indexViolations.length === 0, audit.indexViolations.join(","));
  assert(audit.harnessViolations.length === 0, audit.harnessViolations.join(","));
  assert(!audit.registryExists, "registry file must not exist");
  assert(audit.sourceViolations.length === 0, audit.sourceViolations.join(","));
}

function testEachOverrideForbiddenInRealLuna() {
  const gitSha = "a".repeat(40);
  const { filePath, authorizationFileSha256 } = createTempAuthFixture({
    runtimeHeadSha: gitSha,
    originMainSha: gitSha,
    batchPlanSha256: "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890",
  });
  const base = baseRealOptions(
    filePath,
    authorizationFileSha256,
    gitSha,
    "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890"
  );

  for (const key of REAL_LUNA_FORBIDDEN_OPTIONS) {
    const extra = {};
    if (key === "skipInfrastructureGates") extra[key] = true;
    else if (key === "infrastructureContext") extra[key] = { headSha: gitSha, originMainSha: gitSha };
    else if (key === "gitContext") extra[key] = { headSha: gitSha, originMainSha: gitSha };
    else if (key === "skipWorktreeCheck") extra[key] = true;
    else if (key === "allowAuthFileInRepo") extra[key] = true;
    else if (key === "ownerPackRoot") extra[key] = "/tmp";
    else if (key === "matrixPath") extra[key] = "/tmp/matrix.json";
    else extra[key] = true;

    const blocked = authorizeRuntimeExecution({ ...base, ...extra });
    assertBlocked(blocked, "TEST_OVERRIDE_FORBIDDEN_IN_REAL_LUNA");
  }
}

function testMultipleOverridesForbidden() {
  const gitSha = "b".repeat(40);
  const { filePath, authorizationFileSha256 } = createTempAuthFixture({
    runtimeHeadSha: gitSha,
    originMainSha: gitSha,
    batchPlanSha256: "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890",
  });
  const blocked = authorizeRuntimeExecution({
    ...baseRealOptions(
      filePath,
      authorizationFileSha256,
      gitSha,
      "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890"
    ),
    skipInfrastructureGates: true,
    gitContext: { headSha: gitSha, originMainSha: gitSha },
    allowAuthFileInRepo: true,
  });
  assertBlocked(blocked, "TEST_OVERRIDE_FORBIDDEN_IN_REAL_LUNA");
}

function testMissingCliSha() {
  const gitSha = "c".repeat(40);
  const { filePath, authorizationFileSha256 } = createTempAuthFixture({
    runtimeHeadSha: gitSha,
    originMainSha: gitSha,
    batchPlanSha256: "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890",
  });
  const opts = baseRealOptions(
    filePath,
    authorizationFileSha256,
    gitSha,
    "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890"
  );
  delete opts.cliSha;
  const blocked = authorizeRuntimeExecution(opts);
  assertBlocked(blocked, "CLI_SHA_REQUIRED");
}

function testManualReceiptRejected() {
  const forged = { mode: RUNTIME_MODES.REAL_LUNA, validated: true, executable: true };
  let code = null;
  try {
    assertAuthorizedRuntimeReceipt(forged, RUNTIME_MODES.REAL_LUNA);
  } catch (e) {
    code = e.code;
  }
  assert(code === "RUNTIME_RECEIPT_NOT_ISSUED", code);
}

function testClonedReceiptRejected() {
  const isolated = runIsolatedProductionRealLunaAuth();
  assert(isolated.result.ok, JSON.stringify(isolated.result));
  const cloned = { ...isolated.result.auth.receipt };
  let code = null;
  try {
    assertAuthorizedRuntimeReceipt(cloned, RUNTIME_MODES.REAL_LUNA);
  } catch (e) {
    code = e.code;
  }
  assert(code === "RUNTIME_RECEIPT_NOT_ISSUED", code);
}

function testSerializedReceiptRejected() {
  const isolated = runIsolatedProductionRealLunaAuth();
  const parsed = JSON.parse(JSON.stringify(isolated.result.auth.receipt));
  let code = null;
  try {
    assertAuthorizedRuntimeReceipt(parsed, RUNTIME_MODES.REAL_LUNA);
  } catch (e) {
    code = e.code;
  }
  assert(code === "RUNTIME_RECEIPT_NOT_ISSUED", code);
}

function testModifiedReceiptRejected() {
  const isolated = runIsolatedProductionRealLunaAuth();
  assert(isolated.result.receiptModifyBlocked === true, "frozen receipt cannot be modified in-process");
}

function testMockReceiptOnRealTransport() {
  const auth = authorizeRuntimeExecution(buildMockAuthorizeOptions());
  assert(auth.pass, (auth.errors || []).join(","));
  let code = null;
  try {
    createRealLunaTransport(auth.receipt);
  } catch (e) {
    code = e.code;
  }
  assert(code === "RUNTIME_RECEIPT_MODE_MISMATCH", code);
}

function testAuthFileInRepoRejected() {
  const gitSha = execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();
  const infra = runInfrastructureGates();
  const built = buildQueues({ gates: infra });
  const plan = buildBatchPlan(built.queues);
  const doc = buildValidAuthV2Document({
    runtimeHeadSha: gitSha,
    originMainSha: gitSha,
    batchPlanSha256: hashObject(plan),
    queueCounts: built.counts,
  });
  const repoAuthDir = path.join(ROOT, "reports", "temp", `auth-in-repo-${process.pid}`);
  fs.mkdirSync(repoAuthDir, { recursive: true });
  const { filePath } = writeAuthFile(doc, repoAuthDir);
  const loaded = loadOwnerAuthorizationFile(filePath);
  assert(!loaded.ok, "repo auth must fail");
  assert(loaded.code === "OWNER_AUTHORIZATION_FILE_IN_REPO", loaded.code);
  fs.rmSync(repoAuthDir, { recursive: true, force: true });
}

function testAuthFileViaParentSymlinkIntoRepoRejected() {
  const gitSha = execSync("git rev-parse HEAD", { encoding: "utf8" }).trim();
  const infra = runInfrastructureGates();
  const built = buildQueues({ gates: infra });
  const plan = buildBatchPlan(built.queues);
  const doc = buildValidAuthV2Document({
    runtimeHeadSha: gitSha,
    originMainSha: gitSha,
    batchPlanSha256: hashObject(plan),
    queueCounts: built.counts,
  });
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-symlink-auth-"));
  const linkPath = path.join(tmp, "repo-link");
  const authDir = path.join(tmp, "auth");
  fs.mkdirSync(authDir);
  try {
    fs.symlinkSync(ROOT, linkPath, "dir");
    const targetDir = path.join(linkPath, "reports", "temp", "symlink-auth");
    fs.mkdirSync(targetDir, { recursive: true });
    const { filePath } = writeAuthFile(doc, targetDir);
    const loaded = loadOwnerAuthorizationFile(filePath);
    assert(!loaded.ok, "symlink parent into repo must fail");
    assert(
      loaded.code === "OWNER_AUTHORIZATION_FILE_IN_REPO" || loaded.code === "OWNER_AUTHORIZATION_FILE_SYMLINK",
      loaded.code
    );
  } finally {
    const repoLeak = path.join(ROOT, "reports", "temp", "symlink-auth");
    if (fs.existsSync(repoLeak)) fs.rmSync(repoLeak, { recursive: true, force: true });
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

function testAuthFileSymlinkRejected() {
  const gitSha = "e".repeat(40);
  const { filePath, doc } = createTempAuthFixture({
    runtimeHeadSha: gitSha,
    originMainSha: gitSha,
    batchPlanSha256: "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890",
  });
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-symlink-"));
  const realFile = path.join(tmp, "real.json");
  const linkFile = path.join(tmp, "link.json");
  fs.writeFileSync(realFile, JSON.stringify(doc, null, 2));
  fs.symlinkSync(realFile, linkFile);
  const loaded = loadOwnerAuthorizationFile(linkFile);
  assert(!loaded.ok, "symlink file blocked");
  assert(loaded.code === "OWNER_AUTHORIZATION_FILE_SYMLINK", loaded.code);
  fs.rmSync(tmp, { recursive: true, force: true });
}

function testAuthFileTamperAfterHash() {
  const gitSha = "f".repeat(40);
  const { filePath, authorizationFileSha256, tmpDir } = createTempAuthFixture({
    runtimeHeadSha: gitSha,
    originMainSha: gitSha,
    batchPlanSha256: "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890",
  });
  const doc = JSON.parse(fs.readFileSync(filePath, "utf8"));
  doc.ownerReferences = "TAMPERED";
  fs.writeFileSync(filePath, JSON.stringify(doc, null, 2));
  const loaded = loadOwnerAuthorizationFile(filePath);
  assert(loaded.ok, loaded.code);
  const hashCheck = validateAuthorizationFileHash({
    authorizationFileSha256: loaded.authorizationFileSha256,
    expectedAuthorizationFileSha256: authorizationFileSha256,
  });
  assert(!hashCheck.ok, "tampered file hash must mismatch");
  assert(
    hashCheck.blockers.some((b) => b.code === "AUTHORIZATION_FILE_SHA256_MISMATCH"),
    hashCheck.blockers.map((b) => b.code).join(",")
  );
  fs.rmSync(tmpDir, { recursive: true, force: true });
}

function testIsolatedProductionRealLunaPositivePath() {
  const isolated = runIsolatedProductionRealLunaAuth();
  assert(isolated.result.ok, JSON.stringify(isolated.result));
  assert(isolated.result.headEqualsOrigin, "HEAD must equal origin/main in isolated clone");
  assert(isolated.result.infrastructure.pass, isolated.result.infrastructure.errors?.join(","));
  assert(isolated.result.infrastructure.mockBypass === false, "real infra gates must not be bypassed");
  assert(isolated.result.auth.pass, isolated.result.auth.errors?.join(","));
  assert(isolated.result.auth.receipt.mode === RUNTIME_MODES.REAL_LUNA, isolated.result.auth.receipt.mode);
  assert(isolated.result.auth.receipt.runtimeHeadSha.length === 40, "git sha len");
  assert(isolated.result.auth.receipt.authorizationFileSha256.length === 64, "file sha len");
  assert(isolated.result.receiptFrozen === true, "receipt frozen");
  assert(isolated.result.receiptAcceptedByProductionBoundary === true, "production boundary");
  assert(isolated.result.realCalls === 0, "realCalls 0");
  assert(
    isolated.result.executeBlocked === "REAL_LUNA_TRANSPORT_NOT_ENABLED_IN_THIS_BUILD",
    isolated.result.executeBlocked
  );
}

function testReceiptAcceptedByProductionBoundary() {
  const isolated = runIsolatedProductionRealLunaAuth();
  assert(isolated.result.receiptAcceptedByProductionBoundary === true, "production boundary accepts receipt");
  assert(isolated.result.receiptFrozen === true, "receipt frozen in-process");
  assert(isolated.result.clonedReceiptRejected === "RUNTIME_RECEIPT_NOT_ISSUED", isolated.result.clonedReceiptRejected);
  assert(isolated.result.receiptModifyBlocked === true, "frozen receipt cannot be modified");
}

function testPureValidationFunctionsStillWork() {
  const gitSha = "1".repeat(40);
  const chain = validateGitIdentityChain({
    headSha: gitSha,
    originMainSha: gitSha,
    expectedRuntimeHeadSha: gitSha,
    cliSha: gitSha,
    authorization: { runtimeHeadSha: gitSha, originMainSha: gitSha },
  });
  assert(chain.ok, "git chain validation");

  const doc = buildValidAuthV2Document({
    runtimeHeadSha: gitSha,
    originMainSha: gitSha,
    batchPlanSha256: "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890",
  });
  const validated = validateOwnerAuthorizationDocument(doc);
  assert(validated.ok, validated.code);

  const proof = proveV1Defect();
  assert(proof.gitShaLength === 40 && proof.fileSha256Length === 64, "v1 defect proof");
}

function testV1SchemaRejected() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-v1-"));
  const doc = buildV1AuthDocument("2".repeat(40));
  const { filePath } = writeAuthFile(doc, tmp);
  const loaded = loadOwnerAuthorizationFile(filePath);
  assert(!loaded.ok, "v1 rejected");
  assert(loaded.code === "OWNER_AUTH_SCHEMA_V1_REJECTED", loaded.code);
  fs.rmSync(tmp, { recursive: true, force: true });
}

function testRealTransportWithoutReceipt() {
  let code = null;
  try {
    createRealLunaTransport(null);
  } catch (e) {
    code = e.code;
  }
  assert(code === "REAL_LUNA_RUNTIME_AUTHORIZATION_REQUIRED", code);
}

function testMockDryRunStillWorksWithMockBypass() {
  const auth = authorizeRuntimeExecution(buildMockAuthorizeOptions());
  assert(auth.pass, (auth.errors || []).join(","));
  const transport = createMockLunaTransport({}, auth.receipt);
  assert(transport.stats.realCalls === 0, "mock realCalls 0");
}

function testMissingMandatoryRealFields() {
  const gitSha = "3".repeat(40);
  const { filePath, authorizationFileSha256 } = createTempAuthFixture({
    runtimeHeadSha: gitSha,
    originMainSha: gitSha,
    batchPlanSha256: "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890",
  });
  const opts = baseRealOptions(
    filePath,
    authorizationFileSha256,
    gitSha,
    "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890"
  );
  delete opts.maxAllowedCycles;
  assertBlocked(authorizeRuntimeExecution(opts), "MAX_ALLOWED_CYCLES_REQUIRED");
}

function test40And64CharHashValidation() {
  const badFile = validateAuthorizationFileHash({
    authorizationFileSha256: "a".repeat(40),
    expectedAuthorizationFileSha256: "a".repeat(40),
  });
  assert(!badFile.ok, "40-char file hash invalid");

  const badGit = validateGitIdentityChain({
    headSha: "a".repeat(64),
    originMainSha: "a".repeat(64),
    expectedRuntimeHeadSha: "a".repeat(64),
    cliSha: "a".repeat(64),
    authorization: { runtimeHeadSha: "a".repeat(64), originMainSha: "a".repeat(64) },
  });
  assert(!badGit.ok, "64-char git sha invalid");
}

function testFrozenAuthConstants() {
  assert(AUTH_FROZEN.model === "gpt-5.6-luna", "model");
  assert(AUTH_FROZEN.batchCount === 764, "batchCount");
  assert(AUTH_FROZEN.maxAllowedCycles === 1, "maxAllowedCycles");
}

const tests = [
  ["testDirectRegistryImportUnavailable", testDirectRegistryImportUnavailable],
  ["testPublicIndexHasNoIssuerExport", testPublicIndexHasNoIssuerExport],
  ["testFrozenFakeReceiptRejected", testFrozenFakeReceiptRejected],
  ["testFakeReceiptWithFullShapeRejected", testFakeReceiptWithFullShapeRejected],
  ["testReceiptFromOtherProcessRejected", testReceiptFromOtherProcessRejected],
  ["testEachOverrideForbiddenInRealLuna", testEachOverrideForbiddenInRealLuna],
  ["testMultipleOverridesForbidden", testMultipleOverridesForbidden],
  ["testMissingCliSha", testMissingCliSha],
  ["testManualReceiptRejected", testManualReceiptRejected],
  ["testClonedReceiptRejected", testClonedReceiptRejected],
  ["testSerializedReceiptRejected", testSerializedReceiptRejected],
  ["testModifiedReceiptRejected", testModifiedReceiptRejected],
  ["testMockReceiptOnRealTransport", testMockReceiptOnRealTransport],
  ["testAuthFileInRepoRejected", testAuthFileInRepoRejected],
  ["testAuthFileViaParentSymlinkIntoRepoRejected", testAuthFileViaParentSymlinkIntoRepoRejected],
  ["testAuthFileSymlinkRejected", testAuthFileSymlinkRejected],
  ["testAuthFileTamperAfterHash", testAuthFileTamperAfterHash],
  ["testIsolatedProductionRealLunaPositivePath", testIsolatedProductionRealLunaPositivePath],
  ["testReceiptAcceptedByProductionBoundary", testReceiptAcceptedByProductionBoundary],
  ["testPureValidationFunctionsStillWork", testPureValidationFunctionsStillWork],
  ["testV1SchemaRejected", testV1SchemaRejected],
  ["testRealTransportWithoutReceipt", testRealTransportWithoutReceipt],
  ["testMockDryRunStillWorksWithMockBypass", testMockDryRunStillWorksWithMockBypass],
  ["testMissingMandatoryRealFields", testMissingMandatoryRealFields],
  ["test40And64CharHashValidation", test40And64CharHashValidation],
  ["testFrozenAuthConstants", testFrozenAuthConstants],
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
