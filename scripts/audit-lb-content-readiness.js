#!/usr/bin/env node
/**
 * Read-only LB-DE content readiness audit.
 * Reports translation coverage markers, CAA - placeholders, foreign remnants,
 * and root ↔ www sync status. Does NOT modify any data files.
 *
 * Run: node scripts/audit-lb-content-readiness.js
 *      node scripts/audit-lb-content-readiness.js --json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const {
  ROOT,
  dataDir,
  loadArrayDataset,
  loadWindowGlobals
} = require("./lib/audit-common");

const LANG = "lb";
const DIR = dataDir(LANG);
const JSON_OUT = process.argv.includes("--json");

const DATA_FILES = [
  "a1.js", "a2.js", "b1.js", "b2.js", "c1.js", "c2.js",
  "sentences.js", "verbs.js", "courseLessons.js",
  "courseTrainingCards.js", "dialogueIdMap.js", "nounArticles.js"
];

const CAA_PLACEHOLDER_FILES = [
  "a1.js", "a2.js", "b1.js", "b2.js", "c1.js", "c2.js", "verbs.js"
];

const ALLOWED_UI_PLACEHOLDERS = new Set([
  "code", "label", "current", "total", "tap", "lesson",
  "word", "words", "count", "title", "char"
]);

const MARKERS = {
  lvDiacritics: {
    label: "LV diacritics",
    regex: /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/g
  },
  lvTerms: {
    label: "common LV words",
    regex: /\b(galvenā|izvēlne|teikumi|darbības|atgriezties|pārbaudīt|nedēļas|mēneša|nevajadzīgie|zināmi|dzēst|atcelt|turpināt|aizvērt|vārds|vārdi|lekcija|dialogi|gramatika|latvie|galds|durvis|nazis|meitene|runāt|mazs|maza|bērns|istaba|viņš|mēs)\b/gi
  },
  trTerms: {
    label: "Turkish fragments",
    regex: /DAHA ÇOK İYİ|ÇOK İYİ/g
  },
  nlTerms: {
    label: "Dutch fragments",
    regex: /\b(ik speel niet|ik ben niet bezig|houdt niet van|hoe lobt)\b/gi
  },
  enTerms: {
    label: "English fragments",
    regex: /\b(For a Person Or Place|Present|CAA -|DAFÜR - DAFÜR)\b/g
  },
  luxLikely: {
    label: "likely Luxembourgish",
    regex: /\b(ech|hien|si|dir|datt|gëtt|schwätzen|schwätze|léieren|wéi|haut|muer|gutt|schéin|déi|dat|den|eng|eent|zwee|dräi|vill|sinn|hunn|maachen|goen|kommen|kucken|héieren|soen|wëssen|wëllen|mussen|kënnen|sollen|däerfen|mee|awer|och|nach|schonn|gär|wéinst|tëscht|ënnert|iwwer|hannert|virun|no|bei|mat|vu|op|an|aus|fir|well|wann|ob|wéini|wou|wien|wat|kleng|brout|fësch|kand|zëmmer|frënd|fan|richteg|falsch|schaffen|spill)\b/gi
  }
};

function sha256(relPath) {
  const full = path.join(ROOT, relPath);
  if (!fs.existsSync(full)) return null;
  return crypto.createHash("sha256").update(fs.readFileSync(full)).digest("hex");
}

function countMatches(text, regex) {
  const flags = regex.flags.includes("g") ? regex.flags : `${regex.flags}g`;
  const re = new RegExp(regex.source, flags);
  return (text.match(re) || []).length;
}

function walkStrings(value, out) {
  if (value == null) return;
  if (typeof value === "string") {
    out.push(value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => walkStrings(item, out));
    return;
  }
  if (typeof value === "object") {
    Object.values(value).forEach((item) => walkStrings(item, out));
  }
}

function loadFileContent(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), "utf8");
}

function countStudyCards(words) {
  if (!Array.isArray(words)) return 0;
  return words.filter((w) => w && w.study).length;
}

function inventoryCaaPlaceholders(relPath) {
  const fileName = path.basename(relPath);
  const text = loadFileContent(relPath);
  const counts = {
    flashcardBase: 0,
    studyTranslation: 0,
    studyContent: 0,
    verbForm: 0,
    total: 0
  };

  if (fileName === "verbs.js") {
    counts.verbForm = countMatches(text, /"lv":\s*"CAA -"/g);
    counts.total = counts.verbForm;
    return counts;
  }

  counts.flashcardBase = countMatches(text, /^\s*"lv":\s*"CAA -"/gm);
  counts.studyTranslation = countMatches(text, /"translation":\s*"CAA -"/g);

  const studyLvMatches = text.match(/"study":\s*\{[\s\S]*?\n\s*\}/g) || [];
  for (const block of studyLvMatches) {
    const inner = block.replace(/"translation":\s*"CAA -"/g, "");
    counts.studyContent += countMatches(inner, /"lv":\s*"CAA -"/g);
    counts.studyContent += countMatches(inner, /:\s*"CAA -"/g);
  }

  counts.total =
    countMatches(text, /CAA -/g);

  return counts;
}

function analyzeDataFile(relPath) {
  const fileName = path.basename(relPath);
  const wwwPath = `www/${relPath}`;
  const text = loadFileContent(relPath);
  const markerCounts = {};
  for (const [key, marker] of Object.entries(MARKERS)) {
    markerCounts[key] = countMatches(text, marker.regex);
  }

  let recordCount = null;
  let studyCount = null;
  let parseOk = true;
  let parseError = null;

  try {
    if (["a1.js", "a2.js", "b1.js", "b2.js", "c1.js", "c2.js"].includes(fileName)) {
      const words = loadArrayDataset(relPath);
      recordCount = words ? words.length : 0;
      studyCount = countStudyCards(words);
    } else if (fileName === "sentences.js" || fileName === "verbs.js") {
      const rows = loadArrayDataset(relPath);
      recordCount = rows ? rows.length : 0;
    } else if (fileName === "courseLessons.js") {
      const globals = loadWindowGlobals(relPath);
      recordCount = Object.keys(globals).length;
    } else if (fileName === "courseTrainingCards.js") {
      const globals = loadWindowGlobals(relPath);
      const cards = Object.entries(globals).filter(([k, v]) => k.includes("TrainingCards") && Array.isArray(v));
      recordCount = cards.reduce((sum, [, arr]) => sum + arr.length, 0);
    } else if (fileName === "dialogueIdMap.js" || fileName === "nounArticles.js") {
      const globals = loadWindowGlobals(relPath);
      recordCount = Object.keys(globals).length;
    }
  } catch (err) {
    parseOk = false;
    parseError = err.message;
  }

  const result = {
    file: relPath,
    recordCount,
    studyCount,
    markerCounts,
    rootWwwIdentical: sha256(relPath) !== null && sha256(relPath) === sha256(wwwPath),
    parseOk,
    parseError
  };

  if (CAA_PLACEHOLDER_FILES.includes(fileName)) {
    result.caaPlaceholders = inventoryCaaPlaceholders(relPath);
  }

  return result;
}

function extractUiStringValues(relPath) {
  const text = loadFileContent(relPath);
  const values = [];
  const re = /"([^"\\]|\\.)*"/g;
  let match;
  while ((match = re.exec(text)) !== null) {
    const value = match[0].slice(1, -1);
    if (value.length > 0 && !value.startsWith("__")) values.push(value);
  }
  return values;
}

function analyzeUiFile(relPath) {
  const wwwPath = `www/${relPath}`;
  const text = loadFileContent(relPath);
  const lvUiText = loadFileContent("languages/lv/ui.js");
  const uiValues = extractUiStringValues(relPath);
  const lvValues = new Set(extractUiStringValues("languages/lv/ui.js"));

  const markerCounts = {};
  for (const [key, marker] of Object.entries(MARKERS)) {
    markerCounts[key] = countMatches(text, marker.regex);
  }

  const placeholderIssues = [];
  for (const value of uiValues) {
    const placeholderRegex = /\{([^}]+)\}/g;
    let phMatch;
    while ((phMatch = placeholderRegex.exec(value)) !== null) {
      const name = phMatch[1];
      if (!ALLOWED_UI_PLACEHOLDERS.has(name)) {
        placeholderIssues.push({ value, placeholder: name });
      }
    }
  }

  let identicalToLv = 0;
  for (const value of uiValues) {
    if (lvValues.has(value)) identicalToLv++;
  }

  return {
    file: relPath,
    uiKeyCount: uiValues.length,
    identicalToLvCount: identicalToLv,
    identicalToLvPct: uiValues.length
      ? Number(((identicalToLv / uiValues.length) * 100).toFixed(1))
      : 0,
    markerCounts,
    placeholderIssues,
    rootWwwIdentical: sha256(relPath) === sha256(wwwPath)
  };
}

const fileReports = DATA_FILES.map((name) => analyzeDataFile(`${DIR}/${name}`));
const uiReport = analyzeUiFile("languages/lb/ui.js");

const caaInventory = CAA_PLACEHOLDER_FILES.map((name) => ({
  file: `${DIR}/${name}`,
  ...(fileReports.find((f) => f.file.endsWith(name))?.caaPlaceholders || {})
}));

const totals = {
  files: fileReports.length,
  records: fileReports.reduce((sum, f) => sum + (f.recordCount || 0), 0),
  studyCards: fileReports.reduce((sum, f) => sum + (f.studyCount || 0), 0),
  translationStrings: 0,
  caaExact: caaInventory.reduce((sum, f) => sum + (f.total || 0), 0),
  lvDiacritics: fileReports.reduce((sum, f) => sum + (f.markerCounts.lvDiacritics || 0), 0),
  lvTerms: fileReports.reduce((sum, f) => sum + (f.markerCounts.lvTerms || 0), 0),
  trTerms: fileReports.reduce((sum, f) => sum + (f.markerCounts.trTerms || 0), 0),
  nlTerms: fileReports.reduce((sum, f) => sum + (f.markerCounts.nlTerms || 0), 0),
  enTerms: fileReports.reduce((sum, f) => sum + (f.markerCounts.enTerms || 0), 0),
  luxLikely: fileReports.reduce((sum, f) => sum + (f.markerCounts.luxLikely || 0), 0),
  rootWwwMismatches: fileReports
    .filter((f) => !f.rootWwwIdentical)
    .map((f) => f.file)
};

if (!uiReport.rootWwwIdentical) {
  totals.rootWwwMismatches.push(uiReport.file);
}

const foreignTotal =
  totals.lvDiacritics + totals.lvTerms + totals.trTerms + totals.nlTerms + totals.enTerms;
const coverageDenominator = foreignTotal + totals.luxLikely + totals.caaExact;
const luxCoveragePct = coverageDenominator > 0
  ? Number(((totals.luxLikely / coverageDenominator) * 100).toFixed(1))
  : 0;

const report = {
  lang: LANG,
  generatedAt: new Date().toISOString(),
  registryExpected: { dataStatus: "fallback", hasStudyData: false },
  totals: {
    ...totals,
    approximateLuxembourgishCoveragePct: luxCoveragePct,
    uiIdenticalToLvPct: uiReport.identicalToLvPct
  },
  caaInventory,
  files: fileReports,
  ui: uiReport,
  readiness: {
    productionReady: false,
    reason: "LB content is predominantly non-Luxembourgish; registry should remain fallback until full translation cycle."
  }
};

if (JSON_OUT) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log("LB-DE content readiness audit (read-only)");
  console.log("==========================================");
  console.log(`Approximate Luxembourgish coverage: ${luxCoveragePct}%`);
  console.log(`CAA - placeholders (exact): ${totals.caaExact}`);
  console.log(`LV diacritics: ${totals.lvDiacritics}`);
  console.log(`LV terms: ${totals.lvTerms}`);
  console.log(`Turkish fragments: ${totals.trTerms}`);
  console.log(`Dutch fragments: ${totals.nlTerms}`);
  console.log(`English fragments: ${totals.enTerms}`);
  console.log(`Likely Luxembourgish markers: ${totals.luxLikely}`);
  console.log(`UI strings identical to LV: ${uiReport.identicalToLvCount}/${uiReport.uiKeyCount} (${uiReport.identicalToLvPct}%)`);
  console.log(`UI placeholder issues: ${uiReport.placeholderIssues.length}`);
  console.log(`Root↔WWW mismatches: ${totals.rootWwwMismatches.length}`);
  if (totals.rootWwwMismatches.length) {
    totals.rootWwwMismatches.forEach((f) => console.log(`  - ${f}`));
  }
  console.log("\nCAA - inventory by file:");
  caaInventory.forEach((row) => {
    console.log(
      `  ${path.basename(row.file)}: total=${row.total || 0}, flashcard=${row.flashcardBase || 0}, study.translation=${row.studyTranslation || 0}, studyContent=${row.studyContent || 0}, verbForm=${row.verbForm || 0}`
    );
  });
}
