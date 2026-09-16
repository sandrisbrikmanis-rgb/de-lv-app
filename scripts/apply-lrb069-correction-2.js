#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");

const CORRECTION_PATH = path.join(
  ROOT,
  "scripts/data/g2-a1-owner-pending/LRB-069-decisions-COPY-PASTE-2.json"
);
const MAPPING_PATH = path.join(
  ROOT,
  "scripts/data/g2-a1-owner-pending/LRB-069-decisions-COPY-PASTE.json"
);
const EXPECTED_CORRECTION_SHA =
  "373669a974a8b05dea4ff55449d62217e05a619d8d8cc062509f223c9d6ccc08";
const EXPECTED_SOURCE_MAPPING_SHA =
  "aae008399b19d12d340ea7a74fed025e4cc5ef9b165a7127919b37c5b346275f";

function main() {
  const corrRaw = fs.readFileSync(CORRECTION_PATH, "utf8");
  const corrSha = crypto.createHash("sha256").update(corrRaw).digest("hex");
  if (corrSha !== EXPECTED_CORRECTION_SHA) {
    throw new Error(`Correction SHA mismatch: ${corrSha}`);
  }
  const correction = JSON.parse(corrRaw);

  const mappingRaw = fs.readFileSync(MAPPING_PATH, "utf8");
  const mappingSha = crypto.createHash("sha256").update(mappingRaw).digest("hex");
  if (mappingSha !== EXPECTED_SOURCE_MAPPING_SHA) {
    throw new Error(`Source mapping SHA mismatch: ${mappingSha}`);
  }
  const mapping = JSON.parse(mappingRaw);

  const changes = correction.changes;
  if (!changes || typeof changes !== "object") {
    throw new Error("Missing changes object in correction file");
  }
  const cardIds = Object.keys(changes);
  if (cardIds.length !== 22) {
    throw new Error(`Expected 22 card patches, got ${cardIds.length}`);
  }

  for (const cardId of cardIds) {
    const composite = mapping.labot_full_composite?.[cardId];
    if (!composite) {
      throw new Error(`No labot_full_composite entry for ${cardId}`);
    }
    const patches = changes[cardId];
    for (const [field, value] of Object.entries(patches)) {
      composite[field] = value;
    }
  }

  mapping.correction_round = 2;
  mapping.correction_2_sha256 = corrSha;
  mapping.base_mapping_sha256 = EXPECTED_SOURCE_MAPPING_SHA;

  const out = `${JSON.stringify(mapping, null, 2)}\n`;
  fs.writeFileSync(MAPPING_PATH, out);
  const newSha = crypto.createHash("sha256").update(out).digest("hex");
  console.log(
    JSON.stringify(
      {
        mapping_sha256: newSha,
        correction_sha256: corrSha,
        cards_patched: cardIds.length,
      },
      null,
      2
    )
  );
}

if (require.main === module) main();
