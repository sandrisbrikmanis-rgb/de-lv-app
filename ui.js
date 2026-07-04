function datasetWords(name) {
  const dataset = window[name];
  return Array.isArray(dataset) ? dataset : [];
}

const flashcards = [
  ...datasetWords("A1_WORDS"),
  ...datasetWords("A2_WORDS"),
  ...datasetWords("B1_WORDS"),
  ...datasetWords("B2_WORDS"),
  ...datasetWords("C1_WORDS"),
  ...datasetWords("C2_WORDS"),
  ...datasetWords("SENTENCE_ENTRIES")
];

const STUDY_SECTION_ICONS = {
  explanation: "ℹ️",
  examples: "⏳",
  comparison: "⚖️",
  tip: "💡",
  important: "❗",
  mistakes: "🎯",
  remember: "⭐",
  comparisonBadge: "⚖️",
  info: "ⓘ"
};

const UI_ICONS = {
  correct: "✓",
  incorrect: "✗",
  wrong: "❌",
  right: "✔",
  target: "🎯",
  easy: "🟢",
  normal: "🟡",
  intense: "🔴"
};

const verbEntries = typeof VERB_ENTRIES !== "undefined" ? VERB_ENTRIES : (window.VERB_ENTRIES || []);
window.COURSE_LESSONS = typeof COURSE_LESSONS !== "undefined" ? COURSE_LESSONS : (window.COURSE_LESSONS || []);

window.flashcards = flashcards;

const wordEntries = flashcards.filter((card) => card.level !== "Sätze");
const saetze = flashcards.filter((card) => card.level === "Sätze");

window.wordEntries = (Array.isArray(window.wordEntries) && window.wordEntries.length) ? window.wordEntries : wordEntries;
window["sätze"] = window["sätze"] || [];
window.sentenceEntries = window.sentenceEntries || [];
window.COMPARISON_STUDY_CARDS = window.COMPARISON_STUDY_CARDS || [];

for (const s of saetze) {
  if (!window["sätze"].some((x) => x.de === s.de && x.lv === s.lv)) {
    window["sätze"].push(s);
  }
}

function mergeSaetzeIntoSentenceEntries() {
  for (const s of window["sätze"]) {
    if (!window.sentenceEntries.some((x) => x.de === s.de && x.lv === s.lv)) {
      window.sentenceEntries.push(s);
    }
  }
}

mergeSaetzeIntoSentenceEntries();

function normalizeEntry(e, type) {
  const entry = {
    id: e.id || e.study?.id || null,
    de: e.de || e.front || "",
    lv: e.lv || e.back || "",
    level: type === "sentence" ? "Sätze" : (e.level || e.group || "A1"),
    type,
    study: e.study || null
  };
  if (e.de_article) entry.de_article = e.de_article;
  if (e.de_plural) entry.de_plural = e.de_plural;
  return entry;
}

function allEntries() {
  mergeSaetzeIntoSentenceEntries();
  return [
    ...window.wordEntries.map((e) => normalizeEntry(e, "word")),
    ...window.sentenceEntries.map((e) => normalizeEntry(e, "sentence")),
    ...window.COMPARISON_STUDY_CARDS.map((e) => normalizeEntry(e, "comparison"))
  ].filter((e) => e.de && e.lv && e.level);
}

function getSentenceEntries() {
  mergeSaetzeIntoSentenceEntries();
  return window.sentenceEntries
    .map((entry) => normalizeEntry(entry, "sentence"))
    .filter((entry) => entry.de && entry.lv && entry.level === "Sätze");
}

window.getSentenceEntries = getSentenceEntries;

const cooldownDays = [1, 3, 7, 14, 30];
const storageKey = "deLvFlashcardsProgress";
const directionStorageKey = "deLvFlashcardsDirection";
const modeStorageKey = "deLvFlashcardsMode";
const reviewStorageKey = "deLvFlashcardsReviewStatus";
const sessionStorageKey = "deLvFlashcardsSession";
const lastCompletedSessionStorageKey = "deLvFlashcardsLastCompletedSession";
const problemStatsStorageKey = "deLvFlashcardsProblemStats";
const legacyUnwantedStorageKey = "deLvFlashcardsUnwanted";
const unwantedStorageKey = "deLvFlashcardsExplicitUnwanted";
const masteredStorageKey = "deLvFlashcardsMastered100";
const sessionModes = {
  easy: { label: `${UI_ICONS.easy} Viegls`, newCount: 5, reviewCount: 5 },
  normal: { label: `${UI_ICONS.normal} Normāls`, newCount: 10, reviewCount: 5 },
  intense: { label: `${UI_ICONS.intense} Intensīvs`, newCount: 20, reviewCount: 10 }
};

const state = {
  group: "A1",
  index: 0,
  verbMode: false,
  verbIndex: 0,
  verbStep: 0,
  verbRandomMode: false,
  verbChallenge: null,
  spellingMode: false,
  spellingTask: null,
  spellingChecked: false,
  spellingCorrect: false,
  spellingAnswer: "",
  revealed: false,
  reviewKnown: false,
  reviewLastSession: false,
  problemMode: false,
  problemScope: "group",
  problemIndex: 0,
  timeReviewMode: null,
  timeReviewIndex: 0,
  timeReviewIds: [],
  lastSessionIndex: 0,
  pendingLastSessionIds: [],
  direction: loadDirection(),
  mode: loadMode(),
  session: loadSession(),
  lastCompletedSession: loadLastCompletedSession(),
  reviewStatus: loadReviewStatus(),
  problemStats: loadProblemStats(),
  unwantedIds: loadUnwantedIds(),
  masteredIds: loadMasteredIds(),
  studyTestCard: null,
  order: {},
  learned: loadProgress()
};

let spellingAutoNextTimer = null;

const elements = {
  groupButtons: document.getElementById("groupButtons"),
  modeButtons: document.getElementById("modeButtons"),
  activeGroup: document.getElementById("activeGroup"),
  totalWords: document.getElementById("totalWords"),
  learnedWords: document.getElementById("learnedWords"),
  cardLevel: document.getElementById("cardLevel"),
  word: document.getElementById("word"),
  translation: document.getElementById("translation"),
  cardStudyExtra: document.getElementById("cardStudyExtra"),
  hint: document.getElementById("hint"),
  notice: document.getElementById("notice"),
  knownBtn: document.getElementById("knownBtn"),
  unknownBtn: document.getElementById("unknownBtn"),
  nextBtn: document.getElementById("nextBtn"),
  shuffleBtn: document.getElementById("shuffleBtn"),
  verbRandomBtn: document.getElementById("verbRandomBtn"),
  spellingModeBtn: document.getElementById("spellingModeBtn"),
  spellingPanel: document.getElementById("spellingPanel"),
  spellingInput: document.getElementById("spellingInput"),
  checkSpellingBtn: document.getElementById("checkSpellingBtn"),
  continueSpellingBtn: document.getElementById("continueSpellingBtn"),
  spellingResult: document.getElementById("spellingResult"),
  directionBtn: document.getElementById("directionBtn"),
  extraOptionsBtn: document.getElementById("extraOptionsBtn"),
  extraOptions: document.getElementById("extraOptions"),
  reviewBtn: document.getElementById("reviewBtn"),
  reviewLastSessionBtn: document.getElementById("reviewLastSessionBtn"),
  archiveLastSessionBtn: document.getElementById("archiveLastSessionBtn"),
  problemWordsBtn: document.getElementById("problemWordsBtn"),
  allProblemWordsBtn: document.getElementById("allProblemWordsBtn"),
  weeklyReviewBtn: document.getElementById("weeklyReviewBtn"),
  monthlyReviewBtn: document.getElementById("monthlyReviewBtn"),
  restoreBtn: document.getElementById("restoreBtn"),
  restoreCurrentBtn: document.getElementById("restoreCurrentBtn"),
  unwantedBtn: document.getElementById("unwantedBtn"),
  markMasteredBtn: document.getElementById("markMasteredBtn"),
  markUnwantedBtn: document.getElementById("markUnwantedBtn"),
  masteredListBtn: document.getElementById("masteredListBtn"),
  unwantedListBtn: document.getElementById("unwantedListBtn"),
  masteredPanel: document.getElementById("masteredPanel"),
  masteredCloseBtn: document.getElementById("masteredCloseBtn"),
  masteredList: document.getElementById("masteredList"),
  unwantedPanel: document.getElementById("unwantedPanel"),
  unwantedCloseBtn: document.getElementById("unwantedCloseBtn"),
  unwantedList: document.getElementById("unwantedList"),
  pamatiBtn: document.getElementById("pamatiBtn"),
  pamatiPanel: document.getElementById("pamatiPanel"),
  pamatiCloseBtn: document.getElementById("pamatiCloseBtn"),
  pamatiPrevBtn: document.getElementById("pamatiPrevBtn"),
  pamatiNextBtn: document.getElementById("pamatiNextBtn"),
  pamatiCounter: document.getElementById("pamatiCounter"),
  pamatiContent: document.getElementById("pamatiContent"),
  kurssBtn: document.getElementById("kurssBtn"),
  kurssPanel: document.getElementById("kurssPanel"),
  kurssBackBtn: document.getElementById("kurssBackBtn"),
  kurssCloseBtn: document.getElementById("kurssCloseBtn"),
  kurssTitle: document.getElementById("kurssTitle"),
  kurssSubtitle: document.getElementById("kurssSubtitle"),
  kurssList: document.getElementById("kurssList"),
  kurssTip: document.getElementById("kurssTip"),
  kurssFooterLinks: document.getElementById("kurssFooterLinks"),
  kurssPronunciationBtn: document.getElementById("kurssPronunciationBtn"),
  kurssArticlesBtn: document.getElementById("kurssArticlesBtn"),
  kurssLessonsBtn: document.getElementById("kurssLessonsBtn"),
  kurssVerbBasicsBtn: document.getElementById("kurssVerbBasicsBtn"),
  kurssSentenceStructureBtn: document.getElementById("kurssSentenceStructureBtn"),
  kurssPronunciationLesson: document.getElementById("kurssPronunciationLesson"),
  kurssArticlesLesson: document.getElementById("kurssArticlesLesson"),
  kurssLessonsMenu: document.getElementById("kurssLessonsMenu"),
  kurssLesson1Btn: document.getElementById("kurssLesson1Btn"),
  kurssLesson2Btn: document.getElementById("kurssLesson2Btn"),
  kurssLesson3Btn: document.getElementById("kurssLesson3Btn"),
  kurssLesson4Btn: document.getElementById("kurssLesson4Btn"),
  kurssLesson5Btn: document.getElementById("kurssLesson5Btn"),
  kurssLesson6Btn: document.getElementById("kurssLesson6Btn"),
  kurssLesson7Btn: document.getElementById("kurssLesson7Btn"),
  kurssLesson8Btn: document.getElementById("kurssLesson8Btn"),
  kurssLesson9Btn: document.getElementById("kurssLesson9Btn"),
  kurssLesson10Btn: document.getElementById("kurssLesson10Btn"),
  kurssLesson11Btn: document.getElementById("kurssLesson11Btn"),
  kurssLesson12Btn: document.getElementById("kurssLesson12Btn"),
  kurssLesson13Btn: document.getElementById("kurssLesson13Btn"),
  kurssLesson14Btn: document.getElementById("kurssLesson14Btn"),
  kurssLesson15Btn: document.getElementById("kurssLesson15Btn"),
  kurssLesson16Btn: document.getElementById("kurssLesson16Btn"),
  kurssLesson17Btn: document.getElementById("kurssLesson17Btn"),
  kurssLesson18Btn: document.getElementById("kurssLesson18Btn"),
  kurssLesson19Btn: document.getElementById("kurssLesson19Btn"),
  kurssLesson20Btn: document.getElementById("kurssLesson20Btn"),
  kurssLesson21Btn: document.getElementById("kurssLesson21Btn"),
  kurssLesson1: document.getElementById("kurssLesson1"),
  kurssLesson2: document.getElementById("kurssLesson2"),
  kurssLesson3: document.getElementById("kurssLesson3"),
  kurssLesson4: document.getElementById("kurssLesson4"),
  kurssLesson5: document.getElementById("kurssLesson5"),
  kurssLesson6: document.getElementById("kurssLesson6"),
  kurssLesson7: document.getElementById("kurssLesson7"),
  kurssLesson8: document.getElementById("kurssLesson8"),
  kurssLesson9: document.getElementById("kurssLesson9"),
  kurssLesson10: document.getElementById("kurssLesson10"),
  kurssLesson11: document.getElementById("kurssLesson11"),
  kurssLesson12: document.getElementById("kurssLesson12"),
  kurssLesson13: document.getElementById("kurssLesson13"),
  kurssLesson14: document.getElementById("kurssLesson14"),
  kurssLesson15: document.getElementById("kurssLesson15"),
  kurssLesson16: document.getElementById("kurssLesson16"),
  kurssLesson17: document.getElementById("kurssLesson17"),
  kurssLesson18: document.getElementById("kurssLesson18"),
  kurssLesson19: document.getElementById("kurssLesson19"),
  kurssLesson20: document.getElementById("kurssLesson20"),
  kurssLesson21: document.getElementById("kurssLesson21"),
  kurssPronunciationMenu: document.getElementById("kurssPronunciationMenu"),
  kurssVowelsLessonBtn: document.getElementById("kurssVowelsLessonBtn"),
  kurssConsonantsLessonBtn: document.getElementById("kurssConsonantsLessonBtn"),
  kurssConsonantsLesson: document.getElementById("kurssConsonantsLesson"),
  kurssVerbBasicsLesson: document.getElementById("kurssVerbBasicsLesson"),
  kurssSentenceStructureLesson: document.getElementById("kurssSentenceStructureLesson")
};

const courseLessonIds = Array.from({ length: 21 }, (_, index) => `kurssLesson${index + 1}`);

const courseLessonConfigs = {
  kurssLesson1: {
    title: "Lekcija 1",
    subtitle: "Darbības vārdi tagadnē, vārdiņi, gramatika un pārtulko",
    prepare: () => { prepareLesson1Accordion(); renderCourseTranslateCard("lesson1", 0, false); }
  },
  kurssLesson2: {
    title: "Lekcija 2",
    subtitle: "Dialogi, vārdi, izruna, gramatika un pārtulko",
    prepare: () => { prepareLesson2Accordion(); renderCourseTranslateCard("lesson2", 0, false); }
  },
  kurssLesson3: {
    title: "Lekcija 3",
    subtitle: "Artikuli, vietas vārdi un pārtulko",
    prepare: () => { prepareLesson3Accordion(); renderCourseTranslateCard("lesson3", 0, false); }
  },
  kurssLesson4: {
    title: "Lekcija 4",
    subtitle: "Objekti klasē, īpašības un pārtulko",
    prepare: () => { prepareLesson4Accordion(); renderCourseTranslateCard("lesson4", 0, false); }
  },
  kurssLesson5: {
    title: "Lekcija 5",
    subtitle: "Wen?, akuzatīvs, sitzen, fragen un -in galotne.",
    prepare: () => { prepareLesson5Accordion(); renderCourseTranslateCard("lesson5", 0, false); }
  },
  kurssLesson6: {
    title: "Lekcija 6",
    subtitle: "Darbības vārdi, vietas apstākļi un pārtulko",
    prepare: () => { prepareLesson6Accordion(); renderCourseTranslateCard("lesson6", 0, false); }
  },
  kurssLesson7: {
    title: "Lekcija 7",
    subtitle: "Pavēles izteiksme, uzrunas forma un daudzskaitlis.",
    prepare: () => { prepareLesson7Accordion(); renderLesson7ExerciseCard(0, false); }
  },
  kurssLesson8: {
    title: "Lekcija 8",
    subtitle: "Refleksīvie darbības vārdi, e → i/ie maiņa un akuzatīvs",
    dataKey: "kurssLesson8",
    exerciseAttribute: "data-lesson8-exercise-card",
    prepare: () => { prepareLesson8Accordion(); renderLesson8ExerciseCard(0, false); renderCourseTranslateCard("lesson8", 0, false); }
  },
  kurssLesson9: {
    title: "Lekcija 9",
    subtitle: "dieser/jener, vietniekvārdi, daudzskaitlis un teikumu pārveidošana",
    dataKey: "kurssLesson9",
    exerciseAttribute: "data-lesson9-exercise-card",
    prepare: () => { prepareLesson9Accordion(); renderLesson9ExerciseCard(0, 0); renderCourseTranslateCard("lesson9", 0, false); }
  },
  kurssLesson10: {
    title: "Lekcija 10",
    subtitle: "sein, können, pamatformas un pārtulko",
    dataKey: "kurssLesson10",
    prepare: () => { prepareLesson10Accordion(); renderCourseTranslateCard("lesson10", 0, false); }
  },
  kurssLesson11: {
    title: "Lekcija 11",
    subtitle: "haben, kein/keine/kein, draugi un istabas apraksts",
    dataKey: "kurssLesson11",
    prepare: () => { prepareLesson11Accordion(); renderCourseTranslateCard("lesson11", 0, false); }
  },
  kurssLesson12: {
    title: "Lekcija 12",
    subtitle: "Īpašības vārdu salīdzināmās pakāpes, krāsas un īpašības.",
    dataKey: "kurssLesson12",
    prepare: () => { prepareLesson12Accordion(); renderCourseTranslateCard("lesson12", 0, false); }
  },
  kurssLesson13: {
    title: "Lekcija 13",
    subtitle: "Der Körper, ķermeņa daļas, turnen, jeder un daudzskaitlis.",
    dataKey: "kurssLesson13",
    prepare: () => { prepareLesson13Accordion(); renderCourseExerciseCard("lesson13", 0, 0); renderCourseTranslateCard("lesson13", 0, false); }
  },
  kurssLesson14: {
    title: "Lekcija 14",
    subtitle: "müssen, wollen, mögen",
    dataKey: "kurssLesson14",
    prepare: () => {
      const accordions = Array.from(elements.kurssLesson14.querySelectorAll(".lesson1-accordion"));
      accordions.forEach((accordion, index) => { accordion.open = index === 0; });
      renderCourseTranslateCard("lesson14", 0, false);
    }
  },
  kurssLesson15: {
    title: "Lekcija 15",
    subtitle: "sollen, dürfen, essen, augļi",
    dataKey: "kurssLesson15",
    prepare: () => {
      const accordions = Array.from(elements.kurssLesson15.querySelectorAll(".lesson1-accordion"));
      accordions.forEach((accordion, index) => { accordion.open = index === 0; });
      renderCourseTranslateCard("lesson15", 0, false);
    }
  },
  kurssLesson16: {
    title: "Lekcija 16",
    subtitle: "Dativs, geben, sich nähern",
    dataKey: "kurssLesson16",
    prepare: () => {
      const accordions = Array.from(elements.kurssLesson16.querySelectorAll(".lesson1-accordion"));
      accordions.forEach((accordion, index) => { accordion.open = index === 0; });
      renderCourseExerciseCard("lesson16", 0, 0);
      renderCourseTranslateCard("lesson16", 0, false);
    }
  },
  kurssLesson17: {
    title: "Lekcija 17",
    subtitle: "mit + Dativ, womit / mit wem, darbības vārdi ar Umlaut",
    dataKey: "kurssLesson17",
    prepare: () => {
      const accordions = Array.from(elements.kurssLesson17.querySelectorAll(".lesson1-accordion"));
      accordions.forEach((accordion, index) => { accordion.open = index === 0; });
      renderCourseExerciseCard("lesson17", 0, 0);
      renderCourseTranslateCard("lesson17", 0, false);
    }
  },
  kurssLesson18: {
    title: "Lekcija 18",
    subtitle: "wohin / wo, Akkusativ vai Dativ ar an / in / auf",
    dataKey: "kurssLesson18",
    prepare: () => {
      const accordions = Array.from(elements.kurssLesson18.querySelectorAll(".lesson1-accordion"));
      accordions.forEach((accordion, index) => { accordion.open = index === 0; });
      renderCourseExerciseCard("lesson18", 0, 0);
      renderCourseTranslateCard("lesson18", 0, false);
    }
  },
  kurssLesson19: {
    title: "Lekcija 19",
    subtitle: "Wechselpräpositionen: vor, hinter, unter, über, neben, zwischen",
    dataKey: "kurssLesson19",
    prepare: () => {
      const accordions = Array.from(elements.kurssLesson19.querySelectorAll(".lesson1-accordion"));
      accordions.forEach((accordion, index) => { accordion.open = index === 0; });
      renderCourseExerciseCard("lesson19", 0, 0);
      renderCourseTranslateCard("lesson19", 0, false);
    }
  },
  kurssLesson20: {
    title: "Lekcija 20",
    subtitle: "Haus, Stockwerk, Dativ/Akkusativ, saliktie lietvārdi",
    dataKey: "kurssLesson20",
    prepare: () => {
      const accordions = Array.from(elements.kurssLesson20.querySelectorAll(".lesson1-accordion"));
      accordions.forEach((accordion, index) => { accordion.open = index === 0; });
      renderCourseExerciseCard("lesson20", 0, 0);
      renderCourseTranslateCard("lesson20", 0, false);
    }
  },
  kurssLesson21: {
    title: "Lekcija 21",
    subtitle: "woher / wohin / wo, von / aus / mit + Dativ",
    dataKey: "kurssLesson21",
    prepare: () => {
      const accordions = Array.from(elements.kurssLesson21.querySelectorAll(".lesson1-accordion"));
      accordions.forEach((accordion, index) => { accordion.open = index === 0; });
      renderCourseExerciseCard("lesson21", 0, 0);
      renderCourseTranslateCard("lesson21", 0, false);
    }
  }
};

function hideCourseLessonPanels(activeLessonId = null) {
  courseLessonIds.forEach((lessonId) => {
    const panel = elements[lessonId];
    if (panel) panel.hidden = lessonId !== activeLessonId;
  });
}

function renderCourseLesson(lessonId) {
  const config = courseLessonConfigs[lessonId];
  const target = elements[lessonId];
  if (!config || !target) return;

  const lesson = window.COURSE_LESSON_DATA?.[config.dataKey || lessonId];
  renderCourseLessonFromData(target, lesson, config.exerciseAttribute);
  if (lesson?.id) renderCourseExerciseCard(lesson.id, 0, 0);
  target.classList.add("course-lesson");
}

function prepareCourseLesson(lessonId) {
  const config = courseLessonConfigs[lessonId];
  if (config?.prepare) config.prepare();
}

function openCourseLesson(lessonId) {
  const config = courseLessonConfigs[lessonId];
  const target = elements[lessonId];
  if (!config || !target) return;

  hideAllKurssPanels();
  elements.kurssTitle.textContent = config.title;
  elements.kurssSubtitle.textContent = config.subtitle || "";
  hideCourseLessonPanels(lessonId);
  renderCourseLesson(lessonId);
  target.hidden = false;
  scrollKurssPanelToTop();
  prepareCourseLesson(lessonId);
  if (elements.kurssPanel) elements.kurssPanel.classList.add("active");
}

function handleCourseLessonClick(event) {
  const handlerEntries = [
    ["[data-course-translate-card], [data-lesson1-training-card], [data-lesson2-training-card], [data-lesson3-training-card], [data-lesson4-training-card], [data-lesson5-training-card], [data-lesson6-training-card]", (card) => handleCourseTranslateCardClick(card)],
    ["[data-lesson7-exercise-card]", (card) => handleLesson7ExerciseCardClick(card)],
    ["[data-lesson8-exercise-card]", (card) => handleLesson8ExerciseCardClick(card)],
    ["[data-course-exercise-card]", (card) => handleCourseExerciseCardClick(card)],
    ["[data-lesson9-exercise-card]", () => handleLesson9ExerciseCardClick(event)]
  ];

  for (const [selector, handler] of handlerEntries) {
    const card = event.target.closest(selector);
    if (card) {
      handler(card);
      return;
    }
  }

  const frontCard = event.target.closest("[data-course-card-front]");
  if (frontCard) {
    frontCard.classList.toggle("is-open");
    const back = frontCard.querySelector("[data-course-card-back]");
    if (back) back.hidden = !frontCard.classList.contains("is-open");
  }
}

function getCourseExerciseCards(lessonId) {
  const lessonNumber = String(lessonId || "").match(/\d+/)?.[0];
  if (!lessonNumber) return [];
  const lesson = window.COURSE_LESSON_DATA?.[`kurssLesson${lessonNumber}`];
  return lesson?.sections?.find((section) => section.title === "Vingrinājums" && Array.isArray(section.cards))?.cards || [];
}

function resolveExerciseMeta(instruction, task, fallback) {
  const taskText = String(task || "").trim();
  const instructionText = String(instruction || "").trim();
  if (taskText) return taskText;
  if (instructionText) return instructionText;
  return fallback || "";
}

function applyExerciseCardPhaseClass(target, phase) {
  target.classList.add("exercise-unified-card");
  target.classList.remove("exercise-phase-challenge", "exercise-phase-reveal");
  target.classList.add(phase === "reveal" ? "exercise-phase-reveal" : "exercise-phase-challenge");
}

