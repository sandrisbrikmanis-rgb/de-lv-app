#!/usr/bin/env node
/**
 * Collect all ET-localizable Kurss text fields for READ-ONLY audit (lessons, HTML extras,
 * training cards, UI). LV MASTER at data/courseLessons.js is reference for structure only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT, loadWindowGlobals, readFile } = require("./audit-common");

const LESSON_KEYS = Array.from({ length: 21 }, (_, i) => `kurssLesson${i + 1}`);
const EXTRA_HTML_KEYS = [
  "kurssArticlesLesson",
  "kurssPronounsLesson",
  "kurssPronunciationLesson",
  "kurssConsonantsLesson",
  "kurssVerbBasicsLesson",
  "kurssSentenceStructureLesson",
];
const TRAINING_DECK_KEYS = [
  ...Array.from({ length: 6 }, (_, i) => `lesson${i + 1}TrainingCardsEt`),
  "lesson7ExerciseCardsEt",
];
const DE_ONLY_RE = /^[\s"„"'«»\-–—:;,.!?0-9A-Za-zÄÖÜäöüß]+$/;
const DE_CARD_FIELDS = ["de", "back", "answer", "base", "infinitive", "du", "ihr", "sie", "ich", "er", "wir"];
const NATIVE_CARD_FIELDS = ["lv", "front", "prompt", "description", "task"];
const ET_UI_PATH = "languages/et/ui.js";

/** In-memory repair for known kurssVerbBasicsLesson duplicate-fragment syntax break (READ-ONLY). */
function repairEtCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    '$1",$2'
  );
}

function loadEtCourseWindow(relPath) {
  let code = readFile(relPath);
  if (relPath.includes("et/courseLessons.js")) {
    code = repairEtCourseLessonsSource(code);
  }
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function loadUiStrings(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.LANGUAGE_UI_STRINGS || {};
}

function getByPath(obj, dotPath) {
  if (!obj || !dotPath) return undefined;
  return dotPath.split(".").reduce((acc, part) => (acc == null ? undefined : acc[part]), obj);
}

function getAt(root, pathParts) {
  let cur = root;
  for (const part of pathParts) {
    if (cur == null) return undefined;
    const key = /^\d+$/.test(part) ? parseInt(part, 10) : part;
    cur = cur[key];
  }
  return cur;
}

function parseJsonPath(jsonPath) {
  const parts = [];
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(jsonPath)) !== null) {
    parts.push(m[1] !== undefined ? m[1] : m[2]);
  }
  return parts;
}

function lvValueAt(lvRoot, jsonPath) {
  const parts = parseJsonPath(jsonPath);
  const val = getAt(lvRoot, parts);
  if (typeof val === "string") return val;
  return val === undefined || val === null ? "" : undefined;
}

function isDeOnlyString(text) {
  const t = String(text || "").trim();
  if (!t || t.length < 3) return true;
  if (/^(ich|du|er|sie|wir|ihr|der |die |das |ein |eine?n? |Sie |Das |Der |Die |Was |Wen |Wer |Nein|Ja,)/i.test(t)) {
    return true;
  }
  return DE_ONLY_RE.test(t.replace(/<[^>]+>/g, " "));
}

