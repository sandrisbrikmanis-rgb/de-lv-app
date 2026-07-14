/**
 * Audit & fix B2 vocabulary against Goethe-Zertifikat B2 Wortliste standards.
 * Usage: node scripts/audit-goethe-b2.js [--fix]
 */
const fs = require("fs");
const path = require("path");

const FIX = process.argv.includes("--fix");
const root = path.join(__dirname, "..");
const bullet = "\u2022";
const DATA_FILES = ["data/b2.js", "www/data/b2.js"];

// --- Goethe B2: Singularetantum (remove invented plurals) ---
const GOETHE_B2_SINGULAR_ONLY = new Set([
  "Alkoholismus",
  "Extremismus",
  "Faschismus",
  "Kapitalismus",
  "Kommunismus",
  "Marxismus",
  "Materialismus",
  "Realismus",
  "Separatismus",
  "Sozialismus",
  "Terrorismus",
]);

// Compound Geheimnis nouns — plural is Geheimnisse, not Geheimse
const GOETHE_B2_GEHEIMNIS_PLURALS = {
  Bankgeheimnis: "die Bankgeheimnisse",
  Amtsgeheimnis: "die Amtsgeheimnisse",
};

// B2 verbs with fixed prepositions — clean de + study.rektion (NEVER in de field)
const B2_VERB_REKTION = {
  "sich abfinden": { rektion: "mit + Dativ", lv: "samierināties ar" },
  "sich abwenden": { rektion: "von + Dativ", lv: "novērsties no" },
  "sich befassen": { rektion: "mit + Dativ", lv: "nodarboties ar" },
  "sich begnügen": { rektion: "mit + Dativ", lv: "apmierināties ar" },
  "sich bemächtigen": { rektion: "+ Genitiv", lv: "sagrābt • saņemt savā varā" },
  "sich berufen": { rektion: "auf + Akkusativ", lv: "atsaukties uz" },
  "sich beschränken": { rektion: "auf + Akkusativ", lv: "ierobežoties ar" },
  "sich betätigen": { rektion: "in + Dativ", lv: "darboties • piedalīties" },
  "sich einlassen": { rektion: "auf + Akkusativ", lv: "ielaisties" },
  "sich einprägen": { rektion: "in + Akkusativ", lv: "iegaumēt" },
  "sich einschleichen": { rektion: "in + Akkusativ", lv: "ielavīties • iezagties" },
  "sich einschränken": { rektion: "auf + Akkusativ", lv: "ierobežoties" },
  "sich empfehlen": { rektion: "zu + Dativ", lv: "būt ieteicamam" },
  "sich empören": { rektion: "über + Akkusativ", lv: "sašust • sacelties" },
  "sich enthalten": { rektion: "von + Dativ", lv: "atturēties no" },
  "sich entledigen": { rektion: "+ Genitiv", lv: "atbrīvoties • tikt vaļā" },
  "sich entrüsten": { rektion: "über + Akkusativ", lv: "sašust • sadumpoties" },
  "sich entsinnen": {
    rektion: "+ Genitiv",
    lv: "atminēties • atcerēties",
    explanation:
      "sich entsinnen mūsdienu vāciski lieto ar Genitiv bez prievārda, piemēram: Ich entsinne mich eines Fehlers.",
  },
  "sich erbarmen": { rektion: "über + Akkusativ", lv: "apžēloties • iežēloties" },
  "sich ergeben": { rektion: "aus + Dativ", lv: "izrietēt • padoties" },
  "sich erniedrigen": { rektion: "vor + Dativ", lv: "pazemoties" },
  "sich erregen": { rektion: "über + Akkusativ", lv: "uztraukties par" },
  "sich erweisen": { rektion: "als + Nominativ", lv: "izrādīties par" },
  "sich fassen": { rektion: "an + Dativ", lv: "sagrābt • saņemties • savaldīties" },
  "sich fügen": { rektion: "in + Akkusativ", lv: "pielāgoties • pakļauties" },
  "sich genieren": { rektion: "vor + Dativ", lv: "kaunēties" },
  "sich gesellen": { rektion: "zu + Dativ", lv: "pievienoties" },
  "sich gestalten": { rektion: "zu + Dativ", lv: "veidoties par" },
  "sich grauen": { rektion: "vor + Dativ", lv: "biedēties no" },
  "sich herausbilden": { rektion: "zu + Dativ", lv: "izveidoties par" },
  "sich heraushalten": { rektion: "aus + Dativ", lv: "turēties nost no" },
  "sich herausstellen": { rektion: "als + Nominativ", lv: "izrādīties par" },
  "sich hervortun": { rektion: "in + Dativ", lv: "izcelties" },
  "sich hingeben": { rektion: "+ Dativ", lv: "atdoties • nodoties" },
  "sich paaren": { rektion: "mit + Dativ", lv: "pāroties ar" },
  "sich revanchieren": { rektion: "bei + Dativ", lv: "atmaksāt • atriebties" },
  "sich scheren": { rektion: "um + Akkusativ", lv: "rūpēties par" },
  "sich vereinigen": { rektion: "mit + Dativ", lv: "apvienoties ar" },
  "sich versehen": { rektion: "mit + Dativ", lv: "aizmirst • aprīkot ar" },
  "sich versöhnen": { rektion: "mit + Dativ", lv: "samierināties ar" },
  "sich verstellen": { rektion: "als + Akkusativ", lv: "uzdoties par" },
  "sich verwundern": { rektion: "über + Akkusativ", lv: "brīnīties par" },
  "sich widersetzen": { rektion: "+ Dativ", lv: "pretoties • stāties pretī" },
  abhängen: { rektion: "von + Dativ", lv: "būt atkarīgam no" },
  "sich verlassen": { rektion: "auf + Akkusativ", lv: "paļauties uz" },
};

