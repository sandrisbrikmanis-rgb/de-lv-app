#!/usr/bin/env node
"use strict";

const { APVIENOTS_EVIDENCE_FIELDS, FINDING_REQUIRED_FIELDS, AUDIT_VERDICTS } = require("./constants");
const { nonEmptyString } = require("./evidence-schema");

/** How a row received (or did not receive) a linguistic verdict. */
const MAPPING_PROVENANCE = Object.freeze({
  RAW_LUNA_FIELD_RESULT: "RAW_LUNA_FIELD_RESULT",
  DETERMINISTIC_CARD_TO_FIELD_MAPPING_POSSIBLE: "DETERMINISTIC_CARD_TO_FIELD_MAPPING_POSSIBLE",
  FIELD_LEVEL_EVIDENCE_MISSING: "FIELD_LEVEL_EVIDENCE_MISSING",
  SYNTHETIC_FALLBACK_NSR: "SYNTHETIC_FALLBACK_NSR",
  UNAUDITED_MISSING_FIELD_RESULT: "UNAUDITED_MISSING_FIELD_RESULT",
});

const SYNTHETIC_FALLBACK_CONTEXT =
  "No per-field Luna result; cannot close without authoritative source evidence (APVIENOTS §8).";

const TECHNICAL_MAPPING_STATUS = Object.freeze({
  MAPPING_GAP: "MAPPING_GAP",
  LINGUISTICALLY_CLOSED: "LINGUISTICALLY_CLOSED",
});

function stableFieldResultKey({ language, productionFile, cardId, fieldPath }) {
  return `${language}|${productionFile}|${cardId}|${fieldPath}`;
}

function stableLunaFieldLookupKey(language, fieldPath) {
  return `${language}|${fieldPath}`;
}

function hasPassFindingEvidenceFields(item) {
  if (!item || typeof item !== "object") return false;
  for (const f of APVIENOTS_EVIDENCE_FIELDS) {
    if (f === "AUDIT_VERDICT") continue;
    if (!nonEmptyString(item[f])) return false;
  }
  const rawVerdict = String(item.AUDIT_VERDICT || item.status || item.lunaVerdict || "")
    .trim()
    .toUpperCase();
  const verdict =
    rawVerdict === "OK" || rawVerdict === "NO_FINDING"
      ? "PASS"
      : rawVerdict === "NEEDS_REVIEW"
        ? "NEEDS_SOURCE_REVIEW"
        : rawVerdict;
  if (!AUDIT_VERDICTS.includes(verdict)) return false;
  if (verdict === "FINDING") {
    for (const f of FINDING_REQUIRED_FIELDS) {
      if (!nonEmptyString(item[f])) return false;
    }
  }
  return true;
}

function normalizeLunaFieldItem(item, lang, productionFile) {
  if (!item || typeof item !== "object") return null;
  const fieldPath = item.fieldPath || item.field || null;
  if (!fieldPath) return null;
  return {
    ...item,
    lang: item.lang || lang,
    productionFile: item.productionFile || productionFile,
    fieldPath,
    cardId: item.cardId || item.rawCardId || null,
  };
}

/**
 * Flatten Luna batch items into per-field candidates (never expands card-level verdict to fields).
 */
function flattenLunaItemsToFieldCandidates(items, lang, productionFile) {
  const fieldItems = [];
  const cardOnlyItems = [];
  for (const raw of items || []) {
    const nested = raw.fields || raw.fieldResults || raw.perFieldResults;
    if (Array.isArray(nested) && nested.length) {
      for (const sub of nested) {
        const norm = normalizeLunaFieldItem({ ...raw, ...sub }, lang, productionFile);
        if (norm) fieldItems.push(norm);
      }
      continue;
    }
    const norm = normalizeLunaFieldItem(raw, lang, productionFile);
    if (norm?.fieldPath) fieldItems.push(norm);
    else cardOnlyItems.push(raw);
  }
  return { fieldItems, cardOnlyItems };
}

function indexFieldLunaItems(fieldItems, lang) {
  const byField = new Map();
  const duplicates = [];
  for (const item of fieldItems) {
    const key = stableLunaFieldLookupKey(lang, item.fieldPath);
    if (byField.has(key)) duplicates.push(key);
    byField.set(key, item);
  }
  return { byField, duplicates };
}

function isLegacySyntheticMappedRecord(record) {
  if (!record) return false;
  return (
    record.AUDIT_VERDICT === "NEEDS_SOURCE_REVIEW" &&
    record.CONTEXT_REASONING === SYNTHETIC_FALLBACK_CONTEXT &&
    !nonEmptyString(record.DE_SOURCE_EVIDENCE) &&
    !nonEmptyString(record.DE_SOURCE_ENTRY_OR_RULE)
  );
}

function classifyRowMapping(inventoryRow, lunaFieldIndex, options = {}) {
  const lang = inventoryRow.language;
  const key = stableLunaFieldLookupKey(lang, inventoryRow.fieldPath);
  const lunaItem = lunaFieldIndex.byField.get(key) || null;

  if (lunaItem && hasPassFindingEvidenceFields(lunaItem)) {
    return {
      provenance: MAPPING_PROVENANCE.RAW_LUNA_FIELD_RESULT,
      lunaItem,
      cardLevelOnly: false,
    };
  }

  if (lunaItem) {
    return {
      provenance: MAPPING_PROVENANCE.FIELD_LEVEL_EVIDENCE_MISSING,
      lunaItem,
      cardLevelOnly: false,
    };
  }

  if (options.legacyMappedRecord && isLegacySyntheticMappedRecord(options.legacyMappedRecord)) {
    return {
      provenance: MAPPING_PROVENANCE.SYNTHETIC_FALLBACK_NSR,
      lunaItem: null,
      cardLevelOnly: false,
    };
  }

  return {
    provenance: MAPPING_PROVENANCE.UNAUDITED_MISSING_FIELD_RESULT,
    lunaItem: null,
    cardLevelOnly: false,
  };
}

const { isLinguisticVerdictClosed } = require("./linguistic-closure");

module.exports = {
  MAPPING_PROVENANCE,
  TECHNICAL_MAPPING_STATUS,
  SYNTHETIC_FALLBACK_CONTEXT,
  stableFieldResultKey,
  stableLunaFieldLookupKey,
  hasPassFindingEvidenceFields,
  flattenLunaItemsToFieldCandidates,
  indexFieldLunaItems,
  isLegacySyntheticMappedRecord,
  classifyRowMapping,
  isLinguisticVerdictClosed,
};
