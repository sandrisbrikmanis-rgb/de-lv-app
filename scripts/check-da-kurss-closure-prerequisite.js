#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { parseAllSignedDecisions, normalizeText } = require("../scripts/lib/da-kurss-final-post-repair-decisions");
const {
  getAt,
  classifyTarget,
  uiRelativePath,
  resolveLessonsRoot,
  legacyHtmlContainsFragment,
} = require("../scripts/lib/da-kurss-owner-path");

const MICRO_LOG = path.join(ROOT, "reports/temp/da-kurss-9-legacyhtml-structured-micro-repair-log.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/da-kurss-final-post-repair-owner-apply-log.json");
const AUDIT_JSON = path.join(ROOT, "reports/temp/da-kurss-final-post-repair-audit.json");

function repair(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    '$1",$2',
  );
}

function loadSrc() {
  let code = fs.readFileSync(path.join(ROOT, "data/da/courseLessons.js"), "utf8");
  code = repair(code);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const tcode = fs.readFileSync(path.join(ROOT, "data/da/courseTrainingCards.js"), "utf8");
  const tctx = { window: {} };
  vm.createContext(tctx);
  vm.runInContext(tcode, tctx);
  const ucode = fs.readFileSync(path.join(ROOT, "languages/da/ui.js"), "utf8");
  const uctx = { window: {} };
  vm.createContext(uctx);
  vm.runInContext(ucode, uctx);
  return {
    data: ctx.window.COURSE_LESSON_DATA,
    html: ctx.window.COURSE_LESSON_HTML,
    training: tctx.window,
    ui: uctx.window.LANGUAGE_UI_STRINGS,
  };
}

function getRuntimeLegacyHtml(data, html, lessonKey) {
  const inline = data?.[lessonKey]?.legacyHtml;
  if (typeof inline === "string" && inline.trim()) return inline;
  return html?.[lessonKey] || "";
}

function verifyLegacyHtmlPath(pathStr, ownerNew, src, microRow, applyEntry) {
  const lessonKey = pathStr.match(/kurssLesson\d+/)?.[0];
  const runtimeHtml = getRuntimeLegacyHtml(src.data, src.html, lessonKey);
  const htmlMap = src.html?.[lessonKey] || "";

  if (microRow?.replacements?.length) {
    const runtimeOk = microRow.replacements.every(
      (rep) => rep.note === "UNCHANGED" || legacyHtmlContainsFragment(runtimeHtml, rep.ownerNew),
    );
    return { runtimeOk, htmlMapOk: microRow.replacements.every((rep) => rep.note === "UNCHANGED" || legacyHtmlContainsFragment(htmlMap, rep.ownerNew)) };
  }
  if (applyEntry?.appliedNew) {
    return {
      runtimeOk: legacyHtmlContainsFragment(runtimeHtml, applyEntry.appliedNew),
      htmlMapOk: legacyHtmlContainsFragment(htmlMap, applyEntry.appliedNew),
    };
  }
  const parts = String(ownerNew).split(";").map((p) => p.trim()).filter(Boolean);
  if (parts.length > 1) {
    return {
      runtimeOk: parts.every((p) => legacyHtmlContainsFragment(runtimeHtml, p)),
      htmlMapOk: parts.every((p) => legacyHtmlContainsFragment(htmlMap, p)),
    };
  }
  return {
    runtimeOk: legacyHtmlContainsFragment(runtimeHtml, ownerNew),
    htmlMapOk: legacyHtmlContainsFragment(htmlMap, ownerNew),
  };
}

function readActual(pathStr, src) {
  const target = classifyTarget(pathStr);
  if (target === "ui") return getAt(src.ui, uiRelativePath(pathStr));
  if (target === "training") return getAt(src.training, pathStr.replace(/\[(\d+)\]/g, ".$1"));
  if (target === "lessons") {
    const { root, relPath } = resolveLessonsRoot(pathStr, src.data, src.html);
    return getAt(root, relPath);
  }
  return undefined;
}

const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
const auditById = new Map(audit.findings.map((f) => [f.id, f]));
const { rows } = parseAllSignedDecisions();
const labot = rows.filter((r) => r.status === "LABOT");
const apply = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
const micro = JSON.parse(fs.readFileSync(MICRO_LOG, "utf8"));
const appliedById = new Map(apply.applied.map((e) => [e.findingId, e]));
const microById = new Map(micro.rows.filter((r) => r.result === "APPLIED").map((r) => [r.auditId, r]));
const src = loadSrc();

let runtimeMatch = 0;
let runtimeMismatch = 0;
let htmlMapMatch = 0;
const runtimeMiss = [];
const dataHtmlDivergence = [];

for (const row of labot) {
  const pathStr = auditById.get(row.auditId)?.path || row.path;
  const ownerNew = normalizeText(row.ownerDecision);

  if (pathStr.includes(".legacyHtml#")) {
    const v = verifyLegacyHtmlPath(pathStr, ownerNew, src, microById.get(row.auditId), appliedById.get(row.auditId));
    if (v.runtimeOk) runtimeMatch++;
    else {
      runtimeMismatch++;
      runtimeMiss.push({ id: row.auditId, path: pathStr, htmlMapOk: v.htmlMapOk });
    }
    if (v.htmlMapOk) htmlMapMatch++;
    if (v.runtimeOk !== v.htmlMapOk) {
      dataHtmlDivergence.push({ id: row.auditId, runtimeOk: v.runtimeOk, htmlMapOk: v.htmlMapOk });
    }
    continue;
  }

  const actual = readActual(pathStr, src);
  if (normalizeText(actual) === ownerNew) runtimeMatch++;
  else {
    runtimeMismatch++;
    runtimeMiss.push({ id: row.auditId, path: pathStr, actual: String(actual || "").slice(0, 50) });
  }
}

console.log(
  JSON.stringify(
    {
      signedLabot: labot.length,
      apply571Applied: apply.applied.length,
      apply572Applied: micro.applied,
      runtimeOwnerMatch: runtimeMatch,
      runtimeOwnerMismatch: runtimeMismatch,
      legacyHtmlHtmlMapMatch: htmlMapMatch,
      dataHtmlDivergenceCount: dataHtmlDivergence.length,
      prerequisitePass: runtimeMatch === 244,
      runtimeMiss: runtimeMiss.slice(0, 25),
      dataHtmlDivergence: dataHtmlDivergence.slice(0, 15),
    },
    null,
    2,
  ),
);
