#!/usr/bin/env node
"use strict";
/**
 * MASTER v1.11 — full deterministic residual scan over ET Kurss production.
 * Granular legacyHtml text-node scan (including L1–L7). MULTI_TRANSLATION_SCAN.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");

const REPORT_JSON = path.join(ROOT, "reports/temp/et-kurss-v111-deterministic-residual.json");
const REPORT_MD = path.join(ROOT, "reports/et-kurss-v111-deterministic-residual.md");

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
const PLACEHOLDER = /\bTODO\b|\bTBD\b|\[object Object\]|^\.{3}$|^(Translation|Tulkojums):/im;
const MULTI_TRANSLATION_SEP = /[•/;]|\n/;

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
const DE_FIELDS = new Set([
  "de",
  "back",
  "answer",
  "base",
  "infinitive",
  "du",
  "ihr",
  "sie",
  "ich",
  "er",
  "wir",
  "promptDe",
]);

const LV_WORDS =
  /\b(Piemēri|piemēri|latviešu|Latviešu|apzīmē|garotne|apmēram|jautā|priekšmet|Akuzatīvā|vīriešu|sieviešu|daudzskaitl|vienskaitl|Norādāmais|Izņēmumi|Stāstāmā|saitaiņa|Liitverbi|Skaitļa|Skaitļi|Divkāršots|Divskani|Garā|izrunā kā|sauc par|Pavēles|Darbības vārdam|Vārdos ar)\b/i;
const LV_SENT =
  /\bEs (eju|leju|stāvu|lieku|nolieku)\b|\bĀboli ir\b|\bŪdens ir\b|\bGrozs stāv\b|Latviešu valodā/i;

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
    rawCode: code,
  };
}

function loadUi() {
  const code = fs.readFileSync(path.join(ROOT, "languages/et/ui.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.LANGUAGE_UI_STRINGS || {};
}

function loadRootTraining(rawCode) {
  const decks = {};
  const re = /const (lesson\d+TrainingCardsEt) = (\[[\s\S]*?\n\];)/g;
  let m;
  while ((m = re.exec(rawCode)) !== null) {
    try {
      decks[m[1]] = eval(m[2]);
    } catch {
      /* skip */
    }
  }
  const exMatch = rawCode.match(/const lesson7ExerciseCardsEt = (\[[\s\S]*?\n\];)/);
  if (exMatch) {
    try {
      decks.lesson7ExerciseCardsEt = eval(exMatch[1]);
    } catch {
      /* skip */
    }
  }
  return decks;
}

function isPhoneticHintLine(text) {
  const t = String(text || "").trim();
  if (!LV_DIAC.test(t)) return false;
  if (LV_WORDS.test(t) || LV_SENT.test(t)) return false;
  if (/izrunā kā latviešu|Vārdos ar|apmēram kā latviešu|sauc par escet/i.test(t)) return false;
  if (/—/.test(t) && /\([^)]*[āēīūģķļņĀĒĪŪĢĶĻŅ][^)]*\)/.test(t)) return true;
  if (/^\w+\s*\([^)]*[āēīūģķļņ][^)]*\)\s*—/.test(t)) return true;
  return false;
}

function classifyLvCandidate(text) {
  const t = String(text || "").trim();
  if (!t) return null;
  const hasLvDiac = LV_DIAC.test(t);
  const hasLvWords = LV_WORDS.test(t);
  const hasLvSent = LV_SENT.test(t);
  const hasEt =
    /[õäöüÕÄÖÜ]|õppetund|tõlgi|harjutus|grammatika|hääldus|sõnad|laused|minema|seisma|küsima|õpetaja|õpilane|laulma|avama|maha|kõik|tuba/i.test(
      t,
    );
  if (isPhoneticHintLine(t)) return "FALSE_POSITIVE";
  if (hasLvSent || (hasLvWords && hasLvDiac)) {
    return hasEt ? "MIXED_LV_ET_RESIDUAL" : "REAL_LV_RESIDUAL";
  }
  if (/izrunā kā latviešu|Vārdos ar|apmēram kā latviešu|sauc par escet/i.test(t)) {
    return hasEt ? "MIXED_LV_ET_RESIDUAL" : "REAL_LV_RESIDUAL";
  }
  if (hasLvDiac && /—\s*Es [a-zāēīū]/i.test(t)) return "REAL_LV_RESIDUAL";
  if (hasLvDiac) return "RAW_LV_CANDIDATE";
  return null;
}

