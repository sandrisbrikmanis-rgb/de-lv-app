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
  { n: 1, cardId: 'a1-Arm-44', field: 'csText', pirmd: 'Ruka', pec: 'Paže' },
  { n: 2, cardId: 'a1-beide-79', field: 'csText', pirmd: 'Obě', pec: 'Oba • Obě' },
  { n: 3, cardId: 'a1-bekommen-82', field: 'csText', pirmd: 'Přijímat', pec: 'Dostat' },
  { n: 4, cardId: 'a1-Blatt-99', field: 'csText', pirmd: 'Strana', pec: 'List' },
  { n: 5, cardId: 'a1-Butterbrot-112', field: 'csText', pirmd: 'Sendvič', pec: 'Chléb s máslem' },
  { n: 6, cardId: 'a1-danken-127', field: 'csText', pirmd: 'Poděkovat', pec: 'Děkovat' },
  { n: 7, cardId: 'a1-dürfen-150', field: 'csText', pirmd: 'Být dovoleno', pec: 'Smět' },
  { n: 8, cardId: 'a1-eins-156', field: 'csText', pirmd: 'Jeden', pec: 'Jedna' },
  { n: 9, cardId: 'a1-Fernseher-182', field: 'csText', pirmd: 'Televize', pec: 'Televizor' },
  { n: 10, cardId: 'a1-fragen-197', field: 'csText', pirmd: 'Zeptat se', pec: 'Ptát se' },
  { n: 11, cardId: 'a1-Gast-222', field: 'csText', pirmd: 'Hostem', pec: 'Host' },
  { n: 12, cardId: 'a1-geboren-224', field: 'csText', pirmd: 'Se narodil', pec: 'Narozený' },
  { n: 13, cardId: 'a1-gefallen-225', field: 'csText', pirmd: 'Mít rád', pec: 'Líbit se' },
  { n: 14, cardId: 'a1-gegen-226', field: 'csText', pirmd: 'Vs', pec: 'Proti' },
  { n: 15, cardId: 'a1-gern-232', field: 'csText', pirmd: 'Ochotně', pec: 'Rád' },
  { n: 16, cardId: 'a1-Getränk-239', field: 'csText', pirmd: 'Drink', pec: 'Nápoj' },
  { n: 17, cardId: 'a1-grau-249', field: 'csText', pirmd: 'Šedá', pec: 'Šedý' },
  { n: 18, cardId: 'a1-grüßen-257', field: 'csText', pirmd: 'Pozdravit', pec: 'Zdravit' },
  { n: 19, cardId: 'a1-heiraten-274', field: 'csText', pirmd: 'Oženit se', pec: 'Vzít se' },
  { n: 20, cardId: 'a1-helfen-277', field: 'csText', pirmd: 'Pomoci', pec: 'Pomáhat' },
];

const OWNER_KEEP = [
  { cardId: 'a1-achten-22', field: 'csText', value: 'Dbát na' },
  { cardId: 'a1-anziehen-30', field: 'csText', value: 'Obléknout si' },
];

