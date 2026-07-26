#!/usr/bin/env node
/**
 * Apply approved ET-DE audit translation fixes (main lv fields only).
 * StandardStudy blocks are applied separately in data files.
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
      throw new Error(`Pattern not found in ${relPath}: ${JSON.stringify(from).slice(0, 100)}`);
    }
    const parts = content.split(from);
    if (parts.length !== 2) {
      throw new Error(`Pattern not unique in ${relPath}: ${JSON.stringify(from).slice(0, 100)} (${parts.length - 1} matches)`);
    }
    content = parts.join(to);
    count += 1;
  }
  fs.writeFileSync(filePath, content);
  return count;
}

let total = 0;

total += replaceInFile("data/et/a1.js", [
  ['"de": "Gras",\n    "de_article": "das",\n    "de_plural": "die Gräser",\n    "lv": "rohi • saal",', '"de": "Gras",\n    "de_article": "das",\n    "de_plural": "die Gräser",\n    "lv": "rohi",'],
  ['"de": "müssen",\n    "lv": "vajama",', '"de": "müssen",\n    "lv": "pidama",'],
  ['"translation": "vajama",\n      "explanation": [\n        "Põhiidee: müssen tähendab', '"translation": "pidama",\n      "explanation": [\n        "Põhiidee: müssen tähendab'],
  ['"meaning": "vajama / tegema pidama",', '"meaning": "pidama",'],
  ['"de": "Essen",\n    "de_article": "das",\n    "lv": "toit • eine",', '"de": "Essen",\n    "de_article": "das",\n    "lv": "toit",'],
  ['"id": "a1-essen-study",\n      "layout": "standardStudy",\n      "translation": "toit • eine",', '"id": "a1-essen-study",\n      "layout": "standardStudy",\n      "translation": "toit",'],
]);

total += replaceInFile("data/et/a2.js", [
  ['"de": "drehen",\n    "lv": "lõikama",', '"de": "drehen",\n    "lv": "keerama • pöörama",'],
  ['"id": "a2-drehen",\n      "layout": "standardStudy",\n      "translation": "lõikama",', '"id": "a2-drehen",\n      "layout": "standardStudy",\n      "translation": "keerama • pöörama",'],
  ['"de": "dünn",\n    "lv": "plaan",', '"de": "dünn",\n    "lv": "õhuke",'],
  ['"id": "a2-dünn",\n      "layout": "standardStudy",\n      "translation": "plaan",', '"id": "a2-dünn",\n      "layout": "standardStudy",\n      "translation": "õhuke",'],
  ['"plaan",\n              "peenike",', '"õhuke",\n              "peenike",'],
  ['"de": "Strumpf",\n    "de_article": "der",\n    "de_plural": "die Strümpfe",\n    "lv": "sokk",', '"de": "Strumpf",\n    "de_article": "der",\n    "de_plural": "die Strümpfe",\n    "lv": "sukk",'],
  ['"de": "Tanne",\n    "de_article": "die",\n    "de_plural": "die Tannen",\n    "lv": "kuusk",', '"de": "Tanne",\n    "de_article": "die",\n    "de_plural": "die Tannen",\n    "lv": "nulg",'],
  ['"de": "wahr",\n    "lv": "siiras",', '"de": "wahr",\n    "lv": "tõsi • tõene",'],
  ['"de": "Zuhause",\n    "de_article": "das",\n    "de_plural": "die Zuhause",\n    "lv": "maja",', '"de": "Zuhause",\n    "de_article": "das",\n    "de_plural": "die Zuhause",\n    "lv": "kodu",'],
  ['"de": "Rock",\n    "de_article": "der",\n    "de_plural": "die Röcke",\n    "lv": "seelik • jakk",', '"de": "Rock",\n    "de_article": "der",\n    "de_plural": "die Röcke",\n    "lv": "seelik",'],
  ['"de": "Job",\n    "de_article": "der",\n    "de_plural": "die Jobs",\n    "lv": "ajutine töö",', '"de": "Job",\n    "de_article": "der",\n    "de_plural": "die Jobs",\n    "lv": "darbs",'],
]);

total += replaceInFile("data/et/b1.js", [
  ['"de": "Anruf",\n    "de_article": "der",\n    "de_plural": "die Anrufe",\n    "lv": "kell",', '"de": "Anruf",\n    "de_article": "der",\n    "de_plural": "die Anrufe",\n    "lv": "kõne",'],
  ['"de": "Aufschnitt",\n    "de_article": "der",\n    "lv": "külmad road",', '"de": "Aufschnitt",\n    "de_article": "der",\n    "lv": "külmad lihalõigud",'],
  ['"de": "betragen",\n    "lv": "saavutama",', '"de": "betragen",\n    "lv": "ulatuma • moodustama",'],
  ['"de": "Burg",\n    "de_article": "die",\n    "de_plural": "die Burgen",\n    "lv": "palee",', '"de": "Burg",\n    "de_article": "die",\n    "de_plural": "die Burgen",\n    "lv": "kindlus • loss",'],
  ['"de": "sich eignen",\n    "lv": "kihla vedama",', '"de": "sich eignen",\n    "lv": "sobima",'],
  ['"de": "Kampf",\n    "de_article": "der",\n    "de_plural": "die Kämpfe",\n    "lv": "maadlus",', '"de": "Kampf",\n    "de_article": "der",\n    "de_plural": "die Kämpfe",\n    "lv": "võitlus",'],
  ['"de": "Kolonne",\n    "de_article": "die",\n    "de_plural": "die Kolonnen",\n    "lv": "sammas",', '"de": "Kolonne",\n    "de_article": "die",\n    "de_plural": "die Kolonnen",\n    "lv": "kolonn",'],
  ['"de": "kulturell",\n    "lv": "kultuurne",', '"de": "kulturell",\n    "lv": "kultuuriline",'],
  ['"de": "Lücke",\n    "de_article": "die",\n    "de_plural": "die Lücken",\n    "lv": "sälk",', '"de": "Lücke",\n    "de_article": "die",\n    "de_plural": "die Lücken",\n    "lv": "lünk",'],
  ['"de": "Nachteil",\n    "de_article": "der",\n    "de_plural": "die Nachteile",\n    "lv": "kaotus",', '"de": "Nachteil",\n    "de_article": "der",\n    "de_plural": "die Nachteile",\n    "lv": "puudus • miinus",'],
  ['"de": "Neuheit",\n    "de_article": "die",\n    "de_plural": "die Neuheiten",\n    "lv": "uudis",', '"de": "Neuheit",\n    "de_article": "die",\n    "de_plural": "die Neuheiten",\n    "lv": "uudsus • uuendus",'],
  ['"de": "ökonomisch",\n    "lv": "ökonoomne",', '"de": "ökonomisch",\n    "lv": "majanduslik",'],
]);

total += replaceInFile("data/et/b2.js", [
  ['"de": "Direktion",\n    "de_article": "die",\n    "de_plural": "die Direktionen",\n    "lv": "kaassõna rektsioon",', '"de": "Direktion",\n    "de_article": "die",\n    "de_plural": "die Direktionen",\n    "lv": "juhatus",'],
  ['"de": "Getriebe",\n    "de_article": "das",\n    "de_plural": "die Getriebe",\n    "lv": "mootor",', '"de": "Getriebe",\n    "de_article": "das",\n    "de_plural": "die Getriebe",\n    "lv": "käigukast",'],
  ['"de": "Grundriss",\n    "de_article": "der",\n    "de_plural": "die Grundrisse",\n    "lv": "õhuke",', '"de": "Grundriss",\n    "de_article": "der",\n    "de_plural": "die Grundrisse",\n    "lv": "põhiplaan",'],
  ['"de": "Nenner",\n    "de_article": "der",\n    "de_plural": "die Nenner",\n    "lv": "hüüdja",', '"de": "Nenner",\n    "de_article": "der",\n    "de_plural": "die Nenner",\n    "lv": "nimetaja",'],
  ['"de": "Rain",\n    "de_article": "der",\n    "de_plural": "die Raine",\n    "lv": "eht",', '"de": "Rain",\n    "de_article": "der",\n    "de_plural": "die Raine",\n    "lv": "põlluveer",'],
  ['"de": "schmollen",\n    "lv": "möllama",', '"de": "schmollen",\n    "lv": "mossitama",'],
  ['"de": "Wade",\n    "de_article": "die",\n    "de_plural": "die Waden",\n    "lv": "mari (kalamari)",', '"de": "Wade",\n    "de_article": "die",\n    "de_plural": "die Waden",\n    "lv": "säär",'],
]);

total += replaceInFile("data/et/c1.js", [
  ['"de": "Kinderschänder",\n    "de_article": "der",\n    "de_plural": "die Kinderschänder",\n    "lv": "pedofiil",', '"de": "Kinderschänder",\n    "de_article": "der",\n    "de_plural": "die Kinderschänder",\n    "lv": "lapse väärkohtleja",'],
  ['"de": "Gepäckträger",\n    "de_article": "der",\n    "de_plural": "die Gepäckträger",\n    "lv": "pagasiruum",', '"de": "Gepäckträger",\n    "de_article": "der",\n    "de_plural": "die Gepäckträger",\n    "lv": "pagasiraam",'],
  ['"de": "Dachgepäckträger",\n    "de_article": "der",\n    "de_plural": "die Dachgepäckträger",\n    "lv": "katusepagasiruum",', '"de": "Dachgepäckträger",\n    "de_article": "der",\n    "de_plural": "die Dachgepäckträger",\n    "lv": "katuse pagasiraam",'],
]);

total += replaceInFile("data/et/c2.js", [
  ['"de": "Geistesgegenwart",\n    "de_article": "die",\n    "lv": "kohaloleku vaim",', '"de": "Geistesgegenwart",\n    "de_article": "die",\n    "lv": "vaimne kohalolek",'],
]);

console.log(`Applied ${total} main translation replacements.`);
