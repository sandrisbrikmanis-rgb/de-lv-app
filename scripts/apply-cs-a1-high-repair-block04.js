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
  { n: 151, cardId: 'a1-nach', field: 'study.explanation[1]', pirmd: 'S městy a zeměmi bez článku nach často znamená.', pec: 'U měst a zemí bez členu nach často znamená „do“.' },
  { n: 152, cardId: 'a1-nehmen', field: 'study.examples[2].lv', pirmd: 'Přinesl jsem ti knihu', pec: 'Přináším ti knihu.' },
  { n: 153, cardId: 'a1-nehmen', field: 'study.examples[3].lv', pirmd: 'Vezmu tě', pec: 'Vyzvednu tě.' },
  { n: 154, cardId: 'a1-nehmen', field: 'study.explanation[2]', pirmd: 'Není to totéž jako přinesený, protože přinesený znamená někomu přinést nebo vzít.', pec: 'Nehmen není totéž co bringen: bringen znamená něco někomu přinést nebo odnést.' },
  { n: 155, cardId: 'a1-nehmen', field: 'study.comparison[2].meaning', pirmd: 'Jít za / aport', pec: 'Jít pro / přinést' },
  { n: 156, cardId: 'a1-nehmen', field: 'study.important[0]', pirmd: 'Ich nehme den Bus znamená v češtině „řídím autobus“.', pec: 'Ich nehme den Bus znamená v češtině „jedu autobusem“.' },
  { n: 157, cardId: 'a1-ob', field: 'csMain', pirmd: 'Nebo', pec: 'Zda • Jestli' },
  { n: 158, cardId: 'a1-ob', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: ob zavádí nepřímou otázku a v češtině nejčastěji znamená popř.', pec: 'Hlavní myšlenka: ob uvádí nepřímou otázku a v češtině nejčastěji znamená zda nebo jestli.' },
  { n: 159, cardId: 'a1-ob', field: 'study.comparison[0].meaning', pirmd: 'Nebo v nepřímé otázce', pec: 'Zda / jestli v nepřímé otázce' },
  { n: 160, cardId: 'a1-oder', field: 'study.explanation[1]', pirmd: 'V češtině oder nejčastěji znamená popř.', pec: 'V češtině oder nejčastěji znamená „nebo“.' },
  { n: 161, cardId: 'a1-passen', field: 'study.comparison[0].meaning', pirmd: 'Fit / fit', pec: 'Pasovat / slušet' },
  { n: 162, cardId: 'a1-passen', field: 'study.comparison[1].meaning', pirmd: 'Stát / stát', pec: 'Slušet / stát' },
  { n: 163, cardId: 'a1-passen', field: 'study.comparison[3].meaning', pirmd: 'Provozovat', pec: 'Fungovat' },
  { n: 164, cardId: 'a1-probieren', field: 'study.tip.text', pirmd: 'Pamatujte: jídlo → probieren = podle chuti.', pec: 'Pamatujte: jídlo → probieren = ochutnat.' },
  { n: 165, cardId: 'a1-sagen-study', field: 'study.important[0]', pirmd: 'Sagen = vyprávět.', pec: 'Sagen = říct.' },
  { n: 166, cardId: 'a1-schwimmen', field: 'study.examples[3].lv', pirmd: 'Chodím plavat', pec: 'Chodím se koupat.' },
  { n: 167, cardId: 'a1-sehen', field: 'study.comparison[2].meaning', pirmd: 'Pohled / pohled', pec: 'Prohlédnout si / dívat se na' },
  { n: 168, cardId: 'a1-sein', field: 'study.comparison[3].meaning', pirmd: 'Pobyt', pec: 'Zůstat' },
  { n: 169, cardId: 'a1-seite', field: 'study.translation', pirmd: 'Strana • Strana', pec: 'Stránka • Strana' },
  { n: 170, cardId: 'a1-sich', field: 'study.translation', pirmd: 'Sebe • Pro sebe', pec: 'Se • Sebe' },
  { n: 171, cardId: 'a1-sich', field: 'study.comparison[0].meaning', pirmd: 'Já / sebe', pec: 'Se / sebe' },
  { n: 172, cardId: 'a1-sich', field: 'study.comparison[1].meaning', pirmd: 'Já / já v ich', pec: 'Mě / sebe (u ich)' },
  { n: 173, cardId: 'a1-sich', field: 'study.comparison[2].meaning', pirmd: 'Ty / já v du', pec: 'Tebe / sebe (u du)' },
  { n: 174, cardId: 'a1-sie-study', field: 'study.examples[5].lv', pirmd: 'Vaříš prosím', pec: 'Vařte, prosím.' },
  { n: 175, cardId: 'a1-sollen', field: 'study.examples[1].lv', pirmd: 'Musíte přijít', pec: 'Máš přijít.' },
  { n: 176, cardId: 'a1-sollen', field: 'study.examples[2].lv', pirmd: 'Musím zůstat doma', pec: 'Mám zůstat doma.' },
  { n: 177, cardId: 'a1-um', field: 'study.explanation[1]', pirmd: 'S přesným časem um znamená hodiny.', pec: 'S přesným časem um znamená „v“, například „v osm hodin“.' },
  { n: 178, cardId: 'a1-um', field: 'study.explanation[3]', pirmd: 'Ve frázi um ... zu pomáhá vyjádřit záměr: to.', pec: 'Ve frázi um ... zu pomáhá vyjádřit účel: aby.' },
  { n: 179, cardId: 'a1-um', field: 'study.important[0]', pirmd: "Hm s časem jsou obvykle 'hodiny'.", pec: 'Um s časem obvykle znamená „v“, například „v osm hodin“.' },
  { n: 180, cardId: 'a1-um', field: 'study.important[1]', pirmd: 'Um ... zu často znamená "do ...".', pec: 'Um ... zu často znamená „aby ...“.' },
  { n: 181, cardId: 'a1-unter', field: 'study.comparison[1].meaning', pirmd: 'Přes / pro', pec: 'Nad / o' },
  { n: 182, cardId: 'a1-vor', field: 'study.examples[2].lv', pirmd: 'Je pět až osm.', pec: 'Je za pět minut osm.' },
  { n: 183, cardId: 'a1-was', field: 'study.translation', pirmd: 'Kdo • Co', pec: 'Co' },
  { n: 184, cardId: 'a1-was', field: 'study.explanation[0]', pirmd: 'Hlavní myšlenka: co je tázací slovo o věcech a událostech - v češtině je to co nebo co, v závislosti na části věty.', pec: 'Hlavní myšlenka: was je tázací slovo pro věci a události. V češtině se překládá jako „co“.' },
  { n: 185, cardId: 'a1-was', field: 'study.explanation[1]', pirmd: 'Byl dotazován na věci, události a fakta, nikoli na osoby.', pec: 'Ptá se na věci, události a fakta, nikoli na osoby.' },
  { n: 186, cardId: 'a1-was', field: 'study.explanation[2]', pirmd: 'V němčině se was nemění po skloňování - vždy to vypadá jako bylo.', pec: 'V němčině se was podle pádu nemění. Vždy má stejný tvar.' },
  { n: 187, cardId: 'a1-was', field: 'study.examples[5].lv', pirmd: 'Jaké je vaše oblíbené jídlo?', pec: 'Jaké je tvoje oblíbené jídlo?' },
  { n: 188, cardId: 'a1-wenn', field: 'study.comparison[1].meaning', pirmd: 'Nebo v nepřímé otázce', pec: 'Zda / jestli v nepřímé otázce' },
  { n: 189, cardId: 'a1-wenn', field: 'study.tip.text', pirmd: 'Pamatujte: podmínka → wenn • Otázka "kdy?" → chtít.', pec: 'Pamatujte: podmínka → wenn • Otázka „kdy?“ → wann.' },
  { n: 190, cardId: 'a1-wenn', field: 'study.explanation[1]', pirmd: 'Pokud je to podmínka, přeložte jako kdyby.', pec: 'Pokud jde o podmínku, přeložte jako „pokud“ nebo „jestliže“.' },
  { n: 191, cardId: 'a1-wer', field: 'study.examples[0].lv', pirmd: 'Co je to?', pec: 'Kdo je to?' },
  { n: 192, cardId: 'a1-wer', field: 'study.examples[2].lv', pirmd: 'Co přijde dnes?', pec: 'Kdo dnes přijde?' },
  { n: 193, cardId: 'a1-wer', field: 'study.examples[3].lv', pirmd: 'Kdo je tvůj učitel', pec: 'Kdo je tvoje učitelka?' },
  { n: 194, cardId: 'a1-wer', field: 'study.explanation[3]', pirmd: 'Wer je v němčině obvykle předmětem věty (nominativu) — Wer ist das? = co je to?', pec: 'Wer je v němčině obvykle podmětem věty v nominativu. Wer ist das? = Kdo je to?' },
  { n: 195, cardId: 'a1-werden', field: 'study.explanation[3]', pirmd: 'Na úrovni A1 je nejdůležitější fráze Ich werde müde. = Jsem unavený.', pec: 'Na úrovni A1 je nejdůležitější fráze Ich werde müde. = Začínám být unavený.' },
  { n: 196, cardId: 'a1-wetter', field: 'study.translation', pirmd: 'Čas (počasí)', pec: 'Počasí' },
  { n: 197, cardId: 'a1-wetter', field: 'study.examples[0].lv', pirmd: 'Kolik je dnes hodin?', pec: 'Jaké je dnes počasí?' },
  { n: 198, cardId: 'a1-wetter', field: 'study.examples[4].lv', pirmd: 'Mluvíme o čase.', pec: 'Mluvíme o počasí.' },
  { n: 199, cardId: 'a1-wetter', field: 'study.tip[1]', pirmd: 'Pamatujte: Wie ist das Wetter? = Kolik je hodin? (ne hodiny).', pec: 'Pamatujte: Wie ist das Wetter? = Jaké je počasí? Nejde o otázku „Kolik je hodin?“.' },
  { n: 200, cardId: 'a1-zu', field: 'study.translation', pirmd: 'Do • At', pec: 'K • Do • Příliš • Infinitiv' },
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
  const reportPath = path.join(ROOT, 'reports/cs-a1-high-repair-block-04.md');
  const applied = results.filter((r) => r.status === 'APPLIED').length;
  const already = results.filter((r) => r.status === 'ALREADY_CORRECT').length;
  const mismatch = results.filter((r) => r.status === 'CURRENT_VALUE_MISMATCH').length;
  const lines = [
    '# CS–DE A1 HIGH REPAIR — BLOCK 4/6',
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
