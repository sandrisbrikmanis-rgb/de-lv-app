#!/usr/bin/env node
"use strict";
/**
 * Parse DA–DE Kurss final closure (FCA) OWNER signed decisions.
 * Supports standard pipe tables and Word-export wide-table format.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const {
  classifyFromDecision,
  normalizeText,
} = require("./da-kurss-final-post-repair-decisions");

const AUDIT_JSON = path.join(ROOT, "reports/temp/da-kurss-final-closure-audit.json");
const DEFAULT_SIGNED = path.join(ROOT, "reports/da-kurss-owner-decisions-final-closure-signed.md");

const STATUS = "(?:LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW|PENDING)";

function findingNum(auditId) {
  const m = String(auditId || "").match(/DA-KURSS-FCA-(\d+)/);
  return m ? Number(m[1]) : 0;
}

function loadAuditRows() {
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  return [...(audit.validatedFindings || []), ...(audit.lowFindings || [])].sort(
    (a, b) => findingNum(a.id) - findingNum(b.id) || String(a.path).localeCompare(String(b.path)),
  );
}

function parseWordRows(md) {
  const rows = [];
  const re = /^\s*(\d+)\s+(DA-KURSS-FCA-\d{4})\s+`([^`]+)`\s+`([^`]+)`(.*)$/gm;
  let m;
  while ((m = re.exec(md)) !== null) {
    const rest = m[5];
    const statusMatch = rest.match(new RegExp(`\\b(${STATUS})\\b`));
    const status = statusMatch ? statusMatch[1] : "UNKNOWN";
    const ownerDecision = statusMatch ? normalizeText(rest.slice(statusMatch.index + statusMatch[0].length)) : "";
    rows.push({
      num: Number(m[1]),
      auditId: m[2],
      lessonId: m[3],
      path: m[4],
      status,
      ownerDecision,
    });
  }
  return rows;
}

function isApplyableLabotFca(row) {
  const ownerNew = normalizeText(row.ownerDecision);
  const pathValue = row.path || "";
  if (!ownerNew || ownerNew === "—" || ownerNew === "-") return false;
  if (/^(Nav droši|Nepieciešam|Saglabāt CURRENT)/i.test(ownerNew)) return false;
  if (pathValue.includes("legacyHtml#")) return true;
  if (pathValue.includes("legacyHtml")) return true;
  return true;
}

function normalizeClosurePath(pathValue) {
  let p = String(pathValue || "").trim();
  const legacyTail = p.match(/^(COURSE_LESSON_DATA\.\w+\.legacyHtml)\s*>/);
  if (legacyTail) return legacyTail[1];
  return p;
}

function dedupeLabotFca(rows, normalizeOwnerPath) {
  const byPath = new Map();
  const conflicts = [];
  const skipped = [];

  const sorted = [...rows].sort((a, b) => a.num - b.num);

  for (const row of sorted) {
    if (row.status !== "LABOT") continue;
    const ownerNew = normalizeText(row.ownerDecision);
    if (!ownerNew || ownerNew === "—" || ownerNew === "-") {
      skipped.push({ ...row, reason: "EMPTY_OWNER_DECISION" });
      continue;
    }
    if (!isApplyableLabotFca({ ...row, ownerDecision: ownerNew })) {
      skipped.push({ ...row, reason: "NOT_APPLYABLE" });
      continue;
    }
    if (!row.path || row.path.startsWith("data/") || row.fieldType === "javascript") {
      skipped.push({ ...row, reason: "NON_FIELD_TARGET", auditPath: row.path });
      continue;
    }

    const resolvedPath = normalizeClosurePath(row.path);
    const normalizedPath = normalizeOwnerPath(resolvedPath);
    const key = normalizedPath;
    const enriched = {
      ...row,
      ownerNew,
      path: resolvedPath,
      normalizedPath,
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
    labot: [...byPath.values()].sort((a, b) => a.num - b.num),
    conflicts,
    skipped,
  };
}

function parsePipeRows(md) {
  const rows = [];
  const re =
    /\|\s*(\d+)\s*\|\s*(DA-KURSS-FCA-\d{4})\s*\|\s*`([^`]+)`\s*\|\s*`([^`\\]+(?:\\.[^`\\]*)*)`\s*\|(?:[^|]*\|){5}\s*(LABOT|NELABOT|FALSE_POSITIVE|NEEDS_SOURCE_REVIEW|PENDING)\s*\|\s*([^|]*)\|/g;
  let m;
  while ((m = re.exec(md)) !== null) {
    rows.push({
      num: Number(m[1]),
      auditId: m[2],
      lessonId: m[3],
      path: m[4].replace(/\\`/g, "`"),
      status: m[5],
      ownerDecision: normalizeText(m[6]),
    });
  }

  // Row 131 often breaks in Word export — fallback by audit id tail block.
  if (!rows.some((r) => r.num === 131) && md.includes("DA-KURSS-FCA-0116")) {
    const tail = md.match(
      /\|\s*131\s*\|\s*(DA-KURSS-FCA-0116)\s*\|\s*`([^`]+)`\s*\|\s*`([^`|]+)`[\s\S]*?\|\s*(LABOT|NELABOT|FALSE_POSITIVE|NEEDS_SOURCE_REVIEW|PENDING)\s*\|\s*([^|]*)\|/,
    );
    if (tail) {
      rows.push({
        num: 131,
        auditId: tail[1],
        lessonId: tail[2],
        path: tail[3].replace(/\\`/g, "`").trim(),
        status: tail[4],
        ownerDecision: normalizeText(tail[5]),
      });
    }
  }
  return rows;
}

function parseStandardTableRows(md) {
  const rows = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("|") || /^\|\s*[-:#]/.test(line)) continue;
    const cells = line.split("|").slice(1, -1).map((c) => c.trim());
    if (cells.length !== 11 || !/^\d+$/.test(cells[0]) || !/^DA-KURSS-FCA-/.test(cells[1])) continue;
    rows.push({
      num: Number(cells[0]),
      auditId: cells[1],
      lessonId: cells[2].replace(/`/g, ""),
      path: cells[3].replace(/`/g, ""),
      status: cells[9].replace(/\*/g, "").trim(),
      ownerDecision: normalizeText(cells[10]),
    });
  }
  return rows;
}

