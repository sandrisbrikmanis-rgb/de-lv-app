#!/usr/bin/env node
/**
 * CS-DE A1 FINAL AUDIT ON MAIN — read-only orchestrator (GPT-5.6 Luna).
 * Audits production at origin/main only. Production file blobs must match origin/main.
 *
 * Usage:
 *   node scripts/audit-cs-a1-final-audit-on-main.js [--deterministic-only] [--linguistic-only] [--validate-only] [--test-batch]
 */
require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, finalAuditOnMainPaths } = require("./lib/cs-audit-helpers");

const DETERMINISTIC_ONLY = process.argv.includes("--deterministic-only");
const LINGUISTIC_ONLY = process.argv.includes("--linguistic-only");
const VALIDATE_ONLY = process.argv.includes("--validate-only");
const FLAG = "--final-audit-on-main";
const ENV = { ...process.env, CS_A1_FINAL_AUDIT_ON_MAIN: "1" };
const PRODUCTION_FILES = ["data/cs/a1.js", "www/data/cs/a1.js"];

function run(cmd) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { cwd: ROOT, stdio: "inherit", env: ENV });
}

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function verifyMainProduction(paths) {
  run("git fetch origin main");
  const originMainSha = git("git rev-parse origin/main");
  const headSha = git("git rev-parse HEAD");

  let productionMatch = true;
  const fileChecks = [];
  for (const rel of PRODUCTION_FILES) {
    const abs = path.join(ROOT, rel);
    const headBlob = git(`git hash-object ${rel}`);
    let originBlob;
    try {
      originBlob = git(`git rev-parse origin/main:${rel}`);
    } catch {
      productionMatch = false;
      fileChecks.push({ file: rel, headBlob, originBlob: null, match: false });
      continue;
    }
    const match = headBlob === originBlob;
    if (!match) productionMatch = false;
    fileChecks.push({ file: rel, headBlob, originBlob, match });
  }

  const auditMainSha = productionMatch ? originMainSha : headSha;
  const manifest = {
    AUDIT_MAIN_SHA: auditMainSha,
    ORIGIN_MAIN_SHA: originMainSha,
    HEAD_SHA: headSha,
    MATCH: productionMatch && headSha === originMainSha ? "PASS" : (productionMatch ? "PASS_PRODUCTION_ONLY" : "FAIL"),
    productionFiles: PRODUCTION_FILES,
    fileChecks,
    auditedAt: new Date().toISOString(),
  };

  fs.mkdirSync(path.dirname(paths.mainShaManifest), { recursive: true });
  fs.writeFileSync(paths.mainShaManifest, JSON.stringify(manifest, null, 2));

  if (!productionMatch) {
    console.error("CS-DE A1 FINAL AUDIT ON MAIN");
    console.error("BLOCKED: production files do not match origin/main");
    console.error(JSON.stringify(manifest, null, 2));
    process.exit(2);
  }

  console.log(`AUDIT_MAIN_SHA = ORIGIN_MAIN_SHA = ${originMainSha}`);
  if (headSha !== originMainSha) {
    console.log(`Note: HEAD (${headSha}) differs but production blobs match origin/main — audit allowed.`);
  }
  return manifest;
}

function buildCoverageManifest(paths, det, ling, validated) {
  const submittedIds = [];
  for (const b of ling.batches || []) {
    for (const id of b.cardIds || []) submittedIds.push(id);
  }
  const submittedSet = new Set(submittedIds);
  const auditedSet = new Set(ling.auditedCardIds || []);
  const expected = 702;

  const simpleBatches = (ling.batches || []).filter((b) => String(b.batch).startsWith("simple"));
  const studyBatches = (ling.batches || []).filter((b) => String(b.batch).startsWith("study"));

  return {
    productionCards: expected,
    cardsSubmittedToLuna: submittedSet.size,
    cardsAuditedByLuna: auditedSet.size,
    missingCards: Math.max(0, expected - auditedSet.size),
    duplicateAuditedCards: submittedIds.length - submittedSet.size,
    simpleBatches: simpleBatches.length,
    studyBatches: studyBatches.length,
    simpleBatchIds: simpleBatches.map((b) => b.batch),
    studyBatchIds: studyBatches.map((b) => b.batch),
    coverageComplete: auditedSet.size === expected && submittedSet.size === expected,
    deterministicFindingsRaw: det.findings?.length || 0,
    linguisticFindingsRaw: ling.qualityFindings?.length || ling.findings?.length || 0,
    validatedFindings: validated?.findings?.length || 0,
    completedAt: new Date().toISOString(),
  };
}

