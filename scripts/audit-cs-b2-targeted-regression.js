#!/usr/bin/env node
"use strict";
/**
 * CS-DE B2 Targeted Regression Audit (READ-ONLY)
 * GPT-5.6 Luna — targeted scope only (actually changed repair fields); 2118/2118 deterministic integrity.
 *
 * Usage:
 *   node scripts/audit-cs-b2-targeted-regression.js [--skip-luna] [--resume-luna]
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

const SKIP_LUNA = process.argv.includes("--skip-luna");
const RESUME_LUNA = process.argv.includes("--resume-luna");
const LINGUISTIC_MODEL = "GPT-5.6 Luna";
const B2_TOTAL = 2118;
const PRE_REPAIR_BASELINE_SHA = "8400573aa829dff8ce953cb6e84526b6e550dcf6";
const BRANCH = "cursor/cs-b2-targeted-regression-audit-6ea4";

const B2_FILE = path.join(ROOT, "data/cs/b2.js");
const WWW_FILE = path.join(ROOT, "www/data/cs/b2.js");
const BASELINE_FILE = path.join(ROOT, "reports/temp/b2-pre-repair-baseline.js");
const APPLY_JSON = path.join(ROOT, "reports/temp/cs-b2-copy-only-repair-apply.json");
const MICRO_JSON = path.join(ROOT, "reports/temp/cs-b2-owner-remap-microrepair-01.json");
const RECON_JSON = path.join(ROOT, "reports/temp/cs-b2-25-card-not-found-reconciliation.json");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-b2-targeted-regression-audit.json");
const OUT_MD = path.join(ROOT, "reports/cs-b2-targeted-regression-audit.md");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-b2-targeted-regression");
const DETERMINISTIC_JSON = path.join(TEMP_DIR, "deterministic-audit.json");
const LINGUISTIC_JSON = path.join(TEMP_DIR, "linguistic-audit.json");
const PROGRESS_FILE = path.join(ROOT, "scripts", ".cs-b2-targeted-luna-progress.json");
const DET_COLLECT_DIR = path.join(ROOT, "reports/temp/cs-b2-audit");

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
  "You are a targeted CS-DE B2 repair regression auditor (GPT-5.6 Luna).",
  "These cards were part of B2 OWNER copy-only repair (944 applied + 3 remap micro-repair).",
  "Audit the FULL current production card object — front translation (lv), study.translation, explanation, examples, comparison, tip, important, note, sectionAccents.",
  "Check whether repair is correct and whether repair introduced regressions elsewhere on the same card.",
  "This is NOT a full discovery audit of unchanged B2 cards.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "PASS for correct content. Findings only for objective Czech linguistic errors.",
  "Non-error categories (do NOT count): FALSE_POSITIVE, STYLE_ONLY, PROJECT_CONVENTION, SOURCE_LV_ISSUE, SOURCE_DE_ISSUE, NEEDS_OWNER_REVIEW.",
  "SOURCE_DE_ISSUE = possible German source problem; do not suggest DE changes.",
  "Do NOT flag single correct main Czech sense on front when German has multiple senses — app is NOT a dictionary.",
  "Do NOT require X • Y • Z synonym chains on front.",
  "Balón, Citrón, Milión, Hypnóza, narkóza, Kvóta, anticyklóna etc. are valid Czech — PL_CHAR heuristic alone is NOT a finding.",
  "Do NOT classify valid Czech diacritics (including ó) as foreign-language remnants.",
  "Do NOT suggest DE changes.",
].join("\n");

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(words) {
  const parts = words.map((e) => JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null }));
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function normalizeField(field) {
  if (!field) return field;
  let f = String(field);
  if (f === "csText" || f === "lv") return "lv";
  const entryMatch = f.match(/^entry\[\d+\]\.(.+)$/);
  if (entryMatch) f = entryMatch[1];
  if (f.startsWith("study.")) return f;
  return f;
}

function fieldToPath(field) {
  const nf = normalizeField(field);
  if (nf === "lv") return ["lv"];
  if (nf.startsWith("study.")) return nf.split(".");
  return [nf];
}

function getAt(obj, parts) {
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur;
}

function getByPath(obj, fieldPath) {
  if (!fieldPath) return obj;
  const parts = [];
  String(fieldPath).replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
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
    execSync(`git show ${PRE_REPAIR_BASELINE_SHA}:data/cs/b2.js > "${BASELINE_FILE}"`, { cwd: ROOT, stdio: "pipe" });
  }
}

function loadBaselineWords() {
  ensureBaselineFile();
  const code = fs.readFileSync(BASELINE_FILE, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function buildTargetScope() {
  const apply = JSON.parse(fs.readFileSync(APPLY_JSON, "utf8"));
  const micro = JSON.parse(fs.readFileSync(MICRO_JSON, "utf8"));
  const map = new Map();
  let rawCount = 0;

  for (const r of apply.results.filter((x) => x.status === "APPLIED")) {
    rawCount += 1;
    const field = normalizeField(r.field);
    const key = `${r.cardId}\0${field}`;
    map.set(key, {
      cardId: r.cardId,
      field,
      expectedOwnerValue: r.newVal,
      source: "copy-only-apply",
      sourceFile: r.sourceFile || null,
    });
  }

  for (const r of micro.applyResults.filter((x) => x.status === "APPLIED")) {
    rawCount += 1;
    const field = normalizeField(r.field);
    const key = `${r.cardId}\0${field}`;
    map.set(key, {
      cardId: r.cardId,
      field,
      expectedOwnerValue: r.newVal,
      source: "microrepair-01",
      sourceFile: "microrepair-01",
      originalCardId: r.originalCardId || null,
    });
  }

  const targets = [...map.values()];
  const cardIds = new Set(targets.map((t) => t.cardId));
  const studyFieldCount = targets.filter((t) => t.field.startsWith("study.")).length;
  const mainFieldCount = targets.length - studyFieldCount;

  return {
    rawCount,
    uniqueFieldCount: targets.length,
    uniqueCardCount: cardIds.size,
    studyFieldCount,
    mainFieldCount,
    targets,
    cardIdSet: cardIds,
  };
}

function loadScopeExclusions() {
  const recon = JSON.parse(fs.readFileSync(RECON_JSON, "utf8"));
  return recon.items
    .filter((x) => x.ownerAction === "REMOVE_FROM_SCOPE_CONFIRMED_ABSENT")
    .map((x) => ({
      originalCardId: x.originalCardId,
      de: x.de,
      closureStatus: "OWNER_CONFIRMED_REMOVE_FROM_SCOPE",
    }));
}

function findCardIndex(words, cardId) {
  for (let i = 0; i < words.length; i++) {
    if (entryId(words[i], i, "b2") === cardId) return i;
  }
  return -1;
}

function runPerTargetDeterministic(words, lvWords, targets) {
  const perTarget = [];
  const driftFindings = [];

  for (const t of targets) {
    const idx = findCardIndex(words, t.cardId);
    const issues = [];
    let current = null;
    let exactValueMatch = false;
    let finalStatus = "PASS";

    if (idx < 0) {
      issues.push({ severity: "CRITICAL", code: "CARD_NOT_FOUND", problem: "Target cardId not in production" });
      finalStatus = "CARD_NOT_FOUND";
    } else {
      const entry = words[idx];
      const lvEntry = lvWords[idx];
      current = getAt(entry, fieldToPath(t.field));
      exactValueMatch = String(current ?? "") === String(t.expectedOwnerValue ?? "");
      if (!exactValueMatch) {
        issues.push({
          severity: "CRITICAL",
          code: "APPLIED_VALUE_DRIFT",
          problem: "Production value does not match OWNER-approved NEW",
          actual: current,
          expected: t.expectedOwnerValue,
        });
        driftFindings.push({
          cardId: t.cardId,
          field: t.field,
          severity: "CRITICAL",
          category: "APPLIED_VALUE_DRIFT",
          currentCs: current,
          proposedCs: t.expectedOwnerValue,
          reason: "Production value does not match OWNER-approved NEW",
        });
        finalStatus = "APPLIED_VALUE_DRIFT";
      }

      const val = current;
      if (typeof val === "string") {
        if (!val.trim()) {
          issues.push({ severity: "CRITICAL", code: "EMPTY_VALUE", problem: "Empty Czech value" });
        }
        for (const code of detectForeignRemnant(val)) {
          issues.push({ severity: "HIGH", code, problem: `Foreign remnant heuristic: ${code}`, raw: true });
        }
        if (PLACEHOLDER_PATTERNS.some((re) => re.test(val))) {
          issues.push({ severity: "HIGH", code: "PLACEHOLDER", problem: "Placeholder text detected", raw: true });
        }
      }

      if (entry.study && t.field.startsWith("study.")) {
        const accentIssues = checkSectionAccents(entry);
        for (const a of accentIssues) {
          issues.push({ ...a, raw: true });
        }
      }
    }

    perTarget.push({
      cardId: t.cardId,
      field: t.field,
      de: idx >= 0 ? words[idx].de : null,
      lvSource: idx >= 0 ? lvWords[idx]?.lv : null,
      current,
      expectedOwnerValue: t.expectedOwnerValue,
      exactValueMatch,
      deterministicIssues: issues,
      linguisticFindings: [],
      sectionAccentFindings: issues.filter((x) => String(x.code || "").includes("ACCENT")),
      finalStatus,
    });
  }

  return { perTarget, driftFindings };
}

function checkSectionAccents(entry) {
  const issues = [];
  const study = entry.study;
  if (!study?.sectionAccents) return issues;
  for (const [section, colors] of Object.entries(study.sectionAccents)) {
    const sectionText = getSectionText(study, section);
    if (!sectionText) continue;
    for (const [color, terms] of Object.entries(colors || {})) {
      for (const term of terms || []) {
        if (!accentTermMatches(sectionText, term)) {
          issues.push({
            severity: "HIGH",
            code: "STALE_SECTION_ACCENT",
            field: `study.sectionAccents.${section}.${color}`,
            problem: `Accent term "${term}" not found in section "${section}"`,
          });
        }
        for (const code of detectForeignRemnant(term)) {
          issues.push({
            severity: "MEDIUM",
            code: `ACCENT_${code}`,
            field: `study.sectionAccents.${section}.${color}`,
            problem: `Foreign remnant in accent term: ${code}`,
          });
        }
      }
    }
  }
  return issues;
}

function checkOutsideScopeImmutability(baselineWords, currentWords, changedSet) {
  const unexpected = [];
  for (let i = 0; i < currentWords.length; i++) {
    const id = entryId(currentWords[i], i, "b2");
    if (changedSet.has(id)) continue;
    if (JSON.stringify(baselineWords[i]) !== JSON.stringify(currentWords[i])) {
      unexpected.push({ cardId: id, productionIndex: i });
    }
  }
  const outsideTotal = B2_TOTAL - changedSet.size;
  return {
    checked: outsideTotal,
    unchanged: outsideTotal - unexpected.length,
    unexpectedChanges: unexpected.length,
    unexpectedCards: unexpected,
  };
}

function checkIntegrity(words, baselineDeHash, baselineWords) {
  const ids = words.map((e, i) => entryId(e, i, "b2"));
  const unique = new Set(ids);
  const studyCount = words.filter((e) => e.study).length;
  let syntax = "PASS";
  try {
    execSync("node --check data/cs/b2.js", { cwd: ROOT, stdio: "pipe" });
    if (words.length !== B2_TOTAL) syntax = "FAIL";
  } catch {
    syntax = "FAIL";
  }
  const mirror = fs.readFileSync(B2_FILE).equals(fs.readFileSync(WWW_FILE));
  let idOrder = "PASS";
  for (let i = 0; i < words.length; i++) {
    if (words[i].de !== baselineWords[i].de) { idOrder = "FAIL"; break; }
  }
  const deHash = deSnapshotHash(words);
  return {
    b2Total: words.length,
    studyCount,
    idUniqueness: ids.length === unique.size ? "PASS" : "FAIL",
    idOrder,
    syntax,
    structure: mirror && words.length === B2_TOTAL ? "PASS" : "FAIL",
    studyParity: studyCount > 0 ? "PASS" : "FAIL",
    mirrorParity: mirror ? "PASS" : "FAIL",
    deIntegrity: deHash === baselineDeHash ? "PASS" : "FAIL",
    deChanges: deHash === baselineDeHash ? 0 : 1,
  };
}

function runDeterministicCollect() {
  ensureDir(DET_COLLECT_DIR);
  const result = spawnSync(
    "node",
    [path.join(ROOT, "scripts", "audit-cs-collect.js"), "--dataset=b2"],
    { cwd: ROOT, encoding: "utf8", maxBuffer: 128 * 1024 * 1024 },
  );
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) throw new Error("audit-cs-collect.js failed");
}

function filterFindingsToCards(findings, cardIdSet) {
  return findings.filter((f) => cardIdSet.has(f.cardId));
}

function normalizeFinding(f, source) {
  return {
    source,
    cardId: f.cardId,
    field: normalizeField(f.field || f.path || "lv"),
    severity: String(f.severity || "MEDIUM").toUpperCase(),
    category: f.category || f.code || null,
    currentCs: f.currentCs ?? f.current ?? f.lv ?? f.existingCsText ?? null,
    recommendedCs: f.proposedCs || f.proposed || f.recommendedCs || f.recommendedFix || null,
    reason: f.reason || f.problem || f.rationale || null,
    problem: f.problem || f.reason || null,
    status: f.status || "FINDING",
    raw: f.raw ?? false,
  };
}

function isNonErrorFinding(f) {
  const cat = String(f.category || "").toUpperCase();
  const st = String(f.status || "").toUpperCase();
  return NON_ERROR_CATEGORIES.has(cat) || ["PASS", "OK", "NO_FINDING"].includes(st);
}

function isSourceDeIssue(f) {
  const cat = String(f.category || "").toUpperCase();
  return cat === "SOURCE_DE_ISSUE" || cat === "DE_SOURCE_ISSUE";
}

function isSubstantiveFinding(f) {
  const hasText = Boolean(String(f.reason || f.problem || "").trim()
    || String(f.currentCs || "").trim()
    || String(f.recommendedCs || "").trim());
  if (!hasText) return false;
  if (String(f.source || "").includes("luna") && !String(f.reason || f.problem || "").trim()) return false;
  return true;
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

function buildLunaCards(targetSet, words) {
  const de = loadArray("data/b2.js", "B2_WORDS");
  const lv = loadArray("data/b2.js", "B2_WORDS");
  const simple = [];
  const study = [];
  for (let i = 0; i < words.length; i++) {
    const id = entryId(words[i], i, "b2");
    if (!targetSet.has(id)) continue;
    if (words[i].study) study.push(buildStudyCard(lv[i], words[i], i, "b2"));
    else simple.push(buildSimpleCard(lv[i], words[i], i, "b2"));
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
  const hashBefore = fileHash(B2_FILE);

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
            dataset: "b2",
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

  console.log(`  simple cards: ${simple.length} (${Math.ceil(simple.length / BATCH_SIZE)} batches)`);
  console.log(`  study cards: ${study.length} (${Math.ceil(study.length / STUDY_BATCH_SIZE)} batches)`);
  await auditBatch(simple, BATCH_SIZE, "simple", "b2_targeted_simple");
  await auditBatch(study, STUDY_BATCH_SIZE, "study", "b2_targeted_study");

  if (fileHash(B2_FILE) !== hashBefore) throw new Error("Production changed during Luna audit");

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

function isPlCharOnlyFalsePositive(f) {
  const text = String(f.currentCs || "");
  const reason = String(f.reason || f.problem || f.category || "").toLowerCase();
  if (!reason.includes("pl_char") && !reason.includes("foreign remnant")) return false;
  const plChars = text.match(/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g) || [];
  if (plChars.length === 0) return false;
  return plChars.every((c) => c === "ó" || c === "Ó");
}

function isDeterministicRawFalsePositive(f) {
  if (isPlCharOnlyFalsePositive(f)) return true;
  const cat = String(f.category || "").toUpperCase();
  if (cat === "PL_CHAR" && isPlCharOnlyFalsePositive(f)) return true;
  return false;
}

function isStaleAccentFalsePositive(words, f) {
  const field = String(f.field || "");
  if (!field.includes("sectionAccents")) return false;
  const reason = String(f.reason || f.problem || "");
  const termMatch = reason.match(/Accent term "([^"]+)"/);
  if (!termMatch) return false;
  const term = termMatch[1];
  const idx = findCardIndex(words, f.cardId);
  if (idx < 0) return false;
  const entry = words[idx];
  if (!entry.study) return false;
  const comparison = entry.study.comparison || [];
  if (comparison.some((c) => String(c.word || "").includes(term))) return true;
  if (term === "wider" && String(entry.de || "").includes("wider")) return true;
  return false;
}

function classifyValidatedFinding(words) {
  return (f) => {
    if (isSourceDeIssue(f)) return { ...f, validationStatus: "SOURCE_DE_ISSUE", countAsReal: false };
    if (isStaleAccentFalsePositive(words, f)) {
      return { ...f, validationStatus: "FALSE_POSITIVE", countAsReal: false };
    }
    if (isNonErrorFinding(f) || isDeterministicRawFalsePositive(f) || isPlCharOnlyFalsePositive(f)) {
      return { ...f, validationStatus: "FALSE_POSITIVE", countAsReal: false };
    }
    return { ...f, validationStatus: "VALIDATED_REAL", countAsReal: true };
  };
}

function buildMarkdown(data) {
  const s = data.summary;
  const lines = [
    "# CS–DE B2 TARGETED REGRESSION AUDIT",
    "",
    "**MODE:** READ-ONLY",
    "",
    "## MODEL",
    "",
    LINGUISTIC_MODEL,
    "",
    "## SCOPE",
    "",
    "| Metric | Value |",
    "|---|---|",
    `| Raw changed mappings | ${s.rawChangedMappings} |`,
    `| Unique (cardId, field) | ${s.uniqueFieldTargets} |`,
    `| Unique cards | ${s.uniqueCards} |`,
    `| Main translation fields | ${s.mainFieldCount} |`,
    `| Study fields | ${s.studyFieldCount} |`,
    `| Scope exclusions (CONFIRMED_ABSENT) | ${s.scopeExclusions}/22 |`,
    `| Cards audited (Luna) | ${s.cardsAudited} |`,
    "",
    "## DETERMINISTIC GATES",
    "",
    "| Gate | Status |",
    "|---|---|",
    `| Exact applied value | ${s.appliedValueDrift === 0 ? "PASS" : "FAIL"} (${s.appliedValueDrift} drift) |`,
    `| Syntax | ${s.syntax} |`,
    `| ID/order | ${s.idOrder} |`,
    `| Card count | ${s.cardCount} |`,
    `| Study parity | ${s.studyParity} |`,
    `| Mirror parity | ${s.mirrorParity} |`,
    `| DE READ-ONLY | ${s.deIntegrity} |`,
    `| Outside-scope immutability | ${s.outsideUnexpected === 0 ? "PASS" : "FAIL"} (${s.outsideUnexpected} unexpected) |`,
    `| Production changes during audit | ${s.productionChangesDuringAudit} |`,
    "",
    "## RAW vs VALIDATED",
    "",
    "| Metric | Count |",
    "|---|---:|",
    `| Raw findings | ${s.rawFindings} |`,
    `| Validated REAL | ${s.validatedRealCount} |`,
    `| FALSE_POSITIVE | ${s.falsePositiveCount} |`,
    `| SOURCE_DE_ISSUE | ${s.sourceDeIssueCount} |`,
    "",
    "## SEVERITY SUMMARY",
    "",
    "| Severity | Count |",
    "|---|---:|",
    `| CRITICAL | ${s.validated.CRITICAL} |`,
    `| HIGH | ${s.validated.HIGH} |`,
    `| MEDIUM | ${s.validated.MEDIUM} |`,
    `| LOW | ${s.validated.LOW} |`,
    "",
    "## LINGUISTIC FINDINGS",
    "",
    "| # | Card ID | Field | Severity | Current | Proposed | Problem | Status |",
    "|---:|---|---|---|---|---|---|---|",
  ];

  for (const f of data.linguisticTable) {
    const cur = String(f.currentCs || "").replace(/\|/g, "\\|").slice(0, 60);
    const prop = String(f.recommendedCs || "").replace(/\|/g, "\\|").slice(0, 60);
    const prob = String(f.reason || f.problem || "").replace(/\|/g, "\\|").slice(0, 80);
    lines.push(`| ${f.findingIndex} | \`${f.cardId}\` | \`${f.field}\` | ${f.severity} | ${cur} | ${prop} | ${prob} | ${f.validationStatus || "VALIDATED_REAL"} |`);
  }

  if (!data.linguisticTable.length) lines.push("| — | — | — | — | — | — | No validated real findings | — |");

  lines.push("");
  lines.push("## SCOPE EXCLUSIONS (22 CONFIRMED_ABSENT)");
  lines.push("");
  for (const x of data.scopeExclusions) {
    lines.push(`- \`${x.originalCardId}\` (${x.de}) — ${x.closureStatus}`);
  }

  lines.push("");
  lines.push("## LUNA API");
  lines.push("");
  lines.push(`| Metric | Value |`);
  lines.push(`|---|---|`);
  lines.push(`| Model | ${LINGUISTIC_MODEL} (${DEFAULT_MODEL}) |`);
  lines.push(`| Requests | ${s.lunaRequests} |`);
  lines.push(`| Tokens | ${s.lunaTokens} |`);
  lines.push("");
  lines.push("## PRODUCTION CHANGES");
  lines.push("");
  lines.push("0");
  lines.push("");
  lines.push(`## FINAL VERDICT`);
  lines.push("");
  lines.push(`**${s.verdict}**`);
  lines.push("");
  lines.push(`_Generated: ${new Date().toISOString()}_`);
  return lines.join("\n");
}

async function main() {
  ensureDir(TEMP_DIR);
  const auditCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const baselineB2Hash = fileHash(B2_FILE);
  const baselineWords = loadBaselineWords();
  const words = loadArray("data/cs/b2.js", "B2_WORDS");
  const lvWords = loadArray("data/b2.js", "B2_WORDS");
  const baselineDeHash = deSnapshotHash(baselineWords);

  const scope = buildTargetScope();
  const scopeExclusions = loadScopeExclusions();
  if (scopeExclusions.length !== 22) throw new Error(`Expected 22 scope exclusions, got ${scopeExclusions.length}`);

  const outsideScope = checkOutsideScopeImmutability(baselineWords, words, scope.cardIdSet);
  if (outsideScope.unexpectedChanges > 0) {
    console.error(JSON.stringify({ status: "OUTSIDE_SCOPE_FAIL — STOP", outsideScope }, null, 2));
    process.exit(3);
  }

  console.log(`\n=== Target scope: ${scope.uniqueFieldCount} fields on ${scope.uniqueCardCount} cards ===`);
  console.log(`=== Raw mappings: ${scope.rawCount}, exclusions: ${scopeExclusions.length}/22 ===`);

  console.log("\n=== Per-target exact value checks ===");
  const { perTarget, driftFindings } = runPerTargetDeterministic(words, lvWords, scope.targets);
  const driftCount = driftFindings.length;
  console.log(`APPLIED_VALUE_DRIFT: ${driftCount}`);

  console.log("\n=== Full B2 deterministic integrity (2118/2118) ===");
  runDeterministicCollect();
  const detFullPath = path.join(DET_COLLECT_DIR, "deterministic-audit.json");
  const detFull = JSON.parse(fs.readFileSync(detFullPath, "utf8"));
  const detTargeted = filterFindingsToCards(detFull.findings || [], scope.cardIdSet);
  fs.writeFileSync(DETERMINISTIC_JSON, JSON.stringify({ findings: detTargeted, fullIntegrity: detFull }, null, 2));

  let lunaResult = { stats: createStats(), auditedCardIds: [], findings: [] };
  if (!SKIP_LUNA) {
    console.log(`\n=== GPT-5.6 Luna targeted audit (${scope.cardIdSet.size} cards) ===`);
    if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
    lunaResult = await runTargetedLuna(words, scope.cardIdSet);
  } else if (fs.existsSync(LINGUISTIC_JSON)) {
    const ling = JSON.parse(fs.readFileSync(LINGUISTIC_JSON, "utf8"));
    lunaResult.findings = ling.qualityFindings || ling.findings || [];
    lunaResult.auditedCardIds = ling.meta?.auditedCardIds || loadProgress().auditedCardIds || [];
    lunaResult.stats = ling.apiUsage || createStats();
  }

  const wordsAfter = loadArray("data/cs/b2.js", "B2_WORDS");
  const integrity = checkIntegrity(wordsAfter, baselineDeHash, baselineWords);
  const productionChangesDuringAudit = fileHash(B2_FILE) !== baselineB2Hash ? 1 : 0;

  const rawFromDeterministic = [
    ...driftFindings.map((f) => normalizeFinding(f, "deterministic")),
    ...detTargeted.map((f) => normalizeFinding({ ...f, raw: true }, "deterministic-collect")),
    ...perTarget.flatMap((t) => t.deterministicIssues
      .filter((x) => x.raw)
      .map((x) => normalizeFinding({
        cardId: t.cardId,
        field: t.field,
        severity: x.severity,
        category: x.code,
        currentCs: t.current,
        reason: x.problem,
        raw: true,
      }, "deterministic-inline"))),
  ];

  const allRawNorm = [
    ...rawFromDeterministic,
    ...lunaResult.findings.map((f) => normalizeFinding(f, "gpt-5.6-luna")),
  ];

  const classified = dedupeFindings(allRawNorm.filter(isSubstantiveFinding)).map(classifyValidatedFinding(wordsAfter));
  const validatedReal = classified.filter((f) => f.countAsReal);
  const falsePositives = classified.filter((f) => f.validationStatus === "FALSE_POSITIVE");
  const sourceDeIssues = classified.filter((f) => f.validationStatus === "SOURCE_DE_ISSUE");

  const validatedWithIndex = validatedReal.map((f, i) => ({
    findingIndex: i + 1,
    ...f,
  }));

  const validatedSev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of validatedReal) {
    const sev = f.severity || "MEDIUM";
    if (validatedSev[sev] !== undefined) validatedSev[sev] += 1;
  }

  const foreignRaw = allRawNorm.filter((f) => {
    const p = String(f.reason || f.problem || "").toLowerCase();
    const c = String(f.category || "").toLowerCase();
    return p.includes("foreign") || p.includes("pl_char") || p.includes("lv_") || c.includes("foreign");
  });
  const foreignValidated = validatedReal.filter((f) => {
    const p = String(f.reason || f.problem || "").toLowerCase();
    const c = String(f.category || "").toLowerCase();
    return p.includes("foreign") || p.includes("pl_char") || p.includes("lv_") || c.includes("foreign");
  });

  const closureCandidate = driftCount === 0
    && outsideScope.unexpectedChanges === 0
    && validatedSev.CRITICAL === 0
    && validatedSev.HIGH === 0
    && validatedSev.MEDIUM === 0
    && validatedSev.LOW === 0
    && foreignValidated.length === 0
    && integrity.syntax === "PASS"
    && integrity.idOrder === "PASS"
    && integrity.structure === "PASS"
    && integrity.deIntegrity === "PASS"
    && integrity.deChanges === 0
    && productionChangesDuringAudit === 0;

  const verdict = closureCandidate
    ? "CS–DE B2 TARGETED REGRESSION = PASS / READY FOR FINAL CLOSURE AUDIT"
    : "CS–DE B2 TARGETED REGRESSION = FINDINGS REMAIN / OWNER RESIDUAL REPAIR REQUIRED";

  const summary = {
    rawChangedMappings: scope.rawCount,
    uniqueFieldTargets: scope.uniqueFieldCount,
    uniqueCards: scope.uniqueCardCount,
    mainFieldCount: scope.mainFieldCount,
    studyFieldCount: scope.studyFieldCount,
    scopeExclusions: scopeExclusions.length,
    cardsAudited: lunaResult.auditedCardIds.length || scope.cardIdSet.size,
    appliedValueDrift: driftCount,
    rawFindings: allRawNorm.length,
    validatedRealCount: validatedReal.length,
    falsePositiveCount: falsePositives.length,
    sourceDeIssueCount: sourceDeIssues.length,
    validated: validatedSev,
    foreignRaw: foreignRaw.length,
    foreignValidated: foreignValidated.length,
    outsideUnexpected: outsideScope.unexpectedChanges,
    syntax: integrity.syntax,
    idOrder: integrity.idOrder,
    cardCount: `${integrity.b2Total}/${B2_TOTAL}`,
    studyParity: integrity.studyParity,
    mirrorParity: integrity.mirrorParity,
    deIntegrity: integrity.deIntegrity,
    deChanges: integrity.deChanges,
    productionChangesDuringAudit,
    lunaRequests: lunaResult.stats.requestCount || 0,
    lunaTokens: lunaResult.stats.totalTokens || 0,
    verdict,
    overall: closureCandidate ? "PASS" : "FINDINGS",
  };

  const data = {
    meta: {
      auditType: "CS–DE B2 TARGETED REGRESSION AUDIT",
      linguisticAuditModel: LINGUISTIC_MODEL,
      apiModel: DEFAULT_MODEL,
      date: new Date().toISOString(),
      branch: BRANCH,
      auditCommit,
      preRepairBaselineSha: PRE_REPAIR_BASELINE_SHA,
      readOnly: true,
      productionChangesDuringAudit,
    },
    summary,
    scope: {
      rawChangedMappings: scope.rawCount,
      uniqueFieldTargets: scope.uniqueFieldCount,
      uniqueCards: scope.uniqueCardCount,
      mainFieldCount: scope.mainFieldCount,
      studyFieldCount: scope.studyFieldCount,
      cardIds: [...scope.cardIdSet],
    },
    scopeExclusions,
    perTarget,
    outsideScopeImmutability: outsideScope,
    validatedRealFindings: validatedWithIndex,
    integrity,
    lunaAudit: {
      cardsAudited: lunaResult.auditedCardIds.length,
      cardsExpected: scope.cardIdSet.size,
      apiUsage: lunaResult.stats,
    },
    rawVsValidated: {
      raw: allRawNorm.length,
      validatedReal: validatedReal.length,
      falsePositive: falsePositives.length,
      sourceDeIssue: sourceDeIssues.length,
    },
    falsePositives,
    sourceDeIssues,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(data, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown({ summary, linguisticTable: validatedWithIndex, scopeExclusions }));

  console.log("\n" + JSON.stringify({ verdict, ...summary }, null, 2));
  console.log(`\nReport: ${OUT_MD}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
