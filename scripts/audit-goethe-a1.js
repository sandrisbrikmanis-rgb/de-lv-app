/**
 * Audit & fix A1 vocabulary against Goethe-Zertifikat A1 Wortliste (Fit in Deutsch 1).
 * Usage: node scripts/audit-goethe-a1.js [--fix]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const FIX = process.argv.includes("--fix");
const root = path.join(__dirname, "..");
const pdfPath = path.join(__dirname, "goethe-a1-pdf-text.txt");

// --- Goethe reference: nouns extracted from official Wortliste ---
const GOETHE_NOUNS = {
  Achtung: { article: "die", singularOnly: true },
  Adresse: { article: "die", plural: "Adressen" },
  Ahnung: { article: "die", plural: "Ahnungen" },
  Alter: { article: "das", singularOnly: true },
  Anfang: { article: "der", plural: "Anfänge" },
  Angst: { article: "die", plural: "Ängste" },
  Anruf: { article: "der", plural: "Anrufe" },
  Anrufbeantworter: { article: "der", plural: "Anrufbeantworter" },
  Antwort: { article: "die", plural: "Antworten" },
  Anzeige: { article: "die", plural: "Anzeigen" },
  Apfel: { article: "der", plural: "Äpfel" },
  Apotheke: { article: "die", plural: "Apotheken" },
  Appetit: { article: "der", singularOnly: true },
  Arbeit: { article: "die", plural: "Arbeiten" },
  Arm: { article: "der", plural: "Arme" },
  Artikel: { article: "der", plural: "Artikel" },
  Arzt: { article: "der", plural: "Ärzte" },
  Ärztin: { article: "die", plural: "Ärztinnen" },
  Auge: { article: "das", plural: "Augen" },
  Ausflug: { article: "der", plural: "Ausflüge" },
  Ausland: { article: "das", singularOnly: true },
  Auto: { article: "das", plural: "Autos" },
  Automat: { article: "der", plural: "Automaten" },
  Baby: { article: "das", plural: "Babys" },
  Bad: { article: "das", plural: "Bäder" },
  Bahnhof: { article: "der", plural: "Bahnhöfe" },
  Bahnsteig: { article: "der", plural: "Bahnsteige" },
  Ball: { article: "der", plural: "Bälle" },
  Banane: { article: "die", plural: "Bananen" },
  Band: { article: "die", plural: "Bands" },
  Basketball: { article: "der", plural: "Basketbälle" },
  Bauch: { article: "der", plural: "Bäuche" },
  Baum: { article: "der", plural: "Bäume" },
  Beruf: { article: "der", plural: "Berufe" },
  Bett: { article: "das", plural: "Betten" },
  Bibliothek: { article: "die", plural: "Bibliotheken" },
  Bleistift: { article: "der", plural: "Bleistifte" },
  Blume: { article: "die", plural: "Blumen" },
  Bluse: { article: "die", plural: "Blusen" },
  Brief: { article: "der", plural: "Briefe" },
  Brot: { article: "das", plural: "Brote" },
  Brötchen: { article: "das", plural: "Brötchen" },
  Buch: { article: "das", plural: "Bücher" },
  Bus: { article: "der", plural: "Busse" },
  CD: { article: "die", plural: "CDs" },
  Comic: { article: "der", plural: "Comics" },
  Computer: { article: "der", plural: "Computer" },
  Dank: { article: "der", singularOnly: true },
  Disco: { article: "die", plural: "Discos" },
  Durst: { article: "der", singularOnly: true },
  Ei: { article: "das", plural: "Eier" },
  Eins: { article: "die", singularOnly: true },
  Einladung: { article: "die", plural: "Einladungen" },
  Eis: { article: "das", singularOnly: true },
  Eltern: { article: "die", pluralOnly: true },
  Ende: { article: "das", singularOnly: true },
  Entschuldigung: { article: "die", plural: "Entschuldigungen" },
  Erwachsene: { article: "der", plural: "Erwachsenen" },
  Essen: { article: "das", plural: "Essen" },
  Fach: { article: "das", plural: "Fächer" },
  Fahrkarte: { article: "die", plural: "Fahrkarten" },
  Fahrplan: { article: "der", plural: "Fahrpläne" },
  Fahrrad: { article: "das", plural: "Fahrräder" },
  Familie: { article: "die", plural: "Familien" },
  Familienname: { article: "der", plural: "Familiennamen" },
  Fehler: { article: "der", plural: "Fehler" },
  Fenster: { article: "das", plural: "Fenster" },
  Ferien: { article: "die", pluralOnly: true },
  Fernsehen: { article: "das", singularOnly: true },
  Film: { article: "der", plural: "Filme" },
  Fisch: { article: "der", plural: "Fische" },
  Flasche: { article: "die", plural: "Flaschen" },
  Fleisch: { article: "das", singularOnly: true },
  Flughafen: { article: "der", plural: "Flughäfen" },
  Flugzeug: { article: "das", plural: "Flugzeuge" },
  Fluss: { article: "der", plural: "Flüsse" },
  Foto: { article: "das", plural: "Fotos" },
  Fotoapparat: { article: "der", plural: "Fotoapparate" },
  Frage: { article: "die", plural: "Fragen" },
  Frau: { article: "die", plural: "Frauen" },
  Freund: { article: "der", plural: "Freunde" },
  Freundin: { article: "die", plural: "Freundinnen" },
  Frühstück: { article: "das", singularOnly: true },
  Fuß: { article: "der", plural: "Füße" },
  Fußball: { article: "der", plural: "Fußbälle" },
  Garten: { article: "der", plural: "Gärten" },
  Geburtstag: { article: "der", plural: "Geburtstage" },
  Geld: { article: "das", singularOnly: true },
  Gemüse: { article: "das", singularOnly: true },
  Gepäck: { article: "das", singularOnly: true },
  Geschäft: { article: "das", plural: "Geschäfte" },
  Geschenk: { article: "das", plural: "Geschenke" },
  Geschichte: { article: "die", plural: "Geschichten" },
  Geschwister: { article: "die", pluralOnly: true },
  Glas: { article: "das", plural: "Gläser" },
  Gleis: { article: "das", plural: "Gleise" },
  Glück: { article: "das", singularOnly: true },
  Glückwunsch: { article: "der", plural: "Glückwünsche" },
  Großeltern: { article: "die", pluralOnly: true },
  Gruß: { article: "der", plural: "Grüße" },
  Haar: { article: "das", plural: "Haare" },
  Hals: { article: "der", plural: "Hälse" },
  Haltestelle: { article: "die", plural: "Haltestellen" },
  Handy: { article: "das", plural: "Handys" },
  Haus: { article: "das", plural: "Häuser" },
  Hausaufgabe: { article: "die", plural: "Hausaufgaben" },
  Heft: { article: "das", plural: "Hefte" },
  Herr: { article: "der", plural: "Herren" },
  Hobby: { article: "das", plural: "Hobbys" },
  Hochzeit: { article: "die", plural: "Hochzeiten" },
  Hund: { article: "der", plural: "Hunde" },
  Hunger: { article: "der", singularOnly: true },
  Idee: { article: "die", plural: "Ideen" },
  Information: { article: "die", plural: "Informationen" },
  Insel: { article: "die", plural: "Inseln" },
  Internet: { article: "das", singularOnly: true },
  Jacke: { article: "die", plural: "Jacken" },
  Jeans: { article: "die", pluralOnly: true },
  Kleidung: { article: "die", singularOnly: true },
  Hose: { article: "die", plural: "Hosen" },
  Urlaub: { article: "der", singularOnly: true },
  Jugendliche: { article: "der", plural: "Jugendlichen" },
  Junge: { article: "der", plural: "Jungen" },
  Kaffee: { article: "der", singularOnly: true },
  Kakao: { article: "der", singularOnly: true },
  Kamera: { article: "die", plural: "Kameras" },
  Karte: { article: "die", plural: "Karten" },
  Kartoffel: { article: "die", plural: "Kartoffeln" },
  Kohl: { article: "der", singularOnly: true },
  Käse: { article: "der", singularOnly: true },
  Katze: { article: "die", plural: "Katzen" },
  Kind: { article: "das", plural: "Kinder" },
  Kino: { article: "das", plural: "Kinos" },
  Kiosk: { article: "der", plural: "Kioske" },
  Klasse: { article: "die", plural: "Klassen" },
  Klassenarbeit: { article: "die", plural: "Klassenarbeiten" },
  Klavier: { article: "das", plural: "Klaviere" },
  Kleid: { article: "das", plural: "Kleider" },
  Kopf: { article: "der", plural: "Köpfe" },
  Krankenhaus: { article: "das", plural: "Krankenhäuser" },
  Kuchen: { article: "der", plural: "Kuchen" },
  Küche: { article: "die", plural: "Küchen" },
  Kühlschrank: { article: "der", plural: "Kühlschränke" },
  Kugelschreiber: { article: "der", plural: "Kugelschreiber" },
  Kurs: { article: "der", plural: "Kurse" },
  Lampe: { article: "die", plural: "Lampen" },
  Land: { article: "das", plural: "Länder" },
  Leute: { article: "die", pluralOnly: true },
  Lust: { article: "die", singularOnly: true },
  Mail: { article: "die", plural: "Mails" },
  Mal: { article: "das", plural: "Male" },
  Mann: { article: "der", plural: "Männer" },
  Mantel: { article: "der", plural: "Mäntel" },
  Markt: { article: "der", plural: "Märkte" },
  Marktplatz: { article: "der", plural: "Marktplätze" },
  Marmelade: { article: "die", plural: "Marmeladen" },
  Milch: { article: "die", singularOnly: true },
  Mineralwasser: { article: "das", plural: "Mineralwasser" },
  Musik: { article: "die", singularOnly: true },
  Mädchen: { article: "das", plural: "Mädchen" },
  Nachricht: { article: "die", plural: "Nachrichten" },
  Name: { article: "der", plural: "Namen" },
  Note: { article: "die", plural: "Noten" },
  Nummer: { article: "die", plural: "Nummern" },
  Obst: { article: "das", singularOnly: true },
  Ohrring: { article: "der", plural: "Ohrringe" },
  Ordnung: { article: "die", plural: "Ordnungen" },
  Paket: { article: "das", plural: "Pakete" },
  Park: { article: "der", plural: "Parks" },
  Pause: { article: "die", plural: "Pausen" },
  Pferd: { article: "das", plural: "Pferde" },
  Pizza: { article: "die", plural: "Pizzen" },
  Platz: { article: "der", plural: "Plätze" },
  Post: { article: "die", singularOnly: true },
  Poster: { article: "das", plural: "Poster" },
  Postkarte: { article: "die", plural: "Postkarten" },
  Problem: { article: "das", plural: "Probleme" },
  Pullover: { article: "der", plural: "Pullover" },
  Quatsch: { article: "der", singularOnly: true },
  Quiz: { article: "das", singularOnly: true },
  Rad: { article: "das", plural: "Räder" },
  Radiergummi: { article: "der", plural: "Radiergummis" },
  Radio: { article: "das", plural: "Radios" },
  Rätsel: { article: "das", plural: "Rätsel" },
  Regen: { article: "der", singularOnly: true },
  Reise: { article: "die", plural: "Reisen" },
  Restaurant: { article: "das", plural: "Restaurants" },
  Ring: { article: "der", plural: "Ringe" },
  Rucksack: { article: "der", plural: "Rucksäcke" },
  Sache: { article: "die", plural: "Sachen" },
  Saft: { article: "der", plural: "Säfte" },
  Salat: { article: "der", plural: "Salate" },
  Schiff: { article: "das", plural: "Schiffe" },
  Schmerz: { article: "der", plural: "Schmerzen" },
  Schokolade: { article: "die", singularOnly: true },
  Schwimmbad: { article: "das", plural: "Schwimmbäder" },
  See: { article: "der", plural: "Seen" },
  Seite: { article: "die", plural: "Seiten" },
  Spiel: { article: "das", plural: "Spiele" },
  Spielplatz: { article: "der", plural: "Spielplätze" },
  Spaß: { article: "der", singularOnly: true },
  Sport: { article: "der", singularOnly: true },
  Sprache: { article: "die", plural: "Sprachen" },
  Stadt: { article: "die", plural: "Städte" },
  Staat: { article: "der", plural: "Staaten" },
  Strand: { article: "der", plural: "Strände" },
  Straße: { article: "die", plural: "Straßen" },
  Stück: { article: "das", plural: "Stücke" },
  Supermarkt: { article: "der", plural: "Supermärkte" },
  Suppe: { article: "die", plural: "Suppen" },
  Süßigkeiten: { article: "die", pluralOnly: true },
  Tasche: { article: "die", plural: "Taschen" },
  Taschengeld: { article: "das", singularOnly: true },
  Tasse: { article: "die", plural: "Tassen" },
  Tee: { article: "der", plural: "Tees" },
  Theater: { article: "das", plural: "Theater" },
  Thema: { article: "das", plural: "Themen" },
  Tier: { article: "das", plural: "Tiere" },
  Tisch: { article: "der", plural: "Tische" },
  Toilette: { article: "die", plural: "Toiletten" },
  "T-Shirt": { article: "das", plural: "T-Shirts" },
  Tür: { article: "die", plural: "Türen" },
  "U-Bahn": { article: "die", plural: "U-Bahnen" },
  Uhr: { article: "die", plural: "Uhren" },
  Unterricht: { article: "der", singularOnly: true },
  Vorname: { article: "der", plural: "Vornamen" },
  Wald: { article: "der", plural: "Wälder" },
  Wasser: { article: "das", singularOnly: true },
  Wiedersehen: { article: "das", plural: "Wiedersehen" },
  Wohnung: { article: "die", plural: "Wohnungen" },
  Wohnzimmer: { article: "das", plural: "Wohnzimmer" },
  Wort: { article: "das", plural: "Wörter" },
  Wurst: { article: "die", plural: "Würste" },
  Zahn: { article: "der", plural: "Zähne" },
  Zeit: { article: "die", plural: "Zeiten" },
  Zeitung: { article: "die", plural: "Zeitungen" },
  Zimmer: { article: "das", plural: "Zimmer" },
  Zug: { article: "der", plural: "Züge" },
  Gesundheit: { article: "die", singularOnly: true },
  Butter: { article: "die", singularOnly: true },
};

/** Mēneši — Singularetantum (ikdienā nav daudzskaitļa; A1 līmenī tikai vienskaitlis). */
const GOETHE_A1_MONTHS = {
  Januar: { article: "der", singularOnly: true },
  Februar: { article: "der", singularOnly: true },
  März: { article: "der", singularOnly: true },
  April: { article: "der", singularOnly: true },
  Mai: { article: "der", singularOnly: true },
  Juni: { article: "der", singularOnly: true },
  Juli: { article: "der", singularOnly: true },
  August: { article: "der", singularOnly: true },
  September: { article: "der", singularOnly: true },
  Oktober: { article: "der", singularOnly: true },
  November: { article: "der", singularOnly: true },
  Dezember: { article: "der", singularOnly: true },
};
Object.assign(GOETHE_NOUNS, GOETHE_A1_MONTHS);

