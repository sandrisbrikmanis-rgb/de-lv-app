#!/usr/bin/env node
/**
 * Phase 2: regression fixes + remaining EN-DE Kurss audit items.
 * Does NOT re-run phase-1 rules that caused conjugation corruption.
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

function applyReplacements(text, pairs) {
  let s = text;
  for (const [from, to] of pairs) {
    s = s.split(from).join(to);
  }
  return s;
}

const REGRESSION_AND_HTML = [
  // Conjugation corruption from phase-1 prefix rules
  ["Wer arbeitetet?", "Wer arbeitet?"],
  ["Wer arbeitetet? — Who works?", "Wer arbeitet? — Who works?"],
  ["er arbeitetetet.", "er arbeitet."],
  ["er arbeitetet?", "er arbeitet?"],
  ["sie arbeiteteten,", "sie arbeiten,"],
  ["sie arbeiteteten", "sie arbeiten"],
  ["du arbeitestst", "du arbeitest"],
  ["er arbeitetet", "er arbeitet"],
  ["sie arbeitetet", "sie arbeitet"],
  ["ihr arbeitetet", "ihr arbeitet"],
  ["sie arbeiteteten", "sie arbeiten"],
  ["arbeitetetet", "arbeitet"],
  // kurssVerbBasicsLesson conjugation lines
  ["sie kommen - they / they come", "sie kommen — they come"],
  ["sie gehen - they / she goes", "sie gehen — they go"],
  ["sie stehen - they / she stands", "sie stehen — they stand"],
  ["sie singen - they / they sing", "sie singen — they sing"],
  ["sie spielen - they / her in the game", "sie spielen — they play"],
  ["du arbetest - you work", "du arbeitest — you work"],
  ["sie arbeitt - she works", "sie arbeitet — she works"],
  ["ihr arbeitt - you work", "ihr arbeitet — you work"],
  ["sie arbeiten - they / her working", "sie arbeiten — they work"],
  ["ihr fragt - you you ask", "ihr fragt — you ask"],
  ["sie fragen - they / they ask", "sie fragen — they ask"],
  ["sie antworten — they / they answer", "sie antworten — they answer"],
  ["sie rechnet - his calculation", "sie rechnet — she calculates"],
  ["wir rechnen - we we calculate", "wir rechnen — we calculate"],
  ["sie rechnen - they / her invoice", "sie rechnen — they calculate"],
  ["ihr zeichnet - you you draw", "ihr zeichnet — you draw"],
  ["sie zeichnen - they / her draws", "sie zeichnen — they draw"],
  ["sie tun - they / they do", "sie tun — they do"],
  ["ich spielt - I play", "ich spiele — I play"],
  // Lesson 1 verb cards
  ["<span>they / You come</span>", "<span>they / you (formal) come</span>"],
  ["<span>they / You go</span>", "<span>they / you (formal) go</span>"],
  ["<span>they / You stand</span>", "<span>they / you (formal) stand</span>"],
  ["<span>they / You sing</span>", "<span>they / you (formal) sing</span>"],
  ["<span>we we stand</span>", "<span>we stand</span>"],
  ["<span>we we sing</span>", "<span>we sing</span>"],
  ["<span>he / she sing</span>", "<span>he / she sings</span>"],
  ["sie kommen - they / she comes", "sie kommen — they come"],
  ["was tun sie? — what do they / they do?", "was tun sie? — what do they do?"],
  // Lesson 1 words / pronunciation meta
  ["with Latvian letters.<br>This should also be followed in future lectures.", "using phonetic hints.<br>This should also be followed in future lessons."],
  ["marked with Latvian letters, is given in the lectures.", "marked with phonetic hints, is given in the lessons."],
  ["wer (vēr) - what?", "wer (vēr) — who?"],
  // Lesson 2 pronunciation
  ["approximately as in the Latvian words: technika, Frīdrihs.", "approximately as in English \"ch\" in technical, Friedrich."],
  ["like the Latvian flat e sound followed by i.", "like a flat e sound followed by i."],
  // Lesson 5
  ["tadeln - pelt", "tadeln — to scold"],
  ["artig (artich) - polite", "artig (artich) — well-behaved"],
  ["In Latvian, the nominative answers the question who?, and the accusative answers the question what?.", "In English, the subject answers who? and the direct object answers what?."],
  ["pronounced like Latvian s: groß (grōs), weiß (veis).", "pronounced like English s: groß (grōs), weiß (veis)."],
  // Lesson 6 grammar leftovers
  ["in all three in rounds, if it is used with a noun: in the masculine round ein, in the feminine round eine, in the neuter ein.", "in all three genders when used with a noun: masculine ein, feminine eine, neuter ein."],
  ["changes in number and order in Latvian, but in German it uses one form: das.", "changes in English, but in German it uses one form: das."],
  ["Der Wagen - a cart and der Schlitten - a sled Latvian has plurals, but in German these words are used in singular and plural.", "Der Wagen — a cart and der Schlitten — a sled: in German these nouns have singular and plural forms."],
  // Lesson 7
  ["sch is pronounced like Latvian š:", "sch is pronounced like sh:"],
  ["antortet!", "antwortet!"],
  ["arbeitt!", "arbeitet!"],
  ["öffnett!", "öffnet!"],
  ["Sie - You", "Sie — you (formal)"],
  // Modal / word list structured data duplicates
  ["sie müssen - they / they need", "sie müssen — they need / have to"],
  ["sie wollen - they / they want", "sie wollen — they want"],
  ["sie sollen - they / they need", "sie sollen — they must / should"],
  ["sie dürfen - they / they may", "sie dürfen — they may"],
  ["sie essen - they / they eat", "sie essen — they eat"],
  ["sie mögen - they / she wants", "sie mögen — they like"],
  ["ihnen - for them / them", "ihnen — to them"],
  // Latvian / other-language meta in structured sections
  ["Latvian o is a diphthong uo. German o sounds differently, for example: foundation, nominative, photographer.", "In English, o is often a single vowel. German o sounds differently, for example: Grund, Nominal, Fotograf."],
  ["z pronounced like Latvian c: Franz (franc), das Zimmer (cimer).", "z pronounced like English ts: Franz (frants), das Zimmer (cimer)."],
  ["The auxiliary verb haben in German expresses the concept of belonging. In Latvian, it is often expressed with: I have, you have, he has, etc. t. t.", "The auxiliary verb haben in German expresses possession. In English this is expressed with: I have, you have, he has, etc."],
  ["Latvian dative and German nominative/accusative", "English possessive and German nominative/accusative"],
  ["In Latvian, the person to whom something belongs is in the dative case, and the subject is in the nominative case. In German, the person is in the nominative case and the possessed object in the accusative case.", "In English we say \"I have a table\" (subject + verb + object). In German the possessor is in the nominative case and the possessed object in the accusative case."],
  ["krievu: я имею тетрадь; отец имеет книгу.", "In Russian: I have a notebook; the father has a book."],
  ["with Latvian letters.", "using phonetic hints."],
  ["The double negation of the Latvian language is not expressed in German with the negative word kein. The negative word kein only stands before the noun.", "Double negation in English is not expressed in German with the negative word kein. The word kein only stands before the noun."],
  ["In the words Schwester, am jüngsten st is pronounced like Latvian ordinary st: Schwester (švester), jüngsten (jünksten).", "In the words Schwester, am jüngsten st is pronounced as st: Schwester (švester), jüngsten (jünksten)."],
  ["In Latvian, we often say \"I have to study\", \"you have to write\", \"he has to come\". German often uses müssen in such sentences.", "In English we often say \"I have to study\", \"you have to write\", \"he has to come\". German often uses müssen in such sentences."],
  ["ß is pronounced like Latvian s.", "ß is pronounced like English s."],
  ["Similarly, in Latvian, in the word \"smags\", g before s sounds closer to the sound of k.", "Similarly, in some languages g before s sounds closer to k; in German it is pronounced as gs."],
  ["The preposition mit always stands with the dative case. Latvian: mit = with.", "The preposition mit always stands with the dative case. mit = with."],
  ["ie is pronounced like the long ī: liest (rain).", "ie is pronounced like a long i: liest (līst)."],
];

const WORD_GLOSS = [
  ["du hast — tev ir", "du hast — you have"],
  ["wir haben — mums ir", "wir haben — we have"],
  ["ihr habt — jums ir", "ihr habt — you have"],
  ["das Zimmer (das cimer) — istaba", "das Zimmer (das cimer) — room"],
  ["ist nicht — nav", "ist nicht — is not"],
  ["groß (grōs) — liels", "groß (grōs) — big / tall"],
  ["breit — plats", "breit — wide"],
  ["da — tur", "da — there"],
  ["kein, keine, kein — neviens, neviena, neviens", "kein, keine, kein — no / none"],
  ["die Freunde — draugi", "die Freunde — friends"],
  ["der Schrank — skapis", "der Schrank — cupboard / wardrobe"],
  ["die Tischlampe — galda lampa", "die Tischlampe — table lamp"],
  ["denn — jo", "denn — for / because"],
  ["groß — liels", "groß — big / tall"],
  ["ich will — es gribu", "ich will — I want"],
  ["du willst — tu gribi", "du willst — you want"],
  ["es will — tas grib", "es will — it wants"],
  ["die Suppe — zupa", "die Suppe — soup"],
  ["mir — man", "mir — to me"],
  ["dir — tev", "dir — to you"],
  ["nicht — ne", "nicht — not"],
  ["das Messer — nazis", "das Messer — knife"],
  ["schälen — mizot", "schälen — to peel"],
  ["die Birne — bumbieris", "die Birne — pear"],
  ["die Birnen — bumbieri", "die Birnen — pears"],
  ["die Magd — kalpone", "die Magd — maid"],
  ["die Freundin — draudzene", "die Freundin — girlfriend / female friend"],
  ["die Freundinnen — draudzenes", "die Freundinnen — girlfriends / female friends"],
  ["die Dienerin — kalpone", "die Dienerin — maid / servant (female)"],
  ["tragen — nest", "tragen — to carry"],
  ["die Laube — lapene", "die Laube — arbour / gazebo"],
  ["bringen — nest / atnest", "bringen — to bring"],
  ["tev ir", "you have"],
  ["mums ir", "we have"],
  ["jums ir", "you have"],
];

const ALL_REPLACEMENTS = [...REGRESSION_AND_HTML, ...WORD_GLOSS];

function walkReplace(value) {
  if (typeof value === "string") {
    return applyReplacements(value, ALL_REPLACEMENTS);
  }
  if (Array.isArray(value)) {
    return value.map((item) => walkReplace(item));
  }
  if (value && typeof value === "object") {
    for (const key of Object.keys(value)) {
      value[key] = walkReplace(value[key]);
    }
    return value;
  }
  return value;
}

function syncLegacyHtml(data, html) {
  for (const [key, lesson] of Object.entries(data)) {
    if (!key.startsWith("kurssLesson") || !lesson.legacyHtml || !html[key]) continue;
    lesson.legacyHtml = html[key];
  }
}

const enPath = "data/en/courseLessons.js";
const w = loadWindow(enPath);
walkReplace(w.COURSE_LESSON_HTML);
walkReplace(w.COURSE_LESSON_DATA);
syncLegacyHtml(w.COURSE_LESSON_DATA, w.COURSE_LESSON_HTML);
writeCourseLessons(enPath, w.COURSE_LESSON_HTML, w.COURSE_LESSON_DATA);
mirror(enPath);

console.log("Phase 2 EN-DE Kurss repairs applied.");
