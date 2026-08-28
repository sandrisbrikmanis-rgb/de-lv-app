#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const {
  ROOT,
  UI_LANGUAGES,
  CROWDIN_SOURCE_LANG,
  parseCrowdinJson,
  flattenUiStrings,
  loadUiObject,
  UI_JS_REL,
  extractPlaceholderMultiset,
  extractHtmlTagStructure,
} = require("./ui-crowdin-bridge");
const {
  classifySameRow,
  reasonCategoryForIntentional,
} = require("./crowdin-ui-untranslated-classify");

const LOCK_MANIFEST_JSON = path.join(ROOT, "reports", "crowdin-ui-intentional-same-lock-owner.json");
const BASELINE_AUDIT_COMMIT = "3812d92b";

const GERMAN_BRAND_VALUES = new Set(["Deutsch lernen", "Sprache wählen"]);
const GERMAN_BRAND_KEYS = new Set([
  "languageSelect.footer",
  "languageSelect.title",
  "splash.subtitle",
]);

function multisetEqual(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if ((a[key] || 0) !== (b[key] || 0)) return false;
  }
  return true;
}

function rowId(language, key) {
  return `${language}\t${key}`;
}

function loadCrowdinFlatFromCommit(commit, lang) {
  const text = execSync(`git show ${commit}:crowdin/ui/${lang}.json`, {
    cwd: ROOT,
    encoding: "utf8",
  });
  return parseCrowdinJson(text);
}

function loadCrowdinFlatLive(lang) {
  return parseCrowdinJson(
    fs.readFileSync(path.join(ROOT, "crowdin", "ui", `${lang}.json`), "utf8")
  );
}

function loadLvFlat(commit = "HEAD") {
  if (commit === "HEAD") {
    return parseCrowdinJson(
      fs.readFileSync(path.join(ROOT, "crowdin", "ui", `${CROWDIN_SOURCE_LANG}.json`), "utf8")
    );
  }
  return loadCrowdinFlatFromCommit(commit, CROWDIN_SOURCE_LANG);
}

function collectIntentionalSameRows(commit = "HEAD") {
  const lvFlat = loadLvFlat(commit);
  const lvKeys = Object.keys(lvFlat).sort();
  const rows = [];

  for (const lang of UI_LANGUAGES.filter((code) => code !== CROWDIN_SOURCE_LANG)) {
    const jsonFlat = commit === "HEAD" ? loadCrowdinFlatLive(lang) : loadCrowdinFlatFromCommit(commit, lang);
    const uiFlat =
      commit === "HEAD"
        ? flattenUiStrings(loadUiObject(UI_JS_REL(lang)).obj)
        : null;

    for (const key of lvKeys) {
      if (jsonFlat[key] !== lvFlat[key]) continue;
      const [status, rationale] = classifySameRow(key, lvFlat[key]);
      if (status !== "INTENTIONAL_SAME") continue;

      rows.push({
        language: lang,
        key,
        lvSource: lvFlat[key],
        current: jsonFlat[key],
        uiCurrent: uiFlat ? uiFlat[key] : undefined,
        status,
        rationale,
        reasonCategory: reasonCategoryForIntentional(key, lvFlat[key], rationale),
      });
    }
  }

  return rows;
}

function computeDelta(baselineCommit = BASELINE_AUDIT_COMMIT) {
  const baseline = collectIntentionalSameRows(baselineCommit);
  const current = collectIntentionalSameRows("HEAD");
  const baselineSet = new Set(baseline.map((row) => rowId(row.language, row.key)));
  const currentSet = new Set(current.map((row) => rowId(row.language, row.key)));

  const added = current.filter((row) => !baselineSet.has(rowId(row.language, row.key)));
  const removed = baseline.filter((row) => !currentSet.has(rowId(row.language, row.key)));

  const baselineLv = loadLvFlat(baselineCommit);
  function statusChangeReasonForRow(row, baselineCurrent, wasSame, baselineStatus) {
    if (wasSame && baselineStatus !== "INTENTIONAL_SAME") {
      return `Baseline target===LV, bet statuss bija ${baselineStatus}, nevis INTENTIONAL_SAME`;
    }
    if (row.key === "verb.hintSessionProgress") {
      return `Placeholder remonts atjaunoja {tap} tokenus: \`${baselineCurrent}\` → \`${row.current}\``;
    }
    if (row.key === "direction.deToNative" || row.key === "direction.nativeToDe") {
      if (baselineCurrent && !baselineCurrent.includes("{code}")) {
        return `Placeholder remonts atjaunoja {code} / virziena kodu: \`${baselineCurrent}\` → \`${row.current}\``;
      }
      return `Placeholder remonts salāgoja virziena rindu ar LV: \`${baselineCurrent}\` → \`${row.current}\``;
    }
    return `Pēc placeholder remonta (ceaae08d) CURRENT kļuva identisks LV_SOURCE (bija \`${baselineCurrent}\`)`;
  }

  const enrichedAdded = added.map((row) => {
    const baseTarget = loadCrowdinFlatFromCommit(baselineCommit, row.language);
    const baselineCurrent = baseTarget[row.key];
    const wasSame = baselineCurrent === baselineLv[row.key];
    const [baselineStatus] = wasSame
      ? classifySameRow(row.key, baselineLv[row.key])
      : ["NOT_SAME"];
    return {
      ...row,
      baselineCurrent,
      previousStatus: wasSame ? baselineStatus : "NOT_SAME",
      newStatus: "INTENTIONAL_SAME",
      statusChangeReason: statusChangeReasonForRow(row, baselineCurrent, wasSame, baselineStatus),
      ownerReviewRequired: "YES",
    };
  });

  return {
    baselineCommit,
    baselineCount: baseline.length,
    currentCount: current.length,
    added: enrichedAdded,
    removed,
    baselineRows: baseline,
    currentRows: current,
  };
}

