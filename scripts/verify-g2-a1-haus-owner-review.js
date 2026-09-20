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
} = require("./lib/g2-a1-production-current/haus-owner-review");
const { NSR_LANGUAGES } = require("./lib/g2-a1-production-current/haus-owner-review-execute");
const { isHomepageUrl } = require("./lib/g2-a1-production-current/source-adapters/create-config-adapter");
const { loadHausProductionInventory } = require("./lib/g2-a1-production-current/haus-32-language-source-pilot");

const ALLOWED_OWNER = new Set(["LABOT", "NELABOT", "NEEDS_SOURCE_REVIEW", "SOURCE_DE_ISSUE"]);

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
  const resolution = readJson("haus-source-resolution-summary.json");
  const verificationPath = path.join(OUT_DIR, "haus-owner-review-verification.json");

  const executed = Boolean(manifest?.executionAt);

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
  if (executed) {
    required.push(
      "haus-source-resolution-summary.json",
      "haus-source-resolution-summary.md",
      "haus-manual-evidence-required.csv",
      "haus-master-source-change-proposals.md",
      "haus-owner-review-execution.json",
    );
  }
  for (const f of required) {
    if (!fs.existsSync(path.join(OUT_DIR, f))) blockers.push({ code: "MISSING_ARTIFACT", file: f });
  }

  const pilotVerdicts = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, "reports/g2-a1-production-current/haus-32-language-source-pilot/haus-32-language-verdicts.json"),
      "utf8",
    ),
  );
  assertFindingIdentity(pilotVerdicts.rows, blockers);

  if (manifest?.baselineAtStart) {
    const b = manifest.baselineAtStart;
    if (b.FINDING !== 9 || b.NEEDS_SOURCE_REVIEW !== 19) {
      blockers.push({ code: "MANIFEST_BASELINE_MISMATCH", got: b });
    }
  }

  const findingRows = findings?.rows || [];
  const decisionRows = decisions?.rows || [];
  const nsrRows = nsr?.rows || [];
  const passRows = passEv?.rows || [];

  if (findingRows.length !== 9) blockers.push({ code: "FINDING_EVIDENCE_COUNT", got: findingRows.length });
  if (decisionRows.length !== 9) blockers.push({ code: "OWNER_DECISION_ROWS", got: decisionRows.length });

  if (executed) {
    const dc = manifest.ownerDecisionFinal || {};
    const sum = (dc.LABOT || 0) + (dc.NELABOT || 0) + (dc.NEEDS_SOURCE_REVIEW || 0) + (dc.SOURCE_DE_ISSUE || 0);
    if (sum !== 9) blockers.push({ code: "OWNER_DECISION_PARTITION", sum, dc });
    if (manifest.nsrAtStart !== 19) blockers.push({ code: "NSR_START_NOT_19" });
    const resolvedPlusUnresolved = (manifest.nsrResolved || 0) + (manifest.nsrUnresolved || 0);
    if (resolvedPlusUnresolved !== 19) {
      blockers.push({ code: "NSR_RESOLUTION_SUM", got: resolvedPlusUnresolved });
    }
    if (nsrRows.length !== manifest.nsrUnresolved) {
      blockers.push({ code: "NSR_UNRESOLVED_ROW_COUNT", expected: manifest.nsrUnresolved, got: nsrRows.length });
    }
  } else if (nsrRows.length !== 19) {
    blockers.push({ code: "NSR_ROWS", got: nsrRows.length });
  }

  const decisionLangs = new Set(decisionRows.map((d) => d.language));
  if (decisionLangs.size !== 9) blockers.push({ code: "DECISION_DUPLICATE_LANG" });

  for (const spec of FIXED_FINDING_IDENTITY) {
    if (!decisionLangs.has(spec.language)) blockers.push({ code: "MISSING_DECISION_LANG", language: spec.language });
  }

  for (const d of decisionRows) {
    if (!ALLOWED_OWNER.has(d.OWNER_STATUS)) {
      blockers.push({ code: "INVALID_OWNER_STATUS", language: d.language, status: d.OWNER_STATUS });
    }
    if (d.OWNER_STATUS === "LABOT") {
      if (d.OWNER_EVIDENCE_ACCEPTED !== "YES") blockers.push({ code: "LABOT_WITHOUT_EVIDENCE", language: d.language });
      if (!d.OWNER_NEW || !d.targetEntryUrl || isHomepageUrl(d.targetEntryUrl)) {
        blockers.push({ code: "LABOT_INVALID_NEW_OR_URL", language: d.language });
      }
      if (!d.OWNER_REVIEWED_AT) blockers.push({ code: "LABOT_MISSING_REVIEWED_AT", language: d.language });
    }
    if (d.OWNER_STATUS === "NELABOT" && d.OWNER_EVIDENCE_ACCEPTED !== "YES") {
      blockers.push({ code: "NELABOT_WITHOUT_EVIDENCE", language: d.language });
    }
    if (["NEEDS_SOURCE_REVIEW", "SOURCE_DE_ISSUE"].includes(d.OWNER_STATUS) && d.OWNER_NEW) {
      blockers.push({ code: "NSR_OR_DE_ISSUE_HAS_OWNER_NEW", language: d.language });
    }
    const key = `${d.language}|${d.productionFile || ""}|${d.cardId}|${d.fieldPath || ""}`;
    d._key = key;
  }
  const keys = decisionRows.map((d) => d._key);
  if (new Set(keys).size !== keys.length) blockers.push({ code: "DECISION_ROW_KEY_DUPLICATE" });

  for (const f of findingRows) {
    if (!f.deEvidenceSha256 || !f.targetEvidenceSha256) {
      blockers.push({ code: "FINDING_MISSING_EVIDENCE", language: f.language });
    }
    if (f.findingType === "CAPITALIZATION_ERROR" && f.proposedNew !== f.targetNormativeLemma) {
      blockers.push({ code: "CAP_PROPOSED_NE_LEMMA", language: f.language });
    }
  }

  if (executed && resolution) {
    for (const r of resolution.findingResults || []) {
      if (r.sourceValidated && (!r.targetEntryUrl || isHomepageUrl(r.targetEntryUrl))) {
        blockers.push({ code: "HOMEPAGE_EVIDENCE", language: r.language });
      }
    }
  }

  for (const n of nsrRows) {
    if (n.approvedProposedNew) blockers.push({ code: "NSR_APPROVED_NEW", language: n.language });
  }

  const nsrLangSet = new Set(nsrRows.map((n) => n.language));
  for (const lang of NSR_LANGUAGES) {
    if (executed && manifest.nsrUnresolved > 0) {
      const inUnresolved = resolution?.nsrResults?.find((r) => r.language === lang && !r.resolved);
      if (inUnresolved && !nsrLangSet.has(lang)) {
        blockers.push({ code: "NSR_LANG_MISSING_FROM_TABLE", language: lang });
      }
    }
  }

  const inv = loadHausProductionInventory();
  if (inv.rows.length !== 32) blockers.push({ code: "INVENTORY_NOT_32" });

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

  const classification =
    blockers.length === 0
      ? manifest?.classification || "G2_A1_HAUS_OWNER_REVIEW_PACKAGE_READY"
      : "G2_A1_HAUS_OWNER_REVIEW_BLOCKED";

  const payload = {
    generatedAt: new Date().toISOString(),
    pass: blockers.length === 0,
    executed,
    gates: {
      baselineFinding: 9,
      baselineNsr: 19,
      ownerDecisionRows: decisionRows.length,
      ownerDecisionFinal: manifest?.ownerDecisionFinal,
      nsrUnresolvedRows: nsrRows.length,
      nsrResolved: manifest?.nsrResolved,
      passEvidenceRows: passRows.length,
      productionChanges: prod.pass ? 0 : prod.diff.length,
      deChanges: deDiff ? deDiff.split("\n").length : 0,
      crowdinChanges: crowdinDiff ? crowdinDiff.split("\n").length : 0,
      fullAuditRun: manifest?.full95731FieldAuditRun === false ? 0 : 1,
      FULL_LINGUISTIC_AUDITS_EXECUTED: manifest?.FULL_LINGUISTIC_AUDITS_EXECUTED ?? 0,
    },
    blockers,
    classification,
    nextAction: manifest?.nextAction || "RESOLVE_EXACT_EVIDENCE_OR_IDENTITY_BLOCKER",
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(verificationPath, `${JSON.stringify(payload, null, 2)}\n`);

  console.log(JSON.stringify(payload, null, 2));
  process.exit(payload.pass ? 0 : 1);
}

main();
