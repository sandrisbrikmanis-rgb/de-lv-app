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
  // 1. a1-jeder-300
  ['"de": "jeder",\n    "lv": "Každý z nich",', '"de": "jeder",\n    "lv": "Každý",'],

  // 2. a1-jung
  ['"id": "a1-jung",\n      "layout": "standardStudy",\n      "translation": "Mladý (o lidech)",',
   '"id": "a1-jung",\n      "layout": "standardStudy",\n      "translation": "Mladý (o lidech a zvířatech)",'],
  ['"de": "Das ist ein junges Paar.",\n          "lv": "Je to nový pár."',
   '"de": "Das ist ein junges Paar.",\n          "lv": "Je to mladý pár."'],

  // 3. a1-kein
  ['"id": "a1-kein",\n      "layout": "standardStudy",\n      "translation": "Nikdo • Nic",',
   '"id": "a1-kein",\n      "layout": "standardStudy",\n      "translation": "Žádný • Žádné",'],
  ['který neguje podstatné jméno - češtině', 'který neguje podstatné jméno — v češtině'],
  ['U nezávazných nebo abstraktních podstatných jmen se kein často překládá',
   'U nepočitatelných nebo abstraktních podstatných jmen se kein často překládá'],

  // 4. a1-Keks-309
  ['"de": "Keks",\n    "de_article": "der",\n    "de_plural": "die Kekse",\n    "lv": "Cookie",',
   '"de": "Keks",\n    "de_article": "der",\n    "de_plural": "die Kekse",\n    "lv": "Sušenka",'],

  // 5. a1-kennen-study
  ['"id": "a1-kennen-study",\n      "layout": "standardStudy",\n      "translation": "Vědět",',
   '"id": "a1-kennen-study",\n      "layout": "standardStudy",\n      "translation": "Znát",'],
  ['"id": "a1-kennen-study",\n      "layout": "standardStudy",\n      "translation": "Znát",\n      "explanation": [\n        "Hlavní myšlenka: Poznat osobu, místo nebo věc ze zkušenosti.",\n        "Kennen znamená především: osobní známost.",\n        "Často popisuje: lidi, místa.",\n        "Kennen se používá, když znáte osobu, místo nebo věc z osobní zkušenosti."\n      ],\n      "examples": [\n        {\n          "de": "Ich kenne ihn.",\n          "lv": "Znám ho."\n        },\n        {\n          "de": "Kennen Sie diese Frau?",\n          "lv": "Znáte tuto ženu?"\n        },\n        {\n          "de": "Wo habt ihr euch kennengelernt?",\n          "lv": "Kde jste se potkali?"\n        },\n        {\n          "de": "Ich kenne ihn.",\n          "lv": "Znám ho"\n        },\n        {\n          "de": "kennen",\n          "lv": "Poznat moudrý"\n        }\n      ],\n      "comparison": [\n        {\n          "word": "kennen",\n          "meaning": "Vědět (osoba, místo, věc)",',
   '"id": "a1-kennen-study",\n      "layout": "standardStudy",\n      "translation": "Znát",\n      "explanation": [\n        "Hlavní myšlenka: Poznat osobu, místo nebo věc ze zkušenosti.",\n        "Kennen znamená především: osobní známost.",\n        "Často popisuje: lidi, místa.",\n        "Kennen se používá, když znáte osobu, místo nebo věc z osobní zkušenosti."\n      ],\n      "examples": [\n        {\n          "de": "Ich kenne ihn.",\n          "lv": "Znám ho."\n        },\n        {\n          "de": "Kennen Sie diese Frau?",\n          "lv": "Znáte tuto ženu?"\n        },\n        {\n          "de": "Wo habt ihr euch kennengelernt?",\n          "lv": "Kde jste se potkali?"\n        },\n        {\n          "de": "Ich kenne ihn.",\n          "lv": "Znám ho"\n        },\n        {\n          "de": "kennen",\n          "lv": "Poznat moudrý"\n        }\n      ],\n      "comparison": [\n        {\n          "word": "kennen",\n          "meaning": "Znát (osobu, místo, věc)",'],
  ['"id": "a1-kennen-study",\n      "layout": "standardStudy",\n      "translation": "Znát",\n      "explanation": [\n        "Hlavní myšlenka: Poznat osobu, místo nebo věc ze zkušenosti.",\n        "Kennen znamená především: osobní známost.",\n        "Často popisuje: lidi, místa.",\n        "Kennen se používá, když znáte osobu, místo nebo věc z osobní zkušenosti."\n      ],\n      "examples": [\n        {\n          "de": "Ich kenne ihn.",\n          "lv": "Znám ho."\n        },\n        {\n          "de": "Kennen Sie diese Frau?",\n          "lv": "Znáte tuto ženu?"\n        },\n        {\n          "de": "Wo habt ihr euch kennengelernt?",\n          "lv": "Kde jste se potkali?"\n        },\n        {\n          "de": "Ich kenne ihn.",\n          "lv": "Znám ho"\n        },\n        {\n          "de": "kennen",\n          "lv": "Poznat moudrý"\n        }\n      ],\n      "comparison": [\n        {\n          "word": "kennen",\n          "meaning": "Znát (osobu, místo, věc)",\n          "example": "Ich kenne ihn. – Znám ho."\n        },\n        {\n          "word": "wissen",\n          "meaning": "Vědět (fakt, informace)",',
   '"id": "a1-kennen-study",\n      "layout": "standardStudy",\n      "translation": "Znát",\n      "explanation": [\n        "Hlavní myšlenka: Poznat osobu, místo nebo věc ze zkušenosti.",\n        "Kennen znamená především: osobní známost.",\n        "Často popisuje: lidi, místa.",\n        "Kennen se používá, když znáte osobu, místo nebo věc z osobní zkušenosti."\n      ],\n      "examples": [\n        {\n          "de": "Ich kenne ihn.",\n          "lv": "Znám ho."\n        },\n        {\n          "de": "Kennen Sie diese Frau?",\n          "lv": "Znáte tuto ženu?"\n        },\n        {\n          "de": "Wo habt ihr euch kennengelernt?",\n          "lv": "Kde jste se potkali?"\n        },\n        {\n          "de": "Ich kenne ihn.",\n          "lv": "Znám ho"\n        },\n        {\n          "de": "kennen",\n          "lv": "Poznat moudrý"\n        }\n      ],\n      "comparison": [\n        {\n          "word": "kennen",\n          "meaning": "Znát (osobu, místo, věc)",\n          "example": "Ich kenne ihn. – Znám ho."\n        },\n        {\n          "word": "wissen",\n          "meaning": "Vědět (fakt, informaci)",'],
  ['"de": "kennen",\n          "lv": "Poznat moudrý"', '"de": "kennen",\n          "lv": "Znát"'],
  ['"id": "a1-kennen-study",\n      "layout": "standardStudy",\n      "translation": "Znát",\n      "explanation": [\n        "Hlavní myšlenka: Poznat osobu, místo nebo věc ze zkušenosti.",\n        "Kennen znamená především: osobní známost.",\n        "Často popisuje: lidi, místa.",\n        "Kennen se používá, když znáte osobu, místo nebo věc z osobní zkušenosti."\n      ],\n      "examples": [\n        {\n          "de": "Ich kenne ihn.",\n          "lv": "Znám ho."\n        },\n        {\n          "de": "Kennen Sie diese Frau?",\n          "lv": "Znáte tuto ženu?"\n        },\n        {\n          "de": "Wo habt ihr euch kennengelernt?",\n          "lv": "Kde jste se potkali?"\n        },\n        {\n          "de": "Ich kenne ihn.",\n          "lv": "Znám ho"\n        },\n        {\n          "de": "kennen",\n          "lv": "Znát"\n        }\n      ],\n      "comparison": [\n        {\n          "word": "kennen",\n          "meaning": "Znát (osobu, místo, věc)",\n          "example": "Ich kenne ihn. – Znám ho."\n        },\n        {\n          "word": "wissen",\n          "meaning": "Vědět (fakt, informaci)",\n          "example": "Ich weiß seinen Namen. – Znám jeho jméno."\n        }\n      ],\n      "tip": [\n        "Kennen = vědět",',
   '"id": "a1-kennen-study",\n      "layout": "standardStudy",\n      "translation": "Znát",\n      "explanation": [\n        "Hlavní myšlenka: Poznat osobu, místo nebo věc ze zkušenosti.",\n        "Kennen znamená především: osobní známost.",\n        "Často popisuje: lidi, místa.",\n        "Kennen se používá, když znáte osobu, místo nebo věc z osobní zkušenosti."\n      ],\n      "examples": [\n        {\n          "de": "Ich kenne ihn.",\n          "lv": "Znám ho."\n        },\n        {\n          "de": "Kennen Sie diese Frau?",\n          "lv": "Znáte tuto ženu?"\n        },\n        {\n          "de": "Wo habt ihr euch kennengelernt?",\n          "lv": "Kde jste se potkali?"\n        },\n        {\n          "de": "Ich kenne ihn.",\n          "lv": "Znám ho"\n        },\n        {\n          "de": "kennen",\n          "lv": "Znát"\n        }\n      ],\n      "comparison": [\n        {\n          "word": "kennen",\n          "meaning": "Znát (osobu, místo, věc)",\n          "example": "Ich kenne ihn. – Znám ho."\n        },\n        {\n          "word": "wissen",\n          "meaning": "Vědět (fakt, informaci)",\n          "example": "Ich weiß seinen Namen. – Znám jeho jméno."\n        }\n      ],\n      "tip": [\n        "Kennen = znát",'],
  ['"Kennen = poznat osobu/místo.",\n        "Kennen = vědět.",',
   '"Kennen = poznat osobu/místo.",\n        "Kennen = znát.",'],

  // 6. a1-wissen-study
  ['"id": "a1-wissen-study",\n      "layout": "standardStudy",\n      "translation": "Vědět",\n      "explanation": [\n        "Hlavní myšlenka: Znát fakt, odpověď nebo informaci.",\n        "Wissen znamená především: informace/fakt.",\n        "Často charakterizováno: odpověďmi, daty.",\n        "Wissen se používá, když znáte fakt, odpověď nebo informaci."\n      ],\n      "examples": [\n        {\n          "de": "Ich weiß, wo er wohnt.",\n          "lv": "Vím, kde bydlí."\n        },\n        {\n          "de": "Woher wissen Sie das?",\n          "lv": "Jak to víš?"\n        },\n        {\n          "de": "Ich weiß die Antwort.",\n          "lv": "Odpověď znám."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "wissen",\n          "meaning": "Vědět (fakt, informace)",\n          "example": "Ich weiß, wo er wohnt. – Vím, kde bydlí."\n        },\n        {\n          "word": "kennen",\n          "meaning": "Vědět (osoba, místo, věc)",',
   '"id": "a1-wissen-study",\n      "layout": "standardStudy",\n      "translation": "Vědět",\n      "explanation": [\n        "Hlavní myšlenka: Znát fakt, odpověď nebo informaci.",\n        "Wissen znamená především: informace/fakt.",\n        "Často charakterizováno: odpověďmi, daty.",\n        "Wissen se používá, když znáte fakt, odpověď nebo informaci."\n      ],\n      "examples": [\n        {\n          "de": "Ich weiß, wo er wohnt.",\n          "lv": "Vím, kde bydlí."\n        },\n        {\n          "de": "Woher wissen Sie das?",\n          "lv": "Jak to víš?"\n        },\n        {\n          "de": "Ich weiß die Antwort.",\n          "lv": "Odpověď znám."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "wissen",\n          "meaning": "Vědět (fakt, informace)",\n          "example": "Ich weiß, wo er wohnt. – Vím, kde bydlí."\n        },\n        {\n          "word": "kennen",\n          "meaning": "Znát (osobu, místo, věc)",'],
  ['"id": "a1-wissen-study",\n      "layout": "standardStudy",\n      "translation": "Vědět",\n      "explanation": [\n        "Hlavní myšlenka: Znát fakt, odpověď nebo informaci.",\n        "Wissen znamená především: informace/fakt.",\n        "Často charakterizováno: odpověďmi, daty.",\n        "Wissen se používá, když znáte fakt, odpověď nebo informaci."\n      ],\n      "examples": [\n        {\n          "de": "Ich weiß, wo er wohnt.",\n          "lv": "Vím, kde bydlí."\n        },\n        {\n          "de": "Woher wissen Sie das?",\n          "lv": "Jak to víš?"\n        },\n        {\n          "de": "Ich weiß die Antwort.",\n          "lv": "Odpověď znám."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "wissen",\n          "meaning": "Vědět (fakt, informace)",\n          "example": "Ich weiß, wo er wohnt. – Vím, kde bydlí."\n        },\n        {\n          "word": "kennen",\n          "meaning": "Znát (osobu, místo, věc)",\n          "example": "Ich kenne die Stadt. – Znám to město."\n        }\n      ],\n      "tip": [\n        "Wissen = vědět",\n        "Použijte wissen, když kontext odpovídá tomuto významu."\n      ],\n      "important": [\n        "Wissen = znát skutečnost.",',
   '"id": "a1-wissen-study",\n      "layout": "standardStudy",\n      "translation": "Vědět",\n      "explanation": [\n        "Hlavní myšlenka: Znát fakt, odpověď nebo informaci.",\n        "Wissen znamená především: informace/fakt.",\n        "Často charakterizováno: odpověďmi, daty.",\n        "Wissen se používá, když znáte fakt, odpověď nebo informaci."\n      ],\n      "examples": [\n        {\n          "de": "Ich weiß, wo er wohnt.",\n          "lv": "Vím, kde bydlí."\n        },\n        {\n          "de": "Woher wissen Sie das?",\n          "lv": "Jak to víš?"\n        },\n        {\n          "de": "Ich weiß die Antwort.",\n          "lv": "Odpověď znám."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "wissen",\n          "meaning": "Vědět (fakt, informace)",\n          "example": "Ich weiß, wo er wohnt. – Vím, kde bydlí."\n        },\n        {\n          "word": "kennen",\n          "meaning": "Znát (osobu, místo, věc)",\n          "example": "Ich kenne die Stadt. – Znám to město."\n        }\n      ],\n      "tip": [\n        "Wissen = vědět",\n        "Použijte wissen, když kontext odpovídá tomuto významu."\n      ],\n      "important": [\n        "Wissen = vědět skutečnost.",'],

  // 7. a1-können
  ['"id": "a1-können",\n      "layout": "standardStudy",\n      "translation": "Umět • Vědět",',
   '"id": "a1-können",\n      "layout": "standardStudy",\n      "translation": "Umět • Moci",'],
  ['"de": "Kannst du mir helfen?",\n          "lv": "Můžete mi pomoci?"',
   '"de": "Kannst du mir helfen?",\n          "lv": "Můžeš mi pomoct?"'],
  ['"Pokud jde o schopnosti nebo dovednosti, češtině často říká vědět."',
   '"Pokud jde o schopnosti nebo dovednosti, česky často říkáme umět."'],
  ['"word": "können",\n          "meaning": "Být schopen / vědět",',
   '"word": "können",\n          "meaning": "Být schopen • Umět",'],
  ['"word": "müssen",\n          "meaning": "Potřebovat / být ano-",',
   '"word": "müssen",\n          "meaning": "Musit • Být nutné",'],
  ['"Können není totéž co dürfen. können = moci/vědět, dürfen = mít dovoleno."',
   '"Können není totéž co dürfen. können = moci/umět, dürfen = mít dovoleno."'],

  // 8. a1-kosten
  ['"id": "a1-kosten",\n      "layout": "standardStudy",\n      "translation": "Platit",',
   '"id": "a1-kosten",\n      "layout": "standardStudy",\n      "translation": "Stát",'],
  ['"Hlavní myšlenka: kosten znamená platit tak a tak - mluví o ceně věci."',
   '"Hlavní myšlenka: kosten znamená stát určitou částku — mluví o ceně věci."'],
  ['"word": "kosten",\n          "meaning": "Zaplatit (cena) • Kolik",',
   '"word": "kosten",\n          "meaning": "Stát (cena) • Kolik stát",'],
  ['"V češtině se v obou případech často používá plat, ale v němčině je třeba vybrat podle situace."',
   '"V češtině se v obou případech často používá sloveso platit, ale v němčině je třeba vybrat podle situace."'],

  // 9–13. simple lv
  ['"de": "Hut",\n    "de_article": "der",\n    "de_plural": "die Hüte",\n    "lv": "Čepice",',
   '"de": "Hut",\n    "de_article": "der",\n    "de_plural": "die Hüte",\n    "lv": "Klobouk",'],
  ['"de": "Koch",\n    "de_article": "der",\n    "de_plural": "die Köche",\n    "lv": "Vařit",',
   '"de": "Koch",\n    "de_article": "der",\n    "de_plural": "die Köche",\n    "lv": "Kuchař",'],
  ['"de": "Köchin",\n    "de_article": "die",\n    "de_plural": "die Köchinnen",\n    "lv": "Vařit",',
   '"de": "Köchin",\n    "de_article": "die",\n    "de_plural": "die Köchinnen",\n    "lv": "Kuchařka",'],
  ['"de": "Kopf",\n    "de_article": "der",\n    "de_plural": "die Köpfe",\n    "lv": "Hlavu",',
   '"de": "Kopf",\n    "de_article": "der",\n    "de_plural": "die Köpfe",\n    "lv": "Hlava",'],
  ['"de": "Kuchen",\n    "de_article": "der",\n    "de_plural": "die Kuchen",\n    "lv": "Dort",',
   '"de": "Kuchen",\n    "de_article": "der",\n    "de_plural": "die Kuchen",\n    "lv": "Koláč",'],

  // 14. a1-laden-study
  ['"id": "a1-laden-study",\n      "layout": "standardStudy",\n      "translation": "Nakupovat",',
   '"id": "a1-laden-study",\n      "layout": "standardStudy",\n      "translation": "Obchod",'],
  ['"Laden je malé sloveso - naložit nebo nabít."',
   '"laden je sloveso – znamená naložit nebo nabít."'],
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
