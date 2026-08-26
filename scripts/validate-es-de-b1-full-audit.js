#!/usr/bin/env node
"use strict";
/**
 * Validate ES-DE B1 full audit deliverables.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { loadArray, entryId } = require("./lib/es-b1-audit-helpers");
const { PRODUCTION_PATH } = require("./lib/es-b1-discovery-config");
const { getAt } = require("./lib/da-a1-owner-path");

const AUDIT_JSON = path.join(ROOT, "reports/es-de-b1-full-audit.json");
const OWNER_JSON = path.join(ROOT, "reports/es-de-b1-full-audit-owner-source.json");

function normalizeFieldPath(field) {
  if (!field) return "lv";
  return String(field).replace(/^entry\[\d+\]\./, "");
}

function readCurrent(cardId, field, words) {
  const entry = words.find((e, i) => entryId(e, i) === cardId || e.study?.id === cardId);
  if (!entry) return undefined;
  const normField = normalizeFieldPath(field);
  if (normField === "lv") return entry.lv;
  return getAt(entry, normField);
}

function main() {
  const errors = [];
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const owner = JSON.parse(fs.readFileSync(OWNER_JSON, "utf8"));
  const words = loadArray(path.join(ROOT, PRODUCTION_PATH));

  if (audit.meta?.lunaCoverage !== "100%") errors.push(`Luna coverage ${audit.meta?.lunaCoverage}`);
  if (audit.meta?.cardsAudited !== words.length) errors.push(`cards audited ${audit.meta?.cardsAudited} !== ${words.length}`);

  const ownerKeys = new Set();
  let currentMatch = 0;
  for (const o of owner.ownerObjects || []) {
    const key = `${o.level}|${o.cardId}|${o.field}`;
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

  if (currentMatch !== owner.ownerObjects.length) errors.push(`CURRENT match ${currentMatch}/${owner.ownerObjects.length}`);

  try {
    execSync("node --check data/es/b1.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    errors.push("syntax fail");
  }
  if (!isSyncedWithWww(PRODUCTION_PATH)) errors.push("mirror fail");

  const diff = execSync("git diff --name-only HEAD", { cwd: ROOT, encoding: "utf8" })
    .split("\n")
    .filter(Boolean)
    .filter((f) => (f.startsWith("data/") || f.startsWith("www/data/")) && !f.startsWith("reports/"));
  if (diff.length) errors.push(`production changes: ${diff.join(",")}`);

  const pass = errors.length === 0;
  console.log(JSON.stringify({ pass, errors: errors.slice(0, 20), errorCount: errors.length, ownerCount: owner.ownerObjects.length, currentMatch }, null, 2));
  if (!pass) process.exit(1);
}

main();
