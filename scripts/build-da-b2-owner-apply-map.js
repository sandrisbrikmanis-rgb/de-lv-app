#!/usr/bin/env node
"use strict";
/**
 * Parse DA–DE B2 OWNER decision markdown → apply map JSON.
 * Supports pipe tables and ASCII OWNER NEW tables (GitHub upload format).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeField } = require("./lib/da-b2-owner-path");

const OUT = path.join(ROOT, "reports/temp/da-b2-owner-apply-map.json");
const STATUS = "(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)";
const STATUS_RE = new RegExp(`\\b(${STATUS})\\s*$`);

const PIPE_ROW = new RegExp(
  `^\\|\\s*(\\d+)\\s*\\|\\s*(?:\`{1,2})?([^|\`]+?)(?:\`{1,2})?\\s*\\|\\s*(?:\`{1,2})?([^|\`]+?)(?:\`{1,2})?\\s*\\|\\s*(?:\\*\\*)?${STATUS}(?:\\*\\*)?\\s*\\|\\s*(.+)\\|\\s*$`
);
const PIPE_ROW_FULL = new RegExp(
  `^\\|\\s*(\\d+)\\s*\\|\\s*(?:\`{1,2})?([^|\`]+?)(?:\`{1,2})?\\s*\\|\\s*(?:\`{1,2})?([^|\`]+?)(?:\`{1,2})?\\s*\\|\\s*(?:\`{1,2})?([^|\`]+?)(?:\`{1,2})?\\s*\\|\\s*(?:\`{1,2})?([^|\`]+?)(?:\`{1,2})?\\s*\\|\\s*(?:\\*\\*)?${STATUS}(?:\\*\\*)?\\s*\\|\\s*(.*)\\|\\s*$`
);
const ROW_START = /^\s*(\d+)\s+`([^`]+)`\s+`([^`]+)`\s+(.*)$/;

function normalizeDecision(text) {
  return String(text || "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^`|`$/g, "");
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

function stripInvisible(line) {
  return String(line || "").replace(/[\u200B-\u200D\uFEFF]/g, "");
}

function detectAsciiColumns(hdr) {
  return {
    cCur: hdr.indexOf("CURRENT_DA"),
    cOwn: hdr.indexOf("OWNER NEW"),
    cStat: hdr.indexOf("Statuss"),
  };
}

function sliceAsciiCols(line, cCur, cOwn, cStat) {
  const cur = line.substring(cCur, cOwn).trim();
  const own = line.substring(cOwn, cStat).trim();
  const stat = line.substring(cStat).trim();
  return { cur, own, stat };
}

function parseAsciiBlock(finding, cardId, field, lines, cols) {
  const { cCur, cOwn, cStat } = cols;
  const right = [];
  let status = "LABOT";
  for (const raw of lines) {
    const line = stripInvisible(raw);
    const { own, stat } = sliceAsciiCols(line, cCur, cOwn, cStat);
    if (own) right.push(own);
    const statusMatch = stat.match(STATUS_RE);
    if (statusMatch) status = statusMatch[1];
  }
  if (status === "LABOT") {
    const joined = right.join(" ");
    const statusMatch = joined.match(STATUS_RE);
    if (statusMatch) status = statusMatch[1];
  }
  const ownerNew = normalizeDecision(right.join(" ").replace(STATUS_RE, ""));
  return {
    finding: Number(finding),
    cardId: cardId.trim(),
    field: field.trim(),
    status,
    ownerNew,
    source: "",
  };
}

function parseAsciiTable(md, sourceName) {
  const lines = md.split("\n");
  const hdr = lines.find((l) => l.includes("CURRENT_DA"));
  if (!hdr) return [];
  const cols = detectAsciiColumns(hdr);
  const rows = [];
  let i = 0;
  while (i < lines.length) {
    const m = lines[i].match(ROW_START);
    if (!m) {
      i++;
      continue;
    }
    const block = [lines[i]];
    i++;
    while (i < lines.length) {
      if (ROW_START.test(lines[i])) break;
      if (/^##\s|^---/.test(lines[i].trim())) break;
      if (/^[-=]{5,}/.test(lines[i].trim())) break;
      if (lines[i].trim() && /^\s{10,}/.test(lines[i])) block.push(lines[i]);
      else if (!lines[i].trim()) {
        i++;
        continue;
      } else break;
      i++;
    }
    const row = parseAsciiBlock(m[1], m[2], m[3], block, cols);
    row.source = sourceName;
    rows.push(row);
  }
  return rows;
}

function parsePipeTable(md, sourceName) {
  const rows = [];
  let current = null;
  for (const line of md.split("\n")) {
    const full = line.match(PIPE_ROW_FULL);
    const simple = line.match(PIPE_ROW);
    const m = full || simple;
    if (m) {
      if (current) rows.push(current);
      current = {
        finding: Number(m[1]),
        cardId: m[2].trim(),
        field: m[3].trim(),
        status: full ? m[6] : m[4],
        ownerNew: normalizeDecision(full ? m[7] || m[5] : m[5] || ""),
        source: sourceName,
      };
      continue;
    }
    if (current && line.trim() && !line.startsWith("|")) {
      current.ownerNew = normalizeDecision(`${current.ownerNew} ${line.trim()}`);
    }
  }
  if (current) rows.push(current);
  return rows;
}

function parseGroupFile(filePath) {
  const md = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  const base = path.basename(filePath);
  if (md.includes("OWNER NEW") || ROW_START.test(md)) {
    return parseAsciiTable(md, base);
  }
  return parsePipeTable(md, base);
}

function listDecisionFiles() {
  return fs
    .readdirSync(path.join(ROOT, "reports"))
    .filter((f) => f.startsWith("da-b2-owner-decisions-") && f.endsWith(".md"))
    .sort()
    .map((f) => path.join("reports", f));
}

function main() {
  const files = listDecisionFiles();
  if (!files.length) {
    console.error("No decision files matching reports/da-b2-owner-decisions-*.md");
    process.exit(1);
  }

  const all = [];
  for (const f of files) all.push(...parseGroupFile(f));

  const byKey = new Map();
  for (const row of all) {
    const item = classify(row);
    if (!item) continue;
    byKey.set(`${item.cardId}|${item.field}`, item);
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
