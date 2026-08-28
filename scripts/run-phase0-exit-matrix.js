#!/usr/bin/env node
"use strict";

/**
 * Phase 0 exit matrix (F0-1…F0-8) — READ-ONLY verification.
 * Status: PHASE_0_INCOMPLETE until all gates PASS; then PHASE_0_TECHNICAL_PASS_CANDIDATE (pending review).
 */

const fs = require("fs");
const path = require("path");
const {
  CONTENT_LANGUAGES,
  G2_LEVELS,
  GROUPS,
  verifyRoundTrip,
} = require("./lib/content-crowdin-bridge");
const {
  runContentDiscovery,
  writeDiscoveryReports,
  gitProductionDiff,
  G1_DATASETS,
} = require("./lib/content-discovery/registry");
const {
  buildExpectedDiscoveryScopes,
  evaluateStructuralScopeCoverage,
  evaluateRoundTripGates,
} = require("./lib/content-discovery/discovery-scope");
const { verifyBridgeLibrary, verifyExportDryRunOnly } = require("./lib/content-discovery/phase0-gates");
const { ROOT } = require("./lib/audit-common");

const G1_GROUPS = ["g1-sentences", "g1-verbs", "g1-training"];

const DISCOVERY_SCOPE = {
  groups: ["g2", "g1", "g3"],
  langs: [...CONTENT_LANGUAGES],
  datasetsByGroup: {
    g2: [...G2_LEVELS],
    g1: [...G1_DATASETS],
    g3: ["courseLessons"],
  },
};

function runRoundTripMatrix() {
  const results = [];
  const langs = [...CONTENT_LANGUAGES];

  for (const lang of langs) {
    for (const level of G2_LEVELS) {
      const r = verifyRoundTrip({ group: "g2", lang, level });
      results.push({ group: "g2", dataset: level, lang, ...r });
    }
    for (const g of G1_GROUPS) {
      const r = verifyRoundTrip({ group: g, lang });
      results.push({ group: g, dataset: g.replace("g1-", ""), lang, ...r });
    }
    const g3 = verifyRoundTrip({ group: "g3", lang });
    results.push({ group: "g3", dataset: "courseLessons", lang, ...g3 });
  }

  return results;
}

function summarizeTrainingRoundTrip(roundTrips) {
  const training = roundTrips.filter((r) => r.group === "g1-training");
  const applicable = training.filter((r) => !r.skipped);
  const lesson7Failures = applicable.filter((r) => r.lesson7Missing || (!r.pass && !r.skipped));

  return {
    total: training.length,
    applicable: applicable.length,
    lesson7Verified: applicable.filter((r) => !r.lesson7Missing && r.pass).length,
    lesson7Failures: lesson7Failures.slice(0, 10),
  };
}

function evaluateExitCriteria({ roundTrips, discovery, productionDiffResult, bridgeGate, exportGate }) {
  const roundTripGate = evaluateRoundTripGates(roundTrips);
  const expectedScopes = buildExpectedDiscoveryScopes(
    DISCOVERY_SCOPE.langs,
    DISCOVERY_SCOPE.datasetsByGroup,
  );
  const structuralCoverage = evaluateStructuralScopeCoverage(discovery, expectedScopes);
  const trainingCoverage = summarizeTrainingRoundTrip(roundTrips);
  const productionClean =
    productionDiffResult.clean === true &&
    !productionDiffResult.error &&
    discovery?.baseline?.fetchStatus === "PASS" &&
    discovery?.baseline?.revParseStatus === "PASS";

  const matrix = {
    status: "PHASE_0_INCOMPLETE",
    verdict: "NEEDS_PHASE_0_COMPLETION",
    generatedAt: new Date().toISOString(),
    masterVersion: "1.12",
    originMainSha: discovery?.originMainSha || productionDiffResult.originMainSha || null,
    gates: {
      F0_1_bridge_library: bridgeGate,
      F0_2_export_dry_run: exportGate,
      F0_3_roundtrip: {
        pass: roundTripGate.pass,
        passed: roundTripGate.passed,
        failed: roundTripGate.failed,
        skipped: roundTripGate.skipped,
        total: roundTripGate.total,
        allowedSkips: roundTripGate.allowedSkips,
        unexpectedSkips: roundTripGate.unexpectedSkips,
        trainingCoverage,
        note: "Only g1-training/et may skip round-trip (EXPECTED_NOT_APPLICABLE)",
      },
      F0_4_discovery_orchestrator: {
        pass: Boolean(discovery?.originMainSha) && (discovery?.summary?.length || 0) === expectedScopes.length,
        note: "run-content-discovery.js with collectors for full scope",
        expectedScopes: expectedScopes.length,
        executedScopes: discovery?.summary?.length || 0,
      },
      F0_5_baseline_header: {
        pass:
          discovery?.baselineVerdict === "PASS" &&
          discovery?.baseline?.fetchStatus === "PASS" &&
          discovery?.baseline?.revParseStatus === "PASS" &&
          !discovery?.baseline?.deDiffError &&
          Boolean(discovery?.originMainSha),
        baselineVerdict: discovery?.baselineVerdict,
        fetchStatus: discovery?.baseline?.fetchStatus || null,
        fetchError: discovery?.baseline?.fetchError || null,
        revParseStatus: discovery?.baseline?.revParseStatus || null,
        revParseError: discovery?.baseline?.revParseError || null,
        deDiffBaseline: discovery?.baseline?.deDiffBaseline,
        deChanges: discovery?.baseline?.deChanges || [],
        deDiffError: discovery?.baseline?.deDiffError || null,
      },
      F0_6_deterministic_collectors: {
        pass: structuralCoverage.pass,
        note: "structural parity executed for every group × dataset × lang scope",
        structuralCoverage,
      },
      F0_7_production_diff_zero: {
        pass: productionClean,
        baseline: `${productionDiffResult.originMainSha || "?"}...HEAD`,
        paths: ["data", "www/data", "languages"],
        productionDiff: productionClean ? "(clean)" : productionDiffResult.changed,
        changedCount: productionDiffResult.changed?.length || 0,
        error: productionDiffResult.error || null,
        fetchStatus: discovery?.baseline?.fetchStatus || null,
        revParseStatus: discovery?.baseline?.revParseStatus || null,
      },
      F0_8_all_groups_coverage: {
        pass: roundTripGate.pass && structuralCoverage.pass && productionClean,
        groups: GROUPS,
        g2Levels: G2_LEVELS,
        langs: CONTENT_LANGUAGES.length,
        roundTripPassed: roundTripGate.passed,
        roundTripFailed: roundTripGate.failed,
        roundTripSkipped: roundTripGate.skipped,
        roundTripUnexpectedSkips: roundTripGate.unexpectedSkips.length,
        structuralMissingScopes: structuralCoverage.missingCount,
        note: "Full group coverage with baseline-clean production paths",
      },
    },
    roundTripFailures: roundTrips.filter((r) => !r.pass && !r.skipped).slice(0, 50),
    roundTripSkipped: roundTrips.filter((r) => r.skipped).slice(0, 50),
  };

  const allPass = Object.values(matrix.gates).every((g) => g.pass);
  if (allPass) {
    matrix.status = "PHASE_0_TECHNICAL_PASS_CANDIDATE";
    matrix.verdict = "PHASE_0_TECHNICAL_PASS_CANDIDATE";
    matrix.note =
      "Branch-level F0 gates PASS. Awaiting OWNER review / merge approval. MAIN verification (A7) still required before Phase 1.";
  } else {
    matrix.status = "PHASE_0_INCOMPLETE";
    matrix.verdict = "MERGE_BLOCKED — PHASE_0_INCOMPLETE";
    matrix.note = "One or more F0 gates failed. Merge and Phase 1 are not allowed.";
  }

  return matrix;
}

