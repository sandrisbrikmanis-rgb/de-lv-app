#!/usr/bin/env node
/**
 * CS-DE cross-dataset terminology consistency check (read-only).
 */
const fs = require("fs");
const path = require("path");
const {
  ROOT,
  DATASET_CONFIG,
  loadArray,
  entryId,
  tempDir,
  ensureDir,
} = require("./lib/cs-audit-helpers");

const LEVELS = ["a1", "a2", "b1", "b2", "c1", "c2"];

function main() {
  const deToTranslations = new Map();
  const entries = [];

  for (const level of LEVELS) {
    const cfg = DATASET_CONFIG[level];
    const cs = loadArray(cfg.csFile, cfg.globalKey);
    for (let i = 0; i < cs.length; i++) {
      const e = cs[i];
      const key = `${e.de}|${e.de_article || ""}`;
      const norm = (e.lv || "").toLowerCase().replace(/\s+/g, " ").trim();
      if (!deToTranslations.has(key)) {
        deToTranslations.set(key, new Set());
      }
      deToTranslations.get(key).add(norm);
      entries.push({ level, de: e.de, cs: e.lv, id: entryId(e, i, level) });
    }
  }

  const inconsistencies = [];
  for (const [key, translations] of deToTranslations) {
    if (translations.size > 1) {
      const [de] = key.split("|");
      const variants = [...translations].filter(Boolean);
      if (variants.length > 1) {
        const locations = entries.filter((e) => e.de === de).map((e) => `${e.level}:${e.id}`);
        inconsistencies.push({
          de,
          variants,
          locations: locations.slice(0, 10),
          locationCount: locations.length,
          severity: variants.some((v) => v.split("•")[0].trim() !== variants[0].split("•")[0].trim()) ? "HIGH" : "MEDIUM",
        });
      }
    }
  }

  inconsistencies.sort((a, b) => b.locationCount - a.locationCount);

  const out = {
    meta: { date: new Date().toISOString(), datasetsScanned: LEVELS, totalEntries: entries.length },
    inconsistencyCount: inconsistencies.length,
    inconsistencies: inconsistencies.slice(0, 200),
  };

  const outDir = path.join(ROOT, "reports", "temp");
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, "cs-cross-dataset-consistency.json"), JSON.stringify(out, null, 2));

  // Distribute cross-dataset findings to level reports via temp files
  for (const level of LEVELS) {
    const levelIssues = inconsistencies.filter((inc) =>
      inc.locations.some((loc) => loc.startsWith(`${level}:`))
    );
    const dir = tempDir(level);
    ensureDir(dir);
    fs.writeFileSync(path.join(dir, "cross-dataset-findings.json"), JSON.stringify(levelIssues, null, 2));
  }

  console.log(JSON.stringify({
    totalEntries: entries.length,
    uniqueDeTerms: deToTranslations.size,
    inconsistencies: inconsistencies.length,
    high: inconsistencies.filter((i) => i.severity === "HIGH").length,
    medium: inconsistencies.filter((i) => i.severity === "MEDIUM").length,
  }, null, 2));
}

main();
