#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { isValidSha } = require("../phase1-git-identity");
const { sha256Hex, hashObject } = require("./hash");
const { EXPECTED, AUTH_FROZEN } = require("./constants");

const OWNER_AUTH_SCHEMA_VERSION = "g2-a1-luna-proposal-auth-v2";
const OWNER_AUTH_SCHEMA_VERSION_V1 = "g2-a1-luna-proposal-auth-v1";
const OWNER_AUTH_PURPOSE = "G2_A1_LUNA_PROPOSAL_EXECUTION";
const EXPECTED_REPOSITORY = "sandrisbrikmanis-rgb/de-lv-app";
const SHA256_HEX = /^[0-9a-f]{64}$/;

const REQUIRED_FIELDS = [
  "schemaVersion",
  "authorizationPurpose",
  "repository",
  "runtimeHeadSha",
  "originMainSha",
  "runId",
  "model",
  "matrixIdentitySha",
  "sourceSha256",
  "batchPlanSha256",
  "queueCounts",
  "batchCount",
  "maxAllowedCycles",
  "allowedTransport",
  "issuedAt",
  "ownerReferences",
];

function isValidSha256(value) {
  return typeof value === "string" && SHA256_HEX.test(value);
}

function resolveRealPath(targetPath) {
  return fs.realpathSync.native ? fs.realpathSync.native(targetPath) : fs.realpathSync(targetPath);
}

function isPathInsideWorktree(targetPath, rootPath = ROOT) {
  const resolvedTarget = resolveRealPath(targetPath);
  const resolvedRoot = resolveRealPath(rootPath);
  return resolvedTarget === resolvedRoot || resolvedTarget.startsWith(`${resolvedRoot}${path.sep}`);
}

function assertAuthFileOutsideWorktree(filePath) {
  try {
    if (isPathInsideWorktree(filePath)) {
      return {
        ok: false,
        code: "OWNER_AUTHORIZATION_FILE_IN_REPO",
        message: "Owner authorization file must be outside the repository worktree",
      };
    }
    return { ok: true, realPath: resolveRealPath(filePath) };
  } catch (error) {
    return { ok: false, code: "OWNER_AUTHORIZATION_FILE_UNREADABLE", message: error.message };
  }
}

function frozenQueueCountsHash() {
  return hashObject(AUTH_FROZEN.queueCounts);
}

function loadOwnerAuthorizationFile(filePath) {
  if (!filePath || typeof filePath !== "string") {
    return { ok: false, code: "OWNER_AUTHORIZATION_FILE_REQUIRED", message: "ownerAuthorizationFile is required" };
  }
  if (!path.isAbsolute(filePath)) {
    return {
      ok: false,
      code: "OWNER_AUTHORIZATION_FILE_NOT_ABSOLUTE",
      message: "Owner authorization file path must be absolute",
    };
  }
  if (!fs.existsSync(filePath)) {
    return { ok: false, code: "OWNER_AUTHORIZATION_FILE_MISSING", message: `File not found: ${filePath}` };
  }

  let stat;
  try {
    stat = fs.lstatSync(filePath);
  } catch (error) {
    return { ok: false, code: "OWNER_AUTHORIZATION_FILE_UNREADABLE", message: error.message };
  }
  if (stat.isSymbolicLink()) {
    return { ok: false, code: "OWNER_AUTHORIZATION_FILE_SYMLINK", message: "Symlink owner authorization files are blocked" };
  }

  const outside = assertAuthFileOutsideWorktree(filePath);
  if (!outside.ok) return outside;

  let raw;
  try {
    raw = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    return { ok: false, code: "OWNER_AUTHORIZATION_FILE_UNREADABLE", message: error.message };
  }

  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (error) {
    return { ok: false, code: "OWNER_AUTHORIZATION_FILE_INVALID", message: error.message };
  }

  const validated = validateOwnerAuthorizationDocument(parsed);
  if (!validated.ok) return validated;
  return {
    ok: true,
    authorization: validated.authorization,
    filePath,
    authorizationFileSha256: sha256Hex(raw),
    raw,
  };
}

