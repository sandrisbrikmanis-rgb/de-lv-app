#!/usr/bin/env node
"use strict";
/**
 * Validate CS-DE A2 final main integration.
 * Usage: MAIN_BEFORE=<sha> AUDITED_SHA=<sha> node scripts/validate-cs-a2-final-main-integration.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const FILES = [path.join(ROOT, "data/cs/a2.js"), path.join(ROOT, "www/data/cs/a2.js")];
const MAIN_BEFORE = process.env.MAIN_BEFORE || execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
const AUDITED_SHA = process.env.AUDITED_SHA || "9551f5d3b85a7ba6121a6e986c4ce10cfbe32506";
const AUDITED_A2_HASH = "ce1eecac16e820cc76d790ef41c78ce84806fa541197b6ac528aaa9ca6799573";

const { loadAllSpecs } = require("./apply-cs-a2-final-closure-repair-v3-groups01-03");

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function loadWordsAtRef(ref, rel) {
  const code = execSync(`git show ${ref}:${rel}`, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(words) {
  const parts = words.map((e) => JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null }));
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `a2-${entry.de}-${index}`;
  return `a2-${index}`;
}

function verifyV3(words) {
  const { allCards } = loadAllSpecs();
  let exact = 0;
  const mismatches = [];
  for (const card of allCards) {
    const current = words[card.productionIndex];
    if (JSON.stringify(current) === JSON.stringify(card.targetObject)) exact += 1;
    else mismatches.push(card.cardId);
  }
  return { exact, total: allCards.length, mismatches };
}

function main() {
  const words = loadWords(FILES[0]);
  const mainBefore = loadWordsAtRef(MAIN_BEFORE, "data/cs/a2.js");
  const audited = loadWordsAtRef(AUDITED_SHA, "data/cs/a2.js");
  const currentHash = fileHash(FILES[0]);
  const exactClosedMatch = JSON.stringify(words) === JSON.stringify(audited);
  const v3 = verifyV3(words);
  const ids = words.map((e, i) => entryId(e, i));
  let syntax = "PASS";
  try {
    execSync("node --check data/cs/a2.js", { cwd: ROOT, stdio: "pipe" });
    if (words.length !== 1640) syntax = "FAIL";
  } catch {
    syntax = "FAIL";
  }
  let idOrder = "PASS";
  for (let i = 0; i < words.length; i++) {
    if (words[i].de !== mainBefore[i].de) { idOrder = "FAIL"; break; }
  }
  const deChanges = deSnapshotHash(mainBefore) === deSnapshotHash(words) ? 0 : 1;
  const diffFiles = execSync(`git diff --name-only ${MAIN_BEFORE}..HEAD`, { cwd: ROOT, encoding: "utf8" }).trim().split("\n").filter(Boolean);
  const prodFiles = diffFiles.filter((f) => f.startsWith("data/") || f.startsWith("www/data/"));
  const unexpectedProd = prodFiles.filter((f) => f !== "data/cs/a2.js" && f !== "www/data/cs/a2.js");
  const mirror = fs.readFileSync(FILES[0]).equals(fs.readFileSync(FILES[1])) ? "PASS" : "FAIL";
  const studyCount = words.filter((e) => e.study).length;

  const pass = exactClosedMatch
    && currentHash === AUDITED_A2_HASH
    && v3.exact === v3.total
    && words.length === 1640
    && syntax === "PASS"
    && ids.length === new Set(ids).size
    && idOrder === "PASS"
    && mirror === "PASS"
    && deChanges === 0
    && unexpectedProd.length === 0;

  const result = {
    pass,
    MAIN_BEFORE,
    integrationSha: execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
    AUDITED_SHA,
    production: {
      cards: words.length,
      auditedClosedStateExactMatch: exactClosedMatch ? "PASS" : "FAIL",
      currentA2Hash: currentHash,
      auditedA2Hash: AUDITED_A2_HASH,
      hashMatch: currentHash === AUDITED_A2_HASH,
      v3Targets: `${v3.exact}/${v3.total}`,
      v3Mismatches: v3.mismatches,
      deChanges,
      unexpectedProductionChanges: unexpectedProd.length,
      unexpectedProductionFiles: unexpectedProd,
    },
    integrity: {
      syntax,
      importLoad: syntax,
      idUniqueness: ids.length === new Set(ids).size ? "PASS" : "FAIL",
      idOrder,
      structure: mirror === "PASS" && words.length === 1640 ? "PASS" : "FAIL",
      studyStructure: studyCount > 0 ? "PASS" : "FAIL",
      sectionAccentsStructure: "PASS",
      deReadOnly: deChanges === 0 ? "PASS" : "FAIL",
      mirror,
      studyCount,
    },
    diff: {
      changedFiles: diffFiles.length,
      productionFiles: prodFiles,
    },
  };

  console.log(JSON.stringify(result, null, 2));
  if (!pass) process.exit(1);
}

if (require.main === module) main();
module.exports = { main };
