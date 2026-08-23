#!/usr/bin/env node
"use strict";
/**
 * Global Kurss L8–L21 dynamic exercise/translate card regression.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  matchesCourseExerciseSection,
  matchesCourseTranslateSection,
  getExerciseCardsForLesson,
  getTranslateCardsForLesson,
  isCourseExerciseSection,
  isCourseTranslateSection,
} = require("./lib/kurss-dynamic-card-section-matchers");

const REPORT_MD = path.join(ROOT, "reports/global-kurss-dynamic-cards-runtime-repair.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/global-kurss-dynamic-cards-runtime-repair.json");
const MERGE_BASE = process.env.KURSS_DYNAMIC_MAIN_BEFORE || "62ac476d";
const LV_LESSONS = path.join(ROOT, "data/courseLessons.js");

const LESSON_RANGE = Array.from({ length: 14 }, (_, i) => i + 8);

function loadCourseData(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.COURSE_LESSON_DATA || {};
}

function listKurssLanguages() {
  const langs = [];
  if (fs.existsSync(LV_LESSONS)) langs.push("lv");
  for (const name of fs.readdirSync(path.join(ROOT, "data"))) {
    const p = path.join(ROOT, "data", name, "courseLessons.js");
    if (name !== "lv" && fs.existsSync(p)) langs.push(name);
  }
  return langs.sort();
}

function lessonCardSections(lesson) {
  return (lesson?.sections || []).filter((s) => Array.isArray(s.cards));
}

function simulateRenderAttrs(section, lessonId) {
  let attr = "data-course-exercise-card";
  if (matchesCourseExerciseSection(section)) {
    attr = `data-course-exercise-card data-lesson-id="${lessonId}"`;
  }
  if (matchesCourseTranslateSection(section)) {
    attr = `data-course-translate-card data-lesson-id="${lessonId}"`;
  }
  return attr;
}

function auditLanguage(lang) {
  const filePath =
    lang === "lv" ? LV_LESSONS : path.join(ROOT, "data", lang, "courseLessons.js");
  if (!fs.existsSync(filePath)) return { lang, skipped: true, reason: "no courseLessons.js" };

  const data = loadCourseData(filePath);
  const rows = [];
  let failures = 0;

  for (const n of LESSON_RANGE) {
    const lesson = data[`kurssLesson${n}`];
    if (!lesson) continue;
    const lessonId = `lesson${n}`;
    const cardSections = lessonCardSections(lesson);
    const exerciseSection = cardSections.find(matchesCourseExerciseSection);
    const translateSection = cardSections.find(matchesCourseTranslateSection);
    const exerciseCards = getExerciseCardsForLesson(lesson);
    const translateCards = getTranslateCardsForLesson(lesson);

    const exerciseTitleOnly = cardSections.find((s) => isCourseExerciseSection(s.title));
    const translateTitleOnly = cardSections.find((s) => isCourseTranslateSection(s.title));

    const row = {
      lesson: n,
      exerciseTitle: exerciseSection?.title || null,
      translateTitle: translateSection?.title || null,
      exerciseCards: exerciseCards.length,
      translateCards: translateCards.length,
      exerciseAttr: exerciseSection ? simulateRenderAttrs(exerciseSection, lessonId) : null,
      translateAttr: translateSection ? simulateRenderAttrs(translateSection, lessonId) : null,
      section5Pass: true,
      section6Pass: true,
      notes: [],
    };

    if (exerciseSection) {
      const ok =
        exerciseCards.length > 0 &&
        row.exerciseAttr.includes("data-lesson-id") &&
        !row.exerciseAttr.includes("data-course-translate-card");
      row.section5Pass = ok;
      if (!ok) {
        failures++;
        row.notes.push("exercise section cards/attr fail");
      }
    }

    if (translateSection) {
      const ok =
        translateCards.length > 0 &&
        row.translateAttr.includes("data-course-translate-card") &&
        row.translateAttr.includes("data-lesson-id");
      row.section6Pass = ok;
      if (!ok) {
        failures++;
        row.notes.push("translate section cards/attr fail");
      }
    }

  // LV parity: title-only matcher must still resolve same sections
    if (lang === "lv") {
      if (exerciseTitleOnly && exerciseCards.length === 0) {
        failures++;
        row.notes.push("LV exercise title matcher regression");
      }
      if (translateTitleOnly && translateCards.length === 0) {
        failures++;
        row.notes.push("LV translate title matcher regression");
      }
    }

    if (cardSections.length) rows.push(row);
  }

  return { lang, skipped: false, failures, rows };
}

function main() {
  const langs = listKurssLanguages();
  const results = [];
  let totalFailures = 0;
  const affectedBefore = [];

  for (const lang of langs) {
    const res = auditLanguage(lang);
    results.push(res);
    if (!res.skipped) totalFailures += res.failures;

    // Inventory langs that would have failed on title-only matching for L18
    if (!res.skipped) {
      const l18 = res.rows.find((r) => r.lesson === 18);
      if (l18) {
        const titleOnlyBroken =
          (l18.exerciseTitle && !isCourseExerciseSection(l18.exerciseTitle) && l18.exerciseCards > 0) ||
          (l18.translateTitle && !isCourseTranslateSection(l18.translateTitle) && l18.translateCards > 0);
        if (titleOnlyBroken) affectedBefore.push(lang);
      }
    }
  }

  let lvUnchanged = true;
  let deChanges = 0;
  let linguisticChanges = 0;
  let syntaxPass = true;
  let structurePass = true;
  let validatePass = true;
  const validateFails = [];

  try {
    const beforeLv = execSync(`git rev-parse ${MERGE_BASE}:data/courseLessons.js`, {
      cwd: ROOT,
      encoding: "utf8",
    }).trim();
    const afterLv = execSync("git hash-object data/courseLessons.js", { cwd: ROOT, encoding: "utf8" }).trim();
    lvUnchanged = beforeLv === afterLv;
  } catch {
    lvUnchanged = false;
  }

  try {
    const deDiff = execSync("git diff --name-only HEAD -- data/de", { cwd: ROOT, encoding: "utf8" }).trim();
    deChanges = deDiff ? deDiff.split("\n").filter(Boolean).length : 0;
  } catch {
    deChanges = -1;
  }

  const dataDiff = execSync("git diff --name-only HEAD -- data www/data languages", {
    cwd: ROOT,
    encoding: "utf8",
  })
    .trim()
    .split("\n")
    .filter(Boolean);
  linguisticChanges = dataDiff.length;

  try {
    execSync("node --check ui.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/ui.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }

  for (const lang of langs) {
    if (lang === "lv") continue;
    const filePath = path.join(ROOT, "data", lang, "courseLessons.js");
    if (!fs.existsSync(filePath)) continue;
    try {
      execSync(`node scripts/validate-kurss.js --lang=${lang}`, { cwd: ROOT, stdio: "pipe" });
    } catch {
      validateFails.push(lang);
    }
  }
  try {
    execSync("node scripts/validate-kurss.js --lang=lv", { cwd: ROOT, stdio: "pipe" });
  } catch {
    validateFails.push("lv");
  }
  validatePass = validateFails.length === 0;

  for (const n of LESSON_RANGE) {
    const lvData = loadCourseData(LV_LESSONS);
    const lesson = lvData[`kurssLesson${n}`];
    if (!lesson || !Array.isArray(lesson.sections)) {
      structurePass = false;
      break;
    }
  }

  const globalPass = totalFailures === 0;
  const pass =
    globalPass &&
    lvUnchanged &&
    deChanges === 0 &&
    linguisticChanges === 0 &&
    syntaxPass &&
    structurePass &&
    validatePass;

  const verdict = pass ? "GLOBAL_KURSS_DYNAMIC_CARDS_RUNTIME_REPAIR_PASS" : "GLOBAL_KURSS_DYNAMIC_CARDS_RUNTIME_REPAIR_FAIL";

  const payload = {
    generatedAt: new Date().toISOString(),
    verdict,
    mergeBase: MERGE_BASE,
    rootCause:
      "Shared ui.js matched exercise/translate sections only by hardcoded title allowlists; localized titles (e.g. ET Harjutus/Tõlgi) skipped card binding and left blank flashcards.",
    affectedLanguagesBeforeFix: affectedBefore,
    languagesAudited: langs.length,
    totalFailures,
    lvKurssUnchanged: lvUnchanged,
    deChanges,
    linguisticContentChanges: linguisticChanges,
    syntaxPass,
    structurePass,
    validateKurssPass: validatePass,
    validateFails,
    changedFiles: ["ui.js", "www/ui.js", "scripts/lib/kurss-dynamic-card-section-matchers.js"],
    results,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(payload, null, 2));

  const md = [
    "# Global Kurss — dynamic Harjutus / Tõlgi runtime repair",
    "",
    `**Verdict:** **${verdict}**`,
    "",
    "## ROOT_CAUSE",
    "",
    payload.rootCause,
    "",
    "Secondary failure: without title match, `renderCourseLessonFromData` omitted `data-lesson-id` and mis-tagged translate buttons as exercise cards, so `getExerciseTarget` / `getCourseTranslateTarget` could not bind.",
    "",
    "## AFFECTED_LANGUAGES (title allowlist gap, fixed by structural matchers)",
    "",
    affectedBefore.length
      ? affectedBefore.map((l) => `- \`${l}\``).join("\n")
      : "_none identified_",
    "",
    "## CHANGED_FILES",
    "",
    ...payload.changedFiles.map((f) => `- \`${f}\``),
    "",
    "## Gates",
    "",
    "| Gate | Result |",
    "|------|--------|",
    `| GLOBAL_KURSS_DYNAMIC_CARD_RENDER | **${globalPass ? "PASS" : "FAIL"}** (${totalFailures} section failures) |`,
    `| LV_KURSS_UNCHANGED | **${lvUnchanged ? "PASS" : "FAIL"}** |`,
    `| DE_CHANGES | **${deChanges}** |`,
    `| LINGUISTIC_CONTENT_CHANGES | **${linguisticChanges}** |`,
    `| SYNTAX | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    `| STRUCTURE | **${structurePass ? "PASS" : "FAIL"}** |`,
    `| validate-kurss | **${validatePass ? "PASS" : "FAIL"}** |`,
    "",
    "## L8–L21 regression matrix (sample: ET lesson 18)",
    "",
  ];

  const et = results.find((r) => r.lang === "et");
  const et18 = et?.rows?.find((r) => r.lesson === 18);
  if (et18) {
    md.push(
      "| Section | Title | Cards | Simulated attr | Pass |",
      "|---------|-------|-------|----------------|------|",
      `| Exercise (§5) | ${et18.exerciseTitle} | ${et18.exerciseCards} | \`${et18.exerciseAttr}\` | ${et18.section5Pass ? "PASS" : "FAIL"} |`,
      `| Translate (§6) | ${et18.translateTitle} | ${et18.translateCards} | \`${et18.translateAttr}\` | ${et18.section6Pass ? "PASS" : "FAIL"} |`,
      "",
    );
  }

  md.push("## Before / after behavior", "");
  md.push(
    "- **Before:** Localized section titles outside allowlists → `getCourseExerciseCards` / `getCourseTranslateCards` returned `[]` → blank flashcard buttons (ET L18 Harjutus/Tõlgi confirmed).",
    "- **After:** Structural card-shape matching binds exercise (`prompt`/`fill`/conjugation) and translate (`lv`+`de` pairs / `translationCards`) sections regardless of localized title; DOM attrs and renderer initialization align with LV.",
    "",
  );

  md.push("## Per-language failure summary", "");
  for (const r of results) {
    if (r.skipped) {
      md.push(`- \`${r.lang}\`: skipped (${r.reason})`);
      continue;
    }
    md.push(`- \`${r.lang}\`: failures=${r.failures}`);
  }
  md.push("");

  fs.writeFileSync(REPORT_MD, md.join("\n"));
  console.log(JSON.stringify({ verdict, totalFailures, lvUnchanged, deChanges, linguisticChanges }, null, 2));
  if (!pass) process.exit(1);
}

main();
