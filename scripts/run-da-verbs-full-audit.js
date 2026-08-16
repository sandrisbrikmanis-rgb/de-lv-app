#!/usr/bin/env node
"use strict";
/**
 * DA-DE Verbs full audit orchestrator (READ-ONLY).
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
  console.log("\n=== DA–DE VERBS FULL AUDIT (READ-ONLY) — GPT-5.6 Luna ===\n");
  run("audit-da-verbs-collect.js");

  const lunaDir = path.join(ROOT, "reports/temp/da-verbs-luna");
  const lunaCount = fs.existsSync(lunaDir)
    ? fs.readdirSync(lunaDir).filter((f) => f.endsWith("-findings.json")).length
    : 0;
  const expected = Math.ceil(189 / 50);
  if (lunaCount < expected) {
    console.error(`\nWARNING: Only ${lunaCount}/${expected} Luna batch files in ${lunaDir}`);
    console.error("Run GPT-5.6 Luna linguistic audit on all verb batches before merge.\n");
  }

  run("audit-da-verbs-merge.js");
  run("audit-da-verbs-report-gen.js");
  run("build-da-verbs-all-findings-by-verb.js");

  const merged = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/da-verbs-merged-audit.json"), "utf8"));
  console.log("\n=== DONE ===\n");
  console.log("Reports:");
  console.log("  reports/da-verbs-full-audit.md");
  console.log("  reports/da-verbs-all-findings-by-verb.md");
  console.log("\nSummary:");
  console.log(JSON.stringify(merged.meta, null, 2));
  console.log("\nBy severity:");
  console.log(JSON.stringify(merged.bySeverity, null, 2));
}

main();
