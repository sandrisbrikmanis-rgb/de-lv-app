#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const {
  OUT_DIR,
  sha256,
  cardKey,
  loadOwnerReviewViewPayload,
  writeJsonWithParts,
  deepEqual,
} = require("./g2-a1-lrb-consolidation-owner-review-artifacts");
const {
  runGalaCorrection001040Gates,
} = require("./g2-a1-lrb-consolidation-gala-correction-gates");
const { COPY_PASTE_4 } = require("./g2-a1-lrb-consolidation-owner-copy-paste-apply");

function patchFullCardsByKey(copyPaste, changes) {
  const changeByKey = new Map();
  for (const ch of changes) {
    changeByKey.set(cardKey(ch.target_language, ch.canonical_card_object_id), ch);
  }
  for (const c of copyPaste.cards) {
    const key = cardKey(c.target_language, c.canonical_card_object_id);
    const ch = changeByKey.get(key);
    if (!ch) continue;
    c.full_card_owner_new = JSON.parse(JSON.stringify(ch.full_card_owner_new));
  }
  return changeByKey;
}

function syncOptionalOwnerBundles(changeByKey) {
  const bundlePaths = [
    path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-FIRST-20.json"),
    path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-021-040.json"),
  ];
  for (const bp of bundlePaths) {
    if (!fs.existsSync(bp)) continue;
    const doc = JSON.parse(fs.readFileSync(bp, "utf8"));
    let touched = false;
    for (const c of doc.cards || []) {
      const key = cardKey(c.target_language, c.canonical_card_object_id);
      const ch = changeByKey.get(key);
      if (!ch) continue;
      c.full_card_owner_new = JSON.parse(JSON.stringify(ch.full_card_owner_new));
      touched = true;
    }
    if (touched) fs.writeFileSync(bp, JSON.stringify(doc, null, 2) + "\n");
  }
}

function applyGalaCorrection001040({
  correctionDoc,
  correctionRaw,
  correctionRelPath,
  proofPath,
  expectedSourceHead,
  expectedClassification,
}) {
  if (correctionDoc.classification !== expectedClassification) {
    throw new Error(`Unexpected classification: ${correctionDoc.classification}`);
  }
  const changes = correctionDoc.changes || [];
  if (changes.length !== 10) {
    throw new Error(`Expected 10 correction cards, got ${changes.length}`);
  }

  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  if (expectedSourceHead && head !== expectedSourceHead) {
    console.warn(`warning: HEAD ${head} !== task base ${expectedSourceHead}`);
  }

  if (!fs.existsSync(COPY_PASTE_4)) {
    throw new Error("Missing COPY-PASTE-4 artifact");
  }

  const copyPaste = JSON.parse(fs.readFileSync(COPY_PASTE_4, "utf8"));
  const changeByKey = patchFullCardsByKey(copyPaste, changes);
  copyPaste.gala_correction_1 = {
    applied_at: new Date().toISOString(),
    source_head: expectedSourceHead,
    correction_sha256: sha256(correctionRaw),
    corrected_keys: [...changeByKey.keys()].sort(),
  };
  fs.writeFileSync(COPY_PASTE_4, JSON.stringify(copyPaste, null, 2) + "\n");

  syncOptionalOwnerBundles(changeByKey);

  const viewPayload = loadOwnerReviewViewPayload();
  for (const c of viewPayload.cards) {
    const key = cardKey(c.target_language, c.canonical_card_object_id);
    const ch = changeByKey.get(key);
    if (!ch) continue;
    c.full_card_owner_new = JSON.parse(JSON.stringify(ch.full_card_owner_new));
  }
  viewPayload.linguistic_changes_made = 0;
  viewPayload.gala_correction_1_applied = true;
  const viewWrite = writeJsonWithParts("A1-LRB-CONSOLIDATION-OWNER-REVIEW-VIEW", viewPayload, "cards");

  const scopeCards = copyPaste.cards.slice(0, 40);
  const appliedByKey = new Map();
  for (const c of scopeCards) {
    appliedByKey.set(cardKey(c.target_language, c.canonical_card_object_id), c.full_card_owner_new);
  }

  const gates = runGalaCorrection001040Gates({
    scopeCards,
    appliedByKey,
    correctionChanges: changes,
    correctionByKey: changeByKey,
  });

  const proof = {
    schema_version: 1,
    classification: "COPY-PASTE_CORRECTION_1_COMPLETE_AWAITING_GALA_VERDICT",
    generated_at: new Date().toISOString(),
    source_head: expectedSourceHead,
    correction_path: correctionRelPath,
    correction_sha256: sha256(correctionRaw),
    git_head: head,
    consolidated_mapping_modified: false,
    production_modified: false,
    linguistic_changes_made: 0,
    scope: correctionDoc.scope,
    corrected_keys: [...changeByKey.keys()].sort(),
    gates,
    copy_paste_4_path:
      "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json",
    view_artifact: viewWrite,
  };
  fs.writeFileSync(proofPath, JSON.stringify(proof, null, 2) + "\n");
  return proof;
}

