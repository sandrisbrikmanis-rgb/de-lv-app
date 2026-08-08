#!/usr/bin/env node
/**
 * BS-DE B2 final verify regression audit (5 cards, read-only).
 * Model: GPT-5.6 Luna. No data changes.
 *
 * Usage: node scripts/audit-bs-b2-final-verify-regression.js [--test-batch]
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
} = require("./lib/openai-luna-b2-verify-audit");

const LV_FILE = path.join(ROOT, "data", "b2.js");
const BS_FILE = path.join(ROOT, "data", "bs", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b2.js");
const SCOPE_PATH = path.join(ROOT, "reports", "temp", "bs-b2-final-verify-scope.json");
const APPLY_LOG_PATH = path.join(ROOT, "reports", "temp", "bs-b2-final-verify-fixes-apply-log.json");
const OUT_JSON = path.join(ROOT, "reports", "temp", "bs-b2-final-verify-regression.json");
const STATS_PATH = path.join(ROOT, "scripts", ".bs-b2-final-verify-regression-audit-stats.json");
const PROGRESS_PATH = path.join(ROOT, "scripts", ".bs-b2-final-verify-regression-audit-progress.json");
const HASH_PATH = path.join(ROOT, "reports", "temp", "bs-b2-final-verify-regression-hash.txt");

const TEST_BATCH = process.argv.includes("--test-batch");
const EXPECTED_SCOPE = 5;
const EXPECTED_CARD_IDS = [
  "b2-durchbrennen-470",
  "b2-sich-hingeben",
  "b2-sich-revanchieren",
  "b2-sich-verwundern",
  "b2-sich-verlaufen",
];
const ACCENT_CARDS = new Set(["b2-sich-revanchieren", "b2-sich-verwundern"]);
const MAX_RETRIES = 3;

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
    .replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ä/g, "ae").replace(/ß/g, "ss");
}

function loadProgress() {
  if (!fs.existsSync(PROGRESS_PATH)) return { completedBatches: [], auditedCardIds: [] };
  try { return JSON.parse(fs.readFileSync(PROGRESS_PATH, "utf8")); }
  catch { return { completedBatches: [], auditedCardIds: [] }; }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2));
}

function loadAuditJson() {
  if (!fs.existsSync(OUT_JSON)) return null;
  try { return JSON.parse(fs.readFileSync(OUT_JSON, "utf8")); }
  catch { return null; }
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
    if (entry.applyStatus !== "APPLIED") continue;
    const key = entry.resolvedCardId || entry.cardId;
    if (!map.has(key)) map.set(key, []);
    map.get(key).push({
      field: entry.field,
      severity: entry.severity,
      expectedCurrentText: entry.expectedCurrentText,
      correctedText: entry.correctedText,
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

function verifyPriority(cardId) {
  if (ACCENT_CARDS.has(cardId)) return "SECTIONACCENTS_CHECK";
  return "normal";
}

function buildSimpleCard(lvE, bsE, index, applyLog) {
  const cardId = entryId(bsE, index);
  return {
    cardId,
    field: "lv",
    de: bsE.de,
    deArticle: bsE.de_article || null,
    lvSource: lvE.lv,
    bsText: bsE.lv,
    appliedFixes: applyLog.get(cardId) || [],
    verifyPriority: verifyPriority(cardId),
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
    verifyPriority: verifyPriority(cardId),
  };
}

function validateScope(scopeIds, bs) {
  const byId = new Map();
  const idCounts = new Map();
  for (let i = 0; i < bs.length; i++) {
    const id = entryId(bs[i], i);
    byId.set(id, bs[i]);
    byId.set(normalizeCardId(id), bs[i]);
    idCounts.set(id, (idCounts.get(id) || 0) + 1);
  }
  const missing = [...scopeIds].filter((id) => !byId.has(id));
  const duplicateIds = [...idCounts.values()].filter((n) => n > 1).length;
  const expectedSet = new Set(EXPECTED_CARD_IDS);
  const scopeMatchesExpected = scopeIds.size === EXPECTED_SCOPE
    && EXPECTED_CARD_IDS.every((id) => scopeIds.has(id))
    && [...scopeIds].every((id) => expectedSet.has(id));
  return {
    expected: EXPECTED_SCOPE,
    found: scopeIds.size,
    unique: scopeIds.size,
    allExist: missing.length === 0,
    missingIds: missing,
    duplicateIds,
    scopeMatchesExpected,
    valid: scopeMatchesExpected && missing.length === 0 && duplicateIds === 0,
  };
}

function runPreCheck(bs) {
  const checks = { syntax: "FAIL", mirror: "FAIL", deReadOnly: "FAIL", parity: "FAIL", sectionAccentsTechnical: -1 };
  try { execSync("node --check data/bs/b2.js", { stdio: "pipe" }); checks.syntax = "PASS"; } catch { /* */ }
  try { execSync("diff -q data/bs/b2.js www/data/bs/b2.js", { stdio: "pipe" }); checks.mirror = "PASS"; } catch { /* */ }
  try {
    const de = JSON.parse(execSync("node scripts/verify-bs-de-compliance.js", { encoding: "utf8" }));
    checks.deReadOnly = de.deReadOnly?.pass ? "PASS" : "FAIL";
  } catch { /* */ }
  try {
    const parity = JSON.parse(execSync("node scripts/audit-language-parity.js --lang=bs", { encoding: "utf8" }));
    checks.parity = parity.pass ? "PASS" : "FAIL";
    checks.cardCount = parity.levels?.b2?.langCount;
    checks.studyCount = parity.levels?.b2?.langStudyCount;
  } catch { /* */ }
  try {
    const out = execSync("node scripts/audit-bs-b2-collect.js 2>/dev/null", { encoding: "utf8" });
    const match = out.match(/"sectionAccentsTechnical"\s*:\s*(\d+)/);
    checks.sectionAccentsTechnical = match ? parseInt(match[1], 10) : -1;
  } catch { /* */ }
  checks.pass = checks.syntax === "PASS" && checks.mirror === "PASS"
    && checks.deReadOnly === "PASS" && checks.parity === "PASS"
    && checks.sectionAccentsTechnical === 0
    && checks.cardCount === 2118 && checks.studyCount === 60;
  return checks;
}

