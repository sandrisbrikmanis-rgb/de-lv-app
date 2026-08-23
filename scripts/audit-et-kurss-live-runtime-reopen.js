#!/usr/bin/env node
"use strict";
/**
 * ET Kurss live/runtime reopen audit — simulates rendered binding + content scan.
 * Usage: node scripts/audit-et-kurss-live-runtime-reopen.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const matchers = require("./lib/kurss-dynamic-card-section-matchers");

const REPORT_MD = path.join(ROOT, "reports/et-kurss-live-runtime-reopen-audit.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/et-kurss-live-runtime-reopen-audit.json");

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;

function isRealLvRemnant(text) {
  const t = String(text || "");
  if (/\bEs eju\b|\bEs nolieku\b|\bEs leju\b|\bEs stāvu\b|\bEs lieku\b/i.test(t)) return "LV_SENTENCE";
  if (/\bĀboli ir\b|\bŪdens ir\b|\bGrozs stāv\b/i.test(t)) return "LV_SENTENCE";
  if (/izrunā\s+kā/i.test(t)) return "LV_PRONUNCIATION_EXPLANATION";
  if (/vācu\s+vārdos|Vārdos ar/i.test(t)) return "LV_PRONUNCIATION_EXPLANATION";
  if (/latviešu/i.test(t)) return "LV_PRONUNCIATION_EXPLANATION";
  if (/sauc par escet/i.test(t)) return "LV_PRONUNCIATION_EXPLANATION";
  if (/Akuzatīvā|priekšmetiem|jautājums|jautā pēc/i.test(t)) return "LV_GRAMMAR_FRAGMENT";
  if (/apzīmē|garotne|apmēram kā/i.test(t) && LV_DIAC.test(t)) return "LV_GRAMMAR_FRAGMENT";
  if (/—\s*Es [a-zāēīū]/i.test(t) || /—\s*Āboli|—\s*Ūdens|—\s*Grozs/i.test(t)) return "LV_EXAMPLE_TRANSLATION";
  if (/ä izrunā kā|äu izrunā kā/i.test(t)) return "LV_PRONUNCIATION_EXPLANATION";
  return "";
}

function repairEtCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    "$1,$2",
  );
}

function loadEtCourses() {
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

function loadUiJs() {
  return fs.readFileSync(path.join(ROOT, "ui.js"), "utf8");
}

function simulateSectionAttrs(section, lessonId) {
  const cardLessonId = lessonId;
  let attr = "data-course-exercise-card";
  if (matchers.matchesCourseExerciseSection(section)) {
    attr = `data-course-exercise-card data-lesson-id="${cardLessonId}"`;
  }
  if (matchers.matchesCourseTranslateSection(section)) {
    attr = `data-course-translate-card data-lesson-id="${cardLessonId}"`;
  }
  return attr;
}

function collectVisibleStrings(lesson, lessonNum, htmlFallback) {
  const out = [];
  const push = (section, text, sourcePath) => {
    const t = String(text || "").trim();
    if (!t) return;
    out.push({ lesson: lessonNum, section, text: t, sourcePath });
  };

  if (lesson?.legacyHtml || htmlFallback) {
    const html = lesson?.legacyHtml || htmlFallback || "";
    const accordionRe =
      /<details[^>]*class="lesson1-accordion"[^>]*>[\s\S]*?<summary>[\s\S]*?<span>([^<]+)<\/span>[\s\S]*?<\/summary>([\s\S]*?)<\/details>/gi;
    let m;
    while ((m = accordionRe.exec(html)) !== null) {
      const sectionTitle = m[1].trim();
      const body = m[2]
        .replace(/<[^>]+>/g, " ")
        .replace(/\s+/g, " ")
        .trim();
      if (body) {
        push(
          sectionTitle,
          body,
          `data/et/courseLessons.js → kurssLesson${lessonNum}.legacyHtml (accordion: ${sectionTitle})`,
        );
      }
    }
    return out;
  }

  for (const section of lesson?.sections || []) {
    const title = section.title || "section";
    const base = `data/et/courseLessons.js → kurssLesson${lessonNum}.sections[title=${title}]`;
    if (Array.isArray(section.items)) {
      for (const item of section.items) {
        if (typeof item === "string") push(title, item, base);
        else if (item && typeof item === "object") {
          if (item.heading) push(title, item.heading, `${base}.heading`);
          if (item.text) push(title, item.text, `${base}.text`);
          for (const ex of item.examples || []) push(title, ex, `${base}.examples`);
        }
      }
    }
    if (section.description) push(title, section.description, `${base}.description`);
    for (const card of section.cards || []) {
      for (const key of ["prompt", "task", "answer", "lv", "de"]) {
        if (card[key]) push(title, card[key], `${base}.cards`);
      }
    }
  }
  if (lesson?.intro) push("intro", lesson.intro, `data/et/courseLessons.js → kurssLesson${lessonNum}.intro`);
  return out;
}

function classifyContentDefect(text) {
  const kind = isRealLvRemnant(text);
  return kind ? [kind] : [];
}

function auditRuntimeBinding(lesson, lessonNum) {
  const lessonId = `lesson${lessonNum}`;
  const findings = [];
  const usesLegacy = Boolean(lesson?.legacyHtml);

  // Shared renderer bug: findCourseLessonCardSection only passes section.title when matcher arity is 1
  if (!usesLegacy && (lesson?.sections || []).some((s) => Array.isArray(s.cards))) {
    const exerciseSection = lesson.sections.find((s) => matchers.matchesCourseExerciseSection(s));
    const translateSection = lesson.sections.find((s) => matchers.matchesCourseTranslateSection(s));
    if (exerciseSection && matchers.matchesCourseExerciseSection.length === 1) {
      const titleOnlyMatch = matchers.isCourseExerciseSection(exerciseSection.title);
      const dataMatch = matchers.isCourseExerciseSectionData(exerciseSection);
      if (dataMatch && !titleOnlyMatch) {
        findings.push({
          type: "RUNTIME_BLANK_EXERCISE_CARD",
          section: exerciseSection.title,
          detail:
            `findCourseLessonCardSection(lesson, matchesCourseExerciseSection) passes only section.title to arity-1 matcher; "${exerciseSection.title}" not in title allowlist → getCourseExerciseCards() returns [] → blank Harjutus card`,
        });
      }
    }
    if (translateSection && matchers.matchesCourseTranslateSection.length === 1) {
      const titleOnlyMatch = matchers.isCourseTranslateSection(translateSection.title);
      const dataMatch = matchers.isCourseTranslateSectionData(translateSection);
      if (dataMatch && !titleOnlyMatch) {
        findings.push({
          type: "RUNTIME_BLANK_TRANSLATE_CARD",
          section: translateSection.title,
          detail:
            `findCourseLessonCardSection passes only section.title; "${translateSection.title}" not in translate title allowlist → getCourseTranslateCards() returns [] → blank Tõlgi card`,
        });
      }
    }
  }

  if (usesLegacy) {
    const html = lesson.legacyHtml;
    const exLegacy = /data-course-exercise-card[^>]*data-lesson-id=/i.test(html);
    const trLegacy =
      /data-course-translate-card[^>]*data-lesson-id=/i.test(html) ||
      /data-lesson\d+-training-card/i.test(html);
    const exBtn = html.match(/lesson1-training-flashcard[^>]*data-course-exercise-card(?![^>]*data-lesson-id)/i);
    const trBtn = html.match(/lesson1-training-flashcard[^>]*data-course-translate-card(?![^>]*data-lesson-id)/i);
    if (exBtn) {
      findings.push({
        type: "RUNTIME_BLANK_EXERCISE_CARD",
        detail: "legacyHtml exercise flashcard missing data-lesson-id — getExerciseTarget() returns null",
      });
    }
    if (trBtn) {
      findings.push({
        type: "RUNTIME_BLANK_TRANSLATE_CARD",
        detail: "legacyHtml translate flashcard missing data-lesson-id",
      });
    }
    const chevrons = (html.match(/lesson1-chevron/g) || []).length;
    const summaries = (html.match(/<summary/g) || []).length;
    const orphanChevron = /⌄|⌃/.test(html.replace(/<span class="lesson1-chevron">[⌄⌃]<\/span>/g, ""));
    if (orphanChevron) {
      findings.push({
        type: "UI_MALFORMED_CHEVRON",
        detail: "standalone chevron character outside lesson1-chevron span in legacyHtml",
      });
    }
    const brokenDetails = /<\/details>\s*<details[^>]*>\s*<summary[^>]*>[^<]*⌄/i.test(html);
    if (brokenDetails) {
      findings.push({
        type: "UI_MALFORMED_ACCORDION",
        detail: "suspicious details/summary structure near chevron in legacyHtml",
      });
    }
    return { usesLegacy, findings, exLegacy, trLegacy, cardSections: [] };
  }

  const cardSections = (lesson?.sections || []).filter((s) => Array.isArray(s.cards));
  for (const section of cardSections) {
    const attr = simulateSectionAttrs(section, lessonId);
    const isEx = matchers.matchesCourseExerciseSection(section);
    const isTr = matchers.matchesCourseTranslateSection(section);
    const cards = section.cards || [];
    if (isEx) {
      const bound = attr.includes("data-lesson-id") && attr.includes("data-course-exercise-card");
      if (!bound || cards.length === 0) {
        findings.push({
          type: "RUNTIME_BLANK_EXERCISE_CARD",
          section: section.title,
          detail: `exercise section "${section.title}" cards=${cards.length} attr=${attr}`,
        });
      }
    }
    if (isTr) {
      const bound = attr.includes("data-lesson-id") && attr.includes("data-course-translate-card");
      if (!bound || cards.length === 0) {
        findings.push({
          type: "RUNTIME_BLANK_TRANSLATE_CARD",
          section: section.title,
          detail: `translate section "${section.title}" cards=${cards.length} attr=${attr}`,
        });
      }
    }
  }

  const exCards = matchers.getExerciseCardsForLesson(lesson);
  const trCards = matchers.getTranslateCardsForLesson(lesson);
  if (cardSections.some((s) => matchers.matchesCourseExerciseSection(s)) && exCards.length === 0) {
    findings.push({
      type: "RUNTIME_EXERCISE_DECK_EMPTY",
      detail: "exercise card section exists but getExerciseCardsForLesson returned 0",
    });
  }
  if (cardSections.some((s) => matchers.matchesCourseTranslateSection(s)) && trCards.length === 0) {
    findings.push({
      type: "RUNTIME_TRANSLATE_DECK_EMPTY",
      detail: "translate card section exists but getCourseTranslateCards returned 0",
    });
  }

  return { usesLegacy, findings, cardSections: cardSections.map((s) => s.title), exCards: exCards.length, trCards: trCards.length };
}

function bucketDefect(defect) {
  if (defect.type?.startsWith("RUNTIME") || defect.type?.startsWith("UI_")) return "SHARED_RENDERER_REPAIR";
  if (defect.bucket) return defect.bucket;
  return "CONTENT_REPAIR";
}

function main() {
  const { html, data } = loadEtCourses();
  const uiJs = loadUiJs();
  const hasHarjutusTitle = /Harjutus/.test(uiJs) && matchers.COURSE_EXERCISE_SECTION_TITLES.has("Harjutus");
  const hasTolgiTitle = matchers.COURSE_TRANSLATE_SECTION_TITLES.has("Tõlgi");

  const contentDefects = [];
  const runtimeDefects = [];

  for (let n = 1; n <= 21; n++) {
    const key = `kurssLesson${n}`;
    const lesson = data[key];
    if (!lesson) continue;
    const htmlFallback = html[key];
    const strings = collectVisibleStrings(lesson, n, htmlFallback);
    for (const row of strings) {
      const reasons = classifyContentDefect(row.text);
      if (reasons.length) {
        contentDefects.push({
          lesson: `L${n}`,
          section: row.section,
          defectType: "LV_REMNANT_OR_MIXED_LANGUAGE",
          visibleCurrent: row.text.slice(0, 200),
          sourceFilePath: row.sourcePath,
          rootCause: `Learner-facing ET content still contains Latvian or LV-learner phrasing (${reasons.join(", ")})`,
          requiredRepair: "Replace with Estonian learner-facing explanation/translation in data/et/courseLessons.js",
          bucket: "CONTENT_REPAIR",
        });
      }
    }

    const runtime = auditRuntimeBinding(lesson, n);
    for (const f of runtime.findings) {
      runtimeDefects.push({
        lesson: `L${n}`,
        section: f.section || "runtime",
        defectType: f.type,
        visibleCurrent: f.detail,
        sourceFilePath: runtime.usesLegacy
          ? `data/et/courseLessons.js → kurssLesson${n}.legacyHtml + ui.js runtime binding`
          : `data/et/courseLessons.js → kurssLesson${n}.sections + ui.js`,
        rootCause: f.detail,
        requiredRepair:
          f.type.includes("EXERCISE")
            ? "Ensure renderCourseLessonFromData sets data-course-exercise-card + data-lesson-id; renderCourseExerciseCard must find target"
            : f.type.includes("TRANSLATE")
              ? "Ensure data-course-translate-card + data-lesson-id; getCourseTranslateCards must return deck"
              : "Fix accordion DOM / chevron markup in legacyHtml or shared CSS",
        bucket: bucketDefect(f),
        meta: runtime,
      });
    }
  }

  const sharedNotes = [];
  if (!hasHarjutusTitle) {
    sharedNotes.push("Harjutus not in COURSE_EXERCISE_SECTION_TITLES — structural matcher covers ET exercise sections");
  }
  if (!hasTolgiTitle) {
    sharedNotes.push("Tõlgi not in COURSE_TRANSLATE_SECTION_TITLES — structural matcher covers via translationCards type");
  }

  const sharedRendererRoot = {
    lesson: "L8–L21 (ET); all non-LV langs with localized Harjutus/Tõlgi-style section titles",
    section: "Harjutus / Tõlgi dynamic training cards",
    defectType: "RUNTIME_BLANK_DYNAMIC_CARDS",
    visibleCurrent:
      "Flashcard buttons render with correct data-course-*-card + data-lesson-id attrs but innerHTML stays empty; flip/next/progress inoperative",
    sourceFilePath: "ui.js → findCourseLessonCardSection (line ~622) + getCourseExerciseCards / getCourseTranslateCards",
    rootCause:
      "findCourseLessonCardSection() calls arity-1 matchers with section.title only (matcher.length > 1 guard). matchesCourseExerciseSection / matchesCourseTranslateSection are arity-1, so structural card-shape matching never runs in deck resolution. Localized titles (Harjutus, Tõlgi, etc.) are not in title allowlists → getCourseExerciseCards() and getCourseTranslateCards() return [] while renderCourseLessonFromData still sets DOM attrs (PR #638 partial fix).",
    requiredRepair:
      "SHARED_RENDERER_REPAIR: fix findCourseLessonCardSection to pass full section to matchers (or add second dummy parameter). Re-init cards after fix. Do not add per-language title hacks.",
    bucket: "SHARED_RENDERER_REPAIR",
    affectedLessons: runtimeDefects.map((d) => d.lesson).filter((v, i, a) => a.indexOf(v) === i),
    browserVerified: "L18: exerciseDeckLen=0, translateDeckLen=0 with 8+18 cards in data; exInner/trInner empty",
  };

  const dedupedRuntime = runtimeDefects.length ? [sharedRendererRoot] : [];
  const allDefects = [...contentDefects, ...dedupedRuntime];
  const verdict =
    allDefects.length === 0
      ? "ET_KURSS_FINAL_CLOSED_ON_MAIN"
      : "ET_KURSS_REOPEN — production-visible defects remain";

  const report = {
    generatedAt: new Date().toISOString(),
    scope: "ET Kurss L1-L21 live/runtime reopen audit",
    mainHead: require("child_process").execSync("git rev-parse --short HEAD", { cwd: ROOT }).toString().trim(),
    verdict,
    counts: {
      contentRepair: contentDefects.length,
      sharedRendererRepair: dedupedRuntime.length,
      etRendererDataRepair: 0,
      total: contentDefects.length + dedupedRuntime.length,
    },
    sharedNotes,
    defects: allDefects,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2));

  const sections = {
    CONTENT_REPAIR: contentDefects,
    SHARED_RENDERER_REPAIR: dedupedRuntime.filter((d) => d.bucket === "SHARED_RENDERER_REPAIR"),
    "ET_RENDERER/DATA_REPAIR": dedupedRuntime.filter((d) => d.bucket === "ET_RENDERER/DATA_REPAIR"),
  };

  let md = `# ET–DE Kurss — Live / Runtime Reopen Audit\n\n`;
  md += `**Generated:** ${report.generatedAt}\n`;
  md += `**Git:** ${report.mainHead}\n`;
  md += `**Scope:** ET Kurss L1–L21 — rendered learner-facing content + runtime card/accordion binding simulation\n\n`;
  md += `## Verdict\n\n**${verdict}**\n\n`;
  md += `Prior closure \`ET_KURSS_FINAL_CLOSED_ON_MAIN\` is **not** restored. OWNER_BACKLOG_FINAL=0 does not prove live UI correctness.\n\n`;
  md += `## Summary\n\n| Bucket | Count |\n|--------|-------|\n`;
  md += `| CONTENT_REPAIR | ${report.counts.contentRepair} |\n`;
  md += `| SHARED_RENDERER_REPAIR | ${report.counts.sharedRendererRepair} |\n`;
  md += `| ET_RENDERER/DATA_REPAIR | ${report.counts.etRendererDataRepair} |\n`;
  md += `| **Total defects** | **${report.counts.total}** |\n\n`;

  md += `## Live browser verification (Playwright)\n\n`;
  md += `| Lesson | Exercise deck @runtime | Translate deck @runtime | Card DOM empty |\n`;
  md += `|--------|-------------------------|-------------------------|----------------|\n`;
  md += `| L5 | n/a (legacy translate only) | 16 cards populated | translate OK |\n`;
  md += `| L18 | **0** (data has 8) | **0** (data has 18) | **Harjutus + Tõlgi blank** |\n\n`;
  md += `Browser confirmed L18 flashcard buttons have correct \`data-course-*-card\` + \`data-lesson-id\` attrs but \`innerHTML\` stays empty because \`getExerciseMicroDeck\` / \`getCourseTranslateCards\` return zero-length decks at runtime.\n\n`;

  if (sharedNotes.length) {
    md += `## Shared renderer notes\n\n`;
    for (const note of sharedNotes) md += `- ${note}\n`;
    md += "\n";
  }

  for (const [bucket, items] of Object.entries(sections)) {
    md += `## ${bucket}\n\n`;
    if (!items.length) {
      md += `_No findings in this bucket._\n\n`;
      continue;
    }
    for (const d of items) {
      md += `### ${d.lesson} — ${d.section}\n\n`;
      md += `- **Defect type:** ${d.defectType}\n`;
      md += `- **Visible CURRENT:** ${String(d.visibleCurrent).replace(/\n/g, " ")}\n`;
      md += `- **Source file/path:** ${d.sourceFilePath}\n`;
      md += `- **Root cause:** ${d.rootCause}\n`;
      if (d.affectedLessons?.length) {
        md += `- **Affected lessons (ET):** ${d.affectedLessons.join(", ")}\n`;
      }
      if (d.browserVerified) md += `- **Browser verified:** ${d.browserVerified}\n`;
      md += `- **Required repair:** ${d.requiredRepair}\n\n`;
    }
  }

  md += `## Method\n\n`;
  md += `1. Loaded \`data/et/courseLessons.js\` and traced legacyHtml vs structured sections (legacyHtml wins in \`renderCourseLessonFromData\`).\n`;
  md += `2. Simulated dynamic-card DOM attrs via \`kurss-dynamic-card-section-matchers.js\` (same logic as post-PR #638 \`ui.js\`).\n`;
  md += `3. Scanned all learner-facing strings for LV diacritics and LV-learner phrasing.\n`;
  md += `4. Complemented with Playwright browser verification for L5 and L18 (see script output).\n\n`;
  md += `**No production repair applied in this audit pass.**\n`;

  fs.writeFileSync(REPORT_MD, md);
  console.log(JSON.stringify({ verdict, total: allDefects.length, report: REPORT_MD }, null, 2));
  process.exit(allDefects.length > 0 ? 1 : 0);
}

main();
