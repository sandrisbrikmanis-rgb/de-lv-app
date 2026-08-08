#!/usr/bin/env node
/**
 * EN-DE A1+A2 deterministic repair — 193 CONFIRMED REPAIR items only.
 */
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
  for (const w of words) {
    lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  }
  lines.push("];\n\nwindow.A1_WORDS = A1_WORDS;\n");
  return lines.join("\n");
}

function serializeA2(words) {
  const lines = ["const A2_WORDS = ["];
  for (const w of words) {
    lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  }
  lines.push("];\n\nwindow.A2_WORDS = A2_WORDS;\n");
  return lines.join("\n");
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function findByStudyId(arr, id) {
  return arr.find((e) => e.study?.id === id);
}

function findByDe(arr, de) {
  return arr.find((e) => e.de === de);
}

function mergeDeSectionAccents(lvSa, enSa) {
  if (!lvSa) return;
  if (!enSa) {
    enSa = deepClone(lvSa);
    return enSa;
  }
  if (typeof lvSa === "object" && !Array.isArray(lvSa)) {
    for (const [k, v] of Object.entries(lvSa)) {
      if (k === "de" || (typeof v === "object" && v && ("blue" in v || "green" in v || "purple" in v || "yellow" in v || "orange" in v || "red" in v))) {
        if (k === "de") enSa[k] = deepClone(v);
        else if (v && typeof v === "object" && !Array.isArray(v) && Object.keys(v).some((c) => ["blue", "green", "yellow", "orange", "purple", "red"].includes(c))) {
          enSa[k] = deepClone(v);
        } else mergeDeSectionAccents(v, enSa[k] || (enSa[k] = Array.isArray(v) ? [] : {}));
      }
    }
  }
  if (Array.isArray(lvSa) && Array.isArray(enSa)) {
    for (let i = 0; i < lvSa.length; i++) {
      if (!enSa[i]) enSa[i] = {};
      mergeDeSectionAccents(lvSa[i], enSa[i]);
    }
  }
}

function restoreDeStudyFromLv(enStudy, lvStudy) {
  if (!enStudy || !lvStudy) return;

  const lvEx = lvStudy.examples || [];
  if (!enStudy.examples) enStudy.examples = [];
  while (enStudy.examples.length > lvEx.length) enStudy.examples.pop();
  while (enStudy.examples.length < lvEx.length) {
    enStudy.examples.push({ de: lvEx[enStudy.examples.length].de, lv: "" });
  }
  for (let i = 0; i < lvEx.length; i++) {
    enStudy.examples[i].de = lvEx[i].de;
  }

  if (lvStudy.comparison && enStudy.comparison) {
    const len = Math.min(lvStudy.comparison.length, enStudy.comparison.length);
    for (let i = 0; i < len; i++) {
      enStudy.comparison[i].word = lvStudy.comparison[i].word;
      const lvParts = String(lvStudy.comparison[i].example || "").split(/\s*[=–-]\s*/);
      const enParts = String(enStudy.comparison[i].example || "").split(/\s*[=–-]\s*/);
      if (lvParts[0] && enParts[1]) {
        enStudy.comparison[i].example = `${lvParts[0].trim()} – ${enParts[1].trim()}`;
      } else {
        enStudy.comparison[i].example = lvStudy.comparison[i].example;
      }
    }
  }

  if (lvStudy.sectionAccents) {
    if (!enStudy.sectionAccents) enStudy.sectionAccents = {};
    copyDeBranches(lvStudy.sectionAccents, enStudy.sectionAccents);
  }
}

function copyDeBranches(lvNode, enNode) {
  if (!lvNode || !enNode) return;
  if (Array.isArray(lvNode) && Array.isArray(enNode)) {
    for (let i = 0; i < lvNode.length; i++) {
      if (!enNode[i]) enNode[i] = {};
      copyDeBranches(lvNode[i], enNode[i]);
    }
    return;
  }
  if (typeof lvNode !== "object") return;
  for (const [k, v] of Object.entries(lvNode)) {
    if (k === "de") {
      enNode.de = deepClone(v);
    } else if (typeof v === "object" && v !== null) {
      if (!enNode[k]) enNode[k] = Array.isArray(v) ? [] : {};
      copyDeBranches(v, enNode[k]);
    }
  }
}

function replaceInStudyStrings(obj, from, to, inDe = false) {
  if (typeof obj === "string") {
    return obj === from ? to : obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => replaceInStudyStrings(item, from, to, inDe));
  }
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      const childInDe = inDe || k === "de";
      if (childInDe && k !== "lv") {
        out[k] = v;
      } else {
        out[k] = replaceInStudyStrings(v, from, to, childInDe);
      }
    }
    return out;
  }
  return obj;
}

