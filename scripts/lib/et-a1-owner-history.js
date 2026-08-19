"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./audit-common");

const HISTORY_SOURCES = [
  {
    id: "owner-accepted-all",
    gitRef: "origin/cursor/et-de-a1-full-audit-ba9e:reports/et-a1-owner-accepted-all.md",
    local: path.join(ROOT, "reports/et-a1-owner-accepted-all.md"),
  },
  {
    id: "missing-study-accepted",
    gitRef: "origin/cursor/et-de-a1-full-audit-ba9e:reports/et-a1-missing-study-owner-decisions-accepted.md",
    local: path.join(ROOT, "reports/et-a1-missing-study-owner-decisions-accepted.md"),
  },
];

function loadSourceText(source) {
  if (fs.existsSync(source.local)) {
    return fs.readFileSync(source.local, "utf8");
  }
  try {
    return execSync(`git show ${source.gitRef}`, { cwd: ROOT, encoding: "utf8", stdio: "pipe" });
  } catch {
    return "";
  }
}

function normalizePath(field) {
  return String(field || "")
    .replace(/^study\./, "")
    .replace(/^entry\[\d+\]\./, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function parseOwnerTable(md) {
  const rows = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("| ET-A1-")) continue;
    const cols = line.split("|").map((c) => c.trim()).filter(Boolean);
    if (cols.length < 6) continue;
    const [auditId, cardId, field, current, approved, status] = cols;
    if (!/^ET-A1-\d+$/.test(auditId)) continue;
    rows.push({
      auditId,
      cardId,
      field,
      ownerPrevious: current,
      ownerApprovedValue: approved,
      ownerStatus: status,
    });
  }
  return rows;
}

function loadOwnerHistory() {
  const entries = [];
  const byKey = new Map();
  const sourcesLoaded = [];

  for (const source of HISTORY_SOURCES) {
    const text = loadSourceText(source);
    if (!text) continue;
    sourcesLoaded.push(source.id);
    for (const row of parseOwnerTable(text)) {
      entries.push({ ...row, source: source.id });
      const key = `${row.cardId}|${normalizePath(row.field)}`;
      if (!byKey.has(key)) byKey.set(key, row);
    }
  }

  return {
    loaded: sourcesLoaded.length > 0,
    sourcesLoaded,
    entries,
    byKey,
    count: entries.length,
  };
}

function valuesMatch(a, b) {
  const x = String(a || "").replace(/\s+/g, " ").trim();
  const y = String(b || "").replace(/\s+/g, " ").trim();
  return x === y;
}

function classifyWithOwnerHistory(finding, history, getCurrentValue) {
  const fieldNorm = normalizePath(finding.field);
  const key = `${finding.cardId}|${fieldNorm}`;
  let owner = history.byKey.get(key);

  if (!owner) {
    for (const [k, row] of history.byKey.entries()) {
      if (k.startsWith(`${finding.cardId}|`) && (fieldNorm.includes(normalizePath(row.field)) || normalizePath(row.field).includes(fieldNorm))) {
        owner = row;
        break;
      }
    }
  }

  if (!owner) {
    return {
      ownerHistoryStatus: null,
      validatedReal: true,
      auditClassification: "VALIDATED_REAL_FINDING",
    };
  }

  const current = getCurrentValue ? getCurrentValue(finding) : finding.currentEt;
  const matchesOwner = valuesMatch(current, owner.ownerApprovedValue);

  if (matchesOwner) {
    return {
      ownerHistoryStatus: "OWNER_DECISION_CONFIRMED",
      ownerApprovedValue: owner.ownerApprovedValue,
      ownerAuditId: owner.auditId,
      ownerSource: owner.source,
      validatedReal: false,
      auditClassification: "OWNER_HISTORY_MATCH",
    };
  }

  return {
    ownerHistoryStatus: "OWNER_DECISION_REOPEN_REQUIRED",
    ownerApprovedValue: owner.ownerApprovedValue,
    ownerAuditId: owner.auditId,
    ownerSource: owner.source,
    validatedReal: true,
    auditClassification: "VALIDATED_REAL_FINDING",
    reopenNote: "Production differs from OWNER-approved value; requires REOPEN_JUSTIFICATION for repair",
  };
}

module.exports = {
  loadOwnerHistory,
  classifyWithOwnerHistory,
  normalizePath,
};
