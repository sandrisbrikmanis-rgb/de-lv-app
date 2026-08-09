#!/usr/bin/env node
/**
 * EN–DE B1 MAIN INTEGRATION FOLLOW-UP REPAIR #2 — b1-entlassen tip sectionAccent only.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const REPAIR_PATH = path.join(ROOT, "reports/temp/en-b1-main-integration-follow-up-repair-2.json");
const LOG_PATH = path.join(ROOT, "reports/temp/en-b1-main-integration-follow-up-repair-2-log.json");
const EN_PATH = path.join(ROOT, "data/en/b1.js");
const EN_MIRROR_PATH = path.join(ROOT, "www/data/en/b1.js");

const lib = require("./en-b1-field-apply-lib");

function accentInTipText(study, term) {
  const texts = [];
  (study.tip?.leftBlocks || []).forEach((b) => {
    if (typeof b.text === "string") texts.push(b.text);
  });
  const blob = texts.join("\n");
  if (!blob || !term) return false;
  try {
    const esc = String(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(?<![\\p{L}\\p{N}_])${esc}(?![\\p{L}\\p{N}_])`, "iu").test(blob);
  } catch {
    return blob.toLowerCase().includes(String(term).toLowerCase());
  }
}

function main() {
  const repairDoc = JSON.parse(fs.readFileSync(REPAIR_PATH, "utf8"));
  const repair = repairDoc.repairs[0];
  const words = JSON.parse(JSON.stringify(lib.loadB1("data/en/b1.js")));
  const log = {
    generatedAt: new Date().toISOString(),
    repair: repair.findingId,
    cardId: repair.cardId,
    fieldPath: repair.fieldPath,
    status: "PENDING",
    precondition: null,
    postApply: null,
    uniqueCards: [],
    physicalFields: [],
  };

  const entry = lib.findEntry(words, repair.productionIdentity, repair.productionIndex, repair.cardId);
  if (!entry) {
    log.status = "ENTRY_NOT_FOUND";
    fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
    console.error("ENTRY_NOT_FOUND");
    process.exit(1);
  }

  if (entry.study?.id !== "b1-entlassen") {
    log.status = "CARD_ID_MISMATCH";
    fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
    console.error("CARD_ID_MISMATCH");
    process.exit(1);
  }

  const actual = lib.getFieldValue(entry, repair.fieldPath);
  const tipText = entry.study?.tip?.leftBlocks?.[0]?.text;
  log.precondition = { accent: actual, tipText };

  if (actual !== repair.expectedCurrent) {
    log.status = "PRECONDITION_MISMATCH";
    log.precondition.expected = repair.expectedCurrent;
    fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
    console.error(`PRECONDITION_MISMATCH: expected "${repair.expectedCurrent}", got "${actual}"`);
    process.exit(1);
  }

  if (tipText !== repair.expectedTipText) {
    log.status = "TIP_TEXT_MISMATCH";
    log.precondition.expectedTipText = repair.expectedTipText;
    fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
    console.error("TIP_TEXT_MISMATCH — do not modify tip text in this repair");
    process.exit(1);
  }

  lib.setFieldValue(entry, repair.fieldPath, repair.ownerFinal);

  const afterAccent = lib.getFieldValue(entry, repair.fieldPath);
  const afterTip = entry.study?.tip?.leftBlocks?.[0]?.text;
  const verifyOk =
    afterAccent === repair.ownerFinal &&
    afterTip === repair.expectedTipText &&
    accentInTipText(entry.study, repair.ownerFinal) &&
    !accentInTipText(entry.study, repair.expectedCurrent);

  log.postApply = {
    accent: afterAccent,
    tipText: afterTip,
    targetExists: accentInTipText(entry.study, repair.ownerFinal),
    staleRemaining: accentInTipText(entry.study, repair.expectedCurrent),
  };

  if (!verifyOk) {
    log.status = "VERIFY_FAIL";
    fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
    console.error("VERIFY_FAIL", log.postApply);
    process.exit(1);
  }

  const idx = words.findIndex((w) => w.study?.id === "b1-entlassen");
  words[idx] = entry;

  const serialized = lib.serializeB1(words);
  fs.writeFileSync(EN_PATH, serialized);
  fs.writeFileSync(EN_MIRROR_PATH, serialized);

  log.status = "APPLIED";
  log.ownerFinal = repair.ownerFinal;
  log.uniqueCards = [repair.cardId];
  log.physicalFields = [{ fieldPath: repair.fieldPath, ownerFinal: repair.ownerFinal }];

  fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));
  console.log("APPLIED: b1-entlassen sectionAccent choose by location → context");
  process.exit(0);
}

main();
