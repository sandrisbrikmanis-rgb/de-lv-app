#!/usr/bin/env node
/**
 * Collect all DA-localizable Kurss text fields for READ-ONLY audit (lessons, HTML extras,
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
  ...Array.from({ length: 6 }, (_, i) => `lesson${i + 1}TrainingCardsDa`),
  "lesson7ExerciseCardsDa",
];
const DE_ONLY_RE = /^[\s"„"'«»\-–—:;,.!?0-9A-Za-zÄÖÜäöüß]+$/;
const DE_CARD_FIELDS = ["de", "back", "answer", "base", "infinitive", "du", "ihr", "sie", "ich", "er", "wir"];
const NATIVE_CARD_FIELDS = ["lv", "front", "prompt", "description", "task"];
const DA_UI_PATH = "languages/da/ui.js";

/** In-memory repair for known kurssVerbBasicsLesson duplicate-fragment syntax break (READ-ONLY). */
function repairDaCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    '$1",$2'
  );
}

function loadDaCourseWindow(relPath) {
  let code = readFile(relPath);
  if (relPath.includes("da/courseLessons.js")) {
    code = repairDaCourseLessonsSource(code);
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
    daCurrent: record.daCurrent ?? "",
    source: record.source,
  };
  if (record.deCurrent !== undefined && record.deCurrent !== "") {
    row.deCurrent = record.deCurrent;
  }
  if (record.lvMasterDa !== undefined && record.lvMasterDa !== "") {
    row.lvMasterDa = record.lvMasterDa;
  }
  fields.push(row);
}

function collectLessonFields(daData, lvData, daHtml, lvHtml, fields) {
  for (const lessonKey of LESSON_KEYS) {
    const daLesson = daData[lessonKey];
    const lvLesson = lvData[lessonKey];
    if (!daLesson) continue;
    const lessonId = daLesson.id || lessonKey.replace(/^kurssLesson/, "lesson");

    for (const meta of ["title", "subtitle", "intro"]) {
      if (daLesson[meta] == null) continue;
      makeField(fields, {
        lessonId,
        path: `COURSE_LESSON_DATA.${lessonKey}.${meta}`,
        fieldType: meta,
        daCurrent: daLesson[meta],
        lvMasterDa: lvLesson?.[meta] || "",
        source: "lesson",
      });
    }

    if (daLesson.legacyHtml) {
      makeField(fields, {
        lessonId,
        path: `COURSE_LESSON_DATA.${lessonKey}.legacyHtml`,
        fieldType: "legacyHtml",
        daCurrent: daLesson.legacyHtml,
        lvMasterDa: lvLesson?.legacyHtml || lvHtml[lessonKey] || "",
        source: "lesson",
      });
    }

    const daSections = daLesson.sections || [];
    const lvSections = lvLesson?.sections || [];
    for (let si = 0; si < daSections.length; si++) {
      const daSection = daSections[si];
      const lvSection = lvSections[si];
      const secBase = `COURSE_LESSON_DATA.${lessonKey}.sections[${si}]`;

      if (daSection.title != null) {
        makeField(fields, {
          lessonId,
          path: `${secBase}.title`,
          fieldType: "sectionTitle",
          daCurrent: daSection.title,
          lvMasterDa: lvSection?.title || "",
          source: "lesson",
        });
      }

      if (daSection.description != null) {
        makeField(fields, {
          lessonId,
          path: `${secBase}.description`,
          fieldType: "sectionDescription",
          daCurrent: daSection.description,
          lvMasterDa: lvSection?.description || "",
          source: "lesson",
        });
      }

      if (Array.isArray(daSection.items)) {
        daSection.items.forEach((item, ii) => {
          const lvItem = lvSection?.items?.[ii];
          if (typeof item === "string") {
            if (isDeDialogueItem(item, lvItem)) return;
            makeField(fields, {
              lessonId,
              path: `${secBase}.items[${ii}]`,
              fieldType: "sectionItem",
              daCurrent: item,
              deCurrent: pickDeSibling({ de: findDashDe(item) }),
              lvMasterDa: typeof lvItem === "string" ? lvItem : "",
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
                daCurrent: item.heading,
                lvMasterDa: lvItem?.heading || "",
                source: "lesson",
              });
            }
            if (item.text != null) {
              makeField(fields, {
                lessonId,
                path: `${secBase}.items[${ii}].text`,
                fieldType: "grammarText",
                daCurrent: item.text,
                lvMasterDa: lvItem?.text || "",
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
                  daCurrent: ex,
                  deCurrent: findDashDe(ex),
                  lvMasterDa: lvItem?.examples?.[ei] || "",
                  source: "lesson",
                });
              });
            }
          }
        });
      }

      if (Array.isArray(daSection.cards)) {
        daSection.cards.forEach((card, ci) => {
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
      daCurrent: card[key],
      deCurrent: deCurrent || undefined,
      lvMasterDa: lvCard?.[key] || lvCard?.lv || "",
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
          daCurrent: form.task,
          deCurrent: form.text || card.base || "",
          lvMasterDa: lvForm?.task || "",
          source: "lesson",
        });
      }
    });
  }
}

