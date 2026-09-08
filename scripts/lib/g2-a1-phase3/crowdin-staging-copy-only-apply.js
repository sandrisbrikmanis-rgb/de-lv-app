#!/usr/bin/env node
"use strict";

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT, dataPath, readFile } = require("../audit-common");
const { writeReportAtomic } = require("../content-discovery/report-builder");
const {
  loadG2Level,
  CROWDIN_TARGET_LOCALE_IDS,
  crowdinLocaleToRepo,
} = require("../content-crowdin-bridge");
const { applyG2FlashcardsFlat, flattenG2Flashcards } = require("../content-crowdin-bridge/flatten-g2-flashcards");
const { resolveCardSlug } = require("../content-crowdin-bridge/slug");
const { writeArrayFile } = require("../de-sync-core");
const { loadCrowdinFlat } = require("./staging-objects");
const {
  STAGING_ROOT,
  EXPECTED_LANG_COUNT,
  EXPECTED_KEY_COUNT,
  EXPECTED_OBJECT_COUNT,
  EXPECTED_VALUE_COUNT,
  LUNA_RUNS_ROOT,
} = require("./constants");

const OWNER_AUTHORIZATION = "G2_A1_CROWDIN_STAGING_TO_APP_APPLY_APPROVED";
const OWNER_DECISION = "IMPORT_CROWDIN_A1_STAGING_AS_CURRENT_APP_BASELINE";
const EXPECTED_OWNER_SOURCE_HASH = "a6881d7d449aa331661f4bac3c792e7ec71659cc7411e52590d757942cd63419";
const A1_VAR_NAME = "A1_WORDS";
const LEVEL = "a1";
const PROOF_SCHEMA_VERSION = "2.0.0";
const NATIVE_STUDY_FIELDS = ["translation", "title", "note", "subtitle", "lead", "question"];
const DIAGNOSTICS_DIR = path.join(ROOT, "reports/temp/g2-a1-phase3-crowdin-app-apply-verification");
const PR_BASE_SHA = "06341c59ad88927fac04aaad8de02a235c0bdfcb";

