#!/usr/bin/env node
"use strict";
/**
 * ET–DE Kurss final targeted regression (post OWNER closure + PR #637 repair).
 * Usage: node scripts/audit-et-kurss-final-targeted-regression.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const {
  getAt,
  classifyTarget,
  uiRelativePath,
  resolveLessonsRoot,
  getLegacyHtml,
  legacyHtmlContainsFragment,
  normalizeCompare,
  isLegacyHtmlGranularPath,
  legacyHtmlGranularLessonKey,
  legacyHtmlLessonKey,
} = require("./lib/et-kurss-owner-path");

const RESOLVED = path.join(ROOT, "reports/temp/et-kurss-owner-resolved.json");
const APPLY_MAP = path.join(ROOT, "reports/temp/et-kurss-owner-apply-map.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-kurss-owner-apply-log.json");
const REPORT_MD = path.join(ROOT, "reports/et-kurss-final-targeted-regression.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/et-kurss-final-targeted-regression.json");
const MERGE_BASE = process.env.ET_KURSS_MERGE_BASE || "0cfef081";
const BEFORE_LESSONS = process.env.ET_KURSS_BEFORE_LESSONS || "/tmp/et-kurss-before-courseLessons.js";
const BEFORE_UI = process.env.ET_KURSS_BEFORE_UI || "/tmp/et-kurss-before-ui.js";
const BEFORE_ROOT_UI = process.env.ET_KURSS_BEFORE_ROOT_UI || "/tmp/et-kurss-before-root-ui.js";

const EXPECTED_OWNER = 323;
const EXPECTED_LABOT = 310;
const EXPECTED_NELABOT = 5;
const EXPECTED_FP = 8;
const BLOCKED_NELABOT = new Set(["ET-KURSS-0226", "ET-KURSS-0227"]);

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const TRAINING_DECK_KEYS = [
  ...Array.from({ length: 6 }, (_, i) => `lesson${i + 1}TrainingCardsEt`),
  "lesson7ExerciseCardsEt",
];

function repairEtCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    '$1",$2',
  );
}

function loadCourses(filePath) {
  let code = fs.readFileSync(filePath, "utf8");
  code = repairEtCourseLessonsSource(code);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return {
    html: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_HTML || {})),
    data: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_DATA || {})),
  };
}

function loadRootTraining(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const decks = {};
  const re = /const (lesson\d+TrainingCardsEt) = (\[[\s\S]*?\n\];)/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    try {
      decks[m[1]] = eval(m[2]);
    } catch {
      /* skip */
    }
  }
  const exMatch = code.match(/const lesson7ExerciseCardsEt = (\[[\s\S]*?\n\];)/);
  if (exMatch) {
    try {
      decks.lesson7ExerciseCardsEt = eval(exMatch[1]);
    } catch {
      /* skip */
    }
  }
  return decks;
}

function loadUi(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return JSON.parse(JSON.stringify(ctx.window.LANGUAGE_UI_STRINGS || {}));
}

function ensureBefore(ref, gitPath) {
  if (!fs.existsSync(ref)) {
    execSync(`git show ${MERGE_BASE}:${gitPath} > ${ref}`, { cwd: ROOT, stdio: "pipe" });
  }
}

function readPathValue(pathStr, src) {
  const { data, html, rootTraining, ui } = src;
  if (isLegacyHtmlGranularPath(pathStr)) {
    const lessonKey = legacyHtmlGranularLessonKey(pathStr);
    const full = getLegacyHtml(data, html, lessonKey);
    return typeof full === "string" ? full : undefined;
  }
  const wholeLegacy = legacyHtmlLessonKey(pathStr);
  if (wholeLegacy) {
    return getLegacyHtml(data, html, wholeLegacy);
  }
  const target = classifyTarget(pathStr);
  if (target === "ui") return getAt(ui, uiRelativePath(pathStr));
  if (target === "rootTraining") return getAt(rootTraining, pathStr);
  if (target === "lessons") {
    const { root, relPath } = resolveLessonsRoot(pathStr, data, html);
    return getAt(root, relPath);
  }
  return undefined;
}

