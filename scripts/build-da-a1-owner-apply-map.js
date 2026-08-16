#!/usr/bin/env node
"use strict";
/**
 * Parse OWNER decision markdown tables → apply map JSON.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const GROUP_FILES = [
  "reports/da-a1-owner-decisions-group01-findings-12-61_2e54.md",
  "reports/da-a1-owner-decisions-group02-findings-62-111_4981.md",
  "reports/da-a1-owner-decisions-group03-findings-112-143_386d.md",
];
const OUT = path.join(ROOT, "reports/temp/da-a1-owner-apply-map.json");

const ROW_START = /^\s*(\d+)\s+`([^`]+)`\s+`([^`]+)`\s+\*\*(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)\*\*\s+(.*)$/;

function normalizeDecision(text) {
  return text.replace(/\s+/g, " ").trim();
}

function parseGroupFile(filePath) {
  const md = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  const lines = md.split("\n");
  const rows = [];
  let current = null;

  for (const line of lines) {
    const m = line.match(ROW_START);
    if (m) {
      if (current) rows.push(current);
      current = {
        finding: Number(m[1]),
        cardId: m[2],
        field: m[3],
        status: m[4],
        ownerNew: normalizeDecision(m[5]),
        source: path.basename(filePath),
      };
      continue;
    }
    if (current && line.trim() && !line.startsWith("---") && !line.startsWith("## ") && !line.startsWith("|") && !line.startsWith("- **")) {
      if (/^\s{10,}/.test(line) && !/^[-=]{10,}/.test(line.trim())) {
        current.ownerNew = normalizeDecision(`${current.ownerNew} ${line.trim()}`);
      }
    }
  }
  if (current) rows.push(current);
  return rows;
}

function classify(row) {
  if (row.status !== "LABOT") return null;
  const upper = row.ownerNew.toUpperCase();
  if (upper.startsWith("FJERN ")) {
    const termMatch = row.ownerNew.match(/FJERN [`'"]([^`'"]+)[`'"]/i) || row.ownerNew.match(/FJERN\s+(.+)$/i);
    return {
      ...row,
      action: "FJERN_ACCENT",
      removeTerm: termMatch ? termMatch[1].trim() : row.ownerNew.replace(/^FJERN\s+/i, "").replace(/^`|`$/g, ""),
    };
  }
  return { ...row, action: "SET" };
}

function main() {
  const all = [];
  for (const f of GROUP_FILES) {
    all.push(...parseGroupFile(f));
  }
  const byKey = new Map();
  for (const row of all) {
    const item = classify(row);
    if (!item) continue;
    const key = `${item.cardId}|${item.field}`;
    byKey.set(key, item);
  }
  const apply = [...byKey.values()].sort((a, b) => a.finding - b.finding);
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), apply }, null, 2));
  console.log(JSON.stringify({ totalRows: all.length, labot: apply.length, out: OUT }, null, 2));
}

main();
