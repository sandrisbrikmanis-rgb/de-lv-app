#!/usr/bin/env node
/**
 * Phase B — GPT-5.6 Luna medium quality audit on consolidated candidates.
 * Usage: node scripts/audit-bs-b1-medium-luna.js [--test-batch] [--limit N]
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

const CANDIDATES_PATH = path.join(ROOT, "reports", "temp", "bs-b1-medium-current-candidates.json");
const VERDICTS_PATH = path.join(ROOT, "reports", "temp", "bs-b1-medium-luna-verdicts.json");
const STATS_PATH = path.join(ROOT, "scripts", ".bs-b1-medium-luna-audit-stats.json");
const PROGRESS_PATH = path.join(ROOT, "scripts", ".bs-b1-medium-luna-audit-progress.json");
const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b1.js");

const TEST_BATCH = process.argv.includes("--test-batch");
const LIMIT = (() => {
  const idx = process.argv.indexOf("--limit");
  return idx >= 0 ? parseInt(process.argv[idx + 1], 10) : 0;
})();

const BATCH_SIZES = {
  translation: 30,
  examples: 15,
  explanation: 12,
  comparison: 15,
  tip_important: 12,
  other: 12,
};

const MAX_RETRIES = 3;

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
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

function loadVerdicts() {
  if (!fs.existsSync(VERDICTS_PATH)) return [];
  try {
    return JSON.parse(fs.readFileSync(VERDICTS_PATH, "utf8"));
  } catch {
    return [];
  }
}

function saveVerdicts(verdicts) {
  fs.mkdirSync(path.dirname(VERDICTS_PATH), { recursive: true });
  fs.writeFileSync(VERDICTS_PATH, JSON.stringify(verdicts, null, 2));
}

async function auditBatchWithRetry(candidates, stats, batchKey, issueType) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      if (attempt === 0) stats.initialBatchRequests += 1;
      else {
        stats.retryRequests += 1;
        stats.retryCount += 1;
        recordRetryReason(stats, attempt === 1 ? "first_retry" : "subsequent_retry");
      }
      const result = await auditMediumBatch({
        candidates,
        stats,
        batchLabel: batchKey,
        issueType,
      });
      return result.verdicts;
    } catch (error) {
      if (error.message.includes("nederīgs JSON") || error.message.includes("JSON")) {
        recordRetryReason(stats, "invalid_json");
        if (attempt >= MAX_RETRIES) {
          console.error(`APTURĒTS: sistemātiska JSON problēma batch ${batchKey}`);
          throw error;
        }
      } else if (attempt >= MAX_RETRIES) {
        throw error;
      } else {
        recordRetryReason(stats, "api_error");
      }
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    }
  }
  return [];
}

async function main() {
  const hashBefore = { data: md5(BS_FILE), www: md5(WWW_FILE) };

  if (!fs.existsSync(CANDIDATES_PATH)) {
    throw new Error(`Trūkst ${CANDIDATES_PATH}. Palaid build-bs-b1-medium-candidates.js.`);
  }

  const consolidated = JSON.parse(fs.readFileSync(CANDIDATES_PATH, "utf8"));
  let candidates = consolidated.candidates || [];
  if (LIMIT > 0) candidates = candidates.slice(0, LIMIT);

  const byType = {};
  for (const c of candidates) {
    const t = c.issueType || "other";
    if (!byType[t]) byType[t] = [];
    byType[t].push(c);
  }

  const stats = createMediumStats();
  const progress = loadProgress();
  const completed = new Set(progress.completedBatches || []);
  const allVerdicts = loadVerdicts();
  const verdictKeys = new Set(allVerdicts.map((v) => `${v.cardId}|${v.field}`));

  console.log(`Luna medium audit: ${candidates.length} candidates, model=${DEFAULT_MODEL}`);
  if (TEST_BATCH) console.log("TEST BATCH mode — 1 batch only");

  let batchIndex = 0;
  for (const [issueType, group] of Object.entries(byType)) {
    const size = BATCH_SIZES[issueType] || 12;
    const batches = chunk(group, size);
    const typeLimit = TEST_BATCH ? 1 : batches.length;

    for (let i = 0; i < typeLimit; i++) {
      const batch = batches[i];
      const batchKey = `${issueType}-${i}`;
      if (completed.has(batchKey)) {
        console.log(`  skip ${batchKey} (cached)`);
        continue;
      }

      const newCandidates = batch.filter((c) => !verdictKeys.has(`${c.cardId}|${c.field}`));
      if (newCandidates.length === 0) {
        completed.add(batchKey);
        saveProgress({ completedBatches: [...completed] });
        continue;
      }

      const verdicts = await auditBatchWithRetry(newCandidates, stats, batchKey, issueType);
      for (const v of verdicts) {
        const key = `${v.cardId}|${v.field}`;
        if (!verdictKeys.has(key)) {
          allVerdicts.push({ ...v, issueType, batchKey, auditedAt: new Date().toISOString() });
          verdictKeys.add(key);
        }
      }

      completed.add(batchKey);
      saveVerdicts(allVerdicts);
      saveProgress({ completedBatches: [...completed] });
      batchIndex += 1;
    }

    if (TEST_BATCH) break;
  }

  const hashAfter = { data: md5(BS_FILE), www: md5(WWW_FILE) };
  if (hashBefore.data !== hashAfter.data || hashBefore.www !== hashAfter.www) {
    throw new Error("DATA FILES CHANGED DURING AUDIT — aborting");
  }

  stats.completedAt = new Date().toISOString();
  stats.hashBefore = hashBefore;
  stats.hashAfter = hashAfter;
  stats.dataUnchanged = true;
  stats.consolidationStats = consolidated.stats;
  stats.totalVerdicts = allVerdicts.length;

  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));
  saveVerdicts(allVerdicts);

  console.log("\n=== Luna medium audit complete ===");
  console.log(JSON.stringify({
    model: stats.model,
    requests: stats.requestCount,
    initial: stats.initialBatchRequests,
    retries: stats.retryRequests,
    candidatesAudited: stats.candidatesAudited,
    verdicts: stats.verdictCounts,
    tokens: stats.totalTokens,
    totalVerdicts: allVerdicts.length,
  }, null, 2));
}

main().catch((error) => {
  console.error("Luna medium audit failed:", error.message);
  process.exit(1);
});
