#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { loadStructuredLanguageAuthoritySources, rowByAppCode } = require("../master-language-authority-sources-33");
const { closeBrowserPool } = require("./source-adapters/browser/pool");
const { GERMAN_PILOT_WORDS, TARGET_APP_CODES, RESULT_STATUS } = require("./three-word-pilot-catalog");
const { verifyAllGermanPilotWords } = require("./three-word-de-identity");
const { lookupBilingualTranslation } = require("./three-word-dict-extract");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/three-word-german-target-pilot");

function loadManifestRow(structured, appCode) {
  const row = rowByAppCode(structured.languages, appCode);
  if (!row?.GERMAN_TARGET_DICTIONARY_URL) return null;
  return {
    appCode: row.appCode,
    standardCode: row.standardCode,
    name: row.GERMAN_TARGET_DICTIONARY_NAME,
    url: row.GERMAN_TARGET_DICTIONARY_URL,
    type: row.GERMAN_TARGET_DICTIONARY_TYPE,
  };
}

async function buildThreeWordGermanTargetPilot32(options = {}) {
  const structured = loadStructuredLanguageAuthoritySources();
  if (!structured.pass) throw new Error(structured.error);

  const deIdentity = await verifyAllGermanPilotWords();
  const reuteDeIssue = deIdentity.reute?.germanLemmaStatus === "SOURCE_DE_ISSUE";

  const records = [];
  const langs = options.onlyLanguages?.length
    ? TARGET_APP_CODES.filter((c) => options.onlyLanguages.includes(c))
    : TARGET_APP_CODES;

  if (!options.onlyLanguages?.length && langs.length !== 32) {
    throw new Error(`LANG_COUNT_${langs.length}`);
  }

  for (const appCode of langs) {
    const dictRow = loadManifestRow(structured, appCode);
    for (const word of GERMAN_PILOT_WORDS) {
      const deInfo = deIdentity[word.id];
      let record = {
        language: appCode,
        standardCode: dictRow?.standardCode || (appCode === "gr" ? "el" : appCode),
        germanWord: word.lemma,
        germanLemmaStatus: deInfo.germanLemmaStatus,
        germanMeaning: deInfo.germanMeaning,
        targetTranslation: null,
        alternativeTranslations: [],
        dictionaryName: dictRow?.name || null,
        resultUrl: deInfo.deEvidenceUrl || null,
        resultStatus: RESULT_STATUS.ENTRY_NOT_FOUND,
        note: deInfo.note || null,
      };

      if (!dictRow) {
        record.resultStatus = RESULT_STATUS.SOURCE_ACCESS_BLOCKED;
        record.note = "Missing GERMAN_TARGET_DICTIONARY_URL in structured registry";
        records.push(record);
        continue;
      }

      if (word.id === "reute" && reuteDeIssue) {
        record.note = [record.note, deIdentity.reute.germanMeaning].filter(Boolean).join(" | ");
      }

      // eslint-disable-next-line no-await-in-loop
      const hit = await lookupBilingualTranslation({
        dictRow,
        lemma: word.lemma,
        appCode,
      });

      record = {
        ...record,
        dictionaryName: hit.dictionaryName,
        resultUrl: hit.resultUrl,
        targetTranslation: hit.targetTranslation,
        alternativeTranslations: hit.alternativeTranslations || [],
        resultStatus: hit.resultStatus,
        note: [record.note, hit.note].filter(Boolean).join(" | ") || null,
      };

      if (
        word.id === "reute" &&
        reuteDeIssue &&
        record.resultStatus === RESULT_STATUS.ENTRY_NOT_FOUND
      ) {
        record.resultStatus = RESULT_STATUS.ENTRY_NOT_FOUND;
      }

      records.push(record);
      if (options.onProgress) {
        options.onProgress({ appCode, word: word.lemma, status: record.resultStatus });
      }
    }
  }

  await closeBrowserPool();

  function countWordFound(wordId) {
    const lemma = GERMAN_PILOT_WORDS.find((w) => w.id === wordId).lemma;
    return records.filter(
      (r) =>
        r.germanWord === lemma &&
        (r.resultStatus === RESULT_STATUS.TRANSLATION_FOUND ||
          r.resultStatus === RESULT_STATUS.MULTIPLE_TRANSLATIONS_FOUND),
    ).length;
  }

  const metrics = {
    languages: langs.length,
    records: records.length,
    ablehnenTranslationFound: countWordFound("ablehnen"),
    getreideTranslationFound: countWordFound("getreide"),
    reuteTranslationFound: countWordFound("reute"),
    multipleTranslationsRows: records.filter((r) => r.resultStatus === RESULT_STATUS.MULTIPLE_TRANSLATIONS_FOUND).length,
    entryNotFound: records.filter((r) => r.resultStatus === RESULT_STATUS.ENTRY_NOT_FOUND).length,
    accessBlocked: records.filter((r) => r.resultStatus === RESULT_STATUS.SOURCE_ACCESS_BLOCKED).length,
  };

  const classification = reuteDeIssue
    ? "G2_A1_THREE_WORD_PILOT_COMPLETE_REUTE_DE_SOURCE_ISSUE"
    : "G2_A1_ABLEHNEN_GETREIDE_REUTE_32_LANGUAGE_DICTIONARY_PILOT_COMPLETE";

  return {
    builtAt: new Date().toISOString(),
    classification,
    nextAction: "OWNER_REVIEW_THREE_WORD_TRANSLATION_RESULTS",
    deIdentity,
    reuteDeSourceIssue: reuteDeIssue,
    metrics,
    records,
    fullA1AuditRan: false,
  };
}

