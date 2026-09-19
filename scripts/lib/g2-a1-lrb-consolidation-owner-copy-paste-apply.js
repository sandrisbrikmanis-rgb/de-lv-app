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
} = require("./g2-a1-lrb-consolidation-owner-review-artifacts");
const { runOwnerCopyPasteGates } = require("./g2-a1-lrb-consolidation-owner-copy-paste-gates");

const COPY_PASTE_4 = path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json");

function applyOwnerCopyPasteBatch({
  ownerBundle,
  ownerRaw,
  ownerBundleRelPath,
  sliceStart,
  sliceEnd,
  expectedClassification,
  proofPath,
  sourceReviewPackRef,
  scopeMeta,
  proofClassification,
  expectedOwnerSha256,
  expectedSourceHead,
}) {
  if (expectedOwnerSha256) {
    const got = sha256(ownerRaw);
    if (got !== expectedOwnerSha256) {
      throw new Error(`Owner bundle SHA mismatch: ${got} expected ${expectedOwnerSha256}`);
    }
  }
  if (expectedSourceHead) {
    const headNow = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
    if (headNow !== expectedSourceHead) {
      console.warn(`warning: HEAD ${headNow} !== expected source ${expectedSourceHead}`);
    }
  }
  if (ownerBundle.classification !== expectedClassification) {
    throw new Error(`Unexpected classification: ${ownerBundle.classification}`);
  }
  if ((ownerBundle.cards || []).length !== sliceEnd - sliceStart) {
    throw new Error(
      `Expected ${sliceEnd - sliceStart} cards, got ${(ownerBundle.cards || []).length}`
    );
  }
  if (!fs.existsSync(COPY_PASTE_4)) {
    throw new Error("Missing COPY-PASTE-4 artifact");
  }

  const copyPaste = JSON.parse(fs.readFileSync(COPY_PASTE_4, "utf8"));
  const scopeCards = copyPaste.cards.slice(sliceStart, sliceEnd);
  const sourceByKey = new Map();
  for (const c of ownerBundle.cards) {
    sourceByKey.set(cardKey(c.target_language, c.canonical_card_object_id), c);
  }

  for (let i = 0; i < scopeCards.length; i += 1) {
    const c = scopeCards[i];
    const key = cardKey(c.target_language, c.canonical_card_object_id);
    const expectedKey = cardKey(
      copyPaste.cards[sliceStart + i].target_language,
      copyPaste.cards[sliceStart + i].canonical_card_object_id
    );
    if (key !== expectedKey) {
      throw new Error(`Order mismatch at ${sliceStart + i}: ${key} vs ${expectedKey}`);
    }
    const srcCard = sourceByKey.get(key);
    if (!srcCard?.full_card_owner_new) {
      throw new Error(`Missing owner full_card for ${key}`);
    }
    c.full_card_owner_new = JSON.parse(JSON.stringify(srcCard.full_card_owner_new));
  }

  copyPaste.owner_copy_paste_batches = copyPaste.owner_copy_paste_batches || [];
  copyPaste.owner_copy_paste_batches.push({
    applied_at: new Date().toISOString(),
    slice: [sliceStart, sliceEnd],
    source_sha256: sha256(ownerRaw),
    classification: expectedClassification,
  });
  fs.writeFileSync(COPY_PASTE_4, JSON.stringify(copyPaste, null, 2) + "\n");

  const viewPayload = loadOwnerReviewViewPayload();
  const appliedByKey = new Map();
  for (const c of viewPayload.cards) {
    const key = cardKey(c.target_language, c.canonical_card_object_id);
    const srcCard = sourceByKey.get(key);
    if (!srcCard) continue;
    c.full_card_owner_new = JSON.parse(JSON.stringify(srcCard.full_card_owner_new));
    appliedByKey.set(key, c.full_card_owner_new);
  }

  viewPayload.linguistic_changes_made = 0;
  viewPayload.owner_copy_paste_applied = true;
  viewPayload.read_only = false;
  const viewWrite = writeJsonWithParts("A1-LRB-CONSOLIDATION-OWNER-REVIEW-VIEW", viewPayload, "cards");

  const gates = runOwnerCopyPasteGates({ scopeCards, sourceByKey, appliedByKey });
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();

  const proof = {
    schema_version: 1,
    classification: proofClassification || "AWAITING_GALA_VERDICT",
    generated_at: new Date().toISOString(),
    source_review_pack_ref: sourceReviewPackRef,
    owner_bundle_path: ownerBundleRelPath,
    owner_bundle_sha256: sha256(ownerRaw),
    git_head: head,
    consolidated_mapping_modified: false,
    production_modified: false,
    linguistic_changes_made: 0,
    scope: scopeMeta || ownerBundle.scope,
    slice: { start_index: sliceStart, end_index: sliceEnd },
    gates,
    copy_paste_4_path:
      "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json",
    view_artifact: viewWrite,
  };
  fs.writeFileSync(proofPath, JSON.stringify(proof, null, 2) + "\n");
  return proof;
}

module.exports = { applyOwnerCopyPasteBatch, COPY_PASTE_4, OUT_DIR };
