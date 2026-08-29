#!/usr/bin/env node
"use strict";

/**
 * Phase 1 READ-ONLY discovery orchestrator (F0-COMP-11).
 * F0 verification uses --skip-luna only (no real Luna API).
 */

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { runBaselineGate } = require("./lib/content-discovery/baseline-gate");
const { gitProductionDiffAgainstBaseline } = require("./lib/content-discovery/git-baseline");
const {
  getDeterministicScopeOrder,
  PHASE1_DATASETS_BY_GROUP,
  summarizeApplicability,
} = require("./lib/content-discovery/phase1-applicability");
const { collectPhase1Scope } = require("./lib/content-discovery/phase1-collect");
const { writePhase1ScopeInventory } = require("./lib/content-discovery/phase1-scope-inventory");
const { validateFindings } = require("./lib/content-discovery/phase1-findings-validation");
const { deduplicateFindings } = require("./lib/content-discovery/phase1-findings-dedup");
const { evaluateAllCoverageGates } = require("./lib/content-discovery/phase1-coverage-gates");
const {
  normalizeOperationalPaths,
  buildPhase1MatrixSkeleton,
  toRepoRelativePath,
  writeReportAtomic,
} = require("./lib/content-discovery/report-builder");
const { validateHistoryGates } = require("./lib/discovery-stability");
const { CONTENT_LANGUAGES } = require("./lib/content-crowdin-bridge/constants");
const { parseDatasetsArg } = require("./lib/content-discovery/registry");
const { runLunaForScope } = require("./lib/luna-orchestrator");
const {
  runPreBacklogHistoryGate,
  generateOwnerPrep,
} = require("./lib/content-discovery/phase1-owner-prep");

function parseLangsArg(value) {
  if (!value || value === "all") return [...CONTENT_LANGUAGES];
  return value.split(",").map((s) => s.trim()).filter(Boolean);
}

function printHelp() {
  console.log(`Usage: node scripts/run-phase1-discovery.js [options]

Options:
  --skip-luna           Deterministic discovery only (F0-COMP default)
  --with-luna           Full discovery with Luna (only after PHASE_0_COMPLETION_PASS)
  --group <g1|g2|g3>    Limit group
  --dataset <name|all>  Limit dataset
  --lang <code|all>     Limit language(s)
  --all-langs           All target languages
  --all-groups          g2 + g1 + g3
  --debug               Show stack traces on errors
  --help                Show help
`);
}

function parseArgs(argv) {
  const args = {
    skipLuna: true,
    withLuna: false,
    groups: ["g2", "g1", "g3"],
    langs: null,
    datasetsByGroup: { ...PHASE1_DATASETS_BY_GROUP },
    help: false,
    debug: false,
  };

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--help" || arg === "-h") args.help = true;
    else if (arg === "--debug") args.debug = true;
    else if (arg === "--skip-luna") {
      args.skipLuna = true;
      args.withLuna = false;
    } else if (arg === "--with-luna") {
      args.withLuna = true;
      args.skipLuna = false;
    } else if (arg === "--all-groups") args.groups = ["g2", "g1", "g3"];
    else if (arg === "--all-langs") args.langs = parseLangsArg("all");
    else if (arg === "--group") args.groups = [argv[++i]];
    else if (arg === "--dataset") {
      const value = argv[++i];
      for (const group of args.groups) {
        args.datasetsByGroup[group] = parseDatasetsArg(group, value);
      }
    } else if (arg === "--lang") args.langs = parseLangsArg(argv[++i]);
    else {
      const err = new Error(`Unknown argument: ${arg}`);
      err.code = "UNKNOWN_CLI_ARG";
      throw err;
    }
  }

  if (!args.langs) args.langs = parseLangsArg("all");
  return args;
}

function filterScopes(scopes, args) {
  return scopes.filter((scope) => {
    if (!args.groups.includes(scope.group)) return false;
    const datasets = args.datasetsByGroup[scope.group] || [];
    if (!datasets.includes(scope.dataset)) return false;
    if (!args.langs.includes(scope.lang)) return false;
    return true;
  });
}

function writePhase1Reports(matrix) {
  const normalized = normalizeOperationalPaths(matrix);
  const reportsDir = path.join(ROOT, "reports");
  fs.mkdirSync(reportsDir, { recursive: true });

  const outJson = path.join(reportsDir, "phase1-discovery-matrix.json");
  const outMd = path.join(reportsDir, "phase1-discovery-READONLY.md");
  const outLuna = path.join(reportsDir, "phase1-luna-stats.json");

  writeReportAtomic(outJson, normalized);

  const lines = [
    "# Phase 1 discovery — READ-ONLY",
    "",
    `**Status:** ${normalized.status}`,
    `**Generated:** ${normalized.generatedAt}`,
    `**MASTER:** ${normalized.masterVersion}`,
    `**ORIGIN_MAIN_SHA:** \`${normalized.originMainSha}\``,
    `**Mode:** ${normalized.mode}`,
    `**Scopes processed:** ${normalized.summary.length}`,
    `**Findings raw:** ${normalized.totals.findingsRaw}`,
    `**Luna calls:** ${normalized.constraints.lunaCalls}`,
    "",
    "## Summary",
    "",
    "| scopeId | applicability | findings | inventory | multi-scan | verdict |",
    "|---------|---------------|----------|-----------|------------|---------|",
  ];

  for (const row of normalized.summary) {
    lines.push(
      `| ${row.scopeId} | ${row.applicability} | ${row.findings || 0} | ${row.inventoryCoverage ?? "—"} | ${row.multiScanCoverage ?? "—"} | ${row.verdict || "—"} |`,
    );
  }
  lines.push("", "## Notes", "", "- READ-ONLY discovery — no apply.", "");

  writeReportAtomic(outMd, `${lines.join("\n")}\n`);
  writeReportAtomic(outLuna, normalized.lunaStats);

  return {
    outJson: toRepoRelativePath(outJson),
    outMd: toRepoRelativePath(outMd),
    outLuna: toRepoRelativePath(outLuna),
  };
}

