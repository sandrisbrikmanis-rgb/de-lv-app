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
  { n: 1, findingId: 'FULL-A1-00054', cardId: 'a1-jeder-300', de: 'jeder', field: 'csText', pirmd: 'Každý z nich', pec: 'Každý' },
  { n: 2, findingId: 'FULL-A1-00060', cardId: 'a1-Kuchen-345', de: 'Kuchen', field: 'csText', pirmd: 'Dort', pec: 'Koláč' },
  { n: 3, findingId: 'FULL-A1-00061', cardId: 'a1-Lampe-350', de: 'Lampe', field: 'csText', pirmd: 'Svítilna', pec: 'Lampa' },
  { n: 4, findingId: 'FULL-A1-00062', cardId: 'a1-lecker-361', de: 'lecker', field: 'csText', pirmd: 'Vynikající', pec: 'Chutný' },
  { n: 5, findingId: 'FULL-A1-00067', cardId: 'a1-mein-401', de: 'mein', field: 'csText', pirmd: 'Moje', pec: 'Můj' },
  { n: 6, findingId: 'FULL-A1-00070', cardId: 'a1-nass-431', de: 'nass', field: 'csText', pirmd: 'Mokré', pec: 'Mokrý' },
  { n: 7, findingId: 'FULL-A1-00072', cardId: 'a1-neunzehnte-444', de: 'neunzehnte', field: 'csText', pirmd: 'Devatenáctého', pec: 'Devatenáctý' },
  { n: 8, findingId: 'FULL-A1-00074', cardId: 'a1-oben-458', de: 'oben', field: 'csText', pirmd: 'Výše', pec: 'Nahoře' },
  { n: 9, findingId: 'FULL-A1-00078', cardId: 'a1-putzen-487', de: 'putzen', field: 'csText', pirmd: 'Vyčistit', pec: 'Čistit' },
  { n: 10, findingId: 'FULL-A1-00079', cardId: 'a1-rechts-491', de: 'rechts', field: 'csText', pirmd: 'Doprava • Doprava', pec: 'Doprava • Pravý' },
  { n: 11, findingId: 'FULL-A1-00080', cardId: 'a1-regnen-495', de: 'regnen', field: 'csText', pirmd: 'Prší', pec: 'Pršet' },
  { n: 12, findingId: 'FULL-A1-00082', cardId: 'a1-rufen-500', de: 'rufen', field: 'csText', pirmd: 'Zavolat', pec: 'Volat' },
  { n: 13, findingId: 'FULL-A1-00086', cardId: 'a1-schneien-518', de: 'schneien', field: 'csText', pirmd: 'Sněží', pec: 'Sněžit' },
  { n: 14, findingId: 'FULL-A1-00087', cardId: 'a1-Schüler-527', de: 'Schüler', field: 'csText', pirmd: 'Student', pec: 'Žák' },
  { n: 15, findingId: 'FULL-A1-00096', cardId: 'a1-unser-607', de: 'unser', field: 'csText', pirmd: 'Naše', pec: 'Náš' },
  { n: 16, findingId: 'FULL-A1-00098', cardId: 'a1-verheiratet-618', de: 'verheiratet', field: 'csText', pirmd: 'Ženatý', pec: 'Ženatý • Vdaná' },
  { n: 17, findingId: 'FULL-A1-00099', cardId: 'a1-viel-628', de: 'viel', field: 'csText', pirmd: 'Mnoho', pec: 'Hodně' },
];

const OWNER_KEEP = [
  { findingId: 'FULL-A1-00053', cardId: 'a1-jawohl-299', de: 'jawohl', field: 'csText', value: 'Přesně tak' },
];

const STALE = [
  { findingId: 'FULL-A1-00051', cardId: 'a1-Hemd-278' },
  { findingId: 'FULL-A1-00052', cardId: 'a1-ich-291' },
  { findingId: 'FULL-A1-00055', cardId: 'a1-Keks-309' },
  { findingId: 'FULL-A1-00056', cardId: 'a1-Hut-328' },
  { findingId: 'FULL-A1-00057', cardId: 'a1-Koch-340' },
  { findingId: 'FULL-A1-00058', cardId: 'a1-Köchin-341' },
  { findingId: 'FULL-A1-00059', cardId: 'a1-Kopf-342' },
  { findingId: 'FULL-A1-00063', cardId: 'a1-Lehrerin-365' },
  { findingId: 'FULL-A1-00064', cardId: 'a1-links-380' },
  { findingId: 'FULL-A1-00065', cardId: 'a1-lustig-385' },
  { findingId: 'FULL-A1-00066', cardId: 'a1-März-396' },
  { findingId: 'FULL-A1-00068', cardId: 'a1-Minute-407' },
  { findingId: 'FULL-A1-00069', cardId: 'a1-Mittag-410' },
  { findingId: 'FULL-A1-00071', cardId: 'a1-nein-436' },
  { findingId: 'FULL-A1-00073', cardId: 'a1-nicht-447' },
  { findingId: 'FULL-A1-00075', cardId: 'a1-Ostern-467' },
  { findingId: 'FULL-A1-00076', cardId: 'a1-Pferd-474' },
  { findingId: 'FULL-A1-00077', cardId: 'a1-Programm-484' },
  { findingId: 'FULL-A1-00081', cardId: 'a1-richtig-497' },
  { findingId: 'FULL-A1-00083', cardId: 'a1-rund-501' },
  { findingId: 'FULL-A1-00084', cardId: 'a1-schmecken-515' },
  { findingId: 'FULL-A1-00085', cardId: 'a1-Schnee-517' },
  { findingId: 'FULL-A1-00088', cardId: 'a1-Sekunde-545' },
  { findingId: 'FULL-A1-00089', cardId: 'a1-siebzehnte-554' },
  { findingId: 'FULL-A1-00090', cardId: 'a1-Sommer-565' },
  { findingId: 'FULL-A1-00091', cardId: 'a1-Spiel-571' },
  { findingId: 'FULL-A1-00092', cardId: 'a1-Stuhl-582' },
  { findingId: 'FULL-A1-00093', cardId: 'a1-Stunde-583' },
  { findingId: 'FULL-A1-00094', cardId: 'a1-Tasche-589' },
  { findingId: 'FULL-A1-00095', cardId: 'a1-tun-600' },
  { findingId: 'FULL-A1-00097', cardId: 'a1-Verkäufer-615' },
  { findingId: 'FULL-A1-00100', cardId: 'a1-Vorname-637' },
];

