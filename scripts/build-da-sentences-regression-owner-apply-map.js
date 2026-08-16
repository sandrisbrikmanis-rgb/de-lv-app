#!/usr/bin/env node
"use strict";
/**
 * Parse DA–DE Sätze regression OWNER decisions → apply map JSON.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const SIGNED = path.join(ROOT, "reports/da-sentences-regression-owner-decisions-signed.md");
const OUT = path.join(ROOT, "reports/temp/da-sentences-regression-owner-apply-map.json");
const STATUS = "(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)";

const PIPE_ROW = new RegExp(
  `^\\|\\s*(\\d+)\\s*\\|\\s*\`{1,2}(DA-SENT-REG-\\d+)\`{1,2}\\s*\\|\\s*\`{1,2}([^|\`]+)\`{1,2}\\s*\\|\\s*\`{1,2}([^|\`]*)\`{1,2}\\s*\\|\\s*\`{1,2}([^|\`]*)\`{1,2}\\s*\\|\\s*\\*\\*${STATUS}\\*\\*\\s*\\|\\s*$`
);

function normalizeDecision(text) {
  return String(text || "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^`|`$/g, "");
}

function parseSigned(filePath = SIGNED) {
  const rows = [];
  for (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
    const m = line.match(PIPE_ROW);
    if (!m) continue;
    rows.push({
      num: Number(m[1]),
      auditId: m[2].trim(),
      cardId: m[3].trim(),
      currentDa: normalizeDecision(m[4]),
      ownerNew: normalizeDecision(m[5]),
      status: m[6],
      field: "lv",
    });
  }
  return rows;
}

function main() {
  if (!fs.existsSync(SIGNED)) {
    console.error(`Missing ${SIGNED}`);
    process.exit(1);
  }
  const all = parseSigned();
  const byKey = new Map();
  for (const row of all) {
    if (row.status !== "LABOT") continue;
    if (!row.ownerNew) continue;
    byKey.set(`${row.cardId}|${row.field}`, row);
  }
  const apply = [...byKey.values()].sort((a, b) => a.num - b.num);
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify({ generatedAt: new Date().toISOString(), file: SIGNED, apply }, null, 2)
  );
  const statusCounts = {};
  for (const row of all) statusCounts[row.status] = (statusCounts[row.status] || 0) + 1;
  console.log(
    JSON.stringify(
      {
        totalRows: all.length,
        statusCounts,
        labotUnique: apply.length,
        out: OUT,
      },
      null,
      2
    )
  );
}

main();
