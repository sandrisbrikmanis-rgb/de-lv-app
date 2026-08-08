#!/usr/bin/env node
/**
 * Luna final medium review — only verified candidates from build-bs-b1-final-medium-candidates.js
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");
const {
  DEFAULT_MODEL,
  createMediumStats,
  auditMediumBatch,
  recordRetryReason,
} = require("./lib/openai-luna-medium-audit");

const CANDIDATES_PATH = path.join(ROOT, "reports", "temp", "bs-b1-final-medium-candidates.json");
const VERDICTS_PATH = path.join(ROOT, "reports", "temp", "bs-b1-final-medium-verdicts.json");
const STATS_PATH = path.join(ROOT, "scripts", ".bs-b1-final-medium-luna-stats.json");
const PROGRESS_PATH = path.join(ROOT, "scripts", ".bs-b1-final-medium-luna-progress.json");
const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b1.js");

const BATCH_SIZES = { translation: 20, examples: 12, explanation: 10, comparison: 12, tip_important: 10, other: 10 };
const MAX_RETRIES = 3;

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

async function auditWithRetry(candidates, stats, batchKey, issueType) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      if (attempt === 0) stats.initialBatchRequests += 1;
      else { stats.retryRequests += 1; stats.retryCount += 1; recordRetryReason(stats, "retry"); }
      const { verdicts } = await auditMediumBatch({ candidates, stats, batchLabel: batchKey, issueType });
      return verdicts;
    } catch (error) {
      if (error.message.includes("JSON") && attempt >= MAX_RETRIES) {
        console.error("APTURĒTS: JSON problēma");
        throw error;
      }
      if (attempt >= MAX_RETRIES) throw error;
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    }
  }
  return [];
}

async function main() {
  const hashBefore = { data: md5(BS_FILE), www: md5(WWW_FILE) };
  const consolidated = JSON.parse(fs.readFileSync(CANDIDATES_PATH, "utf8"));
  const candidates = consolidated.candidates || [];

  const byType = {};
  for (const c of candidates) (byType[c.issueType || "other"] ||= []).push(c);

  const stats = createMediumStats();
  const progress = fs.existsSync(PROGRESS_PATH) ? JSON.parse(fs.readFileSync(PROGRESS_PATH, "utf8")) : { completedBatches: [] };
  const completed = new Set(progress.completedBatches || []);
  const allVerdicts = fs.existsSync(VERDICTS_PATH) ? JSON.parse(fs.readFileSync(VERDICTS_PATH, "utf8")) : [];
  const verdictKeys = new Set(allVerdicts.map((v) => `${v.cardId}|${v.field}`));

  console.log(`Final medium Luna: ${candidates.length} candidates`);

  for (const [issueType, group] of Object.entries(byType)) {
    const size = BATCH_SIZES[issueType] || 10;
    const batches = chunk(group, size);
    for (let i = 0; i < batches.length; i++) {
      const batchKey = `${issueType}-${i}`;
      if (completed.has(batchKey)) continue;
      const batch = batches[i].filter((c) => !verdictKeys.has(`${c.cardId}|${c.field}`));
      if (!batch.length) { completed.add(batchKey); continue; }
      const verdicts = await auditWithRetry(batch, stats, batchKey, issueType);
      for (const v of verdicts) {
        const key = `${v.cardId}|${v.field}`;
        if (!verdictKeys.has(key)) {
          allVerdicts.push({ ...v, issueType, batchKey, auditedAt: new Date().toISOString() });
          verdictKeys.add(key);
        }
      }
      completed.add(batchKey);
      fs.writeFileSync(VERDICTS_PATH, JSON.stringify(allVerdicts, null, 2));
      fs.writeFileSync(PROGRESS_PATH, JSON.stringify({ completedBatches: [...completed] }, null, 2));
    }
  }

  const hashAfter = { data: md5(BS_FILE), www: md5(WWW_FILE) };
  if (hashBefore.data !== hashAfter.data) throw new Error("DATA CHANGED DURING AUDIT");

  stats.completedAt = new Date().toISOString();
  stats.totalVerdicts = allVerdicts.length;
  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));
  fs.writeFileSync(VERDICTS_PATH, JSON.stringify(allVerdicts, null, 2));

  console.log(JSON.stringify({ requests: stats.requestCount, verdicts: stats.verdictCounts, tokens: stats.totalTokens, total: allVerdicts.length }, null, 2));
}

main().catch((e) => { console.error(e.message); process.exit(1); });
