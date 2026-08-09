#!/usr/bin/env node
/**
 * EN–DE B1 HIGH REGRESSION REPAIR — deterministic apply helper (214 OWNER-approved findings).
 * Default: --verify-only (no production changes).
 * Usage: node reports/temp/apply-en-b1-high-regression-repairs.js [--verify-only]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const OWNER_JSON = path.join(ROOT, "reports/temp/en-b1-high-regression-owner-review.json");
const REPAIRS_JSON = path.join(ROOT, "reports/temp/en-b1-high-regression-repairs.json");
const VERIFY_ONLY = process.argv.includes("--verify-only") || !process.argv.includes("--apply");

const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

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
  while ((m = re.exec(field))) {
    parts.push(m[1] !== undefined ? m[1] : Number(m[2]));
  }
  return parts;
}

function getFieldValueRaw(entry, field) {
  if (!field || field === "lv") return entry.lv;
  let base = entry;
  let path = field;
  if (path.startsWith("study.")) {
    base = entry.study;
    path = path.replace(/^study\./, "");
  }
  const parts = parseFieldPath(path);
  let cur = base;
  for (const p of parts) cur = cur?.[p];
  return cur;
}

function formatVal(v) {
  if (Array.isArray(v)) return v.join(", ");
  if (v && typeof v === "object") {
    if (Array.isArray(v.purple)) return v.purple.join(", ");
    if (typeof v.purple === "string") return v.purple;
    if (typeof v.red === "string") return v.red;
    if (Array.isArray(v.red)) return v.red.join(", ");
    return JSON.stringify(v);
  }
  return v === undefined || v === null ? "" : String(v);
}

function resolveAccentField(field, study) {
  const entry = { study };
  if (!field.includes("sectionAccents")) return field;
  if (field.match(/\.(purple|green|blue|yellow|orange|red)\[\d+\]$/)) return field;
  const val = getFieldValueRaw(entry, field);
  if (val && typeof val === "object" && !Array.isArray(val)) {
    if (field.endsWith(".meaning") && val.purple) return field + ".purple";
    if (field.endsWith(".text") && val.purple) return field + ".purple";
    if (field.endsWith(".example") && val.purple) return field + ".purple";
  }
  if (typeof val === "string" && field.match(/\.purple$/)) return field;
  return field;
}

function preconditionMatch(actual, expected) {
  if (actual === expected) return true;
  const a = String(actual ?? "").trim();
  const e = String(expected ?? "").trim();
  if (a === e) return true;
  if (a.includes(e) || e.includes(a)) return true;
  if (Array.isArray(actual) && typeof expected === "string") {
    return actual.join(", ") === expected || actual.some((x) => x === expected);
  }
  return false;
}

function setFieldValue(study, field, value) {
  const resolved = resolveAccentField(field, study);
  if (value === "__REMOVE_ACCENT__") {
    const parts = parseFieldPath(resolved.replace(/^study\./, ""));
    let cur = study;
    for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
    const key = parts[parts.length - 1];
    if (typeof cur?.[key] === "string") {
      delete cur[key];
      return;
    }
    if (Array.isArray(cur?.[key])) cur[key] = [];
    return;
  }
  if (resolved.match(/\.(purple|green|blue|yellow|orange|red)\[\d+\]$/)) {
    const parts = parseFieldPath(resolved.replace(/^study\./, ""));
    let cur = study;
    for (let i = 0; i < parts.length - 2; i++) cur = cur[parts[i]];
    const colorKey = parts[parts.length - 2];
    const idx = parts[parts.length - 1];
    if (!Array.isArray(cur[colorKey])) cur[colorKey] = [];
    while (cur[colorKey].length <= idx) cur[colorKey].push("");
    cur[colorKey][idx] = value;
    return;
  }
  const parts = parseFieldPath(resolved.replace(/^study\./, ""));
  let cur = study;
  for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
  const last = parts[parts.length - 1];
  if (typeof value === "string" && resolved.includes("sectionAccents") && !resolved.match(/\[\d+\]$/)) {
    if (typeof cur[last] === "string") {
      cur[last] = value;
      return;
    }
    if (cur[last] && typeof cur[last] === "object" && !Array.isArray(cur[last])) {
      const color = ACCENT_COLORS.find((c) => Array.isArray(cur[last][c]) || typeof cur[last][c] === "string");
      if (color) {
        cur[last][color] = Array.isArray(cur[last][color]) ? [value] : value;
        return;
      }
    }
  }
  cur[last] = value;
}

function findEntry(words, productionId, index) {
  if (typeof index === "number" && index >= 0 && index < words.length) return words[index];
  for (const e of words) {
    if (e.study?.id === productionId) return e;
  }
  return null;
}

function main() {
  const owner = JSON.parse(fs.readFileSync(OWNER_JSON, "utf8"));
  const repairsData = JSON.parse(fs.readFileSync(REPAIRS_JSON, "utf8"));
  const words = load("data/en/b1.js");
  const results = { pass: 0, preconditionFail: 0, details: [] };

  for (const r of repairsData.repairs) {
    const entry = findEntry(words, r.productionId, r.productionIndex);
    if (!entry?.study) {
      results.preconditionFail++;
      results.details.push({ id: r.regressionFindingId, error: "card not found" });
      continue;
    }
    const actual = formatVal(getFieldValueRaw(entry, r.repairField));
    if (!preconditionMatch(actual, r.expectedCurrent)) {
      results.preconditionFail++;
      results.details.push({
        id: r.regressionFindingId,
        cardId: r.cardId,
        field: r.repairField,
        expected: r.expectedCurrent,
        actual,
      });
      continue;
    }
    if (!VERIFY_ONLY) {
      setFieldValue(entry.study, r.repairField, r.ownerFinalEn);
    }
    results.pass++;
  }

  const out = {
    mode: VERIFY_ONLY ? "verify-only" : "apply",
    repairsTotal: repairsData.repairs.length,
    pass: results.pass,
    preconditionFail: results.preconditionFail,
    ownerReviewComplete: owner.status,
    productionChanges: VERIFY_ONLY ? 0 : "pending mirror write",
    details: results.details.slice(0, 20),
  };
  console.log(JSON.stringify(out, null, 2));
  if (results.preconditionFail > 0 && VERIFY_ONLY) {
    process.exit(0);
  }
}

main();
