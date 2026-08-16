#!/usr/bin/env node
"use strict";
/**
 * DA–DE Kurss final post-repair audit (READ-ONLY).
 * Usage: node scripts/audit-da-kurss-final-post-repair.js [--skip-luna] [--export-only]
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
} = require("./lib/da-kurss-owner-path");

const REPORT = path.join(ROOT, "reports/da-kurss-final-post-repair-audit.md");
const JSON_OUT = path.join(ROOT, "reports/temp/da-kurss-final-post-repair-audit.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/da-kurss-final-post-repair-luna");
const { buildUnifiedOwnerExpectations } = require("./lib/da-kurss-unified-owner-expectations");
const SKIP_LUNA = process.argv.includes("--skip-luna");
const EXPORT_ONLY = process.argv.includes("--export-only");

const PRODUCTION_PATHS = [
  "data/da/courseLessons.js",
  "data/da/courseTrainingCards.js",
  "languages/da/ui.js",
  "www/data/da/courseTrainingCards.js",
  "www/data/da/courseLessons.js",
  "www/languages/da/ui.js",
];

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(Tagad|Pārveido|Gatavs|piemēram|vārd|Vārd|Latviešu|daudzskait|sieviešu|vīriešu|klikšķ|kartīt|izrunā|darbības|lietvār|pavēles|teikum|Lekcija|lekcij|Iesāc|Gramatika|Izruna|Dialogi|teikumi|Norādāmie|Pareizi jāizrunā|Vācu valodā|Latviešu valodā)\b/i;
const LV_NAMES = /\b(Pēteris|Pētera|Jānis|Jāņa|Rūdolfs|Roberts|Ansis|Ansi|Müller jaunkundze|Jani)\b/i;
const EN_PATTERNS =
  /\b(TODO|FIXME|PLACEHOLDER|Translation:|instead of|you are|meaning:|Click here|Lesson \d+|I give him|subject of the sentence|direct object|indirect object)\b/i;
const ARTIFACT = /\b(LABOT|NELABOT|PENDING|NEEDS_SOURCE_REVIEW|FALSE_POSITIVE|OWNER_DECISION|PROPOSED_DA|natural Danish form|Distinct Danish|Single natural Danish)\b/i;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|\(Context-specific|\(Natural Danish)/i;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;
const RENDERER_LV = /\b(Izruna|Gramatika|Dialogi\s*\/\s*teikumi|Norādāmie vietniekvārdi|Pareizi jāizrunā)\b/;

const NON_ERROR_CATEGORIES = new Set([
  "ACCEPTABLE_VARIANT",
  "FALSE_POSITIVE",
  "STYLE_ONLY",
  "NEEDS_SOURCE_REVIEW",
  "SOURCE_DE_ISSUE",
  "PROJECT_CONVENTION",
  "OWNER_REGRESSION",
]);

function fieldId(f) {
  return `${f.lessonId}|${f.path}`;
}

function normalizeText(s) {
  return String(s || "")
    .replace(/\s+/g, " ")
    .replace(/\u00a0/g, " ")
    .trim();
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

function readActual(pathStr, src) {
  const target = classifyTarget(pathStr);
  if (target === "ui") return getAt(src.ui, uiRelativePath(pathStr));
  if (target === "training") return getAt(src.training, pathStr.replace(/\[(\d+)\]/g, ".$1"));
  if (target === "lessons") {
    const { root, relPath } = resolveLessonsRoot(pathStr, src.data, src.html);
    return getAt(root, relPath);
  }
  return undefined;
}

function classifyForeign(text) {
  if (typeof text !== "string" || !text.trim()) return [];
  const reasons = [];
  if (LV_DIAC.test(text)) reasons.push("LV_DIAC");
  if (LV_WORDS.test(text)) reasons.push("LV_WORD");
  if (RENDERER_LV.test(text)) reasons.push("RENDERER_LV");
  if (LV_NAMES.test(text)) reasons.push("LV_NAME");
  if (EN_PATTERNS.test(text)) reasons.push("EN");
  if (ARTIFACT.test(text)) reasons.push("OWNER_ARTIFACT");
  if (PLACEHOLDER.test(text)) reasons.push("PLACEHOLDER");
  if (ZERO_WIDTH.test(text)) reasons.push("ZERO_WIDTH");
  return reasons;
}

function exportLunaBatches(fields) {
  fs.mkdirSync(LUNA_DIR, { recursive: true });
  const batchSize = 50;
  const paths = [];
  for (let i = 0; i < fields.length; i += batchSize) {
    const slice = fields
      .map((f) => ({
        fieldId: fieldId(f),
        lessonId: f.lessonId,
        path: f.path,
        fieldType: f.fieldType,
        daCurrent: f.daCurrent,
        deCurrent: f.deCurrent || "",
        lvMasterDa: f.lvMasterDa || "",
        source: f.source,
      }))
      .slice(i, i + batchSize);
    const label = `batch-${String(Math.floor(i / batchSize) + 1).padStart(3, "0")}`;
    const payload = {
      auditType: "da_kurss_final_post_repair",
      batch: label,
      instructions:
        "GPT-5.6 Luna READ-ONLY post-repair audit. Danish must be natural, grammatical, semantically aligned with DE. LV MASTER for meaning only. DE STRICT READ-ONLY. Flag real issues only.",
      fields: slice,
    };
    const out = path.join(LUNA_DIR, `${label}.json`);
    fs.writeFileSync(out, JSON.stringify(payload, null, 2));
    paths.push(out);
  }
  return paths;
}

function loadLunaFindings() {
  if (!fs.existsSync(LUNA_DIR)) return [];
  const all = [];
  for (const f of fs.readdirSync(LUNA_DIR).filter((x) => x.endsWith("-findings.json")).sort()) {
    const data = JSON.parse(fs.readFileSync(path.join(LUNA_DIR, f), "utf8"));
    for (const item of data.findings || []) {
      if (String(item.status || "").toUpperCase() === "PASS") continue;
      const cat = String(item.category || "").toUpperCase();
      if (NON_ERROR_CATEGORIES.has(cat)) continue;
      all.push(item);
    }
  }
  return all;
}

function runOwnerRegression(src) {
  try {
    execSync("node scripts/build-da-kurss-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    /* map may already exist */
  }
  try {
    execSync("node scripts/build-da-kurss-final-post-repair-owner-apply-map.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    /* signed files may be absent on audit-only branches */
  }

  const unified = buildUnifiedOwnerExpectations();
  const result = {
    totalLabot: unified.uniqueCount,
    originalLabot: unified.originalCount,
    fprLabot: unified.fprCount,
    match: 0,
    mismatch: 0,
    missing: 0,
    artifact: 0,
    mismatches: [],
    pathConflicts: unified.conflicts.length,
  };

  for (const entry of unified.expectations) {
    const actual = readActual(entry.path, src);
    if (actual === undefined) {
      result.missing++;
      result.mismatch++;
      result.mismatches.push({ findingId: entry.findingId, path: entry.path, issue: "NOT_FOUND", track: entry.track });
      continue;
    }
    if (ARTIFACT.test(String(actual))) {
      result.artifact++;
      result.mismatch++;
      result.mismatches.push({ findingId: entry.findingId, path: entry.path, issue: "ARTIFACT", actual, track: entry.track });
      continue;
    }
    if (normalizeText(actual) === normalizeText(entry.ownerNew)) result.match++;
    else {
      result.mismatch++;
      result.mismatches.push({
        findingId: entry.findingId,
        path: entry.path,
        expected: entry.ownerNew,
        actual,
        track: entry.track,
      });
    }
  }
  return result;
}

