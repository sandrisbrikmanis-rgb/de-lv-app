#!/usr/bin/env node
"use strict";
/**
 * Validate ES-DE B1 OWNER proposals final package.
 * Usage: node scripts/validate-es-de-b1-owner-proposals-final.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");
const { PRODUCTION_PATH } = require("./lib/es-b1-discovery-config");
const { loadProductionCards } = require("./lib/es-b1-owner-context");
const { validateProposalsFinal } = require("./lib/es-b1-owner-proposals-validate");

const SOURCE_JSON = path.join(ROOT, "reports/es-de-b1-full-audit-owner-source.json");
const AUDIT_JSON = path.join(ROOT, "reports/es-de-b1-full-audit.json");
const PROPOSALS_JSON = path.join(ROOT, "reports/es-de-b1-owner-proposals-final.json");

function main() {
  const source = JSON.parse(fs.readFileSync(SOURCE_JSON, "utf8"));
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const payload = JSON.parse(fs.readFileSync(PROPOSALS_JSON, "utf8"));
  const { esWords } = loadProductionCards();
  const validation = validateProposalsFinal(source.ownerObjects, payload, esWords, audit.findings);

  let syntaxPass = true;
  try {
    execSync("node --check data/es/b1.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/es/b1.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
  }
  const mirrorPass = isSyncedWithWww(PRODUCTION_PATH);

  const diff = execSync("git diff --name-only HEAD", { cwd: ROOT, encoding: "utf8" })
    .split("\n")
    .filter(Boolean)
    .filter((f) => (f.startsWith("data/") || f.startsWith("www/data/")) && !f.startsWith("reports/"));

  const result = {
    validationErrors: validation.errors.length,
    metrics: validation.metrics,
    mirrorPass,
    syntaxPass,
    productionChanges: diff.length,
    verdict: validation.errors.length ? "FAIL" : "READY FOR OWNER REVIEW",
    errors: validation.errors.slice(0, 50),
  };

  console.log(JSON.stringify(result, null, 2));
  process.exit(validation.errors.length ? 1 : 0);
}

main();
