#!/usr/bin/env node
/**
 * BS-DE B2 post-fix targeted regression audit (read-only).
 * Audits only cards from bs-b2-post-fix-regression-scope.json (947 cards).
 * Model: GPT-5.6 Luna. No data changes.
 *
 * Usage:
 *   node scripts/audit-bs-b2-post-fix-regression.js [--test-batch]
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  DEFAULT_MODEL,
  NON_ERROR_VERDICTS,
  createStats,
  auditCardsBatch,
  recordRetryReason,
} = require("./lib/openai-luna-b2-regression-audit");

const LV_FILE = path.join(ROOT, "data", "b2.js");
const BS_FILE = path.join(ROOT, "data", "bs", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b2.js");
const SCOPE_PATH = path.join(ROOT, "reports", "temp", "bs-b2-post-fix-regression-scope.json");
const APPLY_LOG_PATH = path.join(ROOT, "reports", "temp", "bs-b2-validated-fix-apply-log.json");
const OUT_JSON = path.join(ROOT, "reports", "temp", "bs-b2-post-fix-targeted-regression.json");
const STATS_PATH = path.join(ROOT, "scripts", ".bs-b2-post-fix-regression-audit-stats.json");
const PROGRESS_PATH = path.join(ROOT, "scripts", ".bs-b2-post-fix-regression-audit-progress.json");
const HASH_PATH = path.join(ROOT, "reports", "temp", "bs-b2-post-fix-regression-hash.txt");

const TEST_BATCH = process.argv.includes("--test-batch");
const SIMPLE_BATCH = 50;
const STUDY_BATCH = 8;
const MAX_RETRIES = 3;
const EXPECTED_SCOPE = 947;

const CACHE_COLLISION_CARDS = new Set(["b2-sich-abfinden", "b2-sich-versoehnen"]);
const SECTION_ACCENT_CARDS = new Set(["b2-haube", "b2-aendern", "b2-wechseln", "b2-foerdern"]);

const NATIVE_KEYS = new Set([
  "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "text", "left", "right", "word", "content",
  "explanation", "tip", "important", "mistakes", "remember", "info",
  "formsLabel", "rektion", "forms", "mainIdea",
]);

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function load(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function normalizeCardId(cardId) {
  return String(cardId || "")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ä/g, "ae")
    .replace(/ß/g, "ss");
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
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

function loadApplyLogByCard() {
  const map = new Map();
  if (!fs.existsSync(APPLY_LOG_PATH)) return map;
  const data = JSON.parse(fs.readFileSync(APPLY_LOG_PATH, "utf8"));
  for (const entry of data.log || []) {
    if (entry.applyStatus !== "APPLIED" && entry.applyStatus !== "ALREADY_FIXED") continue;
    const key = entry.resolvedCardId || entry.cardId;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push({
      findingId: entry.findingId,
      field: entry.field,
      pattern: entry.pattern,
      expectedCurrentText: entry.expectedCurrentText,
      correctedText: entry.correctedText,
      applyStatus: entry.applyStatus,
    });
  }
  return map;
}

function collectStudyFields(lvStudy, bsStudy, prefix = "study") {
  const fields = [];
  function walk(lvObj, bsObj, p) {
    if (!lvObj && !bsObj) return;
    if (typeof lvObj === "string" && typeof bsObj === "string") {
      const key = p.split(".").pop();
      if (NATIVE_KEYS.has(key) || key === "lv" || p.includes(".lv") || p.includes(".meaning")) {
        fields.push({ field: p, lvSource: lvObj, bsText: bsObj });
      }
      return;
    }
    if (Array.isArray(lvObj) && Array.isArray(bsObj)) {
      const len = Math.max(lvObj.length, bsObj.length);
      for (let i = 0; i < len; i++) walk(lvObj[i], bsObj[i], `${p}[${i}]`);
      return;
    }
    if (lvObj && typeof lvObj === "object" && bsObj && typeof bsObj === "object") {
      for (const key of new Set([...Object.keys(lvObj), ...Object.keys(bsObj)])) {
        if (key === "de" || key === "sectionAccents" || key === "id" || key === "layout") continue;
        walk(lvObj[key], bsObj[key], p ? `${p}.${key}` : key);
      }
    }
  }
  walk(lvStudy, bsStudy, prefix);
  return fields;
}

function regressionPriority(cardId) {
  if (CACHE_COLLISION_CARDS.has(cardId)) return "CACHE_COLLISION_CHECK";
  if (SECTION_ACCENT_CARDS.has(cardId)) return "SECTIONACCENTS_CHECK";
  return "normal";
}

function buildSimpleCard(lvE, bsE, index, applyLog) {
  const cardId = entryId(bsE, index);
  return {
    cardId,
    field: "lv",
    de: bsE.de,
    deArticle: bsE.de_article || null,
    dePlural: bsE.de_plural || null,
    lvSource: lvE.lv,
    bsText: bsE.lv,
    appliedFixes: applyLog.get(cardId) || [],
    regressionPriority: regressionPriority(cardId),
  };
}

function buildStudyCard(lvE, bsE, index, applyLog) {
  const cardId = entryId(bsE, index);
  return {
    cardId,
    de: bsE.de,
    deArticle: bsE.de_article || null,
    layout: bsE.study?.layout || "standardStudy",
    fields: collectStudyFields(lvE.study, bsE.study),
    sectionAccents: bsE.study?.sectionAccents || null,
    appliedFixes: applyLog.get(cardId) || [],
    regressionPriority: regressionPriority(cardId),
  };
}

function runDeterministicPreCheck(scopeIds, bs, lv) {
  const checks = {
    scopeExpected: EXPECTED_SCOPE,
    scopeFound: scopeIds.size,
    scopeUnique: scopeIds.size,
    allIdsExist: true,
    missingIds: [],
    syntax: "FAIL",
    structuralParity: "FAIL",
    deReadOnly: "FAIL",
    dataMirror: "FAIL",
    sectionAccentsTechnical: -1,
    emptyBsFields: 0,
    objectUndefined: 0,
    duplicateIds: 0,
    cardCount: bs.length,
    studyCount: bs.filter((e) => e.study).length,
  };

  const byId = new Map();
  const idCounts = new Map();
  for (let i = 0; i < bs.length; i++) {
    const id = entryId(bs[i], i);
    byId.set(id, bs[i]);
    byId.set(normalizeCardId(id), bs[i]);
    idCounts.set(id, (idCounts.get(id) || 0) + 1);
  }

  for (const id of scopeIds) {
    if (!byId.has(id)) {
      checks.allIdsExist = false;
      checks.missingIds.push(id);
    }
  }

  checks.duplicateIds = [...idCounts.values()].filter((n) => n > 1).length;

  try {
    execSync("node --check data/bs/b2.js", { stdio: "pipe" });
    checks.syntax = "PASS";
  } catch {
    checks.syntax = "FAIL";
  }

  try {
    const parity = JSON.parse(execSync("node scripts/audit-language-parity.js --lang=bs", { encoding: "utf8" }));
    checks.structuralParity = parity.pass ? "PASS" : "FAIL";
  } catch {
    checks.structuralParity = "FAIL";
  }

  try {
    const de = JSON.parse(execSync("node scripts/verify-bs-de-compliance.js", { encoding: "utf8" }));
    checks.deReadOnly = de.deReadOnly?.pass ? "PASS" : "FAIL";
  } catch {
    checks.deReadOnly = "FAIL";
  }

  try {
    execSync("diff -q data/bs/b2.js www/data/bs/b2.js", { stdio: "pipe" });
    checks.dataMirror = "PASS";
  } catch {
    checks.dataMirror = "FAIL";
  }

  try {
    const collect = JSON.parse(execSync("node scripts/audit-bs-b2-collect.js", { encoding: "utf8" }));
    checks.sectionAccentsTechnical = collect.sectionAccentsTechnical ?? -1;
  } catch {
    checks.sectionAccentsTechnical = -1;
  }

  function scanStrings(obj, path = "") {
    if (obj === undefined) {
      checks.objectUndefined += 1;
      return;
    }
    if (obj === null) return;
    if (typeof obj === "string") {
      if (obj === "[object Object]") checks.objectUndefined += 1;
      if (obj.trim() === "" && path.includes("study")) checks.emptyBsFields += 1;
      return;
    }
    if (Array.isArray(obj)) {
      obj.forEach((item, i) => scanStrings(item, `${path}[${i}]`));
      return;
    }
    if (typeof obj === "object") {
      for (const [k, v] of Object.entries(obj)) scanStrings(v, path ? `${path}.${k}` : k);
    }
  }

  for (const id of scopeIds) {
    const entry = byId.get(id);
    if (!entry) continue;
    scanStrings(entry);
  }

  checks.pass = checks.scopeFound === EXPECTED_SCOPE
    && checks.allIdsExist
    && checks.syntax === "PASS"
    && checks.structuralParity === "PASS"
    && checks.deReadOnly === "PASS"
    && checks.dataMirror === "PASS"
    && checks.sectionAccentsTechnical === 0;

  return checks;
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
      return await auditCardsBatch({ cards, stats, batchLabel: batchKey, auditType });
    } catch (error) {
      if (attempt >= MAX_RETRIES) {
        stats.failedRequests += 1;
        throw error;
      }
      recordRetryReason(stats, error.message.includes("JSON") ? "invalid_json" : "api_error");
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    }
  }
  return { results: [], findings: [], passCount: 0, otherVerdicts: [] };
}

function classifyResults(allResults) {
  const severity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const otherVerdicts = {
    STYLE_ONLY: 0,
    PROJECT_CONVENTION: 0,
    SOURCE_LV_ISSUE: 0,
    DE_SOURCE_ISSUE: 0,
    NEEDS_REVIEW: 0,
    KEEP: 0,
  };
  const qualityFindings = [];
  const patternCounts = {};

  for (const r of allResults) {
    if (r.status === "PASS") continue;
    if (NON_ERROR_VERDICTS.has(r.status) || NON_ERROR_VERDICTS.has(r.verdict)) {
      const v = r.verdict || r.status;
      otherVerdicts[v] = (otherVerdicts[v] || 0) + 1;
      continue;
    }
    const sev = String(r.severity || "MEDIUM").toUpperCase();
    if (severity[sev] !== undefined) severity[sev] += 1;
    else severity.MEDIUM += 1;
    const pat = String(r.category || "other").toLowerCase();
    patternCounts[pat] = (patternCounts[pat] || 0) + 1;
    qualityFindings.push(r);
  }

  return { severity, otherVerdicts, qualityFindings, patternCounts };
}

function dedupeFindings(findings) {
  const seen = new Set();
  const unique = [];
  let duplicates = 0;
  for (const f of findings) {
    const key = `${f.cardId}|${f.field}|${f.currentBs || ""}|${f.proposedBs || ""}`;
    if (seen.has(key)) {
      duplicates += 1;
      continue;
    }
    seen.add(key);
    unique.push(f);
  }
  return { unique, duplicates, raw: findings.length };
}

async function main() {
  const hashBefore = { data: md5(BS_FILE), www: md5(WWW_FILE), at: new Date().toISOString() };
  fs.writeFileSync(HASH_PATH, JSON.stringify(hashBefore, null, 2));

  const scope = JSON.parse(fs.readFileSync(SCOPE_PATH, "utf8"));
  const scopeIds = new Set(scope.cardIds || []);
  if (scopeIds.size !== EXPECTED_SCOPE) {
    console.warn(`Warning: expected ${EXPECTED_SCOPE} scope cards, got ${scopeIds.size}`);
  }

  const lv = load(LV_FILE);
  const bs = load(BS_FILE);
  const applyLog = loadApplyLogByCard();
  const preCheck = runDeterministicPreCheck(scopeIds, bs, lv);
  console.log("Deterministic pre-check:", JSON.stringify(preCheck, null, 2));

  const stats = createStats();
  const progress = loadProgress();
  const completed = new Set(progress.completedBatches || []);
  const auditedCardIds = new Set(progress.auditedCardIds || []);

  let auditData = loadAuditJson() || {
    meta: {
      model: DEFAULT_MODEL,
      startedAt: new Date().toISOString(),
      scopeExpected: EXPECTED_SCOPE,
    },
    preCheck,
    scopeCardIds: [...scopeIds].sort(),
    batches: [],
    cardResults: [],
    findings: [],
    otherVerdicts: [],
    auditedCardIds: [],
  };

  const simpleCards = [];
  const studyCards = [];
  for (let i = 0; i < lv.length; i++) {
    const id = entryId(bs[i], i);
    if (!scopeIds.has(id)) continue;
    if (bs[i].study) studyCards.push(buildStudyCard(lv[i], bs[i], i, applyLog));
    else simpleCards.push(buildSimpleCard(lv[i], bs[i], i, applyLog));
  }

  console.log(`B2 post-fix regression: ${scopeIds.size} scope cards (${simpleCards.length} simple, ${studyCards.length} study)`);
  console.log(`Model: ${DEFAULT_MODEL}`);
  if (TEST_BATCH) console.log("TEST BATCH mode");

  const processBatches = async (cards, batchSize, prefix, auditType) => {
    const batches = chunk(cards, batchSize);
    const limit = TEST_BATCH ? 1 : batches.length;
    for (let i = 0; i < limit; i++) {
      const batchKey = `${prefix}-${i}`;
      if (completed.has(batchKey)) {
        console.log(`  skip ${batchKey} (cached)`);
        continue;
      }
      const result = await auditBatchWithRetry(batches[i], stats, batchKey, auditType);
      auditData.cardResults.push(...result.results);
      auditData.findings.push(...result.findings);
      auditData.otherVerdicts.push(...(result.otherVerdicts || []));
      auditData.batches.push({
        key: batchKey,
        type: auditType,
        cardCount: batches[i].length,
        cardIds: batches[i].map((c) => c.cardId),
        findingsCount: result.findings.length,
        passCount: result.passCount,
        completedAt: new Date().toISOString(),
      });
      for (const c of batches[i]) auditedCardIds.add(c.cardId);
      completed.add(batchKey);
      progress.completedBatches = [...completed];
      progress.auditedCardIds = [...auditedCardIds];
      saveProgress(progress);
      auditData.auditedCardIds = [...auditedCardIds];
      saveAuditJson(auditData);
    }
  };

  await processBatches(simpleCards, SIMPLE_BATCH, "simple", "regression_simple");
  if (!TEST_BATCH || studyCards.length > 0) {
    await processBatches(studyCards, STUDY_BATCH, "study", "regression_study");
  }

  const hashAfter = { data: md5(BS_FILE), www: md5(WWW_FILE) };
  if (hashBefore.data !== hashAfter.data || hashBefore.www !== hashAfter.www) {
    throw new Error("DATA FILES CHANGED DURING AUDIT — aborting");
  }

  const { severity, otherVerdicts, qualityFindings, patternCounts } = classifyResults(auditData.cardResults);
  const { unique, duplicates, raw } = dedupeFindings(qualityFindings);

  const cacheCollisionResults = {};
  for (const cardId of CACHE_COLLISION_CARDS) {
    const cardFindings = auditData.cardResults.filter((r) => r.cardId === cardId && r.status !== "PASS");
    const pass = auditData.cardResults.some((r) => r.cardId === cardId && r.status === "PASS")
      || cardFindings.length === 0;
    cacheCollisionResults[cardId] = {
      de: bs.find((e, i) => entryId(e, i) === cardId)?.de || "",
      lv: lv.find((e, i) => entryId(bs[i], i) === cardId)?.lv || "",
      currentBs: bs.find((e, i) => entryId(e, i) === cardId)?.study?.translation || bs.find((e, i) => entryId(e, i) === cardId)?.lv || "",
      verdict: pass ? "PASS" : (cardFindings[0]?.verdict || cardFindings[0]?.status || "FIX"),
      findings: cardFindings,
    };
  }

  auditData.meta.completedAt = new Date().toISOString();
  auditData.meta.hashBefore = hashBefore;
  auditData.meta.hashAfter = hashAfter;
  auditData.meta.dataUnchanged = true;
  auditData.meta.scopeExpected = EXPECTED_SCOPE;
  auditData.meta.scopeAudited = auditedCardIds.size;
  auditData.meta.scopeSkipped = EXPECTED_SCOPE - auditedCardIds.size;
  auditData.meta.simpleCards = simpleCards.length;
  auditData.meta.studyCards = studyCards.length;
  auditData.meta.complete = auditedCardIds.size === EXPECTED_SCOPE;
  auditData.preCheck = preCheck;
  auditData.apiUsage = stats;
  auditData.severityCounts = severity;
  auditData.otherVerdictCounts = otherVerdicts;
  auditData.patternCounts = patternCounts;
  auditData.rawFindingsCount = raw;
  auditData.duplicateFindings = duplicates;
  auditData.qualityFindings = unique;
  auditData.findings = unique;
  auditData.cacheCollisionResults = cacheCollisionResults;
  auditData.auditedCardIds = [...auditedCardIds];
  saveAuditJson(auditData);
  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));

  console.log("\n=== B2 post-fix regression audit complete ===");
  console.log(JSON.stringify({
    model: stats.model,
    requests: stats.requestCount,
    cardsAudited: auditedCardIds.size,
    expected: EXPECTED_SCOPE,
    complete: auditedCardIds.size === EXPECTED_SCOPE,
    rawFindings: raw,
    uniqueFindings: unique.length,
    severity,
    otherVerdicts,
    tokens: stats.totalTokens,
    dataUnchanged: true,
  }, null, 2));
}

main().catch((error) => {
  console.error("B2 post-fix regression audit failed:", error.message);
  process.exit(1);
});
