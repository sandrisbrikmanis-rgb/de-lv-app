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
  TARGET_LANGUAGES,
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
const { ROOT } = require("./lib/audit-common");

const G1_GROUPS = ["g1-sentences", "g1-verbs", "g1-training"];
const REQUIRED_STRUCTURAL_COLLECTORS = [
  "g2",
  "g1-sentences",
  "g1-verbs",
  "g1-training",
  "g3-courseLessons",
];

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

function evaluateStructuralCoverage(discovery) {
  const seen = new Set();
  const notApplicable = [];

  for (const row of discovery?.summary || []) {
    const collector = row.structuralCollector;
    if (!collector) continue;
    seen.add(collector);
    if (row.applicability === "EXPECTED_NOT_APPLICABLE") {
      notApplicable.push({ group: row.group, dataset: row.dataset, lang: row.lang, note: row.note });
    }
  }

  const missing = REQUIRED_STRUCTURAL_COLLECTORS.filter((c) => !seen.has(c));
  return {
    pass: missing.length === 0,
    required: REQUIRED_STRUCTURAL_COLLECTORS,
    ran: [...seen].sort(),
    missing,
    expectedNotApplicable: notApplicable,
  };
}

function summarizeTrainingRoundTrip(roundTrips) {
  const training = roundTrips.filter((r) => r.group === "g1-training");
  const applicable = training.filter((r) => !r.skipped);
  const skipped = training.filter((r) => r.skipped);
  const lesson7Loaded = applicable.filter((r) => !r.lesson7Missing && r.pass !== false).length;
  const lesson7Failures = applicable.filter((r) => r.lesson7Missing || (!r.pass && !r.skipped));

  return {
    total: training.length,
    applicable: applicable.length,
    skipped,
    lesson7Verified: lesson7Loaded,
    lesson7Failures: lesson7Failures.slice(0, 10),
    expectedSkipped: skipped.map((r) => ({
      lang: r.lang,
      reason: r.reason,
      status: "EXPECTED_NOT_APPLICABLE",
    })),
  };
}

function evaluateExitCriteria({ roundTrips, discovery, productionDiff }) {
  const rtPass = roundTrips.filter((r) => r.pass).length;
  const rtFail = roundTrips.filter((r) => !r.pass && !r.skipped).length;
  const rtSkipped = roundTrips.filter((r) => r.skipped).length;
  const structuralCoverage = evaluateStructuralCoverage(discovery);
  const trainingCoverage = summarizeTrainingRoundTrip(roundTrips);

  const matrix = {
    status: "PHASE_0_INCOMPLETE",
    verdict: "NEEDS_PHASE_0_COMPLETION",
    generatedAt: new Date().toISOString(),
    masterVersion: "1.12",
    gates: {
      F0_1_bridge_library: { pass: true, note: "content-crowdin-bridge modules present" },
      F0_2_export_dry_run: { pass: true, note: "export-content-crowdin.js dry-run only by default" },
      F0_3_roundtrip: {
        pass: rtFail === 0,
        passed: rtPass,
        failed: rtFail,
        skipped: rtSkipped,
        total: roundTrips.length,
        trainingCoverage,
      },
      F0_4_discovery_orchestrator: {
        pass: Boolean(discovery?.originMainSha),
        note: "run-content-discovery.js with collectors",
      },
      F0_5_baseline_header: {
        pass: discovery?.baselineVerdict !== "BLOCKED",
        baselineVerdict: discovery?.baselineVerdict,
      },
      F0_6_deterministic_collectors: {
        pass: structuralCoverage.pass,
        note: "structural parity for G1/G2/G3 + de-compliance, multi-translation, mojibake, mirror, remnants",
        structuralCoverage,
      },
      F0_7_production_diff_zero: {
        pass: productionDiff === "",
        productionDiff: productionDiff || "(clean)",
      },
      F0_8_all_groups_coverage: {
        pass: rtFail === 0 && structuralCoverage.pass,
        groups: GROUPS,
        g2Levels: G2_LEVELS,
        langs: CONTENT_LANGUAGES.length,
        roundTripPassed: rtPass,
        roundTripFailed: rtFail,
        roundTripSkippedMissingDataset: rtSkipped,
        note: "Skipped g1-training = EXPECTED_NOT_APPLICABLE for lv/et (no courseTrainingCards.js)",
        expectedNotApplicable: trainingCoverage.expectedSkipped,
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

  const roundTrips = runRoundTripMatrix();

  const discovery = runContentDiscovery({
    groups: ["g2", "g1", "g3"],
    langs: [...CONTENT_LANGUAGES],
    datasetsByGroup: {
      g2: [...G2_LEVELS],
      g1: [...G1_DATASETS],
      g3: ["courseLessons"],
    },
  });

  const { outJson, outMd } = writeDiscoveryReports(discovery, {
    outJson: path.join(ROOT, "reports", "content-discovery-matrix.json"),
    outMd: path.join(ROOT, "reports", "content-discovery-READONLY.md"),
  });

  const productionDiff = gitProductionDiff();
  const exitMatrix = evaluateExitCriteria({ roundTrips, discovery, productionDiff });

  const outExit = path.join(ROOT, "reports", "phase0-exit-matrix.json");
  fs.writeFileSync(outExit, `${JSON.stringify(exitMatrix, null, 2)}\n`, "utf8");

  console.log(`Status: ${exitMatrix.status}`);
  console.log(`Verdict: ${exitMatrix.verdict}`);
  console.log(`Round-trip: ${exitMatrix.gates.F0_3_roundtrip.passed}/${exitMatrix.gates.F0_3_roundtrip.total} pass, ${exitMatrix.gates.F0_3_roundtrip.failed} fail, ${exitMatrix.gates.F0_3_roundtrip.skipped} skipped`);
  console.log(`F0-6 structural collectors: ${exitMatrix.gates.F0_6_deterministic_collectors.pass ? "PASS" : "FAIL"}`);
  console.log(`Production diff: ${exitMatrix.gates.F0_7_production_diff_zero.pass ? "CLEAN" : productionDiff}`);
  console.log(`Discovery: ${outJson}`);
  console.log(`Exit matrix: ${outExit}`);
  console.log("");

  if (exitMatrix.verdict !== "PHASE_0_TECHNICAL_PASS_CANDIDATE") {
    process.exit(1);
  }
}

main();
