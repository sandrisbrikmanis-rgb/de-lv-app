#!/usr/bin/env node
/**
 * Apply FIX verdicts from bs-b1-final-medium-verdicts.json ($0).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b1.js");
const VERDICTS_PATH = path.join(ROOT, "reports", "temp", "bs-b1-final-medium-verdicts.json");
const APPLIED_PATH = path.join(ROOT, "reports", "temp", "bs-b1-final-medium-fix-applied.json");
const REGRESSION_SCOPE_PATH = path.join(ROOT, "reports", "temp", "bs-b1-final-medium-regression-scope.json");

const stats = { fixVerdicts: 0, applied: 0, skipped: 0, studyCardsChanged: new Set(), mainTranslations: 0, studyFields: 0, unexpectedHighCritical: [], changes: [] };

function loadWords(p) {
  const code = fs.readFileSync(p, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function writeB1(p, data) {
  fs.writeFileSync(p, `const B1_WORDS = ${JSON.stringify(data, null, 2)};\n\nwindow.B1_WORDS = B1_WORDS;\n`, "utf8");
}

function parsePath(fp) { return fp.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean); }
function getAt(root, fp) { return parsePath(fp).reduce((c, p) => c?.[p], root); }
function setAt(root, fp, val) { const parts = parsePath(fp); let cur = root; for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]]; cur[parts[parts.length - 1]] = val; }
function normalizeField(f) { return String(f || "lv").replace(/\.bsText$/i, ""); }
function capitalizeMain(s) { const t = String(s || "").trim(); if (!t) return t; if (t.includes("•")) return t.split("•").map((p) => { const x = p.trim(); return x ? x.charAt(0).toUpperCase() + x.slice(1) : x; }).join(" • "); return t.charAt(0).toUpperCase() + t.slice(1); }
function findEntry(words, id) { return words.find((e, i) => (e.study?.id || `b1-${e.de}-${i}`) === id); }

function applyVerdict(words, v) {
  if (v.verdict !== "FIX") return;
  stats.fixVerdicts++;
  if (["CRITICAL", "HIGH"].includes(String(v.severity || "").toUpperCase())) stats.unexpectedHighCritical.push(v);

  const entry = findEntry(words, v.cardId);
  if (!entry) { stats.skipped++; stats.changes.push({ ...v, status: "skipped", reason: "card_not_found" }); return; }

  const field = normalizeField(v.field);
  const sub = field.startsWith("study.") ? field.slice("study.".length) : field;
  const root = field === "lv" ? entry : entry.study;
  if (!root) { stats.skipped++; return; }

  const before = getAt(root, field === "lv" ? "lv" : sub);
  let next = String(v.correctedText || "").trim();
  if (!next) { stats.skipped++; stats.changes.push({ ...v, status: "skipped", reason: "empty_corrected_text" }); return; }
  if (field === "lv" || field === "study.translation") next = capitalizeMain(next);
  if (before === next) { stats.skipped++; return; }

  setAt(root, field === "lv" ? "lv" : sub, next);
  stats.applied++;
  if (field === "lv" || field === "study.translation") stats.mainTranslations++;
  else stats.studyFields++;
  if (entry.study?.id) stats.studyCardsChanged.add(entry.study.id);
  stats.changes.push({ cardId: v.cardId, field: v.field, before, after: next, shortReason: v.shortReason, status: "applied" });
}

const verdicts = JSON.parse(fs.readFileSync(VERDICTS_PATH, "utf8"));
const words = loadWords(BS_FILE);
for (const v of verdicts.filter((x) => x.verdict === "FIX")) applyVerdict(words, v);

const cardIds = [...new Set([...stats.studyCardsChanged, ...verdicts.filter((x) => x.verdict === "FIX").map((x) => x.cardId)])];
fs.mkdirSync(path.dirname(APPLIED_PATH), { recursive: true });
fs.writeFileSync(APPLIED_PATH, JSON.stringify({ generatedAt: new Date().toISOString(), stats: { ...stats, studyCardsChanged: [...stats.studyCardsChanged] }, changes: stats.changes }, null, 2));
fs.writeFileSync(REGRESSION_SCOPE_PATH, JSON.stringify({ generatedAt: new Date().toISOString(), cardIds, count: cardIds.length }, null, 2));

console.log(JSON.stringify({ applied: stats.applied, skipped: stats.skipped, regressionScope: cardIds.length }, null, 2));
if (stats.applied > 0) { writeB1(BS_FILE, words); writeB1(WWW_FILE, words); }
