#!/usr/bin/env node
/**
 * CS-DE A1+A2 full Luna linguistic audit (read-only).
 * Usage: OPENAI_API_KEY=... node reports/temp/audit-cs-a1a2-luna.js
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");
const {
  DEFAULT_MODEL,
  createStats,
  auditCardsBatch,
  recordRetryReason,
  assertApiKey,
} = require("./openai-luna-cs-a1a2-audit");

const ROOT = path.join(__dirname, "..", "..");
const OUT_JSON = path.join(ROOT, "reports", "temp", "cs-a1a2-luna-linguistic-findings.json");
const PROGRESS_PATH = path.join(ROOT, "reports", "temp", ".cs-a1a2-luna-audit-progress.json");

const LEVELS = ["a1", "a2"];
const SIMPLE_BATCH = 60;
const STUDY_BATCH = 10;
const MAX_RETRIES = 3;

const NON_ERROR_CATEGORIES = new Set([
  "SOURCE_LV_ISSUE", "DE_SOURCE_ISSUE", "NEEDS_REVIEW", "STYLE_ONLY", "PROJECT_CONVENTION",
]);

const NATIVE_KEYS = new Set([
  "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "text", "left", "right", "word", "content",
  "explanation", "tip", "important", "mistakes", "remember", "info",
  "formsLabel", "rektion", "forms", "mainIdea", "lv",
]);

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function load(filePath, globalKey) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

function entryId(entry, index, level) {
  return entry.study?.id || `${level}-${entry.de}-${index}`;
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

function collectCsFields(lvStudy, csStudy, prefix = "study") {
  const fields = [];
  function walk(lvObj, csObj, p) {
    if (!lvObj && !csObj) return;
    if (typeof lvObj === "string" && typeof csObj === "string") {
      const key = p.split(".").pop();
      if (NATIVE_KEYS.has(key) || key === "lv" || p.includes(".lv") || p.includes(".meaning")) {
        fields.push({ field: p, lvSource: lvObj, csText: csObj });
      }
      return;
    }
    if (Array.isArray(lvObj) && Array.isArray(csObj)) {
      const len = Math.max(lvObj.length, csObj.length);
      for (let i = 0; i < len; i++) walk(lvObj[i], csObj[i], `${p}[${i}]`);
      return;
    }
    if (lvObj && typeof lvObj === "object" && csObj && typeof csObj === "object") {
      for (const key of new Set([...Object.keys(lvObj), ...Object.keys(csObj)])) {
        if (key === "de" || key === "sectionAccents" || key === "id" || key === "layout") continue;
        walk(lvObj[key], csObj[key], p ? `${p}.${key}` : key);
      }
    }
  }
  walk(lvStudy, csStudy, prefix);
  return fields;
}

function buildSimpleCard(lvE, csE, index, level) {
  return {
    cardId: entryId(csE, index, level),
    field: "lv",
    de: csE.de,
    deArticle: csE.de_article || null,
    dePlural: csE.de_plural || null,
    lvSource: lvE.lv,
    csText: csE.lv,
  };
}

function buildStudyCard(lvE, csE, index, level) {
  return {
    cardId: entryId(csE, index, level),
    de: csE.de,
    deArticle: csE.de_article || null,
    layout: csE.study?.layout || "standardStudy",
    fields: collectCsFields(lvE.study, csE.study),
  };
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
  const qualityFindings = [];

  for (const f of findings) {
    if (f.status === "PASS") continue;
    const cat = String(f.category || "").toUpperCase();
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
  return { severity, nonError, qualityFindings };
}

async function main() {
  try {
    assertApiKey();
  } catch (e) {
    console.error(JSON.stringify({ status: "BLOCKED", reason: e.message, model: DEFAULT_MODEL }, null, 2));
    process.exit(2);
  }

  const stats = createStats();
  const progress = loadProgress();
  const completed = new Set(progress.completedBatches || []);

  let auditData = loadAuditJson() || {
    meta: { model: DEFAULT_MODEL, startedAt: new Date().toISOString(), levels: LEVELS },
    findings: [],
    stats: null,
  };

  const allFindings = auditData.findings || [];
  const seenFinding = new Set(allFindings.map((f) => `${f.cardId}|${f.field}|${f.currentCs}`));

  for (const level of LEVELS) {
    const globalKey = `${level.toUpperCase()}_WORDS`;
    const lv = load(path.join(ROOT, "data", `${level}.js`), globalKey);
    const cs = load(path.join(ROOT, "data", "cs", `${level}.js`), globalKey);

    const simpleCards = [];
    const studyCards = [];

    for (let i = 0; i < lv.length; i++) {
      if (cs[i].study) studyCards.push(buildStudyCard(lv[i], cs[i], i, level));
      else simpleCards.push(buildSimpleCard(lv[i], cs[i], i, level));
    }

    const simpleBatches = chunk(simpleCards, SIMPLE_BATCH);
    for (let bi = 0; bi < simpleBatches.length; bi++) {
      const batchKey = `${level}-simple-${bi}`;
      if (completed.has(batchKey)) continue;
      const result = await auditBatchWithRetry(simpleBatches[bi], stats, batchKey, "simple_flashcard");
      for (const f of result.findings) {
        const key = `${f.cardId}|${f.field}|${f.currentCs}`;
        if (!seenFinding.has(key)) {
          seenFinding.add(key);
          allFindings.push({ ...f, level });
        }
      }
      completed.add(batchKey);
      progress.completedBatches = [...completed];
      saveProgress(progress);
      auditData.findings = allFindings;
      auditData.stats = stats;
      saveAuditJson(auditData);
    }

    const studyBatches = chunk(studyCards, STUDY_BATCH);
    for (let bi = 0; bi < studyBatches.length; bi++) {
      const batchKey = `${level}-study-${bi}`;
      if (completed.has(batchKey)) continue;
      const result = await auditBatchWithRetry(studyBatches[bi], stats, batchKey, "study_card");
      for (const f of result.findings) {
        const key = `${f.cardId}|${f.field}|${f.currentCs}`;
        if (!seenFinding.has(key)) {
          seenFinding.add(key);
          allFindings.push({ ...f, level });
        }
      }
      completed.add(batchKey);
      progress.completedBatches = [...completed];
      saveProgress(progress);
      auditData.findings = allFindings;
      auditData.stats = stats;
      saveAuditJson(auditData);
    }
  }

  const classified = classifyFindings(allFindings);
  auditData.completedAt = new Date().toISOString();
  auditData.stats = stats;
  auditData.summary = {
    totalFindings: allFindings.length,
    qualityFindings: classified.qualityFindings.length,
    severity: classified.severity,
    nonError: classified.nonError,
  };
  saveAuditJson(auditData);

  console.log(JSON.stringify({
    status: "COMPLETE",
    model: DEFAULT_MODEL,
    totalFindings: allFindings.length,
    qualityFindings: classified.qualityFindings.length,
    severity: classified.severity,
    tokens: stats.totalTokens,
    out: OUT_JSON,
  }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
