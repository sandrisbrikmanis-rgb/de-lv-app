/**
 * Audit & fix A2 vocabulary against Goethe-Zertifikat A2 Wortliste.
 * Usage: node scripts/audit-goethe-a2.js [--fix]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { buildComparisonCards } = require("./a2-comparison-cards");

const FIX = process.argv.includes("--fix");
const root = path.join(__dirname, "..");

// --- Goethe A2 reference: nouns (Fit in Deutsch 2 / Goethe-Zertifikat A2 Wortliste) ---
const GOETHE_A2_NOUNS = {
  Abitur: { article: "das", singularOnly: true },
  Achtung: { article: "die", singularOnly: true },
  Alter: { article: "das", singularOnly: true },
  Alkohol: { article: "der", singularOnly: true },
  Angebot: { article: "das", plural: "Angebote" },
  Apotheke: { article: "die", plural: "Apotheken" },
  Arzt: { article: "der", plural: "Ärzte" },
  Ausland: { article: "das", singularOnly: true },
  Bahnhof: { article: "der", plural: "Bahnhöfe" },
  Butter: { article: "die", singularOnly: true },
  Dank: { article: "der", singularOnly: true },
  Durst: { article: "der", singularOnly: true },
  Eis: { article: "das", singularOnly: true },
  Einladung: { article: "die", plural: "Einladungen" },
  Erlaubnis: { article: "die", singularOnly: true },
  Ferien: { article: "die", pluralOnly: true },
  Fieber: { article: "das", singularOnly: true },
  Fleisch: { article: "das", singularOnly: true },
  Flughafen: { article: "der", plural: "Flughäfen" },
  Freizeit: { article: "die", singularOnly: true },
  Frühstück: { article: "das", singularOnly: true },
  Geburtstag: { article: "der", plural: "Geburtstage" },
  Geld: { article: "das", singularOnly: true },
  Gemüse: { article: "das", singularOnly: true },
  Gepäck: { article: "das", singularOnly: true },
  Geschirr: { article: "das", singularOnly: true },
  Geschenk: { article: "das", plural: "Geschenke" },
  Geschwister: { article: "die", pluralOnly: true },
  Glück: { article: "das", singularOnly: true },
  Grippe: { article: "die", singularOnly: true },
  Heimat: { article: "die", singularOnly: true },
  Hilfe: { article: "die", singularOnly: true },
  Himmel: { article: "der", singularOnly: true },
  Hotel: { article: "das", plural: "Hotels" },
  Hunger: { article: "der", singularOnly: true },
  Internet: { article: "das", singularOnly: true },
  Jeans: { article: "die", pluralOnly: true },
  Käse: { article: "der", singularOnly: true },
  Kenntnisse: { article: "die", pluralOnly: true },
  Kind: { article: "das", plural: "Kinder" },
  Kino: { article: "das", plural: "Kinos" },
  Kleidung: { article: "die", singularOnly: true },
  Koffer: { article: "der", plural: "Koffer" },
  Kosmetik: { article: "die", singularOnly: true },
  Krankenhaus: { article: "das", plural: "Krankenhäuser" },
  Lust: { article: "die", singularOnly: true },
  Milch: { article: "die", singularOnly: true },
  Museum: { article: "das", plural: "Museen" },
  Musik: { article: "die", singularOnly: true },
  Müll: { article: "der", singularOnly: true },
  Nachbar: { article: "der", plural: "Nachbarn" },
  Natur: { article: "die", singularOnly: true },
  Nähe: { article: "die", singularOnly: true },
  Obst: { article: "das", singularOnly: true },
  Party: { article: "die", plural: "Partys" },
  Pass: { article: "der", plural: "Pässe" },
  Polizei: { article: "die", singularOnly: true },
  Post: { article: "die", singularOnly: true },
  Quiz: { article: "das", singularOnly: true },
  Regen: { article: "der", singularOnly: true },
  Rechnung: { article: "die", plural: "Rechnungen" },
  Reis: { article: "der", singularOnly: true },
  Reise: { article: "die", plural: "Reisen" },
  Restaurant: { article: "das", plural: "Restaurants" },
  Ruhe: { article: "die", singularOnly: true },
  Schnee: { article: "der", singularOnly: true },
  Service: { article: "der", singularOnly: true },
  Spaß: { article: "der", singularOnly: true },
  Sport: { article: "der", singularOnly: true },
  Stress: { article: "der", singularOnly: true },
  Studium: { article: "das", singularOnly: true },
  Süßigkeiten: { article: "die", pluralOnly: true },
  Tennis: { article: "das", singularOnly: true },
  Theater: { article: "das", plural: "Theater" },
  Unterricht: { article: "der", singularOnly: true },
  Urlaub: { article: "der", singularOnly: true },
  Verkehr: { article: "der", singularOnly: true },
  Wasser: { article: "das", singularOnly: true },
  Wetter: { article: "das", singularOnly: true },
  Wiedersehen: { article: "das", singularOnly: true },
  Zucker: { article: "der", singularOnly: true },
  Lokal: { article: "das", plural: "Lokale" },
  Eltern: { article: "die", pluralOnly: true },
  Großeltern: { article: "die", pluralOnly: true },
  Leute: { article: "die", pluralOnly: true },
  Möbel: { article: "die", pluralOnly: true },
  Papiere: { article: "die", pluralOnly: true },
};

/** Mēneši — Goethe A2 Wortgruppenliste; Singularetantum. */
const GOETHE_A2_MONTHS = {
  Januar: { article: "der", singularOnly: true, lvLowercase: "janvāris" },
  Februar: { article: "der", singularOnly: true, lvLowercase: "februāris" },
  März: { article: "der", singularOnly: true, lvLowercase: "marts" },
  April: { article: "der", singularOnly: true, lvLowercase: "aprīlis" },
  Mai: { article: "der", singularOnly: true, lvLowercase: "maijs" },
  Juni: { article: "der", singularOnly: true, lvLowercase: "jūnijs" },
  Juli: { article: "der", singularOnly: true, lvLowercase: "jūlijs" },
  August: { article: "der", singularOnly: true, lvLowercase: "augusts" },
  September: { article: "der", singularOnly: true, lvLowercase: "septembris" },
  Oktober: { article: "der", singularOnly: true, lvLowercase: "oktobris" },
  November: { article: "der", singularOnly: true, lvLowercase: "novembris" },
  Dezember: { article: "der", singularOnly: true, lvLowercase: "decembris" },
};
Object.assign(GOETHE_A2_NOUNS, GOETHE_A2_MONTHS);

