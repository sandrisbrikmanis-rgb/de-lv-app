#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { tallyAuditedRecords } = require("./coverage");
const { isLinguisticVerdictClosed } = require("./linguistic-closure");

const STATE_PATH = path.join(ROOT, "reports/temp/g2-a1-production-current/targeted-field-audit-state.json");
const LOG_PATH = path.join(ROOT, "reports/temp/g2-a1-production-current/targeted-field-audit-run.log");

function loadState() {
  if (!fs.existsSync(STATE_PATH)) return null;
  try {
    return JSON.parse(fs.readFileSync(STATE_PATH, "utf8"));
  } catch {
    return null;
  }
}

function saveState(state) {
  fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
  fs.writeFileSync(STATE_PATH, `${JSON.stringify(state, null, 2)}\n`);
}

function appendLog(line) {
  fs.mkdirSync(path.dirname(LOG_PATH), { recursive: true });
  fs.appendFileSync(LOG_PATH, `${line}\n`);
}

function summarizeRecords(records) {
  const tallied = tallyAuditedRecords(records.filter((r) => isLinguisticVerdictClosed(r)));
  const mappingGaps = records.filter((r) => !isLinguisticVerdictClosed(r)).length;
  return { ...tallied, mappingGaps, recordsTotal: records.length };
}

function buildProgressSnapshot(state) {
  const summary = summarizeRecords(state.records || []);
  return {
    at: new Date().toISOString(),
    headSha: state.headSha,
    auditBaselineSha: state.auditBaselineSha,
    batchesCompleted: state.batchesCompleted || 0,
    batchesTotal: state.batchesTotal || 0,
    fieldsCompleted: summary.recordsTotal,
    fieldsTotal: state.fieldsTotal || 95731,
    languagesCompleted: (state.completedLangs || []).length,
    completedLangs: state.completedLangs || [],
    lastBatchId: state.lastBatchId || null,
    lastCheckpoint: state.lastCheckpoint || null,
    verdicts: summary,
    technicalFailures: state.technicalFailures || 0,
    FULL_LINGUISTIC_AUDITS_EXECUTED: state.lunaCalls || 0,
  };
}

module.exports = {
  STATE_PATH,
  LOG_PATH,
  loadState,
  saveState,
  appendLog,
  buildProgressSnapshot,
  summarizeRecords,
};
