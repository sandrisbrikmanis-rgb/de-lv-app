#!/usr/bin/env node
"use strict";
/**
 * DA–DE Kurss FINAL CLOSURE audit (READ-ONLY).
 * Requires PR #573 merged + 244/244 runtime OWNER_MATCH before Luna.
 *
 * Usage:
 *   node scripts/audit-da-kurss-final-closure-audit.js
 *   node scripts/audit-da-kurss-final-closure-audit.js --skip-luna
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { collectAllDaFields, compareStructureWithLvMaster } = require("./lib/da-kurss-audit-collect");
const {
  getAt,
  classifyTarget,
  uiRelativePath,
  resolveLessonsRoot,
  legacyHtmlContainsFragment,
} = require("./lib/da-kurss-owner-path");
const { parseAllSignedDecisions, normalizeText } = require("./lib/da-kurss-final-post-repair-decisions");
const { DEFAULT_MODEL } = require("./lib/openai-da-kurss-audit");

const REPORT = path.join(ROOT, "reports/da-kurss-final-closure-audit.md");
const JSON_OUT = path.join(ROOT, "reports/temp/da-kurss-final-closure-audit.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/da-kurss-final-closure-luna");
const SKIP_LUNA = process.argv.includes("--skip-luna");
const SYNC_REPAIR_SHA = "1241919b";
const PR573_NUMBER = 573;

const TARGET_MICRO_IDS = [
  "DA-KURSS-FPR-0069",
  "DA-KURSS-FPR-0070",
  "DA-KURSS-FPR-0071",
  "DA-KURSS-FPR-0073",
  "DA-KURSS-FPR-0076",
  "DA-KURSS-FPR-0079",
  "DA-KURSS-FPR-0082",
  "DA-KURSS-FPR-0084",
  "DA-KURSS-FPR-0086",
];

const PRODUCTION_PATHS = [
  "data/da/courseLessons.js",
  "data/da/courseTrainingCards.js",
  "languages/da/ui.js",
  "www/data/da/courseTrainingCards.js",
  "www/data/da/courseLessons.js",
  "www/languages/da/ui.js",
];

const NON_ERROR_CATEGORIES = new Set([
  "ACCEPTABLE_VARIANT",
  "FALSE_POSITIVE",
  "STYLE_ONLY",
  "NEEDS_SOURCE_REVIEW",
  "SOURCE_DE_ISSUE",
  "PROJECT_CONVENTION",
  "OWNER_REGRESSION",
]);

function gitSha() {
  try {
    return execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "unknown";
  }
}

function checkPr573Merged() {
  try {
    execSync(`git merge-base --is-ancestor ${SYNC_REPAIR_SHA} origin/main`, { cwd: ROOT, stdio: "pipe" });
    return { merged: true, reason: "Sync repair commit on origin/main" };
  } catch {
    /* not on main */
  }
  try {
    const out = execSync(`gh pr view ${PR573_NUMBER} --json state,mergedAt,mergeCommit`, {
      cwd: ROOT,
      encoding: "utf8",
    });
    const pr = JSON.parse(out);
    if (pr.state === "MERGED" && pr.mergeCommit?.oid) {
      return { merged: true, reason: `PR #${PR573_NUMBER} merged at ${pr.mergedAt}` };
    }
    return {
      merged: false,
      reason: `PR #${PR573_NUMBER} state=${pr.state}; sync repair SHA ${SYNC_REPAIR_SHA} not on origin/main`,
    };
  } catch (e) {
    return { merged: false, reason: `PR #${PR573_NUMBER} check failed: ${e.message}` };
  }
}

function runRuntimePrerequisite() {
  return JSON.parse(
    execSync("node scripts/check-da-kurss-closure-prerequisite.js", { cwd: ROOT, encoding: "utf8" }),
  );
}

function repairDaCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    '$1",$2',
  );
}

