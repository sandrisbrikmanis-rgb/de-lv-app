#!/usr/bin/env node
"use strict";
/**
 * Build consolidated OWNER review file for DA-DE Saetze audit.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const MERGED = path.join(ROOT, "reports/temp/da-sentences-merged-audit.json");
const OUT = path.join(ROOT, "reports/da-sentences-all-findings-by-sentence.md");

function escapeCell(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function truncate(s, n) {
  const t = String(s || "");
  if (t.length <= n) return t;
  return t.slice(0, n - 3) + "...";
}

function main() {
  const data = JSON.parse(fs.readFileSync(MERGED, "utf8"));
  const meta = data.meta;
  const findings = data.findings;

  const lines = [
    "# DA–DE Sätze — visi findingi pa teikumu (OWNER review)",
    "",
    "**Auditors:** GPT-5.6 Luna (READ-ONLY)",
    "**Scope:** " + meta.sentencesTotal + " sentences, " + findings.length + " validated findings",
    "**DE = STRICT READ-ONLY.** PROPOSED_DA nav automātiski pieņemts.",
    "",
    "Sākotnēji visiem: **Statuss: PENDING**, **OWNER_DECISION:** tukšs.",
    "",
    "| # | Finding | Sentence/Card ID | DE_CURRENT | DA_CURRENT | PROPOSED_DA | Severity | Statuss | OWNER_DECISION |",
    "|--:|--------:|------------------|------------|------------|-------------|----------|---------|----------------|",
  ];

  findings.forEach(function (f, i) {
    const row =
      "| " +
      (i + 1) +
      " | " +
      f.id +
      " | `" +
      f.cardId +
      "` | " +
      truncate(escapeCell(f.deContext)) +
      " | " +
      truncate(escapeCell(f.currentDa)) +
      " | " +
      truncate(escapeCell(f.proposedDa)) +
      " | " +
      f.severity +
      " | PENDING | |";
    lines.push(row);
  });

  lines.push("");
  lines.push("## Kopsavilkums");
  lines.push("");
  lines.push("- sentences total: **" + meta.sentencesTotal + "**");
  lines.push("- sentences audited: **" + meta.lunaSentencesAudited + "**");
  lines.push("- findings: **" + findings.length + "**");
  lines.push("- CRITICAL: **" + (data.bySeverity.CRITICAL || 0) + "**");
  lines.push("- HIGH: **" + (data.bySeverity.HIGH || 0) + "**");
  lines.push("- MEDIUM: **" + (data.bySeverity.MEDIUM || 0) + "**");
  lines.push("- LOW: **" + (data.bySeverity.LOW || 0) + "**");

  fs.writeFileSync(OUT, lines.join("\n"));
  console.log(JSON.stringify({ out: OUT, rows: findings.length }, null, 2));
}

main();
