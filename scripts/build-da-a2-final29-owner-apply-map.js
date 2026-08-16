#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeField } = require("./lib/da-a2-owner-path");
const CASES = require("./lib/da-a2-final29-cases");

const DECISIONS = path.join(ROOT, "reports/da-a2-owner-decisions-final29-sectionaccents.md");
const OUT = path.join(ROOT, "reports/temp/da-a2-final29-owner-apply-map.json");

const STATUS = "(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)";
const ROW = new RegExp(
  `^\\|\\s*(\\d+)\\s*\\|\\s*[^|]+\\|\\s*[^|]+\\|\\s*\`([^\`]+)\`\\s*\\|\\s*\`([^\`]+)\`\\s*\\|\\s*\`([^\`]+)\`\\s*\\|\\s*[^|]+\\|\\s*(?:\\*\\*)?${STATUS}(?:\\*\\*)?\\s*\\|\\s*(.*?)\\s*\\|\\s*$`
);

function normalizeDecision(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^`|`$/g, "");
}

function parseFjern(text) {
  const t = normalizeDecision(text);
  const m = t.match(/^FJERN\s+[`'"«]?([^`'»"]+)[`'»"]?\s*$/i);
  return m ? m[1].trim() : null;
}

function classify(row) {
  if (row.status === "FALSE_POSITIVE" || row.status === "NELABOT") return null;
  if (row.status !== "LABOT") return null;
  const text = normalizeDecision(row.ownerNew);
  const removeTerm = parseFjern(text);
  if (removeTerm !== null) {
    return { ...row, action: "FJERN_ACCENT", removeTerm, field: normalizeField(row.field) };
  }
  return { ...row, action: "SET", ownerNew: text, field: normalizeField(row.field) };
}

function main() {
  const md = fs.readFileSync(DECISIONS, "utf8");
  const apply = [];
  for (const line of md.split("\n")) {
    const m = line.match(ROW);
    if (!m) continue;
    const status = m[5].replace(/\*\*/g, "").trim();
    if (!status) continue;
    const row = {
      id: Number(m[1]),
      cardId: m[2],
      field: m[3],
      term: m[4],
      status,
      ownerNew: normalizeDecision(m[6]),
    };
    const item = classify(row);
    if (item) apply.push(item);
  }
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), apply }, null, 2));
  console.log(JSON.stringify({ expected: CASES.length, rows: apply.length, out: OUT }, null, 2));
  if (apply.length !== CASES.length) process.exit(1);
}

main();
