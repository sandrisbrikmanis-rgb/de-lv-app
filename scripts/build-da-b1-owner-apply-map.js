#!/usr/bin/env node
"use strict";
/**
 * Parse DA–DE B1 OWNER decision markdown tables → apply map JSON.
 * Reads all reports/da-b1-owner-decisions-*.md (pipe table or A1-style rows).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeField } = require("./lib/da-b1-owner-path");

const OUT = path.join(ROOT, "reports/temp/da-b1-owner-apply-map.json");

const STATUS = "(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)";
const PIPE_ROW = new RegExp(
  `^\\|\\s*(\\d+)\\s*\\|\\s*(?:\`{1,2})?([^|\`]+?)(?:\`{1,2})?\\s*\\|\\s*(?:\`{1,2})?([^|\`]+?)(?:\`{1,2})?\\s*\\|\\s*(?:\\*\\*)?${STATUS}(?:\\*\\*)?\\s*\\|\\s*(.*?)\\s*\\|\\s*$`
);
const A1_ROW = new RegExp(
  `^\\s*(\\d+)\\s+\`([^\`]+)\`\\s+\`([^\`]+)\`\\s+\\*\\*${STATUS}\\*\\*\\s+(.*)$`
);
const SPACE_ROW = new RegExp(
  `^\\s*(\\d+)\\s+\`([^\`]+)\`\\s+\`([^\`]+)\`\\s+(?:\\*\\*)?${STATUS}(?:\\*\\*)?\\s+(.*)$`
);

const FOOTER_LINE =
  /^(Pārskatīti:|[-*•]\s*Pārskatīti|\*\*Piezīme|\*\*Statuss|\*\*NELABOT|\*\*DE izmaiņas|_{5,})/i;

function normalizeDecision(text) {
  let s = String(text || "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^`|`$/g, "");
  s = s.split(/\s+-\s+Pārskatīti:/i)[0];
  s = s.split(/\s+-\s+\*\*NELABOT/i)[0];
  s = s.split(/\s+\*\*Piezīme:/i)[0];
  s = s.replace(/\s*-\s*\*\*LABOT:\*\*.*$/i, "");
  s = s.replace(/\s*-\s*\*\*FALSE_POSITIVE.*$/i, "");
  return s.trim();
}

function parseFjernTerm(text) {
  const t = normalizeDecision(text);
  const m =
    t.match(/^FJERN\s+[`'"«]([^`'»"]+)[`'»"]\s*$/i) ||
    t.match(/^FJERN\s+`([^`]+)`?\s*$/i) ||
    t.match(/^FJERN\s+(.+)$/i);
  if (!m) return null;
  return m[1].trim().replace(/^[`'«]|['`»]$/g, "");
}

function classify(row) {
  if (row.status !== "LABOT") return null;
  const text = normalizeDecision(row.ownerNew);
  const removeTerm = parseFjernTerm(text);
  if (removeTerm !== null) {
    return {
      ...row,
      field: normalizeField(row.field),
      ownerNew: text,
      action: "FJERN_ACCENT",
      removeTerm,
    };
  }
  return { ...row, field: normalizeField(row.field), ownerNew: text, action: "SET" };
}

function listDecisionFiles() {
  const dir = path.join(ROOT, "reports");
  return fs
    .readdirSync(dir)
    .filter((f) => f.startsWith("da-b1-owner-decisions-") && f.endsWith(".md"))
    .sort()
    .map((f) => path.join("reports", f));
}

function parseGroupFile(filePath) {
  const md = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  const lines = md.split("\n");
  const rows = [];
  let current = null;

  for (const line of lines) {
    const pipe = line.match(PIPE_ROW);
    const a1 = line.match(A1_ROW);
    const space = line.match(SPACE_ROW);
    const m = pipe || a1 || space;
    if (m) {
      if (current) rows.push(current);
      current = {
        finding: Number(m[1]),
        cardId: m[2].trim(),
        field: m[3].trim(),
        status: m[4],
        ownerNew: normalizeDecision(m[5] || ""),
        source: path.basename(filePath),
      };
      continue;
    }
    if (current && line.trim()) {
      const trimmed = line.trim();
      if (FOOTER_LINE.test(trimmed) || trimmed.startsWith("---") || trimmed.startsWith("##")) continue;
      if (line.startsWith("|") || /^[-=]{10,}/.test(trimmed) || /^\*\*Statuss:/.test(trimmed)) continue;
      if (/^\s{4,}/.test(line)) {
        current.ownerNew = normalizeDecision(`${current.ownerNew} ${trimmed}`);
      }
    }
  }
  if (current) rows.push(current);
  return rows;
}

function main() {
  const files = listDecisionFiles();
  if (!files.length) {
    console.error("No decision files matching reports/da-b1-owner-decisions-*.md");
    process.exit(1);
  }

  const all = [];
  for (const f of files) {
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
  fs.writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), files, apply }, null, 2));
  console.log(
    JSON.stringify(
      {
        decisionFiles: files.length,
        totalRows: all.length,
        labot: apply.length,
        out: OUT,
      },
      null,
      2
    )
  );
}

main();
