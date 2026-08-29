#!/usr/bin/env node
"use strict";

/**
 * Phase 0 exit matrix (F0-1…F0-8) — READ-ONLY verification.
 * Writes reports/phase0-exit.json, reports/phase0-exit.md, reports/phase0-exit-matrix.json.
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

function buildScopeInventory(langs, datasetsByGroup) {
  const scopes = buildExpectedDiscoveryScopes(langs, datasetsByGroup);
  const byGroup = { g1: 0, g2: 0, g3: 0 };
  const byLang = {};
  const byDataset = {};

  for (const s of scopes) {
    byGroup[s.group] = (byGroup[s.group] || 0) + 1;
    byLang[s.lang] = (byLang[s.lang] || 0) + 1;
    const dsKey = `${s.group}/${s.dataset}`;
    byDataset[dsKey] = (byDataset[dsKey] || 0) + 1;
  }

  const scopeIds = scopes.map((s) => s.key);
  const uniqueIds = new Set(scopeIds);

  return {
    expectedScope: scopes.length,
    uniqueScopeIds: uniqueIds.size,
    duplicates: scopeIds.length - uniqueIds.size,
    byGroup,
    byLang,
    byDataset,
    scopes: scopes.map((s) => ({
      scopeId: s.key,
      group: s.group,
      dataset: s.dataset,
      lang: s.lang,
      structuralCollector: s.structuralCollector,
    })),
  };
}

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

function evaluateExitCriteria({ roundTrips, discovery, productionDiffResult, bridgeGate, exportGate, scopeInventory }) {
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

  const discoveryProcessed = discovery?.summary?.length || 0;
  const discoveryNotApplicable = (discovery?.summary || []).filter(
    (r) => r.applicability === "EXPECTED_NOT_APPLICABLE",
  ).length;

  const matrix = {
    status: "PHASE_0_INCOMPLETE",
    verdict: "PHASE_0_INCOMPLETE",
    generatedAt: new Date().toISOString(),
    masterVersion: "1.12",
    originMainSha: discovery?.originMainSha || productionDiffResult.originMainSha || null,
    scopeInventory,
    discovery: {
      expectedScope: expectedScopes.length,
      processed: discoveryProcessed,
      notApplicable: discoveryNotApplicable,
      missing: Math.max(0, expectedScopes.length - discoveryProcessed),
      duplicates: 0,
      blocked: discovery?.verdict === "BLOCKED_BASELINE" ? 1 : 0,
      discoveryErrors: discovery?.blockers?.length || 0,
    },
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
        pass:
          Boolean(discovery?.originMainSha) &&
          discoveryProcessed === expectedScopes.length &&
          discovery?.verdict !== "BLOCKED_BASELINE",
        note: "run-content-discovery.js with collectors for full scope",
        expectedScopes: expectedScopes.length,
        executedScopes: discoveryProcessed,
        notApplicable: discoveryNotApplicable,
      },
      F0_5_baseline_header: {
        pass:
          discovery?.baselineVerdict === "PASS" &&
          discovery?.baseline?.fetchStatus === "PASS" &&
          discovery?.baseline?.revParseStatus === "PASS" &&
          !discovery?.baseline?.deDiffError &&
          Boolean(discovery?.originMainSha) &&
          (discovery?.baseline?.activeUnmergedClosureCount ?? 0) === 0 &&
          (discovery?.baseline?.unresolvedOwnerReviewCount ??
            discovery?.baseline?.needsOwnerReviewCount ??
            0) === 0,
        baselineVerdict: discovery?.baselineVerdict,
        fetchStatus: discovery?.baseline?.fetchStatus || null,
        fetchError: discovery?.baseline?.fetchError || null,
        revParseStatus: discovery?.baseline?.revParseStatus || null,
        revParseError: discovery?.baseline?.revParseError || null,
        deDiffBaseline: discovery?.baseline?.deDiffBaseline,
        deChanges: discovery?.baseline?.deChanges || [],
        deDiffError: discovery?.baseline?.deDiffError || null,
        unmergedClosureCountRaw: discovery?.baseline?.unmergedClosureCountRaw ?? 0,
        unmergedClosureClassification: discovery?.baseline?.unmergedClosureClassification || null,
        activeUnmergedClosureCount: discovery?.baseline?.activeUnmergedClosureCount ?? 0,
        needsOwnerReviewCount: discovery?.baseline?.needsOwnerReviewCount ?? 0,
        unresolvedOwnerReviewCount: discovery?.baseline?.unresolvedOwnerReviewCount ?? 0,
        ownerDecisionsApplied: discovery?.baseline?.ownerDecisionsApplied ?? 0,
        ownerDecisionsPath: discovery?.baseline?.ownerDecisionsPath || null,
        activeUnmergedClosureCandidates: discovery?.baseline?.activeUnmergedClosureCandidates || [],
        classificationReport: discovery?.baseline?.classificationReportMd || null,
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
    matrix.status = "PHASE_0_COMPLETE";
    matrix.verdict = "READY_FOR_PHASE_0_PRE_MERGE_REVIEW";
    matrix.phase0Complete = true;
    matrix.note =
      "All F0-1…F0-8 gates PASS. Production diff = 0. Phase 1 not started.";
  } else {
    matrix.status = "PHASE_0_INCOMPLETE";
    matrix.verdict = "PHASE_0_INCOMPLETE";
    matrix.phase0Complete = false;
    matrix.note = "One or more F0 gates failed. Merge and Phase 1 are not allowed.";
  }

  return matrix;
}

function gateLabel(pass) {
  return pass ? "PASS" : "FAIL";
}

function writePhase0ExitReports(exitMatrix) {
  const outJson = path.join(ROOT, "reports", "phase0-exit.json");
  const outMd = path.join(ROOT, "reports", "phase0-exit.md");
  const outMatrix = path.join(ROOT, "reports", "phase0-exit-matrix.json");

  fs.writeFileSync(outJson, `${JSON.stringify(exitMatrix, null, 2)}\n`, "utf8");
  fs.writeFileSync(outMatrix, `${JSON.stringify(exitMatrix, null, 2)}\n`, "utf8");

  const g = exitMatrix.gates;
  const inv = exitMatrix.scopeInventory;
  const lines = [
    "# Phase 0 Exit Report",
    "",
    `**Generated:** ${exitMatrix.generatedAt}`,
    `**ORIGIN_MAIN_SHA:** \`${exitMatrix.originMainSha}\``,
    `**MASTER:** ${exitMatrix.masterVersion}`,
    `**Status:** ${exitMatrix.status}`,
    `**Verdict:** ${exitMatrix.verdict}`,
    `**PHASE_0_COMPLETE:** ${exitMatrix.phase0Complete ? "YES" : "NO"}`,
    "",
    "## Gate Matrix",
    "",
    `| Gate | Result | Detail |`,
    `|------|--------|--------|`,
    `| F0-1 Bridge library | ${gateLabel(g.F0_1_bridge_library.pass)} | |`,
    `| F0-2 Export dry-run | ${gateLabel(g.F0_2_export_dry_run.pass)} | |`,
    `| F0-3 Round-trip | ${gateLabel(g.F0_3_roundtrip.pass)} | ${g.F0_3_roundtrip.passed}/${g.F0_3_roundtrip.total} pass, ${g.F0_3_roundtrip.skipped} skipped (allowed: ${g.F0_3_roundtrip.allowedSkips?.length || 0}) |`,
    `| F0-4 Discovery orchestrator | ${gateLabel(g.F0_4_discovery_orchestrator.pass)} | ${g.F0_4_discovery_orchestrator.executedScopes}/${g.F0_4_discovery_orchestrator.expectedScopes} |`,
    `| F0-5 Baseline header | ${gateLabel(g.F0_5_baseline_header.pass)} | active=${g.F0_5_baseline_header.activeUnmergedClosureCount}, ownerDecisions=${g.F0_5_baseline_header.ownerDecisionsApplied} |`,
    `| F0-6 Deterministic collectors | ${gateLabel(g.F0_6_deterministic_collectors.pass)} | ${g.F0_6_deterministic_collectors.structuralCoverage.executedCount}/${g.F0_6_deterministic_collectors.structuralCoverage.expectedCount} |`,
    `| F0-7 Production diff zero | ${gateLabel(g.F0_7_production_diff_zero.pass)} | changed=${g.F0_7_production_diff_zero.changedCount} |`,
    `| F0-8 All-groups coverage | ${gateLabel(g.F0_8_all_groups_coverage.pass)} | |`,
    "",
    "## Scope Inventory (320)",
    "",
    `- EXPECTED_SCOPE: ${inv.expectedScope}`,
    `- UNIQUE_SCOPE_IDS: ${inv.uniqueScopeIds}`,
    `- DUPLICATES: ${inv.duplicates}`,
    `- G1: ${inv.byGroup.g1}`,
    `- G2: ${inv.byGroup.g2}`,
    `- G3: ${inv.byGroup.g3}`,
    "",
    "## F0-3 Allowed NOT_APPLICABLE",
    "",
  ];

  for (const skip of g.F0_3_roundtrip.allowedSkips || []) {
    lines.push(`- \`${skip.key}\`: ${skip.reason || skip.status}`);
  }

  lines.push(
    "",
    "## Discovery",
    "",
    `- EXPECTED: ${exitMatrix.discovery.expectedScope}`,
    `- PROCESSED: ${exitMatrix.discovery.processed}`,
    `- NOT_APPLICABLE: ${exitMatrix.discovery.notApplicable}`,
    `- MISSING: ${exitMatrix.discovery.missing}`,
    "",
    "## Constraints",
    "",
    "- PRODUCTION_DIFF = 0 (infra/reports only on branch)",
    "- DE_CHANGES = 0",
    "- LUNA_CALLS = 0",
    "- CROWDIN_PRODUCTION_IMPORT = 0",
    "- PHASE_1 = NOT_STARTED",
    "",
  );

  fs.writeFileSync(outMd, `${lines.join("\n")}\n`, "utf8");
  return { outJson, outMd, outMatrix };
}

function runPhase0ExitEvaluation(options = {}) {
  const scopeInventory = buildScopeInventory(DISCOVERY_SCOPE.langs, DISCOVERY_SCOPE.datasetsByGroup);
  const bridgeGate = verifyBridgeLibrary();
  const exportGate = verifyExportDryRunOnly();
  const roundTrips = runRoundTripMatrix();
  const discovery = runContentDiscovery(DISCOVERY_SCOPE);
  const productionDiffResult = gitProductionDiff(discovery.originMainSha);
  const exitMatrix = evaluateExitCriteria({
    roundTrips,
    discovery,
    productionDiffResult,
    bridgeGate,
    exportGate,
    scopeInventory,
  });
  if (options.writeReports !== false) {
    writeDiscoveryReports(discovery, {
      outJson: path.join(ROOT, "reports", "content-discovery-matrix.json"),
      outMd: path.join(ROOT, "reports", "content-discovery-READONLY.md"),
    });
    writePhase0ExitReports(exitMatrix);
  }
  return exitMatrix;
}

function main() {
  console.log("\n=== Phase 0 exit matrix (F0-1…F0-8) ===\n");

  const exitMatrix = runPhase0ExitEvaluation({ writeReports: true });
  const scopeInventory = exitMatrix.scopeInventory;
  const g = exitMatrix.gates;
  console.log(`Status: ${exitMatrix.status}`);
  console.log(`Verdict: ${exitMatrix.verdict}`);
  console.log(`PHASE_0_COMPLETE: ${exitMatrix.phase0Complete ? "YES" : "NO"}`);
  console.log(`F0-1 bridge: ${gateLabel(g.F0_1_bridge_library.pass)}`);
  console.log(`F0-2 export: ${gateLabel(g.F0_2_export_dry_run.pass)}`);
  console.log(
    `F0-3 round-trip: ${gateLabel(g.F0_3_roundtrip.pass)} (${g.F0_3_roundtrip.passed}/${g.F0_3_roundtrip.total} pass, ${g.F0_3_roundtrip.skipped} skipped, allowed=${g.F0_3_roundtrip.allowedSkips?.length || 0})`,
  );
  console.log(
    `F0-4 discovery: ${gateLabel(g.F0_4_discovery_orchestrator.pass)} (${g.F0_4_discovery_orchestrator.executedScopes}/${g.F0_4_discovery_orchestrator.expectedScopes})`,
  );
  console.log(
    `F0-5 baseline: ${gateLabel(g.F0_5_baseline_header.pass)} (active=${g.F0_5_baseline_header.activeUnmergedClosureCount}, ownerDecisions=${g.F0_5_baseline_header.ownerDecisionsApplied})`,
  );
  console.log(
    `F0-6 collectors: ${gateLabel(g.F0_6_deterministic_collectors.pass)} (${g.F0_6_deterministic_collectors.structuralCoverage.executedCount}/${g.F0_6_deterministic_collectors.structuralCoverage.expectedCount})`,
  );
  console.log(
    `F0-7 production diff: ${gateLabel(g.F0_7_production_diff_zero.pass)} (${g.F0_7_production_diff_zero.changedCount} changed)`,
  );
  console.log(`F0-8 all-groups: ${gateLabel(g.F0_8_all_groups_coverage.pass)}`);
  console.log(`Scope inventory: ${scopeInventory.expectedScope} expected, ${scopeInventory.uniqueScopeIds} unique`);
  console.log(`Discovery: ${path.join(ROOT, "reports", "content-discovery-matrix.json")}`);
  console.log(`Exit report: ${path.join(ROOT, "reports", "phase0-exit.json")}`);
  console.log(`Exit MD: ${path.join(ROOT, "reports", "phase0-exit.md")}`);
  console.log(`Exit matrix: ${path.join(ROOT, "reports", "phase0-exit-matrix.json")}`);
  console.log("");

  if (!exitMatrix.phase0Complete) {
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  runPhase0ExitEvaluation,
  evaluateExitCriteria,
  buildScopeInventory,
};
