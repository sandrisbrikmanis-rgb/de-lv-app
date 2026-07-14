/**
 * Integrate 3 B2 comparisonStudy cards and remove replaced base entries.
 * Usage: node scripts/integrate-b2-comparison-cards.js
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const targets = ["data/b2.js", "www/data/b2.js"];

const REMOVE_DE = new Set([
  "ändern",
  "wechseln",
  "bieten",
  "anbieten",
  "fordern",
  "fördern",
]);

const NEW_CARDS = [
  {
    de: "ändern • wechseln",
    lv: "Mainīt • Samainīt",
    level: "B2",
    study: {
      id: "compare-aendern-wechseln",
      layout: "comparisonStudy",
      title: "Mainīt • Samainīt",
      subtitle: "ändern • wechseln",
      lead: "ändern nozīmē mainīt vai labot konkrētu lietu; wechseln nozīmē samainīt vai nomainīt pret citu. Tie NAV sinonīmi.",
      explanation:
        "ändern lieto, kad maina plānu, termiņu, adresi vai kādu detaļu. wechseln lieto, kad kaut ko samaina vai nomaina pret citu — naudu, drēbes, darbu, skolu vai tēmu. B2 līmenī abi ir bieži, bet konteksts ir atšķirīgs.",
      words: [
        {
          icon: "✏️",
          lv: "mainīt • labot",
          de: "ändern",
          description:
            "Mainīt konkrētu lietu vai informāciju — plānu, termiņu, adresi, lēmumu.",
          example: "Ich ändere den Termin. = Es mainu termiņu.",
        },
        {
          icon: "🔄",
          lv: "samainīt • nomainīt",
          de: "wechseln",
          description:
            "Samainīt vai nomainīt kaut ko pret citu — naudu, drēbes, darbu, skolu, tēmu.",
          example: "Ich wechsle die Schule. = Es mainu skolu.",
        },
      ],
      examples: [
        { de: "Ich ändere den Termin.", lv: "es mainu termiņu." },
        { de: "Kannst du die Adresse ändern?", lv: "vai vari mainīt adresi?" },
        { de: "Wir ändern unseren Plan.", lv: "mēs mainām savu plānu." },
        { de: "Ich muss Geld wechseln.", lv: "man jāsamaina nauda." },
        { de: "Sie wechselt die Schule.", lv: "viņa maina skolu." },
        { de: "Wir wechseln das Thema.", lv: "mēs mainām tēmu." },
      ],
      comparisonTable: [
        {
          lv: "mainīt",
          de: "ändern",
          meaning: "labot vai mainīt detaļu",
          describes: "konkrētu lietu",
          example: "Ich ändere den Termin.",
          translation: "es mainu termiņu.",
        },
        {
          lv: "samainīt",
          de: "wechseln",
          meaning: "nomainīt pret citu",
          describes: "apmaiņu / maiņu",
          example: "Ich wechsle die Schule.",
          translation: "es mainu skolu.",
        },
        {
          lv: "mainīties",
          de: "sich ändern",
          meaning: "kļūt citādam",
          describes: "pašam mainīties",
          example: "Das Wetter ändert sich.",
          translation: "laiks mainās.",
        },
        {
          lv: "pārsēsties",
          de: "umsteigen",
          meaning: "mainīt transportu",
          describes: "transportā",
          example: "Ich steige in Berlin um.",
          translation: "es Berlīnē pārsēžos.",
        },
        {
          lv: "mainīt būtiskāk",
          de: "verändern",
          meaning: "būtiski mainīt",
          describes: "situāciju / dzīvi",
          example: "Das verändert alles.",
          translation: "tas maina visu.",
        },
        {
          lv: "apmainīt preci",
          de: "umtauschen",
          meaning: "atdot un saņemt citu",
          describes: "veikalā",
          example: "Ich tausche die Jacke um.",
          translation: "es apmainu jaku.",
        },
      ],
      importantComparison: [
        "Ich ändere den Termin. = Es mainu termiņu.",
        "Ich wechsle die Schule. = Es mainu skolu.",
        "ändern = mainīt detaļu; wechseln = samainīt / nomainīt pret citu.",
      ],
      tip: {
        left: "Ja maina plānu, termiņu vai adresi, lieto ändern. Ja samaina naudu, drēbes, darbu vai tēmu, lieto wechseln.",
        rightTitle: "ātri",
        rightItems: [
          { de: "Ich ändere den Plan.", lv: "es mainu plānu.", separator: "=" },
          { de: "Ich wechsle Geld.", lv: "es samainu naudu.", separator: "=" },
        ],
      },
      important: [
        "ändern = mainīt konkrētu lietu (Termin, Adresse, Plan).",
        "wechseln = samainīt vai nomainīt pret citu (Geld, Schule, Thema).",
        "Ich wechsle den Termin nav pareizi — pareizi: Ich ändere den Termin.",
      ],
      mistakes: [
        { wrong: "Ich wechsle den Termin.", right: "Ich ändere den Termin." },
        { wrong: "Ich ändere die Schule.", right: "Ich wechsle die Schule." },
      ],
      remember: [
        "Plāns, termiņš, adrese: ändern.",
        "Nauda, skola, darbs, tēma: wechseln.",
      ],
      sectionAccents: {
        lead: { blue: ["ändern"], green: ["wechseln"], purple: ["mainīt", "samainīt"] },
        comparisonCards: [
          {
            lv: { purple: ["mainīt", "labot"] },
            de: { blue: ["ändern"] },
            example: { blue: ["ändere"], purple: ["mainu"] },
          },
          {
            lv: { purple: ["samainīt", "nomainīt"] },
            de: { green: ["wechseln"] },
            example: { green: ["wechsle"], purple: ["mainu"] },
          },
        ],
        examples: [
          { de: { blue: ["ändere"] }, lv: { purple: ["mainu"] } },
          { de: { blue: ["ändern"] }, lv: { purple: ["mainīt"] } },
          { de: { blue: ["ändern"] }, lv: { purple: ["mainām"] } },
          { de: { green: ["wechseln"] }, lv: { purple: ["samaina"] } },
          { de: { green: ["wechselt"] }, lv: { purple: ["maina"] } },
          { de: { green: ["wechseln"] }, lv: { purple: ["mainām"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["mainīt"] }, de: { blue: ["ändern"] }, example: { blue: ["ändere"] }, translation: { purple: ["mainu"] } },
          { lv: { purple: ["samainīt"] }, de: { green: ["wechseln"] }, example: { green: ["wechsle"] }, translation: { purple: ["mainu"] } },
          { lv: { purple: ["mainīties"] }, de: { blue: ["sich ändern"] }, example: { blue: ["ändert sich"] }, translation: { purple: ["mainās"] } },
          { lv: { purple: ["pārsēsties"] }, de: { orange: ["umsteigen"] }, example: { orange: ["steige um"] }, translation: { purple: ["pārsēžos"] } },
          { lv: { purple: ["mainīt būtiskāk"] }, de: { red: ["verändern"] }, example: { red: ["verändert"] }, translation: { purple: ["maina"] } },
          { lv: { purple: ["apmainīt"] }, de: { yellow: ["umtauschen"] }, example: { yellow: ["tausche um"] }, translation: { purple: ["apmainu"] } },
        ],
        importantComparison: [
          { blue: ["ändere"], purple: ["mainu"] },
          { green: ["wechsle"], purple: ["mainu"] },
          { blue: ["ändern"], green: ["wechseln"] },
        ],
        tip: {
          left: { blue: ["ändern"], green: ["wechseln"] },
          rightItems: [
            { de: { blue: ["ändere"] }, lv: { purple: ["mainu"] } },
            { de: { green: ["wechsle"] }, lv: { purple: ["samainu"] } },
          ],
        },
        important: [
          { blue: ["ändern"] },
          { green: ["wechseln"] },
          { green: ["wechsle"], blue: ["ändere"] },
        ],
        mistakes: [
          { wrong: { green: ["wechsle"] }, right: { blue: ["ändere"] } },
          { wrong: { blue: ["ändere"] }, right: { green: ["wechsle"] } },
        ],
        remember: [
          { blue: ["ändern"] },
          { green: ["wechseln"] },
        ],
      },
    },
  },
  {
    de: "bieten • anbieten",
    lv: "Piedāvāt • Sniegt iespēju",
    level: "B2",
    study: {
      id: "compare-bieten-anbieten",
      layout: "comparisonStudy",
      title: "Piedāvāt • Sniegt iespēju",
      subtitle: "bieten • anbieten",
      lead: "bieten nozīmē piedāvāt vai sniegt iespēju; anbieten nozīmē aktīvi piedāvāt kādam konkrēti. Tie NAV sinonīmi.",
      explanation:
        "bieten bieži apraksta, ko vieta, programma vai pakalpojums sniedz (Die Schule bietet viele Kurse). anbieten ir atdalāms darbības vārds un uzsver aktīvu piedāvāšanu konkrētai personai (Ich biete dir Hilfe an). B2 līmenī abi ir bieži jautājumos par darbu, pakalpojumiem un iespējām.",
      words: [
        {
          icon: "🏫",
          lv: "piedāvāt • sniegt",
          de: "bieten",
          description:
            "Piedāvāt iespējas, kursus, pakalpojumus vai labumu — ko vieta vai programma sniedz.",
          example: "Die Schule bietet viele Kurse. = Skola piedāvā daudz kursu.",
        },
        {
          icon: "🤝",
          lv: "piedāvāt aktīvi",
          de: "anbieten",
          description:
            "Aktīvi piedāvāt kādam konkrēti — palīdzību, dzērienu, darbu vai pakalpojumu.",
          example: "Ich biete dir meine Hilfe an. = Es tev piedāvāju savu palīdzību.",
        },
      ],
      examples: [
        { de: "Die Schule bietet viele Kurse.", lv: "skola piedāvā daudz kursu." },
        { de: "Das Hotel bietet einen schönen Blick.", lv: "viesnīca sniedz skaistu skatu." },
        { de: "Das Programm bietet viele Möglichkeiten.", lv: "programma sniedz daudz iespēju." },
        { de: "Ich biete dir meine Hilfe an.", lv: "es tev piedāvāju savu palīdzību." },
        { de: "Darf ich Ihnen etwas anbieten?", lv: "vai drīkstu jums kaut ko piedāvāt?" },
        { de: "Die Firma bietet neue Jobs an.", lv: "uzņēmums piedāvā jaunas darba vietas." },
      ],
      comparisonTable: [
        {
          lv: "piedāvāt",
          de: "bieten",
          meaning: "sniegt iespēju / labumu",
          describes: "ko vieta/programma dod",
          example: "Die Schule bietet viele Kurse.",
          translation: "skola piedāvā daudz kursu.",
        },
        {
          lv: "piedāvāt aktīvi",
          de: "anbieten",
          meaning: "aktīvi piedāvāt kādam",
          describes: "atdalāms darbības vārds",
          example: "Ich biete dir Hilfe an.",
          translation: "es tev piedāvāju palīdzību.",
        },
        {
          lv: "dot",
          de: "geben",
          meaning: "nodot kādam",
          describes: "tieša dāvana",
          example: "Ich gebe dir Geld.",
          translation: "es tev dodu naudu.",
        },
        {
          lv: "piedāvājums",
          de: "das Angebot",
          meaning: "piedāvājums kā lietvārds",
          describes: "lietvārds (Sg.)",
          example: "Das ist ein gutes Angebot.",
          translation: "tā ir laba piedāvājuma cena.",
        },
        {
          lv: "nodrošināt",
          de: "bieten",
          meaning: "nodrošināt iespēju",
          describes: "formālāk",
          example: "Die App bietet Sicherheit.",
          translation: "lietotne nodrošina drošību.",
        },
        {
          lv: "uzdot jautājumu",
          de: "anbieten?",
          meaning: "piedāvāt sarunā",
          describes: " Höflichkeitsformel",
          example: "Darf ich Ihnen etwas anbieten?",
          translation: "vai drīkstu jums kaut ko piedāvāt?",
        },
      ],
      importantComparison: [
        "Die Schule bietet Kurse. = Skola piedāvā kursus.",
        "Ich biete dir Hilfe an. = Es tev piedāvāju palīdzību.",
        "bieten = ko kaut kas sniedz; anbieten = aktīva piedāvāšana kādam.",
      ],
      tip: {
        left: "Ja runa ir par iespējām, kursiem vai skatu, ko vieta sniedz, lieto bieten. Ja aktīvi piedāvā kādam, lieto anbieten.",
        rightTitle: "ātri",
        rightItems: [
          { de: "Die Schule bietet...", lv: "skola piedāvā...", separator: "=" },
          { de: "Ich biete ... an.", lv: "es piedāvāju...", separator: "=" },
        ],
      },
      important: [
        "bieten: Die Schule bietet Kurse. (nesadalāms)",
        "anbieten: Ich biete dir Hilfe an. (atdalāms: biete ... an)",
        "Ich biete an dir nav pareizi — pareizi: Ich biete dir ... an.",
      ],
      mistakes: [
        { wrong: "Ich biete an dir Hilfe.", right: "Ich biete dir Hilfe an." },
        { wrong: "Die Schule bietet an Kurse.", right: "Die Schule bietet Kurse an." },
      ],
      remember: [
        "Ko vieta/programma sniedz: bieten.",
        "Aktīva piedāvāšana kādam: anbieten → biete ... an.",
      ],
      sectionAccents: {
        lead: { blue: ["bieten"], green: ["anbieten"], purple: ["piedāvāt", "sniegt"] },
        comparisonCards: [
          {
            lv: { purple: ["piedāvāt", "sniegt"] },
            de: { blue: ["bieten"] },
            example: { blue: ["bietet"], purple: ["piedāvā"] },
          },
          {
            lv: { purple: ["piedāvāt aktīvi"] },
            de: { green: ["anbieten", "biete", "an"] },
            example: { green: ["biete", "an"], purple: ["piedāvāju"] },
          },
        ],
        examples: [
          { de: { blue: ["bietet"] }, lv: { purple: ["piedāvā"] } },
          { de: { blue: ["bietet"] }, lv: { purple: ["sniedz"] } },
          { de: { blue: ["bietet"] }, lv: { purple: ["sniedz"] } },
          { de: { green: ["biete", "an"] }, lv: { purple: ["piedāvāju"] } },
          { de: { green: ["anbieten"] }, lv: { purple: ["piedāvāt"] } },
          { de: { green: ["bietet", "an"] }, lv: { purple: ["piedāvā"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["piedāvāt"] }, de: { blue: ["bieten"] }, example: { blue: ["bietet"] }, translation: { purple: ["piedāvā"] } },
          { lv: { purple: ["piedāvāt aktīvi"] }, de: { green: ["anbieten"] }, example: { green: ["biete", "an"] }, translation: { purple: ["piedāvāju"] } },
          { lv: { purple: ["dot"] }, de: { yellow: ["geben"] }, example: { yellow: ["gebe"] }, translation: { purple: ["dodu"] } },
          { lv: { purple: ["piedāvājums"] }, de: { orange: ["Angebot"] }, example: { orange: ["Angebot"] }, translation: { purple: ["piedāvājuma"] } },
          { lv: { purple: ["nodrošināt"] }, de: { blue: ["bietet"] }, example: { blue: ["bietet"] }, translation: { purple: ["nodrošina"] } },
          { lv: { purple: ["piedāvāt"] }, de: { green: ["anbieten"] }, example: { green: ["anbieten"] }, translation: { purple: ["piedāvāt"] } },
        ],
        importantComparison: [
          { blue: ["bietet"], purple: ["piedāvā"] },
          { green: ["biete", "an"], purple: ["piedāvāju"] },
          { blue: ["bieten"], green: ["anbieten"] },
        ],
        tip: {
          left: { blue: ["bieten"], green: ["anbieten"] },
          rightItems: [
            { de: { blue: ["bietet"] }, lv: { purple: ["piedāvā"] } },
            { de: { green: ["biete", "an"] }, lv: { purple: ["piedāvāju"] } },
          ],
        },
        important: [
          { blue: ["bieten"] },
          { green: ["anbieten", "biete", "an"] },
          { green: ["biete"], blue: ["an"] },
        ],
        mistakes: [
          { wrong: { green: ["biete an"] }, right: { green: ["biete", "an"] } },
          { wrong: { green: ["bietet an"] }, right: { blue: ["bietet"] } },
        ],
        remember: [
          { blue: ["bieten"] },
          { green: ["anbieten"] },
        ],
      },
    },
  },
  {
    de: "fordern • fördern",
    lv: "Pieprasīt • Veicināt",
    level: "B2",
    study: {
      id: "compare-fordern-foerdern",
      layout: "comparisonStudy",
      title: "Pieprasīt • Veicināt",
      subtitle: "fordern • fördern",
      lead: "fordern nozīmē pieprasīt vai prasīt; fördern nozīmē veicināt, atbalstīt vai attīstīt. Tie NAV sinonīmi — atšķiras ar ö.",
      explanation:
        "fordern lieto, kad kāds prasa naudu, tiesības, izmaiņas vai pienākumu (Sie fordert mehr Geld). fördern nozīmē veicināt attīstību, atbalstīt cilvēku vai projektu (Sport fördert die Gesundheit). Rūpniecībā fördern arī nozīmē iegūt derīgos izrakteņus. B2 līmenī šī pārī visbiežāk jauc eksāmenos.",
      words: [
        {
          icon: "✊",
          lv: "pieprasīt • prasīt",
          de: "fordern",
          description:
            "Pieprasīt naudu, tiesības, izmaiņas vai pienākumu — aktīva prasība.",
          example: "Sie fordert mehr Geld. = Viņa prasa vairāk naudas.",
        },
        {
          icon: "📈",
          lv: "veicināt • atbalstīt",
          de: "fördern",
          description:
            "Veicināt attīstību, atbalstīt cilvēku, projektu vai procesu.",
          example: "Sport fördert die Gesundheit. = Sports veicina veselību.",
        },
      ],
      examples: [
        { de: "Sie fordert mehr Geld.", lv: "viņa prasa vairāk naudas." },
        { de: "Die Gewerkschaft fordert bessere Bedingungen.", lv: "arodbiedrība pieprasa labākus apstākļus." },
        { de: "Wir fordern mehr Transparenz.", lv: "mēs pieprasām lielāku caurskatāmību." },
        { de: "Sport fördert die Gesundheit.", lv: "sports veicina veselību." },
        { de: "Die Schule fördert begabte Kinder.", lv: "skola atbalsta apdāvinātus bērnus." },
        { de: "In der Region wird Öl gefördert.", lv: "reģionā iegūst naftu." },
      ],
      comparisonTable: [
        {
          lv: "pieprasīt",
          de: "fordern",
          meaning: "prasīt / pieprasīt",
          describes: "aktīva prasība",
          example: "Sie fordert mehr Geld.",
          translation: "viņa prasa vairāk naudas.",
        },
        {
          lv: "veicināt",
          de: "fördern",
          meaning: "veicināt attīstību",
          describes: "atbalsts / progress",
          example: "Sport fördert die Gesundheit.",
          translation: "sports veicina veselību.",
        },
        {
          lv: "atbalstīt",
          de: "unterstützen",
          meaning: "atbalstīt projektu",
          describes: "palīdzība",
          example: "Wir unterstützen das Projekt.",
          translation: "mēs atbalstām projektu.",
        },
        {
          lv: "iegūt (naftu)",
          de: "fördern",
          meaning: "iegūt derīgos izrakteņus",
          describes: "rūpniecībā",
          example: "In der Region wird Öl gefördert.",
          translation: "reģionā iegūst naftu.",
        },
        {
          lv: "prasīt pienākumu",
          de: "fordern",
          meaning: "pieprasīt standartu",
          describes: "formāli",
          example: "Wir fordern mehr Sicherheit.",
          translation: "mēs pieprasām lielāku drošību.",
        },
        {
          lv: "attīstīt",
          de: "fördern",
          meaning: "attīstīt talantu",
          describes: "izglītībā",
          example: "Die Schule fördert begabte Kinder.",
          translation: "skola atbalsta apdāvinātus bērnus.",
        },
      ],
      importantComparison: [
        "Sie fordert mehr Geld. = Viņa prasa vairāk naudas.",
        "Sport fördert die Gesundheit. = Sports veicina veselību.",
        "fordern = prasīt; fördern = veicināt — atceries ö!",
      ],
      tip: {
        left: "Ja kāds prasa naudu, tiesības vai izmaiņas, lieto fordern. Ja kaut kas veicina attīstību vai atbalsta, lieto fördern.",
        rightTitle: "ātri",
        rightItems: [
          { de: "fordert", lv: "prasa", separator: "=" },
          { de: "fördert", lv: "veicina", separator: "=" },
        ],
      },
      important: [
        "fordern = pieprasīt / prasīt (bez ö).",
        "fördern = veicināt / atbalstīt (ar ö).",
        "Nejauc: Ich förde mehr Geld nav pareizi — pareizi: Ich fordere mehr Geld.",
      ],
      mistakes: [
        { wrong: "Sie fördert mehr Geld.", right: "Sie fordert mehr Geld." },
        { wrong: "Sport fordert die Gesundheit.", right: "Sport fördert die Gesundheit." },
      ],
      remember: [
        "Prasība, pieprasījums: fordern (bez ö).",
        "Veicināšana, atbalsts: fördern (ar ö).",
      ],
      sectionAccents: {
        lead: { blue: ["fordern"], green: ["fördern"], purple: ["pieprasīt", "veicināt"] },
        comparisonCards: [
          {
            lv: { purple: ["pieprasīt", "prasīt"] },
            de: { blue: ["fordern"] },
            example: { blue: ["fordert"], purple: ["prasa"] },
          },
          {
            lv: { purple: ["veicināt", "atbalstīt"] },
            de: { green: ["fördern"] },
            example: { green: ["fördert"], purple: ["veicina"] },
          },
        ],
        examples: [
          { de: { blue: ["fordert"] }, lv: { purple: ["prasa"] } },
          { de: { blue: ["fordert"] }, lv: { purple: ["pieprasa"] } },
          { de: { blue: ["fordern"] }, lv: { purple: ["pieprasām"] } },
          { de: { green: ["fördert"] }, lv: { purple: ["veicina"] } },
          { de: { green: ["fördert"] }, lv: { purple: ["atbalsta"] } },
          { de: { green: ["gefördert"] }, lv: { purple: ["iegūst"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["pieprasīt"] }, de: { blue: ["fordern"] }, example: { blue: ["fordert"] }, translation: { purple: ["prasa"] } },
          { lv: { purple: ["veicināt"] }, de: { green: ["fördern"] }, example: { green: ["fördert"] }, translation: { purple: ["veicina"] } },
          { lv: { purple: ["atbalstīt"] }, de: { yellow: ["unterstützen"] }, example: { yellow: ["unterstützen"] }, translation: { purple: ["atbalstām"] } },
          { lv: { purple: ["iegūt"] }, de: { green: ["gefördert"] }, example: { green: ["gefördert"] }, translation: { purple: ["iegūst"] } },
          { lv: { purple: ["pieprasīt"] }, de: { blue: ["fordern"] }, example: { blue: ["fordern"] }, translation: { purple: ["pieprasām"] } },
          { lv: { purple: ["attīstīt"] }, de: { green: ["fördert"] }, example: { green: ["fördert"] }, translation: { purple: ["atbalsta"] } },
        ],
        importantComparison: [
          { blue: ["fordert"], purple: ["prasa"] },
          { green: ["fördert"], purple: ["veicina"] },
          { blue: ["fordern"], green: ["fördern"] },
        ],
        tip: {
          left: { blue: ["fordern"], green: ["fördern"] },
          rightItems: [
            { de: { blue: ["fordert"] }, lv: { purple: ["prasa"] } },
            { de: { green: ["fördert"] }, lv: { purple: ["veicina"] } },
          ],
        },
        important: [
          { blue: ["fordern"] },
          { green: ["fördern"] },
          { blue: ["fordert"], green: ["fördert"] },
        ],
        mistakes: [
          { wrong: { green: ["fördert"] }, right: { blue: ["fordert"] } },
          { wrong: { blue: ["fordert"] }, right: { green: ["fördert"] } },
        ],
        remember: [
          { blue: ["fordern"] },
          { green: ["fördern"] },
        ],
      },
    },
  },
];

function repairJson(json) {
  let prev;
  do {
    prev = json;
    json = json.replace(/,(\s*[\]}])/g, "$1");
  } while (prev !== json);
  return json;
}

function extractArray(code) {
  const start = code.indexOf("[");
  let depth = 0;
  let inStr = false;
  let esc = false;
  for (let i = start; i < code.length; i++) {
    const ch = code[i];
    if (inStr) {
      if (esc) {
        esc = false;
        continue;
      }
      if (ch === "\\") {
        esc = true;
        continue;
      }
      if (ch === '"') inStr = false;
      continue;
    }
    if (ch === '"') {
      inStr = true;
      continue;
    }
    if (ch === "[") depth++;
    else if (ch === "]") {
      depth--;
      if (depth === 0) return code.slice(start, i + 1);
    }
  }
  throw new Error("Unterminated JSON array");
}

function loadWords(filePath) {
  const code = fs.readFileSync(path.join(root, filePath), "utf8");
  return JSON.parse(repairJson(extractArray(code)));
}

function serializeWords(words) {
  const lines = ["const B2_WORDS = ["];
  for (const w of words) {
    lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  }
  lines.push("];", "", "window.B2_WORDS = B2_WORDS;");
  return lines.join("\n");
}

function main() {
  for (const target of targets) {
    const filePath = path.join(root, target);
    let words = loadWords(target);

    const before = words.length;
    words = words.filter((w) => !REMOVE_DE.has(w.de));
    const removed = before - words.length;

    const existingIds = new Set(
      words.filter((w) => w.study?.id).map((w) => w.study.id)
    );
    const toAdd = NEW_CARDS.filter((c) => !existingIds.has(c.study.id));
    words.push(...toAdd);

    fs.writeFileSync(filePath, serializeWords(words), "utf8");
    console.log(`${target}: removed ${removed} base entries, added ${toAdd.length} comparison cards`);
  }
}

main();