// Verbs that must NOT have study.rektion
const B2_VERB_NO_REKTION = new Set(["sich verlaufen", "verlaufen"]);

// Required B2 entries (linguistic corrections)
const B2_REQUIRED_ENTRIES = {
  "sich verlaufen": {
    lv: "apmaldīties",
    study: {
      id: "b2-sich-verlaufen",
      layout: "minimalStudy",
      translation: "apmaldīties",
      explanation:
        "sich verlaufen nozīmē apmaldīties. Tam nav fiksēta prievārda. Nav jaucams ar verlaufen (norisināties).",
      sectionAccents: {
        explanation: { blue: ["sich verlaufen"], purple: ["apmaldīties"], red: ["verlaufen"] },
      },
    },
  },
  verlaufen: {
    lv: "norisināties • ritēt",
    study: {
      id: "b2-verlaufen",
      layout: "minimalStudy",
      translation: "norisināties • ritēt",
      explanation:
        "verlaufen (bez sich) nozīmē norisināties vai ritēt. Nav sinonīms ar sich verlaufen (apmaldīties).",
      sectionAccents: {
        explanation: { blue: ["verlaufen"], purple: ["norisināties", "ritēt"], red: ["sich verlaufen"] },
      },
    },
  },
};

const B2_LINGUISTIC_FIXES = {
  bewältigen: { lv: "pārvarēt • tikt galā ar" },
};

const REKTION_IN_DE = /\s+(mit|von|auf|an|in|zu|über|vor|aus|bei|um|als)\s+\+\s*\w+|\s+\+\s*(Dativ|Akkusativ|Genitiv|Nominativ)/i;

// Homonyms that MUST stay as separate entries (never merge)
const HOMONYM_KEEP_SEPARATE = [
  ["Flur", "die", "Flur", "der"],
  ["Fremde", "die", "Fremde", "der"],
  ["Gefallen", "der", "Gefallen", "das"],
  ["Moment", "der", "Moment", "das"],
  ["Tor", "das", "Tor", "der"],
  ["Weise", "die", "Weise", "der"],
  ["See", "die", "See", "der"],
  ["Leiter", "die", "Leiter", "der"],
  ["Steuer", "die", "Steuer", "das"],
  ["Erbe", "das", "Erbe", "der"],
  ["Gehalt", "das", "Gehalt", "der"],
  ["Kunde", "der", "Kunde", "die"],
];

const HOMONYM_KEYS = new Set(
  HOMONYM_KEEP_SEPARATE.flatMap(([noun, art1, , art2]) => [
    `${noun.toLowerCase()}|${art1}`,
    `${noun.toLowerCase()}|${art2}`,
  ])
);

const COMPARISON_CARD_IDS = new Set([
  "compare-aendern-wechseln",
  "compare-bieten-anbieten",
  "compare-fordern-foerdern",
]);

