#!/usr/bin/env node
/**
 * Study realignment classifier (COPY-ONLY gate).
 * Compares target-language study rows with LV. Does not edit data when the
 * verification gate cannot pass. Does not invent translations.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "reports/study-realign");
const BASE = "a8d3c8a2643a3043d1ef273750750e07741dc172";
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const SEPS = [" -- ", " – ", " — ", " = ", " - ", " | "];
const LOCAL_PUNCT = /[¿¡;；？!—'’'«»„“”"]/g;
const BASELINE = { TEXT: 5428, MISSING: 307, EXTRA: 1086, ORDER: 0, COURSE_EXTRA: 2 };

function loadArray(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx, { filename: rel });
  const key = Object.keys(ctx.window).find((name) => Array.isArray(ctx.window[name]));
  if (!key) throw new Error(`no array global in ${rel}`);
  return ctx.window[key];
}

function sha256File(rel) {
  return crypto.createHash("sha256").update(fs.readFileSync(path.join(ROOT, rel))).digest("hex");
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

function norm(value) {
  let text = String(value ?? "").normalize("NFC").replace(/ß/g, "ss").toLowerCase();
  text = text.replace(/\u00A0/g, " ").replace(LOCAL_PUNCT, " ");
  text = text.replace(/\s+/g, " ").trim().replace(/[.]+$/g, "").replace(/[?]+$/g, "").trim();
  return text.replace(/\s+/g, " ").trim();
}

function tokens(value) {
  const text = norm(value);
  return text ? text.split(" ") : [];
}

function foldAudit(value) {
  return String(value).normalize("NFC").replace(/\u00A0/g, " ").replace(/[\u00AD\u200B\u200C\u200D\uFEFF\u2060\u180E]/g, "").trim();
}

function cardId(entry) {
  if (entry && entry.study && entry.study.id) return String(entry.study.id);
  if (entry && entry.id) return String(entry.id);
  return String(entry && entry.de || "");
}

function cardKey(entry) {
  return `${entry && entry.de}\0${entry && entry.level}`;
}

function germanSentence(item) {
  if (!item || typeof item !== "object") return "";
  if (typeof item.example === "string") return splitMixed(item.example).left;
  if (typeof item.de === "string") return splitMixed(item.de).left;
  return "";
}

function mainWord(item) {
  if (!item || typeof item !== "object" || !("word" in item)) return "";
  return norm(item.word);
}

function arrayNames(study) {
  if (!study || typeof study !== "object") return [];
  return Object.keys(study).filter((key) => {
    if (key === "sectionAccents") return false;
    const value = study[key];
    return Array.isArray(value) && value.some((item) => item && typeof item === "object" && !Array.isArray(item) && ("word" in item || "de" in item || "example" in item));
  });
}

function indexFields(entry) {
  const fields = {};
  const study = entry && entry.study;
  if (!study) return fields;
  (study.examples || []).forEach((row, index) => {
    if (row && typeof row === "object" && "de" in row) fields[`study.examples[${index}].de`] = row.de;
  });
  (study.comparison || []).forEach((row, index) => {
    if (row && typeof row === "object" && "word" in row) fields[`study.comparison[${index}].word`] = row.word;
  });
  (study.words || []).forEach((row, index) => {
    if (row && typeof row === "object" && "de" in row) fields[`study.words[${index}].de`] = row.de;
  });
  (study.comparisonTable || []).forEach((row, index) => {
    if (row && typeof row === "object" && "de" in row) fields[`study.comparisonTable[${index}].de`] = row.de;
  });
  return fields;
}

function collectVocab(entry, vocab) {
  const visit = (node) => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      node.forEach(visit);
      return;
    }
    Object.entries(node).forEach(([key, value]) => {
      if (key === "sectionAccents") return;
      if (typeof value === "string" && ["de", "word", "example", "article", "plural"].includes(key)) {
        const side = key === "example" || key === "de" ? splitMixed(value).left : value;
        tokens(side).forEach((tok) => vocab.add(tok));
      } else if (value && typeof value === "object") visit(value);
    });
  };
  if (entry && entry.de) tokens(entry.de).forEach((tok) => vocab.add(tok));
  if (entry && entry.study) visit(entry.study);
}

function cardGerman(entry) {
  const words = new Set();
  const sentences = new Set();
  const visit = (node) => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      node.forEach(visit);
      return;
    }
    if (typeof node.word === "string") words.add(norm(node.word));
    if (typeof node.example === "string") sentences.add(norm(splitMixed(node.example).left));
    if (typeof node.de === "string") sentences.add(norm(splitMixed(node.de).left));
    Object.entries(node).forEach(([key, value]) => {
      if (key !== "sectionAccents" && value && typeof value === "object") visit(value);
    });
  };
  if (entry && entry.study) visit(entry.study);
  return { words, sentences };
}

function isVariant(langSentence, lvSentence, vocab) {
  const left = tokens(langSentence);
  const right = tokens(lvSentence);
  if (!left.length || !right.length) return false;
  if (left.join(" ") === right.join(" ")) return false;
  const foreign = (tok) => !vocab.has(tok);
  let i = 0;
  let j = 0;
  let shared = 0;
  let foreignDiff = 0;
  let germanDiff = 0;
  while (i < left.length && j < right.length) {
    if (left[i] === right[j]) {
      shared += 1;
      i += 1;
      j += 1;
      continue;
    }
    let moved = false;
    for (let skip = 1; skip <= 2 && i + skip < left.length; skip += 1) {
      if (left[i + skip] === right[j] && left.slice(i, i + skip).every(foreign)) {
        foreignDiff += skip;
        i += skip;
        moved = true;
        break;
      }
    }
    if (moved) continue;
    if (foreign(left[i]) && vocab.has(right[j])) {
      foreignDiff += 1;
      i += 1;
      j += 1;
      continue;
    }
    germanDiff += 1;
    i += 1;
    j += 1;
  }
  if (left.slice(i).every(foreign)) foreignDiff += left.length - i;
  else germanDiff += left.length - i;
  germanDiff += right.length - j;
  if (!(germanDiff === 0 && foreignDiff >= 1 && foreignDiff <= 2 && shared >= 2)) return false;
  return shared >= Math.ceil(right.length * 0.6);
}

function classifyArray(lvItems, langItems, vocab) {
  const lv = Array.isArray(lvItems) ? lvItems : [];
  const lang = Array.isArray(langItems) ? langItems : [];
  const used = new Set();
  const wordIndexes = new Map();
  lv.forEach((item, index) => {
    const word = mainWord(item);
    if (!word) return;
    if (!wordIndexes.has(word)) wordIndexes.set(word, []);
    wordIndexes.get(word).push(index);
  });
  const hasWord = lv.some((item) => mainWord(item)) || lang.some((item) => mainWord(item));
  const rows = lang.map((item, index) => ({ item, index, cls: null, lvIndex: null, deleteOk: false }));
  if (hasWord) {
    rows.forEach((row) => {
      const word = mainWord(row.item);
      const sentence = germanSentence(row.item);
      if (!word || !wordIndexes.has(word)) {
        row.cls = "EXTRA_TRUE";
        return;
      }
      const open = (wordIndexes.get(word) || []).filter((index) => !used.has(index));
      const same = open.find((index) => norm(germanSentence(lv[index])) === norm(sentence));
      if (same != null) {
        row.cls = "SAME_ROW";
        row.lvIndex = same;
        used.add(same);
        return;
      }
      const variant = open.find((index) => isVariant(sentence, germanSentence(lv[index]), vocab));
      if (variant != null) {
        row.cls = "VARIANT";
        row.lvIndex = variant;
        used.add(variant);
        return;
      }
      if (open.length) {
        row.cls = "DIFFERENT_SENTENCE";
        row.lvIndex = open[0];
        used.add(open[0]);
        return;
      }
      row.cls = "SURPLUS_SAME_WORD";
    });
  } else {
    rows.forEach((row) => {
      const sentence = norm(germanSentence(row.item));
      const same = lv.findIndex((item, index) => !used.has(index) && sentence && norm(germanSentence(item)) === sentence);
      if (same >= 0) {
        row.cls = "SAME_ROW";
        row.lvIndex = same;
        used.add(same);
        return;
      }
      const variant = lv.findIndex((item, index) => !used.has(index) && isVariant(germanSentence(row.item), germanSentence(item), vocab));
      if (variant >= 0) {
        row.cls = "VARIANT";
        row.lvIndex = variant;
        used.add(variant);
        return;
      }
      row.cls = "UNMATCHED_SENTENCE";
    });
    const free = [];
    lv.forEach((_, index) => {
      if (!used.has(index)) free.push(index);
    });
    rows.filter((row) => row.cls === "UNMATCHED_SENTENCE").forEach((row) => {
      if (free.length) {
        row.cls = "DIFFERENT_SENTENCE";
        row.lvIndex = free.shift();
        used.add(row.lvIndex);
      } else row.cls = "EXTRA_TRUE";
    });
  }
  return { rows, lv };
}

function applyRecheck(rows, cardSet) {
  rows.forEach((row) => {
    if (row.cls !== "EXTRA_TRUE") return;
    const word = mainWord(row.item);
    const sentence = norm(germanSentence(row.item));
    const wordAbsent = !word || !cardSet.words.has(word);
    const sentenceAbsent = !sentence || !cardSet.sentences.has(sentence);
    row.deleteOk = wordAbsent && sentenceAbsent;
    if (!row.deleteOk) row.cls = "EXTRA_BLOCKED";
  });
}

function simulatedItems(rows, lv) {
  const kept = rows.filter((row) => row.cls !== "EXTRA_TRUE");
  const used = new Set();
  const ordered = [];
  lv.forEach((_, lvIndex) => {
    const bound = kept.find((row) => !used.has(row) && row.lvIndex === lvIndex);
    if (!bound) return;
    used.add(bound);
    ordered.push(bound.item);
  });
  kept.forEach((row) => {
    if (!used.has(row)) ordered.push(row.item);
  });
  return ordered;
}

function tally(lvFields, langFields, bucket) {
  const keys = new Set([...Object.keys(lvFields), ...Object.keys(langFields)]);
  keys.forEach((key) => {
    const inLv = Object.prototype.hasOwnProperty.call(lvFields, key);
    const inLang = Object.prototype.hasOwnProperty.call(langFields, key);
    if (inLv && !inLang) bucket.MISSING += 1;
    else if (!inLv && inLang) bucket.EXTRA += 1;
    else if (foldAudit(lvFields[key]) !== foldAudit(langFields[key])) bucket.TEXT += 1;
  });
}

function csvCell(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function pushSample(bucket, row) {
  if (bucket.length >= 10) return;
  if (bucket.some((item) => item.lang === row.lang && item.id === row.id && item.array === row.array)) return;
  bucket.push(row);
}

const langs = fs.readdirSync(path.join(ROOT, "data")).filter((name) => fs.statSync(path.join(ROOT, "data", name)).isDirectory());
const vocab = new Set();
const lvCache = {};
LEVELS.forEach((level) => {
  lvCache[level] = loadArray(`data/${level}.js`);
  lvCache[level].forEach((entry) => collectVocab(entry, vocab));
});

const counts = {};
const samples = {};
const focus = [];
const blocking = [];
const missing = [];
const needs = [];
const accents = { cards: 0, mismatchCards: 0, mismatchArrays: 0, byArray: {} };
let literElements = 0;
const indexBefore = { TEXT: 0, MISSING: 0, EXTRA: 0 };
const indexAfter = { TEXT: 0, MISSING: 0, EXTRA: 0 };
const mirror = { same: 0, diff: [] };

function bump(cls) {
  counts[cls] = (counts[cls] || 0) + 1;
}

LEVELS.forEach((level) => {
  const lvList = lvCache[level];
  langs.forEach((lang) => {
    const rel = `data/${lang}/${level}.js`;
    const www = `www/data/${lang}/${level}.js`;
    if (sha256File(rel) === sha256File(www)) mirror.same += 1;
    else mirror.diff.push(rel);
    const langList = loadArray(rel);
    const queues = new Map();
    langList.forEach((entry, index) => {
      const key = cardKey(entry);
      if (!queues.has(key)) queues.set(key, []);
      queues.get(key).push(index);
    });
    lvList.forEach((lvEntry) => {
      const queue = queues.get(cardKey(lvEntry));
      if (!queue || !queue.length) return;
      const langEntry = langList[queue.shift()];
      const id = cardId(lvEntry);
      const cardSet = cardGerman(lvEntry);
      const after = langEntry.study ? { ...langEntry, study: { ...langEntry.study } } : langEntry;
      const names = new Set([...arrayNames(lvEntry.study), ...arrayNames(langEntry.study)]);
      names.forEach((name) => {
        const lvItems = (lvEntry.study && lvEntry.study[name]) || [];
        const langItems = (langEntry.study && langEntry.study[name]) || [];
        const classified = classifyArray(lvItems, langItems, vocab);
        applyRecheck(classified.rows, cardSet);
        const lvSentenceByIndex = classified.lv;
        classified.rows.forEach((row) => {
          bump(row.cls);
          const sample = {
            lang, level, id, array: name, index: row.index, cls: row.cls,
            word: row.item.word || "",
            de: germanSentence(row.item).slice(0, 140),
            lv: row.lvIndex == null ? "" : germanSentence(lvSentenceByIndex[row.lvIndex]).slice(0, 140)
          };
          samples[row.cls] = samples[row.cls] || [];
          pushSample(samples[row.cls], sample);
          if (row.cls === "DIFFERENT_SENTENCE" && needs.length < 4000) {
            needs.push([lang, id, name, row.index, sample.lv, sample.de]);
          }
          if (id === "a1-liter" && (lang === "et" || lang === "gr") && row.cls === "EXTRA_TRUE") literElements += 1;
        });
        classified.lv.forEach((item, lvIndex) => {
          const covered = classified.rows.some((row) => row.lvIndex === lvIndex && row.cls !== "EXTRA_TRUE" && row.cls !== "EXTRA_BLOCKED");
          if (!covered) missing.push([lang, id, name, item.word || "", germanSentence(item)]);
        });
        if (after.study) after.study[name] = simulatedItems(classified.rows, classified.lv);
      });
      const beforeFields = indexFields(langEntry);
      const afterFields = indexFields(after);
      const lvFields = indexFields(lvEntry);
      tally(lvFields, beforeFields, indexBefore);
      tally(lvFields, afterFields, indexAfter);
      Object.keys(afterFields).forEach((field) => {
        if (Object.prototype.hasOwnProperty.call(lvFields, field)) return;
        const match = field.match(/study\.(examples|comparison|words|comparisonTable)\[(\d+)\]/);
        blocking.push({
          lang, level, id, field,
          value: String(afterFields[field]).slice(0, 160)
        });
      });
      const study = langEntry.study;
      if (study && study.sectionAccents) {
        accents.cards += 1;
        let cardMismatch = false;
        arrayNames(study).forEach((name) => {
          const accent = study.sectionAccents[name];
          if (!Array.isArray(accent)) return;
          const content = Array.isArray(study[name]) ? study[name].length : 0;
          if (accent.length === content) return;
          cardMismatch = true;
          accents.mismatchArrays += 1;
          accents.byArray[name] = (accents.byArray[name] || 0) + 1;
        });
        if (cardMismatch) accents.mismatchCards += 1;
      }
      if (["a1-bitte", "a1-müssen", "a1-besuchen", "a1-bis", "a1-liter", "a1-sitzen"].includes(id)
        && ["da", "es", "gr", "et", "ro", "sr", "fi", "tr"].includes(lang)) {
        const detail = {};
        names.forEach((name) => {
          const classified = classifyArray((lvEntry.study && lvEntry.study[name]) || [], (langEntry.study && langEntry.study[name]) || [], vocab);
          applyRecheck(classified.rows, cardSet);
          detail[name] = classified.rows.map((row) => ({
            i: row.index,
            cls: row.cls,
            word: row.item.word || "",
            de: germanSentence(row.item)
          }));
        });
        focus.push({ lang, id, detail });
      }
    });
  });
});

if (mirror.diff.length) {
  console.error("DATA_WWW_MIRROR_DIFF", mirror.diff.slice(0, 5));
  process.exit(1);
}
if (indexBefore.EXTRA !== 542) {
  console.error("UNEXPECTED_BASE_EXTRA", indexBefore);
  process.exit(1);
}

const predicted = {
  TEXT: BASELINE.TEXT + (indexAfter.TEXT - indexBefore.TEXT) * 2,
  MISSING: BASELINE.MISSING + (indexAfter.MISSING - indexBefore.MISSING) * 2,
  EXTRA: BASELINE.COURSE_EXTRA + indexAfter.EXTRA * 2,
  ORDER: 0,
  extraA1C2: indexAfter.EXTRA * 2
};
const gate = {
  textOk: predicted.TEXT <= BASELINE.TEXT,
  missingOk: predicted.MISSING <= BASELINE.MISSING,
  orderOk: predicted.ORDER === 0,
  extraOk: predicted.extraA1C2 === 0,
  courseExtra: BASELINE.COURSE_EXTRA
};
const pass = gate.textOk && gate.missingOk && gate.orderOk && gate.extraOk;

function linesOf(list) {
  return list.map((row) => {
    if (Array.isArray(row)) return row.map(csvCell).join(",");
    return [row.lang, row.level, row.id, row.array, row.index, row.word, row.de, row.lv].map(csvCell).join(",");
  });
}

function exampleBlock(title, rows) {
  const body = (rows || []).map((row) => `- \`${row.lang}\` \`${row.id}\` \`${row.array}[${row.index}]\` word=${JSON.stringify(row.word)} de=${JSON.stringify(row.de)} lv=${JSON.stringify(row.lv)}`);
  return [`### ${title}`, "", ...(body.length ? body : ["- nav"]), ""];
}

function focusBlock(lang, id) {
  const found = focus.find((row) => row.lang === lang && row.id === id);
  if (!found) return [`### ${lang} ${id}`, "", "- kartīte nav atrasta", ""];
  const lines = [`### ${lang} ${id}`, ""];
  Object.entries(found.detail).forEach(([name, rows]) => {
    lines.push(`- \`${name}\``);
    rows.forEach((row) => {
      lines.push(`  - [${row.i}] ${row.cls} word=${JSON.stringify(row.word)} de=${JSON.stringify(row.de)}`);
    });
  });
  lines.push("");
  return lines;
}

const blockingByCard = {};
blocking.forEach((row) => {
  blockingByCard[row.id] = (blockingByCard[row.id] || 0) + 1;
});
const topBlocking = Object.entries(blockingByCard).sort((a, b) => b[1] - a[1]).slice(0, 12);

fs.mkdirSync(OUT, { recursive: true });
const missingCsv = ["language,card,array,lv_word,lv_sentence", ...missing.map((row) => row.map(csvCell).join(","))].join("\n") + "\n";
const needsCsv = ["language,card,array,index,lv_sentence,current_row,marker", ...needs.map((row) => [...row, "NEEDS_TRANSLATION"].map(csvCell).join(","))].join("\n") + "\n";
const blockingCsv = ["language,level,card,field,value", ...blocking.map((row) => [row.lang, row.level, row.id, row.field, row.value].map(csvCell).join(","))].join("\n") + "\n";

const baseFiles = [];
["data", "www/data"].forEach((root) => {
  LEVELS.forEach((level) => {
    baseFiles.push(`${root}/${level}.js`);
    langs.forEach((lang) => baseFiles.push(`${root}/${lang}/${level}.js`));
  });
});
const changes = {
  applied: false,
  stopped: "EXTRA_A1_C2_REMAINS",
  baseCommit: BASE,
  statement: "Dati nav mainīti. Atļautā realignment prognoze pārkāpj EXTRA A1–C2 = 0, jo aizsargātās rindas paliek.",
  baseline: BASELINE,
  studyIndexDataTree: { before: indexBefore, after: indexAfter },
  predictedBothTrees: predicted,
  gate,
  classCountsDataTree: counts,
  literExtraTrueElementsDataTree: literElements,
  deleted: [],
  modified: [],
  baseFileSha256: baseFiles.map((rel) => ({ path: rel, sha256: sha256File(rel) }))
};

const summary = [
  "# Study realignment",
  "",
  "STAGE RESULT: **NEEDS OWNER REVIEW**",
  "",
  "Dati nav mainīti. #870 nav izmantots. Bāze ir #869 galva `a8d3c8a2643a3043d1ef273750750e07741dc172`.",
  "",
  "MASTER v1.18 §1.2, §7.153 un §9 ir izlasīti šajā kokā. §7.158.A ir MASTER v1.19 dokumentā zarā `cursor/master-v119-word-source-f86b` (`ae7a2cc5f778e370cd431751acbedcdfc119bcb2`), ne #869 kokā. Tas aizliedz DE aizstāt bez LV sakritības un aizliedz tulkojuma izgudrošanu. Šis solis tulkojumus neraksta.",
  "",
  "## Kāpēc apstājos",
  "",
  "Atļautās darbības ir: dzēst tikai `EXTRA_TRUE`, ja galvenā vārda un vācu teikuma LV kartītē nav; `SAME_ROW` neaiztikt; `VARIANT` aizstāt tikai vācu lauku; `DIFFERENT_SENTENCE` un tā paša galvenā vārda pārpalikumu nedzēst; kārtot pēc LV galvenā vārda, neieliekot trūkstošās rindas.",
  "",
  "Šī prognoze uz abiem kokiem (`data` un identisko `www/data`):",
  "",
  "| Vārti | #869 | Prognoze | Nosacījums |",
  "| --- | ---: | ---: | --- |",
  `| TEXT | ${BASELINE.TEXT} | ${predicted.TEXT} | nedrīkst pieaugt |`,
  `| MISSING | ${BASELINE.MISSING} | ${predicted.MISSING} | nedrīkst pieaugt |`,
  `| ORDER | ${BASELINE.ORDER} | ${predicted.ORDER} | 0 |`,
  `| EXTRA A1–C2 | ${BASELINE.EXTRA - BASELINE.COURSE_EXTRA} | ${predicted.extraA1C2} | 0 |`,
  `| EXTRA courseLessons | ${BASELINE.COURSE_EXTRA} | ${BASELINE.COURSE_EXTRA} | paliek 2 |`,
  "",
  `Pārkāpums: EXTRA A1–C2 paliek **${predicted.extraA1C2}** (${indexAfter.EXTRA} lauki data kokā, tikpat www kokā). TEXT, MISSING un ORDER nosacījumi prognozē izpildās. Apply nav izpildīts.`,
  "",
  "## Klases data kokā",
  "",
  "www/data līmeņu faili ir baitu identiski data failiem (186/186), tāpēc abi koki dubulto indeksa skaitļus.",
  "",
  "| Klase | Skaits |",
  "| --- | ---: |",
  ...Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([key, value]) => `| ${key} | ${value} |`),
  "",
  "`EXTRA_TRUE` tiktu dzēsts. `EXTRA_BLOCKED` ir rindas, kuru vārds vai vācu teikums LV kartītē jau ir, tāpēc dzēšana apturēta. `SURPLUS_SAME_WORD` ir otrs elements ar to pašu galveno vārdu, kad LV slots jau aizņemts. `DIFFERENT_SENTENCE` datos netiek mainīts.",
  "",
  `a1-liter et+gr: LV Study nav. \`EXTRA_TRUE\` elementi data kokā: **${literElements}** (piemēri un comparison; www dublē to pašu).`,
  "",
  ...exampleBlock("EXTRA_TRUE", samples.EXTRA_TRUE),
  ...exampleBlock("EXTRA_BLOCKED", samples.EXTRA_BLOCKED),
  ...exampleBlock("SURPLUS_SAME_WORD", samples.SURPLUS_SAME_WORD),
  ...exampleBlock("VARIANT", samples.VARIANT),
  ...exampleBlock("DIFFERENT_SENTENCE", samples.DIFFERENT_SENTENCE),
  ...exampleBlock("SAME_ROW", samples.SAME_ROW),
  "## Fokusa kartītes",
  "",
  ...focusBlock("da", "a1-bitte"),
  ...focusBlock("es", "a1-müssen"),
  ...focusBlock("gr", "a1-müssen"),
  ...focusBlock("da", "a1-müssen"),
  ...focusBlock("da", "a1-besuchen"),
  ...focusBlock("da", "a1-bis"),
  ...focusBlock("es", "a1-bis"),
  ...focusBlock("et", "a1-liter"),
  ...focusBlock("gr", "a1-liter"),
  ...focusBlock("sr", "a1-sitzen"),
  "## Kas tur atlikušo EXTRA",
  "",
  `Pēc atļautās prognozes data kokā paliek ${indexAfter.EXTRA} indeksa EXTRA lauki. Biežākās kartītes:`,
  "",
  ...topBlocking.map(([id, count]) => `- \`${id}\`: ${count}`),
  "",
  "Pilns saraksts: `blocking-rows.csv`. Tie ir lauki, kurus noteikumi neļauj noņemt, bet bez kuru noņemšanas EXTRA A1–C2 nav 0.",
  "",
  "## Akcenti",
  "",
  "sectionAccents nav labots. Mērījums ir #869 stāvoklis, jo realignment nav piemērots.",
  "",
  `- Kartītes ar sectionAccents: ${accents.cards}`,
  `- Kartītes, kur masīva garums atšķiras no akcentu masīva: ${accents.mismatchCards}`,
  `- Atšķirīgi masīvi: ${accents.mismatchArrays}`,
  `- Pa masīviem: ${JSON.stringify(accents.byArray)}`,
  "",
  "## Trūkstošās LV rindas un NEEDS_TRANSLATION",
  "",
  `- missing-rows.csv rindas (bez galvenes): ${missing.length}`,
  `- needs-translation.csv rindas (bez galvenes): ${needs.length}`,
  "",
  "Trūkstošās LV rindas nav pievienotas. DIFFERENT_SENTENCE tulkojumi nav mainīti.",
  ""
].join("\n");

if (Buffer.byteLength(summary) > 20 * 1024) {
  console.error("SUMMARY_TOO_LARGE", Buffer.byteLength(summary));
  process.exit(1);
}

const files = {
  "SUMMARY.md": summary,
  "missing-rows.csv": missingCsv,
  "needs-translation.csv": needsCsv,
  "blocking-rows.csv": blockingCsv,
  "accents.json": `${JSON.stringify(accents, null, 2)}\n`,
  "changes.json": `${JSON.stringify(changes, null, 2)}\n`
};
Object.entries(files).forEach(([name, text]) => {
  if (Buffer.byteLength(text) > 500 * 1024) {
    console.error("FILE_TOO_LARGE", name, Buffer.byteLength(text));
    process.exit(1);
  }
  fs.writeFileSync(path.join(OUT, name), text);
});

fs.writeFileSync(path.join(OUT, "verification.md"), [
  "# Verifikācija",
  "",
  "Apply nav izpildīts, jo prognoze pārkāpj EXTRA A1–C2 = 0.",
  "",
  "- Klasifikators: `node scripts/realign-study-elements.js` (izejas kods 2 = vārti nav izpildīti)",
  "- Atjaunošanas pārbaude: `node scripts/restore-study-realign.js`",
  `- Study indeksa data koks pirms: ${JSON.stringify(indexBefore)}`,
  `- Study indeksa data koks pēc atļautās prognozes: ${JSON.stringify(indexAfter)}`,
  `- Prognoze abiem kokiem: ${JSON.stringify(predicted)}`,
  `- #869 pilnais audits (temp kopija, dati netika mainīti): TEXT ${BASELINE.TEXT}, MISSING ${BASELINE.MISSING}, EXTRA ${BASELINE.EXTRA}, ORDER ${BASELINE.ORDER}`,
  "- Audita sadalījums: EXTRA a1 998, c1 74, c2 12, courseLessons 2; TEXT a1 14, courseLessons 5414; MISSING courseLessons 292 un citi nemaināmie datu kopumi 15.",
  "- data un www/data līmeņu faili ir baitu identiski, tāpēc study EXTRA 542 data kokā ir 1084 abos kokos.",
  ""
].join("\n"));

const written = fs.readdirSync(OUT).filter((name) => name !== "MANIFEST.md").sort();
const manifest = [
  "# MANIFEST",
  "",
  `- BASE: \`${BASE}\``,
  "- APPLY: nav izpildīts",
  "- STAGE RESULT: NEEDS OWNER REVIEW",
  `- DATA_WWW_MIRROR: ${mirror.same} identiski līmeņu faili, atšķirības ${mirror.diff.length}`,
  "",
  "## Faili",
  "",
  "| fails | baiti | sha256 |",
  "| --- | ---: | --- |",
  ...written.map((name) => {
    const text = fs.readFileSync(path.join(OUT, name));
    const hash = crypto.createHash("sha256").update(text).digest("hex");
    return `| ${name} | ${text.length} | \`${hash}\` |`;
  }),
  "",
  "## Atvēršanai un lejupielādei",
  "",
  "Saites tiek ierakstītas pēc commit, ar pilnu COMMIT_SHA.",
  ""
].join("\n");
fs.writeFileSync(path.join(OUT, "MANIFEST.md"), manifest);

console.log(JSON.stringify({
  applied: false,
  pass,
  counts,
  indexBefore,
  indexAfter,
  predicted,
  literElements,
  missing: missing.length,
  needs: needs.length,
  blocking: blocking.length,
  accents,
  summaryBytes: Buffer.byteLength(summary)
}, null, 2));
process.exit(pass ? 0 : 2);