function renderExerciseCardShell(target, options) {
  const { progress, meta, phase, prompt, answers, cta } = options;
  applyExerciseCardPhaseClass(target, phase);
  const isReveal = phase === "reveal";
  const bodyParts = [];
  if (isReveal) {
    bodyParts.push('<span class="lesson1-training-text exercise-card-prompt exercise-card-prompt-muted">' + escapeHtml(prompt || "") + '</span>');
    if (Array.isArray(answers) && answers.length) {
      bodyParts.push('<span class="lesson1-training-divider" aria-hidden="true"></span>');
      answers.forEach((answer) => {
        if (answer) bodyParts.push('<span class="lesson1-training-answer">' + escapeHtml(answer) + '</span>');
      });
    }
  } else {
    bodyParts.push('<span class="lesson1-training-text exercise-card-prompt">' + escapeHtml(prompt || "") + '</span>');
    if (cta) bodyParts.push('<span class="exercise-card-cta">' + escapeHtml(cta) + '</span>');
  }
  target.innerHTML =
    '<span class="exercise-card-header">' +
      '<span class="lesson1-training-progress">' + escapeHtml(progress) + '</span>' +
      (meta ? '<span class="exercise-card-meta">' + escapeHtml(meta) + '</span>' : '') +
    '</span>' +
    '<span class="exercise-card-body">' + bodyParts.join("") + '</span>';
}

function renderCourseExerciseCard(lessonId, index = 0, step = 0) {
  const lessonNumber = String(lessonId || "").match(/\d+/)?.[0];
  if (!lessonNumber) return;
  const normalizedLessonId = `lesson${lessonNumber}`;
  const target = elements[`kurssLesson${lessonNumber}`]?.querySelector(`[data-course-exercise-card][data-lesson-id="${normalizedLessonId}"]`);
  const cards = getCourseExerciseCards(normalizedLessonId);
  if (!target || !cards.length) return;
  const safeIndex = ((index % cards.length) + cards.length) % cards.length;
  const card = cards[safeIndex];
  target.dataset.lessonId = normalizedLessonId;
  target.dataset.cardIndex = String(safeIndex);

  if (card.prompt && card.answer) {
    const hasSecondAnswer = Boolean(card.answer2 || card.pluralAnswer);
    const safeStep = hasSecondAnswer ? Math.min(Math.max(Number(step) || 0, 0), 2) : ((Number(step) || 0) > 0 ? 1 : 0);
    const secondAnswer = card.answer2 || card.pluralAnswer || "";
    const progress = "Lekcija " + lessonNumber + " · Vingrinājums · " + (safeIndex + 1) + " / " + cards.length;
    const baseMeta = resolveExerciseMeta(card.instruction, card.task, "Liec pareizo locījumu un darini daudzskaitli!");
    target.dataset.step = String(safeStep);

    if (safeStep === 0) {
      renderExerciseCardShell(target, {
        progress,
        meta: baseMeta,
        phase: "challenge",
        prompt: card.prompt || "",
        cta: "Pieskaries, lai redzētu atbildi"
      });
      return;
    }

    if (safeStep === 1) {
      renderExerciseCardShell(target, {
        progress,
        meta: hasSecondAnswer ? resolveExerciseMeta(null, card.task2, "Tagad atbildi daudzskaitlī.") : baseMeta,
        phase: "reveal",
        prompt: card.prompt || "",
        answers: [card.answer || ""]
      });
      return;
    }

    renderExerciseCardShell(target, {
      progress,
      meta: resolveExerciseMeta(null, card.done, "Pieskaries nākamajai kartītei"),
      phase: "reveal",
      prompt: card.prompt || "",
      answers: [card.answer || "", secondAnswer].filter(Boolean)
    });
    return;
  }

  const rawStep = Math.max(0, Number(step) || 0);
  const pairIndex = Math.min(Math.floor(rawStep / 2), 2);
  const isReveal = rawStep % 2 === 1;
  const transforms = [
    { prompt: card.ich || "", answer: card.er || "", meta: "Pārveido teikumu 3. personā vienskaitlī." },
    { prompt: card.er || "", answer: card.wir || "", meta: "Pārveido teikumu 1. personā daudzskaitlī." },
    { prompt: card.wir || "", answer: "", meta: "Pieskaries nākamajai kartītei." }
  ];
  const current = transforms[pairIndex];
  const progress = "Lekcija " + lessonNumber + " · Vingrinājums · " + (safeIndex + 1) + " / " + cards.length;
  target.dataset.step = String(rawStep);

  if (!isReveal) {
    renderExerciseCardShell(target, {
      progress,
      meta: current.meta,
      phase: "challenge",
      prompt: current.prompt,
      cta: current.answer ? "Pieskaries, lai redzētu atbildi" : "Pieskaries nākamajai kartītei"
    });
    return;
  }

  renderExerciseCardShell(target, {
    progress,
    meta: transforms[Math.min(pairIndex + 1, 2)].meta,
    phase: "reveal",
    prompt: current.prompt,
    answers: current.answer ? [current.answer] : []
  });
}

function handleCourseExerciseCardClick(card) {
  if (!card) return;
  const lessonId = card.dataset.lessonId;
  const cards = getCourseExerciseCards(lessonId);
  if (!cards.length) return;
  const index = Number(card.dataset.cardIndex || 0);
  const step = Number(card.dataset.step || 0);
  const current = cards[index];
  if (current?.prompt && current?.answer) {
    const hasSecondAnswer = Boolean(current.answer2 || current.pluralAnswer);
    if (hasSecondAnswer) {
      renderCourseExerciseCard(lessonId, step >= 2 ? (index + 1) % cards.length : index, step >= 2 ? 0 : step + 1);
    } else {
      renderCourseExerciseCard(lessonId, step > 0 ? (index + 1) % cards.length : index, step > 0 ? 0 : 1);
    }
    return;
  }
  const rawStep = Number(card.dataset.step || 0);
  const pairIndex = Math.floor(rawStep / 2);
  if (rawStep % 2 === 0) {
    if (pairIndex >= 2) {
      renderCourseExerciseCard(lessonId, (index + 1) % cards.length, 0);
    } else {
      renderCourseExerciseCard(lessonId, index, rawStep + 1);
    }
    return;
  }
  renderCourseExerciseCard(lessonId, index, rawStep + 1);
}function getCourseTranslateCards(lessonId) {
  const lessonNumber = String(lessonId || "").match(/\d+/)?.[0];
  if (!lessonNumber) return [];
  const legacyDecks = {
    lesson1: typeof lesson1TrainingCards !== "undefined" ? lesson1TrainingCards : [],
    lesson2: typeof lesson2TrainingCards !== "undefined" ? lesson2TrainingCards : [],
    lesson3: typeof lesson3TrainingCards !== "undefined" ? lesson3TrainingCards : [],
    lesson4: typeof lesson4TrainingCards !== "undefined" ? lesson4TrainingCards : [],
    lesson5: typeof lesson5TrainingCards !== "undefined" ? lesson5TrainingCards : [],
    lesson6: typeof lesson6TrainingCards !== "undefined" ? lesson6TrainingCards : []
  };
  const legacyDeck = legacyDecks[`lesson${lessonNumber}`];
  if (legacyDeck) return legacyDeck.map((card) => ({ lv: card.front || card.lv || "", de: card.back || card.de || "" }));
  const lesson = window.COURSE_LESSON_DATA?.[`kurssLesson${lessonNumber}`];
  return lesson?.sections?.find((section) => section.title === "Pārtulko" && Array.isArray(section.cards))?.cards || [];
}

function getCourseTranslateLessonIdFromCard(card) {
  if (!card) return "";
  if (card.dataset.lessonId) return card.dataset.lessonId;
  const legacyName = Array.from(card.attributes).map((attr) => attr.name).find((name) => /^data-lesson\d+-training-card$/.test(name));
  const lessonNumber = legacyName?.match(/\d+/)?.[0];
  return lessonNumber ? `lesson${lessonNumber}` : "";
}

function getCourseTranslateTarget(lessonNumber, lessonId) {
  const panel = elements[`kurssLesson${lessonNumber}`];
  return panel?.querySelector(`[data-course-translate-card][data-lesson-id="${lessonId}"]`) || panel?.querySelector(`[data-lesson${lessonNumber}-training-card]`);
}

function renderCourseTranslateCard(lessonId, index = 0, showingBack = false) {
  const lessonNumber = String(lessonId || "").match(/\d+/)?.[0];
  if (!lessonNumber) return;
  const normalizedLessonId = `lesson${lessonNumber}`;
  const target = getCourseTranslateTarget(lessonNumber, normalizedLessonId);
  const cards = getCourseTranslateCards(normalizedLessonId);
  if (!target || !cards.length) return;
  const safeIndex = ((index % cards.length) + cards.length) % cards.length;
  const card = cards[safeIndex];
  target.dataset.lessonId = normalizedLessonId;
  target.dataset.cardIndex = String(safeIndex);
  target.dataset.trainingIndex = String(safeIndex);
  target.dataset.showingBack = showingBack ? "true" : "false";
  target.innerHTML =
    '<span class="lesson1-training-progress">Lekcija ' + lessonNumber + ' · Pārtulko: ' + (safeIndex + 1) + ' / ' + cards.length + '</span>' +
    '<span class="lesson1-training-text">' + escapeHtml(card.lv || "") + '</span>' +
    (showingBack ? '<span class="lesson1-training-divider"></span><span class="lesson1-training-answer">' + escapeHtml(formatGermanEntry(card) || "") + '</span>' : '');
}

function handleCourseTranslateCardClick(card) {
  if (!card) return;
  const lessonId = getCourseTranslateLessonIdFromCard(card);
  const cards = getCourseTranslateCards(lessonId);
  if (!cards.length) return;
  const index = Number(card.dataset.cardIndex || card.dataset.trainingIndex || 0);
  const showingBack = card.dataset.showingBack === "true";
  renderCourseTranslateCard(lessonId, showingBack ? (index + 1) % cards.length : index, !showingBack);
}

function handleCourseLessonToggle(event) {
  const accordion = event.target;
  if (!accordion.matches(".lesson1-accordion") || !accordion.open) return;

  const lessonPanel = event.currentTarget;
  lessonPanel.querySelectorAll(".lesson1-accordion").forEach((item) => {
    if (item !== accordion) item.open = false;
  });

  accordion.scrollIntoView({ block: "start", behavior: "smooth" });
}

function lessonNumberClass(index) {
  return [
    "lesson1-number-red",
    "lesson1-number-green",
    "lesson1-number-purple",
    "lesson1-number-blue",
    "lesson1-number-orange"
  ][index] || "lesson1-number-blue";
}

function renderCourseLessonTable(table) {
  if (!Array.isArray(table) || table.length === 0) return "";
  return '<div class="lesson1-grammar-table">' + table.map((row) => {
    const cells = Array.isArray(row) ? row : [row];
    return '<div class="lesson1-grammar-row">' + cells.map((cell) => {
      return '<span>' + escapeHtml(cell).replace(/\n/g, "<br>") + '</span>';
    }).join("") + '</div>';
  }).join("") + '</div>';
}

function renderCourseLessonExamples(examples) {
  if (!Array.isArray(examples) || examples.length === 0) return "";
  return '<div class="lesson1-card-grid">' + examples.map((example) => {
    return '<div class="kurss-example">' + escapeHtml(example).replace(/\n/g, "<br>") + '</div>';
  }).join("") + '</div>';
}

function renderCourseLessonObject(item) {
  if (!item || typeof item !== "object") {
    return '<div class="kurss-example">' + escapeHtml(item ?? "").replace(/\n/g, "<br>") + '</div>';
  }

  if (Array.isArray(item)) {
    return renderCourseLessonTable(item);
  }

  if (Object.prototype.hasOwnProperty.call(item, "front") || Object.prototype.hasOwnProperty.call(item, "back")) {
    const frontHtml = escapeHtml(item.front || "").replace(/\n/g, "<br>");
    const backHtml = escapeHtml(item.back || "").replace(/\n/g, "<br>");
    return '<div class="kurss-example" role="button" tabindex="0" data-course-card-front="' + escapeHtml(frontHtml) + '" data-course-card-back="' + escapeHtml(backHtml) + '" data-showing-back="false">' + frontHtml + '</div>';
  }

  const heading = item.heading || item.title || "";
  const parts = [];

  if (heading) {
    parts.push('<div class="lesson1-grammar-heading">' + escapeHtml(heading) + '</div>');
  }

  if (item.text) {
    parts.push('<div class="lesson1-grammar-text">' + escapeHtml(item.text).replace(/\n/g, "<br>") + '</div>');
  }

  if (Array.isArray(item.table)) {
    parts.push(renderCourseLessonTable(item.table));
  }

  if (Array.isArray(item.rows)) {
    parts.push(renderCourseLessonTable(item.rows));
  }

  if (Array.isArray(item.examples)) {
    parts.push(renderCourseLessonExamples(item.examples));
  }

  if (Array.isArray(item.items)) {
    parts.push(renderCourseLessonItems(item.items));
  }

  if (!parts.length) {
    parts.push('<div class="kurss-example">' + escapeHtml(JSON.stringify(item)).replace(/\n/g, "<br>") + '</div>');
  }

  return '<div class="lesson1-grammar-block">' + parts.join("") + '</div>';
}

function renderCourseLessonItems(items) {
  if (!Array.isArray(items) || items.length === 0) return "";
  const hasStructuredItems = items.some((item) => item && typeof item === "object");

  if (hasStructuredItems) {
    return '<div class="lesson1-structured-content">' + items.map((item) => {
      return renderCourseLessonObject(item);
    }).join("") + '</div>';
  }

  return '<div class="lesson1-card-grid">' + items.map((item) => {
    return '<div class="kurss-example">' + escapeHtml(item).replace(/\n/g, "<br>") + '</div>';
  }).join("") + '</div>';
}

function renderCourseLessonFromData(target, lesson, exerciseAttribute) {
  if (target && lesson?.legacyHtml) {
    target.innerHTML = lesson.legacyHtml;
    return;
  }
  if (!target || !lesson || !Array.isArray(lesson.sections)) return;
  const intro = lesson.intro || lesson.description || "";
  const sectionsHtml = lesson.sections.map((section, index) => {
    const isExercise = Array.isArray(section.cards);
    const openAttr = index === 0 ? " open" : "";
    const numberClass = lessonNumberClass(index);
    const contentClass = section.title === "Gramatika" ? "lesson1-content lesson1-grammar-content" : "lesson1-content";
    const bodyParts = [];
    if (section.description && !isExercise) {
      bodyParts.push('<p class="kurss-lesson-intro">' + escapeHtml(section.description) + '</p>');
    }
    if (isExercise) {
      let attr = exerciseAttribute || "data-course-exercise-card";
      let hint = "Pieskaries kartītei, lai redzētu atbildi.";
      if (section.title === "Vingrinājums") {
        attr = 'data-course-exercise-card data-lesson-id="' + escapeHtml(lesson.id || "") + '"';
        hint = "Pieskaries kartītei, lai turpinātu.";
      }
      if (section.title === "Pārtulko") {
        attr = 'data-course-translate-card data-lesson-id="' + escapeHtml(lesson.id || "") + '"';
        hint = "Pieskaries kartītei, lai redzētu vācu tulkojumu.";
      }
      if (lesson.id === "lesson9" && section.title === "Übung / Vingrinājums") {
        attr = "data-lesson9-exercise-card";
        hint = "Pieskaries kartītei, lai pārietu uz nākamo soli.";
      }      bodyParts.push('<div class="lesson1-training-wrap"><button class="lesson1-training-flashcard" type="button" ' + attr + ' data-training-index="0" data-showing-back="false" aria-label="' + escapeHtml(lesson.title + ' vingrinājuma kartīte') + '"></button><p class="lesson1-training-hint">' + hint + '</p></div>');
    } else {
      bodyParts.push(renderCourseLessonItems(section.items));
    }
    return '<details class="lesson1-accordion"' + openAttr + '><summary><span class="lesson1-number ' + numberClass + '">' + (index + 1) + '.</span><span>' + escapeHtml(section.title) + '</span><span class="lesson1-chevron">⌄</span></summary><div class="' + contentClass + '">' + bodyParts.join("") + '</div></details>';
  }).join("");
  target.innerHTML = '<h3>' + escapeHtml(lesson.title) + '</h3>' + (intro ? '<p class="kurss-lesson-intro">' + escapeHtml(intro) + '</p>' : "") + sectionsHtml;
}

function pamatiVerbSlide(infinitiv, lv, rows) {
  const body = rows.map(([person, lvPronoun, form, lvVerb]) =>
    `<div class="pamati-row pamati-verb-row"><span class="pamati-term">${person}</span><span>${lvPronoun}</span><span class="pamati-form">${form}</span><span>${lvVerb}</span></div>`
  ).join("");
  return `<section class="pamati-slide pamati-verb-slide">
    <h3>${infinitiv}</h3>
    <p class="pamati-slide-subtitle">${lv} — tagadne (Präsens)</p>
    <article class="pamati-card verb">
      <header><h4>${infinitiv}</h4><span class="pamati-card-question">${lv}</span></header>
      <div class="pamati-rows">
        <div class="pamati-row pamati-verb-row pamati-row-header"><span>Persona</span><span>Latviski</span><span>Forma</span><span>Tulkojums</span></div>
        ${body}
      </div>
    </article>
    <div class="pamati-info"><span class="pamati-info-icon">i</span><div><p>Darbības vārdu locīšanā galvenā uzmanība — uz <strong>personas galotni</strong> (pēdējo zilbi).</p></div></div>
  </section>`;
}

function buildPamatiSlides() {
  return [
  `<section class="pamati-slide pamati-articles">
    <h3>Noteiktie artikuli</h3>
    <p class="pamati-slide-subtitle">Der, die, das — trīs dzimtes un daudzskaitlis</p>
    <div class="pamati-card-grid pamati-card-grid-4">
      <article class="pamati-card der">
        <header><h4>der</h4><span class="pamati-card-question">vīriešu dzimte</span></header>
        <div class="pamati-rows">
          <div class="pamati-row"><span class="pamati-term">der</span><span>vīriešu dzimte</span></div>
        </div>
        <div class="pamati-card-example"><strong>der Mann</strong> — vīrietis</div>
      </article>
      <article class="pamati-card die">
        <header><h4>die</h4><span class="pamati-card-question">sieviešu dzimte</span></header>
        <div class="pamati-rows">
          <div class="pamati-row"><span class="pamati-term">die</span><span>sieviešu dzimte</span></div>
        </div>
        <div class="pamati-card-example"><strong>die Frau</strong> — sieviete</div>
      </article>
      <article class="pamati-card das">
        <header><h4>das</h4><span class="pamati-card-question">nekatrā dzimte</span></header>
        <div class="pamati-rows">
          <div class="pamati-row"><span class="pamati-term">das</span><span>nekatrā dzimte</span></div>
        </div>
        <div class="pamati-card-example"><strong>das Kind</strong> — bērns</div>
      </article>
      <article class="pamati-card plural">
        <header><h4>die</h4><span class="pamati-card-question">daudzskaitlis</span></header>
        <div class="pamati-rows">
          <div class="pamati-row"><span class="pamati-term">die</span><span>daudzskaitlis</span></div>
        </div>
        <div class="pamati-card-example"><strong>die Kinder</strong> — bērni</div>
      </article>
    </div>
    <div class="pamati-info"><span class="pamati-info-icon">i</span><div><p>Vācu artikuls ne vienmēr sakrīt ar latviešu dzimti. Lietvārdus vislabāk mācīties <strong>kopā ar artikulu</strong>.</p></div></div>
  </section>`,
  `<section class="pamati-slide pamati-sentence">
    <h3>Vienkārša teikuma secība</h3>
    <p class="pamati-slide-subtitle">Darbības vārds parasti ir otrajā teikuma vietā</p>
    <article class="pamati-card structure">
      <header><h4>Teikuma formula</h4><span class="pamati-card-question">1. vieta → 2. vieta → pārējais</span></header>
      <div class="pamati-rows">
        <div class="pamati-row pamati-row-3 pamati-row-header"><span>1. vieta</span><span>2. vieta</span><span>Pārējais</span></div>
        <div class="pamati-row pamati-row-3"><span class="pamati-term">Ich</span><span class="pamati-form">lerne</span><span>Deutsch.</span></div>
        <div class="pamati-row pamati-row-3"><span class="pamati-term">Heute</span><span class="pamati-form">lerne</span><span>ich Deutsch.</span></div>
        <div class="pamati-row pamati-row-3"><span class="pamati-term">Wir</span><span class="pamati-form">kommen</span><span>morgen.</span></div>
      </div>
    </article>
    <h4 class="pamati-examples-title">Piemēri</h4>
    <div class="pamati-examples">
      <div class="pamati-example"><div class="pamati-example-labels"><span class="case-blue">Apgalvojums</span><span>Latviski</span></div><div class="pamati-example-line"><span>Du <span class="pamati-form">kommst</span>.</span><span>Tu nāc.</span></div></div>
      <div class="pamati-example"><div class="pamati-example-labels"><span class="case-red">Jautājums</span><span>Latviski</span></div><div class="pamati-example-line"><span><span class="pamati-form">Kommst</span> du?</span><span>Vai tu nāc?</span></div></div>
    </div>
    <div class="pamati-note"><strong>Atceries!</strong><p>Ja teikuma sākumā ir laiks vai vieta (*Heute*, *morgen*), darbības vārds joprojām paliek <strong>otrajā vietā</strong>.</p></div>
  </section>`,
  `<section class="pamati-slide pamati-pronouns">
    <h3>Vietniekvārdi</h3>
    <p class="pamati-slide-subtitle">Nominativ, Akkusativ un Dativ — vietniekvārdu formas</p>
    <div class="pamati-card-grid">
      <article class="pamati-card nominativ">
        <header><h4>Nominativ</h4><span class="pamati-card-question">kas?</span></header>
        <div class="pamati-rows">
          <div class="pamati-row"><span class="pamati-term">ich</span><span>es</span></div>
          <div class="pamati-row"><span class="pamati-term">du</span><span>tu</span></div>
          <div class="pamati-row"><span class="pamati-term">er</span><span>viņš</span></div>
          <div class="pamati-row"><span class="pamati-term">sie</span><span>viņa</span></div>
          <div class="pamati-row"><span class="pamati-term">es</span><span>tas</span></div>
          <div class="pamati-row"><span class="pamati-term">wir</span><span>mēs</span></div>
          <div class="pamati-row"><span class="pamati-term">ihr</span><span>jūs</span></div>
          <div class="pamati-row"><span class="pamati-term">sie</span><span>viņi / viņas</span></div>
          <div class="pamati-row"><span class="pamati-term">Sie</span><span>Jūs (pieklājības)</span></div>
        </div>
      </article>
      <article class="pamati-card akkusativ">
        <header><h4>Akkusativ</h4><span class="pamati-card-question">ko?</span></header>
        <div class="pamati-rows">
          <div class="pamati-row"><span class="pamati-term">mich</span><span>mani</span></div>
          <div class="pamati-row"><span class="pamati-term">dich</span><span>tevi</span></div>
          <div class="pamati-row"><span class="pamati-term">ihn</span><span>viņu (v.)</span></div>
          <div class="pamati-row"><span class="pamati-term">sie</span><span>viņu (s.)</span></div>
          <div class="pamati-row"><span class="pamati-term">es</span><span>to</span></div>
          <div class="pamati-row"><span class="pamati-term">uns</span><span>mūs</span></div>
          <div class="pamati-row"><span class="pamati-term">euch</span><span>jūs</span></div>
          <div class="pamati-row"><span class="pamati-term">sie</span><span>viņus / viņas</span></div>
          <div class="pamati-row"><span class="pamati-term">Sie</span><span>Jūs (pieklājības)</span></div>
        </div>
      </article>
      <article class="pamati-card dativ">
        <header><h4>Dativ</h4><span class="pamati-card-question">kam?</span></header>
        <div class="pamati-rows">
          <div class="pamati-row"><span class="pamati-term">mir</span><span>man</span></div>
          <div class="pamati-row"><span class="pamati-term">dir</span><span>tev</span></div>
          <div class="pamati-row"><span class="pamati-term">ihm</span><span>viņam</span></div>
          <div class="pamati-row"><span class="pamati-term">ihr</span><span>viņai</span></div>
          <div class="pamati-row"><span class="pamati-term">ihm</span><span>tam</span></div>
          <div class="pamati-row"><span class="pamati-term">uns</span><span>mums</span></div>
          <div class="pamati-row"><span class="pamati-term">euch</span><span>jums</span></div>
          <div class="pamati-row"><span class="pamati-term">ihnen</span><span>viņiem / viņām</span></div>
          <div class="pamati-row"><span class="pamati-term">Ihnen</span><span>Jums (pieklājības)</span></div>
        </div>
      </article>
    </div>
    <div class="pamati-info"><span class="pamati-info-icon">i</span><div><p>Vietniekvārda forma mainās atkarībā no teikuma nozīmes:</p><div class="pamati-case-lines"><span><span class="case-blue">Nominativ</span> — teikuma priekšmets (kas dara?)</span><span><span class="case-red">Akkusativ</span> — tiešais objekts (ko?)</span><span><span class="case-green">Dativ</span> — netiešais objekts (kam?)</span></div></div></div>
    <h4 class="pamati-examples-title">Piemēri</h4>
    <div class="pamati-examples">
      <div class="pamati-example"><div class="pamati-example-labels"><span class="case-blue">Nominativ</span><span class="case-red">Akkusativ</span><span>Latviski</span></div><div class="pamati-example-line"><span>Ich sehe <span class="case-red">dich</span>.</span><span>Es tevi redzu.</span></div></div>
      <div class="pamati-example"><div class="pamati-example-labels"><span class="case-blue">Nominativ</span><span class="case-red">Akkusativ</span><span>Latviski</span></div><div class="pamati-example-line"><span>Ich sehe <span class="case-red">ihn</span>.</span><span>Es viņu redzu.</span></div></div>
      <div class="pamati-example"><div class="pamati-example-labels"><span class="case-blue">Nominativ</span><span class="case-red">Akkusativ</span><span>Latviski</span></div><div class="pamati-example-line"><span>Wir mögen <span class="case-red">euch</span>.</span><span>Mums jūs patīkat.</span></div></div>
      <div class="pamati-example"><div class="pamati-example-labels"><span class="case-blue">Nominativ</span><span class="case-green">Dativ</span><span>Latviski</span></div><div class="pamati-example-line"><span>Ich helfe <span class="case-green">dir</span>.</span><span>Es tev palīdzu.</span></div></div>
      <div class="pamati-example"><div class="pamati-example-labels"><span class="case-blue">Nominativ</span><span class="case-green">Dativ</span><span>Latviski</span></div><div class="pamati-example-line"><span>Ich gebe <span class="case-green">ihm</span> ein Buch.</span><span>Es dodu viņam grāmatu.</span></div></div>
      <div class="pamati-example"><div class="pamati-example-labels"><span class="case-blue">Nominativ</span><span class="case-green">Dativ</span><span>Latviski</span></div><div class="pamati-example-line"><span>Wir danken <span class="case-green">euch</span>.</span><span>Mēs jums pateicamies.</span></div></div>
    </div>
    <div class="pamati-note"><strong>Atceries!</strong><p>Nominativ vienmēr ir teikuma priekšmets, bet Akkusativ un Dativ — objekti. Skaties uz darbības vārdu un jautā: <span class="case-red">ko?</span> vai <span class="case-green">kam?</span></p></div>
  </section>`,
  pamatiVerbSlide("kommen", "nākt", [
    ["Ich", "es", "komme", "nāku"],
    ["Du", "tu", "kommst", "nāc"],
    ["Er", "viņš", "kommt", "nāk"],
    ["Sie", "viņa", "kommt", "nāk"],
    ["Es", "tas", "kommt", "nāk"],
    ["Wir", "mēs", "kommen", "nākam"],
    ["Ihr", "jūs", "kommt", "nākat"],
    ["Sie", "viņi", "kommen", "nāk"],
    ["Sie", "Jūs", "kommen", "nākat"]
  ]),
  pamatiVerbSlide("gehen", "iet", [
    ["Ich", "es", "gehe", "eju"],
    ["Du", "tu", "gehst", "ej"],
    ["Er", "viņš", "geht", "iet"],
    ["Sie", "viņa", "geht", "iet"],
    ["Es", "tas", "geht", "iet"],
    ["Wir", "mēs", "gehen", "ejam"],
    ["Ihr", "jūs", "geht", "ejat"],
    ["Sie", "viņi", "gehen", "iet"],
    ["Sie", "Jūs", "gehen", "ejat"]
  ]),
  pamatiVerbSlide("stehen", "stāvēt", [
    ["Ich", "es", "stehe", "stāvu"],
    ["Du", "tu", "stehst", "stāvi"],
    ["Er", "viņš", "steht", "stāv"],
    ["Sie", "viņa", "steht", "stāv"],
    ["Es", "tas", "steht", "stāv"],
    ["Wir", "mēs", "stehen", "stāvam"],
    ["Ihr", "jūs", "steht", "stāvat"],
    ["Sie", "viņi", "stehen", "stāv"],
    ["Sie", "Jūs", "stehen", "stāvat"]
  ]),
  pamatiVerbSlide("singen", "dziedāt", [
    ["Ich", "es", "singe", "dziedu"],
    ["Du", "tu", "singst", "dziedi"],
    ["Er", "viņš", "singt", "dzied"],
    ["Sie", "viņa", "singt", "dzied"],
    ["Es", "tas", "singt", "dzied"],
    ["Wir", "mēs", "singen", "dziedam"],
    ["Ihr", "jūs", "singt", "dziedat"],
    ["Sie", "viņi", "singen", "dzied"],
    ["Sie", "Jūs", "singen", "dziedat"]
  ]),
  pamatiVerbSlide("arbeiten", "strādāt", [
    ["Ich", "es", "arbeite", "strādāju"],
    ["Du", "tu", "arbeitest", "strādā"],
    ["Er", "viņš", "arbeitet", "strādā"],
    ["Sie", "viņa", "arbeitet", "strādā"],
    ["Es", "tas", "arbeitet", "strādā"],
    ["Wir", "mēs", "arbeiten", "strādājam"],
    ["Ihr", "jūs", "arbeitet", "strādājat"],
    ["Sie", "viņi", "arbeiten", "strādā"],
    ["Sie", "Jūs", "arbeiten", "strādājat"]
  ]),
  pamatiVerbSlide("rechnen", "rēķināt", [
    ["Ich", "es", "rechne", "rēķinu"],
    ["Du", "tu", "rechnest", "rēķini"],
    ["Er", "viņš", "rechnet", "rēķina"],
    ["Sie", "viņa", "rechnet", "rēķina"],
    ["Es", "tas", "rechnet", "rēķina"],
    ["Wir", "mēs", "rechnen", "rēķinām"],
    ["Ihr", "jūs", "rechnet", "rēķināt"],
    ["Sie", "viņi", "rechnen", "rēķina"],
    ["Sie", "Jūs", "rechnen", "rēķināt"]
  ]),
  pamatiVerbSlide("tun", "darīt", [
    ["Ich", "es", "tue", "daru"],
    ["Du", "tu", "tust", "dari"],
    ["Er", "viņš", "tut", "dara"],
    ["Sie", "viņa", "tut", "dara"],
    ["Es", "tas", "tut", "dara"],
    ["Wir", "mēs", "tun", "darām"],
    ["Ihr", "jūs", "tut", "darāt"],
    ["Sie", "viņi", "tun", "dara"],
    ["Sie", "Jūs", "tun", "darāt"]
  ])
  ];
}

