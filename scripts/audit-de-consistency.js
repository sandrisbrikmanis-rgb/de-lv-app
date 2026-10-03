#!/usr/bin/env node
/**
 * DE consistency audit (READ-ONLY).
 *
 * DE slāņa kopsavilkums (faktiskā struktūra):
 * 1. A1–C2: de, de_article, de_plural, level, study.id, study.layout ir identitāte/DE.
 *    study.examples[].de, comparison[].word, words[].de, comparisonTable[].de ir DE.
 *    lv, translation, explanation, tip, important, meaning ir tulkojums, ne DE lauks.
 * 2. sentences.js: de un level; lv ir tulkojums. Atsevišķa id lauka nav — identitāte ir de + pozīcija.
 * 3. verbs.js: piecas formas (infinitiv, praesens, imperfektIndikativ, imperfektKonjunktiv,
 *    partizipVergangenheit), katrā de. hilfsverb/reflexive/separable LV paraugā nav.
 * 4. courseTrainingCards: mērķvalodā data/{lang}/courseTrainingCards.js, DE ir back.
 *    LV etalons nav data/courseTrainingCards.js; tas ir ui.js lesson1–6TrainingCards.
 * 5. nounArticles.js: viss saturs ir DE (article, noun, plural) un atslēgu secība.
 * 6. dialogueIdMap.js: de un atslēgu secība ir DE identitāte; lauks lv ir tulkojums.
 * 7. Kurss L8–L21: lesson id, secība, de/back/prompt/answer/base/ich/er/wir/answer2,
 *    forms[].text un svītras kreisā puse. heading/text/task/label nav DE lauki.
 * 8. Kurss L1–L7 un extra HTML: tie paši segmenti kā verify-*-de-compliance
 *    (kurss-example, conjugation strong). Pārējais HTML ir NOT_VERIFIABLE.
 * 9. DE atdalītājs ir –/— vai atstarpes apņemta defise. Ja LV DE pusē ir
 *    latviešu diakritika vai svešs alfabēts, lauks ir NOT_VERIFIABLE.
 * 10. Šis audits pierāda DE konsekvenci starp valodām, nevis DE pareizību.
 */
const fs = require("fs");
const os = require("os");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT, loadWindowGlobals, loadArrayDataset, fileExists } = require("./lib/audit-common");

const DASH_RE = /[–—]|\s-\s/;
const LV_DIACRITICS = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const FOREIGN_RE = /[\u0370-\u03FF\u0400-\u04FF\u0590-\u05FF\u0600-\u06FF\u0900-\u097F\u10A0-\u10FF\u3040-\u30FF\u4E00-\u9FFF\uAC00-\uD7AF]/;
const ZW_RE = /[\u00AD\u200B\u200C\u200D\uFEFF\u2060\u180E]/g;
const DATASETS = [
  "a1", "a2", "b1", "b2", "c1", "c2",
  "sentences", "verbs", "courseLessons", "courseTrainingCards",
  "nounArticles", "dialogueIdMap"
];
const VERB_FORMS = [
  "infinitiv", "praesens", "imperfektIndikativ", "imperfektKonjunktiv", "partizipVergangenheit"
];
const CARD_SCALAR_DE = ["de", "back", "prompt", "answer", "base", "ich", "er", "wir", "answer2"];

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function readMasterVersion() {
  const text = fs.readFileSync(path.join(ROOT, "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md"), "utf8");
  const m = text.match(/\*\*Versija:\*\*\s*([0-9.]+)/);
  return m ? m[1] : "UNKNOWN";
}

function loadRegistryCodes() {
  const win = loadWindowGlobals("languages/registry.js");
  if (!win.AppLanguageRegistry || typeof win.AppLanguageRegistry.all !== "function") {
    throw new Error("languages/registry.js did not expose AppLanguageRegistry");
  }
  return win.AppLanguageRegistry.all().map((entry) => entry.code);
}

function foldUnicode(value) {
  return String(value).normalize("NFC").replace(/\u00A0/g, " ").replace(ZW_RE, "").trim();
}

function foreignScripts(value) {
  const text = String(value);
  const found = [];
  if (/[\u0400-\u04FF]/.test(text)) found.push("Cyrillic");
  if (/[\u0370-\u03FF]/.test(text)) found.push("Greek");
  if (/[\u0590-\u05FF]/.test(text)) found.push("Hebrew");
  if (/[\u0600-\u06FF]/.test(text)) found.push("Arabic");
  if (/[\u0900-\u097F]/.test(text)) found.push("Devanagari");
  if (/[\u10A0-\u10FF]/.test(text)) found.push("Georgian");
  if (/[\u3040-\u30FF\u4E00-\u9FFF]/.test(text)) found.push("CJK");
  if (/[\uAC00-\uD7AF]/.test(text)) found.push("Hangul");
  return found;
}

function classify(lv, lang) {
  if (Object.is(lv, lang)) return "MATCH";
  if (lv == null || lang == null) return "TEXT";
  if (foldUnicode(lv) === foldUnicode(lang)) return "UNICODE_ONLY";
  return "TEXT";
}

function deSide(text) {
  const s = String(text);
  const idx = s.search(DASH_RE);
  if (idx < 0) return { hasDash: false, de: s };
  return { hasDash: true, de: s.slice(0, idx) };
}

function isExplanationString(text) {
  return LV_DIACRITICS.test(String(text));
}

function emptyBucket() {
  return {
    checked: 0,
    match: 0,
    mismatches: [],
    notVerifiable: 0,
    notVerifiableChars: 0,
    missingFile: false
  };
}

function addCompare(bucket, rec, lv, lang) {
  bucket.checked += 1;
  const kind = classify(lv, lang);
  if (kind === "MATCH") {
    bucket.match += 1;
    const lvForeign = foreignScripts(lv);
    const langForeign = foreignScripts(lang).filter((name) => !lvForeign.includes(name));
    if (langForeign.length) {
      bucket.mismatches.push({ ...rec, kind: "TEXT", lvValue: lv, langValue: lang, foreignScript: langForeign.join(",") });
      bucket.match -= 1;
    }
    return;
  }
  const langForeign = foreignScripts(lang).filter((name) => !foreignScripts(lv).includes(name));
  bucket.mismatches.push({
    ...rec,
    kind,
    lvValue: lv,
    langValue: lang,
    foreignScript: langForeign.length ? langForeign.join(",") : ""
  });
}

function addStructural(bucket, rec) {
  bucket.mismatches.push({ ...rec, foreignScript: "" });
}

function statusOf(bucket) {
  if (bucket.missingFile) return "MISSING";
  if (bucket.mismatches.length) return "MISMATCH";
  if (bucket.notVerifiable > 0) return "NOT_VERIFIABLE";
  return "MATCH";
}