function readLabotValue(row, src) {
  if (isLegacyHtmlGranularPath(row.path)) {
    const lessonKey = legacyHtmlGranularLessonKey(row.path);
    const full = getLegacyHtml(src.data, src.html, lessonKey);
    if (typeof full !== "string") return undefined;
    return legacyHtmlContainsFragment(full, row.ownerNew) ? row.ownerNew : undefined;
  }
  return readPathValue(row.path, src);
}

function applyKey(pathStr) {
  return pathStr;
}

function walkDiff(before, after, prefix = "", out = []) {
  if (before === after) return out;
  if (typeof before !== typeof after || before == null || after == null) {
    out.push({ path: prefix, before, after });
    return out;
  }
  if (typeof before === "string" || typeof before === "number" || typeof before === "boolean") {
    if (before !== after) out.push({ path: prefix, before, after });
    return out;
  }
  if (Array.isArray(before) && Array.isArray(after)) {
    const len = Math.max(before.length, after.length);
    for (let i = 0; i < len; i++) walkDiff(before[i], after[i], `${prefix}[${i}]`, out);
    return out;
  }
  if (typeof before === "object" && typeof after === "object") {
    const keys = new Set([...Object.keys(before || {}), ...Object.keys(after || {})]);
    for (const k of keys) walkDiff(before[k], after[k], prefix ? `${prefix}.${k}` : k, out);
  }
  return out;
}

function isLvRemnant(text) {
  const t = String(text || "");
  if (!LV_DIAC.test(t)) return false;
  // Macron pronunciation notation in parentheses is project convention.
  if (/\([^)]*[īūāēō][^)]*\)/.test(t)) return false;
  return true;
}

function isDeOnlyString(text) {
  const t = String(text || "").trim();
  if (!t || /\s[—–-]\s/.test(t)) return false;
  if (/[āēīūģķļņĀĒĪŪĢĶĻŅäöüõÄÖÜ]/.test(t)) return false;
  return /^[\s"„"'«»A-Za-zÄÖÜäöüß.,!?;:()0-9]+$/.test(t.replace(/<[^>]+>/g, " "));
}

function extractDeSnapshots(data, html, rootTraining) {
  const fields = [];
  const add = (loc, value) => {
    if (typeof value === "string" && value.trim() && isDeOnlyString(value)) {
      fields.push({ loc, value });
    }
  };
  for (const [lessonKey, lesson] of Object.entries(data)) {
    if (!lesson?.sections) continue;
    lesson.sections.forEach((section, si) => {
      if (Array.isArray(section.items)) {
        section.items.forEach((item, ii) => add(`${lessonKey}.sections[${si}].items[${ii}]`, item));
      }
      if (Array.isArray(section.cards)) {
        section.cards.forEach((card, ci) => {
          for (const key of ["prompt", "answer", "back", "de", "base"]) {
            if (card[key] !== undefined) add(`${lessonKey}.sections[${si}].cards[${ci}].${key}`, card[key]);
          }
        });
      }
    });
  }
  for (const [key, htmlStr] of Object.entries(html)) {
    if (typeof htmlStr !== "string") continue;
    [...htmlStr.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)].forEach((m, i) => {
      add(`html.${key}.example[${i}]`, m[1].trim());
    });
  }
  for (const deckKey of TRAINING_DECK_KEYS) {
    const deck = rootTraining[deckKey] || [];
    deck.forEach((card, i) => {
      if (card?.back) add(`${deckKey}[${i}].back`, card.back);
      if (card?.infinitive) add(`${deckKey}[${i}].infinitive`, card.infinitive);
    });
  }
  return fields;
}

function compareDeSnapshots(before, after) {
  const beforeMap = new Map(before.map((e) => [e.loc, e.value]));
  const changes = [];
  for (const [loc, value] of beforeMap) {
    const afterVal = after.find((e) => e.loc === loc)?.value;
    if (afterVal !== value) changes.push({ loc, before: value, after: afterVal });
  }
  return changes;
}

