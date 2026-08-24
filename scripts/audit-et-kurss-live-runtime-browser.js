#!/usr/bin/env node
"use strict";
/**
 * ET Kurss L1–L21 live browser/runtime smoke (MASTER v1.10 closure).
 */
const path = require("path");
const http = require("http");
const fs = require("fs");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const PORT = 8765;
const REPORT_JSON = path.join(ROOT, "reports/temp/et-kurss-live-runtime-browser.json");

function serveStatic(req, res) {
  let urlPath = req.url.split("?")[0];
  if (urlPath === "/") urlPath = "/index.html";
  const filePath = path.join(ROOT, urlPath.replace(/^\//, ""));
  if (!filePath.startsWith(ROOT) || !fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end("not found");
    return;
  }
  const ext = path.extname(filePath);
  const types = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
  };
  res.writeHead(200, { "Content-Type": types[ext] || "text/plain" });
  res.end(fs.readFileSync(filePath));
}

async function main() {
  const server = http.createServer(serveStatic);
  await new Promise((r) => server.listen(PORT, r));
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  const lessonResults = [];
  let failures = 0;

  try {
    await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: "networkidle" });
    await page.waitForSelector("#languageOptionsList button", { timeout: 15000 });
    await page.locator("#languageOptionsList button").filter({ hasText: /Eesti/i }).first().click();
    await page.waitForSelector("#appRoot:not([hidden])", { timeout: 10000 });
    await page.waitForSelector("#mainMenuButtons button", { timeout: 15000 });
    await page.waitForFunction(() => !document.body.classList.contains("app-launching"), null, { timeout: 15000 });
    await page.locator("#mainMenuButtons button").filter({ hasText: /Kursus|Kurss/i }).first().click();
    await page.waitForSelector("#kurssPanel:not([hidden])", { timeout: 10000 });
    await page.click("#kurssLessonsBtn");
    await page.waitForSelector("#kurssLessonsMenu:not([hidden])", { timeout: 10000 });

    async function openLesson(num) {
      await page.click(`#kurssLesson${num}Btn`);
      await page.waitForSelector(`#kurssLesson${num}:not([hidden])`, { timeout: 10000 });
      await page.waitForFunction(
        (n) =>
          window.COURSE_LESSON_DATA?.[`kurssLesson${n}`]?.sections?.length > 0 ||
          window.COURSE_LESSON_DATA?.[`kurssLesson${n}`]?.legacyHtml,
        num,
        { timeout: 15000 },
      );
      await page.waitForTimeout(400);
    }

    async function testDynamicCards(num) {
      const lessonId = `lesson${num}`;
      const panel = page.locator(`#kurssLesson${num}`);

      const harjutusAcc = panel.locator("details.lesson1-accordion").filter({ hasText: /Harjutus|Übung/i });
      if ((await harjutusAcc.count()) > 0) {
        await harjutusAcc.first().evaluate((el) => (el.open = true));
      }
      const tolgiAcc = panel.locator("details.lesson1-accordion").filter({ hasText: /Tõlgi|Pārtulko/i });
      if ((await tolgiAcc.count()) > 0) {
        await tolgiAcc.first().evaluate((el) => (el.open = true));
      }
      await page.waitForTimeout(200);

      const exSelector = `[data-course-exercise-card][data-lesson-id="${lessonId}"], [data-lesson${num}-exercise-card]`;
      const trSelector = `[data-course-translate-card][data-lesson-id="${lessonId}"], [data-lesson${num}-training-card]`;

      const runtime = await page.evaluate((n) => {
        const lessonId = `lesson${n}`;
        const exSel = `[data-course-exercise-card][data-lesson-id="${lessonId}"], [data-lesson${n}-exercise-card]`;
        const trSel = `[data-course-translate-card][data-lesson-id="${lessonId}"], [data-lesson${n}-training-card]`;
        let exerciseDeckLen = 0;
        let translateDeckLen = 0;
        let exInnerLen = 0;
        let trInnerLen = 0;
        try {
          exerciseDeckLen = typeof getExerciseMicroDeck === "function" ? getExerciseMicroDeck(lessonId).length : 0;
          translateDeckLen = typeof getCourseTranslateCards === "function" ? getCourseTranslateCards(lessonId).length : 0;
          if (exerciseDeckLen > 0 && typeof renderCourseExerciseCard === "function") {
            renderCourseExerciseCard(lessonId, 0, "challenge");
          }
          if (translateDeckLen > 0 && typeof renderCourseTranslateCard === "function") {
            renderCourseTranslateCard(lessonId, 0, false);
          }
          const ex =
            document.querySelector(`#kurssLesson${n} [data-lesson${n}-exercise-card]`) ||
            document.querySelector(`#kurssLesson${n} [data-course-exercise-card][data-lesson-id="${lessonId}"]`);
          const tr =
            document.querySelector(`#kurssLesson${n} [data-lesson${n}-training-card]`) ||
            document.querySelector(`#kurssLesson${n} [data-course-translate-card][data-lesson-id="${lessonId}"]`);
          exInnerLen = ex?.innerHTML?.trim().length || 0;
          trInnerLen = tr?.innerHTML?.trim().length || 0;
        } catch {
          /* ignore */
        }
        return { exerciseDeckLen, translateDeckLen, exInnerLen, trInnerLen };
      }, num);

      const result = {
        exercise: { pass: true, deckLen: runtime.exerciseDeckLen, init: false, flip: false, next: false, progress: false },
        translate: { pass: true, deckLen: runtime.translateDeckLen, init: false, flip: false, next: false, progress: false },
      };

      const exCard = panel.locator(exSelector);
      const trCard = panel.locator(trSelector);

      if (runtime.exerciseDeckLen > 0) {
        result.exercise.init = runtime.exInnerLen > 20;
        if (!result.exercise.init) result.exercise.pass = false;

        await page.evaluate((n) => {
          const lessonId = `lesson${n}`;
          const exSel = `[data-course-exercise-card][data-lesson-id="${lessonId}"], [data-lesson${n}-exercise-card]`;
          const card = document.querySelector(`#kurssLesson${n} ${exSel}`);
          if (card && typeof handleCourseExerciseCardClick === "function") handleCourseExerciseCardClick(card);
        }, num);
        await page.waitForTimeout(100);
        const phaseAfter = await exCard.first().getAttribute("data-phase");
        const deckAfterFlip = await exCard.first().getAttribute("data-deck-index");
        result.exercise.flip = phaseAfter === "reveal" || Number(deckAfterFlip) > 0;
        if (result.exercise.flip) result.exercise.init = true;
        if (!result.exercise.flip) result.exercise.pass = false;

        const progressText = await page.evaluate((n) => {
          const exSel = `[data-course-exercise-card][data-lesson-id="lesson${n}"], [data-lesson${n}-exercise-card]`;
          const card = document.querySelector(`#kurssLesson${n} ${exSel}`);
          return card?.textContent || "";
        }, num);
        result.exercise.progress = /\d/.test(progressText);
        if (!result.exercise.progress) result.exercise.pass = false;

        await page.evaluate((n) => {
          const lessonId = `lesson${n}`;
          const exSel = `[data-course-exercise-card][data-lesson-id="${lessonId}"], [data-lesson${n}-exercise-card]`;
          const card = document.querySelector(`#kurssLesson${n} ${exSel}`);
          if (card && typeof handleCourseExerciseCardClick === "function") handleCourseExerciseCardClick(card);
        }, num);
        await page.waitForTimeout(100);
        const deckFinal = await exCard.first().getAttribute("data-deck-index");
        result.exercise.next = Number(deckFinal) > 0 || runtime.exerciseDeckLen === 1;
        if (!result.exercise.next && runtime.exerciseDeckLen > 1) result.exercise.pass = false;
        result.exercise.pass =
          runtime.exerciseDeckLen === 0 ||
          (result.exercise.init && result.exercise.flip && result.exercise.next && result.exercise.progress);
      }

      if (runtime.translateDeckLen > 0) {
        result.translate.init = runtime.trInnerLen > 10;
        if (!result.translate.init) result.translate.pass = false;

        await page.evaluate((n) => {
          const lessonId = `lesson${n}`;
          const trSel = `[data-course-translate-card][data-lesson-id="${lessonId}"], [data-lesson${n}-training-card]`;
          const card = document.querySelector(`#kurssLesson${n} ${trSel}`);
          if (card && typeof handleCourseTranslateCardClick === "function") handleCourseTranslateCardClick(card);
        }, num);
        await page.waitForTimeout(100);
        const flipped = await trCard.first().getAttribute("data-showing-back");
        result.translate.flip = flipped === "true";
        if (!result.translate.flip) result.translate.pass = false;

        const progressText = await page.evaluate((n) => {
          const trSel = `[data-course-translate-card][data-lesson-id="lesson${n}"], [data-lesson${n}-training-card]`;
          const card = document.querySelector(`#kurssLesson${n} ${trSel}`);
          return card?.textContent || "";
        }, num);
        result.translate.progress = /\d/.test(progressText);
        if (!result.translate.progress) result.translate.pass = false;

        await page.evaluate((n) => {
          const lessonId = `lesson${n}`;
          const trSel = `[data-course-translate-card][data-lesson-id="${lessonId}"], [data-lesson${n}-training-card]`;
          const card = document.querySelector(`#kurssLesson${n} ${trSel}`);
          if (card && typeof handleCourseTranslateCardClick === "function") handleCourseTranslateCardClick(card);
        }, num);
        await page.waitForTimeout(100);
        const idxAfter = await trCard.first().getAttribute("data-card-index");
        result.translate.next = idxAfter !== "0" || runtime.translateDeckLen === 1;
        if (!result.translate.next && runtime.translateDeckLen > 1) result.translate.pass = false;
        result.translate.pass =
          runtime.translateDeckLen === 0 ||
          (result.translate.init && result.translate.flip && result.translate.next && result.translate.progress);
      }

      return result;
    }

    for (let num = 1; num <= 21; num++) {
      await openLesson(num);
      const panel = page.locator(`#kurssLesson${num}`);
      const accordions = panel.locator("details.lesson1-accordion");
      const accCount = await accordions.count();
      for (let i = 0; i < accCount; i++) {
        await accordions.nth(i).evaluate((el) => (el.open = true));
      }
      await page.waitForTimeout(300);

      const panelText = await panel.innerText();
      const blankPanel = panelText.trim().length < 30;
      const lvHits = [];
      if (/Es leju ūdeni/i.test(panelText)) lvHits.push("Es leju ūdeni");
      if (/Es eju pie galda/i.test(panelText)) lvHits.push("Es eju pie galda");
      if (/Āboli ir groziņā/i.test(panelText)) lvHits.push("Āboli ir groziņā");

      let dynamic = null;
      if (num >= 8) {
        dynamic = await testDynamicCards(num);
        if (!dynamic.exercise.pass || !dynamic.translate.pass) failures++;
      }

      const row = {
        lesson: num,
        accordionCount: accCount,
        blankPanel,
        lvHits,
        dynamic,
        pass: !blankPanel && lvHits.length === 0 && (num < 8 || (dynamic?.exercise.pass && dynamic?.translate.pass)),
      };
      if (!row.pass) failures++;
      lessonResults.push(row);

      await page.click("#kurssBackBtn");
      await page.waitForTimeout(250);
    }
  } finally {
    await browser.close();
    server.close();
  }

  const l18 = lessonResults.find((r) => r.lesson === 18);
  const report = {
    generatedAt: new Date().toISOString(),
    kurssL1L21RenderScope: failures === 0 ? "PASS" : "FAIL",
    kurssRuntimeSmoke: failures === 0 ? "PASS" : "FAIL",
    kurssDynamicExercise: lessonResults.filter((r) => r.lesson >= 8).every((r) => r.dynamic?.exercise.pass) ? "PASS" : "FAIL",
    kurssDynamicTranslate: lessonResults.filter((r) => r.lesson >= 8).every((r) => r.dynamic?.translate.pass) ? "PASS" : "FAIL",
    kurssFirstCardInitialization: lessonResults
      .filter((r) => r.lesson >= 8)
      .every((r) => r.dynamic?.exercise.init && r.dynamic?.translate.init)
      ? "PASS"
      : "FAIL",
    kurssProgress: lessonResults
      .filter((r) => r.lesson >= 8)
      .every((r) => r.dynamic?.exercise.progress && r.dynamic?.translate.progress)
      ? "PASS"
      : "FAIL",
    kurssFlip: lessonResults
      .filter((r) => r.lesson >= 8)
      .every((r) => r.dynamic?.exercise.flip && r.dynamic?.translate.flip)
      ? "PASS"
      : "FAIL",
    kurssNext: lessonResults
      .filter((r) => r.lesson >= 8)
      .every((r) => r.dynamic?.exercise.next && r.dynamic?.translate.next)
      ? "PASS"
      : "FAIL",
    etL18Harjutus: l18?.dynamic?.exercise.pass ? "PASS" : "FAIL",
    etL18Tolgi: l18?.dynamic?.translate.pass ? "PASS" : "FAIL",
    failures,
    lessons: lessonResults,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  if (failures > 0) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
