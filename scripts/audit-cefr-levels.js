/**
 * Full CEFR level audit — safe vm load, no ConvertTo-Json roundtrip.
 * Usage: node scripts/audit-cefr-levels.js [--plan-only]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];
const LEVEL_INDEX = Object.fromEntries(LEVELS.map((l, i) => [l, i]));

const TARGETS = [
  { file: "data/a1.js", key: "A1_WORDS" },
  { file: "data/a2.js", key: "A2_WORDS" },
  { file: "data/b1.js", key: "B1_WORDS" },
  { file: "data/b2.js", key: "B2_WORDS" },
  { file: "data/c1.js", key: "C1_WORDS" },
  { file: "data/c2.js", key: "C2_WORDS" },
];

// Goethe A1/A2 high-frequency core (subset — everyday basics)
const A1_CORE = new Set(
  `ich du er sie es wir ihr sie man
  sein haben werden können müssen sollen wollen dürfen mögen
  gehen kommen machen nehmen geben sehen sagen wissen denken finden
  essen trinken schlafen wohnen leben sterben arbeiten lernen sprechen hören lesen schreiben
  groß klein gut schlecht neu alt jung schön hässlich schnell langsam warm kalt
  viel wenig mehr weniger alle jeder einige viele
  hier dort da oben unten links rechts
  heute morgen gestern jetzt immer oft nie manchmal
  und oder aber weil wenn dass ob
  der die das ein eine einer eines einem einen
  Apfel Brot Wasser Milch Kaffee Tee Fleisch Fisch Ei Käse Butter Zucker Salz
  Haus Wohnung Zimmer Küche Bad Tür Fenster Tisch Stuhl Bett
  Stadt Land Straße Platz Park Bahnhof Flughafen
  Mann Frau Kind Junge Mädchen Baby Familie Mutter Vater Bruder Schwester
  Hund Katze Vogel Pferd Kuh Schwein Schaf Huhn
  Auto Bus Zug Fahrrad Flugzeug Schiff
  Tag Woche Monat Jahr Stunde Minute Sekunde Zeit Uhr Datum
  Kopf Auge Ohr Nase Mund Hand Fuß Arm Bein Herz
  rot blau grün gelb schwarz weiß braun grau orange
  eins zwei drei vier fünf sechs sieben acht neun zehn hundert tausend
  Montag Dienstag Mittwoch Donnerstag Freitag Samstag Sonntag
  Januar Februar März April Mai Juni Juli August September Oktober November Dezember
  Hallo Tschüss Danke Bitte Entschuldigung Ja Nein
  Name Adresse Telefon Nummer Geld Euro Preis Karte
  Schule Universität Lehrer Schüler Student Buch Heft Stift Papier
  Wetter Sonne Regen Schnee Wind Wolke`.split(/\s+/).map((w) => w.toLowerCase())
);

const A2_EVERYDAY = new Set(
  `Reise Urlaub Hotel Zimmer Reservierung Koffer Pass Visum Gepäck
  Einkaufen kaufen verkaufen Markt Laden Geschäft Supermarkt Kasse Rabatt
  Restaurant Kellner Speisekarte Bestellung Rechnung Trinkgeld
  Arzt Krankenhaus Apotheke Medizin Tablette Fieber Husten Erkältung Schmerz
  Sport Fitness Schwimmen Laufen Fußball Tennis Hobby Freizeit Kino Theater Museum
  Werkstatt Reparatur Mechaniker Elektriker Kleidung Hemd Hose Rock Jacke Schuhe
  Geburtstag Hochzeit Party Geschenk Einladung Feier
  Nachbar Nachbarschaft Verein Mitgliedschaft
  Aal Forelle Lachs Garnele Muschel
  allerdings trotzdem deshalb deswegen obwohl während
  Erfahrung Meinung Gewohnheit Umgebung entscheiden vergleichen erinnern`.split(/\s+/).map((w) => w.toLowerCase())
);

const B1_WORK_SOCIETY = new Set(
  `Beruf Karriere Bewerbung Vorstellungsgespräch Gehalt Lohn Steuer Versicherung
  Kollege Chef Abteilung Firma Unternehmen Vertrag Kündigung
  Zeitung Nachrichten Fernsehen Internet sozial Medien
  Umwelt Klima Recycling Energie
  Meinung diskutieren argumentieren vorschlagen empfehlen`.split(/\s+/).map((w) => w.toLowerCase())
);

const C2_MARKERS =
  /^(konterkarieren|veranschaulichen|unmissverständlich|ausschlaggebend|nachvollziehen|gewährleisten|stichhaltigkeit|unvoreingenommenheit|wechselwirkung|sorgfaltspflicht|schlussfolgerung)$/i;

const C1_PATTERNS = [
  /\b(recht|gesetz|gericht|klage|anwalt|notar|verfassung|gesetzbuch|zivilgesetzbuch|strafrecht|verwaltungsrecht)\b/i,
  /\b(paragraph|urteil|haft|kaution|prozess|einrede|rechtsmittel|vollstreckung|berufung)\b/i,
  /\b(minister|parlament|diplomat|abgeordnet|bundestag|koalition|regierungssprecher|außenminister)\b/i,
  /\b(abkommen|abrüstung|allianz|embargo|sanktion|delegation|akkredit|gipfel|verhandlung)\b/i,
  /\b(aktionär|aktien|gesellschaft|wirtschaftsprüf|bilanz|fusion|insolvenz|konkurs)\b/i,
  /\b(hypothese|theorie|dissertation|monografie|paradigma|epistem|methodolog|empirisch)\b/i,
  /\b(stellungnahme|belastbarkeit|wahrnehmung|auswirkung|umstritten|ausschlaggebend)\b/i,
  /\b(affekt|aberration|abart|abtreibung|ächten|anfechten|abstumpfen)\b/i,
  /\b(flotten|militär|truppen|waffen|verteidigung|sicherheitsrat)\b/i,
  /(ungsverhandlung|ungsabkommen|ungsprogramm|ungsbereitschaft|stützpunkt|gesetzbuch|rechtlerin|körperkultur)$/i,
  /(wissenschaft|forschung|analyse|synthese|interpretation|konnotation|denotation)$/i,
];

const C2_PATTERNS = [
  /\b(konterkarieren|veranschaulichen|unmissverständlich|stichhaltigkeit|unvoreingenommenheit)\b/i,
  /\b(sorgfaltspflicht|wechselwirkung|schlussfolgerung|ausschlaggebend)\b/i,
  /\b(epistemolog|hermeneut|ontolog|phänomenolog|dialektik|synergie)\b/i,
  /\b(präzisieren|konkretisieren|verallgemeinern|verinnerlichen|vergegenwärtigen)\b/i,
  /(ungsfähigkeit|ungsberechtigung|haftungsausschluss|rechtswidrigkeit)$/i,
];

const B1_TOO_ADVANCED = [
  /\b(aktien|aktionär|diplomat|ministerium|parlament|rechtsanwalt)\b/i,
  /(gesellschaft|verhandlung|abkommen|stützpunkt|gesetzbuch)$/i,
];

function loadAll() {
  const data = {};
  for (const t of TARGETS) {
    const code = fs.readFileSync(path.join(root, t.file), "utf8");
    const sandbox = { window: {} };
    vm.runInNewContext(code, sandbox);
    const words = sandbox[t.key] || [];
    data[t.key] = { ...t, words };
  }
  return data;
}

function bareDe(de) {
  return String(de || "")
    .replace(/^(der|die|das)\s+/i, "")
    .replace(/^sich\s+/i, "")
    .trim();
}

function compoundParts(word) {
  const w = bareDe(word);
  const parts = w.match(/[A-ZÄÖÜ][a-zäöüß]+/g);
  return parts ? parts.length : 1;
}

function scoreWord(entry) {
  const de = bareDe(entry.de);
  const lower = de.toLowerCase();
  const len = lower.length;
  const parts = compoundParts(entry.de);
  const hasStudy = Boolean(entry.study);
  const lv = String(entry.lv || "");

  let score = 2; // default B1
  const reasons = [];

  if (A1_CORE.has(lower)) {
    score = 0;
    reasons.push("A1_core");
  } else if (A2_EVERYDAY.has(lower)) {
    score = 1;
    reasons.push("A2_everyday");
  } else if (B1_WORK_SOCIETY.has(lower)) {
    score = 2;
    reasons.push("B1_work");
  }

  // Length / compound complexity
  if (len >= 22 || parts >= 4) {
    score = Math.max(score, 4);
    reasons.push("long_compound");
  } else if (len >= 16 || parts >= 3) {
    score = Math.max(score, 3);
    reasons.push("compound");
  } else if (len <= 5 && !hasStudy && /^[a-zäöüß]+$/i.test(lower)) {
    score = Math.min(score, 1);
    reasons.push("short_basic");
  }

  // C2 patterns first (highest)
  for (const p of C2_PATTERNS) {
    if (p.test(de) || p.test(lv)) {
      score = 5;
      reasons.push("C2_pattern");
      break;
    }
  }
  if (C2_MARKERS.test(lower)) {
    score = 5;
    reasons.push("C2_marker");
  }

  // C1 patterns
  if (score < 5) {
    for (const p of C1_PATTERNS) {
      if (p.test(de) || p.test(lv)) {
        score = Math.max(score, 4);
        reasons.push("C1_pattern");
        break;
      }
    }
  }

  // Formal / academic LV translations
  if (/\b(likums|līgums|sabiedrība|ministrs|parlaments|diplomāt|tiesa|proces|konstitūc|akredit|atbruņoš|jūras bāze|konosaments|pedofil|abort)\b/i.test(lv)) {
    score = Math.max(score, 4);
    reasons.push("C1_lv_domain");
  }
  if (/\b(pamatotība|nepārprotams|mijiedarbība|rūpības pienākums|secinājums|objektivitāte)\b/i.test(lv)) {
    score = Math.max(score, 5);
    reasons.push("C2_lv_domain");
  }

  // Rare literary / idiomatic
  if (/sommer$|weibersommer/i.test(lower)) {
    score = Math.max(score, 4);
    reasons.push("idiom");
  }

  // Verbs with formal prefixes
  if (/^(ver|be|ent|er|zer|ge)/i.test(lower) && len >= 12) {
    score = Math.max(score, 3);
    reasons.push("formal_verb");
  }

  // Multi-meaning study cards at lower levels often indicate complexity
  if (hasStudy && lv.includes("•") && score < 3) {
    score = Math.min(score + 1, 3);
    reasons.push("polysemy");
  }

  // Downgrade overly complex words that look basic
  if (score >= 4 && A1_CORE.has(lower)) {
    score = 0;
    reasons.push("override_A1");
  }
  if (score >= 4 && A2_EVERYDAY.has(lower)) {
    score = 1;
    reasons.push("override_A2");
  }

  return { score, recommended: LEVELS[Math.min(score, 5)], reasons };
}

function main() {
  const data = loadAll();
  const allWords = [];
  for (const t of TARGETS) {
    for (let i = 0; i < data[t.key].words.length; i++) {
      const w = data[t.key].words[i];
      const { score, recommended, reasons } = scoreWord(w);
      allWords.push({
        de: w.de,
        current: w.level,
        recommended,
        score,
        reasons,
        file: t.file,
        key: t.key,
        index: i,
        hasStudy: Boolean(w.study),
        studyId: w.study?.id || null,
      });
    }
  }

  const moves = allWords.filter((w) => w.current !== w.recommended);
  const byRoute = {};
  for (const m of moves) {
    const route = `${m.current}->${m.recommended}`;
    if (!byRoute[route]) byRoute[route] = [];
    byRoute[route].push(m);
  }

  const currentCounts = Object.fromEntries(LEVELS.map((l) => [l, 0]));
  const predicted = Object.fromEntries(LEVELS.map((l) => [l, 0]));
  for (const w of allWords) {
    currentCounts[w.current]++;
    predicted[w.recommended]++;
  }

  // Cap moves to avoid over-correction: prioritize largest gaps
  const TARGET_COUNTS = { A1: 734, A2: 1850, B1: 2400, B2: 2300, C1: 480, C2: 112 };
  const priorityOrder = (m) => {
    const gap = Math.abs(LEVEL_INDEX[m.recommended] - LEVEL_INDEX[m.current]);
    const up = LEVEL_INDEX[m.recommended] > LEVEL_INDEX[m.current];
    // Prioritize moving UP from B1/B2 to C1/C2
    let p = gap * 10;
    if (up && (m.current === "B1" || m.current === "B2") && (m.recommended === "C1" || m.recommended === "C2")) p += 50;
    if (!up && (m.current === "C1" || m.current === "C2")) p += 40;
    if (m.reasons.some((r) => r.includes("C1") || r.includes("C2") || r === "long_compound")) p += 20;
    return p;
  };

  moves.sort((a, b) => priorityOrder(b) - priorityOrder(a));

  // Select moves to hit targets approximately
  const selected = [];
  const running = { ...currentCounts };
  for (const m of moves) {
    const from = m.current;
    const to = m.recommended;
    // Don't drain A1/A2 too much
    if (from === "A1" || from === "A2") {
      if (running[from] <= TARGET_COUNTS[from] * 0.95) continue;
    }
    // Don't overfill C1/C2 beyond 120%
    if ((to === "C1" || to === "C2") && running[to] >= TARGET_COUNTS[to] * 1.15) continue;
    // B1 should shrink
    if (to === "B1" && running.B1 >= TARGET_COUNTS.B1 * 1.05) continue;

    selected.push(m);
    running[from]--;
    running[to]++;
  }

  const selectedByRoute = {};
  for (const m of selected) {
    const route = `${m.current}->${m.recommended}`;
    if (!selectedByRoute[route]) selectedByRoute[route] = [];
    selectedByRoute[route].push(m);
  }

  const plan = {
    generatedAt: new Date().toISOString(),
    currentCounts,
    targetCounts: TARGET_COUNTS,
    totalWords: allWords.length,
    totalMisaligned: moves.length,
    selectedMoves: selected.length,
    predictedAfterMoves: running,
    routes: Object.fromEntries(
      Object.entries(selectedByRoute).map(([route, items]) => [
        route,
        { count: items.length, sample: items.slice(0, 8).map((x) => x.de) },
      ])
    ),
    moves: selected.map((m) => ({
      de: m.de,
      from: m.current,
      to: m.recommended,
      file: m.file,
      index: m.index,
      studyId: m.studyId,
      reasons: m.reasons,
    })),
  };

  const outPath = path.join(root, "scripts", "cefr-redistribution-plan.json");
  fs.writeFileSync(outPath, JSON.stringify(plan, null, 2), "utf8");

  console.log("=== CEFR LEVEL AUDIT ===\n");
  console.log("CURRENT COUNTS:");
  for (const l of LEVELS) console.log(`  ${l}: ${currentCounts[l]}`);
  console.log("\nTARGET COUNTS:");
  for (const l of LEVELS) console.log(`  ${l}: ${TARGET_COUNTS[l]}`);
  console.log(`\nTotal misaligned (heuristic): ${moves.length}`);
  console.log(`Selected for move: ${selected.length}`);
  console.log("\nPREDICTED AFTER MOVES:");
  for (const l of LEVELS) console.log(`  ${l}: ${running[l]}`);
  console.log("\nMOVE ROUTES (selected):");
  for (const [route, info] of Object.entries(plan.routes).sort((a, b) => b[1].count - a[1].count)) {
    console.log(`  ${route}: ${info.count}  e.g. ${info.sample.slice(0, 4).join(", ")}`);
  }
  console.log(`\nPlan saved: ${outPath}`);
}

main();
