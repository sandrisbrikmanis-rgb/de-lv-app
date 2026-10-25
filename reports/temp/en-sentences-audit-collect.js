#!/usr/bin/env node
/**
 * EN-DE Teikumi deterministic audit collector (read-only).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const OUT = path.join(__dirname, "en-sentences-audit-data.json");

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const SEMICOLON_IN_LV = /;/;
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
const PLACEHOLDER = /^(TODO|TBD|\.\.\.)$/i;

const LV_FILE = "data/sentences.js";
const EN_FILE = "data/en/sentences.js";
const WWW_FILE = "www/data/en/sentences.js";
const KEY = "SENTENCE_ENTRIES";

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function load(filePath) {
  const code = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[KEY];
}

function entryId(index) {
  return `satze-${index}`;
}

function syntaxPass(filePath) {
  try {
    execSync(`node --check ${filePath}`, { cwd: ROOT, encoding: "utf8" });
    return true;
  } catch {
    return false;
  }
}

function main() {
  const lvEntries = load(LV_FILE);
  const enEntries = load(EN_FILE);
  const enHash = md5(path.join(ROOT, EN_FILE));
  const wwwHash = md5(path.join(ROOT, WWW_FILE));
  const lvHash = md5(path.join(ROOT, LV_FILE));

  const semicolonIssues = [];
  const lvRemnants = [];
  const mojibakeIssues = [];
  const placeholderIssues = [];
  const deMismatch = [];
  const emptyEn = [];
  const emptyDe = [];

  for (let i = 0; i < enEntries.length; i++) {
    const en = enEntries[i];
    const lv = lvEntries[i];
    const cardId = entryId(i);

    if (en.de !== lv.de) deMismatch.push({ cardId, index: i, enDe: en.de, lvDe: lv.de });
    if (!en.de?.trim()) emptyDe.push({ cardId, index: i });
    if (!en.lv?.trim()) emptyEn.push({ cardId, index: i });

    if (SEMICOLON_IN_LV.test(en.lv || "")) {
      semicolonIssues.push({ cardId, index: i, de: en.de, lv: en.lv });
    }
    if (LV_ONLY.test(en.lv || "")) {
      lvRemnants.push({ cardId, index: i, de: en.de, lv: en.lv });
    }
    if (MOJIBAKE.test(en.lv || "") || MOJIBAKE.test(en.de || "")) {
      mojibakeIssues.push({ cardId, index: i, de: en.de, lv: en.lv });
    }
    const firstMeaning = (en.lv || "").split("•")[0].trim();
    if (PLACEHOLDER.test(firstMeaning)) {
      placeholderIssues.push({ cardId, index: i, de: en.de, lv: en.lv });
    }
  }

  const countMatch = lvEntries.length === enEntries.length;
  const mirrorPass = enHash === wwwHash;
  const syntaxEn = syntaxPass(EN_FILE);
  const syntaxWww = syntaxPass(WWW_FILE);
  const syntaxLv = syntaxPass(LV_FILE);

  const data = {
    generatedAt: new Date().toISOString(),
    scope: "EN-DE Teikumi (Sätze)",
    totals: {
      sentences: enEntries.length,
      lvSentences: lvEntries.length,
    },
    hashes: {
      lv: lvHash,
      en: enHash,
      www: wwwHash,
    },
    deterministic: {
      countMatch,
      mirrorPass,
      syntaxPass: syntaxEn && syntaxWww && syntaxLv,
      parity: { pass: countMatch && deMismatch.length === 0 },
      semicolonIssues: semicolonIssues.length,
      lvRemnants: { count: lvRemnants.length, items: lvRemnants.slice(0, 20) },
      mojibake: { count: mojibakeIssues.length, items: mojibakeIssues.slice(0, 20) },
      placeholder: { count: placeholderIssues.length, items: placeholderIssues.slice(0, 20) },
      deMismatch: { count: deMismatch.length, items: deMismatch.slice(0, 20) },
      emptyEn: { count: emptyEn.length },
      emptyDe: { count: emptyDe.length },
    },
    semicolonIssues,
    lvRemnants,
    mojibakeIssues,
    placeholderIssues,
    deMismatch,
  };

  fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
  console.log(JSON.stringify({
    sentences: enEntries.length,
    mirrorPass,
    syntaxPass: data.deterministic.syntaxPass,
    semicolons: semicolonIssues.length,
    lvRemnants: lvRemnants.length,
    mojibake: mojibakeIssues.length,
  }, null, 2));
}

main();
