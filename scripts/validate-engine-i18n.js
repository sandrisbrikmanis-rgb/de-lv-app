#!/usr/bin/env node
/**
 * Guards against the class of defects found in the LT-DE structural audit
 * (2026-07-29): ui.js hardcoding Latvian text instead of using t().
 *
 * 1. Every non-LV languages/{lang}/ui.js file must have the exact same
 *    translation key set as languages/lv/ui.js (no missing/extra keys).
 * 2. ui.js must not contain specific hardcoded Latvian UI literals that
 *    were found bypassing the i18n system (card header labels, modal
 *    titles/buttons, audio button labels, verb spelling prompts).
 *
 * This does not check the legacy LV-only training-card data arrays
 * (lesson1TrainingCards..lesson6TrainingCards, lesson7ExerciseCards,
 * lesson8ExerciseCards) — those are intentionally LV/ET-only fallback
 * data, bypassed for other languages at the routing layer.
 */
const fs = require("path") && require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const failures = [];

function loadKeys(file) {
  const code = fs.readFileSync(path.join(root, file), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const obj = ctx.window.LANGUAGE_UI_STRINGS || {};
  const keys = [];
  (function walk(o, prefix) {
    for (const k of Object.keys(o)) {
      const v = o[k];
      const p = prefix ? `${prefix}.${k}` : k;
      if (v && typeof v === "object" && !Array.isArray(v)) walk(v, p);
      else keys.push(p);
    }
  })(obj, "");
  return new Set(keys);
}

const LANGUAGES = ["lt", "ru", "pl", "uk", "et", "ro", "bg", "tr", "gr", "sq"];
const lvKeys = loadKeys("languages/lv/ui.js");

for (const lang of LANGUAGES) {
  const keys = loadKeys(`languages/${lang}/ui.js`);
  const missing = [...lvKeys].filter((k) => !keys.has(k));
  const extra = [...keys].filter((k) => !lvKeys.has(k));
  if (missing.length) failures.push(`languages/${lang}/ui.js missing keys: ${missing.join(", ")}`);
  if (extra.length) failures.push(`languages/${lang}/ui.js has extra keys not in LV: ${extra.join(", ")}`);
}

const uiJsCode = fs.readFileSync(path.join(root, "ui.js"), "utf8");

const FORBIDDEN_LITERALS = [
  "· Pareizrakstība",
  "Atbilde: ${",
  "Pēdējā sesija:",
  "Problemātiskie:",
  "· Sesija:",
  'aria-label="Aizvērt"',
  'title="Nevajadzīgie vārdi"',
  ">Atgriezt<",
  '"100% zināmi"',
  '"Darbības vārdi"',
  '"Automātiska izruna"',
  '"Izslēgt automātisko izrunu"',
  '"Ieslēgt automātisko izrunu"',
  "`Klausīties: ",
  'title="Klausīties"',
  "'trūkst: ",
  '"Uzraksti infinitīvu"',
  '"Uzraksti imperfektu"',
  '"Uzraksti pagātnes divdabi"',
  '"Uzmini infinitīvu"',
  '"Uzmini imperfektu"',
  '"Uzmini pagātnes divdabi"',
  '"Uzraksti latviski"'
];

for (const literal of FORBIDDEN_LITERALS) {
  if (uiJsCode.includes(literal)) {
    failures.push(`ui.js still contains hardcoded Latvian literal: ${literal}`);
  }
}

const requiredTKeys = [
  "card.spelling", "card.answerPrefix", "card.lastSessionLabel", "card.problemLabel", "card.sessionLabel",
  "verb.writeInfinitive", "verb.writeImperfect", "verb.writePastParticiple",
  "verb.guessInfinitive", "verb.guessImperfect", "verb.guessPastParticiple",
  "buttons.close", "buttons.restore", "buttons.unwantedWords", "buttons.knownWords", "buttons.masteredWords",
  "buttons.listen", "buttons.listenWithWord", "buttons.autoplayLabel",
  "buttons.autoplayAriaOn", "buttons.autoplayAriaOff", "spelling.missingChar"
];
for (const key of requiredTKeys) {
  if (!uiJsCode.includes(`t("${key}"`)) {
    failures.push(`ui.js does not call t("${key}") anywhere (expected engine to use this i18n key)`);
  }
}

if (failures.length) {
  console.error("Engine i18n validation FAILED:\n- " + failures.join("\n- "));
  process.exit(1);
}

console.log(`Engine i18n validation passed: ${LANGUAGES.length} languages have full key parity (${lvKeys.size} keys each), no forbidden hardcoded Latvian literals found in ui.js.`);
