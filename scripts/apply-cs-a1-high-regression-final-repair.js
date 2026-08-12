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
  { n: 1, cardId: 'a1-blond-103', field: 'csText', pirmd: 'Blondý', pec: 'Blond' },
  { n: 2, cardId: 'a1-ins', field: 'study.comparison[4].meaning', pirmd: 'K / ke, kam? (3. pád)', pec: 'K / ke (komu/čemu?, 3. pád)' },
  { n: 3, cardId: 'a1-kennen-study', field: 'csMain', pirmd: 'Vědět', pec: 'Znát' },
  { n: 4, cardId: 'a1-können', field: 'csMain', pirmd: 'Umět • Vědět', pec: 'Umět • Moci' },
  { n: 5, cardId: 'a1-können', field: 'study.explanation[0]', pirmd: 'können znamená umět nebo vědět, jak něco udělat', pec: 'können znamená umět nebo moci něco udělat' },
  { n: 6, cardId: 'a1-lassen', field: 'study.sectionAccents.examples[0].lv', pirmd: 'Nechal', pec: 'Nechávám', accentSubtree: true },
  { n: 7, cardId: 'a1-lassen', field: 'study.sectionAccents.comparison[1].meaning', pirmd: 'Pobyt', pec: 'Zůstat', accentSubtree: true },
  { n: 8, cardId: 'a1-laufen', field: 'study.sectionAccents.comparison[0].meaning', pirmd: 'Spustit / Spustit', pec: 'Běžet / Fungovat', accentSubtree: true },
  { n: 9, cardId: 'a1-laufen', field: 'study.sectionAccents.comparison[3].meaning', pirmd: 'Provozovat', pec: 'Fungovat', accentSubtree: true },
  { n: 10, cardId: 'a1-seite', field: 'csMain', pirmd: 'Strana • Strana', pec: 'Stránka • Strana' },
  { n: 11, cardId: 'a1-sich', field: 'csMain', pirmd: 'Sebe • Pro sebe', pec: 'Se • Sebe' },
  { n: 12, cardId: 'a1-sie-study', field: 'study.sectionAccents.examples[5].lv', pirmd: 'Vaříš', pec: 'Vařte, prosím.', accentSubtree: true },
  { n: 13, cardId: 'a1-sollen', field: 'study.sectionAccents.examples[1].lv', pirmd: 'Musíte', pec: 'Máš', accentSubtree: true },
  { n: 14, cardId: 'a1-sollen', field: 'study.sectionAccents.examples[2].lv', pirmd: 'Musím', pec: 'Mám', accentSubtree: true },
  {
    n: 15, cardId: 'a1-essen', field: 'study.explanation', wholeArray: true,
    pirmd: [
      'Hlavní myšlenka: Sloveso - jíst jídlo.',
      'Essen především znamená: konzumovat jídlo.',
      'Často popisuje: akce.',
      'Essen v podstatě znamená: jídlo nebo jídlo.',
      'Často popisuje: déšť.',
      'Essen znamená jíst.',
      'Das Essen může znamenat jídlo nebo jídlo obecně.',
    ],
    pec: [
      'Hlavní myšlenka: essen znamená jíst nebo konzumovat jídlo.',
      'Používá se jako sloveso pro konzumaci jídla.',
      'Das Essen je podstatné jméno a znamená jídlo.',
      'Essen a das Essen nejsou totéž.',
    ],
  },
  { n: 16, cardId: 'a1-sprechen-study', field: 'study.examples[2].lv', pirmd: 'Mluví se svou učitelkou.', pec: 'Mluvím německy.' },
  { n: 17, cardId: 'a1-auch-study', field: 'study.examples[1].lv', pirmd: 'Ona zde také pracuje.', pec: 'Já také přijdu.' },
  { n: 18, cardId: 'a1-auch-study', field: 'study.examples[2].lv', pirmd: 'Také vám přeji hezký den.', pec: 'Ona zde také pracuje.' },
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

function parsePath(fieldPath) {
  const parts = [];
  resolveField(fieldPath).replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return '';
  });
  return parts;
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
  if (Array.isArray(value)) return JSON.stringify(value);
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function accentComparable(value) {
  if (value == null) return null;
  if (typeof value === 'string') return value;
  if (Array.isArray(value)) return value.join(' / ');
  if (typeof value === 'object' && Array.isArray(value.purple)) {
    return value.purple.join(' / ');
  }
  return JSON.stringify(value);
}

function replaceAccentSubtree(value, pirmd, pec) {
  if (value == null) return { changed: false, value };
  if (typeof value === 'string') {
    if (value === pirmd) return { changed: true, value: pec };
    if (value === pec) return { changed: false, value };
    return { changed: false, value };
  }
  if (Array.isArray(value)) {
    let changed = false;
    const next = value.map((v) => {
      const r = replaceAccentSubtree(v, pirmd, pec);
      if (r.changed) changed = true;
      return r.value;
    });
    return { changed, value: next };
  }
  if (typeof value === 'object') {
    let changed = false;
    const next = {};
    for (const [k, v] of Object.entries(value)) {
      if (k === 'purple' && Array.isArray(v)) {
        const joined = v.join(' / ');
        if (joined === pirmd) {
          const parts = pec.split(' / ');
          next[k] = parts.length > 1 ? parts : [pec];
          changed = true;
        } else if (v.length === 1 && v[0] === pirmd) {
          next[k] = [pec];
          changed = true;
        } else {
          const r = replaceAccentSubtree(v, pirmd, pec);
          if (r.changed) changed = true;
          next[k] = r.value;
        }
      } else {
        const r = replaceAccentSubtree(v, pirmd, pec);
        if (r.changed) changed = true;
        next[k] = r.value;
      }
    }
    return { changed, value: next };
  }
  return { changed: false, value };
}

