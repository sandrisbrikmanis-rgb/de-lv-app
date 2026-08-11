#!/usr/bin/env node
/**
 * Mechanical CS-DE A1 batch 2 fixes (index 50-99). Owner-specified PIRMS→PĒC only.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const FILES = [
  path.join(ROOT, "data/cs/a1.js"),
  path.join(ROOT, "www/data/cs/a1.js"),
];

const REPLACEMENTS = [
  // 1. a1-aus
  ['"id": "a1-aus",\n      "layout": "standardStudy",\n      "translation": "Od • Ven"', '"id": "a1-aus",\n      "layout": "standardStudy",\n      "translation": "Z • Zevnitř"'],
  ['"de": "Ich komme aus Deutschland.",\n          "lv": "Jsem z německa."', '"de": "Ich komme aus Deutschland.",\n          "lv": "Jsem z Německa."'],
  ['"word": "aus",\n          "meaning": "Zevnitř, zevnitř"', '"word": "aus",\n          "meaning": "Zevnitř • z vnitřku"'],
  // 2. a1-aufs
  ['"id": "a1-aufs",\n      "layout": "standardStudy",\n      "translation": "Kam • Na • Kam?"', '"id": "a1-aufs",\n      "layout": "standardStudy",\n      "translation": "Na (auf das)"'],
  ['"Plná forma: auf das (kde?)."', '"Plná forma: „auf das“; vyjadřuje směr a odpovídá na otázku „kam?“."'],
  ['"meaning": "Na konkrétní případ (Akk.)",\n          "example": "aufs Dach – Na střeše"', '"meaning": "Na konkrétní věc (4. pád)",\n          "example": "aufs Dach – Na střechu"'],
  ['"example": "auf den Tisch – Na stole"', '"example": "auf den Tisch – Na stůl"'],
  ['"example": "an die Wand – U zdi"', '"example": "an die Wand – Na zeď"'],
  ['"example": "ins Zimmer – V místnosti"', '"example": "ins Zimmer – Do místnosti"'],
  ['"de": "Komm schnell aufs Boot!",\n          "lv": "Pojďte rychle na loď!"', '"de": "Komm schnell aufs Boot!",\n          "lv": "Pojď rychle na loď!"'],
  ['"de": "Er springt aufs Pferd.",\n          "lv": "Nasedne na koně."', '"de": "Er springt aufs Pferd.",\n          "lv": "Vyskočí na koně."'],
  ['"Aufs = auf das, pouze s podstatným jménem libovolného rodu, kde? ve skloňování."', '"„Aufs“ = „auf das“ a používá se pouze před podstatnými jmény středního rodu. Vyjadřuje směr a odpovídá na otázku „kam?“."'],
  ['"Nezaměňujte s (na zdi) nebo ins (uvnitř místnosti)."', '"Nezaměňujte „aufs“ s „an“ (na zeď) nebo s „ins“ (do místnosti)."'],
  // 3. a1-baden
  ['"id": "a1-baden",\n      "layout": "standardStudy",\n      "translation": "Plavat"', '"id": "a1-baden",\n      "layout": "standardStudy",\n      "translation": "Koupat se"'],
  ['"de": "Ich gehe baden.",\n          "lv": "Chodím plavat"', '"de": "Ich gehe baden.",\n          "lv": "Chodím se koupat"'],
  ['"word": "baden",\n          "meaning": "Plavat / být ve vodě / umýt se"', '"word": "baden",\n          "meaning": "Koupat se / být ve vodě / mýt se"'],
  // 4-17 simple + bei + bis + bitte - use unique context strings
];

// Additional unique-context replacements applied per file
const UNIQUE = [
  // Balkon index 70
  ['"de": "Balkon",\n    "de_article": "der",\n    "de_plural": "die Balkone",\n    "lv": "Balkón"', '"de": "Balkon",\n    "de_article": "der",\n    "de_plural": "die Balkone",\n    "lv": "Balkon"'],
  ['"de": "Bauch",\n    "de_article": "der",\n    "de_plural": "die Bäuche",\n    "lv": "Žaludek"', '"de": "Bauch",\n    "de_article": "der",\n    "de_plural": "die Bäuche",\n    "lv": "Břicho"'],
  ['"de": "bedeuten",\n    "lv": "Střední"', '"de": "bedeuten",\n    "lv": "Znamenat"'],
  ['"id": "a1-bei",\n      "layout": "standardStudy",\n      "translation": "Na"', '"id": "a1-bei",\n      "layout": "standardStudy",\n      "translation": "U • Při"'],
  ['"de": "Ich bin bei meinem Freund.",\n          "lv": "Jsem v domě svého přítele."', '"de": "Ich bin bei meinem Freund.",\n          "lv": "Jsem u svého přítele."'],
  ['"meaning": "U stěny, okraje, břehu, okraje hladiny"', '"meaning": "U stěny, okraje nebo břehu • Na okraji hladiny"'],
  ['"word": "zu",\n          "meaning": "Kdo jde (směr)"', '"word": "zu",\n          "meaning": "Ke komu se jde (směr)"'],
  ['"de": "beide",\n    "lv": "Obě"', '"de": "beide",\n    "lv": "Oba • Obě"'],
  ['"de": "bekommen",\n    "lv": "Přijímat"', '"de": "bekommen",\n    "lv": "Dostat"'],
  ['"de": "benutzen",\n    "lv": "Použití"', '"de": "benutzen",\n    "lv": "Používat"'],
  ['"de": "besuchen",\n    "lv": "Zúčastnit se • Navštívit"', '"de": "besuchen",\n    "lv": "Navštívit"'],
  ['"id": "a1-bis",\n      "layout": "standardStudy",\n      "translation": "Až"', '"id": "a1-bis",\n      "layout": "standardStudy",\n      "translation": "Do • Až"'],
  ['"word": "bis ... zu"', '"word": "bis zu"'],
  ['"word": "bis dass",\n          "meaning": "Až",\n          "example": "Ich warte, bis dass du kommst. – Čekám, až přijdeš."', '"word": "bis jetzt",\n          "meaning": "Dosud • Až dosud",\n          "example": "Ich warte, bis dass du kommst. – Čekám, až přijdeš."'],
  ['"de": "bitten",\n    "lv": "Zeptat se"', '"de": "bitten",\n    "lv": "Požádat"'],
  ['"de": "Blatt",\n    "de_article": "das",\n    "de_plural": "die Blätter",\n    "lv": "Strana"', '"de": "Blatt",\n    "de_article": "das",\n    "de_plural": "die Blätter",\n    "lv": "List • Stránka"'],
  // a1-bitte
  ['"id": "a1-bitte",\n      "layout": "standardStudy",\n      "translation": "Prosím",\n      "explanation": [\n        "Hlavní myšlenka: Zdvořilé slovo s malými písmeny. Byl jsem zdvořilý - prosím."', '"id": "a1-bitte",\n      "layout": "standardStudy",\n      "translation": "Prosím",\n      "explanation": [\n        "Bitte s malým písmenem je zdvořilostní slovo znamenající „prosím“. Die Bitte s velkým písmenem je podstatné jméno a znamená „prosba“ nebo „žádost“."'],
  ['"de": "Bitte schön!",\n          "lv": "Prosím!"\n        },\n        {\n          "de": "Bitte schön!",\n          "lv": "Prosím!"\n        },\n        {\n          "de": "Eine Tasse Kaffee, bitte.",\n          "lv": "Jeden šálek kávy, prosím."', '"de": "Bitte schön!",\n          "lv": "Jeden šálek kávy, prosím."\n        },\n        {\n          "de": "Bitte schön!",\n          "lv": "Prosím, pojď dál."\n        },\n        {\n          "de": "Eine Tasse Kaffee, bitte.",\n          "lv": "Prosím!"'],
  ['"Zdvořilost malými písmeny. Byl jsem zdvořilý - prosím."', '"Malé bitte je zdvořilostní slovo a znamená „prosím“."'],
  // a1-bitte-study
  ['"id": "a1-bitte-study",\n      "layout": "standardStudy",\n      "translation": "Žádost",\n      "explanation": [\n        "Hlavní myšlenka: Podstatné jméno se členem zemřít a velkým písmenem. Konkrétní požadavek nebo požadavek."', '"id": "a1-bitte-study",\n      "layout": "standardStudy",\n      "translation": "Žádost",\n      "explanation": [\n        "Die Bitte je podstatné jméno ženského rodu se členem die a znamená prosbu nebo žádost. Množné číslo je die Bitten."'],
  ['"de": "Ich habe eine Bitte.",\n          "lv": "Mám jednu prosbu."\n        },\n        {\n          "de": "Bitte schön!",\n          "lv": "Prosím!"\n        },\n        {\n          "de": "Eine Tasse Kaffee, bitte.",\n          "lv": "Jeden šálek kávy, prosím."', '"de": "Ich habe eine Bitte.",\n          "lv": "Mám jednu prosbu."\n        },\n        {\n          "de": "Bitte schön!",\n          "lv": "Plní mou prosbu."\n        },\n        {\n          "de": "Eine Tasse Kaffee, bitte.",\n          "lv": "Má dvě prosby."'],
  ['"Podstatné jméno s členem zemřít a velké písmeno. Konkrétní požadavek nebo požadavek."', '"Die Bitte je podstatné jméno se členem die a velkým písmenem. Znamená prosbu nebo žádost."'],
];

const ALL = [...REPLACEMENTS, ...UNIQUE];

function main() {
  const mismatches = [];
  let applied = 0;
  for (const file of FILES) {
    let content = fs.readFileSync(file, "utf8");
    for (const [before, after] of ALL) {
      if (!content.includes(before)) {
        mismatches.push({ file, before: before.slice(0, 80) });
        continue;
      }
      if (content.includes(after) && !content.includes(before)) continue;
      const count = content.split(before).length - 1;
      if (count !== 1) {
        mismatches.push({ file, before: before.slice(0, 80), count });
        continue;
      }
      content = content.replace(before, after);
      applied++;
    }
    fs.writeFileSync(file, content);
  }
  const uniqueApplied = ALL.length - mismatches.length;
  console.log(JSON.stringify({ appliedChecks: uniqueApplied, mismatches }, null, 2));
  if (mismatches.length) process.exit(1);
}

main();
