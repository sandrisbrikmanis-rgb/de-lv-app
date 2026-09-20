#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { isHomepageUrl } = require("./lib/g2-a1-production-current/source-adapters/create-config-adapter");
const {
  evaluateDictionaryCapitalization,
  extractNormativeLemma,
} = require("./lib/master-capitalization-rule-verify");

const DIR = path.join(ROOT, "reports/g2-a1-production-current/haus-32-language-source-pilot");
const OWNER_DIR = path.join(ROOT, "reports/g2-a1-production-current/haus-owner-review");
const { PREAUTHORIZED_CAP_ROWS } = require("./lib/g2-a1-production-current/haus-preauthorized-capitalization");
const { productionA1Rel, wwwA1Rel } = require("./lib/g2-a1-production-current/paths");

const HAUS_CAPITALIZATION_REGRESSION = [
  {
    language: "en",
    currentTarget: "House",
    authorityLemma: "house",
    proposedTarget: "house",
  },
  {
    language: "da",
    currentTarget: "Hus",
    authorityLemma: "hus",
    proposedTarget: "hus",
  },
  {
    language: "tr",
    currentTarget: "Ev",
    authorityLemma: "ev",
    proposedTarget: "ev",
  },
  {
    language: "gr",
    currentTarget: "Σπίτι",
    authorityLemma: "σπίτι",
    proposedTarget: "σπίτι",
  },
  {
    language: "ru",
    currentTarget: "Дом",
    authorityLemma: "дом",
    proposedTarget: "дом",
  },
  {
    language: "cs",
    currentTarget: "Dům",
    authorityLemma: "dům",
    proposedTarget: "dům",
  },
];

