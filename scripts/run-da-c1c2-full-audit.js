#!/usr/bin/env node
"use strict";
/**
 * DA–DE C1/C2 full audit orchestrator (READ-ONLY).
 * Usage: node scripts/run-da-c1c2-full-audit.js [--level=c1|c2|all]
 */
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const { ROOT } = require("./lib/audit-common");

function parseLevelArg() {
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith("--level=")) return arg;
    if (arg === "--level") {
      const next = process.argv[process.argv.indexOf(arg) + 1];
      return `--level=${next || "all"}`;
    }
  }
  return "--level=all";
}

function run(script, extraArgs = "") {
  console.log(`\n=== ${script} ${extraArgs} ===\n`);
  execSync(`node scripts/${script} ${extraArgs}`.trim(), { cwd: ROOT, stdio: "inherit" });
}

function summarize() {
  const summary = {};
  for (const [key, file] of [
    ["c1", "reports/temp/da-c1-audit-data.json"],
    ["c2", "reports/temp/da-c2-audit-data.json"],
  ]) {
    const p = path.join(ROOT, file);
    if (!fs.existsSync(p)) continue;
    const data = JSON.parse(fs.readFileSync(p, "utf8"));
    summary[key] = data.summary;
  }
  return summary;
}

function main() {
  const levelArg = parseLevelArg();
  console.log("\n=== DA–DE C1/C2 FULL AUDIT (READ-ONLY) — GPT-5.6 Luna ===\n");
  run("audit-da-c1c2-collect.js", levelArg);
  run("audit-da-c1c2-report-gen.js");
  run("build-da-c1c2-owner-review.js");
  run("build-da-c1c2-owner-review-groups.js");
  run("build-da-c1c2-github-index.js");
  console.log("\n=== DONE ===\n");
  console.log("Reports:");
  console.log("  reports/da-c1-full-audit.md");
  console.log("  reports/da-c2-full-audit.md");
  console.log("  reports/da-c1c2-all-findings-by-card.md");
  console.log("  reports/da-c1c2-owner-review-README.md");
  console.log("  reports/da-c1c2-owner-review-GITHUB.md");
  const summary = summarize();
  console.log("\nFinding counts:");
  console.log(JSON.stringify(summary, null, 2));
}

main();
