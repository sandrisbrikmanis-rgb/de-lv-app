#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const MERGED = path.join(ROOT, "reports/temp/et-verbs-merged-audit.json");
const OUT = path.join(ROOT, "reports/et-verbs-all-findings-by-verb.md");

function escapeCell(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function truncate(s, n) {
  const t = String(s || "");
  return t.length <= n ? t : t.slice(0, n - 3) + "...";
}

function main() {
  const data = JSON.parse(fs.readFileSync(MERGED, "utf8"));
  const { meta, findings } = data;

  const lines = [
    "# ET–DE Verbs — visi findingi pa verb (OWNER review)",
    "",
    "**Auditors:** GPT-5.6 Luna (READ-ONLY)",
    `**Scope:** ${meta.verbsTotal} verbs · ${meta.verbFormsTotal} forms · ${findings.length} findings`,
    "**DE = STRICT READ-ONLY.** PROPOSED_ET nav automātiski pieņemts.",
    "",
    "Sākotnēji visiem: **Statuss: PENDING**, **OWNER_DECISION:** tukšs.",
    "",
    "| # | Finding | Verb/Card ID | Field | DE_CURRENT | ET_CURRENT | PROPOSED_ET | Severity | Statuss | OWNER_DECISION |",
    "|--:|--------:|--------------|-------|------------|------------|-------------|----------|---------|----------------|",
  ];

  findings.forEach((f, i) => {
    lines.push(
      `| ${i + 1} | ${f.id} | \`${f.cardId}\` | \`${f.field}\` | ${truncate(escapeCell(f.deContext), 60)} | ${truncate(escapeCell(f.currentEt), 60)} | ${truncate(escapeCell(f.proposedEt), 60)} | ${f.severity} | PENDING | |`
    );
  });

  lines.push(
    "",
    "## Kopsavilkums",
    "",
    `- verbs total: **${meta.verbsTotal}**`,
    `- verbs audited: **${meta.lunaVerbsAudited}/${meta.verbsTotal}**`,
    `- verb forms total: **${meta.verbFormsTotal}**`,
    `- verb forms audited: **${meta.lunaFormsAudited}/${meta.verbFormsTotal}**`,
    `- findings: **${findings.length}**`,
    `- CRITICAL: **${data.bySeverity.CRITICAL || 0}**`,
    `- HIGH: **${data.bySeverity.HIGH || 0}**`,
    `- MEDIUM: **${data.bySeverity.MEDIUM || 0}**`,
    `- LOW: **${data.bySeverity.LOW || 0}**`,
    `- NEEDS_SOURCE_REVIEW: **${data.bySeverity.NEEDS_SOURCE_REVIEW || 0}**`
  );

  fs.writeFileSync(OUT, lines.join("\n"));
  console.log(JSON.stringify({ out: OUT, rows: findings.length }, null, 2));
}

main();
