#!/usr/bin/env node
"use strict";
/**
 * Build merged DA Kurss OWNER apply map from group01–13 + audit JSON.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeOwnerPath } = require("./lib/da-kurss-owner-path");

const AUDIT_JSON = path.join(ROOT, "reports/temp/da-kurss-full-audit.json");
const OUT_JSON = path.join(ROOT, "reports/temp/da-kurss-owner-apply-map.json");

const STATUS_RE = /\*\*(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)\*\*/;

function extractCell(text) {
  let raw = String(text || "").trim();
  const m = raw.match(/^`([^`]+)`$/);
  if (m) return m[1];
  if (raw.startsWith("`") && raw.endsWith("`")) return raw.slice(1, -1);
  return raw;
}

function normalizeDecision(text) {
  return String(text || "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^`|`$/g, "");
}

function parseDecisionRow(line) {
  if (!line.startsWith("|")) return null;
  if (/^\|\s*[-:]+/.test(line)) return null;
  const cells = line
    .split("|")
    .slice(1, -1)
    .map((c) => c.trim());
  if (cells.length < 4 || !/^\d+$/.test(cells[0])) return null;

  const findingNum = parseInt(cells[0], 10);
  const findingId = extractCell(cells[1]);

  if (cells.length >= 10) {
    const statusMatch = cells[8].match(STATUS_RE);
    const status = statusMatch ? statusMatch[1] : cells[8].replace(/\*/g, "").trim();
    return {
      findingNum,
      findingId,
      status,
      ownerNew: normalizeDecision(cells[9] || ""),
      sourceFile: null,
    };
  }

  if (cells.length >= 9) {
    const statusMatch = cells[7].match(STATUS_RE);
    const status = statusMatch ? statusMatch[1] : cells[7].replace(/\*/g, "").trim();
    return {
      findingNum,
      findingId,
      status,
      ownerNew: normalizeDecision(cells[8] || ""),
      sourceFile: null,
    };
  }

  if (cells.length === 5) {
    const statusMatch = cells[3].match(STATUS_RE);
    const status = statusMatch ? statusMatch[1] : cells[3].replace(/\*/g, "").trim();
    return {
      findingNum,
      findingId,
      status,
      ownerNew: normalizeDecision(cells[4] || ""),
      sourceFile: null,
    };
  }

  if (cells.length === 6) {
    const statusMatch = cells[4].match(STATUS_RE);
    const status = statusMatch ? statusMatch[1] : cells[4].replace(/\*/g, "").trim();
    return {
      findingNum,
      findingId,
      status,
      ownerNew: normalizeDecision(cells[5] || ""),
      sourceFile: null,
    };
  }

  if (cells.length === 4) {
    const statusMatch = cells[2].match(STATUS_RE);
    const status = statusMatch ? statusMatch[1] : cells[2].replace(/\*/g, "").trim();
    return {
      findingNum,
      findingId,
      status,
      ownerNew: normalizeDecision(cells[3] || ""),
      sourceFile: null,
    };
  }

  return null;
}

function parseDecisionFile(filePath) {
  const md = fs.readFileSync(filePath, "utf8");
  const rows = [];
  let current = null;

  for (const line of md.split("\n")) {
    const row = parseDecisionRow(line);
    if (row) {
      if (current) rows.push(current);
      current = { ...row, sourceFile: path.basename(filePath) };
      continue;
    }
    if (current && line.trim() && /^\s{4,}/.test(line)) {
      current.ownerNew = normalizeDecision(`${current.ownerNew} ${line.trim()}`);
    }
  }
  if (current) rows.push(current);
  return rows;
}

function loadAuditIndex() {
  if (!fs.existsSync(AUDIT_JSON)) {
    throw new Error(`Audit JSON missing: ${AUDIT_JSON}`);
  }
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const byId = new Map();
  for (const f of audit.findings || []) {
    byId.set(f.id, f);
  }
  return byId;
}

function resolveDecisionFiles() {
  const signed = path.join(ROOT, "reports/da-kurss-owner-decisions-signed.md");
  if (fs.existsSync(signed)) {
    return [signed];
  }
  const groupFiles = [
    path.join(ROOT, "reports/da-kurss-owner-decisions-group01.md"),
    path.join(ROOT, "reports/da-kurss-owner-decisions-group02.md"),
  ];
  const legacyGroupFiles = Array.from({ length: 13 }, (_, i) =>
    path.join(ROOT, "reports", `da-kurss-owner-decisions-group${String(i + 1).padStart(2, "0")}.md`),
  );
  if (groupFiles.every((f) => fs.existsSync(f))) return groupFiles;
  if (legacyGroupFiles.every((f) => fs.existsSync(f))) return legacyGroupFiles;
  const main = path.join(ROOT, "reports/da-kurss-owner-decisions.md");
  if (fs.existsSync(main)) return [main];
  throw new Error("No OWNER decision files found (signed, group01/02, or main).");
}

function main() {
  const decisionFiles = resolveDecisionFiles();
  const allRows = [];
  for (const file of decisionFiles) {
    allRows.push(...parseDecisionFile(file));
  }

  const auditById = loadAuditIndex();
  const statuses = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0, NEEDS_SOURCE_REVIEW: 0, OTHER: 0 };
  const skipped = [];
  const apply = [];

  for (const row of allRows) {
    statuses[row.status] = (statuses[row.status] || 0) + 1;
    if (row.status !== "LABOT") continue;
    if (!row.ownerNew || /^Nemainīt/i.test(row.ownerNew)) {
      skipped.push({ ...row, reason: "EMPTY_OR_NEMAINĪT_NEW" });
      continue;
    }

    const audit = auditById.get(row.findingId);
    if (!audit) {
      skipped.push({ ...row, reason: "AUDIT_FINDING_NOT_FOUND" });
      continue;
    }
    if (!audit.path || audit.path.startsWith("data/") || audit.fieldType === "javascript") {
      skipped.push({ ...row, reason: "NON_FIELD_TARGET", auditPath: audit.path });
      continue;
    }

    apply.push({
      findingNum: row.findingNum,
      findingId: row.findingId,
      path: audit.path,
      normalizedPath: normalizeOwnerPath(audit.path),
      daCurrent: audit.daCurrent ?? "",
      ownerNew: row.ownerNew,
      deCurrent: audit.deCurrent || "",
      sourceFile: row.sourceFile,
      fieldType: audit.fieldType,
      lessonId: audit.lessonId,
    });
  }

  apply.sort((a, b) => a.findingNum - b.findingNum);

  const out = {
    generatedAt: new Date().toISOString(),
    decisionRows: allRows.length,
    ownerMappingsTotal: statuses.LABOT || 0,
    applyCount: apply.length,
    skipped,
    statusCounts: statuses,
    apply,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 2), "utf8");
  console.log(
    JSON.stringify(
      {
        decisionRows: out.decisionRows,
        ownerMappingsTotal: out.ownerMappingsTotal,
        applyCount: out.applyCount,
        skipped: out.skipped.length,
        statusCounts: out.statusCounts,
        out: OUT_JSON,
      },
      null,
      2,
    ),
  );
}

main();
