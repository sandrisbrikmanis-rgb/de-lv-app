#!/usr/bin/env node
/**
 * EN-DE Teikumi (Sätze) full Luna linguistic audit (read-only). All 796 sentences.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const {
  DEFAULT_MODEL,
  createStats,
  auditSentencesBatch,
  recordRetryReason,
} = require("./openai-luna-en-sentences-full-audit");

const ROOT = path.join(__dirname, "..", "..");
const LV_FILE = path.join(ROOT, "data", "sentences.js");
const EN_FILE = path.join(ROOT, "data", "en", "sentences.js");
const WWW_FILE = path.join(ROOT, "www", "data", "en", "sentences.js");
const OUT_JSON = path.join(ROOT, "reports", "temp", "en-sentences-luna-linguistic-findings.json");
const PROGRESS_PATH = path.join(ROOT, "reports", "temp", ".en-sentences-luna-audit-progress.json");
const STATS_PATH = path.join(ROOT, "reports", "temp", ".en-sentences-luna-audit-stats.json");

const BATCH_SIZE = 50;
const MAX_RETRIES = 3;

const NON_ERROR_CATEGORIES = new Set([
  "SOURCE_LV_ISSUE", "DE_SOURCE_ISSUE", "NEEDS_REVIEW", "STYLE_ONLY", "PROJECT_CONVENTION",
]);

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function load(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function entryId(index) {
  return `satze-${index}`;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function loadProgress() {
  if (!fs.existsSync(PROGRESS_PATH)) return { completedBatches: [], auditedCardIds: [] };
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_PATH, "utf8"));
  } catch {
    return { completedBatches: [], auditedCardIds: [] };
  }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2));
}

function loadAuditJson() {
  if (!fs.existsSync(OUT_JSON)) return null;
  try {
    return JSON.parse(fs.readFileSync(OUT_JSON, "utf8"));
  } catch {
    return null;
  }
}

function saveAuditJson(data) {
  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(data, null, 2));
}

function buildSentenceCard(lvE, enE, index) {
  return {
    cardId: entryId(index),
    index,
    field: "lv",
    de: enE.de,
    lvSource: lvE.lv,
    enText: enE.lv,
    level: enE.level || "Sätze",
  };
}

async function auditBatchWithRetry(sentences, stats, batchKey, auditType) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      if (attempt === 0) stats.initialBatchRequests += 1;
      else {
        stats.retryRequests += 1;
        stats.retryCount += 1;
        recordRetryReason(stats, attempt === 1 ? "first_retry" : "subsequent_retry");
      }
      return await auditSentencesBatch({ sentences, stats, batchLabel: batchKey, auditType });
    } catch (error) {
      if (attempt >= MAX_RETRIES) throw error;
      recordRetryReason(stats, error.message.includes("JSON") ? "invalid_json" : "api_error");
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    }
  }
  return { results: [], findings: [], passCount: 0 };
}

function classifyFindings(findings) {
  const severity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const nonError = {
    SOURCE_LV_ISSUE: 0,
    DE_SOURCE_ISSUE: 0,
    NEEDS_REVIEW: 0,
    STYLE_ONLY: 0,
    PROJECT_CONVENTION: 0,
  };
  const deSourceIssues = [];
  const qualityFindings = [];

  for (const f of findings) {
    if (f.status === "PASS") continue;
    const cat = String(f.category || "").toUpperCase();
    if (cat === "DE_SOURCE_ISSUE") {
      nonError.DE_SOURCE_ISSUE += 1;
      deSourceIssues.push(f);
      continue;
    }
    if (NON_ERROR_CATEGORIES.has(cat)) {
      nonError[cat] = (nonError[cat] || 0) + 1;
      continue;
    }
    const sev = String(f.severity || "MEDIUM").toUpperCase();
    if (sev === "WARNING") severity.MEDIUM += 1;
    else if (severity[sev] !== undefined) severity[sev] += 1;
    else severity.MEDIUM += 1;
    qualityFindings.push(f);
  }
  return { severity, nonError, qualityFindings, deSourceIssues };
}

async function main() {
  const hashBefore = {
    en: md5(EN_FILE),
    www: md5(WWW_FILE),
    lv: md5(LV_FILE),
    at: new Date().toISOString(),
  };

  const lv = load(LV_FILE);
  const en = load(EN_FILE);
  const stats = createStats();
  const progress = loadProgress();
  const completed = new Set(progress.completedBatches || []);
  const auditedCardIds = new Set(progress.auditedCardIds || []);

  let auditData = loadAuditJson() || {
    meta: { model: DEFAULT_MODEL, startedAt: new Date().toISOString(), scope: "EN-DE Teikumi" },
    batches: [],
    allResults: [],
    findings: [],
    auditedCardIds: [],
  };

  const sentenceCards = [];
  for (let i = 0; i < lv.length; i++) {
    sentenceCards.push(buildSentenceCard(lv[i], en[i], i));
  }

  console.log(`EN Teikumi Luna audit: ${sentenceCards.length} sentences`);
  console.log(`Model: ${DEFAULT_MODEL}`);

  const batches = chunk(sentenceCards, BATCH_SIZE);
  for (let i = 0; i < batches.length; i++) {
    const batchKey = `satze-${i}`;
    if (completed.has(batchKey)) {
      console.log(`  skip ${batchKey} (cached)`);
      continue;
    }
    const result = await auditBatchWithRetry(batches[i], stats, batchKey, "en_sentences_full");
    auditData.allResults.push(...result.results);
    auditData.findings.push(...result.findings);
    auditData.batches.push({
      key: batchKey,
      type: "en_sentences_full",
      sentenceCount: batches[i].length,
      cardIds: batches[i].map((c) => c.cardId),
      findingsCount: result.findings.length,
      passCount: result.passCount,
      completedAt: new Date().toISOString(),
    });
    for (const c of batches[i]) auditedCardIds.add(c.cardId);
    completed.add(batchKey);
    progress.completedBatches = [...completed];
    progress.auditedCardIds = [...auditedCardIds];
    saveProgress(progress);
    auditData.auditedCardIds = [...auditedCardIds];
    saveAuditJson(auditData);
  }

  const hashAfter = { en: md5(EN_FILE), www: md5(WWW_FILE), lv: md5(LV_FILE) };
  if (hashBefore.en !== hashAfter.en || hashBefore.www !== hashAfter.www) {
    throw new Error("EN DATA FILES CHANGED DURING AUDIT — aborting");
  }

  const { severity, nonError, qualityFindings, deSourceIssues } = classifyFindings(auditData.findings);
  const deduped = [];
  const seen = new Set();
  for (const f of qualityFindings) {
    const key = `${f.cardId}|${f.field}|${(f.currentEn || "").slice(0, 60)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(f);
  }

  auditData.meta.completedAt = new Date().toISOString();
  auditData.meta.hashBefore = hashBefore;
  auditData.meta.hashAfter = hashAfter;
  auditData.meta.dataUnchanged = true;
  auditData.meta.sentencesExpected = lv.length;
  auditData.meta.sentencesAudited = auditedCardIds.size;
  auditData.meta.cardsExpected = lv.length;
  auditData.meta.cardsAudited = auditedCardIds.size;
  auditData.apiUsage = stats;
  auditData.severityCounts = severity;
  auditData.nonErrorCounts = nonError;
  auditData.deSourceIssues = deSourceIssues;
  auditData.qualityFindings = deduped;
  auditData.findings = deduped;
  auditData.auditedCardIds = [...auditedCardIds];
  saveAuditJson(auditData);
  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));

  console.log("\n=== EN Teikumi Luna audit complete ===");
  console.log(
    JSON.stringify(
      {
        model: stats.model,
        requests: stats.requestCount,
        sentencesAudited: auditedCardIds.size,
        findings: deduped.length,
        severity,
        nonError,
        deSourceIssues: deSourceIssues.length,
        tokens: stats.totalTokens,
        dataUnchanged: true,
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error("EN Teikumi Luna audit failed:", error.message);
  process.exit(1);
});
