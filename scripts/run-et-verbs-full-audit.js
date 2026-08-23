#!/usr/bin/env node
"use strict";
/**
 * ET–DE Verbs full audit orchestrator (READ-ONLY).
 * Auto-generates OWNER review + GitHub index after audit.
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { runPostAuditOwnerReview } = require("./lib/audit-post-run");

function run(script) {
  console.log(`\n=== ${script} ===\n`);
  execSync(`node scripts/${script}`, { cwd: ROOT, stdio: "inherit" });
}

function main() {
  console.log("\n=== ET–DE VERBS FULL AUDIT (READ-ONLY) — GPT-5.6 Luna ===\n");
  run("audit-et-verbs-collect.js");

  const lunaDir = path.join(ROOT, "reports/temp/et-verbs-luna");
  const expected = Math.ceil(189 / 50);
  const lunaCount = fs.existsSync(lunaDir)
    ? fs.readdirSync(lunaDir).filter((f) => f.endsWith("-findings.json")).length
    : 0;

  if (lunaCount < expected) {
    console.log(`\n=== Luna linguistic audit (${lunaCount}/${expected} batches) ===\n`);
    run("audit-et-verbs-linguistic.js");
  }

  run("audit-et-verbs-merge.js");
  run("audit-et-verbs-report-gen.js");
  run("build-et-verbs-all-findings-by-verb.js");
  runPostAuditOwnerReview("et-verbs-full");

  const merged = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/et-verbs-merged-audit.json"), "utf8"));
  console.log("\n=== DONE ===\n");
  console.log("Reports:");
  console.log("  reports/et-verbs-full-audit.md");
  console.log("  reports/et-verbs-all-findings-by-verb.md");
  console.log("\nSummary:");
  console.log(JSON.stringify(merged.meta, null, 2));
  console.log("\nBy severity:");
  console.log(JSON.stringify(merged.bySeverity, null, 2));
}

main();
