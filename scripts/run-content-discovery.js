#!/usr/bin/env node
"use strict";

/**
 * READ-ONLY content discovery orchestrator (Phase 0).
 *
 * Usage:
 *   node scripts/run-content-discovery.js --all-langs --group g2 --dataset all
 *   node scripts/run-content-discovery.js --lang et --group g2 --dataset a1
 */

const {
  runContentDiscovery,
  writeDiscoveryReports,
  parseLangsArg,
  parseDatasetsArg,
  G1_DATASETS,
} = require("./lib/content-discovery/registry");
const { G2_LEVELS } = require("./lib/content-crowdin-bridge/constants");

function parseArgs(argv) {
  let groups = ["g2"];
  let datasetsByGroup = { g2: ["a1"] };
  let langs = ["et"];
  let allLangs = false;

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--group" && argv[i + 1]) {
      const g = argv[++i];
      groups = g === "all" ? ["g2", "g1", "g3"] : g.split(",").map((s) => s.trim());
    } else if (arg === "--dataset" && argv[i + 1]) {
      const ds = argv[++i];
      for (const g of groups) {
        datasetsByGroup[g] = parseDatasetsArg(g, ds);
      }
    } else if (arg === "--datasets" && argv[i + 1]) {
      const ds = argv[++i];
      for (const g of groups) {
        datasetsByGroup[g] = parseDatasetsArg(g, ds);
      }
    } else if (arg === "--langs" && argv[i + 1]) langs = parseLangsArg(argv[++i]);
    else if (arg === "--lang" && argv[i + 1]) langs = [argv[++i]];
    else if (arg === "--all-langs") allLangs = true;
    else if (arg === "--all-groups") groups = ["g2", "g1", "g3"];
    else if (arg === "--help" || arg === "-h") {
      console.log(`Usage: node scripts/run-content-discovery.js [options]

  --group g2|g1|g3|all
  --dataset a1|all|sentences|verbs|training|courseLessons
  --lang CODE | --langs all|CODE,CODE | --all-langs
`);
      process.exit(0);
    } else {
      console.error(`Unknown argument: ${arg}`);
      process.exit(1);
    }
  }

  if (allLangs) langs = parseLangsArg("all");

  if (groups.includes("g1") && !datasetsByGroup.g1) {
    datasetsByGroup.g1 = [...G1_DATASETS];
  }
  if (groups.includes("g2") && datasetsByGroup.g2?.[0] === "a1" && groups.length === 1) {
    /* keep default */
  }
  if (groups.includes("g3") && !datasetsByGroup.g3) {
    datasetsByGroup.g3 = ["courseLessons"];
  }

  return { groups, datasetsByGroup, langs };
}

function main() {
  const { groups, datasetsByGroup, langs } = parseArgs(process.argv);

  console.log(`\n=== Content discovery (READ-ONLY) ===`);
  console.log(`Groups: ${groups.join(", ")}`);
  console.log(`Langs: ${langs.length}`);
  console.log(`Status: PHASE_0_IN_PROGRESS\n`);

  const matrix = runContentDiscovery({ groups, langs, datasetsByGroup });
  const { outJson, outMd } = writeDiscoveryReports(matrix);

  console.log(`Baseline: ${matrix.baselineVerdict} (origin/main ${matrix.originMainSha})`);
  console.log(`Findings: ${matrix.findings.length}`);
  console.log(`Verdict: ${matrix.verdict}`);
  console.log(`JSON: ${outJson}`);
  console.log(`MD:   ${outMd}`);
  console.log("\nPRODUCTION_CHANGES = 0 | APPLY = NOT_STARTED\n");

  if (matrix.verdict === "BLOCKED_BASELINE") process.exit(2);
  if (matrix.findings.length > 0) process.exit(1);
  process.exit(0);
}

main();
