#!/usr/bin/env node
/**
 * Rebuild BS native fields from LV source using learned map + template engine.
 * Preserves DE fields and sectionAccents from LV/BS.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const BS_DIR = path.join(ROOT, "data", "bs");
const LV_DIAC = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;

const TEMPLATES = [
  [/^Galvenā doma:\s*/i, "Ključna ideja: "],
  [/^Galvenā ideja:\s*/i, "Ključna ideja: "],
  [/ galvenokārt nozīmē:\s*/gi, " uglavnom znači: "],
  [/Bieži raksturo:\s*/gi, "Često opisuje: "],
  [/ raksturo\s+/gi, " opisuje "],
  [/^Lieto, kad\s+/i, "Koristi se kada "],
  [/^Lieto, lai\s+/i, "Koristi se da "],
  [/^Lieto pie\s+/i, "Koristi s "],
  [/^Lieto\s+/i, "Koristi "],
  [/^Izmanto\s+/i, "Koristi "],
  [/^Norāda uz\s+/i, "Ukazuje na "],
  [/^Ievada\s+/i, "Uvod "],
  [/^Kas\s+ir\s+/i, "Šta je "],
  [/^Kad\s+/i, "Kada "],
  [/Bieži nozīmē\s+/gi, "Često znači "],
  [/nozīmē\s+/gi, "znači "],
  [/atrodas\s+/gi, "nalazi se "],
  [/sākas\s+/gi, "počinje "],
  [/nāk no\s+/gi, "dolazi iz "],
  [/pie personas/gi, "kod osobe"],
  [/vāciski/gi, "njemački"],
  [/Es runāju/gi, "Govorim"],
  [/es runāju/gi, "govorim"],
  [/Mēs runājam/gi, "Govorimo"],
  [/mēs runājam/gi, "govorimo"],
  [/par darbu/gi, "o poslu"],
  [/Pasaki man/gi, "Reci mi"],
  [/pasacīt/gi, "reći"],
  [/patiesību/gi, "istinu"],
  [/konteksts atbilst/gi, "kontekst odgovara"],
  [/šai nozīmei/gi, "ovom značenju"],
  [/viņš /g, "on "], [/viņa /g, "ona "], [/viņi /g, "oni "],
  [/viņš\./g, "on."], [/es /g, "ja "], [/tu /g, "ti "], [/mēs /g, "mi "],
  [/latviešu/gi, "bosanski"], [/Latvijas/gi, "Bosne"], [/latviski/gi, "bosanski"],
  [/Pirmā lekcija/g, "Prva lekcija"], [/Otrā lekcija/g, "Druga lekcija"],
  [/Trešā lekcija/g, "Treća lekcija"], [/Septītā lekcija/g, "Sedma lekcija"],
  [/darbības vārdi tagadnē/gi, "glagoli u sadašnjem vremenu"],
  [/Dialogi \/ teikumi/g, "Dijalozi / rečenice"],
  [/Pārtulko/g, "Prevedi"], [/pārtulkošana/gi, "prevođenje"],
  [/Nominatīvs/g, "Nominativ"], [/Akkusatīvs/g, "Akuzativ"], [/Datīvs/g, "Dativ"],
  [/Piemēri/g, "Primjeri"], [/Svarīgi/g, "Važno"], [/Padoms/g, "Savjet"],
  [/Pēteris/g, "Petar"], [/Jānis/g, "Ivan"], [/Rūdolfs/g, "Rudolf"], [/Roberts/g, "Robert"],
  [/Klikšķini/g, "Kliknite"], [/Kopsavilkums/g, "Sažetak"],
  [/Pavēles izteiksme/g, "Imperativ"], [/pavēles izteiksme/gi, "imperativ"],
  [/tagadnē/gi, "sadašnjem vremenu"], [/daudzskaitlis/gi, "množina"],
  [/vienskaitlis/gi, "jednina"], [/lietvārdu/gi, "imenica"],
  [/darbības vārdu/gi, "glagola"], [/darbības vārds/gi, "glagol"],
  [/darbības vārdi/gi, "glagoli"], [/gramatika/gi, "gramatika"],
  [/izruna/gi, "izgovor"], [/teikumu/gi, "rečenica"],
];

