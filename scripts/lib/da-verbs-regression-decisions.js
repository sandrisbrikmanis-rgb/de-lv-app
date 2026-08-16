#!/usr/bin/env node
"use strict";
/**
 * Parse DA–DE Verbs regression OWNER signed decision files (RR/RL format).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { applyKey, normalizeField } = require("./da-verbs-owner-path");
const { normalizeText } = require("./da-verbs-signed-decisions");

const STATUS = "(?:LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)";
const REG_ROW = /^\|\s*(DA-VERB-R[RL]-\d+)\s*\|/;

function normalizeSignedMarkdown(md) {
  return md.replace(/\\\|/g, "|");
}

function joinPipeRows(md) {
  const lines = normalizeSignedMarkdown(md).split("\n");
  const joined = [];
  let buffer = "";
  for (const raw of lines) {
    const line = raw.trimEnd();
    if (REG_ROW.test(line)) {
      if (buffer) joined.push(buffer.trim());
      buffer = line;
      continue;
    }
    if (buffer && line.trim()) buffer = `${buffer} ${line.trim()}`;
  }
  if (buffer) joined.push(buffer.trim());
  return joined;
}

function parseRegressionPipeRow(line) {
  if (!REG_ROW.test(line)) return null;
  const parts = line.split("|").map((p) => p.trim());
  if (parts.length < 11) return null;

  const regId = parts[1];
  const origAuditId = parts[2];
  const cardId = parts[3].replace(/`/g, "");
  const field = parts[4].replace(/`/g, "");
  const deContext = parts[5];
  const currentDa = parts[6];
  const proposedDa = parts[7];
  const severity = parts[8];
  const status = parts[9];
  const ownerDecision = normalizeText(parts[10]);

  if (!/^DA-VERB-R[RL]-\d+$/.test(regId)) return null;
  if (!/^verb-\d+$/.test(cardId)) return null;
  if (!new RegExp(`^${STATUS}$`).test(status)) return null;

  return {
    regId,
    auditId: origAuditId,
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

function parseRegressionDecisionFile(filePath) {
  const md = fs.readFileSync(filePath, "utf8");
  const rows = [];
  for (const joined of joinPipeRows(md)) {
    const row = parseRegressionPipeRow(joined);
    if (row) rows.push({ ...row, source: path.basename(filePath) });
  }
  return rows;
}

function listRegressionSignedFiles() {
  const reports = path.join(ROOT, "reports");
  if (!fs.existsSync(reports)) return [];
  return fs
    .readdirSync(reports)
    .filter(
      (f) =>
        /^da-verbs-owner-decisions-regression-reapply-signed-group\d+\.md$/i.test(f) ||
        /^da-verbs-owner-decisions-regression-linguistic-signed\.md$/i.test(f)
    )
    .sort()
    .map((f) => path.join(reports, f));
}

function parseAllRegressionDecisions() {
  const files = listRegressionSignedFiles();
  const rows = [];
  for (const f of files) rows.push(...parseRegressionDecisionFile(f));
  return { files, rows };
}

function dedupeRegressionLabot(rows) {
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
    labot: [...byKey.values()].sort((a, b) => a.regId.localeCompare(b.regId)),
    conflicts,
  };
}

module.exports = {
  parseRegressionPipeRow,
  parseRegressionDecisionFile,
  listRegressionSignedFiles,
  parseAllRegressionDecisions,
  dedupeRegressionLabot,
};
