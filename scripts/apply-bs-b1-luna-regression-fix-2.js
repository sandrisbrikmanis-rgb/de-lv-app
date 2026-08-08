#!/usr/bin/env node
/**
 * Apply BS-DE B1 Luna regression fix #2 (CRITICAL 1 + HIGH 37 + sectionAccents).
 * Local deterministic fixes only — no API.
 *
 * Run: node scripts/apply-bs-b1-luna-regression-fix-2.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const DRY_RUN = process.argv.includes("--dry-run");
const BS_FILE = path.join(ROOT, "data", "bs", "b1.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b1.js");
const REPORT_PATH = path.join(ROOT, "reports", "temp", "bs-b1-luna-regression-fix-2-applied.json");

const FALSE_POSITIVES = [
  {
    cardId: "b1-berichten",
    field: "study.examples[2].lv",
    reason: "DE Die Kollegin is singular; BS Kolegica matches — Luna audit incorrect",
  },
  {
    cardId: "b1-schmieren",
    field: "study.comparison[1].word",
    reason: "comparison.word already German (streichen) per DE READ-ONLY",
  },
  {
    cardId: "b1-nachdem",
    field: "study.tip",
    reason: "verified false positive from fix #1 — unchanged",
  },
];

/**
 * Verified fixes after DE → LV → BS context check.
 * Each entry: { cardId, field, correctedText }
 */
const FIXES = [
  // CRITICAL
  { cardId: "b1-See-2572", field: "lv", correctedText: "More" },

  // HIGH — main translations
  { cardId: "b1-einsehen-706", field: "lv", correctedText: "Priznati" },
  { cardId: "b1-Kabelkanal-1440", field: "lv", correctedText: "Kanal za kablove" },
  { cardId: "b1-Riss-2324", field: "lv", correctedText: "Pukotina" },

  // HIGH — study fields
  { cardId: "b1-aufführen", field: "study.comparison[2].meaning", correctedText: "Nazvati / navesti" },
  { cardId: "b1-behandeln", field: "study.examples[0].lv", correctedText: "Doktor liječi pacijenta." },
  { cardId: "b1-bemerken", field: "study.examples[2].lv", correctedText: "Kratko je primijetio da je već kasno." },
  { cardId: "b1-beraten", field: "study.examples[0].lv", correctedText: "Ljekar savjetuje pacijenta." },
  { cardId: "b1-blase", field: "study.comparison[1].meaning", correctedText: "Rana" },
  { cardId: "b1-block", field: "study.comparison[0].meaning", correctedText: "Blok / bilježnica / sveska" },
  { cardId: "b1-block", field: "study.comparison[2].meaning", correctedText: "Komad drveta" },
  { cardId: "b1-daher", field: "study.translation", correctedText: "Zato" },
  {
    cardId: "b1-daher",
    field: "study.explanation",
    correctedText:
      "Glavna ideja: daher znači zato ili stoga. Rjeđe može značiti otuda, ali u B1 tekstovima najčešće povezuje uzrok i posljedicu.",
  },
  { cardId: "b1-daher", field: "study.comparison[0].meaning", correctedText: "Zato / odatle" },
  { cardId: "b1-daher", field: "study.comparison[1].meaning", correctedText: "Zato" },
  { cardId: "b1-einholen", field: "study.comparison[2].meaning", correctedText: "Prestići" },
  {
    cardId: "b1-einsetzen",
    field: "study.tip.leftBlocks[0].text",
    correctedText: "Pogledajte objekt: Technik einsetzen, Spieler einsetzen, Regen setzt ein.",
  },
  { cardId: "b1-enthalten", field: "study.examples[2].lv", correctedText: "Izvještaj sadrži važne informacije." },
  { cardId: "b1-feststellen", field: "study.comparison[2].meaning", correctedText: "Primijetiti" },
  {
    cardId: "b1-geschlecht",
    field: "study.explanation",
    correctedText:
      "Glavna ideja: das Geschlecht znači spol kod ljudi ili životinja. U gramatici jezika znači gramatički rod, kao što je muški, ženski ili srednji rod.",
  },
  { cardId: "b1-geschlecht", field: "study.comparison[2].meaning", correctedText: "Generacija" },
  { cardId: "b1-kippen", field: "study.examples[0].lv", correctedText: "Čaša se prevrne." },
  {
    cardId: "b1-klappen",
    field: "study.explanation",
    correctedText:
      "Glavna ideja: klappen je kolokvijalni izraz da nešto uspije ili ide kako treba. Često se koristi za plan, sastanak ili praktično rješenje • Doslovno, može značiti pasti ili zatvoriti.",
  },
  { cardId: "b1-kürze", field: "study.comparison[1].meaning", correctedText: "Uskoro" },
  {
    cardId: "b1-nachdem",
    field: "study.explanation",
    correctedText:
      "Glavna ideja: nachdem uvodi podređenu rečenicu i znači nakon što. U njemačkom se glagol u ovoj podređenoj rečenici nalazi na kraju.",
  },
  { cardId: "b1-nachdem", field: "study.comparison[0].meaning", correctedText: "Nakon što" },
  { cardId: "b1-nachgeben", field: "study.comparison[2].meaning", correctedText: "Priznati" },
  { cardId: "b1-pflegen", field: "study.comparison[1].meaning", correctedText: "Brinuti se o" },
  { cardId: "b1-pflegen", field: "study.comparison[2].meaning", correctedText: "Čistiti" },
  { cardId: "b1-pochen", field: "study.comparison[1].meaning", correctedText: "Kucati" },
  { cardId: "b1-rausch", field: "study.comparison[2].meaning", correctedText: "Ovisnost" },
  { cardId: "b1-schnitt", field: "study.comparison[2].meaning", correctedText: "Rana" },
  { cardId: "b1-sprung", field: "study.comparison[0].meaning", correctedText: "Skok • Pukotina" },
  { cardId: "b1-strom", field: "study.comparison[2].meaning", correctedText: "Energija" },
  { cardId: "b1-übersehen", field: "study.comparison[2].meaning", correctedText: "Primijetiti" },
  { cardId: "b1-verband", field: "study.comparison[2].meaning", correctedText: "Veza, veza" },
  { cardId: "b1-verbindung", field: "study.comparison[2].meaning", correctedText: "Zavoj • udruženje" },
  { cardId: "b1-verbrennen", field: "study.comparison[2].meaning", correctedText: "Zapaliti" },
  { cardId: "b1-zünden", field: "study.comparison[2].meaning", correctedText: "Gorjeti" },
];

