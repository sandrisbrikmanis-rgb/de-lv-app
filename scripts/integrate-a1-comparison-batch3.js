/**
 * Batch 3: Stadt/Staat and Uhr/Zeit comparisonStudy cards.
 * Usage: node scripts/integrate-a1-comparison-batch3.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const targets = ["data/a1.js"];

const REMOVE_DE = new Set(["Stadt", "Staat", "Uhr", "Zeit"]);

const NEW_CARDS = [
  {
    de: "Stadt • Staat",
    lv: "Pilsēta • Valsts",
    level: "A1",
    study: {
      id: "compare-stadt-staat",
      layout: "comparisonStudy",
      title: "Pilsēta • Valsts",
      subtitle: "die Stadt • der Staat",
      lead: "die Stadt ir pilsēta; der Staat ir valsts kā politiska vienība.",
      explanation:
        "die Stadt apzīmē pilsētu — apdzīvotu vietu ar ielām, mājām un centru (Berlin ist eine Stadt). der Staat nozīmē valsti vai politisku vienību (Deutschland ist ein Staat). A1 līmenī abi ir bieži, bet konteksts ir atšķirīgs.",
      words: [
        {
          icon: "🏙",
          lv: "pilsēta",
          de: "die Stadt",
          description: "Apdzīvota vieta — pilsēta ar ielām un centru. Daudzskaitlī: die Städte.",
          example: "Ich wohne in einer großen Stadt. = Es dzīvoju lielā pilsētā.",
        },
        {
          icon: "🏛",
          lv: "valsts",
          de: "der Staat",
          description: "Valsts kā politiska vienība. Daudzskaitlī: die Staaten.",
          example: "Deutschland ist ein Staat in Europa. = Vācija ir valsts Eiropā.",
        },
      ],
      examples: [
        { de: "Ich wohne in einer großen Stadt.", lv: "es dzīvoju lielā pilsētā." },
        { de: "Berlin ist eine schöne Stadt.", lv: "berlīne ir skaista pilsēta." },
        { de: "In der Stadt gibt es viele Geschäfte.", lv: "pilsētā ir daudz veikalu." },
        { de: "Deutschland ist ein Staat in Europa.", lv: "vācija ir valsts eiropā." },
        { de: "Der Staat hilft den Menschen.", lv: "valsts palīdz cilvēkiem." },
        { de: "Viele Staaten sind in der EU.", lv: "daudzas valstis ir ES." },
      ],
      comparisonTable: [
        {
          lv: "pilsēta",
          de: "die Stadt",
          meaning: "apdzīvota vieta",
          describes: "pilsēta (Sg./Pl.)",
          example: "Ich wohne in einer großen Stadt.",
          translation: "es dzīvoju lielā pilsētā.",
        },
        {
          lv: "valsts",
          de: "der Staat",
          meaning: "politiska vienība",
          describes: "valsts (Sg./Pl.)",
          example: "Deutschland ist ein Staat in Europa.",
          translation: "vācija ir valsts eiropā.",
        },
        {
          lv: "pilsētā",
          de: "in der Stadt",
          meaning: "pilsētas teritorijā",
          describes: "Dativ + Sg.",
          example: "In der Stadt gibt es viele Geschäfte.",
          translation: "pilsētā ir daudz veikalu.",
        },
        {
          lv: "valstīs",
          de: "die Staaten",
          meaning: "vairākas valstis",
          describes: "Nominativ Pl.",
          example: "Viele Staaten sind in der EU.",
          translation: "daudzas valstis ir ES.",
        },
      ],
      importantComparison: [
        "die Stadt = pilsēta (vieta).",
        "der Staat = valsts (politiska vienība).",
        "in der Stadt ≠ im Staat — atšķirīgs konteksts.",
      ],
      tip: {
        left: "Par vietu, kur dzīvo cilvēki: die Stadt. Par valsti kā politisku vienību: der Staat.",
        rightTitle: "ātri",
        rightItems: [
          { de: "in der Stadt", lv: "pilsētā", separator: "=" },
          { de: "ein Staat", lv: "valsts", separator: "=" },
        ],
      },
      important: [
        "die Stadt: eine Stadt, die Städte.",
        "der Staat: ein Staat, die Staaten.",
        "Nav sinonīmi — Stadt ir vieta, Staat ir valsts.",
      ],
      mistakes: [
        { wrong: "in dem Staat wohnen", right: "in der Stadt wohnen" },
        { wrong: "die Staat", right: "der Staat" },
      ],
      remember: [
        "Pilsēta: die Stadt → in der Stadt.",
        "Valsts: der Staat → ein Staat, die Staaten.",
      ],
      sectionAccents: {
        lead: { blue: ["Stadt"], green: ["Staat"], purple: ["pilsēta", "valsts"] },
        comparisonCards: [
          {
            lv: { purple: ["pilsēta"] },
            de: { blue: ["Stadt"] },
            example: { blue: ["Stadt"], purple: ["pilsētā"] },
          },
          {
            lv: { purple: ["valsts"] },
            de: { green: ["Staat"] },
            example: { green: ["Staat"], purple: ["valsts"] },
          },
        ],
        examples: [
          { de: { blue: ["Stadt"] }, lv: { purple: ["pilsētā"] } },
          { de: { blue: ["Stadt"] }, lv: { purple: ["pilsēta", "skaista"] } },
          { de: { blue: ["Stadt"] }, lv: { purple: ["pilsētā", "veikali"] } },
          { de: { green: ["Staat"] }, lv: { purple: ["valsts"] } },
          { de: { green: ["Staat"] }, lv: { purple: ["valsts", "palīdz"] } },
          { de: { green: ["Staaten"] }, lv: { purple: ["valstis"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["pilsēta"] }, de: { blue: ["Stadt"] }, example: { blue: ["Stadt"] }, translation: { purple: ["pilsētā"] } },
          { lv: { purple: ["valsts"] }, de: { green: ["Staat"] }, example: { green: ["Staat"] }, translation: { purple: ["valsts"] } },
          { lv: { purple: ["pilsētā"] }, de: { blue: ["Stadt"] }, example: { blue: ["Stadt"] }, translation: { purple: ["veikali"] } },
          { lv: { purple: ["valstīs"] }, de: { green: ["Staaten"] }, example: { green: ["Staaten"] }, translation: { purple: ["valstis"] } },
        ],
        importantComparison: [
          { blue: ["Stadt"], purple: ["pilsēta"] },
          { green: ["Staat"], purple: ["valsts"] },
        ],
        tip: {
          left: { blue: ["Stadt"], green: ["Staat"] },
          rightItems: [
            { de: { blue: ["Stadt"] }, lv: { purple: ["pilsētā"] } },
            { de: { green: ["Staat"] }, lv: { purple: ["valsts"] } },
          ],
        },
        important: [
          { blue: ["Stadt"], green: ["Staat"] },
          { red: ["die Staat"] },
        ],
        mistakes: [
          { wrong: { red: ["Staat"] }, right: { blue: ["Stadt"] } },
          { wrong: { red: ["die Staat"] }, right: { green: ["der Staat"] } },
        ],
        remember: [
          { blue: ["Stadt"] },
          { green: ["Staat", "Staaten"] },
        ],
      },
    },
  },
  {
    de: "Uhr • Zeit",
    lv: "Pulkstenis • Laiks",
    level: "A1",
    study: {
      id: "compare-uhr-zeit",
      layout: "comparisonStudy",
      title: "Pulkstenis • Laiks",
      subtitle: "die Uhr • die Zeit",
      lead: "die Uhr ir pulkstenis; die Zeit ir laiks kā jēdziens.",
      explanation:
        "die Uhr nozīmē pulksteni — ierīci vai laiku pulkstenī (Es ist acht Uhr, meine Uhr). die Zeit ir abstrakts jēdziens — laiks, brīdis vai iespēja (Ich habe keine Zeit). A1 līmenī abi bieži, bet nozīme ir atšķirīga.",
      words: [
        {
          icon: "🕐",
          lv: "pulkstenis",
          de: "die Uhr",
          description: "Pulkstenis vai rokas pulkstenis. Arī laiks pulkstenī: Es ist acht Uhr.",
          example: "Es ist acht Uhr. = Ir astoņi (pulksten astoņi).",
        },
        {
          icon: "⏳",
          lv: "laiks",
          de: "die Zeit",
          description: "Laiks kā jēdziens — brīdis, iespēja, laika posms.",
          example: "Ich habe keine Zeit. = Man nav laika.",
        },
      ],
      examples: [
        { de: "Es ist acht Uhr.", lv: "ir astoņi (pulksten astoņi)." },
        { de: "Wie spät ist es? — Es ist halb neun.", lv: "cik pulksten ir? — ir pusdeviņi." },
        { de: "Meine Uhr ist kaputt.", lv: "mans pulkstenis ir salūzis." },
        { de: "Ich habe keine Zeit.", lv: "man nav laika." },
        { de: "Hast du Zeit?", lv: "vai tev ir laiks?" },
        { de: "Die Zeit vergeht schnell.", lv: "laiks paiet ātri." },
      ],
      comparisonTable: [
        {
          lv: "pulkstenis",
          de: "die Uhr",
          meaning: "ierīce vai laiks pulkstenī",
          describes: "konkrēts laiks",
          example: "Es ist acht Uhr.",
          translation: "ir astoņi.",
        },
        {
          lv: "laiks",
          de: "die Zeit",
          meaning: "brīdis, iespēja",
          describes: "abstrakts jēdziens",
          example: "Ich habe keine Zeit.",
          translation: "man nav laika.",
        },
        {
          lv: "pulksten",
          de: "um acht Uhr",
          meaning: "precīzs laiks",
          describes: "um + Uhr",
          example: "Wir essen um zwölf Uhr.",
          translation: "mēs ēdam pulksten divpadsmit.",
        },
        {
          lv: "laiks paiet",
          de: "die Zeit vergeht",
          meaning: "laiks iet",
          describes: "abstrakts",
          example: "Die Zeit vergeht schnell.",
          translation: "laiks paiet ātri.",
        },
      ],
      importantComparison: [
        "Es ist acht Uhr. = Ir astoņi (pulksten).",
        "Ich habe keine Zeit. = Man nav laika.",
        "die Uhr = ierīce/laiks pulkstenī; die Zeit = laiks kopumā.",
      ],
      tip: {
        left: "Konkrēts laiks pulkstenī: Uhr (Es ist acht Uhr). Brīvā laika vai iespējas: Zeit (keine Zeit).",
        rightTitle: "ātri",
        rightItems: [
          { de: "acht Uhr", lv: "astoņi", separator: "=" },
          { de: "keine Zeit", lv: "nav laika", separator: "=" },
        ],
      },
      important: [
        "Es ist ... Uhr — vienmēr ar Uhr, ne ar Zeit.",
        "keine Zeit, viel Zeit — ar Zeit, ne ar Uhr.",
        "die Uhr: ierīce (meine Uhr) vai laiks (acht Uhr).",
      ],
      mistakes: [
        { wrong: "Es ist acht Zeit.", right: "Es ist acht Uhr." },
        { wrong: "Ich habe keine Uhr.", right: "Ich habe keine Zeit." },
      ],
      remember: [
        "Pulkstenis/laiks pulkstenī: die Uhr.",
        "Laiks kā jēdziens: die Zeit.",
      ],
      sectionAccents: {
        lead: { blue: ["Uhr"], yellow: ["Zeit"], purple: ["pulkstenis", "laiks"] },
        comparisonCards: [
          {
            lv: { purple: ["pulkstenis"] },
            de: { blue: ["Uhr"] },
            example: { blue: ["Uhr"], purple: ["astoņi"] },
          },
          {
            lv: { purple: ["laiks"] },
            de: { yellow: ["Zeit"] },
            example: { yellow: ["Zeit"], purple: ["laika"] },
          },
        ],
        examples: [
          { de: { blue: ["Uhr"] }, lv: { purple: ["astoņi"] } },
          { de: { blue: ["Uhr"] }, lv: { purple: ["pulksten"] } },
          { de: { blue: ["Uhr"] }, lv: { purple: ["pulkstenis", "salūzis"] } },
          { de: { yellow: ["Zeit"] }, lv: { purple: ["laika"] } },
          { de: { yellow: ["Zeit"] }, lv: { purple: ["laiks"] } },
          { de: { yellow: ["Zeit"] }, lv: { purple: ["laiks", "ātri"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["pulkstenis"] }, de: { blue: ["Uhr"] }, example: { blue: ["Uhr"] }, translation: { purple: ["astoņi"] } },
          { lv: { purple: ["laiks"] }, de: { yellow: ["Zeit"] }, example: { yellow: ["Zeit"] }, translation: { purple: ["laika"] } },
          { lv: { purple: ["pulksten"] }, de: { blue: ["Uhr"] }, example: { blue: ["Uhr"] }, translation: { purple: ["divpadsmit"] } },
          { lv: { purple: ["laiks paiet"] }, de: { yellow: ["Zeit"] }, example: { yellow: ["Zeit"] }, translation: { purple: ["ātri"] } },
        ],
        importantComparison: [
          { blue: ["Uhr"], purple: ["astoņi"] },
          { yellow: ["Zeit"], purple: ["laika"] },
        ],
        tip: {
          left: { blue: ["Uhr"], yellow: ["Zeit"] },
          rightItems: [
            { de: { blue: ["Uhr"] }, lv: { purple: ["astoņi"] } },
            { de: { yellow: ["Zeit"] }, lv: { purple: ["laika"] } },
          ],
        },
        important: [
          { blue: ["Uhr"], yellow: ["Zeit"] },
          { red: ["acht Zeit", "keine Uhr"] },
        ],
        mistakes: [
          { wrong: { red: ["Zeit"] }, right: { blue: ["Uhr"] } },
          { wrong: { red: ["Uhr"] }, right: { yellow: ["Zeit"] } },
        ],
        remember: [
          { blue: ["Uhr"] },
          { yellow: ["Zeit"] },
        ],
      },
    },
  },
];

function serializeWords(words) {
  const lines = ["const A1_WORDS = ["];
  for (const w of words) {
    lines.push("    " + JSON.stringify(w, null, 2).replace(/\n/g, "\n    ") + ",");
  }
  lines.push("];", "", "window.A1_WORDS = A1_WORDS;");
  return lines.join("\n");
}

function integrate(filePath) {
  const win = {};
  vm.runInContext(fs.readFileSync(filePath, "utf8"), vm.createContext({ window: win }));
  const words = win.A1_WORDS || [];
  const removed = [];
  const filtered = words.filter((w) => {
    if (REMOVE_DE.has(w.de)) {
      removed.push(w.de);
      return false;
    }
    return true;
  });

  const existingIds = new Set(filtered.filter((w) => w.study?.id).map((w) => w.study.id));
  const toAdd = NEW_CARDS.filter((c) => !existingIds.has(c.study.id));

  const result = [...filtered, ...toAdd];
  fs.writeFileSync(filePath, serializeWords(result), "utf8");
  return { removed, added: toAdd.map((c) => c.study.id), total: result.length };
}

for (const rel of targets) {
  const stats = integrate(path.join(root, rel));
  console.log(`${rel}: removed [${stats.removed.join(", ")}], added [${stats.added.join(", ")}], total ${stats.total}`);
}
