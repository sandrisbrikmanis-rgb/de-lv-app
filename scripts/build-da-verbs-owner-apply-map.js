#!/usr/bin/env node
"use strict";
/**
 * Parse DA–DE Verbs OWNER signed decision files → apply map JSON.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { applyKey } = require("./lib/da-verbs-owner-path");

const MERGED = path.join(ROOT, "reports/temp/da-verbs-merged-audit.json");
const OUT = path.join(ROOT, "reports/temp/da-verbs-owner-apply-map.json");
const SIGNED_DIR = path.join(ROOT, "reports");
const STATUS = "(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)";

const TABLE_ROW = new RegExp(
  `^\\|\\s*(DA-VERB-\\d+)\\s*\\|\\s*\`([^\`]+)\`\\s*\\|\\s*\`([^|]+)\`\\s*\\|\\s*([^|]*)\\|\\s*([^|]*)\\|\\s*([^|]*)\\|\\s*(?:CRITICAL|HIGH|MEDIUM|LOW|NEEDS_SOURCE_REVIEW)\\s*\\|\\s*${STATUS}\\s*\\|\\s*(.*?)\\s*\\|\\s*$`
);

const ASCII_ROW = /^\s*(DA-VERB-\d+)\s+(verb-\d+)\s+([\w.]+)\s+/;

function normalizeDecision(text) {
  return String(text || "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/^`|`$/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function stripBackticks(text) {
  return normalizeDecision(String(text || "").replace(/`/g, ""));
}

function loadAuditById() {
  const data = JSON.parse(fs.readFileSync(MERGED, "utf8"));
  const map = new Map();
  for (const f of data.findings || []) map.set(f.id, f);
  return map;
}

function listSignedFiles() {
  return fs
    .readdirSync(SIGNED_DIR)
    .filter((f) => /^da-verbs-owner-decisions-signed-group\d+\.md$/i.test(f))
    .sort();
}

function normalizeSignedMarkdown(md) {
  return md.replace(/\\\|/g, "|");
}

function joinPipeRows(md) {
  const lines = normalizeSignedMarkdown(md).split("\n");
  const joined = [];
  let buffer = "";

  for (const raw of lines) {
    const line = raw.trimEnd();
    if (/^\|\s*DA-VERB-\d+\s*\|/.test(line)) {
      if (buffer) joined.push(buffer.trim());
      buffer = line;
      continue;
    }
    if (buffer && line.trim()) {
      buffer = `${buffer} ${line.trim()}`;
    }
  }
  if (buffer) joined.push(buffer.trim());
  return joined;
}

function parsePipeRow(line) {
  if (!/^\|\s*DA-VERB-\d+\s*\|/.test(line)) return null;
  const parts = line.split("|").map((p) => p.trim());
  if (parts.length < 10) return null;

  const auditId = parts[1];
  const cardId = parts[2].replace(/`/g, "");
  const field = parts[3].replace(/`/g, "");
  const severity = parts[7];
  const status = parts[8];
  const ownerDecision = stripBackticks(parts[9]);

  if (!/^DA-VERB-\d+$/.test(auditId)) return null;
  if (!/^verb-\d+$/.test(cardId)) return null;
  if (!/^(CRITICAL|HIGH|MEDIUM|LOW|NEEDS_SOURCE_REVIEW)$/.test(severity)) return null;
  if (!new RegExp(`^${STATUS}$`).test(status)) return null;

  return { auditId, cardId, field, status, ownerDecision };
}

function parseAsciiBlock(lines, startIdx) {
  const line = lines[startIdx];
  const m = line.match(ASCII_ROW);
  if (!m) return null;

  const auditId = m[1];
  const cardId = m[2];
  const field = m[3];
  const rest = line.slice(m[0].length);

  const statusMatch = rest.match(
    new RegExp(`\\b(CRITICAL|HIGH|MEDIUM|LOW|NEEDS_SOURCE_REVIEW)\\b\\s+(${STATUS})\\b\\s+(.+)$`)
  );
  if (!statusMatch) return null;

  let ownerDecision = normalizeDecision(statusMatch[3]);
  let i = startIdx + 1;
  while (i < lines.length) {
    const next = lines[i];
    if (ASCII_ROW.test(next) || next.startsWith("| DA-VERB-") || next.startsWith("## ") || next.startsWith("---")) break;
    if (/^\s{10,}/.test(next) && next.trim()) {
      ownerDecision = normalizeDecision(`${ownerDecision} ${next.trim()}`);
      i++;
      continue;
    }
    if (!next.trim()) {
      i++;
      continue;
    }
    break;
  }

  return {
    auditId,
    cardId,
    field,
    status: statusMatch[2],
    ownerDecision,
    endIdx: i,
  };
}

function parseFile(filePath, auditById) {
  const md = fs.readFileSync(filePath, "utf8");
  const lines = normalizeSignedMarkdown(md).split("\n");
  const rows = [];

  for (const joined of joinPipeRows(md)) {
    const pipe = parsePipeRow(joined);
    if (pipe) {
      rows.push({ ...pipe, source: path.basename(filePath) });
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const ascii = parseAsciiBlock(lines, i);
    if (ascii) {
      rows.push({
        auditId: ascii.auditId,
        cardId: ascii.cardId,
        field: ascii.field,
        status: ascii.status,
        ownerDecision: ascii.ownerDecision,
        source: path.basename(filePath),
      });
      i = ascii.endIdx - 1;
    }
  }

  return rows.map((row) => {
    const audit = auditById.get(row.auditId);
    return {
      ...row,
      finding: audit ? Number(String(audit.id).replace("DA-VERB-", "")) : 0,
      currentDa: audit?.currentDa || "",
      deContext: audit?.deContext || "",
      severity: audit?.severity || "",
    };
  });
}

function classify(row) {
  if (row.status !== "LABOT") return null;
  const ownerNew = normalizeDecision(row.ownerDecision);
  if (!ownerNew || ownerNew === "—" || ownerNew === "-") return null;
  return {
    ...row,
    ownerNew,
    action: "SET",
  };
}

function main() {
  if (!fs.existsSync(MERGED)) {
    console.error(`Missing ${MERGED}`);
    process.exit(1);
  }

  const signedFiles = listSignedFiles();
  if (!signedFiles.length) {
    console.error("No signed group files found (reports/da-verbs-owner-decisions-signed-group*.md)");
    process.exit(1);
  }

  const auditById = loadAuditById();
  const all = [];
  for (const f of signedFiles) {
    all.push(...parseFile(path.join(SIGNED_DIR, f), auditById));
  }

  const byKey = new Map();
  const statusCounts = {};
  for (const row of all) {
    statusCounts[row.status] = (statusCounts[row.status] || 0) + 1;
    const item = classify(row);
    if (!item) continue;
    byKey.set(applyKey(item.cardId, item.field), item);
  }

  const apply = [...byKey.values()].sort((a, b) => a.finding - b.finding);
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(
    OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        signedFiles,
        totalRows: all.length,
        apply,
      },
      null,
      2
    )
  );

  console.log(
    JSON.stringify(
      {
        signedFiles: signedFiles.length,
        totalRows: all.length,
        labotUnique: apply.length,
        statusCounts,
        missingGroups: [7].filter((g) => !signedFiles.some((f) => f.includes(`group0${g}`) || f.includes(`group${g}`))),
        out: OUT,
      },
      null,
      2
    )
  );
}

main();
