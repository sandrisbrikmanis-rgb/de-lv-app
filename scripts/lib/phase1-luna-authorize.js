#!/usr/bin/env node
"use strict";

const { runBaselineGate } = require("./content-discovery/baseline-gate");
const { isApiKeyConfigured } = require("./luna-phase1-openai");
const { runPhase0ExitEvaluation } = require("../run-phase0-exit-matrix");
const { resolvePhase1GitIdentity } = require("./phase1-git-identity");

function authorizeWithLunaDiscovery(options = {}) {
  const blockers = [];

  const identity =
    options.gitIdentity || resolvePhase1GitIdentity(options.gitIdentityDeps || {});
  if (!identity.pass) {
    blockers.push(...identity.blockers);
  }

  const baseline = options.baseline || runBaselineGate();
  if (baseline.verdict !== "PASS") {
    blockers.push({
      code: "BASELINE_GATE_FAIL",
      message: `Baseline gate verdict=${baseline.verdict}`,
    });
  }

  if (!options.skipPhase0Check) {
    const phase0 =
      options.phase0Matrix ||
      runPhase0ExitEvaluation({ writeReports: false, git: options.gitIdentityDeps?.git });
    const evaluatedHeadSha = phase0.evaluatedHeadSha || null;
    if (evaluatedHeadSha && identity.headSha && evaluatedHeadSha !== identity.headSha) {
      blockers.push({
        code: "PHASE_0_HEAD_SHA_MISMATCH",
        message: `Phase 0 evaluated at ${evaluatedHeadSha} but authorization HEAD is ${identity.headSha}`,
      });
    }
    if (!phase0.phase0Complete) {
      blockers.push({
        code: "PHASE_0_EXIT_FAIL",
        message: `Phase 0 exit status=${phase0.status}`,
      });
    } else {
      const failedGates = Object.entries(phase0.gates || {}).filter(([, gate]) => !gate.pass);
      if (failedGates.length) {
        blockers.push({
          code: "PHASE_0_GATE_FAIL",
          message: `Failed gates: ${failedGates.map(([k]) => k).join(", ")}`,
        });
      }
    }
  }

  if (!options.skipApiKeyCheck && !isApiKeyConfigured()) {
    blockers.push({
      code: "OPENAI_API_KEY_MISSING",
      message: "OPENAI_API_KEY is not configured",
    });
  }

  const productionDiff = options.productionDiff || identity.productionDiff || { clean: false, changed: [] };

  let blockersOut = blockers;
  if (
    options.allowInfraHeadForResume &&
    productionDiff.clean &&
    identity.deDiffClean &&
    identity.productionDiffClean
  ) {
    blockersOut = blockers.filter((b) => b.code !== "HEAD_NOT_AT_ORIGIN_MAIN");
  }

  return {
    pass: blockersOut.length === 0,
    blockers: blockersOut,
    blocker: blockersOut[0]?.code || null,
    message: blockersOut[0]?.message || null,
    baseline,
    productionDiff,
    gitIdentity: identity,
    transport: "REAL",
  };
}

module.exports = {
  authorizeWithLunaDiscovery,
};
