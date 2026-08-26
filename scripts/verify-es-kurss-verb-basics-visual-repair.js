#!/usr/bin/env node
"use strict";
/**
 * Verify ES Kurss Verb basics visual COPY-ONLY repair gates.
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const vm = require("vm");
const { execSync } = require("child_process");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const DECISIONS = path.join(ROOT, "reports/es-kurss-verb-basics-visual-owner-decisions.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-kurss-verb-basics-visual-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-verb-basics-visual-repair-verification.md");
const PORT = Number(process.env.ES_KURSS_VERB_BASICS_PORT || 8894);

const VERBS = [
  "kommen",
  "gehen",
  "stehen",
  "singen",
  "spielen",
  "arbeiten",
  "fragen",
  "antworten",
  "rechnen",
  "zeichnen",
  "tun",
];

const FORBIDDEN = [
  "singen - to cantar",
  "ich kommt",
  "sie kommen — ellos / ella en el juego",
  "ich gehe — yo trabajo",
  "ich stehe — ellos",
  "du singst — tú calcula",
  "er singt — ellos / ella factura",
  "<h4>allí</h4>",
  "course-lesson-section",
  "course-example",
  "curso-lección",
];

const ALLOWED_CHANGED = require("./lib/es-kurss-four-sections-integration-allowed");

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function loadHtml() {
  const code = read("data/es/courseLessons.js");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.COURSE_LESSON_HTML.kurssVerbBasicsLesson || "";
}

function loadUiRoot() {
  const code = read("languages/es/ui.js");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.LANGUAGE_UI_STRINGS || {};
}

function mapUiField(field) {
  if (field.startsWith("COURSE_UI.sections.")) {
    return `kurss.${field.slice("COURSE_UI.sections.".length)}`;
  }
  return field;
}

function getByPath(obj, dotPath) {
  return dotPath.split(".").reduce((acc, part) => acc?.[part], obj);
}

function resolveNew(target, byId) {
  if (target.new != null) return target.new;
  const ref = target.newFrom?.match(/^([^.]+)\.new$/);
  return byId.get(ref[1]).new;
}

function verifyApplyLog() {
  if (!fs.existsSync(APPLY_LOG)) return { pass: false, reason: "apply log missing" };
  const log = JSON.parse(read("reports/temp/es-kurss-verb-basics-visual-owner-apply-log.json"));
  return {
    pass: log.appliedVerified === log.requested && log.mismatch === 0 && log.failed === 0,
    log,
  };
}

function verifyDecisions() {
  const decisions = JSON.parse(read("reports/es-kurss-verb-basics-visual-owner-decisions.json"));
  const byId = new Map(decisions.targets.map((t) => [t.id, t]));
  const html = loadHtml();
  const uiRoot = loadUiRoot();
  const rows = [];
  let pass = true;

  for (const target of decisions.targets) {
    if (target.status !== "LABOT") continue;
    const expected = resolveNew(target, byId);
    let ok;
    if (target.field.startsWith("COURSE_LESSON_HTML.")) {
      ok = html === expected;
    } else {
      ok = getByPath(uiRoot, mapUiField(target.field)) === expected;
    }
    rows.push({ id: target.id, ok });
    if (!ok) pass = false;
  }
  return { pass, rows, coverage: decisions.targets.length };
}

function verifyContent() {
  const html = loadHtml();
  const totalExamples = (html.match(/<div class="kurss-example">/g) || []).length;
  const sectionCount = (html.match(/<section class="kurss-lesson-section">/g) || []).length;
  const verbsPresent = VERBS.filter((v) => html.includes(v));
  const forbiddenFound = FORBIDDEN.filter((s) => html.includes(s));
  const ihrTu = (html.match(/ihr [^<]*— tú/g) || []).length;
  const hasExamplesWrapper = html.includes('class="kurss-examples"');
  const hasExampleItems = html.includes('class="kurss-example"');

  let conjugationRows = 0;
  const perVerb = {};
  for (const verb of VERBS) {
    const re = new RegExp(
      `<h4>${verb}[^<]*</h4><div class="kurss-examples">((?:<div class="kurss-example">[^<]+</div>){7})`,
    );
    const m = html.match(re);
    perVerb[verb] = m ? 7 : 0;
    conjugationRows += perVerb[verb];
  }

  const pass =
    verbsPresent.length === VERBS.length &&
    conjugationRows === 77 &&
    sectionCount === 13 &&
    forbiddenFound.length === 0 &&
    ihrTu === 0 &&
    hasExamplesWrapper &&
    hasExampleItems;

  return {
    pass,
    verbsPresent: verbsPresent.length,
    totalExamples,
    conjugationRows,
    perVerb,
    sectionCount,
    forbiddenFound,
    ihrTu,
    hasExamplesWrapper,
    hasExampleItems,
  };
}

function verifyMirror() {
  const pairs = [
    ["data/es/courseLessons.js", "www/data/es/courseLessons.js"],
    ["languages/es/ui.js", "www/languages/es/ui.js"],
  ];
  const mismatches = pairs.filter(([a, b]) => read(a) !== read(b)).map(([a, b]) => `${a} <> ${b}`);
  return { pass: mismatches.length === 0, mismatches };
}

function verifySyntax() {
  const files = [
    "languages/es/ui.js",
    "data/es/courseLessons.js",
    "www/languages/es/ui.js",
    "www/data/es/courseLessons.js",
  ];
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
  const html = loadHtml();
  const openSection = (html.match(/<section\b/gi) || []).length;
  const closeSection = (html.match(/<\/section>/gi) || []).length;
  const pass = openSection === closeSection && html.includes("<h3>Conceptos básicos de los verbos</h3>");
  return { pass, openSection, closeSection };
}

function verifyDeUnchanged() {
  const diff = execSync("git diff HEAD -- 'data/de/*' 'languages/de/*' 'www/data/de/*' 'www/languages/de/*'", {
    cwd: ROOT,
    encoding: "utf8",
  });
  return { pass: diff.trim().length === 0, diff: diff.trim() };
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
  const viewportPlans = [
    ["desktop", { viewport: { width: 1280, height: 800 } }],
    ["mobile", { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true }],
  ];

  try {
    for (const [label, contextOptions] of viewportPlans) {
      const browser = await chromium.launch({ headless: true });
      const context = await browser.newContext(contextOptions);
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
        await page.waitForFunction(() => {
          const appRoot = document.getElementById("appRoot");
          return appRoot && !appRoot.hidden;
        }, null, { timeout: label === "mobile" ? 30000 : 15000 });
        await page.waitForTimeout(1200);

        await page.locator("#mainMenuButtons .menu-button-container").nth(6).locator("button").click();
        await page.waitForSelector("#kurssPanel:not([hidden])", { timeout: 10000 });
        await page.click("#kurssVerbBasicsBtn");
        await page.waitForSelector("#kurssVerbBasicsLesson:not([hidden])", { timeout: 10000 });

        const checks = await page.evaluate(() => {
          const panel = document.getElementById("kurssVerbBasicsLesson");
          const text = panel?.innerText || "";
          const rect = panel?.getBoundingClientRect();
          return {
            hasTitle: text.includes("Conceptos básicos de los verbos"),
            hasKommen: text.includes("ich komme — yo vengo"),
            noBroken: !text.includes("to cantar") && !text.includes("tú vienes") || text.includes("vosotros"),
            panelVisible: !!(rect && rect.width > 0 && rect.height > 0),
          };
        });

        results.push({
          viewport: label,
          pass: checks.hasTitle && checks.hasKommen && checks.panelVisible,
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
    pass: results.length === 2 && results.every((r) => r.pass) && pageErrors.length === 0,
    results,
    pageErrors,
  };
}

function buildReport(sections, verdict) {
  const lines = [
    "# ES Kurss Verb basics visual repair — verification",
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
  const decisions = verifyDecisions();
  const content = verifyContent();
  const mirror = verifyMirror();
  const syntax = verifySyntax();
  const html = verifyHtmlStructure();
  const deChanges = verifyDeUnchanged();
  const unexpected = verifyUnexpectedChanges();
  const visual = await verifyVisualSmoke();

  const allPass =
    applyLog.pass &&
    decisions.pass &&
    content.pass &&
    mirror.pass &&
    syntax.pass &&
    html.pass &&
    deChanges.pass &&
    unexpected.pass &&
    visual.pass;

  const verdict = allPass
    ? "PASS — ES KURSS VERB BASICS VISUAL REPAIR APPLIED AND VERIFIED"
    : "FAIL — ES KURSS VERB BASICS VISUAL REPAIR";

  const sections = [
    ["applyLog", applyLog],
    ["decisions", decisions],
    ["content", content],
    ["mirror", mirror],
    ["syntax", syntax],
    ["html", html],
    ["deChanges", deChanges],
    ["unexpected", unexpected],
    ["visual", visual],
  ];

  fs.writeFileSync(REPORT_MD, buildReport(sections, verdict), "utf8");
  console.log(JSON.stringify({ verdict, allPass, sections: Object.fromEntries(sections) }, null, 2));
  if (!allPass) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
