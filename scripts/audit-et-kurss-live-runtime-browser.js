#!/usr/bin/env node
"use strict";
const path = require("path");
const http = require("http");
const fs = require("fs");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const PORT = 8765;

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
  const results = [];

  try {
    await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: "networkidle" });

    // Select ET language
    await page.waitForSelector("#languageOptionsList button", { timeout: 15000 });
    const etBtn = page.locator("#languageOptionsList button").filter({ hasText: /Eesti/i }).first();
    await etBtn.click();
    await page.waitForSelector("#appRoot:not([hidden])", { timeout: 10000 });

    // Open Kurss from home menu
    await page.waitForSelector("#mainMenuButtons button", { timeout: 15000 });
    await page.waitForFunction(() => !document.body.classList.contains("app-launching"), null, { timeout: 15000 });
    const kurssMenuBtn = page.locator("#mainMenuButtons button").filter({ hasText: /Kursus|Kurss/i }).first();
    await kurssMenuBtn.click();
    await page.waitForSelector("#kurssPanel:not([hidden])", { timeout: 10000 });
    await page.click("#kurssLessonsBtn");
    await page.waitForSelector("#kurssLessonsMenu:not([hidden])", { timeout: 10000 });

    async function openLesson(num) {
      await page.click(`#kurssLesson${num}Btn`);
      await page.waitForSelector(`#kurssLesson${num}:not([hidden])`, { timeout: 10000 });
      await page.waitForFunction(
        (n) => window.COURSE_LESSON_DATA?.[`kurssLesson${n}`]?.sections?.length > 0 || window.COURSE_LESSON_DATA?.[`kurssLesson${n}`]?.legacyHtml,
        num,
        { timeout: 15000 },
      );
      await page.waitForTimeout(500);
    }

    async function checkLesson(num) {
      const panel = page.locator(`#kurssLesson${num}`);
      const dataState = await page.evaluate((n) => {
        const lesson = window.COURSE_LESSON_DATA?.[`kurssLesson${n}`];
        const sections = lesson?.sections || [];
        const cardSections = sections.filter((s) => Array.isArray(s.cards));
        return {
          hasLesson: Boolean(lesson),
          legacyHtml: Boolean(lesson?.legacyHtml),
          sectionCount: sections.length,
          cardSectionTitles: cardSections.map((s) => s.title),
          exerciseCards: cardSections.find((s) => s.title === "Harjutus" || s.title?.includes("Harjutus"))?.cards?.length || 0,
          translateCards: cardSections.find((s) => s.title === "Tõlgi" || s.type === "translationCards")?.cards?.length || 0,
        };
      }, num);
      const text = await panel.innerText();
      const lvHits = [];
      if (/v vācu vārdos/i.test(text)) lvHits.push("v vācu vārdos");
      if (/izrunā kā latviešu/i.test(text)) lvHits.push("izrunā kā latviešu");
      if (/Es eju pie galda/i.test(text)) lvHits.push("Es eju pie galda");
      if (/Āboli ir groziņā/i.test(text)) lvHits.push("Āboli ir groziņā");

      const exCard = panel.locator("[data-course-exercise-card][data-lesson-id], [data-lesson" + num + "-exercise-card]");
      const trCard = panel.locator("[data-course-translate-card][data-lesson-id], [data-lesson" + num + "-training-card]");
      const exCount = await exCard.count();
      const trCount = await trCard.count();
      let exBlank = null;
      let trBlank = null;
      if (exCount > 0) {
        const inner = await exCard.first().innerHTML();
        exBlank = inner.trim().length < 20;
      }
      if (trCount > 0) {
        const inner = await trCard.first().innerHTML();
        trBlank = inner.trim().length < 20;
      }

      const runtimeState = await page.evaluate((n) => {
        const lesson = window.COURSE_LESSON_DATA?.[`kurssLesson${n}`];
        const lessonId = `lesson${n}`;
        const panel = document.getElementById(`kurssLesson${n}`);
        const exBtn = panel?.querySelector(`[data-course-exercise-card][data-lesson-id="${lessonId}"]`);
        const trBtn = panel?.querySelector(`[data-course-translate-card][data-lesson-id="${lessonId}"]`);
        let exerciseDeckLen = null;
        let translateDeckLen = null;
        try {
          exerciseDeckLen = typeof getExerciseMicroDeck === "function" ? getExerciseMicroDeck(lessonId).length : null;
          translateDeckLen = typeof getCourseTranslateCards === "function" ? getCourseTranslateCards(lessonId).length : null;
        } catch (e) {
          return { error: e.message, exAttrs: exBtn ? Array.from(exBtn.attributes).map(a=>a.name+':'+a.value) : null };
        }
        return {
          exAttrs: exBtn ? Array.from(exBtn.attributes).map((a) => a.name + ":" + a.value) : null,
          trAttrs: trBtn ? Array.from(trBtn.attributes).map((a) => a.name + ":" + a.value) : null,
          exerciseDeckLen,
          translateDeckLen,
        };
      }, num);

      const chevrons = await panel.locator(".lesson1-chevron").count();
      const summaries = await panel.locator("summary").count();

      results.push({
        lesson: num,
        dataState,
        lvHits,
        exCardCount: exCount,
        trCardCount: trCount,
        exBlank,
        trBlank,
        exInner: exCount > 0 ? await exCard.first().innerHTML() : null,
        trInner: trCount > 0 ? await trCard.first().innerHTML() : null,
        runtimeState,
        chevrons,
        summaries,
      });
    }

    for (const num of [5, 18]) {
      await openLesson(num);
      // open all accordions to expose content
      const accordions = page.locator(`#kurssLesson${num} details.lesson1-accordion`);
      const count = await accordions.count();
      for (let i = 0; i < count; i++) {
        await accordions.nth(i).evaluate((el) => (el.open = true));
      }
      await page.waitForTimeout(300);
      await checkLesson(num);
      await page.click("#kurssBackBtn");
      await page.waitForTimeout(300);
    }
  } finally {
    await browser.close();
    server.close();
  }

  console.log(JSON.stringify(results, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
