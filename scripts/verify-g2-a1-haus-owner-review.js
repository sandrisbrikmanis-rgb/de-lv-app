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
const {
  LEXICAL_FINDING_LANGS,
  PREAUTHORIZED_CAP_ROWS,
  isPreauthorizedCapitalizationOwnerRow,
  assertPreauthorizedOwnerRow,
} = require("./lib/g2-a1-production-current/haus-preauthorized-capitalization");
const {
  OWNER_LEXICAL_APPLY_ROWS,
  expectedLexicalFiles,
  readLexicalClosure,
  isLexicalOwnerLabotRow,
  assertLexicalOwnerRow,
} = require("./lib/g2-a1-production-current/haus-owner-lexical-apply");
const { productionA1Rel, wwwA1Rel } = require("./lib/g2-a1-production-current/paths");
const { loadG2Level } = require("./lib/content-crowdin-bridge/roundtrip");

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

  const preauthExpected = PREAUTHORIZED_CAP_ROWS.length;
  if (manifest?.ownerPreauthorization?.capitalizationRows !== preauthExpected) {
    blockers.push({
      code: "MANIFEST_PREAUTH_COUNT",
      got: manifest?.ownerPreauthorization?.capitalizationRows,
    });
  }

  for (const d of decisionRows) {
    const isLexical = LEXICAL_FINDING_LANGS.includes(d.language);
    const isPreauth = PREAUTHORIZED_CAP_ROWS.some((s) => s.language === d.language);

    if (isLexical) {
      if (ownerFieldsAreEmpty(d)) {
        blockers.push({ code: "LEXICAL_OWNER_MUST_BE_FILLED", language: d.language });
      } else if (!isLexicalOwnerLabotRow(d)) {
        blockers.push({ code: "LEXICAL_OWNER_ROW_INVALID", language: d.language });
      } else {
        assertLexicalOwnerRow(d, blockers);
      }
      if (String(d.OWNER_NEW) !== String(d.AUDIT_PROPOSED_NEW)) {
        blockers.push({ code: "LEXICAL_OWNER_NEW_MUST_MATCH_AUDIT", language: d.language });
      }
    } else if (isPreauth) {
      if (!isPreauthorizedCapitalizationOwnerRow(d)) {
        blockers.push({ code: "PREAUTH_OWNER_ROW_INVALID", language: d.language });
      } else {
        assertPreauthorizedOwnerRow(d, blockers);
      }
      if (String(d.AUDIT_PROPOSED_NEW) !== String(d.OWNER_NEW)) {
        blockers.push({ code: "PREAUTH_OWNER_NEW_MUST_MATCH_AUDIT", language: d.language });
      }
    } else if (!ownerFieldsAreEmpty(d)) {
      blockers.push({ code: "UNAUTHORIZED_OWNER_FIELD_POPULATION", language: d.language });
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
  const productionApply = manifest?.productionApply === true;
  const allowedProduction = new Set();
  for (const spec of PREAUTHORIZED_CAP_ROWS) {
    allowedProduction.add(productionA1Rel(spec.language));
    allowedProduction.add(wwwA1Rel(spec.language));
  }
  const lexicalClosure = readLexicalClosure();
  const lexicalApplied = lexicalClosure?.pass === true;
  if (lexicalApplied) {
    for (const f of expectedLexicalFiles()) allowedProduction.add(f);
  }
  if (productionApply) {
    if (!prod.pass) {
      for (const f of prod.diff) {
        if (!allowedProduction.has(f)) {
          blockers.push({ code: "UNAUTHORIZED_PRODUCTION_DIFF", file: f });
        }
      }
    }
    for (const spec of PREAUTHORIZED_CAP_ROWS) {
      const card = loadG2Level(spec.language, "a1")[spec.cardIndex];
      if (!card || card.lv !== spec.proposed) {
        blockers.push({ code: "POST_APPLY_LV", language: spec.language, got: card?.lv });
      }
    }
  } else if (!prod.pass) {
    if (lexicalApplied) {
      for (const f of prod.diff) {
        if (!allowedProduction.has(f)) {
          blockers.push({ code: "UNAUTHORIZED_PRODUCTION_DIFF", file: f });
        }
      }
      for (const spec of OWNER_LEXICAL_APPLY_ROWS) {
        const card = loadG2Level(spec.language, "a1")[spec.cardIndex];
        if (!card || card.lv !== spec.proposed) {
          blockers.push({ code: "LEXICAL_POST_APPLY_LV", language: spec.language, got: card?.lv });
        }
      }
    } else {
      blockers.push({ code: "PRODUCTION_DIRTY", files: prod.diff });
    }
  }

  const deDiff = execSync("git diff --name-only -- data/de", { cwd: ROOT, encoding: "utf8" }).trim();
  if (deDiff) blockers.push({ code: "DE_DIRTY", files: deDiff.split("\n") });

  const crowdinDiff = execSync("git diff --name-only -- crowdin", { cwd: ROOT, encoding: "utf8" }).trim();
  if (crowdinDiff) blockers.push({ code: "CROWDIN_DIRTY", files: crowdinDiff.split("\n") });

  const preauthLabot = decisionRows.filter((d) => isPreauthorizedCapitalizationOwnerRow(d)).length;
  const lexicalLabot = decisionRows.filter((d) => isLexicalOwnerLabotRow(d)).length;
  const classification =
    blockers.length === 0
      ? manifest?.classification || "G2_A1_HAUS_PREAUTHORIZED_CAPITALIZATION_OWNER_PACKAGE"
      : "G2_A1_HAUS_OWNER_PACKAGE_CORRECTION_BLOCKED";

  const payload = {
    generatedAt: new Date().toISOString(),
    pass: blockers.length === 0,
    gates: {
      auditCounts: CURRENT_PILOT_COUNTS,
      ownerPreauthorizedCapitalizationOnly: preauthLabot,
      ownerIndividualLabot: lexicalLabot,
      ownerPendingFindings: 0,
      nsrRemaining: nsrRows.length,
      ownerLabot: preauthLabot + lexicalLabot,
      ownerNelabot: 0,
      ownerPending: 0,
      findingDecisionRows: decisionRows.length,
      nsrRows: nsrRows.length,
      passEvidenceRows: passRows.length,
      lexicalOwnerFilled: LEXICAL_FINDING_LANGS.every((lang) => {
        const d = decisionRows.find((r) => r.language === lang);
        return d && isLexicalOwnerLabotRow(d);
      }),
      productionChanges: prod.pass ? 0 : prod.diff.length,
      productionApply,
      lexicalProductionApply: lexicalApplied,
      fullAuditRun: 0,
    },
    blockers,
    classification,
    nextAction:
      blockers.length === 0
        ? manifest?.nextAction || "RESOLVE_18_REMAINING_HAUS_SOURCE_BLOCKERS"
        : "REMOVE_UNAUTHORIZED_OWNER_DECISIONS_AND_FIX_EXACT_DATA_ERRORS",
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, "haus-owner-review-verification.json"), `${JSON.stringify(payload, null, 2)}\n`);

  console.log(JSON.stringify(payload, null, 2));
  process.exit(payload.pass ? 0 : 1);
}

main();
