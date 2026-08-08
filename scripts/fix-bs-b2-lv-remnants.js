#!/usr/bin/env node
/**
 * Fix remaining LV/EN remnants in BS B2 study fields missed by NATIVE_KEYS collection.
 * Only modifies data/bs/b2.js (then syncs www/).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const DATA_FILE = path.join(ROOT, "data", "bs", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b2.js");

const REPLACEMENTS = [
  ["Vadība:", "Menadžment:"],
  ["+ piederības forma", "+ posesivni oblik"],
];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function writeWords(filePath, words) {
  const json = JSON.stringify(words, null, 2);
  fs.writeFileSync(filePath, `const B2_WORDS = ${json};\n\nwindow.B2_WORDS = B2_WORDS;\n`, "utf8");
}

function replaceInValue(value) {
  if (typeof value === "string") {
    let out = value;
    for (const [from, to] of REPLACEMENTS) {
      if (out === from) out = to;
    }
    return out;
  }
  if (Array.isArray(value)) return value.map(replaceInValue);
  if (value && typeof value === "object") {
    const out = {};
    for (const [key, child] of Object.entries(value)) {
      out[key] = replaceInValue(child);
    }
    return out;
  }
  return value;
}

const words = loadWords(DATA_FILE);
let changed = 0;

for (const entry of words) {
  const before = JSON.stringify(entry);
  if (entry.de === "flauschig" && entry.lv === "Fluffy") {
    entry.lv = "pahuljast";
  }
  const updated = replaceInValue(entry);
  Object.assign(entry, updated);
  if (JSON.stringify(entry) !== before) changed += 1;
}

writeWords(DATA_FILE, words);
writeWords(WWW_FILE, words);
console.log(`Fixed ${changed} BS B2 cards (LV/EN remnants).`);
