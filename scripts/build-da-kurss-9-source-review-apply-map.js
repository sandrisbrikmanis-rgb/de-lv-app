#!/usr/bin/env node
"use strict";
/**
 * Build apply map from da-kurss-9-source-review-owner-mapping-signed.md
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const MAPPING_MD = path.join(ROOT, "reports/da-kurss-9-source-review-owner-mapping-signed.md");
const OUT_JSON = path.join(ROOT, "reports/temp/da-kurss-9-source-review-apply-map.json");

const STATUS_RE = /\*\*(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW|SKIP)\*\*/;

function extractCell(text) {
  let raw = String(text || "").trim();
  const m = raw.match(/^`([^`]+)`$/);
  if (m) return m[1];
  if (raw.startsWith("`") && raw.endsWith("`")) return raw.slice(1, -1);
  return raw;
}

function parseRow(line) {
  if (!line.startsWith("|")) return null;
  if (/^\|\s*[-:]+/.test(line)) return null;
  const cells = line
    .split("|")
    .slice(1, -1)
    .map((c) => c.trim());
  if (cells.length < 6 || !/^\d+$/.test(cells[0])) return null;
  const statusMatch = cells[5].match(STATUS_RE);
  const status = statusMatch ? statusMatch[1] : cells[5].replace(/\*/g, "").trim();
  return {
    num: parseInt(cells[0], 10),
    object: extractCell(cells[1]),
    path: extractCell(cells[2]),
    daCurrent: extractCell(cells[3]),
    ownerNew: extractCell(cells[4]),
    status,
  };
}

function parseMappingFile(filePath) {
  const md = fs.readFileSync(filePath, "utf8");
  const rows = [];
  for (const line of md.split("\n")) {
    const row = parseRow(line);
    if (row) rows.push(row);
  }
  return rows;
}

function main() {
  if (!fs.existsSync(MAPPING_MD)) {
    console.error(`Missing ${MAPPING_MD}`);
    process.exit(1);
  }
  const allRows = parseMappingFile(MAPPING_MD);
  const statuses = { LABOT: 0, OTHER: 0 };
  const apply = [];

  for (const row of allRows) {
    if (row.status === "LABOT") statuses.LABOT++;
    else statuses.OTHER++;

    if (row.status !== "LABOT") continue;
    if (!row.ownerNew || !row.daCurrent) continue;

    apply.push({
      num: row.num,
      object: row.object,
      path: row.path,
      daCurrent: row.daCurrent,
      ownerNew: row.ownerNew,
    });
  }

  apply.sort((a, b) => a.num - b.num);

  const out = {
    generatedAt: new Date().toISOString(),
    source: path.basename(MAPPING_MD),
    decisionRows: allRows.length,
    labotTotal: statuses.LABOT,
    applyCount: apply.length,
    statusCounts: statuses,
    apply,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 2), "utf8");
  console.log(JSON.stringify({ decisionRows: allRows.length, applyCount: apply.length, out: OUT_JSON }, null, 2));
}

main();
