#!/usr/bin/env node
/**
 * Read-only IT-DE content readiness audit.
 * Reports language-remnant markers, approximate Italian coverage,
 * and root ↔ www sync status. Does NOT modify any data files.
 *
 * Run: node scripts/audit-it-content-readiness.js
 *      node scripts/audit-it-content-readiness.js --json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { ROOT, dataDir, fileExists, loadArrayDataset, loadWindowGlobals } = require("./lib/audit-common");

const LANG = "it";
const DIR = dataDir(LANG);
const JSON_OUT = process.argv.includes("--json");

const DATA_FILES = [
  "a1.js", "a2.js", "b1.js", "b2.js", "c1.js", "c2.js",
  "sentences.js", "verbs.js", "courseLessons.js",
  "courseTrainingCards.js", "dialogueIdMap.js", "nounArticles.js"
];

const UI_FILES = ["languages/it/ui.js", "www/languages/it/ui.js"];

const MARKERS = {
  lvDiacritics: { label: "LV diacritics", regex: /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/g },
  etTerms: {
    label: "ET markers",
    regex: /\b(peamenüü|sõna|tegusõn|õige|vajuta|klõpsa|tuntud|õpp|kõik|järgmine|kontrolli|sulge|kustuta|tühista|taasta|nädal|kuu|valikud|töötab)\b/gi
  },
  ltTerms: {
    label: "LT markers",
    regex: /\b(taip|aš|ateinu|einate|dainuoja|skaičiuoja|ar tu|ar jūs|ar jie|ar jis)\b/gi
  },
  nlTerms: {
    label: "NL markers",
    regex: /\b(ik speel|niet bezig|houdt niet van|hoe lobt)\b/gi
  },
  frTerms: {
    label: "FR markers",
    regex: /\b(il joue|prend un couteau|deux couteaux|à venir)\b/gi
  },
  italianLikely: {
    label: "likely Italian",
    regex: /\b(il|la|lo|gli|le|un|una|che|per|con|non|sono|essere|avere|parlare|della|del|dei|delle|questo|questa|anche|molto|tutto|fare|dire|andare|venire|stare|dare|sapere|volere|dovere|potere|più|già|ancora|sempre|mai|qui|bene|male|grande|piccolo|nuovo|vecchio|buono|cattivo|bello|pane|acqua|casa|mela|libro|tavolo|porta|notte|giorno|anno|uomo|donna|bambino|amico|lavoro|scuola|città|paese|strada|tempo|vita|mondo|mano|occhio|testa|cuore|mente|corpo|voce|parola|frase|lingua|storia|musica|film|cinema|ristorante|albergo|ospedale|macchina|treno|aereo|bicicletta|telefono|computer|internet|email|messaggio|domanda|risposta|problema|soluzione|idea|pensiero|sentimento|amore|odio|paura|speranza|felicità|tristezza|rabbia|calma|pace|guerra|libertà|giustizia|verità|menzogna|errore|successo|fallimento|inizio|fine|prima|dopo|oggi|ieri|domani|mattina|sera|settimana|mese|stagione|primavera|estate|autunno|inverno|imparare|indossare|parlare|avere)\b/gi
  }
};

function sha256(relPath) {
  const full = path.join(ROOT, relPath);
  if (!fs.existsSync(full)) return null;
  return crypto.createHash("sha256").update(fs.readFileSync(full)).digest("hex");
}

function countMatches(text, regex) {
  const flags = regex.flags.includes("g") ? regex.flags : regex.flags + "g";
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
  const full = path.join(ROOT, relPath);
  return fs.readFileSync(full, "utf8");
}

function parseFile(relPath) {
  const code = loadFileContent(relPath);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return { code, window: ctx.window };
}

function countStudyCards(words) {
  if (!Array.isArray(words)) return 0;
  return words.filter((w) => w && w.study).length;
}

function analyzeDataFile(relPath) {
  const fileName = path.basename(relPath);
  const wwwPath = `www/${relPath}`;
  const rootHash = sha256(relPath);
  const wwwHash = sha256(wwwPath);
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

  const italianHits = markerCounts.italianLikely || 0;
  const foreignHits =
  (markerCounts.lvDiacritics || 0) +
  (markerCounts.etTerms || 0) +
  (markerCounts.ltTerms || 0) +
  (markerCounts.nlTerms || 0) +
  (markerCounts.frTerms || 0);
  const totalLangHits = italianHits + foreignHits;
  const italianCoveragePct = totalLangHits > 0
    ? Number(((italianHits / totalLangHits) * 100).toFixed(1))
    : 0;

  return {
    file: relPath,
    recordCount,
    studyCount,
    markerCounts,
    approximateItalianCoveragePct: italianCoveragePct,
    rootWwwIdentical: rootHash !== null && rootHash === wwwHash,
    parseOk,
    parseError
  };
}

function analyzeUiFile(relPath) {
  const wwwPath = relPath.startsWith("www/") ? relPath : `www/${relPath}`;
  const rootPath = relPath.startsWith("www/") ? relPath.replace(/^www\//, "") : relPath;
  const text = loadFileContent(rootPath);
  const markerCounts = {};
  for (const [key, marker] of Object.entries(MARKERS)) {
    markerCounts[key] = countMatches(text, marker.regex);
  }
  return {
    file: rootPath,
    markerCounts,
    rootWwwIdentical: sha256(rootPath) === sha256(wwwPath)
  };
}

function inventoryCourseTrainingCards() {
  const relPath = `${DIR}/courseTrainingCards.js`;
  const globals = loadWindowGlobals(relPath);
  const cardGroups = Object.entries(globals).filter(([k, v]) => /TrainingCards/i.test(k) && Array.isArray(v));
  let totalCards = 0;
  let ltCards = 0;
  const groupNames = [];
  for (const [name, cards] of cardGroups) {
    groupNames.push(name);
    totalCards += cards.length;
    for (const card of cards) {
      const front = String(card.front || "");
      if (MARKERS.ltTerms.regex.test(front)) ltCards++;
    }
  }
  const usesItSuffix = groupNames.every((name) => /It$/i.test(name));
  return {
    totalCards,
    lithuanianCards: ltCards,
    groupNames,
    variableNamesUseItSuffix: usesItSuffix,
    rootWwwIdentical: sha256(relPath) === sha256(`www/${relPath}`)
  };
}

function checkCourseLessonsHtml() {
  const relPath = `${DIR}/courseLessons.js`;
  const result = {
    file: relPath,
    parseOk: true,
    parseError: null,
    htmlTagBalanceIssues: [],
    rootWwwIdentical: sha256(relPath) === sha256(`www/${relPath}`)
  };
  try {
    const globals = loadWindowGlobals(relPath);
    const htmlStrings = [];
    if (globals.COURSE_LESSON_HTML) {
      walkStrings(globals.COURSE_LESSON_HTML, htmlStrings);
    }
    if (globals.COURSE_LESSON_DATA) {
      walkStrings(globals.COURSE_LESSON_DATA, htmlStrings);
    }
    const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/g;
    for (const html of htmlStrings) {
      const stack = [];
      let match;
      while ((match = tagRegex.exec(html)) !== null) {
        const full = match[0];
        const tag = match[1].toLowerCase();
        if (full.startsWith("</")) {
          const open = stack.pop();
          if (!open || open !== tag) {
            result.htmlTagBalanceIssues.push({ tag, issue: "unexpected closing or mismatch" });
          }
        } else if (!full.endsWith("/>") && !["br", "hr", "img", "input", "meta", "link"].includes(tag)) {
          stack.push(tag);
        }
      }
      if (stack.length) {
        result.htmlTagBalanceIssues.push({ unclosed: stack.slice(0, 5) });
      }
    }
  } catch (err) {
    result.parseOk = false;
    result.parseError = err.message;
  }
  return result;
}

const fileReports = DATA_FILES.map((name) => analyzeDataFile(`${DIR}/${name}`));
const uiReports = ["languages/it/ui.js"].map(analyzeUiFile);
const trainingCards = inventoryCourseTrainingCards();
const courseLessonsHtml = checkCourseLessonsHtml();

const totals = {
  files: fileReports.length,
  records: fileReports.reduce((sum, f) => sum + (f.recordCount || 0), 0),
  studyCards: fileReports.reduce((sum, f) => sum + (f.studyCount || 0), 0),
  lvDiacritics: fileReports.reduce((sum, f) => sum + (f.markerCounts.lvDiacritics || 0), 0),
  etTerms: fileReports.reduce((sum, f) => sum + (f.markerCounts.etTerms || 0), 0) + (uiReports[0].markerCounts.etTerms || 0),
  ltTerms: fileReports.reduce((sum, f) => sum + (f.markerCounts.ltTerms || 0), 0),
  nlTerms: fileReports.reduce((sum, f) => sum + (f.markerCounts.nlTerms || 0), 0),
  frTerms: fileReports.reduce((sum, f) => sum + (f.markerCounts.frTerms || 0), 0),
  italianLikely: fileReports.reduce((sum, f) => sum + (f.markerCounts.italianLikely || 0), 0),
  rootWwwMismatches: [
    ...fileReports.filter((f) => !f.rootWwwIdentical).map((f) => f.file),
    ...uiReports.filter((f) => !f.rootWwwIdentical).map((f) => f.file)
  ]
};

const foreignTotal = totals.lvDiacritics + totals.etTerms + totals.ltTerms + totals.nlTerms + totals.frTerms;
const coverageDenominator = foreignTotal + totals.italianLikely;
const overallItalianCoveragePct = coverageDenominator > 0
  ? Number(((totals.italianLikely / coverageDenominator) * 100).toFixed(1))
  : 0;

const report = {
  lang: LANG,
  generatedAt: new Date().toISOString(),
  registryExpected: { dataStatus: "fallback", hasStudyData: false },
  totals: {
    ...totals,
    approximateItalianCoveragePct: overallItalianCoveragePct
  },
  files: fileReports,
  ui: uiReports,
  courseTrainingCards: trainingCards,
  courseLessonsHtml,
  readiness: {
    productionReady: false,
    reason: "Content is predominantly non-Italian; registry should remain fallback until full translation cycle."
  }
};

if (JSON_OUT) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log("IT-DE content readiness audit (read-only)");
  console.log("===========================================");
  console.log(`Approximate Italian coverage: ${overallItalianCoveragePct}%`);
  console.log(`LV diacritics: ${totals.lvDiacritics}`);
  console.log(`ET markers: ${totals.etTerms}`);
  console.log(`LT markers: ${totals.ltTerms}`);
  console.log(`NL markers: ${totals.nlTerms}`);
  console.log(`FR markers: ${totals.frTerms}`);
  console.log(`Root↔WWW mismatches: ${totals.rootWwwMismatches.length}`);
  if (totals.rootWwwMismatches.length) {
    totals.rootWwwMismatches.forEach((f) => console.log(`  - ${f}`));
  }
  console.log(`Course training cards: ${trainingCards.totalCards} total, ${trainingCards.lithuanianCards} LT-marked`);
  console.log(`Course lessons HTML parse: ${courseLessonsHtml.parseOk ? "OK" : "FAIL"}`);
}
