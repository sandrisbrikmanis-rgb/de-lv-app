#!/usr/bin/env node
"use strict";
/**
 * DA–DE A1 final closure repair (residual OWNER apply + sectionAccents + corruption fixes).
 * Usage: node scripts/apply-da-a1-final-closure-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { findEntry, getAt, setAt } = require("./lib/da-a1-owner-path");

const FILES = [
  path.join(ROOT, "data/da/a1.js"),
  path.join(ROOT, "www/data/da/a1.js"),
];
const DRY_RUN = process.argv.includes("--dry-run");
const DE_FIELDS = ["de", "de_article", "de_plural", "level"];

const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const A1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.A1_WORDS = A1_WORDS;\n`,
    "utf8"
  );
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function findByStudyId(words, studyId) {
  return words.find((e) => e.study?.id === studyId);
}

function removeAccentTerm(entry, field, term) {
  const val = getAt(entry, field);
  if (!Array.isArray(val)) return false;
  const filtered = val.filter((t) => String(t) !== term);
  if (filtered.length === val.length) return false;
  setAt(entry, field, filtered);
  return true;
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesTerm(text, term) {
  if (!text || !term) return false;
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegex(term)}(?![\\p{L}\\p{N}_])`, "iu").test(String(text));
  } catch {
    return String(text).toLowerCase().includes(String(term).toLowerCase());
  }
}

function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => {
    if (v === undefined || v === null) return;
    if (typeof v === "string") {
      if (v.trim()) texts.push(v);
      return;
    }
    if (Array.isArray(v)) {
      v.forEach(push);
      return;
    }
    if (typeof v === "object") {
      ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) => push(v[k]));
    }
  };
  if (sectionKey === "explanation") {
    push(study.explanation);
    return texts;
  }
  if (sectionKey === "examples") {
    const rows = index !== null ? [study.examples?.[index]].filter(Boolean) : study.examples || [];
    rows.forEach((ex) => {
      if (!field || field === "de") push(ex.de);
      if (!field || field === "lv") push(ex.lv);
    });
    return texts;
  }
  if (sectionKey === "comparison") {
    const rows = index !== null ? [study.comparison?.[index]].filter(Boolean) : study.comparison || [];
    rows.forEach((r) => {
      if (!field || field === "word") push(r.word);
      if (!field || field === "meaning") push(r.meaning);
      if (!field || field === "example") push(r.example);
    });
    return texts;
  }
  if (sectionKey === "tip") {
    if (field === "left") {
      push(study.tip?.left || study.tip?.text);
      return texts;
    }
    push(study.tip);
    return texts;
  }
  if (sectionKey === "important") {
    const source = study.important;
    const rows =
      index !== null ? [Array.isArray(source) ? source[index] : source].filter(Boolean) : source || [];
    if (Array.isArray(rows)) rows.forEach(push);
    else push(rows);
    return texts;
  }
  return texts;
}

function validateSectionAccents(study, sectionAccents, cardDe) {
  const mismatches = [];
  if (!sectionAccents || typeof sectionAccents !== "object") return mismatches;
  const checkMap = (sectionKey, index, field, accentMap, pathPrefix) => {
    if (!accentMap || typeof accentMap !== "object") return;
    for (const color of ACCENT_COLORS) {
      if (!Array.isArray(accentMap[color])) continue;
      for (const term of accentMap[color]) {
        const raw = String(term || "").trim();
        if (!raw) continue;
        const texts = collectSectionTexts(study, sectionKey, index, field);
        const blob = texts.join("\n");
        if (!matchesTerm(blob, raw)) {
          mismatches.push({
            path: pathPrefix,
            target: raw,
            section: sectionKey,
            field: field || null,
            cardDe,
            sectionText: blob || "(empty)",
          });
        }
      }
    }
  };
  for (const [sectionKey, rules] of Object.entries(sectionAccents)) {
    if (Array.isArray(rules)) {
      rules.forEach((entry, index) => {
        if (!entry || typeof entry !== "object") return;
        const hasColors = ACCENT_COLORS.some((c) => Array.isArray(entry[c]));
        if (hasColors) {
          checkMap(sectionKey, index, null, entry, `sectionAccents.${sectionKey}[${index}]`);
          return;
        }
        for (const field of Object.keys(entry)) {
          checkMap(sectionKey, index, field, entry[field], `sectionAccents.${sectionKey}[${index}].${field}`);
        }
      });
      continue;
    }
    if (rules && typeof rules === "object") {
      const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
      if (hasColors) checkMap(sectionKey, null, null, rules, `sectionAccents.${sectionKey}`);
      else {
        for (const [field, map] of Object.entries(rules)) {
          checkMap(sectionKey, null, field, map, `sectionAccents.${sectionKey}.${field}`);
        }
      }
    }
  }
  return mismatches;
}

function sanitizeSectionAccents(study) {
  const sa = study.sectionAccents;
  if (!sa || typeof sa !== "object") return 0;
  let removed = 0;
  const prune = (sectionKey, index, field, accentMap) => {
    if (!accentMap || typeof accentMap !== "object") return;
    for (const color of ACCENT_COLORS) {
      if (!Array.isArray(accentMap[color])) continue;
      const kept = accentMap[color].filter((term) => {
        const raw = String(term || "").trim();
        if (!raw) return false;
        const texts = collectSectionTexts(study, sectionKey, index, field);
        return matchesTerm(texts.join("\n"), raw);
      });
      removed += accentMap[color].length - kept.length;
      accentMap[color] = kept;
    }
  };
  for (const [sectionKey, rules] of Object.entries(sa)) {
    if (Array.isArray(rules)) {
      rules.forEach((entry, index) => {
        if (!entry || typeof entry !== "object") return;
        const hasColors = ACCENT_COLORS.some((c) => Array.isArray(entry[c]));
        if (hasColors) prune(sectionKey, index, null, entry);
        else for (const field of Object.keys(entry)) prune(sectionKey, index, field, entry[field]);
      });
    } else if (rules && typeof rules === "object") {
      const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
      if (hasColors) prune(sectionKey, null, null, rules);
      else for (const [field, map] of Object.entries(rules)) prune(sectionKey, null, field, map);
    }
  }
  return removed;
}

function verifyDeUnchanged(before, after) {
  let n = 0;
  for (let i = 0; i < after.length; i++) {
    for (const f of DE_FIELDS) {
      if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) n++;
    }
  }
  return n;
}

function applyRepairs(words) {
  const log = [];

  function setStudy(studyId, mutator, label) {
    const entry = findByStudyId(words, studyId);
    if (!entry?.study) {
      log.push({ studyId, label, status: "MISSING" });
      return;
    }
    mutator(entry.study);
    log.push({ studyId, label, status: "OK" });
  }

  // 1. fahren translation
  setStudy("a1-fahren", (s) => {
    s.translation = "Køre";
    s.accents = {
      blue: ["fahren", "fahre"],
      purple: ["køre", "tage", "føre"],
      green: ["køretøj", "bil", "transport"],
      yellow: ["gehen", "laufen"],
      red: ["bringen", "mitnehmen"],
    };
    if (s.important && typeof s.important === "object" && !Array.isArray(s.important)) {
      s.important.text = "Fahren ≠ kun at køre";
      s.important.example =
        "På tysk betyder det samme verbum ofte: at køre • at køre med • at tage med afhængigt af sammenhængen.";
    }
  }, "fahren.translation+accents");

  // 2. bitte sectionAccents + stale Behage
  setStudy("a1-bitte", (s) => {
    s.sectionAccents.examples[0].lv.purple = ["tak"];
    s.sectionAccents.examples[1].lv.purple = ["Venligst"];
    s.sectionAccents.examples[2].lv.purple = ["Værsgo"];
  }, "bitte.sectionAccents");

  // 3. bitte-study examples cleanup
  setStudy("a1-bitte-study", (s) => {
    s.examples = [
      { de: "Ich habe eine Bitte.", lv: "Jeg har en anmodning." },
      { de: "Er erfüllt meine Bitte.", lv: "Han opfylder min anmodning." },
      { de: "Sie hat zwei Bitten.", lv: "Hun har to anmodninger." },
    ];
  }, "bitte-study.examples");

  // 4. finden corruption + accent removal
  setStudy("a1-finden", (s) => {
    s.comparison[0].example = "Ich finde das gut. = Jeg synes, det er godt.";
    s.comparison[3].example = "Ich glaube, er kommt. = Jeg tror, han kommer.";
    removeAccentTerm({ study: s }, "study.sectionAccents.examples[1].de.blue", "gefunden");
  }, "finden.corruption");

  // 5. noch corruption
  setStudy("a1-noch-study", (s) => {
    s.explanation[1] = "Noch betyder her hovedsageligt, at noget stadig foregår.";
  }, "noch.corruption");

  // 6. Besuch — comparison + DA sectionAccents
  setStudy("a1-besuch", (s) => {
    s.comparison = [
      {
        word: "der Besuch",
        meaning: "besøg • socialt besøg • hjemmebesøg",
        example: "Danke für deinen Besuch. – Tak for dit besøg.",
      },
      {
        word: "der Besucher",
        meaning: "besøgende",
        example: "Der Besucher wartet draußen. – Besøgende venter udenfor.",
      },
      {
        word: "besuchen",
        meaning: "at besøge",
        example: "Ich besuche meine Großeltern. – Jeg besøger mine bedsteforældre.",
      },
    ];
    s.sectionAccents = {
      explanation: {
        blue: ["der Besuch", "die Besuche"],
        purple: ["besøg"],
      },
      examples: [
        {
          de: { blue: ["Besuch"], green: ["Museum"] },
          lv: { purple: ["Besøget"], green: ["museet"] },
        },
        {
          de: { blue: ["Besuch"] },
          lv: { purple: ["besøg"] },
        },
        {
          de: { blue: ["Besuch"], green: ["Arzt"] },
          lv: { purple: ["hjemmebesøg"], green: ["Lægen"] },
        },
      ],
      comparison: [
        {
          word: { green: ["der Besuch"] },
          meaning: { purple: ["besøg", "socialt", "hjemmebesøg"] },
        },
        {
          word: { green: ["der Besucher"] },
          meaning: { purple: ["besøgende"] },
        },
        {
          word: { green: ["besuchen"] },
          meaning: { purple: ["besøge"] },
        },
      ],
      tip: {
        left: {
          blue: ["Besuch"],
          purple: ["besøg"],
          green: ["Besucher"],
        },
      },
      important: [
        { blue: ["der Besuch"], purple: ["besøg"] },
        { blue: ["die Besuche"] },
      ],
    };
  }, "besuch.comparison+accents");

  // 7. besuchen — examples, comparison, sectionAccents
  setStudy("a1-besuchen", (s) => {
    s.examples = [
      { de: "Ich besuche meine Großeltern.", lv: "Jeg besøger mine bedsteforældre." },
      { de: "Wir besuchen das Museum.", lv: "Vi besøger museet." },
      { de: "Er besucht einen Freund.", lv: "Han besøger en ven." },
    ];
    s.comparison = [
      {
        word: "besuchen",
        meaning: "at besøge en person eller et sted",
        example: "Ich besuche meine Großeltern. – Jeg besøger mine bedsteforældre.",
      },
      {
        word: "treffen",
        meaning: "at møde",
        example: "Ich treffe meinen Freund. – Jeg møder min ven.",
      },
      {
        word: "zu jemandem gehen",
        meaning: "at gå til nogen",
        example: "Ich gehe zu meinem Freund. – Jeg går til min ven.",
      },
    ];
    s.sectionAccents = {
      explanation: {
        blue: ["besuchen"],
        purple: ["besøge"],
        green: ["person", "sted"],
      },
      examples: [
        {
          de: { blue: ["besuche"], green: ["Großeltern"] },
          lv: { purple: ["besøger"], green: ["bedsteforældre"] },
        },
        {
          de: { blue: ["besuchen"], green: ["Museum"] },
          lv: { purple: ["besøger"], green: ["museet"] },
        },
        {
          de: { blue: ["besucht"], green: ["Freund"] },
          lv: { purple: ["besøger"], green: ["ven"] },
        },
      ],
      comparison: [
        {
          word: { green: ["besuchen"] },
          meaning: { purple: ["besøge"] },
          example: { blue: ["besuche"], purple: ["besøger"] },
        },
        {
          word: { green: ["treffen"] },
          meaning: { purple: ["møde"] },
          example: { yellow: ["treffe"] },
        },
        {
          word: { green: ["zu jemandem gehen"] },
          meaning: { purple: ["gå"] },
          example: { yellow: ["gehe"] },
        },
      ],
      tip: {
        left: {
          blue: ["besuchen"],
          purple: ["besøge"],
        },
      },
      important: [
        { blue: ["besuchen"], purple: ["akkusativ"] },
        { green: ["sted", "person"], purple: ["besøge"] },
      ],
    };
  }, "besuchen.full");

  // 8. hübsch — examples, comparison (nett), sectionAccents
  setStudy("a1-huebsch", (s) => {
    s.examples = [
      { de: "Sie trägt ein hübsches Kleid.", lv: "Hun har en pæn kjole." },
      { de: "Das Zimmer ist hübsch.", lv: "Værelset er pænt." },
      { de: "Das ist ein hübsches Bild.", lv: "Det er et pænt billede." },
    ];
    s.comparison = [
      {
        word: "hübsch",
        meaning: "pæn • tiltalende",
        example: "Das ist ein hübsches Kleid. – Det er en pæn kjole.",
      },
      {
        word: "schön",
        meaning: "smuk • dejlig",
        example: "Der Garten ist schön. – Haven er smuk.",
      },
      {
        word: "nett",
        meaning: "sød • venlig",
        example: "Sie ist sehr nett. – Hun er meget sød.",
      },
    ];
    s.sectionAccents = {
      explanation: {
        blue: ["hübsch"],
        purple: ["pæn", "smuk", "tiltalende"],
        yellow: ["nett"],
      },
      examples: [
        {
          de: { blue: ["hübsches"], green: ["Kleid"] },
          lv: { purple: ["pæn"], green: ["kjole"] },
        },
        {
          de: { blue: ["hübsch"] },
          lv: { purple: ["pænt"] },
        },
        {
          de: { blue: ["hübsches"] },
          lv: { purple: ["pænt"] },
        },
      ],
      comparison: [
        {
          word: { green: ["hübsch"] },
          meaning: { purple: ["pæn", "tiltalende"] },
          example: { blue: ["hübsches"], purple: ["pæn"] },
        },
        {
          word: { green: ["schön"] },
          meaning: { purple: ["smuk", "dejlig"] },
        },
        {
          word: { green: ["nett"] },
          meaning: { purple: ["sød", "venlig"] },
        },
      ],
      tip: {
        left: {
          blue: ["hübsch"],
          purple: ["pæn"],
          yellow: ["nett"],
        },
      },
      important: [
        { blue: ["hübsch"], purple: ["pæn"] },
        { yellow: ["nett"], purple: ["sød", "venlig"] },
      ],
    };
  }, "huebsch.full");

  // 9. Remaining 7 missing-study LV remnants → DA
  setStudy("a1-fussball-study", (s) => {
    s.examples = [
      { de: "Ich spiele Fußball.", lv: "Jeg spiller fodbold." },
      { de: "Der Fußball liegt im Garten.", lv: "Fodbolden ligger i haven." },
      { de: "Wir kaufen zwei Fußbälle.", lv: "Vi køber to fodbolde." },
    ];
    s.comparison = [
      {
        word: "Fußball",
        meaning: "sporten fodbold",
        example: "Ich spiele Fußball. – Jeg spiller fodbold.",
      },
      {
        word: "der Fußball",
        meaning: "en fodbold",
        example: "Der Fußball liegt im Garten. – Fodbolden ligger i haven.",
      },
    ];
    s.tip = {
      text: "Husk: Fußball betyder normalt sporten fodbold; Ball er det almindelige ord for en bold.",
    };
  }, "fussball.full");

  setStudy("a1-ganz-study", (s) => {
    s.examples = [
      { de: "Ich arbeite den ganzen Tag.", lv: "Jeg arbejder hele dagen." },
      { de: "Das ganze Haus ist sauber.", lv: "Hele huset er rent." },
      { de: "Das ist ganz sicher.", lv: "Det er helt sikkert." },
      { de: "Das Essen ist ganz gut.", lv: "Det er ret godt." },
    ];
    s.comparison = [
      { word: "ganz", meaning: "hel • helt", example: "der ganze Tag – hele dagen" },
      { word: "alles", meaning: "alt", example: "Alles ist gut. – Alt er godt." },
    ];
    s.tip = {
      text: "Husk: betydningen af ganz afhænger af sammenhængen: hel, helt eller ret.",
    };
  }, "ganz.full");

  setStudy("a1-gefallen-study", (s) => {
    s.examples = [
      { de: "Das gefällt mir.", lv: "Det kan jeg godt lide." },
      { de: "Gefällt dir das Kleid?", lv: "Kan du lide kjolen?" },
      { de: "Der Film gefällt uns.", lv: "Vi kan godt lide filmen." },
    ];
    s.comparison = [
      {
        word: "gefallen",
        meaning: "at kunne lide",
        example: "Das gefällt mir. – Det kan jeg godt lide.",
      },
      {
        word: "mögen",
        meaning: "at kunne lide",
        example: "Ich mag das. – Det kan jeg godt lide.",
      },
    ];
    s.tip = { text: "Husk konstruktionen: Das gefällt mir = Det kan jeg godt lide." };
  }, "gefallen.full");

  setStudy("a1-geschichte-study", (s) => {
    s.examples = [
      { de: "Er erzählt eine Geschichte.", lv: "Han fortæller en historie." },
      { de: "Ich lerne Geschichte.", lv: "Jeg lærer historie." },
      { de: "Das ist die Geschichte Deutschlands.", lv: "Det er Tysklands historie." },
    ];
    s.comparison = [
      {
        word: "eine Geschichte",
        meaning: "en historie • fortælling",
        example: "eine interessante Geschichte – en interessant historie",
      },
      {
        word: "Geschichte",
        meaning: "historie",
        example: "Geschichte lernen – lære historie",
      },
    ];
    s.tip = {
      text: "Husk: eine Geschichte = en historie eller fortælling; Geschichte som fag = historie.",
    };
  }, "geschichte.full");

  setStudy("a1-geschwister-study", (s) => {
    s.comparison = [
      {
        word: "Geschwister",
        meaning: "søskende",
        example: "Meine Geschwister – mine søskende",
      },
      { word: "Bruder", meaning: "bror", example: "mein Bruder – min bror" },
      { word: "Schwester", meaning: "søster", example: "meine Schwester – min søster" },
    ];
    s.tip = {
      text: "Husk: Geschwister = søskende, altså brødre og søstre samlet.",
    };
  }, "geschwister.full");

  setStudy("a1-grosseltern-study", (s) => {
    s.comparison = [
      {
        word: "Großeltern",
        meaning: "bedsteforældre",
        example: "meine Großeltern – mine bedsteforældre",
      },
      {
        word: "Großmutter",
        meaning: "bedstemor",
        example: "meine Großmutter – min bedstemor",
      },
      {
        word: "Großvater",
        meaning: "bedstefar",
        example: "mein Großvater – min bedstefar",
      },
    ];
    s.tip = { text: "Husk: Großeltern = bedsteforældre." };
  }, "grosseltern.full");

  setStudy("a1-hand-study", (s) => {
    s.examples = [
      { de: "Ich wasche meine Hände.", lv: "Jeg vasker mine hænder." },
      { de: "Sie hält das Glas in der Hand.", lv: "Hun holder glasset i hånden." },
      { de: "Mein Arm tut weh.", lv: "Min arm gør ondt." },
    ];
    s.comparison = [
      {
        word: "die Hand",
        meaning: "hånd",
        example: "in der Hand – i hånden",
      },
      {
        word: "der Arm",
        meaning: "arm",
        example: "Mein Arm tut weh. – Min arm gør ondt.",
      },
    ];
    s.tip = { text: "Husk: die Hand = hånd; flertal die Hände." };
  }, "hand.full");

  // 10. Targeted sectionAccent fixes
  setStudy("a1-ein", (s) => {
    s.sectionAccents.examples[0].lv.purple = ["mand"];
  }, "ein.accent");

  setStudy("a1-fahren", (s) => {
    if (s.sectionAccents?.important?.[0]?.text?.purple) {
      s.sectionAccents.important[0].text.purple = ["køre"];
    }
    if (s.sectionAccents?.important?.[0]?.example?.purple) {
      s.sectionAccents.important[0].example.purple = ["køre"];
    }
  }, "fahren.accents");

  // 11. Owner FJERN sectionAccent terms (group03)
  const accentRemovals = [
    ["a1-bis", "study.sectionAccents.comparison[2].example.yellow", "bis dass"],
    ["a1-bringen", "study.sectionAccents.examples[0].de.yellow", "Wasser"],
    ["a1-bringen", "study.sectionAccents.examples[1].de.green", "dich"],
    ["a1-bringen", "study.sectionAccents.examples[2].de.blue", "bringt"],
    ["a1-bringen", "study.sectionAccents.examples[2].de.yellow", "Buch"],
    ["a1-bringen", "study.sectionAccents.comparison[1].word.green", "nehmen"],
    ["a1-bringen", "study.sectionAccents.comparison[2].word.green", "holen"],
    ["a1-bringen", "study.sectionAccents.comparison[3].word.green", "mitbringen"],
    ["a1-bringen", "study.sectionAccents.comparison[2].example.yellow", "hole"],
    ["a1-halten", "study.sectionAccents.comparison[2].example.red", "Stoppen"],
  ];
  for (const [studyId, field, term] of accentRemovals) {
    const entry = findByStudyId(words, studyId);
    if (entry && removeAccentTerm(entry, field, term)) {
      log.push({ studyId, label: `remove ${term}`, status: "OK" });
    }
  }

  let sanitized = 0;
  for (const entry of words) {
    if (entry.study?.sectionAccents) sanitized += sanitizeSectionAccents(entry.study);
  }
  log.push({ label: "sanitizeSectionAccents", removed: sanitized, status: "OK" });

  // es — examples, info, comparison, accents
  setStudy("a1-es", (s) => {
    s.examples = [
      { de: "Es regnet.", lv: "Det regner." },
      { de: "Es ist kalt.", lv: "Det er koldt." },
      { de: "Das Kind schläft.", lv: "Barnet sover." },
      { de: "Es ist müde.", lv: "Det er træt." },
      { de: "Es regnet.", lv: "Det regner." },
      { de: "Es schneit.", lv: "Det sner." },
    ];
    s.info = ['Dansk "jeg" = tysk "ich"', "Tysk es = det • upersonlig form"];
    s.comparison = [
      { word: "es", meaning: "det • upersonlig form", example: "Es regnet. -- Det regner." },
      { word: "ich", meaning: "jeg (personlig form)", example: "Ich lerne Deutsch. -- Jeg lærer tysk." },
    ];
    s.sectionAccents.examples = [
      { blue: ["Es"] },
      { blue: ["Es"] },
      {},
      { blue: ["Es"] },
      { blue: ["Es"] },
      { blue: ["Es"] },
    ];
  }, "es.full");

  // sein tip accent
  setStudy("a1-sein", (s) => {
    s.sectionAccents.tip.left.purple = ["jeg er"];
  }, "sein.tipAccent");

  // um important accent
  setStudy("a1-um", (s) => {
    s.important[0] = 'Ved klokkeslæt svarer um normalt til "klokken" på dansk.';
    s.sectionAccents.important[0].purple = ["klokken"];
  }, "um.importantAccent");

  return log;
}

function runAuditChecks(words) {
  execSync("node reports/temp/audit-da-a1-collect.js", { cwd: ROOT, stdio: "pipe" });
  const audit = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/da-a1-audit-data.json"), "utf8"));

  let accentIssues = 0;
  for (const entry of words) {
    if (!entry.study?.sectionAccents) continue;
    accentIssues += validateSectionAccents(entry.study, entry.study.sectionAccents, entry.de).length;
  }

  let parity = "UNKNOWN";
  try {
    const out = execSync("node scripts/audit-language-parity.js --lang=da", { cwd: ROOT, encoding: "utf8" });
    parity = out.includes("PASS") ? "PASS" : out.trim();
  } catch (e) {
    parity = e.stdout?.includes("PASS") ? "PASS" : "FAIL";
  }

  return {
    cards: words.length,
    study: words.filter((e) => e.study).length,
    findings: audit.findings.length,
    accentIssues,
    parity,
    mirror: fs.readFileSync(FILES[0]).equals(fs.readFileSync(FILES[1])),
  };
}

function main() {
  const words = loadWords(FILES[0]);
  const before = deepClone(words);
  const log = applyRepairs(words);
  const deChanges = verifyDeUnchanged(before, words);

  if (!DRY_RUN) {
    for (const f of FILES) writeWords(f, words);
    execSync("node --check data/da/a1.js", { cwd: ROOT, stdio: "pipe" });
  }

  const checks = runAuditChecks(words);
  const summary = { dryRun: DRY_RUN, repairs: log.length, deChanges, ...checks };
  console.log(JSON.stringify(summary, null, 2));

  if (deChanges !== 0) {
    console.error("DE CHANGES DETECTED:", deChanges);
    process.exit(1);
  }
  if (checks.accentIssues > 0 || checks.findings > 0) {
    console.error("Validation not clean:", checks);
    process.exit(1);
  }
}

main();
