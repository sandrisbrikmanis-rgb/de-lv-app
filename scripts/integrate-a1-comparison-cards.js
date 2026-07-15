/**
 * Integrate 3 A1 comparisonStudy cards and remove replaced base entries.
 * Usage: node scripts/integrate-a1-comparison-cards.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const targets = ["data/a1.js", "www/data/a1.js"];

const REMOVE_DE = new Set([
  "Appetit", "essen", "Essen", "Fernsehen", "Gemüse", "Obst", "fernsehen",
  "Ferien", "Urlaub", "Geschwister", "Eltern",
]);

const NEW_CARDS = [
  {
    de: "fernsehen • Fernsehen",
    lv: "Skatīties TV • Televīzija",
    level: "A1",
    study: {
      id: "compare-fernsehen-fernsehen",
      layout: "comparisonStudy",
      title: "Skatīties TV • Televīzija",
      subtitle: "fernsehen • Fernsehen",
      lead: "fernsehen ir darbība; das Fernsehen ir lieta vai medijs. Tie nav sinonīmi.",
      explanation: "fernsehen ir atdalāms darbības vārds: ich sehe fern, du siehst fern. Tas nozīmē skatīties televīziju vai TV pārraidi. das Fernsehen ir lietvārds un Singularetantum — tam nav daudzskaitļa formas.",
      words: [
        {
          icon: "📺",
          lv: "skatīties TV",
          de: "fernsehen",
          description: "Atdalāms darbības vārds: ich sehe fern. Apraksta darbību — skatīties televīziju.",
          example: "Ich sehe heute Abend fern. = Šovakar es skatos televīziju.",
        },
        {
          icon: "📡",
          lv: "televīzija",
          de: "das Fernsehen",
          description: "Lietvārds, Singularetantum. Apraksta TV kā mediju vai pārraidi kopumā.",
          example: "Was gibt es heute im Fernsehen? = Ko šodien rāda televīzijā?",
        },
      ],
      examples: [
        { de: "Ich sehe heute Abend fern.", lv: "šovakar es skatos televīziju." },
        { de: "Siehst du gern fern?", lv: "vai tu labprāt skaties televīziju?" },
        { de: "Was gibt es heute im Fernsehen?", lv: "ko šodien rāda televīzijā?" },
        { de: "Im Fernsehen läuft ein Film.", lv: "televīzijā tiek rādīta filma." },
        { de: "Wir sehen am Samstag fern.", lv: "mēs sestdien skatāmies televīziju." },
        { de: "Das Fernsehen ist heute langweilig.", lv: "televīzijas programma šodien ir garlaicīga." },
      ],
      comparisonTable: [
        {
          lv: "skatīties TV",
          de: "fernsehen",
          meaning: "skatīties pārraidi",
          describes: "darbību",
          example: "Ich sehe heute Abend fern.",
          translation: "šovakar es skatos televīziju.",
        },
        {
          lv: "televīzija",
          de: "das Fernsehen",
          meaning: "TV kā medijs",
          describes: "lietvārdu (Sg.)",
          example: "Was gibt es heute im Fernsehen?",
          translation: "ko šodien rāda televīzijā?",
        },
        {
          lv: "skatīties",
          de: "sehen ... fern",
          meaning: "atdalāma darbība",
          describes: "darāmā daļa + fern",
          example: "Siehst du gern fern?",
          translation: "vai tu labprāt skaties televīziju?",
        },
        {
          lv: "programmā",
          de: "im Fernsehen",
          meaning: "TV pārraidē",
          describes: "Dativ: im Fernsehen",
          example: "Im Fernsehen läuft ein Film.",
          translation: "televīzijā tiek rādīta filma.",
        },
      ],
      importantComparison: [
        "Ich sehe fern. = Es skatos televīziju.",
        "Was gibt es im Fernsehen? = Ko rāda televīzijā?",
        "fernsehen = darbība; das Fernsehen = lieta/medijs (Singularetantum).",
      ],
      tip: {
        left: "Ja runā par darbību, lieto fernsehen (ich sehe fern). Ja runā par TV programmu vai mediju, lieto das Fernsehen.",
        rightTitle: "ātri",
        rightItems: [
          { de: "Ich sehe fern.", lv: "es skatos televīziju.", separator: "=" },
          { de: "im Fernsehen", lv: "televīzijā", separator: "=" },
        ],
      },
      important: [
        "fernsehen ir atdalāms: sehen + fern.",
        "das Fernsehen nav daudzskaitlī — nav *die Fernsehen.",
        "Ich fernsehe nav pareizs — pareizi: Ich sehe fern.",
      ],
      mistakes: [
        { wrong: "Ich fernsehe heute.", right: "Ich sehe heute fern." },
        { wrong: "die Fernsehen", right: "das Fernsehen" },
      ],
      remember: [
        "Darbība: fernsehen → ich sehe fern.",
        "Lietvārds: das Fernsehen (tikai vienskaitlī).",
      ],
      sectionAccents: {
        lead: { blue: ["fernsehen"], purple: ["darbība"], green: ["Fernsehen"], yellow: ["lieta"] },
        comparisonCards: [
          {
            lv: { purple: ["skatīties TV", "skatīties"] },
            de: { blue: ["fernsehen", "sehe", "fern"] },
            example: { blue: ["sehe", "fern"], purple: ["skatos", "televīziju"] },
          },
          {
            lv: { purple: ["televīzija", "programmā"] },
            de: { green: ["Fernsehen"], yellow: ["im Fernsehen"] },
            example: { green: ["Fernsehen"], purple: ["televīzijā", "rāda"] },
          },
        ],
        examples: [
          { de: { blue: ["sehe", "fern"] }, lv: { purple: ["skatos", "televīziju"] } },
          { de: { blue: ["Siehst", "fern"] }, lv: { purple: ["skaties", "televīziju"] } },
          { de: { green: ["Fernsehen"] }, lv: { purple: ["televīzijā", "rāda"] } },
          { de: { green: ["Fernsehen"], yellow: ["Film"] }, lv: { purple: ["televīzijā", "filma"] } },
          { de: { blue: ["sehen", "fern"] }, lv: { purple: ["skatāmies", "televīziju"] } },
          { de: { green: ["Fernsehen"] }, lv: { purple: ["programma", "garlaicīga"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["skatīties TV"] }, de: { blue: ["fernsehen"] }, example: { blue: ["sehe", "fern"] }, translation: { purple: ["skatos", "televīziju"] } },
          { lv: { purple: ["televīzija"] }, de: { green: ["Fernsehen"] }, example: { green: ["Fernsehen"] }, translation: { purple: ["televīzijā"] } },
          { lv: { purple: ["skatīties"] }, de: { blue: ["sehen", "fern"] }, example: { blue: ["fern"] }, translation: { purple: ["skaties"] } },
          { lv: { purple: ["programmā"] }, de: { yellow: ["im Fernsehen"] }, example: { yellow: ["Film"] }, translation: { purple: ["filma"] } },
        ],
        importantComparison: [
          { blue: ["sehe", "fern"], purple: ["skatos", "televīziju"] },
          { green: ["Fernsehen"], purple: ["televīzijā"] },
          { blue: ["fernsehen"], green: ["Fernsehen"] },
        ],
        tip: {
          left: { blue: ["fernsehen"], green: ["Fernsehen"] },
          rightItems: [
            { de: { blue: ["sehe", "fern"] }, lv: { purple: ["skatos", "televīziju"] } },
            { de: { green: ["Fernsehen"] }, lv: { purple: ["televīzijā"] } },
          ],
        },
        important: [
          { blue: ["fernsehen", "sehen", "fern"] },
          { green: ["Fernsehen"] },
          { blue: ["fernsehe"], green: ["sehe", "fern"] },
        ],
        mistakes: [
          { wrong: { blue: ["fernsehe"] }, right: { blue: ["sehe", "fern"] } },
          { wrong: { red: ["die Fernsehen"] }, right: { green: ["das Fernsehen"] } },
        ],
        remember: [
          { blue: ["fernsehen", "sehe", "fern"] },
          { green: ["Fernsehen"] },
        ],
      },
    },
  },
  {
    de: "Appetit • essen • Essen",
    lv: "Apetīte • Ēst • Ēdiens",
    level: "A1",
    study: {
      id: "compare-appetit-essen",
      layout: "comparisonStudy",
      title: "Apetīte • Ēst • Ēdiens",
      subtitle: "Appetit • essen • Essen",
      lead: "der Appetit ir sajūta, essen ir darbība, das Essen ir lieta vai maltīte.",
      explanation: "der Appetit ir Singularetantum — ēstgriba. essen nozīmē ēst. das Essen var nozīmēt ēdienu vai maltīti kopumā. A1 līmenī tie bieži nāk kopā, piemēram: Guten Appetit!",
      words: [
        {
          icon: "😋",
          lv: "ēstgriba",
          de: "der Appetit",
          description: "Sajūta, ka gribas ēst. Singularetantum — nav daudzskaitļa.",
          example: "Guten Appetit! = Labu apetīti!",
        },
        {
          icon: "🍽",
          lv: "ēst",
          de: "essen",
          description: "Darbības vārds — ēst pārtiku.",
          example: "Ich esse gern Pizza. = Es labprāt ēdu picu.",
        },
        {
          icon: "🥘",
          lv: "ēdiens • maltīte",
          de: "das Essen",
          description: "Lietvārds — ēdiens vai visa maltīte.",
          example: "Das Essen schmeckt gut. = Ēdiens garšo labi.",
        },
      ],
      examples: [
        { de: "Guten Appetit!", lv: "labu apetīti!" },
        { de: "Ich habe keinen Appetit.", lv: "man nav apetītes." },
        { de: "Was wollt ihr essen?", lv: "ko jūs gribat ēst?" },
        { de: "Wir essen um 12 Uhr.", lv: "mēs ēdam pulksten 12." },
        { de: "Das Essen ist fertig.", lv: "ēdiens ir gatavs." },
        { de: "Das Essen schmeckt sehr gut.", lv: "ēdiens ļoti labi garšo." },
      ],
      comparisonTable: [
        {
          lv: "ēstgriba",
          de: "der Appetit",
          meaning: "vēlme ēst",
          describes: "sajūtu (Sg.)",
          example: "Ich habe keinen Appetit.",
          translation: "man nav apetītes.",
        },
        {
          lv: "ēst",
          de: "essen",
          meaning: "patērēt pārtiku",
          describes: "darbību",
          example: "Was wollt ihr essen?",
          translation: "ko jūs gribat ēst?",
        },
        {
          lv: "ēdiens",
          de: "das Essen",
          meaning: "pārtika vai maltīte",
          describes: "lietu",
          example: "Das Essen schmeckt gut.",
          translation: "ēdiens garšo labi.",
        },
        {
          lv: "labu apetīti",
          de: "Guten Appetit",
          meaning: "sveiciens pirms ēšanas",
          describes: "frāzi",
          example: "Guten Appetit!",
          translation: "labu apetīti!",
        },
      ],
      importantComparison: [
        "Guten Appetit! = Labu apetīti!",
        "Ich esse Pizza. = Es ēdu picu.",
        "Das Essen ist gut. = Ēdiens ir labs.",
      ],
      tip: {
        left: "Sajūta pirms ēšanas: der Appetit. Darbība: essen. Tas, ko ēd: das Essen.",
        rightTitle: "ātri",
        rightItems: [
          { de: "Appetit", lv: "apetīte", separator: "=" },
          { de: "essen", lv: "ēst", separator: "=" },
          { de: "Essen", lv: "ēdiens", separator: "=" },
        ],
      },
      important: [
        "der Appetit ir tikai vienskaitlī.",
        "essen ir darbības vārds bez artikula.",
        "das Essen nav tas pats, kas essen.",
      ],
      mistakes: [
        { wrong: "die Appetite", right: "der Appetit" },
        { wrong: "Ich bin Appetit.", right: "Ich habe Appetit." },
      ],
      remember: [
        "Sajūta: der Appetit.",
        "Darbība: essen.",
        "Lieta/maltīte: das Essen.",
      ],
      sectionAccents: {
        lead: { yellow: ["Appetit"], blue: ["essen"], green: ["Essen"], purple: ["sajūta", "darbība", "lieta"] },
        comparisonCards: [
          { lv: { purple: ["ēstgriba", "apetīti"] }, de: { yellow: ["Appetit"] }, example: { yellow: ["Appetit"], purple: ["apetīti"] } },
          { lv: { purple: ["ēst"] }, de: { blue: ["essen", "esse"] }, example: { blue: ["esse"], purple: ["ēdu"] } },
          { lv: { purple: ["ēdiens", "maltīte"] }, de: { green: ["Essen"] }, example: { green: ["Essen"], purple: ["ēdiens", "garšo"] } },
        ],
        examples: [
          { de: { yellow: ["Appetit"] }, lv: { purple: ["apetīti"] } },
          { de: { yellow: ["Appetit"] }, lv: { purple: ["apetītes"] } },
          { de: { blue: ["essen"] }, lv: { purple: ["ēst", "ēst"] } },
          { de: { blue: ["essen"] }, lv: { purple: ["ēdam"] } },
          { de: { green: ["Essen"] }, lv: { purple: ["ēdiens", "gatavs"] } },
          { de: { green: ["Essen"] }, lv: { purple: ["ēdiens", "garšo"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["ēstgriba"] }, de: { yellow: ["Appetit"] }, example: { yellow: ["Appetit"] }, translation: { purple: ["apetītes"] } },
          { lv: { purple: ["ēst"] }, de: { blue: ["essen"] }, example: { blue: ["essen"] }, translation: { purple: ["ēst"] } },
          { lv: { purple: ["ēdiens"] }, de: { green: ["Essen"] }, example: { green: ["Essen"] }, translation: { purple: ["ēdiens", "garšo"] } },
          { lv: { purple: ["apetīti"] }, de: { yellow: ["Appetit"] }, example: { yellow: ["Appetit"] }, translation: { purple: ["apetīti"] } },
        ],
        importantComparison: [
          { yellow: ["Appetit"], purple: ["apetīti"] },
          { blue: ["esse"], purple: ["ēdu"] },
          { green: ["Essen"], purple: ["ēdiens"] },
        ],
        tip: {
          left: { yellow: ["Appetit"], blue: ["essen"], green: ["Essen"] },
          rightItems: [
            { de: { yellow: ["Appetit"] }, lv: { purple: ["apetīte"] } },
            { de: { blue: ["essen"] }, lv: { purple: ["ēst"] } },
            { de: { green: ["Essen"] }, lv: { purple: ["ēdiens"] } },
          ],
        },
        important: [
          { yellow: ["Appetit"] },
          { blue: ["essen"] },
          { green: ["Essen"], blue: ["essen"] },
        ],
        mistakes: [
          { wrong: { red: ["Appetite"] }, right: { yellow: ["Appetit"] } },
          { wrong: { yellow: ["bin Appetit"] }, right: { yellow: ["habe Appetit"] } },
        ],
        remember: [
          { yellow: ["Appetit"] },
          { blue: ["essen"] },
          { green: ["Essen"] },
        ],
      },
    },
  },
  {
    de: "Gemüse • Obst",
    lv: "Dārzeņi • Augļi",
    level: "A1",
    study: {
      id: "compare-gemuese-obst",
      layout: "comparisonStudy",
      title: "Dārzeņi • Augļi",
      subtitle: "Gemüse • Obst",
      lead: "Abi ir nekatras dzimtes (das) un Singularetantum — tos lieto tikai vienskaitlī.",
      explanation: "das Gemüse nozīmē dārzeņus kopumā. das Obst nozīmē augļus kopumā. Abi ir nekatras dzimtes un nav daudzskaitlī. Latviešu valodā bieži lieto daudzskaitli, bet vāciski pareizi ir: das Gemüse, das Obst.",
      words: [
        {
          icon: "🥕",
          lv: "dārzeņi",
          de: "das Gemüse",
          description: "Visi dārzeņi kopumā. Singularetantum — nav *die Gemüse.",
          example: "Ich esse gern Gemüse. = Es labprāt ēdu dārzeņus.",
        },
        {
          icon: "🍎",
          lv: "augļi",
          de: "das Obst",
          description: "Visi augļi kopumā. Singularetantum — nav *die Obsts.",
          example: "Wir essen viel Obst. = Mēs ēdam daudz augļu.",
        },
      ],
      examples: [
        { de: "Ich esse gern Gemüse.", lv: "es labprāt ēdu dārzeņus." },
        { de: "Das Gemüse ist frisch.", lv: "dārzeņi ir svaigi." },
        { de: "Wir kaufen Gemüse auf dem Markt.", lv: "mēs pērkam dārzeņus tirgū." },
        { de: "Wir essen viel Obst.", lv: "mēs ēdam daudz augļu." },
        { de: "Obst ist gesund.", lv: "augļi ir veselīgi." },
        { de: "Ich mag Obst und Gemüse.", lv: "man patīk augļi un dārzeņi." },
      ],
      comparisonTable: [
        {
          lv: "dārzeņi",
          de: "das Gemüse",
          meaning: "dārzeņi kopumā",
          describes: "nekatr. lietv. (Sg.)",
          example: "Ich esse gern Gemüse.",
          translation: "es labprāt ēdu dārzeņus.",
        },
        {
          lv: "augļi",
          de: "das Obst",
          meaning: "augļi kopumā",
          describes: "nekatr. lietv. (Sg.)",
          example: "Wir essen viel Obst.",
          translation: "mēs ēdam daudz augļu.",
        },
        {
          lv: "svaigi",
          de: "frisches Gemüse",
          meaning: "svaigi dārzeņi",
          describes: "bez artikula plurāļa",
          example: "Das Gemüse ist frisch.",
          translation: "dārzeņi ir svaigi.",
        },
        {
          lv: "veselīgi",
          de: "Obst ist gesund",
          meaning: "augļi ir veselīgi",
          describes: "vispārīgs apgalvojums",
          example: "Obst ist gesund.",
          translation: "augļi ir veselīgi.",
        },
      ],
      importantComparison: [
        "Ich esse Gemüse. = Es ēdu dārzeņus.",
        "Wir essen Obst. = Mēs ēdam augļus.",
        "Abi vārdi ir das un tikai vienskaitlī.",
      ],
      tip: {
        left: "Ja runā par visiem dārzeņiem kopā, lieto das Gemüse. Ja par visiem augļiem kopā, lieto das Obst. Netaisi mākslīgu daudzskaitli.",
        rightTitle: "ātri",
        rightItems: [
          { de: "das Gemüse", lv: "dārzeņi", separator: "=" },
          { de: "das Obst", lv: "augļi", separator: "=" },
        ],
      },
      important: [
        "Nav pareizi: die Gemüse, die Obsts.",
        "Pareizi: das Gemüse, das Obst.",
        "Latviešu daudzskaitlis tulkojumā ir normāls, bet vāciski paliek vienskaitlis.",
      ],
      mistakes: [
        { wrong: "die Gemüse", right: "das Gemüse" },
        { wrong: "die Obsts", right: "das Obst" },
      ],
      remember: [
        "das Gemüse = dārzeņi (kopumā).",
        "das Obst = augļi (kopumā).",
        "Abi — Singularetantum.",
      ],
      sectionAccents: {
        lead: { green: ["Gemüse", "Obst"], purple: ["das", "vienskaitlī"], blue: ["nekatras"] },
        comparisonCards: [
          { lv: { purple: ["dārzeņi"] }, de: { green: ["Gemüse"] }, example: { green: ["Gemüse"], purple: ["dārzeņus", "ēdu"] } },
          { lv: { purple: ["augļi"] }, de: { yellow: ["Obst"] }, example: { yellow: ["Obst"], purple: ["augļu", "ēdam"] } },
        ],
        examples: [
          { de: { green: ["Gemüse"] }, lv: { purple: ["dārzeņus", "ēdu"] } },
          { de: { green: ["Gemüse"] }, lv: { purple: ["dārzeņi", "svaigi"] } },
          { de: { green: ["Gemüse"] }, lv: { purple: ["dārzeņus", "pērkam"] } },
          { de: { yellow: ["Obst"] }, lv: { purple: ["augļu", "ēdam"] } },
          { de: { yellow: ["Obst"] }, lv: { purple: ["augļi", "veselīgi"] } },
          { de: { green: ["Gemüse"], yellow: ["Obst"] }, lv: { purple: ["augļi", "dārzeņi"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["dārzeņi"] }, de: { green: ["Gemüse"] }, example: { green: ["Gemüse"] }, translation: { purple: ["dārzeņus"] } },
          { lv: { purple: ["augļi"] }, de: { yellow: ["Obst"] }, example: { yellow: ["Obst"] }, translation: { purple: ["augļu"] } },
          { lv: { purple: ["svaigi"] }, de: { green: ["Gemüse"] }, example: { green: ["frisch"] }, translation: { purple: ["svaigi"] } },
          { lv: { purple: ["veselīgi"] }, de: { yellow: ["Obst"] }, example: { yellow: ["gesund"] }, translation: { purple: ["veselīgi"] } },
        ],
        importantComparison: [
          { green: ["Gemüse"], purple: ["dārzeņus"] },
          { yellow: ["Obst"], purple: ["augļus"] },
          { green: ["das"], purple: ["vienskaitlī"] },
        ],
        tip: {
          left: { green: ["Gemüse"], yellow: ["Obst"] },
          rightItems: [
            { de: { green: ["Gemüse"] }, lv: { purple: ["dārzeņi"] } },
            { de: { yellow: ["Obst"] }, lv: { purple: ["augļi"] } },
          ],
        },
        important: [
          { red: ["die Gemüse", "die Obsts"], green: ["das Gemüse"], yellow: ["das Obst"] },
          { purple: ["daudzskaitlis", "vienskaitlis"] },
        ],
        mistakes: [
          { wrong: { red: ["die Gemüse"] }, right: { green: ["das Gemüse"] } },
          { wrong: { red: ["die Obsts"] }, right: { yellow: ["das Obst"] } },
        ],
        remember: [
          { green: ["Gemüse"], purple: ["dārzeņi"] },
          { yellow: ["Obst"], purple: ["augļi"] },
        ],
      },
    },
  },
  {
    de: "Ferien • Urlaub",
    lv: "Brīvdienas • Atvaļinājums",
    level: "A1",
    study: {
      id: "compare-ferien-urlaub",
      layout: "comparisonStudy",
      title: "Brīvdienas • Atvaļinājums",
      subtitle: "Ferien • Urlaub",
      lead: "die Ferien ir skolas brīvdienas; der Urlaub ir atvaļinājums no darba.",
      explanation: "die Ferien ir Pluraletantum — vienmēr daudzskaitlī (in den Ferien). Tas attiecas uz skolu, universitāti vai studijām. der Urlaub ir Singularetantum — atvaļinājums no darba (im Urlaub). Abi nozīmē brīvu laiku, bet konteksts ir atšķirīgs.",
      words: [
        {
          icon: "🏫",
          lv: "brīvdienas (skola)",
          de: "die Ferien",
          description: "Pluraletantum. Skolas vai studiju brīvlaiks — vienmēr daudzskaitlī.",
          example: "In den Ferien fahren wir ans Meer. = Brīvdienās mēs braucam pie jūras.",
        },
        {
          icon: "🌴",
          lv: "atvaļinājums",
          de: "der Urlaub",
          description: "Singularetantum. Atvaļinājums no darba — vienmēr vienskaitlī.",
          example: "Mein Vater ist im Urlaub. = Mans tēvs ir atvaļinājumā.",
        },
      ],
      examples: [
        { de: "In den Ferien habe ich viel Zeit.", lv: "brīvdienās man ir daudz laika." },
        { de: "Was macht ihr in den Ferien?", lv: "ko jūs darāt brīvdienās?" },
        { de: "Mein Vater ist im Urlaub.", lv: "mans tēvs ir atvaļinājumā." },
        { de: "Nächste Woche habe ich Urlaub.", lv: "nākamnedēļ man ir atvaļinājums." },
        { de: "Die Schule ist in den Ferien zu.", lv: "skola brīvdienās ir slēgta." },
        { de: "Wir machen Urlaub in Spanien.", lv: "mēs pavadām atvaļinājumu Spānijā." },
      ],
      comparisonTable: [
        {
          lv: "brīvdienas",
          de: "die Ferien",
          meaning: "skolas brīvlaiiks",
          describes: "Pluraletantum",
          example: "In den Ferien fahren wir ans Meer.",
          translation: "brīvdienās mēs braucam pie jūras.",
        },
        {
          lv: "atvaļinājums",
          de: "der Urlaub",
          meaning: "brīvais laiks no darba",
          describes: "Singularetantum",
          example: "Mein Vater ist im Urlaub.",
          translation: "mans tēvs ir atvaļinājumā.",
        },
        {
          lv: "brīvdienās",
          de: "in den Ferien",
          meaning: "skolas konteksts",
          describes: "Dativ + Pl.",
          example: "Was macht ihr in den Ferien?",
          translation: "ko jūs darāt brīvdienās?",
        },
        {
          lv: "atvaļinājumā",
          de: "im Urlaub",
          meaning: "darba atvaļinājums",
          describes: "Dativ + Sg.",
          example: "Nächste Woche habe ich Urlaub.",
          translation: "nākamnedēļ man ir atvaļinājums.",
        },
      ],
      importantComparison: [
        "In den Ferien = brīvdienās (skola).",
        "im Urlaub = atvaļinājumā (darbs).",
        "die Ferien nav vienskaitlī; der Urlaub nav daudzskaitlī.",
      ],
      tip: {
        left: "Skola un studijas: die Ferien. Darbs: der Urlaub.",
        rightTitle: "ātri",
        rightItems: [
          { de: "in den Ferien", lv: "brīvdienās", separator: "=" },
          { de: "im Urlaub", lv: "atvaļinājumā", separator: "=" },
        ],
      },
      important: [
        "Nav pareizi: die Ferie, der Urlaube (A1 līmenī).",
        "Ferien vienmēr ar datīvu: in den Ferien.",
        "Urlaub: im Urlaub sein / Urlaub machen.",
      ],
      mistakes: [
        { wrong: "in der Ferien", right: "in den Ferien" },
        { wrong: "die Urlaube", right: "der Urlaub" },
      ],
      remember: [
        "Skola: die Ferien (Pl.).",
        "Darbs: der Urlaub (Sg.).",
      ],
      sectionAccents: {
        lead: { green: ["Ferien"], yellow: ["Urlaub"], purple: ["brīvdienas", "atvaļinājums"] },
        comparisonCards: [
          { lv: { purple: ["brīvdienas", "skola"] }, de: { green: ["Ferien"] }, example: { green: ["Ferien"], purple: ["brīvdienās"] } },
          { lv: { purple: ["atvaļinājums"] }, de: { yellow: ["Urlaub"] }, example: { yellow: ["Urlaub"], purple: ["atvaļinājumā"] } },
        ],
        examples: [
          { de: { green: ["Ferien"] }, lv: { purple: ["brīvdienās", "laika"] } },
          { de: { green: ["Ferien"] }, lv: { purple: ["brīvdienās"] } },
          { de: { yellow: ["Urlaub"] }, lv: { purple: ["atvaļinājumā"] } },
          { de: { yellow: ["Urlaub"] }, lv: { purple: ["atvaļinājums"] } },
          { de: { green: ["Ferien"] }, lv: { purple: ["brīvdienās", "slēgta"] } },
          { de: { yellow: ["Urlaub"] }, lv: { purple: ["atvaļinājumu"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["brīvdienas"] }, de: { green: ["Ferien"] }, example: { green: ["Ferien"] }, translation: { purple: ["brīvdienās"] } },
          { lv: { purple: ["atvaļinājums"] }, de: { yellow: ["Urlaub"] }, example: { yellow: ["Urlaub"] }, translation: { purple: ["atvaļinājumā"] } },
          { lv: { purple: ["brīvdienās"] }, de: { green: ["Ferien"] }, example: { green: ["Ferien"] }, translation: { purple: ["brīvdienās"] } },
          { lv: { purple: ["atvaļinājumā"] }, de: { yellow: ["Urlaub"] }, example: { yellow: ["Urlaub"] }, translation: { purple: ["atvaļinājums"] } },
        ],
        importantComparison: [
          { green: ["Ferien"], purple: ["brīvdienās"] },
          { yellow: ["Urlaub"], purple: ["atvaļinājumā"] },
        ],
        tip: {
          left: { green: ["Ferien"], yellow: ["Urlaub"] },
          rightItems: [
            { de: { green: ["Ferien"] }, lv: { purple: ["brīvdienās"] } },
            { de: { yellow: ["Urlaub"] }, lv: { purple: ["atvaļinājumā"] } },
          ],
        },
        important: [
          { green: ["Ferien"], yellow: ["Urlaub"] },
          { green: ["Ferien"], purple: ["den Ferien"] },
        ],
        mistakes: [
          { wrong: { red: ["der Ferien"] }, right: { green: ["den Ferien"] } },
          { wrong: { red: ["Urlaube"] }, right: { yellow: ["Urlaub"] } },
        ],
        remember: [
          { green: ["Ferien"] },
          { yellow: ["Urlaub"] },
        ],
      },
    },
  },
  {
    de: "Geschwister • Eltern",
    lv: "Brāļi un māsas • Vecāki",
    level: "A1",
    study: {
      id: "compare-geschwister-eltern",
      layout: "comparisonStudy",
      title: "Brāļi un māsas • Vecāki",
      subtitle: "Geschwister • Eltern",
      lead: "Abi ir Pluraletantum — tie apzīmē grupu un nav pamata vienskaitļa formas.",
      explanation: "die Geschwister nozīmē brāļus un māsas kopā. die Eltern nozīmē vecākus (māti un tēvu). Abi vārdi vienmēr ir daudzskaitlī un sieviešu dzimtē (die). Nav pareizi: der Geschwister, das Elter.",
      words: [
        {
          icon: "👫",
          lv: "brāļi un māsas",
          de: "die Geschwister",
          description: "Pluraletantum. Visi brāļi un māsas kopā — nav vienskaitļa.",
          example: "Ich habe zwei Geschwister. = Man ir divi brāļi/māsas.",
        },
        {
          icon: "👨‍👩‍👧",
          lv: "vecāki",
          de: "die Eltern",
          description: "Pluraletantum. Māte un tēvs kopā — vienmēr daudzskaitlī.",
          example: "Meine Eltern wohnen in Riga. = Mani vecāki dzīvo Rīgā.",
        },
      ],
      examples: [
        { de: "Ich habe zwei Geschwister.", lv: "man ir divi brāļi/māsas." },
        { de: "Meine Geschwister sind jung.", lv: "mani brāļi un māsas ir jauni." },
        { de: "Meine Eltern wohnen in Riga.", lv: "mani vecāki dzīvo Rīgā." },
        { de: "Die Eltern kommen heute.", lv: "vecāki šodien atbrauc." },
        { de: "Spielen deine Geschwister Fußball?", lv: "vai tavi brāļi/māsas spēlē futbolu?" },
        { de: "Ich telefoniere mit meinen Eltern.", lv: "es zvanu saviem vecākiem." },
      ],
      comparisonTable: [
        {
          lv: "brāļi un māsas",
          de: "die Geschwister",
          meaning: "brāļi + māsas",
          describes: "Pluraletantum",
          example: "Ich habe zwei Geschwister.",
          translation: "man ir divi brāļi/māsas.",
        },
        {
          lv: "vecāki",
          de: "die Eltern",
          meaning: "māte un tēvs",
          describes: "Pluraletantum",
          example: "Meine Eltern wohnen in Riga.",
          translation: "mani vecāki dzīvo Rīgā.",
        },
        {
          lv: "brāļiem/māsām",
          de: "meine Geschwister",
          meaning: "mana brāļu/māsu grupa",
          describes: "possessiv + Pl.",
          example: "Meine Geschwister sind jung.",
          translation: "mani brāļi un māsas ir jauni.",
        },
        {
          lv: "vecākiem",
          de: "meinen Eltern",
          meaning: "maniem vecākiem",
          describes: "Dativ + Pl.",
          example: "Ich telefoniere mit meinen Eltern.",
          translation: "es zvanu saviem vecākiem.",
        },
      ],
      importantComparison: [
        "die Geschwister = brāļi un māsas.",
        "die Eltern = vecāki.",
        "Abi vienmēr daudzskaitlī — nav *der Geschwister vai *das Elter.",
      ],
      tip: {
        left: "Ja runā par brāļiem un māsām kopā: Geschwister. Ja par māti un tēvu kopā: Eltern.",
        rightTitle: "ātri",
        rightItems: [
          { de: "Geschwister", lv: "brāļi un māsas", separator: "=" },
          { de: "Eltern", lv: "vecāki", separator: "=" },
        ],
      },
      important: [
        "Nav vienskaitļa: *der Schwester als Geschwister-Ersetzung.",
        "Eltern vienmēr ar die — nevis der/das.",
        "Geschwister un Eltern abi ir die + Pl.",
      ],
      mistakes: [
        { wrong: "die Elterns", right: "die Eltern" },
        { wrong: "der Geschwister", right: "die Geschwister" },
      ],
      remember: [
        "Geschwister = brāļi un māsas (Pl.).",
        "Eltern = vecāki (Pl.).",
      ],
      sectionAccents: {
        lead: { blue: ["Geschwister", "Eltern"], purple: ["grupu", "Pluraletantum"] },
        comparisonCards: [
          { lv: { purple: ["brāļi un māsas"] }, de: { blue: ["Geschwister"] }, example: { blue: ["Geschwister"], purple: ["brāļi", "māsas"] } },
          { lv: { purple: ["vecāki"] }, de: { green: ["Eltern"] }, example: { green: ["Eltern"], purple: ["vecāki"] } },
        ],
        examples: [
          { de: { blue: ["Geschwister"] }, lv: { purple: ["brāļi", "māsas"] } },
          { de: { blue: ["Geschwister"] }, lv: { purple: ["brāļi", "māsas", "jauni"] } },
          { de: { green: ["Eltern"] }, lv: { purple: ["vecāki", "dzīvo"] } },
          { de: { green: ["Eltern"] }, lv: { purple: ["vecāki", "atbrauc"] } },
          { de: { blue: ["Geschwister"] }, lv: { purple: ["brāļi", "māsas", "futbolu"] } },
          { de: { green: ["Eltern"] }, lv: { purple: ["vecākiem", "zvanu"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["brāļi un māsas"] }, de: { blue: ["Geschwister"] }, example: { blue: ["Geschwister"] }, translation: { purple: ["brāļi", "māsas"] } },
          { lv: { purple: ["vecāki"] }, de: { green: ["Eltern"] }, example: { green: ["Eltern"] }, translation: { purple: ["vecāki"] } },
          { lv: { purple: ["brāļiem"] }, de: { blue: ["Geschwister"] }, example: { blue: ["Geschwister"] }, translation: { purple: ["jauni"] } },
          { lv: { purple: ["vecākiem"] }, de: { green: ["Eltern"] }, example: { green: ["Eltern"] }, translation: { purple: ["vecākiem"] } },
        ],
        importantComparison: [
          { blue: ["Geschwister"], purple: ["brāļi", "māsas"] },
          { green: ["Eltern"], purple: ["vecāki"] },
        ],
        tip: {
          left: { blue: ["Geschwister"], green: ["Eltern"] },
          rightItems: [
            { de: { blue: ["Geschwister"] }, lv: { purple: ["brāļi un māsas"] } },
            { de: { green: ["Eltern"] }, lv: { purple: ["vecāki"] } },
          ],
        },
        important: [
          { blue: ["Geschwister"], green: ["Eltern"] },
          { red: ["Elterns", "der Geschwister"] },
        ],
        mistakes: [
          { wrong: { red: ["Elterns"] }, right: { green: ["Eltern"] } },
          { wrong: { red: ["der Geschwister"] }, right: { blue: ["die Geschwister"] } },
        ],
        remember: [
          { blue: ["Geschwister"] },
          { green: ["Eltern"] },
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

  // Avoid duplicate comparison cards on re-run
  const existingIds = new Set(
    filtered.filter((w) => w.study?.id).map((w) => w.study.id)
  );
  const toAdd = NEW_CARDS.filter((c) => !existingIds.has(c.study.id));

  const result = [...filtered, ...toAdd];
  fs.writeFileSync(filePath, serializeWords(result), "utf8");
  return { removed, added: toAdd.map((c) => c.study.id), total: result.length };
}

for (const rel of targets) {
  const stats = integrate(path.join(root, rel));
  console.log(`${rel}: removed [${stats.removed.join(", ")}], added [${stats.added.join(", ")}], total ${stats.total}`);
}
