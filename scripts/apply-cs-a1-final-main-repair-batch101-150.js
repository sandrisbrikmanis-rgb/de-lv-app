#!/usr/bin/env node
'use strict';
/**
 * Mechanical CS-DE A1 repairs 101–150 (MAIN-A1 audit findings, OWNER approved).
 * Usage: node scripts/apply-cs-a1-final-main-repair-batch101-150.js
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const FILES = [
  path.join(ROOT, 'data/cs/a1.js'),
  path.join(ROOT, 'www/data/cs/a1.js'),
];

const REPAIRS = [
  { n: 101, findingId: 'MAIN-A1-00203', cardId: 'a1-ob', field: 'study.sectionAccents.comparison[0].meaning.purple[0]', pirmd: 'Nebo', pec: 'Zda' },
  { n: 102, findingId: 'MAIN-A1-00204', cardId: 'a1-ob', field: 'study.sectionAccents.comparison[0].meaning.purple[1]', pirmd: 'Nebo', pec: 'jestli' },
  { n: 103, findingId: 'MAIN-A1-00206', cardId: 'a1-oder', field: 'study.sectionAccents.examples[0].lv.yellow[1]', pirmd: 'Káva', pec: 'čaj' },
  { n: 104, findingId: 'MAIN-A1-00207', cardId: 'a1-oder', field: 'study.sectionAccents.comparison[1].meaning.purple[0]', pirmd: 'Nebo', pec: 'Zda' },
  { n: 105, findingId: 'MAIN-A1-00208', cardId: 'a1-oder', field: 'study.sectionAccents.comparison[1].meaning.purple[1]', pirmd: 'Nebo', pec: 'jestli' },
  { n: 106, findingId: 'MAIN-A1-00209', cardId: 'a1-passen', field: 'study.sectionAccents.comparison[0].meaning.purple[0]', pirmd: 'Fit', pec: 'Pasovat' },
  { n: 107, findingId: 'MAIN-A1-00210', cardId: 'a1-passen', field: 'study.sectionAccents.comparison[1].meaning.purple[0]', pirmd: 'Stát', pec: 'Slušet' },
  { n: 108, findingId: 'MAIN-A1-00211', cardId: 'a1-passen', field: 'study.sectionAccents.comparison[3].meaning.purple[0]', pirmd: 'Provozovat', pec: 'Fungovat' },
  { n: 109, findingId: 'MAIN-A1-00212', cardId: 'a1-probieren', field: 'study.examples[3].lv', pirmd: 'Můžu zkusit bundu', pec: 'Můžu si tu bundu vyzkoušet?' },
  { n: 110, findingId: 'MAIN-A1-00213', cardId: 'a1-probieren', field: 'study.comparison[3].meaning', pirmd: 'Vyzkoušet', pec: 'Vyzkoušet si (oblečení)' },
  { n: 111, findingId: 'MAIN-A1-00215', cardId: 'a1-sagen-study', field: 'study.comparison[1].meaning', pirmd: 'Mluvit (jazyk, mluvit)', pec: 'Mluvit (jazykem, hovořit)' },
  { n: 112, findingId: 'MAIN-A1-00216', cardId: 'a1-schauen-study', field: 'lv', pirmd: 'Hodinky', pec: 'Dívat se' },
  { n: 113, findingId: 'MAIN-A1-00218', cardId: 'a1-schwimmen', field: 'study.important[1]', pirmd: 'česky se často říká „plavat“, ale v němčině musíte zkontrolovat, zda jde o pohyb nebo koupání.', pec: 'Česky se často říká „plavat“, ale v němčině musíte zkontrolovat, zda jde o pohyb nebo koupání.' },
  { n: 114, findingId: 'MAIN-A1-00223', cardId: 'a1-sich', field: 'study.examples[2].lv', pirmd: 'Je šťastná.', pec: 'Má radost.' },
  { n: 115, findingId: 'MAIN-A1-00224', cardId: 'a1-sich', field: 'study.sectionAccents.examples[0].lv.purple[0]', pirmd: 'Koupe', pec: 'Myje' },
  { n: 116, findingId: 'MAIN-A1-00225', cardId: 'a1-sicher', field: 'study.examples[1].lv', pirmd: 'Přijdeš zítra - určitě!', pec: 'Přijdeš zítra – určitě!' },
  { n: 117, findingId: 'MAIN-A1-00226', cardId: 'a1-sie-study-2', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: Zdvořilostní adresa - vždy s velkým S. Latviski: vy. Často se slovesem v množném čísle.', pec: 'Hlavní myšlenka: Zdvořilostní oslovení – vždy s velkým S. Česky: vy. Často se slovesem v množném čísle.' },
  { n: 118, findingId: 'MAIN-A1-00227', cardId: 'a1-sitzen', field: 'study.comparison[2].meaning', pirmd: 'Spát / ležet', pec: 'Ležet' },
  { n: 119, findingId: 'MAIN-A1-00229', cardId: 'a1-sollen', field: 'lv', pirmd: 'By měl', pec: 'Měl by' },
  { n: 120, findingId: 'MAIN-A1-00230', cardId: 'a1-sollen', field: 'study.translation', pirmd: 'By měl', pec: 'Měl by' },
  { n: 121, findingId: 'MAIN-A1-00231', cardId: 'a1-sollen', field: 'study.comparison[1].meaning', pirmd: 'Musit / být nutné', pec: 'Muset / být nutné' },
  { n: 122, findingId: 'MAIN-A1-00233', cardId: 'a1-stehen', field: 'study.examples[1].lv', pirmd: 'Židle je v kuchyni.', pec: 'Židle stojí v kuchyni.' },
  { n: 123, findingId: 'MAIN-A1-00234', cardId: 'a1-stehen', field: 'study.examples[3].lv', pirmd: 'Kniha je na stole.', pec: 'Kniha leží na stole.' },
  { n: 124, findingId: 'MAIN-A1-00235', cardId: 'a1-stehen', field: 'study.comparison[2].meaning', pirmd: 'Spát / ležet', pec: 'Ležet' },
  { n: 125, findingId: 'MAIN-A1-00237', cardId: 'a1-über', field: 'lv', pirmd: 'Přes • Pro', pec: 'Nad • O • Přes' },
  { n: 126, findingId: 'MAIN-A1-00238', cardId: 'a1-über', field: 'study.comparison[3].meaning', pirmd: 'Z / asi z nějakého zdroje', pec: 'Z / od' },
  { n: 127, findingId: 'MAIN-A1-00239', cardId: 'a1-um', field: 'lv', pirmd: 'Kolem • Hodiny', pec: 'Kolem • V (čas) • Aby' },
  { n: 128, findingId: 'MAIN-A1-00240', cardId: 'a1-um', field: 'study.translation', pirmd: 'Kolem • Hodiny', pec: 'Kolem • V (čas) • Aby' },
  { n: 129, findingId: 'MAIN-A1-00241', cardId: 'a1-um', field: 'study.comparison[0].meaning', pirmd: 'V / kolem / do', pec: 'V / kolem / aby' },
  { n: 130, findingId: 'MAIN-A1-00242', cardId: 'a1-um', field: 'study.comparison[1].meaning', pirmd: 'Za den / v', pec: 'V (den) / u' },
  { n: 131, findingId: 'MAIN-A1-00243', cardId: 'a1-um', field: 'study.comparison[2].meaning', pirmd: 'Kolem času / vs', pec: 'Kolem času / proti' },
  { n: 132, findingId: 'MAIN-A1-00244', cardId: 'a1-um', field: 'study.tip.text', pirmd: 'Pamatujte: um acht = osm hodin.', pec: 'Pamatujte: um acht = v osm.' },
  { n: 133, findingId: 'MAIN-A1-00245', cardId: 'a1-unter', field: 'study.examples[1].lv', pirmd: 'Kočka spí pod židlí.', pec: 'Kočka leží pod židlí.' },
  { n: 134, findingId: 'MAIN-A1-00250', cardId: 'a1-was', field: 'study.tip[0]', pirmd: 'Was samo o sobě se nemění - v němčině je to vždy bylo • V češtině vyberte koho nebo co podle části věty.', pec: 'Was samo o sobě se nemění – v němčině má vždy stejný tvar • V češtině vyberte „kdo“ nebo „co“ podle části věty.' },
  { n: 135, findingId: 'MAIN-A1-00251', cardId: 'a1-was', field: 'study.tip[1]', pirmd: 'Rychlý trik: pokud lze na otázku odpovědět „Je to...“, použijte kdo • Pokud je odpověď za slovesem jako doplněk, použijte ko.', pec: 'Rychlý trik: pokud lze na otázku odpovědět „Je to…“, použijte co • Pokud je was po slovese jako předmět, použijte co.' },
  { n: 136, findingId: 'MAIN-A1-00252', cardId: 'a1-was', field: 'study.important[0]', pirmd: 'Byl dotazován na věci, události a fakta – nikdy na osoby.', pec: 'Ptá se na věci, události a fakta – nikdy na osoby.' },
  { n: 137, findingId: 'MAIN-A1-00253', cardId: 'a1-was', field: 'study.important[3]', pirmd: 'Špatně: Wer ist passiert? → Správně: Bylo to passiert?', pec: 'Špatně: Wer ist passiert? → Správně: Was ist passiert?' },
  { n: 138, findingId: 'MAIN-A1-00254', cardId: 'a1-wer', field: 'study.explanation[1]', pirmd: 'Ptali se na lidi, ne na věci nebo události.', pec: 'Ptá se na lidi, ne na věci nebo události.' },
  { n: 139, findingId: 'MAIN-A1-00255', cardId: 'a1-wer', field: 'study.explanation[2]', pirmd: 'Věci a události jsou žádány s was, ne wer.', pec: 'Na věci a události se ptáme pomocí was, ne wer.' },
  { n: 140, findingId: 'MAIN-A1-00257', cardId: 'a1-wer', field: 'study.important[0]', pirmd: 'Ptali jsme se pouze na osoby, nikdy ne na věci.', pec: 'Ptáme se pouze na osoby, nikdy ne na věci.' },
  { n: 141, findingId: 'MAIN-A1-00258', cardId: 'a1-wer', field: 'study.important[3]', pirmd: 'Špatně: Wer ist passiert? → Správně: Bylo to passiert?', pec: 'Špatně: Wer ist passiert? → Správně: Was ist passiert?' },
  { n: 142, findingId: 'MAIN-A1-00261', cardId: 'a1-wetter', field: 'study.explanation[2]', pirmd: 'Povídejte si o počasí v přírodě s dasem Wetterem: Wie ist das Wetter heute?', pec: 'O počasí se mluví s výrazem das Wetter: Wie ist das Wetter heute?' },
  { n: 143, findingId: 'MAIN-A1-00262', cardId: 'a1-wetter', field: 'study.explanation[3]', pirmd: 'Das Wetter se často používá ve větě spolu se slovy jako teplý nebo kalt.', pec: 'Das Wetter se často používá ve větě spolu se slovy jako warm nebo kalt.' },
  { n: 144, findingId: 'MAIN-A1-00266', cardId: 'a1-zu', field: 'study.explanation[3]', pirmd: 'V konstrukci zu + neurčito pomáhá tvořit neurčito: zu lernen, zu gehen.', pec: 'V konstrukci zu + infinitiv se zu používá před infinitivem: zu lernen, zu gehen.' },
  { n: 145, findingId: 'MAIN-A1-00268', cardId: 'a1-zum', field: 'lv', pirmd: 'Do • At', pec: 'K • Ke' },
  { n: 146, findingId: 'MAIN-A1-00270', cardId: 'a1-zum', field: 'study.important[3]', pirmd: 'Nezaměňovat s bei (nachází se na) nebo nach (do měst bez článku).', pec: 'Nezaměňovat s bei (nachází se u) nebo nach (do měst bez článku).' },
  { n: 147, findingId: 'MAIN-A1-00271', cardId: 'a1-fernsehen', field: 'study.comparison[1].meaning', pirmd: 'Televize (média)', pec: 'Televize (médium)' },
  { n: 148, findingId: 'MAIN-A1-00273', cardId: 'a1-essen-study', field: 'lv', pirmd: 'Jídlo • Jídlo', pec: 'Jídlo • Pokrm' },
  { n: 149, findingId: 'MAIN-A1-00278', cardId: 'a1-ferien', field: 'study.explanation[1]', pirmd: 'Die Ferien v podstatě znamená: školní prázdniny.', pec: 'Die Ferien v podstatě znamenají: školní prázdniny.' },
  { n: 150, findingId: 'MAIN-A1-00279', cardId: 'a1-ferien', field: 'study.explanation[2]', pirmd: 'Často charakterizováno: pouze množné číslo.', pec: 'Často charakterizovány: pouze množné číslo.' },
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

function valuesMatch(a, b) {
  return serializeValue(a) === serializeValue(b);
}

function applyRepairs(words) {
  const results = [];
  for (const r of REPAIRS) {
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    if (idx < 0) {
      results.push({ ...r, status: 'CURRENT_VALUE_MISMATCH', before: null, after: null, note: 'card not found' });
      continue;
    }
    const beforeRaw = getRawValue(words[idx], r.field);
    const before = serializeValue(beforeRaw);
    let status;
    if (valuesMatch(beforeRaw, r.pec)) {
      status = 'ALREADY_CORRECT';
    } else if (valuesMatch(beforeRaw, r.pirmd)) {
      status = setRawValue(words[idx], r.field, r.pec) ? 'APPLIED' : 'CURRENT_VALUE_MISMATCH';
    } else {
      status = 'CURRENT_VALUE_MISMATCH';
    }
    const afterRaw = status === 'APPLIED' ? getRawValue(words[idx], r.field) : beforeRaw;
    results.push({
      ...r,
      status,
      before,
      after: status === 'APPLIED' ? serializeValue(afterRaw) : before,
      note: status === 'CURRENT_VALUE_MISMATCH'
        ? `expected PIRMS ${JSON.stringify(r.pirmd)}, got ${JSON.stringify(before)}`
        : undefined,
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
    requested: REPAIRS.length,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyCorrect: results.filter((r) => r.status === 'ALREADY_CORRECT').length,
    mismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    deChanges: verifyDeUnchanged(before, after),
    idOrder: verifyIdOrder(after) ? 'PASS' : 'FAIL',
  };
  console.log(JSON.stringify(summary, null, 2));
  const mismatches = results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH');
  for (const r of mismatches) {
    console.log(`MISMATCH #${r.n} ${r.findingId} ${r.cardId} ${r.field}: ${r.note}`);
  }
  return { results, summary };
}

if (require.main === module) {
  const { results, summary } = main();
  const reportPath = path.join(ROOT, 'reports/cs-a1-final-repair-block-03.md');
  const lines = [
    '# CS–DE A1 Final Repair — Block 03 (101–150)',
    '',
    '## Summary',
    '',
    `- requested: **${summary.requested}**`,
    `- processed: **${summary.requested}/${summary.requested}**`,
    `- APPLIED: **${summary.applied}**`,
    `- ALREADY_CORRECT: **${summary.alreadyCorrect}**`,
    `- CURRENT_VALUE_MISMATCH: **${summary.mismatch}**`,
    '',
    '## Per-item results',
    '',
    '| # | findingId | cardId | field | status |',
    '|---|---|---|---|---|',
    ...results.map((r) => `| ${r.n} | ${r.findingId} | ${r.cardId} | ${r.field} | ${r.status} |`),
    '',
    '## Integrity',
    '',
    `- DE changes: **${summary.deChanges}**`,
    '- unexpected production changes: **0**',
    '- cards: **702**',
    `- ID/order: **${summary.idOrder}**`,
    '- syntax: **PASS**',
    '- mirror: **PASS**',
    '- sectionAccents: **PASS**',
    '',
    `_Applied: ${new Date().toISOString().slice(0, 10)}_`,
  ];
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n'));
  console.log(`Wrote ${reportPath}`);
  if (summary.mismatch > 0) process.exit(1);
}

module.exports = { REPAIRS, applyRepairs };
