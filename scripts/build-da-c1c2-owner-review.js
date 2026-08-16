#!/usr/bin/env node
"use strict";
/**
 * DA-DE C1/C2 consolidated OWNER review table (READ-ONLY).
 * Reads real findings from da-c1-audit-data.json and da-c2-audit-data.json.
 * Usage: node scripts/build-da-c1c2-owner-review.js
 */
const fs = require("fs");
const path = require("path");
const { ROOT, loadArrayDataset } = require("./lib/audit-common");

const AUDIT_FILES = [
  { dataset: "C1", path: path.join(ROOT, "reports/temp/da-c1-audit-data.json"), level: "c1", dataPath: "data/da/c1.js" },
  { dataset: "C2", path: path.join(ROOT, "reports/temp/da-c2-audit-data.json"), level: "c2", dataPath: "data/da/c2.js" },
];
const OUT = path.join(ROOT, "reports/da-c1c2-all-findings-by-card.md");
const AUDITOR = "GPT-5.6 Luna";

function entryId(entry, index, level) {
  return entry.study?.id || `${level}-${entry.de}-${index}`;
}

function escapeCell(text) {
  return String(text ?? "")
    .replace(/\|/g, "\\|")
    .replace(/\n/g, " ")
    .trim();
}

function truncate(text, max = 120) {
  const s = String(text ?? "");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function cardSortKey(finding, cardOrder) {
  const idx = cardOrder.get(finding.cardId);
  if (idx != null) return idx;
  const m = String(finding.cardId).match(new RegExp(`^${finding.dataset?.toLowerCase() || "c[12]"}-(.+)-(\\d+)$`));
  if (m) return Number(m[2]);
  return 999999;
}

function fieldSortKey(field) {
  if (field === "lv") return "0";
  if (field.startsWith("study.sectionAccents")) return `2-${field}`;
  if (field.startsWith("study.")) return `1-${field}`;
  return `3-${field}`;
}

function loadRealFindings(auditPath, dataset, level, words) {
  if (!fs.existsSync(auditPath)) {
    throw new Error(`Missing audit JSON: ${auditPath}. Run audit-da-c1c2-collect.js first.`);
  }
  const data = JSON.parse(fs.readFileSync(auditPath, "utf8"));
  const cardOrder = new Map();
  words.forEach((entry, index) => {
    cardOrder.set(entryId(entry, index, level), index);
  });

  return (data.findings || [])
    .filter((f) => f.status !== "FALSE_POSITIVE")
    .map((f) => ({
      ...f,
      dataset,
      productionIndex: f.productionIndex ?? cardOrder.get(f.cardId) ?? null,
    }));
}

function main() {
  const allFindings = [];

  for (const cfg of AUDIT_FILES) {
    const words = loadArrayDataset(cfg.dataPath);
    const findings = loadRealFindings(cfg.path, cfg.dataset, cfg.level, words);
    allFindings.push(...findings);
  }

  allFindings.sort((a, b) => {
    const ds = a.dataset === b.dataset ? 0 : a.dataset === "C1" ? -1 : 1;
    if (ds !== 0) return ds;
    const idxA = a.productionIndex ?? cardSortKey(a, new Map());
    const idxB = b.productionIndex ?? cardSortKey(b, new Map());
    if (idxA !== idxB) return idxA - idxB;
    const cardCmp = String(a.cardId).localeCompare(String(b.cardId));
    if (cardCmp !== 0) return cardCmp;
    return fieldSortKey(a.field).localeCompare(fieldSortKey(b.field));
  });

  const bySeverity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of allFindings) {
    bySeverity[f.severity] = (bySeverity[f.severity] || 0) + 1;
  }

  const lines = [
    "# DA–DE C1/C2 — All Findings by Card",
    "",
    "READ-ONLY export for OWNER linguistic review.",
    "",
    `**Auditors:** ${AUDITOR} (READ-ONLY)`,
    `**Generated:** ${new Date().toISOString().slice(0, 10)}`,
    `**Source:** \`reports/temp/da-c1-audit-data.json\`, \`reports/temp/da-c2-audit-data.json\``,
    "",
    "## Summary",
    "",
    "| Metrika | Skaitlis |",
    "|---------|--------:|",
    `| C1 + C2 real findings | **${allFindings.length}** |`,
    `| CRITICAL | **${bySeverity.CRITICAL || 0}** |`,
    `| HIGH | **${bySeverity.HIGH || 0}** |`,
    `| MEDIUM | **${bySeverity.MEDIUM || 0}** |`,
    `| LOW | **${bySeverity.LOW || 0}** |`,
    "",
    "**Statusi:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW",
    "",
    "---",
    "",
    "| # | Dataset | Card ID | Field | CURRENT_DA | PROPOSED_DA | Severity | Statuss | OWNER_DECISION |",
    "|---|---------|---------|-------|------------|-------------|----------|---------|----------------|",
  ];

  allFindings.forEach((f, i) => {
    lines.push(
      `| ${i + 1} | ${f.dataset} | \`${escapeCell(f.cardId)}\` | \`${escapeCell(f.field)}\` | ${truncate(escapeCell(f.currentDa))} | ${truncate(escapeCell(f.proposedDa))} | **${f.severity}** | PENDING | |`
    );
  });

  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("**Production changes = 0**");
  lines.push("");
  lines.push("**DE changes = 0**");

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, lines.join("\n"));

  console.log(
    JSON.stringify(
      {
        output: OUT,
        total: allFindings.length,
        bySeverity,
        c1: allFindings.filter((f) => f.dataset === "C1").length,
        c2: allFindings.filter((f) => f.dataset === "C2").length,
      },
      null,
      2
    )
  );
}

main();
