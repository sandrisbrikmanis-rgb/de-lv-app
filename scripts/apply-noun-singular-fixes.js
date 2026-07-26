#!/usr/bin/env node
/**
 * Section 7: Fix noun cards where the main lv translation used an Estonian
 * plural form (or an imprecise concept) instead of the correct singular
 * dictionary form. Also normalizes der Zwilling from minimalStudy to the
 * standard plain noun card structure used by all other simple noun cards.
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

function replaceInFile(relPath, replacements) {
  const filePath = path.join(root, relPath);
  let content = fs.readFileSync(filePath, "utf8");
  let count = 0;
  for (const [from, to] of replacements) {
    if (!content.includes(from)) {
      throw new Error(`Pattern not found in ${relPath}: ${JSON.stringify(from).slice(0, 120)}`);
    }
    const parts = content.split(from);
    if (parts.length !== 2) {
      throw new Error(`Pattern not unique in ${relPath}: ${JSON.stringify(from).slice(0, 120)} (${parts.length - 1} matches)`);
    }
    content = parts.join(to);
    count += 1;
  }
  fs.writeFileSync(filePath, content);
  return count;
}

let total = 0;

total += replaceInFile("data/et/a1.js", []);

total += replaceInFile("data/et/a2.js", [
  ['"de": "Traube",\n    "de_article": "die",\n    "de_plural": "die Trauben",\n    "lv": "viinamarjad",', '"de": "Traube",\n    "de_article": "die",\n    "de_plural": "die Trauben",\n    "lv": "viinamari",'],
  [
    '"de": "Zwilling",\n    "de_article": "der",\n    "de_plural": "die Zwillinge",\n    "lv": "kaksikud",\n    "level": "A2",\n    "study": {\n      "id": "a2-zwilling",\n      "layout": "minimalStudy",\n      "translation": "kaksikud",\n      "accent": "blue",\n      "variants": [\n        {\n          "article": "der",\n          "de": "Zwilling",\n          "plural": "die Zwillinge"\n        }\n      ]\n    }\n  },',
    '"de": "Zwilling",\n    "de_article": "der",\n    "de_plural": "die Zwillinge",\n    "lv": "kaksik",\n    "level": "A2"\n  },',
  ],
]);

total += replaceInFile("data/et/b1.js", [
  ['"de": "Droge",\n    "de_article": "die",\n    "de_plural": "die Drogen",\n    "lv": "narkootikumid",', '"de": "Droge",\n    "de_article": "die",\n    "de_plural": "die Drogen",\n    "lv": "narkootikum",'],
  ['"de": "Erwartung",\n    "de_article": "die",\n    "de_plural": "die Erwartungen",\n    "lv": "ootused",', '"de": "Erwartung",\n    "de_article": "die",\n    "de_plural": "die Erwartungen",\n    "lv": "ootus",'],
  ['"de": "Fähigkeit",\n    "de_article": "die",\n    "de_plural": "die Fähigkeiten",\n    "lv": "võimed",', '"de": "Fähigkeit",\n    "de_article": "die",\n    "de_plural": "die Fähigkeiten",\n    "lv": "võime",'],
  ['"de": "Jubel",\n    "de_article": "der",\n    "lv": "hõisked",', '"de": "Jubel",\n    "de_article": "der",\n    "lv": "juubeldus",'],
  ['"de": "Kontaktlinse",\n    "de_article": "die",\n    "de_plural": "die Kontaktlinsen",\n    "lv": "kontaktläätsed",', '"de": "Kontaktlinse",\n    "de_article": "die",\n    "de_plural": "die Kontaktlinsen",\n    "lv": "kontaktlääts",'],
  ['"de": "Krampf",\n    "de_article": "der",\n    "de_plural": "die Krämpfe",\n    "lv": "krambid",', '"de": "Krampf",\n    "de_article": "der",\n    "de_plural": "die Krämpfe",\n    "lv": "kramp",'],
  ['"de": "Plage",\n    "de_article": "die",\n    "de_plural": "die Plagen",\n    "lv": "piinad",', '"de": "Plage",\n    "de_article": "die",\n    "de_plural": "die Plagen",\n    "lv": "nuhtlus",'],
  ['"de": "Qual",\n    "de_article": "die",\n    "de_plural": "die Qualen",\n    "lv": "piinad",', '"de": "Qual",\n    "de_article": "die",\n    "de_plural": "die Qualen",\n    "lv": "piin",'],
  ['"de": "Windel",\n    "de_article": "die",\n    "de_plural": "die Windeln",\n    "lv": "mähkmed",', '"de": "Windel",\n    "de_article": "die",\n    "de_plural": "die Windeln",\n    "lv": "mähe",'],
]);

total += replaceInFile("data/et/b2.js", [
  ['"de": "Debatte",\n    "de_article": "die",\n    "de_plural": "die Debatten",\n    "lv": "debatid",', '"de": "Debatte",\n    "de_article": "die",\n    "de_plural": "die Debatten",\n    "lv": "debatt",'],
]);

total += replaceInFile("data/et/c1.js", [
  ['"de": "Feuerwerkskörper",\n    "de_article": "der",\n    "de_plural": "die Feuerwerkskörper",\n    "lv": "ilutulestikuraketid",', '"de": "Feuerwerkskörper",\n    "de_article": "der",\n    "de_plural": "die Feuerwerkskörper",\n    "lv": "ilutulestikurakett",'],
]);

total += replaceInFile("data/et/c2.js", [
  ['"de": "Gedächtnisstörung",\n    "de_article": "die",\n    "de_plural": "die Gedächtnisstörungen",\n    "lv": "mäluhäired",', '"de": "Gedächtnisstörung",\n    "de_article": "die",\n    "de_plural": "die Gedächtnisstörungen",\n    "lv": "mäluhäire",'],
  ['"de": "Steuererleichterung",\n    "de_article": "die",\n    "de_plural": "die Steuererleichterungen",\n    "lv": "maksusoodustused",', '"de": "Steuererleichterung",\n    "de_article": "die",\n    "de_plural": "die Steuererleichterungen",\n    "lv": "maksusoodustus",'],
]);

console.log(`Applied ${total} noun singular/precision fixes.`);
