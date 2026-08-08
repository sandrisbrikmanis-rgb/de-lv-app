#!/usr/bin/env node
/**
 * Fix BS-DE B2 study.sectionAccents to match existing Bosnian Study text.
 * Only modifies sectionAccents in data/bs/b2.js (then syncs www/).
 *
 * Run: node scripts/fix-bs-b2-section-accents.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const DRY_RUN = process.argv.includes("--dry-run");
const LV_FILE = path.join(ROOT, "data", "b2.js");
const BS_FILE = path.join(ROOT, "data", "bs", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b2.js");
const REPORT_PATH = path.join(ROOT, "reports", "temp", "bs-b2-section-accents-fix-log.json");

const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];
const LV_DIACRITICS = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const KNOWN_LV_TERMS = new Set([
  "mazs", "teikt", "iet", "lietus", "laiks", "reiz", "pie", "uz", "viss", "maza", "maz",
]);
const KNOWN_EN_TERMS = new Set(["at", "to", "the", "and", "or", "in", "on"]);

const stats = {
  termsChecked: 0,
  alreadyValid: 0,
  caseFixed: 0,
  lvMapped: 0,
  fuzzyFixed: 0,
  dropped: 0,
  deSkipped: 0,
  cardsChanged: new Set(),
  changes: [],
  unresolved: [],
};

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function writeB2(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const B2_WORDS = ${json};\n\nwindow.B2_WORDS = B2_WORDS;\n`, "utf8");
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
    return new RegExp(boundaryPattern(stem) + "[\\p{L}\\p{N}_]*", "iu").test(String(text));
  } catch {
    return false;
  }
}

function fold(value) {
  return String(value || "").normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

function substringMatch(text, term) {
  if (!text || !term || term.length < 3) return null;
  const hay = String(text);
  try {
    const re = new RegExp(boundaryPattern(term), "iu");
    const m = hay.match(re);
    if (m) return m[0];
  } catch {
    /* fall through */
  }
  return null;
}

