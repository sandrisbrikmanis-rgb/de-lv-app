#!/usr/bin/env node
/**
 * BS-DE structural/technical fixes only (no stylistic translation changes).
 * See task: sync data/www, repair course HTML from LV template, sectionAccents,
 * LV remnant phrases, Kurss word-list Latvian leftovers.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const BS_DIR = path.join(ROOT, "data", "bs");
const WWW_BS = path.join(ROOT, "www", "data", "bs");
const LV_DIAC_ONLY = /[āēģīķļņūĀĒĢĪĶĻŅŪ]/;
const LV_WORD = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;

const stats = {
  filesChanged: [],
  htmlTagFixes: 0,
  htmlKeysRebuilt: 0,
  sectionAccentTermsFixed: 0,
  lvRemnantsReplaced: 0,
  kurssWordsReplaced: 0,
};

const LV_REMNANT_REPLACEMENTS = [
  [/Na letonskom/g, "Na bosanskom"],
  [/na letonskom/g, "na bosanskom"],
  [/U letonskom/g, "U bosanskom"],
  [/u letonskom/g, "u bosanskom"],
  [/letonskom jeziku/g, "bosanskom jeziku"],
  [/Letonski dativ/g, "Bosanski dativ"],
  [/Letonska dativna/g, "Bosanska dativna"],
  [/Letonski /g, "Bosanski "],
  [/letonski /g, "bosanski "],
  [/Letonac /g, "Bosanac "],
  [/letonac /g, "bosanac "],
  [/Letonsko /g, "Bosansko "],
  [/letonsko /g, "bosansko "],
  [/Letonac/g, "Bosanac"],
  [/Latviešu/g, "Bosanski"],
  [/latviešu/g, "bosanski"],
  [/latviski/g, "bosanski"],
  [/Latviski/g, "Bosanski"],
  [/letonskoj/g, "bosanskoj"],
  [/letonskom/g, "bosanskom"],
  [/letonska/g, "bosanska"],
  [/Letonski:/g, "Bosanski:"],
  [/letonsk/g, "bosansk"],
];

const KURSS_WORD_REPLACEMENTS = [
  [/kas tas ir/gi, "šta je to"],
  [/— tagad/g, "— sada"],
  [/— tagad,/g, "— sada,"],
  [/\btagad\b/g, "sada"],
  [/beidzot/g, "konačno"],
  [/dzirnavnieks/g, "mlinar"],
  [/galdnieks/g, "stolar"],
  [/skaidri/g, "jasno"],
  [/jūs varat/g, "možete"],
  [/tas grib/g, "to želi"],
  [/jūs gribat/g, "želite"],
  [/Daudzskaitlis/g, "Množina"],
  [/daudzskaitlis/g, "množina"],
  [/galotni/g, "nastavku"],
  [/Galotni/g, "Nastavku"],
  [/— es\b/g, "— ja"],
  [/— tu\b/g, "— ti"],
  [/— viņš\b/g, "— on"],
  [/— viņa\b/g, "— ona"],
  [/— mēs\b/g, "— mi"],
  [/— jūs\b/g, "— vi"],
  [/— viņi/g, "— oni"],
];

const LEVEL_FILES = ["a1.js", "a2.js", "b1.js", "b2.js", "c1.js", "c2.js"];

function loadWindow(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function applyReplacements(text, replacements, counterKey) {
  if (!text || typeof text !== "string") return text;
  let out = text;
  let count = 0;
  for (const [re, rep] of replacements) {
    const before = out;
    out = out.replace(re, rep);
    if (before !== out) {
      const matches = before.match(re);
      if (matches) count += matches.length;
    }
  }
  if (count) stats[counterKey] += count;
  return out;
}

function applyRemnantsToString(text) {
  return applyReplacements(text, LV_REMNANT_REPLACEMENTS, "lvRemnantsReplaced");
}

function applyKurssWords(text) {
  return applyReplacements(text, KURSS_WORD_REPLACEMENTS, "kurssWordsReplaced");
}

function fixBrokenHtmlPatterns(html) {
  let out = html;
  let fixes = 0;
  const rules = [
    [/<detalji/g, "<details"],
    [/<\/detalji>/g, "</details>"],
    [/ otvoren>/g, " open>"],
    [/<divs>/g, "</div>"],
    [/Flum class="kurss">F koridor/g, "Flur (flūr) — hodnik"],
    [/ščeto/g, "često"],
    // Repair orphaned closing fragments from prior corruption passes
    [/<div class="<div<div class="kurss-example">/g, "<div class=\"kurss-example\">"],
    [/<div class="<div<div class=/g, "<div class="],
  ];
  for (const [re, rep] of rules) {
    const m = out.match(re);
    if (m) {
      fixes += m.length;
      out = out.replace(re, rep);
    }
  }
  stats.htmlTagFixes += fixes;
  return out;
}

function extractTextSegments(html) {
  const segments = [];
  const re = />([^<]+)</g;
  let m;
  while ((m = re.exec(html))) {
    const t = m[1].replace(/\s+/g, " ").trim();
    if (t && t.length > 1 && !/^[⌃⌄•♂♀◇!♟\d.]+$/.test(t)) segments.push(t);
  }
  return segments;
}

function learnHtmlSegmentMap(lvHtml, bsHtml) {
  const map = {};
  const lvSegs = extractTextSegments(lvHtml);
  const bsSegs = extractTextSegments(bsHtml);
  for (let i = 0; i < Math.min(lvSegs.length, bsSegs.length); i++) {
    const lv = lvSegs[i];
    const bs = bsSegs[i];
    if (!lv || !bs || lv === bs) continue;
    if (LV_WORD.test(bs)) continue;
    if (/[а-яА-ЯёЁ]/.test(bs)) continue;
    map[lv] = bs;
  }
  return map;
}

function rebuildHtmlFromLv(lvHtml, segmentMap) {
  let result = lvHtml;
  const keys = Object.keys(segmentMap).sort((a, b) => b.length - a.length);
  for (const lv of keys) {
    const bs = segmentMap[lv];
    if (bs && lv !== bs && result.includes(lv)) {
      result = result.split(lv).join(bs);
    }
  }
  return result;
}

function learnMapsFromData(lvData, bsData) {
  const map = {};
  function walk(lv, bs) {
    if (!lv || !bs) return;
    if (typeof lv === "string" && typeof bs === "string") {
      if (lv !== bs && !LV_WORD.test(bs) && lv.trim()) map[lv] = bs;
      return;
    }
    if (Array.isArray(lv) && Array.isArray(bs)) {
      for (let i = 0; i < Math.min(lv.length, bs.length); i++) walk(lv[i], bs[i]);
      return;
    }
    if (typeof lv === "object" && typeof bs === "object" && !Array.isArray(lv)) {
      for (const k of Object.keys(lv)) {
        if (["de", "de_article", "de_plural", "sectionAccents", "id", "layout", "level"].includes(k)) continue;
        walk(lv[k], bs[k]);
      }
    }
  }
  if (Array.isArray(lvData) && Array.isArray(bsData)) {
    for (let i = 0; i < Math.min(lvData.length, bsData.length); i++) walk(lvData[i], bsData[i]);
  } else walk(lvData, bsData);
  return map;
}

function repairCourseLessons() {
  const lv = loadWindow("data/courseLessons.js");
  const bs = loadWindow("data/bs/courseLessons.js");
  const dataMap = learnMapsFromData(lv.COURSE_LESSON_DATA, bs.COURSE_LESSON_DATA);

  const newHtml = {};
  for (const [key, lvHtml] of Object.entries(lv.COURSE_LESSON_HTML || {})) {
    const bsHtml = bs.COURSE_LESSON_HTML?.[key] || "";
    const segmentMap = { ...dataMap, ...learnHtmlSegmentMap(lvHtml, bsHtml) };
    let rebuilt = rebuildHtmlFromLv(lvHtml, segmentMap);
    rebuilt = fixBrokenHtmlPatterns(rebuilt);
    rebuilt = applyRemnantsToString(rebuilt);
    rebuilt = applyKurssWords(rebuilt);
    newHtml[key] = rebuilt;
    stats.htmlKeysRebuilt++;
  }

  const newData = JSON.parse(JSON.stringify(bs.COURSE_LESSON_DATA || lv.COURSE_LESSON_DATA));
  function walkData(obj) {
    if (typeof obj === "string") {
      let s = applyRemnantsToString(obj);
      s = applyKurssWords(s);
      return s;
    }
    if (Array.isArray(obj)) return obj.map(walkData);
    if (obj && typeof obj === "object") {
      const out = {};
      for (const [k, v] of Object.entries(obj)) {
        if (k === "legacyHtml") {
          out[k] = v;
        } else {
          out[k] = walkData(v);
        }
      }
      return out;
    }
    return obj;
  }

  for (const [key, lesson] of Object.entries(newData)) {
    if (lesson && typeof lesson === "object") {
      if (newHtml[key]) {
        lesson.legacyHtml = newHtml[key];
      } else if (lesson.legacyHtml) {
        const lvKey = key;
        if (lv.COURSE_LESSON_HTML?.[lvKey]) {
          const segMap = { ...dataMap, ...learnHtmlSegmentMap(lv.COURSE_LESSON_HTML[lvKey], lesson.legacyHtml) };
          lesson.legacyHtml = fixBrokenHtmlPatterns(
            applyKurssWords(applyRemnantsToString(rebuildHtmlFromLv(lv.COURSE_LESSON_HTML[lvKey], segMap)))
          );
        } else {
          lesson.legacyHtml = applyKurssWords(applyRemnantsToString(fixBrokenHtmlPatterns(lesson.legacyHtml)));
        }
      }
      for (const prop of Object.keys(lesson)) {
        if (prop !== "legacyHtml") lesson[prop] = walkData(lesson[prop]);
      }
    }
  }

  const outPath = path.join(BS_DIR, "courseLessons.js");
  fs.writeFileSync(
    outPath,
    `const COURSE_LESSON_HTML = ${JSON.stringify(newHtml, null, 2)};\n\nconst COURSE_LESSON_DATA = ${JSON.stringify(newData, null, 2)};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`,
    "utf8"
  );
  stats.filesChanged.push("data/bs/courseLessons.js");
}

// ---- sectionAccents: replace LV-only terms with Bosnian from card text ----
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function tokenize(text) {
  return String(text || "").split(/[\s.,!?;:„"“”()«»\-–—]+/).filter(Boolean);
}

function fold(value) {
  return String(value || "").normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
}

function collectBsTexts(study) {
  const texts = [];
  const push = (v) => {
    if (!v) return;
    if (typeof v === "string") texts.push(v);
    else if (Array.isArray(v)) v.forEach(push);
    else if (typeof v === "object") {
      ["text", "example", "de", "lv", "word", "meaning", "left", "right"].forEach((k) => push(v[k]));
    }
  };
  push(study.translation);
  push(study.explanation);
  push(study.examples);
  push(study.comparison);
  push(study.tip);
  push(study.important);
  return texts;
}

function normalizeDiacritics(s) {
  return String(s).normalize("NFD").replace(/\p{M}/gu, "");
}

function findBsMatch(term, texts) {
  const termFold = fold(term);
  const termNorm = normalizeDiacritics(termFold);
  for (const text of texts) {
    for (const w of tokenize(text)) {
      if (fold(w) === termFold || normalizeDiacritics(fold(w)) === termNorm) return w;
    }
    const idx = fold(text).indexOf(termFold);
    if (idx >= 0 && termFold.length >= 3) {
      return text.slice(idx, idx + term.length);
    }
    const idxNorm = normalizeDiacritics(fold(text)).indexOf(termNorm);
    if (idxNorm >= 0 && termNorm.length >= 3) {
      const raw = text.slice(idxNorm);
      const m = raw.match(/^[\p{L}\p{N}_]+/u);
      if (m) return m[0];
    }
  }
  for (const text of texts) {
    for (const w of tokenize(text)) {
      const wNorm = normalizeDiacritics(fold(w));
      if (w.length >= 3 && (wNorm.includes(termNorm) || termNorm.includes(wNorm))) return w;
    }
  }
  return null;
}

function fixSectionAccentsInStudy(study) {
  if (!study?.sectionAccents) return;
  const texts = collectBsTexts(study);
  const sa = study.sectionAccents;

  const fixMap = (map, isLvField) => {
    if (!map || typeof map !== "object") return;
    for (const color of ACCENT_COLORS) {
      if (!Array.isArray(map[color])) continue;
      const next = [];
      for (const term of map[color]) {
        const t = String(term || "").trim();
        if (!t) continue;
        if (isLvField && (LV_DIAC_ONLY.test(t) || (LV_WORD.test(t) && /[āēģīķļņūĀĒĢĪĶĻŅŪ]/.test(t)))) {
          const rep = findBsMatch(t, texts);
          if (rep) {
            next.push(rep);
            stats.sectionAccentTermsFixed++;
            continue;
          }
        }
        if (isLvField && /^(kā arī|tiklīdz|uzturēties|reputācija|izrakstīt|būvniecība|domu apmaiņa|tēma|aizkavēt|izstādīt|izvākšanās|reģistra|bļoda|baseinā|nozīmīgs|ievērojams|ārstēt|izturēties|ņemiet)/.test(t)) {
          const rep = findBsMatch(t, texts);
          if (rep) {
            next.push(rep);
            stats.sectionAccentTermsFixed++;
            continue;
          }
        }
        next.push(t);
      }
      if (next.length) map[color] = next;
      else delete map[color];
    }
  };

  const walk = (node, isLv) => {
    if (!node || typeof node !== "object") return;
    if (ACCENT_COLORS.some((c) => Array.isArray(node[c]))) {
      fixMap(node, isLv);
      return;
    }
    for (const [k, v] of Object.entries(node)) {
      if (k === "lv") walk(v, true);
      else if (k === "de" || k === "word" || k === "meaning" || k === "example") walk(v, false);
      else if (Array.isArray(v)) v.forEach((item) => walk(item, isLv));
      else if (typeof v === "object") walk(v, isLv);
    }
  };
  walk(sa, false);
}

function fixLevelFile(fileName) {
  const rel = `data/bs/${fileName}`;
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = Object.keys(ctx.window).find((k) => k.endsWith("_WORDS"));
  const arr = ctx.window[key];

  for (const card of arr) {
    if (card.study) fixSectionAccentsInStudy(card.study);
    if (card.lv && typeof card.lv === "string") {
      card.lv = applyRemnantsToString(card.lv);
    }
    if (card.study) {
      const walkStudy = (obj) => {
        if (typeof obj === "string") return applyRemnantsToString(obj);
        if (Array.isArray(obj)) return obj.map(walkStudy);
        if (obj && typeof obj === "object") {
          const out = {};
          for (const [k, v] of Object.entries(obj)) {
            out[k] = k === "sectionAccents" ? v : walkStudy(v);
          }
          return out;
        }
        return obj;
      };
      card.study = walkStudy(card.study);
    }
  }

  const prefix = code.slice(0, code.indexOf("["));
  const suffix = code.slice(code.lastIndexOf("]") + 1);
  fs.writeFileSync(path.join(ROOT, rel), prefix + JSON.stringify(arr, null, 2) + suffix, "utf8");
  stats.filesChanged.push(rel);
}

function syncToWww(files) {
  for (const f of files) {
    const src = path.join(BS_DIR, f);
    const dst = path.join(WWW_BS, f);
    fs.copyFileSync(src, dst);
    stats.filesChanged.push(`www/data/bs/${f}`);
  }
}

function main() {
  // 1. Fix level files (sectionAccents + remnants in study only)
  for (const f of LEVEL_FILES) fixLevelFile(f);

  // 2. Repair courseLessons
  repairCourseLessons();

  // 3. Sync all modified + a1/a2 to www
  const syncFiles = [...LEVEL_FILES, "courseLessons.js"];
  syncToWww(syncFiles);

  console.log(JSON.stringify(stats, null, 2));
}

main();
