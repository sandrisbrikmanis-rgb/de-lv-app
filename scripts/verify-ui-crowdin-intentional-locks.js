#!/usr/bin/env node
"use strict";

/**
 * Verify INTENTIONAL_SAME lock manifest against live crowdin/ui + languages/ui.js.
 * READ-ONLY regression gate — fails if protected rows drift.
 */

const { execSync } = require("child_process");
const {
  ROOT,
  BASELINE_AUDIT_COMMIT,
  computeDelta,
  validateLockRow,
  loadLockManifest,
  loadLvFlat,
  loadCrowdinFlatLive,
} = require("./lib/crowdin-ui-intentional-lock-core");
const {
  flattenUiStrings,
  loadUiObject,
  UI_JS_REL,
} = require("./lib/ui-crowdin-bridge");

function countProductionChanges() {
  try {
    const diff = execSync("git diff --name-only -- crowdin/ui languages", {
      cwd: ROOT,
      encoding: "utf8",
    }).trim();
    return diff ? diff.split("\n").filter(Boolean).length : 0;
  } catch {
    return -1;
  }
}

function isProtectedOwnerRow(row) {
  return (
    row.crowdinLock === "YES" &&
    (row.ownerStatus === "NELABOT" || row.ownerStatus === "NELABOT_CANDIDATE")
  );
}

function main() {
  const manifest = loadLockManifest();
  const lvFlat = loadLvFlat("HEAD");
  const failures = [];
  const gates = {
    BASELINE: 170,
    CANDIDATES: manifest.total || manifest.rows.length,
    DELTA: 0,
    OWNER_CONFIRMED: 0,
    OWNER_REVIEW_REQUIRED: 0,
    INVALID: 0,
    jsonMismatch: 0,
    uiMismatch: 0,
    placeholderErrors: 0,
    htmlErrors: 0,
    productionChanges: countProductionChanges(),
  };

  const delta = computeDelta(BASELINE_AUDIT_COMMIT);
  gates.DELTA = delta.added.length;
  gates.BASELINE = delta.baselineCount;
  gates.CANDIDATES = delta.currentCount;

  for (const row of manifest.rows) {
    if (row.ownerReviewRequired === "YES") {
      gates.OWNER_REVIEW_REQUIRED += 1;
    }
    if (row.ownerStatus === "NELABOT") {
      gates.OWNER_CONFIRMED += 1;
    }

    const lang = row.language;
    const key = row.key;
    let jsonFlat;
    let uiFlat;
    try {
      jsonFlat = loadCrowdinFlatLive(lang);
      uiFlat = flattenUiStrings(loadUiObject(UI_JS_REL(lang)).obj);
    } catch (err) {
      failures.push({
        language: lang,
        key,
        expected: row.current,
        actual: err.message,
        file: `crowdin/ui/${lang}.json`,
      });
      gates.INVALID += 1;
      continue;
    }

    const validationErrors = validateLockRow(row, lvFlat, jsonFlat, uiFlat);
    if (validationErrors.length) {
      gates.INVALID += 1;
      for (const message of validationErrors) {
        if (message.includes("JSON value")) gates.jsonMismatch += 1;
        if (message.includes("ui.js")) gates.uiMismatch += 1;
        if (message.includes("placeholder")) gates.placeholderErrors += 1;
        if (message.includes("HTML")) gates.htmlErrors += 1;
        failures.push({
          language: lang,
          key,
          expected: row.current,
          actual: message,
          file: message.includes("ui.js")
            ? `languages/${lang}/ui.js`
            : `crowdin/ui/${lang}.json`,
        });
      }
      continue;
    }

    if (jsonFlat[key] !== row.current) {
      gates.jsonMismatch += 1;
      if (isProtectedOwnerRow(row)) {
        failures.push({
          language: lang,
          key,
          expected: row.current,
          actual: jsonFlat[key],
          file: `crowdin/ui/${lang}.json`,
        });
      }
    }
    if (uiFlat[key] !== row.current) {
      gates.uiMismatch += 1;
      if (isProtectedOwnerRow(row)) {
        failures.push({
          language: lang,
          key,
          expected: row.current,
          actual: uiFlat[key],
          file: `languages/${lang}/ui.js`,
        });
      }
    }
  }

  console.log("INTENTIONAL_SAME lock verification gates:");
  console.log(JSON.stringify(gates, null, 2));

  if (failures.length) {
    console.error(`\nFAIL: ${failures.length} issue(s)`);
    for (const failure of failures) {
      console.error(
        `${failure.language}\t${failure.key}\tEXPECTED=${JSON.stringify(failure.expected)}\tACTUAL=${JSON.stringify(failure.actual)}\tFILE=${failure.file}`
      );
    }
    process.exit(1);
  }

  if (gates.OWNER_REVIEW_REQUIRED > 0) {
    console.log(
      `\nNOTE: OWNER_REVIEW_REQUIRED=${gates.OWNER_REVIEW_REQUIRED} — PR should remain Draft until OWNER confirms delta rows.`
    );
  }

  if (gates.productionChanges > 0) {
    console.error(`\nFAIL: productionChanges=${gates.productionChanges} (expected 0 in validation phase)`);
    process.exit(1);
  }

  console.log(
    `\nOK: intentional lock manifest matches live crowdin/ui + languages/ui.js (${manifest.rows.length} rows)`
  );
}

main();