// Nouns that duplicate an existing verb entry — remove noun, keep verb
const DUPLICATE_NOUNS_TO_REMOVE = new Set(["Leben", "Kosten"]);

// Capitalized verb forms wrongly entered as nouns
const VERB_NOUN_CONFUSION = {
  Können: "können",
  Sein: "sein",
  Gefallen: "gefallen",
};

// Adjectives wrongly entered as nouns (capitalized + article)
const ADJECTIVE_FIXES = {
  Hoch: { de: "hoch", lv: "augsts" },
  Gut: { de: "gut", lv: "labs" },
};

// Goethe A1 Wortliste — adjectives (lowercase, no article/plural)
const GOETHE_A1_ADJECTIVES = new Set(
  `groß klein gut schlecht neu alt jung schön hässlich schnell langsam warm kalt
  freundlich langweilig billig teuer ruhig leise hoch niedrig wichtig falsch richtig
  rot blau grün gelb schwarz weiß braun grau hungrig durstig müde krank glücklich traurig
  angenehm nett höflich dunkel hell sauber schmutzig leicht schwer stark schwach frisch
  kaputt fertig bereit besetzt frei voll leer gleich verschieden spät früh bald kurz lang lieb böse frech`
    .split(/\s+/)
    .map((s) => s.toLowerCase())
);

