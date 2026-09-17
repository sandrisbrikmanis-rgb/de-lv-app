#!/usr/bin/env node
"use strict";

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");

const EXPECTED_OWNER_SHA = "e99022a7ac75a860f1c901cd77311bb2aa728e82bddad25e1efb2e1aaa7d8839";
const EXPECTED_UNRESOLVED_SHA = "912ef5fe32607c0112bd24e81b87af41a42f1ce2415648ae2e178492991ea369";
const EXPECTED_HEAD = "fc025e4a2399861ebae3522d35e26c1eddebf369";

function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function main() {
  const srcArg = process.argv[2];
  const src =
    srcArg ||
    path.join(ROOT, "reports/g2-a1-owner/consolidation/A1-LRB-OWNER-RESOLUTION-45.json");
  if (!fs.existsSync(src)) {
    console.error("OWNER resolution JSON not found:", src);
    process.exit(1);
  }
  const raw = fs.readFileSync(src);
  const ownerSha = sha256(raw);
  if (ownerSha !== EXPECTED_OWNER_SHA) {
    console.error("OWNER JSON SHA mismatch", ownerSha, "expected", EXPECTED_OWNER_SHA);
    process.exit(1);
  }

  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  if (head !== EXPECTED_HEAD) {
    console.warn("HEAD SHA differs from task anchor:", head, "expected", EXPECTED_HEAD);
  }

  const unresolvedPath = path.join(
    ROOT,
    "reports/g2-a1-owner/consolidation/A1-LRB-UNRESOLVED-OWNER-CONFLICTS.json"
  );
  const unresolvedSha = sha256(fs.readFileSync(unresolvedPath));
  if (unresolvedSha !== EXPECTED_UNRESOLVED_SHA) {
    console.error("Unresolved SHA mismatch", unresolvedSha, "expected", EXPECTED_UNRESOLVED_SHA);
    process.exit(1);
  }

  const dest = path.join(ROOT, "reports/g2-a1-owner/consolidation/A1-LRB-OWNER-RESOLUTION-45.json");
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, raw);

  execSync("node scripts/build-a1-lrb-target-conflict-classification.js", {
    cwd: ROOT,
    stdio: "inherit",
  });
  execSync("node scripts/build-a1-lrb-leaf-classification-reconciliation.js", {
    cwd: ROOT,
    stdio: "inherit",
  });

  const summary = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, "reports/g2-a1-owner/consolidation/A1-LRB-CONFLICT-CLASSIFICATION.json"),
      "utf8"
    )
  );
  const proof = JSON.parse(
    fs.readFileSync(
      path.join(ROOT, "reports/g2-a1-owner/consolidation/A1-LRB-OWNER-45-COPY-PASTE-PROOF.json"),
      "utf8"
    )
  );

  console.log(
    JSON.stringify(
      {
        classification: summary.classification,
        owner_45: summary.owner_45_copy_paste,
        proof_gates: proof.gates,
      },
      null,
      2
    )
  );

  if (
    summary.classification !==
    "A1_LRB_OWNER_45_CONFLICT_RESOLUTION_COPY_PASTE_COMPLETE_AWAITING_VERIFICATION"
  ) {
    process.exit(1);
  }
}

if (require.main === module) main();
