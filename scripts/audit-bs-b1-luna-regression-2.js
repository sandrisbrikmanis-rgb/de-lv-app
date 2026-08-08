#!/usr/bin/env node
/**
 * BS-DE B1 Luna targeted regression audit #2 (read-only).
 * Audits only cards from bs-b1-luna-regression-scope-2.json (36 cards).
 *
 * Usage:
 *   node scripts/audit-bs-b1-luna-regression-2.js [--test-batch]
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
const SCOPE_PATH = path.join(ROOT, "reports", "temp", "bs-b1-luna-regression-scope-2.json");
const FINDINGS_PATH = path.join(ROOT, "reports", "temp", "bs-b1-luna-regression-2-findings.json");
const STATS_PATH = path.join(ROOT, "scripts", ".bs-b1-luna-regression-2-audit-stats.json");
const PROGRESS_PATH = path.join(ROOT, "scripts", ".bs-b1-luna-regression-2-audit-progress.json");
const HASH_PATH = path.join(ROOT, "reports", "temp", "bs-b1-luna-regression-2-hash.txt");

const TEST_BATCH = process.argv.includes("--test-batch");
const SIMPLE_BATCH = 10;
const STUDY_BATCH = 16;
const MAX_RETRIES = 3;

const CRITICAL_CARDS = ["b1-See-2572"];

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

function loadProgress() {
  if (!fs.existsSync(PROGRESS_PATH)) return { completedBatches: [] };
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_PATH, "utf8"));
  } catch {
    return { completedBatches: [] };
  }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2));
}

function loadFindings() {
  if (!fs.existsSync(FINDINGS_PATH)) return [];
  try {
    return JSON.parse(fs.readFileSync(FINDINGS_PATH, "utf8"));
  } catch {
    return [];
  }
}

function saveFindings(findings) {
  fs.mkdirSync(path.dirname(FINDINGS_PATH), { recursive: true });
  fs.writeFileSync(FINDINGS_PATH, JSON.stringify(findings, null, 2));
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
    dePlural: bsE.de_plural || null,
    lvSource: lvE.lv,
    bsText: bsE.lv,
    regressionPriority: CRITICAL_CARDS.includes(entryId(bsE, index)) ? "CRITICAL_CHECK" : "normal",
  };
}

function buildStudyCard(lvE, bsE, index) {
  const cardId = entryId(bsE, index);
  return {
    cardId,
    de: bsE.de,
    deArticle: bsE.de_article || null,
    layout: bsE.study?.layout || "standardStudy",
    fields: collectStudyFields(lvE.study, bsE.study),
    sectionAccents: bsE.study?.sectionAccents || null,
    regressionPriority: CRITICAL_CARDS.includes(cardId) ? "CRITICAL_CHECK" : "normal",
  };
}

async function auditBatchWithRetry(cards, stats, batchKey, auditType) {
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
        auditType,
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
  const hashBefore = {
    data: md5(BS_FILE),
    www: md5(WWW_FILE),
    at: new Date().toISOString(),
  };
  fs.writeFileSync(HASH_PATH, JSON.stringify(hashBefore, null, 2));

  const scope = JSON.parse(fs.readFileSync(SCOPE_PATH, "utf8"));
  const targetIds = new Set(scope.allCardIds || []);
  if (targetIds.size !== 36) {
    console.warn(`Warning: expected 36 cards, got ${targetIds.size}`);
  }

  const lv = load(LV_FILE);
  const bs = load(BS_FILE);
  const stats = createStats();
  const progress = loadProgress();
  const allFindings = loadFindings();
  const completed = new Set(progress.completedBatches || []);

  const simpleCards = [];
  const studyCards = [];

  for (let i = 0; i < lv.length; i++) {
    const id = entryId(bs[i], i);
    if (!targetIds.has(id)) continue;
    if (bs[i].study) studyCards.push(buildStudyCard(lv[i], bs[i], i));
    else simpleCards.push(buildSimpleCard(lv[i], bs[i], i));
  }

  console.log(`Luna regression audit #2: ${targetIds.size} cards (${simpleCards.length} simple, ${studyCards.length} study)`);
  console.log(`Model: ${DEFAULT_MODEL}`);
  if (TEST_BATCH) console.log("TEST BATCH mode");

  if (simpleCards.length > 0) {
    const batches = chunk(simpleCards, SIMPLE_BATCH);
    const limit = TEST_BATCH ? 1 : batches.length;
    for (let i = 0; i < limit; i++) {
      const batchKey = `simple-${i}`;
      if (completed.has(batchKey)) {
        console.log(`  skip ${batchKey} (cached)`);
        continue;
      }
      const findings = await auditBatchWithRetry(batches[i], stats, batchKey, "regression2_simple");
      allFindings.push(...findings);
      completed.add(batchKey);
      saveFindings(allFindings);
      saveProgress({ completedBatches: [...completed] });
    }
  }

  if (studyCards.length > 0) {
    const batches = chunk(studyCards, STUDY_BATCH);
    const limit = TEST_BATCH ? 1 : batches.length;
    for (let i = 0; i < limit; i++) {
      const batchKey = `study-${i}`;
      if (completed.has(batchKey)) {
        console.log(`  skip ${batchKey} (cached)`);
        continue;
      }
      const findings = await auditBatchWithRetry(batches[i], stats, batchKey, "regression2_study");
      allFindings.push(...findings);
      completed.add(batchKey);
      saveFindings(allFindings);
      saveProgress({ completedBatches: [...completed] });
    }
  }

  const hashAfter = { data: md5(BS_FILE), www: md5(WWW_FILE) };
  if (hashBefore.data !== hashAfter.data || hashBefore.www !== hashAfter.www) {
    throw new Error("DATA FILES CHANGED DURING AUDIT — aborting");
  }

  const severityCounts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, WARNING: 0, "SOURCE/LV ISSUE": 0 };
  for (const f of allFindings) {
    const sev = (f.severity || "WARNING").toUpperCase();
    if (severityCounts[sev] !== undefined) severityCounts[sev] += 1;
    else severityCounts.WARNING += 1;
  }

  stats.severityCounts = severityCounts;
  stats.targetCards = targetIds.size;
  stats.simpleCards = simpleCards.length;
  stats.studyCards = studyCards.length;
  stats.completedAt = new Date().toISOString();
  stats.hashBefore = hashBefore;
  stats.hashAfter = hashAfter;
  stats.dataUnchanged = hashBefore.data === hashAfter.data;

  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));
  saveFindings(allFindings);

  console.log("\n=== Luna regression audit #2 complete ===");
  console.log(JSON.stringify({
    model: stats.model,
    requests: stats.requestCount,
    initial: stats.initialBatchRequests,
    retries: stats.retryRequests,
    findings: allFindings.length,
    severity: severityCounts,
    tokens: stats.totalTokens,
    dataUnchanged: stats.dataUnchanged,
  }, null, 2));
}

main().catch((error) => {
  console.error("Luna regression audit #2 failed:", error.message);
  process.exit(1);
});
