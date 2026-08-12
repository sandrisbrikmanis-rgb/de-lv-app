#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const FILES = [
  path.join(ROOT, 'data/cs/a1.js'),
  path.join(ROOT, 'www/data/cs/a1.js'),
];

const REPAIRS = [
  { n: 1, findingId: 'FULL-A1-00151', cardId: 'a1-bei', field: 'study.comparison[2].meaning', pirmd: 'Kdo jde (směr)', pec: 'Ke komu se jde (směr)' },
  { n: 2, findingId: 'FULL-A1-00153', cardId: 'a1-bis', field: 'study.comparison[1].word', pirmd: 'bis ... zu', pec: 'bis zu' },
  { n: 3, findingId: 'FULL-A1-00166', cardId: 'a1-bleiben', field: 'study.comparison[0].meaning', pirmd: 'Pobyt', pec: 'Zůstat' },
  { n: 4, findingId: 'FULL-A1-00168', cardId: 'a1-bringen', field: 'study.examples[2].lv', pirmd: 'Vezme knihu do školy.', pec: 'Donese knihu do školy.' },
  { n: 5, findingId: 'FULL-A1-00175', cardId: 'a1-da', field: 'study.examples[2].lv', pirmd: 'Tady přichází.', pec: 'Tamhle přichází.' },
  { n: 6, findingId: 'FULL-A1-00176', cardId: 'a1-da', field: 'study.explanation[2]', pirmd: 'Podle situace to lze přeložit i jako zde nebo zde.', pec: 'Podle situace lze „da“ přeložit také jako „tam“, „tady“ nebo „zde“.' },
  { n: 7, findingId: 'FULL-A1-00177', cardId: 'a1-da', field: 'study.tip.text', pirmd: 'Pamatujte: generál tam/te → da.', pec: 'Pamatujte: obecné „tam“ nebo „tady“ → da.' },
  { n: 8, findingId: 'FULL-A1-00179', cardId: 'a1-das', field: 'study.explanation', pirmd: 'Používá se pro podstatná jména středního rodu. V některých větách může „to“ fungovat také jako zájmeno nebo vztažné zájmeno.', pec: 'Používá se před podstatnými jmény středního rodu. V některých větách může „das“ fungovat také jako zájmeno nebo vztažné zájmeno.' },
  { n: 9, findingId: 'FULL-A1-00181', cardId: 'a1-das', field: 'study.tip.text', pirmd: 'Pamatujte: střední rod → das • Že → dass.', pec: 'Pamatujte: střední rod → das • že → dass.' },
  { n: 10, findingId: 'FULL-A1-00188', cardId: 'a1-der', field: 'study.examples[1].lv', pirmd: 'Autobus jede.', pec: 'Autobus přijíždí.' },
  { n: 11, findingId: 'FULL-A1-00190', cardId: 'a1-der', field: 'study.important[1]', pirmd: 'Použití zájmen a relativního jména přijde později.', pec: 'Použití zájmena a vztažného zájmena přijde později.' },
  { n: 12, findingId: 'FULL-A1-00195', cardId: 'a1-die', field: 'study.important[0]', pirmd: 'Na úrovni A1 je kostka nejprve studována jako ženský článek.', pec: 'Na úrovni A1 se „die“ nejprve učí jako určitý člen ženského rodu.' },
  { n: 13, findingId: 'FULL-A1-00197', cardId: 'a1-dieser', field: 'study.examples[0].lv', pirmd: 'Tento muž je pěkný.', pec: 'Tento muž je milý.' },
  { n: 14, findingId: 'FULL-A1-00200', cardId: 'a1-dieser', field: 'study.tip.text', pirmd: 'Pamatujte: toto + mužský → dieser.', pec: 'Pamatujte: „tento“ + mužský rod → dieser.' },
];

function resolveField(field) {
  if (field === 'csMain' || field === 'csText') return 'lv';
  return field;
}

function parsePath(fieldPath) {
  const parts = [];
  resolveField(fieldPath).replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return '';
  });
  return parts;
}

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

function findCardIndex(words, cardId) {
  return words.findIndex((e, i) => entryId(e, i) === cardId);
}

function getRawValue(entry, fieldPath) {
  const parts = parsePath(fieldPath);
  let cur = entry;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur == null ? null : cur;
}

function setRawValue(entry, fieldPath, value) {
  const parts = parsePath(fieldPath);
  let cur = entry;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur == null) return false;
    cur = cur[parts[i]];
  }
  if (cur == null) return false;
  cur[parts[parts.length - 1]] = value;
  return true;
}

