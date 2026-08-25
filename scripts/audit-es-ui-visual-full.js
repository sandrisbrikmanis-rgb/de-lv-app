#!/usr/bin/env node
"use strict";
/**
 * ES-DE UI visual READ-ONLY audit — runtime sweep (desktop + mobile).
 * Output: reports/temp/es-ui-visual-full-audit.json
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const { chromium, devices } = require("playwright");

const ROOT = path.join(__dirname, "..");
const PORT = 8877;
const BASE_URL = process.env.ES_UI_AUDIT_BASE || `http://127.0.0.1:${PORT}`;
const REPORT_JSON = path.join(ROOT, "reports/temp/es-ui-visual-full-audit.json");

const GROUPS = ["A1", "A2", "B1", "B2", "C1", "C2", "Sätze"];
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const SUBGROUP_PATTERNS = [/^\d+$/, /^[A-Z]\d+$/i, /^Grupo/i, /^Subgrupo/i];

// Latvian / German / English UI remnants (not DE learning content)
const FOREIGN_UI_PATTERNS = [
  /\b(teikumi|Vācu|latviešu|izvēlne|Atgriezties|Kā tas|Problemātisk|Nevajadzīg|Pareizrakstība|Automātisk|izruna|Palaišana|Valodas)\b/i,
  /\b(Sprache wählen|Deutsch lernen|Deutsche Sprache)\b/,
  /\b(Choose|Back to|Settings|Restore|Close|Cancel|Delete|Continue|Check|Known|Unknown)\b/,
  /\b(Izruná|teikumi)\b/,
  /\b(Übung)\b/,
  /\b(Delaware)\b/,
  /\b(MUCHOS)\b/,
];

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
  const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".png": "image/png" };
  res.writeHead(200, { "Content-Type": types[ext] || "text/plain" });
  res.end(fs.readFileSync(filePath));
}

function isGermanLearningText(text) {
  const t = String(text || "").trim();
  if (!t) return true;
  if (/^(der|die|das|ein|eine|ich|du|er|sie|wir|ihr|Sie|es|und|ist|sind|haben|sein|nicht|mit|von|zu|auf|in|an|bei|nach|vor|über|unter|neben|zwischen)\b/i.test(t)) return true;
  if (/[äöüßÄÖÜ]/.test(t) && !/\b(Izruná|teikumi)\b/.test(t)) return true;
  if (/^(Lección|A1|A2|B1|B2|C1|C2|DE|ES|Pl\.|Infinitivo|Nominativ|Akkusativ|Dativ)\b/i.test(t)) return true;
  return false;
}

function classifyFinding(text, context) {
  const t = String(text || "").trim();
  if (!t || t.length < 2) return null;
  if (isGermanLearningText(t)) return null;
  if (/^[\d\s%•·/|←→➔🔄ⓘ🏅🔄▲▼]+$/.test(t)) return null;
  if (/^(A1|A2|B1|B2|C1|C2|ES|DE|Pl\.)$/.test(t)) return null;

  for (const pat of FOREIGN_UI_PATTERNS) {
    if (pat.test(t)) {
      return { text: t, context, reason: `foreign pattern: ${pat}` };
    }
  }

  // Suspicious mixed-language section titles
  if (/\/\s*teikumi/i.test(t)) return { text: t, context, reason: "LV remnant in section title" };
  if (/^Izruná$/i.test(t)) return { text: t, context, reason: "non-Spanish pronunciation label" };
  if (/Ejercicio\s*\/\s*Ejercicio/i.test(t)) return { text: t, context, reason: "duplicate exercise label" };
  if (/^la siguiente palabra$/i.test(t)) return { text: t, context, reason: "lowercase article on button" };
  if (/^Delaware$/i.test(t)) return { text: t, context, reason: "wrong DE column header" };
  if (/^MUCHOS$/i.test(t)) return { text: t, context, reason: "wrong plural label" };

  return null;
}

async function collectVisibleTexts(page, label) {
  return page.evaluate((screenLabel) => {
    const skip = new Set(["SCRIPT", "STYLE", "NOSCRIPT"]);
    const out = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || skip.has(parent.tagName) || parent.hidden) continue;
      if (parent.closest("[hidden]")) continue;
      const text = node.textContent.replace(/\s+/g, " ").trim();
      if (!text) continue;
      const rect = parent.getBoundingClientRect();
      if (rect.width === 0 && rect.height === 0) continue;
      out.push({ text, tag: parent.tagName, id: parent.id || "", class: parent.className || "", screen: screenLabel });
    }
    document.querySelectorAll("[aria-label],[title]").forEach((el) => {
      if (el.closest("[hidden]")) return;
      const aria = el.getAttribute("aria-label");
      const title = el.getAttribute("title");
      if (aria) out.push({ text: aria, tag: el.tagName, id: el.id || "", attr: "aria-label", screen: screenLabel });
      if (title) out.push({ text: title, tag: el.tagName, id: el.id || "", attr: "title", screen: screenLabel });
    });
    return out;
  }, label);
}

async function selectSpanish(page) {
  await page.goto(`${BASE_URL}/index.html?lang=es`, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForSelector("#languageOptionsList button, #appRoot:not([hidden])", { timeout: 20000 });
  const langBtn = page.locator("#languageOptionsList button").filter({ hasText: /Español/i });
  if ((await langBtn.count()) > 0) {
    await langBtn.first().click();
  }
  await page.waitForSelector("#appRoot:not([hidden])", { timeout: 15000 });
  await page.waitForFunction(() => !document.body.classList.contains("app-launching"), null, { timeout: 15000 });
  await page.waitForTimeout(800);
}

async function auditViewport(browser, viewportName, viewport) {
  const context = await browser.newContext(viewport);
  const page = await context.newPage();
  const coverage = [];
  const findings = [];
  const seen = new Set();

  function addFinding(f) {
    const key = `${f.context}|${f.text}`;
    if (seen.has(key)) return;
    seen.add(key);
    findings.push(f);
  }

  async function snap(screen) {
    const texts = await collectVisibleTexts(page, screen);
    coverage.push({ screen, viewport: viewportName, textCount: texts.length });
    for (const item of texts) {
      const ctx = `${viewportName} › ${screen}${item.id ? ` #${item.id}` : ""}${item.attr ? ` [${item.attr}]` : ""}`;
      const hit = classifyFinding(item.text, ctx);
      if (hit) addFinding({ ...hit, viewport: viewportName, screen });
    }
  }

  await selectSpanish(page);
  await snap("splash-or-home");

  // Home menu
  await snap("home-menu");

  // A1-C2 + Frases
  for (const group of GROUPS) {
    const label = group === "Sätze" ? "Frases" : group;
    const btn = page.locator("#mainMenuButtons .mobile-menu-btn-label").filter({ hasText: new RegExp(`^${label}$`, "i") });
    if ((await btn.count()) === 0) continue;
    await btn.first().click();
    await page.waitForSelector("#groupDetailScreen:not([hidden])", { timeout: 10000 });
    await page.waitForTimeout(600);
    await snap(`group-${group}-detail`);

    // Mode buttons (easy/normal/intense) — apakšrežīmi
    const modeBtns = page.locator("#modeButtons button");
    const modeCount = await modeBtns.count();
    for (let i = 0; i < Math.min(modeCount, 3); i++) {
      await modeBtns.nth(i).click();
      await page.waitForTimeout(500);
      await snap(`group-${group}-mode-${i}`);
    }

    // Open info modal sample
    const infoBtn = page.locator("#infoBtn");
    if ((await infoBtn.count()) > 0 && group === "A1") {
      await infoBtn.click();
      await page.waitForTimeout(300);
      await snap(`group-${group}-info-modal`);
      const closeInfo = page.locator("#infoPopup .modal-close");
      if ((await closeInfo.count()) > 0) await closeInfo.first().click();
      await page.waitForTimeout(200);
    }

    await page.locator("#navBackBtn").click();
    await page.waitForSelector("#homeMenuScreen:not([hidden])", { timeout: 10000 });
  }

  // Verbos
  const verbsBtn = page.locator("#mainMenuButtons button").filter({ hasText: /Verbos/i });
  if ((await verbsBtn.count()) > 0) {
    await verbsBtn.first().click();
    await page.waitForSelector("#groupDetailScreen:not([hidden])", { timeout: 10000 });
    await snap("verbs-detail");
    await page.locator("#navBackBtn").click();
    await page.waitForSelector("#homeMenuScreen:not([hidden])", { timeout: 10000 });
  }

  // Curso
  const cursoBtn = page.locator("#mainMenuButtons button").filter({ hasText: /Curso/i });
  if ((await cursoBtn.count()) > 0) {
    await cursoBtn.first().click();
    await page.waitForSelector("#kurssPanel:not([hidden])", { timeout: 10000 });
    await snap("curso-menu");

    const subMenus = [
      { sel: "#kurssPronunciationBtn", name: "pronunciation" },
      { sel: "#kurssArticlesBtn", name: "articles" },
      { sel: "#kurssPronounsBtn", name: "pronouns" },
      { sel: "#kurssLessonsBtn", name: "lessons-list" },
    ];
    for (const sub of subMenus) {
      if (!(await page.locator(sub.sel).count())) continue;
      await page.click(sub.sel);
      await page.waitForTimeout(600);
      await snap(`curso-${sub.name}`);
      await page.locator("#kurssBackBtn").click();
      await page.waitForTimeout(400);
    }

    await page.click("#kurssLessonsBtn");
    await page.waitForSelector("#kurssLessonsMenu:not([hidden])", { timeout: 10000 });
    await snap("curso-lessons-menu");

    for (let n = 1; n <= 21; n++) {
      const lessonBtn = page.locator(`#kurssLesson${n}Btn`);
      if ((await lessonBtn.count()) === 0) continue;
      await lessonBtn.click();
      await page.waitForSelector(`#kurssLesson${n}:not([hidden])`, { timeout: 10000 });
      await page.waitForTimeout(400);

      // Open accordions
      const accs = page.locator(`#kurssLesson${n} details.lesson1-accordion`);
      const accCount = await accs.count();
      for (let a = 0; a < accCount; a++) {
        await accs.nth(a).evaluate((el) => { el.open = true; });
      }
      await page.waitForTimeout(300);
      await snap(`curso-lesson-${n}`);

      await page.locator("#kurssBackBtn").click();
      await page.waitForSelector("#kurssLessonsMenu:not([hidden])", { timeout: 10000 });
    }

    await page.locator("#kurssCloseBtn").click();
    await page.waitForSelector("#homeMenuScreen:not([hidden])", { timeout: 10000 });
  }

  // Modals: info + extra options (best-effort)
  try {
    const a1Btn = page.locator("#mainMenuButtons button").filter({ hasText: /^A1$/i });
    if ((await a1Btn.count()) > 0) {
      await a1Btn.first().click();
      await page.waitForSelector("#groupDetailScreen:not([hidden])", { timeout: 8000 });
      const infoBtn = page.locator("#infoBtn");
      if ((await infoBtn.count()) > 0) {
        await infoBtn.click();
        await page.waitForTimeout(400);
        await snap("modal-info");
        const close = page.locator("#infoCloseBtn, #infoModal button.close-btn").filter({ hasText: /Cerrar/i });
        if ((await close.count()) > 0) await close.first().click();
      }
      const extra = page.locator("#extraOptionsBtn");
      if ((await extra.count()) > 0) {
        await extra.click();
        await page.waitForTimeout(400);
        await snap("modal-extra-options");
        await extra.click();
      }
      await page.locator("#navBackBtn").click();
      await page.waitForSelector("#homeMenuScreen:not([hidden])", { timeout: 8000 });
    }
  } catch (modalErr) {
    coverage.push({ screen: "modal-check-skipped", viewport: viewportName, error: String(modalErr.message || modalErr) });
  }

  await context.close();
  return { viewport: viewportName, coverage, findings };
}

async function staticCodeFindings() {
  const findings = [];
  const esUi = fs.readFileSync(path.join(ROOT, "languages/es/ui.js"), "utf8");
  const uiJs = fs.readFileSync(path.join(ROOT, "www/ui.js"), "utf8");
  const indexHtml = fs.readFileSync(path.join(ROOT, "www/index.html"), "utf8");

  const uiChecks = [
    { re: /"german":\s*"Delaware"/, ctx: "languages/es/ui.js › study.table.german", current: "Delaware", suggest: "DE", status: "LABOT" },
    { re: /"pluralLabel":\s*"MUCHOS"/, ctx: "languages/es/ui.js › study.minimal.pluralLabel", current: "MUCHOS", suggest: "Pl.", status: "LABOT" },
    { re: /"next":\s*"la siguiente palabra"/, ctx: "languages/es/ui.js › buttons.next", current: "la siguiente palabra", suggest: "Siguiente palabra", status: "LABOT" },
    { re: /"fillCase":\s*"Übung I/, ctx: "languages/es/ui.js › kurss.exerciseMeta.fillCase", current: "Übung I - Usa la conjugación correcta", suggest: "Ejercicio I — Usa la conjugación correcta", status: "LABOT" },
    { re: /"translate":\s*"Übung II/, ctx: "languages/es/ui.js › kurss.exerciseMeta.translate", current: "Übung II - traducir", suggest: "Ejercicio II — Traducir", status: "LABOT" },
    { re: /"grammar":\s*"gramática"/, ctx: "languages/es/ui.js › kurss.sections.grammar", current: "gramática", suggest: "Gramática", status: "LABOT" },
    { re: /"pronunciation":\s*"pronunciación"/, ctx: "languages/es/ui.js › kurss.pronunciation", current: "pronunciación", suggest: "Pronunciación", status: "LABOT" },
    { re: /"lessons":\s*"lecciones"/, ctx: "languages/es/ui.js › kurss.lessons", current: "lecciones", suggest: "Lecciones", status: "LABOT" },
    { re: /"closeCourse":\s*"cerrar el curso"/, ctx: "languages/es/ui.js › kurss.closeCourse", current: "cerrar el curso", suggest: "Cerrar el curso", status: "LABOT" },
    { re: /"weeklyReview":\s*"revisión semanal"/, ctx: "languages/es/ui.js › buttons.weeklyReview", current: "revisión semanal", suggest: "Revisión semanal", status: "LABOT" },
    { re: /"present":\s*"el presente"/, ctx: "languages/es/ui.js › verb.present", current: "el presente", suggest: "Presente", status: "LABOT" },
    { re: /"writeInfinitive":\s*"escribe el infinitivo"/, ctx: "languages/es/ui.js › verb.writeInfinitive", current: "escribe el infinitivo", suggest: "Escribe el infinitivo", status: "LABOT" },
    { re: /"writeAnswer":\s*"escribe la respuesta"/, ctx: "languages/es/ui.js › spelling.writeAnswer", current: "escribe la respuesta", suggest: "Escribe la respuesta", status: "LABOT" },
    { re: /"listen":\s*"para escuchar"/, ctx: "languages/es/ui.js › buttons.listen", current: "para escuchar", suggest: "Escuchar", status: "LABOT" },
    { re: /"shuffleVerbs":\s*"mezclar los verbos"/, ctx: "languages/es/ui.js › buttons.shuffleVerbs", current: "mezclar los verbos", suggest: "Mezclar los verbos", status: "LABOT" },
    { re: /"quickTools":\s*"herramientas rápidas"/, ctx: "languages/es/ui.js › nav.quickTools", current: "herramientas rápidas", suggest: "Herramientas rápidas", status: "LABOT" },
  ];

  for (const c of uiChecks) {
    if (c.re.test(esUi)) findings.push({ id: `UI-${findings.length + 1}`, location: c.ctx, current: c.current, suggested: c.suggest, status: c.status, source: "static-es-ui" });
  }

  if (!/Idea principal/.test(uiJs.match(/STUDY_MAIN_IDEA_PREFIXES\s*=\s*\[([\s\S]*?)\]/)?.[1] || "")) {
    findings.push({
      id: `REG-${findings.length + 1}`,
      location: "www/ui.js › STUDY_MAIN_IDEA_PREFIXES",
      current: "Nav «Idea principal»",
      suggested: "Pievienot «Idea principal» prefiksu study kartēm",
      status: "LABOT",
      source: "static-renderer",
    });
  }

  const courseTitles = ["Traducir", "Ejercicio", "Ejercicio / Ejercicio", "Palabras", "Gramática", "Diálogo / teikumi", "Izruná", "Texto / Lectura", "Nombres"];
  for (const title of courseTitles) {
    if (!new RegExp(`"${title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`).test(uiJs)) {
      const isTranslate = title === "Traducir";
      const isExercise = /Ejercicio/.test(title);
      findings.push({
        id: `REG-${findings.length + 1}`,
        location: `www/ui.js › COURSE_* registry (missing «${title}»)`,
        current: `Sekcija «${title}» nav reģistrā`,
        suggested: `Pievienot «${title}» COURSE_SECTION_I18N_KEYS${isTranslate ? " + COURSE_TRANSLATE_SECTION_TITLES" : ""}${isExercise ? " + COURSE_EXERCISE_SECTION_TITLES" : ""}`,
        status: "LABOT",
        source: "static-renderer",
      });
    }
  }

  const courseData = fs.readFileSync(path.join(ROOT, "data/es/courseLessons.js"), "utf8");
  const mixedTitles = [...new Set((courseData.match(/"title":\s*"([^"]+)"/g) || []).map((m) => m.replace(/"title":\s*"/, "").replace(/"$/, "")))];
  for (const title of mixedTitles) {
    if (/teikumi/i.test(title)) {
      findings.push({ id: `DATA-${findings.length + 1}`, location: `data/es/courseLessons.js › section title`, current: title, suggested: "Diálogo / frases", status: "LABOT", source: "static-data" });
    }
    if (/^Izruná$/i.test(title)) {
      findings.push({ id: `DATA-${findings.length + 1}`, location: `data/es/courseLessons.js › section title`, current: title, suggested: "Pronunciación", status: "LABOT", source: "static-data" });
    }
    if (/Ejercicio\s*\/\s*Ejercicio/i.test(title)) {
      findings.push({ id: `DATA-${findings.length + 1}`, location: `data/es/courseLessons.js › section title`, current: title, suggested: "Ejercicio", status: "LABOT", source: "static-data" });
    }
  }

  // Hardcoded LV in index.html (shown before i18n on some paths)
  const hardcoded = [
    { re: /aria-label="Palaišana"/, current: "Palaišana", suggest: "Carga (splash.ariaLabel via i18n)" },
    { re: /aria-label="Valodas izvēle"/, current: "Valodas izvēle", suggest: "Selección de idioma (languageSelect via i18n)" },
    { re: /Sprache wählen/, current: "Sprache wählen", suggest: "Elegir idioma" },
    { re: /Deutsch lernen/, current: "Deutsch lernen", suggest: "Aprender alemán" },
    { re: /Vācu Valoda/, current: "Vācu Valoda • LV-DE", suggest: "Alemán • ES-DE (app.title via i18n)" },
    { re: /Atgriezties galvenajā izvēlnē/, current: "Atgriezties galvenajā izvēlnē", suggest: "Volver al menú principal" },
    { re: /Kā tas strādā/, current: "Kā tas strādā?", suggest: "¿Cómo funciona?" },
    { re: /Problemātiskie vārdi/, current: "Problemātiskie vārdi", suggest: "Palabras problemáticas" },
    { re: /Nevajadzīgie vārdi/, current: "Nevajadzīgie vārdi", suggest: "Palabras innecesarias" },
    { re: /Pareizrakstība/, current: "Pareizrakstība", suggest: "Ortografía" },
    { re: /Automātiska izruna/, current: "Automātiska izruna ieslēgta", suggest: "Pronunciación automática activada" },
  ];
  for (const h of hardcoded) {
    if (h.re.test(indexHtml)) {
      findings.push({ id: `HTML-${findings.length + 1}`, location: "www/index.html (hardcoded fallback)", current: h.current, suggested: h.suggest, status: "NELABOT", source: "static-html", note: "Pārraksta applyLocalizedStaticUi(); jāpārbauda vai aria/title atjaunojas pēc bootAppUi" });
    }
  }

  return findings;
}

async function main() {
  const useLocal = !process.env.ES_UI_AUDIT_BASE;
  let server;
  if (useLocal) {
    server = http.createServer(serveStatic);
    await new Promise((r) => server.listen(PORT, r));
  }

  const browser = await chromium.launch({ headless: true });
  const desktop = await auditViewport(browser, "desktop", { viewport: { width: 1280, height: 900 } });
  const mobile = await auditViewport(browser, devices["iPhone 13"]);
  await browser.close();
  if (server) server.close();

  const staticFindings = await staticCodeFindings();
  const runtimeFindings = [...desktop.findings, ...mobile.findings];

  const report = {
    generatedAt: new Date().toISOString(),
    baseUrl: BASE_URL,
    coverage: {
      desktop: desktop.coverage,
      mobile: mobile.coverage,
      screensChecked: [...new Set([...desktop.coverage, ...mobile.coverage].map((c) => c.screen))].length,
    },
    runtimeFindings,
    staticFindings,
    totals: {
      runtime: runtimeFindings.length,
      static: staticFindings.length,
      labot: staticFindings.filter((f) => f.status === "LABOT").length,
      nelabot: staticFindings.filter((f) => f.status === "NELABOT").length,
    },
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2));
  console.log(JSON.stringify({ screens: report.coverage.screensChecked, runtime: report.totals.runtime, static: report.totals.static }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
