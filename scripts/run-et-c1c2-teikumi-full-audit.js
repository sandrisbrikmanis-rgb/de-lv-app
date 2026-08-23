#!/usr/bin/env node
"use strict";
/**
 * ET-DE C1/C2 + Teikumi (Sätze) FULL_DISCOVERY orchestrator (READ-ONLY).
 * Usage: node scripts/run-et-c1c2-teikumi-full-audit.js [--skip-luna] [--test-luna] [--fresh-luna]
 *   [--only=c1c2|sentences|all]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

function parseOnly() {
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith("--only=")) return arg.slice("--only=".length).trim().toLowerCase();
  }
  return "all";
}

function run(script, extraArgs = "") {
  const passArgs = process.argv
    .slice(2)
    .filter((a) => a.startsWith("--skip-luna") || a.startsWith("--test-luna") || a.startsWith("--fresh-luna"))
    .join(" ");
  console.log(`\n=== ${script} ${extraArgs} ${passArgs} ===\n`);
  execSync(`node scripts/${script} ${extraArgs} ${passArgs}`.trim(), { cwd: ROOT, stdio: "inherit" });
}

function main() {
  const only = parseOnly();
  console.log("\n=== ET–DE C1/C2 + TEIKUMI FULL_DISCOVERY (MASTER v1.9) ===\n");
  console.log(`Scope: ${only}`);

  if (only === "all" || only === "c1c2") {
    run("run-et-c1c2-full-audit.js");
  }
  if (only === "all" || only === "sentences" || only === "teikumi") {
    run("run-et-sentences-full-audit.js");
  }

  console.log("\n=== ET–DE C1/C2 + TEIKUMI AUDIT COMPLETE ===\n");
  if (only === "all" || only === "c1c2") {
    console.log("  reports/et-c1c2-full-audit.md");
    console.log("  reports/et-c1c2-owner-review-GITHUB.md");
  }
  if (only === "all" || only === "sentences" || only === "teikumi") {
    console.log("  reports/et-sentences-full-audit.md");
    console.log("  reports/et-sentences-owner-review-GITHUB.md");
  }
}

main();
