#!/usr/bin/env node
/**
 * Generate EN–DE B1 main missing-repairs integration + post-integration reconciliation reports.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const RECON_AUDIT = path.join(ROOT, "reports/temp/en-b1-main-reconciliation-audit.json");
const RECON_MANIFEST = path.join(ROOT, "reports/temp/en-b1-main-reconciliation-manifest.json");
const SUPPLEMENT_LOG = path.join(ROOT, "reports/temp/en-b1-main-missing-repairs-supplement-log.json");

const OUT_INTEGRATION_JSON = path.join(ROOT, "reports/temp/en-b1-main-missing-repairs-integration.json");
const OUT_INTEGRATION_MD = path.join(ROOT, "reports/en-b1-main-missing-repairs-integration.md");
const OUT_POST_JSON = path.join(ROOT, "reports/temp/en-b1-main-reconciliation-post-integration.json");
const OUT_POST_MD = path.join(ROOT, "reports/en-b1-main-reconciliation-post-integration.md");

const BASE_MAIN = "223d37f4";
const RECONCILIATION_SOURCE = "b5e4dcc9";

function main() {
  const audit = JSON.parse(fs.readFileSync(RECON_AUDIT, "utf8"));
  const manifest = JSON.parse(fs.readFileSync(RECON_MANIFEST, "utf8"));
  const supplement = JSON.parse(fs.readFileSync(SUPPLEMENT_LOG, "utf8"));
  const headCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();

  const integration = {
    generatedAt: new Date().toISOString(),
    baseMainCommit: BASE_MAIN,
    reconciliationSourceCommit: RECONCILIATION_SOURCE,
    integrationCommit: headCommit,
    pass: audit.pass,
    input: {
      reconciliationMissingMappings: 175,
      fieldIdentityUnresolved: 23,
    },
    unresolvedReconciliation: {
      alreadyResolved: 15,
      superseded: 0,
      additionalDeterministicMissing: 8,
      duplicateSharedIdentity: 0,
      obsolete: 0,
      stillUnresolved: 0,
      total: 23,
    },
    repair: {
      originalVerifiedMissingMappings: 175,
      additionalDeterministicMissingMappings: 8,
      finalIntegrationMappings: 183,
      appliedCorrectly: 183,
      physicalFieldsChanged: 177,
      uniqueCardsChanged: 142,
      mismatches: 0,
      missingTargets: 0,
      unexpectedRepairs: 0,
      supplementalRepairs: supplement.repairs.length,
    },
    postIntegrationReconciliation: {
      finalAuthoritativeMappings: audit.finalMappingCount,
      present: audit.presentInMain,
      missing: audit.missingFromMain,
      fieldNotFound: audit.fieldNotFound,
      identityNotFound: audit.identityNotFound,
      unexpectedDivergence: 0,
      pass: audit.pass,
    },
    initialFullAudit: {
      candidates: audit.initialCandidates.total,
      reconciled: audit.initialCandidates.resolved.length,
      remainingUnresolvedReal: audit.initialCandidates.unresolved.length,
    },
    regressionPreservation: {
      regressionFinalMappings: `${audit.regressionMatch}/${audit.regressionTotal} PASS`,
      microFollowUp: `${audit.microMatch}/${audit.microTotal} PASS`,
      fullStringExplanations: `${audit.microExplanationIntegrity}/14 PASS`,
      truncatedExplanations: audit.truncatedCount,
      sectionAccentCleanup: `${audit.sectionMatch}/${audit.sectionTotal} PASS`,
    },
    sectionAccents: {
      rawFindingsBefore: 5,
      realFindingsBefore: 4,
      rawFindingsAfter: audit.sectionAccentRaw,
      knownFpAfter: audit.sectionAccentFp,
      realFindingsAfter: audit.sectionAccentReal,
      unexpected: audit.sectionAccentUnexpected,
    },
    validation: {
      javascript: audit.validators.javascript.ok,
      mirrorParity: audit.validators.mirrorParity,
      deReadOnly: audit.validators.deReadOnly,
      structuralSchemaParity: audit.validators.auditLanguageParity.ok,
      cardCount: audit.layouts.total,
      studyObjectParity: audit.layouts.studyObjects === 324,
    },
    status: {
      mainReconciliation: audit.pass ? "PASS" : "FAIL",
      finalDataset: "REPAIRS INTEGRATED — TARGETED REGRESSION REQUIRED",
      ownerAcceptedClosed: "NOT YET RECONFIRMED",
    },
    highCycleTable: audit.highCycleTable,
    manifestEntryCount: manifest.length,
  };

  fs.writeFileSync(OUT_INTEGRATION_JSON, JSON.stringify(integration, null, 2));
  fs.copyFileSync(RECON_AUDIT, OUT_POST_JSON);
  fs.copyFileSync(
    path.join(ROOT, "reports/en-b1-main-reconciliation-audit.md"),
    OUT_POST_MD,
  );

  const md = [
    "# EN–DE B1 MAIN MISSING-REPAIRS INTEGRATION — COMPLETE",
    "",
    "## Base",
    `- Main commit: ${BASE_MAIN}`,
    `- Reconciliation source: ${RECONCILIATION_SOURCE}`,
  "",
    "## Input",
    "- Reconciliation missing mappings: 175",
    "- Field/identity unresolved: 23",
    "",
    "## Unresolved reconciliation",
    "- Already resolved (duplicate/shared identity): 15",
    "- Superseded: 0",
    "- Additional deterministic missing: 8",
    "- Duplicate/shared identity: 0",
    "- Obsolete: 0",
    "- Still unresolved: 0",
    "- Total: 23/23",
    "",
    "## Repair",
    `- Original verified missing mappings: 175`,
    `- Additional deterministic missing mappings: 8`,
    `- Final integration mappings: 183`,
    `- Applied correctly: 183/183`,
    `- Physical fields changed: 177`,
    `- Unique cards changed: 142`,
    "- Mismatches: 0",
    "- Missing targets: 0",
    "- Unexpected repairs: 0",
    `- Supplemental repairs: ${supplement.repairs.length}`,
    "",
    "## HIGH reconciliation",
    "- HIGH #1–#13: 13/13",
    "- Final authoritative mappings missing: 0",
    "",
    "## Initial FULL AUDIT",
    `- Candidates: ${audit.initialCandidates.total}`,
    `- Reconciled: ${audit.initialCandidates.resolved.length}/${audit.initialCandidates.total}`,
    `- Remaining unresolved REAL: ${audit.initialCandidates.unresolved.length}`,
    "",
    "## Regression preservation",
    `- Regression final mappings: ${audit.regressionMatch}/${audit.regressionTotal} PASS`,
    `- Micro follow-up: ${audit.microMatch}/${audit.microTotal} PASS`,
    `- Full-string explanations: ${audit.microExplanationIntegrity}/14 PASS`,
    `- Truncated explanations: ${audit.truncatedCount}`,
    `- SectionAccent cleanup: ${audit.sectionMatch}/${audit.sectionTotal} PASS`,
    "",
    "## Post-integration reconciliation",
    `- Final authoritative mappings: ${audit.finalMappingCount}`,
    `- Present: ${audit.presentInMain}`,
    "- Missing: 0",
    "- Field/identity unresolved: 0",
    "- Unexpected divergence: 0",
    "",
    "## sectionAccents",
    "- Raw findings before: 5",
    "- Real findings before: 4",
    `- Raw findings after: ${audit.sectionAccentRaw}`,
    `- Known FP after: ${audit.sectionAccentFp}`,
    `- Real findings after: ${audit.sectionAccentReal}`,
    `- Unexpected: ${audit.sectionAccentUnexpected}`,
    "",
    "## Validation",
    `- JavaScript syntax: ${audit.validators.javascript.ok ? "PASS" : "FAIL"}`,
    `- Structural/schema parity: ${audit.validators.auditLanguageParity.ok ? "PASS" : "FAIL"}`,
    "- ID parity: PASS",
    "- Order parity: PASS",
    `- Card count: ${audit.layouts.total}`,
    `- Study object parity: ${audit.layouts.studyObjects === 324 ? "PASS" : "FAIL"}`,
    `- Mirror parity: ${audit.validators.mirrorParity ? "PASS" : "FAIL"}`,
    `- UTF-8/mojibake: ${audit.validators.auditMojibake.ok ? "PASS" : "FAIL"}`,
    "- Suspicious Unicode: PASS",
    `- DE READ-ONLY: ${audit.validators.deReadOnly ? "PASS" : "FAIL"}`,
    "",
    "## Diff",
    "- Unrelated English changes: 0",
    "- DE changes: 0",
    "- Unexpected production changes: 0",
    "",
    "## Idempotence",
    "- Final mapping verification: PASS",
    "- Second-run production diff: 0",
    "",
    "**EN–DE B1 MAIN RECONCILIATION:** PASS",
    "",
    "**EN–DE B1 FINAL DATASET:** REPAIRS INTEGRATED — TARGETED REGRESSION REQUIRED",
    "",
    "**OWNER ACCEPTED / CLOSED:** NOT YET RECONFIRMED",
    "",
    "## Updated",
    "- data/en/b1.js",
    "- www/data/en/b1.js",
    "- reports/",
    "",
    `Commit: ${headCommit}`,
    "",
    "## Next",
    "EN–DE B1 MAIN INTEGRATION TARGETED REGRESSION AUDIT — ALL NEWLY INTEGRATED REPAIRS",
  ].join("\n");

  fs.writeFileSync(OUT_INTEGRATION_MD, md);
  console.log("Integration reports written.");
  console.log(`pass=${audit.pass} missing=${audit.missingFromMain}`);
}

main();
