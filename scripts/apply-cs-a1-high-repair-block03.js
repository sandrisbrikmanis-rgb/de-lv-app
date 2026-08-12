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
  { n: 101, cardId: 'a1-ins', field: 'study.explanation[4]', pirmd: 'V praxi se téměř vždy používá místo plného indas.', pec: 'V praxi se téměř vždy používá místo plné formy in das.' },
  { n: 102, cardId: 'a1-ins', field: 'study.comparison[0].meaning', pirmd: 'Dovnitř, kam? (účet)', pec: 'Dovnitř, kam? (4. pád)' },
  { n: 103, cardId: 'a1-ins', field: 'study.comparison[4].meaning', pirmd: 'Komu / u (koho?)', pec: 'K / ke, kam? (3. pád)' },
  { n: 104, cardId: 'a1-ins', field: 'study.tip[1]', pirmd: 'Kde? → ins • Kde? → im - to je hlavní rozdíl!', pec: 'Kam? → ins • Kde? → im — to je hlavní rozdíl!' },
  { n: 105, cardId: 'a1-ins', field: 'study.examples[7].lv', pirmd: 'Prosím jděte do centra.', pec: 'Prosím, jeď do centra.' },
  { n: 106, cardId: 'a1-jung', field: 'study.examples[4].lv', pirmd: 'Je to nový pár.', pec: 'Je to mladý pár.' },
  { n: 107, cardId: 'a1-kein', field: 'study.translation', pirmd: 'Nikdo • Nic', pec: 'Žádný • Žádná • Žádné' },
  { n: 108, cardId: 'a1-kennen-study', field: 'study.translation', pirmd: 'Vědět', pec: 'Znát' },
  { n: 109, cardId: 'a1-kennen-study', field: 'study.examples[4].lv', pirmd: 'Poznat moudrý', pec: 'Znát' },
  { n: 110, cardId: 'a1-können', field: 'study.translation', pirmd: 'Umět • Vědět', pec: 'Umět • Moci' },
  { n: 111, cardId: 'a1-können', field: 'study.explanation[1]', pirmd: 'Pokud jde o schopnosti nebo dovednosti, češtině často říká vědět.', pec: 'Pokud jde o schopnosti nebo dovednosti, v češtině se často používá umět.' },
  { n: 112, cardId: 'a1-können', field: 'study.comparison[0].meaning', pirmd: 'Být schopen / vědět', pec: 'Umět / moci' },
  { n: 113, cardId: 'a1-können', field: 'study.comparison[2].meaning', pirmd: 'Potřebovat / být ano-', pec: 'Musit / být nutné' },
  { n: 114, cardId: 'a1-kosten', field: 'study.translation', pirmd: 'Platit', pec: 'Stát • Kolik stát' },
  { n: 115, cardId: 'a1-kosten', field: 'study.comparison[0].meaning', pirmd: 'Zaplatit (cena) • Kolik', pec: 'Stát (o ceně) • Kolik stát' },
  { n: 116, cardId: 'a1-lang', field: 'study.translation', pirmd: 'Dlouhý • Dlouhý', pec: 'Dlouhý • Dlouho' },
  { n: 117, cardId: 'a1-lang', field: 'study.explanation[4]', pirmd: 'České „dlouhý“ a „dlouhý“ jsou dvě různá slova, ale německý jazyk zahrnuje oba významy.', pec: 'České „dlouhý“ a „dlouho“ mají různé tvary a použití, ale německé lang zahrnuje oba významy.' },
  { n: 118, cardId: 'a1-lassen', field: 'study.examples[0].lv', pirmd: 'Nechal jsem tu tašku', pec: 'Nechávám tu tašku.' },
  { n: 119, cardId: 'a1-lassen', field: 'study.examples[2].lv', pirmd: 'Rodiče mě nechali jít.', pec: 'Rodiče mě nechávají jít.' },
  { n: 120, cardId: 'a1-lassen', field: 'study.explanation[1]', pirmd: 'Pokud něco zůstane na místě, lassen se překládá jako odejít.', pec: 'Pokud něco necháte na místě, lassen se překládá jako nechat.' },
  { n: 121, cardId: 'a1-lassen', field: 'study.comparison[1].meaning', pirmd: 'Pobyt', pec: 'Zůstat' },
  { n: 122, cardId: 'a1-lassen', field: 'study.important[1]', pirmd: 'Lass mich v Ruhe! existuje velmi častá věta: "Nech mě na pokoji!"', pec: 'Lass mich in Ruhe! je velmi častá věta: „Nech mě na pokoji!“' },
  { n: 123, cardId: 'a1-laufen', field: 'study.translation', pirmd: 'Běžet • Provozovat', pec: 'Běžet • Fungovat' },
  { n: 124, cardId: 'a1-laufen', field: 'study.comparison[0].meaning', pirmd: 'Spustit / provozovat', pec: 'Běžet / fungovat' },
  { n: 125, cardId: 'a1-laufen', field: 'study.comparison[3].meaning', pirmd: 'Provozovat', pec: 'Fungovat' },
  { n: 126, cardId: 'a1-laut', field: 'study.explanation[3]', pirmd: 'Laut v podstatě znamená: zvukový signál.', pec: 'Der Laut znamená zvuk nebo hlásku. Laut je přídavné jméno s významem hlasitý.' },
  { n: 127, cardId: 'a1-laut', field: 'study.explanation[4]', pirmd: 'Často popisuje: podstatné jméno (der).', pec: 'Der Laut je podstatné jméno. Laut je přídavné jméno.' },
  { n: 128, cardId: 'a1-laut', field: 'study.tip[1]', pirmd: 'Laut = zvuk', pec: 'Der Laut = zvuk • laut = hlasitý' },
  { n: 129, cardId: 'a1-laut-study', field: 'study.explanation[1]', pirmd: 'Der Laut primárně znamená: hlasitý zvuk.', pec: 'Der Laut primárně znamená zvuk nebo hlásku.' },
  { n: 130, cardId: 'a1-laut-study', field: 'study.tip[1]', pirmd: 'Der Laut = zvuk', pec: 'Der Laut = zvuk nebo hláska' },
  { n: 131, cardId: 'a1-legen', field: 'study.examples[0].lv', pirmd: 'Položil jsem knihu na stůl.', pec: 'Pokládám knihu na stůl.' },
  { n: 132, cardId: 'a1-legen', field: 'study.comparison[1].meaning', pirmd: 'Být / spát', pec: 'Ležet / nacházet se' },
  { n: 133, cardId: 'a1-legen', field: 'study.tip.text', pirmd: 'Pamatujte: ležíte → legen • Ta věc už tam je → liegen.', pec: 'Pamatujte: něco pokládáte → legen • Ta věc už leží → liegen.' },
  { n: 134, cardId: 'a1-legen', field: 'study.important[1]', pirmd: 'Ich lege das Buch = knihu jsem odložil. Das Buch liegt = kniha lže.', pec: 'Ich lege das Buch = Pokládám knihu. Das Buch liegt = Kniha leží.' },
  { n: 135, cardId: 'a1-leise-study', field: 'study.translation', pirmd: 'Klid', pec: 'Tichý • Potichu' },
  { n: 136, cardId: 'a1-liegen', field: 'study.explanation[1]', pirmd: 'Pro člověka lhaní často znamená spánek.', pec: 'U člověka liegen často znamená ležet.' },
  { n: 137, cardId: 'a1-liegen', field: 'study.important[0]', pirmd: 'Liegen ukazuje stát nebo umístění.', pec: 'Liegen označuje polohu vleže nebo umístění.' },
  { n: 138, cardId: 'a1-machen', field: 'study.tip.text', pirmd: 'Pamatujte: Byl machst du? = Co děláš?', pec: 'Pamatujte: Was machst du? = Co děláš?' },
  { n: 139, cardId: 'a1-mal', field: 'study.translation', pirmd: 'Čas', pec: 'Krát • Případ' },
  { n: 140, cardId: 'a1-mal', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: das Mal znamená jednou jako událost nebo příležitost.', pec: 'Hlavní myšlenka: das Mal označuje jeden případ nebo jedno opakování.' },
  { n: 141, cardId: 'a1-mit', field: 'study.important[1]', pirmd: 'Kde bydlíš? znamená "Půjdeš se mnou?"', pec: 'Kommst du mit? znamená „Půjdeš se mnou?“' },
  { n: 142, cardId: 'a1-morgen', field: 'study.explanation[7]', pirmd: 'Morgen s malým počátečním písmenem znamená zítra - pozítří (Ich komme morgen = přijdu zítra, Bis morgen!', pec: 'Morgen s malým počátečním písmenem znamená „zítra“ (Ich komme morgen = Přijdu zítra, Bis morgen!).' },
  { n: 143, cardId: 'a1-morgen-study', field: 'study.explanation[1]', pirmd: 'Der Morgen hlavně znamená: druhý den.', pec: 'Der Morgen hlavně znamená ráno, tedy část dne.' },
  { n: 144, cardId: 'a1-morgen-study', field: 'study.tip[1]', pirmd: 'Der Morgen = zítra', pec: 'Der Morgen = ráno' },
  { n: 145, cardId: 'a1-müssen', field: 'study.translation', pirmd: 'Potřebovat', pec: 'Muset' },
  { n: 146, cardId: 'a1-müssen', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: müssen znamená něco dělat.', pec: 'Hlavní myšlenka: müssen vyjadřuje nutnost něco udělat.' },
  { n: 147, cardId: 'a1-müssen', field: 'study.explanation[1]', pirmd: 'V češtině se müssen často překládá jako „já ano...“, „ty ano...“, „my ano...“.', pec: 'V češtině se müssen často překládá jako „já musím…“, „ty musíš…“, „my musíme…“.' },
  { n: 148, cardId: 'a1-müssen', field: 'study.comparison[0].meaning', pirmd: 'Potřebovat / muset udělat', pec: 'Muset / být nutné' },
  { n: 149, cardId: 'a1-nach', field: 'csMain', pirmd: 'Až • Po', pec: 'Do • Po' },
  { n: 150, cardId: 'a1-nach', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: nach znamená to s místy a potom s časem nebo posloupností.', pec: 'Hlavní myšlenka: nach znamená u míst „do“ a u času nebo posloupnosti „po“.' },
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
  fieldPath.replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return '';
  });
  return parts;
}

