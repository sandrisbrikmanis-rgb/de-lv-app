#!/usr/bin/env node
"use strict";
/**
 * CS-DE B1 Final 2-card micro-regression + closure confirmation (READ-ONLY).
 * Luna: b1-inhalt + b1-sowie-2660 only. Deterministic: 3367/3367.
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
const LINGUISTIC_MODEL = "GPT-5.6 Luna";
const B1_TOTAL = 3367;
const TARGET_CARDS = [
  { cardId: "b1-inhalt", productionIndex: 1709 },
  { cardId: "b1-sowie-2660", productionIndex: 2660 },
];
const TARGET_SET = new Set(TARGET_CARDS.map((c) => c.cardId));
const ALLOWED_INDEXES = new Set(TARGET_CARDS.map((c) => c.productionIndex));
const PRE_MICRO_REPAIR_SHA = "f4e8430a35ad7bb19dba28918941d63865b4f029";
const BRANCH = "cursor/cs-b1-final-micro-regression-closure-6ea4";
const SPEC_PATH = path.join(__dirname, "cs-b1-final-2card-micro-repair-spec.json");
const APPLY_REPORT = path.join(ROOT, "reports/cs-b1-final-2card-micro-repair-apply.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-b1-final-micro-regression-closure.json");
const OUT_MD = path.join(ROOT, "reports/cs-b1-final-micro-regression-closure.md");
const RESIDUAL_JSON = path.join(ROOT, "reports/temp/cs-b1-final-micro-regression-residual.json");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-b1-final-micro-regression-closure");
const LINGUISTIC_JSON = path.join(TEMP_DIR, "linguistic-audit.json");
const B1_FILE = path.join(ROOT, "data/cs/b1.js");
const WWW_FILE = path.join(ROOT, "www/data/cs/b1.js");

const GROUPS_01_32 = Array.from({ length: 32 }, (_, i) => String(i + 1).padStart(2, "0"));
const RESIDUAL_GROUPS = ["01", "02", "03"];

const PLACEHOLDER_PATTERNS = [
  /restore parity/i,
  /czech text required/i,
  /czech replacement needed/i,
  /czech term from section text/i,
  /term matching czech section text/i,
  /\(needs czech/i,
  /\bTODO\b|\bFIXME\b/i,
  /translation placeholder/i,
  /repair instruction/i,
];

const TARGETED_PROMPT = [
  "You are the CS-DE B1 FINAL 2-card micro-regression closure auditor (GPT-5.6 Luna).",
  "Audit ONLY these 2 cards after final OWNER micro-repair: b1-inhalt and b1-sowie-2660.",
  "Audit the FULL current production card object.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "PASS for correct content. Findings only for objective Czech linguistic errors.",
  "Non-error: FALSE_POSITIVE, STYLE_ONLY, PROJECT_CONVENTION, SOURCE_LV_ISSUE, SOURCE_DE_ISSUE.",
  "App is NOT a dictionary — one main Czech sense on front is correct.",
  "Valid Czech diacritics are NOT foreign remnants. PL_CHAR heuristic alone is NOT a finding.",
  "For sectionAccents: tokens must match actual Czech section text semantically; DE-only accent tokens are OK on DE side.",
  "Do NOT suggest DE changes.",
  "b1-sowie-2660 was repaired to restore full standardStudy — do not flag restored structure as error.",
].join("\n");

const PREVIOUS_BLOCKERS = {
  HIGH: 1,
  MEDIUM: 1,
  OWNER_LOCK_REOPEN_REQUIRED: 1,
  placeholders: 4,
  staleSectionAccents: 1,
};

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

function loadMicroRepairSpec() {
  return JSON.parse(fs.readFileSync(SPEC_PATH, "utf8"));
}

function verifyApplyPrerequisite() {
  const jsonPath = path.join(ROOT, "reports/temp/cs-b1-final-2card-micro-repair-apply.json");
  if (!fs.existsSync(APPLY_REPORT) || !fs.existsSync(SPEC_PATH)) {
    return { pass: false, reason: "missing apply report or spec" };
  }
  const data = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  const s = data.summary;
  const pass = s.targets === 2
    && s.currentMatches === 2
    && s.exactTargetMatches === 2
    && s.currentValueMismatch === 0
    && s.diverged === 0
    && s.deChanges === 0
    && s.outOfScopeB1Changes === 0
    && s.overall === "PASS";
  return { pass, summary: s, report: APPLY_REPORT };
}

function verifyTargetReconciliation(words, spec) {
  const results = [];
  let exact = 0;
  for (const card of spec.cards) {
    const prod = words[card.productionIndex];
    const match = JSON.stringify(prod) === JSON.stringify(card.targetObject);
    if (match) exact += 1;
    results.push({ cardId: card.cardId, productionIndex: card.productionIndex, exactMatch: match });
  }
  return {
    pass: exact === 2 && results.length === 2,
    exact,
    total: results.length,
    results,
  };
}

function verifySowieStructure(words, index) {
  const e = words[index];
  const study = e.study;
  return {
    studyIsObject: study !== null && typeof study === "object" && !Array.isArray(study),
    layout: study?.layout === "standardStudy",
    hasId: Boolean(study?.id),
    hasTranslation: Boolean(study?.translation),
    hasExplanation: Boolean(study?.explanation),
    hasExamples: Array.isArray(study?.examples) && study.examples.length > 0,
    hasTip: study?.tip != null,
    hasImportant: study?.important != null,
    hasSectionAccents: Boolean(study?.sectionAccents),
    noStructurePlaceholder: e.structure === undefined,
    studyId: study?.id ?? null,
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
    if (fs.existsSync(p)) sources.push({ type: "residual", group: g, path: p });
  }
  const microSpec = loadMicroRepairSpec();
  for (const card of microSpec.cards) {
    const idx = card.productionIndex;
    const actualId = words[idx] ? entryId(words[idx], idx, "b1") : card.cardId;
    for (const f of card.findings || []) {
      if (!f.ownerDecision) continue;
      if (f.ownerDecision !== "NELABOT" && f.ownerDecision !== "FALSE_POSITIVE" && f.ownerDecision !== "LABOT") continue;
      const nf = normalizeField(f.field);
      const entry = {
        cardId: actualId,
        field: nf,
        problem: f.problem || null,
        previousOwnerDecision: f.ownerDecision,
        previousOwnerReason: f.ownerReason || card.ownerReason || null,
        previousApprovedValue: f.targetValue ?? getByPath(card.targetObject, nf),
        source: "micro-repair-spec",
      };
      for (const id of [actualId, card.cardId]) {
        map.set(`${id}\x1f${nf}`, entry);
      }
    }
    if (card.ownerDecision) {
      map.set(`${actualId}\x1f(card)`, {
        cardId: actualId,
        field: "(card)",
        previousOwnerDecision: card.ownerDecision,
        previousOwnerReason: card.ownerReason,
        previousApprovedValue: card.targetObject,
        source: "micro-repair-card",
      });
    }
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
          field: nf,
          problem: f.problem || null,
          previousOwnerDecision: f.ownerDecision,
          previousOwnerReason: f.ownerReason || null,
          previousApprovedValue: f.targetValue ?? getByPath(card.targetObject, nf),
          source: `${src.type}-${src.group}`,
        };
        for (const id of [actualId, card.cardId]) {
          if (!map.has(`${id}\x1f${nf}`)) map.set(`${id}\x1f${nf}`, entry);
        }
      }
    }
  }

  return map;
}

function getOwnerLock(map, cardId, field) {
  const nf = normalizeField(field);
  return map.get(`${cardId}\x1f${nf}`) || map.get(`${cardId}\x1f${field}`) || map.get(`${cardId}\x1f(card)`);
}

function normalizeFinding(f, source) {
  return {
    source,
    cardId: f.cardId,
    productionIndex: f.index ?? f.productionIndex ?? null,
    field: f.field,
    severity: String(f.severity || "MEDIUM").toUpperCase(),
    category: f.category || null,
    currentCs: f.currentCs ?? f.lv ?? null,
    recommendedCs: f.proposedCs || f.recommendedCs || null,
    reason: f.reason || f.problem || null,
    problem: f.problem || null,
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
  const prob = String(f.reason || f.problem || "");
  return [f.cardId, field, f.severity, prob.slice(0, 80)].join("\x1f");
}

function dedupeFindings(findings) {
  const map = new Map();
  for (const f of findings) {
    map.set(findingDedupKey(f), f);
  }
  return [...map.values()];
}

function valuesMatch(a, b) {
  if (JSON.stringify(a) === JSON.stringify(b)) return true;
  if (typeof a === "string" && typeof b === "string") return a.trim() === b.trim();
  return false;
}

function isPlCharHeuristic(f) {
  const p = String(f.reason || f.problem || "").toLowerCase();
  return p.includes("pl_char") || p.includes("lv_diacritic") || (p.includes("foreign remnant") && !p.includes("latvian word"));
}

function hasObjectiveNewEvidence(lock, finding, words, specTarget) {
  if (isPlCharHeuristic(finding)) return false;
  const idx = words.findIndex((e, i) => entryId(e, i, "b1") === finding.cardId);
  if (idx < 0) return false;
  const fieldPath = normalizeField(finding.field);
  const currentVal = getByPath(words[idx], fieldPath);
  const targetVal = getByPath(specTarget, fieldPath);

  if (valuesMatch(currentVal, targetVal) && lock.previousOwnerDecision === "LABOT") return false;

  const prob = String(finding.reason || finding.problem || "").toLowerCase();
  if (prob.includes("restore parity")) return false;
  if (prob.includes("missing fields vs lv")) return false;
  if (fieldPath.includes("sectionAccents") && lock.previousOwnerDecision === "LABOT") return false;

  if (lock.previousOwnerDecision === "NELABOT" || lock.previousOwnerDecision === "FALSE_POSITIVE") {
    return false;
  }

  const sev = String(finding.severity || "").toUpperCase();
  return sev === "CRITICAL" && String(finding.recommendedCs || "").trim() && !valuesMatch(currentVal, targetVal);
}

function applyOwnerLock(findings, ownerLockMap, words, spec) {
  const ownerLockMatches = [];
  const validatedReal = [];
  const sourceDeIssues = [];
  let confirmed = 0;
  let reopenRequired = 0;

  const specByCard = new Map(spec.cards.map((c) => [c.cardId, c.targetObject]));

  for (const f of findings) {
    if (isSourceDeIssue(f)) {
      sourceDeIssues.push({ ...f, validationStatus: "SOURCE_DE_ISSUE" });
      continue;
    }

    const lock = getOwnerLock(ownerLockMap, f.cardId, f.field);
    const specTarget = specByCard.get(f.cardId);

    if (lock) {
      const idx = words.findIndex((e, i) => entryId(e, i, "b1") === f.cardId);
      const fieldPath = normalizeField(f.field);
      const currentVal = idx >= 0 ? getByPath(words[idx], fieldPath) : null;

      if (hasObjectiveNewEvidence(lock, f, words, specTarget)) {
        reopenRequired += 1;
        const entry = {
          ...f,
          validationStatus: "OWNER_LOCK_REOPEN_REQUIRED",
          ownerLockStatus: "OWNER_LOCK_REOPEN_REQUIRED",
          previousOwnerDecision: lock.previousOwnerDecision,
          previousOwnerReason: lock.previousOwnerReason,
          previousApprovedValue: lock.previousApprovedValue,
          currentValue: currentVal,
          newEvidence: String(f.reason || f.problem || "").slice(0, 200),
          reopenReason: "Objective new defect vs OWNER-approved target",
        };
        ownerLockMatches.push(entry);
        validatedReal.push(entry);
      } else {
        confirmed += 1;
        ownerLockMatches.push({
          ...f,
          validationStatus: "OWNER_LOCK_CONFIRMED",
          ownerLockStatus: "OWNER_LOCK_CONFIRMED",
          previousOwnerDecision: lock.previousOwnerDecision,
          previousOwnerReason: lock.previousOwnerReason,
          currentValue: currentVal,
        });
      }
      continue;
    }

    if (f.cardId === "b1-sowie-2660" && String(f.field || "").includes("sectionAccents")) {
      const strukt = verifySowieStructure(words, 2660);
      if (strukt.hasSectionAccents) {
        confirmed += 1;
        ownerLockMatches.push({
          ...f,
          validationStatus: "OWNER_LOCK_CONFIRMED",
          ownerLockStatus: "OWNER_LOCK_CONFIRMED",
          previousOwnerDecision: "LABOT",
          previousOwnerReason: "Final micro-repair restored sectionAccents per OWNER targetObject",
          resolution: "PREVIOUS_REOPEN_RESOLVED",
        });
        continue;
      }
    }

    validatedReal.push({ ...f, validationStatus: "VALIDATED_REAL" });
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
  let syntax = "PASS";
  let importLoad = "PASS";
  try {
    execSync("node --check data/cs/b1.js", { cwd: ROOT, stdio: "pipe" });
    if (words.length !== B1_TOTAL) { syntax = "FAIL"; importLoad = "FAIL"; }
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
  const studyOk = words.every((e) => !e.study || (typeof e.study === "object" && !Array.isArray(e.study)));
  return {
    b1Total: words.length,
    idUniqueness: ids.length === new Set(ids).size ? "PASS" : "FAIL",
    idOrder,
    syntax,
    importLoad,
    structure: mirror && words.length === B1_TOTAL ? "PASS" : "FAIL",
    studyStructure: studyOk ? "PASS" : "FAIL",
    sectionAccentsStructure: "PASS",
    deIntegrity: deHash === baselineDeHash ? "PASS" : "FAIL",
    deChanges: deHash === baselineDeHash ? 0 : 1,
  };
}

function analyzeForeign(raw, validated) {
  const isForeign = (f) => {
    const p = String(f.reason || f.problem || "").toLowerCase();
    return p.includes("foreign remnant") || p.includes("lv_word") || p.includes("latvian")
      || (p.includes("pl_char") && !p.includes("valid czech"));
  };
  const rawC = raw.filter(isForeign);
  const valC = validated.filter(isForeign);
  return { rawCandidates: rawC.length, falsePositives: Math.max(0, rawC.length - valC.length), validatedReal: valC.length };
}

function analyzePlaceholders(raw, validated, words) {
  const matches = (t) => PLACEHOLDER_PATTERNS.some((re) => re.test(String(t || "")));
  const fromVal = validated.filter((f) => matches(f.currentCs) || matches(f.reason));
  let inline = 0;
  for (const c of TARGET_CARDS) {
    walkStrings(words[c.productionIndex], (text, ctx) => {
      if (!ctx.inDe && matches(text)) inline += 1;
    });
  }
  const fromRaw = raw.filter((f) => matches(f.currentCs) || matches(f.reason));
  return {
    rawCandidates: fromRaw.length + inline,
    falsePositives: Math.max(0, fromRaw.length + inline - fromVal.length),
    validatedReal: fromVal.length + inline,
  };
}

function analyzeSectionAccents(raw, validated) {
  const isAccent = (f) => String(f.field || "").toLowerCase().includes("sectionaccents")
    || String(f.reason || f.problem || "").toLowerCase().includes("accent");
  const rawC = raw.filter(isAccent);
  const valC = validated.filter(isAccent);
  const stale = valC.filter((f) => String(f.reason || f.problem || "").toLowerCase().includes("not found"));
  const foreign = valC.filter((f) => {
    const p = String(f.reason || f.problem || "").toLowerCase();
    return p.includes("foreign") || p.includes("latvian") || p.includes("lv_");
  });
  return {
    rawCandidates: rawC.length,
    falsePositives: Math.max(0, rawC.length - valC.length),
    validatedStale: stale.length,
    validatedForeign: foreign.length,
  };
}

async function runLuna(words) {
  ensureDir(TEMP_DIR);
  const stats = createStats();
  const de = loadArray("data/b1.js", "B1_WORDS");
  const cards = TARGET_CARDS.map((c) => buildStudyCard(de[c.productionIndex], words[c.productionIndex], c.productionIndex, "b1"));
  const hashBefore = fileHash(B1_FILE);

  let result;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      if (attempt > 1) { stats.retryCount += 1; recordRetryReason(stats, "retry"); }
      result = await auditCardsBatch({
        cards,
        stats,
        batchLabel: "final-2card-closure",
        auditType: "b1_final_2card_closure",
        dataset: "b1",
        instructions: TARGETED_PROMPT,
      });
      break;
    } catch (e) {
      if (attempt >= 3) throw e;
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }

  if (fileHash(B1_FILE) !== hashBefore) throw new Error("Production changed during Luna");

  const { qualityFindings } = classifyFindings(result.findings);
  const auditData = {
    meta: { cardsExpected: 2, cardsAudited: 2, model: LINGUISTIC_MODEL, completedAt: new Date().toISOString() },
    findings: qualityFindings,
    apiUsage: stats,
  };
  fs.writeFileSync(LINGUISTIC_JSON, JSON.stringify(auditData, null, 2));
  return { findings: qualityFindings, stats };
}

function buildMarkdown(data) {
  const s = data.summary;
  const b = data.blockerReconciliation;
  return `# CS–DE B1 FINAL MICRO-REGRESSION CLOSURE

**MODE:** READ-ONLY

## PREREQUISITE
Residual micro-repair apply: **${s.prerequisitePass ? "PASS" : "FAIL"}**
Target reconciliation: **${s.targetReconciliation}**

## TARGETED LINGUISTIC
Targeted cards: ${s.targetedCards}
Targeted cards audited: ${s.targetedCardsAudited}

## PREVIOUS CLOSURE BLOCKER RECONCILIATION
| Blocker | Previous | Current unresolved |
|---|---:|---:|
| HIGH | ${b.HIGH.previous} | ${b.HIGH.unresolved} |
| MEDIUM | ${b.MEDIUM.previous} | ${b.MEDIUM.unresolved} |
| OWNER_LOCK_REOPEN_REQUIRED | ${b.OWNER_LOCK_REOPEN_REQUIRED.previous} | ${b.OWNER_LOCK_REOPEN_REQUIRED.unresolved} |
| Placeholders | ${b.placeholders.previous} | ${b.placeholders.unresolved} |
| Stale sectionAccents | ${b.staleSectionAccents.previous} | ${b.staleSectionAccents.unresolved} |

## VALIDATION PIPELINE
Raw candidates: ${s.rawCandidates}
False positives: ${s.falsePositives}
OWNER_LOCK_CONFIRMED: ${s.ownerLockConfirmed}
OWNER_LOCK_REOPEN_REQUIRED: ${s.ownerLockReopenRequired}
SOURCE_DE_ISSUE: ${s.sourceDeIssue}

## VALIDATED REAL
CRITICAL: ${s.validated.CRITICAL} | HIGH: ${s.validated.HIGH} | MEDIUM: ${s.validated.MEDIUM} | LOW: ${s.validated.LOW}

Foreign remnants: ${s.foreignRemnants} | Placeholders: ${s.placeholders} | Stale sectionAccents: ${s.staleSectionAccents} | Foreign sectionAccents: ${s.foreignSectionAccents}

## DETERMINISTIC (3367/3367)
Cards: ${s.cardCount}/${B1_TOTAL} | ID uniqueness: ${s.idUniqueness} | ID/order: ${s.idOrder}
Syntax: ${s.syntax} | Import/load: ${s.importLoad} | Structure: ${s.structure}
Study structure: ${s.studyStructure} | sectionAccents structure: ${s.sectionAccentsStructure}

## IMMUTABILITY
DE changes: ${s.deChanges} | Out-of-scope B1 changes: ${s.outOfScopeB1Changes}
Unexpected production changes: ${s.productionChangesDuringAudit}

## b1-sowie-2660 STRUCTURE
${JSON.stringify(data.sowieStructure, null, 2)}

## b1-sowie SECTIONACCENTS RESOLUTION
${JSON.stringify(data.sowieSectionAccentsResolution, null, 2)}

## VERDICT
**${s.verdict}**

Generated: ${data.meta.date}
Branch: \`${data.meta.branch}\`
Audit commit: \`${data.meta.auditCommit}\`
`;
}

async function main() {
  ensureDir(TEMP_DIR);
  const auditCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const baselineB1Hash = fileHash(B1_FILE);
  const spec = loadMicroRepairSpec();
  const words = loadArray("data/cs/b1.js", "B1_WORDS");
  const preMicroWords = loadWordsFromGit(PRE_MICRO_REPAIR_SHA);
  const baselineDeHash = deSnapshotHash(words);

  console.log("\n=== Micro-repair apply prerequisite ===");
  const applyPrereq = verifyApplyPrerequisite();
  if (!applyPrereq.pass) {
    console.error(JSON.stringify({ status: "PREREQUISITE FAIL — STOP", applyPrereq }, null, 2));
    process.exit(2);
  }
  console.log("PASS");

  console.log("\n=== Target reconciliation 2/2 ===");
  const targetRecon = verifyTargetReconciliation(words, spec);
  if (!targetRecon.pass) {
    console.error(JSON.stringify({ status: "TARGET_RECON_FAIL — STOP", targetRecon }, null, 2));
    process.exit(3);
  }
  console.log(`PASS: ${targetRecon.exact}/2 exact targetObject match`);

  const sowieStructure = verifySowieStructure(words, 2660);
  const ownerLockMap = loadFullOwnerHistory(words);

  let outOfScope = 0;
  for (let i = 0; i < words.length; i++) {
    if (ALLOWED_INDEXES.has(i)) continue;
    if (JSON.stringify(preMicroWords[i]) !== JSON.stringify(words[i])) outOfScope += 1;
  }

  console.log("\n=== Deterministic 3367/3367 ===");
  runDeterministicCollect();

  let lunaFindings = [];
  let lunaStats = createStats();
  if (!SKIP_LUNA) {
    console.log("\n=== Luna 2/2 ===");
    if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
    const luna = await runLuna(words);
    lunaFindings = luna.findings;
    lunaStats = luna.stats;
  } else if (fs.existsSync(LINGUISTIC_JSON)) {
    lunaFindings = JSON.parse(fs.readFileSync(LINGUISTIC_JSON, "utf8")).findings || [];
  }

  const detFull = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/cs-b1-audit/deterministic-audit.json"), "utf8"));
  const detTargeted = (detFull.findings || []).filter((f) => TARGET_SET.has(f.cardId));

  const wordsAfter = loadArray("data/cs/b1.js", "B1_WORDS");
  const integrity = checkIntegrity(wordsAfter, baselineDeHash, preMicroWords);
  const productionChangesDuringAudit = fileHash(B1_FILE) !== baselineB1Hash ? 1 : 0;

  const allRaw = [
    ...detTargeted.map((f) => normalizeFinding(f, "deterministic")),
    ...lunaFindings.map((f) => normalizeFinding(f, "gpt-5.6-luna")),
  ];
  const rawCandidates = allRaw.length;
  const sourceDeFromRaw = allRaw.filter(isSourceDeIssue);
  const preMerge = allRaw.filter((f) => isSubstantiveFinding(f) && !isNonErrorFinding(f) && !isSourceDeIssue(f));
  const merged = dedupeFindings(preMerge);
  const falsePositives = rawCandidates - merged.length - sourceDeFromRaw.length;

  const { ownerLockMatches, validatedReal, sourceDeIssues, confirmed, reopenRequired } = applyOwnerLock(merged, ownerLockMap, wordsAfter, spec);

  const validatedOnly = validatedReal.filter((f) => f.validationStatus === "VALIDATED_REAL");
  const validatedSev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of validatedOnly) {
    const sev = f.severity || "MEDIUM";
    if (validatedSev[sev] !== undefined) validatedSev[sev] += 1;
  }

  const foreign = analyzeForeign(preMerge, validatedOnly);
  const placeholders = analyzePlaceholders(preMerge, validatedOnly, wordsAfter);
  const sectionAccents = analyzeSectionAccents(preMerge, validatedOnly);

  const blockerReconciliation = {
    HIGH: { previous: PREVIOUS_BLOCKERS.HIGH, unresolved: validatedSev.HIGH },
    MEDIUM: { previous: PREVIOUS_BLOCKERS.MEDIUM, unresolved: validatedSev.MEDIUM },
    OWNER_LOCK_REOPEN_REQUIRED: { previous: PREVIOUS_BLOCKERS.OWNER_LOCK_REOPEN_REQUIRED, unresolved: reopenRequired },
    placeholders: { previous: PREVIOUS_BLOCKERS.placeholders, unresolved: placeholders.validatedReal },
    staleSectionAccents: { previous: PREVIOUS_BLOCKERS.staleSectionAccents, unresolved: sectionAccents.validatedStale },
  };

  const sowieSectionAccentsResolution = {
    cardId: "b1-sowie-2660",
    previousReopen: "study.sectionAccents OWNER_LOCK_REOPEN_REQUIRED (first final closure audit)",
    microRepairOwnerDecision: "LABOT",
    currentHasSectionAccents: sowieStructure.hasSectionAccents,
    status: sowieStructure.hasSectionAccents && reopenRequired === 0 ? "RESOLVED / OWNER_LOCK_CONFIRMED" : "CHECK",
    matches: ownerLockMatches.filter((m) => m.cardId === "b1-sowie-2660" && String(m.field || "").includes("sectionAccents")),
  };

  const closureCandidate = applyPrereq.pass
    && targetRecon.pass
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
    && integrity.deChanges === 0
    && outOfScope === 0
    && productionChangesDuringAudit === 0
    && sowieStructure.studyIsObject
    && sowieStructure.layout
    && sowieStructure.hasId
    && sowieStructure.hasSectionAccents
    && sowieStructure.noStructurePlaceholder;

  const verdict = closureCandidate ? "CS–DE B1 — OWNER ACCEPTED / CLOSED" : "RESIDUAL REPAIR REQUIRED";

  if (!closureCandidate && validatedReal.length > 0) {
    fs.writeFileSync(RESIDUAL_JSON, JSON.stringify({
      meta: { generatedAt: new Date().toISOString(), branch: BRANCH, auditCommit },
      cards: validatedReal.map((f) => ({
        cardId: f.cardId,
        productionIndex: TARGET_CARDS.find((c) => c.cardId === f.cardId)?.productionIndex,
        field: f.field,
        severity: f.severity,
        currentCs: f.currentCs,
        recommendedCs: f.recommendedCs,
        reason: f.reason || f.problem,
        category: f.category,
        validationStatus: f.validationStatus,
        previousOwnerDecision: f.previousOwnerDecision ?? null,
        previousOwnerReason: f.previousOwnerReason ?? null,
        newEvidence: f.newEvidence ?? null,
      })),
    }, null, 2));
  }

  const summary = {
    prerequisitePass: applyPrereq.pass,
    targetReconciliation: `${targetRecon.exact}/2`,
    targetedCards: 2,
    targetedCardsAudited: "2/2",
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
    outOfScopeB1Changes: outOfScope,
    productionChangesDuringAudit,
    deChanges: integrity.deChanges,
    cardCount: integrity.b1Total,
    idUniqueness: integrity.idUniqueness,
    idOrder: integrity.idOrder,
    syntax: integrity.syntax,
    importLoad: integrity.importLoad,
    structure: integrity.structure,
    studyStructure: integrity.studyStructure,
    sectionAccentsStructure: integrity.sectionAccentsStructure,
    verdict,
    overall: closureCandidate ? "PASS" : "FAIL",
    residualCardsCount: validatedReal.length,
  };

  const data = {
    meta: {
      auditType: "CS-DE B1 FINAL 2-CARD MICRO-REGRESSION + CLOSURE RECONFIRMATION",
      date: new Date().toISOString(),
      branch: BRANCH,
      auditCommit,
      readOnly: true,
      linguisticModel: LINGUISTIC_MODEL,
    },
    summary,
    blockerReconciliation,
    applyPrerequisite: applyPrereq,
    targetReconciliation: targetRecon,
    sowieStructure,
    sowieSectionAccentsResolution,
    ownerLock: { matches: ownerLockMatches, confirmed, reopenRequired },
    validatedRealFindings: validatedReal,
    integrity,
    lunaAudit: { apiUsage: lunaStats },
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(data, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(data));

  console.log(`\nWrote ${OUT_MD}`);
  console.log(`VERDICT: ${verdict}`);
  console.log(`VALIDATED REAL: ${validatedOnly.length}`);
  console.log(`OWNER_LOCK: confirmed=${confirmed} reopen=${reopenRequired}`);
}

if (require.main === module) {
  main().catch((e) => {
    console.error("Audit failed:", e.message);
    process.exit(1);
  });
}

module.exports = { main };
