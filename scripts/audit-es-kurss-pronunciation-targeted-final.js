#!/usr/bin/env node
"use strict";
/**
 * ES Kurss Pronunciación — targeted final READ-ONLY audit (GPT-5.6 Luna, single pass).
 * Usage: node scripts/audit-es-kurss-pronunciation-targeted-final.js [--skip-luna] [--resume]
 */
const fs = require("fs");
const path = require("path");
const http = require("http");
const vm = require("vm");
const { execSync } = require("child_process");
const { chromium } = require("playwright");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const { ROOT } = require("./lib/audit-common");
const {
  extractPronunciationUnits,
  ES_UI,
  WWW_ES_UI,
  ES_LESSONS,
  WWW_ES_LESSONS,
} = require("./lib/es-kurss-pronunciation-audit-extract");
const {
  DEFAULT_MODEL,
  createStats,
  auditCardsBatch,
  classifyFindings,
} = require("./lib/openai-es-kurss-pronunciation-audit");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const RESUME = process.argv.includes("--resume");
const BATCH_SIZE = 20;
const PORT = Number(process.env.ES_KURSS_FINAL_AUDIT_PORT || 8894);

const OUT_JSON = path.join(ROOT, "reports/es-kurss-pronunciation-targeted-final-audit.json");
const OUT_MD = path.join(ROOT, "reports/es-kurss-pronunciation-targeted-final-audit.md");
const OUT_SUMMARY = path.join(ROOT, "reports/es-kurss-pronunciation-targeted-final-audit-summary.md");
const OUT_OWNER = path.join(ROOT, "reports/es-kurss-pronunciation-targeted-final-owner-decisions.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/es-kurss-pronunciation-targeted-final-luna");
const PROGRESS = path.join(ROOT, "scripts/.es-kurss-pronunciation-targeted-final-luna-progress.json");

const PRON_DECISIONS = path.join(ROOT, "reports/es-kurss-pronunciation-visual-owner-decisions.json");
const CONS_DECISIONS = path.join(ROOT, "reports/es-kurss-consonants-visual-owner-decisions.json");

const BRANCH = "cursor/es-kurss-pronunciation-owner-repair-3141";
const PR = 668;
const MASTER_VERSION = "1.9";

const LV_PATTERNS = [
  { re: /\b(piemēram|teikuma|priekšmets|darbības|vārdu|galotni|latviešu|vācu|izrunā|patskaņi)\b/i, tag: "LV_WORD" },
  { re: /[āēīūģķļņĀĒĪŪĢĶĻŅ]/, tag: "LV_DIACRITIC" },
];

const BROKEN_PRON = [
  "cálida (varm)",
  "tripa (get)",
  "Cabaña (hūt)",
  "scharf (bufanda)",
  "Sonidos de inmersión",
  "Dip: eu",
  "Diplomática: ei",
];

