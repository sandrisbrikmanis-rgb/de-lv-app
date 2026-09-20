#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { AUDIT_LANGUAGES, REPORTS_DIR, LEVEL } = require("./constants");
const { buildProductionFileSetInventory } = require("./inventory");
const { buildTechnicalInventoryRowsForLanguage } = require("./audit-rows");
const { mergeInventoryWithLunaResults } = require("./luna-apvienots-mapper");
const { fieldIdentityKey, normalizeMissingFieldRow, validateIdentityRow } = require("./targeted-field-identity");
const { writeJsonMultipartToDir, mergeJsonParts, verifyJsonMultipartManifest } = require("./json-multipart");

const PREVIEW_ROW_LIMIT = 5000;
const INVENTORY_BASE = "targeted-missing-field-inventory";

function buildMissingFieldRowsFromProduction(options = {}) {
  const inventory = buildProductionFileSetInventory();
  if (!inventory.gate.pass && !options.ignoreInventoryGate) {
    return { pass: false, error: "INVENTORY_GATE", gate: inventory.gate };
  }
  const auditBaselineSha = inventory.gate.productionFileSetSha256;
  const rows = [];
  const seen = new Set();

  for (const lang of AUDIT_LANGUAGES) {
    const invRow = inventory.rows.find((r) => r.language === lang);
    const datasetProductionSha = invRow?.dataSha256 || null;
    const inventoryRows = buildTechnicalInventoryRowsForLanguage(lang, datasetProductionSha, auditBaselineSha);
    const merged = mergeInventoryWithLunaResults(inventoryRows, [], lang);
    for (const rec of merged.records) {
      if (rec.technicalMappingStatus !== "MAPPING_GAP" && rec.AUDIT_VERDICT != null) continue;
      const missing = normalizeMissingFieldRow(
        {
          language: rec.language,
          productionFile: rec.productionFile,
          cardId: rec.cardId,
          fieldPath: rec.fieldPath,
          currentValue: rec.currentValue,
          rowId: rec.rowId,
          auditSource: rec.auditSource,
          datasetProductionSha: rec.datasetProductionSha,
          auditBaselineSha: rec.auditBaselineSha,
        },
        auditBaselineSha,
        datasetProductionSha,
      );
      const id = fieldIdentityKey(missing);
      if (seen.has(id)) continue;
      seen.add(id);
      const valid = validateIdentityRow(missing);
      if (!valid.pass) {
        return { pass: false, error: "INVALID_IDENTITY", detail: valid, row: missing };
      }
      rows.push(missing);
    }
  }

  return {
    pass: true,
    auditBaselineSha,
    productionFileSetSha: auditBaselineSha,
    dataset: LEVEL,
    totalRows: rows.length,
    uniqueLanguages: new Set(rows.map((r) => r.language)).size,
    uniqueCards: new Set(rows.map((r) => `${r.language}|${r.cardId}`)).size,
    rows,
    duplicatesSkipped: 0,
  };
}

function writeFullMissingFieldInventory(options = {}) {
  const built = buildMissingFieldRowsFromProduction(options);
  if (!built.pass) return built;

  const preview = built.rows.slice(0, PREVIEW_ROW_LIMIT);
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  fs.writeFileSync(
    path.join(REPORTS_DIR, `${INVENTORY_BASE}-preview.json`),
    `${JSON.stringify({ preview: true, rowCount: preview.length, totalMissing: built.totalRows, rows: preview }, null, 2)}\n`,
  );

  const multipart = writeJsonMultipartToDir(built.rows, "", INVENTORY_BASE, { root: REPORTS_DIR });
  const verify = multipart.verifyMultipart;

  return {
    pass: verify.pass && built.totalRows === built.rows.length && new Set(built.rows.map(fieldIdentityKey)).size === built.totalRows,
    ...built,
    multipart: multipart.manifest,
    multipartManifestPath: multipart.manifestPath,
    previewPath: `${INVENTORY_BASE}-preview.json`,
    verifyMultipart: verify,
    mergedRowCount: built.totalRows,
  };
}

function loadFullMissingFieldInventoryFromMultipart() {
  const manifestPath = path.join(REPORTS_DIR, `${INVENTORY_BASE}-multipart-manifest.json`);
  if (!fs.existsSync(manifestPath)) return { pass: false, error: "NO_MULTIPART_MANIFEST" };
  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
  const parts = manifest.files.map((f) => ({
    content: fs.readFileSync(path.join(REPORTS_DIR, f), "utf8"),
  }));
  const verify = verifyJsonMultipartManifest(manifest, parts.map((p) => p.content));
  if (!verify.pass) return { pass: false, error: "MULTIPART_VERIFY_FAIL", verify };
  const rows = mergeJsonParts(parts);
  return { pass: true, rows, manifest, totalRows: rows.length };
}

module.exports = {
  PREVIEW_ROW_LIMIT,
  INVENTORY_BASE,
  buildMissingFieldRowsFromProduction,
  writeFullMissingFieldInventory,
  loadFullMissingFieldInventoryFromMultipart,
};
