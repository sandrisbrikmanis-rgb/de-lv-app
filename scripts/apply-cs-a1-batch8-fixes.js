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
  // 1. a1-Lampe-350
  ['"de": "Lampe",\n    "de_article": "die",\n    "de_plural": "die Lampen",\n    "lv": "Svítilna",',
   '"de": "Lampe",\n    "de_article": "die",\n    "de_plural": "die Lampen",\n    "lv": "Lampa",'],

  // 2. a1-land
  ['"id": "a1-land",\n      "layout": "standardStudy",\n      "translation": "Země • Země",',
   '"id": "a1-land",\n      "layout": "standardStudy",\n      "translation": "Země • Venkov",'],
  ['"id": "a1-land",\n      "layout": "standardStudy",\n      "translation": "Země • Venkov",\n      "explanation": [\n        "Hlavní myšlenka: das Land nejčastěji znamená zemi nebo pozemek za městem.",\n        "Pokud jde o Německo, Lotyšsko nebo jiné území s hranicemi, překládá se to jako země.",',
   '"id": "a1-land",\n      "layout": "standardStudy",\n      "translation": "Země • Venkov",\n      "explanation": [\n        "Hlavní myšlenka: das Land nejčastěji znamená zemi nebo pozemek za městem.",\n        "Pokud jde o Německo, Česko nebo jiné území s hranicemi, Land se překládá jako země.",'],
  ['"word": "das Land",\n          "meaning": "Země / země / venkov",',
   '"word": "das Land",\n          "meaning": "Země • Venkov",'],
  ['"Aufs Land znamená „na venkov“, nikoli „na venkov“.",',
   '"Aufs Land znamená „na venkov“, nikoli „do země“.",'],
  ['"meaning": {\n              "purple": [\n                "Země",\n                "zeme",\n                "Země"\n              ]\n            },\n            "example": {\n              "blue": [\n                "Land"\n              ]\n            }\n          },\n          {\n            "word": {\n              "green": [\n                "die Stadt"',
   '"meaning": {\n              "purple": [\n                "Země",\n                "venkov",\n                "Země"\n              ]\n            },\n            "example": {\n              "blue": [\n                "Land"\n              ]\n            }\n          },\n          {\n            "word": {\n              "green": [\n                "die Stadt"'],
  ['"word": {\n              "green": [\n                "die Erde"\n              ]\n            },\n            "meaning": {\n              "purple": [\n                "zeme",\n                "planēta"\n              ]\n            },',
   '"word": {\n              "green": [\n                "die Erde"\n              ]\n            },\n            "meaning": {\n              "purple": [\n                "Země",\n                "planeta"\n              ]\n            },'],

  // 3. a1-lang
  ['"id": "a1-lang",\n      "layout": "standardStudy",\n      "translation": "Dlouhý • Dlouhý",',
   '"id": "a1-lang",\n      "layout": "standardStudy",\n      "translation": "Dlouhý • Dlouho",'],
  ['"České „dlouhý“ a „dlouhý“ jsou dvě různá slova, ale německý jazyk zahrnuje oba významy."',
   '"České „dlouhý“ a „dlouho“ jsou dvě různé podoby, ale německé lang pokrývá oba významy."'],
  ['"de": "Ich warte schon lange.",\n          "lv": "Čekal jsem dlouho."',
   '"de": "Ich warte schon lange.",\n          "lv": "Čekám už dlouho."'],

  // 4. a1-lassen
  ['"id": "a1-lassen",\n      "layout": "standardStudy",\n      "translation": "Opustit • Nechat",',
   '"id": "a1-lassen",\n      "layout": "standardStudy",\n      "translation": "Nechat • Dovolit",'],
  ['"de": "Ich lasse die Tasche hier.",\n          "lv": "Nechal jsem tu tašku"',
   '"de": "Ich lasse die Tasche hier.",\n          "lv": "Nechávám tu tašku."'],
  ['"de": "Meine Eltern lassen mich gehen.",\n          "lv": "Rodiče mě nechali jít."',
   '"de": "Meine Eltern lassen mich gehen.",\n          "lv": "Rodiče mě nechávají jít."'],
  ['"Pokud něco zůstane na místě, lassen se překládá jako odejít."',
   '"Pokud něco necháte na místě, lassen se překládá jako nechat."'],
  ['"word": "lassen",\n          "meaning": "Nechat / nechat",',
   '"word": "lassen",\n          "meaning": "Nechat • Dovolit",'],
  ['"word": "lassen",\n          "meaning": "Nechat • Dovolit",\n          "example": "Ich lasse das hier."\n        },\n        {\n          "word": "bleiben",\n          "meaning": "Pobyt",',
   '"word": "lassen",\n          "meaning": "Nechat • Dovolit",\n          "example": "Ich lasse das hier."\n        },\n        {\n          "word": "bleiben",\n          "meaning": "Zůstat",'],
  ['"Lass mich v Ruhe! existuje velmi častá věta: \\"Nech mě na pokoji!\\""',
   '"Lass mich in Ruhe! je velmi častá věta: „Nech mě na pokoji!“"'],

  // 5. a1-laufen
  ['"id": "a1-laufen",\n      "layout": "standardStudy",\n      "translation": "Běžet • Provozovat",',
   '"id": "a1-laufen",\n      "layout": "standardStudy",\n      "translation": "Běžet • Fungovat",'],
  ['"Hlavní myšlenka: laufen znamená běhat, ale u zařízení to může znamenat běhat."',
   '"Hlavní myšlenka: laufen znamená běhat, ale u zařízení může znamenat fungovat nebo běžet."'],
  ['"word": "laufen",\n          "meaning": "Spustit / provozovat",',
   '"word": "laufen",\n          "meaning": "Běžet • Fungovat",'],
  ['"word": "fahren",\n          "meaning": "Jezdit transportem",\n          "example": "Ich fahre mit dem Bus."\n        },\n        {\n          "word": "funktionieren",\n          "meaning": "Provozovat",\n          "example": "Das funktioniert gut."',
   '"word": "fahren",\n          "meaning": "Jezdit transportem",\n          "example": "Ich fahre mit dem Bus."\n        },\n        {\n          "word": "funktionieren",\n          "meaning": "Fungovat",\n          "example": "Das funktioniert gut."'],
  ['"Laufen není jen „běh“. U filmu nebo zařízení to může znamenat „jít“ nebo „jednat“."',
   '"Laufen není jen „běhat“. U filmu nebo zařízení to může znamenat „běžet“ nebo „fungovat“."'],

  // 6. a1-laut
  ['"id": "a1-laut",\n      "layout": "standardStudy",\n      "translation": "Hlasitý",\n      "explanation": [\n        "Hlavní myšlenka: Malé přídavné jméno. Popisuje hlasitost – jak hlasitý je zvuk nebo řeč.",\n        "Laut znamená hlavně: hlasitý zvuk.",\n        "Často popisuje: přídavné jméno.",',
   '"id": "a1-laut",\n      "layout": "standardStudy",\n      "translation": "Hlasitý",\n      "explanation": [\n        "Hlavní myšlenka: Malé přídavné jméno. Popisuje hlasitost – jak hlasitý je zvuk nebo řeč.",\n        "Laut znamená hlavně: hlasitý zvuk.",\n        "Je to přídavné jméno.",'],
  ['"Laut v podstatě znamená: zvukový signál.",',
   '"Der Laut znamená zvuk nebo zvukový signál.",'],
  ['"Často popisuje: podstatné jméno (der).",\n        "Malá písmena laut je přídavné jméno - popisuje, jak hlasitý je zvuk (Die Musik ist laut = hudba je hlasitá).",\n        "Der Laut s velkým písmenem a členem der je podstatné jméno - znamená zvuk jako věc nebo signál (Der Laut ist schön = zvuk je krásný).",\n        "Množné číslo: die Laute."\n      ],\n      "examples": [\n        {\n          "de": "Die Musik ist laut.",\n          "lv": "Hudba je hlasitá."\n        },\n        {\n          "de": "Die Musik ist laut.",\n          "lv": "Hudba je hlasitá."\n        },\n        {\n          "de": "Sprich nicht so laut!",\n          "lv": "Nemluv tak nahlas!"\n        },\n        {\n          "de": "Das ist sehr laut.",\n          "lv": "Je to velmi hlasité."\n        },\n        {\n          "de": "Der Laut ist schön.",\n          "lv": "Zvuk je krásný."\n        },\n        {\n          "de": "Ich höre einen Laut.",\n          "lv": "Slyším zvuk"\n        }\n      ],\n      "tip": [\n        "Malý laut = hlasitý (přídavné jméno: ist laut). der Laut s velkým písmenem = zvuk (podstatné jméno: ein Laut, der Laut).",\n        "Laut = zvuk"',
   '"Je to podstatné jméno se členem der.",\n        "Malá písmena laut je přídavné jméno - popisuje, jak hlasitý je zvuk (Die Musik ist laut = hudba je hlasitá).",\n        "Der Laut s velkým písmenem a členem der je podstatné jméno - znamená zvuk jako věc nebo signál (Der Laut ist schön = zvuk je krásný).",\n        "Množné číslo: die Laute."\n      ],\n      "examples": [\n        {\n          "de": "Die Musik ist laut.",\n          "lv": "Hudba je hlasitá."\n        },\n        {\n          "de": "Die Musik ist laut.",\n          "lv": "Hudba je hlasitá."\n        },\n        {\n          "de": "Sprich nicht so laut!",\n          "lv": "Nemluv tak nahlas!"\n        },\n        {\n          "de": "Das ist sehr laut.",\n          "lv": "Je to velmi hlasité."\n        },\n        {\n          "de": "Der Laut ist schön.",\n          "lv": "Zvuk je krásný."\n        },\n        {\n          "de": "Ich höre einen Laut.",\n          "lv": "Slyším zvuk"\n        }\n      ],\n      "tip": [\n        "Malý laut = hlasitý (přídavné jméno: ist laut). der Laut s velkým písmenem = zvuk (podstatné jméno: ein Laut, der Laut).",\n        "Der Laut = zvuk"'],

  // 7. a1-laut-study
  ['"id": "a1-laut-study",\n      "layout": "standardStudy",\n      "translation": "Zvuk",\n      "explanation": [\n        "Hlavní myšlenka: Podstatné jméno se členem se hodí a je velké. Znamená zvuk jako věc, signál nebo zvuk jazyka.",\n        "Der Laut primárně znamená: hlasitý zvuk.",\n        "Často popisuje: přídavné jméno.",\n        "Der Laut primárně znamená: zvukový signál.",',
   '"id": "a1-laut-study",\n      "layout": "standardStudy",\n      "translation": "Zvuk",\n      "explanation": [\n        "Hlavní myšlenka: Podstatné jméno se členem se hodí a je velké. Znamená zvuk jako věc, signál nebo zvuk jazyka.",\n        "Der Laut primárně znamená zvuk nebo zvukový signál.",\n        "Malé laut je přídavné jméno.",\n        "Der Laut může znamenat zvukový signál nebo hlásku.",'],

  // 8. a1-lecker-361
  ['"de": "lecker",\n    "lv": "Vynikající",',
   '"de": "lecker",\n    "lv": "Chutný",'],

  // 9. a1-legen
  ['"Na úrovni A1 je nejdůležitější rozdíl: legen = ležet, liegen = ležet."',
   '"Na úrovni A1 je nejdůležitější rozdíl: legen = položit, liegen = ležet."'],
  ['"word": "liegen",\n          "meaning": "Být / spát",\n          "example": "Das Buch liegt auf dem Tisch."\n        },\n        {\n          "word": "stellen",',
   '"word": "liegen",\n          "meaning": "Ležet • Nacházet se",\n          "example": "Das Buch liegt auf dem Tisch."\n        },\n        {\n          "word": "stellen",'],
  ['"word": "setzen",\n          "meaning": "Sednout si / sednout si",',
   '"word": "setzen",\n          "meaning": "Posadit • Sednout si",'],
  ['"text": "Pamatujte: ležíte → legen • Ta věc už tam je → liegen."',
   '"text": "Pamatujte: položíte → legen • ta věc už leží → liegen."'],
  ['"Ich lege das Buch = knihu jsem odložil. Das Buch liegt = kniha lže."',
   '"Ich lege das Buch = položím knihu. Das Buch liegt = kniha leží."'],

  // 10. a1-Lehrerin-365
  ['"de": "Lehrerin",\n    "de_article": "die",\n    "de_plural": "die Lehrerinnen",\n    "lv": "Učitel",',
   '"de": "Lehrerin",\n    "de_article": "die",\n    "de_plural": "die Lehrerinnen",\n    "lv": "Učitelka",'],

  // 11. a1-leise-study
  ['"de": "leise",\n    "lv": "Klid",\n    "level": "A1",\n    "study": {\n      "id": "a1-leise-study",\n      "layout": "standardStudy",\n      "translation": "Klid",',
   '"de": "leise",\n    "lv": "Tichý • Potichu",\n    "level": "A1",\n    "study": {\n      "id": "a1-leise-study",\n      "layout": "standardStudy",\n      "translation": "Tichý • Potichu",'],
  ['"de": "Bitte sei leise.",\n          "lv": "Prosím, buďte zticha."',
   '"de": "Bitte sei leise.",\n          "lv": "Prosím, buď zticha."'],
  ['"de": "Bitte sei leise.",\n          "lv": "Prosím buď zticha"',
   '"de": "Bitte sei leise.",\n          "lv": "Prosím, buď zticha."'],
  ['"id": "a1-leise-study",\n      "layout": "standardStudy",\n      "translation": "Tichý • Potichu",\n      "explanation": [\n        "Hlavní myšlenka: Tichá nebo nízká hlasitost.",\n        "Leise v podstatě znamená: nízká hlasitost.",\n        "Často popisuje: zvuk/hlas/hudba.",\n        "Leise popisuje nízkou hlasitost nebo tichý hlas/zvuk."\n      ],\n      "examples": [\n        {\n          "de": "Bitte sei leise.",\n          "lv": "Prosím, buď zticha."\n        },\n        {\n          "de": "Bitte sei leise.",\n          "lv": "Prosím, buď zticha."\n        },\n        {\n          "de": "Die Musik ist leise.",\n          "lv": "Hudba je tichá."\n        },\n        {\n          "de": "Sprich bitte leise.",\n          "lv": "Prosím mluv potichu."\n        }\n      ],\n      "tip": [\n        "Klid = klid",',
   '"id": "a1-leise-study",\n      "layout": "standardStudy",\n      "translation": "Tichý • Potichu",\n      "explanation": [\n        "Hlavní myšlenka: Tichá nebo nízká hlasitost.",\n        "Leise v podstatě znamená: nízká hlasitost.",\n        "Často popisuje: zvuk/hlas/hudba.",\n        "Leise popisuje nízkou hlasitost nebo tichý hlas/zvuk."\n      ],\n      "examples": [\n        {\n          "de": "Bitte sei leise.",\n          "lv": "Prosím, buď zticha."\n        },\n        {\n          "de": "Bitte sei leise.",\n          "lv": "Prosím, buď zticha."\n        },\n        {\n          "de": "Die Musik ist leise.",\n          "lv": "Hudba je tichá."\n        },\n        {\n          "de": "Sprich bitte leise.",\n          "lv": "Prosím mluv potichu."\n        }\n      ],\n      "tip": [\n        "Leise = tichý • potichu",'],

  // 12. a1-liegen
  ['"de": "liegen",\n    "lv": "Být • Spát",\n    "level": "A1",\n    "study": {\n      "id": "a1-liegen",\n      "layout": "standardStudy",\n      "translation": "Být • Spát",',
   '"de": "liegen",\n    "lv": "Ležet • Být položený",\n    "level": "A1",\n    "study": {\n      "id": "a1-liegen",\n      "layout": "standardStudy",\n      "translation": "Ležet • Být položený",'],
  ['"Pro člověka lhaní často znamená spánek."',
   '"U člověka liegen často znamená ležet."'],
  ['"de": "Er liegt im Bett.",\n          "lv": "Spí v posteli."',
   '"de": "Er liegt im Bett.",\n          "lv": "Leží v posteli."'],
  ['"de": "Ich lege das Buch auf den Tisch.",\n          "lv": "Položil jsem knihu na stůl."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "liegen",\n          "meaning": "Být / spát",',
   '"de": "Ich lege das Buch auf den Tisch.",\n          "lv": "Položím knihu na stůl."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "liegen",\n          "meaning": "Ležet • Být položený",'],
  ['"word": "legen",\n          "meaning": "Položit",\n          "example": "Ich lege das Buch hierhin."\n        },\n        {\n          "word": "stehen",\n          "meaning": "Stát / stát",\n          "example": "Die Flasche steht auf dem Tisch."',
   '"word": "legen",\n          "meaning": "Položit",\n          "example": "Ich lege das Buch hierhin."\n        },\n        {\n          "word": "stehen",\n          "meaning": "Stát • Být postavený",\n          "example": "Die Flasche steht auf dem Tisch."'],

  // 13. a1-links-380
  ['"de": "links",\n    "lv": "Vlevo • Vlevo",',
   '"de": "links",\n    "lv": "Vlevo • Levý",'],

  // 14. a1-lustig-385
  ['"de": "lustig",\n    "lv": "Zábava",',
   '"de": "lustig",\n    "lv": "Zábavný",'],

  // 15. a1-machen
  ['"de": "machen",\n    "lv": "Dělat • Dělat",\n    "level": "A1",\n    "study": {\n      "id": "a1-machen",\n      "layout": "standardStudy",\n      "translation": "Dělat • Dělat",',
   '"de": "machen",\n    "lv": "Dělat • Vyrábět",\n    "level": "A1",\n    "study": {\n      "id": "a1-machen",\n      "layout": "standardStudy",\n      "translation": "Dělat • Vyrábět",'],
  ['"Hlavní myšlenka: machen je velmi běžné slovo, které znamená vyrobit nebo vyrobit."',
   '"Hlavní myšlenka: machen je velmi běžné slovo, které znamená dělat nebo vyrábět."'],
  ['"Pokud jde o akci obecně, překládá se to jako jak dělat."',
   '"Pokud jde o obecnou činnost, překládá se jako dělat."'],
  ['"Pokud se něco vyrábí nebo připravuje, překládá se to jako výroba nebo vaření."',
   '"Pokud se něco vyrábí nebo připravuje, překládá se podle kontextu jako vyrábět nebo připravovat."'],
  ['"V mnoha frázích se machen překládá přirozeně do češtině, nikoli doslovně."',
   '"V mnoha frázích se machen překládá přirozeně do češtiny, nikoli doslovně."'],
  ['"text": "Pamatujte: Byl machst du? = Co děláš?"',
   '"text": "Pamatujte: Was machst du? = Co děláš?"'],

  // 16. a1-mal
  ['"de": "Mal",\n    "de_article": "das",\n    "de_plural": "die Male",\n    "lv": "Čas",\n    "level": "A1",\n    "study": {\n      "id": "a1-mal",\n      "layout": "standardStudy",\n      "translation": "Čas",',
   '"de": "Mal",\n    "de_article": "das",\n    "de_plural": "die Male",\n    "lv": "Krát • Případ",\n    "level": "A1",\n    "study": {\n      "id": "a1-mal",\n      "layout": "standardStudy",\n      "translation": "Krát • Případ",'],
  ['"text": "Pamatujte: das Mal = čas (podstatné jméno) • Mal bez článku = hovorová částice."',
   '"text": "Pamatujte: das Mal = krát/případ (podstatné jméno) • mal bez členu = hovorová částice."'],
  ['"Nemluvte s hovorovou částicí mal (Komm mal her!) - to je jiný význam."',
   '"Nezaměňujte ho s hovorovou částicí mal (Komm mal her!) – jde o jiný význam."'],

  // 17. a1-mann
  ['"Ženská forma die Frau má stejný dvojí význam: žena A manželka."',
   '"Ženská forma die Frau má stejný dvojí význam: žena a manželka."'],

  // 18. a1-März-396
  ['"de": "März",\n    "de_article": "der",\n    "lv": "Pochod",',
   '"de": "März",\n    "de_article": "der",\n    "lv": "Březen",'],
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
