#!/usr/bin/env node
"use strict";
/**
 * Build apply map from ES-DE A1+A2 OWNER decision master batches.
 * Usage: node scripts/build-es-a1-a2-owner-apply-map.js [--from=201] [--to=1208]
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const REPORTS = path.join(ROOT, "reports");
const OUT = path.join(ROOT, "reports/temp/es-a1-a2-owner-apply-map.json");

const LEGACY_ROW_RE =
  /^\s*\d+\s+`(ES-A1A2-LUNA-\d+)`\s+`([^`]+)`\s+`([^`]+)`\s+`([^`]+)`\s+`([^`]+)`\s+\*\*LABOT\*\*/;

const TABLE_ROW_RE =
  /^\|\s*\d+\s*\|\s*`(ES-A1A2-LUNA-\d+)`\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*\*\*LABOT\*\*\s*\|/;

function parseRangeArg(name, fallback) {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? parseInt(hit.split("=")[1], 10) : fallback;
}

function findingNum(id) {
  const m = String(id).match(/ES-A1A2-LUNA-(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

function normalizeField(field) {
  const f = String(field || "").trim();
  if (f === "esText" || f === "esMain") return "lv";
  return f;
}

function discoverSources() {
  const numbered = fs
    .readdirSync(REPORTS)
    .filter((name) => /^es-de-a1-a2-owner-decisions-master-\d+-\d+\.md$/.test(name))
    .sort((a, b) => {
      const na = parseInt(a.match(/master-(\d+)/)[1], 10);
      const nb = parseInt(b.match(/master-(\d+)/)[1], 10);
      return na - nb;
    })
    .map((name) => path.join(REPORTS, name));
  const remaining = path.join(REPORTS, "es-de-a1-a2-owner-decisions-master-remaining-101.md");
  const extra = fs.existsSync(remaining) ? [remaining] : [];
  const only = process.argv.find((a) => a.startsWith("--only="));
  if (only) {
    const rel = only.split("=")[1];
    const abs = path.isAbsolute(rel) ? rel : path.join(REPORTS, rel);
    return [abs];
  }
  return [...numbered, ...extra];
}

function parseFile(filePath) {
  const md = fs.readFileSync(filePath, "utf8");
  const rows = [];
  for (const line of md.split("\n")) {
    let m = line.match(TABLE_ROW_RE);
    if (!m) m = line.match(LEGACY_ROW_RE);
    if (!m) continue;
    rows.push({
      auditId: m[1],
      cardId: m[2],
      field: normalizeField(m[3]),
      rawField: m[3],
      current: m[4],
      ownerNew: m[5],
      source: path.relative(ROOT, filePath),
    });
  }
  return rows;
}

function main() {
  const from = parseRangeArg("from", 1);
  const to = parseRangeArg("to", 99999);
  const sources = discoverSources();
  const parsed = [];

  for (const src of sources) {
    if (!fs.existsSync(src)) continue;
    parsed.push(...parseFile(src));
  }

  const filtered = parsed.filter((row) => {
    const n = findingNum(row.auditId);
    return n >= from && n <= to;
  });

  const byKey = new Map();
  for (const row of filtered) {
    byKey.set(`${row.auditId}|${row.cardId}|${row.field}|${row.current}`, row);
  }
  const apply = [...byKey.values()].sort((a, b) => findingNum(a.auditId) - findingNum(b.auditId));

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        range: { from, to },
        sources,
        apply,
        count: apply.length,
      },
      null,
      2,
    ),
  );
  console.log(
    JSON.stringify(
      {
        sources: sources.length,
        parsed: parsed.length,
        inRange: filtered.length,
        apply: apply.length,
        from,
        to,
        out: OUT,
      },
      null,
      2,
    ),
  );
}

main();
