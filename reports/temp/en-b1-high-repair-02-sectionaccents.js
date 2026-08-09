#!/usr/bin/env node
/** sectionAccents cleanup — b1-beruf + b1-sich-befinden-study (7 findings). */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function serializeB1(words) {
  const lines = ["const B1_WORDS = ["];
  for (const w of words) {
    lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  }
  lines.push("];\n\nwindow.B1_WORDS = B1_WORDS;\n");
  return lines.join("\n");
}

const words = load("data/en/b1.js");
const log = [];

const ber = words.find((w) => w.study?.id === "b1-beruf").study;
const oldBerImportant = JSON.stringify(ber.sectionAccents.important);
ber.sectionAccents.important = {
  blue: "Beruf",
  purple: ["profession", "field of work"],
  example: {
    blue: "Beruf",
    green: "Arbeit",
    purple: ["profession", "work"],
  },
};
log.push({
  cardId: "b1-beruf",
  field: "sectionAccents.important",
  action: "RESTRUCTURE object (was array)",
  old: oldBerImportant,
  new: ber.sectionAccents.important,
});

const bef = words.find((w) => w.study?.id === "b1-sich-befinden-study").study;
const oldBefImportant = JSON.stringify(bef.sectionAccents.important);
bef.sectionAccents.important = {
  blue: "sich befinden",
  purple: ["Location"],
  red: "feelings",
  example: {
    blue: "befindet sich",
    red: "fühle mich",
    purple: ["feel", "here"],
  },
};
log.push({
  cardId: "b1-sich-befinden-study",
  field: "sectionAccents.important",
  action: "RESTRUCTURE object (was array)",
  old: oldBefImportant,
  new: bef.sectionAccents.important,
});

const out = serializeB1(words);
fs.writeFileSync(path.join(ROOT, "data/en/b1.js"), out);
fs.writeFileSync(path.join(ROOT, "www/data/en/b1.js"), out);
fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-02-sectionaccents-log.json"), JSON.stringify(log, null, 2));
console.log("sectionAccents cleanup applied for 2 cards");
