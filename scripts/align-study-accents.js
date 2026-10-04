#!/usr/bin/env node
/**
 * COPY-ONLY sectionAccents length alignment.
 *
 * sectionAccents entries contain translation words, so LV arrays are not
 * copied over existing entries. Where a parallel study array exists and LV
 * has a sectionAccents array:
 *   - longer accent arrays are shortened to the content length;
 *   - shorter accent arrays are extended with LV entries, and only as far
 *     as LV has entries.
 * Existing entries are kept. Arrays with no LV counterpart are left as they are.
 *
 * Default writes the rewritten files under /tmp/study-accent-files and checks
 * that restoring the slices returns the base SHA-256. --apply copies them
 * onto data/ and www/data/.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const UMLAUT = /[äöüÄÖÜß]/;
const NON_GERMAN_LETTER = /[^\p{P}\p{S}\p{N}\p{Z}A-Za-zÄÖÜäöüß]/u;
const TRANSLATION_SLOT = new Set(["lv", "meaning", "purple"]);
const GERMAN_SLOT = new Set(["de", "word", "blue", "green", "yellow", "orange", "red"]);
const APPLY = process.argv.includes("--apply");

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

function cardLabel(entry) {
  if (entry && entry.study && entry.study.id) return String(entry.study.id);
  if (entry && entry.id) return String(entry.id);
  return String((entry && entry.de) || "");
}

function pairKey(entry) {
  return `${entry && entry.de}\0${entry && entry.level}`;
}

function germanCorpus(entry) {
  const parts = [entry && entry.de, entry && entry.de_article, entry && entry.de_plural];
  const study = (entry && entry.study) || {};
  (study.examples || []).forEach((row) => parts.push(row && row.de));
  (study.comparison || []).forEach((row) => parts.push(row && row.word, row && row.example));
  (study.variants || []).forEach((row) => parts.push(row && row.de, row && row.article, row && row.plural));
  return parts.filter(Boolean).join("\n").toLowerCase();
}

function isTranslationWord(text, slot, corpus) {
  const value = String(text || "").trim();
  if (!value || !/\p{L}/u.test(value)) return false;
  if (NON_GERMAN_LETTER.test(value)) return true;
  if (slot !== "translation") return false;
  if (UMLAUT.test(value)) return false;
  return !corpus.includes(value.toLowerCase());
}

function walkStrings(node, slot, out) {
  if (typeof node === "string") {
    out.push({ slot, text: node });
    return;
  }
  if (Array.isArray(node)) {
    node.forEach((item) => walkStrings(item, slot, out));
    return;
  }
  if (node && typeof node === "object") {
    Object.entries(node).forEach(([key, value]) => {
      let next = slot;
      if (TRANSLATION_SLOT.has(key)) next = "translation";
      else if (GERMAN_SLOT.has(key)) next = "german";
      walkStrings(value, next, out);
    });
  }
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
    if (ch === "\"") {
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

function lineIndent(text, index) {
  let start = index;
  while (start > 0 && text[start - 1] !== "\n") start -= 1;
  let count = 0;
  while (text[start + count] === " ") count += 1;
  return count;
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

function formatItems(items, indent) {
  const inner = " ".repeat(indent + 2);
  return items.map((item) => JSON.stringify(item, null, 2)
    .split("\n")
    .map((line) => inner + line)
    .join("\n")).join(",\n");
}

function valueEnd(text, index) {
  const ch = text[index];
  if (ch === "{") return findBracket(text, index, "{", "}");
  if (ch === "[") return findBracket(text, index, "[", "]");
  if (ch === "\"") {
    let cursor = index + 1;
    let esc = false;
    while (cursor < text.length) {
      if (esc) esc = false;
      else if (text[cursor] === "\\") esc = true;
      else if (text[cursor] === "\"") return cursor;
      cursor += 1;
    }
    throw new Error(`unterminated string at ${index}`);
  }
  let cursor = index;
  while (cursor < text.length && !/[\s,\]\}]/.test(text[cursor])) cursor += 1;
  return cursor - 1;
}

function elementSpans(text, open, close) {
  const spans = [];
  let i = open + 1;
  while (i < close) {
    while (i < close && /[\s,]/.test(text[i])) i += 1;
    if (i >= close) break;
    const end = valueEnd(text, i);
    spans.push([i, end]);
    i = end + 1;
  }
  return spans;
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

function valueStart(text, colon) {
  let index = colon + 1;
  while (/\s/.test(text[index])) index += 1;
  return index;
}

function planCard(lvEntry, langEntry) {
  const ops = [];
  const notes = [];
  const lvAcc = (lvEntry.study && lvEntry.study.sectionAccents) || {};
  const acc = (langEntry.study && langEntry.study.sectionAccents) || {};
  const keys = new Set([...Object.keys(acc), ...Object.keys(lvAcc)]);
  keys.forEach((key) => {
    const lvArray = lvAcc[key];
    const langArray = acc[key];
    if (!Array.isArray(lvArray)) {
      if (Array.isArray(langArray)) notes.push({ mark: "NO_LV", key, accent: langArray.length });
      return;
    }
    const content = langEntry.study ? langEntry.study[key] : null;
    if (!Array.isArray(content)) return;
    const current = Array.isArray(langArray) ? langArray.length : 0;
    const target = content.length;
    if (current === target) return;
    if (current > target) {
      ops.push({ key, mode: "shorten", from: current, to: target });
      return;
    }
    if (lvArray.length <= current) {
      notes.push({ mark: "LEFT_SHORT", key, accent: current, content: target, lv: lvArray.length });
      return;
    }
    const extra = lvArray.slice(current, target);
    const to = current + extra.length;
    ops.push({
      key,
      mode: Array.isArray(langArray) ? "pad" : "create",
      from: current,
      to,
      content: target,
      extra
    });
  });
  return { ops, notes };
}

function rewrite(text, plans) {
  const spans = cardSpans(text);
  if (spans.length !== plans.length) throw new Error(`card span ${spans.length} != plans ${plans.length}`);
  const edits = [];
  plans.forEach((plan, index) => {
    if (!plan || !plan.ops.length) return;
    const [cardStart, cardEnd] = spans[index];
    const studyRel = text.slice(cardStart, cardEnd + 1).indexOf('"study"');
    if (studyRel < 0) throw new Error("study block missing");
    const studyOpen = text.indexOf("{", cardStart + studyRel);
    const studyClose = findBracket(text, studyOpen, "{", "}");
    const studyKeyList = studyKeys(text, studyOpen, studyClose);
    const accentKey = studyKeyList.find((key) => key.key === "sectionAccents");
    const creates = plan.ops.filter((op) => op.mode === "create");
    const inplace = plan.ops.filter((op) => op.mode !== "create");
    if (!accentKey) {
      if (inplace.length) throw new Error("inplace accent edit without sectionAccents");
      if (!creates.length) return;
      const indent = lineIndent(text, studyOpen) + 2;
      const body = creates.map((op) => `${" ".repeat(indent + 2)}"${op.key}": ${formatArray(op.extra, indent + 2)}`).join(",\n");
      const object = `{\n${body}\n${" ".repeat(indent)}}`;
      const line = `\n${" ".repeat(indent)}"sectionAccents": ${object}`;
      const prev = text[studyClose - 1] === "\n" ? text[studyClose - 2] : text[studyClose - 1];
      const needsComma = prev !== "{" && prev !== ",";
      edits.push({ start: studyClose, end: studyClose, before: "", after: `${needsComma ? "," : ""}${line}` });
      return;
    }
    const accentOpen = text.indexOf("{", valueStart(text, accentKey.colon));
    if (text[valueStart(text, accentKey.colon)] !== "{") throw new Error("sectionAccents is not an object");
    const accentClose = findBracket(text, accentOpen, "{", "}");
    const inner = studyKeys(text, accentOpen, accentClose);
    inplace.forEach((op) => {
      const found = inner.find((key) => key.key === op.key);
      if (!found) throw new Error(`missing accent key ${op.key}`);
      const open = valueStart(text, found.colon);
      if (text[open] !== "[") throw new Error(`${op.key} is not an array`);
      const close = findBracket(text, open, "[", "]");
      const elements = elementSpans(text, open, close);
      if (op.mode === "shorten") {
        if (op.to === 0) {
          edits.push({ start: open, end: close + 1, before: text.slice(open, close + 1), after: "[]" });
          return;
        }
        if (elements.length < op.to) throw new Error(`shorten span ${elements.length} < ${op.to}`);
        let ws = close;
        while (ws > open && /[ \t]/.test(text[ws - 1])) ws -= 1;
        if (text[ws - 1] === "\n") ws -= 1;
        const cut = elements[op.to - 1][1] + 1;
        edits.push({ start: cut, end: ws, before: text.slice(cut, ws), after: "" });
        return;
      }
      const indent = lineIndent(text, open);
      const piece = formatItems(op.extra, indent);
      if (!elements.length) {
        edits.push({
          start: open,
          end: close + 1,
          before: text.slice(open, close + 1),
          after: formatArray(op.extra, indent)
        });
        return;
      }
      const at = elements[elements.length - 1][1] + 1;
      edits.push({ start: at, end: at, before: "", after: `,\n${piece}` });
    });
    if (creates.length) {
      const indent = lineIndent(text, accentOpen) + 2;
      const body = creates.map((op) => `\n${" ".repeat(indent)}"${op.key}": ${formatArray(op.extra, indent)}`).join(",");
      const prev = text[accentClose - 1] === "\n" ? text[accentClose - 2] : text[accentClose - 1];
      const needsComma = prev !== "{" && prev !== ",";
      edits.push({ start: accentClose, end: accentClose, before: "", after: `${needsComma ? "," : ""}${body}` });
    }
  });
  return applyEdits(text, edits);
}

function main() {
  const langs = fs.readdirSync(path.join(ROOT, "data")).filter((name) => fs.statSync(path.join(ROOT, "data", name)).isDirectory());
  const counts = {
    strings: 0,
    germanStrings: 0,
    translationStrings: 0,
    arrayEntries: 0,
    arrayEntriesWithTranslation: 0,
    arrayEntriesGermanOnly: 0,
    shorten: 0,
    pad: 0,
    create: 0,
    leftShort: 0,
    noLv: 0
  };
  const translationExamples = [];
  const germanOnlyExamples = [];
  const changes = [];
  const leftShort = [];
  const noLv = [];
  const filePlans = [];

  LEVELS.forEach((level) => {
    const lvList = loadArray(path.join(ROOT, "data", `${level}.js`));
    langs.forEach((lang) => {
      const rel = `data/${lang}/${level}.js`;
      const full = path.join(ROOT, rel);
      const www = `www/data/${lang}/${level}.js`;
      const text = fs.readFileSync(full, "utf8");
      if (sha256(text) !== sha256(fs.readFileSync(path.join(ROOT, www), "utf8"))) throw new Error(`mirror mismatch ${rel}`);
      const langList = loadArray(full);
      const queues = new Map();
      langList.forEach((entry, index) => {
        const key = pairKey(entry);
        if (!queues.has(key)) queues.set(key, []);
        queues.get(key).push(index);
      });
      const plans = langList.map(() => null);
      lvList.forEach((lvEntry) => {
        const queue = queues.get(pairKey(lvEntry));
        if (!queue || !queue.length) return;
        const langIndex = queue.shift();
        const langEntry = langList[langIndex];
        const card = cardLabel(lvEntry);
        const corpus = germanCorpus(lvEntry);
        const accents = (langEntry.study && langEntry.study.sectionAccents) || {};
        Object.entries(accents).forEach(([key, value]) => {
          const strings = [];
          walkStrings(value, "other", strings);
          const translated = strings.filter((row) => isTranslationWord(row.text, row.slot, corpus));
          const german = strings.filter((row) => row.text.trim() && /\p{L}/u.test(row.text) && !isTranslationWord(row.text, row.slot, corpus));
          counts.strings += strings.filter((row) => row.text.trim()).length;
          counts.germanStrings += german.length;
          counts.translationStrings += translated.length;
          translated.forEach((row) => {
            if (translationExamples.some((item) => item.lang === lang)) return;
            if (translationExamples.length >= 10) return;
            translationExamples.push({ lang, level, card, key, slot: row.slot, text: row.text });
          });
          if (Array.isArray(value)) {
            value.forEach((item) => {
              counts.arrayEntries += 1;
              const itemStrings = [];
              walkStrings(item, "other", itemStrings);
              const itemTranslated = itemStrings.filter((row) => isTranslationWord(row.text, row.slot, corpus));
              if (itemTranslated.length) counts.arrayEntriesWithTranslation += 1;
              else if (itemStrings.some((row) => row.text.trim())) {
                counts.arrayEntriesGermanOnly += 1;
                if (germanOnlyExamples.length < 10 && !germanOnlyExamples.some((row) => row.lang === lang && row.card === card)) {
                  germanOnlyExamples.push({
                    lang, level, card, key,
                    text: itemStrings.map((row) => row.text).filter(Boolean).slice(0, 4).join(" | ")
                  });
                }
              }
            });
          }
        });
        const plan = planCard(lvEntry, langEntry);
        plan.notes.forEach((note) => {
          if (note.mark === "NO_LV") {
            counts.noLv += 1;
            noLv.push({ lang, level, card, key: note.key, accent: note.accent });
          } else {
            counts.leftShort += 1;
            leftShort.push({ lang, level, card, key: note.key, accent: note.accent, content: note.content, lv: note.lv });
          }
        });
        plan.ops.forEach((op) => {
          counts[op.mode] += 1;
          changes.push({
            lang, level, card, key: op.key, mode: op.mode, from: op.from, to: op.to, content: op.content || op.to
          });
        });
        if (plan.ops.length) plans[langIndex] = plan;
      });
      if (!plans.some(Boolean)) return;
      const result = rewrite(text, plans);
      const restored = restoreText(result.text, result.placed);
      if (sha256(restored) !== sha256(text)) throw new Error(`restore sha mismatch ${rel}`);
      filePlans.push({ rel, www, base: sha256(text), text: result.text, placed: result.placed });
    });
  });

  const outDir = "/tmp/study-accent-files";
  fs.rmSync(outDir, { recursive: true, force: true });
  fs.mkdirSync(outDir, { recursive: true });
  filePlans.forEach((row, index) => {
    fs.writeFileSync(path.join(outDir, `${index}.js`), row.text);
    fs.writeFileSync(path.join(outDir, `${index}.json`), JSON.stringify({
      rel: row.rel, www: row.www, base: row.base, placed: row.placed
    }));
    execFileSync("node", ["--check", path.join(outDir, `${index}.js`)], { stdio: "pipe" });
  });
  fs.writeFileSync(path.join(outDir, "index.json"), JSON.stringify(filePlans.map((row, index) => ({
    index, rel: row.rel, www: row.www, base: row.base
  }))));
  fs.writeFileSync("/tmp/study-accent-stats.json", JSON.stringify({
    counts, translationExamples, germanOnlyExamples, changes, leftShort, noLv, files: filePlans.length
  }));
  if (APPLY) {
    filePlans.forEach((row) => {
      fs.writeFileSync(path.join(ROOT, row.rel), row.text);
      fs.writeFileSync(path.join(ROOT, row.www), row.text);
    });
  }
  console.log(JSON.stringify({
    counts, files: filePlans.length, translationExamples: translationExamples.length,
    germanOnlyExamples: germanOnlyExamples.length, apply: APPLY
  }, null, 2));
}

main();
