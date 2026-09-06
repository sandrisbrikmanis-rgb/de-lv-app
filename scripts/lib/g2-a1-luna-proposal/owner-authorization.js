#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { isValidSha } = require("../phase1-git-identity");
const { sha256Hex, hashObject } = require("./hash");
const { EXPECTED } = require("./constants");

const OWNER_AUTH_SCHEMA_VERSION = "g2-a1-luna-proposal-auth-v1";
const OWNER_AUTH_PURPOSE = "G2_A1_LUNA_PROPOSAL_EXECUTION";
const EXPECTED_REPOSITORY = "sandrisbrikmanis-rgb/de-lv-app";

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
  "authorizationSha256",
];

function isPathInsideWorktree(targetPath, rootPath = ROOT) {
  const resolvedTarget = path.resolve(targetPath);
  const resolvedRoot = path.resolve(rootPath);
  return resolvedTarget === resolvedRoot || resolvedTarget.startsWith(`${resolvedRoot}${path.sep}`);
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
  if (isPathInsideWorktree(filePath)) {
    return {
      ok: false,
      code: "OWNER_AUTHORIZATION_FILE_IN_REPO",
      message: "Owner authorization file must be outside the repository worktree",
    };
  }

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
    authorizationSha256: sha256Hex(raw),
    raw,
  };
}

function validateOwnerAuthorizationDocument(doc) {
  if (!doc || typeof doc !== "object" || Array.isArray(doc)) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "Authorization document must be a JSON object" };
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

  for (const shaField of ["runtimeHeadSha", "originMainSha", "authorizationSha256"]) {
    if (!isValidSha(doc[shaField])) {
      return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: `${shaField} must be a 40-char hex SHA` };
    }
  }
  if (doc.matrixIdentitySha !== EXPECTED.matrixIdentitySha) {
    return { ok: false, code: "OWNER_AUTHORIZATION_MATRIX_SHA_MISMATCH", message: "matrixIdentitySha mismatch" };
  }
  if (doc.sourceSha256 !== EXPECTED.sourceSha) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SOURCE_SHA_MISMATCH", message: "sourceSha256 mismatch" };
  }
  if (typeof doc.runId !== "string" || !doc.runId.startsWith("g2-a1-proposal-")) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "runId must start with g2-a1-proposal-" };
  }
  if (typeof doc.model !== "string" || !doc.model.trim()) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "model must be a non-empty string" };
  }
  if (typeof doc.batchPlanSha256 !== "string" || !doc.batchPlanSha256.trim()) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "batchPlanSha256 required" };
  }
  if (!Number.isInteger(doc.batchCount) || doc.batchCount < 1) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "batchCount must be a positive integer" };
  }
  if (!Number.isInteger(doc.maxAllowedCycles) || doc.maxAllowedCycles < 1) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "maxAllowedCycles must be a positive integer" };
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

  if (doc.runtimeHeadSha !== doc.originMainSha || doc.runtimeHeadSha !== doc.authorizationSha256) {
    return {
      ok: false,
      code: "OWNER_AUTHORIZATION_SHA_CHAIN_INVALID",
      message: "runtimeHeadSha, originMainSha, and authorizationSha256 must be identical",
    };
  }

  return { ok: true, authorization: { ...doc } };
}

function validateOwnerAuthorizationAgainstRuntime({
  authorization,
  authorizationSha256,
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
  queueCounts,
}) {
  const blockers = [];
  const auth = authorization;

  if (!expectedRuntimeHeadSha) {
    blockers.push({ code: "EXPECTED_RUNTIME_HEAD_SHA_REQUIRED", message: "expectedRuntimeHeadSha is required for REAL_LUNA" });
  }
  if (!authorization) {
    blockers.push({ code: "OWNER_AUTHORIZATION_FILE_REQUIRED", message: "Owner authorization document missing" });
    return { ok: false, blockers };
  }

  const chain = [headSha, originMainSha, expectedRuntimeHeadSha, cliSha, auth.runtimeHeadSha, auth.originMainSha, auth.authorizationSha256];
  const unique = [...new Set(chain.filter(Boolean))];
  if (unique.length !== 1) {
    blockers.push({
      code: "RUNTIME_IDENTITY_CHAIN_MISMATCH",
      message: `HEAD/origin/CLI/auth chain mismatch: ${unique.join(" != ")}`,
    });
  }

  if (authorizationSha256 && auth.authorizationSha256 !== authorizationSha256) {
    blockers.push({ code: "AUTHORIZATION_SHA_MISMATCH", message: "authorizationSha256 does not match file hash" });
  }
  if (runId && auth.runId !== runId) blockers.push({ code: "RUN_ID_MISMATCH", message: "runId mismatch" });
  if (model && auth.model !== model) blockers.push({ code: "MODEL_MISMATCH", message: "model mismatch" });
  if (matrixIdentitySha && auth.matrixIdentitySha !== matrixIdentitySha) {
    blockers.push({ code: "MATRIX_SHA_MISMATCH", message: "matrixIdentitySha mismatch" });
  }
  if (sourceSha && auth.sourceSha256 !== sourceSha) blockers.push({ code: "SOURCE_SHA_MISMATCH", message: "sourceSha256 mismatch" });
  if (batchPlanSha256 && auth.batchPlanSha256 !== batchPlanSha256) {
    blockers.push({ code: "BATCH_PLAN_SHA_MISMATCH", message: "batchPlanSha256 mismatch" });
  }
  if (batchCount != null && auth.batchCount !== batchCount) {
    blockers.push({ code: "BATCH_COUNT_MISMATCH", message: "batchCount mismatch" });
  }
  if (queueCounts && hashObject(auth.queueCounts) !== hashObject(queueCounts)) {
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
    authorizationSha256: overrides.authorizationSha256,
    runId: overrides.runId,
    model: overrides.model,
    matrixIdentitySha: overrides.matrixIdentitySha || EXPECTED.matrixIdentitySha,
    sourceSha256: overrides.sourceSha256 || EXPECTED.sourceSha,
    batchPlanSha256: overrides.batchPlanSha256,
    queueCounts: overrides.queueCounts,
    batchCount: overrides.batchCount,
    maxAllowedCycles: overrides.maxAllowedCycles,
    allowedTransport: "REAL_LUNA",
    issuedAt: overrides.issuedAt || new Date().toISOString(),
    ownerReferences: overrides.ownerReferences || "OWNER-TEST",
    ...overrides,
  };
}

module.exports = {
  OWNER_AUTH_SCHEMA_VERSION,
  OWNER_AUTH_PURPOSE,
  EXPECTED_REPOSITORY,
  REQUIRED_FIELDS,
  loadOwnerAuthorizationFile,
  validateOwnerAuthorizationDocument,
  validateOwnerAuthorizationAgainstRuntime,
  buildOwnerAuthorizationDocument,
  isPathInsideWorktree,
};
