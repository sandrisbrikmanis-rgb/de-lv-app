#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { TARGET_APP_CODES, GERMAN_PILOTS, expectedTarget } = require("./lib/g2-a1-production-current/pilot-content-access-32-catalog");
const { isHomepageUrl } = require("./lib/g2-a1-production-current/source-adapters/create-config-adapter");

const OUT = path.join(ROOT, "reports/g2-a1-production-current/pilot-content-access-32/pilot-content-access-32.json");

function main() {
  const blockers = [];
  if (!fs.existsSync(OUT)) {
    console.log(JSON.stringify({ pass: false, blockers: [{ code: "MISSING_ARTIFACT" }] }, null, 2));
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(OUT, "utf8"));

  if (data.metrics?.languagesTotal !== 32) {
    blockers.push({ code: "LANG_COUNT", got: data.metrics?.languagesTotal });
  }
  if (data.languages?.length !== 32) {
    blockers.push({ code: "LANG_ROWS", got: data.languages?.length });
  }

  const seenLang = new Set();
  for (const lang of data.languages || []) {
    if (seenLang.has(lang.appCode)) blockers.push({ code: "DUPLICATE_LANG", appCode: lang.appCode });
    seenLang.add(lang.appCode);
    if (!TARGET_APP_CODES.includes(lang.appCode)) {
      blockers.push({ code: "UNEXPECTED_LANG", appCode: lang.appCode });
    }
    if (lang.pilots?.length !== GERMAN_PILOTS.length) {
      blockers.push({ code: "PILOT_COUNT", appCode: lang.appCode, got: lang.pilots?.length });
    }
    for (const p of lang.pilots || []) {
      const exp = expectedTarget(lang.appCode, p.pilotId);
      if (exp && p.expectedTargetPilot !== exp) {
        blockers.push({ code: "WRONG_EXPECTED_PILOT", appCode: lang.appCode, pilotId: p.pilotId });
      }
      for (const tier of ["primary", "additional", "bilingual"]) {
        const rec = p[tier];
        if (!rec) continue;
        if (rec.entryFound === "YES" && rec.accessResult === "TRANSLATION_PAIR_VERIFIED") {
          if (!rec.entryUrl || isHomepageUrl(rec.entryUrl)) {
            blockers.push({ code: "HOMEPAGE_PASS", appCode: lang.appCode, tier, pilotId: p.pilotId });
          }
          if (!rec.evidenceFragment || rec.evidenceFragment.length < 25) {
            blockers.push({ code: "WEAK_EVIDENCE", appCode: lang.appCode, tier, pilotId: p.pilotId });
          }
        }
        if (
          rec.accessResult === "TRANSLATION_PAIR_VERIFIED" &&
          rec.checksTranslationPair === false &&
          !p.de?.entryFound
        ) {
          blockers.push({ code: "MONOLINGUAL_PAIR_CLAIM", appCode: lang.appCode, pilotId: p.pilotId, tier });
        }
      }
      if (p.final?.accessResult === "TRANSLATION_PAIR_VERIFIED") {
        if (!p.final.entryUrl || isHomepageUrl(p.final.entryUrl)) {
          blockers.push({ code: "FINAL_HOMEPAGE", appCode: lang.appCode, pilotId: p.pilotId });
        }
      }
    }
  }

  for (const code of TARGET_APP_CODES) {
    if (!seenLang.has(code)) blockers.push({ code: "MISSING_LANG", appCode: code });
  }

  const prodDiff = execSync("git diff --name-only -- data www/data crowdin", { cwd: ROOT, encoding: "utf8" }).trim();
  if (prodDiff) blockers.push({ code: "PRODUCTION_DIRTY", files: prodDiff.split("\n") });

  const pass = blockers.length === 0;
  const out = {
    pass,
    blockers,
    classification: data.classification,
    nextAction: data.nextAction,
    metrics: data.metrics,
    fullA1AuditRan: false,
    productionChanges: prodDiff ? prodDiff.split("\n").length : 0,
  };
  console.log(JSON.stringify(out, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
