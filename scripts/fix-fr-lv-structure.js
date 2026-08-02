#!/usr/bin/env node
/**
 * Align FI data structure with LV source of truth:
 * - Remove study when LV has none
 * - Match study field shapes (tip/important object vs string)
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

function loadArray(relPath) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return key ? ctx.window[key] : [];
}

function writeArrayFile(filePath, varName, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const ${varName} = ${json};\n\nwindow.${varName} = ${varName};\n`, "utf8");
}

function alignStudyShape(lvStudy, svStudy) {
  if (!lvStudy) return undefined;
  if (!svStudy) return undefined;

  const out = { ...svStudy };

  if (lvStudy.tip !== undefined) {
    if (typeof lvStudy.tip === "object" && lvStudy.tip !== null) {
      const svText = typeof svStudy.tip === "string"
        ? svStudy.tip
        : svStudy.tip?.leftBlocks?.[0]?.text || "";
      out.tip = JSON.parse(JSON.stringify(lvStudy.tip));
      if (out.tip.leftBlocks?.[0]) {
        out.tip.leftBlocks[0].text = svText || out.tip.leftBlocks[0].text;
      }
    } else if (typeof lvStudy.tip === "string") {
      out.tip = typeof svStudy.tip === "string" ? svStudy.tip : (svStudy.tip?.leftBlocks?.[0]?.text || lvStudy.tip);
    }
  } else {
    delete out.tip;
  }

  if (lvStudy.important !== undefined) {
    if (typeof lvStudy.important === "object" && lvStudy.important !== null) {
      const svText = typeof svStudy.important === "string"
        ? svStudy.important
        : svStudy.important?.text || "";
      out.important = JSON.parse(JSON.stringify(lvStudy.important));
      if (out.important.text !== undefined) {
        out.important.text = svText || out.important.text;
      }
    } else if (typeof lvStudy.important === "string") {
      out.important = typeof svStudy.important === "string" ? svStudy.important : (svStudy.important?.text || lvStudy.important);
    }
  } else {
    delete out.important;
  }

  // Keep only keys present in LV study (plus sectionAccents from FI)
  const allowed = new Set(Object.keys(lvStudy));
  for (const key of Object.keys(out)) {
    if (!allowed.has(key)) delete out[key];
  }
  for (const key of Object.keys(lvStudy)) {
    if (out[key] === undefined && key !== "sectionAccents") {
      out[key] = JSON.parse(JSON.stringify(lvStudy[key]));
    }
  }

  return out;
}

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];
const VAR_NAMES = { a1: "A1_WORDS", a2: "A2_WORDS", b1: "B1_WORDS", b2: "B2_WORDS", c1: "C1_WORDS", c2: "C2_WORDS" };

let removed = 0;
let aligned = 0;

for (const level of LEVELS) {
  const lv = loadArray(`data/${level}.js`);
  const nl = loadArray(`data/fr/${level}.js`);
  for (let i = 0; i < Math.min(lv.length, nl.length); i++) {
    if (!lv[i].study) {
      if (nl[i].study) { delete nl[i].study; removed++; }
    } else if (nl[i].study) {
      nl[i].study = alignStudyShape(lv[i].study, nl[i].study);
      aligned++;
    }
  }
  writeArrayFile(path.join(ROOT, "data/fr", `${level}.js`), VAR_NAMES[level], nl);
  console.log(`Aligned ${level}: removed ${removed} extra studies so far`);
}

console.log(`\nStructure alignment complete. Removed ${removed} extra study blocks, aligned ${aligned}.`);
