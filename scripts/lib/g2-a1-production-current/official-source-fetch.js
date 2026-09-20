#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const { URL } = require("url");
const { isHostnameAllowed, hostnameFromUrl } = require("./registry-domain-allowlist");
const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");

const DEFAULT_TIMEOUT_MS = 20000;
const MAX_REDIRECTS = 8;
const MAX_BODY_BYTES = 512_000;
const MAX_SNIPPET_CHARS = 2400;

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

function snippetAroundTerm(text, term) {
  if (!text) return "";
  const lower = text.toLowerCase();
  const needle = String(term || "").toLowerCase().trim();
  if (!needle) return text.slice(0, MAX_SNIPPET_CHARS);
  const idx = lower.indexOf(needle);
  if (idx < 0) return text.slice(0, MAX_SNIPPET_CHARS);
  const start = Math.max(0, idx - 400);
  const end = Math.min(text.length, idx + needle.length + 400);
  return text.slice(start, end).trim();
}

function classifyHttpStatus(status) {
  if (status === 401 || status === 403) return SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED;
  if (status === 429) return SOURCE_ACCESS_OUTCOME.SOURCE_RATE_LIMITED;
  if (status === 407) return SOURCE_ACCESS_OUTCOME.SOURCE_AUTHENTICATION_REQUIRED;
  if (status >= 400) return SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED;
  return null;
}

async function fetchOfficialUrl(initialUrl, { allowedDomains, searchQuery, searchTerm, timeoutMs = DEFAULT_TIMEOUT_MS }) {
  const accessedAt = new Date().toISOString();
  const redirectChain = [];
  let currentUrl = initialUrl;

  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const host = hostnameFromUrl(currentUrl);
    if (!isHostnameAllowed(host, allowedDomains)) {
      return {
        outcome: SOURCE_ACCESS_OUTCOME.SOURCE_DOMAIN_REJECTED,
        authorityName: null,
        searchQuery: searchQuery || null,
        requestedUrl: initialUrl,
        finalUrl: currentUrl,
        redirectChain,
        entryOrRule: null,
        evidenceFragment: null,
        pageTitle: null,
        accessedAt,
        finalDomain: host,
        contentSha256: null,
        language: null,
        cardId: null,
        fieldPath: null,
        httpStatus: null,
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
          "User-Agent": "de-lv-app-g2-a1-official-source-access/1.0 (read-only audit)",
          Accept: "text/html,application/xhtml+xml;q=0.9,*/*;q=0.8",
        },
      });
    } catch (e) {
      clearTimeout(timer);
      return {
        outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED,
        searchQuery: searchQuery || null,
        requestedUrl: initialUrl,
        finalUrl: currentUrl,
        redirectChain,
        entryOrRule: null,
        evidenceFragment: null,
        pageTitle: null,
        accessedAt,
        finalDomain: host,
        contentSha256: null,
        error: String(e.message || e).slice(0, 500),
      };
    }
    clearTimeout(timer);

    if (response.status >= 300 && response.status < 400) {
      const loc = response.headers.get("location");
      if (!loc) {
        return {
          outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED,
          searchQuery: searchQuery || null,
          requestedUrl: initialUrl,
          finalUrl: currentUrl,
          redirectChain,
          accessedAt,
          finalDomain: host,
          httpStatus: response.status,
          error: "REDIRECT_WITHOUT_LOCATION",
        };
      }
      const next = new URL(loc, currentUrl).toString();
      redirectChain.push({ from: currentUrl, to: next, status: response.status });
      currentUrl = next;
      continue;
    }

    const httpOutcome = classifyHttpStatus(response.status);
    if (httpOutcome) {
      return {
        outcome: httpOutcome,
        searchQuery: searchQuery || null,
        requestedUrl: initialUrl,
        finalUrl: currentUrl,
        redirectChain,
        accessedAt,
        finalDomain: hostnameFromUrl(currentUrl),
        httpStatus: response.status,
        contentSha256: null,
      };
    }

    const buf = Buffer.from(await response.arrayBuffer());
    const truncated = buf.length > MAX_BODY_BYTES ? buf.subarray(0, MAX_BODY_BYTES) : buf;
    const html = truncated.toString("utf8");
    const plain = htmlToPlainText(html);
    if (!plain || plain.length < 40) {
      return {
        outcome: SOURCE_ACCESS_OUTCOME.SOURCE_CONTENT_UNREADABLE,
        searchQuery: searchQuery || null,
        requestedUrl: initialUrl,
        finalUrl: currentUrl,
        redirectChain,
        accessedAt,
        finalDomain: hostnameFromUrl(currentUrl),
        httpStatus: response.status,
        contentSha256: sha256Text(html),
        pageTitle: extractTitle(html),
      };
    }

    const fragment = snippetAroundTerm(plain, searchTerm);
    const termPresent = searchTerm && plain.toLowerCase().includes(String(searchTerm).toLowerCase());
    return {
      outcome: termPresent ? SOURCE_ACCESS_OUTCOME.SOURCE_FOUND_AND_READ : SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND,
      searchQuery: searchQuery || null,
      requestedUrl: initialUrl,
      finalUrl: currentUrl,
      redirectChain,
      entryOrRule: termPresent ? `Located “${searchTerm}” on page` : `Term “${searchTerm}” not found on page`,
      evidenceFragment: fragment,
      pageTitle: extractTitle(html),
      accessedAt,
      finalDomain: hostnameFromUrl(currentUrl),
      contentSha256: sha256Text(html),
      httpStatus: response.status,
    };
  }

  return {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED,
    searchQuery: searchQuery || null,
    requestedUrl: initialUrl,
    finalUrl: currentUrl,
    redirectChain,
    accessedAt,
    error: "TOO_MANY_REDIRECTS",
  };
}