function rel(tree, lang, fileName) {
  if (lang === "lv") return `${tree === "www" ? "www/" : ""}data/${fileName}`;
  return `${tree === "www" ? "www/" : ""}data/${lang}/${fileName}`;
}

function loadArrayOrNull(relPath) {
  if (!fileExists(relPath)) return null;
  return loadArrayDataset(relPath);
}

function loadWinOrNull(relPath) {
  if (!fileExists(relPath)) return null;
  return loadWindowGlobals(relPath);
}

function wordFields(entry) {
  const fields = {};
  if (!entry || typeof entry !== "object") return fields;
  if ("de" in entry) fields.de = entry.de;
  if ("de_article" in entry) fields.de_article = entry.de_article;
  if ("de_plural" in entry) fields.de_plural = entry.de_plural;
  if ("level" in entry) fields.level = entry.level;
  if ("id" in entry) fields.id = entry.id;
  const study = entry.study;
  if (study && typeof study === "object") {
    if ("id" in study) fields["study.id"] = study.id;
    if ("layout" in study) fields["study.layout"] = study.layout;
    (study.examples || []).forEach((ex, i) => {
      if (ex && typeof ex === "object" && "de" in ex) fields[`study.examples[${i}].de`] = ex.de;
    });
    (study.comparison || []).forEach((row, i) => {
      if (row && typeof row === "object" && "word" in row) fields[`study.comparison[${i}].word`] = row.word;
    });
    (study.words || []).forEach((row, i) => {
      if (row && typeof row === "object" && "de" in row) fields[`study.words[${i}].de`] = row.de;
    });
    (study.comparisonTable || []).forEach((row, i) => {
      if (row && typeof row === "object" && "de" in row) fields[`study.comparisonTable[${i}].de`] = row.de;
    });
  }
  return fields;
}

function cardId(entry, index) {
  if (entry && entry.study && entry.study.id) return String(entry.study.id);
  if (entry && entry.id) return String(entry.id);
  if (entry && entry.de) return `${index}:${entry.de}`;
  return String(index);
}

function pairByKey(lvItems, langItems, keyFn) {
  const queues = new Map();
  langItems.forEach((item, index) => {
    const key = keyFn(item, index);
    if (!queues.has(key)) queues.set(key, []);
    queues.get(key).push(index);
  });
  const used = new Set();
  const pairs = [];
  lvItems.forEach((item, index) => {
    const key = keyFn(item, index);
    const queue = queues.get(key);
    if (queue && queue.length) {
      const langIndex = queue.shift();
      used.add(langIndex);
      pairs.push({ lvIndex: index, langIndex, key, order: langIndex !== index });
    } else {
      pairs.push({ lvIndex: index, langIndex: null, key, missing: true });
    }
  });
  langItems.forEach((item, index) => {
    if (!used.has(index)) pairs.push({ lvIndex: null, langIndex: index, key: keyFn(item, index), extra: true });
  });
  return pairs;
}

function compareFieldMaps(bucket, base, lvFields, langFields) {
  const paths = new Set([...Object.keys(lvFields), ...Object.keys(langFields)]);
  [...paths].sort().forEach((field) => {
    const inLv = Object.prototype.hasOwnProperty.call(lvFields, field);
    const inLang = Object.prototype.hasOwnProperty.call(langFields, field);
    if (inLv && !inLang) {
      addStructural(bucket, { ...base, field, kind: "MISSING", lvValue: lvFields[field], langValue: null });
      return;
    }
    if (!inLv && inLang) {
      addStructural(bucket, { ...base, field, kind: "EXTRA", lvValue: null, langValue: langFields[field] });
      return;
    }
    addCompare(bucket, { ...base, field }, lvFields[field], langFields[field]);
  });
}

function auditWordList(bucket, dataset, lang, tree, lvList, langList) {
  const pairs = pairByKey(lvList, langList, (entry) => `${entry && entry.de}\u0000${entry && entry.level}`);
  pairs.forEach((pair) => {
    if (pair.missing) {
      const entry = lvList[pair.lvIndex];
      addStructural(bucket, {
        language: lang, dataset, tree, id: cardId(entry, pair.lvIndex),
        field: "record", kind: "MISSING", lvValue: pair.key, langValue: null
      });
      return;
    }
    if (pair.extra) {
      const entry = langList[pair.langIndex];
      addStructural(bucket, {
        language: lang, dataset, tree, id: cardId(entry, pair.langIndex),
        field: "record", kind: "EXTRA", lvValue: null, langValue: pair.key
      });
      return;
    }
    const lvEntry = lvList[pair.lvIndex];
    const langEntry = langList[pair.langIndex];
    const id = cardId(lvEntry, pair.lvIndex);
    if (pair.order) {
      addStructural(bucket, {
        language: lang, dataset, tree, id, field: "position", kind: "ORDER",
        lvValue: String(pair.lvIndex), langValue: String(pair.langIndex)
      });
    }
    compareFieldMaps(bucket, { language: lang, dataset, tree, id }, wordFields(lvEntry), wordFields(langEntry));
  });
}

function auditSentences(bucket, lang, tree, lvList, langList) {
  const orderPairs = pairByKey(lvList, langList, (entry) => String(entry && entry.de));
  orderPairs.forEach((pair) => {
    if (pair.missing) {
      addStructural(bucket, {
        language: lang, dataset: "sentences", tree, id: String(pair.lvIndex),
        field: "de", kind: "MISSING", lvValue: pair.key, langValue: null
      });
      return;
    }
    if (pair.extra) {
      addStructural(bucket, {
        language: lang, dataset: "sentences", tree, id: String(pair.langIndex),
        field: "de", kind: "EXTRA", lvValue: null, langValue: pair.key
      });
      return;
    }
    if (pair.order) {
      addStructural(bucket, {
        language: lang, dataset: "sentences", tree, id: String(pair.lvIndex),
        field: "position", kind: "ORDER", lvValue: String(pair.lvIndex), langValue: String(pair.langIndex)
      });
    }
    addCompare(bucket, {
      language: lang, dataset: "sentences", tree, id: String(pair.lvIndex), field: "de"
    }, lvList[pair.lvIndex].de, langList[pair.langIndex].de);
    if ("level" in (lvList[pair.lvIndex] || {}) || "level" in (langList[pair.langIndex] || {})) {
      addCompare(bucket, {
        language: lang, dataset: "sentences", tree, id: String(pair.lvIndex), field: "level"
      }, lvList[pair.lvIndex].level, langList[pair.langIndex].level);
    }
  });
}

function verbKey(entry) {
  return String(entry && entry.infinitiv && entry.infinitiv.de);
}

