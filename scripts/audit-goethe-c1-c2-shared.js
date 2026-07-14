/**
 * Shared audit logic for Goethe C1/C2 vocabulary (Profile Deutsch / CEFR C1–C2).
 * Used by audit-goethe-c1.js and audit-goethe-c2.js.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const BULLET = " • ";
const REKTION_PATTERN = /\+\s*(Dativ|Akkusativ|Genitiv|Dativ\/Akkusativ)/i;
const TECH_IN_DE = /\+\s*(Dativ|Akkusativ|Genitiv)/i;

/** Homonyms: same spelling, different POS/article — never merge duplicates. */
const HOMONYM_KEEP_SEPARATE = new Set([
  "karre|Karren",
  "Panter|Panther",
  "imstande|im Stande",
  "instand|in Stand",
  "inwiefern|inwieweit",
  "Hektar",
  "Matsch",
  "Krüppel",
  "Kriegsbeschädigte",
  "Kriegsgefangene",
  "Sachverständige",
]);

const COMPARISON_CARD_IDS = new Set([
  "compare-beziehen-beabsichtigen",
  "compare-unterstellen-voraussetzen",
  "compare-bewahren-aufrechterhalten",
]);

const COMPARISON_COVERED_WORDS = new Set([
  "beziehen",
  "beabsichtigen",
  "unterstellen",
  "voraussetzen",
  "bewahren",
  "aufrechterhalten",
]);

const COMPARISON_SUBTITLES = {
  "compare-beziehen-beabsichtigen": "beziehen • beabsichtigen",
  "compare-unterstellen-voraussetzen": "unterstellen • voraussetzen",
  "compare-bewahren-aufrechterhalten": "bewahren • aufrechterhalten",
};

/** Singularetantum — remove invented plural (abstract / legal). */
const SINGULAR_ONLY = new Set([
  "Rechenschaft",
  "Gewichtheben",
  "Flugwetter",
  "Wetterleuchten",
  "Leistungssport",
]);

/** Correct plural forms for compound / -nis / -schaft nouns. */
const PLURAL_FIXES = {
  Aktionsprogramm: "die Aktionsprogramme",
  Alarmbereitschaft: "die Alarmbereitschaften",
  Abrüstungsabkommen: "die Abrüstungsabkommen",
  Abrüstungsverhandlungen: "die Abrüstungsverhandlungen",
  Freikörperkultur: "die Freikörperkulturen",
  Dampfbügeleisen: "die Dampfbügeleisen",
  "Rennen mit Hindernissen": "die Rennen mit Hindernissen",
  Haltbarkeitsdauer: "die Haltbarkeitsdauern",
  Regierungschef: "die Regierungschefs",
  Verhandlungen: "die Verhandlungen",
  Zivilgesetzbuch: "die Zivilgesetzbücher",
  Frachtgeld: "die Frachtgelder",
  Führunternehmen: "die Führunternehmen",
  Baugenossenschaft: "die Baugenossenschaften",
  Forschungsgemeinschaft: "die Forschungsgemeinschaften",
  "Gesetzgebende Gewalt": "die gesetzgebenden Gewalten",
  Lebensbedingungen: "die Lebensbedingungen",
  Besatzungstruppen: "die Besatzungstruppen",
  Sittlichkeitsdelikt: "die Sittlichkeitsdelikte",
  Entbindungsanstalt: "die Entbindungsanstalten",
  Friedensbedingungen: "die Friedensbedingungen",
  Friedensverhandlungen: "die Friedensverhandlungen",
  Führereigenschaften: "die Führereigenschaften",
  Gerechtigkeitsgefühl: "die Gerechtigkeitsgefühle",
  Lebenshaltungskosten: "die Lebenshaltungskosten",
  Meinungsverschiedenheiten: "die Meinungsverschiedenheiten",
  Meisterschaftsspiel: "die Meisterschaftsspiele",
  Büroangestellte: null, // declinable — plural same form
  Hausangestellte: null,
  Gartenerdbeere: "die Gartenerdbeeren",
};

