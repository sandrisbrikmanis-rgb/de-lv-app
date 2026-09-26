#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { TRANSLATION_AUDIT_VERDICT } = require("./lib/g2-a1-production-current/card-translation-audit-search");
const { lookupDeForCard, lookupTargetForProvenLemma } = require("./lib/g2-a1-production-current/card-translation-lang-run");
const { targetLookupVariants } = require("./lib/g2-a1-production-current/card-translation-target-lookup");
const { mapTargetsToCandidates } = require("./lib/g2-a1-production-current/card-translation-bilingual-collector");
const {
  fetchDictionaryPageForCandidate,
  buildSearchUrlForCandidate,
  extractTranslations,
  isGlosbeAutomaticOnly,
} = require("./lib/g2-a1-production-current/german-target-dictionary-search-probe");
const {
  extractFromDictCcPlainText,
  filterTranslationCandidates,
  cleanTarget,
} = require("./lib/g2-a1-production-current/three-word-dict-extract");
const { pageTextIsAutomaticTranslationOnly } = require("./lib/g2-a1-production-current/card-translation-forbidden-sources");
const { stripQuotes } = require("./lib/g2-a1-production-current/source-adapters/lookup-normalization");
const {
  fetchVerifyPage,
  extractForPlatform,
} = require("./run-g2-a1-verify-additional-bilingual-38");
const {
  loadCardSenseContext,
  filterStrictCandidates,
  cardMeaningDisplayLabel,
  sanitizeDeEvidenceText,
} = require("./lib/g2-a1-production-current/g2-a1-bilingual-validation-strict");
const {
  TRANSLATION_PAIR_STATUS,
  TARGET_LEMMA_STATUS,
  resolveTranslationPairStatus,
  resolveTargetLemmaStatus,
  resolveGalaConclusion,
  applyTargetLemmaToGala,
} = require("./lib/g2-a1-production-current/g2-a1-bilingual-row-status");
const { loadG2Level } = require("./lib/content-crowdin-bridge/roundtrip");

const RESCAN6 = JSON.parse(
  fs.readFileSync(
    path.join(ROOT, "scripts/lib/data/german-target-dictionary-rescan-6-candidates.json"),
    "utf8",
  ),
);

const AUDIT_JSON = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-sample-lemmas/sample-lemmas-32lang-audit.json",
);
const OUT_JSON = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-sample-lemmas/complete-bilingual-validation-38.json",
);
const OUT_MD = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-sample-lemmas/complete-bilingual-validation-38.md",
);

const SK_SOURCES = [
  { id: "verbformen-de-sk", name: "Netzverb verbformen DE–SK", url: "https://www.verbformen.de/de-sk/", platform: "verbformen" },
  { id: "dictcc-de-sk", name: "dict.cc de-sk", url: "https://de-sk.dict.cc/", platform: "dict.cc" },
  { id: "dictcc-desk", name: "dict.cc desk", url: "https://desk.dict.cc/", platform: "dict.cc" },
  { id: "glosbe-de-sk", name: "Glosbe DE–SK", url: "https://glosbe.com/de/sk", platform: "glosbe" },
];

const NN_SOURCES = [
  { id: "dinordbok-nn", name: "DinOrdbok Tysk–Nynorsk", url: "https://www.dinordbok.no/tysk-nynorsk/", platform: "dinordbok" },
  { id: "langenscheidt-nn", name: "Langenscheidt German–Norwegian", url: "https://en.langenscheidt.com/german-norwegian/", platform: "langenscheidt" },
  { id: "glosbe-de-nn", name: "Glosbe DE–NN", url: "https://glosbe.com/de/nn", platform: "glosbe" },
];

