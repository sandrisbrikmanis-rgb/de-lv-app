#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { loadStructuredLanguageAuthoritySources, stripTrackingParams } = require("../master-language-authority-sources-33");
const { closeBrowserPool } = require("./source-adapters/browser/pool");
const {
  TARGET_APP_CODES,
  loadManifest,
  loadOverrides,
  formatEntryCount,
  SEARCH_PILOT_WORDS,
  FINAL_STATUS,
} = require("./german-target-dictionary-search-catalog");
const { orderedAlternativeCandidatesForLanguage, TIER } = require("./german-target-dictionary-alternative-catalog");
const { evaluateCandidate } = require("./german-target-dictionary-search-32");
const { probePilotWord } = require("./german-target-dictionary-search-probe");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/german-target-dictionary-alternatives-32");

function tierLabel(tier) {
  return Object.entries(TIER).find(([, v]) => v === tier)?.[0] || String(tier);
}

async function evaluateAllAlternatives(appCode, manifest, overrides) {
  const candidates = orderedAlternativeCandidatesForLanguage(appCode, manifest, overrides);
  const evaluated = [];

  for (const candidate of candidates) {
    if (candidate.subscriptionReferenceOnly) {
      evaluated.push({
        candidate,
        skippedLivePilots: true,
        finalStatus: FINAL_STATUS.SUBSCRIPTION_REQUIRED,
        score: -100,
        pilots: null,
        note: "SUBSCRIPTION_REQUIRED — reference only",
      });
      continue;
    }

    // eslint-disable-next-line no-await-in-loop
    const full = await evaluateCandidate(candidate, appCode);
    if (
      full.pilots?.Haus?.pilotStatus === "BLOCKED" &&
      full.pilots?.Haus?.note?.includes("SUBSCRIPTION")
    ) {
      evaluated.push({
        candidate,
        skippedLivePilots: true,
        finalStatus: FINAL_STATUS.SUBSCRIPTION_REQUIRED,
        score: -50,
        pilots: full.pilots,
        note: full.pilots.Haus.note,
      });
      continue;
    }
    evaluated.push({
      candidate,
      skippedLivePilots: false,
      finalStatus: full.finalStatus,
      score: full.score,
      pilots: full.pilots,
      note: null,
    });
  }

  evaluated.sort((a, b) => b.score - a.score);
  return evaluated;
}

function summarizeRow(evaluated, registryUrl) {
  const usable = evaluated.filter(
    (e) =>
      !e.skippedLivePilots &&
      (e.finalStatus === FINAL_STATUS.DICTIONARY_READY ||
        e.finalStatus === FINAL_STATUS.DICTIONARY_PARTIALLY_READY),
  );
  const best = evaluated.find((e) => !e.skippedLivePilots && e.score > -50) || evaluated[0];
  const bestUsable = usable[0] || null;
  const masterNorm = registryUrl ? stripTrackingParams(registryUrl) : null;
  const betterThanMaster =
    bestUsable &&
    masterNorm &&
    stripTrackingParams(bestUsable.candidate.url) !== masterNorm &&
    bestUsable.score > (evaluated.find((e) => stripTrackingParams(e.candidate.url) === masterNorm)?.score ?? -999);

  return {
    recommended: bestUsable
      ? {
          platform: bestUsable.candidate.platform,
          tier: tierLabel(bestUsable.candidate.tier),
          name: bestUsable.candidate.name,
          url: bestUsable.candidate.url,
          finalStatus: bestUsable.finalStatus,
          score: bestUsable.score,
          entryCountDisplay: formatEntryCount(bestUsable.candidate),
        }
      : best
        ? {
            platform: best.candidate.platform,
            tier: tierLabel(best.candidate.tier),
            name: best.candidate.name,
            url: best.candidate.url,
            finalStatus: best.finalStatus,
            score: best.score,
            entryCountDisplay: formatEntryCount(best.candidate),
          }
        : null,
    betterThanMaster: Boolean(betterThanMaster),
    usableAlternativeCount: usable.length,
    probedCandidateCount: evaluated.filter((e) => !e.skippedLivePilots).length,
    alternativesRanked: evaluated.map((e, rank) => ({
      rank: rank + 1,
      platform: e.candidate.platform,
      tier: tierLabel(e.candidate.tier),
      name: e.candidate.name,
      url: e.candidate.url,
      finalStatus: e.finalStatus,
      score: e.score,
      skippedLivePilots: e.skippedLivePilots,
      isMasterRegistryUrl: masterNorm && stripTrackingParams(e.candidate.url) === masterNorm,
      pilots: e.pilots
        ? SEARCH_PILOT_WORDS.reduce((acc, w) => {
            acc[w.lemma] = e.pilots[w.lemma]?.pilotStatus;
            return acc;
          }, {})
        : null,
      sampleTranslationHaus: e.pilots?.Haus?.sampleTranslation || null,
      resultUrlHaus: e.pilots?.Haus?.resultUrl || null,
    })),
  };
}

