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
  // 1. wenig lv
  ["\"de\": \"wenig\",\n    \"lv\": \"Nic moc\"", "\"de\": \"wenig\",\n    \"lv\": \"Málo\""],
  // 2a a1-wenn ex0
  ["\"de\": \"Wenn du Zeit hast, komm vorbei.\",\n          \"lv\": \"Pokud budete mít čas, stavte se.\"", "\"de\": \"Wenn du Zeit hast, komm vorbei.\",\n          \"lv\": \"Pokud budeš mít čas, stav se.\""],
  // 2b a1-wenn ex3
  ["\"de\": \"Ich weiß nicht, ob er kommt.\",\n          \"lv\": \"Nevím jestli přijde.\"\n        }\n      ],\n      \"comparison\": [\n        {\n          \"word\": \"wenn\"", "\"de\": \"Ich weiß nicht, ob er kommt.\",\n          \"lv\": \"Nevím, jestli přijde.\"\n        }\n      ],\n      \"comparison\": [\n        {\n          \"word\": \"wenn\""],
  // 2c a1-wenn expl1
  ["\"id\": \"a1-wenn\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jestliže • Kdy\",\n      \"explanation\": [\n        \"Hlavní myšlenka: wenn znamená jestli nebo kdy v závislosti na situaci.\",\n        \"Pokud je to podmínka, přeložte jako kdyby.\",", "\"id\": \"a1-wenn\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jestliže • Kdy\",\n      \"explanation\": [\n        \"Hlavní myšlenka: wenn znamená jestli nebo kdy v závislosti na situaci.\",\n        \"Pokud vyjadřuje podmínku, přeložte wenn jako jestliže, pokud nebo když.\","],
  // 2d a1-wenn expl3
  ["\"Pokud vyjadřuje podmínku, přeložte wenn jako jestliže, pokud nebo když.\",\n        \"Pokud se jedná o opakovaný nebo obecný čas, přeložte jako kdy.\",\n        \"Po wenn končí sloveso většinou německou větou.\"", "\"Pokud vyjadřuje podmínku, přeložte wenn jako jestliže, pokud nebo když.\",\n        \"Pokud se jedná o opakovaný nebo obecný čas, přeložte jako kdy.\",\n        \"Po wenn stojí sloveso ve vedlejší větě obvykle na konci.\""],
  // 2e a1-wenn cmp1
  ["\"word\": \"ob\",\n          \"meaning\": \"Nebo v nepřímé otázce\",\n          \"example\": \"Ich weiß nicht, ob...\"", "\"word\": \"ob\",\n          \"meaning\": \"Zda / jestli v nepřímé otázce\",\n          \"example\": \"Ich weiß nicht, ob...\""],
  // 2f a1-wenn cmp2
  ["\"word\": \"wann\",\n          \"meaning\": \"Když je v otázce\",\n          \"example\": \"Wann kommst du?\"", "\"word\": \"wann\",\n          \"meaning\": \"Kdy v otázce\",\n          \"example\": \"Wann kommst du?\""],
  // 2g a1-wenn tip
  ["\"text\": \"Pamatujte: podmínka → wenn • Otázka \\\"kdy?\\\" → chtít.\"", "\"text\": \"Pamatujte: podmínka → wenn • Otázka „kdy?“ → wann.\""],
  // 3a a1-wer translation
  ["\"id\": \"a1-wer\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Kdo • Kdo\",", "\"id\": \"a1-wer\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Kdo\","],
  // 3b a1-wer ex0
  ["\"de\": \"Wer ist das?\",\n          \"lv\": \"Co je to?\"", "\"de\": \"Wer ist das?\",\n          \"lv\": \"Kdo je to?\""],
  // 3c a1-wer ex2
  ["\"de\": \"Wer kommt heute?\",\n          \"lv\": \"Co přijde dnes?\"", "\"de\": \"Wer kommt heute?\",\n          \"lv\": \"Kdo dnes přijde?\""],
  // 3d a1-wer ex3
  ["\"de\": \"Wer ist deine Lehrerin?\",\n          \"lv\": \"Kdo je tvůj učitel\"", "\"de\": \"Wer ist deine Lehrerin?\",\n          \"lv\": \"Kdo je tvoje učitelka?\""],
  // 3e a1-wer expl0
  ["\"Hlavní myšlenka: wer je dotazovací slovo o identitě osoby – v češtině je to kdo nebo kdo.\",", "\"Hlavní myšlenka: wer je tázací slovo pro osoby a v češtině znamená kdo.\","],
  // 3f a1-wer expl3
  ["\"Wer je v němčině obvykle předmětem věty (nominativu) — Wer ist das? = co je to?\",", "\"Wer je v němčině obvykle podmětem v nominativu: Wer ist das? = Kdo je to?\","],
  // 3g a1-wer important2
  ["\"Wer mění tvar přechylováním: wen, wem, wessen - ale základní tvar je wer.\"", "\"Wer mění tvar podle pádu: wen, wem, wessen; základní tvar je wer.\""],
  // 4a a1-werden expl1
  ["\"Používá se, když se něco změní nebo změní.\",", "\"Používá se, když se něco změní nebo se stane jiným.\","],
  // 4b a1-werden expl3
  ["\"Na úrovni A1 je nejdůležitější fráze Ich werde müde. = Jsem unavený.\"", "\"Na úrovni A1 je nejdůležitější fráze Ich werde müde. = Začínám být unavený.\""],
  // 4c a1-werden cmp2
  ["\"id\": \"a1-werden\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Stát se\",\n      \"explanation\": [\n        \"Hlavní myšlenka: werden na A1 nejčastěji znamená stát se.\",\n        \"Používá se, když se něco změní nebo se stane jiným.\",\n        \"V pozdější němčině se werden používá také pro budoucnost a pasivum.\",\n        \"Na úrovni A1 je nejdůležitější fráze Ich werde müde. = Začínám být unavený.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Ich werde müde.\",\n          \"lv\": \"Začínám být unavený.\"\n        },\n        {\n          \"de\": \"Es wird kalt.\",\n          \"lv\": \"Ochlazuje se.\"\n        },\n        {\n          \"de\": \"Sie wird Ärztin.\",\n          \"lv\": \"Stane se lékařkou.\"\n        },\n        {\n          \"de\": \"Ich bin müde.\",\n          \"lv\": \"Jsem unavený\"\n        }\n      ],\n      \"comparison\": [\n        {\n          \"word\": \"werden\",\n          \"meaning\": \"Stát se\",\n          \"example\": \"Ich werde müde.\"\n        },\n        {\n          \"word\": \"sein\",\n          \"meaning\": \"Být\",\n          \"example\": \"Ich bin müde.\"\n        },\n        {\n          \"word\": \"bleiben\",\n          \"meaning\": \"Pobyt\",", "\"id\": \"a1-werden\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Stát se\",\n      \"explanation\": [\n        \"Hlavní myšlenka: werden na A1 nejčastěji znamená stát se.\",\n        \"Používá se, když se něco změní nebo se stane jiným.\",\n        \"V pozdější němčině se werden používá také pro budoucnost a pasivum.\",\n        \"Na úrovni A1 je nejdůležitější fráze Ich werde müde. = Začínám být unavený.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Ich werde müde.\",\n          \"lv\": \"Začínám být unavený.\"\n        },\n        {\n          \"de\": \"Es wird kalt.\",\n          \"lv\": \"Ochlazuje se.\"\n        },\n        {\n          \"de\": \"Sie wird Ärztin.\",\n          \"lv\": \"Stane se lékařkou.\"\n        },\n        {\n          \"de\": \"Ich bin müde.\",\n          \"lv\": \"Jsem unavený\"\n        }\n      ],\n      \"comparison\": [\n        {\n          \"word\": \"werden\",\n          \"meaning\": \"Stát se\",\n          \"example\": \"Ich werde müde.\"\n        },\n        {\n          \"word\": \"sein\",\n          \"meaning\": \"Být\",\n          \"example\": \"Ich bin müde.\"\n        },\n        {\n          \"word\": \"bleiben\",\n          \"meaning\": \"Zůstat\","],
  // 4d a1-werden cmp3
  ["\"id\": \"a1-werden\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Stát se\",\n      \"explanation\": [\n        \"Hlavní myšlenka: werden na A1 nejčastěji znamená stát se.\",\n        \"Používá se, když se něco změní nebo se stane jiným.\",\n        \"V pozdější němčině se werden používá také pro budoucnost a pasivum.\",\n        \"Na úrovni A1 je nejdůležitější fráze Ich werde müde. = Začínám být unavený.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Ich werde müde.\",\n          \"lv\": \"Začínám být unavený.\"\n        },\n        {\n          \"de\": \"Es wird kalt.\",\n          \"lv\": \"Ochlazuje se.\"\n        },\n        {\n          \"de\": \"Sie wird Ärztin.\",\n          \"lv\": \"Stane se lékařkou.\"\n        },\n        {\n          \"de\": \"Ich bin müde.\",\n          \"lv\": \"Jsem unavený\"\n        }\n      ],\n      \"comparison\": [\n        {\n          \"word\": \"werden\",\n          \"meaning\": \"Stát se\",\n          \"example\": \"Ich werde müde.\"\n        },\n        {\n          \"word\": \"sein\",\n          \"meaning\": \"Být\",\n          \"example\": \"Ich bin müde.\"\n        },\n        {\n          \"word\": \"bleiben\",\n          \"meaning\": \"Zůstat\",\n          \"example\": \"Ich bleibe hier.\"\n        },\n        {\n          \"word\": \"machen\",\n          \"meaning\": \"Dělat / dělat\",", "\"id\": \"a1-werden\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Stát se\",\n      \"explanation\": [\n        \"Hlavní myšlenka: werden na A1 nejčastěji znamená stát se.\",\n        \"Používá se, když se něco změní nebo se stane jiným.\",\n        \"V pozdější němčině se werden používá také pro budoucnost a pasivum.\",\n        \"Na úrovni A1 je nejdůležitější fráze Ich werde müde. = Začínám být unavený.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Ich werde müde.\",\n          \"lv\": \"Začínám být unavený.\"\n        },\n        {\n          \"de\": \"Es wird kalt.\",\n          \"lv\": \"Ochlazuje se.\"\n        },\n        {\n          \"de\": \"Sie wird Ärztin.\",\n          \"lv\": \"Stane se lékařkou.\"\n        },\n        {\n          \"de\": \"Ich bin müde.\",\n          \"lv\": \"Jsem unavený\"\n        }\n      ],\n      \"comparison\": [\n        {\n          \"word\": \"werden\",\n          \"meaning\": \"Stát se\",\n          \"example\": \"Ich werde müde.\"\n        },\n        {\n          \"word\": \"sein\",\n          \"meaning\": \"Být\",\n          \"example\": \"Ich bin müde.\"\n        },\n        {\n          \"word\": \"bleiben\",\n          \"meaning\": \"Zůstat\",\n          \"example\": \"Ich bleibe hier.\"\n        },\n        {\n          \"word\": \"machen\",\n          \"meaning\": \"Dělat / vytvořit\","],
  // 5a a1-wetter translation
  ["\"id\": \"a1-wetter\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Čas (počasí)\",", "\"id\": \"a1-wetter\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Počasí\","],
  // 5b a1-wetter ex0
  ["\"de\": \"Wie ist das Wetter heute?\",\n          \"lv\": \"Kolik je dnes hodin?\"", "\"de\": \"Wie ist das Wetter heute?\",\n          \"lv\": \"Jaké je dnes počasí?\""],
  // 5c a1-wetter ex4
  ["\"id\": \"a1-wetter\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Počasí\",\n      \"explanation\": [\n        \"Hlavní myšlenka: das Wetter znamená počasí – slunečno, deštivo, chladno nebo teplo.\",\n        \"České slovo „čas“ může znamenat jak počasí, tak čas na hodinách – v němčině je to jinak.\",\n        \"Povídejte si o počasí v přírodě s dasem Wetterem: Wie ist das Wetter heute?\",\n        \"Das Wetter se často používá ve větě spolu se slovy jako teplý nebo kalt.\",\n        \"Nezaměňovat s die Zeit – je to čas jako okamžik nebo příležitost (Ich habe keine Zeit).\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Wie ist das Wetter heute?\",\n          \"lv\": \"Jaké je dnes počasí?\"\n        },\n        {\n          \"de\": \"Das Wetter ist schön.\",\n          \"lv\": \"Počasí je pěkné.\"\n        },\n        {\n          \"de\": \"Das Wetter ist schlecht.\",\n          \"lv\": \"Počasí je špatné.\"\n        },\n        {\n          \"de\": \"Im Winter ist das Wetter oft kalt.\",\n          \"lv\": \"V zimě je často chladné počasí.\"\n        },\n        {\n          \"de\": \"Wir sprechen über das Wetter.\",\n          \"lv\": \"Mluvíme o čase.\"", "\"id\": \"a1-wetter\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Počasí\",\n      \"explanation\": [\n        \"Hlavní myšlenka: das Wetter znamená počasí – slunečno, deštivo, chladno nebo teplo.\",\n        \"České slovo „čas“ může znamenat jak počasí, tak čas na hodinách – v němčině je to jinak.\",\n        \"Povídejte si o počasí v přírodě s dasem Wetterem: Wie ist das Wetter heute?\",\n        \"Das Wetter se často používá ve větě spolu se slovy jako teplý nebo kalt.\",\n        \"Nezaměňovat s die Zeit – je to čas jako okamžik nebo příležitost (Ich habe keine Zeit).\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Wie ist das Wetter heute?\",\n          \"lv\": \"Jaké je dnes počasí?\"\n        },\n        {\n          \"de\": \"Das Wetter ist schön.\",\n          \"lv\": \"Počasí je pěkné.\"\n        },\n        {\n          \"de\": \"Das Wetter ist schlecht.\",\n          \"lv\": \"Počasí je špatné.\"\n        },\n        {\n          \"de\": \"Im Winter ist das Wetter oft kalt.\",\n          \"lv\": \"V zimě je často chladné počasí.\"\n        },\n        {\n          \"de\": \"Wir sprechen über das Wetter.\",\n          \"lv\": \"Mluvíme o počasí.\""],
  // 5d a1-wetter tip1
  ["\"Pamatujte: Wie ist das Wetter? = Kolik je hodin? (ne hodiny).\"", "\"Pamatujte: Wie ist das Wetter? = Jaké je počasí? (ne kolik je hodin).\""],
  // 6. wichtig lv
  ["\"de\": \"wichtig\",\n    \"lv\": \"Důležité\"", "\"de\": \"wichtig\",\n    \"lv\": \"Důležitý\""],
  // 7a a1-wie ex0
  ["\"de\": \"Wie geht es dir?\",\n          \"lv\": \"Jak se máte\"", "\"de\": \"Wie geht es dir?\",\n          \"lv\": \"Jak se máš?\""],
  // 7b a1-wie ex3
  ["\"de\": \"Wie alt bist du?\",\n          \"lv\": \"Kolik je Vám let\"", "\"de\": \"Wie alt bist du?\",\n          \"lv\": \"Kolik je ti let?\""],
  // 7c a1-wie ex4
  ["\"de\": \"Wie lange dauert der Film?\",\n          \"lv\": \"Jak je film dlouhý?\"", "\"de\": \"Wie lange dauert der Film?\",\n          \"lv\": \"Jak dlouho film trvá?\""],
  // 7d a1-wie expl1
  ["\"Wie alone (Wie geht's?) se ptá na cestu - v češtině jak.\",", "\"Wie samo (Wie geht's?) se ptá na způsob nebo stav; v češtině znamená jak.\","],
  // 7e a1-wie important2
  ["\"Špatně: Kolik je vám let? → Správně: Jak se máš? (Wie geht's?)\"", "\"Špatně: Kolik ti je? jako překlad Wie geht's? → Správně: Jak se máš?\""],
  // 8. Zigarette lv
  ["\"de\": \"Zigarette\",\n    \"de_article\": \"die\",\n    \"de_plural\": \"die Zigaretten\",\n    \"lv\": \"Cigaretu\"", "\"de\": \"Zigarette\",\n    \"de_article\": \"die\",\n    \"de_plural\": \"die Zigaretten\",\n    \"lv\": \"Cigareta\""],
  // 9. Zitrone lv
  ["\"de\": \"Zitrone\",\n    \"de_article\": \"die\",\n    \"de_plural\": \"die Zitronen\",\n    \"lv\": \"Citrón\"", "\"de\": \"Zitrone\",\n    \"de_article\": \"die\",\n    \"de_plural\": \"die Zitronen\",\n    \"lv\": \"Citron\""],
  // 10a a1-zu translation
  ["\"id\": \"a1-zu\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Do • At\",", "\"id\": \"a1-zu\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"K • Do • Příliš\","],
  // 10b a1-zu expl0
  ["\"Hlavní myšlenka: zu velmi často znamená to nebo at, ale má také roli s infinitivem.\",", "\"Hlavní myšlenka: zu často znamená k nebo do, ale používá se také před infinitivem.\","],
  // 10c a1-zu expl1
  ["\"U lidí a institucí zu často znamená u nebo do.\",", "\"U osob zu často znamená k nebo ke; u některých institucí také do nebo na.\","],
  // 10d a1-zu expl2
  ["\"S přídavnými jmény může zu znamenat také.\",", "\"Před přídavnými jmény může zu znamenat „příliš“: zu teuer = příliš drahé.\","],
  // 10e a1-zu cmp0
  ["\"word\": \"zu\",\n          \"meaning\": \"To / at / too / infinitiv\",\n          \"example\": \"Ich gehe zum Arzt.\"", "\"word\": \"zu\",\n          \"meaning\": \"K / do / příliš / před infinitivem\",\n          \"example\": \"Ich gehe zum Arzt.\""],
  // 10f a1-zu important1
  ["\"Zu teuer znamená „příliš drahé“, nikoli „příliš drahé“.\"", "\"Zu teuer znamená „příliš drahé“, nikoli „drahé“ bez významu příliš.\""],
  // 11. zuerst lv
  ["\"de\": \"zuerst\",\n    \"lv\": \"Především\"", "\"de\": \"zuerst\",\n    \"lv\": \"Nejprve\""],
  // 12. a1-zug ex1
  ["\"de\": \"Ich fahre mit dem Zug.\",\n          \"lv\": \"Jezdím vlakem\"", "\"de\": \"Ich fahre mit dem Zug.\",\n          \"lv\": \"Jezdím vlakem.\""],
  // 13a a1-zum translation
  ["\"id\": \"a1-zum\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Do • At\",", "\"id\": \"a1-zum\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"K • Ke\","],
  // 13b a1-zum ex1
  ["\"de\": \"Wir fahren zum Bahnhof.\",\n          \"lv\": \"Jdeme na nádraží.\"", "\"de\": \"Wir fahren zum Bahnhof.\",\n          \"lv\": \"Jedeme na nádraží.\""],
  // 13c a1-zum ex2
  ["\"de\": \"Sie geht zum Supermarkt.\",\n          \"lv\": \"Jde do obchodu.\"", "\"de\": \"Sie geht zum Supermarkt.\",\n          \"lv\": \"Jde do supermarketu.\""],
  // 13d a1-zum cmp0
  ["\"id\": \"a1-zum\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"K • Ke\",\n      \"explanation\": [\n        \"Zum je zkratka předložky zu a členu dem.\",\n        \"Plná podoba: zu dem (komu?).\",\n        \"Používá se s podstatnými jmény mužského a středního rodu při označení směru nebo účelu.\",\n        \"Často znamená k něčemu nebo někomu – k lékaři, na stanici, ke kamarádovi.\",\n        \"V praxi se místo plného zu dem téměř vždy používá zum.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Ich gehe zum Arzt.\",\n          \"lv\": \"Jdu k doktorovi.\"\n        },\n        {\n          \"de\": \"Wir fahren zum Bahnhof.\",\n          \"lv\": \"Jedeme na nádraží.\"\n        },\n        {\n          \"de\": \"Sie geht zum Supermarkt.\",\n          \"lv\": \"Jde do supermarketu.\"\n        },\n        {\n          \"de\": \"Komm zum Essen!\",\n          \"lv\": \"Pojď jíst!\"\n        },\n        {\n          \"de\": \"Er fährt zum Flughafen.\",\n          \"lv\": \"Jede na letiště.\"\n        },\n        {\n          \"de\": \"Wir gehen zum Konzert.\",\n          \"lv\": \"Jdeme na koncert.\"\n        },\n        {\n          \"de\": \"Das Geschenk ist zum Geburtstag.\",\n          \"lv\": \"Dárek je k narozeninám.\"\n        },\n        {\n          \"de\": \"Ich gehe zum Friseur.\",\n          \"lv\": \"Jdu ke kadeřníkovi.\"\n        }\n      ],\n      \"comparison\": [\n        {\n          \"word\": \"zum\",\n          \"meaning\": \"Komu / u (koho?)\",", "\"id\": \"a1-zum\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"K • Ke\",\n      \"explanation\": [\n        \"Zum je zkratka předložky zu a členu dem.\",\n        \"Plná podoba: zu dem (komu?).\",\n        \"Používá se s podstatnými jmény mužského a středního rodu při označení směru nebo účelu.\",\n        \"Často znamená k něčemu nebo někomu – k lékaři, na stanici, ke kamarádovi.\",\n        \"V praxi se místo plného zu dem téměř vždy používá zum.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Ich gehe zum Arzt.\",\n          \"lv\": \"Jdu k doktorovi.\"\n        },\n        {\n          \"de\": \"Wir fahren zum Bahnhof.\",\n          \"lv\": \"Jedeme na nádraží.\"\n        },\n        {\n          \"de\": \"Sie geht zum Supermarkt.\",\n          \"lv\": \"Jde do supermarketu.\"\n        },\n        {\n          \"de\": \"Komm zum Essen!\",\n          \"lv\": \"Pojď jíst!\"\n        },\n        {\n          \"de\": \"Er fährt zum Flughafen.\",\n          \"lv\": \"Jede na letiště.\"\n        },\n        {\n          \"de\": \"Wir gehen zum Konzert.\",\n          \"lv\": \"Jdeme na koncert.\"\n        },\n        {\n          \"de\": \"Das Geschenk ist zum Geburtstag.\",\n          \"lv\": \"Dárek je k narozeninám.\"\n        },\n        {\n          \"de\": \"Ich gehe zum Friseur.\",\n          \"lv\": \"Jdu ke kadeřníkovi.\"\n        }\n      ],\n      \"comparison\": [\n        {\n          \"word\": \"zum\",\n          \"meaning\": \"K / ke (komu nebo čemu?)\","],
  // 13e a1-zum cmp1
  ["\"word\": \"zur\",\n          \"meaning\": \"Do / u (rodina manželky)\",\n          \"example\": \"zur Schule – Do školy\"", "\"word\": \"zur\",\n          \"meaning\": \"K / ke (ženský rod)\",\n          \"example\": \"zur Schule – Do školy\""],
  // 13f a1-zum cmp2
  ["\"word\": \"zu\",\n          \"meaning\": \"Do / v / také\",\n          \"example\": \"zu Hause – Doma\"", "\"word\": \"zu\",\n          \"meaning\": \"K / ke • doma • příliš\",\n          \"example\": \"zu Hause – Doma\""],
  // 13g a1-zum cmp3
  ["\"word\": \"nach\",\n          \"meaning\": \"Do (města/země)\",\n          \"example\": \"nach Berlin – Do Berlína\"", "\"word\": \"nach\",\n          \"meaning\": \"Do (měst/zemí)\",\n          \"example\": \"nach Berlin – Do Berlína\""],
  // 13h a1-zum cmp4
  ["\"word\": \"bei\",\n          \"meaning\": \"Na (umístění)\",\n          \"example\": \"beim Arzt – K lékaři\"", "\"word\": \"bei\",\n          \"meaning\": \"U / při (místo nebo přítomnost)\",\n          \"example\": \"beim Arzt – K lékaři\""],
  // 13i a1-zum expl2
  ["\"Používá se s podstatnými jmény mužského a středního rodu při označení směru nebo účelu.\",", "\"Používá se s podstatnými jmény mužského a středního rodu v dativu, když označuje směr nebo účel.\","],
  // 13j a1-zum important0
  ["\"Zum = zu dem, pouze s podstatným jménem mužského nebo bezrodového pro koho? ve skloňování.\",", "\"Zum = zu dem, používá se s podstatnými jmény mužského a středního rodu v dativu.\","],
  // 13k a1-zum tip0
  ["\"Pamatujte: zu + dem → zum (pro koho?).\"", "\"Pamatujte: zu + dem → zum (ke komu nebo čemu?).\""],
  // 14. zumachen lv
  ["\"de\": \"zumachen\",\n    \"lv\": \"Zblízka\"", "\"de\": \"zumachen\",\n    \"lv\": \"Zavřít\""],
  // 15. zurück lv
  ["\"de\": \"zurück\",\n    \"lv\": \"Zadní\"", "\"de\": \"zurück\",\n    \"lv\": \"Zpět\""],
  // 16. zwanzigste lv
  ["\"de\": \"zwanzigste\",\n    \"lv\": \"Dvacátého\"", "\"de\": \"zwanzigste\",\n    \"lv\": \"Dvacátý\""],
  // 17a a1-fernsehen expl
  ["To znamená sledování televize.", "Znamená to dívat se na televizi."],
  // 17b a1-fernsehen tip
  ["\"text\": \"K akci se používá Fernsehen (ich sehe fern). Das Fernsehen se používá pro televizní program nebo médium.\"", "\"text\": \"K činnosti se používá sloveso fernsehen (ich sehe fern). Das Fernsehen se používá pro televizní program nebo médium.\""],
  // 18a a1-fernsehen-study expl1
  ["\"Das Fernsehen v podstatě znamená: dívat se na vysílání.\",", "\"Das Fernsehen označuje televizi jako médium nebo televizní vysílání.\","],
  // 18b a1-fernsehen-study expl2
  ["\"Das Fernsehen označuje televizi jako médium nebo televizní vysílání.\",\n        \"Často popisuje: akce.\",", "\"Das Fernsehen označuje televizi jako médium nebo televizní vysílání.\",\n        \"Označuje věc nebo médium, nikoli činnost.\","],
  // 18c a1-fernsehen-study important0
  ["\"Fernsehen je dělitelné: sehen + kapradina.\"", "\"Fernsehen je sloveso dělitelné na sehen + fern.\""],
  // 19a a1-appetit translation
  ["\"id\": \"a1-appetit\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Chuť\",", "\"id\": \"a1-appetit\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Chuť k jídlu\","],
  // 19b a1-appetit ex0
  ["\"de\": \"Guten Appetit!\",\n          \"lv\": \"Chuť k jídlu!\"", "\"de\": \"Guten Appetit!\",\n          \"lv\": \"Dobrou chuť!\""],
  // 20a a1-essen ex1
  ["\"id\": \"a1-essen\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jíst\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Sloveso - jíst jídlo.\",\n        \"Essen především znamená: konzumovat jídlo.\",\n        \"Často popisuje: akce.\",\n        \"Essen v podstatě znamená: jídlo nebo jídlo.\",\n        \"Často popisuje: déšť.\",\n        \"Essen znamená jíst.\",\n        \"Das Essen může znamenat jídlo nebo jídlo obecně.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Ich esse gern Pizza.\",\n          \"lv\": \"Rád jím pizzu.\"\n        },\n        {\n          \"de\": \"Was wollt ihr essen?\",\n          \"lv\": \"Co chceš jíst\"", "\"id\": \"a1-essen\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jíst\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Sloveso - jíst jídlo.\",\n        \"Essen především znamená: konzumovat jídlo.\",\n        \"Často popisuje: akce.\",\n        \"Essen v podstatě znamená: jídlo nebo jídlo.\",\n        \"Často popisuje: déšť.\",\n        \"Essen znamená jíst.\",\n        \"Das Essen může znamenat jídlo nebo jídlo obecně.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Ich esse gern Pizza.\",\n          \"lv\": \"Rád jím pizzu.\"\n        },\n        {\n          \"de\": \"Was wollt ihr essen?\",\n          \"lv\": \"Co chcete jíst?\""],
  // 20b a1-essen expl4
  ["\"Essen v podstatě znamená: jídlo nebo jídlo.\",", "\"Das Essen může znamenat jídlo nebo celé jídlo.\","],
  // 20c a1-essen expl6
  ["\"id\": \"a1-essen\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jíst\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Sloveso - jíst jídlo.\",\n        \"Essen především znamená: konzumovat jídlo.\",\n        \"Často popisuje: akce.\",\n        \"Das Essen může znamenat jídlo nebo celé jídlo.\",\n        \"Často popisuje: déšť.\",\n        \"Essen znamená jíst.\",\n        \"Das Essen může znamenat jídlo nebo jídlo obecně.\"", "\"id\": \"a1-essen\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jíst\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Sloveso - jíst jídlo.\",\n        \"Essen především znamená: konzumovat jídlo.\",\n        \"Často popisuje: akce.\",\n        \"Das Essen může znamenat jídlo nebo celé jídlo.\",\n        \"Často popisuje: déšť.\",\n        \"Essen znamená jíst.\",\n        \"Das Essen může znamenat jídlo nebo celé jídlo obecně.\""],
  // 20d a1-essen tip0
  ["\"Essen = jísti\"", "\"Essen = jíst\""],
  // 20e a1-essen important3
  ["\"id\": \"a1-essen\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jíst\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Sloveso - jíst jídlo.\",\n        \"Essen především znamená: konzumovat jídlo.\",\n        \"Často popisuje: akce.\",\n        \"Das Essen může znamenat jídlo nebo celé jídlo.\",\n        \"Často popisuje: déšť.\",\n        \"Essen znamená jíst.\",\n        \"Das Essen může znamenat jídlo nebo celé jídlo obecně.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Ich esse gern Pizza.\",\n          \"lv\": \"Rád jím pizzu.\"\n        },\n        {\n          \"de\": \"Was wollt ihr essen?\",\n          \"lv\": \"Co chcete jíst?\"\n        },\n        {\n          \"de\": \"Wir essen um 12 Uhr.\",\n          \"lv\": \"Jíme ve 12 hodin.\"\n        },\n        {\n          \"de\": \"Das Essen ist fertig.\",\n          \"lv\": \"Jídlo je hotové.\"\n        },\n        {\n          \"de\": \"Das Essen schmeckt sehr gut.\",\n          \"lv\": \"Jídlo chutná velmi dobře.\"\n        },\n        {\n          \"de\": \"Das Essen schmeckt gut.\",\n          \"lv\": \"Jídlo chutná dobře.\"\n        }\n      ],\n      \"tip\": [\n        \"Essen = jíst\",\n        \"Použijte essen, když kontext odpovídá tomuto významu.\"\n      ],\n      \"important\": [\n        \"Essen je sloveso bez článku.\",\n        \"Das Essen není totéž co essen.\",\n        \"Akce: essen.\",\n        \"Případ/jídlo: das Essen.\"", "\"id\": \"a1-essen\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jíst\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Sloveso - jíst jídlo.\",\n        \"Essen především znamená: konzumovat jídlo.\",\n        \"Často popisuje: akce.\",\n        \"Das Essen může znamenat jídlo nebo celé jídlo.\",\n        \"Často popisuje: déšť.\",\n        \"Essen znamená jíst.\",\n        \"Das Essen může znamenat jídlo nebo celé jídlo obecně.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Ich esse gern Pizza.\",\n          \"lv\": \"Rád jím pizzu.\"\n        },\n        {\n          \"de\": \"Was wollt ihr essen?\",\n          \"lv\": \"Co chcete jíst?\"\n        },\n        {\n          \"de\": \"Wir essen um 12 Uhr.\",\n          \"lv\": \"Jíme ve 12 hodin.\"\n        },\n        {\n          \"de\": \"Das Essen ist fertig.\",\n          \"lv\": \"Jídlo je hotové.\"\n        },\n        {\n          \"de\": \"Das Essen schmeckt sehr gut.\",\n          \"lv\": \"Jídlo chutná velmi dobře.\"\n        },\n        {\n          \"de\": \"Das Essen schmeckt gut.\",\n          \"lv\": \"Jídlo chutná dobře.\"\n        }\n      ],\n      \"tip\": [\n        \"Essen = jíst\",\n        \"Použijte essen, když kontext odpovídá tomuto významu.\"\n      ],\n      \"important\": [\n        \"Essen je sloveso bez článku.\",\n        \"Das Essen není totéž co essen.\",\n        \"Akce: essen.\",\n        \"Podstatné jméno / jídlo: das Essen.\""],
  // 20f a1-essen sectionAccents purple
  ["\"id\": \"a1-essen\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jíst\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Sloveso - jíst jídlo.\",\n        \"Essen především znamená: konzumovat jídlo.\",\n        \"Často popisuje: akce.\",\n        \"Das Essen může znamenat jídlo nebo celé jídlo.\",\n        \"Často popisuje: déšť.\",\n        \"Essen znamená jíst.\",\n        \"Das Essen může znamenat jídlo nebo celé jídlo obecně.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Ich esse gern Pizza.\",\n          \"lv\": \"Rád jím pizzu.\"\n        },\n        {\n          \"de\": \"Was wollt ihr essen?\",\n          \"lv\": \"Co chcete jíst?\"\n        },\n        {\n          \"de\": \"Wir essen um 12 Uhr.\",\n          \"lv\": \"Jíme ve 12 hodin.\"\n        },\n        {\n          \"de\": \"Das Essen ist fertig.\",\n          \"lv\": \"Jídlo je hotové.\"\n        },\n        {\n          \"de\": \"Das Essen schmeckt sehr gut.\",\n          \"lv\": \"Jídlo chutná velmi dobře.\"\n        },\n        {\n          \"de\": \"Das Essen schmeckt gut.\",\n          \"lv\": \"Jídlo chutná dobře.\"\n        }\n      ],\n      \"tip\": [\n        \"Essen = jíst\",\n        \"Použijte essen, když kontext odpovídá tomuto významu.\"\n      ],\n      \"important\": [\n        \"Essen je sloveso bez článku.\",\n        \"Das Essen není totéž co essen.\",\n        \"Akce: essen.\",\n        \"Podstatné jméno / jídlo: das Essen.\"\n      ],\n      \"sectionAccents\": {\n        \"explanation\": {\n          \"green\": [\n            \"essen\",\n            \"essen\"\n          ],\n          \"purple\": [\n            \"ēst\"\n          ],", "\"id\": \"a1-essen\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jíst\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Sloveso - jíst jídlo.\",\n        \"Essen především znamená: konzumovat jídlo.\",\n        \"Často popisuje: akce.\",\n        \"Das Essen může znamenat jídlo nebo celé jídlo.\",\n        \"Často popisuje: déšť.\",\n        \"Essen znamená jíst.\",\n        \"Das Essen může znamenat jídlo nebo celé jídlo obecně.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Ich esse gern Pizza.\",\n          \"lv\": \"Rád jím pizzu.\"\n        },\n        {\n          \"de\": \"Was wollt ihr essen?\",\n          \"lv\": \"Co chcete jíst?\"\n        },\n        {\n          \"de\": \"Wir essen um 12 Uhr.\",\n          \"lv\": \"Jíme ve 12 hodin.\"\n        },\n        {\n          \"de\": \"Das Essen ist fertig.\",\n          \"lv\": \"Jídlo je hotové.\"\n        },\n        {\n          \"de\": \"Das Essen schmeckt sehr gut.\",\n          \"lv\": \"Jídlo chutná velmi dobře.\"\n        },\n        {\n          \"de\": \"Das Essen schmeckt gut.\",\n          \"lv\": \"Jídlo chutná dobře.\"\n        }\n      ],\n      \"tip\": [\n        \"Essen = jíst\",\n        \"Použijte essen, když kontext odpovídá tomuto významu.\"\n      ],\n      \"important\": [\n        \"Essen je sloveso bez článku.\",\n        \"Das Essen není totéž co essen.\",\n        \"Akce: essen.\",\n        \"Podstatné jméno / jídlo: das Essen.\"\n      ],\n      \"sectionAccents\": {\n        \"explanation\": {\n          \"green\": [\n            \"essen\",\n            \"essen\"\n          ],\n          \"purple\": [\n            \"jíst\"\n          ],"],
  // 21a a1-essen-study translation
  ["\"id\": \"a1-essen-study\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jídlo • Jídlo\",", "\"id\": \"a1-essen-study\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jídlo • Stravování\","],
  // 21b a1-essen-study ex1
  ["\"id\": \"a1-essen-study\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jídlo • Stravování\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Podstatné jméno - jídlo nebo celé jídlo.\",\n        \"Das Essen znamená především: konzumovat jídlo.\",\n        \"Často popisuje: akce.\",\n        \"Das Essen v podstatě znamená: jídlo nebo jídlo.\",\n        \"Často popisuje: déšť.\",\n        \"Essen znamená jíst.\",\n        \"Das Essen může znamenat jídlo nebo jídlo obecně.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Das Essen schmeckt gut.\",\n          \"lv\": \"Jídlo chutná dobře.\"\n        },\n        {\n          \"de\": \"Was wollt ihr essen?\",\n          \"lv\": \"Co chceš jíst\"", "\"id\": \"a1-essen-study\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jídlo • Stravování\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Podstatné jméno - jídlo nebo celé jídlo.\",\n        \"Das Essen znamená především: konzumovat jídlo.\",\n        \"Často popisuje: akce.\",\n        \"Das Essen v podstatě znamená: jídlo nebo jídlo.\",\n        \"Často popisuje: déšť.\",\n        \"Essen znamená jíst.\",\n        \"Das Essen může znamenat jídlo nebo jídlo obecně.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Das Essen schmeckt gut.\",\n          \"lv\": \"Jídlo chutná dobře.\"\n        },\n        {\n          \"de\": \"Was wollt ihr essen?\",\n          \"lv\": \"Co chcete jíst?\""],
  // 21c a1-essen-study expl1
  ["\"Das Essen znamená především: konzumovat jídlo.\",", "\"Das Essen znamená především jídlo nebo celé jídlo.\","],
  // 21d a1-essen-study expl2
  ["\"id\": \"a1-essen-study\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jídlo • Stravování\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Podstatné jméno - jídlo nebo celé jídlo.\",\n        \"Das Essen znamená především jídlo nebo celé jídlo.\",\n        \"Často popisuje: akce.\",", "\"id\": \"a1-essen-study\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jídlo • Stravování\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Podstatné jméno - jídlo nebo celé jídlo.\",\n        \"Das Essen znamená především jídlo nebo celé jídlo.\",\n        \"Označuje věc, jídlo nebo celé jídlo.\","],
  // 21e a1-essen-study tip0
  ["\"Das Essen = jíst\"", "\"Das Essen = jídlo nebo celé jídlo\""],
  // 21f a1-essen-study important3
  ["\"id\": \"a1-essen-study\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jídlo • Stravování\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Podstatné jméno - jídlo nebo celé jídlo.\",\n        \"Das Essen znamená především jídlo nebo celé jídlo.\",\n        \"Označuje věc, jídlo nebo celé jídlo.\",\n        \"Das Essen v podstatě znamená: jídlo nebo jídlo.\",\n        \"Často popisuje: déšť.\",\n        \"Essen znamená jíst.\",\n        \"Das Essen může znamenat jídlo nebo jídlo obecně.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Das Essen schmeckt gut.\",\n          \"lv\": \"Jídlo chutná dobře.\"\n        },\n        {\n          \"de\": \"Was wollt ihr essen?\",\n          \"lv\": \"Co chcete jíst?\"\n        },\n        {\n          \"de\": \"Wir essen um 12 Uhr.\",\n          \"lv\": \"Jíme ve 12 hodin.\"\n        },\n        {\n          \"de\": \"Das Essen ist fertig.\",\n          \"lv\": \"Jídlo je hotové.\"\n        },\n        {\n          \"de\": \"Das Essen schmeckt sehr gut.\",\n          \"lv\": \"Jídlo chutná velmi dobře.\"\n        },\n        {\n          \"de\": \"Das Essen schmeckt gut.\",\n          \"lv\": \"Jídlo chutná dobře.\"\n        }\n      ],\n      \"tip\": [\n        \"Das Essen = jídlo nebo celé jídlo\",\n        \"Použijte das Essen, pokud kontext vyhovuje tomuto významu.\"\n      ],\n      \"important\": [\n        \"Essen je sloveso bez článku.\",\n        \"Das Essen není totéž co essen.\",\n        \"Akce: essen.\",\n        \"Případ/jídlo: das Essen.\"", "\"id\": \"a1-essen-study\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Jídlo • Stravování\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Podstatné jméno - jídlo nebo celé jídlo.\",\n        \"Das Essen znamená především jídlo nebo celé jídlo.\",\n        \"Označuje věc, jídlo nebo celé jídlo.\",\n        \"Das Essen v podstatě znamená: jídlo nebo jídlo.\",\n        \"Často popisuje: déšť.\",\n        \"Essen znamená jíst.\",\n        \"Das Essen může znamenat jídlo nebo jídlo obecně.\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Das Essen schmeckt gut.\",\n          \"lv\": \"Jídlo chutná dobře.\"\n        },\n        {\n          \"de\": \"Was wollt ihr essen?\",\n          \"lv\": \"Co chcete jíst?\"\n        },\n        {\n          \"de\": \"Wir essen um 12 Uhr.\",\n          \"lv\": \"Jíme ve 12 hodin.\"\n        },\n        {\n          \"de\": \"Das Essen ist fertig.\",\n          \"lv\": \"Jídlo je hotové.\"\n        },\n        {\n          \"de\": \"Das Essen schmeckt sehr gut.\",\n          \"lv\": \"Jídlo chutná velmi dobře.\"\n        },\n        {\n          \"de\": \"Das Essen schmeckt gut.\",\n          \"lv\": \"Jídlo chutná dobře.\"\n        }\n      ],\n      \"tip\": [\n        \"Das Essen = jídlo nebo celé jídlo\",\n        \"Použijte das Essen, pokud kontext vyhovuje tomuto významu.\"\n      ],\n      \"important\": [\n        \"Essen je sloveso bez článku.\",\n        \"Das Essen není totéž co essen.\",\n        \"Akce: essen.\",\n        \"Podstatné jméno / jídlo: das Essen.\""],
  // 22. a1-gemuese expl2
  ["\"id\": \"a1-gemuese\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Zelenina\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Zelenina obecně. Němčina nemá tvar množného čísla pro *die Gemüse.\",\n        \"Das Gemüse znamená hlavně: zelenina obecně.\",\n        \"Často popisováno: v jakémkoliv pohlaví (pouze v jednotném čísle).\"", "\"id\": \"a1-gemuese\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Zelenina\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Zelenina obecně. Němčina nemá tvar množného čísla pro *die Gemüse.\",\n        \"Das Gemüse znamená hlavně: zelenina obecně.\",\n        \"Je středního rodu a používá se pouze v jednotném čísle.\""],
  // 23. a1-obst expl2
  ["\"id\": \"a1-obst\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Ovoce\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Ovoce obecně. Němčina nemá tvar množného čísla *die Obsts.\",\n        \"Das Obst znamená hlavně: ovoce vůbec.\",\n        \"Často popisováno: v jakémkoliv pohlaví (pouze v jednotném čísle).\"", "\"id\": \"a1-obst\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Ovoce\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Ovoce obecně. Němčina nemá tvar množného čísla *die Obsts.\",\n        \"Das Obst znamená hlavně: ovoce vůbec.\",\n        \"Je středního rodu a používá se pouze v jednotném čísle.\""],
  // 24a a1-ferien ex0
  ["\"de\": \"In den Ferien fahren wir ans Meer.\",\n          \"lv\": \"O víkendech jezdíme k moři.\"", "\"de\": \"In den Ferien fahren wir ans Meer.\",\n          \"lv\": \"O prázdninách jezdíme k moři.\""],
  // 24b a1-ferien ex2
  ["\"de\": \"Was macht ihr in den Ferien?\",\n          \"lv\": \"Co děláš o prázdninách\"", "\"de\": \"Was macht ihr in den Ferien?\",\n          \"lv\": \"Co děláte o prázdninách?\""],
  // 24c a1-ferien cmp0
  ["\"word\": \"die Ferien\",\n          \"meaning\": \"Školní/studijní přestávka (pouze dsk.)\",\n          \"example\": \"In den Ferien fahren wir weg. – Jezdíme někam na víkendy.\"", "\"word\": \"die Ferien\",\n          \"meaning\": \"Školní/studijní prázdniny (pouze mn. č.)\",\n          \"example\": \"In den Ferien fahren wir weg. – O prázdninách někam odjíždíme.\""],
  // 24d a1-ferien cmp1
  ["\"word\": \"der Urlaub\",\n          \"meaning\": \"Odejít z práce (pouze všichni)\",\n          \"example\": \"Ich habe zwei Wochen Urlaub. – Mám dva týdny dovolené.\"", "\"word\": \"der Urlaub\",\n          \"meaning\": \"Dovolená z práce (pouze j. č.)\",\n          \"example\": \"Ich habe zwei Wochen Urlaub. – Mám dva týdny dovolené.\""],
  // 24e a1-ferien important0
  ["\"Ferien vždy s dativem: in den Ferien.\"", "\"Ve spojení in den Ferien je Ferien v dativu množného čísla.\""],
  // 25a a1-urlaub expl1
  ["\"Der Urlaub v podstatě znamená: volno v práci.\",", "\"Der Urlaub znamená především dovolenou nebo volno z práce.\","],
  // 25b a1-urlaub cmp0
  ["\"word\": \"der Urlaub\",\n          \"meaning\": \"Odejít z práce (pouze všichni)\",\n          \"example\": \"Mein Vater ist im Urlaub. – Můj otec je na dovolené.\"", "\"word\": \"der Urlaub\",\n          \"meaning\": \"Dovolená z práce (pouze j. č.)\",\n          \"example\": \"Mein Vater ist im Urlaub. – Můj otec je na dovolené.\""],
  // 25c a1-urlaub important3
  ["\"Dílo: der Urlaub (pouze jednotné číslo).\"", "\"Dovolená: der Urlaub (pouze jednotné číslo).\""],
  // 25d a1-urlaub accents
  ["\"der Urlabe\"", "\"der Urlaub\""],
  // 26. Staat lv
  ["\"de\": \"Staat\",\n    \"de_article\": \"der\",\n    \"de_plural\": \"die Staaten\",\n    \"lv\": \"Země\"", "\"de\": \"Staat\",\n    \"de_article\": \"der\",\n    \"de_plural\": \"die Staaten\",\n    \"lv\": \"Stát\""],
  // 27. a1-uhr ex5
  ["\"de\": \"die Uhr\",\n          \"lv\": \"Zařízení/čas na hodinách • Die Zeit\"", "\"de\": \"die Uhr\",\n          \"lv\": \"Zařízení/čas na hodinách • Čas\""],
  // 28. a1-zeit ex1
  ["\"id\": \"a1-zeit\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Čas (okamžik / časový úsek)\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Čas jako pojem – okamžik, příležitost, časový úsek.\",\n        \"Die Zeit znamená především: okamžik, příležitost.\",\n        \"Často se vyznačuje: abstraktním pojmem.\",\n        \"Die Zeit je abstraktní pojem – čas, okamžik nebo příležitost (Ich habe keine Zeit).\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Ich habe keine Zeit.\",\n          \"lv\": \"Nemám čas.\"\n        },\n        {\n          \"de\": \"Ich habe keine Zeit.\",\n          \"lv\": \"Nemám čas\"", "\"id\": \"a1-zeit\",\n      \"layout\": \"standardStudy\",\n      \"translation\": \"Čas (okamžik / časový úsek)\",\n      \"explanation\": [\n        \"Hlavní myšlenka: Čas jako pojem – okamžik, příležitost, časový úsek.\",\n        \"Die Zeit znamená především: okamžik, příležitost.\",\n        \"Často se vyznačuje: abstraktním pojmem.\",\n        \"Die Zeit je abstraktní pojem – čas, okamžik nebo příležitost (Ich habe keine Zeit).\"\n      ],\n      \"examples\": [\n        {\n          \"de\": \"Ich habe keine Zeit.\",\n          \"lv\": \"Nemám čas.\"\n        },\n        {\n          \"de\": \"Ich habe keine Zeit.\",\n          \"lv\": \"Nemám čas.\""],
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
