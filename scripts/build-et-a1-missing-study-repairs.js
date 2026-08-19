#!/usr/bin/env node
"use strict";
/**
 * Build missing ET Study repair objects: LV etalon DE/structure + OWNER ET text.
 * Source: reports/et-a1-missing-study-owner-decisions-accepted.md
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { syncSectionAccentsDe } = require("./lib/de-sync-core");

const OUT = path.join(ROOT, "reports/temp/et-a1-missing-study-repairs.json");

function loadWords(rel) {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, rel), "utf8"), ctx);
  return ctx.window.A1_WORDS;
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function splitTerms(text) {
  return String(text || "")
    .split(/[•·,]/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function findInText(text, candidates) {
  const hay = String(text || "");
  for (const c of candidates) {
    if (!c) continue;
    if (hay.includes(c)) return c;
  }
  for (const c of candidates) {
    const stem = c.slice(0, Math.max(4, Math.floor(c.length * 0.7)));
    const idx = hay.toLowerCase().indexOf(stem.toLowerCase());
    if (idx >= 0) {
      const m = hay.slice(idx).match(/^[\p{L}\p{N}_-]+/u);
      if (m) return m[0];
    }
  }
  return candidates[0] || null;
}

function buildSectionAccents(study, lvStudy) {
  if (!lvStudy?.sectionAccents) return undefined;
  const sa = deepClone(lvStudy.sectionAccents);
  study.sectionAccents = sa;
  syncSectionAccentsDe(lvStudy, study);

  const transTerms = splitTerms(study.translation);
  if (sa.explanation?.purple) {
    sa.explanation.purple = transTerms.slice(0, sa.explanation.purple.length);
  }

  if (Array.isArray(sa.examples) && Array.isArray(study.examples)) {
    sa.examples.forEach((row, i) => {
      const ex = study.examples[i];
      if (!ex || !row.lv) return;
      const terms = splitTerms(ex.lv);
      if (row.lv.purple) row.lv.purple = [findInText(ex.lv, terms) || terms[0]].filter(Boolean);
      if (row.lv.green) {
        const greenCand = ex.lv.split(/\s+/).filter((w) => w.length > 3);
        row.lv.green = row.lv.green.map((_, gi) => findInText(ex.lv, greenCand) || greenCand[gi]).filter(Boolean);
      }
    });
  }

  if (Array.isArray(sa.comparison) && Array.isArray(study.comparison)) {
    sa.comparison.forEach((row, i) => {
      const cmp = study.comparison[i];
      if (!cmp || !row.meaning?.purple) return;
      row.meaning.purple = splitTerms(cmp.meaning).slice(0, row.meaning.purple.length);
      if (row.example?.purple && cmp.example) {
        const etPart = cmp.example.split(" – ")[1] || cmp.example;
        row.example.purple = [findInText(etPart, splitTerms(cmp.meaning))].filter(Boolean);
      }
    });
  }

  const tipText =
    typeof study.tip === "object" && study.tip?.text
      ? study.tip.text
      : Array.isArray(study.tip)
        ? study.tip.join(" ")
        : String(study.tip || "");
  if (sa.tip?.left?.purple) {
    sa.tip.left.purple = [findInText(tipText, transTerms) || transTerms[0]].filter(Boolean);
  }

  if (Array.isArray(sa.important) && Array.isArray(study.important)) {
    sa.important.forEach((row, i) => {
      const imp = study.important[i];
      if (!imp || !row.purple) return;
      row.purple = [findInText(imp, transTerms) || transTerms[0]].filter(Boolean);
    });
  }

  return sa;
}

/** OWNER-approved ET content per DE word (from accepted decisions) */
const OWNER = {
  Besuch: {
    translation: "külaskäik • külastus • visiit",
    explanation: [
      "Põhitähendus: der Besuch tähendab külastust, külaskäiku või visiiti.",
      "Kui räägitakse kohast või üritusest, sobib eesti keeles tavaliselt külastus.",
      "Kui räägitakse inimese külastamisest, sobib sageli külaskäik või visiit.",
      "Mitmus on die Besuche.",
    ],
    examplesLv: [
      "Muuseumi külastus oli huvitav.",
      "Aitäh külaskäigu eest.",
      "Arst teeb visiidi.",
    ],
    comparison: [
      { meaning: "külastus • külaskäik • visiit", exampleEt: "Aitäh külaskäigu eest." },
      { meaning: "külastaja", exampleEt: "Külastaja ootab väljas." },
      { meaning: "külastama", exampleEt: "Ma külastan oma vanavanemaid." },
    ],
    tip: "Pea meeles: Besuch on külastus või visiit, Besucher aga inimene ehk külastaja.",
    important: [
      "der Besuch ei tähenda ainult külaskäiku; see võib olla ka külastus või visiit.",
      "Mitmus: die Besuche.",
    ],
  },
  besuchen: {
    translation: "külastama • külla minema",
    explanation: [
      "Põhitähendus: besuchen kasutatakse koha, ürituse või inimese külastamise kohta.",
      "Kohta, üritust või kursust eesti keeles tavaliselt külastatakse.",
      "Kui besuchen käib inimese kohta, võib eesti keeles loomulikult öelda külastama või külla minema.",
      "Saksa keeles kasutatakse besuchen ilma eessõnata ja akusatiiviga.",
    ],
    examplesLv: ["Ma külastan muuseumi.", "Me käime saksa keele kursusel.", "Ma külastan oma vanavanemaid."],
    comparison: [
      { meaning: "külastama kohta või üritust • külastama inimest", exampleEt: "Ma külastan oma vanavanemaid." },
      { meaning: "kohtuma", exampleEt: "Ma kohtun oma sõbraga." },
      { meaning: "kellegi juurde minema", exampleEt: "Ma lähen oma sõbra juurde." },
    ],
    tip: "Pea meeles: kohta või üritust külastatakse; inimese puhul võib öelda ka kellegi juurde külla minema.",
    important: [
      "besuchen kasutatakse ilma eessõnata: Ich besuche meine Freundin.",
      "Eestikeelne vaste sõltub objektist: külastama kohta, külastama inimest või külla minema.",
    ],
  },
  Fußball: {
    translation: "jalgpall",
    explanation: [
      "Põhitähendus: Fußball tähendab enamasti jalgpalli kui spordiala.",
      "Artikliga ja loendatavas tähenduses võib der Fußball tähendada ka jalgpalli ehk palli.",
      "Mitmus die Fußbälle tähendab jalgpalle ehk palle, mitte mitut spordiala.",
    ],
    examplesLv: ["Ma mängin jalgpalli.", "Jalgpall on aias.", "Me ostame kaks jalgpalli."],
    comparison: [
      { meaning: "jalgpall kui spordiala", exampleEt: "Ma mängin jalgpalli." },
      { meaning: "jalgpall ehk pall", exampleEt: "Jalgpall on uus." },
    ],
    tip: [
      "Ilma artiklita spielen Fußball tähendab tavaliselt jalgpalli mängima.",
      "Loendatavas tähenduses on ein Fußball üks jalgpall ja die Fußbälle jalgpallid.",
    ],
    important: [
      "die Fußbälle tähendab jalgpalle ehk palle.",
      "Spordiala Fußball kasutatakse tavaliselt ainsuses.",
    ],
  },
  ganz: {
    translation: "terve • kogu • täiesti",
    explanation: [
      "Põhitähendus: ganz koos nimisõnaga tähendab tervet või kogu midagi.",
      "Omadus- või määrsõna ees võib ganz tähendada täiesti, päris või üsna.",
      "ganz ei ole sama mis asesõna alles.",
    ],
    examplesLv: [
      "Ma töötan terve päeva.",
      "Kogu maja on puhas.",
      "See on täiesti kindel.",
      "Toit on päris hea.",
    ],
    comparison: [
      { meaning: "terve • kogu • täiesti", exampleEt: "terve päev" },
      { meaning: "kõik", exampleEt: "Kõik on korras." },
    ],
    tip: [
      "Nimisõna ees tähendab ganz sageli terve või kogu.",
      "Omadussõna ees tähendab see sageli täiesti, päris või üsna.",
    ],
    important: ["der ganze Tag = terve päev.", "alles = kõik asesõnana."],
  },
  gefallen: {
    translation: "meeldima",
    explanation: [
      "Põhitähendus: gefallen tähendab meeldima, kuid saksa lauseehitus erineb eesti keelest.",
      "Asi, mis meeldib, on saksa keeles lause alus.",
      "Isik, kellele miski meeldib, on daativis: mir, dir, ihm, ihr, uns, euch, ihnen.",
    ],
    examplesLv: ["See meeldib mulle.", "Kas see kleit meeldib sulle?", "See film meeldib meile."],
    comparison: [
      { meaning: "meeldima • isik daativis", exampleEt: "See meeldib mulle." },
      { meaning: "meeldima • midagi hea meelega tahtma või eelistama", exampleEt: "See meeldib mulle." },
    ],
    tip: "Pea meeles konstruktsiooni: Das gefällt mir. Ära tõlgi saksa sõnajärge eesti keelde sõna-sõnalt.",
    important: [
      "gefallen kasutatakse daativiga: mir, dir, ihm, ihr.",
      "Das gefällt mir = see meeldib mulle.",
    ],
  },
  Geschichte: {
    translation: "lugu • ajalugu",
    explanation: [
      "Põhitähendus: Geschichte võib tähendada lugu või ajalugu.",
      "Mitmus die Geschichten tähendab tavaliselt lugusid.",
      "Ajaloo tähenduses kasutatakse sõna Geschichte tavaliselt ainsuses.",
    ],
    examplesLv: ["Ta jutustab ühe loo.", "Ma õpin ajalugu.", "See on Saksamaa ajalugu."],
    comparison: [
      { meaning: "lugu", exampleEt: "huvitav lugu" },
      { meaning: "ajalugu", exampleEt: "ajalugu õppima" },
    ],
    tip: "Artikliga eine ja mitmuses tähendab Geschichte tavaliselt lugu. Õppeainena tähendab Geschichte ajalugu.",
    important: ["die Geschichten = lood.", "Geschichte ajaloo tähenduses on tavaliselt ainsuses."],
  },
  Geschwister: {
    translation: "õed-vennad",
    explanation: [
      "Põhitähendus: Geschwister tähendab vendi ja õdesid koos.",
      "Seda sõna kasutatakse tavaliselt ainult mitmuses.",
      "Ühe inimese kohta kasutatakse Bruder või Schwester.",
    ],
    examplesLv: ["Mul on kaks õde-venda.", "Minu õed-vennad elavad Berliinis."],
    comparison: [
      { meaning: "õed-vennad", exampleEt: "minu õed-vennad" },
      { meaning: "vend", exampleEt: "minu vend" },
      { meaning: "õde", exampleEt: "minu õde" },
    ],
    tip: "Geschwister kasutatakse tavaliselt mitmuses. Ühe inimese puhul vali Bruder või Schwester.",
    important: ["Ära kasuta A1-tasemel ein Geschwister tavalise ainsusevormina."],
  },
  Großeltern: {
    translation: "vanavanemad",
    explanation: [
      "Põhitähendus: Großeltern tähendab vanaema ja vanaisa ehk vanavanemaid.",
      "Seda sõna kasutatakse tavaliselt mitmuses.",
      "Ühe vanavanema kohta kasutatakse Großmutter või Großvater.",
    ],
    examplesLv: ["Minu vanavanemad elavad maal.", "Ma külastan oma vanavanemaid."],
    comparison: [
      { meaning: "vanavanemad", exampleEt: "minu vanavanemad" },
      { meaning: "vanaema", exampleEt: "minu vanaema" },
      { meaning: "vanaisa", exampleEt: "minu vanaisa" },
    ],
    tip: "Großeltern tähendab vanavanemaid koos. Ühe inimese puhul kasuta Großmutter või Großvater.",
    important: ["Großeltern on mitmusevorm; tavaliselt ei kasutata seda ühe vanavanema kohta."],
  },
  Hand: {
    translation: "käsi (kämmal)",
    explanation: [
      "Põhitähendus: die Hand tähendab kätt randmest sõrmedeni.",
      "der Arm tähendab käsivart või kogu kätt õlast randmeni.",
      "Mitmus on die Hände.",
    ],
    examplesLv: ["Ma pesen käsi.", "Ta hoiab klaasi käes.", "Mu käsivars valutab."],
    comparison: [
      { meaning: "käsi • kämmal", exampleEt: "Ta hoiab klaasi käes." },
      { meaning: "käsivars", exampleEt: "Mu käsivars valutab." },
    ],
    tip: "Pea meeles: Hand on käsi randmest sõrmedeni, Arm on käsivars.",
    important: ["Mitmus: die Hände."],
  },
  hübsch: {
    translation: "kena • nägus",
    explanation: [
      "Põhitähendus: hübsch tähendab kena, nägusat või meeldiva välimusega.",
      "Seda kasutatakse inimeste, riiete, ruumide ja esemete välimuse kirjeldamiseks.",
      "schön on üldisem sõna ja võib tähendada ilusat või meeldivat palju laiemas tähenduses.",
      "nett tähendab eelkõige lahket või meeldivat ning ei ole sama mis hübsch.",
    ],
    examplesLv: ["Tal on seljas kena kleit.", "Tuba on kena.", "See on kena pilt."],
    comparison: [
      { meaning: "kena • nägus", exampleEt: "kena kleit" },
      { meaning: "ilus • kaunis", exampleEt: "ilus päev" },
      { meaning: "lahke • meeldiv", exampleEt: "Ta on väga lahke." },
    ],
    tip: "Pea meeles: hübsch kirjeldab sageli välimust; nett kirjeldab tavaliselt inimese meeldivat või lahket olemust.",
    important: ["hübsch ei tähenda sama mis nett.", "schön on tähenduselt laiem kui hübsch."],
  },
};

