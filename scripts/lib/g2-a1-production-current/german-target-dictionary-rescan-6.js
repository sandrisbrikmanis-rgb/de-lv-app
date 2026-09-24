#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("../audit-common");
const {
  buildGermanTargetRescan,
  writeGermanTargetRescanArtifacts,
} = require("./german-target-dictionary-rescan-builder");

const RESCAN_LANGS = Object.freeze(["bs", "et", "lb", "lt", "sq", "uk"]);
const CANDIDATES_REL = "scripts/lib/data/german-target-dictionary-rescan-6-candidates.json";
const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/german-target-dictionary-rescan-6");
const BASE_NAME = "german-target-dictionary-rescan-6";

async function buildRescan6() {
  return buildGermanTargetRescan({
    targetLanguages: RESCAN_LANGS,
    candidatesRel: CANDIDATES_REL,
    schemaVersion: "g2-a1-german-target-dictionary-rescan-6-v1",
    classification: "G2_A1_GERMAN_TARGET_DICTIONARY_RESCAN_6_COMPLETE",
    nextAction: "OWNER_REVIEW_RESCAN_6_RECOMMENDATIONS",
    titleLv: "G2/A1 — vācu–TARGET vārdnīcu atkārtota meklēšana (6 valodas)",
    introLv:
      "Valodas: **bs, et, lb, lt, sq, uk** — papildu avoti + live piloti (Haus, abholen, Route, Getriebe).",
  });
}

function writeRescan6Artifacts(payload) {
  return writeGermanTargetRescanArtifacts(payload, OUT_DIR, BASE_NAME);
}

module.exports = { OUT_DIR, RESCAN_LANGS, buildRescan6, writeRescan6Artifacts };
