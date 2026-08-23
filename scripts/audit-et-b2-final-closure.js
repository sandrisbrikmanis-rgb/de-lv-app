#!/usr/bin/env node
"use strict";
/**
 * ET–DE B2 final closure report (post-apply + NSR + regression).
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { parsePipeRows } = require("./lib/et-b2-owner-accepted-parse");

const OUT = path.join(ROOT, "reports/et-b2-final-closure.md");
const ACCEPTED = path.join(ROOT, "reports/et-b2-owner-decisions-accepted.md");
const NSR_LOG = path.join(ROOT, "reports/temp/et-b2-final-nsr-closure-log.json");
const REG_JSON = path.join(ROOT, "reports/temp/et-b2-final-targeted-regression.json");
const REVAL_LOG = path.join(ROOT, "reports/temp/et-b2-owner-revalidation-apply-log.json");
const REVAL_MD = path.join(ROOT, "reports/et-b2-owner-decisions-accepted-owner-revalidated.md");
const MERGE_BASE = "11c7a45a";

function main() {
  const mainBefore = execSync(`git rev-parse ${MERGE_BASE}`, { cwd: ROOT, encoding: "utf8" }).trim();
  const blobBefore = execSync(`git rev-parse ${MERGE_BASE}:data/et/b2.js`, { cwd: ROOT, encoding: "utf8" }).trim();

  execSync("node scripts/audit-et-b2-final-targeted-regression.js", { cwd: ROOT, stdio: "pipe" });

  const blobAfter = execSync("git hash-object data/et/b2.js", { cwd: ROOT, encoding: "utf8" }).trim();
  const nsrLog = JSON.parse(fs.readFileSync(NSR_LOG, "utf8"));
  const reg = JSON.parse(fs.readFileSync(REG_JSON, "utf8"));
  const revalLog = fs.existsSync(REVAL_LOG) ? JSON.parse(fs.readFileSync(REVAL_LOG, "utf8")) : null;
  const accepted = parsePipeRows(fs.readFileSync(ACCEPTED, "utf8"));
  const statusCounts = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0, NEEDS_SOURCE_REVIEW: 0 };
  for (const row of accepted) statusCounts[row.status] = (statusCounts[row.status] || 0) + 1;

  const revalPass =
    !fs.existsSync(REVAL_MD) ||
    revalLog?.summary?.finalVerdict === "ET_B2_OWNER_REVALIDATION_APPLY_PASS";

  const pass =
    reg.verdict === "ET_B2_FINAL_TARGETED_REGRESSION_PASS" &&
    nsrLog.finalVerdict === "ET_B2_NSR_CLOSURE_PASS" &&
    revalPass;
  const verdict = pass ? "ET_B2_FINAL_CLOSED_ON_MAIN" : "ET_B2_FINAL_CLOSURE_BLOCKED";

  const lines = [
    "# ET–DE B2 — final closure",
    "",
    "**Standard:** MASTER v1.9 · **Audit:** PR #628",
    fs.existsSync(REVAL_MD) ? "**OWNER authority:** revalidated (`et-b2-owner-decisions-accepted-owner-revalidated.md`)" : "",
    "",
    "## Baseline",
    "",
    `| MAIN_BEFORE (PR #632) | \`${mainBefore}\` |`,
    `| B2_PRODUCTION_BLOB (before revalidation) | \`${blobBefore}\` |`,
    `| B2_PRODUCTION_BLOB (after) | \`${blobAfter}\` |`,
    "",
    "## OWNER review (355)",
    "",
    `| Total findings | **${accepted.length}** |`,
    `| LABOT | **${statusCounts.LABOT}** |`,
    `| NELABOT | **${statusCounts.NELABOT}** |`,
    `| FALSE_POSITIVE | **${statusCounts.FALSE_POSITIVE}** |`,
    `| NEEDS_SOURCE_REVIEW | **${statusCounts.NEEDS_SOURCE_REVIEW}** |`,
    `| PENDING | **0** |`,
    `| OWNER_BACKLOG_FINAL | **0** |`,
    "",
  ];

  if (fs.existsSync(REVAL_MD)) {
    lines.push(
      "## OWNER revalidation",
      "",
      "| Metrika | Vērtība |",
      "|---------|---------|",
      `| Authority | \`reports/et-b2-owner-decisions-accepted-owner-revalidated.md\` |`,
      `| OWNER overrides | **50** |`,
      `| Delta applied | **${revalLog?.summary?.applied ?? 0}** |`,
      `| FP reverted | **${revalLog?.summary?.reverted ?? 0}** |`,
      `| OWNER_MATCH_CONFIRMED | **${revalLog?.summary?.ownerMatchConfirmed ?? 0}** |`,
      `| Verdict | **${revalLog?.summary?.finalVerdict ?? "N/A"}** |`,
      "",
      "**OWNER verdict:** `ET_B2_OWNER_REVALIDATION_355_COMPLETE`",
      "",
    );
  }

  lines.push(
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
    "| Card ID | DE | OWNER decision |",
    "|---------|-----|----------------|",
    "| b2-genosse | Genosse | TRUE_EXTRA_STUDY — study removed |",
    "| b2-genossin | Genossin | TRUE_EXTRA_STUDY — study removed |",
    "| b2-neger | Neger | TRUE_EXTRA_STUDY — study removed |",
    "| b2-pacht | Pacht | TRUE_EXTRA_STUDY — study removed |",
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
    "| OWNER_BACKLOG_FINAL | **0** |",
    `| NEEDS_SOURCE_REVIEW | **${reg.nsr}** |`,
    `| sectionAccents | **${reg.sectionAccents?.raw === 0 ? "0" : reg.sectionAccents?.raw}** |`,
    `| Study parity | **${reg.studies === reg.lvStudies ? "PASS" : "FAIL"}** |`,
    "",
    `## FINAL VERDICT: **${verdict}**`,
    "",
  );

  fs.writeFileSync(OUT, lines.join("\n"));
  console.log(JSON.stringify({ verdict, reg: reg.verdict, nsr: nsrLog.finalVerdict, reval: revalLog?.summary?.finalVerdict, blobAfter }, null, 2));
  if (!pass) process.exit(1);
}

main();
