#!/usr/bin/env node
/**
 * Verify sectionAccents DE branches match LV-DE master (read-only check).
 * Usage: node scripts/verify-section-accents-de-compliance.js [--lang=en]
 */
const fs = require("fs");
const path = require("path");
const { ROOT, parseLangArg, dataPath } = require("./lib/audit-common");
const { listTargetLanguages, loadArray, syncSectionAccentsDe, LEVELS } = require("./lib/de-sync-core");

function walkDeBranches(lvNode, langNode, mismatches, ctx = "") {
  if (lvNode === undefined || lvNode === null) return;
  if (Array.isArray(lvNode)) {
    lvNode.forEach((lvItem, i) => walkDeBranches(lvItem, langNode?.[i], mismatches, `${ctx}[${i}]`));
    return;
  }
  if (typeof lvNode !== "object") return;

  for (const key of Object.keys(lvNode)) {
    const pathKey = ctx ? `${ctx}.${key}` : key;
    if (key === "lv" || key === "meaning") continue;
    if (key === "de" || key === "word") {
      const lvJson = JSON.stringify(lvNode[key]);
      const langJson = JSON.stringify(langNode?.[key]);
      if (lvJson !== langJson) mismatches.push({ path: pathKey, lv: lvNode[key], lang: langNode?.[key] });
      continue;
    }
    walkDeBranches(lvNode[key], langNode?.[key], mismatches, pathKey);
  }
}

function verifyLang(lang) {
  const mismatches = [];
  let missingStudy = 0;
  for (const level of LEVELS) {
    const langPath = dataPath(lang, `${level}.js`);
    if (!fs.existsSync(path.join(ROOT, langPath))) continue;
    const lv = loadArray(dataPath("lv", `${level}.js`));
    const lg = loadArray(langPath);
    const n = Math.min(lv.data.length, lg.data.length);
    for (let i = 0; i < n; i++) {
      const lsa = lv.data[i].study?.sectionAccents;
      if (!lsa) continue;
      const esa = lg.data[i].study?.sectionAccents;
      if (!esa) {
        missingStudy += 1;
        continue;
      }
      walkDeBranches(lsa, esa, mismatches, `${level}[${i}].${lv.data[i].de}`);
    }
  }
  return { lang, mismatches, missingStudy };
}

function resolveLanguages() {
  const langArg = parseLangArg("");
  if (langArg) return [langArg];
  return listTargetLanguages();
}

function main() {
  const langs = resolveLanguages();
  let totalMismatch = 0;
  let totalMissing = 0;
  for (const lang of langs) {
    const result = verifyLang(lang);
    totalMismatch += result.mismatches.length;
    totalMissing += result.missingStudy;
    const status = result.mismatches.length === 0 ? "PASS" : "FAIL";
    console.log(`${lang}: ${status} de-branch mismatches=${result.mismatches.length} missingSA=${result.missingStudy}`);
    if (result.mismatches.length > 0) {
      result.mismatches.slice(0, 3).forEach((m) => console.log(`  - ${m.path}`));
    }
  }
  console.log(`\nTotal DE-branch mismatches: ${totalMismatch}, missing sectionAccents: ${totalMissing}`);
  if (totalMismatch > 0) process.exit(1);
}

main();
