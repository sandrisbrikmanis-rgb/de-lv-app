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
  // 1. a1-ob
  ['"de": "ob",\n    "lv": "Nebo",\n    "level": "A1",\n    "study": {\n      "id": "a1-ob",\n      "layout": "standardStudy",\n      "translation": "Nebo",',
   '"de": "ob",\n    "lv": "Zda • Jestli",\n    "level": "A1",\n    "study": {\n      "id": "a1-ob",\n      "layout": "standardStudy",\n      "translation": "Zda • Jestli",'],
  ['"Hlavní myšlenka: ob zavádí nepřímou otázku a v češtině nejčastěji znamená popř.",',
   '"Hlavní myšlenka: ob zavádí nepřímou otázku a v češtině nejčastěji znamená „zda“ nebo „jestli“.",'],
  ['"de": "Ich weiß nicht, ob er kommt.",\n          "lv": "Nevím jestli přijde."',
   '"de": "Ich weiß nicht, ob er kommt.",\n          "lv": "Nevím, jestli přijde."'],
  ['"id": "a1-ob",\n      "layout": "standardStudy",\n      "translation": "Zda • Jestli",\n      "explanation": [\n        "Hlavní myšlenka: ob zavádí nepřímou otázku a v češtině nejčastěji znamená „zda“ nebo „jestli“.",\n        "Ob se používá po slovech jako fragen, wissen, sehen, sagen, když neexistuje přímá otázka.",\n        "Ob se obvykle nepoužívá v přímé otázce v němčině.",\n        "Na úrovni A1 je důležité odlišit ob od oder."\n      ],\n      "examples": [\n        {\n          "de": "Ich weiß nicht, ob er kommt.",\n          "lv": "Nevím, jestli přijde."\n        },\n        {\n          "de": "Sie fragt, ob du Zeit hast.",\n          "lv": "Ptá se, jestli máš čas."\n        },\n        {\n          "de": "Sag mir, ob das stimmt.",\n          "lv": "Řekni mi, jestli je to pravda."\n        },\n        {\n          "de": "Kommst du heute oder morgen?",\n          "lv": "Přijdeš dnes nebo zítra?"\n        }\n      ],\n      "comparison": [\n        {\n          "word": "ob",\n          "meaning": "Nebo v nepřímé otázce",',
   '"id": "a1-ob",\n      "layout": "standardStudy",\n      "translation": "Zda • Jestli",\n      "explanation": [\n        "Hlavní myšlenka: ob zavádí nepřímou otázku a v češtině nejčastěji znamená „zda“ nebo „jestli“.",\n        "Ob se používá po slovech jako fragen, wissen, sehen, sagen, když neexistuje přímá otázka.",\n        "Ob se obvykle nepoužívá v přímé otázce v němčině.",\n        "Na úrovni A1 je důležité odlišit ob od oder."\n      ],\n      "examples": [\n        {\n          "de": "Ich weiß nicht, ob er kommt.",\n          "lv": "Nevím, jestli přijde."\n        },\n        {\n          "de": "Sie fragt, ob du Zeit hast.",\n          "lv": "Ptá se, jestli máš čas."\n        },\n        {\n          "de": "Sag mir, ob das stimmt.",\n          "lv": "Řekni mi, jestli je to pravda."\n        },\n        {\n          "de": "Kommst du heute oder morgen?",\n          "lv": "Přijdeš dnes nebo zítra?"\n        }\n      ],\n      "comparison": [\n        {\n          "word": "ob",\n          "meaning": "Zda v nepřímé otázce",'],
  ['"word": "oder",\n          "meaning": "Nebo si vyberte mezi možnostmi",\n          "example": "Kaffee oder Tee?"\n        },\n        {\n          "word": "wenn",\n          "meaning": "Jestli / kdy",\n          "example": "Wenn du Zeit hast..."\n        },\n        {\n          "word": "dass",\n          "meaning": "Že",\n          "example": "Ich weiß, dass er kommt."\n        }\n      ],\n      "tip": {\n        "text": "Pamatujte: Nevím, jestli... → ob • Káva nebo čaj → nebo."\n      },\n      "important": [\n        "Ob není obvyklá forma volby „nebo“ mezi dvěma věcmi.",\n        "Kaffee nebo Tee? místo ob. užívá se oder."',
   '"word": "oder",\n          "meaning": "Nebo při volbě mezi možnostmi",\n          "example": "Kaffee oder Tee?"\n        },\n        {\n          "word": "wenn",\n          "meaning": "Jestli / kdy",\n          "example": "Wenn du Zeit hast..."\n        },\n        {\n          "word": "dass",\n          "meaning": "Že",\n          "example": "Ich weiß, dass er kommt."\n        }\n      ],\n      "tip": {\n        "text": "Pamatujte: Nevím, jestli... → ob • Káva nebo čaj → nebo."\n      },\n      "important": [\n        "Ob není obvyklá forma volby „nebo“ mezi dvěma věcmi.",\n        "V otázce „Kaffee oder Tee?“ se používá oder, nikoli ob."'],

  // 2. a1-oben-458
  ['"de": "oben",\n    "lv": "Výše",',
   '"de": "oben",\n    "lv": "Nahoře",'],

  // 3. a1-oder
  ['"de": "oder",\n    "lv": "Nebo • Nebo",\n    "level": "A1",\n    "study": {\n      "id": "a1-oder",\n      "layout": "standardStudy",\n      "translation": "Nebo • Nebo",',
   '"de": "oder",\n    "lv": "Nebo",\n    "level": "A1",\n    "study": {\n      "id": "a1-oder",\n      "layout": "standardStudy",\n      "translation": "Nebo",'],
  ['"Hlavní myšlenka: oder se používá, když volíme mezi dvěma nebo více možnostmi.",',
   '"Hlavní myšlenka: oder znamená „nebo“ a používá se při volbě mezi dvěma nebo více možnostmi.",'],
  ['"V češtině oder nejčastěji znamená popř.",',
   '"V češtině oder nejčastěji znamená „nebo“.",'],
  ['"id": "a1-oder",\n      "layout": "standardStudy",\n      "translation": "Nebo",\n      "explanation": [\n        "Hlavní myšlenka: oder znamená „nebo“ a používá se při volbě mezi dvěma nebo více možnostmi.",\n        "V češtině oder nejčastěji znamená „nebo“.",\n        "Není to totéž jako ob, které zavádí nepřímou otázku.",\n        "V rozhovorech může být oder i na konci věty: Du kommst, oder?"\n      ],\n      "examples": [\n        {\n          "de": "Kaffee oder Tee?",\n          "lv": "Káva nebo čaj?"\n        },\n        {\n          "de": "Heute oder morgen?",\n          "lv": "Dnes nebo zítra?"\n        },\n        {\n          "de": "Willst du Pizza oder Salat?",\n          "lv": "Chceš pizzu nebo salát"\n        },\n        {\n          "de": "Du kommst, oder?",\n          "lv": "Přijdeš, ne?"\n        }\n      ],\n      "comparison": [\n        {\n          "word": "oder",\n          "meaning": "Nebo si vyberte",\n          "example": "Kaffee oder Tee?"\n        },\n        {\n          "word": "ob",\n          "meaning": "Nebo v nepřímé otázce",',
   '"id": "a1-oder",\n      "layout": "standardStudy",\n      "translation": "Nebo",\n      "explanation": [\n        "Hlavní myšlenka: oder znamená „nebo“ a používá se při volbě mezi dvěma nebo více možnostmi.",\n        "V češtině oder nejčastěji znamená „nebo“.",\n        "Není to totéž jako ob, které zavádí nepřímou otázku.",\n        "V rozhovorech může být oder i na konci věty: Du kommst, oder?"\n      ],\n      "examples": [\n        {\n          "de": "Kaffee oder Tee?",\n          "lv": "Káva nebo čaj?"\n        },\n        {\n          "de": "Heute oder morgen?",\n          "lv": "Dnes nebo zítra?"\n        },\n        {\n          "de": "Willst du Pizza oder Salat?",\n          "lv": "Chceš pizzu nebo salát?"\n        },\n        {\n          "de": "Du kommst, oder?",\n          "lv": "Přijdeš, ne?"\n        }\n      ],\n      "comparison": [\n        {\n          "word": "oder",\n          "meaning": "Nebo si vyberte",\n          "example": "Kaffee oder Tee?"\n        },\n        {\n          "word": "ob",\n          "meaning": "Zda v nepřímé otázce",'],

  // 4. a1-Ostern-467
  ['"de": "Ostern",\n    "lv": "Velikonoční",',
   '"de": "Ostern",\n    "lv": "Velikonoce",'],

  // 5. a1-passen
  ['"de": "passen",\n    "lv": "Pasovat • Pasovat",\n    "level": "A1",\n    "study": {\n      "id": "a1-passen",\n      "layout": "standardStudy",\n      "translation": "Pasovat • Pasovat",',
   '"de": "passen",\n    "lv": "Pasovat • Slušet",\n    "level": "A1",\n    "study": {\n      "id": "a1-passen",\n      "layout": "standardStudy",\n      "translation": "Pasovat • Slušet",'],
  ['"U oblečení passen často znamená přizpůsobit se velikosti."',
   '"U oblečení passen často znamená dobře sedět nebo pasovat velikostí."'],
  ['"Pro barvy nebo styl znamená passen padnout."',
   '"U barev nebo stylu passen znamená slušet nebo ladit."'],
  ['"word": "passen",\n          "meaning": "Fit / fit",',
   '"word": "passen",\n          "meaning": "Pasovat • Slušet",'],
  ['"id": "a1-passen",\n      "layout": "standardStudy",\n      "translation": "Pasovat • Slušet",\n      "explanation": [\n        "Hlavní myšlenka: passen znamená pasovat, slušet nebo být vhodný.",\n        "U oblečení passen často znamená dobře sedět nebo pasovat velikostí.",\n        "U barev nebo stylu passen znamená slušet nebo ladit.",\n        "Velmi častou frází je Das passt. = Hodí se."\n      ],\n      "examples": [\n        {\n          "de": "Die Jacke passt mir.",\n          "lv": "Bunda mi sedí."\n        },\n        {\n          "de": "Das Kleid passt gut.",\n          "lv": "Šaty dobře sedí."\n        },\n        {\n          "de": "Die Farbe passt zu dir.",\n          "lv": "Tato barva ti sluší."\n        },\n        {\n          "de": "Das passt.",\n          "lv": "To sedí."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "passen",\n          "meaning": "Pasovat • Slušet",\n          "example": "Die Jacke passt mir."\n        },\n        {\n          "word": "stehen",\n          "meaning": "Stát / stát",',
   '"id": "a1-passen",\n      "layout": "standardStudy",\n      "translation": "Pasovat • Slušet",\n      "explanation": [\n        "Hlavní myšlenka: passen znamená pasovat, slušet nebo být vhodný.",\n        "U oblečení passen často znamená dobře sedět nebo pasovat velikostí.",\n        "U barev nebo stylu passen znamená slušet nebo ladit.",\n        "Velmi častou frází je Das passt. = Hodí se."\n      ],\n      "examples": [\n        {\n          "de": "Die Jacke passt mir.",\n          "lv": "Bunda mi sedí."\n        },\n        {\n          "de": "Das Kleid passt gut.",\n          "lv": "Šaty dobře sedí."\n        },\n        {\n          "de": "Die Farbe passt zu dir.",\n          "lv": "Tato barva ti sluší."\n        },\n        {\n          "de": "Das passt.",\n          "lv": "To sedí."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "passen",\n          "meaning": "Pasovat • Slušet",\n          "example": "Die Jacke passt mir."\n        },\n        {\n          "word": "stehen",\n          "meaning": "Slušet • Stát",'],
  ['"word": "geeignet sein",\n          "meaning": "Být vhodný",\n          "example": "Das ist geeignet."\n        },\n        {\n          "word": "funktionieren",\n          "meaning": "Provozovat",\n          "example": "Das funktioniert."\n        }\n      ],\n      "tip": {\n        "text": "Pamatujte: Das passt. = Hodí se."',
   '"word": "geeignet sein",\n          "meaning": "Být vhodný",\n          "example": "Das ist geeignet."\n        },\n        {\n          "word": "funktionieren",\n          "meaning": "Fungovat",\n          "example": "Das funktioniert."\n        }\n      ],\n      "tip": {\n        "text": "Pamatujte: Das passt. = Hodí se."'],

  // 6. a1-Pferd-474
  ['"de": "Pferd",\n    "de_article": "das",\n    "de_plural": "die Pferde",\n    "lv": "Koně",',
   '"de": "Pferd",\n    "de_article": "das",\n    "de_plural": "die Pferde",\n    "lv": "Kůň",'],

  // 7. a1-probieren
  ['"de": "Probier mal die Suppe!",\n          "lv": "Ochutnejte polévku!"',
   '"de": "Probier mal die Suppe!",\n          "lv": "Ochutnej polévku!"'],
  ['"text": "Pamatujte: jídlo → probieren = podle chuti."',
   '"text": "Pamatujte: jídlo → probieren = ochutnat."'],

  // 8. a1-Programm-484
  ['"de": "Programm",\n    "de_article": "das",\n    "de_plural": "die Programme",\n    "lv": "Naprogramovat",',
   '"de": "Programm",\n    "de_article": "das",\n    "de_plural": "die Programme",\n    "lv": "Program",'],

  // 9. a1-putzen-487
  ['"de": "putzen",\n    "lv": "Vyčistit",',
   '"de": "putzen",\n    "lv": "Čistit",'],

  // 10. a1-rechts-491
  ['"de": "rechts",\n    "lv": "Doprava • Doprava",',
   '"de": "rechts",\n    "lv": "Doprava • Pravý",'],

  // 11. a1-regnen-495
  ['"de": "regnen",\n    "lv": "Prší",',
   '"de": "regnen",\n    "lv": "Pršet",'],

  // 12. a1-reis
  ['"explanation": "V němčině se slovo „der Reis“ používá pouze v jednotném čísle, takže sloveso ve větě musí být v jednotném čísle (např. „ist“, nikoli „sind“). Lotyši však často říkají „rýže“.",',
   '"explanation": "V němčině se slovo „der Reis“ používá pouze v jednotném čísle, takže sloveso ve větě musí být v jednotném čísle (např. „ist“, nikoli „sind“). V češtině je „rýže“ také podstatné jméno v jednotném čísle.",'],
  ['"V českým překladu se často používá množné číslo: rýže je hotová."',
   '"V českém překladu se používá jednotné číslo: rýže je hotová."'],

  // 13. a1-richtig-497
  ['"de": "richtig",\n    "lv": "Opravit",',
   '"de": "richtig",\n    "lv": "Správný",'],
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
