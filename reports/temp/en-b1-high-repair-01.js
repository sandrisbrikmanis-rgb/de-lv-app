#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #1 — 25 owner-approved cards (deterministic).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

const CARD_IDS = [
  "b1-abhängen",
  "b1-abschnitt",
  "b1-antrag",
  "b1-berichten",
  "b1-blase",
  "b1-bloß",
  "b1-entlassen",
  "b1-fördern",
  "b1-handeln",
  "b1-hort",
  "b1-jagen",
  "b1-kader",
  "b1-kern",
  "b1-kommando",
  "b1-kurs",
  "b1-kastanie",
  "b1-rasen",
  "b1-schale",
  "b1-schlag",
  "b1-senken",
  "b1-sich-sorgen",
  "b1-stellung",
  "b1-tank",
  "b1-teilnehmen",
  "b1-verlegen",
];

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
  const e = words.find((w) => w.study?.id === id);
  if (!e) throw new Error(`Missing card ${id}`);
  return e.study;
}

function applyRepairs() {
  const words = load("data/en/b1.js");
  const log = [];

  function set(study, path, value) {
    log.push({ cardId: study.id, field: path, value });
    const parts = path.split(".");
    let obj = study;
    for (let i = 0; i < parts.length - 1; i++) {
      const p = parts[i];
      const m = p.match(/^(\w+)\[(\d+)\]$/);
      if (m) obj = obj[m[1]][Number(m[2])];
      else obj = obj[p];
    }
    const last = parts[parts.length - 1];
    const lm = last.match(/^(\w+)\[(\d+)\]$/);
    if (lm) obj[lm[1]][Number(lm[2])] = value;
    else obj[last] = value;
  }

  // 01 b1-abhängen
  const ab = findStudy(words, "b1-abhängen");
  ab.translation = "To depend / to be dependent";
  ab.important.text =
    "abhängen von means to depend on or be dependent on someone or something; it should not be translated literally as “to hang”.";
  ab.sectionAccents.examples[2].lv.purple = ["take", "off"];

  // 02 b1-abschnitt
  const abs = findStudy(words, "b1-abschnitt");
  abs.important.text =
    "der Abschnitt usually means a section or part of a larger text, document, route, or period.";
  abs.sectionAccents.important.purple = ["Abschnitt"];

  // 03 b1-antrag
  const ant = findStudy(words, "b1-antrag");
  ant.important.text =
    "For a job application, German normally uses die Bewerbung. der Antrag is an application or formal request, especially to an authority or institution.";
  ant.sectionAccents.examples[0].lv.purple = ["I'm"];

  // 04 b1-berichten
  const ber = findStudy(words, "b1-berichten");
  ber.important.text =
    "berichten is commonly used with über + accusative for what is being reported about, and with von + dative for what someone reports or tells about.";

  // 05 b1-blase
  const bla = findStudy(words, "b1-blase");
  bla.explanation =
    "Main idea: die Blase can mean a blister, bladder, or bubble. On the skin it usually means a blister; in anatomy it can mean the bladder; in water or air it can mean a bubble.";
  bla.important.text =
    "The context determines the meaning: on the skin, Blase usually means “blister”; in anatomy, it can mean “bladder”.";
  bla.sectionAccents.explanation.purple = ["blister"];

  // 06 b1-bloß
  const blo = findStudy(words, "b1-bloß");
  blo.explanation =
    "Main idea: bloß very often means just or simply in colloquial language. As an adjective it means bare, e.g. mit bloßen Händen.";
  blo.sectionAccents.tip.leftBlocks[0].text.purple = ["bloß"];

  // 07 b1-entlassen
  const ent = findStudy(words, "b1-entlassen");
  ent.explanation =
    "Main idea: entlassen means to dismiss, discharge, or release someone, depending on the context. An employer can dismiss or fire someone, a hospital can discharge a patient, and a prison can release a prisoner.";
  ent.tip.leftBlocks[0].text =
    "Employer → dismiss or fire. Hospital → discharge. Prison → release. The English equivalent depends on the context.";
  ent.important.text =
    "From a hospital, entlassen usually means “to discharge”; in employment, it usually means “to dismiss” or “to fire”.";
  ent.sectionAccents.explanation.purple = ["dismiss", "discharge", "release"];

  // 08 b1-fördern
  const foer = findStudy(words, "b1-fördern");
  foer.important.text =
    "Do not confuse fördern and fordern: fördern means to promote or support, while fordern means to demand or require.";
  foer.explanation =
    "Main idea: fördern means to promote the development or support of a person, project or process. In industry, this means extracting natural resources such as oil or coal.";
  foer.sectionAccents.tip.leftBlocks[0].text.purple = ["moves forward", "requires something"];
  foer.sectionAccents.important.purple = ["promote", "support", "demand"];

  // 09 b1-handeln
  const han = findStudy(words, "b1-handeln");
  han.comparison[0].meaning = "Act / be about / trade";
  han.sectionAccents.tip.leftBlocks[0].text.purple = ["what to do", "what is the text about"];

  // 10 b1-hort
  const hor = findStudy(words, "b1-hort");
  hor.explanation[3] =
    "In this sense, der Hort is an after-school care facility or program for schoolchildren.";

  // 11 b1-jagen
  const jag = findStudy(words, "b1-jagen");
  jag.important.text =
    "jagen usually means to hunt or chase. The exact English equivalent depends on what or who is being pursued.";

  // 12 b1-kader
  const kad = findStudy(words, "b1-kader");
  kad.explanation[3] =
    "Do not confuse der Kader with a film frame. In German, der Kader usually means a squad or cadre; a film frame is das Bild or die Einstellung.";
  kad.tip[1] =
    "For a sports squad or selected group, use der Kader. A film frame is das Bild or die Einstellung.";
  kad.examples[1].lv = "She is part of the squad of top athletes.";
  kad.examples[3].lv = "The team has a large squad.";
  delete kad.sectionAccents.explanation.purple;
  kad.sectionAccents.important[0].purple = ["core"];

  // 13 b1-kern
  const ker = findStudy(words, "b1-kern");
  ker.explanation =
    "Main idea: der Kern can mean a kernel, seed, pit or core, and figuratively the essence of something.";
  ker.important.text =
    "The exact English equivalent depends on context: Kern can refer to a seed or pit in fruit, a core, or the essential part of something.";

  // 14 b1-kommando
  const kom = findStudy(words, "b1-kommando");
  kom.important = "A sports team is normally die Mannschaft or das Team, not das Kommando.";
  kom.explanation =
    "Main Idea: das Kommando is an order or command, especially in a military, sporting or organised situation. It can also mean a control unit.";
  kom.sectionAccents.important.purple = ["Mannschaft", "Team"];

  // 15 b1-kurs
  const kur = findStudy(words, "b1-kurs");
  kur.important =
    "der Kurs can refer to a course of lessons, a direction or course, or a rate such as an exchange rate. The intended meaning depends on context.";
  kur.explanation =
    "Main idea: der Kurs is a course as a set of learning lessons or a direction. In financial terms, it can also mean the price of securities.";
  kur.tip = "Lessons, a ship’s course, or an exchange rate → der Kurs.";
  kur.sectionAccents.important.purple = ["course", "direction", "exchange rate"];

  // 16 b1-kastanie
  const kas = findStudy(words, "b1-kastanie");
  kas.tip =
    "Tree or fruit? The context determines whether die Kastanie refers to the chestnut tree or the chestnut itself.";
  kas.important =
    "die Kastanie can refer both to a chestnut tree and to its fruit; the context usually makes the intended meaning clear.";
  kas.sectionAccents.comparison[0].meaning.purple = "chestnut";
  kas.sectionAccents.comparison[2].meaning.purple = "nut";
  kas.sectionAccents.tip.purple = ["Tree", "fruit"];

  // 17 b1-rasen
  const ras = findStudy(words, "b1-rasen");
  ras.translation = "To race / to speed";
  ras.explanation =
    "Main idea: rasen means to race, speed, or move extremely fast, often excessively fast. For a storm, it can mean to rage.";
  ras.tip =
    "Use rasen when someone or something is moving extremely fast, especially when the speed seems excessive or uncontrolled.";
  ras.sectionAccents.comparison[1].meaning.purple = "Drive";
  ras.sectionAccents.important.red = "drive";
  ras.sectionAccents.explanation.purple = ["race", "speed"];

  // 18 b1-schale
  const sch = findStudy(words, "b1-schale");
  sch.important = "For tree bark, German normally uses die Rinde, not die Schale.";
  sch.tip = "For fruit peel or a nut shell, Schale is common; for tree bark, use Rinde.";
  sch.sectionAccents.comparison[1].meaning.purple = "tree bark";

  // 19 b1-schlag
  const slg = findStudy(words, "b1-schlag");
  slg.important =
    "der Schlag is highly context-dependent and can mean a blow, strike, stroke, or other sudden impact or event. Use the surrounding context to determine the intended sense.";
  slg.explanation =
    "Main Idea: der Schlag means a blow or strike. In context, it can also be a lightning strike, a clock strike, or a type.";
  slg.comparison[0].meaning = "A blow or strike • In some contexts, a kick";
  slg.sectionAccents.examples[2].lv.red = "strikes";
  slg.sectionAccents.comparison[0].meaning.purple = "blow";

  // 20 b1-senken
  const sen = findStudy(words, "b1-senken");
  sen.important =
    "senken is transitive and takes an object: someone lowers something. sinken is usually intransitive: something sinks or falls by itself.";
  sen.explanation = "senken means to lower or bring something down.";
  sen.sectionAccents.examples[2].lv.red = "keep your voice down";
  sen.sectionAccents.comparison[1].meaning.purple = "fall";

  // 21 b1-sich-sorgen
  const sor = findStudy(words, "b1-sich-sorgen");
  sor.important =
    "sich sorgen is commonly used with um: sich um jemanden oder etwas sorgen means to worry about someone or something.";
  sor.explanation =
    "Main idea: sich sorgen means to worry about someone or something. It is commonly used in the phrase sich um jemanden/etwas sorgen.";
  sor.comparison[2].meaning = "Worry / concern";
  sor.sectionAccents.comparison[2].meaning.purple = "concern";

  // 22 b1-stellung
  const stl = findStudy(words, "b1-stellung");
  stl.comparison[0].meaning = "Position / job / stance";
  stl.sectionAccents.examples[1].lv.red = "job";
  stl.sectionAccents.important.red = "job";
  stl.sectionAccents.comparison[0].meaning.purple = "Position";

  // 23 b1-tank
  const tan = findStudy(words, "b1-tank");
  tan.important.text =
    "German der Tank usually means a fuel tank or storage tank. A military tank is der Panzer.";
  tan.sectionAccents.examples[2].lv.red = "A tank";

  // 24 b1-teilnehmen
  const tei = findStudy(words, "b1-teilnehmen");
  tei.important.text =
    "Use an dem Kurs teilnehmen or the contracted form am Kurs teilnehmen, not den Kurs teilnehmen.";
  tei.explanation =
    "The correct construction is teilnehmen an + dative: teilnehmen an etwas means “to participate in something”.";
  tei.sectionAccents.tip.red = "dative";

  // 25 b1-verlegen
  const ver = findStudy(words, "b1-verlegen");
  ver.important.text =
    "Schlüssel verlegen means to misplace a key. Unlike verlieren, verlegen usually implies that the object was put somewhere and cannot currently be found.";
  ver.examples[0].lv = "We are moving the deadline to Friday.";
  ver.examples[1].lv = "I put the key somewhere and I can't find it.";
  ver.sectionAccents.examples[1].lv.red = "can't find it";
  ver.sectionAccents.examples[2].lv.red = "publishes";
  ver.sectionAccents.important.purple = ["misplace"];

  const out = serializeB1(words);
  fs.writeFileSync(path.join(ROOT, "data/en/b1.js"), out);
  fs.writeFileSync(path.join(ROOT, "www/data/en/b1.js"), out);

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-b1-high-repair-01-log.json"),
    JSON.stringify({ cards: CARD_IDS, changes: log }, null, 2)
  );

  console.log("Repair applied to 25 cards.");
  console.log("Logged field paths:", log.length);
}

applyRepairs();