// Known wrong LV noun translations for German adjectives
const ADJECTIVE_LV_NOUN_MISTAKES = {
  gut: ["labums", "labums/prece", "prece", "labums • prece"],
  Gut: ["labums", "labums/prece", "prece"],
};

// Valid comparisonStudy card IDs in A1 (skip base-word audit rules for these entries)
const COMPARISON_CARD_IDS = new Set([
  "compare-fernsehen-fernsehen",
  "compare-appetit-essen",
  "compare-gemuese-obst",
  "compare-ferien-urlaub",
  "compare-geschwister-eltern",
  "compare-stadt-staat",
  "compare-uhr-zeit",
  "compare-laut-der-laut",
  "compare-mal-einmal-nochmal",
]);

// Required subtitles: nouns must include articles (der/die/das)
const COMPARISON_SUBTITLES = {
  "compare-fernsehen-fernsehen": "fernsehen • das Fernsehen",
  "compare-appetit-essen": "der Appetit • essen • das Essen",
  "compare-gemuese-obst": "das Gemüse • das Obst",
  "compare-ferien-urlaub": "die Ferien • der Urlaub",
  "compare-geschwister-eltern": "die Geschwister • die Eltern",
  "compare-stadt-staat": "die Stadt • der Staat",
  "compare-uhr-zeit": "die Uhr • die Zeit",
  "compare-laut-der-laut": "laut • der Laut",
  "compare-mal-einmal-nochmal": "mal • einmal • noch mal",
};

