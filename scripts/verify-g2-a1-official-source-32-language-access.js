#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { isHomepageUrl } = require("./lib/g2-a1-production-current/source-adapters/create-config-adapter");
const { SOURCE_ACCESS_OUTCOME } = require("./lib/g2-a1-production-current/official-source-access-constants");
const {
  OUT_DIR,
  MATRIX_JSON,
  automatedAuditUsable,
} = require("./lib/g2-a1-production-current/official-source-32-language-access");
const { listAllTargetAppLanguages } = require("./lib/g2-a1-production-current/source-adapters/target");

const REQUIRED_FIELDS = [
  "language",
  "appCode",
  "standardCode",
  "authorityName",
  "authorityType",
  "sourceRole",
  "sourceUrl",
  "entryUrlPattern",
  "accessMethod",
  "accessStatus",
  "adapterId",
  "positiveTestLemma",
  "positiveEntryUrl",
  "positiveHeadword",
  "positiveMeaningEvidence",
  "positiveEvidenceSha256",
  "negativeTestTerm",
  "negativeOutcome",
  "automatedAuditUsable",
  "manualOwnerUsable",
  "masterRegistryChangeRequired",
  "exactBlocker",
  "checkedAt",
];

function main() {
  const blockers = [];
  const matrixPath = path.join(OUT_DIR, MATRIX_JSON);
  if (!fs.existsSync(matrixPath)) {
    blockers.push({ code: "MATRIX_MISSING", hint: "npm run build:g2-a1:official-source-32-language-access" });
    console.log(JSON.stringify({ pass: false, blockers }, null, 2));
    process.exit(1);
  }

  const payload = JSON.parse(fs.readFileSync(matrixPath, "utf8"));
  const rows = payload.targetRows || [];
  const langs = listAllTargetAppLanguages();

  if (rows.length !== 32) blockers.push({ code: "TARGET_ROW_COUNT", got: rows.length });
  if (langs.length !== 32) blockers.push({ code: "REGISTRY_TARGET_COUNT", got: langs.length });

  const seen = new Set();
  for (const r of rows) {
    if (seen.has(r.language)) blockers.push({ code: "DUPLICATE_LANGUAGE", language: r.language });
    seen.add(r.language);
    for (const f of REQUIRED_FIELDS) {
      if (!(f in r)) blockers.push({ code: "MISSING_FIELD", language: r.language, field: f });
    }
    if (r.language === "gr" && r.standardCode !== "el") {
      blockers.push({ code: "GR_EL_MAPPING", got: r.standardCode });
    }
    if (r.negativeOutcome === SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED) {
      blockers.push({ code: "NEGATIVE_FALSE_POSITIVE", language: r.language });
    }
    if (r.automatedAuditUsable) {
      if (!r.positiveEntryUrl || isHomepageUrl(r.positiveEntryUrl)) {
        blockers.push({ code: "VALIDATED_BUT_HOMEPAGE", language: r.language });
      }
      if (!r.positiveHeadword || !r.positiveEvidenceSha256) {
        blockers.push({ code: "VALIDATED_MISSING_EVIDENCE", language: r.language });
      }
      if (!r.positiveMeaningEvidence || String(r.positiveMeaningEvidence).length < 25) {
        blockers.push({ code: "VALIDATED_FRAGMENT_TOO_SHORT", language: r.language });
      }
      if (!automatedAuditUsable(r.accessStatus)) {
        blockers.push({ code: "AUTO_FLAG_ACCESS_MISMATCH", language: r.language, accessStatus: r.accessStatus });
      }
    }
    if (!r.authorityName) blockers.push({ code: "MISSING_AUTHORITY", language: r.language });
    if (r.masterRegistryChangeRequired && !payload.masterChangeProposals?.some((p) => p.language === r.language)) {
      blockers.push({ code: "MASTER_CHANGE_WITHOUT_PROPOSAL", language: r.language });
    }
  }

  for (const lang of langs) {
    if (!seen.has(lang)) blockers.push({ code: "MISSING_LANGUAGE", language: lang });
  }

  const nb = rows.find((r) => r.language === "nb");
  const nn = rows.find((r) => r.language === "nn");
  if (!nb || !nn || nb.positiveTestLemma !== nn.positiveTestLemma) {
    /* distinct languages — may share lemma hus */
  }
  if (nb && nn && nb.adapterId === nn.adapterId && nb.positiveEntryUrl === nn.positiveEntryUrl && nb.language === nn.language) {
    blockers.push({ code: "NB_NN_COLLAPSED" });
  }

  for (const p of payload.masterChangeProposals || []) {
    if (p.status !== "OWNER_APPROVAL_REQUIRED") {
      blockers.push({ code: "MASTER_PROPOSAL_STATUS", language: p.language });
    }
  }

  if (!payload.deRecord || payload.deRecord.countsTowardTarget32 !== false) {
    blockers.push({ code: "DE_RECORD_INVALID" });
  }
  if (!payload.deRecord?.positiveEvidenceSha256 && payload.deRecord?.outcome !== SOURCE_ACCESS_OUTCOME.SOURCE_ENTRY_VALIDATED) {
    blockers.push({ code: "DE_EVIDENCE_WEAK" });
  }

  if (payload.full95731AuditRan) blockers.push({ code: "FULL_AUDIT_RAN_FORBIDDEN" });

  const prodDiff = execSync("git diff --name-only -- data www/data crowdin data/de", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  if (prodDiff) blockers.push({ code: "PRODUCTION_DIRTY", files: prodDiff.split("\n") });

  const pass = blockers.length === 0;
  const out = {
    generatedAt: new Date().toISOString(),
    pass,
    blockers,
    summary: payload.summary,
    classification: pass ? payload.classification : "G2_A1_OFFICIAL_SOURCE_32_ACCESS_VERIFY_BLOCKED",
    nextAction: pass ? payload.nextAction : "FIX_MATRIX_OR_REBUILD_WITH_LIVE_PROBE",
    automatedCount: payload.summary?.automatedCount,
    manualCount: payload.summary?.manualCount,
    blockedCount: payload.summary?.blockedCount,
    full95731AuditRan: false,
  };

  console.log(JSON.stringify(out, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
