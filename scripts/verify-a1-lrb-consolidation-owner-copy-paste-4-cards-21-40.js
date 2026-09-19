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
const { runOwnerCopyPasteGates } = require("./lib/g2-a1-lrb-consolidation-owner-copy-paste-gates");

const SLICE_START = 20;
const SLICE_END = 40;
const PROOF_PATH = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-OWNER-CARDS-21-40-COPY-PASTE-PROOF.json"
);
const OWNER_BUNDLE = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-CARDS-021-040.json"
);
const COPY_PASTE_4 = path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json");

function main() {
  const blockers = [];
  if (!fs.existsSync(PROOF_PATH)) blockers.push("missing_proof");
  if (!fs.existsSync(OWNER_BUNDLE)) blockers.push("missing_owner_bundle");
  if (!fs.existsSync(COPY_PASTE_4)) blockers.push("missing_copy_paste_4");

  const proof = blockers.length ? null : JSON.parse(fs.readFileSync(PROOF_PATH, "utf8"));
  if (proof && proof.classification !== "AWAITING_GALA_VERDICT") {
    blockers.push(`classification:${proof.classification}`);
  }

  const ownerBundle = fs.existsSync(OWNER_BUNDLE)
    ? JSON.parse(fs.readFileSync(OWNER_BUNDLE, "utf8"))
    : { cards: [] };
  const copyPaste = fs.existsSync(COPY_PASTE_4)
    ? JSON.parse(fs.readFileSync(COPY_PASTE_4, "utf8"))
    : { cards: [] };

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
    const viewPayload = loadOwnerReviewViewPayload();
    for (const c of viewPayload.cards.slice(SLICE_START, SLICE_END)) {
      const key = cardKey(c.target_language, c.canonical_card_object_id);
      if (c.full_card_owner_new) appliedByKey.set(key, c.full_card_owner_new);
    }
  }

  const gates = runOwnerCopyPasteGates({ scopeCards, sourceByKey, appliedByKey });
  if (!gates.pass) blockers.push("gates_fail");

  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const out = {
    ok: blockers.length === 0 && gates.pass,
    blockers,
    git_head: head,
    proof_sha256: proof ? sha256(fs.readFileSync(PROOF_PATH)) : null,
    gates,
    classification: "AWAITING_GALA_VERDICT",
  };
  console.log(JSON.stringify(out, null, 2));
  if (!out.ok) process.exit(1);
}

if (require.main === module) main();
