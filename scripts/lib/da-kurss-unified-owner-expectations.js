#!/usr/bin/env node
"use strict";
/**
 * Unified signed OWNER LABOT expectations: original repair (531) + FPR repair (155+).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { normalizeOwnerPath } = require("./da-kurss-owner-path");
const { normalizeText } = require("./da-kurss-final-post-repair-decisions");

const ORIGINAL_MAP = path.join(ROOT, "reports/temp/da-kurss-owner-apply-map.json");
const FPR_MAP = path.join(ROOT, "reports/temp/da-kurss-final-post-repair-owner-apply-map.json");

function loadApplyMap(filePath, track) {
  if (!fs.existsSync(filePath)) return [];
  const map = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return (map.apply || []).map((entry) => ({
    findingId: entry.findingId,
    path: entry.path,
    normalizedPath: entry.normalizedPath || normalizeOwnerPath(entry.path),
    ownerNew: normalizeText(entry.ownerNew),
    daCurrent: entry.daCurrent ?? "",
    track,
    source: path.basename(filePath),
  }));
}

function buildUnifiedOwnerExpectations() {
  const original = loadApplyMap(ORIGINAL_MAP, "original");
  const fpr = loadApplyMap(FPR_MAP, "final-post-repair");
  const byPath = new Map();
  const conflicts = [];

  for (const row of original) {
    byPath.set(row.normalizedPath, row);
  }
  for (const row of fpr) {
    const existing = byPath.get(row.normalizedPath);
    if (existing && normalizeText(existing.ownerNew) !== normalizeText(row.ownerNew)) {
      conflicts.push({ path: row.normalizedPath, original: existing, fpr: row });
    }
    byPath.set(row.normalizedPath, row);
  }

  return {
    expectations: [...byPath.values()],
    originalCount: original.length,
    fprCount: fpr.length,
    uniqueCount: byPath.size,
    conflicts,
  };
}

module.exports = { buildUnifiedOwnerExpectations, normalizeText };
