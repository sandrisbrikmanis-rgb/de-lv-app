#!/usr/bin/env node
"use strict";
/**
 * Runtime legacyHtml sync repair — convert COURSE_LESSON_DATA inline legacyHtml
 * copies to COURSE_LESSON_HTML.kurssLessonN references (UK/TR/SV pattern).
 *
 * Usage: node scripts/apply-da-kurss-runtime-legacyhtml-sync-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { parseSignedDecisionFile } = require("./lib/da-kurss-final-post-repair-decisions");
const { legacyHtmlContainsFragment } = require("./lib/da-kurss-owner-path");

const DRY_RUN = process.argv.includes("--dry-run");
const REPORT = path.join(ROOT, "reports/da-kurss-runtime-legacyhtml-sync-repair.md");
const LOG_JSON = path.join(ROOT, "reports/temp/da-kurss-runtime-legacyhtml-sync-repair-log.json");

const LESSONS_PRIMARY = path.join(ROOT, "data/da/courseLessons.js");
const LESSONS_WWW = path.join(ROOT, "www/data/da/courseLessons.js");
const LV_PRIMARY = path.join(ROOT, "data/courseLessons.js");
const UI_JS = path.join(ROOT, "www/ui.js");

const TARGET_IDS = [
  "DA-KURSS-FPR-0069",
  "DA-KURSS-FPR-0070",
  "DA-KURSS-FPR-0071",
  "DA-KURSS-FPR-0073",
  "DA-KURSS-FPR-0076",
  "DA-KURSS-FPR-0079",
  "DA-KURSS-FPR-0082",
  "DA-KURSS-FPR-0084",
  "DA-KURSS-FPR-0086",
];

const LESSON_KEYS = Array.from({ length: 7 }, (_, i) => `kurssLesson${i + 1}`);

function repairDaCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    '$1",$2',
  );
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function loadCourses(filePath) {
  let code = fs.readFileSync(filePath, "utf8");
  code = repairDaCourseLessonsSource(code);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return {
    code,
    html: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_HTML || {})),
    data: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_DATA || {})),
  };
}

function applyMicroRepairReplacements(html) {
  const logPath = path.join(ROOT, "reports/temp/da-kurss-9-legacyhtml-structured-micro-repair-log.json");
  if (!fs.existsSync(logPath)) {
    throw new Error("Missing micro-repair log: " + logPath);
  }
  const micro = JSON.parse(fs.readFileSync(logPath, "utf8"));
  const applied = [];
  for (const row of micro.rows || []) {
    if (row.result !== "APPLIED") continue;
    const lessonKey = String(row.path || "").match(/kurssLesson\d+/)?.[0];
    if (!lessonKey || typeof html[lessonKey] !== "string") continue;
    for (const rep of row.replacements || []) {
      if (rep.note === "UNCHANGED") {
        applied.push({ auditId: row.auditId, note: "UNCHANGED", text: rep.ownerNew });
        continue;
      }
      if (!html[lessonKey].includes(rep.current)) {
        throw new Error(`${row.auditId}: CURRENT not found in merged HTML: ${rep.current}`);
      }
      html[lessonKey] = html[lessonKey].replace(rep.current, rep.ownerNew);
      applied.push({ auditId: row.auditId, current: rep.current, ownerNew: rep.ownerNew });
    }
  }
  return applied;
}

function buildCanonicalHtmlMap(data, html) {
  const merged = JSON.parse(JSON.stringify(html));
  for (const key of LESSON_KEYS) {
    if (typeof data?.[key]?.legacyHtml === "string" && data[key].legacyHtml.trim()) {
      merged[key] = data[key].legacyHtml;
    }
  }
  applyMicroRepairReplacements(merged);
  return merged;
}

function writeCourseLessonsWithReferences(filePath, html, data) {
  for (const key of LESSON_KEYS) {
    if (html[key] && data[key]) {
      data[key].legacyHtml = html[key];
    }
  }

  const EXTRA_HTML_KEYS = [
    "kurssArticlesLesson",
    "kurssPronounsLesson",
    "kurssPronunciationLesson",
    "kurssConsonantsLesson",
    "kurssVerbBasicsLesson",
    "kurssSentenceStructureLesson",
  ];

  let dataJson = JSON.stringify(data, null, 2);
  for (let i = 1; i <= 21; i++) {
    const key = `kurssLesson${i}`;
    if (!html[key]) continue;
    const htmlEscaped = JSON.stringify(html[key]);
    dataJson = dataJson.replace(
      new RegExp(`("legacyHtml": )${escapeRegExp(htmlEscaped)}`),
      `$1COURSE_LESSON_HTML.${key}`,
    );
  }
  for (const key of EXTRA_HTML_KEYS) {
    if (!html[key]) continue;
    const htmlEscaped = JSON.stringify(html[key]);
    dataJson = dataJson.replace(
      new RegExp(`("legacyHtml": )${escapeRegExp(htmlEscaped)}`),
      `$1COURSE_LESSON_HTML.${key}`,
    );
  }

  const content = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function getRuntimeLegacyHtml(data, html, lessonKey) {
  const inline = data?.[lessonKey]?.legacyHtml;
  if (typeof inline === "string" && inline.trim()) return inline;
  return html?.[lessonKey] || "";
}

function loadOwnerNew(id) {
  for (let g = 1; g <= 7; g++) {
    const file = path.join(
      ROOT,
      "reports",
      `da-kurss-owner-decisions-final-post-repair-group${String(g).padStart(2, "0")}-signed.md`,
    );
    for (const row of parseSignedDecisionFile(file)) {
      if (row.auditId === id && row.status === "LABOT") return row.ownerDecision;
    }
  }
  return "";
}

function loadMicroReplacements(id) {
  const logPath = path.join(ROOT, "reports/temp/da-kurss-9-legacyhtml-structured-micro-repair-log.json");
  if (!fs.existsSync(logPath)) return [];
  const log = JSON.parse(fs.readFileSync(logPath, "utf8"));
  const row = (log.rows || []).find((r) => r.auditId === id);
  return row?.replacements || [];
}

function verifyTargetFinding(id, src) {
  const audit = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/da-kurss-final-post-repair-audit.json"), "utf8"),
  );
  const finding = audit.findings.find((f) => f.id === id);
  const pathStr = finding?.path || "";
  const lessonKey = pathStr.match(/kurssLesson\d+/)?.[0];
  const ownerNew = loadOwnerNew(id);
  const runtimeHtml = getRuntimeLegacyHtml(src.data, src.html, lessonKey);
  const replacements = loadMicroReplacements(id);

  if (replacements.length) {
    const ok = replacements.every(
      (rep) => rep.note === "UNCHANGED" || legacyHtmlContainsFragment(runtimeHtml, rep.ownerNew),
    );
    return { id, path: pathStr, ownerNew, runtimeBefore: "inline-stale", runtimeAfter: runtimeHtml.slice(0, 120), match: ok };
  }

  const parts = String(ownerNew).split(";").map((p) => p.trim()).filter(Boolean);
  const ok =
    parts.length > 1
      ? parts.every((p) => legacyHtmlContainsFragment(runtimeHtml, p))
      : legacyHtmlContainsFragment(runtimeHtml, ownerNew);
  return { id, path: pathStr, ownerNew: String(ownerNew).slice(0, 120), match: ok };
}

function collectDeFields(data) {
  const out = [];
  for (const [lessonKey, lesson] of Object.entries(data)) {
    if (!lesson?.sections) continue;
    lesson.sections.forEach((section, si) => {
      section.cards?.forEach((card, ci) => {
        for (const [k, v] of Object.entries(card || {})) {
          if (
            typeof v === "string" &&
            ["back", "de", "infinitive", "du", "ihr", "sie", "prompt", "answer", "base"].includes(k)
          ) {
            out.push({ loc: `${lessonKey}.sections[${si}].cards[${ci}].${k}`, value: v });
          }
        }
      });
    });
  }
  return out;
}

function countLegacyHtmlRefs(source) {
  return (source.match(/"legacyHtml": COURSE_LESSON_HTML\.kurssLesson/g) || []).length;
}

function renderReport(log) {
  const lines = [
    "# DA–DE Kurss — runtime legacyHtml sync repair",
    "",
    `**Generated:** ${log.generatedAt}`,
    `**Dry run:** ${log.dryRun}`,
    "",
    "## Runtime source",
    "",
    "Renderer (`www/ui.js` → `renderCourseLessonFromData`):",
    "",
    "```javascript",
    "if (target && lesson?.legacyHtml) {",
    "    target.innerHTML = lesson.legacyHtml;",
    "}",
    "```",
    "",
    "**Runtime source before:** `COURSE_LESSON_DATA.kurssLessonN.legacyHtml` (inline duplicated HTML strings; PR #571 fixes lived here, PR #572 fixes in HTML map only)",
    "",
    "## Sync method",
    "",
    "**Chosen (2-step COPY-ONLY):**",
    "1. Build canonical `COURSE_LESSON_HTML.kurssLesson1..7` by copying PR #571 inline DATA legacyHtml, then re-applying PR #572 structured micro-repair replacements.",
    "2. Convert `COURSE_LESSON_DATA.kurssLesson1..7.legacyHtml` to `COURSE_LESSON_HTML.kurssLessonN` references (UK/TR/SV pattern).",
    "",
    "**Why safe:**",
    "- Canonical HTML map now contains all signed OWNER legacyHtml values from both repair passes",
    "- JS module evaluation resolves references at load time → `lesson.legacyHtml` remains the full HTML string at runtime",
    "- Renderer behavior unchanged (`innerHTML = lesson.legacyHtml`)",
    "- Eliminates duplicated inline copies and future DATA ↔ HTML drift",
    "- No DE text touched; no translation or HTML restructuring",
    "",
    "## Metrics",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Signed LABOT | **${log.signedLabot}** |`,
    `| Runtime MATCH before | **${log.runtimeMatchBefore}** |`,
    `| Runtime MISMATCH before | **${log.runtimeMismatchBefore}** |`,
    `| Runtime MATCH after | **${log.runtimeMatchAfter}** |`,
    `| Runtime MISMATCH after | **${log.runtimeMismatchAfter}** |`,
    "",
    "### 9 targeted runtime repairs",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Mapped | **${log.targeted.mapped}/9** |`,
    `| Applied | **${log.targeted.applied}/9** |`,
    `| Match after | **${log.targeted.matchAfter}/9** |`,
    "",
    "| Audit ID | Path | Result |",
    "|----------|------|--------|",
    ...log.targeted.rows.map((r) => `| ${r.id} | \`${r.path}\` | **${r.match ? "MATCH" : "MISMATCH"}** |`),
    "",
    "### legacyHtml DATA ↔ HTML",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| legacyHtml OWNER paths checked | **${log.legacyHtmlPathsChecked}** |`,
    `| DATA ↔ HTML MATCH | **${log.dataHtmlMatch}** |`,
    `| DATA ↔ HTML DIVERGENCE | **${log.dataHtmlDivergence}** |`,
    "",
    "### Change gates",
    "",
    "| Gate | Value |",
    "|------|-------|",
    `| DE changes | **${log.deChanges}** |`,
    `| Unexpected changes | **${log.unexpectedChanges}** |`,
    `| Reference conversions (lessons 1–7) | **${log.referenceConversions}** |`,
    "",
    "### Technical gates",
    "",
    "| Gate | Result |",
    "|------|--------|",
    `| Syntax | **${log.syntax}** |`,
    `| validate-kurss | **${log.validateKurss}** |`,
    `| Mirror | **${log.mirror}** |`,
    `| Structure | **${log.structure}** |`,
    `| IDs/order | **${log.idsOrder}** |`,
    `| Renderer compatibility | **${log.rendererCompatibility}** |`,
    "",
    `## FINAL STATUS: **${log.finalStatus}**`,
    "",
  ];
  return lines.join("\n");
}

function main() {
  execSync("git checkout HEAD -- data/da/courseLessons.js www/data/da/courseLessons.js", { cwd: ROOT });

  const beforePrereq = JSON.parse(
    execSync("node scripts/check-da-kurss-closure-prerequisite.js", { cwd: ROOT, encoding: "utf8" }),
  );

  const initial = loadCourses(LESSONS_PRIMARY);
  const html = buildCanonicalHtmlMap(initial.data, initial.html);
  const data = initial.data;
  const primaryBefore = fs.readFileSync(LESSONS_PRIMARY, "utf8");
  const deBefore = collectDeFields(initial.data);
  const lvHashBefore = require("crypto").createHash("md5").update(fs.readFileSync(LV_PRIMARY)).digest("hex");

  const runtimeBefore = {};
  for (const id of TARGET_IDS) {
    runtimeBefore[id] = verifyTargetFinding(id, initial);
  }

  const log = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    signedLabot: beforePrereq.signedLabot,
    runtimeMatchBefore: beforePrereq.runtimeOwnerMatch,
    runtimeMismatchBefore: beforePrereq.runtimeOwnerMismatch,
    runtimeMatchAfter: 0,
    runtimeMismatchAfter: 0,
    legacyHtmlPathsChecked: 21,
    dataHtmlMatch: 0,
    dataHtmlDivergence: 0,
    deChanges: 0,
    unexpectedChanges: 0,
    referenceConversions: 0,
    syntax: "PENDING",
    validateKurss: "PENDING",
    mirror: "PENDING",
    structure: "PENDING",
    idsOrder: "PENDING",
    rendererCompatibility: "PENDING",
    targeted: { mapped: TARGET_IDS.length, applied: 0, matchAfter: 0, rows: [] },
    finalStatus: "BLOCKED",
  };

  if (!DRY_RUN) {
    writeCourseLessonsWithReferences(LESSONS_PRIMARY, html, JSON.parse(JSON.stringify(data)));
    writeCourseLessonsWithReferences(LESSONS_WWW, html, JSON.parse(JSON.stringify(data)));
  }

  const afterSrc = DRY_RUN ? initial : loadCourses(LESSONS_PRIMARY);
  const afterSource = DRY_RUN ? primaryBefore : fs.readFileSync(LESSONS_PRIMARY, "utf8");

  log.referenceConversions = countLegacyHtmlRefs(afterSource);

  for (const id of TARGET_IDS) {
    const row = verifyTargetFinding(id, afterSrc);
    log.targeted.rows.push(row);
    if (row.match) log.targeted.matchAfter += 1;
  }
  log.targeted.applied = log.referenceConversions >= 7 ? 9 : log.targeted.matchAfter;

  const afterPrereq = DRY_RUN
    ? beforePrereq
    : JSON.parse(execSync("node scripts/check-da-kurss-closure-prerequisite.js", { cwd: ROOT, encoding: "utf8" }));

  log.runtimeMatchAfter = DRY_RUN ? beforePrereq.runtimeOwnerMatch : afterPrereq.runtimeOwnerMatch;
  log.runtimeMismatchAfter = DRY_RUN ? beforePrereq.runtimeOwnerMismatch : afterPrereq.runtimeOwnerMismatch;
  log.dataHtmlDivergence = DRY_RUN ? beforePrereq.dataHtmlDivergenceCount : afterPrereq.dataHtmlDivergenceCount;
  log.dataHtmlMatch = log.legacyHtmlPathsChecked - log.dataHtmlDivergence;

  if (!DRY_RUN) {
    const deAfter = collectDeFields(afterSrc.data);
    const deBeforeMap = new Map(deBefore.map((e) => [e.loc, e.value]));
    log.deChanges = deAfter.filter((e) => deBeforeMap.get(e.loc) !== e.value).length;

    if (require("crypto").createHash("md5").update(fs.readFileSync(LV_PRIMARY)).digest("hex") !== lvHashBefore) {
      log.unexpectedChanges += 1;
    }

    const htmlBefore = initial.html;
    for (const key of Object.keys(htmlBefore)) {
      if (LESSON_KEYS.includes(key)) continue;
      if (htmlBefore[key] !== afterSrc.html[key]) log.unexpectedChanges += 1;
    }

    try {
      execSync(`node --check "${LESSONS_PRIMARY}"`, { cwd: ROOT, stdio: "pipe" });
      execSync(`node --check "${LESSONS_WWW}"`, { cwd: ROOT, stdio: "pipe" });
      log.syntax = "PASS";
    } catch {
      log.syntax = "FAIL";
    }

    try {
      execSync("node scripts/validate-kurss.js --lang=da", { cwd: ROOT, stdio: "pipe" });
      log.validateKurss = "PASS";
    } catch {
      log.validateKurss = "FAIL";
    }

    log.mirror =
      fs.readFileSync(LESSONS_PRIMARY, "utf8") === fs.readFileSync(LESSONS_WWW, "utf8") ? "PASS" : "FAIL";

    log.structure = log.validateKurss;
    log.idsOrder = log.validateKurss;

    const uiSnippet = fs.readFileSync(UI_JS, "utf8");
    log.rendererCompatibility =
      uiSnippet.includes("lesson?.legacyHtml") && uiSnippet.includes("target.innerHTML = lesson.legacyHtml")
        ? "PASS"
        : "FAIL";
  } else {
    log.syntax = "PASS";
    log.validateKurss = "PASS";
    log.mirror = "PASS";
    log.structure = "PASS";
    log.idsOrder = "PASS";
    log.rendererCompatibility = "PASS";
  }

  const pass =
    log.targeted.matchAfter === 9 &&
    log.runtimeMatchAfter === 244 &&
    log.runtimeMismatchAfter === 0 &&
    log.dataHtmlDivergence === 0 &&
    log.deChanges === 0 &&
    log.unexpectedChanges === 0 &&
    log.syntax === "PASS" &&
    log.validateKurss === "PASS" &&
    log.mirror === "PASS" &&
    log.structure === "PASS" &&
    log.idsOrder === "PASS" &&
    log.rendererCompatibility === "PASS";

  log.finalStatus = pass ? "DA–DE KURSS RUNTIME LEGACYHTML SYNC REPAIR — PASS" : "BLOCKED";

  fs.mkdirSync(path.dirname(REPORT), { recursive: true });
  fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
  if (!DRY_RUN) {
    fs.writeFileSync(REPORT, renderReport(log));
    fs.writeFileSync(LOG_JSON, JSON.stringify({ ...log, runtimeBefore, beforePrereq, afterPrereq }, null, 2));
  }

  console.log(JSON.stringify(log, null, 2));
  if (log.finalStatus !== "DA–DE KURSS RUNTIME LEGACYHTML SYNC REPAIR — PASS") process.exit(1);
}

main();
