#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const {
  OUT_DIR,
  sha256,
  cardKey,
  loadOwnerReviewViewPayload,
} = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");
const { runGalaCorrection121140Gates } = require("./lib/g2-a1-lrb-consolidation-gala-correction-121-140-gates");

const PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-121-140-GALA-CORRECTION-1-PROOF.json"
);
const CORRECTION_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-121-140-GALA-CORRECTION-1.json"
);
const COPY_PASTE_4 = path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json");
const PROOF_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_CARDS_121_140_GALA_CORRECTION_1_COMPLETE_AWAITING_GALA_VERDICT";
const EXPECTED_CORRECTION_SHA =
  "cac420cb1a6f198224e5b761de47a8fa495a39e776e927db68a4cbf752c6bca3";

function main() {
  const blockers = [];
  if (!fs.existsSync(PROOF_PATH)) blockers.push("missing_proof");
  if (!fs.existsSync(CORRECTION_PATH)) blockers.push("missing_correction_json");
  if (!fs.existsSync(COPY_PASTE_4)) blockers.push("missing_copy_paste_4");

  const correctionRaw = fs.readFileSync(CORRECTION_PATH);
  if (sha256(correctionRaw) !== EXPECTED_CORRECTION_SHA) {
    blockers.push("correction_sha_mismatch");
  }

  const proof = blockers.length ? null : JSON.parse(fs.readFileSync(PROOF_PATH, "utf8"));
  if (proof?.classification !== PROOF_CLASSIFICATION) {
    blockers.push(`classification:${proof?.classification || "missing"}`);
  }

  const correctionDoc = JSON.parse(correctionRaw.toString("utf8"));
  const copyPaste = JSON.parse(fs.readFileSync(COPY_PASTE_4, "utf8"));
  const scopeCards = copyPaste.cards.slice(120, 140);

  const correctionByKey = new Map();
  for (const ch of correctionDoc.changes || []) {
    correctionByKey.set(cardKey(ch.target_language, ch.canonical_card_object_id), ch);
  }

  const appliedByKey = new Map();
  for (const c of scopeCards) {
    appliedByKey.set(
      cardKey(c.target_language, c.canonical_card_object_id),
      c.full_card_owner_new
    );
  }

  if (fs.existsSync(path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-OWNER-REVIEW-VIEW.part-001.json"))) {
    const view = loadOwnerReviewViewPayload();
    for (const c of view.cards.slice(120, 140)) {
      const key = cardKey(c.target_language, c.canonical_card_object_id);
      if (c.full_card_owner_new != null) appliedByKey.set(key, c.full_card_owner_new);
    }
  }

  const gates = runGalaCorrection121140Gates({
    scopeCards,
    appliedByKey,
    correctionChanges: correctionDoc.changes || [],
    correctionByKey,
  });
  if (!gates.pass) blockers.push("gates_fail");

  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const out = {
    ok: blockers.length === 0 && gates.pass,
    blockers,
    git_head: head,
    correction_sha256: sha256(correctionRaw),
    proof_sha256: proof ? sha256(fs.readFileSync(PROOF_PATH)) : null,
    gates,
    classification: PROOF_CLASSIFICATION,
  };
  console.log(JSON.stringify(out, null, 2));
  if (!out.ok) process.exit(1);
}

if (require.main === module) main();
