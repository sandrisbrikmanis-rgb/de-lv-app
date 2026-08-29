#!/usr/bin/env node
"use strict";

const { loadArrayDataset, loadWindowGlobals } = require("../audit-common");
const { expectedStructuralCollector } = require("./discovery-scope");
const { classifyScope } = require("./phase1-applicability");
const {
  collectG2Structural,
  collectG1SentencesStructural,
  collectG1VerbsStructural,
  collectG1TrainingStructural,
  collectG3CourseLessonsStructural,
} = require("./collectors/structural");
const { collectG2DeCompliance } = require("./collectors/de-compliance");
const {
  collectG2MultiTranslation,
  collectG1SentencesMultiTranslation,
  collectG1VerbsMultiTranslation,
  collectG3MultiTranslation,
  collectG1TrainingMultiTranslation,
} = require("./collectors/multi-translation");
const { collectMojibake, collectMirrorSync } = require("./collectors/mojibake-mirror");
const { collectG2ForeignRemnants } = require("./collectors/remnants");
const { collectG3LegacyHtml } = require("./collectors/g3-legacy-html");
const {
  scanDatasetMainTranslations,
  scanG1VerbsInventory,
  scanG3CourseLessonsInventory,
  scanG1TrainingInventory,
} = require("../main-translation-field-inventory");
const { entryId } = require("../content-crowdin-bridge/slug");
const { collectForScope } = require("./registry");

function dataRel(lang, file) {
  return lang === "lv" ? `data/${file}` : `data/${lang}/${file}`;
}

function g1Files(lang, dataset) {
  if (dataset === "training") {
    return lang === "lv" ? [] : [`data/${lang}/courseTrainingCards.js`];
  }
  const rel = lang === "lv" ? `data/${dataset}.js` : `data/${lang}/${dataset}.js`;
  return [rel];
}

function g3Files(lang) {
  return [lang === "lv" ? "data/courseLessons.js" : `data/${lang}/courseLessons.js`];
}

function annotateFindings(findings, scopeMeta) {
  return findings.map((f) => {
    let group = f.group || scopeMeta.group;
    if (group === "g1-sentences") group = "g1";
    if (group === "g1-verbs") group = "g1";
    if (group === "g1-training") group = "g1";
    return {
      ...f,
      scopeId: scopeMeta.scopeId,
      group,
      dataset: f.dataset || scopeMeta.dataset,
      lang: f.lang || scopeMeta.lang,
      classificationStatus: f.classificationStatus || "NEEDS_REVIEW",
      current: f.current ?? f.currentEt ?? f.message ?? "",
    };
  });
}