// Goethe A2 Wortliste — adjectives (lowercase, no article/plural)
const GOETHE_A2_ADJECTIVES = new Set(
  `aktiv allgemein nützlich pünktlich interessant gesund nervös einfach teuer billig
  wichtig müde krank schön nett falsch richtig aktuell praktisch langweilig
  gefährlich gesund hungrig durstig glücklich traurig warm kalt schnell langsam
  groß klein hoch niedrig alt neu jung freundlich höflich ruhig leise dunkel hell
  sauber schmutzig leicht schwer stark schwach frisch kaputt fertig bereit besetzt
  frei voll leer gleich verschieden spät früh bald kurz lang lieb böse frech
  glatt allein einsam sicher unsicher möglich unmöglich bekannt unbekannt
  berühmt berühmt speziell normal besonders persönlich öffentlich privat
  international national regional modern traditionell traditionell`
    .split(/\s+/)
    .filter((s) => s !== "lokal")
    .map((s) => s.toLowerCase())
);

// Known wrong LV noun translations for German adjectives
const ADJECTIVE_LV_NOUN_MISTAKES = {
  glatt: ["glums", "glums • slidens"],
  gut: ["labums", "labums/prece"],
  schön: ["skaistums"],
  wichtig: ["svarīgums"],
};

const COMPARISON_CARDS = buildComparisonCards();
const COMPARISON_CARD_IDS = new Set(COMPARISON_CARDS.map((c) => c.id));
const COMPARISON_SUBTITLES = Object.fromEntries(
  COMPARISON_CARDS.map((c) => [c.id, c.entry.study.subtitle])
);
const COMPARISON_COVERED_WORDS = new Set(
  COMPARISON_CARDS.flatMap((c) => c.removeWords)
);
for (const card of COMPARISON_CARDS) {
  for (const w of card.entry.study.words || []) {
    const bare = String(w.de || "")
      .replace(/^(der|die|das)\s+/i, "")
      .trim();
    if (bare) COMPARISON_COVERED_WORDS.add(bare);
  }
  for (const part of (card.entry.de || "").split("•")) {
    const bare = part.trim();
    if (bare) COMPARISON_COVERED_WORDS.add(bare);
  }
}

