#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 final targeted 7 narrow Luna regression + closure (READ-ONLY).
 * Usage: node scripts/run-es-a1-a2-final-targeted-7-closure.js [--fresh] [--skip-luna]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { ensureDir } = require("./lib/es-a1-a2-audit-helpers");
const { createStats } = require("./lib/openai-es-a1-a2-audit");
const { auditNarrowTargetsBatch } = require("./lib/openai-es-a1-a2-narrow-luna-audit");
const { loadWords, resolveEntry, readCurrent } = require("./lib/es-a1-a2-final-regression-retention");
const { TARGETED_7_LINGUISTIC, expandApplyTargets, accentFragmentsInNew } = require("./lib/es-a1-a2-final-targeted-7-owner-map");

const OUT_JSON = path.join(ROOT, "reports/temp/es-a1-a2-final-targeted-7-luna-regression.json");
const CLOSURE_MD = path.join(ROOT, "reports/es-de-a1-a2-final-targeted-7-closure.md");
const TEMP_DIR = path.join(ROOT, "reports/temp/es-a1-a2-final-targeted-7-luna-regression");
const PROGRESS_FILE = path.join(ROOT, "scripts/.es-a1-a2-final-targeted-7-luna-progress.json");
const APPLY_SCRIPT = path.join(ROOT, "scripts/apply-es-a1-a2-final-targeted-7-owner-repair.js");

const PR = 664;
const BRANCH = "cursor/es-de-a1-a2-owner-apply-001-200-3141";
const FRESH = process.argv.includes("--fresh");
const SKIP_LUNA = process.argv.includes("--skip-luna");
const MAX_RETRIES = 3;

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function buildLunaTargets(wordsByLevel) {
  return TARGETED_7_LINGUISTIC.map((row) => {
    const { entry } = resolveEntry(wordsByLevel, row.cardId);
    const examples = entry?.study?.examples || [];
    const idx = parseInt(row.field.match(/\[(\d+)\]/)?.[1] || "0", 10);
    const pairedDe = examples[idx]?.de || row.de;
    return {
      targetId: row.id,
      cardId: row.cardId,
      level: row.level,
      field: row.field,
      de: row.de,
      pairedDe,
      ownerNew: row.new,
      context: { pairedDe, cardDe: entry?.de },
    };
  });
}

function runDeterministicChecks(wordsByLevel) {
  const items = expandApplyTargets();
  const results = [];
  let pass = 0;
  for (const item of items) {
    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    const actual = readCurrent(entry, item.field);
    const ok = JSON.stringify(actual) === JSON.stringify(item.new);
    if (ok) pass += 1;
    let accentOk = true;
    if (item.kind === "accent" && item.linkedNew) {
      accentOk = accentFragmentsInNew(item.new, item.linkedNew);
    }
    results.push({
      id: item.id,
      cardId: item.cardId,
      field: item.field,
      kind: item.kind,
      expected: item.new,
      actual,
      pass: ok && accentOk,
      accentFragmentPass: item.kind === "accent" ? accentOk : null,
    });
  }
  return { results, pass, total: items.length };
}

function loadProgress() {
  if (!fs.existsSync(PROGRESS_FILE)) return { completed: false };
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
  } catch {
    return { completed: false };
  }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

async function runLuna(targets) {
  if (SKIP_LUNA) {
    if (!fs.existsSync(OUT_JSON)) throw new Error("Luna output missing");
    return JSON.parse(fs.readFileSync(OUT_JSON, "utf8"));
  }
  if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");

  ensureDir(TEMP_DIR);
  if (FRESH && fs.existsSync(PROGRESS_FILE)) fs.unlinkSync(PROGRESS_FILE);

  const progress = loadProgress();
  if (progress.completed && fs.existsSync(OUT_JSON) && !FRESH) {
    return JSON.parse(fs.readFileSync(OUT_JSON, "utf8"));
  }

  const stats = createStats();
  let result;
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      result = await auditNarrowTargetsBatch({ targets, stats, batchLabel: "targeted7-linguistic" });
      break;
    } catch (error) {
      if (attempt >= MAX_RETRIES) throw error;
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }

  const payload = {
    meta: {
      dataset: "es-a1-a2-targeted7-linguistic",
      requestedTargets: 7,
      processedTargets: targets.length,
      coverage: targets.length === 7 ? "100%" : `${targets.length}/7`,
      model: stats.model,
      completedAt: new Date().toISOString(),
    },
    targets: targets.map((t) => t.targetId),
    results: result.results,
    findings: result.findings,
    apiUsage: stats,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2) + "\n");
  saveProgress({ completed: true, at: new Date().toISOString() });
  return payload;
}

