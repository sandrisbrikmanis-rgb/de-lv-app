#!/usr/bin/env node
/**
 * Compares a native language's dataset files against the LV originals:
 * record count, field schema, and study.layout distribution. This is
 * the "2.1 Tehniskā/struktūrālā ekvivalence" check from
 * LANGUAGE_AUDIT_STANDARD.md, formalized as a reusable script (§5).
 *
 * Run: node scripts/audit-language-parity.js --lang=lt
 */
const fs = require("fs");
const path = require("path");
const { ROOT, parseLangArg, dataDir, fileExists, loadArrayDataset } = require("./lib/audit-common");

const lang = parseLangArg("lt");
if (lang === "lv") {
  console.log("lang=lv is the baseline itself; nothing to compare against.");
  process.exit(0);
}

const DIR = dataDir(lang);
const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];

// sectionAccents content (which color highlights which word) is
// content-dependent, not structural — a legitimately good LT translation
// can highlight a different color mix than LV for the same section, so
// that subtree is excluded here and validated separately by
// validate-study-design.js's substring-matching check instead.
const SCHEMA_EXCLUDE_KEYS = new Set(["sectionAccents", "accents"]);

function schemaKeys(obj, prefix = "") {
  const keys = [];
  for (const k of Object.keys(obj)) {
    if (SCHEMA_EXCLUDE_KEYS.has(k)) continue;
    const p = prefix ? `${prefix}.${k}` : k;
    keys.push(p);
    const v = obj[k];
    if (v && typeof v === "object" && !Array.isArray(v)) keys.push(...schemaKeys(v, p));
  }
  return keys;
}

const report = { lang, levels: {}, totals: { lvRecords: 0, langRecords: 0, lvStudy: 0, langStudy: 0 }, issues: [] };

for (const level of LEVELS) {
  const lvPath = `data/${level}.js`;
  const langPath = `${DIR}/${level}.js`;

  if (!fileExists(langPath)) {
    report.levels[level] = { status: "missing", note: `${langPath} does not exist for lang="${lang}"` };
    report.issues.push(`${level.toUpperCase()}: entire dataset file missing (${langPath})`);
    continue;
  }

  const lvWords = loadArrayDataset(lvPath) || [];
  const langWords = loadArrayDataset(langPath) || [];

  const lvStudyCount = lvWords.filter((w) => w.study).length;
  const langStudyCount = langWords.filter((w) => w.study).length;

  report.totals.lvRecords += lvWords.length;
  report.totals.langRecords += langWords.length;
  report.totals.lvStudy += lvStudyCount;
  report.totals.langStudy += langStudyCount;

  const levelReport = {
    lvCount: lvWords.length,
    langCount: langWords.length,
    countMatch: lvWords.length === langWords.length,
    lvStudyCount,
    langStudyCount,
    orderMismatches: 0,
    missingFields: [],
    layoutMismatches: [],
  };

  if (!levelReport.countMatch) {
    report.issues.push(`${level.toUpperCase()}: record count mismatch (LV=${lvWords.length}, ${lang.toUpperCase()}=${langWords.length})`);
  }

  const n = Math.min(lvWords.length, langWords.length);
  for (let i = 0; i < n; i++) {
    const lvC = lvWords[i];
    const langC = langWords[i];

    if (lvC.de !== langC.de) {
      levelReport.orderMismatches++;
      continue; // index alignment lost; further per-index checks would be misleading
    }

    const lvKeys = new Set(schemaKeys(lvC).filter((k) => k !== "lv" && !k.startsWith("lv.") && !k.endsWith(".lv")));
    const langKeys = new Set(schemaKeys(langC).filter((k) => k !== "lv" && !k.startsWith("lv.") && !k.endsWith(".lv")));
    const missing = [...lvKeys].filter((k) => !langKeys.has(k));
    if (missing.length && levelReport.missingFields.length < 10) {
      levelReport.missingFields.push({ de: lvC.de, missing });
    }

    const lvLayout = lvC.study?.layout || (lvC.study ? "standardStudy" : null);
    const langLayout = langC.study?.layout || (langC.study ? "standardStudy" : null);
    if (lvLayout !== langLayout && levelReport.layoutMismatches.length < 10) {
      levelReport.layoutMismatches.push({ de: lvC.de, lvLayout, langLayout });
    }
  }

  if (levelReport.orderMismatches > 0) {
    report.issues.push(`${level.toUpperCase()}: ${levelReport.orderMismatches} index-order mismatches (arrays not aligned by "de" field)`);
  }
  if (levelReport.missingFields.length) {
    report.issues.push(`${level.toUpperCase()}: ${levelReport.missingFields.length}+ records with missing fields vs LV`);
  }
  if (levelReport.layoutMismatches.length) {
    report.issues.push(`${level.toUpperCase()}: ${levelReport.layoutMismatches.length}+ records with study.layout mismatch vs LV`);
  }

  report.levels[level] = levelReport;
}

report.pass = report.issues.length === 0;
console.log(JSON.stringify(report, null, 2));
process.exit(report.pass ? 0 : 1);
