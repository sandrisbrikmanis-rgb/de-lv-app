#!/usr/bin/env node
/**
 * EN-DE B2 final repair Luna micro-regression — only cards touched by 51 OWNER repairs.
 */
require("dotenv").config();

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const LV_FILE = path.join(ROOT, "data", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");
const APPLY_LOG = path.join(__dirname, "en-b2-final-luna-repairs-apply-log.json");
const REPAIRS_JSON = path.join(__dirname, "en-b2-final-luna-repairs.json");
const PRE_REPAIR_COMMIT = "526a2d4b";

const OUT_MD = path.join(ROOT, "reports", "en-b2-final-repair-microregression.md");
const OUT_JSON = path.join(ROOT, "reports", "temp", "en-b2-final-repair-microregression.json");
const TARGET_JSON = path.join(__dirname, "en-b2-final-repair-microregression-target.json");
const RAW_JSON = path.join(__dirname, "en-b2-final-repair-microregression-raw.json");
const PROGRESS_JSON = path.join(__dirname, ".en-b2-final-repair-microregression-progress.json");
const LOG_PATH = path.join(__dirname, "en-b2-final-repair-microregression-run.log");

const BATCH_SIZE_SIMPLE = 40;
const BATCH_SIZE_STUDY = 8;
const MAX_RETRIES = 3;

const NON_ERROR_CATEGORIES = new Set([
  "SOURCE_LV_ISSUE", "DE_SOURCE_ISSUE", "NEEDS_REVIEW", "STYLE_ONLY", "PROJECT_CONVENTION",
  "DIALECT_PREFERENCE", "SYNONYM_PREFERENCE", "BRITISH_AMERICAN",
]);

const DIALECT_PATTERNS = [
  /british english/i,
  /american english/i,
  /honourable/i,
  /honorable/i,
  /ardour/i,
  /ardor/i,
  /bonnet/i,
  /hood/i,
  /spelling preference/i,
  /dialect/i,
];

function md5File(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function gitShow(commit, filePath) {
  return execSync(`git show ${commit}:${filePath}`, { cwd: ROOT, encoding: "utf8", maxBuffer: 50 * 1024 * 1024 });
}

function loadFromCode(code) {
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

function walkEnChanges(entry, baseEntry, cardId, prefix, changes) {
  if (!entry && !baseEntry) return;
  if (typeof entry === "string" || typeof baseEntry === "string") {
    const a = entry ?? "";
    const b = baseEntry ?? "";
    if (a !== b && !prefix.includes("sectionAccents")) {
      changes.push({ fieldPath: prefix, baselineEn: b, currentEn: a });
    }
    return;
  }
  if (Array.isArray(entry) || Array.isArray(baseEntry)) {
    const len = Math.max((entry || []).length, (baseEntry || []).length);
    for (let i = 0; i < len; i++) walkEnChanges(entry?.[i], baseEntry?.[i], cardId, `${prefix}[${i}]`, changes);
    return;
  }
  if (entry && typeof entry === "object") {
    const keys = new Set([...Object.keys(entry || {}), ...Object.keys(baseEntry || {})]);
    for (const k of keys) {
      if (["de", "de_article", "de_plural", "level"].includes(k)) continue;
      walkEnChanges(entry?.[k], baseEntry?.[k], cardId, prefix ? `${prefix}.${k}` : k, changes);
    }
  }
}

function buildMicroTarget(beforeEn, afterEn, lvWords, targetCardIds) {
  const idSet = new Set(targetCardIds);
  const normSet = new Set(targetCardIds.map(normalizeCardId));
  const cards = [];

  for (let i = 0; i < afterEn.length; i++) {
    const enE = afterEn[i];
    const lvE = lvWords[i];
    const cardId = entryId(enE, i);
    if (!idSet.has(cardId) && !normSet.has(cardId) && !idSet.has(normalizeCardId(cardId))) continue;

    const changes = [];
    walkEnChanges(enE, beforeEn[i], cardId, "", changes);
    const study = enE.study;
    const payload = {
      cardId,
      de: enE.de,
      de_article: enE.de_article || null,
      de_plural: enE.de_plural || null,
      enMain: enE.lv,
      lvMainSource: lvE.lv,
      changedFields: changes,
      hasStudy: !!study,
    };
    if (study) {
      payload.study = {
        layout: study.layout || "standardStudy",
        translation: study.translation || null,
        explanation: study.explanation || null,
        rektion: study.rektion || null,
        forms: study.forms || null,
        formsLabel: study.formsLabel || null,
        examples: (study.examples || []).map((ex) => ({ de: ex.de, en: ex.lv })),
        comparison: (study.comparison || []).map((c) => ({
          word: c.word,
          meaning: c.meaning,
          example: c.example,
        })),
        tip: study.tip || null,
        important: study.important || null,
      };
    }
    cards.push(payload);
  }
  return cards;
}

async function runLuna(targetCards) {
  if (!process.env.OPENAI_API_KEY?.trim()) {
    return { status: "NOT_RUN_API_UNAVAILABLE", audited: 0, expected: targetCards.length, rawFindings: [], stats: null };
  }

  const { auditCardsBatch, createStats, recordRetryReason } = require("./openai-luna-en-b2-full-audit");
  const stats = createStats();
  let progress = { completedBatches: [], auditedCardIds: [] };
  if (fs.existsSync(PROGRESS_JSON)) {
    try {
      progress = JSON.parse(fs.readFileSync(PROGRESS_JSON, "utf8"));
    } catch {
      progress = { completedBatches: [], auditedCardIds: [] };
    }
  }
  const completed = new Set(progress.completedBatches || []);
  let rawFindings = [];
  if (fs.existsSync(RAW_JSON)) {
    try {
      rawFindings = JSON.parse(fs.readFileSync(RAW_JSON, "utf8")).findings || [];
    } catch {
      rawFindings = [];
    }
  }

  function chunk(arr, n) {
    const out = [];
    for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n));
    return out;
  }

  function saveProgress() {
    fs.writeFileSync(
      PROGRESS_JSON,
      JSON.stringify({ completedBatches: [...completed], updatedAt: new Date().toISOString() }, null, 2)
    );
    fs.writeFileSync(RAW_JSON, JSON.stringify({ findings: rawFindings, stats }, null, 2));
  }

  async function auditWithRetry(cards, batchKey, auditType) {
    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
      try {
        if (attempt === 0) stats.initialBatchRequests += 1;
        else {
          stats.retryRequests += 1;
          stats.retryCount += 1;
          recordRetryReason(stats, attempt === 1 ? "first_retry" : "subsequent_retry");
          await new Promise((r) => setTimeout(r, 2000 * (attempt + 1)));
        }
        return await auditCardsBatch({ cards, stats, batchLabel: batchKey, auditType });
      } catch (error) {
        if (attempt >= MAX_RETRIES) throw error;
        recordRetryReason(stats, error.message.includes("JSON") ? "invalid_json" : "api_error");
      }
    }
    return { findings: [] };
  }

  const log = (msg) => {
    fs.appendFileSync(LOG_PATH, msg + "\n");
    console.log(msg);
  };

  let batchNum = 0;
  const simple = targetCards.filter((c) => !c.hasStudy);
  const study = targetCards.filter((c) => c.hasStudy);

  for (const batch of chunk(simple, BATCH_SIZE_SIMPLE)) {
    batchNum++;
    const batchKey = `micro-simple-${batchNum}`;
    if (completed.has(batchKey)) {
      log(`skip ${batchKey}`);
      continue;
    }
    const lunaCards = batch.map((c) => ({
      cardId: c.cardId,
      field: "lv",
      de: c.de,
      deArticle: c.de_article,
      dePlural: c.de_plural,
      lvSource: c.lvMainSource,
      enText: c.enMain,
      changedFields: c.changedFields,
    }));
    const { findings } = await auditWithRetry(lunaCards, batchKey, "final_repair_microregression_simple");
    rawFindings.push(...findings);
    completed.add(batchKey);
    saveProgress();
    log(`done ${batchKey}: ${batch.length} cards, findings=${findings.length}`);
  }

  for (const batch of chunk(study, BATCH_SIZE_STUDY)) {
    batchNum++;
    const batchKey = `micro-study-${batchNum}`;
    if (completed.has(batchKey)) {
      log(`skip ${batchKey}`);
      continue;
    }
    const lunaCards = batch.map((c) => ({
      cardId: c.cardId,
      de: c.de,
      deArticle: c.de_article,
      layout: c.study?.layout,
      changedFields: c.changedFields,
      studyContext: c.study,
      enMain: c.enMain,
      lvMainSource: c.lvMainSource,
    }));
    const { findings } = await auditWithRetry(lunaCards, batchKey, "final_repair_microregression_study");
    rawFindings.push(...findings);
    completed.add(batchKey);
    saveProgress();
    log(`done ${batchKey}: ${batch.length} cards, findings=${findings.length}`);
  }

  return {
    status: "COMPLETED",
    audited: targetCards.length,
    expected: targetCards.length,
    batches: batchNum,
    rawFindings,
    stats,
  };
}

