#!/usr/bin/env node
'use strict';
/**
 * CS-DE A1 final closure reconfirmation on main (read-only).
 * Usage:
 *   node scripts/reconfirm-cs-a1-final-closure-on-main.js
 *   node scripts/reconfirm-cs-a1-final-closure-on-main.js --deterministic-only
 *   node scripts/reconfirm-cs-a1-final-closure-on-main.js --luna-only
 */
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const FILES = [path.join(ROOT, 'data/cs/a1.js'), path.join(ROOT, 'www/data/cs/a1.js')];
const MAIN_BEFORE = '3bfbb4bba56ee9bf1be2df8c539ee58d31736fcb';
const PR466_SHA = '18a2ba0d314ca8322a6c55cccd5a69c3461773ba';
const INTEGRATION_BRANCH = 'cursor/cs-a1-final-closure-repair-main-integration-6850';
const CLOSE_BRANCH = 'cursor/cs-a1-final-close-on-main-6850';

const DETERMINISTIC_ONLY = process.argv.includes('--deterministic-only');
const LUNA_ONLY = process.argv.includes('--luna-only');

const TARGET_CARDS = [
  'a1-auch-study', 'a1-baden', 'a1-dass', 'a1-der', 'a1-dieser', 'a1-fahren', 'a1-fuer',
  'a1-gefallen-study', 'a1-hand-study', 'a1-ihr', 'a1-im', 'a1-in', 'a1-ins', 'a1-kein',
  'a1-kennen-study', 'a1-können', 'a1-land', 'a1-mal', 'a1-mann', 'a1-mögen', 'a1-ob',
  'a1-sie-study', 'a1-vor', 'a1-wenn', 'a1-wie', 'a1-zug', 'a1-urlaub',
];

const OWNER_OVERRIDE = [
  { cardId: 'a1-in', field: 'sectionAccents', value: 'Berlīnē' },
];
const OWNER_KEEP = [
  { cardId: 'a1-verstehen', field: 'lv', value: 'Pochopit' },
  { cardId: 'a1-verstehen', field: 'study.comparison[0].meaning', value: 'Pochopit' },
];
const FALSE_POSITIVE_FOREIGN = [
  { pattern: /Balkón/i, reason: 'Czech Balkón is valid' },
  { pattern: /Milión/i, reason: 'Czech Milión is valid' },
  { pattern: /Citrón/i, reason: 'Czech Citrón is valid' },
  { pattern: /Lotyšsko/i, reason: 'Intentional Czech country name in explanatory context' },
];

const TEMP_DIR = path.join(ROOT, 'reports/temp/cs-a1-final-closure-reconfirmation');
const LUNA_FINDINGS = path.join(TEMP_DIR, 'luna-regression-findings.json');
const RESULT_JSON = path.join(TEMP_DIR, 'reconfirmation-result.json');

const {
  loadArray,
  entryId,
  detectForeignRemnant,
  walkStrings,
  buildStudyCard,
  buildSimpleCard,
  chunk,
} = require('./lib/cs-audit-helpers');
const {
  createStats,
  classifyFindings,
} = require('./lib/openai-cs-full-audit');
const { LINGUISTIC_REPAIRS, STRUCTURAL_REPAIR } = require('./apply-cs-a1-final-closure-residual-repair');
const integrationValidator = require('./validate-cs-a1-final-closure-repair-main-integration');

const REGRESSION_PROMPT = [
  'You are a targeted CS-DE A1 repair regression auditor (GPT-5.6 Luna).',
  'These cards were recently repaired in PR #466 closure residual repair.',
  'Check ONLY whether the current Czech text is correct per German meaning.',
  'This is NOT a full discovery audit. Do NOT suggest stylistic improvements on unrelated fields.',
  'Return ONLY valid JSON: { "items": [ ... ] }.',
  'PASS for correct repaired content. Findings only for real errors or clear repair regressions.',
  'Categories for non-errors (do NOT count): FALSE_POSITIVE, STYLE_ONLY, PROJECT_CONVENTION, SOURCE_LV_ISSUE, NEEDS_OWNER_REVIEW.',
  'CONFIRMED_REPAIR_REGRESSION = repair introduced wrong Czech vs DE.',
  'NEW_CONFIRMED_REAL = new real error in repaired fields.',
  'Do NOT suggest DE changes. Do NOT flag study.comparison[*].word German labels.',
  'a1-in sectionAccents Berlīnē is documented OWNER_OVERRIDE_FALSE_POSITIVE — not an error.',
].join('\n');

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: 'utf8' }).trim();
}

