#!/usr/bin/env node
/**
 * Apply approved EST-DE audit section 3 fixes only.
 * Usage: node scripts/apply-est-audit-section3-fixes.js
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
      throw new Error(`Pattern not found in ${relPath}: ${JSON.stringify(from).slice(0, 80)}`);
    }
    const parts = content.split(from);
    if (parts.length !== 2) {
      throw new Error(`Pattern not unique in ${relPath}: ${JSON.stringify(from).slice(0, 80)} (${parts.length - 1} matches)`);
    }
    content = parts.join(to);
    count += 1;
  }
  fs.writeFileSync(filePath, content);
  return count;
}

let total = 0;
total += replaceInFile("data/et/b2.js", [
    ['"de": "Flaum",\n    "de_article": "der",\n    "de_plural": null,\n    "lv": "udusulg • ehe",', '"de": "Flaum",\n    "de_article": "der",\n    "de_plural": null,\n    "lv": "udusulg • ebe",'],
    ['"de": "Gipsverband",\n    "de_article": "der",\n    "de_plural": "die Gipsverbände",\n    "lv": "kipssideme",', '"de": "Gipsverband",\n    "de_article": "der",\n    "de_plural": "die Gipsverbände",\n    "lv": "gipsplaastr",'],
    ['"de": "gleichmütig",\n    "lv": "tasakaalukas • külmaverelinie",', '"de": "gleichmütig",\n    "lv": "tasakaalukas • rahulik",'],
    ['"de": "Hitzkopf",\n    "de_article": "der",\n    "de_plural": "die Hitzköpfe",\n    "lv": "kuumaverelie",', '"de": "Hitzkopf",\n    "de_article": "der",\n    "de_plural": "die Hitzköpfe",\n    "lv": "tulipea",'],
    ['"de": "irrsinnig",\n    "lv": "hulluv • nõdrameelne",', '"de": "irrsinnig",\n    "lv": "hullumeelne • nõdrameelne",'],
    ['"de": "Ölgewinnung",\n    "de_article": "die",\n    "de_plural": "die Ölgewinnungen",\n    "lv": "nafta tootmine",', '"de": "Ölgewinnung",\n    "de_article": "die",\n    "de_plural": "die Ölgewinnungen",\n    "lv": "naftatootmine",'],
    ['"de": "Richtfest",\n    "de_article": "das",\n    "de_plural": "die Richtfeste",\n    "lv": "harjatõsta pidu",', '"de": "Richtfest",\n    "de_article": "das",\n    "de_plural": "die Richtfeste",\n    "lv": "sarikapidu",'],
    ['"de": "Schmerzensgeld",\n    "de_article": "das",\n    "de_plural": "die Schmerzensgelder",\n    "lv": "valurahaka",', '"de": "Schmerzensgeld",\n    "de_article": "das",\n    "de_plural": "die Schmerzensgelder",\n    "lv": "valuraha",'],
    ['"de": "schrill",\n    "lv": "kimedа • lõikav",', '"de": "schrill",\n    "lv": "kimeda • lõikav",'],
    ['"de": "Union",\n    "de_article": "die",\n    "de_plural": "die Unionen",\n    "lv": "liit • uniooni",', '"de": "Union",\n    "de_article": "die",\n    "de_plural": "die Unionen",\n    "lv": "liit • unioon",'],
    ['"de": "Vorliebe",\n    "de_article": "die",\n    "de_plural": "die Vorlieben",\n    "lv": "eriline meeldivus",', '"de": "Vorliebe",\n    "de_article": "die",\n    "de_plural": "die Vorlieben",\n    "lv": "eelistus",'],
    ['"de": "Zusage",\n    "de_article": "die",\n    "de_plural": "die Zusagen",\n    "lv": "nõustuv vastus",', '"de": "Zusage",\n    "de_article": "die",\n    "de_plural": "die Zusagen",\n    "lv": "jaatav vastus",'],
  ]);
total += replaceInFile("data/et/c1.js", [
    ['"de": "beabsichtigen + zu + nenoteiksme",', '"de": "beabsichtigen + zu + Infinitiv",'],
    ['"de": "Leistungssport",\n    "de_article": "der",\n    "lv": "profispordi",', '"de": "Leistungssport",\n    "de_article": "der",\n    "lv": "tippspord",'],
    ['"de": "Segelflugsport",\n    "de_article": "der",\n    "lv": "purilennuspordi",', '"de": "Segelflugsport",\n    "de_article": "der",\n    "lv": "purilennusport",'],
  ]);
total += replaceInFile("data/et/c2.js", [
    ['"de": "Empfehlungsschreiben",\n    "de_article": "das",\n    "de_plural": "die Empfehlungsschreiben",\n    "lv": "kirjalik soovitus",', '"de": "Empfehlungsschreiben",\n    "de_article": "das",\n    "de_plural": "die Empfehlungsschreiben",\n    "lv": "soovituskiri",'],
    ['"de": "Selbstverteidigung",\n    "de_article": "die",\n    "de_plural": "die Selbstverteidigungen",\n    "lv": "enesekaitsevõtete kogum",', '"de": "Selbstverteidigung",\n    "de_article": "die",\n    "de_plural": "die Selbstverteidigungen",\n    "lv": "enesekaitse",'],
  ]);
total += replaceInFile("data/et/dialogueIdMap.js", [
  ['"lv": "Kõige rohkem meeldib mulle musta kohv."', '"lv": "Kõige rohkem meeldib mulle must kohv."'],
]);

console.log(`Applied ${total} replacements.`);
