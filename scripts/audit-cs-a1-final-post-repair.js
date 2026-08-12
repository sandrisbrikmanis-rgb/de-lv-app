#!/usr/bin/env node
/**
 * CS-DE A1 FINAL POST-REPAIR full audit orchestrator (read-only).
 * Usage:
 *   node scripts/audit-cs-a1-final-post-repair.js [--deterministic-only] [--linguistic-only] [--validate-only] [--test-batch]
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, finalPostRepairPaths } = require("./lib/cs-audit-helpers");

const DETERMINISTIC_ONLY = process.argv.includes("--deterministic-only");
const LINGUISTIC_ONLY = process.argv.includes("--linguistic-only");
const VALIDATE_ONLY = process.argv.includes("--validate-only");
const FLAG = "--final-post-repair";
const ENV = { ...process.env, CS_A1_FINAL_POST_REPAIR: "1" };

function run(cmd) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { cwd: ROOT, stdio: "inherit", env: ENV });
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

function consolidate(paths) {
  const dir = paths.tempDir;
  const det = JSON.parse(fs.readFileSync(path.join(dir, "deterministic-audit.json"), "utf8"));
  const ling = JSON.parse(fs.readFileSync(path.join(dir, "linguistic-audit.json"), "utf8"));
  const validatedPath = paths.validatedJson;
  const validated = fs.existsSync(validatedPath)
    ? JSON.parse(fs.readFileSync(validatedPath, "utf8"))
    : null;

  const manifest = buildCoverageManifest(paths, det, ling, validated);
  fs.writeFileSync(paths.coverageManifest, JSON.stringify(manifest, null, 2));

  const payload = {
    meta: {
      model: "GPT-5.6 Luna",
      auditType: "FINAL POST-REPAIR FULL AUDIT",
      dataset: "a1",
      ...manifest,
      productionChanges: 0,
      deReadOnly: true,
      completedAt: new Date().toISOString(),
    },
    deterministic: det,
    linguistic: ling,
    validated: validated,
    coverage: manifest,
  };

  fs.mkdirSync(path.dirname(paths.consolidatedJson), { recursive: true });
  fs.writeFileSync(paths.consolidatedJson, JSON.stringify(payload, null, 2));
  console.log(`\nConsolidated: ${paths.consolidatedJson}`);
  console.log(JSON.stringify(manifest, null, 2));
  return payload;
}

function main() {
  const paths = finalPostRepairPaths("a1");
  console.log("CS-DE A1 FINAL POST-REPAIR FULL AUDIT");
  console.log(`Artifacts: ${paths.reportMd}`);

  if (!LINGUISTIC_ONLY && !VALIDATE_ONLY) {
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
  consolidate(paths);
  run(`node scripts/write-cs-a1-final-audit-report.js ${FLAG}`);

  console.log("\n=== CS-DE A1 final post-repair audit complete ===");
}

main();