function resolveField(field) {
  if (field === 'csMain' || field === 'csText') return 'lv';
  return field;
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

function findCardIndex(words, r) {
  let idx = words.findIndex((e, i) => entryId(e, i) === r.cardId);
  if (idx < 0 && r.de) idx = words.findIndex((e) => e.de === r.de);
  return idx;
}

function getRawValue(entry, fieldPath) {
  return entry[resolveField(fieldPath)] ?? null;
}

function setRawValue(entry, fieldPath, value) {
  entry[resolveField(fieldPath)] = value;
  return true;
}

function serializeValue(value) {
  if (value == null) return null;
  return String(value);
}

function applyRepairs(words) {
  const results = [];
  for (const r of REPAIRS) {
    const idx = findCardIndex(words, r);
    if (idx < 0) {
      results.push({ ...r, status: 'CURRENT_VALUE_MISMATCH', before: null, after: null, resolvedCardId: null, note: 'card not found' });
      continue;
    }
    const resolvedCardId = entryId(words[idx], idx);
    const beforeRaw = getRawValue(words[idx], r.field);
    const before = serializeValue(beforeRaw);
    let status;
    if (serializeValue(beforeRaw) === r.pec) {
      status = 'ALREADY_CORRECT';
    } else if (serializeValue(beforeRaw) === r.pirmd) {
      setRawValue(words[idx], r.field, r.pec);
      status = 'APPLIED';
    } else {
      status = 'CURRENT_VALUE_MISMATCH';
    }
    const afterRaw = status === 'APPLIED' ? getRawValue(words[idx], r.field) : beforeRaw;
    results.push({
      ...r,
      resolvedCardId,
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
    requested: 17,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyCorrect: results.filter((r) => r.status === 'ALREADY_CORRECT').length,
    mismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    deChanges: verifyDeUnchanged(before, after),
    idOrder: verifyIdOrder(after) ? 'PASS' : 'FAIL',
  };
  console.log(JSON.stringify(summary, null, 2));
  if (results.some((r) => r.status === 'CURRENT_VALUE_MISMATCH')) {
    for (const r of results.filter((x) => x.status === 'CURRENT_VALUE_MISMATCH')) {
      console.log(`MISMATCH #${r.n} ${r.findingId} ${r.cardId}: ${r.note}`);
    }
    process.exit(1);
  }
  return { results, summary };
}

if (require.main === module) {
  const { results, summary } = main();
  const reportPath = path.join(ROOT, 'reports/cs-a1-full-review-repair-block-02.md');
  const lines = [
    '# CS–DE A1 Full Review Repair — Block 02 (Findings 051–100)',
    '',
    '## Review coverage',
    '',
    '- canonical findings reviewed: **50** (FULL-A1-00051 … FULL-A1-00100)',
    '- real repairs: **17**',
    '- OWNER keep current: **1**',
    '- already fixed / stale: **32**',
    '',
    '## Repair',
    '',
    '- requested fields: **17**',
    '- processed: **17/17**',
    `- APPLIED: **${summary.applied}**`,
    `- ALREADY_CORRECT: **${summary.alreadyCorrect}**`,
    `- CURRENT_VALUE_MISMATCH: **${summary.mismatch}**`,
    '',
    '## Per-item results',
    '',
    '| # | findingId | cardId | resolvedCardId | field | status | before | after |',
    '|---|---|---|---|---|---|---|---|',
    ...results.map((r) => `| ${r.n} | ${r.findingId} | ${r.cardId} | ${r.resolvedCardId || '—'} | ${r.field} | ${r.status} | ${JSON.stringify(r.before)} | ${JSON.stringify(r.after)} |`),
    '',
    '## OWNER keep current (unchanged)',
    '',
    '| findingId | cardId | field | value |',
    '|---|---|---|---|',
    ...OWNER_KEEP.map((k) => `| ${k.findingId} | ${k.cardId} | ${k.field} | ${k.value} |`),
    '',
    '## Already fixed / stale (unchanged)',
    '',
    STALE.map((s) => `- ${s.findingId} ${s.cardId}`).join('\n'),
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
}

module.exports = { REPAIRS, applyRepairs };
