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
const { runOwnerCopyPasteExtendedGates } = require("./lib/g2-a1-lrb-consolidation-owner-copy-paste-extended-gates");

const PASS_CLASSIFICATION = "A1_LRB_CONSOLIDATION_CARDS_221_234_GALA_PASS";
const PASS_PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-221-234-GALA-PASS-PROOF.json"
);
const OWNER_BUNDLE = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-221-234.json"
);
const COPY_PASTE_4 = path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json");
const SLICE_START = 220;
const SLICE_END = 234;

function main() {
  const blockers = [];
  if (!fs.existsSync(PASS_PROOF_PATH)) blockers.push("missing_pass_proof");

  execSync("node scripts/verify-a1-lrb-consolidation-owner-copy-paste-4-cards-221-234.js", {
    cwd: ROOT,
    stdio: "pipe",
  });

  const proof = fs.existsSync(PASS_PROOF_PATH)
    ? JSON.parse(fs.readFileSync(PASS_PROOF_PATH, "utf8"))
    : null;
  if (proof?.classification !== PASS_CLASSIFICATION) {
    blockers.push(`classification:${proof?.classification || "missing"}`);
  }

  const copyPaste = JSON.parse(fs.readFileSync(COPY_PASTE_4, "utf8"));
  if (copyPaste.cards_221_234_gala_pass?.classification !== PASS_CLASSIFICATION) {
    blockers.push("copy_paste_gala_pass_marker_missing");
  }

  const scopeCards = copyPaste.cards.slice(SLICE_START, SLICE_END);
  const cardsPayload = scopeCards.map((c) => ({
    target_language: c.target_language,
    canonical_card_object_id: c.canonical_card_object_id,
    full_card_owner_new: c.full_card_owner_new,
  }));
  const liveSha = sha256(JSON.stringify(cardsPayload));
  if (proof && proof.cards_221_234_payload_sha256 !== liveSha) {
    blockers.push("cards_221_234_payload_sha_mismatch");
  }

  const ownerBundle = JSON.parse(fs.readFileSync(OWNER_BUNDLE, "utf8"));
  const sourceByKey = new Map();
  for (const c of ownerBundle.cards || []) {
    sourceByKey.set(cardKey(c.target_language, c.canonical_card_object_id), c);
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
    if (view.cards.length !== 234) blockers.push(`view_row_count:${view.cards.length}`);
    for (const c of view.cards.slice(SLICE_START, SLICE_END)) {
      const key = cardKey(c.target_language, c.canonical_card_object_id);
      if (c.full_card_owner_new != null) appliedByKey.set(key, c.full_card_owner_new);
    }
  }

  const gates = runOwnerCopyPasteExtendedGates({ scopeCards, sourceByKey, appliedByKey });
  if (!gates.pass) blockers.push("mechanical_gates_fail");

  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const out = {
    ok: blockers.length === 0,
    blockers,
    git_head: head,
    pass_proof_sha256: proof ? sha256(fs.readFileSync(PASS_PROOF_PATH)) : null,
    cards_221_234_payload_sha256: liveSha,
    classification: PASS_CLASSIFICATION,
    gala_verdict: proof?.gala_verdict || null,
    mechanical_gates: gates,
  };
  console.log(JSON.stringify(out, null, 2));
  if (!out.ok) process.exit(1);
}

if (require.main === module) main();
