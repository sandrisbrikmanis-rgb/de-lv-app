#!/usr/bin/env node
"use strict";

const { fetchAllowlistedPage, htmlToPlainText } = require("../http-page");
const { validatedEntry, notFound, fromPageFailure } = require("../adapter-result");
const { SOURCE_ACCESS_OUTCOME } = require("../../official-source-access-constants");

const ADAPTER_ID = "et-sonaveeb-eki-entry";
const ADAPTER_VERSION = "1.0.0";

function entryUrlForLemma(lemma) {
  return `https://sonaveeb.ee/search/unif/dlall/rune/${encodeURIComponent(String(lemma || "").trim())}/est/eng`;
}

function parseSonaveebEntry(html, expectedLemma) {
  const h1 = html.match(/class="search__lex-title"[\s\S]*?<span>([^<]+)<\/span>/i);
  if (!h1) return null;
  const headword = h1[1].trim();
  if (headword.toLowerCase() !== String(expectedLemma).toLowerCase()) {
    return { validated: false, reason: "headword_mismatch", headword };
  }
  const block = html.match(/class="search__lex-title"[\s\S]*?class="search__lex-meanings"/i);
  let fragment = block ? htmlToPlainText(block[0]).slice(0, 1200) : "";
  if (!fragment || fragment.length < 20) {
    const alt = html.match(/data-clipboard-text="[^"]*õppima[^"]*"/i);
    fragment = alt ? htmlToPlainText(alt[0]) : htmlToPlainText(html).slice(0, 600);
  }
  if (fragment.length < 20) return { validated: false, reason: "missing_meaning", headword };
  return { validated: true, headword, fragment };
}

async function lookupEtSonaveeb({ lookupTerm, allowedDomains, authorityName, provenance }) {
  const url = entryUrlForLemma(lookupTerm);
  const page = await fetchAllowlistedPage(url, { allowedDomains });
  if (page.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_PAGE_FETCHED) {
    return fromPageFailure(page, {
      adapterId: ADAPTER_ID,
      adapterVersion: ADAPTER_VERSION,
      authorityName,
      searchQuery: `TARGET:et:sonaveeb:${lookupTerm}`,
      entryUrl: url,
      ...provenance,
    });
  }
  const parsed = parseSonaveebEntry(page.html, lookupTerm);
  if (!parsed || !parsed.validated) {
    return notFound({
      adapterId: ADAPTER_ID,
      adapterVersion: ADAPTER_VERSION,
      authorityName,
      searchQuery: `TARGET:et:sonaveeb:${lookupTerm}`,
      requestedUrl: url,
      finalUrl: page.finalUrl,
      entryUrl: page.finalUrl,
      error: parsed?.reason || "entry_not_located",
      ...provenance,
    });
  }
  return validatedEntry({
    adapterId: ADAPTER_ID,
    adapterVersion: ADAPTER_VERSION,
    authorityName,
    searchQuery: `TARGET:et:sonaveeb:${lookupTerm}`,
    requestedUrl: url,
    finalUrl: page.finalUrl,
    entryUrl: page.finalUrl,
    finalDomain: page.finalDomain,
    entryHeadwordOrRule: parsed.headword,
    entryOrRule: `Sõnaveeb/EKI entry: ${parsed.headword}`,
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
  lookupEtSonaveeb,
  entryUrlForLemma,
  parseSonaveebEntry,
};
