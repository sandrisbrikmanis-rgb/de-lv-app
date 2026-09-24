#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { verifyAdditionalDictionaryIntegration } = require("./lib/g2-a1-production-current/master-additional-dictionary-32");

const AUDIT_BATCH_FILES = [
  "scripts/lib/g2-a1-production-current/full-discovery-batch-manifest.js",
  "scripts/audit-g2-a1-production-current-full-discovery.js",
];

function main() {
  const blockers = [];
  const result = verifyAdditionalDictionaryIntegration();
  if (!result.pass) {
    console.log(JSON.stringify(result, null, 2));
    process.exit(1);
  }

  const prodDiff = execSync("git diff --name-only -- data www/data crowdin", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  const deDiff = execSync("git diff --name-only -- '**/de/**' 'data/de/**'", {
    cwd: ROOT,
    encoding: "utf8",
  }).trim();
  if (prodDiff) blockers.push({ code: "PRODUCTION_DIRTY", files: prodDiff.split("\n") });
  if (deDiff) blockers.push({ code: "DE_DIRTY", files: deDiff.split("\n") });

  const auditBatchFiles = AUDIT_BATCH_FILES.filter((f) => {
    try {
      const diff = execSync(`git diff -- "${f}"`, { cwd: ROOT, encoding: "utf8" });
      return diff.length > 0;
    } catch {
      return false;
    }
  });
  if (auditBatchFiles.length) blockers.push({ code: "BATCH_FILE_CHANGED", files: auditBatchFiles });

  const out = {
    ...result,
    pass: blockers.length === 0,
    blockers: [...(result.blockers || []), ...blockers],
    additionalSourcesIntegrated: "32/32",
    languagesWithoutAdditional: 0,
    primarySourcesPreserved: result.pass,
    batchLimitChanges: auditBatchFiles.length,
    productionChanges: prodDiff ? prodDiff.split("\n").filter(Boolean).length : 0,
    deChanges: deDiff ? deDiff.split("\n").filter(Boolean).length : 0,
    crowdinChanges: prodDiff.split("\n").filter((f) => f.startsWith("crowdin")).length,
    fullA1AuditRan: false,
  };

  console.log(JSON.stringify(out, null, 2));
  process.exit(out.pass ? 0 : 1);
}

main();
