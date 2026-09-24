#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { SOURCE_ACCESS_OUTCOME } = require("./lib/g2-a1-production-current/official-source-access-constants");
const { RESOLUTION_LANGUAGES } = require("./lib/g2-a1-production-current/official-source-resolution-catalog");
const { automatedAuditUsableForTier } = require("./lib/g2-a1-production-current/official-source-access-status");
const { isHomepageUrl } = require("./lib/g2-a1-production-current/source-adapters/create-config-adapter");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/official-source-18-language-resolution");

function main() {
  const blockers = [];
  const jsonPath = path.join(OUT_DIR, "official-source-18-language-resolution.json");
  const verifyPath = path.join(OUT_DIR, "official-source-resolution-verification.json");
  if (!fs.existsSync(jsonPath)) {
    blockers.push({ code: "RESOLUTION_JSON_MISSING", hint: "npm run build:g2-a1:official-source-18-language-resolution" });
  }
  if (!fs.existsSync(verifyPath)) blockers.push({ code: "VERIFICATION_JSON_MISSING" });

  const required = [
    "official-source-18-language-resolution.json",
    "official-source-18-language-resolution.md",
    "official-source-18-language-owner-proposals.csv",
    "official-source-18-language-owner-proposals.json",
    "official-source-bundles.json",
    "official-downloadable-datasets.json",
    "official-source-positive-negative-tests.json",
    "official-source-resolution-verification.json",
    "README.md",
  ];
  for (const f of required) {
    if (!fs.existsSync(path.join(OUT_DIR, f))) blockers.push({ code: "MISSING_ARTIFACT", file: f });
  }

  if (blockers.length) {
    console.log(JSON.stringify({ pass: false, blockers }, null, 2));
    process.exit(1);
  }

  const payload = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  const rows = payload.languageRows || [];
  if (rows.length !== 18) blockers.push({ code: "ROW_COUNT", got: rows.length });
  for (const lang of RESOLUTION_LANGUAGES) {
    if (!rows.find((r) => r.language === lang)) blockers.push({ code: "MISSING_LANGUAGE", language: lang });
  }

  for (const r of rows) {
    if (!r.officialStatusEvidence) blockers.push({ code: "MISSING_OFFICIAL_EVIDENCE", language: r.language });
    if (r.automatedAuditUsable) {
      const tier = r.sourceType || r.accessStatus;
      if (!automatedAuditUsableForTier(tier)) {
        blockers.push({ code: "TIER_AUTO_MISMATCH", language: r.language, tier });
      }
      if (!r.positiveEvidenceSha256) blockers.push({ code: "MISSING_SHA", language: r.language });
      if (isHomepageUrl(r.positiveEntryUrl)) blockers.push({ code: "HOMEPAGE_EVIDENCE", language: r.language });
      if (r.negativeOutcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED) {
        blockers.push({ code: "NEGATIVE_FALSE_POSITIVE", language: r.language });
      }
    }
    if (r.masterRegistryChangeRequired && r.ownerApprovalStatus !== "OWNER_APPROVAL_REQUIRED") {
      blockers.push({ code: "SILENT_MASTER_CHANGE", language: r.language });
    }
  }

  for (const p of payload.ownerProposals || []) {
    if (p.OWNER_STATUS !== "OWNER_APPROVAL_REQUIRED") {
      blockers.push({ code: "OWNER_STATUS", language: p.language });
    }
  }
  if (!payload.ownerProposals?.length && rows.some((r) => r.masterRegistryChangeRequired)) {
    blockers.push({ code: "MISSING_OWNER_PROPOSALS" });
  }

  if (payload.full95731AuditRan) blockers.push({ code: "FULL_AUDIT_RAN" });

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
        classification: payload.classification,
        nextAction: payload.nextAction,
        automatedReady: payload.summary?.automatedReady,
        freshLiveProbeAt: payload.freshLiveProbeAt,
        full95731AuditRan: false,
      },
      null,
      2,
    ),
  );
  process.exit(pass ? 0 : 1);
}

main();