async function runPhase1Discovery(options = {}) {
  if (options.withLuna && !options.allowWithLuna) {
    throw new Error(
      "F0-COMP forbids --with-luna. Real Luna discovery requires PHASE_0_COMPLETION_PASS in a separate Phase 1 task.",
    );
  }

  const baseline = runBaselineGate();
  if (baseline.verdict === "BLOCKED") {
    return {
      blocked: true,
      baseline,
      verdict: "BLOCKED_BASELINE",
    };
  }

  const allScopes = getDeterministicScopeOrder();
  const scopes = filterScopes(allScopes, options);
  const inventoryWrite = writePhase1ScopeInventory();

  const matrix = buildPhase1MatrixSkeleton({
    originMainSha: baseline.originMainSha,
    masterVersion: baseline.masterStandardVersion || "1.17",
    status: options.withLuna ? "PHASE_1_IN_PROGRESS" : "PHASE_0_INFRASTRUCTURE_COMPLETION",
    mode: "READ_ONLY",
  });

  matrix.baseline = baseline;
  matrix.baselineVerdict = baseline.verdict;
  matrix.scopeInventoryPath = inventoryWrite.outPath;

  const findings = [];
  const summary = [];
  const lunaAggregate = {
    lunaScopesExpected: 0,
    lunaScopesProcessed: 0,
    lunaCalls: 0,
    lunaSuccessfulBatches: 0,
    lunaRetryAttempts: 0,
    failures: [],
  };

  for (const scope of scopes) {
    const { findings: scopedFindings, stats } = collectPhase1Scope({
      group: scope.group,
      dataset: scope.dataset,
      lang: scope.lang,
    });

    findings.push(...scopedFindings);
    const critical = scopedFindings.filter((f) => f.severity === "CRITICAL").length;
    const high = scopedFindings.filter((f) => f.severity === "HIGH").length;

    const row = {
      ...stats,
      scopeId: scope.scopeId,
      group: scope.group,
      dataset: scope.dataset,
      lang: scope.lang,
      findings: scopedFindings.length,
      critical,
      high,
      findingsDeterministic: scopedFindings.length,
      findingsLuna: 0,
      findingsValidated: 0,
      lunaProcessed: false,
      lunaObjectsExpected: 0,
      lunaObjectsReturned: 0,
      lunaStatus: stats.lunaApplicable ? "NOT_RUN" : "NOT_APPLICABLE",
    };

    const shouldRunLuna =
      stats.lunaApplicable &&
      (options.lunaMockIntegration || (options.withLuna && !options.skipLuna));

    if (shouldRunLuna) {
      const lunaResult = await runLunaForScope(scope, {
        transport: options.lunaTransport,
        fixtureMap: options.lunaFixtureMap,
      });
      if (!lunaResult.skipped) {
        lunaAggregate.lunaScopesExpected += 1;
        lunaAggregate.lunaScopesProcessed += 1;
        lunaAggregate.lunaCalls += lunaResult.stats?.realCalls || 0;
        lunaAggregate.lunaSuccessfulBatches += lunaResult.stats?.batches || 0;
        lunaAggregate.lunaRetryAttempts += lunaResult.stats?.retries || 0;
        if (!lunaResult.ok) {
          lunaAggregate.failures.push({ scopeId: scope.scopeId, reason: lunaResult.reason });
        }
        row.lunaProcessed = true;
        row.lunaObjectsExpected = lunaResult.lunaObjectsExpected || 0;
        row.lunaObjectsReturned = lunaResult.lunaObjectsReturned || 0;
        row.lunaStatus = lunaResult.lunaStatus;
        row.findingsLuna = 0;
      }
    }

    summary.push(row);
  }

  const validation = validateFindings(findings);
  const dedup = deduplicateFindings(validation.findings, { registry: options.semanticRegistry });
  const coverage = evaluateAllCoverageGates(
    { summary },
    {
      luna: options.lunaMockIntegration
        ? { mode: "LIVE" }
        : { mode: options.withLuna ? "LIVE" : "NOT_RUN", fixture: options.lunaFixture },
    },
  );

  const validatedFindings = dedup.findings.filter((f) =>
    ["VALIDATED_REAL_FINDING", "OWNER_DECISION_REQUIRED"].includes(f.classificationStatus),
  );

  const historyGateInput = {
    rawHistoryLoaded: options.rawHistoryLoaded !== false,
    ownerHistoryLoaded: options.ownerHistoryLoaded !== false,
    preBacklogReady: options.preBacklogReady !== false,
  };
  const historyGate = validateHistoryGates(historyGateInput);
  const preBacklogGate = runPreBacklogHistoryGate(validatedFindings, options.registry || {});

  let ownerPrep = null;
  if (
    validatedFindings.length > 0 &&
    historyGate.PRE_BACKLOG_HISTORY_GATE === "PASS" &&
    preBacklogGate.status === "PASS"
  ) {
    ownerPrep = generateOwnerPrep(
      validatedFindings,
      validatedFindings[0]?.scopeId || "aggregate",
      path.join(ROOT, "reports", "phase1-owner-prep"),
    );
  }

  matrix.summary = summary;
  matrix.findings = dedup.findings;
  matrix.totals = {
    findingsRaw: findings.length,
    findingsValidated: validatedFindings.length,
    findingsExcluded: dedup.findings.filter((f) =>
      ["FALSE_POSITIVE", "STYLE_ONLY", "PROJECT_CONVENTION", "PREVIOUSLY_SEEN_RAW_LLM_CANDIDATE"].includes(
        f.classificationStatus,
      ),
    ).length,
  };
  matrix.validation = {
    pass: validation.pass && dedup.pass && preBacklogGate.status !== "FAIL",
    schemaErrors: validation.schemaErrors,
    dedupConflicts: dedup.conflicts,
    preBacklogGate,
  };
  matrix.coverage = coverage;
  matrix.gates = {
    PRE_BACKLOG_HISTORY_GATE: historyGate.PRE_BACKLOG_HISTORY_GATE,
    PRE_BACKLOG_SEMANTIC_GATE: preBacklogGate.status,
    ownerPrepGenerated: Boolean(ownerPrep),
  };
  matrix.ownerPrep = ownerPrep;
  matrix.scope.processed = summary.length;
  matrix.scope.notApplicable = summary.filter((r) => r.applicability === "EXPECTED_NOT_APPLICABLE").length;
  matrix.constraints.lunaCalls = lunaAggregate.lunaCalls;
  matrix.lunaStats = {
    lunaScopesExpected: options.withLuna || options.lunaMockIntegration ? summarizeApplicability().lunaApplicable : 0,
    lunaScopesProcessed: lunaAggregate.lunaScopesProcessed,
    lunaCalls: lunaAggregate.lunaCalls,
    lunaSuccessfulBatches: lunaAggregate.lunaSuccessfulBatches,
    lunaRetryAttempts: lunaAggregate.lunaRetryAttempts,
    failures: lunaAggregate.failures,
    status: options.withLuna || options.lunaMockIntegration ? "MOCK" : "NOT_RUN",
  };
  matrix.verdict =
    validation.pass && dedup.pass && preBacklogGate.status !== "FAIL" && lunaAggregate.failures.length === 0
      ? "INFRASTRUCTURE_SMOKE_PASS"
      : "NEEDS_REPAIR";
  matrix.status = options.withLuna ? "PHASE_1_IN_PROGRESS" : "PHASE_0_INFRASTRUCTURE_COMPLETION";

  const reports = writePhase1Reports(matrix);
  const productionDiff = gitProductionDiffAgainstBaseline(baseline.originMainSha);

  return {
    matrix,
    reports,
    productionDiff,
    inventory: inventoryWrite.inventory,
    blocked: false,
    ownerPrep,
    preBacklogGate,
    lunaAggregate,
  };
}

