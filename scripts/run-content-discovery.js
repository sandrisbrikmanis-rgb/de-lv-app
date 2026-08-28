#!/usr/bin/env node
"use strict";

/**
 * READ-ONLY content discovery orchestrator (Phase 0).
 *
 * Usage:
 *   node scripts/run-content-discovery.js --group g2 --dataset a1 --langs all
 *   node scripts/run-content-discovery.js --group g2 --dataset a1 --lang et
 */

const {
  runContentDiscovery,
  writeDiscoveryReports,
  parseLangsArg,
  parseDatasetsArg,
} = require("./lib/content-discovery/registry");

function parseArgs(argv) {
  let group = "g2";
  let datasets = ["a1"];
  let langs = ["et"];

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--group" && argv[i + 1]) group = argv[++i];
    else if (arg === "--dataset" && argv[i + 1]) datasets = parseDatasetsArg(argv[++i]);
    else if (arg === "--datasets" && argv[i + 1]) datasets = parseDatasetsArg(argv[++i]);
    else if (arg === "--langs" && argv[i + 1]) langs = parseLangsArg(argv[++i]);
    else if (arg === "--lang" && argv[i + 1]) langs = [argv[++i]];
    else if (arg === "--help" || arg === "-h") {
      console.log(`Usage: node scripts/run-content-discovery.js [--group g2] [--dataset a1|all] [--lang CODE | --langs all]

READ-ONLY. Writes reports/content-discovery-matrix.json and content-discovery-READONLY.md.
`);
      process.exit(0);
    } else {
      console.error(`Unknown argument: ${arg}`);
      process.exit(1);
    }
  }

  return { group, datasets, langs };
}

function main() {
  const { group, datasets, langs } = parseArgs(process.argv);

  console.log(`\n=== Content discovery (READ-ONLY) group=${group} ===\n`);

  const matrix = runContentDiscovery({ group, datasets, langs });
  const { outJson, outMd } = writeDiscoveryReports(matrix);

  console.log(`Baseline: ${matrix.baselineVerdict} (origin/main ${matrix.originMainSha})`);
  console.log(`Scope: ${datasets.join(", ")} × ${langs.length} lang(s)`);
  console.log(`Findings: ${matrix.findings.length}`);
  console.log(`Verdict: ${matrix.verdict}`);
  console.log(`JSON: ${outJson}`);
  console.log(`MD:   ${outMd}`);
  console.log("\nPRODUCTION_CHANGES = 0 | APPLY = NOT_STARTED\n");

  if (matrix.verdict === "BLOCKED_BASELINE") {
    process.exit(2);
  }
  if (matrix.findings.length > 0) {
    process.exit(1);
  }
  process.exit(0);
}

main();