function consolidate(paths, mainManifest) {
  const dir = paths.tempDir;
  const det = JSON.parse(fs.readFileSync(path.join(dir, "deterministic-audit.json"), "utf8"));
  const ling = JSON.parse(fs.readFileSync(path.join(dir, "linguistic-audit.json"), "utf8"));
  const validatedPath = paths.validatedJson;
  const validated = fs.existsSync(validatedPath)
    ? JSON.parse(fs.readFileSync(validatedPath, "utf8"))
    : null;
  const repairRetention = fs.existsSync(paths.repairRetentionJson)
    ? JSON.parse(fs.readFileSync(paths.repairRetentionJson, "utf8"))
    : null;
  const sanity = fs.existsSync(paths.sanityJson)
    ? JSON.parse(fs.readFileSync(paths.sanityJson, "utf8"))
    : null;

  const manifest = buildCoverageManifest(paths, det, ling, validated);
  fs.writeFileSync(paths.coverageManifest, JSON.stringify(manifest, null, 2));

  const payload = {
    meta: {
      model: "GPT-5.6 Luna",
      auditType: "FINAL AUDIT ON MAIN",
      dataset: "a1",
      mainSha: mainManifest,
      ...manifest,
      productionChanges: 0,
      deReadOnly: true,
      completedAt: new Date().toISOString(),
    },
    deterministic: det,
    linguistic: ling,
    validated,
    repairRetention,
    sanity,
    coverage: manifest,
  };

  fs.mkdirSync(path.dirname(paths.consolidatedJson), { recursive: true });
  fs.writeFileSync(paths.consolidatedJson, JSON.stringify(payload, null, 2));
  console.log(`\nConsolidated: ${paths.consolidatedJson}`);
  console.log(JSON.stringify(manifest, null, 2));
  return payload;
}

function main() {
  const paths = finalAuditOnMainPaths("a1");
  console.log("CS-DE A1 FINAL AUDIT ON MAIN");
  console.log(`Artifacts: ${paths.reportMd}`);

  const mainManifest = verifyMainProduction(paths);

  if (!LINGUISTIC_ONLY && !VALIDATE_ONLY) {
    console.log("\n=== PHASE 0: Sanity snapshots + repair retention ===");
    run(`node scripts/cs-a1-final-audit-on-main-sanity.js ${FLAG}`);
    run(`node scripts/cs-a1-final-audit-on-main-repair-retention.js ${FLAG}`);

    console.log("\n=== PHASE 1: Deterministic validation ===");
    run("node scripts/audit-language-parity.js --lang=cs || true");
    run("node scripts/audit-mojibake.js --lang=cs || true");
    run("node scripts/validate-study-design.js --lang=cs || true");
    run("node scripts/verify-cs-de-compliance.js || true");
    run(`node scripts/audit-cs-collect.js --dataset=a1 ${FLAG}`);
  }

  if (!DETERMINISTIC_ONLY && !VALIDATE_ONLY) {
    console.log("\n=== PHASE 2: Linguistic Luna audit (702 cards) ===");
    const extra = process.argv.includes("--test-batch") ? " --test-batch" : "";
    run(`node scripts/audit-cs-linguistic.js --dataset=a1 ${FLAG}${extra}`);
  }

  if (!DETERMINISTIC_ONLY && !LINGUISTIC_ONLY) {
    console.log("\n=== PHASE 3: Finding validation ===");
    const extra = process.argv.includes("--test-batch") ? " --test-batch" : "";
    const resume = fs.existsSync(paths.validationProgressFile) ? " --resume" : "";
    run(`node scripts/validate-cs-a1-final-audit-findings.js ${FLAG}${extra}${resume}`);
  }

  if (DETERMINISTIC_ONLY || LINGUISTIC_ONLY) {
    console.log("\nSkipping consolidation/report (partial run).");
    return;
  }

  console.log("\n=== PHASE 4: Consolidation + report ===");
  consolidate(paths, mainManifest);
  run(`node scripts/write-cs-a1-final-audit-report.js ${FLAG}`);

  console.log("\n=== CS-DE A1 final audit on main complete ===");
}

main();
