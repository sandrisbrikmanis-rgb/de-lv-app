#!/usr/bin/env node
"use strict";
/**
 * ET–DE Kurss final closure (post-merge regression on main).
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT = path.join(ROOT, "reports/et-kurss-final-closure.md");
const REG_JSON = path.join(ROOT, "reports/temp/et-kurss-final-targeted-regression.json");
const RESOLVED = path.join(ROOT, "reports/temp/et-kurss-owner-resolved.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-kurss-owner-apply-log.json");
const MERGE_BASE = process.env.ET_KURSS_MAIN_BEFORE || "0cfef081";

function main() {
  const mainBefore = execSync(`git rev-parse ${MERGE_BASE}`, { cwd: ROOT, encoding: "utf8" }).trim();
  const kurssBlobBefore = execSync(`git rev-parse ${MERGE_BASE}:data/et/courseLessons.js`, {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  const uiBlobBefore = execSync(`git rev-parse ${MERGE_BASE}:languages/et/ui.js`, {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  const mergeCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();

  execSync("node scripts/audit-et-kurss-final-targeted-regression.js", { cwd: ROOT, stdio: "pipe" });

  const kurssBlobAfter = execSync("git hash-object data/et/courseLessons.js", { cwd: ROOT, encoding: "utf8" }).trim();
  const uiBlobAfter = execSync("git hash-object languages/et/ui.js", { cwd: ROOT, encoding: "utf8" }).trim();
  const reg = JSON.parse(fs.readFileSync(REG_JSON, "utf8"));
  const resolved = JSON.parse(fs.readFileSync(RESOLVED, "utf8"));
  const applyLog = fs.existsSync(APPLY_LOG) ? JSON.parse(fs.readFileSync(APPLY_LOG, "utf8")) : null;
  const meta = resolved.meta || {};

  const pass = reg.verdict === "ET_KURSS_FINAL_TARGETED_REGRESSION_PASS";
  const verdict = pass ? "ET_KURSS_FINAL_CLOSED_ON_MAIN" : "ET_KURSS_FINAL_CLOSURE_BLOCKED";

  const lines = [
    "# ET–DE Kurss — final closure",
    "",
    "**Standard:** MASTER v1.9 + REPAIR_APPLY_SAFETY_STANDARD",
    "**Audit PR:** #636 · **Repair PR:** #637",
    "**Authority:** `reports/et-kurss-owner-decisions-accepted.md`",
    "",
    `## FINAL VERDICT: **${verdict}**`,
    "",
    "## Git baseline",
    "",
    `| MAIN_BEFORE | \`${mainBefore}\` |`,
    `| MERGE_COMMIT | \`${mergeCommit}\` |`,
    `| MAIN_AFTER | \`${mergeCommit}\` |`,
    `| KURSS_PRODUCTION_BLOB (before) | \`${kurssBlobBefore}\` |`,
    `| KURSS_PRODUCTION_BLOB (after) | \`${kurssBlobAfter}\` |`,
    `| UI_PRODUCTION_BLOB (before) | \`${uiBlobBefore}\` |`,
    `| UI_PRODUCTION_BLOB (after) | \`${uiBlobAfter}\` |`,
    "",
    "## OWNER review",
    "",
    `| OWNER_RESOLVED | **${reg.ownerResolved}/323** |`,
    `| OWNER_BACKLOG_FINAL | **${reg.ownerBacklogFinal}** |`,
    `| LABOT retained | **${reg.labotRetained}/${reg.expectedLabot}** |`,
    `| NELABOT retained | **${reg.nelabotRetained}/${reg.expectedNelabot}** |`,
    `| FALSE_POSITIVE retained | **${reg.fpRetained}/${reg.expectedFp}** |`,
    `| PENDING | **${reg.pendingCount}** |`,
    `| NEEDS_SOURCE_REVIEW | **${reg.needsSourceReview}** |`,
  ];

  if (applyLog) {
    lines.push(
      "",
      "## Apply (PR #637)",
      "",
      `| APPLIED_VERIFIED | **${applyLog.appliedVerified}/310** |`,
      `| CURRENT_VALUE_MISMATCH | **${(applyLog.currentValueMismatch || []).length}** |`,
      `| OWNER_NEW_MISMATCH | **${(applyLog.ownerNewMismatch || []).length}** |`,
      `| MISSING_PATH | **${(applyLog.missingPath || []).length}** |`,
      `| UNEXPECTED_CHANGES | **${applyLog.unexpectedChanges || 0}** |`,
    );
  }

  lines.push(
    "",
    "## Regression",
    "",
    `| Verdict | **${reg.verdict}** |`,
    `| DE_CHANGES | **${reg.deChanges}** |`,
    `| UNEXPECTED_CHANGES | **${reg.unexpectedChanges}** |`,
    `| MIRROR | **${reg.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| SYNTAX | **${reg.syntaxPass ? "PASS" : "FAIL"}** |`,
    `| STRUCTURE | **${reg.structurePass ? "PASS" : "FAIL"}** |`,
    `| ID_ORDER | **${reg.idOrderPass ? "PASS" : "FAIL"}** |`,
    `| validate-kurss | **${reg.structurePass ? "PASS" : "FAIL"}** |`,
    "",
    `Resolved meta: LABOT=${meta.LABOT}, NELABOT=${meta.NELABOT}, FALSE_POSITIVE=${meta.FALSE_POSITIVE}`,
    "",
  );

  fs.writeFileSync(OUT, lines.join("\n"));
  console.log(JSON.stringify({ verdict, regression: reg.verdict, out: OUT }, null, 2));
  if (!pass) process.exit(1);
}

main();
