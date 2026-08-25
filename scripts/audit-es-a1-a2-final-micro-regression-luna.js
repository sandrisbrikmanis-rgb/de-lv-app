#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 final micro-regression Luna audit (READ-ONLY, scoped cards).
 * Usage: node scripts/audit-es-a1-a2-final-micro-regression-luna.js [--fresh] [--resume]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const {
  BATCH_SIZE,
  STUDY_BATCH_SIZE,
  chunk,
  ensureDir,
  dataFileHashes,
} = require("./lib/es-a1-a2-audit-helpers");
const {
  TEMP_DIR,
  LUNA_JSON,
  PROGRESS_FILE,
} = require("./lib/es-a1-a2-final-micro-regression-paths");
const { buildScope, saveScope } = require("./lib/es-a1-a2-final-micro-regression-scope");
const {
  createStats,
  auditCardsBatch,
  classifyFindings,
} = require("./lib/openai-es-a1-a2-audit");

const FRESH = process.argv.includes("--fresh");
const RESUME = process.argv.includes("--resume");
const MAX_RETRIES = 3;

function loadProgress() {
  if (!fs.existsSync(PROGRESS_FILE)) return { completedBatches: [], auditedCardIds: [], failedBatches: [], retryBatches: [] };
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
  } catch {
    return { completedBatches: [], auditedCardIds: [], failedBatches: [], retryBatches: [] };
  }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
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

  const hashesBefore = dataFileHashes();
  ensureDir(TEMP_DIR);

  if (FRESH) {
    if (fs.existsSync(LUNA_JSON)) fs.unlinkSync(LUNA_JSON);
    if (fs.existsSync(PROGRESS_FILE)) fs.unlinkSync(PROGRESS_FILE);
    if (fs.existsSync(TEMP_DIR)) fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    ensureDir(TEMP_DIR);
  }

  const { payload, scopedSimple, scopedStudy } = buildScope();
  saveScope({ payload });

  if (payload.missingCardTargets > 0 || payload.missingFieldTargets > 0 || payload.notFound.length > 0) {
    throw new Error(
      `Scope invalid: missingCard=${payload.missingCardTargets} missingField=${payload.missingFieldTargets} notFound=${payload.notFound.join(",")}`,
    );
  }

  const totalCards = payload.scopedTotal;
  const stats = createStats();
  const progress = RESUME && !FRESH ? loadProgress() : { completedBatches: [], auditedCardIds: [], failedBatches: [], retryBatches: [] };
  const completed = new Set(progress.completedBatches || []);
  const auditedCardIds = new Set(progress.auditedCardIds || []);

  let auditData = fs.existsSync(LUNA_JSON)
    ? JSON.parse(fs.readFileSync(LUNA_JSON, "utf8"))
    : { meta: { dataset: "es-a1-a2-micro-regression" }, batches: [], findings: [] };

  if (!RESUME || FRESH) {
    auditData = {
      meta: { dataset: "es-a1-a2-micro-regression", startedAt: new Date().toISOString() },
      batches: [],
      findings: [],
    };
  }

  console.log(
    `ES A1+A2 micro-regression Luna: ${totalCards} scoped cards (${payload.scopedSimple} simple, ${payload.scopedStudy} study) from ${payload.uniqueCards} unique targets`,
  );

  const saveBatch = (batchKey, cards, result, auditType) => {
    const batchFile = path.join(TEMP_DIR, `${batchKey}.json`);
    const batchData = {
      dataset: "es-a1-a2-micro-regression",
      batch: batchKey,
      auditType,
      cardCount: cards.length,
      cardIds: cards.map((c) => c.cardId),
      findings: result.findings,
      passCount: result.passCount,
      completedAt: new Date().toISOString(),
    };
    fs.writeFileSync(batchFile, JSON.stringify(batchData, null, 2));
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
    for (let i = 0; i < batches.length; i++) {
      const start = i * batchSize + 1;
      const end = Math.min((i + 1) * batchSize, cards.length);
      const batchKey = `${prefix}-${String(start).padStart(4, "0")}-${String(end).padStart(4, "0")}`;
      if (completed.has(batchKey)) {
        console.log(`  skip ${batchKey} (cached)`);
        continue;
      }
      const result = await auditBatchWithRetry(batches[i], stats, batchKey, auditType);
      saveBatch(batchKey, batches[i], result, auditType);
    }
  };

  await processBatches(scopedSimple, BATCH_SIZE, "micro-simple", "vocab_simple");
  await processBatches(scopedStudy, STUDY_BATCH_SIZE, "micro-study", "vocab_study");

  const hashesAfter = dataFileHashes();
  if (JSON.stringify(hashesBefore) !== JSON.stringify(hashesAfter)) {
    throw new Error("DATA FILES CHANGED DURING AUDIT");
  }

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
  auditData.meta.uniqueTargetCards = payload.uniqueCards;
  auditData.meta.ownerTargets = payload.ownerTargets;
  auditData.meta.coverage =
    auditedCardIds.size === totalCards ? "100%" : `${auditedCardIds.size}/${totalCards}`;
  auditData.meta.dataUnchanged = true;
  auditData.meta.batchCount = auditData.batches.length;
  auditData.apiUsage = stats;
  auditData.severityCounts = severity;
  auditData.nonErrorCounts = nonError;
  auditData.qualityFindings = deduped;
  auditData.scope = {
    ownerTargets: payload.ownerTargets,
    uniqueCards: payload.uniqueCards,
    a1Cards: payload.a1Cards,
    a2Cards: payload.a2Cards,
    scopedTotal: payload.scopedTotal,
  };
  fs.writeFileSync(LUNA_JSON, JSON.stringify(auditData, null, 2));

  console.log(
    JSON.stringify(
      {
        cardsAudited: auditedCardIds.size,
        totalCards,
        findings: deduped.length,
        severity,
        nonError,
        stats,
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
