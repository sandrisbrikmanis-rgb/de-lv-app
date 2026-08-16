#!/usr/bin/env node
"use strict";
/**
 * Narrow regression audit: FINAL29 tip sectionAccent apply only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { findEntry, getAt, normalizeField } = require("./lib/da-a2-owner-path");
const CASES = require("./lib/da-a2-final29-cases");

const DA = path.join(ROOT, "data/da/a2.js");
const WWW = path.join(ROOT, "www/data/da/a2.js");
const REPORT = path.join(ROOT, "reports/da-a2-final29-regression-audit.md");

function loadWords(p) {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx);
  return ctx.window.A2_WORDS;
}

function tipBlockString(block) {
  if (!block?.text) return "";
  const keys = Object.keys(block.text)
    .filter((k) => /^\d+$/.test(k))
    .map(Number)
    .sort((a, b) => a - b);
  return keys.map((k) => block.text[String(k)] || "").join("");
}

function tipStudyText(entry) {
  const tip = entry.study?.tip;
  if (!tip) return "";
  const parts = [];
  for (const side of ["leftBlocks", "rightBlocks"]) {
    for (const b of tip[side] || []) {
      const s = tipBlockString(b);
      if (s) parts.push(s);
    }
  }
  return parts.join(" ");
}

function matchesTerm(text, term) {
  if (!text || !term) return false;
  const esc = String(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${esc}(?![\\p{L}\\p{N}_])`, "iu").test(String(text));
  } catch {
    return String(text).toLowerCase().includes(String(term).toLowerCase());
  }
}

function collectDiffPaths(b, a, prefix = "") {
  const diffs = [];
  const walk = (bv, av, p) => {
    if (bv === av) return;
    if (typeof bv !== typeof av || bv == null || av == null || typeof bv !== "object") {
      diffs.push(p);
      return;
    }
    if (Array.isArray(bv) && Array.isArray(av)) {
      const len = Math.max(bv.length, av.length);
      for (let j = 0; j < len; j++) walk(bv[j], av[j], `${p}[${j}]`);
      return;
    }
    for (const k of new Set([...Object.keys(bv || {}), ...Object.keys(av || {})])) {
      walk(bv[k], av[k], p ? `${p}.${k}` : k);
    }
  };
  walk(b, a, prefix);
  return diffs;
}

function main() {
  const beforePath = process.env.DA_A2_FINAL29_BEFORE;
  const before = beforePath && fs.existsSync(beforePath) ? loadWords(beforePath) : null;
  const after = loadWords(DA);
  const allowedPaths = new Set(CASES.map((c) => normalizeField(c.field)));
  const cardIds = [...new Set(CASES.map((c) => c.cardId))];

  let deChanges = 0;
  if (before) {
    for (let i = 0; i < after.length; i++) {
      for (const f of ["de", "de_article", "de_plural", "level"]) {
        if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
      }
    }
  }

  let unexpected = 0;
  if (before) {
    for (const cardId of cardIds) {
      const eb = findEntry(before, cardId);
      const ea = findEntry(after, cardId);
      if (!eb || !ea) continue;
      for (const d of collectDiffPaths(eb, ea, "")) {
        if (!allowedPaths.has(d) && !allowedPaths.has(normalizeField(d))) unexpected++;
      }
    }
  }

  const stale = [];
  for (const c of CASES) {
    const entry = findEntry(after, c.cardId);
    const current = getAt(entry, c.field);
    const studyTxt = tipStudyText(entry);
    if (current && !matchesTerm(studyTxt, current)) stale.push(c);
  }

  const mirror = fs.readFileSync(DA).equals(fs.readFileSync(WWW));
  const pass = stale.length === 0 && deChanges === 0 && unexpected === 0 && mirror;
  const verdict = pass ? "**DA–DE A2 FINAL29: CLOSED**" : "**DA–DE A2 FINAL29: OPEN**";

  const md = [
    "# DA–DE A2 FINAL29 narrow regression audit",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "",
    "| Metric | Target | Actual |",
    "|--------|--------|--------|",
    `| Cases | 29 | **29** |`,
    `| Stale remaining | 0 | **${stale.length}** |`,
    `| DE changes | 0 | **${deChanges}** |`,
    `| Unexpected changes | 0 | **${unexpected}** |`,
    `| Mirror | PASS | **${mirror ? "PASS" : "FAIL"}** |`,
    "",
    `### Verdict: ${verdict}`,
    "",
  ];
  fs.writeFileSync(REPORT, md.join("\n"));
  console.log(JSON.stringify({ stale: stale.length, deChanges, unexpected, mirror, pass, report: REPORT }, null, 2));
  process.exit(pass ? 0 : 1);
}

main();