async function main() {
  let args;
  try {
    args = parseArgs(process.argv);
  } catch (error) {
    if (error.code === "UNKNOWN_CLI_ARG") {
      console.error(`ERROR: ${error.message}`);
      console.error("Use --help for usage.");
      process.exit(1);
    }
    throw error;
  }

  if (args.help) {
    printHelp();
    process.exit(0);
  }

  try {
    const result = await runPhase1Discovery({
      ...args,
      skipLuna: !args.withLuna,
      allowWithLuna: false,
    });

    if (result.blocked) {
      console.error("BLOCKED_BASELINE");
      process.exit(2);
    }

    console.log(
      JSON.stringify(
        {
          status: result.matrix.status,
          scopes: result.matrix.summary.length,
          findingsRaw: result.matrix.totals.findingsRaw,
          lunaCalls: result.matrix.constraints.lunaCalls,
          reports: result.reports,
          productionDiffClean: result.productionDiff.clean,
        },
        null,
        2,
      ),
    );

    if (!result.matrix.validation.pass) process.exit(1);
    process.exit(0);
  } catch (error) {
    if (args.debug) {
      console.error(error.stack || error);
    } else {
      console.error(error.message || error);
    }
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  parseArgs,
  runPhase1Discovery,
  writePhase1Reports,
};
