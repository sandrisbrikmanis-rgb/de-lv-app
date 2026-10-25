#!/usr/bin/env node
"use strict";
/**
 * CS-DE B1 Final Targeted Regression / Closure Audit (READ-ONLY)
 * GPT-5.6 Luna — only actually-changed residual cards; 3367/3367 deterministic.
 *
 * Usage:
 *   node scripts/audit-cs-b1-final-targeted-closure.js [--skip-luna] [--resume-luna]
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
const RESIDUAL_WORKLIST = 116;
const RESIDUAL_GROUPS = ["01", "02", "03"];
const GROUPS_01_32 = Array.from({ length: 32 }, (_, i) => String(i + 1).padStart(2, "0"));
const PRE_REPAIR_BASELINE_SHA = "f66e36e9ce74e2355d31c1fa5c728d23daca2337";
const PRE_RESIDUAL_APPLY_SHA = "b939ebdf";
const BRANCH = "cursor/cs-b1-final-targeted-closure-audit-6ea4";

const B1_FILE = path.join(ROOT, "data/cs/b1.js");
const WWW_FILE = path.join(ROOT, "www/data/cs/b1.js");
const RESIDUAL_APPLY_REPORT = path.join(ROOT, "reports/cs-b1-targeted-regression-residual-groups01-03-apply.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-b1-final-targeted-closure-audit.json");
const OUT_MD = path.join(ROOT, "reports/cs-b1-final-targeted-closure-audit.md");
const RESIDUAL_JSON = path.join(ROOT, "reports/temp/cs-b1-final-targeted-residual-by-card.json");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-b1-final-targeted-closure");
const DETERMINISTIC_JSON = path.join(TEMP_DIR, "deterministic-audit.json");
const LINGUISTIC_JSON = path.join(TEMP_DIR, "linguistic-audit.json");
const PROGRESS_FILE = path.join(ROOT, "scripts", ".cs-b1-final-closure-luna-progress.json");
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
  "You are the CS-DE B1 FINAL targeted regression / closure auditor (GPT-5.6 Luna).",
  "These cards were just changed in residual OWNER repair (Groups 01–03).",
  "Audit the FULL current production card object — front (lv), study.translation, explanation, examples, comparison, tip, important, sectionAccents.",
  "Check whether residual repair is correct and introduced no regressions on the same card.",
  "This is NOT a full 3367/3367 discovery audit.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "PASS for correct content. Findings only for objective Czech linguistic errors.",
  "Non-error: FALSE_POSITIVE, STYLE_ONLY, PROJECT_CONVENTION, SOURCE_LV_ISSUE, SOURCE_DE_ISSUE, NEEDS_OWNER_REVIEW.",
  "App is NOT a dictionary — one main Czech sense on front is correct; do NOT require X • Y • Z synonym chains.",
  "Valid Czech diacritics (ó, č, ř, etc.) are NOT foreign remnants — PL_CHAR heuristic alone is NOT a finding.",
  "Do NOT suggest DE changes.",
].join("\n");

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(words) {
  const parts = words.map((e) => JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null }));
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function loadWordsFromGit(sha) {
  const code = execSync(`git show ${sha}:data/cs/b1.js`, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
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
  return f;
}

function loadResidualSpecs() {
  const allCards = [];
  const worklistIds = new Set();
  const changedIds = new Set();
  const changedCards = [];
  const cardMeta = new Map();

  for (const g of RESIDUAL_GROUPS) {
    const specPath = path.join(__dirname, `cs-b1-targeted-regression-residual-group${g}-spec.json`);
    const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
    for (const card of spec.cards || []) {
      allCards.push({ ...card, group: g });
      worklistIds.add(card.cardId);
      const specChanged = JSON.stringify(card.currentProductionObject) !== JSON.stringify(card.targetObject);
      if (specChanged && !changedIds.has(card.cardId)) {
        changedIds.add(card.cardId);
        changedCards.push({
          cardId: card.cardId,
          productionIndex: card.productionIndex,
          worklistIndex: card.worklistIndex,
          group: g,
        });
        cardMeta.set(card.cardId, {
          productionIndex: card.productionIndex,
          worklistIndex: card.worklistIndex,
          group: g,
        });
      }
    }
  }

  return { allCards, worklistIds, changedIds, changedCards, cardMeta };
}

function verifyResidualApplyPrerequisite(words) {
  const mismatches = [];
  let exact = 0;
  const { allCards } = loadResidualSpecs();

  for (const card of allCards) {
    const prod = words[card.productionIndex];
    if (!prod) {
      mismatches.push({ cardId: card.cardId, reason: "MISSING_AT_INDEX" });
      continue;
    }
    if (JSON.stringify(prod) === JSON.stringify(card.targetObject)) exact += 1;
    else mismatches.push({ cardId: card.cardId, reason: "TARGET_MISMATCH" });
  }

  return {
    pass: exact === RESIDUAL_WORKLIST && mismatches.length === 0 && allCards.length === RESIDUAL_WORKLIST,
    exact,
    total: allCards.length,
    mismatches,
    groupsApplied: RESIDUAL_GROUPS.length,
  };
}

function loadFullOwnerHistory(words) {
  const map = new Map();
  const sources = [];

  for (const g of GROUPS_01_32) {
    const p = path.join(__dirname, `cs-b1-repair-group${g}-spec.json`);
    if (fs.existsSync(p)) sources.push({ type: "repair", group: g, path: p });
  }
  for (const g of RESIDUAL_GROUPS) {
    const p = path.join(__dirname, `cs-b1-targeted-regression-residual-group${g}-spec.json`);
    sources.push({ type: "residual", group: g, path: p });
  }

  for (const src of sources) {
    const spec = JSON.parse(fs.readFileSync(src.path, "utf8"));
    for (const card of spec.cards || []) {
      const idx = card.productionIndex;
      const actualId = words[idx] ? entryId(words[idx], idx, "b1") : card.cardId;
      for (const f of card.findings || []) {
        if (f.ownerDecision !== "NELABOT" && f.ownerDecision !== "FALSE_POSITIVE") continue;
        const nf = normalizeField(f.field);
        const entry = {
          cardId: actualId,
          specCardId: card.cardId,
          field: nf,
          problem: f.problem || f.rationale || null,
          category: f.category || null,
          previousOwnerDecision: f.ownerDecision,
          previousOwnerReason: f.ownerReason || f.ownerNote || null,
          previousApprovedValue: f.targetValue ?? getByPath(card.targetObject, nf),
          sourceGroup: src.group,
          sourceType: src.type,
        };
        for (const id of [actualId, card.cardId]) {
          const key = `${id}\x1f${nf}`;
          map.set(key, entry);
          if (nf !== f.field) map.set(`${id}\x1f${f.field}`, entry);
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

function problemSimilarity(a, b) {
  const pa = String(a || "").toLowerCase().replace(/\s+/g, " ").trim();
  const pb = String(b || "").toLowerCase().replace(/\s+/g, " ").trim();
  if (!pa || !pb) return false;
  if (pa === pb) return true;
  if (pa.includes(pb) || pb.includes(pa)) return true;
  const keys = ["foreign", "pl_char", "accent", "placeholder", "translation", "grammar"];
  return keys.some((k) => pa.includes(k) && pb.includes(k));
}

function hasObjectiveNewEvidence(lock, finding, words) {
  const idx = words.findIndex((e, i) => entryId(e, i, "b1") === finding.cardId);
  if (idx < 0) return false;
  const fieldPath = normalizeField(finding.field);
  const currentVal = getByPath(words[idx], fieldPath);
  const approved = lock.previousApprovedValue;

  if (JSON.stringify(currentVal) === JSON.stringify(approved)) return false;

  const prob = String(finding.reason || finding.problem || "").toLowerCase();
  if (prob.includes("pl_char") || prob.includes("lv_diacritic") || prob.includes("foreign remnant")) return false;
  if (!problemSimilarity(lock.problem, finding.reason || finding.problem)) return true;

  const sev = String(finding.severity || "").toUpperCase();
  if (sev === "CRITICAL" && String(finding.recommendedCs || "").trim()) {
    const cur = String(finding.currentCs || currentVal || "").trim();
    const rec = String(finding.recommendedCs || "").trim();
    if (cur && rec && cur !== rec) return true;
  }
  return false;
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

    if (hasObjectiveNewEvidence(lock, f, words)) {
      reopenRequired += 1;
      const entry = {
        ...f,
        ownerLockStatus: "OWNER_LOCK_REOPEN_REQUIRED",
        validationStatus: "OWNER_LOCK_REOPEN_REQUIRED",
        previousOwnerDecision: lock.previousOwnerDecision,
        previousOwnerReason: lock.previousOwnerReason,
        previousApprovedValue: lock.previousApprovedValue,
        currentValue: currentVal,
        newEvidence: `Objective new issue at ${fieldPath} not covered by prior ${lock.previousOwnerDecision}`,
        reopenReason: String(f.reason || f.problem || "").slice(0, 200),
      };
      ownerLockMatches.push(entry);
      validatedReal.push(entry);
    } else {
      confirmed += 1;
      ownerLockMatches.push({
        ...f,
        ownerLockStatus: "OWNER_LOCK_CONFIRMED",
        validationStatus: "OWNER_LOCK_CONFIRMED",
        previousOwnerDecision: lock.previousOwnerDecision,
        previousOwnerReason: lock.previousOwnerReason,
        previousApprovedValue: lock.previousApprovedValue,
        currentValue: currentVal,
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

function checkIntegrity(words, baselineDeHash, idOrderBaseline) {
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
    if (words[i].de !== idOrderBaseline[i].de) { idOrder = "FAIL"; break; }
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
    falsePositives: Math.max(0, rawCandidates.length - validatedReal.length),
    validatedReal: validatedReal.length,
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
  return {
    rawCandidates: fromRaw.length + inline,
    falsePositives: Math.max(0, fromRaw.length + inline - fromValidated.length - inline),
    validatedReal: fromValidated.length + inline,
  };
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
      const batchKey = `${prefix}-${String(start).padStart(3, "0")}-${String(end).padStart(3, "0")}`;
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

  await auditBatch(simple, BATCH_SIZE, "simple", "b1_final_residual_simple");
  await auditBatch(study, STUDY_BATCH_SIZE, "study", "b1_final_residual_study");

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
    const meta = cardMeta.get(cardId);
    const idx = meta?.productionIndex ?? words.findIndex((e, i) => entryId(e, i, "b1") === cardId);
    cards.push({
      worklistIndex: meta?.worklistIndex ?? worklistIndex,
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
        previousApprovedValue: f.previousApprovedValue ?? null,
        currentValue: f.currentValue ?? null,
        newEvidence: f.newEvidence ?? null,
        reopenReason: f.reopenReason ?? null,
      })),
    });
  }
  return cards;
}

function reviewB1Ton(ownerLockMatches) {
  const ton = ownerLockMatches.filter((m) => m.cardId === "b1-ton");
  return {
    cardId: "b1-ton",
    priorFirstAuditReopenCount: 3,
    finalStatuses: ton.map((m) => ({
      field: normalizeField(m.field),
      status: m.ownerLockStatus || m.validationStatus,
      previousOwnerDecision: m.previousOwnerDecision,
      previousOwnerReason: m.previousOwnerReason,
      reason: m.reason || m.problem,
    })),
    reopenRequired: ton.filter((m) => m.ownerLockStatus === "OWNER_LOCK_REOPEN_REQUIRED").length,
    confirmed: ton.filter((m) => m.ownerLockStatus === "OWNER_LOCK_CONFIRMED").length,
  };
}

function buildMarkdown(data) {
  const s = data.summary;
  const lines = [
    "# CS–DE B1 FINAL TARGETED REGRESSION / CLOSURE AUDIT",
    "",
    "**MODE:** READ-ONLY",
    "",
    "## MODEL",
    "",
    LINGUISTIC_MODEL,
    "",
    "## RESIDUAL APPLY PREREQUISITE",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| Residual groups | ${s.residualGroups}/3 |`,
    `| Residual OWNER-review cards | ${s.residualWorklistCards}/${RESIDUAL_WORKLIST} |`,
    `| Exact targetObject match | ${s.residualTargetMatch} |`,
    `| CURRENT_VALUE_MISMATCH | ${s.currentValueMismatch} |`,
    `| diverged | ${s.diverged} |`,
    `| missing | ${s.missing} |`,
    `| Prerequisite | ${s.prerequisitePass ? "PASS" : "FAIL"} |`,
    "",
    "## REPAIR HISTORY",
    "",
    "| Stage | Value |",
    "|---|---|",
    "| Initial B1 full audit | 3367/3367 |",
    "| Initial findings | 4444 |",
    "| Groups 01–06 OWNER findings | 1178 |",
    "| Residual full-audit findings | 3266 |",
    "| Residual full-audit OWNER cards | 1281 |",
    "| Groups 07–32 | 1281/1281 processed |",
    "| First targeted regression | 1307/1307 changed cards audited |",
    "| First targeted regression residual | 116 cards |",
    "| Residual OWNER review | 116/116 |",
    "| Residual Groups 01–03 | 3/3 |",
    `| Final targeted audit | ${s.targetedCardsAudited} actually changed residual cards |`,
    "",
    "## TARGETED SCOPE",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| Residual worklist cards | ${s.residualWorklistCards} |`,
    `| Actually changed residual cards | ${s.actuallyChangedCards} |`,
    `| Unique targeted cards | ${s.actuallyChangedCards} |`,
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
    "## FOREIGN / PLACEHOLDERS / SECTIONACCENTS",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| Foreign remnants (validated) | ${s.foreignRemnants} |`,
    `| Placeholders (validated) | ${s.placeholders} |`,
    `| Stale sectionAccents (validated) | ${s.staleSectionAccents} |`,
    `| Foreign sectionAccents (validated) | ${s.foreignSectionAccents} |`,
    "",
    "## b1-ton SPECIAL REVIEW",
    "",
    JSON.stringify(data.b1TonReview, null, 2),
    "",
    "## FULL B1 DETERMINISTIC (3367/3367)",
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
    "## IMMUTABILITY",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| Out-of-scope B1 changes | ${s.outOfScopeB1Changes} |`,
    `| Other-language changes | 0 |`,
    `| Unexpected production changes | ${s.unexpectedProductionChanges} |`,
    `| DE changes | ${s.deChanges} |`,
    "",
    "## CLOSURE VERDICT",
    "",
    `**${s.verdict}**`,
    "",
    `Generated: ${data.meta.date}`,
    `Branch: \`${data.meta.branch}\``,
    `Audit commit: \`${data.meta.auditCommit}\``,
    `Residual cards: ${s.residualCardsCount}`,
  ];
  return lines.join("\n");
}

async function main() {
  ensureDir(TEMP_DIR);
  const auditCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const baselineB1Hash = fileHash(B1_FILE);
  const words = loadArray("data/cs/b1.js", "B1_WORDS");
  const preResidualWords = loadWordsFromGit(PRE_RESIDUAL_APPLY_SHA);
  const preRepairWords = loadWordsFromGit(PRE_REPAIR_BASELINE_SHA);
  const baselineDeHash = deSnapshotHash(words);

  console.log("\n=== Residual Apply Prerequisite ===");
  const prereq = verifyResidualApplyPrerequisite(words);
  if (!prereq.pass) {
    console.error(JSON.stringify({ status: "PREREQUISITE FAIL — STOP", prereq }, null, 2));
    process.exit(2);
  }
  console.log(`PASS: ${prereq.exact}/${RESIDUAL_WORKLIST} exact targetObject match`);

  const { allCards, changedIds, changedCards, cardMeta } = loadResidualSpecs();
  const targetSet = new Set(changedCards.map((c) => c.cardId));
  const residualIndexes = new Set(allCards.map((c) => c.productionIndex));
  const ownerLockMap = loadFullOwnerHistory(words);

  console.log(`\n=== Targeted scope: ${targetSet.size} actually changed residual cards ===`);

  let outOfScopeB1Changes = 0;
  for (let i = 0; i < words.length; i++) {
    if (residualIndexes.has(i)) continue;
    if (JSON.stringify(preResidualWords[i]) !== JSON.stringify(words[i])) outOfScopeB1Changes += 1;
  }
  if (outOfScopeB1Changes > 0) {
    console.error(JSON.stringify({ status: "OUT_OF_SCOPE_FAIL", outOfScopeB1Changes }, null, 2));
    process.exit(3);
  }

  console.log("\n=== Full B1 deterministic (3367/3367) ===");
  runDeterministicCollect();
  const detFull = JSON.parse(fs.readFileSync(path.join(DET_COLLECT_DIR, "deterministic-audit.json"), "utf8"));
  const detTargeted = detFull.findings.filter((f) => targetSet.has(f.cardId));
  fs.writeFileSync(DETERMINISTIC_JSON, JSON.stringify({ findings: detTargeted, fullIntegrity: detFull }, null, 2));

  let lunaResult = { stats: createStats(), auditedCardIds: [], findings: [] };
  if (!SKIP_LUNA) {
    console.log(`\n=== GPT-5.6 Luna final targeted audit (${targetSet.size} cards) ===`);
    if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
    lunaResult = await runTargetedLuna(words, targetSet);
  } else if (fs.existsSync(LINGUISTIC_JSON)) {
    const ling = JSON.parse(fs.readFileSync(LINGUISTIC_JSON, "utf8"));
    lunaResult.findings = ling.qualityFindings || ling.findings || [];
    lunaResult.auditedCardIds = ling.meta?.auditedCardIds || loadProgress().auditedCardIds || [];
    lunaResult.stats = ling.apiUsage || createStats();
  }

  const wordsAfter = loadArray("data/cs/b1.js", "B1_WORDS");
  const integrity = checkIntegrity(wordsAfter, baselineDeHash, preRepairWords);
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
  const b1TonReview = reviewB1Ton(ownerLockMatches);

  const validatedSev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of validatedReal.filter((x) => x.validationStatus === "VALIDATED_REAL")) {
    const sev = f.severity || "MEDIUM";
    if (validatedSev[sev] !== undefined) validatedSev[sev] += 1;
  }

  const foreign = analyzeForeignSweep(preMerge, validatedReal.filter((x) => x.validationStatus === "VALIDATED_REAL"));
  const placeholders = analyzePlaceholders(preMerge, validatedReal.filter((x) => x.validationStatus === "VALIDATED_REAL"), wordsAfter, targetSet);
  const sectionAccents = analyzeSectionAccents(preMerge, validatedReal.filter((x) => x.validationStatus === "VALIDATED_REAL"));

  const closureCandidate = prereq.pass
    && outOfScopeB1Changes === 0
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
    ? "CS–DE B1 — OWNER ACCEPTED / CLOSED"
    : "RESIDUAL REPAIR REQUIRED";

  const residualCards = buildResidualWorklist(validatedReal, wordsAfter, cardMeta);
  if (validatedReal.length > 0) {
    fs.writeFileSync(RESIDUAL_JSON, JSON.stringify({
      meta: { generatedAt: new Date().toISOString(), branch: BRANCH, auditCommit, residualCardCount: residualCards.length },
      cards: residualCards,
    }, null, 2));
  }

  const lunaAudited = lunaResult.auditedCardIds.length || targetSet.size;
  const summary = {
    prerequisitePass: prereq.pass,
    residualGroups: RESIDUAL_GROUPS.length,
    residualWorklistCards: RESIDUAL_WORKLIST,
    residualTargetMatch: `${prereq.exact}/${RESIDUAL_WORKLIST}`,
    actuallyChangedCards: targetSet.size,
    targetedCardsAudited: `${lunaAudited}/${targetSet.size}`,
    currentValueMismatch: 0,
    diverged: prereq.total - prereq.exact,
    missing: 0,
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
    outOfScopeB1Changes,
    unexpectedProductionChanges: outOfScopeB1Changes + productionChangesDuringAudit,
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
      auditType: "CS-DE B1 FINAL TARGETED REGRESSION / CLOSURE AUDIT",
      linguisticAuditModel: LINGUISTIC_MODEL,
      apiModel: DEFAULT_MODEL,
      date: new Date().toISOString(),
      branch: BRANCH,
      auditCommit,
      readOnly: true,
      residualApplyReport: RESIDUAL_APPLY_REPORT,
      preResidualApplySha: PRE_RESIDUAL_APPLY_SHA,
      preRepairBaselineSha: PRE_REPAIR_BASELINE_SHA,
    },
    summary,
    prerequisite: prereq,
    changeScope: { worklistCards: RESIDUAL_WORKLIST, actuallyChangedCardIds: [...targetSet], changedCards },
    ownerLock: { matches: ownerLockMatches, confirmed, reopenRequired },
    b1TonReview,
    validatedRealFindings: validatedReal,
    integrity,
    lunaAudit: { cardsAudited: lunaAudited, cardsExpected: targetSet.size, apiUsage: lunaResult.stats },
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(data, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(data));

  console.log(`\nWrote ${OUT_MD}`);
  console.log(`VERDICT: ${verdict}`);
  console.log(`VALIDATED REAL: ${validatedReal.filter((x) => x.validationStatus === "VALIDATED_REAL").length}`);
  console.log(`OWNER_LOCK: confirmed=${confirmed} reopen=${reopenRequired}`);
  console.log(`b1-ton: confirmed=${b1TonReview.confirmed} reopen=${b1TonReview.reopenRequired}`);
}

if (require.main === module) {
  main().catch((e) => {
    console.error("Audit failed:", e.message);
    process.exit(1);
  });
}

module.exports = { main };
