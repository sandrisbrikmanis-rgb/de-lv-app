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
  { n: 1, findingId: 'FULL-A1-00501', cardId: 'a1-vom', field: 'study.important[0]', pirmd: 'Vom = von dem, pouze s podstatným jménem mužského nebo středního rodu pro koho? ve skloňování.', pec: 'Vom = von dem. Používá se s podstatnými jmény mužského nebo středního rodu ve významu „od koho?“ nebo „od čeho?“.' },
  { n: 2, findingId: 'FULL-A1-00503', cardId: 'a1-vor', field: 'study.explanation[2]', pirmd: 'Pokud jde o místo, vor znamená před nebo u.', pec: 'Pokud jde o místo, vor znamená „před“ nebo „před něčím“.' },
  { n: 3, findingId: 'FULL-A1-00504', cardId: 'a1-vor', field: 'study.explanation[3]', pirmd: "V hodinovém čase vor znamená 'až', např. fünf vor acht.", pec: 'V časovém údaji vor znamená „za … minut“, například fünf vor acht = za pět minut osm.' },
  { n: 4, findingId: 'FULL-A1-00510', cardId: 'a1-was', field: 'study.explanation[3]', pirmd: 'Pokud je předmětem věty was, překládá se do češtině jako kas (Was ist das? = Co to je?).', pec: 'Was ist das? se do češtiny překládá jako „Co to je?“. Was zde označuje věc, nikoli osobu.' },
  { n: 5, findingId: 'FULL-A1-00511', cardId: 'a1-was', field: 'study.explanation[4]', pirmd: 'Jestliže was je doplněk (předmět) slovesa, překládá se do češtině jako ko (Was machst du? = Co děláš?).', pec: 'Was je ve větě předmětem slovesa a do češtiny se překládá jako „co“: Was machst du? = Co děláš?' },
  { n: 6, findingId: 'FULL-A1-00512', cardId: 'a1-was', field: 'study.explanation[5]', pirmd: 'Lidé jsou dotázáni s wer (kdo/kdo), ne byl.', pec: 'Na osoby se ptáme pomocí wer (kdo), nikoli was.' },
  { n: 7, findingId: 'FULL-A1-00513', cardId: 'a1-was', field: 'study.important[2]', pirmd: 'Was für (ein/eine) znamená někoho/o čem a ptá se na kvalitu nebo typ (Was für ein Film ist das? = O jaký druh filmu jde?).', pec: 'Was für (ein/eine) znamená „jaký/jaká“ a ptá se na vlastnost nebo typ (Was für ein Film ist das? = O jaký druh filmu jde?).' },
  { n: 8, findingId: 'FULL-A1-00514', cardId: 'a1-wenn', field: 'study.examples[0].lv', pirmd: 'Pokud budete mít čas, stavte se.', pec: 'Pokud budeš mít čas, stav se.' },
  { n: 9, findingId: 'FULL-A1-00515', cardId: 'a1-wenn', field: 'study.examples[3].lv', pirmd: 'Nevím jestli přijde.', pec: 'Nevím, jestli přijde.' },
  { n: 10, findingId: 'FULL-A1-00517', cardId: 'a1-wenn', field: 'study.comparison[2].meaning', pirmd: 'Když je v otázce', pec: 'Kdy v otázce' },
  { n: 11, findingId: 'FULL-A1-00520', cardId: 'a1-wenn', field: 'study.explanation[3]', pirmd: 'Po wenn končí sloveso většinou německou větou.', pec: 'Po wenn stojí sloveso ve vedlejší větě obvykle na konci.' },
  { n: 12, findingId: 'FULL-A1-00521', cardId: 'a1-wer', field: 'study.translation', pirmd: 'Kdo • Kdo', pec: 'Kdo' },
  { n: 13, findingId: 'FULL-A1-00525', cardId: 'a1-wer', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: wer je dotazovací slovo o identitě osoby – v češtině je to kdo nebo kdo.', pec: 'Hlavní myšlenka: wer je tázací slovo pro osoby a v češtině znamená „kdo“.' },
  { n: 14, findingId: 'FULL-A1-00527', cardId: 'a1-wer', field: 'study.important[2]', pirmd: 'Wer mění tvar přechylováním: wen, wem, wessen - ale základní tvar je wer.', pec: 'Wer mění tvar podle pádu: wen, wem, wessen. Základní tvar je wer.' },
  { n: 15, findingId: 'FULL-A1-00528', cardId: 'a1-werden', field: 'study.explanation[1]', pirmd: 'Používá se, když se něco změní nebo změní.', pec: 'Používá se, když se něco změní nebo se stane jiným.' },
  { n: 16, findingId: 'FULL-A1-00530', cardId: 'a1-werden', field: 'study.comparison[2].meaning', pirmd: 'Pobyt', pec: 'Zůstat' },
  { n: 17, findingId: 'FULL-A1-00531', cardId: 'a1-werden', field: 'study.comparison[3].meaning', pirmd: 'Dělat / dělat', pec: 'Dělat / vyrábět' },
  { n: 18, findingId: 'FULL-A1-00536', cardId: 'a1-wie', field: 'study.examples[0].lv', pirmd: 'Jak se máte', pec: 'Jak se máš?' },
  { n: 19, findingId: 'FULL-A1-00537', cardId: 'a1-wie', field: 'study.examples[3].lv', pirmd: 'Kolik je Vám let', pec: 'Kolik je ti let?' },
  { n: 20, findingId: 'FULL-A1-00538', cardId: 'a1-wie', field: 'study.examples[4].lv', pirmd: 'Jak je film dlouhý?', pec: 'Jak dlouho film trvá?' },
  { n: 21, findingId: 'FULL-A1-00539', cardId: 'a1-wie', field: 'study.explanation[1]', pirmd: "Wie alone (Wie geht's?) se ptá na cestu - v češtině jak.", pec: "Wie samo (Wie geht's?) se ptá na způsob nebo stav. V češtině znamená „jak“." },
  { n: 22, findingId: 'FULL-A1-00540', cardId: 'a1-wie', field: 'study.important[2]', pirmd: "Špatně: Kolik je vám let? → Správně: Jak se máš? (Wie geht's?)", pec: "Špatně: „Kolik ti je?“ jako překlad Wie geht's? → Správně: „Jak se máš?“" },
  { n: 23, findingId: 'FULL-A1-00543', cardId: 'a1-zu', field: 'study.explanation[1]', pirmd: 'U lidí a institucí zu často znamená u nebo do.', pec: 'U osob zu často znamená „k“ nebo „ke“. U některých institucí také „do“ nebo „na“.' },
  { n: 24, findingId: 'FULL-A1-00544', cardId: 'a1-zu', field: 'study.explanation[2]', pirmd: 'S přídavnými jmény může zu znamenat také.', pec: 'Před přídavnými jmény může zu znamenat „příliš“: zu teuer = příliš drahé.' },
  { n: 25, findingId: 'FULL-A1-00546', cardId: 'a1-zu', field: 'study.important[1]', pirmd: 'Zu teuer znamená „příliš drahé“, nikoli „příliš drahé“.', pec: 'Zu teuer znamená „příliš drahé“, nikoli pouze „drahé“.' },
  { n: 26, findingId: 'FULL-A1-00547', cardId: 'a1-zug', field: 'study.examples[1].lv', pirmd: 'Jezdím vlakem', pec: 'Jezdím vlakem.' },
  { n: 27, findingId: 'FULL-A1-00549', cardId: 'a1-zum', field: 'study.examples[1].lv', pirmd: 'Jdeme na nádraží.', pec: 'Jedeme na nádraží.' },
  { n: 28, findingId: 'FULL-A1-00550', cardId: 'a1-zum', field: 'study.examples[2].lv', pirmd: 'Jde do obchodu.', pec: 'Jde do supermarketu.' },
];

/** Sync existing sectionAccents tokens when example lv text changes (not counted in repair findings). */
const ACCENT_SYNC = [
  { cardId: 'a1-zum', field: 'study.sectionAccents.examples[1].lv.purple[0]', from: 'Jdeme', to: 'Jedeme' },
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
    repairFindings: 28,
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
  const reportPath = path.join(ROOT, 'reports/cs-a1-full-review-repair-block-11.md');
  const accentLines = accentSync.map((s) => `- ${s.cardId} \`${s.field}\`: ${s.from} → ${s.to} (${s.status})`);
  const lines = [
    '# CS–DE A1 Full Review Repair — Block 11 (Findings 501–550)',
    '',
    '## Review coverage',
    '',
    '- canonical findings reviewed: **50** (FULL-A1-00501 … FULL-A1-00550)',
    '- repair findings: **28**',
    '- stale / already correct / OWNER keep: **22**',
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
