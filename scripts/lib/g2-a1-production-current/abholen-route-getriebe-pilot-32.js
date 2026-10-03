#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { loadStructuredLanguageAuthoritySources, rowByAppCode } = require("../master-language-authority-sources-33");
const { closeBrowserPool } = require("./source-adapters/browser/pool");
const { lookupDeOfficialEntry } = require("./source-adapters/de");
const { buildAllowlistForLanguage } = require("./registry-domain-allowlist");
const { SOURCE_ACCESS_OUTCOME } = require("./official-source-access-constants");
const { GERMAN_PILOT_WORDS, TARGET_APP_CODES, RESULT_STATUS } = require("./multi-source-pilot-catalog");
const { orderedMasterSources } = require("./multi-source-registry-sources");
const { queryAllSourcesForWord, clearPageCache } = require("./multi-source-word-lookup");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/abholen-route-getriebe-32");

async function verifyGermanLemma(wordSpec) {
  const allow = buildAllowlistForLanguage("en");
  const adapter = await lookupDeOfficialEntry({
    lookupTerm: wordSpec.lemma,
    allowedDomains: allow.de.allowedDomains,
    authorityName: allow.de.authorityName,
    provenance: { pilotWord: wordSpec.id },
  });
  if (adapter.outcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED) {
    let article = wordSpec.article;
    const frag = adapter.evidenceFragment || "";
    if (wordSpec.id === "route" && /,\s*die|Femininum/i.test(frag)) article = "die";
    if (wordSpec.id === "getriebe" && /,\s*das|Neutrum/i.test(frag)) article = "das";
    return {
      germanLemma: wordSpec.lemma,
      germanPartOfSpeech: wordSpec.partOfSpeech,
      germanMeaning: frag.slice(0, 600),
      article,
      deEvidenceUrl: adapter.entryUrl || adapter.finalUrl,
    };
  }
  return {
    germanLemma: wordSpec.lemma,
    germanPartOfSpeech: wordSpec.partOfSpeech,
    germanMeaning: adapter.error || adapter.outcome || "DE entry not validated",
    article: wordSpec.article,
    deEvidenceUrl: adapter.finalUrl || adapter.requestedUrl,
  };
}

async function buildAbholenRouteGetriebePilot32(options = {}) {
  clearPageCache();
  const structured = loadStructuredLanguageAuthoritySources();
  if (!structured.pass) throw new Error(structured.error);

  const deByWord = {};
  for (const w of GERMAN_PILOT_WORDS) {
    // eslint-disable-next-line no-await-in-loop
    deByWord[w.id] = await verifyGermanLemma(w);
  }

  const langs = options.onlyLanguages?.length
    ? TARGET_APP_CODES.filter((c) => options.onlyLanguages.includes(c))
    : TARGET_APP_CODES;
  if (!options.onlyLanguages?.length && langs.length !== 32) {
    throw new Error(`LANG_COUNT_${langs.length}`);
  }

  const records = [];
  for (const appCode of langs) {
    const row = rowByAppCode(structured.languages, appCode);
    if (!row) throw new Error(`MISSING_ROW_${appCode}`);
    const sources = orderedMasterSources(row);

    for (const word of GERMAN_PILOT_WORDS) {
      const de = deByWord[word.id];
      // eslint-disable-next-line no-await-in-loop
      const merged = await queryAllSourcesForWord({
        sources,
        lemma: word.lemma,
        appCode,
      });

      const directTexts = merged.targetTranslations.filter((t) => t.direct).map((t) => t.text);
      const altTexts = merged.targetTranslations.filter((t) => !t.direct).map((t) => t.text);

      records.push({
        language: appCode,
        standardCode: row.standardCode,
        germanWord: word.lemma,
        germanLemma: de.germanLemma,
        germanPartOfSpeech: de.germanPartOfSpeech,
        germanMeaning: de.germanMeaning,
        targetTranslations: merged.targetTranslations,
        primaryTarget: directTexts[0] || altTexts[0] || null,
        alternativeTranslations: [...new Set(directTexts.slice(1).concat(altTexts))],
        sourceName: merged.sourceName,
        sourceType: merged.sourceType,
        resultUrl: merged.resultUrl,
        resultStatus: merged.resultStatus,
        sourceAgreement: merged.sourceAgreement,
        sourcesCheckedCount: merged.sourcesChecked.length,
        sourcesChecked: merged.sourcesChecked,
        note:
          merged.resultStatus === RESULT_STATUS.SUPPORTING_SOURCE_FOUND
            ? "Only supporting/monolingual evidence — not promoted to direct translation."
            : null,
      });

      if (options.onProgress) {
        options.onProgress({ appCode, word: word.lemma, status: merged.resultStatus });
      }
    }
  }

  await closeBrowserPool();

  function countDirect(wordId) {
    const lemma = GERMAN_PILOT_WORDS.find((w) => w.id === wordId).lemma;
    return records.filter(
      (r) =>
        r.germanWord === lemma &&
        (r.resultStatus === RESULT_STATUS.DIRECT_TRANSLATION_FOUND ||
          r.resultStatus === RESULT_STATUS.MULTIPLE_TRANSLATIONS_FOUND),
    ).length;
  }

  const metrics = {
    languages: langs.length,
    records: records.length,
    abholenDirect: countDirect("abholen"),
    routeDirect: countDirect("route"),
    getriebeDirect: countDirect("getriebe"),
    multipleTranslations: records.filter((r) => r.resultStatus === RESULT_STATUS.MULTIPLE_TRANSLATIONS_FOUND).length,
    supportingOnly: records.filter((r) => r.resultStatus === RESULT_STATUS.SUPPORTING_SOURCE_FOUND).length,
    sourceConflict: records.filter((r) => r.resultStatus === RESULT_STATUS.SOURCE_CONFLICT).length,
    entryNotFound: records.filter((r) => r.resultStatus === RESULT_STATUS.ENTRY_NOT_FOUND).length,
    accessBlocked: records.filter((r) => r.resultStatus === RESULT_STATUS.SOURCE_ACCESS_BLOCKED).length,
    sourceAgreed: records.filter((r) => r.sourceAgreement === "AGREED").length,
  };

  return {
    builtAt: new Date().toISOString(),
    classification: "G2_A1_ABHOLEN_ROUTE_GETRIEBE_32_LANGUAGE_MULTI_SOURCE_PILOT_COMPLETE",
    nextAction: "OWNER_REVIEW_MULTI_SOURCE_TRANSLATION_RESULTS",
    deIdentity: deByWord,
    metrics,
    records,
    fullA1AuditRan: false,
  };
}

