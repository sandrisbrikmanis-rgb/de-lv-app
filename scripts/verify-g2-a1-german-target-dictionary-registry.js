#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { GERMAN_TARGET_DICTIONARY_LANGUAGES, SOURCE_CLASS } = require("./lib/g2-a1-production-current/german-target-dictionary-candidates");
const { isHomepageUrl } = require("./lib/g2-a1-production-current/source-adapters/create-config-adapter");

const OUT = path.join(ROOT, "reports/g2-a1-production-current");

function main() {
  const blockers = [];
  const required = [
    "g2-a1-german-target-dictionary-registry.json",
    "g2-a1-german-target-dictionary-registry.md",
    "g2-a1-german-target-dictionary-validation.json",
    "g2-a1-german-target-dictionary-validation.md",
    "g2-a1-haus-14-language-bilingual-pilot.json",
    "g2-a1-haus-14-language-bilingual-pilot.csv",
    "g2-a1-source-bundle-policy-verification.json",
    "g2-a1-commercial-dictionary-editorial-provenance.json",
    "g2-a1-german-target-dictionary-master-owner-review.md",
  ];
  for (const f of required) {
    if (!fs.existsSync(path.join(OUT, f))) blockers.push({ code: "MISSING_ARTIFACT", file: f });
  }
  if (blockers.length) {
    console.log(JSON.stringify({ pass: false, blockers }, null, 2));
    process.exit(1);
  }

  const registry = JSON.parse(fs.readFileSync(path.join(OUT, "g2-a1-german-target-dictionary-registry.json"), "utf8"));
  const pilot = JSON.parse(fs.readFileSync(path.join(OUT, "g2-a1-haus-14-language-bilingual-pilot.json"), "utf8"));
  const rows = pilot.rows || [];
  const seen = new Set();
  if (rows.length !== 14) blockers.push({ code: "PILOT_COUNT", got: rows.length });
  for (const lang of GERMAN_TARGET_DICTIONARY_LANGUAGES) {
    if (!rows.find((r) => r.language === lang)) blockers.push({ code: "MISSING_LANGUAGE", language: lang });
  }
  for (const r of rows) {
    if (seen.has(r.language)) blockers.push({ code: "DUPLICATE", language: r.language });
    seen.add(r.language);
    if (!r.publisher) blockers.push({ code: "MISSING_PUBLISHER", language: r.language });
    if (!r.sourceClass) blockers.push({ code: "MISSING_CLASS", language: r.language });
    if (r.hausPilotPass) {
      if (!r.entryUrl || isHomepageUrl(r.entryUrl)) blockers.push({ code: "HOMEPAGE_EVIDENCE", language: r.language });
      if (!r.evidenceSha256 || String(r.evidenceFragment || "").length < 25) {
        blockers.push({ code: "WEAK_EVIDENCE", language: r.language });
      }
      if (r.sourceClass === SOURCE_CLASS.E && !r.bundleComplete && !r.supplementalTargetSource) {
        blockers.push({ code: "COMMUNITY_ALONE", language: r.language });
      }
      if (r.sourceClass === SOURCE_CLASS.F) blockers.push({ code: "MT_CLASS", language: r.language });
    }
    const frag = String(r.evidenceFragment || "");
    if (
      /Gebäude/i.test(frag) &&
      !/Wohnhaus|Wohn|dwelling|house|māja|kuća|maison|ház|hús|casa|namas|huis|dom|casă|hus|дім|къща/i.test(frag)
    ) {
      blockers.push({ code: "WRONG_DE_SENSE", language: r.language });
    }
  }

  const structured = JSON.parse(
    fs.readFileSync(path.join(ROOT, "scripts/lib/data/master-language-authority-sources-33.json"), "utf8"),
  );
  for (const lang of GERMAN_TARGET_DICTIONARY_LANGUAGES) {
    const row = structured.languages.find((l) => l.appCode === lang);
    if (!row?.GERMAN_TARGET_BILINGUAL_SOURCES?.length) {
      blockers.push({ code: "STRUCTURED_JSON_MISSING_BILINGUAL", language: lang });
    }
  }

  const prodDiff = execSync("git diff --name-only -- data www/data crowdin data/de", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  if (prodDiff) blockers.push({ code: "PRODUCTION_DIRTY", files: prodDiff.split("\n") });

  const pass = blockers.length === 0;
  console.log(
    JSON.stringify(
      {
        pass,
        blockers,
        classification: registry.classification,
        nextAction: registry.nextAction,
        readyCount: registry.summary?.readyCount,
        full95731AuditRan: false,
      },
      null,
      2,
    ),
  );
  process.exit(pass ? 0 : 1);
}

main();
