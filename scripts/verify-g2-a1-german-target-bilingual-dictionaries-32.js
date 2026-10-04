#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  verifyGermanTargetBilingualDictionaries32,
  OUT_DIR,
} = require("./lib/g2-a1-production-current/master-german-target-bilingual-32");

const AUDIT_BATCH_FILES = [
  "scripts/lib/g2-a1-production-current/full-discovery-batch-manifest.js",
  "scripts/audit-g2-a1-production-current-full-discovery.js",
];

function main() {
  const blockers = [];
  const result = verifyGermanTargetBilingualDictionaries32();
  if (!result.pass) {
    console.log(JSON.stringify({ pass: false, ...result, blockers: result.blockers }, null, 2));
    process.exit(1);
  }

  const required = [
    "german-target-bilingual-dictionaries-32.json",
    "german-target-bilingual-dictionaries-32.md",
    "german-target-bilingual-dictionaries-32-verification.json",
  ];
  for (const f of required) {
    if (!fs.existsSync(path.join(OUT_DIR, f))) blockers.push({ code: "MISSING_ARTIFACT", file: f });
  }

  const prodDiff = execSync("git diff --name-only -- data www/data crowdin", { cwd: ROOT, encoding: "utf8" }).trim();
  if (prodDiff) blockers.push({ code: "PRODUCTION_DIRTY", files: prodDiff.split("\n") });

  const batchChanged = AUDIT_BATCH_FILES.filter((f) => {
    try {
      return execSync(`git diff -- "${f}"`, { cwd: ROOT, encoding: "utf8" }).length > 0;
    } catch {
      return false;
    }
  });
  if (batchChanged.length) blockers.push({ code: "BATCH_FILE_CHANGED", files: batchChanged });

  const out = {
    pass: blockers.length === 0,
    ...result,
    blockers: [...(result.blockers || []), ...blockers],
    productionChanges: prodDiff ? prodDiff.split("\n").filter(Boolean).length : 0,
    batchLimitChanges: batchChanged.length,
    fullA1AuditRan: false,
  };
  console.log(JSON.stringify(out, null, 2));
  process.exit(out.pass ? 0 : 1);
}

main();
