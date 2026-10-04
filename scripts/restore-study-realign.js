#!/usr/bin/env node
/**
 * Verifies study files still match the #869 SHA-256 baseline.
 * Apply was not executed, so there is nothing to splice back.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const changes = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/study-realign/changes.json"), "utf8"));

if (changes.applied) {
  console.error("APPLIED_RESTORE_NOT_IMPLEMENTED");
  process.exit(1);
}

let mismatch = 0;
changes.baseFileSha256.forEach((row) => {
  const full = path.join(ROOT, row.path);
  const hash = crypto.createHash("sha256").update(fs.readFileSync(full)).digest("hex");
  if (hash !== row.sha256) {
    mismatch += 1;
    console.error(`SHA_MISMATCH ${row.path}`);
  }
});

if (mismatch) process.exit(1);
console.log(JSON.stringify({
  verified: changes.baseFileSha256.length,
  applied: false,
  baseCommit: changes.baseCommit,
  mismatch: 0
}));
