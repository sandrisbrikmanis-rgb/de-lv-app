#!/usr/bin/env node
/**
 * BS-DE B1 Terra AI quality audit (read-only). Audits all 3367 entries with batching.
 *
 * Usage:
 *   node scripts/audit-bs-b1-terra.js [--test-batch] [--skip-study] [--skip-simple]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const {
  DEFAULT_MODEL,
  createStats,
  auditCardsBatch,
  estimateCostUsd,
  recordRetryReason,
} = require("./lib/openai-audit-batch");

const LV_FILE = path.join(ROOT, "data", "b1.js");
const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const FINDINGS_PATH = path.join(ROOT, "reports", "temp", "bs-b1-terra-findings.json");
const STATS_PATH = path.join(ROOT, "scripts", ".bs-b1-terra-audit-stats.json");
const PROGRESS_PATH = path.join(ROOT, "scripts", ".bs-b1-terra-audit-progress.json");

const TEST_BATCH = process.argv.includes("--test-batch");
const SKIP_STUDY = process.argv.includes("--skip-study");
const SKIP_SIMPLE = process.argv.includes("--skip-simple");

const SIMPLE_BATCH = 80;
const STUDY_BATCH = 10;
const MAX_RETRIES = 3;

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

function buildSimpleCard(lvE, bsE, index) {
  return {
    cardId: entryId(bsE, index),
    field: "lv",
    de: bsE.de,
    deArticle: bsE.de_article || null,
    dePlural: bsE.de_plural || null,
    lvSource: lvE.lv,
    bsText: bsE.lv,
  };
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
        fields.push({
          field: p,
          lvSource: lvObj,
          bsText: bsObj,
        });
      }
      return;
    }
    if (Array.isArray(lvObj) && Array.isArray(bsObj)) {
      const len = Math.max(lvObj.length, bsObj.length);
      for (let i = 0; i < len; i++) {
        walk(lvObj[i], bsObj[i], `${p}[${i}]`);
      }
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

function buildStudyCard(lvE, bsE, index) {
  const cardId = entryId(bsE, index);
  const fields = collectStudyFields(lvE.study, bsE.study);
  return {
    cardId,
    de: bsE.de,
    deArticle: bsE.de_article || null,
    layout: bsE.study?.layout || "standardStudy",
    fields,
    sectionAccents: bsE.study?.sectionAccents || null,
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
  const lv = load(LV_FILE);
  const bs = load(BS_FILE);
  const stats = createStats();
  const progress = loadProgress();
  const allFindings = loadFindings();
  const completed = new Set(progress.completedBatches || []);

  const simpleCards = [];
  const studyCards = [];

  for (let i = 0; i < lv.length; i++) {
    if (bs[i].study) {
      studyCards.push(buildStudyCard(lv[i], bs[i], i));
    } else {
      simpleCards.push(buildSimpleCard(lv[i], bs[i], i));
    }
  }

  console.log(`B1 Terra audit: ${lv.length} entries, ${simpleCards.length} simple, ${studyCards.length} study`);
  console.log(`Model: ${DEFAULT_MODEL}`);
  if (TEST_BATCH) console.log("TEST BATCH mode — only first batch of each type");

  // Simple cards
  if (!SKIP_SIMPLE) {
    const batches = chunk(simpleCards, SIMPLE_BATCH);
    const limit = TEST_BATCH ? 1 : batches.length;
    for (let i = 0; i < limit; i++) {
      const batchKey = `simple-${i}`;
      if (completed.has(batchKey)) {
        console.log(`  skip ${batchKey} (cached)`);
        continue;
      }
      const findings = await auditBatchWithRetry(batches[i], stats, batchKey, "simple_translation");
      allFindings.push(...findings);
      completed.add(batchKey);
      saveFindings(allFindings);
      saveProgress({ completedBatches: [...completed] });
    }
  }

  // Study cards
  if (!SKIP_STUDY) {
    const batches = chunk(studyCards, STUDY_BATCH);
    const limit = TEST_BATCH ? 1 : batches.length;
    for (let i = 0; i < limit; i++) {
      const batchKey = `study-${i}`;
      if (completed.has(batchKey)) {
        console.log(`  skip ${batchKey} (cached)`);
        continue;
      }
      const findings = await auditBatchWithRetry(batches[i], stats, batchKey, "study_card");
      allFindings.push(...findings);
      completed.add(batchKey);
      saveFindings(allFindings);
      saveProgress({ completedBatches: [...completed] });
    }
  }

  stats.estimatedCostUsd = estimateCostUsd(stats);
  stats.simpleCards = simpleCards.length;
  stats.studyCards = studyCards.length;
  stats.totalEntries = lv.length;
  stats.completedAt = new Date().toISOString();

  const severityCounts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, WARNING: 0 };
  for (const f of allFindings) {
    const sev = (f.severity || "WARNING").toUpperCase();
    if (severityCounts[sev] !== undefined) severityCounts[sev] += 1;
    else severityCounts.WARNING += 1;
  }
  stats.severityCounts = severityCounts;

  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));
  saveFindings(allFindings);

  console.log("\n=== Terra audit complete ===");
  console.log(JSON.stringify({
    model: stats.model,
    requests: stats.requestCount,
    initial: stats.initialBatchRequests,
    retries: stats.retryRequests,
    findings: allFindings.length,
    severity: severityCounts,
    tokens: stats.totalTokens,
    costUsd: stats.estimatedCostUsd?.toFixed(4),
  }, null, 2));
}

main().catch((error) => {
  console.error("Terra audit failed:", error.message);
  process.exit(1);
});
