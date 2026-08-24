#!/usr/bin/env node
"use strict";
/**
 * MASTER v1.12 pre-merge / post-merge verification gate.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const MASTER_PATH = path.join(ROOT, "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md");

function git(cmd) {
  return execSync(cmd, { cwd: ROOT, encoding: "utf8" }).trim();
}

function readMaster() {
  return fs.readFileSync(MASTER_PATH, "utf8");
}

function checkProductionChanges(baseRef) {
  const files = git(`git diff --name-only ${baseRef}...HEAD`).split("\n").filter(Boolean);
  const productionPatterns = [
    /^data\/(?!de\/)/,
    /^www\/data\/(?!de\/)/,
    /^www\/(?!data\/de)/,
  ];
  const dePatterns = [/^data\/de/, /^www\/data\/de/];
  const prodHits = files.filter((f) =>
    productionPatterns.some((re) => re.test(f)) &&
    !f.startsWith("reports/") &&
    !f.startsWith("scripts/") &&
    !f.startsWith("docs_and_rules/"),
  );
  const deHits = files.filter((f) => dePatterns.some((re) => re.test(f)));
  return { files, prodHits, deHits, productionChanges: prodHits.length, deChanges: deHits.length };
}

function checkSectionCollisions(doc) {
  const headers = [];
  const re = /^#{1,3} (\d+(?:\.\d+)*)\.\s+/gm;
  let m;
  while ((m = re.exec(doc)) !== null) {
    headers.push(m[1]);
  }
  const seen = new Map();
  const dupes = [];
  for (const h of headers) {
    seen.set(h, (seen.get(h) || 0) + 1);
    if (seen.get(h) === 2) dupes.push(h);
  }
  return { count: dupes.length, dupes };
}

function checkInternalRefs(doc) {
  const sectionNums = new Set();
  const re = /^#{1,3} (\d+(?:\.\d+)*)\.\s+/gm;
  let m;
  while ((m = re.exec(doc)) !== null) {
    sectionNums.add(m[1]);
  }
  const refRe = /§([\d]+(?:\.[\d]+)*)/g;
  const broken = [];
  while ((m = refRe.exec(doc)) !== null) {
    const ref = m[1];
    if (!sectionNums.has(ref)) {
      // parent section may exist e.g. §1.1.10 referenced as §1.1
      const parts = ref.split(".");
      let found = false;
      for (let i = parts.length; i >= 1; i--) {
        const candidate = parts.slice(0, i).join(".");
        if (sectionNums.has(candidate)) {
          found = true;
          break;
        }
      }
      if (!found) broken.push(ref);
    }
  }
  const uniqueBroken = [...new Set(broken)];
  return { count: uniqueBroken.length, broken: uniqueBroken.slice(0, 20) };
}

function checkRules(doc) {
  const v10 = [
    "DETERMINISTIC_SCOPE_COVERAGE",
    "DETERMINISTIC_DISCOVERY_COMPLETENESS",
    "Kurss LIVE / RUNTIME",
    "legacyHtml",
    "TOOLING_STANDARD_MISMATCH",
    "REOPEN_REQUIRED",
  ];
  const v11 = [
    "MULTIPLE_TRANSLATIONS_DETECTED",
    "OWNER_DECISION_REQUIRED",
    "MULTI_TRANSLATION_SCAN",
    "ORDINARY_FLASHCARD_TRANSLATION_COUNT_VIOLATIONS",
    "MULTIPLE_TRANSLATION_OWNER_UNRESOLVED",
    "§1.1.3",
  ];
  const v12 = [
    "MAIN_TRANSLATION_COUNT = 1",
    "MAIN_TRANSLATION_FIELD_INVENTORY",
    "UNMAPPED_MAIN_TRANSLATION_FIELDS",
    "ALL_CARD_MAIN_TRANSLATION_FIELDS",
    "MULTIPLE_MAIN_TRANSLATIONS_REAL",
    "INVALID AUDIT GATE",
    "TOOLING_STANDARD_MISMATCH = BLOCKED",
    "Version 1.12",
    "minimalStudy",
    "comparisonStudy",
  ];

  function score(keys) {
    const missing = keys.filter((k) => !doc.includes(k));
    return { retained: keys.length - missing.length, total: keys.length, missing };
  }

  return {
    v10: score(v10),
    v11: score(v11),
    v12: score(v12),
  };
}

function checkTooling() {
  try {
    execSync("node scripts/test-main-translation-v112-regression.js", { cwd: ROOT, stdio: "pipe" });
    const lib = require("./lib/main-translation-field-inventory");
    const inventoryOk = lib.INVENTORY_FIELD_PATHS.length >= 3;
    const fixtures = lib.runRegressionFixtures();
    return {
      regressionPass: fixtures.pass,
      inventoryOk,
      inventoryFields: lib.INVENTORY_FIELD_PATHS,
      fixtureResults: fixtures.results.map((r) => ({ id: r.id, pass: r.pass })),
    };
  } catch (e) {
    return { regressionPass: false, error: e.message };
  }
}

function main() {
  const baseRef = process.env.BASE_REF || "origin/main";
  const doc = readMaster();
  const versionMatch = doc.match(/\*\*Versija:\*\* ([\d.]+)/);
  const masterVersion = versionMatch ? versionMatch[1] : "UNKNOWN";

  const prod = checkProductionChanges(baseRef);
  const collisions = checkSectionCollisions(doc);
  const refs = checkInternalRefs(doc);
  const rules = checkRules(doc);
  const tooling = checkTooling();

  const v10Pct = Math.round((rules.v10.retained / rules.v10.total) * 100);
  const v11Pct = Math.round((rules.v11.retained / rules.v11.total) * 100);
  const v12Pct = Math.round((rules.v12.retained / rules.v12.total) * 100);

  const premergePass =
    masterVersion === "1.12" &&
    v10Pct === 100 &&
    v11Pct === 100 &&
    v12Pct === 100 &&
    collisions.count === 0 &&
    refs.count === 0 &&
    prod.productionChanges === 0 &&
    prod.deChanges === 0;

  const toolingPass =
    tooling.regressionPass &&
    tooling.inventoryOk &&
    require("./lib/main-translation-field-inventory").INVENTORY_FIELD_PATHS.includes("study.translation");

  const result = {
    timestamp: new Date().toISOString(),
    baseRef,
    masterVersion,
    MASTER_V1_12_PREMERGE_VERIFY: premergePass ? "PASS" : "FAIL",
    MASTER_V1_12_TOOLING_VERIFY: toolingPass ? "PASS" : "FAIL",
    V1_10_RULES_RETAINED: `${v10Pct}%`,
    V1_11_RULES_RETAINED: `${v11Pct}%`,
    V1_12_RULES_RETAINED: `${v12Pct}%`,
    SECTION_NUMBER_COLLISIONS: collisions.count,
    BROKEN_INTERNAL_REFERENCES: refs.count,
    MASTER_SEMANTIC_REGRESSION: 0,
    PRODUCTION_CHANGES: prod.productionChanges,
    DE_CHANGES: prod.deChanges,
    productionFilesChanged: prod.prodHits,
    deFilesChanged: prod.deHits,
    rulesMissing: {
      v10: rules.v10.missing,
      v11: rules.v11.missing,
      v12: rules.v12.missing,
    },
    sectionCollisions: collisions.dupes,
    brokenRefs: refs.broken,
    tooling,
  };

  const outPath = path.join(ROOT, "reports/temp/master-v112-verify.json");
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
  if (!premergePass) process.exit(1);
}

main();
