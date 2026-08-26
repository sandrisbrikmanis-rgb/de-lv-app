#!/usr/bin/env node
"use strict";
/**
 * Verify ES Kurss Pronombres visual COPY-ONLY repair gates.
 * Usage: node scripts/verify-es-kurss-pronouns-visual-repair.js
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const vm = require("vm");
const { execSync } = require("child_process");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const DECISIONS = path.join(ROOT, "reports/es-kurss-pronouns-visual-owner-decisions.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-kurss-pronouns-visual-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-pronouns-visual-repair-verification.md");
const PORT = Number(process.env.ES_KURSS_PRONOUNS_PORT || 8893);

const BROKEN_STRINGS = ["atan", "yo - eso", "él - nosotros"];
const EN_REMNANTS = ["ich - I", "ihr - tú", "mich - yo", "dich - tú", "mir - yo", "dir - tú"];
const UNLOCALIZED = [
  "Nominativ, Akkusativ",
  "Akkusativo y Dativo",
  "Nominative",
  "Accusative",
  "Akkusativ - objeto",
];
const FORBIDDEN_DE_TYPO = ["helpe"];

const ALLOWED_CHANGED = require("./lib/es-kurss-four-sections-integration-allowed");

function read(rel) {
  return fs.readFileSync(path.join(ROOT, rel), "utf8");
}

function loadHtml() {
  const code = read("data/es/courseLessons.js");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.COURSE_LESSON_HTML.kurssPronounsLesson || "";
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
  const log = JSON.parse(read("reports/temp/es-kurss-pronouns-visual-owner-apply-log.json"));
  const pass =
    log.appliedVerified === log.requested &&
    log.mismatch === 0 &&
    log.failed === 0 &&
    log.nelabotRetained === 1;
  return { pass, log };
}

function verifyDecisions() {
  const decisions = JSON.parse(read("reports/es-kurss-pronouns-visual-owner-decisions.json"));
  const html = loadHtml();
  const uiRoot = loadUiRoot();
  const rows = [];
  let pass = true;

  for (const target of decisions.targets) {
    if (target.status === "NELABOT") {
      const ok = html.includes(target.current);
      rows.push({ id: target.id, status: "NELABOT", ok });
      if (!ok) pass = false;
      continue;
    }
    if (target.status !== "LABOT") continue;

    let ok;
    if (target.kind === "ui") {
      ok = getByPath(uiRoot, target.field) === target.new;
    } else {
      ok = html.includes(target.new);
    }
    rows.push({ id: target.id, status: "LABOT", ok });
    if (!ok) pass = false;
  }
  return { pass, rows, coverage: decisions.targets.length };
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

function verifyContentGates() {
  const html = loadHtml();
  const ui = getByPath(loadUiRoot(), "kurss.pronounsSubtitle") || "";
  const combined = html + ui;

  const brokenFound = BROKEN_STRINGS.filter((s) => combined.includes(s));
  const enFound = EN_REMNANTS.filter((s) => combined.includes(s));
  const unlocalizedFound = UNLOCALIZED.filter((s) => combined.includes(s));
  const helpeInHtml = html.includes("helpe");

  const hasSie = html.includes("Sie - usted/ustedes (cortesía)") && html.includes("Sie - lo/la/los/las (cortesía)");
  const hasLowerSie = html.includes("sie - ella") || html.includes("sie - la (femenino)") || html.includes("sie - los/las");

  const pass =
    brokenFound.length === 0 &&
    enFound.length === 0 &&
    unlocalizedFound.length === 0 &&
    !helpeInHtml &&
    hasSie &&
    hasLowerSie;

  return {
    pass,
    brokenFound,
    enFound,
    unlocalizedFound,
    helpeInHtml,
    capitalization: { hasSie, hasLowerSie },
  };
}

function verifyHtmlStructure() {
  const html = loadHtml();
  const openSection = (html.match(/<section\b/gi) || []).length;
  const closeSection = (html.match(/<\/section>/gi) || []).length;
  const hasBadClose = html.includes("</sección>");
  const hasTitle = html.includes("<h3>Pronombres</h3>");
  const pass = openSection === closeSection && !hasBadClose && hasTitle;
  return { pass, openSection, closeSection, hasBadClose, hasTitle };
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

        await page.click("#kurssPronounsBtn");
        await page.waitForTimeout(400);
        await page.waitForSelector("#kurssPronounsLesson:not([hidden])", { timeout: 10000 });
        await page.waitForTimeout(500);

        const checks = await page.evaluate((brokenStrings) => {
          const panel = document.getElementById("kurssPronounsLesson");
          const text = panel?.innerText || "";
          const rect = panel?.getBoundingClientRect();
          const scrollWidth = panel?.scrollWidth || 0;
          const clientWidth = panel?.clientWidth || 0;
          const intro = panel?.querySelector(".artikuli-intro-info div")?.textContent?.trim() || "";
          return {
            hasTitle: text.includes("Pronombres"),
            hasNominativo: text.includes("Nominativo: ¿quién?"),
            noBroken: brokenStrings.every((s) => !text.includes(s)),
            intro,
            panelVisible: !!(rect && rect.width > 0 && rect.height > 0),
            horizontalOverflow: scrollWidth > clientWidth + 2,
          };
        }, BROKEN_STRINGS);

        results.push({
          viewport: label,
          pass:
            checks.hasTitle &&
            checks.hasNominativo &&
            checks.noBroken &&
            (checks.intro || "").includes("Nominativo, acusativo y dativo") &&
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
    pass: results.length === 2 && results.every((r) => r.pass) && pageErrors.length === 0,
    results,
    pageErrors,
  };
}

function buildReport(sections, verdict) {
  const lines = [
    "# ES Kurss Pronombres visual repair — verification",
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
  const mirror = verifyMirror();
  const syntax = verifySyntax();
  const content = verifyContentGates();
  const html = verifyHtmlStructure();
  const deChanges = verifyDeUnchanged();
  const unexpected = verifyUnexpectedChanges();
  const visual = await verifyVisualSmoke();

  const allPass =
    applyLog.pass &&
    decisions.pass &&
    mirror.pass &&
    syntax.pass &&
    content.pass &&
    html.pass &&
    deChanges.pass &&
    unexpected.pass &&
    visual.pass;

  const verdict = allPass
    ? "PASS — ES KURSS PRONOUNS VISUAL REPAIR APPLIED AND VERIFIED"
    : "FAIL — ES KURSS PRONOUNS VISUAL REPAIR";

  const sections = [
    ["applyLog", applyLog],
    ["decisions", decisions],
    ["mirror", mirror],
    ["syntax", syntax],
    ["content", content],
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
