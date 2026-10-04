#!/usr/bin/env node
/**
 * Restores study rows removed by remove-extra-study-elements.js.
 * Inserts the stored source text at the original offsets, ascending.
 * Does not write files. Compares SHA-256 with the base files in restore-proof.json.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const DIR = path.join(ROOT, "reports/owner-a1-extra/removed-elements");
const files = fs.readdirSync(DIR).filter((name) => /^part-\d+\.json$/.test(name)).sort();
if (!files.length) throw new Error("no removed-elements parts");
const records = [];
files.forEach((name) => {
  const payload = JSON.parse(fs.readFileSync(path.join(DIR, name), "utf8"));
  records.push(...payload.records);
});
const byFile = new Map();
records.forEach((row) => {
  if (!byFile.has(row.file)) byFile.set(row.file, []);
  byFile.get(row.file).push(row);
});

function restoreText(text, spans) {
  const sorted = [...spans].sort((a, b) => a.start - b.start);
  let out = text;
  sorted.forEach((span) => {
    out = out.slice(0, span.start) + span.source + out.slice(span.start);
  });
  return out;
}

const proofPath = path.join(ROOT, "reports/owner-a1-extra/restore-proof.json");
const proof = JSON.parse(fs.readFileSync(proofPath, "utf8"));
let failed = 0;
proof.files.forEach((row) => {
  const current = fs.readFileSync(path.join(ROOT, row.file), "utf8");
  const spans = byFile.get(row.file) || [];
  const restored = restoreText(current, spans);
  const digest = crypto.createHash("sha256").update(restored).digest("hex");
  if (digest !== row.baseSha256) {
    failed += 1;
    process.stderr.write(`MISMATCH ${row.file} ${digest} != ${row.baseSha256}\n`);
  }
});
process.stdout.write(`${JSON.stringify({ files: proof.files.length, failed })}\n`);
if (failed) process.exit(1);