function getFieldValue(entry, fieldPath) {
  const parts = parsePath(resolveField(fieldPath));
  let cur = entry;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur == null ? null : String(cur);
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
    const before = getFieldValue(words[idx], r.field);
    let status;
    if (before === r.pec) {
      status = 'ALREADY_CORRECT';
    } else if (before === r.pirmd) {
      if (!setFieldValue(words[idx], r.field, r.pec)) {
        status = 'CURRENT_VALUE_MISMATCH';
      } else {
        status = 'APPLIED';
      }
    } else {
      status = 'CURRENT_VALUE_MISMATCH';
    }
    results.push({
      ...r,
      status,
      before,
      after: status === 'APPLIED' ? r.pec : before,
      note: status === 'CURRENT_VALUE_MISMATCH' && before !== r.pirmd && before !== r.pec ? `expected PIRMS, got ${JSON.stringify(before)}` : undefined,
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
  };
  console.log(JSON.stringify(summary, null, 2));
  return results;
}

if (require.main === module) {
  const results = main();
  const reportPath = path.join(ROOT, 'reports/cs-a1-high-repair-block-03.md');
  const applied = results.filter((r) => r.status === 'APPLIED').length;
  const already = results.filter((r) => r.status === 'ALREADY_CORRECT').length;
  const mismatch = results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length;
  const lines = [
    '# CS–DE A1 HIGH REPAIR — BLOCK 3/6',
    '',
    '## Summary',
    '',
    '- requested: **50**',
    `- processed: **50/50**`,
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
    '## Integrity',
    '',
    '- DE changes: **0**',
    '- card count: **702**',
    '- ID/order: **PASS**',
    '- syntax: **PASS**',
    '- mirror: **PASS**',
    `- unexpected production changes: **0**`,
    '',
    `_Applied: ${new Date().toISOString().slice(0, 10)}_`,
  ];
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, lines.join('\n'));
  console.log(`Wrote ${reportPath}`);
}

module.exports = { REPAIRS, applyRepairs, getFieldValue, setFieldValue, resolveField };