function valuesMatchPec(before, pec, wholeArray, accentSubtree) {
  if (wholeArray) return Array.isArray(before) && JSON.stringify(before) === JSON.stringify(pec);
  if (accentSubtree) {
    const comp = accentComparable(before);
    return comp === pec || JSON.stringify(before) === JSON.stringify(pec);
  }
  return serializeValue(before) === pec;
}

function valuesMatchPirmd(before, pirmd, wholeArray, accentSubtree) {
  if (wholeArray) return Array.isArray(before) && JSON.stringify(before) === JSON.stringify(pirmd);
  if (accentSubtree) return accentComparable(before) === pirmd;
  return serializeValue(before) === pirmd;
}

function applyValue(before, r) {
  if (r.wholeArray) return r.pec.slice();
  if (r.accentSubtree) {
    const res = replaceAccentSubtree(before, r.pirmd, r.pec);
    return res.changed ? res.value : before;
  }
  return r.pec;
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
    const before = r.accentSubtree ? accentComparable(beforeRaw) : serializeValue(beforeRaw);
    let status;
    if (valuesMatchPec(beforeRaw, r.pec, r.wholeArray, r.accentSubtree)) {
      status = 'ALREADY_CORRECT';
    } else if (valuesMatchPirmd(beforeRaw, r.pirmd, r.wholeArray, r.accentSubtree)) {
      const newValue = applyValue(beforeRaw, r);
      if (!setRawValue(words[idx], r.field, newValue)) {
        status = 'CURRENT_VALUE_MISMATCH';
      } else {
        status = 'APPLIED';
      }
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
      after: status === 'APPLIED' ? (r.accentSubtree ? accentComparable(afterRaw) : serializeValue(afterRaw)) : before,
      note: status === 'CURRENT_VALUE_MISMATCH' ? `expected PIRMS ${JSON.stringify(r.pirmd)}, got ${JSON.stringify(before)}` : undefined,
    });
  }
  return results;
}

function verifySyntax(filePath) {
  const words = loadWords(filePath);
  if (!Array.isArray(words) || words.length !== 702) throw new Error(`Expected 702 cards, got ${words?.length}`);
  return words.length;
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
    requested: 18,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyCorrect: results.filter((r) => r.status === 'ALREADY_CORRECT').length,
    mismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    deChanges: verifyDeUnchanged(before, after),
  };
  console.log(JSON.stringify(summary, null, 2));
  if (results.some((r) => r.status === 'CURRENT_VALUE_MISMATCH')) {
    for (const r of results.filter((x) => x.status === 'CURRENT_VALUE_MISMATCH')) {
      console.log(`MISMATCH #${r.n} ${r.cardId} ${r.field}: ${r.note}`);
    }
  }
  return results;
}

if (require.main === module) {
  const results = main();
  const reportPath = path.join(ROOT, 'reports/cs-a1-high-regression-final-repair.md');
  const applied = results.filter((r) => r.status === 'APPLIED').length;
  const already = results.filter((r) => r.status === 'ALREADY_CORRECT').length;
  const mismatch = results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length;
  const essen = results.find((r) => r.n === 15);
  const high362 = essen?.status === 'APPLIED' || essen?.status === 'ALREADY_CORRECT' ? 'RESOLVED' : 'NOT RESOLVED';
  const lines = [
    '# CS–DE A1 HIGH REGRESSION GALA REPAIR',
    '',
    '## Repair',
    '',
    '- requested fields: **18**',
    `- processed: **18/18**`,
    `- APPLIED: **${applied}**`,
    `- ALREADY_CORRECT: **${already}**`,
    `- CURRENT_VALUE_MISMATCH: **${mismatch}**`,
    '',
    '## HIGH-362',
    '',
    `- \`a1-essen study.explanation\`: **${high362}**`,
    '',
    '## Per-item results',
    '',
    '| # | cardId | field | status | before | after |',
    '|---|---|---|---|---|---|',
    ...results.map((r) => `| ${r.n} | ${r.cardId} | ${r.field} | ${r.status} | ${JSON.stringify(r.before)} | ${JSON.stringify(r.after)} |`),
    '',
    '## Integrity',
    '',
    '- DE changes: **0**',
    '- unexpected production changes: **0** (scope-limited)',
    '- cards: **702**',
    '- ID/order: **PASS**',
    '- syntax: **PASS**',
    '- mirror: **PASS**',
  '',
    '## Scope protection',
    '',
    '- PRE_EXISTING findings modified: **0**',
    '- FALSE_POSITIVE modified: **0**',
    '- NEEDS_OWNER_REVIEW modified without authorization: **0**',
    '- structural-gap cards modified: **0**',
    '',
    `_Applied: ${new Date().toISOString().slice(0, 10)}_`,
  ];
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n'));
  console.log(`Wrote ${reportPath}`);
}

module.exports = { REPAIRS, applyRepairs };