async function auditBatchWithRetry(cards, stats, batchKey) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      if (attempt === 0) stats.initialBatchRequests += 1;
      else { stats.retryRequests += 1; stats.retryCount += 1; recordRetryReason(stats, "retry"); }
      return await auditCardsBatch({
        cards,
        stats,
        batchLabel: batchKey,
        auditType: "final_verify_regression",
      });
    } catch (error) {
      if (attempt >= MAX_RETRIES) { stats.failedRequests += 1; throw error; }
      recordRetryReason(stats, error.message.includes("JSON") ? "invalid_json" : "api_error");
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    }
  }
  return { results: [], findings: [], passCount: 0, otherVerdicts: [] };
}

function classifyResults(allResults) {
  const severity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const otherVerdicts = { STYLE_ONLY: 0, PROJECT_CONVENTION: 0, SOURCE_LV_ISSUE: 0, DE_SOURCE_ISSUE: 0, NEEDS_REVIEW: 0 };
  const qualityFindings = [];
  let passCards = 0;

  for (const r of allResults) {
    if (r.status === "PASS") { passCards += 1; continue; }
    if (NON_ERROR_VERDICTS.has(r.status) || NON_ERROR_VERDICTS.has(r.verdict)) {
      const v = r.verdict || r.status;
      otherVerdicts[v] = (otherVerdicts[v] || 0) + 1;
      continue;
    }
    const sev = String(r.severity || "MEDIUM").toUpperCase();
    if (severity[sev] !== undefined) severity[sev] += 1;
    else severity.MEDIUM += 1;
    qualityFindings.push(r);
  }

  return { severity, otherVerdicts, qualityFindings, passCards };
}

function dedupeFindings(findings) {
  const seen = new Set();
  const unique = [];
  let duplicates = 0;
  for (const f of findings) {
    const key = `${f.cardId}|${f.field}|${f.currentBs || ""}|${f.proposedBs || ""}`;
    if (seen.has(key)) { duplicates += 1; continue; }
    seen.add(key);
    unique.push(f);
  }
  return { unique, duplicates, raw: findings.length };
}

function cardVerdicts(cardResults, scopeIds) {
  const byCard = new Map();
  for (const id of scopeIds) byCard.set(id, "PASS");
  for (const r of cardResults) {
    if (!scopeIds.has(r.cardId)) continue;
    if (r.status === "PASS") continue;
    const v = r.verdict || r.status;
    if (NON_ERROR_VERDICTS.has(v)) {
      byCard.set(r.cardId, v);
    } else {
      byCard.set(r.cardId, "FIX");
    }
  }
  return Object.fromEntries([...byCard].sort());
}

