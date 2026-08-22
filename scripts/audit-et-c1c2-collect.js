#!/usr/bin/env node
"use strict";
/**
 * ET-DE C1/C2 combined collector orchestrator (read-only).
 * Runs per-level collectors and merges into et-c1c2-audit-data.json
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT = path.join(ROOT, "reports", "temp", "et-c1c2-audit-data.json");
const C1_OUT = path.join(ROOT, "reports", "temp", "et-c1-audit-data.json");
const C2_OUT = path.join(ROOT, "reports", "temp", "et-c2-audit-data.json");

function mergeLevelData(c1, c2) {
  const merged = {
    meta: {
      date: new Date().toISOString(),
      levels: ["c1", "c2"],
      c1: c1.meta,
      c2: c2.meta,
      totalCards: (c1.meta?.etCount || 0) + (c2.meta?.etCount || 0),
      totalStudy: (c1.meta?.etStudyCount || 0) + (c2.meta?.etStudyCount || 0),
    },
    structural: {
      pass: c1.structural.pass && c2.structural.pass,
      issues: [...(c1.structural.issues || []), ...(c2.structural.issues || [])],
    },
    germanIntegrity: {
      pass: c1.germanIntegrity.pass && c2.germanIntegrity.pass,
      issues: [...(c1.germanIntegrity.issues || []), ...(c2.germanIntegrity.issues || [])],
    },
    technical: {
      pass: c1.technical.pass && c2.technical.pass,
      issues: [...(c1.technical.issues || []), ...(c2.technical.issues || [])],
    },
    lvRemnants: {
      pass: c1.lvRemnants.pass && c2.lvRemnants.pass,
      issues: [...(c1.lvRemnants.issues || []), ...(c2.lvRemnants.issues || [])],
    },
    sectionAccents: {
      pass: c1.sectionAccents.pass && c2.sectionAccents.pass,
      issues: [...(c1.sectionAccents.issues || []), ...(c2.sectionAccents.issues || [])],
    },
    layerIdentity: {
      pass: c1.layerIdentity.pass && c2.layerIdentity.pass,
      identical: c1.layerIdentity.identical && c2.layerIdentity.identical,
      c1: c1.layerIdentity,
      c2: c2.layerIdentity,
    },
    studyCards: {
      pass: c1.studyCards.pass && c2.studyCards.pass,
      issues: [...(c1.studyCards.issues || []), ...(c2.studyCards.issues || [])],
    },
    comparisonStudy: {
      issues: [...(c1.comparisonStudy?.issues || []), ...(c2.comparisonStudy?.issues || [])],
      count: (c1.comparisonStudy?.count || 0) + (c2.comparisonStudy?.count || 0),
    },
    standardStudy: {
      count: (c1.standardStudy?.count || 0) + (c2.standardStudy?.count || 0),
    },
    mainTranslations: {
      entries: [...(c1.mainTranslations?.entries || []), ...(c2.mainTranslations?.entries || [])],
      summary: {
        OK: (c1.mainTranslations?.summary?.OK || 0) + (c2.mainTranslations?.summary?.OK || 0),
        WARNING: (c1.mainTranslations?.summary?.WARNING || 0) + (c2.mainTranslations?.summary?.WARNING || 0),
        ERROR: (c1.mainTranslations?.summary?.ERROR || 0) + (c2.mainTranslations?.summary?.ERROR || 0),
      },
    },
    perLevel: { c1, c2 },
  };
  return merged;
}

function main() {
  execSync("node scripts/audit-et-c1-level-collect.js", { cwd: ROOT, stdio: "inherit" });
  execSync("node scripts/audit-et-c2-level-collect.js", { cwd: ROOT, stdio: "inherit" });
  const c1 = JSON.parse(fs.readFileSync(C1_OUT, "utf8"));
  const c2 = JSON.parse(fs.readFileSync(C2_OUT, "utf8"));
  const merged = mergeLevelData(c1, c2);
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(merged, null, 2));
  console.log(`Wrote merged ${OUT}`);
  console.log(JSON.stringify({
    totalCards: merged.meta.totalCards,
    lvRemnants: merged.lvRemnants.issues.length,
    sectionAccents: merged.sectionAccents.issues.length,
    structural: merged.structural.pass,
    mirror: merged.layerIdentity.identical,
  }, null, 2));
}

main();