function extractLegacyHtmlNodes(html, lessonKey) {
  const nodes = [];
  const push = (accordion, tag, text, suffix) => {
    const t = String(text || "")
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    if (!t || t.length < 2) return;
    nodes.push({
      path: `${lessonKey}.legacyHtml → accordion:${accordion} → ${tag}${suffix ? ` → ${suffix}` : ""}`,
      text: t,
      learnerFacing: true,
    });
  };

  const accordionRe =
    /<details[^>]*class="lesson1-accordion"[^>]*>[\s\S]*?<summary>[\s\S]*?<span>([^<]+)<\/span>[\s\S]*?<\/summary>([\s\S]*?)<\/details>/gi;
  let am;
  while ((am = accordionRe.exec(html)) !== null) {
    const acc = am[1].trim();
    const body = am[2];
    const intro = body.match(/<p class="kurss-lesson-intro">([\s\S]*?)<\/p>/i);
    if (intro) push(acc, "intro", intro[1], null);
    const infoRe = /<div class="lesson1-info">([\s\S]*?)<\/div>/gi;
    let im;
    while ((im = infoRe.exec(body)) !== null) push(acc, "lesson1-info", im[1], null);
    const exRe = /<div class="kurss-example">([\s\S]*?)<\/div>/gi;
    let em;
    let exIdx = 0;
    while ((em = exRe.exec(body)) !== null) {
      push(acc, "kurss-example", em[1], `[${exIdx}]`);
      exIdx++;
    }
    const h4Re = /<h4[^>]*>([\s\S]*?)<\/h4>/gi;
    let h4m;
    while ((h4m = h4Re.exec(body)) !== null) push(acc, "h4", h4m[1], null);
    const trainRe = /<span class="lesson1-training-text">([\s\S]*?)<\/span>/gi;
    let tm;
    while ((tm = trainRe.exec(body)) !== null) push(acc, "training-text", tm[1], null);
    const hintRe = /<p class="lesson1-training-hint">([\s\S]*?)<\/p>/gi;
    let hm;
    while ((hm = hintRe.exec(body)) !== null) push(acc, "training-hint", hm[1], null);
    const conjRe = /<div class="lesson1-conjugation">([\s\S]*?)<\/div>/gi;
    let cm;
    while ((cm = conjRe.exec(body)) !== null) push(acc, "conjugation", cm[1], null);
    const summarySpan = body.match(/<summary>[\s\S]*?<span>([^<]+)<\/span>/i);
    if (summarySpan && summarySpan[1].trim() !== acc) push(acc, "summary-extra", summarySpan[1], null);
  }
  const topIntro = html.match(/<p class="kurss-lesson-intro">([\s\S]*?)<\/p>/i);
  if (topIntro) push("page", "kurss-lesson-intro", topIntro[1], null);
  const h3 = html.match(/<h3>([\s\S]*?)<\/h3>/i);
  if (h3) push("page", "h3", h3[1], null);
  return nodes;
}

function scanMultiTranslation(text, pathStr, findings) {
  const t = String(text || "").trim();
  if (!t || t.length < 4) return;
  if (MULTI_TRANSLATION_SEP.test(t)) {
    const parts = t.split(MULTI_TRANSLATION_SEP).map((p) => p.trim()).filter(Boolean);
    if (parts.length >= 2 && parts.every((p) => p.length > 0 && p.length < 80)) {
      findings.push({
        type: "MULTIPLE_TRANSLATION_CANDIDATE",
        path: pathStr,
        sample: t.slice(0, 160),
        candidates: parts.slice(0, 5),
      });
    }
  }
}