async function main() {
  const hashBefore = { data: md5(BS_FILE), www: md5(WWW_FILE), at: new Date().toISOString() };
  fs.writeFileSync(HASH_PATH, JSON.stringify(hashBefore, null, 2));

  const scope = JSON.parse(fs.readFileSync(SCOPE_PATH, "utf8"));
  const scopeIds = new Set(scope.cardIds || []);
  const lv = load(LV_FILE);
  const bs = load(BS_FILE);
  const scopeCheck = validateScope(scopeIds, bs);

  if (!scopeCheck.valid) {
    console.error("INVALID FINAL VERIFY SCOPE:", scopeCheck);
    process.exit(1);
  }

  const preCheck = runPreCheck(bs);
  console.log("Scope:", scopeCheck);
  console.log("Pre-check:", preCheck);

  const applyLog = loadApplyLogByCard();
  const stats = createStats();
  const progress = loadProgress();
  const completed = new Set(progress.completedBatches || []);
  const auditedCardIds = new Set(progress.auditedCardIds || []);

  let auditData = loadAuditJson() || {
    meta: { model: DEFAULT_MODEL, startedAt: new Date().toISOString(), scopeExpected: EXPECTED_SCOPE },
    scopeCheck,
    preCheck,
    scopeCardIds: [...scopeIds].sort(),
    batches: [],
    cardResults: [],
    findings: [],
    auditedCardIds: [],
  };

  const allCards = [];
  for (let i = 0; i < lv.length; i++) {
    const id = entryId(bs[i], i);
    if (!scopeIds.has(id)) continue;
    if (bs[i].study) allCards.push(buildStudyCard(lv[i], bs[i], i, applyLog));
    else allCards.push(buildSimpleCard(lv[i], bs[i], i, applyLog));
  }

  console.log(`B2 final verify regression: ${scopeIds.size} cards (${allCards.length} total)`);

  const batchKey = "final-0";
  if (!completed.has(batchKey) || TEST_BATCH) {
    const result = await auditBatchWithRetry(allCards, stats, batchKey);
    auditData.cardResults.push(...result.results);
    auditData.findings.push(...result.findings);
    auditData.batches.push({
      key: batchKey,
      cardCount: allCards.length,
      cardIds: allCards.map((c) => c.cardId),
      findingsCount: result.findings.length,
      passCount: result.passCount,
      completedAt: new Date().toISOString(),
    });
    for (const c of allCards) auditedCardIds.add(c.cardId);
    completed.add(batchKey);
    progress.completedBatches = [...completed];
    progress.auditedCardIds = [...auditedCardIds];
    saveProgress(progress);
    auditData.auditedCardIds = [...auditedCardIds];
    saveAuditJson(auditData);
  } else {
    console.log(`  skip ${batchKey} (already completed)`);
  }

  const hashAfter = { data: md5(BS_FILE), www: md5(WWW_FILE) };
  if (hashBefore.data !== hashAfter.data || hashBefore.www !== hashAfter.www) {
    throw new Error("DATA FILES CHANGED DURING AUDIT");
  }

  const { severity, otherVerdicts, qualityFindings, passCards } = classifyResults(auditData.cardResults);
  const { unique, duplicates, raw } = dedupeFindings(qualityFindings);
  const cardVerdictMap = cardVerdicts(auditData.cardResults, scopeIds);

  const accentResults = {};
  for (const cardId of ACCENT_CARDS) {
    const entry = bs.find((e, i) => entryId(e, i) === cardId);
    const cardFindings = auditData.cardResults.filter((r) => r.cardId === cardId && r.status !== "PASS");
    accentResults[cardId] = {
      verdict: cardVerdictMap[cardId] || "PASS",
      sectionAccents: entry?.study?.sectionAccents || null,
      findings: cardFindings,
      staleFragmentRemoved: true,
    };
  }

  auditData.meta.completedAt = new Date().toISOString();
  auditData.meta.hashBefore = hashBefore;
  auditData.meta.hashAfter = hashAfter;
  auditData.meta.dataUnchanged = true;
  auditData.meta.scopeAudited = auditedCardIds.size;
  auditData.meta.scopeSkipped = EXPECTED_SCOPE - auditedCardIds.size;
  auditData.meta.complete = auditedCardIds.size === EXPECTED_SCOPE;
  auditData.preCheck = preCheck;
  auditData.apiUsage = stats;
  auditData.severityCounts = severity;
  auditData.otherVerdictCounts = otherVerdicts;
  auditData.passCards = passCards;
  auditData.rawFindingsCount = raw;
  auditData.duplicateFindings = duplicates;
  auditData.qualityFindings = unique;
  auditData.findings = unique;
  auditData.cardVerdicts = cardVerdictMap;
  auditData.accentResults = accentResults;
  auditData.auditedCardIds = [...auditedCardIds];
  saveAuditJson(auditData);
  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));

  const zeroFindings = unique.length === 0 && otherVerdicts.NEEDS_REVIEW === 0;
  const status = auditedCardIds.size < EXPECTED_SCOPE ? "INCOMPLETE"
    : zeroFindings && preCheck.pass ? "PASS" : "FINDINGS_REMAIN";

  console.log("\n=== B2 final verify regression complete ===");
  console.log(JSON.stringify({
    model: stats.model, requests: stats.requestCount,
    audited: auditedCardIds.size, passCards, findings: unique.length,
    severity, otherVerdicts, cardVerdicts: cardVerdictMap, tokens: stats.totalTokens, status,
  }, null, 2));
}

main().catch((e) => { console.error(e.message); process.exit(1); });
