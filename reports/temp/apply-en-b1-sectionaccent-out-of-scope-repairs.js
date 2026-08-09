#!/usr/bin/env node
/**
 * EN–DE B1 SECTIONACCENT OUT-OF-SCOPE REPAIRS — verify-only by default.
 * Usage: node reports/temp/apply-en-b1-sectionaccent-out-of-scope-repairs.js [--verify-only]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");
const REPAIRS_JSON = path.join(ROOT, "reports/temp/en-b1-sectionaccent-out-of-scope-repairs.json");
const VERIFY_ONLY = process.argv.includes("--verify-only") || !process.argv.includes("--apply");

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function parseFieldPath(field) {
  const parts = [];
  const re = /([^.[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(field))) parts.push(m[1] !== undefined ? m[1] : Number(m[2]));
  return parts;
}

function getFieldValueRaw(entry, field) {
  if (!field || field === "lv") return entry.lv;
  let base = entry;
  let p = field;
  if (p.startsWith("study.")) {
    base = entry.study;
    p = p.replace(/^study\./, "");
  }
  const parts = parseFieldPath(p);
  let cur = base;
  for (const x of parts) cur = cur?.[x];
  return cur;
}

function formatVal(v) {
  if (Array.isArray(v)) return v.join(", ");
  if (v === undefined || v === null) return "";
  return String(v);
}

function findEntry(words, id, idx) {
  if (typeof idx === "number" && idx >= 0 && idx < words.length) {
    const e = words[idx];
    if (e.study?.id === id) return e;
  }
  for (const e of words) {
    if (e.study?.id === id) return e;
  }
  return null;
}

function preconditionMatch(actual, expected) {
  return String(actual ?? "") === String(expected ?? "");
}

const repairsData = JSON.parse(fs.readFileSync(REPAIRS_JSON, "utf8"));
const en = load("data/en/b1.js");
const results = { pass: 0, fail: 0, details: [] };

for (const r of repairsData.repairs) {
  const entry = findEntry(en, r.productionId, r.productionIndex);
  if (!entry) {
    results.fail++;
    results.details.push({ triageId: r.triageId, error: "card not found" });
    continue;
  }
  const actual = formatVal(getFieldValueRaw(entry, r.repairField));
  if (!preconditionMatch(actual, r.expectedCurrent)) {
    results.fail++;
    results.details.push({
      triageId: r.triageId,
      error: "precondition mismatch",
      expected: r.expectedCurrent,
      actual,
    });
    continue;
  }
  if (!r.ownerFinalEn) {
    results.fail++;
    results.details.push({ triageId: r.triageId, error: "missing OWNER FINAL" });
    continue;
  }
  results.pass++;
}

const out = {
  mode: VERIFY_ONLY ? "verify-only" : "apply",
  repairsTotal: repairsData.repairs.length,
  preconditionPass: results.pass,
  preconditionFail: results.fail,
  productionChanges: VERIFY_ONLY ? 0 : "not implemented in verify pass",
  details: results.details,
};
console.log(JSON.stringify(out, null, 2));
if (results.fail > 0) process.exit(1);
