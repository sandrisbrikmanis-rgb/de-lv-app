/**
 * Audit & fix B1 vocabulary against Goethe-Zertifikat B1 Wortliste.
 * Usage: node scripts/audit-goethe-b1.js [--fix]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const FIX = process.argv.includes("--fix");
const root = path.join(__dirname, "..");
const bullet = "\u2022";

// --- Goethe B1 reference (parsed from official Wortliste PDF) ---
const GOETHE_NOUNS = JSON.parse(
  fs.readFileSync(path.join(__dirname, "goethe-b1-nouns-parsed.json"), "utf8")
);

// Goethe B1 reflexive verbs (must include "sich")
const GOETHE_REFLEXIVE = [
  "sich amüsieren", "sich anstrengen", "sich bedanken", "sich beeilen", "sich befinden",
  "sich bemühen", "sich beschweren", "sich beteiligen", "sich bewerben", "sich eignen",
  "sich einigen", "sich entschließen", "sich entschuldigen", "sich ereignen", "sich erholen",
  "sich erkundigen", "sich erkälten", "sich freuen", "sich irren", "sich konzentrieren",
  "sich kümmern", "sich langweilen", "sich lohnen", "sich nähern", "sich scheiden",
  "sich umziehen", "sich vergnügen", "sich verhalten", "sich verlaufen", "sich verlieben",
  "sich weigern", "sich wundern",
];

const REFLEXIVE_BARE_TO_SICH = {
  anstrengen: { de: "sich anstrengen", lv: "piepūlēties" },
  irren: { de: "sich irren", lv: "kļūdīties" },
  lohnen: { de: "sich lohnen", lv: "atmaksāties" },
  verlaufen: { de: "sich verlaufen", lv: "norisināties" },
};

const REFLEXIVE_LV_FIXES = {
  "sich eingewöhnen": "pierasties",
  "sich gewöhnen": "pierasties",
  "sich ernähren": "baroties",
  "sich bedienen": "apkalpoties",
  "sich vertragen": "sadzīvot",
  "sich erbrechen": "vemties",
};

const MISSING_REFLEXIVE_ENTRIES = {
  "sich bedanken": "pateikties",
  "sich beeilen": "steigties",
  "sich befinden": "atrasties",
  "sich bewerben": "pieteikties",
  "sich entschließen": "nolemties",
  "sich entschuldigen": "atvainoties",
  "sich ereignen": "gadīties",
  "sich erholen": "atpūsties",
  "sich erkälten": "saķerties",
  "sich freuen": "priecāties",
  "sich konzentrieren": "koncentrēties",
  "sich langweilen": "garlaikoties",
  "sich scheiden": "šķirties",
  "sich umziehen": "pārcelties",
  "sich vergnügen": "izklaidēties",
  "sich verlieben": "iemīlēties",
  "sich wundern": "brīnīties",
};

// Nouns with same-form plural — keep de_plural even when Goethe lists singular marker
const SAME_FORM_PLURAL_OK = new Set([
  "Donner", "Einkommen", "Einschreiben", "Lager", "Lautsprecher",
  "Opfer", "Orchester", "Speisewagen", "Titel",
]);

// comparisonStudy card IDs in B1 (skip base-word rules)
const COMPARISON_CARD_IDS = new Set([
  "compare-weil-da",
  "compare-obwohl-trotzdem",
  "compare-anstatt-ohne-zu",
]);

const COMPARISON_COVERED_WORDS = new Set([
  "weil", "da", "obwohl", "trotzdem", "anstatt", "ohne",
]);

const COMPARISON_SUBTITLES = {
  "compare-weil-da": "weil • da",
  "compare-obwohl-trotzdem": "obwohl • trotzdem",
  "compare-anstatt-ohne-zu": "anstatt • ohne ... zu",
};

// Goethe B1 adjectives (lowercase, no article)
const GOETHE_B1_ADJECTIVES = new Set(
  `alltäglich angenehm anstrengend aufregend ausdrücklich ausführlich ausreichend
  auswärtig barfuß bereit bestimmt bekannt bequem berühmt bunt deutlich direkt
  dringend dünn ehrlich eindeutig einfach einheitlich einig einzeln eisig elegant
  empfindlich eng entsprechend erforderlich erfreulich erheblich ernst erstaunlich
  exakt faul fest feucht fremd frisch froh fröhlich früh fähig förmlich gebrochen
  gefährlich geheim genau gesamt gesund gewaltig gewiss glatt global golden gründlich
  gültig hart heftig heiß hell herzlich hoch hungrig ideal individuell innerlich
  intensiv international jährlich klar komfortabel konkret korrekt kräftig kühl
  lang langsam lebhaft leer leicht locker müde nah natürlich nass neblig neugierig
  niedrig offen offiziell optimal persönlich positiv praktisch privat rar realistisch
  regelmäßig reichlich richtig robust ruhig rund sauber scharf schlank schlimm
  schnell schwach schwer schön selbständig sensibel sicher sinnvoll sorgfältig
  sportlich stark steil streng süß täglich tief trocken typisch umfangreich unbekannt
  unendlich ungewöhnlich unglücklich unheimlich unten untypisch unzufrieden verantwortlich
  vollständig warm weich weit wertvoll wichtig wild wirtschaftlich wissenschaftlich
  witzig wunderbar wütend ziemlich zufrieden zukünftig zuständig zweifellos öffentlich`
    .split(/\s+/)
    .map((s) => s.toLowerCase())
);

const BARE_REFLEXIVE_TO_REMOVE = new Set(["bemühen"]);

function loadB1() {
  const win = {};
  vm.runInContext(fs.readFileSync(path.join(root, "data/b1.js"), "utf8"), vm.createContext({ window: win }));
  return win.B1_WORDS;
}

function formatEntry(e) {
  const parts = [`de: "${e.de}"`];
  if (e.de_article) parts.push(`art: ${e.de_article}`);
  if (e.de_plural) parts.push(`pl: ${e.de_plural}`);
  if (e.lv) parts.push(`lv: "${e.lv}"`);
  return `{ ${parts.join(", ")} }`;
}

function splitMeanings(s) {
  if (!s) return [];
  return String(s)
    .split(/\s*•\s*|\s*;\s*/)
    .map((x) => x.trim())
    .filter(Boolean);
}

