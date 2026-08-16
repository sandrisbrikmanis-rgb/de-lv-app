#!/usr/bin/env node
"use strict";
/**
 * Parse DA–DE Kurss final post-repair + NSR carry-forward OWNER signed decisions.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");

const STATUS = "(?:LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)";

function normalizeText(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^`|`$/g, "");
}

function classifyFromDecision(dec, explicitStatus) {
  const status = String(explicitStatus || "").replace(/\*/g, "").trim();
  if (status && new RegExp(`^${STATUS}$`).test(status)) return status;

  const d = normalizeText(dec);
  if (!d) return "EMPTY";
  if (/^Saglabāt CURRENT_DA/i.test(d)) return "FALSE_POSITIVE";
  if (
    /^Nav droši/i.test(d) ||
    /^Nepieciešam/i.test(d) ||
    /^Atradums ir reāls/i.test(d) ||
    /Nepieciešams pilns/i.test(d) ||
    /Reāla problēma.*legacyHtml/i.test(d) ||
    /neapstiprināt saīsinātu/i.test(d) ||
    /drošam COPY-ONLY vajadzīgs pilns/i.test(d)
  ) {
    return "NEEDS_SOURCE_REVIEW";
  }
  if (/DE = STRICT READ-ONLY/i.test(d) && !/^[A-Za-zÆØÅæøåÄÖÜäöü]/.test(d)) {
    return "NEEDS_SOURCE_REVIEW";
  }
  if (/^Nelab/i.test(d)) return "NELABOT";
  return "LABOT";
}

function parseReviewBlock(block) {
  const id = (block.match(/\*\*Audit ID:\*\* (DA-KURSS-[^\n]+)/) || [])[1];
  if (!id) return null;

  const lessonId = (block.match(/\*\*Lesson\/ID:\*\* `([^`]+)`/) || [])[1] || "";
  const auditPath = (block.match(/\*\*Path:\*\* `([^`]+)`/) || [])[1] || "";
  const currentDa = (block.match(/\*\*CURRENT_DA:\*\* ([^\n]+)/) || [])[1] || "";
  const proposedDa = (block.match(/\*\*PROPOSED_DA:\*\* ([^\n]+)/) || [])[1] || "";
  const severity = (block.match(/\*\*Severity:\*\* ([^\n]+)/) || [])[1] || "";
  const category = (block.match(/\*\*Category:\*\* ([^\n]+)/) || [])[1] || "";
  const ownerDecision = normalizeText((block.match(/\*\*OWNER_DECISION:\*\* ([^\n]+)/) || [])[1] || "");

  return {
    auditId: id,
    lessonId,
    path: auditPath,
    currentDa,
    proposedDa,
    severity,
    category,
    ownerDecision,
    status: classifyFromDecision(ownerDecision),
  };
}

