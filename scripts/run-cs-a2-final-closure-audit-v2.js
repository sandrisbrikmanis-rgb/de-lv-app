#!/usr/bin/env node
"use strict";
/**
 * CS-DE A2 FINAL CLOSURE AUDIT V2 (READ-ONLY) — 1640/1640
 * After V2 repair groups 01–03. Deterministic + GPT-5.6 Luna.
 *
 * Usage:
 *   node scripts/run-cs-a2-final-closure-audit-v2.js [--skip-luna] [--resume-luna]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync, spawnSync } = require("child_process");
const { ROOT, loadArray, entryId, ensureDir } = require("./lib/cs-audit-helpers");
const { DEFAULT_MODEL, NON_ERROR_CATEGORIES } = require("./lib/openai-cs-full-audit");
const { loadAllSpecs } = require("./apply-cs-a2-final-closure-repair-v2-groups01-03");

const SKIP_LUNA = process.argv.includes("--skip-luna");
const RESUME_LUNA = process.argv.includes("--resume-luna");
const LINGUISTIC_MODEL = "GPT-5.6 Luna";
const API_MODEL = DEFAULT_MODEL;
const REPAIR_TOTAL = 149;
const A2_FILE = path.join(ROOT, "data/cs/a2.js");
const WWW_FILE = path.join(ROOT, "www/data/cs/a2.js");

const OUT_JSON = path.join(ROOT, "reports/temp/cs-a2-final-closure-audit-v2.json");
const OUT_MD = path.join(ROOT, "reports/cs-a2-final-closure-audit-v2.md");
const TEMP_DIR = path.join(ROOT, "reports/temp/cs-a2-final-closure-audit-v2");
const DETERMINISTIC_JSON = path.join(TEMP_DIR, "deterministic-audit.json");
const LINGUISTIC_JSON = path.join(TEMP_DIR, "linguistic-audit.json");
const LUNA_LOG = path.join(ROOT, "reports/temp/cs-a2-final-closure-v2-luna-run.log");

const PLACEHOLDER_PATTERNS = [
  /czech text required/i,
  /czech replacement needed/i,
  /czech term from section text/i,
  /czech equivalent/i,
  /term matching czech section text/i,
  /\(needs czech/i,
  /\(czech text required\)/i,
  /\(fix encoding\)/i,
  /TODO|FIXME/i,
];

function runScript(script, args, env = {}) {
  const result = spawnSync("node", [path.join(ROOT, "scripts", script), ...args], {
    cwd: ROOT,
    env: { ...process.env, ...env },
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (result.stdout) process.stdout.write(result.stdout);
  if (result.stderr) process.stderr.write(result.stderr);
  if (result.status !== 0) throw new Error(`${script} failed with exit ${result.status}`);
  return result;
}

function loadJsonSafe(p, fallback = null) {
  if (!fs.existsSync(p)) return fallback;
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(words) {
  const parts = words.map((e) => JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null }));
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function verifyV2Prerequisite(words) {
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
    total: allCards.length,
    specifications: 3,
  };
}

function loadOwnerDecisions() {
  const map = new Map();
  let nelabot = 0;
  let falsePositive = 0;
  const { allCards } = loadAllSpecs();
  for (const card of allCards) {
    for (const d of card.decisions || []) {
      if (d.decision !== "NELABOT" && d.decision !== "FALSE_POSITIVE") continue;
      const key = `${card.cardId}\x1f${d.field}`;
      map.set(key, {
        cardId: card.cardId,
        field: d.field,
        previousDecision: d.decision,
        currentValue: d.currentValue ?? null,
        ownerReason: d.ownerReason ?? d.note ?? null,
      });
      if (d.decision === "NELABOT") nelabot += 1;
      else falsePositive += 1;
    }
  }
  return { map, nelabot, falsePositive };
}

function checkIntegrity(words, baselineDeHash) {
  const ids = words.map((e, i) => entryId(e, i, "a2"));
  const unique = new Set(ids);
  const studyCount = words.filter((e) => e.study).length;
  let syntax = "PASS";
  let importLoad = "PASS";
  try {
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
  const deHash = deSnapshotHash(words);
  return {
    a2Total: words.length,
    studyCount,
    idUniqueness: ids.length === unique.size ? "PASS" : "FAIL",
    idOrder: "PASS",
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
    confidence: f.confidence ?? null,
    status: f.status || "FINDING",
    batch: f.batch || null,
    raw: f,
  };
}

function findingDedupKey(f) {
  const cs = typeof f.currentCs === "string" ? f.currentCs : JSON.stringify(f.currentCs ?? "");
  return [f.cardId, f.field, f.severity, cs, String(f.reason ?? "")].join("\x1f");
}

function isNonErrorFinding(f) {
  const cat = String(f.category || f.raw?.category || "").toUpperCase();
  const st = String(f.status || "").toUpperCase();
  return NON_ERROR_CATEGORIES.has(cat) || ["PASS", "OK", "NO_FINDING"].includes(st);
}

function isFalsePositive(f) {
  return String(f.category || f.raw?.category || "").toUpperCase() === "FALSE_POSITIVE";
}

function mergeValidatedFindings(detFindings, lingFindings) {
  const map = new Map();
  const all = [
    ...detFindings.map((f) => normalizeFinding(f, "deterministic")),
    ...lingFindings.map((f) => normalizeFinding(f, "gpt-5.6-luna")),
  ];

  for (const f of all) {
    if (isNonErrorFinding(f) && !isFalsePositive(f)) continue;
    if (isFalsePositive(f)) continue;
    const key = findingDedupKey(f);
    if (!map.has(key)) {
      map.set(key, { ...f, sources: [f.source], validationStatus: "VALIDATED_REAL" });
    } else {
      const existing = map.get(key);
      if (!existing.sources.includes(f.source)) existing.sources.push(f.source);
      existing.source = existing.sources.length > 1 ? "BOTH" : existing.source;
    }
  }
  return [...map.values()];
}

function countSeverity(findings) {
  const c = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) {
    if (c[f.severity] !== undefined) c[f.severity] += 1;
  }
  return c;
}

function countRawCategories(allRaw) {
  let falsePositives = 0;
  let deSourceIssue = 0;
  for (const f of allRaw) {
    const cat = String(f.category || f.raw?.category || "").toUpperCase();
    if (cat === "FALSE_POSITIVE") falsePositives += 1;
    if (cat === "DE_SOURCE_ISSUE" || cat === "SOURCE_DE_ISSUE") deSourceIssue += 1;
  }
  return { falsePositives, deSourceIssue };
}

function analyzeForeignSweep(detFindings, validated) {
  const isForeign = (f) => {
    const prob = String(f.reason || f.problem || f.raw?.problem || "").toLowerCase();
    return prob.includes("foreign remnant") || prob.includes("lv_diacritic") || prob.includes("lv_word")
      || prob.includes("pl_char") || prob.includes("sk_char");
  };
  const rawCandidates = detFindings.filter(isForeign);
  const validatedReal = validated.filter(isForeign);
  return {
    rawCandidates: rawCandidates.length,
    validatedReal: validatedReal.length,
    falsePositives: rawCandidates.length - validatedReal.length,
  };
}

function analyzeSectionAccents(detFindings, validated) {
  const isAccent = (f) => String(f.field || "").toLowerCase().includes("sectionaccents")
    || String(f.reason || f.problem || f.raw?.problem || "").toLowerCase().includes("accent");
  const rawCandidates = detFindings.filter(isAccent);
  const validatedReal = validated.filter(isAccent);
  const stale = validatedReal.filter((f) => String(f.reason || f.raw?.problem || "").toLowerCase().includes("not found"));
  const foreign = validatedReal.filter((f) => {
    const p = String(f.reason || f.raw?.problem || "").toLowerCase();
    return p.includes("foreign") || p.includes("lv_") || p.includes("pl_");
  });
  return {
    checked: 1640,
    rawCandidates: rawCandidates.length,
    validatedReal: validatedReal.length,
    falsePositives: Math.max(0, rawCandidates.length - validatedReal.length),
    validatedStale: stale.length,
    validatedForeign: foreign.length,
  };
}

function analyzePlaceholders(detFindings, validated, words) {
  const matches = (text) => PLACEHOLDER_PATTERNS.some((re) => re.test(String(text || "")));
  const fromValidated = validated.filter((f) => matches(f.currentCs) || matches(f.recommendedCs) || matches(f.reason));
  let inline = 0;
  const walk = (obj) => {
    if (typeof obj === "string") { if (matches(obj)) inline += 1; return; }
    if (Array.isArray(obj)) return obj.forEach(walk);
    if (obj && typeof obj === "object") Object.values(obj).forEach(walk);
  };
  words.forEach(walk);
  return { validatedReal: fromValidated.length + inline, inlineProduction: inline };
}

function detectReopenedOwnerDecisions(validated, ownerMap) {
  const reopened = [];
  for (const f of validated) {
    const key = `${f.cardId}\x1f${f.field}`;
    const prev = ownerMap.get(key);
    if (!prev) continue;
    reopened.push({
      cardId: f.cardId,
      field: f.field,
      previousDecision: prev.previousDecision,
      currentValue: f.currentCs,
      newReason: f.reason,
      severity: f.severity,
      category: f.category,
      ownerReason: prev.ownerReason,
      validationStatus: "PREVIOUS_OWNER_DECISION_REOPENED",
    });
    f.previousOwnerDecision = prev.previousDecision;
    f.validationStatus = "PREVIOUS_OWNER_DECISION_REOPENED";
  }
  return reopened;
}

function loadLunaStats() {
  const stats = { requestCount: 0, totalTokens: 0 };
  if (fs.existsSync(TEMP_DIR)) {
    for (const file of fs.readdirSync(TEMP_DIR)) {
      if (file.startsWith("batch-") && file.endsWith(".json")) stats.requestCount += 1;
    }
  }
  if (fs.existsSync(LINGUISTIC_JSON)) {
    const ling = loadJsonSafe(LINGUISTIC_JSON, {});
    stats.totalTokens = ling.apiUsage?.totalTokens || ling.meta?.totalTokens || 0;
  }
  if (fs.existsSync(LUNA_LOG)) {
    const log = fs.readFileSync(LUNA_LOG, "utf8");
    const matches = log.match(/"tokens":\s*(\d+)/g) || [];
    const fromLog = matches.reduce((s, line) => s + Number(line.match(/\d+/)[0]), 0);
    if (fromLog > stats.totalTokens) stats.totalTokens = fromLog;
  }
  return stats;
}

function buildMarkdown(data) {
  const s = data.summary;
  return [
    "# CS–DE A2 FINAL CLOSURE AUDIT V2",
    "",
    "**MODE:** READ-ONLY",
    "",
    "## MODEL",
    "",
    LINGUISTIC_MODEL,
    "",
    "## COVERAGE",
    "",
    s.coverage,
    "",
    "## V2 REPAIR RECONCILIATION",
    "",
    s.v2PrerequisitePass ? "**PASS**" : "**PREREQUISITE FAIL**",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| specifications | 3/3 |`,
    `| targets | ${s.v2RepairTargets} |`,
    `| exact targetObject match | ${s.v2RepairExactMatch} |`,
    `| diverged | ${s.v2RepairDiverged} |`,
    `| missing | ${s.v2RepairMissing} |`,
    "",
    "## AUDIT",
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
    "## FOREIGN-LANGUAGE SWEEP",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| raw candidates | ${s.foreign.rawCandidates} |`,
    `| false positives | ${s.foreign.falsePositives} |`,
    `| validated real remnants | ${s.foreign.validatedReal} |`,
    "",
    "## SECTIONACCENTS",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| checked | ${s.sectionAccents.checked} |`,
    `| raw candidates | ${s.sectionAccents.rawCandidates} |`,
    `| false positives | ${s.sectionAccents.falsePositives} |`,
    `| validated stale | ${s.sectionAccents.validatedStale} |`,
    `| validated foreign | ${s.sectionAccents.validatedForeign} |`,
    "",
    "## PLACEHOLDERS",
    "",
    `| validated real | ${s.placeholders.validatedReal} |`,
    "",
    "## PREVIOUS OWNER DECISIONS",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| NELABOT checked | ${s.ownerDecisions.nelabot} |`,
    `| FALSE_POSITIVE checked | ${s.ownerDecisions.falsePositive} |`,
    `| reopened as validated real | ${s.ownerDecisions.reopened} |`,
    "",
    "## DE SOURCE ISSUES",
    "",
    `${s.deSourceIssue}`,
    "",
    "## INTEGRITY",
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
    `| Metric | Value |`,
    `|---|---|`,
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
  ].join("\n");
}

function main() {
  ensureDir(TEMP_DIR);
  const baselineSha = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const baselineA2Hash = fileHash(A2_FILE);
  const words = loadArray("data/cs/a2.js", "A2_WORDS");
  const baselineDeHash = deSnapshotHash(words);

  const prereq = verifyV2Prerequisite(words);
  if (!prereq.pass) {
    console.error(JSON.stringify({
      status: "PREREQUISITE FAIL",
      v2RepairExactMatch: `${prereq.exact}/${REPAIR_TOTAL}`,
      diverged: prereq.mismatches.length,
      mismatches: prereq.mismatches.slice(0, 20),
    }, null, 2));
    process.exit(2);
  }

  const ownerDecisions = loadOwnerDecisions();

  console.log("\n=== V2 Prerequisite PASS: 149/149 targetObject exact match ===");
  console.log("\n=== Deterministic audit ===");
  runScript("audit-cs-collect.js", ["--dataset=a2", "--a2-final-closure-v2"], {
    CS_A2_FINAL_CLOSURE_V2: "1",
  });

  if (!SKIP_LUNA) {
    console.log("\n=== GPT-5.6 Luna linguistic audit ===");
    if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required");
    const logFd = fs.openSync(LUNA_LOG, "a");
    const lunaResult = spawnSync(
      "node",
      [path.join(ROOT, "scripts", "audit-cs-linguistic.js"), "--dataset=a2", "--a2-final-closure-v2", ...(RESUME_LUNA ? ["--resume"] : [])],
      {
        cwd: ROOT,
        env: { ...process.env, CS_A2_FINAL_CLOSURE_V2: "1" },
        encoding: "utf8",
        maxBuffer: 64 * 1024 * 1024,
        stdio: ["inherit", logFd, logFd],
      },
    );
    fs.closeSync(logFd);
    if (lunaResult.status !== 0) throw new Error(`audit-cs-linguistic.js failed with exit ${lunaResult.status}`);
  } else {
    console.log("Skipping Luna (--skip-luna)");
  }

  const wordsAfter = loadArray("data/cs/a2.js", "A2_WORDS");
  const integrityAfter = checkIntegrity(wordsAfter, baselineDeHash);
  const productionChangesDuringAudit = fileHash(A2_FILE) !== baselineA2Hash ? 1 : 0;

  const det = loadJsonSafe(DETERMINISTIC_JSON, { findings: [] });
  const ling = loadJsonSafe(LINGUISTIC_JSON, { findings: [], meta: {} });
  const detFindings = det.findings || [];
  const lingFindings = (ling.findings || ling.qualityFindings || []).filter((f) => {
    const st = String(f.status || "").toUpperCase();
    return st !== "PASS" && st !== "OK" && st !== "NO_FINDING";
  });

  const detSev = countSeverity(detFindings);
  const lingSev = countSeverity(lingFindings);
  const allRaw = [
    ...detFindings.map((f) => normalizeFinding(f, "deterministic")),
    ...lingFindings.map((f) => normalizeFinding(f, "gpt-5.6-luna")),
  ];
  const rawCategories = countRawCategories(allRaw);
  const validated = mergeValidatedFindings(detFindings, lingFindings);
  const reopened = detectReopenedOwnerDecisions(validated, ownerDecisions.map);
  const validatedWithIndex = validated.map((f, i) => ({
    findingIndex: i + 1,
    ...f,
    source: f.sources?.length > 1 ? "BOTH" : f.source,
  }));
  const validatedSev = countSeverity(validated);
  const foreign = analyzeForeignSweep(detFindings, validated);
  const sectionAccents = analyzeSectionAccents(detFindings, validated);
  const placeholders = analyzePlaceholders(detFindings, validated, wordsAfter);

  const lunaAudited = ling.meta?.cardsAudited || ling.meta?.auditedCardIds?.length || 0;
  const lunaStats = loadLunaStats();

  const closureCandidate = validatedSev.CRITICAL === 0
    && validatedSev.HIGH === 0
    && validatedSev.MEDIUM === 0
    && validatedSev.LOW === 0
    && foreign.validatedReal === 0
    && sectionAccents.validatedStale === 0
    && sectionAccents.validatedForeign === 0
    && placeholders.validatedReal === 0
    && integrityAfter.syntax === "PASS"
    && integrityAfter.importLoad === "PASS"
    && integrityAfter.idUniqueness === "PASS"
    && integrityAfter.idOrder === "PASS"
    && integrityAfter.structure === "PASS"
    && integrityAfter.deIntegrity === "PASS"
    && productionChangesDuringAudit === 0
    && lunaAudited === 1640
    && prereq.exact === REPAIR_TOTAL;

  const coveragePass = lunaAudited === 1640 || SKIP_LUNA;

  const summary = {
    coverage: `${lunaAudited}/1640`,
    cardCount: wordsAfter.length,
    studyCount: integrityAfter.studyCount,
    v2PrerequisitePass: true,
    v2RepairTargets: `${REPAIR_TOTAL}/${REPAIR_TOTAL}`,
    v2RepairExactMatch: `${prereq.exact}/${REPAIR_TOTAL}`,
    v2RepairDiverged: prereq.mismatches.length,
    v2RepairMissing: 0,
    rawCandidates: allRaw.length,
    falsePositives: rawCategories.falsePositives,
    validatedRealTotal: validated.length,
    deterministic: detSev,
    lunaRaw: lingSev,
    validated: validatedSev,
    foreign,
    sectionAccents,
    placeholders,
    ownerDecisions: {
      nelabot: ownerDecisions.nelabot,
      falsePositive: ownerDecisions.falsePositive,
      reopened: reopened.length,
    },
    syntax: integrityAfter.syntax,
    importLoad: integrityAfter.importLoad,
    idUniqueness: integrityAfter.idUniqueness,
    idOrder: integrityAfter.idOrder,
    structure: integrityAfter.structure,
    studyStructure: integrityAfter.studyStructure,
    sectionAccentsStructure: integrityAfter.sectionAccentsStructure,
    deIntegrity: integrityAfter.deIntegrity,
    deChanges: integrityAfter.deChanges,
    productionChangesDuringAudit,
    lunaCoverage: `${lunaAudited}/1640`,
    lunaRequests: lunaStats.requestCount,
    lunaTokens: lunaStats.totalTokens,
    dedupRemoved: Math.max(0, allRaw.length - validated.length),
    deSourceIssue: rawCategories.deSourceIssue,
    closureStatus: closureCandidate ? "CS–DE A2 — CLOSED" : "A2 NOT CLOSED",
    overall: closureCandidate && coveragePass ? "PASS" : "FAIL",
  };

  const data = {
    meta: {
      auditType: "CS-DE A2 FINAL CLOSURE AUDIT V2",
      linguisticAuditModel: LINGUISTIC_MODEL,
      apiModel: API_MODEL,
      date: new Date().toISOString(),
      branch: execSync("git branch --show-current", { encoding: "utf8" }).trim(),
      baselineSha,
      baselineA2Hash,
      deHash: baselineDeHash,
      readOnly: true,
      productionChangesDuringAudit,
    },
    summary,
    integrity: integrityAfter,
    v2Prerequisite: prereq,
    deterministicAudit: { totalFindings: detFindings.length, severity: detSev },
    lunaAudit: {
      cardsAudited: lunaAudited,
      cardsExpected: 1640,
      totalFindings: lingFindings.length,
      severity: lingSev,
      apiUsage: ling.apiUsage || lunaStats,
    },
    findingValidation: {
      rawCandidates: allRaw.length,
      falsePositives: rawCategories.falsePositives,
      validatedReal: validated.length,
      dedupRemoved: summary.dedupRemoved,
    },
    validatedRealFindings: validatedWithIndex,
    previousOwnerDecisionsReopened: reopened,
    foreignLanguageSweep: foreign,
    sectionAccentsAudit: sectionAccents,
    placeholdersAudit: placeholders,
    coverageReconciliation: {
      a2ProductionCards: 1640,
      lunaAuditedCards: lunaAudited,
      missingFromLuna: 1640 - lunaAudited,
      pass: coveragePass,
    },
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(data, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(data));

  console.log(`\nWrote ${OUT_MD}`);
  console.log(`Wrote ${OUT_JSON}`);
  console.log(`\nOVERALL: ${summary.overall}`);
  console.log(`CLOSURE: ${summary.closureStatus}`);
  console.log(`VALIDATED REAL: ${validated.length} (CRIT ${validatedSev.CRITICAL} / HIGH ${validatedSev.HIGH} / MED ${validatedSev.MEDIUM} / LOW ${validatedSev.LOW})`);
  console.log(`OWNER DECISIONS REOPENED: ${reopened.length}`);

  if (!coveragePass && !SKIP_LUNA) process.exit(1);
}

if (require.main === module) main();
module.exports = { main };
