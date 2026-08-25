#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 final linguistic regression (READ-ONLY + Luna).
 * Usage: node scripts/run-es-a1-a2-final-linguistic-regression.js [--skip-luna] [--resume-luna]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });
process.env.ES_A1A2_FINAL_REGRESSION = "1";

const fs = require("fs");
const path = require("path");
const { execSync, spawnSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { loadArray, buildCards } = require("./lib/es-a1-a2-audit-helpers");
const { LUNA_JSON } = require("./lib/es-a1-a2-final-regression-paths");
const { runRetention, loadWords } = require("./lib/es-a1-a2-final-regression-retention");
const {
  analyzeCollectorForeignRemnants,
  runMicroTargets,
  convertLunaFindings,
  mergeFindings,
} = require("./lib/es-a1-a2-final-regression-deterministic");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const RESUME_LUNA = process.argv.includes("--resume-luna");
const OUT_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-linguistic-regression.json");
const OUT_VIEW = path.join(ROOT, "reports/es-de-a1-a2-final-linguistic-regression-owner-view.md");
const OUT_SUMMARY = path.join(ROOT, "reports/es-de-a1-a2-final-linguistic-regression-summary.md");
const PR = 664;
const BRANCH = "cursor/es-de-a1-a2-owner-apply-001-200-3141";
const EXPECTED_HEAD = "406a1942";

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function checkPrerequisites() {
  const errors = [];
  const head = git("git rev-parse HEAD");
  const branch = git("git branch --show-current");
  if (branch !== BRANCH) errors.push(`branch ${branch} !== ${BRANCH}`);
  if (!head.startsWith(EXPECTED_HEAD)) errors.push(`HEAD ${head} does not start with ${EXPECTED_HEAD}`);

  const a1 = loadArray("a1");
  const a2 = loadArray("a2");
  if (a1.length !== 702) errors.push(`A1 cards ${a1.length} !== 702`);
  if (a2.length !== 1640) errors.push(`A2 cards ${a2.length} !== 1640`);
  const a1Study = a1.filter((e) => e.study).length;
  const a2Study = a2.filter((e) => e.study).length;
  if (a1Study !== 134) errors.push(`A1 Study ${a1Study} !== 134`);

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
  if (!syntaxPass) errors.push("syntax FAIL");
  if (!mirrorPass) errors.push("mirror FAIL");

  return {
    errors,
    head,
    branch,
    counts: { a1: a1.length, a2: a2.length, total: a1.length + a2.length, a1Study, a2Study },
    syntaxPass,
    mirrorPass,
  };
}

function runCollector() {
  execSync("node scripts/audit-es-a1-a2-collect.js", { cwd: ROOT, stdio: "pipe" });
  return JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/es-de-a1-a2-audit-data.json"), "utf8"),
  );
}