function collectInventoryStats({ group, dataset, lang }) {
  const scopeId = `${group}/${dataset}/${lang}`;
  if (lang === "lv") {
    return {
      inventoryCoverage: 1,
      unmappedMainTranslationFields: 0,
      inventoryObjectsExpected: 0,
      inventoryObjectsScanned: 0,
      inventoryFieldsDiscovered: 0,
      inventoryFieldsMapped: 0,
      inventoryFieldsUnmapped: 0,
    };
  }

  if (group === "g2") {
    const productionFile = dataRel(lang, `${dataset}.js`);
    const cards = loadArrayDataset(productionFile) || [];
    const scan = scanDatasetMainTranslations(cards, entryId, { productionFile, scopeId });
    return {
      inventoryCoverage: scan.inventoryCoverage,
      unmappedMainTranslationFields: scan.unmappedMainTranslationFields,
      inventoryObjectsExpected: scan.inventoryObjectsExpected || scan.fieldsScanned || 0,
      inventoryObjectsScanned: scan.inventoryFieldsMapped || scan.fieldsScanned || 0,
      inventoryFieldsDiscovered: scan.inventoryFieldsDiscovered || scan.fieldsScanned || 0,
      inventoryFieldsMapped: scan.inventoryFieldsMapped || scan.fieldsScanned || 0,
      inventoryFieldsUnmapped: scan.inventoryFieldsUnmapped || 0,
    };
  }

  if (group === "g1" && dataset === "sentences") {
    const productionFile = dataRel(lang, "sentences.js");
    const cards = loadArrayDataset(productionFile) || [];
    const scan = scanDatasetMainTranslations(
      cards.map((c) => ({ ...c, study: null })),
      (e, i) => e.de || `sentence-${i}`,
      { productionFile, scopeId },
    );
    return {
      inventoryCoverage: scan.inventoryCoverage,
      unmappedMainTranslationFields: scan.unmappedMainTranslationFields,
      inventoryObjectsExpected: scan.inventoryObjectsExpected || scan.fieldsScanned || 0,
      inventoryObjectsScanned: scan.inventoryFieldsMapped || scan.fieldsScanned || 0,
      inventoryFieldsDiscovered: scan.inventoryFieldsDiscovered || scan.fieldsScanned || 0,
      inventoryFieldsMapped: scan.inventoryFieldsMapped || scan.fieldsScanned || 0,
      inventoryFieldsUnmapped: scan.inventoryFieldsUnmapped || 0,
    };
  }

  if (group === "g1" && dataset === "verbs") {
    const productionFile = dataRel(lang, "verbs.js");
    const cards = loadArrayDataset(productionFile) || [];
    const scan = scanG1VerbsInventory(cards, { productionFile });
    return {
      inventoryCoverage: scan.inventoryCoverage,
      unmappedMainTranslationFields: scan.unmappedMainTranslationFields,
      inventoryObjectsExpected: scan.inventoryObjectsExpected || scan.fieldsExpected || 0,
      inventoryObjectsScanned: scan.inventoryFieldsMapped || scan.fieldsMapped || 0,
      inventoryFieldsDiscovered: scan.inventoryFieldsDiscovered || scan.fieldsExpected || 0,
      inventoryFieldsMapped: scan.inventoryFieldsMapped || scan.fieldsMapped || 0,
      inventoryFieldsUnmapped: scan.inventoryFieldsUnmapped || scan.unmapped.length || 0,
      emptyByDesign: scan.emptyByDesign || 0,
    };
  }

  if (group === "g1" && dataset === "training") {
    const files = g1Files(lang, dataset);
    if (!files.length) {
      return {
        inventoryCoverage: 1,
        unmappedMainTranslationFields: 0,
        inventoryObjectsExpected: 0,
        inventoryObjectsScanned: 0,
        inventoryFieldsDiscovered: 0,
        inventoryFieldsMapped: 0,
        inventoryFieldsUnmapped: 0,
      };
    }
    const productionFile = files[0];
    const cards = loadArrayDataset(productionFile) || [];
    const scan = scanG1TrainingInventory(cards, { productionFile, scopeId });
    return {
      inventoryCoverage: scan.inventoryCoverage,
      unmappedMainTranslationFields: scan.unmappedMainTranslationFields,
      inventoryObjectsExpected: scan.inventoryObjectsExpected || scan.fieldsScanned || 0,
      inventoryObjectsScanned: scan.inventoryFieldsMapped || scan.fieldsScanned || 0,
      inventoryFieldsDiscovered: scan.inventoryFieldsDiscovered || scan.fieldsScanned || 0,
      inventoryFieldsMapped: scan.inventoryFieldsMapped || scan.fieldsScanned || 0,
      inventoryFieldsUnmapped: scan.inventoryFieldsUnmapped || 0,
    };
  }

  if (group === "g3") {
    const productionFile = g3Files(lang)[0];
    const globals = loadWindowGlobals(productionFile);
    const scan = scanG3CourseLessonsInventory(globals.COURSE_LESSON_DATA || {}, { productionFile });
    return {
      inventoryCoverage: scan.inventoryCoverage,
      unmappedMainTranslationFields: scan.unmappedMainTranslationFields,
      inventoryObjectsExpected: scan.inventoryObjectsExpected || scan.fieldsExpected || 0,
      inventoryObjectsScanned: scan.inventoryFieldsMapped || scan.fieldsMapped || 0,
      inventoryFieldsDiscovered: scan.inventoryFieldsDiscovered || scan.fieldsExpected || 0,
      inventoryFieldsMapped: scan.inventoryFieldsMapped || scan.fieldsMapped || 0,
      inventoryFieldsUnmapped: scan.inventoryFieldsUnmapped || 0,
      emptyByDesign: scan.emptyByDesign || 0,
    };
  }

  return {
    inventoryCoverage: 1,
    unmappedMainTranslationFields: 0,
    inventoryObjectsExpected: 0,
    inventoryObjectsScanned: 0,
    inventoryFieldsDiscovered: 0,
    inventoryFieldsMapped: 0,
    inventoryFieldsUnmapped: 0,
  };
}

