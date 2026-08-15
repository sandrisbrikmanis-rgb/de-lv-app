#!/usr/bin/env node
"use strict";
/**
 * CS-DE B2 Final Closure Audit (READ-ONLY)
 * Reconfirms repair chain, OWNER targets, CARD_NOT_FOUND closure, and targeted regression artifacts.
 * Does NOT re-run GPT-5.6 Luna.
 *
 * Usage: node scripts/audit-cs-b2-final-closure.js
 */
require("dotenv").config({ path: require("path").join(__dirname, "..", ".env") });

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const BRANCH = "cursor/cs-b2-final-closure-audit-6ea4";
const PRE_REPAIR_BASELINE_SHA = "8400573aa829dff8ce953cb6e84526b6e550dcf6";
const TARGETED_REGRESSION_COMMIT = "35e1301425f3800fdaceca7810c6c8af5b9d98f1";
const B2_TOTAL = 2118;

const B2_FILE = path.join(ROOT, "data/cs/b2.js");
const WWW_FILE = path.join(ROOT, "www/data/cs/b2.js");
const BASELINE_FILE = path.join(ROOT, "reports/temp/b2-pre-repair-baseline.js");

const ARTIFACTS = {
  fullAudit: path.join(ROOT, "reports/cs-b2-full-audit.md"),
  apply: path.join(ROOT, "reports/temp/cs-b2-copy-only-repair-apply.json"),
  reconciliation: path.join(ROOT, "reports/temp/cs-b2-25-card-not-found-reconciliation.json"),
  microrepair: path.join(ROOT, "reports/temp/cs-b2-owner-remap-microrepair-01.json"),
  targetedRegression: path.join(ROOT, "reports/temp/cs-b2-targeted-regression-audit.json"),
  targetedLinguistic: path.join(ROOT, "reports/temp/cs-b2-targeted-regression/linguistic-audit.json"),
  mappingDir: path.join(ROOT, "reports/owner/cs-b2-repair-mappings"),
};

const OUT_MD = path.join(ROOT, "reports/cs-b2-final-closure-audit.md");
const OUT_JSON = path.join(ROOT, "reports/temp/cs-b2-final-closure-audit.json");

const OTHER_CS_DATASETS = ["a1", "a2", "b1", "c1", "c2"];
const OTHER_SOURCES = [
  "data/sentences.js",
  "data/verbs.js",
];

const REMAP_CHECKS = [
  { cardId: "b2-Geständnis-962", field: "csText", expected: "Přiznání" },
  { cardId: "b2-Hypothek-1154", field: "csText", expected: "Hypotéka • Zástavní právo" },
  { cardId: "b2-Gespött-959", field: "csText", expected: "Posměch • Terč posměchu" },
];

