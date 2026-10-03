#!/usr/bin/env node
"use strict";

const { listTargetAdapterMatrix } = require("../g2-a1-production-current/source-adapters/target");
const { loadBilingualAuditRegistry } = require("./bilingual-catalog");
const { TARGET_LANGUAGES } = require("./constants");

function buildAdapterMatrix() {
  const targetMatrix = listTargetAdapterMatrix();
  const bilingual = loadBilingualAuditRegistry();

  const rows = TARGET_LANGUAGES.map((lang) => {
    const target = targetMatrix.find((r) => r.language === lang);
    const bi = bilingual.byLang[lang];
    return {
      language: lang,
      bilingualCatalog: bi ? { catalogId: bi.catalogId, primaryId: bi.primary?.id || null } : null,
      officialTargetAdapterId: target?.adapterId || "missing",
      officialTargetImplemented: target?.integrationTest === "required",
      bilingualLookupImplemented: false,
    };
  });

  return {
    generatedAt: new Date().toISOString(),
    bilingualLookupImplemented: false,
    officialDeImplemented: true,
    rows,
  };
}

module.exports = {
  buildAdapterMatrix,
};
