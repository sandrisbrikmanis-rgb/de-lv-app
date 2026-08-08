#!/usr/bin/env node
/**
 * EN-DE B1 Luna linguistic audit (read-only). Requires OPENAI_API_KEY + gpt-5.6-luna.
 *
 * Usage:
 *   node reports/temp/audit-en-b1-luna.js [--test-batch]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const {
  DEFAULT_MODEL,
  createStats,
  auditCardsBatch,
  recordRetryReason,
} = require("../../scripts/lib/openai-luna-audit-batch");

const LV_FILE = path.join(ROOT, "data", "b1.js");
const EN_FILE = path.join(ROOT, "data", "en", "b1.js");
const FINDINGS_PATH = path.join(ROOT, "reports", "temp", "en-b1-luna-findings.json");
const STATS_PATH = path.join(ROOT, "scripts", ".en-b1-luna-audit-stats.json");
const PROGRESS_PATH = path.join(ROOT, "scripts", ".en-b1-luna-audit-progress.json");

const TEST_BATCH = process.argv.includes("--test-batch");
const SIMPLE_BATCH = 80;
const STUDY_BATCH = 10;
const MAX_RETRIES = 3;

const EN_SYSTEM_EXTRA = [
  "You are auditing EN-DE B1 (English translations for English learners of German).",
  "LV source is Latvian master gloss for context only — target language is English.",
  "Correct and natural current English = PASS.",
  "Do not report stylistic alternatives as errors.",
  "Different wording is not automatically better wording.",
  "Do not prefer a synonym unless current text is inaccurate, unnatural, misleading, or pedagogically unsuitable.",
  "If German source seems wrong but English is correct per DE: DE SOURCE ISSUE.",
  "Do NOT suggest changes to German (DE) fields.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW | WARNING | DE SOURCE ISSUE.",
  "Return items with: cardId, field, severity, currentText, recommendedFix, shortReason.",
  "For confirmed PASS on a card in batch: { cardId, status: \"OK\" }.",
].join("\n");

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

function collectStudyFields(lvStudy, enStudy, prefix = "study") {
  const fields = [];
  const NATIVE_KEYS = new Set([
    "translation", "title", "subtitle", "lead", "meaning", "describes",
    "label", "description", "text", "left", "right", "word", "content",
    "explanation", "tip", "important", "mistakes", "remember", "info",
  ]);

  function walk(lvObj, enObj, p) {
    if (!lvObj && !enObj) return;
    if (typeof lvObj === "string" && typeof enObj === "string") {
      const key = p.split(".").pop();
      if (NATIVE_KEYS.has(key) || key === "lv" || p.includes(".lv")) {
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
  const cardId = entryId(enE, index);
  return {
    cardId,
    de: enE.de,
    deArticle: enE.de_article || null,
    layout: enE.study?.layout || "standardStudy",
    fields: collectStudyFields(lvE.study, enE.study),
    sectionAccents: enE.study?.sectionAccents || null,
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
        auditType: `${auditType} EN-DE B1 English learners. ${EN_SYSTEM_EXTRA}`,
      });
      return result;
    } catch (error) {
      if (attempt >= MAX_RETRIES) throw error;
      recordRetryReason(stats, error.message.includes("JSON") ? "invalid_json" : "api_error");
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    }
  }
  return { findings: [], okCount: 0 };
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

async function main() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    console.error("STOP: OPENAI_API_KEY not set. Luna audit cannot run.");
    process.exit(2);
  }

  const lv = load(LV_FILE);
  const en = load(EN_FILE);
  const stats = createStats();
  const progress = loadProgress();
  const completed = new Set(progress.completedBatches || []);
  const auditedIds = new Set(progress.auditedCardIds || []);
  const allFindings = [];

  const simpleCards = [];
  const studyCards = [];

  for (let i = 0; i < lv.length; i++) {
    if (en[i].study) studyCards.push(buildStudyCard(lv[i], en[i], i));
    else simpleCards.push(buildSimpleCard(lv[i], en[i], i));
  }

  console.log(`EN B1 Luna audit: ${lv.length} entries, ${simpleCards.length} simple, ${studyCards.length} study`);
  console.log(`Model: ${DEFAULT_MODEL}`);

  for (const [cards, batchSize, type, prefix] of [
    [simpleCards, SIMPLE_BATCH, "simple_translation", "simple"],
    [studyCards, STUDY_BATCH, "study_card", "study"],
  ]) {
    const batches = chunk(cards, batchSize);
    const limit = TEST_BATCH ? 1 : batches.length;
    for (let i = 0; i < limit; i++) {
      const batchKey = `${prefix}-${i}`;
      if (completed.has(batchKey)) {
        console.log(`  skip ${batchKey} (cached)`);
        batches[i].forEach((c) => auditedIds.add(c.cardId));
        continue;
      }
      const result = await auditBatchWithRetry(batches[i], stats, batchKey, type);
      for (const f of result.findings || []) {
        allFindings.push({
          cardId: f.cardId,
          field: f.field,
          severity: f.severity,
          currentEn: f.existingBsText || f.currentText,
          recommendedEn: f.recommendedFix,
          reason: f.problem || f.justification,
          source: "luna",
        });
      }
      batches[i].forEach((c) => auditedIds.add(c.cardId));
      completed.add(batchKey);
      saveProgress({ completedBatches: [...completed], auditedCardIds: [...auditedIds] });
    }
  }

  const coverage = {
    normalCards: { audited: simpleCards.filter((c) => auditedIds.has(c.cardId)).length, total: simpleCards.length },
    standardStudy: {
      audited: studyCards.filter((c) => c.layout === "standardStudy" && auditedIds.has(c.cardId)).length,
      total: studyCards.filter((c) => c.layout === "standardStudy").length,
    },
    minimalStudy: {
      audited: studyCards.filter((c) => c.layout === "minimalStudy" && auditedIds.has(c.cardId)).length,
      total: studyCards.filter((c) => c.layout === "minimalStudy").length,
    },
    totalCards: { audited: auditedIds.size, total: lv.length },
    studyCards: { audited: studyCards.filter((c) => auditedIds.has(c.cardId)).length, total: studyCards.length },
  };

  const severityCounts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, WARNING: 0, "DE SOURCE ISSUE": 0 };
  for (const f of allFindings) {
    const sev = (f.severity || "WARNING").toUpperCase();
    if (severityCounts[sev] !== undefined) severityCounts[sev]++;
    else severityCounts.WARNING++;
  }

  const output = {
    status: "COMPLETE",
    model: DEFAULT_MODEL,
    generatedAt: new Date().toISOString(),
    coverage,
    findings: allFindings,
    severityCounts,
    stats,
  };

  fs.mkdirSync(path.dirname(FINDINGS_PATH), { recursive: true });
  fs.writeFileSync(FINDINGS_PATH, JSON.stringify(output, null, 2));
  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));
  console.log(JSON.stringify({ coverage, findings: allFindings.length, severityCounts }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
