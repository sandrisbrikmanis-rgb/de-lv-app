#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { verifyEmbeddedLanguageRegistry } = require("./official-language-sources-registry");

const ROOT = path.join(__dirname, "..", "..");
const MASTER_PATH = path.join(ROOT, "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md");
const APVIENOTS_PATH = path.join(
  ROOT,
  "docs_and_rules/MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md",
);
const BINDING_PATH = path.join(ROOT, "docs_and_rules/MASTER_1.12_BINDING_WORK_AGREEMENT.md");

/** Floor for MASTER semantic line retention (v1.12+ standard line). */
const MASTER_VERSION_FLOOR = "1.12";
/** Authorized production MASTER on main after PR #831 (do not regress below). */
const MASTER_VERSION_AUTHORIZED_MIN = "1.18";

const BATCH_TABLE_LINES = [
  "| G2 ordinary cards | 25 |",
  "| G2 `minimalStudy` | 10 |",
  "| G2 `standardStudy` | 5 |",
  "| G1 `sentences` — pilni teikumu objekti | 25 |",
  "| G1 `verbs` — pilni verba objekti (5 formas nedalāmas) | 10 |",
  "| G1 `courseTrainingCards` — pilni training-card objekti | 50 |",
  "| G3 `courseLessons` — pilni lesson objekti | 20 |",
];

function git(cmd, cwd = ROOT) {
  return execSync(cmd, { cwd, encoding: "utf8" }).trim();
}

function readUtf8(absPath) {
  return fs.readFileSync(absPath, "utf8");
}

function parseVersion(version) {
  if (!version || typeof version !== "string") return null;
  const m = version.trim().match(/^(\d+)\.(\d+)(?:\.(\d+))?$/);
  if (!m) return null;
  return { major: Number(m[1]), minor: Number(m[2]), patch: Number(m[3] || 0), raw: version.trim() };
}

function compareVersions(a, b) {
  const va = parseVersion(a);
  const vb = parseVersion(b);
  if (!va || !vb) return null;
  if (va.major !== vb.major) return va.major - vb.major;
  if (va.minor !== vb.minor) return va.minor - vb.minor;
  return va.patch - vb.patch;
}

function readMasterVersion(doc) {
  const versionMatch = doc.match(/\*\*Versija:\*\* ([\d.]+)/);
  return versionMatch ? versionMatch[1] : "UNKNOWN";
}

function checkMasterVersion(doc) {
  const masterVersion = readMasterVersion(doc);
  const parsed = parseVersion(masterVersion);
  const floorCmp = compareVersions(masterVersion, MASTER_VERSION_FLOOR);
  const authorizedCmp = compareVersions(masterVersion, MASTER_VERSION_AUTHORIZED_MIN);
  const pass =
    parsed !== null &&
    floorCmp !== null &&
    floorCmp >= 0 &&
    authorizedCmp !== null &&
    authorizedCmp >= 0;
  return {
    pass,
    masterVersion,
    floor: MASTER_VERSION_FLOOR,
    authorizedMin: MASTER_VERSION_AUTHORIZED_MIN,
    reason: pass
      ? null
      : `MASTER version must be >= ${MASTER_VERSION_AUTHORIZED_MIN} (floor ${MASTER_VERSION_FLOOR}); got ${masterVersion}`,
  };
}

function checkProductionChanges(baseRef) {
  const files = git(`git diff --name-only ${baseRef}...HEAD`).split("\n").filter(Boolean);
  const productionPatterns = [
    /^data\/(?!de\/)/,
    /^www\/data\/(?!de\/)/,
    /^www\/(?!data\/de)/,
  ];
  const dePatterns = [/^data\/de/, /^www\/data\/de/];
  const prodHits = files.filter(
    (f) =>
      productionPatterns.some((re) => re.test(f)) &&
      !f.startsWith("reports/") &&
      !f.startsWith("scripts/") &&
      !f.startsWith("docs_and_rules/"),
  );
  const deHits = files.filter((f) => dePatterns.some((re) => re.test(f)));
  return { files, prodHits, deHits, productionChanges: prodHits.length, deChanges: deHits.length };
}

/**
 * Section numbers must be unique within each document (not across unrelated docs).
 * Only ## / ### numbered headings collide with same top-level # N in the SAME file.
 */
