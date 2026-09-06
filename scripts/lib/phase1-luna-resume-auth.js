#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { isApiKeyConfigured } = require("./luna-phase1-openai");
const { runBaselineGate } = require("./content-discovery/baseline-gate");
const { resolvePhase1GitIdentity, isValidSha } = require("./phase1-git-identity");
const { readJsonFileIfExists } = require("./phase1-luna-checkpoint/atomic-io");
const {
  validateManifestSchema,
  compareManifestIdentity,
  buildBatchingConfigSnapshot,
  buildPromptSchemaHash,
  computeScopeIdentity,
} = require("./phase1-luna-checkpoint/manifest");
const {
  loadOwnerAuthorizationFile,
  validateOwnerAuthorizationAgainstRuntime,
} = require("./phase1-luna-owner-authorization-file");
const { validateExecutionIntegrity } = require("./phase1-luna-execution-integrity");

function validateFrozenPhase0Identity(options = {}) {
  const exitPath = options.exitPath || path.join(ROOT, "reports", "phase0-exit.json");
  if (!fs.existsSync(exitPath)) {
    return { ok: false, code: "PHASE_0_FROZEN_REPORT_MISSING", message: `Missing ${exitPath}` };
  }

  let frozen;
  try {
    frozen = readJsonFileIfExists(exitPath);
  } catch (error) {
    return { ok: false, code: "PHASE_0_FROZEN_REPORT_CORRUPT", message: error.message };
  }

  const complete = frozen.phase0Complete === true || frozen.status === "PHASE_0_COMPLETE";
  if (!complete) {
    return {
      ok: false,
      code: "PHASE_0_FROZEN_IDENTITY_FAIL",
      message: `Frozen Phase 0 not complete: status=${frozen.status}`,
    };
  }

  const failedGates = Object.entries(frozen.gates || {}).filter(([, gate]) => !gate?.pass);
  if (failedGates.length) {
    return {
      ok: false,
      code: "PHASE_0_FROZEN_GATE_FAIL",
      message: `Frozen Phase 0 gates failed: ${failedGates.map(([k]) => k).join(", ")}`,
      failedGates: failedGates.map(([k]) => k),
    };
  }

  return { ok: true, frozen };
}

function buildManifestExpectedIdentity(manifest, scopes, cliScope) {
  const scopeIdentity = computeScopeIdentity(scopes);
  return {
    discoveryBaselineSha: manifest.discoveryBaselineSha,
    headSha: manifest.headSha,
    originMainSha: manifest.originMainSha,
    model: manifest.model,
    transport: manifest.transport,
    cliScope: manifest.cliScope,
    scopeHash: manifest.scopeHash,
    objectIdsHash: manifest.objectIdsHash,
    batchingConfig: manifest.batchingConfig,
    promptSchemaHash: manifest.promptSchemaHash,
    runId: manifest.runId,
    scopeIdentity,
    runtimeCliScope: cliScope,
  };
}

function validateRuntimeAgainstManifest(manifest, { runId, model, cliScope, scopes, transport }) {
  const blockers = [];
  const realCalls = 0;

  const schema = validateManifestSchema(manifest);
  if (!schema.ok) {
    blockers.push({
      code: "MANIFEST_CORRUPT",
      message: `Run manifest schema invalid: ${schema.reason || "unknown"}`,
    });
    return { ok: false, blockers, realCalls };
  }

  if (manifest.runId !== runId) {
    blockers.push({
      code: "RUN_ID_MISMATCH",
      message: `RUN_ID ${runId} != manifest ${manifest.runId}`,
    });
  }

  if (manifest.model !== model) {
    blockers.push({
      code: "MODEL_MISMATCH",
      message: `Model ${model} != manifest ${manifest.model}`,
    });
  }

  if (manifest.transport !== transport) {
    blockers.push({
      code: "TRANSPORT_MISMATCH",
      message: `Transport ${transport} != manifest ${manifest.transport}`,
    });
  }

  const scopeIdentity = computeScopeIdentity(scopes);
  if (manifest.scopeHash !== scopeIdentity.scopeHash) {
    blockers.push({
      code: "SCOPE_HASH_MISMATCH",
      message: `scopeHash ${scopeIdentity.scopeHash} != manifest ${manifest.scopeHash}`,
    });
  }

  if (manifest.objectIdsHash !== scopeIdentity.objectIdsHash) {
    blockers.push({
      code: "OBJECT_IDS_HASH_MISMATCH",
      message: `objectIdsHash mismatch vs manifest`,
    });
  }

  const expectedFromManifest = buildManifestExpectedIdentity(manifest, scopes, cliScope);
  const identityCmp = compareManifestIdentity(manifest, {
    discoveryBaselineSha: manifest.discoveryBaselineSha,
    headSha: manifest.headSha,
    originMainSha: manifest.originMainSha,
    model,
    transport,
    cliScope,
    scopeHash: scopeIdentity.scopeHash,
    objectIdsHash: scopeIdentity.objectIdsHash,
    batchingConfig: buildBatchingConfigSnapshot(),
    promptSchemaHash: buildPromptSchemaHash(),
  });

  for (const mismatch of identityCmp.mismatches || []) {
    if (mismatch.field === "cliScope") {
      blockers.push({
        code: "CLI_SCOPE_MISMATCH",
        message: "CLI scope does not match run manifest cliScope",
      });
    } else if (mismatch.field === "batchingConfig") {
      blockers.push({
        code: "BATCHING_CONFIG_MISMATCH",
        message: "Batching config does not match run manifest",
      });
    } else if (mismatch.field === "promptSchemaHash") {
      blockers.push({
        code: "PROMPT_SCHEMA_MISMATCH",
        message: "Prompt schema hash does not match run manifest",
      });
    }
  }

  const baselineSha = manifest.discoveryBaselineSha;
  if (!baselineSha || !isValidSha(baselineSha)) {
    blockers.push({
      code: "DISCOVERY_BASELINE_MISMATCH",
      message: "Manifest discoveryBaselineSha is missing or invalid",
    });
  }

  return {
    ok: blockers.length === 0,
    blockers,
    realCalls,
    manifest,
    expectedFromManifest,
  };
}

