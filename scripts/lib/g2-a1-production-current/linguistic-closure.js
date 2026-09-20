#!/usr/bin/env node
"use strict";

function nonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

const MAPPING_GAP_PROVENANCE = new Set([
  "SYNTHETIC_FALLBACK_NSR",
  "UNAUDITED_MISSING_FIELD_RESULT",
  "FIELD_LEVEL_EVIDENCE_MISSING",
]);

function isLinguisticVerdictClosed(record) {
  if (!record) return false;
  if (MAPPING_GAP_PROVENANCE.has(record.mappingProvenance)) return false;
  if (record.technicalMappingStatus === "MAPPING_GAP") return false;
  return nonEmptyString(record.AUDIT_VERDICT);
}

module.exports = {
  isLinguisticVerdictClosed,
  MAPPING_GAP_PROVENANCE,
};