// Base words covered by comparison cards — absence from standalone entries is OK
const COMPARISON_COVERED_WORDS = new Set([
  "Appetit", "essen", "Essen",
  "fernsehen", "Fernsehen",
  "Gemüse", "Obst",
  "Ferien", "Urlaub",
  "Geschwister", "Eltern",
  "Stadt", "Staat",
  "Uhr", "Zeit",
  "laut", "Laut",
]);

function loadA1() {
  const win = {};
  vm.runInContext(fs.readFileSync(path.join(root, "data/a1.js"), "utf8"), vm.createContext({ window: win }));
  return win.A1_WORDS;
}

function formatEntry(e) {
  const parts = [`de: "${e.de}"`];
  if (e.de_article) parts.push(`art: ${e.de_article}`);
  if (e.de_plural) parts.push(`pl: ${e.de_plural}`);
  if (e.lv) parts.push(`lv: "${e.lv}"`);
  return `{ ${parts.join(", ")} }`;
}

function audit(words) {
  const fixes = [];
  const deSet = new Set(words.map((w) => w.de.toLowerCase()));

  for (const word of words) {
    const de = word.de;

    // Skip comparison study card entries
    if (word.study?.layout === "comparisonStudy" && COMPARISON_CARD_IDS.has(word.study.id)) {
      continue;
    }

    const goethe = GOETHE_NOUNS[de];

    // Remove duplicate noun when verb already exists
    if (DUPLICATE_NOUNS_TO_REMOVE.has(de)) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: "Dzēsts dublēts lietvārda ieraksts (darbības vārds jau pastāv)",
        changes: { removeEntry: true },
      });
      continue;
    }

    // Verbs wrongly entered as capitalized nouns
    if (VERB_NOUN_CONFUSION[de]) {
      const verbForm = VERB_NOUN_CONFUSION[de];
      const hasSeparateVerb = words.some((w) => w.de === verbForm && w.de !== de);
      if (hasSeparateVerb) {
        fixes.push({
          de,
          old: formatEntry(word),
          reason: "Dzēsts dublēts ieraksts — darbības vārds jau pastāv",
          changes: { removeEntry: true },
        });
      } else {
        fixes.push({
          de,
          old: formatEntry(word),
          reason: "Noņemts artikuls no darbības vārda; izlabota kapitalizācija",
          changes: { de: verbForm, removeArticle: true, removePlural: true },
        });
      }
      continue;
    }

    // Adjectives wrongly entered as nouns
    if (ADJECTIVE_FIXES[de]) {
      const adj = ADJECTIVE_FIXES[de];
      fixes.push({
        de,
        old: formatEntry(word),
        reason: "Noņemts artikuls — A1 līmenī tas ir īpašības vārds, ne lietvārds",
        changes: { de: adj.de, lv: adj.lv, removeArticle: true, removePlural: true },
      });
      continue;
    }

    if (!goethe || !word.de_article) continue;

    // Rule 2: article check
    if (word.de_article !== goethe.article) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: `Izlabots artikuls (${word.de_article} → ${goethe.article})`,
        changes: { de_article: goethe.article },
      });
    }

    // Rule 3: Singularetantum — remove plural
    if (goethe.singularOnly && word.de_plural) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: "Noņemta kļūdaina daudzskaitļa forma (Singularetantum pēc Goethe Wortliste)",
        changes: { removePlural: true },
      });
    }

    // Rule 3: Pluraletantum — remove invented plural
    if (goethe.pluralOnly && word.de_plural) {
      const plWord = word.de_plural.replace(/^die\s+/, "");
      const isInvented = plWord !== de && plWord !== de + "n";
      if (isInvented) {
        fixes.push({
          de,
          old: formatEntry(word),
          reason: "Noņemta mākslīgi izdomāta daudzskaitļa forma (Pluraletantum)",
          changes: { removePlural: true },
        });
      }
    }

    // Rule 2: correct plural form
    if (goethe.plural && !goethe.singularOnly && !goethe.pluralOnly && word.de_plural) {
      const expectedPlural = `die ${goethe.plural}`;
      if (word.de_plural !== expectedPlural) {
        fixes.push({
          de,
          old: formatEntry(word),
          reason: `Izlabota daudzskaitļa forma (${word.de_plural} → ${expectedPlural})`,
          changes: { de_plural: expectedPlural },
        });
      }
    }
  }

  return fixes;
}