/** Split slash-variant entries into separate homonym records. */
const SLASH_SPLITS = {
  "karre / Karren": [
    { de: "die Karre", de_article: "die", de_plural: "die Karren", lv: "ķerra" },
    { de: "der Karren", de_article: "der", de_plural: "die Karren", lv: "ķerra" },
  ],
  "Panter / Panther": [
    { de: "der Panter", de_article: "der", de_plural: "die Panter", lv: "pantera" },
    { de: "der Panther", de_article: "der", de_plural: "die Panther", lv: "pantera" },
  ],
  "der/das Hektar": [{ de: "der Hektar", de_article: "der", de_plural: "die Hektar", lv: "hektārs" }],
  "der/das Matsch": [{ de: "der Matsch", de_article: "der", de_plural: "die Matsche", lv: "mačs" }],
  "der/die Krüppel": [{ de: "der Krüppel", de_article: "der", de_plural: "die Krüppel", lv: "kroplis" }],
  "imstande / im Stande": [
    { de: "imstande", lv: "spējīgs" },
    { de: "im Stande", lv: "spējīgs" },
  ],
  "instand / in Stand": [
    { de: "instand", lv: "kārtībā" },
    { de: "in Stand", lv: "kārtībā" },
  ],
  "inwiefern / inwieweit": [
    { de: "inwiefern", lv: "cik lielā mērā" },
    { de: "inwieweit", lv: "cik lielā mērā" },
  ],
  "Karre / der Karren": [
    { de: "die Karre", de_article: "die", de_plural: "die Karren", lv: "ķerra" },
    { de: "der Karren", de_article: "der", de_plural: "die Karren", lv: "ķerra" },
  ],
  "der/die Kriegsbeschädigte": [
    {
      de: "der Kriegsbeschädigte",
      de_article: "der",
      de_plural: "die Kriegsbeschädigten",
      lv: "kara invalīds",
    },
  ],
  "der/die Kriegsgefangene": [
    {
      de: "der Kriegsgefangene",
      de_article: "der",
      de_plural: "die Kriegsgefangenen",
      lv: "karagūsteknis",
    },
  ],
  "der/die Sachverständige": [
    {
      de: "der Sachverständige",
      de_article: "der",
      de_plural: "die Sachverständigen",
      lv: "lietpratējs • eksperts",
    },
  ],
};

/** LV title fixes: comma explanations → bullet meanings. */
const LV_TITLE_FIXES = {
  Abschleppdienst: "evakuācijas dienests • aizvākšanas dienests",
  Marschflugkörper: "kreisla lidojošā raķete • kruīzraķete",
};

/** C1/C2 adjective endings — must be lowercase without article. */
const ADJECTIVE_SUFFIX = /(lich|isch|los|voll|haft|bar|sam|ig|end|iert|lich|mäßig|würdig|frei)$/i;

function loadWords(filePath, key) {
  const win = {};
  vm.runInContext(fs.readFileSync(filePath, "utf8"), vm.createContext({ window: win }));
  return win[key] || [];
}

function formatEntry(e) {
  const parts = [`de: "${e.de}"`];
  if (e.de_article) parts.push(`art: ${e.de_article}`);
  if (e.de_plural) parts.push(`pl: ${e.de_plural}`);
  if (e.lv) parts.push(`lv: "${e.lv}"`);
  return `{ ${parts.join(", ")} }`;
}

function isAdjective(word) {
  const de = word.de || "";
  if (word.de_article) return false;
  if (/^[A-ZÄÖÜ]/.test(de)) return false;
  if (de.includes(" ")) return false;
  return ADJECTIVE_SUFFIX.test(de) || /^(un|aus|auf|ein|über|unter)/.test(de);
}

