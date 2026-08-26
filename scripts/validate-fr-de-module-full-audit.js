#!/usr/bin/env node
"use strict";
/**
 * Validate FR-DE module full audit deliverables.
 * Usage: node scripts/validate-fr-de-module-full-audit.js --module=b2|c1|c2|sentences|verbs
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { parseModuleArg } = require("./lib/fr-de-audit-config");
const { loadArray, resolveCard, normalizeFieldPath } = require("./lib/fr-de-audit-helpers");
const { getAt } = require("./lib/da-a1-owner-path");

const cfg = parseModuleArg();

function readCurrent(cardId, field, words) {
  const { entry } = resolveCard(words, cardId, cfg);
  if (!entry) return undefined;
  const normField = normalizeFieldPath(field);
  if (cfg.type === "sentences") return entry.lv;
  if (cfg.type === "verbs") {
    if (normField.includes(".")) return getAt(entry, normField);
    return entry[normField]?.lv;
  }
  if (normField === "lv") return entry.lv;
  return getAt(entry, normField);
}

function main() {
  const errors = [];
  const audit = JSON.parse(fs.readFileSync(cfg.auditJson, "utf8"));
  const owner = JSON.parse(fs.readFileSync(cfg.ownerSource, "utf8"));
  const words = loadArray(cfg.productionAbs, cfg.globalKey);

  if (audit.meta?.lunaCoverage !== "100%") errors.push(`Luna coverage ${audit.meta?.lunaCoverage}`);
  if (audit.meta?.cardsAudited !== words.length) errors.push(`cards audited ${audit.meta?.cardsAudited} !== ${words.length}`);

  const ownerKeys = new Set();
  let currentMatch = 0;
  for (const o of owner.ownerObjects || []) {
    const key = `${o.module}|${o.cardId}|${o.field}`;
    if (ownerKeys.has(key)) errors.push(`duplicate owner ${key}`);
    ownerKeys.add(key);
    const actual = readCurrent(o.cardId, o.field, words);
    const expected = o.current;
    const match =
      String(actual) === String(expected) ||
      (typeof actual === "object" && JSON.stringify(actual) === expected);
    if (match) currentMatch += 1;
    else errors.push(`CURRENT mismatch ${o.id} field=${o.field}`);
  }

  if (currentMatch !== owner.ownerObjects.length) {
    errors.push(`CURRENT match ${currentMatch}/${owner.ownerObjects.length}`);
  }

  try {
    execSync(`node --check ${cfg.productionPath}`, { cwd: ROOT, stdio: "pipe" });
  } catch {
    errors.push("syntax fail");
  }
  if (!isSyncedWithWww(cfg.productionPath)) errors.push("mirror fail");

  const diff = execSync("git diff --name-only HEAD", { cwd: ROOT, encoding: "utf8" })
    .split("\n")
    .filter(Boolean)
    .filter((f) => (f.startsWith("data/") || f.startsWith("www/data/")) && !f.startsWith("reports/"));
  if (diff.length) errors.push(`production changes: ${diff.join(",")}`);

  const pass = errors.length === 0;
  console.log(
    JSON.stringify(
      { module: cfg.moduleKey, pass, errors: errors.slice(0, 20), errorCount: errors.length, ownerCount: owner.ownerObjects.length, currentMatch },
      null,
      2,
    ),
  );
  if (!pass) process.exit(1);
}

main();