const COMPARISON_SUBTITLES = {
  "compare-aendern-wechseln": "ändern • wechseln",
  "compare-bieten-anbieten": "bieten • anbieten",
  "compare-fordern-foerdern": "fordern • fördern",
};

const COMPARISON_COVERED_WORDS = new Set([
  "ändern",
  "wechseln",
  "bieten",
  "anbieten",
  "fordern",
  "fördern",
]);

const COMPARISON_REQUIRED_SECTIONS = [
  "title",
  "subtitle",
  "lead",
  "words",
  "examples",
  "comparisonTable",
  "importantComparison",
  "tip",
  "important",
  "mistakes",
  "remember",
  "sectionAccents",
];

const COMPARISON_TABLE_COLUMNS = [
  "lv",
  "de",
  "meaning",
  "describes",
  "example",
  "translation",
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

function loadB2(filePath) {
  const code = fs.readFileSync(path.join(root, filePath), "utf8");
  return JSON.parse(repairJson(extractArray(code)));
}

function formatEntry(e) {
  const parts = [`de: "${e.de}"`];
  if (e.de_article) parts.push(`art: ${e.de_article}`);
  if (e.de_plural) parts.push(`pl: ${e.de_plural}`);
  if (e.lv) parts.push(`lv: "${e.lv}"`);
  return `{ ${parts.join(", ")} }`;
}

function cleanVerbDe(de) {
  return String(de || "")
    .replace(/\s+(mit|von|auf|an|in|zu|über|vor|aus|bei|um|als)\s+\+\s*\w+$/i, "")
    .replace(/\s+\+\s*(Dativ|Akkusativ|Genitiv|Nominativ)$/i, "")
    .trim();
}

function slugifyDe(de) {
  return de
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss");
}

function rektionExplanation(de, rektion) {
  if (rektion === "+ Genitiv") {
    return `${de} mūsdienu vāciski lieto ar Genitiv bez prievārda.`;
  }
  if (/^\+/.test(rektion)) {
    return `${de} prasa ${rektion}.`;
  }
  return `${de} prasa fiksētu prievārdu ${rektion}.`;
}

function buildRektionStudy(de, spec) {
  const explanation = spec.explanation || rektionExplanation(de, spec.rektion);
  const purpleHighlights = spec.lv.split(bullet).map((s) => s.trim()).filter(Boolean);
  return {
    id: `b2-${slugifyDe(de)}`,
    layout: "minimalStudy",
    translation: spec.lv,
    rektion: spec.rektion,
    explanation,
    forms: spec.rektion,
    formsLabel: "Vadība:",
    sectionAccents: {
      explanation: {
        blue: [de],
        red: [spec.rektion],
        ...(purpleHighlights.length ? { purple: purpleHighlights } : {}),
      },
    },
  };
}

function baseVerbKey(de) {
  return cleanVerbDe(de);
}

function isHomonymPair(a, b) {
  if (a.de.toLowerCase() !== b.de.toLowerCase()) return false;
  if (a.de_article === b.de_article) return false;
  const keyA = `${a.de.toLowerCase()}|${a.de_article || ""}`;
  const keyB = `${b.de.toLowerCase()}|${b.de_article || ""}`;
  return HOMONYM_KEYS.has(keyA) && HOMONYM_KEYS.has(keyB);
}

function auditSingularOnly(words) {
  const fixes = [];
  for (const word of words) {
    if (word.study?.layout === "comparisonStudy") continue;
    const de = word.de;
    const isIsmus = /ismus$/i.test(de);
    if (!GOETHE_B2_SINGULAR_ONLY.has(de) && !isIsmus) continue;
    if (!word.de_plural) continue;
    fixes.push({
      de,
      old: formatEntry(word),
      reason: "Noņemta mākslīga daudzskaitļa forma (Singularetantum pēc Goethe B2 Wortliste)",
      changes: { removePlural: true },
    });
  }
  return fixes;
}

function auditGeheimnisPlurals(words) {
  const fixes = [];
  for (const word of words) {
    const expected = GOETHE_B2_GEHEIMNIS_PLURALS[word.de];
    if (!expected || word.de_plural === expected) continue;
    fixes.push({
      de: word.de,
      old: formatEntry(word),
      reason: `Izlabota Geheimnis salikteņa daudzskaitļa forma (${word.de_plural} → ${expected})`,
      changes: { de_plural: expected },
    });
  }
  return fixes;
}

function auditVerbRektion(words) {
  const fixes = [];
  for (const word of words) {
    if (word.study?.layout === "comparisonStudy") continue;

    const key = baseVerbKey(word.de);
    const spec = B2_VERB_REKTION[key];
    const changes = {};
    const reasons = [];

    // Rule: de field must never contain technical rektion text
    if (REKTION_IN_DE.test(word.de)) {
      changes.de = key;
      reasons.push(`Noņemta tehniskā vadība no de lauka (${word.de} → ${key})`);
    }

    if (B2_VERB_NO_REKTION.has(key)) {
      if (word.study?.rektion) {
        changes.removeStudyRektion = true;
        reasons.push("Noņemts study.rektion — šim darbības vārdam nav fiksēta prievārda");
      }
      if (REKTION_IN_DE.test(word.de)) {
        if (!changes.de) changes.de = key;
      }
      if (Object.keys(changes).length) {
        fixes.push({ de: word.de, old: formatEntry(word), reason: reasons.join("; "), changes });
      }
      continue;
    }

    if (!spec) {
      if (Object.keys(changes).length) {
        fixes.push({ de: word.de, old: formatEntry(word), reason: reasons.join("; "), changes });
      }
      continue;
    }

    const expectedStudy = buildRektionStudy(key, spec);

    if (word.lv !== spec.lv) {
      changes.lv = spec.lv;
      reasons.push("Atjaunināts latviešu tulkojums ar prievārda vadību");
    }

    if (!word.study?.rektion || word.study.rektion !== spec.rektion) {
      changes.study = expectedStudy;
      reasons.push(`Pievienots study.rektion (${spec.rektion})`);
    } else if (!word.study.explanation) {
      changes.study = { ...word.study, ...expectedStudy };
      reasons.push("Pievienots study.explanation ar vadības skaidrojumu");
    } else if (JSON.stringify(word.study.sectionAccents) !== JSON.stringify(expectedStudy.sectionAccents)) {
      changes.study = { ...word.study, sectionAccents: expectedStudy.sectionAccents };
      reasons.push("Atjaunināts sectionAccents vadības vizualizācijai");
    }

    if (Object.keys(changes).length) {
      fixes.push({
        de: word.de,
        old: formatEntry(word),
        reason: reasons.join("; "),
        changes,
      });
    }
  }
  return fixes;
}

function auditLinguisticFixes(words) {
  const fixes = [];
  for (const word of words) {
    const spec = B2_LINGUISTIC_FIXES[word.de];
    if (spec?.lv && word.lv !== spec.lv) {
      fixes.push({
        de: word.de,
        old: formatEntry(word),
        reason: `Izlabots tulkojums (${word.lv} → ${spec.lv})`,
        changes: { lv: spec.lv },
      });
    }
  }
  return fixes;
}

function auditRequiredEntries(words) {
  const fixes = [];
  for (const [de, spec] of Object.entries(B2_REQUIRED_ENTRIES)) {
    const existing = words.find((w) => w.de === de);
    if (!existing) {
      fixes.push({
        de: `(add ${de})`,
        old: "(nav)",
        reason: `Pievienots trūkstošs ieraksts: ${de}`,
        changes: {
          addEntry: { de, lv: spec.lv, level: "B2", study: spec.study },
        },
      });
      continue;
    }
    const changes = {};
    const reasons = [];
    if (existing.lv !== spec.lv) {
      changes.lv = spec.lv;
      reasons.push(`Izlabots tulkojums (${existing.lv} → ${spec.lv})`);
    }
    if (!existing.study?.explanation) {
      changes.study = spec.study;
      reasons.push("Pievienots study.explanation");
    }
    if (existing.study?.rektion) {
      changes.removeStudyRektion = true;
      reasons.push("Noņemts kļūdains study.rektion");
    }
    if (Object.keys(changes).length) {
      fixes.push({
        de: existing.de,
        old: formatEntry(existing),
        reason: reasons.join("; "),
        changes,
      });
    }
  }
  return fixes;
}

function auditDeFieldClean(words) {
  const fixes = [];
  for (const word of words) {
    if (word.study?.layout === "comparisonStudy") continue;
    if (!REKTION_IN_DE.test(word.de)) continue;
    const key = cleanVerbDe(word.de);
    if (B2_VERB_REKTION[key]) continue; // handled by auditVerbRektion
    fixes.push({
      de: word.de,
      old: formatEntry(word),
      reason: `Noņemta tehniskā vadība no de lauka (${word.de} → ${key})`,
      changes: { de: key },
    });
  }
  return fixes;
}

function auditAdjectives(words) {
  const fixes = [];
  for (const word of words) {
    if (word.study?.layout === "comparisonStudy") continue;
    const de = word.de;
    if (!de || word.de_article) continue;
    if (!/^[a-zäöüß]/.test(de)) continue;
    if (de.includes(" ")) continue;

    const looksAdjective =
      /(lich|ig|isch|bar|sam|los|voll|frei|haft|mäßig|würdig|abel|al|ell|iv|ös|ant|ent)$/i.test(de) ||
      ["nachhaltig", "akzeptabel", "angebracht", "übersichtlich", "üppig"].includes(de);

    if (!looksAdjective) continue;
    if (word.de_plural) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: "Noņemts daudzskaitlis — īpašības vārdam nav daudzskaitļa formas",
        changes: { removePlural: true },
      });
    }
  }
  return fixes;
}

