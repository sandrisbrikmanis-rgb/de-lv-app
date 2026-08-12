#!/usr/bin/env node
/**
 * CS-DE A1 post-repair full audit orchestrator (read-only).
 * Usage:
 *   node scripts/audit-cs-post-repair-a1.js [--deterministic-only] [--linguistic-only] [--test-batch]
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, postRepairPaths } = require("./lib/cs-audit-helpers");

const DETERMINISTIC_ONLY = process.argv.includes("--deterministic-only");
const LINGUISTIC_ONLY = process.argv.includes("--linguistic-only");
const FLAG = "--post-repair";

function run(cmd) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { cwd: ROOT, stdio: "inherit", env: { ...process.env, CS_A1_POST_REPAIR: "1" } });
}

function consolidate(paths) {
  const dir = paths.tempDir;
  const det = JSON.parse(fs.readFileSync(path.join(dir, "deterministic-audit.json"), "utf8"));
  const ling = JSON.parse(fs.readFileSync(path.join(dir, "linguistic-audit.json"), "utf8"));

  const allCardIds = new Set(ling.auditedCardIds || []);
  const batches = ling.batches || [];
  const submittedIds = [];
  for (const b of batches) {
    for (const id of b.cardIds || []) submittedIds.push(id);
  }
  const submittedSet = new Set(submittedIds);
  const dupSubmitted = submittedIds.length - submittedSet.size;

  const expected = ling.meta?.cardsExpected || det.meta?.csCount || 702;
  const audited = allCardIds.size;
  const missing = expected - audited;

  const payload = {
    meta: {
      model: "GPT-5.6 Luna",
      auditType: "FULL POST-REPAIR LINGUISTIC + DETERMINISTIC AUDIT",
      dataset: "a1",
      cardsExpected: expected,
      cardsSubmittedToLuna: submittedSet.size,
      cardsAuditedByLuna: audited,
      missingCards: Math.max(0, missing),
      duplicateAuditedCards: dupSubmitted,
      coverage: audited === expected ? "100%" : `${audited}/${expected}`,
      productionChanges: 0,
      deReadOnly: det.germanIntegrity?.pass !== false,
      deterministicPass: det.structural?.pass !== false && det.germanIntegrity?.pass !== false,
      completedAt: new Date().toISOString(),
      lunaBlocks: batches.map((b) => ({
        batch: b.batch,
        auditType: b.auditType,
        cardCount: b.cardCount,
        cardIds: b.cardIds,
      })),
    },
    deterministic: det,
    linguistic: ling,
    severityCounts: ling.severityCounts || {},
    nonErrorCounts: ling.nonErrorCounts || {},
    findings: [
      ...(det.findings || []),
      ...(ling.qualityFindings || ling.findings || []),
    ],
  };

  fs.mkdirSync(path.dirname(paths.consolidatedJson), { recursive: true });
  fs.writeFileSync(paths.consolidatedJson, JSON.stringify(payload, null, 2));
  console.log(`\nConsolidated: ${paths.consolidatedJson}`);
  console.log(JSON.stringify({
    cardsSubmittedToLuna: submittedSet.size,
    cardsAuditedByLuna: audited,
    missingCards: Math.max(0, missing),
    duplicateAuditedCards: dupSubmitted,
  }, null, 2));
  return payload;
}

function main() {
  const paths = postRepairPaths("a1");
  console.log("CS-DE A1 POST-REPAIR FULL AUDIT");
  console.log(`Mode: ${DETERMINISTIC_ONLY ? "deterministic only" : LINGUISTIC_ONLY ? "linguistic only" : "full"}`);
  console.log(`Artifacts: ${paths.reportMd}`);

  if (!LINGUISTIC_ONLY) {
    console.log("\n=== PHASE 1: Deterministic validation ===");
    run("node scripts/audit-language-parity.js --lang=cs || true");
    run("node scripts/audit-mojibake.js --lang=cs || true");
    run("node scripts/validate-study-design.js --lang=cs || true");
    run("node scripts/verify-cs-de-compliance.js || true");
    run(`node scripts/audit-cs-collect.js --dataset=a1 ${FLAG}`);
  }

  if (!DETERMINISTIC_ONLY) {
    console.log("\n=== PHASE 2: Linguistic Luna audit ===");
    const extra = process.argv.includes("--test-batch") ? " --test-batch" : "";
    run(`node scripts/audit-cs-linguistic.js --dataset=a1 ${FLAG}${extra}`);
  }

  console.log("\n=== PHASE 3: Consolidation + report ===");
  consolidate(paths);
  run(`node scripts/audit-cs-write-report.js --dataset=a1 ${FLAG}`);

  console.log("\n=== CS-DE A1 post-repair audit complete ===");
}

main();
