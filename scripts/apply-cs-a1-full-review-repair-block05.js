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

// 19 repair findings + 1 extra field (FULL-A1-00232 example) = 20 authorized fields
const REPAIRS = [
  { n: 1, findingId: 'FULL-A1-00201', cardId: 'a1-dieser', field: 'study.important[0]', pirmd: 'Dieser, diese a dieses se mění podle pohlaví.', pec: 'Dieser, diese a dieses se mění podle rodu.' },
  { n: 2, findingId: 'FULL-A1-00202', cardId: 'a1-ein', field: 'study.translation', pirmd: 'Neurčitý člen • Jeden • Někdo', pec: 'Neurčitý člen • Jeden' },
  { n: 3, findingId: 'FULL-A1-00203', cardId: 'a1-ein', field: 'study.tip.text', pirmd: 'Pamatujte: nespecifický jeden/někdo → ein.', pec: 'Pamatujte: ein není jen „jeden“, často je to neurčitý člen.' },
  { n: 4, findingId: 'FULL-A1-00206', cardId: 'a1-eis', field: 'study.comparison[0].meaning', pirmd: 'Zmrzlina / zmrzlina', pec: 'Led / zmrzlina' },
  { n: 5, findingId: 'FULL-A1-00213', cardId: 'a1-es', field: 'study.translation', pirmd: 'To • To • Neosobní podoba', pec: 'To • Ono • Neosobní podoba' },
  { n: 6, findingId: 'FULL-A1-00221', cardId: 'a1-etwas', field: 'study.explanation[1]', pirmd: 'Pokud etwas nahradí neznámou věc, češtině obvykle něco řekne.', pec: 'Když etwas označuje neznámou věc, v češtině se obvykle překládá jako „něco“.' },
  { n: 7, findingId: 'FULL-A1-00222', cardId: 'a1-etwas', field: 'study.explanation[2]', pirmd: 'Když etwas stojí před přídavným jménem nebo veličinou, často to znamená málo.', pec: 'Když etwas stojí před přídavným jménem nebo veličinou, často znamená „trochu“ nebo „poněkud“.' },
  { n: 8, findingId: 'FULL-A1-00223', cardId: 'a1-etwas', field: 'study.tip.text', pirmd: 'Pamatujte: věc → něco • Stupeň → mírně.', pec: 'Pamatujte: věc → něco • míra → trochu.' },
  { n: 9, findingId: 'FULL-A1-00224', cardId: 'a1-etwas', field: 'study.important[1]', pirmd: 'V češtině něco zní lépe než něco, například: etwas trinken = něco pít.', pec: 'V češtině se tvar mění podle pádu: etwas trinken = něco pít.' },
  { n: 10, findingId: 'FULL-A1-00232', cardId: 'a1-euch', field: 'study.comparison[1].meaning', pirmd: 'Vám / vám', pec: 'Vás / vám' },
  { n: 11, findingId: 'FULL-A1-00232', cardId: 'a1-euch', field: 'study.comparison[1].example', pirmd: 'Ich helfe euch. = Pomáhám ti.', pec: 'Ich helfe euch. = Pomáhám vám.' },
  { n: 12, findingId: 'FULL-A1-00233', cardId: 'a1-euch', field: 'study.comparison[2].meaning', pirmd: 'Vaše', pec: 'Váš / vaše' },
  { n: 13, findingId: 'FULL-A1-00234', cardId: 'a1-euch', field: 'study.info[1]', pirmd: 'Euch = vás (přímý doplněk) / vám (dativ)', pec: 'Euch = vás (přímý předmět) / vám (dativ)' },
  { n: 14, findingId: 'FULL-A1-00240', cardId: 'a1-fahren', field: 'study.comparison[2].meaning', pirmd: 'Běž / běž', pec: 'Běhat / běžet' },
  { n: 15, findingId: 'FULL-A1-00242', cardId: 'a1-finden', field: 'study.translation', pirmd: 'Najít • Zvážit', pec: 'Najít • Myslet si' },
  { n: 16, findingId: 'FULL-A1-00243', cardId: 'a1-finden', field: 'study.explanation[1]', pirmd: 'V konverzaci finden velmi často také znamená zvážit nebo přemýšlet o něčem.', pec: 'V konverzaci finden velmi často také znamená mít na něco názor nebo si něco myslet.' },
  { n: 17, findingId: 'FULL-A1-00246', cardId: 'a1-frau', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: die Frau může znamenat ženu (pohlaví) nebo manželku (manželku).', pec: 'Hlavní myšlenka: die Frau může znamenat ženu nebo manželku.' },
  { n: 18, findingId: 'FULL-A1-00247', cardId: 'a1-frau', field: 'study.explanation[2]', pirmd: 'V případě manžela, die Frau = manželka (meine Frau = moje žena).', pec: 'Pokud jde o manželský vztah, die Frau = manželka (meine Frau = moje žena).' },
  { n: 19, findingId: 'FULL-A1-00248', cardId: 'a1-frau', field: 'study.explanation[3]', pirmd: 'Přivlastňovací zájmeno (meine/deine/seine Frau) téměř vždy znamená manželka – manžel.', pec: 'Spojení s přivlastňovacím zájmenem (meine/deine/seine Frau) téměř vždy znamená manželku.' },
  { n: 20, findingId: 'FULL-A1-00249', cardId: 'a1-frau', field: 'study.sectionAccents.tip[1].purple', pirmd: ['Přivlastňovací'], pec: [] },
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
    repairFindings: 19,
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
  const reportPath = path.join(ROOT, 'reports/cs-a1-full-review-repair-block-05.md');
  const lines = [
    '# CS–DE A1 Full Review Repair — Block 05 (Findings 201–250)',
    '',
    '## Review coverage',
    '',
    '- canonical findings reviewed: **50** (FULL-A1-00201 … FULL-A1-00250)',
    '- repair findings: **19**',
    '- authorized repair fields: **20**',
    '- OWNER keep current: **6**',
    '- already fixed / stale: **20**',
    '- path drift / no repair: **5**',
    '',
    '## Repair',
    '',
    `- authorized fields: **${REPAIRS.length}**`,
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
    '- FULL-A1-00236 a1-fahren study.explanation[0]',
    '- FULL-A1-00237 a1-fahren (keep current)',
    '- FULL-A1-00238 a1-fahren (keep current)',
    '- FULL-A1-00239 a1-fahren (keep current)',
    '- FULL-A1-00244 a1-finden study.explanation[2]',
    '- FULL-A1-00245 a1-finden study.tip.text',
    '',
    '## Path drift / no repair (unchanged)',
    '',
    '- FULL-A1-00215 a1-es study.examples[0].lv',
    '- FULL-A1-00216 a1-es study.examples[1].lv',
    '- FULL-A1-00217 a1-es study.examples[2].lv',
    '- FULL-A1-00218 a1-es study.examples[3].lv',
    '- FULL-A1-00241 a1-fahren study.important.text',
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
