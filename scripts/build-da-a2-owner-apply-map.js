#!/usr/bin/env node
"use strict";
/**
 * Parse DA–DE A2 OWNER decision markdown tables → apply map JSON.
 * Reads all reports/da-a2-owner-decisions-*.md (pipe table or A1-style rows).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeField } = require("./lib/da-a2-owner-path");

const DECISIONS_GLOB = path.join(ROOT, "reports/da-a2-owner-decisions-*.md");
const OUT = path.join(ROOT, "reports/temp/da-a2-owner-apply-map.json");

const STATUS = "(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)";
const PIPE_ROW = new RegExp(
  `^\\|\\s*(\\d+)\\s*\\|\\s*\`{1,2}([^\`]+)\`{1,2}\\s*\\|\\s*\`{1,2}([^\`]+)\`{1,2}\\s*\\|\\s*(?:\\*\\*)?${STATUS}(?:\\*\\*)?\\s*\\|\\s*(.*?)\\s*\\|\\s*$`
);
const A1_ROW = new RegExp(
  `^\\s*(\\d+)\\s+\`([^\`]+)\`\\s+\`([^\`]+)\`\\s+\\*\\*${STATUS}\\*\\*\\s+(.*)$`
);

function normalizeDecision(text) {
  return text
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^`|`$/g, "")
    .replace(/\s*-\s*\*\*LABOT:\*\*.*$/i, "")
    .replace(/\s*-\s*\*\*FALSE_POSITIVE.*$/i, "");
}

function classify(row) {
  if (row.status !== "LABOT") return null;
  const text = normalizeDecision(row.ownerNew);
  const upper = text.toUpperCase();
  if (upper.startsWith("FJERN ")) {
    const termMatch =
      text.match(/FJERN [`'"«]([^`'»"]+)[`'»"]/i) || text.match(/FJERN\s+(.+)$/i);
    return {
      ...row,
      field: normalizeField(row.field),
      ownerNew: text,
      action: "FJERN_ACCENT",
      removeTerm: termMatch
        ? termMatch[1].trim()
        : text.replace(/^FJERN\s+/i, "").replace(/^`|`$/g, ""),
    };
  }
  return { ...row, field: normalizeField(row.field), ownerNew: text, action: "SET" };
}

function listDecisionFiles() {
  const dir = path.join(ROOT, "reports");
  return fs
    .readdirSync(dir)
    .filter((f) => f.startsWith("da-a2-owner-decisions-") && f.endsWith(".md"))
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
    const m = pipe || a1;
    if (m) {
      if (current) rows.push(current);
      current = {
        finding: Number(m[1]),
        cardId: m[2],
        field: m[3],
        status: m[4],
        ownerNew: normalizeDecision(m[5] || ""),
        source: path.basename(filePath),
      };
      continue;
    }
    if (current && line.trim() && !line.startsWith("---") && !line.startsWith("## ") && !line.startsWith("|--")) {
      if (!line.startsWith("|") && !/^[-=]{10,}/.test(line.trim())) {
        if (/^\s{4,}/.test(line) || (!line.includes("|") && current.ownerNew.length > 0)) {
          current.ownerNew = normalizeDecision(`${current.ownerNew} ${line.trim()}`);
        }
      }
    }
  }
  if (current) rows.push(current);
  return rows;
}

function main() {
  const files = listDecisionFiles();
  if (!files.length) {
    console.error(`No decision files matching ${DECISIONS_GLOB}`);
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