function isLikelyInventedPlural(de, dePlural) {
  if (!dePlural) return false;
  const pl = dePlural.replace(/^die\s+/, "");
  const sg = de;
  if (pl === sg + "s" && /(keit|heit|schaft|tum|nis|ung|programm|abkommen|geld|wetter|buche|kultur|verhandlung|anstalt|delikt|spiel|kosten|bedingung)/i.test(sg)) {
    return true;
  }
  if (/schafts$/.test(pl) || /bereitschafts$/.test(pl)) return true;
  if (pl === sg + "ens") return true;
  if (/Angestellte$/.test(pl) && /Angestellte$/.test(sg)) return true;
  return false;
}

function normalizeTitle(lv) {
  if (!lv) return lv;
  let s = lv.trim();
  s = s.replace(/\s*;\s*/g, BULLET);
  s = s.replace(/\s*\/\s*/g, BULLET);
  s = s.replace(/\s*\|\s*/g, BULLET);
  s = s.replace(/\d+\.\s*/g, "");
  s = s.replace(/\s*•\s*/g, BULLET);
  const parts = s
    .split(BULLET)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => {
      const clean = p.replace(/^\([^)]*\)\s*/, "").replace(/\s*\([^)]{15,}\)$/, "").trim();
      return clean.charAt(0).toUpperCase() + clean.slice(1);
    });
  return parts.join(BULLET);
}

