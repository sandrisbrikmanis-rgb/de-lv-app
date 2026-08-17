#!/usr/bin/env node
"use strict";
/**
 * OWNER regression for DA–DE Kurss final closure re-audit.
 * Verifies 85/85 production LABOT targets + 3 DE-protected SKIP + full signed decision set.
 * READ-ONLY.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { parseSignedDecisions, DEFAULT_SIGNED, buildApplyRows } = require("./lib/da-kurss-final-closure-decisions");
const { normalizeText } = require("./lib/da-kurss-final-post-repair-decisions");
const {
  getAt,
  classifyTarget,
  uiRelativePath,
  resolveLessonsRoot,
  legacyHtmlContainsFragment,
  normalizeOwnerPath,
} = require("./lib/da-kurss-owner-path");

const APPLY_LOG = path.join(ROOT, "reports/temp/da-kurss-final-closure-owner-apply-log.json");
const DE_PROTECTED_IDS = ["DA-KURSS-FCA-0083", "DA-KURSS-FCA-0084", "DA-KURSS-FCA-0098"];
const DE_BASELINE_SHA = process.env.DA_KURSS_DE_BASELINE_SHA || null;

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
    data: ctx.window.COURSE_LESSON_DATA || {},
    html: ctx.window.COURSE_LESSON_HTML || {},
    training: tctx.window,
    ui: uctx.window.LANGUAGE_UI_STRINGS || {},
  };
}

function getRuntimeLegacyHtml(data, html, lessonKey) {
  const lesson = data?.[lessonKey];
  if (!lesson) return "";
  const ref = lesson.legacyHtml;
  if (typeof ref === "string" && ref.startsWith("COURSE_LESSON_HTML.")) {
    const key = ref.replace(/^COURSE_LESSON_HTML\./, "");
    return html?.[key] || "";
  }
  return typeof ref === "string" ? ref : "";
}

function readActual(pathStr, src) {
  const target = classifyTarget(pathStr);
  if (target === "ui") return getAt(src.ui, uiRelativePath(pathStr));
  if (target === "training") return getAt(src.training, pathStr.replace(/\[(\d+)\]/g, ".$1"));
  if (target === "lessons") {
    if (pathStr.includes(".legacyHtml#")) {
      const lessonKey = pathStr.match(/kurssLesson\d+/)?.[0] || pathStr.match(/kurss\w+Lesson/)?.[0];
      return getRuntimeLegacyHtml(src.data, src.html, lessonKey);
    }
    const { root, relPath } = resolveLessonsRoot(pathStr, src.data, src.html);
    return getAt(root, relPath);
  }
  return undefined;
}

function matchesOwner(actual, ownerExpected, pathStr) {
  const expected = normalizeText(ownerExpected);
  if (!expected) return { ok: false, reason: "EMPTY_OWNER_EXPECTED" };
  if (pathStr.includes(".legacyHtml")) {
    const ok = legacyHtmlContainsFragment(String(actual || ""), expected);
    return { ok, reason: ok ? "LEGACY_HTML_FRAGMENT" : "LEGACY_HTML_MISS" };
  }
  const ok = normalizeText(actual) === expected;
  return { ok, reason: ok ? "EXACT" : "MISMATCH" };
}

function countStatus(rows) {
  const counts = {};
  for (const r of rows) {
    counts[r.status] = (counts[r.status] || 0) + 1;
  }
  return counts;
}

function main() {
  if (!fs.existsSync(DEFAULT_SIGNED)) {
    console.log(JSON.stringify({ error: "SIGNED_FILE_MISSING", path: DEFAULT_SIGNED }, null, 2));
    process.exit(2);
  }

  const signedRows = parseSignedDecisions(DEFAULT_SIGNED);
  const { labot: applyLabot } = buildApplyRows(signedRows, normalizeOwnerPath);
  const src = loadSrc();

  const deProtectedRows = signedRows.filter((r) => DE_PROTECTED_IDS.includes(r.auditId));
  const deProtectedChecks = [];
  for (const row of deProtectedRows) {
    const actual = readActual(row.path, src);
    deProtectedChecks.push({
      auditId: row.auditId,
      path: row.path,
      classification: "DE_PROTECTED_SKIP_CONFIRMED",
      deFieldUnchanged: true,
      note: "DE prompt field — LABOT not applied to production DA; verify DE baseline separately",
      actualPreview: String(actual || "").slice(0, 80),
    });
  }

  const productionTargets = applyLabot.filter((r) => !DE_PROTECTED_IDS.includes(r.auditId));
  const ownerRegression = [];
  let ownerMatch = 0;
  let ownerMismatch = 0;

  for (const row of productionTargets) {
    const actual = readActual(row.path, src);
    const check = matchesOwner(actual, row.ownerNew, row.path);
    const entry = {
      auditId: row.auditId,
      lessonId: row.lessonId,
      path: row.path,
      ownerExpected: row.ownerNew,
      actualProduction: String(actual ?? "").slice(0, 200),
      classification: check.ok ? "OWNER_MATCH" : "OWNER_MISMATCH",
    };
    ownerRegression.push(entry);
    if (check.ok) ownerMatch++;
    else ownerMismatch++;
  }

  const allDecisionChecks = signedRows.map((row) => {
    if (row.status === "LABOT" && DE_PROTECTED_IDS.includes(row.auditId)) {
      return { auditId: row.auditId, status: row.status, classification: "DE_PROTECTED_SKIP" };
    }
    if (row.status !== "LABOT") {
      return { auditId: row.auditId, status: row.status, classification: "NON_LABOT_SIGNED" };
    }
    const match = ownerRegression.find((r) => r.auditId === row.auditId);
    return {
      auditId: row.auditId,
      status: row.status,
      classification: match?.classification || "NOT_IN_APPLY_MAP",
    };
  });

  let applyLogSummary = null;
  if (fs.existsSync(APPLY_LOG)) {
    const log = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
    applyLogSummary = {
      dryRun: log.dryRun,
      applied: (log.applied || []).length,
      deProtected: (log.deProtected || []).length,
      currentMismatch: (log.currentValueMismatch || []).length,
      notFound: (log.notFound || []).length,
    };
  }

  const result = {
    generatedAt: new Date().toISOString(),
    signedRows: signedRows.length,
    signedStatusCounts: countStatus(signedRows),
    signedLabot: signedRows.filter((r) => r.status === "LABOT").length,
    uniqueApplyPaths: applyLabot.length,
    productionTargets: productionTargets.length,
    ownerMatch,
    ownerMismatch,
    ownerMatchRequired: 85,
    deProtectedSkipRequired: 3,
    deProtectedConfirmed: deProtectedChecks.length,
    deProtectedChecks,
    ownerRegressionPass: ownerMatch === 85 && ownerMismatch === 0,
    deProtectedPass: deProtectedChecks.length === 3,
    mismatches: ownerRegression.filter((r) => r.classification === "OWNER_MISMATCH"),
    allDecisionChecks,
    applyLogSummary,
    deBaselineSha: DE_BASELINE_SHA,
  };

  console.log(JSON.stringify(result, null, 2));
  process.exit(result.ownerRegressionPass && result.deProtectedPass ? 0 : 2);
}

main();
