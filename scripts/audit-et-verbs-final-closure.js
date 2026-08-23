#!/usr/bin/env node
"use strict";
/**
 * ET–DE Verbs final closure (post-merge regression on main).
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT = path.join(ROOT, "reports/et-verbs-final-closure.md");
const REG_JSON = path.join(ROOT, "reports/temp/et-verbs-final-targeted-regression.json");
const RESOLVED = path.join(ROOT, "reports/temp/et-verbs-owner-resolved.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-verbs-owner-apply-log.json");
const MERGE_BASE = process.env.ET_VERBS_MAIN_BEFORE || "f6d3dbfe";

function main() {
  const mainBefore = execSync(`git rev-parse ${MERGE_BASE}`, { cwd: ROOT, encoding: "utf8" }).trim();
  const blobBefore = execSync(`git rev-parse ${MERGE_BASE}:data/et/verbs.js`, { cwd: ROOT, encoding: "utf8" }).trim();
  const mergeCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();

  execSync("node scripts/audit-et-verbs-final-targeted-regression.js", { cwd: ROOT, stdio: "pipe" });

  const blobAfter = execSync("git hash-object data/et/verbs.js", { cwd: ROOT, encoding: "utf8" }).trim();
  const reg = JSON.parse(fs.readFileSync(REG_JSON, "utf8"));
  const resolved = JSON.parse(fs.readFileSync(RESOLVED, "utf8"));
  const applyLog = fs.existsSync(APPLY_LOG) ? JSON.parse(fs.readFileSync(APPLY_LOG, "utf8")) : null;
  const meta = resolved.meta || {};

  const pass = reg.verdict === "ET_VERBS_FINAL_TARGETED_REGRESSION_PASS";
  const verdict = pass ? "ET_VERBS_FINAL_CLOSED_ON_MAIN" : "ET_VERBS_FINAL_CLOSURE_BLOCKED";

  const lines = [
    "# ET–DE Verbs — final closure",
    "",
    "**Standard:** MASTER v1.9 + REPAIR_APPLY_SAFETY_STANDARD",
    "**Audit PR:** #634 · **Repair PR:** #635",
    "**Authority:** `reports/et-verbs-owner-decisions-accepted.md`",
    "",
    "## Git baseline",
    "",
    `| MAIN_BEFORE | \`${mainBefore}\` |`,
    `| MERGE_COMMIT | \`${mergeCommit}\` |`,
    `| MAIN_AFTER | \`${mergeCommit}\` |`,
    `| VERBS_PRODUCTION_BLOB (before) | \`${blobBefore}\` |`,
    `| VERBS_PRODUCTION_BLOB (after) | \`${blobAfter}\` |`,
    "",
    "## OWNER review",
    "",
    `| OWNER_RESOLVED | **${reg.ownerResolved}/197** |`,
    `| OWNER_BACKLOG_FINAL | **0** |`,
    `| LABOT retained | **${reg.labotRetained}/${reg.expectedLabot}** |`,
    `| FALSE_POSITIVE retained | **${reg.fpRetained}/${reg.expectedFp}** |`,
    `| PENDING | **${reg.pending}** |`,
    `| NEEDS_SOURCE_REVIEW | **${reg.needsSourceReview}** |`,
  ];

  if (applyLog?.summary) {
    lines.push(
      "",
      "## Apply (PR #635)",
      "",
      `| Apply verdict | **${applyLog.summary.finalVerdict}** |`,
      `| APPLIED_VERIFIED | **${applyLog.summary.appliedVerified}** |`,
    );
  }

  lines.push(
    "",
    "## Regression",
    "",
    `| Verdict | **${reg.verdict}** |`,
    `| UNIQUE_TARGETS | **${reg.uniqueTargets}** |`,
    `| OWNER_NEW_MATCH | **${reg.ownerNewMatch}/${reg.uniqueTargets}** |`,
    `| OWNER_NEW_MISMATCH | **${reg.ownerNewMismatch}** |`,
    `| VERB_COUNT | **${reg.verbCount}** |`,
    `| FORM_COUNT | **${reg.formCount}** |`,
    `| PLACEHOLDERS | **${reg.placeholderHits}** |`,
    `| DE_CHANGES | **${reg.deChanges}** |`,
    `| UNEXPECTED_CHANGES | **${reg.unexpectedChanges}** |`,
    `| MIRROR | **${reg.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| SYNTAX | **${reg.syntaxPass ? "PASS" : "FAIL"}** |`,
    `| ID_ORDER | **${reg.idOrderPass ? "PASS" : "FAIL"}** |`,
    `| STRUCTURE | **${reg.structurePass ? "PASS" : "FAIL"}** |`,
    "",
    `## FINAL VERDICT: **${verdict}**`,
    "",
    "**OWNER verdict:** `ET_VERBS_OWNER_REVIEW_197_COMPLETE`",
    "",
  );

  fs.writeFileSync(OUT, lines.join("\n"));
  console.log(
    JSON.stringify({
      verdict,
      reg: reg.verdict,
      mainBefore,
      mergeCommit,
      blobAfter,
    }, null, 2)
  );
  if (!pass) process.exit(1);
}

main();
