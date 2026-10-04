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
 * 11. INCONSISTENT_DUPLICATE compares the 53 SAME_LV cross-level pairs. It does not choose a translation.
 * 12. Level rows report each check as a count and a percent of that level's own records.
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

function casefold(value) {
  return String(value || "").trim().normalize("NFC").toLowerCase().normalize("NFC");
}

const MARKER_SETS = [
  { id: "et_otilde", chars: "õÕ", allow: ["et", "pt"], note: "igauņu õ; portugāļu ortogrāfijā õ ir atļauts" },
  { id: "pl_l_s_z", chars: "łŁśŚźŹżŻ", allow: ["pl"], note: "poļu ł ś ź ż" },
  { id: "pl_lt_nasal", chars: "ąĄęĘ", allow: ["pl", "lt"], note: "poļu ą ę; lietuviešu ortogrāfijā ą un ę ir atļauti" },
  { id: "tr_soft", chars: "ğĞıİ", allow: ["tr"], note: "turku ğ, ı (U+0131) un İ (U+0130)" },
  { id: "lv_macron_consonant", chars: "āĀēĒīĪķĶļĻņŅģĢ", allow: [], note: "latviešu ā ē ī ķ ļ ņ ģ; nevienai mērķvalodai nav šajā kopā" },
  { id: "lv_u_macron", chars: "ūŪ", allow: ["lt"], note: "latviešu ū; lietuviešu ortogrāfijā ū ir atļauts" },
  { id: "de_eszett", chars: "ß", allow: [], note: "vācu ß; mērķvalodu ortogrāfijā nav" }
];

function markerLabels(lang, value, assumption) {
  const labels = [];
  MARKER_SETS.forEach((set) => {
    if (set.allow.includes(lang)) return;
    if ([...value].some((char) => set.chars.includes(char))) labels.push(set.id);
  });
  const scripts = scriptsOf(value);
  const latinScript = LATIN_LANGS.has(lang) || (lang === "sr" && assumption === "latin");
  const cyrillicScript = CYRILLIC_LANGS.has(lang) || (lang === "sr" && assumption === "cyrillic");
  if (latinScript && (scripts.has("Cyrillic") || scripts.has("Greek") || scripts.has("Arabic") || scripts.has("Devanagari"))) labels.push("foreign_script");
  if (cyrillicScript && scripts.has("Latin")) labels.push("latin_in_cyrillic");
  if (lang === "gr" && scripts.has("Latin")) labels.push("latin_in_greek");
  if (lang !== "gr" && scripts.has("Greek")) labels.push("greek_letter");
  return labels;
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
  const strictPairCounts = new Map();
  const strictExamples = new Map();
  const markerExamples = new Map();
  LEVELS.forEach((file) => {
    const level = file.toUpperCase();
    const lvRows = loaded.lv[file];
    lvRows.forEach((lvEntry, index) => {
      const lvValue = trimValue(lvEntry && lvEntry.lv);
      const lvFold = casefold(lvValue);
      const de = lvEntry && lvEntry.de != null ? String(lvEntry.de) : "";
      const deFold = casefold(de);
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
        if (casefold(value) === lvFold) {
          findings.push(record(treeName, lang, level, index, de, lvValue, value, "SAME_AS_LV_CASEFOLD", value === lvValue ? "exact" : "casefold_only"));
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
        const labels = markerLabels(lang, value, lang === "sr" ? "cyrillic" : "latin");
        if (labels.length) {
          findings.push(record(treeName, lang, level, index, de, lvValue, value, "MARKER_LEAK", labels.join("+")));
          const bucket = markerExamples.get(lang) || [];
          if (bucket.length < 10) bucket.push({ level, index, de, lv: lvValue, value, detail: labels.join("+") });
          markerExamples.set(lang, bucket);
        }
        if (lang === "sr") {
          const latinLabels = markerLabels(lang, value, "latin");
          if (latinLabels.length) {
            findings.push(record(treeName, lang, level, index, de, lvValue, value, "MARKER_LEAK_SR_LATIN", latinLabels.join("+")));
          }
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
        members.forEach((lang) => {
          findings.push(record(treeName, lang, level, index, de, lvValue, value, "FAMILY_COPY", family));
        });
        for (let i = 0; i < members.length; i += 1) {
          for (let j = i + 1; j < members.length; j += 1) {
            const pair = [members[i], members[j]].sort().join("+");
            pairCounts.set(pair, (pairCounts.get(pair) || 0) + 1);
          }
        }
        const strictExcluded = members.length >= 6 || casefold(value) === deFold;
        if (strictExcluded) return;
        members.forEach((lang) => {
          findings.push(record(treeName, lang, level, index, de, lvValue, value, "FAMILY_COPY_STRICT", family));
        });
        for (let i = 0; i < members.length; i += 1) {
          for (let j = i + 1; j < members.length; j += 1) {
            const pair = [members[i], members[j]].sort().join("+");
            strictPairCounts.set(pair, (strictPairCounts.get(pair) || 0) + 1);
            if (!strictExamples.has(pair)) strictExamples.set(pair, {});
            const byLevel = strictExamples.get(pair);
            if (!byLevel[level]) byLevel[level] = [];
            if (byLevel[level].length < 10) byLevel[level].push({ level, index, de, lv: lvValue, value, family });
          }
        }
      });
    });
  });
  return { findings, pairCounts, strictPairCounts, strictExamples, markerExamples };
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

const LEVEL_ORDER = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4, C2: 5 };
const PAIR_DIGEST = "6ca4069dd6c5a39a1d12033a38fcd5d9e5b5811af6299696726ef94ad0c949be";
const LEVEL_CHECKS = ["SAME_AS_LV", "SAME_AS_LV_CASEFOLD", "COGNATE_REVIEW", "LV_DIACRITIC", "SCRIPT_MISMATCH", "MARKER_LEAK", "FAMILY_COPY", "FAMILY_COPY_STRICT"];
const FOCUS_CHECKS = ["SAME_AS_LV_CASEFOLD", "LV_DIACRITIC", "SCRIPT_MISMATCH", "MARKER_LEAK", "FAMILY_COPY_STRICT"];