function validateOwnerAuthorizationDocument(doc) {
  if (!doc || typeof doc !== "object" || Array.isArray(doc)) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "Authorization document must be a JSON object" };
  }

  if (doc.schemaVersion === OWNER_AUTH_SCHEMA_VERSION_V1 || doc.authorizationSha256 != null) {
    return {
      ok: false,
      code: "OWNER_AUTH_SCHEMA_V1_REJECTED",
      message: "Auth v1 and authorizationSha256 self-reference are rejected; use g2-a1-luna-proposal-auth-v2",
    };
  }

  const missing = REQUIRED_FIELDS.filter((field) => doc[field] === undefined || doc[field] === null || doc[field] === "");
  if (missing.length) {
    return {
      ok: false,
      code: "OWNER_AUTHORIZATION_SCHEMA_INVALID",
      message: `Missing required fields: ${missing.join(", ")}`,
      missing,
    };
  }

  if (doc.schemaVersion !== OWNER_AUTH_SCHEMA_VERSION) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: `schemaVersion must be ${OWNER_AUTH_SCHEMA_VERSION}` };
  }
  if (doc.authorizationPurpose !== OWNER_AUTH_PURPOSE) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: `authorizationPurpose must be ${OWNER_AUTH_PURPOSE}` };
  }
  if (doc.repository !== EXPECTED_REPOSITORY) {
    return { ok: false, code: "OWNER_AUTHORIZATION_REPOSITORY_MISMATCH", message: `repository must be ${EXPECTED_REPOSITORY}` };
  }
  if (doc.allowedTransport !== "REAL_LUNA") {
    return { ok: false, code: "OWNER_AUTHORIZATION_TRANSPORT_MISMATCH", message: "allowedTransport must be REAL_LUNA" };
  }

  for (const shaField of ["runtimeHeadSha", "originMainSha"]) {
    if (!isValidSha(doc[shaField])) {
      return { ok: false, code: "OWNER_AUTHORIZATION_GIT_SHA_INVALID", message: `${shaField} must be a 40-char Git SHA` };
    }
  }
  if (!isValidSha256(doc.matrixIdentitySha)) {
    return { ok: false, code: "OWNER_AUTHORIZATION_MATRIX_SHA_INVALID", message: "matrixIdentitySha must be a 64-char SHA-256" };
  }
  if (!isValidSha256(doc.sourceSha256)) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SOURCE_SHA_INVALID", message: "sourceSha256 must be a 64-char SHA-256" };
  }
  if (!isValidSha256(doc.batchPlanSha256)) {
    return { ok: false, code: "OWNER_AUTHORIZATION_BATCH_PLAN_SHA_INVALID", message: "batchPlanSha256 must be a 64-char SHA-256" };
  }
  if (doc.matrixIdentitySha !== EXPECTED.matrixIdentitySha) {
    return { ok: false, code: "OWNER_AUTHORIZATION_MATRIX_SHA_MISMATCH", message: "matrixIdentitySha mismatch" };
  }
  if (doc.sourceSha256 !== EXPECTED.sourceSha) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SOURCE_SHA_MISMATCH", message: "sourceSha256 mismatch" };
  }
  if (doc.model !== AUTH_FROZEN.model) {
    return { ok: false, code: "OWNER_AUTHORIZATION_MODEL_MISMATCH", message: `model must be ${AUTH_FROZEN.model}` };
  }
  if (doc.batchCount !== AUTH_FROZEN.batchCount) {
    return { ok: false, code: "OWNER_AUTHORIZATION_BATCH_COUNT_MISMATCH", message: `batchCount must be ${AUTH_FROZEN.batchCount}` };
  }
  if (doc.maxAllowedCycles !== AUTH_FROZEN.maxAllowedCycles) {
    return {
      ok: false,
      code: "OWNER_AUTHORIZATION_MAX_CYCLES_MISMATCH",
      message: `maxAllowedCycles must be ${AUTH_FROZEN.maxAllowedCycles}`,
    };
  }
  if (typeof doc.runId !== "string" || !doc.runId.startsWith("g2-a1-proposal-")) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "runId must start with g2-a1-proposal-" };
  }
  if (typeof doc.ownerReferences !== "string" || !doc.ownerReferences.trim()) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "ownerReferences required" };
  }
  if (typeof doc.issuedAt !== "string" || Number.isNaN(Date.parse(doc.issuedAt))) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "issuedAt must be ISO-8601" };
  }
  if (!doc.queueCounts || typeof doc.queueCounts !== "object") {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "queueCounts required" };
  }
  if (hashObject(doc.queueCounts) !== frozenQueueCountsHash()) {
    return { ok: false, code: "OWNER_AUTHORIZATION_QUEUE_COUNTS_MISMATCH", message: "queueCounts frozen mismatch" };
  }
  if (doc.runtimeHeadSha !== doc.originMainSha) {
    return {
      ok: false,
      code: "OWNER_AUTHORIZATION_GIT_SHA_CHAIN_INVALID",
      message: "runtimeHeadSha and originMainSha must be identical Git SHAs",
    };
  }

  return { ok: true, authorization: { ...doc } };
}

