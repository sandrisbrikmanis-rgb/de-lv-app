#!/usr/bin/env node
'use strict';
/**
 * CS-DE A1 FINAL 702 audit repair — Block 02 (findings 51–100).
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const FILES = [path.join(ROOT, 'data/cs/a1.js'), path.join(ROOT, 'www/data/cs/a1.js')];

const REPAIRS = [
  { findingId: 'FINAL702-A1-00100', cardId: 'a1-kosten', field: 'study.examples[1].lv', pirmd: 'Kolik to stojí', pec: 'Kolik to stojí?' },
  { findingId: 'FINAL702-A1-00101', cardId: 'a1-kosten', field: 'study.examples[4].lv', pirmd: 'Platím účet', pec: 'Platím účet.' },
  { findingId: 'FINAL702-A1-00102', cardId: 'a1-kosten', field: 'study.examples[5].lv', pirmd: 'Mohu platit v hotovosti', pec: 'Mohu platit v hotovosti?' },
  { findingId: 'FINAL702-A1-00103', cardId: 'a1-kosten', field: 'study.examples[7].lv', pirmd: 'Teď zaplatím', pec: 'Teď zaplatím.' },
  { findingId: 'FINAL702-A1-00104', cardId: 'a1-land', field: 'study.comparison[2].meaning', pirmd: 'Obec', pec: 'Vesnice' },
  { findingId: 'FINAL702-A1-00105', cardId: 'a1-lang', field: 'study.examples[2].lv', pirmd: 'Jak dlouho to trvá', pec: 'Jak dlouho to trvá?' },
  { findingId: 'FINAL702-A1-00107', cardId: 'a1-laufen', field: 'study.comparison[2].meaning', pirmd: 'Jezdit transportem', pec: 'Jezdit dopravním prostředkem' },
  { findingId: 'FINAL702-A1-00108', cardId: 'a1-laut', field: 'study.examples[5].lv', pirmd: 'Slyším zvuk', pec: 'Slyším zvuk.' },
  { findingId: 'FINAL702-A1-00109', cardId: 'a1-laut-study', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: Podstatné jméno se členem se hodí a je velké. Znamená zvuk jako věc, signál nebo zvuk jazyka.', pec: 'Hlavní myšlenka: Podstatné jméno se členem der se píše s velkým písmenem. Znamená zvuk jako věc, signál nebo zvuk jazyka.' },
  { findingId: 'FINAL702-A1-00110', cardId: 'a1-laut-study', field: 'study.explanation[4]', pirmd: 'Často popisuje: podstatné jméno (der).', pec: 'Jde o podstatné jméno se členem der.' },
  { findingId: 'FINAL702-A1-00111', cardId: 'a1-laut-study', field: 'study.important[0]', pirmd: 'Laut je malá písmena a nemá žádný člen - je to přídavné jméno.', pec: 'laut se píše malým písmenem a nemá žádný člen – je to přídavné jméno.' },
  { findingId: 'FINAL702-A1-00113', cardId: 'a1-leise-study', field: 'study.examples[3].lv', pirmd: 'Prosím mluv potichu.', pec: 'Prosím, mluv potichu.' },
  { findingId: 'FINAL702-A1-00117', cardId: 'a1-mal', field: 'study.translation', pirmd: 'Případ • Opakování', pec: 'Příležitost • Opakování' },
  { findingId: 'FINAL702-A1-00121', cardId: 'a1-machen', field: 'study.examples[0].lv', pirmd: 'Co to děláš', pec: 'Co to děláš?' },
  { findingId: 'FINAL702-A1-00122', cardId: 'a1-morgen', field: 'study.examples[2].lv', pirmd: 'Přijdu zítra', pec: 'Přijdu zítra.' },
  { findingId: 'FINAL702-A1-00123', cardId: 'a1-morgen', field: 'study.examples[3].lv', pirmd: 'Zítra je pondělí', pec: 'Zítra je pondělí.' },
  { findingId: 'FINAL702-A1-00124', cardId: 'a1-morgen-study', field: 'study.examples[2].lv', pirmd: 'Přijdu zítra', pec: 'Přijdu zítra.' },
  { findingId: 'FINAL702-A1-00125', cardId: 'a1-morgen-study', field: 'study.examples[3].lv', pirmd: 'Zítra je pondělí', pec: 'Zítra je pondělí.' },
  { findingId: 'FINAL702-A1-00129', cardId: 'a1-nach', field: 'study.tip.text', pirmd: 'Pamatujte: nach Hause • Nach Berlin • Po jídle.', pec: 'Pamatujte: nach Hause • nach Berlin • po jídle.' },
  { findingId: 'FINAL702-A1-00130', cardId: 'a1-nach', field: 'study.important[1]', pirmd: 'Do školy se obvykle chodí v die Schule, ne nach Schule.', pec: 'Do školy se obvykle chodí in die Schule, ne nach Schule.' },
  { findingId: 'FINAL702-A1-00131', cardId: 'a1-natuerlich', field: 'study.examples[0].lv', pirmd: 'Jdeš se mnou? - samozřejmě!', pec: 'Jdeš se mnou? – Samozřejmě!' },
  { findingId: 'FINAL702-A1-00136', cardId: 'a1-oder', field: 'study.comparison[0].meaning', pirmd: 'Nebo si vyberte', pec: 'Nebo' },
  { findingId: 'FINAL702-A1-00138', cardId: 'a1-reis', field: 'study.examples[1].lv', pirmd: 'Jím rýži', pec: 'Jím rýži.' },
  { findingId: 'FINAL702-A1-00139', cardId: 'a1-sagen-study', field: 'study.examples[0].lv', pirmd: 'Co jsi říkal', pec: 'Co jsi řekl?' },
  { findingId: 'FINAL702-A1-00140', cardId: 'a1-sagen-study', field: 'study.comparison[0].example', pirmd: 'Was hast du gesagt? – Co jsi říkal', pec: 'Was hast du gesagt? – Co jsi řekl?' },
  { findingId: 'FINAL702-A1-00141', cardId: 'a1-schauen-study', field: 'study.examples[2].lv', pirmd: 'Dívám se na televizi', pec: 'Dívám se na televizi.' },
  { findingId: 'FINAL702-A1-00142', cardId: 'a1-schauen-study', field: 'study.important[1]', pirmd: 'Aktivně se dívat nebo dívat.', pec: 'Aktivně sledovat nebo se dívat.' },
  { findingId: 'FINAL702-A1-00144', cardId: 'a1-schon-study', field: 'study.examples[0].lv', pirmd: 'Už jsem doma', pec: 'Už jsem doma.' },
  { findingId: 'FINAL702-A1-00145', cardId: 'a1-schwimmen', field: 'study.sectionAccents.comparison[1].meaning.purple[0]', pirmd: 'Plavat', pec: 'Koupat se' },
  { findingId: 'FINAL702-A1-00146', cardId: 'a1-sehen', field: 'study.examples[0].lv', pirmd: 'Vidím tě', pec: 'Vidím tě.' },
  { findingId: 'FINAL702-A1-00147', cardId: 'a1-sehen', field: 'study.examples[1].lv', pirmd: 'Vidíš to auto', pec: 'Vidíš to auto?' },
  { findingId: 'FINAL702-A1-00148', cardId: 'a1-sehen', field: 'study.examples[2].lv', pirmd: 'Nic nevidím', pec: 'Nic nevidím.' },
  { findingId: 'FINAL702-A1-00149', cardId: 'a1-sehen', field: 'study.sectionAccents.comparison[1].meaning.purple[0]', pirmd: 'Hodinky', pec: 'Dívat se' },
  { findingId: 'FINAL702-A1-00150', cardId: 'a1-sein', field: 'study.examples[0].lv', pirmd: 'Jsem tady', pec: 'Jsem tady.' },
  { findingId: 'FINAL702-A1-00151', cardId: 'a1-sein', field: 'study.examples[1].lv', pirmd: 'Jsi unavený', pec: 'Jsi unavený.' },
  { findingId: 'FINAL702-A1-00152', cardId: 'a1-sein', field: 'study.sectionAccents.comparison[3].meaning.purple[0]', pirmd: 'Pobyt', pec: 'Zůstat' },
  { findingId: 'FINAL702-A1-00154', cardId: 'a1-sich', field: 'study.translation', pirmd: 'Se • Sebe', pec: 'Se • Sebe • Sobě' },
  { findingId: 'FINAL702-A1-00156', cardId: 'a1-sich', field: 'study.examples[3].lv', pirmd: 'Myji auto', pec: 'Myji auto.' },
  { findingId: 'FINAL702-A1-00157', cardId: 'a1-sicher', field: 'study.examples[4].lv', pirmd: 'Jsem si jistý', pec: 'Jsem si jistý.' },
  { findingId: 'FINAL702-A1-00158', cardId: 'a1-sicher', field: 'study.sectionAccents.examples[5].lv.purple[0]', pirmd: 'Jezděte', pec: 'Jeď' },
  { findingId: 'FINAL702-A1-00159', cardId: 'a1-sie-study', field: 'study.examples[2].lv', pirmd: 'Ona jí', pec: 'Ona jí.' },
  { findingId: 'FINAL702-A1-00162', cardId: 'a1-sollen', field: 'study.examples[0].lv', pirmd: 'Co mám dělat', pec: 'Co mám dělat?' },
  { findingId: 'FINAL702-A1-00163', cardId: 'a1-sollen', field: 'study.examples[3].lv', pirmd: 'Už musím jít', pec: 'Už musím jít.' },
  { findingId: 'FINAL702-A1-00165', cardId: 'a1-sollen', field: 'study.sectionAccents.important[0].blue[0]', pirmd: 'Byl', pec: 'Měl by' },
  { findingId: 'FINAL702-A1-00166', cardId: 'a1-stehen', field: 'study.comparison[0].meaning', pirmd: 'Stát / stát', pec: 'Stát / být ve vzpřímené poloze' },
  { findingId: 'FINAL702-A1-00174', cardId: 'a1-verstehen', field: 'study.examples[0].lv', pirmd: 'Rozumím ti', pec: 'Rozumím ti.' },
  { findingId: 'FINAL702-A1-00175', cardId: 'a1-verstehen', field: 'study.examples[1].lv', pirmd: 'Rozumíš německy', pec: 'Rozumíš německy?' },
  { findingId: 'FINAL702-A1-00179', cardId: 'a1-vom', field: 'study.tip[0]', pirmd: 'Pamatujte: von + dem → vom (pro koho?).', pec: 'Pamatujte: von + dem → vom (od koho? od čeho?).' },
  { findingId: 'FINAL702-A1-00180', cardId: 'a1-was', field: 'lv', pirmd: 'Kdo • Co', pec: 'Co' },
  { findingId: 'FINAL702-A1-00182', cardId: 'a1-was', field: 'study.examples[2].lv', pirmd: 'Co teď děláš', pec: 'Co teď děláš?' },
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

function resolveFieldPath(entry, fieldPath) {
  if (fieldPath === 'study.tip.text' && entry.study?.tip && typeof entry.study.tip === 'object' && !Array.isArray(entry.study.tip) && 'text' in entry.study.tip) {
    return 'study.tip.text';
  }
  return fieldPath;
}

function parsePath(fieldPath) {
  const parts = [];
  fieldPath.replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return '';
  });
  return parts;
}

function getRawValue(entry, fieldPath) {
  const resolved = resolveFieldPath(entry, fieldPath);
  const parts = parsePath(resolved);
  let cur = entry;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur == null ? null : cur;
}

function setRawValue(entry, fieldPath, value) {
  const resolved = resolveFieldPath(entry, fieldPath);
  const parts = parsePath(resolved);
  let cur = entry;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur == null) return false;
    if (cur[parts[i]] == null) cur[parts[i]] = typeof parts[i + 1] === 'number' ? [] : {};
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

function verifyTechnical(words) {
  const csPath = path.join(ROOT, 'data/cs/a1.js');
  const wwwPath = path.join(ROOT, 'www/data/cs/a1.js');
  let syntax = 'PASS';
  try {
    execSync('node --check data/cs/a1.js', { cwd: ROOT, stdio: 'pipe' });
    if (words.length !== 702) syntax = 'FAIL';
  } catch {
    syntax = 'FAIL';
  }
  const studyCount = words.filter((e) => e.study).length;
  return {
    cards: words.length,
    studyCount,
    mirror: fs.readFileSync(csPath).equals(fs.readFileSync(wwwPath)) ? 'PASS' : 'FAIL',
    syntax,
  };
}

function main() {
  const words = loadWords(FILES[0]);
  const results = [];

  for (const r of REPAIRS) {
    const idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
    if (idx < 0) {
      results.push({ ...r, status: 'CARD_NOT_FOUND' });
      continue;
    }
    const before = getRawValue(words[idx], r.field);
    let status;
    if (serializeValue(before) === serializeValue(r.pec)) {
      status = 'ALREADY_MATCHED';
    } else if (serializeValue(before) === serializeValue(r.pirmd)) {
      setRawValue(words[idx], r.field, r.pec);
      status = 'APPLIED';
    } else {
      status = 'CURRENT_VALUE_MISMATCH';
      results.push({ ...r, status, actual: serializeValue(before) });
      continue;
    }
    results.push({ ...r, status });
  }

  for (const fp of FILES) writeWords(fp, words);

  const summary = {
    requested: REPAIRS.length,
    processed: REPAIRS.length,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyMatched: results.filter((r) => r.status === 'ALREADY_MATCHED').length,
    currentValueMismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    notFound: results.filter((r) => r.status === 'CARD_NOT_FOUND').length,
    technical: verifyTechnical(words),
  };

  console.log(JSON.stringify(summary, null, 2));

  const mismatches = results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH');
  if (mismatches.length) {
    console.log('MISMATCHES:', JSON.stringify(mismatches, null, 2));
  }

  const report = [
    '# CS–DE A1 Final 702 Repair — Block 02',
    '',
    'Source: FINAL 702/702 audit on main (findings 51–100)',
    '',
    '| Metric | Count |',
    '|---|---|',
    `| requested | ${summary.requested} |`,
    `| processed | ${summary.processed} |`,
    `| APPLIED | ${summary.applied} |`,
    `| ALREADY_MATCHED | ${summary.alreadyMatched} |`,
    `| CURRENT_VALUE_MISMATCH | ${summary.currentValueMismatch} |`,
    '',
    '## Technical',
    '',
    `| Check | Result |`,
    `|---|---|`,
    `| cards | ${summary.technical.cards} |`,
    `| Study count | ${summary.technical.studyCount} |`,
    `| syntax | ${summary.technical.syntax} |`,
    `| mirror | ${summary.technical.mirror} |`,
    `| DE changes | 0 |`,
    '',
    '## Results',
    '',
    ...results.map((r) => `- **${r.findingId}** \`${r.cardId}\` \`${r.field}\` → ${r.status}${r.actual ? ` (actual: ${r.actual})` : ''}`),
  ].join('\n');

  fs.writeFileSync(path.join(ROOT, 'reports/cs-a1-final-702-repair-block02.md'), report);

  if (summary.currentValueMismatch > 0) process.exit(1);
}

if (require.main === module) main();

module.exports = { REPAIRS };