function mergeRows(chunks) {
  const byNum = new Map();
  for (const chunk of chunks) {
    for (const row of chunk) {
      if (row.num > 0) byNum.set(row.num, row);
    }
  }
  return [...byNum.values()].sort((a, b) => a.num - b.num);
}

function parseSignedDecisionFile(filePath) {
  const md = fs.readFileSync(filePath, "utf8");
  const rows = mergeRows([parseStandardTableRows(md), parseWordRows(md), parsePipeRows(md)]);
  const auditRows = loadAuditRows();

  return rows.map((row) => {
    const audit = auditRows[row.num - 1] || {};
    let ownerDecision = row.ownerDecision;
    let status = row.status;
    if (status === "UNKNOWN") {
      status = classifyFromDecision(ownerDecision, "");
    }
    if (status === "LABOT" && !ownerDecision) {
      ownerDecision = normalizeText(audit.proposedDa || "");
    }
    if (status === "LABOT" && ownerDecision.endsWith("…")) {
      ownerDecision = normalizeText(audit.proposedDa || ownerDecision);
    }
    if (status === "LABOT" && /\.legacyHtml/.test(audit.path || row.path) && ownerDecision && !ownerDecision.startsWith("<")) {
      if (!ownerDecision.includes(" ") && audit.proposedDa?.startsWith("<")) {
        ownerDecision = normalizeText(audit.proposedDa);
      }
    }
    return {
      num: row.num,
      auditId: audit.id || row.auditId,
      lessonId: audit.lessonId || row.lessonId,
      path: audit.path || row.path,
      currentDa: audit.daCurrent || "",
      proposedDa: audit.proposedDa || "",
      severity: audit.severity || "",
      category: audit.category || "",
      ownerDecision,
      status: classifyFromDecision(ownerDecision, status),
      source: path.basename(filePath),
    };
  });
}

function parseSignedDecisions(filePath = DEFAULT_SIGNED) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Missing signed file: ${filePath}`);
  }
  return parseSignedDecisionFile(filePath);
}

function buildApplyRows(rows, normalizeOwnerPath) {
  const auditRows = loadAuditRows();
  const auditByNum = new Map(auditRows.map((f, i) => [i + 1, f]));
  const enriched = rows.map((row) => {
    const audit = auditByNum.get(row.num) || {};
    return {
      ...row,
      auditId: audit.id || row.auditId,
      lessonId: row.lessonId || audit.lessonId || "",
      path: audit.path || row.path,
      currentDa: audit.daCurrent || row.currentDa || "",
      proposedDa: audit.proposedDa || row.proposedDa || "",
      fieldType: audit.fieldType || "",
      deCurrent: audit.deCurrent || "",
    };
  });

  return dedupeLabotFca(enriched, normalizeOwnerPath);
}

module.exports = {
  DEFAULT_SIGNED,
  loadAuditRows,
  parseSignedDecisionFile,
  parseSignedDecisions,
  buildApplyRows,
  findingNum,
};
