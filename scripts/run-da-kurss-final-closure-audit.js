#!/usr/bin/env node
"use strict";
/**
 * DA–DE Kurss final closure audit orchestrator.
 * Stops with PREREQUISITE_FAIL if 244/244 signed LABOT not in runtime production.
 *
 * Usage:
 *   node scripts/run-da-kurss-final-closure-audit.js
 *   node scripts/run-da-kurss-final-closure-audit.js --run-luna   # only after prerequisite PASS
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const REPORT = path.join(ROOT, "reports/da-kurss-final-closure-audit.md");
const JSON_OUT = path.join(ROOT, "reports/temp/da-kurss-final-closure-audit.json");
const RUN_LUNA = process.argv.includes("--run-luna");

function runPrerequisite() {
  return JSON.parse(
    execSync("node scripts/check-da-kurss-closure-prerequisite.js", { cwd: ROOT, encoding: "utf8" }),
  );
}

function runTechnicalGates() {
  const syntax = { pass: true, issues: [] };
  for (const rel of [
    "data/da/courseLessons.js",
    "www/data/da/courseLessons.js",
    "data/da/courseTrainingCards.js",
    "www/data/da/courseTrainingCards.js",
    "languages/da/ui.js",
    "www/languages/da/ui.js",
  ]) {
    try {
      execSync(`node --check "${rel}"`, { cwd: ROOT, stdio: "pipe" });
    } catch {
      syntax.pass = false;
      syntax.issues.push(rel);
    }
  }

  let validateKurss = true;
  try {
    execSync("node scripts/validate-kurss.js --lang=da", { cwd: ROOT, stdio: "pipe" });
  } catch {
    validateKurss = false;
  }

  const pairs = [
    ["data/da/courseLessons.js", "www/data/da/courseLessons.js"],
    ["data/da/courseTrainingCards.js", "www/data/da/courseTrainingCards.js"],
    ["languages/da/ui.js", "www/languages/da/ui.js"],
  ];
  let mirror = true;
  for (const [a, b] of pairs) {
    if (fs.readFileSync(path.join(ROOT, a), "utf8") !== fs.readFileSync(path.join(ROOT, b), "utf8")) mirror = false;
  }

  let deUnchanged = true;
  try {
    execSync("node scripts/verify-da-kurss-owner-de-unchanged.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    deUnchanged = false;
  }

  return { syntax, validateKurss, mirror, deUnchanged };
}

function renderReport(ctx) {
  const p = ctx.prerequisite;
  const g = ctx.gates;
  const lines = [
    "# DA–DE Kurss final closure audit",
    "",
    `**Generated:** ${ctx.generatedAt}`,
    "**Mode:** READ-ONLY",
    "",
    "## FINAL STATUS",
    "",
    `**${ctx.finalStatus}**`,
    "",
    ctx.finalStatus === "PREREQUISITE_FAIL"
      ? "Audit stopped before GPT-5.6 Luna closure pass because runtime production does not reflect all 244 signed OWNER LABOT values."
      : "",
    "",
    "## Prerequisite — OWNER repair completeness",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Signed findings (330 cycle) | **330** |`,
    `| Signed LABOT | **${p.signedLabot}** |`,
    `| PR #571 apply log (applied) | **${p.apply571Applied}** |`,
    `| PR #572 micro-repair (applied) | **${p.apply572Applied}** |`,
    `| Runtime OWNER_MATCH | **${p.runtimeOwnerMatch}/${p.signedLabot}** |`,
    `| Runtime OWNER_MISMATCH | **${p.runtimeOwnerMismatch}** |`,
    `| COURSE_LESSON_HTML map match (legacyHtml LABOT) | **${p.legacyHtmlHtmlMapMatch}** |`,
    `| DATA ↔ HTML divergence (legacyHtml LABOT) | **${p.dataHtmlDivergenceCount}** |`,
    "",
    "### Root cause (9 runtime mismatches — PR #572)",
    "",
    "Renderer uses `COURSE_LESSON_DATA.kurssLessonN.legacyHtml` inline HTML (`www/ui.js` → `renderCourseLessonFromData`). PR #572 updated `COURSE_LESSON_HTML.kurssLessonN` but **did not sync** the inline `legacyHtml` copies in `COURSE_LESSON_DATA` for lessons 2–7.",
    "",
    "Affected Audit IDs:",
    "",
    ...p.runtimeMiss.map((m) => `- \`${m.id}\` — \`${m.path}\` (htmlMapOk: ${m.htmlMapOk ?? "n/a"})`),
    "",
    "### DATA ↔ HTML divergence samples",
    "",
    "| Audit ID | Runtime OK | HTML map OK |",
    "|----------|------------|-------------|",
    ...p.dataHtmlDivergence.slice(0, 20).map((d) => `| ${d.id} | ${d.runtimeOk} | ${d.htmlMapOk} |`),
    "",
    "## Luna",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Model | GPT-5.6 Luna |`,
    `| Real model audit | **${ctx.luna.realModelAudit ? "YES" : "NO"}** |`,
    `| Reason | ${ctx.luna.reason} |`,
    "",
    "## Technical gates (deterministic)",
    "",
    "| Check | Result |",
    "|-------|--------|",
    `| Syntax | **${g.syntax.pass ? "PASS" : "FAIL"}** |`,
    `| validate-kurss | **${g.validateKurss ? "PASS" : "FAIL"}** |`,
    `| Mirror | **${g.mirror ? "PASS" : "FAIL"}** |`,
    `| DE changes | **${g.deUnchanged ? "0" : "FAIL"}** |`,
    `| Production changes (this run) | **0** |`,
    "",
    "## Closure criteria",
    "",
    "OWNER ACCEPTED / CLOSED requires prerequisite PASS + Luna YES + 0 validated findings. Not met.",
    "",
    "**Next step:** Sync `COURSE_LESSON_DATA.kurssLessonN.legacyHtml` inline copies with signed OWNER values (or convert to `COURSE_LESSON_HTML.kurssLessonN` references like other locales), then re-run this audit with `--run-luna`.",
    "",
  ];
  return lines.filter(Boolean).join("\n");
}

function main() {
  const prerequisite = runPrerequisite();
  const gates = runTechnicalGates();
  const generatedAt = new Date().toISOString();

  const luna = {
    realModelAudit: false,
    reason: prerequisite.prerequisitePass ? "Not invoked (use --run-luna)" : "Blocked by PREREQUISITE_FAIL",
    batches: "0/0",
  };

  let finalStatus = "PREREQUISITE_FAIL";
  if (prerequisite.prerequisitePass && RUN_LUNA) {
    // Future: invoke audit-da-kurss-final-closure-audit.js + Luna API
    finalStatus = "NEEDS OWNER REVIEW";
    luna.reason = "Luna runner not yet wired on this branch";
  } else if (prerequisite.prerequisitePass) {
    finalStatus = "PREREQUISITE_PASS_LUNA_PENDING";
    luna.reason = "Prerequisite passed; run with --run-luna to execute GPT-5.6 Luna closure";
  }

  const out = {
    generatedAt,
    finalStatus,
    prerequisite,
    gates,
    luna,
    coverage: { lessons: "21/21", daContent: "100% (not audited — blocked)" },
    ownerRegression: {
      signedLabot: prerequisite.signedLabot,
      runtimeMatch: prerequisite.runtimeOwnerMatch,
      runtimeMismatch: prerequisite.runtimeOwnerMismatch,
    },
    validatedFindings: { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, TOTAL: 0 },
    productionChanges: 0,
  };

  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.writeFileSync(JSON_OUT, JSON.stringify(out, null, 2));
  fs.writeFileSync(REPORT, renderReport({ generatedAt, finalStatus, prerequisite, gates, luna }));

  console.log(JSON.stringify({ finalStatus, prerequisite, gates, report: REPORT }, null, 2));
  process.exit(finalStatus === "PREREQUISITE_FAIL" ? 2 : 0);
}

main();
