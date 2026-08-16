#!/usr/bin/env node
"use strict";
/**
 * Parse DA–DE Verbs final post-repair OWNER signed decision file (FPR format).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { applyKey, normalizeField } = require("./da-verbs-owner-path");
const { normalizeText } = require("./da-verbs-signed-decisions");

const STATUS = "(?:LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)";
const FPR_ROW = /^\|\s*(DA-VERB-FPR-\d+)\s*\|/;

function normalizeSignedMarkdown(md) {
  return md.replace(/\\\|/g, "|");
}

function joinPipeRows(md) {
  const lines = normalizeSignedMarkdown(md).split("\n");
  const joined = [];
  let buffer = "";
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (FPR_ROW.test(line)) {
      if (buffer) joined.push(buffer.trim());
      buffer = line;
      continue;
    }
    if (buffer && line.trim()) buffer = `${buffer} ${line.trim()}`;
  }
  if (buffer) joined.push(buffer.trim());
  return joined;
}

function parseFprPipeRow(line) {
  if (!FPR_ROW.test(line)) return null;
  const parts = line.split("|").map((p) => p.trim());
  if (parts.length < 11) return null;

  const auditId = parts[1];
  const cardId = parts[2].replace(/`/g, "");
  const field = parts[3].replace(/`/g, "");
  const deContext = parts[4];
  const currentDa = parts[5];
  const proposedDa = parts[6];
  const severity = parts[7];
  const status = parts[8];
  const ownerDecision = normalizeText(parts[9]);

  if (!/^DA-VERB-FPR-\d+$/.test(auditId)) return null;
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

function parseFinalPostRepairDecisionFile(filePath) {
  const md = fs.readFileSync(filePath, "utf8");
  const rows = [];
  for (const joined of joinPipeRows(md)) {
    const row = parseFprPipeRow(joined);
    if (row) rows.push({ ...row, source: path.basename(filePath) });
  }
  return rows;
}

function listFinalPostRepairSignedFiles() {
  const reports = path.join(ROOT, "reports");
  const names = [
    "da-verbs-owner-decisions-final-post-repair-signed.md",
    "da-verbs-owner-decisions-final-post-repair-micro-signed.md",
  ];
  return names
    .map((name) => path.join(reports, name))
    .filter((f) => fs.existsSync(f));
}

function parseAllFinalPostRepairDecisions() {
  const files = listFinalPostRepairSignedFiles();
  const rows = [];
  for (const f of files) rows.push(...parseFinalPostRepairDecisionFile(f));
  return { files, rows };
}

function dedupeFinalPostRepairLabot(rows) {
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
    byKey.set(key, {
      ...row,
      ownerNew,
      key,
      field: normalizeField(row.field),
    });
  }
  return {
    labot: [...byKey.values()],
    conflicts,
  };
}

module.exports = {
  parseFinalPostRepairDecisionFile,
  listFinalPostRepairSignedFiles,
  parseAllFinalPostRepairDecisions,
  dedupeFinalPostRepairLabot,
};
