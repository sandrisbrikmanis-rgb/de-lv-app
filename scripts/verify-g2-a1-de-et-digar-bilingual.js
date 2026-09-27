#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const MANIFEST = require("./lib/data/german-target-dictionary-de-et-used-sources.json");
const {
  lookupDigarDeEtBilingual,
  BILINGUAL_ENTRY_FOUND,
  NOT_FOUND_IN_DICTIONARY,
} = require("./lib/g2-a1-production-current/digar-de-et-bilingual-lookup");

const OUT_DIR = path.join(
  ROOT,
  "reports/g2-a1-production-current/german-target-dictionary-de-et-used-sources",
);
const REPORT_JSON = path.join(OUT_DIR, "german-target-dictionary-de-et-used-sources.json");
const REPORT_MD = path.join(OUT_DIR, "german-target-dictionary-de-et-used-sources.md");
const VERIFICATION_JSON = path.join(OUT_DIR, "german-target-dictionary-de-et-used-sources-verification.json");

const EXPECT_FOUND = ["Machtgier", "Kleingeld", "glotzen", "bewirten"];
const EXPECT_ABSENT = ["Goldader", "Grenzkonflikt"];

async function main() {
  const blockers = [];

  if (!fs.existsSync(REPORT_JSON)) blockers.push({ code: "MISSING_USED_SOURCES_JSON", path: REPORT_JSON });
  if (!fs.existsSync(REPORT_MD)) blockers.push({ code: "MISSING_USED_SOURCES_MD", path: REPORT_MD });

  const prodDiff = execSync("git diff --name-only -- data www/data crowdin", { cwd: ROOT, encoding: "utf8" }).trim();
  if (prodDiff) blockers.push({ code: "PRODUCTION_DIRTY", files: prodDiff.split("\n") });

  const liveChecks = [];
  for (const lemma of [...EXPECT_FOUND, ...EXPECT_ABSENT]) {
    // eslint-disable-next-line no-await-in-loop
    const r = await lookupDigarDeEtBilingual(lemma);
    const expected = MANIFEST.verifiedEntries[lemma];
    if (!expected) {
      blockers.push({ code: "MANIFEST_MISSING_LEMMA", lemma });
      continue;
    }
    if (EXPECT_FOUND.includes(lemma)) {
      if (r.lookupStatus !== BILINGUAL_ENTRY_FOUND) {
        blockers.push({ code: "LIVE_LOOKUP_NOT_FOUND", lemma, got: r.lookupStatus });
      }
      if (JSON.stringify(r.targetTranslations) !== JSON.stringify(expected.targetTranslations)) {
        blockers.push({
          code: "GLOSS_MISMATCH",
          lemma,
          expected: expected.targetTranslations,
          got: r.targetTranslations,
        });
      }
    } else if (r.lookupStatus !== NOT_FOUND_IN_DICTIONARY) {
      blockers.push({ code: "LIVE_LOOKUP_UNEXPECTED_HIT", lemma, got: r.lookupStatus });
    }
    liveChecks.push({ lemma, lookupStatus: r.lookupStatus, ok: r.ok, page: r.page });
  }

  const etChain = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, "scripts/lib/data/german-target-dictionary-rescan-6-candidates.json"),
      "utf8",
    ),
  ).languages.et;
  if (!etChain?.[0] || etChain[0].platform !== "digar-de-et") {
    blockers.push({ code: "ET_CHAIN_DIGAR_NOT_FIRST", first: etChain?.[0]?.id });
  }

  const pass = blockers.length === 0;
  const out = {
    pass,
    blockers,
    liveChecks,
    manifestSchema: MANIFEST.schemaVersion,
    productionChanges: prodDiff ? prodDiff.split("\n").filter(Boolean).length : 0,
  };
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(VERIFICATION_JSON, `${JSON.stringify(out, null, 2)}\n`);
  console.log(JSON.stringify(out, null, 2));
  process.exit(pass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