function verbFields(entry) {
  const fields = {};
  if (!entry || typeof entry !== "object") return fields;
  const keys = new Set([...VERB_FORMS, ...Object.keys(entry)]);
  keys.forEach((key) => {
    if (!Object.prototype.hasOwnProperty.call(entry, key)) return;
    const value = entry[key];
    if (value && typeof value === "object" && "de" in value) fields[`${key}.de`] = value.de;
    else if (key === "hilfsverb" || key === "reflexive" || key === "separable") fields[key] = value;
  });
  return fields;
}

function auditVerbs(bucket, lang, tree, lvList, langList) {
  pairByKey(lvList, langList, verbKey).forEach((pair) => {
    if (pair.missing) {
      addStructural(bucket, {
        language: lang, dataset: "verbs", tree, id: pair.key, field: "record",
        kind: "MISSING", lvValue: pair.key, langValue: null
      });
      return;
    }
    if (pair.extra) {
      addStructural(bucket, {
        language: lang, dataset: "verbs", tree, id: pair.key, field: "record",
        kind: "EXTRA", lvValue: null, langValue: pair.key
      });
      return;
    }
    if (pair.order) {
      addStructural(bucket, {
        language: lang, dataset: "verbs", tree, id: pair.key, field: "position",
        kind: "ORDER", lvValue: String(pair.lvIndex), langValue: String(pair.langIndex)
      });
    }
    compareFieldMaps(
      bucket,
      { language: lang, dataset: "verbs", tree, id: pair.key },
      verbFields(lvList[pair.lvIndex]),
      verbFields(langList[pair.langIndex])
    );
  });
}

function contaminatedDe(value) {
  return isExplanationString(value) || foreignScripts(value).length > 0;
}

function stringDeField(text) {
  const side = deSide(text);
  if (!side.hasDash && isExplanationString(text)) return { check: false };
  const value = side.hasDash ? side.de : String(text);
  if (contaminatedDe(value)) return { unverifiable: true, chars: value.length };
  return { check: true, value };
}

function walkStructuredLesson(bucket, lang, tree, lessonKey, lvLesson, langLesson) {
  const id = (lvLesson && lvLesson.id) || lessonKey;
  if ((lvLesson && lvLesson.id) !== (langLesson && langLesson.id)) {
    addCompare(bucket, {
      language: lang, dataset: "courseLessons", tree, id, field: `${lessonKey}.id`
    }, lvLesson && lvLesson.id, langLesson && langLesson.id);
  } else if (lvLesson && "id" in lvLesson) {
    addCompare(bucket, {
      language: lang, dataset: "courseLessons", tree, id, field: `${lessonKey}.id`
    }, lvLesson.id, langLesson && langLesson.id);
  }
  const lvSections = (lvLesson && lvLesson.sections) || [];
  const langSections = (langLesson && langLesson.sections) || [];
  if (!lvSections.length && !langSections.length) return;
  const count = Math.max(lvSections.length, langSections.length);
  for (let s = 0; s < count; s++) {
    if (!lvSections[s]) {
      addStructural(bucket, {
        language: lang, dataset: "courseLessons", tree, id, field: `${lessonKey}.sections[${s}]`,
        kind: "EXTRA", lvValue: null, langValue: langSections[s] && langSections[s].title
      });
      continue;
    }
    if (!langSections[s]) {
      addStructural(bucket, {
        language: lang, dataset: "courseLessons", tree, id, field: `${lessonKey}.sections[${s}]`,
        kind: "MISSING", lvValue: lvSections[s].title, langValue: null
      });
      continue;
    }
    compareStringItems(bucket, lang, tree, id, `${lessonKey}.sections[${s}].items`, lvSections[s].items, langSections[s].items);
    compareCards(bucket, lang, tree, id, `${lessonKey}.sections[${s}].cards`, lvSections[s].cards, langSections[s].cards);
    compareObjectItems(bucket, lang, tree, id, `${lessonKey}.sections[${s}].items`, lvSections[s].items, langSections[s].items);
  }
}

function compareStringItems(bucket, lang, tree, id, prefix, lvItems, langItems) {
  if (!Array.isArray(lvItems) && !Array.isArray(langItems)) return;
  const lv = Array.isArray(lvItems) ? lvItems : [];
  const langList = Array.isArray(langItems) ? langItems : [];
  const lvStrings = lv.map((item, index) => ({ item, index })).filter((row) => typeof row.item === "string");
  const langStrings = langList.map((item, index) => ({ item, index })).filter((row) => typeof row.item === "string");
  const count = Math.max(lvStrings.length, langStrings.length);
  for (let i = 0; i < count; i++) {
    const lvRow = lvStrings[i];
    const langRow = langStrings[i];
    const field = `${prefix}[${lvRow ? lvRow.index : langRow.index}]`;
    if (!lvRow) {
      const side = stringDeField(langRow.item);
      if (!side.check) continue;
      addStructural(bucket, {
        language: lang, dataset: "courseLessons", tree, id, field, kind: "EXTRA",
        lvValue: null, langValue: side.value
      });
      continue;
    }
    if (!langRow) {
      const side = stringDeField(lvRow.item);
      if (!side.check) continue;
      addStructural(bucket, {
        language: lang, dataset: "courseLessons", tree, id, field, kind: "MISSING",
        lvValue: side.value, langValue: null
      });
      continue;
    }
    const lvSide = stringDeField(lvRow.item);
    if (lvSide.unverifiable) {
      bucket.notVerifiable += 1;
      bucket.notVerifiableChars += lvSide.chars;
      continue;
    }
    if (!lvSide.check) continue;
    const langSide = stringDeField(langRow.item);
    const langValue = langSide.check ? langSide.value : String(langRow.item);
    addCompare(bucket, { language: lang, dataset: "courseLessons", tree, id, field }, lvSide.value, langValue);
  }
}