function parseReviewFormat(md) {
  const rows = [];
  for (const block of md.split(/^## /m).slice(1)) {
    const row = parseReviewBlock(block);
    if (row) rows.push(row);
  }
  return rows;
}

function parseCompactTableRow(cells) {
  if (cells.length !== 4 || !/^\d+$/.test(cells[0])) return null;
  const auditId = cells[1];
  if (!/^DA-KURSS-/.test(auditId)) return null;
  const status = cells[2].replace(/\*/g, "").trim();
  const ownerDecision = normalizeText(cells[3]);
  return {
    auditId,
    lessonId: "",
    path: "",
    currentDa: "",
    proposedDa: "",
    severity: "",
    category: "",
    ownerDecision,
    status: classifyFromDecision(ownerDecision, status),
  };
}

function parseNsrTableRow(cells) {
  if (cells.length < 10 || !/^\d+$/.test(cells[0])) return null;
  const auditId = cells[1];
  if (!/^DA-KURSS-/.test(auditId)) return null;
  const status = cells[8].replace(/\*/g, "").trim();
  const ownerDecision = normalizeText(cells[9]);
  return {
    auditId,
    lessonId: cells[2].replace(/`/g, ""),
    path: cells[3].replace(/`/g, ""),
    currentDa: cells[5],
    proposedDa: cells[6],
    severity: cells[7],
    category: "",
    ownerDecision,
    status: classifyFromDecision(ownerDecision, status),
  };
}

function parseTableFormat(md) {
  const rows = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("|") || /^\|\s*[-:#]/.test(line)) continue;
    const cells = line.split("|").slice(1, -1).map((c) => c.trim());
    const row = cells.length === 4 ? parseCompactTableRow(cells) : parseNsrTableRow(cells);
    if (row) rows.push(row);
  }
  return rows;
}

function parseSignedDecisionFile(filePath) {
  const md = fs.readFileSync(filePath, "utf8");
  const hasReviewBlocks = /\*\*Audit ID:\*\* DA-KURSS-/.test(md);
  const rows = hasReviewBlocks ? parseReviewFormat(md) : parseTableFormat(md);
  return rows.map((row) => ({ ...row, source: path.basename(filePath) }));
}

function listSignedFiles() {
  const reports = path.join(ROOT, "reports");
  const fpr = Array.from({ length: 5 }, (_, i) =>
    path.join(
      reports,
      `da-kurss-owner-decisions-final-post-repair-group${String(i + 1).padStart(2, "0")}-signed.md`,
    ),
  );
  const nsr = [1, 2].map((i) =>
    path.join(reports, `da-kurss-owner-decisions-nsr-carryforward-group${String(i).padStart(2, "0")}-signed.md`),
  );
  return [...fpr, ...nsr].filter((f) => fs.existsSync(f));
}

function parseAllSignedDecisions() {
  const files = listSignedFiles();
  const rows = [];
  for (const f of files) rows.push(...parseSignedDecisionFile(f));
  return { files, rows };
}

function applyKey(pathValue, auditId) {
  return `${pathValue || ""}::${auditId || ""}`;
}

function findingSortKey(auditId) {
  const fpr = String(auditId || "").match(/DA-KURSS-FPR-(\d+)/);
  if (fpr) return Number(fpr[1]);
  const num = String(auditId || "").match(/DA-KURSS-(\d+)/);
  if (num) return Number(num[1]);
  return 0;
}

function isApplyableLabot(row) {
  const ownerNew = normalizeText(row.ownerDecision);
  const pathValue = row.path || "";
  if (pathValue.includes("legacyHtml") && !ownerNew.startsWith("<")) {
    return false;
  }
  return true;
}

function dedupeLabot(rows, auditById, normalizeOwnerPath) {
  const byPath = new Map();
  const conflicts = [];
  const skipped = [];

  const sorted = [...rows].sort((a, b) => findingSortKey(a.auditId) - findingSortKey(b.auditId));

  for (const row of sorted) {
    if (row.status !== "LABOT") continue;
    const ownerNew = normalizeText(row.ownerDecision);
    if (!ownerNew || ownerNew === "—" || ownerNew === "-") {
      skipped.push({ ...row, reason: "EMPTY_OWNER_DECISION" });
      continue;
    }

    const audit = auditById.get(row.auditId);
    const auditPath = row.path || audit?.path || "";
    if (!auditPath || auditPath.startsWith("data/") || audit?.fieldType === "javascript") {
      skipped.push({ ...row, reason: "NON_FIELD_TARGET", auditPath });
      continue;
    }

    if (!isApplyableLabot({ ...row, path: auditPath, ownerDecision: ownerNew })) {
      skipped.push({ ...row, reason: "LEGACY_HTML_PARTIAL_OR_NOTE", auditPath });
      continue;
    }

    const normalizedPath = normalizeOwnerPath(auditPath);
    const key = normalizedPath;
    const enriched = {
      ...row,
      ownerNew,
      path: auditPath,
      normalizedPath,
      daCurrent: row.currentDa || audit?.daCurrent || "",
      deCurrent: audit?.deCurrent || "",
      fieldType: audit?.fieldType || "",
      lessonId: row.lessonId || audit?.lessonId || "",
      key,
    };

    const existing = byPath.get(key);
    if (existing && normalizeText(existing.ownerNew) !== ownerNew) {
      conflicts.push({ key, a: existing, b: enriched });
      byPath.set(key, enriched);
      continue;
    }
    byPath.set(key, enriched);
  }

  return {
    labot: [...byPath.values()].sort((a, b) => findingSortKey(a.auditId) - findingSortKey(b.auditId)),
    conflicts,
    skipped,
  };
}

module.exports = {
  classifyFromDecision,
  parseSignedDecisionFile,
  listSignedFiles,
  parseAllSignedDecisions,
  dedupeLabot,
  applyKey,
  normalizeText,
};
