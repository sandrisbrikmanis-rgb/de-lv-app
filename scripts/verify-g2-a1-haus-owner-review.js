#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  OUT_DIR,
  FIXED_FINDING_IDENTITY,
  assertFindingIdentity,
  CURRENT_PILOT_COUNTS,
  FINDING_DECISION_LANG_ORDER,
} = require("./lib/g2-a1-production-current/haus-owner-review");
const {
  ownerFieldsAreEmpty,
  assertCsNotPassWhenCapitalizationMismatch,
  assertCurrentPilotCounts,
  evidenceUrlAcceptable,
  isLatinDom,
} = require("./lib/g2-a1-production-current/haus-owner-audit-separation");
const { isHomepageUrl } = require("./lib/g2-a1-production-current/source-adapters/create-config-adapter");
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
  const executionStub = readJson("haus-owner-review-execution.json");
  const auditProposals = readJson("haus-audit-evidence-proposals.json");

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
    "haus-audit-evidence-proposals.json",
    "haus-source-resolution-summary.json",
    "haus-source-resolution-summary.md",
    "haus-manual-evidence-required.csv",
    "haus-master-source-change-proposals.md",
    "haus-owner-review-execution.json",
    "README.md",
  ];
  for (const f of required) {
    if (!fs.existsSync(path.join(OUT_DIR, f))) blockers.push({ code: "MISSING_ARTIFACT", file: f });
  }

  if (executionStub && !executionStub.invalidated) {
    blockers.push({ code: "LEGACY_EXECUTION_NOT_INVALIDATED" });
  }

  const pilotVerdicts = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, "reports/g2-a1-production-current/haus-32-language-source-pilot/haus-32-language-verdicts.json"),
      "utf8",
    ),
  );
  assertCurrentPilotCounts(pilotVerdicts.counts, blockers);
  assertFindingIdentity(pilotVerdicts.rows, blockers);
  assertCsNotPassWhenCapitalizationMismatch(pilotVerdicts.rows, blockers);

  const findingRows = findings?.rows || [];
  const decisionRows = decisions?.rows || [];
  const nsrRows = nsr?.rows || [];
  const passRows = passEv?.rows || [];

  if (findingRows.length !== 10) blockers.push({ code: "FINDING_EVIDENCE_COUNT", got: findingRows.length });
  if (decisionRows.length !== 10) blockers.push({ code: "OWNER_DECISION_ROWS", got: decisionRows.length });
  if (nsrRows.length !== 18) blockers.push({ code: "NSR_ROWS", got: nsrRows.length });
  if (passRows.length !== 4) blockers.push({ code: "PASS_EVIDENCE_ROWS", got: passRows.length });
  if (findingRows.length + nsrRows.length + passRows.length !== 32) {
    blockers.push({ code: "COVERAGE_SUM", got: findingRows.length + nsrRows.length + passRows.length });
  }

  if (manifest?.ownerDecisionsFilled !== false) {
    blockers.push({ code: "MANIFEST_OWNER_DECISIONS_FILLED_TRUE" });
  }

  for (const d of decisionRows) {
    if (!ownerFieldsAreEmpty(d)) {
      blockers.push({ code: "UNAUTHORIZED_OWNER_FIELD_POPULATION", language: d.language, status: d.OWNER_STATUS });
    }
    if (d.OWNER_STATUS === "LABOT" || d.OWNER_EVIDENCE_ACCEPTED === "YES") {
      blockers.push({ code: "AUTO_OWNER_LABOT", language: d.language });
    }
    if (d.AUDIT_PROPOSED_NEW && String(d.AUDIT_PROPOSED_NEW) !== String(d.OWNER_NEW || "")) {
      if (d.OWNER_NEW) {
        blockers.push({ code: "AUDIT_PROPOSED_COPIED_TO_OWNER_NEW", language: d.language });
      }
    }
    if (d.language === "ru") {
      if (isLatinDom(d.AUDIT_PROPOSED_NEW) || isLatinDom(d.OWNER_NEW)) {
        blockers.push({ code: "RU_LATIN_DOM", language: "ru" });
      }
      if (!/\p{Script=Cyrillic}/u.test(String(d.AUDIT_PROPOSED_NEW || ""))) {
        blockers.push({ code: "RU_AUDIT_PROPOSED_NOT_CYRILLIC" });
      }
    }
    const urlCheck = evidenceUrlAcceptable(d.AUDIT_EVIDENCE_URL, {
      language: d.language,
      auditProposedNew: d.AUDIT_PROPOSED_NEW,
    });
    if (!urlCheck.ok) blockers.push({ code: "EVIDENCE_URL_REJECTED", language: d.language, reason: urlCheck.code });
    if (String(d.AUDIT_EVIDENCE_URL || "").includes("…") || String(d.AUDIT_EVIDENCE_URL || "").includes("...")) {
      blockers.push({ code: "EVIDENCE_URL_ELLIPSIS", language: d.language });
    }
    if (isHomepageUrl(d.AUDIT_EVIDENCE_URL)) {
      blockers.push({ code: "EVIDENCE_URL_HOMEPAGE", language: d.language });
    }
  }

  for (const spec of FIXED_FINDING_IDENTITY) {
    const d = decisionRows.find((r) => r.language === spec.language);
    if (!d) blockers.push({ code: "MISSING_DECISION_LANG", language: spec.language });
    else if (
      d.currentTarget !== spec.currentTarget ||
      d.AUDIT_PROPOSED_NEW !== spec.proposedTarget ||
      d.AUDIT_FINDING_TYPE !== spec.findingType
    ) {
      blockers.push({ code: "AUDIT_IDENTITY_MISMATCH", language: spec.language });
    }
  }

  const order = decisionRows.map((d) => d.language);
  if (JSON.stringify(order) !== JSON.stringify(FINDING_DECISION_LANG_ORDER)) {
    blockers.push({ code: "FINDING_ROW_ORDER" });
  }

  if (auditProposals?.invalidatedUnauthorizedOwnerPopulation !== true) {
    blockers.push({ code: "AUDIT_PROPOSALS_FLAG_MISSING" });
  }

  const inv = loadHausProductionInventory();
  if (inv.rows.length !== 32) blockers.push({ code: "INVENTORY_NOT_32" });

  const prod = productionDiffClean();
  if (!prod.pass) blockers.push({ code: "PRODUCTION_DIRTY", files: prod.diff });

  const deDiff = execSync("git diff --name-only -- data/de", { cwd: ROOT, encoding: "utf8" }).trim();
  if (deDiff) blockers.push({ code: "DE_DIRTY", files: deDiff.split("\n") });

  const crowdinDiff = execSync("git diff --name-only -- crowdin", { cwd: ROOT, encoding: "utf8" }).trim();
  if (crowdinDiff) blockers.push({ code: "CROWDIN_DIRTY", files: crowdinDiff.split("\n") });

  const classification =
    blockers.length === 0
      ? manifest?.classification || "G2_A1_HAUS_AUDIT_EVIDENCE_READY_FOR_OWNER_DECISION"
      : "G2_A1_HAUS_OWNER_PACKAGE_CORRECTION_BLOCKED";

  const payload = {
    generatedAt: new Date().toISOString(),
    pass: blockers.length === 0,
    gates: {
      auditCounts: CURRENT_PILOT_COUNTS,
      ownerLabot: 0,
      ownerNelabot: 0,
      ownerPending: 0,
      findingDecisionRows: decisionRows.length,
      nsrRows: nsrRows.length,
      passEvidenceRows: passRows.length,
      unauthorizedOwnerFields: decisionRows.filter((d) => !ownerFieldsAreEmpty(d)).length,
      productionChanges: prod.pass ? 0 : prod.diff.length,
      fullAuditRun: 0,
    },
    blockers,
    classification,
    nextAction:
      blockers.length === 0 ? "OWNER_REVIEW_10_HAUS_FINDINGS" : "REMOVE_UNAUTHORIZED_OWNER_DECISIONS_AND_FIX_EXACT_DATA_ERRORS",
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, "haus-owner-review-verification.json"), `${JSON.stringify(payload, null, 2)}\n`);

  console.log(JSON.stringify(payload, null, 2));
  process.exit(payload.pass ? 0 : 1);
}

main();
