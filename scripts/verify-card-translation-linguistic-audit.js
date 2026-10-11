#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { SCHEMA_VERSION, REPORTS_DIR } = require("./lib/card-translation-linguistic-audit/constants");
const { loadCombinedSourceRegistry } = require("./lib/card-translation-linguistic-audit/registry-load");
const { runCardTranslationLinguisticAudit } = require("./lib/card-translation-linguistic-audit/run-audit");

const OUT_DIR = path.join(ROOT, "reports/temp/card-translation-linguistic-audit-verify");
const VERIFY_JSON = path.join(
  ROOT,
  "reports/g2-a1-production-current/card-translation-linguistic-audit/card-translation-linguistic-audit-verification.json",
);

const PROTECTED_DIFF_PATHS = ["data", "www/data", "crowdin/content", "crowdin/ui"];
const OWNER_MASTER_GLOBS = [
  /^docs\/PROJECT_LANGUAGE_MASTER/i,
  /^reports\/.*-owner-/,
  /^reports\/da-.*-owner-/,
];

function gitDiffNames(paths) {
  const cmd = `git diff --name-only -- ${paths.join(" ")}`;
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function gitDiffCachedNames(paths) {
  const cmd = `git diff --cached --name-only -- ${paths.join(" ")}`;
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function unexpectedOwnerMasterChanges() {
  const all = execSync("git diff --name-only && git diff --cached --name-only", {
    cwd: ROOT,
    encoding: "utf8",
  })
    .trim()
    .split("\n")
    .filter(Boolean);
  const uniq = [...new Set(all)];
  return uniq.filter((rel) => OWNER_MASTER_GLOBS.some((re) => re.test(rel)));
}

const RECORD_KEYS = [
  "level",
  "language",
  "cardId",
  "fieldPath",
  "currentValue",
  "deValue",
  "sourceType",
  "sourceName",
  "sourceUrl",
  "sourceDirection",
  "evidenceStatus",
  "evidenceNote",
];

function validateRecord(rec, failures, idx) {
  for (const k of RECORD_KEYS) {
    if (!Object.prototype.hasOwnProperty.call(rec, k)) {
      failures.push(`RECORD_${idx}_MISSING_${k}`);
    }
  }
  if (rec.evidenceStatus === "PROPOSED_NEW" || rec.evidenceStatus === "AI_GUESS") {
    failures.push(`RECORD_${idx}_FORBIDDEN_STATUS`);
  }
}

async function main() {
  const failures = [];

  execSync("node scripts/test-card-translation-linguistic-audit.js", {
    cwd: ROOT,
    stdio: "pipe",
    encoding: "utf8",
  });

  const registry = loadCombinedSourceRegistry();
  if (!registry.pass) failures.push("COMBINED_REGISTRY_FAIL");

  const prodBefore = gitDiffNames(PROTECTED_DIFF_PATHS);
  const prodCachedBefore = gitDiffCachedNames(PROTECTED_DIFF_PATHS);
  const ownerBefore = unexpectedOwnerMasterChanges();

  if (prodBefore || prodCachedBefore) {
    failures.push({
      code: "PRODUCTION_DIRTY_BEFORE_VERIFY",
      note: "data/www/data must be clean before verify run",
      prodBefore,
      prodCachedBefore,
    });
  }

  const result = await runCardTranslationLinguisticAudit({
    levels: ["a1"],
    langs: ["sl", "nn"],
    limit: 2,
    outDir: OUT_DIR,
    executeSources: false,
  });

  if (!result.pass) failures.push("AUDIT_RUN_PASS_FALSE");
  if (result.dryRun !== true) failures.push("AUDIT_MUST_BE_DRY_RUN");
  if (result.manifest?.productionWrites !== false) failures.push("PRODUCTION_WRITES_FLAG");

  const prodAfter = gitDiffNames(PROTECTED_DIFF_PATHS);
  const prodCachedAfter = gitDiffCachedNames(PROTECTED_DIFF_PATHS);
  if (prodAfter !== prodBefore || prodCachedAfter !== prodCachedBefore) {
    failures.push({
      code: "UNEXPECTED_PRODUCTION_CHANGE",
      prodBefore,
      prodAfter,
      prodCachedAfter,
    });
  }

  const ownerAfter = unexpectedOwnerMasterChanges();
  if (ownerAfter.length > ownerBefore.length) {
    failures.push({ code: "UNEXPECTED_OWNER_MASTER_CHANGE", ownerAfter });
  }

  const recordsPath = path.join(OUT_DIR, "card-translation-linguistic-audit-records.json");
  if (!fs.existsSync(recordsPath)) failures.push("MISSING_RECORDS");
  else {
    const { records } = JSON.parse(fs.readFileSync(recordsPath, "utf8"));
    if (!records?.length) failures.push("EMPTY_RECORDS");
    records.forEach((r, i) => validateRecord(r, failures, i));
  }

  const manifestPath = path.join(OUT_DIR, "card-translation-linguistic-audit-manifest.json");
  if (fs.existsSync(manifestPath)) {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    if (manifest.schemaVersion !== SCHEMA_VERSION) failures.push("MANIFEST_SCHEMA_MISMATCH");
    if (manifest.mode !== "dry-run") failures.push("MANIFEST_MODE");
  }

  const gate = {
    pass: failures.length === 0,
    failures,
    schemaVersion: SCHEMA_VERSION,
    verifyOutDir: path.relative(ROOT, OUT_DIR),
    canonicalReportsDir: path.relative(ROOT, REPORTS_DIR),
    recordCount: result.recordCount,
    productionChanges: prodAfter ? prodAfter.split("\n").filter(Boolean).length : 0,
    ownerMasterUnexpected: ownerAfter.length - ownerBefore.length,
  };

  fs.mkdirSync(path.dirname(VERIFY_JSON), { recursive: true });
  fs.writeFileSync(
    VERIFY_JSON,
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        gate,
      },
      null,
      2,
    )}\n`,
  );

  console.log(JSON.stringify(gate, null, 2));
  process.exit(gate.pass ? 0 : 1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
