#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const {
  loadManifest,
  loadOverrides,
  candidatesForLanguage,
  overrideToCandidate,
} = require("./german-target-dictionary-search-catalog");
const {
  fetchDictionaryPageForCandidate,
  extractTranslations,
  buildSearchUrlForCandidate,
  isGlosbeAutomaticOnly,
} = require("./german-target-dictionary-search-probe");
const { manifestSourceAllowed, pageTextIsAutomaticTranslationOnly } = require("./card-translation-forbidden-sources");
const { REJECT_REASON } = require("./card-translation-audit-search");
const { mapTargetsToCandidates } = require("./card-translation-bilingual-collector");
const { dictionarySearchLemma } = require("./card-translation-de-lemma");

const RESCAN_PROBLEMATIC_JSON = path.join(
  ROOT,
  "reports/g2-a1-production-current/german-target-dictionary-rescan-problematic/german-target-dictionary-rescan-problematic.json",
);

/** PR #842 rescan — izvēlētais avots (nemeklēt no jauna). */
const RESCAN_PLATFORM_BY_LANG = Object.freeze({
  mk: "verbformen",
  nn: "langenscheidt",
  lb: "lod",
});

const MAX_FALLBACK_SOURCES = 12;

function loadSearch32Row(appLang) {
  const p = path.join(ROOT, "reports/g2-a1-production-current/german-target-dictionary-search-32/german-target-dictionary-search-32.json");
  if (!fs.existsSync(p)) return null;
  try {
    const data = JSON.parse(fs.readFileSync(p, "utf8"));
    return (data.rows || []).find((r) => r.appCode === appLang) || null;
  } catch {
    return null;
  }
}

function candidateFromRescanFile(appLang, platform) {
  const p = path.join(ROOT, "scripts/lib/data/german-target-dictionary-rescan-problematic-candidates.json");
  if (!["mk", "nn", "lb"].includes(appLang) || !fs.existsSync(p)) return null;
  try {
    const data = JSON.parse(fs.readFileSync(p, "utf8"));
    const list = data.languages?.[appLang] || [];
    const hit = list.find((c) => c.platform === platform) || list[0];
    if (!hit) return null;
    return {
      id: hit.id,
      appCode: appLang,
      name: hit.name,
      url: hit.url,
      platform: hit.platform,
      access: "PUBLIC_BROWSER_SESSION",
      searchMode: hit.searchMode || null,
      luxdicoL1: hit.luxdicoL1,
      luxdicoL2: hit.luxdicoL2,
      languagePair: `de→${appLang}`,
      type: "RESCAN_SELECTED",
    };
  } catch {
    return null;
  }
}

/**
 * Viena primārā vārdnīca no #842 kataloga (manifest + overrides + rescan).
 */
function selectedDictionaryCandidateForLang(appLang) {
  const manifest = loadManifest();
  const overrides = loadOverrides();
  const spec = manifest.sources.find((s) => s.appCode === appLang);
  if (!spec) return null;

  const rescanPlatform = RESCAN_PLATFORM_BY_LANG[appLang];
  if (rescanPlatform) {
    const fromRescan = candidateFromRescanFile(appLang, rescanPlatform);
    if (fromRescan) return fromRescan;
  }

  const oLang = overrides.languages?.[appLang];
  if (oLang?.publicPrimary) {
    return overrideToCandidate(oLang.publicPrimary, appLang, spec.standardCode);
  }

  const search32 = loadSearch32Row(appLang);
  if (search32?.dictionaryUrl) {
    return {
      id: `search32-${appLang}`,
      appCode: appLang,
      standardCode: spec.standardCode,
      name: search32.dictionaryName || spec.name,
      url: search32.dictionaryUrl,
      platform: /dict\.cc/i.test(search32.dictionaryUrl) ? "dict.cc" : "search32_primary",
      access: "PUBLIC_BROWSER_SESSION",
      languagePair: spec.languagePair,
      type: spec.type,
    };
  }

  const candidates = candidatesForLanguage(appLang, manifest, overrides);
  const manifestPrimary = candidates.find((c) => c.fromMasterManifest) || candidates[0];
  return manifestPrimary || null;
}

/** Visi reģistrētie avoti secībā (primārais, tad alternatīvas). */
function orderedDictionaryCandidatesForLang(appLang) {
  const manifest = loadManifest();
  const overrides = loadOverrides();
  const primary = selectedDictionaryCandidateForLang(appLang);
  const all = candidatesForLanguage(appLang, manifest, overrides);
  const seen = new Set();
  const out = [];
  const add = (c) => {
    if (!c?.url) return;
    const key = `${c.id || c.url}|${c.url}`;
    if (seen.has(key)) return;
    seen.add(key);
    out.push(c);
  };
  add(primary);
  for (const c of all) add(c);
  return out.slice(0, MAX_FALLBACK_SOURCES);
}

function mergeEligibleUnique(existing, incoming, sourceMeta) {
  const seen = new Set(existing.map((e) => String(e.targetLemma || e.wordLb || "").toLowerCase()));
  const out = [...existing];
  for (const row of incoming) {
    const k = String(row.targetLemma || row.wordLb || "").toLowerCase();
    if (!k || seen.has(k)) continue;
    seen.add(k);
    out.push(row);
  }
  return out;
}