function auditAdjectives(words) {
  const fixes = [];
  for (const word of words) {
    if (word.study?.layout === "comparisonStudy" && COMPARISON_CARD_IDS.has(word.study?.id)) {
      continue;
    }

    const de = word.de;
    const deLower = de.toLowerCase();
    if (ADJECTIVE_FIXES[de]) continue; // handled in main audit()
    const isGoetheAdj = GOETHE_A1_ADJECTIVES.has(deLower);
    if (!isGoetheAdj) continue;

    // Wrong article/plural on adjective
    if (word.de_article || word.de_plural) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: "Noņemts artikuls/daudzskaitlis — īpašības vārds (ne das Gut u.tml.)",
        changes: { de: deLower, removeArticle: true, removePlural: true },
      });
      continue;
    }

    // Capitalized adjective form
    if (de !== deLower) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: "Izlabota kapitalizācija — īpašības vārds ar mazo sākumburtu",
        changes: { de: deLower },
      });
      continue;
    }

    // LV noun translation for adjective
    const wrongLv = ADJECTIVE_LV_NOUN_MISTAKES[de] || ADJECTIVE_LV_NOUN_MISTAKES[deLower] || [];
    const lvNorm = String(word.lv || "").trim().toLowerCase();
    const matched = wrongLv.find((w) => lvNorm === w.toLowerCase() || lvNorm.startsWith(w.toLowerCase()));
    if (matched) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: `Izlabots tulkojums — īpašības vārdam ne lietvārds (${word.lv})`,
        changes: { lv: ADJECTIVE_FIXES[de]?.lv || ADJECTIVE_FIXES[deLower]?.lv || word.lv },
      });
    }
  }
  return fixes;
}