function dedupeLv(lv) {
  const parts = String(lv || "")
    .split(bullet)
    .map((s) => s.trim())
    .filter(Boolean);
  const seen = new Set();
  const out = [];
  for (const part of parts) {
    const key = part.toLowerCase();
    if (seen.has(key)) continue;
    // skip if a longer part already covers this (e.g. "samierināties" when "samierināties ar" exists)
    const covered = out.some(
      (existing) =>
        existing.toLowerCase().startsWith(key + " ") || key.startsWith(existing.toLowerCase() + " ")
    );
    if (covered) continue;
    seen.add(key);
    out.push(part);
  }
  return out.join(` ${bullet} `);
}

function auditLvFormat(words) {
  const fixes = [];
  for (const word of words) {
    const lv = word.lv || "";
    if (!lv) continue;

    const deduped = dedupeLv(lv);
    if (deduped !== lv) {
      fixes.push({
        de: word.de,
        old: formatEntry(word),
        reason: "Noņemti dublēti lv segmenti",
        changes: { lv: deduped },
      });
      continue;
    }

    if (lv.includes(";")) {
      fixes.push({
        de: word.de,
        old: formatEntry(word),
        reason: 'Aizstāts semikols ar " • " virsrakstā (lv)',
        changes: { lv: lv.split(/\s*;\s*/).map((s) => s.trim()).filter(Boolean).join(` ${bullet} `) },
      });
      continue;
    }

    const numbered = lv.match(/^\d+\.\s*/);
    if (numbered) {
      fixes.push({
        de: word.de,
        old: formatEntry(word),
        reason: "Noņemta numerācija no lv lauka",
        changes: { lv: lv.replace(/^\d+\.\s*/, "").trim() },
      });
    }
  }
  return fixes;
}

