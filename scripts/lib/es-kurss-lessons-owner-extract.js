#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");

const LESSON_COUNT = 21;
const LESSON_KEYS = Array.from({ length: LESSON_COUNT }, (_, i) => `kurssLesson${i + 1}`);
const COURSE_LESSONS_FILE = "data/es/courseLessons.js";
const TRAINING_FILE = "data/es/courseTrainingCards.js";
const UI_FILE = "languages/es/ui.js";

const NATIVE_CARD_FIELDS = ["lv", "front", "prompt", "description", "task", "base"];
const DE_CARD_FIELDS = ["de", "back", "answer", "infinitive", "du", "ihr", "sie", "ich", "er", "wir"];
const EXAMPLE_CLASSES = ["kurss-example", "course-example", "curso-example", "curso-ejemplo"];

const SECTION_I18N_MAP = {
  "Gramatika": "kurss.sections.grammar",
  "Gramática": "kurss.sections.grammar",
  "Vingrinājums": "kurss.sections.exercise",
  "Pratimas": "kurss.sections.exercise",
  "Übung / Vingrinājums": "kurss.sections.exerciseCombined",
  "Übung / Pratimas": "kurss.sections.exerciseCombined",
  "Vježbajte": "kurss.sections.exercise",
  "Übung / Vježba": "kurss.sections.exerciseCombined",
  "Exercise": "kurss.sections.exercise",
  "Übung / Exercise": "kurss.sections.exerciseCombined",
  "Øvelse": "kurss.sections.exercise",
  "Übung / Øvelse": "kurss.sections.exerciseCombined",
  "Harjutus": "kurss.sections.exercise",
  "Ejercicio": "kurss.sections.exercise",
  "Ejercicio / Ejercicio": "kurss.sections.exerciseCombined",
  "Pārtulko": "kurss.sections.translate",
  "Išversk": "kurss.sections.translate",
  "Prevedi": "kurss.sections.translate",
  "Translate": "kurss.sections.translate",
  "Oversætte": "kurss.sections.translate",
  "Oversæt": "kurss.sections.translate",
  "Tõlgi": "kurss.sections.translate",
  "Traducir": "kurss.sections.translate",
  "Dialogi / teikumi": "kurss.sections.dialogues",
  "Dialoger / sætninger": "kurss.sections.dialogues",
  "Diálogo / teikumi": "kurss.sections.dialogues",
  "Diálogo / frases": "kurss.sections.dialogues",
  "Ord": "kurss.sections.words",
  "Palabras": "kurss.sections.words",
  "Izruna": "kurss.pronunciation",
  "Izruná": "kurss.pronunciation",
  "Pronunciación": "kurss.pronunciation",
  "Tekst/læsning": "kurss.sections.reading",
  "Texto / Lectura": "kurss.sections.reading",
  "Navne": "kurss.sections.names",
  "Nombres": "kurss.sections.names",
  "Verbos en presente": null,
};

