#!/usr/bin/env node
"use strict";
/**
 * Parse DA–DE Verbs OWNER signed/group decision markdown files.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { applyKey, normalizeField } = require("./da-verbs-owner-path");

const STATUS = "(?:LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)";
const ASCII_ROW = /^\s*(DA-VERB-\d+)\s+(verb-\d+)\s+([\w.]+)\s+/;

function normalizeText(text) {
  return String(text || "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/^`|`$/g, "")
    .replace(/\s+/g, " ")
    .trim();
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
    if (buffer && line.trim()) buffer = `${buffer} ${line.trim()}`;
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
  const deContext = parts[4];
  const currentDa = parts[5];
  const proposedDa = parts[6];
  const severity = parts[7];
  const status = parts[8];
  const ownerDecision = normalizeText(parts[9]);
  if (!/^DA-VERB-\d+$/.test(auditId)) return null;
  if (!/^verb-\d+$/.test(cardId)) return null;
  if (!new RegExp(`^${STATUS}$`).test(status)) return null;
  return {
    auditId,
    cardId,
    field,
    deContext,
    currentDa,
    proposedDa,
    severity,
    status,
    ownerDecision,
  };
}

function parseAsciiBlock(lines, startIdx) {
  const line = lines[startIdx];
  const m = line.match(ASCII_ROW);
  if (!m) return null;
  const rest = line.slice(m[0].length);
  const statusMatch = rest.match(
    new RegExp(`\\b(CRITICAL|HIGH|MEDIUM|LOW|NEEDS_SOURCE_REVIEW)\\b\\s+(${STATUS})\\b\\s+(.+)$`)
  );
  if (!statusMatch) return null;
  const ownerDecision = normalizeText(statusMatch[3]);
  return {
    auditId: m[1],
    cardId: m[2],
    field: m[3],
    status: statusMatch[2],
    ownerDecision,
    endIdx: startIdx + 1,
  };
}

function parseDecisionFile(filePath) {
  const md = fs.readFileSync(filePath, "utf8");
  const lines = normalizeSignedMarkdown(md).split("\n");
  const rows = [];
  for (const joined of joinPipeRows(md)) {
    const pipe = parsePipeRow(joined);
    if (pipe) rows.push({ ...pipe, source: path.basename(filePath) });
  }
  for (let i = 0; i < lines.length; i++) {
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
  return rows;
}

function listDecisionFiles() {
  const reports = path.join(ROOT, "reports");
  const signed = fs
    .readdirSync(reports)
    .filter((f) => /^da-verbs-owner-decisions-signed-group\d+\.md$/i.test(f))
    .sort();
  if (signed.length >= 12) return signed.map((f) => path.join(reports, f));

  const groups = [];
  for (let i = 1; i <= 12; i++) {
    const slug = `group${String(i).padStart(2, "0")}`;
    const signedPath = path.join(reports, `da-verbs-owner-decisions-signed-${slug}.md`);
    const groupPath = path.join(reports, `da-verbs-owner-decisions-${slug}.md`);
    if (fs.existsSync(signedPath)) groups.push(signedPath);
    else if (fs.existsSync(groupPath)) groups.push(groupPath);
  }
  return groups;
}

function parseAllDecisions() {
  const files = listDecisionFiles();
  const all = [];
  for (const f of files) all.push(...parseDecisionFile(f));
  return { files, rows: all };
}

function countByStatus(rows) {
  const counts = {};
  for (const r of rows) counts[r.status] = (counts[r.status] || 0) + 1;
  return counts;
}

function dedupeLabot(rows) {
  const byKey = new Map();
  const conflicts = [];
  for (const row of rows) {
    if (row.status !== "LABOT") continue;
    const ownerNew = normalizeText(row.ownerDecision);
    if (!ownerNew || ownerNew === "—" || ownerNew === "-") continue;
    const key = applyKey(row.cardId, row.field);
    const existing = byKey.get(key);
    if (existing && normalizeText(existing.ownerDecision) !== ownerNew) {
      conflicts.push({ key, a: existing, b: { ...row, ownerNew } });
    }
    byKey.set(key, { ...row, ownerNew, key });
  }
  return { labot: [...byKey.values()].sort((a, b) => a.auditId.localeCompare(b.auditId)), conflicts };
}

function uniqueByCardField(rows, status) {
  const set = new Set();
  for (const r of rows) {
    if (r.status === status) set.add(applyKey(r.cardId, r.field));
  }
  return [...set];
}

module.exports = {
  normalizeText,
  normalizeField,
  applyKey,
  parseDecisionFile,
  parseAllDecisions,
  countByStatus,
  dedupeLabot,
  uniqueByCardField,
  listDecisionFiles,
};