function auditDuplicates(words) {
  const fixes = [];
  const byKey = new Map();

  for (const word of words) {
    if (word.study?.layout === "comparisonStudy") continue;
    const key = `${word.de.toLowerCase()}|${word.de_article || ""}`;
    if (!byKey.has(key)) {
      byKey.set(key, word);
      continue;
    }

    const existing = byKey.get(key);
    if (isHomonymPair(existing, word)) continue;

    const lvParts = new Set(
      String(existing.lv || "")
        .split(bullet)
        .map((s) => s.trim())
        .filter(Boolean)
    );
    for (const part of String(word.lv || "")
      .split(bullet)
      .map((s) => s.trim())
      .filter(Boolean)) {
      lvParts.add(part);
    }

    fixes.push({
      de: word.de,
      old: formatEntry(word),
      reason: "Apvienots identisks dublikāts ar esošo ierakstu",
      changes: {
        mergeInto: existing.de,
        mergeArticle: existing.de_article || null,
        mergedLv: [...lvParts].join(` ${bullet} `),
        removeEntry: true,
      },
    });
  }
  return fixes;
}

function auditComparisonCards(words) {
  const fixes = [];
  const cards = words.filter(
    (w) => w.study?.layout === "comparisonStudy" && COMPARISON_CARD_IDS.has(w.study.id)
  );

  for (const id of COMPARISON_CARD_IDS) {
    if (!cards.some((c) => c.study.id === id)) {
      fixes.push({
        de: `(missing ${id})`,
        old: "(nav)",
        reason: `Trūkst comparisonStudy kartītes: ${id}`,
        changes: { missingComparisonCard: id },
      });
    }
  }

  for (const word of cards) {
    const study = word.study;
    const id = study.id;

    const expectedSubtitle = COMPARISON_SUBTITLES[id];
    if (expectedSubtitle && study.subtitle !== expectedSubtitle) {
      fixes.push({
        de: word.de,
        old: `{ subtitle: "${study.subtitle}" }`,
        reason: `Izlabots comparisonStudy subtitle (${study.subtitle} → ${expectedSubtitle})`,
        changes: { subtitle: expectedSubtitle, studyId: id },
      });
    }

    for (const section of COMPARISON_REQUIRED_SECTIONS) {
      if (study[section] == null || (Array.isArray(study[section]) && study[section].length === 0)) {
        fixes.push({
          de: word.de,
          old: `{ id: "${id}" }`,
          reason: `Trūkst comparisonStudy sadaļas: ${section}`,
          changes: { missingSection: section, studyId: id },
        });
      }
    }

    const table = study.comparisonTable || [];
    if (table.length < 4) {
      fixes.push({
        de: word.de,
        old: `{ id: "${id}", rows: ${table.length} }`,
        reason: `comparisonTable jābūt vismaz 4 rindām (pašlaik ${table.length})`,
        changes: { studyId: id },
      });
    }

    for (let i = 0; i < table.length; i++) {
      const row = table[i];
      for (const col of COMPARISON_TABLE_COLUMNS) {
        if (!row[col]) {
          fixes.push({
            de: word.de,
            old: `{ id: "${id}", row: ${i} }`,
            reason: `Trūkst comparisonTable kolonnas "${col}" rindā ${i}`,
            changes: { studyId: id },
          });
        }
      }
    }
  }

  for (const covered of COMPARISON_COVERED_WORDS) {
    const standalone = words.find(
      (w) => w.de === covered && w.study?.layout !== "comparisonStudy"
    );
    if (standalone) {
      fixes.push({
        de: covered,
        old: formatEntry(standalone),
        reason: `Dzēsts atsevišķs pamata ieraksts — vārds aptverts comparisonStudy kartītē`,
        changes: { removeEntry: true },
      });
    }
  }

  return fixes;
}

