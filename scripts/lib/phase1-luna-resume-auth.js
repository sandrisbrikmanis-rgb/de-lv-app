#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { isApiKeyConfigured } = require("./luna-phase1-openai");
const { runBaselineGate } = require("./content-discovery/baseline-gate");
const { resolvePhase1GitIdentity, isValidSha } = require("./phase1-git-identity");
const { readJsonFileIfExists } = require("./phase1-luna-checkpoint/atomic-io");
const { git } = require("./content-discovery/git-baseline");

const CUTOVER_AUTH_ONLY_FILE = "scripts/lib/phase1-luna-resume-authorization.js";

function headMatchesApprovedInfra(identity, approvedInfraHeadSha) {
  if (!identity.headSha || !approvedInfraHeadSha) return false;
  if (identity.headSha === approvedInfraHeadSha) return true;
  const ancestor = git(`git merge-base --is-ancestor ${approvedInfraHeadSha} ${identity.headSha}`);
  if (!ancestor.ok || ancestor.status !== 0) return false;
  const diff = git(`git diff --name-only ${approvedInfraHeadSha}..${identity.headSha}`);
  if (!diff.ok) return false;
  const files = (diff.stdout || "").trim().split("\n").filter(Boolean);
  return files.length === 1 && files[0] === CUTOVER_AUTH_ONLY_FILE;
}

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

/**
 * Fail-closed authorization for --resume-luna from an approved infrastructure repair HEAD.
 * WORKING_TREE_DIRTY is always blocking. HEAD must match explicit approvedInfraHeadSha.
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

  const approvedInfraHeadSha = options.approvedInfraHeadSha || null;
  const ownerApprovedInfraHeadSha = options.ownerApprovedInfraHeadSha || null;
  if (!approvedInfraHeadSha || !isValidSha(approvedInfraHeadSha)) {
    blockers.push({
      code: "INFRA_RESUME_HEAD_NOT_AUTHORIZED",
      message: "approvedInfraHeadSha is required and must be a 40-char hex SHA for --resume-luna",
    });
  } else if (ownerApprovedInfraHeadSha && approvedInfraHeadSha !== ownerApprovedInfraHeadSha) {
    blockers.push({
      code: "INFRA_RESUME_HEAD_NOT_AUTHORIZED",
      message: `approvedInfraHeadSha ${approvedInfraHeadSha} is not in OWNER authorization registry`,
    });
  } else if (!headMatchesApprovedInfra(identity, approvedInfraHeadSha)) {
    blockers.push({
      code: "INFRA_RESUME_HEAD_MISMATCH",
      message: `HEAD ${identity.headSha || "unknown"} does not match approved infra HEAD ${approvedInfraHeadSha}`,
    });
  }

  const baseline = options.baseline || runBaselineGate({ writeReports: false });
  if (baseline.verdict !== "PASS") {
    blockers.push({
      code: "BASELINE_GATE_FAIL",
      message: `Baseline gate verdict=${baseline.verdict}`,
    });
  }

  const discoveryBaselineSha = options.discoveryBaselineSha || baseline.originMainSha;
  if (
    options.expectedDiscoveryBaselineSha &&
    discoveryBaselineSha !== options.expectedDiscoveryBaselineSha
  ) {
    blockers.push({
      code: "DISCOVERY_BASELINE_MISMATCH",
      message: `Discovery baseline ${discoveryBaselineSha} != expected ${options.expectedDiscoveryBaselineSha}`,
    });
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

  if (options.runId && options.authorizedRunId && options.runId !== options.authorizedRunId) {
    blockers.push({
      code: "RUN_ID_MISMATCH",
      message: `RUN_ID ${options.runId} != authorized ${options.authorizedRunId}`,
    });
  }

  if (options.model && options.expectedModel && options.model !== options.expectedModel) {
    blockers.push({
      code: "MODEL_MISMATCH",
      message: `Model ${options.model} != expected ${options.expectedModel}`,
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
    realCalls,
    transport: "REAL",
  };
}

module.exports = {
  validateFrozenPhase0Identity,
  authorizeInfraResume,
};