function validateGitIdentityChain({ headSha, originMainSha, expectedRuntimeHeadSha, cliSha, authorization }) {
  const blockers = [];
  const chain = [
    headSha,
    originMainSha,
    expectedRuntimeHeadSha,
    cliSha,
    authorization?.runtimeHeadSha,
    authorization?.originMainSha,
  ].filter(Boolean);
  const unique = [...new Set(chain)];
  if (unique.length !== 1) {
    blockers.push({
      code: "RUNTIME_GIT_IDENTITY_CHAIN_MISMATCH",
      message: `Git identity chain mismatch: ${unique.join(" != ")}`,
    });
  }
  for (const value of chain) {
    if (!isValidSha(value)) {
      blockers.push({ code: "OWNER_AUTHORIZATION_GIT_SHA_INVALID", message: "Git SHA must be 40 hex chars" });
      break;
    }
  }
  return { ok: blockers.length === 0, blockers };
}

function validateAuthorizationFileHash({ authorizationFileSha256, expectedAuthorizationFileSha256 }) {
  const blockers = [];
  if (!expectedAuthorizationFileSha256) {
    blockers.push({
      code: "EXPECTED_AUTHORIZATION_FILE_SHA256_REQUIRED",
      message: "expectedAuthorizationFileSha256 is required for REAL_LUNA",
    });
  }
  if (!isValidSha256(authorizationFileSha256)) {
    blockers.push({ code: "AUTHORIZATION_FILE_SHA256_INVALID", message: "authorization file hash must be 64 hex chars" });
  }
  if (expectedAuthorizationFileSha256 && !isValidSha256(expectedAuthorizationFileSha256)) {
    blockers.push({
      code: "EXPECTED_AUTHORIZATION_FILE_SHA256_INVALID",
      message: "expectedAuthorizationFileSha256 must be 64 hex chars",
    });
  }
  if (
    authorizationFileSha256 &&
    expectedAuthorizationFileSha256 &&
    authorizationFileSha256 !== expectedAuthorizationFileSha256
  ) {
    blockers.push({ code: "AUTHORIZATION_FILE_SHA256_MISMATCH", message: "authorization file SHA-256 mismatch" });
  }
  return { ok: blockers.length === 0, blockers };
}

function validateOwnerAuthorizationAgainstRuntime({
  authorization,
  authorizationFileSha256,
  expectedAuthorizationFileSha256,
  expectedRuntimeHeadSha,
  cliSha,
  headSha,
  originMainSha,
  runId,
  model,
  matrixIdentitySha,
  sourceSha,
  batchPlanSha256,
  batchCount,
  maxAllowedCycles,
  queueCounts,
}) {
  const blockers = [];

  if (!authorization) {
    blockers.push({ code: "OWNER_AUTHORIZATION_FILE_REQUIRED", message: "Owner authorization document missing" });
    return { ok: false, blockers };
  }

  const gitChain = validateGitIdentityChain({
    headSha,
    originMainSha,
    expectedRuntimeHeadSha,
    cliSha,
    authorization,
  });
  blockers.push(...gitChain.blockers);

  const fileHash = validateAuthorizationFileHash({
    authorizationFileSha256,
    expectedAuthorizationFileSha256,
  });
  blockers.push(...fileHash.blockers);

  if (runId && authorization.runId !== runId) blockers.push({ code: "RUN_ID_MISMATCH", message: "runId mismatch" });
  if (model && authorization.model !== model) blockers.push({ code: "MODEL_MISMATCH", message: "model mismatch" });
  if (model && authorization.model !== AUTH_FROZEN.model) {
    blockers.push({ code: "MODEL_MISMATCH", message: `model must be ${AUTH_FROZEN.model}` });
  }
  if (matrixIdentitySha && authorization.matrixIdentitySha !== matrixIdentitySha) {
    blockers.push({ code: "MATRIX_SHA_MISMATCH", message: "matrixIdentitySha mismatch" });
  }
  if (sourceSha && authorization.sourceSha256 !== sourceSha) {
    blockers.push({ code: "SOURCE_SHA_MISMATCH", message: "sourceSha256 mismatch" });
  }
  if (batchPlanSha256 && authorization.batchPlanSha256 !== batchPlanSha256) {
    blockers.push({ code: "BATCH_PLAN_SHA_MISMATCH", message: "batchPlanSha256 mismatch" });
  }
  if (batchCount != null && authorization.batchCount !== batchCount) {
    blockers.push({ code: "BATCH_COUNT_MISMATCH", message: "batchCount mismatch" });
  }
  if (batchCount != null && authorization.batchCount !== AUTH_FROZEN.batchCount) {
    blockers.push({ code: "BATCH_COUNT_MISMATCH", message: `batchCount must be ${AUTH_FROZEN.batchCount}` });
  }
  if (maxAllowedCycles != null && authorization.maxAllowedCycles !== maxAllowedCycles) {
    blockers.push({ code: "MAX_ALLOWED_CYCLES_MISMATCH", message: "maxAllowedCycles mismatch" });
  }
  if (maxAllowedCycles != null && authorization.maxAllowedCycles !== AUTH_FROZEN.maxAllowedCycles) {
    blockers.push({
      code: "MAX_ALLOWED_CYCLES_MISMATCH",
      message: `maxAllowedCycles must be ${AUTH_FROZEN.maxAllowedCycles}`,
    });
  }
  if (queueCounts && hashObject(authorization.queueCounts) !== hashObject(queueCounts)) {
    blockers.push({ code: "QUEUE_COUNTS_MISMATCH", message: "queueCounts mismatch" });
  }

  return { ok: blockers.length === 0, blockers };
}

