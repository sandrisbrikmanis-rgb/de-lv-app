#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");

const LOD_DE_SEARCH_API = "https://lod.lu/api/de/search";
const LOD_LB_SEARCH_API = "https://lod.lu/api/lb/search";

/** @typedef {{ wordLb: string, articleId: string, articleUrl: string, meaningId: string, pos: string, deTranslation: string, matchKind: string, score: number }} LodDeReverseMatch */

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

function buildLodArticleUrl(articleId, wordLb) {
  const id = String(articleId || "").trim();
  const lemma = String(wordLb || "").trim();
  if (!id) return buildLodDeSichUrl(lemma);
  const q = lemma ? `?lemma=${encodeURIComponent(lemma)}` : "";
  return `https://lod.lu/artikel/${encodeURIComponent(id)}${q}`;
}

function isRejectedProperNounOrPlace(row, germanLemma) {
  const pos = String(row.pos || "").trim().toUpperCase();
  if (pos === "NP") return true;

  const wordLb = String(row.word_lb || "").trim();
  const lemma = String(germanLemma || "").trim();

  if (/^Munnerëffer Strooss$/i.test(wordLb)) return true;
  if (/\bStrooss$/i.test(wordLb) && lemma.toLowerCase() === "route") return true;

  if (/^Munner/i.test(wordLb)) return true;
  return false;
}

function isOrdinaryDictionaryPos(pos) {
  const p = String(pos || "").trim().toUpperCase();
  if (!p || p === "NP") return false;
  return /^(SUBST|VRB|VERB|ADJ|ADV|ART|PRON|PREP|CONJ|INT|PART)/.test(p);
}

/**
 * DE translation field must list the pilot lemma as its own dictionary sense
 * (exact, or lemma + [disambiguation gloss]), not only as part of a hyphenated name.
 */
function deSenseMatchesLemma(translation, lemma) {
  const esc = escapeRe(lemma);
  const parts = String(translation || "")
    .split(/[,;]/)
    .map((p) => p.trim())
    .filter(Boolean);

  for (const part of parts) {
    if (new RegExp(`^${esc}$`, "i").test(part)) {
      return { match: true, kind: "exact", part };
    }
    if (new RegExp(`^${esc}\\s+\\[[^\\]]+\\]$`, "i").test(part)) {
      return { match: true, kind: "gloss", part };
    }
  }
  return { match: false, kind: null, part: null };
}

function scoreLodMatch(row, meaning, senseMatch) {
  let score = 0;
  if (senseMatch.kind === "exact") score += 100;
  else if (senseMatch.kind === "gloss") score += 80;

  const pos = String(row.pos || "").trim().toUpperCase();
  if (/^SUBST/.test(pos)) score += 20;
  else if (/^VRB/.test(pos)) score += 18;
  else if (/^ADJ/.test(pos)) score += 15;
  else if (/^ADV/.test(pos)) score += 5;

  if (row.sign_language === true || meaning.sign_language === true) score += 1;
  return score;
}

/**
 * @returns {LodDeReverseMatch[]}
 */
