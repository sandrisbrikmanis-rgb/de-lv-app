#!/usr/bin/env node
"use strict";

const { buildAllowlistForLanguage } = require("./registry-domain-allowlist");
const {
  deLookupCandidateUrls,
  targetLookupCandidateUrls,
  fetchFirstSuccessful,
  fetchOfficialUrl,
} = require("./official-source-fetch");
const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");

function deSearchTerm(fieldRequest) {
  return fieldRequest.cardContext?.de || fieldRequest.DE || fieldRequest.cardId || null;
}

function targetSearchTerm(fieldRequest) {
  if (fieldRequest.fieldPath?.includes(".native")) {
    return fieldRequest.CURRENT || fieldRequest.cardContext?.targetHeadword || null;
  }
  return fieldRequest.CURRENT || fieldRequest.cardContext?.targetHeadword || null;
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

  const deTerm = deSearchTerm(fieldRequest);
  const targetTerm = targetSearchTerm(fieldRequest);

  const deCandidates = deLookupCandidateUrls(deTerm, allow.de.allowedDomains);
  const de = await fetchFirstSuccessful(deCandidates, {
    allowedDomains: allow.de.allowedDomains,
    searchQuery: `DE:${deTerm}`,
    searchTerm: deTerm,
  });
  de.authorityName = allow.de.authorityName;
  de.role = "DE";
  de.language = "de";
  de.cardId = fieldRequest.cardId;
  de.fieldPath = fieldRequest.fieldPath;

  const targetCandidates = targetLookupCandidateUrls(fieldRequest.language, targetTerm, allow.target.allowedDomains);
  const target = await fetchFirstSuccessful(targetCandidates, {
    allowedDomains: allow.target.allowedDomains,
    searchQuery: `TARGET:${fieldRequest.language}:${targetTerm}`,
    searchTerm: targetTerm,
  });
  target.authorityName = allow.target.authorityName;
  target.role = "TARGET";
  target.language = fieldRequest.language;
  target.cardId = fieldRequest.cardId;
  target.fieldPath = fieldRequest.fieldPath;

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

function bothSourcesReadable(bundle) {
  return (
    bundle?.de?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_FOUND_AND_READ &&
    bundle?.target?.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_FOUND_AND_READ
  );
}

function isTechnicalSourceAccessOutcome(outcome) {
  return outcome && outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_FOUND_AND_READ && outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND;
}

function mapPrefetchToPromptEvidence(bundle) {
  const mapSide = (side) => ({
    authorityName: side.authorityName,
    accessOutcome: side.outcome,
    searchQuery: side.searchQuery,
    requestedUrl: side.requestedUrl,
    finalUrl: side.finalUrl,
    finalDomain: side.finalDomain,
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
  bothSourcesReadable,
  isTechnicalSourceAccessOutcome,
  mapPrefetchToPromptEvidence,
  deSearchTerm,
  targetSearchTerm,
  fetchOfficialUrl,
  SOURCE_ACCESS_OUTCOME,
};
