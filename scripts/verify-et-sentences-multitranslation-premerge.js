#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { scanDatasetMainTranslations } = require("./lib/main-translation-field-inventory");

const MATERIALIZED = path.join(
  ROOT,
  "reports/et-sentences-multitranslation-owner-decisions-accepted-materialized.md",
);

function loadWords() {
  const code = fs.readFileSync(path.join(ROOT, "data/et/sentences.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function parseMaterialized() {
  const src = fs.readFileSync(MATERIALIZED, "utf8");
  const rows = [];
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-SENT-MT-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 9 || parts[8] !== "LABOT") continue;
    rows.push({
      cardId: parts[2],
      field: parts[4].replace(/^`|`$/g, ""),
      ownerNew: parts[7].replace(/\*\*/g, "").trim(),
    });
  }
  return rows;
}

function findEntry(words, cardId) {
  return words.find((e) => e.de === cardId) || null;
}

function main() {
  execSync("node scripts/test-main-translation-v112-regression.js", { cwd: ROOT, stdio: "pipe" });
  const words = loadWords();
  const all = parseMaterialized();
  let ownerMatch = 0;
  for (const row of all) {
    const entry = findEntry(words, row.cardId);
    const actual = entry && row.field === "lv" ? String(entry.lv || "").trim() : "";
    if (actual === row.ownerNew) ownerMatch++;
  }
  const scan = scanDatasetMainTranslations(words, (e, i) => e.de || `sent-${i}`);
  const etDiff = execSync("git diff --name-only origin/main...HEAD -- data/et/sentences.js www/data/et/sentences.js", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  const deDiff = execSync("git diff --name-only origin/main...HEAD -- data/de www/data/de", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  let syntaxPass = true;
  try {
    execSync("node --check data/et/sentences.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/sentences.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }
  const primary = fs.readFileSync(path.join(ROOT, "data/et/sentences.js"), "utf8");
  const www = fs.readFileSync(path.join(ROOT, "www/data/et/sentences.js"), "utf8");
  const mirrorPass = primary === www;
  const result = {
    requestedOwnerMappings: all.length,
    appliedVerified: ownerMatch,
    currentValueMismatch: all.length - ownerMatch,
    teikumiCards: words.length,
    mainTranslationCountViolations: scan.violations.length,
    mainBefore: execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim(),
    prHead: execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
    deChanges: deDiff ? deDiff.split("\n").filter(Boolean).length : 0,
    syntaxPass,
    mirrorPass,
    ET_TEIKUMI_MULTITRANSLATION_PREMERGE_VERIFY:
      all.length === 120 &&
      ownerMatch === 120 &&
      scan.violations.length === 0 &&
      words.length === 796 &&
      deDiff === "" &&
      syntaxPass &&
      mirrorPass
        ? "PASS"
        : "FAIL",
  };
  fs.writeFileSync(
    path.join(ROOT, "reports/temp/et-sentences-multitranslation-premerge-verify.json"),
    JSON.stringify(result, null, 2),
  );
  console.log(JSON.stringify(result, null, 2));
  if (result.ET_TEIKUMI_MULTITRANSLATION_PREMERGE_VERIFY !== "PASS") process.exit(1);
}

main();