function sourcesForLang(appLang) {
  const fromRescan = (RESCAN6.languages[appLang] || []).map((c) => ({
    id: c.id,
    name: c.name,
    url: c.url,
    platform: c.platform,
  }));
  if (appLang === "uk") {
    const vf = {
      id: "verbformen-de-uk",
      name: "Netzverb verbformen DE–UK",
      url: "https://www.verbformen.de/de-uk/",
      platform: "verbformen",
    };
    return [vf, ...fromRescan.filter((s) => s.platform !== "keelevara")];
  }
  if (appLang === "sk") return SK_SOURCES;
  if (appLang === "nn") return NN_SOURCES;
  if (appLang === "lt") {
    return [
      { id: "vokieciu-lietuviu", name: "vokieciu-lietuviu.com", url: "http://www.vokieciu-lietuviu.com/", platform: "vokieciu-lietuviu" },
      { id: "lietuviu-vokieciu", name: "lietuviu-vokieciu.com", url: "http://www.lietuviu-vokieciu.com/", platform: "lietuviu-vokieciu-reverse" },
      { id: "glosbe-de-lt", name: "Glosbe DE–LT", url: "https://glosbe.com/de/lt", platform: "glosbe" },
      ...fromRescan.filter((s) => s.platform === "glosbe"),
    ];
  }
  return fromRescan;
}

function specToCandidate(spec, appLang) {
  return {
    id: spec.id,
    name: spec.name,
    url: spec.url,
    platform: spec.platform,
    appCode: appLang,
    access: "PUBLIC_BROWSER_SESSION",
  };
}

async function fetchSourcePage(spec, appLang, lemma) {
  const platform = spec.platform;
  if (platform === "verbformen" || platform === "dinordbok" || platform === "lietuviu-vokieciu-reverse") {
    const verifySpec = {
      dictionaryName: spec.name,
      url: spec.url,
      platform: platform === "lietuviu-vokieciu-reverse" ? "lietuviu-vokieciu-reverse" : platform,
    };
    return fetchVerifyPage(verifySpec, lemma);
  }
  const candidate = specToCandidate(spec, appLang);
  return fetchDictionaryPageForCandidate(candidate, lemma);
}

function extractVokieciuForward(text, lemma, appCode) {
  const { extractVokieciuLietuviu } = require("./lib/g2-a1-production-current/german-target-dictionary-search-probe");
  /* extractVokieciuLietuviu not exported — inline minimal */
  if (/Nėra vertimo/i.test(text)) return [];
  const lines = text.split("\n").map((l) => l.trim()).filter(Boolean);
  const esc = lemma.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const idx = lines.findIndex((l) => new RegExp(`^${esc}$`, "i").test(l));
  if (idx >= 0) {
    for (const l of lines.slice(idx + 1, idx + 10)) {
      if (/\[papildyti\]|©|Pradžia|Versti/i.test(l)) continue;
      const t = cleanTarget(l);
      if (t && t.length >= 2) return filterTranslationCandidates([t], lemma, appCode);
    }
  }
  return [];
}

function extractFromPage(spec, page, lemma, appLang, cardGerman) {
  if (page.blocked) return [];
  const text = page.text || "";
  const searchUrl = page.searchUrl || page.finalUrl || spec.url;
  const platform = spec.platform;

  if (platform === "verbformen" || platform === "dinordbok" || platform === "lietuviu-vokieciu-reverse") {
    return extractForPlatform(
      platform === "lietuviu-vokieciu-reverse" ? "lietuviu-vokieciu-reverse" : platform,
      text,
      lemma,
      appLang,
    );
  }

  if (platform === "dict.cc") {
    return extractFromDictCcPlainText(text, lemma, { partOfSpeech: cardGerman.partOfSpeech });
  }

  if (platform === "glosbe") {
    if (isGlosbeAutomaticOnly(text, lemma) || pageTextIsAutomaticTranslationOnly(text)) {
      const probeOnly = extractTranslations(page, lemma, searchUrl, appLang, cardGerman);
      if (!probeOnly.length) return [];
      return probeOnly;
    }
    return extractTranslations(page, lemma, searchUrl, appLang, cardGerman);
  }

  if (platform === "vokieciu-lietuviu") {
    return extractVokieciuForward(text, lemma, appLang);
  }

  /* langenscheidt / multitran / dicts.info — dict.cc-style plain extract */
  return extractFromDictCcPlainText(text, lemma, { partOfSpeech: cardGerman.partOfSpeech });
}

