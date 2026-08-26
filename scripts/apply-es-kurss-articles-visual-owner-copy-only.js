#!/usr/bin/env node
"use strict";
/**
 * ES Kurss Artículos — OWNER COPY-ONLY apply.
 * Usage: node scripts/apply-es-kurss-articles-visual-owner-copy-only.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const DECISIONS = path.join(ROOT, "reports/es-kurss-articles-visual-owner-decisions.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-articles-visual-owner-apply.md");
const LOG_JSON = path.join(ROOT, "reports/temp/es-kurss-articles-visual-owner-apply-log.json");
const LESSON_FILES = ["data/es/courseLessons.js", "www/data/es/courseLessons.js"];
const LESSON_KEY = "kurssArticlesLesson";

function loadArticlesHtml(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.COURSE_LESSON_HTML[LESSON_KEY] || "";
}

function buildReportMd(report) {
  const lines = [
    "# ES Kurss Artículos — OWNER COPY-ONLY apply report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| REQUESTED | ${report.requested} |`,
    `| APPLIED_VERIFIED | ${report.appliedVerified} |`,
    `| CURRENT_VALUE_MISMATCH | ${report.currentMismatch} |`,
    `| NEW_VALUE_MISMATCH | ${report.newMismatch} |`,
    `| FAILED | ${report.failed} |`,
    "",
    "## Targets",
    "",
  ];
  for (const d of report.details) {
    lines.push(`- **${d.id}**: **${d.status}**${d.note ? ` — ${d.note}` : ""}`);
  }
  lines.push("");
  return lines.join("\n");
}

function applyTargets(html, targets) {
  let next = html;
  const details = [];
  let appliedVerified = 0;
  let currentMismatch = 0;
  let newMismatch = 0;
  let failed = 0;

  for (const target of targets) {
    if (target.status !== "LABOT") continue;

    if (target.action === "REMOVE_ELEMENT") {
      const removeHtml = target.removeHtml;
      if (!next.includes(removeHtml)) {
        currentMismatch++;
        details.push({ id: target.id, status: "CURRENT_VALUE_MISMATCH", note: "removeHtml not found" });
        continue;
      }
      const count = next.split(removeHtml).length - 1;
      if (count !== 1) {
        currentMismatch++;
        details.push({ id: target.id, status: "CURRENT_VALUE_MISMATCH", note: `removeHtml count=${count}` });
        continue;
      }
      next = next.replace(removeHtml, "");
      if (next.includes(target.current)) {
        newMismatch++;
        details.push({ id: target.id, status: "NEW_VALUE_MISMATCH", note: "duplicate text remains" });
        continue;
      }
      appliedVerified++;
      details.push({ id: target.id, status: "APPLIED_VERIFIED", note: "REMOVE_ELEMENT" });
      continue;
    }

    const count = next.split(target.current).length - 1;
    if (count !== 1) {
      currentMismatch++;
      details.push({
        id: target.id,
        status: "CURRENT_VALUE_MISMATCH",
        note: `expected 1 occurrence, found ${count}`,
      });
      continue;
    }
    next = next.replace(target.current, target.new);
    if (!next.includes(target.new) || next.includes(target.current)) {
      failed++;
      details.push({ id: target.id, status: "FAILED", note: "post-replace verify failed" });
      continue;
    }
    appliedVerified++;
    details.push({ id: target.id, status: "APPLIED_VERIFIED" });
  }

  return { next, details, appliedVerified, currentMismatch, newMismatch, failed };
}

function replaceLessonInFile(fileContent, oldHtml, newHtml) {
  const oldJson = JSON.stringify(oldHtml);
  const newJson = JSON.stringify(newHtml);
  const count = fileContent.split(oldJson).length - 1;
  if (count !== 1) {
    throw new Error(`kurssArticlesLesson block not unique: count=${count}`);
  }
  return fileContent.replace(oldJson, newJson);
}

function main() {
  const decisions = JSON.parse(fs.readFileSync(DECISIONS, "utf8"));
  const targets = decisions.targets || [];
  const labot = targets.filter((t) => t.status === "LABOT");

  const dataPath = path.join(ROOT, LESSON_FILES[0]);
  const originalHtml = loadArticlesHtml(dataPath);
  const result = applyTargets(originalHtml, labot);

  const report = {
    requested: labot.length,
    appliedVerified: result.appliedVerified,
    currentMismatch: result.currentMismatch,
    newMismatch: result.newMismatch,
    failed: result.failed,
    details: result.details,
    errors: [],
  };

  if (report.currentMismatch > 0 || report.newMismatch > 0 || report.failed > 0) {
    fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
    fs.writeFileSync(LOG_JSON, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(REPORT_MD, buildReportMd(report), "utf8");
    console.error(JSON.stringify(report, null, 2));
    process.exit(1);
  }

  for (const rel of LESSON_FILES) {
    const filePath = path.join(ROOT, rel);
    const content = fs.readFileSync(filePath, "utf8");
    const updated = replaceLessonInFile(content, originalHtml, result.next);
    fs.writeFileSync(filePath, updated, "utf8");
    execSync(`node --check "${filePath}"`, { encoding: "utf8" });
  }

  const mirrorOk =
    fs.readFileSync(path.join(ROOT, LESSON_FILES[0]), "utf8") ===
    fs.readFileSync(path.join(ROOT, LESSON_FILES[1]), "utf8");
  if (!mirrorOk) {
    report.failed++;
    report.errors.push({ id: "MIRROR", message: "data/www courseLessons.js differ" });
    process.exit(1);
  }

  const verifyHtml = loadArticlesHtml(dataPath);
  if (verifyHtml !== result.next) {
    report.failed++;
    report.errors.push({ id: "SERIALIZE", message: "serialized HTML mismatch after write" });
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
  fs.writeFileSync(LOG_JSON, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(REPORT_MD, buildReportMd(report), "utf8");
  console.log(JSON.stringify(report, null, 2));

  if (report.appliedVerified !== labot.length) process.exit(1);
}

main();