function loadA2() {
  const code = fs
    .readFileSync(path.join(root, "data/a2.js"), "utf8")
    .replace(/\nwindow\.A2_WORDS\s*=\s*A2_WORDS;?\s*$/, "");
  const match = code.match(/const\s+A2_WORDS\s*=\s*(\[[\s\S]*\]);/);
  if (!match) throw new Error("Could not parse data/a2.js");
  const sandbox = {};
  vm.runInNewContext(`A2_WORDS = ${match[1]};`, sandbox);
  return sandbox.A2_WORDS;
}

function formatEntry(e) {
  const parts = [`de: "${e.de}"`];
  if (e.de_article) parts.push(`art: ${e.de_article}`);
  if (e.de_plural) parts.push(`pl: ${e.de_plural}`);
  if (e.lv) parts.push(`lv: "${e.lv}"`);
  return `{ ${parts.join(", ")} }`;
}

function normalizeTitle(text) {
  if (!text || typeof text !== "string") return text;
  let t = text.trim();
  t = t.replace(/\d+\.\s*/g, "");
  t = t.replace(/;/g, " • ");
  t = t.replace(/\s*•\s*/g, " • ");
  t = t.replace(/\s+/g, " ");
  t = t.replace(/ • +/g, " • ");
  t = t.replace(/ • $/, "");
  t = t.replace(/\([^)]{25,}\)/g, "").trim();
  return t;
}

function auditTitles(words) {
  const fixes = [];
  for (const word of words) {
    if (!word.study) continue;
    if (word.study.layout === "comparisonStudy" && COMPARISON_CARD_IDS.has(word.study.id)) continue;

    const fields = [
      ["lv", word.lv],
      ["study.title", word.study.title],
      ["study.translation", word.study.translation],
    ];
    for (const [field, value] of fields) {
      if (!value || typeof value !== "string") continue;
      const normalized = normalizeTitle(value);
      if (normalized !== value) {
        fixes.push({
          de: word.de,
          old: formatEntry(word),
          reason: `Virsraksts atbilst GLOBAL CARD TITLE standartam (${field})`,
          changes: { [field]: normalized },
        });
      }
    }
  }
  return fixes;
}

function dedupeWords(words) {
  const result = [];
  const indexByKey = new Map();

  for (const word of words) {
    const bare = word.de.replace(/^(der|die|das)\s+/i, "").trim();
    const key = bare.toLowerCase();

    if (!indexByKey.has(key)) {
      indexByKey.set(key, result.length);
      result.push({ ...word });
      continue;
    }

    const idx = indexByKey.get(key);
    const first = result[idx];
    const sameLv = String(first.lv || "").trim() === String(word.lv || "").trim();
    if (sameLv) continue;

    result[idx] = {
      ...first,
      lv: mergeLvMeanings(first.lv, word.lv),
      study: first.study || word.study,
      de_article: first.de_article || word.de_article,
      de_plural: first.de_plural || word.de_plural,
    };
  }

  return result;
}

function mergeLvMeanings(a, b) {
  const parts = new Set();
  for (const src of [a, b]) {
    for (const part of String(src || "").split("•")) {
      const p = part.trim();
      if (p) parts.add(p);
    }
  }
  return [...parts].join(" • ");
}

