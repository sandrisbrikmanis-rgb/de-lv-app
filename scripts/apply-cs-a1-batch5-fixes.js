#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const FILES = [
  path.join(__dirname, '../data/cs/a1.js'),
  path.join(__dirname, '../www/data/cs/a1.js'),
];

const REPLACEMENTS = [
  // 1. a1-freundlich-203
  ['"de": "freundlich",\n    "lv": "Druh",', '"de": "freundlich",\n    "lv": "Přátelský",'],

  // 3. a1-fuer
  ['"id": "a1-fuer",\n      "layout": "standardStudy",\n      "translation": "Pro • Pro",',
   '"id": "a1-fuer",\n      "layout": "standardStudy",\n      "translation": "Pro • Za",'],
  ['"Hlavní myšlenka: für je předložka, která vždy řídí akuzativ – obvykle pro nebo pro v češtině."',
   '"Hlavní myšlenka: für je předložka, která vždy řídí akuzativ. V češtině se podle kontextu překládá jako pro nebo za."'],
  ['"Když mluvíme o výměně, poplatku nebo důvodu, für = pro (danke für das Geschenk = děkuji za dar)."',
   '"Když mluvíme o výměně, poplatku nebo důvodu, für = za (danke für das Geschenk = děkuji za dar)."'],
  ['"Danke für / bezahlen für = \'pro\', nikoli \'před\'."',
   '"Danke für / bezahlen für = „za“."'],

  // 5. a1-ganz-219 (lv only; Study NELABOT)
  ['"de": "ganz",\n    "lv": "Všechno",', '"de": "ganz",\n    "lv": "Celý",'],

  // 6. a1-Gast-222
  ['"de": "Gast",\n    "de_article": "der",\n    "de_plural": "die Gäste",\n    "lv": "Hostem",',
   '"de": "Gast",\n    "de_article": "der",\n    "de_plural": "die Gäste",\n    "lv": "Host",'],

  // 7. a1-geboren-224
  ['"de": "geboren",\n    "lv": "Se narodil",', '"de": "geboren",\n    "lv": "Narozený",'],

  // 8. a1-gefallen-225 (lv only; Study NELABOT)
  ['"de": "gefallen",\n    "lv": "Mít rád",', '"de": "gefallen",\n    "lv": "Líbit se",'],

  // 9. a1-gegen-226
  ['"de": "gegen",\n    "lv": "Vs",', '"de": "gegen",\n    "lv": "Proti",'],

  // 10. a1-gelb-228
  ['"de": "gelb",\n    "lv": "Žluť",', '"de": "gelb",\n    "lv": "Žlutý",'],

  // 11. a1-gern-232
  ['"de": "gern",\n    "lv": "Ochotně",', '"de": "gern",\n    "lv": "Rád",'],

  // 14. a1-Getränk-239
  ['"de": "Getränk",\n    "de_article": "das",\n    "de_plural": "die Getränke",\n    "lv": "Drink",',
   '"de": "Getränk",\n    "de_article": "das",\n    "de_plural": "die Getränke",\n    "lv": "Nápoj",'],

  // 15. a1-Glas-241
  ['"de": "Glas",\n    "de_article": "das",\n    "de_plural": "die Gläser",\n    "lv": "Sklenici",',
   '"de": "Glas",\n    "de_article": "das",\n    "de_plural": "die Gläser",\n    "lv": "Sklenice",'],

  // 16. a1-gleich
  ['"id": "a1-gleich",\n      "layout": "standardStudy",\n      "translation": "Hned • Rovný",',
   '"id": "a1-gleich",\n      "layout": "standardStudy",\n      "translation": "Hned • Stejný",'],
  ['"Hlavní myšlenka: gleich temporally znamená okamžitě, komparativně znamená rovný."',
   '"Hlavní myšlenka: gleich v časovém významu znamená hned a při srovnání znamená stejný."'],
  ['"Gleich lze použít i jako předložku s dativem ve významu jako (gleich mir = jako já)."',
   '"Správný význam určuje kontext, například zda jde o čas nebo o srovnání."'],
  ['"Dobře! = brzy se uvidíme! — běžná rozlučovací fráze."',
   '"Bis gleich! = Uvidíme se za chvíli! — běžná rozlučovací fráze."'],

  // 17. a1-grau-249
  ['"de": "grau",\n    "lv": "Šedá",', '"de": "grau",\n    "lv": "Šedý",'],
];

const SKIPPED = [
  { id: 'a1-Frühstück-207', field: 'de_plural', reason: 'DE READ-ONLY / SOURCE STRUCTURE ISSUE' },
  { id: 'a1-Fußball-218', field: 'missing Study', reason: 'OWNER / PRECISE STUDY REPAIR REQUIRED' },
  { id: 'a1-ganz-219', field: 'missing Study', reason: 'OWNER / PRECISE STUDY REPAIR REQUIRED' },
  { id: 'a1-gefallen-225', field: 'missing Study', reason: 'OWNER / PRECISE STUDY REPAIR REQUIRED' },
  { id: 'a1-Geschichte-233', field: 'missing Study', reason: 'OWNER / PRECISE STUDY REPAIR REQUIRED' },
  { id: 'a1-Geschwister-234', field: 'missing Study', reason: 'OWNER / PRECISE STUDY REPAIR REQUIRED' },
  { id: 'a1-gleich', field: 'cross-dataset terminoloģija', reason: 'OWNER / CROSS-DATASET REVIEW' },
];

function verifySyntax(filePath, content) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(content, ctx);
  if (!ctx.window.A1_WORDS || !Array.isArray(ctx.window.A1_WORDS)) {
    throw new Error(`${filePath}: A1_WORDS not defined`);
  }
  return ctx.window.A1_WORDS.length;
}

function applyAll(content) {
  const results = [];
  for (let i = 0; i < REPLACEMENTS.length; i++) {
    const [before, after] = REPLACEMENTS[i];
    const count = content.split(before).length - 1;
    if (count === 0) {
      results.push({ index: i, status: 'MISS', before: before.slice(0, 80) });
      continue;
    }
    if (count > 1) {
      results.push({ index: i, status: 'AMBIG', count, before: before.slice(0, 80) });
      continue;
    }
    content = content.replace(before, after);
    results.push({ index: i, status: 'OK' });
  }
  return { content, results };
}

let hadError = false;
for (const filePath of FILES) {
  let content = fs.readFileSync(filePath, 'utf8');
  const { content: newContent, results } = applyAll(content);
  const failed = results.filter((r) => r.status !== 'OK');
  if (failed.length) {
    hadError = true;
    console.error(`\n${filePath} failures:`);
    for (const f of failed) console.error(`  [${f.index}] ${f.status}: ${f.before}...`);
  }
  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`${filePath}: ${results.filter((r) => r.status === 'OK').length}/${REPLACEMENTS.length} OK, ${verifySyntax(filePath, newContent)} cards`);
}

console.log('\nSkipped (documented):');
for (const s of SKIPPED) console.log(`  ${s.id} — ${s.field}: ${s.reason}`);

if (hadError) process.exit(1);
