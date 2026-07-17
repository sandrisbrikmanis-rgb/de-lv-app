#!/usr/bin/env node
/**
 * Quick smoke test for ?card= search. Usage: node scripts/test-card-search.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const ctx = { window: {} };
ctx.window = ctx;

for (const f of ["a1.js", "a2.js", "comparisonStudy.js", "nounArticles.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, "data", f), "utf8"), vm.createContext(ctx));
}

const used = new Set();
function normalizeIdText(text) {
  return String(text || "").trim().toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
function buildStableId(card) {
  const level = normalizeIdText(card.level || "x");
  const de = normalizeIdText(card.de);
  const art = normalizeIdText(card.de_article);
  const base = art ? `${level}-${art}-${de}` : `${level}-${de}`;
  if (!used.has(base)) { used.add(base); return base; }
  let n = 2;
  while (used.has(`${base}-${n}`)) n++;
  const id = `${base}-${n}`;
  used.add(id);
  return id;
}

function decodeCardQuery(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  try { return decodeURIComponent(raw.replace(/\+/g, " ")); } catch { return raw; }
}
function normalizeCardSearchValue(value, mode = "plain") {
  const decoded = decodeCardQuery(value)
    .replace(/[•|/]+/g, " ")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[!?.…]+$/g, "")
    .trim()
    .toLocaleLowerCase();
  const transliterated = decoded.replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss");
  const simplified = decoded.replace(/ß/g, "ss").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const valueToUse = mode === "translit" ? transliterated : simplified;
  return valueToUse.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
function isGermanArticleToken(value) { return /^(der|die|das)$/i.test(String(value || "").trim()); }
function splitCardSearchSegments(value) { return String(value || "").split(/\s*[•|/]\s*/).map((p) => p.trim()).filter(Boolean); }
function splitLvSearchAlternatives(value) { return String(value || "").split(/\s*[•;|/]\s*/).map((p) => p.trim()).filter(Boolean); }
function stripGermanArticle(value) { return String(value || "").replace(/^(der|die|das)\s+/i, "").trim(); }
function parseGermanSearchQuery(rawQuery) {
  const raw = decodeCardQuery(rawQuery)
    .replace(/[•|/]+/g, " ")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[!?.…]+$/g, "")
    .trim();
  const articleMatch = raw.match(/^(der|die|das)\s+(.+)$/i);
  if (articleMatch) {
    return { raw, article: articleMatch[1].toLowerCase(), word: articleMatch[2].trim(), hasArticle: true };
  }
  return { raw, article: null, word: raw, hasArticle: false };
}
function germanEntryExactMatchScore(entry, parsed) {
  if (!parsed?.raw) return 0;
  const de = String(entry.de || "").trim();
  const article = String(entry.de_article || "").trim().toLowerCase();
  const formatted = formatGermanEntry(entry);
  if (formatted === parsed.raw || de === parsed.raw) return 100;
  if (parsed.hasArticle) {
    if (article === parsed.article && de === parsed.word) return 100;
    if (article === parsed.article && de.toLowerCase() === parsed.word.toLowerCase()) {
      return de === parsed.word ? 99 : 90;
    }
    return 0;
  }
  if (de === parsed.word) return 98;
  return 0;
}
function capArticleMismatchScore(entry, parsed, score) {
  if (!parsed?.hasArticle || score <= 0) return score;
  const entryArticle = String(entry.de_article || "").trim().toLowerCase();
  if (entryArticle === parsed.article) return score;
  const entryWord = String(entry.de || "").trim();
  if (entryWord && parsed.word && entryWord.toLowerCase() === parsed.word.toLowerCase()) {
    return Math.min(score, 70);
  }
  return score;
}
function capCaseMismatchScore(entry, parsed, score) {
  if (!parsed?.word || parsed.hasArticle) return score;
  const de = String(entry.de || "").trim();
  if (!de || de === parsed.word) return score;
  if (de.toLowerCase() !== parsed.word.toLowerCase()) return score;
  return Math.min(score, 70);
}
function cardSearchKeys(value) {
  const decoded = decodeCardQuery(value);
  const parts = new Set();
  if (decoded) {
    parts.add(decoded);
    const withoutArticle = stripGermanArticle(decoded);
    if (withoutArticle) parts.add(withoutArticle);
    for (const segment of splitCardSearchSegments(decoded)) {
      parts.add(segment);
      const bare = stripGermanArticle(segment);
      if (bare) parts.add(bare);
    }
    for (const alt of splitLvSearchAlternatives(decoded)) parts.add(alt);
    if (/^[a-z0-9]+(-[a-z0-9]+)+$/i.test(decoded)) parts.add(decoded.toLowerCase());
  }
  const keys = [];
  for (const part of parts) {
    const normalized = normalizeCardSearchValue(part);
    const translit = normalizeCardSearchValue(part, "translit");
    if (normalized && !isGermanArticleToken(normalized)) keys.push(normalized);
    if (translit && !isGermanArticleToken(translit)) keys.push(translit);
  }
  return [...new Set(keys)];
}
function cardSearchKeysMatch(queryKeys, candidate) {
  return cardSearchKeys(candidate).some((key) => queryKeys.includes(key));
}
function formatGermanEntry(entry) {
  const de = String(entry?.de || "").trim();
  if (!de) return "";
  const article = String(entry?.de_article || "").trim();
  if (article && !/^(der|die|das)$/i.test(de.split(/\s+/)[0] || "")) return `${article} ${de}`;
  return de;
}
function collectStudySearchTexts(study) {
  if (!study) return [];
  const texts = [];
  const push = (v) => { const t = String(v || "").trim(); if (t) texts.push(t); };
  for (const item of study.words || []) {
    push(item.de); push(item.word); push(item.lv); push(item.example);
    for (const alt of splitLvSearchAlternatives(item.lv)) push(alt);
  }
  for (const ex of study.examples || []) { push(ex.de); push(ex.lv); }
  for (const row of study.comparison || study.comparisonTable || []) {
    push(row.word); push(row.de); push(row.example); push(row.lv);
  }
  return texts;
}
function cardSearchCandidates(entry) {
  const study = entry.study || {};
  const raw = [entry.id, study.id, entry.de, entry.lv, formatGermanEntry(entry), entry.de_plural,
    ...splitLvSearchAlternatives(entry.lv), ...collectStudySearchTexts(study)].filter(Boolean);
  const ex = new Set();
  for (const c of raw) {
    ex.add(c);
    const b = stripGermanArticle(c);
    if (b) ex.add(b);
    for (const s of splitCardSearchSegments(c)) ex.add(s);
    for (const a of splitLvSearchAlternatives(c)) ex.add(a);
  }
  return [...ex];
}
function cardMatchScore(entry, queryKeys, rawQuery = "") {
  const study = entry.study || {};
  const parsed = parseGermanSearchQuery(rawQuery);
  let score = germanEntryExactMatchScore(entry, parsed);
  const bump = (v, p) => { if (cardSearchKeysMatch(queryKeys, v)) score = Math.max(score, p); };
  bump(entry.id, 100); bump(study.id, 100); bump(formatGermanEntry(entry), 96); bump(entry.de, 94);
  const fullLv = String(entry.lv || "").trim();
  const queryNorm = normalizeCardSearchValue(rawQuery || "");
  if (fullLv && queryNorm) {
    const fullLvNorm = normalizeCardSearchValue(fullLv);
    if (fullLvNorm === queryNorm) score = Math.max(score, 91);
    else if (!/[•;|/]/.test(fullLv) && cardSearchKeysMatch(queryKeys, fullLv)) score = Math.max(score, 91);
  }
  for (const alt of splitLvSearchAlternatives(entry.lv)) bump(alt, 86);
  for (const ex of study.examples || []) bump(ex.de, 68);
  if (!score) for (const c of cardSearchCandidates(entry)) bump(c, 50);
  return capCaseMismatchScore(entry, parsed, capArticleMismatchScore(entry, parsed, score));
}
function norm(e) {
  const o = { id: e.id || e.study?.id, de: e.de, lv: e.lv, level: e.level || "A1", study: e.study || null };
  if (e.de_article) o.de_article = e.de_article;
  if (e.de_plural) o.de_plural = e.de_plural;
  return o;
}