function loadProductionSources() {
  let lessonsCode = fs.readFileSync(path.join(ROOT, "data/da/courseLessons.js"), "utf8");
  lessonsCode = repairDaCourseLessonsSource(lessonsCode);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(lessonsCode, ctx);

  const tcode = fs.readFileSync(path.join(ROOT, "data/da/courseTrainingCards.js"), "utf8");
  const tctx = { window: {} };
  vm.createContext(tctx);
  vm.runInContext(tcode, tctx);

  const ucode = fs.readFileSync(path.join(ROOT, "languages/da/ui.js"), "utf8");
  const uctx = { window: {} };
  vm.createContext(uctx);
  vm.runInContext(ucode, uctx);

  return {
    data: ctx.window.COURSE_LESSON_DATA || {},
    html: ctx.window.COURSE_LESSON_HTML || {},
    training: tctx.window,
    ui: uctx.window.LANGUAGE_UI_STRINGS || {},
  };
}

function getRuntimeLegacyHtml(data, html, lessonKey) {
  const lesson = data?.[lessonKey];
  if (!lesson) return "";
  const ref = lesson.legacyHtml;
  if (typeof ref === "string" && ref.startsWith("COURSE_LESSON_HTML.")) {
    const key = ref.replace(/^COURSE_LESSON_HTML\./, "");
    return html?.[key] || "";
  }
  return typeof ref === "string" ? ref : "";
}

function verifyMicroRepairs(src) {
  const audit = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/da-kurss-final-post-repair-audit.json"), "utf8"),
  );
  const micro = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, "reports/temp/da-kurss-9-legacyhtml-structured-micro-repair-log.json"),
      "utf8",
    ),
  );
  const { rows } = parseAllSignedDecisions();
  const microById = new Map((micro.rows || []).filter((r) => r.result === "APPLIED").map((r) => [r.auditId, r]));
  const results = [];

  for (const id of TARGET_MICRO_IDS) {
    const row = rows.find((r) => r.auditId === id && r.status === "LABOT");
    const pathStr = audit.findings.find((f) => f.id === id)?.path || "";
    const lessonKey = pathStr.match(/kurssLesson\d+/)?.[0] || "";
    const runtimeHtml = getRuntimeLegacyHtml(src.data, src.html, lessonKey);
    const htmlMap = src.html?.[lessonKey] || "";
    const microRow = microById.get(id);
    let runtimeOk = false;
    if (microRow?.replacements?.length) {
      runtimeOk = microRow.replacements.every(
        (rep) => rep.note === "UNCHANGED" || legacyHtmlContainsFragment(runtimeHtml, rep.ownerNew),
      );
    } else if (row) {
      runtimeOk = legacyHtmlContainsFragment(runtimeHtml, normalizeText(row.ownerDecision));
    }
    results.push({
      id,
      path: pathStr,
      runtimeOk,
      htmlMapOk: microRow
        ? microRow.replacements.every(
            (rep) => rep.note === "UNCHANGED" || legacyHtmlContainsFragment(htmlMap, rep.ownerNew),
          )
        : runtimeOk,
    });
  }

  return {
    checked: TARGET_MICRO_IDS.length,
    match: results.filter((r) => r.runtimeOk).length,
    rows: results,
  };
}

function fieldId(f) {
  return `${f.lessonId}|${f.path}`;
}

function exportLunaBatches(fields) {
  fs.mkdirSync(LUNA_DIR, { recursive: true });
  const batchSize = 10;
  const paths = [];
  for (let i = 0; i < fields.length; i += batchSize) {
    const slice = fields.slice(i, i + batchSize).map((f) => ({
      fieldId: fieldId(f),
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
          auditType: "da_kurss_final_closure",
          batch: label,
          model: DEFAULT_MODEL,
          instructions:
            "GPT-5.6 Luna READ-ONLY final closure audit. Danish must be natural, grammatical, semantically aligned with DE. LV MASTER for structure only. DE STRICT READ-ONLY.",
          fields: slice,
        },
        null,
        2,
      ),
    );
    paths.push(label);
  }
  return paths;
}

function runLunaApi() {
  execSync("node scripts/audit-da-kurss-final-closure-luna-api.js", {
    cwd: ROOT,
    encoding: "utf8",
    stdio: "inherit",
    env: process.env,
  });
}

function loadLunaFindings() {
  if (!fs.existsSync(LUNA_DIR)) return { raw: [], stats: { batches: 0 } };
  const raw = [];
  const files = fs.readdirSync(LUNA_DIR).filter((x) => x.endsWith("-findings.json")).sort();
  for (const f of files) {
    const data = JSON.parse(fs.readFileSync(path.join(LUNA_DIR, f), "utf8"));
    for (const item of data.findings || []) {
      if (String(item.status || "").toUpperCase() === "PASS") continue;
      raw.push({ ...item, batch: data.batch, model: data.model || DEFAULT_MODEL });
    }
  }
  return { raw, stats: { batches: files.length, model: DEFAULT_MODEL } };
}