const WORDS = {
  "ābols": "jabuka", "maize": "hljeb", "ūdens": "voda", "māja": "kuća",
  "mācīties": "učiti", "runāt": "govoriti", "cept": "peći", "pavēlēt": "narediti",
  "sākt": "početi", "nākt": "doći", "iet": "ići", "stāvēt": "stajati",
  "dziedāt": "pjevati", "ēst": "jesti", "dzert": "piti", "gulēt": "spavati",
  "strādāt": "raditi", "lasīt": "čitati", "rakstīt": "pisati", "redzēt": "vidjeti",
  "dzirdēt": "čuti", "zināt": "znati", "varēt": "moći", "gribēt": "htjeti",
  "būt": "biti", "mazs": "mali", "liels": "veliki", "labs": "dobar",
  "slikts": "loš", "jauns": "nov", "vecs": "star", "klein": "mali",
  "sprechen": "govoriti", "sagen": "reći", "kommen": "doći", "gehen": "ići",
  "stehen": "stajati", "sitzen": "sjediti", "fragen": "pitati", "antworten": "odgovoriti",
  "arbeiten": "raditi", "spielen": "igrati", "singen": "pjevati", "lernen": "učiti",
  "nehmen": "uzeti", "geben": "dati", "sehen": "vidjeti", "hören": "čuti",
  "machen": "raditi", "finden": "naći", "denken": "misliti", "wissen": "znati",
  "mögen": "sviđati se", "können": "moći", "müssen": "morati", "wollen": "htjeti",
  "dürfen": "smjeti", "sollen": "trebati", "haben": "imati", "sein": "biti",
  "werden": "postati", "an": "na", "auf": "na", "aus": "iz", "bei": "kod",
  "mit": "sa", "nach": "za", "von": "od", "zu": "ka", "in": "u", "um": "oko",
  "über": "o", "unter": "ispod", "vor": "ispred", "hinter": "iza", "neben": "pored",
  "zwischen": "između", "durch": "kroz", "für": "za", "gegen": "protiv",
  "ohne": "bez", "bis": "do", "ab": "od", "da": "tu", "so": "tako",
  "auch": "također", "noch": "još", "schon": "već", "nur": "samo",
  "sehr": "vrlo", "viel": "puno", "wenig": "malo", "mehr": "više",
  "gut": "dobro", "schlecht": "loše", "neu": "novo", "alt": "staro",
  "groß": "veliko", "klein": "malo", "lang": "dugo", "kurz": "kratko",
  "hoch": "visoko", "niedrig": "nisko", "breit": "široko", "eng": "usko",
  "schnell": "brzo", "langsam": "sporo", "warm": "toplo", "kalt": "hladno",
  "heiß": "vruće", "schön": "lijepo", "hässlich": "ružno",
};

const NATIVE_KEYS = new Set([
  "lv", "translation", "title", "subtitle", "lead", "meaning", "describes",
  "label", "description", "front", "intro", "text", "left", "right", "word",
  "content", "explanation", "tip", "important", "mistakes", "remember",
]);

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
      if (lv !== bs && !LV_DIAC.test(bs) && lv.trim()) map[lv] = bs;
      return;
    }
    if (Array.isArray(lv) && Array.isArray(bs)) {
      for (let i = 0; i < Math.min(lv.length, bs.length); i++) walk(lv[i], bs[i]);
    } else if (typeof lv === "object" && typeof bs === "object" && !Array.isArray(lv)) {
      for (const k of Object.keys(lv)) {
        if (["de", "de_article", "de_plural", "sectionAccents", "id", "layout", "level"].includes(k)) continue;
        walk(lv[k], bs[k]);
      }
    }
  }
  if (Array.isArray(lvData) && Array.isArray(bsData)) {
    for (let i = 0; i < Math.min(lvData.length, bsData.length); i++) walk(lvData[i], bsData[i]);
  }
  return map;
}

function applyTemplates(text) {
  if (!text || typeof text !== "string") return text;
  let out = text;
  for (const [re, rep] of TEMPLATES) out = out.replace(re, rep);
  return out;
}

function translateText(text, map, sortedKeys) {
  if (!text || typeof text !== "string") return text;
  if (map[text]) return map[text];
  let out = text;
  for (const [from, to] of sortedKeys) {
    if (from.length > 2 && out.includes(from)) out = out.split(from).join(to);
  }
  out = applyTemplates(out);
  if (map[out]) return map[out];
  const lower = out.trim().replace(/\.$/, "").toLowerCase();
  if (WORDS[lower]) {
    const w = WORDS[lower];
    return out.endsWith(".") ? w.charAt(0).toUpperCase() + w.slice(1) + "." : w.charAt(0).toUpperCase() + w.slice(1);
  }
  return out;
}

