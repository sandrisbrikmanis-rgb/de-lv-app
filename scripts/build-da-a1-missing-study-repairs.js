#!/usr/bin/env node
"use strict";
/**
 * Build missing Study repair objects: LV etalon DE/sectionAccents + OWNER DA text.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const OUT = path.join(ROOT, "reports/temp/da-a1-missing-study-repairs.json");

function loadWords(rel) {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, rel), "utf8"), ctx);
  return ctx.window.A1_WORDS;
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

/** OWNER-approved DA content per DE word */
const OWNER = {
  Besuch: {
    translation: "Et besøg",
    explanation: [
      "Hovedidé: der Besuch betyder et besøg hos en person, på et sted eller i forbindelse med en begivenhed.",
      "På dansk oversættes Besuch normalt med besøg.",
      "Det kan både være et socialt besøg og et besøg på for eksempel et museum.",
      "Flertal: die Besuche.",
    ],
    examplesLv: [
      "Besøget på museet var interessant.",
      "Tak for dit besøg.",
      "Lægen kommer på hjemmebesøg.",
    ],
    tip: "Husk: Besuch er selve besøget, mens Besucher er personen, der besøger et sted.",
    important: [
      "der Besuch kan bruges om forskellige former for besøg.",
      "Flertal: die Besuche.",
    ],
  },
  besuchen: {
    translation: "At besøge",
    explanation: [
      "Hovedidé: besuchen betyder at besøge en person eller et sted.",
      "Man kan for eksempel besøge familie, venner, en by eller et museum.",
      "I visse sammenhænge kan besuchen også bruges om at gå på eller deltage i noget, for eksempel en skole eller et kursus.",
      "Bøjes: ich besuche, du besuchst, er/sie/es besucht.",
    ],
    examplesLv: ["Jeg besøger mine bedsteforældre.", "Vi besøger museet.", "Han besøger en ven."],
    tip: "Husk: besuchen = at besøge en person eller et sted.",
    important: ["besuchen bruges med akkusativ.", "besuchen er ikke det samme som sehen (at se)."],
  },
  Fußball: {
    translation: "Fodbold",
    explanation: [
      "Hovedidé: Fußball betyder fodbold.",
      "Ordet bruges oftest om sporten: Fußball spielen = at spille fodbold.",
      "Det kan også betegne selve fodbolden, når sammenhængen gør det klart.",
      "Flertal die Fußbälle bruges om flere fodbolde.",
    ],
    examplesLv: ["Jeg spiller fodbold.", "Fodbolden er rund.", "Vi ser fodbold i fjernsynet."],
    tip: "Husk: Fußball betyder normalt sporten fodbold; Ball er det almindelige ord for en bold.",
    important: ["der Fußball kan afhængigt af sammenhængen betegne sporten eller en fodbold."],
  },
  ganz: {
    translation: "Hel • Helt",
    explanation: [
      "Hovedidé: ganz kan betyde hel eller helt afhængigt af sammenhængen.",
      "Foran et substantiv betyder ganz ofte hel: der ganze Tag = hele dagen.",
      "Sammen med et adjektiv eller adverbium kan ganz betyde helt eller ret: ganz allein = helt alene, ganz gut = ret godt.",
    ],
    examplesLv: ["Jeg spiser hele æblet.", "Det er ret godt.", "Han er helt alene."],
    tip: "Husk: betydningen af ganz afhænger af sammenhængen: hel, helt eller ret.",
    important: ["Se på ordet efter ganz for at vælge den naturlige danske oversættelse."],
  },
  gefallen: {
    translation: "At kunne lide",
    explanation: [
      "Hovedidé: gefallen bruges, når nogen synes godt om noget.",
      "Den tyske konstruktion er anderledes end den danske: Das gefällt mir = Det kan jeg godt lide.",
      "Det, man synes om, er subjektet på tysk, mens personen står i dativ.",
    ],
    examplesLv: ["Jeg kan godt lide bogen.", "Vi kan godt lide filmen.", "Hvad synes du om det?"],
    tip: "Husk konstruktionen: Das gefällt mir = Det kan jeg godt lide.",
    important: ["Personen står i dativ: mir, dir, ihm, ihr, uns osv."],
  },
  Geschichte: {
    translation: "Historie • Fortælling",
    explanation: [
      "Hovedidé: Geschichte kan betyde både historie og fortælling.",
      "eine Geschichte er en historie eller fortælling, som man for eksempel kan læse eller fortælle.",
      "Geschichte kan også være historie som skolefag eller fagområde.",
    ],
    examplesLv: ["Historien er interessant.", "Jeg læser en historie.", "Vi lærer historie i skolen."],
    tip: "Husk: eine Geschichte = en historie eller fortælling; Geschichte som fag = historie.",
    important: ["die Geschichte er hunkøn."],
  },
  Geschwister: {
    translation: "Søskende",
    explanation: [
      "Hovedidé: Geschwister betyder søskende.",
      "Ordet bruges om brødre og søstre samlet.",
      "die Geschwister har samme form i flertal.",
    ],
    examplesLv: ["Jeg har to søskende.", "Mine søskende bor i Berlin.", "Søskende leger sammen."],
    tip: "Husk: Geschwister = søskende, altså brødre og søstre samlet.",
    important: ["Geschwister bruges normalt som flertalsord."],
  },
  Großeltern: {
    translation: "Bedsteforældre",
    explanation: [
      "Hovedidé: Großeltern betyder bedsteforældre.",
      "Ordet bruges samlet om bedstemor og bedstefar.",
      "die Großeltern bruges kun i flertal.",
    ],
    examplesLv: ["Mine bedsteforældre bor på landet.", "Jeg besøger mine bedsteforældre.", "Bedsteforældrene er gamle."],
    tip: "Husk: Großeltern = bedsteforældre.",
    important: ["Kun flertal: die Großeltern."],
  },
  Hand: {
    translation: "Hånd",
    explanation: [
      "Hovedidé: die Hand betyder hånd.",
      "Ordet bruges om kropsdelen fra håndleddet og ud til fingrene.",
      "Flertal: die Hände.",
    ],
    examplesLv: ["Jeg vasker mine hænder.", "Giv mig din hånd.", "Han holder bogen i hånden."],
    tip: "Husk: die Hand = hånd; flertal die Hände.",
    important: ["in der Hand = i hånden."],
  },
  hübsch: {
    translation: "Pæn • Smuk",
    explanation: [
      "Hovedidé: hübsch betyder pæn, smuk eller tiltalende.",
      "Om personer oversættes det ofte med pæn eller smuk.",
      "Om ting kan det ofte oversættes med pæn eller flot.",
    ],
    examplesLv: ["Pigen er pæn.", "En pæn kjole.", "Dit værelse er pænt."],
    tip: "Husk: hübsch beskriver noget eller nogen, der ser pæn, smuk eller tiltalende ud.",
    important: ["Betydningen afhænger af sammenhængen: pæn, smuk eller flot."],
  },
};

function buildStudy(lvEntry, owner) {
  const base = deepClone(lvEntry.study);
  base.translation = owner.translation;
  base.explanation = owner.explanation;
  if (base.examples && owner.examplesLv) {
    base.examples.forEach((ex, i) => {
      if (owner.examplesLv[i]) ex.lv = owner.examplesLv[i];
    });
  }
  if (typeof base.tip === "object" && base.tip !== null) base.tip.text = owner.tip;
  else if (owner.tip) base.tip = { text: owner.tip };
  base.important = owner.important;
  return base;
}

function main() {
  const lv = loadWords("data/a1.js");
  const da = loadWords("data/da/a1.js");
  const repairs = [];

  for (const de of Object.keys(OWNER)) {
    const lvEntry = lv.find((e) => e.de === de);
    const daIndex = da.findIndex((e) => e.de === de);
    if (!lvEntry?.study || daIndex < 0) throw new Error(`Missing ${de}`);
    repairs.push({
      de,
      index: daIndex,
      cardId: `a1-${de}-${daIndex}`,
      action: "CREATE",
      study: buildStudy(lvEntry, OWNER[de]),
    });
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(repairs, null, 2));
  console.log(JSON.stringify({ count: repairs.length, out: OUT }, null, 2));
}

main();
