#!/usr/bin/env node
"use strict";
/**
 * DA-DE Sätze/Teikumi full audit orchestrator (READ-ONLY).
 * Usage: node scripts/run-da-sentences-full-audit.js
 */
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

function run(script) {
  console.log(`\n=== ${script} ===\n`);
  execSync(`node scripts/${script}`, { cwd: ROOT, stdio: "inherit" });
}

function main() {
  console.log("\n=== DA–DE SÄTZE FULL AUDIT (READ-ONLY) — GPT-5.6 Luna ===\n");
  run("audit-da-sentences-collect.js");

  const lunaDir = path.join(ROOT, "reports/temp/da-sentences-luna");
  const lunaCount = fs.existsSync(lunaDir)
    ? fs.readdirSync(lunaDir).filter((f) => f.endsWith("-findings.json")).length
    : 0;
  if (lunaCount < 16) {
    console.error(`\nWARNING: Only ${lunaCount}/16 Luna batch files found in ${lunaDir}`);
    console.error("Run Luna linguistic audit on all 16 batches before merge.\n");
  }

  run("audit-da-sentences-merge.js");
  run("audit-da-sentences-report-gen.js");
  run("build-da-sentences-all-findings-by-sentence.js");

  const merged = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/da-sentences-merged-audit.json"), "utf8")
  );
  console.log("\n=== DONE ===\n");
  console.log("Reports:");
  console.log("  reports/da-sentences-full-audit.md");
  console.log("  reports/da-sentences-all-findings-by-sentence.md");
  console.log("\nSummary:");
  console.log(JSON.stringify(merged.meta, null, 2));
  console.log("\nBy severity:");
  console.log(JSON.stringify(merged.bySeverity, null, 2));
}

main();
