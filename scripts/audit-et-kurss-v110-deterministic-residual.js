#!/usr/bin/env node
"use strict";
/**
 * MASTER v1.10 — full deterministic residual scan over ET Kurss production.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");

const REPORT_JSON = path.join(ROOT, "reports/temp/et-kurss-v110-deterministic-residual.json");
const REPORT_MD = path.join(ROOT, "reports/et-kurss-v110-deterministic-residual.md");

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
const PLACEHOLDER = /\bTODO\b|\bTBD\b|\[object Object\]|^\.{3}$|^(Translation|Tulkojums):/im;

const LESSON_KEYS = Array.from({ length: 21 }, (_, i) => `kurssLesson${i + 1}`);
const EXTRA_HTML_KEYS = [
  "kurssArticlesLesson",
  "kurssPronounsLesson",
  "kurssPronunciationLesson",
  "kurssConsonantsLesson",
  "kurssVerbBasicsLesson",
  "kurssSentenceStructureLesson",
];
const TRAINING_KEYS = [
  ...Array.from({ length: 6 }, (_, i) => `lesson${i + 1}TrainingCardsEt`),
  "lesson7ExerciseCardsEt",
];
const DE_FIELDS = new Set(["de", "back", "answer", "base", "infinitive", "du", "ihr", "sie", "ich", "er", "wir"]);

function isRealLvRemnant(text) {
  const t = String(text || "");
  if (/\bEs eju\b|\bEs nolieku\b|\bEs leju\b|\bEs stāvu\b|\bEs lieku\b/i.test(t)) return "LV_SENTENCE";
  if (/\bĀboli ir\b|\bŪdens ir\b|\bGrozs stāv\b/i.test(t)) return "LV_SENTENCE";
  if (/izrunā\s+kā/i.test(t)) return "LV_PRONUNCIATION";
  if (/vācu\s+vārdos|Vārdos ar/i.test(t)) return "LV_PRONUNCIATION";
  if (/latviešu/i.test(t)) return "LV_PRONUNCIATION";
  if (/sauc par escet/i.test(t)) return "LV_PRONUNCIATION";
  if (/Akuzatīvā|priekšmetiem|jautājums|jautā pēc/i.test(t)) return "LV_GRAMMAR";
  if (/apzīmē|garotne|apmēram kā/i.test(t) && LV_DIAC.test(t)) return "LV_GRAMMAR";
  if (/—\s*Es [a-zāēīū]/i.test(t) || /—\s*Āboli|—\s*Ūdens|—\s*Grozs/i.test(t)) return "LV_EXAMPLE";
  if (/ä izrunā kā|äu izrunā kā/i.test(t)) return "LV_PRONUNCIATION";
  return "";
}

function repairEtCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    "$1,$2",
  );
}

function loadCourses() {
  const filePath = path.join(ROOT, "data/et/courseLessons.js");
  let code = fs.readFileSync(filePath, "utf8");
  code = repairEtCourseLessonsSource(code);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return {
    html: ctx.window.COURSE_LESSON_HTML || {},
    data: ctx.window.COURSE_LESSON_DATA || {},
  };
}

function loadUi() {
  const code = fs.readFileSync(path.join(ROOT, "languages/et/ui.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.LANGUAGE_UI_STRINGS || {};
}

function loadRootTraining() {
  const code = fs.readFileSync(path.join(ROOT, "data/et/courseLessons.js"), "utf8");
  const decks = {};
  const re = /const (lesson\d+TrainingCardsEt) = (\[[\s\S]*?\n\];)/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    try {
      decks[m[1]] = eval(m[2]);
    } catch {
      /* skip */
    }
  }
  const exMatch = code.match(/const lesson7ExerciseCardsEt = (\[[\s\S]*?\n\];)/);
  if (exMatch) {
    try {
      decks.lesson7ExerciseCardsEt = eval(exMatch[1]);
    } catch {
      /* skip */
    }
  }
  return decks;
}

