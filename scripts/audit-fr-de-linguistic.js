#!/usr/bin/env node
"use strict";
/**
 * FR-DE module linguistic audit with GPT-5.6 Luna (READ-ONLY).
 * Usage: node scripts/audit-fr-de-linguistic.js --module=b2|c1|c2|sentences|verbs [--test-batch] [--resume] [--fresh]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { parseModuleArg } = require("./lib/fr-de-audit-config");
const {
  chunk,
  ensureDir,
  buildCards,
  dataFileHash,
  loadProgress,
  saveProgress,
} = require("./lib/fr-de-audit-helpers");
const { createStats } = require("./lib/openai-fr-de-audit");
const { auditCardsBatch, classifyFindings } = require("./lib/openai-fr-de-audit");

const cfg = parseModuleArg();
const TEST_BATCH = process.argv.includes("--test-batch");
const RESUME = process.argv.includes("--resume");
const FRESH = process.argv.includes("--fresh");
const MAX_RETRIES = 3;

async function auditBatchWithRetry(cards, stats, batchKey, auditType) {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await auditCardsBatch({
        cards,
        stats,
        batchLabel: batchKey,
        auditType,
        dataset: cfg.dataset,
        moduleType: cfg.type === "verbs" ? "verbs" : cfg.type === "sentences" ? "sentences" : "vocab",
      });
    } catch (error) {
      if (attempt >= MAX_RETRIES) throw error;
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  return { results: [], findings: [], passCount: 0 };
}

async function runVocabLuna() {
  const hashBefore = dataFileHash(cfg);
  ensureDir(cfg.lunaTempDir);
  if (FRESH) {
    if (fs.existsSync(cfg.lunaJson)) fs.unlinkSync(cfg.lunaJson);
    if (fs.existsSync(cfg.progressFile)) fs.unlinkSync(cfg.progressFile);
    if (fs.existsSync(cfg.lunaTempDir)) fs.rmSync(cfg.lunaTempDir, { recursive: true, force: true });
    ensureDir(cfg.lunaTempDir);
  }

  const stats = createStats();
  const progress = RESUME && !FRESH ? loadProgress(cfg) : { completedBatches: [], auditedCardIds: [], failedBatches: [], retryBatches: [] };
  const completed = new Set(progress.completedBatches || []);
  const auditedCardIds = new Set(progress.auditedCardIds || []);

  let auditData = fs.existsSync(cfg.lunaJson)
    ? JSON.parse(fs.readFileSync(cfg.lunaJson, "utf8"))
    : { meta: { dataset: cfg.dataset, startedAt: new Date().toISOString() }, batches: [], allResults: [], findings: [] };

  if (!RESUME || FRESH) {
    auditData = { meta: { dataset: cfg.dataset, startedAt: new Date().toISOString() }, batches: [], allResults: [], findings: [] };
  }

  const { simple, study } = buildCards(cfg);
  const totalCards = simple.length + study.length;
  console.log(`FR ${cfg.moduleKey} Luna audit: ${totalCards} entries (${simple.length} simple, ${study.length} study)`);

  const saveBatch = (batchKey, cards, result, auditType) => {
    const batchFile = path.join(cfg.lunaTempDir, `${batchKey}.json`);
    const batchData = {
      dataset: cfg.dataset,
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
    saveProgress(cfg, progress);
    auditData.auditedCardIds = [...auditedCardIds];
    fs.writeFileSync(cfg.lunaJson, JSON.stringify(auditData, null, 2));
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

  await processBatches(simple, cfg.batchSize, "simple", "vocab_simple");
  if (!TEST_BATCH) await processBatches(study, cfg.studyBatchSize || 10, "study", "vocab_study");

  const hashAfter = dataFileHash(cfg);
  if (hashBefore !== hashAfter) throw new Error("DATA FILES CHANGED DURING AUDIT");

  finalizeLunaData(auditData, stats, progress, auditedCardIds, totalCards);
}

async function runBatchLunaFromCollect() {
  const collect = JSON.parse(fs.readFileSync(cfg.collectJson, "utf8"));
  const batches = collect.batches || [];
  if (!batches.length) throw new Error(`No batches in ${cfg.collectJson}`);

  ensureDir(cfg.lunaTempDir);
  const stats = createStats();
  const progress = RESUME && !FRESH ? loadProgress(cfg) : { completedBatches: [], auditedCardIds: [], failedBatches: [], retryBatches: [] };
  const completed = new Set(progress.completedBatches || []);
  const auditedCardIds = new Set(progress.auditedCardIds || []);

  let auditData = fs.existsSync(cfg.lunaJson)
    ? JSON.parse(fs.readFileSync(cfg.lunaJson, "utf8"))
    : { meta: { dataset: cfg.dataset, startedAt: new Date().toISOString() }, batches: [], allResults: [], findings: [] };

  const limit = TEST_BATCH ? 1 : batches.length;
  const moduleType = cfg.type === "verbs" ? "verbs" : "sentences";
  console.log(`FR ${cfg.moduleKey} Luna audit: ${batches.length} batches`);

  for (let i = 0; i < limit; i++) {
    const batchMeta = batches[i];
    const batchKey = batchMeta.batch;
    const outPath = path.join(cfg.lunaTempDir, `${batchKey}.json`);
    if (RESUME && !FRESH && (completed.has(batchKey) || fs.existsSync(outPath))) {
      console.log(`  skip ${batchKey} (cached)`);
      if (fs.existsSync(outPath)) {
        const cached = JSON.parse(fs.readFileSync(outPath, "utf8"));
        for (const c of cached.cardIds || []) auditedCardIds.add(c);
      }
      continue;
    }

    const batchData = JSON.parse(fs.readFileSync(batchMeta.file, "utf8"));
    const cards = cfg.type === "verbs" ? batchData.verbs : batchData.sentences;
    const result = await auditBatchWithRetry(cards, stats, batchKey, moduleType);
    const cardIds = cards.map((c) => c.cardId);
    const batchFile = {
      dataset: cfg.dataset,
      batch: batchKey,
      auditType: moduleType,
      cardCount: cards.length,
      cardIds,
      findings: result.findings,
      results: result.results,
      passCount: result.passCount,
      completedAt: new Date().toISOString(),
    };
    fs.writeFileSync(outPath, JSON.stringify(batchFile, null, 2));
    auditData.allResults.push(...result.results);
    auditData.findings.push(...result.findings);
    auditData.batches.push(batchFile);
    for (const id of cardIds) auditedCardIds.add(id);
    completed.add(batchKey);
    progress.completedBatches = [...completed];
    progress.auditedCardIds = [...auditedCardIds];
    saveProgress(cfg, progress);
    auditData.auditedCardIds = [...auditedCardIds];
    fs.writeFileSync(cfg.lunaJson, JSON.stringify(auditData, null, 2));
    if (TEST_BATCH) break;
  }

  const totalCards = cfg.totalCards;
  finalizeLunaData(auditData, stats, progress, auditedCardIds, totalCards);
}

function finalizeLunaData(auditData, stats, progress, auditedCardIds, totalCards) {
  const { severity, nonError, qualityFindings } = classifyFindings(auditData.findings);
  const deduped = [];
  const seen = new Set();
  for (const f of qualityFindings) {
    const key = `${f.cardId}|${f.field || "lv"}|${String(f.currentFr || "").slice(0, 60)}`;
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
  fs.writeFileSync(cfg.lunaJson, JSON.stringify(auditData, null, 2));

  console.log(
    JSON.stringify(
      {
        module: cfg.moduleKey,
        coverage: auditData.meta.coverage,
        cardsAudited: auditedCardIds.size,
        qualityFindings: deduped.length,
        batches: auditData.batches.length,
      },
      null,
      2,
    ),
  );
}

async function main() {
  if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
  if (cfg.type === "vocab") await runVocabLuna();
  else await runBatchLunaFromCollect();
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
