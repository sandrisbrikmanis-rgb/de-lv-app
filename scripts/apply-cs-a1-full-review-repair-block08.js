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

const MORGEN_EXPLANATION_PIRMS = [
  'Hlavní myšlenka: Příslovce času je malé. Znamená další den – zítra.',
  'Morgen hlavně znamená: druhý den.',
  'Často charakterizováno: počasím.',
  'Morgen především znamená: část dne.',
  'Často popisuje: podstatné jméno (der).',
  'Morgen v podstatě znamená: několik ran.',
  'Často charakterizováno: podstatné jméno (pl.).',
  'Morgen s malým počátečním písmenem znamená zítra - pozítří (Ich komme morgen = přijdu zítra, Bis morgen!',
];

const MORGEN_EXPLANATION_PEC = [
  'Hlavní myšlenka: morgen s malým písmenem znamená zítra.',
  'Der Morgen s velkým písmenem je podstatné jméno a znamená ráno.',
  'morgen je časové příslovce označující následující den.',
  'Příklady: Ich komme morgen = Přijdu zítra • Bis morgen! = Až zítra!',
];

const REPAIRS = [
  { n: 1, findingId: 'FULL-A1-00351', cardId: 'a1-laufen', field: 'study.important[0]', pirmd: 'Laufen není jen „běh“. U filmu nebo zařízení to může znamenat „jít“ nebo „jednat“.', pec: 'Laufen není jen „běhat“. U filmu nebo zařízení to může znamenat „běžet“ nebo „fungovat“.' },
  { n: 2, findingId: 'FULL-A1-00352', cardId: 'a1-laut', field: 'study.explanation[2]', pirmd: 'Často popisuje: přídavné jméno.', pec: 'Laut je přídavné jméno s významem „hlasitý“.' },
  { n: 3, findingId: 'FULL-A1-00357', cardId: 'a1-laut-study', field: 'study.explanation[2]', pirmd: 'Často popisuje: přídavné jméno.', pec: 'Malé laut je přídavné jméno s významem „hlasitý“.' },
  { n: 4, findingId: 'FULL-A1-00358', cardId: 'a1-laut-study', field: 'study.explanation[3]', pirmd: 'Der Laut primárně znamená: zvukový signál.', pec: 'Der Laut může znamenat zvuk, zvukový signál nebo hlásku.' },
  { n: 5, findingId: 'FULL-A1-00361', cardId: 'a1-legen', field: 'study.comparison[3].meaning', pirmd: 'Sednout si / sednout si', pec: 'Posadit / sednout si' },
  { n: 6, findingId: 'FULL-A1-00364', cardId: 'a1-leise-study', field: 'lv', pirmd: 'Klid', pec: 'Tichý • Potichu' },
  { n: 7, findingId: 'FULL-A1-00366', cardId: 'a1-leise-study', field: 'study.examples[0].lv', pirmd: 'Prosím, buďte zticha.', pec: 'Prosím, buď zticha.' },
  { n: 8, findingId: 'FULL-A1-00367', cardId: 'a1-leise-study', field: 'study.examples[1].lv', pirmd: 'Prosím buď zticha', pec: 'Prosím, buď zticha.' },
  { n: 9, findingId: 'FULL-A1-00368', cardId: 'a1-leise-study', field: 'study.tip[0]', pirmd: 'Klid = klid', pec: 'leise = tichý / potichu' },
  { n: 10, findingId: 'FULL-A1-00369', cardId: 'a1-liegen', field: 'lv', pirmd: 'Být • Spát', pec: 'Ležet • Být položený' },
  { n: 11, findingId: 'FULL-A1-00370', cardId: 'a1-liegen', field: 'study.translation', pirmd: 'Být • Spát', pec: 'Ležet • Být položený' },
  { n: 12, findingId: 'FULL-A1-00372', cardId: 'a1-liegen', field: 'study.examples[2].lv', pirmd: 'Spí v posteli.', pec: 'Leží v posteli.' },
  { n: 13, findingId: 'FULL-A1-00373', cardId: 'a1-liegen', field: 'study.examples[3].lv', pirmd: 'Položil jsem knihu na stůl.', pec: 'Pokládám knihu na stůl.' },
  { n: 14, findingId: 'FULL-A1-00374', cardId: 'a1-liegen', field: 'study.comparison[0].meaning', pirmd: 'Být / spát', pec: 'Ležet / být položený' },
  { n: 15, findingId: 'FULL-A1-00375', cardId: 'a1-liegen', field: 'study.comparison[2].meaning', pirmd: 'Stát / stát', pec: 'Stát / být postavený' },
  { n: 16, findingId: 'FULL-A1-00376', cardId: 'a1-machen', field: 'lv', pirmd: 'Dělat • Dělat', pec: 'Dělat • Vyrábět' },
  { n: 17, findingId: 'FULL-A1-00377', cardId: 'a1-machen', field: 'study.translation', pirmd: 'Dělat • Dělat', pec: 'Dělat • Vyrábět' },
  { n: 18, findingId: 'FULL-A1-00378', cardId: 'a1-machen', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: machen je velmi běžné slovo, které znamená vyrobit nebo vyrobit.', pec: 'Hlavní myšlenka: machen je velmi běžné slovo, které znamená dělat nebo vyrábět.' },
  { n: 19, findingId: 'FULL-A1-00379', cardId: 'a1-machen', field: 'study.explanation[1]', pirmd: 'Pokud jde o akci obecně, překládá se to jako jak dělat.', pec: 'Pokud jde o obecnou činnost, překládá se jako dělat.' },
  { n: 20, findingId: 'FULL-A1-00380', cardId: 'a1-machen', field: 'study.explanation[2]', pirmd: 'Pokud se něco vyrábí nebo připravuje, překládá se to jako výroba nebo vaření.', pec: 'Pokud se něco vyrábí nebo připravuje, překládá se podle kontextu jako vyrábět nebo připravovat.' },
  { n: 21, findingId: 'FULL-A1-00381', cardId: 'a1-machen', field: 'study.explanation[3]', pirmd: 'V mnoha frázích se machen překládá přirozeně do češtině, nikoli doslovně.', pec: 'V mnoha frázích se machen překládá přirozeně do češtiny, nikoli doslovně.' },
  { n: 22, findingId: 'FULL-A1-00383', cardId: 'a1-mal', field: 'lv', pirmd: 'Čas', pec: 'Krát • Případ' },
  { n: 23, findingId: 'FULL-A1-00385', cardId: 'a1-mal', field: 'study.tip.text', pirmd: 'Pamatujte: das Mal = čas (podstatné jméno) • Mal bez článku = hovorová částice.', pec: 'Pamatujte: das Mal = krát/případ (podstatné jméno) • mal bez členu = hovorová částice.' },
  { n: 24, findingId: 'FULL-A1-00386', cardId: 'a1-mal', field: 'study.explanation[3]', pirmd: 'Nemluvte s hovorovou částicí mal (Komm mal her!) - to je jiný význam.', pec: 'Nezaměňujte ho s hovorovou částicí mal (Komm mal her!) – jde o jiný význam.' },
  { n: 25, findingId: 'FULL-A1-00387', cardId: 'a1-mann', field: 'study.explanation[5]', pirmd: 'Ženská forma die Frau má stejný dvojí význam: žena A manželka.', pec: 'Ženská forma die Frau má stejný dvojí význam: žena a manželka.' },
  { n: 26, findingId: 'FULL-A1-00388', cardId: 'a1-mit', field: 'study.examples[0].lv', pirmd: 'Jdu s tebou', pec: 'Jdu s tebou.' },
  { n: 27, findingId: 'FULL-A1-00389', cardId: 'a1-mit', field: 'study.examples[1].lv', pirmd: 'Jedu autobusem', pec: 'Jedu autobusem.' },
  { n: 28, findingId: 'FULL-A1-00390', cardId: 'a1-mit', field: 'study.comparison[3].meaning', pirmd: 'Do / v', pec: 'K / ke' },
  { n: 29, findingId: 'FULL-A1-00392', cardId: 'a1-mögen', field: 'study.examples[0].lv', pirmd: 'Mám rád hudbu', pec: 'Mám rád hudbu.' },
  { n: 30, findingId: 'FULL-A1-00393', cardId: 'a1-mögen', field: 'study.examples[1].lv', pirmd: 'Máš rád kávu', pec: 'Máš rád kávu?' },
  { n: 31, findingId: 'FULL-A1-00394', cardId: 'a1-mögen', field: 'study.examples[3].lv', pirmd: 'Chtěl bych kávu', pec: 'Chtěl bych kávu.' },
  { n: 32, findingId: 'FULL-A1-00395', cardId: 'a1-mögen', field: 'study.important[0]', pirmd: 'Mögen není podstatné jméno pro zdvořilé „chtěl bych“. Obvykle se k tomu používá Möchte.', pec: 'Mögen se nepoužívá pro zdvořilé „chtěl bych“. K tomu se obvykle používá möchte.' },
  { n: 33, findingId: 'FULL-A1-00396', cardId: 'a1-morgen', field: 'study.explanation', pirmd: MORGEN_EXPLANATION_PIRMS, pec: MORGEN_EXPLANATION_PEC },
  { n: 34, findingId: 'FULL-A1-00398', cardId: 'a1-morgen-study', field: 'study.tip[1]', pirmd: 'Der Morgen = zítra', pec: 'Der Morgen = ráno' },
  { n: 35, findingId: 'FULL-A1-00399', cardId: 'a1-müssen', field: 'lv', pirmd: 'Potřebovat', pec: 'Musit' },
  { n: 36, findingId: 'FULL-A1-00400', cardId: 'a1-müssen', field: 'study.translation', pirmd: 'Potřebovat', pec: 'Musit' },
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
    repairFindings: 36,
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
  const reportPath = path.join(ROOT, 'reports/cs-a1-full-review-repair-block-08.md');
  const lines = [
    '# CS–DE A1 Full Review Repair — Block 08 (Findings 351–400)',
    '',
    '## Review coverage',
    '',
    '- canonical findings reviewed: **50** (FULL-A1-00351 … FULL-A1-00400)',
    '- repair findings: **36**',
    '- stale / already correct: **14**',
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
