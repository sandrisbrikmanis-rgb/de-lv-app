#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");

const CORRECTION_PATH = path.join(
  ROOT,
  "scripts/data/g2-a1-owner-pending/LRB-065-decisions-COPY-PASTE-2.json"
);
const MAPPING_PATH = path.join(
  ROOT,
  "scripts/data/g2-a1-owner-pending/LRB-065-decisions-COPY-PASTE.json"
);
const EXPECTED_CORRECTION_SHA =
  "007dc76f22abf38eb18d70bb501cd915fe5d395649fd6675acae9489685ebf60";

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function parsePointer(pointer) {
  if (!pointer.startsWith("/")) throw new Error(`Invalid pointer: ${pointer}`);
  return pointer.slice(1).split("/");
}

function getAtPointer(obj, segments) {
  let cur = obj;
  for (const seg of segments) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = cur[seg];
  }
  return cur;
}

function setAtPointer(obj, segments, value) {
  let cur = obj;
  for (let i = 0; i < segments.length - 1; i += 1) {
    const seg = segments[i];
    if (cur[seg] == null || typeof cur[seg] !== "object") {
      throw new Error(`Missing path segment ${seg}`);
    }
    cur = cur[seg];
  }
  cur[segments[segments.length - 1]] = value;
}

function main() {
  const corrRaw = fs.readFileSync(CORRECTION_PATH, "utf8");
  const corrSha = crypto.createHash("sha256").update(corrRaw).digest("hex");
  if (corrSha !== EXPECTED_CORRECTION_SHA) {
    throw new Error(`Correction SHA mismatch: ${corrSha}`);
  }
  const correction = JSON.parse(corrRaw);
  const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, "utf8"));

  for (const change of correction.changes) {
    const segments = parsePointer(change.json_pointer);
    const got = getAtPointer(mapping, segments);
    if (!deepEqual(got, change.current_value)) {
      throw new Error(
        `current_value mismatch at ${change.json_pointer} for ${change.card_object_id}: got ${JSON.stringify(got)}`
      );
    }
    setAtPointer(mapping, segments, change.replacement_value);
  }

  mapping.nelabot_owner_notes = correction.nelabot_owner_note_replacements.values;
  mapping.correction_round = 2;
  mapping.correction_2_sha256 = corrSha;

  const out = `${JSON.stringify(mapping, null, 2)}\n`;
  fs.writeFileSync(MAPPING_PATH, out);
  const newSha = crypto.createHash("sha256").update(out).digest("hex");
  console.log(JSON.stringify({ mapping_sha256: newSha, correction_sha256: corrSha }, null, 2));
}

if (require.main === module) main();
