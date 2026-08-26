#!/usr/bin/env node
"use strict";
/**
 * ES Kurss Pronunciación — final OWNER COPY-ONLY apply.
 * Usage: node scripts/apply-es-kurss-pronunciation-final-owner-copy-only.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const DECISIONS = path.join(ROOT, "reports/es-kurss-pronunciation-targeted-final-owner-decisions.json");
const REPORT_MD = path.join(ROOT, "reports/es-kurss-pronunciation-targeted-final-owner-apply.md");
const LOG_JSON = path.join(ROOT, "reports/temp/es-kurss-pronunciation-targeted-final-owner-apply-log.json");

const LESSON_FILES = ["data/es/courseLessons.js", "www/data/es/courseLessons.js"];

function loadHtml(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return { code, html: ctx.window.COURSE_LESSON_HTML || {} };
}

function lessonBlob(html) {
  return `${html.kurssPronunciationLesson || ""}\n${html.kurssConsonantsLesson || ""}`;
}

function buildReportMd(report) {
  const lines = [
    "# ES Kurss Pronunciación — final OWNER COPY-ONLY apply",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| REQUESTED (LABOT) | ${report.requested} |`,
    `| APPLIED_VERIFIED | ${report.appliedVerified} |`,
    `| NELABOT_UNCHANGED | ${report.nelabotUnchanged} |`,
    `| CURRENT_VALUE_MISMATCH | ${report.currentMismatch} |`,
    `| NEW_VALUE_MISMATCH | ${report.newMismatch} |`,
    `| FAILED | ${report.failed} |`,
    "",
    "## Targets",
    "",
  ];
  for (const d of report.details) {
    lines.push(`- **${d.id}** \`${d.field}\`: **${d.status}**${d.note ? ` — ${d.note}` : ""}`);
  }
  lines.push("");
  return lines.join("\n");
}

function main() {
  const decisions = JSON.parse(fs.readFileSync(DECISIONS, "utf8"));
  const labotTargets = (decisions.targets || []).filter((t) => t.status === "LABOT");
  const nelabotTargets = (decisions.targets || []).filter((t) => t.status === "NELABOT");

  const report = {
    requested: labotTargets.length,
    appliedVerified: 0,
    nelabotUnchanged: 0,
    currentMismatch: 0,
    newMismatch: 0,
    failed: 0,
    details: [],
    errors: [],
  };

  const dataPath = path.join(ROOT, LESSON_FILES[0]);
  let content = fs.readFileSync(dataPath, "utf8");

  for (const target of nelabotTargets) {
    if (!content.includes(target.current)) {
      report.currentMismatch++;
      report.details.push({
        id: target.id,
        field: target.field,
        status: "CURRENT_VALUE_MISMATCH",
        note: "NELABOT current missing before apply",
      });
    }
    if (target.new !== target.current && content.includes(target.new)) {
      report.newMismatch++;
      report.details.push({
        id: target.id,
        field: target.field,
        status: "NEW_VALUE_MISMATCH",
        note: "Rejected Luna NEW already present",
      });
    }
  }

  for (const target of labotTargets) {
    const count = content.split(target.current).length - 1;
    if (count !== 1) {
      report.currentMismatch++;
      report.details.push({
        id: target.id,
        field: target.field,
        status: "CURRENT_VALUE_MISMATCH",
        note: `expected 1 occurrence of CURRENT, found ${count}`,
      });
      continue;
    }
    content = content.replace(target.current, target.new);
  }

  if (report.currentMismatch > 0 || report.newMismatch > 0) {
    fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
    fs.writeFileSync(LOG_JSON, JSON.stringify(report, null, 2), "utf8");
    fs.writeFileSync(REPORT_MD, buildReportMd(report), "utf8");
    console.error(JSON.stringify(report, null, 2));
    process.exit(1);
  }

  for (const rel of LESSON_FILES) {
    fs.writeFileSync(path.join(ROOT, rel), content, "utf8");
    execSync(`node --check "${path.join(ROOT, rel)}"`, { encoding: "utf8" });
  }

  const { html } = loadHtml(dataPath);
  const blob = lessonBlob(html);

  for (const target of labotTargets) {
    if (blob.includes(target.new) && !blob.includes(target.current)) {
      report.appliedVerified++;
      report.details.push({ id: target.id, field: target.field, status: "APPLIED_VERIFIED" });
    } else {
      report.failed++;
      report.details.push({
        id: target.id,
        field: target.field,
        status: "FAILED",
        note: "post-apply verify failed",
      });
    }
  }

  for (const target of nelabotTargets) {
    const currentOk = blob.includes(target.current);
    const rejectedAbsent = !blob.includes(target.new);
    if (currentOk && rejectedAbsent) {
      report.nelabotUnchanged++;
      report.details.push({
        id: target.id,
        field: target.field,
        status: "NELABOT_UNCHANGED",
        note: target.ownerResolution || "OWNER_ACCEPTED_NELABOT",
      });
    } else {
      report.failed++;
      report.details.push({
        id: target.id,
        field: target.field,
        status: "FAILED",
        note: `NELABOT verify failed (current=${currentOk}, rejectedAbsent=${rejectedAbsent})`,
      });
    }
  }

  fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
  fs.writeFileSync(LOG_JSON, JSON.stringify(report, null, 2), "utf8");
  fs.writeFileSync(REPORT_MD, buildReportMd(report), "utf8");
  console.log(JSON.stringify(report, null, 2));

  const pass =
    report.appliedVerified === labotTargets.length &&
    report.nelabotUnchanged === nelabotTargets.length &&
    report.failed === 0;

  if (!pass) process.exit(1);
}

main();
