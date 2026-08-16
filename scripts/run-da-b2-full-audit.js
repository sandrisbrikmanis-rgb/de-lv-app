#!/usr/bin/env node
"use strict";
/**
 * DA–DE B2 full audit orchestrator (READ-ONLY).
 * Usage: node scripts/run-da-b2-full-audit.js
 */
const { execSync } = require("child_process");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

function run(script) {
  console.log(`\n=== ${script} ===\n`);
  execSync(`node scripts/${script}`, { cwd: ROOT, stdio: "inherit" });
}

function main() {
  console.log("\n=== DA–DE B2 FULL AUDIT (READ-ONLY) — GPT-5.6 Luna ===\n");
  run("audit-da-b2-collect.js");
  run("build-da-b2-owner-review-groups.js");
  run("audit-da-b2-report-gen.js");
  run("build-da-b2-github-index.js");
  console.log("\n=== DONE ===\n");
  console.log("Report: reports/da-b2-full-audit.md");
  console.log("Index:  reports/da-b2-owner-review-README.md");
}

main();