function applyStrictPool(allCandidates, cardGerman, deAuthority, appLang) {
  return filterStrictCandidates(allCandidates, cardGerman, deAuthority, appLang);
}

function mergeCandidates(existing, incoming, sourceMeta) {
  const seen = new Set(existing.map((e) => String(e.targetLemma).toLowerCase()));
  const out = [...existing];
  for (const c of incoming) {
    const k = String(c.targetLemma || "").toLowerCase();
    if (!k || seen.has(k)) continue;
    seen.add(k);
    out.push({ ...c, bilingualSourceId: sourceMeta.sourceId, sourceUrl: sourceMeta.resultUrl });
  }
  return out;
}

function posLabel(row) {
  const p = row.partOfSpeech || "?";
  const a = row.article ? ` (${row.article})` : "";
  return `${p}${a}`;
}

function productionCardFields(appLang, level, lemma) {
  try {
    const cards = loadG2Level(appLang, level);
    const card = cards.find((c) => String(c.de || "").trim() === lemma);
    return {
      currentTarget: card?.lv != null ? String(card.lv).trim() : null,
      deArticle: card?.de_article || null,
      dePlural: card?.de_plural || null,
    };
  } catch {
    return { currentTarget: null, deArticle: null, dePlural: null };
  }
}

async function validateRow(fullRow, deAuthority) {
  const appLang = fullRow.appLang;
  const lemma = fullRow.deLemma;
  const senseCtx = loadCardSenseContext(fullRow.level, lemma);
  const prod = productionCardFields(appLang, fullRow.level, lemma);
  const deProof = sanitizeDeEvidenceText(deAuthority?.evidenceFragment || "");
  const cardGerman = {
    lemma,
    partOfSpeech: fullRow.partOfSpeech,
    article: fullRow.article || prod.deArticle || senseCtx.deArticle,
    dePlural: prod.dePlural,
    cardSenseEnHelper: senseCtx.senseEn,
    deSenseProof: deProof,
    germanMeaning: deProof,
    deSenseNote: deProof,
  };
  const currentTarget = prod.currentTarget ?? fullRow.currentTarget;
  const chain = sourcesForLang(appLang);

  let allCandidates = [];
  let winningSource = null;
  let winningUrl = null;
  const attempts = [];

  for (const spec of chain) {
    let page;
    try {
      // eslint-disable-next-line no-await-in-loop
      page = await fetchSourcePage(spec, appLang, lemma);
    } catch (e) {
      attempts.push({ sourceId: spec.id, ok: false, error: String(e.message || e).slice(0, 80) });
      continue;
    }

    const resultUrl = page.finalUrl || page.searchUrl || buildSearchUrlForCandidate(specToCandidate(spec, appLang), lemma);
    const translations = extractFromPage(spec, page, lemma, appLang, cardGerman);
    const sourceMeta = {
      sourceId: spec.id,
      sourceName: spec.name,
      sourceUrl: spec.url,
      resultUrl,
      platform: spec.platform,
    };
    const batch = mapTargetsToCandidates(translations, cardGerman, sourceMeta);
    attempts.push({
      sourceId: spec.id,
      ok: translations.length > 0,
      extractedCount: translations.length,
      resultUrl,
      parserOnlyEmpty: !translations.length && !page.blocked && /verbformen|dict\.cc/i.test(resultUrl),
    });

    if (!translations.length) continue;

    allCandidates = mergeCandidates(allCandidates, batch, sourceMeta);
    if (!winningSource && translations.length) {
      winningSource = spec.name;
      winningUrl = resultUrl;
    }
  }

  const filteredFinal = applyStrictPool(allCandidates, cardGerman, deAuthority, appLang);
  const pool = filteredFinal.filtered;

  if (!winningSource && attempts.find((a) => a.ok)) {
    const hit = attempts.find((a) => a.ok);
    winningSource = chain.find((s) => s.id === hit.sourceId)?.name || null;
    winningUrl = hit.resultUrl;
  }

  const pair = resolveTranslationPairStatus(pool, currentTarget);
  const target = await resolveTargetLemmaStatus(
    appLang,
    currentTarget,
    pair.pairLemma,
    lookupTargetForProvenLemma,
    targetLookupVariants,
  );

  let gala = resolveGalaConclusion(pair.translationPairStatus, pair.pairLemma, currentTarget);
  gala = applyTargetLemmaToGala(gala, target.targetLemmaStatus, target.targetReason);

  const displayTarget =
    pair.translationPairStatus === TRANSLATION_PAIR_STATUS.VALIDATED && pair.pairLemma
      ? pair.pairLemma
      : pool.length
        ? [...new Set(pool.map((c) => c.targetLemma))].slice(0, 6).join("; ")
        : "—";

  return {
    appLang,
    deLemma: lemma,
    level: fullRow.level,
    cardPos: posLabel(fullRow),
    cardMeaningLabel: cardMeaningDisplayLabel(cardGerman, deAuthority),
    germanMeaning: cardGerman.deSenseProof || "—",
    cardSenseEnHelper: cardGerman.cardSenseEnHelper || "",
    deSourceUrl: deAuthority?.entryUrl || fullRow.deSourceUrl || null,
    currentTarget: stripQuotes(currentTarget),
    targetTranslationDisplay: displayTarget,
    dictionaryName: winningSource || (attempts.length ? chain[0]?.name : null),
    resultUrl: winningUrl || attempts.find((a) => a.resultUrl)?.resultUrl || null,
    translationPairStatus: pair.translationPairStatus,
    translationPairReason: pair.pairReason,
    pairLemma: pair.pairLemma,
    targetLemmaStatus: target.targetLemmaStatus,
    targetLemmaReason: target.targetReason,
    targetSourceUrl: target.targetSourceUrl,
    normativeTargetLemma: target.normativeLemma,
    galaConclusion: gala.galaConclusion,
    galaReason: gala.galaReason,
    finalStatus: gala.galaConclusion,
    finalReason: gala.galaReason,
    findingType: gala.findingType || null,
    proposedNew: gala.proposedNew || null,
    sourcesTried: attempts,
    candidateCount: pool.length,
    candidateCountRaw: allCandidates.length,
    rejectedStrictCount: filteredFinal.rejected.length,
  };
}