function syncOwnerBundles(changeByKey, bundlePaths) {
  for (const bp of bundlePaths) {
    if (!fs.existsSync(bp)) continue;
    const doc = JSON.parse(fs.readFileSync(bp, "utf8"));
    let touched = false;
    for (const c of doc.cards || []) {
      const key = cardKey(c.target_language, c.canonical_card_object_id);
      const ch = changeByKey.get(key);
      if (!ch) continue;
      c.full_card_owner_new = JSON.parse(JSON.stringify(ch.full_card_owner_new));
      touched = true;
    }
    if (touched) fs.writeFileSync(bp, JSON.stringify(doc, null, 2) + "\n");
  }
}

function applyGalaCorrectionSlice({
  correctionDoc,
  correctionRaw,
  correctionRelPath,
  proofPath,
  expectedSourceHead,
  expectedClassification,
  expectedChangeCount,
  expectedCorrectionSha256,
  sliceStart,
  sliceEnd,
  proofClassification,
  syncBundlePaths,
  runGates,
  copyPasteMetaKey,
}) {
  if (correctionDoc.classification !== expectedClassification) {
    throw new Error(`Unexpected classification: ${correctionDoc.classification}`);
  }
  const changes = correctionDoc.changes || [];
  if (changes.length !== expectedChangeCount) {
    throw new Error(`Expected ${expectedChangeCount} correction cards, got ${changes.length}`);
  }
  if (expectedCorrectionSha256) {
    const got = sha256(correctionRaw);
    if (got !== expectedCorrectionSha256) {
      throw new Error(`Correction SHA mismatch: ${got} expected ${expectedCorrectionSha256}`);
    }
  }

  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  if (expectedSourceHead && head !== expectedSourceHead) {
    console.warn(`warning: HEAD ${head} !== task base ${expectedSourceHead}`);
  }

  if (!fs.existsSync(COPY_PASTE_4)) {
    throw new Error("Missing COPY-PASTE-4 artifact");
  }

  const copyPaste = JSON.parse(fs.readFileSync(COPY_PASTE_4, "utf8"));
  const changeByKey = patchFullCardsByKey(copyPaste, changes);
  copyPaste[copyPasteMetaKey || "gala_correction"] = {
    applied_at: new Date().toISOString(),
    source_head: expectedSourceHead,
    correction_sha256: sha256(correctionRaw),
    corrected_keys: [...changeByKey.keys()].sort(),
    slice: [sliceStart, sliceEnd],
  };
  fs.writeFileSync(COPY_PASTE_4, JSON.stringify(copyPaste, null, 2) + "\n");

  syncOwnerBundles(changeByKey, syncBundlePaths || []);

  const viewPayload = loadOwnerReviewViewPayload();
  for (const c of viewPayload.cards) {
    const key = cardKey(c.target_language, c.canonical_card_object_id);
    const ch = changeByKey.get(key);
    if (!ch) continue;
    c.full_card_owner_new = JSON.parse(JSON.stringify(ch.full_card_owner_new));
  }
  viewPayload.linguistic_changes_made = 0;
  viewPayload[copyPasteMetaKey || "gala_correction_applied"] = true;
  const viewWrite = writeJsonWithParts("A1-LRB-CONSOLIDATION-OWNER-REVIEW-VIEW", viewPayload, "cards");

  const scopeCards = copyPaste.cards.slice(sliceStart, sliceEnd);
  const appliedByKey = new Map();
  for (const c of scopeCards) {
    appliedByKey.set(cardKey(c.target_language, c.canonical_card_object_id), c.full_card_owner_new);
  }

  const gates = runGates({
    scopeCards,
    appliedByKey,
    correctionChanges: changes,
    correctionByKey: changeByKey,
  });

  const proof = {
    schema_version: 1,
    classification: proofClassification,
    generated_at: new Date().toISOString(),
    source_head: expectedSourceHead,
    correction_path: correctionRelPath,
    correction_sha256: sha256(correctionRaw),
    git_head: head,
    consolidated_mapping_modified: false,
    production_modified: false,
    linguistic_changes_made: 0,
    scope: correctionDoc.scope,
    corrected_keys: [...changeByKey.keys()].sort(),
    slice: { start_index: sliceStart, end_index: sliceEnd },
    gates,
    copy_paste_4_path:
      "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json",
    view_artifact: viewWrite,
  };
  fs.writeFileSync(proofPath, JSON.stringify(proof, null, 2) + "\n");
  return proof;
}

module.exports = {
  applyGalaCorrection001040,
  applyGalaCorrectionSlice,
  patchFullCardsByKey,
};
