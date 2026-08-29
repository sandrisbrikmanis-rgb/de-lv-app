#!/usr/bin/env node
"use strict";

const {
  evaluateDeterministicScope,
  evaluateInventoryCoverage,
  evaluateMultiScanCoverage,
  evaluateLunaCoverage,
} = require("./lib/content-discovery/phase1-coverage-gates");
const { buildPhase1ScopeInventory } = require("./lib/content-discovery/phase1-scope-inventory");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL: ${message}`);
    process.exit(1);
  }
}

const inventory = buildPhase1ScopeInventory();
assert(inventory.expectedScope === 320, "expectedScope 320");
assert(inventory.uniqueScopeIds === 320, "uniqueScopeIds 320");
assert(inventory.notApplicable.length === 2, "notApplicable 2");
assert(inventory.lunaApplicable === 318, "lunaApplicable 318");
assert(inventory.inventoryApplicable === 309, "inventoryApplicable 309");
assert(inventory.multiScanApplicable === 309, "multiScanApplicable 309");

const mockSummary = inventory.scopes.map((s) => ({
  ...s,
  inventoryCoverage: 1,
  unmappedMainTranslationFields: 0,
  multiScanCoverage: 1,
  multiScanObjectsExpected: s.multiScanApplicable ? 1 : 0,
  multiScanObjectsScanned: s.multiScanApplicable ? 1 : 0,
}));

const det = evaluateDeterministicScope(mockSummary);
assert(det.pass, "deterministic 320/320 pass");

const inv = evaluateInventoryCoverage(mockSummary);
assert(inv.pass && inv.expected === 309, "inventory 309 pass");

const multi = evaluateMultiScanCoverage(mockSummary);
assert(multi.pass && multi.expected === 309, "multi-scan 309 pass");

const lunaFixture = evaluateLunaCoverage([], { fixture: { expected: 318, processed: 318 } });
assert(lunaFixture.pass, "luna fixture 318/318 pass");

const lunaNotRun = evaluateLunaCoverage([], { mode: "NOT_RUN" });
assert(lunaNotRun.status === "NOT_RUN", "luna NOT_RUN during F0");

console.log("PASS: phase1 coverage gate tests");
