#!/usr/bin/env node
"use strict";

const { runBaselineGate } = require("./content-discovery/baseline-gate");
const { gitProductionDiffAgainstBaseline } = require("./content-discovery/git-baseline");
const { isApiKeyConfigured } = require("./luna-phase1-openai");
const { runPhase0ExitEvaluation } = require("../run-phase0-exit-matrix");

const EXPECTED_BASELINE_SHA = "f933a854211997df6bd9328018d549afeebd2673";

function authorizeWithLunaDiscovery(options = {}) {
  const blockers = [];
  const baseline = runBaselineGate();

  if (options.requireBaselineSha !== false) {
    const sha = baseline.originMainSha || "";
    if (sha !== EXPECTED_BASELINE_SHA && !options.allowAnyBaselineSha) {
      blockers.push({
        code: "BASELINE_SHA_MISMATCH",
        message: `origin/main SHA ${sha} does not match expected ${EXPECTED_BASELINE_SHA}`,
      });
    }
  }

  if (baseline.verdict !== "PASS") {
    blockers.push({
      code: "BASELINE_GATE_FAIL",
      message: `Baseline gate verdict=${baseline.verdict}`,
    });
  }

  if (!options.skipApiKeyCheck && !isApiKeyConfigured()) {
    blockers.push({
      code: "OPENAI_API_KEY_MISSING",
      message: "OPENAI_API_KEY is not configured",
    });
  }

  const productionDiff = gitProductionDiffAgainstBaseline(baseline.originMainSha);
  if (!productionDiff.clean) {
    blockers.push({
      code: "PRODUCTION_DIFF_NONZERO",
      message: "Production diff is not clean",
    });
  }

  if (!options.skipPhase0Check) {
    const phase0 = options.phase0Matrix || runPhase0ExitEvaluation({ writeReports: false });
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

  return {
    pass: blockers.length === 0,
    blockers,
    blocker: blockers[0]?.code || null,
    message: blockers[0]?.message || null,
    baseline,
    productionDiff,
    transport: "REAL",
  };
}

module.exports = {
  EXPECTED_BASELINE_SHA,
  authorizeWithLunaDiscovery,
};
