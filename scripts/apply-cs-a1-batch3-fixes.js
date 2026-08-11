#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const FILES = [
  path.join(__dirname, '../data/cs/a1.js'),
  path.join(__dirname, '../www/data/cs/a1.js'),
];

/** Unique before→after pairs (before must be unique in file) */
const REPLACEMENTS = [
  // 1. a1-bleiben — study fields only, not top-level lv
  ['"id": "a1-bleiben",\n      "layout": "standardStudy",\n      "translation": "Pobyt"',
   '"id": "a1-bleiben",\n      "layout": "standardStudy",\n      "translation": "Zůstat"'],
  ['"id": "a1-bleiben",\n      "layout": "standardStudy",\n      "translation": "Zůstat",\n      "explanation": [\n        "Hlavní myšlenka: bleiben znamená zůstat.",\n        "Bleiben se používá, když osoba nebo věc nezmizí a zůstane na stejném místě nebo stavu.",\n        "Je to opak gehen a fahren, pokud jde o odchod.",\n        "Velmi častou frází je Ich bleibe zu Hause."\n      ],\n      "examples": [\n        {\n          "de": "Ich bleibe zu Hause.",\n          "lv": "Zůstávám doma"\n        },\n        {\n          "de": "Bleib hier!",\n          "lv": "Zůstaň tady!"\n        },\n        {\n          "de": "Wir bleiben noch eine Stunde.",\n          "lv": "Zůstáváme další hodinu."\n        },\n        {\n          "de": "Ich gehe nach Hause.",\n          "lv": "Jdu domů"\n        }\n      ],\n      "comparison": [\n        {\n          "word": "bleiben",\n          "meaning": "Pobyt",',
   '"id": "a1-bleiben",\n      "layout": "standardStudy",\n      "translation": "Zůstat",\n      "explanation": [\n        "Hlavní myšlenka: bleiben znamená zůstat.",\n        "Bleiben se používá, když osoba nebo věc nezmizí a zůstane na stejném místě nebo stavu.",\n        "Je to opak gehen a fahren, pokud jde o odchod.",\n        "Velmi častou frází je Ich bleibe zu Hause."\n      ],\n      "examples": [\n        {\n          "de": "Ich bleibe zu Hause.",\n          "lv": "Zůstávám doma"\n        },\n        {\n          "de": "Bleib hier!",\n          "lv": "Zůstaň tady!"\n        },\n        {\n          "de": "Wir bleiben noch eine Stunde.",\n          "lv": "Zůstáváme další hodinu."\n        },\n        {\n          "de": "Ich gehe nach Hause.",\n          "lv": "Jdu domů"\n        }\n      ],\n      "comparison": [\n        {\n          "word": "bleiben",\n          "meaning": "Zůstat",'],

  // 2. a1-blond-103
  ['"de": "blond",\n    "lv": "Blondýnka",',
   '"de": "blond",\n    "lv": "Blond",'],

  // 3. a1-bringen
  ['"de": "Bring mir bitte Wasser.",\n          "lv": "Přines mi prosím vodu"',
   '"de": "Bring mir bitte Wasser.",\n          "lv": "Přinesu ti knihu."'],
  ['"de": "Er bringt das Buch zur Schule.",\n          "lv": "Vezme knihu do školy."',
   '"de": "Er bringt das Buch zur Schule.",\n          "lv": "Donese knihu do školy."'],
  ['          "word": "nehmen",\n          "meaning": "Vzít / vzít",\n          "example": "Ich nehme das Buch."\n        },\n        {\n          "word": "holen",\n          "meaning": "Jít za / aport",',
   '          "word": "nehmen",\n          "meaning": "Vzít / vzít",\n          "example": "Ich nehme das Buch."\n        },\n        {\n          "word": "holen",\n          "meaning": "Jít pro • Dojít pro",'],
  ['"word": "mitbringen",\n          "meaning": "Odnést a přinést",',
   '"word": "mitbringen",\n          "meaning": "Přinést s sebou",'],
  ['"text": "Pamatujte: přestěhovat se k někomu → přinést • Vzít si pro sebe → nehmen."',
   '"text": "Pamatujte: dopravit něco k někomu nebo na jiné místo → bringen • vzít si něco pro sebe → nehmen."'],
  ['"Hlavní myšlenka: přinést někomu něco přinést, nést nebo doručit."',
   '"Bringen znamená přinést, odnést, dovézt nebo doručit něco někomu či na určité místo. Přesný překlad závisí na kontextu."'],
  ['"Holen znamená jít za a aportovat nebo brát."',
   '"Holen znamená jít nebo zajít pro něco a přinést to."'],
  ['"Přinesený ukazuje někomu směr nebo místo."',
   '"Bringen ukazuje směr k jiné osobě nebo na určité místo."'],

  // 4–7. simple lv fixes
  ['"de": "Butterbrot",\n    "de_article": "das",\n    "de_plural": "die Butterbrote",\n    "lv": "Sendvič",',
   '"de": "Butterbrot",\n    "de_article": "das",\n    "de_plural": "die Butterbrote",\n    "lv": "Chléb s máslem",'],
  ['"de": "Buch",\n    "de_article": "das",\n    "de_plural": "die Bücher",\n    "lv": "Rezervovat",',
   '"de": "Buch",\n    "de_article": "das",\n    "de_plural": "die Bücher",\n    "lv": "Kniha",'],
  ['"de": "Buchstabe",\n    "de_article": "der",\n    "de_plural": "die Buchstaben",\n    "lv": "Dopis",',
   '"de": "Buchstabe",\n    "de_article": "der",\n    "de_plural": "die Buchstaben",\n    "lv": "Písmeno",'],
  ['"de": "Cousine",\n    "de_article": "die",\n    "de_plural": "die Cousinen",\n    "lv": "Bratranec",',
   '"de": "Cousine",\n    "de_article": "die",\n    "de_plural": "die Cousinen",\n    "lv": "Sestřenice",'],

  // 8. a1-da
  ['"de": "Da kommt er.",\n          "lv": "Tady přichází."',
   '"de": "Da kommt er.",\n          "lv": "Tamhle přichází."'],
  ['"Podle situace to lze přeložit i jako zde nebo zde."',
   '"Podle situace to lze přeložit také jako zde nebo tady."'],
  ['"text": "Pamatujte: generál tam/te → da."',
   '"text": "Pamatujte: obecné tam nebo zde → da."'],

  // 9. a1-danken-127
  ['"de": "danken",\n    "lv": "Poděkovat",',
   '"de": "danken",\n    "lv": "Děkovat",'],

  // 10. a1-das
  ['"id": "a1-das",\n      "layout": "standardStudy",\n      "translation": "Neuter určitý člen",\n      "explanation": "Používá se pro podstatná jména středního rodu. V některých větách může „to“ fungovat také jako zájmeno nebo vztažné zájmeno."',
   '"id": "a1-das",\n      "layout": "standardStudy",\n      "translation": "Určitý člen středního rodu",\n      "explanation": "Používá se před podstatnými jmény středního rodu. V některých větách může das fungovat také jako zájmeno nebo vztažné zájmeno."'],
  ['"word": "welches",\n          "meaning": "Kdo • Který • Kdo",',
   '"word": "welches",\n          "meaning": "Který • Která • Které",'],
  ['"text": "Pamatujte: střední genitiv → das • Že → dass."',
   '"text": "Pamatujte: střední rod → das • že → dass."'],
  ['"Das není totéž co dass – das může být člen nebo zájmeno, dass znamená \'to\'."',
   '"Das není totéž co dass – das může být člen nebo zájmeno, dass znamená „že“."'],

  // 11. a1-dass
  ['"id": "a1-dass",\n      "layout": "standardStudy",\n      "translation": "Že",\n      "explanation": "Zavádí pomocnou klauzuli, která vyjadřuje skutečnost, myšlenku nebo tvrzení."',
   '"id": "a1-dass",\n      "layout": "standardStudy",\n      "translation": "Že",\n      "explanation": "Uvozuje vedlejší větu, která vyjadřuje skutečnost, myšlenku nebo tvrzení."'],
  ['"word": "damit",\n          "meaning": "Na",',
   '"word": "damit",\n          "meaning": "Aby",'],
  ['"word": "ob",\n          "meaning": "Nebo",',
   '"word": "ob",\n          "meaning": "Zda • Jestli",'],
  ['"text": "Pamatujte: to → dass."',
   '"text": "Pamatujte: že → dass."'],
  ['"Dass znamená „to“ a zavádí pomocnou klauzuli."',
   '"Dass znamená „že“ a uvozuje vedlejší větu."'],

  // 12. a1-dein-132
  ['"de": "dein",\n    "lv": "Vaše",',
   '"de": "dein",\n    "lv": "Tvůj",'],

  // 13. a1-der
  ['"de": "Der Bus kommt.",\n          "lv": "Autobus jede."',
   '"de": "Der Bus kommt.",\n          "lv": "Autobus přijíždí."'],
  ['"text": "Pamatujte: mužský → sedí."',
   '"text": "Pamatujte: mužský rod → der."'],
  ['"Použití zájmen a relativního jména přijde později."',
   '"Použití zájmena a vztažného zájmena přijde později."'],

  // 14. a1-deutsch-135
  ['"de": "deutsch",\n    "lv": "Němec",',
   '"de": "deutsch",\n    "lv": "Německý",'],

  // 15. a1-die
  ['"id": "a1-die",\n      "layout": "standardStudy",\n      "translation": "Ženský určitý člen",\n      "explanation": "Používá se s podstatnými jmény ženského rodu. V některých větách může „umřít“ fungovat také jako zájmeno nebo vztažné zájmeno."',
   '"id": "a1-die",\n      "layout": "standardStudy",\n      "translation": "Ženský určitý člen",\n      "explanation": "Používá se s podstatnými jmény ženského rodu. V některých větách může „die“ fungovat také jako zájmeno nebo vztažné zájmeno."'],
  ['"de": "Die Katze schläft.",\n          "lv": "Kotě spí."',
   '"de": "Die Katze schläft.",\n          "lv": "Kočka spí."'],
  ['"de": "Die Lehrerin erklärt.",\n          "lv": "Vysvětluje učitel."',
   '"de": "Die Lehrerin erklärt.",\n          "lv": "Učitelka vysvětluje."'],
  ['"text": "Pamatujte: ženský → zemřít."',
   '"text": "Pamatujte: ženský rod → die."'],
  ['"Množné číslo kostky se také používá pro všechna pohlaví."',
   '"V množném čísle se die používá pro všechny rody."'],

  // 16. a1-dieser
  ['"de": "Dieser Mann ist nett.",\n          "lv": "Tento muž je pěkný."',
   '"de": "Dieser Mann ist nett.",\n          "lv": "Tento muž je milý."'],
  ['"de": "Ich mag diesen Hund.",\n          "lv": "Líbí se mi tento pes"',
   '"de": "Ich mag diesen Hund.",\n          "lv": "Mám rád tohoto psa."'],
  ['"de": "Dieser Stift ist neu.",\n          "lv": "Toto pero je nové."',
   '"de": "Dieser Stift ist neu.",\n          "lv": "Tahle propiska je nová."'],
  ['"text": "Pamatujte: toto + mužský → dieser."',
   '"text": "Pamatujte: tento + mužský rod → dieser."'],
  ['"Dieser, diese a dieses se mění podle pohlaví."',
   '"Dieser, diese a dieses se mění podle rodu."'],

  // 17. a1-du-149
  ['"de": "du",\n    "lv": "Vy",',
   '"de": "du",\n    "lv": "Ty",'],
];

const SKIPPED = [
  {
    id: 'a1-die',
    field: 'study.important[0]',
    expectedBefore: 'Na úrovni A1 byste se měli nejprve učit jako mužský článek.',
    actualBefore: 'Na úrovni A1 je kostka nejprve studována jako ženský článek.',
  },
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
      results.push({ index: i, status: 'MISS', before: before.slice(0, 60) });
      continue;
    }
    if (count > 1) {
      results.push({ index: i, status: 'AMBIG', count, before: before.slice(0, 60) });
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
    for (const f of failed) {
      console.error(`  [${f.index}] ${f.status}: ${f.before}...`);
    }
  }
  fs.writeFileSync(filePath, newContent, 'utf8');
  const count = verifySyntax(filePath, newContent);
  console.log(`${filePath}: ${results.filter((r) => r.status === 'OK').length}/${REPLACEMENTS.length} OK, ${count} cards`);
}

console.log('\nSkipped (PIRMS mismatch):');
for (const s of SKIPPED) {
  console.log(`  ${s.id} ${s.field}`);
}

if (hadError) process.exit(1);
