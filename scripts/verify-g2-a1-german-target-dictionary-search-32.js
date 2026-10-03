#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  OUT_DIR,
  PILOT_FIELD,
  SEARCH_PILOT_WORDS,
  FINAL_STATUS,
} = require("./lib/g2-a1-production-current/german-target-dictionary-search-32");
const { TARGET_APP_CODES } = require("./lib/g2-a1-production-current/german-target-dictionary-search-catalog");
const { isHomepageUrl } = require("./lib/g2-a1-production-current/source-adapters/create-config-adapter");

const JSON_PATH = path.join(OUT_DIR, "german-target-dictionary-search-32.json");

function main() {
  const blockers = [];
  const required = [
    "german-target-dictionary-search-32.json",
    "german-target-dictionary-search-32.md",
    "german-target-dictionary-owner-proposals.csv",
    "german-target-dictionary-search-verification.json",
  ];
  for (const f of required) {
    if (!fs.existsSync(path.join(OUT_DIR, f))) blockers.push({ code: "MISSING_ARTIFACT", file: f });
  }
  if (!fs.existsSync(JSON_PATH)) {
    console.log(JSON.stringify({ pass: false, blockers }, null, 2));
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  const rows = data.rows || [];

  if (rows.length !== 32) blockers.push({ code: "ROW_COUNT", got: rows.length });
  const langs = new Set(rows.map((r) => r.appCode));
  for (const code of TARGET_APP_CODES) {
    if (!langs.has(code)) blockers.push({ code: "MISSING_LANG", appCode: code });
  }

  const gr = rows.find((r) => r.appCode === "gr");
  if (gr && gr.standardCode !== "el") blockers.push({ code: "GR_EL_MISMATCH", got: gr.standardCode });

  const nb = rows.find((r) => r.appCode === "nb");
  const nn = rows.find((r) => r.appCode === "nn");
  if (nb && nn && nb.dictionaryUrl === nn.dictionaryUrl && nb.dictionaryName === nn.dictionaryName) {
    blockers.push({ code: "NB_NN_CONFLATED", url: nb.dictionaryUrl });
  }

  const pilotFields = new Set(Object.values(PILOT_FIELD));
  for (const r of rows) {
    for (const w of SEARCH_PILOT_WORDS) {
      const p = r.pilots?.[w.lemma];
      if (!p) blockers.push({ code: "MISSING_PILOT", appCode: r.appCode, lemma: w.lemma });
      else if (!pilotFields.has(p.pilotStatus)) {
        blockers.push({ code: "INVALID_PILOT_STATUS", appCode: r.appCode, lemma: w.lemma, got: p.pilotStatus });
      }
      if (p?.pilotStatus === PILOT_FIELD.FOUND) {
        if (!p.resultUrl || isHomepageUrl(p.resultUrl)) {
          blockers.push({ code: "HOMEPAGE_EVIDENCE", appCode: r.appCode, lemma: w.lemma });
        }
        if (!p.sampleTranslation) {
          blockers.push({ code: "FOUND_WITHOUT_SAMPLE", appCode: r.appCode, lemma: w.lemma });
        }
      }
    }

    if (r.appCode === "et" && r.finalStatus === FINAL_STATUS.NO_SUITABLE_DICTIONARY_FOUND) {
      const hasSubProposal = (data.ownerProposals || []).some(
        (p) => p.appCode === "et" && p.access === "SUBSCRIPTION_REQUIRED",
      );
      if (!hasSubProposal) blockers.push({ code: "ET_KEELEVARA_SUBSCRIPTION_DOC" });
    }
  }

  if (data.constraints?.aiTranslationUsed) blockers.push({ code: "AI_TRANSLATION_FLAGGED" });
  if (data.constraints?.fullA1AuditRan) blockers.push({ code: "FULL_A1_AUDIT_RAN" });

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
