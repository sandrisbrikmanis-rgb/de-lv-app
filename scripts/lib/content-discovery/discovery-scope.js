#!/usr/bin/env node
"use strict";

const { CONTENT_LANGUAGES } = require("../content-crowdin-bridge/constants");

function scopeKey(group, dataset, lang) {
  return `${group}/${dataset}/${lang}`;
}

function expectedStructuralCollector(group, dataset) {
  if (group === "g2") return "g2";
  if (group === "g1" && dataset === "sentences") return "g1-sentences";
  if (group === "g1" && dataset === "verbs") return "g1-verbs";
  if (group === "g1" && dataset === "training") return "g1-training";
  if (group === "g3" && dataset === "courseLessons") return "g3-courseLessons";
  return null;
}

function buildExpectedDiscoveryScopes(langs, datasetsByGroup) {
  const scopes = [];
  for (const [group, datasets] of Object.entries(datasetsByGroup)) {
    for (const dataset of datasets) {
      for (const lang of langs) {
        scopes.push({
          group,
          dataset,
          lang,
          key: scopeKey(group, dataset, lang),
          structuralCollector: expectedStructuralCollector(group, dataset),
        });
      }
    }
  }
  return scopes;
}

function evaluateStructuralScopeCoverage(discovery, expectedScopes) {
  const executedByKey = new Map();
  for (const row of discovery?.summary || []) {
    executedByKey.set(scopeKey(row.group, row.dataset, row.lang), row);
  }

  const missing = [];
  const wrongCollector = [];

  for (const exp of expectedScopes) {
    const row = executedByKey.get(exp.key);
    if (!row) {
      missing.push(exp);
      continue;
    }
    if (!row.structuralCollector) {
      missing.push({ ...exp, reason: "structuralCollector missing on summary row" });
      continue;
    }
    if (row.structuralCollector !== exp.structuralCollector) {
      wrongCollector.push({
        key: exp.key,
        expected: exp.structuralCollector,
        actual: row.structuralCollector,
      });
    }
  }

  const notApplicable = (discovery?.summary || [])
    .filter((row) => row.applicability === "EXPECTED_NOT_APPLICABLE")
    .map((row) => ({
      key: scopeKey(row.group, row.dataset, row.lang),
      group: row.group,
      dataset: row.dataset,
      lang: row.lang,
      note: row.note,
    }));

  return {
    pass: missing.length === 0 && wrongCollector.length === 0,
    expectedCount: expectedScopes.length,
    executedCount: executedByKey.size,
    missing: missing.slice(0, 30),
    missingCount: missing.length,
    wrongCollector: wrongCollector.slice(0, 20),
    wrongCollectorCount: wrongCollector.length,
    expectedNotApplicable: notApplicable,
  };
}

/** Only g1-training/et may be skipped in round-trip (no courseTrainingCards.js). */
const ALLOWED_ROUNDTRIP_SKIP_KEYS = new Set(["g1-training/et"]);

function roundTripSkipKey(result) {
  const group = result.group || "";
  const lang = result.lang || "";
  return `${group}/${lang}`;
}

function isAllowedRoundTripSkip(result) {
  if (!result.skipped) return true;
  return ALLOWED_ROUNDTRIP_SKIP_KEYS.has(roundTripSkipKey(result));
}

function evaluateRoundTripGates(roundTrips) {
  const unexpectedSkips = roundTrips.filter((r) => r.skipped && !isAllowedRoundTripSkip(r));
  const allowedSkips = roundTrips.filter((r) => r.skipped && isAllowedRoundTripSkip(r));
  const failures = roundTrips.filter((r) => !r.pass && !r.skipped);
  const passes = roundTrips.filter((r) => r.pass);

  return {
    pass: failures.length === 0 && unexpectedSkips.length === 0,
    passed: passes.length,
    failed: failures.length,
    skipped: roundTrips.filter((r) => r.skipped).length,
    allowedSkips: allowedSkips.map((r) => ({
      key: roundTripSkipKey(r),
      lang: r.lang,
      group: r.group,
      reason: r.reason,
      status: "EXPECTED_NOT_APPLICABLE",
    })),
    unexpectedSkips: unexpectedSkips.map((r) => ({
      key: roundTripSkipKey(r),
      lang: r.lang,
      group: r.group,
      dataset: r.dataset,
      reason: r.reason,
    })),
    total: roundTrips.length,
  };
}

module.exports = {
  CONTENT_LANGUAGES,
  scopeKey,
  expectedStructuralCollector,
  buildExpectedDiscoveryScopes,
  evaluateStructuralScopeCoverage,
  ALLOWED_ROUNDTRIP_SKIP_KEYS,
  roundTripSkipKey,
  isAllowedRoundTripSkip,
  evaluateRoundTripGates,
};
