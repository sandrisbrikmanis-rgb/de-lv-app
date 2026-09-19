#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { AUDIT_LANGUAGES } = require("./lib/g2-a1-production-current/constants");
const { tallyAuditedRecords } = require("./lib/g2-a1-production-current/coverage");

const CHECKPOINT_DIR = path.join(
  ROOT,
  "reports/temp/g2-a1-production-current/full-discovery-lang-checkpoints",
);
const CHECKPOINT_INDEX = path.join(CHECKPOINT_DIR, "index.json");
const RESULT_JSON = path.join(ROOT, "reports/g2-a1-production-current/full-discovery-result.json");
const PROGRESS_LOG = path.join(
  ROOT,
  "reports/temp/g2-a1-production-current/full-discovery-progress.log",
);

function pidRunning() {
  try {
    const out = execSync("pgrep -f 'run-g2-a1-production-current-full-discovery.js --full --with-luna'", {
      encoding: "utf8",
    }).trim();
    return out ? out.split("\n").map((x) => Number(x)) : [];
  } catch {
    return [];
  }
}

function readJsonSafe(abs) {
  try {
    return JSON.parse(fs.readFileSync(abs, "utf8"));
  } catch {
    return null;
  }
}

function loadCompletedLangVerdictStats(completedLangs) {
  const allRecords = [];
  const perLangPassPercent = {};
  for (const lang of completedLangs) {
    const payload = readJsonSafe(path.join(CHECKPOINT_DIR, `${lang}.records.json`));
    const records = payload?.records || [];
    const tallies = tallyAuditedRecords(records);
    if (tallies.TOTAL_CHECKED > 0) {
      perLangPassPercent[lang] =
        Math.round((tallies.AUDIT_PASS / tallies.TOTAL_CHECKED) * 10000) / 100;
    }
    allRecords.push(...records);
  }
  const combined = tallyAuditedRecords(allRecords);
  const passPercentApprox =
    combined.TOTAL_CHECKED > 0
      ? Math.round((combined.AUDIT_PASS / combined.TOTAL_CHECKED) * 10000) / 100
      : null;
  return {
    passPercentApprox,
    verdictsCompletedLangs: {
      TOTAL_CHECKED: combined.TOTAL_CHECKED,
      AUDIT_PASS: combined.AUDIT_PASS,
      FINDING: combined.FINDING,
      NEEDS_SOURCE_REVIEW: combined.NEEDS_SOURCE_REVIEW,
      SOURCE_DE_ISSUE: combined.SOURCE_DE_ISSUE,
    },
    perLangPassPercent,
  };
}

function main() {
  const index = readJsonSafe(CHECKPOINT_INDEX);
  const result = readJsonSafe(RESULT_JSON);
  const pids = pidRunning();
  const completed = index?.completedLangs || [];
  const totalLangs = AUDIT_LANGUAGES.length;
  const currentLang =
    completed.length < totalLangs ? AUDIT_LANGUAGES.find((l) => !completed.includes(l)) : null;
  const recordsDone = (index?.perLang || []).reduce((s, p) => s + (p.inventoryRows || 0), 0);
  const verdictStats =
    completed.length > 0 ? loadCompletedLangVerdictStats(completed) : { passPercentApprox: null };

  const snapshot = {
    at: new Date().toISOString(),
    auditRunning: pids.length > 0,
    pids,
    productionFileSetSha: index?.auditBaselineSha || null,
    languagesCompleted: completed.length,
    languagesTotal: totalLangs,
    percentLanguages: totalLangs ? Math.round((completed.length / totalLangs) * 1000) / 10 : 0,
    completedLangs: completed,
    likelyCurrentLang: currentLang,
    auditRecordsCheckpointed: recordsDone,
    passPercentApprox: verdictStats.passPercentApprox,
    verdictsCompletedLangs: verdictStats.verdictsCompletedLangs || null,
    perLangPassPercent: verdictStats.perLangPassPercent || null,
    lastLangSavedAt: index?.perLang?.length ? index.perLang[index.perLang.length - 1].savedAt : null,
    finalResult: result
      ? { pass: result.pass, phase: result.phase, lang: result.lang, reason: result.reason }
      : null,
  };

  fs.mkdirSync(path.dirname(PROGRESS_LOG), { recursive: true });
  fs.appendFileSync(PROGRESS_LOG, `${JSON.stringify(snapshot)}\n`);

  console.log(JSON.stringify(snapshot, null, 2));
  process.exit(0);
}

main();
