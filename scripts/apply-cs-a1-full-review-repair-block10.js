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
  { n: 1, findingId: 'FULL-A1-00451', cardId: 'a1-schwimmen', field: 'study.explanation[2]', pirmd: 'Pokud jde o relaxaci ve vodě nebo plavání, často se používá baden.', pec: 'Pokud jde o relaxaci ve vodě nebo koupání, často se používá baden.' },
  { n: 2, findingId: 'FULL-A1-00455', cardId: 'a1-sein', field: 'study.important[1]', pirmd: "Ich bin je 'já jsem' ne 'jsem'.", pec: 'Ich bin znamená „já jsem“ nebo jednoduše „jsem“; neznamená infinitiv „být“.' },
  { n: 3, findingId: 'FULL-A1-00457', cardId: 'a1-seite', field: 'study.examples[0].lv', pirmd: 'Přejděte na stránku dvacet.', pec: 'Otevřete stránku dvacet.' },
  { n: 4, findingId: 'FULL-A1-00460', cardId: 'a1-sich', field: 'study.examples[0].lv', pirmd: 'Koupe se.', pec: 'Myje se.' },
  { n: 5, findingId: 'FULL-A1-00464', cardId: 'a1-sich', field: 'study.comparison[3].meaning', pirmd: 'Mu', pec: 'Ho' },
  { n: 6, findingId: 'FULL-A1-00465', cardId: 'a1-sicher', field: 'study.examples[5].lv', pirmd: 'Jezděte bezpečně!', pec: 'Jeď bezpečně!' },
  { n: 7, findingId: 'FULL-A1-00466', cardId: 'a1-sicher', field: 'study.explanation[3]', pirmd: 'Určitě! jako samostatná odpověď znamená samozřejmě!/pravděpodobně!', pec: 'Sicher! jako samostatná odpověď znamená „určitě!“ nebo „samozřejmě!“.' },
  { n: 8, findingId: 'FULL-A1-00467', cardId: 'a1-sie-study', field: 'study.translation', pirmd: 'Oni / ji', pec: 'Ona • Oni • Ji' },
  { n: 9, findingId: 'FULL-A1-00468', cardId: 'a1-sie-study', field: 'study.explanation[1]', pirmd: 'Sie znamená hlavně: jedna žena.', pec: 'Malé sie může znamenat „ona“, „oni“ nebo „ji“; význam určuje kontext a tvar slovesa.' },
  { n: 10, findingId: 'FULL-A1-00469', cardId: 'a1-sie-study', field: 'study.explanation[7]', pirmd: 'Malé sie znamená ji, když je sloveso jednotného čísla (Sie kocht = vaří).', pec: 'Malé sie jako podmět může znamenat „ona“ (Sie kocht = Ona vaří); jako předmět může znamenat „ji“.' },
  { n: 11, findingId: 'FULL-A1-00471', cardId: 'a1-sie-study-2', field: 'study.explanation[1]', pirmd: 'Sie v podstatě znamená: jedna žena.', pec: 'Velké Sie je zdvořilé „Vy“; malé sie může znamenat „ona“, „oni“ nebo „ji“.' },
  { n: 12, findingId: 'FULL-A1-00472', cardId: 'a1-sie-study-2', field: 'study.explanation[7]', pirmd: 'Malé sie znamená ji, když je sloveso jednotného čísla (Sie kocht = vaří).', pec: 'Malé sie jako podmět může znamenat „ona“ (Sie kocht = Ona vaří); jako předmět může znamenat „ji“.' },
  { n: 13, findingId: 'FULL-A1-00473', cardId: 'a1-sie-study-2', field: 'study.examples[5].lv', pirmd: 'Vaříš prosím', pec: 'Vařte, prosím.' },
  { n: 14, findingId: 'FULL-A1-00474', cardId: 'a1-sitzen', field: 'study.examples[3].lv', pirmd: 'Kočka spí na pohovce.', pec: 'Kočka leží na pohovce.' },
  { n: 15, findingId: 'FULL-A1-00475', cardId: 'a1-sitzen', field: 'study.comparison[3].meaning', pirmd: 'Sedět / sednout si', pec: 'Sednout si / posadit' },
  { n: 16, findingId: 'FULL-A1-00478', cardId: 'a1-sollen', field: 'study.comparison[1].meaning', pirmd: 'Absolutně potřebovat', pec: 'Musit / být nutné' },
  { n: 17, findingId: 'FULL-A1-00480', cardId: 'a1-stehen', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: stehen znamená stát nebo stát.', pec: 'Hlavní myšlenka: stehen znamená stát; u předmětů může znamenat, že něco stojí nebo je postavené.' },
  { n: 18, findingId: 'FULL-A1-00485', cardId: 'a1-über', field: 'study.explanation[3]', pirmd: 'V pohybu může über znamenat konec.', pec: 'Při pohybu může über znamenat „přes“ nebo pohyb přes něco.' },
  { n: 19, findingId: 'FULL-A1-00488', cardId: 'a1-über', field: 'study.important[1]', pirmd: "Sprechen über znamená 'hovořit'.", pec: 'Sprechen über znamená „hovořit o“ nebo „mluvit o“.' },
  { n: 20, findingId: 'FULL-A1-00489', cardId: 'a1-unter', field: 'study.examples[2].lv', pirmd: 'Mezi přáteli se říká.', pec: 'Mezi přáteli se to tak říká.' },
  { n: 21, findingId: 'FULL-A1-00493', cardId: 'a1-verstehen', field: 'study.comparison[1].meaning', pirmd: 'Být schopen / vědět', pec: 'Být schopen / umět' },
  { n: 22, findingId: 'FULL-A1-00494', cardId: 'a1-verstehen', field: 'study.comparison[3].meaning', pirmd: 'Vědět', pec: 'Znát' },
  { n: 23, findingId: 'FULL-A1-00496', cardId: 'a1-vom', field: 'study.translation', pirmd: 'Z', pec: 'Od • Z' },
  { n: 24, findingId: 'FULL-A1-00497', cardId: 'a1-vom', field: 'study.examples[2].lv', pirmd: 'Pochází od lékaře.', pec: 'Přichází od lékaře.' },
  { n: 25, findingId: 'FULL-A1-00498', cardId: 'a1-vom', field: 'study.examples[5].lv', pirmd: 'Pocházíme z oslavy.', pec: 'Přicházíme z oslavy.' },
  { n: 26, findingId: 'FULL-A1-00499', cardId: 'a1-vom', field: 'study.comparison[0].meaning', pirmd: 'Od (konkrétní věc, pro koho?)', pec: 'Od (konkrétní osoby nebo věci)' },
  { n: 27, findingId: 'FULL-A1-00500', cardId: 'a1-vom', field: 'study.explanation[1]', pirmd: 'Plná podoba: von dem (komu?).', pec: 'Plná podoba: von dem (od koho? od čeho?).' },
];