const META = [
  { auditId: "ET-A1-0002", de: "Besuch", cardId: "a1-Besuch-87" },
  { auditId: "ET-A1-0003", de: "besuchen", cardId: "a1-besuchen-89" },
  { auditId: "ET-A1-0006", de: "Fußball", cardId: "a1-Fußball-218" },
  { auditId: "ET-A1-0007", de: "ganz", cardId: "a1-ganz-219" },
  { auditId: "ET-A1-0008", de: "gefallen", cardId: "a1-gefallen-225" },
  { auditId: "ET-A1-0009", de: "Geschichte", cardId: "a1-Geschichte-233" },
  { auditId: "ET-A1-0010", de: "Geschwister", cardId: "a1-Geschwister-234" },
  { auditId: "ET-A1-0011", de: "Großeltern", cardId: "a1-Großeltern-251" },
  { auditId: "ET-A1-0012", de: "Hand", cardId: "a1-Hand-267" },
  { auditId: "ET-A1-0013", de: "hübsch", cardId: "a1-hübsch-288" },
];

function buildStudy(lvEntry, owner) {
  const base = deepClone(lvEntry.study);
  base.translation = owner.translation;
  base.explanation = owner.explanation;
  if (base.examples && owner.examplesLv) {
    base.examples.forEach((ex, i) => {
      if (owner.examplesLv[i]) ex.lv = owner.examplesLv[i];
    });
  }
  if (base.comparison && owner.comparison) {
    base.comparison.forEach((row, i) => {
      const oc = owner.comparison[i];
      if (!oc) return;
      row.meaning = oc.meaning;
      if (oc.exampleEt && row.example) {
        const dePart = row.example.split(" – ")[0];
        row.example = `${dePart} – ${oc.exampleEt}`;
      }
    });
  }
  if (typeof base.tip === "object" && base.tip !== null && !Array.isArray(base.tip)) {
    base.tip.text = owner.tip;
  } else if (Array.isArray(base.tip) || Array.isArray(owner.tip)) {
    base.tip = owner.tip;
  } else {
    base.tip = owner.tip;
  }
  base.important = owner.important;
  buildSectionAccents(base, lvEntry.study);
  return base;
}

function main() {
  const lv = loadWords("data/a1.js");
  const et = loadWords("data/et/a1.js");
  const repairs = [];

  for (const m of META) {
    const owner = OWNER[m.de];
    const lvEntry = lv.find((e) => e.de === m.de);
    const etIndex = et.findIndex((e) => e.de === m.de);
    if (!owner || !lvEntry?.study || etIndex < 0) throw new Error(`Missing mapping for ${m.de}`);
    repairs.push({
      auditId: m.auditId,
      de: m.de,
      index: etIndex,
      cardId: m.cardId,
      field: "study",
      current: "(nav Study objekta)",
      action: "CREATE_STUDY",
      study: buildStudy(lvEntry, owner),
    });
  }

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(repairs, null, 2));
  console.log(JSON.stringify({ count: repairs.length, out: OUT }, null, 2));
}

main();
