#!/usr/bin/env node
"use strict";
/**
 * Targeted regression check for DA Kurss final post-repair OWNER repair apply.
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
} = require("./lib/da-kurss-owner-path");

const APPLY_LOG = path.join(ROOT, "reports/temp/da-kurss-final-post-repair-owner-apply-log.json");
const OUT = path.join(ROOT, "reports/da-kurss-final-post-repair-owner-repair-targeted-regression.md");

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

function readActual(entry, src) {
  const target = classifyTarget(entry.path);
  if (target === "ui") return getAt(src.ui, uiRelativePath(entry.path));
  if (target === "training") return getAt(src.training, entry.normalizedPath);
  if (target === "lessons") {
    const { root, relPath } = resolveLessonsRoot(entry.path, src.data, src.html);
    return getAt(root, relPath);
  }
  return undefined;
}

function main() {
  const log = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
  const src = loadAll();
  const fails = [];
  for (const entry of log.applied || []) {
    const actual = readActual(entry, src);
    if (actual !== entry.appliedNew) {
      fails.push({ findingId: entry.findingId, path: entry.path, expected: entry.appliedNew, actual });
    }
  }

  const md = [
    "# DA–DE Kurss — final post-repair OWNER repair targeted regression",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Applied checked | **${(log.applied || []).length}** |`,
    `| PASS | **${(log.applied || []).length - fails.length}** |`,
    `| FAIL | **${fails.length}** |`,
    "",
    fails.length ? "## Failures" : "## Result",
    "",
    fails.length ? fails.map((f) => `- \`${f.findingId}\` \`${f.path}\``).join("\n") : "All applied OWNER values match production.",
    "",
  ].join("\n");

  fs.writeFileSync(OUT, md);
  console.log(JSON.stringify({ checked: (log.applied || []).length, pass: (log.applied || []).length - fails.length, fail: fails.length }, null, 2));
  if (fails.length) process.exit(1);
}

main();
