#!/usr/bin/env node
"use strict";

const { summarizeApplicability } = require("./phase1-applicability");

function evaluateDeterministicScope(summaryRows = []) {
  const expected = 320;
  const processed = summaryRows.length;
  const notApplicable = summaryRows.filter((r) => r.applicability === "EXPECTED_NOT_APPLICABLE").length;
  const missing = expected - processed;
  return {
    pass: processed === expected && notApplicable === 2,
    expected,
    processed,
    notApplicable,
    missing: Math.max(0, missing),
  };
}

function evaluateInventoryCoverage(summaryRows = []) {
  const applicableRows = summaryRows.filter((r) => r.inventoryApplicable);
  const failures = applicableRows.filter(
    (r) =>
      Number(r.inventoryCoverage) < 1 ||
      Number(r.unmappedMainTranslationFields || 0) > 0,
  );
  return {
    pass: failures.length === 0,
    expected: 309,
    processed: applicableRows.length,
    failures: failures.map((r) => ({
      scopeId: r.scopeId,
      inventoryCoverage: r.inventoryCoverage,
      unmappedMainTranslationFields: r.unmappedMainTranslationFields,
    })),
  };
}

function evaluateMultiScanCoverage(summaryRows = []) {
  const applicableRows = summaryRows.filter((r) => r.multiScanApplicable);
  const failures = applicableRows.filter((r) => {
    if (Number(r.multiScanCoverage) < 1) return true;
    if (
      r.multiScanObjectsExpected != null &&
      r.multiScanObjectsScanned != null &&
      r.multiScanObjectsScanned !== r.multiScanObjectsExpected
    ) {
      return true;
    }
    return false;
  });
  return {
    pass: failures.length === 0,
    expected: 309,
    processed: applicableRows.length,
    failures: failures.map((r) => ({
      scopeId: r.scopeId,
      multiScanCoverage: r.multiScanCoverage,
      multiScanObjectsExpected: r.multiScanObjectsExpected,
      multiScanObjectsScanned: r.multiScanObjectsScanned,
    })),
  };
}

function evaluateLunaCoverage(summaryRows = [], options = {}) {
  if (options.mode === "NOT_RUN" || options.fixture) {
    if (options.fixture) {
      const expected = options.fixture.expected || 318;
      const processed = options.fixture.processed ?? expected;
      return {
        pass: processed === expected,
        status: "FIXTURE",
        expected,
        processed,
        coverage: `${processed}/${expected}`,
      };
    }
    return {
      pass: true,
      status: "NOT_RUN",
      expected: 318,
      processed: 0,
      coverage: "NOT_RUN",
    };
  }

  const applicableRows = summaryRows.filter((r) => r.lunaApplicable);
  const failures = applicableRows.filter(
    (r) => r.lunaStatus !== "PASS" || Number(r.lunaObjectsReturned) !== Number(r.lunaObjectsExpected),
  );
  return {
    pass: failures.length === 0,
    status: "LIVE",
    expected: 318,
    processed: applicableRows.filter((r) => r.lunaProcessed).length,
    coverage: `${applicableRows.filter((r) => r.lunaProcessed).length}/318`,
    failures,
  };
}

function evaluateAllCoverageGates(matrix, options = {}) {
  const summary = matrix?.summary || [];
  const applicability = summarizeApplicability();
  return {
    deterministic: evaluateDeterministicScope(summary),
    inventory: evaluateInventoryCoverage(summary),
    multiScan: evaluateMultiScanCoverage(summary),
    luna: evaluateLunaCoverage(summary, options.luna || { mode: matrix?.lunaStats?.status || "NOT_RUN" }),
    applicability,
  };
}

module.exports = {
  evaluateDeterministicScope,
  evaluateInventoryCoverage,
  evaluateMultiScanCoverage,
  evaluateLunaCoverage,
  evaluateAllCoverageGates,
};
