#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { isValidSha } = require("./phase1-git-identity");

const OWNER_AUTH_SCHEMA_VERSION = "1.0.0";
const OWNER_AUTH_PURPOSE = "PHASE1_LUNA_RESUME";

const REQUIRED_FIELDS = [
  "schemaVersion",
  "approvedExecutionSha",
  "runId",
  "discoveryBaselineSha",
  "model",
  "scopeHash",
  "objectIdsHash",
  "issuedAt",
  "authorizationPurpose",
];

function isPathInsideWorktree(targetPath, rootPath = ROOT) {
  const resolvedTarget = path.resolve(targetPath);
  const resolvedRoot = path.resolve(rootPath);
  return resolvedTarget === resolvedRoot || resolvedTarget.startsWith(`${resolvedRoot}${path.sep}`);
}

function loadOwnerAuthorizationFile(filePath) {
  if (!filePath || typeof filePath !== "string") {
    return { ok: false, code: "OWNER_AUTHORIZATION_FILE_REQUIRED", message: "--owner-authorization-file is required" };
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

  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    return { ok: false, code: "OWNER_AUTHORIZATION_FILE_INVALID", message: error.message };
  }

  return validateOwnerAuthorizationDocument(parsed, { filePath });
}

function validateOwnerAuthorizationDocument(doc, context = {}) {
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
    return {
      ok: false,
      code: "OWNER_AUTHORIZATION_SCHEMA_INVALID",
      message: `schemaVersion must be ${OWNER_AUTH_SCHEMA_VERSION}`,
    };
  }

  if (doc.authorizationPurpose !== OWNER_AUTH_PURPOSE) {
    return {
      ok: false,
      code: "OWNER_AUTHORIZATION_SCHEMA_INVALID",
      message: `authorizationPurpose must be ${OWNER_AUTH_PURPOSE}`,
    };
  }

  if (!isValidSha(doc.approvedExecutionSha)) {
    return {
      ok: false,
      code: "OWNER_AUTHORIZATION_SCHEMA_INVALID",
      message: "approvedExecutionSha must be a 40-char hex SHA",
    };
  }

  if (!isValidSha(doc.discoveryBaselineSha)) {
    return {
      ok: false,
      code: "OWNER_AUTHORIZATION_SCHEMA_INVALID",
      message: "discoveryBaselineSha must be a 40-char hex SHA",
    };
  }

  if (typeof doc.runId !== "string" || !doc.runId.startsWith("phase1-")) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "runId must be a phase1 run id string" };
  }

  if (typeof doc.model !== "string" || !doc.model.trim()) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "model must be a non-empty string" };
  }

  if (typeof doc.scopeHash !== "string" || !doc.scopeHash.trim()) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "scopeHash must be a non-empty string" };
  }

  if (typeof doc.objectIdsHash !== "string" || !doc.objectIdsHash.trim()) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "objectIdsHash must be a non-empty string" };
  }

  if (typeof doc.issuedAt !== "string" || Number.isNaN(Date.parse(doc.issuedAt))) {
    return { ok: false, code: "OWNER_AUTHORIZATION_SCHEMA_INVALID", message: "issuedAt must be an ISO-8601 timestamp" };
  }

  return { ok: true, authorization: { ...doc }, filePath: context.filePath || null };
}

function validateOwnerAuthorizationAgainstRuntime({
  authorization,
  approvedInfraHeadSha,
  headSha,
  manifest,
  baselineOriginMainSha,
}) {
  const blockers = [];

  if (!authorization) {
    blockers.push({ code: "OWNER_AUTHORIZATION_FILE_REQUIRED", message: "Owner authorization document missing" });
    return { ok: false, blockers };
  }

  const authSha = authorization.approvedExecutionSha;

  if (!approvedInfraHeadSha || !isValidSha(approvedInfraHeadSha)) {
    blockers.push({
      code: "INFRA_RESUME_HEAD_NOT_AUTHORIZED",
      message: "approvedInfraHeadSha is required and must be a 40-char hex SHA",
    });
  } else if (approvedInfraHeadSha !== authSha) {
    blockers.push({
      code: "INFRA_RESUME_HEAD_NOT_AUTHORIZED",
      message: `approvedInfraHeadSha ${approvedInfraHeadSha} != owner authorization ${authSha}`,
    });
  }

  if (!headSha || !isValidSha(headSha)) {
    blockers.push({ code: "INFRA_RESUME_HEAD_MISMATCH", message: "HEAD SHA could not be resolved" });
  } else if (headSha !== authSha) {
    blockers.push({
      code: "INFRA_RESUME_HEAD_MISMATCH",
      message: `HEAD ${headSha} does not match owner authorization ${authSha}`,
    });
  } else if (approvedInfraHeadSha && headSha !== approvedInfraHeadSha) {
    blockers.push({
      code: "INFRA_RESUME_HEAD_MISMATCH",
      message: `HEAD ${headSha} != CLI approved infra HEAD ${approvedInfraHeadSha}`,
    });
  }

  if (manifest) {
    if (authorization.runId !== manifest.runId) {
      blockers.push({
        code: "RUN_ID_MISMATCH",
        message: `Authorization runId ${authorization.runId} != manifest ${manifest.runId}`,
      });
    }
    if (authorization.discoveryBaselineSha !== manifest.discoveryBaselineSha) {
      blockers.push({
        code: "DISCOVERY_BASELINE_MISMATCH",
        message: "Authorization discoveryBaselineSha != manifest discoveryBaselineSha",
      });
    }
    if (authorization.model !== manifest.model) {
      blockers.push({
        code: "MODEL_MISMATCH",
        message: `Authorization model ${authorization.model} != manifest ${manifest.model}`,
      });
    }
    if (authorization.scopeHash !== manifest.scopeHash) {
      blockers.push({
        code: "SCOPE_HASH_MISMATCH",
        message: "Authorization scopeHash != manifest scopeHash",
      });
    }
    if (authorization.objectIdsHash !== manifest.objectIdsHash) {
      blockers.push({
        code: "OBJECT_IDS_HASH_MISMATCH",
        message: "Authorization objectIdsHash != manifest objectIdsHash",
      });
    }
  }

  if (
    baselineOriginMainSha &&
    authorization.discoveryBaselineSha &&
    authorization.discoveryBaselineSha !== baselineOriginMainSha
  ) {
    blockers.push({
      code: "DISCOVERY_BASELINE_MISMATCH",
      message: `Authorization baseline ${authorization.discoveryBaselineSha} != runtime baseline ${baselineOriginMainSha}`,
    });
  }

  return { ok: blockers.length === 0, blockers, approvedExecutionSha: authSha };
}

function buildOwnerAuthorizationDocument(overrides = {}) {
  return {
    schemaVersion: OWNER_AUTH_SCHEMA_VERSION,
    approvedExecutionSha: overrides.approvedExecutionSha,
    runId: overrides.runId,
    discoveryBaselineSha: overrides.discoveryBaselineSha,
    model: overrides.model,
    scopeHash: overrides.scopeHash,
    objectIdsHash: overrides.objectIdsHash,
    issuedAt: overrides.issuedAt || new Date().toISOString(),
    authorizationPurpose: OWNER_AUTH_PURPOSE,
    ...overrides,
  };
}

module.exports = {
  OWNER_AUTH_SCHEMA_VERSION,
  OWNER_AUTH_PURPOSE,
  REQUIRED_FIELDS,
  isPathInsideWorktree,
  loadOwnerAuthorizationFile,
  validateOwnerAuthorizationDocument,
  validateOwnerAuthorizationAgainstRuntime,
  buildOwnerAuthorizationDocument,
};
