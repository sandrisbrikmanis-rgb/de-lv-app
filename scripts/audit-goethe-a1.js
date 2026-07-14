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

// Nouns that duplicate an existing verb entry — remove noun, keep verb
const DUPLICATE_NOUNS_TO_REMOVE = new Set(["Leben", "Kosten"]);

// Capitalized verb forms wrongly entered as nouns
const VERB_NOUN_CONFUSION = {
  Können: "können",
  Sein: "sein",
  Gefallen: "gefallen",
};

// Adjectives wrongly entered as nouns
const ADJECTIVE_FIXES = {
  Hoch: { de: "hoch", lv: "augsts" },
};

// Valid comparisonStudy card IDs in A1 (skip base-word audit rules for these entries)
const COMPARISON_CARD_IDS = new Set([
  "compare-fernsehen-fernsehen",
  "compare-appetit-essen",
  "compare-gemuese-obst",
  "compare-ferien-urlaub",
  "compare-geschwister-eltern",
  "compare-kleidung-jeans-hose",
]);

// Base words covered by comparison cards — absence from standalone entries is OK
const COMPARISON_COVERED_WORDS = new Set([
  "Appetit", "essen", "Essen",
  "fernsehen", "Fernsehen",
  "Gemüse", "Obst",
  "Ferien", "Urlaub",
  "Geschwister", "Eltern",
  "Kleidung", "Jeans", "Hose",
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

function applyFixes(words, fixList) {
  const byDe = new Map();
  for (const f of fixList) byDe.set(f.de, { ...(byDe.get(f.de) || {}), ...f.changes });

  const result = [];
  for (const word of words) {
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
let fixes = audit(words);

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
