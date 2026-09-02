#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { toRepoRelativePath } = require("./report-builder");
const {
  buildPhase1Scopes,
  summarizeApplicability,
} = require("./phase1-applicability");

function buildPhase1ScopeInventory(options = {}) {
  const scopes = buildPhase1Scopes(options.langs);
  const summary = summarizeApplicability(scopes);

  return {
    expectedScope: summary.expectedScope,
    uniqueScopeIds: summary.uniqueScopeIds,
    notApplicable: summary.notApplicable,
    notApplicableCount: summary.notApplicableCount,
    lunaApplicable: summary.lunaApplicable,
    inventoryApplicable: summary.inventoryApplicable,
    multiScanApplicable: summary.multiScanApplicable,
    byGroup: summary.byGroup,
    generatedAt: new Date().toISOString(),
    scopes: scopes.map((s) => ({
      scopeId: s.scopeId,
      group: s.group,
      dataset: s.dataset,
      lang: s.lang,
      applicability: s.applicability,
      inventoryApplicable: s.inventoryApplicable,
      multiScanApplicable: s.multiScanApplicable,
      lunaApplicable: s.lunaApplicable,
    })),
  };
}

function writePhase1ScopeInventory(options = {}) {
  const inventory = buildPhase1ScopeInventory(options);
  const outPath =
    options.outPath || path.join(ROOT, "reports", "phase1-scope-inventory.json");
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, `${JSON.stringify(inventory, null, 2)}\n`, "utf8");
  return { inventory, outPath: toRepoRelativePath(outPath) };
}

function readPhase1ScopeInventoryRef(options = {}) {
  const outPath =
    options.outPath || path.join(ROOT, "reports", "phase1-scope-inventory.json");
  if (!fs.existsSync(outPath)) {
    return { ok: false, code: "SCOPE_INVENTORY_MISSING", outPath: toRepoRelativePath(outPath) };
  }
  return { ok: true, outPath: toRepoRelativePath(outPath), readOnly: true };
}

module.exports = {
  buildPhase1ScopeInventory,
  writePhase1ScopeInventory,
  readPhase1ScopeInventoryRef,
};
