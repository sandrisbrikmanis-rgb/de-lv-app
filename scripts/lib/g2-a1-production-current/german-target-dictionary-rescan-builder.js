#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { loadStructuredLanguageAuthoritySources, stripTrackingParams } = require("../master-language-authority-sources-33");
const { closeBrowserPool } = require("./source-adapters/browser/pool");
const {
  SEARCH_PILOT_WORDS,
  FINAL_STATUS,
  loadManifest,
} = require("./german-target-dictionary-search-catalog");
const { evaluateCandidate } = require("./german-target-dictionary-search-32");
const { editorialForPlatform } = require("./german-target-dictionary-owner-preapproval-32");

function loadRescanCandidates(candidatesRel) {
  return JSON.parse(fs.readFileSync(path.join(ROOT, candidatesRel), "utf8"));
}

function toCandidate(raw, appCode, standardCode) {
  return {
    id: raw.id,
    appCode,
    standardCode,
    name: raw.name,
    publisher: raw.platform,
    url: stripTrackingParams(raw.url),
    languagePair: `de→${standardCode}`,
    access: raw.access || "PUBLIC_BROWSER_SESSION",
    entryCount: raw.entryCount ?? null,
    entryCountStatus: raw.entryCountStatus || "ENTRY_COUNT_NOT_PUBLICLY_CONFIRMED",
    type: raw.platform,
    searchMode: raw.searchMode || null,
    platform: raw.platform,
    subscriptionReferenceOnly: Boolean(raw.subscriptionReferenceOnly),
    luxdicoL1: raw.luxdicoL1,
    luxdicoL2: raw.luxdicoL2,
  };
}

async function buildGermanTargetRescan({
  targetLanguages,
  candidatesRel,
  schemaVersion,
  classification,
  nextAction,
  titleLv,
  introLv,
}) {
  const data = loadRescanCandidates(candidatesRel);
  const manifest = loadManifest();
  const structured = loadStructuredLanguageAuthoritySources();
  if (!structured.pass) throw new Error(structured.error);

  const languages = [];
  for (const appCode of targetLanguages) {
    const spec = manifest.sources.find((s) => s.appCode === appCode);
    if (!spec) throw new Error(`MISSING_${appCode}`);
    const row = structured.languages.find((r) => r.appCode === appCode);
    const rawList = data.languages[appCode] || [];
    const ranked = [];

    for (const raw of rawList) {
      const candidate = toCandidate(raw, appCode, spec.standardCode);
      if (candidate.subscriptionReferenceOnly) {
        ranked.push({
          candidate,
          skippedLivePilots: true,
          finalStatus: FINAL_STATUS.SUBSCRIPTION_REQUIRED,
          score: -100,
          pilots: null,
        });
        continue;
      }
      // eslint-disable-next-line no-await-in-loop
      const evalResult = await evaluateCandidate(candidate, appCode);
      const editorial = editorialForPlatform(candidate.platform);
      ranked.push({
        ...evalResult,
        editorial,
        automaticWords: SEARCH_PILOT_WORDS.filter(
          (w) => evalResult.pilots[w.lemma]?.pilotStatus === "AUTOMATIC_TRANSLATION_ONLY",
        ).map((w) => w.lemma),
      });
    }

    ranked.sort((a, b) => b.score - a.score);
    const best = ranked.find((r) => !r.skippedLivePilots && r.score > -50) || ranked[0];

    languages.push({
      appCode,
      standardCode: spec.standardCode,
      masterRegistryUrl: row?.GERMAN_TARGET_DICTIONARY_URL,
      masterRegistryName: row?.GERMAN_TARGET_DICTIONARY_NAME,
      recommendedRescan: best
        ? {
            name: best.candidate.name,
            url: best.candidate.url,
            platform: best.candidate.platform,
            finalStatus: best.finalStatus,
            score: best.score,
            entryEditorialType: best.editorial?.entryEditorialType,
            entryEditorialLabelLv: best.editorial?.entryEditorialLabelLv,
            automaticTranslationOnlyWords: best.automaticWords || [],
          }
        : null,
      candidatesProbed: ranked.length,
      ranked: ranked.map((r, i) => ({
        rank: i + 1,
        name: r.candidate.name,
        url: r.candidate.url,
        platform: r.candidate.platform,
        finalStatus: r.finalStatus,
        score: r.score,
        skippedLivePilots: Boolean(r.skippedLivePilots),
        entryEditorialType: r.editorial?.entryEditorialType,
        pilots: r.pilots
          ? SEARCH_PILOT_WORDS.reduce((acc, w) => {
              acc[w.lemma] = r.pilots[w.lemma]?.pilotStatus;
              return acc;
            }, {})
          : null,
      })),
    });
  }

  await closeBrowserPool();

  return {
    schemaVersion,
    generatedAt: new Date().toISOString(),
    classification,
    nextAction,
    targetLanguages,
    languages,
    constraints: { aiTranslationUsed: false, masterNotModified: true },
    reportMeta: { titleLv, introLv },
  };
}

function writeGermanTargetRescanArtifacts(payload, outDir, baseName) {
  fs.mkdirSync(outDir, { recursive: true });
  const jsonPath = path.join(outDir, `${baseName}.json`);
  const mdPath = path.join(outDir, `${baseName}.md`);
  fs.writeFileSync(jsonPath, `${JSON.stringify(payload, null, 2)}\n`, "utf8");

  const title = payload.reportMeta?.titleLv || "G2/A1 — vācu–TARGET rescan";
  const intro = payload.reportMeta?.introLv || "";
  const lines = [
    `# ${title}`,
    "",
    intro,
    "",
    "| Valoda | Ieteicamais (rescan) | Platforma | Statuss | Redakcionālais tips | Auto brīdinājums |",
    "|--------|----------------------|-----------|---------|---------------------|------------------|",
  ];
  for (const l of payload.languages) {
    const r = l.recommendedRescan;
    lines.push(
      `| ${l.appCode} | ${r?.name || "—"} | ${r?.platform || "—"} | ${r?.finalStatus || "—"} | ${r?.entryEditorialType || "—"} | ${(r?.automaticTranslationOnlyWords || []).join(" ") || "—"} |`,
    );
  }
  lines.push("", "## Ranžētie kandidāti", "");
  for (const l of payload.languages) {
    lines.push(`### ${l.appCode}`, "");
    for (const c of l.ranked) {
      lines.push(`- #${c.rank} **${c.platform}**: ${c.name} — \`${c.finalStatus}\` score=${c.score}`);
    }
    lines.push("");
  }
  fs.writeFileSync(mdPath, `${lines.join("\n")}\n`, "utf8");
  return { jsonPath, mdPath };
}

module.exports = {
  buildGermanTargetRescan,
  writeGermanTargetRescanArtifacts,
};
