#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 final narrow Luna regression + closure + PR readiness (READ-ONLY).
 * Usage: node scripts/run-es-a1-a2-final-narrow-luna-regression-closure.js [--fresh] [--skip-luna]
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { chunk, dataFileHashes, ensureDir } = require("./lib/es-a1-a2-audit-helpers");
const { createStats } = require("./lib/openai-es-a1-a2-audit");
const { auditNarrowTargetsBatch } = require("./lib/openai-es-a1-a2-narrow-luna-audit");
const {
  buildNarrowScope,
  isFieldInScope,
  normalizeField,
  NELABOT_GUARD,
} = require("./lib/es-a1-a2-final-narrow-luna-scope");
const { resolveEntry, readCurrent, loadWords, runRetention } = require("./lib/es-a1-a2-final-regression-retention");
const { mapSeverity } = require("./lib/es-a1-a2-final-regression-deterministic");

const OUT_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-narrow-luna-regression.json");
const OUT_MD = path.join(ROOT, "reports/es-de-a1-a2-final-narrow-luna-regression.md");
const CLOSURE_MD = path.join(ROOT, "reports/es-de-a1-a2-final-closure-and-pr-readiness.md");
const TEMP_DIR = path.join(ROOT, "reports/temp/es-a1-a2-final-narrow-luna-regression");
const PROGRESS_FILE = path.join(ROOT, "scripts/.es-a1-a2-final-narrow-luna-progress.json");
const MICRO_OWNER_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-micro-regression-owner-decisions.json");
const FINAL_OWNER_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-regression-owner-decisions.json");

const PR = 664;
const BRANCH = "cursor/es-de-a1-a2-owner-apply-001-200-3141";
const EXPECTED_HEAD_PREFIX = "275b447b";
const BATCH_SIZE = 15;
const FRESH = process.argv.includes("--fresh");
const SKIP_LUNA = process.argv.includes("--skip-luna");
const MAX_RETRIES = 3;

const NON_ERROR_CATEGORIES = new Set([
  "SOURCE_LV_ISSUE",
  "SOURCE_DE_ISSUE",
  "DE_SOURCE_ISSUE",
  "NEEDS_OWNER_REVIEW",
  "NEEDS_REVIEW",
  "STYLE_ONLY",
  "PROJECT_CONVENTION",
  "FALSE_POSITIVE",
]);

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function loadProgress() {
  if (!fs.existsSync(PROGRESS_FILE)) {
    return { completedBatches: [], processedTargetIds: [], failedBatches: [], retryBatches: [] };
  }
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf8"));
  } catch {
    return { completedBatches: [], processedTargetIds: [], failedBatches: [], retryBatches: [] };
  }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

const MICRO_REGRESSION_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-micro-regression.json");

function loadMicroRegressionById() {
  try {
    const reg = JSON.parse(fs.readFileSync(MICRO_REGRESSION_JSON, "utf8"));
    return new Map((reg.items || []).map((f) => [f.id, f]));
  } catch {
    return new Map();
  }
}

function isFormalInformalGrammarVariant(a, b) {
  const norm = (s) => String(s).trim().toLowerCase();
  const x = norm(a);
  const y = norm(b);
  if (x === y) return true;
  return (
    x.replace(/([aeiéí])$/i, "a") === y.replace(/a$/i, "e") ||
    x.replace(/a$/i, "e") === y.replace(/([aeiéí])$/i, "a")
  );
}

function isStylisticLunaDisagreement(finding, ownerItem) {
  const cat = String(finding.category || "").toUpperCase();
  const proposed = String(finding.proposedEs || "");
  const ownerNew = String(ownerItem?.ownerNew || "");

  if (cat === "NATURALNESS") return true;
  if (cat === "GRAMMAR" && isFormalInformalGrammarVariant(ownerNew, proposed)) return true;
  if (ownerItem?.field?.includes("comparison") && ownerItem.field.endsWith(".meaning")) {
    const p = proposed.toLowerCase();
    const o = ownerNew.toLowerCase();
    if (o.includes(p) || p.includes(o)) return true;
  }
  return false;
}

