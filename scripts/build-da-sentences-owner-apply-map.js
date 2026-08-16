#!/usr/bin/env node
"use strict";
/**
 * Parse DA–DE Sätze OWNER signed decision markdown → apply map JSON.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeField } = require("./lib/da-sentences-owner-path");

const SIGNED = path.join(ROOT, "reports/da-sentences-owner-decisions-signed.md");
const OUT = path.join(ROOT, "reports/temp/da-sentences-owner-apply-map.json");
const STATUS = "(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)";

const PIPE_ROW = new RegExp(
  `^\\|\\s*(\\d+)\\s*\\|\\s*(DA-SENT-\\d+)\\s*\\|\\s*\`([^\`]+)\`\\s*\\|\\s*([^|]*)\\|\\s*([^|]*)\\|\\s*([^|]*)\\|\\s*(?:CRITICAL|HIGH|MEDIUM|LOW)\\s*\\|\\s*${STATUS}\\s*\\|\\s*(.*?)\\s*\\|\\s*$`
);

function normalizeDecision(text) {
  return String(text || "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^`|`$/g, "");
}

function classify(row) {
  if (row.status !== "LABOT") return null;
  const ownerNew = normalizeDecision(row.ownerDecision || row.ownerNew);
  if (!ownerNew || ownerNew === "—" || ownerNew === "-") return null;
  return {
    ...row,
    field: normalizeField("lv"),
    currentDa: normalizeDecision(row.currentDa),
    ownerNew,
    action: "SET",
  };
}

function parseSignedFile(filePath) {
  const md = fs.readFileSync(filePath, "utf8");
  const rows = [];
  for (const line of md.split("\n")) {
    const m = line.match(PIPE_ROW);
    if (!m) continue;
    rows.push({
      finding: Number(m[1]),
      auditId: m[2].trim(),
      cardId: m[3].trim(),
      deContext: normalizeDecision(m[4]),
      currentDa: normalizeDecision(m[5]),
      ownerNew: normalizeDecision(m[6]),
      status: m[7],
      ownerDecision: normalizeDecision(m[8]),
      source: path.basename(filePath),
    });
  }
  return rows;
}

function main() {
  if (!fs.existsSync(SIGNED)) {
    console.error(`Missing ${SIGNED}`);
    process.exit(1);
  }

  const all = parseSignedFile(SIGNED);
  const byKey = new Map();
  for (const row of all) {
    const item = classify(row);
    if (!item) continue;
    byKey.set(`${item.cardId}|${item.field}`, item);
  }

  const apply = [...byKey.values()].sort((a, b) => a.finding - b.finding);
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify({ generatedAt: new Date().toISOString(), file: SIGNED, apply }, null, 2)
  );

  const statusCounts = {};
  for (const row of all) {
    statusCounts[row.status] = (statusCounts[row.status] || 0) + 1;
  }

  console.log(
    JSON.stringify(
      {
        file: path.basename(SIGNED),
        totalRows: all.length,
        labotUnique: apply.length,
        statusCounts,
        out: OUT,
      },
      null,
      2
    )
  );
}

main();