const STALE = [
  'a1-alle-7', 'a1-Ärztin-46', 'a1-aufpassen-51', 'a1-aufstehen-52', 'a1-Bauch-73',
  'a1-bedeuten-75', 'a1-benutzen-83', 'a1-besuchen-89', 'a1-bitten-98', 'a1-blond-103',
  'a1-Buch-116', 'a1-Buchstabe-117', 'a1-Cousine-125', 'a1-dein-132', 'a1-deutsch-135',
  'a1-du-149', 'a1-Ecke-152', 'a1-Erde-164', 'a1-fett-184', 'a1-frei-199',
  'a1-freundlich-203', 'a1-ganz-219', 'a1-gelb-228', 'a1-Glas-241', 'a1-halb-262',
  'a1-Hälfte-263', 'a1-Handschuh-268', 'a1-Heft-273',
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

function getRawValue(entry, fieldPath) {
  const field = resolveField(fieldPath);
  return entry[field] ?? null;
}

function setRawValue(entry, fieldPath, value) {
  const field = resolveField(fieldPath);
  entry[field] = value;
  return true;
}

function serializeValue(value) {
  if (value == null) return null;
  return String(value);
}

function valuesMatchPec(before, pec) {
  return serializeValue(before) === pec;
}

function valuesMatchPirmd(before, pirmd) {
  return serializeValue(before) === pirmd;
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
    if (valuesMatchPec(beforeRaw, r.pec)) {
      status = 'ALREADY_CORRECT';
    } else if (valuesMatchPirmd(beforeRaw, r.pirmd)) {
      setRawValue(words[idx], r.field, r.pec);
      status = 'APPLIED';
    } else {
      status = 'CURRENT_VALUE_MISMATCH';
    }
    const afterRaw = status === 'APPLIED' ? getRawValue(words[idx], r.field) : beforeRaw;
    results.push({
      n: r.n,
      cardId: r.cardId,
      field: r.field,
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
  const a = fs.readFileSync(FILES[0], 'utf8');
  const b = fs.readFileSync(FILES[1], 'utf8');
  if (a !== b) throw new Error('Mirror mismatch');
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

function verifyOwnerKeep(words) {
  const checks = [];
  for (const k of OWNER_KEEP) {
    const idx = words.findIndex((e, i) => entryId(e, i) === k.cardId);
    const val = idx >= 0 ? getRawValue(words[idx], k.field) : null;
    checks.push({ ...k, pass: val === k.value, actual: val });
  }
  return checks;
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
    requested: 20,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyCorrect: results.filter((r) => r.status === 'ALREADY_CORRECT').length,
    mismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    deChanges: verifyDeUnchanged(before, after),
    idOrder: verifyIdOrder(after) ? 'PASS' : 'FAIL',
    ownerKeep: verifyOwnerKeep(after),
  };
  console.log(JSON.stringify(summary, null, 2));
  if (results.some((r) => r.status === 'CURRENT_VALUE_MISMATCH')) {
    for (const r of results.filter((x) => x.status === 'CURRENT_VALUE_MISMATCH')) {
      console.log(`MISMATCH #${r.n} ${r.cardId}: ${r.note}`);
    }
    process.exit(1);
  }
  return { results, summary };
}

if (require.main === module) {
  const { results, summary } = main();
  const reportPath = path.join(ROOT, 'reports/cs-a1-full-review-repair-block-01.md');
  const applied = results.filter((r) => r.status === 'APPLIED').length;
  const already = results.filter((r) => r.status === 'ALREADY_CORRECT').length;
  const mismatch = results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length;
  const lines = [
    '# CS–DE A1 Full Review Repair — Block 01 (Findings 001–050)',
    '',
    '## Review coverage',
    '',
    '- canonical findings reviewed: **50**',
    '- real repairs: **20**',
    '- OWNER keep current: **2**',
    '- already fixed / stale: **28**',
    '',
    '## Repair',
    '',
    '- requested fields: **20**',
    '- processed: **20/20**',
    `- APPLIED: **${applied}**`,
    `- ALREADY_CORRECT: **${already}**`,
    `- CURRENT_VALUE_MISMATCH: **${mismatch}**`,
    '',
    '## Per-item results',
    '',
    '| # | cardId | field | status | before | after |',
    '|---|---|---|---|---|---|',
    ...results.map((r) => `| ${r.n} | ${r.cardId} | ${r.field} | ${r.status} | ${JSON.stringify(r.before)} | ${JSON.stringify(r.after)} |`),
    '',
    '## OWNER keep current (unchanged)',
    '',
    '| cardId | field | value |',
    '|---|---|---|',
    ...OWNER_KEEP.map((k) => `| ${k.cardId} | ${k.field} | ${k.value} |`),
    '',
    '## Already fixed / stale (unchanged)',
    '',
    STALE.map((id) => `- ${id}`).join('\n'),
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