let pamatiSlides = null;

function getPamatiSlides() {
  if (!pamatiSlides) {
    pamatiSlides = buildPamatiSlides();
  }
  return pamatiSlides;
}

let pamatiIndex = 0;

function renderPamati() {
  if (!elements.pamatiContent || !elements.pamatiCounter) return;
  const slides = getPamatiSlides();
  elements.pamatiContent.innerHTML = slides[pamatiIndex];
  elements.pamatiCounter.textContent = `${pamatiIndex + 1} / ${slides.length}`;
}

function openPamati() {
  pamatiIndex = 0;
  renderPamati();
  elements.pamatiPanel.hidden = false;
}

function closePamati() {
  elements.pamatiPanel.hidden = true;
}

function previousPamati() {
  const slides = getPamatiSlides();
  pamatiIndex = (pamatiIndex - 1 + slides.length) % slides.length;
  renderPamati();
}

function nextPamati() {
  const slides = getPamatiSlides();
  pamatiIndex = (pamatiIndex + 1) % slides.length;
  renderPamati();
}
function scrollKurssPanelToTop() {
  elements.kurssPanel?.querySelector(".kurss-panel")?.scrollTo({ top: 0, behavior: "auto" });
}

function hideAllKurssPanels() {
  if (elements.kurssList) elements.kurssList.hidden = true;
  if (elements.kurssTip) elements.kurssTip.hidden = true;
  if (elements.kurssFooterLinks) elements.kurssFooterLinks.hidden = true;
  [
    "kurssPronunciationMenu",
    "kurssLessonsMenu",
    "kurssArticlesLesson",
    "kurssPronunciationLesson",
    "kurssConsonantsLesson",
    "kurssVerbBasicsLesson",
    "kurssSentenceStructureLesson"
  ].forEach((panelId) => {
    if (elements[panelId]) elements[panelId].hidden = true;
  });
  hideCourseLessonPanels(null);
}

function showKurssMenu() {
  elements.kurssBackBtn.textContent = "‹ Kurss";
  elements.kurssTitle.textContent = "Kurss";
  elements.kurssSubtitle.textContent = "Vācu valodas pamati soli pa solim";
  hideAllKurssPanels();
  elements.kurssList.hidden = false;
  elements.kurssTip.hidden = false;
  if (elements.kurssFooterLinks) elements.kurssFooterLinks.hidden = false;
  scrollKurssPanelToTop();
}

function initStaticCourseLessons() {
  const htmlMap = window.COURSE_LESSON_HTML || {};
  [
    "kurssArticlesLesson",
    "kurssPronunciationLesson",
    "kurssConsonantsLesson",
    "kurssVerbBasicsLesson",
    "kurssSentenceStructureLesson"
  ].forEach((panelId) => {
    const target = elements[panelId];
    const html = htmlMap[panelId];
    if (target && html && !target.innerHTML.trim()) {
      target.innerHTML = html;
    }
  });
}

function openKurss() {
  showKurssMenu();
  elements.kurssPanel.hidden = false;
}

function closeKurss() {
  elements.kurssPanel.hidden = true;
  showKurssMenu();
}


function openArticlesLesson() {
  hideAllKurssPanels();
  elements.kurssTitle.textContent = "Artikuli";
  elements.kurssSubtitle.textContent = "Der, die, das un lietojuma pamati.";
  elements.kurssArticlesLesson.hidden = false;
  scrollKurssPanelToTop();
}

function openPronunciationLesson() {
  hideAllKurssPanels();
  elements.kurssTitle.textContent = "Izruna";
  elements.kurssSubtitle.textContent = "Vācu valodas skaņas un izrunas pamati";
  elements.kurssPronunciationMenu.hidden = false;
  scrollKurssPanelToTop();
}

function openVowelsLesson() {
  hideAllKurssPanels();
  elements.kurssTitle.textContent = "Izruna";
  elements.kurssSubtitle.textContent = "Patskaņi — garš un īss";
  elements.kurssPronunciationLesson.hidden = false;
  scrollKurssPanelToTop();
}

function openConsonantsLesson() {
  hideAllKurssPanels();
  elements.kurssTitle.textContent = "Izruna";
  elements.kurssSubtitle.textContent = "Līdzskaņi un burtu savienojumi";
  elements.kurssConsonantsLesson.hidden = false;
  scrollKurssPanelToTop();
}

function openLessonsMenu() {
  hideAllKurssPanels();
  elements.kurssBackBtn.textContent = "‹ Kurss";
  elements.kurssTitle.textContent = "Lekcijas";
  elements.kurssSubtitle.textContent = "Mācību lekcijas secīgā kārtībā no 1 līdz 39.";
  elements.kurssLessonsMenu.hidden = false;
  scrollKurssPanelToTop();
}

const lesson1TrainingCards = [
  { front: "Vai tu nāc?", back: "Kommst du?" },
  { front: "Jā, es nāku.", back: "Ja, ich komme." },
  { front: "Kas dzied?", back: "Wer singt?" },
  { front: "Marta dzied.", back: "Marta singt." },
  { front: "Vai viņi iet?", back: "Gehen sie?" },
  { front: "Jā, viņi iet.", back: "Ja, sie gehen." },
  { front: "Vai viņš stāv?", back: "Steht er?" },
  { front: "Jā, viņš stāv.", back: "Ja, er steht." },
  { front: "Mēs ejam.", back: "Wir gehen." },
  { front: "Vai jūs ejat?", back: "Geht ihr?" },
  { front: "Albert un Marta nāk un iet.", back: "Albert und Marta kommen und gehen." }
];
const lesson2TrainingCards = [
  { front: "Kas jautā?", back: "Wer fragt?" },
  { front: "Pauls jautā.", back: "Paul fragt." },
  { front: "Viņi jautā.", back: "Sie fragen." },
  { front: "Vai Pauls atbild?", back: "Antwortet Paul?" },
  { front: "Nē, viņš neatbild, viņš jautā.", back: "Nein, er antwortet nicht, er fragt." },
  { front: "Vai Pauls un Marija dzied?", back: "Singen Paul und Marie?" },
  { front: "Nē, viņi nedzied, viņi rēķina.", back: "Nein, sie singen nicht, sie rechnen." },
  { front: "Ko tu dari?", back: "Was tust du?" },
  { front: "Es stāvu un dziedu.", back: "Ich stehe und singe." },
  { front: "Vai jūs zīmējat?", back: "Zeichnet ihr?" },
  { front: "Jā, mēs zīmējam, bet Marija spēlē.", back: "Ja, wir zeichnen, aber Marie spielt." },
  { front: "Ko jūs darāt?", back: "Was tut ihr?" },
  { front: "Mēs nākam un atbildam.", back: "Wir kommen und antworten." },
  { front: "Kas iet?", back: "Wer geht?" },
  { front: "Mēs ejam.", back: "Wir gehen." }
];

const lesson3TrainingCards = [
  { front: "Vai tu rēķini?", back: "Rechnest du?" },
  { front: "Nē, es nerēķinu, es zīmēju.", back: "Nein, ich rechne nicht, ich zeichne." },
  { front: "Kas tur stāv?", back: "Was steht dort?" },
  { front: "Tur stāv galds.", back: "Dort steht ein Tisch." },
  { front: "Kas še atrodas?", back: "Was liegt hier?" },
  { front: "Še atrodas grāmata.", back: "Hier liegt ein Buch." },
  { front: "Vai grāmata ir plāna?", back: "Ist das Buch dünn?" },
  { front: "Nē, grāmata ir bieza.", back: "Nein, das Buch ist dick." },
  { front: "Kas ir plāns?", back: "Was ist dünn?" },
  { front: "Burtnīca ir plāna.", back: "Das Heft ist dünn." },
  { front: "Kāds ir sols?", back: "Wie ist die Bank?" },
  { front: "Sols ir zems.", back: "Die Bank ist niedrig." },
  { front: "Kāds ir galds?", back: "Wie ist der Tisch?" },
  { front: "Galds ir augsts.", back: "Der Tisch ist hoch." },
  { front: "Vai tur ir / atrodas burtnīca?", back: "Liegt dort ein Heft?" },
  { front: "Jā, tur atrodas burtnīca.", back: "Ja, dort liegt ein Heft." },
  { front: "Vai Pauls nāk?", back: "Kommt Paul?" },
  { front: "Nē, Pauls nenāk, viņš stāv.", back: "Nein, Paul kommt nicht, er steht." },
  { front: "Kas še karājas?", back: "Was hängt hier?" },
  { front: "Še karājas bilde.", back: "Hier hängt ein Bild." },
  { front: "Kas tur karājas?", back: "Was hängt dort?" },
  { front: "Tur karājas tāfele.", back: "Dort hängt eine Tafel." }
];
const lesson4TrainingCards = [
  { front: "Meitene ņem spalvas kātu.", back: "Das Mädchen nimmt einen Federhalter." },
  { front: "Spalvas kāts nav balts, viņš ir melns.", back: "Der Federhalter ist nicht weiß, er ist schwarz." },
  { front: "Pauls ņem spalvu.", back: "Paul nimmt eine Feder." },
  { front: "Kāda ir spalva?", back: "Wie ist die Feder?" },
  { front: "Vai spalva ir smaila?", back: "Ist die Feder spitz?" },
  { front: "Vai viņš ņem nazi?", back: "Nimmt er ein Messer?" },
  { front: "Nē, viņš ņem spalvu.", back: "Nein, er nimmt eine Feder." },
  { front: "Viņš noliek spalvu.", back: "Er legt die Feder hin." },
  { front: "Vai nazis ir neass?", back: "Ist das Messer stumpf?" },
  { front: "Nē, tas ir ass.", back: "Nein, es ist scharf." },
  { front: "Ko dara meitene?", back: "Was tut das Mädchen?" },
  { front: "Viņa iet ārā un strādā.", back: "Es geht hinaus und arbeitet." },
  { front: "Ko Olga rāda?", back: "Was zeigt Olga?" },
  { front: "Olga rāda grāmatu.", back: "Olga zeigt ein Buch." },
  { front: "Kāda ir grāmata?", back: "Wie ist das Buch?" },
  { front: "Grāmata ir maza.", back: "Das Buch ist klein." }
];
const lesson5TrainingCards = [
  { front: "Ko mīl tēvs?", back: "Wen liebt der Vater?" },
  { front: "Ko slavē skolotāja?", back: "Wen lobt die Lehrerin?" },
  { front: "Ko tu ņem?", back: "Was nimmst du?" },
  { front: "Kam tu jautā?", back: "Wen fragst du?" },
  { front: "Ko peļ skolotājs?", back: "Wen tadelt der Lehrer?" },
  { front: "Skolotājs jautā skolniekam.", back: "Der Lehrer fragt den Schüler." },
  { front: "Kā skolnieks atbild?", back: "Wie antwortet der Schüler?" },
  { front: "Skolnieks atbild slikti.", back: "Der Schüler antwortet schlecht." },
  { front: "Vai skolniece atbild slikti?", back: "Antwortet die Schülerin schlecht?" },
  { front: "Nē, skolniece neatbild slikti, viņa atbild labi.", back: "Nein, die Schülerin antwortet nicht schlecht, sie antwortet gut." },
  { front: "Meitene ņem spalvas kātu, spalvu un nazi.", back: "Das Mädchen nimmt den Federhalter, die Feder und das Messer." },
  { front: "Viņa noliek nazi un spalvas kātu.", back: "Sie legt das Messer und den Federhalter hin." },
  { front: "Meitene iziet ārā un strādā.", back: "Das Mädchen geht hinaus und arbeitet." },
  { front: "Kāds ir bērns?", back: "Wie ist das Kind?" },
  { front: "Bērns ir rātns.", back: "Das Kind ist artig." },
  { front: "Tēvs un māte mīl bērnu.", back: "Der Vater und die Mutter lieben das Kind." }
];
const lesson6TrainingCards = [
  { front: "Pauls ņem zīmuli un zīmē.", back: "Paul nimmt einen Bleistift und zeichnet." },
  { front: "Ko viņš zīmē?", back: "Was zeichnet er?" },
  { front: "Viņš zīmē spaini.", back: "Er zeichnet einen Eimer." },
  { front: "Kas zīmē ratus?", back: "Wer zeichnet einen Wagen?" },
  { front: "Meitene zīmē ragavas.", back: "Das Mädchen zeichnet einen Schlitten." },
  { front: "Cik adatu ir šeit?", back: "Wieviel Nadeln sind hier?" },
  { front: "Šeit ir sešas adatas.", back: "Hier sind sechs Nadeln." },
  { front: "Cik šķīvju?", back: "Wieviel Teller?" },
  { front: "Es ņemu trīs adatas.", back: "Ich nehme drei Nadeln." },
  { front: "Es nolieku divas adatas.", back: "Ich lege zwei Nadeln hin." },
  { front: "Kas skaita nažus un šķīvjus?", back: "Wer zählt die Messer und die Teller?" },
  { front: "Tas ir vāks.", back: "Das ist ein Deckel." },
  { front: "Tie ir vāki.", back: "Das sind Deckel." },
  { front: "Tā ir spalva.", back: "Das ist eine Feder." },
  { front: "Tās ir spalvas.", back: "Das sind Federn." },
  { front: "Ko dara skolotājs?", back: "Was tut der Lehrer?" },
  { front: "Skolotājs ņem nazi un uzsmailina zīmuli.", back: "Der Lehrer nimmt ein Messer und spitzt den Bleistift an." },
  { front: "Kas tas ir?", back: "Was ist das?" },
  { front: "Tas ir spalvaskāts.", back: "Das ist ein Federhalter." },
  { front: "Kāds ir spalvaskāts?", back: "Wie ist der Federhalter?" },
  { front: "Spalvaskāts ir melns.", back: "Der Federhalter ist schwarz." }
];

const lesson7ExerciseCards = [
  { infinitive: "fragen", lv: "jautāt", du: "frag! / frage!", ihr: "fragt!", sie: "fragen Sie!" },
  { infinitive: "antworten", lv: "atbildēt", du: "antworte!", ihr: "antwortet!", sie: "antworten Sie!" },
  { infinitive: "loben", lv: "slavēt", du: "lob! / lobe!", ihr: "lobt!", sie: "loben Sie!" },
  { infinitive: "lieben", lv: "mīlēt", du: "lieb! / liebe!", ihr: "liebt!", sie: "lieben Sie!" },
  { infinitive: "zählen", lv: "skaitīt", du: "zähl! / zähle!", ihr: "zählt!", sie: "zählen Sie!" },
  { infinitive: "zeigen", lv: "rādīt", du: "zeig! / zeige!", ihr: "zeigt!", sie: "zeigen Sie!" },
  { infinitive: "zeichnen", lv: "zīmēt", du: "zeichne!", ihr: "zeichnet!", sie: "zeichnen Sie!" },
  { infinitive: "rechnen", lv: "rēķināt", du: "rechne!", ihr: "rechnet!", sie: "rechnen Sie!" },
  { infinitive: "arbeiten", lv: "strādāt", du: "arbeite!", ihr: "arbeitet!", sie: "arbeiten Sie!" },
  { infinitive: "kommen", lv: "nākt", du: "komm! / komme!", ihr: "kommt!", sie: "kommen Sie!" },
  { infinitive: "gehen", lv: "iet", du: "geh! / gehe!", ihr: "geht!", sie: "gehen Sie!" },
  { infinitive: "stehen", lv: "stāvēt", du: "steh! / stehe!", ihr: "steht!", sie: "stehen Sie!" },
  { infinitive: "öffnen", lv: "atvērt", du: "öffne!", ihr: "öffnet!", sie: "öffnen Sie!" },
  { infinitive: "singen", lv: "dziedāt", du: "sing! / singe!", ihr: "singt!", sie: "singen Sie!" },
  { infinitive: "tun", lv: "darīt", du: "tu!", ihr: "tut!", sie: "tun Sie!" },
  { infinitive: "nehmen", lv: "ņemt", du: "nimm!", ihr: "nehmt!", sie: "nehmen Sie!" }
];
function renderLesson1TrainingCard(index = 0, showingBack = false) {
  const card = elements.kurssLesson1.querySelector("[data-lesson1-training-card]");
  if (!card) return;
  const safeIndex = ((index % lesson1TrainingCards.length) + lesson1TrainingCards.length) % lesson1TrainingCards.length;
  const item = lesson1TrainingCards[safeIndex];
  card.dataset.trainingIndex = String(safeIndex);
  card.dataset.showingBack = showingBack ? "true" : "false";
  const answerHtml = showingBack ? `<span class="lesson1-training-divider" aria-hidden="true"></span><span class="lesson1-training-answer">${item.back}</span>` : "";
  card.innerHTML = `<span class="lesson1-training-progress">Lekcija 1 · Pārtulko: ${safeIndex + 1} / ${lesson1TrainingCards.length}</span><span class="lesson1-training-text">${item.front}</span>${answerHtml}`;
}

function handleLesson1TrainingCardClick(card) {
  const currentIndex = Number(card.dataset.trainingIndex || "0");
  const showingBack = card.dataset.showingBack === "true";
  if (showingBack) {
    renderLesson1TrainingCard(currentIndex + 1, false);
  } else {
    renderLesson1TrainingCard(currentIndex, true);
  }
}


function renderLesson2TrainingCard(index = 0, showingBack = false) {
  const card = elements.kurssLesson2.querySelector("[data-lesson2-training-card]");
  if (!card) return;
  const safeIndex = ((index % lesson2TrainingCards.length) + lesson2TrainingCards.length) % lesson2TrainingCards.length;
  const item = lesson2TrainingCards[safeIndex];
  card.dataset.trainingIndex = String(safeIndex);
  card.dataset.showingBack = showingBack ? "true" : "false";
  const answerHtml = showingBack ? `<span class="lesson1-training-divider" aria-hidden="true"></span><span class="lesson1-training-answer">${item.back}</span>` : "";
  card.innerHTML = `<span class="lesson1-training-progress">Lekcija 2 · Pārtulko: ${safeIndex + 1} / ${lesson2TrainingCards.length}</span><span class="lesson1-training-text">${item.front}</span>${answerHtml}`;
}