function collectPhase1Scope({ group, dataset, lang }) {
  const scopeMeta = classifyScope(group, dataset, lang);
  const idPrefix = `DISC-${group.toUpperCase()}-${String(dataset).toUpperCase()}-${lang.toUpperCase()}`;

  if (scopeMeta.applicability === "EXPECTED_NOT_APPLICABLE") {
    return {
      findings: [],
      stats: {
        ...scopeMeta,
        scopeExecuted: true,
        structuralCollector: expectedStructuralCollector(group, dataset),
        structuralIssues: 0,
        inventoryCoverage: 1,
        unmappedMainTranslationFields: 0,
        multiScanCoverage: 1,
        multiScanObjectsExpected: 0,
        multiScanObjectsScanned: 0,
        lunaProcessed: false,
        lunaObjectsExpected: 0,
        lunaObjectsReturned: 0,
        verdict: "NOT_APPLICABLE",
      },
    };
  }

  const base = collectForScope({ group, dataset, lang });
  const findings = [...base.findings];
  const stats = { ...base.stats, ...scopeMeta };

  if (group === "g1" && dataset === "verbs" && lang !== "lv") {
    const multi = collectG1VerbsMultiTranslation({ lang, idPrefix });
    findings.push(...annotateFindings(multi.findings, scopeMeta));
    Object.assign(stats, multi.stats);
  }

  if (group === "g3" && lang !== "lv") {
    const multi = collectG3MultiTranslation({ lang, idPrefix });
    findings.push(...annotateFindings(multi.findings, scopeMeta));
    Object.assign(stats, multi.stats);
    const legacy = collectG3LegacyHtml({ lang, idPrefix });
    findings.push(...annotateFindings(legacy.findings, scopeMeta));
    Object.assign(stats, legacy.stats);
  }

  if (group === "g1" && dataset === "training" && lang !== "lv" && g1Files(lang, dataset).length) {
    const multi = collectG1TrainingMultiTranslation({ lang, idPrefix });
    findings.push(...annotateFindings(multi.findings, scopeMeta));
    Object.assign(stats, multi.stats);
  }

  if (group === "g2" && lang !== "lv") {
    const multi = collectG2MultiTranslation({ lang, level: dataset, idPrefix });
    findings.push(...annotateFindings(multi.findings, scopeMeta));
    Object.assign(stats, {
      multiScanObjectsExpected: multi.stats.fieldsScanned || 0,
      multiScanObjectsScanned: multi.stats.fieldsScanned || 0,
      multiScanCoverage:
        multi.stats.fieldsScanned > 0 && multi.stats.fieldsScanned === multi.stats.fieldsScanned ? 1 : 0,
    });
  }

  if (group === "g1" && dataset === "sentences" && lang !== "lv") {
    const multi = collectG1SentencesMultiTranslation({ lang, idPrefix });
    findings.push(...annotateFindings(multi.findings, scopeMeta));
    Object.assign(stats, {
      multiScanObjectsExpected: multi.stats.fieldsScanned || 0,
      multiScanObjectsScanned: multi.stats.fieldsScanned || 0,
      multiScanCoverage:
        multi.stats.fieldsScanned > 0 && multi.stats.fieldsScanned === multi.stats.fieldsScanned ? 1 : 0,
      candidatesRaw: multi.stats.candidatesRaw || 0,
    });
  }

  const inventory = collectInventoryStats({ group, dataset, lang });
  Object.assign(stats, inventory);

  if (stats.inventoryApplicable) {
    stats.inventoryCoverage = inventory.inventoryCoverage;
    stats.unmappedMainTranslationFields = inventory.unmappedMainTranslationFields;
  } else {
    stats.inventoryCoverage = 1;
    stats.unmappedMainTranslationFields = 0;
  }

  if (!stats.multiScanApplicable) {
    stats.multiScanCoverage = 1;
    stats.multiScanObjectsExpected = 0;
    stats.multiScanObjectsScanned = 0;
  } else if (stats.multiScanCoverage == null) {
    stats.multiScanCoverage = 1;
    stats.multiScanObjectsExpected = stats.multiScanObjectsExpected || 0;
    stats.multiScanObjectsScanned = stats.multiScanObjectsScanned || stats.multiScanObjectsExpected || 0;
  }

  stats.scopeExecuted = true;
  stats.structuralCollector = stats.structuralCollector || expectedStructuralCollector(group, dataset);
  stats.structuralIssues = findings.filter((f) => f.source === "deterministic/structural").length;
  stats.findingsDeterministic = findings.length;
  stats.lunaProcessed = false;
  stats.lunaObjectsExpected = 0;
  stats.lunaObjectsReturned = 0;
  stats.verdict = findings.length === 0 ? "PASS" : "NEEDS_OWNER_REVIEW";

  return {
    findings: annotateFindings(findings, scopeMeta),
    stats,
  };
}

module.exports = {
  collectPhase1Scope,
  collectInventoryStats,
};
