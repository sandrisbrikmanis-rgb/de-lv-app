#!/usr/bin/env node
/**
 * Restore the sectionAccents length alignment onto base
 * 401bd0ca7035e57230e2cc831863bc52c546ebb6.
 * Default simulates the restore and checks SHA-256. --apply writes the base bytes.
 */
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.resolve(__dirname, "..");
const BASE_COMMIT = "401bd0ca7035e57230e2cc831863bc52c546ebb6";
const PARTS_DIR = path.join(ROOT, "reports/study-deep-and-accents/restore");

function sha256(text) {
  return crypto.createHash("sha256").update(text).digest("hex");
}

function restoreText(text, placed) {
  let out = text;
  placed.slice().sort((a, b) => b.newStart - a.newStart).forEach((edit) => {
    const got = out.slice(edit.newStart, edit.newEnd);
    if (got !== edit.after) throw new Error("restore slice mismatch");
    out = out.slice(0, edit.newStart) + edit.before + out.slice(edit.newEnd);
  });
  return out;
}

function main() {
  const apply = process.argv.includes("--apply");
  const parts = fs.readdirSync(PARTS_DIR).filter((name) => /^part-\d+\.json$/.test(name)).sort();
  if (!parts.length) throw new Error(`no restore parts in ${PARTS_DIR}`);
  let files = 0;
  let fail = 0;
  parts.forEach((name) => {
    const payload = JSON.parse(fs.readFileSync(path.join(PARTS_DIR, name), "utf8"));
    payload.files.forEach((row) => {
      const dataPath = path.join(ROOT, row.rel);
      const wwwPath = path.join(ROOT, row.www);
      const text = fs.readFileSync(dataPath, "utf8");
      const www = fs.readFileSync(wwwPath, "utf8");
      if (www !== text) {
        console.error(`mirror mismatch ${row.rel}`);
        fail += 1;
        return;
      }
      let restored;
      try {
        restored = restoreText(text, row.placed);
      } catch (error) {
        console.error(`${row.rel}: ${error.message}`);
        fail += 1;
        return;
      }
      const got = sha256(restored);
      if (got !== row.base) {
        console.error(`sha mismatch ${row.rel} ${got} ${row.base}`);
        fail += 1;
        return;
      }
      files += 1;
      if (apply) {
        fs.writeFileSync(dataPath, restored);
        fs.writeFileSync(wwwPath, restored);
      }
    });
  });
  console.log(JSON.stringify({ baseCommit: BASE_COMMIT, mode: apply ? "apply" : "simulate", files, fail }));
  process.exit(fail ? 1 : 0);
}

main();
