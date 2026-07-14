/**
 * Integrate 3 B1 comparisonStudy cards and remove replaced base entries.
 * Usage: node scripts/integrate-b1-comparison-cards.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const targets = ["data/b1.js", "www/data/b1.js"];

const REMOVE_DE = new Set(["trotzdem", "weil", "obwohl"]);

const NEW_CARDS = [
  {
    de: "weil • da",
    lv: "Jo • Tāpēc ka • Par cik",
    level: "B1",
    study: {
      id: "compare-weil-da",
      layout: "comparisonStudy",
      title: "Jo • Tāpēc ka • Par cik",
      subtitle: "weil • da",
      lead: "weil un da abi paskaidro iemeslu, bet tos lieto citādos kontekstos. Tie NAV sinonīmi.",
      explanation:
        "weil paskaidro iemeslu un ir visbiežākais variants. da kā saikne nozīmē jo/par cik, kad iemesls jau ir zināms vai minēts iepriekš. Abi prasa darbības vārdu teikuma beigās.",
      words: [
        {
          icon: "💬",
          lv: "jo • tāpēc ka",
          de: "weil",
          description: "Visbiežāk lietotais iemesla saiklis. Pēc weil darbības vārds ir teikuma beigās.",
          example: "Ich bleibe zu Hause, weil ich krank bin. = Es palieku mājās, jo esmu slims.",
        },
        {
          icon: "📌",
          lv: "jo • par cik",
          de: "da",
          description: "Iemesla saiklis, kad iemesls jau ir zināms vai minēts. Pēc da darbības vārds ir teikuma beigās.",
          example: "Da ich krank bin, bleibe ich zu Hause. = Tā kā esmu slims, es palieku mājās.",
        },
      ],
      examples: [
        { de: "Ich bleibe zu Hause, weil ich krank bin.", lv: "es palieku mājās, jo esmu slims." },
        { de: "Da ich krank bin, bleibe ich zu Hause.", lv: "tā kā esmu slims, es palieku mājās." },
        { de: "Ich lerne Deutsch, weil ich in Deutschland arbeite.", lv: "es mācos vācu valodu, jo strādāju Vācijā." },
        { de: "Da du keine Zeit hast, machen wir es morgen.", lv: "tā kā tev nav laika, mēs to darīsim rīt." },
        { de: "Er kommt nicht, weil er müde ist.", lv: "viņš nenāk, jo ir noguris." },
        { de: "Da das Wetter schlecht ist, fahren wir nicht.", lv: "tā kā laiks ir slikts, mēs nebraucam." },
      ],
      comparisonTable: [
        {
          lv: "jo • tāpēc ka",
          de: "weil",
          meaning: "paskaidro iemeslu",
          describes: "visbiežākais variants",
          example: "Ich bleibe, weil ich krank bin.",
          translation: "es palieku, jo esmu slims.",
        },
        {
          lv: "jo • par cik",
          de: "da",
          meaning: "paskaidro zināmu iemeslu",
          describes: "iemesls jau minēts",
          example: "Da ich krank bin, bleibe ich.",
          translation: "tā kā esmu slims, es palieku.",
        },
        {
          lv: "vārdu kārtība",
          de: "weil ... Verb",
          meaning: "darbības vārds beigās",
          describes: "palīgteikums",
          example: "... weil ich müde bin.",
          translation: "... jo esmu noguris.",
        },
        {
          lv: "vārdu kārtība",
          de: "da ... Verb",
          meaning: "darbības vārds beigās",
          describes: "palīgteikums",
          example: "Da ich müde bin, gehe ich.",
          translation: "tā kā esmu noguris, es eju.",
        },
        {
          lv: "nevis tur",
          de: "da (Ort)",
          meaning: "vietas nozīme",
          describes: "A1 līmenis",
          example: "Da ist mein Auto.",
          translation: "tur ir mana mašīna.",
        },
        {
          lv: "nevis denn",
          de: "weil vs denn",
          meaning: "denn = jo (galvenajā teikumā)",
          describes: "cita vārdu kārtība",
          example: "Ich bleibe, denn ich bin krank.",
          translation: "es palieku, jo esmu slims.",
        },
      ],
      importantComparison: [
        "Ich bleibe zu Hause, weil ich krank bin. = Es palieku mājās, jo esmu slims.",
        "Da ich krank bin, bleibe ich zu Hause. = Tā kā esmu slims, es palieku mājās.",
        "weil un da (kā saikne) abi liek darbības vārdu teikuma beigās.",
      ],
      tip: {
        left: "Ja iemesls ir jauns un tiešs, lieto weil. Ja iemesls jau ir zināms vai minēts, da bieži skan dabiskāk.",
        rightTitle: "ātri",
        rightItems: [
          { de: "weil ich krank bin", lv: "jo esmu slims", separator: "=" },
          { de: "Da ich krank bin", lv: "tā kā esmu slims", separator: "=" },
        ],
      },
      important: [
        "weil un da (saikne) prasa darbības vārdu teikuma beigās.",
        "da kā saikne ≠ da kā tur (vietas vārds).",
        "weil ich bin krank — nepareizi; pareizi: weil ich krank bin.",
      ],
      mistakes: [
        { wrong: "weil ich bin krank", right: "weil ich krank bin" },
        { wrong: "Da ich bin krank, ...", right: "Da ich krank bin, ..." },
      ],
      remember: [
        "weil = visbiežākais iemesla saiklis.",
        "da (saikne) = iemesls jau zināms.",
        "Abi: darbības vārds teikuma beigās.",
      ],
      sectionAccents: {
        lead: { blue: ["weil", "da"], purple: ["iemeslu"], red: ["NAV sinonīmi"] },
        comparisonCards: [
          { lv: { purple: ["jo", "tāpēc ka"] }, de: { blue: ["weil"] }, example: { blue: ["weil", "krank", "bin"], purple: ["jo", "slims"] } },
          { lv: { purple: ["jo", "par cik"] }, de: { blue: ["da"] }, example: { blue: ["Da", "krank", "bin"], purple: ["tā kā", "slims"] } },
        ],
        examples: [
          { de: { blue: ["weil", "krank", "bin"] }, lv: { purple: ["jo", "slims"] } },
          { de: { blue: ["Da", "krank", "bin"] }, lv: { purple: ["tā kā", "slims"] } },
          { de: { blue: ["weil", "arbeite"] }, lv: { purple: ["jo", "strādāju"] } },
          { de: { blue: ["Da", "keine Zeit"] }, lv: { purple: ["tā kā", "laika"] } },
          { de: { blue: ["weil", "müde"] }, lv: { purple: ["jo", "noguris"] } },
          { de: { blue: ["Da", "Wetter", "schlecht"] }, lv: { purple: ["tā kā", "laiks", "slikts"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["jo"] }, de: { blue: ["weil"] }, example: { blue: ["weil", "krank", "bin"] }, translation: { purple: ["jo", "slims"] } },
          { lv: { purple: ["par cik"] }, de: { blue: ["da"] }, example: { blue: ["Da", "krank", "bin"] }, translation: { purple: ["tā kā", "slims"] } },
          { lv: { purple: ["vārdu kārtība"] }, de: { blue: ["weil", "Verb"] }, example: { blue: ["müde", "bin"] }, translation: { purple: ["noguris"] } },
          { lv: { purple: ["vārdu kārtība"] }, de: { blue: ["da", "Verb"] }, example: { blue: ["müde", "bin"] }, translation: { purple: ["noguris"] } },
          { lv: { purple: ["tur"] }, de: { blue: ["da"] }, example: { blue: ["Da", "ist"] }, translation: { purple: ["tur"] } },
          { lv: { purple: ["denn"] }, de: { red: ["denn"], blue: ["weil"] }, example: { blue: ["denn", "krank"] }, translation: { purple: ["jo", "slims"] } },
        ],
        importantComparison: [
          { blue: ["weil", "krank", "bin"], purple: ["jo", "slims"] },
          { blue: ["Da", "krank", "bin"], purple: ["tā kā", "slims"] },
          { blue: ["weil", "da"], purple: ["beigās"] },
        ],
        tip: {
          left: { blue: ["weil"], green: ["da"] },
          rightItems: [
            { de: { blue: ["weil", "krank", "bin"] }, lv: { purple: ["jo", "slims"] } },
            { de: { blue: ["Da", "krank", "bin"] }, lv: { purple: ["tā kā", "slims"] } },
          ],
        },
        important: [
          { blue: ["weil", "da"], purple: ["beigās"] },
          { blue: ["da"], green: ["tur"] },
          { red: ["weil ich bin krank"], green: ["weil ich krank bin"] },
        ],
        mistakes: [
          { wrong: { red: ["weil ich bin krank"] }, right: { blue: ["weil ich krank bin"] } },
          { wrong: { red: ["Da ich bin krank"] }, right: { blue: ["Da ich krank bin"] } },
        ],
        remember: [
          { blue: ["weil"] },
          { blue: ["da"], purple: ["zināms"] },
          { blue: ["beigās"] },
        ],
      },
    },
  },
  {
    de: "obwohl • trotzdem",
    lv: "Kaut gan • Tomēr",
    level: "B1",
    study: {
      id: "compare-obwohl-trotzdem",
      layout: "comparisonStudy",
      title: "Kaut gan • Tomēr",
      subtitle: "obwohl • trotzdem",
      lead: "obwohl ievada pretēju iemeslu; trotzdem norāda uz rezultātu, neskatoties uz to.",
      explanation:
        "obwohl nozīmē kaut gan un ievada palīgteikumu ar darbības vārdu beigās. trotzdem nozīmē tomēr un stāv galvenajā teikumā — pēc tā darbības vārds ir 2. vietā.",
      words: [
        {
          icon: "↩",
          lv: "kaut gan • lai gan",
          de: "obwohl",
          description: "Ievada pretēju iemeslu palīgteikumā. Darbības vārds ir teikuma beigās.",
          example: "Obwohl es müde bin, gehe ich spazieren. = Kaut gan esmu noguris, es eju pastaigā.",
        },
        {
          icon: "➡",
          lv: "tomēr • tik un tā",
          de: "trotzdem",
          description: "Norāda uz rezultātu, neskatoties uz iemeslu. Darbības vārds ir 2. vietā.",
          example: "Ich bin müde. Trotzdem gehe ich spazieren. = Es esmu noguris. Tomēr es eju pastaigā.",
        },
      ],
      examples: [
        { de: "Obwohl es regnet, gehen wir raus.", lv: "kaut gan līst, mēs izejam ārā." },
        { de: "Es regnet. Trotzdem gehen wir raus.", lv: "līst. tomēr mēs izejam ārā." },
        { de: "Obwohl er krank ist, arbeitet er.", lv: "kaut gan viņš ir slims, viņš strādā." },
        { de: "Er ist krank. Trotzdem arbeitet er.", lv: "viņš ir slims. tomēr viņš strādā." },
        { de: "Obwohl ich wenig Zeit habe, helfe ich dir.", lv: "kaut gan man ir maz laika, es tev palīdzu." },
        { de: "Ich habe wenig Zeit. Trotzdem helfe ich dir.", lv: "man ir maz laika. tomēr es tev palīdzu." },
      ],
      comparisonTable: [
        {
          lv: "kaut gan",
          de: "obwohl",
          meaning: "pretējs iemesls",
          describes: "palīgteikums",
          example: "Obwohl es regnet, gehen wir.",
          translation: "kaut gan līst, mēs izejam.",
        },
        {
          lv: "tomēr",
          de: "trotzdem",
          meaning: "rezultāts neskatoties uz to",
          describes: "galvenais teikums",
          example: "Es regnet. Trotzdem gehen wir.",
          translation: "līst. tomēr mēs izejam.",
        },
        {
          lv: "vārdu kārtība",
          de: "obwohl ... Verb",
          meaning: "darbības vārds beigās",
          describes: "palīgteikums",
          example: "Obwohl ich müde bin, ...",
          translation: "kaut gan esmu noguris, ...",
        },
        {
          lv: "vārdu kārtība",
          de: "trotzdem ... Verb",
          meaning: "darbības vārds 2. vietā",
          describes: "galvenais teikums",
          example: "Trotzdem gehe ich.",
          translation: "tomēr es eju.",
        },
        {
          lv: "nevis trotz",
          de: "obwohl vs trotz",
          meaning: "trotz + Dativ",
          describes: "prievārds, ne saikle",
          example: "Trotz des Regens gehen wir.",
          translation: "neraugoties uz lietu, mēs izejam.",
        },
        {
          lv: "abi kopā",
          de: "obwohl + Hauptsatz",
          meaning: "bieži vienā teikumā",
          describes: "savienots teikums",
          example: "Obwohl es müde bin, arbeite ich trotzdem.",
          translation: "kaut gan esmu noguris, tomēr strādāju.",
        },
      ],
      importantComparison: [
        "Obwohl es regnet, gehen wir raus. = Kaut gan līst, mēs izejam ārā.",
        "Es regnet. Trotzdem gehen wir raus. = Līst. Tomēr mēs izejam ārā.",
        "obwohl → darbības vārds beigās; trotzdem → darbības vārds 2. vietā.",
      ],
      tip: {
        left: "Ja gribi teikt pretējo iemeslu vienā teikumā, sāc ar obwohl. Ja iemesls jau ir minēts, lieto trotzdem galvenajā teikumā.",
        rightTitle: "ātri",
        rightItems: [
          { de: "Obwohl es regnet", lv: "kaut gan līst", separator: "=" },
          { de: "Trotzdem gehen wir", lv: "tomēr izejam", separator: "=" },
        ],
      },
      important: [
        "obwohl ievada palīgteikumu — darbības vārds beigās.",
        "trotzdem stāv galvenajā teikumā — darbības vārds 2. vietā.",
        "trotz (prievārds) ≠ trotzdem (apstākļa vārds).",
      ],
      mistakes: [
        { wrong: "Obwohl ich bin müde, ...", right: "Obwohl ich müde bin, ..." },
        { wrong: "Trotzdem ich gehe.", right: "Trotzdem gehe ich." },
      ],
      remember: [
        "obwohl = kaut gan (palīgteikums).",
        "trotzdem = tomēr (galvenais teikums).",
        "Vārdu kārtība atšķiras!",
      ],
      sectionAccents: {
        lead: { blue: ["obwohl"], purple: ["pretēju"], green: ["trotzdem"], yellow: ["rezultātu"] },
        comparisonCards: [
          { lv: { purple: ["kaut gan"] }, de: { blue: ["obwohl"] }, example: { blue: ["Obwohl", "müde", "bin"], purple: ["kaut gan", "noguris"] } },
          { lv: { purple: ["tomēr"] }, de: { green: ["trotzdem"] }, example: { green: ["Trotzdem", "gehe"], purple: ["tomēr", "eju"] } },
        ],
        examples: [
          { de: { blue: ["Obwohl", "regnet"] }, lv: { purple: ["kaut gan", "līst"] } },
          { de: { green: ["Trotzdem", "gehen"] }, lv: { purple: ["tomēr", "izejam"] } },
          { de: { blue: ["Obwohl", "krank"] }, lv: { purple: ["kaut gan", "slims"] } },
          { de: { green: ["Trotzdem", "arbeitet"] }, lv: { purple: ["tomēr", "strādā"] } },
          { de: { blue: ["Obwohl", "Zeit"] }, lv: { purple: ["kaut gan", "laika"] } },
          { de: { green: ["Trotzdem", "helfe"] }, lv: { purple: ["tomēr", "palīdzu"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["kaut gan"] }, de: { blue: ["obwohl"] }, example: { blue: ["Obwohl", "regnet"] }, translation: { purple: ["kaut gan", "līst"] } },
          { lv: { purple: ["tomēr"] }, de: { green: ["trotzdem"] }, example: { green: ["Trotzdem", "gehen"] }, translation: { purple: ["tomēr", "izejam"] } },
          { lv: { purple: ["beigās"] }, de: { blue: ["obwohl", "Verb"] }, example: { blue: ["müde", "bin"] }, translation: { purple: ["noguris"] } },
          { lv: { purple: ["2. vietā"] }, de: { green: ["trotzdem", "Verb"] }, example: { green: ["gehe", "ich"] }, translation: { purple: ["eju"] } },
          { lv: { purple: ["neraugoties"] }, de: { yellow: ["trotz"] }, example: { yellow: ["Trotz", "Regens"] }, translation: { purple: ["līst"] } },
          { lv: { purple: ["kopā"] }, de: { blue: ["obwohl"], green: ["trotzdem"] }, example: { blue: ["müde"], green: ["trotzdem"] }, translation: { purple: ["noguris", "tomēr"] } },
        ],
        importantComparison: [
          { blue: ["Obwohl", "regnet"], purple: ["kaut gan", "līst"] },
          { green: ["Trotzdem", "gehen"], purple: ["tomēr", "izejam"] },
          { blue: ["obwohl", "beigās"], green: ["trotzdem", "2."] },
        ],
        tip: {
          left: { blue: ["obwohl"], green: ["trotzdem"] },
          rightItems: [
            { de: { blue: ["Obwohl", "regnet"] }, lv: { purple: ["kaut gan", "līst"] } },
            { de: { green: ["Trotzdem", "gehen"] }, lv: { purple: ["tomēr", "izejam"] } },
          ],
        },
        important: [
          { blue: ["obwohl"], purple: ["beigās"] },
          { green: ["trotzdem"], purple: ["2. vietā"] },
          { yellow: ["trotz"], green: ["trotzdem"] },
        ],
        mistakes: [
          { wrong: { red: ["Obwohl ich bin müde"] }, right: { blue: ["Obwohl ich müde bin"] } },
          { wrong: { red: ["Trotzdem ich gehe"] }, right: { green: ["Trotzdem gehe ich"] } },
        ],
        remember: [
          { blue: ["obwohl"], purple: ["kaut gan"] },
          { green: ["trotzdem"], purple: ["tomēr"] },
          { blue: ["beigās"], green: ["2. vietā"] },
        ],
      },
    },
  },
  {
    de: "anstatt • ohne ... zu",
    lv: "Tā vietā lai • Bez",
    level: "B1",
    study: {
      id: "compare-anstatt-ohne-zu",
      layout: "comparisonStudy",
      title: "Tā vietā lai • Bez",
      subtitle: "anstatt • ohne ... zu",
      lead: "anstatt ... zu un ohne ... zu abi savieno divus darbības vārdus, bet nozīme ir pretēja.",
      explanation:
        "anstatt ... zu nozīmē tā vietā lai — viena darbība aizstāj otru. ohne ... zu nozīmē bez — darbība nenotiek. Abi konstrukcijās otrais darbības vārds ir infinitīvs ar zu.",
      words: [
        {
          icon: "🔄",
          lv: "tā vietā lai",
          de: "anstatt ... zu",
          description: "Viena darbība notiek tā vietā, lai notiktu cita. anstatt + zu + Infinitiv.",
          example: "Er fährt mit dem Rad, anstatt mit dem Auto zu fahren. = Viņš brauc ar riteni, tā vietā lai brauktu ar auto.",
        },
        {
          icon: "🚫",
          lv: "bez (kaut ko darot)",
          de: "ohne ... zu",
          description: "Darbība nenotiek. ohne + zu + Infinitiv.",
          example: "Er ging, ohne sich zu verabschieden. = Viņš aizgāja, neuzvadoties.",
        },
      ],
      examples: [
        { de: "Ich trinke Tee, anstatt Kaffee zu trinken.", lv: "es dzeru tēju, tā vietā lai dzertu kafiju." },
        { de: "Er ging, ohne sich zu verabschieden.", lv: "viņš aizgāja, neuzvadoties." },
        { de: "Anstatt zu warten, rufe ich an.", lv: "tā vietā lai gaidītu, es zvanu." },
        { de: "Sie aß, ohne zu kochen.", lv: "viņa ēda, neko nepagatavojot." },
        { de: "Er lernt, anstatt fernzusehen.", lv: "viņš mācās, tā vietā lai skatītos televīziju." },
        { de: "Ich kaufe Brot, ohne Geld zu haben.", lv: "es pērku maizi, nav naudas." },
      ],
      comparisonTable: [
        {
          lv: "tā vietā lai",
          de: "anstatt ... zu",
          meaning: "viena darbība aizstāj otru",
          describes: "alternatīva darbība",
          example: "Anstatt zu warten, rufe ich an.",
          translation: "tā vietā lai gaidītu, es zvanu.",
        },
        {
          lv: "bez",
          de: "ohne ... zu",
          meaning: "darbība nenotiek",
          describes: "izlaista darbība",
          example: "Er ging, ohne sich zu verabschieden.",
          translation: "viņš aizgāja, neuzvadoties.",
        },
        {
          lv: "infinitīvs",
          de: "... zu + Verb",
          meaning: "abiem nepieciešams zu",
          describes: "kopīga struktūra",
          example: "... ohne zu fragen.",
          translation: "... nejautājot.",
        },
        {
          lv: "statt + zu",
          de: "anstatt / statt",
          meaning: "tā vietā",
          describes: "sinonīmi",
          example: "Statt zu warten, ...",
          translation: "tā vietā lai gaidītu, ...",
        },
        {
          lv: "ohne (A1)",
          de: "ohne + Akk.",
          meaning: "bez priekšmeta",
          describes: "vienkāršs prievārds",
          example: "Pizza ohne Käse.",
          translation: "pica bez siera.",
        },
        {
          lv: "konteksts",
          de: "anstatt vs ohne",
          meaning: "aizstāšana vs izlaišana",
          describes: "nozīmes atšķirība",
          example: "Anstatt Auto: Rad. Ohne zu fragen: ging.",
          translation: "tā vietā: ritenis. bez jautāšanas: aizgāja.",
        },
      ],
      importantComparison: [
        "Anstatt zu warten, rufe ich an. = Tā vietā lai gaidītu, es zvanu.",
        "Er ging, ohne sich zu verabschieden. = Viņš aizgāja, neuzvadoties.",
        "anstatt = aizstāj; ohne zu = izlaiž darbību.",
      ],
      tip: {
        left: "Ja viena darbība notiek tā vietā, lai notiktu cita, lieto anstatt ... zu. Ja darbība vienkārši nenotiek, lieto ohne ... zu.",
        rightTitle: "ātri",
        rightItems: [
          { de: "anstatt ... zu", lv: "tā vietā lai", separator: "=" },
          { de: "ohne ... zu", lv: "bez", separator: "=" },
        ],
      },
      important: [
        "Abi konstrukcijās otrais darbības vārds ir ar zu.",
        "ohne + Akkusativ (bez siera) ≠ ohne ... zu (neko nedara).",
        "anstatt un statt bieži ir aizvietojami.",
      ],
      mistakes: [
        { wrong: "anstatt zu warten, ich rufe an", right: "Anstatt zu warten, rufe ich an." },
        { wrong: "ohne sich verabschieden", right: "ohne sich zu verabschieden" },
      ],
      remember: [
        "anstatt ... zu = tā vietā lai.",
        "ohne ... zu = bez (darbība nenotiek).",
        "zu ir obligāts!",
      ],
      sectionAccents: {
        lead: { blue: ["anstatt", "zu"], purple: ["tā vietā lai"], red: ["ohne", "zu"], yellow: ["bez"] },
        comparisonCards: [
          { lv: { purple: ["tā vietā lai"] }, de: { blue: ["anstatt", "zu"] }, example: { blue: ["anstatt", "zu", "fahren"], purple: ["tā vietā", "brauktu"] } },
          { lv: { purple: ["bez"] }, de: { red: ["ohne", "zu"] }, example: { red: ["ohne", "zu", "verabschieden"], purple: ["neuzvadoties"] } },
        ],
        examples: [
          { de: { blue: ["anstatt", "zu", "trinken"] }, lv: { purple: ["tā vietā", "dzertu"] } },
          { de: { red: ["ohne", "zu", "verabschieden"] }, lv: { purple: ["neuzvadoties"] } },
          { de: { blue: ["Anstatt", "zu", "warten"] }, lv: { purple: ["tā vietā", "gaidītu"] } },
          { de: { red: ["ohne", "zu", "kochen"] }, lv: { purple: ["nepagatavojot"] } },
          { de: { blue: ["anstatt", "fernzusehen"] }, lv: { purple: ["tā vietā", "skatītos"] } },
          { de: { red: ["ohne", "zu", "haben"] }, lv: { purple: ["nav", "naudas"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["tā vietā lai"] }, de: { blue: ["anstatt", "zu"] }, example: { blue: ["Anstatt", "zu", "warten"] }, translation: { purple: ["tā vietā", "gaidītu"] } },
          { lv: { purple: ["bez"] }, de: { red: ["ohne", "zu"] }, example: { red: ["ohne", "zu", "verabschieden"] }, translation: { purple: ["neuzvadoties"] } },
          { lv: { purple: ["zu"] }, de: { blue: ["zu", "Verb"] }, example: { blue: ["zu", "fragen"] }, translation: { purple: ["nejautājot"] } },
          { lv: { purple: ["statt"] }, de: { blue: ["statt", "zu"] }, example: { blue: ["Statt", "zu", "warten"] }, translation: { purple: ["tā vietā"] } },
          { lv: { purple: ["bez siera"] }, de: { yellow: ["ohne", "Käse"] }, example: { yellow: ["ohne", "Käse"] }, translation: { purple: ["bez", "siera"] } },
          { lv: { purple: ["aizstāšana"] }, de: { blue: ["anstatt"], red: ["ohne"] }, example: { blue: ["Rad"], red: ["ging"] }, translation: { purple: ["ritenis", "aizgāja"] } },
        ],
        importantComparison: [
          { blue: ["Anstatt", "zu", "warten"], purple: ["tā vietā", "gaidītu"] },
          { red: ["ohne", "zu", "verabschieden"], purple: ["neuzvadoties"] },
          { blue: ["aizstāj"], red: ["izlaiž"] },
        ],
        tip: {
          left: { blue: ["anstatt"], red: ["ohne", "zu"] },
          rightItems: [
            { de: { blue: ["anstatt", "zu"] }, lv: { purple: ["tā vietā lai"] } },
            { de: { red: ["ohne", "zu"] }, lv: { purple: ["bez"] } },
          ],
        },
        important: [
          { blue: ["anstatt", "zu"], red: ["ohne", "zu"] },
          { yellow: ["ohne", "Käse"], red: ["ohne", "zu"] },
          { blue: ["anstatt", "statt"] },
        ],
        mistakes: [
          { wrong: { red: ["ohne sich verabschieden"] }, right: { red: ["ohne sich zu verabschieden"] } },
          { wrong: { blue: ["anstatt zu warten, ich rufe"] }, right: { blue: ["Anstatt zu warten, rufe ich"] } },
        ],
        remember: [
          { blue: ["anstatt ... zu"], purple: ["tā vietā lai"] },
          { red: ["ohne ... zu"], purple: ["bez"] },
          { blue: ["zu"] },
        ],
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

  for (const card of NEW_CARDS) {
    if (!existingIds.has(card.study.id)) {
      words.push(card);
      existingIds.add(card.study.id);
    }
  }

  fs.writeFileSync(filePath, serializeWords(words), "utf8");
  console.log(`${rel}: ${before} -> ${words.length} (removed ${[...REMOVE_DE].join(", ")}, added ${NEW_CARDS.length} cards)`);
}

// Remove covered words from other levels to avoid duplication
const OTHER_REMOVALS = [
  { rel: "data/a1.js", varName: "A1_WORDS", remove: ["weil"] },
  { rel: "data/a2.js", varName: "A2_WORDS", remove: ["obwohl"] },
];

for (const { rel, varName, remove } of OTHER_REMOVALS) {
  for (const target of [rel, rel.replace(/^data\//, "www/data/")]) {
    const filePath = path.join(root, target);
    if (!fs.existsSync(filePath)) continue;
    const win = {};
    vm.runInContext(fs.readFileSync(filePath, "utf8"), vm.createContext({ window: win }));
    const before = win[varName].length;
    win[varName] = win[varName].filter((w) => !remove.includes(w.de));
    const lines = [`const ${varName} = [`];
    for (const w of win[varName]) {
      lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
    }
    lines.push("];", "", `window.${varName} = ${varName};`);
    fs.writeFileSync(filePath, lines.join("\n"), "utf8");
    console.log(`${target}: removed [${remove.join(", ")}] (${before} -> ${win[varName].length})`);
  }
}

console.log("\n✅ B1 comparison cards integrated.");
