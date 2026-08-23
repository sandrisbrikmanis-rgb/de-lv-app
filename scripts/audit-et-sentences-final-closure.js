#!/usr/bin/env node
"use strict";
/**
 * ET–DE Teikumi final closure report (post-apply + regression).
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT = path.join(ROOT, "reports/et-sentences-final-closure.md");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-sentences-owner-apply-log.json");
const REG_JSON = path.join(ROOT, "reports/temp/et-sentences-final-targeted-regression.json");
const RESOLVED = path.join(ROOT, "reports/temp/et-sentences-owner-resolved.json");
const MERGE_BASE = "551b3e52";

function main() {
  const mainBefore = execSync(`git rev-parse ${MERGE_BASE}`, { cwd: ROOT, encoding: "utf8" }).trim();
  const blobBefore = execSync(`git rev-parse ${MERGE_BASE}:data/et/sentences.js`, { cwd: ROOT, encoding: "utf8" }).trim();

  execSync("node scripts/audit-et-sentences-final-targeted-regression.js", { cwd: ROOT, stdio: "pipe" });

  const blobAfter = execSync("git hash-object data/et/sentences.js", { cwd: ROOT, encoding: "utf8" }).trim();
  const applyLog = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
  const reg = JSON.parse(fs.readFileSync(REG_JSON, "utf8"));
  const resolved = JSON.parse(fs.readFileSync(RESOLVED, "utf8"));

  const pass = reg.verdict === "ET_SENTENCES_FINAL_TARGETED_REGRESSION_PASS";
  const verdict = pass ? "ET_SENTENCES_FINAL_CLOSED_ON_MAIN" : "ET_SENTENCES_FINAL_CLOSURE_BLOCKED";

  const lines = [
    "# ET–DE Teikumi — final closure",
    "",
    "**Standard:** MASTER v1.9",
    "",
    "## Baseline",
    "",
    `| MAIN_BEFORE | \`${mainBefore}\` |`,
    `| TEIKUMI_PRODUCTION_BLOB (before) | \`${blobBefore}\` |`,
    `| TEIKUMI_PRODUCTION_BLOB (after) | \`${blobAfter}\` |`,
    "",
    "## OWNER review",
    "",
    `| Total findings | **${resolved.meta.totalFindings}** |`,
    `| LABOT | **${resolved.meta.LABOT}** |`,
    `| NELABOT | **${resolved.meta.NELABOT}** |`,
    `| FALSE_POSITIVE | **${resolved.meta.FALSE_POSITIVE}** |`,
    `| NEEDS_SOURCE_REVIEW | **${resolved.meta.NEEDS_SOURCE_REVIEW}** |`,
    `| PENDING | **${resolved.meta.PENDING}** |`,
    "",
    "## Apply",
    "",
    `| REQUESTED_LABOT | **${applyLog.summary?.requestedLabot}** |`,
    `| APPLIED_VERIFIED | **${applyLog.summary?.appliedVerified}** |`,
    `| Apply verdict | **${applyLog.summary?.finalVerdict}** |`,
    "",
    "## Regression",
    "",
    `| Verdict | **${reg.verdict}** |`,
    `| DE_CHANGES | **${reg.deChanges}** |`,
    `| UNEXPECTED_CHANGES | **${reg.unexpectedChanges}** |`,
    "",
    `## FINAL VERDICT: **${verdict}**`,
    "",
  ];
  fs.writeFileSync(OUT, lines.join("\n"));
  console.log(JSON.stringify({ verdict, reg: reg.verdict, apply: applyLog.summary?.finalVerdict, blobAfter }, null, 2));
  if (!pass) process.exit(1);
}

main();
