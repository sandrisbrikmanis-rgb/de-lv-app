#!/usr/bin/env node
/**
 * Applies the highlight-gap fixes (automated pattern matches + manual
 * linguistic review) to data/lt/{level}.js and mirrors to www/.
 *
 * Strategy: parse each file with vm, mutate the in-memory array with the
 * fix data, then re-serialize using the EXACT original file's
 * prefix/suffix template (only the array body is replaced via
 * JSON.stringify), guaranteeing a minimal, faithful diff.
 */
const vm = require("vm");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function loadFileParts(file) {
  const raw = fs.readFileSync(path.join(root, file), "utf8");
  const arrStart = raw.indexOf("[");
  const arrEnd = raw.lastIndexOf("]");
  const prefix = raw.slice(0, arrStart);
  const suffix = raw.slice(arrEnd + 1);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(raw, ctx);
  const key = Object.keys(ctx.window)[0];
  return { arr: ctx.window[key], prefix, suffix, key };
}

function writeFileParts(file, parts) {
  const body = JSON.stringify(parts.arr, null, 2);
  fs.writeFileSync(path.join(root, file), parts.prefix + body + parts.suffix);
}

function isEmptyObj(obj) {
  return !obj || (typeof obj === "object" && Object.keys(obj).length === 0);
}

// ---- Reuse the same candidate-matching engine as the dry-run script ----
const LT_PREPOSITIONS = [
  "į", "ant", "po", "per", "prie", "su", "iš", "nuo", "dėl", "apie", "už",
  "prieš", "virš", "tarp", "be", "link", "pro", "ligi", "skersai", "aplink",
  "vietoj", "greta", "šalia", "pas", "ties", "anapus", "šiapus"
];

function collectPurpleCandidates(ltStudy) {
  const set = new Set();
  const addFromAccent = (accent) => {
    if (!accent) return;
    if (Array.isArray(accent)) { accent.forEach(addFromAccent); return; }
    if (typeof accent === "object") {
      if (Array.isArray(accent.purple)) accent.purple.forEach((t) => set.add(t));
      Object.keys(accent).forEach((k) => { if (k !== "blue" && k !== "green" && k !== "red" && k !== "yellow") addFromAccent(accent[k]); });
    }
  };
  const sa = ltStudy.sectionAccents || {};
  addFromAccent(sa.explanation);
  addFromAccent(sa.examples);
  addFromAccent(sa.tip);
  addFromAccent(sa.important);
  if (ltStudy.translation) {
    String(ltStudy.translation).split(/[•,/]/).map((s) => s.trim()).filter(Boolean).forEach((t) => set.add(t));
  }
  return [...set].filter((t) => t && t.length >= 3);
}

function collectBlueCandidates(ltStudy, deBase) {
  const set = new Set();
  const addFromAccent = (accent) => {
    if (!accent) return;
    if (Array.isArray(accent)) { accent.forEach(addFromAccent); return; }
    if (typeof accent === "object") {
      if (Array.isArray(accent.blue)) accent.blue.forEach((t) => set.add(t));
      Object.keys(accent).forEach((k) => { if (k !== "green" && k !== "purple" && k !== "red" && k !== "yellow") addFromAccent(accent[k]); });
    }
  };
  const sa = ltStudy.sectionAccents || {};
  addFromAccent(sa.explanation);
  addFromAccent(sa.examples);
  addFromAccent(sa.tip);
  addFromAccent(sa.important);
  if (deBase) set.add(deBase);
  return [...set].filter(Boolean);
}

function findSubstringMatch(text, candidates) {
  const lowerText = text.toLowerCase();
  let best = null;
  for (const cand of candidates) {
    const idx = lowerText.indexOf(cand.toLowerCase());
    if (idx !== -1) { if (!best || cand.length > best.length) best = cand; }
  }
  return best;
}

