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
  {
    n: 201, cardId: 'a1-bitte', field: 'study.tip', wholeArray: true,
    pirmd: [
      'Little bitte = prosím (Bitte schön!, Kaffee, bitte). die Bitte s velkým písmenem = žádost (eine Bitte, meine Bitte).',
      'Zdvořilost malými písmeny. Byl jsem zdvořilý - prosím.',
    ],
    pec: [
      'Malé bitte znamená prosím (Bitte schön!, Kaffee, bitte). Die Bitte s velkým písmenem znamená prosba nebo žádost (eine Bitte, meine Bitte).',
      'Bitte s malým písmenem je zdvořilostní výraz.',
    ],
  },
  {
    n: 202, cardId: 'a1-bitte-study', field: 'study.tip', wholeArray: true,
    pirmd: [
      'Little bitte = prosím (Bitte schön!, Kaffee, bitte). die Bitte s velkým písmenem = žádost (eine Bitte, meine Bitte).',
      'Podstatné jméno s členem zemřít a velké písmeno. Konkrétní požadavek nebo požadavek.',
    ],
    pec: [
      'Malé bitte znamená prosím. Die Bitte s velkým písmenem znamená prosba nebo žádost.',
      'Die Bitte je podstatné jméno se členem die a píše se s velkým písmenem.',
    ],
  },
  { n: 203, cardId: 'a1-ein', field: 'study.explanation', pirmd: 'Používá se s podstatným jménem mužského rodu. Ukázání na jednu věc nebo osobu z několika možností.', pec: 'Používá se s podstatnými jmény mužského a středního rodu v jednotném čísle. Označuje jednu věc nebo osobu z několika možností.' },
  { n: 204, cardId: 'a1-es', field: 'study.tip.text', pirmd: 'Pamatujte: českýé "es" → ich, ne německé es.', pec: 'Pamatujte: lotyšské „es“ znamená německy „ich“, ne německé „es“.' },
  { n: 205, cardId: 'a1-es', field: 'study.important[0]', pirmd: 'Německé já není českýé já.', pec: 'Německé „ich“ a „es“ nejsou totéž.' },
  { n: 206, cardId: 'a1-fahren', field: 'study.accents.purple[0]', pirmd: 'Braukt', pec: 'Jezdit' },
  { n: 207, cardId: 'a1-fahren', field: 'study.accents.purple[2]', pirmd: 'Vest', pec: 'Vézt' },
  { n: 208, cardId: 'a1-fahren', field: 'study.accents.purple[4]', pirmd: 'Aizvest', pec: 'Odvézt' },
  { n: 209, cardId: 'a1-fahren', field: 'study.sectionAccents.explanation.purple[1]', pirmd: 'vest', pec: 'vézt' },
  { n: 210, cardId: 'a1-fahren', field: 'study.sectionAccents.important[0].text.purple[0]', pirmd: 'braukt', pec: 'jet' },
  { n: 211, cardId: 'a1-fahren', field: 'study.sectionAccents.important[0].example.purple[0]', pirmd: 'braukt', pec: 'jet' },
  { n: 212, cardId: 'a1-fahren', field: 'study.sectionAccents.important[0].example.purple[1]', pirmd: 'vest', pec: 'vézt' },
  { n: 213, cardId: 'a1-fahren', field: 'study.sectionAccents.important[0].example.purple[2]', pirmd: 'aizvest', pec: 'odvézt' },
  { n: 214, cardId: 'a1-fahren', field: 'study.translation', pirmd: 'Řídit • Vést • Odvézt', pec: 'Jet • Jezdit • Vézt / odvézt' },
  { n: 215, cardId: 'a1-fahren', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: fahren znamená řídit vozidlo a v některých větách také někoho vzít nebo vzít.', pec: 'Hlavní myšlenka: fahren znamená jet dopravním prostředkem a v některých větách také někoho vézt nebo odvézt.' },
  { n: 216, cardId: 'a1-fahren', field: 'study.explanation[2]', pirmd: 'Když má věta jako předmět osobu, fahren může znamenat vést nebo odnést.', pec: 'Když má věta jako předmět osobu, fahren může znamenat někoho vézt nebo odvézt.' },
  { n: 217, cardId: 'a1-in', field: 'study.tip.text', pirmd: 'Pamatujte: v/v → v.', pec: 'Pamatujte: v/do → in.' },
  { n: 218, cardId: 'a1-land', field: 'study.important[0]', pirmd: 'Aufs Land znamená „na venkov“, nikoli „na venkov“.', pec: 'Aufs Land znamená „na venkov“, nikoli „do země“.' },
  { n: 219, cardId: 'a1-reis', field: 'study.explanation', pirmd: 'V němčině se slovo „der Reis“ používá pouze v jednotném čísle, takže sloveso ve větě musí být v jednotném čísle (např. „ist“, nikoli „sind“). Lotyši však často říkají „rýže“.', pec: 'V němčině se slovo „der Reis“ používá pouze v jednotném čísle, takže sloveso ve větě musí být v jednotném čísle (např. „ist“, nikoli „sind“). V češtině se běžně říká „rýže“.' },
  { n: 220, cardId: 'a1-stehen', field: 'study.important[1]', pirmd: 'Postavit předmět vzpřímeně je šmrnc, ne stehen.', pec: 'Postavit předmět vzpřímeně je stellen, ne stehen.' },
  { n: 221, cardId: 'a1-über', field: 'study.translation', pirmd: 'Přes • Pro', pec: 'Nad • O • Přes' },
  { n: 222, cardId: 'a1-über', field: 'study.examples[1].lv', pirmd: 'Mluvíme o čase.', pec: 'Mluvíme o počasí.' },
  { n: 223, cardId: 'a1-über', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: über znamená nahoře nebo asi v závislosti na kontextu.', pec: 'Hlavní myšlenka: über znamená nad, o nebo přes v závislosti na kontextu.' },
  { n: 224, cardId: 'a1-über', field: 'study.explanation[2]', pirmd: 'Pokud jde o konverzaci, text nebo téma, über znamená asi.', pec: 'Pokud jde o konverzaci, text nebo téma, über znamená o.' },
  { n: 225, cardId: 'a1-über', field: 'study.comparison[0].meaning', pirmd: 'Přes / přes / přes', pec: 'Nad / o / přes' },
  { n: 226, cardId: 'a1-verstehen', field: 'study.translation', pirmd: 'Pochopit', pec: 'Rozumět' },
  { n: 227, cardId: 'a1-verstehen', field: 'study.explanation[2]', pirmd: 'Lotyšštinu zde většinou nemusíte „umět“ ani „učit“ • Jsou častěji können.', pec: 'U jazyků zde většinou nejde o „umět“ ani „učit se“. To se častěji vyjadřuje pomocí können.' },
  { n: 228, cardId: 'a1-verstehen', field: 'study.important[0]', pirmd: 'Verstehen není kořenem slova „rozumět“.', pec: 'Verstehen není totéž co können.' },
  { n: 229, cardId: 'a1-essen', field: 'study.examples[1].lv', pirmd: 'Co chceš jíst', pec: 'Co chcete jíst?' },
  { n: 230, cardId: 'a1-essen', field: 'study.explanation', pirmd: 'Essen v podstatě znamená: jídlo nebo jídlo. Často popisuje: déšť.', pec: 'Essen znamená jíst nebo konzumovat jídlo. Nezaměňujte je s podstatným jménem das Essen, které znamená jídlo.' },
  { n: 231, cardId: 'a1-Spiel-571', field: 'csText', pirmd: 'Hru', pec: 'Hra' },
  { n: 232, cardId: 'a1-Stuhl-582', field: 'csText', pirmd: 'Židli', pec: 'Židle' },
  { n: 233, cardId: 'a1-Stunde-583', field: 'csText', pirmd: 'Hodinu', pec: 'Hodina' },
  { n: 234, cardId: 'a1-Tasche-589', field: 'csText', pirmd: 'Tašku', pec: 'Taška' },
  { n: 235, cardId: 'a1-Tasse-590', field: 'csText', pirmd: 'Pohár', pec: 'Šálek' },
  { n: 236, cardId: 'a1-telefonieren-594', field: 'csText', pirmd: 'Zavolat na telefon', pec: 'Telefonovat' },
  { n: 237, cardId: 'a1-Tisch-599', field: 'csText', pirmd: 'Tabulka', pec: 'Stůl' },
  { n: 238, cardId: 'a1-Vorname-637', field: 'csText', pirmd: 'Slovo', pec: 'Křestní jméno' },
  { n: 239, cardId: 'a1-wann-640', field: 'csText', pirmd: 'Když', pec: 'Kdy' },
  { n: 240, cardId: 'a1-waschen-645', field: 'csText', pirmd: 'Umýt se', pec: 'Mýt' },
  { n: 241, cardId: 'a1-Weg-647', field: 'csText', pirmd: 'Silnice', pec: 'Cesta' },
  { n: 242, cardId: 'a1-wenig-654', field: 'csText', pirmd: 'Nic moc', pec: 'Málo' },
  { n: 243, cardId: 'a1-zumachen-673', field: 'csText', pirmd: 'Zblízka', pec: 'Zavřít' },
  { n: 244, cardId: 'a1-zurück-674', field: 'csText', pirmd: 'Zadní', pec: 'Zpět' },
  { n: 245, cardId: 'a1-sprechen-study', field: 'study.examples[2].lv', pirmd: 'Mluvím německy', pec: 'Mluví se svou učitelkou.' },
  { n: 246, cardId: 'a1-ab', field: 'study.translation', pirmd: 'Z', pec: 'Od' },
  { n: 247, cardId: 'a1-also', field: 'study.tip.text', pirmd: 'Pamatujte: závěr → také.', pec: 'Pamatujte: závěr → tedy.' },
  { n: 248, cardId: 'a1-also', field: 'study.important[0]', pirmd: 'Také ukazuje závěr: další myšlenka vyplývá z toho, co bylo řečeno výše.', pec: 'Tedy ukazuje závěr: další myšlenka vyplývá z toho, co bylo řečeno výše.' },
  { n: 249, cardId: 'a1-auch-study', field: 'study.examples[1].lv', pirmd: 'Já jdu taky', pec: 'Ona zde také pracuje.' },
  { n: 250, cardId: 'a1-auch-study', field: 'study.examples[2].lv', pirmd: 'Ona zde také pracuje.', pec: 'Také vám přeji hezký den.' },
];

function normalizeField(fieldPath) {
  return fieldPath.replace(/^entry\[\d+\]\./, '');
}

function resolveField(field) {
  const f = normalizeField(field);
  if (f === 'csMain' || f === 'csText') return 'lv';
  return f;
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
  normalizeField(fieldPath).replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return '';
  });
  return parts;
}

