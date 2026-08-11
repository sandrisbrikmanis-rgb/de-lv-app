#!/usr/bin/env node
/**
 * CS-DE full audit orchestrator (read-only).
 * Runs deterministic + linguistic audit for all datasets in order.
 *
 * Usage:
 *   node scripts/audit-cs-run-all.js [--deterministic-only] [--linguistic-only] [--dataset=a1]
 */
const { execSync, spawnSync } = require("child_process");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const DATASETS = ["a1", "a2", "b1", "b2", "c1", "c2", "vety", "slovesa", "kurs"];
const DETERMINISTIC_ONLY = process.argv.includes("--deterministic-only");
const LINGUISTIC_ONLY = process.argv.includes("--linguistic-only");

function parseDatasetFilter() {
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith("--dataset=")) return arg.slice("--dataset=".length).trim().toLowerCase();
  }
  return null;
}

function run(cmd) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { cwd: ROOT, stdio: "inherit" });
}

function main() {
  const filter = parseDatasetFilter();
  const datasets = filter ? [filter] : DATASETS;

  console.log("CS-DE FULL AUDIT ORCHESTRATOR");
  console.log(`Datasets: ${datasets.join(" → ")}`);
  console.log(`Mode: ${DETERMINISTIC_ONLY ? "deterministic only" : LINGUISTIC_ONLY ? "linguistic only" : "full"}`);

  if (!LINGUISTIC_ONLY) {
    console.log("\n=== PHASE 1: Deterministic validation ===");
    run("node scripts/audit-language-parity.js --lang=cs");
    run("node scripts/audit-mojibake.js --lang=cs");
    run("node scripts/validate-study-design.js --lang=cs");
    run("node scripts/verify-cs-de-compliance.js || true");

    for (const ds of datasets) {
      run(`node scripts/audit-cs-collect.js --dataset=${ds}`);
    }
  }

  if (!DETERMINISTIC_ONLY) {
    console.log("\n=== PHASE 2: Linguistic Luna audit ===");
    for (const ds of datasets) {
      run(`node scripts/audit-cs-linguistic.js --dataset=${ds}`);
    }
  }

  console.log("\n=== PHASE 3: Report generation ===");
  for (const ds of datasets) {
    run(`node scripts/audit-cs-write-report.js --dataset=${ds}`);
  }

  console.log("\n=== CS-DE audit orchestrator complete ===");
}

main();
