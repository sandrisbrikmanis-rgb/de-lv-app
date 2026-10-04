#!/usr/bin/env node
/**
 * COPY-ONLY study DE sync. LV arrays are the template.
 * Writes nothing to data/ until the consistency gate passes on a temp copy.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const SEPS = [" -- ", " – ", " — ", " = ", " - "];
const LOCAL_PUNCT = /[¿;?!«»„“”"'’]/g;
const SKIP_ARRAYS = new Set(["sectionAccents", "explanation", "tip", "important"]);
const GERMAN_KEYS = ["word", "de", "article", "plural", "example_de", "de_article", "de_plural"];
const TRANSLATION_KEYS = new Set(["lv", "meaning", "translation", "native", "note", "hint", "text", "explanation"]);
const GERMAN_WORD = /(?:^|[^\p{L}])(ich|du|er|sie|wir|ihr|und|oder|nicht|eine|einen|der|die|das|ein|ist|sind|bitte|für|von|mit|auf|zum|zur|nicht)(?=[^\p{L}]|$)/iu;
const UMLAUT = /[äöüÄÖÜß]/;

function loadArray(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx, { filename: filePath });
  const key = Object.keys(ctx.window).find((name) => Array.isArray(ctx.window[name]));
  if (!key) throw new Error(`no array global in ${filePath}`);
  return ctx.window[key];
}

function sha256(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function norm(value) {
  let text = String(value ?? "").normalize("NFC").replace(/ß/g, "ss").toLowerCase();
  text = text.replace(/\u00A0/g, " ").replace(LOCAL_PUNCT, " ");
  text = text.replace(/\s+/g, " ").trim().replace(/\.+$/g, "").trim();
  return text.replace(/\s+/g, " ").trim();
}

function tokens(value) {
  const text = norm(value);
  return text ? text.split(" ").filter((tok) => /\p{L}/u.test(tok) && tok.length >= 3) : [];
}

function splitMixed(raw) {
  const text = String(raw ?? "");
  let best = null;
  SEPS.forEach((sep) => {
    const index = text.indexOf(sep);
    if (index >= 0 && (!best || index < best.index)) best = { index, sep };
  });
  if (!best) return { left: text, right: "", sep: "", hasSep: false };
  return {
    left: text.slice(0, best.index),
    right: text.slice(best.index + best.sep.length),
    sep: best.sep,
    hasSep: true
  };
}

function germanOf(item) {
  if (!item || typeof item !== "object") return "";
  if (typeof item.example === "string") return splitMixed(item.example).left;
  if (typeof item.de === "string") return splitMixed(item.de).left;
  return "";
}

function wordOf(item) {
  if (!item || typeof item !== "object" || typeof item.word !== "string") return "";
  return norm(item.word);
}

function cardKey(entry) {
  return `${entry && entry.de}\0${entry && entry.level}`;
}

function cardId(entry) {
  if (entry && entry.study && entry.study.id) return String(entry.study.id);
  if (entry && entry.id) return String(entry.id);
  return String(entry && entry.de || "");
}

function mostCommonSep(text) {
  let best = " – ";
  let bestCount = -1;
  SEPS.forEach((sep) => {
    const count = text.split(sep).length - 1;
    if (count > bestCount) {
      best = sep;
      bestCount = count;
    }
  });
  return best;
}

function sharesWords(left, right) {
  const other = new Set(tokens(right));
  return tokens(left).some((tok) => other.has(tok));
}

function isGermanSide(text, lvGerman) {
  const raw = String(text ?? "");
  if (!raw.trim()) return false;
  if (norm(raw) && norm(raw) === norm(lvGerman)) return true;
  if (UMLAUT.test(raw) || GERMAN_WORD.test(raw)) return true;
  return sharesWords(raw, lvGerman);
}

function bindArray(lvItems, langItems) {
  const lv = Array.isArray(lvItems) ? lvItems : [];
  const lang = Array.isArray(langItems) ? langItems : [];
  const usedLv = new Set();
  const usedLang = new Set();
  const pair = new Map();
  const hasWord = lv.some((item) => wordOf(item)) || lang.some((item) => wordOf(item));
  const take = (lvIndex, langIndex) => {
    if (usedLv.has(lvIndex) || usedLang.has(langIndex)) return;
    usedLv.add(lvIndex);
    usedLang.add(langIndex);
    pair.set(lvIndex, langIndex);
  };
  if (hasWord) {
    lang.forEach((item, langIndex) => {
      const word = wordOf(item);
      const sentence = norm(germanOf(item));
      const lvIndex = lv.findIndex((candidate, index) => !usedLv.has(index) && wordOf(candidate) === word && word && norm(germanOf(candidate)) === sentence);
      if (lvIndex >= 0) take(lvIndex, langIndex);
    });
    const lvByWord = new Map();
    lv.forEach((item, index) => {
      if (usedLv.has(index)) return;
      const word = wordOf(item);
      if (!word) return;
      if (!lvByWord.has(word)) lvByWord.set(word, []);
      lvByWord.get(word).push(index);
    });
    const langByWord = new Map();
    lang.forEach((item, index) => {
      if (usedLang.has(index)) return;
      const word = wordOf(item);
      if (!word || !lvByWord.has(word)) return;
      if (!langByWord.has(word)) langByWord.set(word, []);
      langByWord.get(word).push(index);
    });
    lvByWord.forEach((lvIndexes, word) => {
      const langIndexes = langByWord.get(word) || [];
      const count = Math.min(lvIndexes.length, langIndexes.length);
      for (let i = 0; i < count; i += 1) take(lvIndexes[i], langIndexes[i]);
    });
    lang.forEach((item, langIndex) => {
      if (usedLang.has(langIndex)) return;
      const sentence = norm(germanOf(item));
      if (!sentence) return;
      const lvIndex = lv.findIndex((candidate, index) => !usedLv.has(index) && norm(germanOf(candidate)) === sentence);
      if (lvIndex >= 0) take(lvIndex, langIndex);
    });
  } else {
    lang.forEach((item, langIndex) => {
      const sentence = norm(germanOf(item));
      if (!sentence) return;
      const lvIndex = lv.findIndex((candidate, index) => !usedLv.has(index) && norm(germanOf(candidate)) === sentence);
      if (lvIndex >= 0) take(lvIndex, langIndex);
    });
    const lvLeft = lv.map((_, index) => index).filter((index) => !usedLv.has(index));
    const langLeft = lang.map((_, index) => index).filter((index) => !usedLang.has(index));
    const count = Math.min(lvLeft.length, langLeft.length);
    for (let i = 0; i < count; i += 1) take(lvLeft[i], langLeft[i]);
  }
  return { pair, usedLang, lv, lang };
}

function emptyTranslation(sample, key) {
  if (sample && Object.prototype.hasOwnProperty.call(sample, key)) {
    return sample[key] == null ? null : "";
  }
  return "";
}

function applyExampleField(current, lvGerman, fileSep) {
  const parts = splitMixed(current);
  if (parts.hasSep) {
    return { value: `${lvGerman}${parts.sep}${parts.right}`, stale: false };
  }
  if (isGermanSide(parts.left, lvGerman)) return { value: lvGerman, stale: false };
  return { value: `${lvGerman}${fileSep}${parts.left}`, stale: true };
}

function syncItems(lvItems, langItems, fileSep) {
  const lv = Array.isArray(lvItems) ? lvItems : [];
  const lang = Array.isArray(langItems) ? langItems : [];
  const { pair, usedLang } = bindArray(lv, lang);
  const sample = lang.find((item) => item && typeof item === "object") || null;
  const rows = [];
  const deleted = [];
  lang.forEach((item, index) => {
    if (!usedLang.has(index)) deleted.push(item);
  });
  const next = lv.map((lvItem, lvIndex) => {
    const langIndex = pair.get(lvIndex);
    if (langIndex == null) {
      const added = {};
      const source = sample || lvItem;
      const keys = Object.keys(source);
      keys.forEach((key) => {
        if (GERMAN_KEYS.includes(key)) {
          if (Object.prototype.hasOwnProperty.call(lvItem, key)) added[key] = lvItem[key];
          return;
        }
        if (key === "example") return;
        if (TRANSLATION_KEYS.has(key)) added[key] = emptyTranslation(sample, key);
        else if (Object.prototype.hasOwnProperty.call(lvItem, key) && !TRANSLATION_KEYS.has(key)) added[key] = lvItem[key];
        else added[key] = emptyTranslation(sample, key);
      });
      GERMAN_KEYS.forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(lvItem, key) && !Object.prototype.hasOwnProperty.call(added, key)) added[key] = lvItem[key];
      });
      if (Object.prototype.hasOwnProperty.call(lvItem, "example") || (sample && Object.prototype.hasOwnProperty.call(sample, "example"))) {
        const left = splitMixed(lvItem.example).left;
        const lvParts = splitMixed(lvItem.example || "");
        added.example = lvParts.hasSep ? `${left}${fileSep}` : left;
      }
      rows.push({ item: added, mark: "ADDED", before: null });
      return added;
    }
    const before = lang[langIndex];
    const after = { ...before };
    let stale = false;
    GERMAN_KEYS.forEach((key) => {
      if (Object.prototype.hasOwnProperty.call(lvItem, key)) after[key] = lvItem[key];
      else delete after[key];
    });
    if (Object.prototype.hasOwnProperty.call(lvItem, "example") || Object.prototype.hasOwnProperty.call(before, "example")) {
      const lvGerman = splitMixed(lvItem.example || "").left;
      const current = Object.prototype.hasOwnProperty.call(before, "example") ? before.example : "";
      const applied = applyExampleField(current, lvGerman, fileSep);
      after.example = applied.value;
      stale = applied.stale;
    }
    if (typeof after.de === "string" && Object.prototype.hasOwnProperty.call(lvItem, "de")) {
      const lvGerman = splitMixed(lvItem.de).left;
      const applied = applyExampleField(before.de, lvGerman, fileSep);
      after.de = applied.value;
      stale = stale || applied.stale;
    }
    rows.push({ item: after, mark: stale ? "STALE_PAIR" : "BOUND", before });
    return after;
  });
  return { items: next, rows, deleted };
}

function findBracket(text, openIndex, openChar, closeChar) {
  let depth = 0;
  let inStr = false;
  let esc = false;
  for (let i = openIndex; i < text.length; i += 1) {
    const ch = text[i];
    if (inStr) {
      if (esc) esc = false;
      else if (ch === "\\") esc = true;
      else if (ch === "\"") inStr = false;
      continue;
    }
    if (ch === "\"") {
      inStr = true;
      continue;
    }
    if (ch === openChar) depth += 1;
    else if (ch === closeChar) {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  throw new Error(`unbalanced ${openChar} at ${openIndex}`);
}

function cardSpans(text) {
  const eq = text.indexOf("= [");
  if (eq < 0) throw new Error("array assignment not found");
  const arrStart = text.indexOf("[", eq);
  const arrEnd = findBracket(text, arrStart, "[", "]");
  const spans = [];
  let cursor = arrStart + 1;
  while (cursor < arrEnd) {
    const obj = text.indexOf("{", cursor);
    if (obj < 0 || obj > arrEnd) break;
    const end = findBracket(text, obj, "{", "}");
    spans.push([obj, end]);
    cursor = end + 1;
  }
  return spans;
}

function studyKeys(text, open, close) {
  const keys = [];
  let i = open + 1;
  let depth = 1;
  let inStr = false;
  let esc = false;
  while (i < close && depth > 0) {
    const ch = text[i];
    if (inStr) {
      if (esc) esc = false;
      else if (ch === "\\") esc = true;
      else if (ch === "\"") inStr = false;
      i += 1;
      continue;
    }
    if (ch === "\"" && depth === 1) {
      let j = i + 1;
      let e = false;
      while (j < close) {
        if (e) e = false;
        else if (text[j] === "\\") e = true;
        else if (text[j] === "\"") break;
        j += 1;
      }
      const key = text.slice(i + 1, j);
      let k = j + 1;
      while (k < close && /\s/.test(text[k])) k += 1;
      if (text[k] === ":") keys.push({ key, colon: k });
      i = j + 1;
      continue;
    }
    if (ch === "\"" ) {
      inStr = true;
      i += 1;
      continue;
    }
    if (ch === "{" || ch === "[") depth += 1;
    else if (ch === "}" || ch === "]") depth -= 1;
    i += 1;
  }
  return keys;
}

function formatArray(items, indent) {
  if (!items.length) return "[]";
  const pad = " ".repeat(indent);
  const inner = " ".repeat(indent + 2);
  const blocks = items.map((item) => JSON.stringify(item, null, 2)
    .split("\n")
    .map((line) => inner + line)
    .join("\n"));
  return `[\n${blocks.join(",\n")}\n${pad}]`;
}

function lineIndent(text, index) {
  let start = index;
  while (start > 0 && text[start - 1] !== "\n") start -= 1;
  let count = 0;
  while (text[start + count] === " ") count += 1;
  return count;
}

function applyEdits(original, edits) {
  const ordered = edits.slice().sort((a, b) => a.start - b.start);
  let out = "";
  let cursor = 0;
  const placed = [];
  ordered.forEach((edit) => {
    if (edit.start < cursor) throw new Error("overlapping edit");
    const slice = original.slice(edit.start, edit.end);
    if (slice !== edit.before) throw new Error(`slice mismatch at ${edit.start}`);
    out += original.slice(cursor, edit.start);
    const newStart = out.length;
    out += edit.after;
    placed.push({ newStart, newEnd: out.length, before: edit.before, after: edit.after });
    cursor = edit.end;
  });
  out += original.slice(cursor);
  return { text: out, placed };
}

function restoreText(text, placed) {
  let out = text;
  placed.slice().sort((a, b) => b.newStart - a.newStart).forEach((edit) => {
    const got = out.slice(edit.newStart, edit.newEnd);
    if (got !== edit.after) throw new Error("restore slice mismatch");
    out = out.slice(0, edit.newStart) + edit.before + out.slice(edit.newEnd);
  });
  return out;
}

function syncedArrayNames(study) {
  if (!study || typeof study !== "object") return [];
  return Object.keys(study).filter((key) => {
    if (SKIP_ARRAYS.has(key)) return false;
    const value = study[key];
    return Array.isArray(value) && value.some((item) => item && typeof item === "object" && (GERMAN_KEYS.some((name) => name in item) || "example" in item));
  });
}

function planCard(lvEntry, langEntry, fileSep) {
  const lvStudy = (lvEntry && lvEntry.study) || null;
  const langStudy = (langEntry && langEntry.study) || null;
  const names = new Set([
    ...syncedArrayNames(lvStudy),
    ...syncedArrayNames(langStudy)
  ]);
  const arrays = {};
  const events = [];
  names.forEach((name) => {
    const lvItems = lvStudy && Array.isArray(lvStudy[name]) ? lvStudy[name] : [];
    const langItems = langStudy && Array.isArray(langStudy[name]) ? langStudy[name] : [];
    if (!lvItems.length && !langItems.length) return;
    const synced = syncItems(lvItems, langItems, fileSep);
    if (JSON.stringify(synced.items) !== JSON.stringify(langItems)) arrays[name] = synced.items;
    synced.deleted.forEach((item) => events.push({ op: "delete", array: name, before: item, after: null, mark: "DELETED" }));
    synced.rows.forEach((row, index) => {
      if (row.mark === "ADDED") {
        events.push({ op: "add", array: name, index, before: null, after: row.item, mark: "ADDED" });
        return;
      }
      if (JSON.stringify(row.before) !== JSON.stringify(row.item)) {
        events.push({ op: "update", array: name, index, before: row.before, after: row.item, mark: row.mark });
      }
    });
  });
  const ids = [];
  if (lvEntry && langEntry && Object.prototype.hasOwnProperty.call(lvEntry, "id") && langEntry.id !== lvEntry.id) {
    ids.push({ key: "id", before: langEntry.id, after: lvEntry.id });
  }
  if (lvStudy && langStudy && Object.prototype.hasOwnProperty.call(lvStudy, "id") && langStudy.id !== lvStudy.id) {
    ids.push({ key: "study.id", before: langStudy.id, after: lvStudy.id });
  }
  return { arrays, events, ids };
}

function rewrite(text, plans) {
  const spans = cardSpans(text);
  if (spans.length !== plans.length) throw new Error(`card span ${spans.length} != plans ${plans.length}`);
  const edits = [];
  plans.forEach((plan, index) => {
    if (!plan) return;
    const [cardStart, cardEnd] = spans[index];
    plan.ids.forEach((idEdit) => {
      const needle = `"id": ${JSON.stringify(idEdit.before)}`;
      const replacement = `"id": ${JSON.stringify(idEdit.after)}`;
      const rel = text.slice(cardStart, cardEnd + 1).indexOf(needle);
      if (rel < 0) throw new Error(`id not found ${idEdit.before}`);
      const start = cardStart + rel;
      edits.push({ start, end: start + needle.length, before: needle, after: replacement });
    });
    const studyRel = text.slice(cardStart, cardEnd + 1).indexOf('"study"');
    if (studyRel < 0) {
      if (Object.keys(plan.arrays).length) throw new Error("study block missing");
      return;
    }
    const studyOpen = text.indexOf("{", cardStart + studyRel);
    const studyClose = findBracket(text, studyOpen, "{", "}");
    const keys = studyKeys(text, studyOpen, studyClose);
    Object.entries(plan.arrays).forEach(([name, items]) => {
      const found = keys.find((key) => key.key === name);
      const indent = found ? lineIndent(text, found.colon) : lineIndent(text, studyOpen) + 2;
      const formatted = formatArray(items, indent);
      if (!found) {
        if (!items.length) return;
        const insertAt = studyClose;
        const line = `\n${" ".repeat(indent)}"${name}": ${formatted}`;
        const prev = text[insertAt - 1] === "\n" ? text[insertAt - 2] : text[insertAt - 1];
        const needsComma = prev !== "{" && prev !== ",";
        const after = `${needsComma ? "," : ""}${line}`;
        edits.push({ start: insertAt, end: insertAt, before: "", after });
        return;
      }
      let valueStart = found.colon + 1;
      while (/\s/.test(text[valueStart])) valueStart += 1;
      if (text[valueStart] !== "[") throw new Error(`${name} is not an array`);
      const valueEnd = findBracket(text, valueStart, "[", "]");
      edits.push({ start: valueStart, end: valueEnd + 1, before: text.slice(valueStart, valueEnd + 1), after: formatted });
    });
  });
  return applyEdits(text, edits);
}

function indexFields(entry) {
  const fields = {};
  if (!entry) return fields;
  if ("id" in entry) fields.id = entry.id;
  const study = entry.study;
  if (!study) return fields;
  if ("id" in study) fields["study.id"] = study.id;
  (study.examples || []).forEach((row, index) => {
    if (row && "de" in row) fields[`study.examples[${index}].de`] = row.de;
  });
  (study.comparison || []).forEach((row, index) => {
    if (row && "word" in row) fields[`study.comparison[${index}].word`] = row.word;
  });
  (study.words || []).forEach((row, index) => {
    if (row && "de" in row) fields[`study.words[${index}].de`] = row.de;
  });
  (study.comparisonTable || []).forEach((row, index) => {
    if (row && "de" in row) fields[`study.comparisonTable[${index}].de`] = row.de;
  });
  return fields;
}

function foldAudit(value) {
  return String(value).normalize("NFC").replace(/\u00A0/g, " ").replace(/[\u00AD\u200B\u200C\u200D\uFEFF\u2060\u180E]/g, "").trim();
}

function main() {
  const langs = fs.readdirSync(path.join(ROOT, "data")).filter((name) => fs.statSync(path.join(ROOT, "data", name)).isDirectory());
  const lvCache = {};
  LEVELS.forEach((level) => {
    lvCache[level] = loadArray(path.join(ROOT, "data", `${level}.js`));
  });
  const counts = { ADDED: 0, STALE_PAIR: 0, DELETED: 0, BOUND_UPDATE: 0, ID: 0 };
  const byLang = {};
  const byLevel = {};
  const byArray = {};
  const samples = { ADDED: [], STALE_PAIR: [], DELETED: [], ID: [] };
  const focus = [];
  const needs = [];
  const germanRows = [];
  const filePlans = [];
  let accentDiffContent = 0;
  let accentCanCopy = 0;
  let accentCompared = 0;

  function bump(mark, lang, level, array) {
    counts[mark] = (counts[mark] || 0) + 1;
    byLang[lang] = byLang[lang] || {};
    byLang[lang][mark] = (byLang[lang][mark] || 0) + 1;
    byLevel[level] = byLevel[level] || {};
    byLevel[level][mark] = (byLevel[level][mark] || 0) + 1;
    if (array) {
      byArray[array] = byArray[array] || {};
      byArray[array][mark] = (byArray[array][mark] || 0) + 1;
    }
  }

  LEVELS.forEach((level) => {
    const lvList = lvCache[level];
    langs.forEach((lang) => {
      const rel = `data/${lang}/${level}.js`;
      const full = path.join(ROOT, rel);
      const www = `www/data/${lang}/${level}.js`;
      const text = fs.readFileSync(full, "utf8");
      if (sha256(text) !== sha256(fs.readFileSync(path.join(ROOT, www)))) throw new Error(`mirror mismatch ${rel}`);
      const langList = loadArray(full);
      const fileSep = mostCommonSep(text);
      const queues = new Map();
      langList.forEach((entry, index) => {
        const key = cardKey(entry);
        if (!queues.has(key)) queues.set(key, []);
        queues.get(key).push(index);
      });
      const plans = langList.map(() => null);
      const used = new Set();
      lvList.forEach((lvEntry) => {
        const queue = queues.get(cardKey(lvEntry));
        if (!queue || !queue.length) return;
        const langIndex = queue.shift();
        used.add(langIndex);
        const langEntry = langList[langIndex];
        const plan = planCard(lvEntry, langEntry, fileSep);
        plans[langIndex] = plan;
        const card = String((lvEntry && lvEntry.id) || (lvEntry && lvEntry.study && lvEntry.study.id) || (lvEntry && lvEntry.de) || "");
        plan.events.forEach((event) => { event.card = card; });
        plan.ids.forEach((event) => { event.card = card; });
        const id = cardId(lvEntry);
        plan.events.forEach((event) => {
          const mark = event.mark === "BOUND" ? "BOUND_UPDATE" : event.mark === "DELETED" ? "DELETED" : event.mark;
          bump(mark, lang, level, event.array);
          const sample = {
            lang, level, id: card, array: event.array, index: event.index,
            before: JSON.stringify(event.before).slice(0, 160),
            after: JSON.stringify(event.after).slice(0, 160)
          };
          const bucket = samples[event.mark] || samples[mark];
          if (bucket && bucket.length < 10 && !bucket.some((row) => row.lang === lang && row.id === id && row.array === event.array)) bucket.push(sample);
          if (event.mark === "ADDED" || event.mark === "STALE_PAIR") {
            const lvText = event.after && (event.after.word || germanOf(event.after) || event.after.de || "");
            const translation = event.mark === "STALE_PAIR"
              ? (event.before && (event.before.meaning || event.before.lv || splitMixed(event.before.example || event.before.de || "").right || ""))
              : "";
            needs.push([lang, "data", level, card, event.array, event.index, lvText, translation, event.mark]);
            needs.push([lang, "www", level, card, event.array, event.index, lvText, translation, event.mark]);
          }
        });
        plan.ids.forEach((idEdit) => {
          bump("ID", lang, level, idEdit.key);
          if (samples.ID.length < 10) samples.ID.push({ lang, level, id: card, key: idEdit.key, before: idEdit.before, after: idEdit.after });
        });
        if (["a1-bitte", "a1-besuchen", "a1-müssen", "a1-bis", "a1-liter"].includes(id) && ["da", "es", "gr", "et"].includes(lang)) {
          focus.push({
            lang, id,
            ids: plan.ids,
            arrays: Object.fromEntries(Object.entries(plan.arrays).map(([name, items]) => [name, items.map((item) => ({
              word: item.word || "",
              de: item.de || "",
              example: item.example || "",
              meaning: item.meaning || "",
              lv: item.lv || ""
            }))]))
          });
        }
        const study = langEntry.study;
        const lvStudy = lvEntry.study;
        if (study && study.sectionAccents && lvStudy && lvStudy.sectionAccents) {
          Object.keys(plan.arrays).forEach((name) => {
            const accent = study.sectionAccents[name];
            const lvAccent = lvStudy.sectionAccents[name];
            if (!Array.isArray(accent) && !Array.isArray(lvAccent)) return;
            accentCompared += 1;
            const contentLen = plan.arrays[name].length;
            if (Array.isArray(accent) && accent.length !== contentLen) accentDiffContent += 1;
            if (Array.isArray(lvAccent)) accentCanCopy += 1;
          });
        }
        ["explanation", "important"].forEach((field) => {
          const lines = study && Array.isArray(study[field]) ? study[field] : [];
          const lvLines = lvStudy && Array.isArray(lvStudy[field]) ? lvStudy[field].join("\n") : "";
          lines.forEach((line, lineIndex) => {
            if (typeof line !== "string") return;
            if (!UMLAUT.test(line) && !GERMAN_WORD.test(line)) return;
            germanRows.push([lang, card, `${field}[${lineIndex}]`, lvLines.includes(line) ? "yes" : "no", line.slice(0, 180)]);
          });
        });
        const tip = study && study.tip && study.tip.text;
        if (typeof tip === "string" && (UMLAUT.test(tip) || GERMAN_WORD.test(tip))) {
          const lvTip = lvStudy && lvStudy.tip && lvStudy.tip.text || "";
          germanRows.push([lang, card, "tip.text", String(lvTip).includes(tip) ? "yes" : "no", tip.slice(0, 180)]);
        }
      });
      langList.forEach((entry, index) => {
        if (!used.has(index)) filePlans.push({ note: "unpaired", lang, level, de: entry.de });
      });
      const changed = plans.some((plan) => plan && (plan.events.length || plan.ids.length || Object.keys(plan.arrays).length));
      if (!changed) return;
      const shaped = plans.map((plan) => plan || { arrays: {}, events: [], ids: [] });
      const events = [];
      shaped.forEach((plan) => {
        plan.events.forEach((event) => events.push(event));
        plan.ids.forEach((event) => events.push({ op: "id", ...event }));
      });
      const result = rewrite(text, shaped);
      filePlans.push({ rel, www, base: sha256(text), text: result.text, placed: result.placed, events });
    });
  });

  const unpaired = filePlans.filter((row) => row.note === "unpaired");
  if (unpaired.length) {
    console.error(JSON.stringify({ unpaired: unpaired.length, sample: unpaired.slice(0, 5) }));
    process.exit(2);
  }
  console.log(JSON.stringify({ counts, files: filePlans.filter((row) => row.rel).length, needs: needs.length, germanRows: germanRows.length, accentDiffContent, accentCanCopy, accentCompared }, null, 2));
  const payload = { counts, byLang, byLevel, byArray, samples, focus, needs, germanRows, accentDiffContent, accentCanCopy, accentCompared, filePlans: filePlans.filter((row) => row.rel) };
  fs.writeFileSync("/tmp/study-de-sync-plan.json", JSON.stringify({
    counts, byLang, byLevel, byArray, samples, focus, needsCount: needs.length, germanCount: germanRows.length, accentDiffContent, accentCanCopy, accentCompared
  }));
  fs.writeFileSync("/tmp/study-de-sync-needs.json", JSON.stringify(needs));
  fs.writeFileSync("/tmp/study-de-sync-german.json", JSON.stringify(germanRows));
  fs.writeFileSync("/tmp/study-de-sync-focus.json", JSON.stringify(focus));
  const filesOut = filePlans.filter((row) => row.rel).map((row) => ({ rel: row.rel, www: row.www, base: row.base, placed: row.placed, text: row.text, events: row.events }));
  fs.mkdirSync("/tmp/study-de-sync-files", { recursive: true });
  filesOut.forEach((row, index) => {
    fs.writeFileSync(`/tmp/study-de-sync-files/${index}.json`, JSON.stringify({ rel: row.rel, www: row.www, base: row.base, placed: row.placed, events: row.events }));
    fs.writeFileSync(`/tmp/study-de-sync-files/${index}.js`, row.text);
  });
  fs.writeFileSync("/tmp/study-de-sync-files/index.json", JSON.stringify(filesOut.map((row, index) => ({ index, rel: row.rel, www: row.www, base: row.base }))));
}

main();