function auditComparisonSubtitles(words) {
  const fixes = [];
  for (const word of words) {
    const id = word.study?.id;
    if (!id || !COMPARISON_CARD_IDS.has(id)) continue;
    const expected = COMPARISON_SUBTITLES[id];
    if (!expected) continue;
    if (word.study.subtitle !== expected) {
      fixes.push({
        de: word.de,
        old: `{ subtitle: "${word.study.subtitle}" }`,
        reason: `Izlabots comparisonStudy subtitle (${word.study.subtitle} → ${expected})`,
        changes: { subtitle: expected, studyId: id },
      });
    }
  }
  return fixes;
}

function applyFixes(words, fixList) {
  const byDe = new Map();
  const subtitleById = new Map();
  for (const f of fixList) {
    if (f.changes?.studyId && f.changes?.subtitle) {
      subtitleById.set(f.changes.studyId, f.changes.subtitle);
      continue;
    }
    byDe.set(f.de, { ...(byDe.get(f.de) || {}), ...f.changes });
  }

  const result = [];
  for (const word of words) {
    const studyId = word.study?.id;
    if (studyId && subtitleById.has(studyId)) {
      result.push({
        ...word,
        study: { ...word.study, subtitle: subtitleById.get(studyId) },
      });
      continue;
    }

    const changes = byDe.get(word.de);
    if (changes?.removeEntry) continue;

    if (!changes) {
      result.push(word);
      continue;
    }

    const updated = { ...word };
    if (changes.de) updated.de = changes.de;
    if (changes.de_article) updated.de_article = changes.de_article;
    if (changes.de_plural) updated.de_plural = changes.de_plural;
    if (changes.lv) updated.lv = changes.lv;
    if (changes.removeArticle) delete updated.de_article;
    if (changes.removePlural) delete updated.de_plural;
    result.push(updated);
  }
  return result;
}