function auditNouns(words) {
  const fixes = [];

  for (const word of words) {
    if (word.study?.layout === "comparisonStudy" && COMPARISON_CARD_IDS.has(word.study.id)) {
      continue;
    }

    const bare = word.de.replace(/^(der|die|das)\s+/i, "").trim();
    const goethe = GOETHE_A2_NOUNS[bare] || GOETHE_A2_NOUNS[word.de];

    // Words covered by comparison cards should not exist as standalone
    if (
      COMPARISON_COVERED_WORDS.has(bare) &&
      word.study?.layout !== "comparisonStudy"
    ) {
      const coveredBy = COMPARISON_CARDS.find((c) => c.removeWords.includes(bare));
      if (coveredBy) {
        fixes.push({
          de: word.de,
          old: formatEntry(word),
          reason: `Dzēsts atsevišķs ieraksts — iekļauts salīdzinājuma kartītē ${coveredBy.id}`,
          changes: { removeEntry: true },
        });
        continue;
      }
    }

    if (!goethe) continue;

    // Months: der article, lowercase LV, no plural
    if (GOETHE_A2_MONTHS[bare]) {
      const month = GOETHE_A2_MONTHS[bare];
      const changes = {};
      if (word.de_article !== month.article) changes.de_article = month.article;
      if (word.de_plural) changes.removePlural = true;
      if (month.lvLowercase && word.lv && word.lv !== month.lvLowercase) {
        changes.lv = month.lvLowercase;
      }
      if (word.de !== bare) changes.de = bare;
      if (Object.keys(changes).length) {
        fixes.push({
          de: word.de,
          old: formatEntry(word),
          reason: "Mēneša nosaukums: der + lielais DE burts, mazo LV burts, bez daudzskaitļa",
          changes,
        });
      }
      continue;
    }

    if (goethe.singularOnly && word.de_plural) {
      fixes.push({
        de: word.de,
        old: formatEntry(word),
        reason: "Noņemta kļūdaina daudzskaitļa forma (Singularetantum pēc Goethe A2 Wortliste)",
        changes: { removePlural: true },
      });
    }

    if (goethe.pluralOnly && word.de_plural) {
      const plWord = word.de_plural.replace(/^die\s+/, "");
      const isInvented = plWord !== bare && plWord !== bare + "n" && plWord !== bare + "en";
      if (isInvented || goethe.pluralOnly) {
        fixes.push({
          de: word.de,
          old: formatEntry(word),
          reason: "Noņemta mākslīga daudzskaitļa forma (Pluraletantum)",
          changes: { removePlural: true },
        });
      }
    }

    if (goethe.article && word.de_article && word.de_article !== goethe.article) {
      fixes.push({
        de: word.de,
        old: formatEntry(word),
        reason: `Izlabots artikuls (${word.de_article} → ${goethe.article})`,
        changes: { de_article: goethe.article },
      });
    }

    if (goethe.plural && !goethe.singularOnly && !goethe.pluralOnly && word.de_plural) {
      const expectedPlural = `die ${goethe.plural}`;
      if (word.de_plural !== expectedPlural) {
        fixes.push({
          de: word.de,
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
    const bare = de.replace(/^(der|die|das)\s+/i, "").trim();
    if (GOETHE_A2_NOUNS[bare] || GOETHE_A2_NOUNS[de]) continue;
    if (!GOETHE_A2_ADJECTIVES.has(deLower)) continue;

    if (word.de_article || word.de_plural) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: "Noņemts artikuls/daudzskaitlis — īpašības vārds",
        changes: { de: deLower, removeArticle: true, removePlural: true },
      });
      continue;
    }

    if (de !== deLower) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: "Izlabota kapitalizācija — īpašības vārds ar mazo sākumburtu",
        changes: { de: deLower },
      });
      continue;
    }

    const wrongLv = ADJECTIVE_LV_NOUN_MISTAKES[deLower] || [];
    const lvNorm = String(word.lv || "").trim().toLowerCase();
    const matched = wrongLv.find((w) => lvNorm === w.toLowerCase() || lvNorm.includes(w.toLowerCase()));
    if (matched) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: `Izlabots tulkojums — īpašības vārdam ne lietvārds (${word.lv})`,
        changes: { lv: "gluds • slidens" },
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

function applyFieldChange(word, field, value) {
  if (field === "lv") word.lv = value;
  else if (field === "study.title") {
    if (!word.study) word.study = {};
    word.study.title = value;
  } else if (field === "study.translation") {
    if (!word.study) word.study = {};
    word.study.translation = value;
  }
}

