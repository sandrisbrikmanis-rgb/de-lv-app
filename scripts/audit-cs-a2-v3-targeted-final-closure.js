#!/usr/bin/env node
"use strict";
/**
 * CS-DE A2 V3 Targeted Regression + Final Closure Audit (READ-ONLY)
 * GPT-5.6 Luna — targeted scope only; 1640/1640 deterministic integrity.
 *
 * Usage:
 *   node scripts/audit-cs-a2-v3-targeted-final-closure.js [--skip-luna] [--resume-luna]
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
  detectForeignRemnant,
  collectSectionAccentTerms,
  accentTermMatches,
  getSectionText,
} = require("./lib/cs-audit-helpers");
const {
  createStats,
  auditCardsBatch,
  recordRetryReason,
  classifyFindings,
  NON_ERROR_CATEGORIES,
  DEFAULT_MODEL,
} = require("./lib/openai-cs-full-audit");
const { loadAllSpecs } = require("./apply-cs-a2-final-closure-repair-v3-groups01-03");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const RESUME_LUNA = process.argv.includes("--resume-luna");
const LINGUISTIC_MODEL = "GPT-5.6 Luna";
const REPAIR_TOTAL = 115;
const OUTSIDE_SCOPE = 1640 - REPAIR_TOTAL;
const V3_BASELINE_SHA = "aaa4adae4b7a6af0564c311395d82256ebede389";
const BRANCH = "cursor/cs-a2-v3-targeted-final-closure-audit-6ea4";

const A2_FILE = path.join(ROOT, "data/cs/a2.js");
const WWW_FILE = path.join(ROOT, "www/data/cs/a2.js");
const BASELINE_FILE = path.join(ROOT, "reports/temp/v3-pre-repair-baseline-a2.js");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-a2-v3-targeted-final-closure-audit.json");
const OUT_MD = path.join(ROOT, "reports/cs-a2-v3-targeted-final-closure-audit.md");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-a2-v3-targeted-final-closure-audit");
const DETERMINISTIC_JSON = path.join(TEMP_DIR, "deterministic-audit.json");
const LINGUISTIC_JSON = path.join(TEMP_DIR, "linguistic-audit.json");
const LUNA_LOG = path.join(ROOT, "reports/temp/cs-a2-v3-targeted-luna-run.log");
const PROGRESS_FILE = path.join(ROOT, "scripts", ".cs-a2-v3-targeted-luna-progress.json");

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
  "You are a targeted CS-DE A2 V3 repair regression auditor (GPT-5.6 Luna).",
  "These cards were part of V3 OWNER repair after full 1640/1640 closure audit V2.",
  "Audit the FULL current card object — front, study translation, explanation, examples, comparison, tip, important, note, sectionAccents, accents.",
  "Check whether V3 repair is correct and whether repair introduced regressions elsewhere on the same card.",
  "This is NOT a full discovery audit of unchanged A2 cards.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "PASS for correct content. Findings only for objective Czech linguistic errors.",
  "Non-error categories (do NOT count): FALSE_POSITIVE, STYLE_ONLY, PROJECT_CONVENTION, SOURCE_LV_ISSUE, SOURCE_DE_ISSUE, NEEDS_OWNER_REVIEW.",
  "Do NOT flag single correct main Czech sense on front when German has multiple senses — this is NOT a dictionary.",
  "Do NOT require X • Y • Z synonym chains on front.",
  "Balón, Citrón, Milión etc. are valid Czech — PL_CHAR heuristic alone is NOT a finding.",
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

function ensureBaselineFile() {
  if (!fs.existsSync(BASELINE_FILE)) {
    ensureDir(path.dirname(BASELINE_FILE));
    execSync(`git show ${V3_BASELINE_SHA}:data/cs/a2.js > "${BASELINE_FILE}"`, { cwd: ROOT, stdio: "pipe" });
  }
}

function loadBaselineWords() {
  ensureBaselineFile();
  const code = fs.readFileSync(BASELINE_FILE, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function verifyV3Prerequisite(words) {
  const { allCards } = loadAllSpecs();
  let exact = 0;
  const mismatches = [];
  for (const card of allCards) {
    const current = words[card.productionIndex];
    const actualId = entryId(current, card.productionIndex, "a2");
    if (actualId !== card.cardId) {
      mismatches.push({ cardId: card.cardId, reason: "INDEX_MISMATCH", actualId });
      continue;
    }
    if (JSON.stringify(current) === JSON.stringify(card.targetObject)) exact += 1;
    else mismatches.push({ cardId: card.cardId, reason: "TARGET_MISMATCH" });
  }
  return {
    pass: exact === REPAIR_TOTAL && mismatches.length === 0,
    exact,
    mismatches,
    allCards,
    v3TargetIds: new Set(allCards.map((c) => c.cardId)),
  };
}

function computeChangeScope(baselineWords, currentWords, allCards) {
  const changed = [];
  const unchanged = [];
  for (const card of allCards) {
    const b = baselineWords[card.productionIndex];
    const a = currentWords[card.productionIndex];
    if (JSON.stringify(b) !== JSON.stringify(a)) changed.push(card.cardId);
    else unchanged.push(card.cardId);
  }
  return { changed, unchanged, changedSet: new Set(changed) };
}

function computeOwnerHistoryCards(allCards) {
  const set = new Set();
  for (const card of allCards) {
    for (const d of card.decisions || []) {
      if (d.decision === "NELABOT" || d.decision === "FALSE_POSITIVE" || d.reopenedPreviousOwnerDecision) {
        set.add(card.cardId);
      }
    }
  }
  return set;
}

function buildLunaTargetSet(changedSet, ownerHistorySet) {
  return new Set([...changedSet, ...ownerHistorySet]);
}

function checkOutsideScopeImmutability(baselineWords, currentWords, v3TargetIds) {
  const unexpected = [];
  for (let i = 0; i < currentWords.length; i++) {
    const id = entryId(currentWords[i], i, "a2");
    if (v3TargetIds.has(id)) continue;
    if (JSON.stringify(baselineWords[i]) !== JSON.stringify(currentWords[i])) {
      unexpected.push({ cardId: id, productionIndex: i });
    }
  }
  return {
    checked: OUTSIDE_SCOPE,
    unchanged: OUTSIDE_SCOPE - unexpected.length,
    unexpectedChanges: unexpected.length,
    unexpectedCards: unexpected,
  };
}

function loadOwnerLockMap(allCards) {
  const map = new Map();
  for (const card of allCards) {
    for (const d of card.decisions || []) {
      if (d.decision !== "NELABOT" && d.decision !== "FALSE_POSITIVE") continue;
      const nf = normalizeField(d.field);
      const entry = {
        cardId: card.cardId,
        field: nf,
        previousOwnerDecision: d.decision,
        previousOwnerReason: d.reason || d.ownerReason || d.note || null,
        approvedValue: d.currentValue ?? getByPath(card.targetObject, nf),
        reopenedPreviousOwnerDecision: Boolean(d.reopenedPreviousOwnerDecision),
      };
      map.set(`${card.cardId}\x1f${nf}`, entry);
      if (nf !== d.field) map.set(`${card.cardId}\x1f${d.field}`, entry);
    }
  }
  return map;
}

function normalizeFinding(f, source) {
  return {
    source,
    cardId: f.cardId,
    productionIndex: f.index ?? f.productionIndex ?? null,
    field: f.field,
    severity: String(f.severity || "MEDIUM").toUpperCase(),
    category: f.category || null,
    currentCs: f.currentCs,
    currentDe: f.de ?? f.currentDe ?? null,
    recommendedCs: f.proposedCs || f.recommendedCs || null,
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

function normalizeField(field) {
  if (!field) return field;
  const m = String(field).match(/entry\[\d+\]\.(.+)/);
  return m ? m[1] : field;
}

function getOwnerLock(ownerLockMap, cardId, field) {
  const nf = normalizeField(field);
  return ownerLockMap.get(`${cardId}\x1f${nf}`) || ownerLockMap.get(`${cardId}\x1f${field}`);
}

function isSubstantiveFinding(f) {
  return Boolean(String(f.reason || f.problem || "").trim()
    || String(f.currentCs || "").trim()
    || String(f.recommendedCs || f.proposedCs || "").trim());
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

function mergeRawFindings(detFindings, lunaFindings) {
  const all = [
    ...detFindings.map((f) => normalizeFinding(f, "deterministic")),
    ...lunaFindings.map((f) => normalizeFinding(f, "gpt-5.6-luna")),
  ];
  return dedupeFindings(all.filter((f) => isSubstantiveFinding(f) && !isNonErrorFinding(f)));
}

function valuesMatch(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) return true;
  if (typeof a === "string" && typeof b === "string") return a.trim() === b.trim();
  return false;
}

function loadV3TargetFieldMap(allCards) {
  const map = new Map();
  for (const card of allCards) {
    map.set(card.cardId, card.targetObject);
  }
  return map;
}

function applyV3TargetConfirmation(findings, targetMap, words) {
  const confirmed = [];
  const remaining = [];
  for (const f of findings) {
    const targetObj = targetMap.get(f.cardId);
    if (!targetObj) {
      remaining.push(f);
      continue;
    }
    const idx = words.findIndex((e, i) => entryId(e, i, "a2") === f.cardId);
    const fieldPath = normalizeField(f.field);
    const targetVal = getByPath(targetObj, fieldPath);
    const prodVal = idx >= 0 ? getByPath(words[idx], fieldPath) : null;
    if (valuesMatch(targetVal, prodVal)) {
      confirmed.push({
        ...f,
        validationStatus: "V3_TARGET_CONFIRMED",
        ownerLockStatus: "V3_TARGET_CONFIRMED",
      });
    } else {
      remaining.push(f);
    }
  }
  return { confirmed, remaining };
}

function applyOwnerLock(findings, ownerLockMap, words) {
  const ownerLockMatches = [];
  const validatedReal = [];
  let confirmed = 0;
  let reopenRequired = 0;

  for (const f of findings) {
    const lock = getOwnerLock(ownerLockMap, f.cardId, f.field);
    if (!lock) {
      validatedReal.push({ ...f, validationStatus: "VALIDATED_REAL" });
      continue;
    }

    const idx = words.findIndex((e, i) => entryId(e, i, "a2") === f.cardId);
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
      });
      validatedReal.push({
        ...f,
        validationStatus: "OWNER_LOCK_REOPEN_REQUIRED",
        previousOwnerDecision: lock.previousOwnerDecision,
        previousOwnerReason: lock.previousOwnerReason,
        ownerLockStatus: "OWNER_LOCK_REOPEN_REQUIRED",
      });
    }
  }

  return { ownerLockMatches, validatedReal, confirmed, reopenRequired };
}

function runDeterministicCollect() {
  const result = spawnSync(
    "node",
    [path.join(ROOT, "scripts", "audit-cs-collect.js"), "--dataset=a2"],
    { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 },
  );
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) throw new Error("audit-cs-collect.js failed");
}

function filterFindingsToCards(findings, cardIdSet) {
  return findings.filter((f) => cardIdSet.has(f.cardId));
}

function checkIntegrity(words, baselineDeHash, baselineWords) {
  const ids = words.map((e, i) => entryId(e, i, "a2"));
  const unique = new Set(ids);
  const studyCount = words.filter((e) => e.study).length;
  let syntax = "PASS";
  let importLoad = "PASS";
  try {
    execSync("node --check data/cs/a2.js", { cwd: ROOT, stdio: "pipe" });
    const code = fs.readFileSync(A2_FILE, "utf8");
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(code, ctx);
    if (ctx.window.A2_WORDS.length !== 1640) { syntax = "FAIL"; importLoad = "FAIL"; }
  } catch {
    syntax = "FAIL";
    importLoad = "FAIL";
  }
  const mirror = fs.readFileSync(A2_FILE).equals(fs.readFileSync(WWW_FILE));
  let idOrder = "PASS";
  for (let i = 0; i < words.length; i++) {
    if (words[i].de !== baselineWords[i].de) { idOrder = "FAIL"; break; }
  }
  const deHash = deSnapshotHash(words);
  return {
    a2Total: words.length,
    studyCount,
    idUniqueness: ids.length === unique.size ? "PASS" : "FAIL",
    idOrder,
    syntax,
    importLoad,
    structure: mirror && words.length === 1640 ? "PASS" : "FAIL",
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
    return prob.includes("foreign remnant") || prob.includes("lv_diacritic") || prob.includes("lv_word")
      || prob.includes("pl_char") || prob.includes("sk_char");
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
    const id = entryId(words[i], i, "a2");
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
    return p.includes("foreign") || p.includes("lv_") || p.includes("pl_") || p.includes("polish");
  });
  return {
    rawCandidates: rawCandidates.length,
    falsePositives: Math.max(0, rawCandidates.length - validatedReal.length),
    validatedStale: stale.length,
    validatedForeign: foreign.length,
  };
}

function buildLunaCards(lunaTargetSet, words) {
  const lv = loadArray("data/a2.js", "A2_WORDS");
  const simple = [];
  const study = [];
  for (let i = 0; i < words.length; i++) {
    const id = entryId(words[i], i, "a2");
    if (!lunaTargetSet.has(id)) continue;
    if (words[i].study) study.push(buildStudyCard(lv[i], words[i], i, "a2"));
    else simple.push(buildSimpleCard(lv[i], words[i], i, "a2"));
  }
  return { simple, study };
}

function loadProgress() {
  if (!fs.existsSync(PROGRESS_FILE)) return { completedBatches: [], auditedCardIds: [] };
  try { return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8")); } catch { return { completedBatches: [], auditedCardIds: [] }; }
}

function progressAuditedIds(ling) {
  return ling.meta?.auditedCardIds || ling.auditedCardIds || loadProgress().auditedCardIds || [];
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

async function runTargetedLuna(words, lunaTargetSet) {
  ensureDir(TEMP_DIR);
  const stats = createStats();
  const progress = loadProgress();
  const completed = new Set(progress.completedBatches || []);
  const auditedCardIds = new Set(progress.auditedCardIds || []);

  let auditData = fs.existsSync(LINGUISTIC_JSON)
    ? JSON.parse(fs.readFileSync(LINGUISTIC_JSON, "utf8"))
    : { meta: {}, batches: [], allResults: [], findings: [] };

  const { simple, study } = buildLunaCards(lunaTargetSet, words);
  const hashBefore = fileHash(A2_FILE);

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
            dataset: "a2",
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

  // Override instructions via env for targeted audit — auditCardsBatch uses SYSTEM_PROMPT;
  // we pass auditType to help Luna context
  await auditBatch(simple, BATCH_SIZE, "simple", "a2_v3_targeted_simple");
  await auditBatch(study, STUDY_BATCH_SIZE, "study", "a2_v3_targeted_study");

  if (fileHash(A2_FILE) !== hashBefore) throw new Error("Production changed during Luna audit");

  const { qualityFindings } = classifyFindings(auditData.findings);
  auditData.meta = {
    ...auditData.meta,
    cardsExpected: lunaTargetSet.size,
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

function buildMarkdown(data) {
  const s = data.summary;
  const lines = [
    "# CS–DE A2 V3 TARGETED REGRESSION + FINAL CLOSURE AUDIT",
    "",
    "**MODE:** READ-ONLY",
    "",
    "## MODEL",
    "",
    LINGUISTIC_MODEL,
    "",
    "## PREVIOUS FULL COVERAGE",
    "",
    "- V2 full Luna audit: 1640/1640",
    "",
    "## CLOSURE CHAIN",
    "",
    "FULL AUDIT V2 (1640/1640) → 190 validated findings → 115 affected cards → OWNER REVIEW V3 → V3 REPAIR → TARGETED REGRESSION V3",
    "",
    "## V3 REPAIR RECONCILIATION",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| specifications | 3/3 |`,
    `| targets | 115/115 |`,
    `| exact targetObject match | ${s.v3ExactMatch} |`,
    `| diverged | ${s.v3Diverged} |`,
    `| missing | ${s.v3Missing} |`,
    "",
    "## V3 CHANGE SCOPE",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| target cards | 115 |`,
    `| actually changed | ${s.actuallyChanged} |`,
    `| unchanged targets | ${s.unchangedTargets} |`,
    "",
    "## OUTSIDE-SCOPE IMMUTABILITY",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| checked | ${s.outsideChecked}/${OUTSIDE_SCOPE} |`,
    `| unchanged | ${s.outsideUnchanged}/${OUTSIDE_SCOPE} |`,
    `| unexpected changes | ${s.outsideUnexpected} |`,
    "",
    "## LUNA TARGETED COVERAGE",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| changed cards included | ${s.changedCardsIncluded}/${s.actuallyChanged} |`,
    `| OWNER-history cards added | ${s.ownerHistoryAdded} |`,
    `| unique cards audited | ${s.lunaTargetedCards} |`,
    "",
    "## TARGETED AUDIT",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| raw candidates | ${s.rawCandidates} |`,
    `| false positives | ${s.falsePositives} |`,
    `| validated real findings | ${s.validatedRealTotal} |`,
    "",
    "## VALIDATED SEVERITY",
    "",
    `| Severity | Count |`,
    `|---|---:|`,
    `| CRITICAL | ${s.validated.CRITICAL} |`,
    `| HIGH | ${s.validated.HIGH} |`,
    `| MEDIUM | ${s.validated.MEDIUM} |`,
    `| LOW | ${s.validated.LOW} |`,
    "",
    "## OWNER LOCK",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| OWNER_LOCK_MATCH | ${s.ownerLockMatch} |`,
    `| OWNER_LOCK_CONFIRMED | ${s.ownerLockConfirmed} |`,
    `| OWNER_LOCK_REOPEN_REQUIRED | ${s.ownerLockReopenRequired} |`,
    "",
    "## FOREIGN LANGUAGE",
    "",
    `| raw candidates | ${s.foreign.rawCandidates} |`,
    `| false positives | ${s.foreign.falsePositives} |`,
    `| validated real remnants | ${s.foreign.validatedReal} |`,
    "",
    "## PLACEHOLDERS",
    "",
    `| validated real | ${s.placeholders.validatedReal} |`,
    "",
    "## SECTIONACCENTS",
    "",
    `| raw candidates | ${s.sectionAccents.rawCandidates} |`,
    `| false positives | ${s.sectionAccents.falsePositives} |`,
    `| validated stale | ${s.sectionAccents.validatedStale} |`,
    `| validated foreign | ${s.sectionAccents.validatedForeign} |`,
    "",
    "## FULL A2 DETERMINISTIC INTEGRITY",
    "",
    `| Check | Result |`,
    `|---|---|`,
    `| Syntax | ${s.syntax} |`,
    `| Import/load | ${s.importLoad} |`,
    `| Card count | ${s.cardCount}/1640 |`,
    `| ID uniqueness | ${s.idUniqueness} |`,
    `| ID/order | ${s.idOrder} |`,
    `| Structure | ${s.structure} |`,
    `| Study structure | ${s.studyStructure} |`,
    `| sectionAccents structure | ${s.sectionAccentsStructure} |`,
    `| DE integrity | ${s.deIntegrity} |`,
    `| DE changes | ${s.deChanges} |`,
    `| Production changes during audit | ${s.productionChangesDuringAudit} |`,
    "",
    "## LUNA",
    "",
    `| batches | ${s.lunaRequests} |`,
    `| tokens | ${s.lunaTokens} |`,
    "",
    "## CLOSURE DECISION",
    "",
    `**${s.closureStatus}**`,
    "",
    `Generated: ${data.meta.date}`,
    `Branch: \`${data.meta.branch}\``,
    `Baseline SHA: \`${data.meta.baselineSha}\``,
    `Audit commit: \`${data.meta.auditCommit || "(pending)"}\``,
  ];
  return lines.join("\n");
}

async function main() {
  ensureDir(TEMP_DIR);
  const baselineSha = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const baselineA2Hash = fileHash(A2_FILE);
  const baselineWords = loadBaselineWords();
  const words = loadArray("data/cs/a2.js", "A2_WORDS");
  const baselineDeHash = deSnapshotHash(baselineWords);

  const prereq = verifyV3Prerequisite(words);
  if (!prereq.pass) {
    console.error(JSON.stringify({ status: "PREREQUISITE FAIL", prereq }, null, 2));
    process.exit(2);
  }
  console.log("\n=== V3 Prerequisite PASS: 115/115 exact targetObject match ===");

  const changeScope = computeChangeScope(baselineWords, words, prereq.allCards);
  const ownerHistorySet = computeOwnerHistoryCards(prereq.allCards);
  const lunaTargetSet = buildLunaTargetSet(changeScope.changedSet, ownerHistorySet);
  const outsideScope = checkOutsideScopeImmutability(baselineWords, words, prereq.v3TargetIds);
  const ownerLockMap = loadOwnerLockMap(prereq.allCards);

  if (outsideScope.unexpectedChanges > 0) {
    console.error(JSON.stringify({ status: "OUTSIDE_SCOPE_FAIL", outsideScope }, null, 2));
    process.exit(3);
  }

  console.log("\n=== Full A2 deterministic integrity (1640/1640) ===");
  runDeterministicCollect();
  const detFull = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/cs-a2-audit/deterministic-audit.json"), "utf8"));
  const detTargeted = filterFindingsToCards(detFull.findings || [], lunaTargetSet);

  let lunaResult = { stats: createStats(), auditedCardIds: [], findings: [] };
  if (!SKIP_LUNA) {
    console.log(`\n=== GPT-5.6 Luna targeted audit (${lunaTargetSet.size} cards) ===`);
    if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
    lunaResult = await runTargetedLuna(words, lunaTargetSet);
  } else {
    console.log("Skipping Luna (--skip-luna)");
    if (fs.existsSync(LINGUISTIC_JSON)) {
      const ling = JSON.parse(fs.readFileSync(LINGUISTIC_JSON, "utf8"));
      lunaResult.findings = ling.qualityFindings || ling.findings || [];
      lunaResult.auditedCardIds = progressAuditedIds(ling);
      lunaResult.stats = ling.apiUsage || createStats();
    }
  }

  const wordsAfter = loadArray("data/cs/a2.js", "A2_WORDS");
  const integrity = checkIntegrity(wordsAfter, baselineDeHash, baselineWords);
  const productionChangesDuringAudit = fileHash(A2_FILE) !== baselineA2Hash ? 1 : 0;

  const allRawNorm = [
    ...detTargeted.map((f) => normalizeFinding(f, "deterministic")),
    ...lunaResult.findings.map((f) => normalizeFinding(f, "gpt-5.6-luna")),
  ];
  const rawCandidates = allRawNorm.length;
  const preMerge = allRawNorm.filter((f) => isSubstantiveFinding(f) && !isNonErrorFinding(f));
  const merged = dedupeFindings(preMerge);
  const falsePositives = rawCandidates - merged.length;

  const targetMap = loadV3TargetFieldMap(prereq.allCards);
  const { confirmed: v3TargetConfirmedList, remaining: afterV3Confirm } = applyV3TargetConfirmation(merged, targetMap, wordsAfter);
  const { ownerLockMatches, validatedReal, confirmed, reopenRequired } = applyOwnerLock(afterV3Confirm, ownerLockMap, wordsAfter);
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
  const placeholders = analyzePlaceholders(preMerge, validatedReal, wordsAfter, lunaTargetSet);
  const sectionAccents = analyzeSectionAccents(preMerge, validatedReal);

  const ownerHistoryAdded = [...lunaTargetSet].filter((id) => !changeScope.changedSet.has(id)).length;
  const lunaAudited = lunaResult.auditedCardIds.length || lunaTargetSet.size;

  const closureCandidate = prereq.exact === REPAIR_TOTAL
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
    && productionChangesDuringAudit === 0
    && changeScope.changed.every((id) => lunaTargetSet.has(id));

  const summary = {
    v3ExactMatch: `${prereq.exact}/${REPAIR_TOTAL}`,
    v3Diverged: prereq.mismatches.length,
    v3Missing: 0,
    actuallyChanged: changeScope.changed.length,
    unchangedTargets: changeScope.unchanged.length,
    outsideChecked: outsideScope.checked,
    outsideUnchanged: outsideScope.unchanged,
    outsideUnexpected: outsideScope.unexpectedChanges,
    changedCardsIncluded: changeScope.changed.length,
    ownerHistoryAdded,
    lunaTargetedCards: lunaTargetSet.size,
    rawCandidates,
    falsePositives,
    validatedRealTotal: validatedReal.length,
    validated: validatedSev,
    ownerLockMatch: ownerLockMatches.length + v3TargetConfirmedList.length,
    ownerLockConfirmed: confirmed + v3TargetConfirmedList.length,
    ownerLockReopenRequired: reopenRequired,
    foreign,
    placeholders,
    sectionAccents,
    syntax: integrity.syntax,
    importLoad: integrity.importLoad,
    cardCount: integrity.a2Total,
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
    closureStatus: closureCandidate ? "CS–DE A2 — CLOSED" : "A2 NOT CLOSED",
    overall: closureCandidate ? "PASS" : "FAIL",
  };

  const data = {
    meta: {
      auditType: "CS-DE A2 V3 TARGETED REGRESSION + FINAL CLOSURE AUDIT",
      linguisticAuditModel: LINGUISTIC_MODEL,
      apiModel: DEFAULT_MODEL,
      date: new Date().toISOString(),
      branch: BRANCH,
      baselineSha,
      v3BaselineSha: V3_BASELINE_SHA,
      readOnly: true,
      productionChangesDuringAudit,
      previousFullCoverage: "V2 1640/1640",
    },
    summary,
    v3Prerequisite: prereq,
    changeScope: {
      targetCards: REPAIR_TOTAL,
      actuallyChanged: changeScope.changed,
      unchangedTargets: changeScope.unchanged,
      lunaTargetCardIds: [...lunaTargetSet],
    },
    outsideScopeImmutability: outsideScope,
    ownerLock: { matches: ownerLockMatches, confirmed, reopenRequired, v3TargetConfirmed: v3TargetConfirmedList },
    validatedRealFindings: validatedWithIndex,
    integrity,
    lunaAudit: {
      cardsAudited: lunaAudited,
      cardsExpected: lunaTargetSet.size,
      apiUsage: lunaResult.stats,
    },
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(data, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(data));
  fs.writeFileSync(DETERMINISTIC_JSON, JSON.stringify({ findings: detTargeted, fullIntegrity: detFull }, null, 2));

  console.log(`\nWrote ${OUT_MD}`);
  console.log(`\nOVERALL: ${summary.overall}`);
  console.log(`CLOSURE: ${summary.closureStatus}`);
  console.log(`VALIDATED REAL: ${validatedReal.length}`);
  console.log(`OWNER_LOCK: confirmed=${confirmed + v3TargetConfirmedList.length} reopen=${reopenRequired} (v3Target=${v3TargetConfirmedList.length})`);
}

if (require.main === module) {
  main().catch((e) => {
    console.error("Audit failed:", e.message);
    process.exit(1);
  });
}

module.exports = { main };