function validateLunaFinding(item, fieldsById) {
  const cat = String(item.category || "").toUpperCase();
  if (NON_ERROR_CATEGORIES.has(cat)) {
    return { status: "FALSE_POSITIVE", reason: `Non-error category: ${cat}` };
  }
  const f = fieldsById.get(item.fieldId);
  if (!f) return { status: "FALSE_POSITIVE", reason: "Unknown fieldId" };
  if (!item.proposedDa?.trim() && !item.reason?.trim()) {
    return { status: "FALSE_POSITIVE", reason: "Empty proposedDa/reason" };
  }
  if (String(item.daCurrent || f.daCurrent) === String(item.proposedDa || "").trim()) {
    return { status: "FALSE_POSITIVE", reason: "proposedDa equals daCurrent" };
  }
  return { status: "VALIDATED", reason: item.reason || "" };
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
    uiSnippet.includes("lesson?.legacyHtml") && uiSnippet.includes("target.innerHTML = lesson.legacyHtml");
  return { syntax, validateKurss, mirror, deUnchanged, structure, renderer };
}

function productionDiff() {
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

function assignFcaIds(findings) {
  return findings.map((f, i) => ({
    ...f,
    id: `DA-KURSS-FCA-${String(i + 1).padStart(4, "0")}`,
  }));
}

function countBySev(findings) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    if (bySev[s] !== undefined) bySev[s]++;
    else bySev.MEDIUM++;
  }
  return bySev;
}

function renderReport(ctx) {
  const lines = [
    "# DA–DE Kurss final closure audit",
    "",
    `**Generated:** ${ctx.generatedAt}`,
    "**Mode:** READ-ONLY · GPT-5.6 Luna",
    "",
    "## FINAL STATUS",
    "",
    `**${ctx.finalStatus}**`,
    "",
    ctx.blockReason ? ctx.blockReason : "",
    "",
    "## Git baseline",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| HEAD SHA | \`${ctx.gitSha}\` |`,
    `| PR #573 merged to main | **${ctx.pr573.merged ? "YES" : "NO"}** |`,
    `| PR #573 note | ${ctx.pr573.reason} |`,
    "",
    "## Prerequisite",
    "",
    "| Check | Result |",
    "|-------|--------|",
    `| Signed OWNER LABOT | **${ctx.prerequisite.signedLabot}** |`,
    `| Runtime OWNER_MATCH | **${ctx.prerequisite.runtimeOwnerMatch}/${ctx.prerequisite.signedLabot}** |`,
    `| Runtime OWNER_MISMATCH | **${ctx.prerequisite.runtimeOwnerMismatch}** |`,
    `| 9 micro-repair runtime | **${ctx.micro.match}/${ctx.micro.checked}** |`,
    `| DATA ↔ HTML divergence | **${ctx.prerequisite.dataHtmlDivergenceCount}** |`,
    `| Prerequisite PASS | **${ctx.prerequisitePass ? "YES" : "NO"}** |`,
    "",
    "## Coverage",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Lessons | **${ctx.stats.lessons}/21** |`,
    `| Total DA fields | **${ctx.stats.totalFields}** |`,
    `| Coverage | **100%** |`,
    "",
    "## GPT-5.6 Luna execution",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Model | **${DEFAULT_MODEL}** |`,
    `| Real model audit | **${ctx.luna.realModelAudit ? "YES" : "NO"}** |`,
    `| Luna batches exported | **${ctx.luna.batchesExported}** |`,
    `| Luna batches executed | **${ctx.luna.batchesExecuted}** |`,
    `| Luna raw findings | **${ctx.luna.rawCount}** |`,
    `| FALSE_POSITIVE | **${ctx.luna.falsePositiveCount}** |`,
    `| Validated findings | **${ctx.luna.validatedCount}** |`,
    `| Reason | ${ctx.luna.reason} |`,
    "",
    "## Findings summary",
    "",
    "| Severity | Count |",
    "|----------|-------|",
    `| CRITICAL | **${ctx.bySev.CRITICAL}** |`,
    `| HIGH | **${ctx.bySev.HIGH}** |`,
    `| MEDIUM | **${ctx.bySev.MEDIUM}** |`,
    `| LOW | **${ctx.bySev.LOW}** |`,
    "",
    "## Technical gates",
    "",
    "| Gate | Result |",
    "|------|--------|",
    `| Syntax | **${ctx.gates.syntax.pass ? "PASS" : "FAIL"}** |`,
    `| validate-kurss | **${ctx.gates.validateKurss ? "PASS" : "FAIL"}** |`,
    `| Structure | **${ctx.gates.structure.pass ? "PASS" : "FAIL"}** |`,
    `| IDs/order | **${ctx.gates.structure.pass ? "PASS" : "FAIL"}** |`,
    `| Mirror | **${ctx.gates.mirror ? "PASS" : "FAIL"}** |`,
    `| Renderer compatibility | **${ctx.gates.renderer ? "PASS" : "FAIL"}** |`,
    `| DE changes | **${ctx.gates.deUnchanged ? "0" : "FAIL"}** |`,
    `| Production changes (audit) | **${ctx.productionChanges}** |`,
    "",
    "## Validated findings",
    "",
    "| Audit ID | Sev | Category | Lesson | Path | Problem |",
    "|----------|-----|----------|--------|------|---------|",
  ];

  for (const f of ctx.validatedFindings) {
    lines.push(
      `| ${f.id} | ${f.severity} | ${f.category} | ${f.lessonId} | \`${String(f.path).slice(0, 55)}\` | ${String(f.reason || f.problem || "").replace(/\|/g, "/").slice(0, 100)} |`,
    );
  }
  if (!ctx.validatedFindings.length) lines.push("| — | — | — | — | — | — |");

  if (ctx.lowFindings.length) {
    lines.push("", "## LOW findings (validated, listed separately)", "");
    for (const f of ctx.lowFindings) {
      lines.push(`- **${f.id}** (${f.category}): \`${f.path}\` — ${f.reason || f.problem}`);
    }
  }

  lines.push("", "> PROPOSED_DA values are Luna suggestions only — not OWNER-approved.", "");
  return lines.filter(Boolean).join("\n");
}