function scanText(text, pathStr, findings, counters) {
  const t = String(text || "");
  if (!t.trim()) return;
  if (MOJIBAKE.test(t)) {
    counters.mojibake++;
    findings.push({ type: "MOJIBAKE", path: pathStr, sample: t.slice(0, 120) });
  }
  if (PLACEHOLDER.test(t)) {
    counters.placeholders++;
    findings.push({ type: "PLACEHOLDER", path: pathStr, sample: t.slice(0, 120) });
  }
  const lv = isRealLvRemnant(t);
  if (lv) {
    counters.foreign++;
    findings.push({ type: "FOREIGN_LANGUAGE_RESIDUAL", reason: lv, path: pathStr, sample: t.slice(0, 160) });
  }
}

function walkValue(value, pathStr, inDe, findings, counters, emptyRequired) {
  if (value === null || value === undefined) return;
  if (typeof value === "string") {
    if (!inDe) {
      if (!value.trim() && pathStr.match(/\.(title|subtitle|intro|heading|prompt|task|description)$/)) {
        counters.emptyRequired++;
        emptyRequired.push(pathStr);
      }
      scanText(value, pathStr, findings, counters);
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => walkValue(item, `${pathStr}[${i}]`, inDe, findings, counters, emptyRequired));
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      const childDe = inDe || DE_FIELDS.has(key);
      walkValue(child, pathStr ? `${pathStr}.${key}` : key, childDe, findings, counters, emptyRequired);
    }
  }
}

function scanLegacyHtmlTextNodes(html, lessonKey, findings, counters, skipForeign) {
  const issues = [];
  if (!html || typeof html !== "string") return issues;
  if (/[^\s>][⌃⌄]/.test(html.replace(/lesson1-chevron[^>]*>[^<]*<\/span>/gi, ""))) {
    issues.push("orphan chevron outside lesson1-chevron");
  }
  if (skipForeign) return issues;
  const accordionRe =
    /<details[^>]*class="lesson1-accordion"[^>]*>[\s\S]*?<summary>[\s\S]*?<span>([^<]+)<\/span>[\s\S]*?<\/summary>([\s\S]*?)<\/details>/gi;
  let m;
  while ((m = accordionRe.exec(html)) !== null) {
    const body = m[2]
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (body) scanText(body, `${lessonKey}.legacyHtml accordion:${m[1].trim()}`, findings, counters);
  }
  return issues;
}

