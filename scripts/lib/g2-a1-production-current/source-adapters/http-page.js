#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const { isHostnameAllowed, hostnameFromUrl } = require("../registry-domain-allowlist");
const { SOURCE_ACCESS_OUTCOME } = require("../official-source-access-constants");

const DEFAULT_TIMEOUT_MS = 20000;
const MAX_REDIRECTS = 8;
const MAX_BODY_BYTES = 512_000;

function sha256Text(text) {
  return crypto.createHash("sha256").update(text, "utf8").digest("hex");
}

function htmlToPlainText(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractTitle(html) {
  const m = String(html || "").match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  return m ? htmlToPlainText(m[1]).slice(0, 200) : null;
}

function classifyHttpStatus(status) {
  if (status === 401 || status === 403) return SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED;
  if (status === 429) return SOURCE_ACCESS_OUTCOME.SOURCE_RATE_LIMITED;
  if (status === 407) return SOURCE_ACCESS_OUTCOME.SOURCE_AUTHENTICATION_REQUIRED;
  if (status >= 400) return SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED;
  return null;
}

async function fetchAllowlistedPage(initialUrl, { allowedDomains, timeoutMs = DEFAULT_TIMEOUT_MS }) {
  const accessedAt = new Date().toISOString();
  const redirectChain = [];
  let currentUrl = initialUrl;

  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const host = hostnameFromUrl(currentUrl);
    if (!isHostnameAllowed(host, allowedDomains)) {
      return {
        outcome: SOURCE_ACCESS_OUTCOME.SOURCE_DOMAIN_REJECTED,
        requestedUrl: initialUrl,
        finalUrl: currentUrl,
        redirectChain,
        accessedAt,
        finalDomain: host,
        httpStatus: null,
        html: null,
        pageTitle: null,
        contentSha256: null,
        error: `DOMAIN_NOT_ALLOWLISTED:${host}`,
      };
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    let response;
    try {
      response = await fetch(currentUrl, {
        method: "GET",
        redirect: "manual",
        signal: controller.signal,
        headers: {
          "User-Agent": "de-lv-app-g2-a1-official-source-access/2.0 (read-only audit)",
          Accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
        },
      });
    } catch (e) {
      clearTimeout(timer);
      return {
        outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED,
        requestedUrl: initialUrl,
        finalUrl: currentUrl,
        redirectChain,
        accessedAt,
        finalDomain: host,
        html: null,
        error: String(e.message || e).slice(0, 500),
      };
    }
    clearTimeout(timer);

    if (response.status >= 300 && response.status < 400) {
      const loc = response.headers.get("location");
      if (!loc) {
        return {
          outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED,
          requestedUrl: initialUrl,
          finalUrl: currentUrl,
          redirectChain,
          accessedAt,
          finalDomain: host,
          httpStatus: response.status,
          html: null,
          error: "REDIRECT_WITHOUT_LOCATION",
        };
      }
      const next = new URL(loc, currentUrl).toString();
      redirectChain.push({ from: currentUrl, to: next, status: response.status });
      currentUrl = next;
      continue;
    }

    const httpOutcome = classifyHttpStatus(response.status);
    const buf = Buffer.from(await response.arrayBuffer());
    const truncated = buf.length > MAX_BODY_BYTES ? buf.subarray(0, MAX_BODY_BYTES) : buf;
    const html = truncated.toString("utf8");
    const pageTitle = extractTitle(html);
    const contentSha256 = sha256Text(html);

    if (httpOutcome) {
      return {
        outcome: httpOutcome,
        requestedUrl: initialUrl,
        finalUrl: currentUrl,
        redirectChain,
        accessedAt,
        finalDomain: hostnameFromUrl(currentUrl),
        httpStatus: response.status,
        html,
        pageTitle,
        contentSha256,
      };
    }

    if (!html || html.length < 40) {
      return {
        outcome: SOURCE_ACCESS_OUTCOME.SOURCE_CONTENT_UNREADABLE,
        requestedUrl: initialUrl,
        finalUrl: currentUrl,
        redirectChain,
        accessedAt,
        finalDomain: hostnameFromUrl(currentUrl),
        httpStatus: response.status,
        html,
        pageTitle,
        contentSha256,
      };
    }

    return {
      outcome: SOURCE_ACCESS_OUTCOME.SOURCE_PAGE_FETCHED,
      requestedUrl: initialUrl,
      finalUrl: currentUrl,
      redirectChain,
      accessedAt,
      finalDomain: hostnameFromUrl(currentUrl),
      httpStatus: response.status,
      html,
      pageTitle,
      contentSha256,
    };
  }

  return {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED,
    requestedUrl: initialUrl,
    finalUrl: currentUrl,
    redirectChain,
    accessedAt,
    html: null,
    error: "TOO_MANY_REDIRECTS",
  };
}

module.exports = {
  fetchAllowlistedPage,
  htmlToPlainText,
  extractTitle,
  sha256Text,
};
