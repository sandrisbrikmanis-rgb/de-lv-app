#!/usr/bin/env node
"use strict";
/**
 * Verify ES Kurss Artículos visual COPY-ONLY repair gates.
 * Usage: node scripts/verify-es-kurss-articles-visual-repair.js
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const vm = require("vm");
const { execSync } = require("child_process");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const DECISIONS = path.join(ROOT, "reports/es-kurss-articles-visual-owner-decisions.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-kurss-articles-visual-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-articles-visual-repair-verification.md");
const PORT = Number(process.env.ES_KURSS_ARTICLES_PORT || 8896);

const BROKEN_STRINGS = [
  "der Tisch - table",
  "der Mann - man",
  "die Gabel - fork",
  "El article alemán no siempre coincide con el sistema de género inglés",
  "adecuado para BMW",
  "der agosto, der diciembre",
  "la Harley-Davidson, la Yamaha",
  "plural → los automóviles, la casa",
  "se adapta de lunes a lunes",
  "se adapta a agosto - agosto",
  "verbos como sustantivos → das Essen, das Lernen, das Lesen",
  "verbo como sustantivo → das Essen, das Lernen",
  "das Essen - comer / comida",
  "das Lernen - Aprender",
  "Excepciones importantes / debe aprender con el article",
  "Ayuda para terminaciones y grupos de palabras adivinar el article",
];

const POSITIVE_MARKERS = [
  "El artículo alemán",
  "der Tisch - mesa",
  "der BMW, der Mercedes",
  "der August, der Dezember",
  "der Montag - lunes",
  "die Harley-Davidson",
  "die Autos, die Häuser",
  "verbos sustantivados → das Essen, das Lernen, das Lesen",
  "das Essen - la comida",
  "die Gabel - tenedor",
  "con el artículo",
];

const ALLOWED_CHANGED = require("./lib/es-kurss-four-sections-integration-allowed");

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function loadArticlesHtml() {
  const code = read("data/es/courseLessons.js");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.COURSE_LESSON_HTML.kurssArticlesLesson || "";
}

function verifyApplyLog() {
  if (!fs.existsSync(APPLY_LOG)) return { pass: false, reason: "apply log missing" };
  const log = JSON.parse(read("reports/temp/es-kurss-articles-visual-owner-apply-log.json"));
  const pass =
    log.appliedVerified === 19 &&
    log.currentMismatch === 0 &&
    log.newMismatch === 0 &&
    log.failed === 0;
  return { pass, log };
}

function verifyDecisionsExact() {
  const decisions = JSON.parse(read("reports/es-kurss-articles-visual-owner-decisions.json"));
  const html = loadArticlesHtml();
  const rows = [];
  let pass = true;

  for (const target of decisions.targets) {
    if (target.status !== "LABOT") continue;
    let ok;
    if (target.action === "REMOVE_ELEMENT") {
      ok = !html.includes(target.current) && !html.includes(target.removeHtml);
    } else {
      ok = html.includes(target.new) && !html.includes(target.current);
    }
    rows.push({ id: target.id, ok });
    if (!ok) pass = false;
  }
  return { pass, rows };
}

function verifyEnglishArticleRemnants(html) {
  const ownerArticleCurrents = [
    "El article alemán no siempre coincide con el sistema de género inglés. Por lo tanto, es mejor aprender los sustantivos junto con el article.",
    "Excepciones importantes / debe aprender con el article",
    "Ayuda para terminaciones y grupos de palabras adivinar el article, pero no son una regla 100% segura. Si no está seguro, aprenda la palabra junto con el article.",
  ];
  const hits = ownerArticleCurrents.filter((s) => html.includes(s));
  return { pass: hits.length === 0, hits };
}

function verifyMirror() {
  const pairs = [["data/es/courseLessons.js", "www/data/es/courseLessons.js"]];
  const mismatches = pairs.filter(([a, b]) => read(a) !== read(b)).map(([a, b]) => `${a} <> ${b}`);
  return { pass: mismatches.length === 0, mismatches };
}

function verifySyntax() {
  const files = ["data/es/courseLessons.js", "www/data/es/courseLessons.js"];
  const errors = [];
  for (const f of files) {
    try {
      execSync(`node --check "${path.join(ROOT, f)}"`, { encoding: "utf8" });
    } catch (e) {
      errors.push(`${f}: ${e.message}`);
    }
  }
  return { pass: errors.length === 0, errors };
}

function verifyHtmlStructure() {
  const html = loadArticlesHtml();
  const openSection = (html.match(/<section\b/gi) || []).length;
  const closeSection = (html.match(/<\/section>/gi) || []).length;
  const hasBadClose = html.includes("</sección>");
  const brokenFound = BROKEN_STRINGS.filter((s) => html.includes(s));
  const markersMissing = POSITIVE_MARKERS.filter((s) => !html.includes(s));
  const articleRemnants = verifyEnglishArticleRemnants(html);
  const pass =
    openSection === closeSection &&
    !hasBadClose &&
    brokenFound.length === 0 &&
    markersMissing.length === 0 &&
    articleRemnants.pass;
  return {
    pass,
    openSection,
    closeSection,
    hasBadClose,
    brokenFound,
    markersMissing,
    articleRemnants,
  };
}

function verifyDeUnchanged() {
  try {
    const diff = execSync("git diff HEAD -- 'data/de/*' 'languages/de/*' 'www/data/de/*' 'www/languages/de/*'", {
      cwd: ROOT,
      encoding: "utf8",
    });
    return { pass: diff.trim().length === 0, diff: diff.trim() };
  } catch (e) {
    return { pass: false, output: e.message };
  }
}

function verifyUnexpectedChanges() {
  const diff = execSync("git diff --name-only HEAD", { cwd: ROOT, encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(Boolean);
  const unexpected = diff.filter((f) => !ALLOWED_CHANGED.has(f));
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

async function verifyVisualSmoke() {
  const server = http.createServer(serveStatic);
  await new Promise((r) => server.listen(PORT, r));
  const results = [];
  const pageErrors = [];
  const plans = [
    ["desktop", { viewport: { width: 1280, height: 800 } }],
    ["mobile", { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }],
  ];

  try {
    for (const [label, opts] of plans) {
      const browser = await chromium.launch({ headless: true });
      const context = await browser.newContext(opts);
      const page = await context.newPage();
      page.on("pageerror", (err) => pageErrors.push({ viewport: label, message: err.message }));
      page.on("console", (msg) => {
        if (msg.type() === "error") pageErrors.push({ viewport: label, message: msg.text() });
      });

      try {
        await page.goto(`http://127.0.0.1:${PORT}/index.html`, { waitUntil: "networkidle" });
        await page.evaluate(() => {
          try {
            localStorage.clear();
          } catch {}
        });
        await page.reload({ waitUntil: "networkidle" });
        await page.waitForSelector("#languageOptionsList button", { timeout: 20000 });
        await page.waitForTimeout(label === "mobile" ? 6000 : 4500);
        const langBtn = page.locator('#languageOptionsList button[data-lang-code="es"]');
        await langBtn.first().scrollIntoViewIfNeeded();
        if (label === "mobile") await langBtn.first().tap();
        else await langBtn.first().click({ force: true });
        await page.waitForFunction(
          () => {
            const appRoot = document.getElementById("appRoot");
            return appRoot && !appRoot.hidden;
          },
          null,
          { timeout: 30000 },
        );
        await page.waitForTimeout(1200);

        const kurssBtn = page.locator("#mainMenuButtons .menu-button-container").nth(6).locator("button");
        await kurssBtn.click();
        await page.waitForSelector("#kurssPanel:not([hidden])", { timeout: 10000 });
        await page.click("#kurssArticlesBtn");
        await page.waitForSelector("#kurssArticlesLesson:not([hidden])", { timeout: 10000 });
        await page.waitForTimeout(500);

        const checks = await page.evaluate(({ brokenStrings, markers }) => {
          const panel = document.getElementById("kurssArticlesLesson");
          const text = panel?.innerText || "";
          const rect = panel?.getBoundingClientRect();
          return {
            titleVisible: text.includes("Artículos"),
            hasMesa: text.includes("der Tisch - mesa"),
            noBroken: brokenStrings.every((s) => !text.includes(s)),
            markersPresent: markers.every((s) => text.includes(s)),
            noEnglishArticle: !text.includes("El article alemán") && !text.includes("debe aprender con el article"),
            panelVisible: !!(rect && rect.width > 0 && rect.height > 0),
            horizontalOverflow: (panel?.scrollWidth || 0) > (panel?.clientWidth || 0) + 2,
            scrollable: (panel?.scrollHeight || 0) > (panel?.clientHeight || 0),
            textLength: text.length,
          };
        }, { brokenStrings: BROKEN_STRINGS, markers: POSITIVE_MARKERS });

        results.push({
          viewport: label,
          pass:
            checks.titleVisible &&
            checks.hasMesa &&
            checks.noBroken &&
            checks.markersPresent &&
            checks.noEnglishArticle &&
            checks.panelVisible &&
            !checks.horizontalOverflow &&
            checks.textLength > 200 &&
            pageErrors.filter((e) => e.viewport === label).length === 0,
          checks,
        });
      } catch (err) {
        results.push({ viewport: label, pass: false, error: err.message });
      } finally {
        await context.close();
        await browser.close();
      }
    }
  } finally {
    await new Promise((r) => server.close(r));
  }

  return {
    pass: results.length === 2 && results.every((r) => r.pass),
    results,
    pageErrors,
  };
}

function buildReport(sections, verdict) {
  const lines = [
    "# ES Kurss Artículos visual repair — verification",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Verdict",
    "",
    `**${verdict}**`,
    "",
  ];
  for (const [name, data] of sections) {
    lines.push(`## ${name}`, "", "```json", JSON.stringify(data, null, 2), "```", "");
  }
  return lines.join("\n");
}

async function main() {
  const applyLog = verifyApplyLog();
  const decisionsExact = verifyDecisionsExact();
  const mirror = verifyMirror();
  const syntax = verifySyntax();
  const structure = verifyHtmlStructure();
  const deUnchanged = verifyDeUnchanged();
  const unexpected = verifyUnexpectedChanges();
  const visual = await verifyVisualSmoke();

  const gates = {
    applyLog: applyLog.pass ? "PASS (19/19)" : "FAIL",
    decisionsExact: decisionsExact.pass ? "PASS" : "FAIL",
    mirror: mirror.pass ? "PASS" : "FAIL",
    syntax: syntax.pass ? "PASS" : "FAIL",
    structure: structure.pass ? "PASS" : "FAIL",
    deUnchanged: deUnchanged.pass ? "PASS" : "FAIL",
    unexpectedChanges: unexpected.pass ? "PASS" : "FAIL",
    visual: visual.pass ? "PASS" : "FAIL",
    consoleErrors: visual.pageErrors.length === 0 ? "PASS" : "FAIL",
  };

  const allPass = Object.values(gates).every((g) => String(g).startsWith("PASS"));
  const verdict = allPass
    ? "PASS — ES KURSS ARTICLES VISUAL REPAIR APPLIED AND VERIFIED"
    : "FAIL — ES KURSS ARTICLES VISUAL REPAIR";

  const report = buildReport(
    [
      ["Gates", gates],
      ["Apply log", applyLog],
      ["Decisions exact", decisionsExact],
      ["HTML structure", structure],
      ["Mirror", mirror],
      ["Syntax", syntax],
      ["DE unchanged", deUnchanged],
      ["Unexpected changes", unexpected],
      ["Visual smoke", visual],
    ],
    verdict,
  );

  fs.writeFileSync(REPORT_MD, report, "utf8");
  console.log(`\n=== ${verdict} ===\n`);
  console.log(report);
  if (!allPass) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
