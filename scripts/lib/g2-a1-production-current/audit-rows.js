#!/usr/bin/env node
"use strict";

const { exportG2LevelFlat } = require("../content-crowdin-bridge/roundtrip");
const { AUDIT_SOURCE, LEVEL, RECORD_KIND } = require("./constants");
const { productionA1Rel } = require("./paths");
const { bindRegistryAuthorities } = require("./registry-bindings");

function cardIdFromFlatKey(flatKey) {
  const m = flatKey.match(/^a1\.card\.([^.]+)/);
  return m ? m[1] : flatKey;
}

function buildTechnicalInventoryRowsForLanguage(lang, datasetProductionSha, auditBaselineSha) {
  const productionFile = productionA1Rel(lang);
  const flat = exportG2LevelFlat(lang, LEVEL);
  const regBind = bindRegistryAuthorities(lang);
  const rows = [];
  for (const [fieldPath, currentValue] of Object.entries(flat)) {
    const row = {
      recordKind: RECORD_KIND.TECHNICAL_INVENTORY,
      auditSource: AUDIT_SOURCE,
      productionFile,
      language: lang,
      appLanguageCode: lang,
      cardId: cardIdFromFlatKey(fieldPath),
      fieldPath,
      currentValue,
      datasetProductionSha,
      auditBaselineSha,
      rowId: `${lang}|${fieldPath}`,
      registryBinding: regBind.pass ? regBind.binding : null,
      dryRun: true,
    };
    rows.push(row);
  }
  return rows;
}

/** @deprecated use buildTechnicalInventoryRowsForLanguage */
function buildAuditRowsForLanguage(lang, datasetProductionSha, auditBaselineSha) {
  return buildTechnicalInventoryRowsForLanguage(lang, datasetProductionSha, auditBaselineSha);
}

module.exports = {
  buildTechnicalInventoryRowsForLanguage,
  buildAuditRowsForLanguage,
  cardIdFromFlatKey,
};