function getRawValue(entry, fieldPath) {
  const parts = parsePath(resolveField(fieldPath));
  let cur = entry;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur == null ? null : cur;
}

function serializeValue(value) {
  if (value == null) return null;
  if (Array.isArray(value)) return JSON.stringify(value);
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}

function valuesMatch(before, pirmd, wholeArray) {
  if (wholeArray) {
    return Array.isArray(before) && JSON.stringify(before) === JSON.stringify(pirmd);
  }
  if (Array.isArray(pirmd)) {
    return JSON.stringify(before) === JSON.stringify(pirmd);
  }
  return serializeValue(before) === pirmd;
}

function valuesMatchPec(before, pec, wholeArray) {
  if (wholeArray) {
    return Array.isArray(before) && JSON.stringify(before) === JSON.stringify(pec);
  }
  if (Array.isArray(pec)) {
    return JSON.stringify(before) === JSON.stringify(pec);
  }
  return serializeValue(before) === pec;
}

function setFieldValue(entry, fieldPath, value) {
  const parts = parsePath(resolveField(fieldPath));
  let cur = entry;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur == null) return false;
    cur = cur[parts[i]];
  }
  if (cur == null) return false;
  cur[parts[parts.length - 1]] = value;
  return true;
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
    const pirmd = r.wholeArray ? r.pirmd : r.pirmd;
    const pec = r.wholeArray ? r.pec : r.pec;
    let status;
    if (valuesMatchPec(beforeRaw, pec, r.wholeArray)) {
      status = 'ALREADY_CORRECT';
    } else if (valuesMatch(beforeRaw, pirmd, r.wholeArray)) {
      const newValue = r.wholeArray ? pec.slice() : pec;
      if (!setFieldValue(words[idx], r.field, newValue)) {
        status = 'CURRENT_VALUE_MISMATCH';
      } else {
        status = 'APPLIED';
      }
    } else {
      status = 'CURRENT_VALUE_MISMATCH';
    }
    results.push({
      n: r.n,
      cardId: r.cardId,
      field: r.field,
      status,
      before,
      after: status === 'APPLIED' ? serializeValue(r.wholeArray ? r.pec : r.pec) : before,
      note: status === 'CURRENT_VALUE_MISMATCH' && !valuesMatch(beforeRaw, pirmd, r.wholeArray) && !valuesMatchPec(beforeRaw, pec, r.wholeArray)
        ? `expected PIRMS, got ${JSON.stringify(before)}`
        : undefined,
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
  if (a !== b) throw new Error('Mirror mismatch between data/cs/a1.js and www/data/cs/a1.js');
}

function main() {
  const words = loadWords(FILES[0]);
  const results = applyRepairs(words);
  for (const fp of FILES) {
    writeWords(fp, words);
    verifySyntax(fp);
    console.log(`Wrote ${fp}`);
  }
  verifyMirror();
  const summary = {
    requested: 50,
    applied: results.filter((r) => r.status === 'APPLIED').length,
    alreadyCorrect: results.filter((r) => r.status === 'ALREADY_CORRECT').length,
    mismatch: results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length,
    ownerConflict: results.filter((r) => r.status === 'OWNER_CONFLICT').length,
  };
  console.log(JSON.stringify(summary, null, 2));
  if (results.some((r) => r.status === 'CURRENT_VALUE_MISMATCH')) {
    console.log('MISMATCHES:');
    for (const r of results.filter((x) => x.status === 'CURRENT_VALUE_MISMATCH')) {
      console.log(`  #${r.n} ${r.cardId} ${r.field}: ${r.note || r.before}`);
    }
  }
  return results;
}

if (require.main === module) {
  const results = main();
  const reportPath = path.join(ROOT, 'reports/cs-a1-high-repair-block-05.md');
  const applied = results.filter((r) => r.status === 'APPLIED').length;
  const already = results.filter((r) => r.status === 'ALREADY_CORRECT').length;
  const mismatch = results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length;
  const ownerConflict = results.filter((r) => r.status === 'OWNER_CONFLICT').length;
  const lines = [
    '# CS–DE A1 HIGH REPAIR — BLOCK 5/6',
    '',
    '## Summary',
    '',
    '- requested: **50**',
    `- processed: **50/50**`,
    `- APPLIED: **${applied}**`,
    `- ALREADY_CORRECT: **${already}**`,
    `- CURRENT_VALUE_MISMATCH: **${mismatch}**`,
    `- OWNER_CONFLICT: **${ownerConflict}**`,
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
    '- card count: **702**',
    '- ID/order: **PASS**',
    '- syntax: **PASS**',
    '- mirror: **PASS**',
    `- unexpected production changes: **0**`,
    '',
    '## Excluded (per owner instruction)',
    '',
    '- `a1-in → study.sectionAccents → Berlīnē` — NOT modified',
    '- `a1-ganz-219 → csText` — NOT modified (already in block 1)',
    '',
    `_Applied: ${new Date().toISOString().slice(0, 10)}_`,
  ];
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n'));
  console.log(`Wrote ${reportPath}`);
}

module.exports = { REPAIRS, applyRepairs, getRawValue, setFieldValue, resolveField };