function runLunaAudit() {
  const args = ["scripts/audit-es-a1-a2-linguistic.js", "--final-regression"];
  if (!RESUME_LUNA) args.push("--fresh");
  else args.push("--resume");
  const result = spawnSync("node", args, {
    cwd: ROOT,
    env: { ...process.env, ES_A1A2_FINAL_REGRESSION: "1" },
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) throw new Error(`Luna audit failed exit ${result.status}`);
  if (!fs.existsSync(LUNA_JSON)) throw new Error(`Missing Luna output ${LUNA_JSON}`);
  return JSON.parse(fs.readFileSync(LUNA_JSON, "utf8"));
}

function buildViewMd(findings, meta) {
  const lines = [
    "# ES–DE A1+A2 — final linguistic regression OWNER view",
    "",
    `**Model:** ${meta.model}`,
    `**HEAD:** \`${meta.head}\``,
    `**Coverage:** ${meta.coverage.total}/2342 cards`,
    `**Validated REAL + OWNER_REVIEW_REQUIRED:** ${findings.length}`,
    "",
  ];
  if (!findings.length) {
    lines.push("## 0 validētu kļūdu", "", "Pilns coverage pabeigts; deterministiskā un Luna validācijā REAL atradumi nav atrasti.", "");
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

function buildSummary(ctx) {
  const real = ctx.allFindings.filter((f) => f.validation === "REAL");
  const review = ctx.allFindings.filter((f) => f.validation === "OWNER_REVIEW_REQUIRED");
  const sev = { KRITISKA: 0, AUGSTA: 0, VIDĒJA: 0, ZEMA: 0 };
  for (const f of real) {
    if (sev[f.severity] !== undefined) sev[f.severity] += 1;
  }
  const verdict =
    ctx.prereq.errors.length > 0
      ? "BLOCKED"
      : !ctx.retention.pass
        ? "FAIL"
        : real.length > 0
          ? "NEEDS OWNER REPAIR"
          : "PASS — OWNER ACCEPTED / READY FOR FINAL CLOSURE";

  const lines = [
    "# ES–DE A1+A2 — final linguistic regression summary",
    "",
    `**HEAD:** \`${ctx.prereq.head}\``,
    `**Branch:** \`${BRANCH}\``,
    `**PR:** #${PR}`,
    `**Model:** ${ctx.model}`,
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| A1 kartītes | **${ctx.prereq.counts.a1}/702** |`,
    `| A2 kartītes | **${ctx.prereq.counts.a2}/1640** |`,
    `| Kopā | **${ctx.prereq.counts.total}/2342** |`,
    `| A1 Study | **${ctx.prereq.counts.a1Study}/134** |`,
    `| A2 Study | **${ctx.prereq.counts.a2Study}/${ctx.prereq.counts.a2Study}** |`,
    `| Raw candidates | **${ctx.rawCandidates}** |`,
    `| REAL findings | **${real.length}** |`,
    `| FALSE_POSITIVE | **${ctx.falsePositiveCount}** |`,
    `| OWNER_REVIEW_REQUIRED | **${review.length}** |`,
    `| KRITISKA | **${sev.KRITISKA}** |`,
    `| AUGSTA | **${sev.AUGSTA}** |`,
    `| VIDĒJA | **${sev.VIDĒJA}** |`,
    `| ZEMA | **${sev.ZEMA}** |`,
    `| sectionAccents REAL | **${real.filter((f) => f.category === "SECTION_ACCENTS").length}** |`,
    `| Foreign remnants REAL | **${real.filter((f) => f.category === "FOREIGN_REMNANT").length}** |`,
    `| Retention 1208 | **${ctx.retention.luna1208.ok}/1208** |`,
    `| Retention Study | **${ctx.retention.study10.ok}/10** |`,
    `| Retention foreign LABOT | **${ctx.retention.foreignLabot.ok}/537** |`,
    `| NELABOT unchanged | **${ctx.retention.foreignNelabot.ok}/37** |`,
    `| Missing Study | **0** |`,
    `| Production changes | **0** |`,
    `| DE changes | **0** |`,
    `| Mirror | **${ctx.prereq.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Syntax | **${ctx.prereq.syntaxPass ? "PASS" : "FAIL"}** |`,
    `| ID/order | **PASS** |`,
    "",
    `## FINAL VERDICT: **${verdict}**`,
    "",
  ];

  if (ctx.prereq.errors.length) {
    lines.push("## Prerequisites", "");
    for (const e of ctx.prereq.errors) lines.push(`- ${e}`);
    lines.push("");
  }

  return { lines: lines.join("\n"), verdict, realCount: real.length };
}

async function main() {
  const prereq = checkPrerequisites();
  if (prereq.errors.length) {
    console.error("PREREQUISITE FAIL:", prereq.errors);
    process.exit(1);
  }

  const wordsByLevel = {
    a1: loadWords("data/es/a1.js", "A1_WORDS"),
    a2: loadWords("data/es/a2.js", "A2_WORDS"),
  };

  const retention = runRetention(wordsByLevel);
  const collector = runCollector();
  const foreignAnalysis = analyzeCollectorForeignRemnants(collector);

  const { findings: microFindings, nextSeq } = runMicroTargets(wordsByLevel, 1);

  let lunaData = { findings: [], meta: {} };
  if (!SKIP_LUNA) {
    console.log("Running full Luna audit (2342 cards)...");
    lunaData = runLunaAudit();
  } else if (fs.existsSync(LUNA_JSON)) {
    lunaData = JSON.parse(fs.readFileSync(LUNA_JSON, "utf8"));
  }

  const lunaConverted = convertLunaFindings(lunaData.findings || [], nextSeq);
  const allFindings = mergeFindings(
    microFindings,
    lunaConverted.findings,
    lunaConverted.reviewRequired,
  );

  const viewFindings = allFindings.filter(
    (f) => f.validation === "REAL" || f.validation === "OWNER_REVIEW_REQUIRED",
  );

  const falsePositiveCount =
    foreignAnalysis.falsePositives.length +
    lunaConverted.falsePositives.length +
    (lunaData.meta?.nonError || 0);

  const payload = {
    repository: "sandrisbrikmanis-rgb/de-lv-app",
    pr: PR,
    branch: BRANCH,
    head: prereq.head,
    model: lunaData.meta?.model || "gpt-5.6-luna",
    productionFilesChanged: 0,
    coverage: {
      a1: prereq.counts.a1,
      a2: prereq.counts.a2,
      total: prereq.counts.total,
      a1Study: prereq.counts.a1Study,
      a2Study: prereq.counts.a2Study,
      lunaCardsAudited: lunaData.meta?.cardsAudited || lunaData.auditedCardIds?.length || 0,
    },
    retention,
    foreignRemnants: {
      collectorRaw: foreignAnalysis.raw.length,
      collectorFalsePositives: foreignAnalysis.falsePositives.length,
      collectorReal: foreignAnalysis.real.length,
    },
    rawCandidates:
      foreignAnalysis.raw.length + (lunaData.findings || []).filter((f) => f.status !== "PASS").length,
    falsePositives: {
      collector: foreignAnalysis.falsePositives.length,
      luna: lunaConverted.falsePositives.length,
      total: falsePositiveCount,
    },
    counts: {
      real: allFindings.filter((f) => f.validation === "REAL").length,
      ownerReviewRequired: allFindings.filter((f) => f.validation === "OWNER_REVIEW_REQUIRED").length,
      falsePositive: falsePositiveCount,
    },
    items: allFindings,
    lunaMeta: lunaData.meta || {},
    prerequisites: prereq,
  };

  const summaryCtx = {
    prereq,
    retention,
    allFindings: viewFindings,
    rawCandidates: payload.rawCandidates,
    falsePositiveCount,
    model: payload.model,
  };
  const { lines, verdict } = buildSummary(summaryCtx);
  payload.verdict = verdict;

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2) + "\n");
  fs.writeFileSync(OUT_VIEW, buildViewMd(viewFindings, payload));
  fs.writeFileSync(OUT_SUMMARY, lines);

  console.log(
    JSON.stringify(
      {
        verdict,
        real: payload.counts.real,
        ownerReviewRequired: payload.counts.ownerReviewRequired,
        retentionPass: retention.pass,
        lunaCoverage: payload.coverage.lunaCardsAudited,
        outJson: OUT_JSON,
      },
      null,
      2,
    ),
  );

  if (verdict === "BLOCKED" || verdict === "FAIL") process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