function isDeDialogueItem(daItem, lvItem) {
  const item = String(daItem || "");
  const lv = String(lvItem || "");
  return (
    /^[\s"„"']*[A-Za-zÄÖÜß]/.test(item)
    && item === lv
    && isDeOnlyString(item.replace(/^[\s"„"']+/, "").replace(/[\s"„"']+$/, ""))
  );
}

function pickDeSibling(obj) {
  if (!obj || typeof obj !== "object") return "";
  for (const key of DE_CARD_FIELDS) {
    if (typeof obj[key] === "string" && obj[key].trim()) return obj[key];
  }
  return "";
}

function makeField(fields, record) {
  const row = {
    lessonId: record.lessonId,
    path: record.path,
    fieldType: record.fieldType,
    etCurrent: record.etCurrent ?? "",
    source: record.source,
  };
  if (record.deCurrent !== undefined && record.deCurrent !== "") {
    row.deCurrent = record.deCurrent;
  }
  if (record.lvMasterLv !== undefined && record.lvMasterLv !== "") {
    row.lvMasterLv = record.lvMasterLv;
  }
  fields.push(row);
}

function collectLessonFields(etData, lvData, etHtml, lvHtml, fields) {
  for (const lessonKey of LESSON_KEYS) {
    const etLesson = etData[lessonKey];
    const lvLesson = lvData[lessonKey];
    if (!etLesson) continue;
    const lessonId = etLesson.id || lessonKey.replace(/^kurssLesson/, "lesson");

    for (const meta of ["title", "subtitle", "intro"]) {
      if (etLesson[meta] == null) continue;
      makeField(fields, {
        lessonId,
        path: `COURSE_LESSON_DATA.${lessonKey}.${meta}`,
        fieldType: meta,
        etCurrent: etLesson[meta],
        lvMasterLv: lvLesson?.[meta] || "",
        source: "lesson",
      });
    }

    if (etLesson.legacyHtml) {
      makeField(fields, {
        lessonId,
        path: `COURSE_LESSON_DATA.${lessonKey}.legacyHtml`,
        fieldType: "legacyHtml",
        etCurrent: etLesson.legacyHtml,
        lvMasterLv: lvLesson?.legacyHtml || lvHtml[lessonKey] || "",
        source: "lesson",
      });
    }

    const etSections = etLesson.sections || [];
    const lvSections = lvLesson?.sections || [];
    for (let si = 0; si < etSections.length; si++) {
      const etSection = etSections[si];
      const lvSection = lvSections[si];
      const secBase = `COURSE_LESSON_DATA.${lessonKey}.sections[${si}]`;

      if (etSection.title != null) {
        makeField(fields, {
          lessonId,
          path: `${secBase}.title`,
          fieldType: "sectionTitle",
          etCurrent: etSection.title,
          lvMasterLv: lvSection?.title || "",
          source: "lesson",
        });
      }

      if (etSection.description != null) {
        makeField(fields, {
          lessonId,
          path: `${secBase}.description`,
          fieldType: "sectionDescription",
          etCurrent: etSection.description,
          lvMasterLv: lvSection?.description || "",
          source: "lesson",
        });
      }

      if (Array.isArray(etSection.items)) {
        etSection.items.forEach((item, ii) => {
          const lvItem = lvSection?.items?.[ii];
          if (typeof item === "string") {
            if (isDeDialogueItem(item, lvItem)) return;
            makeField(fields, {
              lessonId,
              path: `${secBase}.items[${ii}]`,
              fieldType: "sectionItem",
              etCurrent: item,
              deCurrent: pickDeSibling({ de: findDashDe(item) }),
              lvMasterLv: typeof lvItem === "string" ? lvItem : "",
              source: "lesson",
            });
            return;
          }
          if (item && typeof item === "object") {
            if (item.heading != null) {
              makeField(fields, {
                lessonId,
                path: `${secBase}.items[${ii}].heading`,
                fieldType: "grammarHeading",
                etCurrent: item.heading,
                lvMasterLv: lvItem?.heading || "",
                source: "lesson",
              });
            }
            if (item.text != null) {
              makeField(fields, {
                lessonId,
                path: `${secBase}.items[${ii}].text`,
                fieldType: "grammarText",
                etCurrent: item.text,
                lvMasterLv: lvItem?.text || "",
                source: "lesson",
              });
            }
            if (Array.isArray(item.examples)) {
              item.examples.forEach((ex, ei) => {
                if (typeof ex !== "string" || isDeOnlyString(ex)) return;
                makeField(fields, {
                  lessonId,
                  path: `${secBase}.items[${ii}].examples[${ei}]`,
                  fieldType: "grammarExamples",
                  etCurrent: ex,
                  deCurrent: findDashDe(ex),
                  lvMasterLv: lvItem?.examples?.[ei] || "",
                  source: "lesson",
                });
              });
            }
          }
        });
      }

      if (Array.isArray(etSection.cards)) {
        etSection.cards.forEach((card, ci) => {
          const lvCard = lvSection?.cards?.[ci];
          const cardBase = `${secBase}.cards[${ci}]`;
          collectCardFields(fields, lessonId, card, lvCard, cardBase);
        });
      }
    }
  }
}

function findDashDe(text) {
  const m = String(text || "").match(/\s*[–—-]\s*/);
  if (!m) return "";
  const idx = String(text).search(/\s*[–—-]\s*/);
  return String(text).slice(0, idx).trim();
}

function collectCardFields(fields, lessonId, card, lvCard, cardBase) {
  if (!card || typeof card !== "object") return;
  const deCurrent = pickDeSibling(card);

  for (const key of NATIVE_CARD_FIELDS) {
    if (card[key] == null || card[key] === "") continue;
    if (key === "prompt" && card.type === "fill") continue;
    if (key === "prompt" && isDeOnlyString(card[key])) continue;
    makeField(fields, {
      lessonId,
      path: `${cardBase}.${key}`,
      fieldType: `card${key.charAt(0).toUpperCase()}${key.slice(1)}`,
      etCurrent: card[key],
      deCurrent: deCurrent || undefined,
      lvMasterLv: lvCard?.[key] || lvCard?.lv || "",
      source: "lesson",
    });
  }

  if (Array.isArray(card.forms)) {
    card.forms.forEach((form, fi) => {
      const lvForm = lvCard?.forms?.[fi];
      if (form.task != null && !isDeOnlyString(form.task)) {
        makeField(fields, {
          lessonId,
          path: `${cardBase}.forms[${fi}].task`,
          fieldType: "cardFormTask",
          etCurrent: form.task,
          deCurrent: form.text || card.base || "",
          lvMasterLv: lvForm?.task || "",
          source: "lesson",
        });
      }
    });
  }
}

function collectHtmlExtras(etHtml, lvHtml, fields) {
  for (const key of EXTRA_HTML_KEYS) {
    const etVal = etHtml[key];
    if (etVal == null) continue;
    makeField(fields, {
      lessonId: key,
      path: `COURSE_LESSON_HTML.${key}`,
      fieldType: "legacyHtml",
      etCurrent: etVal,
      lvMasterLv: lvHtml[key] || "",
      source: "html",
    });
  }
}

function loadLvTrainingCards() {
  const uiPath = path.join(ROOT, "ui.js");
  if (!fs.existsSync(uiPath)) return {};
  const code = fs.readFileSync(uiPath, "utf8");
  const cards = {};
  const re = /const (lesson\d+TrainingCards) = (\[[\s\S]*?\n\];)/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    try {
      cards[m[1]] = eval(m[2]);
    } catch {
      /* skip malformed deck */
    }
  }
  const exMatch = code.match(/const lesson7ExerciseCards = (\[[\s\S]*?\n\];)/);
  if (exMatch) {
    try {
      cards.lesson7ExerciseCards = eval(exMatch[1]);
    } catch {
      /* skip */
    }
  }
  return cards;
}

