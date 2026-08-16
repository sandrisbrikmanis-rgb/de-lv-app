#!/usr/bin/env node
"use strict";
/**
 * DA–DE C1/C2 full audit orchestrator (READ-ONLY).
 * Auto-generates OWNER review + GitHub index after audit.
 */
const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");
const { ROOT } = require("./lib/audit-common");
const { runPostAuditOwnerReview } = require("./lib/audit-post-run");

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
    summary[key] = JSON.parse(fs.readFileSync(p, "utf8")).summary;
  }
  return summary;
}

function main() {
  const levelArg = parseLevelArg();
  console.log("\n=== DA–DE C1/C2 FULL AUDIT (READ-ONLY) — GPT-5.6 Luna ===\n");
  run("audit-da-c1c2-collect.js", levelArg);
  run("audit-da-c1c2-report-gen.js");
  runPostAuditOwnerReview("c1c2-full");
  console.log("\n=== DONE ===\n");
  console.log("Finding counts:");
  console.log(JSON.stringify(summarize(), null, 2));
}

main();