function compareCards(bucket, lang, tree, id, prefix, lvCards, langCards) {
  if (!Array.isArray(lvCards) && !Array.isArray(langCards)) return;
  const lv = Array.isArray(lvCards) ? lvCards : [];
  const langList = Array.isArray(langCards) ? langCards : [];
  const count = Math.max(lv.length, langList.length);
  for (let i = 0; i < count; i++) {
    if (!lv[i] || !langList[i]) {
      addStructural(bucket, {
        language: lang, dataset: "courseLessons", tree, id, field: `${prefix}[${i}]`,
        kind: lv[i] ? "MISSING" : "EXTRA",
        lvValue: lv[i] ? lv[i].de || lv[i].prompt || null : null,
        langValue: langList[i] ? langList[i].de || langList[i].prompt || null : null
      });
      continue;
    }
    CARD_SCALAR_DE.forEach((field) => {
      const inLv = Object.prototype.hasOwnProperty.call(lv[i], field);
      const inLang = Object.prototype.hasOwnProperty.call(langList[i], field);
      if (!inLv && !inLang) return;
      if (inLv && !inLang) {
        addStructural(bucket, {
          language: lang, dataset: "courseLessons", tree, id, field: `${prefix}[${i}].${field}`,
          kind: "MISSING", lvValue: lv[i][field], langValue: null
        });
        return;
      }
      if (!inLv && inLang) {
        addStructural(bucket, {
          language: lang, dataset: "courseLessons", tree, id, field: `${prefix}[${i}].${field}`,
          kind: "EXTRA", lvValue: null, langValue: langList[i][field]
        });
        return;
      }
      addCompare(bucket, {
        language: lang, dataset: "courseLessons", tree, id, field: `${prefix}[${i}].${field}`
      }, lv[i][field], langList[i][field]);
    });
    compareFormTexts(bucket, lang, tree, id, `${prefix}[${i}].forms`, lv[i].forms, langList[i].forms);
  }
}

function compareFormTexts(bucket, lang, tree, id, prefix, lvForms, langForms) {
  const lv = Array.isArray(lvForms) ? lvForms : null;
  const langList = Array.isArray(langForms) ? langForms : null;
  if (!lv && !langList) return;
  const lvRows = lv || [];
  const langRows = langList || [];
  const count = Math.max(lvRows.length, langRows.length);
  for (let i = 0; i < count; i++) {
    const field = `${prefix}[${i}].text`;
    if (!lvRows[i] || !langRows[i]) {
      addStructural(bucket, {
        language: lang, dataset: "courseLessons", tree, id, field,
        kind: lvRows[i] ? "MISSING" : "EXTRA",
        lvValue: lvRows[i] ? lvRows[i].text : null,
        langValue: langRows[i] ? langRows[i].text : null
      });
      continue;
    }
    if (!("text" in lvRows[i]) && !("text" in langRows[i])) continue;
    addCompare(bucket, {
      language: lang, dataset: "courseLessons", tree, id, field
    }, lvRows[i].text, langRows[i].text);
  }
}

function compareObjectItems(bucket, lang, tree, id, prefix, lvItems, langItems) {
  if (!Array.isArray(lvItems) || !Array.isArray(langItems)) return;
  const count = Math.min(lvItems.length, langItems.length);
  for (let i = 0; i < count; i++) {
    const lvItem = lvItems[i];
    const langItem = langItems[i];
    if (!lvItem || typeof lvItem !== "object" || typeof lvItem === "string") continue;
    if (!langItem || typeof langItem !== "object") continue;
    if (Array.isArray(lvItem.examples) || Array.isArray(langItem.examples)) {
      compareStringItems(
        bucket, lang, tree, id, `${prefix}[${i}].examples`,
        lvItem.examples, langItem.examples
      );
    }
    if (Array.isArray(lvItem.table) || Array.isArray(langItem.table)) {
      compareTable(bucket, lang, tree, id, `${prefix}[${i}].table`, lvItem.table, langItem.table);
    }
  }
}

function compareTable(bucket, lang, tree, id, prefix, lvTable, langTable) {
  const lv = Array.isArray(lvTable) ? lvTable : [];
  const langRows = Array.isArray(langTable) ? langTable : [];
  const rows = Math.max(lv.length, langRows.length);
  for (let r = 0; r < rows; r++) {
    const lvRow = Array.isArray(lv[r]) ? lv[r] : [];
    const langRow = Array.isArray(langRows[r]) ? langRows[r] : [];
    const cols = Math.max(lvRow.length, langRow.length);
    for (let c = 0; c < cols; c++) {
      const lvCell = lvRow[c];
      const langCell = langRow[c];
      const field = `${prefix}[${r}][${c}]`;
      if (lvCell == null && langCell == null) continue;
      if (lvCell == null || langCell == null) {
        const present = lvCell == null ? langCell : lvCell;
        if (typeof present === "string" && isExplanationString(present) && !deSide(present).hasDash) continue;
        addStructural(bucket, {
          language: lang, dataset: "courseLessons", tree, id, field,
          kind: lvCell == null ? "EXTRA" : "MISSING",
          lvValue: lvCell == null ? null : lvCell, langValue: langCell == null ? null : langCell
        });
        continue;
      }
      if (typeof lvCell !== "string" || typeof langCell !== "string") {
        bucket.notVerifiable += 1;
        continue;
      }
      const lvSide = stringDeField(lvCell);
      if (lvSide.unverifiable) {
        bucket.notVerifiable += 1;
        bucket.notVerifiableChars += lvSide.chars;
        continue;
      }
      if (!lvSide.check) continue;
      const langSide = stringDeField(langCell);
      const langValue = langSide.check ? langSide.value : String(langCell);
      addCompare(bucket, { language: lang, dataset: "courseLessons", tree, id, field }, lvSide.value, langValue);
    }
  }
}

