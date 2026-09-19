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
  writeJsonWithParts,
  deepEqual,
} = require("./lib/g2-a1-lrb-consolidation-owner-review-artifacts");
const { runOwnerCopyPasteGates } = require("./lib/g2-a1-lrb-consolidation-owner-copy-paste-gates");

const DEFAULT_OWNER_BUNDLE = path.join(
  OUT_DIR,
  "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-FIRST-20.json"
);
const COPY_PASTE_4 = path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json");
const PROOF_PATH = path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-OWNER-FIRST-20-COPY-PASTE-PROOF.json");
const SOURCE_REVIEW_PACK_HEAD = "56aa8ebd";

function main() {
  const srcArg = process.argv[2];
  const src = srcArg ? path.resolve(srcArg) : DEFAULT_OWNER_BUNDLE;
  if (!fs.existsSync(src)) {
    console.error("Owner FIRST-20 bundle not found:", src);
    process.exit(1);
  }
  const ownerRaw = fs.readFileSync(src);
  const ownerBundle = JSON.parse(ownerRaw.toString("utf8"));
  if (ownerBundle.classification !== "A1_LRB_CONSOLIDATION_OWNER_FIRST_20_FULL_CARD_COPY_PASTE_READY") {
    console.error("Unexpected owner bundle classification:", ownerBundle.classification);
    process.exit(1);
  }
  if ((ownerBundle.cards || []).length !== 20) {
    console.error("Expected 20 cards in owner bundle, got", (ownerBundle.cards || []).length);
    process.exit(1);
  }

  if (!fs.existsSync(COPY_PASTE_4)) {
    console.error("Missing COPY-PASTE-4 artifact");
    process.exit(1);
  }

  const copyPaste = JSON.parse(fs.readFileSync(COPY_PASTE_4, "utf8"));
  const scopeCards = copyPaste.cards.slice(0, 20);
  const sourceByKey = new Map();
  for (const c of ownerBundle.cards) {
    sourceByKey.set(cardKey(c.target_language, c.canonical_card_object_id), c);
  }
  for (const c of scopeCards) {
    const key = cardKey(c.target_language, c.canonical_card_object_id);
    const srcCard = sourceByKey.get(key);
    if (!srcCard?.full_card_owner_new) {
      console.error("Missing owner full_card for", key);
      process.exit(1);
    }
    c.full_card_owner_new = JSON.parse(JSON.stringify(srcCard.full_card_owner_new));
  }

  copyPaste.owner_first_20_applied_at = new Date().toISOString();
  copyPaste.owner_first_20_source_sha256 = sha256(ownerRaw);
  copyPaste.owner_first_20_classification =
    "A1_LRB_CONSOLIDATION_OWNER_FIRST_20_COPY_PASTE_APPLIED";
  fs.writeFileSync(COPY_PASTE_4, JSON.stringify(copyPaste, null, 2) + "\n");

  fs.mkdirSync(OUT_DIR, { recursive: true });
  if (src !== DEFAULT_OWNER_BUNDLE) {
    fs.writeFileSync(DEFAULT_OWNER_BUNDLE, ownerRaw);
  }

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
  viewPayload.owner_first_20_copy_paste = true;
  viewPayload.read_only = false;
  const viewWrite = writeJsonWithParts("A1-LRB-CONSOLIDATION-OWNER-REVIEW-VIEW", viewPayload, "cards");

  const gates = runOwnerCopyPasteGates({ scopeCards, sourceByKey, appliedByKey });
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const proof = {
    schema_version: 1,
    classification: "AWAITING_GALA_VERDICT",
    generated_at: new Date().toISOString(),
    source_review_pack_head: SOURCE_REVIEW_PACK_HEAD,
    owner_bundle_path:
      "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4-FIRST-20.json",
    owner_bundle_sha256: sha256(ownerRaw),
    git_head: head,
    consolidated_mapping_modified: false,
    production_modified: false,
    linguistic_changes_made: 0,
    scope: ownerBundle.scope,
    gates,
    copy_paste_4_path:
      "reports/g2-a1-owner/consolidation/owner-review/A1-LRB-CONSOLIDATION-decisions-COPY-PASTE-4.json",
    view_artifact: viewWrite,
  };
  fs.writeFileSync(PROOF_PATH, JSON.stringify(proof, null, 2) + "\n");

  const taskLines = [
    "A1 LRB-001…103 — pirmo 20 pilno kartīšu OWNER COPY/PASTE (piemērots)",
    "",
    `Klasifikācija: AWAITING_GALA_VERDICT`,
    `Avota review-pack HEAD: ${SOURCE_REVIEW_PACK_HEAD}`,
    `OWNER bundle SHA-256: ${proof.owner_bundle_sha256}`,
    `Git HEAD: ${head}`,
    "",
    "Vārti:",
    `- applied_exactly: ${gates.applied_exactly}`,
    `- pending: ${gates.pending}`,
    `- empty target fields: ${gates.empty_target_fields}`,
    `- DE alignment: ${gates.de_alignment}`,
    `- wrong-language residue: ${gates.wrong_language_residue}`,
    `- duplicate/degenerate pairs: ${gates.duplicate_degenerate_pairs}`,
    `- schema/sectionAccents failures: ${gates.schema_sectionAccents_failures}`,
    "",
    "Nav Gala PASS; nav merge/apply/production.",
  ];
  fs.writeFileSync(
    path.join(OUT_DIR, "A1-LRB-CONSOLIDATION-VEICAMO-LABOJUMU-UZDEVUMS-4-FIRST-20-APPLIED.txt"),
    taskLines.join("\n") + "\n"
  );

  console.log(JSON.stringify(proof, null, 2));
  if (!gates.pass) process.exit(1);
}

if (require.main === module) main();