function translateValue(lvVal, map, sortedKeys, pk = "") {
  if (lvVal == null) return lvVal;
  if (typeof lvVal === "string") {
    if (pk === "example") {
      if (lvVal.includes("=")) {
        const idx = lvVal.indexOf("=");
        const left = lvVal.slice(0, idx + 1);
        const right = lvVal.slice(idx + 1).trim();
        return `${left} ${translateText(right, map, sortedKeys)}`;
      }
      const dash = lvVal.match(/^(.+?)(\s*[–—-]\s*)(.+)$/);
      if (dash) return `${dash[1]}${dash[2]}${translateText(dash[3].trim(), map, sortedKeys)}`;
    }
    return translateText(lvVal, map, sortedKeys);
  }
  if (Array.isArray(lvVal)) return lvVal.map((v) => translateValue(v, map, sortedKeys, pk));
  if (typeof lvVal === "object") {
    const out = {};
    for (const [k, v] of Object.entries(lvVal)) {
      if (k === "sectionAccents") continue;
      out[k] = translateValue(v, map, sortedKeys, k);
    }
    return out;
  }
  return lvVal;
}

function rebuildEntry(lvEntry, bsEntry, map, sortedKeys) {
  const out = { ...bsEntry };
  for (const k of Object.keys(lvEntry)) {
    if (["de", "de_article", "de_plural", "level"].includes(k)) {
      out[k] = lvEntry[k];
      continue;
    }
    if (k === "sectionAccents") {
      out[k] = bsEntry?.[k] || lvEntry[k];
      continue;
    }
    if (NATIVE_KEYS.has(k) || k === "study" || k === "info") {
      out[k] = translateValue(lvEntry[k], map, sortedKeys, k);
    }
  }
  return out;
}

function writeArray(fp, varName, data) {
  fs.writeFileSync(fp, `const ${varName} = ${JSON.stringify(data, null, 2)};\n\nwindow.${varName} = ${varName};\n`, "utf8");
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
  console.log(`Map: ${Object.keys(map).length}`);

  for (const [rel, key] of pairs) {
    const lv = load(rel)[key];
    const bs = load(`data/bs/${path.basename(rel)}`)[key];
    writeArray(path.join(BS_DIR, path.basename(rel)), key, lv.map((e, i) => rebuildEntry(e, bs[i] || e, map, sortedKeys)));
  }

  const lvDlg = load("data/dialogueIdMap.js").DIALOGUE_ID_MAP;
  const outDlg = {};
  for (const [id, e] of Object.entries(lvDlg)) {
    outDlg[id] = { de: e.de, lv: translateText(e.lv, map, sortedKeys) };
  }
  fs.writeFileSync(path.join(BS_DIR, "dialogueIdMap.js"), `const DIALOGUE_ID_MAP = ${JSON.stringify(outDlg, null, 2)};\n\nwindow.DIALOGUE_ID_MAP = DIALOGUE_ID_MAP;\n`);

  const lvCourse = load("data/courseLessons.js");
  const bsHtml = {};
  for (const [k, html] of Object.entries(lvCourse.COURSE_LESSON_HTML || {})) {
    bsHtml[k] = translateText(html, map, sortedKeys);
  }
  const bsData = translateValue(lvCourse.COURSE_LESSON_DATA, map, sortedKeys);
  fs.writeFileSync(path.join(BS_DIR, "courseLessons.js"),
    `const COURSE_LESSON_HTML = ${JSON.stringify(bsHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(bsData, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`);

  const slTrain = load("data/sl/courseTrainingCards.js");
  const lines = ["// Bosnian course training cards for BS-DE Kurss lessons 1-7.\n"];
  for (const [key, deck] of Object.entries(slTrain)) {
    if (!Array.isArray(deck)) continue;
    lines.push(`window.${key.replace(/Sl$/, "Bs")} = ${JSON.stringify(deck.map((c) => ({
      front: translateText(c.front, map, sortedKeys),
      back: c.back || "",
    })), null, 2)};\n`);
  }
  fs.writeFileSync(path.join(BS_DIR, "courseTrainingCards.js"), lines.join("\n"));
  console.log("Rebuild from LV complete.");
}

main();