function legacyExampleDe(text) {
  const s = String(text);
  const dashAt = s.search(DASH_RE);
  if (dashAt >= 0) {
    const value = s.slice(0, dashAt);
    if (contaminatedDe(value)) return { unverifiable: true, chars: value.length };
    return { check: true, mode: "dash", value };
  }
  const arrowAt = s.indexOf("→");
  if (arrowAt >= 0) {
    if (isExplanationString(s)) return { check: false };
    const value = s.slice(arrowAt + 1);
    if (contaminatedDe(value)) return { unverifiable: true, chars: value.length };
    return { check: true, mode: "arrow", value };
  }
  if (isExplanationString(s)) return { check: false };
  if (contaminatedDe(s)) return { unverifiable: true, chars: s.length };
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

function extractLegacy(html) {
  const text = String(html || "");
  let covered = 0;
  const examples = [...text.matchAll(/<div class="kurss-example">([\s\S]*?)<\/div>/g)].map((match) => {
    covered += match[1].length;
    return match[1];
  });
  const conjugations = [...text.matchAll(/<div class="lesson1-conjugation">([\s\S]*?)<\/div>/g)].map((block) => {
    const strongs = [...block[1].matchAll(/<strong>([\s\S]*?)<\/strong>/g)].map((strong) => {
      covered += strong[1].length;
      return strong[1];
    });
    return strongs;
  });
  return { examples, conjugations, remainder: Math.max(0, text.length - covered) };
}

function auditCourse(bucket, lang, tree, lvWin, langWin) {
  const lvHtml = (lvWin && lvWin.COURSE_LESSON_HTML) || {};
  const langHtml = (langWin && langWin.COURSE_LESSON_HTML) || {};
  const lvData = (lvWin && lvWin.COURSE_LESSON_DATA) || {};
  const langData = (langWin && langWin.COURSE_LESSON_DATA) || {};
  const htmlKeys = [...new Set([...Object.keys(lvHtml), ...Object.keys(langHtml)])];
  htmlKeys.forEach((key) => {
    if (!(key in lvHtml)) {
      addStructural(bucket, {
        language: lang, dataset: "courseLessons", tree, id: key, field: "legacyHtml",
        kind: "EXTRA", lvValue: null, langValue: key
      });
      return;
    }
    if (!(key in langHtml)) {
      addStructural(bucket, {
        language: lang, dataset: "courseLessons", tree, id: key, field: "legacyHtml",
        kind: "MISSING", lvValue: key, langValue: null
      });
      return;
    }
    const lvParts = extractLegacy(lvHtml[key]);
    const langParts = extractLegacy(langHtml[key]);
    if (lvParts.remainder > 0) {
      bucket.notVerifiable += 1;
      bucket.notVerifiableChars += lvParts.remainder;
    }
    const exampleCount = Math.max(lvParts.examples.length, langParts.examples.length);
    for (let i = 0; i < exampleCount; i++) {
      const field = `legacyHtml/kurss-example[${i}]`;
      const lvEx = lvParts.examples[i];
      const langEx = langParts.examples[i];
      if (lvEx == null) {
        addStructural(bucket, {
          language: lang, dataset: "courseLessons", tree, id: key, field,
          kind: "EXTRA", lvValue: null, langValue: langEx
        });
        continue;
      }
      const decision = legacyExampleDe(lvEx);
      if (decision.unverifiable) {
        bucket.notVerifiable += 1;
        bucket.notVerifiableChars += decision.chars;
        continue;
      }
      if (!decision.check) continue;
      if (langEx == null) {
        addStructural(bucket, {
          language: lang, dataset: "courseLessons", tree, id: key, field,
          kind: "MISSING", lvValue: decision.value, langValue: null
        });
        continue;
      }
      addCompare(bucket, {
        language: lang, dataset: "courseLessons", tree, id: key, field
      }, decision.value, legacyExampleLang(langEx, decision.mode));
    }
    const blockCount = Math.max(lvParts.conjugations.length, langParts.conjugations.length);
    for (let b = 0; b < blockCount; b++) {
      const lvStrong = lvParts.conjugations[b] || [];
      const langStrong = langParts.conjugations[b] || [];
      const strongCount = Math.max(lvStrong.length, langStrong.length);
      for (let i = 0; i < strongCount; i++) {
        const field = `legacyHtml/conjugation[${b}]/strong[${i}]`;
        if (lvStrong[i] == null) {
          addStructural(bucket, {
            language: lang, dataset: "courseLessons", tree, id: key, field,
            kind: "EXTRA", lvValue: null, langValue: langStrong[i]
          });
          continue;
        }
        if (langStrong[i] == null) {
          addStructural(bucket, {
            language: lang, dataset: "courseLessons", tree, id: key, field,
            kind: "MISSING", lvValue: lvStrong[i], langValue: null
          });
          continue;
        }
        addCompare(bucket, {
          language: lang, dataset: "courseLessons", tree, id: key, field
        }, lvStrong[i], langStrong[i]);
      }
    }
  });
  const dataKeys = [...new Set([...Object.keys(lvData), ...Object.keys(langData)])];
  dataKeys.forEach((key) => {
    if (!(key in lvData) || !(key in langData)) {
      addStructural(bucket, {
        language: lang, dataset: "courseLessons", tree, id: key, field: "lesson",
        kind: key in lvData ? "MISSING" : "EXTRA",
        lvValue: key in lvData ? key : null,
        langValue: key in langData ? key : null
      });
      return;
    }
    const lvPos = Object.keys(lvData).indexOf(key);
    const langPos = Object.keys(langData).indexOf(key);
    if (lvPos !== langPos) {
      addStructural(bucket, {
        language: lang, dataset: "courseLessons", tree, id: key, field: "lesson.position",
        kind: "ORDER", lvValue: String(lvPos), langValue: String(langPos)
      });
    }
    walkStructuredLesson(bucket, lang, tree, key, lvData[key], langData[key]);
  });
}

function loadLvTraining() {
  const code = fs.readFileSync(path.join(ROOT, "ui.js"), "utf8");
  const decks = {};
  for (let i = 1; i <= 12; i++) {
    const re = new RegExp(`const lesson${i}TrainingCards = (\\[[\\s\\S]*?\\]);`);
    const match = code.match(re);
    if (!match) continue;
    decks[i] = vm.runInNewContext(`(${match[1]})`);
  }
  return decks;
}

function decksFromWindow(win) {
  const decks = {};
  Object.keys(win || {}).forEach((key) => {
    const match = /^lesson(\d+)TrainingCards/.exec(key);
    if (match && Array.isArray(win[key])) decks[Number(match[1])] = win[key];
  });
  return decks;
}

function auditTraining(bucket, lang, tree, lvDecks, langWin) {
  const langDecks = decksFromWindow(langWin);
  const numbers = [...new Set([...Object.keys(lvDecks), ...Object.keys(langDecks)])].map(Number).sort((a, b) => a - b);
  numbers.forEach((num) => {
    const lv = lvDecks[num];
    const langDeck = langDecks[num];
    const id = `lesson${num}`;
    if (!lv) {
      addStructural(bucket, {
        language: lang, dataset: "courseTrainingCards", tree, id, field: "deck",
        kind: "EXTRA", lvValue: null, langValue: id
      });
      return;
    }
    if (!langDeck) {
      addStructural(bucket, {
        language: lang, dataset: "courseTrainingCards", tree, id, field: "deck",
        kind: "MISSING", lvValue: id, langValue: null
      });
      return;
    }
    pairByKey(lv, langDeck, (card) => String(card && card.back)).forEach((pair) => {
      if (pair.missing) {
        addStructural(bucket, {
          language: lang, dataset: "courseTrainingCards", tree, id, field: `cards[${pair.lvIndex}].back`,
          kind: "MISSING", lvValue: pair.key, langValue: null
        });
        return;
      }
      if (pair.extra) {
        addStructural(bucket, {
          language: lang, dataset: "courseTrainingCards", tree, id, field: `cards[${pair.langIndex}].back`,
          kind: "EXTRA", lvValue: null, langValue: pair.key
        });
        return;
      }
      if (pair.order) {
        addStructural(bucket, {
          language: lang, dataset: "courseTrainingCards", tree, id, field: "position",
          kind: "ORDER", lvValue: String(pair.lvIndex), langValue: String(pair.langIndex)
        });
      }
      addCompare(bucket, {
        language: lang, dataset: "courseTrainingCards", tree, id, field: `cards[${pair.lvIndex}].back`
      }, lv[pair.lvIndex].back, langDeck[pair.langIndex].back);
    });
  });
}

function auditNounArticles(bucket, lang, tree, lvObj, langObj) {
  const lvKeys = Object.keys(lvObj || {});
  const langKeys = Object.keys(langObj || {});
  pairByKey(lvKeys, langKeys, (key) => key).forEach((pair) => {
    if (pair.missing) {
      addStructural(bucket, {
        language: lang, dataset: "nounArticles", tree, id: pair.key, field: "key",
        kind: "MISSING", lvValue: pair.key, langValue: null
      });
      return;
    }
    if (pair.extra) {
      addStructural(bucket, {
        language: lang, dataset: "nounArticles", tree, id: pair.key, field: "key",
        kind: "EXTRA", lvValue: null, langValue: pair.key
      });
      return;
    }
    if (pair.order) {
      addStructural(bucket, {
        language: lang, dataset: "nounArticles", tree, id: pair.key, field: "position",
        kind: "ORDER", lvValue: String(pair.lvIndex), langValue: String(pair.langIndex)
      });
    }
    compareFieldMaps(
      bucket,
      { language: lang, dataset: "nounArticles", tree, id: pair.key },
      lvObj[pair.key],
      langObj[pair.key]
    );
  });
}

function auditDialogue(bucket, lang, tree, lvObj, langObj) {
  const lvKeys = Object.keys(lvObj || {});
  const langKeys = Object.keys(langObj || {});
  pairByKey(lvKeys, langKeys, (key) => key).forEach((pair) => {
    if (pair.missing || pair.extra) {
      addStructural(bucket, {
        language: lang, dataset: "dialogueIdMap", tree, id: pair.key, field: "key",
        kind: pair.missing ? "MISSING" : "EXTRA",
        lvValue: pair.missing ? pair.key : null,
        langValue: pair.extra ? pair.key : null
      });
      return;
    }
    if (pair.order) {
      addStructural(bucket, {
        language: lang, dataset: "dialogueIdMap", tree, id: pair.key, field: "position",
        kind: "ORDER", lvValue: String(pair.lvIndex), langValue: String(pair.langIndex)
      });
    }
    addCompare(bucket, {
      language: lang, dataset: "dialogueIdMap", tree, id: pair.key, field: "de"
    }, lvObj[pair.key] && lvObj[pair.key].de, langObj[pair.key] && langObj[pair.key].de);
  });
}

function loadWindowAbsolute(absPath) {
  const code = fs.readFileSync(absPath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function lvAnomalies(levels) {
  const rows = [];
  const byDe = new Map();
  levels.forEach(({ level, list }) => {
    const seen = new Map();
    list.forEach((entry, index) => {
      const de = entry && entry.de;
      if (!de) return;
      if (!byDe.has(de)) byDe.set(de, []);
      byDe.get(de).push({ level, index, article: entry.de_article, plural: entry.de_plural });
      seen.set(de, (seen.get(de) || 0) + 1);
      const nounLike = /^\p{Lu}/u.test(de);
      if (nounLike && (entry.de_article == null || entry.de_article === "")) {
        rows.push({ kind: "EMPTY_ARTICLE", level, index, de, detail: "de_article tukšs lietvārdam līdzīgam ierakstam" });
      }
      if (nounLike && (entry.de_plural == null || entry.de_plural === "")) {
        rows.push({ kind: "EMPTY_PLURAL", level, index, de, detail: "de_plural tukšs lietvārdam līdzīgam ierakstam" });
      }
      if (entry.de_article && !["der", "die", "das"].includes(entry.de_article)) {
        rows.push({ kind: "ARTICLE_OUTSIDE_SET", level, index, de, detail: entry.de_article });
      }
      if (entry.de_plural && !String(entry.de_plural).startsWith("die ")) {
        rows.push({ kind: "PLURAL_WITHOUT_DIE", level, index, de, detail: entry.de_plural });
      }
    });
    seen.forEach((count, de) => {
      if (count > 1) rows.push({ kind: "DUPLICATE_IN_LEVEL", level, index: "", de, detail: `count=${count}` });
    });
  });
  byDe.forEach((hits, de) => {
    const levelsHit = [...new Set(hits.map((hit) => hit.level))];
    if (levelsHit.length > 1) {
      rows.push({ kind: "DUPLICATE_ACROSS_LEVELS", level: levelsHit.join(","), index: "", de, detail: levelsHit.join(",") });
    }
    const articles = [...new Set(hits.map((hit) => hit.article).filter(Boolean))];
    if (articles.length > 1) {
      rows.push({ kind: "SAME_DE_DIFFERENT_ARTICLE", level: levelsHit.join(","), index: "", de, detail: articles.join(" | ") });
    }
  });
  return rows;
}

function auditTree(tree, lang, lvCache, langCache, lvTraining) {
  const out = {};
  DATASETS.forEach((dataset) => {
    const bucket = emptyBucket();
    if (dataset === "courseTrainingCards") {
      const file = rel(tree, lang, "courseTrainingCards.js");
      const win = langCache.training;
      if (!win) {
        bucket.missingFile = true;
        addStructural(bucket, {
          language: lang, dataset, tree, id: file, field: "file", kind: "MISSING",
          lvValue: "ui.js lesson1-6TrainingCards", langValue: null
        });
      } else auditTraining(bucket, lang, tree, lvTraining, win);
      out[dataset] = bucket;
      return;
    }
    const fileName = dataset === "courseLessons" ? "courseLessons.js"
      : dataset === "nounArticles" ? "nounArticles.js"
        : dataset === "dialogueIdMap" ? "dialogueIdMap.js"
          : `${dataset}.js`;
    const lv = lvCache[dataset];
    const langData = langCache[dataset];
    if (langData == null || lv == null) {
      bucket.missingFile = true;
      addStructural(bucket, {
        language: lang, dataset, tree, id: rel(tree, lang, fileName), field: "file",
        kind: "MISSING", lvValue: rel(tree, "lv", fileName), langValue: null
      });
      out[dataset] = bucket;
      return;
    }
    if (["a1", "a2", "b1", "b2", "c1", "c2"].includes(dataset)) auditWordList(bucket, dataset, lang, tree, lv, langData);
    else if (dataset === "sentences") auditSentences(bucket, lang, tree, lv, langData);
    else if (dataset === "verbs") auditVerbs(bucket, lang, tree, lv, langData);
    else if (dataset === "courseLessons") auditCourse(bucket, lang, tree, lv, langData);
    else if (dataset === "nounArticles") auditNounArticles(bucket, lang, tree, lv, langData);
    else if (dataset === "dialogueIdMap") auditDialogue(bucket, lang, tree, lv, langData);
    out[dataset] = bucket;
  });
  return out;
}

function loadLangCache(tree, lang) {
  const cache = {};
  ["a1", "a2", "b1", "b2", "c1", "c2", "sentences", "verbs"].forEach((name) => {
    cache[name] = loadArrayOrNull(rel(tree, lang, `${name}.js`));
  });
  cache.courseLessons = loadWinOrNull(rel(tree, lang, "courseLessons.js"));
  cache.nounArticles = loadWinOrNull(rel(tree, lang, "nounArticles.js"));
  cache.nounArticles = cache.nounArticles && cache.nounArticles.GERMAN_NOUN_ARTICLES;
  cache.dialogueIdMap = loadWinOrNull(rel(tree, lang, "dialogueIdMap.js"));
  cache.dialogueIdMap = cache.dialogueIdMap && cache.dialogueIdMap.DIALOGUE_ID_MAP;
  cache.training = loadWinOrNull(rel(tree, lang, "courseTrainingCards.js"));
  return cache;
}

function loadLvCache(tree) {
  const cache = {};
  ["a1", "a2", "b1", "b2", "c1", "c2", "sentences", "verbs"].forEach((name) => {
    cache[name] = loadArrayOrNull(rel(tree, "lv", `${name}.js`));
  });
  cache.courseLessons = loadWinOrNull(rel(tree, "lv", "courseLessons.js"));
  const nouns = loadWinOrNull(rel(tree, "lv", "nounArticles.js"));
  cache.nounArticles = nouns && nouns.GERMAN_NOUN_ARTICLES;
  const dialogue = loadWinOrNull(rel(tree, "lv", "dialogueIdMap.js"));
  cache.dialogueIdMap = dialogue && dialogue.DIALOGUE_ID_MAP;
  return cache;
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") {
    return Object.keys(value).sort().reduce((acc, key) => {
      acc[key] = stable(value[key]);
      return acc;
    }, {});
  }
  return value;
}

function mdCell(status, checked, mismatches, unverifiable) {
  return `${status} c=${checked} m=${mismatches} u=${unverifiable}`;
}

function renderMarkdown(report) {
  const lines = [];
  lines.push("# DE consistency audit");
  lines.push("");
  lines.push("Šis audits pierāda DE konsekvenci starp valodām, nevis DE pareizību.");
  lines.push("");
  lines.push("## Baseline");
  lines.push("");
  lines.push(`- ORIGIN_MAIN_SHA: \`${report.baseline.originMainSha}\``);
  lines.push(`- BRANCH: \`${report.baseline.branch}\``);
  lines.push(`- DATE: ${report.baseline.date}`);
  lines.push(`- MASTER VERSION: ${report.baseline.masterVersion}`);
  lines.push(`- REGISTRY_TARGET_COUNT: ${report.baseline.registryTargetCount} (expected 31)`);
  lines.push(`- VERDICT: **${report.verdict}**`);
  lines.push("");
  lines.push("## Struktūras piezīmes");
  lines.push("");
  report.structureNotes.forEach((note) => lines.push(`- ${note}`));
  lines.push("");
  lines.push("## Kopsavilkums (data / www / mirror)");
  lines.push("");
  lines.push(`| valoda | ${DATASETS.join(" | ")} |`);
  lines.push(`| --- | ${DATASETS.map(() => "---").join(" | ")} |`);
  report.languages.forEach((lang) => {
    const cells = DATASETS.map((dataset) => {
      const row = report.summary[lang][dataset];
      return `${mdCell(row.data, row.dataChecked, row.dataMismatches, row.dataNotVerifiable)} / ${mdCell(row.www, row.wwwChecked, row.wwwMismatches, row.wwwNotVerifiable)} / ${mdCell(row.mirror, row.mirrorChecked, row.mirrorMismatches, row.mirrorNotVerifiable)}`;
    });
    lines.push(`| ${lang} | ${cells.join(" | ")} |`);
  });
  lines.push("");
  lines.push("## Metrikas");
  lines.push("");
  Object.entries(report.metrics).forEach(([key, value]) => lines.push(`- ${key}: ${value}`));
  lines.push("");
  lines.push("## MISMATCH");
  lines.push("");
  if (!report.mismatches.length) lines.push("Nav.");
  report.mismatches.forEach((row) => {
    lines.push(`- ${row.language} ${row.dataset} ${row.tree} \`${row.id}\` \`${row.field}\` ${row.kind} foreign=${row.foreignScript || "-"}`);
    lines.push(`  - LV_VALUE: ${JSON.stringify(row.lvValue)}`);
    lines.push(`  - LANG_VALUE: ${JSON.stringify(row.langValue)}`);
  });
  lines.push("");
  lines.push("## LV anomālijas (informatīvi, nav labotas)");
  lines.push("");
  lines.push("| kind | level | de | detail |");
  lines.push("| --- | --- | --- | --- |");
  report.lvAnomalies.forEach((row) => {
    lines.push(`| ${row.kind} | ${row.level} | ${String(row.de).replace(/\|/g, "\\|")} | ${String(row.detail).replace(/\|/g, "\\|")} |`);
  });
  lines.push("");
  return `${lines.join("\n")}\n`;
}

function selfTest() {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "de-consistency-"));
  const src = path.join(ROOT, "data/nounArticles.js");
  const copy = path.join(dir, "nounArticles.js");
  const text = fs.readFileSync(src, "utf8").replace('"Apfel"', '"ApfelX"');
  fs.writeFileSync(copy, text);
  const lv = loadWindowGlobals("data/nounArticles.js").GERMAN_NOUN_ARTICLES;
  const mutated = loadWindowAbsolute(copy).GERMAN_NOUN_ARTICLES;
  const bucket = emptyBucket();
  auditNounArticles(bucket, "fixture", "data", lv, mutated);
  const found = bucket.mismatches.some((row) => row.id === "apfel" && row.field === "noun" && row.kind === "TEXT");
  fs.rmSync(dir, { recursive: true, force: true });
  if (!found) {
    console.error("SELF_TEST_FAIL");
    process.exit(1);
  }
  console.log("SELF_TEST_PASS");
}

