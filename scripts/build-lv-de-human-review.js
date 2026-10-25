#!/usr/bin/env node
/**
 * Read-only human-review sheet from reports/lv-de-verify.json.
 * Does not read or write data/, www/data/, languages/, or ui.js.
 * Does not assign a verdict or a correction.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const IN_JSON = path.join(ROOT, "reports/lv-de-verify.json");
const OUT_CSV = path.join(ROOT, "reports/lv-de-human-review.csv");
const LEVEL_ORDER = { A1: 0, A2: 1, B1: 2, B2: 3, C1: 4, C2: 5 };
const CATEGORY_ORDER = [
  "DUPLICATE_ACROSS_LEVELS DIFFERENT_LV",
  "DUPLICATE_ACROSS_LEVELS SAME_LV",
  "PLURAL_STEM_CHECK",
  "SAME_DE_DIFFERENT_ARTICLE",
  "EMPTY_PLURAL"
];
const SUFFIXES = ["keit", "heit", "schaft", "ung", "ismus"];
const HEADER = [
  "id",
  "level",
  "index",
  "de",
  "de_article",
  "de_plural",
  "lv",
  "category",
  "detail",
  "OWNER_DECISION",
  "OWNER_NOTE"
];

function sha256Text(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function csvEscape(value) {
  const text = String(value ?? "");
  if (/[",\n\r]/.test(text)) return `"${text.replace(/"/g, '""')}"`;
  return text;
}

function singleWord(value) {
  const parts = String(value ?? "").trim().split(/\s+/).filter(Boolean);
  return parts.length === 1 ? parts[0] : "";
}

function hasPrefilterSuffix(word) {
  const folded = word.normalize("NFC").toLowerCase();
  return SUFFIXES.some((suffix) => folded.endsWith(suffix));
}

function rowFrom(entry, category) {
  return {
    level: entry.level,
    index: entry.index,
    de: entry.de,
    de_article: entry.de_article,
    de_plural: entry.de_plural,
    lv: entry.lv,
    category,
    detail: entry.detail || ""
  };
}

function compareRow(a, b) {
  return (CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category))
    || ((LEVEL_ORDER[a.level] ?? 99) - (LEVEL_ORDER[b.level] ?? 99))
    || (a.index - b.index)
    || String(a.de).localeCompare(String(b.de))
    || String(a.detail).localeCompare(String(b.detail));
}

function buildRows(body) {
  const rows = [];
  body.findings
    .filter((entry) => entry.category === "DUPLICATE_ACROSS_LEVELS" && entry.flag === "DIFFERENT_LV")
    .forEach((entry) => rows.push(rowFrom(entry, "DUPLICATE_ACROSS_LEVELS DIFFERENT_LV")));
  body.findings
    .filter((entry) => entry.category === "DUPLICATE_ACROSS_LEVELS" && entry.flag === "SAME_LV")
    .forEach((entry) => rows.push(rowFrom(entry, "DUPLICATE_ACROSS_LEVELS SAME_LV")));
  body.reviews
    .filter((entry) => entry.category === "PLURAL_STEM_CHECK")
    .forEach((entry) => rows.push(rowFrom(entry, "PLURAL_STEM_CHECK")));
  body.reviews
    .filter((entry) => entry.category === "SAME_DE_DIFFERENT_ARTICLE")
    .forEach((entry) => rows.push(rowFrom(entry, "SAME_DE_DIFFERENT_ARTICLE")));

  const nouns = body.emptyPluralNouns;
  const noIndication = nouns.filter((entry) => !entry.indication);
  const multiWord = noIndication.filter((entry) => !singleWord(entry.de));
  const single = noIndication.filter((entry) => singleWord(entry.de));
  const suffixExcluded = single.filter((entry) => hasPrefilterSuffix(singleWord(entry.de)));
  const emptyPlural = single.filter((entry) => !hasPrefilterSuffix(singleWord(entry.de)));
  emptyPlural.forEach((entry) => rows.push(rowFrom(entry, "EMPTY_PLURAL")));

  rows.sort(compareRow);
  return {
    rows,
    counts: {
      "DUPLICATE_ACROSS_LEVELS DIFFERENT_LV": rows.filter((row) => row.category === "DUPLICATE_ACROSS_LEVELS DIFFERENT_LV").length,
      "DUPLICATE_ACROSS_LEVELS SAME_LV": rows.filter((row) => row.category === "DUPLICATE_ACROSS_LEVELS SAME_LV").length,
      PLURAL_STEM_CHECK: rows.filter((row) => row.category === "PLURAL_STEM_CHECK").length,
      SAME_DE_DIFFERENT_ARTICLE: rows.filter((row) => row.category === "SAME_DE_DIFFERENT_ARTICLE").length,
      EMPTY_PLURAL: emptyPlural.length,
      emptyPluralNouns: nouns.length,
      emptyPluralNoIndication: noIndication.length,
      emptyPluralMultiWord: multiWord.length,
      emptyPluralSuffixExcluded: suffixExcluded.length
    }
  };
}

function renderCsv(rows) {
  const lines = [HEADER.join(",")];
  rows.forEach((row, index) => {
    lines.push([
      String(index + 1),
      csvEscape(row.level),
      String(row.index),
      csvEscape(row.de),
      csvEscape(row.de_article),
      csvEscape(row.de_plural),
      csvEscape(row.lv),
      csvEscape(row.category),
      csvEscape(row.detail),
      "",
      ""
    ].join(","));
  });
  return `${lines.join("\n")}\n`;
}

function main() {
  const body = JSON.parse(fs.readFileSync(IN_JSON, "utf8"));
  const { rows, counts } = buildRows(body);
  const expected = {
    "DUPLICATE_ACROSS_LEVELS DIFFERENT_LV": 27,
    "DUPLICATE_ACROSS_LEVELS SAME_LV": 53,
    PLURAL_STEM_CHECK: 21,
    SAME_DE_DIFFERENT_ARTICLE: 31
  };
  Object.keys(expected).forEach((category) => {
    if (counts[category] !== expected[category]) {
      throw new Error(`${category} count ${counts[category]} !== ${expected[category]}`);
    }
  });
  const csv = renderCsv(rows);
  if (!csv.startsWith(`${HEADER.join(",")}\n`)) throw new Error("missing header");
  if (csv.includes("\uFEFF")) throw new Error("BOM is not used");
  fs.writeFileSync(OUT_CSV, csv);
  process.stdout.write(`${JSON.stringify({
    rows: rows.length,
    sha256: sha256Text(csv),
    counts,
    ownerDecision: "empty",
    ownerNote: "empty"
  })}\n`);
}

if (require.main === module) main();

module.exports = { buildRows, renderCsv, hasPrefilterSuffix };