function serializeWords(words) {
  const lines = ["const A1_WORDS = ["];
  for (const w of words) {
    lines.push("    " + JSON.stringify(w, null, 2).replace(/\n/g, "\n    ") + ",");
  }
  lines.push("];", "", "window.A1_WORDS = A1_WORDS;");
  return lines.join("\n");
}

// --- main ---
const words = loadA1();
let fixes = [...audit(words), ...auditAdjectives(words), ...auditComparisonSubtitles(words)];

// Deduplicate and merge fixes per word for reporting
const report = [];
const merged = new Map();
for (const f of fixes) {
  if (!merged.has(f.de)) {
    merged.set(f.de, { de: f.de, reasons: [], changes: {} });
  }
  const m = merged.get(f.de);
  m.reasons.push(f.reason);
  Object.assign(m.changes, f.changes);
  m.old = f.old;
}

for (const [de, m] of merged) {
  const w = words.find((x) => x.de === de);
  if (!w) continue;
  const updated = applyFixes([w], [{ de, changes: m.changes }]);
  const newFmt = m.changes.removeEntry ? "(ieraksts dzēsts)" : formatEntry(updated[0] || w);
  report.push({ de, old: m.old, new: newFmt, reason: m.reasons.join("; ") });
}

console.log(`\n=== Goethe A1 audits: ${report.length} words to fix ===\n`);
report.forEach((r) => {
  console.log(`- ${r.de}`);
  console.log(`  Vecā: ${r.old}`);
  console.log(`  Jaunā: ${r.new}`);
  console.log(`  ${r.reason}\n`);
});

// Report comparison card coverage
const comparisonCards = words.filter(
  (w) => w.study?.layout === "comparisonStudy" && COMPARISON_CARD_IDS.has(w.study.id)
);
const coveredOk = [...COMPARISON_COVERED_WORDS].every((w) => {
  const inBase = words.some((e) => e.de === w && !e.study?.layout);
  const inComparison = comparisonCards.some((c) =>
    (c.study.words || []).some((item) => (item.de || "").includes(w))
  );
  return !inBase && inComparison;
});
if (comparisonCards.length) {
  console.log(`Comparison cards: ${comparisonCards.map((c) => c.study.id).join(", ")}`);
  console.log(`Covered words OK: ${coveredOk ? "yes" : "check needed"}\n`);
}

const adjInDb = words.filter(
  (w) => !w.study?.layout && GOETHE_A1_ADJECTIVES.has(w.de.toLowerCase())
);
const adjOk = adjInDb.every((w) => !w.de_article && !w.de_plural && w.de === w.de.toLowerCase());
console.log(`Adjectives in DB: ${adjInDb.length}`);
console.log(`Adjective articles OK: ${adjOk ? "yes" : "check needed"}\n`);

const monthsInDb = words.filter((w) => GOETHE_A1_MONTHS[w.de]);
const monthsOk = monthsInDb.length === 12
  && monthsInDb.every((w) => w.de_article === "der" && !w.de_plural);
console.log(`Months in DB: ${monthsInDb.length}/12`);
console.log(`Months Singularetantum OK: ${monthsOk ? "yes" : "check needed"}\n`);

if (FIX && report.length > 0) {
  const allChanges = [...merged.values()].map((m) => ({ de: m.de, changes: m.changes }));
  const fixed = applyFixes(words, allChanges);
  const out = serializeWords(fixed);
  fs.writeFileSync(path.join(root, "data/a1.js"), out, "utf8");
  fs.writeFileSync(path.join(root, "www/data/a1.js"), out, "utf8");
  fs.writeFileSync(path.join(__dirname, "goethe-a1-audit-report.json"), JSON.stringify(report, null, 2), "utf8");
  console.log(`✅ Applied ${report.length} fixes to data/a1.js and www/data/a1.js`);
} else if (!FIX) {
  console.log("Dry run. Use --fix to apply changes.");
}
