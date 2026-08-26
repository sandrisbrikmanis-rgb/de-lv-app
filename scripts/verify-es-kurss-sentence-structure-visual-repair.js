#!/usr/bin/env node
"use strict";
/**
 * Verify ES Kurss Sentence structure visual COPY-ONLY repair gates.
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const vm = require("vm");
const { execSync } = require("child_process");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const DECISIONS = path.join(ROOT, "reports/es-kurss-sentence-structure-visual-owner-decisions.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-kurss-sentence-structure-visual-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-sentence-structure-visual-repair-verification.md");
const PORT = Number(process.env.ES_KURSS_SENTENCE_STRUCTURE_PORT || 8895);

const FORBIDDEN = [
  "Ich spiele nicht. — Paul no pregunta.",
  "Paul fragt nicht. — No viene.",
  "Sie singen nicht. — ¿Juegas?",
  "Wir arbeiten. — Nosotros contar y dibujar.",
  "course-lesson-section",
  "Ya vienes.",
  "¿Vas a ir?",
];

const ALLOWED_CHANGED = new Set([
  "data/es/courseLessons.js",
  "www/data/es/courseLessons.js",
  "reports/es-kurss-sentence-structure-visual-owner-decisions.json",
  "reports/es-kurss-sentence-structure-visual-repair-task.md",
  "reports/es-kurss-sentence-structure-visual-owner-apply.md",
  "reports/es-kurss-sentence-structure-visual-repair-verification.md",
  "reports/temp/es-kurss-sentence-structure-visual-owner-apply-log.json",
  "scripts/apply-es-kurss-sentence-structure-visual-owner-copy-only.js",
  "scripts/verify-es-kurss-sentence-structure-visual-repair.js",
]);

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function loadHtml() {
  const code = read("data/es/courseLessons.js");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.COURSE_LESSON_HTML.kurssSentenceStructureLesson || "";
}

function resolveNew(target, byId) {
  if (target.new != null) return target.new;
  return byId.get(target.newFrom.match(/^([^.]+)\.new$/)[1]).new;
}

function countSectionExamples(html, heading) {
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `<h4>${escaped}</h4>[\\s\\S]*?<div class="kurss-examples">((?:<div class="kurss-example">[^<]+</div>\\s*)+)`,
  );
  const m = html.match(re);
  if (!m) return 0;
  return (m[1].match(/<div class="kurss-example">/g) || []).length;
}

function verifyApplyLog() {
  if (!fs.existsSync(APPLY_LOG)) return { pass: false, reason: "apply log missing" };
  const log = JSON.parse(read("reports/temp/es-kurss-sentence-structure-visual-owner-apply-log.json"));
  return {
    pass: log.appliedVerified === log.requested && log.mismatch === 0 && log.failed === 0,
    log,
  };
}

function verifyDecisions() {
  const decisions = JSON.parse(read("reports/es-kurss-sentence-structure-visual-owner-decisions.json"));
  const byId = new Map(decisions.targets.map((t) => [t.id, t]));
  const html = loadHtml();
  const rows = [];
  let pass = true;
  for (const target of decisions.targets) {
    if (target.status !== "LABOT") continue;
    const expected = resolveNew(target, byId);
    const ok = html === expected;
    rows.push({ id: target.id, ok });
    if (!ok) pass = false;
  }
  return { pass, rows, coverage: decisions.targets.length };
}

function verifyContent() {
  const html = loadHtml();
  const sectionCount = (html.match(/<section class="kurss-lesson-section">/g) || []).length;
  const firstSectionExamples = countSectionExamples(html, "Oraciones y preguntas de sí o no");
  const wasExamples = countSectionExamples(html, "Preguntas con «was»");
  const nichtExamples = countSectionExamples(html, "Negación con «nicht»");
  const lesson2Examples = countSectionExamples(html, "Oraciones de la lección 2");
  const forbiddenFound = FORBIDDEN.filter((s) => html.includes(s));
  const hasGehtIhr = html.includes("Geht ihr? — ¿Vais?");
  const hasSingtIhr = html.includes("Singt ihr? — ¿Cantáis?");
  const hasFinalPair = html.includes(
    "Sie kommen, sie fragen, sie antworten, sie arbeiten, sie spielen, sie singen, sie gehen.",
  );

  const pass =
    sectionCount === 4 &&
    firstSectionExamples === 8 &&
    wasExamples === 4 &&
    nichtExamples === 4 &&
    lesson2Examples === 19 &&
    forbiddenFound.length === 0 &&
    hasGehtIhr &&
    hasSingtIhr &&
    hasFinalPair &&
    html.includes('class="kurss-examples"') &&
    html.includes('class="kurss-example"');

  return {
    pass,
    sectionCount,
    firstSectionExamples,
    wasExamples,
    nichtExamples,
    lesson2Examples,
    forbiddenFound,
    hasGehtIhr,
    hasSingtIhr,
    hasFinalPair,
  };
}

function verifyMirror() {
  const a = read("data/es/courseLessons.js");
  const b = read("www/data/es/courseLessons.js");
  return { pass: a === b, mismatches: a === b ? [] : ["data/es/courseLessons.js <> www/data/es/courseLessons.js"] };
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
  const html = loadHtml();
  const openSection = (html.match(/<section\b/gi) || []).length;
  const closeSection = (html.match(/<\/section>/gi) || []).length;
  const pass = openSection === closeSection && html.includes("<h3>Estructura de la oración</h3>");
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
        await page.click("#kurssSentenceStructureBtn");
        await page.waitForSelector("#kurssSentenceStructureLesson:not([hidden])", { timeout: 10000 });

        const checks = await page.evaluate(() => {
          const panel = document.getElementById("kurssSentenceStructureLesson");
          const text = panel?.innerText || "";
          const rect = panel?.getBoundingClientRect();
          return {
            hasTitle: text.includes("Estructura de la oración"),
            hasVais: text.includes("¿Vais?"),
            hasFinal: text.includes("se van"),
            panelVisible: !!(rect && rect.width > 0 && rect.height > 0),
          };
        });

        results.push({
          viewport: label,
          pass: checks.hasTitle && checks.hasVais && checks.hasFinal && checks.panelVisible,
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
    "# ES Kurss Sentence structure visual repair — verification",
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
    ? "PASS — ES KURSS SENTENCE STRUCTURE VISUAL REPAIR APPLIED AND VERIFIED"
    : "FAIL — ES KURSS SENTENCE STRUCTURE REPAIR";

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
