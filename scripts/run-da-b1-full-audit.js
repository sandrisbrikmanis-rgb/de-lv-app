#!/usr/bin/env node
"use strict";
/**
 * DA–DE B1 full audit orchestrator (READ-ONLY).
 * Auto-generates OWNER review + GitHub index after audit.
 */
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { runPostAuditOwnerReview } = require("./lib/audit-post-run");

function run(script) {
  console.log(`\n=== ${script} ===\n`);
  execSync(`node scripts/${script}`, { cwd: ROOT, stdio: "inherit" });
}

function main() {
  console.log("\n=== DA–DE B1 FULL AUDIT (READ-ONLY) ===\n");
  run("audit-da-b1-collect.js");
  run("audit-da-b1-report-gen.js");
  runPostAuditOwnerReview("b1-full");
  console.log("\n=== DONE ===\n");
  console.log("Report: reports/da-b1-full-audit.md");
}

main();