function aggregateLanguageTable(payload) {
  const byLang = new Map();
  for (const r of payload.records) {
    if (!byLang.has(r.language)) byLang.set(r.language, { language: r.language, words: {} });
    byLang.get(r.language).words[r.germanWord] = r;
  }
  return [...byLang.values()].sort((a, b) => a.language.localeCompare(b.language));
}

function writeThreeWordArtifacts(payload) {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const jsonPath = path.join(OUT_DIR, "ablehnen-getreide-reute-32.json");
  fs.writeFileSync(jsonPath, `${JSON.stringify(payload, null, 2)}\n`);

  const rows = aggregateLanguageTable(payload);
  const lines = [
    "# G2/A1 — ablehnen / Getreide / Reute (32 valodas)",
    "",
    `Classification: **${payload.classification}**`,
    `NEXT_ACTION: **${payload.nextAction}**`,
    "",
    "## Vācu pamatformas",
    "",
  ];
  for (const w of GERMAN_PILOT_WORDS) {
    const d = payload.deIdentity[w.id];
    lines.push(`- **${w.lemma}** — ${d.germanLemmaStatus}: ${(d.germanMeaning || "").replace(/\s+/g, " ").slice(0, 200)}`);
  }
  lines.push("", "## Kopējā tabula", "");
  lines.push(
    "| Valoda | ablehnen | Avots | Getreide | Avots | Reute | Avots | Statuss/piezīme |",
    "|--------|----------|-------|----------|-------|-------|-------|-----------------|",
  );

  for (const row of rows) {
    const a = row.words.ablehnen;
    const g = row.words.Getreide;
    const r = row.words.Reute;
    const note = [a?.resultStatus, g?.resultStatus, r?.resultStatus].join("; ");
    const fmt = (rec) => {
      if (!rec) return "—";
      if (!rec.targetTranslation) return rec.resultStatus;
      const alts = rec.alternativeTranslations?.length
        ? ` (+${rec.alternativeTranslations.join(", ")})`
        : "";
      return `${rec.targetTranslation}${alts}`;
    };
    lines.push(
      `| ${row.language} | ${fmt(a)} | ${a?.resultUrl || "—"} | ${fmt(g)} | ${g?.resultUrl || "—"} | ${fmt(r)} | ${r?.resultUrl || "—"} | ${note} |`,
    );
  }
  lines.push("");
  const mdPath = path.join(OUT_DIR, "ablehnen-getreide-reute-32.md");
  fs.writeFileSync(mdPath, `${lines.join("\n")}\n`);

  const verificationPath = path.join(OUT_DIR, "ablehnen-getreide-reute-32-verification.json");
  fs.writeFileSync(
    verificationPath,
    `${JSON.stringify(
      {
        verifiedAt: new Date().toISOString(),
        classification: payload.classification,
        metrics: payload.metrics,
        recordCount: payload.records.length,
        reuteDeSourceIssue: payload.reuteDeSourceIssue,
      },
      null,
      2,
    )}\n`,
  );

  return { jsonPath, mdPath, verificationPath };
}

module.exports = {
  OUT_DIR,
  buildThreeWordGermanTargetPilot32,
  writeThreeWordArtifacts,
  aggregateLanguageTable,
};