function checkSectionCollisionsInDocument(doc, docLabel) {
  const entries = [];
  const re = /^(#{1,3}) (\d+(?:\.\d+)*)\.\s+(.+)$/gm;
  let m;
  while ((m = re.exec(doc)) !== null) {
    entries.push({
      level: m[1].length,
      number: m[2],
      title: m[3].trim(),
      index: m.index,
    });
  }
  const lineStarts = doc.split("\n").reduce((acc, line, i) => {
    acc.push((acc[i - 1] ?? 0) + line.length + 1);
    return acc;
  }, []);

  function lineOf(index) {
    for (let i = 0; i < lineStarts.length; i++) {
      if (lineStarts[i] > index) return i + 1;
    }
    return lineStarts.length;
  }

  const byNumber = new Map();
  for (const e of entries) {
    if (!byNumber.has(e.number)) byNumber.set(e.number, []);
    byNumber.get(e.number).push({ ...e, line: lineOf(e.index) });
  }

  const dupes = [];
  for (const [num, list] of byNumber) {
    if (list.length > 1) {
      dupes.push({
        document: docLabel,
        sectionNumber: num,
        occurrences: list.map((x) => ({
          line: x.line,
          markdownLevel: x.level,
          title: x.title,
        })),
      });
    }
  }
  return { count: dupes.length, dupes };
}

function checkAllSectionCollisions() {
  const docs = [
    { label: "PROJECT_LANGUAGE_MASTER_STANDARD.md", path: MASTER_PATH },
    { label: "MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md", path: APVIENOTS_PATH },
    { label: "MASTER_1.12_BINDING_WORK_AGREEMENT.md", path: BINDING_PATH },
  ];
  const allDupes = [];
  for (const d of docs) {
    if (!fs.existsSync(d.path)) {
      allDupes.push({
        document: d.label,
        sectionNumber: "MISSING_FILE",
        occurrences: [{ line: 0, markdownLevel: 0, title: d.path }],
      });
      continue;
    }
    const r = checkSectionCollisionsInDocument(readUtf8(d.path), d.label);
    allDupes.push(...r.dupes);
  }
  return { count: allDupes.length, dupes: allDupes };
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

function checkBatchTableUnchanged(doc) {
  const missing = BATCH_TABLE_LINES.filter((line) => !doc.includes(line));
  return {
    pass: missing.length === 0,
    expectedLines: BATCH_TABLE_LINES.length,
    missing,
  };
}

function checkApvienotsDocReferences() {
  const apvienotsName = "MASTER_1.12_LINGVISTISKA_AUDITA_GROZIJUMI_APVIENOTS.md";
  const docs = [MASTER_PATH, BINDING_PATH].filter((p) => fs.existsSync(p));
  const missingIn = [];
  for (const p of docs) {
    const text = readUtf8(p);
    if (!text.includes(apvienotsName)) {
      missingIn.push(path.relative(ROOT, p));
    }
  }
  return { pass: missingIn.length === 0, missingIn, apvienotsName };
}

function checkRequiredMasterFiles() {
  const required = [APVIENOTS_PATH, MASTER_PATH, BINDING_PATH];
  const missing = required.filter((p) => !fs.existsSync(p)).map((p) => path.relative(ROOT, p));
  return { pass: missing.length === 0, missing };
}

function checkTooling() {
  try {
    execSync("node scripts/test-main-translation-v112-regression.js", { cwd: ROOT, stdio: "pipe" });
    const lib = require("./main-translation-field-inventory");
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

function runMasterPremergeVerify(options = {}) {
  const baseRef = options.baseRef || process.env.BASE_REF || "origin/main";
  const doc = readUtf8(MASTER_PATH);
  const versionCheck = checkMasterVersion(doc);
  const prod = checkProductionChanges(baseRef);
  const collisions = checkAllSectionCollisions();
  const refs = checkInternalRefs(doc);
  const rules = checkRules(doc);
  const batchTable = checkBatchTableUnchanged(doc);
  const docRefs = checkApvienotsDocReferences();
  const requiredFiles = checkRequiredMasterFiles();
  const embeddedRegistry = verifyEmbeddedLanguageRegistry(ROOT);
  const tooling = checkTooling();

  const v10Pct = Math.round((rules.v10.retained / rules.v10.total) * 100);
  const v11Pct = Math.round((rules.v11.retained / rules.v11.total) * 100);
  const v12Pct = Math.round((rules.v12.retained / rules.v12.total) * 100);

  const premergePass =
    versionCheck.pass &&
    v10Pct === 100 &&
    v11Pct === 100 &&
    v12Pct === 100 &&
    collisions.count === 0 &&
    refs.count === 0 &&
    prod.productionChanges === 0 &&
    prod.deChanges === 0 &&
    batchTable.pass &&
    docRefs.pass &&
    requiredFiles.pass &&
    embeddedRegistry.pass;

  const toolingPass =
    tooling.regressionPass &&
    tooling.inventoryOk &&
    require("./main-translation-field-inventory").INVENTORY_FIELD_PATHS.includes("study.translation");

  const blockers = [];
  if (!versionCheck.pass) blockers.push({ code: "MASTER_VERSION", message: versionCheck.reason });
  if (v10Pct !== 100) blockers.push({ code: "V1_10_RULES", message: "v1.10 rule retention incomplete" });
  if (v11Pct !== 100) blockers.push({ code: "V1_11_RULES", message: "v1.11 rule retention incomplete" });
  if (v12Pct !== 100) blockers.push({ code: "V1_12_RULES", message: "v1.12 rule retention incomplete" });
  if (collisions.count > 0) {
    blockers.push({
      code: "SECTION_NUMBER_COLLISIONS",
      message: `Duplicate section numbers within document scope: ${JSON.stringify(collisions.dupes)}`,
    });
  }
  if (refs.count > 0) blockers.push({ code: "BROKEN_INTERNAL_REFERENCES", message: refs.broken.join(", ") });
  if (prod.productionChanges > 0) blockers.push({ code: "PRODUCTION_DIFF", message: prod.prodHits.join(", ") });
  if (prod.deChanges > 0) blockers.push({ code: "DE_DIFF", message: prod.deHits.join(", ") });
  if (!batchTable.pass) blockers.push({ code: "BATCH_TABLE_CHANGED", message: batchTable.missing.join("; ") });
  if (!docRefs.pass) blockers.push({ code: "DOC_REFS_APVIENOTS", message: docRefs.missingIn.join(", ") });
  if (!requiredFiles.pass) blockers.push({ code: "REQUIRED_FILES_MISSING", message: requiredFiles.missing.join(", ") });
  if (!embeddedRegistry.pass) {
    blockers.push({
      code: embeddedRegistry.blockerCode || "EMBEDDED_LANGUAGE_REGISTRY_FAIL",
      message: embeddedRegistry.blockerMessage || "Embedded language registry verification failed",
    });
  }

  return {
    timestamp: new Date().toISOString(),
    baseRef,
    masterVersion: versionCheck.masterVersion,
    MASTER_VERSION_CHECK: versionCheck.pass ? "PASS" : "FAIL",
    MASTER_V1_12_PREMERGE_VERIFY: premergePass ? "PASS" : "FAIL",
    MASTER_V1_12_TOOLING_VERIFY: toolingPass ? "PASS" : "FAIL",
    V1_10_RULES_RETAINED: `${v10Pct}%`,
    V1_11_RULES_RETAINED: `${v11Pct}%`,
    V1_12_RULES_RETAINED: `${v12Pct}%`,
    SECTION_NUMBER_COLLISIONS: collisions.count,
    BROKEN_INTERNAL_REFERENCES: refs.count,
    BATCH_TABLE_UNCHANGED: batchTable.pass ? "PASS" : "FAIL",
    EMBEDDED_LANGUAGE_REGISTRY: embeddedRegistry.pass ? "PASS" : "FAIL",
    EMBEDDED_LANGUAGE_REGISTRY_COUNT: embeddedRegistry.EMBEDDED_LANGUAGE_REGISTRY_COUNT,
    LANGUAGE_CODE_DUPLICATES: embeddedRegistry.LANGUAGE_CODE_DUPLICATES,
    MISSING_LANGUAGE_CODES: embeddedRegistry.MISSING_LANGUAGE_CODES,
    UNKNOWN_LANGUAGE_CODES: embeddedRegistry.UNKNOWN_LANGUAGE_CODES,
    DOC_REFERENCES_APVIENOTS: docRefs.pass ? "PASS" : "FAIL",
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
    versionCheck,
    batchTable,
    docRefs,
    requiredFiles,
    embeddedRegistry,
    tooling,
    blockers,
  };
}

module.exports = {
  ROOT,
  MASTER_PATH,
  APVIENOTS_PATH,
  BATCH_TABLE_LINES,
  runMasterPremergeVerify,
  checkSectionCollisionsInDocument,
  parseVersion,
  compareVersions,
};
