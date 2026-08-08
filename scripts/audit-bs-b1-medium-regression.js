#!/usr/bin/env node
/**
 * Targeted Luna medium regression — only cards from bs-b1-medium-regression-scope.json.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const {
  DEFAULT_MODEL,
  createStats,
  auditCardsBatch,
  recordRetryReason,
} = require("./lib/openai-luna-audit-batch");

const LV_FILE = path.join(ROOT, "data", "b1.js");
const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b1.js");
const SCOPE_PATH = path.join(ROOT, "reports", "temp", "bs-b1-medium-regression-scope.json");
const FINDINGS_PATH = path.join(ROOT, "reports", "temp", "bs-b1-medium-regression-findings.json");
const STATS_PATH = path.join(ROOT, "scripts", ".bs-b1-medium-regression-audit-stats.json");
const PROGRESS_PATH = path.join(ROOT, "scripts", ".bs-b1-medium-regression-audit-progress.json");

const SIMPLE_BATCH = 10;
const STUDY_BATCH = 12;
const MAX_RETRIES = 3;

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function load(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `b1-${entry.de}-${index}`;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function collectStudyFields(lvStudy, bsStudy, prefix = "study") {
  const fields = [];
  const NATIVE_KEYS = new Set([
    "translation", "title", "subtitle", "lead", "meaning", "describes",
    "label", "description", "text", "left", "right", "word", "content",
    "explanation", "tip", "important", "mistakes", "remember", "info",
  ]);

  function walk(lvObj, bsObj, p) {
    if (!lvObj && !bsObj) return;
    if (typeof lvObj === "string" && typeof bsObj === "string") {
      const key = p.split(".").pop();
      if (NATIVE_KEYS.has(key) || key === "lv" || p.includes(".lv")) {
        fields.push({ field: p, lvSource: lvObj, bsText: bsObj });
      }
      return;
    }
    if (Array.isArray(lvObj) && Array.isArray(bsObj)) {
      const len = Math.max(lvObj.length, bsObj.length);
      for (let i = 0; i < len; i++) walk(lvObj[i], bsObj[i], `${p}[${i}]`);
      return;
    }
    if (lvObj && typeof lvObj === "object" && bsObj && typeof bsObj === "object") {
      for (const key of new Set([...Object.keys(lvObj), ...Object.keys(bsObj)])) {
        if (key === "de" || key === "sectionAccents" || key === "id" || key === "layout") continue;
        walk(lvObj[key], bsObj[key], p ? `${p}.${key}` : key);
      }
    }
  }

  walk(lvStudy, bsStudy, prefix);
  return fields;
}

function buildSimpleCard(lvE, bsE, index) {
  return {
    cardId: entryId(bsE, index),
    field: "lv",
    de: bsE.de,
    deArticle: bsE.de_article || null,
    lvSource: lvE.lv,
    bsText: bsE.lv,
  };
}

function buildStudyCard(lvE, bsE, index) {
  return {
    cardId: entryId(bsE, index),
    de: bsE.de,
    deArticle: bsE.de_article || null,
    layout: bsE.study?.layout || "standardStudy",
    fields: collectStudyFields(lvE.study, bsE.study),
    sectionAccents: bsE.study?.sectionAccents || null,
  };
}

async function auditBatchWithRetry(cards, stats, batchKey) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      if (attempt === 0) stats.initialBatchRequests += 1;
      else {
        stats.retryRequests += 1;
        stats.retryCount += 1;
        recordRetryReason(stats, attempt === 1 ? "first_retry" : "subsequent_retry");
      }
      const result = await auditCardsBatch({
        cards,
        stats,
        batchLabel: batchKey,
        auditType: "medium_regression",
      });
      return result.findings;
    } catch (error) {
      if (attempt >= MAX_RETRIES) throw error;
      recordRetryReason(stats, error.message.includes("JSON") ? "invalid_json" : "api_error");
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    }
  }
  return [];
}

async function main() {
  if (!fs.existsSync(SCOPE_PATH)) {
    console.log("No regression scope — skipping");
    return;
  }

  const scope = JSON.parse(fs.readFileSync(SCOPE_PATH, "utf8"));
  const targetIds = new Set(scope.cardIds || []);
  if (targetIds.size === 0) {
    console.log("Empty regression scope — skipping");
    return;
  }

  const hashBefore = { data: md5(BS_FILE), www: md5(WWW_FILE) };
  const lv = load(LV_FILE);
  const bs = load(BS_FILE);
  const stats = createStats();
  const progress = fs.existsSync(PROGRESS_PATH)
    ? JSON.parse(fs.readFileSync(PROGRESS_PATH, "utf8"))
    : { completedBatches: [] };
  const completed = new Set(progress.completedBatches || []);
  const allFindings = fs.existsSync(FINDINGS_PATH)
    ? JSON.parse(fs.readFileSync(FINDINGS_PATH, "utf8"))
    : [];

  const simpleCards = [];
  const studyCards = [];

  for (let i = 0; i < lv.length; i++) {
    const id = entryId(bs[i], i);
    if (!targetIds.has(id)) continue;
    if (bs[i].study) studyCards.push(buildStudyCard(lv[i], bs[i], i));
    else simpleCards.push(buildSimpleCard(lv[i], bs[i], i));
  }

  console.log(`Medium regression: ${targetIds.size} cards (${simpleCards.length} simple, ${studyCards.length} study)`);

  if (simpleCards.length > 0) {
    const batches = chunk(simpleCards, SIMPLE_BATCH);
    for (let i = 0; i < batches.length; i++) {
      const batchKey = `simple-${i}`;
      if (completed.has(batchKey)) continue;
      const findings = await auditBatchWithRetry(batches[i], stats, batchKey);
      allFindings.push(...findings);
      completed.add(batchKey);
      fs.writeFileSync(FINDINGS_PATH, JSON.stringify(allFindings, null, 2));
      fs.writeFileSync(PROGRESS_PATH, JSON.stringify({ completedBatches: [...completed] }, null, 2));
    }
  }

  if (studyCards.length > 0) {
    const batches = chunk(studyCards, STUDY_BATCH);
    for (let i = 0; i < batches.length; i++) {
      const batchKey = `study-${i}`;
      if (completed.has(batchKey)) continue;
      const findings = await auditBatchWithRetry(batches[i], stats, batchKey);
      allFindings.push(...findings);
      completed.add(batchKey);
      fs.writeFileSync(FINDINGS_PATH, JSON.stringify(allFindings, null, 2));
      fs.writeFileSync(PROGRESS_PATH, JSON.stringify({ completedBatches: [...completed] }, null, 2));
    }
  }

  const hashAfter = { data: md5(BS_FILE), www: md5(WWW_FILE) };
  const severityCounts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, WARNING: 0, "SOURCE/LV ISSUE": 0 };
  for (const f of allFindings) {
    const sev = (f.severity || "WARNING").toUpperCase();
    if (severityCounts[sev] !== undefined) severityCounts[sev] += 1;
    else severityCounts.WARNING += 1;
  }

  stats.severityCounts = severityCounts;
  stats.targetCards = targetIds.size;
  stats.completedAt = new Date().toISOString();
  stats.dataUnchanged = hashBefore.data === hashAfter.data;
  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));

  console.log(JSON.stringify({ findings: allFindings.length, severity: severityCounts, tokens: stats.totalTokens }, null, 2));
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