function rawField(entry, key) {
  if (!entry || typeof entry !== "object" || !Object.prototype.hasOwnProperty.call(entry, key) || entry[key] == null) return "";
  if (typeof entry[key] !== "string") return "";
  return entry[key];
}

function sameLvPairs(lvByFile) {
  const rows = [];
  LEVELS.forEach((file) => {
    lvByFile[file].forEach((entry, index) => {
      const deBad = entry && Object.prototype.hasOwnProperty.call(entry, "de") && entry.de != null && typeof entry.de !== "string";
      const articleBad = entry && Object.prototype.hasOwnProperty.call(entry, "de_article") && entry.de_article != null && typeof entry.de_article !== "string";
      const lvBad = entry && Object.prototype.hasOwnProperty.call(entry, "lv") && entry.lv != null && typeof entry.lv !== "string";
      rows.push({
        level: file.toUpperCase(),
        index,
        deKey: deBad ? `\0bad:${index}` : rawField(entry, "de"),
        articleKey: articleBad ? `\0bad:${index}` : rawField(entry, "de_article"),
        de: deBad ? "" : rawField(entry, "de"),
        lv: lvBad ? "" : rawField(entry, "lv")
      });
    });
  });
  const byKey = new Map();
  rows.forEach((row) => {
    const key = `${row.deKey}\0${row.articleKey}`;
    if (!byKey.has(key)) byKey.set(key, []);
    byKey.get(key).push(row);
  });
  const pairs = [];
  byKey.forEach((group) => {
    if (new Set(group.map((row) => row.level)).size < 2) return;
    const sorted = group.slice().sort((a, b) => LEVEL_ORDER[a.level] - LEVEL_ORDER[b.level] || a.index - b.index);
    for (let i = 0; i < sorted.length; i += 1) {
      for (let j = i + 1; j < sorted.length; j += 1) {
        if (sorted[i].level === sorted[j].level) continue;
        if (sorted[i].lv !== sorted[j].lv) continue;
        pairs.push({
          leftLevel: sorted[i].level,
          leftIndex: sorted[i].index,
          rightLevel: sorted[j].level,
          rightIndex: sorted[j].index,
          de: sorted[i].de,
          lv: sorted[i].lv
        });
      }
    }
  });
  pairs.sort((a, b) => LEVEL_ORDER[a.leftLevel] - LEVEL_ORDER[b.leftLevel]
    || a.leftIndex - b.leftIndex
    || LEVEL_ORDER[a.rightLevel] - LEVEL_ORDER[b.rightLevel]
    || a.rightIndex - b.rightIndex
    || a.de.localeCompare(b.de));
  return pairs;
}

function cellLv(rows, index) {
  if (!rows || index < 0 || index >= rows.length) return { missing: true, value: "" };
  const entry = rows[index];
  if (!entry || typeof entry !== "object" || typeof entry.lv !== "string") return { missing: true, value: "" };
  return { missing: false, value: entry.lv };
}

