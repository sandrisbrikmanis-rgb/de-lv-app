/**
 * Integrate C1/C2 comparisonStudy cards for commonly confused C1-level verb pairs.
 * Usage: node scripts/integrate-c1-c2-comparison-cards.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { serializeWords, COMPARISON_COVERED_WORDS } = require("./audit-goethe-c1-c2-shared");

const root = path.join(__dirname, "..");
const targets = ["data/c1.js", "www/data/c1.js"];

const REMOVE_DE = new Set([...COMPARISON_COVERED_WORDS]);

const NEW_CARDS = [
  {
    de: "beziehen • beabsichtigen",
    lv: "Attiecināt • Nodomāt • Plānot",
    level: "C1",
    study: {
      id: "compare-beziehen-beabsichtigen",
      layout: "comparisonStudy",
      title: "Attiecināt • Nodomāt • Plānot",
      subtitle: "beziehen • beabsichtigen",
      lead: "beziehen un beabsichtigen C1 stilā bieži tiek jaukti. beziehen attiecas uz attiecību vai regulāru saņemšanu; beabsichtigen — uz apzinātu nodomu.",
      explanation:
        "beziehen (sich beziehen auf) nozīmē attiecināt, attiekties uz avotu, regulāru maksājumu vai ievākšanos. beabsichtigen nozīmē apzināti nodomāt vai plānot darbību — nevis attiecību, bet nolūku.",
      words: [
        {
          icon: "🔗",
          lv: "attiecināt • attiekties uz",
          de: "beziehen / sich beziehen auf",
          description:
            "Formāls reģistrs: attiecināt uz avotu, regulāru pensiju/algas saņemšanu vai ievākšanos dzīvoklī.",
          example: "Die Studie bezieht sich auf aktuelle Daten. = Pētījums attiecas uz aktuālajiem datiem.",
        },
        {
          icon: "🎯",
          lv: "nodomāt • plānot",
          de: "beabsichtigen",
          description: "Apzināts nodoms veikt darbību nākotnē. Neattiecas uz attiecību, bet uz plānu.",
          example: "Er beabsichtigt, das Projekt zu beenden. = Viņš nodomājis pabeigt projektu.",
        },
      ],
      examples: [
        { de: "Die Kritik bezieht sich auf den Bericht.", lv: "kritika attiecas uz ziņojumu." },
        { de: "Sie beziehen ab Januar eine neue Wohnung.", lv: "viņi no janvāra ievāksies jaunajā dzīvoklī." },
        { de: "Er beabsichtigt, nächstes Jahr zu wechseln.", lv: "viņš plāno nākamgad pāriet citur." },
        { de: "Was beabsichtigen Sie mit dieser Maßnahme?", lv: "ko jūs nodomājat ar šo pasākumu?" },
        { de: "Der Verweis bezieht sich auf Paragraf 12.", lv: "atsauce attiecas uz 12. pantu." },
        { de: "Wir beabsichtigen keine Änderung.", lv: "mēs neplānojam izmaiņu." },
      ],
      comparisonTable: [
        {
          lv: "attiecināt",
          de: "beziehen",
          meaning: "attiecināt uz avotu",
          describes: "attiecība / saņemšana",
          example: "Die Studie bezieht sich auf aktuelle Daten.",
          translation: "pētījums attiecas uz aktuālajiem datiem.",
        },
        {
          lv: "nodomāt",
          de: "beabsichtigen",
          meaning: "apzināts nodoms",
          describes: "plāns / nolūks",
          example: "Er beabsichtigt, das Projekt zu beenden.",
          translation: "viņš nodomājis pabeigt projektu.",
        },
        {
          lv: "attiekties uz",
          de: "sich beziehen auf",
          meaning: "attiecināt uz objektu",
          describes: "refleksīva konstrukcija",
          example: "Die Kritik bezieht sich auf den Bericht.",
          translation: "kritika attiecas uz ziņojumu.",
        },
        {
          lv: "ievākties",
          de: "Wohnung beziehen",
          meaning: "saņemt / ievākties",
          describes: "administratīvs lietojums",
          example: "Sie beziehen ab Januar eine neue Wohnung.",
          translation: "viņi no janvāra ievāksies jaunajā dzīvoklī.",
        },
        {
          lv: "plānot",
          de: "beabsichtigen",
          meaning: "plānot darbību",
          describes: "oficiāls reģistrs",
          example: "Was beabsichtigen Sie mit dieser Maßnahme?",
          translation: "ko jūs nodomājat ar šo pasākumu?",
        },
        {
          lv: "neplānot",
          de: "nicht beabsichtigen",
          meaning: "apzināti neveikt",
          describes: "noliegums formālā stilā",
          example: "Wir beabsichtigen keine Änderung.",
          translation: "mēs neplānojam izmaiņu.",
        },
      ],
      importantComparison: [
        "sich beziehen auf = attiekties uz (nevis *beabsichtigen auf).",
        "beabsichtigen + zu + Infinitiv = nodomāt kaut ko darīt.",
        "beziehen ≠ beabsichtigen: attiecība pret nodomu.",
      ],
      tip: {
        left: "Ja runa ir par attiecību, avotu vai regulāru saņemšanu — beziehen. Ja par apzinātu plānu — beabsichtigen.",
        rightTitle: "ātri",
        rightItems: [
          { de: "sich beziehen auf", lv: "attiekties uz", separator: "=" },
          { de: "beabsichtigen", lv: "nodomāt", separator: "=" },
        ],
      },
      important: [
        "beziehen bieži ar sich beziehen auf + Akkusativ.",
        "beabsichtigen + zu-Infinitiv: Er beabsichtigt zu gehen.",
        "beabsichtigen nevar aizstāt ar beziehen — tas ir nolūks, ne attiecība.",
      ],
      mistakes: [
        { wrong: "Die Studie beabsichtigt sich auf Daten.", right: "Die Studie bezieht sich auf Daten." },
        { wrong: "Er bezieht, das Projekt zu beenden.", right: "Er beabsichtigt, das Projekt zu beenden." },
      ],
      remember: [
        "beziehen → attiecība, avots, saņemšana.",
        "beabsichtigen → nodoms, plāns.",
      ],
      sectionAccents: {
        lead: { blue: ["beziehen"], purple: ["attiecība"], green: ["beabsichtigen"], yellow: ["nodoms"] },
        comparisonCards: [
          { lv: { purple: ["attiecināt", "attiekties"] }, de: { blue: ["beziehen", "bezieht"] } },
          { lv: { purple: ["nodomāt", "plānot"] }, de: { green: ["beabsichtigen", "beabsichtigt"] } },
        ],
        examples: [
          { de: { blue: ["bezieht", "auf"] }, lv: { purple: ["attiecas"] } },
          { de: { blue: ["beziehen"] }, lv: { purple: ["ievāksies"] } },
          { de: { green: ["beabsichtigt"] }, lv: { purple: ["plāno", "nodomājat"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["attiecināt"] }, de: { blue: ["beziehen"] }, example: { blue: ["bezieht"] }, translation: { purple: ["attiecas"] } },
          { lv: { purple: ["nodomāt"] }, de: { green: ["beabsichtigen"] }, example: { green: ["beabsichtigt"] }, translation: { purple: ["nodomājis"] } },
        ],
        tip: { left: { blue: ["beziehen"], green: ["beabsichtigen"] } },
        important: [{ blue: ["beziehen", "sich beziehen auf"] }, { green: ["beabsichtigen"] }],
      },
    },
  },
  {
    de: "unterstellen • voraussetzen",
    lv: "Pārmest • Pieņemt kā priekšnoteikumu",
    level: "C1",
    study: {
      id: "compare-unterstellen-voraussetzen",
      layout: "comparisonStudy",
      title: "Pārmest • Pieņemt kā priekšnoteikumu",
      subtitle: "unterstellen • voraussetzen",
      lead: "unterstellen un voraussetzen ir formāli C1 darbības vārdi ar pretējām attieksmēm: viens pārmest bez pamata, otrs pieņemt kā pašsaprotamu priekšnoteikumu.",
      explanation:
        "jemandem etwas unterstellen nozīmē nepamatoti piedēvēt vai pārmest. etwas voraussetzen nozīmē uzskatīt par pašsaprotamu priekšnoteikumu, kas jau pastāv.",
      words: [
        {
          icon: "⚠️",
          lv: "pārmest • piedēvēt bez pamata",
          de: "unterstellen",
          description: "Nepamatoti piešķirt vainu, motīvu vai nodomu citam.",
          example: "Man unterstellt mir schlechte Absichten. = Man pārmet man sliktu nodomu.",
        },
        {
          icon: "📋",
          lv: "pieņemt kā priekšnoteikumu",
          de: "voraussetzen",
          description: "Uzskatīt, ka kaut kas jau ir zināms vai pastāv kā pamats.",
          example: "Wir setzen Grundkenntnisse voraus. = Mēs pieņemam pamatzināšanas kā priekšnoteikumu.",
        },
      ],
      examples: [
        { de: "Ihm wird Untreue unterstellt.", lv: "viņam tiek pārmesta neuzticība." },
        { de: "Unterstellen Sie mir nichts!", lv: "nepārmetiet man neko!" },
        { de: "Der Kurs setzt B1-Kenntnisse voraus.", lv: "kurss paredz B1 līmeņa zināšanas." },
        { de: "Das setzt viel Erfahrung voraus.", lv: "tas prasa lielu pieredzi kā priekšnoteikumu." },
        { de: "Man darf niemandem Verrat unterstellen.", lv: "nevienam nedrīkst nepamatoti pārmest nodevību." },
        { de: "Wir setzen Ihre Mitarbeit voraus.", lv: "mēs pieņemam jūsu līdzdalību kā pašsaprotamu." },
      ],
      comparisonTable: [
        {
          lv: "pārmest",
          de: "unterstellen",
          meaning: "piedēvēt bez pamata",
          describes: "apsūdzība / pievilkšana",
          example: "Ihm wird Untreue unterstellt.",
          translation: "viņam tiek pārmesta neuzticība.",
        },
        {
          lv: "pieņemt priekšnoteikumu",
          de: "voraussetzen",
          meaning: "uzskatīt par pamatu",
          describes: "loģisks priekšnosacījums",
          example: "Wir setzen Grundkenntnisse voraus.",
          translation: "mēs pieņemam pamatzināšanas kā priekšnoteikumu.",
        },
        {
          lv: "nepārmest",
          de: "nichts unterstellen",
          meaning: "neattiecināt vainu",
          describes: "noliegums",
          example: "Unterstellen Sie mir nichts!",
          translation: "nepārmetiet man neko!",
        },
        {
          lv: "prasīt zināšanas",
          de: "Kenntnisse voraussetzen",
          meaning: "paredzēt līmeni",
          describes: "akadēmisks konteksts",
          example: "Der Kurs setzt B1-Kenntnisse voraus.",
          translation: "kurss paredz B1 līmeņa zināšanas.",
        },
        {
          lv: "prasīt pieredzi",
          de: "Erfahrung voraussetzen",
          meaning: "nepieciešama pieredze",
          describes: "profesionāls konteksts",
          example: "Das setzt viel Erfahrung voraus.",
          translation: "tas prasa lielu pieredzi kā priekšnoteikumu.",
        },
        {
          lv: "pieņemt līdzdalību",
          de: "Mitarbeit voraussetzen",
          meaning: "pašsaprotama sadarbība",
          describes: "oficiāls stils",
          example: "Wir setzen Ihre Mitarbeit voraus.",
          translation: "mēs pieņemam jūsu līdzdalību kā pašsaprotamu.",
        },
      ],
      importantComparison: [
        "unterstellen = nepamatota vaina; voraussetzen = loģisks priekšnosacījums.",
        "unterstellen + Dativ + Akkusativ: jemandem etwas unterstellen.",
        "voraussetzen + Akkusativ: etwas voraussetzen.",
      ],
      tip: {
        left: "Ja runa ir par nepamatotu pārmetumu — unterstellen. Ja par pamatzināšanu vai nosacījumu — voraussetzen.",
        rightTitle: "ātri",
        rightItems: [
          { de: "unterstellen", lv: "pārmest", separator: "=" },
          { de: "voraussetzen", lv: "pieņemt priekšnoteikumu", separator: "=" },
        ],
      },
      important: [
        "unterstellen ir emocionāli negatīvs — nepamatota apsūdzība.",
        "voraussetzen ir neitrāls — priekšnosacījums.",
        "Nesajaukt: *voraussetzen Untreue (pareizi: unterstellen).",
      ],
      mistakes: [
        { wrong: "Wir unterstellen Grundkenntnisse.", right: "Wir setzen Grundkenntnisse voraus." },
        { wrong: "Man setzt mir Verrat voraus.", right: "Man unterstellt mir Verrat." },
      ],
      remember: [
        "unterstellen → pārmest, piedēvēt.",
        "voraussetzen → pieņemt kā pamatu.",
      ],
      sectionAccents: {
        lead: { blue: ["unterstellen"], red: ["pārmest"], green: ["voraussetzen"], purple: ["priekšnoteikums"] },
        comparisonCards: [
          { lv: { red: ["pārmest"] }, de: { blue: ["unterstellen", "unterstellt"] } },
          { lv: { purple: ["priekšnoteikumu"] }, de: { green: ["voraussetzen", "voraus"] } },
        ],
        examples: [
          { de: { blue: ["unterstellt"] }, lv: { red: ["pārmesta"] } },
          { de: { green: ["voraussetzen", "voraus"] }, lv: { purple: ["priekšnoteikumu", "paredz"] } },
        ],
        comparisonTable: [
          { lv: { red: ["pārmest"] }, de: { blue: ["unterstellen"] }, translation: { red: ["pārmesta"] } },
          { lv: { purple: ["priekšnoteikumu"] }, de: { green: ["voraussetzen"] }, translation: { purple: ["pieņemam"] } },
        ],
        tip: { left: { blue: ["unterstellen"], green: ["voraussetzen"] } },
        important: [{ blue: ["unterstellen"] }, { green: ["voraussetzen"] }],
      },
    },
  },
  {
    de: "bewahren • aufrechterhalten",
    lv: "Pasargāt • Uzturēt spēkā",
    level: "C1",
    study: {
      id: "compare-bewahren-aufrechterhalten",
      layout: "comparisonStudy",
      title: "Pasargāt • Uzturēt spēkā",
      subtitle: "bewahren • aufrechterhalten",
      lead: "bewahren un aufrechterhalten abi nozīmē saglabāt, bet bewahren uzsver aizsardzību, bet aufrechterhalten — nepārtrauktu uzturēšanu spēkā.",
      explanation:
        "bewahren nozīmē pasargāt no bojājuma, zuduma vai izmaiņām. aufrechterhalten nozīmē uzturēt kādu stāvokli, sistēmu vai attiecību spēkā — nodrošināt turpināšanos.",
      words: [
        {
          icon: "🛡️",
          lv: "pasargāt • saglabāt",
          de: "bewahren",
          description: "Aizsargāt no zuduma, bojājuma vai iznīcināšanas — vērtību, tradīciju, mieru.",
          example: "Wir bewahren die Traditionen. = Mēs saglabājam tradīcijas.",
        },
        {
          icon: "⚙️",
          lv: "uzturēt spēkā",
          de: "aufrechterhalten",
          description: "Nodrošināt, ka kāds stāvoklis, kārtība vai attiecības turpinās pastāvēt.",
          example: "Der Staat erhält die Ordnung auf. = Valsts uztur kārtību spēkā.",
        },
      ],
      examples: [
        { de: "Sie bewahren die Ruhe in der Krise.", lv: "viņi saglabā mieru krīzē." },
        { de: "Das Museum bewahrt alte Kunstwerke.", lv: "muzejs saglabā vecos mākslas darbus." },
        { de: "Wir erhalten den Frieden auf.", lv: "mēs uzturām mieru spēkā." },
        { de: "Die Regierung erhält die Stabilität auf.", lv: "valdība uztur stabilitāti spēkā." },
        { de: "Er bewahrte sein Versprechen.", lv: "viņš turēja savu solījumu." },
        { de: "Man muss den Betrieb aufrechterhalten.", lv: "jāuztur darbība spēkā." },
      ],
      comparisonTable: [
        {
          lv: "pasargāt",
          de: "bewahren",
          meaning: "aizsargāt no zuduma",
          describes: "vērtību saglabāšana",
          example: "Wir bewahren die Traditionen.",
          translation: "mēs saglabājam tradīcijas.",
        },
        {
          lv: "uzturēt spēkā",
          de: "aufrechterhalten",
          meaning: "nodrošināt turpināšanos",
          describes: "stāvokļa uzturēšana",
          example: "Der Staat erhält die Ordnung auf.",
          translation: "valsts uztur kārtību spēkā.",
        },
        {
          lv: "saglabāt mieru",
          de: "Ruhe bewahren",
          meaning: "noturēt mieru",
          describes: "emocionāls konteksts",
          example: "Sie bewahren die Ruhe in der Krise.",
          translation: "viņi saglabā mieru krīzē.",
        },
        {
          lv: "uzturēt mieru",
          de: "Frieden aufrechterhalten",
          meaning: "miera nodrošināšana",
          describes: "politisks konteksts",
          example: "Wir erhalten den Frieden auf.",
          translation: "mēs uzturām mieru spēkā.",
        },
        {
          lv: "turēt solījumu",
          de: "Versprechen bewahren",
          meaning: "ievērot solījumu",
          describes: "personīga uzticamība",
          example: "Er bewahrte sein Versprechen.",
          translation: "viņš turēja savu solījumu.",
        },
        {
          lv: "uzturēt darbību",
          de: "Betrieb aufrechterhalten",
          meaning: "nepārtraukt darbu",
          describes: "ekonomisks konteksts",
          example: "Man muss den Betrieb aufrechterhalten.",
          translation: "jāuztur darbība spēkā.",
        },
      ],
      importantComparison: [
        "bewahren = pasargāt/saglabāt; aufrechterhalten = uzturēt spēkā.",
        "aufrechterhalten bieži ar trennbarem Präfix: aufrechterhalten → er hält auf.",
        "bewahren parasti transitīvs: etwas bewahren.",
      ],
      tip: {
        left: "Ja uzsvars uz aizsardzību vai saglabāšanu — bewahren. Ja uz nepārtrauktu uzturēšanu — aufrechterhalten.",
        rightTitle: "ātri",
        rightItems: [
          { de: "bewahren", lv: "pasargāt", separator: "=" },
          { de: "aufrechterhalten", lv: "uzturēt spēkā", separator: "=" },
        ],
      },
      important: [
        "bewahren: Wertvolles bewahren — pasargāt vērtīgo.",
        "aufrechterhalten: Ordnung/Frieden/Stabilität aufrechterhalten.",
        "aufrechterhalten ≠ bewahren: uzturēšana pret aizsardzību.",
      ],
      mistakes: [
        { wrong: "Wir bewahren den Frieden auf.", right: "Wir erhalten den Frieden auf." },
        { wrong: "Man erhält Traditionen auf.", right: "Man bewahrt Traditionen." },
      ],
      remember: [
        "bewahren → aizsargāt, saglabāt.",
        "aufrechterhalten → uzturēt spēkā.",
      ],
      sectionAccents: {
        lead: { blue: ["bewahren"], purple: ["aizsardzība"], green: ["aufrechterhalten"], yellow: ["uzturēšana"] },
        comparisonCards: [
          { lv: { purple: ["pasargāt"] }, de: { blue: ["bewahren", "bewahrt"] } },
          { lv: { yellow: ["uzturēt spēkā"] }, de: { green: ["aufrechterhalten", "erhält", "auf"] } },
        ],
        examples: [
          { de: { blue: ["bewahren"] }, lv: { purple: ["saglabājam", "saglabā"] } },
          { de: { green: ["erhält", "auf"] }, lv: { yellow: ["uztur", "uzturām"] } },
        ],
        comparisonTable: [
          { lv: { purple: ["pasargāt"] }, de: { blue: ["bewahren"] }, translation: { purple: ["saglabājam"] } },
          { lv: { yellow: ["uzturēt spēkā"] }, de: { green: ["aufrechterhalten"] }, translation: { yellow: ["uztur"] } },
        ],
        tip: { left: { blue: ["bewahren"], green: ["aufrechterhalten"] } },
        important: [{ blue: ["bewahren"] }, { green: ["aufrechterhalten"] }],
      },
    },
  },
];

function loadC1() {
  const win = {};
  vm.runInContext(fs.readFileSync(path.join(root, "data/c1.js"), "utf8"), vm.createContext({ window: win }));
  return win.C1_WORDS;
}

function integrate() {
  let words = loadC1();
  const before = words.length;
  words = words.filter((w) => !REMOVE_DE.has(w.de));
  const removed = before - words.length;

  for (const card of NEW_CARDS) {
    const idx = words.findIndex((w) => w.study?.id === card.study.id);
    if (idx >= 0) words[idx] = card;
    else words.push(card);
  }

  const out = serializeWords(words, "C1_WORDS");
  for (const rel of targets) {
    fs.writeFileSync(path.join(root, rel), out, "utf8");
  }

  console.log(`Removed ${removed} base entries covered by comparison cards.`);
  console.log(`Added/updated ${NEW_CARDS.length} comparisonStudy cards.`);
  console.log(`C1 total: ${words.length} entries.`);
}

integrate();