function applyFixes(words, fixList) {
  const byOriginalDe = new Map();
  const subtitleById = new Map();
  const mergeTargets = new Map();
  const addEntries = [];

  for (const f of fixList) {
    if (f.changes?.studyId && f.changes?.subtitle) {
      subtitleById.set(f.changes.studyId, f.changes.subtitle);
      continue;
    }
    if (f.changes?.addEntry) {
      addEntries.push(f.changes.addEntry);
      continue;
    }
    if (f.changes?.mergeInto) {
      const mergeKey = `${f.changes.mergeInto}|${f.changes.mergeArticle || ""}`;
      mergeTargets.set(mergeKey, f.changes.mergedLv);
      byOriginalDe.set(f.de, { ...(byOriginalDe.get(f.de) || {}), ...f.changes });
      continue;
    }
    byOriginalDe.set(f.de, { ...(byOriginalDe.get(f.de) || {}), ...f.changes });
  }

  const result = [];
  const seenKeys = new Set();

  for (const word of words) {
    const studyId = word.study?.id;
    if (studyId && subtitleById.has(studyId)) {
      const updated = {
        ...word,
        study: { ...word.study, subtitle: subtitleById.get(studyId) },
      };
      const key = `${updated.de}|${updated.de_article || ""}`;
      seenKeys.add(key);
      result.push(updated);
      continue;
    }

    const changes = byOriginalDe.get(word.de);
    if (changes?.removeEntry) continue;

    const mergeKey = `${word.de}|${word.de_article || ""}`;
    if (mergeTargets.has(mergeKey)) {
      const updated = { ...word, lv: mergeTargets.get(mergeKey) };
      seenKeys.add(`${updated.de}|${updated.de_article || ""}`);
      result.push(updated);
      continue;
    }

    if (!changes) {
      const key = `${word.de}|${word.de_article || ""}`;
      if (!seenKeys.has(key)) {
        seenKeys.add(key);
        result.push(word);
      }
      continue;
    }

    const updated = { ...word };
    if (changes.de) updated.de = changes.de;
    if (changes.de_article) updated.de_article = changes.de_article;
    if (changes.de_plural) updated.de_plural = changes.de_plural;
    if (changes.lv) updated.lv = changes.lv;
    if (changes.removeArticle) delete updated.de_article;
    if (changes.removePlural) delete updated.de_plural;

    if (changes.study) {
      updated.study = { ...(updated.study || {}), ...changes.study };
    }
    if (changes.removeStudyRektion && updated.study) {
      const nextStudy = { ...updated.study };
      delete nextStudy.rektion;
      delete nextStudy.forms;
      delete nextStudy.formsLabel;
      updated.study = nextStudy;
    }

    const finalKey = `${updated.de}|${updated.de_article || ""}`;
    const existingIdx = result.findIndex(
      (w) => `${w.de}|${w.de_article || ""}` === finalKey
    );
    if (existingIdx >= 0) {
      const existing = result[existingIdx];
      result[existingIdx] = {
        ...existing,
        lv: updated.lv || existing.lv,
        study: updated.study || existing.study,
      };
    } else {
      seenKeys.add(finalKey);
      result.push(updated);
    }
  }

  for (const entry of addEntries) {
    const key = `${entry.de}|${entry.de_article || ""}`;
    if (!seenKeys.has(key) && !result.some((w) => w.de === entry.de)) {
      result.push(entry);
      seenKeys.add(key);
    }
  }

  return result;
}