function main() {
  console.log("\n=== Phase 0 exit matrix (F0-1…F0-8) ===\n");

  const bridgeGate = verifyBridgeLibrary();
  const exportGate = verifyExportDryRunOnly();
  const roundTrips = runRoundTripMatrix();

  const discovery = runContentDiscovery(DISCOVERY_SCOPE);

  const { outJson, outMd } = writeDiscoveryReports(discovery, {
    outJson: path.join(ROOT, "reports", "content-discovery-matrix.json"),
    outMd: path.join(ROOT, "reports", "content-discovery-READONLY.md"),
  });

  const productionDiffResult = gitProductionDiff(discovery.originMainSha);
  const exitMatrix = evaluateExitCriteria({
    roundTrips,
    discovery,
    productionDiffResult,
    bridgeGate,
    exportGate,
  });

  const outExit = path.join(ROOT, "reports", "phase0-exit-matrix.json");
  fs.writeFileSync(outExit, `${JSON.stringify(exitMatrix, null, 2)}\n`, "utf8");

  console.log(`Status: ${exitMatrix.status}`);
  console.log(`Verdict: ${exitMatrix.verdict}`);
  console.log(`F0-1 bridge: ${exitMatrix.gates.F0_1_bridge_library.pass ? "PASS" : "FAIL"}`);
  console.log(`F0-2 export: ${exitMatrix.gates.F0_2_export_dry_run.pass ? "PASS" : "FAIL"}`);
  console.log(
    `Round-trip: ${exitMatrix.gates.F0_3_roundtrip.passed}/${exitMatrix.gates.F0_3_roundtrip.total} pass, ${exitMatrix.gates.F0_3_roundtrip.failed} fail, ${exitMatrix.gates.F0_3_roundtrip.skipped} skipped`,
  );
  if (exitMatrix.gates.F0_3_roundtrip.unexpectedSkips?.length) {
    console.log(`Unexpected skips: ${exitMatrix.gates.F0_3_roundtrip.unexpectedSkips.length}`);
  }
  console.log(`F0-6 structural scopes: ${exitMatrix.gates.F0_6_deterministic_collectors.pass ? "PASS" : "FAIL"} (${exitMatrix.gates.F0_6_deterministic_collectors.structuralCoverage.executedCount}/${exitMatrix.gates.F0_6_deterministic_collectors.structuralCoverage.expectedCount})`);
  console.log(`Production diff (${exitMatrix.gates.F0_7_production_diff_zero.baseline}): ${exitMatrix.gates.F0_7_production_diff_zero.pass ? "CLEAN" : exitMatrix.gates.F0_7_production_diff_zero.changedCount + " files"}`);
  console.log(`Discovery: ${outJson}`);
  console.log(`Exit matrix: ${outExit}`);
  console.log("");

  if (exitMatrix.verdict !== "PHASE_0_TECHNICAL_PASS_CANDIDATE") {
    process.exit(1);
  }
}

main();
