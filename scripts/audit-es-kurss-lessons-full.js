#!/usr/bin/env node
"use strict";
/**
 * ES–DE Kurss Lessons 1–21 full READ-ONLY audit (deterministic + GPT-5.6 Luna).
 * MASTER v1.9 FIRST_FULL_DISCOVERY.
 *
 * Usage:
 *   node scripts/audit-es-kurss-lessons-full.js [--skip-luna] [--export-only] [--resume] [--test-luna]
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const { ROOT } = require("./lib/audit-common");
const {
  collectAllEsFields,
  compareStructureWithLvMaster,
  checkLegacyHtmlDrift,
  PRODUCTION_FILES,
  LESSON_COUNT,
} = require("./lib/es-kurss-lessons-audit-collect");
const {
  DEFAULT_MODEL,
  createStats,
  auditCardsBatch,
  classifyFindings,
  NON_ERROR_CATEGORIES,
} = require("./lib/openai-es-kurss-lessons-audit");

const REPORT = path.join(ROOT, "reports/es-kurss-lessons-full-audit.md");
const SUMMARY = path.join(ROOT, "reports/es-kurss-lessons-full-audit-summary.md");
const JSON_OUT = path.join(ROOT, "reports/temp/es-kurss-lessons-full-audit.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/es-kurss-lessons-full-audit-luna");
const PROGRESS = path.join(ROOT, "scripts/.es-kurss-lessons-full-audit-luna-progress.json");
const BASELINE_REF = process.env.ES_KURSS_BASELINE || "main";
const MASTER_VERSION = "1.9";

const SKIP_LUNA = process.argv.includes("--skip-luna");
const EXPORT_ONLY = process.argv.includes("--export-only");
const RESUME = process.argv.includes("--resume");
const TEST_LUNA = process.argv.includes("--test-luna");
const BATCH_SIZE = TEST_LUNA ? 10 : 50;

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(piemēram|teikuma|priekšmets|darbības|vārd|Vārd|Latviešu|daudzskait|sieviešu|vīriešu|klikšķ|kartīt|izrunā|darbības|lietvār|pavēles|teikum|Lekcija|lekcij|Iesāc|Iesācējs|Iesācējiem|sieviešu|vīriešu|kārta|vīriešu|sieviešu)\b/i;
const LV_NAMES = /\b(Pēteris|Pētera|Jānis|Jāņa|Rūdolfs|Roberts|Ansis|Ansi)\b/;
const EN_PATTERNS =
  /\b(TODO|FIXME|PLACEHOLDER|Translation:|instead of|you are|meaning:|Click here|Lesson \d+| — go\b| — not\b| — quiet\b| — many\b)\b/i;
const ARTIFACT = /\b(LABOT|PENDING|NEEDS_SOURCE_REVIEW|FALSE_POSITIVE|NELABOT|PĀRSKATĪT)\b/i;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|\(Context-specific|\(Natural Spanish)/i;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;
const MULTI_MEANING = /[•;/](?!\s*(?:der|die|das|ein|eine|und|oder|ich|du|er|sie|wir|ihr)\b)/;
const ARTICLE_EN = /\b(el|la|los|las|un|una)\s+article\b|\barticle\s+(definido|indefinido|dativo|acusativo|genitivo|plural)\b|\bEl article\b|\bel article\b/i;

const NON_ERROR_CATEGORIES_DET = new Set([
  "ACCEPTABLE_VARIANT",
  "FALSE_POSITIVE",
  "STYLE_ONLY",
  "NEEDS_SOURCE_REVIEW",
  "SOURCE_DE_ISSUE",
  "PROJECT_CONVENTION",
]);

function fieldId(f) {
  return f.id || `${f.lessonId}|${f.path}`;
}

function classifyForeign(text) {
  if (typeof text !== "string" || !text.trim()) return [];
  const reasons = [];
  if (LV_DIAC.test(text)) reasons.push("LV_DIAC");
  if (LV_WORDS.test(text)) reasons.push("LV_WORD");
  if (LV_NAMES.test(text)) reasons.push("LV_NAME");
  if (EN_PATTERNS.test(text)) reasons.push("EN");
  if (ARTIFACT.test(text)) reasons.push("OWNER_ARTIFACT");
  if (PLACEHOLDER.test(text)) reasons.push("PLACEHOLDER");
  if (ZERO_WIDTH.test(text)) reasons.push("ZERO_WIDTH");
  return reasons;
}

function isDeOnlyContext(text, deContext) {
  const t = String(text || "").trim();
  if (!t) return true;
  if (/^[\s"„"'«»\-–—:;,.!?0-9A-Za-zÄÖÜäöüß]+$/.test(t.replace(/<[^>]+>/g, " "))) {
    if (/^(ich|du|er|sie|wir|ihr|der |die |das |ein |eine?n? |Sie |Das |Der |Die |Was |Wen |Wer |Nein|Ja,)/i.test(t)) {
      return true;
    }
    if (deContext && t === deContext) return true;
  }
  return false;
}

function exportLunaBatches(fields) {
  fs.mkdirSync(LUNA_DIR, { recursive: true });
  const paths = [];
  const sliceFields = TEST_LUNA ? fields.slice(0, BATCH_SIZE) : fields;
  for (let i = 0; i < sliceFields.length; i += BATCH_SIZE) {
    const slice = sliceFields.slice(i, i + BATCH_SIZE).map((f) => ({
      cardId: fieldId(f),
      lessonId: f.lessonId,
      lessonNumber: f.lessonNumber,
      path: f.path,
      field: f.field,
      fieldType: f.fieldType,
      currentEs: f.esCurrent,
      deContext: f.deContext || "",
      structureContext: f.structureContext || "",
      source: f.source,
    }));
    const label = `batch-${String(Math.floor(i / BATCH_SIZE) + 1).padStart(3, "0")}`;
    const payload = {
      auditType: "es_kurss_lessons_full",
      batch: label,
      instructions:
        "GPT-5.6 Luna READ-ONLY audit. Compare ES vs DE. LV MASTER for meaning only. Flag real Spanish issues, foreign remnants, renderer mismatches. Do NOT suggest DE changes.",
      fields: slice,
    };
    const out = path.join(LUNA_DIR, `${label}.json`);
    fs.writeFileSync(out, JSON.stringify(payload, null, 2));
    paths.push(out);
  }
  return paths;
}

function loadProgress() {
  if (!RESUME || !fs.existsSync(PROGRESS)) return { completedBatches: [] };
  return JSON.parse(fs.readFileSync(PROGRESS, "utf8"));
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS, JSON.stringify(progress, null, 2));
}

async function runLunaBatches(fields, batchPaths) {
  const stats = createStats();
  const allFindings = [];
  const progress = loadProgress();
  const completed = new Set(progress.completedBatches || []);

  for (let i = 0; i < batchPaths.length; i++) {
    const batchPath = batchPaths[i];
    const label = path.basename(batchPath, ".json");
    const findingsPath = path.join(LUNA_DIR, `${label}-findings.json`);

    if (completed.has(label) && fs.existsSync(findingsPath)) {
      const data = JSON.parse(fs.readFileSync(findingsPath, "utf8"));
      for (const item of data.findings || []) {
        if (String(item.status || "").toUpperCase() === "PASS") continue;
        const cat = String(item.category || "").toUpperCase();
        if (NON_ERROR_CATEGORIES.has(cat)) continue;
        allFindings.push(item);
      }
      continue;
    }

    const batch = JSON.parse(fs.readFileSync(batchPath, "utf8"));
    const cards = (batch.fields || []).map((f) => ({
      cardId: f.cardId,
      lessonId: f.lessonId,
      path: f.path,
      fieldType: f.fieldType,
      currentEs: f.currentEs,
      deContext: f.deContext,
      structureContext: f.structureContext,
    }));

    try {
      const { findings } = await auditCardsBatch({
        cards,
        stats,
        batchLabel: label,
      });
      fs.writeFileSync(
        findingsPath,
        JSON.stringify({ batch: label, findings, generatedAt: new Date().toISOString() }, null, 2),
      );
      for (const item of findings) {
        if (String(item.status || "").toUpperCase() === "PASS") continue;
        const cat = String(item.category || "").toUpperCase();
        if (NON_ERROR_CATEGORIES.has(cat)) continue;
        allFindings.push(item);
      }
      completed.add(label);
      progress.completedBatches = [...completed];
      saveProgress(progress);
    } catch (err) {
      console.error(`Luna batch ${label} failed: ${err.message}`);
      break;
    }
  }

  return { findings: allFindings, stats, completedCount: completed.size };
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

function runSyntaxChecks() {
  const issues = [];
  let pass = true;
  const checks = [
    "data/es/courseLessons.js",
    "data/es/courseTrainingCards.js",
    "languages/es/ui.js",
    "www/data/es/courseLessons.js",
    "www/data/es/courseTrainingCards.js",
    "www/languages/es/ui.js",
  ];
  for (const rel of checks) {
    try {
      execSync(`node --check ${rel}`, { cwd: ROOT, stdio: "pipe" });
    } catch {
      pass = false;
      issues.push({ severity: "CRITICAL", path: rel, problem: "JavaScript syntax error" });
    }
  }
  return { pass, issues };
}

function runMirrorCheck() {
  const pairs = [
    ["data/es/courseLessons.js", "www/data/es/courseLessons.js"],
    ["data/es/courseTrainingCards.js", "www/data/es/courseTrainingCards.js"],
    ["languages/es/ui.js", "www/languages/es/ui.js"],
  ];
  const issues = [];
  let pass = true;
  for (const [a, b] of pairs) {
    const same =
      fs.readFileSync(path.join(ROOT, a), "utf8") === fs.readFileSync(path.join(ROOT, b), "utf8");
    if (!same) {
      pass = false;
      issues.push({ severity: "CRITICAL", path: `${a} ↔ ${b}`, problem: "Mirror mismatch" });
    }
  }
  return { pass, issues };
}

function runDeChangesCheck() {
  let changes = 0;
  for (const rel of ["data/de/courseLessons.js", "data/de/courseTrainingCards.js", "languages/de/ui.js"]) {
    try {
      const baseline = execSync(`git show ${BASELINE_REF}:${rel} 2>/dev/null`, {
        cwd: ROOT,
        encoding: "utf8",
        stdio: "pipe",
      });
      const current = fs.readFileSync(path.join(ROOT, rel), "utf8");
      if (baseline !== current) changes += 1;
    } catch {
      /* baseline missing */
    }
  }
  return { changes, pass: changes === 0 };
}