function auditWords(words, level) {
  const fixes = [];
  const deKeys = new Map();

  for (const word of words) {
    const de = word.de;
    if (word.study?.layout === "comparisonStudy" && COMPARISON_CARD_IDS.has(word.study.id)) {
      continue;
    }
    if (COMPARISON_COVERED_WORDS.has(de) && word.study?.layout !== "comparisonStudy") {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: `Dzēsts pamata ieraksts — aizstāj comparisonStudy (${word.study?.id || "compare"})`,
        changes: { removeEntry: true },
      });
      continue;
    }

    const key = de.toLowerCase();
    if (deKeys.has(key)) {
      const prev = deKeys.get(key);
      const sameArt = (prev.de_article || "") === (word.de_article || "");
      const sameLv = prev.lv === word.lv;
      if (sameArt && sameLv) {
        fixes.push({
          de,
          old: formatEntry(word),
          reason: "Dzēsts identisks dublikāts",
          changes: { removeEntry: true },
        });
        continue;
      }
      // HOMONYM_KEEP_SEPARATE — different article/POS: keep both
    } else {
      deKeys.set(key, word);
    }

    // REKTION_IN_DE
    if (TECH_IN_DE.test(de)) {
      const cleanDe = de.replace(/\s*\+\s*(Dativ|Akkusativ|Genitiv|Dativ\/Akkusativ).*/i, "").trim();
      fixes.push({
        de,
        old: formatEntry(word),
        reason: "REKTION_IN_DE: noņemta rekcijas piezīme no de lauka",
        changes: {
          de: cleanDe,
          rektion: de.match(REKTION_PATTERN)?.[0]?.replace(/^\+\s*/, "") || "",
        },
      });
    }

    // Slash variants → homonym split
    if (SLASH_SPLITS[de]) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: "Sadalīts homoņu ieraksts (HOMONYM_KEEP_SEPARATE)",
        changes: { removeEntry: true, splitInto: SLASH_SPLITS[de].map((e) => ({ ...e, level })) },
      });
      continue;
    }

    // Title standard — predefined fixes
    if (LV_TITLE_FIXES[de] && word.lv !== LV_TITLE_FIXES[de]) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: "CARD TITLE: komats/garš skaidrojums → • nozīmes",
        changes: { lv: LV_TITLE_FIXES[de] },
      });
    } else if (word.lv && (/;/.test(word.lv) || /\d+\./.test(word.lv) || (/,/.test(word.lv) && !word.lv.includes("•")))) {
      const normalized = normalizeTitle(word.lv);
      if (normalized !== word.lv) {
        fixes.push({
          de,
          old: formatEntry(word),
          reason: "CARD TITLE STANDARD: normalizēts lv virsraksts (tikai •)",
          changes: { lv: normalized },
        });
      }
    }

    // Adjectives
    if (isAdjective(word) && (word.de_article || word.de_plural)) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: "Īpašības vārdam noņemts artikuls/daudzskaitlis",
        changes: { de: de.toLowerCase(), removeArticle: true, removePlural: true },
      });
    } else if (isAdjective(word) && de !== de.toLowerCase()) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: "Īpašības vārds ar mazo sākumburtu",
        changes: { de: de.toLowerCase() },
      });
    }

    // Singularetantum
    if (SINGULAR_ONLY.has(de) && word.de_plural) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: "Noņemta mākslīga daudzskaitļa forma (Singularetantum)",
        changes: { removePlural: true },
      });
    }

    // Plural fixes
    if (PLURAL_FIXES[de] !== undefined) {
      const expected = PLURAL_FIXES[de];
      if (expected === null && word.de_plural) {
        fixes.push({
          de,
          old: formatEntry(word),
          reason: "Noņemta kļūdaina daudzskaitļa forma (deklinējams lietvārds)",
          changes: { removePlural: true },
        });
      } else if (expected && word.de_plural !== expected) {
        fixes.push({
          de,
          old: formatEntry(word),
          reason: `Izlabota daudzskaitļa forma (${word.de_plural} → ${expected})`,
          changes: { de_plural: expected },
        });
      }
    } else if (word.de_plural && isLikelyInventedPlural(de, word.de_plural)) {
      const expected = PLURAL_FIXES[de];
      if (expected) {
        fixes.push({
          de,
          old: formatEntry(word),
          reason: `Izlabota izdomāta daudzskaitļa forma → ${expected}`,
          changes: { de_plural: expected },
        });
      } else {
        fixes.push({
          de,
          old: formatEntry(word),
          reason: "Noņemta izdomāta daudzskaitļa forma",
          changes: { removePlural: true },
        });
      }
    }

    // study.translation sync
    if (word.study?.translation && word.lv && word.study.translation !== word.lv) {
      fixes.push({
        de,
        old: `translation: "${word.study.translation}"`,
        reason: "Sinhronizēts study.translation ar lv",
        changes: { studyTranslation: word.lv, studyId: word.study.id },
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
    if (expected && word.study.subtitle !== expected) {
      fixes.push({
        de: word.de,
        old: `{ subtitle: "${word.study.subtitle}" }`,
        reason: `Izlabots comparisonStudy subtitle → ${expected}`,
        changes: { subtitle: expected, studyId: id },
      });
    }
    const expectedTitle = word.study.title;
    if (expectedTitle && /;|\d+\./.test(expectedTitle)) {
      fixes.push({
        de: word.de,
        old: `{ title: "${word.study.title}" }`,
        reason: "CARD TITLE STANDARD: comparisonStudy title",
        changes: { title: normalizeTitle(expectedTitle), studyId: id },
      });
    }
  }
  return fixes;
}

function applyFixes(words, fixList) {
  const byDe = new Map();
  const subtitleById = new Map();
  const titleById = new Map();
  const studyTranslationById = new Map();
  const splitEntries = [];

  for (const f of fixList) {
    if (f.changes?.studyId && f.changes?.subtitle) {
      subtitleById.set(f.changes.studyId, f.changes.subtitle);
      continue;
    }
    if (f.changes?.studyId && f.changes?.title) {
      titleById.set(f.changes.studyId, f.changes.title);
      continue;
    }
    if (f.changes?.studyId && f.changes?.studyTranslation) {
      studyTranslationById.set(f.changes.studyId, f.changes.studyTranslation);
      continue;
    }
    if (f.changes?.splitInto) {
      splitEntries.push(...f.changes.splitInto);
    }
    byDe.set(f.de, { ...(byDe.get(f.de) || {}), ...f.changes });
  }

  const result = [];
  for (const word of words) {
    const studyId = word.study?.id;
    if (studyId && subtitleById.has(studyId)) {
      result.push({ ...word, study: { ...word.study, subtitle: subtitleById.get(studyId) } });
      continue;
    }
    if (studyId && titleById.has(studyId)) {
      result.push({ ...word, study: { ...word.study, title: titleById.get(studyId) } });
      continue;
    }
    if (studyId && studyTranslationById.has(studyId)) {
      result.push({
        ...word,
        study: { ...word.study, translation: studyTranslationById.get(studyId) },
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
    if (changes.lv) updated.lv = changes.lv;
    if (changes.de_article) updated.de_article = changes.de_article;
    if (changes.de_plural) updated.de_plural = changes.de_plural;
    if (changes.removeArticle) delete updated.de_article;
    if (changes.removePlural) delete updated.de_plural;
    if (changes.rektion && updated.study) {
      updated.study = { ...updated.study, rektion: changes.rektion };
    } else if (changes.rektion) {
      updated.study = { rektion: changes.rektion };
    }
    result.push(updated);
  }

  for (const entry of splitEntries) {
    if (!result.some((w) => w.de === entry.de && w.lv === entry.lv)) {
      result.push(entry);
    }
  }

  return result;
}

function serializeWords(words, constName) {
  const lines = [`const ${constName} = [`];
  for (const w of words) {
    lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  }
  lines.push("];", "", `window.${constName} = ${constName};`);
  return lines.join("\n");
}

function runAudit({ level, file, key, fix }) {
  const root = path.join(__dirname, "..");
  const filePath = path.join(root, file);
  const words = loadWords(filePath, key);
  let fixes = [...auditWords(words, level), ...auditComparisonSubtitles(words)];

  const merged = new Map();
  for (const f of fixes) {
    if (!merged.has(f.de)) merged.set(f.de, { de: f.de, reasons: [], changes: {}, old: f.old });
    const m = merged.get(f.de);
    m.reasons.push(f.reason);
    Object.assign(m.changes, f.changes);
    m.old = f.old;
  }

  const report = [];
  for (const [, m] of merged) {
    const w = words.find((x) => x.de === m.de);
    if (!w && !m.changes.splitInto) continue;
    const updated = applyFixes(w ? [w] : [], [{ de: m.de, changes: m.changes }]);
    const newFmt = m.changes.removeEntry && !m.changes.splitInto
      ? "(ieraksts dzēsts)"
      : m.changes.splitInto
        ? `(sadalīts ${m.changes.splitInto.length} homoņos)`
        : formatEntry(updated[0] || w);
    report.push({ de: m.de, old: m.old, new: newFmt, reason: m.reasons.join("; ") });
  }

  console.log(`\n=== Goethe ${level} audits: ${report.length} labojumi ===\n`);
  report.forEach((r) => {
    console.log(`- ${r.de}`);
    console.log(`  Vecā: ${r.old}`);
    console.log(`  Jaunā: ${r.new}`);
    console.log(`  ${r.reason}\n`);
  });

  if (fix && report.length > 0) {
    const allChanges = [...merged.values()].map((m) => ({ de: m.de, changes: m.changes }));
    const fixed = applyFixes(words, allChanges);
    const out = serializeWords(fixed, key);
    fs.writeFileSync(filePath, out, "utf8");
    fs.writeFileSync(path.join(root, "www", file), out, "utf8");
    fs.writeFileSync(
      path.join(__dirname, `goethe-${level.toLowerCase()}-audit-report.json`),
      JSON.stringify(report, null, 2),
      "utf8"
    );
    console.log(`✅ Applied ${report.length} fixes to ${file} and www/${file}`);
  } else if (!fix) {
    console.log(report.length === 0 ? "✅ 0 nepieciešami labojumi" : "Dry run. Use --fix to apply changes.");
  } else {
    console.log("✅ 0 nepieciešami labojumi");
  }

  return report.length;
}

module.exports = {
  runAudit,
  loadWords,
  serializeWords,
  applyFixes,
  COMPARISON_CARD_IDS,
  COMPARISON_COVERED_WORDS,
  HOMONYM_KEEP_SEPARATE,
};
