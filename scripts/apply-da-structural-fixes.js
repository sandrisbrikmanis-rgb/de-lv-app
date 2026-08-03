#!/usr/bin/env node
/**
 * Deterministic DA-DE structural fixes per audit task.
 * READ-ONLY on other languages; only touches DA files listed in task.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function read(p) {
  return fs.readFileSync(path.join(ROOT, p), 'utf8');
}
function write(p, content) {
  fs.writeFileSync(path.join(ROOT, p), content, 'utf8');
}

const stats = {
  kurssLvHeadings: 0,
  kurssEnHeadings: 0,
  kurssEnTasks: 0,
  kurssRuEnLv: 0,
  kurssDeDialog: 0,
  kurssDaDialog: 0,
  lettiskFixed: 0,
  studyLvLt: 0,
  sectionAccents: 0,
  ui: 0,
  sentences: 0,
  sprechen: 0,
};

function countSubs(before, after, label) {
  if (before !== after) stats[label] = (stats[label] || 0) + 1;
  return after;
}

// --- courseLessons.js ---
let cl = read('data/da/courseLessons.js');
const clBefore = cl;

const lvHeadings = [
  ['"heading": "Vienskaitlis"', '"heading": "Ental"'],
  ['"heading": "Daudzskaitlis"', '"heading": "Flertal"'],
  ['"heading": "Artikulu nelieto"', '"heading": "Artikel bruges ikke"'],
  ['"heading": "Kein — vienskaitlis"', '"heading": "Kein — ental"'],
  ['"heading": "Kein — daudzskaitlis"', '"heading": "Kein — flertal"'],
  ['"heading": "Daudzskaitlis bez galotnes"', '"heading": "Flertal uden endelse"'],
  ['"heading": "Daudzskaitlis ar galotni -e"', '"heading": "Flertal med endelsen -e"'],
  ['"heading": "Daudzskaitlis ar galotni -en vai -n"', '"heading": "Flertal med endelsen -en eller -n"'],
  ['"heading": "Daudzskaitlis ar galotni -er"', '"heading": "Flertal med endelsen -er"'],
  ['"heading": "Ja daudzskaitlis jau beidzas ar -n"', '"heading": "Hvis flertalsformen allerede ender på -n"'],
  ['"heading": "-e- starp celmu un galotni"', '"heading": "-e- mellem stammen og endelsen"'],
  ['"heading": "Daudzskaitlis ar Umlaut"', '"heading": "Flertal med Umlaut"'],
  ['"label": "4/4 Daudzskaitlis"', '"label": "4/4 Flertal"'],
];
for (const [from, to] of lvHeadings) {
  const n = (cl.split(from).length - 1);
  if (n > 0) stats.kurssLvHeadings += n;
  cl = cl.split(from).join(to);
}

const enHeadings = [
  ['"heading": "demonstrative pronouns"', '"heading": "Demonstrative pronomener"'],
  ['"heading": "Examples"', '"heading": "Eksempler"'],
  ['"heading": "Comparison with other languages"', '"heading": "Sammenligning med andre sprog"'],
  ['"heading": "Imperative - examples"', '"heading": "Imperativ — eksempler"'],
  ['"heading": "Word order with denn"', '"heading": "Ordorden med denn"'],
  ['"heading": "Compound nouns"', '"heading": "Sammensatte substantiver"'],
  ['"heading": "Compound Nouns - Examples"', '"heading": "Sammensatte substantiver — eksempler"'],
  ['"heading": "Umlaut in the superlative degree"', '"heading": "Umlaut i superlativ"'],
  ['"heading": "Comparison with wie and als"', '"heading": "Sammenligning med wie og als"'],
  ['"heading": "Irregular comparative degrees"', '"heading": "Uregelmæssige komparativformer"'],
  ['"heading": "Umlaut in the present"', '"heading": "Umlaut i nutid"'],
  ['"heading": "Reflexive verb"', '"heading": "Refleksivt verbum"'],
  ['"heading": "The verb remember"', '"heading": "Verbet erinnern"'],
  ['"heading": "Compound verbs"', '"heading": "Sammensatte verber"'],
  ['"heading": "The pronoun jeder"', '"heading": "Pronomenet jeder"'],
  ['"heading": "The feminine turn in the dative"', '"heading": "Den feminine form i dativ"'],
  ['"heading": "The indefinite article in the dative"', '"heading": "Den ubestemte artikel i dativ"'],
  ['"heading": "Komparativ"', '"heading": "Komparativ"'],
  ['"heading": "Superlativ"', '"heading": "Superlativ"'],
];
for (const [from, to] of enHeadings) {
  if (from === to) continue;
  const n = (cl.split(from).length - 1);
  if (n > 0) stats.kurssEnHeadings += n;
  cl = cl.split(from).join(to);
}

const enTasks = [
  ['"task": "Put the correct article in dative/accusative according to the meaning of the sentence."', '"task": "Indsæt den rigtige artikel i dativ/akkusativ efter sætningens mening."'],
  ['"task": "Put the correct article in the dative."', '"task": "Indsæt den rigtige artikel i dativ."'],
];
for (const [from, to] of enTasks) {
  const n = (cl.split(from).length - 1);
  if (n > 0) stats.kurssEnTasks += n;
  cl = cl.split(from).join(to);
}

// RU/EN/LV fragments in grammar
const ruEnLv = [
  ['krievu: я имею тетрадь; отец имеет книгу.', 'Dansk: Jeg har et hæfte; faren har en bog.'],
  ['English: I have a book; the father has a pencil.', 'Dansk: Jeg har en bog; faren har en blyant.'],
  ['Ich habe einen Tisch — man ir galds', 'Ich habe einen Tisch — Jeg har et bord'],
  ['Der Vater hat ein Buch - Father has a book', 'Der Vater hat ein Buch — Faderen har en bog'],
  ['Sie haben eine Feder - They have a feather', 'Sie haben eine Feder — De har en fjer'],
  ['"lv": "Es esmu 20 gadus vecs."', '"lv": "Jeg er 20 år gammel."'],
  ['ich heiße — mani sauc', 'ich heiße — mit navn er'],
];
for (const [from, to] of ruEnLv) {
  const n = (cl.split(from).length - 1);
  if (n > 0) stats.kurssRuEnLv += n;
  cl = cl.split(from).join(to);
}

// German dialog fixes (global in file)
const deDialog = [
  ['er arbeitt', 'er arbeitet'],
  ['Arbeiter du?', 'Arbeitest du?'],
  ['Eh / sie', 'Er / sie'],
];
for (const [from, to] of deDialog) {
  const n = (cl.split(from).length - 1);
  if (n > 0) stats.kurssDeDialog += n;
  cl = cl.split(from).join(to);
}

// Danish dialog - Geht ihr from LV etalon
const daDialog = [
  ['Hvad ihr? – Skal du hen?', 'Geht ihr? – Går I?'],
  ['Hvis, ich stehe. – Ja, jeg står.', 'Ja, ich stehe. – Ja, jeg står.'],
  ['Ja, det er godt. – Ja, vi går.', 'Ja, wir gehen. – Ja, vi går.'],
  ['<span>Ihr</span><strong>Kommt</strong><span>Du kommer</span>', '<span>Ihr</span><strong>Kommt</strong><span>I kommer</span>'],
];
for (const [from, to] of daDialog) {
  const n = (cl.split(from).length - 1);
  if (n > 0) stats.kurssDaDialog += n;
  cl = cl.split(from).join(to);
}

// Lettisk in courseLessons (safe replacements)
const clLettisk = [
  ['Oversæt lettiske sætninger til tysk.', 'Oversæt danske sætninger til tysk.'],
  ['Den dobbelte negation af det lettiske sprog', 'Den dobbelte negation af det danske sprog'],
  ['På letisk siger vi', 'På dansk siger vi'],
  ['lettisk: mit = med.', 'dansk: mit = med.'],
];
for (const [from, to] of clLettisk) {
  const n = (cl.split(from).length - 1);
  if (n > 0) { stats.lettiskFixed += n; }
  cl = cl.split(from).join(to);
}

if (cl !== clBefore) write('data/da/courseLessons.js', cl);

// --- Shared lettisk replacements for a1, a2, b1 ---
function applyLettiskSafe(content) {
  let c = content;
  const pairs = [
    ['Den lettiske ', 'Den danske '],
    ['Det lettiske ', 'Det danske '],
    ['det lettiske ', 'det danske '],
    ['lettiske sætninger', 'danske sætninger'],
    ['siger lettiske ', 'siger danske '],
    ['siger lettisk ', 'siger dansk '],
    ['oversættes til lettisk', 'oversættes til dansk'],
    ['til lettisk,', 'til dansk,'],
    ['på letisk', 'på dansk'],
    ['På letisk', 'På dansk'],
    ['lettisk: ', 'dansk: '],
    ['lettisk \"', 'dansk \"'],
    ['lettisk, afhængigt', 'dansk, afhængigt'],
    ['kende letisk', 'kende dansk'],
    ['Den lettiske oversættelse', 'Den danske oversættelse'],
    ['efter lokation på letisk', 'efter lokation på dansk'],
    ['lægeerklæring på letisk', 'lægeerklæring på dansk'],
  ];
  for (const [from, to] of pairs) {
    const n = (c.split(from).length - 1);
    if (n > 0) stats.lettiskFixed += n;
    c = c.split(from).join(to);
  }
  return c;
}

// --- a1.js ---
let a1 = read('data/da/a1.js');
a1 = applyLettiskSafe(a1);

const a1Study = [
  ['Ich sehe dich = es tevi redzu; Ich schaue den Film = es skatos filmu.', 'Ich sehe dich = Jeg ser dig; Ich schaue den Film = Jeg ser filmen.'],
  ['Husk: Ich heiße... → mani sauc...', 'Husk: Ich heiße... → mit navn er...'],
  ['"mani sauc"', '"mit navn er"'],
  ['Nav pareizi:', 'Forkert:'],
];
for (const [from, to] of a1Study) {
  const n = (a1.split(from).length - 1);
  if (n > 0) stats.studyLvLt += n;
  a1 = a1.split(from).join(to);
}

// Remove duplicate sprechen example (third identical entry)
const sprechenDup = `        },
        {
          "de": "Ich spreche Deutsch.",
          "lv": "Jeg taler tysk"
        }
      ],
      "comparison": [
        {
          "word": "sprechen",`;
const sprechenFixed = `        }
      ],
      "comparison": [
        {
          "word": "sprechen",`;
if (a1.includes(sprechenDup)) {
  a1 = a1.replace(sprechenDup, sprechenFixed);
  stats.sprechen = 1;
  // Remove extra sectionAccents block for third example if present
  const accentDup = `          },
          {
            "de": {
              "green": [
                "spreche"
              ]
            },
            "lv": {
              "purple": [
                "Jeg"
              ]
            }
          }
        ],
        "tip": [
          "sprechen = at tale",`;
  const accentFixed = `          }
        ],
        "tip": [
          "sprechen = at tale",`;
  if (a1.includes(accentDup)) {
    a1 = a1.replace(accentDup, accentFixed);
    stats.sectionAccents += 1;
  }
}

write('data/da/a1.js', a1);

// --- a2.js ---
let a2 = read('data/da/a2.js');
a2 = applyLettiskSafe(a2);

const a2Study = [
  ['dafür = par til / tam. damit = ar to vai lai. Ich bin dafür = Es esmu par to.', 'dafür = for det. damit = så at / for at. Ich bin dafür = Jeg er for det.'],
  ['Sprich langsam, damit ich dich verstehe. Nejaukt damit ar dafür. dafür = par to; damit = ar til / lai.', 'Sprich langsam, damit ich dich verstehe. Bland ikke damit med dafür. dafür = for det; damit = så at / for at.'],
  ['"Nejaukt"', '"Bland ikke"'],
  ['"par til"', '"for det"'],
  ['"ar to"', '"for det"'],
  ['"par to / tam / toties"', '"for det"'],
  ['"par to / tam"', '"for det"'],
  ['"par to": "#B565FF"', '"for det": "#B565FF"'],
  ['stundas ceturksnis', 'et kvarter'],
  ['"ceturksnis"', '"kvarter"'],
  ['"stundas"', '"timer"'],
  ['neskatoties uz to', 'på trods af det'],
];
for (const [from, to] of a2Study) {
  const n = (a2.split(from).length - 1);
  if (n > 0) {
    if (from.includes('stundas') || from.includes('ceturksnis') || from.includes('neskatoties')) stats.sectionAccents += n;
    else stats.studyLvLt += n;
  }
  a2 = a2.split(from).join(to);
}

// nepareizi/pareizi in a2 (pareizi in wrong contexts)
a2 = a2.split('nepareizi').join('forkert');
a2 = a2.split('pareizi').join('korrekt');

write('data/da/a2.js', a2);

// --- b1.js ---
let b1 = read('data/da/b1.js');
b1 = applyLettiskSafe(b1);

const b1Study = [
  ['Nesaki \"ich falle eine Idee ein\".', 'Sig ikke \"ich falle eine Idee ein\".'],
  ['24 stundas/diennakts.', '24 timer i døgnet.'],
  ['par saturu — pareizi:', 'om indholdet — korrekt:'],
  ['weil ich bin krank — nepareizi; pareizi: weil ich krank bin.', 'weil ich bin krank — forkert; korrekt: weil ich krank bin.'],
  ['trotz dem Regen — nepareizi; pareizi: trotz des Regens.', 'trotz dem Regen — forkert; korrekt: trotz des Regens.'],
  ['zatans ... zu = i stedet for', 'anstatt ... zu = i stedet for'],
  ['"zatans"', '"anstatt"'],
  ['Brug antehan ... zu', 'Brug anstatt ... zu'],
  ['ohne + ko? (bez siera) ≠ ohne ... zu (neko nedara).', 'ohne + substantiv (uden ost) ≠ ohne ... zu (uden at gøre noget).'],
  ['"saturs"', '"indhold"'],
  ['"skatuve"', '"scene"'],
];
for (const [from, to] of b1Study) {
  const n = (b1.split(from).length - 1);
  if (n > 0) {
    if (from.includes('saturs') || from.includes('skatuve') || from.includes('zatans')) stats.sectionAccents += n;
    else stats.studyLvLt += n;
  }
  b1 = b1.split(from).join(to);
}

write('data/da/b1.js', b1);

// --- sentences.js ---
let sent = read('data/da/sentences.js');
if (sent.includes('WHO...? • Hvad med...?')) {
  sent = sent.replace('WHO...? • Hvad med...?', 'Hvilken...? • Hvad for en...?');
  stats.sentences = 1;
}
write('data/da/sentences.js', sent);

// --- ui.js ---
let ui = read('languages/da/ui.js');
if (ui.includes('"markUnwanted": "Markér som unødvendig"')) {
  ui = ui.replace('"markUnwanted": "Markér som unødvendig"', '"markUnwanted": "Markér som uønsket"');
  stats.ui = 1;
}
write('languages/da/ui.js', ui);

// Sync www
const syncPairs = [
  ['data/da/courseLessons.js', 'www/data/da/courseLessons.js'],
  ['data/da/a1.js', 'www/data/da/a1.js'],
  ['data/da/a2.js', 'www/data/da/a2.js'],
  ['data/da/b1.js', 'www/data/da/b1.js'],
  ['data/da/sentences.js', 'www/data/da/sentences.js'],
  ['languages/da/ui.js', 'www/languages/da/ui.js'],
];
for (const [src, dest] of syncPairs) {
  fs.copyFileSync(path.join(ROOT, src), path.join(ROOT, dest));
}

console.log(JSON.stringify(stats, null, 2));
