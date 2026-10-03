#!/usr/bin/env node
"use strict";

const { URL } = require("url");
const { fetchAllowlistedPage } = require("./http-page");
const { validatedEntry, notFound, fromPageFailure, baseResult } = require("./adapter-result");
const { SOURCE_ACCESS_OUTCOME } = require("../official-source-access-constants");
const { readCached, writeCached } = require("./fetch-cache");
const { withDomainLock } = require("./domain-queue");
const { ADAPTER_TYPES } = require("./adapter-types");

function isHomepageUrl(url) {
  try {
    const u = new URL(url);
    const path = u.pathname.replace(/\/+$/, "") || "";
    if (path !== "") return false;
    return !u.search && !u.hash;
  } catch {
    return true;
  }
}

function createBlockedAdapter(config) {
  return async function lookupBlocked(ctx) {
    return baseResult({
      outcome: config.blockedOutcome,
      adapterId: config.adapterId,
      adapterVersion: config.adapterVersion,
      adapterType: ADAPTER_TYPES.BLOCKED_OFFICIAL_SOURCE,
      authorityName: ctx.authorityName,
      searchQuery: `TARGET:${config.appLang}:${ctx.lookupTerm}`,
      error: config.blockedReason,
      limitations: config.knownLimitations || [],
      ...ctx.provenance,
    });
  };
}

function createConfigAdapter(config) {
  if (config.blockedOutcome || config.liveIntegrationStatus === "BLOCKED" || config.adapterType === ADAPTER_TYPES.BLOCKED_OFFICIAL_SOURCE) {
    return createBlockedAdapter({
      ...config,
      blockedOutcome: config.blockedOutcome || SOURCE_ACCESS_OUTCOME.SOURCE_NO_MACHINE_READABLE_ENTRY,
      blockedReason: config.blockedReason || config.knownLimitations?.[0] || "BLOCKED_OFFICIAL_SOURCE",
    });
  }

  return async function lookupConfigured(ctx) {
    const { lookupTerm, allowedDomains, authorityName, provenance } = ctx;
    const urls = config.buildEntryUrls(lookupTerm);
    let last = null;

    for (const url of urls) {
      if (isHomepageUrl(url)) continue;
      const host = new URL(url).hostname;
      // eslint-disable-next-line no-await-in-loop
      const page = await withDomainLock(host, async () => {
        const cached = readCached(url);
        if (cached?.html && cached.contentSha256) {
          return {
            outcome: SOURCE_ACCESS_OUTCOME.SOURCE_PAGE_FETCHED,
            requestedUrl: url,
            finalUrl: cached.finalUrl || url,
            html: cached.html,
            pageTitle: cached.pageTitle,
            contentSha256: cached.contentSha256,
            redirectChain: cached.redirectChain || [],
            accessedAt: cached.accessedAt || cached.cachedAt,
            finalDomain: host,
            httpStatus: cached.httpStatus || 200,
          };
        }
        const fetched = await fetchAllowlistedPage(url, { allowedDomains });
        if (fetched.html && fetched.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_PAGE_FETCHED) {
          writeCached(url, {
            html: fetched.html,
            finalUrl: fetched.finalUrl,
            pageTitle: fetched.pageTitle,
            contentSha256: fetched.contentSha256,
            redirectChain: fetched.redirectChain,
            accessedAt: fetched.accessedAt,
            httpStatus: fetched.httpStatus,
          });
        }
        return fetched;
      });

      last = page;
      if (page.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_PAGE_FETCHED) {
        last = fromPageFailure(page, {
          adapterId: config.adapterId,
          adapterVersion: config.adapterVersion,
          authorityName,
          searchQuery: `${config.appLang}:${lookupTerm}`,
          entryUrl: url,
          ...provenance,
        });
        continue;
      }

      const parsed = config.parseEntry(page.html, {
        lookupTerm,
        finalUrl: page.finalUrl,
        requestedUrl: url,
        page,
      });

      if (!parsed?.validated) {
        last = notFound({
          adapterId: config.adapterId,
          adapterVersion: config.adapterVersion,
          authorityName,
          searchQuery: `${config.appLang}:${lookupTerm}`,
          requestedUrl: url,
          finalUrl: page.finalUrl,
          entryUrl: parsed?.entryUrl || page.finalUrl,
          pageTitle: page.pageTitle,
          accessedAt: page.accessedAt,
          contentSha256: page.contentSha256,
          redirectChain: page.redirectChain,
          httpStatus: page.httpStatus,
          finalDomain: page.finalDomain,
          error: parsed?.reason || "entry_not_validated",
          ...provenance,
        });
        continue;
      }

      if (isHomepageUrl(parsed.entryUrl || page.finalUrl)) {
        last = notFound({
          adapterId: config.adapterId,
          adapterVersion: config.adapterVersion,
          authorityName,
          requestedUrl: url,
          finalUrl: page.finalUrl,
          error: "homepage_not_entry",
          ...provenance,
        });
        continue;
      }

      return validatedEntry({
        adapterId: config.adapterId,
        adapterVersion: config.adapterVersion,
        authorityName,
        searchQuery: `${config.appLang}:${lookupTerm}`,
        requestedUrl: url,
        finalUrl: page.finalUrl,
        entryUrl: parsed.entryUrl || page.finalUrl,
        finalDomain: page.finalDomain,
        entryHeadwordOrRule: parsed.headword,
        entryOrRule: parsed.entryOrRule,
        evidenceFragment: parsed.fragment,
        pageTitle: page.pageTitle,
        accessedAt: page.accessedAt,
        contentSha256: page.contentSha256,
        redirectChain: page.redirectChain,
        httpStatus: page.httpStatus,
        adapterType: config.adapterType,
        lookupType: config.lookupType,
        ...provenance,
      });
    }

    return (
      last ||
      notFound({
        adapterId: config.adapterId,
        adapterVersion: config.adapterVersion,
        authorityName,
        searchQuery: `${config.appLang}:${lookupTerm}`,
        error: "NO_ENTRY_URL",
        ...provenance,
      })
    );
  };
}

module.exports = { createConfigAdapter, createBlockedAdapter, isHomepageUrl };