function collectTrainingFields(etTraining, lvTraining, fields) {
  for (let n = 1; n <= 6; n++) {
    const etKey = `lesson${n}TrainingCardsEt`;
    const lvKey = `lesson${n}TrainingCards`;
    const etDeck = etTraining[etKey] || [];
    const lvDeck = lvTraining[lvKey] || [];
    etDeck.forEach((card, i) => {
      makeField(fields, {
        lessonId: `lesson${n}`,
        path: `${etKey}[${i}].front`,
        fieldType: "trainingFront",
        etCurrent: card?.front || "",
        deCurrent: card?.back || lvDeck[i]?.back || "",
        lvMasterLv: lvDeck[i]?.front || "",
        source: "training",
      });
    });
  }

  const etEx = etTraining.lesson7ExerciseCardsEt || [];
  const lvEx = lvTraining.lesson7ExerciseCards || [];
  etEx.forEach((card, i) => {
    const lvCard = lvEx[i];
    if (card?.lv != null) {
      makeField(fields, {
        lessonId: "lesson7",
        path: `lesson7ExerciseCardsEt[${i}].lv`,
        fieldType: "trainingLv",
        etCurrent: card.lv,
        deCurrent: card.infinitive || "",
        lvMasterLv: lvCard?.lv || "",
        source: "training",
      });
    } else if (card?.front != null) {
      makeField(fields, {
        lessonId: "lesson7",
        path: `lesson7ExerciseCardsEt[${i}].front`,
        fieldType: "trainingFront",
        etCurrent: card.front,
        deCurrent: card.back || lvCard?.back || "",
        lvMasterLv: lvCard?.front || lvCard?.lv || "",
        source: "training",
      });
    }
  });
}

