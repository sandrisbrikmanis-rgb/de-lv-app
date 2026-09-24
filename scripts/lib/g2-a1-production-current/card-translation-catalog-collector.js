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
const { mapTargetsToCandidates, cardPosToLodTag } = require("./card-translation-bilingual-collector");

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

  const ov = overrides.languages?.[appLang];
  if (ov?.publicPrimary) {
    return {
      ...overrideToCandidate(ov.publicPrimary, appLang, spec.standardCode),
      platform: ov.publicPrimary.id?.includes("glosbe") ? "glosbe" : "override_primary",
    };
  }

  const search32 = loadSearch32Row(appLang);
  if (search32?.dictionaryUrl) {
    const candidates = candidatesForLanguage(appLang, manifest, overrides);
    const byUrl = candidates.find((c) => c.url === search32.dictionaryUrl || search32.dictionaryUrl.startsWith(c.url.replace(/\/$/, "")));
    if (byUrl) return byUrl;
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

function dictRowFromCandidate(candidate) {
  if (!candidate) return null;
  return {
    name: candidate.name,
    url: candidate.url,
    type: candidate.type,
    id: candidate.id,
    searchMode: candidate.searchMode,
    luxdicoL1: candidate.luxdicoL1,
    luxdicoL2: candidate.luxdicoL2,
  };
}

async function collectDeTargetFromCatalog(appLang, cardGerman) {
  const candidate = selectedDictionaryCandidateForLang(appLang);
  const rejected = [];
  if (!candidate) {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: REJECT_REASON.DE_SENSE_MISMATCH, detail: "NO_CATALOG_CANDIDATE" }],
      bilingualMeta: null,
      catalogCandidate: null,
    };
  }

  const spec = { url: candidate.url, type: candidate.type, appCode: appLang };
  const allowed = manifestSourceAllowed(spec);
  if (!allowed.ok) {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: "FORBIDDEN_SOURCE", detail: allowed.code }],
      bilingualMeta: { sourceId: candidate.id, sourceUrl: candidate.url },
      catalogCandidate: candidate,
    };
  }

  if (candidate.subscriptionReferenceOnly) {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: "SUBSCRIPTION_REQUIRED", detail: candidate.id }],
      bilingualMeta: { sourceId: candidate.id, sourceUrl: candidate.url },
      catalogCandidate: candidate,
    };
  }

  const lemma = String(cardGerman.lemma || "").trim();
  let page;
  const searchUrlFallback = buildSearchUrlForCandidate(candidate, lemma);
  try {
    page = await fetchDictionaryPageForCandidate(candidate, lemma);
  } catch (e) {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: "SOURCE_ACCESS_BLOCKED", detail: String(e.message || e).slice(0, 120) }],
      bilingualMeta: { sourceId: candidate.id, sourceUrl: candidate.url, resultUrl: searchUrlFallback },
      catalogCandidate: candidate,
      tryFallback: true,
    };
  }

  const searchUrl = page.searchUrl || searchUrlFallback;
  if (page.blocked) {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: "SOURCE_ACCESS_BLOCKED", detail: page.subscription ? "SUBSCRIPTION" : "BLOCKED" }],
      bilingualMeta: { sourceId: candidate.id, sourceUrl: candidate.url, resultUrl: page.finalUrl || searchUrl },
      catalogCandidate: candidate,
      tryFallback: !page.subscription,
    };
  }

  if (/glosbe\.com/i.test(searchUrl)) {
    const autoOnly =
      isGlosbeAutomaticOnly(page.text, lemma) || pageTextIsAutomaticTranslationOnly(page.text || "");
    const extracted = extractTranslations(page, lemma, searchUrl, appLang);
    if (autoOnly && !extracted.length) {
      return {
        ok: false,
        eligible: [],
        rejected: [{ reason: "AUTOMATIC_TRANSLATION_ONLY", detail: candidate.id }],
        bilingualMeta: { sourceId: candidate.id, sourceUrl: candidate.url, resultUrl: page.finalUrl || searchUrl },
        catalogCandidate: candidate,
        tryFallback: true,
      };
    }
  }

  const translations = extractTranslations(page, lemma, searchUrl, appLang);
  if (!translations.length) {
    return {
      ok: false,
      eligible: [],
      rejected: [{ reason: REJECT_REASON.DE_SENSE_MISMATCH, detail: "NO_EXTRACTED_TARGETS" }],
      bilingualMeta: {
        sourceId: candidate.id,
        sourceName: candidate.name,
        sourceUrl: candidate.url,
        resultUrl: page.finalUrl || searchUrl,
        platform: candidate.platform,
      },
      catalogCandidate: candidate,
      tryFallback: true,
    };
  }

  const sourceMeta = {
    sourceId: candidate.id,
    sourceName: candidate.name,
    sourceUrl: candidate.url,
    resultUrl: page.finalUrl || searchUrl,
    platform: candidate.platform,
    searchUrl,
  };

  const eligible = mapTargetsToCandidates(translations, cardGerman, sourceMeta);
  return {
    ok: true,
    eligible,
    rejected,
    bilingualMeta: sourceMeta,
    catalogCandidate: candidate,
  };
}

module.exports = {
  selectedDictionaryCandidateForLang,
  collectDeTargetFromCatalog,
  RESCAN_PLATFORM_BY_LANG,
};
