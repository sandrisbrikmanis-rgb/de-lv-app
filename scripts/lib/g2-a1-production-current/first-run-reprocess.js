#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { AUDIT_LANGUAGES, REPORTS_DIR } = require("./constants");
const { buildProductionFileSetInventory } = require("./inventory");
const { buildTechnicalInventoryRowsForLanguage } = require("./audit-rows");
const { mergeInventoryWithLunaResults } = require("./luna-apvienots-mapper");
const { MAPPING_PROVENANCE, classifyRowMapping, indexFieldLunaItems, flattenLunaItemsToFieldCandidates } = require("./field-mapping-provenance");
const { tallyAuditedRecords, validateCoverageEquation } = require("./coverage");
const { verifyPostRunClosure } = require("./post-run-verify");
const { buildOwnerArtifactsFromEvidence } = require("./owner-artifacts");

const LEGACY_CHECKPOINT_DIR = path.join(ROOT, "reports/temp/g2-a1-production-current/full-discovery-lang-checkpoints");
const RAW_LUNA_DIR = path.join(ROOT, "reports/temp/g2-a1-production-current/full-discovery-luna-raw-checkpoints");

function loadRawLunaItemsForLang(lang) {
  const p = path.join(RAW_LUNA_DIR, `${lang}.luna-raw.json`);
  if (!fs.existsSync(p)) return [];
  try {
    const j = JSON.parse(fs.readFileSync(p, "utf8"));
    return j.items || j.lunaItems || [];
  } catch {
    return [];
  }
}

function loadLegacyMappedByRowId(lang) {
  const p = path.join(LEGACY_CHECKPOINT_DIR, `${lang}.records.json`);
  if (!fs.existsSync(p)) return {};
  const recs = JSON.parse(fs.readFileSync(p, "utf8")).records || [];
  const map = {};
  for (const r of recs) map[r.rowId] = r;
  return map;
}

function classifyInventoryForLanguage(lang, inventoryRows, rawItems, legacyByRowId) {
  const productionFile = inventoryRows[0]?.productionFile;
  const { fieldItems } = flattenLunaItemsToFieldCandidates(rawItems, lang, productionFile);
  const fieldIndex = indexFieldLunaItems(fieldItems, lang);
  const counts = {
    RAW_LUNA_FIELD_RESULT: 0,
    DETERMINISTIC_CARD_TO_FIELD_MAPPING_POSSIBLE: 0,
    FIELD_LEVEL_EVIDENCE_MISSING: 0,
    SYNTHETIC_FALLBACK_NSR: 0,
    UNAUDITED_MISSING_FIELD_RESULT: 0,
  };
  for (const row of inventoryRows) {
    const c = classifyRowMapping(row, fieldIndex, { legacyMappedRecord: legacyByRowId[row.rowId] });
    counts[c.provenance] = (counts[c.provenance] || 0) + 1;
  }
  return counts;
}

function resolveSalvageGate(classificationTotals, rawLunaItemCount) {
  if (rawLunaItemCount === 0) {
    return {
      classification: "G2_A1_FIRST_RUN_NOT_MASTER_COMPLIANT_FIELD_LEVEL_RERUN_REQUIRED",
      nextAction: "RUN_MASTER_COMPLIANT_FIELD_LEVEL_AUDIT",
      salvageableFromRaw: false,
    };
  }
  const mapped = classificationTotals.RAW_LUNA_FIELD_RESULT + classificationTotals.DETERMINISTIC_CARD_TO_FIELD_MAPPING_POSSIBLE;
  const missing =
    classificationTotals.UNAUDITED_MISSING_FIELD_RESULT + classificationTotals.FIELD_LEVEL_EVIDENCE_MISSING;
  if (missing === 0 && classificationTotals.SYNTHETIC_FALLBACK_NSR === 0) {
    return {
      classification: "G2_A1_FULL_DISCOVERY_RECOVERED_FROM_CHECKPOINTS_AND_VERIFIED",
      nextAction: null,
      salvageableFromRaw: true,
    };
  }
  return {
    classification: "G2_A1_FIELD_LEVEL_MAPPING_FIXED_TARGETED_AUDIT_REQUIRED",
    nextAction: "RUN_ONLY_MISSING_FIELD_LEVEL_AUDIT",
    salvageableFromRaw: mapped > 0,
    missingFieldResults: missing,
  };
}

