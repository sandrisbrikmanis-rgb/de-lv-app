#!/usr/bin/env node
"use strict";
/**
 * Parse DA–DE C1/C2 OWNER decision markdown → apply map JSON.
 * Supports pipe tables and ASCII OWNER NEW tables (GitHub upload format).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeField } = require("./lib/da-c1c2-owner-path");

const OUT = path.join(ROOT, "reports/temp/da-c1c2-owner-apply-map.json");
const STATUS = "(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)";
const STATUS_RE = new RegExp(`\\b(${STATUS})\\b`);

const ROW_START_C1 = /^\s*(\d+)\s+`([^`]+)`\s+`([^`]+)`\s+(.*)$/;
const ROW_START_C2 = /^\s*(\d+)\s+\d+\s+`([^`]+)`\s+`([^`]+)`\s+(.*)$/;

const PIPE_ROW = new RegExp(
  `^\\|\\s*(\\d+)\\s*\\|\\s*(?:\\d+\\s*\\|)?\\s*(?:\`{1,2})?([^|\`]+?)(?:\`{1,2})?\\s*\\|\\s*(?:\`{1,2})?([^|\`]+?)(?:\`{1,2})?\\s*\\|\\s*(?:\`{1,2})?([^|\`]+?)(?:\`{1,2})?\\s*\\|\\s*(?:\`{1,2})?([^|\`]+?)(?:\`{1,2})?\\s*\\|\\s*(?:\\*\\*)?${STATUS}(?:\\*\\*)?\\s*\\|\\s*(.*)\\|\\s*$`
);

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
  return {
    ...row,
    field: normalizeField(row.field),
    currentDa: normalizeDecision(row.currentDa),
    ownerNew: text,
    action: "SET",
  };
}

function stripInvisible(line) {
  return String(line || "").replace(/[\u200B-\u200D\uFEFF]/g, "");
}

function detectAsciiColumns(hdr) {
  const cCur = hdr.indexOf("CURRENT_DA");
  const cOwn = hdr.indexOf("OWNER NEW");
  const cSev = hdr.indexOf("Severity");
  const cStat = hdr.indexOf("Statuss");
  return {
    cCur,
    cOwn,
    cOwnEnd: cSev > cOwn && cSev < cStat ? cSev : cStat,
    cStat,
  };
}

function sliceAsciiCols(line, cols) {
  const { cCur, cOwn, cOwnEnd, cStat } = cols;
  const cur = line.substring(cCur, cOwn).trim();
  const own = line.substring(cOwn, cOwnEnd).trim();
  const stat = line.substring(cStat).trim();
  return { cur, own, stat };
}

function extractStatus(text) {
  const m = String(text || "").match(STATUS_RE);
  return m ? m[1] : null;
}

function parseAsciiBlock(finding, cardId, field, lines, cols) {
  const curParts = [];
  const ownParts = [];
  let status = "LABOT";
  for (const raw of lines) {
    const line = stripInvisible(raw);
    const { cur, own, stat } = sliceAsciiCols(line, cols);
    if (cur) curParts.push(cur);
    if (own) ownParts.push(own);
    const statusMatch = extractStatus(stat) || extractStatus(own) || extractStatus(cur);
    if (statusMatch) status = statusMatch;
  }
  const currentDa = normalizeDecision(curParts.join(" "));
  let ownerNew = normalizeDecision(ownParts.join(" "));
  ownerNew = ownerNew.replace(STATUS_RE, "").trim();
  return {
    finding: Number(finding),
    cardId: cardId.trim(),
    field: field.trim(),
    status,
    currentDa,
    ownerNew,
    source: "",
  };
}

function parseAsciiTable(md, sourceName) {
  const lines = md.split("\n");
  const hdr = lines.find((l) => l.includes("CURRENT_DA"));
  if (!hdr) return [];
  const cols = detectAsciiColumns(hdr);
  const isC2 = sourceName.includes("-c2");
  const rowStart = isC2 ? ROW_START_C2 : ROW_START_C1;
  const rows = [];
  let i = 0;
  while (i < lines.length) {
    const m = lines[i].match(rowStart);
    if (!m) {
      i++;
      continue;
    }
    const block = [lines[i]];
    i++;
    while (i < lines.length) {
      if (rowStart.test(lines[i])) break;
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
    row.level = isC2 ? "c2" : "c1";
    rows.push(row);
  }
  return rows;
}

function parsePipeTable(md, sourceName) {
  const rows = [];
  let current = null;
  const isC2 = sourceName.includes("-c2");
  for (const line of md.split("\n")) {
    const m = line.match(PIPE_ROW);
    if (m) {
      if (current) rows.push(current);
      current = {
        finding: Number(m[1]),
        cardId: m[2].trim(),
        field: m[3].trim(),
        currentDa: normalizeDecision(m[4]),
        ownerNew: normalizeDecision(m[5]),
        status: m[6],
        source: sourceName,
        level: isC2 ? "c2" : "c1",
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
  if (md.includes("OWNER NEW") || ROW_START_C1.test(md) || ROW_START_C2.test(md)) {
    return parseAsciiTable(md, base);
  }
  return parsePipeTable(md, base);
}

function listDecisionFiles() {
  return ["reports/da-c1c2-owner-decisions-c1.md", "reports/da-c1c2-owner-decisions-c2.md"]
    .filter((f) => fs.existsSync(path.join(ROOT, f)))
    .map((f) => f);
}

function main() {
  const files = listDecisionFiles();
  if (!files.length) {
    console.error("No decision files matching reports/da-c1c2-owner-decisions-*.md");
    process.exit(1);
  }

  const all = [];
  for (const f of files) all.push(...parseGroupFile(f));

  const byKey = new Map();
  for (const row of all) {
    const item = classify(row);
    if (!item) continue;
    byKey.set(`${item.level}|${item.cardId}|${item.field}`, item);
  }

  const apply = [...byKey.values()].sort((a, b) => {
    if (a.level !== b.level) return a.level.localeCompare(b.level);
    return a.finding - b.finding;
  });
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify({ generatedAt: new Date().toISOString(), files, apply }, null, 2)
  );
  console.log(
    JSON.stringify(
      {
        decisionFiles: files.length,
        totalRows: all.length,
        labot: apply.length,
        c1: apply.filter((r) => r.level === "c1").length,
        c2: apply.filter((r) => r.level === "c2").length,
        out: OUT,
      },
      null,
      2
    )
  );
}

main();
