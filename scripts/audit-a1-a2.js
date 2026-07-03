/**
 * Phase 1 CEFR audit — A1 ↔ A2 only. No ConvertTo-Json on data files.
 * Usage: node scripts/audit-a1-a2.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");

// Goethe-Institut A1 Grundwortschatz (expanded core — everyday survival vocabulary)
const A1_CORE = new Set(
  `ich du er sie es wir ihr sie man
  sein haben werden können müssen sollen wollen dürfen mögen
  gehen kommen machen nehmen geben sehen sagen wissen denken finden
  essen trinken schlafen wohnen leben sterben arbeiten lernen sprechen hören lesen schreiben
  kaufen verkaufen öffnen schließen kochen waschen putzen helfen fragen antworten
  groß klein gut schlecht neu alt jung schön hässlich schnell langsam warm kalt
  viel wenig mehr weniger alle alles allein jeder einige viele
  hier dort da oben unten links rechts
  heute morgen gestern jetzt immer oft nie manchmal bald später früh spät
  und oder aber weil wenn dass ob als auch noch schon noch nicht
  der die das ein eine einer eines einem einen
  Apfel Brot Wasser Milch Kaffee Tee Fleisch Fisch Ei Käse Butter Zucker Salz
  Haus Wohnung Zimmer Küche Bad Tür Fenster Tisch Stuhl Bett Sofa Schrank
  Stadt Land Straße Platz Park Bahnhof
  Mann Frau Kind Junge Mädchen Baby Familie Mutter Vater Bruder Schwester Oma Opa
  Hund Katze Vogel
  Auto Bus Zug Fahrrad
  Tag Woche Monat Jahr Stunde Minute Zeit Uhr Datum
  Kopf Auge Ohr Nase Mund Hand Fuß Arm Bein
  rot blau grün gelb schwarz weiß braun grau
  eins zwei drei vier fünf sechs sieben acht neun zehn hundert tausend
  Montag Dienstag Mittwoch Donnerstag Freitag Samstag Sonntag
  Januar Februar März April Mai Juni Juli August September Oktober November Dezember
  Hallo Tschüss Danke Bitte Entschuldigung Ja Nein
  Name Adresse Telefon Nummer Geld Euro Preis
  Schule Lehrer Schüler Buch Heft Stift Papier
  Wetter Sonne Regen Schnee Wind
  an in auf aus mit von zu nach bei für über unter vor hinter neben zwischen
  ist sind war hat haben bin bist
  mein dein sein ihr unser euer
  wer was wo wann wie warum welche
  Apfel Banane Orange Tomate Kartoffel Reis Nudel Suppe Salat
  Bruder Schwester Eltern Freund Freundin Nachname Vorname
  kalt heiß hungrig durstig müde krank glücklich traurig
  links rechts geradeaus
  links rechts oben unten
  alt neu jung groß klein lang kurz hoch niedrig
  gut schlecht schön hässlich teuer billig
  viel wenig gern lieber am liebsten
  immer oft manchmal nie
  und oder aber denn weil wenn
  der die das ein eine
  ich du er sie es wir ihr
  sein haben werden
  gehen kommen machen
  essen trinken schlafen
  arbeiten lernen sprechen
  lesen schreiben hören sehen
  kaufen öffnen schließen
  wohnen leben sterben
  fragen antworten helfen
  wissen denken finden sagen nehmen geben
  können müssen sollen wollen dürfen mögen
  Apfel Brot Wasser Milch Kaffee Tee
  Fleisch Fisch Ei Käse
  Haus Wohnung Zimmer Küche Bad Tür Fenster Tisch Stuhl Bett
  Stadt Land Straße Platz Park Bahnhof
  Mann Frau Kind Junge Mädchen Baby Familie Mutter Vater
  Hund Katze Vogel Auto Bus Zug Fahrrad
  Tag Woche Monat Jahr Stunde Minute Zeit Uhr
  Kopf Auge Ohr Nase Mund Hand Fuß Arm Bein
  rot blau grün gelb schwarz weiß braun grau
  Hallo Danke Bitte Ja Nein Name Geld Euro Schule Buch Wetter Sonne Regen
  alle alles allein alt Alter an`.split(/\s+/).map((w) => w.toLowerCase())
);

// Goethe A2 / Duden Grundwortschatz A2 indicators
const A2_MARKERS = new Set(
  `Reise Urlaub Hotel Reservierung Koffer Pass Gepäck
  Einkaufen bezahlen vergessen einladen ändern
  Restaurant Kellner Speisekarte Bestellung Rechnung Trinkgeld
  Arzt Krankenhaus Apotheke Medizin Tablette Fieber Husten Erkältung Schmerz
  Sport Fitness Schwimmen Laufen Fußball Tennis Hobby Freizeit Kino Theater Museum
  Geburtstag Hochzeit Party Geschenk Einladung Feier
  Nachbar Nachbarschaft Verein
  demnächst pünktlich nützlich aktiv allgemein Angebot aktuell
  allerdings trotzdem deshalb deswegen obwohl während
  Erfahrung Meinung Gewohnheit Umgebung entscheiden vergleichen erinnern
  vergleichen beschreiben erklären vorbereiten
  Flughafen Visum Zoll
  Reparatur Werkstatt Mechaniker
  Hemd Hose Rock Jacke Schuhe Kleidung
  Alkohol Rauchen Raucher
  vielleicht wahrscheinlich bestimmt sicher
  gestern Abend nächste Woche letztes Jahr
  anrufen aufhören aufstehen ausgehen einkaufen
  sich freuen sich interessieren sich kümmern
  der Bahnhof die Einladung der Nachbar`.split(/\s+/).map((w) => w.toLowerCase().replace(/^(der|die|das)\s+/, ""))
);

// B1 indicators — list only, do NOT move in this phase
const B1_MARKERS = new Set(
  `Beruf Karriere Bewerbung Vorstellungsgespräch Gehalt Lohn Steuer Versicherung
  Kollege Chef Abteilung Firma Unternehmen Vertrag Kündigung
  Zeitung Nachrichten Fernsehen Internet Medien
  Umwelt Klima Recycling Energie
  Meinung diskutieren argumentieren vorschlagen empfehlen
  Parlament Diplomat Ministerium Rechtsanwalt Regierung Partei Wahl
  Erfahrung Gewohnheit Umgebung entscheiden vergleichen
  Botschaft Delegation Abkommen Verhandlung
  Gesellschaft Wirtschaft Bilanz Fusion Insolvenz
  vorschlagen empfehlen diskutieren argumentieren
  Verantwortung Verantwortlichkeit Zusammenhang Zusammenarbeit
  beeinflussen unterstützen organisieren entwickeln verbessern
  allerdings trotzdem obwohl während deshalb`.split(/\s+/).map((w) => w.toLowerCase())
);

const B1_PATTERNS = [
  /\b(beruf|karriere|bewerbung|gehalt|steuer|versicherung|kollege|chef|firma|unternehmen|vertrag|kündigung)\b/i,
  /\b(parlament|diplomat|minister|regierung|partei|wahl|botschaft)\b/i,
  /\b(umwelt|klima|recycling|energie|gesellschaft|wirtschaft)\b/i,
  /\b(diskutieren|argumentieren|vorschlagen|empfehlen|beeinflussen|organisieren|entwickeln|verbessern)\b/i,
  /\b(verantwortung|zusammenhang|zusammenarbeit|verhandlung|abkommen)\b/i,
  /(ung|keit|schaft|ierung|ismus)$/i,
];

function loadWords(file, key) {
  const code = fs.readFileSync(path.join(root, file), "utf8");
  const sandbox = {};
  vm.runInNewContext(code, sandbox);
  return sandbox[key] || [];
}

function bareDe(de) {
  return String(de || "")
    .replace(/^(der|die|das)\s+/i, "")
    .replace(/^sich\s+/i, "")
    .trim();
}

function compoundParts(de) {
  const w = bareDe(de);
  const parts = w.match(/[A-ZÄÖÜ][a-zäöüß]+/g);
  return parts ? parts.length : 1;
}

function scoreForA1(entry) {
  const de = bareDe(entry.de);
  const lower = de.toLowerCase();
  const len = lower.length;
  const parts = compoundParts(entry.de);
  const hasStudy = Boolean(entry.study);
  const lv = String(entry.lv || "");
  const polysemy = lv.includes("•");

  let score = 0; // 0 = A1, 1 = A2, 2 = B1+
  const reasons = [];

  if (A1_CORE.has(lower)) {
    return { score: 0, reasons: ["A1_core"] };
  }

  if (A2_MARKERS.has(lower)) {
    score = 1;
    reasons.push("A2_marker");
  }

  // Separable / reflexive / phrasal patterns → A2
  if (/^(sich\s|jemanden\s|jemandem\s)/i.test(entry.de)) {
    score = Math.max(score, 1);
    reasons.push("reflexive_phrase");
  }

  // Prefix verbs common at A2+
  if (/^(ver|be|ent|er|zer|ge|auf|ab|an|aus|ein|mit|nach|vor|zu|zurück|weg|hin|her)/i.test(lower) && len >= 7) {
    score = Math.max(score, 1);
    reasons.push("prefix_verb");
  }

  // Length / compounds
  if (len >= 14 || parts >= 3) {
    score = Math.max(score, 2);
    reasons.push("long_compound");
  } else if (len >= 10 || parts >= 2) {
    score = Math.max(score, 1);
    reasons.push("compound");
  }

  // Study cards with polysemy → usually A2+
  if (hasStudy && polysemy) {
    score = Math.max(score, 1);
    reasons.push("polysemy_study");
  }

  // Abstract nouns with -ung, -keit at A1 file
  if (/(ung|keit|schaft|ismus|ierung)$/i.test(lower) && len >= 8) {
    score = Math.max(score, 1);
    reasons.push("abstract_suffix");
  }

  // Adverbs ending in -lich often A2
  if (/lich$/i.test(lower) && len >= 8 && !A1_CORE.has(lower)) {
    score = Math.max(score, 1);
    reasons.push("adverb_lich");
  }

  // B1 patterns override
  if (B1_MARKERS.has(lower)) {
    score = Math.max(score, 2);
    reasons.push("B1_marker");
  }
  for (const p of B1_PATTERNS) {
    if (p.test(de) || p.test(lv)) {
      score = Math.max(score, 2);
      reasons.push("B1_pattern");
      break;
    }
  }

  // Short basic words without study → stay A1
  if (len <= 6 && parts === 1 && !hasStudy && score < 1) {
    score = 0;
    reasons.push("short_basic");
  }

  return { score, reasons };
}

function main() {
  const a1 = loadWords("data/a1.js", "A1_WORDS");
  const a2 = loadWords("data/a2.js", "A2_WORDS");

  const a1ToA2 = [];
  const a2ToB1 = [];

  a1.forEach((entry, index) => {
    const { score, reasons } = scoreForA1(entry);
    if (score >= 1) {
      a1ToA2.push({
        de: entry.de,
        lv: entry.lv,
        from: "A1",
        to: "A2",
        file: "data/a1.js",
        index,
        studyId: entry.study?.id || null,
        reasons,
      });
    }
  });

  a2.forEach((entry, index) => {
    const { score, reasons } = scoreForA1(entry);
    if (score >= 2) {
      a2ToB1.push({
        de: entry.de,
        lv: entry.lv,
        from: "A2",
        to: "B1",
        file: "data/a2.js",
        index,
        studyId: entry.study?.id || null,
        reasons,
      });
    }
  });

  const plan = {
    generatedAt: new Date().toISOString(),
    phase: "A1-A2-only",
    currentCounts: { A1: a1.length, A2: a2.length },
    a1ToA2: {
      count: a1ToA2.length,
      predictedA1: a1.length - a1ToA2.length,
      predictedA2: a2.length + a1ToA2.length,
      moves: a1ToA2,
    },
    a2ToB1Report: {
      count: a2ToB1.length,
      note: "Listed only — do NOT move in this phase",
      candidates: a2ToB1,
    },
  };

  const outPath = path.join(__dirname, "cefr-a1-a2-plan.json");
  fs.writeFileSync(outPath, JSON.stringify(plan, null, 2), "utf8");

  console.log("=== A1/A2 CEFR AUDIT (Phase 1) ===\n");
  console.log(`A1 pašlaik: ${a1.length} vārdi`);
  console.log(`A2 pašlaik: ${a2.length} vārdi\n`);
  console.log(`A1 → A2 pārvietošana: ${a1ToA2.length} vārdi`);
  console.log(`  Pēc: A1=${a1.length - a1ToA2.length}, A2=${a2.length + a1ToA2.length}\n`);
  console.log(`A2 → B1 atskaite (tikai saraksts): ${a2ToB1.length} vārdi\n`);

  if (a1ToA2.length) {
    console.log("A1→A2 paraugi (pirmie 20):");
    a1ToA2.slice(0, 20).forEach((m) => console.log(`  ${m.de}  [${m.reasons.join(", ")}]`));
  }

  if (a2ToB1.length) {
    console.log("\nA2→B1 paraugi (pirmie 15):");
    a2ToB1.slice(0, 15).forEach((m) => console.log(`  ${m.de}  [${m.reasons.join(", ")}]`));
  }

  console.log(`\nPlāns saglabāts: ${outPath}`);
}

main();
