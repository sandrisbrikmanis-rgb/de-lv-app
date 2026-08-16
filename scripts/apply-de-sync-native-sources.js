#!/usr/bin/env node
/**
 * Apply approved native translations from DE-sync source markdown.
 *
 * Usage:
 *   node scripts/apply-de-sync-native-sources.js --lang=en --level=a1
 *   node scripts/apply-de-sync-native-sources.js --lang=cs --level=b2 --file=path/to/b2-approved.md
 */
const fs = require("fs");
const path = require("path");
const { ROOT, dataPath, readFile } = require("./lib/audit-common");
const { loadArray } = require("./lib/de-sync-native-scan");
const { writeArrayFile, VAR_NAMES, findDash } = require("./lib/de-sync-core");

const DASH_RE = /\s*[–—\-]\s*/;

function parseArgs() {
  const argv = process.argv.slice(2);
  let lang = null;
  let level = null;
  let file = null;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i].startsWith("--lang=")) lang = argv[i].slice("--lang=".length).toLowerCase();
    else if (argv[i] === "--lang") lang = String(argv[i + 1] || "").toLowerCase();
    else if (argv[i].startsWith("--level=")) level = argv[i].slice("--level=".length).toLowerCase();
    else if (argv[i] === "--level") level = String(argv[i + 1] || "").toLowerCase();
    else if (argv[i].startsWith("--file=")) file = argv[i].slice("--file=".length);
    else if (argv[i] === "--file") file = argv[i + 1];
  }
  if (!lang || !["en", "cs"].includes(lang)) {
    console.error("Usage: node scripts/apply-de-sync-native-sources.js --lang=en|cs --level=a1|...|c2 [--file=approved.md]");
    process.exit(1);
  }
  if (!level || !VAR_NAMES[level]) {
    console.error("Missing or invalid --level (a1, a2, b1, b2, c1, c2)");
    process.exit(1);
  }
  if (!file) {
    file = path.join(ROOT, "reports", `${lang}-de-sync-native-sources`, `${level}-approved.md`);
  }
  return { lang, level, file: path.resolve(file) };
}

function parseApprovedMarkdown(content) {
  const byId = {};
  const lines = content.split("\n");
  let headers = [];

  for (const line of lines) {
    if (!line.startsWith("|")) {
      headers = [];
      continue;
    }
    if (line.includes("---")) continue;

    const cells = line
      .split("|")
      .slice(1, -1)
      .map((c) => c.trim().replace(/\\\|/g, "|"));
    if (!cells.length) continue;

    if (headers.length === 0) {
      headers = cells.map((h) => h.toLowerCase());
      continue;
    }

    const approvedIdx = headers.findIndex((h) => h.includes("approved"));
    if (approvedIdx < 0) continue;
    const approved = cells[approvedIdx];
    if (!approved) continue;

    const idMatch = cells[0].match(/`([^`]+)`/);
    if (idMatch) byId[idMatch[1]] = approved;
  }

  return byId;
}

function parseUnitId(id) {
  const m = id.match(/^([a-z]\d+)\[(\d+)\]\/([^/]+)\/(.*)$/);
  if (!m) return null;
  return { level: m[1], index: Number(m[2]), de: m[3], fieldPath: m[4] };
}

function setNativeSuffix(existing, newNative) {
  const d = findDash(existing);
  if (!d) return newNative;
  return `${d.de}${d.sep}${newNative}`;
}

function applyField(card, fieldPath, value) {
  if (fieldPath === "lv") {
    card.lv = value;
    return true;
  }

  if (!card.study) return false;

  if (fieldPath === "study.translation") {
    card.study.translation = value;
    return true;
  }

  if (fieldPath === "study.explanation") {
    if (typeof card.study.explanation === "string") card.study.explanation = value;
    else if (card.study.explanationLines) {
      if (Array.isArray(card.study.explanationLines)) {
        card.study.explanationLines = [value];
      } else if (typeof card.study.explanationLines === "object") {
        card.study.explanationLines.text = value;
      }
    } else {
      card.study.explanation = value;
    }
    return true;
  }

  if (fieldPath === "study.tip") {
    if (typeof card.study.tip === "string") card.study.tip = value;
    else if (card.study.tip && typeof card.study.tip === "object") {
      if (card.study.tip.text) card.study.tip.text = value;
      else card.study.tip.left = value;
    } else card.study.tip = value;
    return true;
  }

  if (fieldPath === "study.important") {
    if (typeof card.study.important === "string") card.study.important = value;
    else if (card.study.important && typeof card.study.important === "object") {
      if (card.study.important.text) card.study.important.text = value;
      else card.study.important.left = value;
    } else card.study.important = value;
    return true;
  }

  let m = fieldPath.match(/^study\.examples\[(\d+)\]\.lv$/);
  if (m) {
    const i = Number(m[1]);
    if (card.study.examples?.[i]) {
      card.study.examples[i].lv = value;
      return true;
    }
    return false;
  }

  m = fieldPath.match(/^study\.comparison\[(\d+)\]\.meaning$/);
  if (m) {
    const i = Number(m[1]);
    if (card.study.comparison?.[i]) {
      card.study.comparison[i].meaning = value;
      return true;
    }
    return false;
  }

  m = fieldPath.match(/^study\.comparison\[(\d+)\]\.exampleNative$/);
  if (m) {
    const i = Number(m[1]);
    const row = card.study.comparison?.[i];
    if (row?.example) {
      row.example = setNativeSuffix(row.example, value);
      return true;
    }
    return false;
  }

  return false;
}

function main() {
  const { lang, level, file } = parseArgs();
  if (!fs.existsSync(file)) {
    console.error(`Approved file not found: ${file}`);
    process.exit(1);
  }

  const byId = parseApprovedMarkdown(fs.readFileSync(file, "utf8"));
  const cards = loadArray(dataPath(lang, `${level}.js`));
  let applied = 0;
  let skipped = 0;

  for (const [id, value] of Object.entries(byId)) {
    const parsed = parseUnitId(id);
    if (!parsed || parsed.level !== level) {
      skipped += 1;
      continue;
    }
    const card = cards[parsed.index];
    if (!card || card.de !== parsed.de) {
      console.warn(`Skip ${id}: card mismatch`);
      skipped += 1;
      continue;
    }
    if (applyField(card, parsed.fieldPath, value)) applied += 1;
    else {
      console.warn(`Skip ${id}: field not applied`);
      skipped += 1;
    }
  }

  const varName = VAR_NAMES[level];
  const dataFile = path.join(ROOT, dataPath(lang, `${level}.js`));
  const wwwFile = path.join(ROOT, dataPath(lang, `${level}.js`, { www: true }));
  writeArrayFile(dataFile, varName, cards);
  writeArrayFile(wwwFile, varName, cards);

  console.log(`Applied ${applied} units from ${file}`);
  if (skipped) console.log(`Skipped ${skipped}`);
  console.log(`Updated ${dataFile} and www mirror`);
}

main();
