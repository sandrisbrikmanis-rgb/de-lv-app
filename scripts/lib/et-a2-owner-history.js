"use strict";

const fs = require("fs");
const path = require("path");
const { classifyWithOwnerHistory, normalizePath } = require("./et-a1-owner-history");
const { ROOT } = require("./audit-common");
const { mergeAcceptedWithPending, defaultAcceptedPaths } = require("./et-a2-owner-accepted-parse");

const APPLY_MAP = path.join(ROOT, "reports/temp/et-a2-owner-apply-map.json");
const ACCEPTED_MD = path.join(ROOT, "reports/et-a2-owner-decisions-accepted.md");

function loadFromApplyMap() {
  if (!fs.existsSync(APPLY_MAP)) return [];
  const data = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  return (data.apply || []).map((row) => ({
    auditId: row.auditId,
    cardId: row.cardId,
    field: row.rawField || row.field,
    ownerPrevious: row.current,
    ownerApprovedValue: row.ownerNew,
    ownerStatus: "LABOT",
    source: "et-a2-owner-apply-map",
  }));
}

function loadFromAcceptedMd() {
  if (!fs.existsSync(ACCEPTED_MD)) return [];
  const rows = [];
  for (const line of fs.readFileSync(ACCEPTED_MD, "utf8").split("\n")) {
    if (!line.startsWith("| ET-A2-")) continue;
    const cols = line.split("|").map((c) => c.trim()).filter(Boolean);
    if (cols.length < 5 || cols[0] === "Audit ID") continue;
    const [auditId, cardId, field, current, approved] = cols;
    if (!approved || approved.length < 3) continue;
    rows.push({
      auditId,
      cardId,
      field,
      ownerPrevious: current,
      ownerApprovedValue: approved,
      ownerStatus: "LABOT",
      source: "et-a2-owner-decisions-accepted.md",
    });
  }
  return rows;
}

function loadOwnerHistory() {
  const entries = [];
  const byKey = new Map();
  const sourcesLoaded = [];

  const addRows = (rows, sourceId) => {
    if (!rows.length) return;
    sourcesLoaded.push(sourceId);
    for (const row of rows) {
      entries.push(row);
      const key = `${row.cardId}|${normalizePath(row.field)}`;
      if (!byKey.has(key)) byKey.set(key, row);
    }
  };

  addRows(loadFromApplyMap(), "et-a2-owner-apply-map");
  addRows(loadFromAcceptedMd(), "et-a2-owner-decisions-accepted.md");

  try {
    const { merged } = mergeAcceptedWithPending(defaultAcceptedPaths());
    for (const row of merged) {
      const entry = {
        auditId: row.auditId,
        cardId: row.cardId,
        field: row.rawField || row.field,
        ownerPrevious: row.current,
        ownerApprovedValue: row.ownerNew,
        ownerStatus: "LABOT",
        source: "accepted-groups",
      };
      entries.push(entry);
      const key = `${entry.cardId}|${normalizePath(entry.field)}`;
      if (!byKey.has(key)) byKey.set(key, entry);
    }
    if (merged.length) sourcesLoaded.push("accepted-groups");
  } catch {
    /* optional */
  }

  return {
    loaded: sourcesLoaded.length > 0,
    sourcesLoaded,
    entries,
    byKey,
    count: entries.length,
    sourcesExpected: true,
  };
}

module.exports = {
  loadOwnerHistory,
  classifyWithOwnerHistory,
  normalizePath,
};