function runValidateKurss() {
  try {
    execSync("node scripts/validate-kurss.js --lang=es", { cwd: ROOT, stdio: "pipe" });
    return { pass: true, output: "PASS" };
  } catch (e) {
    return { pass: false, output: String(e.stderr || e.stdout || e.message).slice(0, 500) };
  }
}

function scanDeterministic(fields) {
  const findings = [];
  let fid = 0;

  function add(severity, f, category, problem, detail = {}) {
    fid++;
    findings.push({
      id: `ES-KURSS-LESSONS-DET-${String(fid).padStart(4, "0")}`,
      severity,
      lessonId: f.lessonId,
      lessonNumber: f.lessonNumber,
      path: f.path,
      field: f.field,
      fieldType: f.fieldType,
      category,
      problem,
      deContext: detail.deContext || f.deContext || "",
      esCurrent: detail.esCurrent || f.esCurrent || "",
      proposedEs: detail.proposedEs || "",
      reason: detail.reason || problem,
      source: "deterministic",
    });
  }

  for (const f of fields) {
    const text = String(f.esCurrent || "");
    if (!text.trim()) {
      if (f.fieldType !== "exerciseConjugation") {
        add("MEDIUM", f, "MISSING_CONTENT", "Tukšs learner-facing lauks");
      }
      continue;
    }

    if (isDeOnlyContext(text, f.deContext)) continue;

    const reasons = classifyForeign(text);
    if (reasons.length) {
      const sev = reasons.includes("LV_NAME") || reasons.includes("LV_DIAC") || reasons.includes("LV_WORD") ? "HIGH" : "MEDIUM";
      add(sev, f, "FOREIGN_REMNANT", `Foreign/script: ${reasons.join(", ")}`, {
        proposedEs: "(OWNER: Spanish replacement per DE/LV meaning)",
        reason: `Detected: ${reasons.join(", ")}`,
      });
    }

    if (ARTICLE_EN.test(text)) {
      add("HIGH", f, "ES_TERMINOLOGY", "English 'article' in Spanish grammar text (should be 'artículo')", {
        proposedEs: text.replace(/\barticle\b/gi, (m) => (m[0] === "A" ? "Artículo" : "artículo")),
        reason: "Grammar term 'article' should be Spanish 'artículo'",
      });
    }

    if (MULTI_MEANING.test(text) && !/der|die|das|und|oder/i.test(text)) {
      if (/[•;/]/.test(text) && text.split(/[•;/]/).filter((p) => p.trim().length > 2).length > 1) {
        add("MEDIUM", f, "MULTIPLE_TRANSLATIONS", "Vairāku nozīmju kandidāti vienā laukā (• / ;)", {
          proposedEs: "(OWNER_DECISION_REQUIRED: choose single main translation)",
          reason: "MASTER §1.1: MAIN_TRANSLATION_COUNT = 1",
        });
      }
    }

    if (/^Lekcija \d+$/i.test(text.trim()) && /title|uiTitle/i.test(f.fieldType)) {
      add("HIGH", f, "CONSISTENCY", "Latvian lesson title in ES metadata", {
        proposedEs: text.replace(/Lekcija/i, "Lección"),
        reason: "ui.js uses Lección N; metadata still has Latvian Lekcija N",
      });
    }

    if (/\bMartha\b/.test(text) && /\bMarta\b/i.test(f.deContext || "")) {
      add("MEDIUM", f, "NAMES", "Martha in ES where DE canonical is Marta", {
        proposedEs: text.replace(/\bMartha\b/g, "Marta"),
        reason: "DE canonical name Marta",
      });
    }
  }

  return findings;
}

