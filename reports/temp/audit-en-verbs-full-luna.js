#!/usr/bin/env node
/**
 * EN-DE Verbs full Luna linguistic audit (read-only). All 189 verbs × 5 forms.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const {
  DEFAULT_MODEL,
  createStats,
  auditVerbsBatch,
  recordRetryReason,
} = require("./openai-luna-en-verbs-full-audit");

const ROOT = path.join(__dirname, "..", "..");
const OUT_JSON = path.join(ROOT, "reports", "temp", "en-verbs-luna-linguistic-findings.json");
const PROGRESS_PATH = path.join(ROOT, "reports", "temp", ".en-verbs-luna-audit-progress.json");
const STATS_PATH = path.join(ROOT, "reports", "temp", ".en-verbs-luna-audit-stats.json");

const VERB_BATCH = 10;
const MAX_RETRIES = 3;
const FORMS = [
  "infinitiv",
  "praesens",
  "imperfektIndikativ",
  "imperfektKonjunktiv",
  "partizipVergangenheit",
];

const NON_ERROR_CATEGORIES = new Set([
  "SOURCE_LV_ISSUE", "DE_SOURCE_ISSUE", "NEEDS_REVIEW", "STYLE_ONLY", "PROJECT_CONVENTION",
]);

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.VERB_ENTRIES;
}

function verbSlug(de) {
  return String(de).trim().replace(/\s+/g, "-").replace(/[^\wäöüßÄÖÜ-]/gi, "");
}

function verbEntryId(index, infinitivDe) {
  return `verb-${index}-${verbSlug(infinitivDe)}`;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function loadProgress() {
  if (!fs.existsSync(PROGRESS_PATH)) return { completedBatches: [], auditedFormKeys: [] };
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_PATH, "utf8"));
  } catch {
    return { completedBatches: [], auditedFormKeys: [] };
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

function buildVerbPayload(lvVerbs, enVerbs, index) {
  const lv = lvVerbs[index];
  const en = enVerbs[index];
  const id = verbEntryId(index, en.infinitiv.de);
  const forms = FORMS.map((field) => ({
    field,
    de: en[field].de,
    lvSource: lv[field].lv,
    enText: en[field].lv,
  }));
  return {
    verbId: id,
    index,
    infinitivDe: en.infinitiv.de,
    forms,
  };
}

async function auditBatchWithRetry(verbs, stats, batchKey) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      if (attempt === 0) stats.initialBatchRequests += 1;
      else {
        stats.retryRequests += 1;
        stats.retryCount += 1;
        recordRetryReason(stats, attempt === 1 ? "first_retry" : "subsequent_retry");
      }
      return await auditVerbsBatch({ verbs, stats, batchLabel: batchKey });
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
  const hashBefore = {
    data: md5(path.join(ROOT, "data/en/verbs.js")),
    www: md5(path.join(ROOT, "www/data/en/verbs.js")),
  };

  const lvVerbs = load("data/verbs.js");
  const enVerbs = load("data/en/verbs.js");
  const verbsExpected = enVerbs.length;
  const formsExpected = verbsExpected * FORMS.length;

  const progress = loadProgress();
  const stats = createStats();
  const existing = loadAuditJson();
  const allResults = existing?.allResults || [];
  const allFindings = existing?.allFindings || existing?.findings || [];

  const batches = chunk(
    Array.from({ length: verbsExpected }, (_, i) => i),
    VERB_BATCH
  );

  console.log(`EN-DE Verbs Luna audit: ${verbsExpected} verbs, ${formsExpected} forms, ${batches.length} batches`);

  for (let b = 0; b < batches.length; b++) {
    const batchKey = `verbs-batch-${String(b).padStart(2, "0")}`;
    if (progress.completedBatches.includes(batchKey)) {
      console.log(`skip ${batchKey} (completed)`);
      continue;
    }

    const verbPayloads = batches[b].map((i) => buildVerbPayload(lvVerbs, enVerbs, i));
    const { results, findings } = await auditBatchWithRetry(verbPayloads, stats, batchKey);

    allResults.push(...results);
    allFindings.push(...findings);

    for (const r of results) {
      progress.auditedFormKeys.push(`${r.verbId}|${r.field}`);
    }
    progress.completedBatches.push(batchKey);
    saveProgress(progress);

    const classified = classifyFindings(allFindings);
    const auditData = {
      meta: {
        model: DEFAULT_MODEL,
        verbsExpected,
        formsExpected,
        verbsAudited: new Set(allResults.map((r) => r.verbId)).size,
        formsAudited: allResults.length,
        generatedAt: new Date().toISOString(),
        hashBefore,
      },
      severityCounts: classified.severity,
      nonErrorCounts: classified.nonError,
      deSourceIssues: classified.deSourceIssues,
      qualityFindings: classified.qualityFindings,
      allResults,
      allFindings: classified.qualityFindings,
      findings: classified.qualityFindings,
      apiUsage: stats,
    };
    saveAuditJson(auditData);
    fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));
  }

  const hashAfter = {
    data: md5(path.join(ROOT, "data/en/verbs.js")),
    www: md5(path.join(ROOT, "www/data/en/verbs.js")),
  };

  const classified = classifyFindings(allFindings);
  const verbsAudited = new Set(allResults.map((r) => r.verbId)).size;
  const formsAudited = allResults.length;

  const finalData = {
    meta: {
      model: DEFAULT_MODEL,
      verbsExpected,
      formsExpected,
      verbsAudited,
      formsAudited,
      complete: verbsAudited >= verbsExpected && formsAudited >= formsExpected,
      generatedAt: new Date().toISOString(),
      hashBefore,
      hashAfter,
      dataUnchanged: hashBefore.data === hashAfter.data && hashBefore.www === hashAfter.www,
    },
    severityCounts: classified.severity,
    nonErrorCounts: classified.nonError,
    deSourceIssues: classified.deSourceIssues,
    qualityFindings: classified.qualityFindings,
    allResults,
    allFindings: classified.qualityFindings,
    findings: classified.qualityFindings,
    auditedVerbIds: [...new Set(allResults.map((r) => r.verbId))],
    apiUsage: stats,
  };

  saveAuditJson(finalData);
  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));

  console.log("\n=== EN-DE Verbs Luna audit complete ===");
  console.log(JSON.stringify({
    verbsAudited,
    formsAudited,
    findings: classified.qualityFindings.length,
    severity: classified.severity,
    nonError: classified.nonError,
    dataUnchanged: finalData.meta.dataUnchanged,
    apiRequests: stats.requestCount,
    totalTokens: stats.totalTokens,
  }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