function flattenKurssUi(kurssObj, prefix = "kurss") {
  const rows = [];
  function walk(value, p) {
    if (value == null) return;
    if (typeof value === "string") {
      rows.push({ path: p, value });
      return;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
      for (const [k, v] of Object.entries(value)) {
        walk(v, `${p}.${k}`);
      }
    }
  }
  if (kurssObj) walk(kurssObj, prefix);
  return rows;
}

function collectUiFields(etUi, lvUi, fields) {
  const rows = flattenKurssUi(etUi.kurss);
  for (const row of rows) {
    makeField(fields, {
      lessonId: "ui",
      path: `LANGUAGE_UI_STRINGS.${row.path}`,
      fieldType: "uiString",
      etCurrent: row.value,
      lvMasterLv: getByPath(lvUi, row.path) || "",
      source: "ui",
    });
  }
}

function loadEtTrainingFromUi() {
  const uiPath = path.join(ROOT, "ui.js");
  if (!fs.existsSync(uiPath)) return {};
  const code = fs.readFileSync(uiPath, "utf8");
  const cards = {};
  const re = /const (lesson\d+TrainingCardsEt) = (\[[\s\S]*?\n\];)/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    try {
      cards[m[1]] = eval(m[2]);
    } catch {
      /* skip malformed deck */
    }
  }
  const exMatch = code.match(/const lesson7ExerciseCardsEt = (\[[\s\S]*?\n\];)/);
  if (exMatch) {
    try {
      cards.lesson7ExerciseCardsEt = eval(exMatch[1]);
    } catch {
      /* skip */
    }
  }
  return cards;
}

function loadSources() {
  const etWin = loadEtCourseWindow("data/et/courseLessons.js");
  const lvWin = loadWindowGlobals("data/courseLessons.js");
  const etTraining = loadEtTrainingFromUi();
  const lvTraining = loadLvTrainingCards();
  const etUi = loadUiStrings(ET_UI_PATH);
  const lvUi = loadUiStrings("languages/lv/ui.js");

  return {
    etData: etWin.COURSE_LESSON_DATA || {},
    lvData: lvWin.COURSE_LESSON_DATA || {},
    etHtml: etWin.COURSE_LESSON_HTML || {},
    lvHtml: lvWin.COURSE_LESSON_HTML || {},
    etTraining,
    lvTraining,
    etUi,
    lvUi,
  };
}

function collectAllEtFields() {
  const src = loadSources();
  const fields = [];

  collectLessonFields(src.etData, src.lvData, src.etHtml, src.lvHtml, fields);
  collectHtmlExtras(src.etHtml, src.lvHtml, fields);
  collectTrainingFields(src.etTraining, src.lvTraining, fields);
  collectUiFields(src.etUi, src.lvUi, fields);

  const bySource = fields.reduce((acc, f) => {
    acc[f.source] = (acc[f.source] || 0) + 1;
    return acc;
  }, {});

  const trainingDecks = TRAINING_DECK_KEYS.reduce((acc, key) => {
    const deck = src.etTraining[key];
    acc[key] = Array.isArray(deck) ? deck.length : 0;
    return acc;
  }, {});

  return {
    fields,
    stats: {
      lessons: LESSON_KEYS.length,
      extras: EXTRA_HTML_KEYS.length,
      trainingDecks,
      uiKeys: bySource.ui || 0,
      totalFields: fields.length,
      bySource,
    },
  };
}

