#!/usr/bin/env node
"use strict";

const { validatedEntry, notFound, baseResult } = require("../adapter-result");
const { SOURCE_ACCESS_OUTCOME } = require("../../official-source-access-constants");
const {
  buildLodDeSichUrl,
  lookupLodGermanToLuxembourgish,
} = require("../../lod-de-reverse-api");

const ADAPTER_ID = "lb-lod-de-reverse-api";
const ADAPTER_VERSION = "1.0.0";

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
  if (!lookup.found) {
    return notFound({
      adapterId: ADAPTER_ID,
      adapterVersion: ADAPTER_VERSION,
      authorityName,
      searchQuery: `TARGET:lb:lod-de-reverse:${term}`,
      requestedUrl: lookup.searchUrl,
      finalUrl: lookup.entryUrl,
      entryUrl: lookup.entryUrl,
      error: lookup.error || "lod_de_reverse_no_lb_headword",
      ...provenance,
    });
  }

  const headword = lookup.lbHeadwords[0];
  const fragment = lookup.lbHeadwords.slice(0, 4).join("; ");
  return validatedEntry({
    adapterId: ADAPTER_ID,
    adapterVersion: ADAPTER_VERSION,
    authorityName,
    searchQuery: `TARGET:lb:lod-de-reverse:${term}`,
    requestedUrl: lookup.searchUrl,
    finalUrl: lookup.entryUrl,
    entryUrl: lookup.entryUrl,
    finalDomain: "lod.lu",
    entryHeadwordOrRule: headword,
    entryOrRule: `LOD DE→LB: ${term} → ${headword}`,
    evidenceFragment: `LOD /api/de/search DE="${term}" → LB: ${fragment}`,
    pageTitle: `LOD DE reverse: ${term}`,
    accessedAt: new Date().toISOString(),
    contentSha256: null,
    redirectChain: [],
    httpStatus: 200,
    ...provenance,
  });
}

module.exports = {
  ADAPTER_ID,
  ADAPTER_VERSION,
  lookupLbLodDeReverse,
  buildLodDeSichUrl,
};
