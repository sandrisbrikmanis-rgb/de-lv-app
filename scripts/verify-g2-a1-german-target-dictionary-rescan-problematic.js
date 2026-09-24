#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { RESCAN_LANGS, OUT_DIR } = require("./lib/g2-a1-production-current/german-target-dictionary-rescan-problematic");
const { SEARCH_PILOT_WORDS } = require("./lib/g2-a1-production-current/german-target-dictionary-search-catalog");

const JSON_PATH = path.join(OUT_DIR, "german-target-dictionary-rescan-problematic.json");
const PILOT_LEMMAS = SEARCH_PILOT_WORDS.map((w) => w.lemma);

function main() {
  const blockers = [];

  try {
    execSync("node scripts/test-lod-de-reverse-api.js", { cwd: ROOT, stdio: "pipe", encoding: "utf8" });
  } catch (e) {
    blockers.push({
      code: "LOD_DE_REVERSE_REGRESSION_FAIL",
      detail: String(e.stdout || e.stderr || e.message).slice(0, 500),
    });
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

  const pilotFourOfFour = {};
  for (const code of RESCAN_LANGS) {
    const row = (data.languages || []).find((l) => l.appCode === code);
    if (!row) {
      blockers.push({ code: "MISSING_LANG", appCode: code });
      continue;
    }
    if (!row.ranked?.length) blockers.push({ code: "NO_CANDIDATES", appCode: code });
    if (!row.recommendedRescan) blockers.push({ code: "NO_RECOMMENDATION", appCode: code });
    if (row.recommendedRescan?.finalStatus !== "DICTIONARY_READY") {
      blockers.push({
        code: "RECOMMENDED_NOT_DICTIONARY_READY",
        appCode: code,
        got: row.recommendedRescan?.finalStatus,
        platform: row.recommendedRescan?.platform,
      });
    }

    const top = row.ranked?.find((r) => r.rank === 1) || row.ranked?.[0];
    const pilots = top?.pilots || {};
    const missing = PILOT_LEMMAS.filter((lemma) => pilots[lemma] !== "FOUND");
    pilotFourOfFour[code] = {
      platform: top?.platform,
      pilots,
      foundCount: PILOT_LEMMAS.length - missing.length,
      required: PILOT_LEMMAS.length,
    };
    if (missing.length) {
      blockers.push({
        code: "PILOT_FOUR_OF_FOUR_FAIL",
        appCode: code,
        missing,
        pilots,
      });
    }

    if (code === "lb" && row.recommendedRescan?.platform === "lod") {
      const routePilot = top?.pilots?.Route;
      if (routePilot !== "FOUND") {
        blockers.push({ code: "LB_ROUTE_NOT_FOUND", got: routePilot });
      }
    }
  }

  const lbRow = (data.languages || []).find((l) => l.appCode === "lb");
  const lbJson = lbRow ? JSON.stringify(lbRow) : "";
  if (/Munnerëffer Strooss/i.test(lbJson)) {
    blockers.push({ code: "LB_MUNNEREFFER_STROOSS_MUST_NOT_APPEAR_IN_RESCAN" });
  }
  if (lbRow?.recommendedRescan?.platform === "lod") {
    const routeRank = lbRow.ranked?.find((r) => r.platform === "lod" && r.rank === 1);
    const routeDetail = routeRank?.pilots?.Route;
    if (routeDetail === "FOUND") {
      /* sampleTranslation not in ranked summary — regression test enforces Streck */
    }
  }

  const pass = blockers.length === 0;
  const verification = {
    pass,
    blockers,
    targetLanguages: RESCAN_LANGS,
    pilotLemmas: PILOT_LEMMAS,
    pilotFourOfFour,
    problematicLanguagesResolved: pass,
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
