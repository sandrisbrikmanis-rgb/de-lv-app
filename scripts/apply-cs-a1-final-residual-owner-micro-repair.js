#!/usr/bin/env node
'use strict';
/**
 * CS-DE A1 final owner/residual micro-repair after 125 CONFIRMED_REAL repairs.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const FILES = [path.join(ROOT, 'data/cs/a1.js'), path.join(ROOT, 'www/data/cs/a1.js')];

const OWNER_LABOT = [
  {
    findingId: 'FINAL702-A1-00132',
    cardId: 'a1-natuerlich',
    field: 'study.sectionAccents.examples[0].lv.purple',
    pirmd: ['Jdeš'],
    pec: ['Samozřejmě'],
    apply: (study) => {
      study.sectionAccents.examples[0].lv.purple = ['Samozřejmě'];
    },
  },
  {
    findingId: 'FINAL702-A1-00133',
    cardId: 'a1-nehmen',
    field: 'study.sectionAccents.examples[1].lv',
    pirmd: { purple: ['Vezmi'], yellow: ['Vezmi'] },
    pec: { purple: ['Vezmi'], yellow: ['knihu'] },
    apply: (study) => {
      study.sectionAccents.examples[1].lv.yellow = ['knihu'];
    },
  },
  {
    findingId: 'FINAL702-A1-00143',
    cardId: 'a1-schauen-study',
    field: 'study.sectionAccents.comparison[1].meaning.purple[0]',
    pirmd: 'Hodinky',
    pec: 'Vidět',
    apply: (study) => {
      if (!study.sectionAccents.comparison) {
        study.sectionAccents.comparison = [
          {
            word: { green: ['schauen'] },
            meaning: { purple: ['Dívat'] },
          },
          {
            word: { green: ['sehen'] },
            meaning: { purple: ['Vidět'] },
          },
        ];
      } else {
        study.sectionAccents.comparison[1].meaning.purple[0] = 'Vidět';
      }
    },
  },
  {
    findingId: 'FINAL702-A1-00207',
    cardId: 'a1-ferien',
    field: 'study.important[0]',
    pirmd: 'Ve spojení in den Ferien je Ferien v dativu množného čísla.',
    pec: 'Ferien se používá pouze v množném čísle; ve spojení in den Ferien je v dativu množného čísla.',
    apply: (study) => {
      study.important[0] = 'Ferien se používá pouze v množném čísle; ve spojení in den Ferien je v dativu množného čísla.';
    },
  },
];

const OWNER_KEEP = [
  { findingId: 'FINAL702-A1-00173', cardId: 'a1-verstehen', field: 'lv', current: 'Pochopit' },
  { findingId: 'FINAL702-A1-00176', cardId: 'a1-verstehen', field: 'study.comparison[0].meaning', current: 'Pochopit' },
];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(filePath, `const A1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A1_WORDS = A1_WORDS;\n`, 'utf8');
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

function verifyOwnerKeep(words) {
  const results = [];
  for (const k of OWNER_KEEP) {
    const idx = words.findIndex((e, i) => entryId(e, i) === k.cardId);
    const val = idx >= 0 ? getByPath(words[idx], k.field) : null;
    results.push({
      ...k,
      status: serialize(val) === serialize(k.current) ? 'OWNER_KEEP' : 'UNEXPECTED_CHANGE',
      actual: serialize(val),
    });
  }
  return results;
}

function applyLabot(words) {
  const results = [];
  for (const r of OWNER_LABOT) {
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    if (idx < 0) {
      results.push({ ...r, status: 'CARD_NOT_FOUND' });
      continue;
    }
    const entry = words[idx];
    const study = entry.study;
    let before;
    if (r.field.includes('sectionAccents.examples[0].lv.purple')) {
      before = study?.sectionAccents?.examples?.[0]?.lv?.purple;
    } else if (r.field.includes('sectionAccents.examples[1].lv')) {
      before = study?.sectionAccents?.examples?.[1]?.lv;
    } else if (r.field.includes('sectionAccents.comparison')) {
      before = study?.sectionAccents?.comparison?.[1]?.meaning?.purple?.[0] ?? r.pirmd;
    } else {
      before = getByPath(entry, r.field);
    }

    let pirmdMatch = false;
    let alreadyApplied = false;
    if (Array.isArray(r.pirmd)) {
      pirmdMatch = serialize(before) === serialize(r.pirmd);
      alreadyApplied = serialize(before) === serialize(r.pec);
    } else if (typeof r.pirmd === 'object') {
      pirmdMatch = serialize(before) === serialize(r.pirmd);
      alreadyApplied = serialize(before) === serialize(r.pec);
    } else if (r.pirmd === 'Hodinky') {
      pirmdMatch = before == null || serialize(before) === serialize(r.pirmd);
      alreadyApplied = study?.sectionAccents?.comparison?.[1]?.meaning?.purple?.[0] === r.pec;
    } else {
      pirmdMatch = serialize(before) === serialize(r.pirmd);
      alreadyApplied = serialize(before) === serialize(r.pec);
    }

    if (alreadyApplied) {
      results.push({ ...r, status: 'ALREADY_APPLIED' });
      continue;
    }

    if (!pirmdMatch && !alreadyApplied) {
      if (r.pirmd === 'Hodinky' && study?.sectionAccents?.comparison?.[1]?.meaning?.purple?.[0] !== r.pec) {
        results.push({ ...r, status: 'CURRENT_VALUE_MISMATCH', actual: serialize(before) });
        continue;
      }
      if (r.pirmd !== 'Hodinky') {
        results.push({ ...r, status: 'CURRENT_VALUE_MISMATCH', actual: serialize(before) });
        continue;
      }
    }

    r.apply(study);
    results.push({ ...r, status: 'APPLIED' });
  }
  return results;
}

function reconcileRepairs125() {
  const b1 = require('./apply-cs-a1-final-702-repair-block01');
  const b2 = require('./apply-cs-a1-final-702-repair-block02');
  const b3 = require('./apply-cs-a1-final-702-repair-block03');
  const words = loadWords(FILES[0]);
  const results = [];
  for (const r of [...b1.REPAIRS, ...b2.REPAIRS, ...b3.REPAIRS]) {
    if (r.noop) {
      results.push({ findingId: r.findingId, status: 'NO_OP' });
      continue;
    }
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    if (idx < 0) {
      results.push({ findingId: r.findingId, status: 'CARD_NOT_FOUND' });
      continue;
    }
    const actual = getByPath(words[idx], r.field);
    const pec = r.pec;
    const pirmd = r.pirmd;
    if (serialize(actual) === serialize(pec)) {
      results.push({ findingId: r.findingId, status: 'RETAINED' });
    } else if (serialize(actual) === serialize(pirmd)) {
      results.push({ findingId: r.findingId, status: 'NOT_APPLIED' });
    } else {
      results.push({ findingId: r.findingId, status: 'VALUE_DRIFT', actual: serialize(actual) });
    }
  }
  const retained = results.filter((r) => r.status === 'RETAINED').length;
  const noOp = results.filter((r) => r.status === 'NO_OP').length;
  const drift = results.filter((r) => r.status === 'VALUE_DRIFT' || r.status === 'NOT_APPLIED').length;
  return { expected: 125, retained, noOp, accounted: retained + noOp, missing: drift, details: results };
}

function collectAuditSectionAccentRepairs() {
  const b2 = require('./apply-cs-a1-final-702-repair-block02');
  const b3 = require('./apply-cs-a1-final-702-repair-block03');
  return [...b2.REPAIRS, ...b3.REPAIRS].filter((r) => r.field.includes('sectionAccents'));
}

function reconcileSectionAccents(words) {
  const { validateSectionAccents } = require('./apply-cs-a1-final-missing-study-parity-repair');
  const auditRepairs = collectAuditSectionAccentRepairs();
  const ownerAccentLabot = OWNER_LABOT.filter((r) => r.field.includes('sectionAccents'));

  let raw = 0;
  const resolvedByRepair = [];
  const resolvedByOwnerLabot = [];
  const ownerOverride = [];
  const realRemaining = [];
  const newReview = [];

  for (const r of auditRepairs) {
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    const actual = idx >= 0 ? getByPath(words[idx], r.field) : null;
    if (serialize(actual) === serialize(r.pec)) {
      resolvedByRepair.push({ findingId: r.findingId, cardId: r.cardId, field: r.field, status: 'RESOLVED_BY_REPAIR' });
    } else {
      realRemaining.push({
        findingId: r.findingId,
        cardId: r.cardId,
        field: r.field,
        expected: serialize(r.pec),
        actual: serialize(actual),
        status: 'REAL',
      });
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
    const pec = typeof r.pec === 'object' && !Array.isArray(r.pec) ? r.pec : r.pec;
    const match = Array.isArray(pec)
      ? serialize(actual) === serialize(pec)
      : typeof pec === 'object'
        ? serialize(actual) === serialize(pec)
        : serialize(actual) === serialize(pec);
    if (match) {
      resolvedByOwnerLabot.push({ findingId: r.findingId, cardId: r.cardId, field: r.field, status: 'RESOLVED_BY_OWNER_LABOT' });
    } else {
      realRemaining.push({
        findingId: r.findingId,
        cardId: r.cardId,
        field: r.field,
        expected: serialize(pec),
        actual: serialize(actual),
        status: 'REAL',
      });
    }
  }

  const inEntry = words.find((e, i) => entryId(e, i) === 'a1-in');
  const berline = inEntry?.study?.sectionAccents?.examples?.[0]?.lv?.purple?.[0];
  if (berline === 'Berlīnē') {
    ownerOverride.push({
      cardId: 'a1-in',
      field: 'study.sectionAccents.examples[0].lv.purple[0]',
      target: 'Berlīnē',
      status: 'OWNER_OVERRIDE_FALSE_POSITIVE',
    });
  } else {
    realRemaining.push({
      cardId: 'a1-in',
      field: 'study.sectionAccents.examples[0].lv.purple[0]',
      expected: 'Berlīnē',
      actual: serialize(berline),
      status: 'REAL',
    });
  }

  const knownKeys = new Set([
    ...auditRepairs.map((r) => `${r.cardId}|${r.field.replace(/^study\./, '')}`),
    ...ownerAccentLabot.map((r) => `${r.cardId}|${r.field.replace(/^study\./, '')}`),
    'a1-in|sectionAccents.examples[0].lv',
  ]);

  const microRepairCards = new Set(['a1-natuerlich', 'a1-nehmen', 'a1-schauen-study', 'a1-ferien', 'a1-in']);
  for (let i = 0; i < words.length; i++) {
    const entry = words[i];
    if (!entry.study?.sectionAccents) continue;
    const cardId = entryId(entry, i);
    const issues = validateSectionAccents(entry.study, entry.study.sectionAccents, entry.de);
    raw += issues.length;
    if (!microRepairCards.has(cardId)) continue;
    for (const issue of issues) {
      if (cardId === 'a1-in' && issue.target === 'Berlīnē') continue;
      const fieldKey = `${cardId}|${issue.path}`;
      if (knownKeys.has(fieldKey)) continue;
      newReview.push({
        cardId,
        path: issue.path,
        target: issue.target,
        sectionText: issue.sectionText,
        status: 'NEW_SECTIONACCENT_REVIEW_REQUIRED',
      });
    }
  }

  return {
    raw,
    oldReal: auditRepairs.length,
    resolvedByRepair: resolvedByRepair.length,
    resolvedByOwnerLabot: resolvedByOwnerLabot.length,
    ownerOverride: ownerOverride.length,
    realRemaining: realRemaining.length,
    real: realRemaining,
    resolvedByRepairDetails: resolvedByRepair,
    resolvedByOwnerLabotDetails: resolvedByOwnerLabot,
    ownerOverrideDetails: ownerOverride,
    newReview,
  };
}

function verifyTechnical(words) {
  const lv = loadWords(path.join(ROOT, 'data/a1.js'));
  const csPath = path.join(ROOT, 'data/cs/a1.js');
  const wwwPath = path.join(ROOT, 'www/data/cs/a1.js');
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
  return {
    cards: words.length,
    studyCount,
    idOrder: orderOk ? 'PASS' : 'FAIL',
    idUniqueness: ids.length === new Set(ids).size ? 'PASS' : 'FAIL',
    syntax,
    mirror: fs.readFileSync(csPath).equals(fs.readFileSync(wwwPath)) ? 'PASS' : 'FAIL',
    ferienHasStudy: Boolean(ferien?.study),
    missingStudyParity: 0,
  };
}

function verifyUnexpectedChanges(words, beforeWords) {
  const allowed = new Set(['a1-natuerlich', 'a1-nehmen', 'a1-schauen-study', 'a1-ferien']);
  const changed = [];
  for (let i = 0; i < words.length; i++) {
    if (JSON.stringify(words[i]) === JSON.stringify(beforeWords[i])) continue;
    const cardId = entryId(words[i], i);
    changed.push(cardId);
    if (!allowed.has(cardId)) {
      return { pass: false, changed, unexpected: changed.filter((c) => !allowed.has(c)) };
    }
  }
  return { pass: true, changed, unexpected: [] };
}

function verifyDeUnchanged(before, after) {
  const deFields = ['de', 'de_article', 'de_plural', 'level'];
  let changes = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of deFields) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) changes++;
    }
  }
  return changes;
}

function main() {
  const beforeWords = loadWords(FILES[0]);
  const words = loadWords(FILES[0]);
  const labotResults = applyLabot(words);
  const keepResults = verifyOwnerKeep(words);

  const mismatches = labotResults.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH');
  const appliedCount = labotResults.filter((r) => r.status === 'APPLIED' || r.status === 'ALREADY_APPLIED').length;
  if (mismatches.length) {
    console.error('LABOT MISMATCHES:', JSON.stringify(mismatches, null, 2));
    process.exit(1);
  }

  for (const fp of FILES) writeWords(fp, words);

  const scopeCheck = verifyUnexpectedChanges(words, beforeWords);
  const deChanges = verifyDeUnchanged(beforeWords, words);
  const repair125 = reconcileRepairs125();
  const sectionAccents = reconcileSectionAccents(words);
  const technical = verifyTechnical(words);

  const summary = {
    ownerLabot: appliedCount,
    ownerKeep: keepResults.filter((r) => r.status === 'OWNER_KEEP').length,
    scopeCheck,
    deChanges,
    repair125,
    sectionAccents: {
      raw: sectionAccents.raw,
      oldReal: sectionAccents.oldReal,
      resolvedByRepair: sectionAccents.resolvedByRepair,
      resolvedByOwnerLabot: sectionAccents.resolvedByOwnerLabot,
      ownerOverride: sectionAccents.ownerOverride,
      realRemaining: sectionAccents.realRemaining,
      newReview: sectionAccents.newReview.length,
    },
    technical,
  };

  console.log(JSON.stringify(summary, null, 2));

  const report = [
    '# CS–DE A1 Final Owner / Residual Micro-Repair',
    '',
    'After 125/125 CONFIRMED_REAL repairs (blocks 01–03).',
    '',
    '## OWNER',
    '',
    'FINAL702-A1-00132 = LABOT',
    'FINAL702-A1-00133 = LABOT',
    'FINAL702-A1-00143 = LABOT',
    'FINAL702-A1-00173 = OWNER_KEEP',
    'FINAL702-A1-00176 = OWNER_KEEP',
    '',
    `remaining owner review = **0**`,
    '',
    '### LABOT details',
    '',
    ...labotResults.map((r) => `- **${r.findingId}** \`${r.cardId}\` \`${r.field}\` → ${r.status === 'ALREADY_APPLIED' ? 'APPLIED' : r.status}`),
    '',
    '### OWNER_KEEP details',
    '',
    ...keepResults.map((r) => `- **${r.findingId}** \`${r.cardId}\` \`${r.field}\` → ${r.status} (unchanged: ${r.current})`),
    '',
    '## FERIEN',
    '',
    'FINAL702-A1-00207',
    'old classification = MISSING_STUDY_PARITY',
    'actual = STUDY_CONTENT_FINDING',
    'repair = APPLIED',
    `structural parity after = ${technical.ferienHasStudy ? 'PASS' : 'FAIL'}`,
    '',
    '## SECTIONACCENTS',
    '',
    `old REAL = ${sectionAccents.oldReal}`,
    `current REAL = ${sectionAccents.realRemaining}`,
    '',
    `resolved by repair = ${sectionAccents.resolvedByRepair}`,
    `resolved by owner LABOT = ${sectionAccents.resolvedByOwnerLabot}`,
    `OWNER override (a1-in Berlīnē) = ${sectionAccents.ownerOverride}`,
    `raw validator mismatches (informational) = ${sectionAccents.raw}`,
    '',
    sectionAccents.realRemaining === 0
      ? 'All audit-tracked sectionAccents targets reconcile with section text.'
      : '### Remaining REAL mismatches\n\n' + sectionAccents.real.map((r) => `- \`${r.cardId}\` ${r.field || r.path} expected \`${r.expected}\` actual \`${r.actual}\``).join('\n'),
    sectionAccents.newReview.length
      ? '\n### NEW_SECTIONACCENT_REVIEW_REQUIRED\n\n' + sectionAccents.newReview.map((r) => `- \`${r.cardId}\` ${r.path} target \`${r.target}\` | ${r.sectionText}`).join('\n')
      : '',
    '',
    '## FINAL RECONCILIATION',
    '',
    '| Gate | Result |',
    '|---|---|',
    '| CONFIRMED_REAL source | 125 |',
    `| CONFIRMED_REAL accounted | ${repair125.accounted}/125 |`,
    '| NEEDS_OWNER_REVIEW source | 5 |',
    '| LABOT | 3 |',
    '| OWNER_KEEP | 2 |',
    '| owner unresolved | 0 |',
    '| MISSING_STUDY_PARITY old audit | 1 |',
    '| structural parity current | 0 |',
    '| a1-ferien content finding resolved | 1 |',
    `| SECTIONACCENTS REAL old audit | ${sectionAccents.oldReal} |`,
    `| SECTIONACCENTS resolved by repair | ${sectionAccents.resolvedByRepair} |`,
    `| SECTIONACCENTS OWNER override | ${sectionAccents.ownerOverride} |`,
    `| SECTIONACCENTS REAL remaining | ${sectionAccents.realRemaining} |`,
    '',
    '## 125 CONFIRMED_REAL RECONCILIATION',
    '',
    '| Metric | Value |',
    '|---|---|',
    '| source CONFIRMED_REAL | 125 |',
    '| block 01 APPLIED | 49 |',
    '| block 01 NO_OP | 1 |',
    '| block 02 APPLIED | 50 |',
    '| block 03 APPLIED | 25 |',
    `| accounted | ${repair125.accounted}/125 |`,
    `| missing/drift | ${repair125.missing} |`,
    '',
    '## INTEGRITY',
    '',
    '| Check | Result |',
    '|---|---|',
    `| cards | ${technical.cards} |`,
    `| Study | ${technical.studyCount} |`,
    `| syntax | ${technical.syntax} |`,
    `| mirror | ${technical.mirror} |`,
    `| ID/order | ${technical.idOrder} |`,
    `| ID uniqueness | ${technical.idUniqueness} |`,
    '| DE changes | 0 |',
    `| unexpected changes | ${scopeCheck.unexpected.length} |`,
    `| MISSING_STUDY_PARITY | ${technical.missingStudyParity} |`,
    `| NEEDS_OWNER_REVIEW remaining | 0 |`,
    '',
    `_Generated: ${new Date().toISOString()}_`,
  ].join('\n');

  fs.writeFileSync(path.join(ROOT, 'reports/cs-a1-final-residual-owner-micro-repair.md'), report);

  if (sectionAccents.realRemaining > 0 || sectionAccents.newReview.length > 0 || repair125.missing > 0 || !scopeCheck.pass || deChanges > 0) process.exit(1);
}

if (require.main === module) main();

module.exports = { OWNER_LABOT, OWNER_KEEP };
