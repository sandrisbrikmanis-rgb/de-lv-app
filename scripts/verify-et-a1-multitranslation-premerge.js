#!/usr/bin/env node
"use strict";
/**
 * Pre-merge verification gate for ET A1 multi-translation merge (PR #647).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { scanDatasetMainTranslations } = require("./lib/main-translation-field-inventory");
const { findEntry: findEntryBase } = require("./lib/da-a1-owner-path");

const CARD_ID_ALIASES = { "a1-heissen": "a1-heißen" };

function findEntry(words, cardId) {
  const id = CARD_ID_ALIASES[cardId] || cardId;
  const base = findEntryBase(words, id);
  if (base) return base;
  const idxMatch = cardId.match(/-(\d+)$/);
  if (idxMatch && words[parseInt(idxMatch[1], 10)]) return words[parseInt(idxMatch[1], 10)];
  const deGuess = cardId.replace(/^a1-/, "").replace(/-study.*$/i, "").replace(/-\d+$/, "");
  return words.find((e) => e.de === deGuess) || null;
}

function loadWords() {
  const code = fs.readFileSync(path.join(ROOT, "data/et/a1.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function parseAccepted59() {
  const src = fs.readFileSync(path.join(ROOT, "reports/et-a1-multitranslation-owner-decisions-accepted.md"), "utf8");
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-A1-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 8 || parts[7] !== "LABOT") continue;
    rows.push({
      cardId: parts[2].replace(/^`|`$/g, ""),
      field: parts[3].replace(/^`|`$/g, ""),
      ownerNew: parts[6].replace(/\*\*/g, "").trim(),
    });
  }
  return rows;
}

function parseAccepted2() {
  const src = fs.readFileSync(path.join(ROOT, "reports/et-a1-multitranslation-residual-2-owner-accepted.md"), "utf8");
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.includes("| `a1-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 7 || parts[6] !== "LABOT") continue;
    rows.push({
      cardId: parts[1].replace(/^`|`$/g, ""),
      field: parts[2].replace(/^`|`$/g, ""),
      ownerNew: parts[5].replace(/\*\*/g, "").trim(),
    });
  }
  return rows;
}

function readField(entry, field) {
  if (field === "lv") return entry.lv;
  if (field === "study.translation") return entry.study?.translation;
  return undefined;
}

function main() {
  execSync("node scripts/test-main-translation-v112-regression.js", { cwd: ROOT, stdio: "pipe" });

  const words = loadWords();
  const rows59 = parseAccepted59();
  const rows2 = parseAccepted2();
  const all = [...rows59, ...rows2];

  let ownerMatch = 0;
  let mismatch = 0;
  for (const row of all) {
    const entry = findEntry(words, row.cardId);
    const actual = entry ? String(readField(entry, row.field) || "").trim() : "";
    if (actual === row.ownerNew) ownerMatch++;
    else mismatch++;
  }

  const scan = scanDatasetMainTranslations(words, (e, i) => e.study?.id || `a1-${e.de}-${i}`);
  const deDiff = execSync("git diff --name-only origin/main...HEAD -- data/de www/data/de", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();

  let syntaxPass = true;
  try {
    execSync("node --check data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/a1.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }

  const primary = fs.readFileSync(path.join(ROOT, "data/et/a1.js"), "utf8");
  const www = fs.readFileSync(path.join(ROOT, "www/data/et/a1.js"), "utf8");
  const mirrorPass = primary === www;

  const result = {
    timestamp: new Date().toISOString(),
    requestedOwnerMappings: all.length,
    appliedVerified: ownerMatch,
    currentValueMismatch: mismatch,
    mainTranslationCountViolations: scan.violations.length,
    multipleMainTranslationsValidatedReal: scan.violations.length,
    mainTranslationFieldInventoryCoverage: scan.inventoryCoverage,
    fullA1Scan: `${words.length}/${words.length}`,
    deChanges: deDiff ? deDiff.split("\n").length : 0,
    syntaxPass,
    mirrorPass,
    regressionAtoE: "PASS",
    ET_A1_MULTITRANSLATION_PREMERGE_VERIFY:
      all.length === 61 &&
      ownerMatch === 61 &&
      mismatch === 0 &&
      scan.violations.length === 0 &&
      words.length === 702 &&
      deDiff === "" &&
      syntaxPass &&
      mirrorPass
        ? "PASS"
        : "FAIL",
  };

  const out = path.join(ROOT, "reports/temp/et-a1-multitranslation-premerge-verify.json");
  fs.writeFileSync(out, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  if (result.ET_A1_MULTITRANSLATION_PREMERGE_VERIFY !== "PASS") process.exit(1);
}

main();