function main() {
  ensureBefore(BEFORE_LESSONS, "data/et/courseLessons.js");
  ensureBefore(BEFORE_UI, "languages/et/ui.js");
  ensureBefore(BEFORE_ROOT_UI, "ui.js");

  const resolved = JSON.parse(fs.readFileSync(RESOLVED, "utf8"));
  const applyMap = JSON.parse(fs.readFileSync(APPLY_MAP, "utf8"));
  const applyLog = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
  const ownerRows = resolved.findings || [];

  const beforeSrc = {
    ...loadCourses(BEFORE_LESSONS),
    rootTraining: loadRootTraining(BEFORE_ROOT_UI),
    ui: loadUi(BEFORE_UI),
  };
  const afterSrc = {
    ...loadCourses(path.join(ROOT, "data/et/courseLessons.js")),
    rootTraining: loadRootTraining(path.join(ROOT, "ui.js")),
    ui: loadUi(path.join(ROOT, "languages/et/ui.js")),
  };

  const findings = [];
  let fid = 0;
  function add(severity, auditId, pathStr, problem, detail = {}) {
    fid++;
    findings.push({
      id: `ET-KURSS-REG-${String(fid).padStart(4, "0")}`,
      severity,
      auditId,
      path: pathStr,
      problem,
      ...detail,
    });
  }

  let labotRetained = 0;
  let nelabotRetained = 0;
  let fpRetained = 0;
  const meta = resolved.meta || {};
  const pendingCount = ownerRows.filter((r) => r.status === "PENDING").length;
  const nsrCount = ownerRows.filter((r) => r.status === "NEEDS_SOURCE_REVIEW").length;
  const ownerBacklogFinal = pendingCount + nsrCount;

  const expectedLabotPaths = new Set((applyMap.apply || []).map((r) => applyKey(r.path)));

  for (const row of ownerRows) {
    if (row.status === "LABOT") {
      const actual = readLabotValue(row, afterSrc);
      if (normalizeCompare(actual) === normalizeCompare(row.ownerNew)) labotRetained++;
      else {
        add("HIGH", row.id, row.path, "LABOT OWNER NEW mismatch", {
          expected: String(row.ownerNew).slice(0, 120),
          actual: String(actual).slice(0, 120),
        });
      }
      if (isLvRemnant(actual)) {
        add("MEDIUM", row.id, row.path, "LV remnant in LABOT field after repair", {
          sample: String(actual).slice(0, 100),
        });
      }
    }

    if (row.status === "NELABOT" && row.path) {
      const beforeVal = readPathValue(row.path, beforeSrc);
      const afterVal = readPathValue(row.path, afterSrc);
      const unchanged = normalizeCompare(beforeVal) === normalizeCompare(afterVal);
      const matchesCurrent = normalizeCompare(afterVal) === normalizeCompare(row.currentEt);
      if (unchanged && matchesCurrent) nelabotRetained++;
      else {
        add("HIGH", row.id, row.path, "NELABOT field changed or CURRENT_ET drift", {
          before: String(beforeVal).slice(0, 100),
          after: String(afterVal).slice(0, 100),
          expectedCurrent: String(row.currentEt).slice(0, 100),
        });
      }
      if (BLOCKED_NELABOT.has(row.id) && !unchanged) {
        add("HIGH", row.id, row.path, "Blocked NELABOT row changed during repair", {
          before: String(beforeVal).slice(0, 100),
          after: String(afterVal).slice(0, 100),
        });
      }
    }

    if (row.status === "FALSE_POSITIVE") {
      if (!row.path) {
        fpRetained++;
        continue;
      }
      if (legacyHtmlLessonKey(row.path) && !row.ownerNew) {
        const afterHtml = readPathValue(row.path, afterSrc);
        if (typeof afterHtml === "string" && !afterHtml.includes("(OWNER: Estonian replacement")) {
          fpRetained++;
        } else {
          add("HIGH", row.id, row.path, "FALSE_POSITIVE whole legacyHtml improperly replaced");
        }
        continue;
      }
      const beforeVal = readPathValue(row.path, beforeSrc);
      const afterVal = readPathValue(row.path, afterSrc);
      if (normalizeCompare(beforeVal) === normalizeCompare(afterVal)) fpRetained++;
      else {
        add("HIGH", row.id, row.path, "FALSE_POSITIVE field changed during apply", {
          before: String(beforeVal).slice(0, 100),
          after: String(afterVal).slice(0, 100),
        });
      }
    }
  }

  if (pendingCount > 0) add("CRITICAL", "OWNER", "pending", `${pendingCount} PENDING rows remain`);
  if (nsrCount > 0) add("CRITICAL", "OWNER", "nsr", `${nsrCount} NEEDS_SOURCE_REVIEW rows remain`);
  if (meta.OWNER_BACKLOG_FINAL !== 0) add("CRITICAL", "OWNER", "backlog", `OWNER_BACKLOG_FINAL=${meta.OWNER_BACKLOG_FINAL}`);

  const deBefore = extractDeSnapshots(beforeSrc.data, beforeSrc.html, beforeSrc.rootTraining);
  const deAfter = extractDeSnapshots(afterSrc.data, afterSrc.html, afterSrc.rootTraining);
  const deChanges = compareDeSnapshots(deBefore, deAfter).length;
  if (deChanges > 0) add("CRITICAL", "ALL", "de.snapshots", `${deChanges} DE-only string changes`, { deChanges });

  let unexpectedChanges = 0;
  const dataDiffs = walkDiff(beforeSrc.data, afterSrc.data, "COURSE_LESSON_DATA");
  const htmlDiffs = walkDiff(beforeSrc.html, afterSrc.html, "COURSE_LESSON_HTML");
  const uiDiffs = walkDiff(beforeSrc.ui, afterSrc.ui, "LANGUAGE_UI_STRINGS");
  const trainingDiffs = walkDiff(beforeSrc.rootTraining, afterSrc.rootTraining, "rootTraining");

  for (const d of [...dataDiffs, ...htmlDiffs, ...uiDiffs, ...trainingDiffs]) {
    const pathGuess =
      d.path.startsWith("COURSE_LESSON_DATA.") || d.path.startsWith("COURSE_LESSON_HTML.")
        ? d.path
        : d.path.startsWith("LANGUAGE_UI_STRINGS.")
          ? d.path
          : d.path.startsWith("rootTraining.")
            ? d.path.replace(/^rootTraining\./, "")
            : d.path;

    const legacyLessonMatch = pathGuess.match(/^COURSE_LESSON_DATA\.(kurssLesson\d+)\.legacyHtml$/);
    if (legacyLessonMatch) {
      const lessonKey = legacyLessonMatch[1];
      const granularLabot = ownerRows.some(
        (r) =>
          r.status === "LABOT" &&
          (legacyHtmlGranularLessonKey(r.path) === lessonKey || legacyHtmlLessonKey(r.path) === lessonKey),
      );
      if (granularLabot) continue;
    }

    const htmlLessonMatch = pathGuess.match(/^COURSE_LESSON_HTML\.(kurssLesson\d+|kurss\w+Lesson)$/);
    if (htmlLessonMatch) {
      const lessonKey = htmlLessonMatch[1];
      const granularLabot = ownerRows.some(
        (r) =>
          r.status === "LABOT" &&
          (legacyHtmlGranularLessonKey(r.path) === lessonKey || legacyHtmlLessonKey(r.path) === lessonKey),
      );
      if (granularLabot) continue;
    }

    const ownerPath =
      pathGuess.startsWith("lesson") &&
      (pathGuess.includes("TrainingCards") || pathGuess.includes("ExerciseCards"))
        ? pathGuess
        : pathGuess.startsWith("COURSE_LESSON_")
          ? pathGuess
          : pathGuess.startsWith("LANGUAGE_UI_STRINGS.")
            ? pathGuess
            : `LANGUAGE_UI_STRINGS.${pathGuess.replace(/^LANGUAGE_UI_STRINGS\./, "")}`;

    const inApplyMap = expectedLabotPaths.has(ownerPath) || ownerRows.some((r) => r.status === "LABOT" && r.path === ownerPath);

    if (!inApplyMap) {
      unexpectedChanges++;
      add("HIGH", "DIFF", ownerPath, "Unexpected production change", {
        before: String(d.before).slice(0, 80),
        after: String(d.after).slice(0, 80),
      });
    }
  }

  const mirrorLessons = isSyncedWithWww("data/et/courseLessons.js");
  const mirrorUi = isSyncedWithWww("languages/et/ui.js");
  const mirrorRootUi =
    fs.readFileSync(path.join(ROOT, "ui.js"), "utf8") === fs.readFileSync(path.join(ROOT, "www/ui.js"), "utf8");
  const mirrorPass = mirrorLessons && mirrorUi && mirrorRootUi;
  if (!mirrorPass) add("HIGH", "MIRROR", "production", "Mirror check failed");

  let syntaxPass = true;
  try {
    execSync("node --check data/et/courseLessons.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/courseLessons.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check languages/et/ui.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/languages/et/ui.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check ui.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/ui.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
    add("CRITICAL", "SYNTAX", "node --check", "Syntax check failed");
  }

  let structurePass = true;
  try {
    execSync("node scripts/validate-kurss.js --lang=et", { cwd: ROOT, stdio: "pipe" });
  } catch {
    structurePass = false;
    add("CRITICAL", "STRUCTURE", "validate-kurss", "validate-kurss.js --lang=et failed");
  }

  const lessonKeys = Object.keys(afterSrc.data).filter((k) => /^kurssLesson\d+$/.test(k));
  const idOrderPass = lessonKeys.length === 21 && lessonKeys.every((k, i) => k === `kurssLesson${i + 1}`);
  if (!idOrderPass) add("CRITICAL", "ID_ORDER", "kurssLessonN", `Expected 21 ordered lessons, got ${lessonKeys.length}`);

  const critical = findings.filter((f) => f.severity === "CRITICAL").length;
  const high = findings.filter((f) => f.severity === "HIGH").length;

  const applyMismatch = (applyLog.currentValueMismatch || []).length;
  const applyOwnerNewMismatch = (applyLog.ownerNewMismatch || []).length;
  const applyMissingPath = (applyLog.missingPath || []).length;
  if (applyMismatch > 0) add("HIGH", "APPLY", "currentValueMismatch", `${applyMismatch} rows`);
  if (applyOwnerNewMismatch > 0) add("HIGH", "APPLY", "ownerNewMismatch", `${applyOwnerNewMismatch} rows`);
  if (applyMissingPath > 0) add("HIGH", "APPLY", "missingPath", `${applyMissingPath} rows`);
  if (applyLog.unexpectedChanges > 0) add("HIGH", "APPLY", "unexpectedChanges", `${applyLog.unexpectedChanges}`);

  const pass =
    critical === 0 &&
    high === 0 &&
    ownerRows.length === EXPECTED_OWNER &&
    labotRetained === EXPECTED_LABOT &&
    nelabotRetained === EXPECTED_NELABOT &&
    fpRetained === EXPECTED_FP &&
    ownerBacklogFinal === 0 &&
    pendingCount === 0 &&
    nsrCount === 0 &&
    applyLog.appliedVerified === EXPECTED_LABOT &&
    applyMismatch === 0 &&
    applyOwnerNewMismatch === 0 &&
    applyMissingPath === 0 &&
    (applyLog.unexpectedChanges || 0) === 0 &&
    deChanges === 0 &&
    unexpectedChanges === 0 &&
    mirrorPass &&
    syntaxPass &&
    structurePass &&
    idOrderPass;

  const verdict = pass ? "ET_KURSS_FINAL_TARGETED_REGRESSION_PASS" : "ET_KURSS_FINAL_TARGETED_REGRESSION_FAIL";

  const report = {
    generatedAt: new Date().toISOString(),
    verdict,
    mergeBase: MERGE_BASE,
    ownerResolved: ownerRows.length,
    labotRetained,
    expectedLabot: EXPECTED_LABOT,
    nelabotRetained,
    expectedNelabot: EXPECTED_NELABOT,
    fpRetained,
    expectedFp: EXPECTED_FP,
    ownerBacklogFinal,
    pendingCount,
    needsSourceReview: nsrCount,
    appliedVerified: applyLog.appliedVerified,
    applyCurrentValueMismatch: applyMismatch,
    applyOwnerNewMismatch,
    applyMissingPath,
    applyUnexpectedChanges: applyLog.unexpectedChanges || 0,
    deChanges,
    unexpectedChanges,
    mirrorPass,
    syntaxPass,
    structurePass,
    idOrderPass,
    findingsCount: findings.length,
    critical,
    high,
    findings,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2));

  const md = [
    "# ET–DE Kurss — final targeted regression",
    "",
    "**Standard:** MASTER v1.9 + REPAIR_APPLY_SAFETY_STANDARD",
    "**Authority:** `reports/et-kurss-owner-decisions-accepted.md`",
    "",
    `**Verdict:** **${verdict}**`,
    "",
    "## OWNER retention (323 rows)",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| OWNER_RESOLVED | **${ownerRows.length}/${EXPECTED_OWNER}** |`,
    `| LABOT retained | **${labotRetained}/${EXPECTED_LABOT}** |`,
    `| NELABOT retained | **${nelabotRetained}/${EXPECTED_NELABOT}** |`,
    `| FALSE_POSITIVE retained | **${fpRetained}/${EXPECTED_FP}** |`,
    `| NEEDS_SOURCE_REVIEW | **${nsrCount}** |`,
    `| PENDING | **${pendingCount}** |`,
    `| OWNER_BACKLOG_FINAL | **${ownerBacklogFinal}** |`,
    `| ET-KURSS-0226 unchanged | **checked** |`,
    `| ET-KURSS-0227 unchanged | **checked** |`,
  ];

  md.push(
    "",
    "## Apply verification",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| APPLIED_VERIFIED (apply log) | **${applyLog.appliedVerified}/${EXPECTED_LABOT}** |`,
    `| CURRENT_VALUE_MISMATCH | **${applyMismatch}** |`,
    `| OWNER_NEW_MISMATCH | **${applyOwnerNewMismatch}** |`,
    `| MISSING_PATH | **${applyMissingPath}** |`,
    "",
    "## Technical gates",
    "",
    "| Gate | Value |",
    "|------|-------|",
    `| DE_CHANGES | **${deChanges}** |`,
    `| UNEXPECTED_CHANGES | **${unexpectedChanges}** |`,
    `| MIRROR | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| SYNTAX | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    `| STRUCTURE | **${structurePass ? "PASS" : "FAIL"}** |`,
    `| ID_ORDER | **${idOrderPass ? "PASS" : "FAIL"}** |`,
    "",
    `| Merge baseline | \`${MERGE_BASE}\` |`,
    "",
  );

  if (findings.length) {
    md.push("## Findings", "");
    for (const f of findings.slice(0, 40)) {
      md.push(`- **${f.severity}** ${f.auditId || f.id} \`${f.path}\`: ${f.problem}`);
    }
    if (findings.length > 40) md.push(`_… +${findings.length - 40} more in JSON_`);
    md.push("");
  }

  fs.writeFileSync(REPORT_MD, md.join("\n"));
  console.log(
    JSON.stringify(
      {
        verdict,
        labotRetained,
        nelabotRetained,
        fpRetained,
        ownerBacklogFinal,
        deChanges,
        unexpectedChanges,
        mirrorPass,
        syntaxPass,
        structurePass,
      },
      null,
      2,
    ),
  );
  if (!pass) process.exit(1);
}

main();