function main() {
  if (process.argv.includes("--self-test")) {
    selfTest();
    return;
  }
  const codes = loadRegistryCodes();
  const languages = codes.filter((code) => code !== "lv");
  const lvTraining = loadLvTraining();
  const lvCache = { data: loadLvCache("data"), www: loadLvCache("www") };
  const anomalies = lvAnomalies(["a1", "a2", "b1", "b2", "c1", "c2"].map((level) => ({
    level: level.toUpperCase(),
    list: lvCache.data[level] || []
  })));
  const summary = {};
  const mismatches = [];
  languages.forEach((lang) => {
    process.stderr.write(`audit ${lang}\n`);
    summary[lang] = {};
    const dataCache = loadLangCache("data", lang);
    const wwwCache = loadLangCache("www", lang);
    const dataResult = auditTree("data", lang, lvCache.data, dataCache, lvTraining);
    const wwwResult = auditTree("www", lang, lvCache.www, wwwCache, lvTraining);
    const mirrorTraining = decksFromWindow(dataCache.training);
    const mirrorResult = auditTree("mirror", lang, dataCache, wwwCache, mirrorTraining);
    DATASETS.forEach((dataset) => {
      const mirror = mirrorResult[dataset];
      summary[lang][dataset] = { data: dataResult[dataset], www: wwwResult[dataset], mirror };
      [dataResult[dataset], wwwResult[dataset], mirror].forEach((bucket) => {
        bucket.mismatches.forEach((row) => mismatches.push(row));
      });
    });
  });
  mismatches.sort((a, b) => JSON.stringify(stable(a)).localeCompare(JSON.stringify(stable(b))));
  anomalies.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));

  let checked = 0;
  let match = 0;
  let notVerifiable = 0;
  let notVerifiableChars = 0;
  const kindCount = { TEXT: 0, UNICODE_ONLY: 0, MISSING: 0, EXTRA: 0, ORDER: 0 };
  languages.forEach((lang) => {
    DATASETS.forEach((dataset) => {
      ["data", "www"].forEach((tree) => {
        const bucket = summary[lang][dataset][tree];
        checked += bucket.checked;
        match += bucket.match;
        notVerifiable += bucket.notVerifiable;
        notVerifiableChars += bucket.notVerifiableChars;
      });
    });
  });
  mismatches.forEach((row) => {
    if (kindCount[row.kind] != null) kindCount[row.kind] += 1;
  });
  const coverageDenom = checked + notVerifiable;
  const coverage = coverageDenom === 0 ? 0 : Number(((checked / coverageDenom) * 100).toFixed(4));
  let verdict = "PASS";
  if (notVerifiable > 0 || coverage < 100) verdict = "PARTIAL";
  else if (mismatches.length > 0) verdict = "NEEDS OWNER REVIEW";

  const publicSummary = {};
  languages.forEach((lang) => {
    publicSummary[lang] = {};
    DATASETS.forEach((dataset) => {
      const row = summary[lang][dataset];
      publicSummary[lang][dataset] = {
        data: statusOf(row.data),
        www: statusOf(row.www),
        mirror: statusOf(row.mirror),
        dataChecked: row.data.checked,
        wwwChecked: row.www.checked,
        mirrorChecked: row.mirror.checked,
        dataMismatches: row.data.mismatches.length,
        wwwMismatches: row.www.mismatches.length,
        mirrorMismatches: row.mirror.mismatches.length,
        dataNotVerifiable: row.data.notVerifiable,
        wwwNotVerifiable: row.www.notVerifiable,
        mirrorNotVerifiable: row.mirror.notVerifiable,
        notVerifiable: row.data.notVerifiable + row.www.notVerifiable,
        notVerifiableChars: row.data.notVerifiableChars + row.www.notVerifiableChars
      };
    });
  });

  const report = {
    statement: "Šis audits pierāda DE konsekvenci starp valodām, nevis DE pareizību.",
    baseline: {
      originMainSha: git("git rev-parse origin/main"),
      branch: git("git rev-parse --abbrev-ref HEAD"),
      date: new Date().toISOString().slice(0, 10),
      masterVersion: readMasterVersion(),
      registryCodes: codes,
      registryTargetCount: languages.length,
      registryCountMatches31: languages.length === 31
    },
    structureNotes: [
      "A1–C2 DE lauki: de, de_article, de_plural, level, id/study.id, study.layout, examples[].de, comparison[].word, words[].de, comparisonTable[].de.",
      "Tulkojuma lauki (lv, translation, explanation, tip, important, meaning) netiek salīdzināti.",
      "sentences.js: de + level; id lauka nav.",
      "verbs.js: piecu formu de. hilfsverb/reflexive/separable LV paraugā nav.",
      "courseTrainingCards LV etalons ir ui.js lesson1–6TrainingCards, ne data/courseTrainingCards.js. Salīdzina tikai back.",
      "nounArticles.js salīdzināts pilnībā. dialogueIdMap salīdzina de un atslēgu secību; lv lauks ir tulkojums.",
      "Kurss L8–L21: lesson id un atslēgu secība, de/back/prompt/answer/base/ich/er/wir/answer2, forms[].text, svītras kreisā puse. Sadaļām nav id lauka. task/task2/label un heading/text ir skaidrojums.",
      "Kurss legacyHtml: kurss-example un conjugation strong, tāpat kā verify-cs-kurss-de-compliance.js. Atdalītājs ir –/— vai atstarpēs ietverta defise. → bez latviešu diakritikas: DE ir labā puse. Ja LV DE pusē ir latviešu diakritika vai svešs alfabēts, lauks ir NOT_VERIFIABLE. Pārējais HTML ir NOT_VERIFIABLE.",
      "Mirror salīdzina www DE laukus ar data DE laukiem, nevis ar LV.",
      "UNICODE_ONLY: NFC/NFD, NBSP, soft hyphen, zero-width, malu tukšumi. Exact-match paliek primārais.",
      "Registry mērķvalodas ņemtas no languages/registry.js, bez lv."
    ],
    verdict,
    metrics: {
      CHECKED_FIELDS: checked,
      MATCH: match,
      MISMATCHES: mismatches.length,
      TEXT: kindCount.TEXT,
      UNICODE_ONLY: kindCount.UNICODE_ONLY,
      MISSING: kindCount.MISSING,
      EXTRA: kindCount.EXTRA,
      ORDER: kindCount.ORDER,
      NOT_VERIFIABLE: notVerifiable,
      NOT_VERIFIABLE_CHARS: notVerifiableChars,
      COVERAGE: coverage
    },
    languages,
    summary: publicSummary,
    mismatches,
    lvAnomalies: anomalies
  };
  const json = `${JSON.stringify(stable(report), null, 2)}\n`;
  const md = renderMarkdown(report);
  fs.mkdirSync(path.join(ROOT, "reports"), { recursive: true });
  fs.writeFileSync(path.join(ROOT, "reports/de-consistency-audit.json"), json);
  fs.writeFileSync(path.join(ROOT, "reports/de-consistency-audit.md"), md);
  console.log(JSON.stringify({
    verdict,
    languages: languages.length,
    CHECKED_FIELDS: checked,
    MISMATCHES: mismatches.length,
    NOT_VERIFIABLE: notVerifiable,
    COVERAGE: coverage,
    lvAnomalies: anomalies.length
  }));
}

main();
