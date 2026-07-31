#!/usr/bin/env node
/**
 * Fix LV-DE sectionAccents highlight terms that don't match section text.
 * Visual framing only — does not change explanation/example/comparison content.
 *
 * Strategy mirrors fix-et-highlight-mismatches.js:
 * - Replace accent terms with actual inflected forms found in section text
 * - Drop only terms with no safe match (currently non-rendering)
 * - Reshape tip accent structures when needed
 *
 * Run: node scripts/fix-lv-section-accents.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const DRY_RUN = process.argv.includes("--dry-run");
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

const LV_FILES = [
  ["data/a1.js", "A1_WORDS"],
  ["data/a2.js", "A2_WORDS"],
  ["data/b1.js", "B1_WORDS"],
  ["data/b2.js", "B2_WORDS"],
  ["data/c1.js", "C1_WORDS"],
  ["data/c2.js", "C2_WORDS"],
  ["data/sentences.js", "SENTENCE_ENTRIES"],
];

function loadFileParts(relPath, varName) {
  const raw = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const startMarker = `const ${varName} = `;
  const startIdx = raw.indexOf(startMarker);
  if (startIdx === -1) throw new Error(`marker not found: ${relPath}`);
  const jsonStart = startIdx + startMarker.length;
  const windowIdx = raw.indexOf(`window.${varName}`);
  const jsonEnd = raw.lastIndexOf(";", windowIdx);
  const prefix = raw.slice(0, jsonStart);
  const suffix = raw.slice(jsonEnd);
  const arr = JSON.parse(raw.slice(jsonStart, jsonEnd));
  return { arr, prefix, suffix, varName };
}

function writeFileParts(relPath, parts) {
  const body = JSON.stringify(parts.arr, null, 2);
  const content = parts.prefix + body + parts.suffix;
  fs.writeFileSync(path.join(ROOT, relPath), content, "utf8");
  const wwwPath = relPath.replace(/^data\//, "www/data/");
  if (fs.existsSync(path.dirname(path.join(ROOT, wwwPath)))) {
    fs.writeFileSync(path.join(ROOT, wwwPath), content, "utf8");
  }
}

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
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegex(stem)}[\\p{L}\\p{N}_]*`, "iu").test(String(text));
  } catch { return false; }
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
    if (m && m[0].length >= term.length) return m[0];
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
    const rows = index !== null
      ? asArray(Array.isArray(source) ? source[index] : source)
      : asArray(source);
    rows.forEach(push);
    return texts;
  }
  if (sectionKey === "info") { asArray(study.info).forEach(push); return texts; }
  return texts;
}
function validatorStemMatch(text, term) {
  if (!text || !term || term.length < 4) return false;
  const stem = String(term).replace(/(?:en|ern|eln)$/i, "");
  if (stem.length < 3) return false;
  try {
    return new RegExp(boundaryPattern(stem) + "[\\p{L}\\p{N}_]*", "iu").test(String(text));
  } catch { return false; }
}
function validatorTermMatches(text, term) {
  if (!text || !term) return false;
  if (matchesTerm(text, term) || validatorStemMatch(text, term)) return true;
  if (extendedForm(text, term) || substringMatch(text, term)) return true;
  return false;
}
function accentTermMatches(study, sectionKey, index, field, term) {
  const texts = collectSectionTexts(study, sectionKey, index, field);
  const blob = texts.join("\n");
  if (validatorTermMatches(blob, term)) return true;
  for (const text of texts) {
    if (validatorTermMatches(text, term)) return true;
  }
  return false;
}

function germanStemCandidates(term) {
  const candidates = [];
  const t = String(term);
  if (t.length >= 4) {
    if (/en$/i.test(t)) candidates.push(t.replace(/en$/i, "e"), t.replace(/en$/i, "t"), t.replace(/en$/i, ""));
    if (/ern$/i.test(t)) candidates.push(t.replace(/ern$/i, "e"));
    const articleMatch = t.match(/^(der|die|das)\s+(.+)$/i);
    if (articleMatch) candidates.push(articleMatch[2]);
  }
  return [...new Set(candidates.filter((c) => c && c.length >= 3))];
}

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
  return String(text || "").split(/[\s.,!?;:„"“”()«»\-–—=]+/).filter(Boolean);
}
function wordsFromText(text) {
  return tokenize(text).filter((w) => /[\p{L}\p{N}_]/u.test(w) && w.length >= 2);
}

function lvInflectionCandidates(term) {
  const candidates = [String(term)];
  const t = String(term);
  if (t.length >= 4 && /[aeiouāēīōū]/.test(t)) {
    const stem = t.replace(/[saiu]$/, "");
    if (stem.length >= 3) {
      candidates.push(`${stem}s`, `${stem}u`, `${stem}ā`, `${stem}i`, `${stem}us`, `${stem}iem`, `${stem}am`);
    }
  }
  if (t.length >= 5 && t.endsWith("t")) {
    const stem = t.slice(0, -1);
    candidates.push(`${stem}u`, `${stem}ot`, `${stem}oties`);
  }
  if (t.length >= 5 && t.endsWith("ties")) {
    const stem = t.slice(0, -4);
    candidates.push(`${stem}ties`, `${stem}tos`, `${stem}t`);
  }
  return [...new Set(candidates)];
}

function findFuzzyWordMatch(text, term) {
  if (!term || term.length < 3) return null;
  const words = wordsFromText(text);
  const termLower = term.toLowerCase();
  for (const w of words) {
    if (w.toLowerCase() === termLower) return w;
  }
  let best = null;
  let bestDist = Infinity;
  for (const w of words) {
    const wLower = w.toLowerCase();
    const lenDiff = Math.abs(wLower.length - termLower.length);
    if (lenDiff > 4) continue;
    const dist = levenshtein(wLower, termLower);
    const maxAllowed = Math.max(1, Math.floor(Math.min(wLower.length, termLower.length) * 0.45));
    if (dist <= maxAllowed && dist < bestDist) { bestDist = dist; best = w; }
  }
  return best;
}

function findReplacementInTexts(texts, term) {
  for (const text of texts) {
    const ext = extendedForm(text, term);
    if (ext) return ext;
    const sub = substringMatch(text, term);
    if (sub) return sub;
  }
  for (const candidate of [...lvInflectionCandidates(term), ...germanStemCandidates(term)]) {
    for (const text of texts) {
      if (validatorTermMatches(text, candidate)) {
        const sub = substringMatch(text, candidate);
        if (sub) return sub;
        if (matchesTerm(text, candidate)) {
          const m = String(text).match(new RegExp(boundaryPattern(candidate), "iu"));
          if (m) return m[0];
        }
        const fuzzy = findFuzzyWordMatch(text, candidate);
        if (fuzzy && validatorTermMatches(text, fuzzy)) return fuzzy;
      }
    }
  }
  for (const text of texts) {
    const fuzzy = findFuzzyWordMatch(text, term);
    if (fuzzy) return fuzzy;
  }
  if (term.includes(" ")) {
    const parts = term.split(/\s+/).filter(Boolean);
    const resolved = parts.map((p) => {
      for (const text of texts) {
        const f = findFuzzyWordMatch(text, p);
        if (f) return f;
        const s = substringMatch(text, p);
        if (s) return s;
        for (const gc of germanStemCandidates(p)) {
          const gf = findFuzzyWordMatch(text, gc);
          if (gf) return gf;
        }
      }
      return p;
    });
    const candidate = resolved.join(" ");
    if (candidate !== term) return candidate;
  }
  return null;
}

function resolveReplacement(study, sectionKey, index, field, term) {
  const texts = collectSectionTexts(study, sectionKey, index, field);
  const replacement = findReplacementInTexts(texts, term);
  if (!replacement) return null;
  if (accentTermMatches(study, sectionKey, index, field, replacement)) return replacement;
  for (const text of texts) {
    const sub = substringMatch(text, replacement);
    if (sub && accentTermMatches(study, sectionKey, index, field, sub)) return sub;
  }
  return null;
}

function trimOrphanedPadding(study) {
  const sa = study.sectionAccents;
  if (!sa) return;
  for (const key of ["examples", "important", "comparison"]) {
    if (Array.isArray(sa[key]) && Array.isArray(study[key]) && sa[key].length > study[key].length) {
      sa[key] = sa[key].slice(0, study[key].length);
    }
  }
}

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

for (const [relPath, varName] of LV_FILES) {
  if (!fs.existsSync(path.join(ROOT, relPath))) continue;
  const file = loadFileParts(relPath, varName);

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
        const seen = new Set();
        for (const rawTerm of accentMap[color]) {
          const term = String(rawTerm || "").trim();
          if (!term) continue;
          stats.total++;
          let resolved = term;
          if (accentTermMatches(study, sectionKey, index, field, term)) {
            nextTerms.push(term);
            seen.add(`${color}:${fold(term)}`);
            continue;
          }
          const replacement = resolveReplacement(study, sectionKey, index, field, term);
          if (replacement) {
            resolved = replacement;
            stats.autoFixed++;
          } else {
            stats.dropped++;
            if (unresolvedSample.length < 50) {
              unresolvedSample.push({ file: relPath, de: card.de, section: sectionKey, index, field, term });
            }
            continue;
          }
          const key = `${color}:${fold(resolved)}`;
          if (seen.has(key)) continue;
          seen.add(key);
          nextTerms.push(resolved);
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

console.log(JSON.stringify({
  dryRun: DRY_RUN,
  reshaped: stats.reshaped,
  total: stats.total,
  autoFixed: stats.autoFixed,
  dropped: stats.dropped,
  unresolvedSampleCount: unresolvedSample.length,
}, null, 2));
fs.writeFileSync(path.join(ROOT, "audits_and_reports/lv-section-accents-fix-unresolved.json"), JSON.stringify(unresolvedSample, null, 2));