function replaceAccentTerm(obj, from, to, inDe = false) {
  if (typeof obj === "string") {
    return obj === from ? to : obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((t) => (t === from ? to : t));
  }
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      out[k] = k === "de" ? v : replaceAccentTerm(v, from, to, inDe || k === "de");
    }
    return out;
  }
  return obj;
}

function walkReplaceExact(obj, from, to, ctx = { inDe: false }) {
  if (typeof obj === "string") {
    if (!ctx.inDe && obj === from) return to;
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => walkReplaceExact(item, from, to, ctx));
  }
  if (obj && typeof obj === "object") {
    const out = {};
    for (const [k, v] of Object.entries(obj)) {
      const childCtx = { inDe: ctx.inDe || k === "de" || k === "de_article" || k === "de_plural" };
      out[k] = walkReplaceExact(v, from, to, childCtx);
    }
    return out;
  }
  return obj;
}

const DE_DRIFT_DE = [
  "sprechen",
  "klein",
  "auch",
  "bei",
  "bitte",
  "Bitte",
  "bringen",
  "dieser",
  "ein",
  "erst",
  "es",
  "finden",
  "groß",
  "hoch",
];

const ACCENT_MAP = [
  { id: "a1-klein-study", from: "mazs", to: "small" },
  { id: "a1-sagen-study", from: "teikt", to: "say" },
  { id: "a1-um", from: "lai", to: "so that" },
  { id: "a1-was", from: "kas", to: "what" },
  { id: "a1-was", from: "ko", to: "what" },
  { id: "a1-einmal", from: "reiz", to: "once" },
  { id: "a2-klein", from: "mazs", to: "small" },
  { id: "a2-sagen", from: "teikt", to: "say" },
  { id: "a1-fahren", from: "braukt", to: "drive" },
  { id: "a1-fahren", from: "vest", to: "take" },
  { id: "a1-fahren", from: "aizvest", to: "take away" },
  { id: "a1-haben", from: "Latvian", to: "English" },
  { id: "a1-wie", from: "cik daudz", to: "how much" },
  { id: "a1-wie", from: "cik vecs", to: "how old" },
  { id: "a1-wie", from: "cik ilgi", to: "how long" },
  { id: "a2-abgeben", from: "nodots vai atdots", to: "handed over or returned" },
  { id: "a2-bahn", from: "braukt ar vilcienu", to: "travel by train" },
  { id: "a2-etwa", from: "vai tad", to: "or then" },
  { id: "a2-führen", from: "vest", to: "drive" },
];

const log = {
  dePlural: 0,
  missingStudy: 0,
  deDrift: 0,
  missingFields: 0,
  textFixes: 0,
  accents: 0,
};

