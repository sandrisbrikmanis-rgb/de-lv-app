#!/usr/bin/env node
"use strict";
/**
 * CS-DE Věty — 1-card OWNER micro-repair (sentence-406 residual).
 * Usage: node scripts/apply-cs-vety-1-card-micro-repair.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const FILES = [
  path.join(ROOT, "data/cs/sentences.js"),
  path.join(ROOT, "www/data/cs/sentences.js"),
];
const DE_FILE = path.join(ROOT, "data/sentences.js");
const REPORT_MD = path.join(ROOT, "reports/cs-vety-1-card-micro-repair.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/cs-vety-1-card-micro-repair.json");
const EXPECTED_CARD_COUNT = 796;

const MAPPING = {
  cardId: "sentence-406",
  field: "lv",
  current: "Takhle. • Takovými prostředky.",
  new: "Takhle. • Tímto způsobem.",
};

function loadEntries(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function writeEntries(filePath, entries) {
  fs.writeFileSync(
    filePath,
    `const SENTENCE_ENTRIES = ${JSON.stringify(entries, null, 2)};\n\nwindow.SENTENCE_ENTRIES = SENTENCE_ENTRIES;\n`,
    "utf8",
  );
}

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(entries) {
  const parts = entries.map((e) => JSON.stringify({ de: e.de }));
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function resolveIndex(cardId) {
  const m = String(cardId).match(/^sentence-(\d+)$/);
  return m ? Number(m[1]) : null;
}

function main() {
  const startDeHash = fileHash(DE_FILE);
  const baselineDeSnapshot = deSnapshotHash(loadEntries(DE_FILE));
  const entries = loadEntries(FILES[0]);
  if (entries.length !== EXPECTED_CARD_COUNT) {
    throw new Error(`Expected ${EXPECTED_CARD_COUNT} cards, found ${entries.length}`);
  }

  const index = resolveIndex(MAPPING.cardId);
  if (index === null) throw new Error("CARD_NOT_FOUND");

  const actual = entries[index][MAPPING.field];
  let status;
  if (actual === MAPPING.new) {
    status = "ALREADY_MATCHED_NEW";
  } else if (actual !== MAPPING.current) {
    status = "CURRENT_VALUE_MISMATCH";
  } else {
    entries[index][MAPPING.field] = MAPPING.new;
    status = "APPLIED";
  }

  const result = { ...MAPPING, status, actual, productionIndex: index };

  if (status === "CURRENT_VALUE_MISMATCH" || status === "CARD_NOT_FOUND") {
    fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
    fs.writeFileSync(REPORT_JSON, JSON.stringify({ summary: { overall: "BLOCKED" }, details: [result] }, null, 2));
    console.error(JSON.stringify(result, null, 2));
    process.exit(2);
  }

  if (status === "APPLIED") {
    for (const filePath of FILES) writeEntries(filePath, entries);
  }

  const afterActual = loadEntries(FILES[0])[index][MAPPING.field];
  const ownerNewExact = afterActual === MAPPING.new ? 1 : 0;
  const endDeSnapshot = deSnapshotHash(loadEntries(DE_FILE));
  const deChanges = endDeSnapshot === baselineDeSnapshot ? 0 : 1;

  const summary = {
    targets: 1,
    applied: status === "APPLIED" ? 1 : 0,
    alreadyMatchedNew: status === "ALREADY_MATCHED_NEW" ? 1 : 0,
    currentValueMismatch: 0,
    cardNotFound: 0,
    ownerNewExact,
    deChanges,
    cardCount: EXPECTED_CARD_COUNT,
    overall: ownerNewExact === 1 && deChanges === 0 ? "PASS" : "FAIL",
  };

  const md = [
    "# CS–DE Věty 1-Card Micro-Repair",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Mapping",
    "",
    "| Card ID | Field | CURRENT | NEW | Status |",
    "|---------|-------|---------|-----|--------|",
    `| \`${MAPPING.cardId}\` | \`${MAPPING.field}\` | ${MAPPING.current} | ${MAPPING.new} | **${status}** |`,
    "",
    "## Summary",
    "",
    "```text",
    `APPLIED: ${summary.applied}`,
    `OWNER NEW exact: ${summary.ownerNewExact}/1`,
    `CURRENT_VALUE_MISMATCH: 0`,
    `DE changes: ${summary.deChanges}`,
    `Card count: ${summary.cardCount}/${EXPECTED_CARD_COUNT}`,
    `Overall: ${summary.overall}`,
    "```",
  ].join("\n");

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify({ summary, details: [result] }, null, 2));
  fs.writeFileSync(REPORT_MD, md);

  console.log(JSON.stringify(summary, null, 2));
  if (summary.overall !== "PASS") process.exit(1);
}

main();
