#!/usr/bin/env node
"use strict";
/**
 * Targeted regression check for DA Kurss OWNER repair apply.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const {
  getAt,
  classifyTarget,
  uiRelativePath,
  resolveLessonsRoot,
  getLegacyHtml,
  legacyHtmlContainsFragment,
} = require("./lib/da-kurss-owner-path");

const APPLY_LOG = path.join(ROOT, "reports/temp/da-kurss-owner-apply-log.json");
const OUT = path.join(ROOT, "reports/da-kurss-owner-repair-targeted-regression.md");

function repair(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    '$1",$2',
  );
}

function loadAll() {
  let lessonsCode = fs.readFileSync(path.join(ROOT, "data/da/courseLessons.js"), "utf8");
  lessonsCode = repair(lessonsCode);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(lessonsCode, ctx);
  const data = ctx.window.COURSE_LESSON_DATA || {};
  const html = ctx.window.COURSE_LESSON_HTML || {};

  const trainingCode = fs.readFileSync(path.join(ROOT, "data/da/courseTrainingCards.js"), "utf8");
  const tctx = { window: {} };
  vm.createContext(tctx);
  vm.runInContext(trainingCode, tctx);

  const uiCode = fs.readFileSync(path.join(ROOT, "languages/da/ui.js"), "utf8");
  const uctx = { window: {} };
  vm.createContext(uctx);
  vm.runInContext(uiCode, uctx);

  return { data, html, training: tctx.window, ui: uctx.window.LANGUAGE_UI_STRINGS || {} };
}

function legacyHtmlLessonKey(entryPath) {
  const m = String(entryPath || "").match(/^COURSE_LESSON_DATA\.(\w+)\.legacyHtml$/);
  return m ? m[1] : null;
}

function htmlMapKey(entryPath) {
  const m = String(entryPath || "").match(/^COURSE_LESSON_HTML\.(\w+)/);
  return m ? m[1] : String(entryPath || "").replace(/^COURSE_LESSON_HTML\./, "").replace(/\s::\s.*$/, "");
}

function isHtmlMapFragmentPath(entryPath) {
  return /^COURSE_LESSON_HTML\.\w+(?:\s::\s.+)?$/.test(String(entryPath || ""));
}

function readActual(entry, src) {
  const lessonKey = legacyHtmlLessonKey(entry.path);
  if (lessonKey) {
    const full = getLegacyHtml(src.data, src.html, lessonKey);
    if (typeof full !== "string") return undefined;
    return legacyHtmlContainsFragment(full, entry.appliedNew) ? entry.appliedNew : undefined;
  }
  if (isHtmlMapFragmentPath(entry.path)) {
    const full = src.html[htmlMapKey(entry.path)];
    if (typeof full !== "string") return undefined;
    return legacyHtmlContainsFragment(full, entry.appliedNew) ? entry.appliedNew : undefined;
  }
  const target = classifyTarget(entry.path);
  if (target === "ui") return getAt(src.ui, uiRelativePath(entry.path));
  if (target === "training") return getAt(src.training, entry.normalizedPath);
  if (target === "lessons") {
    const { root, relPath } = resolveLessonsRoot(entry.path, src.data, src.html);
    return getAt(root, relPath);
  }
  return undefined;
}

function verifyApplied(entry, src) {
  const actual = readActual(entry, src);
  if (actual === entry.appliedNew) return true;
  const lessonKey = legacyHtmlLessonKey(entry.path);
  if (lessonKey || isHtmlMapFragmentPath(entry.path)) {
    const full = lessonKey
      ? getLegacyHtml(src.data, src.html, lessonKey)
      : src.html[htmlMapKey(entry.path)];
    return typeof full === "string" && legacyHtmlContainsFragment(full, entry.appliedNew);
  }
  return false;
}

function main() {
  const log = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
  const src = loadAll();
  const fails = [];
  for (const entry of log.applied || []) {
    if (!verifyApplied(entry, src)) {
      const actual = readActual(entry, src);
      fails.push({ findingId: entry.findingId, path: entry.path, expected: entry.appliedNew, actual });
    }
  }

  const md = [
    "# DA–DE Kurss — OWNER repair targeted regression",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Applied checked | **${(log.applied || []).length}** |`,
    `| PASS | **${(log.applied || []).length - fails.length}** |`,
    `| FAIL | **${fails.length}** |`,
    "",
    fails.length
      ? "## Failures\n\n" + fails.map((f) => `- \`${f.findingId}\` \`${f.path}\` expected \`${f.expected}\` got \`${f.actual}\``).join("\n")
      : "## Verdict\n\n**PASS** — all applied OWNER values present in production.",
    "",
  ].join("\n");

  fs.writeFileSync(OUT, md, "utf8");
  console.log(JSON.stringify({ checked: (log.applied || []).length, fails: fails.length, out: OUT }, null, 2));
  if (fails.length) process.exit(1);
}

main();