function mergeMeanings(...parts) {
  const seen = new Set();
  const out = [];
  for (const p of parts) {
    for (const m of splitMeanings(p)) {
      const key = m.toLowerCase();
      if (!seen.has(key)) {
        seen.add(key);
        out.push(m.charAt(0).toUpperCase() + m.slice(1));
      }
    }
  }
  return out.join(` ${bullet} `);
}

function auditReflexive(words) {
  const fixes = [];
  const deSet = new Set(words.map((w) => w.de));

  for (const word of words) {
    if (word.study?.layout === "comparisonStudy" && COMPARISON_CARD_IDS.has(word.study?.id)) {
      continue;
    }

    const de = word.de;

    if (BARE_REFLEXIVE_TO_REMOVE.has(de)) {
      const hasReflex = words.some((w) => w.de === `sich ${de}`);
      if (hasReflex) {
        fixes.push({
          de,
          old: formatEntry(word),
          reason: "Dzēsts atsevišķs ieraksts — refleksīvais darbības vārds jau pastāv ar sich",
          changes: { removeEntry: true },
        });
      }
      continue;
    }

    if (REFLEXIVE_BARE_TO_SICH[de]) {
      const target = REFLEXIVE_BARE_TO_SICH[de];
      if (!deSet.has(target.de)) {
        fixes.push({
          de,
          old: formatEntry(word),
          reason: `Pievienots sich refleksīvajam darbības vārdam (${de} → ${target.de})`,
          changes: { de: target.de, lv: target.lv },
        });
      } else {
        fixes.push({
          de,
          old: formatEntry(word),
          reason: "Dzēsts dublēts ieraksts bez sich",
          changes: { removeEntry: true },
        });
      }
      continue;
    }

    if (REFLEXIVE_LV_FIXES[de] && word.lv !== REFLEXIVE_LV_FIXES[de]) {
      fixes.push({
        de,
        old: formatEntry(word),
        reason: `Izlabots LV tulkojums atgriezeniskajai formai (${word.lv} → ${REFLEXIVE_LV_FIXES[de]})`,
        changes: { lv: REFLEXIVE_LV_FIXES[de] },
      });
    }
  }

  for (const [de, lv] of Object.entries(MISSING_REFLEXIVE_ENTRIES)) {
    if (!deSet.has(de)) {
      fixes.push({
        de,
        old: "(nav)",
        reason: `Pievienots trūkstošs Goethe B1 refleksīvais darbības vārds`,
        changes: { addEntry: { de, lv, level: "B1" } },
      });
    }
  }

  return fixes;
}

