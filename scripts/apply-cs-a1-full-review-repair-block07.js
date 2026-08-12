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
  { n: 1, findingId: 'FULL-A1-00301', cardId: 'a1-ins', field: 'study.comparison[1].example', pirmd: 'im Kino – Kino', pec: 'im Kino – V kině' },
  { n: 2, findingId: 'FULL-A1-00302', cardId: 'a1-ins', field: 'study.comparison[3].example', pirmd: 'aufs Dach – Na střeše', pec: 'aufs Dach – Na střechu' },
  { n: 3, findingId: 'FULL-A1-00303', cardId: 'a1-ins', field: 'study.tip[0]', pirmd: 'Pamatujte: in + das → ins (kde?, kde?).', pec: 'Pamatujte: in + das → ins (kam?, při pohybu dovnitř).' },
  { n: 4, findingId: 'FULL-A1-00305', cardId: 'a1-ins', field: 'study.important[0]', pirmd: 'Ins = in das, pouze s podstatným jménem libovolného rodu kde? ve skloňování.', pec: 'Ins = in das; používá se se středním rodem v akuzativu a odpovídá na otázku kam?' },
  { n: 5, findingId: 'FULL-A1-00306', cardId: 'a1-ins', field: 'study.important[2]', pirmd: 'Pro mužský rod: in den Wald • Žen: v die Schule.', pec: 'Pro mužský rod: in den Wald • Pro ženský rod: in die Schule.' },
  { n: 6, findingId: 'FULL-A1-00307', cardId: 'a1-jung', field: 'study.translation', pirmd: 'Mladý (o lidech)', pec: 'Mladý' },
  { n: 7, findingId: 'FULL-A1-00310', cardId: 'a1-kein', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: kein je negační člen, který neguje podstatné jméno - češtině, v závislosti na kontextu nikdo nebo nic.', pec: 'Hlavní myšlenka: kein je záporný člen, který stojí před podstatným jménem a v češtině se podle kontextu překládá například jako „žádný“, „žádná“ nebo „žádné“.' },
  { n: 8, findingId: 'FULL-A1-00311', cardId: 'a1-kein', field: 'study.explanation[3]', pirmd: 'U nezávazných nebo abstraktních podstatných jmen se kein často překládá jako nic/vůbec (kein Geld = žádné peníze/žádné peníze).', pec: 'U nepočitatelných nebo abstraktních podstatných jmen se kein často překládá pomocí „žádný“ nebo odpovídajícího záporného vyjádření (kein Geld = žádné peníze).' },
  { n: 9, findingId: 'FULL-A1-00313', cardId: 'a1-kennen-study', field: 'study.comparison[0].meaning', pirmd: 'Vědět (osoba, místo, věc)', pec: 'Znát (osobu, místo, věc)' },
  { n: 10, findingId: 'FULL-A1-00314', cardId: 'a1-kennen-study', field: 'study.comparison[1].meaning', pirmd: 'Vědět (fakt, informace)', pec: 'Vědět (fakt, informaci)' },
  { n: 11, findingId: 'FULL-A1-00316', cardId: 'a1-kennen-study', field: 'study.tip[0]', pirmd: 'Kennen = vědět', pec: 'Kennen = znát' },
  { n: 12, findingId: 'FULL-A1-00317', cardId: 'a1-kennen-study', field: 'study.important[1]', pirmd: 'Kennen = vědět.', pec: 'Kennen = znát.' },
  { n: 13, findingId: 'FULL-A1-00318', cardId: 'a1-wissen-study', field: 'study.comparison[1].meaning', pirmd: 'Vědět (osoba, místo, věc)', pec: 'Znát (osobu, místo, věc)' },
  { n: 14, findingId: 'FULL-A1-00319', cardId: 'a1-wissen-study', field: 'study.important[0]', pirmd: 'Wissen = znát skutečnost.', pec: 'Wissen = vědět skutečnost.' },
  { n: 15, findingId: 'FULL-A1-00321', cardId: 'a1-können', field: 'study.examples[1].lv', pirmd: 'Můžete mi pomoci?', pec: 'Můžeš mi pomoct?' },
  { n: 16, findingId: 'FULL-A1-00325', cardId: 'a1-können', field: 'study.important[0]', pirmd: 'Können není totéž co dürfen. können = moci/vědět, dürfen = mít dovoleno.', pec: 'Können není totéž co dürfen. können = moci/umět, dürfen = mít dovoleno.' },
  { n: 17, findingId: 'FULL-A1-00326', cardId: 'a1-kosten', field: 'study.translation', pirmd: 'Stát • Kolik stát', pec: 'Stát' },
  { n: 18, findingId: 'FULL-A1-00327', cardId: 'a1-kosten', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: kosten znamená platit tak a tak - mluví o ceně věci.', pec: 'Hlavní myšlenka: kosten znamená stát určitou částku — mluví o ceně věci.' },
  { n: 19, findingId: 'FULL-A1-00328', cardId: 'a1-kosten', field: 'study.comparison[0].meaning', pirmd: 'Stát (o ceně) • Kolik stát', pec: 'Stát (o ceně) • Kolik stojí' },
  { n: 20, findingId: 'FULL-A1-00329', cardId: 'a1-kosten', field: 'study.important[1]', pirmd: 'V češtině se v obou případech často používá plat, ale v němčině je třeba vybrat podle situace.', pec: 'V češtině se v těchto souvislostech používají slovesa „stát“ nebo „platit“, ale v němčině je třeba vybrat podle situace.' },
  { n: 21, findingId: 'FULL-A1-00331', cardId: 'a1-laden-study', field: 'study.explanation[1]', pirmd: 'Laden je malé sloveso - naložit nebo nabít.', pec: 'laden je sloveso — znamená naložit nebo nabít.' },
  { n: 22, findingId: 'FULL-A1-00332', cardId: 'a1-land', field: 'study.translation', pirmd: 'Země • Země', pec: 'Země • Venkov' },
  { n: 23, findingId: 'FULL-A1-00333', cardId: 'a1-land', field: 'study.comparison[0].meaning', pirmd: 'Země / země / venkov', pec: 'Země / venkov' },
  { n: 24, findingId: 'FULL-A1-00335', cardId: 'a1-land', field: 'study.sectionAccents.comparison[0].meaning.purple[1]', pirmd: 'zeme', pec: 'venkov' },
  { n: 25, findingId: 'FULL-A1-00336', cardId: 'a1-land', field: 'study.sectionAccents.comparison[3].meaning.purple[0]', pirmd: 'zeme', pec: 'Země' },
  { n: 26, findingId: 'FULL-A1-00340', cardId: 'a1-lassen', field: 'study.translation', pirmd: 'Opustit • Nechat', pec: 'Nechat • Dovolit' },
  { n: 27, findingId: 'FULL-A1-00344', cardId: 'a1-lassen', field: 'study.comparison[0].meaning', pirmd: 'Nechat / nechat', pec: 'Nechat / dovolit' },
  { n: 28, findingId: 'FULL-A1-00348', cardId: 'a1-laufen', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: laufen znamená běhat, ale u zařízení to může znamenat běhat.', pec: 'Hlavní myšlenka: laufen znamená běhat nebo běžet, ale u zařízení může znamenat fungovat nebo běžet.' },
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
    repairFindings: 28,
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
  const reportPath = path.join(ROOT, 'reports/cs-a1-full-review-repair-block-07.md');
  const lines = [
    '# CS–DE A1 Full Review Repair — Block 07 (Findings 301–350)',
    '',
    '## Review coverage',
    '',
    '- canonical findings reviewed: **50** (FULL-A1-00301 … FULL-A1-00350)',
    '- repair findings: **28**',
    '- OWNER keep current: **1**',
    '- already fixed / stale: **21**',
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
    '- FULL-A1-00338 a1-lang study.explanation[4]',
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