function validateReasonCategory(row) {
  const { key, lvSource, reasonCategory } = row;
  if (reasonCategory === "LATIN_GRAMMAR") {
    if (key !== "verb.infinitiv" || lvSource !== "Infinitiv") {
      return `LATIN_GRAMMAR prasa key=verb.infinitiv un LV=Infinitiv`;
    }
    return null;
  }
  if (reasonCategory === "GERMAN_BRAND") {
    if (!GERMAN_BRAND_KEYS.has(key) || !GERMAN_BRAND_VALUES.has(lvSource)) {
      return `GERMAN_BRAND prasa atslēgu no ${[...GERMAN_BRAND_KEYS].join(", ")} un LV no zīmola kopas`;
    }
    return null;
  }
  if (reasonCategory === "DE_CODE") {
    if (!["study.table.german", "direction.deToNative", "direction.nativeToDe"].includes(key)) {
      return `DE_CODE neatbilst atļautajām atslēgām`;
    }
    return null;
  }
  if (reasonCategory === "PLACEHOLDER") {
    if (key !== "verb.hintSessionProgress") {
      return `PLACEHOLDER kategorijai neatbilst atslēga`;
    }
    return null;
  }
  if (reasonCategory === "GERMAN_PEDAGOGY") {
    if (!/^kurss\.lessonItems\.\d+\.menuDesc$/.test(key)) {
      return `GERMAN_PEDAGOGY prasa kurss.lessonItems.N.menuDesc`;
    }
    return null;
  }
  return null;
}

function validateLockRow(row, lvFlat, jsonFlat, uiFlat) {
  const errors = [];
  const key = row.key;
  const lang = row.language;
  const lvSource = lvFlat[key];

  if (!Object.prototype.hasOwnProperty.call(jsonFlat, key)) {
    errors.push("missing in crowdin/ui JSON");
  }
  if (!Object.prototype.hasOwnProperty.call(uiFlat, key)) {
    errors.push("missing in languages/ui.js");
  }
  if (jsonFlat[key] !== uiFlat[key]) {
    errors.push("JSON value !== ui.js value");
  }
  if (jsonFlat[key] !== lvSource) {
    errors.push("CURRENT !== LV_SOURCE");
  }
  if (!multisetEqual(extractPlaceholderMultiset(lvSource), extractPlaceholderMultiset(jsonFlat[key]))) {
    errors.push("placeholder multiset mismatch");
  }
  if (extractHtmlTagStructure(lvSource) !== extractHtmlTagStructure(jsonFlat[key])) {
    errors.push("HTML structure mismatch");
  }

  const categoryError = validateReasonCategory({
    key,
    lvSource,
    reasonCategory: row.reasonCategory,
  });
  if (categoryError) errors.push(categoryError);

  const [liveStatus] = classifySameRow(key, lvSource);
  if (liveStatus !== "INTENTIONAL_SAME") {
    errors.push(`live classify=${liveStatus}, expected INTENTIONAL_SAME`);
  }

  return errors;
}

function enrichLockRows(currentRows, deltaAddedIds) {
  return currentRows.map((row) => {
    const id = rowId(row.language, row.key);
    const isDelta = deltaAddedIds.has(id);
    return {
      language: row.language,
      key: row.key,
      lvSource: row.lvSource,
      current: row.current,
      uiCurrent: row.uiCurrent,
      ownerStatus: isDelta ? "OWNER_REVIEW_REQUIRED" : "NELABOT_CANDIDATE",
      ownerReviewRequired: isDelta ? "YES" : "NO",
      crowdinLock: "YES",
      lockEnforced: "NO",
      crowdinProtection: "PENDING",
      reasonCategory: row.reasonCategory,
      reason: row.rationale,
      jsonUiMatch: row.uiCurrent === row.current,
      baselineIncluded: !isDelta,
    };
  });
}

function loadLockManifest() {
  if (!fs.existsSync(LOCK_MANIFEST_JSON)) {
    throw new Error(`Missing lock manifest: ${LOCK_MANIFEST_JSON}`);
  }
  return JSON.parse(fs.readFileSync(LOCK_MANIFEST_JSON, "utf8"));
}

module.exports = {
  ROOT,
  LOCK_MANIFEST_JSON,
  BASELINE_AUDIT_COMMIT,
  rowId,
  collectIntentionalSameRows,
  computeDelta,
  validateLockRow,
  validateReasonCategory,
  enrichLockRows,
  loadLockManifest,
  loadLvFlat,
  loadCrowdinFlatLive,
  multisetEqual,
};
