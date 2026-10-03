#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const { URL } = require("url");
const { validatedEntry, notFound, baseResult } = require("../adapter-result");
const { SOURCE_ACCESS_OUTCOME, SOURCE_ACCESS_METHOD } = require("../../official-source-access-constants");
const { ADAPTER_TYPES } = require("../adapter-types");
const { withDomainBrowserSession } = require("./pool");
const { readBrowserCached, writeBrowserCached, cacheKey } = require("./cache");
const { getBrowserFlow } = require("./flows");
const { isHomepageUrl } = require("../create-config-adapter");

function sha256(text) {
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

function createBrowserAdapter(config) {
  const runner = getBrowserFlow(config.browserFlowId);
  if (!runner) {
    return async function lookupBrowserMissing(ctx) {
      return baseResult({
        outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ADAPTER_NOT_IMPLEMENTED,
        adapterId: config.adapterId,
        adapterVersion: config.adapterVersion,
        error: `MISSING_BROWSER_FLOW:${config.browserFlowId}`,
        authorityName: ctx.authorityName,
        searchQuery: `${config.appLang}:${ctx.lookupTerm}`,
        ...ctx.provenance,
      });
    };
  }

  return async function lookupBrowser(ctx) {
    const { lookupTerm, allowedDomains, authorityName, provenance } = ctx;
    const authoritySeed = config.primaryDomain || config.browserFlowId;
    const cachedKey = cacheKey({
      appLang: config.appLang,
      lookupTerm,
      authoritySeed,
      entryUrl: "",
    });
    const cached = readBrowserCached(cachedKey);
    if (cached?.validated && cached.entryUrl) {
      return validatedEntry({
        adapterId: config.adapterId,
        adapterVersion: config.adapterVersion,
        adapterType: ADAPTER_TYPES.PUBLIC_BROWSER_SESSION,
        accessMethod: SOURCE_ACCESS_METHOD.PUBLIC_BROWSER_SESSION,
        authorityName,
        searchQuery: `${config.appLang}:${lookupTerm}`,
        requestedUrl: cached.searchUrl,
        finalUrl: cached.entryUrl,
        entryUrl: cached.entryUrl,
        finalDomain: new URL(cached.entryUrl).hostname,
        entryHeadwordOrRule: cached.headword,
        entryOrRule: cached.entryOrRule,
        evidenceFragment: cached.fragment,
        pageTitle: cached.pageTitle || null,
        accessedAt: cached.accessedAt,
        contentSha256: cached.contentSha256,
        redirectChain: cached.redirectChain || [],
        httpStatus: 200,
        lookupType: config.lookupType || "browser-flow",
        browserFlowId: config.browserFlowId,
        searchUrl: cached.searchUrl,
        ...provenance,
      });
    }

    const primaryHost = config.primaryDomain || "localhost";
    let flowResult;
    try {
      flowResult = await withDomainBrowserSession(primaryHost, async (page) => {
        const r = await runner(page, lookupTerm, allowedDomains);
        const title = await page.title().catch(() => null);
        return { ...r, pageTitle: title };
      });
    } catch (e) {
      return baseResult({
        outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED,
        adapterId: config.adapterId,
        adapterVersion: config.adapterVersion,
        adapterType: ADAPTER_TYPES.PUBLIC_BROWSER_SESSION,
        accessMethod: SOURCE_ACCESS_METHOD.PUBLIC_BROWSER_SESSION,
        authorityName,
        searchQuery: `${config.appLang}:${lookupTerm}`,
        error: String(e.message || e),
        browserFlowId: config.browserFlowId,
        ...provenance,
      });
    }

    if (!flowResult?.validated) {
      return notFound({
        adapterId: config.adapterId,
        adapterVersion: config.adapterVersion,
        adapterType: ADAPTER_TYPES.PUBLIC_BROWSER_SESSION,
        accessMethod: SOURCE_ACCESS_METHOD.PUBLIC_BROWSER_SESSION,
        authorityName,
        searchQuery: `${config.appLang}:${lookupTerm}`,
        requestedUrl: flowResult?.searchUrl,
        finalUrl: flowResult?.finalUrl,
        entryUrl: flowResult?.finalUrl,
        error: flowResult?.reason || "browser_entry_not_validated",
        browserFlowId: config.browserFlowId,
        searchUrl: flowResult?.searchUrl,
        ...provenance,
      });
    }

    if (isHomepageUrl(flowResult.entryUrl)) {
      return notFound({
        adapterId: config.adapterId,
        adapterVersion: config.adapterVersion,
        error: "homepage_not_entry",
        browserFlowId: config.browserFlowId,
        ...provenance,
      });
    }

    const contentSha256 = sha256(flowResult.fragment);
    const accessedAt = new Date().toISOString();
    writeBrowserCached(cachedKey, {
      validated: true,
      searchUrl: flowResult.searchUrl,
      entryUrl: flowResult.entryUrl,
      headword: flowResult.headword,
      fragment: flowResult.fragment,
      entryOrRule: flowResult.entryOrRule,
      pageTitle: flowResult.pageTitle,
      accessedAt,
      contentSha256,
    });

    return validatedEntry({
      adapterId: config.adapterId,
      adapterVersion: config.adapterVersion,
      adapterType: ADAPTER_TYPES.PUBLIC_BROWSER_SESSION,
      accessMethod: SOURCE_ACCESS_METHOD.PUBLIC_BROWSER_SESSION,
      authorityName,
      searchQuery: `${config.appLang}:${lookupTerm}`,
      requestedUrl: flowResult.searchUrl,
      finalUrl: flowResult.entryUrl,
      entryUrl: flowResult.entryUrl,
      finalDomain: new URL(flowResult.entryUrl).hostname,
      entryHeadwordOrRule: flowResult.headword,
      entryOrRule: flowResult.entryOrRule,
      evidenceFragment: flowResult.fragment,
      pageTitle: flowResult.pageTitle,
      accessedAt,
      contentSha256,
      redirectChain: [],
      httpStatus: 200,
      lookupType: config.lookupType || "browser-flow",
      browserFlowId: config.browserFlowId,
      searchUrl: flowResult.searchUrl,
      ...provenance,
    });
  };
}

module.exports = { createBrowserAdapter };
