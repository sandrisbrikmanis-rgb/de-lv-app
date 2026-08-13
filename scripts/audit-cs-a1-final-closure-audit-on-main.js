#!/usr/bin/env node
/**
 * CS-DE A1 FINAL CLOSURE AUDIT ON MAIN — read-only orchestrator (GPT-5.6 Luna).
 * Locks to origin/main @ 3bfbb4bba56ee9bf1be2df8c539ee58d31736fcb
 */
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { ROOT, finalClosureAuditOnMainPaths } = require('./lib/cs-audit-helpers');

const EXPECTED_MAIN_SHA = '3bfbb4bba56ee9bf1be2df8c539ee58d31736fcb';
const DETERMINISTIC_ONLY = process.argv.includes('--deterministic-only');
const LINGUISTIC_ONLY = process.argv.includes('--linguistic-only');
const VALIDATE_ONLY = process.argv.includes('--validate-only');
const FLAG = '--final-closure-audit-on-main';
const ENV = { ...process.env, CS_A1_FINAL_CLOSURE_AUDIT_ON_MAIN: '1' };
const PRODUCTION_FILES = ['data/cs/a1.js', 'www/data/cs/a1.js'];

function run(cmd) {
  console.log(`\n> ${cmd}`);
  execSync(cmd, { cwd: ROOT, stdio: 'inherit', env: ENV });
}

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: 'utf8' }).trim();
}

function verifyShaLock(paths) {
  run('git fetch origin main');
  const originMainSha = git('git rev-parse origin/main');
  const auditMainSha = git('git rev-parse HEAD');

  if (originMainSha !== EXPECTED_MAIN_SHA) {
    console.error(`BLOCKED_SHA_MISMATCH: origin/main is ${originMainSha}, expected ${EXPECTED_MAIN_SHA}`);
    process.exit(2);
  }
  if (auditMainSha !== EXPECTED_MAIN_SHA) {
    console.error(`BLOCKED_SHA_MISMATCH: HEAD is ${auditMainSha}, expected ${EXPECTED_MAIN_SHA}`);
    process.exit(2);
  }

  let productionMatch = true;
  const fileChecks = [];
  for (const rel of PRODUCTION_FILES) {
    const headBlob = git(`git hash-object ${rel}`);
    const originBlob = git(`git rev-parse origin/main:${rel}`);
    const match = headBlob === originBlob;
    if (!match) productionMatch = false;
    fileChecks.push({ file: rel, headBlob, originBlob, match });
  }

  const manifest = {
    EXPECTED_MAIN_SHA,
    AUDIT_MAIN_SHA: auditMainSha,
    ORIGIN_MAIN_SHA: originMainSha,
    SHA_LOCK: auditMainSha === EXPECTED_MAIN_SHA && originMainSha === EXPECTED_MAIN_SHA ? 'PASS' : 'FAIL',
    productionFiles: PRODUCTION_FILES,
    fileChecks,
    auditedAt: new Date().toISOString(),
  };

  fs.mkdirSync(path.dirname(paths.mainShaManifest), { recursive: true });
  fs.writeFileSync(paths.mainShaManifest, JSON.stringify(manifest, null, 2));

  if (!productionMatch || manifest.SHA_LOCK !== 'PASS') {
    console.error('AUDIT STATUS = BLOCKED_SHA_MISMATCH');
    console.error(JSON.stringify(manifest, null, 2));
    process.exit(2);
  }

  console.log(`SHA LOCK = PASS (${EXPECTED_MAIN_SHA})`);
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
  const studyExpected = 134;
  const cs = require('./lib/cs-audit-helpers').loadArray('data/cs/a1.js', 'A1_WORDS');
  const studyFound = cs.filter((e) => e.study).length;

  return {
    productionCards: expected,
    cardsSubmittedToLuna: submittedSet.size,
    cardsAuditedByLuna: auditedSet.size,
    missingCards: Math.max(0, expected - auditedSet.size),
    duplicateAuditedCards: submittedIds.length - submittedSet.size,
    studyObjectsExpected: studyExpected,
    studyObjectsFound: studyFound,
    coverageComplete: auditedSet.size === expected && submittedSet.size === expected && studyFound === studyExpected,
    deterministicFindingsRaw: det.findings?.length || 0,
    linguisticFindingsRaw: ling.qualityFindings?.length || ling.findings?.length || 0,
    validatedFindings: validated?.findings?.length || 0,
    completedAt: new Date().toISOString(),
  };
}