/**
 * Fail-closed authorization for --resume-luna.
 * R-AUTH-004: external owner authorization file + exact HEAD/CLI SHA equality.
 */
function authorizeInfraResume(options = {}) {
  const blockers = [];
  const realCalls = 0;

  if (!options.resumeLuna) {
    return {
      pass: false,
      blockers: [{ code: "RESUME_MODE_REQUIRED", message: "resumeLuna must be true" }],
      blocker: "RESUME_MODE_REQUIRED",
      realCalls,
    };
  }

  const identity = options.gitIdentity || resolvePhase1GitIdentity(options.gitIdentityDeps || {});

  const executionIntegrity = validateExecutionIntegrity({
    headSha: identity.headSha || options.approvedInfraHeadSha,
    gitFn: options.gitIdentityDeps?.git,
  });
  if (!executionIntegrity.ok) {
    blockers.push(...executionIntegrity.blockers);
  }

  if (!identity.workingTreeClean) {
    blockers.push({
      code: "WORKING_TREE_DIRTY",
      message: "Working tree is not clean before infra resume authorization",
    });
  }

  if (!identity.productionDiffClean) {
    blockers.push({
      code: "PRODUCTION_DIFF_NONZERO",
      message: "Production diff against origin/main is not zero",
    });
  }

  if (!identity.deDiffClean) {
    blockers.push({
      code: "DE_DIFF_NONZERO",
      message: "DE diff against origin/main is not zero",
    });
  }

  const baseline = options.baseline || runBaselineGate({ writeReports: false });
  if (baseline.verdict !== "PASS") {
    blockers.push({
      code: "BASELINE_GATE_FAIL",
      message: `Baseline gate verdict=${baseline.verdict}`,
    });
  }

  const ownerAuthorizationFile = options.ownerAuthorizationFile || null;
  let ownerAuthorization = null;
  if (!ownerAuthorizationFile) {
    blockers.push({
      code: "OWNER_AUTHORIZATION_FILE_REQUIRED",
      message: "--owner-authorization-file is required for --resume-luna",
    });
  } else {
    const loaded = loadOwnerAuthorizationFile(ownerAuthorizationFile);
    if (!loaded.ok) {
      blockers.push({ code: loaded.code, message: loaded.message, missing: loaded.missing });
    } else {
      ownerAuthorization = loaded.authorization;
    }
  }

  const approvedInfraHeadSha = options.approvedInfraHeadSha || null;
  if (!approvedInfraHeadSha || !isValidSha(approvedInfraHeadSha)) {
    blockers.push({
      code: "INFRA_RESUME_HEAD_NOT_AUTHORIZED",
      message: "approvedInfraHeadSha is required and must be a 40-char hex SHA for --resume-luna",
    });
  }

  if (ownerAuthorization) {
    const ownerRuntime = validateOwnerAuthorizationAgainstRuntime({
      authorization: ownerAuthorization,
      approvedInfraHeadSha,
      headSha: identity.headSha,
      manifest: options.manifest,
      baselineOriginMainSha: baseline.originMainSha || null,
    });
    if (!ownerRuntime.ok) {
      blockers.push(...ownerRuntime.blockers);
    }
  }

  const phase0 = validateFrozenPhase0Identity(options.phase0Frozen || {});
  if (!phase0.ok) {
    blockers.push({
      code: phase0.code,
      message: phase0.message,
    });
  }

  if (!options.skipApiKeyCheck && !isApiKeyConfigured()) {
    blockers.push({
      code: "OPENAI_API_KEY_MISSING",
      message: "OPENAI_API_KEY is not configured",
    });
  }

  let manifestValidation = null;
  if (options.manifest && options.runId && options.model && options.cliScope && options.scopes) {
    manifestValidation = validateRuntimeAgainstManifest(options.manifest, {
      runId: options.runId,
      model: options.model,
      cliScope: options.cliScope,
      scopes: options.scopes,
      transport: options.transport || "REAL",
    });
    if (!manifestValidation.ok) {
      blockers.push(...manifestValidation.blockers);
    }
  } else if (options.requireManifestIdentity) {
    blockers.push({
      code: "MANIFEST_IDENTITY_REQUIRED",
      message: "Run manifest identity validation is required for resume authorization",
    });
  }

  if (
    options.manifest?.discoveryBaselineSha &&
    baseline.originMainSha &&
    options.manifest.discoveryBaselineSha !== baseline.originMainSha
  ) {
    blockers.push({
      code: "DISCOVERY_BASELINE_MISMATCH",
      message: `Baseline ${baseline.originMainSha} != manifest ${options.manifest.discoveryBaselineSha}`,
    });
  }

  return {
    pass: blockers.length === 0,
    blockers,
    blocker: blockers[0]?.code || null,
    message: blockers[0]?.message || null,
    baseline,
    gitIdentity: identity,
    phase0Frozen: phase0.frozen || null,
    approvedInfraHeadSha,
    ownerAuthorization,
    ownerAuthorizationFile,
    manifestValidation,
    executionIntegrity,
    realCalls,
    transport: "REAL",
  };
}

module.exports = {
  validateFrozenPhase0Identity,
  validateRuntimeAgainstManifest,
  buildManifestExpectedIdentity,
  authorizeInfraResume,
};
