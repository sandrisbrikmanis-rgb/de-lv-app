#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const { READ_ONLY_FIELD_SEGMENTS, TARGET_LANGUAGES, CROWDIN_SOURCE_LANG } = require("./constants");
const { parseCrowdinJson, validateImportGuards } = require("./guards");
const { getLvG2SourceKeySet, exportG2LevelFlat, loadG2Level } = require("./roundtrip");
const { g2LevelCrowdinPath } = require("./locale-map");

const MULTI_TRANSLATION_SEP = " • ";
const G2_A1_EXPECTED_KEY_COUNT = 2971;
const G2_A1_EXPECTED_OBJECT_COUNT = 702;

const FORBIDDEN_OUTPUT_PREFIXES = [
  "data/",
  "www/data/",
  "languages/",
  "www/languages/",
];

const DEFAULT_STAGING_ROOT = path.join(ROOT, "reports", "staging", "crowdin-content");

function isProductionPath(absPath) {
  const resolved = path.resolve(absPath);
  const rel = path.relative(ROOT, resolved).replace(/\\/g, "/");
  if (rel.startsWith("..") || rel === "") {
    return false;
  }
  return FORBIDDEN_OUTPUT_PREFIXES.some((prefix) => rel === prefix.slice(0, -1) || rel.startsWith(prefix));
}

function assertStagingDirectory(stagingDir) {
  const resolved = path.resolve(stagingDir);
  if (isProductionPath(resolved)) {
    const err = new Error(`STAGING_PATH_FORBIDDEN: ${resolved}`);
    err.code = "STAGING_PATH_FORBIDDEN";
    throw err;
  }
  return resolved;
}

function isStructuralOrForbiddenKey(key) {
  const segments = key.split(".");
  for (const segment of segments) {
    const base = segment.replace(/\[\d+\]/g, "");
    if (READ_ONLY_FIELD_SEGMENTS.has(base)) return true;
  }
  if (/\.de(\.|$)/.test(key)) return true;
  if (/\.de_article(\.|$)/.test(key)) return true;
  if (/\.de_plural(\.|$)/.test(key)) return true;
  if (/\.word(\.|$)/.test(key)) return true;
  return false;
}

function detectMultipleTranslations(value) {
  if (typeof value !== "string" || !value.includes(MULTI_TRANSLATION_SEP)) {
    return { multiple: false, candidates: [] };
  }
  const parts = value
    .split(MULTI_TRANSLATION_SEP)
    .map((part) => part.trim())
    .filter(Boolean);
  if (parts.length < 2) return { multiple: false, candidates: [] };
  return { multiple: true, candidates: parts };
}

function validateG2A1TranslationKeys(crowdinFlat, sourceKeySet) {
  const errors = [];
  const keys = Object.keys(crowdinFlat);
  const keySet = new Set(keys);

  if (keys.length !== keySet.size) {
    errors.push("DUPLICATE_KEYS_IN_TRANSLATION_FILE");
  }

  const missing = [];
  for (const key of sourceKeySet) {
    if (!(key in crowdinFlat)) missing.push(key);
  }
  if (missing.length) {
    errors.push(`MISSING_KEYS:${missing.length}`);
  }

  const extra = [];
  for (const key of keys) {
    if (!sourceKeySet.has(key)) extra.push(key);
  }
  if (extra.length) {
    errors.push(`EXTRA_KEYS:${extra.length}`);
  }

  const structural = keys.filter((key) => isStructuralOrForbiddenKey(key));
  if (structural.length) {
    errors.push(`FORBIDDEN_STRUCTURAL_KEYS:${structural.length}`);
  }

  if (keys.length !== G2_A1_EXPECTED_KEY_COUNT) {
    errors.push(`KEY_COUNT_MISMATCH:${keys.length}!=${G2_A1_EXPECTED_KEY_COUNT}`);
  }

  return errors;
}

function buildProposedEntries(crowdinFlat) {
  const entries = {};
  let ownerDecisionRequired = 0;
  for (const [key, value] of Object.entries(crowdinFlat)) {
    const multi = detectMultipleTranslations(value);
    if (multi.multiple) {
      ownerDecisionRequired += 1;
      entries[key] = {
        proposed: value,
        status: "OWNER_DECISION_REQUIRED",
        candidates: multi.candidates,
      };
    } else {
      entries[key] = {
        proposed: value,
        status: "PROPOSED",
      };
    }
  }
  return { entries, ownerDecisionRequired };
}