function shapeSignature(value) {
  if (value == null) return "null";
  if (typeof value === "string") return "string";
  if (typeof value === "number" || typeof value === "boolean") return typeof value;
  if (Array.isArray(value)) {
    if (!value.length) return "array:0";
    return `array:${value.length}:${shapeSignature(value[0])}`;
  }
  if (typeof value === "object") {
    const keys = Object.keys(value).sort();
    return `object{${keys.join(",")}}`;
  }
  return typeof value;
}

function compareStructureWithLvMaster() {
  const src = loadSources();
  const issues = [];
  let pass = true;

  function addIssue(severity, lessonId, path, message, etShape, lvShape) {
    pass = false;
    issues.push({ severity, lessonId, path, message, etShape, lvShape });
  }

  for (const lessonKey of LESSON_KEYS) {
    const etLesson = src.etData[lessonKey];
    const lvLesson = src.lvData[lessonKey];
    const lessonId = etLesson?.id || lessonKey;

    if (!etLesson && lvLesson) {
      addIssue("CRITICAL", lessonId, lessonKey, "Missing ET lesson", "missing", "present");
      continue;
    }
    if (etLesson && !lvLesson) {
      addIssue("HIGH", lessonId, lessonKey, "Extra ET lesson not in LV MASTER", "present", "missing");
    }
    if (!etLesson || !lvLesson) continue;

    for (const key of ["title", "subtitle", "intro", "legacyHtml", "sections"]) {
      const etHas = etLesson[key] !== undefined;
      const lvHas = lvLesson[key] !== undefined;
      if (etHas !== lvHas) {
        addIssue(
          "HIGH",
          lessonId,
          `${lessonKey}.${key}`,
          `Field presence mismatch for ${key}`,
          etHas ? "present" : "missing",
          lvHas ? "present" : "missing"
        );
      }
    }

    const etSections = etLesson.sections || [];
    const lvSections = lvLesson.sections || [];
    if (etSections.length !== lvSections.length) {
      addIssue(
        "CRITICAL",
        lessonId,
        `${lessonKey}.sections`,
        `Section count mismatch (${etSections.length} vs ${lvSections.length})`,
        String(etSections.length),
        String(lvSections.length)
      );
    }

    const maxSec = Math.max(etSections.length, lvSections.length);
    for (let si = 0; si < maxSec; si++) {
      const etSection = etSections[si];
      const lvSection = lvSections[si];
      if (!etSection || !lvSection) continue;
      const secPath = `${lessonKey}.sections[${si}]`;

      for (const key of ["title", "description", "items", "cards", "exerciseType", "type"]) {
        const etHas = etSection[key] !== undefined;
        const lvHas = lvSection[key] !== undefined;
        if (etHas !== lvHas) {
          addIssue(
            "MEDIUM",
            lessonId,
            `${secPath}.${key}`,
            `Section field presence mismatch for ${key}`,
            etHas ? "present" : "missing",
            lvHas ? "present" : "missing"
          );
        }
      }

      const etItems = etSection.items || [];
      const lvItems = lvSection.items || [];
      if (etItems.length !== lvItems.length) {
        addIssue(
          "HIGH",
          lessonId,
          `${secPath}.items`,
          `Item count mismatch (${etItems.length} vs ${lvItems.length})`,
          String(etItems.length),
          String(lvItems.length)
        );
      }

      const etCards = etSection.cards || [];
      const lvCards = lvSection.cards || [];
      if (etCards.length !== lvCards.length) {
        addIssue(
          "HIGH",
          lessonId,
          `${secPath}.cards`,
          `Card count mismatch (${etCards.length} vs ${lvCards.length})`,
          String(etCards.length),
          String(lvCards.length)
        );
      }

      for (let ci = 0; ci < Math.min(etCards.length, lvCards.length); ci++) {
        const etCard = etCards[ci];
        const lvCard = lvCards[ci];
        const etSig = shapeSignature(etCard);
        const lvSig = shapeSignature(lvCard);
        if (etSig !== lvSig) {
          addIssue(
            "MEDIUM",
            lessonId,
            `${secPath}.cards[${ci}]`,
            "Card shape mismatch",
            etSig,
            lvSig
          );
        }
      }
    }
  }

  for (const key of EXTRA_HTML_KEYS) {
    const etHas = src.etHtml[key] !== undefined;
    const lvHas = src.lvHtml[key] !== undefined;
    if (etHas !== lvHas) {
      addIssue(
        "HIGH",
        key,
        `COURSE_LESSON_HTML.${key}`,
        "Extra HTML topic presence mismatch",
        etHas ? "present" : "missing",
        lvHas ? "present" : "missing"
      );
    }
  }

  for (const deckKey of TRAINING_DECK_KEYS) {
    const etDeck = src.etTraining[deckKey];
    const lvKey = deckKey === "lesson7ExerciseCardsEt" ? "lesson7ExerciseCards" : deckKey.replace(/Et$/, "");
    const lvDeck = src.lvTraining[lvKey];
    const etLen = Array.isArray(etDeck) ? etDeck.length : 0;
    const lvLen = Array.isArray(lvDeck) ? lvDeck.length : 0;
    if (etLen !== lvLen) {
      addIssue(
        "HIGH",
        deckKey,
        deckKey,
        `Training deck size mismatch (${etLen} vs ${lvLen})`,
        String(etLen),
        String(lvLen)
      );
    }
    if (deckKey === "lesson7ExerciseCardsEt" && Array.isArray(etDeck) && Array.isArray(lvDeck)) {
      for (let i = 0; i < Math.min(etLen, lvLen); i++) {
        const etNative = etDeck[i]?.lv || etDeck[i]?.front || "";
        const lvNative = lvDeck[i]?.lv || lvDeck[i]?.front || "";
        if (!etNative && lvNative) {
          addIssue(
            "HIGH",
            "lesson7",
            `${deckKey}[${i}].lv`,
            "Missing ET native field on exercise card",
            "missing",
            "present"
          );
        }
      }
    }
  }

  const etUiKeys = flattenKurssUi(src.etUi.kurss).map((r) => r.path);
  const lvUiKeys = flattenKurssUi(src.lvUi.kurss).map((r) => r.path);
  const etSet = new Set(etUiKeys);
  const lvSet = new Set(lvUiKeys);
  for (const key of lvUiKeys) {
    if (!etSet.has(key)) {
      addIssue("HIGH", "ui", key, "Missing ET UI kurss key", "missing", "present");
    }
  }
  for (const key of etUiKeys) {
    if (!lvSet.has(key)) {
      addIssue("MEDIUM", "ui", key, "Extra ET UI kurss key", "present", "missing");
    }
  }

  return {
    pass,
    issueCount: issues.length,
    issues,
    summary: {
      lessonsChecked: LESSON_KEYS.length,
      extrasChecked: EXTRA_HTML_KEYS.length,
      trainingDecksChecked: TRAINING_DECK_KEYS.length,
      uiKeysEt: etUiKeys.length,
      uiKeysLv: lvUiKeys.length,
    },
  };
}

module.exports = {
  LESSON_KEYS,
  EXTRA_HTML_KEYS,
  TRAINING_DECK_KEYS,
  collectAllEtFields,
  compareStructureWithLvMaster,
  loadSources,
};

if (require.main === module) {
  const { fields, stats } = collectAllEtFields();
  const structure = compareStructureWithLvMaster();
  console.log(JSON.stringify({ stats, structure: { pass: structure.pass, issueCount: structure.issueCount, summary: structure.summary } }, null, 2));
  console.log("sample:", fields.slice(0, 2));
  console.log("totalFields:", stats.totalFields);
}
