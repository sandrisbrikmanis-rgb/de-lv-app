#!/usr/bin/env node
/**
 * Second deterministic pass over reports/de-consistency-audit.json.
 * Reads data files only to count checked characters, LV ids, and lesson7 DE fields.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { loadArrayDataset, loadWindowGlobals, fileExists } = require("./lib/audit-common");
const { textCategory, pick, cell, DATASETS } = require("./build-de-consistency-breakdown");

const ROOT = path.resolve(__dirname, "..");
const OUT = path.join(ROOT, "reports/de-consistency-analysis2.md");
const OTHER_CATS = [
  "CASE_PLUS_TRAILING_SPACE",
  "CASE_ONLY_OTHER",
  "GERMAN_SENTENCE_DIFFERENT",
  "LATIN_DIACRITIC_DIFF",
  "NUMERIC_OR_SYMBOL",
  "UNCLASSIFIED"
];
const TEXT_COLUMNS = [
  "CASE_ONLY",
  "PUNCT_OR_SPACE_ONLY",
  "TRANSLATED_GERMAN",
  "FOREIGN_SCRIPT",
  ...OTHER_CATS
];
const LOADER_TRAINING_LANGS = new Set(["lt", "uk", "ru", "sl", "bs", "sr", "hr", "sk", "cs", "fi", "sv", "nb", "nn", "da", "nl", "lb", "fr", "it", "es", "pt", "en", "hu", "is"]);
const LESSON7_DE_FIELDS = ["infinitive", "du", "ihr", "sie"];

function stripTrailing(value) {
  return String(value ?? "").replace(/\s+$/g, "");
}

function otherCategory(row) {
  const lv = row.lvValue;
  const lang = row.langValue;
  const lvTrim = stripTrailing(lv);
  const langTrim = stripTrailing(lang);
  const trailingInvolved = lvTrim !== String(lv ?? "") || langTrim !== String(lang ?? "");
  if (trailingInvolved && lvTrim.length && lvTrim.length === langTrim.length && lvTrim.slice(1) === langTrim.slice(1)
    && lvTrim[0] !== langTrim[0] && lvTrim[0].toLowerCase() === langTrim[0].toLowerCase()) {
    return "CASE_PLUS_TRAILING_SPACE";
  }
  if (String(lv ?? "").toLowerCase() === String(lang ?? "").toLowerCase()) return "CASE_ONLY_OTHER";
  const words = (value) => String(value ?? "").match(/\p{L}{3,}/gu) || [];
  const germanLettersOnly = (value) => ![...String(value ?? "")].some((ch) => /\p{L}/u.test(ch) && !/[A-Za-zÄÖÜäöüß]/.test(ch));
  if (words(lv).length >= 3 && words(lang).length >= 3 && germanLettersOnly(lv) && germanLettersOnly(lang)) {
    return "GERMAN_SENTENCE_DIFFERENT";
  }
  const hasLatinDiacritic = [...`${lv ?? ""}${lang ?? ""}`].some((ch) => /\p{L}/u.test(ch) && !/[A-Za-zÄÖÜäöüß]/.test(ch));
  const stripMarks = (value) => String(value ?? "").normalize("NFD").replace(/\p{M}/gu, "").toLowerCase();
  if (hasLatinDiacritic && stripMarks(lv) === stripMarks(lang)) return "LATIN_DIACRITIC_DIFF";
  const letters = (value) => String(value ?? "").replace(/[0-9\s\p{P}\p{S}]/gu, "");
  if (letters(lv) === letters(lang) && letters(lv).length > 0) return "NUMERIC_OR_SYMBOL";
  return "UNCLASSIFIED";
}

function fineCategory(row) {
  const top = textCategory(row);
  if (top !== "OTHER") return top;
  return otherCategory(row);
}

function lvShape(row) {
  const text = String(row.lvValue ?? "").trim();
  const words = text.split(/\s+/).filter(Boolean);
  if (/[.!?]/.test(text) || words.length >= 5) return "SENTENCE_START";
  if (/legacyHtml\/kurss-example/.test(String(row.field))
    || /^(der|die|das|ein|eine|ihn|ihm|ihr|wir|du|ich|sie|es)\b/i.test(text)) {
    return "LIST_OR_DICTIONARY";
  }
  return "OTHER_SHAPE";
}

function exampleLine(row, extra) {
  return `- ${row.language} \`${row.dataset}\` \`${row.id}\` \`${row.field}\` koks=\`${row.tree}\` LV=${cell(row.lvValue)} LANG=${cell(row.langValue)}${extra ? ` ${extra}` : ""}`;
}

function loadLvIds() {
  const ids = new Set();
  ["a1", "a2", "b1", "b2", "c1", "c2"].forEach((level) => {
    const list = loadArrayDataset(`data/${level}.js`) || [];
    list.forEach((entry) => {
      if (entry && entry.id) ids.add(String(entry.id));
      if (entry && entry.study && entry.study.id) ids.add(String(entry.study.id));
    });
  });
  return ids;
}

function extractConstArray(source, name) {
  const match = source.match(new RegExp(`const ${name} = (\\[[\\s\\S]*?\\n\\]);`));
  if (!match) return null;
  return vm.runInNewContext(`(${match[1]})`);
}

function lesson7FromWindow(win) {
  const key = Object.keys(win || {}).find((name) => /^lesson7ExerciseCards/.test(name));
  return key && Array.isArray(win[key]) ? win[key] : null;
}

function lesson7Chars(cards) {
  let chars = 0;
  (cards || []).forEach((card) => {
    LESSON7_DE_FIELDS.forEach((field) => {
      if (card && Object.prototype.hasOwnProperty.call(card, field)) chars += String(card[field] ?? "").length;
    });
  });
  return chars;
}

function compareLesson7(lvCards, langCards) {
  const rows = [];
  let checked = 0;
  let checkedChars = 0;
  const count = Math.max(lvCards.length, (langCards || []).length);
  for (let i = 0; i < count; i += 1) {
    const lv = lvCards[i];
    const lang = langCards && langCards[i];
    if (!lv || !lang) {
      rows.push({ index: i, field: "card", kind: lv ? "MISSING" : "EXTRA" });
      continue;
    }
    LESSON7_DE_FIELDS.forEach((field) => {
      const inLv = Object.prototype.hasOwnProperty.call(lv, field);
      const inLang = Object.prototype.hasOwnProperty.call(lang, field);
      if (!inLv && !inLang) return;
      checked += 1;
      checkedChars += String(lv[field] ?? "").length;
      if (String(lv[field] ?? "") !== String(lang[field] ?? "")) {
        rows.push({ index: i, field, kind: "TEXT", lv: lv[field], lang: lang[field], infinitive: lv.infinitive });
      }
    });
  }
  return { rows, checked, checkedChars };
}

function main() {
  const report = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/de-consistency-audit.json"), "utf8"));
  const languages = report.languages.slice();
  const chars = JSON.parse(execSync("node scripts/audit-de-consistency.js --chars-only", {
    cwd: ROOT,
    encoding: "utf8"
  }).trim().split("\n").pop());
  if (chars.CHECKED_FIELDS !== report.metrics.CHECKED_FIELDS || chars.NOT_VERIFIABLE_CHARS !== report.metrics.NOT_VERIFIABLE_CHARS) {
    throw new Error("chars-only walk does not match the stored audit metrics");
  }
  const coverageChars = Number(((chars.CHECKED_CHARS / (chars.CHECKED_CHARS + chars.NOT_VERIFIABLE_CHARS)) * 100).toFixed(4));

  const otherBuckets = Object.fromEntries(OTHER_CATS.map((name) => [name, []]));
  const fine = {};
  languages.forEach((lang) => {
    fine[lang] = {};
    DATASETS.forEach((dataset) => {
      fine[lang][dataset] = Object.fromEntries([...TEXT_COLUMNS, "UNICODE_ONLY", "MISSING", "EXTRA"].map((name) => [name, 0]));
    });
  });
  report.mismatches.forEach((row) => {
    if (row.kind === "TEXT") {
      const category = fineCategory(row);
      if (!fine[row.language][row.dataset][category] && fine[row.language][row.dataset][category] !== 0) {
        throw new Error(`Bad category ${category}`);
      }
      fine[row.language][row.dataset][category] += 1;
      if (textCategory(row) === "OTHER") otherBuckets[otherCategory(row)].push(row);
      return;
    }
    if (fine[row.language][row.dataset][row.kind] != null) fine[row.language][row.dataset][row.kind] += 1;
  });
  const otherSum = OTHER_CATS.reduce((sum, name) => sum + otherBuckets[name].length, 0);
  if (otherSum !== 1890) throw new Error(`OTHER split ${otherSum} !== 1890`);

  const caseOnly = report.mismatches.filter((row) => row.kind === "TEXT" && textCategory(row) === "CASE_ONLY");
  if (caseOnly.length !== 2548) throw new Error(`CASE_ONLY ${caseOnly.length}`);
  const shapeCount = {};
  caseOnly.forEach((row) => {
    const shape = lvShape(row);
    shapeCount[shape] = (shapeCount[shape] || 0) + 1;
    row.shape = shape;
  });

  const lvIds = loadLvIds();
  const extra = report.mismatches.filter((row) => row.kind === "EXTRA");
  if (extra.length !== 1098) throw new Error(`EXTRA ${extra.length}`);
  const extraByCard = new Map();
  extra.forEach((row) => {
    const key = `${row.language}\u0000${row.dataset}\u0000${row.id}`;
    if (!extraByCard.has(key)) extraByCard.set(key, { language: row.language, dataset: row.dataset, id: row.id, fields: 0, exists: lvIds.has(String(row.id)) });
    extraByCard.get(key).fields += 1;
  });
  const extraCards = [...extraByCard.values()].sort((a, b) => `${a.language}${a.dataset}${a.id}`.localeCompare(`${b.language}${b.dataset}${b.id}`));

  function missingPaths(lang) {
    return report.mismatches
      .filter((row) => row.language === lang && row.dataset === "courseLessons" && row.kind === "MISSING")
      .slice()
      .sort((a, b) => `${a.tree}${a.id}${a.field}`.localeCompare(`${b.tree}${b.id}${b.field}`));
  }
  const frMissing = missingPaths("fr");
  const esMissing = missingPaths("es");
  if (frMissing.length !== 204 || esMissing.length !== 88) {
    throw new Error(`missing counts fr=${frMissing.length} es=${esMissing.length}`);
  }

  const ui = fs.readFileSync(path.join(ROOT, "ui.js"), "utf8");
  const lvLesson7 = extractConstArray(ui, "lesson7ExerciseCards");
  const etLesson7 = extractConstArray(ui, "lesson7ExerciseCardsEt");
  if (!lvLesson7 || !etLesson7) throw new Error("lesson7 consts missing from ui.js");
  const lesson7Rows = [];
  let lesson7Checked = 0;
  let lesson7CheckedChars = 0;
  let lesson7Unchecked = 0;
  let lesson7UncheckedChars = 0;
  const lvLesson7Chars = lesson7Chars(lvLesson7);
  languages.forEach((lang) => {
    ["data", "www"].forEach((tree) => {
      const rel = `${tree === "www" ? "www/" : ""}data/${lang}/courseTrainingCards.js`;
      const fromUi = lang === "et" ? etLesson7 : null;
      if (!fileExists(rel)) {
        if (fromUi) {
          const result = compareLesson7(lvLesson7, fromUi);
          lesson7Checked += result.checked;
          lesson7CheckedChars += result.checkedChars;
          result.rows.forEach((row) => lesson7Rows.push({ language: lang, tree, source: "ui.js", ...row }));
        } else {
          lesson7Unchecked += LESSON7_DE_FIELDS.length * lvLesson7.length;
          lesson7UncheckedChars += lvLesson7Chars;
          lesson7Rows.push({ language: lang, tree, source: "missing-file", kind: "UNCHECKED", chars: lvLesson7Chars });
        }
        return;
      }
      const cards = lesson7FromWindow(loadWindowGlobals(rel));
      if (!cards) {
        lesson7Unchecked += LESSON7_DE_FIELDS.length * lvLesson7.length;
        lesson7UncheckedChars += lvLesson7Chars;
        lesson7Rows.push({ language: lang, tree, source: rel, kind: "UNCHECKED", chars: lvLesson7Chars });
        return;
      }
      const result = compareLesson7(lvLesson7, cards);
      lesson7Checked += result.checked;
      lesson7CheckedChars += result.checkedChars;
      result.rows.forEach((row) => lesson7Rows.push({ language: lang, tree, source: rel, ...row }));
    });
  });

  const lines = [];
  lines.push("# DE consistency analysis 2");
  lines.push("");
  lines.push("Šis fails klasificē `reports/de-consistency-audit.json` un pārrēķina rakstzīmes. Tas neizvēlas pareizo variantu.");
  lines.push("");
  lines.push("## 1. OTHER 1890");
  lines.push("");
  lines.push("Prioritāte: CASE_PLUS_TRAILING_SPACE, CASE_ONLY_OTHER, GERMAN_SENTENCE_DIFFERENT, LATIN_DIACRITIC_DIFF, NUMERIC_OR_SYMBOL, UNCLASSIFIED.");
  lines.push("");
  lines.push("- CASE_PLUS_TRAILING_SPACE: pēc noslēguma tukšumu noņemšanas atlikušajām virknēm atšķiras tikai pirmā rakstzīme, un tikai ar reģistru, un vismaz vienā pusē noslēguma tukšums bija.");
  lines.push("- CASE_ONLY_OTHER: pilnas virknes pēc `toLowerCase()` sakrīt, bet tā nav tikai pirmā burta atšķirība.");
  lines.push("- GERMAN_SENTENCE_DIFFERENT: abās pusēs ir vismaz trīs vārdi ar vismaz trim burtiem, un visi burti ir `A–Z a–z äöüß`.");
  lines.push("- LATIN_DIACRITIC_DIFF: ir latīņu burts ārpus `A–Z a–z äöüß`, un pēc NFD diakritiku noņemšanas un `toLowerCase()` virknes sakrīt.");
  lines.push("- NUMERIC_OR_SYMBOL: pēc ciparu, tukšumu, pieturzīmju un simbolu noņemšanas atlikušie burti sakrīt.");
  lines.push("- UNCLASSIFIED: pārējais.");
  lines.push("");
  lines.push("| kategorija | skaits |");
  lines.push("| --- | ---: |");
  OTHER_CATS.forEach((name) => lines.push(`| ${name} | ${otherBuckets[name].length} |`));
  lines.push(`| SUMMA | ${otherSum} |`);
  lines.push("");
  OTHER_CATS.forEach((name) => {
    const limit = name === "UNCLASSIFIED" ? 30 : 10;
    lines.push(`### ${name}`);
    lines.push("");
    const picked = pick(otherBuckets[name], limit);
    if (!picked.length) lines.push("Piemēru nav.");
    picked.forEach((row) => lines.push(exampleLine(row)));
    lines.push("");
  });

  lines.push("## 2. Valoda × datasets pa veidiem");
  lines.push("");
  lines.push("TEXT ir sadalīts sākotnējās kategorijās, un OTHER ir aizstāts ar sešām apakškategorijām. UNICODE_ONLY, MISSING un EXTRA ir audita veidi. Summa pa visiem TEXT stabiem ir 5428.");
  lines.push("");
  DATASETS.forEach((dataset) => {
    lines.push(`### ${dataset}`);
    lines.push("");
    lines.push(`| valoda | ${TEXT_COLUMNS.join(" | ")} | UNICODE_ONLY | MISSING | EXTRA |`);
    lines.push(`| --- | ${TEXT_COLUMNS.map(() => "---:").join(" | ")} | ---: | ---: | ---: |`);
    languages.forEach((lang) => {
      const row = fine[lang][dataset];
      const cells = [...TEXT_COLUMNS, "UNICODE_ONLY", "MISSING", "EXTRA"].map((name) => row[name]);
      lines.push(`| ${lang} | ${cells.join(" | ")} |`);
    });
    lines.push("");
  });

  lines.push("## 3. CASE_ONLY 2548");
  lines.push("");
  lines.push("Forma ir noteikta no LV vērtības, nevis no tā, kurš variants ir pareizs. SENTENCE_START: ir `.!?` vai vismaz pieci vārdi. LIST_OR_DICTIONARY: lauks ir `kurss-example` vai LV virkne sākas ar `der/die/das/ein/eine/ihn/ihm/ihr/wir/du/ich/sie/es`. OTHER_SHAPE: pārējās CASE_ONLY rindas, piemēram id.");
  lines.push("");
  lines.push("| forma | skaits |");
  lines.push("| --- | ---: |");
  ["LIST_OR_DICTIONARY", "SENTENCE_START", "OTHER_SHAPE"].forEach((name) => {
    lines.push(`| ${name} | ${shapeCount[name] || 0} |`);
  });
  lines.push("");
  DATASETS.forEach((dataset) => {
    const rows = languages.map((lang) => {
      const count = caseOnly.filter((row) => row.language === lang && row.dataset === dataset).length;
      return count ? `| ${lang} | ${count} |` : null;
    }).filter(Boolean);
    if (!rows.length) return;
    lines.push(`### ${dataset}`);
    lines.push("");
    lines.push("| valoda | CASE_ONLY |");
    lines.push("| --- | ---: |");
    lines.push(...rows);
    lines.push("");
  });
  lines.push("### 20 piemēri");
  lines.push("");
  pick(caseOnly, 20).forEach((row) => lines.push(exampleLine(row, `forma=\`${row.shape}\``)));
  lines.push("");

  lines.push("## 4. fr 204 un es 88 MISSING courseLessons");
  lines.push("");
  lines.push("Skaiti ir `data` + `www`. `langValue` visās šajās rindās ir `null`. LV vērtība ir izvilktais DE segments. Tās nav tukšas virknes esošā laukā: valodas HTML ir īsāks `kurss-example` saraksts, tāpēc augstākie indeksi LV pusē neeksistē mērķa failā.");
  lines.push("");
  [["fr", frMissing], ["es", esMissing]].forEach(([lang, rows]) => {
    const empty = rows.filter((row) => row.lvValue == null || String(row.lvValue) === "").length;
    const trees = [...new Set(rows.map((row) => row.tree))].sort();
    lines.push(`### ${lang}`);
    lines.push("");
    lines.push(`Rindas: ${rows.length}. Koki: ${trees.join(", ")}. LV tukšas vērtības: ${empty}. LV ne-tukšas: ${rows.length - empty}.`);
    lines.push("");
    rows.forEach((row) => {
      lines.push(`- \`${row.tree}\` \`${row.id}\` \`${row.field}\` LV_NONEMPTY=${row.lvValue != null && String(row.lvValue) !== ""} LV=${cell(row.lvValue)}`);
    });
    lines.push("");
  });

  lines.push("## 5. EXTRA 1098");
  lines.push("");
  lines.push("Kartītes id ir audita rindas `id`. LV id kopa ir `data/a1.js`–`data/c2.js` `id` un `study.id`. Ja id ir šajā kopā, kartīte LV eksistē un EXTRA ir papildu lauks. Ja nav, pāris pēc `de`+`level` neatbilda LV kartītei.");
  lines.push("");
  lines.push(`Unikālas valoda+datasets+id grupas: ${extraCards.length}. No tām A1–C2 id vai study.id eksistē: ${extraCards.filter((row) => row.exists).length}. Šajā kopā nav: ${extraCards.filter((row) => !row.exists).length}.`);
  lines.push("");
  lines.push("`cs` / `courseLessons` / `kurssPronounsLesson` nav A1–C2 id. Tā ir LV `COURSE_LESSON_HTML` atslēga. `1443:Pfahlbau` ir pozīcijas id `indekss:de`. LV `data/b2.js` ieraksts ar `de=Pfahlbau` ir, tam nav `id` un `study.id`, un LV `de_plural` nav. EXTRA šajās grupās ir papildu lauks, ne jauna kartīte bez LV vārda.");
  lines.push("");
  lines.push("| valoda | dataset | id | EXTRA lauki | LV id eksistē |");
  lines.push("| --- | --- | --- | ---: | --- |");
  extraCards.forEach((row) => lines.push(`| ${row.language} | ${row.dataset} | ${row.id} | ${row.fields} | ${row.exists} |`));
  lines.push("");
  lines.push("### 20 piemēri");
  lines.push("");
  pick(extra, 20).forEach((row) => lines.push(exampleLine(row, `lvIdExists=${lvIds.has(String(row.id))}`)));
  lines.push("");

  lines.push("## 6. COVERAGE_CHARS");
  lines.push("");
  lines.push("CHECKED_CHARS ir LV vērtības JavaScript garums katrā `addCompare` izsaukumā `data` un `www` kokos. Tas ir tas pats gājiens, kas deva CHECKED_FIELDS. NOT_VERIFIABLE_CHARS ir no saglabātā audita.");
  lines.push("");
  lines.push(`CHECKED_CHARS = ${chars.CHECKED_CHARS}`);
  lines.push(`NOT_VERIFIABLE_CHARS = ${chars.NOT_VERIFIABLE_CHARS}`);
  lines.push(`COVERAGE_CHARS = ${chars.CHECKED_CHARS} / (${chars.CHECKED_CHARS} + ${chars.NOT_VERIFIABLE_CHARS}) = ${coverageChars}`);
  lines.push("");
  lines.push("lesson7 DE lauki šajā skaitlī nav, jo sākotnējais audits tos nesalīdzināja. To atsevišķais apjoms ir 8. sadaļā.");
  lines.push("");

  lines.push("## 7. dialogueIdMap lauks lv");
  lines.push("");
  lines.push("`languages/data-loader.js` `lv` lauku nelasa. Tas tikai ielādē dataset skriptu. `ui.js` `DIALOGUE_ID_MAP` nolasa tikai `migrateSarunasProgress`: `mapped.lv` ieiet saglabātajā progresa atslēgā `Sätze:${mapped.de}:${mapped.lv}`. Šī funkcija tekstu neieraksta `innerHTML` un `textContent`.");
  lines.push("");
  lines.push("Redzamās teikumu kartītes nāk no `sentences.js` caur `getSentenceEntries`: ekrānā nonāk šo ierakstu `de` un `lv`, nevis `dialogueIdMap.lv`. `lt` un `uk` `sentences.js` ir savs fails, tāpēc fallback uz LV `dialogueIdMap.js` neaizstāj redzamo teikuma tulkojumu. Fallback ieliek latviešu `lv` virkni tikai vecā `Sarunas` progresa migrācijas atslēgā, ja šī migrācija notiek.");
  lines.push("");

  lines.push("## 8. lesson7ExerciseCards");
  lines.push("");
  lines.push("Sākotnējais audits salīdzināja `lesson1`–`lesson6` training `back` laukus. `lesson7ExerciseCards` DE lauki `infinitive`, `du`, `ihr`, `sie` tur nebija. `lv` ir dzimtās valodas glosa, ne DE lauks. Šajā analīzē tie DE lauki ir salīdzināti exact-match pret `ui.js` `const lesson7ExerciseCards`.");
  lines.push("");
  lines.push("`ui.js` satur `lesson7ExerciseCards` un `lesson7ExerciseCardsEt`. Pārējās valodas ir `data/{lang}/courseTrainingCards.js` un `www` spogulī. `data-loader.js` šo failu ielādē tikai fiksētajam sarakstam pie `courseLessons`. Sarakstā nav `pl`, `ro`, `bg`, `gr`, `tr`, `sq`, `mk`, `et`. `et` kartītes tomēr ir `ui.js` konstante, un `getExerciseSourceCards` to izmanto. Minētajām septiņām valodām ielādētājs failu neielādē, tāpēc izpildes laikā `getExerciseSourceCards` nokrīt uz LV `lesson7ExerciseCards`: lietotājs redz LV glosu `lv` un LV DE formas, nevis neielādētā faila saturu.");
  lines.push("");
  lines.push(`Salīdzināti lauki: ${lesson7Checked}. Salīdzinātās LV rakstzīmes: ${lesson7CheckedChars}. Nesakritības: ${lesson7Rows.filter((row) => row.kind === "TEXT" || row.kind === "MISSING" || row.kind === "EXTRA").length}. Nepārbaudīti lauki: ${lesson7Unchecked}. Nepārbaudītās LV rakstzīmes: ${lesson7UncheckedChars}.`);
  lines.push("");
  const lesson7Problems = lesson7Rows.filter((row) => row.kind !== "UNCHECKED");
  if (!lesson7Problems.length) lines.push("Salīdzinātajās valodās `infinitive`, `du`, `ihr` un `sie` sakrīt ar LV.");
  lesson7Problems.slice(0, 30).forEach((row) => {
    lines.push(`- ${row.language} \`${row.tree}\` \`${row.source}\` [${row.index}].${row.field} ${row.kind} LV=${cell(row.lv)} LANG=${cell(row.lang)}`);
  });
  const uncheckedLangs = [...new Set(lesson7Rows.filter((row) => row.kind === "UNCHECKED").map((row) => row.language))].sort();
  lines.push("");
  lines.push(`Valodas bez lesson7 klāja failā: ${uncheckedLangs.length ? uncheckedLangs.join(", ") : "nav"}.`);
  lines.push("");
  lines.push("STAGE RESULT: PASS");
  lines.push("");

  fs.writeFileSync(OUT, `${lines.join("\n")}`);
  process.stdout.write(`${JSON.stringify({
    otherSum,
    other: Object.fromEntries(OTHER_CATS.map((name) => [name, otherBuckets[name].length])),
    caseOnly: caseOnly.length,
    shapes: shapeCount,
    extra: extra.length,
    extraCards: extraCards.length,
    extraCardsInLv: extraCards.filter((row) => row.exists).length,
    frMissing: frMissing.length,
    esMissing: esMissing.length,
    coverageChars,
    checkedChars: chars.CHECKED_CHARS,
    lesson7Checked,
    lesson7Problems: lesson7Problems.length,
    lesson7Unchecked
  })}\n`);
}

main();