function loadWindow(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function loadUiStrings() {
  const code = fs.readFileSync(path.join(ROOT, UI_FILE), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.LANGUAGE_UI_STRINGS || {};
}

function getByPath(obj, dotPath) {
  if (!obj || !dotPath) return undefined;
  return dotPath.split(".").reduce((acc, part) => (acc == null ? undefined : acc[part]), obj);
}

function decodeHtmlText(html) {
  return String(html || "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<li[^>]*>/gi, "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n[ \t]+/g, "\n")
    .trim();
}

function pickDeSibling(obj) {
  if (!obj || typeof obj !== "object") return "";
  for (const key of DE_CARD_FIELDS) {
    if (typeof obj[key] === "string" && obj[key].trim()) return obj[key];
  }
  return "";
}

function extractDeFromMixed(text) {
  const parts = String(text || "").split(/\s*[—–-]\s*/);
  if (parts.length > 1) return parts[0].trim();
  const m = String(text || "").match(/[„"“]([^„"“]+)[„"“]/);
  if (m) return m[1].trim();
  if (/^[A-Za-zÄÖÜß]/.test(String(text || "").trim())) return String(text).trim();
  return "";
}

function makeTarget(lessonNumber, record) {
  return {
    lessonNumber,
    file: record.file,
    field: record.field,
    path: record.path,
    category: record.category || "content",
    current: record.current ?? "",
    deContext: record.deContext ?? "",
    structureContext: record.structureContext ?? "",
    new: null,
    status: "PĀRSKATĪT",
  };
}

function pushTarget(targets, lessonNumber, record) {
  targets.push(makeTarget(lessonNumber, record));
}

function resolveSectionDisplayTitle(rawTitle, ui) {
  const key = SECTION_I18N_MAP[rawTitle];
  if (!key) return rawTitle;
  return getByPath(ui, key) || rawTitle;
}

function collectUiLessonTargets(lessonNumber, ui, targets) {
  const n = String(lessonNumber);
  const titlePath = `kurss.lessonItems.${n}.title`;
  const descPath = `kurss.lessonItems.${n}.menuDesc`;
  const title = getByPath(ui, titlePath);
  const menuDesc = getByPath(ui, descPath);
  if (title) {
    pushTarget(targets, lessonNumber, {
      file: UI_FILE,
      field: `LANGUAGE_UI_STRINGS.${titlePath}`,
      path: `${titlePath} (lesson header / menu)`,
      category: "uiTitle",
      current: title,
      structureContext: `Lección ${lessonNumber} header title`,
    });
  }
  if (menuDesc) {
    pushTarget(targets, lessonNumber, {
      file: UI_FILE,
      field: `LANGUAGE_UI_STRINGS.${descPath}`,
      path: `${descPath} (lesson header subtitle / menu)`,
      category: "uiMenuDesc",
      current: menuDesc,
      structureContext: `Lección ${lessonNumber} header subtitle`,
    });
  }
}

function collectUiHintTargets(lessonNumber, lesson, ui, targets) {
  const sections = lesson?.sections || [];
  const used = new Set();
  for (const section of sections) {
    const rawTitle = section?.title || "";
    const i18nKey = SECTION_I18N_MAP[rawTitle];
    if (i18nKey && !used.has(i18nKey)) {
      used.add(i18nKey);
      const display = getByPath(ui, i18nKey);
      if (display) {
        pushTarget(targets, lessonNumber, {
          file: UI_FILE,
          field: `LANGUAGE_UI_STRINGS.${i18nKey}`,
          path: `${i18nKey} (section title display)`,
          category: "uiSectionTitle",
          current: display,
          structureContext: `Section raw title: ${rawTitle}`,
        });
      }
    }
    if (Array.isArray(section.cards) && section.cards.length) {
      const isTranslate = /traducir|pārtulko|išversk|translate|oversæt|tõlgi/i.test(rawTitle);
      const isExercise = /ejercicio|vingrinājums|pratimas|exercise|übung|harjutus|øvelse/i.test(rawTitle);
      if (isTranslate && !used.has("kurss.hints.tapToRevealGerman")) {
        used.add("kurss.hints.tapToRevealGerman");
        pushTarget(targets, lessonNumber, {
          file: UI_FILE,
          field: "LANGUAGE_UI_STRINGS.kurss.hints.tapToRevealGerman",
          path: "kurss.hints.tapToRevealGerman",
          category: "uiHint",
          current: getByPath(ui, "kurss.hints.tapToRevealGerman") || "",
          structureContext: "Translate flashcard hint",
        });
      }
      if (isExercise && !used.has("kurss.hints.tapToContinue")) {
        used.add("kurss.hints.tapToContinue");
        pushTarget(targets, lessonNumber, {
          file: UI_FILE,
          field: "LANGUAGE_UI_STRINGS.kurss.hints.tapToContinue",
          path: "kurss.hints.tapToContinue",
          category: "uiHint",
          current: getByPath(ui, "kurss.hints.tapToContinue") || "",
          structureContext: "Exercise flashcard hint",
        });
      }
      if (section.description && !used.has(`sectionDesc:${section.description}`)) {
        used.add(`sectionDesc:${section.description}`);
        const si = sections.indexOf(section);
        pushTarget(targets, lessonNumber, {
          file: COURSE_LESSONS_FILE,
          field: `COURSE_LESSON_DATA.kurssLesson${lessonNumber}.sections[${si}].description`,
          path: `COURSE_LESSON_DATA.kurssLesson${lessonNumber}.sections[${si}].description`,
          category: "sectionDescription",
          current: section.description,
          structureContext: `Section: ${rawTitle}`,
        });
      }
    }
  }
  if (lessonNumber === 9) {
    const tapNext = getByPath(ui, "kurss.hints.tapNextStep");
    if (tapNext) {
      pushTarget(targets, lessonNumber, {
        file: UI_FILE,
        field: "LANGUAGE_UI_STRINGS.kurss.hints.tapNextStep",
        path: "kurss.hints.tapNextStep",
        category: "uiHint",
        current: tapNext,
        structureContext: "Lesson 9 multi-step exercise hint",
      });
    }
  }
  if (lessonNumber <= 7) {
    const progress = getByPath(ui, "kurss.lessonProgress");
    if (progress) {
      pushTarget(targets, lessonNumber, {
        file: UI_FILE,
        field: "LANGUAGE_UI_STRINGS.kurss.lessonProgress",
        path: "kurss.lessonProgress",
        category: "uiProgress",
        current: progress,
        structureContext: "Translate progress template",
      });
    }
    if (lessonNumber === 7) {
      const exProgress = getByPath(ui, "kurss.exerciseProgress");
      if (exProgress) {
        pushTarget(targets, lessonNumber, {
          file: UI_FILE,
          field: "LANGUAGE_UI_STRINGS.kurss.exerciseProgress",
          path: "kurss.exerciseProgress",
          category: "uiProgress",
          current: exProgress,
          structureContext: "Exercise progress template",
        });
      }
    }
  }
  if (lessonNumber >= 8) {
    for (const [metaKey, metaVal] of Object.entries(ui?.kurss?.exerciseMeta || {})) {
      pushTarget(targets, lessonNumber, {
        file: UI_FILE,
        field: `LANGUAGE_UI_STRINGS.kurss.exerciseMeta.${metaKey}`,
        path: `kurss.exerciseMeta.${metaKey}`,
        category: "uiExerciseMeta",
        current: metaVal,
        structureContext: "Exercise UI label (shown when relevant)",
      });
    }
  }
}

function collectTrainingTargets(lessonNumber, training, targets) {
  if (lessonNumber <= 6) {
    const deckKey = `lesson${lessonNumber}TrainingCardsEs`;
    const deck = training[deckKey] || [];
    deck.forEach((card, i) => {
      if (card?.front != null && card.front !== "") {
        pushTarget(targets, lessonNumber, {
          file: TRAINING_FILE,
          field: `${deckKey}[${i}].front`,
          path: `${deckKey}[${i}].front`,
          category: "trainingTranslateFront",
          current: card.front,
          deContext: card.back || "",
          structureContext: `Lección ${lessonNumber} translate card ${i + 1}/${deck.length}`,
        });
      }
    });
    return;
  }
  if (lessonNumber === 7) {
    const deck = training.lesson7ExerciseCardsEs || [];
    deck.forEach((card, i) => {
      if (card?.lv != null && card.lv !== "") {
        pushTarget(targets, lessonNumber, {
          file: TRAINING_FILE,
          field: `lesson7ExerciseCardsEs[${i}].lv`,
          path: `lesson7ExerciseCardsEs[${i}].lv`,
          category: "trainingExercisePrompt",
          current: card.lv,
          deContext: card.infinitive || "",
          structureContext: `Lección 7 imperative exercise ${i + 1}/${deck.length}`,
        });
      }
      for (const person of ["du", "ihr", "sie"]) {
        if (card?.[person]) {
          pushTarget(targets, lessonNumber, {
            file: TRAINING_FILE,
            field: `lesson7ExerciseCardsEs[${i}].${person}`,
            path: `lesson7ExerciseCardsEs[${i}].${person}`,
            category: "trainingExerciseForm",
            current: card[person],
            deContext: card.infinitive || "",
            structureContext: `Lección 7 imperative ${person} form, card ${i + 1}`,
          });
        }
      }
    });
  }
}

function collectCardFields(targets, lessonNumber, card, cardBase, sectionTitle, sectionIndex, cardIndex) {
  const deCurrent = pickDeSibling(card);
  const secCtx = `Section[${sectionIndex}] ${sectionTitle} / card[${cardIndex}]`;

  if (card.type === "llenar" || card.type === "fill" || (card.prompt && card.answer && !card.lv)) {
    if (card.prompt) {
      pushTarget(targets, lessonNumber, {
        file: COURSE_LESSONS_FILE,
        field: `${cardBase}.prompt`,
        path: `${cardBase}.prompt`,
        category: "exerciseFillPrompt",
        current: card.prompt,
        deContext: card.answer || "",
        structureContext: secCtx,
      });
    }
    return;
  }

  if (card.base && Array.isArray(card.forms)) {
    pushTarget(targets, lessonNumber, {
      file: COURSE_LESSONS_FILE,
      field: `${cardBase}.base`,
      path: `${cardBase}.base`,
      category: "exerciseMultiBase",
      current: card.base,
      deContext: card.base,
      structureContext: secCtx,
    });
    card.forms.forEach((form, fi) => {
      if (form.task) {
        pushTarget(targets, lessonNumber, {
          file: COURSE_LESSONS_FILE,
          field: `${cardBase}.forms[${fi}].task`,
          path: `${cardBase}.forms[${fi}].task`,
          category: "exerciseFormTask",
          current: form.task,
          deContext: form.text || card.base || "",
          structureContext: secCtx,
        });
      }
    });
    return;
  }

  if (card.ich && card.er && card.wir) {
    for (const person of ["ich", "er", "wir", "du", "ihr", "sie"]) {
      if (card[person]) {
        pushTarget(targets, lessonNumber, {
          file: COURSE_LESSONS_FILE,
          field: `${cardBase}.${person}`,
          path: `${cardBase}.${person}`,
          category: "exerciseConjugation",
          current: card[person],
          deContext: card[person],
          structureContext: `${secCtx} (${person})`,
        });
      }
    }
    return;
  }

  for (const key of NATIVE_CARD_FIELDS) {
    if (card[key] == null || card[key] === "") continue;
    if (key === "prompt" && deCurrent && /^[A-Za-zÄÖÜß]/.test(card[key])) continue;
    pushTarget(targets, lessonNumber, {
      file: COURSE_LESSONS_FILE,
      field: `${cardBase}.${key}`,
      path: `${cardBase}.${key}`,
      category: key === "task" ? "exerciseTask" : "translateCard",
      current: card[key],
      deContext: deCurrent || "",
      structureContext: secCtx,
    });
  }
}

function collectStructuredItem(targets, lessonNumber, item, itemPath, sectionTitle, sectionIndex, itemIndex) {
  const secCtx = `Section[${sectionIndex}] ${sectionTitle} / items[${itemIndex}]`;
  if (typeof item === "string") {
    pushTarget(targets, lessonNumber, {
      file: COURSE_LESSONS_FILE,
      field: itemPath,
      path: itemPath,
      category: "sectionItem",
      current: item,
      deContext: extractDeFromMixed(item),
      structureContext: secCtx,
    });
    return;
  }
  if (!item || typeof item !== "object") return;
  if (item.heading) {
    pushTarget(targets, lessonNumber, {
      file: COURSE_LESSONS_FILE,
      field: `${itemPath}.heading`,
      path: `${itemPath}.heading`,
      category: "grammarHeading",
      current: item.heading,
      structureContext: secCtx,
    });
  }
  if (item.text) {
    pushTarget(targets, lessonNumber, {
      file: COURSE_LESSONS_FILE,
      field: `${itemPath}.text`,
      path: `${itemPath}.text`,
      category: "grammarText",
      current: item.text,
      structureContext: secCtx,
    });
  }
  if (Array.isArray(item.examples)) {
    item.examples.forEach((ex, ei) => {
      pushTarget(targets, lessonNumber, {
        file: COURSE_LESSONS_FILE,
        field: `${itemPath}.examples[${ei}]`,
        path: `${itemPath}.examples[${ei}]`,
        category: "grammarExample",
        current: ex,
        deContext: extractDeFromMixed(ex),
        structureContext: secCtx,
      });
    });
  }
  if (Array.isArray(item.table) || Array.isArray(item.rows)) {
    const rows = item.table || item.rows;
    rows.forEach((row, ri) => {
      const cells = Array.isArray(row) ? row : [row];
      cells.forEach((cell, ci) => {
        pushTarget(targets, lessonNumber, {
          file: COURSE_LESSONS_FILE,
          field: `${itemPath}.${item.table ? "table" : "rows"}[${ri}][${ci}]`,
          path: `${itemPath}.${item.table ? "table" : "rows"}[${ri}][${ci}]`,
          category: "grammarTableCell",
          current: cell,
          deContext: extractDeFromMixed(cell),
          structureContext: secCtx,
        });
      });
    });
  }
}

function collectStructuredLessonTargets(lessonNumber, lesson, lessonKey, ui, targets) {
  if (!lesson) return;
  if (lesson.intro) {
    pushTarget(targets, lessonNumber, {
      file: COURSE_LESSONS_FILE,
      field: `COURSE_LESSON_DATA.${lessonKey}.intro`,
      path: `COURSE_LESSON_DATA.${lessonKey}.intro`,
      category: "intro",
      current: lesson.intro,
      structureContext: `Lección ${lessonNumber} intro paragraph`,
    });
  }
  const sections = lesson.sections || [];
  sections.forEach((section, si) => {
    const secBase = `COURSE_LESSON_DATA.${lessonKey}.sections[${si}]`;
    const rawTitle = section.title || "";
    const displayTitle = resolveSectionDisplayTitle(rawTitle, ui);
    if (rawTitle && !SECTION_I18N_MAP[rawTitle]) {
      pushTarget(targets, lessonNumber, {
        file: COURSE_LESSONS_FILE,
        field: `${secBase}.title`,
        path: `${secBase}.title`,
        category: "sectionTitle",
        current: rawTitle,
        structureContext: `Accordion section ${si + 1}`,
      });
    } else if (rawTitle && displayTitle && displayTitle !== rawTitle) {
      const i18nKey = SECTION_I18N_MAP[rawTitle];
      pushTarget(targets, lessonNumber, {
        file: UI_FILE,
        field: `LANGUAGE_UI_STRINGS.${i18nKey}`,
        path: `${secBase}.title → ${i18nKey}`,
        category: "sectionTitle",
        current: displayTitle,
        structureContext: `Accordion section ${si + 1}; raw: ${rawTitle}`,
      });
    }
    if (section.description) {
      pushTarget(targets, lessonNumber, {
        file: COURSE_LESSONS_FILE,
        field: `${secBase}.description`,
        path: `${secBase}.description`,
        category: "sectionDescription",
        current: section.description,
        structureContext: `Section: ${displayTitle || rawTitle}`,
      });
    }
    if (Array.isArray(section.items)) {
      section.items.forEach((item, ii) => {
        collectStructuredItem(
          targets,
          lessonNumber,
          item,
          `${secBase}.items[${ii}]`,
          displayTitle || rawTitle,
          si,
          ii,
        );
      });
    }
    if (Array.isArray(section.cards)) {
      section.cards.forEach((card, ci) => {
        collectCardFields(
          targets,
          lessonNumber,
          card,
          `${secBase}.cards[${ci}]`,
          displayTitle || rawTitle,
          si,
          ci,
        );
      });
    }
  });
}

function extractLegacyHtmlTargets(lessonNumber, lessonKey, html, ui, targets) {
  if (!html) return;
  const baseField = `COURSE_LESSON_DATA.${lessonKey}.legacyHtml`;
  const accordions = [...String(html).matchAll(/<details class="lesson1-accordion"[^>]*>([\s\S]*?)<\/details>/gi)];
  accordions.forEach((accMatch, ai) => {
    const accHtml = accMatch[1];
    const titleMatch = accMatch[0].match(/<summary>[\s\S]*?<span[^>]*>\d+\.<\/span>\s*<span>([^<]*)<\/span>/i);
    const accTitle = titleMatch ? decodeHtmlText(titleMatch[1]) : `accordion[${ai}]`;
    const accCtx = `${baseField} → accordion[${ai}]:${accTitle}`;

    if (/traducir|pārtulko|išversk|translate|oversæt|tõlgi/i.test(accTitle)) return;
    if (/ejercicio|vingrinājums|pratimas|exercise|übung|harjutus|øvelse/i.test(accTitle)) return;

    const i18nKey = SECTION_I18N_MAP[accTitle];
    if (i18nKey) {
      const display = getByPath(ui, i18nKey);
      if (display) {
        pushTarget(targets, lessonNumber, {
          file: UI_FILE,
          field: `LANGUAGE_UI_STRINGS.${i18nKey}`,
          path: `${accCtx} (display title)`,
          category: "sectionTitle",
          current: display,
          structureContext: `Legacy accordion; raw: ${accTitle}`,
        });
      }
    } else if (accTitle) {
      pushTarget(targets, lessonNumber, {
        file: COURSE_LESSONS_FILE,
        field: baseField,
        path: `${accCtx} (summary title)`,
        category: "sectionTitle",
        current: accTitle,
        structureContext: "Legacy accordion summary",
      });
    }

    const infoBlocks = [...accHtml.matchAll(/<div class="lesson1-info[^"]*">([\s\S]*?)<\/div>/gi)];
    infoBlocks.forEach((m, ii) => {
      const text = decodeHtmlText(m[1]);
      if (!text) return;
      pushTarget(targets, lessonNumber, {
        file: COURSE_LESSONS_FILE,
        field: baseField,
        path: `${accCtx} → lesson1-info[${ii}]`,
        category: "info",
        current: text,
        structureContext: accTitle,
      });
    });

    const verbCards = [...accHtml.matchAll(/<article class="lesson1-verb-card">([\s\S]*?)<\/article>/gi)];
    verbCards.forEach((m, vi) => {
      const cardHtml = m[1];
      const h4 = cardHtml.match(/<h4[^>]*>([\s\S]*?)<\/h4>/i);
      if (h4) {
        pushTarget(targets, lessonNumber, {
          file: COURSE_LESSONS_FILE,
          field: baseField,
          path: `${accCtx} → verbCard[${vi}].title`,
          category: "verbCardTitle",
          current: decodeHtmlText(h4[1]),
          deContext: extractDeFromMixed(decodeHtmlText(h4[1])),
          structureContext: accTitle,
        });
      }
      const spans = [...cardHtml.matchAll(/<span>([^<]*)<\/span>/gi)].map((s) => s[1].trim()).filter(Boolean);
      spans.forEach((spanText, si) => {
        if (/^(ich|du|er|sie|wir|ihr|sie \/ Sie|er \/ sie)$/i.test(spanText)) return;
        pushTarget(targets, lessonNumber, {
          file: COURSE_LESSONS_FILE,
          field: baseField,
          path: `${accCtx} → verbCard[${vi}].span[${si}]`,
          category: "verbCardGloss",
          current: spanText,
          structureContext: `${accTitle} / verb card ${vi + 1}`,
        });
      });
    });

    for (const cls of EXAMPLE_CLASSES) {
      const re = new RegExp(`<div class="${cls}"[^>]*>([\\s\\S]*?)<\\/div>`, "gi");
      let exMatch;
      let ei = 0;
      while ((exMatch = re.exec(accHtml)) !== null) {
        const text = decodeHtmlText(exMatch[1]);
        if (!text) continue;
        pushTarget(targets, lessonNumber, {
          file: COURSE_LESSONS_FILE,
          field: baseField,
          path: `${accCtx} → ${cls}[${ei}]`,
          category: "example",
          current: text,
          deContext: extractDeFromMixed(text),
          structureContext: accTitle,
        });
        ei++;
      }
    }

    const grammarNotes = [...accHtml.matchAll(/<div class="lesson1-grammar-note">([\s\S]*?)<\/div>/gi)];
    grammarNotes.forEach((m, gi) => {
      const text = decodeHtmlText(m[1]);
      if (!text) return;
      pushTarget(targets, lessonNumber, {
        file: COURSE_LESSONS_FILE,
        field: baseField,
        path: `${accCtx} → grammar-note[${gi}]`,
        category: "grammarNote",
        current: text,
        structureContext: accTitle,
      });
    });

    const grammarHeaders = [...accHtml.matchAll(/<h[45][^>]*class="lesson1-grammar-header"[^>]*>([\s\S]*?)<\/h[45]>/gi)];
    grammarHeaders.forEach((m, gi) => {
      const text = decodeHtmlText(m[1]);
      if (!text) return;
      pushTarget(targets, lessonNumber, {
        file: COURSE_LESSONS_FILE,
        field: baseField,
        path: `${accCtx} → grammar-header[${gi}]`,
        category: "grammarHeader",
        current: text,
        structureContext: accTitle,
      });
    });

    const subtitles = [...accHtml.matchAll(/<h5 class="lesson2-subtitle">([\s\S]*?)<\/h5>/gi)];
    subtitles.forEach((m, gi) => {
      const text = decodeHtmlText(m[1]);
      if (!text) return;
      pushTarget(targets, lessonNumber, {
        file: COURSE_LESSONS_FILE,
        field: baseField,
        path: `${accCtx} → subtitle[${gi}]`,
        category: "grammarSubtitle",
        current: text,
        deContext: text,
        structureContext: accTitle,
      });
    });

    const endingInfo = [...accHtml.matchAll(/<div class="lesson1-ending-info-body">([\s\S]*?)<\/div>/gi)];
    endingInfo.forEach((m, gi) => {
      const text = decodeHtmlText(m[1]);
      if (!text) return;
      pushTarget(targets, lessonNumber, {
        file: COURSE_LESSONS_FILE,
        field: baseField,
        path: `${accCtx} → ending-info[${gi}]`,
        category: "grammarInfo",
        current: text,
        structureContext: accTitle,
      });
    });

    const plainHeaders = [...accHtml.matchAll(/<h4(?![^>]*lesson1-grammar-header)[^>]*>([\s\S]*?)<\/h4>/gi)];
    plainHeaders.forEach((m, gi) => {
      const text = decodeHtmlText(m[1]);
      if (!text || /lesson1-verb-icon/.test(m[1])) return;
      pushTarget(targets, lessonNumber, {
        file: COURSE_LESSONS_FILE,
        field: baseField,
        path: `${accCtx} → h4[${gi}]`,
        category: "heading",
        current: text,
        structureContext: accTitle,
      });
    });

    const paragraphs = [...accHtml.matchAll(/<p(?![^>]*lesson1-training-hint)[^>]*>([\s\S]*?)<\/p>/gi)];
    paragraphs.forEach((m, pi) => {
      const text = decodeHtmlText(m[1]);
      if (!text) return;
      pushTarget(targets, lessonNumber, {
        file: COURSE_LESSONS_FILE,
        field: baseField,
        path: `${accCtx} → p[${pi}]`,
        category: "paragraph",
        current: text,
        structureContext: accTitle,
      });
    });
  });
}

function collectLegacyUiHints(lessonNumber, html, ui, targets) {
  const hints = [...String(html || "").matchAll(/<p class="lesson1-training-hint">([\s\S]*?)<\/p>/gi)];
  hints.forEach((m, i) => {
    const raw = decodeHtmlText(m[1]);
    if (!raw) return;
    const uiHint = getByPath(ui, "kurss.hints.tapToRevealGerman");
    const uiContinue = getByPath(ui, "kurss.hints.tapToContinue");
    const resolved = /continu|siguiente|nākamo|järgmine/i.test(raw) ? uiContinue : uiHint;
    pushTarget(targets, lessonNumber, {
      file: resolved === uiContinue ? UI_FILE : UI_FILE,
      field: resolved === uiContinue
        ? "LANGUAGE_UI_STRINGS.kurss.hints.tapToContinue"
        : "LANGUAGE_UI_STRINGS.kurss.hints.tapToRevealGerman",
      path: `legacyHtml training-hint[${i}] (runtime: kurss.hints)`,
      category: "uiHint",
      current: resolved || raw,
      structureContext: `Legacy HTML hint placeholder ${i + 1}`,
    });
  });
}

function assignIds(targets, lessonNumber) {
  const pad = String(lessonNumber).padStart(2, "0");
  targets.forEach((t, i) => {
    t.id = `ES-KURSS-LESSON-${pad}-${String(i + 1).padStart(4, "0")}`;
  });
}

function collectLessonTargets(lessonNumber, sources) {
  const lessonKey = `kurssLesson${lessonNumber}`;
  const lesson = sources.data[lessonKey];
  const targets = [];

  collectUiLessonTargets(lessonNumber, sources.ui, targets);

  if (lesson?.legacyHtml) {
    const html = sources.html[lessonKey] || lesson.legacyHtml;
    extractLegacyHtmlTargets(lessonNumber, lessonKey, html, sources.ui, targets);
    collectLegacyUiHints(lessonNumber, html, sources.ui, targets);
    collectTrainingTargets(lessonNumber, sources.training, targets);
    collectUiHintTargets(lessonNumber, { sections: [{ title: "Traducir", cards: [{}] }] }, sources.ui, targets);
    if (lessonNumber === 7) {
      collectUiHintTargets(lessonNumber, { sections: [{ title: "Ejercicio", cards: [{}] }] }, sources.ui, targets);
    }
  } else {
    collectStructuredLessonTargets(lessonNumber, lesson, lessonKey, sources.ui, targets);
    collectUiHintTargets(lessonNumber, lesson, sources.ui, targets);
  }

  assignIds(targets, lessonNumber);
  return targets;
}

function loadSources() {
  const win = loadWindow(COURSE_LESSONS_FILE);
  const training = loadWindow(TRAINING_FILE);
  const ui = loadUiStrings();
  return {
    data: win.COURSE_LESSON_DATA || {},
    html: win.COURSE_LESSON_HTML || {},
    training,
    ui,
  };
}

function collectAllLessons() {
  const sources = loadSources();
  const byLesson = {};
  for (let n = 1; n <= LESSON_COUNT; n++) {
    byLesson[n] = collectLessonTargets(n, sources);
  }
  return { sources, byLesson };
}

module.exports = {
  LESSON_COUNT,
  LESSON_KEYS,
  COURSE_LESSONS_FILE,
  TRAINING_FILE,
  UI_FILE,
  loadSources,
  collectLessonTargets,
  collectAllLessons,
  decodeHtmlText,
};

if (require.main === module) {
  const { byLesson } = collectAllLessons();
  const counts = Object.fromEntries(
    Object.entries(byLesson).map(([k, v]) => [k, v.length]),
  );
  console.log(JSON.stringify({ counts, total: Object.values(byLesson).reduce((a, b) => a + b.length, 0) }, null, 2));
}
