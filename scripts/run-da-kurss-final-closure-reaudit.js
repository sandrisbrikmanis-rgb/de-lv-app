#!/usr/bin/env node
"use strict";
/**
 * DA–DE Kurss FINAL CLOSURE RE-AUDIT orchestrator (READ-ONLY).
 * Post PR #575 OWNER repair. Real GPT-5.6 Luna only after prerequisite PASS.
 *
 * Usage:
 *   node scripts/run-da-kurss-final-closure-reaudit.js
 *   node scripts/run-da-kurss-final-closure-reaudit.js --run-luna
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { collectAllDaFields, compareStructureWithLvMaster } = require("./lib/da-kurss-audit-collect");
const { DEFAULT_MODEL } = require("./lib/openai-da-kurss-audit");

const REPORT = path.join(ROOT, "reports/da-kurss-final-closure-reaudit.md");
const JSON_OUT = path.join(ROOT, "reports/temp/da-kurss-final-closure-reaudit.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/da-kurss-final-closure-reaudit-luna");
const RUN_LUNA = process.argv.includes("--run-luna");

const PRODUCTION_PATHS = [
  "data/da/courseLessons.js",
  "data/da/courseTrainingCards.js",
  "languages/da/ui.js",
  "www/data/da/courseLessons.js",
  "www/data/da/courseTrainingCards.js",
  "www/languages/da/ui.js",
];

function runPrerequisite() {
  try {
    const out = execSync("node scripts/check-da-kurss-final-closure-reaudit-prerequisite.js", {
      cwd: ROOT,
      encoding: "utf8",
    });
    return JSON.parse(out);
  } catch (e) {
    const out = e.stdout || e.output?.[1] || "";
    if (out.trim()) return JSON.parse(out);
    throw e;
  }
}

function runOwnerRegression() {
  try {
    const out = execSync("node scripts/audit-da-kurss-final-closure-reaudit-owner-regression.js", {
      cwd: ROOT,
      encoding: "utf8",
    });
    return JSON.parse(out);
  } catch (e) {
    const out = e.stdout || e.output?.[1] || "";
    if (out.trim()) return JSON.parse(out);
    throw e;
  }
}

function runTechnicalGates() {
  const syntax = { pass: true, issues: [] };
  for (const rel of PRODUCTION_PATHS) {
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

  const structure = compareStructureWithLvMaster();
  const uiSnippet = fs.readFileSync(path.join(ROOT, "www/ui.js"), "utf8");
  const renderer =
    uiSnippet.includes("lesson?.legacyHtml") || uiSnippet.includes("renderCourseLessonFromData");

  return { syntax, validateKurss, mirror, deUnchanged, structure, renderer };
}

function productionDiffCount() {
  let changed = 0;
  for (const rel of PRODUCTION_PATHS) {
    try {
      execSync(`git diff --quiet HEAD -- "${rel}"`, { cwd: ROOT, stdio: "pipe" });
    } catch {
      changed++;
    }
  }
  return changed;
}

function exportLunaBatches(fields) {
  fs.mkdirSync(LUNA_DIR, { recursive: true });
  const batchSize = 10;
  const labels = [];
  for (let i = 0; i < fields.length; i += batchSize) {
    const slice = fields.slice(i, i + batchSize).map((f) => ({
      fieldId: `${f.lessonId}|${f.path}`,
      lessonId: f.lessonId,
      path: f.path,
      fieldType: f.fieldType,
      daCurrent: f.daCurrent,
      deCurrent: f.deCurrent || "",
      lvMasterDa: f.lvMasterDa || "",
      source: f.source,
    }));
    const label = `batch-${String(Math.floor(i / batchSize) + 1).padStart(3, "0")}`;
    fs.writeFileSync(
      path.join(LUNA_DIR, `${label}.json`),
      JSON.stringify(
        {
          auditType: "da_kurss_final_closure_reaudit",
          batch: label,
          model: DEFAULT_MODEL,
          instructions:
            "GPT-5.6 Luna READ-ONLY final closure RE-AUDIT. Danish must be natural, grammatical, semantically aligned with DE. LV MASTER for structure only. DE STRICT READ-ONLY.",
          fields: slice,
        },
        null,
        2,
      ),
    );
    labels.push(label);
  }
  return labels;
}

function runLunaApi() {
  if (!fs.existsSync(path.join(ROOT, "scripts/audit-da-kurss-final-closure-luna-api.js"))) {
    throw new Error("Luna API runner missing — copy from PR #575 branch after merge");
  }
  execSync(`node scripts/audit-da-kurss-final-closure-luna-api.js`, {
    cwd: ROOT,
    stdio: "inherit",
    env: { ...process.env, LUNA_BATCH_DIR: LUNA_DIR },
  });
}

function renderReport(ctx) {
  const p = ctx.prerequisite;
  const g = ctx.gates;
  const or = ctx.ownerRegression;
  const lines = [
    "# DA–DE Kurss — final closure RE-AUDIT",
    "",
    `**Generated:** ${ctx.generatedAt}`,
    "**Mode:** READ-ONLY · GPT-5.6 Luna",
    "**Scope:** Post PR #575 OWNER repair closure verification",
    "",
    "## FINAL STATUS",
    "",
    `**${ctx.finalStatus}**`,
    "",
    ctx.blockReason || "",
    "",
    "## Git / prerequisite",
    "",
    "| Check | Result |",
    "|-------|--------|",
    `| HEAD SHA | \`${p.gitSha}\` |`,
    `| PR #575 merged to main | **${p.pr575.merged ? "YES" : "NO"}** |`,
    `| PR #575 state | ${p.pr575.state || "unknown"} |`,
    `| Signed OWNER file | **${p.artifacts.files.signedFile.exists ? "YES" : "NO"}** |`,
    `| Apply report | **${p.artifacts.files.applyReport.exists ? "YES" : "NO"}** |`,
    `| Apply log JSON | **${p.artifacts.files.applyLog.exists ? "YES" : "NO"}** |`,
    `| Uncommitted production | **${p.production.clean ? "0" : p.production.dirtyPaths.length}** |`,
    `| Prerequisite | **${p.prerequisitePass ? "PASS" : "FAIL"}** |`,
    "",
  ];

  if (p.blockers.length) {
    lines.push("### Blockers", "");
    for (const b of p.blockers) lines.push(`- \`${b}\``);
    lines.push("");
  }

  lines.push(
    "### Expected OWNER apply state (PR #575)",
    "",
    "| Metric | Expected | Actual (on disk) |",
    "|--------|----------|------------------|",
    `| Signed LABOT | **118** | ${or?.signedLabot ?? "n/a"} |`,
    `| Unique apply paths | **88** | ${or?.uniqueApplyPaths ?? p.applyMetrics.uniqueApplyPaths ?? "n/a"} |`,
    `| Production APPLIED | **85** | ${or?.ownerMatch ?? p.applyMetrics.productionApplied ?? "n/a"} |`,
    `| DE-protected SKIP | **3** | ${or?.deProtectedConfirmed ?? p.applyMetrics.deProtectedSkip ?? "n/a"} |`,
    "",
    "## OWNER regression (85 production LABOT targets)",
    "",
  );

  if (or) {
    lines.push(
      "| Metric | Value |",
      "|--------|-------|",
      `| OWNER_MATCH | **${or.ownerMatch}/${or.productionTargets}** |`,
      `| OWNER_MISMATCH | **${or.ownerMismatch}** |`,
      `| Regression PASS | **${or.ownerRegressionPass ? "YES" : "NO"}** |`,
      "",
    );
    if (or.mismatches?.length) {
      lines.push("### OWNER_MISMATCH samples", "", "| Audit ID | Path |", "|----------|------|");
      for (const m of or.mismatches.slice(0, 15)) {
        lines.push(`| ${m.auditId} | \`${m.path}\` |`);
      }
      lines.push("");
    }
  } else {
    lines.push("*Not executed — prerequisite FAIL.*", "");
  }

  lines.push(
    "## DE-protected SKIP (FCA-0083, FCA-0084, FCA-0098)",
    "",
    or
      ? `| Confirmed | **${or.deProtectedConfirmed}/3** | DE_PROTECTED_PASS: **${or.deProtectedPass ? "YES" : "NO"}** |`
      : "*Not executed — prerequisite FAIL.*",
    "",
    "## GPT-5.6 Luna execution",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Model | **${DEFAULT_MODEL}** |`,
    `| Real model audit | **${ctx.luna.realModelAudit ? "YES" : "NO"}** |`,
    `| Reason | ${ctx.luna.reason} |`,
    `| Batches exported | **${ctx.luna.batchesExported}** |`,
    `| Batches executed | **${ctx.luna.batchesExecuted}** |`,
    "",
    "## Coverage",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Lessons | **${ctx.coverage.lessons}** |`,
    `| Audited fields | **${ctx.coverage.totalFields}** |`,
    `| Coverage | **${ctx.coverage.percent}** |`,
    "",
    "## Validated findings",
    "",
    "| Severity | Count |",
    "|----------|-------|",
    `| CRITICAL | **${ctx.validatedFindings.CRITICAL}** |`,
    `| HIGH | **${ctx.validatedFindings.HIGH}** |`,
    `| MEDIUM | **${ctx.validatedFindings.MEDIUM}** |`,
    `| LOW | **${ctx.validatedFindings.LOW}** |`,
    `| NEEDS_SOURCE_REVIEW | **${ctx.validatedFindings.NEEDS_SOURCE_REVIEW}** |`,
    "",
    "## Technical gates",
    "",
    "| Gate | Result |",
    "|------|--------|",
    `| Syntax | **${g.syntax.pass ? "PASS" : "FAIL"}** |`,
    `| validate-kurss | **${g.validateKurss ? "PASS" : "FAIL"}** |`,
    `| Structure | **${g.structure.pass ? "PASS" : "FAIL"}** |`,
    `| Mirror | **${g.mirror ? "PASS" : "FAIL"}** |`,
    `| Renderer | **${g.renderer ? "PASS" : "FAIL"}** |`,
    `| DE changes | **${g.deUnchanged ? "0" : "FAIL"}** |`,
    `| Production changes (this audit run) | **0** |`,
    "",
    "## DE READ-ONLY",
    "",
    "DE source fields were not modified during this audit. Any DE issues → NEEDS_SOURCE_REVIEW only.",
    "",
    "## Closure criteria",
    "",
    "OWNER ACCEPTED / CLOSED requires: prerequisite PASS + Luna YES + OWNER_MATCH 85/85 + DE_PROTECTED 3/3 + CRITICAL/HIGH/MEDIUM = 0 + all technical gates PASS.",
    "",
    ctx.nextStep ? `**Next step:** ${ctx.nextStep}` : "",
  );

  return lines.filter(Boolean).join("\n");
}

function main() {
  const generatedAt = new Date().toISOString();
  const prerequisite = runPrerequisite();
  const gates = runTechnicalGates();
  const { stats } = collectAllDaFields();

  let ownerRegression = null;
  let finalStatus = "PREREQUISITE_FAIL";
  let blockReason =
    "Audit stopped before GPT-5.6 Luna closure pass. PR #575 OWNER repair is not merged to main and/or authoritative OWNER artifacts are missing from production baseline.";
  let nextStep = "Merge PR #575 to main, then re-run: `node scripts/run-da-kurss-final-closure-reaudit.js --run-luna`";

  const luna = {
    realModelAudit: false,
    reason: "Blocked by PREREQUISITE_FAIL — LUNA_NOT_EXECUTED",
    batchesExported: 0,
    batchesExecuted: 0,
    rawCount: 0,
    validatedCount: 0,
  };

  const validatedFindings = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, NEEDS_SOURCE_REVIEW: 0, TOTAL: 0 };

  if (prerequisite.prerequisitePass) {
    try {
      ownerRegression = runOwnerRegression();
    } catch (e) {
      ownerRegression = { error: e.message, ownerRegressionPass: false, ownerMatch: 0, ownerMismatch: 85 };
    }

    if (!ownerRegression?.ownerRegressionPass || !ownerRegression?.deProtectedPass) {
      finalStatus = "NEEDS OWNER REVIEW";
      blockReason = "Prerequisite PASS but OWNER regression failed (OWNER_MATCH != 85/85 or DE-protected SKIP != 3/3).";
      nextStep = "Fix production to match signed OWNER decisions; re-run re-audit.";
      luna.reason = "Blocked by OWNER regression FAIL";
    } else if (RUN_LUNA) {
      const batches = exportLunaBatches(stats.fields);
      luna.batchesExported = batches.length;
      try {
        runLunaApi();
        luna.realModelAudit = true;
        luna.reason = "GPT-5.6 Luna API executed";
        luna.batchesExecuted = batches.length;
        finalStatus = "NEEDS OWNER REVIEW";
        blockReason = "Luna executed; validate findings in JSON artifact.";
        nextStep = "Review validated findings; address CRITICAL/HIGH/MEDIUM before closure.";
      } catch (e) {
        finalStatus = "LUNA_NOT_EXECUTED";
        blockReason = `Luna API failed: ${e.message}`;
        luna.reason = blockReason;
        nextStep = "Fix Luna runner/API; re-run with --run-luna";
      }
    } else {
      finalStatus = "PREREQUISITE_PASS_LUNA_PENDING";
      blockReason = "Prerequisite and OWNER regression PASS. Run with `--run-luna` for GPT-5.6 Luna closure audit.";
      luna.reason = "Not invoked (use --run-luna)";
      nextStep = "node scripts/run-da-kurss-final-closure-reaudit.js --run-luna";
    }
  }

  const out = {
    generatedAt,
    finalStatus,
    blockReason,
    nextStep,
    prerequisite,
    ownerRegression,
    gates,
    luna,
    coverage: {
      lessons: `${stats.lessons}/21`,
      totalFields: stats.totalFields,
      percent: prerequisite.prerequisitePass ? "100%" : "0% (blocked)",
    },
    validatedFindings,
    rawFindings: [],
    falsePositives: [],
    productionChanges: 0,
    productionDiffCount: productionDiffCount(),
    deChanges: gates.deUnchanged ? 0 : "FAIL",
    lvMasterChanges: 0,
  };

  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.mkdirSync(LUNA_DIR, { recursive: true });
  fs.writeFileSync(JSON_OUT, JSON.stringify(out, null, 2));
  fs.writeFileSync(
    REPORT,
    renderReport({
      generatedAt,
      finalStatus,
      blockReason,
      nextStep,
      prerequisite,
      ownerRegression,
      gates,
      luna,
      coverage: out.coverage,
      validatedFindings,
    }),
  );

  console.log(JSON.stringify({ finalStatus, report: REPORT, json: JSON_OUT }, null, 2));
  process.exit(finalStatus === "OWNER ACCEPTED / CLOSED" ? 0 : 2);
}

main();