function collectHtmlExtras(daHtml, lvHtml, fields) {
  for (const key of EXTRA_HTML_KEYS) {
    const daVal = daHtml[key];
    if (daVal == null) continue;
    makeField(fields, {
      lessonId: key,
      path: `COURSE_LESSON_HTML.${key}`,
      fieldType: "legacyHtml",
      daCurrent: daVal,
      lvMasterDa: lvHtml[key] || "",
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

function collectTrainingFields(daTraining, lvTraining, fields) {
  for (let n = 1; n <= 6; n++) {
    const daKey = `lesson${n}TrainingCardsDa`;
    const lvKey = `lesson${n}TrainingCards`;
    const daDeck = daTraining[daKey] || [];
    const lvDeck = lvTraining[lvKey] || [];
    daDeck.forEach((card, i) => {
      makeField(fields, {
        lessonId: `lesson${n}`,
        path: `${daKey}[${i}].front`,
        fieldType: "trainingFront",
        daCurrent: card?.front || "",
        deCurrent: card?.back || lvDeck[i]?.back || "",
        lvMasterDa: lvDeck[i]?.front || "",
        source: "training",
      });
    });
  }

  const daEx = daTraining.lesson7ExerciseCardsDa || [];
  const lvEx = lvTraining.lesson7ExerciseCards || [];
  daEx.forEach((card, i) => {
    const lvCard = lvEx[i];
    if (card?.lv != null) {
      makeField(fields, {
        lessonId: "lesson7",
        path: `lesson7ExerciseCardsDa[${i}].lv`,
        fieldType: "trainingLv",
        daCurrent: card.lv,
        deCurrent: card.infinitive || "",
        lvMasterDa: lvCard?.lv || "",
        source: "training",
      });
    } else if (card?.front != null) {
      makeField(fields, {
        lessonId: "lesson7",
        path: `lesson7ExerciseCardsDa[${i}].front`,
        fieldType: "trainingFront",
        daCurrent: card.front,
        deCurrent: card.back || lvCard?.back || "",
        lvMasterDa: lvCard?.front || lvCard?.lv || "",
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

function collectUiFields(daUi, lvUi, fields) {
  const rows = flattenKurssUi(daUi.kurss);
  for (const row of rows) {
    makeField(fields, {
      lessonId: "ui",
      path: `LANGUAGE_UI_STRINGS.${row.path}`,
      fieldType: "uiString",
      daCurrent: row.value,
      lvMasterDa: getByPath(lvUi, row.path) || "",
      source: "ui",
    });
  }
}

function loadSources() {
  const daWin = loadDaCourseWindow("data/da/courseLessons.js");
  const lvWin = loadWindowGlobals("data/courseLessons.js");
  const daTraining = loadWindowGlobals("data/da/courseTrainingCards.js");
  const lvTraining = loadLvTrainingCards();
  const daUi = loadUiStrings(DA_UI_PATH);
  const lvUi = loadUiStrings("languages/lv/ui.js");

  return {
    daData: daWin.COURSE_LESSON_DATA || {},
    lvData: lvWin.COURSE_LESSON_DATA || {},
    daHtml: daWin.COURSE_LESSON_HTML || {},
    lvHtml: lvWin.COURSE_LESSON_HTML || {},
    daTraining,
    lvTraining,
    daUi,
    lvUi,
  };
}

function collectAllDaFields() {
  const src = loadSources();
  const fields = [];

  collectLessonFields(src.daData, src.lvData, src.daHtml, src.lvHtml, fields);
  collectHtmlExtras(src.daHtml, src.lvHtml, fields);
  collectTrainingFields(src.daTraining, src.lvTraining, fields);
  collectUiFields(src.daUi, src.lvUi, fields);

  const bySource = fields.reduce((acc, f) => {
    acc[f.source] = (acc[f.source] || 0) + 1;
    return acc;
  }, {});

  const trainingDecks = TRAINING_DECK_KEYS.reduce((acc, key) => {
    const deck = src.daTraining[key];
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

  function addIssue(severity, lessonId, path, message, daShape, lvShape) {
    pass = false;
    issues.push({ severity, lessonId, path, message, daShape, lvShape });
  }

  for (const lessonKey of LESSON_KEYS) {
    const daLesson = src.daData[lessonKey];
    const lvLesson = src.lvData[lessonKey];
    const lessonId = daLesson?.id || lessonKey;

    if (!daLesson && lvLesson) {
      addIssue("CRITICAL", lessonId, lessonKey, "Missing DA lesson", "missing", "present");
      continue;
    }
    if (daLesson && !lvLesson) {
      addIssue("HIGH", lessonId, lessonKey, "Extra DA lesson not in LV MASTER", "present", "missing");
    }
    if (!daLesson || !lvLesson) continue;

    for (const key of ["title", "subtitle", "intro", "legacyHtml", "sections"]) {
      const daHas = daLesson[key] !== undefined;
      const lvHas = lvLesson[key] !== undefined;
      if (daHas !== lvHas) {
        addIssue(
          "HIGH",
          lessonId,
          `${lessonKey}.${key}`,
          `Field presence mismatch for ${key}`,
          daHas ? "present" : "missing",
          lvHas ? "present" : "missing"
        );
      }
    }

    const daSections = daLesson.sections || [];
    const lvSections = lvLesson.sections || [];
    if (daSections.length !== lvSections.length) {
      addIssue(
        "CRITICAL",
        lessonId,
        `${lessonKey}.sections`,
        `Section count mismatch (${daSections.length} vs ${lvSections.length})`,
        String(daSections.length),
        String(lvSections.length)
      );
    }

    const maxSec = Math.max(daSections.length, lvSections.length);
    for (let si = 0; si < maxSec; si++) {
      const daSection = daSections[si];
      const lvSection = lvSections[si];
      if (!daSection || !lvSection) continue;
      const secPath = `${lessonKey}.sections[${si}]`;

      for (const key of ["title", "description", "items", "cards", "exerciseType", "type"]) {
        const daHas = daSection[key] !== undefined;
        const lvHas = lvSection[key] !== undefined;
        if (daHas !== lvHas) {
          addIssue(
            "MEDIUM",
            lessonId,
            `${secPath}.${key}`,
            `Section field presence mismatch for ${key}`,
            daHas ? "present" : "missing",
            lvHas ? "present" : "missing"
          );
        }
      }

      const daItems = daSection.items || [];
      const lvItems = lvSection.items || [];
      if (daItems.length !== lvItems.length) {
        addIssue(
          "HIGH",
          lessonId,
          `${secPath}.items`,
          `Item count mismatch (${daItems.length} vs ${lvItems.length})`,
          String(daItems.length),
          String(lvItems.length)
        );
      }

      const daCards = daSection.cards || [];
      const lvCards = lvSection.cards || [];
      if (daCards.length !== lvCards.length) {
        addIssue(
          "HIGH",
          lessonId,
          `${secPath}.cards`,
          `Card count mismatch (${daCards.length} vs ${lvCards.length})`,
          String(daCards.length),
          String(lvCards.length)
        );
      }

      for (let ci = 0; ci < Math.min(daCards.length, lvCards.length); ci++) {
        const daCard = daCards[ci];
        const lvCard = lvCards[ci];
        const daSig = shapeSignature(daCard);
        const lvSig = shapeSignature(lvCard);
        if (daSig !== lvSig) {
          addIssue(
            "MEDIUM",
            lessonId,
            `${secPath}.cards[${ci}]`,
            "Card shape mismatch",
            daSig,
            lvSig
          );
        }
      }
    }
  }

  for (const key of EXTRA_HTML_KEYS) {
    const daHas = src.daHtml[key] !== undefined;
    const lvHas = src.lvHtml[key] !== undefined;
    if (daHas !== lvHas) {
      addIssue(
        "HIGH",
        key,
        `COURSE_LESSON_HTML.${key}`,
        "Extra HTML topic presence mismatch",
        daHas ? "present" : "missing",
        lvHas ? "present" : "missing"
      );
    }
  }

  for (const deckKey of TRAINING_DECK_KEYS) {
    const daDeck = src.daTraining[deckKey];
    const lvKey = deckKey === "lesson7ExerciseCardsDa" ? "lesson7ExerciseCards" : deckKey.replace(/Da$/, "");
    const lvDeck = src.lvTraining[lvKey];
    const daLen = Array.isArray(daDeck) ? daDeck.length : 0;
    const lvLen = Array.isArray(lvDeck) ? lvDeck.length : 0;
    if (daLen !== lvLen) {
      addIssue(
        "HIGH",
        deckKey,
        deckKey,
        `Training deck size mismatch (${daLen} vs ${lvLen})`,
        String(daLen),
        String(lvLen)
      );
    }
    if (deckKey === "lesson7ExerciseCardsDa" && Array.isArray(daDeck) && Array.isArray(lvDeck)) {
      for (let i = 0; i < Math.min(daLen, lvLen); i++) {
        const daNative = daDeck[i]?.lv || daDeck[i]?.front || "";
        const lvNative = lvDeck[i]?.lv || lvDeck[i]?.front || "";
        if (!daNative && lvNative) {
          addIssue(
            "HIGH",
            "lesson7",
            `${deckKey}[${i}].lv`,
            "Missing DA native field on exercise card",
            "missing",
            "present"
          );
        }
      }
    }
  }

  const daUiKeys = flattenKurssUi(src.daUi.kurss).map((r) => r.path);
  const lvUiKeys = flattenKurssUi(src.lvUi.kurss).map((r) => r.path);
  const daSet = new Set(daUiKeys);
  const lvSet = new Set(lvUiKeys);
  for (const key of lvUiKeys) {
    if (!daSet.has(key)) {
      addIssue("HIGH", "ui", key, "Missing DA UI kurss key", "missing", "present");
    }
  }
  for (const key of daUiKeys) {
    if (!lvSet.has(key)) {
      addIssue("MEDIUM", "ui", key, "Extra DA UI kurss key", "present", "missing");
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
      uiKeysDa: daUiKeys.length,
      uiKeysLv: lvUiKeys.length,
    },
  };
}

module.exports = {
  LESSON_KEYS,
  EXTRA_HTML_KEYS,
  TRAINING_DECK_KEYS,
  collectAllDaFields,
  compareStructureWithLvMaster,
  loadSources,
};

if (require.main === module) {
  const { fields, stats } = collectAllDaFields();
  const structure = compareStructureWithLvMaster();
  console.log(JSON.stringify({ stats, structure: { pass: structure.pass, issueCount: structure.issueCount, summary: structure.summary } }, null, 2));
  console.log("sample:", fields.slice(0, 2));
  console.log("totalFields:", stats.totalFields);
}
