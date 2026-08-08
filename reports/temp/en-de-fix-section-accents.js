#!/usr/bin/env node
/** Fix sectionAccents: EN lv from main, overlay only nested .de objects from LV */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const ROOT = path.join(__dirname, "..", "..");

function loadFromString(code, key) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function loadArray(relPath, key) {
  return loadFromString(fs.readFileSync(path.join(ROOT, relPath), "utf8"), key);
}

function deepClone(o) {
  return JSON.parse(JSON.stringify(o));
}

function findByDe(arr, de) {
  return arr.find((e) => e.de === de);
}

function copyOnlyDeObjects(lvNode, enNode) {
  if (!lvNode || !enNode) return;
  if (Array.isArray(lvNode) && Array.isArray(enNode)) {
    for (let i = 0; i < lvNode.length; i++) {
      if (lvNode[i] && typeof lvNode[i] === "object" && enNode[i] && typeof enNode[i] === "object") {
        copyOnlyDeObjects(lvNode[i], enNode[i]);
      }
    }
    return;
  }
  if (typeof lvNode !== "object") return;
  if (lvNode.de) enNode.de = deepClone(lvNode.de);
  for (const [k, v] of Object.entries(lvNode)) {
    if (k !== "de" && v && typeof v === "object" && enNode[k]) {
      copyOnlyDeObjects(v, enNode[k]);
    }
  }
}

const DE_DRIFT = [
  "sprechen", "klein", "auch", "bei", "bitte", "Bitte", "bringen",
  "dieser", "ein", "erst", "es", "finden", "groß", "hoch",
];

const mainA1 = execSync("git show main:data/en/a1.js", { cwd: ROOT, encoding: "utf8" });
const mainEnA1 = loadFromString(mainA1, "A1_WORDS");
const lvA1 = loadArray("data/a1.js", "A1_WORDS");
const enA1 = loadArray("data/en/a1.js", "A1_WORDS");

for (const de of DE_DRIFT) {
  const lv = findByDe(lvA1, de);
  const en = findByDe(enA1, de);
  const mainEn = findByDe(mainEnA1, de);
  if (!lv?.study?.sectionAccents || !en?.study) continue;
  if (mainEn?.study?.sectionAccents) {
    en.study.sectionAccents = deepClone(mainEn.study.sectionAccents);
  }
  copyOnlyDeObjects(lv.study.sectionAccents, en.study.sectionAccents);
}

function serializeWords(words) {
  const lines = ["const A1_WORDS = ["];
  for (const w of words) lines.push("  " + JSON.stringify(w, null, 2).replace(/\n/g, "\n  ") + ",");
  lines.push("];\n\nwindow.A1_WORDS = A1_WORDS;\n");
  return lines.join("\n");
}

fs.writeFileSync(path.join(ROOT, "data/en/a1.js"), serializeWords(enA1));
fs.writeFileSync(path.join(ROOT, "www/data/en/a1.js"), serializeWords(enA1));
console.log("sectionAccents fixed");
