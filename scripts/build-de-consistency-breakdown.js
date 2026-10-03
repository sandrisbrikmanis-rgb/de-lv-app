#!/usr/bin/env node
/**
 * Deterministic breakdown of reports/de-consistency-audit.json.
 * Does not reload production data and does not classify a value as correct.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const SOURCE = path.join(ROOT, "reports/de-consistency-audit.json");
const OUT = path.join(ROOT, "reports/de-consistency-breakdown.md");
const DATASETS = [
  "a1", "a2", "b1", "b2", "c1", "c2",
  "sentences", "verbs", "courseLessons", "courseTrainingCards",
  "nounArticles", "dialogueIdMap"
];
const TEXT_CATS = ["CASE_ONLY", "PUNCT_OR_SPACE_ONLY", "TRANSLATED_GERMAN", "FOREIGN_SCRIPT", "OTHER"];
const GERMAN_HINT = /\b(der|die|das|den|dem|des|ein|eine|einer|einem|einen|eines|und|oder|ich|du|er|sie|es|wir|ihr|ist|sind|nicht|auch|auf|mit|von|zu|im|am|für|aber|dass|nach|bei|aus|hat|haben|wird|werden)\b/u;

function fold(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .replace(/<[^>]+>/g, "")
    .replace(/\([^)]*\)/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(value) {
  return [...new Set(value.match(/\p{L}{3,}/gu) || [])];
}

function jaccard(left, right) {
  if (!left.length || !right.length) return null;
  const rightSet = new Set(right);
  const inter = left.filter((token) => rightSet.has(token)).length;
  return inter / new Set([...left, ...right]).size;
}

function nonGermanLetter(value) {
  return [...String(value ?? "")].some((ch) => /\p{L}/u.test(ch) && !/[A-Za-zÄÖÜäöüß]/.test(ch));
}

function isCaseOnly(lv, lang) {
  const a = String(lv ?? "");
  const b = String(lang ?? "");
  if (!a.length || a.length !== b.length || a === b) return false;
  if (a.slice(1) !== b.slice(1)) return false;
  return a[0] !== b[0] && a[0].toLowerCase() === b[0].toLowerCase();
}

function isPunctOrSpaceOnly(lv, lang) {
  const strip = (value) => String(value ?? "").replace(/[\s\p{P}\p{S}]/gu, "");
  const a = strip(lv);
  const b = strip(lang);
  return a.length > 0 && a === b;
}

function isIdPair(lv, lang) {
  const idRe = /^[a-z0-9]+(?:-[a-z0-9]+)+$/;
  return idRe.test(fold(lv)) && idRe.test(fold(lang));
}

function textCategory(row) {
  if (row.foreignScript) return "FOREIGN_SCRIPT";
  if (isCaseOnly(row.lvValue, row.langValue)) return "CASE_ONLY";
  if (isPunctOrSpaceOnly(row.lvValue, row.langValue)) return "PUNCT_OR_SPACE_ONLY";
  const lvFold = fold(row.lvValue);
  const langFold = fold(row.langValue);
  const score = jaccard(tokens(lvFold), tokens(langFold));
  const translated = lvFold !== langFold && !isIdPair(row.lvValue, row.langValue) && (
    nonGermanLetter(row.langValue) || (score != null && score < 0.25 && !GERMAN_HINT.test(langFold))
  );
  if (translated) return "TRANSLATED_GERMAN";
  return "OTHER";
}

function cmp(a, b) {
  return JSON.stringify(a).localeCompare(JSON.stringify(b));
}

function rowSort(a, b) {
  return [a.language, a.dataset, a.tree, a.id, a.field, String(a.lvValue), String(a.langValue)]
    .join("\0")
    .localeCompare([b.language, b.dataset, b.tree, b.id, b.field, String(b.lvValue), String(b.langValue)].join("\0"));
}

function contentKey(row) {
  return [row.language, row.dataset, row.id, row.field, String(row.lvValue), String(row.langValue)].join("\0");
}

function pick(rows, limit) {
  const sorted = rows.slice().sort(rowSort);
  const picked = [];
  const used = new Set();
  const perLang = new Map();
  for (let pass = 0; pass < 4 && picked.length < limit; pass += 1) {
    sorted.forEach((row) => {
      if (picked.length >= limit) return;
      const key = contentKey(row);
      if (used.has(key)) return;
      const seen = perLang.get(row.language) || 0;
      if (seen > pass) return;
      used.add(key);
      perLang.set(row.language, seen + 1);
      picked.push(row);
    });
  }
  return picked;
}

function cell(value) {
  return `\`${JSON.stringify(value)}\``;
}

function exampleLines(rows) {
  if (!rows.length) return ["Piemēru nav."];
  return rows.map((row) => (
    `- ${row.language} \`${row.dataset}\` \`${row.id}\` \`${row.field}\` koks=\`${row.tree}\` LV=${cell(row.lvValue)} LANG=${cell(row.langValue)}`
  ));
}

function anomalyLines(rows) {
  if (!rows.length) return ["Piemēru nav."];
  return rows.map((row) => (
    `- \`${row.kind}\` līmenis=\`${row.level}\` indekss=\`${row.index}\` de=${cell(row.de)} detail=${cell(row.detail)}`
  ));
}

function main() {
  const report = JSON.parse(fs.readFileSync(SOURCE, "utf8"));
  const languages = report.languages.slice();
  const mismatches = report.mismatches.slice();
  const byText = Object.fromEntries(TEXT_CATS.map((name) => [name, []]));
  const kindByLangDataset = {};
  languages.forEach((lang) => {
    kindByLangDataset[lang] = {};
    DATASETS.forEach((dataset) => {
      kindByLangDataset[lang][dataset] = { TEXT: 0, UNICODE_ONLY: 0, MISSING: 0, EXTRA: 0, ORDER: 0 };
    });
  });
  mismatches.forEach((row) => {
    if (!kindByLangDataset[row.language] || !kindByLangDataset[row.language][row.dataset]) {
      throw new Error(`Unexpected mismatch key ${row.language} ${row.dataset}`);
    }
    if (kindByLangDataset[row.language][row.dataset][row.kind] == null) {
      throw new Error(`Unexpected kind ${row.kind}`);
    }
    kindByLangDataset[row.language][row.dataset][row.kind] += 1;
    if (row.kind === "TEXT") byText[textCategory(row)].push(row);
  });

  const textSum = TEXT_CATS.reduce((sum, name) => sum + byText[name].length, 0);
  if (textSum !== report.metrics.TEXT) {
    throw new Error(`TEXT split ${textSum} !== ${report.metrics.TEXT}`);
  }
  const kindTotals = { TEXT: 0, UNICODE_ONLY: 0, MISSING: 0, EXTRA: 0, ORDER: 0 };
  languages.forEach((lang) => {
    DATASETS.forEach((dataset) => {
      Object.keys(kindTotals).forEach((kind) => {
        kindTotals[kind] += kindByLangDataset[lang][dataset][kind];
      });
    });
  });
  ["TEXT", "UNICODE_ONLY", "MISSING", "EXTRA", "ORDER"].forEach((kind) => {
    if (kindTotals[kind] !== report.metrics[kind]) {
      throw new Error(`${kind} table ${kindTotals[kind]} !== ${report.metrics[kind]}`);
    }
  });

  let notVerifiable = 0;
  let notVerifiableChars = 0;
  const nvByLang = {};
  const nvByDataset = Object.fromEntries(DATASETS.map((dataset) => [dataset, { fields: 0, chars: 0 }]));
  languages.forEach((lang) => {
    nvByLang[lang] = { fields: 0, chars: 0 };
    DATASETS.forEach((dataset) => {
      const row = report.summary[lang][dataset];
      nvByLang[lang].fields += row.notVerifiable;
      nvByLang[lang].chars += row.notVerifiableChars;
      nvByDataset[dataset].fields += row.notVerifiable;
      nvByDataset[dataset].chars += row.notVerifiableChars;
      notVerifiable += row.notVerifiable;
      notVerifiableChars += row.notVerifiableChars;
    });
  });
  if (notVerifiable !== report.metrics.NOT_VERIFIABLE || notVerifiableChars !== report.metrics.NOT_VERIFIABLE_CHARS) {
    throw new Error("NOT_VERIFIABLE summary does not match metrics");
  }
  const coverageFields = Number(((report.metrics.CHECKED_FIELDS / (report.metrics.CHECKED_FIELDS + notVerifiable)) * 100).toFixed(4));
  if (coverageFields !== report.metrics.COVERAGE) {
    throw new Error(`COVERAGE_FIELDS ${coverageFields} !== ${report.metrics.COVERAGE}`);
  }

  const anomalyGroups = {};
  report.lvAnomalies.forEach((row) => {
    if (!anomalyGroups[row.kind]) anomalyGroups[row.kind] = [];
    anomalyGroups[row.kind].push(row);
  });
  const anomalyKinds = Object.keys(anomalyGroups).sort();
  const anomalySum = anomalyKinds.reduce((sum, kind) => sum + anomalyGroups[kind].length, 0);
  if (anomalySum !== report.lvAnomalies.length) throw new Error("Anomaly split mismatch");

  const missing = mismatches.filter((row) => row.kind === "MISSING");
  const extra = mismatches.filter((row) => row.kind === "EXTRA");

  const lines = [];
  lines.push("# DE consistency breakdown");
  lines.push("");
  lines.push("Šis sadalījums klasificē esošā `reports/de-consistency-audit.json` rindas. Tas neizvēlas pareizo variantu un nepierāda DE pareizību.");
  lines.push("");
  lines.push(`Avots: ORIGIN_MAIN_SHA \`${report.baseline.originMainSha}\`, MASTER ${report.baseline.masterVersion}, audita datums ${report.baseline.date}, verdikts \`${report.verdict}\`.`);
  lines.push("");
  lines.push("## a) Valoda × datasets");
  lines.push("");
  lines.push("Skaiti ir visu koku (`data`, `www`, `mirror`) summa, tāpēc TEXT, UNICODE_ONLY, MISSING un EXTRA sakrīt ar audita metrikām. NOT_VERIFIABLE ir tikai `data` + `www`, kā audita metrikā. Tukšas kombinācijas ir 0.");
  lines.push("");
  DATASETS.forEach((dataset) => {
    lines.push(`### ${dataset}`);
    lines.push("");
    lines.push("| valoda | TEXT | UNICODE_ONLY | MISSING | EXTRA | NOT_VERIFIABLE | NOT_VERIFIABLE_CHARS |");
    lines.push("| --- | ---: | ---: | ---: | ---: | ---: | ---: |");
    languages.forEach((lang) => {
      const counts = kindByLangDataset[lang][dataset];
      const nv = report.summary[lang][dataset];
      lines.push(`| ${lang} | ${counts.TEXT} | ${counts.UNICODE_ONLY} | ${counts.MISSING} | ${counts.EXTRA} | ${nv.notVerifiable} | ${nv.notVerifiableChars} |`);
    });
    lines.push("");
  });

  lines.push("## b) TEXT sadalījums");
  lines.push("");
  lines.push("Prioritāte ir viena, bez pārklāšanās: FOREIGN_SCRIPT, tad CASE_ONLY, tad PUNCT_OR_SPACE_ONLY, tad TRANSLATED_GERMAN, pārējais ir OTHER.");
  lines.push("");
  lines.push("- FOREIGN_SCRIPT: audita lauks `foreignScript` nav tukšs (mērķa vērtībā ir alfabēts, kura nav LV vērtībā).");
  lines.push("- CASE_ONLY: virknēm ir vienāds garums, atšķiras tikai pirmā koda vienība, un tā atšķiras tikai ar reģistru.");
  lines.push("- PUNCT_OR_SPACE_ONLY: pēc tukšumu, `\\p{P}` un `\\p{S}` izņemšanas atlikušās rakstzīmes sakrīt, ieskaitot reģistru.");
  lines.push("- TRANSLATED_GERMAN: pēc NFKC, HTML tagu un apaļo iekavu grupu noņemšanas, reģistra salikuma un malu tukšumu savilkšanas virknes atšķiras, pāris nav identifikators `a1-liter` formā, un vai nu LANG satur burtu ārpus `A–Z a–z äöüß`, vai arī vārdu (vismaz 3 burti) Jaccard ir mazāks par 0.25 un LANG nesatur vācu funkcijas vārdu no fiksētā saraksta (`der/die/das/ein/...`, `ich/er/ist/und/...`).");
  lines.push("- OTHER: visas atlikušās TEXT rindas.");
  lines.push("");
  lines.push("| kategorija | skaits |");
  lines.push("| --- | ---: |");
  TEXT_CATS.forEach((name) => lines.push(`| ${name} | ${byText[name].length} |`));
  lines.push(`| SUMMA | ${textSum} |`);
  lines.push("");
  TEXT_CATS.forEach((name) => {
    const limit = name === "OTHER" ? 20 : 10;
    lines.push(`### ${name} (${byText[name].length})`);
    lines.push("");
    lines.push(...exampleLines(pick(byText[name], limit)));
    lines.push("");
  });

  lines.push("## c) MISSING un EXTRA");
  lines.push("");
  lines.push(`MISSING ${missing.length}. EXTRA ${extra.length}. Skaiti iekļauj \`data\`, \`www\` un \`mirror\`.`);
  lines.push("");
  ["MISSING", "EXTRA"].forEach((kind) => {
    lines.push(`### ${kind} pa valodām un datasetiem`);
    lines.push("");
    lines.push("| valoda | " + DATASETS.join(" | ") + " |");
    lines.push("| --- | " + DATASETS.map(() => "---:").join(" | ") + " |");
    languages.forEach((lang) => {
      const cells = DATASETS.map((dataset) => kindByLangDataset[lang][dataset][kind]);
      if (cells.every((value) => value === 0)) return;
      lines.push(`| ${lang} | ${cells.join(" | ")} |`);
    });
    lines.push("");
    lines.push(`### ${kind} piemēri`);
    lines.push("");
    lines.push(...exampleLines(pick(kind === "MISSING" ? missing : extra, 10)));
    lines.push("");
  });

  lines.push("## d) LV anomālijas");
  lines.push("");
  lines.push(`Kopā ${anomalySum}. ARTICLE_OUTSIDE_SET un PLURAL_WITHOUT_DIE šajā JSON ir 0, tāpēc tās neietilpst 618.`);
  lines.push("");
  lines.push("| kategorija | skaits |");
  lines.push("| --- | ---: |");
  anomalyKinds.forEach((kind) => lines.push(`| ${kind} | ${anomalyGroups[kind].length} |`));
  lines.push(`| SUMMA | ${anomalySum} |`);
  lines.push("");
  anomalyKinds.forEach((kind) => {
    const rows = anomalyGroups[kind].slice().sort(cmp);
    lines.push(`### ${kind}`);
    lines.push("");
    lines.push(...anomalyLines(rows.slice(0, 10)));
    lines.push("");
  });

  lines.push("## e) Trūkstošo failu ielāde");
  lines.push("");
  lines.push("`languages/datasets.js` `DATASET_DEFINITIONS` iekļauj `nounArticles` (`./data/nounArticles.js`) un `dialogueIdMap` (`./data/dialogueIdMap.js`). `courseTrainingCards` šajā reģistrā nav.");
  lines.push("");
  lines.push("`languages/data-loader.js` `resolveDatasetPath` vispirms pārbauda manifesta primāro ceļu. Ja tā nav vai `HEAD` neatgriež failu, tas ņem `fallbackDatasets[dataset]`, vai arī `AppDatasetRegistry.getLvPath(dataset)`. `lt` manifestā `nounArticles` un `dialogueIdMap` ir tikai `fallbackDatasets` ar `./data/nounArticles.js` un `./data/dialogueIdMap.js`. `uk` manifestā primārie ceļi ir `./data/uk/nounArticles.js` un `./data/uk/dialogueIdMap.js`, bet šo failu nav; `fallbackDatasets` norāda uz tiem pašiem LV failiem. Abām valodām loaderis aizstāj trūkstošo datasetu ar LV failu.");
  lines.push("");
  lines.push("`et` `courseTrainingCards.js` nav ne `data/et/`, ne `www/data/et/`. `loadNativeLanguageData` ielādē `./data/{valoda}/courseTrainingCards.js` tikai tad, ja fails eksistē un valoda ir fiksētajā sarakstā pie `courseLessons` ielādes. `et` šajā sarakstā nav, un atsevišķa LV `data/courseTrainingCards.js` fallback ceļa nav. `ui.js` `getCourseTranslateCards` et valodai ņem `lessonNTrainingCardsEt`, ja globals eksistē; ja ne, ņem `ui.js` iekšējos `lesson1TrainingCards` … `lesson6TrainingCards`. Tātad et treniņa kartītes lietotnē aizstāj LV kartītes no `ui.js`, nevis data-loader LV datu fails.");
  lines.push("");
  lines.push("## f) lesson7 training cards");
  lines.push("");
  lines.push("`ui.js` satur `const lesson1TrainingCards` līdz `const lesson6TrainingCards`. `lesson7TrainingCards` šajā failā nav, tāpēc audita etalonā lesson7 klāja nav un tā netika salīdzināta. `getCourseTranslateCards` arī uzskaita tikai lesson1–lesson6. `lesson7ExerciseCards*` ir cits globals vingrinājumu kartītēm, un training-card salīdzinājums to neizmanto.");
  lines.push("");
  lines.push("## g) NOT_VERIFIABLE un coverage");
  lines.push("");
  lines.push("| valoda | lauki | rakstzīmes |");
  lines.push("| --- | ---: | ---: |");
  languages.forEach((lang) => lines.push(`| ${lang} | ${nvByLang[lang].fields} | ${nvByLang[lang].chars} |`));
  lines.push(`| SUMMA | ${notVerifiable} | ${notVerifiableChars} |`);
  lines.push("");
  lines.push("| datasets | lauki | rakstzīmes |");
  lines.push("| --- | ---: | ---: |");
  DATASETS.forEach((dataset) => lines.push(`| ${dataset} | ${nvByDataset[dataset].fields} | ${nvByDataset[dataset].chars} |`));
  lines.push("");
  lines.push(`COVERAGE_FIELDS = CHECKED_FIELDS / (CHECKED_FIELDS + NOT_VERIFIABLE) = ${report.metrics.CHECKED_FIELDS} / (${report.metrics.CHECKED_FIELDS} + ${notVerifiable}) = ${coverageFields}.`);
  lines.push("");
  lines.push("COVERAGE_CHARS no šī JSON nav aprēķināms: ir `NOT_VERIFIABLE_CHARS`, bet nav pārbaudīto DE lauku rakstzīmju summas.");
  lines.push("");
  lines.push("## h) legacyHtml DE izvilkšana");
  lines.push("");
  lines.push("Katram `COURSE_LESSON_HTML` atslēgas HTML tiek ņemts katras `<div class=\"kurss-example\">` iekšējais teksts un katrs `<strong>` iekš `<div class=\"lesson1-conjugation\">`, salīdzinot ar LV pēc sākotnējā indeksa. Ja LV virknē ir `–` vai `—`, vai defise ar tukšumu abās pusēs, DE vērtība ir precīzs griezums pirms šī atdalītāja. Ja tāda atdalītāja nav, bet ir `→` un LV virknē nav latviešu diakritikas `āčēģīķļņšūž` (arī lielajiem burtiem), DE vērtība ir precīzs griezums aiz `→`. Ja nav atdalītāja, diakritikas un sveša alfabēta, visa virkne ir DE vērtība. Ja izvilktajā LV DE pusē tomēr ir latviešu diakritika vai svešs alfabēts, lauks ir NOT_VERIFIABLE. Skaidrojums ar latviešu diakritiku un bez `–`/`—`/`→` nav DE lauks. HTML ārpus šo divu veidu iekšējiem tekstiem paliek NOT_VERIFIABLE; tā rakstzīmju skaits ir HTML garums mīnus piemēru iekšienes un `<strong>` iekšienes garumi. Salīdzinājums ir exact-match, bez normalizācijas.");
  lines.push("");
  lines.push("STAGE RESULT: PARTIAL");
  lines.push("");

  fs.writeFileSync(OUT, lines.join("\n"));
  process.stdout.write(JSON.stringify({
    text: TEXT_CATS.reduce((acc, name) => { acc[name] = byText[name].length; return acc; }, {}),
    textSum,
    missing: missing.length,
    extra: extra.length,
    anomalies: anomalySum,
    notVerifiable,
    notVerifiableChars,
    coverageFields,
    coverageChars: null
  }) + "\n");
}

main();
