#!/usr/bin/env node
"use strict";
/**
 * Verify ES UI visual repair: 39/39 NEW exact-match, runtime, regressions.
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const vm = require("vm");
const { execSync } = require("child_process");
const { chromium, devices } = require("playwright");

const ROOT = path.join(__dirname, "..");
const AUDIT_MD = path.join(ROOT, "reports/es-ui-visual-full-audit.md");
const PORT = 8880;

const LABOT_EXPECTED = [
  { id: "UI-1", file: "languages/es/ui.js", old: '"german": "Delaware"', new: '"german": "DE"' },
  { id: "UI-2", file: "languages/es/ui.js", old: '"pluralLabel": "MUCHOS"', new: '"pluralLabel": "Pl."' },
  { id: "UI-3", file: "languages/es/ui.js", old: '"next": "la siguiente palabra"', new: '"next": "Siguiente palabra"' },
  { id: "UI-4", file: "languages/es/ui.js", old: '"fillCase": "Übung I - Usa la conjugación correcta"', new: '"fillCase": "Ejercicio I — Usa la conjugación correcta"' },
  { id: "UI-5", file: "languages/es/ui.js", old: '"translate": "Übung II - traducir"', new: '"translate": "Ejercicio II — Traducir"', ctx: "exerciseMeta" },
  { id: "UI-6", file: "languages/es/ui.js", old: '"grammar": "gramática"', new: '"grammar": "Gramática"' },
  { id: "UI-7", file: "languages/es/ui.js", old: '"pronunciation": "pronunciación"', new: '"pronunciation": "Pronunciación"', ctx: "kurss top-level key" },
  { id: "UI-8", file: "languages/es/ui.js", old: '"lessons": "lecciones"', new: '"lessons": "Lecciones"' },
  { id: "UI-9", file: "languages/es/ui.js", old: '"closeCourse": "cerrar el curso"', new: '"closeCourse": "Cerrar el curso"' },
  { id: "UI-10", file: "languages/es/ui.js", old: '"weeklyReview": "revisión semanal"', new: '"weeklyReview": "Revisión semanal"' },
  { id: "UI-11", file: "languages/es/ui.js", old: '"present": "el presente"', new: '"present": "Presente"' },
  { id: "UI-12", file: "languages/es/ui.js", old: '"writeInfinitive": "escribe el infinitivo"', new: '"writeInfinitive": "Escribe el infinitivo"' },
  { id: "UI-13", file: "languages/es/ui.js", old: '"writeAnswer": "escribe la respuesta"', new: '"writeAnswer": "Escribe la respuesta"' },
  { id: "UI-14", file: "languages/es/ui.js", old: '"listen": "para escuchar"', new: '"listen": "Escuchar"' },
  { id: "UI-15", file: "languages/es/ui.js", old: '"shuffleVerbs": "mezclar los verbos"', new: '"shuffleVerbs": "Mezclar los verbos"' },
  { id: "UI-16", file: "languages/es/ui.js", old: '"quickTools": "herramientas rápidas"', new: '"quickTools": "Herramientas rápidas"' },
  { id: "KEY-01", file: "languages/es/ui.js", old: null, new: '"ariaLabel": "Cargando"', check: (c) => /"splash"[\s\S]*"ariaLabel": "Cargando"/.test(c) },
  { id: "KEY-02", file: "languages/es/ui.js", old: null, new: '"ariaLabel": "Selección de idioma"', check: (c) => /"languageSelect"[\s\S]*"ariaLabel": "Selección de idioma"/.test(c) },
  { id: "KEY-03", file: "languages/es/ui.js", old: null, new: '"learningModes": "Modos de aprendizaje"', check: (c) => c.includes('"learningModes": "Modos de aprendizaje"') },
  { id: "KEY-04", file: "languages/es/ui.js", old: null, new: '"words": "Palabras"', check: (c) => c.includes('"words": "Palabras"') },
  { id: "KEY-05", file: "languages/es/ui.js", old: null, new: '"names": "Nombres"', check: (c) => c.includes('"names": "Nombres"') },
  { id: "KEY-06", file: "languages/es/ui.js", old: null, new: '"reading": "Texto / lectura"', check: (c) => c.includes('"reading": "Texto / lectura"') },
  { id: "KEY-07", file: "languages/es/ui.js", old: null, new: '"dialogues": "Diálogos / frases"', check: (c) => c.includes('"dialogues": "Diálogos / frases"') },
  { id: "REG-17", file: "ui.js", old: null, new: '"Idea principal"', check: (c) => c.includes('"Idea principal"') && c.includes("STUDY_MAIN_IDEA_PREFIXES") },
  { id: "REG-18", file: "ui.js", old: null, new: '"Traducir"', check: (c) => c.includes('"Traducir": "kurss.sections.translate"') && c.includes('"Traducir"') },
  { id: "REG-19", file: "ui.js", old: null, new: '"Ejercicio"', check: (c) => c.includes('"Ejercicio": "kurss.sections.exercise"') },
  { id: "REG-20", file: "ui.js", old: null, new: '"Ejercicio / Ejercicio"', check: (c) => c.includes('"Ejercicio / Ejercicio": "kurss.sections.exerciseCombined"') },
  { id: "REG-21", file: "ui.js", old: null, new: '"Palabras"', check: (c) => c.includes('"Palabras": "kurss.sections.words"') },
  { id: "REG-22", file: "ui.js", old: null, new: '"Gramática"', check: (c) => c.includes('"Gramática": "kurss.sections.grammar"') },
  { id: "REG-23", file: "ui.js", old: null, new: '"Diálogo / teikumi"', check: (c) => c.includes('"Diálogo / teikumi": "kurss.sections.dialogues"') },
  { id: "REG-24", file: "ui.js", old: null, new: '"Izruná"', check: (c) => c.includes('"Izruná": "kurss.pronunciation"') },
  { id: "REG-25", file: "ui.js", old: null, new: '"Texto / Lectura"', check: (c) => c.includes('"Texto / Lectura": "kurss.sections.reading"') },
  { id: "REG-26", file: "ui.js", old: null, new: '"Nombres"', check: (c) => c.includes('"Nombres": "kurss.sections.names"') },
  { id: "DATA-27", file: "data/es/courseLessons.js", old: '"title": "Diálogo / teikumi"', new: '"title": "Diálogo / frases"', inverse: true },
  { id: "DATA-28", file: "data/es/courseLessons.js", old: '"title": "Izruná"', new: '"title": "Pronunciación"', inverse: true },
  { id: "DATA-29", file: "data/es/courseLessons.js", old: '"title": "Ejercicio / Ejercicio"', new: '"title": "Ejercicio"', inverse: true },
  { id: "COURSE-LV-01", file: "data/es/courseLessons.js", old: "Līdzīgi arī latviešu valodā vārdā “smags” g pirms s izklausās tuvāk k skaņai.", new: "Del mismo modo, en español la g ante s en «signos» suena más cercana a una k.", inverse: true },
  { id: "COURSE-LV-02", file: "data/es/courseLessons.js", old: "Atceries: divskanis ei vācu valodā izrunā kā ai: reif, unreif.", new: "Recuerda: el diptongo ei en alemán se pronuncia como ai: reif, unreif.", inverse: true },
  { id: "COURSE-LV-03", file: "data/es/courseLessons.js", old: "z izrunā kā latviešu c: Franz (franc), das Zimmer (cimer).", new: "La z suena como la c española: Franz (frans), das Zimmer (tsimer).", inverse: true },
];

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function verifyExactMatch() {
  const rows = [];
  let pass = 0;
  for (const item of LABOT_EXPECTED) {
    const content = read(item.file);
    let ok = false;
    if (item.inverse) {
      ok = !content.includes(item.old) && content.includes(item.new);
    } else if (item.check) {
      ok = item.check(content) && (!item.old || !content.includes(item.old));
    } else {
      ok = !content.includes(item.old) && content.includes(item.new);
    }
    rows.push({ id: item.id, ok });
    if (ok) pass++;
  }
  return { pass, total: LABOT_EXPECTED.length, rows };
}

function verifyDeUnchanged() {
  try {
    const diff = execSync("git diff HEAD -- data/es/courseLessons.js languages/es/ui.js ui.js www/data/es/courseLessons.js www/languages/es/ui.js www/ui.js", {
      cwd: ROOT,
      encoding: "utf8",
    });
    const deLineChanges = diff
      .split("\n")
      .filter((line) => line.startsWith("+") || line.startsWith("-"))
      .filter((line) => /"de"\s*:|de_article|de_plural|\.de\b/.test(line) && !line.includes("Delaware"));
    return { pass: deLineChanges.length === 0, deLineChanges };
  } catch (e) {
    return { pass: false, output: e.message };
  }
}

function verifySyntax() {
  const files = [
    "languages/es/ui.js", "data/es/courseLessons.js",
    "www/languages/es/ui.js", "www/data/es/courseLessons.js",
  ];
  const errors = [];
  for (const f of files) {
    try {
      const code = read(f);
      const ctx = { window: {} };
      vm.createContext(ctx);
      vm.runInContext(code, ctx);
    } catch (e) {
      errors.push(`${f}: ${e.message}`);
    }
  }
  return { pass: errors.length === 0, errors };
}

function verifyUiParity() {
  const pairs = [
    ["languages/es/ui.js", "www/languages/es/ui.js"],
    ["data/es/courseLessons.js", "www/data/es/courseLessons.js"],
    ["ui.js", "www/ui.js"],
  ];
  const mismatches = pairs.filter(([a, b]) => read(a) !== read(b)).map(([a, b]) => `${a} <> ${b}`);
  return { pass: mismatches.length === 0, mismatches };
}

function verifyUnexpectedChanges() {
  const diff = execSync("git diff --name-only HEAD", { cwd: ROOT, encoding: "utf8" }).trim().split("\n").filter(Boolean);
  const allowed = new Set([
    "languages/es/ui.js", "www/languages/es/ui.js",
    "data/es/courseLessons.js", "www/data/es/courseLessons.js",
    "ui.js", "www/ui.js",
    "reports/es-ui-visual-repair.md",
    "scripts/verify-es-ui-visual-repair.js",
    "scripts/apply-es-ui-visual-repair.js",
  ]);
  const unexpected = diff.filter((f) => !allowed.has(f));
  return { pass: unexpected.length === 0, changed: diff, unexpected };
}

function serveStatic(req, res) {
  let urlPath = req.url.split("?")[0];
  if (urlPath === "/") urlPath = "/index.html";
  const filePath = path.join(ROOT, urlPath.replace(/^\//, ""));
  if (!filePath.startsWith(ROOT) || !fs.existsSync(filePath)) {
    res.writeHead(404);
    res.end("not found");
    return;
  }
  res.end(fs.readFileSync(filePath));
}

async function verifyRuntime() {
  const server = http.createServer(serveStatic);
  await new Promise((r) => server.listen(PORT, r));
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: "networkidle" });
  await page.evaluate(() => { try { localStorage.clear(); } catch {} });
  await page.reload({ waitUntil: "networkidle" });
  await page.waitForSelector("#languageOptionsList button", { timeout: 20000 });
  await page.waitForTimeout(4500);
  await page.locator("#languageOptionsList button").filter({ hasText: /Español/i }).first().click();
  await page.waitForSelector("#appRoot:not([hidden])", { timeout: 15000 });
  await page.waitForFunction(() => !document.body.classList.contains("app-launching"), null, { timeout: 15000 });
  await page.waitForTimeout(1200);

  await page.locator("#mainMenuButtons .mobile-menu-btn-label").filter({ hasText: /^A1$/ }).first().click();
  await page.waitForSelector("#groupDetailScreen:not([hidden])", { timeout: 10000 });
  await page.waitForTimeout(500);

  const esChecks = await page.evaluate(() => ({
    title: document.title,
    homeH1: document.querySelector(".home-menu-header h1")?.textContent,
    modeAria: document.getElementById("modeButtons")?.getAttribute("aria-label"),
    nextBtn: document.getElementById("nextBtn")?.textContent,
    langAria: document.getElementById("appLanguageScreen")?.getAttribute("aria-label"),
    langCode: window.AppI18n?.getLanguageCode?.() || window.AppLanguageContext?.getNativeLanguage?.(),
  }));

  // LV check - back home then switch to Latvian
  await page.locator("#navBackBtn").click();
  await page.waitForSelector("#homeMenuScreen:not([hidden])", { timeout: 10000 });
  await page.click("#homeMenuLanguageBtn");
  await page.waitForTimeout(500);
  await page.locator("#languageOptionsList button").filter({ hasText: /Latviešu/i }).first().click();
  await page.waitForSelector("#appRoot:not([hidden])");
  await page.waitForTimeout(800);
  const lvChecks = await page.evaluate(() => ({
    title: document.title,
    homeH1: document.querySelector(".home-menu-header h1")?.textContent,
    navBack: document.getElementById("navBackBtn")?.getAttribute("aria-label"),
  }));

  // EN check
  await page.locator("#navBackBtn").click().catch(() => {});
  await page.waitForSelector("#homeMenuScreen:not([hidden])", { timeout: 8000 }).catch(() => {});
  await page.click("#homeMenuLanguageBtn");
  await page.waitForTimeout(500);
  await page.locator("#languageOptionsList button").filter({ hasText: /English/i }).first().click();
  await page.waitForSelector("#appRoot:not([hidden])");
  await page.waitForTimeout(800);
  const enChecks = await page.evaluate(() => ({
    title: document.title,
    homeH1: document.querySelector(".home-menu-header h1")?.textContent,
  }));

  // Curso 21 lessons
  await page.locator("#navBackBtn").click().catch(() => {});
  await page.waitForSelector("#homeMenuScreen:not([hidden])", { timeout: 8000 }).catch(() => {});
  await page.click("#homeMenuLanguageBtn");
  await page.waitForTimeout(300);
  await page.locator("#languageOptionsList button").filter({ hasText: /Español/i }).first().click();
  await page.waitForSelector("#appRoot:not([hidden])");
  await page.waitForTimeout(500);
  await page.locator("#mainMenuButtons .mobile-menu-btn-label").filter({ hasText: /^Curso$/ }).first().click();
  await page.waitForSelector("#kurssPanel:not([hidden])");
  await page.click("#kurssLessonsBtn");
  await page.waitForSelector("#kurssLessonsMenu:not([hidden])");
  let lessonsOk = 0;
  for (let n = 1; n <= 21; n++) {
    const btn = page.locator(`#kurssLesson${n}Btn`);
    if ((await btn.count()) > 0) lessonsOk++;
  }

  await browser.close();
  server.close();

  const esRemnants = [esChecks.title, esChecks.homeH1, esChecks.modeAria, esChecks.nextBtn].filter((t) =>
    /Vācu|latviešu|LV-DE|menu\.|Delaware|MUCHOS|teikumi|Izruná/i.test(String(t))
  );
  const lvRemnants = [lvChecks.title, lvChecks.homeH1].filter((t) => /Alemán|ES-DE|Español/i.test(String(t)));
  const enRemnants = [enChecks.title, enChecks.homeH1].filter((t) => /Alemán|ES-DE|Vācu/i.test(String(t)));

  return {
    esChecks,
    lvChecks,
    enChecks,
    lessonsOk,
    esRemnants,
    lvRemnants,
    enRemnants,
    pass: esRemnants.length === 0 && lvRemnants.length === 0 && enRemnants.length === 0 && lessonsOk === 21,
  };
}

async function main() {
  const exact = verifyExactMatch();
  const de = verifyDeUnchanged();
  const syntax = verifySyntax();
  const parity = verifyUiParity();
  const unexpected = verifyUnexpectedChanges();
  const runtime = await verifyRuntime();

  const report = {
    exactMatch: exact,
    deUnchanged: de,
    syntax,
    parity,
    unexpected,
    runtime,
    allPass:
      exact.pass === exact.total &&
      de.pass &&
      syntax.pass &&
      parity.pass &&
      unexpected.pass &&
      runtime.pass,
  };

  console.log(JSON.stringify(report, null, 2));
  process.exit(report.allPass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