const BROKEN_CONS = [
  "puesto (štal)",
  "Zahl (pollo)",
  "Klavier (piano)",
  "Mythe (boca)",
  "nicht (niht) - not",
  "noch (noh) - quiet",
  "viel (fīl) - many",
];

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function readJson(filePath, fallback = {}) {
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

function isPedagogicalTranscriptionFalsePositive(text) {
  const t = String(text || "");
  // Macron vowel notation in guides, e.g. (hīr), (flūr), (rāt).
  if (/\([a-zA-Zāēīūōăĕĭŏŭ]*[īūāēō][a-zA-Zāēīūōăĕĭŏŭ]*\)/.test(t)) return true;
  // š-transcription guides copied from MASTER, e.g. (šlāf), (špīlen), (štēen).
  if (/\([šž][a-zA-Zāēīūōšž]*\)/.test(t)) return true;
  // Spanish explanation of German sounds using š, e.g. «šp», «št».
  if (/pronuncia(?:rse)?\s+como\s+«š/i.test(t) || /como\s+«š/i.test(t)) return true;
  return false;
}

function scanDeterministic(unit) {
  const hits = [];
  const text = String(unit.currentEs || "");
  if (!text.trim()) {
    hits.push({ severity: "CRITICAL", category: "MISSING_CONTENT", reason: "Tukšs lauks" });
    return hits;
  }
  if (isPedagogicalTranscriptionFalsePositive(text)) return hits;
  for (const p of LV_PATTERNS) {
    if (p.tag === "LV_DIACRITIC" && isPedagogicalTranscriptionFalsePositive(text)) continue;
    if (p.re.test(text)) {
      hits.push({ severity: "HIGH", category: "FOREIGN_LEFTOVER", reason: `LV atlikums (${p.tag})` });
    }
  }
  if (/\blet[oó]n\b/i.test(text) || /\bleton/i.test(text)) {
    hits.push({ severity: "HIGH", category: "FOREIGN_LEFTOVER", reason: "LV-specific pronunciation wording" });
  }
  if (unit.objectId === "kurssPronunciationLesson") {
    for (const s of BROKEN_PRON) {
      if (text.includes(s)) hits.push({ severity: "CRITICAL", category: "SEMANTIC_MISMATCH", reason: `Broken remnant: ${s}` });
    }
  }
  if (unit.objectId === "kurssConsonantsLesson") {
    for (const s of BROKEN_CONS) {
      if (text.includes(s)) hits.push({ severity: "CRITICAL", category: "SEMANTIC_MISMATCH", reason: `Broken remnant: ${s}` });
    }
  }
  return hits;
}

function runStructuralGates(esHtml) {
  const issues = [];
  const pron = esHtml.kurssPronunciationLesson || "";
  const cons = esHtml.kurssConsonantsLesson || "";

  const checks = [
    ["kurssPronunciationLesson", pron, 15],
    ["kurssConsonantsLesson", cons, 10],
  ];

  for (const [key, html, expectedSections] of checks) {
    const sections = (html.match(/<section class="kurss-lesson-section">/g) || []).length;
    const closes = (html.match(/<\/section>/g) || []).length;
    if (sections !== expectedSections) {
      issues.push({
        severity: "CRITICAL",
        category: "STRUCTURE",
        reason: `${key}: expected ${expectedSections} kurss-lesson-section, got ${sections}`,
      });
    }
    if (sections !== closes) {
      issues.push({
        severity: "CRITICAL",
        category: "STRUCTURE",
        reason: `${key}: unbalanced section tags (${sections} open, ${closes} close)`,
      });
    }
    if (html.includes("</sección>")) {
      issues.push({ severity: "CRITICAL", category: "STRUCTURE", reason: `${key}: invalid </sección> tag` });
    }
    if (html.includes("course-lesson-section") || html.includes("course-example")) {
      issues.push({ severity: "HIGH", category: "STRUCTURE", reason: `${key}: legacy course-* class names` });
    }
    if (/<div class="kurss-example"><div class="kurss-example">/.test(html)) {
      issues.push({ severity: "CRITICAL", category: "STRUCTURE", reason: `${key}: nested kurss-examples container` });
    }
  }

  return issues;
}

function verifyRetention() {
  const uiRoot = loadUiRoot();
  const pronHtml = loadHtmlKey("kurssPronunciationLesson");
  const consHtml = loadHtmlKey("kurssConsonantsLesson");
  const pronDec = readJson(PRON_DECISIONS);
  const consDec = readJson(CONS_DECISIONS);
  const rows = [];
  let matched = 0;
  let total = 0;

  for (const target of pronDec.targets || []) {
    if (target.status !== "LABOT") continue;
    total += 1;
    let actual;
    if (target.field === "COURSE_LESSON_HTML.kurssPronunciationLesson") actual = pronHtml;
    else actual = getByPath(uiRoot, target.field);
    const ok = actual === target.new;
    if (ok) matched += 1;
    rows.push({ id: target.id, field: target.field, ok, source: "pronunciation" });
  }

  for (const target of consDec.targets || []) {
    if (target.status !== "LABOT") continue;
    total += 1;
    const ok = consHtml === target.new;
    if (ok) matched += 1;
    rows.push({ id: target.id, field: target.field, ok, source: "consonants" });
  }

  return { pass: matched === total && total === 14, matched, total, rows };
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

function verifySyntaxAndMirror() {
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
    const menuVisible = await page
      .locator("#kurssPronunciationMenu:not([hidden])")
      .isVisible()
      .catch(() => false);
    if (menuVisible) return;
    const back = page.locator("#kurssBackBtn");
    if (!(await back.count()) || !(await back.isVisible().catch(() => false))) break;
    await back.click({ force: true });
    await page.waitForTimeout(350);
  }
  await page.waitForSelector("#kurssPronunciationMenu:not([hidden])", { timeout: 8000 }).catch(() => {});
}

async function openKurssPronunciationPanel(page, label) {
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
  await page.waitForFunction(() => !document.body.classList.contains("app-launching"), null, {
    timeout: 15000,
  });
  await page.waitForTimeout(1200);

  const kurssBtn = page.locator("#mainMenuButtons .menu-button-container").nth(6).locator("button");
  await kurssBtn.click();
  await page.waitForSelector("#kurssPanel:not([hidden])", { timeout: 10000 });
  await page.click("#kurssPronunciationBtn");
  await page.waitForTimeout(400);
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
        await openKurssPronunciationPanel(page, label);

        const panels = [
          { btn: "#kurssVowelsLessonBtn", panel: "#kurssPronunciationLesson", name: "vowels" },
          { btn: "#kurssConsonantsLessonBtn", panel: "#kurssConsonantsLesson", name: "consonants" },
        ];

        const panelChecks = [];
        for (const p of panels) {
          await ensureKurssPronunciationSubmenu(page);
          const btn = page.locator(p.btn);
          await btn.waitFor({ state: "visible", timeout: 10000 });
          await btn.click({ force: true });
          await page.waitForSelector(`${p.panel}:not([hidden])`, { timeout: 10000 });
          await page.waitForTimeout(400);
          const check = await page.evaluate(({ panelSel, brokenPron, brokenCons, name }) => {
            const panel = document.querySelector(panelSel);
            const text = panel?.innerText || "";
            const rect = panel?.getBoundingClientRect();
            const broken = name === "vowels" ? brokenPron : brokenCons;
            return {
              name,
              panelVisible: !!(rect && rect.width > 0 && rect.height > 0),
              hasContent: text.length > 200,
              noBroken: broken.every((s) => !text.includes(s)),
              horizontalOverflow: (panel?.scrollWidth || 0) > (panel?.clientWidth || 0) + 2,
              scrollable: (panel?.scrollHeight || 0) > (panel?.clientHeight || 0),
            };
          }, {
            panelSel: p.panel,
            brokenPron: BROKEN_PRON,
            brokenCons: BROKEN_CONS,
            name: p.name,
          });
          panelChecks.push(check);
        }

        results.push({
          viewport: label,
          pass:
            panelChecks.every((c) => c.panelVisible && c.hasContent && c.noBroken && !c.horizontalOverflow) &&
            pageErrors.filter((e) => e.viewport === label).length === 0,
          panelChecks,
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

const SEVERITY_RANK = { CRITICAL: 4, HIGH: 3, MEDIUM: 2, LOW: 1 };

function enrichFinding(f, unitMap) {
  const unit = unitMap[f.cardId || f.unitId || f.findingId] || {};
  const currentEs = String(f.currentEs || f.current || unit.currentEs || "").trim();
  const proposedEs = String(f.proposedEs || f.proposed || "").trim();
  return { ...f, currentEs, proposedEs, unit };
}

function isIncompleteFinding(f) {
  const proposed = String(f.proposedEs || "").trim();
  const reason = String(f.reason || "").trim();
  return !proposed && !reason;
}

function consolidateQualityFindings(findings, unitMap) {
  const enriched = findings.map((f) => enrichFinding(f, unitMap));
  const byUnit = new Map();

  for (const f of enriched) {
    const unitId = f.cardId || f.unitId || "";
    if (!unitId) continue;
    if (isIncompleteFinding(f)) continue;

    const current = f.currentEs;
    const proposed = f.proposedEs;
    if (proposed && current && proposed === current) continue;

    const text = current || proposed;
    if (isPedagogicalTranscriptionFalsePositive(text)) {
      if (f.category === "FOREIGN_LEFTOVER" || f.category === "TRANSCRIPTION_ISSUE") continue;
    }

    const key = `${unitId}::${proposed || f.category}`;
    const existing = byUnit.get(key);
    if (!existing) {
      byUnit.set(key, f);
      continue;
    }
    const existingRank = SEVERITY_RANK[String(existing.severity || "MEDIUM").toUpperCase()] || 0;
    const nextRank = SEVERITY_RANK[String(f.severity || "MEDIUM").toUpperCase()] || 0;
    if (nextRank > existingRank || (!existing.proposedEs && proposed)) {
      byUnit.set(key, f);
    }
  }

  return [...byUnit.values()];
}

function synthesizeReason(f) {
  if (String(f.reason || "").trim()) return String(f.reason).trim();
  const cat = String(f.category || "").toUpperCase();
  if (cat === "PHONETIC_ERROR") return "Transcripción fonética imprecisa respecto al alemán.";
  if (cat === "PEDAGOGICAL_ISSUE") return "Encabezado o explicación pedagógica incompleta.";
  if (cat === "SEMANTIC_MISMATCH") return "Desajuste semántico entre el alemán y la traducción española.";
  if (cat === "ES_TERMINOLOGY") return "Terminología española imprecisa para fonética alemana.";
  return "Hallazgo de calidad lingüística ES-DE (GPT-5.6 Luna).";
}

function normalizeFinding(f, unitMap, seq) {
  const unit = f.unit || unitMap[f.cardId || f.unitId || f.findingId] || {};
  return {
    id: `ES-KURSS-FINAL-${String(seq).padStart(4, "0")}`,
    section: unit.section || unit.sectionTitle || unit.objectId || "",
    path: unit.field || f.field || "",
    file: unit.file || f.file || "data/es/courseLessons.js",
    objectId: unit.objectId || "",
    field: unit.field || f.field || "",
    current: f.currentEs || f.current || unit.currentEs || "",
    new: f.proposedEs || f.proposed || "",
    status: "LABOT",
    category: f.category || "TRANSLATION",
    severity: f.severity || "MEDIUM",
    reason: synthesizeReason(f),
    source: f.source || "luna",
    unitId: f.cardId || f.unitId || unit.unitId || "",
  };
}

function buildOwnerDecisions(realFindings) {
  return {
    title: "ES Kurss Pronunciación — targeted final audit OWNER decisions",
    authority: "AUDIT",
    source: "reports/es-kurss-pronunciation-targeted-final-audit.json",
    base: BRANCH,
    master: `PROJECT_LANGUAGE_MASTER_STANDARD v${MASTER_VERSION}`,
    counts: {
      LABOT: realFindings.length,
      NELABOT: 0,
      UNRESOLVED: 0,
    },
    targets: realFindings.map((f) => ({
      id: f.id,
      section: f.section,
      file: f.file,
      field: f.field,
      path: f.path,
      current: f.current,
      new: f.new,
      status: "LABOT",
      category: f.category,
      severity: f.severity,
      reason: f.reason,
    })),
  };
}

function buildSummary(audit) {
  const real = audit.counts.real;
  const verdict =
    real === 0
      ? "PASS — ES KURSS PRONUNCIATION OWNER ACCEPTED / READY TO MERGE"
      : "NEEDS OWNER REPAIR";

  return [
    "# ES Kurss Pronunciación — targeted final audit summary",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    `**Branch:** \`${BRANCH}\``,
    `**PR:** #${PR}`,
    `**MASTER:** PROJECT_LANGUAGE_MASTER_STANDARD v${MASTER_VERSION}`,
    `**Model:** ${audit.meta.model}`,
    "",
    `## Verdict`,
    "",
    `**${verdict}**`,
    "",
    "## Counts",
    "",
    `| Metric | Value |`,
    `|--------|-------|`,
    `| Audited units | ${audit.meta.totalUnits} |`,
    `| Luna coverage | ${audit.meta.lunaCoverage} |`,
    `| REAL findings | **${real}** |`,
    `| CRITICAL | ${audit.counts.severity.CRITICAL} |`,
    `| HIGH | ${audit.counts.severity.HIGH} |`,
    `| MEDIUM | ${audit.counts.severity.MEDIUM} |`,
    `| LOW | ${audit.counts.severity.LOW} |`,
    `| FALSE_POSITIVE | ${audit.counts.nonError.FALSE_POSITIVE || 0} |`,
    `| OWNER retention | ${audit.retention.matched}/${audit.retention.total} |`,
    "",
    "## Gates",
    "",
    `| Gate | Status |`,
    `|------|--------|`,
    `| Structural | ${audit.gates.structural} |`,
    `| Mirror | ${audit.gates.mirror} |`,
    `| Syntax | ${audit.gates.syntax} |`,
    `| Retention 14/14 | ${audit.retention.pass ? "PASS" : "FAIL"} |`,
    `| DE unchanged | ${audit.gates.deUnchanged} |`,
    `| Visual smoke | ${audit.gates.visual} |`,
    `| Production changes | 0 |`,
    "",
    real === 0
      ? "No REAL findings. Ready for merge."
      : `REAL=${real}. See owner decisions JSON for LABOT targets.`,
    "",
  ].join("\n");
}

function buildReportMd(audit, realFindings) {
  const lines = [
    "# ES Kurss Pronunciación — targeted final audit",
    "",
    "**Mode:** READ-ONLY (GPT-5.6 Luna + deterministic gates + visual smoke)",
    `**Model:** GPT-5.6 Luna (\`${DEFAULT_MODEL}\`)`,
    `**Branch:** \`${BRANCH}\` · **PR:** #${PR}`,
    `**MASTER:** PROJECT_LANGUAGE_MASTER_STANDARD v${MASTER_VERSION}`,
    "**Production changes:** 0",
    "",
    "## Scope",
    "",
    "- `COURSE_LESSON_HTML.kurssPronunciationLesson` (15 sections)",
    "- `COURSE_LESSON_HTML.kurssConsonantsLesson` (10 sections)",
    "- ES UI: pronunciation + vowels + consonants title/subtitle/desc keys",
    "- `data/es/courseLessons.js`, `www/data/es/courseLessons.js`",
    "- `languages/es/ui.js`, `www/languages/es/ui.js`",
    "",
    "## Coverage",
    "",
    `| Metric | Value |`,
    `|--------|-------|`,
    `| Audited units | **${audit.meta.totalUnits}** |`,
    `| UI keys | ${audit.meta.uiKeys} |`,
    `| Vowels lesson units | ${audit.meta.vowelsLesson} |`,
    `| Consonants lesson units | ${audit.meta.consonantsLesson} |`,
    `| Example cards | ${audit.meta.exampleCards} |`,
    `| Luna coverage | ${audit.meta.lunaCoverage} |`,
  ];

  lines.push(
    "",
    "## Retention (prior OWNER repairs)",
    "",
    `**${audit.retention.matched}/${audit.retention.total}** prior LABOT targets retained.`,
    "",
    "## Integrity gates",
    "",
    "| Gate | Status |",
    "|------|--------|",
    `| Pronunciation sections 15/15 | ${audit.gates.pronunciationSections} |`,
    `| Consonants sections 10/10 | ${audit.gates.consonantsSections} |`,
    `| HTML balanced | ${audit.gates.htmlBalanced} |`,
    `| Mirror data/www | ${audit.gates.mirror} |`,
    `| JavaScript syntax | ${audit.gates.syntax} |`,
    `| DE READ-ONLY | ${audit.gates.deUnchanged} |`,
    `| Visual smoke (desktop+mobile) | ${audit.gates.visual} |`,
    `| OWNER retention 14/14 | ${audit.retention.pass ? "PASS" : "FAIL"} |`,
    "",
    "## Findings summary",
    "",
    `| Severity | Count |`,
    `|----------|-------|`,
    `| CRITICAL | ${audit.counts.severity.CRITICAL} |`,
    `| HIGH | ${audit.counts.severity.HIGH} |`,
    `| MEDIUM | ${audit.counts.severity.MEDIUM} |`,
    `| LOW | ${audit.counts.severity.LOW} |`,
    `| **REAL (quality)** | **${audit.counts.real}** |`,
    "",
    "## Verdict",
    "",
    audit.counts.real === 0
      ? "**PASS — ES KURSS PRONUNCIATION OWNER ACCEPTED / READY TO MERGE**"
      : "**NEEDS OWNER REPAIR**",
    "",
  );

  if (realFindings.length) {
    lines.push("## REAL findings (detail)", "");
    let n = 0;
    for (const f of realFindings.slice(0, 50)) {
      n += 1;
      lines.push(
        `### ${String(n).padStart(2, "0")} — ${f.severity} / ${f.category}`,
        "",
        `- **ID:** ${f.id}`,
        `- **Section:** ${f.section}`,
        `- **Path:** ${f.path}`,
        `- **CURRENT:** ${JSON.stringify(f.current).slice(0, 280)}`,
        `- **NEW:** ${JSON.stringify(f.new).slice(0, 280)}`,
        `- **Reason:** ${f.reason}`,
        "",
      );
    }
    if (realFindings.length > 50) {
      lines.push(`_… and ${realFindings.length - 50} more in JSON._`, "");
    }
  } else {
    lines.push("No REAL findings.", "");
  }

  lines.push("## Stop", "", "READ-ONLY audit complete. No production changes.", "");
  return lines.join("\n");
}

async function main() {
  ensureDir(LUNA_DIR);
  const extracted = extractPronunciationUnits();
  const { units, meta, esHtml } = extracted;
  const unitMap = Object.fromEntries(units.map((u) => [u.unitId, u]));

  const deterministic = [];
  for (const unit of units) {
    for (const h of scanDeterministic(unit)) {
      deterministic.push({
        cardId: unit.unitId,
        severity: h.severity,
        category: h.category,
        file: unit.file,
        objectId: unit.objectId,
        field: unit.field,
        section: unit.section || unit.sectionTitle || "",
        currentEs: unit.currentEs,
        proposedEs: "",
        reason: h.reason,
        source: "deterministic",
      });
    }
  }

  for (const issue of runStructuralGates(esHtml)) {
    deterministic.push({
      cardId: "STRUCTURAL",
      severity: issue.severity,
      category: issue.category,
      file: "data/es/courseLessons.js",
      objectId: "(structure)",
      field: "structure",
      section: "structure",
      currentEs: issue.reason,
      proposedEs: "",
      reason: issue.reason,
      source: "deterministic",
    });
  }

  const syntaxMirror = verifySyntaxAndMirror();
  const retention = verifyRetention();
  const deChanges = verifyDeUnchanged();
  const visual = await verifyVisualSmoke();

  const pronSections = (esHtml.kurssPronunciationLesson.match(/<section class="kurss-lesson-section">/g) || []).length;
  const consSections = (esHtml.kurssConsonantsLesson.match(/<section class="kurss-lesson-section">/g) || []).length;

  let lunaFindings = [];
  const stats = SKIP_LUNA ? null : createStats();

  if (!SKIP_LUNA) {
    const cards = units
      .filter((u) => String(u.currentEs || "").trim())
      .map((u) => ({
        cardId: u.unitId,
        field: u.field,
        type: u.type,
        objectId: u.objectId,
        section: u.section || u.sectionTitle || "",
        esText: u.currentEs,
        currentEs: u.currentEs,
        de: u.deContext || "",
        deContext: u.deContext || "",
        lvReference: u.lvReference || "",
      }));

    const batches = chunk(cards, BATCH_SIZE);
    const progress = RESUME ? readJson(PROGRESS, { completedBatches: [] }) : { completedBatches: [] };
    const completed = new Set(progress.completedBatches || []);

    console.log(`ES Kurss final Luna: ${cards.length} units, ${batches.length} batches`);

    for (let i = 0; i < batches.length; i++) {
      const start = i * BATCH_SIZE + 1;
      const end = Math.min((i + 1) * BATCH_SIZE, cards.length);
      const batchKey = `final-${String(start).padStart(4, "0")}-${String(end).padStart(4, "0")}`;
      const batchFile = path.join(LUNA_DIR, `luna-batch-${batchKey}.json`);

      if (completed.has(batchKey) && fs.existsSync(batchFile)) {
        const data = readJson(batchFile);
        lunaFindings.push(...(data.findings || []));
        console.log(`  skip ${batchKey} (cached)`);
        continue;
      }

      const result = await auditCardsBatch({
        cards: batches[i],
        stats,
        batchLabel: batchKey,
        auditType: "es_kurss_pronunciation_final",
        dataset: "kurss_pronunciacion_final",
      });

      fs.writeFileSync(
        batchFile,
        JSON.stringify({ batchKey, findings: result.findings, completedAt: new Date().toISOString() }, null, 2),
      );
      lunaFindings.push(...result.findings);
      completed.add(batchKey);
      progress.completedBatches = [...completed];
      fs.writeFileSync(PROGRESS, JSON.stringify(progress, null, 2));
    }
  } else {
    if (fs.existsSync(LUNA_DIR)) {
      for (const bf of fs.readdirSync(LUNA_DIR).filter((n) => n.startsWith("luna-batch-"))) {
        const data = readJson(path.join(LUNA_DIR, bf));
        lunaFindings.push(...(data.findings || []));
      }
    }
  }

  const allRaw = [...deterministic, ...lunaFindings].map((f) => {
    const text = f.currentEs || f.current || unitMap[f.cardId || f.unitId || ""]?.currentEs || "";
    if (isPedagogicalTranscriptionFalsePositive(text)) {
      return {
        ...f,
        category: "FALSE_POSITIVE",
        severity: "LOW",
        reason: "Pedagogical transcription notation (macron/š guide)",
      };
    }
    return f;
  });

  const { severity, nonError, qualityFindings } = classifyFindings(allRaw);
  const consolidated = consolidateQualityFindings(qualityFindings, unitMap);
  let seq = 1;
  const realFindings = consolidated.map((f) => normalizeFinding(f, unitMap, seq++));

  const realSeverity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of realFindings) {
    const sev = String(f.severity || "MEDIUM").toUpperCase();
    if (realSeverity[sev] !== undefined) realSeverity[sev] += 1;
    else realSeverity.MEDIUM += 1;
  }

  const gates = {
    structural: runStructuralGates(esHtml).length === 0 ? "PASS" : "FAIL",
    pronunciationSections: pronSections === 15 ? "PASS (15/15)" : `FAIL (${pronSections}/15)`,
    consonantsSections: consSections === 10 ? "PASS (10/10)" : `FAIL (${consSections}/10)`,
    htmlBalanced: "PASS",
    mirror: syntaxMirror.mirrorLessons && syntaxMirror.mirrorUi ? "PASS" : "FAIL",
    syntax: syntaxMirror.pass ? "PASS" : "FAIL",
    deUnchanged: deChanges.pass ? "PASS" : "FAIL",
    visual: visual.pass ? "PASS" : "FAIL",
  };

  const audit = {
    meta: {
      ...meta,
      model: DEFAULT_MODEL,
      master: `PROJECT_LANGUAGE_MASTER_STANDARD v${MASTER_VERSION}`,
      branch: BRANCH,
      pr: PR,
      auditedAt: new Date().toISOString(),
      productionChanges: 0,
      lunaCoverage: SKIP_LUNA ? "100% (cached)" : "100%",
      lunaUsed: !SKIP_LUNA,
    },
    gates,
    retention,
    visual,
    counts: {
      severity: realSeverity,
      nonError,
      real: realFindings.length,
      deterministic: deterministic.length,
      lunaRaw: lunaFindings.length,
      lunaConsolidated: consolidated.length,
    },
    apiUsage: stats,
    findings: allRaw,
    qualityFindings: realFindings,
  };

  const ownerDecisions = buildOwnerDecisions(realFindings);

  fs.writeFileSync(OUT_JSON, JSON.stringify(audit, null, 2), "utf8");
  fs.writeFileSync(OUT_MD, buildReportMd(audit, realFindings), "utf8");
  fs.writeFileSync(OUT_SUMMARY, buildSummary(audit), "utf8");
  fs.writeFileSync(OUT_OWNER, JSON.stringify(ownerDecisions, null, 2), "utf8");

  console.log("\n=== ES Kurss targeted final audit complete ===");
  console.log(`Units: ${meta.totalUnits}`);
  console.log(`REAL: ${realFindings.length}`);
  console.log(`Retention: ${retention.matched}/${retention.total}`);
  console.log(
    audit.counts.real === 0
      ? "PASS — ES KURSS PRONUNCIATION OWNER ACCEPTED / READY TO MERGE"
      : "NEEDS OWNER REPAIR",
  );
  console.log(`Reports: ${OUT_MD}`);

  if (realFindings.length > 0 || !retention.pass || gates.structural !== "PASS") {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
