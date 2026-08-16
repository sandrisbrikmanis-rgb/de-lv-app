#!/usr/bin/env node
"use strict";
/**
 * Parse all rows from da-sentences-owner-decisions-signed.md
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");

const SIGNED = path.join(ROOT, "reports/da-sentences-owner-decisions-signed.md");
const STATUS = "(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)";

const PIPE_ROW = new RegExp(
  `^\\|\\s*(\\d+)\\s*\\|\\s*(DA-SENT-\\d+)\\s*\\|\\s*\`([^\`]+)\`\\s*\\|\\s*([^|]*)\\|\\s*([^|]*)\\|\\s*([^|]*)\\|\\s*(?:CRITICAL|HIGH|MEDIUM|LOW)\\s*\\|\\s*${STATUS}\\s*\\|\\s*(.*?)\\s*\\|\\s*$`
);

function normalizeText(text) {
  return String(text || "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^`|`$/g, "");
}

function parseSignedDecisions(filePath = SIGNED) {
  const md = fs.readFileSync(filePath, "utf8");
  const rows = [];
  for (const line of md.split("\n")) {
    const m = line.match(PIPE_ROW);
    if (!m) continue;
    rows.push({
      num: Number(m[1]),
      auditId: m[2].trim(),
      cardId: m[3].trim(),
      deContext: normalizeText(m[4]),
      currentDa: normalizeText(m[5]),
      ownerNew: normalizeText(m[6]),
      status: m[7],
      ownerDecision: normalizeText(m[8]),
      field: "lv",
    });
  }
  return rows;
}

function dedupeLabot(rows) {
  const byKey = new Map();
  for (const row of rows) {
    if (row.status !== "LABOT") continue;
    const ownerNew = normalizeText(row.ownerDecision || row.ownerNew);
    if (!ownerNew || ownerNew === "—" || ownerNew === "-") continue;
    byKey.set(`${row.cardId}|lv`, {
      ...row,
      ownerNew,
    });
  }
  return [...byKey.values()].sort((a, b) => a.num - b.num);
}

function countByStatus(rows) {
  const counts = { LABOT: 0, NELABOT: 0, NEEDS_SOURCE_REVIEW: 0, FALSE_POSITIVE: 0 };
  for (const row of rows) counts[row.status] = (counts[row.status] || 0) + 1;
  return counts;
}

function uniqueByCard(rows, status) {
  const set = new Set();
  for (const row of rows) {
    if (row.status !== status) continue;
    set.add(row.cardId);
  }
  return [...set];
}

module.exports = {
  SIGNED,
  parseSignedDecisions,
  dedupeLabot,
  countByStatus,
  uniqueByCard,
  normalizeText,
};