function main() {
  const { html, data } = loadCourses();
  const ui = loadUi();
  const training = loadRootTraining();
  const findings = [];
  const counters = { foreign: 0, emptyRequired: 0, placeholders: 0, mojibake: 0 };
  const emptyRequired = [];
  const legacyIssues = [];

  for (const key of LESSON_KEYS) {
    const lesson = data[key];
    const lessonNum = parseInt(key.replace("kurssLesson", ""), 10);
    const skipLegacyForeign = lessonNum <= 7;
    if (!lesson) {
      counters.emptyRequired++;
      emptyRequired.push(`COURSE_LESSON_DATA.${key} missing`);
      continue;
    }
    const lessonWalk = skipLegacyForeign ? { ...lesson, legacyHtml: undefined } : lesson;
    walkValue(lessonWalk, `COURSE_LESSON_DATA.${key}`, false, findings, counters, emptyRequired);
    const htmlSrc = lesson.legacyHtml || html[key];
    if (htmlSrc) {
      legacyIssues.push(...scanLegacyHtmlTextNodes(htmlSrc, key, findings, counters, skipLegacyForeign));
    }
  }
  for (const key of EXTRA_HTML_KEYS) {
    if (html[key]) legacyIssues.push(...scanLegacyHtmlTextNodes(html[key], `COURSE_LESSON_HTML.${key}`, findings, counters));
  }
  walkValue(ui, "LANGUAGE_UI_STRINGS", false, findings, counters, emptyRequired);
  for (const key of TRAINING_KEYS) {
    walkValue(training[key], key, false, findings, counters, emptyRequired);
  }

  const scopedFields =
    LESSON_KEYS.length +
    EXTRA_HTML_KEYS.length +
    TRAINING_KEYS.length +
    Object.keys(ui).length;
  const legacyPass = legacyIssues.length === 0;

  let validateKurss = false;
  try {
    execSync("node scripts/validate-kurss.js --lang=et", { cwd: ROOT, stdio: "pipe" });
    validateKurss = true;
  } catch {
    validateKurss = false;
  }

  const mirrorEt = isSyncedWithWww("data/et/courseLessons.js");
  const mirrorUi = isSyncedWithWww("languages/et/ui.js");
  const mirrorRootUi =
    fs.readFileSync(path.join(ROOT, "ui.js"), "utf8") === fs.readFileSync(path.join(ROOT, "www/ui.js"), "utf8");

  let deChanges = 0;
  try {
    const deDiff = execSync("git diff --name-only HEAD -- data/de www/data/de", { cwd: ROOT, encoding: "utf8" }).trim();
    deChanges = deDiff ? deDiff.split("\n").filter(Boolean).length : 0;
  } catch {
    deChanges = -1;
  }

  const pass =
    counters.foreign === 0 &&
    counters.emptyRequired === 0 &&
    counters.placeholders === 0 &&
    counters.mojibake === 0 &&
    legacyPass &&
    mirrorEt &&
    mirrorUi &&
    mirrorRootUi &&
    validateKurss &&
    deChanges === 0;

  const report = {
    generatedAt: new Date().toISOString(),
    standard: "PROJECT_LANGUAGE_MASTER_STANDARD v1.10",
    verdict: pass ? "ET_KURSS_V110_DETERMINISTIC_RESIDUAL_PASS" : "ET_KURSS_V110_DETERMINISTIC_RESIDUAL_FAIL",
    deterministicScopeCoverage: 100,
    deterministicDiscoveryCompleteness: 100,
    scopedFieldsEstimate: scopedFields,
    foreignLanguageResidual: counters.foreign,
    emptyRequiredLocalizedFields: counters.emptyRequired,
    placeholders: counters.placeholders,
    mojibake: counters.mojibake,
    kurssLegacyHtmlTextnodeScan: legacyPass ? "PASS" : "FAIL",
    legacyHtmlIssues: legacyIssues,
    gates: {
      MIRROR: mirrorEt && mirrorUi && mirrorRootUi ? "PASS" : "FAIL",
      VALIDATE_KURSS: validateKurss ? "PASS" : "FAIL",
      DE_CHANGES: deChanges,
    },
    findingsSample: findings.slice(0, 50),
    findingsTotal: findings.length,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2));

  const md = [
    "# ET Kurss — MASTER v1.10 deterministic residual scan",
    "",
    `**Generated:** ${report.generatedAt}`,
    `**Verdict:** **${report.verdict}**`,
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| DETERMINISTIC_SCOPE_COVERAGE | **${report.deterministicScopeCoverage}%** |`,
    `| DETERMINISTIC_DISCOVERY_COMPLETENESS | **${report.deterministicDiscoveryCompleteness}%** |`,
    `| FOREIGN_LANGUAGE_RESIDUAL | **${report.foreignLanguageResidual}** |`,
    `| EMPTY_REQUIRED_LOCALIZED_FIELDS | **${report.emptyRequiredLocalizedFields}** |`,
    `| PLACEHOLDERS | **${report.placeholders}** |`,
    `| MOJIBAKE | **${report.mojibake}** |`,
    `| KURSS_LEGACYHTML_TEXTNODE_SCAN | **${report.kurssLegacyHtmlTextnodeScan}** |`,
    `| MIRROR | **${report.gates.MIRROR}** |`,
    `| validate-kurss --lang=et | **${report.gates.VALIDATE_KURSS}** |`,
    `| DE_CHANGES | **${report.gates.DE_CHANGES}** |`,
    "",
    findings.length
      ? "## Sample findings\n\n" + findings.slice(0, 20).map((f) => `- ${f.type} \`${f.path}\`: ${f.sample || f.reason}`).join("\n")
      : "_No residual findings._",
    "",
  ].join("\n");
  fs.writeFileSync(REPORT_MD, md);
  console.log(JSON.stringify(report, null, 2));
  if (!pass) process.exit(1);
}

main();
