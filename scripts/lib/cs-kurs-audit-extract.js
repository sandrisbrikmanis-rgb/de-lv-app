#!/usr/bin/env node
/**
 * Extract all CS-DE Kurs auditable units vs LV MASTER (read-only).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./audit-common");

function loadWindow(filePath) {
  const code = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function loadUiTrainingCards() {
  const uiPath = path.join(ROOT, "ui.js");
  const code = fs.readFileSync(uiPath, "utf8");
  const cards = {};
  const re = /const (lesson\d+TrainingCards) = (\[[\s\S]*?\n\];)/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    try {
      cards[m[1]] = eval(m[2]);
    } catch {
      /* skip */
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

function stripHtml(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isExerciseSection(title) {
  return /übung|cvičení|exercise|pratimas|vingrinājums/i.test(title || "");
}

function isTranslateSection(title) {
  return /přeložit|pārtulko|translate|išversk|tulkot/i.test(title || "");
}

function extractUnits() {
  const lvWin = loadWindow("data/courseLessons.js");
  const csWin = loadWindow("data/cs/courseLessons.js");
  const csTraining = loadWindow("data/cs/courseTrainingCards.js");
  const lvTraining = loadUiTrainingCards();

  const lvData = lvWin.COURSE_LESSON_DATA || {};
  const csData = csWin.COURSE_LESSON_DATA || {};
  const lvHtml = lvWin.COURSE_LESSON_HTML || {};
  const csHtml = csWin.COURSE_LESSON_HTML || {};

  const units = [];
  let unitIndex = 0;

  function push(unit) {
    unit.unitId = unit.unitId || `unit-${unitIndex}`;
    unit.index = unitIndex++;
    units.push(unit);
  }

  // Special HTML lessons (articles, pronouns, etc.)
  for (const key of Object.keys(lvHtml)) {
    const csH = csHtml[key] || "";
    const lvH = lvHtml[key] || "";
    push({
      unitId: `${key}/legacyHtml`,
      type: "legacyHtml",
      lessonKey: key,
      field: "COURSE_LESSON_HTML",
      file: "data/cs/courseLessons.js",
      currentCs: csH,
      lvReference: lvH,
      deContext: "(embedded DE in HTML)",
    });
  }

  // Structured lessons
  for (const [lessonKey, lvLesson] of Object.entries(lvData)) {
    const csLesson = csData[lessonKey] || null;
    if (csLesson?.title) {
      push({
        unitId: `${lessonKey}/title`,
        type: "metadata",
        lessonKey,
        field: "title",
        file: "data/cs/courseLessons.js",
        currentCs: csLesson.title,
        lvReference: lvLesson.title,
        deContext: lvLesson.id || lessonKey,
      });
    }
    if (csLesson?.subtitle) {
      push({
        unitId: `${lessonKey}/subtitle`,
        type: "metadata",
        lessonKey,
        field: "subtitle",
        file: "data/cs/courseLessons.js",
        currentCs: csLesson.subtitle,
        lvReference: lvLesson.subtitle,
        deContext: lvLesson.id || lessonKey,
      });
    }
    if (csLesson?.legacyHtml) {
      push({
        unitId: `${lessonKey}/legacyHtml`,
        type: "legacyHtml",
        lessonKey,
        field: "legacyHtml",
        file: "data/cs/courseLessons.js",
        currentCs: csLesson.legacyHtml,
        lvReference: lvLesson.legacyHtml || "",
        deContext: "(embedded DE)",
      });
    }

    const lvSections = lvLesson.sections || [];
    const csSections = csLesson?.sections || [];
    const maxSec = Math.max(lvSections.length, csSections.length);

    for (let si = 0; si < maxSec; si++) {
      const lvS = lvSections[si];
      const csS = csSections[si];
      const secId = `${lessonKey}/section[${si}]`;

      if (lvS && csS && lvS.title !== csS.title) {
        push({
          unitId: `${secId}/title`,
          type: "sectionTitle",
          lessonKey,
          sectionIndex: si,
          field: "sections[].title",
          file: "data/cs/courseLessons.js",
          currentCs: csS.title || "",
          lvReference: lvS.title || "",
          deContext: lessonKey,
        });
      }

      if (csS?.items) {
        csS.items.forEach((item, ii) => {
          const lvItem = lvS?.items?.[ii];
          const isDeDialogue =
            /^[\s"„"']*[A-Za-zÄÖÜß]/.test(String(item))
            && String(item) === String(lvItem);
          if (isDeDialogue) return;
          push({
            unitId: `${secId}/item[${ii}]`,
            type: "sectionItem",
            lessonKey,
            sectionIndex: si,
            field: `sections[${si}].items[${ii}]`,
            file: "data/cs/courseLessons.js",
            currentCs: item,
            lvReference: lvItem || "",
            deContext: extractDeFromMixed(item),
          });
        });
      }

      if (csS?.cards) {
        const cardType = isExerciseSection(csS.title)
          ? "exerciseCard"
          : isTranslateSection(csS.title)
            ? "translateCard"
            : "card";
        csS.cards.forEach((card, ci) => {
          const lvCard = lvS?.cards?.[ci];
          const cardTypeField = card.type || lvCard?.type || "";
          const front = card.lv || card.front || card.cs || "";
          const back = card.de || card.answer || card.back || "";
          const lvFront = lvCard?.lv || lvCard?.front || "";
          const lvBack = lvCard?.de || lvCard?.answer || lvCard?.back || "";
          if (cardTypeField === "Fill") {
            push({
              unitId: `${secId}/fill[${ci}]`,
              type: "fillExercise",
              lessonKey,
              sectionIndex: si,
              cardIndex: ci,
              field: `sections[${si}].cards[${ci}].prompt`,
              file: "data/cs/courseLessons.js",
              currentCs: card.prompt || "",
              deAnswer: card.answer || "",
              lvReference: lvCard?.prompt || "",
              lvDeAnswer: lvCard?.answer || "",
              deContext: card.answer || "",
            });
            if (card.task) {
              push({
                unitId: `${secId}/fill[${ci}]/task`,
                type: "fillExercise",
                lessonKey,
                sectionIndex: si,
                cardIndex: ci,
                field: `sections[${si}].cards[${ci}].task`,
                file: "data/cs/courseLessons.js",
                currentCs: card.task || "",
                lvReference: lvCard?.task || "",
                deContext: card.answer || "",
              });
            }
            return;
          }
          if (card.prompt && card.answer && card.task && !cardTypeField) {
            push({
              unitId: `${secId}/promptTask[${ci}]/prompt`,
              type: "promptTaskExercise",
              lessonKey,
              sectionIndex: si,
              cardIndex: ci,
              field: `sections[${si}].cards[${ci}].prompt`,
              file: "data/cs/courseLessons.js",
              currentCs: card.prompt,
              deAnswer: card.answer,
              lvReference: lvCard?.prompt || "",
              lvDeAnswer: lvCard?.answer || "",
              deContext: card.answer,
            });
            push({
              unitId: `${secId}/promptTask[${ci}]/task`,
              type: "promptTaskExercise",
              lessonKey,
              sectionIndex: si,
              cardIndex: ci,
              field: `sections[${si}].cards[${ci}].task`,
              file: "data/cs/courseLessons.js",
              currentCs: card.task,
              lvReference: lvCard?.task || "",
              deContext: card.answer,
            });
            return;
          }
          if (card.base && Array.isArray(card.forms)) {
            push({
              unitId: `${secId}/multi[${ci}]/base`,
              type: "multiStepExercise",
              lessonKey,
              sectionIndex: si,
              cardIndex: ci,
              field: `sections[${si}].cards[${ci}].base`,
              file: "data/cs/courseLessons.js",
              currentCs: card.base,
              deAnswer: card.base,
              lvReference: lvCard?.base || "",
              lvDeAnswer: lvCard?.base || "",
              deContext: card.base,
            });
            card.forms.forEach((form, fi) => {
              const lvForm = lvCard?.forms?.[fi];
              push({
                unitId: `${secId}/multi[${ci}]/forms[${fi}]/task`,
                type: "multiStepExercise",
                lessonKey,
                sectionIndex: si,
                cardIndex: ci,
                field: `sections[${si}].cards[${ci}].forms[${fi}].task`,
                file: "data/cs/courseLessons.js",
                currentCs: form.task || "",
                lvReference: lvForm?.task || "",
                deContext: form.text || card.base || "",
              });
              push({
                unitId: `${secId}/multi[${ci}]/forms[${fi}]/text`,
                type: "multiStepExercise",
                lessonKey,
                sectionIndex: si,
                cardIndex: ci,
                field: `sections[${si}].cards[${ci}].forms[${fi}].text`,
                file: "data/cs/courseLessons.js",
                currentCs: form.text || "",
                lvReference: lvForm?.text || "",
                deContext: card.base || "",
              });
            });
            return;
          }
          if (card.ich && card.er && card.wir) {
            for (const k of ["ich", "er", "wir"]) {
              push({
                unitId: `${secId}/conj[${ci}].${k}`,
                type: "conjugationExercise",
                lessonKey,
                sectionIndex: si,
                cardIndex: ci,
                field: `sections[${si}].cards[${ci}].${k}`,
                file: "data/cs/courseLessons.js",
                currentCs: "(DE conjugation drill — no Czech prompt)",
                deAnswer: card[k],
                lvReference: lvCard?.[k] || "",
                lvDeAnswer: lvCard?.[k] || "",
                deContext: card[k],
              });
            }
            return;
          }
          push({
            unitId: `${secId}/card[${ci}]`,
            type: cardType,
            lessonKey,
            sectionIndex: si,
            cardIndex: ci,
            field: `sections[${si}].cards[${ci}]`,
            file: "data/cs/courseLessons.js",
            currentCs: front,
            deAnswer: back,
            lvReference: lvFront,
            lvDeAnswer: lvBack,
            deContext: back,
          });
        });
      }
    }
  }

  // Training cards lessons 1-6
  for (let n = 1; n <= 6; n++) {
    const lvKey = `lesson${n}TrainingCards`;
    const csKey = `lesson${n}TrainingCardsCs`;
    const lvDeck = lvTraining[lvKey] || [];
    const csDeck = csTraining[csKey] || [];
    const max = Math.max(lvDeck.length, csDeck.length);
    for (let i = 0; i < max; i++) {
      const lvC = lvDeck[i];
      const csC = csDeck[i];
      push({
        unitId: `training/lesson${n}/card[${i}]`,
        type: "trainingTranslate",
        lessonKey: `lesson${n}`,
        cardIndex: i,
        field: `${csKey}[${i}].front`,
        file: "data/cs/courseTrainingCards.js",
        currentCs: csC?.front || "",
        deAnswer: csC?.back || lvC?.back || "",
        lvReference: lvC?.front || "",
        lvDeAnswer: lvC?.back || "",
        deContext: csC?.back || lvC?.back || "",
      });
    }
  }

  // Lesson 7 exercise
  const lvEx = lvTraining.lesson7ExerciseCards || [];
  const csEx = csTraining.lesson7ExerciseCardsCs || [];
  const exMax = Math.max(lvEx.length, csEx.length);
  for (let i = 0; i < exMax; i++) {
    const lvC = lvEx[i];
    const csC = csEx[i];
    if (csC?.infinitive) {
      push({
        unitId: `training/lesson7/exercise[${i}]/lv`,
        type: "imperativeExercise",
        lessonKey: "lesson7",
        cardIndex: i,
        field: `lesson7ExerciseCardsCs[${i}].lv`,
        file: "data/cs/courseTrainingCards.js",
        currentCs: csC.lv || "",
        lvReference: lvC?.lv || "",
        deContext: csC.infinitive || "",
      });
      for (const k of ["du", "ihr", "sie"]) {
        push({
          unitId: `training/lesson7/exercise[${i}]/${k}`,
          type: "imperativeExercise",
          lessonKey: "lesson7",
          cardIndex: i,
          field: `lesson7ExerciseCardsCs[${i}].${k}`,
          file: "data/cs/courseTrainingCards.js",
          currentCs: csC[k] || "",
          lvReference: lvC?.[k] || "",
          deContext: csC.infinitive || "",
        });
      }
      continue;
    }
    push({
      unitId: `training/lesson7/exercise[${i}]`,
      type: "exerciseCard",
      lessonKey: "lesson7",
      cardIndex: i,
      field: `lesson7ExerciseCardsCs[${i}]`,
      file: "data/cs/courseTrainingCards.js",
      currentCs: csC?.front || csC?.cs || "",
      deAnswer: csC?.back || lvC?.back || "",
      lvReference: lvC?.front || "",
      lvDeAnswer: lvC?.back || "",
      deContext: csC?.back || lvC?.back || "",
    });
  }

  return {
    units,
    meta: {
      lvLessonCount: Object.keys(lvData).length,
      csLessonCount: Object.keys(csData).length,
      lvHtmlKeys: Object.keys(lvHtml).length,
      csHtmlKeys: Object.keys(csHtml).length,
      unitCount: units.length,
    },
    lvData,
    csData,
    lvHtml,
    csHtml,
    lvTraining,
    csTraining,
  };
}

function extractDeFromMixed(text) {
  const m = String(text).match(/[A-Za-zÄÖÜß][A-Za-zÄÖÜß\s,!.?\"'„“–-]+/g);
  return m ? m.slice(0, 3).join(" | ") : "";
}

module.exports = {
  extractUnits,
  loadWindow,
  stripHtml,
  loadUiTrainingCards,
};

if (require.main === module) {
  const { units, meta } = extractUnits();
  console.log(JSON.stringify({ meta, sample: units.slice(0, 3).map((u) => ({ unitId: u.unitId, type: u.type })) }, null, 2));
  console.log("units:", units.length);
}
