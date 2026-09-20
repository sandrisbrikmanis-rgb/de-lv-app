#!/usr/bin/env node
"use strict";

const { RECORD_KIND, AUDIT_VERDICTS, FORBIDDEN_AUDIT_VERDICTS } = require("./constants");
const { bindRegistryAuthorities } = require("./registry-bindings");
const {
  MAPPING_PROVENANCE,
  TECHNICAL_MAPPING_STATUS,
  flattenLunaItemsToFieldCandidates,
  indexFieldLunaItems,
  classifyRowMapping,
  hasPassFindingEvidenceFields,
  stableFieldResultKey,
} = require("./field-mapping-provenance");

const LUNA_STATUS_TO_APVIENOTS = Object.freeze({
  PASS: "PASS",
  OK: "PASS",
  NO_FINDING: "PASS",
  FINDING: "FINDING",
  NEEDS_REVIEW: "NEEDS_SOURCE_REVIEW",
  NEEDS_SOURCE_REVIEW: "NEEDS_SOURCE_REVIEW",
  DE_SOURCE_ISSUE: "SOURCE_DE_ISSUE",
  SOURCE_DE_ISSUE: "SOURCE_DE_ISSUE",
});

function mapLunaStatusToAuditVerdict(status) {
  const raw = String(status || "").trim().toUpperCase();
  if (raw === "PENDING_HUMAN_REVIEW") return { pass: false, error: "FORBIDDEN_PENDING_HUMAN_REVIEW" };
  if (FORBIDDEN_AUDIT_VERDICTS.includes(raw)) return { pass: false, error: "FORBIDDEN_VERDICT" };
  const mapped = LUNA_STATUS_TO_APVIENOTS[raw];
  if (!mapped || !AUDIT_VERDICTS.includes(mapped)) {
    return { pass: false, error: "UNKNOWN_LUNA_STATUS", status: raw };
  }
  return { pass: true, verdict: mapped };
}

function buildInventoryShellRecord(inventoryRow, extras = {}) {
  const lang = inventoryRow.language;
  const reg = bindRegistryAuthorities(lang);
  const binding = reg.pass ? reg.binding : {};
  return {
    recordKind: RECORD_KIND.AUDITED_EVIDENCE,
    auditSource: inventoryRow.auditSource,
    productionFile: inventoryRow.productionFile,
    language: lang,
    fieldPath: inventoryRow.fieldPath,
    currentValue: inventoryRow.currentValue,
    cardId: inventoryRow.cardId,
    rowId: inventoryRow.rowId,
    datasetProductionSha: inventoryRow.datasetProductionSha,
    auditBaselineSha: inventoryRow.auditBaselineSha,
    resultIdentityKey: stableFieldResultKey({
      language: lang,
      productionFile: inventoryRow.productionFile,
      cardId: inventoryRow.cardId,
      fieldPath: inventoryRow.fieldPath,
    }),
    DE_AUTHORITY: binding.DE_AUTHORITY || "",
    DE_SOURCE_URL: binding.DE_SOURCE_URL || "",
    DE_SOURCE_ENTRY_OR_RULE: "",
    DE_SOURCE_EVIDENCE: "",
    TARGET_AUTHORITY: binding.TARGET_AUTHORITY || "",
    TARGET_SOURCE_URL: binding.TARGET_SOURCE_URL || "",
    TARGET_SOURCE_ENTRY_OR_RULE: "",
    TARGET_SOURCE_EVIDENCE: "",
    CONTEXT_REASONING: "",
    AUDIT_VERDICT: null,
    ...extras,
  };
}

function applyLunaItemToRecord(shell, lunaItem, provenance) {
  const statusResult = mapLunaStatusToAuditVerdict(lunaItem.status || lunaItem.lunaVerdict || lunaItem.AUDIT_VERDICT);
  if (!statusResult.pass) {
    return { pass: false, errors: [statusResult.error], rowId: shell.rowId };
  }
  if (!hasPassFindingEvidenceFields({ ...lunaItem, AUDIT_VERDICT: statusResult.verdict })) {
    return { pass: false, errors: ["INCOMPLETE_FIELD_EVIDENCE"], rowId: shell.rowId };
  }

  const verdict = statusResult.verdict;
  const record = {
    ...shell,
    mappingProvenance: provenance,
    technicalMappingStatus: TECHNICAL_MAPPING_STATUS.LINGUISTICALLY_CLOSED,
    DE_AUTHORITY: lunaItem.DE_AUTHORITY || shell.DE_AUTHORITY,
    DE_SOURCE_URL: lunaItem.DE_SOURCE_URL || shell.DE_SOURCE_URL,
    DE_SOURCE_ENTRY_OR_RULE: lunaItem.DE_SOURCE_ENTRY_OR_RULE || "",
    DE_SOURCE_EVIDENCE: lunaItem.DE_SOURCE_EVIDENCE || "",
    TARGET_AUTHORITY: lunaItem.TARGET_AUTHORITY || shell.TARGET_AUTHORITY,
    TARGET_SOURCE_URL: lunaItem.TARGET_SOURCE_URL || shell.TARGET_SOURCE_URL,
    TARGET_SOURCE_ENTRY_OR_RULE: lunaItem.TARGET_SOURCE_ENTRY_OR_RULE || "",
    TARGET_SOURCE_EVIDENCE: lunaItem.TARGET_SOURCE_EVIDENCE || "",
    CONTEXT_REASONING: lunaItem.CONTEXT_REASONING || lunaItem.contextReasoning || "",
    AUDIT_VERDICT: verdict,
  };

  if (verdict === "FINDING") {
    record.CURRENT_PROBLEM = lunaItem.CURRENT_PROBLEM || lunaItem.problem || "";
    record.PROPOSED_NEW = lunaItem.PROPOSED_NEW || lunaItem.proposedNew || "";
    record.NEW_SOURCE_EVIDENCE = lunaItem.NEW_SOURCE_EVIDENCE || "";
  }

  if (lunaItem.CEFR_APPLICABLE) {
    record.CEFR_APPLICABLE = true;
    record.CEFR_AUTHORITY = lunaItem.CEFR_AUTHORITY || "";
    record.CEFR_SOURCE_URL = lunaItem.CEFR_SOURCE_URL || "";
    record.CEFR_LEVEL = lunaItem.CEFR_LEVEL || "";
    record.CEFR_EVIDENCE = lunaItem.CEFR_EVIDENCE || "";
  }

  return { pass: true, record };
}