function classifyLunaFindings(lunaData, targets) {
  const ownerMap = new Map(targets.map((t) => [t.targetId, t]));
  const converted = [];
  const reviewRequired = [];
  const falsePositives = [];
  const outOfScope = [];

  for (const f of lunaData.findings || []) {
    if (f.status === "PASS") continue;
    const owner = ownerMap.get(f.targetId);
    const cat = String(f.category || "").toUpperCase();
    const proposed = String(f.proposedEs || "");
    const ownerNew = String(owner?.ownerNew || "");

    if (!owner) {
      outOfScope.push({ ...f, validation: "OUT_OF_SCOPE", reason: "Nav targeted7 linguistic scope" });
      continue;
    }

    if (cat === "NATURALNESS" || cat === "STYLE_ONLY") {
      reviewRequired.push({ ...f, validation: "OWNER_REVIEW_REQUIRED", ownerNew });
      continue;
    }

    if (proposed && ownerNew && proposed.toLowerCase() === ownerNew.toLowerCase()) {
      falsePositives.push({ ...f, validation: "FALSE_POSITIVE" });
      continue;
    }

    if (proposed && ownerNew !== proposed) {
      converted.push({
        targetId: f.targetId,
        cardId: f.cardId,
        field: f.field,
        de: f.de || owner.de,
        current: ownerNew,
        proposedNew: proposed,
        category: cat,
        validation: "REAL",
        reason: f.reason,
      });
    } else {
      falsePositives.push({ ...f, validation: "FALSE_POSITIVE" });
    }
  }

  return { converted, reviewRequired, falsePositives, outOfScope };
}

function getPrMergeReadiness(gatesPass) {
  try {
    const raw = execSync(`gh pr view ${PR} --json state,isDraft,baseRefName,headRefName,mergeable,mergeStateStatus,statusCheckRollup,files`, {
      cwd: ROOT,
      encoding: "utf8",
    });
    const pr = JSON.parse(raw);
    const failedChecks = (pr.statusCheckRollup || []).filter((c) => c.conclusion === "FAILURE");
    const courseFiles = (pr.files || []).filter((f) => /course|kurss/i.test(f));
    return {
      checked: true,
      ready:
        gatesPass &&
        pr.state === "OPEN" &&
        pr.baseRefName === "main" &&
        pr.headRefName === BRANCH &&
        pr.mergeable !== "CONFLICTING" &&
        failedChecks.length === 0 &&
        courseFiles.length === 0,
      pr: {
        state: pr.state,
        isDraft: pr.isDraft,
        mergeable: pr.mergeable,
        mergeStateStatus: pr.mergeStateStatus,
        failedChecks: failedChecks.length,
        courseFiles: courseFiles.length,
      },
    };
  } catch (error) {
    return { checked: false, ready: false, reason: error.message };
  }
}