function selectLodDeReverseMatches(payload, germanLemma) {
  if (!payload || !Array.isArray(payload.results)) return [];
  const lemma = String(germanLemma || "").trim();
  if (!lemma) return [];

  const matches = [];

  for (const row of payload.results) {
    if (isRejectedProperNounOrPlace(row, lemma)) continue;
    if (!isOrdinaryDictionaryPos(row.pos)) continue;

    const wordLb = String(row.word_lb || "").trim();
    if (!wordLb) continue;

    const articleId = String(row.article_id || row.id || "").trim();
    let bestForRow = null;

    for (const meaning of row.meanings || []) {
      const tr = String(meaning.translation || "");
      const senseMatch = deSenseMatchesLemma(tr, lemma);
      if (!senseMatch.match) continue;

      const score = scoreLodMatch(row, meaning, senseMatch);
      const candidate = {
        wordLb,
        articleId,
        articleUrl: buildLodArticleUrl(articleId, wordLb),
        meaningId: String(meaning.id || ""),
        pos: String(row.pos || ""),
        deTranslation: tr,
        matchKind: senseMatch.kind,
        score,
      };
      if (!bestForRow || candidate.score > bestForRow.score) bestForRow = candidate;
    }

    if (bestForRow) matches.push(bestForRow);
  }

  matches.sort((a, b) => b.score - a.score);
  const seen = new Set();
  const out = [];
  for (const m of matches) {
    const key = `${m.articleId}:${m.wordLb.toLowerCase()}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(m);
  }
  return out;
}

function pickBestLodDeReverseMatch(payload, germanLemma) {
  const matches = selectLodDeReverseMatches(payload, germanLemma);
  return matches[0] || null;
}

function extractLbHeadwordsFromLodDeSearchPayload(payload, germanLemma) {
  return selectLodDeReverseMatches(payload, germanLemma).map((m) => m.wordLb);
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
        "User-Agent": "de-lv-app-g2-a1-lod-de-reverse/1.1 (read-only audit)",
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

async function fetchLodLbSearchJson(lbLemma, { timeoutMs = 20000 } = {}) {
  const url = `${LOD_LB_SEARCH_API}?query=${encodeURIComponent(String(lbLemma || "").trim())}&lang=lb`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        "User-Agent": "de-lv-app-g2-a1-lod-lb-official/1.0 (read-only audit)",
      },
    });
    if (!response.ok) {
      return { ok: false, url, status: response.status, payload: null, error: `HTTP_${response.status}` };
    }
    const payload = await response.json();
    const contentSha256 = crypto
      .createHash("sha256")
      .update(JSON.stringify(payload), "utf8")
      .digest("hex");
    return { ok: true, url, status: response.status, payload, contentSha256, error: null };
  } catch (e) {
    return { ok: false, url, status: null, payload: null, contentSha256: null, error: String(e.message || e) };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Oficiālā LOD (TARGET) lemmas pārbaude — nevis DE→LB reverss.
 */
async function lookupLodOfficialLbEntry(lbLemma, expectedArticleId = null) {
  const term = String(lbLemma || "").trim();
  const fetched = await fetchLodLbSearchJson(term);
  if (!fetched.ok) {
    return {
      outcome: "SOURCE_ACCESS_BLOCKED",
      entryHeadwordOrRule: null,
      entryUrl: null,
      error: fetched.error,
    };
  }
  const results = fetched.payload?.results || [];
  const sameHeadword = results.filter(
    (r) => String(r.word_lb || "").trim().toLowerCase() === term.toLowerCase(),
  );
  if (!sameHeadword.length) {
    return {
      outcome: "SOURCE_ENTRY_NOT_FOUND",
      entryHeadwordOrRule: null,
      entryUrl: null,
      error: "lod_lb_search_no_headword",
    };
  }
  const hit =
    (expectedArticleId &&
      sameHeadword.find((r) => String(r.article_id || r.id || "") === expectedArticleId)) ||
    sameHeadword[0];
  const articleId = String(hit.article_id || hit.id || "").trim();
  return {
    outcome: SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED,
    authorityName: "LOD (Lëtzebuergesch)",
    adapterId: "lb-lod-official-lb-search",
    adapterVersion: "1.0.0",
    entryHeadwordOrRule: hit.word_lb,
    entryUrl: buildLodArticleUrl(articleId, hit.word_lb),
    evidenceFragment: `LOD lb/search official headword: ${hit.word_lb} (article ${articleId})`,
    contentSha256: fetched.contentSha256 || "lod-lb-search-json",
  };
}

async function lookupLodGermanToLuxembourgish(germanLemma) {
  const fetched = await fetchLodDeSearchJson(germanLemma);
  const searchUrl = fetched.url;
  if (!fetched.ok) {
    return {
      found: false,
      searchUrl,
      entryUrl: buildLodDeSichUrl(germanLemma),
      lbHeadwords: [],
      bestMatch: null,
      matches: [],
      error: fetched.error,
    };
  }

  const matches = selectLodDeReverseMatches(fetched.payload, germanLemma);
  const bestMatch = matches[0] || null;
  const lbHeadwords = matches.map((m) => m.wordLb);

  return {
    found: Boolean(bestMatch),
    searchUrl,
    entryUrl: bestMatch?.articleUrl || buildLodDeSichUrl(germanLemma),
    lbHeadwords,
    bestMatch,
    matches,
    payload: fetched.payload,
    error: null,
  };
}

module.exports = {
  LOD_DE_SEARCH_API,
  buildLodDeSearchUrl,
  buildLodDeSichUrl,
  buildLodArticleUrl,
  deSenseMatchesLemma,
  isOrdinaryDictionaryPos,
  isRejectedProperNounOrPlace,
  selectLodDeReverseMatches,
  pickBestLodDeReverseMatch,
  extractLbHeadwordsFromLodDeSearchPayload,
  fetchLodDeSearchJson,
  lookupLodGermanToLuxembourgish,
  fetchLodLbSearchJson,
  lookupLodOfficialLbEntry,
};
