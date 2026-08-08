#!/usr/bin/env node
/**
 * Fix BS-DE B1 REAL cache collisions (33) from re-audit.
 * Applies context-specific Bosnian translations per card/field.
 * Local fixes only — no API.
 *
 * Run: node scripts/fix-bs-b1-cache-collisions.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const DRY_RUN = process.argv.includes("--dry-run");
const CACHE_PATH = path.join(ROOT, "reports", "temp", "bs-b1-reaudit-cache-context.json");
const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b1.js");
const REPORT_PATH = path.join(ROOT, "reports", "temp", "bs-b1-cache-collisions-fix-applied.json");

/**
 * Context-specific fixes for REAL cache collisions.
 * Each entry targets one card/field where shared BS was wrong for its DE context.
 */
const FIXES = [
  // 1 nosaukt
  { cardId: "b1-aufführen", field: "study.comparison[2].meaning", correctedText: "Izvesti / navesti" },

  // 2 atkarība
  { cardId: "b1-rausch", field: "study.comparison[2].meaning", correctedText: "Opijenost" },
  { cardId: "b1-Sucht-2822", field: "lv", correctedText: "Ovisnost" },

  // 3–6, 17, 22–24, 32: comparison.word fields must stay German (DE READ-ONLY).
  // Shared German labels across cards are structurally correct; no BS change.

  // 7 pamanīt
  { cardId: "b1-feststellen", field: "study.comparison[2].meaning", correctedText: "Utvrditi" },
  { cardId: "b1-übersehen", field: "study.comparison[2].meaning", correctedText: "Previdjeti" },

  // 8 brūce
  { cardId: "b1-blase", field: "study.comparison[1].meaning", correctedText: "Mjehur" },
  { cardId: "b1-schnitt", field: "study.comparison[2].meaning", correctedText: "Rez" },

  // 9 ziņa
  { cardId: "b1-kunde", field: "study.comparison[2].meaning", correctedText: "Vijest" },

  // 10 buljons
  { cardId: "b1-Fleischbrühe-907", field: "lv", correctedText: "Mesni bujon" },

  // 11 apdzīt
  { cardId: "b1-einholen", field: "study.comparison[2].meaning", correctedText: "Dohvatiti" },

  // 12 iekļaut
  { cardId: "b1-einordnen-696", field: "lv", correctedText: "Razvrstati" },

  // 13 atzīt
  { cardId: "b1-einsehen-706", field: "lv", correctedText: "Pristati" },
  { cardId: "b1-nachgeben", field: "study.comparison[2].meaning", correctedText: "Popustiti" },

  // 14 virsma
  { cardId: "b1-Oberfläche-2006", field: "lv", correctedText: "Površina" },

  // 15 paaudze
  { cardId: "b1-geschlecht", field: "study.comparison[2].meaning", correctedText: "Spol" },
  { cardId: "b1-jahrgang", field: "study.comparison[2].meaning", correctedText: "Godište" },

  // 16 plaisa — Sprung = crack/leap nuance
  { cardId: "b1-sprung", field: "study.comparison[1].meaning", correctedText: "Pukotina" },

  // 19 korķis
  { cardId: "b1-Pfropfen-2106", field: "lv", correctedText: "Čep" },

  // 20 drīzumā
  { cardId: "b1-kürze", field: "study.comparison[1].meaning", correctedText: "Kratkoća" },

  // 21 tīrīt
  { cardId: "b1-pflegen", field: "study.comparison[2].meaning", correctedText: "Njegovati" },

  // 25 stingrs
  { cardId: "b1-stramm-2783", field: "lv", correctedText: "Čvrst" },

  // 26 enerģija
  { cardId: "b1-strom", field: "study.comparison[2].meaning", correctedText: "Struja" },
  { cardId: "b1-Energie-3322", field: "lv", correctedText: "Energija" },

  // 28 pārsējs • apvienība
  { cardId: "b1-verbindung", field: "study.comparison[2].meaning", correctedText: "Veza" },

  // 29 savienojums, saikne
  { cardId: "b1-verband", field: "study.comparison[2].meaning", correctedText: "Zavoj • udruženje" },
  { cardId: "b1-zusammenhang", field: "study.comparison[1].meaning", correctedText: "Povezanost" },

  // 30 degt
  { cardId: "b1-zünden", field: "study.comparison[2].meaning", correctedText: "Paliti" },

  // 31 aizdedzināt
  { cardId: "b1-verbrennen", field: "study.comparison[2].meaning", correctedText: "Spaliti" },

  // 33 generic explanation text — differentiate per construction
  {
    cardId: "b1-anstatt-zu",
    field: "study.explanation[3]",
    correctedText: "U primjerima tražite tipičnu svakodnevnu upotrebu konstrukcije anstatt ... zu.",
  },
  {
    cardId: "b1-ohne-zu",
    field: "study.explanation[3]",
    correctedText: "U primjerima tražite tipičnu svakodnevnu upotrebu konstrukcije ohne ... zu.",
  },
];