function handleLesson2TrainingCardClick(card) {
  const currentIndex = Number(card.dataset.trainingIndex || "0");
  const showingBack = card.dataset.showingBack === "true";
  if (showingBack) {
    renderLesson2TrainingCard(currentIndex + 1, false);
  } else {
    renderLesson2TrainingCard(currentIndex, true);
  }
}
function renderLesson3TrainingCard(index = 0, showingBack = false) {
  const card = elements.kurssLesson3.querySelector("[data-lesson3-training-card]");
  if (!card) return;
  const safeIndex = ((index % lesson3TrainingCards.length) + lesson3TrainingCards.length) % lesson3TrainingCards.length;
  const item = lesson3TrainingCards[safeIndex];
  card.dataset.trainingIndex = String(safeIndex);
  card.dataset.showingBack = showingBack ? "true" : "false";
  const answerHtml = showingBack ? `<span class="lesson1-training-divider" aria-hidden="true"></span><span class="lesson1-training-answer">${item.back}</span>` : "";
  card.innerHTML = `<span class="lesson1-training-progress">Lekcija 3 · Pārtulko: ${safeIndex + 1} / ${lesson3TrainingCards.length}</span><span class="lesson1-training-text">${item.front}</span>${answerHtml}`;
}

function handleLesson3TrainingCardClick(card) {
  const currentIndex = Number(card.dataset.trainingIndex || "0");
  const showingBack = card.dataset.showingBack === "true";
  if (showingBack) {
    renderLesson3TrainingCard(currentIndex + 1, false);
  } else {
    renderLesson3TrainingCard(currentIndex, true);
  }
}
function renderLesson4TrainingCard(index = 0, showingBack = false) {
  const card = elements.kurssLesson4.querySelector("[data-lesson4-training-card]");
  if (!card) return;
  const safeIndex = ((index % lesson4TrainingCards.length) + lesson4TrainingCards.length) % lesson4TrainingCards.length;
  const item = lesson4TrainingCards[safeIndex];
  card.dataset.trainingIndex = String(safeIndex);
  card.dataset.showingBack = showingBack ? "true" : "false";
  const answerHtml = showingBack ? `<span class="lesson1-training-divider" aria-hidden="true"></span><span class="lesson1-training-answer">${item.back}</span>` : "";
  card.innerHTML = `<span class="lesson1-training-progress">Lekcija 4 · Pārtulko: ${safeIndex + 1} / ${lesson4TrainingCards.length}</span><span class="lesson1-training-text">${item.front}</span>${answerHtml}`;
}

function handleLesson4TrainingCardClick(card) {
  const currentIndex = Number(card.dataset.trainingIndex || "0");
  const showingBack = card.dataset.showingBack === "true";
  if (showingBack) {
    renderLesson4TrainingCard(currentIndex + 1, false);
  } else {
    renderLesson4TrainingCard(currentIndex, true);
  }
}
function renderLesson5TrainingCard(index = 0, showingBack = false) {
  const card = elements.kurssLesson5.querySelector("[data-lesson5-training-card]");
  if (!card) return;
  const safeIndex = ((index % lesson5TrainingCards.length) + lesson5TrainingCards.length) % lesson5TrainingCards.length;
  const item = lesson5TrainingCards[safeIndex];
  card.dataset.trainingIndex = String(safeIndex);
  card.dataset.showingBack = showingBack ? "true" : "false";
  const answerHtml = showingBack ? `<span class="lesson1-training-divider" aria-hidden="true"></span><span class="lesson1-training-answer">${item.back}</span>` : "";
  card.innerHTML = `<span class="lesson1-training-progress">Lekcija 5 · Pārtulko: ${safeIndex + 1} / ${lesson5TrainingCards.length}</span><span class="lesson1-training-text">${item.front}</span>${answerHtml}`;
}

function handleLesson5TrainingCardClick(card) {
  const currentIndex = Number(card.dataset.trainingIndex || "0");
  const showingBack = card.dataset.showingBack === "true";
  if (showingBack) {
    renderLesson5TrainingCard(currentIndex + 1, false);
  } else {
    renderLesson5TrainingCard(currentIndex, true);
  }
}

function renderLesson6TrainingCard(index = 0, showingBack = false) {
  const card = elements.kurssLesson6.querySelector("[data-lesson6-training-card]");
  if (!card) return;
  const safeIndex = ((index % lesson6TrainingCards.length) + lesson6TrainingCards.length) % lesson6TrainingCards.length;
  const item = lesson6TrainingCards[safeIndex];
  card.dataset.trainingIndex = String(safeIndex);
  card.dataset.showingBack = showingBack ? "true" : "false";
  const answerHtml = showingBack ? `<span class="lesson1-training-divider" aria-hidden="true"></span><span class="lesson1-training-answer">${item.back}</span>` : "";
  card.innerHTML = `<span class="lesson1-training-progress">Lekcija 6 · Pārtulko: ${safeIndex + 1} / ${lesson6TrainingCards.length}</span><span class="lesson1-training-text">${item.front}</span>${answerHtml}`;
}

function handleLesson6TrainingCardClick(card) {
  const currentIndex = Number(card.dataset.trainingIndex || "0");
  const showingBack = card.dataset.showingBack === "true";
  if (showingBack) {
    renderLesson6TrainingCard(currentIndex + 1, false);
  } else {
    renderLesson6TrainingCard(currentIndex, true);
  }
}

const lesson8ExerciseCards = [
  {
    "type": "fill",
    "prompt": "Das Kind grüßt d... Lehrer.",
    "answer": "Das Kind grüßt den Lehrer."
  },
  {
    "type": "fill",
    "prompt": "Das Kind grüßt d... Lehrerin.",
    "answer": "Das Kind grüßt die Lehrerin."
  },
  {
    "type": "fill",
    "prompt": "Das Kind grüßt d... Fräulein.",
    "answer": "Das Kind grüßt das Fräulein."
  },
  {
    "type": "fill",
    "prompt": "Das Kind grüßt d... Schüler.",
    "answer": "Das Kind grüßt den Schüler."
  },
  {
    "type": "fill",
    "prompt": "Das Kind grüßt d... Schülerin.",
    "answer": "Das Kind grüßt die Schülerin."
  },
  {
    "type": "fill",
    "prompt": "Der Schüler nimmt d... Eimer.",
    "answer": "Der Schüler nimmt den Eimer."
  },
  {
    "type": "fill",
    "prompt": "Der Schüler nimmt d... Teller.",
    "answer": "Der Schüler nimmt den Teller."
  },
  {
    "type": "fill",
    "prompt": "Der Schüler nimmt d... Hammer.",
    "answer": "Der Schüler nimmt den Hammer."
  },
  {
    "type": "fill",
    "prompt": "Der Schüler nimmt d... Schlüssel.",
    "answer": "Der Schüler nimmt den Schlüssel."
  },
  {
    "type": "fill",
    "prompt": "Der Schüler nimmt d... Schüssel.",
    "answer": "Der Schüler nimmt die Schüssel."
  },
  {
    "type": "fill",
    "prompt": "Der Schüler nimmt d... Nadel.",
    "answer": "Der Schüler nimmt die Nadel."
  },
  {
    "type": "fill",
    "prompt": "Der Schüler nimmt d... Messer.",
    "answer": "Der Schüler nimmt das Messer."
  },
  {
    "type": "fill",
    "prompt": "Der Schüler nimmt d... Spiegel.",
    "answer": "Der Schüler nimmt den Spiegel."
  },
  {
    "type": "fill",
    "prompt": "Der Schüler nimmt d... Buch.",
    "answer": "Der Schüler nimmt das Buch."
  },
  {
    "type": "fill",
    "prompt": "Der Schüler nimmt d... Heft.",
    "answer": "Der Schüler nimmt das Heft."
  },
  {
    "type": "fill",
    "prompt": "Der Schüler nimmt d... Bleistift.",
    "answer": "Der Schüler nimmt den Bleistift."
  },
  {
    "type": "fill",
    "prompt": "Der Schüler nimmt d... Federhalter.",
    "answer": "Der Schüler nimmt den Federhalter."
  },
  {
    "type": "translate",
    "lv": "Sveicini skolotāju un skolotāju!",
    "de": "Grüße den Lehrer und die Lehrerin!"
  },
  {
    "type": "translate",
    "lv": "Ko tu sveicini?",
    "de": "Wen grüßt du?"
  },
  {
    "type": "translate",
    "lv": "Es sveicinu jaunkundzi.",
    "de": "Ich grüße das Fräulein."
  },
  {
    "type": "translate",
    "lv": "Atveriet visus logus!",
    "de": "Öffnet alle Fenster!"
  },
  {
    "type": "translate",
    "lv": "Mēs atveram visus logus.",
    "de": "Wir öffnen alle Fenster."
  },
  {
    "type": "translate",
    "lv": "Vai tu atver logu?",
    "de": "Öffnest du das Fenster?"
  },
  {
    "type": "translate",
    "lv": "Nē, es neatveru logu.",
    "de": "Nein, ich öffne nicht das Fenster."
  },
  {
    "type": "translate",
    "lv": "Visi skolēni apsēžas.",
    "de": "Alle Schüler setzen sich."
  },
  {
    "type": "translate",
    "lv": "Paul, sēdini sevi!",
    "de": "Paul, setz dich!"
  },
  {
    "type": "translate",
    "lv": "Bērni, sēdieties!",
    "de": "Kinder, setzt euch!"
  },
  {
    "type": "translate",
    "lv": "Nerunā klusi!",
    "de": "Sprich nicht leise!"
  },
  {
    "type": "translate",
    "lv": "Kā viņš runā?",
    "de": "Wie spricht er?"
  },
  {
    "type": "translate",
    "lv": "Visi skolēni runā skaļi.",
    "de": "Alle Schüler sprechen laut."
  },
  {
    "type": "translate",
    "lv": "Kas lasa skaļi?",
    "de": "Wer liest laut?"
  },
  {
    "type": "translate",
    "lv": "Skolniece lasa skaļi un skaidri.",
    "de": "Die Schülerin liest laut und deutlich."
  },
  {
    "type": "translate",
    "lv": "Lasi labi!",
    "de": "Lies gut!"
  },
  {
    "type": "translate",
    "lv": "Nerunā klusi!",
    "de": "Sprich nicht leise!"
  },
  {
    "type": "translate",
    "lv": "Lasiet labi!",
    "de": "Lest gut!"
  },
  {
    "type": "translate",
    "lv": "Ansis raksta labi, bet Anna raksta slikti.",
    "de": "Hans schreibt gut, aber Anna schreibt schlecht."
  },
  {
    "type": "translate",
    "lv": "Müller jaunkundze, lūdzu dziediet dziesmu!",
    "de": "Fräulein Müller, singen Sie, bitte, ein Lied!"
  },
  {
    "type": "translate",
    "lv": "Skolotāja kungs, lūdzu sēdieties!",
    "de": "Herr Lehrer, bitte, setzen Sie sich!"
  }
];

function renderLesson7ExerciseCard(index = 0, formStep = 0) {
  const card = elements.kurssLesson7.querySelector("[data-lesson7-exercise-card]");
  if (!card) return;
  const safeIndex = ((index % lesson7ExerciseCards.length) + lesson7ExerciseCards.length) % lesson7ExerciseCards.length;
  const safeStep = Math.max(0, Math.min(3, Number(formStep) || 0));
  const item = lesson7ExerciseCards[safeIndex];
  const formLabels = ["Tu (vienskaitlis)", "Jūs (daudzskaitlis)", "Sie (pieklājīgā forma)"];
  const forms = [
    { label: "du", value: item.du },
    { label: "ihr", value: item.ihr },
    { label: "Sie", value: item.sie }
  ];
  const prompt = item.infinitive + " — " + item.lv;
  const progress = "Lekcija 7 · Übung · " + (safeIndex + 1) + " / " + lesson7ExerciseCards.length;
  card.dataset.trainingIndex = String(safeIndex);
  card.dataset.formStep = String(safeStep);
  card.dataset.showingBack = safeStep > 0 ? "true" : "false";

  if (safeStep === 0) {
    renderExerciseCardShell(card, {
      progress,
      meta: "Izveido pavēles formas. Forma 1/3: " + formLabels[0],
      phase: "challenge",
      prompt,
      cta: "Pieskaries, lai redzētu formu"
    });
    return;
  }

  const revealedForms = forms.slice(0, safeStep).map((form) => form.label + ": " + form.value);
  const formIndex = Math.min(safeStep - 1, 2);
  renderExerciseCardShell(card, {
    progress,
    meta: safeStep < 3
      ? "Forma " + (safeStep + 1) + "/3: " + formLabels[formIndex]
      : "Pieskaries nākamajai kartītei",
    phase: "reveal",
    prompt,
    answers: revealedForms
  });
}

function handleLesson7ExerciseCardClick(card) {
  const currentIndex = Number(card.dataset.trainingIndex || "0");
  const currentStep = Number(card.dataset.formStep || "0");
  if (currentStep >= 3) {
    renderLesson7ExerciseCard(currentIndex + 1, 0);
  } else {
    renderLesson7ExerciseCard(currentIndex, currentStep + 1);
  }
}
function prepareLesson1Accordion() {
  const sections = Array.from(elements.kurssLesson1.querySelectorAll(".lesson1-accordion"));
  sections.forEach((section, index) => {
    section.open = index === 0;
  });
  renderCourseTranslateCard("lesson1", 0, false);
}

function prepareLesson2Accordion() {
  const sections = Array.from(elements.kurssLesson2.querySelectorAll(".lesson1-accordion"));
  sections.forEach((section, index) => {
    section.open = index === 0;
  });
  renderCourseTranslateCard("lesson2", 0, false);
}

function prepareLesson3Accordion() {
  const sections = Array.from(elements.kurssLesson3.querySelectorAll(".lesson1-accordion"));
  sections.forEach((section, index) => {
    section.open = index === 0;
  });
  renderCourseTranslateCard("lesson3", 0, false);
}

function prepareLesson4Accordion() {
  const sections = Array.from(elements.kurssLesson4.querySelectorAll(".lesson1-accordion"));
  sections.forEach((section, index) => {
    section.open = index === 0;
  });
  renderCourseTranslateCard("lesson4", 0, false);
}

function prepareLesson5Accordion() {
  const sections = Array.from(elements.kurssLesson5.querySelectorAll(".lesson1-accordion"));
  sections.forEach((section, index) => {
    section.open = index === 0;
  });
  renderCourseTranslateCard("lesson5", 0, false);
}

function prepareLesson6Accordion() {
  const sections = Array.from(elements.kurssLesson6.querySelectorAll(".lesson1-accordion"));
  sections.forEach((section, index) => {
    section.open = index === 0;
  });
  renderCourseTranslateCard("lesson6", 0, false);
}

function prepareLesson7Accordion() {
  const sections = Array.from(elements.kurssLesson7.querySelectorAll(".lesson1-accordion"));
  sections.forEach((section, index) => {
    section.open = index === 0;
  });
  renderLesson7ExerciseCard(0, false);
}

function getLesson8ExerciseCards() {
  const lesson = window.COURSE_LESSON_DATA?.kurssLesson8;
  const exerciseSection = lesson?.sections?.find((section) => Array.isArray(section.cards));
  return exerciseSection?.cards?.length ? exerciseSection.cards : lesson8ExerciseCards;
}

function renderLesson8ExerciseCard(index = 0, showingBack = false) {
  const card = elements.kurssLesson8.querySelector("[data-lesson8-exercise-card]");
  const deck = getLesson8ExerciseCards();
  if (!card || !deck.length) return;
  const safeIndex = ((index % deck.length) + deck.length) % deck.length;
  const item = deck[safeIndex];
  const isFill = item.type === "fill";
  const frontText = isFill ? item.prompt : item.lv;
  const answerText = isFill ? item.answer : item.de;
  const stepText = isFill ? "Übung I — lieto pareizo locījumu" : "Übung II — tulko";
  const progress = "Lekcija 8 · Übung · " + (safeIndex + 1) + " / " + deck.length;
  card.dataset.trainingIndex = String(safeIndex);
  card.dataset.showingBack = showingBack ? "true" : "false";

  if (!showingBack) {
    renderExerciseCardShell(card, {
      progress,
      meta: stepText,
      phase: "challenge",
      prompt: frontText || "",
      cta: "Pieskaries, lai redzētu atbildi"
    });
    return;
  }

  renderExerciseCardShell(card, {
    progress,
    meta: stepText,
    phase: "reveal",
    prompt: frontText || "",
    answers: [answerText || ""]
  });
}

function handleLesson8ExerciseCardClick(card) {
  const currentIndex = Number(card.dataset.trainingIndex || "0");
  const showingBack = card.dataset.showingBack === "true";
  if (showingBack) {
    renderLesson8ExerciseCard(currentIndex + 1, false);
  } else {
    renderLesson8ExerciseCard(currentIndex, true);
  }
}

function prepareLesson10Accordion() {
  const accordions = Array.from(elements.kurssLesson10.querySelectorAll(".lesson1-accordion"));
  accordions.forEach((accordion, index) => { accordion.open = index === 0; });
  renderCourseTranslateCard("lesson10", 0, false);
}

function prepareLesson11Accordion() {
  const accordions = Array.from(elements.kurssLesson11.querySelectorAll(".lesson1-accordion"));
  accordions.forEach((accordion, index) => { accordion.open = index === 0; });
  renderCourseTranslateCard("lesson11", 0, false);
}


function prepareLesson12Accordion() {
  const accordions = Array.from(elements.kurssLesson12.querySelectorAll(".lesson1-accordion"));
  accordions.forEach((accordion, index) => { accordion.open = index === 0; });
  renderCourseTranslateCard("lesson12", 0, false);
}

function prepareLesson13Accordion() {
  const accordions = Array.from(elements.kurssLesson13.querySelectorAll(".lesson1-accordion"));
  accordions.forEach((accordion, index) => { accordion.open = index === 0; });
  renderCourseTranslateCard("lesson13", 0, false);
}
function getLesson9ExerciseCards() {
  const lesson = window.COURSE_LESSON_DATA?.kurssLesson9;
  return lesson?.sections?.find(section => section.title === "Übung / Vingrinājums")?.cards || [];
}

function formatExerciseFormMeta(form, fallback) {
  const label = String(form?.label || "").trim();
  const task = String(form?.task || "").trim() || fallback || "";
  return label ? label + " · " + task : task;
}

function renderLesson9ExerciseCard(index = 0, rawStep = 0) {
  const cards = getLesson9ExerciseCards();
  const target = elements.kurssLesson9?.querySelector("[data-lesson9-exercise-card]");
  if (!target || !cards.length) return;
  const safeIndex = ((index % cards.length) + cards.length) % cards.length;
  const card = cards[safeIndex];
  const forms = Array.isArray(card.forms) && card.forms.length ? card.forms : [{ label: "1/1 Teikums", task: card.task || "Vingrinājums", text: card.prompt || card.base || "" }];
  const step = Math.max(0, Number(rawStep) || 0);
  const pairIndex = Math.min(Math.floor(step / 2), forms.length - 2);
  const isReveal = step % 2 === 1;
  const progress = "Lekcija 9 · Übung · " + (safeIndex + 1) + " / " + cards.length;
  target.dataset.cardIndex = String(safeIndex);
  target.dataset.step = String(step);

  if (!isReveal) {
    renderExerciseCardShell(target, {
      progress,
      meta: formatExerciseFormMeta(forms[pairIndex], "Pārveido teikumu."),
      phase: "challenge",
      prompt: forms[pairIndex]?.text || "",
      cta: "Pieskaries, lai redzētu atbildi"
    });
    return;
  }

  const nextForm = forms[pairIndex + 1];
  renderExerciseCardShell(target, {
    progress,
    meta: formatExerciseFormMeta(nextForm, pairIndex + 1 >= forms.length - 1 ? "Pieskaries nākamajai kartītei" : "Pārveido teikumu."),
    phase: "reveal",
    prompt: forms[pairIndex]?.text || "",
    answers: nextForm?.text ? [nextForm.text] : []
  });
}

function handleLesson9ExerciseCardClick(event) {
  const target = event.target.closest("[data-lesson9-exercise-card]");
  if (!target) return;
  const cards = getLesson9ExerciseCards();
  if (!cards.length) return;
  const index = Number(target.dataset.cardIndex || 0);
  const step = Number(target.dataset.step || 0);
  const forms = cards[index]?.forms || [];
  const lastStep = Math.max(0, (forms.length - 1) * 2 - 1);
  if (step >= lastStep) {
    renderLesson9ExerciseCard(index + 1, 0);
  } else {
    renderLesson9ExerciseCard(index, step + 1);
  }
}

function prepareLesson9Accordion() {
  const accordions = Array.from(elements.kurssLesson9.querySelectorAll(".lesson1-accordion"));
  accordions.forEach((accordion, index) => {
    accordion.open = index === 0;
  });
  renderLesson9ExerciseCard(0, 0);
  renderCourseTranslateCard("lesson9", 0, false);
}

function prepareLesson8Accordion() {
  const sections = Array.from(elements.kurssLesson8.querySelectorAll(".lesson1-accordion"));
  sections.forEach((section, index) => {
    section.open = index === 0;
  });
  renderLesson8ExerciseCard(0, false);
  renderCourseTranslateCard("lesson8", 0, false);
}

function openVerbBasicsLesson() {
  hideAllKurssPanels();
  elements.kurssTitle.textContent = "Darbības vārdu pamati";
  elements.kurssSubtitle.textContent = "Personas, formas un biežākie darbības vārdi.";
  elements.kurssVerbBasicsLesson.hidden = false;
  scrollKurssPanelToTop();
}

function openSentenceStructureLesson() {
  hideAllKurssPanels();
  elements.kurssTitle.textContent = "Teikumu uzbūve";
  elements.kurssSubtitle.textContent = "Vienkārša vārdu secība vācu teikumos.";
  elements.kurssSentenceStructureLesson.hidden = false;
  scrollKurssPanelToTop();
}
function handleKurssBack() {
  if (courseLessonIds.some((lessonId) => elements[lessonId] && !elements[lessonId].hidden)) {
    openLessonsMenu();
    return;
  }

  if (!elements.kurssPronunciationLesson.hidden || !elements.kurssConsonantsLesson.hidden) {
    openPronunciationLesson();
    return;
  }

  if (!elements.kurssArticlesLesson.hidden || !elements.kurssPronunciationMenu.hidden || !elements.kurssLessonsMenu.hidden || !elements.kurssVerbBasicsLesson.hidden || !elements.kurssSentenceStructureLesson.hidden) {
    showKurssMenu();
    return;
  }
  closeKurss();
}

function loadDirection() {
  const saved = store.getItem(directionStorageKey);
  return saved === "lv-de" ? "lv-de" : "de-lv";
}

function saveDirection() {
  store.setItem(directionStorageKey, state.direction);
}

function loadMode() {
  const saved = store.getItem(modeStorageKey);
  return Object.prototype.hasOwnProperty.call(sessionModes, saved) ? saved : "normal";
}

function saveMode() {
  store.setItem(modeStorageKey, state.mode);
}

function loadReviewStatus() {
  try {
    const saved = JSON.parse(store.getItem(reviewStorageKey) || "{}");
    return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
  } catch (error) {
    return {};
  }
}

function saveReviewStatus() {
  store.setItem(reviewStorageKey, JSON.stringify(state.reviewStatus));
}

function loadSession() {
  try {
    const saved = JSON.parse(store.getItem(sessionStorageKey) || "null");
    return saved && typeof saved === "object" ? saved : null;
  } catch (error) {
    return null;
  }
}

function saveSession() {
  store.setItem(sessionStorageKey, JSON.stringify(state.session));
}

function loadLastCompletedSession() {
  try {
    const saved = JSON.parse(store.getItem(lastCompletedSessionStorageKey) || "null");
    return saved && typeof saved === "object" && Array.isArray(saved.ids) ? saved : null;
  } catch (error) {
    return null;
  }
}

function saveLastCompletedSession() {
  store.setItem(lastCompletedSessionStorageKey, JSON.stringify(state.lastCompletedSession));
}

function loadProblemStats() {
  try {
    const saved = JSON.parse(store.getItem(problemStatsStorageKey) || "{}");
    return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
  } catch (error) {
    return {};
  }
}

function saveProblemStats() {
  store.setItem(problemStatsStorageKey, JSON.stringify(state.problemStats));
}

function unwantedItemId(item) {
  if (typeof item === "string") return item;
  return item && typeof item.id === "string" ? item.id : "";
}

function sanitizeUnwantedIds(ids) {
  const seen = new Set();
  const cleaned = [];
  for (const item of Array.isArray(ids) ? ids : []) {
    const id = unwantedItemId(item).trim();
    if (!id || seen.has(id)) continue;
    seen.add(id);
    if (item && typeof item === "object" && !Array.isArray(item)) {
      const stored = {
        id,
        de: String(item.de || ""),
        lv: String(item.lv || ""),
        level: String(item.level || "")
      };
      if (item.de_article) stored.de_article = String(item.de_article);
      if (item.de_plural) stored.de_plural = String(item.de_plural);
      cleaned.push(stored);
    } else {
      cleaned.push(id);
    }
  }
  return cleaned;
}

function unwantedEntryForCard(card) {
  return {
    id: cardId(card),
    de: card.de || "",
    lv: card.lv || "",
    level: card.level || "",
    ...(card.de_article ? { de_article: card.de_article } : {}),
    ...(card.de_plural ? { de_plural: card.de_plural } : {})
  };
}

function problemStatsSnapshot() {
  try {
    const saved = JSON.parse(store.getItem(problemStatsStorageKey) || "{}");
    return saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {};
  } catch (error) {
    return {};
  }
}

