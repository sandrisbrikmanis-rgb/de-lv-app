#!/usr/bin/env node
/**
 * EN-DE B2 full Luna linguistic audit (read-only). Audits ALL 2118 cards.
 * Usage: OPENAI_API_KEY=... node reports/temp/audit-en-b2-full-luna.js
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const {
  DEFAULT_MODEL,
  createStats,
  auditCardsBatch,
  recordRetryReason,
} = require("./openai-luna-en-b2-full-audit");

const ROOT = path.join(__dirname, "..", "..");
const LV_FILE = path.join(ROOT, "data", "b2.js");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "en", "b2.js");
const OUT_JSON = path.join(ROOT, "reports", "temp", "en-b2-luna-linguistic-findings.json");
const PROGRESS_PATH = path.join(ROOT, "reports", "temp", ".en-b2-luna-audit-progress.json");
const STATS_PATH = path.join(ROOT, "reports", "temp", ".en-b2-luna-audit-stats.json");

const SIMPLE_BATCH = 60;
const STUDY_BATCH = 10;
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
  return ctx.window.B2_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
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

const NATIVE_KEYS = new Set([
  "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "text", "left", "right", "word", "content",
  "explanation", "tip", "important", "mistakes", "remember", "info",
  "formsLabel", "rektion", "forms", "mainIdea", "lv",
]);

function collectEnFields(lvStudy, enStudy, prefix = "study") {
  const fields = [];
  function walk(lvObj, enObj, p) {
    if (!lvObj && !enObj) return;
    if (typeof lvObj === "string" && typeof enObj === "string") {
      const key = p.split(".").pop();
      if (NATIVE_KEYS.has(key) || key === "lv" || p.includes(".lv") || p.includes(".meaning")) {
        fields.push({ field: p, lvSource: lvObj, enText: enObj });
      }
      return;
    }
    if (Array.isArray(lvObj) && Array.isArray(enObj)) {
      const len = Math.max(lvObj.length, enObj.length);
      for (let i = 0; i < len; i++) walk(lvObj[i], enObj[i], `${p}[${i}]`);
      return;
    }
    if (lvObj && typeof lvObj === "object" && enObj && typeof enObj === "object") {
      for (const key of new Set([...Object.keys(lvObj), ...Object.keys(enObj)])) {
        if (key === "de" || key === "sectionAccents" || key === "id" || key === "layout") continue;
        walk(lvObj[key], enObj[key], p ? `${p}.${key}` : key);
      }
    }
  }
  walk(lvStudy, enStudy, prefix);
  return fields;
}

function buildSimpleCard(lvE, enE, index) {
  return {
    cardId: entryId(enE, index),
    field: "lv",
    de: enE.de,
    deArticle: enE.de_article || null,
    dePlural: enE.de_plural || null,
    lvSource: lvE.lv,
    enText: enE.lv,
  };
}

function buildStudyCard(lvE, enE, index) {
  return {
    cardId: entryId(enE, index),
    de: enE.de,
    deArticle: enE.de_article || null,
    layout: enE.study?.layout || "standardStudy",
    fields: collectEnFields(lvE.study, enE.study),
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
      return await auditCardsBatch({ cards, stats, batchLabel: batchKey, auditType });
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
  const hashBefore = { data: md5(EN_FILE), www: md5(WWW_FILE), at: new Date().toISOString() };

  const lv = load(LV_FILE);
  const en = load(EN_FILE);
  const stats = createStats();
  const progress = loadProgress();
  const completed = new Set(progress.completedBatches || []);
  const auditedCardIds = new Set(progress.auditedCardIds || []);

  let auditData = loadAuditJson() || {
    meta: { model: DEFAULT_MODEL, startedAt: new Date().toISOString() },
    batches: [],
    allResults: [],
    findings: [],
    auditedCardIds: [],
  };

  const simpleCards = [];
  const studyCards = [];
  for (let i = 0; i < lv.length; i++) {
    if (en[i].study) studyCards.push(buildStudyCard(lv[i], en[i], i));
    else simpleCards.push(buildSimpleCard(lv[i], en[i], i));
  }

  console.log(`EN B2 Luna audit: ${lv.length} entries (${simpleCards.length} flashcards, ${studyCards.length} study)`);
  console.log(`Model: ${DEFAULT_MODEL}`);

  const processBatches = async (cards, batchSize, prefix, auditType) => {
    const batches = chunk(cards, batchSize);
    for (let i = 0; i < batches.length; i++) {
      const batchKey = `${prefix}-${i}`;
      if (completed.has(batchKey)) {
        console.log(`  skip ${batchKey} (cached)`);
        continue;
      }
      const result = await auditBatchWithRetry(batches[i], stats, batchKey, auditType);
      auditData.allResults.push(...result.results);
      auditData.findings.push(...result.findings);
      auditData.batches.push({
        key: batchKey,
        type: auditType,
        cardCount: batches[i].length,
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
  };

  await processBatches(simpleCards, SIMPLE_BATCH, "simple", "en_b2_full_simple");
  await processBatches(studyCards, STUDY_BATCH, "study", "en_b2_full_study");

  const hashAfter = { data: md5(EN_FILE), www: md5(WWW_FILE) };
  if (hashBefore.data !== hashAfter.data || hashBefore.www !== hashAfter.www) {
    throw new Error("DATA FILES CHANGED DURING AUDIT — aborting");
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
  auditData.meta.cardsExpected = lv.length;
  auditData.meta.cardsAudited = auditedCardIds.size;
  auditData.meta.flashcardsExpected = simpleCards.length;
  auditData.meta.flashcardsAudited = simpleCards.filter((c) => auditedCardIds.has(c.cardId)).length;
  auditData.meta.studyExpected = studyCards.length;
  auditData.meta.studyAudited = studyCards.filter((c) => auditedCardIds.has(c.cardId)).length;
  auditData.meta.standardStudy = studyCards.filter((c) => c.layout === "standardStudy").length;
  auditData.meta.minimalStudy = studyCards.filter((c) => c.layout === "minimalStudy").length;
  auditData.apiUsage = stats;
  auditData.severityCounts = severity;
  auditData.nonErrorCounts = nonError;
  auditData.deSourceIssues = deSourceIssues;
  auditData.qualityFindings = deduped;
  auditData.findings = deduped;
  auditData.auditedCardIds = [...auditedCardIds];
  saveAuditJson(auditData);
  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));

  console.log("\n=== EN B2 Luna audit complete ===");
  console.log(
    JSON.stringify(
      {
        model: stats.model,
        requests: stats.requestCount,
        cardsAudited: auditedCardIds.size,
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
  console.error("EN B2 Luna audit failed:", error.message);
  process.exit(1);
});