function validateFindings(rawFindings) {
  const validated = [];
  for (const f of rawFindings) {
    if (f.status === "PASS") continue;
    const reason = String(f.reason || "");
    const cat = String(f.category || "").toUpperCase();
    if (NON_ERROR_CATEGORIES.has(cat)) {
      validated.push({
        cardId: f.cardId,
        fieldPath: f.field || "lv",
        currentEn: f.currentEn,
        problem: reason,
        recommendedEn: f.proposedEn,
        validatedStatus: "VILTUS_POZITĪVS",
        validatedSeverity: "NAV",
        rationale: "Kategorija: " + cat,
      });
      continue;
    }
    if (DIALECT_PATTERNS.some((p) => p.test(reason))) {
      validated.push({
        cardId: f.cardId,
        fieldPath: f.field || "lv",
        currentEn: f.currentEn,
        problem: reason,
        recommendedEn: f.proposedEn,
        validatedStatus: "VILTUS_POZITĪVS",
        validatedSeverity: "NAV",
        rationale: "British/American vai sinonīma preference — nav kļūda.",
      });
      continue;
    }
    const sev = String(f.severity || "MEDIUM").toUpperCase();
    const sevMap = { CRITICAL: "KRITISKA", HIGH: "AUGSTA", MEDIUM: "VIDĒJA", LOW: "ZEMA" };
    validated.push({
      cardId: f.cardId,
      fieldPath: f.field || "lv",
      currentEn: f.currentEn,
      problem: reason,
      recommendedEn: f.proposedEn,
      validatedStatus: "REĀLA_PROBLĒMA",
      validatedSeverity: sevMap[sev] || "VIDĒJA",
      rationale: reason,
    });
  }
  return validated;
}