function resolveTranslationInputPath({ stagingDir, lang, level, group }) {
  if (group !== "g2" || level !== "a1") {
    throw new Error(`UNSUPPORTED_IMPORT_SCOPE:${group}/${level}`);
  }
  if (!TARGET_LANGUAGES.includes(lang)) {
    const err = new Error(`UNKNOWN_REPO_LOCALE:${lang}`);
    err.code = "UNKNOWN_REPO_LOCALE";
    throw err;
  }
  const candidates = [
    path.join(stagingDir, `${lang}-${level}.json`),
    path.join(stagingDir, g2LevelCrowdinPath(level, lang)),
    path.join(stagingDir, group, `${lang}-${level}.json`),
  ];
  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) return candidate;
  }
  throw new Error(`TRANSLATION_FILE_NOT_FOUND:${lang}-${level}.json`);
}

function prepareG2A1StagingImport({ lang, stagingDir, root = ROOT }) {
  if (lang === CROWDIN_SOURCE_LANG) {
    throw new Error("SOURCE_LANG_IMPORT_FORBIDDEN:lv");
  }
  const resolvedStaging = assertStagingDirectory(stagingDir);
  const inputPath = resolveTranslationInputPath({
    stagingDir: resolvedStaging,
    lang,
    level: "a1",
    group: "g2",
  });

  const sourceKeySet = getLvG2SourceKeySet("a1");
  const lvCards = loadG2Level("lv", "a1");
  if (lvCards.length !== G2_A1_EXPECTED_OBJECT_COUNT) {
    throw new Error(
      `LV_OBJECT_COUNT_MISMATCH:${lvCards.length}!=${G2_A1_EXPECTED_OBJECT_COUNT}`,
    );
  }

  const crowdinFlat = parseCrowdinJson(fs.readFileSync(inputPath, "utf8"));
  const keyErrors = validateG2A1TranslationKeys(crowdinFlat, sourceKeySet);
  if (keyErrors.length) {
    return { ok: false, lang, inputPath, errors: keyErrors };
  }

  const existingFlat = exportG2LevelFlat(lang, "a1");
  const guardErrors = validateImportGuards(existingFlat, crowdinFlat);
  if (guardErrors.length) {
    return { ok: false, lang, inputPath, errors: guardErrors };
  }

  const { entries, ownerDecisionRequired } = buildProposedEntries(crowdinFlat);
  const outDir = path.join(resolvedStaging, "g2", "a1", lang);
  const outPath = path.join(outDir, "proposed.json");
  const payload = {
    meta: {
      group: "g2",
      level: "a1",
      lang,
      classification: "PROPOSED",
      sourceKeyCount: G2_A1_EXPECTED_KEY_COUNT,
      objectCount: G2_A1_EXPECTED_OBJECT_COUNT,
      ownerDecisionRequired,
      inputFile: path.relative(root, inputPath),
      generatedAt: new Date().toISOString(),
    },
    entries,
  };

  return {
    ok: true,
    lang,
    inputPath,
    outPath,
    outDir,
    payload,
    keyCount: Object.keys(crowdinFlat).length,
    ownerDecisionRequired,
  };
}

function writeG2A1StagingImport(prepared) {
  if (!prepared.ok) {
    throw new Error("REFUSE_WRITE_UNVALIDATED_IMPORT");
  }
  assertStagingDirectory(prepared.outDir);
  fs.mkdirSync(prepared.outDir, { recursive: true });
  fs.writeFileSync(prepared.outPath, `${JSON.stringify(prepared.payload, null, 2)}\n`, "utf8");
  return prepared.outPath;
}

module.exports = {
  MULTI_TRANSLATION_SEP,
  G2_A1_EXPECTED_KEY_COUNT,
  G2_A1_EXPECTED_OBJECT_COUNT,
  DEFAULT_STAGING_ROOT,
  FORBIDDEN_OUTPUT_PREFIXES,
  isProductionPath,
  assertStagingDirectory,
  isStructuralOrForbiddenKey,
  detectMultipleTranslations,
  validateG2A1TranslationKeys,
  buildProposedEntries,
  resolveTranslationInputPath,
  prepareG2A1StagingImport,
  writeG2A1StagingImport,
};
