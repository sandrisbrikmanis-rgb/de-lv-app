#!/usr/bin/env node
"use strict";

const { fetchAllowlistedPage, htmlToPlainText } = require("../http-page");
const { validatedEntry, notFound, fromPageFailure } = require("../adapter-result");
const { SOURCE_ACCESS_OUTCOME } = require("../../official-source-access-constants");

const ADAPTER_ID = "de-duden-rechtschreibung-entry";
const ADAPTER_VERSION = "1.0.0";

function entryUrlForLemma(lemma) {
  const slug = String(lemma || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_");
  return `https://www.duden.de/rechtschreibung/${encodeURIComponent(slug)}`;
}

function isSearchNotEntry(finalUrl) {
  return /suchen\/dudenonline/i.test(finalUrl || "");
}

function parseDudenEntry(html, finalUrl, expectedLemma) {
  if (isSearchNotEntry(finalUrl)) return null;
  const og = html.match(/property="og:title"\s+content="([^"]+)"/i);
  const title = og ? og[1] : "";
  const headFromTitle = title.split("▶")[0].trim().toLowerCase();
  if (!headFromTitle || headFromTitle !== String(expectedLemma).toLowerCase()) {
    return { validated: false, reason: "title_lemma_mismatch", title };
  }
  let fragment = "";
  const bed = html.match(/id="bedeutung"[\s\S]*?<\/section>/i);
  if (bed) fragment = htmlToPlainText(bed[0]).slice(0, 1200);
  if (!fragment) {
    const desc = html.match(/property="og:description"\s+content="([^"]+)"/i);
    if (desc) fragment = htmlToPlainText(desc[1]).slice(0, 800);
  }
  if (!fragment || fragment.length < 25) return { validated: false, reason: "missing_bedeutung", title };
  return { validated: true, headword: headFromTitle, fragment, title };
}

async function lookupDeDuden({ lookupTerm, allowedDomains, authorityName, provenance }) {
  const url = entryUrlForLemma(lookupTerm);
  const page = await fetchAllowlistedPage(url, { allowedDomains });
  if (page.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_PAGE_FETCHED) {
    return fromPageFailure(page, {
      adapterId: ADAPTER_ID,
      adapterVersion: ADAPTER_VERSION,
      authorityName,
      searchQuery: `DE:duden:${lookupTerm}`,
      entryUrl: url,
      ...provenance,
    });
  }
  const parsed = parseDudenEntry(page.html, page.finalUrl, lookupTerm);
  if (!parsed || !parsed.validated) {
    return notFound({
      adapterId: ADAPTER_ID,
      adapterVersion: ADAPTER_VERSION,
      authorityName,
      searchQuery: `DE:duden:${lookupTerm}`,
      requestedUrl: url,
      finalUrl: page.finalUrl,
      entryUrl: page.finalUrl,
      pageTitle: page.pageTitle,
      accessedAt: page.accessedAt,
      contentSha256: page.contentSha256,
      error: parsed?.reason || "not_entry_page",
      ...provenance,
    });
  }
  return validatedEntry({
    adapterId: ADAPTER_ID,
    adapterVersion: ADAPTER_VERSION,
    authorityName,
    searchQuery: `DE:duden:${lookupTerm}`,
    requestedUrl: url,
    finalUrl: page.finalUrl,
    entryUrl: page.finalUrl,
    finalDomain: page.finalDomain,
    entryHeadwordOrRule: parsed.headword,
    entryOrRule: `Duden Rechtschreibung: ${parsed.headword}`,
    evidenceFragment: parsed.fragment,
    pageTitle: parsed.title || page.pageTitle,
    accessedAt: page.accessedAt,
    contentSha256: page.contentSha256,
    redirectChain: page.redirectChain,
    httpStatus: page.httpStatus,
    ...provenance,
  });
}

module.exports = {
  ADAPTER_ID,
  lookupDeDuden,
  entryUrlForLemma,
  parseDudenEntry,
};
