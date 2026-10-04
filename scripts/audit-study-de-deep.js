#!/usr/bin/env node
/**
 * READ-ONLY deep check of study German fields against LV.
 * Does not write data/, www/data/, or any report unless --out is set.
 *
 * Compared, by index, per card (paired on de + level):
 *   study.comparison[].word
 *   German side of study.comparison[].example
 *   study.examples[].de
 *   German fields of study.variants[] (article, de, plural, example_de)
 *   card id and study.id
 *
 * TEXT: both sides have the index and the values differ, and the sequences
 *       are not a reordering of each other.
 * EXTRA: the language has the index and LV does not.
 * MISSING: LV has the index and the language does not.
 * ORDER: same length, same multiset, different sequence. Those positions
 *        are ORDER and are not also TEXT.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.resolve(__dirname, "..");
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const SEPS = [" -- ", " – ", " — ", " = ", " - "];
const VARIANT_KEYS = ["article", "de", "plural", "example_de"];

function argValue(name) {
  const hit = process.argv.find((arg) => arg.startsWith(`${name}=`));
  return hit ? hit.slice(name.length + 1) : "";
}

function loadArray(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx, { filename: filePath });
  const key = Object.keys(ctx.window).find((name) => Array.isArray(ctx.window[name]));
  if (!key) throw new Error(`no array global in ${filePath}`);
  return ctx.window[key];
}

function germanSide(raw) {
  const text = String(raw ?? "");
  let best = null;
  SEPS.forEach((sep) => {
    const index = text.indexOf(sep);
    if (index >= 0 && (!best || index < best.index)) best = { index, sep };
  });
  return best ? text.slice(0, best.index) : text;
}

function cardLabel(entry) {
  if (entry && entry.study && entry.study.id) return String(entry.study.id);
  if (entry && entry.id) return String(entry.id);
  return String((entry && entry.de) || "");
}

function pairKey(entry) {
  return `${entry && entry.de}\0${entry && entry.level}`;
}

function presentValues(rows, pick) {
  return (Array.isArray(rows) ? rows : []).map((row) => {
    if (!row || typeof row !== "object" || !Object.prototype.hasOwnProperty.call(row, pick.key) && !pick.derive) {
      if (pick.derive && row && typeof row === "object" && pick.source in row) {
        return { ok: true, value: pick.derive(row) };
      }
      return { ok: false, value: "" };
    }
    if (pick.derive) return { ok: true, value: pick.derive(row) };
    return { ok: true, value: row[pick.key] == null ? "" : String(row[pick.key]) };
  });
}

function fieldSeries(rows, spec) {
  return (Array.isArray(rows) ? rows : []).map((row) => {
    if (!row || typeof row !== "object") return { ok: false, value: "" };
    if (spec.germanExample) {
      if (typeof row.example !== "string") return { ok: false, value: "" };
      return { ok: true, value: germanSide(row.example) };
    }
    if (!Object.prototype.hasOwnProperty.call(row, spec.key)) return { ok: false, value: "" };
    return { ok: true, value: row[spec.key] == null ? "" : String(row[spec.key]) };
  });
}

function scalar(entry, which) {
  if (which === "id") {
    if (!entry || !Object.prototype.hasOwnProperty.call(entry, "id")) return { ok: false, value: "" };
    return { ok: true, value: entry.id == null ? "" : String(entry.id) };
  }
  const study = entry && entry.study;
  if (!study || !Object.prototype.hasOwnProperty.call(study, "id")) return { ok: false, value: "" };
  return { ok: true, value: study.id == null ? "" : String(study.id) };
}

function sameMultiset(left, right) {
  if (left.length !== right.length) return false;
  const a = left.map((item) => (item.ok ? `1:${item.value}` : "0")).sort();
  const b = right.map((item) => (item.ok ? `1:${item.value}` : "0")).sort();
  return a.every((item, index) => item === b[index]);
}

function main() {
  const langs = fs.readdirSync(path.join(ROOT, "data")).filter((name) => fs.statSync(path.join(ROOT, "data", name)).isDirectory());
  const totals = { TEXT: 0, EXTRA: 0, MISSING: 0, ORDER: 0 };
  const byLang = {};
  const byLevel = {};
  const byField = {};
  const cases = [];

  function bump(kind, lang, level, field) {
    totals[kind] += 1;
    byLang[lang] = byLang[lang] || { TEXT: 0, EXTRA: 0, MISSING: 0, ORDER: 0 };
    byLevel[level] = byLevel[level] || { TEXT: 0, EXTRA: 0, MISSING: 0, ORDER: 0 };
    byField[field] = byField[field] || { TEXT: 0, EXTRA: 0, MISSING: 0, ORDER: 0 };
    byLang[lang][kind] += 1;
    byLevel[level][kind] += 1;
    byField[field][kind] += 1;
  }

  function addCase(kind, lang, level, card, array, index, lv, value, field) {
    bump(kind, lang, level, field);
    cases.push({ kind, lang, level, card, array, index, field, lv, value });
  }

  function compareSeries(lang, level, card, array, field, lvSeries, langSeries) {
    const permutation = lvSeries.length === langSeries.length && sameMultiset(lvSeries, langSeries)
      && lvSeries.some((item, index) => item.ok !== langSeries[index].ok || item.value !== langSeries[index].value);
    const count = Math.max(lvSeries.length, langSeries.length);
    for (let index = 0; index < count; index += 1) {
      const lvItem = lvSeries[index];
      const langItem = langSeries[index];
      if (!lvItem && langItem && langItem.ok) {
        addCase("EXTRA", lang, level, card, array, index, "", langItem.value, field);
        continue;
      }
      if (lvItem && lvItem.ok && !langItem) {
        addCase("MISSING", lang, level, card, array, index, lvItem.value, "", field);
        continue;
      }
      if (!lvItem || !langItem) continue;
      if (lvItem.ok && !langItem.ok) {
        addCase("MISSING", lang, level, card, array, index, lvItem.value, "", field);
        continue;
      }
      if (!lvItem.ok && langItem.ok) {
        addCase("EXTRA", lang, level, card, array, index, "", langItem.value, field);
        continue;
      }
      if (!lvItem.ok && !langItem.ok) continue;
      if (lvItem.value === langItem.value) continue;
      addCase(permutation ? "ORDER" : "TEXT", lang, level, card, array, index, lvItem.value, langItem.value, field);
    }
  }

  LEVELS.forEach((level) => {
    const lvList = loadArray(path.join(ROOT, "data", `${level}.js`));
    langs.forEach((lang) => {
      const langList = loadArray(path.join(ROOT, "data", lang, `${level}.js`));
      const queues = new Map();
      langList.forEach((entry, index) => {
        const key = pairKey(entry);
        if (!queues.has(key)) queues.set(key, []);
        queues.get(key).push(index);
      });
      const used = new Set();
      lvList.forEach((lvEntry) => {
        const queue = queues.get(pairKey(lvEntry));
        const card = cardLabel(lvEntry);
        if (!queue || !queue.length) {
          addCase("MISSING", lang, level, card, "card", 0, lvEntry.de || "", "", "card");
          return;
        }
        const langEntry = langList[queue.shift()];
        used.add(langList.indexOf(langEntry));
        const lvStudy = lvEntry.study || {};
        const langStudy = langEntry.study || {};
        compareSeries(lang, level, card, "comparison", "comparison.word",
          fieldSeries(lvStudy.comparison, { key: "word" }),
          fieldSeries(langStudy.comparison, { key: "word" }));
        compareSeries(lang, level, card, "comparison", "comparison.example.de",
          fieldSeries(lvStudy.comparison, { germanExample: true }),
          fieldSeries(langStudy.comparison, { germanExample: true }));
        compareSeries(lang, level, card, "examples", "examples.de",
          fieldSeries(lvStudy.examples, { key: "de" }),
          fieldSeries(langStudy.examples, { key: "de" }));
        VARIANT_KEYS.forEach((key) => {
          compareSeries(lang, level, card, "variants", `variants.${key}`,
            fieldSeries(lvStudy.variants, { key }),
            fieldSeries(langStudy.variants, { key }));
        });
        const lvId = scalar(lvEntry, "id");
        const langId = scalar(langEntry, "id");
        if (lvId.ok || langId.ok) {
          compareSeries(lang, level, card, "id", "id", [lvId], [langId]);
        }
        const lvStudyId = scalar(lvEntry, "study.id");
        const langStudyId = scalar(langEntry, "study.id");
        if (lvStudyId.ok || langStudyId.ok) {
          compareSeries(lang, level, card, "study.id", "study.id", [lvStudyId], [langStudyId]);
        }
      });
      langList.forEach((entry, index) => {
        if (used.has(index)) return;
        addCase("EXTRA", lang, level, cardLabel(entry), "card", index, "", entry.de || "", "card");
      });
    });
  });

  const fields = ["comparison.word", "comparison.example.de", "examples.de", "variants.article", "variants.de", "variants.plural", "variants.example_de", "id", "study.id", "card"];
  langs.forEach((lang) => {
    byLang[lang] = byLang[lang] || { TEXT: 0, EXTRA: 0, MISSING: 0, ORDER: 0 };
  });
  LEVELS.forEach((level) => {
    byLevel[level] = byLevel[level] || { TEXT: 0, EXTRA: 0, MISSING: 0, ORDER: 0 };
  });
  fields.forEach((field) => {
    byField[field] = byField[field] || { TEXT: 0, EXTRA: 0, MISSING: 0, ORDER: 0 };
  });

  const report = { totals, byLang, byLevel, byField, cases };
  const out = argValue("--out");
  if (out) fs.writeFileSync(out, `${JSON.stringify(report)}\n`);
  console.log(JSON.stringify({ totals, caseCount: cases.length, byField }));
  process.exit(totals.TEXT + totals.EXTRA + totals.MISSING + totals.ORDER === 0 ? 0 : 1);
}

main();
