#!/usr/bin/env node
/** Pass 2: remaining CONFIRMED REPAIR items — LV pedagogy and accent leftovers */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const ROOT = path.join(__dirname, "..", "..");

function loadArray(relPath, key) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function serializeWords(words, constName) {
  const lines = [`const ${constName} = [`];
  for (const w of words) lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  lines.push("];\n\nwindow.A1_WORDS = A1_WORDS;\n");
  return lines.join("\n");
}

function serializeA2(words) {
  const lines = ["const A2_WORDS = ["];
  for (const w of words) lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  lines.push("];\n\nwindow.A2_WORDS = A2_WORDS;\n");
  return lines.join("\n");
}

function fixLearnerText(text) {
  if (typeof text !== "string") return text;
  let t = text;
  t = t.replace(/nav tas pats, kas/gi, "is not the same as");
  t = t.replace(/abfahren nav [""]aizvest[""]\./gi, "abfahren is not the same as taking something away.");
  t = t.replace(/Hast du das etwa vergessen\? = Vai tad tu to aizmirsi\?/g, "Hast du das etwa vergessen? = Did you perhaps forget that?");
  t = t.replace(/In Latvian, you should see if/g, "In English, check whether");
  t = t.replace(/In Latvian, you have to look at/g, "In English, look at");
  t = t.replace(/In Latvian it is appropriate/g, "In English it is appropriate");
  t = t.replace(/In Latvian it is/g, "In English it is");
  t = t.replace(/In Latvian,/g, "In English,");
  t = t.replace(/In Latvian /g, "In English ");
  t = t.replace(/In some contexts, Latvian barely fits/g, "In some contexts, barely fits in English");
  t = t.replace(/Latvian often says/g, "English often uses");
  t = t.replace(/Latvian usually says/g, "English usually says");
  t = t.replace(/Latvian barely/g, "In English, barely");
  t = t.replace(/Latvian /g, "English ");
  t = t.replace(/Latvians/g, "English speakers");
  t = t.replace(/latviešu/gi, "English");
  t = t.replace(/es tevi redzu/gi, "I see you");
  t = t.replace(/es skatos filmu/gi, "I'm watching the film");
  t = t.replace(/Es tevi satieku/gi, "I'm meeting you");
  t = t.replace(/klein = mazs/gi, "klein = small");
  t = t.replace(/klein = mazs\./gi, "klein = small.");
  t = t.replace(/sagen = teikt/gi, "sagen = say");
  t = t.replace(/sagen = pateikt/gi, "sagen = say");
  t = t.replace(/ein nav noteiktais artikuls/gi, "ein is not the definite article");
  t = t.replace(/noteiktais artikuls/gi, "definite article");
  t = t.replace(/German "I" = it • so • impersonal form/g, "German es = it • so • impersonal form");
  t = t.replace(/wie viel\(e\) = cik daudz/gi, "wie viel(e) = how much");
  t = t.replace(/wie alt = cik vecs/gi, "wie alt = how old");
  t = t.replace(/wie lange = cik ilgi/gi, "wie lange = how long");
  t = t.replace(/was itself does not change - in German it is always was; in Latvian, choose who or what according to the part of the sentence\./g,
    "was itself does not change — in German it is always was; in English, choose what or which according to the part of the sentence.");
  t = t.replace(/Quick trick: if the question can be answered with 'It's ...', use who; if the answer comes after the/g,
    "Quick trick: if the question can be answered with 'It's ...', use what; if the answer comes after the");
  return t;
}

function walkFix(obj, inDe = false) {
  if (typeof obj === "string") {
    return inDe ? obj : fixLearnerText(obj);
  }
  if (Array.isArray(obj)) return obj.map((x) => walkFix(x, inDe));
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      const childDe = inDe || k === "de" || k === "de_article" || k === "de_plural";
      out[k] = walkFix(v, childDe);
    }
    return out;
  }
  return obj;
}

function replaceAccentTerm(obj, from, to) {
  if (typeof obj === "string") return obj === from ? to : obj;
  if (Array.isArray(obj)) return obj.map((t) => (t === from ? to : t));
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      out[k] = k === "de" ? v : replaceAccentTerm(v, from, to);
    }
    return out;
  }
  return obj;
}

const ACCENT_FIXES = [
  { id: "a1-klein-study", from: "mazs", to: "small" },
  { id: "a1-sagen-study", from: "teikt", to: "say" },
  { id: "a1-was", from: "ko", to: "what" },
  { id: "a2-führen", from: "vest", to: "drive" },
  { id: "a2-abfahren", from: "braukt", to: "drive" },
  { id: "a2-abfahren", from: "aizbraukt", to: "drive away" },
];

function findByStudyId(arr, id) {
  return arr.find((e) => e.study?.id === id);
}

const enA1 = loadArray("data/en/a1.js", "A1_WORDS");
const enA2 = loadArray("data/en/a2.js", "A2_WORDS");

for (const entry of enA1) {
  if (entry.study) entry.study = walkFix(entry.study);
}
for (const entry of enA2) {
  if (entry.study) entry.study = walkFix(entry.study);
}

for (const { id, from, to } of ACCENT_FIXES) {
  const entry = findByStudyId(enA1, id) || findByStudyId(enA2, id);
  if (!entry?.study) continue;
  if (entry.study.sectionAccents) entry.study.sectionAccents = replaceAccentTerm(entry.study.sectionAccents, from, to);
  if (entry.study.accents) entry.study.accents = replaceAccentTerm(entry.study.accents, from, to);
}

// study-der-dank semicolon fix
const dank = findByStudyId(enA2, "study-der-dank");
if (dank?.study?.important?.example) {
  dank.study.important.example = dank.study.important.example.replace(
    /der Dank is a noun; danke is the answer; danken is a verb\./,
    "der Dank is a noun • danke is the reply • danken is a verb."
  );
}

fs.writeFileSync(path.join(ROOT, "data/en/a1.js"), serializeWords(enA1, "A1_WORDS"));
fs.writeFileSync(path.join(ROOT, "data/en/a2.js"), serializeA2(enA2));
fs.writeFileSync(path.join(ROOT, "www/data/en/a1.js"), serializeWords(enA1, "A1_WORDS"));
fs.writeFileSync(path.join(ROOT, "www/data/en/a2.js"), serializeA2(enA2));
console.log("pass2 complete");
