#!/usr/bin/env node
"use strict";

const LOD_DE_SEARCH_API = "https://lod.lu/api/de/search";

function escapeRe(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildLodDeSearchUrl(germanLemma) {
  const q = encodeURIComponent(String(germanLemma || "").trim());
  return `${LOD_DE_SEARCH_API}?query=${q}&lang=de`;
}

function buildLodDeSichUrl(germanLemma) {
  return `https://lod.lu/sich/de/${encodeURIComponent(String(germanLemma || "").trim())}`;
}

function extractLbHeadwordsFromLodDeSearchPayload(payload, germanLemma) {
  if (!payload || !Array.isArray(payload.results)) return [];
  const esc = escapeRe(germanLemma);
  const lemmaRe = new RegExp(`\\b${esc}\\b`, "i");
  const ranked = [];

  for (const row of payload.results) {
    const wordLb = String(row.word_lb || "").trim();
    if (!wordLb) continue;
    let bestScore = -1;
    for (const meaning of row.meanings || []) {
      const tr = String(meaning.translation || "");
      if (!lemmaRe.test(tr)) continue;
      let score = 1;
      if (new RegExp(`^${esc}$`, "i").test(tr.trim())) score = 3;
      else if (new RegExp(`^${esc}\\b`, "i").test(tr.trim())) score = 2;
      if (score > bestScore) bestScore = score;
    }
    if (bestScore >= 0) ranked.push({ wordLb, score: bestScore });
  }

  ranked.sort((a, b) => b.score - a.score);
  const seen = new Set();
  const out = [];
  for (const r of ranked) {
    const key = r.wordLb.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(r.wordLb);
  }
  return out;
}

async function fetchLodDeSearchJson(germanLemma, { timeoutMs = 20000 } = {}) {
  const url = buildLodDeSearchUrl(germanLemma);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "User-Agent": "de-lv-app-g2-a1-lod-de-reverse/1.0 (read-only audit)",
      },
    });
    if (!response.ok) {
      return { ok: false, url, status: response.status, payload: null, error: `HTTP_${response.status}` };
    }
    const payload = await response.json();
    return { ok: true, url, status: response.status, payload, error: null };
  } catch (e) {
    return { ok: false, url, status: null, payload: null, error: String(e.message || e) };
  } finally {
    clearTimeout(timer);
  }
}

async function lookupLodGermanToLuxembourgish(germanLemma) {
  const fetched = await fetchLodDeSearchJson(germanLemma);
  if (!fetched.ok) {
    return {
      found: false,
      searchUrl: fetched.url,
      entryUrl: buildLodDeSichUrl(germanLemma),
      lbHeadwords: [],
      error: fetched.error,
    };
  }
  const lbHeadwords = extractLbHeadwordsFromLodDeSearchPayload(fetched.payload, germanLemma);
  return {
    found: lbHeadwords.length > 0,
    searchUrl: fetched.url,
    entryUrl: buildLodDeSichUrl(germanLemma),
    lbHeadwords,
    payload: fetched.payload,
    error: null,
  };
}

module.exports = {
  LOD_DE_SEARCH_API,
  buildLodDeSearchUrl,
  buildLodDeSichUrl,
  extractLbHeadwordsFromLodDeSearchPayload,
  fetchLodDeSearchJson,
  lookupLodGermanToLuxembourgish,
};
