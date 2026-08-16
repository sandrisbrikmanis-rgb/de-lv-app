#!/usr/bin/env node
"use strict";
/**
 * DA–DE B1 full audit orchestrator (READ-ONLY).
 * Usage: node scripts/run-da-b1-full-audit.js
 */
const { execSync } = require("child_process");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

function run(script) {
  console.log(`\n=== ${script} ===\n`);
  execSync(`node scripts/${script}`, { cwd: ROOT, stdio: "inherit" });
}

function main() {
  console.log("\n=== DA–DE B1 FULL AUDIT (READ-ONLY) ===\n");
  run("audit-da-b1-collect.js");
  run("build-da-b1-owner-review-groups.js");
  run("audit-da-b1-report-gen.js");
  console.log("\n=== DONE ===\n");
  console.log("Report: reports/da-b1-full-audit.md");
  console.log("Index:  reports/da-b1-owner-review-README.md");
}

main();