function consolidate(paths, mainManifest) {
  const dir = paths.tempDir;
  const det = JSON.parse(fs.readFileSync(path.join(dir, 'deterministic-audit.json'), 'utf8'));
  const ling = JSON.parse(fs.readFileSync(path.join(dir, 'linguistic-audit.json'), 'utf8'));
  const validatedPath = paths.validatedJson;
  const validated = fs.existsSync(validatedPath)
    ? JSON.parse(fs.readFileSync(validatedPath, 'utf8'))
    : null;
  const repairRetention = fs.existsSync(paths.repairRetentionJson)
    ? JSON.parse(fs.readFileSync(paths.repairRetentionJson, 'utf8'))
    : null;

  const manifest = buildCoverageManifest(paths, det, ling, validated);
  fs.writeFileSync(paths.coverageManifest, JSON.stringify(manifest, null, 2));

  const payload = {
    meta: {
      model: 'GPT-5.6 Luna',
      auditType: paths.auditType,
      expectedMainSha: EXPECTED_MAIN_SHA,
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
    coverage: manifest,
  };

  fs.mkdirSync(path.dirname(paths.consolidatedJson), { recursive: true });
  fs.writeFileSync(paths.consolidatedJson, JSON.stringify(payload, null, 2));
  console.log(`\nConsolidated: ${paths.consolidatedJson}`);
  return payload;
}

function main() {
  const paths = finalClosureAuditOnMainPaths('a1');
  console.log('CS-DE A1 FINAL CLOSURE AUDIT ON MAIN');
  console.log(`Artifacts: ${paths.reportMd}`);

  const mainManifest = verifyShaLock(paths);

  if (!LINGUISTIC_ONLY && !VALIDATE_ONLY) {
    console.log('\n=== PHASE 0: Sanity + repair retention ===');
    run(`node scripts/cs-a1-final-audit-on-main-sanity.js ${FLAG}`);
    run('node scripts/cs-a1-final-closure-audit-repair-retention.js');

    console.log('\n=== PHASE 1: Deterministic validation ===');
    run('node scripts/audit-language-parity.js --lang=cs || true');
    run('node scripts/audit-mojibake.js --lang=cs || true');
    run('node scripts/validate-study-design.js --lang=cs || true');
    run('node scripts/verify-cs-de-compliance.js || true');
    run(`node scripts/audit-cs-collect.js --dataset=a1 ${FLAG}`);
  }

  if (!DETERMINISTIC_ONLY && !VALIDATE_ONLY) {
    console.log('\n=== PHASE 2: Linguistic Luna audit (702 cards) ===');
    run(`node scripts/audit-cs-linguistic.js --dataset=a1 ${FLAG} --resume`);
  }

  if (!DETERMINISTIC_ONLY && !LINGUISTIC_ONLY) {
    console.log('\n=== PHASE 3: Finding validation ===');
    const resume = fs.existsSync(paths.validationProgressFile) ? ' --resume' : '';
    run(`node scripts/validate-cs-a1-final-audit-findings.js ${FLAG}${resume}`);
  }

  if (DETERMINISTIC_ONLY || LINGUISTIC_ONLY) {
    console.log('\nSkipping consolidation/report (partial run).');
    return;
  }

  console.log('\n=== PHASE 4: Consolidation + report ===');
  consolidate(paths, mainManifest);
  run(`node scripts/write-cs-a1-final-closure-audit-report.js ${FLAG}`);
  console.log('\n=== CS-DE A1 final closure audit on main complete ===');
}

main();
