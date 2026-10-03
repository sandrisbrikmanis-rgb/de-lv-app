#!/usr/bin/env node
"use strict";

const { lookupDeOfficialEntry } = require("../../g2-a1-production-current/source-adapters/de");
const { lookupTargetOfficialEntry } = require("../../g2-a1-production-current/source-adapters/target");
const { getTargetAdapterMeta } = require("../../g2-a1-production-current/source-adapters/target");
const { SOURCE_ACCESS_OUTCOME } = require("../../g2-a1-production-current/official-source-access-constants");
const { SOURCE_TYPES, EVIDENCE_STATUS } = require("../constants");

function mapOutcomeToEvidenceStatus(outcome, fetched) {
  if (!fetched) return EVIDENCE_STATUS.SOURCE_NOT_FETCHED;
  if (outcome === SOURCE_ACCESS_OUTCOME.SOURCE_FOUND_AND_READ) {
    return EVIDENCE_STATUS.SOURCE_FOUND_AND_READ;
  }
  if (outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND) {
    return EVIDENCE_STATUS.SOURCE_ENTRY_NOT_FOUND;
  }
  if (outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ADAPTER_NOT_IMPLEMENTED) {
    return EVIDENCE_STATUS.ADAPTER_NOT_IMPLEMENTED;
  }
  return EVIDENCE_STATUS.SOURCE_FETCH_FAILED;
}

function planOfficialTarget(lang, binding) {
  const meta = getTargetAdapterMeta(lang);
  return {
    sourceType: SOURCE_TYPES.OFFICIAL_TARGET,
    sourceName: binding?.TARGET_AUTHORITY || meta?.masterUrl || `target-${lang}`,
    sourceUrl: binding?.TARGET_SOURCE_URL || meta?.masterUrl || null,
    sourceDirection: "target_normative",
    evidenceStatus: meta?.lookup
      ? EVIDENCE_STATUS.SOURCE_NOT_FETCHED
      : EVIDENCE_STATUS.ADAPTER_NOT_IMPLEMENTED,
    evidenceNote: meta?.lookup
      ? "Official TARGET adapter registered; fetch pending --execute-sources"
      : `Official TARGET adapter pending (${meta?.id || "missing"})`,
    adapterId: meta?.id || `target-${lang}-pending`,
    fetched: false,
  };
}

function planOfficialDe(binding) {
  return {
    sourceType: SOURCE_TYPES.OFFICIAL_DE,
    sourceName: binding?.DE_AUTHORITY || "DE authority",
    sourceUrl: binding?.DE_SOURCE_URL || null,
    sourceDirection: "de_normative",
    evidenceStatus: EVIDENCE_STATUS.SOURCE_NOT_FETCHED,
    evidenceNote: "DE official lookup (DWDS/Duden chain) pending --execute-sources",
    adapterId: "de-official-dwds-duden",
    fetched: false,
  };
}

async function fetchOfficialTarget({ lang, lookupTerm, binding, allowedDomains }) {
  const meta = getTargetAdapterMeta(lang);
  if (!meta?.lookup) {
    return planOfficialTarget(lang, binding);
  }
  const result = await lookupTargetOfficialEntry({
    appLang: lang,
    lookupTerm,
    allowedDomains: allowedDomains || [],
    authorityName: binding?.TARGET_AUTHORITY,
    provenance: { role: "TARGET", language: lang },
  });
  return {
    sourceType: SOURCE_TYPES.OFFICIAL_TARGET,
    sourceName: binding?.TARGET_AUTHORITY || meta.id,
    sourceUrl: result.sourceUrl || binding?.TARGET_SOURCE_URL || null,
    sourceDirection: "target_normative",
    evidenceStatus: mapOutcomeToEvidenceStatus(result.outcome, true),
    evidenceNote: result.outcome || result.error || null,
    adapterId: meta.id,
    fetched: true,
    rawOutcome: result.outcome,
  };
}

async function fetchOfficialDe({ lookupTerm, binding, allowedDomains }) {
  const result = await lookupDeOfficialEntry({
    lookupTerm,
    allowedDomains: allowedDomains || [],
    authorityName: binding?.DE_AUTHORITY,
    provenance: { role: "DE", language: "de" },
  });
  return {
    sourceType: SOURCE_TYPES.OFFICIAL_DE,
    sourceName: binding?.DE_AUTHORITY || "DE authority",
    sourceUrl: result.sourceUrl || binding?.DE_SOURCE_URL || null,
    sourceDirection: "de_normative",
    evidenceStatus: mapOutcomeToEvidenceStatus(result.outcome, true),
    evidenceNote: result.outcome || result.error || null,
    adapterId: result.adapterId || "de-official",
    fetched: true,
    rawOutcome: result.outcome,
  };
}

module.exports = {
  planOfficialTarget,
  planOfficialDe,
  fetchOfficialTarget,
  fetchOfficialDe,
  mapOutcomeToEvidenceStatus,
};
