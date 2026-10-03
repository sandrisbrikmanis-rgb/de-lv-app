#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");

const targetPath = path.join(__dirname, "lib/lrb020-luna-repair-data.js");
const overridesPath = path.join(__dirname, "data/lrb020-section-accent-overrides.json");
const existing = require(targetPath);
const incoming = require(overridesPath);

function mergeCard(base, patch) {
  const out = { ...(base || {}) };
  for (const [key, value] of Object.entries(patch)) {
    out[key] = value;
  }
  return out;
}

const sectionAccentOverrides = JSON.parse(
  JSON.stringify(existing.SECTION_ACCENT_OVERRIDES || { fr: {}, gr: {} })
);

for (const [lang, cards] of Object.entries(incoming)) {
  if (!sectionAccentOverrides[lang]) sectionAccentOverrides[lang] = {};
  for (const [card, patch] of Object.entries(cards)) {
    sectionAccentOverrides[lang][card] = mergeCard(
      sectionAccentOverrides[lang][card],
      patch
    );
  }
}

const content = `"use strict";

module.exports = {
  SECTION_ACCENT_OVERRIDES: ${JSON.stringify(sectionAccentOverrides, null, 2)},
  LUNA_PATCHES: ${JSON.stringify(existing.LUNA_PATCHES, null, 2)},
};
`;

fs.writeFileSync(targetPath, content);
console.log("Applied section accent overrides to", targetPath);