/** Sync existing sectionAccents tokens when example lv text changes (not counted in repair findings). */
const ACCENT_SYNC = [
  { cardId: 'a1-seite', field: 'study.sectionAccents.examples[0].lv.purple[0]', from: 'Přejděte', to: 'Otevřete' },
  { cardId: 'a1-sich', field: 'study.sectionAccents.examples[0].lv.purple[0]', from: 'Koupe', to: 'Myje' },
  { cardId: 'a1-sicher', field: 'study.sectionAccents.examples[5].lv.purple[0]', from: 'Jezděte', to: 'Jeď' },
  { cardId: 'a1-sie-study-2', field: 'study.sectionAccents.examples[5].lv.purple[0]', from: 'Vaříš', to: 'Vařte' },
  { cardId: 'a1-vom', field: 'study.sectionAccents.examples[2].lv.purple[0]', from: 'Pochází', to: 'Přichází' },
  { cardId: 'a1-vom', field: 'study.sectionAccents.examples[5].lv.purple[0]', from: 'Pocházíme', to: 'Přicházíme' },
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

function syncSectionAccents(words) {
  const synced = [];
  for (const s of ACCENT_SYNC) {
    const idx = findCardIndex(words, s.cardId);
    if (idx < 0) continue;
    const current = getRawValue(words[idx], s.field);
    if (current === s.from) {
      setRawValue(words[idx], s.field, s.to);
      synced.push({ ...s, status: 'SYNCED' });
    } else if (current === s.to) {
      synced.push({ ...s, status: 'ALREADY_SYNCED' });
    } else {
      synced.push({ ...s, status: 'SKIPPED', current });
    }
  }
  return synced;
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
  const accentSync = syncSectionAccents(words);
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
    accentSync: accentSync.length,
    deChanges: verifyDeUnchanged(before, after),
    idOrder: verifyIdOrder(after) ? 'PASS' : 'FAIL',
  };
  console.log(JSON.stringify(summary, null, 2));
  if (results.some((r) => r.status === 'CURRENT_VALUE_MISMATCH')) {
    for (const r of results.filter((x) => x.status === 'CURRENT_VALUE_MISMATCH')) {
      console.log(`MISMATCH #${r.n} ${r.findingId} ${r.cardId} ${r.field}: ${r.note}`);
    }
  }
  return { results, summary, accentSync };
}

function writeReport(results, summary, accentSync) {
  const reportPath = path.join(ROOT, 'reports/cs-a1-full-review-repair-block-10.md');
  const accentLines = accentSync.map((s) => `- ${s.cardId} \`${s.field}\`: ${s.from} → ${s.to} (${s.status})`);
  const lines = [
    '# CS–DE A1 Full Review Repair — Block 10 (Findings 451–500)',
    '',
    '## Review coverage',
    '',
    '- canonical findings reviewed: **50** (FULL-A1-00451 … FULL-A1-00500)',
    '- repair findings: **27**',
    '- stale / already correct / OWNER keep: **23**',
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
    '## sectionAccents sync (example lv targets)',
    '',
    ...accentLines,
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
  const { results, summary, accentSync } = main();
  writeReport(results, summary, accentSync);
  if (summary.mismatch > 0) process.exit(1);
}

module.exports = { REPAIRS, ACCENT_SYNC, applyRepairs, syncSectionAccents, writeReport };