function applyFixes(words, fixList) {
  const byDe = new Map();
  const subtitleById = new Map();
  const mergeByDe = new Map();

  for (const f of fixList) {
    if (f.changes?.studyId && f.changes?.subtitle) {
      subtitleById.set(f.changes.studyId, f.changes.subtitle);
      continue;
    }
    if (f.changes?.mergeInto) {
      mergeByDe.set(f.changes.mergeInto, {
        lv: f.changes.lv,
        preferStudyFrom: f.changes.preferStudyFrom,
      });
      continue;
    }
    const prev = byDe.get(f.de) || {};
    byDe.set(f.de, { ...prev, ...f.changes });
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

    const merge = mergeByDe.get(word.de);
    if (merge) {
      const prefer = merge.preferStudyFrom
        ? words.find((w) => w.de === merge.preferStudyFrom)
        : null;
      result.push({
        ...word,
        lv: merge.lv || word.lv,
        study: prefer?.study || word.study,
      });
      continue;
    }

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

    for (const f of fixList) {
      if (f.de !== word.de || !f.changes) continue;
      for (const key of Object.keys(f.changes)) {
        if (key === "study.title" || key === "study.translation" || key === "lv") {
          applyFieldChange(updated, key, f.changes[key]);
        }
      }
    }

    result.push(updated);
  }
  return result;
}

function integrateComparisonCards(words) {
  const existingIds = new Set(words.filter((w) => w.study?.id).map((w) => w.study.id));
  const toRemove = new Set(COMPARISON_CARDS.flatMap((c) => c.removeWords));
  const actuallyRemoved = [];
  let result = words.filter((w) => {
    const bare = w.de.replace(/^(der|die|das)\s+/i, "").trim();
    if (toRemove.has(bare) || toRemove.has(w.de)) {
      actuallyRemoved.push(bare || w.de);
      return false;
    }
    return true;
  });

  const added = [];
  for (const card of COMPARISON_CARDS) {
    if (existingIds.has(card.id)) {
      result = result.map((w) => (w.study?.id === card.id ? card.entry : w));
      continue;
    }
    result.push(card.entry);
    added.push(card.id);
    existingIds.add(card.id);
  }

  result.sort((a, b) => {
    const keyA = a.de.toLowerCase().replace(/^der |^die |^das /, "");
    const keyB = b.de.toLowerCase().replace(/^der |^die |^das /, "");
    return keyA.localeCompare(keyB, "de");
  });

  return { words: result, added, removed: actuallyRemoved };
}

function serializeWords(words) {
  const lines = ["const A2_WORDS = ["];
  for (const w of words) {
    lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  }
  lines.push("];", "", "window.A2_WORDS = A2_WORDS;");
  return lines.join("\n");
}

function mergeFixes(fixLists) {
  const merged = new Map();
  for (const fixes of fixLists) {
    for (const f of fixes) {
      if (!merged.has(f.de)) {
        merged.set(f.de, { de: f.de, reasons: [], changes: {}, old: f.old });
      }
      const m = merged.get(f.de);
      m.reasons.push(f.reason);
      Object.assign(m.changes, f.changes);
      m.old = f.old;
    }
  }
  return merged;
}

function runValidation(words) {
  const issues = [];
  for (const word of words) {
    const deLower = word.de.toLowerCase();
    if (GOETHE_A2_ADJECTIVES.has(deLower)) {
      if (word.de_article || word.de_plural) issues.push(`Adj article/plural: ${word.de}`);
      if (word.de !== deLower) issues.push(`Adj case: ${word.de}`);
    }
    const bare = word.de.replace(/^(der|die|das)\s+/i, "").trim();
    const goethe = GOETHE_A2_NOUNS[bare];
    if (goethe?.singularOnly && word.de_plural) issues.push(`Sg+pl: ${word.de}`);
    if (COMPARISON_COVERED_WORDS.has(bare) && word.study?.layout !== "comparisonStudy") {
      issues.push(`Uncovered standalone: ${word.de}`);
    }
    if (word.study) {
      for (const field of [word.lv, word.study.title, word.study.translation]) {
        if (field && (/;\s/.test(field) || /\d\.\s/.test(field))) {
          issues.push(`Title format: ${word.de}`);
        }
      }
    }
  }
  const compIds = words.filter((w) => w.study?.layout === "comparisonStudy").map((w) => w.study.id);
  for (const id of COMPARISON_CARD_IDS) {
    if (!compIds.includes(id)) issues.push(`Missing comparison card: ${id}`);
  }
  return issues;
}

