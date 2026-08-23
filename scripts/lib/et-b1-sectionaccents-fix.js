"use strict";
/**
 * ET–DE B1 sectionAccents deterministic fix (sync terms with Study ET text).
 * Adapted from apply-et-a2-sectionaccents-micro-repair.js — B1_WORDS only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./audit-common");

const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];
const B1_FILES = [
  path.join(ROOT, "data/et/b1.js"),
  path.join(ROOT, "www/data/et/b1.js"),
];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const B1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.B1_WORDS = B1_WORDS;\n`,
    "utf8",
  );
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function boundaryPattern(term) {
  return `(?<![\\p{L}\\p{N}_])${escapeRegex(term)}(?![\\p{L}\\p{N}_])`;
}
function matchesTerm(text, term) {
  if (!text || !term) return false;
  try {
    return new RegExp(boundaryPattern(term), "iu").test(String(text));
  } catch {
    return false;
  }
}
function stemMatch(text, term) {
  if (!text || !term || term.length < 4) return false;
  const stem = String(term).replace(/(?:en|ern|eln)$/i, "");
  if (stem.length < 3) return false;
  try {
    return new RegExp(`${boundaryPattern(stem)}[\\p{L}\\p{N}_]*`, "iu").test(String(text));
  } catch {
    return false;
  }
}
function fold(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase();
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
  } catch {
    return null;
  }
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
    if (typeof v === "string") {
      if (v.trim()) texts.push(v);
      return;
    }
    if (Array.isArray(v)) {
      v.forEach(push);
      return;
    }
    if (typeof v === "object") {
      ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) =>
        push(v[k]),
      );
    }
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
    if (field === "left") {
      push(study.tip?.left || study.tip?.text);
      return texts;
    }
    if (field === "right") {
      push(study.tip?.right || study.tip?.example);
      return texts;
    }
    push(study.tip);
    return texts;
  }
  if (sectionKey === "important") {
    const source = study.important;
    const rows = index !== null ? asArray(Array.isArray(source) ? source[index] : source) : asArray(source);
    rows.forEach(push);
    return texts;
  }
  if (sectionKey === "info") {
    asArray(study.info).forEach(push);
    return texts;
  }
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

function levenshtein(a, b) {
  const m = a.length;
  const n = b.length;
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
  return String(text || "")
    .split(/[\s.,!?;:„""()«»\-–—]+/)
    .filter(Boolean);
}

function findFuzzyWordMatch(text, term) {
  if (!term || term.length < 3) return null;
  const words = tokenize(text);
  const termLower = term.toLowerCase();
  let best = null;
  let bestDist = Infinity;
  for (const w of words) {
    const wLower = w.toLowerCase();
    if (wLower === termLower) return w;
    const lenDiff = Math.abs(wLower.length - termLower.length);
    if (lenDiff > 3) continue;
    const dist = levenshtein(wLower, termLower);
    const maxAllowed = Math.max(1, Math.floor(Math.min(wLower.length, termLower.length) * 0.4));
    if (dist <= maxAllowed && dist < bestDist) {
      bestDist = dist;
      best = w;
    }
  }
  return best;
}

function findFuzzyPhraseMatch(text, term) {
  if (!term.includes(" ")) return findFuzzyWordMatch(text, term);
  const termWords = term.split(/\s+/).filter(Boolean);
  const resolved = termWords.map((tw) => findFuzzyWordMatch(text, tw) || tw);
  const changed = resolved.some((w, i) => w.toLowerCase() !== termWords[i].toLowerCase());
  if (!changed) return null;
  return resolved.join(" ");
}

function findContainingWord(text, term) {
  if (!term || term.length < 3) return null;
  for (const w of tokenize(text)) {
    if (fold(w).includes(fold(term)) && w.length >= term.length) return w;
  }
  return null;
}

/** Full compound token when `term` is only a substring (e.g. valdkond → sotsiaalvaldkonnas). */
function findCompoundWord(text, term) {
  if (!term || term.length < 3) return null;
  let best = null;
  for (const w of tokenize(text)) {
    if (fold(w).includes(fold(term)) && w.length > term.length) {
      if (!best || w.length < best.length) best = w;
    }
  }
  return best;
}

