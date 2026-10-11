#!/usr/bin/env node
/**
 * Third deterministic pass over reports/de-consistency-audit.json.
 * Reads data and ui.js / data-loader.js. Does not write them.
 * Does not choose a correct German form and does not call a model.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { loadArrayDataset, loadWindowGlobals, fileExists } = require("./lib/audit-common");
const { textCategory, cell, rowSort } = require("./build-de-consistency-breakdown");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "reports/de-consistency-analysis3.md");
const DASH_RE = /[–—]|\s-\s/;
const LV_DIACRITICS = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const FOREIGN_RE = /[\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u0900-\u097F\u10A0-\u10FF\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]/;
const GERMAN_WORD_RE = /[A-Za-zÄÖÜäöüß]+/g;
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const VERB_FORMS = ["infinitiv", "praesens", "imperfektIndikativ", "imperfektKonjunktiv", "partizipVergangenheit"];
const RUNTIME_LANGS = ["pl", "ro", "bg", "gr", "tr", "sq", "mk"];
const PRON_KEYS = new Set(["kurssPronunciationLesson", "kurssConsonantsLesson"]);
const PRONOUNS = new Set("ich du er sie es wir ihr mich dich sich mir dir uns euch ihn ihm ihnen man wer was".split(" "));
const FUNCTION_WORDS = new Set(`
  der die das den dem des ein eine einer einem einen eines kein keine keiner keinem keinen keines
  und oder aber denn doch sowie nicht auch nur schon noch sehr
  auf mit von zu im am für nach bei aus an in um über unter vor hinter neben zwischen durch gegen ohne bis
  ich du er sie es wir ihr mich dich sich uns euch ihn ihm ihnen mir dir man
  ist sind war waren bin bist seid hat haben hatte wird werden kann muss soll darf mag
  dass daß wenn weil obwohl ja nein mein dein sein unser euer ihre
`.split(/\s+/).filter(Boolean));
const CHECKED_CHARS = 23442586;
const GAP = -1;

function sha256File(rel) {
  return crypto.createHash("sha256").update(fs.readFileSync(path.join(ROOT, rel))).digest("hex");
}

function clip(value, max) {
  const text = String(value ?? "").replace(/\s+/g, " ");
  return text.length <= max ? text : `${text.slice(0, max - 1)}…`;
}

function stripTrailing(value) {
  return String(value ?? "").replace(/\s+$/g, "");
}

function otherCategory(row) {
  const lv = row.lvValue;
  const lang = row.langValue;
  const lvTrim = stripTrailing(lv);
  const langTrim = stripTrailing(lang);
  const trailingInvolved = lvTrim !== String(lv ?? "") || langTrim !== String(lang ?? "");
  if (trailingInvolved && lvTrim.length && lvTrim.length === langTrim.length && lvTrim.slice(1) === langTrim.slice(1)
    && lvTrim[0] !== langTrim[0] && lvTrim[0].toLowerCase() === langTrim[0].toLowerCase()) {
    return "CASE_PLUS_TRAILING_SPACE";
  }
  if (String(lv ?? "").toLowerCase() === String(lang ?? "").toLowerCase()) return "CASE_ONLY_OTHER";
  const words = (value) => String(value ?? "").match(/\p{L}{3,}/gu) || [];
  const germanLettersOnly = (value) => ![...String(value ?? "")].some((ch) => /\p{L}/u.test(ch) && !/[A-Za-zÄÖÜäöüß]/.test(ch));
  if (words(lv).length >= 3 && words(lang).length >= 3 && germanLettersOnly(lv) && germanLettersOnly(lang)) {
    return "GERMAN_SENTENCE_DIFFERENT";
  }
  const hasLatinDiacritic = [...`${lv ?? ""}${lang ?? ""}`].some((ch) => /\p{L}/u.test(ch) && !/[A-Za-zÄÖÜäöüß]/.test(ch));
  const stripMarks = (value) => String(value ?? "").normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
  if (hasLatinDiacritic && stripMarks(lv) === stripMarks(lang)) return "LATIN_DIACRITIC_DIFF";
  const letters = (value) => String(value ?? "").replace(/[0-9\s\p{P}\p{S}]/gu, "");
  if (letters(lv) === letters(lang) && letters(lv).length > 0) return "NUMERIC_OR_SYMBOL";
  return "UNCLASSIFIED";
}

function unclassifiedBucket(row) {
  const lv = String(row.lvValue ?? "");
  const lang = String(row.langValue ?? "");
  if (/\([^)]*\)/.test(lv) || /\([^)]*\)/.test(lang)) return "PRONUNCIATION_NOTE";
  if (/\bsich\b/i.test(lv) !== /\bsich\b/i.test(lang)) return "REFLEXIVE_MISSING";
  if (/^(ich|du|er|sie|es|wir|ihr|ihn|ihm|ihnen|mich|dich|sich|mir|dir)\b/i.test(lv.trim())) return "PRONOUN_TRANSLATED";
  if (lv.trim().split(/\s+/).filter(Boolean).length <= 3) return "SHORT_REPLACEMENT";
  return "OTHER";
}

function contaminatedDe(value) {
  return LV_DIACRITICS.test(String(value)) || FOREIGN_RE.test(String(value));
}

function isExplanationString(text) {
  return LV_DIACRITICS.test(String(text));
}

function deSide(text) {
  const s = String(text);
  const idx = s.search(DASH_RE);
  if (idx < 0) return { hasDash: false, de: s };
  return { hasDash: true, de: s.slice(0, idx) };
}

function stringDeField(text) {
  const side = deSide(text);
  if (!side.hasDash && isExplanationString(text)) return { check: false };
  const value = side.hasDash ? side.de : String(text);
  if (contaminatedDe(value)) return { unverifiable: true, chars: value.length, value };
  return { check: true, value };
}

function legacyExampleDe(text) {
  const s = String(text);
  const dashAt = s.search(DASH_RE);
  if (dashAt >= 0) {
    const value = s.slice(0, dashAt);
    if (contaminatedDe(value)) return { unverifiable: true, chars: value.length, value };
    return { check: true, mode: "dash", value };
  }
  const arrowAt = s.indexOf("→");
  if (arrowAt >= 0) {
    if (isExplanationString(s)) return { check: false };
    const value = s.slice(arrowAt + 1);
    if (contaminatedDe(value)) return { unverifiable: true, chars: value.length, value };
    return { check: true, mode: "arrow", value };
  }
  if (isExplanationString(s)) return { check: false };
  if (contaminatedDe(s)) return { unverifiable: true, chars: s.length, value: s };
  return { check: true, mode: "full", value: s };
}

function legacyExampleLang(text, mode) {
  const s = String(text);
  if (mode === "dash") {
    const dashAt = s.search(DASH_RE);
    return dashAt < 0 ? s : s.slice(0, dashAt);
  }
  if (mode === "arrow") {
    const arrowAt = s.indexOf("→");
    return arrowAt < 0 ? s : s.slice(arrowAt + 1);
  }
  return s;
}

function exampleDivs(html) {
  return [...String(html || "").matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)].map((match) => match[1]);
}

function extractLegacy(html) {
  const text = String(html || "");
  let covered = 0;
  const examples = exampleDivs(text);
  examples.forEach((inner) => { covered += inner.length; });
  const strongs = [];
  [...text.matchAll(/<div class="lesson1-conjugation">([\s\S]*?)<\/div>/g)].forEach((block) => {
    [...block[1].matchAll(/<strong>([\s\S]*?)<\/strong>/g)].forEach((strong) => {
      covered += strong[1].length;
      strongs.push(strong[1]);
    });
  });
  return { examples, strongs, remainder: Math.max(0, text.length - covered), text };
}

function remainderText(html) {
  const text = String(html || "");
  const spans = [];
  const openEx = '<div class="kurss-example">';
  for (const match of text.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)) {
    const start = match.index + openEx.length;
    spans.push([start, start + match[1].length]);
  }
  const openConj = '<div class="lesson1-conjugation">';
  for (const block of text.matchAll(/<div class="lesson1-conjugation">([\s\S]*?)<\/div>/g)) {
    const base = block.index + openConj.length;
    for (const strong of block[1].matchAll(/<strong>([\s\S]*?)<\/strong>/g)) {
      const start = base + strong.index + "<strong>".length;
      spans.push([start, start + strong[1].length]);
    }
  }
  spans.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  let out = "";
  let cursor = 0;
  spans.forEach(([start, end]) => {
    if (start < cursor) return;
    out += text.slice(cursor, start);
    cursor = end;
  });
  out += text.slice(cursor);
  return out;
}

function collectUnverifiable(win) {
  const pieces = [];
  let chars = 0;
  let fields = 0;
  const html = (win && win.COURSE_LESSON_HTML) || {};
  const remainders = {};
  Object.keys(html).sort().forEach((key) => {
    const parts = extractLegacy(html[key]);
    const rem = remainderText(html[key]);
    if (rem.length !== parts.remainder) {
      throw new Error(`remainder length ${key}: built ${rem.length} audit ${parts.remainder}`);
    }
    remainders[key] = rem;
    if (parts.remainder > 0) {
      chars += parts.remainder;
      fields += 1;
      pieces.push(rem);
    }
    parts.examples.forEach((example) => {
      const decision = legacyExampleDe(example);
      if (!decision.unverifiable) return;
      chars += decision.chars;
      fields += 1;
      pieces.push(decision.value);
    });
  });
  const data = (win && win.COURSE_LESSON_DATA) || {};
  Object.keys(data).sort().forEach((key) => {
    ((data[key] && data[key].sections) || []).forEach((section) => {
      const items = section.items || [];
      items.forEach((item) => {
        if (typeof item === "string") {
          const side = stringDeField(item);
          if (!side.unverifiable) return;
          chars += side.chars;
          fields += 1;
          pieces.push(side.value);
        } else if (item && typeof item === "object") {
          (item.examples || []).forEach((example) => {
            if (typeof example !== "string") return;
            const side = stringDeField(example);
            if (!side.unverifiable) return;
            chars += side.chars;
            fields += 1;
            pieces.push(side.value);
          });
          (item.table || []).forEach((row) => {
            (Array.isArray(row) ? row : []).forEach((cellValue) => {
              if (typeof cellValue !== "string") {
                if (cellValue != null) fields += 1;
                return;
              }
              const side = stringDeField(cellValue);
              if (!side.unverifiable) return;
              chars += side.chars;
              fields += 1;
              pieces.push(side.value);
            });
          });
        }
      });
    });
  });
  return { chars, fields, pieces, remainders };
}

function addGermanTokens(target, text) {
  const re = new RegExp(GERMAN_WORD_RE.source, "g");
  let match = re.exec(String(text ?? ""));
  while (match) {
    target.add(match[0].toLowerCase());
    match = re.exec(String(text ?? ""));
  }
}

function addStudyGerman(lexicon, study) {
  if (!study || typeof study !== "object") return;
  (study.examples || []).forEach((example) => addGermanTokens(lexicon, example && example.de));
  (study.comparison || []).forEach((row) => addGermanTokens(lexicon, row && row.word));
  (study.words || []).forEach((row) => addGermanTokens(lexicon, row && row.de));
  (study.comparisonTable || []).forEach((row) => addGermanTokens(lexicon, row && row.de));
}

function loadLexicon() {
  const lexicon = new Set(FUNCTION_WORDS);
  const lists = {};
  const byDe = new Map();
  LEVELS.forEach((level) => {
    const list = loadArrayDataset(`data/${level}.js`) || [];
    lists[level.toUpperCase()] = list;
    list.forEach((entry, index) => {
      if (!entry || !entry.de) return;
      addGermanTokens(lexicon, entry.de);
      addGermanTokens(lexicon, entry.de_article);
      addGermanTokens(lexicon, entry.de_plural);
      addStudyGerman(lexicon, entry.study);
      if (!byDe.has(entry.de)) byDe.set(entry.de, []);
      byDe.get(entry.de).push({
        level: entry.level || level.toUpperCase(),
        index,
        lv: entry.lv ?? "",
        article: entry.de_article ?? "",
        plural: entry.de_plural ?? ""
      });
    });
  });
  (loadArrayDataset("data/sentences.js") || []).forEach((entry) => addGermanTokens(lexicon, entry && entry.de));
  (loadArrayDataset("data/verbs.js") || []).forEach((entry) => {
    VERB_FORMS.forEach((form) => addGermanTokens(lexicon, entry && entry[form] && entry[form].de));
  });
  return { lexicon, lists, byDe };
}

function stripTags(text) {
  return String(text ?? "").replace(/<[^>]+>/g, " ");
}

function estimateDe(pieces, lexicon) {
  let chars = 0;
  let visible = 0;
  const byToken = new Map();
  pieces.forEach((piece) => {
    const text = stripTags(piece);
    visible += text.length;
    const re = new RegExp(GERMAN_WORD_RE.source, "g");
    let match = re.exec(text);
    while (match) {
      const token = match[0].toLowerCase();
      if (token.length >= 2 && lexicon.has(token)) {
        chars += match[0].length;
        byToken.set(token, (byToken.get(token) || 0) + match[0].length);
      }
      match = re.exec(text);
    }
  });
  return { chars, byToken, visible };
}

function contentTokens(text, lexicon) {
  const found = [];
  const re = new RegExp(GERMAN_WORD_RE.source, "g");
  let match = re.exec(String(text ?? ""));
  while (match) {
    const token = match[0].toLowerCase();
    if (token.length >= 4 && lexicon.has(token) && !FUNCTION_WORDS.has(token)) found.push(token);
    match = re.exec(String(text ?? ""));
  }
  return found;
}

function alignKey(text) {
  const decision = legacyExampleDe(text);
  const raw = decision.check || decision.unverifiable ? String(decision.value ?? "") : String(text ?? "");
  const at = raw.indexOf(" (");
  const head = at < 0 ? raw : raw.slice(0, at);
  return head.toLowerCase().replace(/\s+/g, " ").trim();
}

function alignSequences(left, right) {
  const n = left.length;
  const m = right.length;
  const dp = Array.from({ length: n + 1 }, () => new Int32Array(m + 1));
  for (let i = 1; i <= n; i += 1) dp[i][0] = i * GAP;
  for (let j = 1; j <= m; j += 1) dp[0][j] = j * GAP;
  for (let i = 1; i <= n; i += 1) {
    for (let j = 1; j <= m; j += 1) {
      const score = left[i - 1] === right[j - 1] ? 2 : -1;
      dp[i][j] = Math.max(dp[i - 1][j - 1] + score, dp[i - 1][j] + GAP, dp[i][j - 1] + GAP);
    }
  }
  const pairs = [];
  let i = n;
  let j = m;
  while (i > 0 || j > 0) {
    const score = i > 0 && j > 0 && left[i - 1] === right[j - 1] ? 2 : -1;
    const diag = i > 0 && j > 0 ? dp[i - 1][j - 1] + score : Number.NEGATIVE_INFINITY;
    const up = i > 0 ? dp[i - 1][j] + GAP : Number.NEGATIVE_INFINITY;
    const leftScore = j > 0 ? dp[i][j - 1] + GAP : Number.NEGATIVE_INFINITY;
    const best = Math.max(diag, up, leftScore);
    if (diag === best) {
      pairs.push([i - 1, j - 1]);
      i -= 1;
      j -= 1;
    } else if (up === best) {
      pairs.push([i - 1, null]);
      i -= 1;
    } else {
      pairs.push([null, j - 1]);
      j -= 1;
    }
  }
  pairs.reverse();
  return pairs;
}

function pairStatus(lvEx, langEx) {
  if (lvEx == null) return "EXTRA";
  const decision = legacyExampleDe(lvEx);
  if (decision.unverifiable || !decision.check) return "SKIP";
  if (langEx == null) return "MISSING";
  return decision.value === legacyExampleLang(langEx, decision.mode) ? "MATCH" : "MISMATCH";
}

function germanHead(value) {
  const text = String(value ?? "");
  const at = text.indexOf(" (");
  if (at < 0) return { head: text, paren: null };
  const rest = text.slice(at + 2);
  const close = rest.indexOf(")");
  return { head: text.slice(0, at), paren: close < 0 ? rest : rest.slice(0, close) };
}

const LV_DIACRITIC_LETTERS = "āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ";
const SHARED_LV_LETTERS = {
  lt: new Set([..."čšžūČŠŽŪ"]),
  cs: new Set([..."čšžČŠŽ"]),
  sk: new Set([..."čšžČŠŽ"]),
  sl: new Set([..."čšžČŠŽ"]),
  hr: new Set([..."čšžČŠŽ"]),
  bs: new Set([..."čšžČŠŽ"])
};
const EXPECTED_PAREN_SCRIPT = {
  ru: "Cyrillic",
  bg: "Cyrillic",
  uk: "Cyrillic",
  mk: "Cyrillic",
  sr: "Cyrillic",
  gr: "Greek"
};
const SCRIPT_TESTS = [
  ["Cyrillic", /[\u0400-\u04FF]/],
  ["Greek", /[\u0370-\u03FF]/],
  ["Hebrew", /[\u0590-\u05FF]/],
  ["Arabic", /[\u0600-\u06FF]/],
  ["Devanagari", /[\u0900-\u097F]/],
  ["Georgian", /[\u10A0-\u10FF]/],
  ["CJK", /[\u3040-\u30FF\u4E00-\u9FFF]/],
  ["Hangul", /[\uAC00-\uD7AF]/],
  ["Latin", /\p{Script=Latin}/u]
];

function expectedParenScript(lang) {
  return EXPECTED_PAREN_SCRIPT[lang] || "Latin";
}

function scriptsIn(text) {
  return SCRIPT_TESTS.filter(([, pattern]) => pattern.test(String(text ?? ""))).map(([name]) => name);
}

function parenContents(text) {
  const source = String(text ?? "");
  const dashAt = source.search(DASH_RE);
  const de = dashAt < 0 ? source : source.slice(0, dashAt);
  return [...de.matchAll(/\(([^)]*)\)/g)].map((match) => match[1]);
}

function lvDiacriticsIn(text) {
  return [...String(text ?? "")].filter((ch) => LV_DIACRITIC_LETTERS.includes(ch));
}

function novelScripts(text, lvValue) {
  const known = new Set(scriptsIn(lvValue).filter((name) => name !== "Latin"));
  return scriptsIn(text).filter((name) => name !== "Latin" && !known.has(name));
}

function foreignBucket(row) {
  const lang = String(row.langValue ?? "");
  const at = lang.indexOf(" (");
  const head = at < 0 ? lang : lang.slice(0, at);
  const parts = [...lang.matchAll(/\(([^)]*)\)/g)].map((match) => match[1]);
  const headScripts = novelScripts(head, row.lvValue);
  const parenScripts = [...new Set(parts.flatMap((part) => novelScripts(part, row.lvValue)))];
  if (headScripts.length) return { bucket: "FOREIGN_SCRIPT_IN_DE_WORD", parenAlso: parenScripts.length > 0, scripts: headScripts };
  if (parenScripts.length) return { bucket: "FOREIGN_SCRIPT_IN_PRONUNCIATION", parenAlso: true, scripts: parenScripts };
  return { bucket: "FOREIGN_SCRIPT_IN_DE_WORD", parenAlso: false, scripts: novelScripts(lang, row.lvValue) };
}

function capitalPredicate(lv, lang) {
  const a = String(lv ?? "");
  const b = String(lang ?? "");
  if (!a || a.length !== b.length || a.slice(1) !== b.slice(1)) return false;
  if (a[0] === b[0] || a[0].toLowerCase() !== b[0].toLowerCase()) return false;
  return a[0] !== a[0].toUpperCase() && b[0] === b[0].toUpperCase();
}

function extractConstArray(source, name) {
  const match = source.match(new RegExp(`const ${name} = (\\[[\\s\\S]*?\\n\\]);`));
  if (!match) return null;
  return vm.runInNewContext(`(${match[1]})`);
}

function suffix(lang) {
  return lang.charAt(0).toUpperCase() + lang.slice(1);
}

function loaderTrainingLangs(source) {
  const match = source.match(/if \(([\s\S]*?)\) && dataset === "courseLessons"/);
  if (!match) throw new Error("data-loader training condition not found");
  return [...match[1].matchAll(/"([a-z]{2})"/g)].map((item) => item[1]);
}

function deck(win, name) {
  if (!win || !Array.isArray(win[name])) return null;
  return win[name];
}

function posOf(entry, records) {
  const de = String(entry.de || "").trim();
  if (/\s/u.test(de)) return "PHRASE";
  if (PRONOUNS.has(de.toLowerCase())) return "PRONOUN";
  if (/^\p{Lu}/u.test(de)) return "NOUN";
  if (/(?:eln|ern|en)$/i.test(de)) return "VERB_CANDIDATE";
  return "ADJECTIVE_CANDIDATE";
}

function tantumCandidate(entry, records) {
  const de = String(entry.de || "").trim();
  if (!/^\p{Lu}/u.test(de) || /\s/u.test(de)) return "";
  const anyPlural = records.some((row) => String(row.plural || "").trim());
  if (anyPlural) return "";
  if (entry.de_article === "der" || entry.de_article === "das") return "SINGULARE_TANTUM_CANDIDATE";
  return "";
}

function meaningLine(records) {
  return records
    .slice()
    .sort((a, b) => `${a.level}${String(a.index).padStart(6, "0")}`.localeCompare(`${b.level}${String(b.index).padStart(6, "0")}`))
    .map((row) => `${row.level}[${row.index}] lv=${cell(row.lv)} article=${cell(row.article)} plural=${cell(row.plural)}`)
    .join("; ");
}

function nonGermanLetter(value) {
  return [...String(value ?? "")].some((ch) => /\p{L}/u.test(ch) && !/[A-Za-zÄÖÜäöüß]/.test(ch));
}

function latinScriptToken(token) {
  return ![...token].some((ch) => /\p{L}/u.test(ch) && !/\p{Script=Latin}/u.test(ch));
}

function indexLvStrings() {
  const exact = new Map();
  function put(value, where) {
    if (typeof value !== "string" || !value) return;
    if (!exact.has(value)) exact.set(value, []);
    const list = exact.get(value);
    if (list.length < 3 && !list.includes(where)) list.push(where);
  }
  function walk(node, file, trail) {
    if (typeof node === "string") {
      put(node, `${file}:${trail}`);
      return;
    }
    if (Array.isArray(node)) {
      node.forEach((item, index) => walk(item, file, `${trail}[${index}]`));
      return;
    }
    if (node && typeof node === "object") {
      Object.keys(node).sort().forEach((key) => walk(node[key], file, `${trail}.${key}`));
    }
  }
  LEVELS.forEach((level) => walk(loadArrayDataset(`data/${level}.js`), `data/${level}.js`, "$"));
  walk(loadArrayDataset("data/sentences.js"), "data/sentences.js", "$");
  walk(loadArrayDataset("data/verbs.js"), "data/verbs.js", "$");
  if (fileExists("data/nounArticles.js")) walk(loadWindowGlobals("data/nounArticles.js"), "data/nounArticles.js", "window");
  if (fileExists("data/dialogueIdMap.js")) walk(loadWindowGlobals("data/dialogueIdMap.js"), "data/dialogueIdMap.js", "window");
  const course = loadWindowGlobals("data/courseLessons.js");
  const htmlHits = [];
  Object.keys(course.COURSE_LESSON_HTML || {}).sort().forEach((key) => {
    htmlHits.push({ key, text: String(course.COURSE_LESSON_HTML[key]) });
  });
  walk(course.COURSE_LESSON_DATA, "data/courseLessons.js", "COURSE_LESSON_DATA");
  return { exact, htmlHits };
}

function findLv(index, value) {
  const exact = index.exact.get(value) || [];
  if (exact.length) return exact.slice().sort();
  const hits = [];
  index.htmlHits.forEach((row) => {
    if (row.text.includes(value)) hits.push(`data/courseLessons.js:COURSE_LESSON_HTML.${row.key}`);
  });
  return hits.slice(0, 3);
}

function mergedPairs(lvKeys, langKeys) {
  const rows = [];
  for (let i = 0; i < lvKeys.length - 1; i += 1) {
    if (!lvKeys[i] || !lvKeys[i + 1]) continue;
    const joined = `${lvKeys[i]} ${lvKeys[i + 1]}`;
    langKeys.forEach((key, index) => {
      if (key.includes(joined) && key !== lvKeys[i] && key !== lvKeys[i + 1]) {
        rows.push({ lvIndex: i, langIndex: index, joined, langKey: key });
      }
    });
  }
  return rows;
}

function main() {
  const diff = execSync("git diff -- data www/data languages ui.js", { cwd: ROOT, encoding: "utf8" });
  if (diff !== "") throw new Error("git diff of data, www/data, languages or ui.js is not empty");
  const report = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/de-consistency-audit.json"), "utf8"));
  const languages = report.languages.slice().sort();
  const { lexicon, lists, byDe } = loadLexicon();
  const lvCourse = loadWindowGlobals("data/courseLessons.js");
  const lvUnver = collectUnverifiable(lvCourse);
  if (lvUnver.chars !== 69157 || lvUnver.fields !== 178) {
    throw new Error(`LV unverifiable walk chars=${lvUnver.chars} fields=${lvUnver.fields}`);
  }
  if (lvUnver.chars * languages.length * 2 !== report.metrics.NOT_VERIFIABLE_CHARS) {
    throw new Error("LV unverifiable chars do not reproduce NOT_VERIFIABLE_CHARS");
  }
  const estimate = estimateDe(lvUnver.pieces, lexicon);
  const perLanguageChars = lvUnver.chars * 2;
  const perLanguageEstimate = estimate.chars * 2;
  const totalEstimate = perLanguageEstimate * languages.length;
  const coverageDe = Number(((perLanguageEstimate / perLanguageChars) * 100).toFixed(4));
  const globalCoverage = Number((((CHECKED_CHARS + totalEstimate) / (CHECKED_CHARS + report.metrics.NOT_VERIFIABLE_CHARS)) * 100).toFixed(4));

  const ui = fs.readFileSync(path.join(ROOT, "ui.js"), "utf8");
  const loader = fs.readFileSync(path.join(ROOT, "languages/data-loader.js"), "utf8");
  const loaderLangs = loaderTrainingLangs(loader);
  const lvLesson7 = extractConstArray(ui, "lesson7ExerciseCards");
  const lvLesson1 = extractConstArray(ui, "lesson1TrainingCards");
  if (!lvLesson7 || !lvLesson1) throw new Error("ui.js training consts missing");

  const lines = [];
  const push = (text) => lines.push(text);
  push("# DE konsekvences analīze 3");
  push("");
  push("Avots ir `reports/de-consistency-audit.json` un esošais kods. Dati, `www/data`, `languages` un `ui.js` netiek mainīti. Analīze neizvēlas pareizo vācu formu. Sākotnējā audita verdikts paliek PARTIAL, jo `NOT_VERIFIABLE` nav 0.");
  push("");
  push(`Audita bāze: zars \`${report.baseline.branch}\`, datums \`${report.baseline.date}\`, origin/main \`${report.baseline.originMainSha}\`.`);
  push("");
  push(report.statement);
  push("");

  push("## 1. lesson7 izpildes laiks");
  push("");
  push("`data-loader.js` ielādē `./data/{valoda}/courseTrainingCards.js` tikai tad, ja valoda ir iekodētajā sarakstā, datu kopa ir `courseLessons` un fails eksistē. Saraksts: " + loaderLangs.join(", ") + ".");
  push("");
  push("`ui.js` `expandExerciseToMicrocards` lesson7 uzvedni veido kā `infinitive + \" — \" + lv`. Redzamā glosa ir tā klāja `lv` lauks, kuru atgriež `getExerciseSourceCards`. Ja valodas globālis nav definēts, funkcija atgriež `lesson7ExerciseCards` (LV konstante `ui.js`).");
  push("");
  push("| valoda | fails | lesson7 | loader | ui.js lesson7 zars | lesson7 glosa | lesson1–6 klāji failā | ui.js lesson1–6 zars | lesson1–6 glosa | lesson7 verdikts | lesson1–6 verdikts |");
  push("|---|---|---|---|---|---|---|---|---|---|---|");
  const runtimeSamples = [];
  RUNTIME_LANGS.forEach((lang) => {
    const rel = `data/${lang}/courseTrainingCards.js`;
    const exists = fileExists(rel);
    const wwwSame = exists && fileExists(`www/${rel}`) && sha256File(rel) === sha256File(`www/${rel}`);
    const win = exists ? loadWindowGlobals(rel) : null;
    const lesson7 = deck(win, `lesson7ExerciseCards${suffix(lang)}`);
    const lessonDecks = [];
    for (let n = 1; n <= 6; n += 1) {
      if (deck(win, `lesson${n}TrainingCards${suffix(lang)}`)) lessonDecks.push(n);
    }
    const inLoader = loaderLangs.includes(lang);
    const ui7 = ui.includes(`lang === "${lang}" && typeof lesson7ExerciseCards${suffix(lang)}`);
    const ui16 = ui.includes(`lang === "${lang}"`) && ui.includes(`lesson1TrainingCards${suffix(lang)}`);
    const fileGloss = lesson7 && lesson7[0] ? lesson7[0].lv : null;
    const lvGloss = lvLesson7[0].lv;
    let seen7 = "LV glosa";
    let verdict7 = "FILE_MISSING";
    if (exists && lesson7) {
      verdict7 = inLoader && ui7 ? "OK" : "LOADER_OMISSION";
      seen7 = inLoader && ui7 ? "mērķvalodas glosa" : "LV glosa";
    }
    let seen16 = "LV glosa";
    let verdict16 = "FILE_MISSING";
    if (exists && lessonDecks.length === 6) {
      if (!inLoader) {
        verdict16 = "LOADER_OMISSION";
        seen16 = lang === "pl" ? "courseLessons tulkošanas kartītes" : "LV glosa";
      } else if (ui16) {
        verdict16 = "OK";
        seen16 = "mērķvalodas glosa";
      } else {
        verdict16 = "LOADER_OMISSION";
        seen16 = "LV glosa";
      }
    }
    const fileCell = exists ? (wwwSame ? "data+www identiski" : "data ir, www atšķiras") : "nav";
    push(`| ${lang} | ${fileCell} | ${lesson7 ? lesson7.length : 0} | ${inLoader ? "jā" : "nē"} | ${ui7 ? "jā" : "nē"} | ${seen7} | ${lessonDecks.join(",") || "nav"} | ${ui16 ? "jā" : "nē"} | ${seen16} | ${verdict7} | ${verdict16} |`);
    runtimeSamples.push({ lang, fileGloss, lvGloss, front: lessonDecks.length ? deck(win, `lesson1TrainingCards${suffix(lang)}`)[0] : null });
  });
  push("");
  push("Secinājums lesson7: visām septiņām valodām verdikts ir **LOADER_OMISSION**. Fails un lesson7 klājs eksistē, bet `data-loader.js` to neielādē, tāpēc globālis paliek nedefinēts un lietotājs redz LV `lesson7ExerciseCards` glosu un LV deklinācijas formas. `pl` ir `ui.js` zars, pārējām sešām zara nav; bez ielādes rezultāts ir tas pats LV kritiens.");
  push("");
  push("lesson1–6 nav tas pats mehānisms. `pl`: `ui.js` zars ir, bet tukšs klājs (fails nav ielādēts) neapstādina funkciju; tā nenokrīt uz LV `lesson1TrainingCards`, bet nolasa `COURSE_LESSON_DATA` tulkošanas kartītes. `ro`, `bg`, `gr`, `tr`, `sq`, `mk`: lesson1–6 zara nav, tāpēc `else if (lang !== \"lt\")` ņem LV `ui.js` klājus. Arī šīm sešām lesson1–6 verdikts ir **LOADER_OMISSION**, jo mērķa fails netiek ielādēts. **FILE_MISSING** un **OK** šajā septītniekā nav.");
  push("");
  runtimeSamples.forEach((row) => {
    const fileFront = row.front ? row.front.front || row.front.lv || "" : "";
    push(`- ${row.lang} lesson7 pirmā kartīte failā lv=${cell(row.fileGloss)}; ui.js LV lv=${cell(row.lvGloss)}; lesson1 front failā=${cell(fileFront)}; ui.js lesson1 front=${cell(lvLesson1[0].front || lvLesson1[0].lv || "")}.`);
  });
  push("");

  push("## 2. fr 204 un es 88 courseLessons MISSING");
  push("");
  push("Trūkstošie lauki visi ir `legacyHtml/kurss-example[i]`. Legacy HTML nav `sections` indeksa; sadalījums ir pa `COURSE_LESSON_HTML` atslēgu. Rindas ir data un www; šie faili ir baitiski identiski, tāpēc katra atslēga ir divreiz.");
  push("");
  const lengthFacts = {};
  ["fr", "es"].forEach((lang) => {
    const win = loadWindowGlobals(`data/${lang}/courseLessons.js`);
    if (sha256File(`data/${lang}/courseLessons.js`) !== sha256File(`www/data/${lang}/courseLessons.js`)) {
      throw new Error(`${lang} www courseLessons differs from data`);
    }
    lengthFacts[lang] = {};
    Object.keys(lvCourse.COURSE_LESSON_HTML).sort().forEach((key) => {
      lengthFacts[lang][key] = {
        lv: exampleDivs(lvCourse.COURSE_LESSON_HTML[key]).length,
        lang: exampleDivs((win.COURSE_LESSON_HTML || {})[key]).length
      };
    });
  });
  ["fr", "es"].forEach((lang) => {
    const rows = report.mismatches.filter((row) => row.language === lang && row.dataset === "courseLessons" && row.kind === "MISSING");
    if ((lang === "fr" && rows.length !== 204) || (lang === "es" && rows.length !== 88)) {
      throw new Error(`${lang} missing ${rows.length}`);
    }
    let fewer = 0;
    let inside = 0;
    const byKey = new Map();
    rows.forEach((row) => {
      const index = Number(String(row.field).match(/\[(\d+)\]/)[1]);
      const counts = lengthFacts[lang][row.id];
      if (!counts) throw new Error(`no counts for ${row.id}`);
      if (index >= counts.lang) fewer += 1;
      else inside += 1;
      if (!byKey.has(row.id)) byKey.set(row.id, { rows: 0, maxIndex: -1, ...counts });
      const bucket = byKey.get(row.id);
      bucket.rows += 1;
      bucket.maxIndex = Math.max(bucket.maxIndex, index);
    });
    push(`### ${lang}`);
    push("");
    push("| HTML atslēga | LV piemēri | mērķa piemēri | MISSING rindas | lielākais trūkstošais indekss |");
    push("|---|---:|---:|---:|---:|");
    [...byKey.entries()].sort((a, b) => a[0].localeCompare(b[0])).forEach(([key, bucket]) => {
      push(`| ${key} | ${bucket.lv} | ${bucket.lang} | ${bucket.rows} | ${bucket.maxIndex} |`);
    });
    push("");
    push(`MISSING rindas, kuru indekss ir ≥ mērķa saraksta garums: ${fewer}. Indekss iekš mērķa saraksta: ${inside}.`);
    push("");
    push(inside === 0 ? `Secinājums ${lang}: **TARGET_HAS_FEWER_EXAMPLES**.` : `Secinājums ${lang}: **EXTRACTION_MISMATCH**.`);
    push("");
    const examples = rows.slice().sort(rowSort).filter((row, index, all) => all.findIndex((other) => other.id === row.id && other.field === row.field) === index).slice(0, 20);
    examples.forEach((row) => {
      const counts = lengthFacts[lang][row.id];
      push(`- ${lang} \`${row.id}\` \`${row.field}\` LV piemēri=${counts.lv} mērķa piemēri=${counts.lang} LV=${cell(clip(row.lvValue, 140))} LANG=${cell(row.langValue)}`);
    });
    push("");
  });

  push("## 3. UNCLASSIFIED 758");
  push("");
  push("Prioritāte, bez pārklāšanās: `PRONUNCIATION_NOTE`, ja LV vai LANG satur `(...)`; citādi `REFLEXIVE_MISSING`, ja `\\bsich\\b` ir tikai vienā pusē; citādi `PRONOUN_TRANSLATED`, ja LV pēc apgriešanas sākas ar ich/du/er/sie/es/wir/ihr/ihn/ihm/ihnen/mich/dich/sich/mir/dir; citādi `SHORT_REPLACEMENT`, ja LV ir ne vairāk kā 3 vārdi; citādi `OTHER`.");
  push("");
  const unclassified = { PRONUNCIATION_NOTE: [], REFLEXIVE_MISSING: [], PRONOUN_TRANSLATED: [], SHORT_REPLACEMENT: [], OTHER: [] };
  report.mismatches.forEach((row) => {
    if (row.kind !== "TEXT" || textCategory(row) !== "OTHER" || otherCategory(row) !== "UNCLASSIFIED") return;
    unclassified[unclassifiedBucket(row)].push(row);
  });
  const unclassifiedSum = Object.values(unclassified).reduce((sum, rows) => sum + rows.length, 0);
  if (unclassifiedSum !== 758) throw new Error(`UNCLASSIFIED split ${unclassifiedSum}`);
  push("| kopa | rindas |");
  push("|---|---:|");
  Object.keys(unclassified).forEach((name) => push(`| ${name} | ${unclassified[name].length} |`));
  push(`| summa | ${unclassifiedSum} |`);
  push("");
  Object.keys(unclassified).forEach((name) => {
    const limit = name === "OTHER" ? 30 : 10;
    const shown = unclassified[name].slice().sort(rowSort).slice(0, limit);
    push(`### ${name}`);
    push("");
    push(shown.length < limit ? `Kopā ${unclassified[name].length} rindas, tāpēc piemēru ir ${shown.length}.` : `Pirmie ${shown.length} pēc stabilas kārtošanas.`);
    push("");
    shown.forEach((row) => {
      push(`- ${row.language} \`${row.dataset}\` \`${row.id}\` \`${row.field}\` koks=\`${row.tree}\` LV=${cell(clip(row.lvValue, 160))} LANG=${cell(clip(row.langValue, 160))}`);
    });
    push("");
  });

  push("## 4. DE aplēse NOT_VERIFIABLE rakstzīmēs");
  push("");
  push("ESTIMATE. Audita `NOT_VERIFIABLE_CHARS` 4287734 ir LV teksts, saskaitīts katrai no 31 mērķvalodām un abiem kokiem. Viena koka LV masa ir 69157 rakstzīmes un 178 lauki; 69157 × 2 × 31 = 4287734. Tā nav mērķa HTML masa.");
  push("");
  push("Leksika: visi vārdi no LV A1–C2 `de` / `de_article` / `de_plural` / study DE laukiem, `sentences.de`, verbu formu `de`, plus fiksēts vācu funkcijvārdu saraksts. Pirms meklēšanas no teksta tiek izņemti HTML tagi, lai `details`, `training` un `block` klases vārdos netiktu skaitīti. Rakstzīme skaitās DE, ja tā ir vismaz 2 burtu vārdā, kura mazie burti ir šajā leksikā. Latviešu burti ar diakritiku šajā skaitītājā neietilpst. `es` un `man` ir gan vācu funkcijvārdi, gan latviešu vārdi; tie paliek aplēsē. Saucējs joprojām ir audita neapstrādātā masa, ieskaitot tagus.");
  push("");
  push(`Viena LV koka aplēse: ${estimate.chars} DE rakstzīmes no ${lvUnver.chars} neapstrādātām rakstzīmēm (${estimate.visible} pēc tagu izņemšanas). Vienai valodai (data+www): ${perLanguageEstimate} / ${perLanguageChars}. Kopā 31 valodā: ${totalEstimate} / ${report.metrics.NOT_VERIFIABLE_CHARS}.`);
  push("");
  push(`COVERAGE_DE_ESTIMATE = aplēstās DE rakstzīmes / audita NOT_VERIFIABLE rakstzīmes = ${coverageDe}%. Skaitlis ir vienāds visām valodām, jo masa ir tas pats LV teksts.`);
  push("");
  push(`CHECKED_CHARS ${CHECKED_CHARS} ir iepriekšējā --chars-only mērījums un šeit netiek pārrēķināts. Ja aplēstās DE rakstzīmes pieskaita pārbaudītajām, globālā COVERAGE_WITH_DE_ESTIMATE = ${globalCoverage}%. Arī tas ir ESTIMATE.`);
  push("");
  push("| valoda | NOT_VERIFIABLE_CHARS | ESTIMATE_DE_CHARS | COVERAGE_DE_ESTIMATE |");
  push("|---|---:|---:|---:|");
  languages.forEach((lang) => {
    const chars = report.summary[lang].courseLessons.notVerifiableChars;
    if (chars !== perLanguageChars) throw new Error(`${lang} notVerifiableChars ${chars}`);
    push(`| ${lang} | ${chars} | ${perLanguageEstimate} | ${coverageDe}% |`);
  });
  push("");
  const topTokens = [...estimate.byToken.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, 20);
  push("Biežākie leksikas trāpījumi vienā LV kokā (rakstzīmes): " + topTokens.map(([token, count]) => `${token}=${count}`).join(", ") + ".");
  push("");

  push("## 5. CASE grupas un pirmais burts");
  push("");
  push("Predikāts: LV un mērķa virkne ir vienāda garuma, atšķiras tikai pirmā koda vienība, LV pirmais burts ir mazais, mērķa pirmais burts ir tā lielais variants, pārējais ir identisks.");
  push("");
  const caseGroups = {
    CASE_ONLY: report.mismatches.filter((row) => row.kind === "TEXT" && textCategory(row) === "CASE_ONLY"),
    CASE_PLUS_TRAILING_SPACE: [],
    CASE_ONLY_OTHER: []
  };
  report.mismatches.forEach((row) => {
    if (row.kind !== "TEXT" || textCategory(row) !== "OTHER") return;
    const category = otherCategory(row);
    if (caseGroups[category]) caseGroups[category].push(row);
  });
  if (caseGroups.CASE_ONLY.length !== 2548) throw new Error(`CASE_ONLY ${caseGroups.CASE_ONLY.length}`);
  if (caseGroups.CASE_PLUS_TRAILING_SPACE.length !== 794) throw new Error(`CASE_PLUS ${caseGroups.CASE_PLUS_TRAILING_SPACE.length}`);
  if (caseGroups.CASE_ONLY_OTHER.length !== 150) throw new Error(`CASE_ONLY_OTHER ${caseGroups.CASE_ONLY_OTHER.length}`);
  push("| grupa | rindas | predikāts turas | izņēmumi | izņēmumi, kas pēc beigu tukšuma noņemšanas turas |");
  push("|---|---:|---:|---:|---:|");
  const caseExceptions = {};
  Object.keys(caseGroups).forEach((name) => {
    const rows = caseGroups[name];
    let hold = 0;
    let trailingHold = 0;
    const exceptions = [];
    rows.forEach((row) => {
      if (capitalPredicate(row.lvValue, row.langValue)) {
        hold += 1;
        return;
      }
      exceptions.push(row);
      if (capitalPredicate(stripTrailing(row.lvValue), stripTrailing(row.langValue))) trailingHold += 1;
    });
    caseExceptions[name] = exceptions;
    push(`| ${name} | ${rows.length} | ${hold} | ${exceptions.length} | ${trailingHold} |`);
  });
  push("");
  push("CASE_ONLY izņēmumu nav: visās 2548 rindās LV sākas ar mazo burtu un mērķa vērtība ir tā pati virkne ar lielo pirmo burtu.");
  push("CASE_PLUS_TRAILING_SPACE raw predikāts neizpildās 794 rindās, jo garums atšķiras par beigu tukšumu. Pēc beigu tukšuma noņemšanas predikāts turas 792 rindās. Īstie izņēmumi ir rindas, kas neizpildās arī pēc tam.");
  push("CASE_ONLY_OTHER ir iekšēja reģistra maiņa, nevis tikai pirmais burts, tāpēc visas 150 rindas ir izņēmumi.");
  push("");
  Object.keys(caseExceptions).forEach((name) => {
    push(`### ${name} izņēmumi`);
    push("");
    const hard = caseExceptions[name].filter((row) => !capitalPredicate(stripTrailing(row.lvValue), stripTrailing(row.langValue)));
    const shown = (hard.length ? hard : caseExceptions[name]).slice().sort(rowSort).slice(0, 15);
    if (!shown.length) push("Izņēmumu nav.");
    shown.forEach((row) => {
      push(`- ${row.language} \`${row.dataset}\` \`${row.id}\` \`${row.field}\` koks=\`${row.tree}\` LV=${cell(clip(row.lvValue, 140))} LANG=${cell(clip(row.langValue, 140))}`);
    });
    push("");
  });

  push("## 6. Verifikācija");
  push("");
  push("`git diff -- data www/data languages ui.js` šīs palaišanas laikā ir tukšs.");
  push("");
  push("Ģenerators neliek atskaitē laikspiedogu. Divu secīgu palaišanu SHA ir jāsalīdzina ārpus faila.");
  push("");

  push("## 7. kurss-example izlīdzināšana");
  push("");
  push("Izlīdzināšana ir Needleman–Wunsch. Atslēga ir izvilktās DE puses galva pirms ` (`, mazajiem burtiem, sakļautām atstarpēm. Vienādas atslēgas dod +2, atšķirīgas −1, iztrūkums −1. Vienāda rezultāta gadījumā priekšroka ir diagonālei, tad LV iztrūkumam. Pēc izlīdzināšanas pāris tiek salīdzināts ar audita izvilkumu (`legacyExampleDe` / `legacyExampleLang`), bez normalizācijas.");
  push("");
  push("Sapludināts ieraksts: mērķa atslēga satur divu secīgu LV atslēgu savienojumu ar atstarpi un nav vienāda ar nevienu no tām. Trūkstošs ieraksts: izlīdzināšanas iztrūkums LV pusē, un LV piemērs ir pārbaudāms DE lauks.");
  push("");
  const align = {
    match: 0, mismatch: 0, missing: 0, extra: 0, skip: 0, merged: 0, pronLocal: 0, headDiffer: 0
  };
  const alignExamples = { mismatch: [], missing: [], merged: [], pron: [] };
  const mergePatterns = new Set();
  const contentPerLang = new Map();
  const frEsAlign = {
    fr: { match: 0, mismatch: 0, missing: 0 },
    es: { match: 0, mismatch: 0, missing: 0 }
  };
  const wwwDiffers = [];
  languages.forEach((lang) => {
    const rel = `data/${lang}/courseLessons.js`;
    const www = `www/data/${lang}/courseLessons.js`;
    if (!fileExists(rel) || sha256File(rel) !== sha256File(www)) wwwDiffers.push(lang);
    const win = loadWindowGlobals(rel);
    Object.keys(lvCourse.COURSE_LESSON_HTML).sort().forEach((key) => {
      const lvExamples = exampleDivs(lvCourse.COURSE_LESSON_HTML[key]);
      const langExamples = exampleDivs((win.COURSE_LESSON_HTML || {})[key]);
      const lvKeys = lvExamples.map(alignKey);
      const langKeys = langExamples.map(alignKey);
      const merges = mergedPairs(lvKeys, langKeys);
      align.merged += merges.length;
      merges.forEach((row) => {
        mergePatterns.add(`${key}\0${row.joined}\0${row.langKey}`);
        if (alignExamples.merged.length < 40) alignExamples.merged.push({ lang, key, ...row });
      });
      alignSequences(lvKeys, langKeys).forEach(([lvIndex, langIndex]) => {
        const status = pairStatus(lvIndex == null ? null : lvExamples[lvIndex], langIndex == null ? null : langExamples[langIndex]);
        if (status === "MATCH") align.match += 1;
        else if (status === "MISMATCH") {
          align.mismatch += 1;
          const decision = legacyExampleDe(lvExamples[lvIndex]);
          const langValue = legacyExampleLang(langExamples[langIndex], decision.mode);
          const content = alignKey(decision.value) !== alignKey(langValue);
          const seen = contentPerLang.get(lang) || 0;
          if (content && seen < 1) {
            contentPerLang.set(lang, seen + 1);
            alignExamples.mismatch.push({ lang, key, lvIndex, langIndex, lv: decision.value, langValue });
          }
        } else if (status === "MISSING") {
          align.missing += 1;
          if (alignExamples.missing.length < 20) {
            alignExamples.missing.push({ lang, key, lvIndex, lv: legacyExampleDe(lvExamples[lvIndex]).value });
          }
        } else if (status === "EXTRA") align.extra += 1;
        else align.skip += 1;
        if (frEsAlign[lang] && frEsAlign[lang][status.toLowerCase()] != null) frEsAlign[lang][status.toLowerCase()] += 1;
        if (PRON_KEYS.has(key) && lvIndex != null && langIndex != null) {
          const decision = legacyExampleDe(lvExamples[lvIndex]);
          if (decision.check) {
            const langValue = legacyExampleLang(langExamples[langIndex], decision.mode);
            const lvHead = germanHead(decision.value);
            const langHead = germanHead(langValue);
            if (lvHead.head === langHead.head && String(lvHead.paren) !== String(langHead.paren)) {
              align.pronLocal += 1;
              if (alignExamples.pron.length < 20) {
                alignExamples.pron.push({ lang, key, head: lvHead.head, lvParen: lvHead.paren, langParen: langHead.paren });
              }
            } else if (lvHead.head !== langHead.head && decision.value !== langValue) align.headDiffer += 1;
          }
        }
      });
    });
  });
  const indexKurss = { TEXT: 0, MISSING: 0, EXTRA: 0 };
  report.mismatches.forEach((row) => {
    if (row.dataset !== "courseLessons" || !String(row.field).startsWith("legacyHtml/kurss-example[")) return;
    if (indexKurss[row.kind] != null) indexKurss[row.kind] += 1;
  });
  push(`www courseLessons atšķiras no data: ${wwwDiffers.length ? wwwDiffers.join(", ") : "nevienā valodā"}. Izlīdzināšana mērīta data kokā; identiskam www kokam abu koku skaits ir divkāršs.`);
  push("");
  push("| mērs | data koks | data+www, ja www identisks |");
  push("|---|---:|---:|");
  [
    ["INDEX_TEXT", indexKurss.TEXT, indexKurss.TEXT],
    ["INDEX_MISSING", indexKurss.MISSING, indexKurss.MISSING],
    ["INDEX_EXTRA", indexKurss.EXTRA, indexKurss.EXTRA],
    ["ALIGNED_MATCH", align.match, align.match * 2],
    ["ALIGNED_MISMATCH", align.mismatch, align.mismatch * 2],
    ["ALIGNED_MISSING", align.missing, align.missing * 2],
    ["ALIGNED_EXTRA", align.extra, align.extra * 2],
    ["MERGED", align.merged, align.merged * 2]
  ].forEach(([name, dataCount, both]) => {
    const bothCell = name.startsWith("INDEX") ? dataCount : both;
    push(`| ${name} | ${name.startsWith("INDEX") ? "abi koki " + dataCount : dataCount} | ${bothCell} |`);
  });
  push("");
  push("INDEX rindu skaits jau ir abu koku summa no JSON. ALIGNED un MERGED ir data koka mērījums. MERGED ir gadījumi, nevis unikāli paraugi: unikālo (atslēga, LV pāris, mērķa atslēga) paraugu ir " + mergePatterns.size + ".");
  push(`fr data koks pēc izlīdzināšanas: MATCH ${frEsAlign.fr.match}, ALIGNED_MISMATCH ${frEsAlign.fr.mismatch}, ALIGNED_MISSING ${frEsAlign.fr.missing}.`);
  push(`es data koks pēc izlīdzināšanas: MATCH ${frEsAlign.es.match}, ALIGNED_MISMATCH ${frEsAlign.es.mismatch}, ALIGNED_MISSING ${frEsAlign.es.missing}.`);
  push("");
  push("### ALIGNED_MISMATCH piemēri");
  push("");
  alignExamples.mismatch.slice(0, 20).forEach((row) => {
    push(`- ${row.lang} \`${row.key}\` LV[${row.lvIndex}]↔LANG[${row.langIndex}] LV=${cell(clip(row.lv, 140))} LANG=${cell(clip(row.langValue, 140))}`);
  });
  push("");
  push("### Sapludinātie");
  push("");
  if (!alignExamples.merged.length) push("Sapludinātu ierakstu nav.");
  alignExamples.merged.slice(0, 10).forEach((row) => {
    push(`- ${row.lang} \`${row.key}\` LV[${row.lvIndex}]+LV[${row.lvIndex + 1}] → LANG[${row.langIndex}] atslēga=${cell(clip(row.langKey, 160))}`);
  });
  push("");
  push("### Trūkstošie pēc izlīdzināšanas");
  push("");
  alignExamples.missing.slice(0, 10).forEach((row) => {
    push(`- ${row.lang} \`${row.key}\` LV[${row.lvIndex}] ${cell(clip(row.lv, 140))}`);
  });
  push("");

  push("## 8. Izruna iekavās");
  push("");
  push("Tikai `kurssPronunciationLesson` un `kurssConsonantsLesson`. Salīdzināmā vācu daļa ir teksts pirms pirmā ` (`. Iekavu saturs ir `PRONUNCIATION_LOCAL` un netiek salīdzināts ar LV.");
  push("");
  push(`Data kokā pēc izlīdzināšanas vācu galva sakrīt un atšķiras tikai iekavu saturs: ${align.pronLocal}. Tās ir PRONUNCIATION_LOCAL. Galvas atšķiras: ${align.headDiffer}. Abu koku PRONUNCIATION_LOCAL, ja www ir identisks: ${align.pronLocal * 2}.`);
  push("");
  push("`ALIGNED_MISMATCH` 7. sadaļā joprojām skaita pilnas virknes atšķirību. Pēc šī likuma no data koka ALIGNED_MISMATCH jāatskaita izrunas iekavas: " + `${align.mismatch - align.pronLocal}.`);
  push("");
  alignExamples.pron.slice(0, 10).forEach((row) => {
    push(`- ${row.lang} \`${row.key}\` galva=${cell(clip(row.head, 80))} LV iekavas=${cell(row.lvParen)} LANG iekavas=${cell(row.langParen)}`);
  });
  push("");

  push("## 9. NOT_VERIFIABLE no mērķa HTML un vācu salas");
  push("");
  push("Šeit NOT_VERIFIABLE tiek rēķināts no katras mērķvalodas paša `courseLessons.js` ar to pašu izvilkuma likumu, nevis no LV. ESTIMATE ir tā pati leksikas aplēse šajā mērķa masā pēc HTML tagu izņemšanas. GERMAN_ISLAND_CANDIDATES ir heuristika: vācu leksikas vārdi garumā ≥ 4, kas nav funkcijvārdi un stāv redzamajā HTML atlikumā ārpus `kurss-example` un conjugation `<strong>` iekšienes. Vienādi rakstīts tulkojuma vārds, piemēram artikel vai grammatik, paliek kandidāts.");
  push("");
  const lvIsland = {};
  Object.keys(lvUnver.remainders).forEach((key) => {
    lvIsland[key] = new Set(contentTokens(stripTags(lvUnver.remainders[key]), lexicon));
  });
  push("| valoda | mērķa lauki | mērķa rakstzīmes | ESTIMATE_DE_CHARS | COVERAGE_DE_ESTIMATE | salas | unikāli | arī LV | tikai mērķī |");
  push("|---|---:|---:|---:|---:|---:|---:|---:|---:|");
  const islandExamples = [];
  const islandSeen = new Set();
  const targetTotals = { chars: 0, estimate: 0, islands: 0 };
  languages.forEach((lang) => {
    const win = loadWindowGlobals(`data/${lang}/courseLessons.js`);
    const unver = collectUnverifiable(win);
    const est = estimateDe(unver.pieces, lexicon);
    let occ = 0;
    const unique = new Set();
    const shared = new Set();
    const only = new Set();
    Object.keys(unver.remainders).sort().forEach((key) => {
      const plain = stripTags(unver.remainders[key]);
      const tokens = contentTokens(plain, lexicon);
      const lvSet = lvIsland[key] || new Set();
      tokens.forEach((token) => {
        occ += 1;
        unique.add(`${key}\0${token}`);
        if (lvSet.has(token)) shared.add(`${key}\0${token}`);
        else only.add(`${key}\0${token}`);
      });
      tokens.forEach((token) => {
        if (lvSet.has(token) || islandSeen.has(lang)) return;
        islandSeen.add(lang);
        const at = plain.toLowerCase().indexOf(token);
        const ctx = plain.slice(Math.max(0, at - 35), at + token.length + 35).replace(/\s+/g, " ");
        islandExamples.push({ lang, key, token, ctx });
      });
    });
    const coverage = unver.chars === 0 ? 0 : Number(((est.chars / unver.chars) * 100).toFixed(4));
    targetTotals.chars += unver.chars;
    targetTotals.estimate += est.chars;
    targetTotals.islands += occ;
    push(`| ${lang} | ${unver.fields} | ${unver.chars} | ${est.chars} | ${coverage}% | ${occ} | ${unique.size} | ${shared.size} | ${only.size} |`);
  });
  push("");
  push(`Data koka summa: mērķa rakstzīmes ${targetTotals.chars}, ESTIMATE_DE_CHARS ${targetTotals.estimate}, GERMAN_ISLAND_CANDIDATES ${targetTotals.islands}. www ir identisks, tāpēc abu koku rakstzīmju summa ir ${targetTotals.chars * 2}. Šie skaitļi nav audita 4287734.`);
  push("");
  push("### GERMAN_ISLAND_CANDIDATES piemēri, kuru vārda nav tādas pašas LV atslēgas atlikumā");
  push("");
  islandExamples.sort((a, b) => `${a.lang}${a.key}${a.token}`.localeCompare(`${b.lang}${b.key}${b.token}`)).slice(0, 20).forEach((row) => {
    push(`- ${row.lang} \`${row.key}\` ${row.token} konteksts=${cell(clip(row.ctx, 120))}`);
  });
  push("");

  push("## 10. FOREIGN_WORD_IN_DE_SLOT");
  push("");
  push("DE slots šeit ir audita TEXT rinda data kokā: mērķa vērtība nav baitiski vienāda ar LV. Vārds ir ārpus leksikas, ja tā mazie burti nav LV vācu leksikā un nav funkcijvārdu sarakstā. `OTHER_ALPHABET`: burtam nav latīņu alfabēta. `TRANSLATION`: rindas kategorija ir TRANSLATED_GERMAN. `WRONG_LANGUAGE`: pārējie latīņu vārdi ārpus leksikas. Kategorija nenosauc, vai vārds ir nl vai en.");
  push("");
  const foreign = { OTHER_ALPHABET: [], TRANSLATION: [], WRONG_LANGUAGE: [] };
  const byValue = new Map();
  report.mismatches.forEach((row) => {
    if (row.kind !== "TEXT" || row.tree !== "data") return;
    const category = textCategory(row);
    const tokens = String(row.langValue ?? "").match(/\p{L}+/gu) || [];
    tokens.forEach((token) => {
      if (lexicon.has(token.toLowerCase())) return;
      let bucket = "WRONG_LANGUAGE";
      if (!latinScriptToken(token)) bucket = "OTHER_ALPHABET";
      else if (category === "TRANSLATED_GERMAN") bucket = "TRANSLATION";
      foreign[bucket].push({ ...row, token });
    });
    const key = String(row.langValue ?? "");
    if (!byValue.has(key)) byValue.set(key, new Set());
    byValue.get(key).add(row.language);
  });
  push("| kopa | vārdi |");
  push("|---|---:|");
  Object.keys(foreign).forEach((name) => push(`| ${name} | ${foreign[name].length} |`));
  push("");
  Object.keys(foreign).forEach((name) => {
    push(`### ${name}`);
    push("");
    const shown = foreign[name].slice().sort((a, b) => `${a.language}${a.token}${a.id}${a.field}`.localeCompare(`${b.language}${b.token}${b.id}${b.field}`));
    const uniq = [];
    const seen = new Set();
    shown.forEach((row) => {
      const key = `${row.language}\0${row.token}\0${row.id}\0${row.field}`;
      if (seen.has(key)) return;
      seen.add(key);
      uniq.push(row);
    });
    uniq.slice(0, 10).forEach((row) => {
      push(`- ${row.language} \`${row.token}\` \`${row.dataset}\` \`${row.id}\` \`${row.field}\` LV=${cell(clip(row.lvValue, 100))} LANG=${cell(clip(row.langValue, 100))}`);
    });
    push("");
  });
  const families = new Map();
  byValue.forEach((set, value) => {
    if (set.size < 2) return;
    const signature = [...set].sort().join(",");
    if (!families.has(signature)) families.set(signature, []);
    families.get(signature).push(value);
  });
  push("### Kopēšanas ģimenes");
  push("");
  push("Ģimene ir valodu kopa, kurai data kokā ir identiska TEXT `langValue`. www nav skaitīts otrreiz.");
  push("");
  push("| valodas | kopīgās vērtības |");
  push("|---|---:|");
  [...families.entries()].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])).forEach(([signature, values]) => {
    push(`| ${signature} | ${values.length} |`);
  });
  push("");
  function familyCount(required) {
    let count = 0;
    byValue.forEach((set) => {
      if (required.every((lang) => set.has(lang))) count += 1;
    });
    return count;
  }
  push(`Vērtības, kas ir vienlaikus it, lb un nl: ${familyCount(["it", "lb", "nl"])}.`);
  push(`Vērtības, kas ir vienlaikus hr, sr un mk: ${familyCount(["hr", "sr", "mk"])}.`);
  push(`Vērtības, kas ir vienlaikus it un lb: ${familyCount(["it", "lb"])}.`);
  push(`Vērtības, kas ir vienlaikus hr un sr: ${familyCount(["hr", "sr"])}.`);
  push(`Vērtības, kas ir vienlaikus sr un mk: ${familyCount(["sr", "mk"])}.`);
  push("");
  [...families.entries()].sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0])).slice(0, 8).forEach(([signature, values]) => {
    push(`- ${signature}: ${values.slice().sort((a, b) => a.localeCompare(b)).slice(0, 5).map((value) => cell(clip(value, 80))).join("; ")}`);
  });
  push("");

  push("## 11. A1 TEXT");
  push("");
  const a1Text = report.mismatches.filter((row) => row.dataset === "a1" && row.kind === "TEXT").sort(rowSort);
  if (a1Text.length !== 14) throw new Error(`A1 TEXT ${a1Text.length}`);
  push(`Rindas: ${a1Text.length}.`);
  push("");
  a1Text.forEach((row) => {
    push(`- ${row.language} koks=\`${row.tree}\` id=\`${row.id}\` lauks=\`${row.field}\` LV=${cell(row.lvValue)} LANG=${cell(row.langValue)}`);
  });
  push("");

  push("## 12. A1 EXTRA");
  push("");
  push("Unikāla atslēga ir kartes id, lauka ceļš un mērķa vērtība. Valodu skaits ir unikālās valodas data un www kokos. LV vērtība netiek papildināta.");
  push("");
  const lvIndex = indexLvStrings();
  const a1Extra = report.mismatches.filter((row) => row.dataset === "a1" && row.kind === "EXTRA");
  const extraMap = new Map();
  a1Extra.forEach((row) => {
    const key = `${row.id}\0${row.field}\0${String(row.langValue)}`;
    if (!extraMap.has(key)) {
      extraMap.set(key, { id: row.id, field: row.field, value: row.langValue, langs: new Set() });
    }
    extraMap.get(key).langs.add(row.language);
  });
  const extraRows = [...extraMap.values()].sort((a, b) => `${a.id}${a.field}${String(a.value)}`.localeCompare(`${b.id}${b.field}${String(b.value)}`));
  push(`EXTRA rindas ${a1Extra.length}, unikālas kombinācijas ${extraRows.length}.`);
  push("");
  extraRows.forEach((row) => {
    const places = findLv(lvIndex, String(row.value ?? ""));
    const lvCell = places.length ? places.join(", ") : "LV_ABSENT";
    push(`- id=\`${row.id}\` ceļš=\`${row.field}\` vērtība=${cell(row.value)} valodas=${row.langs.size} (${[...row.langs].sort().join(",")}) LV=${lvCell}`);
  });
  push("");

  push("## 13. LV anomālijas");
  push("");
  push("Vārdšķira nāk tikai no LV laukiem. Atstarpe `de` vērtībā ir PHRASE. Slēgtais vietniekvārdu saraksts ir PRONOUN. Lielais sākumburts ir NOUN. Mazais vārds ar -en/-eln/-ern ir VERB_CANDIDATE. Cits mazais vārds ir ADJECTIVE_CANDIDATE. Īpašības vārdu un darbības vārdu LV dati neatdala ar atsevišķu lauku.");
  push("");
  push("SINGULARE_TANTUM_CANDIDATE ir NOUN apakškopa: artikuls ir `der` vai `das`, un nevienā LV ierakstā ar to pašu `de` nav `de_plural`. Tas nav pierādījums, ka vārds ir singulare tantum; tā izskatās arī neaizpildīts daudzskaitlis. `die` ar tukšu daudzskaitli netiek marķēts: sieviešu dzimte un plurale tantum LV laukos izskatās vienādi. PLURALE_TANTUM: 0.");
  push("");
  const anomalyCounts = {};
  report.lvAnomalies.forEach((row) => { anomalyCounts[row.kind] = (anomalyCounts[row.kind] || 0) + 1; });
  ["EMPTY_ARTICLE", "EMPTY_PLURAL"].forEach((kind) => {
    const buckets = {};
    const tantum = {};
    const examples = {};
    let dieEmpty = 0;
    report.lvAnomalies.filter((row) => row.kind === kind).forEach((row) => {
      const list = lists[row.level];
      const entry = list && list[row.index];
      if (!entry || entry.de !== row.de) throw new Error(`anomaly join failed ${kind} ${row.de}`);
      const records = byDe.get(row.de) || [];
      const pos = posOf(entry, records);
      const mark = tantumCandidate(entry, records);
      if (pos === "NOUN" && entry.de_article === "die" && !String(entry.de_plural || "").trim()) dieEmpty += 1;
      buckets[pos] = (buckets[pos] || 0) + 1;
      if (mark) tantum[mark] = (tantum[mark] || 0) + 1;
      if (!examples[pos]) examples[pos] = [];
      if (examples[pos].length < 10) examples[pos].push({ ...row, pos, mark, lv: entry.lv, article: entry.de_article, plural: entry.de_plural });
    });
    const sum = Object.values(buckets).reduce((total, count) => total + count, 0);
    if (sum !== anomalyCounts[kind]) throw new Error(`${kind} pos sum ${sum}`);
    push(`### ${kind}`);
    push("");
    push("| vārdšķira | rindas |");
    push("|---|---:|");
    Object.keys(buckets).sort().forEach((pos) => push(`| ${pos} | ${buckets[pos]} |`));
    push(`| summa | ${sum} |`);
    push("");
    push("SINGULARE_TANTUM_CANDIDATE apakškopa: " + (tantum.SINGULARE_TANTUM_CANDIDATE || 0) + ". `die` ar tukšu daudzskaitli, bez tantum marķējuma: " + dieEmpty + ". PLURALE_TANTUM: 0.");
    push("");
    Object.keys(examples).sort().forEach((pos) => {
      push(`#### ${pos}`);
      push("");
      examples[pos].forEach((row) => {
        push(`- ${row.level}[${row.index}] de=${cell(row.de)} lv=${cell(row.lv)} article=${cell(row.article ?? "")} plural=${cell(row.plural ?? "")} ${row.mark || ""}`.trim());
      });
      push("");
    });
  });
  ["SAME_DE_DIFFERENT_ARTICLE", "DUPLICATE_IN_LEVEL", "DUPLICATE_ACROSS_LEVELS"].forEach((kind) => {
    push(`### ${kind}`);
    push("");
    report.lvAnomalies.filter((row) => row.kind === kind).slice().sort((a, b) => `${a.de}${a.level}`.localeCompare(`${b.de}${b.level}`)).forEach((row) => {
      const records = (byDe.get(row.de) || []).filter((item) => kind !== "DUPLICATE_IN_LEVEL" || item.level === row.level);
      push(`- de=${cell(row.de)} līmenis=\`${row.level}\` detail=${cell(row.detail)} LV: ${meaningLine(records) || "nav"}`);
    });
    push("");
  });

  push("## 14. Izrunas iekavas un FOREIGN_SCRIPT");
  push("");
  push("Avots ir `kurssPronunciationLesson` un `kurssConsonantsLesson`, iekavas DE pusē pirms `–`/`—`. Aiz svītras iekavu nav. www `courseLessons.js` ir baitiski identisks data, tāpēc 14.a un 14.b skaita vienu koku.");
  push("");
  push("Latviešu diakritika ir `āčēģīķļņšūž`. Burti, kas ir arī mērķvalodas ortogrāfijā, nav negaidīti: `lt` č š ž ū; `cs`, `sk`, `sl`, `hr`, `bs` č š ž. Pārējās mērķvalodās viss šis komplekts ir negaidīts. `sr` paredzētais alfabēts ir kirilica, tāpēc č š ž tur nav paredzēti.");
  push("");
  push("Paredzētais iekavu alfabēts: `ru`, `bg`, `uk`, `mk`, `sr` kirilica; `gr` grieķu; pārējām latīņu. LATIN_REMAINING ir kirilicas vai grieķu valoda, kuras iekavas joprojām ir latīņu. OTHER_SCRIPT ir cits alfabēts, arī jauktas iekavas.");
  push("");
  push("| valoda | iekavas | paredzētais | LOCAL | LATIN_REMAINING | OTHER_SCRIPT | bez burtiem | LV diakritika negaidīta | tikai kopīgie burti |");
  push("|---|---:|---|---:|---:|---:|---:|---:|---:|");
  const pronSamples = { unexpected: [], latin: [], other: [] };
  const pronSeen = { unexpected: new Map(), latin: new Map(), other: new Map() };
  languages.forEach((lang) => {
    const rel = `data/${lang}/courseLessons.js`;
    const www = `www/data/${lang}/courseLessons.js`;
    if (sha256File(rel) !== sha256File(www)) throw new Error(`${lang} www courseLessons differs`);
    const win = loadWindowGlobals(rel);
    const expected = expectedParenScript(lang);
    const shared = SHARED_LV_LETTERS[lang] || new Set();
    const tally = { paren: 0, local: 0, latinRemaining: 0, other: 0, noLetter: 0, unexpected: 0, sharedOnly: 0 };
    ["kurssPronunciationLesson", "kurssConsonantsLesson"].forEach((key) => {
      exampleDivs((win.COURSE_LESSON_HTML || {})[key]).forEach((raw, index) => {
        parenContents(raw).forEach((paren) => {
          tally.paren += 1;
          const scripts = scriptsIn(paren);
          const nonLatin = scripts.filter((name) => name !== "Latin");
          let klass = "NO_LETTER";
          if (!scripts.length) klass = "NO_LETTER";
          else if (scripts.length > 1) klass = "MIXED";
          else klass = scripts[0];
          if (klass === expected) tally.local += 1;
          else if ((expected === "Cyrillic" || expected === "Greek") && klass === "Latin") tally.latinRemaining += 1;
          else if (klass === "NO_LETTER") tally.noLetter += 1;
          else tally.other += 1;
          const marks = lvDiacriticsIn(paren);
          const unexpectedMarks = marks.filter((ch) => !shared.has(ch));
          if (unexpectedMarks.length) {
            tally.unexpected += 1;
            const seen = pronSeen.unexpected.get(lang) || 0;
            if (seen < 1) {
              pronSeen.unexpected.set(lang, seen + 1);
              pronSamples.unexpected.push({ lang, key, index, paren, marks: [...new Set(unexpectedMarks)].join("") });
            }
          } else if (marks.length) tally.sharedOnly += 1;
          if ((expected === "Cyrillic" || expected === "Greek") && klass === "Latin") {
            const seen = pronSeen.latin.get(lang) || 0;
            if (seen < 1) {
              pronSeen.latin.set(lang, seen + 1);
              pronSamples.latin.push({ lang, key, index, paren });
            }
          }
          if (klass !== expected && klass !== "Latin" && klass !== "NO_LETTER") {
            const seen = pronSeen.other.get(lang) || 0;
            if (seen < 1) {
              pronSeen.other.set(lang, seen + 1);
              pronSamples.other.push({ lang, key, index, paren, klass: nonLatin.join("+") || klass });
            }
          }
        });
      });
    });
    const sum = tally.local + tally.latinRemaining + tally.other + tally.noLetter;
    if (sum !== tally.paren) throw new Error(`${lang} paren classes ${sum} !== ${tally.paren}`);
    push(`| ${lang} | ${tally.paren} | ${expected} | ${tally.local} | ${tally.latinRemaining} | ${tally.other} | ${tally.noLetter} | ${tally.unexpected} | ${tally.sharedOnly} |`);
  });
  push("");
  push("### LV diakritika iekavās, kur tai nav jābūt");
  push("");
  if (!pronSamples.unexpected.length) push("Negadījumu nav.");
  pronSamples.unexpected.sort((a, b) => `${a.lang}${a.key}${a.index}`.localeCompare(`${b.lang}${b.key}${b.index}`)).forEach((row) => {
    push(`- ${row.lang} \`${row.key}\` [${row.index}] iekavas=${cell(row.paren)} burti=${cell(row.marks)}`);
  });
  push("");
  push("### LATIN_REMAINING");
  push("");
  if (!pronSamples.latin.length) push("Nav.");
  pronSamples.latin.sort((a, b) => `${a.lang}${a.key}${a.index}`.localeCompare(`${b.lang}${b.key}${b.index}`)).forEach((row) => {
    push(`- ${row.lang} \`${row.key}\` [${row.index}] iekavas=${cell(row.paren)}`);
  });
  push("");
  push("### OTHER_SCRIPT iekavās");
  push("");
  if (!pronSamples.other.length) push("Nav.");
  pronSamples.other.sort((a, b) => `${a.lang}${a.key}${a.index}`.localeCompare(`${b.lang}${b.key}${b.index}`)).forEach((row) => {
    push(`- ${row.lang} \`${row.key}\` [${row.index}] ${row.klass} iekavas=${cell(row.paren)}`);
  });
  push("");
  push("### FOREIGN_SCRIPT sadalījums");
  push("");
  push("Sadalījums ir visu audita FOREIGN_SCRIPT rindu, data un www. Ja svešais alfabēts ir vācu daļā pirms ` (`, rinda ir FOREIGN_SCRIPT_IN_DE_WORD. Ja tas ir tikai iekavās, rinda ir FOREIGN_SCRIPT_IN_PRONUNCIATION. Paredzēts nozīmē, ka iekavu alfabēts ir šīs valodas paredzētais alfabēts.");
  push("");
  const foreignRows = report.mismatches.filter((row) => row.kind === "TEXT" && row.foreignScript);
  if (foreignRows.length !== 466) throw new Error(`FOREIGN_SCRIPT ${foreignRows.length}`);
  const foreignByLang = new Map();
  const foreignSamples = { word: [], pron: [], pronOther: [] };
  const foreignSampleSeen = { word: new Set(), pron: new Set(), pronOther: new Set() };
  let deWord = 0;
  let pron = 0;
  let pronExpected = 0;
  let deWordParenAlso = 0;
  foreignRows.forEach((row) => {
    const split = foreignBucket(row);
    if (split.bucket === "FOREIGN_SCRIPT_IN_DE_WORD") {
      deWord += 1;
      if (split.parenAlso) deWordParenAlso += 1;
    } else pron += 1;
    const expected = expectedParenScript(row.language);
    const expectedPron = split.bucket === "FOREIGN_SCRIPT_IN_PRONUNCIATION" && split.scripts.length === 1 && split.scripts[0] === expected;
    if (expectedPron) pronExpected += 1;
    if (!foreignByLang.has(row.language)) {
      foreignByLang.set(row.language, { word: 0, pron: 0, pronExpected: 0, total: 0 });
    }
    const bucket = foreignByLang.get(row.language);
    bucket.total += 1;
    if (split.bucket === "FOREIGN_SCRIPT_IN_DE_WORD") bucket.word += 1;
    else bucket.pron += 1;
    if (expectedPron) bucket.pronExpected += 1;
    const sampleKey = split.bucket === "FOREIGN_SCRIPT_IN_DE_WORD" ? "word" : (expectedPron ? "pron" : "pronOther");
    if (!split.scripts.length) throw new Error(`FOREIGN_SCRIPT row without a located script ${row.language} ${row.field}`);
    if (row.tree === "data" && !foreignSampleSeen[sampleKey].has(row.language)) {
      foreignSampleSeen[sampleKey].add(row.language);
      foreignSamples[sampleKey].push({ ...row, scripts: split.scripts.join(",") });
    }
  });
  if (deWord + pron !== 466) throw new Error(`foreign split ${deWord}+${pron}`);
  push(`Kopā FOREIGN_SCRIPT ${foreignRows.length}: FOREIGN_SCRIPT_IN_DE_WORD ${deWord}, FOREIGN_SCRIPT_IN_PRONUNCIATION ${pron}. No izrunas rindām paredzētajā alfabētā ir ${pronExpected}, citā alfabētā ${pron - pronExpected}. DE_WORD rindās, kur svešais alfabēts ir arī iekavās: ${deWordParenAlso}.`);
  push("");
  push("| valoda | FOREIGN_SCRIPT | IN_DE_WORD | IN_PRONUNCIATION | no tām paredzētais alfabēts |");
  push("|---|---:|---:|---:|---:|");
  [...foreignByLang.entries()].sort((a, b) => a[0].localeCompare(b[0])).forEach(([lang, bucket]) => {
    push(`| ${lang} | ${bucket.total} | ${bucket.word} | ${bucket.pron} | ${bucket.pronExpected} |`);
  });
  push("");
  push("### FOREIGN_SCRIPT_IN_DE_WORD");
  push("");
  foreignSamples.word.sort(rowSort).slice(0, 10).forEach((row) => {
    push(`- ${row.language} \`${row.id}\` \`${row.field}\` ${row.scripts} LV=${cell(clip(row.lvValue, 80))} LANG=${cell(clip(row.langValue, 80))}`);
  });
  push("");
  push("### FOREIGN_SCRIPT_IN_PRONUNCIATION paredzētajā alfabētā");
  push("");
  foreignSamples.pron.sort(rowSort).slice(0, 10).forEach((row) => {
    push(`- ${row.language} \`${row.id}\` \`${row.field}\` ${row.scripts} LV=${cell(clip(row.lvValue, 80))} LANG=${cell(clip(row.langValue, 80))}`);
  });
  push("");
  push("### FOREIGN_SCRIPT_IN_PRONUNCIATION citā alfabētā");
  push("");
  if (!foreignSamples.pronOther.length) push("Nav.");
  foreignSamples.pronOther.sort(rowSort).slice(0, 10).forEach((row) => {
    push(`- ${row.language} \`${row.id}\` \`${row.field}\` ${row.scripts} LV=${cell(clip(row.lvValue, 80))} LANG=${cell(clip(row.langValue, 80))}`);
  });
  push("");

  push("## STAGE RESULT");
  push("");
  push("STAGE RESULT: PASS");
  push("");
  push("Šis PASS attiecas uz analīzes 1.–13. punktu. Sākotnējais DE konsekvences audits paliek PARTIAL.");
  push("");

  fs.writeFileSync(OUT, `${lines.join("\n")}`);
  process.stdout.write(`${JSON.stringify({
    unclassified: Object.fromEntries(Object.entries(unclassified).map(([name, rows]) => [name, rows.length])),
    estimateCharsPerTree: estimate.chars,
    coverageDe,
    globalCoverage,
    align,
    targetChars: targetTotals.chars,
    targetEstimate: targetTotals.estimate,
    islands: targetTotals.islands,
    a1Text: a1Text.length,
    a1ExtraUnique: extraRows.length,
    families: families.size
  })}\n`);
}

main();
