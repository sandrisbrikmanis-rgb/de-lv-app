#!/usr/bin/env node
"use strict";
/**
 * ES Kurss Lessons 1–21 — deterministic final OWNER closure (READ-ONLY, no Luna/API).
 * Usage: node scripts/verify-es-kurss-lessons-01-21-final-closure.js [--json] [--skip-pr-check]
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const { execSync } = require("child_process");
const { chromium } = require("playwright");
const { ROOT } = require("./lib/audit-common");
const {
  LESSON_COUNT,
  COURSE_LESSONS_PRIMARY,
  COURSE_LESSONS_WWW,
  TRAINING_PRIMARY,
  UI_PRIMARY,
  UI_WWW,
  loadCourses,
  loadUi,
  loadTraining,
  loadAllDecisions,
  classifyApplyKind,
  readActual,
  verifyNew,
  extractDeSnapshots,
  compareDeSnapshots,
  verifyHtmlStructure,
  normalizeCompare,
} = require("./lib/es-kurss-lessons-owner-apply-lib");

const REPORT_MD = path.join(ROOT, "reports/es-kurss-lessons-01-21-final-closure.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/es-kurss-lessons-01-21-final-closure.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-kurss-lessons-owner-apply-log.json");
const BRANCH = "cursor/es-kurss-lessons-01-21-owner-extract-3141";
const PR = 673;
const PORT = Number(process.env.ES_KURSS_LESSONS_CLOSURE_PORT || 8897);
const VERDICT_PASS = "PASS — ES KURSS LESSONS 01–21 OWNER ACCEPTED / CLOSED ON MAIN";

const EXPECTED_PROD = new Set([
  "data/es/courseLessons.js",
  "www/data/es/courseLessons.js",
  "languages/es/ui.js",
  "www/languages/es/ui.js",
]);

const SKIP_PR = process.argv.includes("--skip-pr-check");
const JSON_OUT = process.argv.includes("--json");

function git(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
  } catch {
    return "";
  }
}

function isSupersededNelabot(target, labotTargets) {
  return labotTargets.some((labot) => {
    if (labot.file !== target.file || labot.field !== target.field) return false;
    const current = String(target.current || "");
    const parentCurrent = String(labot.current || "");
    const parentNew = String(labot.new || "");
    if (!current || parentCurrent.length <= current.length) return false;
    const parentLines = parentCurrent.split("\n").map(normalizeCompare);
    if (!parentLines.includes(normalizeCompare(current))) return false;
    if (normalizeCompare(parentNew) === normalizeCompare(parentCurrent)) return false;
    return !normalizeCompare(parentNew).includes(normalizeCompare(current));
  });
}

function verifyRetention() {
  const initial = loadCourses(COURSE_LESSONS_PRIMARY);
  const data = initial.data;
  const html = initial.html;
  const ui = loadUi(UI_PRIMARY);
  const training = loadTraining(TRAINING_PRIMARY);
  const all = loadAllDecisions();
  const labot = all.filter((t) => t.status === "LABOT");
  const nelabot = all.filter((t) => t.status === "NELABOT");

  const labotResult = { expected: labot.length, matched: 0, failures: [] };
  for (const target of labot) {
    if (verifyNew(target, data, html, ui, training)) labotResult.matched += 1;
    else {
      labotResult.failures.push({
        id: target.id,
        field: target.field,
        new: target.new,
      });
    }
  }

  const nelabotResult = { expected: nelabot.length, matched: 0, failures: [] };
  for (const target of nelabot) {
    const actual = readActual(target, data, html, ui, training);
    if (normalizeCompare(actual) === normalizeCompare(target.current)) {
      nelabotResult.matched += 1;
      continue;
    }
    if (isSupersededNelabot(target, labot)) {
      nelabotResult.matched += 1;
      continue;
    }
    nelabotResult.failures.push({
      id: target.id,
      field: target.field,
      expected: target.current,
      actual: actual === undefined ? "(undefined)" : actual,
    });
  }

  return {
    pass: labotResult.matched === 421 && nelabotResult.matched === 2530,
    labot: labotResult,
    nelabot: nelabotResult,
  };
}

function verifyLessonsStructure() {
  const { data, html } = loadCourses(COURSE_LESSONS_PRIMARY);
  const rows = [];
  let ok = 0;
  for (let n = 1; n <= LESSON_COUNT; n++) {
    const key = `kurssLesson${n}`;
    const lesson = data[key];
    const issues = [];
    if (!lesson) issues.push("missing COURSE_LESSON_DATA entry");
    if (n <= 7) {
      const legacy = html[key] || lesson?.legacyHtml;
      if (!legacy || typeof legacy !== "string" || legacy.length < 100) issues.push("legacyHtml missing/short");
    } else if (!Array.isArray(lesson?.sections) || lesson.sections.length === 0) {
      issues.push("sections missing");
    }
    const pass = issues.length === 0;
    if (pass) ok += 1;
    rows.push({ lesson: n, key, pass, issues });
  }
  return { pass: ok === LESSON_COUNT, found: ok, expected: LESSON_COUNT, rows };
}

function verifyMirrorSyntax() {
  const errors = [];
  const files = [
    COURSE_LESSONS_PRIMARY,
    COURSE_LESSONS_WWW,
    UI_PRIMARY,
    UI_WWW,
    TRAINING_PRIMARY,
    path.join(ROOT, "www/data/es/courseTrainingCards.js"),
  ];
  for (const f of files) {
    try {
      execSync(`node --check "${f}"`, { encoding: "utf8" });
    } catch (e) {
      errors.push(`${path.relative(ROOT, f)}: ${e.message}`);
    }
  }
  const mirrorPairs = [
    [COURSE_LESSONS_PRIMARY, COURSE_LESSONS_WWW],
    [UI_PRIMARY, UI_WWW],
    [TRAINING_PRIMARY, path.join(ROOT, "www/data/es/courseTrainingCards.js")],
  ];
  const mirrorIssues = [];
  for (const [a, b] of mirrorPairs) {
    if (fs.readFileSync(a, "utf8") !== fs.readFileSync(b, "utf8")) {
      mirrorIssues.push(`${path.relative(ROOT, a)} <> ${path.relative(ROOT, b)}`);
    }
  }
  const { html } = loadCourses(COURSE_LESSONS_PRIMARY);
  const htmlCheck = verifyHtmlStructure(html);
  return {
    pass: errors.length === 0 && mirrorIssues.length === 0 && htmlCheck.pass,
    syntaxErrors: errors,
    mirrorIssues,
    htmlStructure: htmlCheck,
  };
}

function loadMainCourses() {
  try {
    const code = execSync("git show origin/main:data/es/courseLessons.js", { cwd: ROOT, encoding: "utf8" });
    const vm = require("vm");
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(code, ctx);
    return {
      data: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_DATA || {})),
      html: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_HTML || {})),
    };
  } catch {
    return null;
  }
}

function verifyDeUnchanged() {
  const current = loadCourses(COURSE_LESSONS_PRIMARY);
  const main = loadMainCourses();
  if (!main) return { pass: false, reason: "could not load origin/main courseLessons.js" };
  const before = extractDeSnapshots(main.data, main.html);
  const after = extractDeSnapshots(current.data, current.html);
  const changes = compareDeSnapshots(before, after);
  const deGitDiff = git("git diff origin/main -- 'data/de/*' 'languages/de/*' 'www/data/de/*' 'www/languages/de/*'");
  return {
    pass: changes.length === 0 && deGitDiff.length === 0,
    deSnapshotChanges: changes.length,
    deGitDiffBytes: deGitDiff.length,
    changes: changes.slice(0, 10),
  };
}

function verifyUnexpectedProduction() {
  const changed = git("git diff --name-only origin/main...HEAD")
    .split("\n")
    .filter(Boolean);
  const changedProd = changed.filter(
    (f) =>
      f.startsWith("data/") ||
      f.startsWith("www/data/") ||
      f.startsWith("languages/") ||
      f.startsWith("www/languages/"),
  );
  const unexpected = changedProd.filter((f) => !EXPECTED_PROD.has(f));
  return {
    pass: unexpected.length === 0,
    changedProduction: changedProd,
    unexpectedProduction: unexpected,
  };
}

function verifyApplyLog() {
  if (!fs.existsSync(APPLY_LOG)) return { pass: false, reason: "apply log missing" };
  const log = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
  const pass =
    log.appliedVerified === 421 &&
    log.nelabotUnchanged === 2530 &&
    log.currentMismatch === 0 &&
    log.failed === 0 &&
    log.deChanges === 0 &&
    log.mirror === "PASS" &&
    log.syntax === "PASS" &&
    log.htmlStructure === "PASS" &&
    log.pass === true;
  return { pass, log };
}

function verifyPrReadiness() {
  if (SKIP_PR) return { pass: true, skipped: true };
  try {
    const pr = JSON.parse(
      execSync(`gh pr view ${PR} --json isDraft,mergeable,mergeStateStatus,state`, {
        cwd: ROOT,
        encoding: "utf8",
      }),
    );
    const failedChecks = JSON.parse(
      execSync(`gh pr checks ${PR} --json name,state`, { cwd: ROOT, encoding: "utf8" }),
    ).filter((c) => c.state === "FAILURE" || c.state === "ERROR");
    return {
      pass: pr.state === "OPEN" && pr.mergeable === "MERGEABLE" && pr.mergeStateStatus === "CLEAN" && failedChecks.length === 0,
      pr,
      failedChecks,
    };
  } catch (e) {
    return { pass: false, error: e.message };
  }
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

async function ensureLessonsMenu(page) {
  for (let attempt = 0; attempt < 5; attempt++) {
    const menuVisible = await page.locator("#kurssLessonsMenu:not([hidden])").isVisible().catch(() => false);
    if (menuVisible) return;
    const back = page.locator("#kurssBackBtn");
    if (await back.isVisible().catch(() => false)) {
      await back.click({ force: true });
      await page.waitForTimeout(300);
      continue;
    }
    const lessonsBtn = page.locator("#kurssLessonsBtn");
    if (await lessonsBtn.isVisible().catch(() => false)) {
      await lessonsBtn.click({ force: true });
      await page.waitForTimeout(300);
    }
  }
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
      page.on("pageerror", (e) => pageErrors.push({ viewport: label, message: e.message }));
      page.on("console", (m) => {
        if (m.type() === "error") pageErrors.push({ viewport: label, message: m.text() });
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
        }, null, { timeout: 30000 });
        await page.waitForTimeout(1200);

        const kurssBtn = page.locator("#mainMenuButtons .menu-button-container").nth(6).locator("button");
        await kurssBtn.click();
        await page.waitForSelector("#kurssPanel:not([hidden])", { timeout: 10000 });
        await page.click("#kurssLessonsBtn");
        await page.waitForSelector("#kurssLessonsMenu:not([hidden])", { timeout: 10000 });

        const menuCount = await page.locator("#kurssLessonsMenu .kurss-item").count();
        results.push({ viewport: label, check: "lessonsMenuButtons", pass: menuCount >= 21, menuCount });

        for (let n = 1; n <= LESSON_COUNT; n++) {
          await ensureLessonsMenu(page);
          const btnSel = `#kurssLesson${n}Btn`;
          const panelSel = `#kurssLesson${n}`;
          await page.locator(btnSel).click({ force: true });
          await page.waitForSelector(`${panelSel}:not([hidden])`, { timeout: 10000 });
          await page.waitForTimeout(label === "mobile" ? 250 : 150);
          const check = await page.evaluate((panelId) => {
            const panel = document.getElementById(panelId);
            const text = panel?.innerText || "";
            const rect = panel?.getBoundingClientRect();
            return {
              visible: !!(panel && !panel.hidden && rect && rect.width > 0 && rect.height > 0),
              textLength: text.length,
              horizontalOverflow: (panel?.scrollWidth || 0) > (panel?.clientWidth || 0) + 2,
            };
          }, `kurssLesson${n}`);
          results.push({
            viewport: label,
            lesson: n,
            pass: check.visible && check.textLength > 50 && !check.horizontalOverflow,
            ...check,
          });
        }
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

  const lessonResults = results.filter((r) => r.lesson);
  const pass =
    lessonResults.length === LESSON_COUNT * 2 &&
    lessonResults.every((r) => r.pass) &&
    results.filter((r) => r.check === "lessonsMenuButtons").every((r) => r.pass) &&
    pageErrors.length === 0;

  return { pass, results, pageErrors, consoleErrors: pageErrors.length };
}

function buildReportMd(report) {
  const lines = [
    "# ES Kurss Lessons 1–21 — final closure",
    "",
    `**Generated:** ${report.generatedAt}`,
    `**Branch:** \`${report.branch}\``,
    `**Commit:** \`${report.commit}\``,
    report.pr ? `**PR:** #${report.pr}` : "",
    "",
    "## Verdict",
    "",
    `**${report.verdict}**`,
    "",
    "## Gates",
    "",
    "| Gate | Status |",
    "|------|--------|",
    `| LABOT retention | **${report.gates.labotRetention}** |`,
    `| NELABOT retention | **${report.gates.nelabotRetention}** |`,
    `| Lessons 21/21 | **${report.gates.lessons}** |`,
    `| Mirror | **${report.gates.mirror}** |`,
    `| JS syntax | **${report.gates.syntax}** |`,
    `| HTML structure | **${report.gates.htmlStructure}** |`,
    `| Visual smoke (desktop+mobile) | **${report.gates.visual}** |`,
    `| Console errors | **${report.gates.consoleErrors}** |`,
    `| DE changes | **${report.gates.deChanges}** |`,
    `| Unexpected production changes | **${report.gates.unexpectedProduction}** |`,
    `| Apply log | **${report.gates.applyLog}** |`,
    "",
  ];
  if (report.retention.labot.failures.length) {
    lines.push("## LABOT failures (sample)", "");
    for (const f of report.retention.labot.failures.slice(0, 10)) {
      lines.push(`- ${f.id}: ${f.field}`);
    }
    lines.push("");
  }
  if (report.retention.nelabot.failures.length) {
    lines.push("## NELABOT failures (sample)", "");
    for (const f of report.retention.nelabot.failures.slice(0, 10)) {
      lines.push(`- ${f.id}: expected retained`);
    }
    lines.push("");
  }
  if (report.visual.pageErrors?.length) {
    lines.push("## Console/page errors", "");
    for (const e of report.visual.pageErrors.slice(0, 10)) {
      lines.push(`- [${e.viewport}] ${e.message}`);
    }
    lines.push("");
  }
  return lines.filter(Boolean).join("\n");
}

async function main() {
  const retention = verifyRetention();
  const lessons = verifyLessonsStructure();
  const mirrorSyntax = verifyMirrorSyntax();
  const deUnchanged = verifyDeUnchanged();
  const unexpectedProduction = verifyUnexpectedProduction();
  const applyLog = verifyApplyLog();
  const prReadiness = verifyPrReadiness();
  const visual = await verifyVisualSmoke();

  const gates = {
    labotRetention: retention.labot.matched === 421 ? "PASS (421/421)" : `FAIL (${retention.labot.matched}/421)`,
    nelabotRetention:
      retention.nelabot.matched === 2530 ? "PASS (2530/2530)" : `FAIL (${retention.nelabot.matched}/2530)`,
    lessons: lessons.pass ? "PASS (21/21)" : `FAIL (${lessons.found}/21)`,
    mirror: mirrorSyntax.mirrorIssues.length === 0 ? "PASS" : "FAIL",
    syntax: mirrorSyntax.syntaxErrors.length === 0 ? "PASS" : "FAIL",
    htmlStructure: mirrorSyntax.htmlStructure.pass ? "PASS" : "FAIL",
    visual: visual.pass ? "PASS" : "FAIL",
    consoleErrors: visual.consoleErrors === 0 ? "PASS (0)" : `FAIL (${visual.consoleErrors})`,
    deChanges: deUnchanged.pass ? "PASS (0)" : "FAIL",
    unexpectedProduction: unexpectedProduction.pass ? "PASS (0)" : "FAIL",
    applyLog: applyLog.pass ? "PASS" : "FAIL",
  };

  const allPass = Object.values(gates).every((g) => String(g).startsWith("PASS"));
  const onMain = git("git branch --show-current") === "main";
  const verdict = allPass
    ? onMain
      ? VERDICT_PASS
      : "PASS — ES KURSS LESSONS 01–21 OWNER ACCEPTED / READY TO MERGE"
    : "FAIL — closure gates not met";

  const report = {
    generatedAt: new Date().toISOString(),
    branch: git("git branch --show-current") || BRANCH,
    commit: git("git rev-parse --short HEAD"),
    pr: onMain ? null : PR,
    verdict,
    gates,
    retention,
    lessons,
    mirrorSyntax: {
      pass: mirrorSyntax.pass,
      mirrorIssues: mirrorSyntax.mirrorIssues,
      syntaxErrors: mirrorSyntax.syntaxErrors,
      htmlStructure: mirrorSyntax.htmlStructure,
    },
    deUnchanged,
    unexpectedProduction,
    applyLog,
    prReadiness,
    visual,
    allPass,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2) + "\n", "utf8");
  fs.writeFileSync(REPORT_MD, buildReportMd(report), "utf8");

  if (JSON_OUT) {
    console.log(JSON.stringify(report, null, 2));
  } else {
    console.log(`\n=== ${verdict} ===\n`);
    console.log(buildReportMd(report));
  }

  if (!allPass) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
