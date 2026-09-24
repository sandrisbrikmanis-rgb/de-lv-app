#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { RESCAN_LANGS, OUT_DIR } = require("./lib/g2-a1-production-current/german-target-dictionary-rescan-problematic");
const { SEARCH_PILOT_WORDS, PILOT_FIELD } = require("./lib/g2-a1-production-current/german-target-dictionary-search-catalog");

const JSON_PATH = path.join(OUT_DIR, "german-target-dictionary-rescan-problematic.json");
const PILOT_LEMMAS = SEARCH_PILOT_WORDS.map((w) => w.lemma);

function main() {
  const blockers = [];

  for (const script of ["scripts/test-lod-de-reverse-api.js", "scripts/test-card-translation-audit-search.js"]) {
    try {
      execSync(`node ${script}`, { cwd: ROOT, stdio: "pipe", encoding: "utf8" });
    } catch (e) {
      blockers.push({
        code: "REGRESSION_SCRIPT_FAIL",
        script,
        detail: String(e.stdout || e.stderr || e.message).slice(0, 400),
      });
    }
  }

  for (const f of ["german-target-dictionary-rescan-problematic.json", "german-target-dictionary-rescan-problematic.md"]) {
    if (!fs.existsSync(path.join(OUT_DIR, f))) blockers.push({ code: "MISSING_ARTIFACT", file: f });
  }
  if (!fs.existsSync(JSON_PATH)) {
    console.log(JSON.stringify({ pass: false, blockers }, null, 2));
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  if (data.schemaVersion !== "g2-a1-german-target-dictionary-rescan-problematic-v1") {
    blockers.push({ code: "SCHEMA_VERSION", got: data.schemaVersion });
  }

  const pilotAuditSummary = {};

  for (const code of RESCAN_LANGS) {
    const row = (data.languages || []).find((l) => l.appCode === code);
    if (!row) {
      blockers.push({ code: "MISSING_LANG", appCode: code });
      continue;
    }
    if (!row.ranked?.length) blockers.push({ code: "NO_CANDIDATES", appCode: code });
    if (!row.recommendedRescan) blockers.push({ code: "NO_RECOMMENDATION", appCode: code });

    const top = row.ranked?.find((r) => r.rank === 1) || row.ranked?.[0];
    const pilots = top?.pilots || {};
    pilotAuditSummary[code] = pilots;

    if (code === "lb") {
      for (const lemma of PILOT_LEMMAS) {
        if (pilots[lemma] !== PILOT_FIELD.TRANSLATION_VALIDATED) {
          blockers.push({
            code: "LB_REQUIRES_TRANSLATION_VALIDATED",
            lemma,
            got: pilots[lemma],
          });
        }
      }
      if (row.recommendedRescan?.platform !== "lod") {
        blockers.push({ code: "LB_RECOMMENDED_MUST_BE_LOD", got: row.recommendedRescan?.platform });
      }
    } else {
      const missing = PILOT_LEMMAS.filter(
        (lemma) => pilots[lemma] !== PILOT_FIELD.FOUND && pilots[lemma] !== PILOT_FIELD.TRANSLATION_VALIDATED,
      );
      if (missing.length) {
        blockers.push({ code: "PILOT_FOUR_OF_FOUR_FAIL", appCode: code, missing, pilots });
      }
      if (row.recommendedRescan?.finalStatus !== "DICTIONARY_READY") {
        blockers.push({
          code: "RECOMMENDED_NOT_DICTIONARY_READY",
          appCode: code,
          got: row.recommendedRescan?.finalStatus,
        });
      }
    }
  }

  const lbJson = JSON.stringify((data.languages || []).find((l) => l.appCode === "lb") || {});
  if (/Munnerëffer Strooss/i.test(lbJson)) {
    blockers.push({ code: "LB_MUNNEREFFER_STROOSS_MUST_NOT_APPEAR_IN_RESCAN" });
  }

  const pass = blockers.length === 0;
  const verification = {
    pass,
    blockers,
    targetLanguages: RESCAN_LANGS,
    pilotLemmas: PILOT_LEMMAS,
    pilotAuditSummary,
    problematicLanguagesResolved: pass,
    auditNote:
      "lb: 4× TRANSLATION_VALIDATED (DE + LOD kandidāti + TARGET oficiālais); mk/nn: 4× FOUND (vārdnīcu piekļuve).",
    generatedAt: data.generatedAt,
    recommendations: (data.languages || []).map((l) => ({
      appCode: l.appCode,
      platform: l.recommendedRescan?.platform,
      finalStatus: l.recommendedRescan?.finalStatus,
    })),
  };
  fs.writeFileSync(
    path.join(OUT_DIR, "german-target-dictionary-rescan-problematic-verification.json"),
    `${JSON.stringify(verification, null, 2)}\n`,
    "utf8",
  );
  console.log(JSON.stringify(verification, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
