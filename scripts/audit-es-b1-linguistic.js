#!/usr/bin/env node
"use strict";
/**
 * ES-DE B1 linguistic audit with GPT-5.6 Luna (READ-ONLY).
 * Usage: node scripts/audit-es-b1-linguistic.js [--test-batch] [--resume] [--fresh]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const {
  BATCH_SIZE,
  STUDY_BATCH_SIZE,
  ES_FILE,
  TEMP_DIR,
  LUNA_JSON,
  buildCards,
  chunk,
  ensureDir,
  dataFileHash,
  loadProgress,
  saveProgress,
} = require("./lib/es-b1-audit-helpers");
const { createStats } = require("./lib/openai-es-a1-a2-audit");
const { auditCardsBatch, classifyFindings } = require("./lib/openai-es-b1-audit");

const TEST_BATCH = process.argv.includes("--test-batch");
const RESUME = process.argv.includes("--resume");
const FRESH = process.argv.includes("--fresh");
const MAX_RETRIES = 3;

async function auditBatchWithRetry(cards, stats, batchKey, auditType) {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await auditCardsBatch({ cards, stats, batchLabel: batchKey, auditType });
    } catch (error) {
      if (attempt >= MAX_RETRIES) throw error;
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  return { results: [], findings: [], passCount: 0 };
}

async function main() {
  if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");

  const hashBefore = dataFileHash();
  ensureDir(TEMP_DIR);
  if (FRESH) {
    if (fs.existsSync(LUNA_JSON)) fs.unlinkSync(LUNA_JSON);
    if (fs.existsSync(path.join(__dirname, ".es-de-b1-luna-progress.json"))) {
      fs.unlinkSync(path.join(__dirname, ".es-de-b1-luna-progress.json"));
    }
    if (fs.existsSync(TEMP_DIR)) fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    ensureDir(TEMP_DIR);
  }

  const stats = createStats();
  const progress = RESUME && !FRESH ? loadProgress() : { completedBatches: [], auditedCardIds: [], failedBatches: [], retryBatches: [] };
  const completed = new Set(progress.completedBatches || []);
  const auditedCardIds = new Set(progress.auditedCardIds || []);

  let auditData = fs.existsSync(LUNA_JSON)
    ? JSON.parse(fs.readFileSync(LUNA_JSON, "utf8"))
    : { meta: { dataset: "es-de-b1", startedAt: new Date().toISOString() }, batches: [], allResults: [], findings: [] };

  if (!RESUME || FRESH) {
    auditData = { meta: { dataset: "es-de-b1", startedAt: new Date().toISOString() }, batches: [], allResults: [], findings: [] };
  }

  const { simple, study } = buildCards();
  const totalCards = simple.length + study.length;
  console.log(`ES B1 Luna audit: ${totalCards} entries (${simple.length} simple, ${study.length} study)`);

  const saveBatch = (batchKey, cards, result, auditType) => {
    const batchFile = path.join(TEMP_DIR, `${batchKey}.json`);
    const batchData = {
      dataset: "es-de-b1",
      batch: batchKey,
      auditType,
      cardCount: cards.length,
      cardIds: cards.map((c) => c.cardId),
      findings: result.findings,
      results: result.results,
      passCount: result.passCount,
      completedAt: new Date().toISOString(),
    };
    fs.writeFileSync(batchFile, JSON.stringify(batchData, null, 2));
    auditData.allResults.push(...result.results);
    auditData.findings.push(...result.findings);
    auditData.batches.push(batchData);
    for (const c of cards) auditedCardIds.add(c.cardId);
    completed.add(batchKey);
    progress.completedBatches = [...completed];
    progress.auditedCardIds = [...auditedCardIds];
    saveProgress(progress);
    auditData.auditedCardIds = [...auditedCardIds];
    fs.writeFileSync(LUNA_JSON, JSON.stringify(auditData, null, 2));
  };

  const processBatches = async (cards, batchSize, prefix, auditType) => {
    const batches = chunk(cards, batchSize);
    const limit = TEST_BATCH ? 1 : batches.length;
    for (let i = 0; i < limit; i++) {
      const start = i * batchSize + 1;
      const end = Math.min((i + 1) * batchSize, cards.length);
      const batchKey = `${prefix}-${String(start).padStart(4, "0")}-${String(end).padStart(4, "0")}`;
      if (completed.has(batchKey)) {
        console.log(`  skip ${batchKey} (cached)`);
        continue;
      }
      const result = await auditBatchWithRetry(batches[i], stats, batchKey, auditType);
      saveBatch(batchKey, batches[i], result, auditType);
      if (TEST_BATCH) break;
    }
  };

  await processBatches(simple, BATCH_SIZE, "simple", "vocab_simple");
  if (!TEST_BATCH) await processBatches(study, STUDY_BATCH_SIZE, "study", "vocab_study");

  const hashAfter = dataFileHash();
  if (hashBefore !== hashAfter) throw new Error("DATA FILES CHANGED DURING AUDIT");

  const { severity, nonError, qualityFindings } = classifyFindings(auditData.findings);
  const deduped = [];
  const seen = new Set();
  for (const f of qualityFindings) {
    const key = `${f.cardId}|${f.field}|${String(f.currentEs || "").slice(0, 60)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(f);
  }

  auditData.meta.completedAt = new Date().toISOString();
  auditData.meta.model = stats.model;
  auditData.meta.cardsExpected = totalCards;
  auditData.meta.cardsAudited = auditedCardIds.size;
  auditData.meta.coverage = auditedCardIds.size === totalCards ? "100%" : `${auditedCardIds.size}/${totalCards}`;
  auditData.meta.batchCount = auditData.batches.length;
  auditData.meta.failedBatches = progress.failedBatches?.length || 0;
  auditData.meta.retryBatches = progress.retryBatches?.length || 0;
  auditData.meta.dataUnchanged = true;
  auditData.apiUsage = stats;
  auditData.severityCounts = severity;
  auditData.nonErrorCounts = nonError;
  auditData.qualityFindings = deduped;
  fs.writeFileSync(LUNA_JSON, JSON.stringify(auditData, null, 2));

  console.log(
    JSON.stringify(
      {
        cardsAudited: auditedCardIds.size,
        totalCards,
        findings: deduped.length,
        severity,
        nonError,
        batchCount: auditData.batches.length,
      },
      null,
      2,
    ),
  );
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
