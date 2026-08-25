#!/usr/bin/env node
"use strict";
/**
 * Validate ES-DE A1+A2 foreign remnants final OWNER decisions.
 * Usage: node scripts/validate-es-a1-a2-foreign-remnants-owner-decisions-final.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { hasForeignRemnant, germanPartPreserved } = require("./lib/es-foreign-remnant-validate");
const {
  MANDATORY_OWNER_DECISIONS,
  MANDATORY_IDS,
  RELATED_CONFIRMED_REMNANTS,
} = require("./lib/es-foreign-remnant-owner-mandatory");

const SOURCE_JSON = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-source.json");
const DECISIONS_JSON = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-decisions-final.json");

function validateFinalDecisions(source, payload) {
  const errors = [];
  const baseItems = payload.items.filter((i) => !i.id.includes("RELATED"));
  const sourceById = new Map(source.items.map((i) => [i.id, i]));
  const seen = new Set();
  let germanPreserved = 0;
  let germanChecked = 0;
  let foreignInLabotNew = 0;

  if (source.items.length !== 573) errors.push(`source count ${source.items.length} !== 573`);
  if (baseItems.length !== 573) errors.push(`base decisions count ${baseItems.length} !== 573`);

  for (const item of baseItems) {
    const src = sourceById.get(item.id);
    if (!src) {
      errors.push(`${item.id}: missing in source`);
      continue;
    }

    const key = `${item.level}|${item.cardId}|${item.field}`;
    if (seen.has(key)) errors.push(`duplicate ${key}`);
    seen.add(key);

    if (item.current !== src.current) errors.push(`${item.id}: current mismatch vs source`);
    if (item.field !== src.field) errors.push(`${item.id}: field mismatch vs source`);

    if (item.status === "LABOT") {
      if (item.new === null || item.new === undefined) errors.push(`${item.id}: LABOT with null new`);
      if (item.action !== "REMOVE" && String(item.new).trim() === "") {
        errors.push(`${item.id}: LABOT with empty new (not REMOVE)`);
      }
      if (item.action !== "REMOVE" && item.current === item.new) {
        errors.push(`${item.id}: LABOT but current === new`);
      }
      if (item.action === "REMOVE" && item.new !== "") {
        errors.push(`${item.id}: REMOVE must have new=''`);
      }
      if (item.action !== "REMOVE" && hasForeignRemnant(String(item.new))) {
        foreignInLabotNew += 1;
        errors.push(`${item.id}: foreign remnant in LABOT new`);
      }
    }

    if (item.status === "NELABOT") {
      if (item.action !== "KEEP") errors.push(`${item.id}: NELABOT must have action KEEP`);
      if (item.current !== item.new) errors.push(`${item.id}: NELABOT but current !== new`);
    }

    if (MANDATORY_IDS.has(item.id)) {
      const m = MANDATORY_OWNER_DECISIONS[item.id];
      if (item.new !== m.new) errors.push(`${item.id}: mandatory new mismatch`);
      if (item.status !== m.status) errors.push(`${item.id}: mandatory status mismatch`);
      if (item.action !== m.action) errors.push(`${item.id}: mandatory action mismatch`);
    }

    if (item.field.includes("comparison") && item.field.endsWith(".example") && item.status === "LABOT") {
      germanChecked += 1;
      if (germanPartPreserved(item.current, item.new)) germanPreserved += 1;
      else errors.push(`${item.id}: German part not preserved`);
    }
  }

  for (const id of sourceById.keys()) {
    if (!baseItems.find((i) => i.id === id)) errors.push(`missing decision for ${id}`);
  }

  const related = payload.items.filter((i) => i.id.includes("RELATED"));
  if (related.length !== RELATED_CONFIRMED_REMNANTS.length) {
    errors.push(`expected ${RELATED_CONFIRMED_REMNANTS.length} RELATED items, got ${related.length}`);
  }

  return {
    errors,
    foreignInLabotNew,
    germanPreserved,
    germanChecked,
    germanPreservedPct: germanChecked ? (germanPreserved / germanChecked) * 100 : 100,
  };
}

function main() {
  const source = JSON.parse(fs.readFileSync(SOURCE_JSON, "utf8"));
  const payload = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
  const validation = validateFinalDecisions(source, payload);

  let syntaxPass = true;
  try {
    execSync("node --check data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/a1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/a2.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }
  const mirrorPass = isSyncedWithWww("data/es/a1.js") && isSyncedWithWww("data/es/a2.js");

  const items = payload.items;
  const result = {
    totalDecisions: items.length,
    labot: items.filter((i) => i.status === "LABOT").length,
    nelabot: items.filter((i) => i.status === "NELABOT").length,
    falsePositive: items.filter((i) => i.classification === "FALSE_POSITIVE").length,
    confirmed: items.filter((i) => i.validationResult === "CONFIRMED").length,
    corrected: items.filter((i) => i.validationResult === "CORRECTED").length,
    validationErrors: validation.errors.length,
    foreignInLabotNew: validation.foreignInLabotNew,
    germanPreservedPct: validation.germanPreservedPct,
    mirrorPass,
    syntaxPass,
    verdict: validation.errors.length ? "FAIL" : "READY FOR COPY-ONLY APPLY",
    errors: validation.errors.slice(0, 50),
  };

  console.log(JSON.stringify(result, null, 2));
  process.exit(validation.errors.length ? 1 : 0);
}

main();
