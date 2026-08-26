#!/usr/bin/env node
"use strict";
/**
 * ES Kurss Pronombres — OWNER COPY-ONLY apply from decisions JSON.
 * Usage: node scripts/apply-es-kurss-pronouns-visual-owner-copy-only.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const DECISIONS = path.join(ROOT, "reports/es-kurss-pronouns-visual-owner-decisions.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-pronouns-visual-owner-apply.md");
const LOG_JSON = path.join(ROOT, "reports/temp/es-kurss-pronouns-visual-owner-apply-log.json");

const LESSON_FILES = [
  path.join(ROOT, "data/es/courseLessons.js"),
  path.join(ROOT, "www/data/es/courseLessons.js"),
];
const UI_FILES = [
  path.join(ROOT, "languages/es/ui.js"),
  path.join(ROOT, "www/languages/es/ui.js"),
];

function loadCourseLessons(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return { code, html: ctx.window.COURSE_LESSON_HTML || {} };
}

function loadUiStrings(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return { code, ui: ctx.window.LANGUAGE_UI_STRINGS || {} };
}

function getByPath(obj, dotPath) {
  return dotPath.split(".").reduce((acc, part) => acc?.[part], obj);
}

function setByPath(obj, dotPath, value) {
  const parts = dotPath.split(".");
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    cur = cur[parts[i]];
    if (cur == null) return false;
  }
  const last = parts[parts.length - 1];
  if (cur[last] === undefined) return false;
  cur[last] = value;
  return true;
}

function replaceInString(content, current, next, replaceMode) {
  if (!content.includes(current)) return { content, ok: false, reason: "current_not_found" };
  if (replaceMode === "first") {
    const idx = content.indexOf(current);
    return {
      content: content.slice(0, idx) + next + content.slice(idx + current.length),
      ok: true,
      reason: "replaced_first",
    };
  }
  return { content: content.split(current).join(next), ok: true, reason: "replaced_all" };
}

function replaceSerialized(fileContent, oldVal, newVal, label) {
  const oldJson = JSON.stringify(oldVal);
  const newJson = JSON.stringify(newVal);
  const count = fileContent.split(oldJson).length - 1;
  if (count !== 1) {
    throw new Error(`Serialized block not unique for ${label}: count=${count}`);
  }
  return fileContent.replace(oldJson, newJson);
}

function writeUiStrings(filePath, obj) {
  fs.writeFileSync(filePath, `window.LANGUAGE_UI_STRINGS = ${JSON.stringify(obj, null, 2)};\n`, "utf8");
}

function buildReportMd(report) {
  const lines = [
    "# ES Kurss Pronombres — OWNER COPY-ONLY apply report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| REQUESTED | ${report.requested} |`,
    `| APPLIED_VERIFIED | ${report.appliedVerified} |`,
    `| CURRENT_VALUE_MISMATCH | ${report.mismatch} |`,
    `| FAILED | ${report.failed} |`,
    `| NELABOT_UNCHANGED | ${report.nelabotRetained} |`,
    "",
    "## Targets",
    "",
  ];
  for (const d of report.details) {
    lines.push(`- **${d.id}** \`${d.file}\` → \`${d.field}\`: **${d.status}**${d.note ? ` — ${d.note}` : ""}`);
  }
  lines.push("");
  if (report.errors.length) {
    lines.push("## Errors", "");
    for (const e of report.errors) {
      lines.push(`- **${e.id}**: ${e.message}`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

function main() {
  const decisions = JSON.parse(fs.readFileSync(DECISIONS, "utf8"));
  const report = {
    requested: 0,
    appliedVerified: 0,
    mismatch: 0,
    failed: 0,
    nelabotRetained: 0,
    details: [],
    errors: [],
  };

  const lessonCaches = LESSON_FILES.map((filePath) => ({
    filePath,
    ...loadCourseLessons(filePath),
    initialHtml: loadCourseLessons(filePath).html.kurssPronounsLesson,
  }));
  const uiCaches = UI_FILES.map((filePath) => ({
    filePath,
    ...loadUiStrings(filePath),
  }));

  // Apply accusative `sie - ellos/ella` before nominative `sie - ellos/ellas` to avoid substring collision.
  const orderedTargets = [...decisions.targets].sort((a, b) => {
    const rank = (id) => {
      if (id === "ES-KURSS-PRONOUNS-0017") return 0;
      if (id === "ES-KURSS-PRONOUNS-0007") return 1;
      return 2;
    };
    return rank(a.id) - rank(b.id) || decisions.targets.indexOf(a) - decisions.targets.indexOf(b);
  });

  for (const target of orderedTargets) {
    const relFile = target.file;
    const field = target.field;

    if (target.status === "NELABOT") {
      let retained = true;
      for (const cached of lessonCaches) {
        if (!cached.html.kurssPronounsLesson.includes(target.current)) {
          retained = false;
        }
      }
      if (retained) {
        report.nelabotRetained++;
        report.details.push({
          id: target.id,
          file: relFile,
          field,
          status: "NELABOT_UNCHANGED",
        });
      } else {
        report.failed++;
        report.details.push({
          id: target.id,
          file: relFile,
          field,
          status: "FAILED",
          note: "NELABOT current not found",
        });
      }
      continue;
    }

    if (target.status !== "LABOT") continue;
    report.requested++;

    try {
      if (target.kind === "ui") {
        let ok = true;
        for (const cached of uiCaches) {
          const actual = getByPath(cached.ui, field);
          if (actual !== target.current) {
            ok = false;
            report.mismatch++;
            report.details.push({
              id: target.id,
              file: relFile,
              field,
              status: "CURRENT_VALUE_MISMATCH",
              note: `UI path ${field}`,
            });
            break;
          }
        }
        if (!ok) continue;

        for (const cached of uiCaches) {
          if (!setByPath(cached.ui, field, target.new)) {
            throw new Error(`Could not set UI path: ${field}`);
          }
        }

        for (const cached of uiCaches) {
          const actual = getByPath(cached.ui, field);
          if (actual !== target.new) {
            throw new Error(`NEW verification failed for ${target.id}`);
          }
        }
      } else {
        let ok = true;
        for (const cached of lessonCaches) {
          if (!cached.html.kurssPronounsLesson.includes(target.current)) {
            ok = false;
            report.mismatch++;
            report.details.push({
              id: target.id,
              file: relFile,
              field,
              status: "CURRENT_VALUE_MISMATCH",
              note: `substring not found in kurssPronounsLesson`,
            });
            break;
          }
        }
        if (!ok) continue;

        for (const cached of lessonCaches) {
          const result = replaceInString(
            cached.html.kurssPronounsLesson,
            target.current,
            target.new,
            target.replaceMode || "all",
          );
          if (!result.ok) {
            throw new Error(`Replace failed for ${target.id}: ${result.reason}`);
          }
          cached.html.kurssPronounsLesson = result.content;
          if (!cached.html.kurssPronounsLesson.includes(target.new)) {
            throw new Error(`NEW verification failed for ${target.id}`);
          }
        }
      }

      report.appliedVerified++;
      report.details.push({
        id: target.id,
        file: relFile,
        field,
        status: "APPLIED_VERIFIED",
      });
    } catch (err) {
      report.failed++;
      report.errors.push({ id: target.id, message: err.message });
      report.details.push({
        id: target.id,
        file: relFile,
        field,
        status: "FAILED",
        note: err.message,
      });
    }
  }

  if (report.mismatch > 0 || report.failed > 0) {
    fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
    fs.writeFileSync(LOG_JSON, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(REPORT_MD, buildReportMd(report), "utf8");
    console.error("Apply aborted — mismatch or failure");
    console.error(JSON.stringify(report, null, 2));
    process.exit(1);
  }

  for (const cached of lessonCaches) {
    const initial = loadCourseLessons(cached.filePath);
    let next = initial.code;
    if (cached.html.kurssPronounsLesson !== initial.html.kurssPronounsLesson) {
      next = replaceSerialized(
        next,
        initial.html.kurssPronounsLesson,
        cached.html.kurssPronounsLesson,
        "COURSE_LESSON_HTML.kurssPronounsLesson",
      );
    }
    fs.writeFileSync(cached.filePath, next, "utf8");
  }

  for (const cached of uiCaches) {
    writeUiStrings(cached.filePath, cached.ui);
  }

  for (const rel of [
    "data/es/courseLessons.js",
    "www/data/es/courseLessons.js",
    "languages/es/ui.js",
    "www/languages/es/ui.js",
  ]) {
    execSync(`node --check "${path.join(ROOT, rel)}"`, { encoding: "utf8" });
  }

  fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
  fs.writeFileSync(LOG_JSON, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(REPORT_MD, buildReportMd(report), "utf8");
  console.log(JSON.stringify(report, null, 2));
}

main();
