#!/usr/bin/env node
"use strict";
/**
 * DA-DE Sätze/Teikumi full audit orchestrator (READ-ONLY).
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
  console.log("\n=== ET–DE SÄTZE / TEIKUMI FULL AUDIT (READ-ONLY) — GPT-5.6 Luna ===\n");
  run("audit-et-sentences-collect.js");

  const lunaDir = path.join(ROOT, "reports/temp/et-sentences-luna");
  const lunaCount = fs.existsSync(lunaDir)
    ? fs.readdirSync(lunaDir).filter((f) => f.endsWith("-findings.json")).length
    : 0;
  if (lunaCount < 16) {
    console.error(`\nWARNING: Only ${lunaCount}/16 Luna batch files found in ${lunaDir}`);
    console.error("Run Luna linguistic audit on all 16 batches before merge.\n");
  }

  run("audit-et-sentences-merge.js");
  run("audit-et-sentences-report-gen.js");
  runPostAuditOwnerReview("et-sentences-full");

  const merged = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/et-sentences-merged-audit.json"), "utf8")
  );
  console.log("\n=== DONE ===\n");
  console.log("Reports:");
  console.log("  reports/et-sentences-full-audit.md");
  console.log("\nSummary:");
  console.log(JSON.stringify(merged.meta, null, 2));
}

main();