function writeAbholenRouteGetriebeArtifacts(payload) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "abholen-route-getriebe-32.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(payload, null, 2)}\n`);

  const byLang = new Map();
  for (const r of payload.records) {
    if (!byLang.has(r.language)) byLang.set(r.language, {});
    byLang.get(r.language)[r.germanWord] = r;
  }

  const lines = [
    "# G2/A1 — abholen / Route / Getriebe (32 valodas, multi-source)",
    "",
    `Classification: **${payload.classification}**`,
    `NEXT_ACTION: **${payload.nextAction}**`,
    "",
    "## Vācu identitāte",
    "",
  ];
  for (const w of GERMAN_PILOT_WORDS) {
    const d = payload.deIdentity[w.id];
    lines.push(`- **${w.lemma}** (${w.partOfSpeech}${d.article ? `, ${d.article}` : ""})`);
  }
  lines.push("", "## Kopējā tabula", "");
  lines.push(
    "| Valoda | abholen | Avots | Route | Avots | Getriebe | Avots | Statuss/piezīme |",
    "|--------|---------|-------|-------|-------|----------|-------|-----------------|",
  );

  for (const code of [...byLang.keys()].sort()) {
    const w = byLang.get(code);
    const fmt = (rec) => {
      if (!rec) return "—";
      const direct = rec.targetTranslations.filter((t) => t.direct).map((t) => t.text);
      const all = direct.length ? direct : rec.targetTranslations.map((t) => t.text);
      if (!all.length) return rec.resultStatus;
      const main = all[0];
      const rest = all.slice(1);
      return rest.length ? `${main} (+${rest.join(", ")})` : main;
    };
    const note = [w.abholen?.resultStatus, w.Route?.resultStatus, w.Getriebe?.resultStatus].join("; ");
    lines.push(
      `| ${code} | ${fmt(w.abholen)} | ${w.abholen?.resultUrl || "—"} | ${fmt(w.Route)} | ${w.Route?.resultUrl || "—"} | ${fmt(w.Getriebe)} | ${w.Getriebe?.resultUrl || "—"} | ${note} |`,
    );
  }
  lines.push("");
  const mdPath = path.join(OUT_DIR, "abholen-route-getriebe-32.md");
  fs.writeFileSync(mdPath, `${lines.join("\n")}\n`);

  const verificationPath = path.join(OUT_DIR, "abholen-route-getriebe-32-verification.json");
  fs.writeFileSync(
    verificationPath,
    `${JSON.stringify({ verifiedAt: new Date().toISOString(), metrics: payload.metrics, recordCount: payload.records.length }, null, 2)}\n`,
  );

  return { jsonPath, mdPath, verificationPath };
}

module.exports = {
  OUT_DIR,
  buildAbholenRouteGetriebePilot32,
  writeAbholenRouteGetriebeArtifacts,
};
