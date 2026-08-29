"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");

const AUTH_DIR = path.join(ROOT, "reports/owner-authority");
const FILLED_FILES = [
  "fr-a1-owner-decisions-001-100-filled.md",
  "fr-a1-owner-decisions-101-200-filled.md",
  "fr-a1-owner-decisions-201-300-filled.md",
  "fr-a1-owner-decisions-301-400-filled.md",
  "fr-a1-owner-decisions-401-500-filled.md",
  "fr-a1-owner-decisions-501-600-filled.md",
  "fr-a1-owner-decisions-601-702-filled.md",
];

function splitMdRow(line) {
  const cells = line.split("|");
  cells.shift();
  if (cells.length && cells[cells.length - 1].trim() === "") cells.pop();
  return cells.map((c) => c.trim());
}

function parseFilledTable(text, source) {
  const rows = [];
  for (const line of text.split("\n")) {
    if (!line.startsWith("|") || line.includes("Card #") || /^\|[-:\s|]+\|$/.test(line)) continue;
    const p = splitMdRow(line);
    if (p.length < 8) continue;
    const status = p[5].replace(/\*\*/g, "").toUpperCase();
    if (status !== "LABOT" && status !== "NELABOT") continue;
    rows.push({
      cardId: p[1],
      field: p[3],
      ownerPrevious: p[4].replace(/\*\*/g, ""),
      ownerApprovedValue: status === "LABOT" ? p[6].replace(/\*\*/g, "") : p[4].replace(/\*\*/g, ""),
      ownerStatus: status,
      source,
    });
  }
  return rows;
}

function normalizePath(field) {
  return String(field || "")
    .replace(/^study\./, "")
    .replace(/^entry\./, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

function loadOwnerHistory() {
  const entries = [];
  const byKey = new Map();
  const sourcesLoaded = [];

  for (const name of FILLED_FILES) {
    const filePath = path.join(AUTH_DIR, name);
    if (!fs.existsSync(filePath)) continue;
    const rows = parseFilledTable(fs.readFileSync(filePath, "utf8"), name);
    if (!rows.length) continue;
    sourcesLoaded.push(name);
    for (const row of rows) {
      entries.push(row);
      const key = `${row.cardId}|${normalizePath(row.field)}`;
      if (!byKey.has(key)) byKey.set(key, row);
    }
  }

  return {
    loaded: sourcesLoaded.length > 0,
    sourcesLoaded,
    sourcesExpected: true,
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

function classifyWithOwnerHistory(finding, history) {
  const fieldNorm = normalizePath(finding.field);
  const key = `${finding.cardId}|${fieldNorm}`;
  let owner = history?.byKey?.get(key);

  if (!owner && history?.byKey) {
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
      auditClassification: finding.source === "gpt-5.6-luna" ? "VALIDATED_REAL_FINDING" : "DETERMINISTIC_FINDING",
    };
  }

  const current = finding.currentFr || finding.currentEt || "";
  const expected =
    String(owner.ownerStatus || "").toUpperCase() === "LABOT"
      ? owner.ownerApprovedValue
      : owner.ownerPrevious;
  const matchesOwner = valuesMatch(current, expected);

  if (matchesOwner) {
    return {
      ownerHistoryStatus: "OWNER_DECISION_CONFIRMED",
      ownerApprovedValue: expected,
      ownerSource: owner.source,
      validatedReal: false,
      auditClassification: "OWNER_HISTORY_MATCH",
    };
  }

  return {
    ownerHistoryStatus: "OWNER_DECISION_REOPEN_REQUIRED",
    ownerApprovedValue: expected,
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
