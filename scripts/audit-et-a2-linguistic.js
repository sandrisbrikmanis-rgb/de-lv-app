#!/usr/bin/env node
"use strict";
/**
 * ET-DE A2 linguistic audit with GPT-5.6 Luna (READ-ONLY).
 * Usage: node scripts/audit-et-a2-linguistic.js [--test-batch] [--resume]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const {
  BATCH_SIZE,
  STUDY_BATCH_SIZE,
  ET_FILE,
  TEMP_DIR,
  LUNA_JSON,
  buildCards,
  chunk,
  ensureDir,
  loadProgress,
  saveProgress,
} = require("./lib/et-a2-audit-helpers");
const {
  createStats,
  auditCardsBatch,
  classifyFindings,
} = require("./lib/openai-et-a2-audit");

const TEST_BATCH = process.argv.includes("--test-batch");
const RESUME = process.argv.includes("--resume");
const MAX_RETRIES = 3;

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

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
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY required for GPT-5.6 Luna audit");
  }

  const hashBefore = md5(ET_FILE);
  ensureDir(TEMP_DIR);

  const stats = createStats();
  const progress = RESUME ? loadProgress() : { completedBatches: [], auditedCardIds: [] };
  const completed = new Set(progress.completedBatches || []);
  const auditedCardIds = new Set(progress.auditedCardIds || []);

  let auditData = fs.existsSync(LUNA_JSON)
    ? JSON.parse(fs.readFileSync(LUNA_JSON, "utf8"))
    : { meta: { dataset: "et-a2", startedAt: new Date().toISOString() }, batches: [], allResults: [], findings: [] };

  if (!RESUME) {
    auditData = { meta: { dataset: "et-a2", startedAt: new Date().toISOString() }, batches: [], allResults: [], findings: [] };
  }

  const { simple, study } = buildCards();
  const totalCards = simple.length + study.length;
  console.log(`ET A1 Luna audit: ${totalCards} entries (${simple.length} simple, ${study.length} study)`);
  if (TEST_BATCH) console.log("TEST BATCH mode — 1 batch only");

  const saveBatch = (batchKey, cards, result, auditType) => {
    const batchFile = path.join(TEMP_DIR, `${batchKey}.json`);
    const batchData = {
      dataset: "et-a2",
      batch: batchKey,
      auditType,
      cardCount: cards.length,
      cardIds: cards.map((c) => c.cardId),
      findings: result.findings,
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
      const batchKey = `${prefix}-${String(start).padStart(3, "0")}-${String(end).padStart(3, "0")}`;
      if (completed.has(batchKey)) {
        console.log(`  skip ${batchKey} (cached)`);
        continue;
      }
      const result = await auditBatchWithRetry(batches[i], stats, batchKey, auditType);
      saveBatch(batchKey, batches[i], result, auditType);
    }
  };

  await processBatches(simple, BATCH_SIZE, "simple", "vocab_simple");
  if (!TEST_BATCH || study.length > 0) {
    await processBatches(study, STUDY_BATCH_SIZE, "study", "vocab_study");
  }

  const hashAfter = md5(ET_FILE);
  if (hashBefore !== hashAfter) {
    throw new Error("DATA FILES CHANGED DURING AUDIT");
  }

  const { severity, nonError, qualityFindings } = classifyFindings(auditData.findings);
  const deduped = [];
  const seen = new Set();
  for (const f of qualityFindings) {
    const key = `${f.cardId}|${f.field}|${String(f.currentEt || "").slice(0, 60)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(f);
  }

  auditData.meta.completedAt = new Date().toISOString();
  auditData.meta.model = stats.model;
  auditData.meta.cardsExpected = totalCards;
  auditData.meta.cardsAudited = auditedCardIds.size;
  auditData.meta.coverage = auditedCardIds.size === totalCards ? "100%" : `${auditedCardIds.size}/${totalCards}`;
  auditData.meta.dataUnchanged = true;
  auditData.apiUsage = stats;
  auditData.severityCounts = severity;
  auditData.nonErrorCounts = nonError;
  auditData.qualityFindings = deduped;
  fs.writeFileSync(LUNA_JSON, JSON.stringify(auditData, null, 2));

  console.log(JSON.stringify({
    cardsAudited: auditedCardIds.size,
    totalCards,
    findings: deduped.length,
    severity,
    nonError,
    stats,
  }, null, 2));
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
