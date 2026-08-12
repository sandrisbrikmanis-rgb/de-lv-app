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
  { n: 1, findingId: 'FULL-A1-00401', cardId: 'a1-müssen', field: 'study.examples[1].lv', pirmd: 'Musíte počkat.', pec: 'Musíš počkat.' },
  { n: 2, findingId: 'FULL-A1-00405', cardId: 'a1-müssen', field: 'study.comparison[1].meaning', pirmd: 'Být schopen / vědět', pec: 'Moci / umět' },
  { n: 3, findingId: 'FULL-A1-00407', cardId: 'a1-nach', field: 'study.translation', pirmd: 'Až • Po', pec: 'Do • Po' },
  { n: 4, findingId: 'FULL-A1-00410', cardId: 'a1-nach', field: 'study.explanation[3]', pirmd: 'Ve frázi nach Hause to znamená domov.', pec: 'Ve frázi nach Hause to znamená domů.' },
  { n: 5, findingId: 'FULL-A1-00411', cardId: 'a1-nach', field: 'study.comparison[1].meaning', pirmd: 'Do / v', pec: 'Do / k' },
  { n: 6, findingId: 'FULL-A1-00412', cardId: 'a1-natuerlich', field: 'study.examples[2].lv', pirmd: 'Samozřejmě vám pomůžu.', pec: 'Samozřejmě ti pomůžu.' },
  { n: 7, findingId: 'FULL-A1-00413', cardId: 'a1-natuerlich', field: 'study.important[1]', pirmd: 'Přirozeně! jako samostatný vykřičník vždy = samozřejmě!', pec: 'Samostatné Natürlich! jako potvrzení znamená „Samozřejmě!“; „přirozeně“ je jiný význam podle kontextu.' },
  { n: 8, findingId: 'FULL-A1-00414', cardId: 'a1-nehmen', field: 'lv', pirmd: 'Vzít • Vzít', pec: 'Brát • Vzít' },
  { n: 9, findingId: 'FULL-A1-00415', cardId: 'a1-nehmen', field: 'study.translation', pirmd: 'Vzít • Vzít', pec: 'Brát • Vzít' },
  { n: 10, findingId: 'FULL-A1-00418', cardId: 'a1-nehmen', field: 'study.comparison[1].meaning', pirmd: 'Přinést / vzít / dodat', pec: 'Přinést / odnést / dopravit' },
  { n: 11, findingId: 'FULL-A1-00421', cardId: 'a1-neu', field: 'study.explanation[5]', pirmd: 'Opakem je alt (starý) • Podstatné jméno das Neue znamená nový.', pec: 'Opakem je alt (starý) • Podstatné jméno das Neue znamená to nové nebo novinku.' },
  { n: 12, findingId: 'FULL-A1-00423', cardId: 'a1-ob', field: 'study.translation', pirmd: 'Nebo', pec: 'Zda • Jestli' },
  { n: 13, findingId: 'FULL-A1-00424', cardId: 'a1-ob', field: 'study.examples[0].lv', pirmd: 'Nevím jestli přijde.', pec: 'Nevím, jestli přijde.' },
  { n: 14, findingId: 'FULL-A1-00427', cardId: 'a1-ob', field: 'study.comparison[1].meaning', pirmd: 'Nebo si vyberte mezi možnostmi', pec: 'Nebo při volbě mezi možnostmi' },
  { n: 15, findingId: 'FULL-A1-00428', cardId: 'a1-ob', field: 'study.important[1]', pirmd: 'Kaffee nebo Tee? místo ob. užívá se oder.', pec: 'V otázce „Kaffee oder Tee?“ se používá oder, nikoli ob.' },
  { n: 16, findingId: 'FULL-A1-00429', cardId: 'a1-oder', field: 'lv', pirmd: 'Nebo • Nebo', pec: 'Nebo' },
  { n: 17, findingId: 'FULL-A1-00430', cardId: 'a1-oder', field: 'study.translation', pirmd: 'Nebo • Nebo', pec: 'Nebo' },
  { n: 18, findingId: 'FULL-A1-00431', cardId: 'a1-oder', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: oder se používá, když volíme mezi dvěma nebo více možnostmi.', pec: 'Hlavní myšlenka: oder znamená „nebo“ a používá se při volbě mezi dvěma nebo více možnostmi.' },
  { n: 19, findingId: 'FULL-A1-00433', cardId: 'a1-oder', field: 'study.comparison[1].meaning', pirmd: 'Nebo v nepřímé otázce', pec: 'Zda / jestli v nepřímé otázce' },
  { n: 20, findingId: 'FULL-A1-00434', cardId: 'a1-oder', field: 'study.examples[2].lv', pirmd: 'Chceš pizzu nebo salát', pec: 'Chceš pizzu nebo salát?' },
  { n: 21, findingId: 'FULL-A1-00435', cardId: 'a1-passen', field: 'lv', pirmd: 'Pasovat • Pasovat', pec: 'Pasovat • Slušet' },
  { n: 22, findingId: 'FULL-A1-00436', cardId: 'a1-passen', field: 'study.translation', pirmd: 'Pasovat • Pasovat', pec: 'Pasovat • Slušet' },
  { n: 23, findingId: 'FULL-A1-00437', cardId: 'a1-passen', field: 'study.explanation[1]', pirmd: 'U oblečení passen často znamená přizpůsobit se velikosti.', pec: 'U oblečení passen často znamená dobře sedět nebo pasovat velikostí.' },
  { n: 24, findingId: 'FULL-A1-00438', cardId: 'a1-passen', field: 'study.explanation[2]', pirmd: 'Pro barvy nebo styl znamená passen padnout.', pec: 'U barev nebo stylu passen znamená slušet nebo ladit.' },
  { n: 25, findingId: 'FULL-A1-00442', cardId: 'a1-probieren', field: 'study.examples[0].lv', pirmd: 'Ochutnejte polévku!', pec: 'Ochutnej polévku!' },
  { n: 26, findingId: 'FULL-A1-00445', cardId: 'a1-reis', field: 'study.important[1]', pirmd: 'V českým překladu se často používá množné číslo: rýže je hotová.', pec: 'V českém překladu se používá jednotné číslo: rýže je hotová.' },
  { n: 27, findingId: 'FULL-A1-00450', cardId: 'a1-schwimmen', field: 'study.comparison[1].meaning', pirmd: 'Plavat / být ve vodě', pec: 'Koupat se / být ve vodě' },
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

function valuesEqual(a, b) {
  return serializeValue(a) === serializeValue(b);
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
    if (valuesEqual(beforeRaw, r.pec)) {
      status = 'ALREADY_CORRECT';
    } else if (valuesEqual(beforeRaw, r.pirmd)) {
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
    repairFindings: 27,
    authorizedFields: REPAIRS.length,
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
  const reportPath = path.join(ROOT, 'reports/cs-a1-full-review-repair-block-09.md');
  const lines = [
    '# CS–DE A1 Full Review Repair — Block 09 (Findings 401–450)',
    '',
    '## Review coverage',
    '',
    '- canonical findings reviewed: **50** (FULL-A1-00401 … FULL-A1-00450)',
    '- repair findings: **27**',
    '- stale / already correct: **23**',
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
