#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("../audit-common");
const {
  buildOwnerAuthorizationDocument,
  loadOwnerAuthorizationFile,
  OWNER_AUTH_SCHEMA_VERSION,
  OWNER_AUTH_SCHEMA_VERSION_V1,
} = require("./owner-authorization");
const { AUTH_FROZEN, EXPECTED } = require("./constants");
const { hashObject, sha256Hex } = require("./hash");
const { RUNTIME_MODES } = require("./runtime-mode");
const { REAL_LUNA_FORBIDDEN_OPTIONS } = require("./runtime-gates");

const TEST_RUN_ID = "g2-a1-proposal-test-run";
const ISOLATED_RUN_ID = "g2-a1-proposal-isolated-test";

function buildTestInfrastructureContext(gitSha) {
  return {
    headSha: gitSha,
    originMainSha: gitSha,
    productionBaselineSha: EXPECTED.productionBaselineSha,
    matrixIdentitySha: EXPECTED.matrixIdentitySha,
    sourceSha: EXPECTED.sourceSha,
    prod: { clean: true, changed: [] },
    de: { clean: true, changed: [] },
  };
}

function buildTestGitContext(gitSha) {
  return { headSha: gitSha, originMainSha: gitSha };
}

function buildValidAuthV2Document(overrides = {}) {
  const gitSha = overrides.runtimeHeadSha || overrides.originMainSha;
  if (!gitSha) throw new Error("runtimeHeadSha required for auth document fixture");
  return buildOwnerAuthorizationDocument({
    runtimeHeadSha: gitSha,
    originMainSha: gitSha,
    runId: overrides.runId || TEST_RUN_ID,
    model: AUTH_FROZEN.model,
    batchPlanSha256: overrides.batchPlanSha256,
    queueCounts: AUTH_FROZEN.queueCounts,
    batchCount: AUTH_FROZEN.batchCount,
    maxAllowedCycles: AUTH_FROZEN.maxAllowedCycles,
    ownerReferences: "OWNER-TEST-REF",
    ...overrides,
  });
}

function writeAuthFile(doc, dir) {
  const filePath = path.join(dir, "owner-auth.json");
  const raw = JSON.stringify(doc, null, 2);
  fs.writeFileSync(filePath, raw);
  return {
    filePath,
    raw,
    authorizationFileSha256: sha256Hex(raw),
    doc,
  };
}

function buildMockAuthorizeOptions(overrides = {}) {
  return {
    runtimeMode: RUNTIME_MODES.MOCK_DRY_RUN,
    skipInfrastructureGates: true,
    infrastructureContext: buildTestInfrastructureContext("0".repeat(40)),
    gitContext: buildTestGitContext("0".repeat(40)),
    ...overrides,
  };
}

function buildProductionRealLunaOptions({
  filePath,
  authorizationFileSha256,
  gitSha,
  batchPlanSha256,
  runId = TEST_RUN_ID,
  queueCounts = AUTH_FROZEN.queueCounts,
}) {
  return {
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: gitSha,
    cliSha: gitSha,
    ownerAuthorizationFile: filePath,
    expectedAuthorizationFileSha256: authorizationFileSha256,
    runId,
    model: AUTH_FROZEN.model,
    batchPlanSha256,
    batchCount: AUTH_FROZEN.batchCount,
    maxAllowedCycles: AUTH_FROZEN.maxAllowedCycles,
    queueCounts,
  };
}

function createTempAuthFixture(docOverrides = {}, authDir) {
  const tmpDir = authDir || fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-v2-"));
  const doc = buildValidAuthV2Document(docOverrides);
  const written = writeAuthFile(doc, tmpDir);
  return { tmpDir, ...written };
}

function buildV1AuthDocument(gitSha) {
  return {
    schemaVersion: OWNER_AUTH_SCHEMA_VERSION_V1,
    authorizationPurpose: "G2_A1_LUNA_PROPOSAL_EXECUTION",
    repository: "sandrisbrikmanis-rgb/de-lv-app",
    runtimeHeadSha: gitSha,
    originMainSha: gitSha,
    authorizationSha256: gitSha,
    runId: TEST_RUN_ID,
    model: AUTH_FROZEN.model,
    matrixIdentitySha: EXPECTED.matrixIdentitySha,
    sourceSha256: EXPECTED.sourceSha,
    batchPlanSha256: "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890",
    queueCounts: AUTH_FROZEN.queueCounts,
    batchCount: AUTH_FROZEN.batchCount,
    maxAllowedCycles: AUTH_FROZEN.maxAllowedCycles,
    allowedTransport: "REAL_LUNA",
    issuedAt: new Date().toISOString(),
    ownerReferences: "OWNER-V1-TEST",
  };
}

let cachedIsolatedClone = null;

function prepareIsolatedGitClone() {
  if (cachedIsolatedClone) return { ...cachedIsolatedClone };
  const tmpBase = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-isolated-git-"));
  const cloneDir = path.join(tmpBase, "repo");
  const branch = execSync("git rev-parse --abbrev-ref HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  execSync(`git clone --no-hardlinks ${ROOT} ${cloneDir}`);
  execSync(`git checkout ${branch}`, { cwd: cloneDir });
  const headSha = execSync("git rev-parse HEAD", { cwd: cloneDir, encoding: "utf8" }).trim();
  execSync(`git update-ref refs/remotes/origin/main ${headSha}`, { cwd: cloneDir });
  cachedIsolatedClone = { tmpBase, cloneDir, headSha, branch };
  return { ...cachedIsolatedClone };
}

function runIsolatedProductionRealLunaAuth() {
  const { tmpBase, cloneDir, headSha } = prepareIsolatedGitClone();
  const authDir = path.join(tmpBase, "auth-outside");
  fs.mkdirSync(authDir, { recursive: true });

  const runner = path.join(ROOT, "scripts/run-isolated-real-luna-auth-check.js");
  const stdout = execSync(`node ${runner} ${authDir}`, { cwd: cloneDir, encoding: "utf8" });
  const result = JSON.parse(stdout.trim().split("\n").pop());
  return {
    tmpBase,
    cloneDir,
    authPath: result.authPath,
    authorizationFileSha256: result.authorizationFileSha256,
    batchPlanSha256: result.batchPlanSha256,
    result,
  };
}

module.exports = {
  TEST_RUN_ID,
  ISOLATED_RUN_ID,
  AUTH_FROZEN,
  EXPECTED,
  REAL_LUNA_FORBIDDEN_OPTIONS,
  buildTestInfrastructureContext,
  buildTestGitContext,
  buildValidAuthV2Document,
  writeAuthFile,
  buildMockAuthorizeOptions,
  buildProductionRealLunaOptions,
  createTempAuthFixture,
  buildV1AuthDocument,
  loadOwnerAuthorizationFile,
  prepareIsolatedGitClone,
  runIsolatedProductionRealLunaAuth,
  hashObject,
  sha256Hex,
  OWNER_AUTH_SCHEMA_VERSION,
};