function resolveReplacement(study, sectionKey, index, field, term) {
  const texts = collectSectionTexts(study, sectionKey, index, field);
  for (const text of texts) {
    const compound = findCompoundWord(text, term);
    if (compound) return compound;
  }
  for (const text of texts) {
    const match = findFuzzyPhraseMatch(text, term);
    if (match && accentTermMatches(study, sectionKey, index, field, match)) return match;
  }
  for (const text of texts) {
    const contained = findContainingWord(text, term);
    if (contained && accentTermMatches(study, sectionKey, index, field, contained)) return contained;
  }
  for (const text of texts) {
    for (const w of tokenize(text)) {
      if (accentTermMatches(study, sectionKey, index, field, w) && w.length >= 3) return w;
    }
  }
  return resolveReplacementCollect(study, sectionKey, index, term);
}

function collectStyleSectionText(study, sectionKey, index) {
  if (sectionKey === "explanation" && study.explanation) {
    return Array.isArray(study.explanation) ? study.explanation.join(" ") : String(study.explanation);
  }
  if (sectionKey === "tip") {
    const tip = study.tip;
    if (Array.isArray(tip)) return tip.join(" ");
    if (tip && typeof tip === "object") return [tip.text, tip.example].filter(Boolean).join(" ");
    return String(tip || "");
  }
  if (sectionKey === "important") {
    const imp = study.important;
    if (Array.isArray(imp)) return imp.join(" ");
    if (imp && typeof imp === "object") return [imp.text, imp.example].filter(Boolean).join(" ");
    return String(imp || "");
  }
  if (sectionKey === "examples" && Array.isArray(study.examples)) {
    const ex = study.examples[index];
    if (!ex) return "";
    return [ex.de, ex.lv].filter(Boolean).join(" ");
  }
  if (sectionKey === "comparison" && Array.isArray(study.comparison)) {
    const c = study.comparison[index];
    if (!c) return "";
    return [c.word, c.meaning, c.example].filter(Boolean).join(" ");
  }
  return "";
}

function collectStyleTermMatches(study, sectionKey, index, term) {
  const text = collectStyleSectionText(study, sectionKey, index);
  return matchesTerm(text, term) || stemMatch(text, term);
}

function resolveReplacementCollect(study, sectionKey, index, term) {
  const text = collectStyleSectionText(study, sectionKey, index);
  if (!text) return null;
  const compound = findCompoundWord(text, term);
  if (compound) return compound;
  const match = findFuzzyPhraseMatch(text, term);
  if (match && collectStyleTermMatches(study, sectionKey, index, match)) return match;
  const contained = findContainingWord(text, term);
  if (contained && collectStyleTermMatches(study, sectionKey, index, contained)) return contained;
  for (const w of tokenize(text)) {
    if (collectStyleTermMatches(study, sectionKey, index, w) && w.length >= 3) return w;
  }
  return null;
}

function normalizeScalarsToArrays(node) {
  if (!node || typeof node !== "object") return;
  if (Array.isArray(node)) {
    node.forEach(normalizeScalarsToArrays);
    return;
  }
  for (const [key, val] of Object.entries(node)) {
    if (ACCENT_COLORS.includes(key) && typeof val === "string") {
      node[key] = [val];
    } else if (typeof val === "object") {
      normalizeScalarsToArrays(val);
    }
  }
}

function trimOrphanedPadding(study) {
  const sa = study.sectionAccents;
  if (!sa) return;
  for (const key of ["examples", "important"]) {
    if (Array.isArray(sa[key]) && Array.isArray(study[key]) && sa[key].length > study[key].length) {
      sa[key] = sa[key].slice(0, study[key].length);
    }
  }
  if (sa.comparison && !hasStudyComparison(study)) {
    delete sa.comparison;
  }
}

function hasStudyComparison(study) {
  return (
    Array.isArray(study.comparison) && study.comparison.length > 0
    || Array.isArray(study.comparisonTable) && study.comparisonTable.length > 0
    || Array.isArray(study.words) && study.words.length > 0
  );
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
        if (matchesTerm(text, term) || substringMatch(text, term) || extendedForm(text, term)) {
          bestBlock = i;
          break;
        }
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
        if (matchesTerm(lines[i], term) || substringMatch(lines[i], term) || extendedForm(lines[i], term)) {
          bestLine = i;
          break;
        }
      }
      if (bestLine === -1) bestLine = 0;
      if (!perLine[bestLine][color]) perLine[bestLine][color] = [];
      perLine[bestLine][color].push(term);
    }
  }
  sa.tip = perLine;
}

