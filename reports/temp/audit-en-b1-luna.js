#!/usr/bin/env node
/**
 * EN-DE B1 Luna linguistic audit (read-only). Requires OPENAI_API_KEY + gpt-5.6-luna.
 *
 * Usage:
 *   export OPENAI_API_KEY=...
 *   node reports/temp/audit-en-b1-luna.js [--test-batch] [--reset-progress]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const {
  DEFAULT_MODEL,
  createStats,
  auditCardsBatch,
  auditDeterministicVerdictsBatch,
  recordRetryReason,
} = require("./openai-en-luna-audit-batch");
const { finalizeEnB1LunaFindings } = require("./finalize-en-b1-luna-findings");

const DETERMINISTIC_PATH = path.join(ROOT, "reports", "temp", "en-b1-findings-consolidated.json");
const DETERMINISTIC_VERDICT_BATCH = 20;

const LV_FILE = path.join(ROOT, "data", "b1.js");
const EN_FILE = path.join(ROOT, "data", "en", "b1.js");
const FINDINGS_PATH = path.join(ROOT, "reports", "temp", "en-b1-luna-findings.json");
const STATS_PATH = path.join(ROOT, "scripts", ".en-b1-luna-audit-stats.json");
const PROGRESS_PATH = path.join(ROOT, "scripts", ".en-b1-luna-audit-progress.json");

const TEST_BATCH = process.argv.includes("--test-batch");
const RESET = process.argv.includes("--reset-progress");
const SIMPLE_BATCH = 80;
const STUDY_BATCH = 10;
const MAX_RETRIES = 3;

function load(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `b1-${entry.de}-${index}`;
}

function chunk(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

function collectStudyFields(lvStudy, enStudy, prefix = "study") {
  const fields = [];
  const NATIVE_KEYS = new Set([
    "translation", "title", "subtitle", "lead", "meaning", "describes",
    "label", "description", "text", "left", "right", "word", "content",
    "explanation", "tip", "important", "mistakes", "remember", "info",
  ]);

  function walk(lvObj, enObj, p) {
    if (!lvObj && !enObj) return;
    if (typeof lvObj === "string" && typeof enObj === "string") {
      const key = p.split(".").pop();
      if (NATIVE_KEYS.has(key) || key === "lv" || p.includes(".lv")) {
        fields.push({ field: p, lvSource: lvObj, enText: enObj });
      }
      return;
    }
    if (Array.isArray(lvObj) && Array.isArray(enObj)) {
      const len = Math.max(lvObj.length, enObj.length);
      for (let i = 0; i < len; i++) walk(lvObj[i], enObj[i], `${p}[${i}]`);
      return;
    }
    if (lvObj && typeof lvObj === "object" && enObj && typeof enObj === "object") {
      for (const key of new Set([...Object.keys(lvObj), ...Object.keys(enObj)])) {
        if (key === "de" || key === "sectionAccents" || key === "id" || key === "layout") continue;
        walk(lvObj[key], enObj[key], p ? `${p}.${key}` : key);
      }
    }
  }

  walk(lvStudy, enStudy, prefix);
  return fields;
}

function buildSimpleCard(lvE, enE, index) {
  return {
    cardId: entryId(enE, index),
    field: "lv",
    de: enE.de,
    deArticle: enE.de_article || null,
    dePlural: enE.de_plural || null,
    lvSource: lvE.lv,
    enText: enE.lv,
  };
}

function buildStudyCard(lvE, enE, index) {
  return {
    cardId: entryId(enE, index),
    de: enE.de,
    deArticle: enE.de_article || null,
    layout: enE.study?.layout || "standardStudy",
    fields: collectStudyFields(lvE.study, enE.study),
    sectionAccents: enE.study?.sectionAccents || null,
  };
}

async function auditDeterministicWithRetry(findings, stats, batchKey) {
  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      if (attempt === 0) stats.initialBatchRequests += 1;
      else {
        stats.retryRequests += 1;
        stats.retryCount += 1;
        recordRetryReason(stats, attempt === 1 ? "first_retry" : "subsequent_retry");
      }
      return await auditDeterministicVerdictsBatch({
        findings,
        stats,
        batchLabel: batchKey,
      });
    } catch (error) {
      if (attempt >= MAX_RETRIES) throw error;
      recordRetryReason(stats, error.message.includes("JSON") ? "invalid_json" : "api_error");
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    }
  }
  return { findings: [], okCount: 0 };
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
      return await auditCardsBatch({
        cards,
        stats,
        batchLabel: batchKey,
        auditType,
      });
    } catch (error) {
      if (attempt >= MAX_RETRIES) throw error;
      recordRetryReason(stats, error.message.includes("JSON") ? "invalid_json" : "api_error");
      await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
    }
  }
  return { findings: [], okCount: 0 };
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

async function main() {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    console.error("STOP: OPENAI_API_KEY not set. Luna audit cannot run.");
    process.exit(2);
  }

  if (RESET) {
    if (fs.existsSync(PROGRESS_PATH)) fs.unlinkSync(PROGRESS_PATH);
    console.log("Progress reset.");
  }

  const lv = load(LV_FILE);
  const en = load(EN_FILE);
  const stats = createStats();
  const progress = loadProgress();
  const completed = new Set(progress.completedBatches || []);
  const auditedIds = new Set(progress.auditedCardIds || []);
  const allFindings = [];

  const simpleCards = [];
  const studyCards = [];

  for (let i = 0; i < lv.length; i++) {
    if (en[i].study) studyCards.push(buildStudyCard(lv[i], en[i], i));
    else simpleCards.push(buildSimpleCard(lv[i], en[i], i));
  }

  console.log(`EN B1 Luna audit: ${lv.length} entries, ${simpleCards.length} simple, ${studyCards.length} study`);
  console.log(`Model: ${DEFAULT_MODEL}`);

  for (const [cards, batchSize, type, prefix] of [
    [simpleCards, SIMPLE_BATCH, "simple_translation", "simple"],
    [studyCards, STUDY_BATCH, "study_card", "study"],
  ]) {
    const batches = chunk(cards, batchSize);
    const limit = TEST_BATCH ? 1 : batches.length;
    for (let i = 0; i < limit; i++) {
      const batchKey = `${prefix}-${i}`;
      if (completed.has(batchKey)) {
        console.log(`  skip ${batchKey} (cached)`);
        batches[i].forEach((c) => auditedIds.add(c.cardId));
        continue;
      }
      const result = await auditBatchWithRetry(batches[i], stats, batchKey, type);
      for (const f of result.findings || []) {
        allFindings.push({ ...f, source: "luna" });
      }
      batches[i].forEach((c) => auditedIds.add(c.cardId));
      completed.add(batchKey);
      saveProgress({ completedBatches: [...completed], auditedCardIds: [...auditedIds] });
      fs.writeFileSync(
        FINDINGS_PATH,
        JSON.stringify({
          status: "IN_PROGRESS",
          partialFindings: allFindings.length,
          coverage: {
            totalCards: { audited: auditedIds.size, total: lv.length },
          },
        })
      );
    }
  }

  const coverage = {
    normalCards: { audited: simpleCards.filter((c) => auditedIds.has(c.cardId)).length, total: simpleCards.length },
    standardStudy: {
      audited: studyCards.filter((c) => c.layout === "standardStudy" && auditedIds.has(c.cardId)).length,
      total: studyCards.filter((c) => c.layout === "standardStudy").length,
    },
    minimalStudy: {
      audited: studyCards.filter((c) => c.layout === "minimalStudy" && auditedIds.has(c.cardId)).length,
      total: studyCards.filter((c) => c.layout === "minimalStudy").length,
    },
    totalCards: { audited: auditedIds.size, total: lv.length },
    studyCards: { audited: studyCards.filter((c) => auditedIds.has(c.cardId)).length, total: studyCards.length },
  };

  const fullCoverage =
    coverage.totalCards.audited === coverage.totalCards.total &&
    coverage.normalCards.audited === coverage.normalCards.total &&
    coverage.standardStudy.audited === coverage.standardStudy.total &&
    coverage.minimalStudy.audited === coverage.minimalStudy.total;

  if (!fullCoverage) {
    const partial = {
      status: "INCOMPLETE",
      model: DEFAULT_MODEL,
      generatedAt: new Date().toISOString(),
      coverage,
      findings: allFindings,
      stats,
    };
    fs.mkdirSync(path.dirname(FINDINGS_PATH), { recursive: true });
    fs.writeFileSync(FINDINGS_PATH, JSON.stringify(partial, null, 2));
    fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));
    console.error("Coverage incomplete — audit not marked EXECUTED.");
    process.exit(1);
  }

  const deterministic = JSON.parse(fs.readFileSync(DETERMINISTIC_PATH, "utf8"));
  const detFindings = deterministic.findings || [];
  const detPayload = detFindings.map((f, i) => ({
    findingId: `det-${i}`,
    cardId: f["Card ID"],
    field: f.Field,
    de: f.DE,
    currentEn: f["Current EN"],
    deterministicSeverity: f.Severity,
    deterministicReason: f.Reason,
    deterministicType: f.Type,
  }));

  const deterministicVerdicts = [];
  const detBatches = chunk(detPayload, DETERMINISTIC_VERDICT_BATCH);
  for (let i = 0; i < detBatches.length; i++) {
    if (TEST_BATCH && i > 0) break;
    const result = await auditDeterministicWithRetry(detBatches[i], stats, `deterministic-verdict-${i}`);
    for (const row of result.findings || []) {
      deterministicVerdicts.push(row);
    }
  }

  for (const f of allFindings) {
    f.sourceClassification = "new Luna finding";
    f.source = "luna";
  }

  const output = finalizeEnB1LunaFindings({
    lunaCardFindings: allFindings,
    deterministicVerdicts,
    deterministicFindings: detFindings,
    coverage,
    model: DEFAULT_MODEL,
    stats,
    generatedAt: new Date().toISOString(),
  });

  fs.mkdirSync(path.dirname(FINDINGS_PATH), { recursive: true });
  fs.writeFileSync(FINDINGS_PATH, JSON.stringify(output, null, 2));
  fs.writeFileSync(STATS_PATH, JSON.stringify(stats, null, 2));
  console.log(
    JSON.stringify(
      {
        status: output.status,
        coverage,
        findings: allFindings.length,
        summary: output.summary,
        severityCounts: output.severityCounts,
      },
      null,
      2
    )
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