/** Stale sectionAccents — word accents must match German comparison.word fields */
const SECTION_ACCENT_FIXES = [
  { cardId: "b1-sich-bedienen", path: "comparison[2].word", green: ["benutzen"] },
  { cardId: "b1-behandeln", path: "comparison[0].word", green: ["behandeln"] },
  { cardId: "b1-behandeln", path: "comparison[2].word", green: ["besprechen"] },
  { cardId: "b1-beraten", path: "comparison[2].word", green: ["besprechen"] },
  { cardId: "b1-einsetzen", path: "comparison[1].word", green: ["benutzen"] },
  { cardId: "b1-streichen", path: "comparison[0].word", green: "streichen" },
];

const stats = {
  criticalTotal: 1,
  highTotal: 37,
  criticalApplied: 0,
  highApplied: 0,
  highFalsePositive: FALSE_POSITIVES.length,
  sectionAccentsFixed: 0,
  studyCardsChanged: new Set(),
  changes: [],
  falsePositives: FALSE_POSITIVES,
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

function findEntry(words, cardId) {
  return words.find((e, i) => (e.study?.id || `b1-${e.de}-${i}`) === cardId) || null;
}

function applyFix(words, fix, severity) {
  const entry = findEntry(words, fix.cardId);
  if (!entry) {
    stats.changes.push({ ...fix, status: "skipped", reason: "card_not_found" });
    return;
  }
  const resolved = resolveFieldPath(entry, fix.field);
  if (!resolved) {
    stats.changes.push({ ...fix, status: "skipped", reason: "unresolved_field" });
    return;
  }
  const current = getAt(resolved.root, resolved.path);
  let next = fix.correctedText;
  if (fix.field === "lv" || fix.field === "study.translation") {
    next = capitalizeMain(next);
  }
  if (current === next) {
    stats.changes.push({ ...fix, status: "skipped", reason: "already_correct", before: current });
    return;
  }
  setAt(resolved.root, resolved.path, next);
  if (severity === "CRITICAL") stats.criticalApplied++;
  else stats.highApplied++;
  if (entry.study?.id) stats.studyCardsChanged.add(entry.study.id);
  stats.changes.push({ cardId: fix.cardId, field: fix.field, severity, before: current, after: next, status: "applied" });
}

function applySectionAccentFix(words, fix) {
  const entry = findEntry(words, fix.cardId);
  if (!entry?.study?.sectionAccents) return;
  const parts = fix.path.replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
  let cur = entry.study.sectionAccents;
  for (let i = 0; i < parts.length - 1; i++) cur = cur[parts[i]];
  const last = parts[parts.length - 1];
  if (!cur || !cur[last]) return;
  const before = JSON.stringify(cur[last]);
  cur[last] = fix.green;
  stats.sectionAccentsFixed++;
  if (entry.study.id) stats.studyCardsChanged.add(entry.study.id);
  stats.changes.push({
    cardId: fix.cardId,
    field: `sectionAccents.${fix.path}`,
    severity: "SECTION_ACCENT",
    before,
    after: JSON.stringify(fix.green),
    status: "applied",
  });
}

function main() {
  const words = loadWords(BS_FILE);

  applyFix(words, { cardId: "b1-See-2572", field: "lv", correctedText: "More" }, "CRITICAL");

  for (const fix of FIXES.filter((f) => f.cardId !== "b1-See-2572")) {
    applyFix(words, fix, "HIGH");
  }

  for (const fix of SECTION_ACCENT_FIXES) {
    applySectionAccentFix(words, fix);
  }

  const report = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    stats: {
      ...stats,
      studyCardsChanged: [...stats.studyCardsChanged],
    },
  };

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  console.log(JSON.stringify({
    critical: `${stats.criticalApplied}/${stats.criticalTotal}`,
    high: `${stats.highApplied}/${stats.highTotal - stats.highFalsePositive} (false positive: ${stats.highFalsePositive})`,
    sectionAccents: stats.sectionAccentsFixed,
    studyCards: stats.studyCardsChanged.size,
  }, null, 2));

  if (!DRY_RUN) {
    writeB1(BS_FILE, words);
    writeB1(WWW_FILE, words);
    console.log(`Wrote ${BS_FILE} and ${WWW_FILE}`);
  }
}

main();
