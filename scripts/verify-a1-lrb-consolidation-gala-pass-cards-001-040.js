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
} = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");
const { runGalaCorrection001040Gates } = require("./lib/g2-a1-lrb-consolidation-gala-correction-gates");

const PASS_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_CARDS_001_040_FULL_CARD_LINGUISTIC_REVIEW_PASS";
const PASS_PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-001-040-GALA-PASS-PROOF.json"
);
const CORRECTION_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-001-040-GALA-CORRECTION-1.json"
);
const COPY_PASTE_4 = path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json");

function main() {
  const blockers = [];
  if (!fs.existsSync(PASS_PROOF_PATH)) blockers.push("missing_pass_proof");

  execSync("node scripts/verify-a1-lrb-consolidation-gala-correction-1-cards-001-040.js", {
    cwd: ROOT,
    stdio: "pipe",
  });

  const proof = blockers.length ? null : JSON.parse(fs.readFileSync(PASS_PROOF_PATH, "utf8"));
  if (proof?.classification !== PASS_CLASSIFICATION) {
    blockers.push(`classification:${proof?.classification || "missing"}`);
  }

  const copyPaste = JSON.parse(fs.readFileSync(COPY_PASTE_4, "utf8"));
  if (copyPaste.cards_001_040_gala_pass?.classification !== PASS_CLASSIFICATION) {
    blockers.push("copy_paste_gala_pass_marker_missing");
  }

  const scopeCards = copyPaste.cards.slice(0, 40);
  const cardsPayload = scopeCards.map((c) => ({
    target_language: c.target_language,
    canonical_card_object_id: c.canonical_card_object_id,
    full_card_owner_new: c.full_card_owner_new,
  }));
  const liveSha = sha256(JSON.stringify(cardsPayload));
  if (proof && proof.cards_001_040_payload_sha256 !== liveSha) {
    blockers.push("cards_001_040_payload_sha_mismatch");
  }

  const correctionDoc = JSON.parse(fs.readFileSync(CORRECTION_PATH, "utf8"));
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
  const gates = runGalaCorrection001040Gates({
    scopeCards,
    appliedByKey,
    correctionChanges: correctionDoc.changes || [],
    correctionByKey,
  });
  if (!gates.pass) blockers.push("mechanical_gates_fail");

  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const out = {
    ok: blockers.length === 0,
    blockers,
    git_head: head,
    pass_proof_sha256: proof ? sha256(fs.readFileSync(PASS_PROOF_PATH)) : null,
    classification: PASS_CLASSIFICATION,
    gala_verdict: proof?.gala_verdict || null,
    mechanical_gates: gates,
  };
  console.log(JSON.stringify(out, null, 2));
  if (!out.ok) process.exit(1);
}

if (require.main === module) main();
