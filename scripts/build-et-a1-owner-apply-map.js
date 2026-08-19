#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const SOURCE = path.join(ROOT, "reports/et-a1-owner-accepted-all.md");
const OUT = path.join(ROOT, "reports/temp/et-a1-owner-apply-map.json");

const SKIP_NEW = /^\[SKAT\.|^\[SKAT |^—$|^-$|^SOURCE_REQUIRED/i;

function normalizeField(field) {
  let f = field.trim();
  const entryMatch = f.match(/^entry\[\d+\]\.(.+)$/);
  if (entryMatch) f = entryMatch[1];
  if (f === "etText" || f === "etMain") return "lv";
  if (f.startsWith("study.sectionAccents")) return null;
  return f;
}

function parseTable(md) {
  const rows = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("| ET-A1-")) continue;
    const cols = line.split("|").map((c) => c.trim()).filter(Boolean);
    if (cols.length < 6 || cols[0] === "Audit ID") continue;
    rows.push({
      auditId: cols[0],
      cardId: cols[1],
      field: cols[2],
      current: cols[3],
      ownerNew: cols[4],
      status: cols[5],
    });
  }
  return rows;
}

function main() {
  const md = fs.readFileSync(SOURCE, "utf8");
  const parsed = parseTable(md);
  const apply = [];
  const skipped = [];

  for (const row of parsed) {
    if (row.status !== "LABOT") {
      skipped.push({ ...row, reason: "not_labot" });
      continue;
    }
    if (row.cardId === "STRUCT" || row.field === "study" || row.field === "study.count") {
      skipped.push({ ...row, reason: "struct_or_whole_study" });
      continue;
    }
    const field = normalizeField(row.field);
    if (!field) {
      skipped.push({ ...row, reason: "sectionaccents_nsr" });
      continue;
    }
    if (!row.ownerNew || SKIP_NEW.test(row.ownerNew.trim())) {
      skipped.push({ ...row, reason: "no_concrete_new" });
      continue;
    }
    apply.push({
      auditId: row.auditId,
      cardId: row.cardId,
      field,
      rawField: row.field,
      current: row.current,
      ownerNew: row.ownerNew,
    });
  }

  const byKey = new Map();
  for (const item of apply) {
    byKey.set(`${item.cardId}|${item.field}`, item);
  }
  const deduped = [...byKey.values()].sort((a, b) => a.auditId.localeCompare(b.auditId));

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify({ generatedAt: new Date().toISOString(), source: SOURCE, apply: deduped, skippedCount: skipped.length }, null, 2),
  );
  console.log(JSON.stringify({ parsed: parsed.length, apply: deduped.length, skipped: skipped.length, out: OUT }, null, 2));
}

main();
