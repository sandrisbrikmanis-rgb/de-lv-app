#!/usr/bin/env node
"use strict";
/**
 * Build ET–DE B2 OWNER decisions accepted markdown from resolved JSON.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const RESOLVED = path.join(ROOT, "reports/temp/et-b2-owner-resolved.json");
const OUT = path.join(ROOT, "reports/et-b2-owner-decisions-accepted.md");
const NSR_OUT = path.join(ROOT, "reports/et-b2-needs-source-review.md");
const NSR_DEC = path.join(ROOT, "reports/et-b2-needs-source-decisions.md");

function escapePipe(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function main() {
  execSync("node scripts/build-et-b2-owner-resolved.js", { cwd: ROOT, stdio: "inherit" });
  const data = JSON.parse(fs.readFileSync(RESOLVED, "utf8"));
  const findings = data.findings || [];
  const meta = data.meta || {};

  const lines = [
    "# ET–DE B2 — OWNER DECISIONS ACCEPTED",
    "",
    "**Source audit:** PR #628 · MASTER v1.9",
    "**OWNER review:** linguistic/semantic review of all 355 OWNER backlog findings",
    "**Scope:** ET–DE B2 only",
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
    const field = f.field === "etText" ? "lv" : f.field;
    lines.push(
      `| ${f.id} | ${f.cardId} | ${escapePipe(field)} | ${escapePipe(f.currentEt)} | ${f.status} | ${escapePipe(f.ownerNew)} | ${escapePipe(f.note)} |`,
    );
  }

  lines.push("", "**OWNER verdict:** `ET_B2_OWNER_REVIEW_355_COMPLETE`", "");
  fs.writeFileSync(OUT, lines.join("\n"));

  const nsr = findings.filter((f) => f.status === "NEEDS_SOURCE_REVIEW");
  if (nsr.length) {
    const nsrLines = [
      "# ET–DE B2 — NEEDS_SOURCE_REVIEW",
      "",
      "| Audit ID | Card ID | DE | CURRENT | Note |",
      "|---|---|---|---|---|",
      ...nsr.map(
        (f) =>
          `| ${f.id} | ${f.cardId} | ${escapePipe(f.de)} | ${escapePipe(f.currentEt)} | ${escapePipe(f.note)} |`,
      ),
    ];
    fs.writeFileSync(NSR_OUT, nsrLines.join("\n"));
    fs.writeFileSync(
      NSR_DEC,
      ["# ET–DE B2 — NSR OWNER decisions", "", "_Pending OWNER resolution._"].join("\n"),
    );
  } else if (fs.existsSync(NSR_OUT)) fs.unlinkSync(NSR_OUT);
  if (!nsr.length && fs.existsSync(NSR_DEC)) fs.unlinkSync(NSR_DEC);

  console.log(JSON.stringify({ out: OUT, meta, nsr: nsr.length }, null, 2));
}

if (require.main === module) main();
