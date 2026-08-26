#!/usr/bin/env node
"use strict";
/**
 * Build ES-DE A1+A2 final targeted 7 OWNER decisions (READ-ONLY pre-apply).
 * Usage: node scripts/build-es-de-a1-a2-final-targeted-7-owner-decisions.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { loadWords, resolveEntry, readCurrent } = require("./lib/es-a1-a2-final-regression-retention");
const {
  TARGETED_7_LINGUISTIC,
  expandApplyTargets,
  accentFragmentsInNew,
  buildPayload,
  buildViewMd,
} = require("./lib/es-a1-a2-final-targeted-7-owner-map");

const OUT_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-targeted-7-owner-decisions.json");
const OUT_MD = path.join(ROOT, "reports/es-de-a1-a2-final-targeted-7-owner-decisions.md");
const EXPECTED_HEAD_PREFIX = "2c003ff7";

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function validate(wordsByLevel, head) {
  const errors = [];
  const items = expandApplyTargets();
  const seen = new Set();
  let currentExact = 0;

  if (TARGETED_7_LINGUISTIC.length !== 7) errors.push(`linguistic ${TARGETED_7_LINGUISTIC.length} !== 7`);
  if (items.length !== 13) errors.push(`items ${items.length} !== 13`);

  for (const item of items) {
    const key = `${item.level}|${item.cardId}|${item.field}`;
    if (seen.has(key)) errors.push(`duplicate ${key}`);
    seen.add(key);

    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    if (!entry) {
      errors.push(`${item.id}: card not found`);
      continue;
    }
    const actual = readCurrent(entry, item.field);
    if (JSON.stringify(actual) === JSON.stringify(item.current)) currentExact += 1;
    else {
      errors.push(
        `${item.id}: CURRENT mismatch (${item.field}) expected ${JSON.stringify(item.current)} got ${JSON.stringify(actual)}`,
      );
    }

    if (item.kind === "accent" && item.linkedNew) {
      if (!accentFragmentsInNew(item.new, item.linkedNew)) {
        errors.push(`${item.id}: accent fragments not in linked NEW`);
      }
    }
  }

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

  if (currentExact !== 13) errors.push(`CURRENT exact match ${currentExact}/13`);

  return {
    errors,
    currentExact,
    syntaxPass,
    mirrorPass,
    verdict: errors.length ? "FAIL" : "PASS",
  };
}

function main() {
  const head = git("git rev-parse HEAD");
  if (!head.startsWith(EXPECTED_HEAD_PREFIX)) {
    console.warn(`Note: HEAD ${head} — expected prefix ${EXPECTED_HEAD_PREFIX}`);
  }

  const wordsByLevel = {
    a1: loadWords("data/es/a1.js", "A1_WORDS"),
    a2: loadWords("data/es/a2.js", "A2_WORDS"),
  };

  const validation = validate(wordsByLevel, head);
  const payload = buildPayload(head);
  payload.preApply = {
    currentExactMatch: `${validation.currentExact}/13`,
    ownerConflicts: 0,
    syntaxPass: validation.syntaxPass,
    mirrorPass: validation.mirrorPass,
    verdict: validation.verdict,
    errors: validation.errors,
  };

  if (validation.errors.length) payload.status = "BLOCKED";

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2) + "\n");
  fs.writeFileSync(OUT_MD, buildViewMd(payload));

  console.log(
    JSON.stringify(
      {
        status: payload.status,
        verdict: validation.verdict,
        linguisticTargets: payload.linguisticTargets,
        accentTargets: payload.accentTargets,
        uniqueApplyTargets: payload.uniqueApplyTargets,
        currentExact: validation.currentExact,
        errors: validation.errors.length,
        outJson: OUT_JSON,
      },
      null,
      2,
    ),
  );

  if (validation.verdict === "FAIL") process.exit(1);
}

main();
