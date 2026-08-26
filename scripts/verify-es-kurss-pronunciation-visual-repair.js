#!/usr/bin/env node
"use strict";
/**
 * Verify ES Kurss pronunciation visual COPY-ONLY repair gates.
 * Usage: node scripts/verify-es-kurss-pronunciation-visual-repair.js
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const vm = require("vm");
const { execSync } = require("child_process");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const DECISIONS = path.join(ROOT, "reports/es-kurss-pronunciation-visual-owner-decisions.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-kurss-pronunciation-visual-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-pronunciation-visual-repair-verification.md");
const PORT = Number(process.env.ES_KURSS_PRON_PORT || 8892);

const BROKEN_STRINGS = [
  "cálida (varm)",
  "tripa (get)",
  "Cabaña (hūt)",
  "calvo (balt)",
  "scharf (bufanda)",
  "scharf (bufanda) - culo",
  "Dedo (dedo)",
  "Cabestro",
  "Sonidos de inmersión",
  "Dip: eu",
  "Diplomática: ei",
];

const GERMAN_HEADWORDS = [
  "warm",
  "gut",
  "Hut",
  "bald",
  "scharf",
  "Finger",
  "Halter",
  "Hase",
  "Knabe",
  "Saal",
  "Saat",
  "See",
  "Beet",
  "Boot",
];

const ALLOWED_CHANGED = new Set([
  "data/es/courseLessons.js",
  "www/data/es/courseLessons.js",
  "languages/es/ui.js",
  "www/languages/es/ui.js",
  "reports/es-kurss-pronunciation-visual-owner-decisions.json",
  "reports/es-kurss-pronunciation-visual-repair-task.md",
  "reports/es-kurss-pronunciation-visual-owner-apply.md",
  "reports/es-kurss-pronunciation-visual-repair-verification.md",
  "reports/temp/es-kurss-pronunciation-visual-owner-apply-log.json",
  "scripts/apply-es-kurss-pronunciation-owner-copy-only.js",
  "scripts/verify-es-kurss-pronunciation-visual-repair.js",
]);

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function loadHtml() {
  const code = read("data/es/courseLessons.js");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.COURSE_LESSON_HTML.kurssPronunciationLesson || "";
}

function loadUiRoot() {
  const code = read("languages/es/ui.js");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.LANGUAGE_UI_STRINGS || {};
}

function getByPath(obj, dotPath) {
  return dotPath.split(".").reduce((acc, part) => acc?.[part], obj);
}

function verifyApplyLog() {
  if (!fs.existsSync(APPLY_LOG)) {
    return { pass: false, reason: "apply log missing" };
  }
  const log = JSON.parse(read("reports/temp/es-kurss-pronunciation-visual-owner-apply-log.json"));
  const pass = log.appliedVerified === log.requested && log.mismatch === 0 && log.failed === 0;
  return { pass, log };
}

function verifyDecisionsExact() {
  const decisions = JSON.parse(read("reports/es-kurss-pronunciation-visual-owner-decisions.json"));
  const html = loadHtml();
  const uiRoot = loadUiRoot();
  const rows = [];
  let pass = true;

  for (const target of decisions.targets) {
    if (target.status !== "LABOT") continue;
    let actual;
    if (target.field === "COURSE_LESSON_HTML.kurssPronunciationLesson") {
      actual = html;
    } else {
      actual = getByPath(uiRoot, target.field);
    }
    const ok = actual === target.new;
    rows.push({ id: target.id, field: target.field, ok });
    if (!ok) pass = false;
  }
  return { pass, rows };
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
  const hasBadClose = html.includes("</sección>");
  const brokenFound = BROKEN_STRINGS.filter((s) => html.includes(s));
  const germanMissing = GERMAN_HEADWORDS.filter((s) => !html.includes(s));
  const pass =
    openSection === closeSection &&
    !hasBadClose &&
    brokenFound.length === 0 &&
    germanMissing.length === 0;
  return {
    pass,
    openSection,
    closeSection,
    hasBadClose,
    brokenFound,
    germanMissing,
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
        if (label === "mobile") {
          await langBtn.first().tap();
        } else {
          await langBtn.first().click({ force: true });
        }
        await page.waitForFunction(
          () => {
            const appRoot = document.getElementById("appRoot");
            return appRoot && !appRoot.hidden;
          },
          null,
          { timeout: label === "mobile" ? 30000 : 15000 },
        );
        await page.waitForFunction(() => !document.body.classList.contains("app-launching"), null, {
          timeout: 15000,
        });
        await page.waitForTimeout(1200);

        const kurssBtn = page.locator("#mainMenuButtons .menu-button-container").nth(6).locator("button");
        await kurssBtn.click();
        await page.waitForSelector("#kurssPanel:not([hidden])", { timeout: 10000 });

        await page.click("#kurssPronunciationBtn");
        await page.waitForTimeout(400);
        await page.click("#kurssVowelsLessonBtn");
        await page.waitForSelector("#kurssPronunciationLesson:not([hidden])", { timeout: 10000 });
        await page.waitForTimeout(500);

        const checks = await page.evaluate((brokenStrings) => {
          const panel = document.getElementById("kurssPronunciationLesson");
          const text = panel?.innerText || "";
          const rect = panel?.getBoundingClientRect();
          const scrollWidth = panel?.scrollWidth || 0;
          const clientWidth = panel?.clientWidth || 0;
          const subtitleBtn = document.getElementById("kurssVowelsLessonBtn");
          const subtitle =
            subtitleBtn?.querySelector(".kurss-sub-btn-subtitle")?.textContent?.trim() ||
            subtitleBtn?.textContent?.trim();
          return {
            hasWarm: text.includes("warm (varm)"),
            hasGut: text.includes("gut (gūt)"),
            noBroken: brokenStrings.every((s) => !text.includes(s)),
            titleVisible: text.includes("Vocales: largas y cortas"),
            subtitle,
            panelVisible: !!(rect && rect.width > 0 && rect.height > 0),
            horizontalOverflow: scrollWidth > clientWidth + 2,
            scrollable: (panel?.scrollHeight || 0) > (panel?.clientHeight || 0),
          };
        }, BROKEN_STRINGS);

        results.push({
          viewport: label,
          pass:
            checks.hasWarm &&
            checks.hasGut &&
            checks.noBroken &&
            checks.titleVisible &&
            (checks.subtitle || "").includes("Vocales: largas y cortas") &&
            checks.panelVisible &&
            !checks.horizontalOverflow,
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
    "# ES Kurss pronunciation visual repair — verification",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    `## Verdict`,
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
  const html = verifyHtmlStructure();
  const deChanges = verifyDeUnchanged();
  const unexpected = verifyUnexpectedChanges();
  const visual = await verifyVisualSmoke();

  const allPass =
    applyLog.pass &&
    decisionsExact.pass &&
    mirror.pass &&
    syntax.pass &&
    html.pass &&
    deChanges.pass &&
    unexpected.pass &&
    visual.pass;

  const verdict = allPass
    ? "PASS — ES KURSS PRONUNCIATION VISUAL REPAIR APPLIED AND VERIFIED"
    : "FAIL — ES KURSS PRONUNCIATION VISUAL REPAIR";

  const sections = [
    ["applyLog", applyLog],
    ["decisionsExact", decisionsExact],
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
