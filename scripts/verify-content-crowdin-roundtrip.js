#!/usr/bin/env node
"use strict";

/**
 * Verify G2 flashcard Crowdin flatten → parse → apply round-trip (in-memory only).
 *
 * Usage:
 *   node scripts/verify-content-crowdin-roundtrip.js
 *   node scripts/verify-content-crowdin-roundtrip.js --level a1 --lang et,da,cs
 */

const {
  CONTENT_LANGUAGES,
  G2_LEVELS,
  slugify,
  resolveCardSlug,
  verifyRoundTrip,
} = require("./lib/content-crowdin-bridge");

function parseArgs(argv) {
  let level = "a1";
  let langs = ["lv", "et", "da", "cs"];

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--level" && argv[i + 1]) level = argv[++i];
    else if (arg === "--lang" && argv[i + 1]) {
      langs = argv[++i].split(",").map((s) => s.trim()).filter(Boolean);
    } else if (arg === "--help" || arg === "-h") {
      console.log(`Usage: node scripts/verify-content-crowdin-roundtrip.js [--level a1] [--lang lv,et,da,cs]`);
      process.exit(0);
    } else {
      console.error(`Unknown argument: ${arg}`);
      process.exit(1);
    }
  }

  return { level, langs };
}

function testSlugHelpers() {
  const cases = [
    ["sprechen", "sprechen"],
    ["Apfel", "apfel"],
    ["die Äpfel", "die-aepfel"],
    ["a1-sprechen-study", "a1-sprechen-study"],
  ];
  for (const [input, expected] of cases) {
    const got = slugify(input);
    if (got !== expected) {
      throw new Error(`slugify(${JSON.stringify(input)}) expected ${expected}, got ${got}`);
    }
  }

  const card = { de: "sprechen", study: { id: "a1-sprechen-study" } };
  if (resolveCardSlug(card) !== "a1-sprechen-study") {
    throw new Error("resolveCardSlug should prefer study.id");
  }
}

function main() {
  testSlugHelpers();
  console.log("OK slug helpers");

  const { level, langs } = parseArgs(process.argv);

  if (!G2_LEVELS.includes(level)) {
    console.error(`Invalid level: ${level}`);
    process.exit(1);
  }

  const failures = [];
  let passed = 0;

  for (const lang of langs) {
    if (!CONTENT_LANGUAGES.includes(lang)) {
      failures.push(`${lang}: unknown language`);
      continue;
    }

    const result = verifyRoundTrip({ group: "g2", lang, level });
    if (!result.pass) {
      failures.push(`${lang}: ${result.reason}`);
      continue;
    }

    passed++;
    console.log(`OK ${lang}/${level}: ${result.keyCount} keys, semantic round-trip identical`);
  }

  console.log("");
  if (failures.length) {
    console.error(`Content Crowdin round-trip FAILED (${passed}/${langs.length} passed):`);
    for (const msg of failures) console.error(`  - ${msg}`);
    process.exit(1);
  }

  console.log(`Content Crowdin round-trip passed: ${passed}/${langs.length} locales for ${level}.`);
}

main();