const flashcards = [...ctx.A1_WORDS, ...ctx.A2_WORDS, ...(ctx.COMPARISON_STUDY_CARDS || [])];
for (const c of flashcards) c.id = c.id || buildStableId(c);
const all = flashcards.map(norm).filter((e) => e.de && e.lv);

function find(q) {
  const qk = cardSearchKeys(q);
  const parsed = parseGermanSearchQuery(q);
  let best = null, bestScore = 0;
  for (const e of all) {
    const s = cardMatchScore(e, qk, q);
    const exact = germanEntryExactMatchScore(e, parsed);
    if (s > bestScore || (s === bestScore && s > 0 && exact > germanEntryExactMatchScore(best, parsed))) {
      bestScore = s;
      best = e;
    }
  }
  return bestScore > 0 ? best : null;
}

const cases = [
  ["abholen", "compare-abholen-holen-bringen"],
  ["die Jeans", "Jeans"],
  ["džinsi", "Jeans"],
  ["apģērbs", "Kleidung"],
  ["bikses", "Hose"],
  ["a1-sein", "a1-sein"],
  ["Ich bin hier.", "a1-sein"],
  ["a1-die-jeans", "Jeans"],
  ["stehen", "stehen"],
  ["der Keks", "Keks"],
  ["die Bitte", "Bitte"],
  ["bitte", "bitte"],
  ["Bitte", "Bitte"],
  ["lūdzu", "bitte"],
  ["lūgums", "Bitte"],
  ["essen", "essen"],
  ["Essen", "Essen"],
  ["das Essen", "Essen"],
];

let fail = 0;
for (const [q, expected] of cases) {
  const r = find(q);
  const got = r?.study?.id || r?.id || r?.de;
  const ok = got === expected || (r?.de === expected);
  if (!ok) { fail++; console.log("FAIL", q, "expected", expected, "got", got); }
  else console.log("OK", q, "->", got);
}
process.exit(fail > 0 ? 1 : 0);
