#!/usr/bin/env node
/**
 * GLOBAL MAIN INTEGRATION / RECONCILIATION — CLOSURE (report update only).
 * Applies OWNER-approved BS–DE B1 19 UNRESOLVED resolution to audit artifacts.
 * Does not modify production data files.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const AUDITED_MAIN_SHA = "6099c38cb7b8868e3877de9dc02132e677bf938b";
const IN_JSON = path.join(ROOT, "reports/temp/global-main-integration-reconciliation-audit.json");
const OUT_JSON = IN_JSON;
const OUT_MD = path.join(ROOT, "reports/global-main-integration-reconciliation-audit.md");
const OWNER_REVIEW_JSON = path.join(ROOT, "reports/temp/bs-b1-19-unresolved-owner-review.json");
const OWNER_REVIEW_MD = path.join(ROOT, "reports/bs-b1-19-unresolved-owner-review.md");

function fail(msg) {
  console.error(`CLOSURE BLOCKED: ${msg}`);
  process.exit(2);
}

function verifyOwnerReview() {
  if (!fs.existsSync(OWNER_REVIEW_JSON)) {
    fail(`Missing ${OWNER_REVIEW_JSON}`);
  }
  const review = JSON.parse(fs.readFileSync(OWNER_REVIEW_JSON, "utf8"));
  const ga = review.summary?.groupA;
  if (!ga || ga.itemsChecked !== 17) fail("Group A itemsChecked !== 17");
  if (ga.confirmedMatch !== 17) fail(`Group A CONFIRMED_MATCH = ${ga.confirmedMatch}, expected 17`);
  if (ga.confirmedMissing !== 0) fail(`Group A CONFIRMED_MISSING = ${ga.confirmedMissing}`);
  if (ga.confirmedSuperseded !== 0) fail(`Group A CONFIRMED_SUPERSEDED = ${ga.confirmedSuperseded}`);
  if (ga.stillUnresolved !== 0) fail(`Group A STILL_UNRESOLVED = ${ga.stillUnresolved}`);
  if (review.summary.auditedMainSha !== AUDITED_MAIN_SHA) {
    fail(`Owner review audited SHA mismatch: ${review.summary.auditedMainSha}`);
  }
  return review;
}

function applyClosure(report, review) {
  const b1 = report.matrix.find((m) => m.language === "BS–DE" && m.section === "B1");
  if (!b1) fail("B1 matrix row not found");

  const resolvedIds = new Set([
    "B1-missing-b1-beschwerde-study.comparison[1].meaning",
    "B1-missing-b1-dank-study-study.comparison[4].meaning",
    "b1-owner-manual-17",
  ]);

  const beforeUnresolved = b1.unresolved;
  if (beforeUnresolved !== 19) {
    fail(`B1 unresolved = ${beforeUnresolved}, expected 19 before closure`);
  }

  // SOURCE_LV_ISSUE: OWNER KEEP current main — counts as MATCH for reconciliation
  b1.match += 2;
  b1.unresolved = 0;
  b1.finalStatus = "MATCH";
  b1.findings = [];

  report.detailedFindings = report.detailedFindings.filter((f) => !resolvedIds.has(f.id));

  const totals = { match: 0, missing: 0, superseded: 0, unresolved: 0 };
  for (const row of report.matrix) {
    totals.match += row.match;
    totals.missing += row.missing;
    totals.superseded += row.superseded;
    totals.unresolved += row.unresolved;
  }
  report.totals = totals;

  if (totals.missing !== 0) fail(`totals.missing = ${totals.missing}`);
  if (totals.unresolved !== 0) fail(`totals.unresolved = ${totals.unresolved}`);

  const allMatch = report.matrix.every((r) => r.finalStatus === "MATCH");
  if (!allMatch) fail("Not all sections MATCH after closure");

  report.generatedAt = new Date().toISOString();
  report.auditedMainSha = AUDITED_MAIN_SHA;
  report.auditMode = "READ-ONLY CLOSURE";
  report.finalVerdict = "PASS";
  report.status = "OWNER ACCEPTED / CLOSED";
  report.closure = {
    closedAt: report.generatedAt,
    ownerReviewArtifact: "reports/bs-b1-19-unresolved-owner-review.md",
    ownerReviewJson: "reports/temp/bs-b1-19-unresolved-owner-review.json",
    pr307: {
      groupA: "17/17 CONFIRMED_MATCH (git diff 7fcea651..3dd07d33)",
      confirmedMissing: 0,
      confirmedSuperseded: 0,
      stillUnresolved: 0,
    },
    sourceLvIssue: {
      "b1-beschwerde": { decision: "KEEP", value: "Tužba", field: "study.comparison[1].meaning" },
      "b1-dank-study": { decision: "KEEP", value: "Zahvaliti se", field: "study.comparison[4].meaning" },
    },
    productionChanges: 0,
    note:
      "Initial UNRESOLVED on SOURCE_LV_ISSUE rows arose from misinterpreted comparison context (die Klage / sich bedanken), not missing production repairs.",
  };

  return report;
}

function writeMarkdown(report) {
  const md = [];
  md.push("# GLOBAL MAIN INTEGRATION / RECONCILIATION AUDIT");
  md.push("");
  md.push(`**AUDITED MAIN SHA:** ${AUDITED_MAIN_SHA}`);
  md.push("**AUDIT MODE:** READ-ONLY CLOSURE");
  md.push(`**Generated:** ${report.generatedAt}`);
  md.push(`**STATUS:** ${report.status}`);
  md.push("");
  md.push("## Reconciliation matrix");
  md.push("");
  md.push("| Language | Section | Expected repairs | MATCH | MISSING | SUPERSEDED | UNRESOLVED | Final status |");
  md.push("| -------- | ------- | ---------------: | ----: | ------: | ---------: | ---------: | ------------ |");
  for (const row of report.matrix) {
    md.push(
      `| ${row.language} | ${row.section} | ${row.expected ?? ""} | ${row.match} | ${row.missing} | ${row.superseded} | ${row.unresolved} | ${row.finalStatus} |`
    );
  }
  md.push("");
  md.push("## EN–DE B1");
  md.push("");
  md.push("OUT OF SCOPE — already reconciled / closure reconfirmed (`reports/en-b1-final-closure-reconfirmation.md`).");
  md.push("");
  md.push("## BS–DE B1 closure (OWNER resolution)");
  md.push("");
  md.push("Reference: `reports/bs-b1-19-unresolved-owner-review.md`");
  md.push("");
  md.push("### PR #307 — Group A (17 repairs)");
  md.push("");
  md.push("- Reconstructed from `git diff 7fcea651..3dd07d33` (PR #307 commit `3dd07d33`).");
  md.push("- OWNER accepted: **17/17 CONFIRMED_MATCH** on audited main `6099c38c`.");
  md.push("- CONFIRMED_MISSING: 0 • CONFIRMED_SUPERSEDED: 0 • STILL_UNRESOLVED: 0");
  md.push("");
  md.push("### SOURCE_LV_ISSUE — Group B");
  md.push("");
  md.push("| Card | OWNER decision | Field | Value |");
  md.push("| ---- | -------------- | ----- | ----- |");
  md.push("| `b1-beschwerde` | KEEP | `study.comparison[1].meaning` (*die Klage*) | `Tužba` |");
  md.push("| `b1-dank-study` | KEEP | `study.comparison[4].meaning` (*bedanken sich*) | `Zahvaliti se` |");
  md.push("");
  md.push(
    "Prior UNRESOLVED status on both SOURCE_LV_ISSUE rows reflected incorrect comparison-context interpretation in the reconciliation audit, not absent production repairs. **Production changes: 0.**"
  );
  md.push("");
  md.push("## Detailed findings");
  md.push("");
  md.push("No MISSING, SUPERSEDED, or UNRESOLVED items requiring individual records.");
  md.push("");
  md.push("## GLOBAL MAIN INTEGRATION / RECONCILIATION AUDIT — CLOSED");
  md.push("");
  md.push(`Audited main SHA: ${AUDITED_MAIN_SHA}`);
  md.push("");
  md.push(`Sections checked: ${report.sectionsChecked}/11`);
  md.push("");
  md.push(`Sections MATCH: ${report.sectionsChecked}/11`);
  md.push("");
  md.push(`MATCH: ${report.totals.match}`);
  md.push(`MISSING: ${report.totals.missing}`);
  md.push(`SUPERSEDED: ${report.totals.superseded}`);
  md.push(`UNRESOLVED: ${report.totals.unresolved}`);
  md.push("");
  md.push("### BS–DE");
  for (const s of ["A1", "A2", "B1", "B2", "C1", "C2", "VERBS", "KURSS"]) {
    const r = report.matrix.find((m) => m.language === "BS–DE" && m.section === s);
    md.push(`${s}: ${r?.finalStatus || "—"}`);
  }
  md.push("");
  md.push("### EN–DE");
  for (const s of ["A1", "A2", "KURSS"]) {
    const r = report.matrix.find((m) => m.language === "EN–DE" && m.section === s);
    md.push(`${s}: ${r?.finalStatus || "—"}`);
  }
  md.push("");
  md.push("### EN–DE B1");
  md.push("OUT OF SCOPE — already reconciled / closure reconfirmed");
  md.push("");
  md.push("Production files modified: 0");
  md.push("");
  md.push("FINAL GLOBAL VERDICT: PASS");
  md.push("");
  md.push("STATUS: OWNER ACCEPTED / CLOSED");

  fs.writeFileSync(OUT_MD, md.join("\n"));
}

function main() {
  if (!fs.existsSync(IN_JSON)) fail(`Missing ${IN_JSON}`);
  const review = verifyOwnerReview();
  const report = JSON.parse(fs.readFileSync(IN_JSON, "utf8"));
  if (report.auditedMainSha !== AUDITED_MAIN_SHA) {
    fail(`Report audited SHA ${report.auditedMainSha} !== ${AUDITED_MAIN_SHA}`);
  }
  const closed = applyClosure(report, review);
  fs.writeFileSync(OUT_JSON, JSON.stringify(closed, null, 2) + "\n");
  writeMarkdown(closed);
  console.log("GLOBAL RECONCILIATION CLOSURE: PASS");
  console.log(`MATCH: ${closed.totals.match} UNRESOLVED: ${closed.totals.unresolved}`);
  console.log(`Sections MATCH: ${closed.sectionsChecked}/11`);
}

main();