function loadUnwantedIds() {
  try {
    const explicit = JSON.parse(store.getItem(unwantedStorageKey) || "null");
    if (Array.isArray(explicit)) {
      return sanitizeUnwantedIds(explicit);
    }

    const legacy = JSON.parse(store.getItem(legacyUnwantedStorageKey) || "[]");
    const problemStats = problemStatsSnapshot();
    const migrated = sanitizeUnwantedIds(legacy)
      .filter((item) => {
        const id = unwantedItemId(item);
        return !(problemStats[id] && problemStats[id].problematic === true);
      });
    store.setItem(unwantedStorageKey, JSON.stringify(migrated));
    return migrated;
  } catch (error) {
    return [];
  }
}

function saveUnwantedIds() {
  state.unwantedIds = sanitizeUnwantedIds(state.unwantedIds);
  store.setItem(unwantedStorageKey, JSON.stringify(state.unwantedIds));
}

function loadMasteredIds() {
  try {
    const saved = JSON.parse(store.getItem(masteredStorageKey) || "[]");
    return sanitizeUnwantedIds(saved);
  } catch (error) {
    return [];
  }
}

function saveMasteredIds() {
  state.masteredIds = sanitizeUnwantedIds(state.masteredIds);
  store.setItem(masteredStorageKey, JSON.stringify(state.masteredIds));
}

function masteredSet() {
  return new Set((state.masteredIds || []).map(unwantedItemId).filter(Boolean));
}

function isMasteredCard(card) {
  return card && masteredSet().has(cardId(card));
}


function unwantedSet() {
  return new Set((state.unwantedIds || []).map(unwantedItemId).filter(Boolean));
}

function isUnwantedCard(card) {
  return card && unwantedSet().has(cardId(card));
}

function migrateSarunasProgress(saved) {
  const sarunasLearned = Array.isArray(saved.Sarunas) ? saved.Sarunas : [];
  if (!sarunasLearned.length) {
    delete saved.Sarunas;
    return saved;
  }

  const dialogueMap = typeof DIALOGUE_ID_MAP !== "undefined" ? DIALOGUE_ID_MAP : (window.DIALOGUE_ID_MAP || {});
  if (!Array.isArray(saved.Sätze)) saved.Sätze = [];
  const saetzeSet = new Set(saved.Sätze);

  for (const legacyId of sarunasLearned) {
    const diagId = String(legacyId).replace(/^Sarunas:/, "");
    const mapped = dialogueMap[diagId];
    if (!mapped?.de || !mapped?.lv) continue;
    const nextId = `Sätze:${mapped.de}:${mapped.lv}`;
    if (!saetzeSet.has(nextId)) {
      saved.Sätze.push(nextId);
      saetzeSet.add(nextId);
    }
  }

  delete saved.Sarunas;
  return saved;
}

function loadProgress() {
  const fallback = {};
  for (const group of groups) {
    fallback[group] = [];
  }
  fallback.verbs = [];

  try {
    const raw = JSON.parse(store.getItem(storageKey) || "{}");
    const hadSarunas = Array.isArray(raw.Sarunas) && raw.Sarunas.length > 0;
    const saved = migrateSarunasProgress(raw);
    for (const group of groups) {
      fallback[group] = Array.isArray(saved[group]) ? saved[group] : [];
    }
    fallback.verbs = Array.isArray(saved.verbs) ? saved.verbs : [];
    if (hadSarunas) {
      store.setItem(storageKey, JSON.stringify(saved));
    }
  } catch (error) {
    return fallback;
  }

  return fallback;
}

function saveProgress() {
  store.setItem(storageKey, JSON.stringify(state.learned));
}

function todayString(offsetDays = 0) {
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().slice(0, 10);
}

function activeGroupKey() {
  return state.verbMode ? "verbs" : state.group;
}

function activeCardsForSession() {
  return state.verbMode ? verbEntries : baseCardsForGroup(state.group).filter((card) => !isMasteredCard(card));
}

function idForSessionCard(card) {
  return state.verbMode ? verbId(card) : cardId(card);
}

function cardsForSessionKey(groupKey) {
  return groupKey === "verbs" ? verbEntries : baseCardsForGroup(groupKey);
}

function idForSessionKey(card, groupKey) {
  return groupKey === "verbs" ? verbId(card) : cardId(card);
}

function isDueForReview(status) {
  return status && status.nextReview && status.nextReview <= todayString();
}

function createSession() {
  const groupKey = activeGroupKey();
  const config = sessionModes[state.mode] || sessionModes.normal;
  const cards = activeCardsForSession();
  const newCards = [];
  const reviewCards = [];

  for (const card of cards) {
    const id = idForSessionCard(card);
    const status = state.reviewStatus[id];
    if (!status) {
      newCards.push(card);
    } else if (isDueForReview(status)) {
      reviewCards.push(card);
    }
  }

  const picked = newCards.slice(0, config.newCount).concat(reviewCards.slice(0, config.reviewCount));
  state.session = {
    groupKey,
    mode: state.mode,
    ids: picked.map(idForSessionCard),
    originalIds: picked.map(idForSessionCard),
    completedIds: [],
    total: picked.length,
    index: 0,
    startedAt: new Date().toISOString(),
    created: new Date().toISOString()
  };
  state.index = 0;
  state.verbIndex = 0;
  state.verbStep = 0;
  state.revealed = false;
  saveSession();
}

function sessionMatchesActiveGroup() {
  return state.session
    && state.session.groupKey === activeGroupKey()
    && state.session.mode === state.mode
    && Array.isArray(state.session.ids);
}

function ensureSession() {
  if (!sessionMatchesActiveGroup()) {
    createSession();
  }
}

function sessionDeck() {
  ensureSession();
  const groupKey = state.session.groupKey;
  const cards = cardsForSessionKey(groupKey);
  return state.session.ids
    .map((id) => cards.find((card) => idForSessionKey(card, groupKey) === id))
    .filter(Boolean);
}

function sessionPosition() {
  if (!state.session) return 0;
  return Math.max(0, state.session.index || 0);
}

function normalizeSessionIndex() {
  if (!state.session) return;
  if (!state.session.ids.length) {
    state.session.index = 0;
  } else {
    state.session.index = sessionPosition() % state.session.ids.length;
  }
  state.index = state.session.index;
  state.verbIndex = state.session.index;
}

function rotateSession() {
  if (!state.session) return;
  if (state.session.ids.length > 0) {
    state.session.index = (sessionPosition() + 1) % state.session.ids.length;
  } else {
    state.session.index = 0;
  }
  state.index = state.session.index;
  state.verbIndex = state.session.index;
  state.revealed = false;
  state.verbStep = 0;
  resetVerbChallenge();
  resetSpellingTask();
  saveSession();
}

function completeCurrentSessionCard(id) {
  if (!state.session || !id) return;
  if (!Array.isArray(state.session.completedIds)) {
    state.session.completedIds = [];
  }

  const position = sessionPosition();
  state.session.ids = state.session.ids.filter((sessionId) => sessionId !== id);
  if (!state.session.completedIds.includes(id)) {
    state.session.completedIds.push(id);
  }

  state.session.index = state.session.ids.length ? Math.min(position, state.session.ids.length - 1) : 0;
  state.index = state.session.index;
  state.verbIndex = state.session.index;
  state.revealed = false;
  state.verbStep = 0;
  resetVerbChallenge();
  resetSpellingTask();
  if (!state.session.ids.length) {
    state.session.completed = true;
    state.session.completedAt = new Date().toISOString();
    state.lastCompletedSession = {
      groupKey: state.session.groupKey,
      mode: state.session.mode,
      ids: Array.isArray(state.session.originalIds) ? state.session.originalIds : state.session.completedIds,
      startedAt: state.session.startedAt || state.session.created,
      completedAt: state.session.completedAt
    };
    saveLastCompletedSession();
  }
  saveSession();
}

function sessionDoneCount() {
  return state.session && Array.isArray(state.session.completedIds) ? state.session.completedIds.length : 0;
}

function sessionTotalCount() {
  if (!state.session) return 0;
  return state.session.total || (state.session.ids.length + sessionDoneCount());
}

function knownCardsForActiveGroup() {
  const groupKey = activeGroupKey();
  const cards = cardsForSessionKey(groupKey);
  const learnedIds = state.learned[groupKey] || [];
  const learnedSet = new Set(learnedIds);
  return cards.filter((card) => learnedSet.has(idForSessionKey(card, groupKey)) && !isMasteredCard(card));
}

function currentKnownCard() {
  const deck = knownCardsForActiveGroup();
  if (!deck.length || state.index >= deck.length) return null;
  return deck[state.index];
}

function nextKnownCard() {
  state.index += 1;
  state.verbIndex = state.index;
  state.revealed = false;
  state.verbStep = 0;
  resetVerbChallenge();
  resetSpellingTask();
}

function problemDeck() {
  const groupKeys = state.problemScope === "all" ? groups : [activeGroupKey()];
  return groupKeys.flatMap((groupKey) => allCardsForGroup(groupKey).filter((card) => {
    const id = idForSessionKey(card, groupKey);
    const stats = state.problemStats[id];
    return !isUnwantedCard(card) && stats && stats.problematic === true && (stats.unknownCount || 0) >= 3;
  }).map((card) => ({ ...card, problemGroupKey: groupKey })));
}

function problemCardGroupKey(card) {
  return card && card.problemGroupKey ? card.problemGroupKey : activeGroupKey();
}

function problemEmptyMessage() {
  return state.problemScope === "all" ? "Nav problemātisko vārdu." : "Šajā grupā nav problemātisko vārdu.";
}

function normalizeProblemIndex() {
  const deck = problemDeck();
  if (!deck.length) {
    state.problemIndex = 0;
  } else {
    state.problemIndex = Math.max(0, state.problemIndex || 0) % deck.length;
  }
  state.index = state.problemIndex;
  state.verbIndex = state.problemIndex;
}

function updateProblemUnknown(id) {
  if (!id) return;
  const stats = state.problemStats[id] || {
    unknownCount: 0,
    correctCountForProblematic: 0,
    problematic: false
  };
  stats.unknownCount = (stats.unknownCount || 0) + 1;
  if (stats.unknownCount >= 3) {
    stats.problematic = true;
  }
  state.problemStats[id] = stats;
  saveProblemStats();
}

function updateProblemKnown(id) {
  if (!id) return;
  const stats = state.problemStats[id];
  if (!stats || !stats.problematic) return;

  stats.correctCountForProblematic = (stats.correctCountForProblematic || 0) + 1;
  if (stats.correctCountForProblematic >= 3) {
    stats.problematic = false;
    stats.correctCountForProblematic = 0;
  }
  state.problemStats[id] = stats;
  saveProblemStats();
}

function rotateProblemDeck() {
  const deck = problemDeck();
  if (deck.length > 0) {
    state.problemIndex = (state.problemIndex + 1) % deck.length;
  } else {
    state.problemIndex = 0;
  }
  state.index = state.problemIndex;
  state.verbIndex = state.problemIndex;
  state.revealed = false;
  state.verbStep = 0;
  resetVerbChallenge();
  resetSpellingTask();
}

function completeProblemCard(id) {
  const position = state.problemIndex || 0;
  updateProblemKnown(id);
  const deck = problemDeck();
  if (!deck.length) {
    state.problemIndex = 0;
  } else {
    state.problemIndex = Math.min(position, deck.length - 1);
    if (idForSessionKey(deck[state.problemIndex], problemCardGroupKey(deck[state.problemIndex])) === id && deck.length > 1) {
      state.problemIndex = (state.problemIndex + 1) % deck.length;
    }
  }
  state.index = state.problemIndex;
  state.verbIndex = state.problemIndex;
  state.revealed = false;
  state.verbStep = 0;
  resetVerbChallenge();
  resetSpellingTask();
}

function lastSessionDeck() {
  if (!state.lastCompletedSession || !Array.isArray(state.lastCompletedSession.ids)) {
    return [];
  }

  const groupKey = state.lastCompletedSession.groupKey;
  const cards = cardsForSessionKey(groupKey);
  const ids = state.reviewLastSession ? state.pendingLastSessionIds : state.lastCompletedSession.ids;
  return ids
    .map((id) => cards.find((card) => idForSessionKey(card, groupKey) === id))
    .filter(Boolean);
}

function currentLastSessionCard() {
  const deck = lastSessionDeck();
  if (!deck.length || state.lastSessionIndex >= deck.length) return null;
  return deck[state.lastSessionIndex];
}

function lastSessionReviewDoneCount() {
  if (!state.lastCompletedSession || !Array.isArray(state.lastCompletedSession.ids)) return 0;
  return state.lastCompletedSession.ids.length - state.pendingLastSessionIds.length;
}

function lastSessionReviewTotalCount() {
  return state.lastCompletedSession && Array.isArray(state.lastCompletedSession.ids)
    ? state.lastCompletedSession.ids.length
    : 0;
}

function nextLastSessionCard() {
  if (state.pendingLastSessionIds.length > 0) {
    state.lastSessionIndex = (state.lastSessionIndex + 1) % state.pendingLastSessionIds.length;
  } else {
    state.lastSessionIndex = 0;
  }
  state.index = state.lastSessionIndex;
  state.verbIndex = state.lastSessionIndex;
  state.revealed = false;
  state.verbStep = 0;
}

function completeLastSessionReviewCard(id) {
  if (!id) return;
  state.pendingLastSessionIds = state.pendingLastSessionIds.filter((pendingId) => pendingId !== id);
  if (state.pendingLastSessionIds.length > 0) {
    state.lastSessionIndex = Math.min(state.lastSessionIndex, state.pendingLastSessionIds.length - 1);
  } else {
    state.lastSessionIndex = 0;
  }
  state.index = state.lastSessionIndex;
  state.verbIndex = state.lastSessionIndex;
  state.revealed = false;
  state.verbStep = 0;
}

function updateReviewStatus(id, isKnown) {
  const current = state.reviewStatus[id];
  if (isKnown) {
    const nextLevel = current ? Math.min((current.level || 0) + 1, cooldownDays.length - 1) : 0;
    state.reviewStatus[id] = {
      ...current,
      level: nextLevel,
      nextReview: todayString(cooldownDays[nextLevel])
    };
  } else {
    const nextLevel = current ? Math.max((current.level || 0) - 1, 0) : 0;
    state.reviewStatus[id] = {
      ...current,
      level: nextLevel,
      nextReview: todayString(0)
    };
  }
  saveReviewStatus();
}

function recordLearnedTimestamp(id) {
  if (!id) return;
  const current = state.reviewStatus[id] || {};
  const now = new Date().toISOString();
  state.reviewStatus[id] = {
    ...current,
    learnedAt: current.learnedAt || now,
    lastCorrectAt: now
  };
  saveReviewStatus();
}

function updateLastCorrectTimestamp(id) {
  if (!id || !state.reviewStatus[id]) return;
  state.reviewStatus[id] = {
    ...state.reviewStatus[id],
    lastCorrectAt: new Date().toISOString()
  };
  saveReviewStatus();
}

function learnedWithinDays(status, days) {
  if (!status || !status.learnedAt) return false;
  const learnedAt = new Date(status.learnedAt).getTime();
  if (Number.isNaN(learnedAt)) return false;
  return Date.now() - learnedAt <= days * 24 * 60 * 60 * 1000;
}

function timeReviewConfig() {
  return state.timeReviewMode === "month"
    ? { days: 30, empty: "Šajā grupā nav vārdu mēneša pārskatam.", done: "Mēneša pārskats pabeigts.", label: "Mēneša pārskats" }
    : { days: 7, empty: "Šajā grupā nav vārdu nedēļas pārskatam.", done: "Nedēļas pārskats pabeigts.", label: "Nedēļas pārskats" };
}

function timeReviewDeck() {
  if (!state.timeReviewMode) return [];
  const groupKey = activeGroupKey();
  const cards = cardsForSessionKey(groupKey);
  return state.timeReviewIds
    .map((id) => cards.find((card) => idForSessionKey(card, groupKey) === id))
    .filter(Boolean);
}

function currentTimeReviewCard() {
  const deck = timeReviewDeck();
  if (!deck.length || state.timeReviewIndex >= deck.length) return null;
  return deck[state.timeReviewIndex];
}

function nextTimeReviewCard() {
  state.timeReviewIndex += 1;
  state.index = state.timeReviewIndex;
  state.verbIndex = state.timeReviewIndex;
  state.revealed = false;
  state.verbStep = 0;
}

function startTimeReview(mode) {
  state.timeReviewMode = mode;
  state.timeReviewIndex = 0;
  state.index = 0;
  state.verbIndex = 0;
  state.verbStep = 0;
  state.revealed = false;
  state.reviewKnown = false;
  state.reviewLastSession = false;
  state.problemMode = false;
  state.problemIndex = 0;

  const groupKey = activeGroupKey();
  const config = timeReviewConfig();
  const learnedSet = new Set(state.learned[groupKey] || []);
  state.timeReviewIds = cardsForSessionKey(groupKey)
    .filter((card) => {
      const id = idForSessionKey(card, groupKey);
      return learnedSet.has(id) && learnedWithinDays(state.reviewStatus[id], config.days);
    })
    .map((card) => idForSessionKey(card, groupKey));

  setNotice(state.timeReviewIds.length ? `Rādām: ${config.label}.` : config.empty);
  render();
}

function resetReviewDataForGroup(groupKey) {
  const cards = cardsForSessionKey(groupKey);
  for (const card of cards) {
    delete state.reviewStatus[idForSessionKey(card, groupKey)];
  }
  saveReviewStatus();
}

function verbForms(verb) {
  const infinitiv = (verb.infinitiv && verb.infinitiv.de) || verb.tagadne || (verb.present && verb.present.de) || "";
  const praesensDisplay = {
    kennen: { de: "er kennt", lv: "viņš pazīst" },
    bleichen: { de: "er bleicht", lv: "viņš balina" },
    brennen: { de: "er brennt", lv: "viņš deg" },
    dingen: { de: "er dingt", lv: "viņš nolīgst" },
    dünken: { de: "es dünkt", lv: "tas šķiet" },
    dürfen: { de: "er darf", lv: "viņš drīkst" },
    haben: { de: "er hat", lv: "viņam ir" },
    können: { de: "er kann", lv: "viņš var" },
    misslingen: { de: "es misslingt", lv: "tas neizdodas" },
    mögen: { de: "er mag", lv: "viņam patīk" },
    müssen: { de: "er muss", lv: "viņam vajag" },
    pflegen: { de: "er pflegt", lv: "viņš kopj" },
    schallen: { de: "es schallt", lv: "tas skan" },
    scheren: { de: "er schert", lv: "viņš cirpj" },
    schinden: { de: "er schindet", lv: "viņš moka" },
    schnauben: { de: "er schnaubt", lv: "viņš šņāc" },
    sein: { de: "er ist", lv: "viņš ir" },
    sieden: { de: "er siedet", lv: "viņš vāra" },
    sollen: { de: "er soll", lv: "viņam vajag" },
    spleißen: { de: "er spleißt", lv: "viņš savieno" },
    stecken: { de: "er steckt", lv: "viņš bāž" },
    stieben: { de: "es stiebt", lv: "tas put" },
    stinken: { de: "es stinkt", lv: "tas smird" },
    weben: { de: "er webt", lv: "viņš auž" },
    werden: { de: "er wird", lv: "viņš kļūst" },
    wollen: { de: "er will", lv: "viņš grib" },
    wringen: { de: "er wringt", lv: "viņš izgriež" },
    zeihen: { de: "er zeiht", lv: "viņš vaino" }
  }[infinitiv];
  const storedPraesens = (verb.praesens && verb.praesens.de) || "";
  const useDisplayPraesens = praesensDisplay && storedPraesens === infinitiv;

  return {
    infinitiv,
    infinitivLv: (verb.infinitiv && verb.infinitiv.lv) || verb.tagadneLv || (verb.present && verb.present.lv) || "",
    praesens: useDisplayPraesens ? praesensDisplay.de : storedPraesens,
    praesensLv: useDisplayPraesens ? praesensDisplay.lv : ((verb.praesens && verb.praesens.lv) || ""),
    imperfektIndikativ: (verb.imperfektIndikativ && verb.imperfektIndikativ.de) || verb.nakotne || (verb.future && verb.future.de) || "",
    imperfektIndikativLv: (verb.imperfektIndikativ && verb.imperfektIndikativ.lv) || verb.nakotneLv || (verb.future && verb.future.lv) || "",
    imperfektKonjunktiv: (verb.imperfektKonjunktiv && verb.imperfektKonjunktiv.de) || "",
    imperfektKonjunktivLv: (verb.imperfektKonjunktiv && verb.imperfektKonjunktiv.lv) || "",
    partizipVergangenheit: (verb.partizipVergangenheit && verb.partizipVergangenheit.de) || verb.pagatne || (verb.past && verb.past.de) || "",
    partizipVergangenheitLv: (verb.partizipVergangenheit && verb.partizipVergangenheit.lv) || verb.pagatneLv || (verb.past && verb.past.lv) || ""
  };
}

function resetVerbChallenge() {
  state.verbChallenge = null;
}

function clearSpellingAutoNextTimer() {
  if (spellingAutoNextTimer) {
    clearTimeout(spellingAutoNextTimer);
    spellingAutoNextTimer = null;
  }
}

function scheduleSpellingAutoNext(task) {
  clearSpellingAutoNextTimer();
  const taskId = task && task.id;
  const answer = state.spellingAnswer;
  spellingAutoNextTimer = setTimeout(() => {
    spellingAutoNextTimer = null;
    if (!state.spellingMode || !state.spellingChecked || !state.spellingCorrect) return;
    if (!state.spellingTask || state.spellingTask.id !== taskId) return;
    if (state.spellingAnswer !== answer) return;
    nextCard();
  }, 3000);
}
function resetSpellingTask() {
  state.spellingTask = null;
  state.spellingChecked = false;
  state.spellingCorrect = false;
  state.spellingAnswer = "";
  if (elements.continueSpellingBtn) {
    elements.continueSpellingBtn.hidden = true;
    elements.continueSpellingBtn.disabled = true;
  }
  if (elements.spellingInput) {
    elements.spellingInput.value = "";
  }
  if (elements.spellingResult) {
    elements.spellingResult.textContent = "";
  }
}

function normalizeTypedAnswer(value) {
  return String(value || "").trim();
}

function typedAnswerIsCorrect(answer, expected) {
  return normalizeTypedAnswer(answer) === normalizeTypedAnswer(expected);
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function spellingDiffHtml(answer, expected) {
  const typed = normalizeTypedAnswer(answer);
  const correct = normalizeTypedAnswer(expected);
  const rows = typed.length + 1;
  const cols = correct.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i++) dp[i][0] = i;
  for (let j = 0; j < cols; j++) dp[0][j] = j;

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      const cost = typed[i - 1] === correct[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  const parts = [];
  let i = typed.length;
  let j = correct.length;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + (typed[i - 1] === correct[j - 1] ? 0 : 1)) {
      const ch = escapeHtml(typed[i - 1]);
      parts.unshift(typed[i - 1] === correct[j - 1] ? ch : '<span class="spelling-error-char">' + ch + '</span>');
      i--;
      j--;
    } else if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
      parts.unshift('<span class="spelling-error-char">' + escapeHtml(typed[i - 1]) + '</span>');
      i--;
    } else {
      parts.unshift('<span class="spelling-missing-char" title="trūkst: ' + escapeHtml(correct[j - 1]) + '">□</span>');
      j--;
    }
  }

  return parts.join("") || '<span class="spelling-missing-char">□</span>';
}

function spellingCardId(card) {
  return state.verbMode ? verbId(card) : cardId(card);
}

function spellingVerbOptions(verb) {
  const forms = verbForms(verb);
  if (state.direction === "de-lv") {
    return [
      { front: forms.tagadne, prompt: "Uzraksti latviski", expected: forms.tagadneLv },
      { front: forms.nakotne, prompt: "Uzraksti latviski", expected: forms.nakotneLv },
      { front: forms.pagatne, prompt: "Uzraksti latviski", expected: forms.pagatneLv }
    ].filter((item) => item.front && item.expected);
  }

  return [
    { front: forms.tagadneLv, prompt: "Uzraksti infinitīvu", expected: forms.tagadne },
    { front: forms.tagadneLv, prompt: "Uzraksti Präteritum", expected: forms.nakotne },
    { front: forms.tagadneLv, prompt: "Uzraksti Partizip II", expected: forms.pagatne }
  ].filter((item) => item.front && item.expected);
}

function currentSpellingTask(card) {
  if (!card) return null;
  const id = spellingCardId(card);
  if (state.spellingTask && state.spellingTask.id === id && state.spellingTask.direction === state.direction) {
    return state.spellingTask;
  }

  if (state.verbMode) {
    const options = spellingVerbOptions(card);
    const picked = options[Math.floor(Math.random() * options.length)] || null;
    state.spellingTask = picked ? { id, direction: state.direction, ...picked } : null;
    return state.spellingTask;
  }

  state.spellingTask = {
    id,
    direction: state.direction,
    front: state.direction === "de-lv" ? formatGermanEntry(card) : card.lv,
    prompt: state.direction === "de-lv" ? "Uzraksti latviski" : "Uzraksti vāciski",
    expected: state.direction === "de-lv" ? card.lv : formatGermanEntry(card)
  };
  return state.spellingTask;
}

