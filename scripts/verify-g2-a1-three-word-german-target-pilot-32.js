#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { TARGET_APP_CODES, GERMAN_PILOT_WORDS, RESULT_STATUS } = require("./lib/g2-a1-production-current/three-word-pilot-catalog");
const { OUT_DIR } = require("./lib/g2-a1-production-current/three-word-german-target-pilot-32");
const { isHomepageUrl } = require("./lib/g2-a1-production-current/source-adapters/create-config-adapter");

const JSON_PATH = path.join(OUT_DIR, "ablehnen-getreide-reute-32.json");

function main() {
  const blockers = [];
  if (!fs.existsSync(JSON_PATH)) {
    console.log(JSON.stringify({ pass: false, blockers: [{ code: "MISSING_ARTIFACT" }] }, null, 2));
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  const records = data.records || [];

  if (records.length !== 96) {
    blockers.push({ code: "RECORD_COUNT", expected: 96, got: records.length });
  }

  const langs = new Set(records.map((r) => r.language));
  if (langs.size !== 32) blockers.push({ code: "LANG_COUNT", got: langs.size });

  for (const code of TARGET_APP_CODES) {
    if (!langs.has(code)) blockers.push({ code: "MISSING_LANG", appCode: code });
    const subset = records.filter((r) => r.language === code);
    if (subset.length !== 3) blockers.push({ code: "WORD_COUNT", appCode: code, got: subset.length });
  }

  const nb = records.filter((r) => r.language === "nb").map((r) => r.dictionaryName);
  const nn = records.filter((r) => r.language === "nn").map((r) => r.dictionaryName);
  if (JSON.stringify(nb) === JSON.stringify(nn)) {
    blockers.push({ code: "NB_NN_SAME_DICTIONARY" });
  }

  const gr = records.find((r) => r.language === "gr");
  if (gr && gr.standardCode !== "el") blockers.push({ code: "GR_EL", got: gr.standardCode });

  for (const r of records) {
    if (r.germanWord === "Reute" && /Leute|Reue|Rute|Route/i.test(r.targetTranslation || "")) {
      blockers.push({ code: "REUTE_AUTOCORRECT", language: r.language });
    }
    if (
      (r.resultStatus === RESULT_STATUS.TRANSLATION_FOUND ||
        r.resultStatus === RESULT_STATUS.MULTIPLE_TRANSLATIONS_FOUND) &&
      (!r.resultUrl || isHomepageUrl(r.resultUrl))
    ) {
      blockers.push({ code: "HOMEPAGE_EVIDENCE", language: r.language, word: r.germanWord });
    }
    if (
      (r.resultStatus === RESULT_STATUS.TRANSLATION_FOUND ||
        r.resultStatus === RESULT_STATUS.MULTIPLE_TRANSLATIONS_FOUND) &&
      !r.targetTranslation
    ) {
      blockers.push({ code: "EMPTY_TARGET", language: r.language, word: r.germanWord });
    }
    if (
      r.resultStatus === RESULT_STATUS.TRANSLATION_FOUND ||
      r.resultStatus === RESULT_STATUS.MULTIPLE_TRANSLATIONS_FOUND
    ) {
      if (!r.resultUrl?.startsWith("https://")) {
        blockers.push({ code: "URL_NOT_HTTPS", language: r.language, word: r.germanWord });
      }
    }
  }

  for (const w of GERMAN_PILOT_WORDS) {
    const n = records.filter((r) => r.germanWord === w.lemma).length;
    if (n !== 32) blockers.push({ code: "WORD_LANG_MATRIX", word: w.lemma, got: n });
  }

  const prodDiff = execSync("git diff --name-only -- data www/data crowdin", { cwd: ROOT, encoding: "utf8" }).trim();
  if (prodDiff) blockers.push({ code: "PRODUCTION_DIRTY", files: prodDiff.split("\n") });

  const pass = blockers.length === 0;
  console.log(
    JSON.stringify(
      {
        pass,
        blockers,
        classification: data.classification,
        nextAction: data.nextAction,
        metrics: data.metrics,
        fullA1AuditRan: false,
        productionChanges: prodDiff ? prodDiff.split("\n").filter(Boolean).length : 0,
      },
      null,
      2,
    ),
  );
  process.exit(pass ? 0 : 1);
}

main();