function extendedForm(text, term) {
  if (!text || !term || term.length < 3) return null;
  try {
    const re = new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegex(term)}\\p{L}*`, "iu");
    const m = String(text).match(re);
    if (m && m[0].length >= term.length) return m[0];
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
      ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) => push(v[k]));
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
    if (field === "left" || field === "leftBlocks") {
      const blocks = study.tip?.leftBlocks;
      if (Array.isArray(blocks)) {
        if (index !== null && blocks[index]) {
          push(blocks[index].text);
        } else {
          blocks.forEach((b) => push(b.text));
        }
      }
      push(study.tip?.left || study.tip?.text);
      return texts;
    }
    if (field === "right") {
      push(study.tip?.right || study.tip?.example);
      return texts;
    }
    if (index !== null && Array.isArray(study.tip)) {
      push(study.tip[index]);
      return texts;
    }
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

function tokenize(text) {
  return String(text || "").split(/[\s.,!?;:„"“”()«»\-–—/]+/).filter(Boolean);
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

function resolveCaseFromText(study, sectionKey, index, field, term) {
  const texts = collectSectionTexts(study, sectionKey, index, field);
  for (const text of texts) {
    const exact = substringMatch(text, term);
    if (exact && accentTermMatches(study, sectionKey, index, field, exact)) return exact;
    const ext = extendedForm(text, term);
    if (ext && accentTermMatches(study, sectionKey, index, field, ext)) return ext;
  }
  return null;
}

function extractSlashSegmentWords(text) {
  const m = String(text).match(/:\s*([^→.]+)/);
  if (!m) return [];
  return m[1].split("/").map((seg) => {
    const tokens = tokenize(seg.trim());
    return tokens[tokens.length - 1] || tokens[0];
  }).filter(Boolean);
}

function extractListWordsAfterMeaning(text) {
  const raw = String(text);
  const chunk = raw.split(/znači|nozīmē|označava|pokazuje|rāda/i)[1] || raw;
  const listPart = chunk.split(/[.!?]/)[0];
  return listPart
    .split(/,|\s+ili\s+|\s+vai\s+/)
    .map((seg) => {
      const tokens = tokenize(seg.trim());
      return tokens[0];
    })
    .filter((w) => w && w.length >= 2);
}

function extractDashTranslation(text) {
  const part = String(text).split(/[–—-]/).pop() || "";
  const tokens = tokenize(part.trim());
  return tokens[0] || null;
}

function extractExplanationVariants(text) {
  const variants = [];
  for (const line of String(text).split(/\n|(?<=\.)\s+/)) {
    const colon = line.match(/:\s*([^.,]+)/);
    if (colon) {
      colon[1].split(/,|\s+ili\s+/).forEach((seg) => {
        const w = tokenize(seg.trim())[0];
        if (w) variants.push(w);
      });
    }
  }
  return variants;
}

function extractQuotedHighlight(bsText) {
  const m = String(bsText).match(/[„"]([^„"]+)[„"]/);
  if (!m) return [];
  return m[1]
    .split(/,\s*/)
    .map((seg) => tokenize(seg.replace(/\.\.\./g, ""))[0])
    .filter(Boolean);
}

function mapQuestionWord(lvTerm, bsText) {
  const map = { "kurp?": "gdje?", "kur?": "gdje?", "kā?": "kako?", "kā": "kako" };
  const target = map[fold(lvTerm)] || map[lvTerm];
  if (!target) return null;
  return substringMatch(bsText, target) || (bsText.includes(target) ? target : null);
}

function mapBySlotIndex(lvStudy, bsStudy, sectionKey, index, field, lvAccentTerm, termIndex) {
  const lvTexts = collectSectionTexts(lvStudy, sectionKey, index, field);
  const bsTexts = collectSectionTexts(bsStudy, sectionKey, index, field);
  const lvBlob = lvTexts.join(" ");
  const bsBlob = bsTexts.join(" ");
  if (!lvBlob || !bsBlob) return null;

  const question = mapQuestionWord(lvAccentTerm, bsBlob);
  if (question && accentTermMatches(bsStudy, sectionKey, index, field, question)) return question;

  if (sectionKey === "explanation" && field === null) {
    const lvVars = extractExplanationVariants(lvBlob);
    const bsVars = extractExplanationVariants(bsBlob);
    const lvIdx = lvVars.findIndex((w) => fold(w) === fold(lvAccentTerm));
    const slot = lvIdx >= 0 ? lvIdx : termIndex;
    if (slot < bsVars.length) {
      const candidate = substringMatch(bsBlob, bsVars[slot]) || bsVars[slot];
      if (accentTermMatches(bsStudy, sectionKey, index, field, candidate)) return candidate;
    }
  }

  if (sectionKey === "important" && index !== null) {
    const quoted = extractQuotedHighlight(bsBlob);
    if (quoted.length && termIndex < quoted.length) {
      const candidate = substringMatch(bsBlob, quoted[termIndex]) || quoted[termIndex];
      if (accentTermMatches(bsStudy, sectionKey, index, field, candidate)) return candidate;
    }
    const lvWords = extractListWordsAfterMeaning(lvBlob);
    const bsWords = extractListWordsAfterMeaning(bsBlob);
    const lvIdx = lvWords.findIndex((w) => fold(w) === fold(lvAccentTerm));
    const slot = lvIdx >= 0 ? lvIdx : termIndex;
    if (slot < bsWords.length) {
      const candidate = substringMatch(bsBlob, bsWords[slot]) || bsWords[slot];
      if (accentTermMatches(bsStudy, sectionKey, index, field, candidate)) return candidate;
    }
  }

  if (sectionKey === "tip" && field === "left") {
    const lvWords = extractSlashSegmentWords(lvStudy.tip?.text || lvStudy.tip?.left || lvBlob);
    const bsWords = extractSlashSegmentWords(bsStudy.tip?.text || bsStudy.tip?.left || bsBlob);
    if (termIndex < bsWords.length) {
      const candidate = substringMatch(bsBlob, bsWords[termIndex]) || bsWords[termIndex];
      if (accentTermMatches(bsStudy, sectionKey, index, field, candidate)) return candidate;
    }
  }

  if (sectionKey === "important" && index !== null) {
    const lvWords = extractListWordsAfterMeaning(lvBlob);
    const bsWords = extractListWordsAfterMeaning(bsBlob);
    const lvIdx = lvWords.findIndex((w) => fold(w) === fold(lvAccentTerm));
    const slot = lvIdx >= 0 ? lvIdx : termIndex;
    if (slot < bsWords.length) {
      const candidate = substringMatch(bsBlob, bsWords[slot]) || bsWords[slot];
      if (accentTermMatches(bsStudy, sectionKey, index, field, candidate)) return candidate;
    }
  }

  if (sectionKey === "comparison" && field === "example" && index !== null) {
    const candidate = extractDashTranslation(bsBlob);
    if (candidate && accentTermMatches(bsStudy, sectionKey, index, field, candidate)) return candidate;
    const lvPart = lvBlob.split(/[–—-]/).pop() || "";
    const bsPart = bsBlob.split(/[–—-]/).pop() || "";
    const lvTok = tokenize(lvPart);
    const bsTok = tokenize(bsPart);
    const lvIdx = lvTok.findIndex((w) => fold(w) === fold(lvAccentTerm));
    if (lvIdx >= 0 && lvIdx < bsTok.length) {
      const c = substringMatch(bsPart, bsTok[lvIdx]) || bsTok[lvIdx];
      if (accentTermMatches(bsStudy, sectionKey, index, field, c)) return c;
    }
  }

  if (sectionKey === "examples" && field === "lv" && index !== null) {
    const lvTok = tokenize(lvBlob);
    const bsTok = tokenize(bsBlob);
    const lvIdx = lvTok.findIndex((w) => fold(w) === fold(lvAccentTerm));
    if (lvIdx >= 0 && lvIdx < bsTok.length) {
      const c = substringMatch(bsBlob, bsTok[lvIdx]) || bsTok[lvIdx];
      if (accentTermMatches(bsStudy, sectionKey, index, field, c)) return c;
    }
    if (termIndex < bsTok.length) {
      const c = substringMatch(bsBlob, bsTok[termIndex]) || bsTok[termIndex];
      if (accentTermMatches(bsStudy, sectionKey, index, field, c)) return c;
    }
  }

  if (sectionKey === "comparison" && field === "meaning" && index !== null) {
    const lvWords = tokenize(lvBlob);
    const bsWords = tokenize(bsBlob);
    const lvIdx = lvWords.findIndex((w) => fold(w) === fold(lvAccentTerm));
    if (lvIdx >= 0 && lvIdx < bsWords.length) {
      const candidate = substringMatch(bsBlob, bsWords[lvIdx]) || bsWords[lvIdx];
      if (accentTermMatches(bsStudy, sectionKey, index, field, candidate)) return candidate;
    }
    const phrase = substringMatch(bsBlob, lvAccentTerm);
    if (phrase && accentMatchPhrase(bsStudy, sectionKey, index, field, phrase)) return phrase;
  }

  return null;
}

function accentMatchPhrase(study, sectionKey, index, field, phrase) {
  if (accentTermMatches(study, sectionKey, index, field, phrase)) return true;
  const words = tokenize(phrase);
  return words.length > 0 && accentTermMatches(study, sectionKey, index, field, words[0]);
}

function mapViaLvParallel(lvStudy, bsStudy, sectionKey, index, field, lvAccentTerm) {
  if (!lvAccentTerm) return null;
  const lvTexts = collectSectionTexts(lvStudy, sectionKey, index, field);
  const bsTexts = collectSectionTexts(bsStudy, sectionKey, index, field);
  const lvBlob = lvTexts.join(" ");
  const bsBlob = bsTexts.join(" ");
  if (!lvBlob || !bsBlob) return null;

  const lvTokens = tokenize(lvBlob);
  const bsTokens = tokenize(bsBlob);
  const target = fold(lvAccentTerm);

  const lvIndexes = [];
  for (let i = 0; i < lvTokens.length; i++) {
    if (fold(lvTokens[i]) === target) lvIndexes.push(i);
  }
  if (!lvIndexes.length) return null;

  for (const lvIdx of lvIndexes) {
    if (lvIdx >= bsTokens.length) continue;
    const candidate = bsTokens[lvIdx];
    const exact = substringMatch(bsBlob, candidate) || candidate;
    if (accentTermMatches(bsStudy, sectionKey, index, field, exact)) return exact;
  }
  return null;
}

function findBestBsWord(study, sectionKey, index, field) {
  const texts = collectSectionTexts(study, sectionKey, index, field);
  const blob = texts.join(" ");
  const words = tokenize(blob);
  for (const w of words) {
    if (w.length >= 2 && accentTermMatches(study, sectionKey, index, field, w)) return w;
  }
  return null;
}

function isSuspiciousTerm(term) {
  const f = fold(term);
  if (LV_DIACRITICS.test(term)) return true;
  if (KNOWN_LV_TERMS.has(f)) return true;
  if (KNOWN_EN_TERMS.has(f)) return true;
  return false;
}

function recordChange(cardId, path, before, after, method, bsText) {
  stats.cardsChanged.add(cardId);
  stats.changes.push({
    id: cardId,
    path,
    before,
    after,
    method,
    bsText: String(bsText || "").slice(0, 160),
  });
}

function mapTipImportantByColor(bsText, color) {
  const left = (String(bsText).split(/→|->/)[0] || bsText).trim();
  const tokens = tokenize(left);
  if (!tokens.length) return null;
  if (color === "yellow" || color === "green") {
    return tokens.find((t) => t.length > 2 && /^[A-ZČĆĐŠŽ]/.test(t)) || tokens[0];
  }
  if (color === "purple" || color === "red" || color === "orange") {
    return tokens.find((t) => /^[a-zčćđšž]/.test(t) && t.length >= 3 && !["se", "u", "na", "za", "od", "do", "i", "je"].includes(t.toLowerCase()))
      || tokens.find((t) => /^[a-zčćđšž]/.test(t) && t.length >= 3)
      || tokens[tokens.length - 1];
  }
  if (color === "blue") {
    return tokens.find((t) => /[A-ZÄÖÜ]/.test(t)) || tokens[tokens.length - 1];
  }
  return null;
}

function resolveTerm({
  cardId,
  path,
  term,
  study,
  lvStudy,
  sectionKey,
  index,
  field,
  lvTerm,
  termIndex,
  color,
}) {
  const raw = String(term || "").trim();
  if (!raw) return null;
  stats.termsChecked++;

  const isEnglish = KNOWN_EN_TERMS.has(fold(raw));

  if (!isEnglish && accentTermMatches(study, sectionKey, index, field, raw)) {
    stats.alreadyValid++;
    return raw;
  }

  const caseFixed = !isEnglish && raw.length >= 3 ? resolveCaseFromText(study, sectionKey, index, field, raw) : null;
  if (caseFixed && caseFixed !== raw) {
    stats.caseFixed++;
    recordChange(cardId, path, raw, caseFixed, "caseFix", collectSectionTexts(study, sectionKey, index, field).join(" "));
    return caseFixed;
  }
  if (caseFixed) {
    stats.alreadyValid++;
    return raw;
  }

  if (lvTerm && lvTerm !== raw) {
    const slotMapped = mapBySlotIndex(lvStudy, study, sectionKey, index, field, lvTerm, termIndex);
    if (slotMapped) {
      stats.lvMapped++;
      recordChange(cardId, path, raw, slotMapped, "slotMap", collectSectionTexts(study, sectionKey, index, field).join(" "));
      return slotMapped;
    }
    const mapped = mapViaLvParallel(lvStudy, study, sectionKey, index, field, lvTerm);
    if (mapped) {
      stats.lvMapped++;
      recordChange(cardId, path, raw, mapped, "lvParallelMap", collectSectionTexts(study, sectionKey, index, field).join(" "));
      return mapped;
    }
  }

  if (isSuspiciousTerm(raw) || (lvTerm && fold(lvTerm) === fold(raw))) {
    const slotMapped = mapBySlotIndex(lvStudy, study, sectionKey, index, field, lvTerm || raw, termIndex);
    if (slotMapped) {
      stats.lvMapped++;
      recordChange(cardId, path, raw, slotMapped, "slotMapSuspicious", collectSectionTexts(study, sectionKey, index, field).join(" "));
      return slotMapped;
    }
    if (lvTerm) {
      const mapped = mapViaLvParallel(lvStudy, study, sectionKey, index, field, lvTerm);
      if (mapped) {
        stats.lvMapped++;
        recordChange(cardId, path, raw, mapped, "lvParallelMapSuspicious", collectSectionTexts(study, sectionKey, index, field).join(" "));
        return mapped;
      }
    }
    if ((sectionKey === "tip" || sectionKey === "important") && !field && color) {
      const source = sectionKey === "tip" ? study.tip : study.important;
      let text = "";
      if (typeof source === "string") text = source;
      else if (source?.text) text = typeof source.text === "string" ? source.text : "";
      else if (Array.isArray(source)) {
        text = source.map((s) => (typeof s === "string" ? s : s?.text || "")).join(" ");
      }
      const candidate = mapTipImportantByColor(text, color);
      if (candidate && accentTermMatches(study, sectionKey, index, field, candidate)) {
        stats.lvMapped++;
        recordChange(cardId, path, raw, candidate, "tipColorMap", String(text));
        return candidate;
      }
    }
  }

  const texts = collectSectionTexts(study, sectionKey, index, field);
  for (const text of texts) {
    const fuzzy = findFuzzyWordMatch(text, raw);
    if (fuzzy && accentTermMatches(study, sectionKey, index, field, fuzzy)) {
      stats.fuzzyFixed++;
      recordChange(cardId, path, raw, fuzzy, "fuzzyMatch", text);
      return fuzzy;
    }
  }

  // German contrast terms in explanation (nehmen, holen) — keep only if present in BS study text
  if (/^[a-zäöüß]+$/i.test(raw) && raw.length >= 4) {
    const allStudyText = JSON.stringify(study).replace(/"de":/g, "");
    if (allStudyText.includes(raw) && accentTermMatches(study, sectionKey, index, field, raw)) {
      stats.alreadyValid++;
      return raw;
    }
  }

  stats.dropped++;
  stats.unresolved.push({
    id: cardId,
    path,
    term: raw,
    lvTerm,
    sectionKey,
    index,
    field,
    bsText: texts.join(" ").slice(0, 200),
  });
  return null;
}

function getLvTermAt(lvAccents, sectionKey, index, field, color, termIndex) {
  if (!lvAccents) return null;
  try {
    let node = lvAccents[sectionKey];
    if (node === undefined) return null;
    if (Array.isArray(node)) {
      node = node[index];
      if (!node) return null;
      if (field) node = node[field];
    } else if (field && node[field]) {
      node = node[field];
    }
    if (!node || typeof node !== "object") return null;
    const raw = node[color];
    if (raw === undefined || raw === null) return null;
    if (typeof raw === "string") return raw;
    if (Array.isArray(raw)) return raw[termIndex] ?? null;
    return null;
  } catch {
    return null;
  }
}

function fixColorArray({
  cardId,
  study,
  lvStudy,
  lvAccents,
  sectionKey,
  index,
  field,
  accentMap,
  pathPrefix,
}) {
  if (!accentMap || typeof accentMap !== "object") return;
  for (const color of ACCENT_COLORS) {
    if (accentMap[color] === undefined || accentMap[color] === null) continue;
    const wasString = typeof accentMap[color] === "string";
    const rawTerms = wasString ? [accentMap[color]] : (Array.isArray(accentMap[color]) ? accentMap[color] : []);
    const next = [];
    rawTerms.forEach((rawTerm, termIndex) => {
      const lvTerm = getLvTermAt(lvAccents, sectionKey, index, field, color, termIndex);
      const resolved = resolveTerm({
        cardId,
        path: `${pathPrefix}.${color}[${termIndex}]`,
        term: rawTerm,
        study,
        lvStudy,
        sectionKey,
        index,
        field,
        lvTerm,
        termIndex,
        color,
      });
      if (resolved) next.push(resolved);
    });
    if (next.length) {
      accentMap[color] = wasString ? next[0] : next;
    } else {
      delete accentMap[color];
    }
  }
}

function hasColorTerms(map) {
  if (!map || typeof map !== "object") return false;
  return ACCENT_COLORS.some((c) => Array.isArray(map[c]) || typeof map[c] === "string");
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

function fixTipLeftBlocks(cardId, study, lvStudy, lvAccents, rules) {
  if (!Array.isArray(rules.leftBlocks)) return;
  rules.leftBlocks.forEach((block, blockIdx) => {
    if (!block?.text || typeof block.text !== "object" || typeof block.text === "string") return;
    const hasColors = hasColorTerms(block.text);
    if (!hasColors) return;
    fixColorArray({
      cardId,
      study,
      lvStudy,
      lvAccents,
      sectionKey: "tip",
      index: blockIdx,
      field: "left",
      accentMap: block.text,
      pathPrefix: `sectionAccents.tip.leftBlocks[${blockIdx}].text`,
    });
  });
}

function fixSectionAccents(cardId, study, lvStudy) {
  const sectionAccents = study.sectionAccents;
  const lvAccents = lvStudy?.sectionAccents;
  if (!sectionAccents || typeof sectionAccents !== "object") return;

  trimOrphanedPadding(study);
  for (const [sectionKey, rules] of Object.entries(sectionAccents)) {
    if (sectionKey === "tip" && rules && typeof rules === "object" && Array.isArray(rules.leftBlocks)) {
      fixTipLeftBlocks(cardId, study, lvStudy, lvAccents, rules);
      continue;
    }
    if (Array.isArray(rules)) {
      rules.forEach((entry, index) => {
        if (!entry || typeof entry !== "object") return;
        const hasColors = hasColorTerms(entry);
        if (hasColors) {
          fixColorArray({
            cardId,
            study,
            lvStudy,
            lvAccents,
            sectionKey,
            index,
            field: null,
            accentMap: entry,
            pathPrefix: `sectionAccents.${sectionKey}[${index}]`,
          });
          return;
        }
        for (const subField of Object.keys(entry)) {
          fixColorArray({
            cardId,
            study,
            lvStudy,
            lvAccents,
            sectionKey,
            index,
            field: subField,
            accentMap: entry[subField],
            pathPrefix: `sectionAccents.${sectionKey}[${index}].${subField}`,
          });
        }
      });
      continue;
    }
    if (rules && typeof rules === "object") {
      const hasColors = hasColorTerms(rules);
      if (hasColors) {
        fixColorArray({
          cardId,
          study,
          lvStudy,
          lvAccents,
          sectionKey,
          index: null,
          field: null,
          accentMap: rules,
          pathPrefix: `sectionAccents.${sectionKey}`,
        });
      } else {
        for (const [subField, map] of Object.entries(rules)) {
          fixColorArray({
            cardId,
            study,
            lvStudy,
            lvAccents,
            sectionKey,
            index: null,
            field: subField,
            accentMap: map,
            pathPrefix: `sectionAccents.${sectionKey}.${subField}`,
          });
        }
      }
    }
  }
}

function stripSectionAccents(entry) {
  const copy = JSON.parse(JSON.stringify(entry));
  if (copy.study) delete copy.study.sectionAccents;
  return copy;
}

function main() {
  const lv = loadWords(LV_FILE);
  const bs = loadWords(BS_FILE);
  const beforeSnapshot = bs.map(stripSectionAccents);

  if (lv.length !== bs.length) {
    console.error(`Count mismatch LV=${lv.length} BS=${bs.length}`);
    process.exit(1);
  }

  for (let i = 0; i < bs.length; i++) {
    const bsEntry = bs[i];
    const lvEntry = lv[i];
    if (!bsEntry.study?.sectionAccents) continue;
    const cardId = bsEntry.study.id || `b2-${bsEntry.de}-${i}`;
    fixSectionAccents(cardId, bsEntry.study, lvEntry.study);
  }

  for (let i = 0; i < bs.length; i++) {
    const after = stripSectionAccents(bs[i]);
    const before = beforeSnapshot[i];
    if (JSON.stringify(after) !== JSON.stringify(before)) {
      console.error(`REGRESSION: non-sectionAccents change at index ${i} (${bs[i].de})`);
      process.exit(1);
    }
  }

  const report = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    stats: {
      ...stats,
      cardsChanged: [...stats.cardsChanged],
    },
  };

  fs.mkdirSync(path.dirname(REPORT_PATH), { recursive: true });
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  console.log(JSON.stringify({
    termsChecked: stats.termsChecked,
    alreadyValid: stats.alreadyValid,
    caseFixed: stats.caseFixed,
    lvMapped: stats.lvMapped,
    fuzzyFixed: stats.fuzzyFixed,
    dropped: stats.dropped,
    cardsChanged: stats.cardsChanged.size,
    unresolved: stats.unresolved.length,
  }, null, 2));

  if (!DRY_RUN) {
    writeB2(BS_FILE, bs);
    writeB2(WWW_FILE, bs);
    console.log(`Wrote ${BS_FILE} and ${WWW_FILE}`);
  } else {
    console.log("[dry-run] no files written");
  }
}

main();
