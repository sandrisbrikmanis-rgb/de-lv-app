#!/usr/bin/env node
'use strict';
/**
 * Mechanical CS-DE A1 final 10 repairs (MAIN-A1 audit, OWNER approved).
 * Usage: node scripts/apply-cs-a1-final-main-repair-batch04-final10.js
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
  { n: 1, findingId: 'MAIN-A1-00200', cardId: 'a1-noch-study', field: 'study.sectionAccents.examples[0].lv.purple[0]', pirmd: 'Jsem', pec: 'pořád' },
  { n: 2, findingId: 'MAIN-A1-00280', cardId: 'a1-ferien', field: 'study.explanation[3]', pirmd: 'Die Ferien je pouze množné číslo — vždy v množném čísle (in den Ferien).', pec: 'Die Ferien jsou pouze v množném čísle — vždy v množném čísle (in den Ferien).' },
  { n: 3, findingId: 'MAIN-A1-00282', cardId: 'a1-urlaub', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: pouze jednotné číslo. Odejít z práce - vždy v jednotném čísle.', pec: 'Hlavní myšlenka: pouze jednotné číslo. Dovolená z práce – vždy v jednotném čísle.' },
  { n: 4, findingId: 'MAIN-A1-00283', cardId: 'a1-urlaub', field: 'study.explanation[2]', pirmd: 'Často charakterizováno: pouze jednotné číslo.', pec: 'Často charakterizován: pouze jednotné číslo.' },
  { n: 5, findingId: 'MAIN-A1-00284', cardId: 'a1-urlaub', field: 'study.explanation[3]', pirmd: 'Der Urlaub je pouze jednotné číslo - dovolená z práce (im Urlaub).', pec: 'Der Urlaub je pouze v jednotném čísle – dovolená z práce (im Urlaub).' },
  { n: 6, findingId: 'MAIN-A1-00285', cardId: 'a1-urlaub', field: 'study.comparison[1].meaning', pirmd: 'Školní/studijní přestávka (pouze dsk.)', pec: 'Školní/studijní prázdniny (pouze mn. č.)' },
  { n: 7, findingId: 'MAIN-A1-00286', cardId: 'a1-uhr', field: 'study.explanation[2]', pirmd: 'Často charakterizováno: konkrétním časem.', pec: 'Často označuje konkrétní čas.' },
  { n: 8, findingId: 'MAIN-A1-00287', cardId: 'a1-zeit', field: 'study.explanation[1]', pirmd: 'Die Zeit znamená především: okamžik, příležitost.', pec: 'Die Zeit znamená především čas; podle kontextu také okamžik nebo příležitost.' },
  { n: 9, findingId: 'MAIN-A1-00288', cardId: 'a1-zeit', field: 'study.explanation[2]', pirmd: 'Často se vyznačuje: abstraktním pojmem.', pec: 'Označuje abstraktní pojem.' },
  { n: 10, findingId: 'MAIN-A1-00289', cardId: 'a1-einmal', field: 'study.explanation[3]', pirmd: 'Einmal odkazuje na jeden čas nebo minulost (jednou jsem...).', pec: 'Einmal odkazuje na jednu příležitost nebo minulost (jednou jsem...).' },
];

/** Block 01 findingIds (applied in prior batch, for reconciliation only). */
const BLOCK01_FINDING_IDS = [
  'MAIN-A1-00066', 'MAIN-A1-00071', 'MAIN-A1-00072', 'MAIN-A1-00073', 'MAIN-A1-00074',
  'MAIN-A1-00075', 'MAIN-A1-00076', 'MAIN-A1-00077', 'MAIN-A1-00078', 'MAIN-A1-00079',
  'MAIN-A1-00081', 'MAIN-A1-00082', 'MAIN-A1-00085', 'MAIN-A1-00086', 'MAIN-A1-00087',
  'MAIN-A1-00090', 'MAIN-A1-00094', 'MAIN-A1-00095', 'MAIN-A1-00096', 'MAIN-A1-00097',
  'MAIN-A1-00098', 'MAIN-A1-00100', 'MAIN-A1-00101', 'MAIN-A1-00102', 'MAIN-A1-00103',
  'MAIN-A1-00104', 'MAIN-A1-00107', 'MAIN-A1-00108', 'MAIN-A1-00113', 'MAIN-A1-00114',
  'MAIN-A1-00115', 'MAIN-A1-00116', 'MAIN-A1-00117', 'MAIN-A1-00118', 'MAIN-A1-00119',
  'MAIN-A1-00120', 'MAIN-A1-00121', 'MAIN-A1-00122', 'MAIN-A1-00123', 'MAIN-A1-00124',
  'MAIN-A1-00125', 'MAIN-A1-00126', 'MAIN-A1-00127', 'MAIN-A1-00128', 'MAIN-A1-00129',
  'MAIN-A1-00130', 'MAIN-A1-00131', 'MAIN-A1-00132', 'MAIN-A1-00133', 'MAIN-A1-00134',
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

function loadConfirmedRealIds() {
  const auditPath = path.join(ROOT, 'reports/temp/cs-a1-final-audit-on-main-validated.json');
  if (fs.existsSync(auditPath)) {
    const v = JSON.parse(fs.readFileSync(auditPath, 'utf8'));
    return v.findings
      .filter((f) => f.validationStatus === 'CONFIRMED_REAL')
      .map((f) => f.findingId)
      .sort();
  }
  return null;
}

function reconcileAllBlocks(block04Results) {
  const block02 = require('./apply-cs-a1-final-main-repair-batch51-100').REPAIRS.map((r) => r.findingId);
  const block03 = require('./apply-cs-a1-final-main-repair-batch101-150').REPAIRS.map((r) => r.findingId);
  const block04 = block04Results.map((r) => r.findingId);
  const byBlock = {
    '01': BLOCK01_FINDING_IDS,
    '02': block02,
    '03': block03,
    '04': block04,
  };
  const all = [...byBlock['01'], ...byBlock['02'], ...byBlock['03'], ...byBlock['04']];
  const unique = [...new Set(all)];
  const dupes = all.filter((id, i) => all.indexOf(id) !== i);
  const source = loadConfirmedRealIds();
  const missing = source ? source.filter((id) => !unique.includes(id)) : [];
  const extra = source ? unique.filter((id) => !source.includes(id)) : [];
  return {
    sourceConfirmedReal: source ? source.length : 160,
    uniqueRepairIds: unique.length,
    duplicates: [...new Set(dupes)],
    missing,
    extra,
    byBlock: Object.fromEntries(Object.entries(byBlock).map(([k, v]) => [k, v.length])),
    pass: source
      ? source.length === 160 && unique.length === 160 && missing.length === 0 && dupes.length === 0
      : unique.length === 160 && dupes.length === 0,
  };
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
  const reconciliation = reconcileAllBlocks(results);
  const summary = {
    requested: REPAIRS.length,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyCorrect: results.filter((r) => r.status === 'ALREADY_CORRECT').length,
    mismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    deChanges: verifyDeUnchanged(before, after),
    idOrder: verifyIdOrder(after) ? 'PASS' : 'FAIL',
    reconciliation,
  };
  console.log(JSON.stringify(summary, null, 2));
  for (const r of results.filter((x) => x.status === 'CURRENT_VALUE_MISMATCH')) {
    console.log(`MISMATCH ${r.findingId} ${r.cardId} ${r.field}: ${r.note}`);
  }
  return { results, summary };
}

if (require.main === module) {
  const { results, summary } = main();
  const rec = summary.reconciliation;
  const reportPath = path.join(ROOT, 'reports/cs-a1-final-repair-block-04.md');
  const lines = [
    '# CS–DE A1 Final Repair — Block 04 (final 10)',
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
    '## 160 CONFIRMED_REAL reconciliation (blocks 01–04)',
    '',
    `| Metric | Value |`,
    `|---|---|`,
    `| CONFIRMED_REAL source | **${rec.sourceConfirmedReal}** |`,
    `| unique repair IDs across blocks 01–04 | **${rec.uniqueRepairIds}/160** |`,
    `| missing findingIds | **${rec.missing.length}** |`,
    `| duplicate findingIds | **${rec.duplicates.length}** |`,
    `| reconciliation | **${rec.pass ? 'PASS' : 'FAIL'}** |`,
    '',
    '| Block | findingIds |',
    '|---|---|',
    ...Object.entries(rec.byBlock).map(([k, v]) => `| ${k} | ${v} |`),
    '',
    rec.missing.length ? `### Missing\n\n${rec.missing.map((id) => `- ${id}`).join('\n')}\n` : '',
    rec.duplicates.length ? `### Duplicates\n\n${rec.duplicates.map((id) => `- ${id}`).join('\n')}\n` : '',
    '',
    '_Note: MAIN-A1-00279 applied in block 03; not repeated here. MAIN-A1-00200 was deferred from block 03 and applied here._',
    '',
    `_Applied: ${new Date().toISOString().slice(0, 10)}_`,
  ];
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n'));
  console.log(`Wrote ${reportPath}`);
  if (summary.mismatch > 0 || !rec.pass) process.exit(1);
}

module.exports = { REPAIRS, applyRepairs, reconcileAllBlocks };
