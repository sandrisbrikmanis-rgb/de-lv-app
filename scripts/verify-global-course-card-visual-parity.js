#!/usr/bin/env node
"use strict";
/**
 * Runtime verification: Kurss/Course card visual parity vs LV master.
 * Checks legacy class normalization and dark rounded card styling.
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const vm = require("vm");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const WWW_ROOT = path.join(ROOT, "www");
const PORT = Number(process.env.COURSE_PARITY_PORT || 8891);
const BASE_URL = process.env.COURSE_PARITY_BASE || `http://127.0.0.1:${PORT}`;
const REPORT_JSON = path.join(ROOT, "reports/temp/global-course-card-visual-parity.json");

const LEGACY_CLASS_NAMES = [
  "course-lesson-section",
  "course-examples",
  "course-example",
  "items-intro-info",
  "curso-lección-sección"
];

const STATIC_PANELS = [
  { open: "#kurssPronunciationBtn", sub: "#kurssVowelsLessonBtn", panel: "#kurssPronunciationLesson", name: "pronunciation-vowels" },
  { open: "#kurssPronunciationBtn", sub: "#kurssConsonantsLessonBtn", panel: "#kurssConsonantsLesson", name: "pronunciation-consonants" },
  { open: "#kurssArticlesBtn", panel: "#kurssArticlesLesson", name: "articles" },
  { open: "#kurssPronounsBtn", panel: "#kurssPronounsLesson", name: "pronouns" },
  { open: "#kurssVerbBasicsBtn", panel: "#kurssVerbBasicsLesson", name: "verb-basics" },
  { open: "#kurssSentenceStructureBtn", panel: "#kurssSentenceStructureLesson", name: "sentence-structure" }
];

function serveStatic(req, res) {
  let urlPath = req.url.split("?")[0];
  if (urlPath === "/") urlPath = "/index.html";
  const filePath = path.join(WWW_ROOT, urlPath.replace(/^\//, ""));
  if (!filePath.startsWith(WWW_ROOT) || !fs.existsSync(filePath)) {
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
    ".png": "image/png"
  };
  res.writeHead(200, { "Content-Type": types[ext] || "text/plain" });
  res.end(fs.readFileSync(filePath));
}

function loadActiveLanguages() {
  const code = fs.readFileSync(path.join(ROOT, "languages/registry.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const registry = ctx.window.AppLanguageRegistry || {};
  return (typeof registry.active === "function" ? registry.active() : [])
    .filter((lang) => lang.active && lang.uiAvailable)
    .map((lang) => lang.code);
}

async function selectLanguage(page, langCode) {
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForSelector("#languageOptionsList button", { timeout: 45000 });
  const langBtn = page.locator(`#languageOptionsList button[data-lang-code="${langCode}"]`);
  if ((await langBtn.count()) === 0) {
    throw new Error(`Language button not found: ${langCode}`);
  }
  await langBtn.first().scrollIntoViewIfNeeded();
  await langBtn.first().click({ force: true });
  await page.waitForFunction(
    () => {
      const appRoot = document.getElementById("appRoot");
      return appRoot && !appRoot.hidden;
    },
    null,
    { timeout: 45000 }
  );
  await page.waitForFunction(() => !document.body.classList.contains("app-launching"), null, { timeout: 30000 });
  await page.waitForFunction(
    (code) => (window.AppI18n?.getCurrentLanguage?.() || "") === code,
    langCode,
    { timeout: 30000 }
  );
  await page.waitForTimeout(1000);
}

async function openKurss(page) {
  const kurssBtn = page.locator("#mainMenuButtons .menu-button-container").nth(6).locator("button");
  await kurssBtn.click();
  await page.waitForSelector("#kurssPanel:not([hidden])", { timeout: 10000 });
  await page.waitForTimeout(300);
}

async function inspectPanel(page, selector, sectionName) {
  return page.evaluate(({ selector, sectionName, legacyClassNames }) => {
    const panel = document.querySelector(selector);
    if (!panel || panel.hidden) {
      return { section: sectionName, panel: selector, status: "SKIP", reason: "panel hidden or missing" };
    }

    const legacyHits = [];
    legacyClassNames.forEach((className) => {
      const count = panel.querySelectorAll(`.${CSS.escape(className)}`).length;
      if (count > 0) legacyHits.push({ className, count });
    });

    const cards = Array.from(panel.querySelectorAll(".kurss-example")).filter((el) => {
      const rect = el.getBoundingClientRect();
      return rect.width > 0 && rect.height > 0;
    });

    const cardStyles = cards.slice(0, 5).map((el) => {
      const style = getComputedStyle(el);
      return {
        borderRadius: style.borderRadius,
        backgroundImage: style.backgroundImage,
        borderTopWidth: style.borderTopWidth
      };
    });

    const unstyledCards = cardStyles.filter((style) => {
      const radius = parseFloat(style.borderRadius) || 0;
      const hasGradient = style.backgroundImage && style.backgroundImage !== "none";
      const hasBorder = parseFloat(style.borderTopWidth) > 0;
      return radius < 4 && !hasGradient && !hasBorder;
    });

    const h3 = panel.querySelector("h3");
    const h4Count = panel.querySelectorAll("h4").length;

    return {
      section: sectionName,
      panel: selector,
      status: legacyHits.length || unstyledCards.length ? "FAIL" : "PASS",
      legacyHits,
      cardSampleCount: cards.length,
      unstyledCardSamples: unstyledCards.length,
      titleHierarchy: { h3: h3 ? h3.textContent.trim() : null, h4Count }
    };
  }, { selector, sectionName, legacyClassNames: LEGACY_CLASS_NAMES });
}

async function ensureKurssMainMenu(page) {
  for (let attempt = 0; attempt < 6; attempt++) {
    const mainVisible = await page.locator("#kurssList:not([hidden])").isVisible().catch(() => false);
    if (mainVisible) return;
    const back = page.locator("#kurssBackBtn");
    if (!(await back.count()) || !(await back.isVisible().catch(() => false))) break;
    await back.click({ force: true });
    await page.waitForTimeout(250);
  }
}

async function clickKurssItem(page, selector) {
  const item = page.locator(selector);
  await item.scrollIntoViewIfNeeded();
  await item.click({ force: true });
  await page.waitForTimeout(300);
}

async function auditLanguage(browser, langCode, viewport) {
  const context = await browser.newContext(viewport);
  await context.addInitScript(() => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (error) {
      // ignore
    }
  });
  const page = await context.newPage();
  const sections = [];

  try {
    await selectLanguage(page, langCode);
    await openKurss(page);
    sections.push(await inspectPanel(page, "#kurssList", "kurss-menu"));

    for (const item of STATIC_PANELS) {
      await ensureKurssMainMenu(page);
      if (!(await page.locator(item.open).count())) continue;
      await clickKurssItem(page, item.open);
      if (item.sub) {
        await clickKurssItem(page, item.sub);
      }
      await page.waitForSelector(`${item.panel}:not([hidden])`, { timeout: 10000 }).catch(() => {});
      await page.waitForTimeout(200);
      sections.push(await inspectPanel(page, item.panel, item.name));
    }

    await ensureKurssMainMenu(page);
    await clickKurssItem(page, "#kurssLessonsBtn");
    await page.waitForSelector("#kurssLessonsMenu:not([hidden])", { timeout: 10000 });
    sections.push(await inspectPanel(page, "#kurssLessonsMenu", "lessons-menu"));

    for (let n = 1; n <= 21; n++) {
      const lessonBtn = page.locator(`#kurssLesson${n}Btn`);
      if ((await lessonBtn.count()) === 0) continue;
      await clickKurssItem(page, `#kurssLesson${n}Btn`);
      await page.waitForSelector(`#kurssLesson${n}:not([hidden])`, { timeout: 10000 });
      await page.waitForTimeout(250);
      const accs = page.locator(`#kurssLesson${n} details.lesson1-accordion`);
      const accCount = await accs.count();
      for (let a = 0; a < accCount; a++) {
        await accs.nth(a).evaluate((el) => { el.open = true; });
      }
      await page.waitForTimeout(200);
      sections.push(await inspectPanel(page, `#kurssLesson${n}`, `lesson-${n}`));
      await page.locator("#kurssBackBtn").click({ force: true });
      await page.waitForSelector("#kurssLessonsMenu:not([hidden])", { timeout: 10000 });
    }
  } catch (error) {
    sections.push({ section: "runtime-error", status: "FAIL", reason: String(error.message || error) });
  }

  await context.close();
  const passCount = sections.filter((s) => s.status === "PASS").length;
  const failCount = sections.filter((s) => s.status === "FAIL").length;
  return { lang: langCode, viewport: viewport.isMobile ? "mobile" : "desktop", sections, passCount, failCount };
}

async function main() {
  const argv = process.argv.slice(2);
  const langArg = argv.find((arg) => arg.startsWith("--lang="))?.slice("--lang=".length);
  const langFilters = langArg ? langArg.split(",").map((code) => code.trim()).filter(Boolean) : [];
  let languages = loadActiveLanguages();
  if (langFilters.length) languages = languages.filter((code) => langFilters.includes(code));

  const server = http.createServer(serveStatic);
  await new Promise((resolve) => server.listen(PORT, resolve));

  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const lang of languages) {
    process.stdout.write(`Auditing ${lang}...\n`);
    const desktop = await auditLanguage(browser, lang, { viewport: { width: 1280, height: 900 }, isMobile: false });
    const mobile = await auditLanguage(browser, lang, { viewport: { width: 390, height: 844 }, isMobile: true });
    results.push(desktop, mobile);
  }

  await browser.close();
  server.close();

  const summary = {
    generatedAt: new Date().toISOString(),
    languages: languages.length,
    viewports: 2,
    totalChecks: results.reduce((sum, r) => sum + r.sections.length, 0),
    pass: results.reduce((sum, r) => sum + r.passCount, 0),
    fail: results.reduce((sum, r) => sum + r.failCount, 0),
    results
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(summary, null, 2));

  console.log(JSON.stringify({
    languages: summary.languages,
    totalChecks: summary.totalChecks,
    pass: summary.pass,
    fail: summary.fail
  }, null, 2));

  if (summary.fail > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