function isScalarSplitArtifact(term, study, sectionKey, index, field) {
  if (term.length > 1) return false;
  const texts = collectSectionTexts(study, sectionKey, index, field);
  const blob = texts.join(" ");
  return blob.length > 1;
}

function fixSectionAccents(words) {
  const stats = {
    total: 0,
    autoFixed: 0,
    dropped: 0,
    scalarDropped: 0,
    reshaped: 0,
    orphanComparisonRemoved: 0,
    changedCards: new Set(),
  };
  const repairs = [];
  const unresolved = [];

  for (const card of words) {
    const study = card.study;
    if (!study || !study.sectionAccents || typeof study.sectionAccents !== "object") continue;
    normalizeScalarsToArrays(study.sectionAccents);
    if (study.sectionAccents.comparison && !hasStudyComparison(study)) {
      delete study.sectionAccents.comparison;
      stats.orphanComparisonRemoved++;
      stats.changedCards.add(study.id || card.de);
      repairs.push({
        id: study.id || card.de,
        de: card.de,
        section: "comparison",
        action: "DROP_ORPHAN_COMPARISON",
        before: "(orphan block)",
        after: "(removed)",
      });
    }
    trimOrphanedPadding(study);
    if (study.sectionAccents.tip && Array.isArray(study.tip) && !Array.isArray(study.sectionAccents.tip)) {
      reshapeTipArrayMismatch(study);
      stats.reshaped++;
    }
    if (
      study.sectionAccents.tip &&
      Array.isArray(study.tip?.leftBlocks) &&
      !Array.isArray(study.sectionAccents.tip) &&
      !study.sectionAccents.tip.leftBlocks
    ) {
      reshapeTipLeftBlocksMismatch(study);
      stats.reshaped++;
    }
    const sectionAccents = study.sectionAccents;
    const cardId = study.id || card.de;

    const fixColorArray = (sectionKey, index, field, accentMap, useCollectCheck = false) => {
      if (!accentMap || typeof accentMap !== "object") return;
      for (const color of ACCENT_COLORS) {
        const rawArr = accentMap[color];
        if (rawArr === undefined || rawArr === null) continue;
        const termsList = Array.isArray(rawArr) ? rawArr : [rawArr];
        const nextTerms = [];
        for (const rawTerm of termsList) {
          const term = String(rawTerm || "").trim();
          if (!term) continue;
          stats.total++;
          if (isScalarSplitArtifact(term, study, sectionKey, index, field)) {
            stats.scalarDropped++;
            stats.dropped++;
            stats.changedCards.add(cardId);
            repairs.push({
              id: cardId,
              de: card.de,
              section: sectionKey,
              index,
              field,
              color,
              before: term,
              after: "(removed scalar split)",
              action: "DROP_SCALAR",
            });
            continue;
          }
          const alreadyOk = useCollectCheck
            ? collectStyleTermMatches(study, sectionKey, index, term)
            : accentTermMatches(study, sectionKey, index, field, term);
          if (alreadyOk) {
            nextTerms.push(term);
            continue;
          }
          const replacement = useCollectCheck
            ? resolveReplacementCollect(study, sectionKey, index, term)
            : resolveReplacement(study, sectionKey, index, field, term);
          if (replacement) {
            nextTerms.push(replacement);
            stats.autoFixed++;
            stats.changedCards.add(cardId);
            repairs.push({
              id: cardId,
              de: card.de,
              section: sectionKey,
              index,
              field,
              color,
              before: term,
              after: replacement,
              action: "REPLACE",
            });
          } else {
            stats.dropped++;
            unresolved.push({ id: cardId, de: card.de, section: sectionKey, index, field, color, term });
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
          const hasTopColors = ACCENT_COLORS.some((c) => entry[c] !== undefined && entry[c] !== null);
          if (hasTopColors) {
            fixColorArray(sectionKey, index, null, entry);
            return;
          }
          for (const field of Object.keys(entry)) fixColorArray(sectionKey, index, field, entry[field]);
        });
        continue;
      }
      if (rules && typeof rules === "object") {
        const hasColors = ACCENT_COLORS.some((c) => rules[c] !== undefined && rules[c] !== null);
        if (hasColors) fixColorArray(sectionKey, null, null, rules);
        else for (const [field, map] of Object.entries(rules)) fixColorArray(sectionKey, null, field, map);
      }
    }

    for (const [sectionKey, rules] of Object.entries(sectionAccents)) {
      if (Array.isArray(rules)) {
        rules.forEach((entry, index) => {
          if (!entry || typeof entry !== "object") return;
          const hasTopColors = ACCENT_COLORS.some((c) => entry[c] !== undefined && entry[c] !== null);
          if (hasTopColors) {
            fixColorArray(sectionKey, index, null, entry, true);
            return;
          }
          if (entry.lv) fixColorArray(sectionKey, index, "lv", entry.lv, true);
          if (entry.de) fixColorArray(sectionKey, index, "de", entry.de, false);
        });
        continue;
      }
      if (rules && typeof rules === "object") {
        const hasColors = ACCENT_COLORS.some((c) => rules[c] !== undefined && rules[c] !== null);
        if (hasColors) fixColorArray(sectionKey, null, null, rules, true);
      }
    }

    const walkBlocks = (rules) => {
      if (!Array.isArray(rules)) return;
      rules.forEach((entry) => {
        if (!entry?.de || !entry?.lv) return;
        const deTerms = new Set();
        for (const color of ACCENT_COLORS) {
          const arr = entry.de[color];
          if (Array.isArray(arr)) arr.forEach((t) => deTerms.add(String(t)));
          else if (typeof arr === "string") deTerms.add(arr);
        }
        for (const color of ACCENT_COLORS) {
          if (!Array.isArray(entry.lv[color])) continue;
          const filtered = entry.lv[color].filter((t) => !deTerms.has(String(t)));
          if (filtered.length) entry.lv[color] = filtered;
          else delete entry.lv[color];
        }
      });
    };
    walkBlocks(sectionAccents.examples);
    walkBlocks(sectionAccents.comparison);
  }

  return { stats, repairs, unresolved };
}

