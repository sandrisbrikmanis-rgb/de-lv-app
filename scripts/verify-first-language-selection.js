#!/usr/bin/env node
"use strict";
/**
 * First-time language picker verification for all active UI languages.
 * Simulates new user: clear storage → pick language → verify UI + Kurss opens.
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const vm = require("vm");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const WWW_ROOT = path.join(ROOT, "www");
const PORT = Number(process.env.FIRST_LANG_PORT || 8922);
const BASE_URL = `http://127.0.0.1:${PORT}`;
const REPORT_JSON = path.join(ROOT, "reports/temp/first-language-selection.json");

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
    ".json": "application/json"
  };
  res.writeHead(200, { "Content-Type": types[ext] || "text/plain" });
  res.end(fs.readFileSync(filePath));
}

function loadActiveLanguages() {
  const code = fs.readFileSync(path.join(ROOT, "languages/registry.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return (ctx.window.AppLanguageRegistry?.active?.() || [])
    .filter((lang) => lang.active && lang.uiAvailable);
}

function loadExpectedCourseLabel(langCode) {
  const relPath = path.join("languages", langCode, "ui.js");
  const filePath = path.join(WWW_ROOT, relPath);
  if (!fs.existsSync(filePath)) return null;
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.LANGUAGE_UI_STRINGS?.menu?.course || null;
}

async function verifyLanguage(browser, langCode, expectedCourse) {
  const consoleErrors = [];
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  await context.addInitScript(() => {
    try {
      localStorage.clear();
      sessionStorage.clear();
    } catch (error) {
      // ignore
    }
  });
  const page = await context.newPage();
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });

  const result = {
    lang: langCode,
    status: "PASS",
    issues: []
  };

  try {
    await page.goto(`${BASE_URL}/index.html`, { waitUntil: "domcontentloaded", timeout: 60000 });
    await page.waitForSelector(`#languageOptionsList button[data-lang-code="${langCode}"]`, { timeout: 50000 });
    await page.locator(`#languageOptionsList button[data-lang-code="${langCode}"]`).first().click({ force: true });
    await page.waitForFunction(
      (code) => window.AppI18n?.getCurrentLanguage?.() === code,
      langCode,
      { timeout: 45000 }
    );
    await page.waitForTimeout(800);

    const uiState = await page.evaluate((code) => ({
      lang: window.AppI18n?.getCurrentLanguage?.(),
      courseLabel: window.AppI18n?.t("menu.course"),
      dataErrors: window.__APP_DATA_LOAD_REPORT__?.errors || []
    }), langCode);

    if (uiState.lang !== langCode) {
      result.issues.push(`language not active: expected ${langCode}, got ${uiState.lang}`);
    }
    if (expectedCourse && uiState.courseLabel !== expectedCourse) {
      result.issues.push(`menu.course mismatch: expected "${expectedCourse}", got "${uiState.courseLabel}"`);
    }
    if (/^menu\./.test(uiState.courseLabel || "")) {
      result.issues.push(`raw i18n key visible: ${uiState.courseLabel}`);
    }
    if (uiState.dataErrors.length) {
      result.issues.push(`data load errors: ${uiState.dataErrors.join("; ")}`);
    }

    await page.locator("#mainMenuButtons .menu-button-container").nth(6).locator("button").click();
    await page.waitForSelector("#kurssPanel:not([hidden])", { timeout: 10000 });
    const kurssOpen = await page.evaluate(() => ({
      kurssVisible: !document.getElementById("kurssPanel")?.hidden,
      kurssTitle: document.getElementById("kurssTitle")?.textContent || ""
    }));
    if (!kurssOpen.kurssVisible) {
      result.issues.push("kurss panel did not open");
    }
    if (!kurssOpen.kurssTitle) {
      result.issues.push("kurss title empty");
    }

    const launchErrors = consoleErrors.filter((text) =>
      text.includes("[AppLaunch]") || text.includes("UI strings for") || text.includes("were not registered")
    );
    if (launchErrors.length) {
      result.issues.push(`console: ${launchErrors[0]}`);
    }
  } catch (error) {
    result.issues.push(String(error.message || error));
  }

  if (result.issues.length) result.status = "FAIL";
  result.consoleErrorCount = consoleErrors.filter((t) => !/favicon/i.test(t)).length;
  await context.close();
  return result;
}

async function main() {
  const languages = loadActiveLanguages();
  const server = http.createServer(serveStatic);
  await new Promise((resolve) => server.listen(PORT, resolve));

  const browser = await chromium.launch({ headless: true });
  const results = [];

  for (const entry of languages) {
    const expectedCourse = loadExpectedCourseLabel(entry.code);
    process.stdout.write(`Checking ${entry.code}...\n`);
    results.push(await verifyLanguage(browser, entry.code, expectedCourse));
  }

  await browser.close();
  server.close();

  const pass = results.filter((r) => r.status === "PASS").length;
  const fail = results.filter((r) => r.status === "FAIL").length;
  const summary = {
    generatedAt: new Date().toISOString(),
    languages: languages.length,
    pass,
    fail,
    results
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(summary, null, 2));
  console.log(JSON.stringify({ languages: languages.length, pass, fail }, null, 2));
  if (fail > 0) process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
