#!/usr/bin/env node
"use strict";
/**
 * Validate ES-DE A1+A2 final regression OWNER decisions.
 * Usage: node scripts/validate-es-a1-a2-final-regression-owner-decisions.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { loadWords } = require("./lib/es-a1-a2-final-regression-retention");
const { validateOwnerDecisions } = require("./lib/es-a1-a2-final-regression-owner-map");

const REGRESSION_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-linguistic-regression.json");
const DECISIONS_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-regression-owner-decisions.json");

function main() {
  const regression = JSON.parse(fs.readFileSync(REGRESSION_JSON, "utf8"));
  const payload = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
  const wordsByLevel = {
    a1: loadWords("data/es/a1.js", "A1_WORDS"),
    a2: loadWords("data/es/a2.js", "A2_WORDS"),
  };

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

  const validation = validateOwnerDecisions({
    regression,
    payload,
    wordsByLevel,
    syntaxPass,
    mirrorPass,
  });

  console.log(JSON.stringify({ verdict: validation.verdict, metrics: validation.metrics, errors: validation.errors }, null, 2));
  if (validation.verdict === "BLOCKED") process.exit(1);
}

main();