function fixSectionAccentsIterative(words, maxPasses = 5) {
  const merged = {
    stats: {
      total: 0,
      autoFixed: 0,
      dropped: 0,
      scalarDropped: 0,
      reshaped: 0,
      orphanComparisonRemoved: 0,
      changedCards: new Set(),
      passes: 0,
    },
    repairs: [],
    unresolved: [],
  };
  for (let pass = 0; pass < maxPasses; pass++) {
    const { stats, repairs, unresolved } = fixSectionAccents(words);
    merged.stats.passes = pass + 1;
    merged.stats.total += stats.total;
    merged.stats.autoFixed += stats.autoFixed;
    merged.stats.dropped += stats.dropped;
    merged.stats.scalarDropped += stats.scalarDropped;
    merged.stats.reshaped += stats.reshaped;
    merged.stats.orphanComparisonRemoved += stats.orphanComparisonRemoved;
    stats.changedCards.forEach((id) => merged.stats.changedCards.add(id));
    merged.repairs.push(...repairs);
    merged.unresolved = unresolved;
    if (
      stats.autoFixed === 0
      && stats.dropped === 0
      && stats.scalarDropped === 0
      && stats.reshaped === 0
      && stats.orphanComparisonRemoved === 0
    ) {
      break;
    }
  }
  return merged;
}

function countCollectIssues() {
  try {
    const out = execSync("node scripts/audit-et-b1-collect.js", { cwd: ROOT, encoding: "utf8" });
    const m = out.match(/"sectionAccentsIssues":\s*(\d+)/);
    return m ? Number(m[1]) : null;
  } catch {
    return null;
  }
}

function verifyDeUnchanged(before, after) {
  let changes = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of ["de", "de_article", "de_plural", "level"]) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) changes++;
    }
  }
  return changes;
}

function verifyEtProseUnchanged(before, after) {
  let changes = 0;
  for (let i = 0; i < after.length; i++) {
    const stripSa = (entry) => {
      const c = JSON.parse(JSON.stringify(entry));
      if (c.study?.sectionAccents) delete c.study.sectionAccents;
      return c;
    };
    if (JSON.stringify(stripSa(before[i])) !== JSON.stringify(stripSa(after[i]))) changes++;
  }
  return changes;
}

module.exports = {
  ACCENT_COLORS,
  B1_FILES,
  loadWords,
  writeWords,
  fixSectionAccents,
  fixSectionAccentsIterative,
  countCollectIssues,
  verifyDeUnchanged,
  verifyEtProseUnchanged,
  accentTermMatches,
  collectSectionTexts,
  matchesTerm,
};