function main() {
  const lvA1 = loadArray("data/a1.js", "A1_WORDS");
  const lvA2 = loadArray("data/a2.js", "A2_WORDS");
  const enA1 = loadArray("data/en/a1.js", "A1_WORDS");
  const enA2 = loadArray("data/en/a2.js", "A2_WORDS");

  const ownerReview = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-a1-a2-owner-review.json"), "utf8")
  );
  const confirmed = ownerReview.findings.filter((f) => f["Final Status"] === "CONFIRMED REPAIR");

  const missingEnStudies = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-missing-a1-studies-en.json"), "utf8")
  );

  // 1. de_plural
  for (const de of ["Wochenende", "Frühstück"]) {
    const lv = findByDe(lvA1, de);
    const en = findByDe(enA1, de);
    if (lv?.de_plural && en.de_plural !== lv.de_plural) {
      en.de_plural = lv.de_plural;
      log.dePlural++;
    }
  }

  // 2. Missing study cards
  for (const studyEn of missingEnStudies) {
    const lvEntry = findByStudyId(lvA1, studyEn.id);
    if (!lvEntry) {
      console.warn("LV entry not found for", studyEn.id);
      continue;
    }
    const enEntry = findByDe(enA1, lvEntry.de);
    if (!enEntry) {
      console.warn("EN entry not found for de", lvEntry.de);
      continue;
    }
    if (!enEntry.study) {
      enEntry.study = deepClone(studyEn);
      log.missingStudy++;
    }
  }

  // 3. DE drift
  for (const de of DE_DRIFT_DE) {
    const lv = findByDe(lvA1, de);
    const en = findByDe(enA1, de);
    if (lv?.study && en?.study) {
      restoreDeStudyFromLv(en.study, lv.study);
      log.deDrift++;
    }
  }

  // 4. Partial missing fields — bitte, Bitte, ein, es
  function addComparisonFromLv(de) {
    const lv = findByDe(lvA1, de);
    const en = findByDe(enA1, de);
    if (!lv?.study || !en?.study) return;
    if (lv.study.comparison && !en.study.comparison) {
      en.study.comparison = lv.study.comparison.map((c) => ({
        word: c.word,
        meaning: c.meaning,
        example: c.example,
      }));
      // overlay EN meanings from existing EN bitte-study if available
      log.missingFields++;
    }
    if (lv.study.tip?.text && !en.study.tip?.text) {
      if (typeof en.study.tip === "object" && !Array.isArray(en.study.tip)) {
        en.study.tip.text = lv.study.tip.text;
      }
      log.missingFields++;
    }
  }

  // bitte comparison EN overlay
  const bitteEn = findByStudyId(enA1, "a1-bitte-study");
  const bitteLv = findByDe(lvA1, "Bitte");
  const bitteVerbEn = findByStudyId(enA1, "a1-bitte");
  const bitteVerbLv = findByDe(lvA1, "bitte");

  function restoreComparisonAndTip(en, lv, enOverlay) {
    if (!en?.study || !lv?.study) return;
    restoreDeStudyFromLv(en.study, lv.study);
    if (lv.study.comparison) {
      en.study.comparison = lv.study.comparison.map((c, i) => ({
        word: c.word,
        meaning: enOverlay?.comparison?.[i]?.meaning || en.study.comparison?.[i]?.meaning || c.meaning,
        example: enOverlay?.comparison?.[i]?.example ||
          (en.study.comparison?.[i]?.example
            ? en.study.comparison[i].example
            : c.example),
      }));
      log.missingFields++;
    }
    if (lv.study.tip?.text) {
      const tipText = enOverlay?.tip?.text || en.study.tip?.text;
      if (Array.isArray(en.study.tip)) {
        en.study.tip = { text: tipText };
      } else if (typeof en.study.tip === "object") {
        en.study.tip.text = tipText;
      }
      log.missingFields++;
    }
  }

  const bitteOverlay = {
    comparison: [
      { meaning: "please", example: "Komm bitte herein. – Please come in." },
      { meaning: "request", example: "Ich habe eine Bitte. – I have a request." },
    ],
    tip: { text: "Remember: bitte with a lowercase letter means please; die Bitte with a capital letter means a request." },
  };
  restoreComparisonAndTip(bitteVerbEn, bitteVerbLv, bitteOverlay);
  restoreComparisonAndTip(bitteEn, bitteLv, bitteOverlay);

  // ein, es comparison from LV with EN overlay
  const einEn = findByStudyId(enA1, "a1-ein");
  const einLv = findByDe(lvA1, "ein");
  const esEn = findByStudyId(enA1, "a1-es");
  const esLv = findByDe(lvA1, "es");

  if (einEn && einLv?.study?.comparison) {
    restoreDeStudyFromLv(einEn.study, einLv.study);
    if (!einEn.study.comparison) {
      einEn.study.comparison = einLv.study.comparison.map((c) => ({
        word: c.word,
        meaning: c.meaning,
        example: c.example,
      }));
      log.missingFields++;
    }
  }
  if (esEn && esLv?.study?.comparison) {
    restoreDeStudyFromLv(esEn.study, esLv.study);
    if (!esEn.study.comparison) {
      esEn.study.comparison = esLv.study.comparison.map((c) => ({
        word: c.word,
        meaning: c.meaning,
        example: c.example,
      }));
      log.missingFields++;
    }
  }

  // 5. Text fixes from owner review
  for (const f of confirmed) {
    if (!["LV leftover reference", "LV leftover text", "semicolon in study pedagogy"].includes(f.Type)) continue;
    const rec = f["Verified Recommendation"];
    const cur = f.Current;
    if (!rec || !cur || rec === "No change" || rec.startsWith("Restore") || rec.startsWith("Add ")) continue;

    const cardId = f["Card ID"];
    let entry = findByStudyId(enA1, cardId) || findByStudyId(enA2, cardId);
    if (!entry && f.DE) entry = findByDe(enA1, f.DE) || findByDe(enA2, f.DE);
    if (!entry?.study) continue;

    const before = JSON.stringify(entry.study);
    entry.study = walkReplaceExact(entry.study, cur, rec);
    if (JSON.stringify(entry.study) !== before) log.textFixes++;
  }

  // Also fix accents/lv fields on entry level (fahren braukt etc)
  for (const f of confirmed) {
    if (f.Type !== "LV leftover text") continue;
    const cur = f.Current;
    const rec = f["Verified Recommendation"];
    if (!cur || !rec || rec.includes("Rewrite")) continue;
    let entry = findByStudyId(enA1, f["Card ID"]) || findByStudyId(enA2, f["Card ID"]);
    if (!entry && f.DE) entry = findByDe(enA1, f.DE) || findByDe(enA2, f.DE);
    if (!entry) continue;
    const before = JSON.stringify(entry);
    if (entry.study) entry.study = walkReplaceExact(entry.study, cur, rec);
    else entry = walkReplaceExact(entry, cur, rec);
    if (JSON.stringify(entry) !== before) log.textFixes++;
  }

  // 6. Accent term replacements
  for (const { id, from, to } of ACCENT_MAP) {
    const entry = findByStudyId(enA1, id) || findByStudyId(enA2, id);
    if (!entry?.study?.sectionAccents) continue;
    const before = JSON.stringify(entry.study.sectionAccents);
    entry.study.sectionAccents = replaceAccentTerm(entry.study.sectionAccents, from, to);
    if (JSON.stringify(entry.study.sectionAccents) !== before) log.accents++;
  }

  // Fix accents on study.accents too (fahren)
  for (const { id, from, to } of ACCENT_MAP) {
    const entry = findByStudyId(enA1, id) || findByStudyId(enA2, id);
    if (!entry?.study?.accents) continue;
    entry.study.accents = replaceAccentTerm(entry.study.accents, from, to);
    log.accents++;
  }

  // Write files
  fs.writeFileSync(path.join(ROOT, "data/en/a1.js"), serializeWords(enA1, "A1_WORDS"));
  fs.writeFileSync(path.join(ROOT, "data/en/a2.js"), serializeA2(enA2));
  fs.writeFileSync(path.join(ROOT, "www/data/en/a1.js"), serializeWords(enA1, "A1_WORDS"));
  fs.writeFileSync(path.join(ROOT, "www/data/en/a2.js"), serializeA2(enA2));

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-de-repair-log.json"),
    JSON.stringify({ log, enA1Count: enA1.length, enA2Count: enA2.length }, null, 2)
  );
  console.log(JSON.stringify(log, null, 2));
}

main();