function serializeWords(words) {
  const lines = ["const B2_WORDS = ["];
  for (const w of words) {
    lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  }
  lines.push("];", "", "window.B2_WORDS = B2_WORDS;");
  return lines.join("\n");
}

function runAudit(words) {
  return [
    ...auditSingularOnly(words),
    ...auditGeheimnisPlurals(words),
    ...auditVerbRektion(words),
    ...auditLinguisticFixes(words),
    ...auditRequiredEntries(words),
    ...auditDeFieldClean(words),
    ...auditAdjectives(words),
    ...auditLvFormat(words),
    ...auditDuplicates(words),
    ...auditComparisonCards(words),
  ];
}

function main() {
  const words = loadB2("data/b2.js");
  let fixes = runAudit(words);

  const actionable = fixes.filter((f) => !f.changes?.missingComparisonCard && !f.changes?.missingSection);
  const structural = fixes.filter((f) => f.changes?.missingComparisonCard || f.changes?.missingSection);

  const merged = new Map();
  for (const f of actionable) {
    const key = f.changes?.studyId ? `study:${f.changes.studyId}` : f.de;
    if (!merged.has(key)) {
      merged.set(key, { de: f.de, reasons: [], changes: {}, old: f.old });
    }
    const m = merged.get(key);
    m.reasons.push(f.reason);
    Object.assign(m.changes, f.changes);
    m.old = f.old;
  }

  const report = [...merged.values()];
  console.log(`\n=== Goethe B2 audits: ${report.length} labojumi, ${structural.length} strukturāli trūkumi ===\n`);

  report.forEach((r) => {
    console.log(`- ${r.de}`);
    console.log(`  Vecā: ${r.old}`);
    console.log(`  ${r.reasons.join("; ")}\n`);
  });

  if (structural.length) {
    console.log("Strukturālie trūkumi (jālabo ar integrate-b2-comparison-cards.js):");
    structural.forEach((s) => console.log(`  - ${s.reason}`));
    console.log();
  }

  const comparisonCards = words.filter(
    (w) => w.study?.layout === "comparisonStudy" && COMPARISON_CARD_IDS.has(w.study?.id)
  );
  console.log(`Comparison cards: ${comparisonCards.map((c) => c.study.id).join(", ") || "(nav)"}`);
  console.log(`Nepieciešami labojumi: ${report.length + structural.length}\n`);

  if (FIX && report.length > 0) {
    const updated = applyFixes(words, actionable);
    for (const file of DATA_FILES) {
      fs.writeFileSync(path.join(root, file), serializeWords(updated), "utf8");
    }
    console.log(`Applied ${report.length} fixes to ${DATA_FILES.join(", ")}\n`);

    const recheck = runAudit(loadB2("data/b2.js")).filter(
      (f) => !f.changes?.missingComparisonCard && !f.changes?.missingSection
    );
    console.log(`Recheck after fix: ${recheck.length} remaining actionable issues\n`);
  }

  if (report.length + structural.length > 0) {
    process.exit(1);
  }
}

main();
