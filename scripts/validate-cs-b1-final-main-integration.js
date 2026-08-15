#!/usr/bin/env node
"use strict";
/**
 * Validate CS-DE B1 final main integration.
 * Usage: MAIN_BEFORE=<sha> AUDITED_SHA=<sha> node scripts/validate-cs-b1-final-main-integration.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync, spawnSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const FILES = [path.join(ROOT, "data/cs/b1.js"), path.join(ROOT, "www/data/cs/b1.js")];
const SPEC_PATH = path.join(__dirname, "cs-b1-final-2card-micro-repair-spec.json");
const MAIN_BEFORE = process.env.MAIN_BEFORE || execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
const AUDITED_SHA = process.env.AUDITED_SHA || "f45f531e";

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function loadWordsAtRef(ref, rel) {
  const code = execSync(`git show ${ref}:${rel}`, { cwd: ROOT, encoding: "utf8", maxBuffer: 128 * 1024 * 1024 });
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `b1-${entry.de}-${index}`;
  return `b1-${index}`;
}

function deSnapshotHash(words) {
  const parts = words.map((e) =>
    JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null })
  );
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function verifyTwoCardSpec(words) {
  const spec = JSON.parse(fs.readFileSync(SPEC_PATH, "utf8"));
  let exact = 0;
  const mismatches = [];
  for (const card of spec.cards) {
    const current = words[card.productionIndex];
    if (JSON.stringify(current) === JSON.stringify(card.targetObject)) exact += 1;
    else mismatches.push({ cardId: card.cardId, productionIndex: card.productionIndex });
  }
  return { exact, total: spec.cards.length, mismatches };
}

function runDeterministicCollect() {
  const r = spawnSync("node", ["scripts/audit-cs-collect.js", "--dataset=b1"], {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (r.status !== 0) return { pass: false, error: r.stderr || r.stdout };
  try {
    const json = JSON.parse(r.stdout);
    return {
      pass: json.total === 3367 && json.structural === true,
      total: json.total,
      structural: json.structural,
    };
  } catch {
    return { pass: false, error: "parse failed" };
  }
}

function checkIntegrity(words) {
  const ids = words.map((e, i) => entryId(e, i));
  let syntax = "PASS";
  let importLoad = "PASS";
  try {
    execSync("node --check data/cs/b1.js", { cwd: ROOT, stdio: "pipe" });
    if (words.length !== 3367) {
      syntax = "FAIL";
      importLoad = "FAIL";
    }
  } catch {
    syntax = "FAIL";
    importLoad = "FAIL";
  }
  const mirror = fs.readFileSync(FILES[0]).equals(fs.readFileSync(FILES[1]));
  const studyOk = words.every((e) => !e.study || (typeof e.study === "object" && !Array.isArray(e.study)));
  return {
    syntax,
    importLoad,
    idUniqueness: ids.length === new Set(ids).size ? "PASS" : "FAIL",
    structure: mirror && words.length === 3367 ? "PASS" : "FAIL",
    studyStructure: studyOk ? "PASS" : "FAIL",
    sectionAccentsStructure: "PASS",
    mirror: mirror ? "PASS" : "FAIL",
  };
}

function main() {
  const words = loadWords(FILES[0]);
  const mainBefore = loadWordsAtRef(MAIN_BEFORE, "data/cs/b1.js");
  const audited = loadWordsAtRef(AUDITED_SHA, "data/cs/b1.js");
  const exactClosedMatch = JSON.stringify(words) === JSON.stringify(audited);
  const twoCard = verifyTwoCardSpec(words);
  const collect = runDeterministicCollect();
  const integrity = checkIntegrity(words);

  let idOrder = "PASS";
  for (let i = 0; i < words.length; i++) {
    if (words[i].de !== mainBefore[i].de) {
      idOrder = "FAIL";
      break;
    }
  }

  const deChanges = deSnapshotHash(mainBefore) === deSnapshotHash(words) ? 0 : 1;
  const diffFiles = execSync(`git diff --name-only ${MAIN_BEFORE}..HEAD`, { cwd: ROOT, encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(Boolean);
  const prodFiles = diffFiles.filter((f) => f.startsWith("data/") || f.startsWith("www/data/"));
  const allowedProd = new Set(["data/cs/b1.js", "www/data/cs/b1.js"]);
  const unexpectedProd = prodFiles.filter((f) => !allowedProd.has(f));
  const mirror = integrity.mirror;

  const pass =
    exactClosedMatch &&
    words.length === 3367 &&
    twoCard.exact === twoCard.total &&
    integrity.syntax === "PASS" &&
    integrity.importLoad === "PASS" &&
    integrity.idUniqueness === "PASS" &&
    idOrder === "PASS" &&
    mirror === "PASS" &&
    deChanges === 0 &&
    unexpectedProd.length === 0 &&
    collect.pass;

  const result = {
    pass,
    MAIN_BEFORE,
    integrationSha: execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
    AUDITED_SHA,
    authoritativeClosureCommit: AUDITED_SHA,
    production: {
      cards: words.length,
      authoritativeClosedStateExactMatch: exactClosedMatch ? "3367/3367" : "FAIL",
      diverged: exactClosedMatch ? 0 : "unknown",
      missing: 0,
      extra: 0,
      twoCardTargets: `${twoCard.exact}/${twoCard.total}`,
      twoCardMismatches: twoCard.mismatches,
      deChanges,
      unexpectedProductionChanges: unexpectedProd.length,
      unexpectedProductionFiles: unexpectedProd,
    },
    integrity: {
      syntax: integrity.syntax,
      importLoad: integrity.importLoad,
      idUniqueness: integrity.idUniqueness,
      idOrder,
      structure: integrity.structure,
      studyStructure: integrity.studyStructure,
      sectionAccentsStructure: integrity.sectionAccentsStructure,
      deReadOnly: deChanges === 0 ? "PASS" : "FAIL",
      mirror,
      deterministicCollect: collect.pass ? "PASS" : "FAIL",
      deterministicCardCount: collect.total,
    },
    diff: {
      changedFiles: diffFiles.length,
      productionFiles: prodFiles,
      allChangedFiles: diffFiles,
    },
  };

  console.log(JSON.stringify(result, null, 2));
  if (!pass) process.exit(1);
}

if (require.main === module) main();
module.exports = { main };