function buildMappingGapRecord(inventoryRow, classification) {
  const shell = buildInventoryShellRecord(inventoryRow, {
    mappingProvenance: classification.provenance,
    technicalMappingStatus: TECHNICAL_MAPPING_STATUS.MAPPING_GAP,
    AUDIT_VERDICT: null,
  });
  if (classification.provenance === MAPPING_PROVENANCE.FIELD_LEVEL_EVIDENCE_MISSING) {
    shell.mappingGapReason = "Luna item present but field-level authoritative evidence incomplete for this path.";
  } else if (classification.provenance === MAPPING_PROVENANCE.UNAUDITED_MISSING_FIELD_RESULT) {
    shell.mappingGapReason = "No raw Luna field result for this inventory path.";
  }
  return shell;
}

function buildAuditedRecordFromInventoryAndLuna(inventoryRow, lunaItem, options = {}) {
  const productionFile = inventoryRow.productionFile;
  const lang = inventoryRow.language;
  const fieldIndex = lunaItem
    ? indexFieldLunaItems([lunaItem], lang)
    : { byField: new Map(), duplicates: [] };
  const classification = classifyRowMapping(inventoryRow, fieldIndex, options);

  if (classification.provenance === MAPPING_PROVENANCE.RAW_LUNA_FIELD_RESULT && classification.lunaItem) {
    const shell = buildInventoryShellRecord(inventoryRow);
    return applyLunaItemToRecord(shell, classification.lunaItem, classification.provenance);
  }

  return { pass: true, record: buildMappingGapRecord(inventoryRow, classification) };
}

function indexLunaItemsByFieldPath(items, lang, productionFile) {
  const { fieldItems } = flattenLunaItemsToFieldCandidates(items, lang, productionFile);
  return indexFieldLunaItems(fieldItems, lang);
}

function mergeInventoryWithLunaResults(inventoryRows, lunaItems, lang, options = {}) {
  const productionFile = inventoryRows[0]?.productionFile;
  const fieldIndex = indexLunaItemsByFieldPath(lunaItems, lang, productionFile);
  const records = [];
  const errors = [];
  const provenanceCounts = {
    RAW_LUNA_FIELD_RESULT: 0,
    DETERMINISTIC_CARD_TO_FIELD_MAPPING_POSSIBLE: 0,
    FIELD_LEVEL_EVIDENCE_MISSING: 0,
    SYNTHETIC_FALLBACK_NSR: 0,
    UNAUDITED_MISSING_FIELD_RESULT: 0,
  };

  if (fieldIndex.duplicates.length) {
    errors.push({ code: "DUPLICATE_LUNA_FIELD_PATH", keys: fieldIndex.duplicates.slice(0, 20) });
  }

  for (const row of inventoryRows) {
    const legacy = options.legacyMappedByRowId?.[row.rowId];
    const classification = classifyRowMapping(row, fieldIndex, { legacyMappedRecord: legacy });
    provenanceCounts[classification.provenance] = (provenanceCounts[classification.provenance] || 0) + 1;

    if (classification.provenance === MAPPING_PROVENANCE.RAW_LUNA_FIELD_RESULT && classification.lunaItem) {
      const shell = buildInventoryShellRecord(row);
      const built = applyLunaItemToRecord(shell, classification.lunaItem, classification.provenance);
      if (!built.pass) errors.push(built);
      else records.push(built.record);
    } else {
      records.push(buildMappingGapRecord(row, classification));
    }
  }

  return { records, errors, provenanceCounts, fieldIndex };
}

module.exports = {
  mapLunaStatusToAuditVerdict,
  buildAuditedRecordFromInventoryAndLuna,
  mergeInventoryWithLunaResults,
  indexLunaItemsByFieldPath,
  LUNA_STATUS_TO_APVIENOTS,
};
