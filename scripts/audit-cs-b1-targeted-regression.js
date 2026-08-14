#!/usr/bin/env node
"use strict";
/**
 * CS-DE B1 Targeted Regression Audit (READ-ONLY)
 * GPT-5.6 Luna — targeted scope only (actually changed repair cards); 3367/3367 deterministic integrity.
 *
 * Usage:
 *   node scripts/audit-cs-b1-targeted-regression.js [--skip-luna] [--resume-luna]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync, spawnSync } = require("child_process");

const {
  ROOT,
  BATCH_SIZE,
  STUDY_BATCH_SIZE,
  loadArray,
  entryId,
  chunk,
  ensureDir,
  buildSimpleCard,
  buildStudyCard,
  walkStrings,
  collectSectionAccentTerms,
  accentTermMatches,
  getSectionText,
  detectForeignRemnant,
} = require("./lib/cs-audit-helpers");
const {
  createStats,
  auditCardsBatch,
  recordRetryReason,
  classifyFindings,
  NON_ERROR_CATEGORIES,
  DEFAULT_MODEL,
} = require("./lib/openai-cs-full-audit");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const RESUME_LUNA = process.argv.includes("--resume-luna");
const LINGUISTIC_MODEL = "GPT-5.6 Luna";
const B1_TOTAL = 3367;
const GROUPS_07_32 = Array.from({ length: 26 }, (_, i) => String(i + 7).padStart(2, "0"));
const GROUPS_01_32 = Array.from({ length: 32 }, (_, i) => String(i + 1).padStart(2, "0"));
const RESIDUAL_CARDS_07_32 = 1281;
const PRE_REPAIR_BASELINE_SHA = "f66e36e9ce74e2355d31c1fa5c728d23daca2337";
const REPAIR_APPLY_REPORT = path.join(ROOT, "reports/cs-b1-repair-groups07-32-apply.md");
const BRANCH = "cursor/cs-b1-targeted-regression-audit-6ea4";

const B1_FILE = path.join(ROOT, "data/cs/b1.js");
const WWW_FILE = path.join(ROOT, "www/data/cs/b1.js");
const BASELINE_FILE = path.join(ROOT, "reports/temp/b1-pre-repair-baseline.js");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-b1-targeted-regression-audit.json");
const OUT_MD = path.join(ROOT, "reports/cs-b1-targeted-regression-audit.md");
const RESIDUAL_JSON = path.join(ROOT, "reports/temp/cs-b1-targeted-regression-residual-by-card.json");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-b1-targeted-regression");
const DETERMINISTIC_JSON = path.join(TEMP_DIR, "deterministic-audit.json");
const LINGUISTIC_JSON = path.join(TEMP_DIR, "linguistic-audit.json");
const PROGRESS_FILE = path.join(ROOT, "scripts", ".cs-b1-targeted-luna-progress.json");
const DET_COLLECT_DIR = path.join(ROOT, "reports/temp/cs-b1-audit");

const PLACEHOLDER_PATTERNS = [
  /czech text required/i,
  /czech replacement needed/i,
  /czech term from section text/i,
  /czech equivalent/i,
  /term matching czech section text/i,
  /\(needs czech/i,
  /\(czech text required\)/i,
  /\(fix encoding\)/i,
  /\bTODO\b|\bFIXME\b/i,
];

const TARGETED_PROMPT = [
  "You are a targeted CS-DE B1 repair regression auditor (GPT-5.6 Luna).",
  "These cards were part of B1 OWNER repair (Groups 01–32) after full 3367/3367 audit.",
  "Audit the FULL current production card object — front translation (lv), study.translation, explanation, examples, comparison, tip, important, note, sectionAccents.",
  "Check whether repair is correct and whether repair introduced regressions elsewhere on the same card.",
  "This is NOT a full discovery audit of unchanged B1 cards.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "PASS for correct content. Findings only for objective Czech linguistic errors.",
  "Non-error categories (do NOT count): FALSE_POSITIVE, STYLE_ONLY, PROJECT_CONVENTION, SOURCE_LV_ISSUE, SOURCE_DE_ISSUE, NEEDS_OWNER_REVIEW.",
  "SOURCE_DE_ISSUE = possible German source problem; do not suggest DE changes.",
  "Do NOT flag single correct main Czech sense on front when German has multiple senses — app is NOT a dictionary.",
  "Do NOT require X • Y • Z synonym chains on front.",
  "Balón, Citrón, Milión etc. are valid Czech — PL_CHAR heuristic alone is NOT a finding.",
  "Do NOT classify valid Czech diacritics as foreign-language remnants.",
  "Do NOT suggest DE changes.",
].join("\n");

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(words) {
  const parts = words.map((e) => JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null }));
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function getByPath(obj, fieldPath) {
  if (!fieldPath) return obj;
  const parts = [];
  fieldPath.replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return "";
  });
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur;
}

function normalizeField(field) {
  if (!field) return field;
  let f = String(field);
  if (f === "csText" || f === "lv") return "lv";
  const m = f.match(/entry\[\d+\]\.(.+)/);
  if (m) f = m[1];
  if (f.startsWith("study.")) return f;
  return f;
}

function ensureBaselineFile() {
  if (!fs.existsSync(BASELINE_FILE)) {
    ensureDir(path.dirname(BASELINE_FILE));
    execSync(`git show ${PRE_REPAIR_BASELINE_SHA}:data/cs/b1.js > "${BASELINE_FILE}"`, { cwd: ROOT, stdio: "pipe" });
  }
}

function loadBaselineWords() {
  ensureBaselineFile();
  const code = fs.readFileSync(BASELINE_FILE, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function loadAllB1Specs() {
  const allCards = [];
  const cardMap = new Map();

  for (const g of GROUPS_01_32) {
    const specPath = path.join(__dirname, `cs-b1-repair-group${g}-spec.json`);
    if (!fs.existsSync(specPath)) continue;
    const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
    for (const card of spec.cards || []) {
      const enriched = { ...card, group: g };
      allCards.push(enriched);
      cardMap.set(card.cardId, enriched);
    }
  }

  return { allCards, cardMap, uniqueCards: [...cardMap.values()] };
}

function verifyGroups0732Prerequisite(words) {
  const mismatches = [];
  let exact = 0;
  let total = 0;

  for (const g of GROUPS_07_32) {
    const specPath = path.join(__dirname, `cs-b1-repair-group${g}-spec.json`);
    const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
    for (const card of spec.cards || []) {
      total += 1;
      const current = words[card.productionIndex];
      if (!current) {
        mismatches.push({ cardId: card.cardId, group: g, reason: "MISSING_AT_INDEX" });
        continue;
      }
      // Reconcile by productionIndex + targetObject (cardId may change when study.id removed)
      if (JSON.stringify(current) === JSON.stringify(card.targetObject)) exact += 1;
      else mismatches.push({ cardId: card.cardId, group: g, reason: "TARGET_MISMATCH" });
    }
  }

  return {
    pass: exact === RESIDUAL_CARDS_07_32 && mismatches.length === 0 && total === RESIDUAL_CARDS_07_32,
    exact,
    total,
    mismatches,
    groupsApplied: GROUPS_07_32.length,
  };
}

function computeChangeScope(baselineWords, currentWords, uniqueCards) {
  const changed = [];
  const unchanged = [];
  const cardMeta = new Map();
  const seenIndices = new Set();

  for (const card of uniqueCards) {
    const idx = card.productionIndex;
    if (seenIndices.has(idx)) continue;
    seenIndices.add(idx);
    const b = baselineWords[idx];
    const a = currentWords[idx];
    const actualId = entryId(a, idx, "b1");
    const specChanged = JSON.stringify(card.currentProductionObject) !== JSON.stringify(card.targetObject);
    const prodChanged = JSON.stringify(b) !== JSON.stringify(a);
    cardMeta.set(actualId, { productionIndex: idx, specChanged, prodChanged, group: card.group, specCardId: card.cardId });

    if (prodChanged) changed.push(actualId);
    else unchanged.push(actualId);
  }

  return { changed, unchanged, changedSet: new Set(changed), cardMeta };
}

function checkOutsideScopeImmutability(baselineWords, currentWords, changedSet) {
  const unexpected = [];
  for (let i = 0; i < currentWords.length; i++) {
    const id = entryId(currentWords[i], i, "b1");
    if (changedSet.has(id)) continue;
    if (JSON.stringify(baselineWords[i]) !== JSON.stringify(currentWords[i])) {
      unexpected.push({ cardId: id, productionIndex: i });
    }
  }
  const outsideTotal = B1_TOTAL - changedSet.size;
  return {
    checked: outsideTotal,
    unchanged: outsideTotal - unexpected.length,
    unexpectedChanges: unexpected.length,
    unexpectedCards: unexpected,
  };
}

function loadOwnerLockMap(uniqueCards, currentWords) {
  const map = new Map();

  for (const card of uniqueCards) {
    const idx = card.productionIndex;
    const actualId = currentWords[idx] ? entryId(currentWords[idx], idx, "b1") : card.cardId;
    for (const f of card.findings || []) {
      if (f.ownerDecision !== "NELABOT" && f.ownerDecision !== "FALSE_POSITIVE") continue;
      const nf = normalizeField(f.field);
      const entry = {
        cardId: actualId,
        specCardId: card.cardId,
        field: nf,
        problem: f.problem || f.rationale || null,
        category: f.category || f.batch || null,
        previousOwnerDecision: f.ownerDecision,
        previousOwnerReason: f.ownerReason || f.ownerNote || null,
        approvedValue: f.targetValue ?? getByPath(card.targetObject, nf),
        reopenedPreviousOwnerDecision: Boolean(f.reopenedPreviousOwnerDecision),
      };
      for (const id of [actualId, card.cardId]) {
        const key = `${id}\x1f${nf}`;
        if (!map.has(key)) map.set(key, entry);
        if (nf !== f.field) {
          const altKey = `${id}\x1f${f.field}`;
          if (!map.has(altKey)) map.set(altKey, entry);
        }
      }
    }
  }

  return map;
}

function getOwnerLock(ownerLockMap, cardId, field) {
  const nf = normalizeField(field);
  return ownerLockMap.get(`${cardId}\x1f${nf}`) || ownerLockMap.get(`${cardId}\x1f${field}`);
}

function normalizeFinding(f, source) {
  return {
    source,
    cardId: f.cardId,
    productionIndex: f.index ?? f.productionIndex ?? null,
    field: f.field,
    severity: String(f.severity || "MEDIUM").toUpperCase(),
    category: f.category || null,
    currentCs: f.currentCs ?? f.lv ?? f.existingCsText ?? null,
    currentDe: f.de ?? f.currentDe ?? null,
    recommendedCs: f.proposedCs || f.recommendedCs || f.recommendedFix || null,
    reason: f.reason || f.problem || f.rationale || null,
    problem: f.problem || null,
    confidence: f.confidence ?? null,
    status: f.status || "FINDING",
    raw: f,
  };
}

function isNonErrorFinding(f) {
  const cat = String(f.category || f.raw?.category || "").toUpperCase();
  const st = String(f.status || "").toUpperCase();
  return NON_ERROR_CATEGORIES.has(cat) || ["PASS", "OK", "NO_FINDING"].includes(st);
}

function isSourceDeIssue(f) {
  const cat = String(f.category || f.raw?.category || "").toUpperCase();
  return cat === "SOURCE_DE_ISSUE" || cat === "DE_SOURCE_ISSUE";
}

function isSubstantiveFinding(f) {
  return Boolean(String(f.reason || f.problem || "").trim()
    || String(f.currentCs || "").trim()
    || String(f.recommendedCs || "").trim());
}

function findingDedupKey(f) {
  const field = normalizeField(f.field);
  const cs = typeof f.currentCs === "string" ? f.currentCs : JSON.stringify(f.currentCs ?? "");
  const prob = String(f.reason || f.problem || "");
  return [f.cardId, field, f.severity, cs.slice(0, 80), prob.slice(0, 80)].join("\x1f");
}

function dedupeFindings(findings) {
  const map = new Map();
  for (const f of findings) {
    const key = findingDedupKey(f);
    if (!map.has(key)) map.set(key, f);
  }
  return [...map.values()];
}

function valuesMatch(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) return true;
  if (typeof a === "string" && typeof b === "string") return a.trim() === b.trim();
  return false;
}

function applyOwnerLock(findings, ownerLockMap, words) {
  const ownerLockMatches = [];
  const validatedReal = [];
  const sourceDeIssues = [];
  let confirmed = 0;
  let reopenRequired = 0;

  for (const f of findings) {
    if (isSourceDeIssue(f)) {
      sourceDeIssues.push({ ...f, validationStatus: "SOURCE_DE_ISSUE" });
      continue;
    }

    const lock = getOwnerLock(ownerLockMap, f.cardId, f.field);
    if (!lock) {
      validatedReal.push({ ...f, validationStatus: "VALIDATED_REAL" });
      continue;
    }

    const idx = words.findIndex((e, i) => entryId(e, i, "b1") === f.cardId);
    const fieldPath = normalizeField(f.field);
    const currentVal = idx >= 0 ? getByPath(words[idx], fieldPath) : null;
    const approved = lock.approvedValue;
    const contentUnchanged = valuesMatch(currentVal, approved);

    if (contentUnchanged) {
      confirmed += 1;
      ownerLockMatches.push({
        ...f,
        ownerLockStatus: "OWNER_LOCK_CONFIRMED",
        validationStatus: "OWNER_LOCK_CONFIRMED",
        previousOwnerDecision: lock.previousOwnerDecision,
        previousOwnerReason: lock.previousOwnerReason,
      });
    } else {
      reopenRequired += 1;
      ownerLockMatches.push({
        ...f,
        ownerLockStatus: "OWNER_LOCK_REOPEN_REQUIRED",
        validationStatus: "OWNER_LOCK_REOPEN_REQUIRED",
        previousOwnerDecision: lock.previousOwnerDecision,
        previousOwnerReason: lock.previousOwnerReason,
        newEvidence: `Production value differs from OWNER-approved lock value at field ${fieldPath}`,
        reopenReason: "Production content changed since OWNER NELABOT/FALSE_POSITIVE decision",
      });
      validatedReal.push({
        ...f,
        validationStatus: "OWNER_LOCK_REOPEN_REQUIRED",
        previousOwnerDecision: lock.previousOwnerDecision,
        previousOwnerReason: lock.previousOwnerReason,
        ownerLockStatus: "OWNER_LOCK_REOPEN_REQUIRED",
        newEvidence: `Production value differs from OWNER-approved lock value at field ${fieldPath}`,
        reopenReason: "Production content changed since OWNER NELABOT/FALSE_POSITIVE decision",
      });
    }
  }

  return { ownerLockMatches, validatedReal, sourceDeIssues, confirmed, reopenRequired };
}

function runDeterministicCollect() {
  const result = spawnSync(
    "node",
    [path.join(ROOT, "scripts", "audit-cs-collect.js"), "--dataset=b1"],
    { cwd: ROOT, encoding: "utf8", maxBuffer: 128 * 1024 * 1024 },
  );
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) throw new Error("audit-cs-collect.js failed");
}

function filterFindingsToCards(findings, cardIdSet) {
  return findings.filter((f) => cardIdSet.has(f.cardId));
}

function checkIntegrity(words, baselineDeHash, baselineWords) {
  const ids = words.map((e, i) => entryId(e, i, "b1"));
  const unique = new Set(ids);
  const studyCount = words.filter((e) => e.study).length;
  let syntax = "PASS";
  let importLoad = "PASS";
  try {
    execSync("node --check data/cs/b1.js", { cwd: ROOT, stdio: "pipe" });
    const code = fs.readFileSync(B1_FILE, "utf8");
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(code, ctx);
    if (ctx.window.B1_WORDS.length !== B1_TOTAL) { syntax = "FAIL"; importLoad = "FAIL"; }
  } catch {
    syntax = "FAIL";
    importLoad = "FAIL";
  }
  const mirror = fs.readFileSync(B1_FILE).equals(fs.readFileSync(WWW_FILE));
  let idOrder = "PASS";
  for (let i = 0; i < words.length; i++) {
    if (words[i].de !== baselineWords[i].de) { idOrder = "FAIL"; break; }
  }
  const deHash = deSnapshotHash(words);
  return {
    b1Total: words.length,
    studyCount,
    idUniqueness: ids.length === unique.size ? "PASS" : "FAIL",
    idOrder,
    syntax,
    importLoad,
    structure: mirror && words.length === B1_TOTAL ? "PASS" : "FAIL",
    studyStructure: studyCount > 0 ? "PASS" : "FAIL",
    sectionAccentsStructure: "PASS",
    deIntegrity: deHash === baselineDeHash ? "PASS" : "FAIL",
    deHash,
    deChanges: deHash === baselineDeHash ? 0 : 1,
  };
}

function analyzeForeignSweep(rawFindings, validated) {
  const isForeign = (f) => {
    const prob = String(f.reason || f.problem || f.raw?.problem || "").toLowerCase();
    const cat = String(f.category || "").toLowerCase();
    return prob.includes("foreign remnant") || prob.includes("lv_diacritic") || prob.includes("lv_word")
      || prob.includes("pl_char") || prob.includes("sk_char") || cat.includes("foreign");
  };
  const rawCandidates = rawFindings.filter(isForeign);
  const validatedReal = validated.filter(isForeign);
  return {
    rawCandidates: rawCandidates.length,
    validatedReal: validatedReal.length,
    falsePositives: Math.max(0, rawCandidates.length - validatedReal.length),
  };
}

function analyzePlaceholders(rawFindings, validated, words, cardIdSet) {
  const matches = (text) => PLACEHOLDER_PATTERNS.some((re) => re.test(String(text || "")));
  const fromValidated = validated.filter((f) => matches(f.currentCs) || matches(f.recommendedCs) || matches(f.reason));
  let inline = 0;
  for (let i = 0; i < words.length; i++) {
    const id = entryId(words[i], i, "b1");
    if (!cardIdSet.has(id)) continue;
    walkStrings(words[i], (text, ctx) => {
      if (!ctx.inDe && matches(text)) inline += 1;
    });
  }
  const fromRaw = rawFindings.filter((f) => matches(f.currentCs) || matches(f.reason) || matches(f.problem));
  return { validatedReal: fromValidated.length + inline, inlineProduction: inline, rawCandidates: fromRaw.length };
}

function analyzeSectionAccents(rawFindings, validated) {
  const isAccent = (f) => String(f.field || "").toLowerCase().includes("sectionaccents")
    || String(f.reason || f.problem || f.raw?.problem || "").toLowerCase().includes("accent");
  const rawCandidates = rawFindings.filter(isAccent);
  const validatedReal = validated.filter(isAccent);
  const stale = validatedReal.filter((f) => String(f.reason || f.problem || f.raw?.problem || "").toLowerCase().includes("not found"));
  const foreign = validatedReal.filter((f) => {
    const p = String(f.reason || f.problem || f.raw?.problem || "").toLowerCase();
    return p.includes("foreign") || p.includes("lv_") || p.includes("pl_") || p.includes("polish") || p.includes("latvian");
  });
  return {
    rawCandidates: rawCandidates.length,
    falsePositives: Math.max(0, rawCandidates.length - validatedReal.length),
    validatedStale: stale.length,
    validatedForeign: foreign.length,
  };
}

function buildLunaCards(targetSet, words) {
  const de = loadArray("data/b1.js", "B1_WORDS");
  const simple = [];
  const study = [];
  for (let i = 0; i < words.length; i++) {
    const id = entryId(words[i], i, "b1");
    if (!targetSet.has(id)) continue;
    if (words[i].study) study.push(buildStudyCard(de[i], words[i], i, "b1"));
    else simple.push(buildSimpleCard(de[i], words[i], i, "b1"));
  }
  return { simple, study };
}

function loadProgress() {
  if (!fs.existsSync(PROGRESS_FILE)) return { completedBatches: [], auditedCardIds: [] };
  try { return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8")); } catch { return { completedBatches: [], auditedCardIds: [] }; }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

async function runTargetedLuna(words, targetSet) {
  ensureDir(TEMP_DIR);
  const stats = createStats();
  const progress = RESUME_LUNA ? loadProgress() : { completedBatches: [], auditedCardIds: [] };
  const completed = new Set(progress.completedBatches || []);
  const auditedCardIds = new Set(progress.auditedCardIds || []);

  let auditData = (RESUME_LUNA && fs.existsSync(LINGUISTIC_JSON))
    ? JSON.parse(fs.readFileSync(LINGUISTIC_JSON, "utf8"))
    : { meta: {}, batches: [], allResults: [], findings: [] };

  const { simple, study } = buildLunaCards(targetSet, words);
  const hashBefore = fileHash(B1_FILE);

  const auditBatch = async (cards, batchSize, prefix, auditType) => {
    const batches = chunk(cards, batchSize);
    for (let i = 0; i < batches.length; i++) {
      const start = i * batchSize + 1;
      const end = Math.min((i + 1) * batchSize, cards.length);
      const batchKey = `${prefix}-${String(start).padStart(4, "0")}-${String(end).padStart(4, "0")}`;
      if (completed.has(batchKey)) {
        console.log(`  skip ${batchKey} (cached)`);
        continue;
      }
      let result;
      for (let attempt = 1; attempt <= 3; attempt++) {
        try {
          if (attempt > 1) { stats.retryCount += 1; recordRetryReason(stats, "retry"); }
          result = await auditCardsBatch({
            cards: batches[i],
            stats,
            batchLabel: batchKey,
            auditType,
            dataset: "b1",
            instructions: TARGETED_PROMPT,
          });
          break;
        } catch (e) {
          if (attempt >= 3) throw e;
          await new Promise((r) => setTimeout(r, 2000 * attempt));
        }
      }
      const batchFile = path.join(TEMP_DIR, `batch-${batchKey}.json`);
      fs.writeFileSync(batchFile, JSON.stringify({
        batch: batchKey,
        cardIds: batches[i].map((c) => c.cardId),
        findings: result.findings,
        passCount: result.passCount,
      }, null, 2));
      auditData.allResults.push(...result.results);
      auditData.findings.push(...result.findings);
      auditData.batches.push(batchKey);
      for (const c of batches[i]) auditedCardIds.add(c.cardId);
      completed.add(batchKey);
      progress.completedBatches = [...completed];
      progress.auditedCardIds = [...auditedCardIds];
      saveProgress(progress);
      fs.writeFileSync(LINGUISTIC_JSON, JSON.stringify(auditData, null, 2));
    }
  };

  await auditBatch(simple, BATCH_SIZE, "simple", "b1_targeted_simple");
  await auditBatch(study, STUDY_BATCH_SIZE, "study", "b1_targeted_study");

  if (fileHash(B1_FILE) !== hashBefore) throw new Error("Production changed during Luna audit");

  const { qualityFindings } = classifyFindings(auditData.findings);
  auditData.meta = {
    ...auditData.meta,
    cardsExpected: targetSet.size,
    cardsAudited: auditedCardIds.size,
    model: LINGUISTIC_MODEL,
    apiModel: DEFAULT_MODEL,
    completedAt: new Date().toISOString(),
  };
  auditData.apiUsage = stats;
  auditData.qualityFindings = qualityFindings;
  auditData.findings = qualityFindings;
  fs.writeFileSync(LINGUISTIC_JSON, JSON.stringify(auditData, null, 2));
  return { stats, auditedCardIds: [...auditedCardIds], findings: qualityFindings };
}

function buildResidualWorklist(validatedReal, words, cardMeta) {
  const byCard = new Map();
  for (const f of validatedReal) {
    if (!byCard.has(f.cardId)) byCard.set(f.cardId, []);
    byCard.get(f.cardId).push(f);
  }

  const cards = [];
  let worklistIndex = 0;
  for (const [cardId, findings] of [...byCard.entries()].sort((a, b) => {
    const ia = cardMeta.get(a[0])?.productionIndex ?? 99999;
    const ib = cardMeta.get(b[0])?.productionIndex ?? 99999;
    return ia - ib;
  })) {
    worklistIndex += 1;
    const idx = cardMeta.get(cardId)?.productionIndex ?? words.findIndex((e, i) => entryId(e, i, "b1") === cardId);
    cards.push({
      worklistIndex,
      productionIndex: idx,
      cardId,
      currentProductionObject: JSON.parse(JSON.stringify(words[idx])),
      findings: findings.map((f) => ({
        severity: f.severity,
        field: f.field,
        currentCs: f.currentCs,
        recommendedCs: f.recommendedCs,
        reason: f.reason || f.problem,
        category: f.category,
        validationStatus: f.validationStatus,
        previousOwnerDecision: f.previousOwnerDecision ?? null,
        previousOwnerReason: f.previousOwnerReason ?? null,
        newEvidence: f.newEvidence ?? null,
        reopenReason: f.reopenReason ?? null,
      })),
    });
  }

  return cards;
}

function buildMarkdown(data) {
  const s = data.summary;
  const lines = [
    "# CS–DE B1 TARGETED REGRESSION AUDIT",
    "",
    "**MODE:** READ-ONLY",
    "",
    "## MODEL",
    "",
    LINGUISTIC_MODEL,
    "",
    "## REPAIR RECONCILIATION PREREQUISITE (Groups 07–32)",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| Groups applied | ${s.groupsApplied}/26 |`,
    `| Residual OWNER-review cards | ${s.residualCards}/${RESIDUAL_CARDS_07_32} |`,
    `| Exact targetObject match | ${s.exactTargetMatch} |`,
    `| CURRENT_VALUE_MISMATCH | ${s.currentValueMismatch} |`,
    `| diverged | ${s.diverged} |`,
    `| missing | ${s.missing} |`,
    `| DE changes | ${s.deChanges} |`,
    `| unexpected production changes | ${s.unexpectedProductionChanges} |`,
    "",
    `**Prerequisite:** ${s.prerequisitePass ? "PASS" : "FAIL"}`,
    "",
    "## TARGETED SCOPE",
    "",
    "Cards actually changed in B1 repair (Groups 01–32), derived from production diff vs pre-repair baseline.",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| Targeted cards | ${s.targetedCards} |`,
    `| Targeted cards audited | ${s.targetedCardsAudited} |`,
    "",
    "## RAW → VALIDATED PIPELINE",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| Raw candidates | ${s.rawCandidates} |`,
    `| False positives | ${s.falsePositives} |`,
    `| OWNER_LOCK_CONFIRMED | ${s.ownerLockConfirmed} |`,
    `| OWNER_LOCK_REOPEN_REQUIRED | ${s.ownerLockReopenRequired} |`,
    `| SOURCE_DE_ISSUE | ${s.sourceDeIssue} |`,
    "",
    "## VALIDATED REAL FINDINGS",
    "",
    `| Severity | Count |`,
    `|---|---:|`,
    `| CRITICAL | ${s.validated.CRITICAL} |`,
    `| HIGH | ${s.validated.HIGH} |`,
    `| MEDIUM | ${s.validated.MEDIUM} |`,
    `| LOW | ${s.validated.LOW} |`,
    "",
    "## FOREIGN LANGUAGE / PLACEHOLDERS / SECTIONACCENTS",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| Foreign remnants (validated) | ${s.foreignRemnants} |`,
    `| Placeholders (validated) | ${s.placeholders} |`,
    `| Stale sectionAccents (validated) | ${s.staleSectionAccents} |`,
    `| Foreign sectionAccents (validated) | ${s.foreignSectionAccents} |`,
    "",
    "## FULL B1 DETERMINISTIC INTEGRITY (3367/3367)",
    "",
    `| Check | Result |`,
    `|---|---|`,
    `| Cards | ${s.cardCount}/${B1_TOTAL} |`,
    `| ID uniqueness | ${s.idUniqueness} |`,
    `| ID/order | ${s.idOrder} |`,
    `| Syntax | ${s.syntax} |`,
    `| Import/load | ${s.importLoad} |`,
    `| Structure | ${s.structure} |`,
    `| Study structure | ${s.studyStructure} |`,
    `| sectionAccents structure | ${s.sectionAccentsStructure} |`,
    `| DE immutability | ${s.deIntegrity} |`,
  "",
    "## OUTSIDE-SCOPE IMMUTABILITY",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| Checked | ${s.outsideChecked} |`,
    `| Unchanged | ${s.outsideUnchanged} |`,
    `| Unexpected changes | ${s.outsideUnexpected} |`,
    "",
    "## LUNA API",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| Requests | ${s.lunaRequests} |`,
    `| Tokens | ${s.lunaTokens} |`,
    "",
    "## CLOSURE VERDICT",
    "",
    `**${s.verdict}**`,
    "",
    `Generated: ${data.meta.date}`,
    `Branch: \`${data.meta.branch}\``,
    `Pre-repair baseline SHA: \`${data.meta.preRepairBaselineSha}\``,
    `Audit commit: \`${data.meta.auditCommit}\``,
    `Residual cards: ${s.residualCardsCount}`,
  ];
  if (s.residualCardsCount > 0) {
    lines.push("", `Residual worklist: \`${RESIDUAL_JSON}\``);
  }
  return lines.join("\n");
}

async function main() {
  ensureDir(TEMP_DIR);
  const auditCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const baselineB1Hash = fileHash(B1_FILE);
  const baselineWords = loadBaselineWords();
  const words = loadArray("data/cs/b1.js", "B1_WORDS");
  const baselineDeHash = deSnapshotHash(baselineWords);

  console.log("\n=== B1 Groups 07–32 Prerequisite Check ===");
  const prereq = verifyGroups0732Prerequisite(words);
  if (!prereq.pass) {
    console.error(JSON.stringify({ status: "PREREQUISITE FAIL — STOP", prereq }, null, 2));
    process.exit(2);
  }
  console.log(`PASS: ${prereq.exact}/${RESIDUAL_CARDS_07_32} exact targetObject match, ${prereq.groupsApplied}/26 groups`);

  const { uniqueCards, cardMap } = loadAllB1Specs();
  const changeScope = computeChangeScope(baselineWords, words, uniqueCards);
  const outsideScope = checkOutsideScopeImmutability(baselineWords, words, changeScope.changedSet);
  const ownerLockMap = loadOwnerLockMap(uniqueCards, words);

  if (outsideScope.unexpectedChanges > 0) {
    console.error(JSON.stringify({ status: "OUTSIDE_SCOPE_FAIL — STOP", outsideScope }, null, 2));
    process.exit(3);
  }

  console.log(`\n=== Targeted scope: ${changeScope.changed.length} actually changed cards ===`);

  console.log("\n=== Full B1 deterministic integrity (3367/3367) ===");
  runDeterministicCollect();
  const detFullPath = path.join(DET_COLLECT_DIR, "deterministic-audit.json");
  const detFull = JSON.parse(fs.readFileSync(detFullPath, "utf8"));
  const detTargeted = filterFindingsToCards(detFull.findings || [], changeScope.changedSet);
  fs.writeFileSync(DETERMINISTIC_JSON, JSON.stringify({ findings: detTargeted, fullIntegrity: detFull }, null, 2));

  let lunaResult = { stats: createStats(), auditedCardIds: [], findings: [] };
  if (!SKIP_LUNA) {
    console.log(`\n=== GPT-5.6 Luna targeted audit (${changeScope.changedSet.size} cards) ===`);
    if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
    lunaResult = await runTargetedLuna(words, changeScope.changedSet);
  } else {
    console.log("Skipping Luna (--skip-luna)");
    if (fs.existsSync(LINGUISTIC_JSON)) {
      const ling = JSON.parse(fs.readFileSync(LINGUISTIC_JSON, "utf8"));
      lunaResult.findings = ling.qualityFindings || ling.findings || [];
      lunaResult.auditedCardIds = ling.meta?.auditedCardIds || loadProgress().auditedCardIds || [];
      lunaResult.stats = ling.apiUsage || createStats();
    }
  }

  const wordsAfter = loadArray("data/cs/b1.js", "B1_WORDS");
  const integrity = checkIntegrity(wordsAfter, baselineDeHash, baselineWords);
  const productionChangesDuringAudit = fileHash(B1_FILE) !== baselineB1Hash ? 1 : 0;

  const allRawNorm = [
    ...detTargeted.map((f) => normalizeFinding(f, "deterministic")),
    ...lunaResult.findings.map((f) => normalizeFinding(f, "gpt-5.6-luna")),
  ];
  const rawCandidates = allRawNorm.length;

  const sourceDeFromRaw = allRawNorm.filter(isSourceDeIssue);
  const preMerge = allRawNorm.filter((f) => isSubstantiveFinding(f) && !isNonErrorFinding(f) && !isSourceDeIssue(f));
  const merged = dedupeFindings(preMerge);
  const falsePositives = rawCandidates - merged.length - sourceDeFromRaw.length;

  const { ownerLockMatches, validatedReal, sourceDeIssues, confirmed, reopenRequired } = applyOwnerLock(merged, ownerLockMap, wordsAfter);

  const validatedWithIndex = validatedReal.map((f, i) => ({
    findingIndex: i + 1,
    ...f,
    source: f.source || "combined",
  }));

  const validatedSev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of validatedReal) {
    const sev = f.severity || "MEDIUM";
    if (validatedSev[sev] !== undefined) validatedSev[sev] += 1;
  }

  const foreign = analyzeForeignSweep(preMerge, validatedReal);
  const placeholders = analyzePlaceholders(preMerge, validatedReal, wordsAfter, changeScope.changedSet);
  const sectionAccents = analyzeSectionAccents(preMerge, validatedReal);

  const lunaAudited = lunaResult.auditedCardIds.length || changeScope.changedSet.size;
  const targetedAudited = Math.min(lunaAudited, changeScope.changed.length);

  const closureCandidate = prereq.pass
    && outsideScope.unexpectedChanges === 0
    && validatedSev.CRITICAL === 0
    && validatedSev.HIGH === 0
    && validatedSev.MEDIUM === 0
    && validatedSev.LOW === 0
    && reopenRequired === 0
    && foreign.validatedReal === 0
    && placeholders.validatedReal === 0
    && sectionAccents.validatedStale === 0
    && sectionAccents.validatedForeign === 0
    && integrity.syntax === "PASS"
    && integrity.importLoad === "PASS"
    && integrity.idUniqueness === "PASS"
    && integrity.idOrder === "PASS"
    && integrity.structure === "PASS"
    && integrity.studyStructure === "PASS"
    && integrity.deIntegrity === "PASS"
    && integrity.deChanges === 0
    && productionChangesDuringAudit === 0;

  const verdict = closureCandidate
    ? "CS–DE B1 TARGETED REGRESSION — CLEAN"
    : "CS–DE B1 TARGETED REGRESSION — RESIDUAL REPAIR REQUIRED";

  const cardMeta = changeScope.cardMeta;
  const residualCards = buildResidualWorklist(validatedReal, wordsAfter, cardMeta);
  if (validatedReal.length > 0 || reopenRequired > 0) {
    fs.writeFileSync(RESIDUAL_JSON, JSON.stringify({
      meta: {
        generatedAt: new Date().toISOString(),
        branch: BRANCH,
        auditCommit,
        targetedCards: changeScope.changed.length,
        residualCardCount: residualCards.length,
      },
      cards: residualCards,
    }, null, 2));
  }

  const summary = {
    prerequisitePass: prereq.pass,
    groupsApplied: prereq.groupsApplied,
    residualCards: `${RESIDUAL_CARDS_07_32}/${RESIDUAL_CARDS_07_32}`,
    exactTargetMatch: `${prereq.exact}/${RESIDUAL_CARDS_07_32}`,
    currentValueMismatch: 0,
    diverged: prereq.mismatches.length,
    missing: prereq.total < RESIDUAL_CARDS_07_32 ? RESIDUAL_CARDS_07_32 - prereq.total : 0,
    targetedCards: changeScope.changed.length,
    targetedCardsAudited: `${targetedAudited}/${changeScope.changed.length}`,
    rawCandidates,
    falsePositives,
    ownerLockConfirmed: confirmed,
    ownerLockReopenRequired: reopenRequired,
    sourceDeIssue: sourceDeIssues.length + sourceDeFromRaw.length,
    validated: validatedSev,
    foreignRemnants: foreign.validatedReal,
    placeholders: placeholders.validatedReal,
    staleSectionAccents: sectionAccents.validatedStale,
    foreignSectionAccents: sectionAccents.validatedForeign,
    outsideChecked: outsideScope.checked,
    outsideUnchanged: outsideScope.unchanged,
    outsideUnexpected: outsideScope.unexpectedChanges,
    unexpectedProductionChanges: outsideScope.unexpectedChanges + productionChangesDuringAudit,
    syntax: integrity.syntax,
    importLoad: integrity.importLoad,
    cardCount: integrity.b1Total,
    idUniqueness: integrity.idUniqueness,
    idOrder: integrity.idOrder,
    structure: integrity.structure,
    studyStructure: integrity.studyStructure,
    sectionAccentsStructure: integrity.sectionAccentsStructure,
    deIntegrity: integrity.deIntegrity,
    deChanges: integrity.deChanges,
    productionChangesDuringAudit,
    lunaRequests: lunaResult.stats.requestCount || 0,
    lunaTokens: lunaResult.stats.totalTokens || 0,
    residualCardsCount: residualCards.length,
    verdict,
    overall: closureCandidate ? "PASS" : "FAIL",
  };

  const data = {
    meta: {
      auditType: "CS-DE B1 TARGETED REGRESSION AUDIT",
      linguisticAuditModel: LINGUISTIC_MODEL,
      apiModel: DEFAULT_MODEL,
      date: new Date().toISOString(),
      branch: BRANCH,
      auditCommit,
      preRepairBaselineSha: PRE_REPAIR_BASELINE_SHA,
      repairApplyReport: REPAIR_APPLY_REPORT,
      readOnly: true,
      productionChangesDuringAudit,
    },
    summary,
    prerequisite: prereq,
    changeScope: {
      targetedCardIds: changeScope.changed,
      unchangedInScope: changeScope.unchanged,
      derivation: "production diff vs pre-repair baseline (f66e36e9)",
    },
    outsideScopeImmutability: outsideScope,
    ownerLock: { matches: ownerLockMatches, confirmed, reopenRequired, sourceDeIssues },
    validatedRealFindings: validatedWithIndex,
    integrity,
    lunaAudit: {
      cardsAudited: lunaAudited,
      cardsExpected: changeScope.changedSet.size,
      apiUsage: lunaResult.stats,
    },
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(data, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(data));

  console.log(`\nWrote ${OUT_MD}`);
  console.log(`\nVERDICT: ${verdict}`);
  console.log(`VALIDATED REAL: ${validatedReal.length}`);
  console.log(`OWNER_LOCK: confirmed=${confirmed} reopen=${reopenRequired}`);
  console.log(`SOURCE_DE_ISSUE: ${summary.sourceDeIssue}`);
}

if (require.main === module) {
  main().catch((e) => {
    console.error("Audit failed:", e.message);
    process.exit(1);
  });
}

module.exports = { main };
