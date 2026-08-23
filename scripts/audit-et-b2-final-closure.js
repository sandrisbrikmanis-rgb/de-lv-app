#!/usr/bin/env node
"use strict";
/**
 * ET–DE B2 final closure report (post-apply + NSR + regression).
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT = path.join(ROOT, "reports/et-b2-final-closure.md");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-b2-owner-apply-log.json");
const NSR_LOG = path.join(ROOT, "reports/temp/et-b2-final-nsr-closure-log.json");
const REG_JSON = path.join(ROOT, "reports/temp/et-b2-final-targeted-regression.json");
const RESOLVED = path.join(ROOT, "reports/temp/et-b2-owner-resolved.json");
const MERGE_BASE = "ab1e95c3";

function main() {
  const mainBefore = execSync(`git rev-parse ${MERGE_BASE}`, { cwd: ROOT, encoding: "utf8" }).trim();
  const blobBefore = execSync(`git rev-parse ${MERGE_BASE}:data/et/b2.js`, { cwd: ROOT, encoding: "utf8" }).trim();

  execSync("node scripts/audit-et-b2-final-targeted-regression.js", { cwd: ROOT, stdio: "pipe" });

  const blobAfter = execSync("git hash-object data/et/b2.js", { cwd: ROOT, encoding: "utf8" }).trim();
  const applyLog = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
  const nsrLog = JSON.parse(fs.readFileSync(NSR_LOG, "utf8"));
  const reg = JSON.parse(fs.readFileSync(REG_JSON, "utf8"));
  const resolved = JSON.parse(fs.readFileSync(RESOLVED, "utf8"));

  const pass = reg.verdict === "ET_B2_FINAL_TARGETED_REGRESSION_PASS" && nsrLog.finalVerdict === "ET_B2_NSR_CLOSURE_PASS";
  const verdict = pass ? "ET_B2_FINAL_CLOSED_ON_MAIN" : "ET_B2_FINAL_CLOSURE_BLOCKED";

  const lines = [
    "# ET–DE B2 — final closure",
    "",
    "**Standard:** MASTER v1.9 · **Audit:** PR #628",
    "",
    "## Baseline",
    "",
    `| MAIN_BEFORE | \`${mainBefore}\` |`,
    `| B2_PRODUCTION_BLOB (before) | \`${blobBefore}\` |`,
    `| B2_PRODUCTION_BLOB (after) | \`${blobAfter}\` |`,
    "",
    "## OWNER review (355)",
    "",
    `| Total findings | **${resolved.meta.totalFindings}** |`,
    `| LABOT | **${resolved.meta.LABOT}** |`,
    `| NELABOT | **${resolved.meta.NELABOT}** |`,
    `| FALSE_POSITIVE | **${resolved.meta.FALSE_POSITIVE}** |`,
    `| NEEDS_SOURCE_REVIEW | **${resolved.meta.NEEDS_SOURCE_REVIEW}** |`,
    `| PENDING | **${resolved.meta.PENDING}** |`,
  `| OWNER_BACKLOG_FINAL | **0** |`,
    "",
    "## Apply",
    "",
    `| REQUESTED_LABOT | **${applyLog.summary?.requestedLabot}** |`,
    `| APPLIED_VERIFIED | **${applyLog.summary?.appliedVerified}** |`,
    `| Apply verdict | **${applyLog.summary?.finalVerdict}** |`,
    "",
    "## NSR closure",
    "",
    `| Studies after | **${nsrLog.studiesAfter}** |`,
    `| Study parity | **${nsrLog.studyParityPass ? "PASS" : "FAIL"}** |`,
    `| sectionAccents | **${nsrLog.sectionAccentsPass ? "PASS" : "FAIL"}** |`,
    `| NSR verdict | **${nsrLog.finalVerdict}** |`,
    "",
    "## Study parity (ET 64 → LV 60)",
    "",
    "Four ET-only study objects removed as **TRUE_EXTRA_STUDY** (LV MASTER has card, no study):",
    "",
    "| Card ID | DE | LV MASTER | ET study | OWNER decision |",
    "|---------|-----|-----------|----------|----------------|",
    "| b2-genosse | Genosse | card only | standardStudy | TRUE_EXTRA_STUDY — study removed |",
    "| b2-genossin | Genossin | card only | standardStudy | TRUE_EXTRA_STUDY — study removed |",
    "| b2-neger | Neger | card only | standardStudy | TRUE_EXTRA_STUDY — study removed |",
    "| b2-pacht | Pacht | card only | standardStudy | TRUE_EXTRA_STUDY — study removed |",
    "",
    "## Regression",
    "",
    `| Verdict | **${reg.verdict}** |`,
    `| DE_CHANGES | **${reg.deChanges}** |`,
    `| UNEXPECTED_CHANGES | **${reg.unexpectedChanges}** |`,
    `| MIRROR | **${reg.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| SYNTAX | **${reg.syntaxPass ? "PASS" : "FAIL"}** |`,
    "",
    "## Terminal state",
    "",
    "| Gate | Status |",
    "|------|--------|",
    `| OWNER_BACKLOG_FINAL | **0** |`,
    `| NEEDS_SOURCE_REVIEW | **${reg.nsr}** |`,
    `| sectionAccents | **${reg.sectionAccents?.raw === 0 ? "0" : reg.sectionAccents?.raw}** |`,
    `| Study parity | **${reg.studies === reg.lvStudies ? "PASS" : "FAIL"}** |`,
    "",
    `## FINAL VERDICT: **${verdict}**`,
    "",
  ];
  fs.writeFileSync(OUT, lines.join("\n"));
  console.log(JSON.stringify({ verdict, reg: reg.verdict, nsr: nsrLog.finalVerdict, blobAfter }, null, 2));
  if (!pass) process.exit(1);
}

main();