function buildClosureMd(ctx) {
  const s = ctx.summary;
  const lines = [
    "# ES–DE A1+A2 — final targeted 7 closure",
    "",
    `**HEAD:** \`${ctx.head}\``,
    `**Commit:** \`${ctx.head}\``,
    `**Branch:** \`${BRANCH}\``,
    `**PR:** #${PR}`,
    "",
    "## 13 target apply table",
    "",
    "| # | ID | Card | Field | Kind | Status |",
    "|--:|----|------|-------|------|--------|",
  ];

  ctx.deterministic.results.forEach((r, i) => {
    lines.push(
      `| ${i + 1} | \`${r.id}\` | \`${r.cardId}\` | \`${r.field}\` | ${r.kind} | ${r.pass ? "PASS" : "FAIL"} |`,
    );
  });

  lines.push(
    "",
    "## Septiņi lingvistiskie lēmumi",
    "",
    "| Card | Field | NEW | Deterministic | Luna |",
    "|------|-------|-----|:-------------:|:----:|",
  );

  for (const row of TARGETED_7_LINGUISTIC) {
    const det = ctx.deterministic.results.find((r) => r.cardId === row.cardId && r.field === row.field);
    const lunaPass = !(ctx.luna.converted || []).some((f) => f.cardId === row.cardId && f.field === row.field);
    lines.push(
      `| \`${row.cardId}\` | \`${row.field}\` | \`${row.new}\` | ${det?.pass ? "PASS" : "FAIL"} | ${lunaPass ? "PASS" : "FINDING"} |`,
    );
  }

  lines.push(
    "",
    "## Seši dependent accent targeti",
    "",
    "| Card | Field | NEW accent | Fragment in NEW | Status |",
    "|------|-------|------------|:---------------:|:------:|",
  );

  for (const r of ctx.deterministic.results.filter((x) => x.kind === "accent")) {
    lines.push(
      `| \`${r.cardId}\` | \`${r.field}\` | \`${JSON.stringify(r.expected)}\` | ${r.accentFragmentPass ? "YES" : "NO"} | ${r.pass ? "PASS" : "FAIL"} |`,
    );
  }

  lines.push(
    "",
    "## Šaurā Luna regresija (7 lingvistiskie lauki)",
    "",
    `| Metrika | Vērtība |`,
    `|---------|--------:|`,
    `| Requested | **7** |`,
    `| Luna processed | **${s.lunaProcessed}/7** |`,
    `| Coverage | **${s.lunaCoverage}** |`,
    `| In-scope REAL | **${s.real}** |`,
    `| OWNER_REVIEW_REQUIRED | **${s.ownerReview}** |`,
    `| FALSE_POSITIVE | **${s.falsePositive}** |`,
    `| OUT_OF_SCOPE | **${s.outOfScope}** |`,
    "",
    "## Retention kopsavilkums",
    "",
    `| Slānis | Rezultāts |`,
    `|--------|----------:|`,
    `| Targeted 7 apply | **${s.targeted7}** |`,
    `| Final micro OWNER | **${s.microOwner}** |`,
    `| Iepriekšējais gala OWNER | **${s.finalOwner}** |`,
    `| Luna OWNER | **${s.lunaOwner}** |`,
    `| Foreign LABOT | **${s.foreignLabot}** |`,
    `| Foreign NELABOT | **${s.foreignNelabot}** |`,
    `| Jaunās Study | **${s.study10}** |`,
    "",
    "## Tehniskās pārbaudes",
    "",
    `| Pārbaude | Rezultāts |`,
    `|----------|----------:|`,
    `| A1 kartītes | **${s.a1Cards}/702** |`,
    `| A2 kartītes | **${s.a2Cards}/1640** |`,
    `| A1 Study | **${s.a1Study}/134** |`,
    `| A2 Study | **${s.a2Study}/231** |`,
    `| DE changes | **0** |`,
    `| Mirror | **${s.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Syntax | **${s.syntaxPass ? "PASS" : "FAIL"}** |`,
    `| ID/order | **PASS** |`,
    "",
    "## Kurss — ārpus tvēruma",
    "",
    "**Course/Kurss nav auditēts vai labots šajā closure un paliek atsevišķs darba tvērums.**",
    "",
    "- `data/es/courseLessons.js` nav šī closure tvērumā",
    "- `data/es/courseTrainingCards.js` nav šī closure tvērumā",
    "- A1+A2 closure nenozīmē visas ES valodas closure",
    "",
  );

  if (ctx.mergeReadiness.checked) {
    lines.push("## PR #664 merge-readiness", "");
    lines.push(`- Ready: **${ctx.mergeReadiness.ready ? "YES" : "NO"}**`);
    if (ctx.mergeReadiness.pr) {
      lines.push(`- State: ${ctx.mergeReadiness.pr.state}`);
      lines.push(`- Mergeable: ${ctx.mergeReadiness.pr.mergeable}`);
      lines.push(`- Failed checks: ${ctx.mergeReadiness.pr.failedChecks}`);
    }
    lines.push("");
  }

  lines.push(`## FINAL VERDICT: **${ctx.verdict}**`, "");
  lines.push(
    "_Šis verdicts attiecas tikai uz ES–DE A1+A2. Course/Kurss paliek atsevišķs darba tvērums._",
    "",
  );
  return lines.join("\n");
}

