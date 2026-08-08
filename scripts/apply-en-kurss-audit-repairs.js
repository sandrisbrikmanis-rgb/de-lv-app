#!/usr/bin/env node
/**
 * Deterministic EN-DE Kurss audit repairs (165 items).
 * Modifies only audit-approved targets.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

function loadWindow(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window;
}

function writeCourseLessons(relPath, html, data) {
  const dataJson = JSON.stringify(data, null, 2);
  const out = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(path.join(ROOT, relPath), out);
}

function mirror(relPath) {
  const www = path.join(ROOT, "www", relPath);
  fs.mkdirSync(path.dirname(www), { recursive: true });
  fs.copyFileSync(path.join(ROOT, relPath), www);
}

const TRANSLATE_LV_MAP = {
  "Ko tu sveicini?": "Who are you greeting?",
  "Es sveicinu jaunkundzi.": "I greet the young lady.",
  "Atveriet visus logus!": "Open all the windows!",
  "Vai tu atver logu?": "Are you opening the window?",
  "Lasi labi!": "Read well!",
  "Lasiet labi!": "Read well! (plural)",
  "Ansis raksta labi, bet Anna raksta slikti.": "Hans writes well, but Anna writes badly.",
  "Aiztaisi logu!": "Close the window!",
  "Ko meitene beidzot dara?": "What is the girl finally doing?",
  "Vai tu esi vesels?": "Are you healthy?",
  "Vai Paul ir vesels?": "Is Paul healthy?",
  "Cik vecs ir Adolfs?": "How old is Adolf?",
  "Kas tu esi?": "Who are you?",
  "Kas tev ir?": "What do you have?",
  "Ko dara Anna?": "What is Anna doing?",
  "Es esmu 20 gadus vecs.": "I am twenty years old.",
  "Vai Maksis ir liels?": "Is Max tall?",
  "Cik pirkstu ir plaukstai?": "How many fingers does the hand have?",
  "Kas ir pirkstam?": "What is on the finger?",
  "Ko tu dari?": "What are you doing?",
  "Ko Paul dara?": "What is Paul doing?",
  "Ko meitene noslauka?": "What does the girl wipe?",
  "Kas ir augsts?": "What is tall?",
  "Ko tu aizdedzini?": "What are you lighting?",
  "Es nesu spaini no pagraba.": "I carry the bucket out of the cellar.",
};

const WORD_GLOSS_REPLACEMENTS = [
  ["alle — visi", "alle — all"],
  ["aufstehen — piecelties", "aufstehen — to get up"],
  ["gut — labs", "gut — good"],
  ["der Herr — kungs", "der Herr — man / sir"],
  ["aber — bet", "aber — but"],
  ["leise — klusi", "leise — quietly"],
  ["jetzt (ject) — tagad", "jetzt (ject) — now"],
  ["schlecht — slikti", "schlecht — badly"],
  ["deutlich (doitlich) — skaidri, saprotami", "deutlich (doitlich) — clearly, understandably"],
  ["der Müller — dzirnavnieks", "der Müller — miller"],
  ["der Tischler — galdnieks", "der Tischler — carpenter"],
  ["der Schuster — kurpnieks", "der Schuster — shoemaker"],
  ["lies! — lasi!", "lies! — read!"],
  ["gut — labi", "gut — well"],
  ["was ist das — kas tas ir?", "was ist das — what is that?"],
  ["gießen — liet", "gießen — to pour"],
  ["jetzt — tagad", "jetzt — now"],
  ["gehen — iet", "gehen — to go"],
  ["fahren — braukt", "fahren — to drive / travel"],
  ["laufen — skriet", "laufen — to run"],
  ["fliegen — lidot", "fliegen — to fly"],
  ["werfen — mest", "werfen — to throw"],
  ["sich befinden — atrasties", "sich befinden — to be located"],
  ["finden — atrast", "finden — to find"],
  ["schleichen - raining", "schleichen — to creep"],
  ["hängen - order", "hängen — to hang"],
  ["der Korb — grozs / kurvis", "der Korb — basket / crate"],
  ["die Körbe — grozi / kurvji", "die Körbe — baskets / crates"],
  ["an — pie", "an — at / on"],
  ["auf — uz", "auf — onto / on"],
  ["der Tisch — galds", "der Tisch — table"],
  ["die Bank — sols", "die Bank — bench"],
  ["der Eimer — spainis", "der Eimer — bucket"],
  ["ich trage — es nesu", "ich trage — I carry"],
  ["du trägst — tu nes", "du trägst — you carry"],
];

const HTML_STRING_REPLACEMENTS = [
  ["course-lesson-section", "kurss-lesson-section"],
  ["course-examples", "kurss-examples"],
  ["course-example", "kurss-example"],
  ["artikuli-explain", "articles-explain"],
  ["artikuli-header", "articles-header"],
  ["artikuli-note", "articles-note"],
  ["<h3>Lecture ", "<h3>Lesson "],
  ["Second lecture:", "Second lesson:"],
  ["The third lecture:", "The third lesson:"],
  ["First lecture:", "First lesson:"],
  ["Seventh lesson:", "Seventh lesson:"],
  ["1. verbs and conjugations of the lecture.", "Lesson 1 verbs and conjugations."],
  ["2. lecture pronunciation notes", "Lesson 2 pronunciation notes"],
  ["2. lecture verbs", "Lesson 2 verbs"],
  ["Sentences from lecture 2", "Sentences from lesson 2"],
  ["This lecture contains", "This lesson contains"],
  ["fits Monday - Monday", "der Montag — Monday"],
  ["fits August - August", "der August — August"],
  ["suitable for BMW, suitable for Mercedes", "der BMW, der Mercedes"],
  ["For some words, the article cannot be reliably determined by the ending or the Latvian origin.", "For some words, the article cannot be reliably determined by the ending or English gender alone."],
  ["Beere (funeral) - berry", "Beere (bēre) — berry"],
  ["Saal (grass) - grass", "Saal (zāl) — hall"],
  ["Zahl (chicken) - number", "Zahl (cāl) — number"],
  ["von (fon) - no", "von (fon) — from"],
  ["Qual ​​(kvāl) - torture", "Qual (kvāl) — pain / agony"],
  ["Knabe (beak) - boy", "Knabe (knābe) — boy"],
  ["Diplomatics: ei", "Diphthong: ei"],
  ["tie - they / her", "sie — they"],
  ["tie - you (courtesy)", "Sie — you (formal)"],
  ["ihn - his (v.)", "ihn — him (m.)"],
  ["sie - his (s.)", "sie — her (f.)"],
  ["I - it", "es — it"],
  ["he - us", "uns — us"],
  ["ich spielt - I play", "ich spiele — I play"],
  ["du arbeite", "du arbeitest"],
  ["ihr arbeitt - you work", "ihr arbeitet — you work"],
  ["ihr arbeitt!", "ihr arbeitet!"],
  ["öffent", "öffnen"],
  ["Sie öffent die Fenster", "Sie öffnen die Fenster"],
  ["Anna zechten einen Garten", "Anna zeichnet einen Garten"],
  ["Er setts sich und zeichnet", "Er setzt sich und zeichnet"],
  ["Hier liegen ein Bleistift", "Hier liegt ein Bleistift"],
  ["Geht ihr? — Do you are you going?", "Geht ihr? — Are you going?"],
  ["Nein, ich arbeite nicht, ich singe.", "Nein, ich arbeite nicht, ich singe."],
  ["No, I'm not working, I am sing.", "No, I'm not working, I sing."],
  ["ihr fragt - you you ask", "ihr fragt — you ask"],
  ["ihr zeichnet - you you draw", "ihr zeichnet — you draw"],
  ["wir spielen - we we play", "wir spielen — we play"],
  ["wir we stand", "wir stehen — we stand"],
  ["wir we sing", "wir singen — we sing"],
  ["wir we calculate", "wir rechnen — we calculate"],
  ["you ejat", "you go"],
  ["Wir (husband) - we", "Wir (vīr) — we"],
  ["In Latvian:", "In English:"],
  ["German in:", "In German:"],
  ["Latvian valodā", "English"],
  ["men's round", "masculine"],
  ["women's round", "feminine"],
  ["middle round", "neuter"],
  ["men's turn", "masculine"],
  ["women's round - die", "feminine — die"],
  ["Only men's changes round.", "Only the masculine changes in the accusative."],
  ["fit Federhalter ist klein", "der Federhalter ist klein"],
  ["Satiana in German", "The predicate in German"],
  ["anspitzen (anšpicen) - to spit", "anspitzen (anšpicen) — to sharpen"],
  ["aufmachen - untie", "aufmachen — to open"],
  ["der Hammer - sledgehammer", "der Hammer — hammer"],
  ["die Hämmer - sledgehammer", "die Hämmer — hammers"],
  ["feathered", "pen holder"],
  ["einen Federhalter - feathered", "einen Federhalter — a pen holder"],
  ["der Federhalter (dēr fēderhalter) — feathered", "der Federhalter (dēr fēderhalter) — pen holder"],
  ["The girl takes a feather shaft.", "The girl takes a pen holder."],
  ["The quill is not white", "The pen holder is not white"],
  ["Paul takes the feather.", "Paul takes the pen."],
  ["What is a feather?", "What is the pen like?"],
  ["What is feathered?", "What is the pen holder like?"],
  ["The quill is black.", "The pen holder is black."],
  ["She puts down the feather.", "She puts down the pen."],
  ["No, he takes a feather.", "No, he takes a pen."],
  ["The girl takes a quill, a feather and a knife.", "The girl takes a pen holder, a pen and a knife."],
  ["She puts down the knife and quill.", "She puts down the knife and pen holder."],
  ["It's a feather.", "It is a pen."],
  ["They are feathers.", "They are pens."],
  ["transposition", "umlaut"],
  ["pronounced like Latvian “š”", "pronounced like English \"sh\""],
  ["pronounced like Latvian ordinary st", "pronounced as st"],
  ["The letter \"z\" in German sounds like Latvian \"c\".", "The letter \"z\" in German sounds like English \"ts\"."],
  ["sounds like the Latvian \"v\"", "sounds like English \"v\""],
  ["Ich gehe an den Tisch. — Es eju pie galda.", "Ich gehe an den Tisch. — I go to the table."],
  ["Ich stelle den Korb auf die Bank. — Es nolieku grozu uz sola.", "Ich stelle den Korb auf die Bank. — I put the basket on the bench."],
  ["sch — pronounced like Latvian š:", "sch — pronounced like sh:"],
  ["sp at the beginning of a word or syllable is pronounced like šp:", "sp at the start of a word or syllable is pronounced like shp:"],
  ["The diphthong äu is pronounced like Latvian oi:", "The diphthong äu is pronounced like oi:"],
  ["What is the plan?", "What is thin?"],
  ["Sols ir zems.", "The bench is low."],
  ["Galds ir augsts.", "The table is high."],
  ["Lecture Thirteen:", "Lesson Thirteen:"],
  ["Lecture Fourteen:", "Lesson Fourteen:"],
  ["Lecture ", "Lesson "],
];

function applyHtmlReplacements(htmlObj) {
  for (const key of Object.keys(htmlObj)) {
    let s = htmlObj[key];
    for (const [from, to] of HTML_STRING_REPLACEMENTS) {
      s = s.split(from).join(to);
    }
    htmlObj[key] = s;
  }
}

function fixLessonData(data, html) {
  for (const [key, lesson] of Object.entries(data)) {
    if (!key.startsWith("kurssLesson")) continue;
    if (lesson.legacyHtml && html[key]) {
      lesson.legacyHtml = html[key];
    }
    if (lesson.title && /^Lekcija \d+$/.test(lesson.title)) {
      lesson.title = lesson.title.replace("Lekcija", "Lesson");
    }
    if (lesson.intro && lesson.intro.includes("Lecture")) {
      lesson.intro = lesson.intro.replace(/Lecture/g, "Lesson");
    }
    if (!lesson.sections) continue;
    for (const section of lesson.sections) {
      if (section.title === "Dialogi / teikumi") section.title = "Dialogues / sentences";
      if (section.title === "Gramatika") section.title = "Grammar";
      if (section.title === "Izruna") section.title = "Pronunciation";
      if (section.title === "Vārdi") section.title = "Words";
      if (section.description === "Translate Latvian sentences into German.") {
        section.description = "Translate the sentences into German.";
      }
      if (Array.isArray(section.items)) {
        section.items = section.items.map((item) => {
          if (typeof item !== "string") return item;
          let s = item;
          for (const [from, to] of WORD_GLOSS_REPLACEMENTS) s = s.split(from).join(to);
          if (s.includes("In Latvian,")) s = s.replace(/In Latvian,/g, "In English,");
          if (s.includes("reversible verbs")) s = s.replace("reversible verbs", "reflexive verbs");
          return s;
        });
      }
      if (section.items) {
        for (const item of section.items) {
          if (item && typeof item === "object" && item.examples) {
            item.examples = item.examples.map((ex) => {
              let s = ex;
              for (const [from, to] of WORD_GLOSS_REPLACEMENTS) s = s.split(from).join(to);
              if (s.includes("Es eju pie galda")) s = "Ich gehe an den Tisch. — I go to the table.";
              if (s.includes("Es nolieku grozu")) s = "Ich stelle den Korb auf die Bank. — I put the basket on the bench.";
              return s;
            });
          }
        }
      }
      if (section.cards) {
        for (const card of section.cards) {
          if (card.lv && TRANSLATE_LV_MAP[card.lv]) card.lv = TRANSLATE_LV_MAP[card.lv];
          if (card.lv === "Who are you?" && card.de === "Was bist du?") card.de = "Wer bist du?";
          if (card.lv === "Kas tu esi?" && card.de === "Was bist du?") card.de = "Wer bist du?";
        }
      }
    }
  }
}

function fixTrainingCards(cards) {
  const fixes = {
    lesson1TrainingCardsEn: [
      { idx: 0, front: "Are you coming?" },
      { idx: 2, front: "Who is singing?", back: "Wer singt?" },
      { idx: 3, front: "Marta sings.", back: "Marta singt." },
      { idx: 5, front: "Yes, they are going." },
      { idx: 9, front: "Are you going?" },
      { idx: 10, front: "Albert and Marta come and go.", back: "Albert und Marta kommen und gehen." },
    ],
    lesson2TrainingCardsEn: [
      { idx: 3, front: "Does Paul answer?" },
      { idx: 5, front: "Do Paul and Marie sing?" },
      { idx: 7, front: "What are you doing?" },
      { idx: 13, front: "Who is going?" },
    ],
    lesson3TrainingCardsEn: [
      { idx: 8, front: "What is thin?" },
      { idx: 11, front: "The bench is low." },
      { idx: 13, front: "The table is high." },
    ],
    lesson4TrainingCardsEn: [
      { idx: 0, front: "The girl takes a pen holder." },
      { idx: 4, front: "Is the pen pointed?" },
      { idx: 8, front: "Is the knife blunt?" },
      { idx: 10, front: "What is the girl doing?" },
    ],
    lesson5TrainingCardsEn: [
      { idx: 4, front: "Who does the teacher scold?" },
      { idx: 7, front: "The student answers badly." },
      { idx: 8, front: "Does the schoolgirl answer badly?" },
      { idx: 14, front: "The child is well-behaved." },
    ],
    lesson6TrainingCardsEn: [
      { idx: 9, front: "I put down two needles." },
      { idx: 17, front: "What is that?" },
      { idx: 18, front: "It is a pen holder." },
      { idx: 19, front: "What is the pen holder like?" },
      { idx: 20, front: "The pen holder is black." },
    ],
  };
  for (const [deckName, patchList] of Object.entries(fixes)) {
    const deck = cards[deckName];
    if (!deck) continue;
    for (const p of patchList) {
      if (p.front) deck[p.idx].front = p.front;
      if (p.back) deck[p.idx].back = p.back;
    }
  }
  const ex7 = cards.lesson7ExerciseCardsEn;
  if (ex7) {
    const gehen = ex7.find((c) => c.infinitive === "gehen");
    if (gehen) gehen.lv = "to go";
  }
}

function fixLvSource() {
  const rel = "data/courseLessons.js";
  let text = fs.readFileSync(path.join(ROOT, rel), "utf8");
  text = text.replace(
    'lv: "Kas tu esi?",\n            de: "Was bist du?"',
    'lv: "Kas tu esi?",\n            de: "Wer bist du?"'
  );
  fs.writeFileSync(path.join(ROOT, rel), text);
  mirror(rel);
}

function fixUi() {
  const rel = "languages/en/ui.js";
  let text = fs.readFileSync(path.join(ROOT, rel), "utf8");
  for (let i = 2; i <= 21; i++) {
    text = text.replace(`"title": "Lecture ${i}"`, `"title": "Lesson ${i}"`);
  }
  fs.writeFileSync(path.join(ROOT, rel), text);
  mirror(rel);
}

// Main
const enPath = "data/en/courseLessons.js";
const w = loadWindow(enPath);
applyHtmlReplacements(w.COURSE_LESSON_HTML);
fixLessonData(w.COURSE_LESSON_DATA, w.COURSE_LESSON_HTML);
writeCourseLessons(enPath, w.COURSE_LESSON_HTML, w.COURSE_LESSON_DATA);
mirror(enPath);

const cardsPath = "data/en/courseTrainingCards.js";
const cardsWin = loadWindow(cardsPath);
fixTrainingCards(cardsWin);
const cardsOut =
  "// British English course training cards for EN-DE Kurss lessons 1-7.\n\n" +
  Object.keys(cardsWin)
    .filter((k) => k.startsWith("lesson"))
    .map((k) => `window.${k} = ${JSON.stringify(cardsWin[k], null, 2)};\n`)
    .join("\n");
fs.writeFileSync(path.join(ROOT, cardsPath), cardsOut);
mirror(cardsPath);

fixLvSource();
fixUi();

console.log("EN-DE Kurss audit repairs applied.");
