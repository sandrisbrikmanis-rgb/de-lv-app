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
  // 1. a1-rufen-500
  ['"de": "rufen",\n    "lv": "Zavolat",',
   '"de": "rufen",\n    "lv": "Volat",'],

  // 2. a1-rund-501
  ['"de": "rund",\n    "lv": "Kolo",',
   '"de": "rund",\n    "lv": "Kulatý",'],

  // 3. a1-sagen-study
  ['"Sagen = vyprávět.",',
   '"Sagen = říct.",'],

  // 4. a1-schauen-study (translation only; comparison[1] PIRMS mismatch — skipped)
  ['"id": "a1-schauen-study",\n      "layout": "standardStudy",\n      "translation": "Hodinky",',
   '"id": "a1-schauen-study",\n      "layout": "standardStudy",\n      "translation": "Dívat se",'],

  // 5. a1-schmecken-515
  ['"de": "schmecken",\n    "lv": "Ochutnat",',
   '"de": "schmecken",\n    "lv": "Chutnat",'],

  // 6. a1-Schnee-517
  ['"de": "Schnee",\n    "de_article": "der",\n    "lv": "Bude sněžit",',
   '"de": "Schnee",\n    "de_article": "der",\n    "lv": "Sníh",'],

  // 7. a1-schneien-518
  ['"de": "schneien",\n    "lv": "Sněží",',
   '"de": "schneien",\n    "lv": "Sněžit",'],

  // 8. a1-Schüler-527
  ['"de": "Schüler",\n    "de_article": "der",\n    "de_plural": "die Schüler",\n    "lv": "Student",',
   '"de": "Schüler",\n    "de_article": "der",\n    "de_plural": "die Schüler",\n    "lv": "Žák",'],

  // 9. a1-schwimmen
  ['"de": "Wir schwimmen im Schwimmbad.",\n          "lv": "Plaveme v bazénu."\n        },\n        {\n          "de": "Ich gehe baden.",\n          "lv": "Chodím plavat"',
   '"de": "Wir schwimmen im Schwimmbad.",\n          "lv": "Plaveme v bazénu."\n        },\n        {\n          "de": "Ich gehe baden.",\n          "lv": "Jdu se koupat."'],
  ['"word": "baden",\n          "meaning": "Plavat / být ve vodě",\n          "example": "Ich gehe baden."\n        },\n        {\n          "word": "schwimmen gehen",',
   '"word": "baden",\n          "meaning": "Koupat se • Být ve vodě",\n          "example": "Ich gehe baden."\n        },\n        {\n          "word": "schwimmen gehen",'],
  ['"Pokud jde o relaxaci ve vodě nebo plavání, často se používá baden."',
   '"Pokud jde o relaxaci ve vodě nebo koupání, často se používá baden."'],

  // 10. a1-sehen
  ['"word": "schauen",\n          "meaning": "Hodinky",\n          "example": "Ich schaue auf das Bild."\n        },\n        {\n          "word": "ansehen",\n          "meaning": "Pohled / pohled",',
   '"word": "schauen",\n          "meaning": "Dívat se",\n          "example": "Ich schaue auf das Bild."\n        },\n        {\n          "word": "ansehen",\n          "meaning": "Prohlédnout si • Dívat se na",'],

  // 11. a1-sein
  ['"word": "bleiben",\n          "meaning": "Pobyt",\n          "example": "Ich bleibe hier."\n        }\n      ],\n      "tip": {\n        "text": "Pamatujte: ich bin = jsem • Du bist = jsi."',
   '"word": "bleiben",\n          "meaning": "Zůstat",\n          "example": "Ich bleibe hier."\n        }\n      ],\n      "tip": {\n        "text": "Pamatujte: ich bin = jsem • Du bist = jsi."'],
  ['"Ich bin je \'já jsem\' ne \'jsem\'."',
   '"Ich bin znamená „já jsem“ nebo jednoduše „jsem“; neznamená „být“."'],

  // 12. a1-seite
  ['"id": "a1-seite",\n      "layout": "standardStudy",\n      "translation": "Strana • Strana",',
   '"id": "a1-seite",\n      "layout": "standardStudy",\n      "translation": "Stránka • Strana",'],
  ['"de": "Schlagt die Seite zwanzig auf.",\n          "lv": "Přejděte na stránku dvacet."',
   '"de": "Schlagt die Seite zwanzig auf.",\n          "lv": "Otevřete stránku dvacet."'],

  // 13. a1-Sekunde-545
  ['"de": "Sekunde",\n    "de_article": "die",\n    "de_plural": "die Sekunden",\n    "lv": "Sekundu",',
   '"de": "Sekunde",\n    "de_article": "die",\n    "de_plural": "die Sekunden",\n    "lv": "Sekunda",'],

  // 14. a1-sich
  ['"de": "sich",\n    "lv": "Sebe • Pro sebe",\n    "level": "A1",\n    "study": {\n      "id": "a1-sich",\n      "layout": "standardStudy",\n      "translation": "Sebe • Pro sebe",',
   '"de": "sich",\n    "lv": "Sebe • Sobě",\n    "level": "A1",\n    "study": {\n      "id": "a1-sich",\n      "layout": "standardStudy",\n      "translation": "Sebe • Sobě",'],
  ['"V češtině se často překládá jako já nebo já."',
   '"V češtině se často překládá jako se, sebe nebo sobě."'],
  ['"de": "Er wäscht sich.",\n          "lv": "Koupe se."',
   '"de": "Er wäscht sich.",\n          "lv": "Myje se."'],
  ['"word": "sich",\n          "meaning": "Já / sebe",',
   '"word": "sich",\n          "meaning": "Sebe • Sobě",'],
  ['"word": "mich",\n          "meaning": "Já / já v ich",',
   '"word": "mich",\n          "meaning": "Mě • Sebe u ich",'],
  ['"word": "dich",\n          "meaning": "Ty / já v du",',
   '"word": "dich",\n          "meaning": "Tebe • Sebe u du",'],
  ['"word": "ihn",\n          "meaning": "Mu",\n          "example": "Ich sehe ihn."',
   '"word": "ihn",\n          "meaning": "Ho",\n          "example": "Ich sehe ihn."'],

  // 15. a1-sicher
  ['"de": "Fahr sicher!",\n          "lv": "Jezděte bezpečně!"',
   '"de": "Fahr sicher!",\n          "lv": "Jeď bezpečně!"'],
  ['"Určitě! jako samostatná odpověď znamená samozřejmě!/pravděpodobně!"',
   '"Sicher! jako samostatná odpověď znamená určitě nebo samozřejmě."'],

  // 16. a1-sie-study
  ['"de": "sie",\n    "lv": "Oni / ji",\n    "level": "A1",\n    "study": {\n      "id": "a1-sie-study",\n      "layout": "standardStudy",\n      "translation": "Oni / ji",',
   '"de": "sie",\n    "lv": "Oni / ji",\n    "level": "A1",\n    "study": {\n      "id": "a1-sie-study",\n      "layout": "standardStudy",\n      "translation": "Ona • Oni • Ji",'],
  ['"Sie znamená hlavně: jedna žena.",\n        "Často charakterizováno: sloveso jednotného čísla (-t).",',
   '"Malé sie může znamenat „ona“, „oni“ nebo „ji“. Význam určuje kontext a tvar slovesa.",\n        "Často charakterizováno: sloveso jednotného čísla (-t).",'],
  ['"Malé sie znamená ji, když je sloveso jednotného čísla (Sie kocht = vaří)."\n      ],\n      "examples": [\n        {\n          "de": "Sie kochen.",\n          "lv": "Vaří."\n        },\n        {\n          "de": "Sie kocht.",\n          "lv": "Ona vaří."\n        },\n        {\n          "de": "Sie isst.",\n          "lv": "Ona jí"\n        },\n        {\n          "de": "Sie kochen.",\n          "lv": "Vaří."\n        },\n        {\n          "de": "Sie spielen Fußball.",\n          "lv": "Hrají fotbal."\n        },\n        {\n          "de": "Sie kochen, bitte.",\n          "lv": "Vaříš prosím"',
   '"Malé sie znamená „ji“ pouze jako předmět. Jako podmět znamená „ona“ (Sie kocht = Ona vaří)."\n      ],\n      "examples": [\n        {\n          "de": "Sie kochen.",\n          "lv": "Vaří."\n        },\n        {\n          "de": "Sie kocht.",\n          "lv": "Ona vaří."\n        },\n        {\n          "de": "Sie isst.",\n          "lv": "Ona jí"\n        },\n        {\n          "de": "Sie kochen.",\n          "lv": "Vaří."\n        },\n        {\n          "de": "Sie spielen Fußball.",\n          "lv": "Hrají fotbal."\n        },\n        {\n          "de": "Sie kochen, bitte.",\n          "lv": "Vaříte, prosím?"'],
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

if (hadError) process.exit(1);
