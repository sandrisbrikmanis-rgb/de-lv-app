#!/usr/bin/env node
"use strict";

const { runPreflight } = require("./preflight");
const { buildProductionFileSetInventory } = require("./inventory");
const { loadG2ProductionObjects, verifyBatchLimitsForLang } = require("./objects");
const { buildAuditRowsForLanguage } = require("./audit-rows");
const { AUDIT_LANGUAGES, AUDIT_VERDICTS, FORBIDDEN_AUDIT_VERDICTS } = require("./constants");

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
    const auditRows = buildAuditRowsForLanguage(lang, datasetProductionSha, auditBaselineSha);
    allRows.push(...auditRows);
    perLang.push({
      language: lang,
      objects: objects.length,
      auditRows: auditRows.length,
      datasetProductionSha,
      batchCheck,
    });
  }

  const summary = {
    auditLanguages: AUDIT_LANGUAGES.length,
    totalAuditRows: allRows.length,
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
    pass: batchPass && allRows.length > 0,
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
