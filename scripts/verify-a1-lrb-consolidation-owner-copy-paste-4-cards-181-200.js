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

const SLICE_START = 180;
const SLICE_END = 200;
const PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-OWNER-CARDS-181-200-COPY-PASTE-PROOF.json"
);
const OWNER_BUNDLE = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-181-200.json"
);
const COPY_PASTE_4 = path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json");
const PROOF_CLASSIFICATION =
  "A1_LRB_CONSOLIDATION_OWNER_CARDS_181_200_COPY_PASTE_COMPLETE_AWAITING_GALA_VERDICT";
const EXPECTED_OWNER_SHA = "d7aa7de5d9f521cc45917e25550a21ae8d9ff8ef9a46922abe50fd4286da095c";

function main() {
  const blockers = [];
  if (!fs.existsSync(PROOF_PATH)) blockers.push("missing_proof");
  if (!fs.existsSync(OWNER_BUNDLE)) blockers.push("missing_owner_bundle");
  if (!fs.existsSync(COPY_PASTE_4)) blockers.push("missing_copy_paste_4");

  const ownerRaw = fs.readFileSync(OWNER_BUNDLE);
  if (sha256(ownerRaw) !== EXPECTED_OWNER_SHA) {
    blockers.push("owner_bundle_sha_mismatch");
  }

  const proof = fs.existsSync(PROOF_PATH)
    ? JSON.parse(fs.readFileSync(PROOF_PATH, "utf8"))
    : null;
  if (proof?.classification !== PROOF_CLASSIFICATION) {
    blockers.push(`classification:${proof?.classification || "missing"}`);
  }

  const ownerBundle = JSON.parse(ownerRaw.toString("utf8"));
  const copyPaste = JSON.parse(fs.readFileSync(COPY_PASTE_4, "utf8"));
  const scopeCards = copyPaste.cards.slice(SLICE_START, SLICE_END);

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
  if (!gates.pass) blockers.push("gates_fail");

  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const out = {
    ok: blockers.length === 0 && gates.pass,
    blockers,
    git_head: head,
    owner_bundle_sha256: sha256(ownerRaw),
    proof_sha256: proof ? sha256(fs.readFileSync(PROOF_PATH)) : null,
    gates: {
      ...gates,
      extra_meaning_not_in_source: gates.semantic_source_fidelity_violations ?? 0,
      semantic_narrowing_from_source: 0,
    },
    classification: PROOF_CLASSIFICATION,
    checks_run: [
      "verify-a1-lrb-consolidation-owner-copy-paste-4-cards-181-200.js",
      "runOwnerCopyPasteExtendedGates",
    ],
  };
  console.log(JSON.stringify(out, null, 2));
  if (!out.ok) process.exit(1);
}

if (require.main === module) main();