function countSeverity(validated) {
  const c = { KRITISKA: 0, AUGSTA: 0, VIDĒJA: 0, ZEMA: 0, VILTUS_POZITĪVS: 0 };
  for (const v of validated) {
    if (v.validatedStatus === "VILTUS_POZITĪVS") c.VILTUS_POZITĪVS++;
    else if (c[v.validatedSeverity] !== undefined) c[v.validatedSeverity]++;
  }
  return c;
}

async function main() {
  const applyLog = JSON.parse(fs.readFileSync(APPLY_LOG, "utf8"));
  const targetCardIds = applyLog.changedCards;

  const beforeEn = loadFromCode(gitShow(PRE_REPAIR_COMMIT, "data/en/b2.js"));
  const afterEn = loadFromCode(fs.readFileSync(EN_FILE, "utf8"));
  const lvWords = loadFromCode(fs.readFileSync(LV_FILE, "utf8"));

  const targetCards = buildMicroTarget(beforeEn, afterEn, lvWords, targetCardIds);
  fs.writeFileSync(
    TARGET_JSON,
    JSON.stringify({ generatedAt: new Date().toISOString(), uniqueCards: targetCards.length, cards: targetCards }, null, 2)
  );

  const luna = await runLuna(targetCards);
  const validated = validateFindings(luna.rawFindings || []);
  const realProblems = validated.filter((v) => v.validatedStatus === "REĀLA_PROBLĒMA");
  const sevCounts = countSeverity(validated);

  const hashDeBefore = md5File(DE_FILE);
  const verdict =
    realProblems.length === 0 && luna.status === "COMPLETED"
      ? "EN–DE B2 GALA LABOJUMU MIKROREGRESIJA: PASS"
      : luna.status === "NOT_RUN_API_UNAVAILABLE"
        ? "LUNA MIKROREGRESIJA NAV PABEIGTA"
        : "NEPIECIEŠAMS PAPILDU MIKROLABOJUMS";

  const result = {
    generatedAt: new Date().toISOString(),
    preRepairCommit: PRE_REPAIR_COMMIT,
    scope: {
      uniqueChangedCards: targetCardIds.length,
      lunaAudited: luna.audited,
      lunaExpected: targetCards.length,
      apiBatches: luna.batches || 0,
    },
    luna: {
      status: luna.status,
      rawCount: (luna.rawFindings || []).filter((f) => f.status !== "PASS").length,
      validatedRealProblems: realProblems.length,
      severity: sevCounts,
      stats: luna.stats,
    },
    findings: validated,
    verdict,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(result, null, 2));

  const md = [
    "# EN–DE B2 — Gala labojumu Luna mikroregresija",
    "",
    "**Datums:** " + new Date().toISOString().slice(0, 10),
    "**Pre-repair commit:** " + PRE_REPAIR_COMMIT,
    "",
    "## Tvērums",
    "",
    "| Metrika | Skaits |",
    "| --- | ---: |",
    "| Unikālās mainītās kartītes | " + targetCardIds.length + " |",
    "| Luna auditētas | " + luna.audited + "/" + targetCards.length + " |",
    "",
    "## Luna statuss",
    "",
    "**" + luna.status + "**",
    "",
    "## Validētie atradumi",
    "",
    "| Nopietnība | Skaits |",
    "| --- | ---: |",
    "| KRITISKA | " + sevCounts.KRITISKA + " |",
    "| AUGSTA | " + sevCounts.AUGSTA + " |",
    "| VIDĒJA | " + sevCounts.VIDĒJA + " |",
    "| ZEMA | " + sevCounts.ZEMA + " |",
    "| VILTUS POZITĪVI | " + sevCounts.VILTUS_POZITĪVS + " |",
    "| **Reālās problēmas** | **" + realProblems.length + "** |",
    "",
    "## Gala verdikts",
    "",
    "**" + verdict + "**",
    "",
  ].join("\n");

  fs.writeFileSync(OUT_MD, md);
  console.log(JSON.stringify({ verdict, realProblems: realProblems.length, lunaStatus: luna.status }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