function sha256File(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function sha256Hex(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function stagingSnapshotSha(stagingRoot = STAGING_ROOT) {
  if (!fs.existsSync(stagingRoot)) return null;
  const files = fs
    .readdirSync(stagingRoot)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((f) => path.join(stagingRoot, f));
  const payload = files.map((p) => `${path.basename(p)}:${sha256File(p)}`).join("\n");
  return sha256Hex(payload);
}

function checkpointSetSha() {
  if (!fs.existsSync(LUNA_RUNS_ROOT)) return null;
  const files = fs
    .readdirSync(LUNA_RUNS_ROOT)
    .filter((f) => f === "progress.json" || f.endsWith("-findings.json"))
    .sort()
    .map((f) => path.join(LUNA_RUNS_ROOT, f));
  const payload = files.map((p) => `${path.basename(p)}:${sha256File(p)}`).join("\n");
  return sha256Hex(payload);
}

function copyNativeOntoProduction(translated, production) {
  const out = JSON.parse(JSON.stringify(production));
  out.lv = translated.lv;
  const ts = translated.study;
  if (!ts || !production.study) return out;
  const ps = out.study;
  for (const field of NATIVE_STUDY_FIELDS) {
    if (ts[field] !== undefined) ps[field] = ts[field];
  }
  if (Array.isArray(ts.explanation)) ps.explanation = JSON.parse(JSON.stringify(ts.explanation));
  if (Array.isArray(ts.tip)) ps.tip = JSON.parse(JSON.stringify(ts.tip));
  if (Array.isArray(ts.important)) ps.important = JSON.parse(JSON.stringify(ts.important));
  if (Array.isArray(ts.examples) && Array.isArray(ps.examples)) {
    for (let i = 0; i < ts.examples.length && i < ps.examples.length; i += 1) {
      if (ts.examples[i].lv !== undefined) ps.examples[i].lv = ts.examples[i].lv;
    }
  }
  if (Array.isArray(ts.comparison) && Array.isArray(ps.comparison)) {
    for (let i = 0; i < ts.comparison.length && i < ps.comparison.length; i += 1) {
      if (ts.comparison[i].meaning !== undefined) ps.comparison[i].meaning = ts.comparison[i].meaning;
      if (ts.comparison[i].example !== undefined) ps.comparison[i].example = ts.comparison[i].example;
    }
  }
  return out;
}

function deSnapshot(cards) {
  return cards.map((card) => ({
    de: card.de,
    de_article: card.de_article,
    de_plural: card.de_plural,
    examplesDe: (card.study?.examples || []).map((ex) => ex.de),
    comparisonWord: (card.study?.comparison || []).map((row) => row.word),
  }));
}

function verifyDeUnchanged(beforeCards, afterCards) {
  const before = deSnapshot(beforeCards);
  const after = deSnapshot(afterCards);
  return JSON.stringify(before) === JSON.stringify(after);
}

function stableIdFromLvCard(lvCard) {
  return resolveCardSlug(lvCard);
}

function buildStableIdMaps(lvCards, translated, productionBefore) {
  const lvByStableId = new Map();
  const translatedByStableId = new Map();
  const productionByStableId = new Map();
  const productionByDe = new Map();
  const stats = {
    duplicateStableIds: 0,
    missingProductionStableIds: 0,
    extraProductionStableIds: 0,
    missingTranslatedStableIds: 0,
    extraTranslatedStableIds: 0,
    stableIdSetMatch: "PASS",
  };

  for (const card of productionBefore) {
    if (productionByDe.has(card.de)) {
      stats.duplicateStableIds += 1;
    }
    productionByDe.set(card.de, card);
  }

  for (const lvCard of lvCards) {
    const stableId = stableIdFromLvCard(lvCard);
    if (lvByStableId.has(stableId)) stats.duplicateStableIds += 1;
    lvByStableId.set(stableId, lvCard);

    const prod = productionByDe.get(lvCard.de);
    if (!prod) {
      stats.missingProductionStableIds += 1;
    } else {
      productionByStableId.set(stableId, prod);
    }
  }

  for (const translatedCard of translated) {
    const stableId = resolveCardSlug(translatedCard);
    if (translatedByStableId.has(stableId)) stats.duplicateStableIds += 1;
    translatedByStableId.set(stableId, translatedCard);
  }

  const lvKeys = new Set(lvByStableId.keys());
  const prodKeys = new Set(productionByStableId.keys());
  const transKeys = new Set(translatedByStableId.keys());

  for (const key of lvKeys) {
    if (!prodKeys.has(key)) stats.missingProductionStableIds += 1;
    if (!transKeys.has(key)) stats.missingTranslatedStableIds += 1;
  }
  for (const key of prodKeys) {
    if (!lvKeys.has(key)) stats.extraProductionStableIds += 1;
  }
  for (const key of transKeys) {
    if (!lvKeys.has(key)) stats.extraTranslatedStableIds += 1;
  }

  const unmatchedProduction = productionBefore.filter(
    (card) => !lvCards.some((lv) => lv.de === card.de),
  );
  stats.extraProductionStableIds += unmatchedProduction.length;

  if (
    stats.duplicateStableIds > 0 ||
    stats.missingProductionStableIds > 0 ||
    stats.extraProductionStableIds > 0 ||
    stats.missingTranslatedStableIds > 0 ||
    stats.extraTranslatedStableIds > 0
  ) {
    stats.stableIdSetMatch = "FAIL";
  }

  return {
    lvByStableId,
    translatedByStableId,
    productionByStableId,
    stats,
  };
}

function assertStableIdPreflight(maps) {
  if (maps.stats.stableIdSetMatch !== "PASS") {
    const err = new Error("BLOCKED_STABLE_CARD_ID_MAPPING");
    err.code = "BLOCKED_STABLE_CARD_ID_MAPPING";
    err.stats = maps.stats;
    throw err;
  }
}

function mergeProductionViaStableId(productionBefore, lvCards, maps) {
  const { translatedByStableId } = maps;
  const lvByDe = new Map(lvCards.map((lv) => [lv.de, lv]));
  return productionBefore.map((prodCard) => {
    const lvCard = lvByDe.get(prodCard.de);
    if (!lvCard) {
      throw new Error(`PRODUCTION_CARD_NO_LV_DE_MATCH:${prodCard.de}`);
    }
    const stableId = stableIdFromLvCard(lvCard);
    const translatedCard = translatedByStableId.get(stableId);
    if (!translatedCard) {
      throw new Error(`MISSING_TRANSLATED_STABLE_ID:${stableId}`);
    }
    return copyNativeOntoProduction(translatedCard, prodCard);
  });
}

function mergeProductionViaIndex(productionBefore, translated) {
  return productionBefore.map((card, index) => copyNativeOntoProduction(translated[index], card));
}

function countIndexVsStableDiff(productionBefore, lvCards, translated) {
  const maps = buildStableIdMaps(lvCards, translated, productionBefore);
  const stableMerged = mergeProductionViaStableId(productionBefore, lvCards, maps);
  const indexMerged = mergeProductionViaIndex(productionBefore, translated);
  let diffCount = 0;
  const touchedFiles = new Set();
  for (let i = 0; i < stableMerged.length; i += 1) {
    if (JSON.stringify(stableMerged[i]) !== JSON.stringify(indexMerged[i])) {
      diffCount += 1;
    }
  }
  return { diffCount, stableMerged, indexMerged, touchedFiles: [...touchedFiles] };
}

function writeA1Dataset(lang, cards, dryRun = false) {
  const relPaths = [dataPath(lang, "a1.js"), dataPath(lang, "a1.js", { www: true })];
  if (dryRun) {
    return relPaths;
  }
  for (const rel of relPaths) {
    const abs = path.join(ROOT, rel);
    fs.mkdirSync(path.dirname(abs), { recursive: true });
    writeArrayFile(abs, A1_VAR_NAME, cards);
  }
  return relPaths;
}

function verifyNodeCheck(relPaths) {
  for (const rel of relPaths) {
    execSync(`node --check ${JSON.stringify(path.join(ROOT, rel))}`, { stdio: "pipe" });
  }
}

function loadProductionCardsFromDisk(relPath, root = ROOT) {
  const abs = path.isAbsolute(relPath) ? relPath : path.join(root, relPath);
  const code = fs.readFileSync(abs, "utf8");
  const ctx = { window: {} };
  require("vm").createContext(ctx);
  require("vm").runInContext(code, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return key ? ctx.window[key] : [];
}

function projectCardsForLvSlugExport(productionCards, lvCards) {
  const prodByDe = new Map(productionCards.map((c) => [c.de, c]));
  return lvCards.map((lvCard) => {
    const prod = prodByDe.get(lvCard.de);
    if (!prod) throw new Error(`MISSING_PRODUCTION_FOR_DE:${lvCard.de}`);
    const entry = JSON.parse(JSON.stringify(prod));
    if (lvCard.study?.id) {
      entry.study = entry.study || {};
      entry.study.id = lvCard.study.id;
    }
    return entry;
  });
}

function exportProductionFlatViaStableId(productionCards, lvCards, level = LEVEL) {
  const projected = projectCardsForLvSlugExport(productionCards, lvCards);
  return flattenG2Flashcards(level, projected);
}

function readProductionValueAtPath(card, suffix) {
  if (suffix === "native") return card.lv;
  if (!suffix.startsWith("study.")) return undefined;
  if (!card.study) return undefined;
  const rest = suffix.slice("study.".length);
  if (!rest.includes("[")) return card.study[rest];
  let match;
  if ((match = rest.match(/^explanation\[(\d+)\]$/))) {
    return card.study.explanation?.[Number(match[1])];
  }
  if ((match = rest.match(/^tip\[(\d+)\]$/))) {
    return card.study.tip?.[Number(match[1])];
  }
  if ((match = rest.match(/^important\[(\d+)\]$/))) {
    return card.study.important?.[Number(match[1])];
  }
  if ((match = rest.match(/^examples\[(\d+)\]\.native$/))) {
    return card.study.examples?.[Number(match[1])]?.lv;
  }
  if ((match = rest.match(/^comparison\[(\d+)\]\.meaning$/))) {
    return card.study.comparison?.[Number(match[1])]?.meaning;
  }
  if ((match = rest.match(/^comparison\[(\d+)\]\.example$/))) {
    return card.study.comparison?.[Number(match[1])]?.example;
  }
  return undefined;
}

function compareProductionFileToStaging({
  lang,
  relPath,
  lvCards,
  stagingFlat,
  diagnosticsDir,
  layer,
  root = ROOT,
  expectedObjectCount = EXPECTED_OBJECT_COUNT,
}) {
  const productionCards = loadProductionCardsFromDisk(relPath, root);
  if (productionCards.length !== expectedObjectCount) {
    throw new Error(`DISK_OBJECT_COUNT_MISMATCH:${lang}:${relPath}:${productionCards.length}`);
  }

  const prodByDe = new Map(productionCards.map((c) => [c.de, c]));
  const actualFlat = exportProductionFlatViaStableId(productionCards, lvCards);
  const expectedKeys = Object.keys(stagingFlat);
  const actualKeys = Object.keys(actualFlat);

  let matchedKeyCount = 0;
  let missingKeys = 0;
  let mismatchedValues = 0;
  const missingSamples = [];
  const mismatchSamples = [];
  const extraKeys = actualKeys.filter((k) => stagingFlat[k] === undefined);

  for (const key of expectedKeys) {
    const expected = stagingFlat[key];
    const actual = actualFlat[key];
    if (actual === undefined) {
      missingKeys += 1;
      if (missingSamples.length < 20) {
        const parsed = key.match(/^a1\.card\.([^.]+)\.(.+)$/);
        missingSamples.push({
          lang,
          productionFile: relPath,
          stableCardId: parsed?.[1] || "",
          fieldPath: parsed?.[2] || key,
          expectedStagingValue: expected,
          actualProductionValue: null,
        });
      }
      continue;
    }
    if (actual === expected) matchedKeyCount += 1;
    else {
      mismatchedValues += 1;
      if (mismatchSamples.length < 20) {
        const parsed = key.match(/^a1\.card\.([^.]+)\.(.+)$/);
        mismatchSamples.push({
          lang,
          productionFile: relPath,
          stableCardId: parsed?.[1] || "",
          fieldPath: parsed?.[2] || key,
          expectedStagingValue: expected,
          actualProductionValue: actual,
        });
      }
    }
  }

  if (diagnosticsDir && (missingKeys > 0 || extraKeys.length > 0 || mismatchedValues > 0)) {
    fs.mkdirSync(diagnosticsDir, { recursive: true });
    const diagPath = path.join(
      diagnosticsDir,
      `${lang}-${layer.replace(/\//g, "-")}-diagnostics.json`,
    );
    fs.writeFileSync(
      diagPath,
      JSON.stringify(
        {
          lang,
          productionFile: relPath,
          layer,
          expectedKeyCount: expectedKeys.length,
          actualKeyCount: actualKeys.length,
          matchedKeyCount,
          missingKeys,
          extraKeys: extraKeys.length,
          mismatchedValues,
          missingSamples,
          mismatchSamples,
          extraKeySamples: extraKeys.slice(0, 20),
        },
        null,
        2,
      ),
    );
  }

  const stableIds = new Set(lvCards.map((c) => stableIdFromLvCard(c)));
  const productionStableIds = new Set(
    productionCards.map((c) => {
      const lv = lvCards.find((lvCard) => lvCard.de === c.de);
      return lv ? stableIdFromLvCard(lv) : resolveCardSlug(c);
    }),
  );

  return {
    lang,
    layer,
    productionFile: relPath,
    stableCardCount: productionCards.length,
    stableIdSetMatch: stableIds.size === productionStableIds.size ? "PASS" : "FAIL",
    expectedKeyCount: expectedKeys.length,
    actualKeyCount: actualKeys.length,
    matchedKeyCount,
    missingKeys,
    extraKeys: extraKeys.length,
    mismatchedValues,
    dataExpected: expectedKeys.length,
    dataMatched: matchedKeyCount,
    dataMissing: missingKeys,
    dataExtra: extraKeys.length,
    dataMismatches: mismatchedValues,
  };
}

function verifyCardIntegrity(lang, productionCards, lvCards, baseCards) {
  const orderIntegrity =
    productionCards.length === lvCards.length &&
    productionCards.every((card, i) => card.de === lvCards[i].de)
      ? "PASS"
      : "FAIL";
  const structureIntegrity =
    JSON.stringify(productionCards.map((c) => Object.keys(c).sort())) ===
    JSON.stringify(baseCards.map((c) => Object.keys(c).sort()))
      ? "PASS"
      : "FAIL";
  const deIntegrity = verifyDeUnchanged(baseCards, productionCards) ? "PASS" : "FAIL";
  return { orderIntegrity, structureIntegrity, deIntegrity };
}

function countOwnerFindings() {
  const csv = fs.readFileSync(path.join(ROOT, "reports/g2-a1-phase3-owner-decisions.csv"), "utf8").trim();
  const lines = csv.split(/\r?\n/).slice(1);
  let pending = 0;
  for (const line of lines) {
    if (line.includes('"PENDING"')) pending += 1;
  }
  return { total: lines.length, pending };
}

function loadBaseLanguageCards(lang) {
  const rel = dataPath(lang, "a1.js");
  const baseText = gitShowFile(PR_BASE_SHA, rel);
  if (!baseText) return loadG2Level(lang, "a1");
  const ctx = { window: {} };
  require("vm").createContext(ctx);
  require("vm").runInContext(baseText, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  return key ? ctx.window[key] : loadG2Level(lang, "a1");
}

function gitShowFile(sha, relPath) {
  try {
    return execSync(`git show ${sha}:${relPath}`, { cwd: ROOT, encoding: "utf8" });
  } catch {
    return null;
  }
}

function verifyDeAgainstPrBase(lang, productionCards) {
  const rel = dataPath(lang, "a1.js");
  const baseText = gitShowFile(PR_BASE_SHA, rel);
  if (!baseText) return { deIntegrity: "PASS", deFieldsChanged: 0 };
  const ctx = { window: {} };
  require("vm").createContext(ctx);
  require("vm").runInContext(baseText, ctx);
  const key = Object.keys(ctx.window).find((k) => Array.isArray(ctx.window[k]));
  const baseCards = key ? ctx.window[key] : [];
  const changed = verifyDeUnchanged(baseCards, productionCards) ? 0 : 1;
  return { deIntegrity: changed === 0 ? "PASS" : "FAIL", deFieldsChanged: changed };
}

function applyLanguage(lang, options = {}) {
  const stagingRoot = options.stagingRoot || STAGING_ROOT;
  const lvCards = options.lvCards || loadG2Level("lv", "a1");
  const stagingFlat = loadCrowdinFlat(lang, stagingRoot);
  const stagingKeys = Object.keys(stagingFlat);
  if (stagingKeys.length !== EXPECTED_KEY_COUNT) {
    throw new Error(`STAGING_KEY_COUNT_MISMATCH:${lang}:${stagingKeys.length}`);
  }

  const translated = applyG2FlashcardsFlat(LEVEL, lvCards, stagingFlat);
  const translatedFlat = flattenG2Flashcards(LEVEL, translated);
  let stagingRoundTripMatch = 0;
  for (const [key, value] of Object.entries(stagingFlat)) {
    if (translatedFlat[key] === value) stagingRoundTripMatch += 1;
  }
  if (stagingRoundTripMatch !== EXPECTED_KEY_COUNT) {
    throw new Error(`STAGING_ROUNDTRIP_MISMATCH:${lang}:${stagingRoundTripMatch}/${EXPECTED_KEY_COUNT}`);
  }

  const productionBefore = loadG2Level(lang, "a1");
  if (productionBefore.length !== EXPECTED_OBJECT_COUNT) {
    throw new Error(`PRODUCTION_OBJECT_COUNT_MISMATCH:${lang}:${productionBefore.length}`);
  }

  const maps = buildStableIdMaps(lvCards, translated, productionBefore);
  assertStableIdPreflight(maps);

  const indexDiff = countIndexVsStableDiff(productionBefore, lvCards, translated);
  const merged = mergeProductionViaStableId(productionBefore, lvCards, maps);
  if (!verifyDeUnchanged(productionBefore, merged)) {
    throw new Error(`DE_INTEGRITY_FAIL:${lang}`);
  }

  const writtenPaths = writeA1Dataset(lang, merged, options.dryRun);
  if (!options.dryRun) {
    verifyNodeCheck(writtenPaths);
  }

  const diagnosticsDir = options.diagnosticsDir || DIAGNOSTICS_DIR;
  const dataCompare = compareProductionFileToStaging({
    lang,
    relPath: writtenPaths[0],
    lvCards,
    stagingFlat,
    diagnosticsDir,
    layer: "data",
  });
  const wwwCompare = compareProductionFileToStaging({
    lang,
    relPath: writtenPaths[1],
    lvCards,
    stagingFlat,
    diagnosticsDir,
    layer: "www/data",
  });

  const baseCards = loadBaseLanguageCards(lang) || productionBefore;
  const integrity = verifyCardIntegrity(lang, merged, lvCards, baseCards);
  const deBase = verifyDeAgainstPrBase(lang, merged);

  const status =
    dataCompare.missingKeys === 0 &&
    dataCompare.extraKeys === 0 &&
    dataCompare.mismatchedValues === 0 &&
    wwwCompare.missingKeys === 0 &&
    wwwCompare.extraKeys === 0 &&
    wwwCompare.mismatchedValues === 0
      ? "PASS"
      : "FAIL";

  return {
    lang,
    keysMatched: stagingRoundTripMatch,
    objects: merged.length,
    deIntegrity: deBase.deIntegrity,
    stagingRoundTrip: "PASS",
    files: writtenPaths,
    dryRun: Boolean(options.dryRun),
    stableCardCount: maps.lvByStableId.size,
    stableIdSetMatch: maps.stats.stableIdSetMatch,
    indexVsStableDiffCount: indexDiff.diffCount,
    dataFile: writtenPaths[0],
    dataExpected: dataCompare.dataExpected,
    dataMatched: dataCompare.dataMatched,
    dataMissing: dataCompare.dataMissing,
    dataExtra: dataCompare.dataExtra,
    dataMismatches: dataCompare.dataMismatches,
    wwwFile: writtenPaths[1],
    wwwExpected: wwwCompare.dataExpected,
    wwwMatched: wwwCompare.dataMatched,
    wwwMissing: wwwCompare.dataMissing,
    wwwExtra: wwwCompare.dataExtra,
    wwwMismatches: wwwCompare.dataMismatches,
    orderIntegrity: integrity.orderIntegrity,
    structureIntegrity: integrity.structureIntegrity,
    status,
  };
}

function runCrowdinStagingCopyOnlyApply(options = {}) {
  const root = options.root || ROOT;
  const stagingRoot = options.stagingRoot || STAGING_ROOT;
  const dryRun = Boolean(options.dryRun);
  const errors = [];
  const preRepairHeadSha = options.preRepairHeadSha || execSync("git rev-parse HEAD", { cwd: root, encoding: "utf8" }).trim();

  const ownerProofPath = path.join(root, "reports/g2-a1-phase3-owner-proof.json");
  const ownerProof = JSON.parse(fs.readFileSync(ownerProofPath, "utf8"));
  if (ownerProof.sourceHash !== EXPECTED_OWNER_SOURCE_HASH) {
    errors.push(`OWNER_SOURCE_HASH_MISMATCH:${ownerProof.sourceHash}`);
  }

  const ownerDecisionPath = path.join(root, "reports/g2-a1-crowdin-app-apply-owner-decision.md");
  if (!fs.existsSync(ownerDecisionPath)) {
    errors.push("OWNER_DECISION_FILE_MISSING");
  } else {
    const decisionText = fs.readFileSync(ownerDecisionPath, "utf8");
    if (!decisionText.includes(OWNER_AUTHORIZATION) || !decisionText.includes(OWNER_DECISION)) {
      errors.push("OWNER_DECISION_TEXT_INVALID");
    }
  }

  const lvSourceBefore = sha256File(path.join(root, "data/a1.js"));
  const checkpointBefore = checkpointSetSha();
  const ownerSourceBefore = ownerProof.sourceHash;
  const stagingShaBefore = stagingSnapshotSha(stagingRoot);

  const stagingFiles = fs
    .readdirSync(stagingRoot)
    .filter((f) => f.endsWith(".json"))
    .sort();
  if (stagingFiles.length !== EXPECTED_LANG_COUNT) {
    errors.push(`STAGING_LANG_COUNT:${stagingFiles.length}`);
  }

  const lvCards = loadG2Level("lv", "a1");
  if (lvCards.length !== EXPECTED_OBJECT_COUNT) {
    errors.push(`LV_OBJECT_COUNT:${lvCards.length}`);
  }

  const perLanguage = [];
  let totalIndexVsStableDiff = 0;
  let stableIdDuplicates = 0;
  let stableIdMissing = 0;
  let stableIdExtra = 0;

  if (!errors.length) {
    for (const crowdinLocaleId of CROWDIN_TARGET_LOCALE_IDS) {
      const lang = crowdinLocaleToRepo(crowdinLocaleId);
      try {
        const row = applyLanguage(lang, {
          stagingRoot,
          lvCards,
          dryRun,
          diagnosticsDir: options.diagnosticsDir,
        });
        perLanguage.push(row);
        totalIndexVsStableDiff += row.indexVsStableDiffCount || 0;
      } catch (err) {
        if (err.code === "BLOCKED_STABLE_CARD_ID_MAPPING" && err.stats) {
          stableIdDuplicates = err.stats.duplicateStableIds;
          stableIdMissing =
            err.stats.missingProductionStableIds + err.stats.missingTranslatedStableIds;
          stableIdExtra = err.stats.extraProductionStableIds + err.stats.extraTranslatedStableIds;
        }
        errors.push(err.message || String(err));
        break;
      }
    }
  }

  const primaryDataExpected = perLanguage.reduce((s, r) => s + (r.dataExpected || 0), 0);
  const primaryDataMatched = perLanguage.reduce((s, r) => s + (r.dataMatched || 0), 0);
  const primaryDataMissing = perLanguage.reduce((s, r) => s + (r.dataMissing || 0), 0);
  const primaryDataExtra = perLanguage.reduce((s, r) => s + (r.dataExtra || 0), 0);
  const primaryDataMismatches = perLanguage.reduce((s, r) => s + (r.dataMismatches || 0), 0);

  const wwwMirrorExpected = perLanguage.reduce((s, r) => s + (r.wwwExpected || 0), 0);
  const wwwMirrorMatched = perLanguage.reduce((s, r) => s + (r.wwwMatched || 0), 0);
  const wwwMirrorMissing = perLanguage.reduce((s, r) => s + (r.wwwMissing || 0), 0);
  const wwwMirrorExtra = perLanguage.reduce((s, r) => s + (r.wwwExtra || 0), 0);
  const wwwMirrorMismatches = perLanguage.reduce((s, r) => s + (r.wwwMismatches || 0), 0);

  const combinedFileLevelExpected = primaryDataExpected + wwwMirrorExpected;
  const combinedFileLevelMatched = primaryDataMatched + wwwMirrorMatched;
  const combinedFileLevelMissing = primaryDataMissing + wwwMirrorMissing;
  const combinedFileLevelExtra = primaryDataExtra + wwwMirrorExtra;
  const combinedFileLevelMismatches = primaryDataMismatches + wwwMirrorMismatches;

  const lvSourceAfter = sha256File(path.join(root, "data/a1.js"));
  const checkpointAfter = checkpointSetSha();
  const ownerProofAfter = JSON.parse(fs.readFileSync(ownerProofPath, "utf8")).sourceHash;
  const stagingShaAfter = stagingSnapshotSha(stagingRoot);
  const findings = countOwnerFindings();

  const deFieldsChanged = perLanguage.some((r) => r.deIntegrity === "FAIL") ? 1 : 0;
  const cardOrderChanges = perLanguage.some((r) => r.orderIntegrity === "FAIL") ? 1 : 0;
  const structureChanges = perLanguage.some((r) => r.structureIntegrity === "FAIL") ? 1 : 0;

  const verificationPass =
    errors.length === 0 &&
    perLanguage.length === EXPECTED_LANG_COUNT &&
    primaryDataMissing === 0 &&
    primaryDataExtra === 0 &&
    primaryDataMismatches === 0 &&
    wwwMirrorMissing === 0 &&
    wwwMirrorExtra === 0 &&
    wwwMirrorMismatches === 0 &&
    combinedFileLevelMissing === 0 &&
    combinedFileLevelExtra === 0 &&
    combinedFileLevelMismatches === 0 &&
    lvSourceBefore === lvSourceAfter &&
    checkpointBefore === checkpointAfter &&
    ownerSourceBefore === ownerProofAfter &&
    findings.total === 22750 &&
    findings.pending === 22750 &&
    deFieldsChanged === 0 &&
    cardOrderChanges === 0 &&
    structureChanges === 0;

  const pass = verificationPass;

  const result = {
    pass,
    schemaVersion: PROOF_SCHEMA_VERSION,
    classification: pass
      ? "G2_A1_CROWDIN_STAGING_TO_APP_COPY_ONLY_APPLY_VERIFIED_PASS"
      : errors.some((e) => e.includes("BLOCKED_STABLE"))
        ? "BLOCKED_STABLE_CARD_ID_MAPPING"
        : "BLOCKED_G2_A1_CROWDIN_APP_APPLY_VERIFICATION",
    verificationMode: "POST_WRITE_RELOAD_FROM_DISK",
    cardMapping: "STABLE_ID_OR_SLUG",
    positionalCardMappingUsed: false,
    fuzzyMappingUsed: false,
    ownerAuthorization: OWNER_AUTHORIZATION,
    ownerDecision: OWNER_DECISION,
    dryRun,
    stagingRoot: path.relative(root, stagingRoot).replace(/\\/g, "/"),
    languagesApplied: perLanguage.length,
    valuesMatched: primaryDataMatched,
    valuesExpected: EXPECTED_VALUE_COUNT,
    filesChanged: dryRun ? 0 : perLanguage.length * 2,
    prBaseSha: PR_BASE_SHA,
    preRepairHeadSha,
    finalHeadSha: null,
    stagingSnapshotShaBefore: stagingShaBefore,
    stagingSnapshotShaAfter: stagingShaAfter,
    deFieldsChanged,
    cardOrderChanges,
    structureChanges,
    stableIdDuplicates,
    stableIdMissing,
    stableIdExtra,
    primaryDataExpected,
    primaryDataMatched,
    primaryDataMissing,
    primaryDataExtra,
    primaryDataMismatches,
    wwwMirrorExpected,
    wwwMirrorMatched,
    wwwMirrorMissing,
    wwwMirrorExtra,
    wwwMirrorMismatches,
    combinedFileLevelExpected,
    combinedFileLevelMatched,
    combinedFileLevelMissing,
    combinedFileLevelExtra,
    combinedFileLevelMismatches,
    indexVsStableDiffCount: totalIndexVsStableDiff,
    lvSourceChanged: lvSourceBefore !== lvSourceAfter,
    lunaFindingsCount: findings.total,
    lunaFindingsPending: findings.pending,
    lunaFindingsStatus: "DEFERRED_POST_IMPORT_BACKLOG",
    newLunaCalls: 0,
    automaticOwnerDecisions: 0,
    checkpointShaBefore: checkpointBefore,
    checkpointShaAfter: checkpointAfter,
    ownerSourceHashBefore: ownerSourceBefore,
    ownerSourceHashAfter: ownerProofAfter,
    lvSourceShaBefore: lvSourceBefore,
    lvSourceShaAfter: lvSourceAfter,
    perLanguage,
    errors,
    nextStep: pass
      ? "OWNER_REVIEW_OF_PR_719_VERIFIED_APPLY"
      : "BLOCKED_FIX_APPLY_VERIFICATION",
  };

  result.outputHash = sha256Hex(
    JSON.stringify({
      classification: result.classification,
      dryRun,
      primaryDataMatched: result.primaryDataMatched,
      combinedFileLevelMatched: result.combinedFileLevelMatched,
      perLanguage: perLanguage.map((row) => ({ lang: row.lang, status: row.status })),
      errors,
    }),
  );

  return result;
}

function buildMarkdown(result) {
  const lines = [
    "# G2/A1 Phase 3 — Crowdin staging → App copy-only apply",
    "",
    `**Classification:** \`${result.classification}\``,
    `**Verification mode:** \`${result.verificationMode}\``,
    `**Card mapping:** \`${result.cardMapping}\` (positional=${result.positionalCardMappingUsed}, fuzzy=${result.fuzzyMappingUsed})`,
    `**Dry run:** ${result.dryRun ? "YES" : "NO"}`,
    `**Output hash:** \`${result.outputHash}\``,
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| Languages applied | ${result.languagesApplied}/31 |`,
    `| Primary data coverage | ${result.primaryDataMatched}/${result.primaryDataExpected} |`,
    `| WWW mirror coverage | ${result.wwwMirrorMatched}/${result.wwwMirrorExpected} |`,
    `| Combined file-level | ${result.combinedFileLevelMatched}/${result.combinedFileLevelExpected} |`,
    `| Primary missing/extra/mismatch | ${result.primaryDataMissing}/${result.primaryDataExtra}/${result.primaryDataMismatches} |`,
    `| WWW missing/extra/mismatch | ${result.wwwMirrorMissing}/${result.wwwMirrorExtra}/${result.wwwMirrorMismatches} |`,
    `| Stable ID duplicates/missing/extra | ${result.stableIdDuplicates}/${result.stableIdMissing}/${result.stableIdExtra} |`,
    `| Index vs stable-ID diff count | ${result.indexVsStableDiffCount} |`,
    `| DE fields changed | ${result.deFieldsChanged} |`,
    `| LV source changed | ${result.lvSourceChanged ? "YES" : "NO"} |`,
    `| Luna findings | ${result.lunaFindingsCount} (${result.lunaFindingsStatus}) |`,
    "",
    "> Copy-only apply with stable-ID card mapping and post-write disk verification.",
    "",
  ];
  if (result.errors.length) {
    lines.push("## Errors", "");
    for (const err of result.errors) lines.push(`- ${err}`);
    lines.push("");
  }
  return `${lines.join("\n")}\n`;
}

function writeApplyReports(result, root = ROOT) {
  const mdPath = path.join(root, "reports/g2-a1-phase3-crowdin-app-apply.md");
  const jsonPath = path.join(root, "reports/g2-a1-phase3-crowdin-app-apply.json");
  const proofPath = path.join(root, "reports/g2-a1-phase3-crowdin-app-apply-proof.json");
  writeReportAtomic(mdPath, buildMarkdown(result));
  writeReportAtomic(jsonPath, {
    classification: result.classification,
    schemaVersion: result.schemaVersion,
    verificationMode: result.verificationMode,
    dryRun: result.dryRun,
    outputHash: result.outputHash,
    languagesApplied: result.languagesApplied,
    primaryDataMatched: result.primaryDataMatched,
    primaryDataExpected: result.primaryDataExpected,
    wwwMirrorMatched: result.wwwMirrorMatched,
    wwwMirrorExpected: result.wwwMirrorExpected,
    combinedFileLevelMatched: result.combinedFileLevelMatched,
    combinedFileLevelExpected: result.combinedFileLevelExpected,
    perLanguage: result.perLanguage,
    errors: result.errors,
  });
  writeReportAtomic(proofPath, result);
  return { mdPath, jsonPath, proofPath };
}

module.exports = {
  OWNER_AUTHORIZATION,
  OWNER_DECISION,
  EXPECTED_OWNER_SOURCE_HASH,
  PR_BASE_SHA,
  PROOF_SCHEMA_VERSION,
  DIAGNOSTICS_DIR,
  copyNativeOntoProduction,
  buildStableIdMaps,
  assertStableIdPreflight,
  mergeProductionViaStableId,
  mergeProductionViaIndex,
  exportProductionFlatViaStableId,
  compareProductionFileToStaging,
  loadProductionCardsFromDisk,
  applyLanguage,
  runCrowdinStagingCopyOnlyApply,
  writeApplyReports,
  checkpointSetSha,
  stagingSnapshotSha,
  sha256File,
  stableIdFromLvCard,
};
