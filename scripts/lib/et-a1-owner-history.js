"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./audit-common");

const GIT_HISTORY_SOURCES = [
  {
    id: "owner-accepted-all",
    gitRef: "origin/cursor/et-de-a1-full-audit-ba9e:reports/et-a1-owner-accepted-all.md",
    local: path.join(ROOT, "reports/et-a1-owner-accepted-all.md"),
    parser: "pipe6",
  },
  {
    id: "missing-study-accepted",
    gitRef: "origin/cursor/et-de-a1-full-audit-ba9e:reports/et-a1-missing-study-owner-decisions-accepted.md",
    local: path.join(ROOT, "reports/et-a1-missing-study-owner-decisions-accepted.md"),
    parser: "pipe6",
  },
];

const LOCAL_HISTORY_SOURCES = [
  ["reports/et-a1-owner-decisions-accepted.md", "pipe6"],
  ["reports/et-a1-owner-decisions-accepted-v17.md", "pipe6"],
  ["reports/et-a1-owner-decisions-accepted-v17-full.md", "structured"],
  ["reports/et-a1-owner-decisions-accepted-v17-apply.md", "apply10"],
  ["reports/et-a1-owner-decisions-accepted-pr603-apply.md", "apply10"],
  ["reports/et-a1-owner-decisions-accepted-pr603-full.md", "structured"],
  ["reports/et-a1-owner-decisions-accepted-pr603.md", "structured"],
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

function parseOwnerTable(md, source) {
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
      source,
    });
  }
  return rows;
}

function parseApply10Table(md, source) {
  const rows = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("| ET-A1-")) continue;
    const cols = line.split("|").map((c) => c.trim()).filter(Boolean);
    if (cols.length < 9) continue;
    const [auditId, cardId, field, current, , , , status, approved] = cols;
    if (!/^ET-A1-\d+$/.test(auditId)) continue;
    if (String(status).toUpperCase() !== "LABOT") continue;
    rows.push({
      auditId,
      cardId,
      field,
      ownerPrevious: current,
      ownerApprovedValue: approved,
      ownerStatus: status,
      source,
    });
  }
  return rows;
}

function parseStructuredAccepted(md, source) {
  const rows = [];
  for (const block of md.split(/^## ET-A1-/m).slice(1)) {
    const auditId = `ET-A1-${block.split("\n")[0].trim()}`;
    const get = (label) => {
      const m = block.match(new RegExp(`\\*\\*${label}:\\*\\* \`?([^\`\n]+)\`?`));
      return m ? m[1].trim() : "";
    };
    const statusM = block.match(/\*\*Statuss?:\*\* \*\*([^*]+)\*\*/);
    const ownerNew = get("NEW");
    const status = statusM ? statusM[1].trim() : "";
    if (String(status).toUpperCase() !== "LABOT") continue;
    rows.push({
      auditId,
      cardId: get("Card ID"),
      field: get("Field/path"),
      ownerPrevious: get("CURRENT"),
      ownerApprovedValue: ownerNew === "—" ? "" : ownerNew,
      ownerStatus: status,
      source,
    });
  }
  return rows.filter((r) => r.cardId && r.field && r.ownerApprovedValue);
}

function parseByKind(md, kind, source) {
  if (kind === "pipe6") return parseOwnerTable(md, source);
  if (kind === "apply10") return parseApply10Table(md, source);
  if (kind === "structured") return parseStructuredAccepted(md, source);
  return [];
}

function loadOwnerHistory() {
  const entries = [];
  const byKey = new Map();
  const sourcesLoaded = [];

  const addRows = (rows, sourceId) => {
    if (!rows.length) return;
    sourcesLoaded.push(sourceId);
    for (const row of rows) {
      entries.push({ ...row, source: row.source || sourceId });
      const key = `${row.cardId}|${normalizePath(row.field)}`;
      if (!byKey.has(key)) byKey.set(key, row);
    }
  };

  for (const source of GIT_HISTORY_SOURCES) {
    const text = loadSourceText(source);
    if (!text) continue;
    addRows(parseByKind(text, source.parser, source.id), source.id);
  }

  for (const [rel, kind] of LOCAL_HISTORY_SOURCES) {
    const p = path.join(ROOT, rel);
    if (!fs.existsSync(p)) continue;
    addRows(parseByKind(fs.readFileSync(p, "utf8"), kind, rel), rel);
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
      if (
        k.startsWith(`${finding.cardId}|`) &&
        (fieldNorm.includes(normalizePath(row.field)) || normalizePath(row.field).includes(fieldNorm))
      ) {
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