function checkSpellingAnswer() {
  clearSpellingAutoNextTimer();
  if (!state.spellingMode) return;
  const card = state.verbMode ? currentVerb() : currentCard();
  const task = currentSpellingTask(card);
  if (!task) return;

  state.spellingAnswer = elements.spellingInput.value || "";
  state.spellingChecked = true;
  state.spellingCorrect = typedAnswerIsCorrect(state.spellingAnswer, task.expected);
  state.revealed = !state.spellingCorrect;
  if (state.spellingCorrect) {
    scheduleSpellingAutoNext(task);
  }
  render();
}

function verbRandomOptions(verb) {
  const forms = verbForms(verb);
  return [
    { show: forms.tagadneLv, prompt: "Uzmini infinitīvu", reveal: forms.tagadne },
    { show: forms.tagadneLv, prompt: "Uzmini Präteritum", reveal: forms.nakotne },
    { show: forms.tagadneLv, prompt: "Uzmini Partizip II", reveal: forms.pagatne }
  ].filter((item) => item.show && item.reveal);
}

function currentVerbChallenge(verb) {
  if (!verb) return null;
  const id = verbId(verb);
  if (state.verbChallenge && state.verbChallenge.id === id) {
    return state.verbChallenge;
  }

  const options = verbRandomOptions(verb);
  const picked = options[Math.floor(Math.random() * options.length)] || null;
  state.verbChallenge = picked ? { id, ...picked } : null;
  return state.verbChallenge;
}

function verbId(verb) {
  const forms = verbForms(verb);
  return `verb:${forms.infinitiv}:${forms.praesens}:${forms.imperfektIndikativ}:${forms.imperfektKonjunktiv}:${forms.partizipVergangenheit}`;
}

function currentVerb() {
  if (state.verbMode && state.timeReviewMode) {
    return currentTimeReviewCard();
  }

  if (state.verbMode && state.problemMode) {
    const deck = problemDeck();
    normalizeProblemIndex();
    return deck.length ? deck[state.problemIndex] : null;
  }

  if (state.verbMode && state.reviewLastSession) {
    return currentLastSessionCard();
  }

  if (state.verbMode && state.reviewKnown) {
    return currentKnownCard();
  }

  if (state.verbMode && !state.reviewKnown) {
    const deck = sessionDeck();
    normalizeSessionIndex();
    const position = sessionPosition();
    if (position >= deck.length) return null;
    return deck[position];
  }
  if (!verbEntries.length) return null;
  if (state.verbIndex >= verbEntries.length) state.verbIndex = 0;
  return verbEntries[state.verbIndex];
}

function cardId(card) {
  return card.id ? `${card.level}:${card.id}` : `${card.level}:${card.de}:${card.lv}`;
}

function deckKey() {
  return `${state.group}:${state.reviewKnown ? "known" : "new"}`;
}

function syncSentenceEntries() {
  return getSentenceEntries();
}

function baseCardsForGroup(group) {
  return allEntries().filter((entry) => entry.level === group && !isUnwantedCard(entry));
}

function allCardsForGroup(group) {
  return allEntries().filter((entry) => entry.level === group);
}

function groupHasOnlyUnwanted(group) {
  const allCards = allCardsForGroup(group);
  return allCards.length > 0 && allCards.every((card) => isUnwantedCard(card));
}

function currentDeck() {
  if (state.studyTestCard) {
    return [state.studyTestCard];
  }

  if (state.timeReviewMode) {
    return timeReviewDeck();
  }

  if (state.problemMode) {
    return problemDeck();
  }

  if (state.reviewLastSession) {
    return lastSessionDeck();
  }

  if (state.reviewKnown) {
    return knownCardsForActiveGroup();
  }

  if (!state.reviewKnown) {
    return sessionDeck();
  }

  let baseCards = baseCardsForGroup(state.group);

  if (baseCards.length === 0) {
    const firstGroup = groups.find((group) => baseCardsForGroup(group).length > 0);
    if (firstGroup) {
      state.group = firstGroup;
      state.index = 0;
      state.revealed = false;
      baseCards = baseCardsForGroup(firstGroup);
    }
  }

  if (!state.learned[state.group]) {
    state.learned[state.group] = [];
  }

  const learnedSet = new Set(state.learned[state.group]);
  const cards = state.reviewKnown
    ? baseCards.filter((card) => learnedSet.has(cardId(card)))
    : baseCards.filter((card) => !learnedSet.has(cardId(card)));
  const ids = cards.map(cardId);
  const idSet = new Set(ids);
  const key = deckKey();

  if (!state.order[key]) {
    state.order[key] = ids;
  } else {
    state.order[key] = state.order[key]
      .filter((id) => idSet.has(id))
      .concat(ids.filter((id) => !state.order[key].includes(id)));
  }

  return state.order[key]
    .map((id) => cards.find((card) => cardId(card) === id))
    .filter(Boolean);
}

function currentCard() {
  if (state.studyTestCard) {
    return state.studyTestCard;
  }

  const deck = currentDeck();
  if (!deck.length) return null;
  if (state.timeReviewMode) {
    return currentTimeReviewCard();
  }
  if (state.problemMode) {
    normalizeProblemIndex();
    return deck.length ? deck[state.problemIndex] : null;
  }
  if (state.reviewLastSession) {
    return state.lastSessionIndex < deck.length ? deck[state.lastSessionIndex] : null;
  }
  if (state.reviewKnown) {
    return state.index < deck.length ? deck[state.index] : null;
  }
  if (!state.reviewKnown && sessionMatchesActiveGroup()) {
    normalizeSessionIndex();
    const position = sessionPosition();
    if (position >= deck.length) return null;
    return deck[position];
  }
  if (state.index >= deck.length) state.index = 0;
  return deck[state.index];
}

function decodeCardQuery(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  try {
    return decodeURIComponent(raw.replace(/\+/g, " "));
  } catch {
    return raw;
  }
}

function normalizeCardSearchValue(value, mode = "plain") {
  const decoded = decodeCardQuery(value)
    .replace(/[•|/]+/g, " ")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase();
  const transliterated = decoded
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss");
  const simplified = decoded
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const valueToUse = mode === "translit" ? transliterated : simplified;
  return valueToUse.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function cardSearchKeys(value) {
  const keys = [
    normalizeCardSearchValue(value),
    normalizeCardSearchValue(value, "translit"),
  ].filter(Boolean);
  return [...new Set(keys)];
}

function stripGermanArticle(value) {
  return String(value || "").replace(/^(der|die|das)\s+/i, "").trim();
}

function formatGermanEntry(entry) {
  const de = String(entry?.de || "").trim();
  if (!de) return "";
  const article = String(entry?.de_article || "").trim();
  if (article && !/^(der|die|das)$/i.test(de.split(/\s+/)[0] || "")) {
    return `${article} ${de}`;
  }
  return de;
}

function cardSearchCandidates(entry) {
  const study = entry.study || {};
  const wordItems = Array.isArray(study.words) ? study.words : [];
  const wordsDe = wordItems.map((item) => item.de || item.word).filter(Boolean);
  const candidates = [
    entry.id,
    study.id,
    entry.word,
    study.word,
    entry.de,
    study.de,
    entry.title,
    study.title,
    study.subtitle,
    wordsDe.join(" "),
  ].filter(Boolean);
  return [
    ...candidates,
    ...candidates.map(stripGermanArticle).filter(Boolean),
  ];
}

function findCardByQuery(query) {
  const queryKeys = cardSearchKeys(query);
  if (!queryKeys.length) return null;

  return allEntries().find((entry) => (
    cardSearchCandidates(entry).some((candidate) => {
      const candidateKeys = cardSearchKeys(candidate);
      return candidateKeys.some((key) => queryKeys.includes(key));
    })
  )) || null;
}

function showStudyCardNotFoundMessage() {
  const notice = document.createElement("div");
  notice.textContent = "Kartīte netika atrasta";
  notice.setAttribute("role", "status");
  notice.style.cssText = [
    "position:fixed",
    "left:50%",
    "top:18px",
    "transform:translateX(-50%)",
    "z-index:9999",
    "padding:10px 14px",
    "border:1px solid rgba(255,255,255,.24)",
    "border-radius:8px",
    "background:rgba(16,24,32,.96)",
    "color:#F3F6FA",
    "font:600 14px/1.25 system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",
    "box-shadow:0 10px 32px rgba(0,0,0,.35)",
  ].join(";");
  document.body.appendChild(notice);
  window.setTimeout(() => notice.remove(), 3200);
}

function activateStudyCardTestMode(value) {
  const query = decodeCardQuery(value);
  if (!query) return false;

  const card = findCardByQuery(query);
  if (!card) {
    console.warn("Study card not found:", query);
    showStudyCardNotFoundMessage();
    return false;
  }

  console.log("Found study card:", card.id || card.study?.id || card.de);
  clearSpellingAutoNextTimer();
  state.studyTestCard = card;
  state.group = card.level;
  state.index = 0;
  state.revealed = false;
  state.verbMode = false;
  state.spellingMode = false;
  state.reviewKnown = false;
  state.reviewLastSession = false;
  state.problemMode = false;
  state.timeReviewMode = null;
  render();
  return true;
}

function clampIndex(index, length) {
  if (length <= 0) {
    return 0;
  }
  return Math.max(0, Math.min(index, length - 1));
}

function selectGroup(group) {
  state.studyTestCard = null;
  state.verbMode = false;
  state.verbRandomMode = false;
  resetVerbChallenge();
  resetSpellingTask();
  state.group = group;
  state.index = 0;
  state.revealed = false;
  state.reviewKnown = false;
  state.reviewLastSession = false;
  state.problemMode = false;
  state.problemIndex = 0;
  state.timeReviewMode = null;
  state.timeReviewIndex = 0;
  state.timeReviewIds = [];
  createSession();
  render();
}

function revealCard() {
  if (state.spellingMode) {
    return;
  }

  if (state.verbMode) {
    if (state.verbRandomMode) {
      state.revealed = !state.revealed;
      render();
      return;
    }

    state.verbStep = (state.verbStep + 1) % 5;
    render();
    return;
  }

  state.revealed = true;
  render();
}

function fallbackUnwantedEntryFromId(id) {
  const parts = String(id || "").split(":");
  if (parts.length >= 3) {
    return {
      id,
      level: parts[0] || "",
      de: parts.slice(1, -1).join(":"),
      lv: parts[parts.length - 1] || ""
    };
  }
  return { id, de: id || "", lv: "", level: "" };
}

function renderUnwantedList() {
  const allCards = groups.flatMap((group) => allCardsForGroup(group));
  const cards = sanitizeUnwantedIds(state.unwantedIds).map((item) => {
    const id = unwantedItemId(item);
    const card = allCards.find((candidate) => cardId(candidate) === id);
    if (card) return { ...card, id };
    if (item && typeof item === "object" && (item.de || item.lv || item.level)) {
      return {
        id,
        de: item.de || fallbackUnwantedEntryFromId(id).de,
        lv: item.lv || fallbackUnwantedEntryFromId(id).lv,
        level: item.level || fallbackUnwantedEntryFromId(id).level,
        ...(item.de_article ? { de_article: item.de_article } : {}),
        ...(item.de_plural ? { de_plural: item.de_plural } : {})
      };
    }
    return fallbackUnwantedEntryFromId(id);
  }).filter((item) => item && item.id);

  if (!cards.length) {
    elements.unwantedList.innerHTML = `<p class="unwanted-empty">Nav nevajadzīgo vārdu.</p>`;
    return;
  }

  elements.unwantedList.innerHTML = cards.map((card) => `
    <div class="unwanted-row">
      <div class="unwanted-word"><strong>${formatGermanEntry(card)} — ${card.lv}</strong><span class="unwanted-level">${groupDisplayLabel(card.level)}</span></div>
      <button type="button" data-restore-unwanted="${card.id}">Atgriezt</button>
    </div>
  `).join("");
}

function openUnwantedList() {
  renderUnwantedList();
  elements.unwantedPanel.hidden = false;
}

function closeUnwantedList() {
  elements.unwantedPanel.hidden = true;
}

function renderMasteredList() {
  const allCards = groups.flatMap((group) => allCardsForGroup(group));
  const cards = sanitizeUnwantedIds(state.masteredIds).map((item) => {
    const id = unwantedItemId(item);
    const card = allCards.find((candidate) => cardId(candidate) === id);
    if (card) return { ...card, id };
    if (item && typeof item === "object" && (item.de || item.lv || item.level)) {
      return {
        id,
        de: item.de || fallbackUnwantedEntryFromId(id).de,
        lv: item.lv || fallbackUnwantedEntryFromId(id).lv,
        level: item.level || fallbackUnwantedEntryFromId(id).level,
        ...(item.de_article ? { de_article: item.de_article } : {}),
        ...(item.de_plural ? { de_plural: item.de_plural } : {})
      };
    }
    return fallbackUnwantedEntryFromId(id);
  }).filter((item) => item && item.id);

  if (!cards.length) {
    elements.masteredList.innerHTML = `<p class="unwanted-empty">Nav 100% zināmo vārdu.</p>`;
    return;
  }

  elements.masteredList.innerHTML = cards.map((card) => `
    <div class="unwanted-row">
      <div class="unwanted-word"><strong>${formatGermanEntry(card)} — ${card.lv}</strong><span class="unwanted-level">${groupDisplayLabel(card.level)}</span></div>
      <button type="button" data-restore-mastered="${card.id}">Atgriezt</button>
    </div>
  `).join("");
}

function openMasteredList() {
  renderMasteredList();
  elements.masteredPanel.hidden = false;
}

function closeMasteredList() {
  elements.masteredPanel.hidden = true;
}

function restoreMastered(id) {
  state.masteredIds = (state.masteredIds || []).filter((item) => unwantedItemId(item) !== id);
  saveMasteredIds();
  renderMasteredList();
  render();
}

function currentVisibleMasterableCard() {
  if (state.verbMode) return null;
  if (state.reviewKnown) return currentKnownCard();
  return currentCard();
}

function addCardToMastered(card) {
  if (!card) return false;
  const id = cardId(card);
  if (!id || masteredSet().has(id)) return false;
  state.masteredIds.push(unwantedEntryForCard(card));
  saveMasteredIds();
  return true;
}

function markCurrentMastered() {
  const card = currentVisibleMasterableCard();
  if (!card) {
    setNotice("Nav kartītes, ko pievienot 100% zināmajiem.");
    openMasteredList();
    return;
  }

  const added = addCardToMastered(card);
  setNotice(added ? "Vārds pievienots 100% zināmajiem." : "Vārds jau ir 100% zināmo sarakstā.");
  renderMasteredList();
  openMasteredList();
}


function restoreUnwanted(id) {
  state.unwantedIds = (state.unwantedIds || []).filter((item) => unwantedItemId(item) !== id);
  saveUnwantedIds();
  if (state.session && state.session.groupKey === activeGroupKey()) {
    createSession();
  }
  renderUnwantedList();
  render();
}

function markCurrentUnwanted() {
  if (state.verbMode) return;
  const card = currentCard();
  if (!card) {
    setNotice("Nav kartītes, ko atzīmēt kā nevajadzīgu.");
    return;
  }

  const id = cardId(card);
  const ids = unwantedSet();
  if (!ids.has(id)) {
    state.unwantedIds.push(unwantedEntryForCard(card));
    saveUnwantedIds();
  }

  if (state.session && state.session.groupKey === activeGroupKey() && Array.isArray(state.session.ids)) {
    state.session.ids = state.session.ids.filter((item) => item !== id);
    state.session.originalIds = (state.session.originalIds || []).filter((item) => item !== id);
    state.session.completedIds = (state.session.completedIds || []).filter((item) => item !== id);
    state.session.total = Math.max(0, (state.session.total || 0) - 1);
    normalizeSessionIndex();
    saveSession();
  }

  state.order = Object.fromEntries(Object.entries(state.order).map(([key, ids]) => [key, ids.filter((item) => item !== id)]));
  state.revealed = false;
  resetSpellingTask();
  setNotice("Vārds atzīmēts kā nevajadzīgs.");
  render();
}

function markKnown() {
  if (state.spellingMode && !state.spellingCorrect) {
    setNotice("Vispirms ievadi pareizu atbildi un nospied Pārbaudīt.");
    return;
  }

  if (state.timeReviewMode) {
    const card = state.verbMode ? currentVerb() : currentCard();
    const config = timeReviewConfig();
    if (!card) {
      setNotice(config.done);
      render();
      return;
    }

    updateLastCorrectTimestamp(idForSessionKey(card, activeGroupKey()));
    nextTimeReviewCard();
    setNotice(currentTimeReviewCard() ? `Turpinām: ${config.label}.` : config.done);
    render();
    return;
  }

  if (state.problemMode) {
    const card = state.verbMode ? currentVerb() : currentCard();
    if (!card) {
      setNotice(problemEmptyMessage());
      render();
      return;
    }

    const id = idForSessionKey(card, problemCardGroupKey(card));
    completeProblemCard(id);
    setNotice(problemDeck().length ? "Problemātiskais vārds atzīmēts kā zināms." : problemEmptyMessage());
    render();
    return;
  }

  if (state.reviewLastSession) {
    const card = currentLastSessionCard();
    if (!card) {
      setNotice("Pēdējās sesijas pārskatīšana pabeigta.");
      render();
      return;
    }

    completeLastSessionReviewCard(idForSessionKey(card, state.lastCompletedSession.groupKey));
    if (!currentLastSessionCard()) {
      setNotice("Pēdējās sesijas pārskatīšana pabeigta.");
    } else {
      setNotice("Turpinām pēdējās sesijas pārskatīšanu.");
    }
    render();
    return;
  }

  if (state.reviewKnown) {
    if (!currentKnownCard()) {
      setNotice("Zināmo vārdu pārskatīšana pabeigta.");
      render();
      return;
    }

    nextKnownCard();
    if (!currentKnownCard()) {
      setNotice("Zināmo vārdu pārskatīšana pabeigta.");
    } else {
      setNotice("Turpinām zināmo vārdu pārskatīšanu.");
    }
    render();
    return;
  }

  if (state.verbMode) {
    const verb = currentVerb();
    if (!verb) {
      setNotice("Nav darbības vārdu, ko atzīmēt.");
      return;
    }

    if (!state.learned.verbs) {
      state.learned.verbs = [];
    }

    const id = verbId(verb);
    if (!state.learned.verbs.includes(id)) {
      state.learned.verbs.push(id);
    }

    updateReviewStatus(id, true);
    recordLearnedTimestamp(id);
    saveProgress();
    completeCurrentSessionCard(id);
    setNotice("Darbības vārds atzīmēts kā zināms.");
    render();
    return;
  }

  const card = currentCard();
  if (!card) {
    setNotice("Nav kartīšu, ko atzīmēt.");
    return;
  }

  const id = cardId(card);
  if (!state.learned[state.group].includes(id)) {
    state.learned[state.group].push(id);
  }

  updateReviewStatus(id, true);
  recordLearnedTimestamp(id);
  saveProgress();
  state.revealed = false;
  setNotice("Atzīmēts kā zināms.");
  completeCurrentSessionCard(id);
  render();
}

function markUnknown() {
  if (state.spellingMode) {
    const card = state.verbMode ? currentVerb() : currentCard();
    const task = currentSpellingTask(card);
    if (!card || !task) {
      setNotice("Nav kartītes, ko atzīmēt.");
      render();
      return;
    }

    updateProblemUnknown(spellingCardId(card));
    updateReviewStatus(spellingCardId(card), false);
    state.spellingChecked = true;
    state.spellingCorrect = false;
    state.revealed = true;
    setNotice("Atbilde atklāta. Vārds paliek sesijā.");
    render();
    return;
  }

  if (state.timeReviewMode) {
    const card = state.verbMode ? currentVerb() : currentCard();
    const config = timeReviewConfig();
    if (!card) {
      setNotice(config.done);
      render();
      return;
    }

    const groupKey = activeGroupKey();
    const id = idForSessionKey(card, groupKey);
    updateProblemUnknown(id);
    if (!state.learned[groupKey]) {
      state.learned[groupKey] = [];
    }
    state.learned[groupKey] = state.learned[groupKey].filter((learnedId) => learnedId !== id);
    updateReviewStatus(id, false);
    saveProgress();
    nextTimeReviewCard();
    setNotice(currentTimeReviewCard() ? "Atgriezts mācīšanās režīmā." : config.done);
    render();
    return;
  }

  if (state.problemMode) {
    const card = state.verbMode ? currentVerb() : currentCard();
    if (!card) {
      setNotice(problemEmptyMessage());
      render();
      return;
    }

    updateProblemUnknown(idForSessionKey(card, problemCardGroupKey(card)));
    rotateProblemDeck();
    setNotice("Atstāts problemātiskajos vārdos.");
    render();
    return;
  }

  if (state.reviewLastSession) {
    const card = currentLastSessionCard();
    if (!card) {
      setNotice("Pēdējās sesijas pārskatīšana pabeigta.");
      render();
      return;
    }

    const groupKey = state.lastCompletedSession.groupKey;
    const id = idForSessionKey(card, groupKey);
    updateProblemUnknown(id);
    if (!state.learned[groupKey]) {
      state.learned[groupKey] = [];
    }

    state.learned[groupKey] = state.learned[groupKey].filter((learnedId) => learnedId !== id);
    updateReviewStatus(id, false);
    saveProgress();
    nextLastSessionCard();
    if (!currentLastSessionCard()) {
      setNotice("Pēdējās sesijas pārskatīšana pabeigta.");
    } else {
      setNotice("Atgriezts mācīšanās režīmā.");
    }
    render();
    return;
  }

  if (state.reviewKnown) {
    const card = currentKnownCard();
    if (!card) {
      setNotice("Zināmo vārdu pārskatīšana pabeigta.");
      render();
      return;
    }

    const groupKey = activeGroupKey();
    const id = idForSessionKey(card, groupKey);
    updateProblemUnknown(id);
    if (!state.learned[groupKey]) {
      state.learned[groupKey] = [];
    }

    state.learned[groupKey] = state.learned[groupKey].filter((learnedId) => learnedId !== id);
    delete state.reviewStatus[id];
    saveProgress();
    saveReviewStatus();
    state.revealed = false;
    state.verbStep = 0;

    if (!currentKnownCard()) {
      setNotice("Zināmo vārdu pārskatīšana pabeigta.");
    } else {
      setNotice("Atgriezts mācīšanās režīmā.");
    }
    render();
    return;
  }

  if (state.verbMode) {
    const verb = currentVerb();
    const id = verb ? verbId(verb) : "";
    if (verb && state.learned.verbs) {
      state.learned.verbs = state.learned.verbs.filter((learnedId) => learnedId !== id);
    }

    if (id) {
      updateProblemUnknown(id);
      updateReviewStatus(id, false);
    }
    saveProgress();
    rotateSession();
    setNotice("Atstāts pārskatīšanai.");
    render();
    return;
  }

  const card = currentCard();
  if (!card) {
    setNotice("Nav kartīšu, ko atzīmēt.");
    return;
  }

  const id = cardId(card);
  updateProblemUnknown(id);
  state.learned[state.group] = state.learned[state.group].filter((learnedId) => learnedId !== id);
  updateReviewStatus(id, false);
  saveProgress();
  state.revealed = true;
  setNotice("Atstāts pārskatīšanai.");
  rotateSession();
  render();
}

function nextCard() {
  clearSpellingAutoNextTimer();
  if (state.studyTestCard) {
    state.revealed = false;
    render();
    return;
  }

  if (state.timeReviewMode) {
    const config = timeReviewConfig();
    if (!currentTimeReviewCard()) {
      setNotice(config.done);
      render();
      return;
    }

    nextTimeReviewCard();
    if (!currentTimeReviewCard()) {
      setNotice(config.done);
    }
    render();
    return;
  }

  if (state.problemMode) {
    rotateProblemDeck();
    render();
    return;
  }

  if (state.reviewLastSession) {
    if (!currentLastSessionCard()) {
      setNotice("Pēdējās sesijas pārskatīšana pabeigta.");
      render();
      return;
    }

    nextLastSessionCard();
    if (!currentLastSessionCard()) {
      setNotice("Pēdējās sesijas pārskatīšana pabeigta.");
    }
    render();
    return;
  }

  if (state.reviewKnown) {
    if (!currentKnownCard()) {
      setNotice("Zināmo vārdu pārskatīšana pabeigta.");
      render();
      return;
    }

    nextKnownCard();
    if (!currentKnownCard()) {
      setNotice("Zināmo vārdu pārskatīšana pabeigta.");
    }
    render();
    return;
  }

  if (state.verbMode) {
    rotateSession();
    render();
    return;
  }

  if (!state.reviewKnown && sessionMatchesActiveGroup()) {
    rotateSession();
    render();
    return;
  }

  const deck = currentDeck();
  state.revealed = false;
  if (deck.length > 0) {
    state.index = (state.index + 1) % deck.length;
  } else {
    state.index = 0;
  }
  render();
}

function continueSpelling() {
  if (!state.spellingMode || !state.spellingChecked) return;
  nextCard();
}
function shuffleDeck() {
  if (state.problemMode) {
    setNotice("Problemātiskie vārdi tiek rādīti rotācijā.");
    render();
    return;
  }

  if (!state.reviewKnown && sessionMatchesActiveGroup()) {
    const ids = state.session.ids;
    for (let i = ids.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = ids[i];
      ids[i] = ids[j];
      ids[j] = temp;
    }

    state.session.index = 0;
    state.index = 0;
    state.verbIndex = 0;
    state.revealed = false;
    state.verbStep = 0;
    saveSession();
    setNotice("Sesijas secība sajaukta.");
    render();
    return;
  }

  const deck = currentDeck();
  for (let i = deck.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }

  state.order[deckKey()] = deck.map(cardId);
  state.index = 0;
  state.revealed = false;
  setNotice("Secība sajaukta.");
  render();
}

function toggleDirection() {
  state.direction = state.direction === "de-lv" ? "lv-de" : "de-lv";
  state.revealed = false;
  resetSpellingTask();
  saveDirection();
  render();
}

function toggleVerbRandomMode() {
  if (!state.verbMode) return;
  state.verbRandomMode = !state.verbRandomMode;
  state.revealed = false;
  state.verbStep = 0;
  resetVerbChallenge();
  setNotice(state.verbRandomMode ? "Darbības vārdu jaukšana ieslēgta." : "Darbības vārdu jaukšana izslēgta.");
  render();
}

function toggleSpellingMode() {
  state.spellingMode = !state.spellingMode;
  if (state.spellingMode) {
    state.reviewKnown = false;
    state.reviewLastSession = false;
    state.problemMode = false;
    state.timeReviewMode = null;
    ensureSession();
  }
  state.revealed = false;
  resetSpellingTask();
  setNotice(state.spellingMode ? "Pareizrakstības režīms ieslēgts." : "Pareizrakstības režīms izslēgts.");
  render();
}

function reviewKnown() {
  state.reviewLastSession = false;
  state.problemMode = false;
  state.problemIndex = 0;
  state.timeReviewMode = null;
  state.timeReviewIndex = 0;
  state.timeReviewIds = [];
  state.reviewKnown = true;
  state.index = 0;
  if (state.session) {
    state.session.index = 0;
    saveSession();
  }
  state.revealed = false;
  setNotice("Rādām zināmās kartītes.");
  render();
}

function selectProblemWords() {
  state.problemMode = true;
  state.problemScope = "group";
  state.reviewKnown = false;
  state.reviewLastSession = false;
  state.timeReviewMode = null;
  state.timeReviewIndex = 0;
  state.timeReviewIds = [];
  state.problemIndex = 0;
  state.index = 0;
  state.verbIndex = 0;
  state.verbStep = 0;
  state.revealed = false;
  setNotice("Rādām problemātiskos vārdus.");
  render();
}

function selectAllProblemWords() {
  state.verbMode = false;
  state.problemMode = true;
  state.problemScope = "all";
  state.reviewKnown = false;
  state.reviewLastSession = false;
  state.timeReviewMode = null;
  state.timeReviewIndex = 0;
  state.timeReviewIds = [];
  state.problemIndex = 0;
  state.index = 0;
  state.verbIndex = 0;
  state.verbStep = 0;
  state.revealed = false;
  setNotice("Rādām visus problemātiskos vārdus.");
  render();
}

function reviewLastSession() {
  if (!state.lastCompletedSession || !Array.isArray(state.lastCompletedSession.ids) || !state.lastCompletedSession.ids.length) {
    setNotice("Nav pabeigtas sesijas, ko pārskatīt.");
    return;
  }

  state.reviewLastSession = true;
  state.reviewKnown = false;
  state.problemMode = false;
  state.problemIndex = 0;
  state.timeReviewMode = null;
  state.timeReviewIndex = 0;
  state.timeReviewIds = [];
  state.pendingLastSessionIds = state.lastCompletedSession.ids.slice();
  state.lastSessionIndex = 0;
  state.index = 0;
  state.verbIndex = 0;
  state.verbStep = 0;
  state.revealed = false;
  state.verbMode = state.lastCompletedSession.groupKey === "verbs";
  setNotice("Rādām pēdējo pabeigto sesiju.");
  render();
}

function archiveLastSession() {
  state.lastCompletedSession = null;
  state.reviewLastSession = false;
  state.problemMode = false;
  state.timeReviewMode = null;
  state.timeReviewIndex = 0;
  state.timeReviewIds = [];
  state.lastSessionIndex = 0;
  state.pendingLastSessionIds = [];
  saveLastCompletedSession();
  createSession();
  setNotice(state.session && state.session.ids.length
    ? "Pēdējā sesija atzīmēta kā iemācīta. Ielādēta nākamā sesija."
    : "Pēdējā sesija atzīmēta kā iemācīta.");
  render();
}

function restoreAll() {
  const groupKey = activeGroupKey();
  state.reviewLastSession = false;
  state.problemMode = false;
  state.problemIndex = 0;
  state.timeReviewMode = null;
  state.timeReviewIndex = 0;
  state.timeReviewIds = [];
  state.learned[groupKey] = [];
  resetReviewDataForGroup(groupKey);
  state.reviewKnown = false;
  state.index = 0;
  state.verbIndex = 0;
  state.verbStep = 0;
  state.revealed = false;
  saveProgress();
  createSession();
  setNotice("Visas kartītes atgrieztas aktīvajā grupā.");
  render();
}

function updateStats() {
  render();
}

function renderCard() {
  render();
}

function restoreCurrentWord() {
  if (state.verbMode) {
    const verb = currentVerb();
    if (!verb) {
      setNotice("Nav kartītes, ko atgriezt.");
      return;
    }

    const id = verbId(verb);
    if (!state.learned.verbs) {
      state.learned.verbs = [];
    }
    state.learned.verbs = state.learned.verbs.filter((learnedId) => learnedId !== id);
    delete state.reviewStatus[id];
    saveReviewStatus();
    state.reviewKnown = false;
    state.verbStep = 0;
    saveProgress();
    setNotice("Kartīte atgriezta aktīvajā grupā.");
    updateStats();
    renderCard();
    return;
  }

  const card = currentCard();
  if (!card) {
    setNotice("Nav kartītes, ko atgriezt.");
    return;
  }

  if (!state.learned[state.group]) {
    state.learned[state.group] = [];
  }

  const id = cardId(card);
  state.learned[state.group] = state.learned[state.group].filter((learnedId) => learnedId !== id);
  delete state.reviewStatus[id];
  saveReviewStatus();
  state.reviewKnown = false;
  state.revealed = false;
  saveProgress();
  setNotice("Kartīte atgriezta aktīvajā grupā.");
  updateStats();
  renderCard();
}

function selectVerbs() {
  state.verbMode = true;
  state.verbIndex = 0;
  state.verbStep = 0;
  resetVerbChallenge();
  resetSpellingTask();
  state.revealed = false;
  state.reviewKnown = false;
  state.reviewLastSession = false;
  state.problemMode = false;
  state.problemIndex = 0;
  state.timeReviewMode = null;
  state.timeReviewIndex = 0;
  state.timeReviewIds = [];
  createSession();
  render();
}

function setNotice(text) {
  elements.notice.textContent = text;
}

function groupLabel(group) {
  if (typeof groupDisplayLabel === "function") {
    return groupDisplayLabel(group);
  }
  return group === "Sätze" ? "Teikumi" : group;
}

function renderGroupButtons() {
  if (!elements.groupButtons) return;
  elements.groupButtons.innerHTML = "";
  const displayOrder = ["A1", "A2", "B1", "Sätze", "B2", "C1", "C2", "verbs"];

  function setGroupButtonLabel(button, label, count) {
    button.innerHTML = "";
    const name = document.createElement("span");
    name.className = "group-label-name";
    name.textContent = label;
    const separator = document.createElement("span");
    separator.className = "group-label-separator";
    separator.textContent = " · ";
    const value = document.createElement("span");
    value.className = "group-label-count";
    value.textContent = count;
    button.append(name, separator, value);
  }

  for (const group of displayOrder) {
    const button = document.createElement("button");
    button.type = "button";

    if (group === "verbs") {
      setGroupButtonLabel(button, "Darbības vārdi", verbEntries.length);
      button.className = state.verbMode ? "group-btn active" : "group-btn";
      button.addEventListener("click", selectVerbs);
    } else {
      setGroupButtonLabel(button, groupLabel(group), baseCardsForGroup(group).length);
      button.className = !state.verbMode && group === state.group ? "group-btn active" : "group-btn";
      button.addEventListener("click", () => selectGroup(group));
    }

    elements.groupButtons.appendChild(button);
  }
}

function selectMode(mode) {
  state.mode = mode;
  state.reviewLastSession = false;
  state.problemMode = false;
  state.problemIndex = 0;
  state.reviewKnown = false;
  state.timeReviewMode = null;
  state.timeReviewIndex = 0;
  state.timeReviewIds = [];
  resetSpellingTask();
  saveMode();
  createSession();
  render();
}

function renderModeButtons() {
  elements.modeButtons.innerHTML = "";
  const showVerbRandomButton = state.verbMode;
  elements.verbRandomBtn.hidden = !showVerbRandomButton;
  elements.verbRandomBtn.style.display = showVerbRandomButton ? "" : "none";
  elements.verbRandomBtn.textContent = "Jaukt darbības vārdus";
  elements.verbRandomBtn.className = state.verbRandomMode ? "group-btn active" : "";
  elements.verbRandomBtn.setAttribute("aria-pressed", state.verbRandomMode ? "true" : "false");
  elements.spellingModeBtn.className = state.spellingMode ? "group-btn active" : "";
  elements.spellingModeBtn.setAttribute("aria-pressed", state.spellingMode ? "true" : "false");
  if (elements.unwantedBtn) elements.unwantedBtn.hidden = true;
  elements.markMasteredBtn.hidden = true;
  elements.markMasteredBtn.style.display = "none";
  elements.markUnwantedBtn.hidden = state.verbMode;
  elements.unwantedListBtn.hidden = state.verbMode;
  for (const [mode, config] of Object.entries(sessionModes)) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = config.label;
    button.className = mode === state.mode ? "group-btn active" : "group-btn";
    button.addEventListener("click", () => selectMode(mode));
    elements.modeButtons.appendChild(button);
  }
}