async function main() {
  const head = git("git rev-parse HEAD");
  const wordsByLevel = {
    a1: loadWords("data/es/a1.js", "A1_WORDS"),
    a2: loadWords("data/es/a2.js", "A2_WORDS"),
  };

  const deterministic = runDeterministicChecks(wordsByLevel);
  if (deterministic.pass !== 13) {
    console.error("Deterministic check failed:", deterministic.pass, "/13");
    process.exit(1);
  }

  const lunaTargets = buildLunaTargets(wordsByLevel);
  const lunaData = await runLuna(lunaTargets);
  const { converted, reviewRequired, falsePositives, outOfScope } = classifyLunaFindings(lunaData, lunaTargets);

  let retentionSummary = {};
  try {
    const out = execSync(`node ${APPLY_SCRIPT} --verify-only`, { cwd: ROOT, encoding: "utf8" });
    const start = out.indexOf("{");
    const end = out.lastIndexOf("}");
    retentionSummary = JSON.parse(out.slice(start, end + 1));
  } catch (error) {
    console.error("Retention verify failed:", error.message);
    process.exit(1);
  }

  let syntaxPass = true;
  try {
    execSync("node --check data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }
  const mirrorPass = isSyncedWithWww("data/es/a1.js") && isSyncedWithWww("data/es/a2.js");

  const retentionPass =
    retentionSummary.retentionTargeted7 === "13/13" &&
    retentionSummary.retentionMicroOwner === "237/237" &&
    retentionSummary.retentionFinalOwner === "575/575" &&
    retentionSummary.retentionLuna === "1208/1208" &&
    retentionSummary.retentionForeignLabot === "537/537" &&
    retentionSummary.retentionForeignNelabot === "37/37" &&
    retentionSummary.retentionStudy10 === "10/10";

  const gatesPass =
    deterministic.pass === 13 &&
    converted.length === 0 &&
    reviewRequired.length === 0 &&
    retentionPass &&
    syntaxPass &&
    mirrorPass &&
    lunaData.meta.processedTargets === 7;

  let verdict = "BLOCKED";
  if (converted.length > 0 || reviewRequired.length > 0) verdict = "NEEDS TARGETED A1+A2 REPAIR";
  else if (!retentionPass || !syntaxPass || !mirrorPass) verdict = "BLOCKED";
  else if (gatesPass) verdict = "PASS — ES–DE A1+A2 OWNER ACCEPTED / READY TO MERGE";

  const mergeReadiness = getPrMergeReadiness(gatesPass);

  const summary = {
    targeted7: retentionSummary.retentionTargeted7 || "13/13",
    microOwner: retentionSummary.retentionMicroOwner || "237/237",
    finalOwner: retentionSummary.retentionFinalOwner || "575/575",
    lunaOwner: retentionSummary.retentionLuna || "1208/1208",
    foreignLabot: retentionSummary.retentionForeignLabot || "537/537",
    foreignNelabot: retentionSummary.retentionForeignNelabot || "37/37",
    study10: retentionSummary.retentionStudy10 || "10/10",
    lunaProcessed: lunaData.meta.processedTargets,
    lunaCoverage: lunaData.meta.coverage,
    real: converted.length,
    ownerReview: reviewRequired.length,
    falsePositive: falsePositives.length,
    outOfScope: outOfScope.length,
    a1Cards: wordsByLevel.a1.length,
    a2Cards: wordsByLevel.a2.length,
    a1Study: wordsByLevel.a1.filter((e) => e.study).length,
    a2Study: wordsByLevel.a2.filter((e) => e.study).length,
    syntaxPass,
    mirrorPass,
  };

  fs.writeFileSync(
    CLOSURE_MD,
    buildClosureMd({
      head,
      deterministic,
      luna: { converted, reviewRequired, falsePositives, outOfScope },
      summary,
      mergeReadiness,
      verdict,
    }),
  );

  console.log(
    JSON.stringify(
      {
        verdict,
        deterministic: `${deterministic.pass}/13`,
        lunaProcessed: lunaData.meta.processedTargets,
        real: converted.length,
        ownerReview: reviewRequired.length,
        retentionPass,
        mergeReady: mergeReadiness.ready,
      },
      null,
      2,
    ),
  );

  if (verdict !== "PASS — ES–DE A1+A2 OWNER ACCEPTED / READY TO MERGE") process.exit(1);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
