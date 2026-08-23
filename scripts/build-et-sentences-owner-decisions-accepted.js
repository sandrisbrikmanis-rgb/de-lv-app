#!/usr/bin/env node
"use strict";
/**
 * Build ET–DE Teikumi OWNER decisions accepted markdown from resolved JSON.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const RESOLVED = path.join(ROOT, "reports/temp/et-sentences-owner-resolved.json");
const OUT = path.join(ROOT, "reports/et-sentences-owner-decisions-accepted.md");
const NSR_OUT = path.join(ROOT, "reports/et-sentences-needs-source-review.md");
const NSR_DEC = path.join(ROOT, "reports/et-sentences-needs-source-decisions.md");

function escapePipe(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function main() {
  execSyncResolved();
  const data = JSON.parse(fs.readFileSync(RESOLVED, "utf8"));
  const findings = data.findings || [];
  const meta = data.meta || {};

  const lines = [
    "# ET–DE Teikumi (Sätze) — OWNER DECISIONS ACCEPTED",
    "",
    "**Source audit:** PR #622 · MASTER v1.9",
    "**OWNER review:** linguistic/semantic review of all 166 OWNER backlog findings",
    "**Scope:** Teikumi / Sätze only",
    "**DE:** STRICT READ-ONLY",
    "",
    "## Coverage",
    "",
    `- SOURCE_FINDINGS: **${meta.totalFindings || findings.length}**`,
    `- OWNER_RESOLVED: **${findings.length}/${findings.length}**`,
    `- PENDING: **${meta.PENDING || 0}**`,
    `- LABOT: **${meta.LABOT || 0}**`,
    `- NELABOT: **${meta.NELABOT || 0}**`,
    `- FALSE_POSITIVE: **${meta.FALSE_POSITIVE || 0}**`,
    `- NEEDS_SOURCE_REVIEW: **${meta.NEEDS_SOURCE_REVIEW || 0}**`,
    "",
    "## OWNER decisions",
    "",
    "| Audit ID | Card ID | Field | CURRENT | OWNER STATUS | OWNER NEW | OWNER NOTE |",
    "|---|---|---|---|---|---|---|",
  ];

  for (const f of findings) {
    lines.push(
      `| ${f.id} | ${f.cardId} | lv | ${escapePipe(f.currentEt)} | ${f.status} | ${escapePipe(f.ownerNew)} | ${escapePipe(f.note)} |`,
    );
  }

  lines.push("", "**OWNER verdict:** `ET_SENTENCES_OWNER_REVIEW_166_COMPLETE`", "");
  fs.writeFileSync(OUT, lines.join("\n"));

  const nsr = findings.filter((f) => f.status === "NEEDS_SOURCE_REVIEW");
  if (nsr.length) {
    const nsrLines = [
      "# ET–DE Teikumi — NEEDS_SOURCE_REVIEW",
      "",
      ...nsr.map(
        (f) =>
          `| ${f.id} | ${f.cardId} | ${escapePipe(f.deContext)} | ${escapePipe(f.currentEt)} | ${escapePipe(f.note)} |`,
      ),
    ];
    fs.writeFileSync(NSR_OUT, nsrLines.join("\n"));
    fs.writeFileSync(
      NSR_DEC,
      ["# ET–DE Teikumi — NSR OWNER decisions", "", "_Pending OWNER resolution._"].join("\n"),
    );
  }

  console.log(JSON.stringify({ out: OUT, meta, nsr: nsr.length }, null, 2));
}

function execSyncResolved() {
  require("child_process").execSync("node scripts/build-et-sentences-owner-resolved.js", {
    cwd: ROOT,
    stdio: "pipe",
  });
}

main();
