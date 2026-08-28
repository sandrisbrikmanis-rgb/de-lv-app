#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT, fileExists, isSyncedWithWww } = require("../../audit-common");

const MOJIBAKE_PATTERNS = [
  { name: "mangled-symbol", regex: /Ô[^\x00-\x7F]{1,3}/gu },
  { name: "mangled-diacritic", regex: /[─┼][^\x00-\x7F]/gu },
  { name: "mangled-dash-quote", regex: /â€[^\x00-\x7F]/gu },
  { name: "mangled-umlaut", regex: /Ã[^\x00-\x7F]/gu },
];

function scanFileMojibake(relPath, limit = 5) {
  if (!fileExists(relPath)) return [];
  const text = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const hits = [];
  const lines = text.split("\n");
  lines.forEach((line, idx) => {
    if (/──/.test(line)) return;
    for (const { name, regex } of MOJIBAKE_PATTERNS) {
      if (regex.test(line)) {
        hits.push({ line: idx + 1, pattern: name, sample: line.trim().slice(0, 120) });
        regex.lastIndex = 0;
      }
    }
  });
  return hits.slice(0, limit);
}

function collectMojibake({ lang, files, idPrefix, group, dataset }) {
  const findings = [];
  let seq = 0;
  for (const rel of files) {
    const hits = scanFileMojibake(rel);
    for (const hit of hits) {
      findings.push({
        auditId: `${idPrefix}-${String(++seq).padStart(4, "0")}-MOJI`,
        group,
        dataset,
        lang,
        cardId: "",
        fieldPath: `${rel}:${hit.line}`,
        severity: "HIGH",
        category: "MOJIBAKE",
        productionFile: rel,
        current: hit.sample,
        de: null,
        proposed: null,
        message: `Mojibake pattern ${hit.pattern} at line ${hit.line}`,
        source: "deterministic/mojibake",
      });
    }
  }
  return { findings, stats: { hits: findings.length } };
}

function collectMirrorSync({ lang, files, idPrefix, group, dataset }) {
  const findings = [];
  let seq = 0;
  for (const rel of files) {
    if (!fileExists(rel)) continue;
    if (!isSyncedWithWww(rel)) {
      findings.push({
        auditId: `${idPrefix}-${String(++seq).padStart(4, "0")}-MIRROR`,
        group,
        dataset,
        lang,
        fieldPath: rel,
        severity: "CRITICAL",
        category: "MIRROR_MISMATCH",
        productionFile: rel,
        current: "out of sync",
        de: null,
        proposed: null,
        message: `${rel} not synced with www/${rel}`,
        source: "deterministic/mirror",
      });
    }
  }
  return { findings, stats: { mismatches: findings.length } };
}

module.exports = {
  collectMojibake,
  collectMirrorSync,
};