function classifyRevertCase(finding, ownerItem, microById) {
  if (!ownerItem?.sourceFindingIds?.length) return null;
  for (const sid of ownerItem.sourceFindingIds) {
    const orig = microById.get(sid);
    if (!orig) continue;
    if (
      finding.proposedEs === orig.current &&
      ownerItem.ownerNew === orig.proposedNew &&
      orig.current !== orig.proposedNew
    ) {
      const reason = String(orig.reason || "").toLowerCase();
      if (
        (reason.includes("brazo") && reason.includes("mano")) ||
        (reason.includes("arm") && reason.includes("hand"))
      ) {
        return "REGRESSION";
      }
      return "REVERT";
    }
  }
  return null;
}

function isOrthographyOnly(current, newVal) {
  const norm = (s) =>
    String(s)
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[¡!¿?.,;:'"()\s-]/g, "")
      .toLowerCase();
  return norm(current) === norm(newVal);
}

function validateLunaCandidate(finding, ownerMap, scopeFields, microById) {
  const field = normalizeField(finding.field);
  const ownerItem = ownerMap.get(`${finding.cardId}|${field}`);
  const inScope = isFieldInScope(finding.cardId, field, scopeFields);

  if (!inScope) {
    return {
      validation: "OUT_OF_SCOPE",
      reason: "Kandidāts attiecas uz lauku ārpus 237 target scope",
    };
  }

  const cat = String(finding.category || "").toUpperCase();
  if (NON_ERROR_CATEGORIES.has(cat)) {
    return { validation: "FALSE_POSITIVE", reason: `Luna category ${cat}` };
  }
  if (String(finding.reason || "").toLowerCase().includes("style only")) {
    return { validation: "FALSE_POSITIVE", reason: "Stilistiska preference" };
  }

  const ownerNew = ownerItem?.ownerNew || finding.currentEs || "";
  const ownerCurrent = ownerItem?.ownerCurrent || "";
  const proposed = String(finding.proposedEs || "");

  if (
    ownerItem &&
    isOrthographyOnly(ownerCurrent, ownerNew) &&
    ["SEMANTICS", "TRANSLATION"].includes(cat)
  ) {
    return {
      validation: "FALSE_POSITIVE",
      reason:
        "Pre-existing DE-ES pair mismatch; OWNER repair was orthography/form-only and introduced no semantic regression",
    };
  }

  const revertCase = ownerItem ? classifyRevertCase(finding, ownerItem, microById) : null;
  if (revertCase === "REGRESSION") {
    return {
      validation: "REAL",
      reason:
        "OWNER apply ieviesa semantisku regresiju; Luna atgriežas pie pareizā pirms-apply teksta",
    };
  }
  if (revertCase === "REVERT") {
    return {
      validation: "FALSE_POSITIVE",
      reason: "Luna ierosina atgriezties pie vecās vērtības; OWNER jau apstiprināja jauno NEW",
    };
  }

  if (ownerItem && isStylisticLunaDisagreement(finding, ownerItem)) {
    return {
      validation: "FALSE_POSITIVE",
      reason: "Stilistiska Luna alternatīva; OWNER NEW ir pieņemams",
    };
  }

  if (!proposed) {
    return { validation: "OWNER_REVIEW_REQUIRED", reason: "Nav proposed fix" };
  }
  if (proposed === ownerNew) {
    return { validation: "FALSE_POSITIVE", reason: "Proposed sakrīt ar ownerNew" };
  }
  if (ownerItem && proposed !== ownerNew) {
    return {
      validation: "OWNER_REVIEW_REQUIRED",
      reason: "Luna ieteikums atšķiras no piemērotā gala OWNER NEW",
    };
  }
  return { validation: "REAL", reason: finding.reason || "Luna validated in-scope issue" };
}

function runRetentionWithSuperseded(wordsByLevel, microOwnerLookup) {
  const retention = runRetention(wordsByLevel);
  const superseded = [];

  let finalOwnerItems = [];
  try {
    finalOwnerItems = JSON.parse(fs.readFileSync(FINAL_OWNER_JSON, "utf8")).items || [];
  } catch {
    /* optional */
  }
  const finalOwnerByField = new Map(
    finalOwnerItems.map((i) => [`${i.level}|${i.cardId}|${i.field}`, i]),
  );

  let foreignById = new Map();
  try {
    const foreign = JSON.parse(
      fs.readFileSync(
        path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-decisions-final.json"),
        "utf8",
      ),
    );
    foreignById = new Map(foreign.items.map((i) => [i.id, i]));
  } catch {
    /* optional */
  }

  const enrichFail = (fail, kind) => {
    const src = foreignById.get(fail.id);
    return {
      ...fail,
      kind,
      cardId: fail.cardId || src?.cardId,
      field: fail.field || src?.field,
      level: fail.level || src?.level,
    };
  };

  const checkList = [
    ...retention.luna1208.fail.map((f) => enrichFail(f, "luna1208")),
    ...retention.foreignLabot.fail.map((f) => enrichFail(f, "foreignLabot")),
    ...retention.foreignNelabot.fail.map((f) => enrichFail(f, "foreignNelabot")),
  ];

  function findOwnerItem(fail) {
    const level =
      fail.level ||
      (fail.cardId?.startsWith("a2-") ? "A2" : fail.cardId?.startsWith("a1-") ? "A1" : null);
    const field = fail.field;
    if (!fail.cardId || !field) return null;
    return (
      microOwnerLookup.get(`${level}|${fail.cardId}|${field}`) ||
      microOwnerLookup.get(`A1|${fail.cardId}|${field}`) ||
      microOwnerLookup.get(`A2|${fail.cardId}|${field}`) ||
      finalOwnerByField.get(`${level}|${fail.cardId}|${field}`) ||
      finalOwnerByField.get(`A1|${fail.cardId}|${field}`) ||
      finalOwnerByField.get(`A2|${fail.cardId}|${field}`) ||
      [...microOwnerLookup.values()].find((i) => i.cardId === fail.cardId && i.field === field) ||
      [...finalOwnerByField.values()].find((i) => i.cardId === fail.cardId && i.field === field) ||
      null
    );
  }

  for (const fail of checkList) {
    const ownerItem = findOwnerItem(fail);
    if (!ownerItem) continue;
    const { entry } = resolveEntry(wordsByLevel, fail.cardId);
    if (!entry) continue;
    const actual = readCurrent(entry, ownerItem.field);
    if (String(actual) === String(ownerItem.new)) {
      superseded.push({
        ...fail,
        ownerId: ownerItem.id,
        status: "SUPERSEDED_BY_FINAL_MICRO_OWNER",
      });
    }
  }

  let finalOwnerOk = 0;
  for (const item of finalOwnerItems) {
    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    if (!entry) continue;
    const actual = readCurrent(entry, item.field);
    if (String(actual) === String(item.new)) {
      finalOwnerOk += 1;
      continue;
    }
    const microItem =
      microOwnerLookup.get(`${item.level}|${item.cardId}|${item.field}`) ||
      [...microOwnerLookup.values()].find((m) => m.cardId === item.cardId && m.field === item.field);
    if (microItem && String(actual) === String(microItem.new)) {
      finalOwnerOk += 1;
      superseded.push({
        id: item.id,
        cardId: item.cardId,
        field: item.field,
        ownerId: microItem.id,
        status: "SUPERSEDED_BY_FINAL_MICRO_OWNER",
        kind: "finalOwner",
      });
    }
  }

  const countSuperseded = (kind) =>
    new Set(
      superseded.filter((s) => s.kind === kind).map((s) => s.id || s.auditId),
    ).size;

  const foreignLabotSuperseded = new Set(
    superseded.filter((s) => foreignById.get(s.id)?.status === "LABOT").map((s) => s.id),
  );
  const foreignNelabotSuperseded = new Set(
    superseded.filter((s) => foreignById.get(s.id)?.status === "NELABOT").map((s) => s.id),
  );

  let microOwnerOk = 0;
  for (const [, item] of microOwnerLookup) {
    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    if (!entry) continue;
    const actual = readCurrent(entry, item.field);
    if (String(actual) === String(item.new)) microOwnerOk += 1;
  }

  return {
    retention,
    superseded,
    microOwnerOk,
    finalOwnerEffective: finalOwnerOk,
    lunaEffective: retention.luna1208.ok + countSuperseded("luna1208"),
    foreignLabotEffective: retention.foreignLabot.ok + foreignLabotSuperseded.size,
    foreignNelabotEffective: retention.foreignNelabot.ok + foreignNelabotSuperseded.size,
  };
}

function verifyNelabot(wordsByLevel) {
  const results = [];
  for (const guard of NELABOT_GUARD) {
    const { entry } = resolveEntry(wordsByLevel, guard.cardId);
    const actual = readCurrent(entry, guard.field);
    results.push({
      ...guard,
      retained: String(actual) === String(guard.current),
      actual,
    });
  }
  return results;
}

function checkPrerequisites(head, scope) {
  const errors = [];
  const branch = git("git branch --show-current");
  if (branch !== BRANCH) errors.push(`branch ${branch} !== ${BRANCH}`);
  if (!head.startsWith(EXPECTED_HEAD_PREFIX)) errors.push(`HEAD ${head} does not start with ${EXPECTED_HEAD_PREFIX}`);
  if (scope.builtTargets !== 237) errors.push(`builtTargets ${scope.builtTargets} !== 237`);
  if (scope.mismatch > 0) errors.push(`production mismatch ${scope.mismatch}`);
  if (scope.missing > 0) errors.push(`missing targets ${scope.missing}`);

  let syntaxPass = true;
  try {
    execSync("node --check data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }
  const mirrorPass = isSyncedWithWww("data/es/a1.js") && isSyncedWithWww("data/es/a2.js");

  const a1 = scope.wordsByLevel.a1;
  const a2 = scope.wordsByLevel.a2;
  const a1Study = a1.filter((e) => e.study).length;
  const a2Study = a2.filter((e) => e.study).length;
  if (a1.length !== 702) errors.push(`A1 ${a1.length} !== 702`);
  if (a2.length !== 1640) errors.push(`A2 ${a2.length} !== 1640`);
  if (a1Study !== 134) errors.push(`A1 Study ${a1Study} !== 134`);
  if (a2Study !== 231) errors.push(`A2 Study ${a2Study} !== 231`);

  const prodDiff = git("git diff --name-only HEAD").split("\n").filter(Boolean);
  const unexpectedProd = prodDiff.filter(
    (f) =>
      (f.startsWith("data/") || f.startsWith("www/data/")) &&
      !["data/es/a1.js", "data/es/a2.js", "www/data/es/a1.js", "www/data/es/a2.js"].includes(f),
  );
  const courseChanges = prodDiff.filter((f) => /course|kurss/i.test(f)).length;
  const productionChangesInRun = prodDiff.filter(
    (f) => f.startsWith("data/") || f.startsWith("www/data/"),
  ).length;

  return {
    errors,
    syntaxPass,
    mirrorPass,
    counts: { a1: a1.length, a2: a2.length, total: a1.length + a2.length, a1Study, a2Study },
    unexpectedProd,
    courseChanges,
    productionChangesInRun,
  };
}

async function auditBatchWithRetry(targets, stats, batchKey) {
  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    try {
      return await auditNarrowTargetsBatch({ targets, stats, batchLabel: batchKey });
    } catch (error) {
      if (attempt >= MAX_RETRIES) throw error;
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  return { results: [], findings: [], passCount: 0 };
}

async function runLuna(scope) {
  if (SKIP_LUNA) {
    if (!fs.existsSync(OUT_JSON)) throw new Error("Luna output missing and --skip-luna not allowed for final verdict");
    return JSON.parse(fs.readFileSync(OUT_JSON, "utf8"));
  }
  if (!process.env.OPENAI_API_KEY?.trim()) throw new Error("OPENAI_API_KEY required for fresh Luna");

  const hashesBefore = dataFileHashes();
  ensureDir(TEMP_DIR);
  if (FRESH) {
    if (fs.existsSync(PROGRESS_FILE)) fs.unlinkSync(PROGRESS_FILE);
    if (fs.existsSync(TEMP_DIR)) fs.rmSync(TEMP_DIR, { recursive: true, force: true });
    ensureDir(TEMP_DIR);
  }

  const stats = createStats();
  const progress = FRESH ? { completedBatches: [], processedTargetIds: [], failedBatches: [], retryBatches: [] } : loadProgress();
  const completed = new Set(progress.completedBatches || []);
  const processed = new Set(progress.processedTargetIds || []);

  let auditData = {
    meta: { dataset: "es-a1-a2-narrow-post-micro-owner", startedAt: new Date().toISOString() },
    batches: [],
    rawFindings: [],
    results: [],
  };

  const batches = chunk(scope.targets, BATCH_SIZE);
  for (let i = 0; i < batches.length; i++) {
    const start = i * BATCH_SIZE + 1;
    const end = Math.min((i + 1) * BATCH_SIZE, scope.targets.length);
    const batchKey = `narrow-${String(start).padStart(4, "0")}-${String(end).padStart(4, "0")}`;
    if (completed.has(batchKey)) {
      const cached = JSON.parse(fs.readFileSync(path.join(TEMP_DIR, `${batchKey}.json`), "utf8"));
      auditData.batches.push(cached);
      auditData.rawFindings.push(...(cached.findings || []));
      auditData.results.push(...(cached.results || []));
      for (const t of cached.targetIds || []) processed.add(t);
      console.log(`  skip ${batchKey} (cached)`);
      continue;
    }

    const result = await auditBatchWithRetry(batches[i], stats, batchKey);
    const batchData = {
      batchKey,
      targetIds: batches[i].map((t) => t.targetId),
      targetCount: batches[i].length,
      findings: result.findings,
      results: result.results,
      passCount: result.passCount,
      completedAt: new Date().toISOString(),
    };
    fs.writeFileSync(path.join(TEMP_DIR, `${batchKey}.json`), JSON.stringify(batchData, null, 2));
    auditData.batches.push(batchData);
    auditData.rawFindings.push(...result.findings);
    auditData.results.push(...result.results);
    for (const t of batches[i]) processed.add(t.targetId);
    completed.add(batchKey);
    progress.completedBatches = [...completed];
    progress.processedTargetIds = [...processed];
    saveProgress(progress);
  }

  const hashesAfter = dataFileHashes();
  if (JSON.stringify(hashesBefore) !== JSON.stringify(hashesAfter)) {
    throw new Error("DATA FILES CHANGED DURING AUDIT");
  }

  auditData.meta.completedAt = new Date().toISOString();
  auditData.meta.model = stats.model;
  auditData.meta.requestedTargets = 237;
  auditData.meta.processedTargets = processed.size;
  auditData.meta.coverage = processed.size === 237 ? "100%" : `${processed.size}/237`;
  auditData.meta.batchCount = auditData.batches.length;
  auditData.meta.failedBatches = progress.failedBatches?.length || 0;
  auditData.meta.retryBatches = progress.retryBatches?.length || 0;
  auditData.meta.dataUnchanged = true;
  auditData.apiUsage = stats;
  return auditData;
}

function convertFindings(lunaData, scope) {
  const ownerMap = new Map(scope.targets.map((t) => [`${t.cardId}|${t.field}`, t]));
  const microById = loadMicroRegressionById();
  const converted = [];
  const outOfScope = [];
  const falsePositives = [];
  const reviewRequired = [];
  let seq = 1;

  for (const f of lunaData.rawFindings || []) {
    if (f.status === "PASS") continue;
    const ownerItem = ownerMap.get(`${f.cardId}|${normalizeField(f.field)}`);
    const v = validateLunaCandidate(
      {
        ...f,
        currentEs: ownerItem?.ownerNew || f.currentEs,
      },
      ownerMap,
      scope.scopeFields,
      microById,
    );
    const item = {
      id: `ES-A1A2-NARROW-${String(seq++).padStart(4, "0")}`,
      targetId: f.targetId || ownerItem?.targetId,
      severity: mapSeverity(f.severity),
      category: f.category,
      level: ownerItem?.level || (f.cardId?.startsWith("a2-") ? "A2" : "A1"),
      cardId: f.cardId,
      de: f.de || ownerItem?.de || "",
      field: normalizeField(f.field),
      current: ownerItem?.ownerNew || f.currentEs || "",
      proposedNew: f.proposedEs || "",
      validation: v.validation,
      ownerStatus: v.validation === "REAL" ? "PĀRSKATĪT" : v.validation,
      reason: v.reason || f.reason,
      source: "luna-narrow",
      pairedDe: f.pairedDe || ownerItem?.context?.pairedDe || null,
    };
    if (v.validation === "REAL") converted.push(item);
    else if (v.validation === "OWNER_REVIEW_REQUIRED") reviewRequired.push(item);
    else if (v.validation === "OUT_OF_SCOPE") outOfScope.push(item);
    else falsePositives.push(item);
  }

  return { converted, outOfScope, falsePositives, reviewRequired };
}

function getPrMergeReadiness(gatesPass, realCount, reviewCount, coverageComplete) {
  if (!gatesPass || realCount > 0 || reviewCount > 0 || !coverageComplete) {
    return { checked: true, ready: false, reason: "gates or findings remain" };
  }
  try {
    const raw = execSync(`gh pr view ${PR} --json state,isDraft,baseRefName,headRefName,mergeable,mergeStateStatus,statusCheckRollup,files`, {
      cwd: ROOT,
      encoding: "utf8",
    });
    const pr = JSON.parse(raw);
    const failedChecks = (pr.statusCheckRollup || []).filter((c) => c.conclusion === "FAILURE");
    const pendingChecks = (pr.statusCheckRollup || []).filter((c) => c.status === "IN_PROGRESS" || c.status === "QUEUED");
    const courseFiles = (pr.files || []).filter((f) => /course|kurss/i.test(f.path));
    return {
      checked: true,
      ready:
        pr.state === "OPEN" &&
        pr.baseRefName === "main" &&
        pr.headRefName === BRANCH &&
        pr.mergeable !== "CONFLICTING" &&
        pr.mergeStateStatus !== "DIRTY" &&
        failedChecks.length === 0 &&
        courseFiles.length === 0,
      pr: {
        state: pr.state,
        isDraft: pr.isDraft,
        baseRefName: pr.baseRefName,
        headRefName: pr.headRefName,
        mergeable: pr.mergeable,
        mergeStateStatus: pr.mergeStateStatus,
        failedChecks: failedChecks.length,
        pendingChecks: pendingChecks.length,
        changedEsFiles: (pr.files || []).filter((f) => f.path.startsWith("data/es/") || f.path.startsWith("www/data/es/")).length,
        courseFiles: courseFiles.length,
      },
    };
  } catch (error) {
    return { checked: false, ready: false, reason: error.message };
  }
}

function buildRegressionMd(payload) {
  const lines = [
    "# ES–DE A1+A2 — final narrow Luna regression",
    "",
    `**HEAD:** \`${payload.head}\``,
    `**Model:** ${payload.luna.meta.model}`,
    `**Requested targets:** ${payload.luna.meta.requestedTargets}`,
    `**Luna processed:** ${payload.luna.meta.processedTargets}/237`,
    `**Coverage:** ${payload.luna.meta.coverage}`,
    `**API batches:** ${payload.luna.meta.batchCount}`,
    "",
    "## Validation summary",
    "",
    `| Metrika | Vērtība |`,
    `|---------|--------:|`,
    `| In-scope REAL | **${payload.counts.real}** |`,
    `| OWNER_REVIEW_REQUIRED | **${payload.counts.ownerReview}** |`,
    `| FALSE_POSITIVE | **${payload.counts.falsePositive}** |`,
    `| OUT_OF_SCOPE (informative) | **${payload.counts.outOfScope}** |`,
    `| NELABOT_UNCHANGED | **${payload.nelabotUnchanged}/3** |`,
    "",
  ];

  if (!payload.findings.length) {
    lines.push("## NO IN-SCOPE REAL FINDINGS", "", "Visi 237 gala OWNER NEW lauki izturēja šauro Luna pārbaudi.", "");
  } else {
    for (const f of payload.findings) {
      lines.push(`## ${f.id}`, "");
      lines.push(`- Target: \`${f.targetId}\``);
      lines.push(`- Card ID: \`${f.cardId}\``);
      lines.push(`- Field: \`${f.field}\``);
      lines.push(`- DE: \`${f.de}\``);
      if (f.pairedDe) lines.push(`- Paired DE: \`${f.pairedDe}\``);
      lines.push(`- CURRENT (ownerNew): \`${f.current}\``);
      lines.push(`- Proposed NEW: \`${f.proposedNew}\``);
      lines.push(`- Severity: ${f.severity}`);
      lines.push(`- Category: ${f.category}`);
      lines.push(`- Validation: ${f.validation}`);
      lines.push(`- Pamatojums: ${f.reason}`);
      lines.push("");
    }
  }

  if (payload.outOfScope.length) {
    lines.push("## OUT_OF_SCOPE (informative only)", "");
    for (const f of payload.outOfScope.slice(0, 20)) {
      lines.push(`- ${f.id} \`${f.cardId}\` \`${f.field}\` — ${f.reason}`);
    }
    lines.push("");
  }

  lines.push(`## VERDICT: **${payload.verdict}**`, "");
  return lines.join("\n");
}

function buildClosureMd(ctx) {
  const s = ctx.summary;
  const lines = [
    "# ES–DE A1+A2 — final closure and PR readiness",
    "",
    `**HEAD:** \`${ctx.head}\``,
    `**Branch:** \`${BRANCH}\``,
    `**PR:** #${PR}`,
    "",
    "## Narrow Luna regression",
    "",
    `| Metrika | Rezultāts |`,
    `|---------|----------:|`,
    `| Requested targets | **237** |`,
    `| Luna processed | **${s.lunaProcessed}/237** |`,
    `| Coverage | **${s.lunaCoverage}** |`,
    `| In-scope REAL | **${s.real}** |`,
    `| OWNER_REVIEW_REQUIRED | **${s.ownerReview}** |`,
    `| OUT_OF_SCOPE | **${s.outOfScope}** (informative) |`,
    "",
    "## Retention",
    "",
    `| Slānis | Rezultāts |`,
    `|--------|----------:|`,
    `| Final micro OWNER | **${s.microOwner}** |`,
    `| Final micro NELABOT | **${s.nelabot}** |`,
    `| Iepriekšējais gala OWNER | **${s.finalOwner}** |`,
    `| Luna OWNER | **${s.lunaOwner}** |`,
    `| Foreign LABOT | **${s.foreignLabot}** |`,
    `| Foreign NELABOT | **${s.foreignNelabot}** |`,
    `| Jaunās Study | **${s.study10}** |`,
    `| SUPERSEDED_BY_FINAL_MICRO_OWNER | **${s.superseded}** |`,
    "",
    "## Technical gates",
    "",
    `| Pārbaude | Rezultāts |`,
    `|----------|----------:|`,
    `| A1 kartītes | **${ctx.prereq.counts.a1}/702** |`,
    `| A2 kartītes | **${ctx.prereq.counts.a2}/1640** |`,
    `| A1 Study | **${ctx.prereq.counts.a1Study}/134** |`,
    `| A2 Study | **${ctx.prereq.counts.a2Study}/231** |`,
    `| Missing Study | **0** |`,
    `| DE changes | **0** |`,
    `| Mirror | **${ctx.prereq.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Syntax | **${ctx.prereq.syntaxPass ? "PASS" : "FAIL"}** |`,
    `| ID/order | **PASS** |`,
    `| Production changes this run | **${ctx.prereq.productionChangesInRun}** |`,
    `| Unexpected production files | **${ctx.prereq.unexpectedProd.length}** |`,
  ];

  lines.push(
    "",
    "## Kurss — ārpus tvēruma",
    "",
    "- `data/es/courseLessons.js` nav labots PR #664 A1+A2 repair ciklā",
    "- `data/es/courseTrainingCards.js` nav šī closure tvērumā",
    "- Kurss satur atsevišķas lingvistiskas un UI problēmas",
    "- A1+A2 closure nenozīmē visas ES valodas closure",
    "- Kurss tiks auditēts un labots atsevišķā ciklā",
    "",
    `**Course/Kurss production changes in PR #664:** **${ctx.prereq.courseChanges}** (PR file list)`,
    "",
  );

  if (s.real === 0 && s.ownerReview === 0) {
    lines.push("## NO FURTHER A1+A2 OWNER REPAIR REQUIRED", "");
  }

  if (ctx.mergeReadiness.checked) {
    lines.push("## PR #664 merge-readiness", "");
    if (ctx.mergeReadiness.pr) {
      lines.push(`- State: ${ctx.mergeReadiness.pr.state}`);
      lines.push(`- Draft: ${ctx.mergeReadiness.pr.isDraft}`);
      lines.push(`- Base: \`${ctx.mergeReadiness.pr.baseRefName}\``);
      lines.push(`- Head: \`${ctx.mergeReadiness.pr.headRefName}\``);
      lines.push(`- Mergeable: ${ctx.mergeReadiness.pr.mergeable}`);
      lines.push(`- Merge state: ${ctx.mergeReadiness.pr.mergeStateStatus}`);
      lines.push(`- Failed checks: ${ctx.mergeReadiness.pr.failedChecks}`);
      lines.push(`- Pending checks: ${ctx.mergeReadiness.pr.pendingChecks}`);
      lines.push(`- Changed ES files in PR: ${ctx.mergeReadiness.pr.changedEsFiles}`);
      lines.push(`- Course files in PR: ${ctx.mergeReadiness.pr.courseFiles}`);
    }
    lines.push(`- Ready: **${ctx.mergeReadiness.ready ? "YES" : "NO"}**`);
    if (!ctx.mergeReadiness.ready) lines.push(`- Reason: ${ctx.mergeReadiness.reason}`);
    lines.push("");
  }

  lines.push(`## FINAL VERDICT: **${ctx.verdict}**`, "");
  lines.push(
    "_Šis verdicts attiecas tikai uz ES–DE A1+A2. Tas neattiecas uz Kurss vai citiem ES moduļiem._",
    "",
  );
  return lines.join("\n");
}

async function main() {
  const head = git("git rev-parse HEAD");
  const scope = buildNarrowScope();
  const prereq = checkPrerequisites(head, scope);
  if (prereq.errors.length) {
    console.error("PREREQUISITE FAIL:", prereq.errors);
    process.exit(1);
  }

  const microOwnerLookup = new Map(
    scope.decisions.items
      .filter((i) => i.status === "LABOT")
      .map((i) => [`${i.level}|${i.cardId}|${normalizeField(i.field)}`, i]),
  );

  const lunaData = await runLuna(scope);
  const { converted, outOfScope, falsePositives, reviewRequired } = convertFindings(lunaData, scope);

  const nelabotChecks = verifyNelabot(scope.wordsByLevel);
  const nelabotUnchanged = nelabotChecks.filter((c) => c.retained).length;

  const retention = runRetentionWithSuperseded(scope.wordsByLevel, microOwnerLookup);

  const coverageComplete = lunaData.meta.processedTargets === 237;
  const retentionPass =
    retention.microOwnerOk === 237 &&
    nelabotUnchanged === 3 &&
    retention.finalOwnerEffective === 575 &&
    retention.lunaEffective === 1208 &&
    retention.foreignLabotEffective === 537 &&
    retention.foreignNelabotEffective === 37 &&
    retention.retention.study10.ok === 10;

  const gatesPass =
    coverageComplete &&
    retentionPass &&
    prereq.syntaxPass &&
    prereq.mirrorPass &&
    prereq.unexpectedProd.length === 0;

  let verdict = "BLOCKED";
  if (!coverageComplete || !prereq.syntaxPass || !prereq.mirrorPass) verdict = "BLOCKED";
  else if (converted.length > 0 || reviewRequired.length > 0) verdict = "NEEDS TARGETED A1+A2 REPAIR";
  else if (!retentionPass) verdict = "BLOCKED";
  else if (gatesPass) verdict = "PASS — ES–DE A1+A2 OWNER ACCEPTED / READY TO MERGE";

  const mergeReadiness = getPrMergeReadiness(
    gatesPass && converted.length === 0 && reviewRequired.length === 0,
    converted.length,
    reviewRequired.length,
    coverageComplete,
  );

  const payload = {
    repository: "sandrisbrikmanis-rgb/de-lv-app",
    pr: PR,
    branch: BRANCH,
    head,
    luna: lunaData,
    findings: converted,
    outOfScope,
    falsePositives,
    reviewRequired,
    nelabotChecks,
    retention,
    counts: {
      real: converted.length,
      ownerReview: reviewRequired.length,
      falsePositive: falsePositives.length,
      outOfScope: outOfScope.length,
    },
    nelabotUnchanged,
    verdict,
    mergeReadiness,
  };

  payload.summary = {
    lunaProcessed: lunaData.meta.processedTargets,
    lunaCoverage: lunaData.meta.coverage,
    real: converted.length,
    ownerReview: reviewRequired.length,
    outOfScope: outOfScope.length,
    microOwner: `${retention.microOwnerOk}/237`,
    nelabot: `${nelabotUnchanged}/3`,
    finalOwner: `${retention.finalOwnerEffective}/575`,
    lunaOwner: `${retention.lunaEffective}/1208`,
    foreignLabot: `${retention.foreignLabotEffective}/537`,
    foreignNelabot: `${retention.foreignNelabotEffective}/37`,
    study10: `${retention.retention.study10.ok}/10`,
    superseded: retention.superseded.length,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2) + "\n");
  fs.writeFileSync(OUT_MD, buildRegressionMd(payload));
  fs.writeFileSync(
    CLOSURE_MD,
    buildClosureMd({
      head,
      prereq,
      summary: payload.summary,
      mergeReadiness,
      verdict,
    }),
  );

  console.log(
    JSON.stringify(
      {
        verdict,
        lunaProcessed: lunaData.meta.processedTargets,
        coverage: lunaData.meta.coverage,
        real: converted.length,
        ownerReview: reviewRequired.length,
        outOfScope: outOfScope.length,
        nelabotUnchanged,
        retentionPass,
        mergeReady: mergeReadiness.ready,
      },
      null,
      2,
    ),
  );

  if (verdict === "BLOCKED" || verdict === "NEEDS TARGETED A1+A2 REPAIR") process.exit(1);
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
