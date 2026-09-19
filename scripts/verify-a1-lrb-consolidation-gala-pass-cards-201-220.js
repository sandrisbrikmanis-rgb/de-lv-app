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
const { runGalaCorrection201220Gates } = require("./lib/g2-a1-lrb-consolidation-gala-correction-201-220-gates");

const PASS_CLASSIFICATION = "A1_LRB_CONSOLIDATION_CARDS_201_220_GALA_PASS";
const PASS_PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-201-220-GALA-PASS-PROOF.json"
);
const CORRECTION_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-CARDS-201-220-GALA-CORRECTION-1.json"
);
const COPY_PASTE_4 = path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json");

function main() {
  const blockers = [];
  if (!fs.existsSync(PASS_PROOF_PATH)) blockers.push("missing_pass_proof");

  execSync("node scripts/verify-a1-lrb-consolidation-gala-correction-1-cards-201-220.js", {
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
  if (copyPaste.cards_201_220_gala_pass?.classification !== PASS_CLASSIFICATION) {
    blockers.push("copy_paste_gala_pass_marker_missing");
  }

  const scopeCards = copyPaste.cards.slice(200, 220);
  const cardsPayload = scopeCards.map((c) => ({
    target_language: c.target_language,
    canonical_card_object_id: c.canonical_card_object_id,
    full_card_owner_new: c.full_card_owner_new,
  }));
  const liveSha = sha256(JSON.stringify(cardsPayload));
  if (proof && proof.cards_201_220_payload_sha256 !== liveSha) {
    blockers.push("cards_201_220_payload_sha_mismatch");
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
  const gates = runGalaCorrection201220Gates({
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
    cards_201_220_payload_sha256: liveSha,
    classification: PASS_CLASSIFICATION,
    gala_verdict: proof?.gala_verdict || null,
    mechanical_gates: gates,
  };
  console.log(JSON.stringify(out, null, 2));
  if (!out.ok) process.exit(1);
}

if (require.main === module) main();
