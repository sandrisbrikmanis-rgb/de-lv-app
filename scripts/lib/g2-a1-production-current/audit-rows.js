#!/usr/bin/env node
"use strict";

const { exportG2LevelFlat } = require("../content-crowdin-bridge/roundtrip");
const { verifyEmbeddedLanguageRegistry } = require("../official-language-sources-registry");
const { ROOT } = require("../audit-common");
const { AUDIT_SOURCE, LEVEL } = require("./constants");
const { productionA1Rel } = require("./paths");

function authorityForLanguage(lang) {
  const reg = verifyEmbeddedLanguageRegistry(ROOT);
  if (!reg.pass) return null;
  const lookup = lang === "gr" ? "gr" : lang;
  return reg.coverageRows.find((r) => r.appCode === lookup || r.standardCode === lookup) || null;
}

function cardIdFromFlatKey(flatKey) {
  const m = flatKey.match(/^a1\.card\.([^.]+)/);
  return m ? m[1] : flatKey;
}

function buildAuditRowsForLanguage(lang, datasetProductionSha, auditBaselineSha) {
  const productionFile = productionA1Rel(lang);
  const flat = exportG2LevelFlat(lang, LEVEL);
  const authority = authorityForLanguage(lang);
  const rows = [];
  for (const [fieldPath, currentValue] of Object.entries(flat)) {
    rows.push({
      auditSource: AUDIT_SOURCE,
      productionFile,
      language: lang,
      appLanguageCode: lang,
      authorityStandardCode: authority?.standardCode || (lang === "gr" ? "el" : lang),
      cardId: cardIdFromFlatKey(fieldPath),
      fieldPath,
      currentValue,
      datasetProductionSha,
      auditBaselineSha,
      languageAuthority: authority?.authorityName || null,
      authorityUrls: authority ? authority.urlCount : 0,
      linguisticVerdict: null,
      dryRun: true,
    });
  }
  return rows;
}

module.exports = {
  buildAuditRowsForLanguage,
  authorityForLanguage,
  cardIdFromFlatKey,
};
