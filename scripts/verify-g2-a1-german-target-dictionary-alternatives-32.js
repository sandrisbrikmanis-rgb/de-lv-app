#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { OUT_DIR } = require("./lib/g2-a1-production-current/german-target-dictionary-alternatives-32");
const { TARGET_APP_CODES } = require("./lib/g2-a1-production-current/german-target-dictionary-search-catalog");

const JSON_PATH = path.join(OUT_DIR, "german-target-dictionary-alternatives-32.json");

function main() {
  const blockers = [];
  for (const f of [
    "german-target-dictionary-alternatives-32.json",
    "german-target-dictionary-alternatives-32.md",
    "german-target-dictionary-alternatives-verification.json",
  ]) {
    if (!fs.existsSync(path.join(OUT_DIR, f))) blockers.push({ code: "MISSING_ARTIFACT", file: f });
  }
  if (!fs.existsSync(JSON_PATH)) {
    console.log(JSON.stringify({ pass: false, blockers }, null, 2));
    process.exit(1);
  }

  const data = JSON.parse(fs.readFileSync(JSON_PATH, "utf8"));
  const langs = data.languages || [];
  if (langs.length !== 32) blockers.push({ code: "LANG_COUNT", got: langs.length });
  for (const code of TARGET_APP_CODES) {
    if (!langs.some((l) => l.appCode === code)) blockers.push({ code: "MISSING_LANG", appCode: code });
  }

  for (const l of langs) {
    if (!l.alternativesRanked?.length) blockers.push({ code: "NO_ALTERNATIVES_PROBED", appCode: l.appCode });
    const probed = l.alternativesRanked.filter((a) => !a.skippedLivePilots);
    if (probed.length < 2 && l.appCode !== "et") {
      blockers.push({ code: "MIN_TWO_PROBED", appCode: l.appCode, got: probed.length });
    }
    if (l.usableAlternativeCount < 1) blockers.push({ code: "NO_USABLE_ALT", appCode: l.appCode });
    if (l.appCode === "gr" && l.standardCode !== "el") blockers.push({ code: "GR_EL", got: l.standardCode });
  }

  if (!data.constraints?.internetPriorityCatalogUsed) blockers.push({ code: "CATALOG_FLAG" });

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
