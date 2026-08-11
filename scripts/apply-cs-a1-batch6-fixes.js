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
  // 1. a1-gross-study — examples[1] only (duplicate DE sentence)
  ['"id": "a1-gross-study",\n      "layout": "standardStudy",\n      "translation": "Velký",\n      "explanation": [\n        "Hlavní myšlenka: Velká velikost nebo pro osobu - vysoká na výšku.",',
   '"id": "a1-gross-study",\n      "layout": "standardStudy",\n      "translation": "Velký",\n      "explanation": [\n        "Hlavní myšlenka: groß označuje velkou velikost, u člověka vysokou postavu.",'],
  ['        {\n          "de": "Das Haus ist groß.",\n          "lv": "Dům je velký."\n        },\n        {\n          "de": "Das Haus ist groß.",\n          "lv": "Dům je velký."\n        },\n        {\n          "de": "Er ist groß.",',
   '        {\n          "de": "Das Haus ist groß.",\n          "lv": "Dům je velký."\n        },\n        {\n          "de": "Das Haus ist groß.",\n          "lv": "Berlín je velké město."\n        },\n        {\n          "de": "Er ist groß.",'],

  // 3. a1-grüßen-257
  ['"de": "grüßen",\n    "lv": "Pozdravit",', '"de": "grüßen",\n    "lv": "Zdravit",'],

  // 4. a1-gut-study
  ['"Hlavní myšlenka: střevo je přídavné jméno/příslovce – dobrý, úspěšný, v pořádku."',
   '"Hlavní myšlenka: gut je přídavné jméno nebo příslovce – dobrý, dobře, úspěšný nebo v pořádku."'],
  ['"Střevo bez článku je přídavné jméno/příslovce – dobrý/dobře."',
   '"Gut bez členu je přídavné jméno nebo příslovce – dobrý/dobře."'],
  ['"Střevo = dobrý/dobře (přídavné jméno/přívlastek)."',
   '"Gut = dobrý/dobře (přídavné jméno nebo příslovce)."'],

  // 5. a1-haben
  ['"Se seinem a dativem: Mir ist kalt. = Je mi zima. (není to haben!)"',
   '"Se slovesem sein a dativem: Mir ist kalt. = Je mi zima. (Není to haben!)"'],

  // 6–7. halb, Hälfte
  ['"de": "halb",\n    "lv": "Strana",', '"de": "halb",\n    "lv": "Půl",'],
  ['"de": "Hälfte",\n    "de_article": "die",\n    "de_plural": "die Hälften",\n    "lv": "Strana",',
   '"de": "Hälfte",\n    "de_article": "die",\n    "de_plural": "die Hälften",\n    "lv": "Polovina",'],

  // 8. a1-halten
  ['"de": "Bitte halten Sie an.",\n          "lv": "Prosím přestaň"',
   '"de": "Bitte halten Sie an.",\n          "lv": "Prosím, zastavte."'],
  ['"Hlavní myšlenka: zastavit znamená držet, ale s přepravou nebo pohybem může znamenat zastavit nebo zastavit."',
   '"Hlavní myšlenka: halten nejčastěji znamená držet. U dopravy může znamenat zastavovat nebo stát."'],
  ['"text": "Pamatujte: v ruce → zastavit • Doprava → zastavení/zastávky."',
   '"text": "Pamatujte: předmět v ruce → držet • zastavit se → anhalten • doprava → zastavovat."'],

  // 10–12. Handschuh, Heft, heiraten
  ['"de": "Handschuh",\n    "de_article": "der",\n    "de_plural": "die Handschuhe",\n    "lv": "Rukavici",',
   '"de": "Handschuh",\n    "de_article": "der",\n    "de_plural": "die Handschuhe",\n    "lv": "Rukavice",'],
  ['"de": "Heft",\n    "de_article": "das",\n    "de_plural": "die Hefte",\n    "lv": "Notebook",',
   '"de": "Heft",\n    "de_article": "das",\n    "de_plural": "die Hefte",\n    "lv": "Sešit",'],
  ['"de": "heiraten",\n    "lv": "Oženit se",', '"de": "heiraten",\n    "lv": "Brát se",'],

  // 13. a1-heißen
  ['"id": "a1-heißen",\n      "layout": "standardStudy",\n      "translation": "Být nazýván • Podlý",',
   '"id": "a1-heißen",\n      "layout": "standardStudy",\n      "translation": "Jmenovat se • Znamenat",'],
  ['"word": "heißen",\n          "meaning": "Být volán / míněn",',
   '"word": "heißen",\n          "meaning": "Jmenovat se • Znamenat",'],
  ['"word": "bedeuten",\n          "meaning": "Střední",',
   '"word": "bedeuten",\n          "meaning": "Znamenat",'],
  ['"Byl heißt das? často znamená \\"Co to znamená?\\"."',
   '"Was heißt das? často znamená „Co to znamená?“."'],
  ['"de": "Wie heißt du?",\n          "lv": "Jak se jmenuješ"',
   '"de": "Wie heißt du?",\n          "lv": "Jak se jmenuješ?"'],
  ['"de": "Was heißt das?",\n          "lv": "Co to znamená"',
   '"de": "Was heißt das?",\n          "lv": "Co to znamená?"'],

  // 14–15. helfen, Hemd
  ['"de": "helfen",\n    "lv": "Pomoci",', '"de": "helfen",\n    "lv": "Pomáhat",'],
  ['"de": "Hemd",\n    "de_article": "das",\n    "de_plural": "die Hemden",\n    "lv": "Košili",',
   '"de": "Hemd",\n    "de_article": "das",\n    "de_plural": "die Hemden",\n    "lv": "Košile",'],

  // 16. a1-hoch-study — examples[1] only
  ['        {\n          "de": "Der Berg ist hoch.",\n          "lv": "Hora je vysoká."\n        },\n        {\n          "de": "Der Berg ist hoch.",\n          "lv": "Hora je vysoká."\n        },\n        {\n          "de": "Die Miete ist hoch.",',
   '        {\n          "de": "Der Berg ist hoch.",\n          "lv": "Hora je vysoká."\n        },\n        {\n          "de": "Der Berg ist hoch.",\n          "lv": "Police je vysoká dva metry."\n        },\n        {\n          "de": "Die Miete ist hoch.",'],

  // 17. a1-hoeren-study
  ['"de": "Ich höre dich.",\n          "lv": "Slyším tě"',
   '"de": "Ich höre dich.",\n          "lv": "Slyším tě."'],

  // 19. a1-ich-291
  ['"de": "ich",\n    "lv": "Mě",', '"de": "ich",\n    "lv": "Já",'],

  // 20. a1-ihr
  ['"id": "a1-ihr",\n      "layout": "standardStudy",\n      "translation": "Vy • Ji",',
   '"id": "a1-ihr",\n      "layout": "standardStudy",\n      "translation": "Vy • Jí • Její",'],
  ['"de": "Kommt ihr heute Abend?",\n          "lv": "Přijdeš dnes večer?"',
   '"de": "Kommt ihr heute Abend?",\n          "lv": "Přijdete dnes večer?"'],
  ['"de": "Wo wohnt ihr?",\n          "lv": "Kde bydlíš"',
   '"de": "Wo wohnt ihr?",\n          "lv": "Kde bydlíte?"'],
  ['"de": "Er schreibt ihr einen Brief.",\n          "lv": "Napíše jí dopis."',
   '"de": "Er schreibt ihr einen Brief.",\n          "lv": "Píše jí dopis."'],
  ['"de": "Habt ihr Zeit?",\n          "lv": "Máš čas?"',
   '"de": "Habt ihr Zeit?",\n          "lv": "Máte čas?"'],
  ['dativ zájmena sie (ona/ona)', 'dativ zájmena sie (jí)'],
  ['Ihr se slovesem dsk. forma (kommt, habt) = ty', 'Ihr se slovesem v množném čísle (kommt, habt) = vy'],

  // 21. a1-im
  ['"de": "Ich bin im Park.",\n          "lv": "Jsem v parku"',
   '"de": "Ich bin im Park.",\n          "lv": "Jsem v parku."'],
  ['"Používá se s podstatnými jmény mužského rodu a podstatnými jmény libovolného pohlaví při odpovědi na otázku kde? — umístění."',
   '"Používá se s podstatnými jmény mužského a středního rodu při odpovědi na otázku kde? — umístění."'],
  ['"word": "im",\n          "meaning": "Uvnitř kde? (komu?)",',
   '"word": "im",\n          "meaning": "Uvnitř, kde? (3. pád)",'],
  ['"word": "ins",\n          "meaning": "Dovnitř, kam? (účet)",\n          "example": "ins Kino – Do kina"\n        },\n        {\n          "word": "in",\n          "meaning": "V / do (žádný článek)",\n          "example": "in Berlin – V Berlíně"\n        },\n        {\n          "word": "am",\n          "meaning": "Kde, kde? (komu?)",',
   '"word": "ins",\n          "meaning": "Dovnitř, kam? (4. pád)",\n          "example": "ins Kino – Do kina"\n        },\n        {\n          "word": "in",\n          "meaning": "V / do (žádný článek)",\n          "example": "in Berlin – V Berlíně"\n        },\n        {\n          "word": "am",\n          "meaning": "U, kde? (3. pád)",'],
  ['"id": "a1-im",\n      "layout": "standardStudy",\n      "translation": "V • Kde?",\n      "explanation": [\n        "Im je zkratka pro předložku in a člen dem.",\n        "Plná forma: in dem (komu?).",\n        "Používá se s podstatnými jmény mužského a středního rodu při odpovědi na otázku kde? — umístění.",\n        "S časem a ročními obdobími: v lednu, v létě, v zimě.",\n        "V praxi se téměř vždy používá im místo full in dem."\n      ],\n      "examples": [\n        {\n          "de": "Ich bin im Park.",\n          "lv": "Jsem v parku."\n        },\n        {\n          "de": "Wir wohnen im Zentrum.",\n          "lv": "Bydlíme v centru."\n        },\n        {\n          "de": "Im Sommer ist es warm.",\n          "lv": "V létě je teplo."\n        },\n        {\n          "de": "Er arbeitet im Büro.",\n          "lv": "Pracuje v kanceláři."\n        },\n        {\n          "de": "Das Kind spielt im Garten.",\n          "lv": "Dítě si hraje na zahradě."\n        },\n        {\n          "de": "Im Januar fahre ich nach Wien.",\n          "lv": "V lednu jsem jel do Vídně."',
   '"id": "a1-im",\n      "layout": "standardStudy",\n      "translation": "V • Kde?",\n      "explanation": [\n        "Im je zkratka pro předložku in a člen dem.",\n        "Plná forma: in dem (komu?).",\n        "Používá se s podstatnými jmény mužského a středního rodu při odpovědi na otázku kde? — umístění.",\n        "S časem a ročními obdobími: v lednu, v létě, v zimě.",\n        "V praxi se téměř vždy používá im místo full in dem."\n      ],\n      "examples": [\n        {\n          "de": "Ich bin im Park.",\n          "lv": "Jsem v parku."\n        },\n        {\n          "de": "Wir wohnen im Zentrum.",\n          "lv": "Bydlíme v centru."\n        },\n        {\n          "de": "Im Sommer ist es warm.",\n          "lv": "V létě je teplo."\n        },\n        {\n          "de": "Er arbeitet im Büro.",\n          "lv": "Pracuje v kanceláři."\n        },\n        {\n          "de": "Das Kind spielt im Garten.",\n          "lv": "Dítě si hraje na zahradě."\n        },\n        {\n          "de": "Im Januar fahre ich nach Wien.",\n          "lv": "V lednu jedu do Vídně."'],
  ['"id": "a1-im",\n      "layout": "standardStudy",\n      "translation": "V • Kde?",\n      "explanation": [\n        "Im je zkratka pro předložku in a člen dem.",\n        "Plná forma: in dem (komu?).",\n        "Používá se s podstatnými jmény mužského a středního rodu při odpovědi na otázku kde? — umístění.",\n        "S časem a ročními obdobími: v lednu, v létě, v zimě.",\n        "V praxi se téměř vždy používá im místo full in dem."\n      ],\n      "examples": [\n        {\n          "de": "Ich bin im Park.",\n          "lv": "Jsem v parku."\n        },\n        {\n          "de": "Wir wohnen im Zentrum.",\n          "lv": "Bydlíme v centru."\n        },\n        {\n          "de": "Im Sommer ist es warm.",\n          "lv": "V létě je teplo."\n        },\n        {\n          "de": "Er arbeitet im Büro.",\n          "lv": "Pracuje v kanceláři."\n        },\n        {\n          "de": "Das Kind spielt im Garten.",\n          "lv": "Dítě si hraje na zahradě."\n        },\n        {\n          "de": "Im Januar fahre ich nach Wien.",\n          "lv": "V lednu jedu do Vídně."\n        },\n        {\n          "de": "Sie ist im Kino.",\n          "lv": "Je v kině."\n        },\n        {\n          "de": "Wir treffen uns im Restaurant.",\n          "lv": "Sejdeme se v restauraci."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "im",\n          "meaning": "Uvnitř, kde? (3. pád)",\n          "example": "im Park – V parku"\n        },\n        {\n          "word": "ins",\n          "meaning": "Dovnitř, kam? (4. pád)",\n          "example": "ins Kino – Do kina"\n        },\n        {\n          "word": "in",\n          "meaning": "V / do (žádný článek)",\n          "example": "in Berlin – V Berlíně"\n        },\n        {\n          "word": "am",\n          "meaning": "U, kde? (3. pád)",\n          "example": "am Fenster – U okna"\n        },\n        {\n          "word": "auf",\n          "meaning": "Na povrchu",\n          "example": "auf dem Tisch – Na stole"\n        }\n      ],\n      "tip": [\n        "Pamatujte: in + dem → im (komu?, kde?).",\n        "Kde? → ins • Kde? → im - nezaměňujte tyto dva!"',
   '"id": "a1-im",\n      "layout": "standardStudy",\n      "translation": "V • Kde?",\n      "explanation": [\n        "Im je zkratka pro předložku in a člen dem.",\n        "Plná forma: in dem (komu?).",\n        "Používá se s podstatnými jmény mužského a středního rodu při odpovědi na otázku kde? — umístění.",\n        "S časem a ročními obdobími: v lednu, v létě, v zimě.",\n        "V praxi se téměř vždy používá im místo full in dem."\n      ],\n      "examples": [\n        {\n          "de": "Ich bin im Park.",\n          "lv": "Jsem v parku."\n        },\n        {\n          "de": "Wir wohnen im Zentrum.",\n          "lv": "Bydlíme v centru."\n        },\n        {\n          "de": "Im Sommer ist es warm.",\n          "lv": "V létě je teplo."\n        },\n        {\n          "de": "Er arbeitet im Büro.",\n          "lv": "Pracuje v kanceláři."\n        },\n        {\n          "de": "Das Kind spielt im Garten.",\n          "lv": "Dítě si hraje na zahradě."\n        },\n        {\n          "de": "Im Januar fahre ich nach Wien.",\n          "lv": "V lednu jedu do Vídně."\n        },\n        {\n          "de": "Sie ist im Kino.",\n          "lv": "Je v kině."\n        },\n        {\n          "de": "Wir treffen uns im Restaurant.",\n          "lv": "Sejdeme se v restauraci."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "im",\n          "meaning": "Uvnitř, kde? (3. pád)",\n          "example": "im Park – V parku"\n        },\n        {\n          "word": "ins",\n          "meaning": "Dovnitř, kam? (4. pád)",\n          "example": "ins Kino – Do kina"\n        },\n        {\n          "word": "in",\n          "meaning": "V / do (žádný článek)",\n          "example": "in Berlin – V Berlíně"\n        },\n        {\n          "word": "am",\n          "meaning": "U, kde? (3. pád)",\n          "example": "am Fenster – U okna"\n        },\n        {\n          "word": "auf",\n          "meaning": "Na povrchu",\n          "example": "auf dem Tisch – Na stole"\n        }\n      ],\n      "tip": [\n        "Pamatujte: in + dem → im (komu?, kde?).",\n        "Kam? → ins • Kde? → im - nezaměňujte tyto dva!"'],
  ['"Im = in dem, pouze s podstatným jménem mužského nebo středního rodu pro koho? ve skloňování."',
   '"Im = in dem, pouze s podstatnými jmény mužského nebo středního rodu v dativu. Odpovídá na otázku kde?"'],
  ['"Odpovědi kam?, ne kde? — umístění, nikoli pohyb."',
   '"Odpovídá na otázku kde?, ne kam? — označuje umístění, nikoli pohyb."'],

  // 22. a1-in
  ['S polohou se in často překládá jako v nebo v', 'Při označení polohy se in často překládá jako v nebo ve'],
  ['"Českýý překlad se mění v závislosti na kontextu."', '"Český překlad se mění v závislosti na kontextu."'],
  ['"text": "Pamatujte: v/v → v."', '"text": "Pamatujte: uvnitř nebo v nějakém prostoru → in."'],
  ['"Berlīnē"', '"Berlíně"'],

  // 23. a1-ins
  ['"Plná forma: v das (kde?)."', '"Plná forma: in das (kam?)."'],
  ['"Používá se s podstatnými jmény jakéhokoli pohlaví při odpovědi na otázku kde? - pohyb dovnitř."',
   '"Používá se se středním rodem při odpovědi na otázku kam? — při pohybu dovnitř."'],
  ['místo plného indas.', 'místo plné formy in das.'],
  ['"id": "a1-ins",\n      "layout": "standardStudy",\n      "translation": "V • Do • Kam?",\n      "explanation": [\n        "Ins je zkratka předložky in a členu das.",\n        "Plná forma: in das (kam?).",\n        "Používá se se středním rodem při odpovědi na otázku kam? — při pohybu dovnitř.",\n        "Často se slovesy: gehen, fahren, kommen, legen, stecken.",\n        "V praxi se téměř vždy používá místo plné formy in das."\n      ],\n      "examples": [\n        {\n          "de": "Ich gehe ins Kino.",\n          "lv": "Jdu do kina"\n        },\n        {\n          "de": "Sie geht ins Bett.",\n          "lv": "Jde spát."\n        },\n        {\n          "de": "Wir fahren ins Ausland.",\n          "lv": "Jedeme do zahraničí."\n        },\n        {\n          "de": "Komm ins Haus!",\n          "lv": "Pojď do domu!"\n        },\n        {\n          "de": "Er steckt das Geld in den Geldbeutel.",\n          "lv": "Vkládá peníze do peněženky."\n        },\n        {\n          "de": "Wir gehen ins Museum.",\n          "lv": "Jdeme do muzea."\n        },\n        {\n          "de": "Sie legt die Blumen ins Wasser.",\n          "lv": "Dává květiny do vody."\n        },\n        {\n          "de": "Fahr bitte ins Zentrum.",\n          "lv": "Prosím jděte do centra."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "ins",\n          "meaning": "Dovnitř, kam? (účet)",',
   '"id": "a1-ins",\n      "layout": "standardStudy",\n      "translation": "V • Do • Kam?",\n      "explanation": [\n        "Ins je zkratka předložky in a členu das.",\n        "Plná forma: in das (kam?).",\n        "Používá se se středním rodem při odpovědi na otázku kam? — při pohybu dovnitř.",\n        "Často se slovesy: gehen, fahren, kommen, legen, stecken.",\n        "V praxi se téměř vždy používá místo plné formy in das."\n      ],\n      "examples": [\n        {\n          "de": "Ich gehe ins Kino.",\n          "lv": "Jdu do kina"\n        },\n        {\n          "de": "Sie geht ins Bett.",\n          "lv": "Jde spát."\n        },\n        {\n          "de": "Wir fahren ins Ausland.",\n          "lv": "Jedeme do zahraničí."\n        },\n        {\n          "de": "Komm ins Haus!",\n          "lv": "Pojď do domu!"\n        },\n        {\n          "de": "Er steckt das Geld in den Geldbeutel.",\n          "lv": "Vkládá peníze do peněženky."\n        },\n        {\n          "de": "Wir gehen ins Museum.",\n          "lv": "Jdeme do muzea."\n        },\n        {\n          "de": "Sie legt die Blumen ins Wasser.",\n          "lv": "Dává květiny do vody."\n        },\n        {\n          "de": "Fahr bitte ins Zentrum.",\n          "lv": "Prosím jděte do centra."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "ins",\n          "meaning": "Dovnitř, kam? (4. pád)",'],
  ['"word": "im",\n          "meaning": "Uvnitř kde? (komu?)",\n          "example": "im Kino – Kino"',
   '"word": "im",\n          "meaning": "Uvnitř, kde? (3. pád)",\n          "example": "im Kino – V kině"'],
  ['"word": "aufs",\n          "meaning": "Na povrch (Akk.)",\n          "example": "aufs Dach – Na střeše"',
   '"word": "aufs",\n          "meaning": "Na povrch (Akk.)",\n          "example": "aufs Dach – Na střechu"'],
  ['"id": "a1-ins",\n      "layout": "standardStudy",\n      "translation": "V • Do • Kam?",\n      "explanation": [\n        "Ins je zkratka předložky in a členu das.",\n        "Plná forma: in das (kam?).",\n        "Používá se se středním rodem při odpovědi na otázku kam? — při pohybu dovnitř.",\n        "Často se slovesy: gehen, fahren, kommen, legen, stecken.",\n        "V praxi se téměř vždy používá místo plné formy in das."\n      ],\n      "examples": [\n        {\n          "de": "Ich gehe ins Kino.",\n          "lv": "Jdu do kina"\n        },\n        {\n          "de": "Sie geht ins Bett.",\n          "lv": "Jde spát."\n        },\n        {\n          "de": "Wir fahren ins Ausland.",\n          "lv": "Jedeme do zahraničí."\n        },\n        {\n          "de": "Komm ins Haus!",\n          "lv": "Pojď do domu!"\n        },\n        {\n          "de": "Er steckt das Geld in den Geldbeutel.",\n          "lv": "Vkládá peníze do peněženky."\n        },\n        {\n          "de": "Wir gehen ins Museum.",\n          "lv": "Jdeme do muzea."\n        },\n        {\n          "de": "Sie legt die Blumen ins Wasser.",\n          "lv": "Dává květiny do vody."\n        },\n        {\n          "de": "Fahr bitte ins Zentrum.",\n          "lv": "Prosím jděte do centra."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "ins",\n          "meaning": "Dovnitř, kam? (4. pád)",\n          "example": "ins Kino – Do kina"\n        },\n        {\n          "word": "im",\n          "meaning": "Uvnitř, kde? (3. pád)",\n          "example": "im Kino – V kině"\n        },\n        {\n          "word": "in",\n          "meaning": "V / do (s nezávislým článkem)",\n          "example": "in die Stadt – Do města"\n        },\n        {\n          "word": "aufs",\n          "meaning": "Na povrch (Akk.)",\n          "example": "aufs Dach – Na střechu"\n        },\n        {\n          "word": "zum",\n          "meaning": "Komu / u (koho?)",\n          "example": "zum Arzt – K lékaři"\n        }\n      ],\n      "tip": [\n        "Pamatujte: in + das → ins (kde?, kde?).",\n        "Kde? → ins • Kde? → im - to je hlavní rozdíl!"',
   '"id": "a1-ins",\n      "layout": "standardStudy",\n      "translation": "V • Do • Kam?",\n      "explanation": [\n        "Ins je zkratka předložky in a členu das.",\n        "Plná forma: in das (kam?).",\n        "Používá se se středním rodem při odpovědi na otázku kam? — při pohybu dovnitř.",\n        "Často se slovesy: gehen, fahren, kommen, legen, stecken.",\n        "V praxi se téměř vždy používá místo plné formy in das."\n      ],\n      "examples": [\n        {\n          "de": "Ich gehe ins Kino.",\n          "lv": "Jdu do kina"\n        },\n        {\n          "de": "Sie geht ins Bett.",\n          "lv": "Jde spát."\n        },\n        {\n          "de": "Wir fahren ins Ausland.",\n          "lv": "Jedeme do zahraničí."\n        },\n        {\n          "de": "Komm ins Haus!",\n          "lv": "Pojď do domu!"\n        },\n        {\n          "de": "Er steckt das Geld in den Geldbeutel.",\n          "lv": "Vkládá peníze do peněženky."\n        },\n        {\n          "de": "Wir gehen ins Museum.",\n          "lv": "Jdeme do muzea."\n        },\n        {\n          "de": "Sie legt die Blumen ins Wasser.",\n          "lv": "Dává květiny do vody."\n        },\n        {\n          "de": "Fahr bitte ins Zentrum.",\n          "lv": "Prosím jděte do centra."\n        }\n      ],\n      "comparison": [\n        {\n          "word": "ins",\n          "meaning": "Dovnitř, kam? (4. pád)",\n          "example": "ins Kino – Do kina"\n        },\n        {\n          "word": "im",\n          "meaning": "Uvnitř, kde? (3. pád)",\n          "example": "im Kino – V kině"\n        },\n        {\n          "word": "in",\n          "meaning": "V / do (s nezávislým článkem)",\n          "example": "in die Stadt – Do města"\n        },\n        {\n          "word": "aufs",\n          "meaning": "Na povrch (Akk.)",\n          "example": "aufs Dach – Na střechu"\n        },\n        {\n          "word": "zum",\n          "meaning": "Komu / u (koho?)",\n          "example": "zum Arzt – K lékaři"\n        }\n      ],\n      "tip": [\n        "Pamatujte: in + das → ins (kam?, při pohybu dovnitř).",\n        "Kam? → ins • Kde? → im - to je hlavní rozdíl!"'],
  ['"Ins = in das, pouze s podstatným jménem libovolného rodu kde? ve skloňování."',
   '"Ins = in das, používá se se středním rodem při otázce kam? v akuzativu."'],
  ['"Pro mužský rod: in den Wald • Žen: v die Schule."',
   '"Pro mužský rod: in den Wald • Pro ženský rod: in die Schule."'],

  // 24. a1-jawohl-299
  ['"de": "jawohl",\n    "lv": "Přesně tak",', '"de": "jawohl",\n    "lv": "Ano, jistě",'],
];

const SKIPPED = [
  { id: 'a1-Großeltern-251', field: 'missing Study', reason: 'OWNER / PRECISE STUDY REPAIR REQUIRED' },
  { id: 'a1-Hand-267', field: 'missing Study', reason: 'OWNER / PRECISE STUDY REPAIR REQUIRED' },
  { id: 'a1-hübsch-288', field: 'missing Study', reason: 'OWNER / PRECISE STUDY REPAIR REQUIRED' },
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

console.log('\nBerlīnē remaining:', fs.readFileSync(FILES[0], 'utf8').split('Berlīnē').length - 1);
console.log('\nSkipped (documented):');
for (const s of SKIPPED) console.log(`  ${s.id} — ${s.field}: ${s.reason}`);

if (hadError) process.exit(1);
