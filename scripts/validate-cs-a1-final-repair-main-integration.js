#!/usr/bin/env node
'use strict';
/**
 * Validate CS-DE A1 final repair main integration (702 blocks 01-03 + owner micro-repair).
 * Usage: MAIN_BEFORE=<sha> node scripts/validate-cs-a1-final-repair-main-integration.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const MAIN_BEFORE = process.env.MAIN_BEFORE || execSync('git rev-parse origin/main', { cwd: ROOT }).toString().trim();
const FILES = [path.join(ROOT, 'data/cs/a1.js'), path.join(ROOT, 'www/data/cs/a1.js')];
const DE_FIELDS = ['de', 'de_article', 'de_plural', 'level'];

const OWNER_EXPECTED = [
  { findingId: 'FINAL702-A1-00132', cardId: 'a1-natuerlich', field: 'study.sectionAccents.examples[0].lv.purple', decision: 'LABOT', pec: ['Samozřejmě'] },
  { findingId: 'FINAL702-A1-00133', cardId: 'a1-nehmen', field: 'study.sectionAccents.examples[1].lv', decision: 'LABOT', pec: { purple: ['Vezmi'], yellow: ['knihu'] } },
  { findingId: 'FINAL702-A1-00143', cardId: 'a1-schauen-study', field: 'study.sectionAccents.comparison[1].meaning.purple[0]', decision: 'LABOT', pec: 'Vidět' },
  { findingId: 'FINAL702-A1-00173', cardId: 'a1-verstehen', field: 'lv', decision: 'OWNER_KEEP', pec: 'Pochopit' },
  { findingId: 'FINAL702-A1-00176', cardId: 'a1-verstehen', field: 'study.comparison[0].meaning', decision: 'OWNER_KEEP', pec: 'Pochopit' },
];

const FERIEN_IMPORTANT = 'Ferien se používá pouze v množném čísle; ve spojení in den Ferien je v dativu množného čísla.';

function loadWordsFromString(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function loadWords(filePath) {
  return loadWordsFromString(fs.readFileSync(filePath, 'utf8'));
}

function loadWordsAtRef(ref, filePath) {
  const rel = path.relative(ROOT, filePath);
  const code = execSync(`git show ${ref}:${rel}`, { cwd: ROOT, encoding: 'utf8' });
  return loadWordsFromString(code);
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

function reconcileConfirmedReal(words) {
  const b1 = require('./apply-cs-a1-final-702-repair-block01');
  const b2 = require('./apply-cs-a1-final-702-repair-block02');
  const b3 = require('./apply-cs-a1-final-702-repair-block03');
  const results = [];
  for (const r of [...b1.REPAIRS, ...b2.REPAIRS, ...b3.REPAIRS]) {
    if (r.noop) {
      results.push({ findingId: r.findingId, status: 'NO_OP' });
      continue;
    }
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    const actual = idx >= 0 ? getByPath(words[idx], r.field) : null;
    if (serialize(actual) === serialize(r.pec)) {
      results.push({ findingId: r.findingId, status: 'APPLIED_RETAINED' });
    } else if (serialize(actual) === serialize(r.pirmd)) {
      results.push({ findingId: r.findingId, status: 'NOT_APPLIED', actual: serialize(actual) });
    } else {
      results.push({ findingId: r.findingId, status: 'CONFLICTING', actual: serialize(actual), expected: serialize(r.pec) });
    }
  }
  const applied = results.filter((r) => r.status === 'APPLIED_RETAINED').length;
  const noOp = results.filter((r) => r.status === 'NO_OP').length;
  const missing = results.filter((r) => r.status === 'NOT_APPLIED').length;
  const conflicting = results.filter((r) => r.status === 'CONFLICTING').length;
  return {
    source: 125,
    accounted: applied + noOp,
    appliedRetained: applied,
    noOp,
    missing,
    conflicting,
    pass: missing === 0 && conflicting === 0 && applied + noOp === 125,
    details: results,
  };
}

function reconcileOwner(words) {
  const results = [];
  for (const o of OWNER_EXPECTED) {
    const idx = words.findIndex((e, i) => entryId(e, i) === o.cardId);
    const actual = idx >= 0 ? getByPath(words[idx], o.field) : null;
    const match = serialize(actual) === serialize(o.pec);
    results.push({ ...o, actual: serialize(actual), status: match ? o.decision : 'MISMATCH' });
  }
  const labot = results.filter((r) => r.decision === 'LABOT' && r.status === 'LABOT').length;
  const keep = results.filter((r) => r.decision === 'OWNER_KEEP' && r.status === 'OWNER_KEEP').length;
  const remaining = results.filter((r) => r.status === 'MISMATCH').length;
  return { source: 5, labot, ownerKeep: keep, remaining, pass: remaining === 0, details: results };
}

function reconcileSectionAccents(words) {
  const micro = require('./apply-cs-a1-final-residual-owner-micro-repair');
  const b2 = require('./apply-cs-a1-final-702-repair-block02');
  const b3 = require('./apply-cs-a1-final-702-repair-block03');
  const auditRepairs = [...b2.REPAIRS, ...b3.REPAIRS].filter((r) => r.field.includes('sectionAccents'));
  const ownerAccentLabot = micro.OWNER_LABOT.filter((r) => r.field.includes('sectionAccents'));

  const resolvedByRepair = [];
  const realRemaining = [];

  for (const r of auditRepairs) {
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    const actual = idx >= 0 ? getByPath(words[idx], r.field) : null;
    if (serialize(actual) === serialize(r.pec)) {
      resolvedByRepair.push(r.findingId);
    } else {
      realRemaining.push({ findingId: r.findingId, cardId: r.cardId, field: r.field, actual: serialize(actual), expected: serialize(r.pec) });
    }
  }

  for (const r of ownerAccentLabot) {
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    const entry = idx >= 0 ? words[idx] : null;
    let actual;
    if (r.field.includes('sectionAccents.examples[0].lv.purple')) {
      actual = entry?.study?.sectionAccents?.examples?.[0]?.lv?.purple;
    } else if (r.field.includes('sectionAccents.examples[1].lv')) {
      actual = entry?.study?.sectionAccents?.examples?.[1]?.lv;
    } else if (r.field.includes('sectionAccents.comparison')) {
      actual = entry?.study?.sectionAccents?.comparison?.[1]?.meaning?.purple?.[0];
    }
    if (serialize(actual) !== serialize(r.pec)) {
      realRemaining.push({ findingId: r.findingId, cardId: r.cardId, field: r.field, actual: serialize(actual), expected: serialize(r.pec) });
    }
  }

  const inEntry = words.find((e, i) => entryId(e, i) === 'a1-in');
  const berline = inEntry?.study?.sectionAccents?.examples?.[0]?.lv?.purple?.[0];
  const ownerOverride = berline === 'Berlīnē';

  return {
    oldReal: auditRepairs.length,
    resolvedByRepair: resolvedByRepair.length,
    realRemaining: realRemaining.length,
    ownerOverride,
    pass: realRemaining.length === 0 && ownerOverride,
    details: realRemaining,
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
  const lv = loadWordsAtRef(MAIN_BEFORE, path.join(ROOT, 'data/a1.js'));
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
  const ferien = words.find((e, i) => entryId(e, i) === 'a1-ferien');
  const deChanges = verifyDeUnchanged(beforeMain, words);
  return {
    cards: words.length,
    studyCount,
    idOrder: orderOk ? 'PASS' : 'FAIL',
    idUniqueness: ids.length === new Set(ids).size ? 'PASS' : 'FAIL',
    syntax,
    mirror: fs.readFileSync(FILES[0], 'utf8') === fs.readFileSync(FILES[1], 'utf8') ? 'PASS' : 'FAIL',
    ferienHasStudy: Boolean(ferien?.study),
    ferienImportant: ferien?.study?.important?.[0] === FERIEN_IMPORTANT,
    deChanges,
    missingStudyParity: ferien?.study ? 0 : 1,
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

function main() {
  const beforeMain = loadWordsAtRef(MAIN_BEFORE, FILES[0]);
  const after = loadWords(FILES[0]);
  const confirmedReal = reconcileConfirmedReal(after);
  const owner = reconcileOwner(after);
  const sectionAccents = reconcileSectionAccents(after);
  const technical = verifyTechnical(after, beforeMain);
  const diff = analyzeDiff(MAIN_BEFORE);

  const pass = confirmedReal.pass
    && owner.pass
    && sectionAccents.pass
    && technical.cards === 702
    && technical.studyCount === 134
    && technical.syntax === 'PASS'
    && technical.mirror === 'PASS'
    && technical.idOrder === 'PASS'
    && technical.idUniqueness === 'PASS'
    && technical.deChanges === 0
    && technical.ferienHasStudy
    && technical.ferienImportant
    && technical.missingStudyParity === 0
    && diff.unexpectedCount === 0
    && diff.otherDatasetsCount === 0;

  const result = {
    pass,
    status: pass ? 'CS–DE A1 FINAL REPAIR MAIN INTEGRATION = PASS' : 'CS–DE A1 FINAL REPAIR MAIN INTEGRATION = BLOCKED',
    mainBefore: MAIN_BEFORE,
    integrationHead: execSync('git rev-parse HEAD', { cwd: ROOT }).toString().trim(),
    confirmedReal,
    owner,
    sectionAccents,
    technical,
    diff,
  };

  console.log(JSON.stringify(result, null, 2));
  if (!pass) process.exit(1);
  return result;
}

if (require.main === module) main();
module.exports = { main, reconcileConfirmedReal, reconcileOwner, reconcileSectionAccents, verifyTechnical };
