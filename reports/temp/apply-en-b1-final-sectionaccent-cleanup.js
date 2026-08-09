#!/usr/bin/env node
/**
 * EN–DE B1 FINAL SECTIONACCENT CLEANUP — apply 3 REAL LABOT repairs.
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const CLEANUP_JSON = path.join(ROOT, "reports/temp/en-b1-final-sectionaccent-cleanup.json");
const LOG_JSON = path.join(ROOT, "reports/temp/en-b1-final-sectionaccent-cleanup-repair-log.json");
const EN_PATH = path.join(ROOT, "data/en/b1.js");
const EN_MIRROR_PATH = path.join(ROOT, "www/data/en/b1.js");

const lib = require("./en-b1-field-apply-lib");

function arraysEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function main() {
  const doc = JSON.parse(fs.readFileSync(CLEANUP_JSON, "utf8"));
  const words = JSON.parse(JSON.stringify(lib.loadB1("data/en/b1.js")));
  const log = {
    generatedAt: new Date().toISOString(),
    repairs: [],
    counts: { applied: 0, preconditionMismatch: 0, verifyFail: 0 },
    uniqueCards: [],
    physicalFields: [],
  };

  for (const repair of doc.repairs) {
    const entry = lib.findEntry(words, repair.productionIdentity, repair.productionIndex, repair.cardId);
    if (!entry) {
      log.repairs.push({ ...repair, status: "ENTRY_NOT_FOUND" });
      continue;
    }

    const actual = lib.getFieldValue(entry, lib.normalizeRepairField(repair.fieldPath, entry));
    let preconditionOk = false;
    if (repair.action === "REPLACE_ARRAY") {
      preconditionOk = arraysEqual(actual, repair.expectedCurrent);
    } else {
      preconditionOk = actual === repair.expectedCurrent;
    }

    if (!preconditionOk) {
      log.counts.preconditionMismatch++;
      log.repairs.push({
        findingId: repair.findingId,
        status: "PRECONDITION_MISMATCH",
        expectedCurrent: repair.expectedCurrent,
        actual,
      });
      continue;
    }

    lib.setFieldValue(entry, repair.fieldPath, repair.ownerFinal);

    const after = lib.getFieldValue(entry, lib.normalizeRepairField(repair.fieldPath, entry));
    let verifyOk = false;
    if (repair.action === "REPLACE_ARRAY") {
      verifyOk = arraysEqual(after, repair.ownerFinal);
    } else {
      verifyOk = after === repair.ownerFinal;
    }

    if (!verifyOk) {
      log.counts.verifyFail++;
      log.repairs.push({ findingId: repair.findingId, status: "VERIFY_FAIL", after });
      continue;
    }

    log.counts.applied++;
    if (!log.uniqueCards.includes(repair.cardId)) log.uniqueCards.push(repair.cardId);
    log.physicalFields.push({
      findingId: repair.findingId,
      cardId: repair.cardId,
      fieldPath: repair.fieldPath,
      ownerFinal: repair.ownerFinal,
    });
    log.repairs.push({
      findingId: repair.findingId,
      cardId: repair.cardId,
      fieldPath: repair.fieldPath,
      status: "APPLIED",
      ownerFinal: repair.ownerFinal,
    });
  }

  if (log.counts.applied !== doc.repairs.length) {
    fs.writeFileSync(LOG_JSON, JSON.stringify(log, null, 2));
    console.error("APPLY FAILED", log.counts);
    process.exit(1);
  }

  const serialized = lib.serializeB1(words);
  fs.writeFileSync(EN_PATH, serialized);
  fs.writeFileSync(EN_MIRROR_PATH, serialized);
  fs.writeFileSync(LOG_JSON, JSON.stringify(log, null, 2));
  console.log(`APPLIED ${log.counts.applied} repairs on cards: ${log.uniqueCards.join(", ")}`);
}

main();
