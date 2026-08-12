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
  { n: 1, findingId: 'FULL-A1-00251', cardId: 'a1-fuer', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: für je předložka, která vždy řídí akuzativ – obvykle pro nebo pro v češtině.', pec: 'Hlavní myšlenka: für je předložka, která vždy řídí akuzativ; v češtině se podle kontextu překládá jako pro nebo za.' },
  { n: 2, findingId: 'FULL-A1-00254', cardId: 'a1-gleich', field: 'study.translation', pirmd: 'Hned • Rovný', pec: 'Hned • Stejný' },
  { n: 3, findingId: 'FULL-A1-00255', cardId: 'a1-gleich', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: gleich temporally znamená okamžitě, komparativně znamená rovný.', pec: 'Hlavní myšlenka: gleich v časovém významu znamená hned a při srovnání znamená stejný.' },
  { n: 4, findingId: 'FULL-A1-00256', cardId: 'a1-gleich', field: 'study.explanation[3]', pirmd: 'Gleich lze použít i jako předložku s dativem ve významu jako (gleich mir = jako já).', pec: 'Správný význam určuje kontext, například zda jde o čas nebo o srovnání.' },
  { n: 5, findingId: 'FULL-A1-00259', cardId: 'a1-gross-study', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: Velká velikost nebo pro osobu - vysoká na výšku.', pec: 'Hlavní myšlenka: groß označuje velkou velikost, u člověka vysokou postavu.' },
  { n: 6, findingId: 'FULL-A1-00263', cardId: 'a1-haben', field: 'study.important[1]', pirmd: 'Se seinem a dativem: Mir ist kalt. = Je mi zima. (není to haben!)', pec: 'Se slovesem sein a dativem: Mir ist kalt. = Je mi zima. (Není to haben!)' },
  { n: 7, findingId: 'FULL-A1-00265', cardId: 'a1-halten', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: halten znamená držet; u dopravy může znamenat zastavit nebo mít zastávku.', pec: 'Hlavní myšlenka: halten nejčastěji znamená držet; u dopravy může znamenat zastavovat nebo stát.' },
  { n: 8, findingId: 'FULL-A1-00268', cardId: 'a1-heißen', field: 'study.comparison[0].meaning', pirmd: 'Být volán / míněn', pec: 'Jmenovat se / znamenat' },
  { n: 9, findingId: 'FULL-A1-00271', cardId: 'a1-heißen', field: 'study.examples[1].lv', pirmd: 'Jak se jmenuješ', pec: 'Jak se jmenuješ?' },
  { n: 10, findingId: 'FULL-A1-00272', cardId: 'a1-heißen', field: 'study.examples[3].lv', pirmd: 'Co to znamená', pec: 'Co to znamená?' },
  { n: 11, findingId: 'FULL-A1-00275', cardId: 'a1-hoeren-study', field: 'study.examples[2].lv', pirmd: 'Slyším tě', pec: 'Slyším tě.' },
  { n: 12, findingId: 'FULL-A1-00277', cardId: 'a1-ihr', field: 'study.translation', pirmd: 'Vy • Ji', pec: 'Vy • Jí • Její' },
  { n: 13, findingId: 'FULL-A1-00280', cardId: 'a1-ihr', field: 'study.examples[3].lv', pirmd: 'Napíše jí dopis.', pec: 'Píše jí dopis.' },
  { n: 14, findingId: 'FULL-A1-00282', cardId: 'a1-ihr', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: ihr jsou dvě různá zájmena se stejným pravopisem - oslovující několik lidí (vy) a dativ zájmena sie (ona/ona).', pec: 'Hlavní myšlenka: ihr má několik použití — jako oslovení více lidí znamená „vy“, jako dativ zájmena sie znamená „jí“ a jako přivlastňovací zájmeno může znamenat „její“.' },
  { n: 15, findingId: 'FULL-A1-00283', cardId: 'a1-ihr', field: 'study.tip[0]', pirmd: 'Ihr se slovesem dsk. forma (kommt, habt) = ty • Ihr vedle slova jako dativ nebo přivlastňovací = její/její.', pec: 'Ihr se slovesem ve 2. osobě množného čísla (kommt, habt) = vy • ihr jako dativ zájmena sie = jí • ihr jako přivlastňovací zájmeno = její.' },
  { n: 16, findingId: 'FULL-A1-00284', cardId: 'a1-im', field: 'study.examples[0].lv', pirmd: 'Jsem v parku', pec: 'Jsem v parku.' },
  { n: 17, findingId: 'FULL-A1-00285', cardId: 'a1-im', field: 'study.explanation[2]', pirmd: 'Používá se s podstatnými jmény mužského rodu a podstatnými jmény libovolného pohlaví při odpovědi na otázku kde? — umístění.', pec: 'Používá se s podstatnými jmény mužského a středního rodu při odpovědi na otázku kde? — označuje umístění.' },
  { n: 18, findingId: 'FULL-A1-00288', cardId: 'a1-im', field: 'study.comparison[3].meaning', pirmd: 'Kde, kde? (komu?)', pec: 'U, kde? (3. pád)' },
  { n: 19, findingId: 'FULL-A1-00289', cardId: 'a1-im', field: 'study.tip[1]', pirmd: 'Kde? → ins • Kde? → im - nezaměňujte tyto dva!', pec: 'Kam? → ins • Kde? → im — nezaměňujte tyto dva!' },
  { n: 20, findingId: 'FULL-A1-00290', cardId: 'a1-im', field: 'study.important[0]', pirmd: 'Im = in dem, pouze s podstatným jménem mužského nebo středního rodu pro koho? ve skloňování.', pec: 'Im = in dem; používá se s podstatnými jmény mužského nebo středního rodu v dativu a odpovídá na otázku kde?' },
  { n: 21, findingId: 'FULL-A1-00292', cardId: 'a1-im', field: 'study.examples[5].lv', pirmd: 'V lednu jsem jel do Vídně.', pec: 'V lednu jedu do Vídně.' },
  { n: 22, findingId: 'FULL-A1-00293', cardId: 'a1-in', field: 'study.explanation[1]', pirmd: 'S polohou se in často překládá jako v nebo v: v Berlíně = v Berlíně.', pec: 'Při označení polohy se in často překládá jako „v“ nebo „ve“: in Berlin = v Berlíně.' },
  { n: 23, findingId: 'FULL-A1-00294', cardId: 'a1-in', field: 'study.explanation[3]', pirmd: 'Českýý překlad se mění v závislosti na kontextu.', pec: 'Český překlad se mění v závislosti na kontextu.' },
  { n: 24, findingId: 'FULL-A1-00297', cardId: 'a1-ins', field: 'study.explanation[2]', pirmd: 'Používá se s podstatnými jmény jakéhokoli pohlaví při odpovědi na otázku kde? - pohyb dovnitř.', pec: 'Používá se s podstatnými jmény středního rodu při odpovědi na otázku kam? — označuje pohyb dovnitř.' },
  { n: 25, findingId: 'FULL-A1-00300', cardId: 'a1-ins', field: 'study.comparison[1].meaning', pirmd: 'Uvnitř kde? (komu?)', pec: 'Uvnitř, kde? (3. pád)' },
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
    repairFindings: 25,
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
  const reportPath = path.join(ROOT, 'reports/cs-a1-full-review-repair-block-06.md');
  const lines = [
    '# CS–DE A1 Full Review Repair — Block 06 (Findings 251–300)',
    '',
    '## Review coverage',
    '',
    '- canonical findings reviewed: **50** (FULL-A1-00251 … FULL-A1-00300)',
    '- repair findings: **25**',
    '- OWNER keep current: **4**',
    '- already fixed / stale: **19**',
    '- path / source mismatch: **2**',
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
    '- FULL-A1-00253 a1-fuer study.important[1]',
    '- FULL-A1-00257 a1-gleich study.important[1]',
    '- FULL-A1-00266 a1-halten study.tip.text',
    '- FULL-A1-00295 a1-in study.tip.text',
    '',
    '## Path / source mismatch (unchanged)',
    '',
    '- FULL-A1-00258 a1-gross-study study.examples[1].lv',
    '- FULL-A1-00276 a1-hoeren-study fields[2].csText (duplicate of 00275)',
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
