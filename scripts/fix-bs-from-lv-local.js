#!/usr/bin/env node
/**
 * Aggressive local LV→BS fix using learned map + substring replacement.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const BS_DIR = path.join(ROOT, "data", "bs");
const LV_DIAC = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const CYR = /[а-яА-ЯёЁ]/;

const PHRASE_RULES = [
  [/Galvenā doma:/g, "Ključna ideja:"], [/Galvenā ideja:/g, "Ključna ideja:"],
  [/Pirmā lekcija/g, "Prva lekcija"], [/Otrā lekcija/g, "Druga lekcija"],
  [/Trešā lekcija/g, "Treća lekcija"], [/Ceturtā lekcija/g, "Četvrta lekcija"],
  [/Piektā lekcija/g, "Peta lekcija"], [/Sestā lekcija/g, "Šesta lekcija"],
  [/Septītā lekcija/g, "Sedma lekcija"],
  [/darbības vārdi tagadnē/gi, "glagoli u sadašnjem vremenu"],
  [/Dialogi \/ teikumi/g, "Dijalozi / rečenice"],
  [/Darbības vārdi tagadnē/g, "Glagoli u sadašnjem vremenu"],
  [/Pārtulko/g, "Prevedi"], [/pārtulkošana/gi, "prevođenje"], [/pārtulko/gi, "prevedi"],
  [/viņš /g, "on "], [/viņa /g, "ona "], [/viņi /g, "oni "], [/viņam /g, "njemu "],
  [/es nāku/g, "ja dolazim"], [/tu nāc/g, "ti dolaziš"], [/mēs nākam/g, "mi dolazimo"],
  [/viņš nāk/g, "on dolazi"], [/viņa nāk/g, "ona dolazi"],
  [/latviešu/gi, "bosanski"], [/Latvijas/g, "Bosne"], [/latviski/gi, "bosanski"],
  [/Nominatīvs/g, "Nominativ"], [/Akkusatīvs/g, "Akuzativ"], [/Datīvs/g, "Dativ"],
  [/akuzatīvs/gi, "akuzativ"], [/datīvs/gi, "dativ"], [/nominatīvs/gi, "nominativ"],
  [/lietvārdu/gi, "imenica"], [/darbības vārdu/gi, "glagola"],
  [/darbības vārds/gi, "glagol"], [/darbības vārdi/gi, "glagoli"],
  [/Piemēri/g, "Primjeri"], [/Svarīgi/g, "Važno"], [/Padoms/g, "Savjet"],
  [/Skaidrojums/g, "Objašnjenje"], [/Salīdzinājums/g, "Poređenje"],
  [/Pēteris/g, "Petar"], [/Jānis/g, "Ivan"], [/Rūdolfs/g, "Rudolf"], [/Roberts/g, "Robert"],
  [/viņš cep/g, "on peče"], [/viņš cepa/g, "on je pekao"], [/viņš ceptu/g, "on bi pekao"],
  [/cepts \/ izcepts/g, "pečen / ispečen"],
  [/nozīmē/gi, "znači"], [/bieži/gi, "često"], [/galvenokārt/gi, "uglavnom"],
  [/raksturo/gi, "opisuje"], [/izmanto/gi, "koristi"], [/kontekstā/gi, "kontekstu"],
  [/teikumā/gi, "rečenici"], [/jautājums/gi, "pitanje"], [/atbilde/gi, "odgovor"],
  [/Kopsavilkums/g, "Sažetak"], [/Noteikumi/g, "Pravila"],
  [/Klikšķini/g, "Kliknite"], [/nospied/gi, "pritisnite"],
  [/tuvāk/gi, "bliže"], [/nozīmē/gi, "znači"], [/atkarībā/gi, "u zavisnosti"],
  [/parasti/gi, "obično"], [/bieži vien/gi, "često"], [/visbiežāk/gi, "najčešće"],
  [/līmenī/gi, "nivou"], [/teikuma/gi, "rečenice"], [/daļas/gi, "dijela"],
  [/jautājamvārds/gi, "upitna riječ"], [/personas/gi, "osobe"],
  [/identitāti/gi, "identitet"], [/kļūt/gi, "postati"],
  [/laikapstākļus/gi, "vremenske prilike"], [/sausaini/gi, "sunčano"],
  [/lietaini/gi, "kišovito"], [/auksti/gi, "hladno"], [/silti/gi, "toplo"],
];

const WORD_MAP = {
  "ābols": "jabuka", "maize": "hljeb", "ūdens": "voda", "māja": "kuća",
  "mācīties": "učiti", "runāt": "govoriti", "cept": "peći", "pavēlēt": "narediti",
  "sākt": "početi", "nākt": "doći", "iet": "ići", "stāvēt": "stajati",
  "dziedāt": "pjevati", "ēst": "jesti", "dzert": "piti", "gulēt": "spavati",
  "strādāt": "raditi", "lasīt": "čitati", "rakstīt": "pisati", "redzēt": "vidjeti",
  "dzirdēt": "čuti", "zināt": "znati", "varēt": "moći", "gribēt": "htjeti",
  "būt": "biti", "mazs": "mali", "liels": "veliki", "labs": "dobar",
  "slikts": "loš", "jauns": "nov", "vecs": "star",
};

function needsFix(text) {
  return text && typeof text === "string" && (LV_DIAC.test(text) || CYR.test(text));
}

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function learnMaps(lvData, bsData) {
  const map = {};
  function walk(lv, bs) {
    if (!lv || !bs) return;
    if (typeof lv === "string" && typeof bs === "string") {
      if (lv !== bs && !needsFix(bs) && lv.trim()) map[lv] = bs;
      return;
    }
    if (Array.isArray(lv) && Array.isArray(bs)) {
      for (let i = 0; i < Math.min(lv.length, bs.length); i++) walk(lv[i], bs[i]);
      return;
    }
    if (typeof lv === "object" && typeof bs === "object" && !Array.isArray(lv)) {
      for (const k of Object.keys(lv)) {
        if (["de", "de_article", "de_plural", "sectionAccents", "id", "layout", "level"].includes(k)) continue;
        walk(lv[k], bs[k]);
      }
    }
  }
  if (Array.isArray(lvData) && Array.isArray(bsData)) {
    for (let i = 0; i < Math.min(lvData.length, bsData.length); i++) walk(lvData[i], bsData[i]);
  } else walk(lvData, bsData);
  return map;
}

function applyRules(text) {
  if (!text || typeof text !== "string") return text;
  let out = text;
  for (const [re, rep] of PHRASE_RULES) out = out.replace(re, rep);
  const trimmed = out.trim().replace(/\.$/, "");
  const lower = trimmed.toLowerCase();
  if (WORD_MAP[lower]) {
    const w = WORD_MAP[lower];
    const c = w.charAt(0).toUpperCase() + w.slice(1);
    return out.endsWith(".") ? c + "." : c;
  }
  return out;
}

function translateString(text, lvText, map, sortedKeys) {
  if (!text || typeof text !== "string") return text;
  if (!needsFix(text)) return text;
  const src = typeof lvText === "string" ? lvText : text;
  if (map[src]) return map[src];
  let out = src;
  for (const [from, to] of sortedKeys) {
    if (from.length > 2 && out.includes(from)) out = out.split(from).join(to);
  }
  out = applyRules(out);
  if (map[out]) return map[out];
  return out;
}

function fixValue(lvVal, bsVal, map, sortedKeys, parentKey = "") {
  if (bsVal == null) return bsVal;
  if (typeof bsVal === "string") {
    return translateString(bsVal, lvVal, map, sortedKeys);
  }
  if (Array.isArray(bsVal)) {
    const lvArr = Array.isArray(lvVal) ? lvVal : [];
    return bsVal.map((item, i) => fixValue(lvArr[i], item, map, sortedKeys, parentKey));
  }
  if (typeof bsVal === "object") {
    const lvObj = typeof lvVal === "object" && lvVal ? lvVal : {};
    const out = {};
    for (const [k, v] of Object.entries(bsVal)) {
      out[k] = k === "sectionAccents" ? v : fixValue(lvObj[k], v, map, sortedKeys, k);
    }
    return out;
  }
  return bsVal;
}

function fixEntry(lvEntry, bsEntry, map, sortedKeys) {
  const out = {};
  for (const k of Object.keys(bsEntry)) {
    if (["de", "de_article", "de_plural", "level"].includes(k)) { out[k] = bsEntry[k]; continue; }
    out[k] = fixValue(lvEntry?.[k], bsEntry[k], map, sortedKeys, k);
  }
  return out;
}

function writeArray(filePath, varName, data) {
  fs.writeFileSync(filePath, `const ${varName} = ${JSON.stringify(data, null, 2)};\n\nwindow.${varName} = ${varName};\n`, "utf8");
}

function main() {
  const pairs = [
    ["data/a1.js", "A1_WORDS"], ["data/a2.js", "A2_WORDS"], ["data/b1.js", "B1_WORDS"],
    ["data/b2.js", "B2_WORDS"], ["data/c1.js", "C1_WORDS"], ["data/c2.js", "C2_WORDS"],
    ["data/sentences.js", "SENTENCE_ENTRIES"], ["data/verbs.js", "VERB_ENTRIES"],
  ];

  const map = {};
  for (const [rel, key] of pairs) {
    Object.assign(map, learnMaps(load(rel)[key], load(`data/bs/${path.basename(rel)}`)[key]));
  }
  const sortedKeys = Object.entries(map).sort((a, b) => b[0].length - a[0].length);
  console.log(`Map: ${Object.keys(map).length} entries`);

  for (const [rel, key] of pairs) {
    const lv = load(rel)[key];
    const bs = load(`data/bs/${path.basename(rel)}`)[key];
    writeArray(path.join(BS_DIR, path.basename(rel)), key, bs.map((e, i) => fixEntry(lv[i], e, map, sortedKeys)));
  }

  const lvDlg = load("data/dialogueIdMap.js").DIALOGUE_ID_MAP;
  const outDlg = {};
  for (const [id, e] of Object.entries(lvDlg)) {
    outDlg[id] = { de: e.de, lv: translateString(e.lv, e.lv, map, sortedKeys) };
  }
  fs.writeFileSync(path.join(BS_DIR, "dialogueIdMap.js"), `const DIALOGUE_ID_MAP = ${JSON.stringify(outDlg, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`);

  const lvCourse = load("data/courseLessons.js");
  const bsHtml = {};
  for (const [k, html] of Object.entries(lvCourse.COURSE_LESSON_HTML || {})) {
    bsHtml[k] = translateString(html, html, map, sortedKeys);
  }
  const bsData = fixValue(lvCourse.COURSE_LESSON_DATA, lvCourse.COURSE_LESSON_DATA, map, sortedKeys);
  fs.writeFileSync(path.join(BS_DIR, "courseLessons.js"),
    `const COURSE_LESSON_HTML = ${JSON.stringify(bsHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(bsData, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`);

  const slTrain = load("data/sl/courseTrainingCards.js");
  const lines = ["// Bosnian course training cards for BS-DE Kurss lessons 1-7.\n"];
  for (const [key, deck] of Object.entries(slTrain)) {
    if (!Array.isArray(deck)) continue;
    lines.push(`window.${key.replace(/Sl$/, "Bs")} = ${JSON.stringify(deck.map((c) => ({
      front: translateString(c.front, c.front, map, sortedKeys),
      back: c.back || "",
    })), null, 2)};\n`);
  }
  fs.writeFileSync(path.join(BS_DIR, "courseTrainingCards.js"), lines.join("\n"));
  console.log("Aggressive local fix done.");
}

main();
