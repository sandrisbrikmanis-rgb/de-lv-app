#!/usr/bin/env node
"use strict";

const { fetchAllowlistedPage, htmlToPlainText } = require("../http-page");
const { validatedEntry, notFound, fromPageFailure } = require("../adapter-result");
const { SOURCE_ACCESS_OUTCOME } = require("../../official-source-access-constants");

const ADAPTER_ID = "de-dwds-wb-entry";
const ADAPTER_VERSION = "1.0.0";

function entryUrlForLemma(lemma) {
  return `https://www.dwds.de/wb/${encodeURIComponent(String(lemma || "").trim())}`;
}

function parseDwdsEntry(html, expectedLemma) {
  const lemmaMatch = html.match(/class="dwdswb-ft-lemmaansatz"[\s\S]*?<b>([^<]+)<\/b>/i);
  if (!lemmaMatch) return null;
  const headword = lemmaMatch[1].trim();
  if (headword.toLowerCase() !== String(expectedLemma).toLowerCase()) {
    return { headword, validated: false, reason: "lemma_mismatch" };
  }
  let fragment = "";
  const bed = html.match(/class="dwdswb-kwbedeutungen"[\s\S]{0,8000}/i);
  if (bed) fragment = htmlToPlainText(bed[0]).slice(0, 1200);
  if (!fragment || fragment.length < 30) {
    const art = html.match(/class="dwdswb-artikel"[\s\S]{0,12000}/i);
    if (art) fragment = htmlToPlainText(art[0]).slice(0, 1200);
  }
  if (!fragment || fragment.length < 30) return { headword, validated: false, reason: "missing_definition_block" };
  return { headword, validated: true, fragment };
}

async function lookupDeDwds({ lookupTerm, allowedDomains, authorityName, provenance }) {
  const url = entryUrlForLemma(lookupTerm);
  const page = await fetchAllowlistedPage(url, { allowedDomains });
  if (page.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_PAGE_FETCHED) {
    return fromPageFailure(page, {
      adapterId: ADAPTER_ID,
      adapterVersion: ADAPTER_VERSION,
      authorityName,
      searchQuery: `DE:dwds:${lookupTerm}`,
      entryUrl: url,
      ...provenance,
    });
  }
  const parsed = parseDwdsEntry(page.html, lookupTerm);
  if (!parsed) {
    return notFound({
      adapterId: ADAPTER_ID,
      adapterVersion: ADAPTER_VERSION,
      authorityName,
      searchQuery: `DE:dwds:${lookupTerm}`,
      requestedUrl: url,
      finalUrl: page.finalUrl,
      entryUrl: page.finalUrl,
      finalDomain: page.finalDomain,
      pageTitle: page.pageTitle,
      accessedAt: page.accessedAt,
      contentSha256: page.contentSha256,
      redirectChain: page.redirectChain,
      httpStatus: page.httpStatus,
      ...provenance,
    });
  }
  if (!parsed.validated) {
    return notFound({
      adapterId: ADAPTER_ID,
      adapterVersion: ADAPTER_VERSION,
      authorityName,
      searchQuery: `DE:dwds:${lookupTerm}`,
      requestedUrl: url,
      finalUrl: page.finalUrl,
      entryUrl: page.finalUrl,
      entryHeadwordOrRule: parsed.headword,
      error: parsed.reason,
      ...provenance,
    });
  }
  return validatedEntry({
    adapterId: ADAPTER_ID,
    adapterVersion: ADAPTER_VERSION,
    authorityName,
    searchQuery: `DE:dwds:${lookupTerm}`,
    requestedUrl: url,
    finalUrl: page.finalUrl,
    entryUrl: page.finalUrl,
    finalDomain: page.finalDomain,
    entryHeadwordOrRule: parsed.headword,
    entryOrRule: `DWDS Wortartikel: ${parsed.headword}`,
    evidenceFragment: parsed.fragment,
    pageTitle: page.pageTitle,
    accessedAt: page.accessedAt,
    contentSha256: page.contentSha256,
    redirectChain: page.redirectChain,
    httpStatus: page.httpStatus,
    ...provenance,
  });
}

module.exports = {
  ADAPTER_ID,
  lookupDeDwds,
  entryUrlForLemma,
  parseDwdsEntry,
};
