#!/usr/bin/env node
"use strict";

/**
 * Phase 1 exit matrix (F1-1…F1-9) — F0-COMP-12.
 * Distinguishes F0 completion vs full Phase 1 completion states.
 */

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { runBaselineGate } = require("./lib/content-discovery/baseline-gate");
const { gitProductionDiffAgainstBaseline } = require("./lib/content-discovery/git-baseline");
const { evaluateAllCoverageGates } = require("./lib/content-discovery/phase1-coverage-gates");
const { validateFindings } = require("./lib/content-discovery/phase1-findings-validation");
const { normalizeOperationalPaths, toRepoRelativePath } = require("./lib/content-discovery/report-builder");
const { summarizeApplicability } = require("./lib/content-discovery/phase1-applicability");
const { evaluateOwnerPrepCoverage } = require("./lib/content-discovery/phase1-owner-prep");

const MATRIX_PATH = path.join(ROOT, "reports", "phase1-discovery-matrix.json");
const SCOPE_INVENTORY_PATH = path.join(ROOT, "reports", "phase1-scope-inventory.json");

function loadJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function gateStatus(pass) {
  return pass ? "PASS" : "FAIL";
}

function evaluateF1Gates({ matrix, baseline, productionDiff, options = {} }) {
  const summary = matrix?.summary || [];
  const coverage = evaluateAllCoverageGates(matrix, {
    luna: { mode: options.withLuna ? "LIVE" : "NOT_RUN", fixture: options.lunaFixture },
  });
  const validation = matrix?.validation || validateFindings(matrix?.findings || []);
  const applicability = summarizeApplicability();
  const f0Completion = !options.withLuna;

  const f1_1 = {
    pass:
      baseline?.verdict === "PASS" &&
      baseline?.fetchStatus === "PASS" &&
      baseline?.revParseStatus === "PASS" &&
      (baseline?.activeUnmergedClosureCount ?? 0) === 0,
    status: gateStatus(
      baseline?.verdict === "PASS" &&
        baseline?.fetchStatus === "PASS" &&
        baseline?.revParseStatus === "PASS" &&
        (baseline?.activeUnmergedClosureCount ?? 0) === 0,
    ),
  };

  const f1_2 = {
    pass: coverage.deterministic.pass,
    status: gateStatus(coverage.deterministic.pass),
    processed: coverage.deterministic.processed,
    expected: coverage.deterministic.expected,
    notApplicable: coverage.deterministic.notApplicable,
  };

  const f1_3 = {
    pass: coverage.inventory.pass,
    status: gateStatus(coverage.inventory.pass),
    coverage: `${coverage.inventory.processed}/${coverage.inventory.expected}`,
  };

  const f1_4 = {
    pass: coverage.multiScan.pass,
    status: gateStatus(coverage.multiScan.pass),
    coverage: `${coverage.multiScan.processed}/${coverage.multiScan.expected}`,
  };

  const f1_5 = f0Completion
    ? { pass: true, status: "NOT_RUN", coverage: "NOT_RUN" }
    : {
        pass: coverage.luna.pass,
        status: gateStatus(coverage.luna.pass),
        coverage: coverage.luna.coverage,
      };

  const f1_6 = f0Completion
    ? { pass: true, status: "NOT_RUN", note: "Skipped during F0 infrastructure completion" }
    : {
        pass: validation.pass,
        status: gateStatus(validation.pass),
        schemaErrors: validation.schemaErrorCount || 0,
        unclassifiedCount: validation.unclassifiedCount || 0,
      };

  const f1_7 = {
    pass: productionDiff?.clean === true && !productionDiff?.error,
    status: gateStatus(productionDiff?.clean === true && !productionDiff?.error),
    productionDiffClean: productionDiff?.clean === true,
  };

  const validatedFindings = matrix?.totals?.findingsValidated || 0;
  const ownerPrepCoverage = f0Completion
    ? { pass: true, status: "NOT_RUN" }
    : evaluateOwnerPrepCoverage({
        matrix,
        ownerPrepOutDir: options.ownerPrepOutDir,
      });
  const f1_8 = f0Completion
    ? { pass: true, status: "NOT_RUN", validatedFindings, note: "OWNER-PREP not required during F0 smoke" }
    : {
        pass: ownerPrepCoverage.pass,
        status: gateStatus(ownerPrepCoverage.pass),
        validatedFindings,
        ownerPrepCoverage,
      };

  const gates = {
    "F1-1": f1_1.status,
    "F1-2": f1_2.status,
    "F1-3": f1_3.status,
    "F1-4": f1_4.status,
    "F1-5": f1_5.status,
    "F1-6": f1_6.status,
    "F1-7": f1_7.status,
    "F1-8": f1_8.status,
    "F1-9": "PENDING",
  };

  const operationalGatesPass = [
    f1_1.pass,
    f1_2.pass,
    f1_3.pass,
    f1_4.pass,
    f0Completion ? true : f1_5.pass,
    f0Completion ? true : f1_6.pass,
    f1_7.pass,
    f0Completion ? true : f1_8.pass,
  ].every(Boolean);

  gates["F1-9"] = gateStatus(operationalGatesPass);

  const allGatesPass = operationalGatesPass && gates["F1-9"] === "PASS";
  const status = f0Completion
    ? allGatesPass
      ? "PHASE_0_COMPLETION_PASS"
      : "PHASE_0_BLOCKED"
    : allGatesPass
      ? "PHASE_1_COMPLETE"
      : "PHASE_1_BLOCKED";

  return {
    status,
    f0Completion,
    gates,
    details: {
      F1_1: f1_1,
      F1_2: f1_2,
      F1_3: f1_3,
      F1_4: f1_4,
      F1_5: f1_5,
      F1_6: f1_6,
      F1_7: f1_7,
      F1_8: f1_8,
    },
    coverage,
    validation,
    applicability,
    pass: operationalGatesPass && gates["F1-9"] === "PASS",
  };
}

