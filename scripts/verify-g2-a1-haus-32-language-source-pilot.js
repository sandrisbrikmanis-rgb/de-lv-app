#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { isHomepageUrl } = require("./lib/g2-a1-production-current/source-adapters/create-config-adapter");

const DIR = path.join(ROOT, "reports/g2-a1-production-current/haus-32-language-source-pilot");

function productionDiffClean() {
  const diff = execSync("git diff --name-only -- data www/data crowdin/content crowdin/ui", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  return { pass: !diff, diff: diff ? diff.split("\n") : [] };
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
        if (!r.evidenceSha256 || !de?.deContentSha256) blockers.push({ code: "PASS_WITHOUT_EVIDENCE", language: r.language });
        if (r.targetEntryUrl && isHomepageUrl(r.targetEntryUrl)) {
          blockers.push({ code: "PASS_HOMEPAGE_URL", language: r.language });
        }
      }
      if (r.verdict === "FINDING") {
        if (!r.evidenceSha256) blockers.push({ code: "FINDING_WITHOUT_TARGET_EVIDENCE", language: r.language });
        if (!r.currentTarget || !r.proposedTarget) {
          blockers.push({ code: "FINDING_INCOMPLETE", language: r.language });
        }
      }
    }
    const sum = counts.PASS + counts.FINDING + counts.NEEDS_SOURCE_REVIEW + counts.SOURCE_DE_ISSUE;
    if (sum !== 32) blockers.push({ code: "VERDICT_PARTITION", sum, counts });
  }

  const prod = productionDiffClean();
  if (!prod.pass) blockers.push({ code: "PRODUCTION_CHANGE", files: prod.diff });

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