function findStemMatch(text, candidates) {
  const words = text.split(/[\s.,!?;:„""()]+/).filter(Boolean);
  let best = null;
  for (const cand of candidates) {
    if (cand.includes(" ")) continue;
    for (let cut = 0; cut <= Math.min(3, cand.length - 3); cut++) {
      const stem = cand.slice(0, cand.length - cut).toLowerCase();
      if (stem.length < 3) continue;
      for (const w of words) {
        if (w.toLowerCase().startsWith(stem)) {
          if (!best || stem.length > best.stemLen) best = { word: w, stemLen: stem.length };
        }
      }
    }
  }
  return best ? best.word : null;
}

function findPrepositionMatch(text) {
  const words = text.split(/[\s.,!?;:„""()]+/).filter(Boolean);
  for (const w of words) { if (LT_PREPOSITIONS.includes(w.toLowerCase())) return w; }
  return null;
}

const NEGATION_HINTS = ["nav", "neviens", "nekas", "nemaz", "ne "];
function findNegationMatch(text, lvHintValues) {
  const isNegationContext = lvHintValues.some((v) => NEGATION_HINTS.some((h) => String(v || "").toLowerCase().includes(h)));
  if (!isNegationContext) return null;
  const words = text.split(/[\s.,!?;:„""()]+/).filter(Boolean);
  const phraseMatch = text.match(/nė\s+vien\w*/i);
  if (phraseMatch) return phraseMatch[0];
  const FALSE_POSITIVE_NE_WORDS = new Set(["nes", "negu", "nebent"]);
  for (const w of words) {
    const lower = w.toLowerCase();
    if (lower.startsWith("ne") && lower.length > 3 && !FALSE_POSITIVE_NE_WORDS.has(lower)) return w;
  }
  return null;
}

function dedupeColors(accObj) {
  if (!accObj || typeof accObj !== "object") return accObj;
  if (Array.isArray(accObj.blue) && Array.isArray(accObj.purple)) {
    const blueSet = new Set(accObj.blue.map((s) => s.toLowerCase()));
    accObj.purple = accObj.purple.filter((s) => !blueSet.has(s.toLowerCase()));
    if (!accObj.purple.length) delete accObj.purple;
  }
  return accObj;
}

function highlightCountOf(node) {
  if (node == null) return 0;
  if (Array.isArray(node)) { let s = 0; for (const it of node) s += typeof it === "string" ? (it.trim() ? 1 : 0) : highlightCountOf(it); return s; }
  if (typeof node === "object") { let s = 0; for (const k of Object.keys(node)) s += highlightCountOf(node[k]); return s; }
  return 0;
}

// ---- Manual overrides for cases the automated matcher could not resolve
//      with confidence. Keyed by "level|de|section|row|field". Each value
//      is the literal LT substring to highlight (verified by hand against
//      the actual LT sentence text during the 2026-07-29 audit fix). ----
const MANUAL_OVERRIDES = require("./lt-highlight-manual-overrides.json");

function manualKey(level, de, section, row, field) {
  return [level, de, section, row, field].join("|");
}

const stats = { autoResolved: 0, manualResolved: 0, unresolved: [] };