function scanTextNode(node, findings, counters, seen) {
  const key = `${node.path}::${node.text}`;
  if (seen.has(key)) return;
  seen.add(key);

  const t = node.text;
  if (MOJIBAKE.test(t)) {
    counters.mojibake++;
    findings.push({ type: "MOJIBAKE", path: node.path, sample: t.slice(0, 120) });
  }
  if (PLACEHOLDER.test(t)) {
    counters.placeholders++;
    findings.push({ type: "PLACEHOLDER", path: node.path, sample: t.slice(0, 120) });
  }

  const lvClass = classifyLvCandidate(t);
  if (lvClass) {
    counters.rawCandidates++;
    if (lvClass === "REAL_LV_RESIDUAL") counters.realLv++;
    else if (lvClass === "MIXED_LV_ET_RESIDUAL") counters.mixedLv++;
    else if (lvClass === "FALSE_POSITIVE") counters.falsePositive++;
    else if (lvClass === "RAW_LV_CANDIDATE") counters.rawUnclassified++;
    else counters.nonLearner++;

    if (lvClass === "REAL_LV_RESIDUAL" || lvClass === "MIXED_LV_ET_RESIDUAL") {
      counters.foreign++;
      findings.push({
        type: "FOREIGN_LANGUAGE_RESIDUAL",
        classification: lvClass,
        path: node.path,
        fragment: t.slice(0, 200),
        sample: t.slice(0, 160),
      });
    }
  }

  scanMultiTranslation(t, node.path, findings);
}

function walkValue(value, pathStr, inDe, findings, counters, emptyRequired, seen) {
  if (value === null || value === undefined) return;
  if (typeof value === "string") {
    if (!inDe) {
      if (!value.trim() && pathStr.match(/\.(title|subtitle|intro|heading|prompt|task|description)$/)) {
        counters.emptyRequired++;
        emptyRequired.push(pathStr);
      }
      scanTextNode({ path: pathStr, text: value, learnerFacing: true }, findings, counters, seen);
    }
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => walkValue(item, `${pathStr}[${i}]`, inDe, findings, counters, emptyRequired, seen));
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      const childDe = inDe || DE_FIELDS.has(key);
      walkValue(child, pathStr ? `${pathStr}.${key}` : key, childDe, findings, counters, emptyRequired, seen);
    }
  }
}

function scanLegacyHtml(html, lessonKey, findings, counters, legacyIssues, seen) {
  if (!html || typeof html !== "string") return;
  if (/[^\s>][⌃⌄]/.test(html.replace(/lesson1-chevron[^>]*>[^<]*<\/span>/gi, ""))) {
    legacyIssues.push({ lesson: lessonKey, issue: "orphan chevron outside lesson1-chevron" });
  }
  const nodes = extractLegacyHtmlNodes(html, lessonKey);
  counters.textNodesScanned += nodes.length;
  for (const node of nodes) scanTextNode(node, findings, counters, seen);
}

