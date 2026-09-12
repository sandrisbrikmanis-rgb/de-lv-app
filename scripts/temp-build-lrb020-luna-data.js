#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const existingPath = path.join(__dirname, "lib/lrb020-luna-repair-data.js");
const existing = require(existingPath);
const updates = require("./data/lrb020-round2-updates.json");

const FULL_FIELD_PREFIXES = [
  "study.examples",
  "study.comparison",
  "study.explanation",
  "study.tip",
  "study.important",
  "study.info",
];

function mergeCard(base, patch) {
  const out = { ...(base || {}) };
  for (const [key, value] of Object.entries(patch)) {
    out[key] = value;
  }
  for (const prefix of FULL_FIELD_PREFIXES) {
    if (patch[prefix] !== undefined) {
      for (const key of Object.keys(out)) {
        if (key.startsWith(`${prefix}[`) || key.startsWith(`${prefix}.`)) {
          delete out[key];
        }
      }
    }
  }
  return out;
}

function mergeLang(base, langUpdates) {
  const out = { ...base };
  for (const [card, patch] of Object.entries(langUpdates)) {
    out[card] = mergeCard(out[card], patch);
  }
  return out;
}

const mergedFr = mergeLang(existing.LUNA_PATCHES.fr, updates.fr);
const mergedGr = mergeLang(existing.LUNA_PATCHES.gr, updates.gr);

const content = `"use strict";

module.exports = {
  SECTION_ACCENT_OVERRIDES: ${JSON.stringify(existing.SECTION_ACCENT_OVERRIDES, null, 2)},
  LUNA_PATCHES: {
    fr: ${JSON.stringify(mergedFr, null, 2)},
    gr: ${JSON.stringify(mergedGr, null, 2)},
  },
};
`;

fs.writeFileSync(existingPath, content);
console.log("Wrote", existingPath);
