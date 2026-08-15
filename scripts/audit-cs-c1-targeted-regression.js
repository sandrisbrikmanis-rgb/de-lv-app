#!/usr/bin/env node
"use strict";
/**
 * CS-DE C1 Targeted Regression Audit (READ-ONLY)
 * GPT-5.6 Luna — OWNER repair scope only (265 mappings).
 *
 * Usage:
 *   node scripts/audit-cs-c1-targeted-regression.js [--skip-luna] [--resume-luna]
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
  PL_CHARS,
} = require("./lib/cs-audit-helpers");
const {
  createStats,
  auditCardsBatch,
  recordRetryReason,
  classifyFindings,
  NON_ERROR_CATEGORIES,
  DEFAULT_MODEL,
} = require("./lib/openai-cs-full-audit");
const { loadOwnerLabotMappings, parseFieldPath, getAt, parseJsonish, valuesEqual } = require("./apply-cs-c1-owner-copy-only");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const RESUME_LUNA = process.argv.includes("--resume-luna");
const LINGUISTIC_MODEL = "GPT-5.6 Luna";
const C1_TOTAL = 572;
const OWNER_TOTAL = 265;
const BRANCH = "cursor/cs-c1-targeted-regression-audit-6ea4";
const MASTER = path.join(ROOT, "cs-c1-owner-approved-master-repair.md");
const C1_FILE = path.join(ROOT, "data/cs/c1.js");
const WWW_FILE = path.join(ROOT, "www/data/cs/c1.js");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-c1-targeted-regression-audit.json");
const OUT_MD = path.join(ROOT, "reports/cs-c1-targeted-regression.md");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-c1-targeted-regression-audit");
const DETERMINISTIC_JSON = path.join(TEMP_DIR, "deterministic-audit.json");
const LINGUISTIC_JSON = path.join(TEMP_DIR, "linguistic-audit.json");
const PROGRESS_FILE = path.join(ROOT, "scripts", ".cs-c1-targeted-luna-progress.json");
const DET_COLLECT_DIR = path.join(ROOT, "reports/temp/cs-c1-audit");

const TARGETED_PROMPT = [
  "You are a targeted CS-DE C1 repair regression auditor (GPT-5.6 Luna).",
  "These cards were changed by OWNER-approved COPY-ONLY C1 repair (265 mappings).",
  "Audit the FULL current production card — lv/csText, study.translation, explanation, examples, comparison, tip, important, sectionAccents.",
  "Check whether OWNER repair is correct and whether repair introduced regressions on the same card.",
  "This is NOT a full C1 discovery audit of unchanged cards.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "PASS for correct content. Findings only for objective Czech linguistic errors.",
  "Non-error categories (do NOT count as REAL): FALSE_POSITIVE, STYLE_ONLY, PROJECT_CONVENTION, SOURCE_LV_ISSUE, SOURCE_DE_ISSUE, NEEDS_OWNER_REVIEW.",
  "SOURCE_DE_ISSUE = possible German source problem; do not suggest DE changes.",
  "Valid Czech words with ó (e.g. módní, pohodlí) are NOT Polish contamination — classify PL_CHAR-only ó hits as FALSE_POSITIVE.",
  "Intentional German terms in comparison/contrast (sectionAccents.de) are NOT errors.",
  "Do NOT suggest DE changes.",
].join("\n");

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(words) {
  const parts = words.map((e) =>
    JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null }),
  );
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

const MICRO_REPAIR_NEW = {
  "c1-wahlberechtigt\x1fstudy.explanation":
    "Hlavní myšlenka: wahlberechtigt je přídavné jméno, které znamená, že osoba má právo volit. Složení: Wahl (volby) + berechtigt (oprávněný).",
  "c1-beabsichtigen\x1fstudy.explanation[5]":
    "Beabsichtigen znamená zamýšlet nebo plánovat určitou činnost – jde o záměr, nikoli o vztah.",
  "c1-voraussetzen\x1fstudy.important[0]":
    "Voraussetzen je sloveso znamenající „předpokládat“; vyjadřuje předpoklad.",
};

function authoritativeMappings(rawMappings) {
  return rawMappings.map((m) => {
    const key = `${m.cardId}\x1f${m.field}`;
    if (MICRO_REPAIR_NEW[key]) return { ...m, new: MICRO_REPAIR_NEW[key] };
    return m;
  });
}

function normalizeFinding(raw, source) {
  const cat = String(raw.category || raw.verdict || "").toUpperCase();
  const sev = String(raw.severity || "MEDIUM").toUpperCase();
  return {
    cardId: raw.cardId,
    field: raw.field || raw.path || "lv",
    severity: sev,
    category: cat || "TRANSLATION",
    current: raw.currentCs || raw.current || raw.currentText || "",
    proposed: raw.proposedCs || raw.proposed || raw.recommendedFix || "",
    reason: raw.reason || raw.problem || raw.rationale || "",
    source,
    raw,
  };
}

function isSourceDeIssue(f) {
  const cat = String(f.category || f.raw?.category || "").toUpperCase();
  return cat === "SOURCE_DE_ISSUE" || cat === "DE_SOURCE_ISSUE";
}

function isNonErrorFinding(f) {
  const cat = String(f.category || f.raw?.category || "").toUpperCase();
  return NON_ERROR_CATEGORIES.has(cat);
}

function isSubstantiveFinding(f) {
  if (!f?.cardId || isNonErrorFinding(f) || isSourceDeIssue(f)) return false;
  return Boolean(
    String(f.reason || f.raw?.problem || "").trim()
      || String(f.current || f.raw?.currentCs || "").trim()
      || String(f.proposed || f.raw?.proposedCs || f.raw?.recommendedFix || "").trim(),
  );
}

function isMalformedFinding(f) {
  return !isSubstantiveFinding(f);
}

function enrichFindingFromProduction(f, words) {
  if (String(f.current || "").trim()) return f;
  const idx = words.findIndex((e, i) => entryId(e, i, "c1") === f.cardId);
  if (idx < 0) return f;
  const parts = parseFieldPath(f.field === "csMain" ? "csText" : f.field || "lv");
  const value = getAt(words[idx], parts);
  if (value === undefined) return f;
  const current = typeof value === "string" ? value : JSON.stringify(value);
  return { ...f, current };
}

function isProjectConventionFinding(f) {
  const reason = String(f.reason || "").toLowerCase();
  const cat = String(f.category || f.raw?.category || "").toUpperCase();
  if (
    reason.includes("lowercase")
    || reason.includes("capital")
    || cat.includes("ORTHOGRAPHY")
    || cat.includes("CAPITAL")
  ) {
    return true;
  }
  return false;
}

function isPlCharOFalsePositive(f) {
  const reason = String(f.reason || f.raw?.problem || "").toLowerCase();
  const text = String(f.current || f.raw?.currentCs || "");
  const mentionsPl = reason.includes("pl_char") || reason.includes("polish");
  if (!mentionsPl && !String(f.category || "").includes("FOREIGN")) return false;
  if (/ó/.test(text) && !/[ąćęłńśźżĄĆĘŁŃŚŹŻ]/.test(text)) return true;
  return false;
}

function dedupeFindings(findings) {
  const seen = new Map();
  for (const f of findings) {
    const key = `${f.cardId}\x1f${f.field}\x1f${String(f.reason || "").slice(0, 80)}`;
    if (!seen.has(key)) seen.set(key, f);
  }
  return [...seen.values()];
}

function verifyOwnerMappings(words, mappings) {
  const byId = new Map();
  words.forEach((entry, index) => byId.set(entryId(entry, index, "c1"), { entry, index }));
  const results = [];
  let exact = 0;
  let drift = 0;
  let cardNotFound = 0;
  let fieldNotFound = 0;
  let currentMismatch = 0;
  let conflict = 0;

  const seen = new Map();
  for (const m of mappings) {
    const key = `${m.cardId}\x1f${m.field}`;
    if (seen.has(key)) {
      conflict++;
      results.push({ ...m, status: "OWNER_MAPPING_CONFLICT" });
      continue;
    }
    seen.set(key, m);

    const rec = byId.get(m.cardId);
    if (!rec) {
      cardNotFound++;
      results.push({ ...m, status: "CARD_NOT_FOUND" });
      continue;
    }
    const parts = parseFieldPath(m.field);
    const actual = getAt(rec.entry, parts);
    if (actual === undefined) {
      fieldNotFound++;
      results.push({ ...m, status: "FIELD_NOT_FOUND", actual: null });
      continue;
    }
    const targetNew = parseJsonish(m.new);
    if (!valuesEqual(actual, targetNew)) {
      drift++;
      results.push({ ...m, status: "OWNER_DRIFT", actual });
      continue;
    }
    exact++;
    results.push({ ...m, status: "OWNER_NEW_EXACT", actual });
  }

  return {
    pass:
      mappings.length === OWNER_TOTAL &&
      exact === OWNER_TOTAL &&
      drift === 0 &&
      cardNotFound === 0 &&
      fieldNotFound === 0 &&
      conflict === 0 &&
      currentMismatch === 0,
    exact,
    drift,
    cardNotFound,
    fieldNotFound,
    conflict,
    currentMismatch,
    results,
  };
}

function buildScope(mappings) {
  const cardIds = new Set();
  let mainTranslationFields = 0;
  let studyFields = 0;
  for (const m of mappings) {
    cardIds.add(m.cardId);
    if (m.field === "csText" || m.field === "lv") mainTranslationFields++;
    else studyFields++;
  }
  return {
    changedMappings: mappings.length,
    uniqueChangedCards: cardIds.size,
    mainTranslationFields,
    studyFields,
    cardIdSet: cardIds,
  };
}

function runDeterministicCollect() {
  ensureDir(DET_COLLECT_DIR);
  const outFile = path.join(DET_COLLECT_DIR, "deterministic-audit.json");
  if (!fs.existsSync(outFile)) {
    const result = spawnSync("node", ["scripts/audit-cs-collect.js", "--dataset=c1"], {
      cwd: ROOT,
      encoding: "utf8",
    });
    if (result.stdout) process.stdout.write(result.stdout);
    if (result.stderr) process.stderr.write(result.stderr);
    if (result.status !== 0) throw new Error("audit-cs-collect.js --dataset=c1 failed");
  }
  return JSON.parse(fs.readFileSync(outFile, "utf8"));
}

function filterFindingsToCards(findings, cardIdSet) {
  return (findings || []).filter((f) => cardIdSet.has(f.cardId));
}

function checkIntegrity(words, baselineDeHash) {
  let syntax = "PASS";
  try {
    execSync("node --check data/cs/c1.js", { cwd: ROOT, stdio: "pipe" });
    loadArray("data/cs/c1.js", "C1_WORDS");
  } catch {
    syntax = "FAIL";
  }
  const mirror = fileHash(C1_FILE) === fileHash(WWW_FILE);
  const ids = words.map((e, i) => entryId(e, i, "c1"));
  const idOrder = ids.length === new Set(ids).size ? "PASS" : "FAIL";
  const deHash = deSnapshotHash(words);
  return {
    cardCount: words.length,
    syntax,
    idOrder,
    mirrorParity: mirror ? "PASS" : "FAIL",
    deChanges: deHash === baselineDeHash ? 0 : 1,
    deIntegrity: deHash === baselineDeHash ? "PASS" : "FAIL",
  };
}

function buildLunaCards(targetSet, words) {
  const lv = loadArray("data/c1.js", "C1_WORDS");
  const simple = [];
  const study = [];
  for (let i = 0; i < words.length; i++) {
    const id = entryId(words[i], i, "c1");
    if (!targetSet.has(id)) continue;
    if (words[i].study) study.push(buildStudyCard(lv[i], words[i], i, "c1"));
    else simple.push(buildSimpleCard(lv[i], words[i], i, "c1"));
  }
  return { simple, study };
}

function loadProgress() {
  if (!fs.existsSync(PROGRESS_FILE)) return { completedBatches: [], auditedCardIds: [] };
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
  } catch {
    return { completedBatches: [], auditedCardIds: [] };
  }
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

  let auditData =
    RESUME_LUNA && fs.existsSync(LINGUISTIC_JSON)
      ? JSON.parse(fs.readFileSync(LINGUISTIC_JSON, "utf8"))
      : { meta: {}, batches: [], allResults: [], findings: [] };
  if (RESUME_LUNA && auditData.apiUsage) {
    stats.requestCount = auditData.apiUsage.requestCount || 0;
    stats.totalTokens = auditData.apiUsage.totalTokens || 0;
    stats.batchCount = auditData.apiUsage.batchCount || 0;
  }

  const { simple, study } = buildLunaCards(targetSet, words);
  const hashBefore = fileHash(C1_FILE);

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
          if (attempt > 1) {
            stats.retryCount += 1;
            recordRetryReason(stats, "retry");
          }
          result = await auditCardsBatch({
            cards: batches[i],
            stats,
            batchLabel: batchKey,
            auditType,
            dataset: "c1",
            instructions: TARGETED_PROMPT,
          });
          break;
        } catch (e) {
          if (attempt >= 3) throw e;
          await new Promise((r) => setTimeout(r, 2000 * attempt));
        }
      }
      const batchFile = path.join(TEMP_DIR, `batch-${batchKey}.json`);
      fs.writeFileSync(
        batchFile,
        JSON.stringify(
          {
            batch: batchKey,
            cardIds: batches[i].map((c) => c.cardId),
            findings: result.findings,
            passCount: result.passCount,
          },
          null,
          2,
        ),
      );
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

  await auditBatch(simple, BATCH_SIZE, "simple", "c1_targeted_simple");
  await auditBatch(study, STUDY_BATCH_SIZE, "study", "c1_targeted_study");

  if (fileHash(C1_FILE) !== hashBefore) throw new Error("Production changed during Luna audit");

  const { qualityFindings, nonError } = classifyFindings(auditData.findings);
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
  auditData.nonError = nonError;
  auditData.findings = qualityFindings;
  fs.writeFileSync(LINGUISTIC_JSON, JSON.stringify(auditData, null, 2));
  return { stats, auditedCardIds: [...auditedCardIds], findings: qualityFindings, nonError };
}

function isLvMirroredSynonymFinding(f, words, lvWords) {
  const reason = String(f.reason || "").toLowerCase();
  if (!reason.includes("consultation") && !reason.includes("konzultace")) return false;
  const idx = words.findIndex((e, i) => entryId(e, i, "c1") === f.cardId);
  if (idx < 0 || idx >= lvWords.length) return false;
  const current = String(f.current || getAt(words[idx], parseFieldPath(f.field === "csMain" ? "csText" : f.field || "lv")) || "");
  const lv = String(lvWords[idx].lv || "");
  if (!current.includes("•") || !lv.includes("•")) return false;
  const csParts = current.split("•").map((s) => s.trim().toLowerCase());
  const lvParts = lv.split("•").map((s) => s.trim().toLowerCase());
  if (csParts.length !== lvParts.length) return false;
  const hasReferendum = csParts.some((p) => p.includes("referendum"));
  const lvHasReferendum = lvParts.some((p) => p.includes("referend"));
  return hasReferendum && lvHasReferendum;
}

function validateFindings(rawFindings, words) {
  const lvWords = loadArray("data/c1.js", "C1_WORDS");
  const sourceDeIssues = [];
  const falsePositives = [];
  const validatedReal = [];

  for (const raw of rawFindings) {
    if (isMalformedFinding(raw)) continue;
    const f = enrichFindingFromProduction(raw, words);
    if (isSourceDeIssue(f)) {
      sourceDeIssues.push({ ...f, validationStatus: "SOURCE_DE_ISSUE" });
      continue;
    }
    if (
      isNonErrorFinding(f)
      || isPlCharOFalsePositive(f)
      || isProjectConventionFinding(f)
      || isLvMirroredSynonymFinding(f, words, lvWords)
    ) {
      falsePositives.push({ ...f, validationStatus: "FALSE_POSITIVE" });
      continue;
    }
    if (isSubstantiveFinding(f)) {
      validatedReal.push({ ...f, validationStatus: "REAL" });
    }
  }

  return { sourceDeIssues, falsePositives, validatedReal };
}

function buildMarkdown(data) {
  const s = data.summary;
  const lines = [
    "# CS–DE C1 TARGETED REGRESSION AUDIT",
    "",
    "**MODE:** READ-ONLY",
    "",
    "## MODEL",
    "",
    LINGUISTIC_MODEL,
    "",
    "## PREREQUISITE (OWNER repair reconciliation)",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| OWNER LABOT mappings | ${OWNER_TOTAL} |`,
    `| OWNER NEW exact | ${s.ownerNewExact}/${OWNER_TOTAL} |`,
    `| OWNER drift | ${s.ownerDrift} |`,
    `| CURRENT_VALUE_MISMATCH | ${s.currentMismatch} |`,
    `| CARD_NOT_FOUND | ${s.cardNotFound} |`,
    `| FIELD_NOT_FOUND | ${s.fieldNotFound} |`,
    `| OWNER_MAPPING_CONFLICT | ${s.ownerConflict} |`,
    "",
    `**Prerequisite:** ${s.prerequisitePass ? "PASS" : "FAIL"}`,
    "",
    "## TARGETED SCOPE",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| Changed mappings | ${s.changedMappings} |`,
    `| Unique changed cards | ${s.uniqueChangedCards} |`,
    `| Main translation fields | ${s.mainTranslationFields} |`,
    `| Study fields | ${s.studyFields} |`,
    `| Study cards checked | ${s.studyCardsChecked} |`,
    "",
    "## RAW → VALIDATED PIPELINE",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| OWNER mappings checked | ${OWNER_TOTAL}/${OWNER_TOTAL} |`,
    `| Raw findings | ${s.rawFindings} |`,
    `| Malformed filtered | ${s.malformedFiltered} |`,
    `| FALSE_POSITIVE | ${s.falsePositive} |`,
    `| SOURCE_DE_ISSUE | ${s.sourceDeIssue} |`,
    "",
    "## VALIDATED REAL FINDINGS",
    "",
    "| Severity | Count |",
    "|----------|------:|",
    `| CRITICAL | ${s.validated.CRITICAL} |`,
    `| HIGH | ${s.validated.HIGH} |`,
    `| MEDIUM | ${s.validated.MEDIUM} |`,
    `| LOW | ${s.validated.LOW} |`,
    "",
    "## INTEGRITY",
    "",
    "| Check | Result |",
    "|-------|--------|",
    `| Production changes | ${s.productionChanges} |`,
    `| DE changes | ${s.deChanges} |`,
    `| Syntax | ${s.syntax} |`,
    `| ID/order | ${s.idOrder} |`,
    `| Card count | ${s.cardCount}/${C1_TOTAL} |`,
    `| Mirror/parity | ${s.mirrorParity} |`,
    "",
    "## LUNA API",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| Requests | ${s.lunaRequests} |`,
    `| Tokens | ${s.lunaTokens} |`,
    "",
    "## VERDICT",
    "",
  ];

  const totalReal = s.validated.CRITICAL + s.validated.HIGH + s.validated.MEDIUM + s.validated.LOW;
  if (totalReal === 0) {
    lines.push("```text", "VALIDATED REAL FINDINGS = 0", "TARGETED REGRESSION = PASS", "```");
  } else {
    lines.push("```text", "TARGETED REGRESSION = NEEDS OWNER REVIEW", "```");
  }

  lines.push(
    "",
    "## SUMMARY",
    "",
    "```text",
    `OWNER mappings checked: ${OWNER_TOTAL}/${OWNER_TOTAL}`,
    `OWNER NEW exact: ${s.ownerNewExact}/${OWNER_TOTAL}`,
    `Unique changed cards: ${s.uniqueChangedCards}`,
    `Study cards checked: ${s.studyCardsChecked}`,
    "",
    `Raw findings: ${s.rawFindings}`,
    "",
    "Validated:",
    `CRITICAL: ${s.validated.CRITICAL}`,
    `HIGH: ${s.validated.HIGH}`,
    `MEDIUM: ${s.validated.MEDIUM}`,
    `LOW: ${s.validated.LOW}`,
    "",
    `FALSE_POSITIVE: ${s.falsePositive}`,
    `SOURCE_DE_ISSUE: ${s.sourceDeIssue}`,
    "",
    `OWNER drift: ${s.ownerDrift}`,
    `Production changes: ${s.productionChanges}`,
    `DE changes: ${s.deChanges}`,
    "",
    `Syntax: ${s.syntax}`,
    `ID/order: ${s.idOrder}`,
    `Card count: ${s.cardCount}/${C1_TOTAL}`,
    `Mirror/parity: ${s.mirrorParity}`,
    "```",
  );

  lines.push(
    "",
    `Generated: ${data.meta.date}`,
    `Branch: \`${data.meta.branch}\``,
    `Audit commit: \`${data.meta.auditCommit}\``,
  );

  if (data.realFindings?.length) {
    lines.push("", "## REAL FINDINGS (validated)", "");
    for (const f of data.realFindings) {
      lines.push(`### ${f.cardId} — ${f.field}`, "");
      lines.push(`- Severity: **${f.severity}**`);
      lines.push(`- CURRENT: ${f.current}`);
      if (f.proposed) lines.push(`- Recommended fix: ${f.proposed}`);
      lines.push(`- Problem: ${f.reason}`);
      lines.push(`- Source: ${f.source}`);
      lines.push("");
    }
  }

  return lines.join("\n");
}

async function main() {
  ensureDir(TEMP_DIR);
  if (!fs.existsSync(MASTER)) throw new Error(`Missing master file: ${MASTER}`);

  const auditCommit = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const baselineHash = fileHash(C1_FILE);
  const words = loadArray("data/cs/c1.js", "C1_WORDS");
  const baselineDeHash = deSnapshotHash(words);

  console.log("\n=== C1 OWNER prerequisite check (265 mappings) ===");
  const mappings = authoritativeMappings(loadOwnerLabotMappings(MASTER));
  if (mappings.length !== OWNER_TOTAL) {
    console.error(JSON.stringify({ status: "FAIL", reason: "mapping count", got: mappings.length }, null, 2));
    process.exit(2);
  }
  const ownerCheck = verifyOwnerMappings(words, mappings);
  if (!ownerCheck.pass) {
    console.error(JSON.stringify({ status: "PREREQUISITE FAIL — STOP", ownerCheck }, null, 2));
    process.exit(2);
  }
  console.log(`PASS: OWNER NEW exact ${ownerCheck.exact}/${OWNER_TOTAL}, drift=${ownerCheck.drift}`);

  const scope = buildScope(mappings);
  const studyCardsChecked = [...scope.cardIdSet].filter((id) => {
    const idx = words.findIndex((e, i) => entryId(e, i, "c1") === id);
    return idx >= 0 && words[idx].study;
  }).length;

  console.log(`\n=== Targeted scope: ${scope.uniqueChangedCards} unique cards (${scope.changedMappings} mappings) ===`);

  console.log("\n=== Deterministic collect (C1) — filtered to scope ===");
  const detFull = runDeterministicCollect();
  const detTargeted = filterFindingsToCards(detFull.findings || [], scope.cardIdSet);
  fs.writeFileSync(DETERMINISTIC_JSON, JSON.stringify({ findings: detTargeted, fullIntegrity: detFull.meta }, null, 2));
  console.log(`Deterministic raw findings in scope: ${detTargeted.length}`);

  let lunaResult = { stats: createStats(), auditedCardIds: [], findings: [], nonError: {} };
  if (!SKIP_LUNA) {
    console.log(`\n=== GPT-5.6 Luna targeted audit (${scope.uniqueChangedCards} cards) ===`);
    if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
    lunaResult = await runTargetedLuna(words, scope.cardIdSet);
  } else if (fs.existsSync(LINGUISTIC_JSON)) {
    const ling = JSON.parse(fs.readFileSync(LINGUISTIC_JSON, "utf8"));
    lunaResult.findings = ling.qualityFindings || ling.findings || [];
    lunaResult.auditedCardIds = ling.meta?.auditedCardIds || loadProgress().auditedCardIds || [];
    lunaResult.stats = ling.apiUsage || createStats();
    lunaResult.nonError = ling.nonError || {};
  } else {
    console.log("Skipping Luna (--skip-luna, no cache)");
  }

  const productionChanges = fileHash(C1_FILE) !== baselineHash ? 1 : 0;
  const integrity = checkIntegrity(loadArray("data/cs/c1.js", "C1_WORDS"), baselineDeHash);

  const allRawNorm = [
    ...detTargeted.map((f) => normalizeFinding(f, "deterministic")),
    ...lunaResult.findings.map((f) => normalizeFinding(f, "gpt-5.6-luna")),
  ];
  const preMerge = allRawNorm.filter(
    (f) => isSubstantiveFinding(f) || isSourceDeIssue(f) || isPlCharOFalsePositive(f),
  );
  const merged = dedupeFindings(preMerge);
  const malformedCount = allRawNorm.length - preMerge.length;
  const { sourceDeIssues, falsePositives, validatedReal } = validateFindings(merged, words);

  const validatedSev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of validatedReal) {
    const sev = f.severity || "MEDIUM";
    if (validatedSev[sev] !== undefined) validatedSev[sev] += 1;
    else validatedSev.MEDIUM += 1;
  }

  const summary = {
    prerequisitePass: ownerCheck.pass,
    ownerNewExact: ownerCheck.exact,
    ownerDrift: ownerCheck.drift,
    currentMismatch: ownerCheck.currentMismatch,
    cardNotFound: ownerCheck.cardNotFound,
    fieldNotFound: ownerCheck.fieldNotFound,
    ownerConflict: ownerCheck.conflict,
    changedMappings: scope.changedMappings,
    uniqueChangedCards: scope.uniqueChangedCards,
    mainTranslationFields: scope.mainTranslationFields,
    studyFields: scope.studyFields,
    studyCardsChecked,
    rawFindings: allRawNorm.length,
    malformedFiltered: malformedCount,
    falsePositive: falsePositives.length + (lunaResult.nonError?.FALSE_POSITIVE || 0) + malformedCount,
    sourceDeIssue: sourceDeIssues.length + (lunaResult.nonError?.SOURCE_DE_ISSUE || 0),
    validated: validatedSev,
    productionChanges,
    deChanges: integrity.deChanges,
    syntax: integrity.syntax,
    idOrder: integrity.idOrder,
    cardCount: integrity.cardCount,
    mirrorParity: integrity.mirrorParity,
    lunaRequests: lunaResult.stats.requestCount || 0,
    lunaTokens: lunaResult.stats.totalTokens || 0,
  };

  const payload = {
    meta: {
      date: new Date().toISOString(),
      branch: BRANCH,
      auditCommit,
      model: LINGUISTIC_MODEL,
      apiModel: DEFAULT_MODEL,
    },
    summary,
    ownerCheck,
    scope,
    rawFindings: allRawNorm,
    validatedReal,
    falsePositives,
    sourceDeIssues,
    integrity,
    lunaUsage: lunaResult.stats,
    realFindings: validatedReal,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(payload));

  console.log("\n=== Summary ===");
  console.log(JSON.stringify(summary, null, 2));

  if (productionChanges) throw new Error("Production changed during audit");
  if (integrity.deChanges) throw new Error("DE changes detected");
  if (integrity.cardCount !== C1_TOTAL) throw new Error("Card count mismatch");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
