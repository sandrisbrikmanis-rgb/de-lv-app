#!/usr/bin/env node
"use strict";

/**
 * Simulates importing the 305-key LV Crowdin source into EN and ES ui.js files.
 * Proves all 312 existing keys are preserved (including the +7 locale-only keys).
 */

const fs = require("fs");
const path = require("path");
const {
  CROWDIN_SOURCE_LANG,
  UI_JS_REL,
  abs,
  loadUiObject,
  flattenUiStrings,
  parseCrowdinJson,
  mergeCrowdinImport,
  assertKeysPreserved,
  validateImportGuards,
} = require("./lib/ui-crowdin-bridge");

const TARGETS = ["en", "es"];

/** Keys present in EN/ES but absent from the LV Crowdin source (305-key set). */
const LOCALE_ONLY_KEYS = [
  "splash.ariaLabel",
  "languageSelect.ariaLabel",
  "menu.learningModes",
  "kurss.sections.dialogues",
  "kurss.sections.words",
  "kurss.sections.names",
  "kurss.sections.reading",
];

function main() {
  const lvJsonPath = abs(path.join("crowdin", "ui", `${CROWDIN_SOURCE_LANG}.json`));
  const lvFlat = parseCrowdinJson(fs.readFileSync(lvJsonPath, "utf8"));
  const lvKeyCount = Object.keys(lvFlat).length;
  const failures = [];

  if (lvKeyCount !== 305) {
    failures.push(`LV Crowdin source expected 305 keys, got ${lvKeyCount}`);
  }

  for (const lang of TARGETS) {
    const { obj: existing } = loadUiObject(UI_JS_REL(lang));
    const existingFlat = flattenUiStrings(existing);
    const existingKeyCount = Object.keys(existingFlat).length;

    if (existingKeyCount !== 312) {
      failures.push(`${lang}: expected 312 existing keys, got ${existingKeyCount}`);
      continue;
    }

    const merged = mergeCrowdinImport(existing, lvFlat, lang);
    const mergedFlat = flattenUiStrings(merged);
    failures.push(...assertKeysPreserved(existingFlat, mergedFlat, lang));

    if (Object.keys(mergedFlat).length !== 312) {
      failures.push(
        `${lang}: merged key count ${Object.keys(mergedFlat).length} !== 312 (baseline ${existingKeyCount}, LV overlay ${lvKeyCount})`
      );
    }

    for (const key of LOCALE_ONLY_KEYS) {
      if (mergedFlat[key] !== existingFlat[key]) {
        failures.push(`${lang}: locale-only key ${key} value changed during LV merge import`);
      }
      if (!(key in lvFlat)) {
        continue;
      }
      failures.push(`${lang}: locale-only key ${key} unexpectedly present in LV source`);
    }

    const extraInTarget = Object.keys(existingFlat).filter((k) => !(k in lvFlat));
    if (extraInTarget.length !== LOCALE_ONLY_KEYS.length) {
      failures.push(
        `${lang}: expected ${LOCALE_ONLY_KEYS.length} keys beyond LV source, found ${extraInTarget.length}`
      );
    }

    if (!failures.some((f) => f.startsWith(`${lang}:`))) {
      console.log(
        `OK ${lang}: LV ${lvKeyCount}-key Crowdin overlay → ${Object.keys(mergedFlat).length} keys preserved (incl. ${LOCALE_ONLY_KEYS.length} locale-only)`
      );
    }
  }

  console.log("");
  if (failures.length) {
    console.error("UI Crowdin LV→EN/ES merge import test FAILED:");
    for (const msg of failures) {
      console.error(`  - ${msg}`);
    }
    process.exit(1);
  }

  console.log("UI Crowdin LV→EN/ES merge import test passed: all 312 keys preserved for en and es.");

  // Synthetic guard checks: placeholder multiset + HTML structure must fail on mismatch.
  const sampleExisting = { "buttons.knownWithCount": "Known ({count})" };
  const badPlaceholder = { "buttons.knownWithCount": "Known ({word})" };
  const phErrors = validateImportGuards(sampleExisting, badPlaceholder);
  if (phErrors.length !== 1 || !phErrors[0].includes("placeholder multiset mismatch")) {
    failures.push(`guard test: expected placeholder multiset failure, got ${JSON.stringify(phErrors)}`);
  } else {
    console.log("OK guards: placeholder multiset mismatch detected");
  }

  const htmlExisting = { "info.directionBody": "Toggle <strong>DE→{code}</strong> and <strong>{code}→DE</strong>." };
  const badHtml = { "info.directionBody": "Toggle <em>DE→{code}</em> and <em>{code}→DE</em>." };
  const htmlErrors = validateImportGuards(htmlExisting, badHtml);
  if (htmlErrors.length !== 1 || !htmlErrors[0].includes("HTML tag structure mismatch")) {
    failures.push(`guard test: expected HTML structure failure, got ${JSON.stringify(htmlErrors)}`);
  } else {
    console.log("OK guards: HTML tag structure mismatch detected");
  }

  if (failures.length) {
    console.error("\nUI Crowdin import guard synthetic tests FAILED:");
    for (const msg of failures) {
      console.error(`  - ${msg}`);
    }
    process.exit(1);
  }
}

main();
