#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  OUT_DIR,
  FIXED_FINDING_IDENTITY,
  assertBaselineCounts,
  assertFindingIdentity,
} = require("./lib/g2-a1-production-current/haus-owner-review");
const { extractNormativeLemma } = require("./lib/master-capitalization-rule-verify");
const { loadHausProductionInventory } = require("./lib/g2-a1-production-current/haus-32-language-source-pilot");

function readJson(rel) {
  const p = path.join(OUT_DIR, rel);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function productionDiffClean() {
  const diff = execSync("git diff --name-only -- data www/data crowdin/content crowdin/ui", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  return { pass: !diff, diff: diff ? diff.split("\n") : [] };
}

function main() {
  const blockers = [];
  const manifest = readJson("haus-owner-review-manifest.json");
  const findings = readJson("haus-findings-evidence.json");
  const decisions = readJson("haus-owner-decisions.json");
  const nsr = readJson("haus-needs-source-review.json");
  const passEv = readJson("haus-pass-evidence.json");
  const verificationPath = path.join(OUT_DIR, "haus-owner-review-verification.json");

  const required = [
    "haus-owner-view.md",
    "haus-owner-decisions.csv",
    "haus-owner-decisions.json",
    "haus-findings-evidence.json",
    "haus-findings-full-cards.json",
    "haus-needs-source-review.md",
    "haus-needs-source-review.json",
    "haus-pass-evidence.json",
    "haus-owner-review-manifest.json",
    "README.md",
  ];
  for (const f of required) {
    if (!fs.existsSync(path.join(OUT_DIR, f))) blockers.push({ code: "MISSING_ARTIFACT", file: f });
  }

  const csvPath = path.join(OUT_DIR, "haus-owner-decisions.csv");
  if (fs.existsSync(csvPath)) {
    const stat = fs.statSync(csvPath);
    if (stat.size >= 4 * 1024 * 1024) blockers.push({ code: "CSV_TOO_LARGE", bytes: stat.size });
  }

  const pilotVerdicts = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, "reports/g2-a1-production-current/haus-32-language-source-pilot/haus-32-language-verdicts.json"),
      "utf8",
    ),
  );
  assertBaselineCounts(pilotVerdicts.counts, blockers);
  assertFindingIdentity(pilotVerdicts.rows, blockers);

  if (manifest) {
    if (manifest.full95731FieldAuditRun !== false) blockers.push({ code: "FULL_AUDIT_RUN_NOT_ZERO" });
    if (manifest.counts) assertBaselineCounts(manifest.counts, blockers);
  }

  const findingRows = findings?.rows || [];
  const decisionRows = decisions?.rows || [];
  const nsrRows = nsr?.rows || [];
  const passRows = passEv?.rows || [];

  if (findingRows.length !== 9) blockers.push({ code: "FINDING_EVIDENCE_COUNT", got: findingRows.length });
  if (decisionRows.length !== 9) blockers.push({ code: "OWNER_DECISION_ROWS", got: decisionRows.length });
  if (nsrRows.length !== 19) blockers.push({ code: "NSR_ROWS", got: nsrRows.length });
  if (passRows.length !== 4) blockers.push({ code: "PASS_EVIDENCE_ROWS", got: passRows.length });
  if (findingRows.length + nsrRows.length + passRows.length !== 32) {
    blockers.push({ code: "COVERAGE_SUM", got: findingRows.length + nsrRows.length + passRows.length });
  }

  for (const f of findingRows) {
    if (!f.deEvidenceSha256 || !f.targetEvidenceSha256) blockers.push({ code: "FINDING_MISSING_EVIDENCE", language: f.language });
    if (!f.targetCurrent) blockers.push({ code: "FINDING_MISSING_CURRENT", language: f.language });
    if (!f.proposedNew) blockers.push({ code: "FINDING_MISSING_PROPOSED", language: f.language });
    if (f.findingType === "CAPITALIZATION_ERROR" && !f.targetNormativeLemma) {
      blockers.push({ code: "CAP_FINDING_NO_LEMMA", language: f.language });
    }
  }

  let autoOwner = 0;
  for (const d of decisionRows) {
    if (d.OWNER_STATUS && String(d.OWNER_STATUS).trim()) autoOwner += 1;
  }
  if (autoOwner !== 0) blockers.push({ code: "OWNER_STATUS_AUTO_FILLED", count: autoOwner });

  for (const n of nsrRows) {
    if (n.approvedProposedNew) blockers.push({ code: "NSR_APPROVED_NEW", language: n.language });
  }

  const passLangs = new Set(passRows.map((p) => p.language));
  const expectedPass = ["et", "es", "lv", "sl"];
  for (const lang of expectedPass) {
    if (!passLangs.has(lang)) blockers.push({ code: "PASS_LANG_MISSING", language: lang });
  }
  for (const d of decisionRows) {
    if (passLangs.has(d.language)) blockers.push({ code: "PASS_IN_OWNER_DECISIONS", language: d.language });
  }

  const inv = loadHausProductionInventory();
  const langs = inv.rows.map((r) => r.language);
  const uniq = new Set(langs);
  if (uniq.size !== 32) blockers.push({ code: "DUPLICATE_LANGUAGES", count: uniq.size });
  if (langs.length !== 32) blockers.push({ code: "MISSING_LANGUAGES", count: langs.length });

  const prod = productionDiffClean();
  if (!prod.pass) blockers.push({ code: "PRODUCTION_DIRTY", files: prod.diff });

  const deDiff = execSync("git diff --name-only -- data/de", { cwd: ROOT, encoding: "utf8" }).trim();
  if (deDiff) blockers.push({ code: "DE_DIRTY", files: deDiff.split("\n") });

  const crowdinDiff = execSync("git diff --name-only -- crowdin", { cwd: ROOT, encoding: "utf8" }).trim();
  if (crowdinDiff) blockers.push({ code: "CROWDIN_DIRTY", files: crowdinDiff.split("\n") });

  for (const spec of FIXED_FINDING_IDENTITY) {
    const d = decisionRows.find((r) => r.language === spec.language);
    if (!d) continue;
    if (d.currentTarget !== spec.currentTarget || d.proposedNew !== spec.proposedTarget || d.findingType !== spec.findingType) {
      blockers.push({ code: "DECISION_IDENTITY_MISMATCH", language: spec.language });
    }
  }

  const capLangs = ["en", "da", "tr", "gr", "ru"];
  for (const lang of capLangs) {
    const f = findingRows.find((r) => r.language === lang);
    if (f && f.proposedNew !== f.targetNormativeLemma) {
      blockers.push({ code: "CAP_PROPOSED_NE_LEMMA", language: lang });
    }
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    pass: blockers.length === 0,
    gates: {
      TOTAL: 32,
      PASS: 4,
      FINDING: 9,
      NEEDS_SOURCE_REVIEW: 19,
      SOURCE_DE_ISSUE: 0,
      ownerDecisionRows: decisionRows.length,
      nsrRows: nsrRows.length,
      passEvidenceRows: passRows.length,
      findingWithoutDeEvidence: findingRows.filter((f) => !f.deEvidenceSha256).length,
      findingWithoutTargetEvidence: findingRows.filter((f) => !f.targetEvidenceSha256).length,
      ownerStatusAutoFilled: autoOwner,
      productionChanges: prod.pass ? 0 : prod.diff.length,
      deChanges: deDiff ? deDiff.split("\n").length : 0,
      crowdinChanges: crowdinDiff ? crowdinDiff.split("\n").length : 0,
      fullAuditRun: manifest?.full95731FieldAuditRun === false ? 0 : 1,
    },
    blockers,
    classification: blockers.length === 0 ? "G2_A1_HAUS_OWNER_REVIEW_PACKAGE_READY" : "G2_A1_HAUS_OWNER_REVIEW_PACKAGE_BLOCKED",
    nextAction:
      blockers.length === 0
        ? "OWNER_REVIEW_9_HAUS_FINDINGS_AND_19_SOURCE_BLOCKERS"
        : "RESOLVE_EXACT_OWNER_REVIEW_ARTIFACT_BLOCKER",
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(verificationPath, `${JSON.stringify(payload, null, 2)}\n`);

  console.log(JSON.stringify(payload, null, 2));
  process.exit(payload.pass ? 0 : 1);
}

main();
