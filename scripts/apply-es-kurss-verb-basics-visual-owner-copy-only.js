#!/usr/bin/env node
"use strict";
/**
 * ES Kurss Verb basics — OWNER COPY-ONLY apply from decisions JSON.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const DECISIONS = path.join(ROOT, "reports/es-kurss-verb-basics-visual-owner-decisions.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-verb-basics-visual-owner-apply.md");
const LOG_JSON = path.join(ROOT, "reports/temp/es-kurss-verb-basics-visual-owner-apply-log.json");

function sha256(value) {
  return crypto.createHash("sha256").update(value, "utf8").digest("hex");
}

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

function mapUiField(field) {
  if (field.startsWith("COURSE_UI.sections.")) {
    return `kurss.${field.slice("COURSE_UI.sections.".length)}`;
  }
  return field;
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

function lessonKeyFromField(field) {
  return field.slice("COURSE_LESSON_HTML.".length);
}

function resolveNew(target, byId) {
  if (target.new != null) return target.new;
  if (target.newFrom) {
    const ref = target.newFrom.match(/^([^.]+)\.new$/);
    if (!ref) throw new Error(`Invalid newFrom: ${target.newFrom}`);
    const source = byId.get(ref[1]);
    if (!source?.new) throw new Error(`Missing new for ${target.newFrom}`);
    return source.new;
  }
  throw new Error(`No new value for ${target.id}`);
}

function buildReportMd(report) {
  const lines = [
    "# ES Kurss Verb basics — OWNER COPY-ONLY apply report",
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
    "",
    "## Targets",
    "",
  ];
  for (const d of report.details) {
    lines.push(`- **${d.id}** \`${d.file}\` → \`${d.field}\`: **${d.status}**${d.note ? ` — ${d.note}` : ""}`);
  }
  if (report.errors.length) {
    lines.push("", "## Errors", "");
    for (const e of report.errors) {
      lines.push(`- **${e.id}**: ${e.message}`);
    }
  }
  lines.push("");
  return lines.join("\n");
}

function main() {
  const decisions = JSON.parse(fs.readFileSync(DECISIONS, "utf8"));
  const byId = new Map(decisions.targets.map((t) => [t.id, t]));
  const report = {
    requested: 0,
    appliedVerified: 0,
    mismatch: 0,
    failed: 0,
    details: [],
    errors: [],
  };

  const fileCache = new Map();

  for (const target of decisions.targets) {
    if (target.status !== "LABOT") continue;
    report.requested++;

    const filePath = path.join(ROOT, target.file);
    const nextValue = resolveNew(target, byId);

    try {
      if (!fileCache.has(filePath)) {
        if (target.file.includes("courseLessons.js")) {
          fileCache.set(filePath, { type: "course", ...loadCourseLessons(filePath) });
        } else if (target.file.includes("ui.js")) {
          fileCache.set(filePath, { type: "ui", ...loadUiStrings(filePath) });
        } else {
          throw new Error(`Unexpected file: ${target.file}`);
        }
      }

      const cached = fileCache.get(filePath);

      if (target.field.startsWith("COURSE_LESSON_HTML.")) {
        const key = lessonKeyFromField(target.field);
        const actual = cached.html[key];
        const actualSha = sha256(actual);
        const actualLen = actual.length;

        if (target.currentSha256 && actualSha !== target.currentSha256) {
          report.mismatch++;
          report.details.push({
            id: target.id,
            file: target.file,
            field: target.field,
            status: "CURRENT_VALUE_MISMATCH",
            note: `sha expected ${target.currentSha256}, got ${actualSha}`,
          });
          continue;
        }
        if (target.currentLength != null && actualLen !== target.currentLength) {
          report.mismatch++;
          report.details.push({
            id: target.id,
            file: target.file,
            field: target.field,
            status: "CURRENT_VALUE_MISMATCH",
            note: `length expected ${target.currentLength}, got ${actualLen}`,
          });
          continue;
        }

        cached.html[key] = nextValue;
        if (cached.html[key] !== nextValue) {
          throw new Error(`NEW verification failed for ${target.id}`);
        }
      } else {
        const uiPath = mapUiField(target.field);
        const actual = getByPath(cached.ui, uiPath);
        if (actual !== target.current) {
          report.mismatch++;
          report.details.push({
            id: target.id,
            file: target.file,
            field: target.field,
            status: "CURRENT_VALUE_MISMATCH",
            note: `UI expected "${target.current}", got "${actual}"`,
          });
          continue;
        }
        if (!setByPath(cached.ui, uiPath, nextValue)) {
          throw new Error(`Could not set UI path: ${uiPath}`);
        }
        if (getByPath(cached.ui, uiPath) !== nextValue) {
          throw new Error(`NEW verification failed for ${target.id}`);
        }
      }

      report.appliedVerified++;
      report.details.push({
        id: target.id,
        file: target.file,
        field: target.field,
        status: "APPLIED_VERIFIED",
      });
    } catch (err) {
      report.failed++;
      report.errors.push({ id: target.id, message: err.message });
      report.details.push({
        id: target.id,
        file: target.file,
        field: target.field,
        status: "FAILED",
        note: err.message,
      });
    }
  }

  if (report.mismatch > 0 || report.failed > 0) {
    fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
    fs.writeFileSync(LOG_JSON, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(REPORT_MD, buildReportMd(report), "utf8");
    console.error(JSON.stringify(report, null, 2));
    process.exit(1);
  }

  for (const [filePath, cached] of fileCache.entries()) {
    if (cached.type === "course") {
      const initial = loadCourseLessons(filePath);
      let next = initial.code;
      for (const key of Object.keys(cached.html)) {
        if (cached.html[key] !== initial.html[key]) {
          next = replaceSerialized(next, initial.html[key], cached.html[key], `COURSE_LESSON_HTML.${key}`);
        }
      }
      fs.writeFileSync(filePath, next, "utf8");
    } else {
      writeUiStrings(filePath, cached.ui);
    }
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
