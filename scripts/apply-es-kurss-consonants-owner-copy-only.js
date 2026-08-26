#!/usr/bin/env node
"use strict";
/**
 * ES Kurss Consonantes — OWNER COPY-ONLY apply from decisions JSON.
 * Usage: node scripts/apply-es-kurss-consonants-owner-copy-only.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const DECISIONS = path.join(ROOT, "reports/es-kurss-consonants-visual-owner-decisions.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-consonants-visual-owner-apply.md");
const LOG_JSON = path.join(ROOT, "reports/temp/es-kurss-consonants-visual-owner-apply-log.json");

function loadCourseLessons(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return { code, html: ctx.window.COURSE_LESSON_HTML || {} };
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

function buildReportMd(report) {
  const lines = [
    "# ES Kurss Consonantes — OWNER COPY-ONLY apply report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| REQUESTED | ${report.requested} |`,
    `| APPLIED_VERIFIED | ${report.appliedVerified} |`,
    `| ALREADY_APPLIED_VERIFIED | ${report.alreadyAppliedVerified} |`,
    `| CURRENT_VALUE_MISMATCH | ${report.mismatch} |`,
    `| FAILED | ${report.failed} |`,
    "",
  ];
  if (report.details.length) {
    lines.push("## Targets", "");
    for (const d of report.details) {
      lines.push(`- **${d.id}** \`${d.file}\` → \`${d.field}\`: **${d.status}**${d.note ? ` — ${d.note}` : ""}`);
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
    alreadyAppliedVerified: 0,
    mismatch: 0,
    failed: 0,
    details: [],
    errors: [],
  };

  const fileCache = new Map();

  for (const target of decisions.targets) {
    if (target.status === "NELABOT") continue;
    if (target.status !== "LABOT") continue;

    report.requested++;
    const filePath = path.join(ROOT, target.file);
    const htmlKey = target.field.replace("COURSE_LESSON_HTML.", "");

    try {
      if (!fileCache.has(filePath)) {
        fileCache.set(filePath, loadCourseLessons(filePath));
      }
      const cached = fileCache.get(filePath);
      const actual = cached.html[htmlKey];

      if (actual === target.new) {
        report.alreadyAppliedVerified++;
        report.details.push({
          id: target.id,
          file: target.file,
          field: target.field,
          status: "ALREADY_APPLIED_VERIFIED",
        });
        continue;
      }

      if (actual !== target.current) {
        report.mismatch++;
        report.details.push({
          id: target.id,
          file: target.file,
          field: target.field,
          status: "CURRENT_VALUE_MISMATCH",
          note: `expected length ${target.current.length}, got ${String(actual).length}`,
        });
        continue;
      }

      cached.html[htmlKey] = target.new;
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

  const verifiedTotal = report.appliedVerified + report.alreadyAppliedVerified;
  if (report.mismatch > 0 || report.failed > 0 || verifiedTotal !== report.requested) {
    fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
    fs.writeFileSync(LOG_JSON, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(REPORT_MD, buildReportMd(report), "utf8");
    console.error("Apply aborted — mismatch, failure, or incomplete apply");
    console.error(JSON.stringify(report, null, 2));
    process.exit(1);
  }

  for (const [filePath, cached] of fileCache.entries()) {
    if (cached.html.kurssConsonantsLesson === loadCourseLessons(filePath).html.kurssConsonantsLesson) {
      continue;
    }
    const initial = loadCourseLessons(filePath);
    let next = initial.code;
    next = replaceSerialized(
      next,
      initial.html.kurssConsonantsLesson,
      cached.html.kurssConsonantsLesson,
      "COURSE_LESSON_HTML.kurssConsonantsLesson",
    );
    fs.writeFileSync(filePath, next, "utf8");
  }

  for (const rel of ["data/es/courseLessons.js", "www/data/es/courseLessons.js"]) {
    execSync(`node --check "${path.join(ROOT, rel)}"`, { encoding: "utf8" });
  }

  fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
  fs.writeFileSync(LOG_JSON, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(REPORT_MD, buildReportMd(report), "utf8");
  console.log(JSON.stringify(report, null, 2));
}

main();
