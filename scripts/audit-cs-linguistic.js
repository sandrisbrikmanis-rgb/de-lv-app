#!/usr/bin/env node
/**
 * CS-DE linguistic audit with Luna (read-only, batched).
 * Usage: node scripts/audit-cs-linguistic.js --dataset=a1 [--test-batch] [--resume]
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const {
  ROOT,
  BATCH_SIZE,
  STUDY_BATCH_SIZE,
  DATASET_CONFIG,
  loadArray,
  loadWindow,
  chunk,
  tempDir,
  ensureDir,
  batchLabel,
  buildSimpleCard,
  buildStudyCard,
  buildSentenceCard,
  buildVerbCard,
  loadKursData,
  isPostRepairA1,
  isFinalPostRepairA1,
  postRepairPaths,
  finalPostRepairPaths,
} = require("./lib/cs-audit-helpers");
const {
  createStats,
  auditCardsBatch,
  recordRetryReason,
  classifyFindings,
} = require("./lib/openai-cs-full-audit");

const TEST_BATCH = process.argv.includes("--test-batch");
const MAX_RETRIES = 3;

function parseDataset() {
  for (const arg of process.argv.slice(2)) {
    if (arg.startsWith("--dataset=")) return arg.slice("--dataset=".length).trim().toLowerCase();
  }
  throw new Error("Usage: node scripts/audit-cs-linguistic.js --dataset=a1");
}

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function progressPath(dataset) {
  if (isFinalPostRepairA1(dataset)) {
    return finalPostRepairPaths(dataset).progressFile;
  }
  if (isPostRepairA1(dataset)) {
    return postRepairPaths(dataset).progressFile;
  }
  return path.join(ROOT, "scripts", `.cs-${dataset}-luna-progress.json`);
}

function loadProgress(dataset) {
  const p = progressPath(dataset);
  if (!fs.existsSync(p)) return { completedBatches: [], auditedCardIds: [] };
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return { completedBatches: [], auditedCardIds: [] };
  }
}

function saveProgress(dataset, progress) {
  fs.writeFileSync(progressPath(dataset), JSON.stringify(progress, null, 2));
}

function buildCards(dataset) {
  if (dataset === "vety") {
    const lv = loadArray("data/sentences.js", "SENTENCE_ENTRIES");
    const cs = loadArray("data/cs/sentences.js", "SENTENCE_ENTRIES");
    return { simple: lv.map((l, i) => buildSentenceCard(l, cs[i], i)), study: [] };
  }
  if (dataset === "slovesa") {
    const lv = loadArray("data/verbs.js", "VERB_ENTRIES");
    const cs = loadArray("data/cs/verbs.js", "VERB_ENTRIES");
    return { simple: lv.map((l, i) => buildVerbCard(l, cs[i], i)), study: [] };
  }
  if (dataset === "kurs") {
    const { csWin } = loadKursData();
    const csData = csWin.COURSE_LESSON_DATA || {};
    const cards = Object.entries(csData).map(([key, lesson]) => ({
      cardId: key,
      index: 0,
      de: "(lesson)",
      csText: JSON.stringify(lesson).slice(0, 4000),
      lessonKey: key,
      auditType: "kurs_lesson",
    }));
    return { simple: cards, study: [] };
  }

  const cfg = DATASET_CONFIG[dataset];
  const lv = loadArray(cfg.lvFile, cfg.globalKey);
  const cs = loadArray(cfg.csFile, cfg.globalKey);
  const simple = [];
  const study = [];
  for (let i = 0; i < lv.length; i++) {
    if (cs[i].study) study.push(buildStudyCard(lv[i], cs[i], i, dataset));
    else simple.push(buildSimpleCard(lv[i], cs[i], i, dataset));
  }
  return { simple, study };
}

async function auditBatchWithRetry(cards, stats, batchKey, auditType, dataset) {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      if (attempt > 1) {
        stats.retryCount += 1;
        recordRetryReason(stats, attempt === 2 ? "first_retry" : "subsequent_retry");
      }
      return await auditCardsBatch({ cards, stats, batchLabel: batchKey, auditType, dataset });
    } catch (error) {
      if (attempt >= MAX_RETRIES) throw error;
      recordRetryReason(stats, error.message.includes("JSON") ? "invalid_json" : "api_error");
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  return { results: [], findings: [], passCount: 0 };
}

async function main() {
  const dataset = parseDataset();
  const cfg = DATASET_CONFIG[dataset];
  const csRel = cfg?.csFile
    || (dataset === "vety" ? "data/cs/sentences.js"
      : dataset === "slovesa" ? "data/cs/verbs.js"
      : dataset === "kurs" ? "data/cs/courseLessons.js"
      : null);
  const csFile = csRel ? path.join(ROOT, csRel) : null;
  const hashBefore = csFile && fs.existsSync(csFile) ? md5(csFile) : "n/a";

  const outDir = tempDir(dataset);
  ensureDir(outDir);
  const outJson = path.join(outDir, "linguistic-audit.json");
  const stats = createStats();
  const progress = loadProgress(dataset);
  const completed = new Set(progress.completedBatches || []);
  const auditedCardIds = new Set(progress.auditedCardIds || []);

  let auditData = fs.existsSync(outJson)
    ? JSON.parse(fs.readFileSync(outJson, "utf8"))
    : { meta: { dataset, startedAt: new Date().toISOString() }, batches: [], allResults: [], findings: [] };

  const { simple, study } = buildCards(dataset);
  const totalCards = simple.length + study.length;
  console.log(`CS ${dataset} Luna audit: ${totalCards} entries (${simple.length} simple, ${study.length} study)`);
  if (TEST_BATCH) console.log("TEST BATCH mode — 1 batch only");

  const saveBatch = (batchKey, cards, result, auditType) => {
    const batchNum = batchKey;
    const batchFile = path.join(outDir, `batch-${batchNum}.json`);
    const batchData = {
      dataset,
      batch: batchNum,
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
    saveProgress(dataset, progress);
    auditData.auditedCardIds = [...auditedCardIds];
    fs.writeFileSync(outJson, JSON.stringify(auditData, null, 2));
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
      const result = await auditBatchWithRetry(batches[i], stats, batchKey, auditType, dataset);
      saveBatch(batchKey, batches[i], result, auditType);
    }
  };

  const simpleBatchSize = dataset === "kurs" ? 1 : BATCH_SIZE;
  const studyBatchSize = STUDY_BATCH_SIZE;

  await processBatches(simple, simpleBatchSize, "simple", dataset === "vety" ? "sentences" : dataset === "slovesa" ? "verbs" : dataset === "kurs" ? "kurs" : "vocab_simple");
  if (!TEST_BATCH || study.length > 0) {
    await processBatches(study, studyBatchSize, "study", "vocab_study");
  }

  const hashAfter = fs.existsSync(csFile) ? md5(csFile) : hashBefore;
  if (hashBefore !== "n/a" && hashBefore !== hashAfter) {
    throw new Error("DATA FILES CHANGED DURING AUDIT");
  }

  const { severity, nonError, qualityFindings } = classifyFindings(auditData.findings);
  const deduped = [];
  const seen = new Set();
  for (const f of qualityFindings) {
    const csText = typeof f.currentCs === "string" ? f.currentCs : JSON.stringify(f.currentCs || "");
    const key = `${f.cardId}|${f.field}|${csText.slice(0, 60)}`;
    if (seen.has(key)) continue;
    seen.add(key);
    deduped.push(f);
  }

  auditData.meta.completedAt = new Date().toISOString();
  auditData.meta.cardsExpected = totalCards;
  auditData.meta.cardsAudited = auditedCardIds.size;
  auditData.meta.coverage = auditedCardIds.size === totalCards ? "100%" : `${auditedCardIds.size}/${totalCards}`;
  auditData.meta.dataUnchanged = true;
  auditData.apiUsage = stats;
  auditData.severityCounts = severity;
  auditData.nonErrorCounts = nonError;
  auditData.qualityFindings = deduped;
  auditData.findings = deduped;
  fs.writeFileSync(outJson, JSON.stringify(auditData, null, 2));

  console.log("\n=== CS linguistic audit complete ===");
  console.log(JSON.stringify({
    dataset,
    cardsAudited: auditedCardIds.size,
    cardsExpected: totalCards,
    findings: deduped.length,
    severity,
    nonError,
    tokens: stats.totalTokens,
  }, null, 2));
}

main().catch((e) => {
  console.error("CS linguistic audit failed:", e.message);
  process.exit(1);
});
