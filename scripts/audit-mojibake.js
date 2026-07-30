#!/usr/bin/env node
/**
 * Scans a native language's data files, plus the shared UI/CSS files,
 * for mojibake artifacts (double-encoded UTF-8, e.g. "Ôîä" instead of a
 * chevron, or "─½" instead of "ī"). This is the "2.3 Mojibake/kodējuma
 * pārbaude" check from LANGUAGE_AUDIT_STANDARD.md, formalized as a
 * reusable script (§5).
 *
 * Run: node scripts/audit-mojibake.js --lang=lt
 * Run against shared files only: node scripts/audit-mojibake.js --lang=none
 */
const fs = require("fs");
const path = require("path");
const { ROOT, parseLangArg, dataDir, fileExists, DATA_FILE_NAMES } = require("./lib/audit-common");

const lang = parseLangArg("lt");
const DIR = dataDir(lang);

// Common double-encoding artifacts seen in this codebase's history:
// - "Ô" + continuation byte: mangled arrows/chevrons/checkmarks (UTF-8 emoji/symbol re-encoded as Windows-1252 then re-saved as UTF-8)
// - "─"/"┼" + continuation byte: mangled Latin Extended-A diacritics (ā/ē/ī/ū/š/ž etc. put through the same double-encoding)
// - "â€": mangled em dash / smart quotes (common Word/Windows-1252 artifact)
// - "Ã" + vowel: mangled ä/ö/ü etc.
const MOJIBAKE_PATTERNS = [
  { name: "mangled-symbol (Ô..)", regex: /Ô[^\x00-\x7F]{1,3}/gu },
  { name: "mangled-diacritic (─/┼..)", regex: /[─┼][^\x00-\x7F]/gu },
  { name: "mangled-dash-or-quote (â€..)", regex: /â€[^\x00-\x7F]/gu },
  { name: "mangled-umlaut (Ã.)", regex: /Ã[^\x00-\x7F]/gu },
];

// Lines using "── ... ──" box-drawing dashes are intentional section
// dividers in comments and must not be flagged.
function isIntentionalBoxDrawing(line) {
  return /──/.test(line);
}

function scanFile(relPath) {
  if (!fileExists(relPath)) return null;
  const full = path.join(ROOT, relPath);
  const text = fs.readFileSync(full, "utf8");
  const lines = text.split("\n");
  const hits = [];
  lines.forEach((line, idx) => {
    if (isIntentionalBoxDrawing(line)) return;
    for (const { name, regex } of MOJIBAKE_PATTERNS) {
      const matches = line.match(regex);
      if (matches) {
        hits.push({ line: idx + 1, pattern: name, sample: line.trim().slice(0, 120) });
      }
    }
  });
  return hits;
}

const filesToScan = [];

if (lang !== "none") {
  for (const name of DATA_FILE_NAMES) {
    filesToScan.push(`${DIR}/${name}`);
  }
  filesToScan.push(`${DIR}/courseTrainingCards.js`);
}

// Shared, language-neutral files that every language's UI passes through.
const SHARED_FILES = ["ui.js", "style.css", "index.html", "groups.js", "languages/data-loader.js", "languages/registry.js"];
for (const f of SHARED_FILES) filesToScan.push(f);

const report = { lang, filesScanned: 0, filesWithHits: 0, totalHits: 0, results: [] };

for (const relPath of filesToScan) {
  const hits = scanFile(relPath);
  if (hits === null) continue; // file doesn't exist, skip silently
  report.filesScanned++;
  if (hits.length) {
    report.filesWithHits++;
    report.totalHits += hits.length;
    report.results.push({ file: relPath, hitCount: hits.length, samples: hits.slice(0, 10) });
  }
}

report.pass = report.totalHits === 0;
console.log(JSON.stringify(report, null, 2));
process.exit(report.pass ? 0 : 1);
