#!/usr/bin/env node
"use strict";

const { buildAllowlistForLanguage } = require("./registry-domain-allowlist");
const { normalizeDeLemma, normalizeTargetLookup } = require("./source-adapters/lookup-normalization");
const { lookupDeOfficialEntry } = require("./source-adapters/de");
const { lookupTargetOfficialEntry } = require("./source-adapters/target");
const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");

function attachNormalization(side, norm) {
  return {
    ...side,
    originalCurrent: norm.originalCurrent,
    lookupTerm: norm.lookupTerm,
    normalizedHeadword: norm.normalizedHeadword,
    normalizationReason: norm.normalizationReason,
  };
}

async function accessOfficialSourcesForField(fieldRequest) {
  const allow = buildAllowlistForLanguage(fieldRequest.language);
  if (!allow.pass) {
    const fail = {
      outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED,
      error: allow.error || "ALLOWLIST_FAIL",
    };
    return {
      language: fieldRequest.language,
      cardId: fieldRequest.cardId,
      fieldPath: fieldRequest.fieldPath,
      identityKey: fieldRequest.identityKey,
      de: { ...fail, authorityName: null, role: "DE" },
      target: { ...fail, authorityName: null, role: "TARGET" },
    };
  }

  const deNorm = normalizeDeLemma(fieldRequest);
  const targetNorm = normalizeTargetLookup(fieldRequest);
  const provenance = {
    role: null,
    language: fieldRequest.language,
    cardId: fieldRequest.cardId,
    fieldPath: fieldRequest.fieldPath,
    originalCurrent: fieldRequest.CURRENT,
    lookupTerm: null,
    normalizedHeadword: null,
    normalizationReason: null,
  };

  const de = attachNormalization(
    await lookupDeOfficialEntry({
      lookupTerm: deNorm.lookupTerm,
      allowedDomains: allow.de.allowedDomains,
      authorityName: allow.de.authorityName,
      provenance: { ...provenance, role: "DE", language: "de", ...deNorm },
    }),
    deNorm,
  );
  de.role = "DE";

  const target = attachNormalization(
    await lookupTargetOfficialEntry({
      appLang: fieldRequest.language,
      lookupTerm: targetNorm.lookupTerm,
      allowedDomains: allow.target.allowedDomains,
      authorityName: allow.target.authorityName,
      provenance: { ...provenance, role: "TARGET", ...targetNorm },
    }),
    targetNorm,
  );
  target.role = "TARGET";

  return {
    language: fieldRequest.language,
    cardId: fieldRequest.cardId,
    fieldPath: fieldRequest.fieldPath,
    identityKey: fieldRequest.identityKey,
    de,
    target,
  };
}

async function prefetchBatchSourceEvidence(fieldRequests, options = {}) {
  const concurrency = options.concurrency || 3;
  const out = new Map();
  const queue = [...fieldRequests];
  async function worker() {
    while (queue.length) {
      const req = queue.shift();
      if (!req) break;
      const bundle = await accessOfficialSourcesForField(req);
      out.set(req.identityKey, bundle);
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, fieldRequests.length) }, () => worker());
  await Promise.all(workers);
  return out;
}

function bothSourcesEntryValidated(bundle) {
  return (
    bundle?.de?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED &&
    bundle?.target?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED
  );
}

function isTechnicalSourceAccessOutcome(outcome) {
  return (
    outcome &&
    outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED &&
    outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND
  );
}

function mapPrefetchToPromptEvidence(bundle) {
  const mapSide = (side) => ({
    authorityName: side.authorityName,
    accessOutcome: side.outcome,
    adapterId: side.adapterId,
    adapterVersion: side.adapterVersion,
    searchQuery: side.searchQuery,
    originalCurrent: side.originalCurrent,
    lookupTerm: side.lookupTerm,
    normalizedHeadword: side.normalizedHeadword,
    normalizationReason: side.normalizationReason,
    requestedUrl: side.requestedUrl,
    finalUrl: side.finalUrl,
    entryUrl: side.entryUrl,
    finalDomain: side.finalDomain,
    entryHeadwordOrRule: side.entryHeadwordOrRule,
    entryOrRule: side.entryOrRule,
    evidenceFragment: side.evidenceFragment,
    pageTitle: side.pageTitle,
    accessedAt: side.accessedAt,
    contentSha256: side.contentSha256,
    redirectChain: side.redirectChain,
  });
  return {
    DE_OFFICIAL_SOURCE: mapSide(bundle.de),
    TARGET_OFFICIAL_SOURCE: mapSide(bundle.target),
  };
}

module.exports = {
  accessOfficialSourcesForField,
  prefetchBatchSourceEvidence,
  bothSourcesEntryValidated,
  bothSourcesReadable: bothSourcesEntryValidated,
  isTechnicalSourceAccessOutcome,
  mapPrefetchToPromptEvidence,
  deSearchTerm: (r) => normalizeDeLemma(r).lookupTerm,
  targetSearchTerm: (r) => normalizeTargetLookup(r).lookupTerm,
  SOURCE_ACCESS_OUTCOME,
};
