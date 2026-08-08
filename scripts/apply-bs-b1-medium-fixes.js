#!/usr/bin/env node
/**
 * Phase C — Apply Luna medium FIX verdicts locally ($0 API).
 * Run: node scripts/apply-bs-b1-medium-fixes.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const DRY_RUN = process.argv.includes("--dry-run");
const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b1.js");
const VERDICTS_PATH = path.join(ROOT, "reports", "temp", "bs-b1-medium-luna-verdicts.json");
const APPLIED_PATH = path.join(ROOT, "reports", "temp", "bs-b1-medium-fix-applied.json");
const REGRESSION_SCOPE_PATH = path.join(ROOT, "reports", "temp", "bs-b1-medium-regression-scope.json");

const stats = {
  fixVerdicts: 0,
  applied: 0,
  skipped: 0,
  studyCardsChanged: new Set(),
  mainTranslationsChanged: 0,
  studyFieldsChanged: 0,
  unexpectedCriticalHigh: [],
  changes: [],
};

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function writeB1(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const B1_WORDS = ${json};\n\nwindow.B1_WORDS = B1_WORDS;\n`, "utf8");
}

function parsePath(fieldPath) {
  return fieldPath.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
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

function normalizeField(field) {
  if (!field) return "lv";
  return String(field).replace(/\.bsText$/i, "");
}

function resolveFieldPath(entry, field) {
  const normalized = normalizeField(field);
  if (normalized === "lv") return { root: entry, path: "lv" };
  if (!normalized.startsWith("study.")) return null;
  if (!entry.study) return null;
  return { root: entry.study, path: normalized.slice("study.".length) };
}

function capitalizeMain(value) {
  const s = String(value || "").trim();
  if (!s) return s;
  if (s.includes("•")) {
    return s.split("•").map((p) => {
      const t = p.trim();
      return t ? t.charAt(0).toUpperCase() + t.slice(1) : t;
    }).join(" • ");
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function findEntry(words, cardId) {
  return words.find((e, i) => (e.study?.id || `b1-${e.de}-${i}`) === cardId) || null;
}

function applyVerdict(words, verdict) {
  if (verdict.verdict !== "FIX") return;
  stats.fixVerdicts += 1;

  if (verdict.severity && ["CRITICAL", "HIGH"].includes(String(verdict.severity).toUpperCase())) {
    stats.unexpectedCriticalHigh.push(verdict);
  }

  const entry = findEntry(words, verdict.cardId);
  if (!entry) {
    stats.skipped += 1;
    stats.changes.push({ ...verdict, status: "skipped", reason: "card_not_found" });
    return;
  }

  const resolved = resolveFieldPath(entry, verdict.field);
  if (!resolved) {
    stats.skipped += 1;
    stats.changes.push({ ...verdict, status: "skipped", reason: "unresolved_field" });
    return;
  }

  const current = getAt(resolved.root, resolved.path);
  let next = String(verdict.correctedText || "").trim();
  if (!next) {
    stats.skipped += 1;
    stats.changes.push({ ...verdict, status: "skipped", reason: "empty_corrected_text" });
    return;
  }

  const field = normalizeField(verdict.field);
  if (field === "lv" || field === "study.translation") {
    next = capitalizeMain(next);
  }

  if (current === next) {
    stats.skipped += 1;
    stats.changes.push({ ...verdict, status: "skipped", reason: "already_correct", before: current });
    return;
  }

  setAt(resolved.root, resolved.path, next);
  stats.applied += 1;
  if (field === "lv" || field === "study.translation") stats.mainTranslationsChanged += 1;
  else stats.studyFieldsChanged += 1;
  if (entry.study?.id) stats.studyCardsChanged.add(entry.study.id);
  stats.changes.push({
    cardId: verdict.cardId,
    field: verdict.field,
    verdict: verdict.verdict,
    before: current,
    after: next,
    shortReason: verdict.shortReason,
    status: "applied",
  });
}

function main() {
  if (!fs.existsSync(VERDICTS_PATH)) {
    throw new Error(`Trūkst ${VERDICTS_PATH}`);
  }

  const verdicts = JSON.parse(fs.readFileSync(VERDICTS_PATH, "utf8"));
  const fixVerdicts = verdicts.filter((v) => v.verdict === "FIX");
  const words = loadWords(BS_FILE);

  for (const verdict of fixVerdicts) {
    applyVerdict(words, verdict);
  }

  const regressionCardIds = [...stats.studyCardsChanged];
  for (const v of fixVerdicts) {
    if (!regressionCardIds.includes(v.cardId)) regressionCardIds.push(v.cardId);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    stats: {
      ...stats,
      studyCardsChanged: [...stats.studyCardsChanged],
    },
  };

  fs.mkdirSync(path.dirname(APPLIED_PATH), { recursive: true });
  fs.writeFileSync(APPLIED_PATH, JSON.stringify(report, null, 2));
  fs.writeFileSync(REGRESSION_SCOPE_PATH, JSON.stringify({
    generatedAt: new Date().toISOString(),
    cardIds: regressionCardIds,
    count: regressionCardIds.length,
  }, null, 2));

  console.log(JSON.stringify({
    fixVerdicts: stats.fixVerdicts,
    applied: stats.applied,
    skipped: stats.skipped,
    mainTranslations: stats.mainTranslationsChanged,
    studyFields: stats.studyFieldsChanged,
    regressionScope: regressionCardIds.length,
  }, null, 2));

  if (!DRY_RUN && stats.applied > 0) {
    writeB1(BS_FILE, words);
    writeB1(WWW_FILE, words);
    console.log(`Wrote ${BS_FILE} and ${WWW_FILE}`);
  }
}

main();
