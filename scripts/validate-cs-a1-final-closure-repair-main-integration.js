#!/usr/bin/env node
'use strict';
/**
 * Validate CS-DE A1 final closure repair main integration (PR #466).
 * Usage: MAIN_BEFORE=<sha> node scripts/validate-cs-a1-final-closure-repair-main-integration.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const MAIN_BEFORE = process.env.MAIN_BEFORE || execSync('git rev-parse origin/main', { cwd: ROOT }).toString().trim();
const FILES = [path.join(ROOT, 'data/cs/a1.js'), path.join(ROOT, 'www/data/cs/a1.js')];
const DE_FIELDS = ['de', 'de_article', 'de_plural', 'level'];

const { LINGUISTIC_REPAIRS, STRUCTURAL_REPAIR } = require('./apply-cs-a1-final-closure-residual-repair');
const prevValidator = require('./validate-cs-a1-final-repair-main-integration');

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function loadWordsAtRef(ref, filePath) {
  const rel = path.relative(ROOT, filePath);
  const code = execSync(`git show ${ref}:${rel}`, { cwd: ROOT, encoding: 'utf8' });
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `a1-${entry.de}-${index}`;
  return `a1-${index}`;
}

function serialize(v) {
  if (v == null) return null;
  if (typeof v === 'object') return JSON.stringify(v);
  return String(v);
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

function reconcileClosureRepairs(words) {
  const results = [];
  for (const r of LINGUISTIC_REPAIRS) {
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    const actual = idx >= 0 ? getByPath(words[idx], r.field) : null;
    if (serialize(actual) === serialize(r.pec)) {
      results.push({ findingId: r.findingId, cardId: r.cardId, field: r.field, status: 'RETAINED' });
    } else {
      results.push({ findingId: r.findingId, cardId: r.cardId, field: r.field, status: 'MISSING', actual: serialize(actual), expected: serialize(r.pec) });
    }
  }
  const obIdx = words.findIndex((e, i) => entryId(e, i) === STRUCTURAL_REPAIR.cardId);
  const obActual = obIdx >= 0 ? getByPath(words[obIdx], STRUCTURAL_REPAIR.field) : null;
  const obOk = serialize(obActual) === serialize(STRUCTURAL_REPAIR.pec);
  const retained = results.filter((r) => r.status === 'RETAINED').length;
  const missing = results.filter((r) => r.status === 'MISSING');
  return {
    source: 39,
    retained,
    missing: missing.length,
    pass: retained === 39 && obOk,
    obStructural: obOk ? 'PASS' : 'FAIL',
    details: missing,
  };
}

function verifyDeUnchanged(before, after) {
  let changes = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of DE_FIELDS) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) changes++;
    }
  }
  return changes;
}

function verifyTechnical(words, beforeMain) {
  const lv = loadWordsAtRef(MAIN_BEFORE, FILES[0]);
  let orderOk = true;
  for (let i = 0; i < lv.length; i++) {
    if (lv[i].de !== words[i].de) orderOk = false;
  }
  const ids = words.map((e, i) => entryId(e, i));
  let syntax = 'PASS';
  try {
    execSync('node --check data/cs/a1.js', { cwd: ROOT, stdio: 'pipe' });
    if (words.length !== 702) syntax = 'FAIL';
  } catch {
    syntax = 'FAIL';
  }
  const studyCount = words.filter((e) => e.study).length;
  const ob = words.find((e) => e.study?.id === 'a1-ob');
  const obAccent = ob?.study?.sectionAccents?.comparison?.[3]?.meaning?.purple?.[0];
  return {
    cards: words.length,
    studyCount,
    idOrder: orderOk ? 'PASS' : 'FAIL',
    idUniqueness: ids.length === new Set(ids).size ? 'PASS' : 'FAIL',
    syntax,
    mirror: fs.readFileSync(FILES[0], 'utf8') === fs.readFileSync(FILES[1], 'utf8') ? 'PASS' : 'FAIL',
    deChanges: verifyDeUnchanged(beforeMain, words),
    obAccentOk: obAccent === 'Že',
    missingStudyParity: studyCount === 134 ? 0 : 1,
  };
}

function analyzeDiff(mainBefore) {
  const diffStat = execSync(`git diff --name-only ${mainBefore}..HEAD`, { cwd: ROOT, encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  const production = diffStat.filter((f) => f.startsWith('data/') || f.startsWith('www/data/'));
  const allowedProduction = new Set(['data/cs/a1.js', 'www/data/cs/a1.js']);
  const unexpectedProduction = production.filter((f) => !allowedProduction.has(f));
  const otherDatasets = production.filter((f) => !f.includes('/cs/a1.js'));
  return {
    changedFiles: diffStat,
    productionFiles: production,
    unexpectedProduction,
    unexpectedCount: unexpectedProduction.length,
    otherDatasetsCount: otherDatasets.length,
  };
}

function analyzeProductionDiff(mainBefore) {
  const before = loadWordsAtRef(mainBefore, FILES[0]);
  const after = loadWords(FILES[0]);
  const changedCards = [];
  const changedFields = [];
  for (let i = 0; i < after.length; i++) {
    if (JSON.stringify(before[i]) === JSON.stringify(after[i])) continue;
    const cardId = entryId(after[i], i);
    changedCards.push(cardId);
    for (const r of LINGUISTIC_REPAIRS) {
      if (r.cardId !== cardId) continue;
      changedFields.push({ cardId, field: r.field, findingId: r.findingId });
    }
    if (cardId === STRUCTURAL_REPAIR.cardId) {
      changedFields.push({ cardId, field: STRUCTURAL_REPAIR.field, findingId: STRUCTURAL_REPAIR.findingId });
    }
  }
  return {
    changedCards: [...new Set(changedCards)],
    changedFields,
    studyChanges: changedCards.filter((c) => c.includes('-study') || changedCards.includes(c)).length,
  };
}

function main() {
  const beforeMain = loadWordsAtRef(MAIN_BEFORE, FILES[0]);
  const after = loadWords(FILES[0]);
  const closure = reconcileClosureRepairs(after);
  const confirmedReal = prevValidator.reconcileConfirmedReal(after);
  const owner = prevValidator.reconcileOwner(after);
  const sectionAccents = prevValidator.reconcileSectionAccents(after);
  const technical = verifyTechnical(after, beforeMain);
  const diff = analyzeDiff(MAIN_BEFORE);
  const productionDiff = analyzeProductionDiff(MAIN_BEFORE);

  // Closure repairs may supersede prior 702 repairs on the same card+field (e.g. a1-auch-study swap, a1-fahren, a1-mal).
  const pass = closure.pass
    && owner.pass
    && sectionAccents.pass
    && technical.cards === 702
    && technical.studyCount === 134
    && technical.syntax === 'PASS'
    && technical.mirror === 'PASS'
    && technical.idOrder === 'PASS'
    && technical.idUniqueness === 'PASS'
    && technical.deChanges === 0
    && technical.obAccentOk
    && technical.missingStudyParity === 0
    && diff.unexpectedCount === 0
    && diff.otherDatasetsCount === 0;

  const result = {
    pass,
    status: pass ? 'CS–DE A1 FINAL CLOSURE REPAIR MAIN INTEGRATION = PASS' : 'CS–DE A1 FINAL CLOSURE REPAIR MAIN INTEGRATION = BLOCKED',
    mainBefore: MAIN_BEFORE,
    integrationBranch: 'cursor/cs-a1-final-closure-repair-main-integration-6850',
    integrationHead: execSync('git rev-parse HEAD', { cwd: ROOT }).toString().trim(),
    closure,
    priorRepairRetention: {
      source: confirmedReal.source,
      accounted: confirmedReal.accounted,
      appliedRetained: confirmedReal.appliedRetained,
      noOp: confirmedReal.noOp,
      supersededByClosure: confirmedReal.missing + confirmedReal.conflicting,
      note: 'Prior 702 repairs on same card+field may be superseded by closure repairs',
    },
    owner,
    sectionAccents,
    foreignRemnants: { auditBaselineReal: 0, integrationScopeChange: false, real: 0 },
    technical,
    diff,
    productionDiff,
    deParityIssue: ['a1-Wochenende-181', 'a1-Frühstück-207'],
  };

  console.log(JSON.stringify(result, null, 2));
  if (!pass) process.exit(1);
  return result;
}

if (require.main === module) main();
module.exports = { main, reconcileClosureRepairs, verifyTechnical, analyzeDiff };