function renderSpellingControls() {
  elements.spellingPanel.hidden = !state.spellingMode;
  elements.spellingPanel.style.display = state.spellingMode ? "" : "none";
  elements.nextBtn.hidden = !state.spellingMode;
  elements.nextBtn.style.display = state.spellingMode ? "" : "none";
  elements.knownBtn.disabled = state.spellingMode && !state.spellingCorrect;
  if (elements.continueSpellingBtn) {
    elements.continueSpellingBtn.hidden = !state.spellingMode || !state.spellingChecked;
    elements.continueSpellingBtn.disabled = !state.spellingMode || !state.spellingChecked;
  }

  if (!state.spellingMode) {
    elements.spellingResult.textContent = "";
    return;
  }

  if (document.activeElement !== elements.spellingInput) {
    elements.spellingInput.value = state.spellingAnswer || "";
  }

  const card = state.verbMode ? currentVerb() : currentCard();
  const task = currentSpellingTask(card);
  elements.spellingInput.placeholder = task ? "Ieraksti atbildi" : "";

  if (!state.spellingChecked) {
    elements.spellingResult.textContent = "";
  } else if (state.spellingCorrect) {
    elements.spellingResult.innerHTML = `<div class="spelling-correct-label">${UI_ICONS.correct} Pareizi!</div>`;
  } else if (task) {
    elements.spellingResult.innerHTML = `
      <div class="spelling-incorrect-label">${UI_ICONS.incorrect} Nepareizi</div>
      <div class="spelling-user-answer">${spellingDiffHtml(state.spellingAnswer, task.expected)}</div>
      <div class="spelling-expected-label">Pareizi:</div>
      <div class="spelling-expected-answer">${escapeHtml(normalizeTypedAnswer(task.expected))}</div>
    `;
  } else {
    elements.spellingResult.textContent = `${UI_ICONS.incorrect} Nepareizi`;
  }
}

function renderVerbCard() {
  const verb = currentVerb();
  const deck = state.timeReviewMode ? timeReviewDeck() : (state.problemMode ? problemDeck() : (state.reviewLastSession ? lastSessionDeck() : (state.reviewKnown ? knownCardsForActiveGroup() : sessionDeck())));
  const timeConfig = state.timeReviewMode ? timeReviewConfig() : null;
  renderGroupButtons();
  renderModeButtons();
  renderSpellingControls();

  if (!state.learned.verbs) {
    state.learned.verbs = [];
  }

  elements.activeGroup.textContent = state.reviewLastSession
    ? "Pēdējā sesija"
    : (state.timeReviewMode
    ? timeConfig.label
    : (state.problemMode
    ? (state.problemScope === "all" ? "Visi problemātiskie" : "Problemātiskie vārdi")
    : (state.reviewKnown ? "Darbības vārdi zināmie" : "Darbības vārdi")));
  elements.totalWords.textContent = String(state.timeReviewMode ? deck.length : (state.problemMode ? deck.length : (state.reviewLastSession ? lastSessionReviewTotalCount() : (state.reviewKnown ? deck.length : sessionTotalCount()))));
  elements.learnedWords.textContent = String(state.learned.verbs.length);
  elements.directionBtn.textContent = state.direction === "de-lv"
    ? "Vācu ➔ latviešu"
    : "Latviešu ➔ vācu";

  if (!verb) {
    elements.cardLevel.className = "verb-headings";
    elements.cardLevel.innerHTML = "<span>Infinitiv</span><span>Präsens</span><span>Imperfekt<br>- Indikativ</span><span>Imperfekt<br>- Konjunktiv</span><span>Partizip der<br>Vergangenheit</span>";
    elements.word.textContent = state.reviewLastSession
      ? "Pēdējās sesijas pārskatīšana pabeigta."
      : (state.timeReviewMode
      ? (state.timeReviewIds.length ? timeConfig.done : timeConfig.empty)
      : (state.problemMode
      ? problemEmptyMessage()
      : (state.reviewKnown
      ? "Zināmo vārdu pārskatīšana pabeigta."
      : (groupHasOnlyUnwanted(state.group) ? "Šajā grupā nav aktīvu vārdu." : "Šajā sesijā nav kartīšu."))));
    elements.translation.textContent = "";
    elements.hint.textContent = "";
    return;
  }

  if (state.spellingMode) {
    const task = currentSpellingTask(verb);
    elements.cardLevel.className = "badge";
    elements.cardLevel.textContent = "Pareizrakstība · Darbības vārdi";
    elements.word.textContent = task ? task.front : "";
    elements.translation.textContent = state.revealed && task ? `Atbilde: ${task.expected}` : "";
    elements.hint.textContent = task ? task.prompt : "Šim darbības vārdam nav pareizrakstības uzdevuma.";
    renderSpellingControls();
    return;
  }

  if (state.verbRandomMode) {
    const challenge = currentVerbChallenge(verb);
    elements.cardLevel.className = "badge";
    elements.cardLevel.textContent = "Darbības vārdi · Jaukts treniņš";
    elements.word.textContent = challenge ? challenge.show : "";
    elements.translation.textContent = state.revealed && challenge ? `Atbilde: ${challenge.reveal}` : "";
    elements.hint.textContent = challenge
      ? `${challenge.prompt}. Klikšķini uz kartītes, lai redzētu atbildi.`
      : "Šim darbības vārdam nav pietiekami daudz formu jaukšanai.";
    return;
  }

  const forms = verbForms(verb);
  const stages = [
    { label: "Infinitiv", buttonLabel: "Infinitiv", value: forms.infinitiv, translation: forms.infinitivLv },
    { label: "Präsens", buttonLabel: "Präsens", value: forms.praesens, translation: forms.praesensLv },
    { label: "Imperfekt Indikativ", buttonLabel: "Imperfekt<br>- Indikativ", value: forms.imperfektIndikativ, translation: forms.imperfektIndikativLv },
    { label: "Imperfekt Konjunktiv", buttonLabel: "Imperfekt<br>- Konjunktiv", value: forms.imperfektKonjunktiv, translation: forms.imperfektKonjunktivLv },
    { label: "Partizip der Vergangenheit", buttonLabel: "Partizip der<br>Vergangenheit", value: forms.partizipVergangenheit, translation: forms.partizipVergangenheitLv }
  ];
  const stage = stages[state.verbStep] || stages[0];

  elements.cardLevel.className = "verb-headings";
  elements.cardLevel.innerHTML = stages
    .map((item) => `<span class="${item.label === stage.label ? "active" : ""}">${item.buttonLabel}</span>`)
    .join("");
  elements.word.textContent = stage.value;
  elements.translation.textContent = `Tulkojums: ${stage.translation}`;
  elements.hint.textContent = state.reviewLastSession
    ? `Pēdējā sesija: ${Math.min(lastSessionReviewDoneCount() + 1, lastSessionReviewTotalCount())} / ${lastSessionReviewTotalCount()}. Klikšķini uz kartītes, lai pārslēgtu formu.`
    : (state.timeReviewMode
    ? `${timeConfig.label}: ${state.timeReviewIndex + 1} / ${deck.length}. Klikšķini uz kartītes, lai pārslēgtu formu.`
    : (state.problemMode
    ? `${state.problemScope === "all" ? "Visi problemātiskie" : "Problemātiskie"}: ${state.problemIndex + 1} / ${deck.length}. Klikšķini uz kartītes, lai pārslēgtu formu.`
    : (state.reviewKnown
    ? `Zināmie: ${state.index + 1} / ${deck.length}. Klikšķini uz kartītes, lai pārslēgtu formu.`
    : `Sesija: ${Math.min(sessionDoneCount() + 1, sessionTotalCount())} / ${sessionTotalCount()}. Klikšķini uz kartītes, lai pārslēgtu formu.`)));
}

function escapeStudyCardText(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatLvDisplay(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (/[.!?]/.test(raw) && !/[;•]/.test(raw)) return raw;
  const parts = raw
    .split(/\s*[;•,]\s*/u)
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length <= 1) return raw.replace(/\s*•\s*/g, " • ");
  return parts
    .map((part) => part.charAt(0).toLocaleUpperCase("lv-LV") + part.slice(1))
    .join(" • ");
}

function clearStudyCard() {
  const cardElement = elements.word?.closest(".card");
  cardElement?.classList.remove("has-study-card");
  cardElement?.classList.remove("has-rich-study-card");
  if (cardElement) delete cardElement.dataset.studyLayout;
  if (elements.cardStudyExtra) {
    elements.cardStudyExtra.hidden = true;
    elements.cardStudyExtra.innerHTML = "";
  }
}

