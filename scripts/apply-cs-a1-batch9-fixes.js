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
  // 1. a1-mein-401
  ['"de": "mein",\n    "lv": "Moje",',
   '"de": "mein",\n    "lv": "Můj",'],

  // 2. a1-Million-406
  ['"de": "Million",\n    "de_article": "die",\n    "de_plural": "die Millionen",\n    "lv": "Milión",',
   '"de": "Million",\n    "de_article": "die",\n    "de_plural": "die Millionen",\n    "lv": "Milion",'],

  // 3. a1-Minute-407
  ['"de": "Minute",\n    "de_article": "die",\n    "de_plural": "die Minuten",\n    "lv": "Minutu",',
   '"de": "Minute",\n    "de_article": "die",\n    "de_plural": "die Minuten",\n    "lv": "Minuta",'],

  // 4. a1-mit
  ['"de": "Ich komme mit dir.",\n          "lv": "Jdu s tebou"',
   '"de": "Ich komme mit dir.",\n          "lv": "Jdu s tebou."'],
  ['"de": "Ich fahre mit dem Bus.",\n          "lv": "Jedu autobusem"',
   '"de": "Ich fahre mit dem Bus.",\n          "lv": "Jedu autobusem."'],
  ['"word": "zu",\n          "meaning": "Do / v",\n          "example": "Ich gehe zum Arzt."\n        }\n      ],\n      "tip": {\n        "text": "Pamatujte: spolu s někým nebo s dopravou → mit."',
   '"word": "zu",\n          "meaning": "K / ke",\n          "example": "Ich gehe zum Arzt."\n        }\n      ],\n      "tip": {\n        "text": "Pamatujte: spolu s někým nebo s dopravou → mit."'],
  ['"Kde bydlíš? znamená \\"Půjdeš se mnou?\\""',
   '"Kommst du mit? znamená „Půjdeš se mnou?“"'],

  // 5. a1-Mittag-410
  ['"de": "Mittag",\n    "de_article": "der",\n    "de_plural": "die Mittage",\n    "lv": "Oběd",',
   '"de": "Mittag",\n    "de_article": "der",\n    "de_plural": "die Mittage",\n    "lv": "Poledne",'],

  // 6. a1-mögen
  ['"de": "Ich mag Musik.",\n          "lv": "Mám rád hudbu"',
   '"de": "Ich mag Musik.",\n          "lv": "Mám rád hudbu."'],
  ['"de": "Magst du Kaffee?",\n          "lv": "Máš rád kávu"',
   '"de": "Magst du Kaffee?",\n          "lv": "Máš rád kávu?"'],
  ['"de": "Ich möchte einen Kaffee.",\n          "lv": "Chtěl bych kávu"',
   '"de": "Ich möchte einen Kaffee.",\n          "lv": "Chtěl bych kávu."'],
  ['"Mögen není podstatné jméno pro zdvořilé „chtěl bych“. Obvykle se k tomu používá Möchte."',
   '"Mögen se nepoužívá pro zdvořilé „chtěl bych“. K tomu se obvykle používá möchte."'],

  // 7. a1-morgen
  ['"id": "a1-morgen",\n      "layout": "standardStudy",\n      "translation": "Zítra",\n      "explanation": [\n        "Hlavní myšlenka: Příslovce času je malé. Znamená další den – zítra.",\n        "Morgen hlavně znamená: druhý den.",\n        "Často charakterizováno: počasím.",\n        "Morgen především znamená: část dne.",\n        "Často popisuje: podstatné jméno (der).",\n        "Morgen v podstatě znamená: několik ran.",\n        "Často charakterizováno: podstatné jméno (pl.).",\n        "Morgen s malým počátečním písmenem znamená zítra - pozítří (Ich komme morgen = přijdu zítra, Bis morgen!"\n      ],',
   '"id": "a1-morgen",\n      "layout": "standardStudy",\n      "translation": "Zítra",\n      "explanation": [\n        "Hlavní myšlenka: morgen s malým písmenem znamená zítra.",\n        "Der Morgen s velkým písmenem je podstatné jméno a znamená ráno.",\n        "Morgen je časové příslovce označující následující den.",\n        "Příklady: Ich komme morgen = Přijdu zítra; Bis morgen! = Až zítra!"\n      ],'],

  // 8. a1-morgen-study
  ['"id": "a1-morgen-study",\n      "layout": "standardStudy",\n      "translation": "Ráno",\n      "explanation": [\n        "Hlavní myšlenka: Podstatné jméno se členem se hodí a je velké. Denní část – dopoledne.",\n        "Der Morgen hlavně znamená: druhý den.",\n        "Často charakterizováno: počasím.",\n        "Der Morgen primárně znamená: část dne.",\n        "Často popisuje: podstatné jméno (der).",\n        "Der Morgen v podstatě znamená: několik ran.",\n        "Často charakterizováno: podstatné jméno (pl.).",\n        "Morgen s malým počátečním písmenem znamená zítra - pozítří (Ich komme morgen = přijdu zítra, Bis morgen!"\n      ],',
   '"id": "a1-morgen-study",\n      "layout": "standardStudy",\n      "translation": "Ráno",\n      "explanation": [\n        "Hlavní myšlenka: der Morgen je podstatné jméno se členem der a velkým písmenem. Označuje část dne – ráno.",\n        "Der Morgen znamená ráno, ne zítra.",\n        "morgen s malým písmenem znamená zítra.",\n        "Příklady: Guten Morgen! = Dobré ráno; Der Morgen ist schön = Ráno je krásné."\n      ],'],
  ['"id": "a1-morgen-study",\n      "layout": "standardStudy",\n      "translation": "Ráno",\n      "explanation": [\n        "Hlavní myšlenka: der Morgen je podstatné jméno se členem der a velkým písmenem. Označuje část dne – ráno.",\n        "Der Morgen znamená ráno, ne zítra.",\n        "morgen s malým písmenem znamená zítra.",\n        "Příklady: Guten Morgen! = Dobré ráno; Der Morgen ist schön = Ráno je krásné."\n      ],\n      "examples": [\n        {\n          "de": "Guten Morgen!",\n          "lv": "Dobré ráno!"\n        },\n        {\n          "de": "Bis morgen!",\n          "lv": "Až zítra!"\n        },\n        {\n          "de": "Ich komme morgen.",\n          "lv": "Přijdu zítra"\n        },\n        {\n          "de": "Morgen ist Montag.",\n          "lv": "Zítra je pondělí"\n        },\n        {\n          "de": "Guten Morgen!",\n          "lv": "Dobré ráno!"\n        },\n        {\n          "de": "Der Morgen ist schön.",\n          "lv": "Ráno je krásné."\n        }\n      ],\n      "tip": [\n        "Malý morgen = zítra (Ich komme morgen). der Morgen s velkým písmenem = ráno (Guten Morgen!, am Morgen).",\n        "Der Morgen = zítra"',
   '"id": "a1-morgen-study",\n      "layout": "standardStudy",\n      "translation": "Ráno",\n      "explanation": [\n        "Hlavní myšlenka: der Morgen je podstatné jméno se členem der a velkým písmenem. Označuje část dne – ráno.",\n        "Der Morgen znamená ráno, ne zítra.",\n        "morgen s malým písmenem znamená zítra.",\n        "Příklady: Guten Morgen! = Dobré ráno; Der Morgen ist schön = Ráno je krásné."\n      ],\n      "examples": [\n        {\n          "de": "Guten Morgen!",\n          "lv": "Dobré ráno!"\n        },\n        {\n          "de": "Bis morgen!",\n          "lv": "Až zítra!"\n        },\n        {\n          "de": "Ich komme morgen.",\n          "lv": "Přijdu zítra"\n        },\n        {\n          "de": "Morgen ist Montag.",\n          "lv": "Zítra je pondělí"\n        },\n        {\n          "de": "Guten Morgen!",\n          "lv": "Dobré ráno!"\n        },\n        {\n          "de": "Der Morgen ist schön.",\n          "lv": "Ráno je krásné."\n        }\n      ],\n      "tip": [\n        "Malý morgen = zítra (Ich komme morgen). der Morgen s velkým písmenem = ráno (Guten Morgen!, am Morgen).",\n        "Der Morgen = ráno"'],

  // 9. a1-müssen
  ['"de": "müssen",\n    "lv": "Potřebovat",\n    "level": "A1",\n    "study": {\n      "id": "a1-müssen",\n      "layout": "standardStudy",\n      "translation": "Potřebovat",',
   '"de": "müssen",\n    "lv": "Musit",\n    "level": "A1",\n    "study": {\n      "id": "a1-müssen",\n      "layout": "standardStudy",\n      "translation": "Musit",'],
  ['"Hlavní myšlenka: müssen znamená něco dělat."',
   '"Hlavní myšlenka: müssen znamená, že je nutné něco dělat."'],
  ['"V češtině se müssen často překládá jako „já ano...“, „ty ano...“, „my ano...“."',
   '"V češtině se müssen často překládá jako „já musím…“, „ty musíš…“, „my musíme…“."'],
  ['"de": "Du musst warten.",\n          "lv": "Musíte počkat."',
   '"de": "Du musst warten.",\n          "lv": "Musíš počkat."'],
  ['"word": "müssen",\n          "meaning": "Potřebovat / muset udělat",',
   '"word": "müssen",\n          "meaning": "Musit / být nutné",'],
  ['"id": "a1-müssen",\n      "layout": "standardStudy",\n      "translation": "Musit",\n      "explanation": [\n        "Hlavní myšlenka: müssen znamená, že je nutné něco dělat.",\n        "V češtině se müssen často překládá jako „já musím…“, „ty musíš…“, „my musíme…“.",\n        "V německé větě je druhé sloveso obvykle na konci.",\n        "Na úrovni A1 je nejdůležitější formou Ich muss..."\n      ],\n      "examples": [\n        {\n          "de": "Ich muss gehen.",\n          "lv": "Musím jít"\n        },\n        {\n          "de": "Du musst warten.",\n          "lv": "Musíš počkat."\n        },\n        {\n          "de": "Wir müssen lernen.",\n          "lv": "Musíme se učit."\n        },\n        {\n          "de": "Ich muss heute arbeiten.",\n          "lv": "Dnes musím pracovat"\n        }\n      ],\n      "comparison": [\n        {\n          "word": "müssen",\n          "meaning": "Musit / být nutné",\n          "example": "Ich muss gehen."\n        },\n        {\n          "word": "können",\n          "meaning": "Být schopen / vědět",',
   '"id": "a1-müssen",\n      "layout": "standardStudy",\n      "translation": "Musit",\n      "explanation": [\n        "Hlavní myšlenka: müssen znamená, že je nutné něco dělat.",\n        "V češtině se müssen často překládá jako „já musím…“, „ty musíš…“, „my musíme…“.",\n        "V německé větě je druhé sloveso obvykle na konci.",\n        "Na úrovni A1 je nejdůležitější formou Ich muss..."\n      ],\n      "examples": [\n        {\n          "de": "Ich muss gehen.",\n          "lv": "Musím jít"\n        },\n        {\n          "de": "Du musst warten.",\n          "lv": "Musíš počkat."\n        },\n        {\n          "de": "Wir müssen lernen.",\n          "lv": "Musíme se učit."\n        },\n        {\n          "de": "Ich muss heute arbeiten.",\n          "lv": "Dnes musím pracovat"\n        }\n      ],\n      "comparison": [\n        {\n          "word": "müssen",\n          "meaning": "Musit / být nutné",\n          "example": "Ich muss gehen."\n        },\n        {\n          "word": "können",\n          "meaning": "Moci / umět",'],

  // 10. a1-nach
  ['"de": "nach",\n    "lv": "Až • Po",\n    "level": "A1",\n    "study": {\n      "id": "a1-nach",\n      "layout": "standardStudy",\n      "translation": "Až • Po",',
   '"de": "nach",\n    "lv": "Do • Po",\n    "level": "A1",\n    "study": {\n      "id": "a1-nach",\n      "layout": "standardStudy",\n      "translation": "Do • Po",'],
  ['"Hlavní myšlenka: nach znamená to s místy a potom s časem nebo posloupností."',
   '"Hlavní myšlenka: nach znamená „do“ u míst a „po“ u času nebo posloupnosti."'],
  ['"S městy a zeměmi bez článku nach často znamená."',
   '"U měst a zemí bez členu nach často znamená „do“."'],
  ['"Ve frázi nach Hause to znamená domov."',
   '"Ve frázi nach Hause to znamená domů."'],
  ['"word": "zu",\n          "meaning": "Do / v",\n          "example": "Ich gehe zum Arzt."\n        },\n        {\n          "word": "in",\n          "meaning": "V / na místo s článkem",',
   '"word": "zu",\n          "meaning": "Do / k",\n          "example": "Ich gehe zum Arzt."\n        },\n        {\n          "word": "in",\n          "meaning": "V / na místo s článkem",'],

  // 11. a1-nass-431
  ['"de": "nass",\n    "lv": "Mokré",',
   '"de": "nass",\n    "lv": "Mokrý",'],

  // 12. a1-natuerlich
  ['"de": "Natürlich helfe ich dir.",\n          "lv": "Samozřejmě vám pomůžu."',
   '"de": "Natürlich helfe ich dir.",\n          "lv": "Samozřejmě ti pomůžu."'],
  ['"Přirozeně! jako samostatný vykřičník vždy = samozřejmě!"',
   '"Samostatné Natürlich! jako potvrzení znamená „Samozřejmě!“; „přirozeně“ je jiný význam podle kontextu."'],

  // 13. a1-nehmen
  ['"de": "nehmen",\n    "lv": "Vzít • Vzít",\n    "level": "A1",\n    "study": {\n      "id": "a1-nehmen",\n      "layout": "standardStudy",\n      "translation": "Vzít • Vzít",',
   '"de": "nehmen",\n    "lv": "Brát • Vzít",\n    "level": "A1",\n    "study": {\n      "id": "a1-nehmen",\n      "layout": "standardStudy",\n      "translation": "Brát • Vzít",'],
  ['"de": "Ich bringe dir das Buch.",\n          "lv": "Přinesl jsem ti knihu"',
   '"de": "Ich bringe dir das Buch.",\n          "lv": "Přinesu ti knihu."'],
  ['"de": "Ich hole dich ab.",\n          "lv": "Vezmu tě"',
   '"de": "Ich hole dich ab.",\n          "lv": "Vyzvednu tě."'],
  ['"id": "a1-nehmen",\n      "layout": "standardStudy",\n      "translation": "Brát • Vzít",\n      "explanation": [\n        "Hlavní myšlenka: nehmen znamená vzít nebo vzít.",\n        "Nehmen se používá, když si vezmete něco pro sebe nebo si vyberete.",\n        "Není to totéž jako přinesený, protože přinesený znamená někomu přinést nebo vzít.",\n        "Holen znamená jít za a aportovat/vzít."\n      ],\n      "examples": [\n        {\n          "de": "Ich nehme den Bus.",\n          "lv": "Jedu autobusem"\n        },\n        {\n          "de": "Nimm das Buch!",\n          "lv": "Vezmi si knihu!"\n        },\n        {\n          "de": "Ich bringe dir das Buch.",\n          "lv": "Přinesu ti knihu."\n        },\n        {\n          "de": "Ich hole dich ab.",\n          "lv": "Vyzvednu tě."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "nehmen",\n          "meaning": "Vzít / vzít",\n          "example": "Nimm das Buch!"\n        },\n        {\n          "word": "bringen",\n          "meaning": "Přinést / vzít / dodat",',
   '"id": "a1-nehmen",\n      "layout": "standardStudy",\n      "translation": "Brát • Vzít",\n      "explanation": [\n        "Hlavní myšlenka: nehmen znamená vzít nebo vzít.",\n        "Nehmen se používá, když si vezmete něco pro sebe nebo si vyberete.",\n        "Není to totéž jako přinesený, protože přinesený znamená někomu přinést nebo vzít.",\n        "Holen znamená jít za a aportovat/vzít."\n      ],\n      "examples": [\n        {\n          "de": "Ich nehme den Bus.",\n          "lv": "Jedu autobusem"\n        },\n        {\n          "de": "Nimm das Buch!",\n          "lv": "Vezmi si knihu!"\n        },\n        {\n          "de": "Ich bringe dir das Buch.",\n          "lv": "Přinesu ti knihu."\n        },\n        {\n          "de": "Ich hole dich ab.",\n          "lv": "Vyzvednu tě."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "nehmen",\n          "meaning": "Vzít / vzít",\n          "example": "Nimm das Buch!"\n        },\n        {\n          "word": "bringen",\n          "meaning": "Přinést / odnést / dopravit",'],
  ['"word": "holen",\n          "meaning": "Jít za / aport",\n          "example": "Ich hole Wasser."\n        },\n        {\n          "word": "mitnehmen",',
   '"word": "holen",\n          "meaning": "Jít pro / přinést",\n          "example": "Ich hole Wasser."\n        },\n        {\n          "word": "mitnehmen",'],
  ['"Ich nehme den Bus znamená v češtině „řídím autobus“."',
   '"Ich nehme den Bus znamená v češtině „jedu autobusem“."'],

  // 14. a1-nein-436
  ['"de": "nein",\n    "lv": "Žádný",',
   '"de": "nein",\n    "lv": "Ne",'],

  // 15. a1-neu
  ['"Opakem je alt (starý) • Podstatné jméno das Neue znamená nový."',
   '"Opakem je alt (starý) • Podstatné jméno das Neue znamená to nové nebo novinku."'],

  // 16. a1-neunzehnte-444
  ['"de": "neunzehnte",\n    "lv": "Devatenáctého",',
   '"de": "neunzehnte",\n    "lv": "Devatenáctý",'],

  // 17. a1-nicht-447
  ['"de": "nicht",\n    "lv": "Žádný",',
   '"de": "nicht",\n    "lv": "Ne",'],
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
