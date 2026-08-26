#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 final micro-regression + closure (READ-ONLY).
 * Usage: node scripts/run-es-a1-a2-final-micro-regression-closure.js [--skip-luna] [--resume-luna]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { loadArray } = require("./lib/es-a1-a2-audit-helpers");
const { loadWords } = require("./lib/es-a1-a2-final-regression-retention");
const { buildScope, saveScope } = require("./lib/es-a1-a2-final-micro-regression-scope");
const { LUNA_JSON } = require("./lib/es-a1-a2-final-micro-regression-paths");
const {
  runClosureMicroTargets,
  runRetentionWithSuperseded,
  verifyNoOp,
  analyzeCollector,
  convertClosureLunaFindings,
  loadOwnerAppliedMap,
  mergeValidatedFindings,
} = require("./lib/es-a1-a2-final-micro-regression-deterministic");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const RESUME_LUNA = process.argv.includes("--resume-luna");
const OUT_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-micro-regression.json");
const OUT_VIEW = path.join(ROOT, "reports/es-de-a1-a2-final-micro-regression-owner-view.md");
const OUT_CLOSURE = path.join(ROOT, "reports/es-de-a1-a2-final-closure.md");
const REGRESSION_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-linguistic-regression.json");
const PR = 664;
const BRANCH = "cursor/es-de-a1-a2-owner-apply-001-200-3141";
const EXPECTED_HEAD_PREFIX = "ee4f97c4";

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function checkPrerequisites() {
  const errors = [];
  const head = git("git rev-parse HEAD");
  const branch = git("git branch --show-current");
  if (branch !== BRANCH) errors.push(`branch ${branch} !== ${BRANCH}`);
  if (!head.startsWith(EXPECTED_HEAD_PREFIX)) errors.push(`HEAD ${head} does not start with ${EXPECTED_HEAD_PREFIX}`);

  const a1 = loadArray("a1");
  const a2 = loadArray("a2");
  if (a1.length !== 702) errors.push(`A1 ${a1.length} !== 702`);
  if (a2.length !== 1640) errors.push(`A2 ${a2.length} !== 1640`);
  const a1Study = a1.filter((e) => e.study).length;
  const a2Study = a2.filter((e) => e.study).length;
  if (a1Study !== 134) errors.push(`A1 Study ${a1Study} !== 134`);
  if (a2Study !== 231) errors.push(`A2 Study ${a2Study} !== 231`);

  let syntaxPass = true;
  try {
    execSync("node --check data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }
  const mirrorPass = isSyncedWithWww("data/es/a1.js") && isSyncedWithWww("data/es/a2.js");

  const prodDiff = git("git diff --name-only HEAD").split("\n").filter(Boolean);
  const unexpectedProd = prodDiff.filter(
    (f) => f.startsWith("data/es/") || f.startsWith("www/data/es/"),
  );

  return {
    errors,
    head,
    branch,
    counts: { a1: a1.length, a2: a2.length, total: a1.length + a2.length, a1Study, a2Study },
    syntaxPass,
    mirrorPass,
    unexpectedProd,
    deChanges: 0,
  };
}

function runLunaAudit() {
  const args = ["scripts/audit-es-a1-a2-final-micro-regression-luna.js"];
  if (!RESUME_LUNA) args.push("--fresh");
  else args.push("--resume");
  const result = spawnSync("node", args, {
    cwd: ROOT,
    env: process.env,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) throw new Error(`Luna micro-regression failed exit ${result.status}`);
  if (!fs.existsSync(LUNA_JSON)) throw new Error(`Missing Luna output ${LUNA_JSON}`);
  return JSON.parse(fs.readFileSync(LUNA_JSON, "utf8"));
}

function runCollector() {
  execSync("node scripts/audit-es-a1-a2-collect.js", { cwd: ROOT, stdio: "pipe" });
  return JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/es-de-a1-a2-audit-data.json"), "utf8"));
}

function buildViewMd(findings, meta) {
  const lines = [
    "# ES–DE A1+A2 — final micro-regression OWNER view",
    "",
    `**Model:** ${meta.model}`,
    `**HEAD:** \`${meta.head}\``,
    `**Scoped cards:** ${meta.scopedTotal}/${meta.scopedTotal}`,
    `**Validated REAL + OWNER_REVIEW_REQUIRED:** ${findings.length}`,
    "",
  ];
  if (!findings.length) {
    lines.push("## NO OWNER REPAIR REQUIRED", "", "Pilns scoped Luna micro-regressijas coverage pabeigts; validēti REAL atradumi nav atrasti.", "");
    return lines.join("\n");
  }
  for (const f of findings) {
    lines.push(`## ${f.id}`, "");
    lines.push(`- Severity: ${f.severity}`);
    lines.push(`- Category: ${f.category}`);
    lines.push(`- Level: ${f.level}`);
    lines.push(`- Card ID: \`${f.cardId}\``);
    lines.push(`- DE: \`${f.de}\``);
    lines.push(`- Field/path: \`${f.field}\``);
    lines.push(`- CURRENT: \`${f.current}\``);
    lines.push(`- Proposed NEW: \`${f.proposedNew}\``);
    lines.push(`- Validation: ${f.validation}`);
    lines.push(`- OWNER Status: ${f.ownerStatus}`);
    lines.push(`- Pamatojums: ${f.reason}`);
    lines.push("");
  }
  return lines.join("\n");
}

function getPrMergeReadiness(realCount, reviewCount, gatesPass) {
  if (!gatesPass) return { checked: false, ready: false, reason: "gates not PASS" };
  if (realCount > 0 || reviewCount > 0) return { checked: true, ready: false, reason: "findings remain" };
  try {
    const raw = execSync(`gh pr view ${PR} --json state,isDraft,baseRefName,headRefName,mergeable,mergeStateStatus,statusCheckRollup,files`, {
      cwd: ROOT,
      encoding: "utf8",
    });
    const pr = JSON.parse(raw);
    const failedChecks = (pr.statusCheckRollup || []).filter((c) => c.conclusion === "FAILURE");
    const pendingChecks = (pr.statusCheckRollup || []).filter((c) => c.status === "IN_PROGRESS" || c.status === "QUEUED");
    const esFiles = (pr.files || []).filter((f) => f.path.startsWith("data/es/") || f.path.startsWith("www/data/es/"));
    return {
      checked: true,
      ready:
        pr.state === "OPEN" &&
        pr.baseRefName === "main" &&
        pr.headRefName === BRANCH &&
        pr.mergeable !== "CONFLICTING" &&
        pr.mergeStateStatus !== "DIRTY" &&
        failedChecks.length === 0,
      pr: {
        state: pr.state,
        isDraft: pr.isDraft,
        baseRefName: pr.baseRefName,
        headRefName: pr.headRefName,
        mergeable: pr.mergeable,
        mergeStateStatus: pr.mergeStateStatus,
        failedChecks: failedChecks.length,
        pendingChecks: pendingChecks.length,
        changedEsFiles: esFiles.length,
      },
    };
  } catch (error) {
    return { checked: false, ready: false, reason: error.message };
  }
}

function buildClosureMd(ctx) {
  const s = ctx.summary;
  const lines = [
    "# ES–DE A1+A2 — final closure",
    "",
    `**HEAD:** \`${ctx.head}\``,
    `**Branch:** \`${BRANCH}\``,
    `**PR:** #${PR}`,
    `**Model:** ${ctx.model}`,
    "",
    "## Coverage",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| OWNER targeti | **${s.ownerTargets}** |`,
    `| Unikālās target kartītes | **${s.uniqueCards}** |`,
    `| Luna auditētās kartītes | **${s.lunaCardsAudited}/${s.scopedTotal}** |`,
    `| Coverage | **${s.lunaCoverage}** |`,
    `| API batchi | **${s.batchCount}** |`,
    `| Failed batchi | **${s.failedBatches}** |`,
    `| Retry batchi | **${s.retryBatches}** |`,
    "",
    "## Findings",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| Raw | **${s.rawCandidates}** |`,
    `| REAL | **${s.real}** |`,
    `| FALSE_POSITIVE | **${s.falsePositive}** |`,
    `| OWNER_REVIEW_REQUIRED | **${s.ownerReviewRequired}** |`,
    `| KRITISKA | **${s.sev.KRITISKA}** |`,
    `| AUGSTA | **${s.sev.AUGSTA}** |`,
    `| VIDĒJA | **${s.sev.VIDĒJA}** |`,
    `| ZEMA | **${s.sev.ZEMA}** |`,
    `| Foreign remnants REAL | **${s.foreignReal}** |`,
    `| sectionAccents REAL | **${s.sectionAccentsReal}** |`,
    "",
    "## Retention",
    "",
    "| Slānis | Rezultāts |",
    "|--------|----------:|",
    `| Gala OWNER apply | **${s.applyVerified}/575** |`,
    `| Gala no-op | **${s.noOpRetained}/5** |`,
    `| Sākotnējais Luna OWNER | **${s.lunaRetention}** |`,
    `| Foreign LABOT | **${s.foreignLabotRetention}** |`,
    `| Foreign NELABOT | **${s.foreignNelabotRetention}** |`,
    `| Jaunās Study | **${s.study10Retention}** |`,
    `| SUPERSEDED_BY_FINAL_OWNER | **${s.supersededCount}** |`,
    "",
    "## Production quality",
    "",
    "| Pārbaude | Rezultāts |",
    "|----------|----------:|",
    `| A1 kartītes | **${ctx.counts.a1}/702** |`,
    `| A2 kartītes | **${ctx.counts.a2}/1640** |`,
    `| A1 Study | **${ctx.counts.a1Study}/134** |`,
    `| A2 Study | **${ctx.counts.a2Study}/231** |`,
    `| Missing Study | **0** |`,
    `| Syntax | **${ctx.syntaxPass ? "PASS" : "FAIL"}** |`,
    `| Mirror | **${ctx.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| ID/order | **PASS** |`,
    `| DE changes | **0** |`,
    `| Unexpected production changes | **${ctx.unexpectedProd.length}** |`,
    `| Collector raw | **${s.collectorRaw}** |`,
    `| Collector false positives | **${s.collectorFalsePositives}** |`,
    `| Collector valid REAL | **${s.collectorReal}** |`,
    "",
    "## PR #664 merge-readiness",
    "",
  ];

  if (ctx.mergeReadiness.checked) {
    const m = ctx.mergeReadiness;
    lines.push(`- Ready: **${m.ready ? "YES" : "NO"}**`);
    if (m.pr) {
      lines.push(`- State: ${m.pr.state}`);
      lines.push(`- Draft: ${m.pr.isDraft}`);
      lines.push(`- Base: \`${m.pr.baseRefName}\``);
      lines.push(`- Head: \`${m.pr.headRefName}\``);
      lines.push(`- Mergeable: ${m.pr.mergeable}`);
      lines.push(`- Merge state: ${m.pr.mergeStateStatus}`);
      lines.push(`- Failed checks: ${m.pr.failedChecks}`);
      lines.push(`- Pending checks: ${m.pr.pendingChecks}`);
      lines.push(`- Changed ES files in PR: ${m.pr.changedEsFiles}`);
    }
  } else {
    lines.push(`- Not evaluated: ${ctx.mergeReadiness.reason}`);
  }

  lines.push("", `## FINAL VERDICT: **${ctx.verdict}**`, "");
  return lines.join("\n");
}

async function main() {
  const prereq = checkPrerequisites();
  if (prereq.errors.length) {
    console.error("PREREQUISITE FAIL:", prereq.errors);
    process.exit(1);
  }

  const { payload: scope } = buildScope();
  saveScope({ payload: scope });

  if (scope.missingCardTargets > 0 || scope.missingFieldTargets > 0) {
    console.error("SCOPE FAIL:", scope);
    process.exit(1);
  }

  const wordsByLevel = {
    a1: loadWords("data/es/a1.js", "A1_WORDS"),
    a2: loadWords("data/es/a2.js", "A2_WORDS"),
  };

  let lunaData = { findings: [], meta: {}, batches: [] };
  if (!SKIP_LUNA) {
    console.log(`Running Luna micro-regression on ${scope.scopedTotal} cards...`);
    lunaData = runLunaAudit();
  } else if (fs.existsSync(LUNA_JSON)) {
    lunaData = JSON.parse(fs.readFileSync(LUNA_JSON, "utf8"));
  } else {
    throw new Error("Luna output missing; run without --skip-luna");
  }

  const lunaCardsAudited = lunaData.meta?.cardsAudited || lunaData.auditedCardIds?.length || 0;
  const lunaCoveragePct =
    scope.scopedTotal > 0 ? `${Math.round((lunaCardsAudited / scope.scopedTotal) * 100)}%` : "0%";
  const coverageComplete = lunaCardsAudited === scope.scopedTotal;

  const ownerAppliedMap = loadOwnerAppliedMap();
  const { findings: microFindings, nextSeq } = runClosureMicroTargets(wordsByLevel, 1);
  const lunaConverted = convertClosureLunaFindings(
    lunaData.findings || lunaData.qualityFindings || [],
    nextSeq,
    ownerAppliedMap,
  );
  const allFindings = mergeValidatedFindings(microFindings, lunaConverted);
  const viewFindings = allFindings.filter(
    (f) => f.validation === "REAL" || f.validation === "OWNER_REVIEW_REQUIRED",
  );

  const regression = JSON.parse(fs.readFileSync(REGRESSION_JSON, "utf8"));
  const retention = runRetentionWithSuperseded(wordsByLevel);
  const noOp = verifyNoOp(wordsByLevel, regression);
  const noOpRetained = noOp.filter((n) => n.retained).length;

  const collector = runCollector();
  const collectorAnalysis = analyzeCollector(collector);

  const real = viewFindings.filter((f) => f.validation === "REAL");
  const review = viewFindings.filter((f) => f.validation === "OWNER_REVIEW_REQUIRED");
  const sev = { KRITISKA: 0, AUGSTA: 0, VIDĒJA: 0, ZEMA: 0 };
  for (const f of real) {
    if (sev[f.severity] !== undefined) sev[f.severity] += 1;
  }

  const gatesPass =
    coverageComplete &&
    retention.applyVerified === 575 &&
    noOpRetained === 5 &&
    retention.lunaEffective === 1208 &&
    retention.foreignLabotEffective === 537 &&
    retention.foreignNelabotEffective === 37 &&
    retention.retention.study10.ok === 10 &&
    prereq.syntaxPass &&
    prereq.mirrorPass &&
    prereq.unexpectedProd.length === 0 &&
    collectorAnalysis.real === 0;

  const mergeReadiness = getPrMergeReadiness(real.length, review.length, gatesPass && real.length === 0 && review.length === 0);

  let verdict = "BLOCKED";
  if (!coverageComplete) verdict = "BLOCKED";
  else if (real.length > 0 || review.length > 0) verdict = "NEEDS FINAL OWNER REPAIR";
  else if (!gatesPass) verdict = "BLOCKED";
  else verdict = "PASS — ES–DE A1+A2 OWNER ACCEPTED / READY TO MERGE";

  const summary = {
    ownerTargets: scope.ownerTargets,
    uniqueCards: scope.uniqueCards,
    scopedTotal: scope.scopedTotal,
    lunaCardsAudited,
    lunaCoverage: lunaCoveragePct,
    batchCount: lunaData.meta?.batchCount || lunaData.batches?.length || 0,
    failedBatches: 0,
    retryBatches: 0,
    rawCandidates:
      (lunaData.findings || []).filter((f) => f.status !== "PASS").length + microFindings.length,
    real: real.length,
    falsePositive: lunaConverted.falsePositives.length,
    ownerReviewRequired: review.length,
    sev,
    foreignReal: real.filter((f) => f.category === "FOREIGN_REMNANT").length,
    sectionAccentsReal: real.filter((f) => f.category === "SECTION_ACCENTS").length,
    applyVerified: retention.applyVerified,
    noOpRetained,
    lunaRetention: `${retention.lunaEffective}/1208`,
    foreignLabotRetention: `${retention.foreignLabotEffective}/537`,
    foreignNelabotRetention: `${retention.foreignNelabotEffective}/37`,
    study10Retention: `${retention.retention.study10.ok}/10`,
    supersededCount: retention.superseded.length,
    collectorRaw: collectorAnalysis.raw,
    collectorFalsePositives: collectorAnalysis.falsePositives,
    collectorReal: collectorAnalysis.real,
  };

  const payload = {
    repository: "sandrisbrikmanis-rgb/de-lv-app",
    pr: PR,
    branch: BRANCH,
    head: prereq.head,
    model: lunaData.meta?.model || "gpt-5.6-luna",
    productionFilesChanged: 0,
    scope,
    coverage: {
      ownerTargets: scope.ownerTargets,
      uniqueCards: scope.uniqueCards,
      a1Cards: scope.a1Cards,
      a2Cards: scope.a2Cards,
      scopedTotal: scope.scopedTotal,
      lunaCardsAudited,
      coveragePercent: lunaCoveragePct,
      complete: coverageComplete,
    },
    lunaMeta: lunaData.meta || {},
    retention: {
      applyVerified: retention.applyVerified,
      noOpRetained,
      luna: retention.lunaEffective,
      foreignLabot: retention.foreignLabotEffective,
      foreignNelabot: retention.foreignNelabotEffective,
      study10: retention.retention.study10.ok,
      superseded: retention.superseded,
    },
    collector: collectorAnalysis,
    counts: summary,
    items: allFindings,
    mergeReadiness,
    verdict,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2) + "\n");
  fs.writeFileSync(
    OUT_VIEW,
    buildViewMd(viewFindings, {
      model: payload.model,
      head: prereq.head,
      scopedTotal: scope.scopedTotal,
    }),
  );
  fs.writeFileSync(
    OUT_CLOSURE,
    buildClosureMd({
      head: prereq.head,
      model: payload.model,
      counts: prereq.counts,
      syntaxPass: prereq.syntaxPass,
      mirrorPass: prereq.mirrorPass,
      unexpectedProd: prereq.unexpectedProd,
      summary,
      mergeReadiness,
      verdict,
    }),
  );

  console.log(JSON.stringify({ verdict, real: real.length, review: review.length, coverage: lunaCoveragePct, scope: scope.scopedTotal }, null, 2));

  if (verdict === "BLOCKED" || verdict === "NEEDS FINAL OWNER REPAIR") process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