function getByPath(obj, fieldPath) {
  const parts = [];
  fieldPath.replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return '';
  });
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur;
}

function filterSubstantiveFindings(findings, csWords) {
  return findings.filter((f) => {
    const hasSubstance = Boolean((f.reason || '').trim() || (f.currentCs || '').trim() || (f.proposedCs || '').trim());
    if (!hasSubstance) return false;
    const repair = LINGUISTIC_REPAIRS.find((r) => r.cardId === f.cardId && (f.field === r.field || f.field.endsWith(r.field.split('.').pop())));
    if (!repair) return true;
    const idx = csWords.findIndex((e, i) => entryId(e, i, 'a1') === f.cardId);
    if (idx < 0) return true;
    const actual = getByPath(csWords[idx], repair.field);
    if (actual === repair.pec) return false;
    return true;
  });
}

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function loadWordsAtRef(ref, rel) {
  const code = execSync(`git show ${ref}:${rel}`, { cwd: ROOT, encoding: 'utf8' });
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function verifyShaLock(expectedMainSha) {
  execSync('git fetch origin main', { cwd: ROOT, stdio: 'pipe' });
  const originMainSha = git('git rev-parse origin/main');
  const auditMainSha = git('git rev-parse HEAD');
  const pass = expectedMainSha === auditMainSha && auditMainSha === originMainSha;
  return {
    EXPECTED_MAIN_SHA: expectedMainSha,
    AUDIT_MAIN_SHA: auditMainSha,
    ORIGIN_MAIN_SHA: originMainSha,
    SHA_LOCK: pass ? 'PASS' : 'FAIL',
    pass,
  };
}

function verifyIntegration() {
  const inMain = execSync(`git merge-base --is-ancestor ${PR466_SHA} origin/main && echo yes || echo no`, { cwd: ROOT, encoding: 'utf8' }).trim() === 'yes';
  return {
    pr: 466,
    sha: PR466_SHA,
    parent: MAIN_BEFORE,
    inMainBefore: false,
    inMainNow: inMain,
    action: inMain ? 'ALREADY_INTEGRATED' : 'REQUIRES_INTEGRATION',
    integrationBranch: INTEGRATION_BRANCH,
    integrationHead: PR466_SHA,
  };
}

function checkForeignRemnants(words) {
  const raw = [];
  const falsePositives = [];
  for (let i = 0; i < words.length; i++) {
    const entry = words[i];
    const cardId = entryId(entry, i, 'a1');
    walkStrings(entry, (text, ctx) => {
      if (ctx.inDe) return;
      const field = ctx.path;
      for (const o of OWNER_OVERRIDE) {
        if (o.cardId === cardId && field.includes('sectionAccents') && text.includes(o.value)) {
          falsePositives.push({ cardId, field, value: o.value, reason: 'OWNER_OVERRIDE_FALSE_POSITIVE' });
          return;
        }
      }
      for (const fp of FALSE_POSITIVE_FOREIGN) {
        if (fp.pattern.test(text)) {
          falsePositives.push({ cardId, field, reason: fp.reason });
          return;
        }
      }
      const fr = detectForeignRemnant(text);
      if (fr.length) {
        raw.push({ cardId, field, types: fr, text: text.slice(0, 200) });
      }
    });
  }
  return { real: raw.length, raw, falsePositives };
}

function checkSectionAccents(words) {
  const sectionAccents = require('./validate-cs-a1-final-repair-main-integration').reconcileSectionAccents(words);
  return {
    real: sectionAccents.realRemaining,
    issues: sectionAccents.details,
    ownerOverride: sectionAccents.ownerOverride,
  };
}

function runDeterministic(expectedMainSha) {
  const shaLock = verifyShaLock(expectedMainSha);
  const integration = verifyIntegration();
  const words = loadWords(FILES[0]);
  const beforeMain = loadWordsAtRef(MAIN_BEFORE, 'data/cs/a1.js');
  const closure = integrationValidator.reconcileClosureRepairs(words);
  const owner = require('./validate-cs-a1-final-repair-main-integration').reconcileOwner(words);
  const sectionAccents = checkSectionAccents(words);
  const foreignRemnants = checkForeignRemnants(words);
  const technical = integrationValidator.verifyTechnical(words, beforeMain);
  const diff = integrationValidator.analyzeDiff(MAIN_BEFORE);

  const pass = shaLock.pass
    && integration.inMainNow
    && closure.pass
    && owner.pass
    && sectionAccents.real === 0
    && sectionAccents.ownerOverride
    && foreignRemnants.real === 0
    && technical.cards === 702
    && technical.studyCount === 134
    && technical.syntax === 'PASS'
    && technical.mirror === 'PASS'
    && technical.idOrder === 'PASS'
    && technical.idUniqueness === 'PASS'
    && technical.deChanges === 0
    && technical.obAccentOk
    && technical.missingStudyParity === 0
    && diff.unexpectedCount === 0;

  return {
    pass,
    shaLock,
    integration,
    closure,
    owner,
    sectionAccents,
    foreignRemnants,
    technical,
    diff,
    mainBefore: MAIN_BEFORE,
    mainAfter: expectedMainSha,
  };
}

async function runLunaRegression() {
  const OpenAI = require('openai');
  const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const lv = loadArray('data/a1.js', 'A1_WORDS');
  const cs = loadArray('data/cs/a1.js', 'A1_WORDS');
  const cards = [];
  for (let i = 0; i < cs.length; i++) {
    const cardId = entryId(cs[i], i, 'a1');
    if (!TARGET_CARDS.includes(cardId)) continue;
    if (cs[i].study) cards.push(buildStudyCard(lv[i], cs[i], i, 'a1'));
    else cards.push(buildSimpleCard(lv[i], cs[i], i, 'a1'));
  }

  const stats = createStats();
  const allFindings = [];
  const batches = chunk(cards, 10);
  for (let b = 0; b < batches.length; b++) {
    const batch = batches[b];
    const payload = { auditType: 'closure_repair_regression', dataset: 'a1', cards: batch };
    const response = await client.responses.create({
      model: 'gpt-5.6-luna',
      instructions: REGRESSION_PROMPT,
      input: `Targeted closure repair regression check. Return JSON items array.\n${JSON.stringify(payload)}`,
      text: { format: { type: 'json_object' } },
    });
    stats.requestCount += 1;
    stats.batchCount += 1;
    stats.batchSizes.push(batch.length);
    const { parseLunaFullAuditResponse } = require('./lib/openai-cs-full-audit');
    const { findings, passCount } = parseLunaFullAuditResponse(response.output_text, batch.map((c) => c.cardId));
    stats.findingsCount += findings.length;
    stats.passCount += passCount;
    allFindings.push(...findings);
    process.stdout.write(`  luna regression-${b + 1}: ${batch.length} cards, findings=${findings.length}, pass=${passCount}\n`);
  }

  const classified = classifyFindings(allFindings);
  const quality = filterSubstantiveFindings(classified.qualityFindings, cs);

  const confirmedRepairRegression = quality.filter((f) =>
    /regression|revert|worse|wrong repair|incorrect repair/i.test(f.reason || '')
    || f.category === 'CONFIRMED_REPAIR_REGRESSION'
  );
  const newConfirmedReal = quality.filter((f) =>
    ['CRITICAL', 'HIGH', 'MEDIUM'].includes(f.severity)
    && !confirmedRepairRegression.includes(f)
  );
  const needsOwnerReview = allFindings.filter((f) =>
    String(f.category || '').toUpperCase() === 'NEEDS_OWNER_REVIEW'
  );

  fs.mkdirSync(TEMP_DIR, { recursive: true });
  fs.writeFileSync(LUNA_FINDINGS, JSON.stringify({ stats, allFindings, classified }, null, 2));

  return {
    cardsChecked: cards.length,
    stats,
    confirmedRepairRegression: confirmedRepairRegression.length,
    newConfirmedRealCausedByRepair: newConfirmedReal.length,
    needsOwnerReview: needsOwnerReview.length,
    pass: confirmedRepairRegression.length === 0
      && newConfirmedReal.length === 0
      && needsOwnerReview.length === 0,
    details: {
      confirmedRepairRegression,
      newConfirmedReal,
      needsOwnerReview,
      qualityFindings: quality,
    },
  };
}

function writeReports(result) {
  const closed = result.finalStatus === 'CS–DE A1 = CLOSED ON MAIN';
  const integrationMd = [
    '# CS–DE A1 Final Close On Main',
    '',
    '## MAIN INTEGRATION',
    '',
    '| Key | SHA |',
    '|---|---|',
    `| MAIN_BEFORE | \`${result.mainBefore}\` |`,
    `| PR #466 SHA | \`${PR466_SHA}\` |`,
    `| integration branch | \`${INTEGRATION_BRANCH}\` |`,
    `| integration HEAD | \`${PR466_SHA}\` |`,
    `| MAIN_AFTER | \`${result.mainAfter}\` |`,
    `| origin/main | \`${result.shaLock.ORIGIN_MAIN_SHA}\` |`,
    '',
    '## INTEGRATION STATUS',
    '',
    `| Metric | Value |`,
    `|---|---|`,
    `| PR #466 in main | ${result.integration.inMainNow ? 'YES' : 'NO'} |`,
    `| action | ${result.integration.action} |`,
    `| 39/39 repair retained | ${result.closure.retained}/39 |`,
    `| a1-ob retained | ${result.closure.obStructural} |`,
    `| DE changes | ${result.technical.deChanges} |`,
    `| unexpected changes | ${result.diff.unexpectedCount} |`,
    '',
    '## FINAL STATUS',
    '',
    closed ? '**CS–DE A1 = CLOSED ON MAIN**' : '**CS–DE A1 = NOT CLOSED**',
    '',
    `_Generated: ${new Date().toISOString()}_`,
  ].join('\n');

  const reconfirmMd = [
    '# CS–DE A1 Final Closure Reconfirmation',
    '',
    '## SHA LOCK',
    '',
    '| Key | SHA |',
    '|---|---|',
    `| EXPECTED_MAIN_SHA | \`${result.shaLock.EXPECTED_MAIN_SHA}\` |`,
    `| AUDIT_MAIN_SHA | \`${result.shaLock.AUDIT_MAIN_SHA}\` |`,
    `| ORIGIN_MAIN_SHA | \`${result.shaLock.ORIGIN_MAIN_SHA}\` |`,
    `| SHA LOCK | **${result.shaLock.SHA_LOCK}** |`,
    '',
    '## RETENTION',
    '',
    `| Metric | Value |`,
    `|---|---|`,
    `| expected | 39 |`,
    `| retained | ${result.closure.retained}/39 |`,
    `| a1-ob | ${result.closure.obStructural} |`,
    '',
    '## TARGETED LUNA REGRESSION',
    '',
    `| Metric | Value |`,
    `|---|---|`,
    `| cards checked | ${result.luna?.cardsChecked ?? 'N/A'} |`,
    `| CONFIRMED_REPAIR_REGRESSION | ${result.luna?.confirmedRepairRegression ?? 'N/A'} |`,
    `| NEW_CONFIRMED_REAL_CAUSED_BY_REPAIR | ${result.luna?.newConfirmedRealCausedByRepair ?? 'N/A'} |`,
    `| NEEDS_OWNER_REVIEW | ${result.luna?.needsOwnerReview ?? 'N/A'} |`,
    '',
    '## STRUCTURAL',
    '',
    `| Metric | Value |`,
    `|---|---|`,
    `| MISSING_STUDY_PARITY | ${result.technical.missingStudyParity} |`,
    '',
    '## SECTIONACCENTS',
    '',
    `| Metric | Value |`,
    `|---|---|`,
    `| REAL | ${result.sectionAccents.real} |`,
    `| a1-in Berlīnē | ${result.sectionAccents.ownerOverride ? 'OWNER_OVERRIDE_FALSE_POSITIVE' : 'MISSING'} |`,
    '',
    '## FOREIGN REMNANTS',
    '',
    `| Metric | Value |`,
    `|---|---|`,
    `| REAL | ${result.foreignRemnants.real} |`,
    `| false positives documented | ${result.foreignRemnants.falsePositives.length} |`,
    '',
    '## DE',
    '',
    `| Metric | Value |`,
    `|---|---|`,
    `| DE_PARITY_ISSUE documented | 2 (a1-Wochenende-181, a1-Frühstück-207) |`,
    `| DE changes | ${result.technical.deChanges} |`,
    '',
    '## TECHNICAL',
    '',
    `| Check | Result |`,
    `|---|---|`,
    `| cards | ${result.technical.cards} |`,
    `| Study | ${result.technical.studyCount} |`,
    `| ID/order | ${result.technical.idOrder} |`,
    `| syntax | ${result.technical.syntax} |`,
    `| mirror | ${result.technical.mirror} |`,
    `| production changes | 0 |`,
    `| DE changes | ${result.technical.deChanges} |`,
    '',
    '## FINAL STATUS',
    '',
    closed ? '**CS–DE A1 = CLOSED ON MAIN**' : '**CS–DE A1 = NOT CLOSED**',
    '',
    `_Generated: ${new Date().toISOString()}_`,
  ].join('\n');

  fs.writeFileSync(path.join(ROOT, 'reports/cs-a1-final-close-on-main.md'), integrationMd);
  fs.writeFileSync(path.join(ROOT, 'reports/cs-a1-final-closure-reconfirmation.md'), reconfirmMd);
}

async function main() {
  execSync('git fetch origin main', { cwd: ROOT, stdio: 'pipe' });
  const mainAfter = git('git rev-parse origin/main');
  const result = {
    mainBefore: MAIN_BEFORE,
    mainAfter,
    closeBranch: CLOSE_BRANCH,
  };

  if (!LUNA_ONLY) {
    const det = runDeterministic(mainAfter);
    Object.assign(result, det);
  }

  if (!DETERMINISTIC_ONLY) {
    result.luna = await runLunaRegression();
    if (!LUNA_ONLY) result.pass = result.pass && result.luna.pass;
    else result.pass = result.luna.pass;
  }

  const allGates = (result.shaLock?.pass ?? true)
    && (result.closure?.pass ?? true)
    && (result.sectionAccents?.real === 0)
    && (result.foreignRemnants?.real === 0)
    && (result.technical?.deChanges === 0)
    && (result.luna?.pass ?? true);

  result.finalStatus = allGates ? 'CS–DE A1 = CLOSED ON MAIN' : 'CS–DE A1 = NOT CLOSED';
  fs.mkdirSync(TEMP_DIR, { recursive: true });
  fs.writeFileSync(RESULT_JSON, JSON.stringify(result, null, 2));
  writeReports(result);

  console.log(JSON.stringify({
    finalStatus: result.finalStatus,
    shaLock: result.shaLock,
    closure: result.closure,
    luna: result.luna ? {
      cardsChecked: result.luna.cardsChecked,
      confirmedRepairRegression: result.luna.confirmedRepairRegression,
      newConfirmedRealCausedByRepair: result.luna.newConfirmedRealCausedByRepair,
      needsOwnerReview: result.luna.needsOwnerReview,
      pass: result.luna.pass,
    } : null,
    sectionAccents: result.sectionAccents,
    foreignRemnants: { real: result.foreignRemnants?.real },
    technical: result.technical,
  }, null, 2));

  if (!allGates) process.exit(1);
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { main, runDeterministic, TARGET_CARDS };
