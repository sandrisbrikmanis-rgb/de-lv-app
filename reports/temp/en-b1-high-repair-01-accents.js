#!/usr/bin/env node
/** SectionAccents cleanup pass — 25 HIGH repair cards only. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function serializeB1(words) {
  const lines = ["const B1_WORDS = ["];
  for (const w of words) {
    lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  }
  lines.push("];\n\nwindow.B1_WORDS = B1_WORDS;\n");
  return lines.join("\n");
}

function findStudy(words, id) {
  return words.find((w) => w.study?.id === id).study;
}

const words = load("data/en/b1.js");

// b1-berichten
const ber = findStudy(words, "b1-berichten");
ber.sectionAccents.tip.leftBlocks[0].text.purple = ["formally"];
ber.sectionAccents.important.purple = ["über", "accusative", "von", "dative"];

// b1-blase
const bla = findStudy(words, "b1-blase");
bla.sectionAccents.tip.leftBlocks[0].text.purple = ["blister", "bladder", "Blasen"];

// b1-entlassen
const ent = findStudy(words, "b1-entlassen");
ent.sectionAccents.tip.leftBlocks[0].text.purple = ["Employer", "Hospital", "Prison"];

// b1-hort
const hor = findStudy(words, "b1-hort");
hor.sectionAccents.explanation.purple = ["after-school care facility", "school-aged children"];

// b1-jagen
const jag = findStudy(words, "b1-jagen");
jag.sectionAccents.tip.leftBlocks[0].text.purple = ["hunt", "chase"];
jag.sectionAccents.important.purple = ["hunt", "chase"];

// b1-kader
const kad = findStudy(words, "b1-kader");
kad.sectionAccents.examples[3].lv.purple = ["squad"];

// b1-kern
const ker = findStudy(words, "b1-kern");
ker.sectionAccents.tip.leftBlocks[0].text.purple = ["middle", "essence", "fruit"];
ker.sectionAccents.important.purple = ["seed", "pit", "core"];

// b1-kommando
const kom = findStudy(words, "b1-kommando");
kom.sectionAccents.comparison[0].example.purple = "team";
kom.sectionAccents.comparison[2].example.purple = "team";

// b1-kurs
const kur = findStudy(words, "b1-kurs");
kur.sectionAccents.comparison[0].meaning.purple = "Course";
kur.sectionAccents.comparison[0].example.purple = "course";
kur.sectionAccents.comparison[1].meaning.purple = "Direction";
kur.sectionAccents.comparison[1].example.purple = "direction";
kur.sectionAccents.comparison[2].example.purple = "hour";
kur.sectionAccents.tip.purple = ["Lessons", "exchange rate"];

// b1-kastanie
const kas = findStudy(words, "b1-kastanie");
kas.sectionAccents.comparison[0].example.purple = "Chestnut";
kas.sectionAccents.comparison[2].example.purple = "nut";

// b1-rasen
const ras = findStudy(words, "b1-rasen");
ras.sectionAccents.examples[2].lv.red = "rages";
ras.sectionAccents.comparison[0].meaning.purple = "rage";
ras.sectionAccents.tip.red = "extremely fast";

// b1-schale
const sch = findStudy(words, "b1-schale");
sch.sectionAccents.comparison[0].meaning.purple = "Rind";

// b1-schlag
const slg = findStudy(words, "b1-schlag");
slg.sectionAccents.examples[1].lv.red = "lightning";
slg.sectionAccents.comparison[2].meaning.purple = "Lightning";
slg.sectionAccents.important.red = "context";

// b1-senken
const sen = findStudy(words, "b1-senken");
sen.sectionAccents.examples[1].lv.red = "bows";
sen.sectionAccents.comparison[2].meaning.purple = "Lift";

// b1-stellung
const stl = findStudy(words, "b1-stellung");
stl.sectionAccents.comparison[1].meaning.purple = "state";
stl.sectionAccents.comparison[2].meaning.purple = "Workplace";

// b1-tank
const tan = findStudy(words, "b1-tank");
tan.sectionAccents.comparison[0].meaning.purple = "Tank";
tan.sectionAccents.comparison[1].meaning.purple = "Vessel";
tan.sectionAccents.comparison[2].meaning.purple = "tank";
tan.sectionAccents.tip.leftBlocks[0].text.purple = ["cars", "Panzer"];

// b1-teilnehmen
const tei = findStudy(words, "b1-teilnehmen");
tei.tip.leftBlocks[0].text = "Participate in something: teilnehmen an + dative.";
tei.sectionAccents.comparison[1].meaning.purple = "informally";
tei.sectionAccents.tip.blue = "teilnehmen";
tei.sectionAccents.tip.red = "an";

// b1-verlegen
const ver = findStudy(words, "b1-verlegen");
ver.sectionAccents.comparison[0].meaning.purple = "Transfer";
ver.sectionAccents.comparison[1].meaning.purple = "Postpone";

const out = serializeB1(words);
fs.writeFileSync(path.join(ROOT, "data/en/b1.js"), out);
fs.writeFileSync(path.join(ROOT, "www/data/en/b1.js"), out);
console.log("SectionAccents cleanup applied.");