function duplicateKey(word) {
  return `${word.de}|${word.de_article || ""}`;
}

function auditDuplicates(words) {
  const fixes = [];
  const byDe = new Map();

  for (const word of words) {
    if (word.study?.layout === "comparisonStudy") continue;
    const key = duplicateKey(word);
    if (!byDe.has(key)) {
      byDe.set(key, [word]);
    } else {
      byDe.get(key).push(word);
    }
  }

  for (const [key, entries] of byDe) {
    const de = key.split("|")[0];
    if (entries.length < 2) continue;
    const merged = { ...entries[0] };
    merged.lv = mergeMeanings(...entries.map((e) => e.lv));
    if (entries.some((e) => e.study) && !merged.study) {
      merged.study = entries.find((e) => e.study)?.study;
    }
    fixes.push({
      de,
      old: entries.map(formatEntry).join(" | "),
      reason: `Apvienoti ${entries.length} dublikāti vienā ierakstā ar • atdalītām nozīmēm`,
      changes: { mergeDuplicates: true, merged, removeCount: entries.length - 1 },
    });
  }

  return fixes;
}

function auditTitles(words) {
  const fixes = [];
  for (const word of words) {
    if (word.study?.layout === "comparisonStudy" && COMPARISON_CARD_IDS.has(word.study?.id)) {
      continue;
    }

    let lv = word.lv || "";
    let changed = false;
    const reasons = [];

    if (lv.includes(";")) {
      lv = splitMeanings(lv).join(` ${bullet} `);
      changed = true;
      reasons.push("semikoli aizstāti ar •");
    }

    if (/\d+\./.test(lv)) {
      lv = lv.replace(/\d+\.\s*/g, "").trim();
      changed = true;
      reasons.push("noņemta numerācija");
    }

  if (/\([^)]{12,}\)/.test(lv)) {
      lv = lv.replace(/\s*\([^)]+\)\s*/g, " ").trim();
      changed = true;
      reasons.push("noņemtas garas iekavas");
    }

    if (changed && lv !== word.lv) {
      fixes.push({
        de: word.de,
        old: formatEntry(word),
        reason: `Virsraksta standarts: ${reasons.join(", ")}`,
        changes: { lv },
      });
    }

    if (word.study?.translation) {
      let trans = word.study.translation;
      let transChanged = false;
      if (trans.includes(";")) {
        trans = splitMeanings(trans).join(` ${bullet} `);
        transChanged = true;
      }
      if (transChanged && trans !== word.study.translation) {
        fixes.push({
          de: word.de,
          old: `{ translation: "${word.study.translation}" }`,
          reason: "Study translation: semikoli aizstāti ar •",
          changes: { studyTranslation: trans },
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

    const deLower = word.de.toLowerCase();
    if (!GOETHE_B1_ADJECTIVES.has(deLower)) continue;

    if (word.de_article || word.de_plural) {
      fixes.push({
        de: word.de,
        old: formatEntry(word),
        reason: "Noņemts artikuls/daudzskaitlis — īpašības vārds pēc Goethe B1",
        changes: { de: deLower, removeArticle: true, removePlural: true },
      });
      continue;
    }

    if (word.de !== deLower) {
      fixes.push({
        de: word.de,
        old: formatEntry(word),
        reason: "Izlabota kapitalizācija — īpašības vārds ar mazo sākumburtu",
        changes: { de: deLower },
      });
    }
  }
  return fixes;
}

function auditSingularetantum(words) {
  const fixes = [];
  for (const word of words) {
    if (word.study?.layout === "comparisonStudy") continue;
    if (!word.de_article || !word.de_plural) continue;

    const goethe = GOETHE_NOUNS[word.de];
    if (!goethe?.singularOnly) continue;
    if (SAME_FORM_PLURAL_OK.has(word.de)) continue;

    const plWord = word.de_plural.replace(/^die\s+|^der\s+|^das\s+/, "");
    const isSameForm = plWord === word.de || plWord === word.de + "n";
    if (isSameForm) continue;

    fixes.push({
      de: word.de,
      old: formatEntry(word),
      reason: "Noņemta mākslīga daudzskaitļa forma (Singularetantum pēc Goethe B1)",
      changes: { removePlural: true },
    });
  }
  return fixes;
}

function auditComparisonCards(words) {
  const fixes = [];
  const cards = words.filter(
    (w) => w.study?.layout === "comparisonStudy" && COMPARISON_CARD_IDS.has(w.study?.id)
  );

  for (const card of cards) {
    const id = card.study.id;
    const expected = COMPARISON_SUBTITLES[id];
    if (expected && card.study.subtitle !== expected) {
      fixes.push({
        de: card.de,
        old: `{ subtitle: "${card.study.subtitle}" }`,
        reason: `Izlabots comparisonStudy subtitle`,
        changes: { studyId: id, subtitle: expected },
      });
    }

    const table = card.study.comparisonTable || [];
    if (table.length < 3) {
      fixes.push({
        de: card.de,
        old: formatEntry(card),
        reason: `Salīdzinājuma tabulā jābūt vismaz 3 rindām (ir ${table.length})`,
        changes: { warnOnly: true },
      });
    }

    for (const row of table) {
      const required = ["lv", "de", "meaning", "describes", "example", "translation"];
      for (const col of required) {
        if (!row[col]) {
          fixes.push({
            de: card.de,
            old: formatEntry(card),
            reason: `Trūkst kolonnas "${col}" salīdzinājuma tabulā (${id})`,
            changes: { warnOnly: true },
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
        reason: `Dzēsts atsevišķs ieraksts — vārds iekļauts salīdzinājuma kartītē`,
        changes: { removeEntry: true },
      });
    }
  }

  return fixes;
}

function applyFixes(words, fixList) {
  const subtitleById = new Map();
  const byDe = new Map();
  const addEntries = [];
  const mergeByDe = new Map();

  for (const f of fixList) {
    if (f.changes?.warnOnly) continue;
    if (f.changes?.studyId && f.changes?.subtitle) {
      subtitleById.set(f.changes.studyId, f.changes.subtitle);
      continue;
    }
    if (f.changes?.addEntry) {
      addEntries.push(f.changes.addEntry);
      continue;
    }
    if (f.changes?.mergeDuplicates) {
      mergeByDe.set(duplicateKey(f.changes.merged), f.changes.merged);
      continue;
    }
    byDe.set(f.de, { ...(byDe.get(f.de) || {}), ...f.changes });
  }

  const mergedDone = new Set();
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

    if (mergeByDe.has(duplicateKey(word))) {
      const key = duplicateKey(word);
      if (!mergedDone.has(key)) {
        const merged = mergeByDe.get(key);
        const changes = byDe.get(word.de) || {};
        let entry = { ...merged };
        if (changes.lv) entry.lv = changes.lv;
        if (changes.studyTranslation && entry.study) {
          entry = { ...entry, study: { ...entry.study, translation: changes.studyTranslation } };
        }
        result.push(entry);
        mergedDone.add(key);
      }
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
    if (changes.removeArticle) delete updated.de_article;
    if (changes.removePlural) delete updated.de_plural;
    if (changes.studyTranslation && updated.study) {
      updated.study = { ...updated.study, translation: changes.studyTranslation };
    }
    result.push(updated);
  }

  for (const entry of addEntries) {
    if (!result.some((w) => w.de === entry.de)) {
      result.push(entry);
    }
  }

  return result;
}

function serializeWords(words) {
  const lines = ["const B1_WORDS = ["];
  for (const w of words) {
    lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  }
  lines.push("];", "", "window.B1_WORDS = B1_WORDS;");
  return lines.join("\n");
}

function syncFiles(words) {
  const out = serializeWords(words);
  for (const rel of ["data/b1.js", "www/data/b1.js"]) {
    fs.writeFileSync(path.join(root, rel), out, "utf8");
  }
}

// --- main ---
const words = loadB1();
let fixes = [
  ...auditReflexive(words),
  ...auditDuplicates(words),
  ...auditTitles(words),
  ...auditAdjectives(words),
  ...auditSingularetantum(words),
  ...auditComparisonCards(words),
];

const actionable = fixes.filter((f) => !f.changes?.warnOnly);
const warnings = fixes.filter((f) => f.changes?.warnOnly);

const report = [];
const merged = new Map();
for (const f of actionable) {
  const key = f.changes?.studyId || f.de;
  if (!merged.has(key)) {
    merged.set(key, { de: f.de, reasons: [], changes: {}, old: f.old });
  }
  const m = merged.get(key);
  m.reasons.push(f.reason);
  Object.assign(m.changes, f.changes);
  m.old = f.old;
}

for (const [, m] of merged) {
  report.push({ de: m.de, old: m.old, reason: m.reasons.join("; ") });
}

console.log("\n=== Goethe B1 audits ===\n");
console.log(`Nepieciešami labojumi: ${report.length}`);
console.log(`Brīdinājumi: ${warnings.length}\n`);

report.forEach((r) => {
  console.log(`- ${r.de}`);
  console.log(`  ${r.reason}`);
});

if (warnings.length) {
  console.log("\n=== BRĪDINĀJUMI ===");
  warnings.forEach((w) => console.log(`- ${w.de}: ${w.reason}`));
}

const comparisonCards = words.filter(
  (w) => w.study?.layout === "comparisonStudy" && COMPARISON_CARD_IDS.has(w.study?.id)
);
console.log(`\nSalīdzinājuma kartītes: ${comparisonCards.length}/3`);
console.log(`Refleksīvie ar sich: ${words.filter((w) => w.de.startsWith("sich ")).length}`);

if (FIX && actionable.length > 0) {
  const allChanges = [...merged.values()].map((m) => ({ de: m.de, changes: m.changes, reason: m.reasons.join("; "), old: m.old }));
  const fixed = applyFixes(words, allChanges);
  syncFiles(fixed);
  fs.writeFileSync(
    path.join(__dirname, "goethe-b1-audit-report.json"),
    JSON.stringify(report, null, 2),
    "utf8"
  );
  console.log(`\n✅ Applied ${report.length} fixes to data/b1.js and www/data/b1.js`);
} else if (!FIX) {
  console.log("\nDry run. Use --fix to apply changes.");
}

const exitIssues = report.length + warnings.length;
if (exitIssues === 0) {
  console.log("\n✅ 0 nepieciešami labojumi");
}
process.exit(exitIssues > 0 && !FIX ? 1 : 0);
