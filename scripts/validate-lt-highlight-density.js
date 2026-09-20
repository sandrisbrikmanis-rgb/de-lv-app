#!/usr/bin/env node
/**
 * Regression guard for the LT-DE visual-equivalence audit (2026-07-29):
 * verifies that every LT study card's examples/tip/important section has
 * highlight coverage wherever the LV original has it. Missing highlights
 * render as plain/uncolored text (PROJECT_LANGUAGE_MASTER_STANDARD.md §4.2 violation).
 *
 * Run: node scripts/validate-lt-highlight-density.js
 */
const vm = require("vm");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");

function load(file) {
  const code = fs.readFileSync(path.join(root, file), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return ctx.window[key];
}

function isEmptyObj(obj) {
  return !obj || (typeof obj === "object" && Object.keys(obj).length === 0);
}

const results = [];
for (const lvl of ["a1", "a2", "b1", "b2", "c1", "c2"]) {
  const lv = load("data/" + lvl + ".js");
  const lt = load("data/lt/" + lvl + ".js");
  for (let i = 0; i < lv.length; i++) {
    const lvC = lv[i], ltC = lt[i];
    if (!lvC.study || !lvC.study.sectionAccents) continue;
    const lvSA = lvC.study.sectionAccents;
    const ltSA = ltC.study && ltC.study.sectionAccents;
    const entry = { level: lvl, de: lvC.de, gaps: {} };
    let hasGap = false;

    if (Array.isArray(lvSA.examples) && Array.isArray(lvC.study.examples)) {
      const exGaps = [];
      const realLen = Math.min(lvSA.examples.length, lvC.study.examples.length, (ltC.study.examples || []).length);
      for (let j = 0; j < realLen; j++) {
        const lvRow = lvSA.examples[j] || {};
        const ltRow = (ltSA && Array.isArray(ltSA.examples) && ltSA.examples[j]) || {};
        const deGap = !isEmptyObj(lvRow.de) && isEmptyObj(ltRow.de);
        const lvGap = !isEmptyObj(lvRow.lv) && isEmptyObj(ltRow.lv);
        if (deGap || lvGap) exGaps.push({ row: j, deGap, lvGap });
      }
      if (exGaps.length) { entry.gaps.examples = exGaps; hasGap = true; }
    }

    if (lvSA.tip && lvC.study.tip) {
      const ltTipSA = ltSA && ltSA.tip;
      const lvTipCount = JSON.stringify(lvSA.tip).length;
      const ltTipCount = ltTipSA ? JSON.stringify(ltTipSA).length : 0;
      if (lvTipCount > 20 && ltTipCount < 5) { entry.gaps.tip = true; hasGap = true; }
    }

    if (Array.isArray(lvSA.important) && Array.isArray(lvC.study.important)) {
      const impGaps = [];
      const realLen = Math.min(lvSA.important.length, lvC.study.important.length, (ltC.study.important || []).length);
      for (let j = 0; j < realLen; j++) {
        const lvRow = lvSA.important[j] || {};
        const ltRow = (ltSA && Array.isArray(ltSA.important) && ltSA.important[j]) || {};
        if (!isEmptyObj(lvRow) && isEmptyObj(ltRow)) impGaps.push({ row: j });
      }
      if (impGaps.length) { entry.gaps.important = impGaps; hasGap = true; }
    }

    if (hasGap) results.push(entry);
  }
}

// The former "sitzen"/"stehen" A2 meta-text placeholder rows were
// completed with real example sentences (2026-07-30), so no residual
// gaps are expected anymore.
const ACCEPTED_RESIDUAL_GAPS = 0;

if (results.length > ACCEPTED_RESIDUAL_GAPS) {
  console.error(`Highlight density validation FAILED: ${results.length} cards have new highlight gaps (expected <= ${ACCEPTED_RESIDUAL_GAPS}).`);
  console.error(JSON.stringify(results.slice(0, 20), null, 1));
  process.exit(1);
}

console.log(`Highlight density validation passed: ${results.length} residual gap(s) (accepted baseline: ${ACCEPTED_RESIDUAL_GAPS}).`);
