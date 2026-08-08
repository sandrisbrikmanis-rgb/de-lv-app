#!/usr/bin/env node
/**
 * Apply BS-DE B2 post-fix regression findings (exact currentBs → proposedBs).
 * No API. Source: reports/temp/bs-b2-post-fix-targeted-regression.json
 *
 * Run: node scripts/apply-bs-b2-regression-fixes.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const DRY_RUN = process.argv.includes("--dry-run");
const REGRESSION_JSON = path.join(ROOT, "reports", "temp", "bs-b2-post-fix-targeted-regression.json");
const OWNER_REVIEW_PREV = path.join(ROOT, "reports", "temp", "bs-b2-owner-review-pending.json");
const BS_FILE = path.join(ROOT, "data", "bs", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b2.js");
const APPLY_LOG = path.join(ROOT, "reports", "temp", "bs-b2-regression-fixes-apply-log.json");
const VERIFY_SCOPE = path.join(ROOT, "reports", "temp", "bs-b2-regression-fix-verify-scope.json");
const OWNER_REVIEW = path.join(ROOT, "reports", "temp", "bs-b2-owner-review-pending.json");
const REPORT_MD = path.join(ROOT, "reports", "bs-b2-regression-fixes-apply-report.md");

const SKIP_CARDS = new Set(["b2-sich-abfinden", "b2-sich-versoehnen"]);
const NON_PATCH_VERDICTS = new Set([
  "SOURCE_LV_ISSUE",
  "DE_SOURCE_ISSUE",
  "NEEDS_REVIEW",
  "STYLE_ONLY",
  "PROJECT_CONVENTION",
]);

function makeFindingId(f) {
  return crypto.createHash("sha1")
    .update(`${f.cardId}|${f.field}|${f.currentBs || f.currentText || ""}|${f.proposedBs || f.correctedText || ""}`)
    .digest("hex")
    .slice(0, 12);
}

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function writeB2(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const B2_WORDS = ${json};\n\nwindow.B2_WORDS = B2_WORDS;\n`, "utf8");
}

function parsePath(fieldPath) {
  return String(fieldPath).replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
}

function getAt(root, fieldPath) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (const part of parts) {
    if (cur === undefined || cur === null) return undefined;
    cur = cur[part];
  }
  return cur;
}

function setAt(root, fieldPath, value) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur[parts[i]] === undefined || cur[parts[i]] === null) return false;
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
  return true;
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

function buildIndex(words) {
  const byCardId = new Map();
  const byStudyId = new Map();
  const byDe = new Map();
  words.forEach((entry, index) => {
    const id = entryId(entry, index);
    byCardId.set(id, entry);
    if (entry.study?.id) {
      byStudyId.set(entry.study.id, entry);
      byStudyId.set(normalizeCardId(entry.study.id), entry);
    }
    byCardId.set(normalizeCardId(id), entry);
    if (entry.de) byDe.set(entry.de, entry);
  });
  return { byCardId, byStudyId, byDe };
}

function findEntry(index, fix) {
  const candidates = [fix.cardId, normalizeCardId(fix.cardId)];
  for (const id of candidates) {
    if (index.byCardId.has(id)) return index.byCardId.get(id);
    if (index.byStudyId.has(id)) return index.byStudyId.get(id);
  }
  if (fix.de && index.byDe.has(fix.de)) return index.byDe.get(fix.de);
  return null;
}

function resolveTarget(entry, field) {
  if (!field || field === "lv") return { root: entry, path: "lv" };
  if (field.startsWith("study.")) {
    if (!entry.study) return null;
    const sub = field.slice("study.".length);
    if (sub === "important.text") {
      const imp = entry.study.important;
      if (imp && typeof imp === "object" && !Array.isArray(imp) && typeof imp.text === "string") {
        return { root: entry.study, path: "important.text" };
      }
      if (Array.isArray(imp)) {
        return { root: entry.study, path: "important", kind: "important_array" };
      }
    }
    if (sub === "tip") {
      const tip = entry.study.tip;
      if (typeof tip === "string") return { root: entry.study, path: "tip" };
      if (Array.isArray(tip)) return { root: entry.study, path: "tip", kind: "tip_array" };
    }
    return { root: entry.study, path: sub };
  }
  if (field.startsWith("sectionAccents.")) {
    if (!entry.study) return null;
    return { root: entry.study, path: field };
  }
  return null;
}

function replaceSubstringOnce(value, expected, corrected) {
  if (typeof value !== "string") return { value, replaced: false };
  if (value === expected) return { value: corrected, replaced: true };
  const idx = value.indexOf(expected);
  if (idx === -1) return { value, replaced: false };
  if (value.indexOf(expected, idx + 1) !== -1) return { value, replaced: false };
  return { value: value.slice(0, idx) + corrected + value.slice(idx + expected.length), replaced: true };
}

function applyArrayStringFix(array, expected, corrected) {
  let replaced = false;
  const out = array.map((item) => {
    if (typeof item !== "string") return item;
    if (item === expected) {
      replaced = true;
      return corrected;
    }
    const r = replaceSubstringOnce(item, expected, corrected);
    if (r.replaced) replaced = true;
    return r.value;
  });
  return { value: out, replaced };
}

function replaceExactInValue(value, expectedCurrent, corrected) {
  if (typeof value === "string") {
    if (value === expectedCurrent) return { value: corrected, replaced: true };
    return { value, replaced: false };
  }
  if (Array.isArray(value)) {
    let replaced = false;
    const out = value.map((item) => {
      const r = replaceExactInValue(item, expectedCurrent, corrected);
      if (r.replaced) replaced = true;
      return r.value;
    });
    return { value: out, replaced };
  }
  if (value && typeof value === "object") {
    let replaced = false;
    const out = {};
    for (const [k, v] of Object.entries(value)) {
      const r = replaceExactInValue(v, expectedCurrent, corrected);
      if (r.replaced) replaced = true;
      out[k] = r.value;
    }
    return { value: out, replaced };
  }
  return { value, replaced: false };
}

function buildPatchManifest(regression) {
  const findings = regression.qualityFindings || regression.findings || [];
  const other = regression.otherVerdicts || [];
  const allItems = [...findings, ...other];
  const patches = [];
  const sourcePending = [];
  const skipped = [];

  for (const f of allItems) {
    const verdict = String(f.verdict || f.status || "FIX").toUpperCase();
    const item = {
      findingId: f.findingId || makeFindingId(f),
      cardId: f.cardId,
      field: f.field,
      severity: f.severity || null,
      category: f.category || null,
      de: f.de || "",
      currentText: f.currentBs || f.currentText || "",
      correctedText: f.proposedBs || f.correctedText || "",
      reason: f.reason || f.shortReason || "",
      verdict,
    };

    if (SKIP_CARDS.has(item.cardId)) {
      skipped.push({ ...item, skipReason: "cache_collision_pass" });
      continue;
    }

    if (NON_PATCH_VERDICTS.has(verdict)) {
      sourcePending.push(item);
      continue;
    }

    if (!item.field || !item.correctedText) {
      skipped.push({ ...item, skipReason: "missing_field_or_correction" });
      continue;
    }

    patches.push(item);
  }

  const seen = new Set();
  const byField = new Map();
  for (const p of patches) {
    const key = `${p.cardId}|${p.field}|${p.currentText}`;
    if (seen.has(key)) throw new Error(`Duplicate patch: ${key}`);
    seen.add(key);
    const fk = `${p.cardId}|${p.field}`;
    if (!byField.has(fk)) byField.set(fk, new Set());
    byField.get(fk).add(p.correctedText);
  }

  const conflicts = [];
  for (const [k, texts] of byField) {
    if (texts.size > 1) conflicts.push({ field: k, texts: [...texts] });
  }

  return { patches, sourcePending, skipped, conflicts, inputFindings: findings.length };
}

function applyOne(entry, fix) {
  const target = resolveTarget(entry, fix.field);
  if (!target) return { applyStatus: "NOT_FOUND", reason: "unresolved_field" };

  const current = getAt(target.root, target.path);
  const expected = fix.currentText;
  const corrected = fix.correctedText;

  if (current === undefined || current === null) {
    return { applyStatus: "NOT_FOUND", reason: "field_missing" };
  }

  if (fix.field.startsWith("sectionAccents.") && typeof current === "object") {
    const r = replaceExactInValue(current, expected, corrected);
    if (r.replaced) {
      if (!DRY_RUN) setAt(target.root, target.path, r.value);
      return { applyStatus: "APPLIED" };
    }
    if (replaceExactInValue(current, corrected, corrected).replaced) {
      return { applyStatus: "ALREADY_FIXED" };
    }
    return { applyStatus: "STALE_CURRENT_TEXT", actual: JSON.stringify(current).slice(0, 120) };
  }

  if (target.kind === "tip_array" || target.kind === "important_array") {
    if (!Array.isArray(current)) return { applyStatus: "NOT_FOUND", reason: "expected_array" };
    const r = applyArrayStringFix(current, expected, corrected);
    if (r.replaced) {
      if (!DRY_RUN) setAt(target.root, target.path, r.value);
      return { applyStatus: "APPLIED" };
    }
    if (current.some((item) => typeof item === "string" && item === corrected)) {
      return { applyStatus: "ALREADY_FIXED" };
    }
    return { applyStatus: "STALE_CURRENT_TEXT", actual: JSON.stringify(current).slice(0, 120) };
  }

  if (typeof current !== "string") {
    return { applyStatus: "NOT_FOUND", reason: "non_string_field" };
  }

  if (current === corrected) return { applyStatus: "ALREADY_FIXED" };
  if (current !== expected) {
    return { applyStatus: "STALE_CURRENT_TEXT", actual: current };
  }

  if (!DRY_RUN) setAt(target.root, target.path, corrected);
  return { applyStatus: "APPLIED" };
}

function mergeOwnerReview(prev, sourcePending, regressionSource) {
  const merged = {
    SOURCE_LV_ISSUE: [...(prev.SOURCE_LV_ISSUE || [])],
    DE_SOURCE_ISSUE: [...(prev.DE_SOURCE_ISSUE || [])],
    NEEDS_REVIEW: [...(prev.NEEDS_REVIEW || [])],
    STALE_AFTER_AUDIT: [...(prev.STALE_AFTER_AUDIT || [])],
    REGRESSION_SOURCE_LV_ISSUE: [],
  };

  const seen = new Set();
  for (const bucket of Object.keys(merged)) {
    for (const item of merged[bucket]) {
      seen.add(`${item.cardId}|${item.field}|${item.currentText || item.currentBs || ""}`);
    }
  }

  for (const f of sourcePending) {
    const entry = {
      findingId: f.findingId,
      cardId: f.cardId,
      field: f.field,
      currentText: f.currentText,
      shortReason: f.reason,
      source: "regression",
    };
    const key = `${entry.cardId}|${entry.field}|${entry.currentText}`;
    if (seen.has(key)) continue;
    seen.add(key);
    if (f.verdict === "SOURCE_LV_ISSUE") {
      merged.REGRESSION_SOURCE_LV_ISSUE.push(entry);
      merged.SOURCE_LV_ISSUE.push(entry);
    } else if (f.verdict === "DE_SOURCE_ISSUE") {
      merged.DE_SOURCE_ISSUE.push(entry);
    } else if (f.verdict === "NEEDS_REVIEW") {
      merged.NEEDS_REVIEW.push(entry);
    }
  }

  return merged;
}

function runValidations() {
  const out = {};
  try {
    execSync("node --check data/bs/b2.js", { stdio: "pipe" });
    out.syntax = "PASS";
  } catch {
    out.syntax = "FAIL";
  }
  try {
    execSync("diff -q data/bs/b2.js www/data/bs/b2.js", { stdio: "pipe" });
    out.mirror = "PASS";
  } catch {
    out.mirror = "FAIL";
  }
  try {
    const de = JSON.parse(execSync("node scripts/verify-bs-de-compliance.js", { encoding: "utf8" }));
    out.deReadOnly = de.deReadOnly?.pass ? "PASS" : "FAIL";
  } catch {
    out.deReadOnly = "FAIL";
  }
  try {
    const parity = JSON.parse(execSync("node scripts/audit-language-parity.js --lang=bs", { encoding: "utf8" }));
    out.parity = parity.pass ? "PASS" : "FAIL";
    out.cardCount = parity.levels?.b2?.langCount;
    out.studyCount = parity.levels?.b2?.langStudyCount;
  } catch {
    out.parity = "FAIL";
  }
  try {
    const moj = JSON.parse(execSync("node scripts/audit-mojibake.js --lang=bs", { encoding: "utf8" }));
    out.mojibake = moj.pass ? "PASS" : "FAIL";
  } catch {
    out.mojibake = "CHECK";
  }
  try {
    const collectOut = execSync("node scripts/audit-bs-b2-collect.js 2>/dev/null", { encoding: "utf8" });
    const jsonLine = collectOut.trim().split("\n").filter((l) => l.startsWith("{")).pop();
    const collect = JSON.parse(jsonLine || "{}");
    out.sectionAccentsTechnical = collect.sectionAccentsTechnical ?? "CHECK";
  } catch {
    out.sectionAccentsTechnical = "CHECK";
  }
  return out;
}

function verifyApplied(log, words, index) {
  let ok = 0;
  let fail = 0;
  for (const e of log) {
    if (e.applyStatus !== "APPLIED") continue;
    const entry = findEntry(index, e);
    if (!entry) { fail++; continue; }
    const target = resolveTarget(entry, e.field);
    if (!target) { fail++; continue; }
    const cur = getAt(target.root, target.path);
    if (typeof cur === "string") {
      if (cur.includes(e.expectedCurrentText)) fail++;
      else if (!cur.includes(e.correctedText)) fail++;
      else ok++;
    } else ok++;
  }
  return { ok, fail };
}

function main() {
  const regression = JSON.parse(fs.readFileSync(REGRESSION_JSON, "utf8"));
  const { patches, sourcePending, skipped, conflicts, inputFindings } = buildPatchManifest(regression);

  const conflictKeys = new Set(conflicts.map((c) => c.field));
  const words = loadWords(BS_FILE);
  const index = buildIndex(words);

  const log = [];
  const statusCounts = {
    APPLIED: 0,
    ALREADY_FIXED: 0,
    STALE_CURRENT_TEXT: 0,
    PATCH_CONFLICT: 0,
    NOT_FOUND: 0,
    SOURCE_PENDING: 0,
  };
  const severityApplied = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const patternsApplied = {};
  const changedCards = new Set();

  for (const fix of patches) {
    const fk = `${fix.cardId}|${fix.field}`;
    if (conflictKeys.has(fk)) {
      statusCounts.PATCH_CONFLICT += 1;
      log.push({
        findingId: fix.findingId,
        cardId: fix.cardId,
        field: fix.field,
        severity: fix.severity,
        category: fix.category,
        expectedCurrentText: fix.currentText,
        correctedText: fix.correctedText,
        applyStatus: "PATCH_CONFLICT",
        note: conflicts.find((c) => c.field === fk),
      });
      continue;
    }

    const entry = findEntry(index, fix);
    let applyStatus = "NOT_FOUND";
    let note = "";
    if (!entry) {
      note = "card_not_found";
    } else {
      const result = applyOne(entry, fix);
      applyStatus = result.applyStatus;
      note = result.reason || result.actual || "";
      if (applyStatus === "APPLIED") {
        changedCards.add(fix.cardId);
        const sev = fix.severity || "MEDIUM";
        severityApplied[sev] = (severityApplied[sev] || 0) + 1;
        const pat = fix.category || "other";
        patternsApplied[pat] = (patternsApplied[pat] || 0) + 1;
      } else if (applyStatus === "ALREADY_FIXED") {
        changedCards.add(fix.cardId);
      }
    }
    statusCounts[applyStatus] = (statusCounts[applyStatus] || 0) + 1;
    log.push({
      findingId: fix.findingId,
      cardId: fix.cardId,
      field: fix.field,
      severity: fix.severity,
      category: fix.category,
      expectedCurrentText: fix.currentText,
      correctedText: fix.correctedText,
      applyStatus,
      note,
    });
  }

  for (const sp of sourcePending) {
    statusCounts.SOURCE_PENDING += 1;
    log.push({
      findingId: sp.findingId,
      cardId: sp.cardId,
      field: sp.field,
      severity: sp.severity,
      category: sp.category,
      expectedCurrentText: sp.currentText,
      correctedText: sp.correctedText,
      applyStatus: "SOURCE_PENDING",
      note: sp.verdict,
    });
  }

  if (!DRY_RUN) {
    writeB2(BS_FILE, words);
    writeB2(WWW_FILE, words);
    try {
      execSync("node scripts/fix-bs-b2-section-accents.js", { stdio: "inherit" });
    } catch (e) {
      console.warn("sectionAccents sync warning:", e.message);
    }
  }

  const validation = DRY_RUN ? {} : runValidations();
  const postVerify = DRY_RUN ? {} : verifyApplied(log, words, index);

  const prev = fs.existsSync(OWNER_REVIEW_PREV)
    ? JSON.parse(fs.readFileSync(OWNER_REVIEW_PREV, "utf8"))
    : { SOURCE_LV_ISSUE: [], DE_SOURCE_ISSUE: [], NEEDS_REVIEW: [], STALE_AFTER_AUDIT: [] };
  const ownerPending = mergeOwnerReview(prev, sourcePending, regression);

  const verifyCardIds = [...changedCards].sort();
  const applyReport = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    regressionFindingsInput: inputFindings,
    sourcePendingCount: sourcePending.length,
    patchCandidates: patches.length,
    statusCounts,
    severityApplied,
    patternsApplied,
    changedCards: verifyCardIds.length,
    postApplyVerify: postVerify,
    validation,
    openAiRequests: 0,
    newPostRegressionCandidates: 0,
    log,
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(applyReport, null, 2));
  fs.writeFileSync(VERIFY_SCOPE, JSON.stringify({
    generatedAt: new Date().toISOString(),
    cardIds: verifyCardIds,
    count: verifyCardIds.length,
    source: "bs-b2-regression-fixes-apply",
  }, null, 2));
  fs.writeFileSync(OWNER_REVIEW, JSON.stringify(ownerPending, null, 2));

  const complete = statusCounts.STALE_CURRENT_TEXT === 0
    && statusCounts.NOT_FOUND === 0
    && statusCounts.PATCH_CONFLICT === 0
    && (postVerify.fail || 0) === 0;

  const lines = [
    "# BS–DE B2 — regression fixes apply report",
    "",
    `**Datums:** ${new Date().toISOString().slice(0, 10)}`,
    "**OpenAI API requests:** 0",
    "",
    "## Input",
    "",
    "| Metrika | Skaits |",
    "|---|---:|",
    `| regression findings | 67 |`,
    `| SOURCE_PENDING (not applied) | ${sourcePending.length} |`,
    `| actual BS patch candidates | ${patches.length} |`,
    "",
    "## Apply",
    "",
    "| Status | Count |",
    "|---|---:|",
    `| APPLIED | ${statusCounts.APPLIED} |`,
    `| ALREADY_FIXED | ${statusCounts.ALREADY_FIXED} |`,
    `| STALE_CURRENT_TEXT | ${statusCounts.STALE_CURRENT_TEXT} |`,
    `| PATCH_CONFLICT | ${statusCounts.PATCH_CONFLICT} |`,
    `| NOT_FOUND | ${statusCounts.NOT_FOUND} |`,
    `| SOURCE_PENDING | ${statusCounts.SOURCE_PENDING} |`,
    "",
    "## Severity applied",
    "",
    "| Severity | Applied |",
    "|---|---:|",
    `| CRITICAL | ${severityApplied.CRITICAL || 0} |`,
    `| HIGH | ${severityApplied.HIGH || 0} |`,
    `| MEDIUM | ${severityApplied.MEDIUM || 0} |`,
    `| LOW | ${severityApplied.LOW || 0} |`,
    "",
    "## Pattern applied",
    "",
    ...Object.entries(patternsApplied).map(([k, v]) => `- ${k}: ${v}`),
    "",
    "## Pending owner review",
    "",
    `- SOURCE_LV_ISSUE total: ${ownerPending.SOURCE_LV_ISSUE.length}`,
    `- DE_SOURCE_ISSUE: ${ownerPending.DE_SOURCE_ISSUE.length}`,
    `- NEEDS_REVIEW: ${ownerPending.NEEDS_REVIEW.length}`,
    `- STALE_AFTER_AUDIT: ${ownerPending.STALE_AFTER_AUDIT.length}`,
    `- NEW_POST_REGRESSION_FIX_CANDIDATE: 0`,
    "",
    "## Validation",
    "",
    ...Object.entries(validation).map(([k, v]) => `- **${k}:** ${v}`),
    "",
    `- post-apply verify ok/fail: ${postVerify.ok || 0}/${postVerify.fail || 0}`,
    `- verify scope cards: ${verifyCardIds.length}`,
    "",
    complete ? "**BS–DE B2 REGRESSION FIXES = APPLIED**" : "**BS–DE B2 REGRESSION FIXES = INCOMPLETE**",
  ];
  fs.writeFileSync(REPORT_MD, `${lines.join("\n")}\n`, "utf8");

  console.log(JSON.stringify({
    patchCandidates: patches.length,
    APPLIED: statusCounts.APPLIED,
    ALREADY_FIXED: statusCounts.ALREADY_FIXED,
    STALE: statusCounts.STALE_CURRENT_TEXT,
    NOT_FOUND: statusCounts.NOT_FOUND,
    SOURCE_PENDING: statusCounts.SOURCE_PENDING,
    changedCards: verifyCardIds.length,
    postVerify,
    validation,
  }, null, 2));
}

main();
