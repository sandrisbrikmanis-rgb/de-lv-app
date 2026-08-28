#!/usr/bin/env node
"use strict";

/**
 * Verify content Crowdin flatten → apply round-trip (in-memory only).
 *
 * Usage:
 *   node scripts/verify-content-crowdin-roundtrip.js --all-langs
 *   node scripts/verify-content-crowdin-roundtrip.js --group g2 --level a1 --lang et
 */

const {
  CONTENT_LANGUAGES,
  TARGET_LANGUAGES,
  G2_LEVELS,
  verifyRoundTrip,
} = require("./lib/content-crowdin-bridge");
const { isAllowedRoundTripSkip } = require("./lib/content-discovery/discovery-scope");

const G1_GROUPS = ["g1-sentences", "g1-verbs", "g1-training"];

function parseArgs(argv) {
  let allLangs = false;
  let langs = ["lv", "et", "da", "cs"];
  let groups = ["g2"];
  let levels = ["a1"];

  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "--all-langs") allLangs = true;
    else if (arg === "--lang" && argv[i + 1]) langs = argv[++i].split(",").map((s) => s.trim());
    else if (arg === "--group" && argv[i + 1]) groups = argv[++i].split(",").map((s) => s.trim());
    else if (arg === "--level" && argv[i + 1]) levels = argv[++i].split(",").map((s) => s.trim());
    else if (arg === "--all-groups") groups = ["g2", ...G1_GROUPS, "g3"];
    else if (arg === "--all-levels") levels = [...G2_LEVELS];
    else if (arg === "--help" || arg === "-h") {
      console.log(`Usage: node scripts/verify-content-crowdin-roundtrip.js [options]

Options:
  --all-langs          All ${CONTENT_LANGUAGES.length} CONTENT_LANGUAGES
  --all-groups         g2 + g1-* + g3
  --all-levels         a1..c2
  --lang CODE[,CODE]   Default: lv,et,da,cs
  --group g2|g1-*|g3   Default: g2
  --level a1|...       Default: a1 (g2 only)
`);
      process.exit(0);
    } else {
      console.error(`Unknown argument: ${arg}`);
      process.exit(1);
    }
  }

  if (allLangs) langs = [...CONTENT_LANGUAGES];
  return { langs, groups, levels };
}

function testSlugHelpers() {
  const { slugify, resolveCardSlug } = require("./lib/content-crowdin-bridge");
  if (slugify("Apfel") !== "apfel") throw new Error("slugify Apfel");
  const card = { de: "sprechen", study: { id: "a1-sprechen-study" } };
  if (resolveCardSlug(card) !== "a1-sprechen-study") throw new Error("resolveCardSlug study.id");
}

function main() {
  testSlugHelpers();
  console.log("OK slug helpers");

  const { langs, groups, levels } = parseArgs(process.argv);
  const failures = [];
  const skipped = [];
  const unexpectedSkips = [];
  let passed = 0;

  for (const group of groups) {
    if (group === "g2") {
      for (const level of levels) {
        if (!G2_LEVELS.includes(level)) {
          failures.push(`invalid level ${level}`);
          continue;
        }
        for (const lang of langs) {
          if (!CONTENT_LANGUAGES.includes(lang)) {
            failures.push(`${lang}: unknown language`);
            continue;
          }
          const result = verifyRoundTrip({ group, lang, level });
          if (result.skipped) {
            skipped.push(`${group}/${level}/${lang}: ${result.reason}`);
            if (!isAllowedRoundTripSkip({ group, lang, skipped: true })) {
              unexpectedSkips.push(`${group}/${level}/${lang}: ${result.reason}`);
            }
            continue;
          }
          if (!result.pass) {
            failures.push(`${group}/${level}/${lang}: ${result.reason}`);
            continue;
          }
          passed++;
          console.log(`OK ${group}/${level}/${lang}: ${result.keyCount} keys`);
        }
      }
    } else {
      for (const lang of langs) {
        const result = verifyRoundTrip({ group, lang });
        if (result.skipped) {
          skipped.push(`${group}/${lang}: ${result.reason}`);
          if (!isAllowedRoundTripSkip({ group, lang, skipped: true })) {
            unexpectedSkips.push(`${group}/${lang}: ${result.reason}`);
          }
          continue;
        }
        if (!result.pass) {
          failures.push(`${group}/${lang}: ${result.reason}`);
          continue;
        }
        passed++;
        console.log(`OK ${group}/${lang}: ${result.keyCount} keys`);
      }
    }
  }

  console.log("");
  console.log(`Passed: ${passed} | Failed: ${failures.length} | Skipped: ${skipped.length}`);

  if (unexpectedSkips.length) {
    console.error("\nContent Crowdin round-trip: unexpected SKIPPED cases (only g1-training/et allowed):");
    for (const msg of unexpectedSkips) console.error(`  - ${msg}`);
    process.exit(1);
  }

  if (failures.length) {
    console.error("\nContent Crowdin round-trip FAILED:");
    for (const msg of failures.slice(0, 30)) console.error(`  - ${msg}`);
    if (failures.length > 30) console.error(`  ... and ${failures.length - 30} more`);
    process.exit(1);
  }

  console.log("Content Crowdin round-trip: all executed cases PASS.");
}

main();
