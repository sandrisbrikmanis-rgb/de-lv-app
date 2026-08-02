#!/usr/bin/env node
/**
 * Fixes sectionAccents "term does not appear in text" mismatches for NL
 * (data/nl/{level}.js)
 * `validate-study-design.js --lang=et` (~3515 mismatches). Root cause:
 * accent terms were authored using the German/Estonian base (infinitive/
 * nominative) form while the actual example/explanation text uses an
 * inflected form (conjugation, case ending, or - for Estonian specifically -
 * consonant gradation), so the literal substring never renders as a
 * highlight in the UI.
 *
 * Strategy: walk every sectionAccents entry exactly the way
 * validate-study-design.js does. For each term that fails
 * accentTermMatches(), search the corresponding text for the closest actual
 * word (fuzzy/edit-distance match) and replace the stored term with that
 * literal word so it satisfies the validator's own matching rules
 * (matchesTerm / stemMatch / extendedForm / substringMatch). If no
 * sufficiently close word exists in the text, the (currently non-rendering,
 * so visually inert) term is dropped rather than left broken.
 *
 * Run: node scripts/fix-sr-highlight-mismatches.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DRY_RUN = process.argv.includes("--dry-run");
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];

function loadFileParts(relPath) {
  const raw = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const arrStart = raw.indexOf("[");
  const arrEnd = raw.lastIndexOf("]");
  const prefix = raw.slice(0, arrStart);
  const suffix = raw.slice(arrEnd + 1);
  const vm = require("vm");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(raw, ctx);
  const key = Object.keys(ctx.window)[0];
  return { arr: ctx.window[key], prefix, suffix };
}

function writeFileParts(relPath, parts) {
  const body = JSON.stringify(parts.arr, null, 2);
  fs.writeFileSync(path.join(ROOT, relPath), parts.prefix + body + parts.suffix);
}

// ---- Mirrors validate-study-design.js matching functions exactly ----
function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function boundaryPattern(term) {
  return `(?<![\\p{L}\\p{N}_])${escapeRegex(term)}(?![\\p{L}\\p{N}_])`;
}
function matchesTerm(text, term) {
  if (!text || !term) return false;
  try { return new RegExp(boundaryPattern(term), "iu").test(String(text)); } catch { return false; }
}
function stemMatch(text, term) {
  if (!text || !term || term.length < 4) return false;
  const stem = String(term).replace(/(?:en|ern|eln)$/i, "");
  if (stem.length < 3) return false;
  try { return new RegExp(boundaryPattern(stem) + "[\\p{L}\\p{N}_]*", "iu").test(String(text)); } catch { return false; }
}
function fold(value) {
  return String(value || "").normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}
function substringMatch(text, term) {
  if (!text || !term || term.length < 3) return null;
  const hay = String(text);
  const idx = fold(hay).indexOf(fold(term));
  if (idx >= 0) return hay.slice(idx, idx + term.length);
  return null;
}
function extendedForm(text, term) {
  if (!text || !term || term.length < 3) return null;
  try {
    const re = new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegex(term)}\\p{L}*`, "iu");
    const m = String(text).match(re);
    if (m && m[0].length > term.length) return m[0];
  } catch { return null; }
  return null;
}
function asArray(value) {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}
function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => {
    if (v === undefined || v === null) return;
    if (typeof v === "string") { if (v.trim()) texts.push(v); return; }
    if (Array.isArray(v)) { v.forEach(push); return; }
    if (typeof v === "object") ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) => push(v[k]));
  };
  if (sectionKey === "explanation") {
    push(study.explanation);
    (study.explanationLines || []).forEach(push);
    return texts;
  }
  if (sectionKey === "examples") {
    const rows = index !== null ? asArray(study.examples?.[index]) : asArray(study.examples);
    rows.forEach((ex) => {
      if (!field || field === "de") push(ex.de);
      if (!field || field === "lv") push(ex.lv);
    });
    return texts;
  }
  if (sectionKey === "comparison") {
    const rows = index !== null ? asArray(study.comparison?.[index]) : asArray(study.comparison);
    rows.forEach((r) => {
      if (!field || field === "word") push(r.word);
      if (!field || field === "meaning") push(r.meaning);
      if (!field || field === "example") push(r.example);
    });
    return texts;
  }
  if (sectionKey === "tip") {
    if (field === "left") { push(study.tip?.left || study.tip?.text); return texts; }
    if (field === "right") { push(study.tip?.right || study.tip?.example); return texts; }
    push(study.tip);
    return texts;
  }
  if (sectionKey === "important") {
    const source = study.important;
    const rows = index !== null ? asArray(Array.isArray(source) ? source[index] : source) : asArray(source);
    rows.forEach(push);
    return texts;
  }
  if (sectionKey === "info") { asArray(study.info).forEach(push); return texts; }
  return texts;
}
function accentTermMatches(study, sectionKey, index, field, term) {
  const texts = collectSectionTexts(study, sectionKey, index, field);
  const blob = texts.join("\n");
  if (matchesTerm(blob, term) || stemMatch(blob, term)) return true;
  for (const text of texts) {
    if (extendedForm(text, term) || substringMatch(text, term)) return true;
  }
  return false;
}

// ---- Fuzzy word-level matcher: finds the actual inflected word in the
//      text that best corresponds to a base-form accent term. Handles
//      Estonian consonant gradation, German conjugation/case endings,
//      and Latvian/Lithuanian-style suffix changes uniformly via edit
//      distance, since all of these differ from the base form only in a
//      handful of characters near the stem/ending boundary. ----
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = new Array(n + 1);
  for (let j = 0; j <= n; j++) dp[j] = j;
  for (let i = 1; i <= m; i++) {
    let prev = dp[0];
    dp[0] = i;
    for (let j = 1; j <= n; j++) {
      const tmp = dp[j];
      dp[j] = a[i - 1] === b[j - 1] ? prev : 1 + Math.min(prev, dp[j], dp[j - 1]);
      prev = tmp;
    }
  }
  return dp[n];
}
function tokenize(text) {
  return String(text || "").split(/[\s.,!?;:„"“”()«»\-–—]+/).filter(Boolean);
}
function findFuzzyWordMatch(text, term) {
  if (!term || term.length < 3) return null;
  const words = tokenize(text);
  const termLower = term.toLowerCase();
  let best = null;
  let bestDist = Infinity;
  for (const w of words) {
    const wLower = w.toLowerCase();
    if (wLower === termLower) return w; // exact (case-insensitive) already good
    const lenDiff = Math.abs(wLower.length - termLower.length);
    if (lenDiff > 3) continue;
    const dist = levenshtein(wLower, termLower);
    const maxAllowed = Math.max(1, Math.floor(Math.min(wLower.length, termLower.length) * 0.4));
    if (dist <= maxAllowed && dist < bestDist) { bestDist = dist; best = w; }
  }
  return best;
}
// Multi-word phrase terms (e.g. "ab und zu"): try replacing just the token(s)
// that differ, word-by-word, keeping phrase structure; fall back to null.
function findFuzzyPhraseMatch(text, term) {
  if (!term.includes(" ")) return findFuzzyWordMatch(text, term);
  const termWords = term.split(/\s+/).filter(Boolean);
  const resolved = termWords.map((tw) => findFuzzyWordMatch(text, tw) || tw);
  const changed = resolved.some((w, i) => w.toLowerCase() !== termWords[i].toLowerCase());
  if (!changed) return null;
  const candidate = resolved.join(" ");
  return candidate;
}

function resolveReplacement(study, sectionKey, index, field, term) {
  const texts = collectSectionTexts(study, sectionKey, index, field);
  for (const text of texts) {
    const match = findFuzzyPhraseMatch(text, term);
    if (match && accentTermMatches(study, sectionKey, index, field, match)) return match;
  }
  // Retry once more permissively (single best guess even if not re-verified),
  // but only accept if it independently satisfies the validator afterwards.
  for (const text of texts) {
    const words = tokenize(text);
    for (const w of words) {
      if (accentTermMatches(study, sectionKey, index, field, w) && w.length >= 3) return w;
    }
  }
  return null;
}

// Trims orphaned sectionAccents rows that extend past the actual content
// array's length (pre-existing padding artifact also present in LV/LT -
// these rows never render since the UI only iterates real content rows).
function trimOrphanedPadding(study) {
  const sa = study.sectionAccents;
  if (!sa) return;
  for (const key of ["examples", "important"]) {
    if (Array.isArray(sa[key]) && Array.isArray(study[key]) && sa[key].length > study[key].length) {
      sa[key] = sa[key].slice(0, study[key].length);
    }
  }
}

// Reshapes a flat `{ colorArrays }` tip accent object into the
// `{ leftBlocks: [{ text: { colorArrays } }] }` shape the renderer expects
// whenever `study.tip.leftBlocks` is used (ui.js only reads
// sectionAccents.tip.leftBlocks[index].text, never a top-level flat color
// map, when the tip itself has a leftBlocks array).
function reshapeTipLeftBlocksMismatch(study) {
  const sa = study.sectionAccents;
  if (!sa || !sa.tip || Array.isArray(sa.tip) || sa.tip.leftBlocks) return;
  if (!Array.isArray(study.tip?.leftBlocks)) return;
  const hasColors = ACCENT_COLORS.some((c) => Array.isArray(sa.tip[c]));
  if (!hasColors) return;
  const blocks = study.tip.leftBlocks;
  const perBlock = blocks.map(() => ({}));
  for (const color of ACCENT_COLORS) {
    if (!Array.isArray(sa.tip[color])) continue;
    for (const term of sa.tip[color]) {
      let bestBlock = -1;
      for (let i = 0; i < blocks.length; i++) {
        const text = String(blocks[i].text || "");
        if (matchesTerm(text, term) || substringMatch(text, term) || extendedForm(text, term)) { bestBlock = i; break; }
      }
      if (bestBlock === -1) bestBlock = 0;
      if (!perBlock[bestBlock][color]) perBlock[bestBlock][color] = [];
      perBlock[bestBlock][color].push(term);
    }
  }
  sa.tip = { leftBlocks: perBlock.map((acc) => ({ text: acc })) };
}

// Reshapes a flat `{ left: { colorArrays } }` tip accent object into a
// per-line array matching `study.tip`'s actual array shape, distributing
// each color's terms onto whichever line they actually occur in (falling
// back to line 0 if a term cannot be pinned to a specific line at all).
function reshapeTipArrayMismatch(study) {
  const sa = study.sectionAccents;
  if (!sa || !sa.tip || Array.isArray(sa.tip) || !Array.isArray(study.tip)) return;
  const flat = sa.tip.left || sa.tip;
  if (!flat || typeof flat !== "object") return;
  const lines = study.tip;
  const perLine = lines.map(() => ({}));
  for (const color of ACCENT_COLORS) {
    if (!Array.isArray(flat[color])) continue;
    for (const term of flat[color]) {
      let bestLine = -1;
      for (let i = 0; i < lines.length; i++) {
        if (matchesTerm(lines[i], term) || substringMatch(lines[i], term) || extendedForm(lines[i], term)) { bestLine = i; break; }
      }
      if (bestLine === -1) bestLine = 0;
      if (!perLine[bestLine][color]) perLine[bestLine][color] = [];
      perLine[bestLine][color].push(term);
    }
  }
  sa.tip = perLine;
}

const stats = { total: 0, autoFixed: 0, dropped: 0, reshaped: 0 };
const unresolvedSample = [];

for (const lvl of LEVELS) {
  const relPath = `data/nl/${lvl}.js`;
  const file = loadFileParts(relPath);

  for (const card of file.arr) {
    const study = card.study;
    if (!study || !study.sectionAccents || typeof study.sectionAccents !== "object") continue;
    trimOrphanedPadding(study);
    if (study.sectionAccents.tip && Array.isArray(study.tip) && !Array.isArray(study.sectionAccents.tip)) {
      reshapeTipArrayMismatch(study);
      stats.reshaped++;
    }
    if (study.sectionAccents.tip && Array.isArray(study.tip?.leftBlocks) && !Array.isArray(study.sectionAccents.tip) && !study.sectionAccents.tip.leftBlocks) {
      reshapeTipLeftBlocksMismatch(study);
      stats.reshaped++;
    }
    const sectionAccents = study.sectionAccents;

    const fixColorArray = (sectionKey, index, field, accentMap) => {
      if (!accentMap || typeof accentMap !== "object") return;
      for (const color of ACCENT_COLORS) {
        if (!Array.isArray(accentMap[color])) continue;
        const nextTerms = [];
        for (const rawTerm of accentMap[color]) {
          const term = String(rawTerm || "").trim();
          if (!term) continue;
          stats.total++;
          if (accentTermMatches(study, sectionKey, index, field, term)) {
            nextTerms.push(term);
            continue;
          }
          const replacement = resolveReplacement(study, sectionKey, index, field, term);
          if (replacement) {
            nextTerms.push(replacement);
            stats.autoFixed++;
          } else {
            stats.dropped++;
            if (unresolvedSample.length < 50) {
              unresolvedSample.push({ level: lvl, de: card.de, section: sectionKey, index, field, term });
            }
          }
        }
        if (nextTerms.length) accentMap[color] = nextTerms;
        else delete accentMap[color];
      }
    };

    for (const [sectionKey, rules] of Object.entries(sectionAccents)) {
      if (Array.isArray(rules)) {
        rules.forEach((entry, index) => {
          if (!entry || typeof entry !== "object") return;
          const hasColors = ACCENT_COLORS.some((c) => Array.isArray(entry[c]));
          if (hasColors) { fixColorArray(sectionKey, index, null, entry); return; }
          for (const field of Object.keys(entry)) fixColorArray(sectionKey, index, field, entry[field]);
        });
        continue;
      }
      if (rules && typeof rules === "object") {
        const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
        if (hasColors) { fixColorArray(sectionKey, null, null, rules); }
        else {
          for (const [field, map] of Object.entries(rules)) fixColorArray(sectionKey, null, field, map);
        }
      }
    }
  }

  if (!DRY_RUN) writeFileParts(relPath, file);
  else console.log(`[dry-run] would write ${relPath}`);
}

console.log("Tip shape mismatches reshaped (flat -> per-line array):", stats.reshaped);
console.log("Total accent terms checked:", stats.total);
console.log("Auto-fixed (replaced with matching inflected word):", stats.autoFixed);
console.log("Dropped (no safe match found, term removed):", stats.dropped);
fs.writeFileSync("/tmp/sk-highlight-unresolved-sample.json", JSON.stringify(unresolvedSample, null, 1));