function mergeFindings(detFindings, structIssues, driftIssues, syntaxIssues, mirrorIssues, lunaFindings, fieldMap) {
  const merged = [];
  const seen = new Set();

  function push(f) {
    const key = `${f.lessonId}|${f.path}|${String(f.esCurrent || "").slice(0, 80)}`;
    if (seen.has(key)) return;
    seen.add(key);
    merged.push(f);
  }

  for (const issue of syntaxIssues) {
    push({
      id: `ES-KURSS-LESSONS-SYN-${issue.path.replace(/\W/g, "").slice(0, 20)}`,
      severity: issue.severity,
      lessonId: "syntax",
      path: issue.path,
      fieldType: "javascript",
      category: "TECHNICAL",
      problem: issue.problem,
      esCurrent: "(syntax failure)",
      proposedEs: "(OWNER repair required)",
      reason: issue.problem,
      source: "syntax",
    });
  }

  for (const issue of [...structIssues, ...driftIssues]) {
    push({
      id: `ES-KURSS-LESSONS-STR-${String(issue.path).replace(/\W/g, "").slice(0, 24)}`,
      severity: issue.severity,
      lessonId: issue.lessonId,
      path: issue.path,
      fieldType: "structure",
      category: "STRUCTURE",
      problem: issue.message,
      esCurrent: issue.esShape || "",
      proposedEs: "(align with LV MASTER structure)",
      reason: issue.message,
      source: "structure",
    });
  }

  for (const f of detFindings) push(f);

  let lunaIdx = 0;
  for (const item of lunaFindings) {
    lunaIdx++;
    const field = fieldMap.get(item.cardId) || {};
    push({
      id: `ES-KURSS-LESSONS-L${String(lunaIdx).padStart(4, "0")}`,
      severity: item.severity || "MEDIUM",
      lessonId: field.lessonId || item.lessonId || "",
      lessonNumber: field.lessonNumber,
      path: item.path || field.path || "",
      field: item.field || field.field || "",
      fieldType: field.fieldType || item.fieldType || "",
      category: item.category || "TRANSLATION",
      problem: item.reason || item.problem || "",
      deContext: item.de || field.deContext || "",
      esCurrent: item.currentEs || field.esCurrent || "",
      proposedEs: item.proposedEs || "",
      reason: item.reason || "",
      source: "luna",
    });
  }

  return merged;
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
  const out = {};
  for (const f of findings) {
    const c = f.category || "UNKNOWN";
    out[c] = (out[c] || 0) + 1;
  }
  return out;
}

