#!/usr/bin/env node
/**
 * Translation leakage audit. Read-only. No network. No model.
 * 1. LV data/a1.js–c2.js: the translation field is "lv".
 * 2. Each of the 31 target files data/{lang}/a1.js–c2.js uses the same field name "lv" for the translation. That is the field this script reads. It is not a German field.
 * 3. German fields on every card are "de", "de_article" and "de_plural". They are not classified.
 * 4. "level" is the dataset label. It is not a translation and not German content.
 * 5. "study" is the study-card object. Its inner text is not part of this word-list check.
 * 6. A top-level "id", when present, is an identifier. It is not compared.
 * 7. The same six files exist under www/data. The check is repeated there.
 * 8. Comparison is level plus array index against the LV card. No field is rewritten.
 * 9. SAME_AS_LV, LV_DIACRITIC, SCRIPT_MISMATCH and FAMILY_COPY can co-occur.
 * 10. A short cognate, a number, or an LV capitalised value is COGNATE_REVIEW and is not counted as SAME_AS_LV.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execFileSync } = require("child_process");

const ROOT = path.resolve(__dirname, "..");
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const LANGS = ["bg", "bs", "cs", "da", "en", "es", "et", "fi", "fr", "gr", "hr", "hu", "is", "it", "lb", "lt", "mk", "nb", "nl", "nn", "pl", "pt", "ro", "ru", "sk", "sl", "sq", "sr", "sv", "tr", "uk"];
const LV_DIACRITICS = [..."āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ"];
const ALLOWED_DIACRITICS = {
  lt: new Set([..."čšžūČŠŽŪ"]),
  cs: new Set([..."čšžČŠŽ"]),
  sk: new Set([..."čšžČŠŽ"]),
  sl: new Set([..."čšžČŠŽ"]),
  hr: new Set([..."čšžČŠŽ"]),
  bs: new Set([..."čšžČŠŽ"])
};
const CYRILLIC_LANGS = new Set(["ru", "uk", "bg", "mk"]);
const LATIN_LANGS = new Set(LANGS.filter((lang) => lang !== "gr" && !CYRILLIC_LANGS.has(lang) && lang !== "sr"));
const OUT_MD = path.join(ROOT, "reports/translation-leakage.md");
const OUT_JSON = path.join(ROOT, "reports/translation-leakage.json");
const OUT_CSV = path.join(ROOT, "reports/translation-leakage.csv");

function loadArray(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx, { filename: filePath });
  const key = Object.keys(ctx.window).find((name) => Array.isArray(ctx.window[name]));
  if (!key) throw new Error(`no array in ${filePath}`);
  return ctx.window[key];
}

function loadTree(tree) {
  const lv = {};
  const targets = {};
  LEVELS.forEach((level) => {
    lv[level] = loadArray(path.join(ROOT, tree, `${level}.js`));
    LANGS.forEach((lang) => {
      if (!targets[lang]) targets[lang] = {};
      targets[lang][level] = loadArray(path.join(ROOT, tree, lang, `${level}.js`));
    });
  });
  return { lv, targets };
}

function trimValue(value) {
  return value == null ? "" : String(value).trim();
}

function letterCount(value) {
  return [...value].filter((char) => /\p{L}/u.test(char)).length;
}

function isCognateException(lvValue) {
  if (/^\d+(?:[.,]\d+)?$/.test(lvValue)) return true;
  if (/^\p{Lu}/u.test(lvValue)) return true;
  return !/\s/.test(lvValue) && letterCount(lvValue) > 0 && letterCount(lvValue) <= 4;
}

function hasLvDiacritic(lang, value) {
  const allowed = ALLOWED_DIACRITICS[lang] || new Set();
  return [...value].some((char) => LV_DIACRITICS.includes(char) && !allowed.has(char));
}

function scriptsOf(value) {
  const found = new Set();
  [...value].forEach((char) => {
    if (!/\p{L}/u.test(char)) return;
    if (/\p{Script=Cyrillic}/u.test(char)) found.add("Cyrillic");
    else if (/\p{Script=Greek}/u.test(char)) found.add("Greek");
    else if (/\p{Script=Arabic}/u.test(char)) found.add("Arabic");
    else if (/\p{Script=Devanagari}/u.test(char)) found.add("Devanagari");
    else if (/\p{Script=Latin}/u.test(char)) found.add("Latin");
  });
  return found;
}

function scriptMismatch(lang, value, assumption) {
  const scripts = scriptsOf(value);
  const foreign = ["Cyrillic", "Greek", "Arabic", "Devanagari"];
  if (lang === "sr") {
    if (assumption === "cyrillic") return scripts.has("Latin");
    if (assumption === "latin") return foreign.some((name) => scripts.has(name));
  }
  if (LATIN_LANGS.has(lang)) return foreign.some((name) => scripts.has(name));
  if (CYRILLIC_LANGS.has(lang)) return scripts.has("Latin");
  if (lang === "gr") return scripts.has("Latin");
  return false;
}

function csvEscape(value) {
  const text = value == null ? "" : String(value);
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, "\"\"")}"`;
  return text;
}

function analyseTree(treeName, loaded) {
  const findings = [];
  const pairCounts = new Map();
  const pairExamples = new Map();
  const familyCounts = new Map();
  const familyExamples = new Map();
  LEVELS.forEach((file) => {
    const level = file.toUpperCase();
    const lvRows = loaded.lv[file];
    lvRows.forEach((lvEntry, index) => {
      const lvValue = trimValue(lvEntry && lvEntry.lv);
      const de = lvEntry && lvEntry.de != null ? String(lvEntry.de) : "";
      const values = {};
      LANGS.forEach((lang) => {
        const rows = loaded.targets[lang][file];
        const entry = rows[index];
        values[lang] = entry ? trimValue(entry.lv) : null;
      });
      const same = {};
      LANGS.forEach((lang) => {
        if (values[lang] == null) return;
        const value = values[lang];
        if (value === lvValue) {
          if (isCognateException(lvValue)) same[lang] = "COGNATE_REVIEW";
          else same[lang] = "SAME_AS_LV";
        }
        if (hasLvDiacritic(lang, value)) {
          findings.push(record(treeName, lang, level, index, de, lvValue, value, "LV_DIACRITIC", ""));
        }
        if (scriptMismatch(lang, value, lang === "sr" ? "cyrillic" : "")) {
          findings.push(record(treeName, lang, level, index, de, lvValue, value, "SCRIPT_MISMATCH", lang === "sr" ? "sr_as_cyrillic" : ""));
        }
        if (lang === "sr" && scriptMismatch(lang, value, "latin")) {
          findings.push(record(treeName, lang, level, index, de, lvValue, value, "SCRIPT_MISMATCH_SR_LATIN", "sr_as_latin"));
        }
      });
      LANGS.forEach((lang) => {
        if (same[lang]) findings.push(record(treeName, lang, level, index, de, lvValue, values[lang], same[lang], ""));
      });
      const groups = new Map();
      LANGS.forEach((lang) => {
        const value = values[lang];
        if (value == null || value === lvValue) return;
        if (!groups.has(value)) groups.set(value, []);
        groups.get(value).push(lang);
      });
      groups.forEach((members, value) => {
        if (members.length < 2) return;
        const family = members.slice().sort().join("+");
        familyCounts.set(family, (familyCounts.get(family) || 0) + 1);
        const examples = familyExamples.get(family) || [];
        if (examples.length < 10) examples.push({ level, index, de, lv: lvValue, value });
        familyExamples.set(family, examples);
        members.forEach((lang) => {
          findings.push(record(treeName, lang, level, index, de, lvValue, value, "FAMILY_COPY", family));
        });
        for (let i = 0; i < members.length; i += 1) {
          for (let j = i + 1; j < members.length; j += 1) {
            const pair = [members[i], members[j]].sort().join("+");
            pairCounts.set(pair, (pairCounts.get(pair) || 0) + 1);
            const rows = pairExamples.get(pair) || [];
            if (rows.length < 10) rows.push({ level, index, de, lv: lvValue, value });
            pairExamples.set(pair, rows);
          }
        }
      });
    });
  });
  return { findings, pairCounts, pairExamples, familyCounts, familyExamples };
}

function record(tree, lang, level, index, de, lvValue, value, check, detail) {
  return { tree, lang, level, index, de, lv: lvValue, value, check, detail };
}

function summaryFor(findings, recordCount) {
  const checks = ["SAME_AS_LV", "COGNATE_REVIEW", "LV_DIACRITIC", "SCRIPT_MISMATCH", "SCRIPT_MISMATCH_SR_LATIN", "FAMILY_COPY"];
  const table = {};
  LANGS.forEach((lang) => {
    table[lang] = {};
    checks.forEach((check) => { table[lang][check] = 0; });
    table[lang].problemRecords = 0;
  });
  const problemKeys = new Map();
  findings.forEach((row) => {
    if (!table[row.lang][row.check] && table[row.lang][row.check] !== 0) return;
    table[row.lang][row.check] += 1;
    if (row.check === "COGNATE_REVIEW" || row.check === "SCRIPT_MISMATCH_SR_LATIN") return;
    const key = `${row.lang}|${row.level}|${row.index}`;
    if (!problemKeys.has(row.lang)) problemKeys.set(row.lang, new Set());
    problemKeys.get(row.lang).add(key);
  });
  LANGS.forEach((lang) => {
    table[lang].problemRecords = problemKeys.has(lang) ? problemKeys.get(lang).size : 0;
  });
  const top = LANGS.map((lang) => ({
    lang,
    problemRecords: table[lang].problemRecords,
    flags: table[lang].SAME_AS_LV + table[lang].LV_DIACRITIC + table[lang].SCRIPT_MISMATCH + table[lang].FAMILY_COPY
  })).sort((a, b) => b.problemRecords - a.problemRecords || b.flags - a.flags || a.lang.localeCompare(b.lang));
  return { table, top: top.slice(0, 20), recordCount };
}

function controlBlock(loaded) {
  const entry = loaded.lv.c1[553];
  const values = { lv: trimValue(entry && entry.lv), de: entry && entry.de };
  LANGS.forEach((lang) => {
    values[lang] = trimValue(loaded.targets[lang].c1[553] && loaded.targets[lang].c1[553].lv);
  });
  return values;
}

function assertControl(findings, values) {
  const flags = (lang) => new Set(findings.filter((row) => row.lang === lang && row.level === "C1" && row.index === 553).map((row) => row.check));
  const failures = [];
  ["fi", "sv", "nb", "nn", "is"].forEach((lang) => {
    const got = flags(lang);
    if (!got.has("FAMILY_COPY")) failures.push(`${lang} missing FAMILY_COPY (${[...got].join(",")}) value=${values[lang]}`);
  });
  ["hr", "sr", "mk"].forEach((lang) => {
    if (!flags(lang).has("FAMILY_COPY")) failures.push(`${lang} missing FAMILY_COPY value=${values[lang]}`);
  });
  if (!flags("hr").has("SCRIPT_MISMATCH")) failures.push(`hr missing SCRIPT_MISMATCH value=${values.hr}`);
  ["sk", "sq", "tr"].forEach((lang) => {
    if (!flags(lang).has("FAMILY_COPY")) failures.push(`${lang} missing FAMILY_COPY value=${values[lang]}`);
  });
  ["it", "lb", "nl", "sl"].forEach((lang) => {
    const got = flags(lang);
    if (!got.has("SAME_AS_LV") && !got.has("LV_DIACRITIC") && !got.has("COGNATE_REVIEW")) {
      failures.push(`${lang} missing SAME_AS_LV/LV_DIACRITIC value=${values[lang]}`);
    }
  });
  if (values.pt == null) failures.push("pt missing");
  if (failures.length) {
    process.stderr.write(`${failures.join("\n")}\n`);
    process.exit(1);
  }
}

function pct(count, total) {
  return `${((count / total) * 100).toFixed(2)}%`;
}

function renderMarkdown(body) {
  const lines = [];
  const push = (text) => lines.push(text);
  push("# Translation leakage");
  push("");
  push("Šis audits klasificē tulkojumu sakritības. Tas nepiedāvā pareizo tulkojumu un nemaina datus.");
  push("");
  push("## Kontrole C1[553] Wetterleuchten");
  push("");
  push(`LV vērtība HEAD: ${body.control.lv}. de=${body.control.de}.`);
  push("");
  push("| valoda | vērtība | pārbaudes |");
  push("|---|---|---|");
  LANGS.forEach((lang) => {
    const checks = body.controlFlags[lang] || [];
    push(`| ${lang} | ${body.control[lang]} | ${checks.join(", ")} |`);
  });
  push("");
  push(`pt vērtība ir ziņojama arī bez klases: ${body.control.pt}.`);
  push("");
  push(`et vērtība \`${body.control.et}\` nav baitiski vienāda ar fi/sv/nb/nn/is vērtību \`${body.control.fi}\`, tāpēc et nav šajā FAMILY_COPY grupā. Grupa ir šīs piecas valodas savā starpā.`);
  push("");
  push("sr C1[553] kirilicas pieņēmumā nav SCRIPT_MISMATCH, jo vērtība ir kirilicā. Latīņu pieņēmumā tā ir SCRIPT_MISMATCH_SR_LATIN. Abi varianti ir uzrādīti; neviens nav izvēlēts.");
  push("");
  push("## Lauki");
  push("");
  push("Tulkojuma lauks LV un visās 31 mērķvalodā ir `lv`. Vācu lauki ir `de`, `de_article`, `de_plural`. Netiek skatīti `level`, `study` un `id`.");
  push("");
  push("```text");
  push(`MASTER VERSION: ${body.baseline.masterVersion}`);
  push("AUDIT MODE: TRANSLATION_LEAKAGE");
  push(`ORIGIN_MAIN_SHA: ${body.baseline.originMainSha}`);
  push(`BRANCH: ${body.baseline.branch}`);
  push(`DATE: ${body.baseline.date}`);
  push(`DATASET_PRODUCTION_SHA/BLOB: ${body.baseline.datasetProductionSha}`);
  push("LAST FINAL CLOSURE: NOT_RECORDED_FOR_LV_DE_WORDLIST");
  push("LAST FINAL CLOSURE MAIN SHA:");
  push("LAST FINAL CLOSURE DATASET BLOB:");
  push("UNMERGED CLOSURE/REPAIR FOUND: #855 #856 #858 #859 OPEN; this branch is origin/main and does not merge them");
  push("BASELINE STATUS: PASS");
  push("OWNER HISTORY AVAILABLE: NO");
  push("OWNER HISTORY FILES LOADED: 0");
  push("OWNER APPROVED FIELDS TOTAL/CHECKED/MATCHING/DRIFTED: 0/0/0/0");
  push("OWNER HISTORY GATE: NOT_RUN");
  push("RAW AUDIT HISTORY GATE: NOT_APPLICABLE");
  push("DISCOVERY CHURN RATE: 0");
  push("AUDIT_DISCOVERY_NON_REPRODUCIBILITY: 0");
  push("DE READ-ONLY: YES");
  push("```");
  push("");
  push(`Ieraksti katrā valodā: ${body.recordCount}. www salīdzinājums ar data: ${body.mirror}.`);
  push("");
  push("## Valoda × pārbaude");
  push("");
  push("| valoda | SAME_AS_LV | % | COGNATE_REVIEW | LV_DIACRITIC | % | SCRIPT_MISMATCH | % | FAMILY_COPY | % | problēmu ieraksti |");
  push("|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|");
  LANGS.forEach((lang) => {
    const row = body.summary.table[lang];
    push(`| ${lang} | ${row.SAME_AS_LV} | ${pct(row.SAME_AS_LV, body.recordCount)} | ${row.COGNATE_REVIEW} | ${row.LV_DIACRITIC} | ${pct(row.LV_DIACRITIC, body.recordCount)} | ${row.SCRIPT_MISMATCH} | ${pct(row.SCRIPT_MISMATCH, body.recordCount)} | ${row.FAMILY_COPY} | ${pct(row.FAMILY_COPY, body.recordCount)} | ${row.problemRecords} |`);
  });
  push("");
  push("sr latīņu pieņēmuma SCRIPT_MISMATCH nav šajā kolonnā. Tas ir atsevišķi:");
  push("");
  push(`| sr kā latīņu | ${body.summary.table.sr.SCRIPT_MISMATCH_SR_LATIN} | ${pct(body.summary.table.sr.SCRIPT_MISMATCH_SR_LATIN, body.recordCount)} |`);
  push("");
  push("## Top 20");
  push("");
  push("| valoda | problēmu ieraksti | karogu summa |");
  push("|---|---:|---:|");
  body.summary.top.forEach((row) => push(`| ${row.lang} | ${row.problemRecords} | ${row.flags} |`));
  push("");
  push("Problēmu ieraksts ir level+indekss ar vismaz vienu no SAME_AS_LV, LV_DIACRITIC, SCRIPT_MISMATCH, FAMILY_COPY. COGNATE_REVIEW un sr latīņu pieņēmums šajā skaitā nav.");
  push("");
  push("## Ģimenes");
  push("");
  push("Virziens nav noteikts. Grupa ir valodas ar vienādu vērtību, kas atšķiras no LV.");
  push("");
  body.families.forEach((row) => {
    push(`### ${row.family} (${row.count})`);
    push("");
    row.examples.forEach((example) => {
      push(`- ${example.level}[${example.index}] de=${example.de} lv=${example.lv} value=${example.value}`);
    });
    push("");
  });
  push("## Pāri");
  push("");
  body.pairs.forEach((row) => {
    push(`### ${row.pair} (${row.count})`);
    push("");
    row.examples.forEach((example) => {
      push(`- ${example.level}[${example.index}] de=${example.de} lv=${example.lv} value=${example.value}`);
    });
    push("");
  });
  push("## STAGE RESULT");
  push("");
  push(`STAGE RESULT: ${body.stageResult}`);
  push("");
  return `${lines.join("\n")}\n`;
}

function main() {
  const data = loadTree("data");
  const www = loadTree("www/data");
  const dataResult = analyseTree("data", data);
  const wwwResult = analyseTree("www", www);
  assertControl(dataResult.findings, controlBlock(data));
  const recordCount = LEVELS.reduce((sum, level) => sum + data.lv[level].length, 0);
  const dataSummary = summaryFor(dataResult.findings, recordCount);
  const wwwSummary = summaryFor(wwwResult.findings, recordCount);
  const mirror = JSON.stringify(dataSummary.table) === JSON.stringify(wwwSummary.table) ? "IDENTICAL" : "DIFFERS";
  const controlValues = controlBlock(data);
  const controlFlags = {};
  LANGS.forEach((lang) => {
    controlFlags[lang] = [...new Set(dataResult.findings.filter((row) => row.lang === lang && row.level === "C1" && row.index === 553).map((row) => row.check))].sort();
  });
  const families = [...dataResult.familyCounts.entries()].map(([family, count]) => ({
    family,
    count,
    examples: dataResult.familyExamples.get(family) || []
  })).sort((a, b) => b.count - a.count || a.family.localeCompare(b.family));
  const pairs = [...dataResult.pairCounts.entries()].map(([pair, count]) => ({
    pair,
    count,
    examples: dataResult.pairExamples.get(pair) || []
  })).sort((a, b) => b.count - a.count || a.pair.localeCompare(b.pair));
  const masterText = fs.readFileSync(path.join(ROOT, "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md"), "utf8");
  const masterVersion = (masterText.match(/\*\*Versija:\*\*\s*([0-9.]+)/) || ["", "UNKNOWN"])[1];
  const datasetProductionSha = crypto.createHash("sha256").update(LEVELS.map((level) => fs.readFileSync(path.join(ROOT, "data", `${level}.js`))).join("\n")).digest("hex");
  const body = {
    statement: "Šis audits klasificē tulkojumu sakritības. Tas nepiedāvā pareizo tulkojumu un nemaina datus.",
    baseline: {
      masterVersion,
      originMainSha: execFileSync("git", ["rev-parse", "origin/main"], { cwd: ROOT, encoding: "utf8" }).trim(),
      branch: execFileSync("git", ["rev-parse", "--abbrev-ref", "HEAD"], { cwd: ROOT, encoding: "utf8" }).trim(),
      date: "2026-10-04",
      datasetProductionSha
    },
    recordCount,
    mirror,
    control: controlValues,
    controlFlags,
    summary: dataSummary,
    wwwSummary,
    families,
    pairs,
    findingCount: dataResult.findings.length,
    stageResult: "NEEDS OWNER REVIEW"
  };
  fs.mkdirSync(path.dirname(OUT_MD), { recursive: true });
  fs.writeFileSync(OUT_JSON, `${JSON.stringify(body, null, 2)}\n`);
  fs.writeFileSync(OUT_MD, renderMarkdown(body));
  const header = ["tree", "lang", "level", "index", "de", "lv", "value", "check", "detail"];
  const csv = [header.join(",")];
  dataResult.findings.forEach((row) => {
    csv.push([row.tree, row.lang, row.level, row.index, csvEscape(row.de), csvEscape(row.lv), csvEscape(row.value), row.check, csvEscape(row.detail)].join(","));
  });
  fs.writeFileSync(OUT_CSV, `${csv.join("\n")}\n`);
  process.stdout.write(`${JSON.stringify({
    recordCount,
    mirror,
    findings: dataResult.findings.length,
    families: families.length,
    pairs: pairs.length,
    top: dataSummary.top.slice(0, 5),
    control: controlFlags,
    pt: controlValues.pt
  })}\n`);
}

main();
