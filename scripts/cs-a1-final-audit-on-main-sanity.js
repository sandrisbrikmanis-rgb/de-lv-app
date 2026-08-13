#!/usr/bin/env node
/**
 * Snapshot known problem cards for CS-DE A1 final audit on main (read-only).
 */
const fs = require("fs");
const path = require("path");
const { ROOT, loadArray, entryId, auditPathsForA1 } = require("./lib/cs-audit-helpers");

const PROBLEM_CARDS = [
  "a1-heißen", "a1-schauen-study", "a1-in", "a1-morgen", "a1-müssen",
  "a1-Besuch-87", "a1-besuchen-89", "a1-bitte", "a1-bitte-study",
  "a1-ein", "a1-es", "a1-Fußball-218", "a1-ganz-219", "a1-gefallen-225",
  "a1-Geschichte-233", "a1-Geschwister-234", "a1-Großeltern-251", "a1-Hand-267", "a1-hübsch-288",
];

function findIndex(cardId, cs) {
  for (let i = 0; i < cs.length; i++) {
    if (entryId(cs[i], i, "a1") === cardId) return i;
  }
  return -1;
}

function snapshotEntry(entry) {
  if (!entry) return null;
  return {
    de: entry.de,
    lv: entry.lv,
    study: entry.study ? {
      id: entry.study.id,
      layout: entry.study.layout,
      translation: entry.study.translation,
      explanation: entry.study.explanation,
      sectionAccents: entry.study.sectionAccents,
    } : null,
  };
}

function main() {
  const paths = auditPathsForA1("a1");
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  const snapshots = [];

  for (const cardId of PROBLEM_CARDS) {
    const idx = findIndex(cardId, cs);
    snapshots.push({
      cardId,
      index: idx,
      found: idx >= 0,
      snapshot: idx >= 0 ? snapshotEntry(cs[idx]) : null,
    });
  }

  const payload = {
    auditedAt: new Date().toISOString(),
    cardCount: PROBLEM_CARDS.length,
    found: snapshots.filter((s) => s.found).length,
    snapshots,
  };

  fs.mkdirSync(path.dirname(paths.sanityJson), { recursive: true });
  fs.writeFileSync(paths.sanityJson, JSON.stringify(payload, null, 2));
  console.log(`Sanity snapshots: ${payload.found}/${payload.cardCount} → ${paths.sanityJson}`);
}

main();
