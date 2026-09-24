#!/usr/bin/env node
"use strict";

const { validatedEntry, notFound, baseResult } = require("../adapter-result");
const { SOURCE_ACCESS_OUTCOME } = require("../../official-source-access-constants");
const { lookupLodGermanToLuxembourgish } = require("../../lod-de-reverse-api");

const ADAPTER_ID = "lb-lod-de-reverse-api";
const ADAPTER_VERSION = "1.1.0";

async function lookupLbLodDeReverse({ lookupTerm, authorityName, provenance }) {
  const term = String(lookupTerm || "").trim();
  if (!term) {
    return baseResult({
      outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND,
      adapterId: ADAPTER_ID,
      adapterVersion: ADAPTER_VERSION,
      authorityName,
      searchQuery: `TARGET:lb:lod-de-reverse:${lookupTerm}`,
      error: "empty_lookup_term",
      ...provenance,
    });
  }

  const lookup = await lookupLodGermanToLuxembourgish(term);
  const best = lookup.bestMatch;
  if (!lookup.found || !best) {
    return notFound({
      adapterId: ADAPTER_ID,
      adapterVersion: ADAPTER_VERSION,
      authorityName,
      searchQuery: `TARGET:lb:lod-de-reverse:${term}`,
      requestedUrl: lookup.searchUrl,
      finalUrl: lookup.entryUrl,
      entryUrl: lookup.entryUrl,
      error: lookup.error || "lod_de_reverse_no_dictionary_lemma",
      ...provenance,
    });
  }

  const fragment = [
    `LOD article_id=${best.articleId}`,
    `LB=${best.wordLb}`,
    `DE=${best.deTranslation}`,
    `pos=${best.pos}`,
    `meaning=${best.meaningId}`,
  ].join("; ");

  return validatedEntry({
    adapterId: ADAPTER_ID,
    adapterVersion: ADAPTER_VERSION,
    authorityName,
    searchQuery: `TARGET:lb:lod-de-reverse:${term}`,
    requestedUrl: lookup.searchUrl,
    finalUrl: best.articleUrl,
    entryUrl: best.articleUrl,
    finalDomain: "lod.lu",
    entryHeadwordOrRule: best.wordLb,
    entryOrRule: `LOD DE→LB: ${term} → ${best.wordLb} (${best.articleId})`,
    evidenceFragment: fragment,
    pageTitle: `LOD DE reverse: ${term}`,
    accessedAt: new Date().toISOString(),
    contentSha256: null,
    redirectChain: [],
    httpStatus: 200,
    lodArticleId: best.articleId,
    lodMeaningId: best.meaningId,
    ...provenance,
  });
}

module.exports = {
  ADAPTER_ID,
  ADAPTER_VERSION,
  lookupLbLodDeReverse,
};