function productionDiffClean() {
  const diff = execSync("git diff --name-only -- data www/data crowdin/content crowdin/ui", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  return { pass: !diff, diff: diff ? diff.split("\n") : [] };
}

function assertRegressionRow(rows, spec, blockers) {
  const matches = rows.filter((r) => r.language === spec.language);
  if (matches.length !== 1) {
    blockers.push({ code: "HAUS_REGRESSION_LANG_COUNT", language: spec.language, got: matches.length });
    return;
  }
  const r = matches[0];
  const lemma = extractNormativeLemma(r.targetHeadword, r.targetMeaningFragment);
  if (r.currentTarget !== spec.currentTarget) {
    blockers.push({ code: "HAUS_REGRESSION_CURRENT", language: spec.language, got: r.currentTarget });
  }
  if (lemma !== spec.authorityLemma) {
    blockers.push({ code: "HAUS_REGRESSION_LEMMA", language: spec.language, got: lemma, headword: r.targetHeadword });
  }
  if (r.sourceAccessStatus !== "SOURCE_ENTRY_VALIDATED" || !r.evidenceSha256) {
    blockers.push({ code: "HAUS_REGRESSION_EVIDENCE", language: spec.language });
  }
  if (r.verdict !== "FINDING") {
    blockers.push({ code: "HAUS_REGRESSION_VERDICT_PASS", language: spec.language, got: r.verdict });
  }
  if (r.findingType !== "CAPITALIZATION_ERROR") {
    blockers.push({ code: "HAUS_REGRESSION_FINDING_TYPE", language: spec.language, got: r.findingType });
  }
  if (r.proposedTarget !== spec.proposedTarget) {
    blockers.push({ code: "HAUS_REGRESSION_PROPOSED", language: spec.language, got: r.proposedTarget });
  }
  if (r.capitalizationStatus !== "FAIL") {
    blockers.push({ code: "HAUS_REGRESSION_CAP_STATUS", language: spec.language, got: r.capitalizationStatus });
  }
  if (r.semanticMatchStatus !== "PASS") {
    blockers.push({ code: "HAUS_REGRESSION_SEMANTIC", language: spec.language, got: r.semanticMatchStatus });
  }
  if (r.ownerReviewRequired !== true) {
    blockers.push({ code: "HAUS_REGRESSION_OWNER", language: spec.language });
  }
}

function main() {
  const blockers = [];
  const invPath = path.join(DIR, "haus-production-current-inventory.json");
  const verdictPath = path.join(DIR, "haus-32-language-verdicts.json");
  const dePath = path.join(DIR, "haus-de-source-evidence.json");

  if (!fs.existsSync(invPath) || !fs.existsSync(verdictPath) || !fs.existsSync(dePath)) {
    blockers.push({ code: "MISSING_HAUS_PILOT_ARTIFACTS" });
  }

  let inventory = null;
  let verdicts = null;
  let de = null;

  if (fs.existsSync(invPath)) {
    inventory = JSON.parse(fs.readFileSync(invPath, "utf8"));
    if (inventory.targetLanguageCount !== 32) {
      blockers.push({ code: "LANGUAGE_COUNT", got: inventory.targetLanguageCount });
    }
    if (!inventory.allPresent || inventory.duplicateCount !== 0) {
      blockers.push({ code: "HAUS_CARD_INVENTORY", duplicates: inventory.duplicateCount });
    }
  }

  if (fs.existsSync(dePath)) {
    de = JSON.parse(fs.readFileSync(dePath, "utf8"));
    if (de.deOutcome !== "SOURCE_ENTRY_VALIDATED" || !de.deContentSha256) {
      blockers.push({ code: "DE_EVIDENCE_MISSING" });
    }
  }

  const hausExplicitRegressionGates = { total: HAUS_CAPITALIZATION_REGRESSION.length, passed: 0, failed: [] };

  if (fs.existsSync(verdictPath)) {
    verdicts = JSON.parse(fs.readFileSync(verdictPath, "utf8"));
    const rows = verdicts.rows || [];
    if (rows.length !== 32) blockers.push({ code: "VERDICT_ROW_COUNT", got: rows.length });
    const langs = rows.map((r) => r.language);
    if (new Set(langs).size !== langs.length) blockers.push({ code: "DUPLICATE_VERDICT_LANG" });

    const counts = { PASS: 0, FINDING: 0, NEEDS_SOURCE_REVIEW: 0, SOURCE_DE_ISSUE: 0 };
    for (const r of rows) {
      if (!(r.verdict in counts)) blockers.push({ code: "INVALID_VERDICT", language: r.language, verdict: r.verdict });
      else counts[r.verdict] += 1;

      if (r.verdict === "PASS") {
        if (!r.evidenceSha256 || !de?.deContentSha256) {
          blockers.push({ code: "PASS_WITHOUT_EVIDENCE", language: r.language });
        }
        if (!r.targetHeadword || !r.targetMeaningFragment) {
          blockers.push({ code: "PASS_EMPTY_TARGET_HEADWORD", language: r.language });
        }
        if (r.targetEntryUrl && isHomepageUrl(r.targetEntryUrl)) {
          blockers.push({ code: "PASS_HOMEPAGE_URL", language: r.language });
        }
      }

      if (r.verdict === "FINDING") {
        if (!r.evidenceSha256) blockers.push({ code: "FINDING_WITHOUT_TARGET_EVIDENCE", language: r.language });
        if (!r.currentTarget || !r.proposedTarget) {
          blockers.push({ code: "FINDING_INCOMPLETE", language: r.language });
        }
        if (
          r.sourceAccessStatus !== "SOURCE_ENTRY_VALIDATED" &&
          !["WRONG_TRANSLATION", "SEMANTIC_MISMATCH", "CORRUPTED_VALUE", "WRONG_LEMMA", "DIACRITIC_ERROR", "CAPITALIZATION_ERROR", "WRONG_LANGUAGE_OR_SCRIPT"].includes(
            r.findingType,
          )
        ) {
          blockers.push({ code: "FINDING_TECHNICAL_BLOCKER_AS_LINGUISTIC", language: r.language });
        }
      }

      if (r.sourceAccessStatus === "SOURCE_ENTRY_NOT_FOUND" && r.verdict === "FINDING") {
        blockers.push({ code: "TECHNICAL_ACCESS_AS_FINDING", language: r.language });
      }

      const hasValidatedTarget =
        r.sourceAccessStatus === "SOURCE_ENTRY_VALIDATED" && r.evidenceSha256 && r.targetHeadword;
      if (hasValidatedTarget) {
        const authorityLemma = extractNormativeLemma(r.targetHeadword, r.targetMeaningFragment);
        const cap = evaluateDictionaryCapitalization({
          fieldKind: "dictionary",
          current: r.currentTarget,
          authorityLemma,
        });
        if (cap.ok === false && cap.findingType === "CAPITALIZATION_ERROR") {
          if (r.verdict !== "FINDING" || r.findingType !== "CAPITALIZATION_ERROR") {
            blockers.push({
              code: "GENERAL_CAP_MUST_BE_FINDING",
              language: r.language,
              current: r.currentTarget,
              authorityLemma,
              gotVerdict: r.verdict,
            });
          } else if (r.proposedTarget !== cap.proposedTarget) {
            blockers.push({
              code: "GENERAL_CAP_PROPOSED_MISMATCH",
              language: r.language,
              expected: cap.proposedTarget,
              got: r.proposedTarget,
            });
          }
        }
        if (cap.ok === true && r.verdict === "PASS" && r.currentTarget !== authorityLemma) {
          blockers.push({ code: "PASS_CASE_MISMATCH", language: r.language, current: r.currentTarget, lemma: authorityLemma });
        }
      } else if (
        r.verdict === "FINDING" &&
        r.findingType === "CAPITALIZATION_ERROR" &&
        (!r.targetHeadword || !r.evidenceSha256)
      ) {
        blockers.push({ code: "CAP_FINDING_WITHOUT_LEMMA_EVIDENCE", language: r.language });
      }
    }

    for (const spec of HAUS_CAPITALIZATION_REGRESSION) {
      const before = blockers.length;
      assertRegressionRow(rows, spec, blockers);
      if (blockers.length === before) hausExplicitRegressionGates.passed += 1;
      else hausExplicitRegressionGates.failed.push(spec.language);
    }

    const ruRow = rows.find((r) => r.language === "ru");
    if (ruRow && /^dom$/i.test(String(ruRow.proposedTarget || ""))) {
      blockers.push({ code: "RU_LATIN_DOM_PROPOSED", got: ruRow.proposedTarget });
    }
    const csRow = rows.find((r) => r.language === "cs");
    if (csRow && csRow.currentTarget === "Dům" && csRow.proposedTarget === "dům" && csRow.verdict === "PASS") {
      blockers.push({ code: "CS_CAPITALIZATION_CANNOT_BE_PASS" });
    }

    const sum = counts.PASS + counts.FINDING + counts.NEEDS_SOURCE_REVIEW + counts.SOURCE_DE_ISSUE;
    if (sum !== 32) blockers.push({ code: "VERDICT_PARTITION", sum, counts });
  }

  const prod = productionDiffClean();
  const manifestPath = path.join(OWNER_DIR, "haus-owner-review-manifest.json");
  const ownerManifest = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, "utf8")) : null;
  const preauthApply = ownerManifest?.productionApply === true;
  const allowedProduction = new Set();
  for (const spec of PREAUTHORIZED_CAP_ROWS) {
    allowedProduction.add(productionA1Rel(spec.language));
    allowedProduction.add(wwwA1Rel(spec.language));
  }
  if (!prod.pass) {
    if (preauthApply) {
      for (const f of prod.diff) {
        if (!allowedProduction.has(f)) {
          blockers.push({ code: "UNAUTHORIZED_PRODUCTION_CHANGE", file: f });
        }
      }
    } else {
      blockers.push({ code: "PRODUCTION_CHANGE", files: prod.diff });
    }
  }

  const csvPath = path.join(DIR, "haus-owner-review.csv");
  if (fs.existsSync(csvPath)) {
    const stat = fs.statSync(csvPath);
    if (stat.size > 4 * 1024 * 1024) blockers.push({ code: "CSV_TOO_LARGE", bytes: stat.size });
  }

  const pass = blockers.length === 0 && verdicts?.rows?.length === 32;

  const gate = {
    pass,
    blockers,
    counts: verdicts?.counts || null,
    HAUS_EXPLICIT_REGRESSION_GATES: hausExplicitRegressionGates,
    classification: pass
      ? "G2_A1_HAUS_32_LANGUAGE_SOURCE_SUPPORTED_PILOT_COMPLETE_AWAITING_OWNER_REVIEW"
      : "G2_A1_HAUS_32_LANGUAGE_SOURCE_PILOT_BLOCKED",
    nextAction: pass ? "OWNER_REVIEW_HAUS_FINDINGS_AND_SOURCE_DECISIONS" : "RESOLVE_EXACT_PILOT_EVIDENCE_BLOCKERS",
    productionDiffClean: prod.pass,
    full95731AuditRan: false,
  };

  fs.writeFileSync(path.join(DIR, "haus-pilot-verification.json"), `${JSON.stringify(gate, null, 2)}\n`);
  console.log(JSON.stringify(gate, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
