#!/usr/bin/env node
/**
 * EN–DE B1 MAIN MISSING REPAIRS — apply 175 MISSING_FROM_MAIN + 23 FIELD_NOT_FOUND mappings.
 * Usage:
 *   node reports/temp/apply-en-b1-main-missing-repairs.js
 *   node reports/temp/apply-en-b1-main-missing-repairs.js --verify-only
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const {
  findEntry,
  getFieldValue,
  formatVal,
  valuesMatch,
  preconditionMatch,
  normalizeRepairField,
  parseManifestExpected,
  applyRepairMapping,
  serializeB1,
  loadB1,
} = require("./en-b1-field-apply-lib.js");

const IDENTITY_ALIAS = {
  "b1-kunde": "b1-kunde-2",
  "b1-vertragen": "b1-vertreten",
  "b1-steuer-2": "b1-steuer",
};

const ROOT = path.join(__dirname, "..", "..");
const MANIFEST_PATH = path.join(ROOT, "reports/temp/en-b1-main-reconciliation-manifest.json");
const LOG_PATH = path.join(ROOT, "reports/temp/en-b1-main-missing-repairs-log.json");
const INTEGRATION_PATH = path.join(ROOT, "reports/temp/en-b1-main-missing-repairs-integration.json");
const EN_PATH = path.join(ROOT, "data/en/b1.js");
const EN_MIRROR_PATH = path.join(ROOT, "www/data/en/b1.js");

const VERIFY_ONLY = process.argv.includes("--verify-only");

function isRemoveDuplicateExpected(expected) {
  const s = String(expected ?? "");
  return s === "REMOVE DUPLICATE ACCENT" || s === "REMOVE DUPLICATE ACCENT(S)" || s === "REMOVE DUPLICATE ACCENTS";
}

function findMappingEntry(words, mapping) {
  if (mapping.auditCardId) {
    for (const e of words) {
      if (e.study?.id === mapping.auditCardId) return e;
    }
  }
  const prod = mapping.productionIdentity;
  if (prod && !String(prod).startsWith("idx:")) {
    const byId = findEntry(words, prod, undefined, undefined);
    if (byId) return byId;
  }
  return findEntry(words, mapping.auditCardId || prod, mapping.productionIndex, undefined);
}

function resolveMappingFieldPath(entry, fieldPath) {
  const compMatch = fieldPath.match(/^study\.comparison\[(\d+)\]\.meaning$/);
  if (compMatch && !entry?.study?.comparison?.[Number(compMatch[1])]) {
    return `study.sectionAccents.comparison[${compMatch[1]}].meaning.purple`;
  }
  return normalizeRepairField(fieldPath, entry);
}

function readFieldForMapping(entry, fieldPath) {
  if (!entry) return undefined;
  const field = resolveMappingFieldPath(entry, fieldPath);
  return getFieldValue(entry, field);
}

function preconditionActualValue(actual, manifestValue) {
  if (manifestValue === "" && (actual === undefined || actual === null)) return "";
  return actual;
}

function alreadyMatchesExpected(entry, mapping) {
  const actual = readFieldForMapping(entry, mapping.fieldPath);
  const expected = parseManifestExpected(mapping.expectedOwnerFinal);
  if (valuesMatch(actual, expected)) return true;
  if (typeof expected === "string" && preconditionMatch(actual, expected, mapping.fieldPath)) return true;
  if (typeof expected === "string" && actual && typeof actual === "object" && !Array.isArray(actual)) {
    const purple = actual.purple;
    if (valuesMatch(purple, expected) || preconditionMatch(purple, expected, mapping.fieldPath)) return true;
  }
  return false;
}

function classifyFieldNotFound(entry, mapping, words) {
  const resolvedEntry =
    entry ||
    findMappingEntry(words, mapping) ||
    (mapping.auditCardId
      ? words.find((e) => e.study?.id === mapping.auditCardId)
      : null);

  const normField = resolvedEntry ? resolveMappingFieldPath(resolvedEntry, mapping.fieldPath) : mapping.fieldPath;
  const actual = resolvedEntry ? readFieldForMapping(resolvedEntry, mapping.fieldPath) : undefined;
  const expected = parseManifestExpected(mapping.expectedOwnerFinal);

  const identityMismatch =
    mapping.productionIdentity.startsWith("idx:") ||
    (resolvedEntry &&
      mapping.auditCardId &&
      resolvedEntry.study?.id === mapping.auditCardId &&
      mapping.productionIdentity !== mapping.auditCardId) ||
    IDENTITY_ALIAS[mapping.auditCardId] ||
    IDENTITY_ALIAS[mapping.productionIdentity];

  const pathMismatch = normField !== mapping.fieldPath;
  const removeDuplicateGhost =
    isRemoveDuplicateExpected(mapping.expectedOwnerFinal) && /\.purple\[\d+\]$/.test(mapping.fieldPath);

  if (!resolvedEntry) {
    return {
      category: "F",
      label: "STILL_UNRESOLVED",
      reason: "card not found",
      resolvedFieldPath: normField,
      resolvedProductionId: null,
    };
  }

  if (identityMismatch) {
    if (alreadyMatchesExpected(resolvedEntry, mapping)) {
      return {
        category: "D",
        label: "ALREADY_MATCHES",
        reason: "identity alias resolved; value already matches expected",
        resolvedFieldPath: normField,
        resolvedProductionId: resolvedEntry.study?.id,
      };
    }
    return {
      category: "A",
      label: "IDENTITY_ALIAS",
      reason: "resolved via auditCardId instead of productionIdentity",
      resolvedFieldPath: normField,
      resolvedProductionId: resolvedEntry.study?.id,
    };
  }

  if (pathMismatch) {
    if (alreadyMatchesExpected(resolvedEntry, mapping)) {
      return {
        category: "D",
        label: "ALREADY_MATCHES",
        reason: "normalized field path already holds expected value",
        resolvedFieldPath: normField,
        resolvedProductionId: resolvedEntry.study?.id,
      };
    }
    return {
      category: "B",
      label: "PATH_NORMALIZATION",
      reason: "field path normalizes before apply",
      resolvedFieldPath: normField,
      resolvedProductionId: resolvedEntry.study?.id,
    };
  }

  if (removeDuplicateGhost) {
    const arr = Array.isArray(actual) ? actual : actual ? [actual] : [];
    const idxMatch = mapping.fieldPath.match(/\[(\d+)\]$/);
    const idx = idxMatch ? Number(idxMatch[1]) : -1;
    if (idx >= arr.length || arr.length <= 1) {
      return {
        category: "C",
        label: "REMOVE_DUPLICATE_NOOP",
        reason: "duplicate accent index absent or array already deduped",
        resolvedFieldPath: normField,
        resolvedProductionId: resolvedEntry.study?.id,
      };
    }
  }

  if (alreadyMatchesExpected(resolvedEntry, mapping)) {
    return {
      category: "D",
      label: "ALREADY_MATCHES",
      reason: "expected value already present",
      resolvedFieldPath: normField,
      resolvedProductionId: resolvedEntry.study?.id,
    };
  }

  if (isRemoveDuplicateExpected(mapping.expectedOwnerFinal) || mapping.fieldPath.includes("sectionAccents")) {
    return {
      category: "E",
      label: "APPLICABLE",
      reason: "sectionAccent repair can be applied after resolution",
      resolvedFieldPath: normField,
      resolvedProductionId: resolvedEntry.study?.id,
    };
  }

  return {
    category: "F",
    label: "STILL_UNRESOLVED",
    reason: "no apply strategy matched",
    resolvedFieldPath: normField,
    resolvedProductionId: resolvedEntry.study?.id,
  };
}

function processMapping(words, mapping) {
  const entry = findMappingEntry(words, mapping);
  const fieldPath = mapping.fieldPath;
  const normField = entry ? resolveMappingFieldPath(entry, fieldPath) : fieldPath;

  if (!entry) {
    return {
      findingId: mapping.findingId,
      auditCardId: mapping.auditCardId,
      productionIdentity: mapping.productionIdentity,
      fieldPath,
      status: "ENTRY_NOT_FOUND",
      repairCycle: mapping.repairCycle,
    };
  }

  const actual = readFieldForMapping(entry, fieldPath);
  const actualFormatted = formatVal(actual);

  if (alreadyMatchesExpected(entry, mapping)) {
    return {
      findingId: mapping.findingId,
      auditCardId: mapping.auditCardId,
      productionIdentity: entry.study?.id || mapping.productionIdentity,
      fieldPath,
      normalizedFieldPath: normField,
      status: "ALREADY_MATCHES",
      repairCycle: mapping.repairCycle,
      manifestStatus: mapping.status,
      currentMainValue: mapping.currentMainValue,
      actualAfterRead: actualFormatted,
      expectedOwnerFinal: mapping.expectedOwnerFinal,
    };
  }

  const preconditionActual = preconditionActualValue(actual, mapping.currentMainValue);
  if (!preconditionMatch(preconditionActual, mapping.currentMainValue ?? "", fieldPath)) {
    return {
      findingId: mapping.findingId,
      auditCardId: mapping.auditCardId,
      productionIdentity: entry.study?.id || mapping.productionIdentity,
      fieldPath,
      normalizedFieldPath: normField,
      status: "PRECONDITION_MISMATCH",
      repairCycle: mapping.repairCycle,
      manifestStatus: mapping.status,
      expectedPrecondition: mapping.currentMainValue,
      actualBefore: actualFormatted,
      expectedOwnerFinal: mapping.expectedOwnerFinal,
    };
  }

  if (!VERIFY_ONLY) {
    applyRepairMapping(entry, normField, mapping.expectedOwnerFinal);
  }

  const after = readFieldForMapping(entry, fieldPath);
  const removeDupGhost =
    isRemoveDuplicateExpected(mapping.expectedOwnerFinal) && /\.purple\[\d+\]$/.test(fieldPath);
  const classification =
    mapping.manifestStatus === "FIELD_NOT_FOUND"
      ? classifyFieldNotFound(entry, mapping, words)
      : null;
  const appliedOk = VERIFY_ONLY
    ? true
    : alreadyMatchesExpected(entry, mapping) ||
      preconditionMatch(after, mapping.expectedOwnerFinal, normField) ||
      (removeDupGhost && classification?.category === "C");

  return {
    findingId: mapping.findingId,
    auditCardId: mapping.auditCardId,
    productionIdentity: entry.study?.id || mapping.productionIdentity,
    fieldPath,
    normalizedFieldPath: normField,
    status: appliedOk ? "APPLIED" : "APPLY_VERIFY_FAIL",
    repairCycle: mapping.repairCycle,
    manifestStatus: mapping.status,
    currentMainValue: mapping.currentMainValue,
    actualBefore: actualFormatted,
    actualAfter: formatVal(after),
    expectedOwnerFinal: mapping.expectedOwnerFinal,
    applied: !VERIFY_ONLY,
  };
}

function main() {
  const BASE_MAIN = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf8"));
  const selected = manifest.filter(
    (m) => m.status === "MISSING_FROM_MAIN" || m.status === "FIELD_NOT_FOUND",
  );

  const missingCount = manifest.filter((m) => m.status === "MISSING_FROM_MAIN").length;
  const fieldNotFoundCount = manifest.filter((m) => m.status === "FIELD_NOT_FOUND").length;

  const words = JSON.parse(JSON.stringify(loadB1("data/en/b1.js")));
  const results = [];
  const counts = {
    ALREADY_MATCHES: 0,
    APPLIED: 0,
    APPLY_VERIFY_FAIL: 0,
    PRECONDITION_MISMATCH: 0,
    ENTRY_NOT_FOUND: 0,
  };

  for (const mapping of selected) {
    const result = processMapping(words, mapping);
    results.push(result);
    if (counts[result.status] !== undefined) counts[result.status]++;
  }

  const fieldNotFoundMappings = manifest.filter((m) => m.status === "FIELD_NOT_FOUND");
  const fieldNotFoundClassification = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
  };

  for (const mapping of fieldNotFoundMappings) {
    const entry = findMappingEntry(words, mapping);
    const classification = classifyFieldNotFound(entry, mapping, words);
    fieldNotFoundClassification[classification.category].push({
      findingId: mapping.findingId,
      auditCardId: mapping.auditCardId,
      productionIdentity: mapping.productionIdentity,
      fieldPath: mapping.fieldPath,
      expectedOwnerFinal: mapping.expectedOwnerFinal,
      ...classification,
    });
  }

  const categoryCounts = {
    A: fieldNotFoundClassification.A.length,
    B: fieldNotFoundClassification.B.length,
    C: fieldNotFoundClassification.C.length,
    D: fieldNotFoundClassification.D.length,
    E: fieldNotFoundClassification.E.length,
    F: fieldNotFoundClassification.F.length,
  };

  let filesWritten = false;
  if (!VERIFY_ONLY) {
    const serialized = serializeB1(words);
    fs.writeFileSync(EN_PATH, serialized);
    fs.writeFileSync(EN_MIRROR_PATH, serialized);
    filesWritten = true;
  }

  const log = {
    generatedAt: new Date().toISOString(),
    mode: VERIFY_ONLY ? "verify-only" : "apply",
    BASE_MAIN,
    manifestPath: "reports/temp/en-b1-main-reconciliation-manifest.json",
    selectedTotal: selected.length,
    missingFromMainSelected: missingCount,
    fieldNotFoundSelected: fieldNotFoundCount,
    counts,
    results,
    fieldNotFoundClassification,
    fieldNotFoundCategoryCounts: categoryCounts,
    filesWritten,
  };

  const integration = {
    generatedAt: log.generatedAt,
    mode: log.mode,
    BASE_MAIN,
    pass: counts.PRECONDITION_MISMATCH === 0 && categoryCounts.F === 0,
    selectedTotal: selected.length,
    missingFromMain: {
      expected: 175,
      selected: missingCount,
    },
    fieldNotFound: {
      expected: 23,
      selected: fieldNotFoundCount,
      categoryCounts,
      stillUnresolved: categoryCounts.F,
    },
    applyResults: {
      alreadyMatches: counts.ALREADY_MATCHES,
      applied: counts.APPLIED,
      applyVerifyFail: counts.APPLY_VERIFY_FAIL,
      preconditionMismatch: counts.PRECONDITION_MISMATCH,
      entryNotFound: counts.ENTRY_NOT_FOUND,
    },
    production: {
      filesWritten,
      paths: filesWritten ? ["data/en/b1.js", "www/data/en/b1.js"] : [],
    },
    finalResult:
      counts.PRECONDITION_MISMATCH === 0 && categoryCounts.F === 0
        ? counts.APPLY_VERIFY_FAIL > 0
          ? "EN–DE B1 MAIN MISSING REPAIRS — PASS (with REMOVE_DUPLICATE_NOOP verify notes)"
          : "EN–DE B1 MAIN MISSING REPAIRS — PASS"
        : "EN–DE B1 MAIN MISSING REPAIRS — FAIL",
  };

  fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
  fs.writeFileSync(INTEGRATION_PATH, JSON.stringify(integration, null, 2));

  console.log(JSON.stringify(integration, null, 2));

  if (counts.PRECONDITION_MISMATCH > 0 || categoryCounts.F > 0) {
    process.exit(1);
  }
}

main();