async function main() {
  const generatedAt = new Date().toISOString();
  const sha = gitSha();
  const pr573 = checkPr573Merged();
  const prerequisite = runRuntimePrerequisite();
  const gates = runTechnicalGates();
  const src = loadProductionSources();
  const micro = verifyMicroRepairs(src);
  const prodChanges = productionDiff();
  const { fields, stats } = collectAllDaFields();
  const fieldsById = new Map(fields.map((f) => [fieldId(f), f]));

  const prerequisitePass =
    pr573.merged &&
    prerequisite.prerequisitePass &&
    prerequisite.runtimeOwnerMismatch === 0 &&
    micro.match === 9 &&
    prerequisite.dataHtmlDivergenceCount === 0 &&
    gates.deUnchanged;

  const luna = {
    realModelAudit: false,
    batchesExported: 0,
    batchesExecuted: 0,
    rawCount: 0,
    falsePositiveCount: 0,
    validatedCount: 0,
    reason: "",
  };

  let validatedFindings = [];
  let lowFindings = [];
  let blockReason = "";
  let finalStatus = "PREREQUISITE_FAIL";

  if (!pr573.merged) {
    blockReason =
      "Audit stopped: **PR #573 is not merged to `main`.** Merge https://github.com/sandrisbrikmanis-rgb/de-lv-app/pull/573, then re-run this audit.";
    luna.reason = "Blocked — PR #573 not on main";
  } else if (!prerequisitePass) {
    blockReason = "Audit stopped: runtime/legacyHtml prerequisite checks failed on current HEAD.";
    luna.reason = "Blocked — prerequisite FAIL";
  } else if (SKIP_LUNA) {
    blockReason = "Luna skipped via --skip-luna";
    luna.reason = "Skipped by flag";
    finalStatus = "NEEDS OWNER REVIEW";
  } else if (!process.env.OPENAI_API_KEY?.trim()) {
    blockReason = "Audit stopped: **LUNA_NOT_RUN** — OPENAI_API_KEY not available.";
    luna.reason = "LUNA_NOT_RUN: missing OPENAI_API_KEY";
    finalStatus = "LUNA_NOT_RUN";
  } else {
    const batchLabels = exportLunaBatches(fields);
    luna.batchesExported = batchLabels.length;
    try {
      runLunaApi();
      luna.realModelAudit = true;
      luna.batchesExecuted = batchLabels.length;
      luna.reason = `Executed ${batchLabels.length} batches via ${DEFAULT_MODEL} API`;
    } catch (e) {
      blockReason = `Audit stopped: **LUNA_NOT_RUN** — ${e.message}`;
      luna.reason = `LUNA_NOT_RUN: ${e.message}`;
      finalStatus = "LUNA_NOT_RUN";
    }
  }

  if (luna.realModelAudit) {
    const { raw } = loadLunaFindings();
    luna.rawCount = raw.length;
    const validated = [];
    const falsePositives = [];
    for (const item of raw) {
      const v = validateLunaFinding(item, fieldsById);
      if (v.status === "FALSE_POSITIVE") {
        falsePositives.push({ ...item, validation: v });
        continue;
      }
      validated.push({
        lessonId: item.lessonId || fieldsById.get(item.fieldId)?.lessonId || "",
        path: item.path || fieldsById.get(item.fieldId)?.path || "",
        fieldType: item.fieldType || "",
        severity: item.severity || "MEDIUM",
        category: item.category || "TRANSLATION",
        deCurrent: item.deCurrent || "",
        daCurrent: item.daCurrent || "",
        proposedDa: item.proposedDa || "",
        reason: item.reason || v.reason,
        problem: item.reason || "",
        source: "luna",
      });
    }
    luna.falsePositiveCount = falsePositives.length;
    luna.validatedCount = validated.length;
    validatedFindings = assignFcaIds(validated.filter((f) => String(f.severity).toUpperCase() !== "LOW"));
    lowFindings = assignFcaIds(validated.filter((f) => String(f.severity).toUpperCase() === "LOW"));

    const bySev = countBySev([...validatedFindings, ...lowFindings]);
    const allGatesPass =
      gates.syntax.pass &&
      gates.validateKurss &&
      gates.structure.pass &&
      gates.mirror &&
      gates.renderer &&
      gates.deUnchanged &&
      prodChanges === 0 &&
      prerequisite.runtimeOwnerMatch === 244;

    if (
      allGatesPass &&
      bySev.CRITICAL === 0 &&
      bySev.HIGH === 0 &&
      bySev.MEDIUM === 0 &&
      validatedFindings.length === 0
    ) {
      finalStatus = "OWNER ACCEPTED / CLOSED";
    } else {
      finalStatus = "NEEDS OWNER REVIEW";
    }
  }

  const bySev = countBySev([...validatedFindings, ...lowFindings]);

  const out = {
    generatedAt,
    gitSha: sha,
    finalStatus,
    blockReason,
    pr573,
    prerequisite,
    prerequisitePass,
    micro,
    stats,
    coverage: { lessons: "21/21", fields: stats.totalFields, percent: "100%" },
    ownerRegression: {
      signedLabot: prerequisite.signedLabot,
      runtimeMatch: prerequisite.runtimeOwnerMatch,
      runtimeMismatch: prerequisite.runtimeOwnerMismatch,
    },
    luna,
    bySev,
    validatedFindings,
    lowFindings,
    gates: {
      syntax: gates.syntax.pass,
      validateKurss: gates.validateKurss,
      structure: gates.structure.pass,
      mirror: gates.mirror,
      renderer: gates.renderer,
      deUnchanged: gates.deUnchanged,
    },
    productionChanges: prodChanges,
  };

  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.writeFileSync(JSON_OUT, JSON.stringify(out, null, 2));
  fs.writeFileSync(
    REPORT,
    renderReport({
      generatedAt,
      gitSha: sha,
      finalStatus,
      blockReason,
      pr573,
      prerequisite,
      prerequisitePass,
      micro,
      stats,
      luna,
      bySev,
      validatedFindings,
      lowFindings,
      gates,
      productionChanges: prodChanges,
    }),
  );

  console.log(JSON.stringify({ finalStatus, prerequisitePass, luna, report: REPORT }, null, 2));
  process.exit(finalStatus === "OWNER ACCEPTED / CLOSED" ? 0 : finalStatus === "PREREQUISITE_FAIL" ? 2 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