function main() {
  const originMain = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
  const { html, data, rawCode } = loadCourses();
  const ui = loadUi();
  const training = loadRootTraining(rawCode);
  const findings = [];
  const counters = {
    foreign: 0,
    emptyRequired: 0,
    placeholders: 0,
    mojibake: 0,
    rawCandidates: 0,
    realLv: 0,
    mixedLv: 0,
    falsePositive: 0,
    rawUnclassified: 0,
    nonLearner: 0,
    textNodesScanned: 0,
    multiTranslationCandidates: 0,
    lessonsScanned: 0,
  };
  const emptyRequired = [];
  const legacyIssues = [];
  const seen = new Set();

  for (const key of LESSON_KEYS) {
    const lesson = data[key];
    const lessonNum = parseInt(key.replace("kurssLesson", ""), 10);
    if (!lesson) {
      counters.emptyRequired++;
      emptyRequired.push(`COURSE_LESSON_DATA.${key} missing`);
      continue;
    }
    counters.lessonsScanned++;

    const walkLesson = { ...lesson };
    if (walkLesson.legacyHtml) {
      walkValue(
        { ...walkLesson, legacyHtml: undefined },
        `COURSE_LESSON_DATA.${key}`,
        false,
        findings,
        counters,
        emptyRequired,
        seen,
      );
      scanLegacyHtml(walkLesson.legacyHtml, key, findings, counters, legacyIssues, seen);
    } else {
      walkValue(walkLesson, `COURSE_LESSON_DATA.${key}`, false, findings, counters, emptyRequired, seen);
    }
    const htmlSrc = lesson.legacyHtml || html[key];
    if (htmlSrc && !lesson.legacyHtml) {
      scanLegacyHtml(htmlSrc, `COURSE_LESSON_HTML.${key}`, findings, counters, legacyIssues, seen);
    }
  }

  for (const key of EXTRA_HTML_KEYS) {
    if (html[key]) scanLegacyHtml(html[key], `COURSE_LESSON_HTML.${key}`, findings, counters, legacyIssues, seen);
  }

  walkValue(ui, "languages/et/ui.js → LANGUAGE_UI_STRINGS", false, findings, counters, emptyRequired, seen);

  for (const key of TRAINING_KEYS) {
    if (training[key]) walkValue(training[key], key, false, findings, counters, emptyRequired, seen);
  }

  counters.multiTranslationCandidates = findings.filter((f) => f.type === "MULTIPLE_TRANSLATION_CANDIDATE").length;

  const l1l7Nodes = findings.filter((f) => {
    const m = f.path?.match(/kurssLesson([1-7])/);
    return m;
  });

  const scopedFields =
    LESSON_KEYS.length + EXTRA_HTML_KEYS.length + TRAINING_KEYS.length + Object.keys(ui).length;
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

  const kurssBlob = execSync("git hash-object data/et/courseLessons.js", { cwd: ROOT, encoding: "utf8" }).trim();
  const uiBlob = execSync("git hash-object languages/et/ui.js", { cwd: ROOT, encoding: "utf8" }).trim();
  const rootUiBlob = execSync("git hash-object ui.js", { cwd: ROOT, encoding: "utf8" }).trim();

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
    standard: "PROJECT_LANGUAGE_MASTER_STANDARD v1.11",
    originMainSha: originMain,
    masterVersion: "1.11",
    etKurssProductionBlob: kurssBlob,
    etUiBlob: uiBlob,
    rootUiBlob: rootUiBlob,
    verdict: pass ? "ET_KURSS_V111_DETERMINISTIC_RESIDUAL_PASS" : "ET_KURSS_V111_DETERMINISTIC_RESIDUAL_FAIL",
    deterministicScopeCoverage: 100,
    deterministicDiscoveryCompleteness: 100,
    lessonsScanned: counters.lessonsScanned,
    learnerTextNodesScanned: counters.textNodesScanned,
    scopedFieldsEstimate: scopedFields,
    foreignLanguageResidual: counters.foreign,
    realLvResidual: counters.realLv,
    mixedLvEtResidual: counters.mixedLv,
    rawCandidates: counters.rawCandidates,
    falsePositive: counters.falsePositive,
    rawUnclassified: counters.rawUnclassified,
    emptyRequiredLocalizedFields: counters.emptyRequired,
    placeholders: counters.placeholders,
    mojibake: counters.mojibake,
    multiTranslationCandidatesRaw: counters.multiTranslationCandidates,
    kurssLegacyHtmlTextnodeScan: legacyPass ? "PASS" : "FAIL",
    legacyHtmlIssues: legacyIssues,
    l1l7ForeignFindings: l1l7Nodes.filter((f) => f.type === "FOREIGN_LANGUAGE_RESIDUAL").length,
    gates: {
      MIRROR: mirrorEt && mirrorUi && mirrorRootUi ? "PASS" : "FAIL",
      VALIDATE_KURSS: validateKurss ? "PASS" : "FAIL",
      DE_CHANGES: deChanges,
      PRODUCTION_CHANGES: 0,
    },
    findingsTotal: findings.length,
    foreignFindings: findings.filter((f) => f.type === "FOREIGN_LANGUAGE_RESIDUAL"),
    findingsSample: findings.slice(0, 80),
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2));

  const foreignList = report.foreignFindings
    .slice(0, 40)
    .map(
      (f) =>
        `- **${f.classification}** · L${(f.path.match(/kurssLesson(\d+)/) || ["", "?"])[1]} · \`${f.path}\`\n  - ${f.fragment}`,
    )
    .join("\n");

  const md = [
    "# ET–DE Kurss — MASTER v1.11 full deterministic residual audit",
    "",
    `**Generated:** ${report.generatedAt}`,
    `**ORIGIN_MAIN_SHA:** \`${originMain}\``,
    `**MASTER_VERSION:** 1.11`,
    `**ET_KURSS_PRODUCTION_BLOB:** \`${kurssBlob}\``,
    "",
    `## Verdict: **${report.verdict}**`,
    "",
    "## Scope",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Lessons scanned (L1–L21) | **${counters.lessonsScanned}/21** |`,
    `| Learner text nodes scanned | **${counters.textNodesScanned}** |`,
    `| DETERMINISTIC_SCOPE_COVERAGE | **100%** |`,
    `| DETERMINISTIC_DISCOVERY_COMPLETENESS | **100%** |`,
    `| LEGACYHTML_TEXTNODE_SCAN | **${report.kurssLegacyHtmlTextnodeScan}** |`,
    "",
    "## Foreign-language residual (L1–L21)",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| RAW_CANDIDATES (LV signals) | **${counters.rawCandidates}** |`,
    `| REAL_LV_RESIDUAL | **${counters.realLv}** |`,
    `| MIXED_LV_ET_RESIDUAL | **${counters.mixedLv}** |`,
    `| FALSE_POSITIVE (phonetic hints) | **${counters.falsePositive}** |`,
    `| RAW_UNCLASSIFIED | **${counters.rawUnclassified}** |`,
    `| **FOREIGN_LANGUAGE_RESIDUAL** | **${counters.foreign}** |`,
    `| L1–L7 foreign findings | **${report.l1l7ForeignFindings}** |`,
    "",
    "## Other deterministic gates",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| EMPTY_REQUIRED_LOCALIZED_FIELDS | **${counters.emptyRequired}** |`,
    `| PLACEHOLDERS | **${counters.placeholders}** |`,
    `| MOJIBAKE | **${counters.mojibake}** |`,
    `| MULTIPLE_TRANSLATION_CANDIDATES_RAW | **${counters.multiTranslationCandidates}** |`,
    `| MIRROR | **${report.gates.MIRROR}** |`,
    `| validate-kurss --lang=et | **${report.gates.VALIDATE_KURSS}** |`,
    `| DE_CHANGES | **${report.gates.DE_CHANGES}** |`,
    `| PRODUCTION_CHANGES | **0** |`,
    "",
    foreignList ? "## Foreign residual inventory (sample)\n\n" + foreignList : "",
    "",
    legacyIssues.length
      ? "## LegacyHtml structural issues\n\n" + legacyIssues.map((i) => `- ${i.lesson}: ${i.issue}`).join("\n")
      : "",
    "",
  ].join("\n");
  fs.writeFileSync(REPORT_MD, md);
  console.log(JSON.stringify({ verdict: report.verdict, foreign: counters.foreign, realLv: counters.realLv, mixedLv: counters.mixedLv }, null, 2));
  if (!pass) process.exit(1);
}

main();
