#!/usr/bin/env node
const fs = require("fs");
const vm = require("vm");

function read(path) {
  return fs.readFileSync(path, "utf8");
}

function loadUi(path) {
  const ctx = { window: {} };
  vm.runInNewContext(read(path), ctx);
  return ctx.window.LANGUAGE_UI_STRINGS;
}

function flatten(obj, prefix = "") {
  const out = {};
  for (const [k, v] of Object.entries(obj || {})) {
    if (k.startsWith("__")) continue;
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object" && !Array.isArray(v)) Object.assign(out, flatten(v, key));
    else out[key] = String(v ?? "");
  }
  return out;
}

function loadCourseData(path) {
  const ctx = { window: {} };
  vm.runInNewContext(read(path), ctx);
  return ctx.window.COURSE_LESSON_DATA || ctx.window.COURSE_LESSON_HTML || ctx.window;
}

const en = flatten(loadUi("languages/en/ui.js"));
const da = flatten(loadUi("languages/da/ui.js"));
const daWww = read("languages/da/ui.js");
const daWwwCopy = read("www/languages/da/ui.js");
const ui = read("www/ui.js");
const uiRoot = read("ui.js");
const course = read("data/da/courseLessons.js");
const courseWww = read("www/data/da/courseLessons.js");
const launch = read("www/languages/launch.js");

const results = [];

function pass(name, ok, detail = "") {
  results.push({ name, ok, detail });
}

const enKeys = Object.keys(en);
const daKeys = Object.keys(da);
pass(
  "DA UI key parity",
  enKeys.length === daKeys.length && enKeys.every((k) => k in da) && daKeys.every((k) => k in en) && daKeys.every((k) => da[k].trim()),
  `${daKeys.length}/${enKeys.length}`
);
pass("languages/da ↔ www/languages/da sync", daWww === daWwwCopy);
pass("ui.js ↔ www/ui.js sync", ui === uiRoot);
pass("courseLessons primary ↔ www sync", course === courseWww);

pass("buttons.restore = Gendan", da["buttons.restore"] === "Gendan", da["buttons.restore"]);
pass("splash i18n keys", da["splash.title"] === "Tysk" && da["splash.subtitle"] === "Lær tysk" && da["splash.ariaLabel"] === "Indlæser");
pass("languageSelect i18n keys", da["languageSelect.title"] === "Vælg sprog" && da["languageSelect.footer"] === "Lær tysk");
pass("menu.learningModes", da["menu.learningModes"] === "Læringstilstande");
pass("kurss.sections.dialogues", da["kurss.sections.dialogues"] === "Dialoger / sætninger");

const rendererChecks = [
  ['COURSE_TRANSLATE Oversætte', /Oversætte", "Oversæt"\]/],
  ['COURSE_EXERCISE Øvelse', /"Øvelse", "Übung \/ Øvelse"/],
  ['STUDY Hovedidé', /"Hovedidé"/],
  ['SECTION Dialoger mapping', /"Dialoger \/ sætninger": "kurss\.sections\.dialogues"/],
  ['getCourseExerciseHint Øvelse', /sectionTitle === "Øvelse"/],
  ['L9 Übung / Øvelse', /section\.title === "Übung \/ Øvelse"/],
  ['applyLocalizedStaticUi shell aria', /homeShell\.setAttribute\("aria-label", t\("app\.shellLabel"\)\)/],
  ['applyLocalizedStaticUi mainNav', /homeMenuScreen\.setAttribute\("aria-label", t\("menu\.mainNav"\)\)/],
  ['applyLocalizedStaticUi quickTools', /detailToolsRow\.setAttribute\("aria-label", t\("nav\.quickTools"\)\)/],
  ['applyLocalizedStaticUi learningModes', /modeButtons\.setAttribute\("aria-label", t\("menu\.learningModes"\)\)/],
  ['applyLocalizedStaticUi listenPlural', /elements\.pluralAudioBtn\.setAttribute\("aria-label", t\("buttons\.listenPlural"\)\)/],
];
for (const [name, re] of rendererChecks) pass(`renderer: ${name}`, re.test(ui), re.source);

pass("launch prepareLaunchI18n", /async function prepareLaunchI18n/.test(launch));
pass("launch applyLaunchScreenI18n", /function applyLaunchScreenI18n/.test(launch));
pass("launch applyLanguageScreenI18n before wait", /applyLanguageScreenI18n\(\)/.test(launch));

const auditForeignPatterns = [
  ["DATA-UI-001 Dialogi / teikumi in data", !/"title": "Dialogi \/ teikumi"/.test(course)],
  ["DATA-UI-002 Lekcija N in data", !/Lekcija \d+/.test(course)],
  ["DATA-UI-003 Remove -da", !/Remove .*-da.* from base forms/.test(course)],
  ["DATA-UI-003 Latviešu valodā", !/Latviešu valodā/.test(course)],
  ["DATA-UI-003 The Nominative is always", !/The Nominative is always/.test(course)],
  ["DATA-UI-003 Lesson N translation card", !/Lesson \d+ translation card/.test(course)],
  ["DATA-UI-003 Look at the verb", !/Look at the verb/.test(course)],
  ["English task strings", !/Choose the correct|Change this sentence|Ready\. Next click|Answer after reading|Convert to plural|Use the plural instead|Change the opening sentence|Answer in the singular/.test(course)],
  ["DA-001 restore Tilbage", !/"restore": "Tilbage"/.test(daWww)],
  ["DA unødvendig remnants", !/unødvendig/.test(daWww)],
  ["DA Klik remnants", !/"[^"]*Klik[^"]*"/.test(daWww.replace(/Klik på/g, ""))],
];

for (const [name, ok] of auditForeignPatterns) pass(name, ok);

// Renderer functional smoke checks
const translateCount = (course.match(/"title": "Oversætte"/g) || []).length;
pass("L8–21 Oversætte sections present", translateCount >= 10, String(translateCount));

let syntaxOk = true;
for (const file of ["languages/da/ui.js", "www/ui.js", "data/da/courseLessons.js", "www/languages/launch.js"]) {
  try {
    vm.runInNewContext(read(file), { window: {}, console });
  } catch (e) {
    syntaxOk = false;
    pass(`syntax ${file}`, false, e.message);
  }
}
pass("syntax PASS", syntaxOk);

const failed = results.filter((r) => !r.ok);
console.log(JSON.stringify({ pass: failed.length === 0, total: results.length, failed, results }, null, 2));
process.exit(failed.length ? 1 : 0);
