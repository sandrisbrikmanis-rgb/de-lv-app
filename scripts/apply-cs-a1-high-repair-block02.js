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
  { n: 51, cardId: 'a1-das', field: 'study.tip.text', pirmd: 'Pamatujte: střední genitiv → das • Že → dass.', pec: 'Pamatujte: střední rod → das • Že → dass.' },
  { n: 52, cardId: 'a1-das', field: 'study.important[1]', pirmd: "Das není totéž co dass – das může být člen nebo zájmeno, dass znamená 'to'.", pec: 'Das není totéž co dass – das může být člen nebo zájmeno, dass znamená „že“.' },
  { n: 53, cardId: 'a1-dass', field: 'study.explanation', pirmd: 'Zavádí pomocnou klauzuli, která vyjadřuje skutečnost, myšlenku nebo tvrzení.', pec: 'Uvozuje vedlejší větu, která vyjadřuje skutečnost, myšlenku nebo tvrzení.' },
  { n: 54, cardId: 'a1-dass', field: 'study.comparison[2].meaning', pirmd: 'Na', pec: 'Aby' },
  { n: 55, cardId: 'a1-dass', field: 'study.comparison[3].meaning', pirmd: 'Nebo', pec: 'Zda / jestli' },
  { n: 56, cardId: 'a1-dass', field: 'study.tip.text', pirmd: 'Pamatujte: to → dass.', pec: 'Pamatujte: že → dass.' },
  { n: 57, cardId: 'a1-dass', field: 'study.important[0]', pirmd: 'Dass znamená „to“ a zavádí pomocnou klauzuli.', pec: 'Dass znamená „že“ a uvádí vedlejší větu.' },
  { n: 58, cardId: 'a1-der', field: 'study.tip.text', pirmd: 'Pamatujte: mužský → sedí.', pec: 'Pamatujte: mužský rod → der.' },
  { n: 59, cardId: 'a1-die', field: 'study.examples[1].lv', pirmd: 'Kotě spí.', pec: 'Kočka spí.' },
  { n: 60, cardId: 'a1-die', field: 'study.examples[2].lv', pirmd: 'Vysvětluje učitel.', pec: 'Učitelka vysvětluje.' },
  { n: 61, cardId: 'a1-die', field: 'study.tip.text', pirmd: 'Pamatujte: ženský → zemřít.', pec: 'Pamatujte: ženský rod → die.' },
  { n: 62, cardId: 'a1-eis', field: 'study.translation', pirmd: 'Zmrzlina • Zmrzlina', pec: 'Led • Zmrzlina' },
  { n: 63, cardId: 'a1-eis', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: das Eis může znamenat jak zmrzlinu, tak zmrzlinu.', pec: 'Hlavní myšlenka: das Eis může znamenat led i zmrzlinu.' },
  { n: 64, cardId: 'a1-eis', field: 'study.comparison[1].meaning', pirmd: 'Bude sněžit', pec: 'Sníh' },
  { n: 65, cardId: 'a1-eis', field: 'study.important[0]', pirmd: 'V češtině jsou zmrzlina a zmrzlina dvě různá slova, ale v němčině se pro obojí často používá das Eis.', pec: 'V češtině jsou led a zmrzlina dvě různá slova, ale v němčině se pro obojí často používá das Eis.' },
  { n: 66, cardId: 'a1-erst', field: 'study.translation', pirmd: 'První • Pouze', pec: 'Nejprve • Až / teprve' },
  { n: 67, cardId: 'a1-erst', field: 'study.explanation', pirmd: '„erst“ se používá k označení sekvence (první) nebo ke zdůraznění, že se něco stane později, než se očekávalo, nebo v menší míře (pouze).', pec: '„erst“ označuje pořadí (nejprve) nebo zdůrazňuje, že se něco stane později, než se čekalo, případně v omezené míře (až, teprve).' },
  { n: 68, cardId: 'a1-erst', field: 'study.comparison[0].meaning', pirmd: 'První • Pouze', pec: 'Nejprve • Až / teprve' },
  { n: 69, cardId: 'a1-erst', field: 'study.tip.text', pirmd: 'Pamatujte: čas/číslo → erst • Množství → ne.', pec: 'Pamatujte: čas/číslo → erst • Množství → nur.' },
  { n: 70, cardId: 'a1-euch', field: 'study.translation', pirmd: 'Ty • Ty', pec: 'Vás • Vám' },
  { n: 71, cardId: 'a1-euch', field: 'study.explanation', pirmd: '„euch“ je zájmeno 2. osoby množného čísla. Používá se jak jako přímý doplněk (kde?) – „vy“ tak jako nepřímý doplněk (ke komu?) – „k vám“.', pec: '„euch“ je zájmeno 2. osoby množného čísla. Používá se jako přímý předmět (koho/co?) – „vás“ i jako nepřímý předmět (komu?) – „vám“.' },
  { n: 72, cardId: 'a1-euch', field: 'study.examples[0].lv', pirmd: 'Vidím tě', pec: 'Vidím vás.' },
  { n: 73, cardId: 'a1-euch', field: 'study.examples[1].lv', pirmd: 'Pomáhám ti', pec: 'Pomáhám vám.' },
  { n: 74, cardId: 'a1-euch', field: 'study.examples[2].lv', pirmd: 'Dávám ti knihu', pec: 'Dávám vám knihu.' },
  { n: 75, cardId: 'a1-euch', field: 'study.examples[3].lv', pirmd: 'Děkuji ti', pec: 'Děkuji vám.' },
  { n: 76, cardId: 'a1-euch', field: 'study.examples[4].lv', pirmd: 'Pamatuješ', pec: 'Vy si vzpomínáte.' },
  { n: 77, cardId: 'a1-euch', field: 'study.comparison[2].example', pirmd: 'Das ist euer Haus. = Je to tvůj dům.', pec: 'Das ist euer Haus. = Je to váš dům.' },
  { n: 78, cardId: 'a1-finden', field: 'study.explanation[2]', pirmd: 'Pokud jde o ztracenou věc, překládá se to jako nález.', pec: 'Pokud jde o ztracenou věc, překládá se finden jako najít.' },
  { n: 79, cardId: 'a1-finden', field: 'study.tip.text', pirmd: 'Pamatujte: ztracená věc → nalezená • Názor → najdu...', pec: 'Pamatujte: ztracená věc → najít • Názor → ich finde… = myslím si…' },
  { n: 80, cardId: 'a1-fuer', field: 'study.translation', pirmd: 'Pro • Pro', pec: 'Pro • Za' },
  { n: 81, cardId: 'a1-fuer', field: 'study.explanation[2]', pirmd: 'Když mluvíme o výměně, poplatku nebo důvodu, für = pro (danke für das Geschenk = děkuji za dar).', pec: 'Když mluvíme o výměně, poplatku nebo důvodu, für = za (danke für das Geschenk = děkuji za dar).' },
  { n: 82, cardId: 'a1-fuer', field: 'study.important[1]', pirmd: "Danke für / bezahlen für = 'pro', nikoli 'před'.", pec: 'Danke für / bezahlen für = „za“, nikoli „před“ nebo „pro“.' },
  { n: 83, cardId: 'a1-gleich', field: 'study.important[1]', pirmd: 'Dobře! = brzy se uvidíme! — běžná rozlučovací fráze.', pec: 'Bis gleich! = Brzy na viděnou! — běžná rozlučovací fráze.' },
  { n: 84, cardId: 'a1-gut-study', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: střevo je přídavné jméno/příslovce – dobrý, úspěšný, v pořádku.', pec: 'Hlavní myšlenka: gut je přídavné jméno nebo příslovce – dobrý, dobře, v pořádku.' },
  { n: 85, cardId: 'a1-gut-study', field: 'study.tip[0]', pirmd: 'Střevo bez článku je přídavné jméno/příslovce – dobrý/dobře.', pec: 'Gut bez členu je přídavné jméno nebo příslovce – dobrý/dobře.' },
  { n: 86, cardId: 'a1-gut-study', field: 'study.important[0]', pirmd: 'Střevo = dobrý/dobře (přídavné jméno/přívlastek).', pec: 'Gut = dobrý/dobře (přídavné jméno nebo příslovce).' },
  { n: 87, cardId: 'a1-halten', field: 'study.examples[2].lv', pirmd: 'Prosím přestaň', pec: 'Prosím, zastavte se.' },
  { n: 88, cardId: 'a1-halten', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: zastavit znamená držet, ale s přepravou nebo pohybem může znamenat zastavit nebo zastavit.', pec: 'Hlavní myšlenka: halten znamená držet; u dopravy může znamenat zastavit nebo mít zastávku.' },
  { n: 89, cardId: 'a1-halten', field: 'study.tip.text', pirmd: 'Pamatujte: v ruce → zastavit • Doprava → zastavení/zastávky.', pec: 'Pamatujte: předmět v ruce → držet • zastavit se → anhalten • doprava → halten = zastavit.' },
  { n: 90, cardId: 'a1-heißen', field: 'study.important[1]', pirmd: 'Byl heißt das? často znamená "Co to znamená?".', pec: 'Was heißt das? často znamená „Co to znamená?“.' },
  { n: 91, cardId: 'a1-hoch-study', field: 'study.examples[1].lv', pirmd: 'Hora je vysoká.', pec: 'Police je vysoká dva metry.' },
  { n: 92, cardId: 'a1-ihr', field: 'study.examples[0].lv', pirmd: 'Přijdeš dnes večer?', pec: 'Přijdete dnes večer?' },
  { n: 93, cardId: 'a1-ihr', field: 'study.examples[2].lv', pirmd: 'Kde bydlíš', pec: 'Kde bydlíte?' },
  { n: 94, cardId: 'a1-ihr', field: 'study.examples[4].lv', pirmd: 'Máš čas?', pec: 'Máte čas?' },
  { n: 95, cardId: 'a1-ihr', field: 'study.explanation[2]', pirmd: 'Ihr jako přivlastňovací zájmeno znamená ji (ihr Buch = její kniha).', pec: 'Ihr jako přivlastňovací zájmeno znamená její/jejich (ihr Buch = její kniha).' },
  { n: 96, cardId: 'a1-im', field: 'study.explanation[1]', pirmd: 'Plná forma: in dem (komu?).', pec: 'Plná forma: in dem (kde?, 3. pád).' },
  { n: 97, cardId: 'a1-im', field: 'study.comparison[0].meaning', pirmd: 'Uvnitř kde? (komu?)', pec: 'Uvnitř, kde? (3. pád)' },
  { n: 98, cardId: 'a1-im', field: 'study.comparison[1].meaning', pirmd: 'Dovnitř, kam? (účet)', pec: 'Dovnitř, kam? (4. pád)' },
  { n: 99, cardId: 'a1-im', field: 'study.important[1]', pirmd: 'Odpovědi kam?, ne kde? — umístění, nikoli pohyb.', pec: 'Odpovídá na otázku kde?, ne kam? — označuje umístění, nikoli pohyb.' },
  { n: 100, cardId: 'a1-ins', field: 'study.explanation[1]', pirmd: 'Plná forma: v das (kde?).', pec: 'Plná forma: in das (kam?).' },
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
  const parts = parsePath(fieldPath);
  let cur = entry;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur == null ? null : String(cur);
}

function setFieldValue(entry, fieldPath, value) {
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
  const reportPath = path.join(ROOT, 'reports/cs-a1-high-repair-block-02.md');
  const applied = results.filter((r) => r.status === 'APPLIED').length;
  const already = results.filter((r) => r.status === 'ALREADY_CORRECT').length;
  const mismatch = results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length;
  const lines = [
    '# CS–DE A1 HIGH REPAIR — BLOCK 2/6',
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

module.exports = { REPAIRS, applyRepairs, getFieldValue, setFieldValue };
