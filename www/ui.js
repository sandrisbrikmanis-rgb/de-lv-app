function normalizeIdText(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const usedStableIds = new Set();

function buildStableId(card) {
  const level = normalizeIdText(card.level || "x");
  const de = normalizeIdText(card.de);
  if (!de) return null;
  const article = normalizeIdText(card.de_article);
  const base = article ? `${level}-${article}-${de}` : `${level}-${de}`;
  if (!usedStableIds.has(base)) {
    usedStableIds.add(base);
    return base;
  }
  let n = 2;
  while (usedStableIds.has(`${base}-${n}`)) n++;
  const id = `${base}-${n}`;
  usedStableIds.add(id);
  return id;
}

function ensureStableId(card) {
  enrichGermanNounArticle(card);
  if (card.id) {
    usedStableIds.add(card.id);
    return card;
  }
  const id = buildStableId(card);
  if (id) card.id = id;
  return card;
}

function enrichGermanNounArticle(card) {
  if (!card || card.de_article) return card;
  const de = String(card.de || "").trim();
  if (!de || /^(der|die|das)\s+/i.test(de)) return card;
  const lookup = window.GERMAN_NOUN_ARTICLES || {};
  const hit = lookup[de.toLowerCase()];
  if (!hit) return card;
  const article = String(hit.article || "").trim();
  if (!/^(der|die|das)$/i.test(article)) return card;
  card.de_article = article.toLowerCase();
  const noun = String(hit.noun || de).trim();
  if (noun && de === de.toLowerCase()) card.de = noun;
  if (!card.de_plural && hit.plural) {
    const plural = String(hit.plural).trim();
    card.de_plural = /^(der|die|das)\s+/i.test(plural) ? plural : `die ${plural}`;
  }
  return card;
}

function datasetWords(name) {
  const dataset = window[name];
  return Array.isArray(dataset) ? dataset.map(ensureStableId) : [];
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
  target: "🎯"
};

const APP_ICON_SVG_ATTRS = 'viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';

const APP_ICON_PATHS = {
  flame: '<path d="M12 22c3.5-2.2 5.5-5.4 5.5-9.5 0-2.2-.9-4.2-2.4-5.7C14.2 5.1 12 4.5 12 2c0 0-2 1.8-3.2 4.1C7.3 7.6 6.5 9.7 6.5 12c0 4.1 2 7.3 5.5 10z"></path><path d="M12 22c1.6-1 2.5-2.8 2.5-5 0-1.4-.6-2.7-1.6-3.6-.8-.7-1.9-1.1-2.9-1.1 0 0 .2 2.1 1.1 3.3.7 1 1.9 2.1 1.9 3.4 0 1.4-.6 2.6-1 3z"></path>',
  pen: '<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path><path d="m15 5 4 4"></path>',
  trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>',
  warning: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path>'
};

function appIconSvg(name, className = "ui-icon") {
  return `<svg class="${className}" ${APP_ICON_SVG_ATTRS}>${APP_ICON_PATHS[name] || ""}</svg>`;
}

function buttonWithIcon(iconName, label, iconClass = "ui-icon") {
  return `${appIconSvg(iconName, iconClass)}<span class="ui-btn-label">${escapeHtml(label)}</span>`;
}

function modeButtonHtml(mode, sessionMax) {
  const names = { easy: "Viegls", normal: "Normāls", intense: "Intensīvs" };
  return `<span class="mode-btn-label"><span class="mode-dot mode-dot--${mode}" aria-hidden="true"></span><span class="mode-btn-text">${escapeHtml(names[mode])} · ${sessionMax}</span></span>`;
}

function compactToolButtonHtml(iconName, shortLabel) {
  return `<span class="detail-tool-btn-content"><span class="detail-tool-btn-icon">${appIconSvg(iconName, "ui-icon ui-icon--tool-compact")}</span><span class="detail-tool-btn-text">${escapeHtml(shortLabel)}</span></span>`;
}

const INFO_POPUP_VERSION = "2";

const INFO_CARD_ICON_SVGS = {
  unwanted: '<svg class="info-card-icon" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"></path><circle cx="12" cy="12" r="3"></circle><line x1="3" y1="3" x2="21" y2="21"></line></svg>',
  speaker: '<svg class="info-card-icon info-card-icon--speaker" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>'
};

function infoMockDirectionBtn() {
  return '<span class="info-mock-btn info-mock-btn--direction"><span class="direction-label">🔄 DE ➔ LV</span></span>';
}

function infoMockToolBtn(iconName, shortLabel) {
  return `<span class="info-mock-btn info-mock-btn--tool">${compactToolButtonHtml(iconName, shortLabel)}</span>`;
}

function infoMockModeRow() {
  return `<span class="info-mock-modes">${modeButtonHtml("easy", 10)}${modeButtonHtml("normal", 15)}${modeButtonHtml("intense", 30)}</span>`;
}

function infoMockActionRow() {
  return `<span class="info-mock-actions"><span class="info-mock-btn info-mock-btn--known">Zinu pareizi</span><span class="info-mock-btn info-mock-btn--unknown">Nezinu</span><span class="info-mock-btn info-mock-btn--next">Nākamais vārds</span></span>`;
}

function infoMockExtraBtn() {
  return '<span class="info-mock-btn info-mock-btn--extra">Papildu opcijas ▼</span>';
}

function infoFeatureRow(iconHtml, title, bodyHtml) {
  return `<div class="info-feature-row"><div class="info-feature-icon" aria-hidden="true">${iconHtml}</div><div class="info-feature-text"><h3>${escapeHtml(title)}</h3><p>${bodyHtml}</p></div></div>`;
}

function infoPopupBodyHtml() {
  return `<div class="info-feature-list">
    ${infoFeatureRow(infoMockDirectionBtn(), "Tulkojuma virziens", "Nospied, lai pārslēgtu starp <strong>DE→LV</strong> un <strong>LV→DE</strong>.")}
    ${infoFeatureRow(infoMockToolBtn("flame", "Probl."), "Problemātiskie vārdi", "Nospied <strong>Probl.</strong>, lai mācītos vārdus, ar kuriem esi kļūdījies. Parastajā plūsmā «Nezinu» pievieno vārdu šeit; šeit «Zinu pareizi» samazina kļūdu pakāpi.")}
    ${infoFeatureRow(infoMockToolBtn("pen", "Rakst."), "Pareizrakstība", "Nospied <strong>Rakst.</strong>, lai pirms atbildes jāieraksta vārds ar roku.")}
    ${infoFeatureRow(infoMockModeRow(), "Sesijas intensitāte", "Izvēlies, cik vārdu mācīties vienā sesijā: <strong>Viegls · 10</strong>, <strong>Normāls · 20</strong> vai <strong>Intensīvs · 30</strong>.")}
    ${infoFeatureRow(INFO_CARD_ICON_SVGS.speaker, "Klausīšanās", "Nospied skaļruņa ikonu kartītē, lai noklausītos izrunu.")}
    ${infoFeatureRow(INFO_CARD_ICON_SVGS.unwanted, "Nevajadzīgie vārdi", "Nospied pārsvītroto aci kartītes stūrī — vārds pazudīs no plūsmas. Atgriezt vari sadaļā Papildu opcijas.")}
    ${infoFeatureRow(infoMockActionRow(), "Atbildes", "<strong>Zinu pareizi</strong> — zini atbildi. <strong>Nezinu</strong> — palīdz atcerēties un pievieno problemātiskajiem. <strong>Nākamais vārds</strong> — izlaiž bez vērtējuma.")}
    ${infoFeatureRow(infoMockExtraBtn(), "Papildu opcijas", "Atver <strong>Papildu opcijas</strong>, lai skatītu nedēļas un mēneša pārskatu, Zināmos vārdus un atgrieztu paslēptos.")}
  </div>`;
}

const verbEntries = typeof VERB_ENTRIES !== "undefined" ? VERB_ENTRIES : (window.VERB_ENTRIES || []);

window.flashcards = flashcards;

const wordEntries = flashcards.filter((card) => card.level !== "Sätze");
const saetze = flashcards.filter((card) => card.level === "Sätze");

window.wordEntries = (Array.isArray(window.wordEntries) && window.wordEntries.length) ? window.wordEntries : wordEntries;
window["sätze"] = window["sätze"] || [];
window.sentenceEntries = window.sentenceEntries || [];
window.COMPARISON_STUDY_CARDS = [];

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
const audioAutoplayStorageKey = "deLvAudioAutoplay";
const modeStorageKey = "deLvFlashcardsMode";
const reviewStorageKey = "deLvFlashcardsReviewStatus";
const sessionStorageKey = "deLvFlashcardsSession";
const lastCompletedSessionStorageKey = "deLvFlashcardsLastCompletedSession";
const problemStatsStorageKey = "deLvFlashcardsProblemStats";
const legacyUnwantedStorageKey = "deLvFlashcardsUnwanted";
const unwantedStorageKey = "deLvFlashcardsExplicitUnwanted";
const masteredStorageKey = "deLvFlashcardsMastered100";
const groupCompleteShownStorageKey = "deLvFlashcardsGroupCompleteShown";
const sessionModes = {
  easy: { name: "Viegls", newCount: 5, reviewCount: 5, sessionMax: 10 },
  normal: { name: "Normāls", newCount: 15, reviewCount: 5, sessionMax: 20 },
  intense: { name: "Intensīvs", newCount: 20, reviewCount: 10, sessionMax: 30 }
};

const MAIN_MENU_ITEMS = [
  { key: "A1", label: "A1", type: "group" },
  { key: "A2", label: "A2", type: "group" },
  { key: "B1", label: "B1", type: "group" },
  { key: "B2", label: "B2", type: "group" },
  { key: "C1", label: "C1", type: "group" },
  { key: "C2", label: "C2", type: "group" },
  { key: "kurss", label: "Kurss", type: "kurss" },
  { key: "Sätze", label: "Teikumi", type: "group" },
  { key: "verbs", label: "Darbības vārdi", type: "verbs" }
];

const state = {
  navScreen: "home",
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
  learned: loadProgress(),
  audioAutoplay: loadAudioAutoplay()
};

let spellingAutoNextTimer = null;

const elements = {
  homeMenuScreen: document.getElementById("homeMenuScreen"),
  mainMenuButtons: document.getElementById("mainMenuButtons"),
  groupDetailScreen: document.getElementById("groupDetailScreen"),
  navBackBtn: document.getElementById("navBackBtn"),
  detailScreenTitle: document.getElementById("detailScreenTitle"),
  modeButtons: document.getElementById("modeButtons"),
  cardLevel: document.getElementById("cardLevel"),
  word: document.getElementById("word"),
  cardAutoplayBtn: document.getElementById("cardAutoplayBtn"),
  singularAudioBtn: document.getElementById("singularAudioBtn"),
  singularTranslationAudioBtn: document.getElementById("singularTranslationAudioBtn"),
  flashcardPluralRow: document.getElementById("flashcardPluralRow"),
  flashcardPluralText: document.getElementById("flashcardPluralText"),
  pluralAudioBtn: document.getElementById("pluralAudioBtn"),
  translation: document.getElementById("translation"),
  cardStudyExtra: document.getElementById("cardStudyExtra"),
  sessionCompleteOverlay: document.getElementById("sessionCompleteOverlay"),
  restartSessionBtn: document.getElementById("restartSessionBtn"),
  markSessionLearnedBtn: document.getElementById("markSessionLearnedBtn"),
  groupCompleteOverlay: document.getElementById("groupCompleteOverlay"),
  groupCompleteTitle: document.getElementById("groupCompleteTitle"),
  groupCompleteDesc: document.getElementById("groupCompleteDesc"),
  chooseAnotherGroupBtn: document.getElementById("chooseAnotherGroupBtn"),
  hint: document.getElementById("hint"),
  notice: document.getElementById("notice"),
  knownBtn: document.getElementById("knownBtn"),
  unknownBtn: document.getElementById("unknownBtn"),
  nextBtn: document.getElementById("nextBtn"),
  verbRandomBtn: document.getElementById("verbRandomBtn"),
  spellingModeBtn: document.getElementById("spellingModeBtn"),
  infoBtn: document.getElementById("infoBtn"),
  spellingPanel: document.getElementById("spellingPanel"),
  spellingInput: document.getElementById("spellingInput"),
  checkSpellingBtn: document.getElementById("checkSpellingBtn"),
  continueSpellingBtn: document.getElementById("continueSpellingBtn"),
  spellingResult: document.getElementById("spellingResult"),
  directionBtn: document.getElementById("directionBtn"),
  directionLabel: document.getElementById("directionLabel"),
  extraOptionsBtn: document.getElementById("extraOptionsBtn"),
  extraOptions: document.getElementById("extraOptions"),
  problemWordsBtn: document.getElementById("problemWordsBtn"),
  weeklyReviewBtn: document.getElementById("weeklyReviewBtn"),
  monthlyReviewBtn: document.getElementById("monthlyReviewBtn"),
  restoreBtn: document.getElementById("restoreBtn"),
  unwantedBtn: document.getElementById("unwantedBtn"),
  markMasteredBtn: document.getElementById("markMasteredBtn"),
  cardUnwantedBtn: document.getElementById("cardUnwantedBtn"),
  masteredListBtn: document.getElementById("masteredListBtn"),
  unwantedListBtn: document.getElementById("unwantedListBtn"),
  kurssPanel: document.getElementById("kurssPanel"),
  kurssBackBtn: document.getElementById("kurssBackBtn"),
  kurssCloseBtn: document.getElementById("kurssCloseBtn"),
  kurssTitle: document.getElementById("kurssTitle"),
  kurssSubtitle: document.getElementById("kurssSubtitle"),
  kurssList: document.getElementById("kurssList"),
  kurssTip: document.getElementById("kurssTip"),
  kurssPronunciationBtn: document.getElementById("kurssPronunciationBtn"),
  kurssArticlesBtn: document.getElementById("kurssArticlesBtn"),
  kurssPronounsBtn: document.getElementById("kurssPronounsBtn"),
  kurssLessonsBtn: document.getElementById("kurssLessonsBtn"),
  kurssVerbBasicsBtn: document.getElementById("kurssVerbBasicsBtn"),
  kurssSentenceStructureBtn: document.getElementById("kurssSentenceStructureBtn"),
  kurssPronunciationLesson: document.getElementById("kurssPronunciationLesson"),
  kurssArticlesLesson: document.getElementById("kurssArticlesLesson"),
  kurssPronounsLesson: document.getElementById("kurssPronounsLesson"),
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
    prepare: () => { prepareLesson7Accordion(); renderLesson7ExerciseCard(0, "challenge"); }
  },
  kurssLesson8: {
    title: "Lekcija 8",
    subtitle: "Refleksīvie darbības vārdi, e → i/ie maiņa un akuzatīvs",
    dataKey: "kurssLesson8",
    exerciseAttribute: "data-lesson8-exercise-card",
    prepare: () => { prepareLesson8Accordion(); renderLesson8ExerciseCard(0, "challenge"); renderCourseTranslateCard("lesson8", 0, false); }
  },
  kurssLesson9: {
    title: "Lekcija 9",
    subtitle: "dieser/jener, vietniekvārdi, daudzskaitlis un teikumu pārveidošana",
    dataKey: "kurssLesson9",
    exerciseAttribute: "data-lesson9-exercise-card",
    prepare: () => { prepareLesson9Accordion(); renderLesson9ExerciseCard(0, "challenge"); renderCourseTranslateCard("lesson9", 0, false); }
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
    prepare: () => { prepareLesson13Accordion(); renderCourseExerciseCard("lesson13", 0, "challenge"); renderCourseTranslateCard("lesson13", 0, false); }
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
      renderCourseExerciseCard("lesson16", 0, "challenge");
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
      renderCourseExerciseCard("lesson17", 0, "challenge");
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
      renderCourseExerciseCard("lesson18", 0, "challenge");
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
      renderCourseExerciseCard("lesson19", 0, "challenge");
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
      renderCourseExerciseCard("lesson20", 0, "challenge");
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
      renderCourseExerciseCard("lesson21", 0, "challenge");
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
  if (lesson?.id) renderCourseExerciseCard(lesson.id, 0, "challenge");
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

const exerciseMicroDeckCache = new Map();
const EXERCISE_PLACEHOLDER_RE = /d\.\.\.|dies\.\.\.|jen\.\.\.|\.\.\./i;
const EXERCISE_PREP_RE = /(?:^|,\s*)(in|an|auf|vor|hinter|über|unter|zwischen)\s+/i;

function hasExercisePlaceholder(text) {
  return EXERCISE_PLACEHOLDER_RE.test(String(text || ""));
}

function splitCommaSegments(text) {
  return String(text || "").split(/,\s*/).map((part) => part.trim()).filter(Boolean);
}

function stripAnswerPrefix(firstPart) {
  return String(firstPart || "").replace(/^[^:]+:\s*/, "").replace(/\.$/, "").trim();
}

function alignAnswerSegments(basePrefix, challengeSegments, answer) {
  const answerText = String(answer || "").trim();
  if (!answerText) return challengeSegments.map(() => "");

  if (basePrefix && answerText.startsWith(basePrefix.trim())) {
    return splitCommaSegments(answerText.slice(basePrefix.length)).map((part) => part.replace(/\.$/, "").trim());
  }

  const answerBaseMatch = answerText.match(/^(.+?\s)(?:in|an|auf|vor|hinter|über|unter|zwischen)\s+/i);
  if (answerBaseMatch) {
    const rest = answerText.slice(answerBaseMatch[1].length);
    const parts = splitCommaSegments(rest).map((part) => part.replace(/\.$/, "").trim());
    if (parts.length >= challengeSegments.length) return parts.slice(0, challengeSegments.length);
  }

  const parts = splitCommaSegments(answerText).map((part) => part.replace(/\.$/, "").trim());
  if (parts.length >= challengeSegments.length) {
    parts[0] = stripAnswerPrefix(parts[0]);
    return parts.slice(0, challengeSegments.length);
  }
  return parts;
}

function splitPromptAnswerSegments(prompt, answer) {
  const promptText = String(prompt || "").trim();
  const answerText = String(answer || "").trim();
  if (!promptText) {
    return { basePrefix: "", segments: [{ challenge: "", answer: answerText }] };
  }

  const newlineParenMatch = promptText.match(/^(.+?)\n\((.+)\)\s*$/s);
  if (newlineParenMatch) {
    const basePrefix = newlineParenMatch[1].trim();
    const challengeSegments = splitCommaSegments(newlineParenMatch[2]);
    const answerSegments = alignAnswerSegments("", challengeSegments, answerText);
    return {
      basePrefix: basePrefix + "\n",
      segments: challengeSegments.map((challenge, index) => ({
        challenge: "(" + challenge + ")",
        answer: answerSegments[index] || ""
      }))
    };
  }

  const parenMatch = promptText.match(/^(.+?)\s*\(([^)]+)\)\s*\.?$/);
  if (parenMatch) {
    const basePrefix = parenMatch[1].trim() + " ";
    const challengeSegments = splitCommaSegments(parenMatch[2]);
    const answerSegments = alignAnswerSegments(basePrefix, challengeSegments, answerText);
    return {
      basePrefix,
      segments: challengeSegments.map((challenge, index) => ({
        challenge: "(" + challenge + ")",
        answer: answerSegments[index] || ""
      }))
    };
  }

  if (promptText.includes("\n") && !newlineParenMatch) {
    const [firstLine, secondLine] = promptText.split("\n");
    const basePrefix = firstLine.trim() + "\n";
    const challengeSegments = splitCommaSegments(secondLine);
    if (challengeSegments.length > 1 && challengeSegments.some(hasExercisePlaceholder)) {
      const answerSegments = alignAnswerSegments(basePrefix, challengeSegments, answerText);
      return {
        basePrefix,
        segments: challengeSegments.map((challenge, index) => ({
          challenge,
          answer: answerSegments[index] || ""
        }))
      };
    }
  }

  const commaParts = splitCommaSegments(promptText);
  const placeholderParts = commaParts.filter(hasExercisePlaceholder);
  if (placeholderParts.length > 1) {
    const firstPart = commaParts[0];
    const prepMatch = firstPart.match(/^(.+?\s)(in|an|auf|vor|hinter|über|unter|zwischen)\s+/i);
    let basePrefix = "";
    const challengeSegments = [];

    if (prepMatch) {
      basePrefix = prepMatch[1];
      challengeSegments.push(firstPart.slice(basePrefix.length).trim());
      for (let i = 1; i < commaParts.length; i++) challengeSegments.push(commaParts[i]);
    } else {
      const phMatch = firstPart.match(EXERCISE_PLACEHOLDER_RE);
      if (phMatch) {
        basePrefix = firstPart.slice(0, phMatch.index).replace(/\s+\S*$/, " ").trimEnd() + " ";
        challengeSegments.push(firstPart.slice(basePrefix.length).trim());
        for (let i = 1; i < commaParts.length; i++) challengeSegments.push(commaParts[i]);
      }
    }

    if (challengeSegments.length > 1) {
      const answerSegments = alignAnswerSegments(basePrefix, challengeSegments, answerText);
      return {
        basePrefix,
        segments: challengeSegments.map((challenge, index) => ({
          challenge,
          answer: answerSegments[index] || ""
        }))
      };
    }
  }

  return {
    basePrefix: "",
    segments: [{ challenge: promptText, answer: answerText }]
  };
}

function isMultiSegmentExercise(prompt, answer) {
  const split = splitPromptAnswerSegments(prompt, answer);
  return split.segments.length > 1;
}

function createMicroCard(fields, sourceCardIndex, microIndex, microTotal) {
  return {
    sourceCardIndex,
    microIndex,
    microTotal,
    deckIndex: 0,
    deckTotal: 0,
    meta: fields.meta || "",
    basePrefix: fields.basePrefix || "",
    challengeSegment: fields.challengeSegment || "",
    answerSegment: fields.answerSegment || "",
    cta: fields.cta || "",
    isDone: Boolean(fields.isDone),
    kind: fields.kind || "default"
  };
}

function finalizeMicrocards(microcards, sourceCardIndex) {
  const total = microcards.length;
  return microcards.map((micro, microIndex) => ({
    ...micro,
    sourceCardIndex,
    microIndex,
    microTotal: total
  }));
}

function expandExerciseToMicrocards(card, sourceCardIndex) {
  if (!card || typeof card !== "object") {
    return finalizeMicrocards([createMicroCard({ challengeSegment: "", answerSegment: "" }, sourceCardIndex, 0, 1)], sourceCardIndex);
  }

  if (card.infinitive && card.du) {
    const prompt = card.infinitive + " — " + card.lv;
    const forms = [
      { label: "du", value: card.du, meta: "Forma 1/3: Tu (vienskaitlis)" },
      { label: "ihr", value: card.ihr, meta: "Forma 2/3: Jūs (daudzskaitlis)" },
      { label: "Sie", value: card.sie, meta: "Forma 3/3: Sie (pieklājīgā forma)" }
    ];
    return finalizeMicrocards(forms.map((form) => createMicroCard({
      meta: form.meta,
      basePrefix: prompt + "\n",
      challengeSegment: form.label + ": ?",
      answerSegment: form.label + ": " + form.value,
      kind: "imperative"
    }, sourceCardIndex, 0, forms.length)), sourceCardIndex);
  }

  if (Array.isArray(card.forms) && card.forms.length > 1) {
    const microcards = [];
    for (let i = 0; i < card.forms.length - 1; i++) {
      const current = card.forms[i];
      const next = card.forms[i + 1];
      microcards.push(createMicroCard({
        meta: formatExerciseFormMeta(next, i + 1 >= card.forms.length - 1 ? "Pieskaries nākamajai kartītei" : "Pārveido teikumu."),
        basePrefix: "",
        challengeSegment: current?.text || "",
        answerSegment: next?.text || "",
        isDone: i + 1 >= card.forms.length - 1
      }, sourceCardIndex, microcards.length, 0));
    }
    return finalizeMicrocards(microcards, sourceCardIndex);
  }

  if (card.ich && card.er) {
    return finalizeMicrocards([
      createMicroCard({
        meta: "Pārveido teikumu 3. personā vienskaitlī.",
        challengeSegment: card.ich,
        answerSegment: card.er
      }, sourceCardIndex, 0, 3),
      createMicroCard({
        meta: "Pārveido teikumu 1. personā daudzskaitlī.",
        challengeSegment: card.er,
        answerSegment: card.wir || ""
      }, sourceCardIndex, 1, 3),
      createMicroCard({
        meta: "Pieskaries nākamajai kartītei.",
        challengeSegment: card.wir || "",
        answerSegment: "",
        isDone: true,
        cta: "Pieskaries nākamajai kartītei"
      }, sourceCardIndex, 2, 3)
    ], sourceCardIndex);
  }

  if (card.lv && card.de && !card.prompt) {
    return finalizeMicrocards([createMicroCard({
      meta: "Übung II — tulko",
      challengeSegment: card.lv,
      answerSegment: card.de
    }, sourceCardIndex, 0, 1)], sourceCardIndex);
  }

  if (card.prompt && card.answer) {
    const microcards = [];
    const baseMeta = card.type === "fill"
      ? "Übung I — lieto pareizo locījumu"
      : resolveExerciseMeta(card.instruction, card.task, "Liec pareizo locījumu un darini daudzskaitli!");
    const singularSplit = splitPromptAnswerSegments(card.prompt, card.answer);
    singularSplit.segments.forEach((segment) => {
      microcards.push(createMicroCard({
        meta: baseMeta,
        basePrefix: singularSplit.basePrefix,
        challengeSegment: segment.challenge,
        answerSegment: segment.answer
      }, sourceCardIndex, microcards.length, 0));
    });

    const secondAnswer = card.answer2 || card.pluralAnswer || "";
    if (secondAnswer) {
      const pluralSplit = splitPromptAnswerSegments(card.prompt, secondAnswer);
      pluralSplit.segments.forEach((segment) => {
        microcards.push(createMicroCard({
          meta: resolveExerciseMeta(null, card.task2, "Tagad atbildi daudzskaitlī."),
          basePrefix: pluralSplit.basePrefix,
          challengeSegment: segment.challenge,
          answerSegment: segment.answer
        }, sourceCardIndex, microcards.length, 0));
      });
    }

    return finalizeMicrocards(microcards, sourceCardIndex);
  }

  return finalizeMicrocards([createMicroCard({
    meta: card.type === "fill" ? "Übung I — lieto pareizo locījumu" : "",
    challengeSegment: card.prompt || card.lv || "",
    answerSegment: card.answer || card.de || ""
  }, sourceCardIndex, 0, 1)], sourceCardIndex);
}

function getExerciseSourceCards(lessonId) {
  const lessonNumber = String(lessonId || "").match(/\d+/)?.[0];
  if (!lessonNumber) return [];
  if (lessonNumber === "7") {
    return typeof lesson7ExerciseCards !== "undefined" ? lesson7ExerciseCards : [];
  }
  if (lessonNumber === "8") {
    const lesson = window.COURSE_LESSON_DATA?.kurssLesson8;
    const exerciseSection = lesson?.sections?.find((section) => Array.isArray(section.cards));
    if (exerciseSection?.cards?.length) return exerciseSection.cards;
    return typeof lesson8ExerciseCards !== "undefined" ? lesson8ExerciseCards : [];
  }
  if (lessonNumber === "9") {
    const lesson = window.COURSE_LESSON_DATA?.kurssLesson9;
    return lesson?.sections?.find((section) => section.title === "Übung / Vingrinājums")?.cards || [];
  }
  const normalizedLessonId = lessonId.startsWith("lesson") ? lessonId : `lesson${lessonNumber}`;
  return getCourseExerciseCards(normalizedLessonId);
}

function buildExerciseMicroDeck(cards) {
  const deck = [];
  cards.forEach((card, sourceCardIndex) => {
    expandExerciseToMicrocards(card, sourceCardIndex).forEach((micro) => deck.push(micro));
  });
  deck.forEach((micro, deckIndex) => {
    micro.deckIndex = deckIndex;
    micro.deckTotal = deck.length;
  });
  return deck;
}

function getExerciseMicroDeck(lessonId) {
  const lessonNumber = String(lessonId || "").match(/\d+/)?.[0];
  const normalizedLessonId = lessonId.startsWith("lesson") ? lessonId : `lesson${lessonNumber}`;
  const cards = getExerciseSourceCards(normalizedLessonId);
  const cacheKey = normalizedLessonId + ":" + cards.length + ":" + JSON.stringify(cards[0] || {});
  if (!exerciseMicroDeckCache.has(cacheKey)) {
    exerciseMicroDeckCache.set(cacheKey, buildExerciseMicroDeck(cards));
  }
  return exerciseMicroDeckCache.get(cacheKey);
}

function getExerciseTarget(lessonId) {
  const lessonNumber = String(lessonId || "").match(/\d+/)?.[0];
  if (!lessonNumber) return null;
  if (lessonNumber === "7") return elements.kurssLesson7?.querySelector("[data-lesson7-exercise-card]");
  if (lessonNumber === "8") return elements.kurssLesson8?.querySelector("[data-lesson8-exercise-card]");
  if (lessonNumber === "9") return elements.kurssLesson9?.querySelector("[data-lesson9-exercise-card]");
  const normalizedLessonId = lessonId.startsWith("lesson") ? lessonId : `lesson${lessonNumber}`;
  return elements[`kurssLesson${lessonNumber}`]?.querySelector(`[data-course-exercise-card][data-lesson-id="${normalizedLessonId}"]`);
}

function getExerciseSourceCardTotal(lessonId) {
  return getExerciseSourceCards(lessonId).length;
}

function highlightAnswerSegment(challengeSegment, answerSegment) {
  const challenge = String(challengeSegment || "");
  const answer = String(answerSegment || "");
  if (!answer) return "";

  const placeholderMatch = challenge.match(EXERCISE_PLACEHOLDER_RE);
  if (placeholderMatch) {
    const pre = challenge.slice(0, placeholderMatch.index);
    const post = challenge.slice(placeholderMatch.index + placeholderMatch[0].length);
    let middle = answer;
    if (pre && middle.startsWith(pre)) {
      middle = middle.slice(pre.length);
    } else if (pre.trim()) {
      const anchor = pre.trim().split(/\s+/).pop();
      const anchorIndex = middle.indexOf(anchor);
      if (anchorIndex >= 0) middle = middle.slice(anchorIndex + anchor.length).trimStart();
    }
    const postTrimmed = post.trim();
    if (postTrimmed && middle.endsWith(postTrimmed)) {
      middle = middle.slice(0, middle.length - postTrimmed.length).trimEnd();
    }
    const middleStart = answer.indexOf(middle);
    if (middleStart < 0 || !middle) return escapeHtml(answer);
    return escapeHtml(answer.slice(0, middleStart))
      + '<span class="exercise-answer-highlight">' + escapeHtml(middle) + "</span>"
      + escapeHtml(answer.slice(middleStart + middle.length));
  }

  let prefixLen = 0;
  while (prefixLen < challenge.length && prefixLen < answer.length && challenge[prefixLen] === answer[prefixLen]) {
    prefixLen++;
  }
  let suffixLen = 0;
  while (
    suffixLen < challenge.length - prefixLen
    && suffixLen < answer.length - prefixLen
    && challenge[challenge.length - 1 - suffixLen] === answer[answer.length - 1 - suffixLen]
  ) {
    suffixLen++;
  }
  const middle = answer.slice(prefixLen, answer.length - suffixLen);
  return escapeHtml(answer.slice(0, prefixLen))
    + (middle ? '<span class="exercise-answer-highlight">' + escapeHtml(middle) + "</span>" : "")
    + escapeHtml(answer.slice(answer.length - suffixLen));
}

function applyExerciseCardPhaseClass(target, phase) {
  target.classList.add("exercise-unified-card");
  target.classList.remove("exercise-phase-challenge", "exercise-phase-reveal");
  target.classList.add(phase === "reveal" ? "exercise-phase-reveal" : "exercise-phase-challenge");
}

function renderExerciseCardShell(target, options) {
  const { progress, meta, phase, prompt, answers, cta, micro } = options;
  applyExerciseCardPhaseClass(target, phase);
  const isReveal = phase === "reveal";
  const bodyParts = [];

  if (micro) {
    const challengeText = String(micro.challengeSegment || "");
    const answerText = String(micro.answerSegment || "");
    const basePrefix = String(micro.basePrefix || "");
    if (isReveal) {
      if (basePrefix) {
        bodyParts.push('<span class="lesson1-training-text exercise-card-prompt exercise-card-prompt-muted">' + escapeHtml(basePrefix).replace(/\n/g, "<br>") + "</span>");
      }
      if (answerText) {
        bodyParts.push('<span class="lesson1-training-answer">' + highlightAnswerSegment(challengeText, answerText) + "</span>");
      } else if (micro.isDone) {
        bodyParts.push('<span class="exercise-card-cta">' + escapeHtml(cta || "Pieskaries nākamajai kartītei") + "</span>");
      }
    } else {
      const fullPrompt = basePrefix + challengeText;
      bodyParts.push('<span class="lesson1-training-text exercise-card-prompt">' + escapeHtml(fullPrompt).replace(/\n/g, "<br>") + "</span>");
      bodyParts.push('<span class="exercise-card-cta">' + escapeHtml(cta || (micro.isDone ? "Pieskaries nākamajai kartītei" : "Pieskaries, lai redzētu atbildi")) + "</span>");
    }
  } else if (isReveal) {
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

function renderMicroExerciseCard(target, lessonId, deckIndex = 0, phase = "challenge") {
  if (!target) return;
  const lessonNumber = String(lessonId || "").match(/\d+/)?.[0];
  if (!lessonNumber) return;
  const normalizedLessonId = lessonId.startsWith("lesson") ? lessonId : `lesson${lessonNumber}`;
  const deck = getExerciseMicroDeck(normalizedLessonId);
  if (!deck.length) return;

  const safeIndex = ((Number(deckIndex) || 0) % deck.length + deck.length) % deck.length;
  const micro = deck[safeIndex];
  const sourceCardTotal = getExerciseSourceCardTotal(normalizedLessonId);
  const progressParts = ["Lekcija " + lessonNumber + " · Vingrinājums", (micro.sourceCardIndex + 1) + " / " + sourceCardTotal];
  if (micro.microTotal > 1) progressParts.push((micro.microIndex + 1) + " / " + micro.microTotal);
  const progress = progressParts.join(" · ");
  const isLastDeck = safeIndex >= deck.length - 1;
  const revealCta = isLastDeck ? "Pieskaries nākamajai kartītei" : "Pieskaries turpināt";

  target.dataset.lessonId = normalizedLessonId;
  target.dataset.deckIndex = String(safeIndex);
  target.dataset.phase = phase;
  delete target.dataset.step;
  delete target.dataset.cardIndex;
  delete target.dataset.formStep;
  delete target.dataset.showingBack;
  delete target.dataset.trainingIndex;

  renderExerciseCardShell(target, {
    progress,
    meta: micro.meta,
    phase,
    micro,
    cta: phase === "reveal" ? revealCta : (micro.cta || (micro.isDone && !micro.answerSegment ? "Pieskaries nākamajai kartītei" : "Pieskaries, lai redzētu atbildi"))
  });
}

function handleMicroExerciseClick(card) {
  if (!card) return;
  const lessonId = card.dataset.lessonId;
  const deckIndex = Number(card.dataset.deckIndex || 0);
  const phase = card.dataset.phase || "challenge";
  const deck = getExerciseMicroDeck(lessonId);
  if (!deck.length) return;

  const micro = deck[deckIndex];
  if (phase === "challenge") {
    if (micro.isDone && !micro.answerSegment) {
      renderMicroExerciseCard(card, lessonId, deckIndex + 1, "challenge");
      return;
    }
    if (micro.answerSegment) {
      renderMicroExerciseCard(card, lessonId, deckIndex, "reveal");
      return;
    }
    renderMicroExerciseCard(card, lessonId, deckIndex + 1, "challenge");
    return;
  }

  renderMicroExerciseCard(card, lessonId, deckIndex + 1, "challenge");
}

function renderCourseExerciseCard(lessonId, deckIndex = 0, phase = "challenge") {
  const lessonNumber = String(lessonId || "").match(/\d+/)?.[0];
  if (!lessonNumber) return;
  const normalizedLessonId = `lesson${lessonNumber}`;
  const target = getExerciseTarget(normalizedLessonId);
  if (!target) return;
  renderMicroExerciseCard(target, normalizedLessonId, deckIndex, phase);
}

function handleCourseExerciseCardClick(card) {
  handleMicroExerciseClick(card);
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

function scrollKurssPanelToTop() {
  elements.kurssPanel?.querySelector(".kurss-body")?.scrollTo({ top: 0, behavior: "auto" });
}

function hideAllKurssPanels() {
  if (elements.kurssList) elements.kurssList.hidden = true;
  if (elements.kurssTip) elements.kurssTip.hidden = true;
  [
    "kurssPronunciationMenu",
    "kurssLessonsMenu",
    "kurssArticlesLesson",
    "kurssPronounsLesson",
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
  scrollKurssPanelToTop();
}

function initStaticCourseLessons() {
  const htmlMap = window.COURSE_LESSON_HTML || {};
  [
    "kurssArticlesLesson",
    "kurssPronounsLesson",
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

function ensureKurssOverlayOnBody() {
  const overlay = elements.kurssPanel;
  if (!overlay || overlay.parentElement === document.body) return;
  document.body.appendChild(overlay);
}

function setKurssOpenState(isOpen) {
  document.documentElement.classList.toggle("kurss-open", isOpen);
  document.body.classList.toggle("kurss-open", isOpen);
}

function openKurss() {
  ensureKurssOverlayOnBody();
  showKurssMenu();
  elements.kurssPanel.hidden = false;
  setKurssOpenState(true);
}

function closeKurss() {
  if (elements.kurssPanel) {
    elements.kurssPanel.hidden = true;
    elements.kurssPanel.classList.remove("active");
  }
  setKurssOpenState(false);
  showKurssMenu();
}


function openArticlesLesson() {
  hideAllKurssPanels();
  elements.kurssTitle.textContent = "Artikuli";
  elements.kurssSubtitle.textContent = "Der, die, das un lietojuma pamati.";
  elements.kurssArticlesLesson.hidden = false;
  scrollKurssPanelToTop();
}

function openPronounsLesson() {
  hideAllKurssPanels();
  elements.kurssTitle.textContent = "Vietniekvārdi";
  elements.kurssSubtitle.textContent = "Nominativ, Akkusativ un Dativ — vietniekvārdu formas.";
  elements.kurssPronounsLesson.hidden = false;
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

function renderLesson7ExerciseCard(deckIndex = 0, phase = "challenge") {
  const card = getExerciseTarget("lesson7");
  if (!card) return;
  renderMicroExerciseCard(card, "lesson7", deckIndex, phase);
}

function handleLesson7ExerciseCardClick(card) {
  handleMicroExerciseClick(card);
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
  renderLesson7ExerciseCard(0, "challenge");
}

function getLesson8ExerciseCards() {
  const lesson = window.COURSE_LESSON_DATA?.kurssLesson8;
  const exerciseSection = lesson?.sections?.find((section) => Array.isArray(section.cards));
  return exerciseSection?.cards?.length ? exerciseSection.cards : lesson8ExerciseCards;
}

function renderLesson8ExerciseCard(deckIndex = 0, phase = "challenge") {
  const card = getExerciseTarget("lesson8");
  if (!card) return;
  renderMicroExerciseCard(card, "lesson8", deckIndex, phase);
}

function handleLesson8ExerciseCardClick(card) {
  handleMicroExerciseClick(card);
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

function renderLesson9ExerciseCard(deckIndex = 0, phase = "challenge") {
  const target = getExerciseTarget("lesson9");
  if (!target) return;
  renderMicroExerciseCard(target, "lesson9", deckIndex, phase);
}

function handleLesson9ExerciseCardClick(event) {
  const target = event.target.closest("[data-lesson9-exercise-card]");
  if (!target) return;
  handleMicroExerciseClick(target);
}

function prepareLesson9Accordion() {
  const accordions = Array.from(elements.kurssLesson9.querySelectorAll(".lesson1-accordion"));
  accordions.forEach((accordion, index) => {
    accordion.open = index === 0;
  });
  renderLesson9ExerciseCard(0, "challenge");
  renderCourseTranslateCard("lesson9", 0, false);
}

function prepareLesson8Accordion() {
  const sections = Array.from(elements.kurssLesson8.querySelectorAll(".lesson1-accordion"));
  sections.forEach((section, index) => {
    section.open = index === 0;
  });
  renderLesson8ExerciseCard(0, "challenge");
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

  if (!elements.kurssArticlesLesson.hidden || !elements.kurssPronounsLesson.hidden || !elements.kurssPronunciationMenu.hidden || !elements.kurssLessonsMenu.hidden || !elements.kurssVerbBasicsLesson.hidden || !elements.kurssSentenceStructureLesson.hidden) {
    showKurssMenu();
    return;
  }
  closeKurss();
}

function loadDirection() {
  const saved = store.getItem(directionStorageKey);
  return saved === "lv-de" ? "lv-de" : "de-lv";
}

function loadAudioAutoplay() {
  return store.getItem(audioAutoplayStorageKey) !== "0";
}

function saveAudioAutoplay() {
  store.setItem(audioAutoplayStorageKey, state.audioAutoplay ? "1" : "0");
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
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    const migrated = {};
    for (const [id, rawStats] of Object.entries(saved)) {
      if (!rawStats || typeof rawStats !== "object") continue;
      if (typeof rawStats.errorLevel === "number") {
        migrated[id] = { errorLevel: Math.max(0, rawStats.errorLevel) };
        continue;
      }
      const legacyLevel = rawStats.problematic === true
        ? Math.max(1, rawStats.unknownCount || 3)
        : Math.max(0, rawStats.unknownCount || 0);
      if (legacyLevel > 0) {
        migrated[id] = { errorLevel: legacyLevel };
      }
    }
    return migrated;
  } catch (error) {
    return {};
  }
}

function saveProblemStats() {
  store.setItem(problemStatsStorageKey, JSON.stringify(state.problemStats));
}

function getErrorLevel(id) {
  const stats = state.problemStats[id];
  if (!stats) return 0;
  return Math.max(0, Number(stats.errorLevel) || 0);
}

function isProblematicWord(id) {
  return getErrorLevel(id) > 0;
}

function countProblematicWords() {
  let count = 0;
  for (const groupKey of groups) {
    for (const card of allCardsForGroup(groupKey)) {
      const id = idForSessionKey(card, groupKey);
      if (!isUnwantedCard(card) && isProblematicWord(id)) count += 1;
    }
  }
  return count;
}

function updateProblemWordsBtn() {
  if (!elements.problemWordsBtn) return;
  const count = countProblematicWords();
  const compact = detailToolbarCompact();
  const ariaLabel = count ? `Problemātiskie vārdi (${count})` : "Problemātiskie vārdi";
  if (compact) {
    const badge = count ? `<span class="detail-tool-badge">${count}</span>` : "";
    elements.problemWordsBtn.innerHTML = `${compactToolButtonHtml("flame", "Probl.")}${badge}`;
    elements.problemWordsBtn.classList.remove("ui-btn-with-icon");
  } else {
    const label = count ? `Problemātiskie vārdi (${count})` : "Problemātiskie vārdi";
    elements.problemWordsBtn.innerHTML = buttonWithIcon("flame", label);
    elements.problemWordsBtn.classList.add("ui-btn-with-icon");
  }
  elements.problemWordsBtn.setAttribute("aria-label", ariaLabel);
  elements.problemWordsBtn.setAttribute("title", ariaLabel);
  elements.problemWordsBtn.classList.toggle("active", state.problemMode);
  elements.problemWordsBtn.setAttribute("aria-pressed", state.problemMode ? "true" : "false");
}

function detailToolbarCompact() {
  return true;
}

function updateDetailToolbarButtons() {
  updateProblemWordsBtn();
  if (!elements.spellingModeBtn) return;
  if (detailToolbarCompact()) {
    elements.spellingModeBtn.innerHTML = compactToolButtonHtml("pen", "Rakst.");
    elements.spellingModeBtn.classList.remove("ui-btn-with-icon");
  } else {
    elements.spellingModeBtn.innerHTML = buttonWithIcon("pen", "Pareizrakstība");
    elements.spellingModeBtn.classList.add("ui-btn-with-icon");
  }
  elements.spellingModeBtn.setAttribute("aria-label", "Pareizrakstība");
  elements.spellingModeBtn.setAttribute("title", "Pareizrakstība");
  elements.spellingModeBtn.className = state.spellingMode
    ? "detail-tool-icon-btn group-btn active spelling-active"
    : "detail-tool-icon-btn group-btn";
  if (!detailToolbarCompact()) {
    elements.spellingModeBtn.classList.add("ui-btn-with-icon");
  }
  elements.spellingModeBtn.setAttribute("aria-pressed", state.spellingMode ? "true" : "false");
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
        const stats = problemStats[id];
        if (!stats || typeof stats !== "object") return true;
        if (typeof stats.errorLevel === "number") return stats.errorLevel <= 0;
        return !(stats.problematic === true && (stats.unknownCount || 0) >= 3);
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

function directionButtonLabel() {
  return state.direction === "de-lv" ? "🔄 DE ➔ LV" : "🔄 LV ➔ DE";
}

function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function shuffleSessionIds(session) {
  if (!session || !Array.isArray(session.ids)) return;
  fisherYatesShuffle(session.ids);
  if (Array.isArray(session.originalIds)) {
    fisherYatesShuffle(session.originalIds);
  }
  session.shuffled = true;
}

function pickSessionCards(newCards, reviewCards, config) {
  const used = new Set();
  const take = (cards, limit) => {
    const picked = [];
    for (const card of fisherYatesShuffle([...cards])) {
      if (picked.length >= limit) break;
      const id = idForSessionCard(card);
      if (used.has(id)) continue;
      used.add(id);
      picked.push(card);
    }
    return picked;
  };

  let picked = take(newCards, config.newCount).concat(take(reviewCards, config.reviewCount));
  const target = config.sessionMax;

  if (picked.length < target) {
    const remainingNew = newCards.filter((card) => !used.has(idForSessionCard(card)));
    picked = picked.concat(take(remainingNew, target - picked.length));
  }
  if (picked.length < target) {
    const remainingReview = reviewCards.filter((card) => !used.has(idForSessionCard(card)));
    picked = picked.concat(take(remainingReview, target - picked.length));
  }

  fisherYatesShuffle(picked);
  return picked.slice(0, target);
}

function createSession() {
  resetCardReveal();
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

  const picked = pickSessionCards(newCards, reviewCards, config);
  const startedAt = new Date().toISOString();
  state.session = {
    groupKey,
    mode: state.mode,
    ids: picked.map(idForSessionCard),
    originalIds: picked.map(idForSessionCard),
    completedIds: [],
    total: picked.length,
    index: 0,
    completed: false,
    startedAt,
    created: startedAt,
    shuffled: true
  };
  state.index = 0;
  state.verbIndex = 0;
  state.verbStep = 0;
  activeSessionStartedAt = startedAt;
  activeRenderedCardKey = null;
  state.revealed = false;
  hideCardTranslationDOM();
  saveSession();
}

function sessionMatchesActiveGroup() {
  return state.session
    && state.session.groupKey === activeGroupKey()
    && state.session.mode === state.mode
    && Array.isArray(state.session.ids);
}

function reconcileCompletedSessionState() {
  if (!state.session?.completed) return;
  if (state.lastCompletedSession?.ids?.length) return;
  const original = Array.isArray(state.session.originalIds) ? state.session.originalIds : [];
  const completed = Array.isArray(state.session.completedIds) ? state.session.completedIds : [];
  const ids = original.length ? original : completed;
  if (!ids.length) return;
  state.lastCompletedSession = {
    groupKey: state.session.groupKey,
    mode: state.session.mode,
    ids: ids.slice(),
    startedAt: state.session.startedAt || state.session.created,
    completedAt: state.session.completedAt || new Date().toISOString()
  };
  saveLastCompletedSession();
}

function sanitizeActiveSessionIds() {
  if (!state.session || !Array.isArray(state.session.ids)) return;
  if (state.session.completed) {
    reconcileCompletedSessionState();
    return;
  }

  const groupKey = state.session.groupKey;
  const cards = cardsForSessionKey(groupKey);
  const isResolvable = (id) => cards.some((card) => idForSessionKey(card, groupKey) === id);
  const resolvableIds = state.session.ids.filter(isResolvable);

  if (resolvableIds.length !== state.session.ids.length) {
    state.session.ids = resolvableIds;
    state.session.index = resolvableIds.length
      ? Math.min(state.session.index || 0, resolvableIds.length - 1)
      : 0;
    saveSession();
  }

  if (state.session.ids.length) return;

  const original = Array.isArray(state.session.originalIds) ? state.session.originalIds : [];
  const completed = Array.isArray(state.session.completedIds) ? state.session.completedIds : [];
  if (original.length > 0 && completed.length >= original.length) {
    state.session.completed = true;
    state.session.completedAt = state.session.completedAt || new Date().toISOString();
    reconcileCompletedSessionState();
    saveSession();
    return;
  }

  if (!state.session.total && !original.length) {
    createSession();
  }
}

function ensureSession() {
  if (state.session?.completed && !state.reviewLastSession) {
    reconcileCompletedSessionState();
    return;
  }
  if (!sessionMatchesActiveGroup()) {
    createSession();
    return;
  }
  sanitizeActiveSessionIds();
  if (!state.session) return;
  if (!state.session.shuffled) {
    shuffleSessionIds(state.session);
    saveSession();
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
  resetCardReveal();
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
  resetCardReveal();
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

function totalLearnedCount() {
  let count = 0;
  for (const group of groups) {
    count += (state.learned[group] || []).length;
  }
  count += (state.learned.verbs || []).length;
  return count;
}

function updateKnownListBtn() {
  if (!elements.masteredListBtn) return;
  elements.masteredListBtn.classList.add("ui-btn-with-icon");
  elements.masteredListBtn.innerHTML = buttonWithIcon("trophy", `Zināmi (${totalLearnedCount()})`);
}

function updateRestoreBtnLabel() {
  if (!elements.restoreBtn) return;
  elements.restoreBtn.classList.add("ui-btn-with-icon");
  elements.restoreBtn.innerHTML = buttonWithIcon("warning", "Atgriezt visu", "ui-icon ui-icon--warning");
}

function loadGroupCompleteShown() {
  try {
    const parsed = JSON.parse(store.getItem(groupCompleteShownStorageKey) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveGroupCompleteShown(data) {
  store.setItem(groupCompleteShownStorageKey, JSON.stringify(data));
}

function isGroupFullyLearned(group) {
  if (!groups.includes(group)) {
    return false;
  }
  const baseCards = baseCardsForGroup(group);
  if (!baseCards.length) {
    return false;
  }
  const learnedIds = new Set(state.learned[group] || []);
  return baseCards.every((card) => learnedIds.has(cardId(card)));
}

function getGroupCompleteTexts(group) {
  const label = groupDisplayLabel(group);
  return {
    title: `Izcili! ${label} līmenis ir pabeigts! 🎉`,
    description: "Tu esi apguvis visus šīs grupas vārdus. Laiks spert nākamo soli!"
  };
}

let lastGroupCompleteConfettiGroup = null;

function fireGroupCompleteConfetti(group) {
  if (lastGroupCompleteConfettiGroup === group || typeof confetti !== "function") {
    return;
  }
  lastGroupCompleteConfettiGroup = group;
  const colors = ["#1677f2", "#5aa2ff", "#ffd700", "#ff6b6b", "#51cf66"];
  const duration = 2500;
  const end = Date.now() + duration;

  confetti({
    particleCount: 120,
    spread: 100,
    origin: { y: 0.55 },
    colors
  });

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.6 },
      colors
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.6 },
      colors
    });
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

function shouldShowGroupCompleteOverlay() {
  if (state.reviewKnown || state.reviewLastSession || state.problemMode || state.timeReviewMode || state.studyTestCard || state.verbMode) {
    return false;
  }
  if (!isGroupFullyLearned(state.group)) {
    return false;
  }
  return !loadGroupCompleteShown()[state.group];
}

function updateGroupCompleteOverlay() {
  if (!elements.groupCompleteOverlay) {
    return;
  }
  const show = shouldShowGroupCompleteOverlay();
  if (show) {
    const texts = getGroupCompleteTexts(state.group);
    if (elements.groupCompleteTitle) {
      elements.groupCompleteTitle.textContent = texts.title;
    }
    if (elements.groupCompleteDesc) {
      elements.groupCompleteDesc.textContent = texts.description;
    }
    elements.groupCompleteOverlay.hidden = false;
    requestAnimationFrame(() => fireGroupCompleteConfetti(state.group));
  } else {
    elements.groupCompleteOverlay.hidden = true;
    if (lastGroupCompleteConfettiGroup && lastGroupCompleteConfettiGroup !== state.group) {
      lastGroupCompleteConfettiGroup = null;
    }
  }
}

function dismissGroupCompleteOverlay() {
  const shown = loadGroupCompleteShown();
  shown[state.group] = true;
  saveGroupCompleteShown(shown);
  lastGroupCompleteConfettiGroup = null;
  if (elements.groupCompleteOverlay) {
    elements.groupCompleteOverlay.hidden = true;
  }
}

function chooseAnotherGroupFromComplete() {
  dismissGroupCompleteOverlay();
  goToHomeScreen();
  setNotice("Izvēlies nākamo grupu galvenajā izvēlnē.");
  updateSessionCompleteOverlay();
  render();
}

function shouldShowSessionCompleteOverlay() {
  if (state.reviewKnown || state.reviewLastSession || state.problemMode || state.timeReviewMode || state.studyTestCard) {
    return false;
  }
  reconcileCompletedSessionState();
  if (!state.session?.completed || !state.lastCompletedSession?.ids?.length) {
    return false;
  }
  const groupKey = state.verbMode ? "verbs" : activeGroupKey();
  return state.lastCompletedSession.groupKey === groupKey
    && state.lastCompletedSession.mode === state.mode;
}

function updateSessionCompleteOverlay() {
  updateGroupCompleteOverlay();
  if (shouldShowGroupCompleteOverlay()) {
    if (elements.sessionCompleteOverlay) {
      elements.sessionCompleteOverlay.hidden = true;
    }
    return;
  }
  if (!elements.sessionCompleteOverlay) return;
  const show = shouldShowSessionCompleteOverlay();
  elements.sessionCompleteOverlay.hidden = !show;
}

function restartCompletedSession() {
  if (!state.lastCompletedSession?.ids?.length) return;
  const ids = state.lastCompletedSession.ids.slice();
  fisherYatesShuffle(ids);
  const startedAt = new Date().toISOString();
  resetCardReveal();
  state.session = {
    groupKey: state.lastCompletedSession.groupKey,
    mode: state.lastCompletedSession.mode,
    ids: ids.slice(),
    originalIds: state.lastCompletedSession.ids.slice(),
    completedIds: [],
    total: ids.length,
    index: 0,
    completed: false,
    startedAt,
    created: startedAt,
    shuffled: true
  };
  state.reviewLastSession = false;
  state.reviewKnown = false;
  state.index = 0;
  state.verbIndex = 0;
  state.verbStep = 0;
  activeSessionStartedAt = startedAt;
  state.verbMode = state.lastCompletedSession.groupKey === "verbs";
  saveSession();
  updateSessionCompleteOverlay();
  setNotice("Sesija ielādēta no jauna ar jauktu secību.");
  render();
}

function markSessionAsLearned() {
  if (!state.lastCompletedSession?.ids?.length) return;
  const groupKey = state.lastCompletedSession.groupKey;
  const ids = state.lastCompletedSession.ids;

  if (groupKey === "verbs") {
    if (!state.learned.verbs) state.learned.verbs = [];
    for (const id of ids) {
      if (!state.learned.verbs.includes(id)) {
        state.learned.verbs.push(id);
      }
      updateReviewStatus(id, true);
      recordLearnedTimestamp(id);
    }
  } else {
    if (!state.learned[groupKey]) state.learned[groupKey] = [];
    for (const id of ids) {
      if (!state.learned[groupKey].includes(id)) {
        state.learned[groupKey].push(id);
      }
      updateReviewStatus(id, true);
      recordLearnedTimestamp(id);
    }
  }

  saveProgress();
  state.lastCompletedSession = null;
  state.reviewLastSession = false;
  saveLastCompletedSession();
  resetCardReveal();
  createSession();
  updateSessionCompleteOverlay();
  setNotice("Sesijas vārdi pārvietoti uz zināmajiem.");
  render();
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
  return groups.flatMap((groupKey) => allCardsForGroup(groupKey).filter((card) => {
    const id = idForSessionKey(card, groupKey);
    return !isUnwantedCard(card) && isProblematicWord(id);
  }).map((card) => ({ ...card, problemGroupKey: groupKey })));
}

function problemCardGroupKey(card) {
  return card && card.problemGroupKey ? card.problemGroupKey : activeGroupKey();
}

function problemEmptyMessage() {
  return "Nav problemātisko vārdu.";
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
  const stats = state.problemStats[id] || {};
  stats.errorLevel = getErrorLevel(id) + 1;
  state.problemStats[id] = stats;
  saveProblemStats();
}

function graduateProblemWordToKnown(id, groupKey) {
  if (!id || !groupKey) return;
  if (groupKey === "verbs") {
    if (!state.learned.verbs) state.learned.verbs = [];
    if (!state.learned.verbs.includes(id)) state.learned.verbs.push(id);
  } else {
    if (!state.learned[groupKey]) state.learned[groupKey] = [];
    if (!state.learned[groupKey].includes(id)) state.learned[groupKey].push(id);
  }
  updateReviewStatus(id, true);
  recordLearnedTimestamp(id);
  saveProgress();
  updateKnownListBtn();
}

function updateProblemKnown(id, groupKey) {
  if (!id || getErrorLevel(id) <= 0) return false;

  const nextLevel = getErrorLevel(id) - 1;
  if (nextLevel <= 0) {
    delete state.problemStats[id];
    saveProblemStats();
    graduateProblemWordToKnown(id, groupKey);
    return true;
  }

  state.problemStats[id] = { errorLevel: nextLevel };
  saveProblemStats();
  return false;
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

function completeProblemCard(id, groupKey) {
  const position = state.problemIndex || 0;
  const graduated = updateProblemKnown(id, groupKey);
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
  return graduated;
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
    ? { days: 30, empty: "Nav iemācītu vārdu mēneša pārskatam.", done: "Mēneša pārskats pabeigts.", label: "Mēneša pārskats" }
    : { days: 7, empty: "Nav iemācītu vārdu nedēļas pārskatam.", done: "Nedēļas pārskats pabeigts.", label: "Nedēļas pārskats" };
}

function latvianWordCountLabel(count) {
  const n = Number(count) || 0;
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 19) return "vārdi";
  if (mod10 === 1) return "vārds";
  return "vārdi";
}

function timeReviewModalConfig(mode) {
  return mode === "month"
    ? {
        days: 30,
        empty: "Nav iemācītu vārdu mēneša pārskatam.",
        countTitle: (count) => `Šomēnes iemācīti: ${count} ${latvianWordCountLabel(count)}`
      }
    : {
        days: 7,
        empty: "Nav iemācītu vārdu nedēļas pārskatam.",
        countTitle: (count) => `Šonedēļ iemācīti: ${count} ${latvianWordCountLabel(count)}`
      };
}

function collectTimeReviewEntries(mode) {
  const config = timeReviewModalConfig(mode);
  const entries = [];

  for (const groupKey of groups) {
    const learnedSet = new Set(state.learned[groupKey] || []);
    const cards = cardsForSessionKey(groupKey);
    for (const card of cards) {
      const id = idForSessionKey(card, groupKey);
      if (!learnedSet.has(id)) continue;
      const status = state.reviewStatus[id];
      if (!learnedWithinDays(status, config.days)) continue;
      entries.push({
        id,
        groupKey,
        level: card.level || groupKey,
        de: formatGermanEntry(card),
        lv: card.lv || "",
        learnedAt: status?.learnedAt || status?.lastCorrectAt || ""
      });
    }
  }

  entries.sort((a, b) => {
    const timeA = new Date(a.learnedAt).getTime();
    const timeB = new Date(b.learnedAt).getTime();
    return (Number.isNaN(timeB) ? 0 : timeB) - (Number.isNaN(timeA) ? 0 : timeA);
  });

  return { config, entries };
}

function renderTimeReviewModalContent(container, mode) {
  const { config, entries } = collectTimeReviewEntries(mode);
  const modal = document.getElementById("timeReviewModal");
  const header = modal?.querySelector(".modal-header h2");
  if (header) {
    header.className = "modal-count-title";
    header.textContent = entries.length ? config.countTitle(entries.length) : config.empty;
  }

  if (!entries.length) {
    container.innerHTML = `<p class="modal-empty">${escapeHtml(config.empty)}</p>`;
    return;
  }

  container.innerHTML = entries.map((entry) => `
    <div class="modal-row">
      <div class="modal-word modal-word-with-badge">
        <span class="modal-level-badge">[${escapeHtml(groupDisplayLabel(entry.level))}]</span>
        <strong>${escapeHtml(entry.de)}</strong>
      </div>
      <button type="button" class="modal-remove-btn" data-restore-time-review="${escapeHtml(entry.id)}" data-time-review-group="${escapeHtml(entry.groupKey)}">Atgriezt</button>
    </div>
  `).join("");
}

function restoreFromTimeReview(id, groupKey) {
  if (!id || !groupKey) return;
  if (!state.learned[groupKey]) {
    state.learned[groupKey] = [];
  }
  state.learned[groupKey] = state.learned[groupKey].filter((learnedId) => learnedId !== id);
  delete state.reviewStatus[id];
  saveReviewStatus();
  saveProgress();
  const modal = document.getElementById("timeReviewModal");
  const list = document.getElementById("timeReviewList");
  if (list && modal?.dataset.reviewMode) {
    renderTimeReviewModalContent(list, modal.dataset.reviewMode);
  }
  render();
}

function openTimeReviewModal(mode) {
  showWordListModal({
    id: "timeReviewModal",
    title: mode === "month" ? "Mēneša pārskats" : "Nedēļas pārskats",
    ariaLabel: mode === "month" ? "Mēneša pārskats" : "Nedēļas pārskats",
    listId: "timeReviewList",
    renderContent: (container) => renderTimeReviewModalContent(container, mode),
    onListClick: (event) => {
      const button = event.target.closest("[data-restore-time-review]");
      if (button) {
        restoreFromTimeReview(button.dataset.restoreTimeReview, button.dataset.timeReviewGroup);
      }
    }
  });

  const modal = document.getElementById("timeReviewModal");
  if (modal) {
    modal.dataset.reviewMode = mode;
  }
}

function ensureInfoPopup() {
  let popup = document.getElementById("infoPopup");
  if (popup && popup.dataset.version === INFO_POPUP_VERSION) return popup;
  if (popup) popup.remove();

  popup = document.createElement("div");
  popup.className = "modal-overlay";
  popup.id = "infoPopup";
  popup.dataset.version = INFO_POPUP_VERSION;
  popup.hidden = true;
  popup.setAttribute("role", "dialog");
  popup.setAttribute("aria-modal", "true");
  popup.setAttribute("aria-label", "Kā tas strādā?");
  popup.innerHTML = `
    <div class="modal-backdrop" aria-hidden="true"></div>
    <div class="modal-content info-popup-content">
      <header class="modal-header">
        <h2>Kā tas strādā?</h2>
        <button type="button" class="modal-close" aria-label="Aizvērt">×</button>
      </header>
      <div class="info-popup-body">
        ${infoPopupBodyHtml()}
      </div>
    </div>
  `;
  document.body.appendChild(popup);

  popup.querySelector(".modal-backdrop").addEventListener("click", closeInfoPopup);
  popup.querySelector(".modal-close").addEventListener("click", closeInfoPopup);
  popup.querySelector(".modal-content").addEventListener("click", (event) => event.stopPropagation());
  return popup;
}

function openInfoPopup() {
  const popup = ensureInfoPopup();
  popup.hidden = false;
  popup.style.display = "block";
}

function closeInfoPopup() {
  const popup = document.getElementById("infoPopup");
  if (popup) {
    popup.hidden = true;
    popup.style.display = "none";
  }
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

  return {
    infinitiv,
    infinitivLv: (verb.infinitiv && verb.infinitiv.lv) || verb.tagadneLv || (verb.present && verb.present.lv) || "",
    praesens: (verb.praesens && verb.praesens.de) || "",
    praesensLv: (verb.praesens && verb.praesens.lv) || "",
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
    { front: forms.tagadneLv, prompt: "Uzraksti imperfektu", expected: forms.nakotne },
    { front: forms.tagadneLv, prompt: "Uzraksti pagātnes divdabi", expected: forms.pagatne }
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
    { show: forms.tagadneLv, prompt: "Uzmini imperfektu", reveal: forms.nakotne },
    { show: forms.tagadneLv, prompt: "Uzmini pagātnes divdabi", reveal: forms.pagatne }
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
    .replace(/[!?.…]+$/g, "")
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

function isGermanArticleToken(value) {
  return /^(der|die|das)$/i.test(String(value || "").trim());
}

function splitCardSearchSegments(value) {
  return String(value || "")
    .split(/\s*[•|/]\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function splitLvSearchAlternatives(value) {
  return String(value || "")
    .split(/\s*[•;|/]\s*/)
    .map((part) => part.trim())
    .filter(Boolean);
}

function cardSearchKeys(value) {
  const decoded = decodeCardQuery(value);
  const parts = new Set();
  if (decoded) {
    parts.add(decoded);
    const withoutArticle = stripGermanArticle(decoded);
    if (withoutArticle) parts.add(withoutArticle);
    for (const segment of splitCardSearchSegments(decoded)) {
      parts.add(segment);
      const bare = stripGermanArticle(segment);
      if (bare) parts.add(bare);
    }
    for (const alt of splitLvSearchAlternatives(decoded)) {
      parts.add(alt);
    }
    if (/^[a-z0-9]+(-[a-z0-9]+)+$/i.test(decoded)) {
      parts.add(decoded.toLowerCase());
    }
  }
  const keys = [];
  for (const part of parts) {
    const normalized = normalizeCardSearchValue(part);
    const translit = normalizeCardSearchValue(part, "translit");
    if (normalized && !isGermanArticleToken(normalized)) keys.push(normalized);
    if (translit && !isGermanArticleToken(translit)) keys.push(translit);
  }
  return [...new Set(keys)];
}

function cardSearchKeysMatch(queryKeys, candidate) {
  const candidateKeys = cardSearchKeys(candidate);
  return candidateKeys.some((key) => queryKeys.includes(key));
}

function stripGermanArticle(value) {
  return String(value || "").replace(/^(der|die|das)\s+/i, "").trim();
}

function parseGermanSearchQuery(rawQuery) {
  const raw = decodeCardQuery(rawQuery)
    .replace(/[•|/]+/g, " ")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[!?.…]+$/g, "")
    .trim();
  const articleMatch = raw.match(/^(der|die|das)\s+(.+)$/i);
  if (articleMatch) {
    return {
      raw,
      article: articleMatch[1].toLowerCase(),
      word: articleMatch[2].trim(),
      hasArticle: true,
    };
  }
  return {
    raw,
    article: null,
    word: raw,
    hasArticle: false,
  };
}

function germanEntryExactMatchScore(entry, parsed) {
  if (!parsed?.raw) return 0;

  const de = String(entry.de || "").trim();
  const article = String(entry.de_article || "").trim().toLowerCase();
  const formatted = formatGermanEntry(entry);

  if (formatted === parsed.raw || de === parsed.raw) return 100;

  if (parsed.hasArticle) {
    if (article === parsed.article && de === parsed.word) return 100;
    if (article === parsed.article && de.toLowerCase() === parsed.word.toLowerCase()) {
      return de === parsed.word ? 99 : 90;
    }
    return 0;
  }

  if (de === parsed.word) return 98;
  return 0;
}

function capArticleMismatchScore(entry, parsed, score) {
  if (!parsed?.hasArticle || score <= 0) return score;

  const entryArticle = String(entry.de_article || "").trim().toLowerCase();
  if (entryArticle === parsed.article) return score;

  const entryWord = String(entry.de || "").trim();
  if (
    entryWord
    && parsed.word
    && entryWord.toLowerCase() === parsed.word.toLowerCase()
  ) {
    return Math.min(score, 70);
  }

  return score;
}

function capCaseMismatchScore(entry, parsed, score) {
  if (!parsed?.word || parsed.hasArticle) return score;

  const de = String(entry.de || "").trim();
  if (!de || de === parsed.word) return score;
  if (de.toLowerCase() !== parsed.word.toLowerCase()) return score;

  return Math.min(score, 70);
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

let activeCardAudio = null;
let activeCardAudioBtn = null;
let currentPrimaryAudioSrc = null;
let lastAutoplayedCardKey = null;
let cardAutoplayToken = 0;
let activeRenderedCardKey = null;
let activeSessionStartedAt = null;

function hideCardTranslationDOM() {
  if (elements.translation) {
    elements.translation.textContent = "";
  }
  resetFlashcardAudioControls();
}

function resetCardReveal() {
  state.revealed = false;
  activeRenderedCardKey = null;
  activeSessionStartedAt = null;
  lastAutoplayedCardKey = null;
  hideCardTranslationDOM();
}

function isSessionCompleteOverlayVisible() {
  return Boolean(elements.sessionCompleteOverlay && !elements.sessionCompleteOverlay.hidden);
}

function isGroupCompleteOverlayVisible() {
  return Boolean(elements.groupCompleteOverlay && !elements.groupCompleteOverlay.hidden);
}

function isAnyCompleteOverlayVisible() {
  return isSessionCompleteOverlayVisible() || isGroupCompleteOverlayVisible();
}

function activeCardRenderKey(card) {
  if (!card) return null;
  const groupKey = activeGroupKey();
  const id = idForSessionKey(card, groupKey);
  const sessionStamp = state.session?.startedAt || state.session?.created || "none";
  if (state.studyTestCard) return `study:${id}`;
  if (state.reviewLastSession) return `last:${state.lastSessionIndex}:${id}`;
  if (state.timeReviewMode) return `time:${state.timeReviewIndex}:${id}`;
  if (state.problemMode) return `problem:${state.problemIndex}:${id}`;
  if (state.reviewKnown) return `known:${state.index}:${id}`;
  if (!state.verbMode && sessionMatchesActiveGroup()) return `session:${sessionStamp}:${sessionPosition()}:${id}`;
  return `card:${state.index}:${id}`;
}

function syncCardRevealState(card) {
  const sessionStartedAt = state.session?.startedAt || state.session?.created || null;
  if (sessionStartedAt !== activeSessionStartedAt) {
    state.revealed = false;
    activeSessionStartedAt = sessionStartedAt;
    activeRenderedCardKey = null;
    lastAutoplayedCardKey = null;
    hideCardTranslationDOM();
  }

  const key = activeCardRenderKey(card);
  if (key !== activeRenderedCardKey) {
    state.revealed = false;
    activeRenderedCardKey = key;
    lastAutoplayedCardKey = null;
    hideCardTranslationDOM();
    resetCardScrollPosition(card);
  }
}

function getAudioBasePath() {
  const path = window.location.pathname || "/";
  if (path.endsWith("/")) return path;
  const last = path.split("/").pop() || "";
  if (last.includes(".")) {
    return path.slice(0, path.lastIndexOf("/") + 1);
  }
  return `${path}/`;
}

function sanitizeAudioFilename(text) {
  return String(text || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[/\\:*?"<>|]/g, "");
}

const COMPARISON_ONLY_NOUN_ARTICLES = {
  appetit: "der",
  eltern: "die",
  ferien: "die",
  gemuese: "das",
  geschwister: "die",
  hose: "die",
  jeans: "die",
  kleidung: "die",
  obst: "das",
  staat: "der",
  stadt: "die",
  uhr: "die",
  urlaub: "der",
  zeit: "die",
};

const COMPARISON_PHRASE_AUDIO = [
  [/\bim\s+urlaub\b/i, "der Urlaub"],
  [/\bin\s+den\s+ferien\b/i, "die Ferien"],
  [/\bim\s+fernsehen\b/i, "das Fernsehen"],
  [/\bam\s+fernsehen\b/i, "das Fernsehen"],
  [/^ohne\s*\.\.\.\s*zu$/i, "ohne zu"],
];

function titleCaseGermanWord(word) {
  return String(word || "")
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

function resolveAudioFilename(candidates) {
  const list = Array.isArray(candidates) ? candidates : [];
  const hasIndex = typeof window !== "undefined" && window.AUDIO_ALL_FILES;
  for (const candidate of list) {
    const lower = String(candidate || "").toLowerCase();
    if (!lower) continue;
    if (typeof window !== "undefined" && window.AUDIO_CASE_MAP?.[lower]) {
      return window.AUDIO_CASE_MAP[lower];
    }
    if (hasIndex) {
      if (window.AUDIO_ALL_FILES.has(lower)) return lower;
      continue;
    }
    return lower;
  }
  return null;
}

function audioFilenameCandidates(text) {
  const raw = String(text || "").trim();
  if (!raw) return [];

  for (const [pattern, noun] of COMPARISON_PHRASE_AUDIO) {
    if (pattern.test(raw)) return audioFilenameCandidates(noun);
  }

  const candidates = [];
  const articleMatch = raw.match(/^(der|die|das)\s+(.+)$/i);
  if (articleMatch) {
    const article = articleMatch[1].toLowerCase();
    const word = articleMatch[2].trim();
    const sanitized = sanitizeAudioFilename(word);
    const titleCased = sanitizeAudioFilename(titleCaseGermanWord(word));
    candidates.push(`${article}_${sanitized}.mp3`);
    if (titleCased !== sanitized) candidates.push(`${article}_${titleCased}.mp3`);
    return [...new Set(candidates)];
  }

  const bare = stripGermanArticle(raw);
  if (!bare) return [];
  const key = bare.toLowerCase();
  const article = COMPARISON_ONLY_NOUN_ARTICLES[key];
  const sanitized = sanitizeAudioFilename(bare);
  const titleCased = sanitizeAudioFilename(titleCaseGermanWord(bare));
  candidates.push(`${sanitized}.mp3`);
  if (article) {
    candidates.push(`${article}_${sanitized}.mp3`);
    if (titleCased !== sanitized) candidates.push(`${article}_${titleCased}.mp3`);
  }
  return [...new Set(candidates)];
}

function resolveAudioSrc(candidates) {
  const filename = resolveAudioFilename(candidates);
  if (!filename) return null;
  return `${getAudioBasePath()}public/audio/${filename}`;
}

function isWordLevelAudioText(text) {
  const raw = String(text || "").trim();
  if (!raw) return false;
  if (/[.!?]/.test(raw)) return false;
  if (raw.split(/\s+/).length > 4) return false;
  return true;
}

const CARD_AUDIO_LEVELS = new Set(["A1", "A2", "B1", "B2", "C1", "C2", "Sätze"]);

function parseArticleSlashAlternative(text) {
  const raw = String(text || "").trim().split(/\s*\(/)[0].trim();
  const match = raw.match(/^((?:der|die|das)(?:\/(?:der|die|das))+)\s+(.+)$/i);
  if (!match) return null;
  return {
    articles: match[1].split("/"),
    noun: match[2].trim(),
  };
}

function formatGermanArticleAlternative(text) {
  const parsed = parseArticleSlashAlternative(text);
  if (!parsed) return String(text || "").trim();
  return `${parsed.articles.join(" / ")} ${parsed.noun}`;
}

function germanAudioStem(text) {
  const raw = String(text || "").trim();
  if (!raw) return "";
  const withoutNote = raw.split(/\s*\(/)[0].trim();
  if (parseArticleSlashAlternative(withoutNote)) return withoutNote;
  return withoutNote.split(/\s*\/\s*/)[0].trim();
}

function splitGermanAlternatives(text) {
  const raw = String(text || "").trim().split(/\s*\(/)[0].trim();
  if (parseArticleSlashAlternative(raw)) return null;
  if (!raw.includes("/")) return null;
  const parts = raw.split(/\s*\/\s*/).map((part) => part.trim()).filter(Boolean);
  return parts.length > 1 ? parts : null;
}

function a1SingularAudioFile(entry) {
  if (!entry || !CARD_AUDIO_LEVELS.has(entry.level)) return null;
  const de = germanAudioStem(entry.de);
  if (!de) return null;
  if (entry.level === "Sätze") {
    return `${sanitizeAudioFilename(de)}.mp3`;
  }
  const article = String(entry.de_article || "").trim().toLowerCase();
  if (article && /^(der|die|das)$/.test(article)) {
    return `${article}_${sanitizeAudioFilename(de)}.mp3`;
  }
  return `${sanitizeAudioFilename(de)}.mp3`;
}

function a1PluralAudioFile(entry) {
  if (!entry || !CARD_AUDIO_LEVELS.has(entry.level) || entry.level === "Sätze" || !entry.de_plural) return null;
  const dePlural = String(entry.de_plural || "").trim();
  const de = String(entry.de || "").trim();
  if (!dePlural) return null;
  const parts = dePlural.split(/\s+/);
  const article = parts[0]?.trim().toLowerCase();
  if (article && /^(der|die|das)$/.test(article) && de) {
    return `plural_${article}_${sanitizeAudioFilename(de)}.mp3`.toLowerCase();
  }
  return `plural_${sanitizeAudioFilename(dePlural)}.mp3`.toLowerCase();
}

function resolveSingularCardAudioSrc(card) {
  if (!card) return null;
  const audioCard = { ...card, de: germanAudioStem(card.de) };
  return a1AudioSrc(a1SingularAudioFile(audioCard));
}

function resolveFlashcardSingularAudioSrc(card, study = null) {
  if (!card) return null;
  const studyData = study || card.study || null;
  if (!studyData) return resolveSingularCardAudioSrc(card);
  const layout = studyData.layout || "standardStudy";
  const isMinimalStudy = layout === "minimalStudy";
  const studyVariants = isMinimalStudy && Array.isArray(studyData.variants) ? studyData.variants : [];
  if (studyVariants.length) {
    return nounArticleAudioSrc(studyVariants[0].article, studyVariants[0].de);
  }
  if (isMinimalStudy) {
    return comparisonWordAudioSrc(card.de);
  }
  return resolveSingularCardAudioSrc(card);
}

function flashcardGermanAudioLabel(card, germanText, study = null) {
  const studyData = study || card.study || null;
  if (studyData?.layout === "minimalStudy") {
    return germanAudioStem(card.de || germanText);
  }
  return germanAudioStem(germanText);
}

function flashcardGermanOnFront(card, isGermanToLatvian, study = null) {
  const studyData = study || card.study || null;
  if (!studyData) return isGermanToLatvian;
  const layout = studyData.layout || "standardStudy";
  if (layout === "comparisonStudy" || layout === "minimalStudy") return false;
  return isGermanToLatvian;
}

function flashcardSpeakerButtonConfig(card, isGermanToLatvian, study = null) {
  const studyData = study || card.study || null;
  if (!studyData) {
    const alternatives = !isGermanToLatvian && state.revealed
      ? splitGermanAlternatives(formatGermanEntry(card))
      : null;
    return {
      onWord: isGermanToLatvian,
      onTranslation: !isGermanToLatvian && state.revealed && !alternatives,
    };
  }
  const layout = studyData.layout || "standardStudy";
  const isComparisonStudy = layout === "comparisonStudy";
  const isMinimalStudy = layout === "minimalStudy";
  const isPairedStudy = isComparisonStudy || isMinimalStudy;
  const studyVariants = isMinimalStudy && Array.isArray(studyData.variants) ? studyData.variants : [];
  return {
    onWord: isGermanToLatvian && !isPairedStudy,
    onTranslation: state.revealed && (isPairedStudy || !isGermanToLatvian) && !studyVariants.length,
  };
}

function shouldScheduleFlashcardAutoplay(card, isGermanToLatvian, study = null) {
  return shouldAutoplayGermanAudio(flashcardGermanOnFront(card, isGermanToLatvian, study));
}

function beginFlashcardAudioRender(card) {
  prepareFlashcardAutoplay(card);
  resetFlashcardAudioControls();
}

function applyFlashcardSingularAudio(card, autoplayToken, {
  study = null,
  audioLabel = null,
  speakerButtons = null,
  enablePrimaryAudio = true,
  enableAutoplay = true,
} = {}) {
  const isGermanToLatvian = state.direction === "de-lv";
  const germanText = formatGermanEntry(card);
  const singularAudioSrc = resolveFlashcardSingularAudioSrc(card, study);
  const label = audioLabel || flashcardGermanAudioLabel(card, germanText, study);
  const buttons = speakerButtons || flashcardSpeakerButtonConfig(card, isGermanToLatvian, study);
  const germanOnFront = flashcardGermanOnFront(card, isGermanToLatvian, study);

  if (enablePrimaryAudio) {
    setPrimaryCardAudio(singularAudioSrc, `Klausīties: ${label}`);
  }
  setInlineGermanAudioButtons(singularAudioSrc, label, buttons);

  if (enableAutoplay && shouldScheduleFlashcardAutoplay(card, isGermanToLatvian, study)) {
    scheduleCardAutoplay(card, autoplayToken, singularAudioSrc, germanOnFront);
  }

  return { singularAudioSrc, germanText, isGermanToLatvian, label, germanOnFront };
}

function a1AudioSrc(filename) {
  if (!filename) return null;
  const resolved = resolveAudioFilename([filename]);
  if (!resolved) return null;
  return `${getAudioBasePath()}public/audio/${resolved}`;
}

function setFlashcardAudioButton(button, src) {
  if (!button) return;
  if (!src) {
    button.hidden = true;
    delete button.dataset.audioSrc;
    return;
  }
  button.hidden = false;
  button.dataset.audioSrc = src;
}

function resetFlashcardAudioControls() {
  currentPrimaryAudioSrc = null;
  setFlashcardAudioButton(elements.singularAudioBtn, null);
  setFlashcardAudioButton(elements.singularTranslationAudioBtn, null);
  setFlashcardAudioButton(elements.pluralAudioBtn, null);
  if (elements.cardAutoplayBtn) elements.cardAutoplayBtn.hidden = true;
  if (elements.flashcardPluralRow) elements.flashcardPluralRow.hidden = true;
  if (elements.flashcardPluralText) elements.flashcardPluralText.textContent = "";
}

function setPrimaryCardAudio(src, label) {
  currentPrimaryAudioSrc = src || null;
  const btn = elements.cardAutoplayBtn;
  if (!btn) return;
  btn.hidden = !src || state.verbMode;
  if (!src) return;
  btn.dataset.audioLabel = label || "Automātiska izruna";
  updateAutoplayButtonUI();
}

function setInlineGermanAudioButtons(src, germanText, { onWord = false, onTranslation = false } = {}) {
  const label = `Klausīties: ${germanText}`;
  const show = Boolean(src && !state.verbMode);
  const buttons = [
    { btn: elements.singularAudioBtn, visible: show && onWord },
    { btn: elements.singularTranslationAudioBtn, visible: show && onTranslation },
  ];
  for (const { btn, visible } of buttons) {
    if (!btn) continue;
    if (!visible) {
      setFlashcardAudioButton(btn, null);
      continue;
    }
    setFlashcardAudioButton(btn, src);
    btn.title = label;
    btn.setAttribute("aria-label", label);
  }
}

function updateAutoplayButtonUI() {
  const btn = elements.cardAutoplayBtn;
  if (!btn || btn.hidden) return;
  const baseLabel = btn.dataset.audioLabel || "Automātiska izruna";
  btn.classList.toggle("is-enabled", state.audioAutoplay);
  btn.classList.toggle("is-disabled", !state.audioAutoplay);
  btn.setAttribute("aria-pressed", state.audioAutoplay ? "true" : "false");
  btn.title = state.audioAutoplay ? "Izslēgt automātisko izrunu" : "Ieslēgt automātisko izrunu";
  btn.setAttribute(
    "aria-label",
    state.audioAutoplay ? `${baseLabel} (automātiski ieslēgts)` : `${baseLabel} (automātiski izslēgts)`
  );
}

function cardAutoplaySessionKey(card) {
  const renderKey = activeCardRenderKey(card);
  if (!renderKey) return null;
  if (state.direction === "lv-de") {
    return `${renderKey}:revealed:${state.revealed ? "1" : "0"}`;
  }
  return renderKey;
}

function prepareFlashcardAutoplay(card) {
  const key = cardAutoplaySessionKey(card);
  if (key !== lastAutoplayedCardKey) {
    lastAutoplayedCardKey = null;
  }
}

function shouldAutoplayGermanAudio(isGermanToLatvian) {
  if (!state.audioAutoplay) return false;
  return isGermanToLatvian || state.revealed;
}

function getScheduleAutoplaySkipReason(card, autoplayToken, germanOnFront, preferredSrc = null) {
  if (!card) return "no-card";
  if (autoplayToken !== cardAutoplayToken) return "stale-token";
  if (!state.audioAutoplay) return "autoplay-disabled";
  if (!shouldAutoplayGermanAudio(germanOnFront)) return "not-allowed-by-shouldAutoplay";
  const key = cardAutoplaySessionKey(card);
  if (!key) return "no-key";
  if (key === lastAutoplayedCardKey) return "same-key";
  const src = preferredSrc || resolveFlashcardSingularAudioSrc(card) || currentPrimaryAudioSrc;
  if (!src) return "no-src";
  return null;
}

function scheduleCardAutoplay(card, autoplayToken = cardAutoplayToken, preferredSrc = null, germanOnFront = null) {
  const isGermanToLatvian = state.direction === "de-lv";
  const autoplayGermanOnFront = germanOnFront ?? flashcardGermanOnFront(card, isGermanToLatvian, card.study);
  if (getScheduleAutoplaySkipReason(card, autoplayToken, autoplayGermanOnFront, preferredSrc)) return;
  const key = cardAutoplaySessionKey(card);
  const src = preferredSrc || resolveFlashcardSingularAudioSrc(card) || currentPrimaryAudioSrc;
  playCardAudio(src, null, {
    onStarted: () => {
      if (autoplayToken !== cardAutoplayToken) return;
      lastAutoplayedCardKey = key;
    },
  });
}

function toggleAudioAutoplay() {
  state.audioAutoplay = !state.audioAutoplay;
  saveAudioAutoplay();
  updateAutoplayButtonUI();
  if (activeCardAudio && !activeCardAudio.paused) {
    activeCardAudio.pause();
    activeCardAudioBtn?.classList.remove("is-playing");
    activeCardAudio = null;
    activeCardAudioBtn = null;
  }
}

function showFlashcardPluralRow(text, audioSrc) {
  if (!elements.flashcardPluralRow || !elements.flashcardPluralText || !text) return;
  elements.flashcardPluralText.textContent = text;
  elements.flashcardPluralRow.hidden = false;
  setFlashcardAudioButton(elements.pluralAudioBtn, audioSrc);
}

function flashcardPluralLabel(card) {
  const plural = String(card?.de_plural || "").trim();
  if (!plural) return "";
  const singular = formatGermanEntry(card).trim();
  if (!singular) return plural;
  const normalizeLabel = (value) => stripGermanArticle(value).toLocaleLowerCase();
  if (normalizeLabel(plural) === normalizeLabel(singular)) return "";
  if (plural.toLocaleLowerCase() === singular.toLocaleLowerCase()) return "";
  return plural;
}

function a1AudioForBareWord(de) {
  const bare = stripGermanArticle(de);
  if (!bare) return null;
  const entry = wordEntries.find((item) => (
    item.level === "A1" && String(item.de || "").trim().toLowerCase() === bare.toLowerCase()
  ));
  return entry ? a1AudioSrc(a1SingularAudioFile(entry)) : null;
}

function renderGermanAlternativesTranslation(alternatives) {
  return alternatives.map((word, index) => {
    const src = a1AudioSrc(`${sanitizeAudioFilename(word)}.mp3`);
    const btn = comparisonWordAudioButtonHtml(word, src);
    return `${index > 0 ? " / " : ""}${escapeHtml(word)}${btn}`;
  }).join("");
}

function renderWordCardContent(card, autoplayToken = cardAutoplayToken) {
  beginFlashcardAudioRender(card);
  const isDeFront = state.direction === "de-lv";
  const germanText = formatGermanEntry(card);
  const frontText = isDeFront ? germanText : card.lv;
  const backText = isDeFront ? card.lv : formatGermanArticleAlternative(germanText);
  const pluralText = flashcardPluralLabel(card);
  const pluralAudioSrc = a1AudioSrc(a1PluralAudioFile(card));
  const alternatives = !isDeFront && state.revealed ? splitGermanAlternatives(germanText) : null;

  elements.word.textContent = frontText;
  applyFlashcardSingularAudio(card, autoplayToken);

  if (!state.revealed) {
    elements.translation.textContent = "";
    elements.translation.innerHTML = "";
  } else if (alternatives) {
    elements.translation.innerHTML = renderGermanAlternativesTranslation(alternatives);
  } else if (isDeFront) {
    elements.translation.innerHTML = "";
    elements.translation.textContent = backText;
    if (pluralText) showFlashcardPluralRow(pluralText, pluralAudioSrc);
  } else {
    elements.translation.innerHTML = "";
    elements.translation.textContent = backText;
    if (pluralText) showFlashcardPluralRow(pluralText, pluralAudioSrc);
  }
}

function playCardAudio(src, button, { onStarted } = {}) {
  if (!src) return;
  if (activeCardAudio && !activeCardAudio.paused) {
    activeCardAudio.pause();
    activeCardAudioBtn?.classList.remove("is-playing");
    if (button != null && activeCardAudioBtn === button) {
      activeCardAudio = null;
      activeCardAudioBtn = null;
      return;
    }
    activeCardAudio = null;
    activeCardAudioBtn = null;
  }

  const audio = new Audio(src);
  activeCardAudio = audio;
  activeCardAudioBtn = button || null;
  button?.classList.add("is-playing");
  audio.addEventListener("ended", () => {
    button?.classList.remove("is-playing");
    if (activeCardAudioBtn === button) {
      activeCardAudio = null;
      activeCardAudioBtn = null;
    }
  });
  audio.addEventListener("error", () => {
    button?.classList.remove("is-playing");
    if (activeCardAudio === audio) {
      activeCardAudio = null;
      activeCardAudioBtn = null;
    }
  });
  const playAttempt = audio.play();
  if (playAttempt && typeof playAttempt.then === "function") {
    playAttempt
      .then(() => onStarted?.())
      .catch(() => {
        button?.classList.remove("is-playing");
        if (activeCardAudio === audio) {
          activeCardAudio = null;
          activeCardAudioBtn = null;
        }
      });
  } else {
    onStarted?.();
  }
}

function replayCardAudio(src, button) {
  if (!src) return;
  if (activeCardAudio) {
    activeCardAudio.pause();
    activeCardAudioBtn?.classList.remove("is-playing");
    activeCardAudio = null;
    activeCardAudioBtn = null;
  }
  playCardAudio(src, button);
}

function collectStudySearchTexts(study) {
  if (!study || typeof study !== "object") return [];
  const texts = [];
  const push = (value) => {
    const text = String(value || "").trim();
    if (text) texts.push(text);
  };

  for (const item of study.words || []) {
    push(item.de);
    push(item.word);
    push(item.lv);
    push(item.meaning);
    push(item.description);
    push(item.example);
    for (const form of item.forms || []) push(form);
    for (const alt of splitLvSearchAlternatives(item.lv)) push(alt);
    for (const alt of splitLvSearchAlternatives(item.meaning)) push(alt);
  }
  for (const example of study.examples || []) {
    push(example.de);
    push(example.lv);
    for (const alt of splitLvSearchAlternatives(example.lv)) push(alt);
  }
  for (const row of study.comparison || study.comparisonTable || []) {
    push(row.word);
    push(row.de);
    push(row.lv);
    push(row.meaning);
    push(row.example);
    push(row.translation);
    for (const alt of splitLvSearchAlternatives(row.lv)) push(alt);
    for (const alt of splitLvSearchAlternatives(row.meaning)) push(alt);
  }
  for (const item of study.tip?.rightItems || []) {
    push(item.de);
    push(item.lv);
    for (const alt of splitLvSearchAlternatives(item.lv)) push(alt);
  }
  return texts;
}

function cardSearchCandidates(entry) {
  const study = entry.study || {};
  const wordItems = Array.isArray(study.words) ? study.words : [];
  const wordsDe = wordItems.map((item) => item.de || item.word).filter(Boolean);
  const rawCandidates = [
    entry.id,
    study.id,
    entry.word,
    study.word,
    entry.de,
    study.de,
    entry.title,
    study.title,
    study.subtitle,
    study.translation,
    entry.lv,
    formatGermanEntry(entry),
    entry.de_plural,
    ...wordsDe,
    ...splitCardSearchSegments(entry.de),
    ...splitCardSearchSegments(study.subtitle),
    ...splitCardSearchSegments(study.title),
    ...splitLvSearchAlternatives(entry.lv),
    ...splitLvSearchAlternatives(study.translation),
    ...splitLvSearchAlternatives(study.title),
    ...collectStudySearchTexts(study),
  ].filter(Boolean);

  const expanded = new Set();
  for (const candidate of rawCandidates) {
    expanded.add(candidate);
    const bare = stripGermanArticle(candidate);
    if (bare) expanded.add(bare);
    for (const segment of splitCardSearchSegments(candidate)) {
      expanded.add(segment);
      const segmentBare = stripGermanArticle(segment);
      if (segmentBare) expanded.add(segmentBare);
    }
    for (const alt of splitLvSearchAlternatives(candidate)) {
      expanded.add(alt);
    }
  }
  return [...expanded];
}

function cardMatchScore(entry, queryKeys, rawQuery = "") {
  const study = entry.study || {};
  const parsed = parseGermanSearchQuery(rawQuery);
  let score = germanEntryExactMatchScore(entry, parsed);
  const bump = (value, points) => {
    if (cardSearchKeysMatch(queryKeys, value)) score = Math.max(score, points);
  };

  bump(entry.id, 100);
  bump(study.id, 100);
  bump(formatGermanEntry(entry), 96);
  bump(entry.de, 94);
  bump(stripGermanArticle(entry.de), 92);

  const fullLv = String(entry.lv || "").trim();
  const queryNorm = normalizeCardSearchValue(rawQuery || "");
  if (fullLv && queryNorm) {
    const fullLvNorm = normalizeCardSearchValue(fullLv);
    if (fullLvNorm === queryNorm) {
      score = Math.max(score, 91);
    } else if (!/[•;|/]/.test(fullLv) && cardSearchKeysMatch(queryKeys, fullLv)) {
      score = Math.max(score, 91);
    }
  }

  for (const alt of splitLvSearchAlternatives(entry.lv)) bump(alt, 86);
  for (const alt of splitLvSearchAlternatives(study.translation)) bump(alt, 84);
  for (const alt of splitLvSearchAlternatives(study.title)) bump(alt, 82);

  bump(entry.de_plural, 80);
  bump(study.subtitle, 78);
  bump(study.title, 78);

  for (const item of study.words || []) {
    bump(item.de, 76);
    bump(item.word, 76);
    for (const alt of splitLvSearchAlternatives(item.lv)) bump(alt, 74);
    for (const form of item.forms || []) bump(form, 72);
  }

  for (const example of study.examples || []) {
    bump(example.de, 68);
    bump(example.lv, 66);
    for (const alt of splitLvSearchAlternatives(example.lv)) bump(alt, 64);
  }

  for (const row of study.comparison || study.comparisonTable || []) {
    bump(row.word, 70);
    bump(row.de, 70);
    bump(row.example, 62);
    for (const alt of splitLvSearchAlternatives(row.lv)) bump(alt, 68);
  }

  if (!score) {
    for (const candidate of cardSearchCandidates(entry)) {
      bump(candidate, 50);
    }
  }

  return capCaseMismatchScore(entry, parsed, capArticleMismatchScore(entry, parsed, score));
}

function preferExactGermanHomograph(entries, parsed, fallback) {
  if (!parsed?.word || parsed.hasArticle || /\s/.test(parsed.word)) return fallback;

  const exactDeMatches = entries.filter((entry) => String(entry.de || "") === parsed.word);
  if (exactDeMatches.length === 1) return exactDeMatches[0];

  const formattedMatches = entries.filter((entry) => formatGermanEntry(entry) === parsed.raw);
  if (formattedMatches.length === 1) return formattedMatches[0];

  return fallback;
}

function resolveSearchCard(entry) {
  if (!entry) return null;
  const targetId = entry.id || entry.study?.id;
  const targetDe = entry.de;
  const targetLevel = entry.level;
  const pools = [flashcards];
  for (const pool of pools) {
    const found = pool.find((card) => (
      (targetId && (card.id === targetId || card.study?.id === targetId))
      || (targetDe && card.de === targetDe && (card.level || "A1") === targetLevel)
    ));
    if (found) return found;
  }
  return entry;
}

function findCardByQuery(query) {
  const queryKeys = cardSearchKeys(query);
  if (!queryKeys.length) return null;

  const decodedQuery = decodeCardQuery(query);
  const preferSentences = /\s/.test(decodedQuery);
  const entries = allEntries();
  const orderedEntries = preferSentences
    ? [
        ...entries.filter((entry) => entry.level === "Sätze"),
        ...entries.filter((entry) => entry.level !== "Sätze"),
      ]
    : entries;

  let best = null;
  let bestScore = 0;
  const parsedQuery = parseGermanSearchQuery(decodedQuery);
  for (const entry of orderedEntries) {
    const score = cardMatchScore(entry, queryKeys, decodedQuery);
    const exactScore = germanEntryExactMatchScore(entry, parsedQuery);
    if (
      score > bestScore
      || (
        score === bestScore
        && score > 0
        && exactScore > germanEntryExactMatchScore(best, parsedQuery)
      )
    ) {
      bestScore = score;
      best = entry;
    }
  }

  return bestScore > 0 ? resolveSearchCard(preferExactGermanHomograph(orderedEntries, parsedQuery, best)) : null;
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
  openGroupDetailScreen(card.level);
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
  if (isAnyCompleteOverlayVisible()) {
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

function renderUnwantedList(container) {
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
    container.innerHTML = `<p class="modal-empty">Nav nevajadzīgo vārdu.</p>`;
    return;
  }

  container.innerHTML = cards.map((card) => `
    <div class="modal-row">
      <div class="modal-word">
        <strong>${escapeHtml(formatGermanEntry(card))} ➔ ${escapeHtml(card.lv)}</strong>
        <span class="modal-level">${escapeHtml(groupDisplayLabel(card.level))}</span>
      </div>
      <button type="button" class="modal-remove-btn" data-restore-unwanted="${card.id}">Atgriezt</button>
    </div>
  `).join("");
}

let activeWordListModalId = null;
let activeWordListModalEscapeHandler = null;

function closeWordListModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.hidden = true;
    modal.style.display = "none";
  }
  if (activeWordListModalId === modalId) {
    if (activeWordListModalEscapeHandler) {
      document.removeEventListener("keydown", activeWordListModalEscapeHandler);
      activeWordListModalEscapeHandler = null;
    }
    activeWordListModalId = null;
  }
}

function ensureWordListModal(config) {
  const { id, title, ariaLabel, listId, actionsHtml = "" } = config;
  let modal = document.getElementById(id);
  if (modal) return modal;

  modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.id = id;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", ariaLabel);
  modal.innerHTML = `
    <div class="modal-backdrop" aria-hidden="true"></div>
    <div class="modal-content">
      <header class="modal-header">
        <h2>${escapeHtml(title)}</h2>
        <button type="button" class="modal-close" aria-label="Aizvērt">×</button>
      </header>
      ${actionsHtml}
      <div class="modal-list" id="${listId}"></div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.querySelector(".modal-backdrop").addEventListener("click", () => closeWordListModal(id));
  modal.querySelector(".modal-close").addEventListener("click", () => closeWordListModal(id));
  modal.querySelector(".modal-content").addEventListener("click", (event) => event.stopPropagation());
  return modal;
}

function showWordListModal(config) {
  const { id, listId, renderContent, onListClick } = config;
  if (activeWordListModalId && activeWordListModalId !== id) {
    closeWordListModal(activeWordListModalId);
  }

  const modal = ensureWordListModal(config);
  const list = modal.querySelector(`#${listId}`);
  renderContent(list);

  if (onListClick && !modal.dataset.listClickBound) {
    list.addEventListener("click", onListClick);
    modal.dataset.listClickBound = "true";
  }

  activeWordListModalId = id;
  if (!activeWordListModalEscapeHandler) {
    activeWordListModalEscapeHandler = (event) => {
      if (event.key === "Escape" && activeWordListModalId) {
        closeWordListModal(activeWordListModalId);
      }
    };
  }

  modal.hidden = false;
  modal.style.display = "block";
  document.removeEventListener("keydown", activeWordListModalEscapeHandler);
  document.addEventListener("keydown", activeWordListModalEscapeHandler);
}

function openUnwantedList() {
  showWordListModal({
    id: "unwantedWordsModal",
    title: "Nevajadzīgie vārdi",
    ariaLabel: "Nevajadzīgie vārdi",
    listId: "unwantedWordsList",
    renderContent: renderUnwantedList,
    onListClick: (event) => {
      const button = event.target.closest("[data-restore-unwanted]");
      if (button) restoreUnwanted(button.dataset.restoreUnwanted);
    }
  });
}

function closeUnwantedList() {
  closeWordListModal("unwantedWordsModal");
}

function getAllLearnedEntries() {
  const entries = [];
  for (const groupKey of groups) {
    const ids = state.learned[groupKey] || [];
    const cards = cardsForSessionKey(groupKey);
    for (const id of ids) {
      const card = cards.find((candidate) => idForSessionKey(candidate, groupKey) === id);
      if (card) {
        entries.push({
          id,
          de: formatGermanEntry(card),
          lv: card.lv || "",
          level: card.level || groupKey,
          groupKey
        });
      }
    }
  }

  const verbIds = state.learned.verbs || [];
  for (const id of verbIds) {
    const verb = verbEntries.find((candidate) => verbId(candidate) === id);
    if (verb) {
      const forms = verbForms(verb);
      entries.push({
        id,
        de: forms.infinitiv || "",
        lv: forms.infinitivLv || "",
        level: "verbs",
        groupKey: "verbs"
      });
    }
  }

  return entries;
}

function renderKnownList(container) {
  const entries = getAllLearnedEntries();
  if (!entries.length) {
    container.innerHTML = `<p class="modal-empty">Nav iemācīto vārdu.</p>`;
    return;
  }

  container.innerHTML = entries.map((entry) => `
    <div class="modal-row">
      <div class="modal-word">
        <strong>${escapeHtml(entry.de)} ➔ ${escapeHtml(entry.lv)}</strong>
        <span class="modal-level">${escapeHtml(entry.groupKey === "verbs" ? "Darbības vārdi" : groupDisplayLabel(entry.level))}</span>
      </div>
      <button type="button" class="modal-remove-btn" data-restore-known="${escapeHtml(entry.id)}" data-restore-known-group="${escapeHtml(entry.groupKey)}">Atgriezt</button>
    </div>
  `).join("");
}

function openKnownList() {
  showWordListModal({
    id: "knownWordsModal",
    title: "Zināmi",
    ariaLabel: "Zināmi",
    listId: "knownWordsList",
    renderContent: renderKnownList,
    onListClick: (event) => {
      const button = event.target.closest("[data-restore-known]");
      if (button) {
        restoreKnownFromList(button.dataset.restoreKnown, button.dataset.restoreKnownGroup);
      }
    }
  });
}

function restoreKnownFromList(id, groupKey) {
  if (!id || !groupKey) return;
  if (groupKey === "verbs") {
    if (!state.learned.verbs) state.learned.verbs = [];
    state.learned.verbs = state.learned.verbs.filter((learnedId) => learnedId !== id);
  } else {
    if (!state.learned[groupKey]) state.learned[groupKey] = [];
    state.learned[groupKey] = state.learned[groupKey].filter((learnedId) => learnedId !== id);
  }
  delete state.reviewStatus[id];
  saveReviewStatus();
  saveProgress();
  const list = document.getElementById("knownWordsList");
  if (list) renderKnownList(list);
  updateKnownListBtn();
  render();
}

function renderMasteredList(container) {
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
    container.innerHTML = `<p class="modal-empty">Nav 100% zināmo vārdu.</p>`;
    return;
  }

  container.innerHTML = cards.map((card) => `
    <div class="modal-row">
      <div class="modal-word">
        <strong>${escapeHtml(formatGermanEntry(card))} ➔ ${escapeHtml(card.lv)}</strong>
        <span class="modal-level">${escapeHtml(groupDisplayLabel(card.level))}</span>
      </div>
      <button type="button" class="modal-remove-btn" data-restore-mastered="${card.id}">Atgriezt</button>
    </div>
  `).join("");
}

function openMasteredList() {
  showWordListModal({
    id: "masteredWordsModal",
    title: "100% zināmi",
    ariaLabel: "100% zināmi",
    listId: "masteredWordsList",
    renderContent: renderMasteredList,
    onListClick: (event) => {
      const button = event.target.closest("[data-restore-mastered]");
      if (button) restoreMastered(button.dataset.restoreMastered);
    }
  });
}

function closeMasteredList() {
  closeWordListModal("masteredWordsModal");
}

function restoreMastered(id) {
  state.masteredIds = (state.masteredIds || []).filter((item) => unwantedItemId(item) !== id);
  saveMasteredIds();
  const list = document.getElementById("masteredWordsList");
  if (list) renderMasteredList(list);
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
  openMasteredList();
}


function restoreUnwanted(id) {
  state.unwantedIds = (state.unwantedIds || []).filter((item) => unwantedItemId(item) !== id);
  saveUnwantedIds();
  if (state.session && state.session.groupKey === activeGroupKey()) {
    createSession();
  }
  const list = document.getElementById("unwantedWordsList");
  if (list) renderUnwantedList(list);
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
    const graduated = completeProblemCard(id, problemCardGroupKey(card));
    if (graduated) {
      setNotice(problemDeck().length ? "Vārds pārvietots uz Zināmi!" : "Problemātiskie vārdi izmācīti. Vārds pārvietots uz Zināmi!");
    } else {
      setNotice(problemDeck().length ? "Kļūdu pakāpe samazināta." : problemEmptyMessage());
    }
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

    rotateProblemDeck();
    setNotice("Atstāts problemātiskajā grupā.");
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
  if (state.problemMode) {
    state.problemMode = false;
    state.problemIndex = 0;
    state.revealed = false;
    setNotice("Problemātisko vārdu režīms izslēgts.");
    render();
    return;
  }

  state.verbMode = false;
  state.problemMode = true;
  state.spellingMode = false;
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
  setNotice(problemDeck().length ? "Rādām problemātiskos vārdus." : problemEmptyMessage());
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

function ensureRestoreAllConfirmPopup() {
  let popup = document.getElementById("restoreAllConfirmPopup");
  if (popup) return popup;

  popup = document.createElement("div");
  popup.className = "modal-overlay";
  popup.id = "restoreAllConfirmPopup";
  popup.hidden = true;
  popup.setAttribute("role", "dialog");
  popup.setAttribute("aria-modal", "true");
  popup.setAttribute("aria-label", "Apstiprināt visu progressa dzēšanu");
  popup.innerHTML = `
    <div class="modal-backdrop" aria-hidden="true"></div>
    <div class="modal-content restore-confirm-content">
      <header class="modal-header">
        <h2 class="modal-title-with-icon">${appIconSvg("warning", "ui-icon ui-icon--warning")}<span>Atgriezt visu</span></h2>
        <button type="button" class="modal-close" aria-label="Aizvērt">×</button>
      </header>
      <div class="restore-confirm-body">
        <p>Uzmanību! Viss iemācītais progress un vārdu vēsture tiks pilnībā nodzēsta pa nullēm.</p>
        <div class="restore-confirm-actions">
          <button type="button" class="restore-confirm-btn" id="restoreConfirmBtn">Dzēst</button>
          <button type="button" class="restore-cancel-btn" id="restoreCancelBtn">Atcelt</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(popup);

  popup.querySelector(".modal-backdrop").addEventListener("click", closeRestoreAllConfirm);
  popup.querySelector(".modal-close").addEventListener("click", closeRestoreAllConfirm);
  popup.querySelector("#restoreCancelBtn").addEventListener("click", closeRestoreAllConfirm);
  popup.querySelector("#restoreConfirmBtn").addEventListener("click", wipeAllProgress);
  popup.querySelector(".modal-content").addEventListener("click", (event) => event.stopPropagation());
  return popup;
}

function openRestoreAllConfirm() {
  const popup = ensureRestoreAllConfirmPopup();
  popup.hidden = false;
  popup.style.display = "block";
}

function closeRestoreAllConfirm() {
  const popup = document.getElementById("restoreAllConfirmPopup");
  if (popup) {
    popup.hidden = true;
    popup.style.display = "none";
  }
}

function wipeAllProgress() {
  store.setItem(storageKey, "{}");
  store.setItem(reviewStorageKey, "{}");
  store.setItem(problemStatsStorageKey, "{}");
  store.setItem(unwantedStorageKey, "[]");
  store.setItem(legacyUnwantedStorageKey, "[]");
  store.setItem(masteredStorageKey, "[]");
  store.setItem(sessionStorageKey, "null");
  store.setItem(lastCompletedSessionStorageKey, "null");
  store.setItem(groupCompleteShownStorageKey, "{}");
  store.setItem(directionStorageKey, "de-lv");
  store.setItem(modeStorageKey, "normal");
  closeRestoreAllConfirm();
  window.location.reload();
}

function updateStats() {
  render();
}

function renderCard() {
  if (!state.verbMode && !state.problemMode && !state.reviewKnown && !state.reviewLastSession && !state.timeReviewMode && !state.studyTestCard) {
    if (state.session?.completed) {
      reconcileCompletedSessionState();
    } else {
      ensureSession();
      normalizeSessionIndex();
    }
  }
  render();
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

function mainMenuCount(item) {
  if (item.type === "verbs") return verbEntries.length;
  if (item.type === "kurss") return "";
  return baseCardsForGroup(item.key).length;
}

function detailScreenHeading(itemKey) {
  if (itemKey === "verbs") return "Darbības vārdi";
  if (itemKey === "kurss") return "Kurss";
  const match = MAIN_MENU_ITEMS.find((item) => item.key === itemKey);
  return match ? match.label : groupLabel(itemKey);
}

function groupProgressTitle(itemKey) {
  if (itemKey === "verbs") {
    const learned = (state.learned.verbs || []).length;
    return `Darbības vārdi · ${learned}/${verbEntries.length}`;
  }
  const heading = detailScreenHeading(itemKey);
  const total = baseCardsForGroup(itemKey).length;
  const learned = (state.learned[itemKey] || []).length;
  return `${heading} · ${learned}/${total}`;
}

function refreshDetailScreenTitle() {
  if (state.navScreen !== "detail" || !elements.detailScreenTitle) return;
  const itemKey = state.verbMode ? "verbs" : state.group;
  elements.detailScreenTitle.textContent = groupProgressTitle(itemKey);
}

const MOBILE_HOME_BG = "#000000";
const MOBILE_HOME_ISOLATION_PROPS = [
  ["color-scheme", "dark"],
  ["background-color", MOBILE_HOME_BG],
  ["background-image", "none"],
  ["forced-color-adjust", "none"],
  ["filter", "none"],
  ["-webkit-filter", "none"]
];

function mobileHomeIsolationTargets() {
  return [
    document.documentElement,
    document.body,
    document.querySelector("main.home-main"),
    document.querySelector(".home-app-shell"),
    document.getElementById("homeMenuScreen")
  ].filter(Boolean);
}

function applyMobileHomeLightIsolation(isMobileHome) {
  mobileHomeIsolationTargets().forEach((node) => {
    MOBILE_HOME_ISOLATION_PROPS.forEach(([name, value]) => {
      if (isMobileHome) {
        node.style.setProperty(name, value, "important");
        return;
      }
      node.style.removeProperty(name);
    });
  });
}

function readBgColor(el) {
  if (!el) return "n/a";
  return getComputedStyle(el).backgroundColor || "n/a";
}

function mobileMenuDebugFlags() {
  const raw = (new URLSearchParams(window.location.search).get("debugMenu") || "").toLowerCase();
  return {
    solid: raw === "solid" || raw.includes("solid"),
    layers: raw === "1" || raw.includes("layers")
  };
}

function applyMobileMenuExperimentMode(isMobileHome) {
  const solid = isMobileHome && mobileMenuDebugFlags().solid;
  document.documentElement.classList.toggle("mobile-menu-solid-experiment", solid);
  document.body.classList.toggle("mobile-menu-solid-experiment", solid);
}

function initMobileMenuDebugHelper() {
  const params = new URLSearchParams(window.location.search);
  if (!params.has("debugMenu")) return;
  const flags = mobileMenuDebugFlags();
  if (flags.layers) {
    document.documentElement.classList.add("debug-mobile-menu-layers");
  }

  const panel = document.createElement("div");
  panel.id = "mobileMenuDebugPanel";
  panel.setAttribute("aria-live", "polite");

  function renderDebugPanel() {
    const html = document.documentElement;
    const body = document.body;
    const menu = document.getElementById("homeMenuScreen");
    const emblem = document.querySelector(".mh-bg");
    const sampleBtn = document.querySelector(".menu-button-container button.menu-black");
    const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
    const themeMeta = document.querySelector('meta[name="theme-color"]');
    panel.textContent = [
      `mode: ${flags.solid ? "SOLID experiment (no rgba/eagle)" : "default (rgba/eagle)"}`,
      `html classes: ${html.className || "(none)"}`,
      `body classes: ${body.className || "(none)"}`,
      `prefers-color-scheme dark: ${window.matchMedia("(prefers-color-scheme: dark)").matches}`,
      `mobile-home-light: ${html.classList.contains("mobile-home-light")}`,
      `solid-experiment: ${html.classList.contains("mobile-menu-solid-experiment")}`,
      `meta color-scheme: ${colorSchemeMeta ? colorSchemeMeta.content : "n/a"}`,
      `meta theme-color: ${themeMeta ? themeMeta.content : "n/a"}`,
      `html bg: ${readBgColor(html)}`,
      `body bg: ${readBgColor(body)}`,
      `main bg: ${readBgColor(document.querySelector("main.home-main"))}`,
      `#homeMenuScreen bg: ${readBgColor(menu)}`,
      `.mh-bg bg: ${readBgColor(emblem)}`,
      `A1 button bg: ${readBgColor(sampleBtn)}`
    ].join("\n");
  }

  const mount = () => {
    if (!document.body.contains(panel)) document.body.appendChild(panel);
    renderDebugPanel();
  };

  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
  window.setInterval(renderDebugPanel, 1000);
}

function isKurssScrollDebugEnabled() {
  const params = new URLSearchParams(window.location.search);
  if (params.has("debugKurss")) return true;
  try {
    return localStorage.getItem("debugKurss") === "1";
  } catch (error) {
    return false;
  }
}

function initKurssScrollDebugHelper() {
  if (!isKurssScrollDebugEnabled()) return;

  const panel = document.createElement("div");
  panel.id = "kurssScrollDebugPanel";
  panel.setAttribute("aria-live", "polite");

  const debugState = {
    lastScroll: [],
    lastTouch: [],
    preventDefaultCalls: [],
    maxLog: 10
  };

  function describeNode(node) {
    if (!node || node.nodeType !== 1) return String(node);
    const id = node.id ? `#${node.id}` : "";
    const className = typeof node.className === "string" && node.className.trim()
      ? `.${node.className.trim().split(/\s+/).slice(0, 2).join(".")}`
      : "";
    return `${node.tagName}${id}${className}`;
  }

  function parentChain(el) {
    const parts = [];
    let node = el;
    while (node && node !== document.documentElement) {
      parts.push(describeNode(node));
      node = node.parentElement;
    }
    return parts.join(" < ");
  }

  function measureElement(el, label) {
    if (!el) return `${label}: (missing)`;
    const styles = getComputedStyle(el);
    const rect = el.getBoundingClientRect();
    const maxScroll = Math.max(0, el.scrollHeight - el.clientHeight);
    return [
      `${label}:`,
      `  parent=${describeNode(el.parentElement)}`,
      `  overflow-y=${styles.overflowY} overflow-x=${styles.overflowX}`,
      `  height=${styles.height} max-height=${styles.maxHeight}`,
      `  touch-action=${styles.touchAction}`,
      `  scrollTop=${el.scrollTop} maxScroll=${maxScroll}`,
      `  scrollHeight=${el.scrollHeight} clientHeight=${el.clientHeight}`,
      `  rect.height=${Math.round(rect.height)}px`,
      `  canScroll=${el.scrollHeight > el.clientHeight + 1}`
    ].join("\n");
  }

  function scrollTargets() {
    const overlay = elements.kurssPanel;
    const panelEl = overlay?.querySelector(".kurss-panel");
    const bodyEl = overlay?.querySelector(".kurss-body");
    const menuEl = document.getElementById("kurssLessonsMenu");
    return [
      ["#kurssPanel", overlay],
      [".kurss-panel", panelEl],
      [".kurss-body", bodyEl],
      ["#kurssLessonsMenu", menuEl],
      ["html", document.documentElement],
      ["body", document.body],
      ["main.home-main", document.querySelector("main.home-main")],
      [".home-app-shell", document.querySelector(".home-app-shell")],
      ["#homeMenuScreen", document.getElementById("homeMenuScreen")]
    ].filter(([, el]) => el);
  }

  function pushLog(bucket, line) {
    bucket.push(line);
    if (bucket.length > debugState.maxLog) bucket.shift();
  }

  function attachScrollListeners() {
    scrollTargets().forEach(([label, el]) => {
      if (el.__kurssScrollDebugBound) return;
      el.__kurssScrollDebugBound = true;
      el.addEventListener("scroll", () => {
        pushLog(debugState.lastScroll, `${label} scrollTop=${el.scrollTop}`);
        renderDebugPanel();
      }, { passive: true });
    });
  }

  function renderDebugPanel() {
    const overlay = elements.kurssPanel;
    const lines = [
      "KURSS SCROLL DEBUG",
      `time: ${new Date().toLocaleTimeString()}`,
      `enable: ?debugKurss=1 or localStorage.debugKurss='1'`,
      `viewport: ${window.innerWidth}x${window.innerHeight} @${window.devicePixelRatio}x`,
      `kurss open: ${Boolean(overlay && !overlay.hidden)}`,
      `kurss parent chain: ${overlay ? parentChain(overlay) : "n/a"}`,
      `kurss on BODY: ${overlay?.parentElement === document.body}`,
      "",
      ...scrollTargets().map(([label, el]) => measureElement(el, label)),
      "",
      "Last scroll events:",
      ...(debugState.lastScroll.length ? debugState.lastScroll : ["  (none)"]).map((line) => `  ${line}`),
      "",
      "Last touch events:",
      ...(debugState.lastTouch.length ? debugState.lastTouch : ["  (none)"]).map((line) => `  ${line}`),
      "",
      "preventDefault() calls:",
      ...(debugState.preventDefaultCalls.length ? debugState.preventDefaultCalls : ["  (none)"]).map((line) => `  ${line}`)
    ];
    panel.textContent = lines.join("\n");
  }

  if (!Event.prototype.__kurssScrollDebugPreventDefaultPatched) {
    const originalPreventDefault = Event.prototype.preventDefault;
    Event.prototype.preventDefault = function kurssDebugPreventDefault() {
      if (isKurssScrollDebugEnabled() && /^(touch|wheel|pointer)/.test(this.type || "")) {
        pushLog(
          debugState.preventDefaultCalls,
          `${this.type} preventDefault() on ${describeNode(this.target)}`
        );
        renderDebugPanel();
      }
      return originalPreventDefault.call(this);
    };
    Event.prototype.__kurssScrollDebugPreventDefaultPatched = true;
  }

  ["touchstart", "touchmove", "touchend"].forEach((type) => {
    document.addEventListener(type, (event) => {
      const prevented = event.defaultPrevented ? " defaultPrevented" : "";
      pushLog(debugState.lastTouch, `${type} @${describeNode(event.target)}${prevented}`);
      if (type === "touchmove") {
        const before = scrollTargets().map(([label, el]) => `${label}:${el.scrollTop}`);
        requestAnimationFrame(() => {
          const after = scrollTargets()
            .filter(([, el]) => el.scrollTop > 0)
            .map(([label, el]) => `${label}:${el.scrollTop}`);
          if (after.length) {
            pushLog(debugState.lastScroll, `touchmove scroll changed ${after.join(", ")}`);
          } else {
            pushLog(debugState.lastScroll, `touchmove no scrollTop change (${before.join(", ")})`);
          }
          renderDebugPanel();
        });
      }
      renderDebugPanel();
    }, { capture: true, passive: true });
  });

  window.dumpKurssScrollDiagnostics = () => {
    renderDebugPanel();
    console.log(panel.textContent);
    return panel.textContent;
  };

  const mount = () => {
    if (!document.body.contains(panel)) document.body.appendChild(panel);
    attachScrollListeners();
    renderDebugPanel();
  };

  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
  window.setInterval(() => {
    attachScrollListeners();
    renderDebugPanel();
  }, 1000);
}

function updateNavScreen() {
  const onHome = state.navScreen === "home";
  if (elements.homeMenuScreen) elements.homeMenuScreen.hidden = !onHome;
  if (elements.groupDetailScreen) elements.groupDetailScreen.hidden = onHome;
  document.body.classList.toggle("is-home-screen", onHome);
  document.body.classList.toggle("is-detail-screen", !onHome);
  document.documentElement.classList.toggle("is-home-screen", onHome);
  document.documentElement.classList.toggle("is-detail-screen", !onHome);
  const isMobileHome = onHome && window.matchMedia("(max-width: 768px)").matches;
  document.documentElement.classList.toggle("mobile-home-light", isMobileHome);
  document.body.classList.toggle("mobile-home-light", isMobileHome);
  applyMobileMenuExperimentMode(isMobileHome);
  applyMobileHomeLightIsolation(isMobileHome);
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) {
    themeMeta.setAttribute("content", isMobileHome ? MOBILE_HOME_BG : "#000000");
  }
  const colorSchemeMeta = document.querySelector('meta[name="color-scheme"]');
  if (colorSchemeMeta) {
    colorSchemeMeta.setAttribute("content", isMobileHome ? "dark" : "light dark");
  }
}

function updateDetailScreenHeader(itemKey) {
  if (elements.detailScreenTitle) {
    elements.detailScreenTitle.textContent = groupProgressTitle(itemKey);
  }
}

function openGroupDetailScreen(itemKey) {
  closeKurss();
  state.navScreen = "detail";
  updateDetailScreenHeader(itemKey);
  updateNavScreen();
}

function goToHomeScreen() {
  closeKurss();
  state.navScreen = "home";
  updateNavScreen();
  renderMainMenuButtons();
}

function handleMainMenuSelection(item) {
  if (item.type === "kurss") {
      openKurss();
    return;
  }
  closeKurss();
  if (item.type === "verbs") {
    openGroupDetailScreen("verbs");
    selectVerbs();
    return;
  }
  openGroupDetailScreen(item.key);
  selectGroup(item.key);
}

function mainMenuColorClass(index) {
  if (index < 3) return "menu-black";
  if (index < 6) return "menu-red";
  return "menu-gold";
}

function renderMainMenuButtons() {
  if (!elements.mainMenuButtons) return;
  elements.mainMenuButtons.innerHTML = "";

  MAIN_MENU_ITEMS.forEach((item, index) => {
    const colorClass = mainMenuColorClass(index);
    const container = document.createElement("div");
    container.className = "menu-button-container";
    const button = document.createElement("button");
    button.type = "button";
    button.className = colorClass;

    const label = document.createElement("span");
    label.className = "mobile-menu-btn-label";
    label.textContent = item.label;
    button.appendChild(label);

    const count = mainMenuCount(item);
    if (count !== "") {
      const countEl = document.createElement("span");
      countEl.className = "mobile-menu-btn-count";
      countEl.textContent = String(count);
      button.appendChild(countEl);
    }

    button.addEventListener("click", () => handleMainMenuSelection(item));
    container.appendChild(button);
    elements.mainMenuButtons.appendChild(container);
  });
}

function groupLabel(group) {
  if (typeof groupDisplayLabel === "function") {
    return groupDisplayLabel(group);
  }
  return group === "Sätze" ? "Teikumi" : group;
}

function renderGroupButtons() {
  /* Grupu pogas tagad ir galvenajā izvēlnē, nevis detaļu skatā. */
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
  updateDetailToolbarButtons();
  if (elements.unwantedBtn) elements.unwantedBtn.hidden = true;
  elements.markMasteredBtn.hidden = true;
  elements.markMasteredBtn.style.display = "none";
  if (elements.cardUnwantedBtn) elements.cardUnwantedBtn.hidden = state.verbMode;
  if (elements.cardAutoplayBtn) elements.cardAutoplayBtn.hidden = state.verbMode;
  elements.unwantedListBtn.hidden = state.verbMode;
  for (const [mode, config] of Object.entries(sessionModes)) {
    const button = document.createElement("button");
    button.type = "button";
    button.innerHTML = modeButtonHtml(mode, config.sessionMax);
    button.className = mode === state.mode ? "group-btn active" : "group-btn";
    button.addEventListener("click", () => selectMode(mode));
    elements.modeButtons.appendChild(button);
  }
}

function renderSpellingControls() {
  elements.spellingPanel.hidden = !state.spellingMode;
  elements.spellingPanel.style.display = state.spellingMode ? "" : "none";
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

  refreshDetailScreenTitle();
  elements.directionLabel.textContent = directionButtonLabel();

  if (!verb) {
    elements.cardLevel.className = "verb-headings";
    elements.cardLevel.innerHTML = "<span>Infinitīvs</span><span>Tagadne</span><span>Imperfekts<br>- Indikatīvs</span><span>Imperfekts<br>- Konjunktīvs</span><span>Pagātnes<br>divdabis</span>";
    elements.word.textContent = state.reviewLastSession
      ? "Pēdējās sesijas pārskatīšana pabeigta."
      : (state.timeReviewMode
      ? (state.timeReviewIds.length ? timeConfig.done : timeConfig.empty)
      : (state.problemMode
      ? problemEmptyMessage()
      : (state.reviewKnown
      ? "Zināmo vārdu pārskatīšana pabeigta."
      : (shouldShowSessionCompleteOverlay()
      ? "Sesija pabeigta!"
      : (groupHasOnlyUnwanted(state.group) ? "Šajā grupā nav aktīvu vārdu." : "Šajā sesijā nav kartīšu.")))));
    elements.translation.textContent = "";
    elements.hint.textContent = "";
    updateKnownListBtn();
    updateSessionCompleteOverlay();
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
    updateKnownListBtn();
    updateSessionCompleteOverlay();
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
    { label: "Infinitiv", buttonLabel: "Infinitīvs", value: forms.infinitiv, translation: forms.infinitivLv },
    { label: "Präsens", buttonLabel: "Tagadne", value: forms.praesens, translation: forms.praesensLv },
    { label: "Imperfekt Indikativ", buttonLabel: "Imperfekts<br>- Indikatīvs", value: forms.imperfektIndikativ, translation: forms.imperfektIndikativLv },
    { label: "Imperfekt Konjunktiv", buttonLabel: "Imperfekts<br>- Konjunktīvs", value: forms.imperfektKonjunktiv, translation: forms.imperfektKonjunktivLv },
    { label: "Partizip der Vergangenheit", buttonLabel: "Pagātnes<br>divdabis", value: forms.partizipVergangenheit, translation: forms.partizipVergangenheitLv }
  ];
  const stage = stages[state.verbStep] || stages[0];

  elements.cardLevel.className = "verb-headings";
  elements.cardLevel.innerHTML = stages
    .map((item) => `<span class="${item.label === stage.label ? "active" : ""}">${item.buttonLabel}</span>`)
    .join("");
  elements.word.textContent = stage.value;
  setPrimaryCardAudio(null);
  setInlineGermanAudioButtons(null, "");
  elements.translation.textContent = `Tulkojums: ${stage.translation}`;
  elements.hint.textContent = state.reviewLastSession
    ? `Pēdējā sesija: ${Math.min(lastSessionReviewDoneCount() + 1, lastSessionReviewTotalCount())} / ${lastSessionReviewTotalCount()}. Klikšķini uz kartītes, lai pārslēgtu formu.`
    : (state.timeReviewMode
    ? `${timeConfig.label}: ${state.timeReviewIndex + 1} / ${deck.length}. Klikšķini uz kartītes, lai pārslēgtu formu.`
    : (state.problemMode
    ? `Problemātiskie: ${state.problemIndex + 1} / ${deck.length}. Klikšķini uz kartītes, lai pārslēgtu formu.`
    : (state.reviewKnown
    ? `Zināmie: ${state.index + 1} / ${deck.length}. Klikšķini uz kartītes, lai pārslēgtu formu.`
    : `Sesija: ${Math.min(sessionDoneCount() + 1, sessionTotalCount())} / ${sessionTotalCount()}. Klikšķini uz kartītes, lai pārslēgtu formu.`)));
  updateKnownListBtn();
  updateProblemWordsBtn();
  updateSessionCompleteOverlay();
}

function escapeStudyCardText(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const COMPARISON_WORD_ACCENTS = ["blue", "green", "lightGreen", "yellow", "red", "orange", "darkGreen"];

function studyExampleAudioSrc(exampleText) {
  const raw = String(exampleText || "").trim();
  const german = raw.split(/\s*=\s*/)[0].trim();
  if (!german) return null;
  return exampleSentenceAudioSrc(german) || comparisonWordAudioSrc(german);
}

function comparisonWordAudioSrc(word) {
  const text = String(word || "").trim();
  if (!text || !isWordLevelAudioText(text)) return null;
  const fromEntry = a1AudioForBareWord(stripGermanArticle(text));
  if (fromEntry) return fromEntry;
  return resolveAudioSrc(audioFilenameCandidates(text));
}

function renderComparisonSubtitleWithAudio(subtitle) {
  const parts = String(subtitle || "").split(/\s*•\s*/).map((part) => part.trim()).filter(Boolean);
  if (!parts.length) return "";
  return parts.map((part, index) => {
    const audioSrc = comparisonWordAudioSrc(part);
    const audioBtn = comparisonWordAudioButtonHtml(part, audioSrc);
    const sep = index > 0 ? '<span class="comparison-subtitle-sep"> • </span>' : "";
    return `${sep}<span class="comparison-subtitle-part">${escapeStudyCardText(part)}${audioBtn}</span>`;
  }).join("");
}

function exampleSentenceAudioSrc(sentence) {
  const stem = sanitizeAudioFilename(String(sentence || "").trim());
  if (!stem) return null;
  return resolveAudioSrc([`${stem}.mp3`]);
}

function nounArticleAudioSrc(article, de) {
  const art = String(article || "").trim().toLowerCase();
  const word = String(de || "").trim();
  if (!word) return null;
  if (art && /^(der|die|das)$/.test(art)) {
    return resolveAudioSrc(audioFilenameCandidates(`${art} ${word}`));
  }
  return resolveAudioSrc(audioFilenameCandidates(word));
}

function nounPluralAudioSrc(article, de, plural) {
  const pluralText = String(plural || "").trim();
  const deWord = String(de || "").trim();
  if (!pluralText) return null;
  const parts = pluralText.split(/\s+/);
  const pluralArticle = parts[0]?.trim().toLowerCase();
  if (pluralArticle && /^(der|die|das)$/.test(pluralArticle) && deWord) {
    return a1AudioSrc(`plural_${pluralArticle}_${sanitizeAudioFilename(deWord)}.mp3`.toLowerCase());
  }
  return a1AudioSrc(`plural_${sanitizeAudioFilename(pluralText)}.mp3`.toLowerCase());
}

function renderMinimalStudyVariantLine(article, de) {
  const label = `${String(article || "").trim()} ${String(de || "").trim()}`.trim();
  const audioSrc = nounArticleAudioSrc(article, de);
  return `<span class="minimal-study-variant-line"><span>${escapeStudyCardText(label)}</span>${comparisonWordAudioButtonHtml(label, audioSrc)}</span>`;
}

function comparisonWordAudioButtonHtml(word, src) {
  if (!src) return "";
  const label = `Klausīties: ${word}`;
  return `<button type="button" class="flashcard-audio-btn comparison-word-audio-btn" data-audio-src="${escapeStudyCardText(src)}" aria-label="${escapeStudyCardText(label)}" title="Klausīties"><svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg></button>`;
}

function formatLvDisplay(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  return raw
    .replace(/\s*;\s*/g, "; ")
    .replace(/\s*•\s*/g, " • ")
    .replace(/\s*,\s*/g, ", ");
}

function clearStudyCard() {
  const cardElement = elements.word?.closest(".card");
  cardElement?.classList.remove("has-study-card");
  cardElement?.classList.remove("has-rich-study-card");
  cardElement?.classList.remove("has-minimal-study-card");
  cardElement?.classList.remove("has-minimal-study-extra");
  for (const accent of COMPARISON_WORD_ACCENTS) {
    cardElement?.classList.remove(`minimal-study-card--${accent}`);
  }
  if (cardElement) delete cardElement.dataset.studyLayout;
  resetFlashcardAudioControls();
  if (elements.cardStudyExtra) {
    elements.cardStudyExtra.hidden = true;
    elements.cardStudyExtra.innerHTML = "";
  }
}

function renderStudyCard(card, autoplayToken = cardAutoplayToken) {
  const study = card.study;
  if (!study) return false;
  const layout = study.layout || "standardStudy";
  const isComparisonStudy = layout === "comparisonStudy";
  const isMinimalStudy = layout === "minimalStudy";
  const isPairedStudy = isComparisonStudy || isMinimalStudy;

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

  beginFlashcardAudioRender(card);

  const isGermanToLatvian = state.direction === "de-lv";
  const germanText = formatGermanEntry(card);
  const frontText = isPairedStudy
    ? formatLvDisplay(study.title || study.translation || card.lv)
    : (isGermanToLatvian ? germanText : formatLvDisplay(study.translation));
  const backText = state.revealed
    ? (isPairedStudy
      ? (study.subtitle || germanText)
      : (isGermanToLatvian ? formatLvDisplay(study.translation) : germanText))
    : "";
  const pluralText = flashcardPluralLabel(card);
  const pluralAudioSrc = a1AudioSrc(a1PluralAudioFile(card));

  elements.word.textContent = frontText;
  applyFlashcardSingularAudio(card, autoplayToken, {
    study,
    enablePrimaryAudio: !isComparisonStudy,
    speakerButtons: isComparisonStudy
      ? { onWord: false, onTranslation: false }
      : undefined,
  });

  if (!state.revealed) {
    elements.translation.textContent = "";
    if (elements.translation) elements.translation.innerHTML = "";
  } else if (isMinimalStudy && Array.isArray(study.variants) && study.variants.length) {
    if (elements.translation) {
      elements.translation.innerHTML = `<div class="minimal-study-variants">${study.variants.map((variant, index) => {
        const line = renderMinimalStudyVariantLine(variant.article, variant.de);
        return index ? `<span class="minimal-study-variant-sep">/</span>${line}` : line;
      }).join("")}</div>`;
    }
  } else if (isComparisonStudy && state.revealed && study.subtitle) {
    elements.translation.innerHTML = `<div class="comparison-subtitle-row">${renderComparisonSubtitleWithAudio(study.subtitle)}</div>`;
  } else if (isPairedStudy || isGermanToLatvian) {
    elements.translation.textContent = backText;
    if (!isPairedStudy && pluralText) showFlashcardPluralRow(pluralText, pluralAudioSrc);
  } else {
    elements.translation.textContent = backText;
    if (pluralText) showFlashcardPluralRow(pluralText, pluralAudioSrc);
  }
  elements.hint.textContent = state.revealed
    ? ""
    : (isMinimalStudy
      ? "Klikšķini uz kartītes, lai redzētu vācu vārdu."
      : "Klikšķini uz kartītes, lai atvērtu skaidrojumu.");

  if (isMinimalStudy) {
    const cardElement = elements.word.closest(".card");
    cardElement?.classList.add("has-study-card", "has-minimal-study-card");
    cardElement?.classList.remove("has-rich-study-card");
    const accent = COMPARISON_WORD_ACCENTS.includes(study.accent) ? study.accent : "blue";
    cardElement?.classList.add(`minimal-study-card--${accent}`);
    if (cardElement) cardElement.dataset.studyLayout = layout;
    if (state.revealed && elements.translation) {
      elements.translation.className = `minimal-study-de minimal-study-de--${accent}`;
    } else if (elements.translation) {
      elements.translation.className = "";
    }
    const hasMinimalExtra = Boolean(
      state.revealed
      && (
        study.note
        || study.forms
        || study.tip
        || (Array.isArray(study.variants) && study.variants.some((variant) => variant.plural))
        || (Array.isArray(study.examples) && study.examples.length)
      )
    );
    cardElement?.classList.toggle("has-minimal-study-extra", hasMinimalExtra);
    if (hasMinimalExtra && elements.cardStudyExtra) {
      const pluralHtml = Array.isArray(study.variants) && study.variants.some((variant) => variant.plural)
        ? `<p class="minimal-study-plural-row"><strong>DAUDZSK.</strong> ${study.variants.filter((variant) => variant.plural).map((variant, index) => {
            const label = String(variant.plural || "").trim();
            const audioSrc = nounPluralAudioSrc(null, variant.de, variant.plural);
            const line = `<span class="minimal-study-variant-line"><span>${escapeStudyCardText(label)}</span>${comparisonWordAudioButtonHtml(label, audioSrc)}</span>`;
            return index ? `<span class="minimal-study-variant-sep">/</span>${line}` : line;
          }).join("")}</p>`
        : "";
      const noteHtml = study.note
        ? `<p class="minimal-study-forms"><strong>${escapeStudyCardText(study.noteLabel || "Norāde:")}</strong> ${escapeStudyCardText(study.note)}</p>`
        : "";
      const tipHtml = study.tip
        ? `<p class="minimal-study-tip"><strong>Padoms:</strong> ${escapeStudyCardText(study.tip)}</p>`
        : "";
      const formsHtml = study.forms
        ? `<p class="minimal-study-forms"><strong>${escapeStudyCardText(study.formsLabel || "Formas:")}</strong> ${escapeStudyCardText(study.forms)}</p>`
        : "";
      const examplesHtml = Array.isArray(study.examples) && study.examples.length
        ? `<div class="minimal-study-examples">${study.examples.map((example) => {
            const audioSrc = exampleSentenceAudioSrc(example.de);
            return `
            <p class="minimal-study-example">
              <span class="minimal-study-example-de">${escapeStudyCardText(example.de)}${comparisonWordAudioButtonHtml(example.de, audioSrc)}</span>
              <span class="minimal-study-example-sep">=</span>
              <span>${escapeStudyCardText(example.lv)}</span>
            </p>`;
          }).join("")}</div>`
        : "";
      elements.cardStudyExtra.hidden = false;
      elements.cardStudyExtra.innerHTML = pluralHtml + tipHtml + noteHtml + formsHtml + examplesHtml;
    }
    return true;
  }

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
    const audioSrc = item.de ? comparisonWordAudioSrc(item.de) : null;
    const audioBtn = isComparisonStudy && audioSrc ? comparisonWordAudioButtonHtml(item.de, audioSrc) : "";
    const separator = `<span class="study-tip-separator">${escapeStudyCardText(item.separator || "=")}</span>`;
    return `
    <p class="study-tip-example${item.stacked ? " study-tip-example-stacked" : ""}">${item.stacked ? `${de}${audioBtn}<br>${separator}<br>${lv}` : `${de}${audioBtn} ${separator} ${lv}`}</p>
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
  const renderComparisonRichWordBlocks = () => {
    const items = Array.isArray(study.words) ? study.words : (Array.isArray(study.items) ? study.items : (Array.isArray(study.terms) ? study.terms : []));
    if (!items.length) return "";

    const renderWordExamples = (examples, accentRulesPrefix) => (Array.isArray(examples) ? examples : []).map((example, exampleIndex) => {
      const accentRules = accentRulesPrefix?.examples?.[exampleIndex] || accentRulesPrefix?.examples;
      const exampleDe = String(example.de || "").trim();
      const audioSrc = studyExampleAudioSrc(exampleDe);
      const audioBtn = comparisonWordAudioButtonHtml(exampleDe, audioSrc);
      return `
    <div>${formatStudyText(example.de, fieldAccentRules(accentRules, "de"))}${audioBtn}</div>
      <span>=</span>
      <span>${formatStudyText(example.lv, fieldAccentRules(accentRules, "lv"))}</span>
  `;
    }).join("");

    const renderWordTip = (tipValue, accentRules) => {
      if (!hasStudyContent(tipValue)) return "";
      const tipBody = Array.isArray(tipValue)
        ? tipValue.map((line, index) => `<p>${formatStudyText(line, textAccentRules("tip", index) || accentRules?.tip?.[index] || accentRules?.tip)}</p>`).join("")
        : `<p>${formatStudyText(tipValue, accentRules?.tip)}</p>`;
      return `
        <section class="study-section study-tip comparison-word-tip">
          <h3>${STUDY_SECTION_ICONS.tip} Padoms</h3>
          <div class="study-tip-grid study-tip-grid-single">
            <div class="study-tip-panel">${tipBody}</div>
          </div>
        </section>
      `;
    };

    const renderWordImportant = (importantValue, accentRules) => {
      if (!hasStudyContent(importantValue)) return "";
      return `
        <section class="study-important comparison-word-important">
          <h3>${STUDY_SECTION_ICONS.important} Svarīgi</h3>
          ${renderStudyParagraphs(importantValue, "important")}
        </section>
      `;
    };

    return `
      <section class="comparison-rich-word-list">
        ${items.map((item, index) => {
          const accentRules = item.sectionAccents || sectionAccentRules("comparisonCards", index);
          const accent = item.accent || COMPARISON_WORD_ACCENTS[index % COMPARISON_WORD_ACCENTS.length];
          const germanWord = String(item.de || item.word || "").trim();
          const audioSrc = comparisonWordAudioSrc(germanWord);
          const splitWordExplanation = splitMainIdea(item.explanation || item.description || "");
          const explanationSource = splitWordExplanation.explanationLines.length
            ? splitWordExplanation.explanationLines
            : studyLines(item.description || "");
          const mainIdeaBlock = (splitWordExplanation.mainIdea || item.description) ? `
            <section class="study-main-idea">
              <h3>Galvenā doma</h3>
              <p>${formatStudyText(splitWordExplanation.mainIdea || item.description, accentRules?.explanation?.mainIdea || accentRules?.explanation)}</p>
            </section>
          ` : "";
          const explanationBlock = explanationSource.length ? `
            <section class="study-explanation">
              <h3>${STUDY_SECTION_ICONS.explanation} Skaidrojums</h3>
              ${explanationSource.map((line, lineIndex) => `<p>${formatStudyText(line, textAccentRules("explanation", lineIndex) || accentRules?.explanation)}</p>`).join("")}
            </section>
          ` : "";
          const examplesBlock = Array.isArray(item.examples) && item.examples.length ? `
            <section class="study-section study-examples">
              <h3>${STUDY_SECTION_ICONS.examples} Piemēri</h3>
              <div class="study-standard-table study-examples-table">${renderWordExamples(item.examples, accentRules)}</div>
            </section>
          ` : "";

          return `
            <article class="comparison-rich-word-block comparison-rich-word-block--${accent}">
              <header class="comparison-rich-word-header">
                <div class="comparison-word-card-head">
                  <div class="comparison-word-icon">${escapeStudyCardText(item.icon || "•")}</div>
                  <h3>${formatStudyText(item.lv || item.title || "", fieldAccentRules(accentRules, "lv"))}</h3>
                </div>
                <div class="comparison-word-de-row">
                  <strong>${formatStudyText(germanWord, fieldAccentRules(accentRules, "de"))}</strong>
                  ${comparisonWordAudioButtonHtml(germanWord, audioSrc)}
                </div>
              </header>
              ${mainIdeaBlock}
              ${explanationBlock}
              ${examplesBlock}
              ${renderWordTip(item.tip, accentRules)}
              ${renderWordImportant(item.important, accentRules)}
            </article>
          `;
        }).join("")}
      </section>
    `;
  };

  const renderComparisonWordCards = () => {
    const items = Array.isArray(study.words) ? study.words : (Array.isArray(study.items) ? study.items : (Array.isArray(study.terms) ? study.terms : []));
    if (!items.length) return "";
    return `
      <section class="comparison-card-grid">
        ${items.map((item, index) => {
          const accentRules = sectionAccentRules("comparisonCards", index);
          const accent = item.accent || COMPARISON_WORD_ACCENTS[index % COMPARISON_WORD_ACCENTS.length];
          const germanWord = String(item.de || item.word || "").trim();
          const example = typeof item.example === "string" ? item.example : [item.example?.de, item.example?.lv].filter(Boolean).join(" = ");
          return `
            <article class="comparison-word-card comparison-word-card--${accent}">
              <div class="comparison-word-card-head">
                <div class="comparison-word-icon">${escapeStudyCardText(item.icon || "•")}</div>
                <h3>${formatStudyText(item.lv || item.title || "", fieldAccentRules(accentRules, "lv"))}</h3>
              </div>
              <div class="comparison-word-de-row">
                <strong>${formatStudyText(germanWord, fieldAccentRules(accentRules, "de"))}</strong>
              </div>
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
      ${renderComparisonRichWordBlocks()}
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

function getWordRainSnapshot() {
  const groupKey = activeGroupKey();
  return {
    groupKey,
    group: state.group,
    verbMode: state.verbMode,
    learned: state.learned,
    problemStats: state.problemStats,
    masteredIds: state.masteredIds,
    unwantedIds: state.unwantedIds,
    sessionIds: state.session?.groupKey === groupKey ? (state.session.ids || []) : []
  };
}

function syncWordRain() {
  if (state.navScreen === "home") return;
  window.wordRain?.sync?.(getWordRainSnapshot());
}

window.syncWordRain = syncWordRain;
window.__wordRainVerbId = verbId;

function resetCardScrollPosition(card) {
  const cardInner = document.querySelector("article.card .card-inner");
  if (cardInner) cardInner.scrollTop = 0;

  if (state.navScreen !== "detail" || !window.matchMedia("(min-width: 769px)").matches) return;
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });
}

function render() {
  cardAutoplayToken += 1;
  const autoplayToken = cardAutoplayToken;
  clearStudyCard();
  updateNavScreen();
  try {
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
  refreshDetailScreenTitle();
  elements.directionLabel.textContent = directionButtonLabel();

  if (!card) {
    activeRenderedCardKey = null;
    activeSessionStartedAt = null;
    hideCardTranslationDOM();
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
      : (shouldShowGroupCompleteOverlay()
      ? ""
      : (shouldShowSessionCompleteOverlay()
      ? "Sesija pabeigta!"
      : (groupHasOnlyUnwanted(state.group) ? "Šajā grupā nav aktīvu vārdu." : "Šajā sesijā nav kartīšu."))))));
    elements.translation.textContent = "";
    if (state.reviewLastSession || state.timeReviewMode || state.problemMode || state.reviewKnown) {
      elements.hint.textContent = "";
    } else if (shouldShowGroupCompleteOverlay()) {
      elements.hint.textContent = getGroupCompleteTexts(state.group).description;
    } else if (shouldShowSessionCompleteOverlay()) {
      elements.hint.textContent = "Izvēlies, ko darīt tālāk.";
    } else {
      elements.hint.textContent = "Izvēlies citu režīmu vai atgriezies vēlāk pārskatīšanai.";
    }
    updateKnownListBtn();
    updateProblemWordsBtn();
    updateSessionCompleteOverlay();
    return;
  }

  syncCardRevealState(card);

  if (state.spellingMode) {
    const task = currentSpellingTask(card);
    elements.cardLevel.className = "badge";
    elements.cardLevel.textContent = `${groupDisplayLabel(card.level)} · Pareizrakstība`;
    elements.word.textContent = task ? task.front : "";
    elements.translation.textContent = state.revealed && task ? `Atbilde: ${task.expected}` : "";
    elements.hint.textContent = task ? task.prompt : "";
    renderSpellingControls();
    updateKnownListBtn();
    updateProblemWordsBtn();
    updateSessionCompleteOverlay();
    return;
  }

  elements.cardLevel.className = "badge";
  elements.cardLevel.textContent = state.reviewLastSession
    ? `${groupDisplayLabel(card.level)} · Pēdējā sesija: ${Math.min(lastSessionReviewDoneCount() + 1, lastSessionReviewTotalCount())} / ${lastSessionReviewTotalCount()}`
    : (state.timeReviewMode
    ? `${card.level} · ${timeConfig.label}: ${state.timeReviewIndex + 1}/${deck.length}`
    : (state.problemMode
    ? `${groupDisplayLabel(problemCardGroupKey(card))} · Problemātiskie: ${state.problemIndex + 1}/${deck.length}`
    : (!state.reviewKnown && sessionMatchesActiveGroup()
    ? `${groupDisplayLabel(card.level)} · Sesija: ${Math.min(sessionDoneCount() + 1, sessionTotalCount())} / ${sessionTotalCount()}`
    : `${groupDisplayLabel(card.level)} · ${state.index + 1}/${deck.length}`)));
  if (renderStudyCard(card, autoplayToken)) {
    updateKnownListBtn();
    updateProblemWordsBtn();
    updateSessionCompleteOverlay();
    return;
  }
  renderWordCardContent(card, autoplayToken);
  elements.hint.textContent = state.revealed
    ? ""
    : "Klikšķini uz kartītes, lai redzētu tulkojumu.";
  updateKnownListBtn();
  updateProblemWordsBtn();
  updateSessionCompleteOverlay();
  } finally {
    syncWordRain();
  }
}

initStaticCourseLessons();
initMobileMenuDebugHelper();
initKurssScrollDebugHelper();
renderMainMenuButtons();
updateRestoreBtnLabel();
updateKnownListBtn();
updateDetailToolbarButtons();
updateNavScreen();

function syncCardCornerControlsPlacement() {
  const controls = document.querySelector(".card-corner-controls");
  const card = document.querySelector("article.card");
  if (!controls || !card) return;

  const anchor = card.querySelector(".card-inner");
  if (!anchor) return;

  if (controls.parentElement !== card || controls.nextElementSibling !== anchor) {
    card.insertBefore(controls, anchor);
  }
}

syncCardCornerControlsPlacement();

window.addEventListener("resize", () => {
  syncCardCornerControlsPlacement();
  if (state.navScreen === "detail") {
    updateDetailToolbarButtons();
  }
  updateNavScreen();
});

if (elements.navBackBtn) {
  elements.navBackBtn.addEventListener("click", () => {
    goToHomeScreen();
    setNotice("");
  });
}

try {
ensureKurssOverlayOnBody();
elements.kurssBackBtn.addEventListener("click", handleKurssBack);
elements.kurssCloseBtn.addEventListener("click", closeKurss);
elements.kurssPronunciationBtn.addEventListener("click", openPronunciationLesson);
elements.kurssArticlesBtn.addEventListener("click", openArticlesLesson);
elements.kurssPronounsBtn.addEventListener("click", openPronounsLesson);
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
document.querySelector(".card")?.addEventListener("click", (event) => {
  if (event.target.closest("#sessionCompleteOverlay, .session-complete-overlay, #groupCompleteOverlay, .group-complete-overlay")) {
    return;
  }
  if (event.target.closest("#cardAutoplayBtn, .card-autoplay-btn")) {
    return;
  }
  const audioBtn = event.target.closest(".flashcard-audio-btn");
  if (audioBtn) {
    event.preventDefault();
    event.stopPropagation();
    replayCardAudio(audioBtn.dataset.audioSrc, audioBtn);
    return;
  }
  revealCard();
});
elements.knownBtn.addEventListener("click", markKnown);
elements.unknownBtn.addEventListener("click", markUnknown);
elements.nextBtn.addEventListener("click", nextCard);
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
if (elements.cardUnwantedBtn) {
  elements.cardUnwantedBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    markCurrentUnwanted();
  });
}
if (elements.cardAutoplayBtn) {
  elements.cardAutoplayBtn.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleAudioAutoplay();
  });
}
elements.masteredListBtn.addEventListener("click", openKnownList);
elements.unwantedListBtn.addEventListener("click", openUnwantedList);
elements.extraOptionsBtn.addEventListener("click", () => {
  const opening = elements.extraOptions.hidden;
  elements.extraOptions.hidden = !opening;
  elements.extraOptionsBtn.setAttribute("aria-expanded", opening ? "true" : "false");
  elements.extraOptionsBtn.textContent = opening ? "Papildu opcijas ▲" : "Papildu opcijas ▼";
});
elements.problemWordsBtn?.addEventListener("click", selectProblemWords);
elements.weeklyReviewBtn.addEventListener("click", () => openTimeReviewModal("week"));
elements.monthlyReviewBtn.addEventListener("click", () => openTimeReviewModal("month"));
if (elements.infoBtn) {
  elements.infoBtn.addEventListener("click", openInfoPopup);
}
elements.restoreBtn.addEventListener("click", openRestoreAllConfirm);
if (elements.restartSessionBtn) {
  elements.restartSessionBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    restartCompletedSession();
  });
}
if (elements.markSessionLearnedBtn) {
  elements.markSessionLearnedBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    markSessionAsLearned();
  });
}
if (elements.chooseAnotherGroupBtn) {
  elements.chooseAnotherGroupBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    chooseAnotherGroupFromComplete();
  });
}
} catch (error) {
  console.error("UI event binding failed:", error);
}

const studyCardTestParam = new URLSearchParams(window.location.search).get("study")
  || new URLSearchParams(window.location.search).get("card");

if (!activateStudyCardTestMode(studyCardTestParam)) {
  try {
    if (state.navScreen === "detail") {
      renderCard();
    } else {
      renderMainMenuButtons();
    }
  } catch (error) {
    console.error("Render failed:", error);
    renderGroupButtons();
    if (elements.notice) {
      elements.notice.textContent = "Neizdevās ielādēt kartītes. Pārlādē lapu vai pārbaudi, vai visi datu faili ir pieejami.";
    }
  }
}