function renderStudyCard(card) {
  const study = card.study;
  if (!study) return false;
  const layout = study.layout || "standardStudy";
  const isComparisonStudy = layout === "comparisonStudy";

  /*
   * standardStudy kvalitātes standarts:
   * - explanation: vismaz 5 skaidrojuma punkti.
   * - examples: 6 līdz 8 dabiskas ikdienas vācu valodas piemēri.
   * - comparison: 4 līdz 6 salīdzinājuma rindas.
   * - tip: tieši 2 praktiski padomi.
   * - important: 2 līdz 4 svarīgas piezīmes.
   * - Piemēriem jābūt dabiskiem, ikdienā lietojamiem vācu teikumiem.
   * - Neizmantot mākslīgus vai nedabiskus teikumus tikai tāpēc, lai parādītu gramatiku.
   * - Kartītei jāpalīdz saprast nozīmes atšķirības, ne tikai iegaumēt tulkojumu.
   */

  const isGermanToLatvian = state.direction === "de-lv";
  elements.word.textContent = isComparisonStudy
    ? formatLvDisplay(study.title || study.translation || card.lv)
    : (isGermanToLatvian ? formatGermanEntry(card) : formatLvDisplay(study.translation));
  elements.translation.textContent = state.revealed
    ? (isComparisonStudy
      ? (study.subtitle || formatGermanEntry(card))
      : (isGermanToLatvian ? formatLvDisplay(study.translation) : formatGermanEntry(card)))
    : "";
  elements.hint.textContent = state.revealed
    ? ""
    : "Klikšķini uz kartītes, lai atvērtu skaidrojumu.";

  if (!state.revealed) return true;

  const cardElement = elements.word.closest(".card");
  cardElement?.classList.add("has-study-card");
  cardElement?.classList.remove("has-rich-study-card");
  if (cardElement) cardElement.dataset.studyLayout = layout;

  const studyAccentColors = ["blue", "green", "yellow", "orange", "purple", "red"];
  const hasDirectAccentTerms = (rules) => studyAccentColors.some((accent) => Array.isArray(rules?.[accent]));
  const sectionAccentRules = (section, index) => {
    const rules = study.sectionAccents?.[section];
    return Array.isArray(rules) ? rules[index] : rules;
  };
  const fieldAccentRules = (rules, field) => rules?.[field] || (hasDirectAccentTerms(rules) ? rules : undefined);
  const stripLeadingArticle = (value) => String(value || "").replace(/^(der|die|das)\s+/i, "").trim();
  const withComparisonFieldFallback = (accentRules, item, field) => {
    const existing = fieldAccentRules(accentRules, field);
    if (existing && hasDirectAccentTerms(existing)) return existing;

    const text = String(item?.[field] || "").trim();
    if (!text) return existing;

    if (field === "word") {
      return { green: [text, stripLeadingArticle(text)].filter(Boolean) };
    }
    if (field === "meaning") {
      const terms = text.split(/[•/]/).map((part) => part.trim()).filter(Boolean);
      return { purple: terms.length ? terms : [text] };
    }
    if (field === "example") {
      const parts = text.split(/\s*[=–-]\s*/);
      const fallback = {};
      if (parts[0]) fallback.green = [parts[0].trim()];
      if (parts[1]) {
        fallback.purple = parts[1].trim().split(/\s+/).filter((word) => word.length > 2).slice(0, 6);
      }
      return Object.keys(fallback).length ? fallback : existing;
    }
    return existing;
  };
  const withMatrixFieldFallback = (accentRules, row, field) => {
    const mappedField = field === "word" ? "de" : field;
    const existing = fieldAccentRules(accentRules, field) || fieldAccentRules(accentRules, mappedField);
    if (existing && hasDirectAccentTerms(existing)) return existing;

    const text = String(row?.[field] || row?.[mappedField] || "").trim();
    if (!text) return existing;
    if (mappedField === "de") return { green: [text, stripLeadingArticle(text)].filter(Boolean) };
    if (mappedField === "lv" || mappedField === "translation" || mappedField === "meaning") {
      const terms = text.split(/[•/]/).map((part) => part.trim()).filter(Boolean);
      return { purple: terms.length ? terms : [text] };
    }
    if (mappedField === "example") return withComparisonFieldFallback(accentRules, { example: text }, "example");
    return existing;
  };
  const escapeAccentTerm = (term) => String(term).replace(/[.*+?^\${}()|[\]\\]/g, "\\$&");
  const accentBoundaryPattern = (term) => "(?<![\\p{L}\\p{N}_])" + escapeAccentTerm(term) + "(?![\\p{L}\\p{N}_])";
  const collectAccentRules = (accentRules) => studyAccentColors.flatMap((accent) => (
    Array.isArray(accentRules?.[accent]) ? accentRules[accent] : []
  ).filter((term) => String(term || "").trim()).map((term) => ({ accent, term: String(term) })));
  const formatStudyText = (value, accentRules = study.accents) => {
    const raw = String(value || "");
    const rules = collectAccentRules(accentRules);
    if (!raw || !rules.length) return escapeStudyCardText(raw);

    const matches = rules.flatMap(({ accent, term }) => {
      const regex = new RegExp(accentBoundaryPattern(term), "giu");
      return Array.from(raw.matchAll(regex), (match) => ({
        accent,
        start: match.index,
        end: match.index + match[0].length,
        value: match[0],
        length: match[0].length,
      }));
    }).sort((a, b) => a.start - b.start || b.length - a.length);

    const selected = [];
    let coveredUntil = -1;
    for (const match of matches) {
      if (match.start >= coveredUntil) {
        selected.push(match);
        coveredUntil = match.end;
      }
    }
    if (!selected.length) return escapeStudyCardText(raw);

    let html = "";
    let cursor = 0;
    for (const match of selected) {
      html += escapeStudyCardText(raw.slice(cursor, match.start));
      html += '<span class="study-accent-' + match.accent + '">' + escapeStudyCardText(match.value) + '</span>';
      cursor = match.end;
    }
    html += escapeStudyCardText(raw.slice(cursor));
    return html;
  };
  const hasStudyContent = (value) => {
    if (value === undefined || value === null) return false;
    if (typeof value === "string") return value.trim().length > 0;
    if (Array.isArray(value)) return value.some(hasStudyContent);
    if (typeof value === "object") return Object.values(value).some(hasStudyContent);
    return Boolean(value);
  };
  const studyLines = (value) => {
    if (!hasStudyContent(value)) return [];
    if (Array.isArray(value)) return value.filter(hasStudyContent).map((item) => (
      typeof item === "string" ? item : [item.text, item.example].filter(hasStudyContent).join(" ")
    )).filter(hasStudyContent);
    if (typeof value === "object") {
      if (Array.isArray(value.items)) return value.items.filter(hasStudyContent);
      return [value.text, value.example].filter(hasStudyContent);
    }
    return [String(value)];
  };
  const textAccentRules = (section, index) => {
    const indexedRules = sectionAccentRules(section, index);
    return fieldAccentRules(indexedRules, "text") || indexedRules || study.sectionAccents?.[section]?.text || study.sectionAccents?.[section];
  };
  const renderStudyParagraphs = (value, section, field) => studyLines(value).map((line, index) => {
    const accentRules = field
      ? fieldAccentRules(sectionAccentRules(section, index), field) || fieldAccentRules(study.sectionAccents?.[section], field)
      : textAccentRules(section, index);
    return `<p>${formatStudyText(line, accentRules)}</p>`;
  }).join("");

  const examples = (Array.isArray(study.examples) ? study.examples : []).map((example, index) => {
    const accentRules = sectionAccentRules("examples", index);
    return `
    <div>${formatStudyText(example.de, fieldAccentRules(accentRules, "de"))}</div>
      <span>=</span>
      <span>${formatStudyText(example.lv, fieldAccentRules(accentRules, "lv"))}</span>
  `;
  }).join("");
  const comparison = state.revealed && Array.isArray(study.comparison) && study.comparison.length ? `
    <section class="study-section study-comparison">
      <h3>${STUDY_SECTION_ICONS.comparison} Salīdzinājums</h3>
      <div class="study-standard-table study-comparison-table">
        <div class="study-table-header">Vārds</div>
        <div class="study-table-header">Nozīme</div>
        <div class="study-table-header">Piemērs</div>
        ${study.comparison.map((item, index) => {
          const accentRules = sectionAccentRules("comparison", index);
          return `
            <strong>${formatStudyText(item.word, withComparisonFieldFallback(accentRules, item, "word"))}</strong>
            <span>${formatStudyText(item.meaning, withComparisonFieldFallback(accentRules, item, "meaning"))}</span>
            <span>${formatStudyText(item.example, withComparisonFieldFallback(accentRules, item, "example"))}</span>
          `;
        }).join("")}
      </div>
    </section>
  ` : "";
  const info = state.revealed && Array.isArray(study.info) && study.info.length ? `
    <section class="study-info">
      ${study.info.map((line, index) => `<p>${STUDY_SECTION_ICONS.info} ${formatStudyText(line, sectionAccentRules("info", index))}</p>`).join("")}
    </section>
  ` : "";
  const renderTipExamples = (items, accentRules) => (Array.isArray(items) ? items : []).map((item, index) => {
    const itemAccents = Array.isArray(accentRules) ? accentRules[index] : accentRules;
    const de = formatStudyText(item.de, fieldAccentRules(itemAccents, "de"));
    const lv = formatStudyText(item.lv, fieldAccentRules(itemAccents, "lv"));
    const separator = `<span class="study-tip-separator">${escapeStudyCardText(item.separator || "=")}</span>`;
    return `
    <p class="study-tip-example${item.stacked ? " study-tip-example-stacked" : ""}">${item.stacked ? `${de}<br>${separator}<br>${lv}` : `${de} ${separator} ${lv}`}</p>
  `;
  }).join("");
  const hasTipRight = Boolean(
    study.tip?.rightTitle
    || study.tip?.right
    || study.tip?.example
    || (Array.isArray(study.tip?.rightItems) && study.tip.rightItems.length)
  );
  const tipLeft = Array.isArray(study.tip?.leftBlocks) && study.tip.leftBlocks.length
    ? study.tip.leftBlocks.map((block, index) => `
      <div class="study-tip-subsection">
        <p>${formatStudyText(block.text || "", fieldAccentRules(study.sectionAccents?.tip?.leftBlocks?.[index], "text"))}</p>
        ${renderTipExamples(block.examples, study.sectionAccents?.tip?.leftBlocks?.[index]?.examples)}
      </div>
    `).join("")
    : Array.isArray(study.tip)
      ? study.tip.map((line, index) => `<p>${formatStudyText(line, textAccentRules("tip", index) || study.sectionAccents?.tip?.leftBlocks?.[index]?.text)}</p>`).join("")
    : `
      <p>${formatStudyText(study.tip?.left || study.tip?.text || "", study.sectionAccents?.tip?.left)}</p>
      ${Array.isArray(study.tip?.leftItems) && study.tip.leftItems.length ? `<ul>${study.tip.leftItems.map((item) => `<li>${formatStudyText(item, study.sectionAccents?.tip?.leftItems)}</li>`).join("")}</ul>` : ""}
    `;
  const tip = state.revealed && hasStudyContent(study.tip) ? `
    <section class="study-section study-tip">
      <h3>${STUDY_SECTION_ICONS.tip} Padoms</h3>
      <div class="study-tip-grid${hasTipRight ? "" : " study-tip-grid-single"}">
        <div class="study-tip-panel">
          ${tipLeft}
        </div>
        ${hasTipRight ? `<div class="study-tip-panel">
          ${study.tip.rightTitle ? `<h4>${escapeStudyCardText(study.tip.rightTitle)}</h4>` : ""}
          ${Array.isArray(study.tip.rightItems) && study.tip.rightItems.length
            ? renderTipExamples(study.tip.rightItems, study.sectionAccents?.tip?.rightItems)
            : `<p>${formatStudyText(study.tip.right || study.tip.example || "", study.sectionAccents?.tip?.right)}</p>`}
        </div>` : ""}
      </div>
    </section>
  ` : "";

  const splitMainIdea = (value) => {
    if (typeof value === "string") {
      const match = value.match(/Galvenā doma\s*:\s*([^.!?]*(?:[.!?]|$))/i);
      if (match) {
        return {
          mainIdea: match[1].trim(),
          explanationLines: studyLines(value.replace(match[0], "").trim())
        };
      }
    }
    const lines = studyLines(value);
    const firstMainIdeaIndex = lines.findIndex((line) => /^\s*Galvenā doma\s*:/i.test(line));
    if (firstMainIdeaIndex >= 0) {
      return {
        mainIdea: lines[firstMainIdeaIndex].replace(/^\s*Galvenā doma\s*:\s*/i, ""),
        explanationLines: lines.filter((_, index) => index !== firstMainIdeaIndex)
      };
    }
    return { mainIdea: "", explanationLines: lines };
  };
  const splitExplanation = splitMainIdea(study.explanation);
  const mainIdea = splitExplanation.mainIdea ? `
    <section class="study-main-idea">
      <h3>Galvenā doma</h3>
      <p>${formatStudyText(splitExplanation.mainIdea, study.sectionAccents?.explanation?.mainIdea || study.sectionAccents?.explanation?.text || study.sectionAccents?.explanation)}</p>
    </section>
  ` : "";
  const explanationBody = splitExplanation.explanationLines.map((line, index) => {
    const accentRules = textAccentRules("explanation", index);
    return `<p>${formatStudyText(line, accentRules)}</p>`;
  }).join("");
  const explanation = Array.isArray(study.explanationLines) && study.explanationLines.length ? `
    <section class="study-explanation">
      <h3>${STUDY_SECTION_ICONS.explanation} Skaidrojums</h3>
      ${explanationBody}
      <ul class="study-explanation-list">
        ${study.explanationLines.map((line) => `<li>${formatStudyText(line)}</li>`).join("")}
      </ul>
    </section>
  ` : `<section class="study-explanation"><h3>${STUDY_SECTION_ICONS.explanation} Skaidrojums</h3>${explanationBody}</section>`;
  const renderComparisonWordCards = () => {
    const items = Array.isArray(study.words) ? study.words : (Array.isArray(study.items) ? study.items : (Array.isArray(study.terms) ? study.terms : []));
    if (!items.length) return "";
    return `
      <section class="comparison-card-grid">
        ${items.map((item, index) => {
          const accentRules = sectionAccentRules("comparisonCards", index);
          const example = typeof item.example === "string" ? item.example : [item.example?.de, item.example?.lv].filter(Boolean).join(" = ");
          return `
            <article class="comparison-word-card">
              <div class="comparison-word-icon">${escapeStudyCardText(item.icon || "•")}</div>
              <h3>${formatStudyText(item.lv || item.title || "", fieldAccentRules(accentRules, "lv"))}</h3>
              <strong>${formatStudyText(item.de || item.word || "", fieldAccentRules(accentRules, "de"))}</strong>
              <p>${formatStudyText(item.description || item.meaning || "", fieldAccentRules(accentRules, "description"))}</p>
              ${example ? `<div class="comparison-card-example">${formatStudyText(example, fieldAccentRules(accentRules, "example"))}</div>` : ""}
            </article>
          `;
        }).join("")}
      </section>
    `;
  };

  const renderComparisonMatrix = () => {
    const rows = Array.isArray(study.comparisonTable) ? study.comparisonTable : (Array.isArray(study.matrix) ? study.matrix : (Array.isArray(study.comparisonRows) ? study.comparisonRows : []));
    if (!rows.length) return "";
    return `
      <section class="study-section study-comparison">
        <h3>${STUDY_SECTION_ICONS.comparison} Salīdzinājums</h3>
        <div class="study-standard-table comparison-matrix-table">
          <div class="study-table-header">LV</div>
          <div class="study-table-header">DE</div>
          <div class="study-table-header">Galvenā nozīme</div>
          <div class="study-table-header">Raksturo</div>
          <div class="study-table-header">Piemērs</div>
          <div class="study-table-header">Tulkojums</div>
          ${rows.map((row, index) => {
            const accentRules = sectionAccentRules("comparisonTable", index) || sectionAccentRules("matrix", index);
            return `
              <strong>${formatStudyText(row.lv || "", withMatrixFieldFallback(accentRules, row, "lv"))}</strong>
              <strong>${formatStudyText(row.de || row.word || "", withMatrixFieldFallback(accentRules, row, "de"))}</strong>
              <span>${formatStudyText(row.meaning || row.mainMeaning || "", withMatrixFieldFallback(accentRules, row, "meaning"))}</span>
              <span>${formatStudyText(row.describes || row.context || "", fieldAccentRules(accentRules, "describes"))}</span>
              <span>${formatStudyText(row.example || "", withMatrixFieldFallback(accentRules, row, "example"))}</span>
              <span>${formatStudyText(row.translation || "", withMatrixFieldFallback(accentRules, row, "translation"))}</span>
            `;
          }).join("")}
        </div>
      </section>
    `;
  };

  const renderComparisonFocus = () => {
    const focus = study.importantComparison || study.focusComparison || study.keyComparison;
    const lines = Array.isArray(focus) ? focus : (focus ? [focus] : []);
    if (!lines.length) return "";
    return `
      <section class="comparison-focus">
        <h3>${STUDY_SECTION_ICONS.comparison} Svarīgs salīdzinājums</h3>
        ${lines.map((line, index) => `<p>${formatStudyText(line, sectionAccentRules("importantComparison", index))}</p>`).join("")}
      </section>
    `;
  };

  const renderComparisonImportant = () => {
    const value = Array.isArray(study.important) ? study.important : (Array.isArray(study.important?.items) ? study.important.items : []);
    if (!value.length) return "";
    return `
      <section class="study-important comparison-important">
        <h3>${STUDY_SECTION_ICONS.important} Svarīgi</h3>
        ${value.map((line, index) => `<p>${formatStudyText(line, sectionAccentRules("important", index))}</p>`).join("")}
      </section>
    `;
  };

  const renderMistakes = () => {
    const rows = Array.isArray(study.mistakes) ? study.mistakes : (Array.isArray(study.typicalMistakes) ? study.typicalMistakes : []);
    if (!rows.length) return "";
    return `
      <section class="study-section comparison-mistakes">
        <h3>${STUDY_SECTION_ICONS.mistakes} Tipiskās kļūdas</h3>
        <div class="comparison-mistake-list">
          ${rows.map((row, index) => {
            const accentRules = sectionAccentRules("mistakes", index);
            if (typeof row === "string") return `<p>${formatStudyText(row, accentRules)}</p>`;
            return `
              <div class="comparison-mistake-row">
                <span class="comparison-mistake-wrong">${UI_ICONS.wrong} ${formatStudyText(row.wrong || "", accentRules?.wrong || accentRules)}</span>
                <span class="comparison-mistake-right">${UI_ICONS.right} ${formatStudyText(row.right || "", accentRules?.right || accentRules)}</span>
                ${row.note ? `<small>${formatStudyText(row.note, accentRules?.note || accentRules)}</small>` : ""}
              </div>
            `;
          }).join("")}
        </div>
      </section>
    `;
  };

  const renderRemember = () => {
    const lines = Array.isArray(study.remember) ? study.remember : (study.remember ? [study.remember] : []);
    if (!lines.length) return "";
    return `
      <section class="comparison-remember">
        <h3>${STUDY_SECTION_ICONS.remember} Atceries</h3>
        ${lines.map((line, index) => `<p>${formatStudyText(line, sectionAccentRules("remember", index))}</p>`).join("")}
      </section>
    `;
  };

  if (isComparisonStudy) {
    const lead = study.lead || study.subtitleText || study.question || "";
    elements.cardStudyExtra.hidden = false;
    elements.cardStudyExtra.innerHTML = `
      <div class="comparison-study-badge">${STUDY_SECTION_ICONS.comparisonBadge} SALĪDZINĀJUMA KARTĪTE</div>
      ${lead ? `<p class="comparison-study-lead">${formatStudyText(lead, study.sectionAccents?.lead)}</p>` : ""}
      ${study.explanation ? explanation : ""}
      ${renderComparisonWordCards()}
      <section class="study-section study-examples">
        <h3>${STUDY_SECTION_ICONS.examples} Piemēri</h3>
        <div class="study-standard-table study-examples-table">${examples}</div>
      </section>
      ${renderComparisonMatrix()}
      ${renderComparisonFocus()}
      ${tip}
      ${renderComparisonImportant()}
      ${renderMistakes()}
      ${renderRemember()}
    `;
    return true;
  }

  const important = state.revealed && hasStudyContent(study.important) ? `
    <section class="study-important">
      <h3>${STUDY_SECTION_ICONS.important} Svarīgi</h3>
      ${Array.isArray(study.important) || typeof study.important === "string"
        ? renderStudyParagraphs(study.important, "important")
        : studyLines(study.important).map((line, index) => {
          const accentRules = index === 0
            ? (sectionAccentRules("important", 0)?.text || sectionAccentRules("important", 0) || study.accents?.important)
            : (sectionAccentRules("important", 0)?.example || sectionAccentRules("important", index) || study.accents?.important);
          return `<p>${formatStudyText(line, accentRules)}</p>`;
        }).join("")}
    </section>
  ` : "";
  elements.cardStudyExtra.hidden = false;
  elements.cardStudyExtra.innerHTML = `
    ${mainIdea}
    ${explanation}
    <section class="study-section study-examples">
      <h3>${STUDY_SECTION_ICONS.examples} Piemēri</h3>
      <div class="study-standard-table study-examples-table">${examples}</div>
    </section>
${comparison}
    ${info}
    ${tip}
    ${important}
  `;
  return true;
}

function render() {
  clearStudyCard();
  if (state.verbMode) {
    renderVerbCard();
    return;
  }

  const card = currentCard();
  const deck = currentDeck();
  const timeConfig = state.timeReviewMode ? timeReviewConfig() : null;
  renderGroupButtons();
  renderModeButtons();
  renderSpellingControls();
  const total = state.reviewLastSession
    ? lastSessionReviewTotalCount()
    : (state.timeReviewMode
    ? deck.length
    : (state.problemMode
    ? deck.length
    : (state.reviewKnown
    ? deck.length
    : (!state.reviewKnown && sessionMatchesActiveGroup()
    ? sessionTotalCount()
    : (state.group === "Sätze" ? syncSentenceEntries().length : baseCardsForGroup(state.group).length)))));
  const learned = state.learned[state.group] ? state.learned[state.group].length : 0;

  elements.activeGroup.textContent = state.reviewLastSession
    ? "Pēdējā sesija"
    : (state.timeReviewMode
    ? timeConfig.label
    : (state.problemMode
    ? (state.problemScope === "all" ? "Visi problemātiskie" : "Problemātiskie vārdi")
    : (state.reviewKnown ? `${groupDisplayLabel(state.group)} zināmie` : groupDisplayLabel(state.group))));
  elements.totalWords.textContent = String(total);
  elements.learnedWords.textContent = String(learned);
  elements.directionBtn.textContent = state.direction === "de-lv"
    ? "Vācu ➔ latviešu"
    : "Latviešu ➔ vācu";

  if (!card) {
    elements.cardLevel.className = "badge";
    elements.cardLevel.textContent = groupDisplayLabel(state.group);
    elements.word.textContent = state.reviewLastSession
      ? "Pēdējās sesijas pārskatīšana pabeigta."
      : (state.timeReviewMode
      ? (state.timeReviewIds.length ? timeConfig.done : timeConfig.empty)
      : (state.problemMode
      ? problemEmptyMessage()
      : (state.reviewKnown
      ? "Zināmo vārdu pārskatīšana pabeigta."
      : (groupHasOnlyUnwanted(state.group) ? "Šajā grupā nav aktīvu vārdu." : "Šajā sesijā nav kartīšu."))));
    elements.translation.textContent = "";
    elements.hint.textContent = state.reviewLastSession
      ? ""
      : (state.timeReviewMode
      ? ""
      : (state.problemMode
      ? ""
      : (state.reviewKnown
      ? ""
      : "Izvēlies citu režīmu vai atgriezies vēlāk pārskatīšanai.")));
    return;
  }

  if (state.spellingMode) {
    const task = currentSpellingTask(card);
    elements.cardLevel.className = "badge";
    elements.cardLevel.textContent = `${groupDisplayLabel(card.level)} · Pareizrakstība`;
    elements.word.textContent = task ? task.front : "";
    elements.translation.textContent = state.revealed && task ? `Atbilde: ${task.expected}` : "";
    elements.hint.textContent = task ? task.prompt : "";
    renderSpellingControls();
    return;
  }

  elements.cardLevel.className = "badge";
  elements.cardLevel.textContent = state.reviewLastSession
    ? `${groupDisplayLabel(card.level)} · Pēdējā sesija: ${Math.min(lastSessionReviewDoneCount() + 1, lastSessionReviewTotalCount())} / ${lastSessionReviewTotalCount()}`
    : (state.timeReviewMode
    ? `${card.level} · ${timeConfig.label}: ${state.timeReviewIndex + 1}/${deck.length}`
    : (state.problemMode
    ? `${groupDisplayLabel(problemCardGroupKey(card))} · ${state.problemScope === "all" ? "Visi problemātiskie" : "Problemātiskie"}: ${state.problemIndex + 1}/${deck.length}`
    : (!state.reviewKnown && sessionMatchesActiveGroup()
    ? `${groupDisplayLabel(card.level)} · Sesija: ${Math.min(sessionDoneCount() + 1, sessionTotalCount())} / ${sessionTotalCount()}`
    : `${groupDisplayLabel(card.level)} · ${state.index + 1}/${deck.length}`)));
  if (renderStudyCard(card)) return;
  elements.word.textContent = state.direction === "de-lv" ? formatGermanEntry(card) : card.lv;
  elements.translation.textContent = state.revealed
    ? (state.direction === "de-lv" ? card.lv : formatGermanEntry(card))
    : "";
  elements.hint.textContent = state.revealed
    ? ""
    : "Klikšķini uz kartītes, lai redzētu tulkojumu.";
}

initStaticCourseLessons();

try {
elements.kurssBtn.addEventListener("click", openKurss);
elements.kurssBackBtn.addEventListener("click", handleKurssBack);
elements.kurssCloseBtn.addEventListener("click", closeKurss);
elements.kurssPronunciationBtn.addEventListener("click", openPronunciationLesson);
elements.kurssArticlesBtn.addEventListener("click", openArticlesLesson);
elements.kurssLessonsBtn.addEventListener("click", openLessonsMenu);
courseLessonIds.forEach((lessonId) => {
  const button = elements[`${lessonId}Btn`];
  const panel = elements[lessonId];
  if (button) {
    button.addEventListener("click", () => openCourseLesson(lessonId));
  }
  if (panel) {
    panel.addEventListener("toggle", handleCourseLessonToggle, true);
    panel.addEventListener("click", handleCourseLessonClick);
  }
});
elements.kurssVerbBasicsBtn.addEventListener("click", openVerbBasicsLesson);
elements.kurssSentenceStructureBtn.addEventListener("click", openSentenceStructureLesson);
elements.kurssVowelsLessonBtn.addEventListener("click", openVowelsLesson);
elements.kurssConsonantsLessonBtn.addEventListener("click", openConsonantsLesson);
elements.kurssPanel.addEventListener("click", (event) => {
  if (event.target === elements.kurssPanel) closeKurss();
});
elements.pamatiBtn.addEventListener("click", openPamati);
elements.pamatiCloseBtn.addEventListener("click", closePamati);
elements.pamatiPrevBtn.addEventListener("click", previousPamati);
elements.pamatiNextBtn.addEventListener("click", nextPamati);
elements.pamatiPanel.addEventListener("click", (event) => {
  if (event.target === elements.pamatiPanel) closePamati();
});
document.querySelector(".card")?.addEventListener("click", revealCard);
elements.knownBtn.addEventListener("click", markKnown);
elements.unknownBtn.addEventListener("click", markUnknown);
elements.nextBtn.addEventListener("click", nextCard);
elements.shuffleBtn.addEventListener("click", shuffleDeck);
elements.verbRandomBtn.addEventListener("click", toggleVerbRandomMode);
elements.spellingModeBtn.addEventListener("click", toggleSpellingMode);
elements.checkSpellingBtn.addEventListener("click", checkSpellingAnswer);
elements.continueSpellingBtn?.addEventListener("click", continueSpelling);
elements.spellingInput?.addEventListener("input", () => {
  clearSpellingAutoNextTimer();
  state.spellingAnswer = elements.spellingInput.value;
  state.spellingChecked = false;
  state.spellingCorrect = false;
  if (elements.continueSpellingBtn) {
    elements.continueSpellingBtn.hidden = true;
    elements.continueSpellingBtn.disabled = true;
  }
  elements.knownBtn.disabled = state.spellingMode;
  elements.spellingResult.textContent = "";
});
elements.spellingInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkSpellingAnswer();
  }
});
elements.directionBtn.addEventListener("click", toggleDirection);
if (elements.unwantedBtn) {
  elements.unwantedBtn.hidden = true;
}
elements.markUnwantedBtn.addEventListener("click", markCurrentUnwanted);
elements.masteredListBtn.addEventListener("click", markCurrentMastered);
elements.masteredCloseBtn.addEventListener("click", closeMasteredList);
elements.masteredPanel.addEventListener("click", (event) => {
  if (event.target === elements.masteredPanel) closeMasteredList();
});
elements.masteredList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-restore-mastered]");
  if (button) restoreMastered(button.dataset.restoreMastered);
});
elements.unwantedListBtn.addEventListener("click", openUnwantedList);
elements.unwantedCloseBtn.addEventListener("click", closeUnwantedList);
elements.unwantedPanel.addEventListener("click", (event) => {
  if (event.target === elements.unwantedPanel) closeUnwantedList();
});
elements.unwantedList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-restore-unwanted]");
  if (button) restoreUnwanted(button.dataset.restoreUnwanted);
});
elements.extraOptionsBtn.addEventListener("click", () => {
  const opening = elements.extraOptions.hidden;
  elements.extraOptions.hidden = !opening;
  elements.extraOptionsBtn.setAttribute("aria-expanded", opening ? "true" : "false");
  elements.extraOptionsBtn.textContent = opening ? "Papildu opcijas ▲" : "Papildu opcijas ▼";
});
elements.reviewBtn.addEventListener("click", reviewKnown);
elements.reviewLastSessionBtn.addEventListener("click", reviewLastSession);
elements.archiveLastSessionBtn.addEventListener("click", archiveLastSession);
elements.problemWordsBtn.addEventListener("click", selectProblemWords);
elements.allProblemWordsBtn.addEventListener("click", selectAllProblemWords);
elements.weeklyReviewBtn.addEventListener("click", () => startTimeReview("week"));
elements.monthlyReviewBtn.addEventListener("click", () => startTimeReview("month"));
elements.restoreBtn.addEventListener("click", restoreAll);
elements.restoreCurrentBtn.addEventListener("click", restoreCurrentWord);
} catch (error) {
  console.error("UI event binding failed:", error);
}

const studyCardTestParam = new URLSearchParams(window.location.search).get("study")
  || new URLSearchParams(window.location.search).get("card");

if (!activateStudyCardTestMode(studyCardTestParam)) {
  try {
    render();
  } catch (error) {
    console.error("Render failed:", error);
    renderGroupButtons();
    if (elements.notice) {
      elements.notice.textContent = "Neizdevās ielādēt kartītes. Pārlādē lapu vai pārbaudi, vai visi datu faili ir pieejami.";
    }
  }
}
