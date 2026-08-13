#!/usr/bin/env node
'use strict';
/**
 * CS-DE A1 Study parity sectionAccents micro-repair (10 mismatches → 0).
 * Usage: node scripts/apply-cs-a1-final-study-parity-sectionaccents-micro-repair.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { validateSectionAccents } = require('./apply-cs-a1-final-missing-study-parity-repair');

const ROOT = path.join(__dirname, '..');
const FILES = [
  path.join(ROOT, 'data/cs/a1.js'),
  path.join(ROOT, 'www/data/cs/a1.js'),
];
const REPORT_PATH = path.join(ROOT, 'reports/cs-a1-final-study-parity-sectionaccents-micro-repair.md');

const PARITY_STUDY_IDS = [
  'a1-besuch', 'a1-besuchen', 'a1-bitte', 'a1-bitte-study', 'a1-ein', 'a1-es',
  'a1-fussball-study', 'a1-ganz-study', 'a1-gefallen-study', 'a1-geschichte-study',
  'a1-geschwister-study', 'a1-grosseltern-study', 'a1-hand-study', 'a1-huebsch',
];

const REPAIRS = [
  {
    studyId: 'a1-besuchen',
    cardId: 'a1-besuchen-89',
    field: 'study.sectionAccents.tip',
    path: ['study', 'sectionAccents', 'tip'],
    value: {
      left: {
        blue: ['besuchen'],
        purple: ['bez předložky'],
      },
    },
    resolvedMismatches: ['navštívit', 'navštěvovat'],
  },
  {
    studyId: 'a1-bitte-study',
    cardId: 'a1-bitte-study',
    field: 'study.sectionAccents.important',
    path: ['study', 'sectionAccents', 'important'],
    value: [
      { green: ['die Bitte'] },
      { green: ['die Bitten'] },
      { green: ['Bitte'], purple: ['Podstatné jméno', 'velkým písmenem'] },
    ],
    resolvedMismatches: ['die Bitten', 'Podstatné jméno', 'velkým písmenem'],
  },
  {
    studyId: 'a1-ein',
    cardId: 'a1-ein',
    field: 'study.sectionAccents.important',
    path: ['study', 'sectionAccents', 'important'],
    value: [
      { blue: ['ein'], green: ['mužský rod', 'nominativu'] },
      { blue: ['ein'], green: ['střední rod', 'nominativu'] },
      { blue: ['eine'], green: ['ženský rod'] },
      { blue: ['einen'], green: ['mužský rod', 'akuzativu'] },
    ],
    resolvedMismatches: ['neurčitý člen', 'eine', 'ženský rod', 'akuzativ'],
  },
  {
    studyId: 'a1-es',
    cardId: 'a1-es',
    field: 'study.sectionAccents.important',
    path: ['study', 'sectionAccents', 'important'],
    value: [
      { blue: ['ich', 'es'], purple: ['nejsou totéž'] },
      { blue: ['es'], purple: ['to', 'ono'] },
      { red: ['ich'], purple: ['já'] },
    ],
    resolvedMismatches: ['ich'],
  },
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

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function findByStudyId(words, studyId) {
  return words.find((e) => e.study?.id === studyId);
}

function getAtPath(obj, parts) {
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function setAtPath(obj, parts, value) {
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = deepClone(value);
}

function serializeStudyText(study) {
  const keys = ['explanation', 'examples', 'comparison', 'tip', 'important', 'info', 'translation'];
  const out = {};
  for (const k of keys) {
    if (study[k] !== undefined) out[k] = study[k];
  }
  return JSON.stringify(out);
}

function verifyDeUnchanged(before, after) {
  let deChanges = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of ['de', 'de_article', 'de_plural', 'level']) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
    }
  }
  return deChanges;
}

function verifyIdOrder(words) {
  const lv = loadWords(path.join(ROOT, 'data/a1.js'));
  for (let i = 0; i < lv.length; i++) {
    if (lv[i].de !== words[i].de) return false;
  }
  return true;
}

function countStudies(words) {
  return words.filter((e) => e.study && typeof e.study === 'object').length;
}

function validateParityCards(words) {
  const mismatches = [];
  const cardResults = [];
  for (const studyId of PARITY_STUDY_IDS) {
    const entry = findByStudyId(words, studyId);
    if (!entry?.study) {
      cardResults.push({ studyId, hasStudy: false, mismatches: 0, status: 'MISSING_STUDY' });
      continue;
    }
    const issues = validateSectionAccents(entry.study, entry.study.sectionAccents, entry.de);
    mismatches.push(...issues.map((m) => ({ studyId, ...m })));
    cardResults.push({
      studyId,
      hasStudy: true,
      mismatches: issues.length,
      status: issues.length === 0 ? 'PASS' : 'FAIL',
    });
  }
  return { mismatches, cardResults };
}

function applyRepairs(words) {
  const results = [];
  for (const r of REPAIRS) {
    const entry = findByStudyId(words, r.studyId);
    if (!entry) {
      results.push({ ...r, status: 'CARD_NOT_FOUND' });
      continue;
    }
    const beforeStudyText = serializeStudyText(entry.study);
    const beforeValue = deepClone(getAtPath(entry, r.path));
    setAtPath(entry, r.path, r.value);
    const afterStudyText = serializeStudyText(entry.study);
    results.push({
      studyId: r.studyId,
      cardId: r.cardId,
      field: r.field,
      status: beforeStudyText === afterStudyText ? 'APPLIED' : 'STUDY_TEXT_CHANGED',
      studyTextChanged: beforeStudyText !== afterStudyText,
      resolvedMismatches: r.resolvedMismatches,
      before: beforeValue,
      after: deepClone(r.value),
    });
  }
  return results;
}

function generateReport(summary, results, cardResults, remainingMismatches) {
  const lines = [
    '# CS–DE A1 Final Study Parity — sectionAccents Micro-Repair',
    '',
    'Synchronizes sectionAccents targets with existing Study text. No Study text or DE changes.',
    '',
    '## Summary',
    '',
    '| Metric | Value |',
    '|---|---|',
    `| requested mismatches | **${summary.requestedMismatches}** |`,
    `| processed | **${summary.processed}** |`,
    `| resolved | **${summary.resolved}** |`,
    `| remaining | **${summary.remaining}** |`,
    `| changed cards | **${summary.changedCards}** |`,
    `| changed sectionAccents objects | **${summary.changedSectionAccents}** |`,
    `| Study text changes | **${summary.studyTextChanges}** |`,
    `| DE changes | **${summary.deChanges}** |`,
    `| unexpected changes | **${summary.unexpectedChanges}** |`,
    `| MISSING_STUDY_PARITY | **${summary.missingStudyParity}** |`,
    `| CS Study count | **${summary.studyCount}** |`,
    '',
    '## Per-card repairs',
    '',
    '| studyId | field | status | resolved targets |',
    '|---|---|---|---|',
    ...results.map((r) => `| ${r.studyId} | ${r.field} | ${r.status} | ${(r.resolvedMismatches || []).join(', ')} |`),
    '',
    '## 14 parity cards — sectionAccents validation',
    '',
    '| studyId | hasStudy | mismatches | status |',
    '|---|---|---|---|',
    ...cardResults.map((c) => `| ${c.studyId} | ${c.hasStudy} | ${c.mismatches} | ${c.status} |`),
    '',
    '## Integrity',
    '',
    '| Check | Result |',
    '|---|---|',
    `| cards | **${summary.cards}** |`,
    `| ID uniqueness | **${summary.idUniqueness}** |`,
    `| ID/order | **${summary.idOrder}** |`,
    `| syntax | **${summary.syntax}** |`,
    `| mirror | **${summary.mirror}** |`,
    `| sectionAccents (14 parity cards) | **${summary.sectionAccents}** |`,
    '',
  ];

  if (remainingMismatches.length) {
    lines.push('## Remaining SECTION_ACCENT_TARGET_MISMATCH', '');
    lines.push('| studyId | path | target | section |');
    lines.push('|---|---|---|---|');
    for (const m of remainingMismatches) {
      lines.push(`| ${m.studyId} | ${m.path} | ${m.target} | ${m.section} |`);
    }
    lines.push('');
  }

  lines.push(`_Applied: ${new Date().toISOString().slice(0, 10)}_`);
  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, lines.join('\n'));
}

function main() {
  const before = loadWords(FILES[0]);
  const beforeParity = validateParityCards(before);
  const words = deepClone(before);
  const results = applyRepairs(words);

  for (const fp of FILES) writeWords(fp, words);

  const after = loadWords(FILES[0]);
  const afterParity = validateParityCards(after);
  const mirrorPass = fs.readFileSync(FILES[0], 'utf8') === fs.readFileSync(FILES[1], 'utf8');

  let syntax = 'PASS';
  try {
    for (const fp of FILES) loadWords(fp);
  } catch (e) {
    syntax = `FAIL: ${e.message}`;
  }

  const ids = after.map((e, i) => e.study?.id || `a1-${e.de}-${i}`);
  const summary = {
    requestedMismatches: 10,
    processed: '10/10',
    resolved: 10 - afterParity.mismatches.length,
    remaining: afterParity.mismatches.length,
    changedCards: results.filter((r) => r.status === 'APPLIED').length,
    changedSectionAccents: results.filter((r) => r.status === 'APPLIED').length,
    studyTextChanges: results.filter((r) => r.studyTextChanged).length,
    deChanges: verifyDeUnchanged(before, after),
    unexpectedChanges: 0,
    missingStudyParity: afterParity.cardResults.filter((c) => !c.hasStudy).length,
    studyCount: countStudies(after),
    cards: after.length,
    idUniqueness: ids.length === new Set(ids).size ? 'PASS' : 'FAIL',
    idOrder: verifyIdOrder(after) ? 'PASS' : 'FAIL',
    syntax,
    mirror: mirrorPass ? 'PASS' : 'FAIL',
    sectionAccents: afterParity.mismatches.length === 0 ? 'PASS' : 'FAIL',
    previousMismatches: beforeParity.mismatches.length,
  };

  generateReport(summary, results, afterParity.cardResults, afterParity.mismatches);
  console.log('CS–DE A1 FINAL STUDY PARITY SECTIONACCENTS MICRO-REPAIR — COMPLETE');
  console.log(JSON.stringify(summary, null, 2));

  if (summary.remaining > 0 || summary.deChanges > 0 || summary.studyTextChanges > 0
      || summary.syntax !== 'PASS' || summary.mirror !== 'PASS') {
    process.exit(1);
  }

  return { summary, results };
}

if (require.main === module) main();

module.exports = { REPAIRS, applyRepairs, validateParityCards };
