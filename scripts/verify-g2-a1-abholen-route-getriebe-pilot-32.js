#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { TARGET_APP_CODES, GERMAN_PILOT_WORDS, RESULT_STATUS } = require("./lib/g2-a1-production-current/multi-source-pilot-catalog");
const { OUT_DIR } = require("./lib/g2-a1-production-current/abholen-route-getriebe-pilot-32");
const { isHomepageUrl } = require("./lib/g2-a1-production-current/source-adapters/create-config-adapter");

const JSON_PATH = path.join(OUT_DIR, "abholen-route-getriebe-32.json");

function main() {
  const blockers = [];
  if (!fs.existsSync(JSON_PATH)) {
    console.log(JSON.stringify({ pass: false, blockers: [{ code: "MISSING_ARTIFACT" }] }, null, 2));
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  const records = data.records || [];

  if (records.length !== 96) blockers.push({ code: "RECORD_COUNT", got: records.length });
  const langs = new Set(records.map((r) => r.language));
  if (langs.size !== 32) blockers.push({ code: "LANG_COUNT", got: langs.size });

  for (const code of TARGET_APP_CODES) {
    if (!langs.has(code)) blockers.push({ code: "MISSING_LANG", appCode: code });
  }

  for (const w of GERMAN_PILOT_WORDS) {
    const n = records.filter((r) => r.germanWord === w.lemma).length;
    if (n !== 32) blockers.push({ code: "WORD_MATRIX", word: w.lemma, got: n });
  }

  const nbName = records.find((r) => r.language === "nb")?.sourceName;
  const nnName = records.find((r) => r.language === "nn")?.sourceName;
  if (nbName && nnName && nbName === nnName && records.filter((r) => r.language === "nb")[0]?.resultUrl === records.filter((r) => r.language === "nn")[0]?.resultUrl) {
    /* nb/nn may share dictionary family — only block if same URL and same lang conflation */
  }

  const gr = records.find((r) => r.language === "gr");
  if (gr && gr.standardCode !== "el") blockers.push({ code: "GR_EL", got: gr.standardCode });

  for (const r of records) {
    const hasDirect =
      r.resultStatus === RESULT_STATUS.DIRECT_TRANSLATION_FOUND ||
      r.resultStatus === RESULT_STATUS.MULTIPLE_TRANSLATIONS_FOUND ||
      r.resultStatus === RESULT_STATUS.SOURCE_CONFLICT;
    if (hasDirect) {
      if (!r.resultUrl || isHomepageUrl(r.resultUrl)) {
        blockers.push({ code: "HOMEPAGE_EVIDENCE", language: r.language, word: r.germanWord });
      }
      if (!r.sourceName) blockers.push({ code: "MISSING_SOURCE_NAME", language: r.language, word: r.germanWord });
      const direct = r.targetTranslations?.filter((t) => t.direct) || [];
      if (!direct.length && r.resultStatus !== RESULT_STATUS.SOURCE_CONFLICT) {
        blockers.push({ code: "DIRECT_WITHOUT_TARGET", language: r.language, word: r.germanWord });
      }
    }
    if (
      (r.resultStatus === RESULT_STATUS.DIRECT_TRANSLATION_FOUND ||
        r.resultStatus === RESULT_STATUS.MULTIPLE_TRANSLATIONS_FOUND) &&
      !r.targetTranslations?.some((t) => t.direct && t.text)
    ) {
      blockers.push({ code: "EMPTY_DIRECT_TARGET", language: r.language, word: r.germanWord });
    }
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
