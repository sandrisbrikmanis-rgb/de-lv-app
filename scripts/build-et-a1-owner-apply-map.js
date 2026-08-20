#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const SOURCE = process.env.OWNER_DECISIONS_SOURCE
  ? path.resolve(ROOT, process.env.OWNER_DECISIONS_SOURCE)
  : path.join(ROOT, "reports/et-a1-owner-decisions-accepted.md");
const OUT = path.join(ROOT, "reports/temp/et-a1-owner-apply-map.json");

const SKIP_NEW = /^\[SKAT\.|^\[SKAT |^—$|^-$|^SOURCE_REQUIRED|^\(ET tulkojums/i;

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
    const hasExtended = cols.length >= 10;
    rows.push({
      auditId: cols[0],
      cardId: cols[1].replace(/^`|`$/g, ""),
      field: cols[2].replace(/^`|`$/g, ""),
      current: cols[3].replace(/^`|`$/g, ""),
      proposedEt: cols[4].replace(/^`|`$/g, ""),
      severity: hasExtended ? cols[5] : "",
      category: hasExtended ? cols[6] : "",
      status: hasExtended ? cols[7] : cols[5],
      ownerNew: (hasExtended ? cols[8] : cols[4]).replace(/^`|`$/g, ""),
      note: hasExtended ? cols[9] : "",
    });
  }
  return rows;
}

function main() {
  if (!fs.existsSync(SOURCE)) {
    console.error(`Missing ${SOURCE}`);
    process.exit(1);
  }
  const md = fs.readFileSync(SOURCE, "utf8");
  const parsed = parseTable(md);
  const apply = [];
  const skipped = [];

  for (const row of parsed) {
    const status = String(row.status || "").toUpperCase();
    if (status !== "LABOT") {
      skipped.push({ ...row, reason: status || "not_labot" });
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
    const ownerNew = String(row.ownerNew || "").trim();
    if (!ownerNew || SKIP_NEW.test(ownerNew)) {
      skipped.push({ ...row, reason: "no_concrete_new" });
      continue;
    }
    apply.push({
      auditId: row.auditId,
      cardId: row.cardId,
      field,
      rawField: row.field,
      current: row.current,
      ownerNew,
    });
  }

  const byKey = new Map();
  for (const item of apply) {
    byKey.set(`${item.cardId}|${item.field}|${item.ownerNew}`, item);
  }
  const deduped = [...byKey.values()].sort((a, b) => a.auditId.localeCompare(b.auditId));

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify(
      { generatedAt: new Date().toISOString(), source: SOURCE, apply: deduped, skippedCount: skipped.length, skipped },
      null,
      2,
    ),
  );
  console.log(JSON.stringify({ parsed: parsed.length, apply: deduped.length, skipped: skipped.length, out: OUT }, null, 2));
}

main();