async function main() {
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const keys = new Set(
    (audit.needsAdditionalBilingualSource || []).map((r) => `${r.appLang}|${r.level}|${r.deLemma}`),
  );
  const rows = audit.rows.filter(
    (r) => r.needsAdditionalBilingualSource && keys.has(`${r.appLang}|${r.level}|${r.deLemma}`),
  );
  if (rows.length !== 38) {
    console.warn(`Expected 38 full rows, got ${rows.length}`);
  }

  const lemmas = [...new Set(rows.map((r) => r.deLemma))];
  const deAuthorityByLemma = new Map();
  for (const lemma of lemmas) {
    const spec = rows.find((r) => r.deLemma === lemma);
    // eslint-disable-next-line no-await-in-loop
    const deAuthority = await lookupDeForCard({
      lemma,
      partOfSpeech: spec.partOfSpeech,
      article: spec.article || null,
    });
    deAuthorityByLemma.set(lemma, deAuthority);
  }

  const results = [];
  for (const row of rows) {
    // eslint-disable-next-line no-await-in-loop
    const r = await validateRow(row, deAuthorityByLemma.get(row.deLemma));
    results.push(r);
    process.stderr.write(`${r.galaConclusion} pair=${r.translationPairStatus} target=${r.targetLemmaStatus} ${r.appLang} ${r.deLemma}\n`);
  }

  const tv = results.filter((r) => r.galaConclusion === TRANSLATION_AUDIT_VERDICT.TRANSLATION_VALIDATED);
  const finding = results.filter((r) => r.galaConclusion === TRANSLATION_AUDIT_VERDICT.FINDING);
  const nsr = results.filter((r) => r.galaConclusion === TRANSLATION_AUDIT_VERDICT.NEEDS_SOURCE_REVIEW);
  const nf = results.filter((r) => r.galaConclusion === "NOT_FOUND");
  const pairValidated = results.filter((r) => r.translationPairStatus === TRANSLATION_PAIR_STATUS.VALIDATED);
  const targetValidated = results.filter((r) => r.targetLemmaStatus === TARGET_LEMMA_STATUS.VALIDATED);

  const payload = {
    schemaVersion: "g2-a1-complete-bilingual-validation-38-v4",
    generatedAt: new Date().toISOString(),
    rowCount: results.length,
    translationValidatedCount: tv.length,
    findingCount: finding.length,
    needsSourceReviewCount: nsr.length,
    notFoundCount: nf.length,
    translationPairValidatedCount: pairValidated.length,
    targetLemmaValidatedCount: targetValidated.length,
    policy:
      "Split TRANSLATION_PAIR_STATUS + TARGET_LEMMA_STATUS; DE DWDS/Duden; EN helper only; bilingual pair not annulled by TARGET pending",
    results,
  };

  fs.writeFileSync(OUT_JSON, `${JSON.stringify(payload, null, 2)}\n`);

  const md = [
    "# G2/A1 — pilna divvalodu validācija (38 rindas)",
    "",
    `Ģenerēts: ${payload.generatedAt}`,
    "",
    `**Gala secinājums:** TRANSLATION_VALIDATED ${tv.length}/38 | FINDING ${finding.length}/38 | NEEDS_SOURCE_REVIEW ${nsr.length}/38 | NOT_FOUND ${nf.length}/38`,
    "",
    `**TRANSLATION_PAIR_STATUS:** VALIDATED ${pairValidated.length}/38 | MULTIPLE_CANDIDATES ${results.filter((r) => r.translationPairStatus === TRANSLATION_PAIR_STATUS.MULTIPLE_CANDIDATES).length}/38 | NOT_FOUND ${results.filter((r) => r.translationPairStatus === TRANSLATION_PAIR_STATUS.NOT_FOUND).length}/38`,
    "",
    `**TARGET_LEMMA_STATUS:** VALIDATED ${targetValidated.length}/38 | VALIDATION_PENDING ${results.filter((r) => r.targetLemmaStatus === TARGET_LEMMA_STATUS.VALIDATION_PENDING).length}/38 | NOT_VALIDATED ${results.filter((r) => r.targetLemmaStatus === TARGET_LEMMA_STATUS.NOT_VALIDATED).length}/38`,
    "",
    "| Valoda | DE vārds | CURRENT | TARGET tulkojums | Divvalodu vārdnīca | URL | TRANSLATION_PAIR_STATUS | TARGET_LEMMA_STATUS | Gala secinājums |",
    "|--------|----------|---------|------------------|-------------------|-----|-------------------------|---------------------|-----------------|",
  ];

  for (const r of results) {
    const gala =
      r.galaConclusion === TRANSLATION_AUDIT_VERDICT.FINDING
        ? `${r.galaConclusion} (${r.findingType}${r.proposedNew ? ` → ${r.proposedNew}` : ""})`
        : r.galaConclusion;
    md.push(
      `| ${r.appLang} | ${r.deLemma} | ${r.currentTarget || "—"} | ${r.targetTranslationDisplay} | ${r.dictionaryName || "—"} | ${r.resultUrl || "—"} | ${r.translationPairStatus} | ${r.targetLemmaStatus} | ${gala} |`,
    );
  }

  fs.writeFileSync(OUT_MD, `${md.join("\n")}\n`);
  console.log(
    JSON.stringify(
      {
        TRANSLATION_VALIDATED: tv.length,
        FINDING: finding.length,
        NEEDS_SOURCE_REVIEW: nsr.length,
        NOT_FOUND: nf.length,
        TRANSLATION_PAIR_VALIDATED: pairValidated.length,
        TARGET_LEMMA_VALIDATED: targetValidated.length,
        out: OUT_JSON,
      },
      null,
      2,
    ),
  );
}

if (require.main === module) {
  main().catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
