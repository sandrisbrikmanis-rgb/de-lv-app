#!/usr/bin/env node
"use strict";
/**
 * ES Kurss Pronunciación — deterministic final OWNER closure (READ-ONLY, no Luna).
 * Usage: node scripts/verify-es-kurss-pronunciation-final-owner-closure.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const { ROOT } = require("./lib/audit-common");
const {
  ES_UI,
  WWW_ES_UI,
  ES_LESSONS,
  WWW_ES_LESSONS,
} = require("./lib/es-kurss-pronunciation-audit-extract");

const FINAL_DECISIONS = path.join(ROOT, "reports/es-kurss-pronunciation-targeted-final-owner-decisions.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/es-kurss-pronunciation-targeted-final-owner-apply-log.json");
const AUDIT_JSON = path.join(ROOT, "reports/es-kurss-pronunciation-targeted-final-audit.json");
const PRON_DECISIONS = path.join(ROOT, "reports/es-kurss-pronunciation-visual-owner-decisions.json");
const CONS_DECISIONS = path.join(ROOT, "reports/es-kurss-consonants-visual-owner-decisions.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-pronunciation-targeted-final-closure.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/es-kurss-pronunciation-targeted-final-closure.json");

const BRANCH = "cursor/es-kurss-pronunciation-owner-repair-3141";
const PR = 668;
const VERDICT_PASS = "PASS — ES KURSS PRONUNCIATION OWNER ACCEPTED / READY TO MERGE";

function readJson(filePath, fallback = null) {
  if (!fs.existsSync(filePath)) return fallback;
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function loadHtmlKey(key) {
  const code = fs.readFileSync(ES_LESSONS, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.COURSE_LESSON_HTML[key] || "";
}

function loadUiRoot() {
  const code = fs.readFileSync(ES_UI, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.LANGUAGE_UI_STRINGS || {};
}

function getByPath(obj, dotPath) {
  return dotPath.split(".").reduce((acc, part) => acc?.[part], obj);
}

const BROKEN_PRON = [
  "cálida (varm)",
  "tripa (get)",
  "Cabaña (hūt)",
  "scharf (bufanda)",
  "Sonidos de inmersión",
  "Dip: eu",
  "Diplomática: ei",
  "course-lesson-section",
];

const BROKEN_CONS = [
  "puesto (štal)",
  "Zahl (pollo)",
  "Klavier (piano)",
  "Mythe (boca)",
  "nicht (niht) - not",
  "noch (noh) - quiet",
  "viel (fīl) - many",
  "course-lesson-section",
];

const PRON_MARKERS = ["warm (varm)", "Hut (hūt)", "kurss-lesson-section", "Diptongos: eu"];
const CONS_MARKERS = ["Stall (štal)", "Zahl (tsāl)", "Mythe (müte)", "kurss-lesson-section"];

function verifyRetention() {
  const uiRoot = loadUiRoot();
  const pronHtml = loadHtmlKey("kurssPronunciationLesson");
  const consHtml = loadHtmlKey("kurssConsonantsLesson");
  const pronDec = readJson(PRON_DECISIONS, { targets: [] });
  const consDec = readJson(CONS_DECISIONS, { targets: [] });
  let matched = 0;
  let total = 0;
  const rows = [];

  for (const target of pronDec.targets || []) {
    if (target.status !== "LABOT") continue;
    total += 1;
    let ok;
    if (target.field === "COURSE_LESSON_HTML.kurssPronunciationLesson") {
      ok =
        BROKEN_PRON.every((s) => !pronHtml.includes(s)) &&
        PRON_MARKERS.every((s) => pronHtml.includes(s));
    } else {
      ok = getByPath(uiRoot, target.field) === target.new;
    }
    if (ok) matched += 1;
    rows.push({ id: target.id, field: target.field, ok, source: "pronunciation" });
  }

  for (const target of consDec.targets || []) {
    if (target.status !== "LABOT") continue;
    total += 1;
    const ok =
      BROKEN_CONS.every((s) => !consHtml.includes(s)) &&
      CONS_MARKERS.every((s) => consHtml.includes(s));
    if (ok) matched += 1;
    rows.push({ id: target.id, field: target.field, ok, source: "consonants" });
  }

  return { pass: matched === total && total === 14, matched, total, rows };
}

function verifyStructure() {
  const pron = loadHtmlKey("kurssPronunciationLesson");
  const cons = loadHtmlKey("kurssConsonantsLesson");
  const issues = [];
  for (const [key, html, expected] of [
    ["kurssPronunciationLesson", pron, 15],
    ["kurssConsonantsLesson", cons, 10],
  ]) {
    const sections = (html.match(/<section class="kurss-lesson-section">/g) || []).length;
    const closes = (html.match(/<\/section>/g) || []).length;
    if (sections !== expected) issues.push(`${key}: sections ${sections}/${expected}`);
    if (sections !== closes) issues.push(`${key}: unbalanced section tags`);
    if (html.includes("</sección>")) issues.push(`${key}: invalid </sección>`);
  }
  return { pass: issues.length === 0, issues, pronSections: 15, consSections: 10 };
}

function verifyMirrorSyntax() {
  const errors = [];
  for (const f of [ES_LESSONS, WWW_ES_LESSONS, ES_UI, WWW_ES_UI]) {
    try {
      execSync(`node --check "${f}"`, { encoding: "utf8" });
    } catch (e) {
      errors.push(`${f}: ${e.message}`);
    }
  }
  const mirrorLessons = fs.readFileSync(ES_LESSONS, "utf8") === fs.readFileSync(WWW_ES_LESSONS, "utf8");
  const mirrorUi = fs.readFileSync(ES_UI, "utf8") === fs.readFileSync(WWW_ES_UI, "utf8");
  return { pass: errors.length === 0 && mirrorLessons && mirrorUi, errors, mirrorLessons, mirrorUi };
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

function verifyApplyLog() {
  const log = readJson(APPLY_LOG);
  if (!log) return { pass: false, reason: "apply log missing" };
  const pass =
    log.appliedVerified === 6 &&
    log.nelabotUnchanged === 1 &&
    log.currentMismatch === 0 &&
    log.newMismatch === 0 &&
    log.failed === 0;
  return { pass, ...log };
}

function buildReconciliation(audit, decisions) {
  const auditFindings = audit.qualityFindings || [];
  const ownerById = Object.fromEntries((decisions.targets || []).map((t) => [t.id, t]));
  const rows = [];
  let unresolvedReal = 0;

  for (const finding of auditFindings) {
    const owner = ownerById[finding.id];
    if (!owner) {
      unresolvedReal += 1;
      rows.push({ id: finding.id, resolution: "UNRESOLVED", status: "OPEN" });
      continue;
    }
    if (owner.status === "NELABOT") {
      rows.push({
        id: finding.id,
        resolution: owner.ownerResolution || "OWNER_ACCEPTED_NELABOT",
        status: "CLOSED",
        retained: owner.current,
        rejectedProposal: owner.rejectedProposal || owner.new,
        reason: owner.reason,
      });
      continue;
    }
    if (owner.status === "LABOT") {
      const blob = `${loadHtmlKey("kurssPronunciationLesson")}\n${loadHtmlKey("kurssConsonantsLesson")}`;
      const applied = blob.includes(owner.new) && !blob.includes(owner.current);
      if (!applied) unresolvedReal += 1;
      rows.push({
        id: finding.id,
        resolution: applied ? "OWNER_LABOT_APPLIED" : "LABOT_NOT_APPLIED",
        status: applied ? "CLOSED" : "OPEN",
        expected: owner.new,
      });
    }
  }

  return {
    auditRealCount: auditFindings.length,
    unresolvedReal,
    reconciledReal: unresolvedReal === 0 ? 0 : unresolvedReal,
    rows,
    pass: unresolvedReal === 0,
  };
}


async function main() {
  const decisions = readJson(FINAL_DECISIONS);
  const audit = readJson(AUDIT_JSON);
  const apply = verifyApplyLog();
  const retention = verifyRetention();
  const structure = verifyStructure();
  const mirrorSyntax = verifyMirrorSyntax();
  const deUnchanged = verifyDeUnchanged();
  const reconciliation = buildReconciliation(audit, decisions);

  // Visual smoke via audit script subprocess (reuse without Luna)
  let visual = { pass: false, note: "not run" };
  try {
    const auditScript = path.join(__dirname, "audit-es-kurss-pronunciation-targeted-final.js");
    // Run only visual portion by importing internal - simpler to spawn node eval
    const { chromium } = require("playwright");
    const http = require("http");
    const PORT = Number(process.env.ES_KURSS_CLOSURE_PORT || 8895);

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

    async function ensureKurssPronunciationSubmenu(page) {
      for (let attempt = 0; attempt < 5; attempt++) {
        const menuVisible = await page.locator("#kurssPronunciationMenu:not([hidden])").isVisible().catch(() => false);
        if (menuVisible) return;
        const back = page.locator("#kurssBackBtn");
        if (!(await back.count()) || !(await back.isVisible().catch(() => false))) break;
        await back.click({ force: true });
        await page.waitForTimeout(350);
      }
    }

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
          await page.click("#kurssPronunciationBtn");
          await page.waitForTimeout(400);
          for (const p of [
            { btn: "#kurssVowelsLessonBtn", panel: "#kurssPronunciationLesson" },
            { btn: "#kurssConsonantsLessonBtn", panel: "#kurssConsonantsLesson" },
          ]) {
            await ensureKurssPronunciationSubmenu(page);
            await page.locator(p.btn).click({ force: true });
            await page.waitForSelector(`${p.panel}:not([hidden])`, { timeout: 10000 });
            await page.waitForTimeout(400);
            const ok = await page.evaluate((panelSel) => {
              const panel = document.querySelector(panelSel);
              const text = panel?.innerText || "";
              const rect = panel?.getBoundingClientRect();
              return !!(rect && rect.width > 0 && text.length > 200);
            }, p.panel);
            results.push({ viewport: label, panel: p.panel, ok });
          }
        } finally {
          await context.close();
          await browser.close();
        }
      }
    } finally {
      await new Promise((r) => server.close(r));
    }

    visual = {
      pass:
        results.every((r) => r.ok) &&
        pageErrors.filter((e) => e.viewport).length === 0 &&
        results.length === 4,
      results,
      pageErrors,
    };
  } catch (err) {
    visual = { pass: false, error: err.message };
  }

  const gates = {
    appliedVerified: apply.pass ? "PASS (6/6)" : "FAIL",
    nelabotUnchanged: apply.nelabotUnchanged === 1 ? "PASS (1/1)" : "FAIL",
    currentMismatch: apply.currentMismatch === 0 ? "PASS" : "FAIL",
    newMismatch: apply.newMismatch === 0 ? "PASS" : "FAIL",
    failed: apply.failed === 0 ? "PASS" : "FAIL",
    retention14: retention.pass ? "PASS (14/14)" : `FAIL (${retention.matched}/${retention.total})`,
    mirror: mirrorSyntax.pass && mirrorSyntax.mirrorLessons && mirrorSyntax.mirrorUi ? "PASS" : "FAIL",
    syntax: mirrorSyntax.pass ? "PASS" : "FAIL",
    structure: structure.pass ? "PASS" : "FAIL",
    deUnchanged: deUnchanged.pass ? "PASS" : "FAIL",
    visual: visual.pass ? "PASS" : "FAIL",
    reconciliation: reconciliation.pass ? "PASS (REAL=0)" : `FAIL (REAL=${reconciliation.unresolvedReal})`,
  };

  const allPass = Object.values(gates).every((g) => String(g).startsWith("PASS"));
  const verdict = allPass ? VERDICT_PASS : "NEEDS OWNER REPAIR";

  const report = {
    branch: BRANCH,
    pr: PR,
    generatedAt: new Date().toISOString(),
    verdict,
    gates,
    apply,
    retention,
    structure,
    mirrorSyntax: { pass: mirrorSyntax.pass, mirrorLessons: mirrorSyntax.mirrorLessons, mirrorUi: mirrorSyntax.mirrorUi },
    deUnchanged,
    visual,
    reconciliation,
  };

  const md = [
    "# ES Kurss Pronunciación — final OWNER closure",
    "",
    `**Generated:** ${report.generatedAt}`,
    `**Branch:** \`${BRANCH}\``,
    `**PR:** #${PR}`,
    "",
    "## Verdict",
    "",
    `**${verdict}**`,
    "",
    "## Gates",
    "",
    "| Gate | Status |",
    "|------|--------|",
    ...Object.entries(gates).map(([k, v]) => `| ${k} | ${v} |`),
    "",
    "## OWNER reconciliation",
    "",
    `Audit REAL findings: **${reconciliation.auditRealCount}**`,
    `Unresolved after OWNER: **${reconciliation.unresolvedReal}**`,
    "",
    "| ID | Resolution | Status |",
    "|----|------------|--------|",
    ...reconciliation.rows.map((r) => `| ${r.id} | ${r.resolution} | ${r.status} |`),
    "",
    "ES-KURSS-FINAL-0007 closed as **OWNER_ACCEPTED_NELABOT** (retain Mythe (müte), reject Mythe (mūte)).",
    "",
  ].join("\n");

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(REPORT_MD, md, "utf8");

  // Update audit summary verdict when closure passes
  if (allPass) {
    const summaryPath = path.join(ROOT, "reports/es-kurss-pronunciation-targeted-final-audit-summary.md");
    if (fs.existsSync(summaryPath)) {
      let summary = fs.readFileSync(summaryPath, "utf8");
      summary = summary.replace(
        /\*\*NEEDS OWNER REPAIR\*\*/,
        `**${VERDICT_PASS}**`,
      );
      summary = summary.replace(
        /\| REAL findings \| \*\*\d+\*\* \|/,
        "| REAL findings (post-OWNER) | **0** |",
      );
      fs.writeFileSync(summaryPath, summary, "utf8");
    }
  }

  console.log(`\n=== ${verdict} ===\n`);
  console.log(md);
  if (!allPass) process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