function deLookupCandidateUrls(deTerm, allowedDomains) {
  const t = encodeURIComponent(String(deTerm || "").trim());
  if (!t) return [];
  const urls = [];
  if ([...allowedDomains].some((d) => d.includes("dwds.de"))) {
    urls.push(`https://www.dwds.de/wb/${t}`);
    urls.push(`https://dwds.de/wb/${t}`);
  }
  if ([...allowedDomains].some((d) => d.includes("duden.de"))) {
    urls.push(`https://www.duden.de/rechtschreibung/${t}`);
  }
  if ([...allowedDomains].some((d) => d.includes("ids-mannheim.de") || d.includes("grammis"))) {
    urls.push(`https://grammis.ids-mannheim.de/rechtschreibung/${t}`);
  }
  for (const d of allowedDomains) {
    if (d.includes("goethe.de")) urls.push(`https://www.goethe.de/de/sprache/wortschatz.html`);
  }
  return [...new Set(urls)];
}

function targetLookupCandidateUrls(lang, targetTerm, allowedDomains) {
  const t = encodeURIComponent(String(targetTerm || "").trim());
  if (!t) return [];
  const urls = [];
  if (lang === "bg") {
    if ([...allowedDomains].some((d) => d.includes("ibl.bas.bg"))) {
      urls.push(`https://ibl.bas.bg/?s=${t}`);
      urls.push(`https://ibl.bas.bg/`);
    }
    if ([...allowedDomains].some((d) => d.includes("beron.mon.bg"))) {
      urls.push(`https://beron.mon.bg/`);
    }
  }
  for (const d of allowedDomains) {
    urls.push(`https://${d}/`);
  }
  return [...new Set(urls)];
}

async function fetchFirstSuccessful(candidates, ctx) {
  let last = null;
  for (const url of candidates) {
    const searchQuery = ctx.searchQuery || url;
    // eslint-disable-next-line no-await-in-loop
    const result = await fetchOfficialUrl(url, { ...ctx, searchQuery });
    last = result;
    if (result.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_FOUND_AND_READ) return result;
    if (result.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_NOT_FOUND) return result;
  }
  return (
    last || {
      outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ACCESS_BLOCKED,
      searchQuery: ctx.searchQuery || null,
      requestedUrl: null,
      finalUrl: null,
      redirectChain: [],
      accessedAt: new Date().toISOString(),
      error: "NO_CANDIDATE_URL",
    }
  );
}

module.exports = {
  fetchOfficialUrl,
  fetchFirstSuccessful,
  deLookupCandidateUrls,
  targetLookupCandidateUrls,
  htmlToPlainText,
  snippetAroundTerm,
  sha256Text,
};