function buildExitPayload({ matrix, baseline, productionDiff, evaluation }) {
  const lunaStats = matrix?.lunaStats || {
    lunaScopesExpected: 0,
    lunaScopesProcessed: 0,
    lunaCalls: 0,
    lunaSuccessfulBatches: 0,
    lunaRetryAttempts: 0,
    status: "NOT_RUN",
  };

  return normalizeOperationalPaths({
    phase: 1,
    status: evaluation.status,
    generatedAt: new Date().toISOString(),
    originMainSha: baseline?.originMainSha || matrix?.originMainSha || null,
    masterVersion: matrix?.masterVersion || "1.17",
    ownerDecisionRef: options.ownerDecisionRef || "PENDING",
    phase1StartAuthorizationRef: options.phase1StartAuthorizationRef || "OWNER-APPROVED-2026-08-29",
    phase1TechnicalOwnerDecisionRef: options.phase1TechnicalOwnerDecisionRef || "PENDING",
    scope: {
      expected: 320,
      processed: matrix?.summary?.length || 0,
      notApplicable: matrix?.scope?.notApplicable || 2,
      lunaApplicable: 318,
      inventoryApplicable: 309,
      multiScanApplicable: 309,
    },
    gates: evaluation.gates,
    coverage: {
      deterministic: `${evaluation.coverage.deterministic.processed}/${evaluation.coverage.deterministic.expected}`,
      mainTranslationFieldInventory: `${evaluation.coverage.inventory.processed}/${evaluation.coverage.inventory.expected}`,
      multiTranslationScan: `${evaluation.coverage.multiScan.processed}/${evaluation.coverage.multiScan.expected}`,
      lunaAudit: evaluation.f0Completion ? "NOT_RUN" : evaluation.coverage.luna.coverage,
    },
    constraints: {
      productionChanges: 0,
      deChanges: (baseline?.deChanges || []).length,
      crowdinProductionImport: 0,
      translationApply: 0,
    },
    lunaStats,
    productionDiff: {
      clean: productionDiff?.clean === true,
      changedFiles: productionDiff?.changedFiles || [],
    },
    details: evaluation.details,
    pass: evaluation.pass,
  });
}

function writeExitReports(exitPayload) {
  const outJson = path.join(ROOT, "reports", "phase1-exit.json");
  const outMd = path.join(ROOT, "reports", "phase1-exit.md");
  fs.mkdirSync(path.dirname(outJson), { recursive: true });
  fs.writeFileSync(outJson, `${JSON.stringify(exitPayload, null, 2)}\n`, "utf8");

  const lines = [
    "# Phase 1 exit matrix",
    "",
    `**Status:** ${exitPayload.status}`,
    `**Generated:** ${exitPayload.generatedAt}`,
    `**ORIGIN_MAIN_SHA:** \`${exitPayload.originMainSha}\``,
  ];

  for (const [gate, status] of Object.entries(exitPayload.gates)) {
    lines.push(`- ${gate}: **${status}**`);
  }

  lines.push(
    "",
    `**Production diff clean:** ${exitPayload.productionDiff.clean}`,
    `**Luna calls:** ${exitPayload.lunaStats.lunaCalls}`,
    "",
  );

  fs.writeFileSync(outMd, `${lines.join("\n")}\n`, "utf8");
  return {
    outJson: toRepoRelativePath(outJson),
    outMd: toRepoRelativePath(outMd),
  };
}

function runPhase1ExitMatrix(options = {}) {
  const baseline = runBaselineGate();
  const matrix = loadJson(MATRIX_PATH) || { summary: [], findings: [], totals: {} };
  const productionDiff = gitProductionDiffAgainstBaseline(baseline.originMainSha);
  const evaluation = evaluateF1Gates({
    matrix,
    baseline,
    productionDiff,
    options,
  });
  const exitPayload = buildExitPayload({ matrix, baseline, productionDiff, evaluation });
  const reports = writeExitReports(exitPayload);
  return { exitPayload, reports, evaluation, baseline, productionDiff };
}

function main() {
  const withLuna = process.argv.includes("--with-luna");
  const result = runPhase1ExitMatrix({ withLuna });
  console.log(
    JSON.stringify(
      {
        status: result.exitPayload.status,
        pass: result.exitPayload.pass,
        gates: result.exitPayload.gates,
        lunaCalls: result.exitPayload.lunaStats.lunaCalls,
        reports: result.reports,
      },
      null,
      2,
    ),
  );
  process.exit(result.exitPayload.pass ? 0 : 1);
}

if (require.main === module) {
  main();
}

module.exports = {
  evaluateF1Gates,
  buildExitPayload,
  runPhase1ExitMatrix,
  writeExitReports,
  MATRIX_PATH,
  SCOPE_INVENTORY_PATH,
};
