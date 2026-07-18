/**
 * Kurss (courseLessons.js) content audit — mirrors sentences/vocab audit rules.
 * Usage: node scripts/audit-kurss.js [--json]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const bullet = "\u2022";
const jsonOut = process.argv.includes("--json");

const code = fs.readFileSync(path.join(root, "data/courseLessons.js"), "utf8");
const sandbox = { window: {} };
vm.runInNewContext(code, sandbox);

const html = sandbox.window.COURSE_LESSON_HTML || {};
const data = sandbox.window.COURSE_LESSON_DATA || {};

const pairs = [];
const vocab = [];
const duplicates = new Map();

function addPair(de, lv, source) {
  if (!de && !lv) return;
  const key = `${de}|||${lv}`;
  if (!duplicates.has(key)) duplicates.set(key, []);
  duplicates.get(key).push(source);
  pairs.push({ de: (de || "").trim(), lv: (lv || "").trim(), source });
}

function addVocab(de, lv, source) {
  if (!de || !lv) return;
  vocab.push({ de: de.trim(), lv: lv.trim(), source });
}

function parseHtmlPairs(htmlStr, source) {
  const re = />([^<]*?)\s*[—–-]\s*([^<]+)</g;
  let m;
  while ((m = re.exec(htmlStr)) !== null) {
    const de = m[1].replace(/&nbsp;/g, " ").trim();
    const lv = m[2].trim();
    if (de && lv && !de.startsWith("•") && de.length < 200) {
      addPair(de, lv, source);
    }
  }
}

for (const [key, val] of Object.entries(html)) {
  if (typeof val === "string") parseHtmlPairs(val, `HTML:${key}`);
}

for (const [lessonKey, lesson] of Object.entries(data)) {
  const sections = lesson.sections || [];
  for (const section of sections) {
    const src = `${lessonKey}/${section.title}`;
    for (const item of section.items || []) {
      if (typeof item !== "string") continue;
      const dash = item.match(/^(.+?)\s*[—–-]\s*(.+)$/);
      if (dash) {
        addVocab(dash[1].trim(), dash[2].trim(), src);
        addPair(dash[1].trim(), dash[2].trim(), src);
      }
    }
    for (const card of section.cards || []) {
      if (card.type === "translate" && card.de && card.lv) {
        addPair(card.de, card.lv, `${src}/translate`);
      }
    }
  }
  if (lesson.legacyHtml) parseHtmlPairs(lesson.legacyHtml, `${lessonKey}/legacy`);
}

function startsUpper(s) {
  return /^[A-ZĀČĒĢĪĶĻŅŠŪŽÄÖÜ]/.test((s || "").trim());
}
function startsLower(s) {
  return /^[a-zāčēģīķļņšūžäöüß]/.test((s || "").trim());
}
function isFullSentence(de, lv) {
  const deTrim = (de || "").trim();
  const lvFirst = ((lv || "").split(bullet)[0] || "").trim();
  return /[.!?]$/.test(deTrim) || /[.!?]$/.test(lvFirst) || /[.!?…]$/.test(deTrim);
}

const germanInLv = /(?:\bder\b|\bdie\b|\bdas\b|\bund\b|\bist\b|\bnicht\b|\bich\b|\bdu\b|\ber\b|\bsie\b|\bwir\b|\bihr\b)/i;
const oldEsZett = /\bißt\b|\bmuß\b|\bdaß\b|\blaß\b|\bweiß\b(?![a-z])/i;

const issues = {
  semicolon_lv: [],
  em_dash_lv: [],
  german_in_lv: [],
  old_eszett_de: [],
  lv_full_lower_start: [],
  de_full_lower_start: [],
  lv_phrase_upper_start: [],
  de_phrase_upper_start: [],
  lv_full_missing_punct: [],
  duplicate_pairs: [],
  vocab_semicolon: [],
  vocab_upper_lv: [],
  empty_lv: [],
  empty_de: [],
};

for (const p of pairs) {
  const { de, lv, source } = p;
  const lvFirst = (lv.split(bullet)[0] || "").trim();
  const full = isFullSentence(de, lv);

  if (lv.includes(";")) issues.semicolon_lv.push(p);
  if (lv.includes(" — ")) issues.em_dash_lv.push(p);
  if (germanInLv.test(lvFirst) && !/^(der|die|das)\s/i.test(de)) {
    issues.german_in_lv.push(p);
  }
  if (oldEsZett.test(de)) issues.old_eszett_de.push(p);
  if (!lv) issues.empty_lv.push(p);
  if (!de) issues.empty_de.push(p);

  if (full) {
    if (startsLower(lvFirst)) issues.lv_full_lower_start.push(p);
    if (startsLower(de)) issues.de_full_lower_start.push(p);
    if (/[.!?]$/.test(de.trim()) && !/[.!?…]$/.test(lvFirst)) {
      issues.lv_full_missing_punct.push(p);
    }
  } else {
    if (startsUpper(lvFirst) && !/^(Sie|Paul|Marie|Hans|Edgar|Gertrud|Anna)/.test(lvFirst)) {
      issues.lv_phrase_upper_start.push(p);
    }
    if (startsUpper(de) && !/^(Der|Die|Das|Ich|Du|Er|Sie|Wir|Ihr|Was|Wer|Wen|Wie|Paul|Marie|Hans|Edgar|Gertrud|Anna|Guten|Ja|Nein|Kommst|Singt|Stehst|Geht|Spielst|Arbeitest)/.test(de)) {
      issues.de_phrase_upper_start.push(p);
    }
  }
}

for (const v of vocab) {
  if (v.lv.includes(";")) issues.vocab_semicolon.push(v);
  const first = (v.lv.split(bullet)[0] || v.lv.split(";")[0] || "").trim();
  if (startsUpper(first) && !/^(Sie|Paul|Marie)/.test(first)) {
    issues.vocab_upper_lv.push(v);
  }
}

for (const [key, sources] of duplicates) {
  if (sources.length > 1) {
    const [de, lv] = key.split("|||");
    issues.duplicate_pairs.push({ de, lv, count: sources.length, sources: sources.slice(0, 3) });
  }
}

const report = {
  summary: {
    translationPairs: pairs.length,
    vocabItems: vocab.length,
    htmlSections: Object.keys(html).length,
    lessons: Object.keys(data).length,
  },
  issueCounts: Object.fromEntries(
    Object.entries(issues).map(([k, v]) => [k, v.length])
  ),
  issues,
};

if (jsonOut) {
  console.log(JSON.stringify(report, null, 2));
} else {
  console.log("Kurss audit summary:", report.summary);
  for (const [key, list] of Object.entries(issues)) {
    if (!list.length) continue;
    console.log(`\n=== ${key}: ${list.length} ===`);
    for (const item of list.slice(0, 8)) {
      console.log(" ", JSON.stringify(item).slice(0, 200));
    }
  }
}
