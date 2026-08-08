#!/usr/bin/env node
/**
 * Apply BS-DE B2 validated FIX manifest (exact currentText → correctedText).
 * No API. Source: reports/temp/bs-b2-audit-validation.json
 *
 * Run: node scripts/apply-bs-b2-validated-fixes.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const DRY_RUN = process.argv.includes("--dry-run");
const MANIFEST = path.join(ROOT, "reports", "temp", "bs-b2-audit-validation.json");
const BS_FILE = path.join(ROOT, "data", "bs", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b2.js");
const APPLY_LOG = path.join(ROOT, "reports", "temp", "bs-b2-validated-fix-apply-log.json");
const REGRESSION_SCOPE = path.join(ROOT, "reports", "temp", "bs-b2-post-fix-regression-scope.json");
const OWNER_REVIEW = path.join(ROOT, "reports", "temp", "bs-b2-owner-review-pending.json");
const REPORT_MD = path.join(ROOT, "reports", "bs-b2-validated-fixes-apply-report.md");

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
  const candidates = [
    fix.cardId,
    normalizeCardId(fix.cardId),
  ];
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

function jsonEqual(a, b) {
  try {
    return JSON.stringify(a) === JSON.stringify(b);
  } catch {
    return false;
  }
}

function verifyManifest(fixes) {
  if (fixes.length !== 1072) {
    throw new Error(`Expected 1072 FIX entries, found ${fixes.length}`);
  }
  const seen = new Set();
  const byField = new Map();
  for (const f of fixes) {
    if (!f.cardId || !f.field || !f.correctedText) {
      throw new Error(`Invalid FIX missing required fields: ${f.findingId}`);
    }
    const key = `${f.cardId}|${f.field}|${f.currentText || ""}`;
    if (seen.has(key)) throw new Error(`Duplicate patch key: ${key}`);
    seen.add(key);
    const fk = `${f.cardId}|${f.field}`;
    if (!byField.has(fk)) byField.set(fk, new Set());
    byField.get(fk).add(f.correctedText);
  }
  const conflicts = [];
  for (const [k, texts] of byField) {
    if (texts.size > 1) conflicts.push({ field: k, texts: [...texts] });
  }
  if (conflicts.length) {
    throw new Error(`PATCH_CONFLICT in manifest: ${JSON.stringify(conflicts.slice(0, 3))}`);
  }
}

function applyOne(entry, fix) {
  const target = resolveTarget(entry, fix.field);
  if (!target) {
    return { applyStatus: "NOT_FOUND", reason: "unresolved_field" };
  }

  const current = getAt(target.root, target.path);
  const expected = fix.currentText;
  const corrected = fix.correctedText;

  if (current === undefined || current === null) {
    return { applyStatus: "NOT_FOUND", reason: "field_missing" };
  }

  // Whole-object sectionAccents replacement
  if (
    fix.field.startsWith("sectionAccents.")
    && typeof current === "object"
    && typeof expected === "string"
    && expected.trim().startsWith("{")
  ) {
    let expectedObj;
    let correctedObj;
    try {
      expectedObj = JSON.parse(expected);
      correctedObj = JSON.parse(corrected);
    } catch {
      return { applyStatus: "NOT_FOUND", reason: "invalid_json_object_fix" };
    }
    if (jsonEqual(current, expectedObj)) {
      if (!DRY_RUN) setAt(target.root, target.path, correctedObj);
      return { applyStatus: "APPLIED" };
    }
    if (jsonEqual(current, correctedObj)) return { applyStatus: "ALREADY_FIXED" };
    return { applyStatus: "STALE_CURRENT_TEXT", actual: JSON.stringify(current) };
  }

  // sectionAccents subtree exact string replacement
  if (fix.field.startsWith("sectionAccents.") && typeof current === "object") {
    const r = replaceExactInValue(current, expected, corrected);
    if (r.replaced) {
      if (!DRY_RUN) setAt(target.root, target.path, r.value);
      return { applyStatus: "APPLIED" };
    }
    if (replaceExactInValue(current, corrected, corrected).replaced || jsonEqual(current, corrected)) {
      return { applyStatus: "ALREADY_FIXED" };
    }
    return { applyStatus: "STALE_CURRENT_TEXT", actual: JSON.stringify(current).slice(0, 120) };
  }

  if (target.kind === "tip_array" || target.kind === "important_array") {
    if (!Array.isArray(current)) {
      return { applyStatus: "NOT_FOUND", reason: "expected_array" };
    }
    const r = applyArrayStringFix(current, expected, corrected);
    if (r.replaced) {
      if (!DRY_RUN) setAt(target.root, target.path, r.value);
      return { applyStatus: "APPLIED" };
    }
    const already = current.some((item) => typeof item === "string" && (item === corrected || item.includes(corrected)));
    if (already) return { applyStatus: "ALREADY_FIXED" };
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

function collectOwnerReview(results) {
  const pending = {
    SOURCE_LV_ISSUE: [],
    DE_SOURCE_ISSUE: [],
    NEEDS_REVIEW: [],
    STALE_AFTER_AUDIT: [],
  };
  for (const r of results) {
    if (pending[r.verdict]) {
      pending[r.verdict].push({
        findingId: r.findingId,
        cardId: r.cardId,
        field: r.field,
        currentText: r.currentText,
        shortReason: r.shortReason,
      });
    }
  }
  return pending;
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
    const collect = JSON.parse(execSync("node scripts/audit-bs-b2-collect.js", { encoding: "utf8" }));
    out.sectionAccentsTechnical = collect.sectionAccentsTechnical ?? 0;
    out.lvRemnants = collect.lvRemnants ?? "CHECK";
    out.enRemnants = collect.enRemnants ?? "CHECK";
    out.studyBreakdown = collect.study;
  } catch {
    out.sectionAccentsTechnical = "CHECK";
  }
  return out;
}

function main() {
  const data = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));
  const allResults = data.results || [];
  const fixes = allResults.filter((r) => r.verdict === "FIX");
  verifyManifest(fixes);

  const words = loadWords(BS_FILE);
  const index = buildIndex(words);
  const resolvedCardIds = new Map();

  const log = [];
  const statusCounts = {
    APPLIED: 0,
    ALREADY_FIXED: 0,
    STALE_CURRENT_TEXT: 0,
    PATCH_CONFLICT: 0,
    NOT_FOUND: 0,
  };
  const severityApplied = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const methodApplied = { deterministic: 0, luna: 0 };
  const patternsApplied = {};
  const changedCards = new Set();

  for (const fix of fixes) {
    const entry = findEntry(index, fix);
    const resolvedCardId = entry ? (entry.study?.id || entryId(entry, words.indexOf(entry))) : fix.cardId;
    if (entry) resolvedCardIds.set(fix.cardId, resolvedCardId);
    let applyStatus = "NOT_FOUND";
    let note = "";
    if (!entry) {
      note = "card_not_found";
    } else {
      const result = applyOne(entry, fix);
      applyStatus = result.applyStatus;
      note = result.reason || result.actual || "";
      if (applyStatus === "APPLIED" || applyStatus === "ALREADY_FIXED") {
        changedCards.add(resolvedCardId);
        if (applyStatus === "APPLIED") {
          const sev = fix.validatedSeverity || "MEDIUM";
          severityApplied[sev] = (severityApplied[sev] || 0) + 1;
          methodApplied[fix.validationMethod] = (methodApplied[fix.validationMethod] || 0) + 1;
          const pat = fix.pattern || "other";
          patternsApplied[pat] = (patternsApplied[pat] || 0) + 1;
        }
      }
    }
    statusCounts[applyStatus] = (statusCounts[applyStatus] || 0) + 1;
    log.push({
      findingId: fix.findingId,
      cardId: fix.cardId,
      resolvedCardId: resolvedCardIds.get(fix.cardId) || null,
      field: fix.field,
      severity: fix.validatedSeverity,
      validationMethod: fix.validationMethod,
      pattern: fix.pattern,
      expectedCurrentText: fix.currentText,
      correctedText: fix.correctedText,
      applyStatus,
      note,
    });
  }

  if (!DRY_RUN) {
    writeB2(BS_FILE, words);
    writeB2(WWW_FILE, words);
    // Sync sectionAccents for changed study cards
    try {
      execSync("node scripts/fix-bs-b2-section-accents.js", { stdio: "inherit" });
    } catch (e) {
      console.warn("sectionAccents sync warning:", e.message);
    }
  }

  const validation = DRY_RUN ? {} : runValidations();
  const ownerPending = collectOwnerReview(allResults);

  const regressionCardIds = [...changedCards].sort();
  const applyReport = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    manifestFixExpected: 1072,
    manifestFixFound: fixes.length,
    statusCounts,
    severityApplied,
    methodApplied,
    patternsApplied,
    changedCards: regressionCardIds.length,
    validation,
    openAiRequests: 0,
    log,
  };

  fs.mkdirSync(path.dirname(APPLY_LOG), { recursive: true });
  fs.writeFileSync(APPLY_LOG, JSON.stringify(applyReport, null, 2));
  fs.writeFileSync(REGRESSION_SCOPE, JSON.stringify({
    generatedAt: new Date().toISOString(),
    cardIds: regressionCardIds,
    count: regressionCardIds.length,
    source: "bs-b2-validated-fix-apply",
  }, null, 2));
  fs.writeFileSync(OWNER_REVIEW, JSON.stringify(ownerPending, null, 2));

  const lines = [
    "# BS–DE B2 — validated fixes apply report",
    "",
    `**Datums:** ${new Date().toISOString().slice(0, 10)}`,
    "**OpenAI API requests:** 0",
    "",
    "## Input",
    "",
    `| Metrika | Skaits |`,
    `|---|---:|`,
    `| validated FIX expected | 1072 |`,
    `| manifest FIX found | ${fixes.length} |`,
    `| unique target cards | ${regressionCardIds.length} |`,
    `| patch conflicts (manifest) | 0 |`,
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
    "",
    "## By severity (APPLIED)",
    "",
    "| Severity | Applied |",
    "|---|---:|",
    `| CRITICAL | ${severityApplied.CRITICAL || 0} |`,
    `| HIGH | ${severityApplied.HIGH || 0} |`,
    `| MEDIUM | ${severityApplied.MEDIUM || 0} |`,
    `| LOW | ${severityApplied.LOW || 0} |`,
    "",
    "## By validation method (APPLIED)",
    "",
    `| deterministic | ${methodApplied.deterministic || 0} |`,
    `| Luna | ${methodApplied.luna || 0} |`,
    "",
    "## Patterns applied",
    "",
    ...Object.entries(patternsApplied).map(([k, v]) => `- ${k}: ${v}`),
    "",
    "## Validation",
    "",
    ...Object.entries(validation).map(([k, v]) => `- **${k}:** ${v}`),
    "",
    "## Remaining manual/source scope",
    "",
    `- SOURCE_LV_ISSUE: ${ownerPending.SOURCE_LV_ISSUE.length}`,
    `- DE_SOURCE_ISSUE: ${ownerPending.DE_SOURCE_ISSUE.length}`,
    `- NEEDS_REVIEW: ${ownerPending.NEEDS_REVIEW.length}`,
    `- STALE_AFTER_AUDIT: ${ownerPending.STALE_AFTER_AUDIT.length}`,
    "",
    statusCounts.APPLIED + statusCounts.ALREADY_FIXED === 1072 && statusCounts.STALE_CURRENT_TEXT === 0 && statusCounts.NOT_FOUND === 0
      ? "**BS–DE B2 VALIDATED FIXES = APPLIED**"
      : "**BS–DE B2 VALIDATED FIXES = INCOMPLETE**",
  ];
  fs.writeFileSync(REPORT_MD, `${lines.join("\n")}\n`, "utf8");

  console.log(JSON.stringify({
    APPLIED: statusCounts.APPLIED,
    ALREADY_FIXED: statusCounts.ALREADY_FIXED,
    STALE: statusCounts.STALE_CURRENT_TEXT,
    NOT_FOUND: statusCounts.NOT_FOUND,
    changedCards: regressionCardIds.length,
    validation,
  }, null, 2));
}

main();
