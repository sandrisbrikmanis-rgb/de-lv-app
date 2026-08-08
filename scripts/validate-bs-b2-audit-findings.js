#!/usr/bin/env node
/**
 * BS-DE B2 audit findings validation / triage (read-only).
 * Usage: node scripts/validate-bs-b2-audit-findings.js [--test-batch]
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const {
  classifyDeterministic,
  groupForLuna,
  inferPattern,
  isEkavismFix,
} = require("./lib/bs-b2-validation-rules");
const {
  DEFAULT_MODEL,
  createStats,
  validateFindingsBatch,
  recordRetryReason,
} = require("./lib/openai-luna-validation-batch");

const AUDIT_JSON = path.join(ROOT, "reports", "temp", "bs-b2-full-linguistic-audit.json");
const BS_FILE = path.join(ROOT, "data", "bs", "b2.js");
const LV_FILE = path.join(ROOT, "data", "b2.js");
const OUT_JSON = path.join(ROOT, "reports", "temp", "bs-b2-audit-validation.json");
const PROGRESS_PATH = path.join(ROOT, "scripts", ".bs-b2-audit-validation-progress.json");
const STATS_PATH = path.join(ROOT, "scripts", ".bs-b2-audit-validation-stats.json");

const TEST_BATCH = process.argv.includes("--test-batch");
const LUNA_BATCH = 25;
const MAX_RETRIES = 3;

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function loadWords(filePath, varName) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[varName];
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function buildCardIndex(words) {
  const byId = new Map();
  words.forEach((entry, index) => {
    byId.set(entryId(entry, index), { entry, index });
  });
  return byId;
}

function getFieldValue(entry, field) {
  if (!field || field === "lv") return entry.lv;
  const parts = field.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
  let cur = entry;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return typeof cur === "string" ? cur : undefined;
}

function getStudyContext(entry) {
  if (!entry.study) return null;
  const s = entry.study;
  return {
    layout: s.layout,
    translation: s.translation || null,
    flashcardLv: entry.lv,
  };
}

function makeFindingId(f) {
  return crypto.createHash("sha1")
    .update(`${f.cardId}|${f.field}|${f.currentBs || ""}|${f.proposedBs || ""}`)
    .digest("hex")
    .slice(0, 12);
}

function dedupeFindings(findings) {
  const seen = new Set();
  const unique = [];
  let duplicates = 0;
  for (const f of findings) {
    const key = `${f.cardId}|${f.field}|${f.currentBs || ""}`;
    if (seen.has(key)) {
      duplicates += 1;
      continue;
    }
    seen.add(key);
    unique.push(f);
  }
  return { unique, duplicates };
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

function loadOutput() {
  if (!fs.existsSync(OUT_JSON)) return null;
  try {
    return JSON.parse(fs.readFileSync(OUT_JSON, "utf8"));
  } catch {
    return null;
  }
}

function saveOutput(data) {
  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(data, null, 2));
}

function summarizeVerdicts(results) {
  const counts = {
    FIX: 0,
    KEEP: 0,
    STYLE_ONLY: 0,
    PROJECT_CONVENTION: 0,
    SOURCE_LV_ISSUE: 0,
    DE_SOURCE_ISSUE: 0,
    NEEDS_REVIEW: 0,
    STALE_AFTER_AUDIT: 0,
  };
  const fixByMethod = { deterministic: 0, luna: 0 };
  const validatedSeverity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const patterns = {};

  for (const r of results) {
    const v = r.verdict || "NEEDS_REVIEW";
    counts[v] = (counts[v] || 0) + 1;
    if (v === "FIX") {
      fixByMethod[r.validationMethod] = (fixByMethod[r.validationMethod] || 0) + 1;
      const sev = r.validatedSeverity || "MEDIUM";
      validatedSeverity[sev] = (validatedSeverity[sev] || 0) + 1;
    }
    const pat = r.pattern || "other";
    if (!patterns[pat]) patterns[pat] = { candidates: 0, confirmed: 0, rejected: 0 };
    patterns[pat].candidates += 1;
    if (v === "FIX") patterns[pat].confirmed += 1;
    else if (v === "KEEP" || v === "STYLE_ONLY" || v === "PROJECT_CONVENTION") patterns[pat].rejected += 1;
  }

  return { counts, fixByMethod, validatedSeverity, patterns };
}

async function validateLunaBatchWithRetry(batch, stats, batchKey) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await validateFindingsBatch({ findings: batch, stats, batchLabel: batchKey });
    } catch (error) {
      if (attempt >= MAX_RETRIES) throw error;
      recordRetryReason(stats, error.message.includes("JSON") ? "invalid_json" : "api_error");
      stats.retryCount += 1;
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    }
  }
  return [];
}

async function main() {
  const hashBefore = { data: md5(BS_FILE), www: md5(path.join(ROOT, "www", "data", "bs", "b2.js")) };

  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const rawFindings = audit.qualityFindings || audit.findings || [];
  const { unique, duplicates } = dedupeFindings(rawFindings);

  const lv = loadWords(LV_FILE, "B2_WORDS");
  const bs = loadWords(BS_FILE, "B2_WORDS");
  const bsIndex = buildCardIndex(bs);
  const lvIndex = buildCardIndex(lv);

  const results = [];
  const lunaQueue = [];
  let stale = 0;
  let deterministicCount = 0;

  for (const f of unique) {
    const findingId = makeFindingId(f);
    const card = bsIndex.get(f.cardId);
    const lvCard = lvIndex.get(f.cardId);
    const currentLive = card ? getFieldValue(card.entry, f.field) : undefined;

    const base = {
      findingId,
      cardId: f.cardId,
      field: f.field,
      originalSeverity: f.severity,
      originalReason: f.reason,
      originalCategory: f.category,
      originalProposed: f.proposedBs,
      de: f.de || card?.entry.de || "",
      lv: f.lv || (lvCard ? getFieldValue(lvCard.entry, f.field) : ""),
      currentText: f.currentBs,
      liveText: currentLive,
      studyContext: card ? getStudyContext(card.entry) : null,
    };

    if (currentLive !== undefined && currentLive !== f.currentBs) {
      stale += 1;
      results.push({
        ...base,
        verdict: "STALE_AFTER_AUDIT",
        validationMethod: "deterministic",
        shortReason: "Current BS text differs from audited snapshot",
        confidence: "high",
        pattern: inferPattern(f),
      });
      continue;
    }

    const det = classifyDeterministic(f);
    if (det) {
      deterministicCount += 1;
      results.push({
        ...base,
        verdict: det.verdict,
        validatedSeverity: det.validatedSeverity,
        validationMethod: det.validationMethod,
        correctedText: det.correctedText,
        shortReason: det.shortReason,
        confidence: det.confidence,
        pattern: det.pattern,
      });
      continue;
    }

    // Secondary deterministic: ekavism via rule engine if proposed matches
    if (isEkavismFix(f.currentBs, f.proposedBs)) {
      deterministicCount += 1;
      results.push({
        ...base,
        verdict: "FIX",
        validatedSeverity: "MEDIUM",
        validationMethod: "deterministic",
        correctedText: f.proposedBs,
        shortReason: f.reason || "Ekavism → ijekavica",
        confidence: "high",
        pattern: "ekavism",
      });
      continue;
    }

    lunaQueue.push({ ...base, pattern: inferPattern(f) });
  }

  console.log(`Pre-validation: raw=${rawFindings.length} unique=${unique.length} duplicates=${duplicates} stale=${stale}`);
  console.log(`Deterministic: ${deterministicCount} | Luna queue: ${lunaQueue.length}`);

  const stats = createStats();
  const progress = loadProgress();
  const completed = new Set(progress.completedBatches || []);

  const existing = loadOutput();
  const validatedIds = new Set((existing?.results || []).map((r) => r.findingId));

  // Merge prior luna results on resume
  if (existing?.results?.length) {
    for (const r of existing.results) {
      if (!results.find((x) => x.findingId === r.findingId)) results.push(r);
    }
  }

  const pendingLuna = lunaQueue.filter((item) => !validatedIds.has(item.findingId) && !results.find((r) => r.findingId === item.findingId));

  const groups = groupForLuna(pendingLuna);
  for (const [groupName, items] of Object.entries(groups)) {
    if (!items.length) continue;
    const batches = chunk(items, LUNA_BATCH);
    const limit = TEST_BATCH ? 1 : batches.length;
    for (let i = 0; i < limit; i++) {
      const batchKey = `${groupName}-${i}`;
      if (completed.has(batchKey)) {
        console.log(`  skip ${batchKey}`);
        const batch = batches[i];
        for (const item of batch) {
          if (!results.find((r) => r.findingId === item.findingId)) {
            const cached = existing?.results?.find((r) => r.findingId === item.findingId);
            if (cached) results.push(cached);
          }
        }
        continue;
      }
      const batch = batches[i];
      const responses = await validateLunaBatchWithRetry(batch, stats, batchKey);
      const byId = new Map(responses.map((r) => [r.findingId, r]));
      for (const item of batch) {
        const resp = byId.get(item.findingId);
        if (!resp) {
          results.push({
            ...item,
            verdict: "NEEDS_REVIEW",
            validationMethod: "luna",
            shortReason: "Missing from Luna batch response",
            confidence: "low",
          });
          continue;
        }
        results.push({
          ...item,
          verdict: resp.verdict,
          validatedSeverity: resp.validatedSeverity,
          validationMethod: "luna",
          correctedText: resp.correctedText,
          shortReason: resp.shortReason,
          confidence: resp.confidence,
        });
      }
      completed.add(batchKey);
      saveProgress({ completedBatches: [...completed], updatedAt: new Date().toISOString() });
      saveOutput({
        meta: { inProgress: true, updatedAt: new Date().toISOString(), validated: results.length, expected: unique.length },
        preValidation: { raw: rawFindings.length, unique: unique.length, duplicates, stale, deterministicCount, lunaCandidates: lunaQueue.length },
        results,
      });
      if (TEST_BATCH) break;
    }
    if (TEST_BATCH) break;
  }

  const complete = results.length >= unique.length;

  const hashAfter = { data: md5(BS_FILE), www: md5(path.join(ROOT, "www", "data", "bs", "b2.js")) };
  if (hashBefore.data !== hashAfter.data) {
    throw new Error("DATA FILES CHANGED DURING VALIDATION");
  }

  const summary = summarizeVerdicts(results);
  const output = {
    meta: {
      model: DEFAULT_MODEL,
      completedAt: complete ? new Date().toISOString() : null,
      inProgress: !complete,
      hashBefore,
      hashAfter,
      dataUnchanged: true,
      validatedCount: results.length,
      expectedCount: unique.length,
    },
    preValidation: {
      rawFindings: rawFindings.length,
      uniqueFindings: unique.length,
      duplicates,
      stale,
      deterministicValidated: deterministicCount,
      lunaCandidates: lunaQueue.length,
      initialSeverity: audit.severityCounts || {},
    },
    apiUsage: stats,
    summary,
    results,
  };

  saveOutput(output);
  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));

  console.log("\n=== Validation " + (complete ? "complete" : "in progress") + " ===");
  console.log(JSON.stringify({
    validated: results.length,
    expected: unique.length,
    complete,
    verdicts: summary.counts,
    fixByMethod: summary.fixByMethod,
    validatedSeverity: summary.validatedSeverity,
    lunaRequests: stats.requestCount,
    tokens: stats.totalTokens,
  }, null, 2));
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
