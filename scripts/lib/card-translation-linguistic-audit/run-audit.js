#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { SCHEMA_VERSION, REPORTS_DIR, AI_POLICY } = require("./constants");
const { loadTranslationFieldsForLevelLang } = require("./production-read");
const { loadCombinedSourceRegistry } = require("./registry-load");
const { buildEvidenceForField } = require("./evidence-chain");
const { buildAdapterMatrix } = require("./adapter-matrix");

async function runCardTranslationLinguisticAudit(options) {
  const outDir = options.outDir || REPORTS_DIR;
  const executeSources = options.executeSources === true;
  const dryRun = !executeSources;
  const limit = options.limit ?? null;

  const registry = loadCombinedSourceRegistry();
  const records = [];
  const scope = [];

  for (const level of options.levels) {
    for (const lang of options.langs) {
      const loaded = loadTranslationFieldsForLevelLang(lang, level);
      let fields = loaded.fields;
      if (limit != null) fields = fields.slice(0, limit);

      scope.push({
        level,
        language: lang,
        productionFile: loaded.productionFile,
        cardCount: loaded.cards,
        translationFieldCount: loaded.fields.length,
        auditedFieldCount: fields.length,
      });

      for (const field of fields) {
        const evidence = await buildEvidenceForField(field, { executeSources });
        records.push(evidence);
      }
    }
  }

  const manifest = {
    schemaVersion: SCHEMA_VERSION,
    generatedAt: new Date().toISOString(),
    mode: dryRun ? "dry-run" : "execute-sources",
    aiPolicy: AI_POLICY,
    registryPass: registry.pass,
    registryErrors: registry.errors,
    scope,
    recordCount: records.length,
    productionWrites: false,
  };

  const adapterMatrix = buildAdapterMatrix();

  fs.mkdirSync(outDir, { recursive: true });
  const manifestPath = path.join(outDir, "card-translation-linguistic-audit-manifest.json");
  const recordsPath = path.join(outDir, "card-translation-linguistic-audit-records.json");
  const matrixPath = path.join(outDir, "card-translation-linguistic-audit-adapter-matrix.json");

  fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
  fs.writeFileSync(recordsPath, `${JSON.stringify({ records }, null, 2)}\n`);
  fs.writeFileSync(matrixPath, `${JSON.stringify(adapterMatrix, null, 2)}\n`);

  return {
    pass: true,
    dryRun,
    manifestPath,
    recordsPath,
    matrixPath,
    manifest,
    recordCount: records.length,
  };
}

module.exports = {
  runCardTranslationLinguisticAudit,
};