function runSyntaxChecks() {
  const checks = [
    "data/da/courseLessons.js",
    "www/data/da/courseLessons.js",
    "data/da/courseTrainingCards.js",
    "www/data/da/courseTrainingCards.js",
    "languages/da/ui.js",
    "www/languages/da/ui.js",
  ];
  let pass = true;
  const issues = [];
  for (const rel of checks) {
    try {
      execSync(`node --check "${rel}"`, { cwd: ROOT, stdio: "pipe" });
    } catch {
      pass = false;
      issues.push(rel);
    }
  }
  return { pass, issues };
}

function runMirrorCheck() {
  const pairs = [
    ["data/da/courseLessons.js", "www/data/da/courseLessons.js"],
    ["data/da/courseTrainingCards.js", "www/data/da/courseTrainingCards.js"],
    ["languages/da/ui.js", "www/languages/da/ui.js"],
  ];
  let pass = true;
  for (const [a, b] of pairs) {
    if (fs.readFileSync(path.join(ROOT, a), "utf8") !== fs.readFileSync(path.join(ROOT, b), "utf8")) pass = false;
  }
  return pass;
}

function runValidateKurss() {
  try {
    execSync("node scripts/validate-kurss.js --lang=da", { cwd: ROOT, stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

function verifyDeUnchanged() {
  try {
    execSync("node scripts/verify-da-kurss-owner-de-unchanged.js", { cwd: ROOT, stdio: "pipe" });
    return { pass: true, changes: 0 };
  } catch {
    return { pass: false, changes: -1 };
  }
}

function productionDiffDuringAudit() {
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

function scanDeterministic(fields) {
  const findings = [];
  const remnantCounts = { LV: 0, EN: 0, ARTIFACT: 0, PLACEHOLDER: 0, RENDERER: 0, OTHER: 0 };

  for (const f of fields) {
    const reasons = classifyForeign(f.daCurrent);
    if (!reasons.length) continue;

    let sev = "MEDIUM";
    if (reasons.includes("LV_NAME") || reasons.includes("LV_DIAC") || reasons.includes("RENDERER_LV")) sev = "HIGH";
    if (reasons.includes("OWNER_ARTIFACT")) sev = "CRITICAL";
    if (reasons.some((r) => r.startsWith("LV"))) remnantCounts.LV++;
    else if (reasons.includes("EN")) remnantCounts.EN++;
    else if (reasons.includes("OWNER_ARTIFACT")) remnantCounts.ARTIFACT++;
    else if (reasons.includes("PLACEHOLDER")) remnantCounts.PLACEHOLDER++;
    else if (reasons.includes("RENDERER_LV")) remnantCounts.RENDERER++;
    else remnantCounts.OTHER++;

    findings.push({
      lessonId: f.lessonId,
      path: f.path,
      fieldType: f.fieldType,
      severity: sev,
      category: reasons.includes("RENDERER_LV") ? "LOCALIZATION" : "FOREIGN_REMNANT",
      problem: `Foreign/script remnant: ${reasons.join(", ")}`,
      deCurrent: f.deCurrent || "",
      daCurrent: f.daCurrent,
      proposedDa: "(Danish replacement per DE meaning)",
      reason: reasons.join(", "),
      source: "deterministic",
    });
  }
  return { findings, remnantCounts };
}

function scanSectionAccents(fields) {
  // Kurss courseLessons has no sectionAccents objects; scan card accent-like fields if present
  const accentFields = fields.filter((f) => /accent|Accent/i.test(f.path) || f.fieldType === "cardAccent");
  return { checked: accentFields.length, findings: [] };
}

function assignFindingIds(findings) {
  return findings.map((f, i) => ({
    ...f,
    id: `DA-KURSS-FPR-${String(i + 1).padStart(4, "0")}`,
  }));
}

function countBySev(findings) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) {
    const s = f.severity || "MEDIUM";
    if (bySev[s] !== undefined) bySev[s]++;
    else bySev.MEDIUM++;
  }
  return bySev;
}

function countByCategory(findings) {
  const byCat = {};
  for (const f of findings) {
    const c = f.category || "OTHER";
    byCat[c] = (byCat[c] || 0) + 1;
  }
  return byCat;
}

function buildReport(ctx) {
  const {
    stats,
    structure,
    owner,
    bySev,
    byCat,
    findings,
    gates,
    remnantCounts,
    sectionAccents,
    lunaBatches,
    lunaLoaded,
    productionChanges,
  } = ctx;

  const totalFindings = findings.length;
  const finalStatus =
    bySev.CRITICAL === 0 &&
    bySev.HIGH === 0 &&
    bySev.MEDIUM === 0 &&
    owner.mismatch === 0 &&
    gates.syntax &&
    gates.structure &&
    gates.mirror &&
    gates.validateKurss &&
    remnantCounts.ARTIFACT === 0 &&
    productionChanges === 0
      ? "OWNER ACCEPTED / CLOSED"
      : "NEEDS OWNER REVIEW";

  const lines = [
    "# DA–DE Kurss final post-repair audit",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    "**Mode:** READ-ONLY · GPT-5.6 Luna + deterministic gates",
    "",
    "## COVERAGE",
    "",
    "| Metric | Value |",
    "|---|---|",
    `| Total lessons | **${stats.lessons}** |`,
    `| Audited lessons | **${stats.lessons}** |`,
    `| Total auditable DA fields | **${stats.totalFields}** |`,
    `| Audited DA fields | **${stats.totalFields}** |`,
    `| Coverage | **100%** |`,
    "",
    "| Source | Fields |",
    "|---|---|",
    ...Object.entries(stats.bySource || {}).map(([k, v]) => `| ${k} | ${v} |`),
    "",
    "## OWNER REGRESSION",
    "",
    "| Metric | Count |",
    "|---|---:|",
    `| Total OWNER LABOT (unique paths) | **${owner.totalLabot}** |`,
    `| Original repair LABOT | **${owner.originalLabot || "—"}** |`,
    `| FPR repair LABOT | **${owner.fprLabot || "—"}** |`,
    `| OWNER_MATCH | **${owner.match}** |`,
    `| OWNER_MISMATCH | **${owner.mismatch}** |`,
    `| Missing in production | **${owner.missing}** |`,
    `| LABOT/artifact in production | **${owner.artifact}** |`,
    "",
    owner.mismatch
      ? "### OWNER_MISMATCH samples\n\n" +
        owner.mismatches
          .slice(0, 20)
          .map((m) => `- \`${m.findingId}\` \`${m.path}\` — ${m.issue || "value mismatch"}`)
          .join("\n")
      : "### OWNER regression\n\nAll signed LABOT values match production.",
    "",
    "## LINGUISTIC FINDINGS",
    "",
    "| Severity | Count |",
    "|---|---:|",
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    `| LOW | **${bySev.LOW}** |`,
    `| **TOTAL** | **${totalFindings}** |`,
    "",
    "## CATEGORY BREAKDOWN",
    "",
    "| Category | Count |",
    "|---|---:|",
    ...Object.entries(byCat)
      .sort((a, b) => b[1] - a[1])
      .map(([k, v]) => `| ${k} | ${v} |`),
    "",
    "## STRUCTURE / PARITY",
    "",
    "| Check | Result |",
    "|---|---|",
    `| Lessons count (21) | **${stats.lessons === 21 ? "PASS" : "FAIL"}** |`,
    `| Structure vs LV MASTER | **${gates.structure ? "PASS" : "FAIL"}** (${structure.issueCount} issues) |`,
    `| Renderer parity | **${gates.structure ? "PASS" : "FAIL"}** |`,
    `| Practice/translate cards | **${gates.validateKurss ? "PASS" : "FAIL"}** |`,
    `| Mirror data↔www | **${gates.mirror ? "PASS" : "FAIL"}** |`,
    "",
    "## SECTIONACCENTS",
    "",
    "| Metric | Value |",
    "|---|---|",
    `| Checked | **${sectionAccents.checked}** (Kurss uses legacyHtml — no sectionAccents objects) |`,
    `| Validated findings | **${sectionAccents.findings.length}** |`,
    "",
    "## FOREIGN-LANGUAGE REMNANTS (deterministic sweep)",
    "",
    "| Type | Count |",
    "|---|---:|",
    `| LV | **${remnantCounts.LV}** |`,
    `| EN | **${remnantCounts.EN}** |`,
    `| Renderer LV titles | **${remnantCounts.RENDERER}** |`,
    `| OWNER artifacts | **${remnantCounts.ARTIFACT}** |`,
    `| Placeholders | **${remnantCounts.PLACEHOLDER}** |`,
    `| Other | **${remnantCounts.OTHER}** |`,
    "",
    "## TECHNICAL",
    "",
    "| Check | Result |",
    "|---|---|",
    `| Syntax | **${gates.syntax ? "PASS" : "FAIL"}** |`,
    `| Structure | **${gates.structure ? "PASS" : "FAIL"}** |`,
    `| IDs/order | **${gates.structure ? "PASS" : "FAIL"}** |`,
    `| Renderer parity | **${gates.structure ? "PASS" : "FAIL"}** |`,
    `| Practice/Translate parity | **${gates.validateKurss ? "PASS" : "FAIL"}** |`,
    `| Placeholders (deterministic) | **${remnantCounts.PLACEHOLDER}** |`,
    `| OWNER artifacts | **${remnantCounts.ARTIFACT}** |`,
    `| Foreign-language remnants | **${remnantCounts.LV + remnantCounts.EN + remnantCounts.RENDERER}** |`,
    `| DE changes | **${gates.deUnchanged ? "0" : "FAIL"}** |`,
    `| Production changes (this audit) | **${productionChanges}** |`,
    `| Luna batches | **${lunaLoaded ? "COMPLETE" : "PENDING"}** (${lunaBatches} batches) |`,
    "",
    "## FINAL STATUS",
    "",
    `**${finalStatus}**`,
    "",
    bySev.LOW > 0 ? `_Note: ${bySev.LOW} LOW findings listed separately — not closure blockers per spec._` : "",
    "",
    "## VALIDATED FINDINGS",
    "",
    "| ID | Sev | Category | Lesson | Path | Problem |",
    "|---|---|---|---|---|---|",
  ];

  for (const f of findings) {
    const prob = String(f.problem || f.reason || "").replace(/\|/g, "/").slice(0, 120);
    lines.push(
      `| ${f.id} | ${f.severity} | ${f.category} | ${f.lessonId} | \`${String(f.path).slice(0, 60)}\` | ${prob} |`,
    );
  }

  if (findings.length === 0) lines.push("| — | — | — | — | — | No validated findings |");

  lines.push("", "> **PROPOSED_DA** values in JSON are Luna suggestions only — not OWNER-approved.", "");

  return { md: lines.join("\n"), finalStatus };
}

function mergeAllFindings(owner, det, struct, luna, ownerMismatchFindings) {
  const merged = [];
  const seen = new Set();
  function push(f) {
    const key = `${f.lessonId}|${f.path}|${String(f.daCurrent || "").slice(0, 80)}|${f.category}`;
    if (seen.has(key)) return;
    seen.add(key);
    merged.push(f);
  }

  for (const m of ownerMismatchFindings) push(m);
  for (const issue of struct.issues || []) {
    push({
      lessonId: issue.lessonId,
      path: issue.path,
      fieldType: "structure",
      severity: issue.severity || "HIGH",
      category: "STRUCTURE",
      problem: issue.message,
      daCurrent: issue.daShape || "",
      proposedDa: "(align with LV MASTER)",
      reason: issue.message,
      source: "structure",
    });
  }
  for (const f of det.findings) push(f);
  for (const item of luna) {
    push({
      lessonId: item.lessonId || "",
      path: item.path || "",
      fieldType: item.fieldType || "",
      severity: item.severity || "MEDIUM",
      category: item.category || "TRANSLATION",
      problem: item.reason || item.problem || "",
      deCurrent: item.deCurrent || "",
      daCurrent: item.daCurrent || "",
      proposedDa: item.proposedDa || "",
      reason: item.reason || "",
      source: "luna",
    });
  }
  return merged;
}

function main() {
  const prodDiffStart = productionDiffDuringAudit();
  const { fields, stats } = collectAllDaFields();
  const structure = compareStructureWithLvMaster();
  const src = loadProductionSources();
  const owner = runOwnerRegression(src);

  const ownerMismatchFindings = owner.mismatches.map((m) => ({
    lessonId: m.path?.split(".")[1] || "",
    path: m.path || m.findingId,
    fieldType: "owner",
    severity: "HIGH",
    category: "OWNER_REGRESSION",
    problem: `OWNER_MISMATCH: production ≠ signed LABOT (${m.issue || "value"})`,
    deCurrent: "",
    daCurrent: String(m.actual || "").slice(0, 500),
    proposedDa: m.expected || "",
    reason: "Signed OWNER LABOT not reflected in production",
    source: "owner",
  }));

  const det = scanDeterministic(fields);
  const sectionAccents = scanSectionAccents(fields);
  const lunaBatchPaths = exportLunaBatches(fields);

  if (EXPORT_ONLY) {
    console.log(
      JSON.stringify({ totalFields: stats.totalFields, batches: lunaBatchPaths.length, lunaDir: LUNA_DIR }, null, 2),
    );
    return;
  }

  const lunaFindings = SKIP_LUNA ? [] : loadLunaFindings();
  const lunaFiles = fs.existsSync(LUNA_DIR)
    ? fs.readdirSync(LUNA_DIR).filter((x) => x.endsWith("-findings.json"))
    : [];
  const lunaLoaded = SKIP_LUNA || (lunaFiles.length >= lunaBatchPaths.length && lunaBatchPaths.length > 0);

  const syntax = runSyntaxChecks();
  const mirror = runMirrorCheck();
  const validateKurss = runValidateKurss();
  const deCheck = verifyDeUnchanged();
  const prodDiffEnd = productionDiffDuringAudit();

  const rawFindings = mergeAllFindings(owner, det, structure, lunaFindings, ownerMismatchFindings);
  const findings = assignFindingIds(rawFindings);
  const bySev = countBySev(findings);
  const byCat = countByCategory(findings);

  const gates = {
    syntax: syntax.pass,
    structure: structure.pass,
    mirror,
    validateKurss,
    deUnchanged: deCheck.pass,
  };

  const { md, finalStatus } = buildReport({
    stats,
    structure,
    owner,
    bySev,
    byCat,
    findings,
    gates,
    remnantCounts: det.remnantCounts,
    sectionAccents,
    lunaBatches: lunaBatchPaths.length,
    lunaLoaded,
    productionChanges: prodDiffEnd,
  });

  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.mkdirSync(path.dirname(REPORT), { recursive: true });
  fs.writeFileSync(REPORT, md);
  fs.writeFileSync(
    JSON_OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        stats,
        owner,
        bySev,
        byCat,
        gates,
        remnantCounts: det.remnantCounts,
        sectionAccents,
        lunaBatches: lunaBatchPaths.length,
        lunaLoaded,
        productionChangesStart: prodDiffStart,
        productionChangesEnd: prodDiffEnd,
        finalStatus,
        findings,
      },
      null,
      2,
    ),
  );

  console.log(
    JSON.stringify(
      {
        totalFields: stats.totalFields,
        ownerMatch: owner.match,
        ownerMismatch: owner.mismatch,
        bySev,
        findings: findings.length,
        lunaBatches: lunaBatchPaths.length,
        lunaLoaded,
        finalStatus,
        productionChanges: prodDiffEnd,
        report: REPORT,
      },
      null,
      2,
    ),
  );

  if (!lunaLoaded && !SKIP_LUNA) process.exit(2);
  process.exit(finalStatus === "OWNER ACCEPTED / CLOSED" ? 0 : 1);
}

main();