async function main() {
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const { fields, stats } = collectAllEsFields();
  const structure = compareStructureWithLvMaster();
  const legacyDrift = checkLegacyHtmlDrift();
  const syntax = runSyntaxChecks();
  const mirror = runMirrorCheck();
  const deCheck = runDeChangesCheck();
  const validateKurss = runValidateKurss();
  const detFindings = scanDeterministic(fields);

  const fieldMap = new Map(fields.map((f) => [fieldId(f), f]));
  const lunaBatches = exportLunaBatches(fields);

  if (EXPORT_ONLY) {
    console.log(
      JSON.stringify({ totalFields: stats.totalFields, batches: lunaBatches.length, lunaDir: LUNA_DIR }, null, 2),
    );
    return;
  }

  let lunaFindings = [];
  let lunaStats = null;
  let lunaCompleted = 0;

  if (!SKIP_LUNA) {
    try {
      const lunaResult = await runLunaBatches(fields, lunaBatches);
      lunaFindings = lunaResult.findings;
      lunaStats = lunaResult.stats;
      lunaCompleted = lunaResult.completedCount;
    } catch (err) {
      console.error(`Luna run failed: ${err.message}`);
      lunaFindings = loadLunaFindings();
      lunaCompleted = fs.existsSync(LUNA_DIR)
        ? fs.readdirSync(LUNA_DIR).filter((x) => x.endsWith("-findings.json")).length
        : 0;
    }
  } else {
    lunaFindings = loadLunaFindings();
    lunaCompleted = fs.existsSync(LUNA_DIR)
      ? fs.readdirSync(LUNA_DIR).filter((x) => x.endsWith("-findings.json")).length
      : 0;
  }

  const lunaLoaded = lunaCompleted >= lunaBatches.length;
  const structIssues = [...structure.issues, ...legacyDrift.issues];

  const allFindings = mergeFindings(
    detFindings,
    structIssues,
    [],
    syntax.issues,
    mirror.issues,
    lunaFindings,
    fieldMap,
  );
  const bySev = countBySev(allFindings);
  const byCategory = countByCategory(allFindings);

  const coveragePass = stats.totalFields > 0 && stats.lessons === LESSON_COUNT;
  const pass =
    coveragePass &&
    lunaLoaded &&
    !SKIP_LUNA &&
    bySev.CRITICAL === 0 &&
    bySev.HIGH === 0 &&
    bySev.MEDIUM === 0 &&
    bySev.LOW === 0 &&
    syntax.pass &&
    mirror.pass;

  const verdict = pass
    ? "**PASS** — pilns ES Kurss Lessons audits bez atlikušiem findings."
    : lunaLoaded || SKIP_LUNA
      ? "**NEEDS OWNER REVIEW** — atlikuši validated findings."
      : "**NEEDS OWNER REVIEW** — Luna batches pending completion.";

  const md = [
    "# ES–DE Kurss Lessons 1–21 — pilns lingvistiskais audits (READ-ONLY)",
    "",
    `**AUTHORITATIVE STANDARD:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` **v${MASTER_VERSION}**`,
    "**STAGE:** FIRST_FULL_DISCOVERY (post V1+V2 OWNER apply)",
    `**HEAD:** \`${head}\``,
    "**DE:** STRICT READ-ONLY · **LV Kurss:** MASTER (structure only)",
    "",
    `Audita datums: ${new Date().toISOString().slice(0, 10)}`,
    `Auditors: deterministiskā pārbaude (§7.7) + GPT-5.6 Luna (§7.8, model: ${DEFAULT_MODEL})`,
    "Production changes: **0** (audit run only)",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---|---|",
    `| ES lauki (coverage) | **${stats.totalFields}** |`,
    `| Lekcijas | **${stats.lessons}** / ${LESSON_COUNT} |`,
    `| CRITICAL | **${bySev.CRITICAL}** |`,
    `| HIGH | **${bySev.HIGH}** |`,
    `| MEDIUM | **${bySev.MEDIUM}** |`,
    `| LOW | **${bySev.LOW}** |`,
    `| Kopā findings | **${allFindings.length}** |`,
    `| Deterministic | **${detFindings.length}** |`,
    `| Luna | **${lunaFindings.length}** |`,
    `| Luna batches | **${lunaBatches.length}** (${stats.totalFields} fields) |`,
    `| Luna loaded | **${lunaCompleted}/${lunaBatches.length}** |`,
    `| Production changes | **0** |`,
    "",
    "> **PROPOSED_ES** nav automātiski OWNER apstiprināts labojums.",
    "",
    "## COVERAGE",
    "",
    "| Avots | Lauki |",
    "|---|---|",
    ...Object.entries(stats.bySource || {}).map(([k, v]) => `| ${k} | ${v} |`),
    "",
    "## TECHNICAL GATES",
    "",
    "| Gate | Result |",
    "|---|---|",
    `| Syntax | **${syntax.pass ? "PASS" : "FAIL"}** |`,
    `| validate-kurss.js --lang=es | **${validateKurss.pass ? "PASS" : "FAIL"}** |`,
    `| Structure vs LV MASTER | **${structure.pass ? "PASS" : "FAIL"}** (${structure.issueCount} issues) |`,
    `| Legacy HTML drift L1–7 | **${legacyDrift.pass ? "PASS" : "FAIL"}** (${legacyDrift.issueCount} issues) |`,
    `| Mirror data↔www | **${mirror.pass ? "PASS" : "FAIL"}** |`,
    `| DE baseline changes | **${deCheck.changes}** (${deCheck.pass ? "PASS" : "note"}) |`,
    `| Luna coverage | **${lunaLoaded ? "PASS" : SKIP_LUNA ? "SKIPPED" : "PENDING"}** |`,
    "",
    "## Kategorijas",
    "",
    ...Object.entries(byCategory)
      .sort((a, b) => b[1] - a[1])
      .map(([k, v]) => `- ${k}: **${v}**`),
    "",
    "## Verdict",
    "",
    verdict,
    "",
  ];

  if (allFindings.length) {
    md.push("## Findings (sample)", "");
    const show = allFindings.slice(0, 100);
    for (const f of show) {
      md.push(`### ${f.id} [${f.severity}] ${f.category}`, "");
      md.push(`- **Lesson:** \`${f.lessonId}\``);
      md.push(`- **Path:** \`${f.path}\``);
      if (f.deContext) md.push(`- **DE_CONTEXT:** ${String(f.deContext).slice(0, 200)}`);
      md.push(`- **ES_CURRENT:** ${String(f.esCurrent).slice(0, 400)}`);
      md.push(`- **Problem:** ${f.problem}`);
      if (f.proposedEs) md.push(`- **PROPOSED_ES:** ${String(f.proposedEs).slice(0, 300)}`);
      md.push(`- **Avots:** ${f.source}`);
      md.push("");
    }
    if (allFindings.length > 100) md.push(`_… and ${allFindings.length - 100} more in JSON._`, "");
  }

  if (!lunaLoaded && !SKIP_LUNA) {
    md.push(
      "## Luna pending",
      "",
      `Export: \`${LUNA_DIR}/batch-*.json\`. Re-run with \`--resume\` after batches complete.`,
      "",
    );
  }

  const summaryMd = [
    `# ES–DE Kurss Lessons — audita kopsavilkums`,
    "",
    `**Verdict:** ${verdict.replace(/\*\*/g, "")}`,
    `**HEAD:** \`${head}\``,
    `**MASTER:** v${MASTER_VERSION}`,
    `**Lauki:** ${stats.totalFields}`,
    `**Findings:** ${allFindings.length}`,
    `**Luna:** ${lunaCompleted}/${lunaBatches.length} batches`,
    "",
    `Pilns audits: \`reports/es-kurss-lessons-full-audit.md\``,
    "",
  ].join("\n");

  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.mkdirSync(path.dirname(REPORT), { recursive: true });
  fs.writeFileSync(REPORT, md.join("\n"));
  fs.writeFileSync(SUMMARY, summaryMd);
  fs.writeFileSync(
    JSON_OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        head,
        masterVersion: MASTER_VERSION,
        stats,
        structure: { pass: structure.pass, issueCount: structure.issueCount, issues: structure.issues },
        legacyDrift: { pass: legacyDrift.pass, issueCount: legacyDrift.issueCount, issues: legacyDrift.issues },
        gates: {
          syntax: syntax.pass,
          validateKurss: validateKurss.pass,
          mirror: mirror.pass,
          structure: structure.pass,
          legacyDrift: legacyDrift.pass,
          deChanges: deCheck.changes,
          lunaLoaded,
        },
        coverage: { totalFields: stats.totalFields, lessons: stats.lessons, pass: coveragePass },
        bySev,
        byCategory,
        lunaBatches: lunaBatches.length,
        lunaLoaded,
        lunaStats,
        pass,
        verdict: verdict.replace(/\*\*/g, ""),
        findings: allFindings,
      },
      null,
      2,
    ),
  );

  console.log(
    JSON.stringify(
      {
        totalFields: stats.totalFields,
        bySev,
        findings: allFindings.length,
        deterministic: detFindings.length,
        luna: lunaFindings.length,
        lunaBatches: lunaBatches.length,
        lunaLoaded,
        pass,
        verdict: verdict.replace(/\*\*/g, ""),
        report: REPORT,
      },
      null,
      2,
    ),
  );
  process.exit(pass ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
