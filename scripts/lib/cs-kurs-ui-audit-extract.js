#!/usr/bin/env node
/**
 * Extract CS Kurss UI i18n units from languages/cs/ui.js (+ LV master context).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./cs-audit-helpers");

const CS_UI = path.join(ROOT, "languages", "cs", "ui.js");
const LV_UI = path.join(ROOT, "languages", "lv", "ui.js");
const WWW_CS_UI = path.join(ROOT, "www", "languages", "cs", "ui.js");

const KURSS_NAV_KEYS = [
  { key: "menu.course", csPath: "menu.course", lvPath: "menu.course" },
  { key: "progress.courseHeading", csPath: "progress.courseHeading", lvPath: "progress.courseHeading" },
];

function loadUiStrings(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.LANGUAGE_UI_STRINGS || {};
}

function getByPath(obj, dotPath) {
  return dotPath.split(".").reduce((acc, part) => acc?.[part], obj);
}

function flattenKurss(obj, prefix = "kurss") {
  const units = [];
  function walk(value, p) {
    if (value === null || value === undefined) return;
    if (typeof value === "string") {
      units.push({ key: p, currentCs: value });
      return;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
      for (const [k, v] of Object.entries(value)) {
        walk(v, `${p}.${k}`);
      }
    }
  }
  if (obj?.kurss) walk(obj.kurss, "kurss");
  return units;
}

function extractUnits() {
  const csUi = loadUiStrings(CS_UI);
  const lvUi = loadUiStrings(LV_UI);
  const units = flattenKurss(csUi);

  for (const nav of KURSS_NAV_KEYS) {
    units.push({
      key: nav.key,
      currentCs: getByPath(csUi, nav.csPath) || "",
    });
  }

  for (const unit of units) {
    const lvKey = unit.key.startsWith("kurss.") ? unit.key : unit.key;
    unit.lvReference = getByPath(lvUi, lvKey) || "";
  }

  return {
    units,
    csUi,
    lvUi,
    primaryWwwIdentical: fs.existsSync(WWW_CS_UI)
      && fs.readFileSync(CS_UI, "utf8") === fs.readFileSync(WWW_CS_UI, "utf8"),
  };
}

module.exports = {
  CS_UI,
  LV_UI,
  WWW_CS_UI,
  extractUnits,
  loadUiStrings,
};