// --- main ---
if (require.main === module) {
  runAuditCli();
}

function runAuditCli() {
  let words = loadA2();
  const comparisonResult = integrateComparisonCards(words);
  words = dedupeWords(comparisonResult.words);

  let fixes = [
    ...auditNouns(words),
    ...auditAdjectives(words),
    ...auditTitles(words),
    ...auditComparisonSubtitles(words),
  ];

  const merged = mergeFixes([fixes]);
  const report = [];

  for (const [de, m] of merged) {
    const w = words.find((x) => x.de === de);
    if (!w && !m.changes.removeEntry) continue;
    const updated = w ? applyFixes([w], [{ de, changes: m.changes }]) : [];
    const newFmt = m.changes.removeEntry ? "(ieraksts dzēsts)" : formatEntry(updated[0] || w);
    report.push({ de, old: m.old, new: newFmt, reason: m.reasons.join("; ") });
  }

  if (comparisonResult.added.length) {
    report.push({
      de: "(jaunas kartītes)",
      old: "—",
      new: comparisonResult.added.join(", "),
      reason: "Jaunizveidotas comparisonStudy kartītes",
    });
  }
  if (comparisonResult.removed.length) {
    report.push({
      de: "(dzēsti vārdi)",
      old: comparisonResult.removed.join(", "),
      new: "—",
      reason: "Dzēsti atsevišķie pamata ieraksti (iekļauti salīdzinājuma kartītēs)",
    });
  }

  console.log(`\n=== Goethe A2 audits: ${report.length} izmaiņas ===\n`);
  if (report.length === 0) {
    console.log("✅ Nav nepieciešamu labojumu — dati atbilst Goethe A2 standartam.\n");
  } else {
  report.forEach((r) => {
    console.log(`- ${r.de}`);
    console.log(`  Vecā: ${r.old}`);
    console.log(`  Jaunā: ${r.new}`);
    console.log(`  ${r.reason}\n`);
  });
  }

  if (FIX) {
    const allChanges = [...merged.values()].map((m) => ({ de: m.de, changes: m.changes }));
    let fixed = applyFixes(words, allChanges);
    fixed = dedupeWords(fixed);
    fixed = integrateComparisonCards(fixed).words;

    const remaining = runValidation(fixed);
    if (remaining.length) {
      console.log("⚠️ Atlikušās problēmas pēc labojumiem:");
      remaining.forEach((i) => console.log(`  - ${i}`));
    } else {
      console.log("✅ Validācija: 0 labojumi nepieciešami");
    }

    const out = serializeWords(fixed);
    fs.writeFileSync(path.join(root, "data/a2.js"), out, "utf8");
    fs.writeFileSync(path.join(root, "www/data/a2.js"), out, "utf8");
    fs.writeFileSync(
      path.join(__dirname, "goethe-a2-audit-report.json"),
      JSON.stringify({ report, comparisonCards: [...COMPARISON_CARD_IDS], remaining }, null, 2),
      "utf8"
    );
    console.log(`\n✅ Applied fixes to data/a2.js and www/data/a2.js`);
  } else {
    const remaining = runValidation(words);
    console.log(`Comparison cards configured: ${[...COMPARISON_CARD_IDS].join(", ")}`);
    console.log(`Covered words: ${[...COMPARISON_COVERED_WORDS].sort().join(", ")}`);
    console.log(`Validation issues (dry run): ${remaining.length}`);
    if (remaining.length) remaining.slice(0, 20).forEach((i) => console.log(`  - ${i}`));
    console.log("\nDry run. Use --fix to apply changes.");
  }
}

module.exports = {
  GOETHE_A2_NOUNS,
  GOETHE_A2_ADJECTIVES,
  COMPARISON_CARD_IDS,
  COMPARISON_COVERED_WORDS,
  runValidation,
  loadA2,
};