function runFirstRunReprocess(options = {}) {
  const inventory = buildProductionFileSetInventory();
  const auditBaselineSha = inventory.gate.productionFileSetSha256;
  const allRecords = [];
  const perLang = [];
  const classificationTotals = {
    RAW_LUNA_FIELD_RESULT: 0,
    DETERMINISTIC_CARD_TO_FIELD_MAPPING_POSSIBLE: 0,
    FIELD_LEVEL_EVIDENCE_MISSING: 0,
    SYNTHETIC_FALLBACK_NSR: 0,
    UNAUDITED_MISSING_FIELD_RESULT: 0,
  };
  let rawLunaItemCount = 0;
  const missingFieldPaths = [];

  for (const lang of AUDIT_LANGUAGES) {
    const row = inventory.rows.find((r) => r.language === lang);
    const datasetProductionSha = row?.dataSha256 || null;
    const inventoryRows = buildTechnicalInventoryRowsForLanguage(lang, datasetProductionSha, auditBaselineSha);
    const rawItems = loadRawLunaItemsForLang(lang);
    rawLunaItemCount += rawItems.length;
    const legacyByRowId = loadLegacyMappedByRowId(lang);
    const langClass = classifyInventoryForLanguage(lang, inventoryRows, rawItems, legacyByRowId);
    for (const [k, v] of Object.entries(langClass)) classificationTotals[k] = (classificationTotals[k] || 0) + v;

    const merged = mergeInventoryWithLunaResults(inventoryRows, rawItems, lang);
    for (const r of merged.records) {
      if (r.technicalMappingStatus === "MAPPING_GAP") {
        missingFieldPaths.push({ language: lang, fieldPath: r.fieldPath, rowId: r.rowId, provenance: r.mappingProvenance });
      }
    }
    allRecords.push(...merged.records);
    perLang.push({
      language: lang,
      inventoryRows: inventoryRows.length,
      rawLunaItems: rawItems.length,
      provenance: langClass,
      mapErrors: merged.errors.length,
    });
  }

  const coverage = validateCoverageEquation(tallyAuditedRecords(allRecords));
  const ownerBundle = buildOwnerArtifactsFromEvidence(allRecords, {
    auditBaselineSha,
    datasetProductionSha: auditBaselineSha,
    originMainSha: null,
    batchManifest: null,
  });
  const postRun = verifyPostRunClosure({
    fullAuditEvidence: ownerBundle.fullAuditEvidence,
    ownerView: ownerBundle.ownerView,
    startFileSetSha: auditBaselineSha,
    endFileSetSha: auditBaselineSha,
  });

  const salvage = resolveSalvageGate(classificationTotals, rawLunaItemCount);
  const out = {
    generatedAt: new Date().toISOString(),
    auditBaselineSha,
    rawLunaItemCount,
    inventoryRows: allRecords.length,
    classificationTotals,
    reprocessProvenanceCounts: tallyMappingProvenance(allRecords),
    coverage: coverage.counts,
    coveragePass: coverage.pass,
    postRunPass: postRun.pass,
    postRunBlockersSample: postRun.blockers.slice(0, 5),
    missingFieldResults: missingFieldPaths.length,
    syntheticFallbackInLinguisticVerdicts: allRecords.filter(
      (r) => r.mappingProvenance === MAPPING_PROVENANCE.SYNTHETIC_FALLBACK_NSR && r.AUDIT_VERDICT,
    ).length,
    salvageGate: salvage,
    perLang,
  };

  const prefix = options.outputPrefix || "first-run-reprocess";
  fs.mkdirSync(REPORTS_DIR, { recursive: true });
  const summaryPath = path.join(REPORTS_DIR, `${prefix}-summary.json`);
  fs.writeFileSync(summaryPath, `${JSON.stringify(out, null, 2)}\n`);
  const missingPath = path.join(REPORTS_DIR, `${prefix}-missing-field-manifest.json`);
  fs.writeFileSync(
    missingPath,
    `${JSON.stringify(
      {
        previewOnly: true,
        note: "Use npm run build:g2-a1:targeted-missing-field-inventory for full multipart missing inventory (95731 rows).",
        missingFieldResults: missingFieldPaths.length,
        rows: missingFieldPaths.slice(0, 5000),
      },
      null,
      2,
    )}\n`,
  );
  if (options.writeEvidence) {
    fs.writeFileSync(
      path.join(REPORTS_DIR, `${prefix}-full-audit-evidence.json`),
      `${JSON.stringify(ownerBundle.fullAuditEvidence, null, 2)}\n`,
    );
    fs.writeFileSync(path.join(REPORTS_DIR, `${prefix}-post-run-verification.json`), `${JSON.stringify(postRun, null, 2)}\n`);
  }

  return { ...out, summaryPath: path.relative(ROOT, summaryPath), missingPath: path.relative(ROOT, missingPath) };
}

function tallyMappingProvenance(records) {
  const counts = {};
  for (const r of records) {
    const p = r.mappingProvenance || "UNKNOWN";
    counts[p] = (counts[p] || 0) + 1;
  }
  return counts;
}

module.exports = {
  runFirstRunReprocess,
  classifyInventoryForLanguage,
  resolveSalvageGate,
  LEGACY_CHECKPOINT_DIR,
  RAW_LUNA_DIR,
};