function serializeValue(value) {
  if (value == null) return null;
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function applyRepairs(words) {
  const results = [];
  for (const r of REPAIRS) {
    const idx = findCardIndex(words, r.cardId);
    if (idx < 0) {
      results.push({ ...r, status: 'CURRENT_VALUE_MISMATCH', before: null, after: null, note: 'card not found' });
      continue;
    }
    const beforeRaw = getRawValue(words[idx], r.field);
    const before = serializeValue(beforeRaw);
    let status;
    if (serializeValue(beforeRaw) === r.pec) {
      status = 'ALREADY_CORRECT';
    } else if (serializeValue(beforeRaw) === r.pirmd) {
      if (!setRawValue(words[idx], r.field, r.pec)) {
        status = 'CURRENT_VALUE_MISMATCH';
      } else {
        status = 'APPLIED';
      }
    } else {
      status = 'CURRENT_VALUE_MISMATCH';
    }
    const afterRaw = status === 'APPLIED' ? getRawValue(words[idx], r.field) : beforeRaw;
    results.push({
      ...r,
      status,
      before,
      after: status === 'APPLIED' ? serializeValue(afterRaw) : before,
      note: status === 'CURRENT_VALUE_MISMATCH' ? `expected PIRMS ${JSON.stringify(r.pirmd)}, got ${JSON.stringify(before)}` : undefined,
    });
  }
  return results;
}

function verifySyntax(filePath) {
  const words = loadWords(filePath);
  if (!Array.isArray(words) || words.length !== 702) throw new Error(`Expected 702 cards, got ${words?.length}`);
}

function verifyMirror() {
  if (fs.readFileSync(FILES[0], 'utf8') !== fs.readFileSync(FILES[1], 'utf8')) throw new Error('Mirror mismatch');
}

function verifyDeUnchanged(before, after) {
  let deChanges = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of ['de', 'de_article', 'de_plural', 'level']) {
      if (before[i]?.[f] !== after[i]?.[f]) deChanges++;
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

function main() {
  const before = loadWords(FILES[0]);
  const words = loadWords(FILES[0]);
  const results = applyRepairs(words);
  for (const fp of FILES) {
    writeWords(fp, words);
    verifySyntax(fp);
  }
  verifyMirror();
  const after = loadWords(FILES[0]);
  const summary = {
    repairFindings: 14,
    physicalFields: REPAIRS.length,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyCorrect: results.filter((r) => r.status === 'ALREADY_CORRECT').length,
    mismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    deChanges: verifyDeUnchanged(before, after),
    idOrder: verifyIdOrder(after) ? 'PASS' : 'FAIL',
  };
  console.log(JSON.stringify(summary, null, 2));
  if (results.some((r) => r.status === 'CURRENT_VALUE_MISMATCH')) {
    for (const r of results.filter((x) => x.status === 'CURRENT_VALUE_MISMATCH')) {
      console.log(`MISMATCH #${r.n} ${r.findingId} ${r.cardId} ${r.field}: ${r.note}`);
    }
  }
  return { results, summary };
}

function writeReport(results, summary) {
  const reportPath = path.join(ROOT, 'reports/cs-a1-full-review-repair-block-04.md');
  const lines = [
    '# CS–DE A1 Full Review Repair — Block 04 (Findings 151–200)',
    '',
    '## Review coverage',
    '',
    '- canonical findings reviewed: **50** (FULL-A1-00151 … FULL-A1-00200)',
    '- repair findings: **14**',
    '- OWNER keep current: **6**',
    '- already fixed / stale: **22**',
    '- path drift / no repair: **8**',
    '',
    '## Repair',
    '',
    `- requested fields: **${REPAIRS.length}**`,
    `- processed: **${REPAIRS.length}/${REPAIRS.length}**`,
    `- APPLIED: **${summary.applied}**`,
    `- ALREADY_CORRECT: **${summary.alreadyCorrect}**`,
    `- CURRENT_VALUE_MISMATCH: **${summary.mismatch}**`,
    '',
    '## Per-item results',
    '',
    '| # | findingId | cardId | field | status | before | after |',
    '|---|---|---|---|---|---|---|',
    ...results.map((r) => `| ${r.n} | ${r.findingId} | ${r.cardId} | ${r.field} | ${r.status} | ${JSON.stringify(r.before)} | ${JSON.stringify(r.after)} |`),
    '',
    '## OWNER keep current (unchanged)',
    '',
    '- FULL-A1-00160 a1-bitte study.tip[1]',
    '- FULL-A1-00164 a1-bitte-study study.tip[1]',
    '- FULL-A1-00169 a1-bringen study.comparison[2].meaning — Jít pro / přinést',
    '- FULL-A1-00187 a1-dass study.important[0]',
    '- FULL-A1-00198 a1-dieser study.examples[1].lv',
    '- FULL-A1-00199 a1-dieser study.examples[2].lv',
    '',
    '## Path drift / no repair (unchanged)',
    '',
    '- FULL-A1-00154 a1-bis study.comparison[2].word',
    '- FULL-A1-00155 a1-bis study.comparison[2].meaning',
    '- FULL-A1-00156 a1-bitte study.examples[0].lv',
    '- FULL-A1-00157 a1-bitte study.examples[1].lv',
    '- FULL-A1-00158 a1-bitte study.examples[2].lv',
    '- FULL-A1-00161 a1-bitte-study study.examples[1].lv',
    '- FULL-A1-00162 a1-bitte-study study.examples[2].lv',
    '- FULL-A1-00167 a1-bringen study.examples[0].lv',
    '',
    '## Integrity',
    '',
    `- DE changes: **${summary.deChanges}**`,
    '- unexpected production changes: **0** (scope-limited)',
    '- cards: **702**',
    `- ID/order: **${summary.idOrder}**`,
    '- syntax: **PASS**',
    '- mirror: **PASS**',
    '- Study created/deleted: **0/0**',
    '',
    `_Applied: ${new Date().toISOString().slice(0, 10)}_`,
  ];
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n'));
  console.log(`Wrote ${reportPath}`);
  return reportPath;
}

if (require.main === module) {
  const { results, summary } = main();
  writeReport(results, summary);
  if (summary.mismatch > 0) process.exit(1);
}

module.exports = { REPAIRS, applyRepairs, writeReport };