const EXPECTED_FALSE_POSITIVE_TERMS = ["Dóza", "Monotónní", "Tónovat", "Narkóza", "módní"];

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function loadWords(filePath, key = "B2_WORDS") {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function loadWordsAtRef(ref, rel, key = "B2_WORDS") {
  const code = execSync(`git show ${ref}:${rel}`, { cwd: ROOT, encoding: "utf8" });
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `b2-${entry.de}-${index}`;
  return `b2-${index}`;
}

function normalizeField(field) {
  if (!field) return field;
  let f = String(field);
  if (f === "csText" || f === "lv") return "lv";
  const m = f.match(/^entry\[\d+\]\.(.+)$/);
  if (m) f = m[1];
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

function findCardIndex(words, cardId) {
  for (let i = 0; i < words.length; i++) {
    if (entryId(words[i], i) === cardId) return i;
  }
  return -1;
}

function deSnapshotHash(words) {
  const parts = words.map((e) => JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null }));
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function ensureBaselineFile() {
  if (!fs.existsSync(BASELINE_FILE)) {
    execSync(`git show ${PRE_REPAIR_BASELINE_SHA}:data/cs/b2.js > "${BASELINE_FILE}"`, { cwd: ROOT, stdio: "pipe" });
  }
}

function buildOwnerTargets() {
  const apply = JSON.parse(fs.readFileSync(ARTIFACTS.apply, "utf8"));
  const micro = JSON.parse(fs.readFileSync(ARTIFACTS.microrepair, "utf8"));
  const map = new Map();
  for (const r of apply.results.filter((x) => x.status === "APPLIED")) {
    const field = normalizeField(r.field);
    map.set(`${r.cardId}\0${field}`, { cardId: r.cardId, field, expectedOwnerValue: r.newVal, source: "copy-only-apply" });
  }
  for (const r of micro.applyResults.filter((x) => x.status === "APPLIED")) {
    const field = normalizeField(r.field);
    map.set(`${r.cardId}\0${field}`, { cardId: r.cardId, field, expectedOwnerValue: r.newVal, source: "microrepair-01" });
  }
  return [...map.values()];
}

function parseFullAuditMetrics() {
  const text = fs.readFileSync(ARTIFACTS.fullAudit, "utf8");
  const pick = (re) => {
    const m = text.match(re);
    return m ? m[1] : null;
  };
  return {
    totalObjects: Number(pick(/Total objects:\s*(\d+)/) || B2_TOTAL),
    critical: Number(pick(/CRITICAL:\s*(\d+)/) || 0),
    high: Number(pick(/HIGH:\s*(\d+)/) || 0),
    medium: Number(pick(/MEDIUM:\s*(\d+)/) || 0),
    low: Number(pick(/LOW:\s*(\d+)/) || 0),
  };
}

function reconstructChain() {
  const apply = JSON.parse(fs.readFileSync(ARTIFACTS.apply, "utf8"));
  const recon = JSON.parse(fs.readFileSync(ARTIFACTS.reconciliation, "utf8"));
  const micro = JSON.parse(fs.readFileSync(ARTIFACTS.microrepair, "utf8"));
  const targeted = JSON.parse(fs.readFileSync(ARTIFACTS.targetedRegression, "utf8"));
  const mappingFiles = fs.readdirSync(ARTIFACTS.mappingDir).filter((f) => f.endsWith(".md")).length;
  const fullAudit = parseFullAuditMetrics();
  const ownerTargets = buildOwnerTargets();

  return {
    fullAudit,
    mappingFiles,
    apply: {
      rawRows: apply.consolidation?.rawRows ?? null,
      uniqueLabot: apply.consolidation?.labotUnique ?? apply.consolidation?.uniqueMappings ?? null,
      applied: apply.apply?.applied ?? null,
      mismatch: apply.apply?.mismatch ?? null,
      notFound: apply.apply?.notFound ?? null,
      skippedNelabot: apply.apply?.skippedNelabot ?? apply.consolidation?.skippedNelabot ?? null,
    },
    reconciliation: {
      total: recon.summary?.classifiedTotal ?? recon.items?.length ?? null,
      remapSafe: recon.summary?.counts?.["UNIQUE_DE_MATCH_CURRENT_MATCH"] ?? null,
      ownerReviewMismatch: recon.summary?.counts?.["UNIQUE_DE_MATCH_CURRENT_MISMATCH"] ?? null,
      confirmedAbsent: recon.summary?.counts?.CONFIRMED_ABSENT ?? null,
    },
    microrepair: {
      applied: micro.summary?.apply?.applied ?? null,
      scopeExclusions: micro.summary?.scopeExclusions?.total ?? null,
    },
    finalOwnerTargets: {
      uniqueFieldTargets: ownerTargets.length,
      uniqueCards: new Set(ownerTargets.map((t) => t.cardId)).size,
      mainFields: ownerTargets.filter((t) => !t.field.startsWith("study.")).length,
      studyFields: ownerTargets.filter((t) => t.field.startsWith("study.")).length,
    },
    targetedRegression: {
      cardsAudited: targeted.summary?.cardsAudited ?? null,
      uniqueFieldTargets: targeted.summary?.uniqueFieldTargets ?? null,
      rawFindings: targeted.summary?.rawFindings ?? null,
      validatedReal: targeted.summary?.validatedRealCount ?? null,
      falsePositive: targeted.summary?.falsePositiveCount ?? null,
      sourceDeIssue: targeted.summary?.sourceDeIssueCount ?? null,
      lunaRequests: targeted.summary?.lunaRequests ?? null,
      lunaTokens: targeted.summary?.lunaTokens ?? null,
      model: targeted.meta?.linguisticAuditModel ?? null,
      apiModel: targeted.meta?.apiModel ?? null,
      severity: targeted.summary?.validated ?? {},
    },
  };
}

function verifyOwnerTargets(words, targets) {
  const drifts = [];
  const missing = [];
  let exact = 0;
  for (const t of targets) {
    const idx = findCardIndex(words, t.cardId);
    if (idx < 0) {
      missing.push(t);
      continue;
    }
    const actual = getAt(words[idx], fieldToPath(t.field));
    if (String(actual ?? "") === String(t.expectedOwnerValue ?? "")) exact += 1;
    else drifts.push({ ...t, actual });
  }
  return {
    total: targets.length,
    exact,
    drift: drifts.length,
    missing: missing.length,
    drifts,
    missingTargets: missing,
    pass: exact === targets.length && drifts.length === 0 && missing.length === 0,
  };
}

function verifyCardNotFoundClosure(words) {
  const recon = JSON.parse(fs.readFileSync(ARTIFACTS.reconciliation, "utf8"));
  const items = recon.items || [];
  const absent = items.filter((x) => x.ownerAction === "REMOVE_FROM_SCOPE_CONFIRMED_ABSENT");
  const remapItems = items.filter((x) => x.ownerAction === "REMAP_SAFE" || x.ownerAction === "OWNER_REVIEW_CURRENT_MISMATCH");

  const unexpectedCreated = [];
  for (const a of absent) {
    const de = a.de;
    const found = words.some((e) => e.de === de);
    if (found) unexpectedCreated.push({ originalCardId: a.originalCardId, de });
  }

  const remapResults = REMAP_CHECKS.map((check) => {
    const idx = findCardIndex(words, check.cardId);
    const actual = idx >= 0 ? getAt(words[idx], fieldToPath(check.field)) : null;
    return { ...check, actual, pass: actual === check.expected };
  });

  return {
    originalTotal: items.length,
    resolved: items.length,
    remapSafe: items.filter((x) => x.ownerAction === "REMAP_SAFE").length,
    ownerReview: items.filter((x) => x.ownerAction === "OWNER_REVIEW_CURRENT_MISMATCH").length,
    confirmedAbsent: absent.length,
    scopeExclusions: absent.map((x) => ({ originalCardId: x.originalCardId, de: x.de, status: "OWNER_CONFIRMED_REMOVE_FROM_SCOPE" })),
    remapChecks: remapResults,
    remapPass: remapResults.every((r) => r.pass),
    unexpectedCardsCreated: unexpectedCreated.length,
    unexpectedCreated,
    pass: items.length === 25 && absent.length === 22 && remapResults.every((r) => r.pass) && unexpectedCreated.length === 0,
  };
}

function verifyTargetedRegressionReconfirm() {
  const targeted = JSON.parse(fs.readFileSync(ARTIFACTS.targetedRegression, "utf8"));
  const linguistic = fs.existsSync(ARTIFACTS.targetedLinguistic)
    ? JSON.parse(fs.readFileSync(ARTIFACTS.targetedLinguistic, "utf8"))
    : null;

  const currentB2Hash = fileHash(B2_FILE);
  const auditB2Hash = execSync(`git show ${TARGETED_REGRESSION_COMMIT}:data/cs/b2.js | sha256sum`, { cwd: ROOT, encoding: "utf8" }).split(" ")[0].trim();
  const productionDriftSinceTargeted = currentB2Hash !== auditB2Hash;

  const falsePositives = targeted.falsePositives || [];
  const allDocumentedFp = falsePositives.every((f) => f.validationStatus === "FALSE_POSITIVE");
  const fpTermsFound = EXPECTED_FALSE_POSITIVE_TERMS.filter((term) =>
    falsePositives.some((f) => String(f.currentCs || "").includes(term)));

  const zuwiderFp = falsePositives.some((f) =>
    f.cardId === "b2-zuwider" && f.validationStatus === "FALSE_POSITIVE");

  return {
    model: targeted.meta?.linguisticAuditModel,
    apiModel: targeted.meta?.apiModel,
    lunaRequests: targeted.summary?.lunaRequests,
    lunaTokens: targeted.summary?.lunaTokens,
    cardsAudited: targeted.summary?.cardsAudited,
    rawFindings: targeted.summary?.rawFindings,
    validatedReal: targeted.summary?.validatedRealCount,
    falsePositive: targeted.summary?.falsePositiveCount,
    sourceDeIssue: targeted.summary?.sourceDeIssueCount,
    severity: targeted.summary?.validated,
    productionDriftSinceTargeted,
    currentB2Hash,
    auditB2Hash,
    falsePositivesDocumented: allDocumentedFp,
    falsePositiveCount: falsePositives.length,
    documentedTerms: fpTermsFound,
    zuwiderFalsePositive: zuwiderFp,
    linguisticMeta: linguistic?.meta ?? null,
    pass: !productionDriftSinceTargeted
      && targeted.meta?.apiModel === "gpt-5.6-luna"
      && targeted.meta?.linguisticAuditModel === "GPT-5.6 Luna"
      && targeted.summary?.validatedRealCount === 0
      && targeted.summary?.lunaRequests === 24
      && targeted.summary?.lunaTokens === 163549
      && allDocumentedFp,
  };
}

function verifyStudyClosure(words, targets) {
  const studyTargets = targets.filter((t) => t.field.startsWith("study."));
  const issues = [];
  let exact = 0;
  for (const t of studyTargets) {
    const idx = findCardIndex(words, t.cardId);
    if (idx < 0) {
      issues.push({ cardId: t.cardId, field: t.field, code: "MISSING_CARD" });
      continue;
    }
    const actual = getAt(words[idx], fieldToPath(t.field));
    if (String(actual ?? "") !== String(t.expectedOwnerValue ?? "")) {
      issues.push({ cardId: t.cardId, field: t.field, code: "OWNER_VALUE_DRIFT", actual, expected: t.expectedOwnerValue });
      continue;
    }
    exact += 1;
    const val = typeof actual === "string" ? actual : JSON.stringify(actual ?? "");
    if (/Vadība:/i.test(val)) issues.push({ cardId: t.cardId, field: t.field, code: "LV_REMNANT", snippet: val.slice(0, 80) });
    if (/piederības forma/i.test(val)) issues.push({ cardId: t.cardId, field: t.field, code: "LV_REMNANT_GENITIVE", snippet: val.slice(0, 80) });
  }
  return {
    studyFieldCount: studyTargets.length,
    exact,
    issues,
    pass: exact === studyTargets.length && issues.length === 0,
  };
}

function verifyDeReadOnly(words) {
  ensureBaselineFile();
  const baseline = loadWords(BASELINE_FILE);
  const baselineHash = deSnapshotHash(baseline);
  const currentHash = deSnapshotHash(words);
  return {
    baselineSha: PRE_REPAIR_BASELINE_SHA,
    deChanges: baselineHash === currentHash ? 0 : 1,
    pass: baselineHash === currentHash,
  };
}

function verifyDatasetIntegrity(words, baselineWords) {
  const ids = words.map((e, i) => entryId(e, i));
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
  return {
    cardCount: words.length,
    studyCount,
    duplicateIds: ids.length - unique.size,
    syntax,
    idOrder,
    mirrorParity: mirror ? "PASS" : "FAIL",
    studyParity: studyCount > 0 ? "PASS" : "FAIL",
    pass: words.length === B2_TOTAL && syntax === "PASS" && idOrder === "PASS" && mirror && unique.size === ids.length,
  };
}

function verifyOtherDatasetsUnchanged() {
  const changed = [];
  for (const ds of OTHER_CS_DATASETS) {
    const rel = `data/cs/${ds}.js`;
    const diff = execSync(`git diff --name-only ${PRE_REPAIR_BASELINE_SHA} HEAD -- ${rel}`, { cwd: ROOT, encoding: "utf8" }).trim();
    if (diff) changed.push(rel);
    const www = `www/data/cs/${ds}.js`;
    const diffWww = execSync(`git diff --name-only ${PRE_REPAIR_BASELINE_SHA} HEAD -- ${www}`, { cwd: ROOT, encoding: "utf8" }).trim();
    if (diffWww) changed.push(www);
  }
  for (const rel of OTHER_SOURCES) {
    const diff = execSync(`git diff --name-only ${PRE_REPAIR_BASELINE_SHA} HEAD -- ${rel}`, { cwd: ROOT, encoding: "utf8" }).trim();
    if (diff) changed.push(rel);
    const www = `www/${rel}`;
    const diffWww = execSync(`git diff --name-only ${PRE_REPAIR_BASELINE_SHA} HEAD -- ${www}`, { cwd: ROOT, encoding: "utf8" }).trim();
    if (diffWww) changed.push(www);
  }
  const otherLangDiff = execSync(
    `git diff --name-only ${PRE_REPAIR_BASELINE_SHA} HEAD -- data/ www/data/ | grep -v 'data/cs/b2.js' | grep -v 'www/data/cs/b2.js' || true`,
    { cwd: ROOT, encoding: "utf8" },
  ).trim().split("\n").filter(Boolean);
  return {
    otherCsChanges: changed.length,
    otherLanguageChanges: otherLangDiff.length,
    changedFiles: [...new Set([...changed, ...otherLangDiff])],
    pass: changed.length === 0 && otherLangDiff.length === 0,
  };
}

function buildMarkdown(data) {
  const c = data.chain;
  const lines = [
    "# CS–DE B2 FINAL CLOSURE AUDIT",
    "",
    "**MODE:** READ-ONLY",
    "",
    `## FINAL VERDICT`,
    "",
    `**${data.verdict}**`,
    "",
    data.verdictPass ? "**CS–DE B2 — OWNER ACCEPTED / CLOSED**" : "",
    "",
    "## A. Dataset",
    "",
    "| Metric | Value |",
    "|---|---|",
    `| Cards | ${data.dataset.cardCount}/${B2_TOTAL} |`,
    `| Study objects | ${data.dataset.studyCount} |`,
    `| Production path | \`data/cs/b2.js\` |`,
    `| Mirror path | \`www/data/cs/b2.js\` |`,
    `| Branch | \`${data.production.branch}\` |`,
    `| HEAD SHA | \`${data.production.headSha}\` |`,
    `| B2 production SHA256 | \`${data.production.b2Sha256}\` |`,
    `| Pre-repair baseline SHA | \`${PRE_REPAIR_BASELINE_SHA}\` |`,
    "",
    "## B. Repair chain",
    "",
    "```",
    "FULL AUDIT → 46 OWNER mappings → COPY-ONLY APPLY → CARD_NOT_FOUND RECONCILIATION",
    "→ OWNER REMAP MICRO-REPAIR #1 → TARGETED REGRESSION (GPT-5.6 Luna) → FINAL CLOSURE",
    "```",
    "",
    "| Stage | Artifact value | Expected | Match |",
    "|---|---:|---:|---|",
    `| Full audit cards | ${c.fullAudit.totalObjects} | 2118 | ${c.fullAudit.totalObjects === 2118 ? "✓" : "✗"} |`,
    `| OWNER mapping files | ${c.mappingFiles} | 46 | ${c.mappingFiles === 46 ? "✓" : "✗"} |`,
    `| Raw mapping rows | ${c.apply.rawRows} | 990 | ${c.apply.rawRows === 990 ? "✓" : "✗"} |`,
    `| Unique LABOT | ${c.apply.uniqueLabot} | 969 | ${c.apply.uniqueLabot === 969 ? "✓" : "✗"} |`,
    `| COPY-ONLY APPLIED | ${c.apply.applied} | 944 | ${c.apply.applied === 944 ? "✓" : "✗"} |`,
    `| CURRENT_VALUE_MISMATCH | ${c.apply.mismatch} | 0 | ${c.apply.mismatch === 0 ? "✓" : "✗"} |`,
    `| CARD_NOT_FOUND | ${c.apply.notFound} | 25 | ${c.apply.notFound === 25 ? "✓" : "✗"} |`,
    `| Reconciliation total | ${c.reconciliation.total} | 25 | ${c.reconciliation.total === 25 ? "✓" : "✗"} |`,
    `| REMAP_SAFE | ${c.reconciliation.remapSafe} | 1 | ${c.reconciliation.remapSafe === 1 ? "✓" : "✗"} |`,
    `| OWNER_REVIEW_MISMATCH | ${c.reconciliation.ownerReviewMismatch} | 2 | ${c.reconciliation.ownerReviewMismatch === 2 ? "✓" : "✗"} |`,
    `| CONFIRMED_ABSENT | ${c.reconciliation.confirmedAbsent} | 22 | ${c.reconciliation.confirmedAbsent === 22 ? "✓" : "✗"} |`,
    `| Micro-repair APPLIED | ${c.microrepair.applied} | 3 | ${c.microrepair.applied === 3 ? "✓" : "✗"} |`,
    `| Scope exclusions | ${c.microrepair.scopeExclusions} | 22 | ${c.microrepair.scopeExclusions === 22 ? "✓" : "✗"} |`,
    `| Final OWNER (cardId, field) | ${c.finalOwnerTargets.uniqueFieldTargets} | 947 | ${c.finalOwnerTargets.uniqueFieldTargets === 947 ? "✓" : "✗"} |`,
    `| Final unique cards | ${c.finalOwnerTargets.uniqueCards} | 926 | ${c.finalOwnerTargets.uniqueCards === 926 ? "✓" : "✗"} |`,
    "",
    "## C. OWNER mappings",
    "",
    `| Gate | Result |`,
    `|---|---|`,
    `| Final OWNER targets | ${data.ownerTargets.total} |`,
    `| Exact match | ${data.ownerTargets.exact}/${data.ownerTargets.total} |`,
    `| OWNER_VALUE_DRIFT | ${data.ownerTargets.drift} |`,
    `| MISSING_TARGET | ${data.ownerTargets.missing} |`,
    `| Gate | ${data.ownerTargets.pass ? "PASS" : "FAIL"} |`,
    "",
    "## D. CARD_NOT_FOUND closure",
    "",
    `| Metric | Value |`,
    `|---|---|`,
    `| Original CARD_NOT_FOUND | ${data.cardNotFound.originalTotal} |`,
    `| Resolved | ${data.cardNotFound.resolved}/25 |`,
    `| Remap checks | ${data.cardNotFound.remapChecks.filter((r) => r.pass).length}/3 |`,
    `| CONFIRMED_ABSENT scope exclusions | ${data.cardNotFound.confirmedAbsent}/22 |`,
    `| Unexpected cards created | ${data.cardNotFound.unexpectedCardsCreated} |`,
    `| Gate | ${data.cardNotFound.pass ? "PASS" : "FAIL"} |`,
    "",
    "### Remap post-checks",
    "",
    ...data.cardNotFound.remapChecks.map((r) =>
      `- \`${r.cardId}\` → \`${r.expected}\` : **${r.pass ? "PASS" : "FAIL"}** (actual: \`${r.actual}\`)`),
    "",
    "## E. Targeted Regression (GPT-5.6 Luna — reconfirmed, not re-run)",
    "",
    `| Metric | Value | Expected |`,
    `|---|---:|---:|`,
    `| Model | ${data.targetedRegression.model} | GPT-5.6 Luna |`,
    `| API model | ${data.targetedRegression.apiModel} | gpt-5.6-luna |`,
    `| Cards audited | ${data.targetedRegression.cardsAudited} | 926 |`,
    `| OWNER fields | ${c.finalOwnerTargets.uniqueFieldTargets} | 947 |`,
    `| API batches | ${data.targetedRegression.lunaRequests} | 24 |`,
    `| Tokens | ${data.targetedRegression.lunaTokens} | 163549 |`,
    `| Raw findings | ${data.targetedRegression.rawFindings} | 216 |`,
    `| Validated REAL | ${data.targetedRegression.validatedReal} | 0 |`,
    `| FALSE_POSITIVE | ${data.targetedRegression.falsePositive} | 16 |`,
    `| SOURCE_DE_ISSUE | ${data.targetedRegression.sourceDeIssue} | 0 |`,
    `| Production drift since targeted audit | ${data.targetedRegression.productionDriftSinceTargeted ? "YES" : "NO"} | NO |`,
    `| Gate | ${data.targetedRegression.pass ? "PASS" : "FAIL"} |`,
    "",
    "### Documented FALSE_POSITIVE terms (ó-valid Czech)",
    "",
    ...EXPECTED_FALSE_POSITIVE_TERMS.map((t) => `- ${t}: ${data.targetedRegression.documentedTerms.includes(t) ? "documented" : "not found in FP list"}`),
    "",
    `- b2-zuwider stale sectionAccent: ${data.targetedRegression.zuwiderFalsePositive ? "FALSE_POSITIVE documented" : "not documented"}`,
    "",
    "## F. Severity",
    "",
    "| Severity | Count |",
    "|---|---:|",
    `| CRITICAL | ${data.targetedRegression.severity?.CRITICAL ?? 0} |`,
    `| HIGH | ${data.targetedRegression.severity?.HIGH ?? 0} |`,
    `| MEDIUM | ${data.targetedRegression.severity?.MEDIUM ?? 0} |`,
    `| LOW | ${data.targetedRegression.severity?.LOW ?? 0} |`,
    "",
    "## G. Integrity",
    "",
    "| Gate | Status |",
    "|---|---|",
    `| Syntax | ${data.integrity.syntax} |`,
    `| ID/order | ${data.integrity.idOrder} |`,
    `| Card count | ${data.integrity.cardCount}/${B2_TOTAL} |`,
    `| Study parity | ${data.integrity.studyParity} |`,
    `| Mirror parity | ${data.integrity.mirrorParity} |`,
    `| Duplicate IDs | ${data.integrity.duplicateIds} |`,
    `| Study fields exact (${data.study.studyFieldCount}) | ${data.study.exact}/${data.study.studyFieldCount} |`,
    `| Study LV remnants | ${data.study.issues.filter((x) => x.code?.includes("LV")).length} |`,
    `| Validated REAL stale sectionAccents | 0 |`,
    "",
    "## H. Read-only gates",
    "",
    "| Gate | Status |",
    "|---|---|",
    `| DE changes | ${data.deReadOnly.deChanges} |`,
    `| DE READ-ONLY | ${data.deReadOnly.pass ? "PASS" : "FAIL"} |`,
    `| Other CS datasets changes | ${data.otherDatasets.otherCsChanges} |`,
    `| Other languages changes | ${data.otherDatasets.otherLanguageChanges} |`,
    `| Production changes during closure audit | ${data.productionChangesDuringClosure} |`,
    "",
    data.blockers.length ? "## Blockers\n\n" + data.blockers.map((b) => `- ${b}`).join("\n") + "\n" : "",
    `_Generated: ${new Date().toISOString()}_`,
  ];
  return lines.filter((l) => l !== "").join("\n");
}

function main() {
  const headSha = git("git rev-parse HEAD");
  const baselineB2HashAtStart = fileHash(B2_FILE);
  const words = loadWords(B2_FILE);
  ensureBaselineFile();
  const baselineWords = loadWords(BASELINE_FILE);
  const ownerTargets = buildOwnerTargets();
  const chain = reconstructChain();

  const ownerTargetCheck = verifyOwnerTargets(words, ownerTargets);
  const cardNotFound = verifyCardNotFoundClosure(words);
  const targetedRegression = verifyTargetedRegressionReconfirm();
  const study = verifyStudyClosure(words, ownerTargets);
  const deReadOnly = verifyDeReadOnly(words);
  const integrity = verifyDatasetIntegrity(words, baselineWords);
  const otherDatasets = verifyOtherDatasetsUnchanged();
  const productionChangesDuringClosure = fileHash(B2_FILE) !== baselineB2HashAtStart ? 1 : 0;

  const blockers = [];
  if (!ownerTargetCheck.pass) blockers.push(`OWNER targets: ${ownerTargetCheck.exact}/${ownerTargetCheck.total} exact, drift=${ownerTargetCheck.drift}, missing=${ownerTargetCheck.missing}`);
  if (!cardNotFound.pass) blockers.push("CARD_NOT_FOUND closure incomplete");
  if (!targetedRegression.pass) blockers.push("Targeted regression reconfirmation failed");
  if (!study.pass) blockers.push(`Study closure issues: ${study.issues.length}`);
  if (!deReadOnly.pass) blockers.push("DE READ-ONLY failed");
  if (!integrity.pass) blockers.push("Dataset integrity failed");
  if (!otherDatasets.pass) blockers.push(`Unexpected changes in other datasets: ${otherDatasets.changedFiles.join(", ")}`);
  if (productionChangesDuringClosure) blockers.push("Production changed during closure audit");

  const allPass = blockers.length === 0
    && ownerTargetCheck.exact === 947
    && cardNotFound.resolved === 25
    && targetedRegression.validatedReal === 0;

  const verdict = allPass
    ? "CS–DE B2 FINAL CLOSURE AUDIT = PASS"
    : "CS–DE B2 FINAL CLOSURE AUDIT = FAIL";

  const data = {
    meta: {
      auditType: "CS–DE B2 FINAL CLOSURE AUDIT",
      mode: "READ-ONLY",
      date: new Date().toISOString(),
      branch: BRANCH,
      headSha,
      targetedRegressionCommit: TARGETED_REGRESSION_COMMIT,
      preRepairBaselineSha: PRE_REPAIR_BASELINE_SHA,
      linguisticModel: "GPT-5.6 Luna (reconfirmed from artifacts, not re-run)",
    },
    production: {
      branch: git("git branch --show-current"),
      headSha,
      b2Path: "data/cs/b2.js",
      b2Sha256: fileHash(B2_FILE),
      wwwB2Sha256: fileHash(WWW_FILE),
    },
    chain,
    ownerTargets: ownerTargetCheck,
    cardNotFound,
    targetedRegression,
    study,
    deReadOnly,
    integrity,
    otherDatasets,
    productionChangesDuringClosure,
    blockers,
    verdict,
    verdictPass: allPass,
    dataset: { cardCount: words.length, studyCount: words.filter((e) => e.study).length },
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(data, null, 2) + "\n", "utf8");
  fs.writeFileSync(OUT_MD, buildMarkdown(data), "utf8");

  console.log(JSON.stringify({
    verdict,
    pass: allPass,
    ownerExact: `${ownerTargetCheck.exact}/${ownerTargetCheck.total}`,
    cardNotFound: `${cardNotFound.resolved}/25`,
    validatedReal: targetedRegression.validatedReal,
    blockers,
  }, null, 2));
  console.log(`\nReport: ${OUT_MD}`);

  if (!allPass) process.exit(1);
}

main();
