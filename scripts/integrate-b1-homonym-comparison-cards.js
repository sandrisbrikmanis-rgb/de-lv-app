/**
 * Integrate 4 B1 homonym comparisonStudy cards and split non-critical merged entries.
 * Usage: node scripts/integrate-b1-homonym-comparison-cards.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const targets = ["data/b1.js", "www/data/b1.js"];

const REMOVE_DE = new Set(["Erbe", "Schaden", "Vertrauen", "Trotz"]);

const SPLIT_REPLACEMENTS = {
  Ringen: [
    { de: "ringen", lv: "cīnīties", level: "B1" },
    { de: "Ringen", de_article: "das", lv: "cīņa", level: "B1" },
  ],
  Rudern: [
    { de: "rudern", lv: "airēt", level: "B1" },
    { de: "Rudern", de_article: "das", lv: "airēšana", level: "B1" },
  ],
  Gehorsam: [
    { de: "gehorsam", lv: "paklausīgs", level: "B1" },
    { de: "Gehorsam", de_article: "der", lv: "paklausība", level: "B1" },
  ],
  Feige: [
    { de: "Feige", de_article: "die", de_plural: "die Feigen", lv: "vīģe", level: "B1" },
    { de: "feige", lv: "gļēvs", level: "B1" },
  ],
  Tau: [
    { de: "Tau", de_article: "der", de_plural: "die Taue", lv: "rasa", level: "B1" },
    { de: "Tau", de_article: "das", de_plural: "die Taue", lv: "kuģa tauva", level: "B1" },
  ],
  Unrecht: [
    { de: "Unrecht", de_article: "das", lv: "netaisnība", level: "B1" },
    { de: "unrecht", lv: "nepareizs", level: "B1" },
  ],
};

const NEW_CARDS = [
  {
    de: "der Erbe • das Erbe",
    lv: "Mantinieks • Mantojums",
    level: "B1",
    study: {
      id: "compare-der-erbe-das-erbe",
      layout: "comparisonStudy",
      title: "Mantinieks • Mantojums",
      subtitle: "der Erbe • das Erbe",
      lead: "der Erbe ir cilvēks; das Erbe ir lieta — mantojums. Artikuls maina nozīmi.",
      explanation:
        "der Erbe nozīmē mantinieku — personu, kas saņem mantojumu. das Erbe nozīmē pašu mantojumu kā lietu vai vērtību. Vācu valodā dzimte nosaka, vai runa ir par cilvēku vai par mantojumu.",
      words: [
        {
          icon: "👤",
          lv: "mantinieks",
          de: "der Erbe",
          description: "Cilvēks, kas mantojumā saņem īpašumu vai naudu.",
          example: "Er ist der Erbe seines Onkels. = Viņš ir savas onkļa mantinieks.",
        },
        {
          icon: "📜",
          lv: "mantojums",
          de: "das Erbe",
          description: "Mantojums kā lieta, īpašums vai vērtība, ko atstāj.",
          example: "Das Erbe ist sehr groß. = Mantojums ir ļoti liels.",
        },
      ],
      examples: [
        { de: "Er ist der Erbe seines Onkels.", lv: "viņš ir savas onkļa mantinieks." },
        { de: "Die Erbin lebt in Berlin.", lv: "mantiniece dzīvo Berlīnē." },
        { de: "Das Erbe besteht aus einem Haus.", lv: "mantojums sastāv no mājas." },
        { de: "Sie hat ein großes Erbe bekommen.", lv: "viņa saņēma lielu mantojumu." },
        { de: "Wer ist der Erbe?", lv: "kas ir mantinieks?" },
        { de: "Das Erbe wird geteilt.", lv: "mantojums tiek sadalīts." },
      ],
      comparisonTable: [
        {
          lv: "mantinieks",
          de: "der Erbe",
          meaning: "cilvēks",
          describes: "vīriešu dzimte",
          example: "Er ist der Erbe.",
          translation: "viņš ir mantinieks.",
        },
        {
          lv: "mantiniece",
          de: "die Erbin",
          meaning: "cilvēks",
          describes: "sieviešu dzimte",
          example: "Sie ist die Erbin.",
          translation: "viņa ir mantiniece.",
        },
        {
          lv: "mantojums",
          de: "das Erbe",
          meaning: "lieta / vērtība",
          describes: "neitrālā dzimte",
          example: "Das Erbe ist groß.",
          translation: "mantojums ir liels.",
        },
        {
          lv: "saņemt",
          de: "Erbe bekommen",
          meaning: "mantojumu saņemt",
          describes: "das Erbe kontekstā",
          example: "Sie hat ein Erbe bekommen.",
          translation: "viņa saņēma mantojumu.",
        },
        {
          lv: "mantot",
          de: "erben",
          meaning: "saņemt mantojumā",
          describes: "darbības vārds",
          example: "Er erbt das Haus.",
          translation: "viņš manto māju.",
        },
        {
          lv: "artikuls",
          de: "der vs das",
          meaning: "cilvēks vs lieta",
          describes: "galvenā atšķirība",
          example: "der Erbe / das Erbe",
          translation: "mantinieks / mantojums",
        },
      ],
      importantComparison: [
        "Er ist der Erbe. = Viņš ir mantinieks.",
        "Das Erbe ist groß. = Mantojums ir liels.",
        "der Erbe = cilvēks; das Erbe = mantojums.",
      ],
      tip: {
        left: "Ja runa ir par cilvēku, lieto der Erbe vai die Erbin. Ja par mantojumu kā lietu, lieto das Erbe.",
        rightTitle: "ātri",
        rightItems: [
          { de: "der Erbe", lv: "mantinieks", separator: "=" },
          { de: "das Erbe", lv: "mantojums", separator: "=" },
        ],
      },
      important: [
        "der Erbe = cilvēks (mantinieks).",
        "das Erbe = lieta (mantojums).",
        "Nejauc: der Erbe ist groß (cilvēks) vs das Erbe ist groß (mantojums).",
      ],
      mistakes: [
        { wrong: "das Erbe wohnt in Berlin", right: "der Erbe wohnt in Berlin" },
        { wrong: "der Erbe besteht aus Geld", right: "das Erbe besteht aus Geld" },
      ],
      remember: ["der Erbe = cilvēks.", "das Erbe = mantojums."],
      sectionAccents: {
        lead: { blue: ["der Erbe"], green: ["das Erbe"], purple: ["cilvēks", "mantojums"] },
        comparisonCards: [
          { lv: { purple: ["mantinieks"] }, de: { blue: ["der Erbe", "Erbe"] }, example: { blue: ["Erbe"], purple: ["mantinieks"] } },
          { lv: { purple: ["mantojums"] }, de: { green: ["das Erbe", "Erbe"] }, example: { green: ["Erbe"], purple: ["mantojums"] } },
        ],
        examples: [
          { de: { blue: ["Erbe", "Onkels"] }, lv: { purple: ["mantinieks"] } },
          { de: { blue: ["Erbin"] }, lv: { purple: ["mantiniece"] } },
          { de: { green: ["Erbe", "Haus"] }, lv: { purple: ["mantojums", "mājas"] } },
          { de: { green: ["Erbe", "bekommen"] }, lv: { purple: ["mantojumu"] } },
          { de: { blue: ["Erbe"] }, lv: { purple: ["mantinieks"] } },
          { de: { green: ["Erbe", "geteilt"] }, lv: { purple: ["mantojums", "sadalīts"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["mantinieks"] }, de: { blue: ["der Erbe"] }, example: { blue: ["Erbe"] }, translation: { purple: ["mantinieks"] } },
          { lv: { purple: ["mantiniece"] }, de: { blue: ["die Erbin"] }, example: { blue: ["Erbin"] }, translation: { purple: ["mantiniece"] } },
          { lv: { purple: ["mantojums"] }, de: { green: ["das Erbe"] }, example: { green: ["Erbe"] }, translation: { purple: ["mantojums"] } },
          { lv: { purple: ["saņemt"] }, de: { green: ["Erbe", "bekommen"] }, example: { green: ["Erbe"] }, translation: { purple: ["mantojumu"] } },
          { lv: { purple: ["mantot"] }, de: { blue: ["erbt"] }, example: { blue: ["erbt"] }, translation: { purple: ["manto"] } },
          { lv: { purple: ["artikuls"] }, de: { blue: ["der"], green: ["das"] }, example: { blue: ["Erbe"], green: ["Erbe"] }, translation: { purple: ["mantinieks", "mantojums"] } },
        ],
        importantComparison: [
          { blue: ["der Erbe"], purple: ["mantinieks"] },
          { green: ["das Erbe"], purple: ["mantojums"] },
        ],
        tip: {
          left: { blue: ["der Erbe"], green: ["das Erbe"] },
          rightItems: [
            { de: { blue: ["der Erbe"] }, lv: { purple: ["mantinieks"] } },
            { de: { green: ["das Erbe"] }, lv: { purple: ["mantojums"] } },
          ],
        },
        important: [
          { blue: ["der Erbe"], purple: ["mantinieks"] },
          { green: ["das Erbe"], purple: ["mantojums"] },
        ],
        mistakes: [
          { wrong: { green: ["das Erbe", "wohnt"] }, right: { blue: ["der Erbe", "wohnt"] } },
          { wrong: { blue: ["der Erbe", "besteht"] }, right: { green: ["das Erbe", "besteht"] } },
        ],
        remember: [{ blue: ["der Erbe"] }, { green: ["das Erbe"] }],
      },
    },
  },
  {
    de: "der Schaden • schaden",
    lv: "Zaudējums • Kaitēt",
    level: "B1",
    study: {
      id: "compare-schaden-schaden",
      layout: "comparisonStudy",
      title: "Zaudējums • Kaitēt",
      subtitle: "der Schaden • schaden",
      lead: "der Schaden ir lietvārds (zaudējums); schaden ir darbības vārds (kaitēt) un prasa Dativ.",
      explanation:
        "der Schaden nozīmē zaudējumu, bojājumu vai kaitējumu. schaden nozīmē kaitēt, nodarīt kaitējumu. Darbības vārdam schaden obligāti jābūt Dativam: etwas schadet jemandem / der Gesundheit.",
      words: [
        {
          icon: "💥",
          lv: "zaudējums • bojājums",
          de: "der Schaden",
          description: "Lietvārds — materiāls, veselības vai citāds kaitējums.",
          example: "Am Auto ist ein Schaden. = Automašīnai ir bojājums.",
        },
        {
          icon: "⚠",
          lv: "kaitēt",
          de: "schaden",
          description: "Darbības vārds — nodarīt kaitējumu. Prasa Dativ: jemandem schaden.",
          example: "Rauchen schadet der Gesundheit. = Smēķēšana kaitē veselībai.",
        },
      ],
      examples: [
        { de: "Der Sturm verursachte großen Schaden.", lv: "vētra radīja lielus zaudējumus." },
        { de: "Am Auto ist ein Schaden.", lv: "automašīnai ir bojājums." },
        { de: "Rauchen schadet der Gesundheit.", lv: "smēķēšana kaitē veselībai." },
        { de: "Das schadet dir nicht.", lv: "tas tev nekaitē." },
        { de: "Wer zahlt den Schaden?", lv: "kas maksā par zaudējumu?" },
        { de: "Zu viel Sonne schadet der Haut.", lv: "par daudz saules kaitē ādai." },
      ],
      comparisonTable: [
        {
          lv: "zaudējums",
          de: "der Schaden",
          meaning: "kaitējums kā lieta",
          describes: "lietvārds (der)",
          example: "Der Schaden ist groß.",
          translation: "zaudējums ir liels.",
        },
        {
          lv: "kaitēt",
          de: "schaden",
          meaning: "nodarīt kaitējumu",
          describes: "darbības vārds",
          example: "Das schadet der Gesundheit.",
          translation: "tas kaitē veselībai.",
        },
        {
          lv: "Dativ",
          de: "jemandem schaden",
          meaning: "kam kaitē",
          describes: "obligāts Dativ",
          example: "Es schadet dir.",
          translation: "tas tev kaitē.",
        },
        {
          lv: "veselība",
          de: "der Gesundheit schaden",
          meaning: "kaitēt veselībai",
          describes: "Dativ formā",
          example: "Rauchen schadet der Gesundheit.",
          translation: "smēķēšana kaitē veselībai.",
        },
        {
          lv: "atlīdzināt",
          de: "Schaden ersetzen",
          meaning: "atlīdzināt zaudējumu",
          describes: "der Schaden frāzē",
          example: "Die Versicherung ersetzt den Schaden.",
          translation: "apdrošināšana atlīdzina zaudējumu.",
        },
        {
          lv: "nevis Verletzung",
          de: "Schaden vs Verletzung",
          meaning: "bojājums vs ievainojums",
          describes: "nozīmes atšķirība",
          example: "Der Schaden am Auto.",
          translation: "bojājums uz auto.",
        },
      ],
      importantComparison: [
        "Der Schaden ist groß. = Zaudējums ir liels.",
        "Rauchen schadet der Gesundheit. = Smēķēšana kaitē veselībai.",
        "schaden vienmēr ar Dativ: der Gesundheit, dir, mir.",
      ],
      tip: {
        left: "Ja runa par bojājumu vai zaudējumu kā lietu, lieto der Schaden. Ja par kaitēšanu, lieto schaden + Dativ.",
        rightTitle: "Dativ",
        rightItems: [
          { de: "der Gesundheit schaden", lv: "kaitēt veselībai", separator: "=" },
          { de: "dir schaden", lv: "tevi kaitēt", separator: "=" },
        ],
      },
      important: [
        "der Schaden = lietvārds (zaudējums).",
        "schaden = darbības vārds (kaitēt) + Dativ.",
        "schadet der Gesundheit — nevis *schadet die Gesundheit.",
      ],
      mistakes: [
        { wrong: "Rauchen schadet die Gesundheit.", right: "Rauchen schadet der Gesundheit." },
        { wrong: "Der Schaden schadet", right: "Etwas schadet der Gesundheit." },
      ],
      remember: ["der Schaden = zaudējums.", "schaden + Dativ = kaitēt."],
      sectionAccents: {
        lead: { blue: ["der Schaden"], purple: ["zaudējums"], red: ["schaden"], yellow: ["Dativ"] },
        comparisonCards: [
          { lv: { purple: ["zaudējums"] }, de: { blue: ["der Schaden", "Schaden"] }, example: { blue: ["Schaden"], purple: ["bojājums"] } },
          { lv: { purple: ["kaitēt"] }, de: { red: ["schaden", "schadet"] }, example: { red: ["schadet"], yellow: ["Gesundheit"], purple: ["kaitē"] } },
        ],
        examples: [
          { de: { blue: ["Schaden"], yellow: ["Sturm"] }, lv: { purple: ["zaudējumus"] } },
          { de: { blue: ["Schaden"], yellow: ["Auto"] }, lv: { purple: ["bojājums"] } },
          { de: { red: ["schadet"], yellow: ["Gesundheit"] }, lv: { purple: ["kaitē"] } },
          { de: { red: ["schadet"], green: ["dir"] }, lv: { purple: ["nekaitē"] } },
          { de: { blue: ["Schaden"] }, lv: { purple: ["zaudējumu"] } },
          { de: { red: ["schadet"], yellow: ["Haut"] }, lv: { purple: ["kaitē", "ādai"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["zaudējums"] }, de: { blue: ["der Schaden"] }, example: { blue: ["Schaden"] }, translation: { purple: ["zaudējums"] } },
          { lv: { purple: ["kaitēt"] }, de: { red: ["schaden"] }, example: { red: ["schadet"] }, translation: { purple: ["kaitē"] } },
          { lv: { purple: ["Dativ"] }, de: { yellow: ["jemandem", "schaden"] }, example: { yellow: ["dir"] }, translation: { purple: ["tev"] } },
          { lv: { purple: ["veselība"] }, de: { red: ["schadet"], yellow: ["Gesundheit"] }, example: { red: ["schadet"] }, translation: { purple: ["kaitē"] } },
          { lv: { purple: ["atlīdzināt"] }, de: { blue: ["Schaden", "ersetzen"] }, example: { blue: ["Schaden"] }, translation: { purple: ["zaudējumu"] } },
          { lv: { purple: ["ievainojums"] }, de: { blue: ["Schaden"], red: ["Verletzung"] }, example: { blue: ["Schaden"] }, translation: { purple: ["bojājums"] } },
        ],
        importantComparison: [
          { blue: ["Schaden"], purple: ["zaudējums"] },
          { red: ["schadet"], yellow: ["Gesundheit"], purple: ["kaitē"] },
        ],
        tip: {
          left: { blue: ["der Schaden"], red: ["schaden"] },
          rightItems: [
            { de: { red: ["schadet"], yellow: ["Gesundheit"] }, lv: { purple: ["kaitēt", "veselībai"] } },
            { de: { red: ["schadet"], green: ["dir"] }, lv: { purple: ["tevi", "kaitēt"] } },
          ],
        },
        important: [
          { blue: ["der Schaden"] },
          { red: ["schaden"], yellow: ["Dativ"] },
          { red: ["schadet"], yellow: ["der Gesundheit"] },
        ],
        mistakes: [
          { wrong: { red: ["schadet"], blue: ["die Gesundheit"] }, right: { red: ["schadet"], yellow: ["der Gesundheit"] } },
        ],
        remember: [{ blue: ["der Schaden"] }, { red: ["schaden", "Dativ"] }],
      },
    },
  },
  {
    de: "das Vertrauen • vertrauen",
    lv: "Uzticība • Uzticēties",
    level: "B1",
    study: {
      id: "compare-vertrauen-vertrauen",
      layout: "comparisonStudy",
      title: "Uzticība • Uzticēties",
      subtitle: "das Vertrauen • vertrauen",
      lead: "das Vertrauen ir lietvārds (uzticība); vertrauen ir darbības vārds (uzticēties) un prasa Dativ.",
      explanation:
        "das Vertrauen nozīmē uzticību kā jūtu vai attiecību stāvokli. vertrauen nozīmē uzticēties kādam. Darbības vārdam vertrauen obligāti jābūt Dativam: jemandem vertrauen.",
      words: [
        {
          icon: "🤝",
          lv: "uzticība",
          de: "das Vertrauen",
          description: "Lietvārds — uzticība, ticība kā jūta.",
          example: "Ich habe großes Vertrauen zu dir. = Man ir liela uzticība tev.",
        },
        {
          icon: "💙",
          lv: "uzticēties",
          de: "vertrauen",
          description: "Darbības vārds — uzticēties kādam. Prasa Dativ: jemandem vertrauen.",
          example: "Ich vertraue dir. = Es tev uzticos.",
        },
      ],
      examples: [
        { de: "Ich habe Vertrauen zu meinem Arzt.", lv: "man ir uzticība savam ārstam." },
        { de: "Ich vertraue dir vollkommen.", lv: "es tev pilnīgi uzticos." },
        { de: "Das Vertrauen ist wichtig.", lv: "uzticība ir svarīga." },
        { de: "Kann ich dir vertrauen?", lv: "vai es varu tev uzticēties?" },
        { de: "Er hat mein Vertrauen verloren.", lv: "viņš zaudēja manu uzticību." },
        { de: "Wir vertrauen unserem Lehrer.", lv: "mēs uzticamies savam skolotājam." },
      ],
      comparisonTable: [
        {
          lv: "uzticība",
          de: "das Vertrauen",
          meaning: "jūta / attiecība",
          describes: "lietvārds (das)",
          example: "Das Vertrauen ist wichtig.",
          translation: "uzticība ir svarīga.",
        },
        {
          lv: "uzticēties",
          de: "vertrauen",
          meaning: "ticēt kādam",
          describes: "darbības vārds",
          example: "Ich vertraue dir.",
          translation: "es tev uzticos.",
        },
        {
          lv: "Dativ",
          de: "jemandem vertrauen",
          meaning: "kam uzticas",
          describes: "obligāts Dativ",
          example: "Ich vertraue meinem Freund.",
          translation: "es uzticos savam draugam.",
        },
        {
          lv: "uzticēšanās",
          de: "Vertrauen haben",
          meaning: "būt uzticībai",
          describes: "das Vertrauen frāzē",
          example: "Ich habe Vertrauen zu dir.",
          translation: "man ir uzticība tev.",
        },
        {
          lv: "zaudēt",
          de: "Vertrauen verlieren",
          meaning: "zaudēt uzticību",
          describes: "das Vertrauen kontekstā",
          example: "Er hat mein Vertrauen verloren.",
          translation: "viņš zaudēja manu uzticību.",
        },
        {
          lv: "prievārds zu",
          de: "Vertrauen zu",
          meaning: "uzticība pret",
          describes: "lietvārda konstrukcija",
          example: "Vertrauen zu jemandem.",
          translation: "uzticība pret kādu.",
        },
      ],
      importantComparison: [
        "Ich vertraue dir. = Es tev uzticos.",
        "Ich habe Vertrauen zu dir. = Man ir uzticība tev.",
        "vertrauen + Dativ: dir, meinem Arzt, unserem Lehrer.",
      ],
      tip: {
        left: "Ja runa par uzticību kā jūtu, lieto das Vertrauen. Ja par darbību — uzticēties, lieto vertrauen + Dativ.",
        rightTitle: "Dativ",
        rightItems: [
          { de: "ich vertraue dir", lv: "es tev uzticos", separator: "=" },
          { de: "meinem Arzt vertrauen", lv: "uzticēties ārstam", separator: "=" },
        ],
      },
      important: [
        "das Vertrauen = lietvārds (uzticība).",
        "vertrauen = darbības vārds (uzticēties) + Dativ.",
        "Ich vertraue dich — nepareizi; pareizi: Ich vertraue dir.",
      ],
      mistakes: [
        { wrong: "Ich vertraue dich.", right: "Ich vertraue dir." },
        { wrong: "Ich habe Vertrauen in dich.", right: "Ich habe Vertrauen zu dir." },
      ],
      remember: ["das Vertrauen = uzticība.", "vertrauen + Dativ = uzticēties."],
      sectionAccents: {
        lead: { green: ["das Vertrauen"], purple: ["uzticība"], blue: ["vertrauen"], yellow: ["Dativ"] },
        comparisonCards: [
          { lv: { purple: ["uzticība"] }, de: { green: ["das Vertrauen", "Vertrauen"] }, example: { green: ["Vertrauen"], purple: ["uzticība"] } },
          { lv: { purple: ["uzticēties"] }, de: { blue: ["vertrauen", "vertraue"] }, example: { blue: ["vertraue", "dir"], purple: ["uzticos"] } },
        ],
        examples: [
          { de: { green: ["Vertrauen"], blue: ["Arzt"] }, lv: { purple: ["uzticība"] } },
          { de: { blue: ["vertraue", "dir"] }, lv: { purple: ["uzticos"] } },
          { de: { green: ["Vertrauen"] }, lv: { purple: ["uzticība"] } },
          { de: { blue: ["vertrauen", "dir"] }, lv: { purple: ["uzticēties"] } },
          { de: { green: ["Vertrauen", "verloren"] }, lv: { purple: ["uzticību"] } },
          { de: { blue: ["vertrauen"], green: ["Lehrer"] }, lv: { purple: ["uzticamies"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["uzticība"] }, de: { green: ["das Vertrauen"] }, example: { green: ["Vertrauen"] }, translation: { purple: ["uzticība"] } },
          { lv: { purple: ["uzticēties"] }, de: { blue: ["vertrauen"] }, example: { blue: ["vertraue", "dir"] }, translation: { purple: ["uzticos"] } },
          { lv: { purple: ["Dativ"] }, de: { blue: ["vertrauen"], yellow: ["meinem Freund"] }, example: { blue: ["vertraue"] }, translation: { purple: ["uzticos"] } },
          { lv: { purple: ["uzticēšanās"] }, de: { green: ["Vertrauen", "haben"] }, example: { green: ["Vertrauen"] }, translation: { purple: ["uzticība"] } },
          { lv: { purple: ["zaudēt"] }, de: { green: ["Vertrauen", "verloren"] }, example: { green: ["Vertrauen"] }, translation: { purple: ["uzticību"] } },
          { lv: { purple: ["pret"] }, de: { green: ["Vertrauen", "zu"] }, example: { green: ["zu"] }, translation: { purple: ["pret"] } },
        ],
        importantComparison: [
          { blue: ["vertraue", "dir"], purple: ["uzticos"] },
          { green: ["Vertrauen"], purple: ["uzticība"] },
        ],
        tip: {
          left: { green: ["das Vertrauen"], blue: ["vertrauen"] },
          rightItems: [
            { de: { blue: ["vertraue", "dir"] }, lv: { purple: ["uzticos"] } },
            { de: { blue: ["vertrauen"], yellow: ["Arzt"] }, lv: { purple: ["ārstam"] } },
          ],
        },
        important: [
          { green: ["das Vertrauen"] },
          { blue: ["vertrauen"], yellow: ["Dativ"] },
          { red: ["vertraue dich"], green: ["vertraue dir"] },
        ],
        mistakes: [
          { wrong: { red: ["vertraue dich"] }, right: { blue: ["vertraue dir"] } },
        ],
        remember: [{ green: ["das Vertrauen"] }, { blue: ["vertrauen", "Dativ"] }],
      },
    },
  },
  {
    de: "der Trotz • trotz",
    lv: "Spīts • Neraugoties uz",
    level: "B1",
    study: {
      id: "compare-trotz-der-trotz",
      layout: "comparisonStudy",
      title: "Spīts • Neraugoties uz",
      subtitle: "der Trotz • trotz",
      lead: "der Trotz ir lietvārds (spīts); trotz ir prievārds (neraugoties uz) un prasa Genitiv.",
      explanation:
        "der Trotz nozīmē spītu vai spītību kā īpašību. trotz ir prievārds un nozīmē neraugoties uz kaut ko. Prievārdam trotz obligāti jābūt ģenitīvam: trotz des Regens, trotz des Wetters.",
      words: [
        {
          icon: "😤",
          lv: "spīts • spītība",
          de: "der Trotz",
          description: "Lietvārds — spīts, spītīga attieksme.",
          example: "Er macht es aus Trotz. = Viņš to dara spīta pēc.",
        },
        {
          icon: "☔",
          lv: "neraugoties uz",
          de: "trotz",
          description: "Prievārds — neraugoties uz. Prasa Genitiv: trotz + Genitiv.",
          example: "Trotz des Regens gehen wir spazieren. = Neraugoties uz lietu, mēs ejam pastaigā.",
        },
      ],
      examples: [
        { de: "Trotz des Regens gehen wir spazieren.", lv: "neraugoties uz lietu, mēs ejam pastaigā." },
        { de: "Er macht es aus Trotz.", lv: "viņš to dara spīta pēc." },
        { de: "Trotz des schlechten Wetters fahren wir.", lv: "neraugoties uz slikto laiku, mēs braucam." },
        { de: "Sie hat viel Trotz.", lv: "viņai ir daudz spīta." },
        { de: "Trotz der Krankheit kommt er.", lv: "neraugoties uz slimību, viņš nāk." },
        { de: "Aus Trotz hat er Nein gesagt.", lv: "spīta dēļ viņš teica nē." },
      ],
      comparisonTable: [
        {
          lv: "spīts",
          de: "der Trotz",
          meaning: "spītīga attieksme",
          describes: "lietvārds (der)",
          example: "Er macht es aus Trotz.",
          translation: "viņš to dara spīta pēc.",
        },
        {
          lv: "neraugoties uz",
          de: "trotz",
          meaning: "neskatoties uz",
          describes: "prievārds",
          example: "Trotz des Regens gehen wir.",
          translation: "neraugoties uz lietu, ejam.",
        },
        {
          lv: "ģenitīvs",
          de: "trotz des Regens",
          meaning: "neraugoties uz lietu",
          describes: "obligāts Genitiv",
          example: "Trotz des Regens.",
          translation: "neraugoties uz lietu.",
        },
        {
          lv: "laiks",
          de: "trotz des Wetters",
          meaning: "neraugoties uz laiku",
          describes: "Genitiv formā",
          example: "Trotz des schlechten Wetters.",
          translation: "neraugoties uz slikto laiku.",
        },
        {
          lv: "spīta dēļ",
          de: "aus Trotz",
          meaning: "spīta pēc",
          describes: "der Trotz frāzē",
          example: "Aus Trotz sagte er Nein.",
          translation: "spīta dēļ viņš teica nē.",
        },
        {
          lv: "nevis trotzdem",
          de: "trotz vs trotzdem",
          meaning: "prievārds vs apstākļa vārds",
          describes: "cita vārdšķira",
          example: "Trotz des Regens / Es regnet. Trotzdem gehen wir.",
          translation: "neraugoties uz lietu / līst. tomēr ejam.",
        },
      ],
      importantComparison: [
        "Trotz des Regens gehen wir. = Neraugoties uz lietu, mēs ejam.",
        "Er macht es aus Trotz. = Viņš to dara spīta pēc.",
        "trotz + Genitiv: des Regens, des Wetters, der Krankheit.",
      ],
      tip: {
        left: "Ja runa par spītu kā īpašību, lieto der Trotz. Ja par neskatīšanos uz šķērsli, lieto trotz + Genitiv.",
        rightTitle: "Genitiv",
        rightItems: [
          { de: "trotz des Regens", lv: "neraugoties uz lietu", separator: "=" },
          { de: "trotz der Krankheit", lv: "neraugoties uz slimību", separator: "=" },
        ],
      },
      important: [
        "der Trotz = lietvārds (spīts).",
        "trotz = prievārds (neraugoties uz) + Genitiv.",
        "trotz dem Regen — nepareizi; pareizi: trotz des Regens.",
      ],
      mistakes: [
        { wrong: "Trotz dem Regen gehen wir.", right: "Trotz des Regens gehen wir." },
        { wrong: "Trotz es regnet", right: "Trotz des Regens" },
      ],
      remember: ["der Trotz = spīts.", "trotz + Genitiv = neraugoties uz."],
      sectionAccents: {
        lead: { blue: ["der Trotz"], purple: ["spīts"], yellow: ["trotz"], green: ["Genitiv"] },
        comparisonCards: [
          { lv: { purple: ["spīts"] }, de: { blue: ["der Trotz", "Trotz"] }, example: { blue: ["Trotz"], purple: ["spīta"] } },
          { lv: { purple: ["neraugoties uz"] }, de: { yellow: ["trotz", "des Regens"] }, example: { yellow: ["Trotz", "Regens"], purple: ["līst"] } },
        ],
        examples: [
          { de: { yellow: ["Trotz", "Regens"] }, lv: { purple: ["neraugoties", "līst"] } },
          { de: { blue: ["Trotz"] }, lv: { purple: ["spīta"] } },
          { de: { yellow: ["Trotz", "Wetters"] }, lv: { purple: ["neraugoties", "laiku"] } },
          { de: { blue: ["Trotz"] }, lv: { purple: ["spīta"] } },
          { de: { yellow: ["Trotz", "Krankheit"] }, lv: { purple: ["neraugoties", "slimību"] } },
          { de: { blue: ["Trotz"] }, lv: { purple: ["spīta", "nē"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["spīts"] }, de: { blue: ["der Trotz"] }, example: { blue: ["Trotz"] }, translation: { purple: ["spīta"] } },
          { lv: { purple: ["neraugoties uz"] }, de: { yellow: ["trotz"] }, example: { yellow: ["Trotz", "Regens"] }, translation: { purple: ["neraugoties"] } },
          { lv: { purple: ["ģenitīvs"] }, de: { yellow: ["trotz", "des Regens"] }, example: { yellow: ["Regens"] }, translation: { purple: ["līst"] } },
          { lv: { purple: ["laiks"] }, de: { yellow: ["trotz", "Wetters"] }, example: { yellow: ["Wetters"] }, translation: { purple: ["laiku"] } },
          { lv: { purple: ["spīta dēļ"] }, de: { blue: ["aus Trotz"] }, example: { blue: ["Trotz"] }, translation: { purple: ["spīta"] } },
          { lv: { purple: ["tomēr"] }, de: { yellow: ["trotz"], red: ["trotzdem"] }, example: { yellow: ["Trotz"], red: ["trotzdem"] }, translation: { purple: ["neraugoties", "tomēr"] } },
        ],
        importantComparison: [
          { yellow: ["Trotz", "Regens"], purple: ["neraugoties", "līst"] },
          { blue: ["Trotz"], purple: ["spīta"] },
        ],
        tip: {
          left: { blue: ["der Trotz"], yellow: ["trotz"] },
          rightItems: [
            { de: { yellow: ["trotz", "des Regens"] }, lv: { purple: ["neraugoties", "līst"] } },
            { de: { yellow: ["trotz", "der Krankheit"] }, lv: { purple: ["neraugoties", "slimību"] } },
          ],
        },
        important: [
          { blue: ["der Trotz"] },
          { yellow: ["trotz"], green: ["Genitiv"] },
          { red: ["dem Regen"], yellow: ["des Regens"] },
        ],
        mistakes: [
          { wrong: { red: ["dem Regen"] }, right: { yellow: ["des Regens"] } },
        ],
        remember: [{ blue: ["der Trotz"] }, { yellow: ["trotz", "Genitiv"] }],
      },
    },
  },
];

function loadWords(filePath) {
  const win = {};
  vm.runInContext(fs.readFileSync(filePath, "utf8"), vm.createContext({ window: win }));
  return win.B1_WORDS;
}

function serializeWords(words) {
  const lines = ["const B1_WORDS = ["];
  for (const w of words) {
    lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  }
  lines.push("];", "", "window.B1_WORDS = B1_WORDS;");
  return lines.join("\n");
}

for (const rel of targets) {
  const filePath = path.join(root, rel);
  let words = loadWords(filePath);
  const before = words.length;

  const existingIds = new Set(
    words.filter((w) => w.study?.layout === "comparisonStudy").map((w) => w.study.id)
  );

  words = words.filter((w) => !REMOVE_DE.has(w.de));

  for (const [mergedDe, replacements] of Object.entries(SPLIT_REPLACEMENTS)) {
    const idx = words.findIndex((w) => w.de === mergedDe && !w.study?.layout);
    if (idx === -1) continue;
    words.splice(idx, 1, ...replacements);
  }

  for (const card of NEW_CARDS) {
    if (!existingIds.has(card.study.id)) {
      words.push(card);
      existingIds.add(card.study.id);
    }
  }

  fs.writeFileSync(filePath, serializeWords(words), "utf8");
  console.log(
    `${rel}: ${before} -> ${words.length} (removed ${REMOVE_DE.size} homonyms, split ${Object.keys(SPLIT_REPLACEMENTS).length}, added ${NEW_CARDS.length} cards)`
  );
}

console.log("\n✅ B1 homonym comparison cards integrated.");
