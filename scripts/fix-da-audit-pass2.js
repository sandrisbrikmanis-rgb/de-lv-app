#!/usr/bin/env node
/**
 * Fix remaining DA-DE audit pass-2 findings.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const DA_DIR = path.join(ROOT, "data", "da");

const GLOBAL_REPLACEMENTS = [
  [/Nepareizi:/g, "Forkert:"],
  [/Pareizi:/g, "Korrekt:"],
  [/Nepareizi/g, "Forkert"],
  [/Pareizi/g, "Korrekt"],
  [/på lettisk/gi, "på dansk"],
  [/På lettisk/g, "På dansk"],
];

const HTML_FIXES = [
  [/\bVar tut\b/g, "Was tut"],
  [/\bVar tun\b/g, "Was tun"],
  [/\bVar steht\b/g, "Was steht"],
  [/\bVar ligger\b/g, "Was liegt"],
  [/\bVar hængt\b/g, "Was hängt"],
  [/\bsynd scharf\b/g, "sind scharf"],
  [/\brecchnet\b/g, "rechnet"],
  [/\bOlga-antwortet\b/g, "Olga antwortet"],
  [/\bOlga svar:/g, "Olga antwortet:"],
  [/\bEr der\b/g, "Ist der"],
  [/\bfortæller!\b/g, "zähle!"],
  [/\bHvem svarede\b/g, "Wie antwortet"],
  [/\bHvem er der\b/g, "Wie ist der"],
  [/\bHvem\b/g, "Wen"],
  [/\bJoin the organisation\b/g, "Tilslut dig organisationen"],
  [/\bEn and\b/g, "En anden"],
  [/"Begge\.\.\. begge"/g, '"Både... og"'],
  [/"Iesim teātrī\?"/g, '"Skal vi gå i teatret?"'],
  [/"Nogrieziet, lūdzu, trīs metrus\."/g, '"Skær venligst tre meter af for mig."'],
  // Mixed Danish in German Kurss examples
  [/\bog zeichnet\b/g, "und zeichnet"],
  [/\bog Anna\b/g, "und Anna"],
  [/\bog Marie\b/g, "und Marie"],
  [/\bog Olga\b/g, "und Olga"],
  [/\bog svar\b/g, "und antwortet"],
  [/\bsteht og antwortet\b/g, "steht und antwortet"],
  [/\bHier ligger\b/g, "Hier liegt"],
  [/\bDort ligger\b/g, "Dort liegt"],
  [/\bHer hænger\b/g, "Hier hängt"],
  [/\bDort hænger\b/g, "Dort hängt"],
  [/\ber lille\b/g, "ist klein"],
  [/\bEr er lille\b/g, "Er ist klein"],
  [/\beller groß\b/g, "oder groß"],
  [/\bet billede\b/g, "ein Bild"],
  [/\ben Tafel\b/g, "eine Tafel"],
  [/fortæller!/g, "zähle!"],
  [/\bhvid\?/g, "weiß?"],
  [/\bNej,/g, "Nein,"],
  [/\bHvad laver du\?/g, "Was machst du?"],
  [/\bsynger Sie\b/g, "singen Sie"],
  [/\btæller!\b/g, "zählt!"],
  [/\btæller\b/g, "zählt"],
  [/\bHier ligger ein Bleistift\b/g, "Hier liegt ein Bleistift"],
  [/\bEdgar nimmt en Messer\b/g, "Edgar nimmt ein Messer"],
  [/\bLatvian dative and German nominative\/accusative\b/g, "Dansk dativ og tysk nominativ/akkusativ"],
];

function deepApplyStrings(obj, replacer) {
  if (typeof obj === "string") return replacer(obj);
  if (Array.isArray(obj)) return obj.map((item) => deepApplyStrings(item, replacer));
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) out[k] = deepApplyStrings(v, replacer);
    return out;
  }
  return obj;
}

function loadCourse() {
  const code = fs.readFileSync(path.join(DA_DIR, "courseLessons.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return { html: ctx.window.COURSE_LESSON_HTML, data: ctx.window.COURSE_LESSON_DATA };
}

function applyReplacements(text, extra = []) {
  let out = text;
  for (const [from, to] of [...GLOBAL_REPLACEMENTS, ...extra]) {
    out = out.replace(from, to);
  }
  return out;
}

function writeCourse(html, data) {
  fs.writeFileSync(
    path.join(DA_DIR, "courseLessons.js"),
    `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(data, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`,
    "utf8"
  );
}

function fixObCard(words) {
  const card = words.find((w) => w.de === "ob" && w.study);
  if (!card) return;
  card.lv = "Om";
  card.study.translation = "Om";
  if (Array.isArray(card.study.explanation)) {
    card.study.explanation = card.study.explanation.map((line) =>
      applyReplacements(String(line).replace(/betyder på dansk oftest eller/gi, "betyder på dansk oftest om"))
    );
  }
  if (Array.isArray(card.study.comparison)) {
    card.study.comparison = card.study.comparison.map((row) => {
      const copy = { ...row };
      if (copy.meaning) copy.meaning = applyReplacements(String(copy.meaning));
      return copy;
    });
  }
}

function processFile(relPath, varName) {
  const filePath = path.join(DA_DIR, relPath);
  let content = fs.readFileSync(filePath, "utf8");
  const before = content;
  content = applyReplacements(content, HTML_FIXES);
  if (content !== before) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Patched ${relPath}`);
  }
}

function main() {
  // 1. legacyHtml from translated kurssLesson HTML
  const { html, data } = loadCourse();
  for (let i = 1; i <= 7; i++) {
    const key = `kurssLesson${i}`;
    if (html[key] && data[key]) {
      data[key].legacyHtml = html[key];
      console.log(`Synced legacyHtml for ${key}`);
    }
  }
  for (const [key, value] of Object.entries(html)) {
    html[key] = applyReplacements(value, HTML_FIXES);
  }
  const patchedData = deepApplyStrings(data, (text) => applyReplacements(text, HTML_FIXES));
  writeCourse(html, patchedData);

  // 2. Global replacements in word/sentence files
  for (const rel of ["a1.js", "a2.js", "b1.js", "b2.js", "c1.js", "c2.js", "sentences.js", "verbs.js", "dialogueIdMap.js", "courseTrainingCards.js"]) {
    processFile(rel);
  }

  // 3. Fix ob card structurally
  const a1Path = path.join(DA_DIR, "a1.js");
  const a1Code = fs.readFileSync(a1Path, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(a1Code, ctx);
  const words = ctx.window.A1_WORDS;
  fixObCard(words);
  fs.writeFileSync(
    a1Path,
    `const A1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A1_WORDS = A1_WORDS;\n`,
    "utf8"
  );
  console.log("Fixed ob card in a1.js");

  console.log("DA audit pass-2 fixes complete.");
}

main();
