#!/usr/bin/env node
/**
 * EN–DE B1 MAIN INTEGRATION REGRESSION FOLLOW-UP REPAIR — 8 OWNER-approved findings only.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const REPAIR_PATH = path.join(ROOT, "reports/temp/en-b1-main-integration-regression-follow-up-repair.json");
const LOG_PATH = path.join(ROOT, "reports/temp/en-b1-main-integration-regression-follow-up-repair-log.json");
const EN_PATH = path.join(ROOT, "data/en/b1.js");
const EN_MIRROR_PATH = path.join(ROOT, "www/data/en/b1.js");

const lib = require("./en-b1-field-apply-lib");

const META_PEDAGOGY = /\b(in Latvian|Latvian usually|Latvian language|Latvian learners?|for Latvian|Latvian equivalent|Latvian word|Latvian phrase)\b/i;

function accentTermMatchesStrict(study, sectionKey, index, field, term) {
  const texts = [];
  const push = (v) => {
    if (v === undefined || v === null) return;
    if (typeof v === "string") {
      if (v.trim()) texts.push(v);
      return;
    }
    if (Array.isArray(v)) v.forEach(push);
    else if (typeof v === "object") {
      ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) => push(v[k]));
    }
  };
  if (sectionKey === "examples") {
    const rows = index !== null ? [study.examples?.[index]] : study.examples || [];
    rows.forEach((ex) => {
      if (!field || field === "lv") push(ex.lv);
    });
  } else if (sectionKey === "tip") {
    if (field === "leftBlocks") {
      (study.tip?.leftBlocks || []).forEach((b) => push(b.text));
    } else {
      push(study.tip?.left || study.tip?.text);
      push(study.tip?.right || study.tip?.example);
      (study.tip?.leftBlocks || []).forEach((b) => push(b.text));
    }
  }
  const blob = texts.join("\n");
  if (!blob || !term) return false;
  try {
    const esc = String(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp(`(?<![\\p{L}\\p{N}_])${esc}(?![\\p{L}\\p{N}_])`, "iu").test(blob);
  } catch {
    return blob.toLowerCase().includes(String(term).toLowerCase());
  }
}

function removeTipPurple(entry) {
  const tip = entry.study?.sectionAccents?.tip;
  if (!tip || typeof tip !== "object") return;
  delete tip.purple;
  if (Object.keys(tip).length === 0) delete entry.study.sectionAccents.tip;
}

function applyRepair(entry, repair) {
  const fieldPath = repair.fieldPath.replace(/^study\./, "");
  const fullField = repair.fieldPath.startsWith("study.") ? repair.fieldPath : `study.${fieldPath}`;

  if (repair.action === "REMOVE" && fullField === "study.sectionAccents.tip.purple") {
    removeTipPurple(entry);
    return;
  }

  if (repair.action === "REPLACE") {
    lib.setFieldValue(entry, fullField, repair.ownerFinal);
    return;
  }

  throw new Error(`Unsupported action for ${repair.findingId}: ${repair.action}`);
}

function verifyRepair(entry, repair) {
  if (repair.category === "META-PEDAGOGY") {
    const actual = lib.getFieldValue(entry, repair.fieldPath);
    if (actual !== repair.ownerFinal) return { ok: false, reason: "final mismatch", actual };
    if (META_PEDAGOGY.test(actual)) return { ok: false, reason: "meta-pedagogy remains", actual };
    return { ok: true, actual };
  }

  if (repair.action === "REMOVE" && repair.fieldPath === "study.sectionAccents.tip.purple") {
    const purple = entry.study?.sectionAccents?.tip?.purple;
    if (purple !== undefined) return { ok: false, reason: "tip.purple still present", actual: purple };
    return { ok: true, actual: null };
  }

  if (repair.fieldPath.includes("sectionAccents.examples[1].lv.purple[0]")) {
    const actual = entry.study?.sectionAccents?.examples?.[1]?.lv?.purple?.[0];
    if (actual !== repair.ownerFinal) return { ok: false, reason: "accent token mismatch", actual };
    const lv = entry.study?.examples?.[1]?.lv;
    if (!accentTermMatchesStrict(entry.study, "examples", 1, "lv", actual)) {
      return { ok: false, reason: "accent not in example lv text", actual, lv };
    }
    return { ok: true, actual };
  }

  return { ok: true };
}

function main() {
  const repairDoc = JSON.parse(fs.readFileSync(REPAIR_PATH, "utf8"));
  const repairs = repairDoc.repairs.filter((r) => !r.pairedWithFindingId);
  const words = JSON.parse(JSON.stringify(lib.loadB1("data/en/b1.js")));
  const log = {
    generatedAt: new Date().toISOString(),
    repairs: [],
    counts: {
      applied: 0,
      preconditionMismatch: 0,
      verifyFail: 0,
      entryNotFound: 0,
    },
    uniqueCards: [],
    physicalFields: [],
  };

  for (const repair of repairs) {
    const entry = lib.findEntry(
      words,
      repair.productionIdentity,
      repair.productionIndex,
      repair.cardId,
    );
    if (!entry) {
      log.counts.entryNotFound++;
      log.repairs.push({ ...repair, status: "ENTRY_NOT_FOUND" });
      continue;
    }

    const actual = lib.getFieldValue(entry, repair.fieldPath);
    const expectedCurrent = repair.expectedCurrent;
    let preconditionOk = false;

    if (repair.action === "REMOVE" && repair.fieldPath === "study.sectionAccents.tip.purple") {
      const purple = entry.study?.sectionAccents?.tip?.purple;
      preconditionOk = Array.isArray(purple) && JSON.stringify(purple) === JSON.stringify(expectedCurrent);
    } else if (repair.fieldPath.endsWith(".purple[0]")) {
      preconditionOk = actual === expectedCurrent;
    } else {
      preconditionOk = lib.valuesMatch(actual, expectedCurrent) || actual === expectedCurrent;
    }

    if (!preconditionOk) {
      log.counts.preconditionMismatch++;
      log.repairs.push({
        findingId: repair.findingId,
        cardId: repair.cardId,
        fieldPath: repair.fieldPath,
        status: "PRECONDITION_MISMATCH",
        expectedCurrent,
        actual,
      });
      continue;
    }

    applyRepair(entry, repair);
    const verify = verifyRepair(entry, repair);
    if (!verify.ok) {
      log.counts.verifyFail++;
      log.repairs.push({
        findingId: repair.findingId,
        cardId: repair.cardId,
        fieldPath: repair.fieldPath,
        status: "VERIFY_FAIL",
        verify,
      });
      continue;
    }

    log.counts.applied++;
    if (!log.uniqueCards.includes(repair.cardId)) log.uniqueCards.push(repair.cardId);
    log.physicalFields.push({
      findingId: repair.findingId,
      cardId: repair.cardId,
      fieldPath: repair.fieldPath,
      ownerFinal: repair.ownerFinal,
      action: repair.action,
    });
    log.repairs.push({
      findingId: repair.findingId,
      cardId: repair.cardId,
      fieldPath: repair.fieldPath,
      status: "APPLIED",
      ownerFinal: repair.ownerFinal,
      action: repair.action,
    });
  }

  if (log.counts.preconditionMismatch > 0 || log.counts.verifyFail > 0 || log.counts.entryNotFound > 0) {
    console.error(JSON.stringify(log, null, 2));
    process.exit(1);
  }

  const serialized = lib.serializeB1(words);
  fs.writeFileSync(EN_PATH, serialized);
  fs.writeFileSync(EN_MIRROR_PATH, serialized);

  repairDoc.generatedAt = log.generatedAt;
  fs.writeFileSync(REPAIR_PATH, JSON.stringify(repairDoc, null, 2));
  fs.writeFileSync(LOG_PATH, JSON.stringify(log, null, 2));

  console.log(
    JSON.stringify({
      pass: true,
      applied: log.counts.applied,
      uniqueCards: log.uniqueCards.length,
      physicalFields: log.physicalFields.length,
    }),
  );
}

main();
