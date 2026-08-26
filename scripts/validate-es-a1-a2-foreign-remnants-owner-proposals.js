#!/usr/bin/env node
"use strict";
/**
 * Validate ES-DE A1+A2 foreign remnants OWNER proposals against source.
 * Usage: node scripts/validate-es-a1-a2-foreign-remnants-owner-proposals.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { hasForeignRemnant, germanPartPreserved } = require("./lib/es-foreign-remnant-validate");

const { validateProposals } = require("./lib/es-foreign-remnant-validate");

const SOURCE_JSON = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-source.json");
const PROPOSALS_JSON = path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-proposals-001-573.json");

function main() {
  const source = JSON.parse(fs.readFileSync(SOURCE_JSON, "utf8"));
  const payload = JSON.parse(fs.readFileSync(PROPOSALS_JSON, "utf8"));
  const validation = validateProposals(source, payload);

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

  const result = {
    validationErrors: validation.errors.length,
    foreignInNew: validation.foreignInNew,
    germanPreservedPct: validation.germanPreservedPct,
    mirrorPass,
    syntaxPass,
    verdict: validation.errors.length ? "FAIL" : "READY FOR OWNER REVIEW",
    errors: validation.errors.slice(0, 50),
  };

  console.log(JSON.stringify(result, null, 2));
  process.exit(validation.errors.length ? 1 : 0);
}

main();
