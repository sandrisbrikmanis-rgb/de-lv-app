#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { AUDIT_LANGUAGES } = require("./lib/g2-a1-production-current/constants");

const CHECKPOINT_INDEX = path.join(
  ROOT,
  "reports/temp/g2-a1-production-current/full-discovery-lang-checkpoints/index.json",
);
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

function main() {
  const index = readJsonSafe(CHECKPOINT_INDEX);
  const result = readJsonSafe(RESULT_JSON);
  const pids = pidRunning();
  const completed = index?.completedLangs || [];
  const totalLangs = AUDIT_LANGUAGES.length;
  const currentLang =
    completed.length < totalLangs ? AUDIT_LANGUAGES.find((l) => !completed.includes(l)) : null;
  const recordsDone = (index?.perLang || []).reduce((s, p) => s + (p.inventoryRows || 0), 0);

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