for (const lvl of ["a1", "a2", "b1", "b2", "c1", "c2"]) {
  const lv = loadFileParts("data/" + lvl + ".js");
  const lt = loadFileParts("data/lt/" + lvl + ".js");

  for (let i = 0; i < lv.arr.length; i++) {
    const lvC = lv.arr[i], ltC = lt.arr[i];
    if (!lvC.study || !lvC.study.sectionAccents) continue;
    const lvSA = lvC.study.sectionAccents;
    if (!ltC.study.sectionAccents) ltC.study.sectionAccents = {};
    const ltSA = ltC.study.sectionAccents;

    // === examples ===
    if (Array.isArray(lvSA.examples) && Array.isArray(lvC.study.examples) && Array.isArray(ltC.study.examples)) {
      if (!Array.isArray(ltSA.examples)) ltSA.examples = ltC.study.examples.map(() => ({}));
      const realLen = Math.min(lvSA.examples.length, lvC.study.examples.length, ltC.study.examples.length);
      for (let j = 0; j < realLen; j++) {
        const lvRow = lvSA.examples[j] || {};
        if (!ltSA.examples[j]) ltSA.examples[j] = {};
        const ltRow = ltSA.examples[j];
        const ltDeText = ltC.study.examples[j]?.de || "";
        const ltLvText = ltC.study.examples[j]?.lv || "";

        if (!isEmptyObj(lvRow.de) && isEmptyObj(ltRow.de)) {
          const blueCandidates = collectBlueCandidates(ltC.study, lvC.de);
          let match = findSubstringMatch(ltDeText, blueCandidates) || findStemMatch(ltDeText, blueCandidates);
          const mk = manualKey(lvl, lvC.de, "examples", j, "de");
          if (!match && MANUAL_OVERRIDES[mk]) { match = MANUAL_OVERRIDES[mk]; stats.manualResolved++; }
          else if (match) stats.autoResolved++;
          if (match) ltRow.de = { blue: [match] };
          else stats.unresolved.push({ ...mk && {}, level: lvl, de: lvC.de, section: "examples", row: j, field: "de", text: ltDeText });
        }

        if (!isEmptyObj(lvRow.lv) && isEmptyObj(ltRow.lv)) {
          const purpleCandidates = collectPurpleCandidates(ltC.study);
          let match = findSubstringMatch(ltLvText, purpleCandidates)
            || findStemMatch(ltLvText, purpleCandidates)
            || findPrepositionMatch(ltLvText)
            || findNegationMatch(ltLvText, Object.values(lvRow.lv).flat());
          const mk = manualKey(lvl, lvC.de, "examples", j, "lv");
          if (!match && MANUAL_OVERRIDES[mk]) { match = MANUAL_OVERRIDES[mk]; stats.manualResolved++; }
          else if (match) stats.autoResolved++;
          if (match) ltRow.lv = { purple: [match] };
          else stats.unresolved.push({ level: lvl, de: lvC.de, section: "examples", row: j, field: "lv", text: ltLvText });
        }
      }
    }

    // === tip ===
    if (lvSA.tip && ltC.study.tip && highlightCountOf(lvSA.tip) > 0 && highlightCountOf(ltSA.tip) === 0) {
      const tip = ltC.study.tip;
      const purpleCandidates = collectPurpleCandidates(ltC.study);
      const blueCandidates = collectBlueCandidates(ltC.study, lvC.de);
      const mk = manualKey(lvl, lvC.de, "tip", 0, "tip");

      if (Array.isArray(tip.leftBlocks)) {
        const blocks = [];
        let anyMatch = false;
        tip.leftBlocks.forEach((block, idx) => {
          const text = String(block.text || "");
          let purpleMatch = findSubstringMatch(text, purpleCandidates) || findStemMatch(text, purpleCandidates) || findPrepositionMatch(text);
          let blueMatch = findSubstringMatch(text, blueCandidates) || findStemMatch(text, blueCandidates);
          const override = MANUAL_OVERRIDES[manualKey(lvl, lvC.de, "tip", idx, "tip")];
          if (override) { if (override.blue) blueMatch = override.blue; if (override.purple) purpleMatch = override.purple; stats.manualResolved++; }
          else if (purpleMatch || blueMatch) stats.autoResolved++;
          const acc = { text: {} };
          if (blueMatch) acc.text.blue = [blueMatch];
          if (purpleMatch) acc.text.purple = [purpleMatch];
          dedupeColors(acc.text);
          if (blueMatch || purpleMatch) anyMatch = true;
          blocks.push(acc);
        });
        if (anyMatch) ltSA.tip = { leftBlocks: blocks };
        else stats.unresolved.push({ level: lvl, de: lvC.de, section: "tip", shape: "leftBlocks" });
      } else if (Array.isArray(tip)) {
        const lines = [];
        let anyMatch = false;
        tip.forEach((line, idx) => {
          const text = String(line || "");
          let purpleMatch = findSubstringMatch(text, purpleCandidates) || findStemMatch(text, purpleCandidates) || findPrepositionMatch(text);
          let blueMatch = findSubstringMatch(text, blueCandidates) || findStemMatch(text, blueCandidates);
          const override = MANUAL_OVERRIDES[manualKey(lvl, lvC.de, "tip", idx, "tip")];
          if (override) { if (override.blue) blueMatch = override.blue; if (override.purple) purpleMatch = override.purple; stats.manualResolved++; }
          else if (purpleMatch || blueMatch) stats.autoResolved++;
          const acc = {};
          if (blueMatch) acc.blue = [blueMatch];
          if (purpleMatch) acc.purple = [purpleMatch];
          dedupeColors(acc);
          if (blueMatch || purpleMatch) anyMatch = true;
          lines.push(acc);
        });
        if (anyMatch) ltSA.tip = lines;
        else stats.unresolved.push({ level: lvl, de: lvC.de, section: "tip", shape: "array" });
      } else {
        const tipText = String(tip.left || tip.text || "");
        let purpleMatch = findSubstringMatch(tipText, purpleCandidates) || findStemMatch(tipText, purpleCandidates) || findPrepositionMatch(tipText);
        let blueMatch = findSubstringMatch(tipText, blueCandidates) || findStemMatch(tipText, blueCandidates);
        const override = MANUAL_OVERRIDES[mk];
        if (override) { if (override.blue) blueMatch = override.blue; if (override.purple) purpleMatch = override.purple; stats.manualResolved++; }
        else if (purpleMatch || blueMatch) stats.autoResolved++;
        if (purpleMatch || blueMatch) {
          const acc = {};
          if (blueMatch) acc.blue = [blueMatch];
          if (purpleMatch) acc.purple = [purpleMatch];
          dedupeColors(acc);
          ltSA.tip = { left: acc };
        } else {
          stats.unresolved.push({ level: lvl, de: lvC.de, section: "tip", shape: "left/text" });
        }
      }
    }

    // === important ===
    if (Array.isArray(lvSA.important) && Array.isArray(lvC.study.important) && Array.isArray(ltC.study.important)) {
      if (!Array.isArray(ltSA.important)) ltSA.important = ltC.study.important.map(() => ({}));
      const realLen = Math.min(lvSA.important.length, lvC.study.important.length, ltC.study.important.length);
      for (let j = 0; j < realLen; j++) {
        const lvRow = lvSA.important[j] || {};
        if (!ltSA.important[j]) ltSA.important[j] = {};
        const ltRow = ltSA.important[j];
        if (!isEmptyObj(lvRow) && isEmptyObj(ltRow)) {
          const impText = String(ltC.study.important[j] || "");
          const purpleCandidates = collectPurpleCandidates(ltC.study);
          const blueCandidates = collectBlueCandidates(ltC.study, lvC.de);
          let purpleMatch = findSubstringMatch(impText, purpleCandidates) || findStemMatch(impText, purpleCandidates);
          let blueMatch = findSubstringMatch(impText, blueCandidates) || findStemMatch(impText, blueCandidates);
          const mk = manualKey(lvl, lvC.de, "important", j, "important");
          const override = MANUAL_OVERRIDES[mk];
          if (override) { if (override.blue) blueMatch = override.blue; if (override.purple) purpleMatch = override.purple; stats.manualResolved++; }
          else if (purpleMatch || blueMatch) stats.autoResolved++;
          if (purpleMatch || blueMatch) {
            if (blueMatch) ltRow.blue = [blueMatch];
            if (purpleMatch) ltRow.purple = [purpleMatch];
            dedupeColors(ltRow);
          } else {
            stats.unresolved.push({ level: lvl, de: lvC.de, section: "important", row: j, text: impText });
          }
        }
      }
    } else if (
      lvSA.important && typeof lvSA.important === "object" && !Array.isArray(lvSA.important) &&
      highlightCountOf(lvSA.important) > 0 &&
      lvC.study.important && typeof lvC.study.important === "object" && !Array.isArray(lvC.study.important) &&
      ltC.study.important && typeof ltC.study.important === "object" && !Array.isArray(ltC.study.important) &&
      highlightCountOf(ltSA.important) === 0
    ) {
      // important as flat { text } object with a flat accent object (no array wrapper, no text/example split).
      const fieldText = String(ltC.study.important.text || ltC.study.important.example || "");
      const purpleCandidates = collectPurpleCandidates(ltC.study);
      const blueCandidates = collectBlueCandidates(ltC.study, lvC.de);
      let purpleMatch = findSubstringMatch(fieldText, purpleCandidates) || findStemMatch(fieldText, purpleCandidates);
      let blueMatch = findSubstringMatch(fieldText, blueCandidates) || findStemMatch(fieldText, blueCandidates);
      const mk = manualKey(lvl, lvC.de, "important-flat", 0, "text");
      const override = MANUAL_OVERRIDES[mk];
      if (override && override._fullAccent) {
        ltSA.important = override._fullAccent;
        stats.manualResolved++;
      } else {
        if (override) { if (override.blue) blueMatch = override.blue; if (override.purple) purpleMatch = override.purple; stats.manualResolved++; }
        else if (purpleMatch || blueMatch) stats.autoResolved++;
        if (purpleMatch || blueMatch) {
          const acc = {};
          if (blueMatch) acc.blue = [blueMatch];
          if (purpleMatch) acc.purple = [purpleMatch];
          dedupeColors(acc);
          ltSA.important = acc;
        } else {
          stats.unresolved.push({ level: lvl, de: lvC.de, section: "important-flat", text: fieldText });
        }
      }
    } else if (
      Array.isArray(lvSA.important) && lvSA.important.length &&
      lvC.study.important && typeof lvC.study.important === "object" && !Array.isArray(lvC.study.important) &&
      ltC.study.important && typeof ltC.study.important === "object" && !Array.isArray(ltC.study.important)
    ) {
      // important as { text, example } object -> sectionAccents.important[0] = { text: {...}, example: {...} }
      const lvEntry = lvSA.important[0] || {};
      if (!Array.isArray(ltSA.important) || !ltSA.important[0]) ltSA.important = [{}];
      const ltEntry = ltSA.important[0];
      for (const field of ["text", "example"]) {
        if (!isEmptyObj(lvEntry[field]) && isEmptyObj(ltEntry[field])) {
          const fieldText = String(ltC.study.important[field] || "");
          const purpleCandidates = collectPurpleCandidates(ltC.study);
          const blueCandidates = collectBlueCandidates(ltC.study, lvC.de);
          let purpleMatch = findSubstringMatch(fieldText, purpleCandidates) || findStemMatch(fieldText, purpleCandidates);
          let blueMatch = findSubstringMatch(fieldText, blueCandidates) || findStemMatch(fieldText, blueCandidates);
          const mk = manualKey(lvl, lvC.de, "important-obj", 0, field);
          const override = MANUAL_OVERRIDES[mk];
          if (override && override._fullAccent) {
            ltEntry[field] = override._fullAccent;
            stats.manualResolved++;
            continue;
          }
          if (override) { if (override.blue) blueMatch = override.blue; if (override.purple) purpleMatch = override.purple; stats.manualResolved++; }
          else if (purpleMatch || blueMatch) stats.autoResolved++;
          if (purpleMatch || blueMatch) {
            const acc = {};
            if (blueMatch) acc.blue = [blueMatch];
            if (purpleMatch) acc.purple = [purpleMatch];
            dedupeColors(acc);
            ltEntry[field] = acc;
          } else {
            stats.unresolved.push({ level: lvl, de: lvC.de, section: "important-obj", field, text: fieldText });
          }
        }
      }
    }
  }

  writeFileParts("data/lt/" + lvl + ".js", lt);
}

console.log("Auto-resolved:", stats.autoResolved);
console.log("Manual-resolved:", stats.manualResolved);
console.log("Unresolved:", stats.unresolved.length);
fs.writeFileSync("/tmp/apply-unresolved.json", JSON.stringify(stats.unresolved, null, 1));