const stats = {
  totalFixes: FIXES.length,
  applied: 0,
  skipped: 0,
  studyCardsChanged: new Set(),
  changes: [],
  skippedItems: [],
};

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function writeB1(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const B1_WORDS = ${json};\n\nwindow.B1_WORDS = B1_WORDS;\n`, "utf8");
}

function parsePath(fieldPath) {
  return fieldPath.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
}

function getAt(root, fieldPath) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (const part of parts) {
    if (cur === undefined || cur === null) return undefined;
    cur = cur[part];
  }
  return cur;
}

function setAt(root, fieldPath, value) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur[parts[i]] === undefined || cur[parts[i]] === null) return false;
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
  return true;
}

function resolveFieldPath(entry, field) {
  if (field === "lv") return { root: entry, path: "lv" };
  if (!field.startsWith("study.")) return null;
  if (!entry.study) return null;
  return { root: entry.study, path: field.slice("study.".length) };
}

function findEntry(words, cardId) {
  return words.find((e, i) => (e.study?.id || `b1-${e.de}-${i}`) === cardId) || null;
}

function capitalizeMain(value) {
  const s = String(value || "").trim();
  if (!s) return s;
  if (s.includes("•")) {
    return s.split("•").map((p) => {
      const t = p.trim();
      return t ? t.charAt(0).toUpperCase() + t.slice(1) : t;
    }).join(" • ");
  }
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function applyFix(words, fix) {
  const entry = findEntry(words, fix.cardId);
  if (!entry) {
    stats.skipped++;
    stats.skippedItems.push({ ...fix, reason: "card_not_found" });
    return;
  }

  const resolved = resolveFieldPath(entry, fix.field);
  if (!resolved) {
    stats.skipped++;
    stats.skippedItems.push({ ...fix, reason: "unresolved_field" });
    return;
  }

  const current = getAt(resolved.root, resolved.path);
  if (typeof current !== "string") {
    stats.skipped++;
    stats.skippedItems.push({ ...fix, reason: "field_not_string", actualType: typeof current });
    return;
  }

  let next = fix.correctedText;
  if (fix.field === "lv" || fix.field === "study.translation") {
    next = capitalizeMain(next);
  }

  if (current === next) {
    stats.skipped++;
    stats.skippedItems.push({ ...fix, reason: "already_correct", before: current });
    return;
  }

  if (!setAt(resolved.root, resolved.path, next)) {
    stats.skipped++;
    stats.skippedItems.push({ ...fix, reason: "set_failed" });
    return;
  }

  stats.applied++;
  if (entry.study?.id) stats.studyCardsChanged.add(entry.study.id);
  stats.changes.push({
    cardId: fix.cardId,
    field: fix.field,
    before: current,
    after: next,
  });
}

function main() {
  const cache = JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"));
  const expectedCollisions = cache.realCollisions?.length || 33;
  const words = loadWords(BS_FILE);

  for (const fix of FIXES) {
    applyFix(words, fix);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    expectedRealCollisions: expectedCollisions,
    stats: {
      ...stats,
      studyCardsChanged: [...stats.studyCardsChanged],
    },
  };

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  console.log(JSON.stringify({
    applied: `${stats.applied}/${stats.totalFixes}`,
    skipped: stats.skipped,
    studyCards: stats.studyCardsChanged.size,
  }, null, 2));

  if (!DRY_RUN) {
    writeB1(BS_FILE, words);
    writeB1(WWW_FILE, words);
    console.log(`Wrote ${BS_FILE} and ${WWW_FILE}`);
  }
}

main();