async function buildGermanTargetDictionaryAlternatives32(options = {}) {
  const manifest = loadManifest();
  const overrides = loadOverrides();
  const structured = loadStructuredLanguageAuthoritySources();
  if (!structured.pass) throw new Error(structured.error);

  const langs = options.onlyLanguages?.length
    ? TARGET_APP_CODES.filter((c) => options.onlyLanguages.includes(c))
    : TARGET_APP_CODES;

  const languages = [];
  for (const appCode of langs) {
    const row = structured.languages.find((r) => r.appCode === appCode);
    const registryUrl = row?.GERMAN_TARGET_DICTIONARY_URL || null;
    // eslint-disable-next-line no-await-in-loop
    const evaluated = await evaluateAllAlternatives(appCode, manifest, overrides);
    const spec = manifest.sources.find((s) => s.appCode === appCode);
    languages.push({
      appCode,
      standardCode: spec.standardCode,
      masterRegistryUrl: registryUrl,
      masterRegistryName: row?.GERMAN_TARGET_DICTIONARY_NAME || null,
      ...summarizeRow(evaluated, registryUrl),
    });
    if (options.onProgress) {
      options.onProgress({
        appCode,
        usable: languages[languages.length - 1].usableAlternativeCount,
        recommended: languages[languages.length - 1].recommended?.platform,
      });
    }
  }

  await closeBrowserPool();

  const withUsable = languages.filter((l) => l.usableAlternativeCount > 0).length;
  const withBetter = languages.filter((l) => l.betterThanMaster).length;
  const readyViaAlt = languages.filter((l) => l.recommended?.finalStatus === FINAL_STATUS.DICTIONARY_READY).length;

  return {
    schemaVersion: "g2-a1-german-target-dictionary-alternatives-v1",
    generatedAt: new Date().toISOString(),
    classification:
      readyViaAlt === 32
        ? "G2_A1_GERMAN_TARGET_DICTIONARY_ALTERNATIVES_READY_32_OF_32"
        : "G2_A1_GERMAN_TARGET_DICTIONARY_ALTERNATIVES_DISCOVERED",
    nextAction: "OWNER_REVIEW_AND_APPROVE_DICTIONARY_REGISTRY",
    metrics: {
      languagesProbed: languages.length,
      languagesWithUsableAlternative: withUsable,
      languagesWithBetterThanMaster: withBetter,
      languagesDictionaryReadyViaRecommended: readyViaAlt,
    },
    searchPriorityTiers: tierLabel,
    languages,
    constraints: {
      productionDataChanged: false,
      fullA1AuditRan: false,
      aiTranslationUsed: false,
      internetPriorityCatalogUsed: true,
    },
  };
}

function writeAlternativesArtifacts(payload) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "german-target-dictionary-alternatives-32.json");
  const mdPath = path.join(OUT_DIR, "german-target-dictionary-alternatives-32.md");
  const verifyPath = path.join(OUT_DIR, "german-target-dictionary-alternatives-verification.json");

  fs.writeFileSync(jsonPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  const lines = [
    "# G2/A1 — German–TARGET dictionary **alternatives** (32 languages)",
    "",
    "Live pilots on **priority-ordered** candidates (dict.cc → PONS → Langenscheidt → LEO/bab.la → Glosbe → national), not MASTER-only.",
    "",
    `**Classification:** \`${payload.classification}\``,
    "",
    "## Metrics",
    "",
    ...Object.entries(payload.metrics).map(([k, v]) => `- ${k}: ${v}`),
    "",
    "## Per language (recommended + count)",
    "",
    "| Valoda | MASTER URL | Ieteicamais avots | Platforma | Statuss | Derīgas alt. | Labāks par MASTER? |",
    "|--------|------------|-------------------|-----------|---------|--------------|---------------------|",
  ];

  for (const l of payload.languages) {
    const rec = l.recommended;
    lines.push(
      `| ${l.appCode} | ${l.masterRegistryUrl || "—"} | ${rec?.name || "—"} | ${rec?.platform || "—"} | ${rec?.finalStatus || "—"} | ${l.usableAlternativeCount} | ${l.betterThanMaster ? "yes" : "no"} |`,
    );
  }

  lines.push("", "## Ranked alternatives (detail)", "");
  for (const l of payload.languages) {
    lines.push(`### ${l.appCode}`, "");
    for (const a of l.alternativesRanked.slice(0, 8)) {
      lines.push(
        `- **#${a.rank}** ${a.platform} (${a.tier}): ${a.name} — \`${a.finalStatus}\` score=${a.score}${a.isMasterRegistryUrl ? " [MASTER]" : ""}`,
      );
    }
    lines.push("");
  }

  fs.writeFileSync(mdPath, `${lines.join("\n")}\n`, "utf8");
  fs.writeFileSync(
    verifyPath,
    `${JSON.stringify(
      {
        schemaVersion: "g2-a1-german-target-dictionary-alternatives-verification-v1",
        generatedAt: payload.generatedAt,
        metrics: payload.metrics,
        constraints: payload.constraints,
      },
      null,
      2,
    )}\n`,
    "utf8",
  );

  return { jsonPath, mdPath, verifyPath };
}

module.exports = {
  OUT_DIR,
  buildGermanTargetDictionaryAlternatives32,
  writeAlternativesArtifacts,
};