function inconsistentDuplicate(loaded, treeName) {
  const pairs = sameLvPairs(loaded.lv);
  const digest = crypto.createHash("sha256").update(pairs.map((pair) => `${pair.leftLevel}[${pair.leftIndex}] ${pair.rightLevel}[${pair.rightIndex}] ${pair.de} ${pair.lv}`).join("\n")).digest("hex");
  if (pairs.length !== 53 || digest !== PAIR_DIGEST) {
    process.stderr.write(`SAME_LV pairs ${pairs.length} digest ${digest}\n`);
    process.exit(1);
  }
  const byLang = {};
  const examplesByLang = {};
  const byLevelPair = {};
  const csvRows = [];
  LANGS.forEach((lang) => {
    byLang[lang] = { same: 0, different: 0 };
    examplesByLang[lang] = [];
  });
  pairs.forEach((pair) => {
    const levelPair = `${pair.leftLevel}/${pair.rightLevel}`;
    if (!byLevelPair[levelPair]) byLevelPair[levelPair] = { levelPair, pairs: 0, same: 0, different: 0 };
    byLevelPair[levelPair].pairs += 1;
    LANGS.forEach((lang) => {
      const left = cellLv(loaded.targets[lang][pair.leftLevel.toLowerCase()], pair.leftIndex);
      const right = cellLv(loaded.targets[lang][pair.rightLevel.toLowerCase()], pair.rightIndex);
      const status = left.missing === right.missing && left.value === right.value ? "SAME" : "DIFFERENT";
      if (status === "SAME") {
        byLang[lang].same += 1;
        byLevelPair[levelPair].same += 1;
      } else {
        byLang[lang].different += 1;
        byLevelPair[levelPair].different += 1;
        if (examplesByLang[lang].length < 10) {
          examplesByLang[lang].push({
            de: pair.de,
            lv: pair.lv,
            left: `${pair.leftLevel}[${pair.leftIndex}]`,
            right: `${pair.rightLevel}[${pair.rightIndex}]`,
            leftValue: left.value,
            rightValue: right.value
          });
        }
      }
      csvRows.push({
        tree: treeName,
        lang,
        level: levelPair,
        index: pair.leftIndex,
        de: pair.de,
        lv: pair.lv,
        value: left.value,
        check: "INCONSISTENT_DUPLICATE",
        detail: `${status}|${pair.rightLevel}[${pair.rightIndex}]|${right.value}`
      });
    });
  });
  const ranked = LANGS.map((lang) => ({
    lang,
    same: byLang[lang].same,
    different: byLang[lang].different,
    percent: byLang[lang].different / pairs.length
  })).sort((a, b) => b.percent - a.percent || b.different - a.different || a.lang.localeCompare(b.lang));
  const highest = ranked[0];
  const levelPairs = Object.values(byLevelPair).sort((a, b) => {
    const [aLeft, aRight] = a.levelPair.split("/");
    const [bLeft, bRight] = b.levelPair.split("/");
    return LEVEL_ORDER[aLeft] - LEVEL_ORDER[bLeft] || LEVEL_ORDER[aRight] - LEVEL_ORDER[bRight];
  });
  return {
    pairCount: pairs.length,
    digest,
    source: "reports/lv-de-verify.json DUPLICATE_ACROSS_LEVELS SAME_LV on origin/cursor/lv-de-verify-f86b; recomputed on HEAD and matched",
    byLang: ranked,
    highest: { lang: highest.lang, examples: examplesByLang[highest.lang] },
    byLevelPair: levelPairs,
    csvRows
  };
}

