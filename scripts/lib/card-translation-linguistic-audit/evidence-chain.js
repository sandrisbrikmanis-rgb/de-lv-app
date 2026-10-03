#!/usr/bin/env node
"use strict";

const { buildAllowlistForLanguage } = require("../g2-a1-production-current/registry-domain-allowlist");
const { normalizeDeLemma, normalizeTargetLookup } = require("../g2-a1-production-current/source-adapters/lookup-normalization");
const { primaryBilingualSource } = require("./bilingual-catalog");
const { officialBindingForLang } = require("./registry-load");
const { lookupBilingualDictionaryEntry } = require("./adapters/bilingual-dictionary");
const {
  planOfficialDe,
  planOfficialTarget,
  fetchOfficialDe,
  fetchOfficialTarget,
} = require("./adapters/official-sources");
const { SOURCE_TYPES, EVIDENCE_STATUS } = require("./constants");

function pickPrimaryEvidence(steps) {
  const priority = [
    EVIDENCE_STATUS.SOURCE_FOUND_AND_READ,
    EVIDENCE_STATUS.SOURCE_ENTRY_NOT_FOUND,
    EVIDENCE_STATUS.BILINGUAL_CATALOG_BOUND,
    EVIDENCE_STATUS.ADAPTER_NOT_IMPLEMENTED,
    EVIDENCE_STATUS.SOURCE_NOT_FETCHED,
    EVIDENCE_STATUS.FIELD_INVENTORIED,
  ];
  for (const status of priority) {
    const hit = steps.find((s) => s.evidenceStatus === status);
    if (hit) return hit;
  }
  return steps[steps.length - 1] || null;
}

/**
 * Chain: bilingual dictionary → official TARGET → official DE (fallback).
 * Missing bilingual hit must not abort; later steps always planned.
 */
async function buildEvidenceForField(field, options = {}) {
  const { executeSources = false } = options;
  const regBind = officialBindingForLang(field.language);
  const binding = regBind.pass ? regBind.binding : null;
  const bilingual = primaryBilingualSource(field.language);

  const deNorm = normalizeDeLemma({
    cardId: field.cardId,
    fieldPath: field.fieldPath,
    CURRENT: field.currentValue,
    de: field.deValue,
  });
  const targetNorm = normalizeTargetLookup({
    cardId: field.cardId,
    fieldPath: field.fieldPath,
    CURRENT: field.currentValue,
    de: field.deValue,
  });

  const steps = [];

  if (bilingual.bound && bilingual.source) {
    const bi = executeSources
      ? await lookupBilingualDictionaryEntry({
          source: bilingual.source,
          deLemma: deNorm.lookupTerm,
          targetLemma: targetNorm.lookupTerm,
          language: field.language,
        })
      : {
          ...(await lookupBilingualDictionaryEntry({
            source: bilingual.source,
            deLemma: deNorm.lookupTerm,
            targetLemma: targetNorm.lookupTerm,
            language: field.language,
          })),
          evidenceStatus: EVIDENCE_STATUS.BILINGUAL_CATALOG_BOUND,
          evidenceNote: `Catalog-bound primary ${bilingual.source.id}; lookup stub (dry-run)`,
        };
    steps.push(bi);
  } else {
    steps.push({
      sourceType: SOURCE_TYPES.BILINGUAL_DICTIONARY,
      sourceName: null,
      sourceUrl: null,
      sourceDirection: null,
      evidenceStatus: EVIDENCE_STATUS.ADAPTER_NOT_IMPLEMENTED,
      evidenceNote: `No bilingual audit catalog entry for ${field.language}`,
      adapterId: "bilingual-none",
      fetched: false,
    });
  }

  const allow = buildAllowlistForLanguage(field.language);
  let targetStep = planOfficialTarget(field.language, binding);
  let deStep = planOfficialDe(binding);

  if (executeSources && allow.pass) {
    targetStep = await fetchOfficialTarget({
      lang: field.language,
      lookupTerm: targetNorm.lookupTerm,
      binding,
      allowedDomains: allow.target.allowedDomains,
    });
    deStep = await fetchOfficialDe({
      lookupTerm: deNorm.lookupTerm,
      binding,
      allowedDomains: allow.de.allowedDomains,
    });
  }

  steps.push(targetStep);
  steps.push(deStep);

  const primary = pickPrimaryEvidence(steps) || {
    sourceType: SOURCE_TYPES.AUDIT_PLAN,
    sourceName: "linguistic_audit_chain",
    sourceUrl: null,
    sourceDirection: "de→target",
    evidenceStatus: EVIDENCE_STATUS.FIELD_INVENTORIED,
    evidenceNote: "empty chain",
  };

  return {
    level: field.level,
    language: field.language,
    cardId: field.cardId,
    fieldPath: field.fieldPath,
    currentValue: field.currentValue,
    deValue: field.deValue,
    sourceType: primary.sourceType,
    sourceName: primary.sourceName,
    sourceUrl: primary.sourceUrl,
    sourceDirection: primary.sourceDirection,
    evidenceStatus: field.deValue ? primary.evidenceStatus : EVIDENCE_STATUS.FIELD_INVENTORIED,
    evidenceNote: primary.evidenceNote,
    chainSteps: steps,
    registryBinding: binding,
    bilingualCatalogId: bilingual.binding?.catalogId || null,
    dryRun: !executeSources,
  };
}

module.exports = {
  buildEvidenceForField,
  pickPrimaryEvidence,
};
