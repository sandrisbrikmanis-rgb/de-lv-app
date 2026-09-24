#!/usr/bin/env node
"use strict";

const path = require("path");
const { ROOT } = require("../audit-common");
const {
  buildGermanTargetRescan,
  writeGermanTargetRescanArtifacts,
} = require("./german-target-dictionary-rescan-builder");

const RESCAN_LANGS = Object.freeze(["mk", "nn", "lb"]);
const CANDIDATES_REL = "scripts/lib/data/german-target-dictionary-rescan-problematic-candidates.json";
const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/german-target-dictionary-rescan-problematic");
const BASE_NAME = "german-target-dictionary-rescan-problematic";

async function buildRescanProblematic() {
  return buildGermanTargetRescan({
    targetLanguages: RESCAN_LANGS,
    candidatesRel: CANDIDATES_REL,
    schemaVersion: "g2-a1-german-target-dictionary-rescan-problematic-v1",
    classification: "G2_A1_GERMAN_TARGET_DICTIONARY_RESCAN_PROBLEMATIC_COMPLETE",
    nextAction: "OWNER_REVIEW_RESCAN_PROBLEMATIC_RECOMMENDATIONS",
    titleLv: "G2/A1 — vācu–TARGET papildu varianti (problemātiskās valodas)",
    introLv:
      "Valodas: **mk, nn, lb** — paplašināts kandidātu saraksts + live piloti (Haus, abholen, Route, Getriebe). Luxdico izmanto `q=` parametru.",
  });
}

function writeRescanProblematicArtifacts(payload) {
  return writeGermanTargetRescanArtifacts(payload, OUT_DIR, BASE_NAME);
}

module.exports = { OUT_DIR, RESCAN_LANGS, buildRescanProblematic, writeRescanProblematicArtifacts };