function buildOwnerAuthorizationDocument(overrides = {}) {
  return {
    schemaVersion: OWNER_AUTH_SCHEMA_VERSION,
    authorizationPurpose: OWNER_AUTH_PURPOSE,
    repository: EXPECTED_REPOSITORY,
    runtimeHeadSha: overrides.runtimeHeadSha,
    originMainSha: overrides.originMainSha,
    runId: overrides.runId,
    model: overrides.model || AUTH_FROZEN.model,
    matrixIdentitySha: overrides.matrixIdentitySha || EXPECTED.matrixIdentitySha,
    sourceSha256: overrides.sourceSha256 || EXPECTED.sourceSha,
    batchPlanSha256: overrides.batchPlanSha256,
    queueCounts: overrides.queueCounts || AUTH_FROZEN.queueCounts,
    batchCount: overrides.batchCount ?? AUTH_FROZEN.batchCount,
    maxAllowedCycles: overrides.maxAllowedCycles ?? AUTH_FROZEN.maxAllowedCycles,
    allowedTransport: "REAL_LUNA",
    issuedAt: overrides.issuedAt || new Date().toISOString(),
    ownerReferences: overrides.ownerReferences || "OWNER-TEST",
    authorizationId: overrides.authorizationId || "auth-test-id",
    ...overrides,
  };
}

function proveV1Defect() {
  const gitSha = "a".repeat(40);
  const fileHash = sha256Hex('{"schemaVersion":"g2-a1-luna-proposal-auth-v1"}');
  return {
    defect: "AUTHORIZATION_SHA_TYPE_COLLISION",
    impossibleEquation: "runtimeHeadSha = originMainSha = authorizationSha256 AND authorizationSha256 = SHA256(rawFile)",
    gitShaLength: gitSha.length,
    fileSha256Length: fileHash.length,
    v1SelfReferenceField: "authorizationSha256",
    v2Fix: "Separate Git chain (40 hex) from authorizationFileSha256 (64 hex)",
    gitShaEqualsFileHash: gitSha === fileHash,
  };
}

module.exports = {
  OWNER_AUTH_SCHEMA_VERSION,
  OWNER_AUTH_SCHEMA_VERSION_V1,
  OWNER_AUTH_PURPOSE,
  EXPECTED_REPOSITORY,
  REQUIRED_FIELDS,
  isValidSha256,
  loadOwnerAuthorizationFile,
  validateOwnerAuthorizationDocument,
  validateGitIdentityChain,
  validateAuthorizationFileHash,
  validateOwnerAuthorizationAgainstRuntime,
  buildOwnerAuthorizationDocument,
  proveV1Defect,
  isPathInsideWorktree,
  assertAuthFileOutsideWorktree,
  resolveRealPath,
};
