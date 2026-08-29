#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("../audit-common");

const ABSOLUTE_PATH_PATTERNS = [
  /^\/workspace\//,
  /^\/home\//,
  /^\/Users\//,
  /^\/tmp\//,
  /^[A-Za-z]:\\/,
];

function toRepoRelativePath(value) {
  if (!value || typeof value !== "string") return value;
  const normalized = value.replace(/\\/g, "/");
  if (normalized.startsWith("reports/") || normalized.startsWith("data/")) return normalized;
  if (path.isAbsolute(normalized)) {
    const rel = path.relative(ROOT, normalized).replace(/\\/g, "/");
    if (!rel.startsWith("..")) return rel;
  }
  return normalized.replace(/^\.\//, "");
}

function isAbsoluteOperationalPath(value) {
  if (!value || typeof value !== "string") return false;
  const normalized = value.replace(/\\/g, "/");
  return ABSOLUTE_PATH_PATTERNS.some((re) => re.test(normalized));
}

function normalizeOperationalPaths(value, keyPath = "") {
  if (value == null) return value;
  if (typeof value === "string") {
    if (
      keyPath.endsWith("productionFile") ||
      keyPath.endsWith("Path") ||
      keyPath.endsWith("path") ||
      keyPath.endsWith("report") ||
      keyPath.includes("File")
    ) {
      return toRepoRelativePath(value);
    }
    if (isAbsoluteOperationalPath(value)) return toRepoRelativePath(value);
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((item, index) => normalizeOperationalPaths(item, `${keyPath}[${index}]`));
  }
  if (typeof value === "object") {
    const out = {};
    for (const [key, child] of Object.entries(value)) {
      out[key] = normalizeOperationalPaths(child, keyPath ? `${keyPath}.${key}` : key);
    }
    return out;
  }
  return value;
}

function findAbsoluteOperationalPaths(value, hits = [], keyPath = "") {
  if (value == null) return hits;
  if (typeof value === "string" && isAbsoluteOperationalPath(value)) {
    hits.push({ path: keyPath, value });
    return hits;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => findAbsoluteOperationalPaths(item, hits, `${keyPath}[${index}]`));
    return hits;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      findAbsoluteOperationalPaths(child, hits, keyPath ? `${keyPath}.${key}` : key);
    }
  }
  return hits;
}

function buildPhase1MatrixSkeleton({ originMainSha, masterVersion, status, mode = "READ_ONLY" }) {
  return {
    phase: 1,
    status: status || "PHASE_0_INFRASTRUCTURE_COMPLETION",
    originMainSha: originMainSha || null,
    masterVersion: masterVersion || "1.17",
    ownerDecisionRef: "OWNER-APPROVED-2026-08-29",
    generatedAt: new Date().toISOString(),
    mode,
    productionChanges: 0,
    scope: {
      expected: 320,
      processed: 0,
      notApplicable: 2,
      lunaApplicable: 318,
      inventoryApplicable: 309,
      multiScanApplicable: 309,
    },
    summary: [],
    findings: [],
    totals: {
      findingsRaw: 0,
      findingsValidated: 0,
      findingsExcluded: 0,
    },
    constraints: {
      productionChanges: 0,
      deChanges: 0,
      lunaCalls: 0,
      crowdinProductionImport: 0,
      translationApply: 0,
    },
    lunaStats: {
      lunaScopesExpected: 0,
      lunaScopesProcessed: 0,
      lunaCalls: 0,
      lunaSuccessfulBatches: 0,
      lunaRetryAttempts: 0,
      status: "NOT_RUN",
    },
  };
}

module.exports = {
  toRepoRelativePath,
  isAbsoluteOperationalPath,
  normalizeOperationalPaths,
  findAbsoluteOperationalPaths,
  buildPhase1MatrixSkeleton,
};
