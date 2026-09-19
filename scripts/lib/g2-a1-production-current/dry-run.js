#!/usr/bin/env node
"use strict";

const { runPreflight } = require("./preflight");
const { buildProductionFileSetInventory } = require("./inventory");
const { loadG2ProductionObjects, verifyBatchLimitsForLang } = require("./objects");
const { buildTechnicalInventoryRowsForLanguage } = require("./audit-rows");
const { validateTechnicalInventoryRecord } = require("./evidence-schema");
const { AUDIT_LANGUAGES, AUDIT_VERDICTS, FORBIDDEN_AUDIT_VERDICTS } = require("./constants");
const { buildAuditScopeInventory } = require("./audit-scope-inventory");
const { buildBatchManifest } = require("./batch-manifest");

function runDryRun(options = {}) {
  const preflight = runPreflight(options);
  if (!preflight.pass) {
    return { pass: false, phase: "preflight", preflight, rows: [], summary: null };
  }

  const inventory = buildProductionFileSetInventory();
  const auditBaselineSha = inventory.gate.productionFileSetSha256;
  const perLang = [];
  const allRows = [];
  let batchPass = true;

  for (const lang of AUDIT_LANGUAGES) {
    const row = inventory.rows.find((r) => r.language === lang);
    const datasetProductionSha = row?.dataSha256 || null;
    const objects = loadG2ProductionObjects(lang);
    const batchCheck = verifyBatchLimitsForLang(objects);
    if (!batchCheck.pass) batchPass = false;
    const auditRows = buildTechnicalInventoryRowsForLanguage(lang, datasetProductionSha, auditBaselineSha);
    const sample = auditRows[0];
    if (sample) {
      const invCheck = validateTechnicalInventoryRecord(sample);
      if (!invCheck.pass) batchPass = false;
    }
    allRows.push(...auditRows);
    perLang.push({
      language: lang,
      objects: objects.length,
      auditRows: auditRows.length,
      datasetProductionSha,
      batchCheck,
    });
  }

  const scope = buildAuditScopeInventory();
  const batchManifest = buildBatchManifest();

  const summary = {
    auditLanguages: AUDIT_LANGUAGES.length,
    totalAuditRows: allRows.length,
    scopeInventory: {
      totalAuditRows: scope.totalAuditRows,
      cardTypeTotals: scope.cardTypeTotals,
      fieldCategoryTotals: scope.fieldCategoryTotals,
      STAGING_AS_CURRENT: scope.STAGING_AS_CURRENT,
      AUDIT_SOURCE: scope.AUDIT_SOURCE,
    },
    batchManifest: {
      pass: batchManifest.pass,
      totalBatches: batchManifest.totalBatches,
      BATCH_LIMIT_CHANGES: batchManifest.BATCH_LIMIT_CHANGES,
    },
    auditBaselineSha,
    productionFileSetSha256: auditBaselineSha,
    batchConfigurationPass: batchPass,
    allowedVerdicts: AUDIT_VERDICTS,
    forbiddenAsFinalVerdicts: FORBIDDEN_AUDIT_VERDICTS,
    linguisticVerdictsGenerated: 0,
    equation:
      "TOTAL_CHECKED = AUDIT_PASS + FINDING + NEEDS_SOURCE_REVIEW + SOURCE_DE_ISSUE (not evaluated in dry-run)",
  };

  return {
    pass: batchPass && allRows.length > 0 && scope.pass && batchManifest.pass && allRows.length === scope.totalAuditRows,
    phase: "dry-run",
    preflight,
    inventory,
    perLang,
    rows: allRows,
    summary,
  };
}

module.exports = {
  runDryRun,
};
