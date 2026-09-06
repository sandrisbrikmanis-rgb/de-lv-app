#!/usr/bin/env node
"use strict";

const fs = require("fs");
const os = require("os");
const path = require("path");
const {
  buildOwnerAuthorizationDocument,
  loadOwnerAuthorizationFile,
  OWNER_AUTH_SCHEMA_VERSION,
  OWNER_AUTH_SCHEMA_VERSION_V1,
} = require("./owner-authorization");
const { AUTH_FROZEN, EXPECTED } = require("./constants");
const { hashObject, sha256Hex } = require("./hash");
const { RUNTIME_MODES } = require("./runtime-mode");

const TEST_GIT_SHA = "6e0a26dfa2f56aade0b981c50a71e5eaf94c0b54";
const TEST_RUN_ID = "g2-a1-proposal-test-run";
const TEST_BATCH_PLAN_SHA256 = "c3d4e5f6789012345678901234567890abcdef1234567890abcdef1234567890";

function buildTestInfrastructureContext(gitSha = TEST_GIT_SHA) {
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

function buildTestGitContext(gitSha = TEST_GIT_SHA) {
  return { headSha: gitSha, originMainSha: gitSha };
}

function buildValidAuthV2Document(overrides = {}) {
  const gitSha = overrides.runtimeHeadSha || overrides.originMainSha || TEST_GIT_SHA;
  return buildOwnerAuthorizationDocument({
    runtimeHeadSha: gitSha,
    originMainSha: gitSha,
    runId: TEST_RUN_ID,
    model: AUTH_FROZEN.model,
    batchPlanSha256: overrides.batchPlanSha256 || TEST_BATCH_PLAN_SHA256,
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

function buildRealLunaAuthorizeOptions({
  filePath,
  authorizationFileSha256,
  expectedAuthorizationFileSha256,
  gitSha = TEST_GIT_SHA,
  expectedRuntimeHeadSha,
  cliSha,
  batchPlanSha256 = TEST_BATCH_PLAN_SHA256,
  gitContext,
  infrastructureContext,
  overrides = {},
} = {}) {
  const resolvedGitSha = gitSha;
  const resolvedExpectedHead = expectedRuntimeHeadSha ?? resolvedGitSha;
  const resolvedCliSha = cliSha ?? resolvedExpectedHead;
  const resolvedGitContext = gitContext ?? buildTestGitContext(resolvedGitSha);
  const resolvedInfra =
    infrastructureContext ??
    buildTestInfrastructureContext(resolvedGitContext.headSha ?? resolvedGitSha);

  return {
    runtimeMode: RUNTIME_MODES.REAL_LUNA,
    expectedRuntimeHeadSha: resolvedExpectedHead,
    cliSha: resolvedCliSha,
    ownerAuthorizationFile: filePath,
    expectedAuthorizationFileSha256: expectedAuthorizationFileSha256 ?? authorizationFileSha256,
    runId: TEST_RUN_ID,
    model: AUTH_FROZEN.model,
    batchPlanSha256,
    batchCount: AUTH_FROZEN.batchCount,
    maxAllowedCycles: AUTH_FROZEN.maxAllowedCycles,
    queueCounts: AUTH_FROZEN.queueCounts,
    skipInfrastructureGates: true,
    infrastructureContext: resolvedInfra,
    gitContext: resolvedGitContext,
    allowAuthFileInRepo: true,
    ...overrides,
  };
}

function createTempAuthFixture(docOverrides = {}) {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "g2-a1-auth-v2-"));
  const doc = buildValidAuthV2Document(docOverrides);
  const written = writeAuthFile(doc, tmpDir);
  return { tmpDir, ...written };
}

function buildV1AuthDocument() {
  const gitSha = TEST_GIT_SHA;
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
    batchPlanSha256: TEST_BATCH_PLAN_SHA256,
    queueCounts: AUTH_FROZEN.queueCounts,
    batchCount: AUTH_FROZEN.batchCount,
    maxAllowedCycles: AUTH_FROZEN.maxAllowedCycles,
    allowedTransport: "REAL_LUNA",
    issuedAt: new Date().toISOString(),
    ownerReferences: "OWNER-V1-TEST",
  };
}

module.exports = {
  TEST_GIT_SHA,
  TEST_RUN_ID,
  TEST_BATCH_PLAN_SHA256,
  AUTH_FROZEN,
  EXPECTED,
  buildTestInfrastructureContext,
  buildTestGitContext,
  buildValidAuthV2Document,
  writeAuthFile,
  buildRealLunaAuthorizeOptions,
  createTempAuthFixture,
  buildV1AuthDocument,
  loadOwnerAuthorizationFile,
  hashObject,
  sha256Hex,
  OWNER_AUTH_SCHEMA_VERSION,
};