async function collectFromSingleCandidate(candidate, appLang, cardGerman, searchLemma) {
  const rejected = [];
  const spec = { url: candidate.url, type: candidate.type, appCode: appLang };
  const allowed = manifestSourceAllowed(spec);
  if (!allowed.ok) {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: "FORBIDDEN_SOURCE", detail: allowed.code, sourceId: candidate.id }],
      bilingualMeta: { sourceId: candidate.id, sourceUrl: candidate.url },
      tryNext: true,
    };
  }

  if (candidate.subscriptionReferenceOnly) {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: "SUBSCRIPTION_REQUIRED", detail: candidate.id, sourceId: candidate.id }],
      bilingualMeta: { sourceId: candidate.id, sourceUrl: candidate.url },
      tryNext: true,
    };
  }

  const searchUrlFallback = buildSearchUrlForCandidate(candidate, searchLemma);
  let page;
  try {
    page = await fetchDictionaryPageForCandidate(candidate, searchLemma);
  } catch (e) {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: "SOURCE_ACCESS_BLOCKED", detail: String(e.message || e).slice(0, 120), sourceId: candidate.id }],
      bilingualMeta: { sourceId: candidate.id, sourceUrl: candidate.url, resultUrl: searchUrlFallback },
      tryNext: true,
    };
  }

  const searchUrl = page.searchUrl || searchUrlFallback;
  if (page.blocked) {
    return {
      ok: false,
      eligible: [],
      rejected: [
        {
          reason: "SOURCE_ACCESS_BLOCKED",
          detail: page.subscription ? "SUBSCRIPTION" : "BLOCKED",
          sourceId: candidate.id,
        },
      ],
      bilingualMeta: { sourceId: candidate.id, sourceUrl: candidate.url, resultUrl: page.finalUrl || searchUrl },
      tryNext: !page.subscription,
    };
  }

  if (/glosbe\.com/i.test(searchUrl)) {
    const autoOnly =
      isGlosbeAutomaticOnly(page.text, searchLemma) || pageTextIsAutomaticTranslationOnly(page.text || "");
    const extracted = extractTranslations(page, searchLemma, searchUrl, appLang, cardGerman);
    if (autoOnly && !extracted.length) {
      return {
        ok: false,
        eligible: [],
        rejected: [{ reason: "AUTOMATIC_TRANSLATION_ONLY", detail: candidate.id, sourceId: candidate.id }],
        bilingualMeta: { sourceId: candidate.id, sourceUrl: candidate.url, resultUrl: page.finalUrl || searchUrl },
        tryNext: true,
      };
    }
  }

  const translations = extractTranslations(page, searchLemma, searchUrl, appLang, cardGerman);
  if (!translations.length) {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: REJECT_REASON.DE_SENSE_MISMATCH, detail: "NO_EXTRACTED_TARGETS", sourceId: candidate.id }],
      bilingualMeta: {
        sourceId: candidate.id,
        sourceName: candidate.name,
        sourceUrl: candidate.url,
        resultUrl: page.finalUrl || searchUrl,
        platform: candidate.platform,
        searchLemma,
      },
      tryNext: true,
    };
  }

  const sourceMeta = {
    sourceId: candidate.id,
    sourceName: candidate.name,
    sourceUrl: candidate.url,
    resultUrl: page.finalUrl || searchUrl,
    platform: candidate.platform,
    searchUrl,
    searchLemma,
  };

  const eligible = mapTargetsToCandidates(translations, cardGerman, sourceMeta);
  return {
    ok: true,
    eligible,
    rejected,
    bilingualMeta: sourceMeta,
    catalogCandidate: candidate,
    tryNext: false,
  };
}

async function collectDeTargetFromCatalog(appLang, cardGerman) {
  const { searchLemma, displayLemma, strategy } = dictionarySearchLemma(cardGerman);
  const candidates = orderedDictionaryCandidatesForLang(appLang);
  if (!candidates.length) {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: REJECT_REASON.DE_SENSE_MISMATCH, detail: "NO_CATALOG_CANDIDATE" }],
      bilingualMeta: null,
      catalogCandidate: null,
      sourcesTried: [],
    };
  }

  let mergedEligible = [];
  const rejected = [];
  const sourcesTried = [];
  let lastMeta = null;
  let winningCandidate = null;

  for (const candidate of candidates) {
    // eslint-disable-next-line no-await-in-loop
    const attempt = await collectFromSingleCandidate(candidate, appLang, cardGerman, searchLemma);
    sourcesTried.push({
      sourceId: candidate.id,
      sourceUrl: candidate.url,
      ok: attempt.ok,
      extractedCount: attempt.eligible?.length || 0,
      searchLemma,
      dictionarySearchStrategy: strategy,
    });
    rejected.push(...(attempt.rejected || []));
    if (attempt.bilingualMeta) lastMeta = attempt.bilingualMeta;
    if (attempt.ok && attempt.eligible?.length) {
      mergedEligible = mergeEligibleUnique(mergedEligible, attempt.eligible, attempt.bilingualMeta);
      winningCandidate = winningCandidate || attempt.catalogCandidate || candidate;
      lastMeta = attempt.bilingualMeta;
      break;
    }
  }

  if (!mergedEligible.length) {
    return {
      ok: false,
      eligible: [],
      rejected,
      bilingualMeta: lastMeta,
      catalogCandidate: candidates[0],
      sourcesTried,
      searchLemma,
      displayLemma,
      dictionarySearchStrategy: strategy,
    };
  }

  return {
    ok: true,
    eligible: mergedEligible,
    rejected,
    bilingualMeta: {
      ...lastMeta,
      displayLemma,
      searchLemma,
      dictionarySearchStrategy: strategy,
      sourcesTriedCount: sourcesTried.length,
    },
    catalogCandidate: winningCandidate || candidates[0],
    sourcesTried,
  };
}

module.exports = {
  selectedDictionaryCandidateForLang,
  orderedDictionaryCandidatesForLang,
  collectDeTargetFromCatalog,
  RESCAN_PLATFORM_BY_LANG,
};
