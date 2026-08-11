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
  // 1. a1-dürfen-150
  ['"de": "dürfen",\n    "lv": "Být dovoleno",', '"de": "dürfen",\n    "lv": "Smět",'],

  // 2. a1-Ecke-152
  ['"de": "Ecke",\n    "de_article": "die",\n    "de_plural": "die Ecken",\n    "lv": "Rohu",',
   '"de": "Ecke",\n    "de_article": "die",\n    "de_plural": "die Ecken",\n    "lv": "Roh",'],

  // 3. a1-ein (study only; comparison NELABOT)
  ['"id": "a1-ein",\n      "layout": "standardStudy",\n      "translation": "Neurčitý člen • Jeden • Někdo",',
   '"id": "a1-ein",\n      "layout": "standardStudy",\n      "translation": "Neurčitý člen • Jeden",'],
  ['"id": "a1-ein",\n      "layout": "standardStudy",\n      "translation": "Neurčitý člen • Jeden",\n      "explanation": "Používá se s podstatným jménem mužského rodu. Ukázání na jednu věc nebo osobu z několika možností.",\n      "examples": [\n        {\n          "de": "Ein Mann wartet draußen.",\n          "lv": "Venku čeká muž."\n        },\n        {\n          "de": "Ich habe ein Buch.",\n          "lv": "Mám jednu knihu."\n        },\n        {\n          "de": "Er sucht einen Stift.",\n          "lv": "Hledá pero."\n        }\n      ],\n      "tip": {\n        "text": "Pamatujte: nespecifický jeden/někdo → ein."',
   '"id": "a1-ein",\n      "layout": "standardStudy",\n      "translation": "Neurčitý člen • Jeden",\n      "explanation": "Používá se s podstatným jménem mužského rodu. Ukázání na jednu věc nebo osobu z několika možností.",\n      "examples": [\n        {\n          "de": "Ein Mann wartet draußen.",\n          "lv": "Venku čeká muž."\n        },\n        {\n          "de": "Ich habe ein Buch.",\n          "lv": "Mám jednu knihu."\n        },\n        {\n          "de": "Er sucht einen Stift.",\n          "lv": "Hledá pero."\n        }\n      ],\n      "tip": {\n        "text": "Pamatujte: ein není jen „jeden“. Často je to pouze neurčitý člen."'],

  // 4. a1-eins-156
  ['"de": "eins",\n    "lv": "Jeden",', '"de": "eins",\n    "lv": "Jedna",'],

  // 5. a1-eis
  ['"id": "a1-eis",\n      "layout": "standardStudy",\n      "translation": "Zmrzlina • Zmrzlina",',
   '"id": "a1-eis",\n      "layout": "standardStudy",\n      "translation": "Led • Zmrzlina",'],
  ['"Hlavní myšlenka: das Eis může znamenat jak zmrzlinu, tak zmrzlinu."',
   '"Hlavní myšlenka: das Eis může znamenat led i zmrzlinu."'],
  ['"word": "das Eis",\n          "meaning": "Zmrzlina / zmrzlina",',
   '"word": "das Eis",\n          "meaning": "Led • Zmrzlina",'],
  ['"word": "der Schnee",\n          "meaning": "Bude sněžit",',
   '"word": "der Schnee",\n          "meaning": "Sníh",'],
  ['"V češtině jsou zmrzlina a zmrzlina dvě různá slova, ale v němčině se pro obojí často používá das Eis."',
   '"V češtině jsou led a zmrzlina dvě různá slova, ale v němčině se pro obojí často používá das Eis."'],

  // 6. a1-Erde-164
  ['"de": "Erde",\n    "de_article": "die",\n    "de_plural": "die Erden",\n    "lv": "Přistát",',
   '"de": "Erde",\n    "de_article": "die",\n    "de_plural": "die Erden",\n    "lv": "Země",'],

  // 7. a1-erst
  ['"id": "a1-erst",\n      "layout": "standardStudy",\n      "translation": "První • Pouze",',
   '"id": "a1-erst",\n      "layout": "standardStudy",\n      "translation": "Teprve • Až • Nejprve",'],
  ['"id": "a1-erst",\n      "layout": "standardStudy",\n      "translation": "Teprve • Až • Nejprve",\n      "explanation": "„erst“ se používá k označení sekvence (první) nebo ke zdůraznění, že se něco stane později, než se očekávalo, nebo v menší míře (pouze).",',
   '"id": "a1-erst",\n      "layout": "standardStudy",\n      "translation": "Teprve • Až • Nejprve",\n      "explanation": "„Erst“ může podle kontextu znamenat „nejprve“, „až“ nebo „teprve“. Často vyjadřuje pozdější čas či menší množství.",'],
  ['"word": "erst",\n          "meaning": "První • Pouze",',
   '"word": "erst",\n          "meaning": "Nejprve • Pouze",'],
  ['"id": "a1-erst",\n      "layout": "standardStudy",\n      "translation": "Teprve • Až • Nejprve",\n      "explanation": "„Erst“ může podle kontextu znamenat „nejprve“, „až“ nebo „teprve“. Často vyjadřuje pozdější čas či menší množství.",\n      "examples": [\n        {\n          "de": "Erst trinken, dann fahren.",\n          "lv": "Nejdřív pij, pak řiď."\n        },\n        {\n          "de": "Ich komme erst morgen.",\n          "lv": "Přijedu až zítra."\n        },\n        {\n          "de": "Er ist erst 18 Jahre alt.",\n          "lv": "Je mu teprve 18 let."\n        },\n        {\n          "de": "Wir essen erst um acht Uhr.",\n          "lv": "Jíme jen v osm."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "erst",\n          "meaning": "Nejprve • Pouze",\n          "example": "Erst arbeiten, dann Pause. = Nejprve pracujte, pak pauza."\n        },\n        {\n          "word": "zuerst",\n          "meaning": "První • Na začátku",\n          "example": "Zuerst frühstücken wir. = Nejprve snídáme."\n        },\n        {\n          "word": "nur",\n          "meaning": "Pouze",\n          "example": "Ich habe nur 5 Euro. = Mám jen 5 eur."\n        },\n        {\n          "word": "dann",\n          "meaning": "Pak",\n          "example": "Dann gehen wir nach Hause. = Pak jdeme domů."\n        }\n      ],\n      "tip": {\n        "text": "Pamatujte: čas/číslo → erst • Množství → ne."',
   '"id": "a1-erst",\n      "layout": "standardStudy",\n      "translation": "Teprve • Až • Nejprve",\n      "explanation": "„Erst“ může podle kontextu znamenat „nejprve“, „až“ nebo „teprve“. Často vyjadřuje pozdější čas či menší množství.",\n      "examples": [\n        {\n          "de": "Erst trinken, dann fahren.",\n          "lv": "Nejdřív pij, pak řiď."\n        },\n        {\n          "de": "Ich komme erst morgen.",\n          "lv": "Přijedu až zítra."\n        },\n        {\n          "de": "Er ist erst 18 Jahre alt.",\n          "lv": "Je mu teprve 18 let."\n        },\n        {\n          "de": "Wir essen erst um acht Uhr.",\n          "lv": "Jíme jen v osm."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "erst",\n          "meaning": "Nejprve • Pouze",\n          "example": "Erst arbeiten, dann Pause. = Nejprve pracujte, pak pauza."\n        },\n        {\n          "word": "zuerst",\n          "meaning": "První • Na začátku",\n          "example": "Zuerst frühstücken wir. = Nejprve snídáme."\n        },\n        {\n          "word": "nur",\n          "meaning": "Pouze",\n          "example": "Ich habe nur 5 Euro. = Mám jen 5 eur."\n        },\n        {\n          "word": "dann",\n          "meaning": "Pak",\n          "example": "Dann gehen wir nach Hause. = Pak jdeme domů."\n        }\n      ],\n      "tip": {\n        "text": "Pamatujte: čas/číslo → erst • množství → nur."'],

  // 8. a1-es
  ['"id": "a1-es",\n      "layout": "standardStudy",\n      "translation": "To • To • Neosobní podoba",',
   '"id": "a1-es",\n      "layout": "standardStudy",\n      "translation": "To • Neosobní podoba",'],
  ['"id": "a1-es",\n      "layout": "standardStudy",\n      "translation": "To • Neosobní podoba",\n      "explanation": "Německé „já“ není zvyklé mluvit o sobě. Používá se k označení: to, to nebo neosobní tvar (počasí, čas, různé neosobní věty).",',
   '"id": "a1-es",\n      "layout": "standardStudy",\n      "translation": "To • Neosobní podoba",\n      "explanation": "Německé „es“ neznamená „já“. Používá se jako „to“ nebo v neosobních větách o počasí, čase a dalších dějích.",'],
  ['"de": "Ich lerne Deutsch.",\n          "lv": "Učím se německy."', '"de": "Ich lerne Deutsch.",\n          "lv": "Prší."'],
  ['"de": "Er ist müde.",\n          "lv": "Je unavený."', '"de": "Er ist müde.",\n          "lv": "Je chladno."'],
  ['"de": "Sie arbeitet hier.",\n          "lv": "Ona tady pracuje."', '"de": "Sie arbeitet hier.",\n          "lv": "Dítě spí."'],
  ['"de": "Das ist mein Buch.",\n          "lv": "Je to moje kniha."', '"de": "Das ist mein Buch.",\n          "lv": "Je unavené."'],
  ['"text": "Pamatujte: českýé \\"es\\" → ich, ne německé es."', '"text": "Pamatujte: lotyšské „es“ znamená německé ich, ne německé es."'],
  ['"Český “es” = vācu “ich”"', '"Lotyšské „es“ = německé „ich“"'],
  ['"Vācu “es” = tas • Tā • Bezpersoniska forma"', '"Německé „es“ = „to“ • neosobní tvar"'],

  // 9. a1-etwas
  ['"Pokud etwas nahradí neznámou věc, češtině obvykle něco řekne."',
   '"Když etwas označuje neznámou věc, v češtině se obvykle překládá jako „něco“."'],
  ['"Když etwas stojí před přídavným jménem nebo veličinou, často to znamená málo."',
   '"Když etwas stojí před přídavným jménem nebo veličinou, často znamená „trochu“ nebo „poněkud“."'],
  ['"text": "Pamatujte: věc → něco • Stupeň → mírně."', '"text": "Pamatujte: věc → něco • míra → trochu."'],
  ['"V češtině něco zní lépe než něco, například: etwas trinken = něco pít."',
   '"V češtině se tvar mění podle pádu: etwas trinken = něco pít."'],

  // 10. a1-euch
  ['"id": "a1-euch",\n      "layout": "standardStudy",\n      "translation": "Ty • Ty",',
   '"id": "a1-euch",\n      "layout": "standardStudy",\n      "translation": "Vás • Vám",'],
  ['"id": "a1-euch",\n      "layout": "standardStudy",\n      "translation": "Vás • Vám",\n      "explanation": "„euch“ je zájmeno 2. osoby množného čísla. Používá se jak jako přímý doplněk (kde?) – „vy“ tak jako nepřímý doplněk (ke komu?) – „k vám“.",',
   '"id": "a1-euch",\n      "layout": "standardStudy",\n      "translation": "Vás • Vám",\n      "explanation": "„Euch“ je zájmeno 2. osoby množného čísla. Používá se jako přímý předmět („vás“) i jako nepřímý předmět („vám“).",'],
  ['"de": "Ich sehe euch.",\n          "lv": "Vidím tě"', '"de": "Ich sehe euch.",\n          "lv": "Vidím vás."'],
  ['"de": "Ich helfe euch.",\n          "lv": "Pomáhám ti"', '"de": "Ich helfe euch.",\n          "lv": "Pomáhám vám."'],
  ['"de": "Ich gebe euch das Buch.",\n          "lv": "Dávám ti knihu"', '"de": "Ich gebe euch das Buch.",\n          "lv": "Dávám vám knihu."'],
  ['"de": "Ich danke euch.",\n          "lv": "Děkuji ti"', '"de": "Ich danke euch.",\n          "lv": "Děkuji vám."'],
  ['"de": "Ihr erinnert euch.",\n          "lv": "Pamatuješ"', '"de": "Ihr erinnert euch.",\n          "lv": "Pamatujete si."'],
  ['"word": "euch",\n          "meaning": "Vám / vám",', '"word": "euch",\n          "meaning": "Vás • Vám",'],
  ['"word": "euer",\n          "meaning": "Vaše",', '"word": "euer",\n          "meaning": "Váš • Vaše",'],
  ['"Euch = vás (přímý doplněk) / vám (dativ)"', '"Euch = vás (přímý předmět) • vám (dativ)"'],

  // 11. a1-fahren
  ['"id": "a1-fahren",\n      "layout": "standardStudy",\n      "translation": "Řídit • Vést • Odvézt",',
   '"id": "a1-fahren",\n      "layout": "standardStudy",\n      "translation": "Jezdit • Řídit • Vézt • Odvézt",'],
  ['"Hlavní myšlenka: fahren znamená řídit vozidlo a v některých větách také někoho vzít nebo vzít."',
   '"Hlavní myšlenka: fahren znamená jezdit nebo jet dopravním prostředkem a v některých větách také někoho vézt či odvézt."'],
  ['"Když má věta jako předmět osobu, fahren může znamenat vést nebo odnést."',
   '"Když má věta jako předmět osobu, fahren může znamenat vézt nebo odvézt."'],
  ['"de": "Ich fahre meine Tochter zur Schule.",\n          "lv": "Beru dceru do školy."',
   '"de": "Ich fahre meine Tochter zur Schule.",\n          "lv": "Vezmu dceru do školy."'],
  ['"de": "Ich fahre dich nach Hause.",\n          "lv": "Vezmu tě domů"',
   '"de": "Ich fahre dich nach Hause.",\n          "lv": "Odvezu tě domů."'],
  ['"word": "laufen",\n          "meaning": "Běž / běž",', '"word": "laufen",\n          "meaning": "Běhat • Běžet",'],
  ['"text": "Fahren ≠ jen „řídit“",\n        "example": "Vācu valodā viens un tas pats darbības vārds bieži nozīmē: braukt • Vest • Aizvest atkarībā no konteksta."',
   '"text": "Fahren ≠ jen „jezdit“",\n        "example": "V němčině může stejné sloveso podle kontextu znamenat: jezdit • vézt • odvézt."'],
  ['"purple": [\n          "Braukt",\n          "Braucu",\n          "Vest",\n          "Vedu",\n          "Aizvest"\n        ]',
   '"purple": [\n          "Jezdit",\n          "Braucu",\n          "Vézt",\n          "Vedu",\n          "Odvézt"\n        ]'],
  ['"Transportlīdzekli",', '"dopravním prostředkem",'],
  ['"Velosipēdu"', '"jízdní kolo"'],
  ['"Hlavní",\n            "vest",\n            "Hlavní"', '"Hlavní",\n            "vézt",\n            "Hlavní"'],
  ['"purple": [\n                "braukt"\n              ]', '"purple": [\n                "jezdit"\n              ]'],
  ['"purple": [\n                "braukt",\n                "vest",\n                "aizvest"\n              ]',
   '"purple": [\n                "jezdit",\n                "vézt",\n                "odvézt"\n              ]'],

  // 13. a1-Fernseher-182
  ['"de": "Fernseher",\n    "de_article": "der",\n    "de_plural": "die Fernseher",\n    "lv": "Televize",',
   '"de": "Fernseher",\n    "de_article": "der",\n    "de_plural": "die Fernseher",\n    "lv": "Televizor",'],

  // 14. a1-fett-184
  ['"de": "fett",\n    "lv": "Tuk",', '"de": "fett",\n    "lv": "Tučný",'],

  // 15. a1-finden
  ['"id": "a1-finden",\n      "layout": "standardStudy",\n      "translation": "Najít • Zvážit",',
   '"id": "a1-finden",\n      "layout": "standardStudy",\n      "translation": "Najít • Myslet si",'],
  ['"V konverzaci finden velmi často také znamená zvážit nebo přemýšlet o něčem."',
   '"V konverzaci finden velmi často také znamená považovat něco za dobré nebo mít na něco názor."'],
  ['"Pokud jde o ztracenou věc, překládá se to jako nález."',
   '"Pokud jde o ztracenou věc, překládá se jako najít."'],
  ['"text": "Pamatujte: ztracená věc → nalezená • Názor → najdu..."',
   '"text": "Pamatujte: ztracená věc → najít • názor → Ich finde..."'],

  // 16. a1-fragen-197
  ['"de": "fragen",\n    "lv": "Zeptat se",', '"de": "fragen",\n    "lv": "Ptát se",'],

  // 17. a1-frau
  ['"Hlavní myšlenka: die Frau může znamenat ženu (pohlaví) nebo manželku (manželku)."',
   '"Hlavní myšlenka: die Frau může znamenat ženu nebo manželku."'],
  ['"V případě manžela, die Frau = manželka (meine Frau = moje žena)."',
   '"V případě manželky, die Frau = manželka (meine Frau = moje žena)."'],
  ['"Přivlastňovací zájmeno (meine/deine/seine Frau) téměř vždy znamená manželka – manžel."',
   '"Přivlastňovací zájmeno (meine/deine/seine Frau) téměř vždy znamená manželku."'],
  ['"blue": [\n              "die Frau",\n              "eine Frau"\n            ],\n            "purple": [\n              "Přivlastňovací"\n            ]',
   '"blue": [\n              "die Frau",\n              "eine Frau"\n            ],\n            "purple": [\n              "Bez přivlastňovacího zájmena"\n            ]'],

  // 18. a1-frei-199
  ['"de": "frei",\n    "lv": "Uvolnit",', '"de": "frei",\n    "lv": "Volný",'],
];

const SKIPPED = [
  { id: 'a1-ein', field: 'study.comparison', reason: 'OWNER / PRECISE STRUCTURAL REPAIR REQUIRED' },
  { id: 'a1-erst', field: 'cross-dataset terminoloģija', reason: 'OWNER / CROSS-DATASET REVIEW' },
  { id: 'a1-es', field: 'study.comparison', reason: 'OWNER / PRECISE STRUCTURAL REPAIR REQUIRED' },
  { id: 'a1-Wochenende-181', field: 'de_plural', reason: 'DE READ-ONLY / SOURCE STRUCTURE ISSUE' },
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