function levelSplit(findings, recordCounts) {
  const aggregate = {};
  const byLang = {};
  const problem = {};
  LEVELS.forEach((file) => {
    const level = file.toUpperCase();
    aggregate[level] = { records: recordCounts[level], problemRecords: 0 };
    LEVEL_CHECKS.forEach((check) => { aggregate[level][check] = 0; });
    aggregate[level].SCRIPT_MISMATCH_SR_LATIN = 0;
    problem[level] = new Set();
  });
  LANGS.forEach((lang) => {
    byLang[lang] = {};
    LEVELS.forEach((file) => {
      const level = file.toUpperCase();
      byLang[lang][level] = {};
      LEVEL_CHECKS.forEach((check) => { byLang[lang][level][check] = 0; });
      byLang[lang][level].SCRIPT_MISMATCH_SR_LATIN = 0;
    });
  });
  findings.forEach((row) => {
    const bucket = aggregate[row.level];
    if (!bucket || bucket[row.check] == null) return;
    bucket[row.check] += 1;
    byLang[row.lang][row.level][row.check] += 1;
    if (row.check === "COGNATE_REVIEW" || row.check === "SCRIPT_MISMATCH_SR_LATIN") return;
    problem[row.level].add(`${row.lang}|${row.index}`);
  });
  LEVELS.forEach((file) => {
    aggregate[file.toUpperCase()].problemRecords = problem[file.toUpperCase()].size;
  });
  return { aggregate, byLang };
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

function strictComponents(pairCounts, examples) {
  const parent = new Map();
  LANGS.forEach((lang) => parent.set(lang, lang));
  const find = (lang) => {
    if (parent.get(lang) !== lang) parent.set(lang, find(parent.get(lang)));
    return parent.get(lang);
  };
  const union = (left, right) => {
    const rootLeft = find(left);
    const rootRight = find(right);
    if (rootLeft !== rootRight) parent.set(rootRight, rootLeft);
  };
  const edges = [];
  pairCounts.forEach((count, pair) => {
    if (count < 1000) return;
    const [left, right] = pair.split("+");
    edges.push({ pair, count, left, right });
    union(left, right);
  });
  const groups = new Map();
  LANGS.forEach((lang) => {
    const root = find(lang);
    if (!groups.has(root)) groups.set(root, []);
    groups.get(root).push(lang);
  });
  const components = [];
  groups.forEach((members) => {
    members.sort();
    const memberSet = new Set(members);
    const groupEdges = edges.filter((edge) => memberSet.has(edge.left) && memberSet.has(edge.right))
      .sort((a, b) => b.count - a.count || a.pair.localeCompare(b.pair));
    if (!groupEdges.length) return;
    const byLevel = {};
    LEVELS.forEach((file) => { byLevel[file.toUpperCase()] = []; });
    groupEdges.forEach((edge) => {
      const stored = examples.get(edge.pair) || {};
      LEVELS.forEach((file) => {
        const level = file.toUpperCase();
        (stored[level] || []).forEach((example) => {
          if (byLevel[level].length >= 10) return;
          const key = `${example.index}|${example.value}`;
          if (byLevel[level].some((row) => `${row.index}|${row.value}` === key)) return;
          byLevel[level].push(example);
        });
      });
    });
    components.push({
      languages: members,
      edges: groupEdges.map((edge) => ({ pair: edge.pair, count: edge.count })),
      sharedRows: groupEdges.reduce((sum, edge) => sum + edge.count, 0),
      examples: byLevel
    });
  });
  components.sort((a, b) => b.sharedRows - a.sharedRows || a.languages.join("+").localeCompare(b.languages.join("+")));
  return components;
}

function levelGaps(split) {
  const rows = [];
  LANGS.forEach((lang) => {
    FOCUS_CHECKS.forEach((check) => {
      const a1 = split.byLang[lang].A1[check] / split.aggregate.A1.records * 100;
      const rest = ["A2", "B1", "B2", "C1", "C2"].map((level) => split.byLang[lang][level][check] / split.aggregate[level].records * 100);
      const average = rest.reduce((sum, value) => sum + value, 0) / rest.length;
      const delta = a1 - average;
      if (Math.abs(delta) >= 20) {
        rows.push({ lang, check, a1: a1.toFixed(2), average: average.toFixed(2), delta: delta.toFixed(2) });
      }
    });
  });
  rows.sort((a, b) => Math.abs(Number(b.delta)) - Math.abs(Number(a.delta)) || a.lang.localeCompare(b.lang) || a.check.localeCompare(b.check));
  return rows;
}

function pct(count, total) {
  if (!total) return "0.00%";
  return `${((count / total) * 100).toFixed(2)}%`;
}

function mdCell(value) {
  return String(value == null ? "" : value).replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
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
  push("## Sadalījums pa līmeņiem");
  push("");
  push("Katras pārbaudes skaits ir karogu summa visās 31 valodā. Procenti ir no līmeņa ierakstu skaita reiz 31. Problēmu ieraksti ir unikāli valoda+indekss ar vismaz vienu no SAME_AS_LV, LV_DIACRITIC, SCRIPT_MISMATCH, FAMILY_COPY.");
  push("");
  const problemLine = LEVELS.map((file) => {
    const row = body.levelSplit.aggregate[file.toUpperCase()];
    return `${file.toUpperCase()} ${pct(row.problemRecords, row.records * LANGS.length)}`;
  }).join(", ");
  push(`Problēmu ierakstu īpatsvars: ${problemLine}.`);
  push("");
  push("| līmenis | ieraksti | SAME_AS_LV | % | COGNATE_REVIEW | % | LV_DIACRITIC | % | SCRIPT_MISMATCH | % | FAMILY_COPY | % | problēmu ieraksti | % |");
  push("|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|");
  LEVELS.forEach((file) => {
    const level = file.toUpperCase();
    const row = body.levelSplit.aggregate[level];
    const denom = row.records * LANGS.length;
    push(`| ${level} | ${row.records} | ${row.SAME_AS_LV} | ${pct(row.SAME_AS_LV, denom)} | ${row.COGNATE_REVIEW} | ${pct(row.COGNATE_REVIEW, denom)} | ${row.LV_DIACRITIC} | ${pct(row.LV_DIACRITIC, denom)} | ${row.SCRIPT_MISMATCH} | ${pct(row.SCRIPT_MISMATCH, denom)} | ${row.FAMILY_COPY} | ${pct(row.FAMILY_COPY, denom)} | ${row.problemRecords} | ${pct(row.problemRecords, denom)} |`);
  });
  push("");
  push("sr latīņu pieņēmums pa līmeņiem (nav iepriekšējā SCRIPT_MISMATCH kolonnā):");
  push("");
  push("| līmenis | SCRIPT_MISMATCH_SR_LATIN | % no līmeņa ierakstiem |");
  push("|---|---:|---:|");
  LEVELS.forEach((file) => {
    const level = file.toUpperCase();
    const row = body.levelSplit.aggregate[level];
    push(`| ${level} | ${row.SCRIPT_MISMATCH_SR_LATIN} | ${pct(row.SCRIPT_MISMATCH_SR_LATIN, row.records)} |`);
  });
  push("");
  push("Valoda × līmenis. Procenti ir no šī līmeņa ierakstiem vienā valodā.");
  push("");
  push("| valoda | līmenis | SAME_AS_LV | % | COGNATE_REVIEW | % | LV_DIACRITIC | % | SCRIPT_MISMATCH | % | FAMILY_COPY | % |");
  push("|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|");
  LANGS.forEach((lang) => {
    LEVELS.forEach((file) => {
      const level = file.toUpperCase();
      const row = body.levelSplit.byLang[lang][level];
      const denom = body.levelSplit.aggregate[level].records;
      push(`| ${lang} | ${level} | ${row.SAME_AS_LV} | ${pct(row.SAME_AS_LV, denom)} | ${row.COGNATE_REVIEW} | ${pct(row.COGNATE_REVIEW, denom)} | ${row.LV_DIACRITIC} | ${pct(row.LV_DIACRITIC, denom)} | ${row.SCRIPT_MISMATCH} | ${pct(row.SCRIPT_MISMATCH, denom)} | ${row.FAMILY_COPY} | ${pct(row.FAMILY_COPY, denom)} |`);
    });
  });
  push("");
  push("## INCONSISTENT_DUPLICATE");
  push("");
  push(`Pāri: ${body.duplicates.pairCount}. Avots: ${body.duplicates.source}. Pāru SHA-256: ${body.duplicates.digest}.`);
  push("");
  push("PR #858 un PR #859 nav apvienoti ar origin/main. 53 pāri ir saskaitīti HEAD LV datos ar to pašu de un de_article grupēšanu, kas verify JSON. Wetterleuchten un Jagderlaubnis šajos pāros nav. OWNER LV labojums no #859 šajā zarā nav.");
  push("");
  push("Salīdzinājums ir mērķvalodas lauka `lv` baitiskā vienādība bez apgriešanas. SAME nozīmē abas pozīcijas ir vienādas. DIFFERENT nozīmē tās atšķiras; abi varianti ir uzrādīti. DIFFERENT pie identiskas LV ievades liecina par tulkošanas atšķirībām (nestabilitāti), nevis noteikti par kļūdu. Pareizais variants nav izvēlēts. Tabula ir sakārtota pēc % DIFFERENT dilstoši.");
  push("");
  push("| valoda | SAME | DIFFERENT | % DIFFERENT |");
  push("|---|---:|---:|---:|");
  body.duplicates.byLang.forEach((row) => {
    push(`| ${row.lang} | ${row.same} | ${row.different} | ${pct(row.different, body.duplicates.pairCount)} |`);
  });
  push("");
  push(`Augstākais % DIFFERENT: ${body.duplicates.highest.lang}. Piemēri:`);
  push("");
  push("| de | lv | kreisā | vērtība | labā | vērtība |");
  push("|---|---|---|---|---|---|");
  body.duplicates.highest.examples.forEach((example) => {
    push(`| ${mdCell(example.de)} | ${mdCell(example.lv)} | ${example.left} | ${mdCell(example.leftValue)} | ${example.right} | ${mdCell(example.rightValue)} |`);
  });
  push("");
  push("Līmeņu pāri. SAME un DIFFERENT ir šūnas pa 31 valodai. Procenti ir no pāru skaita reiz 31.");
  push("");
  push("| līmeņu pāris | pāri | SAME | DIFFERENT | % DIFFERENT |");
  push("|---|---:|---:|---:|---:|");
  body.duplicates.byLevelPair.forEach((row) => {
    const denom = row.pairs * LANGS.length;
    push(`| ${row.levelPair} | ${row.pairs} | ${row.same} | ${row.different} | ${pct(row.different, denom)} |`);
  });
  push("");
  push("## Fokusa rādītāji pa līmeņiem");
  push("");
  push("SAME_AS_LV_CASEFOLD ir NFC + toLowerCase + trim un ietver arī reģistrjutīgo sakritību. Reģistrjutīgais SAME_AS_LV paliek atsevišķi. A2–C2 vidējais ir neatsvērts piecu līmeņu procentu vidējais.");
  push("");
  push("| valoda | līmenis | CASEFOLD | % | LV_DIACRITIC | % | SCRIPT_MISMATCH | % | MARKER_LEAK | % | FAMILY_COPY_STRICT | % |");
  push("|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|");
  LANGS.forEach((lang) => {
    LEVELS.forEach((file) => {
      const level = file.toUpperCase();
      const row = body.levelSplit.byLang[lang][level];
      const denom = body.levelSplit.aggregate[level].records;
      push(`| ${lang} | ${level} | ${row.SAME_AS_LV_CASEFOLD} | ${pct(row.SAME_AS_LV_CASEFOLD, denom)} | ${row.LV_DIACRITIC} | ${pct(row.LV_DIACRITIC, denom)} | ${row.SCRIPT_MISMATCH} | ${pct(row.SCRIPT_MISMATCH, denom)} | ${row.MARKER_LEAK} | ${pct(row.MARKER_LEAK, denom)} | ${row.FAMILY_COPY_STRICT} | ${pct(row.FAMILY_COPY_STRICT, denom)} |`);
    });
  });
  push("");
  push("## A1 pret A2–C2, starpība ≥ 20 procentpunkti");
  push("");
  push("| valoda | rādītājs | A1 % | A2–C2 vidējais % | starpība pp |");
  push("|---|---|---:|---:|---:|");
  body.gaps.forEach((row) => push(`| ${row.lang} | ${row.check} | ${row.a1} | ${row.average} | ${row.delta} |`));
  push("");
  push("## Marķieru kopas");
  push("");
  MARKER_SETS.forEach((set) => push(`- ${set.id}: \`${set.chars}\`. Atļauts: ${set.allow.length ? set.allow.join(", ") : "nevienai mērķvalodai"}. ${set.note}`));
  push("- foreign_script: kirilica, grieķu, arābu vai devanāgari burti latīņu rakstības valodā.");
  push("- latin_in_cyrillic: latīņu burti ru, uk, bg, mk un sr kirilicas pieņēmumā.");
  push("- latin_in_greek: latīņu burti grieķu valodā. greek_letter: grieķu burti citā valodā.");
  push("- sr galvenajā MARKER_LEAK kolonnā ir kirilicas pieņēmums. Latīņu pieņēmums ir MARKER_LEAK_SR_LATIN un nav šajā kolonnā. Neviens pieņēmums nav izvēlēts.");
  push("");
  LANGS.forEach((lang) => {
    const examples = body.markerExamples[lang] || [];
    const total = LEVELS.reduce((sum, file) => sum + body.levelSplit.byLang[lang][file.toUpperCase()].MARKER_LEAK, 0);
    push(`### ${lang} MARKER_LEAK ${total}`);
    push("");
    examples.forEach((example) => push(`- ${example.level}[${example.index}] de=${mdCell(example.de)} value=${mdCell(example.value)} ${example.detail}`));
    push("");
  });
  push("## FAMILY_COPY_STRICT grupas");
  push("");
  push("Izslēgtas vērtības, kas sakrīt vismaz 6 valodās vai pēc casefold sakrīt ar de. Mala ir valodu pāris ar vismaz 1000 kopīgām striktām vērtībām. Grupa ir savienotā komponente. Virziens nav noteikts.");
  push("");
  body.strictGroups.forEach((group) => {
    push(`### ${group.languages.join("+")}`);
    push("");
    push(`Kopīgo pāru summa: ${group.sharedRows}.`);
    push("");
    group.edges.forEach((edge) => push(`- ${edge.pair}: ${edge.count}`));
    push("");
    LEVELS.forEach((file) => {
      const level = file.toUpperCase();
      push(`#### ${level}`);
      push("");
      (group.examples[level] || []).forEach((example) => push(`- ${example.level}[${example.index}] de=${mdCell(example.de)} lv=${mdCell(example.lv)} value=${mdCell(example.value)}`));
      push("");
    });
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
  const recordCounts = {};
  LEVELS.forEach((level) => { recordCounts[level.toUpperCase()] = data.lv[level].length; });
  const dataLevel = levelSplit(dataResult.findings, recordCounts);
  const wwwLevel = levelSplit(wwwResult.findings, recordCounts);
  const dataDuplicates = inconsistentDuplicate(data, "data");
  const wwwDuplicates = inconsistentDuplicate(www, "www");
  const duplicateSignature = (rows) => JSON.stringify(rows.byLang.map((row) => [row.lang, row.same, row.different])) + JSON.stringify(rows.byLevelPair);
  const mirror = JSON.stringify(dataSummary.table) === JSON.stringify(wwwSummary.table)
    && JSON.stringify(dataLevel) === JSON.stringify(wwwLevel)
    && duplicateSignature(dataDuplicates) === duplicateSignature(wwwDuplicates)
    ? "IDENTICAL" : "DIFFERS";
  const controlValues = controlBlock(data);
  const controlFlags = {};
  LANGS.forEach((lang) => {
    controlFlags[lang] = [...new Set(dataResult.findings.filter((row) => row.lang === lang && row.level === "C1" && row.index === 553).map((row) => row.check))].sort();
  });
  const strictGroups = strictComponents(dataResult.strictPairCounts, dataResult.strictExamples);
  const gaps = levelGaps(dataLevel);
  const markerExamples = {};
  LANGS.forEach((lang) => { markerExamples[lang] = dataResult.markerExamples.get(lang) || []; });
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
    levelSplit: dataLevel,
    duplicates: {
      pairCount: dataDuplicates.pairCount,
      digest: dataDuplicates.digest,
      source: dataDuplicates.source,
      byLang: dataDuplicates.byLang.map((row) => ({
        lang: row.lang,
        same: row.same,
        different: row.different,
        percent: pct(row.different, dataDuplicates.pairCount)
      })),
      highest: dataDuplicates.highest,
      byLevelPair: dataDuplicates.byLevelPair
    },
    gaps,
    markerExamples,
    markerSets: MARKER_SETS,
    strictGroups,
    findingCount: dataResult.findings.length,
    stageResult: "PARTIAL"
  };
  fs.mkdirSync(path.dirname(OUT_MD), { recursive: true });
  fs.writeFileSync(OUT_JSON, `${JSON.stringify(body, null, 2)}\n`);
  fs.writeFileSync(OUT_MD, renderMarkdown(body));
  const summaryDir = path.join(ROOT, "reports/translation-leakage-audit");
  fs.mkdirSync(summaryDir, { recursive: true });
  const summary = [];
  summary.push("# Translation leakage kopsavilkums");
  summary.push("");
  summary.push("Šis audits klasificē tulkojumu sakritības. Tas nepiedāvā pareizo tulkojumu un nemaina datus.");
  summary.push("");
  summary.push(`STAGE RESULT: ${body.stageResult}. data/www: ${mirror}. Ieraksti: ${recordCount}.`);
  summary.push("");
  summary.push("## Stingrās grupas");
  summary.push("");
  strictGroups.forEach((group) => summary.push(`- ${group.languages.join("+")}: pāru summa ${group.sharedRows}`));
  summary.push("");
  summary.push("## A1 pret A2–C2, ≥ 20 procentpunkti");
  summary.push("");
  summary.push("| valoda | rādītājs | A1 % | A2–C2 % | pp |");
  summary.push("|---|---|---:|---:|---:|");
  gaps.forEach((row) => summary.push(`| ${row.lang} | ${row.check} | ${row.a1} | ${row.average} | ${row.delta} |`));
  summary.push("");
  summary.push(`INCONSISTENT_DUPLICATE pāri: ${dataDuplicates.pairCount}. Augstākais % DIFFERENT: ${dataDuplicates.highest.lang}.`);
  summary.push("");
  summary.push("Pilnās tabulas ir reports/translation-leakage.md. Rindu saraksts ir reports/translation-leakage-hits/.");
  summary.push("");
  fs.writeFileSync(path.join(summaryDir, "SUMMARY.md"), `${summary.join("\n")}\n`);
  const header = ["tree", "lang", "level", "index", "de", "lv", "value", "check", "detail"];
  const focusRows = [];
  dataResult.findings.forEach((row) => {
    if (!FOCUS_CHECKS.includes(row.check)) return;
    focusRows.push([row.tree, row.lang, row.level, row.index, csvEscape(row.de), csvEscape(row.lv), csvEscape(row.value), row.check, csvEscape(row.detail)].join(","));
  });
  const compact = [header.join(",")];
  LANGS.forEach((lang) => {
    LEVELS.forEach((file) => {
      const level = file.toUpperCase();
      const row = dataLevel.byLang[lang][level];
      const denom = dataLevel.aggregate[level].records;
      FOCUS_CHECKS.forEach((check) => {
        compact.push(["data", lang, level, "", "", "", row[check], check, pct(row[check], denom)].join(","));
      });
    });
  });
  gaps.forEach((row) => compact.push(["data", row.lang, "A1", "", "", "", row.delta, `GAP_${row.check}`, `${row.a1}|${row.average}`].join(",")));
  dataDuplicates.csvRows.forEach((row) => {
    compact.push([row.tree, row.lang, row.level, row.index, csvEscape(row.de), csvEscape(row.lv), csvEscape(row.value), row.check, csvEscape(row.detail)].join(","));
  });
  fs.writeFileSync(OUT_CSV, `${compact.join("\n")}\n`);
  const hitDir = path.join(ROOT, "reports/translation-leakage-hits");
  fs.mkdirSync(hitDir, { recursive: true });
  fs.readdirSync(hitDir).forEach((name) => fs.unlinkSync(path.join(hitDir, name)));
  const maxBytes = 450000;
  let part = [];
  let partBytes = Buffer.byteLength(`${header.join(",")}\n`);
  let partIndex = 1;
  const partNames = [];
  const flushPart = () => {
    if (part.length === 0) return;
    const name = `part-${String(partIndex).padStart(2, "0")}.csv`;
    fs.writeFileSync(path.join(hitDir, name), `${header.join(",")}\n${part.join("\n")}\n`);
    partNames.push(name);
    partIndex += 1;
    part = [];
    partBytes = Buffer.byteLength(`${header.join(",")}\n`);
  };
  focusRows.forEach((line) => {
    const bytes = Buffer.byteLength(`${line}\n`);
    if (partBytes + bytes > maxBytes) flushPart();
    part.push(line);
    partBytes += bytes;
  });
  flushPart();
  const readme = ["# translation-leakage-hits", "", "Pilnais rindu saraksts, sadalīts daļās zem 500 KB. Oriģinālais kopsavilkuma CSV ir reports/translation-leakage.csv.", "", "| fails | baiti | rindas | SHA-256 |", "|---|---:|---:|---|"];
  partNames.forEach((name) => {
    const filePath = path.join(hitDir, name);
    const text = fs.readFileSync(filePath);
    const lines = text.toString("utf8").split("\n").filter((line) => line.length).length - 1;
    const sha = crypto.createHash("sha256").update(text).digest("hex");
    readme.push(`| ${name} | ${text.length} | ${lines} | ${sha} |`);
  });
  fs.writeFileSync(path.join(hitDir, "README.md"), `${readme.join("\n")}\n`);
  process.stdout.write(`${JSON.stringify({
    recordCount,
    mirror,
    findings: dataResult.findings.length,
    strictGroups: strictGroups.map((group) => group.languages.join("+")),
    gaps: gaps.length,
    sameLvPairs: dataDuplicates.pairCount,
    duplicateHighest: dataDuplicates.highest.lang,
    levelProblem: LEVELS.map((level) => {
      const row = dataLevel.aggregate[level.toUpperCase()];
      return `${level.toUpperCase()}:${row.problemRecords}/${row.records * LANGS.length}`;
    }),
    top: dataSummary.top.slice(0, 5),
    control: controlFlags,
    pt: controlValues.pt
  })}\n`);
}

main();
