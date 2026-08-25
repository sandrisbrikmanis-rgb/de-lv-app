#!/usr/bin/env node
"use strict";
/**
 * Build apply map from ES-DE A1+A2 OWNER decision master batches.
 * Usage: node scripts/build-es-a1-a2-owner-apply-map.js
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const SOURCES = [
  path.join(ROOT, "reports/es-de-a1-a2-owner-decisions-master-001-100.md"),
  path.join(ROOT, "reports/es-de-a1-a2-owner-decisions-master-101-200.md"),
];
const OUT = path.join(ROOT, "reports/temp/es-a1-a2-owner-apply-map.json");

const ROW_RE =
  /^\s*\d+\s+`(ES-A1A2-LUNA-\d+)`\s+`([^`]+)`\s+`([^`]+)`\s+`([^`]+)`\s+`([^`]+)`\s+\*\*LABOT\*\*/;

function normalizeField(field) {
  const f = String(field || "").trim();
  if (f === "esText" || f === "esMain") return "lv";
  return f;
}

function parseFile(filePath) {
  const md = fs.readFileSync(filePath, "utf8");
  const rows = [];
  for (const line of md.split("\n")) {
    const m = line.match(ROW_RE);
    if (!m) continue;
    rows.push({
      auditId: m[1],
      cardId: m[2],
      field: normalizeField(m[3]),
      current: m[4],
      ownerNew: m[5],
      source: path.relative(ROOT, filePath),
    });
  }
  return rows;
}

function main() {
  const parsed = [];
  for (const src of SOURCES) {
    if (!fs.existsSync(src)) {
      console.error(`Missing ${src}`);
      process.exit(1);
    }
    parsed.push(...parseFile(src));
  }

  const byKey = new Map();
  for (const row of parsed) {
    byKey.set(`${row.auditId}|${row.cardId}|${row.field}`, row);
  }
  const apply = [...byKey.values()].sort((a, b) => a.auditId.localeCompare(b.auditId));

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        sources: SOURCES.map((s) => path.relative(ROOT, s)),
        apply,
        count: apply.length,
      },
      null,
      2,
    ),
  );
  console.log(JSON.stringify({ parsed: parsed.length, apply: apply.length, out: OUT }, null, 2));
}

main();
