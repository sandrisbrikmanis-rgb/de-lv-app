#!/usr/bin/env node
"use strict";
/**
 * Narrow regression audit: only the 29 LOW sectionAccent cases.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");
const { findEntry, getAt } = require("./lib/da-a2-owner-path");
const CASES = require("./lib/da-a2-low29-cases");

const DA = path.join(ROOT, "data/da/a2.js");
const WWW = path.join(ROOT, "www/data/da/a2.js");
const DECISIONS = path.join(ROOT, "reports/da-a2-owner-decisions-low29-sectionaccents.md");
const REPORT = path.join(ROOT, "reports/da-a2-low29-regression-audit.md");

const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function loadWords(p) {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx);
  return ctx.window.A2_WORDS;
}

function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => {
    if (v == null) return;
    if (typeof v === "string") {
      if (v.trim()) texts.push(v);
      return;
    }
    if (Array.isArray(v)) v.forEach(push);
    else if (typeof v === "object") ["text", "example", "de", "lv", "word", "meaning"].forEach((k) => push(v[k]));
  };
  if (sectionKey === "examples") {
    const rows = index != null ? [study.examples?.[index]].filter(Boolean) : study.examples || [];
    rows.forEach((ex) => {
      if (!field || field === "de") push(ex.de);
      if (!field || field === "lv") push(ex.lv);
    });
  } else if (sectionKey === "comparison") {
    const rows = index != null ? [study.comparison?.[index]].filter(Boolean) : study.comparison || [];
    rows.forEach((r) => {
      if (!field || field === "word") push(r.word);
      if (!field || field === "meaning") push(r.meaning);
      if (!field || field === "example") push(r.example);
    });
  } else if (sectionKey === "important") {
    const src = study.important;
    const rows = index != null ? [Array.isArray(src) ? src[index] : src].filter(Boolean) : src || [];
    if (Array.isArray(rows)) rows.forEach(push);
    else push(rows);
  }
  return texts;
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

function metaFromField(field) {
  const rel = field.replace(/^study\.sectionAccents\./, "");
  const parts = rel.split(".");
  const head = parts[0].match(/^(\w+)\[(\d+)\]$/);
  if (!head) return null;
  return { section: head[1], index: Number(head[2]), field: parts[1] || null };
}

function accentStale(entry, c) {
  const current = getAt(entry, c.field);
  if (current === undefined || current === "") return false;
  const meta = metaFromField(c.field);
  if (!meta) return true;
  const texts = collectSectionTexts(entry.study, meta.section, meta.index, meta.field);
  return !matchesTerm(texts.join("\n"), String(current));
}

function countReviewedDecisions() {
  const md = fs.readFileSync(DECISIONS, "utf8");
  let n = 0;
  for (const c of CASES) {
    const re = new RegExp(`^\\|\\s*${c.id}\\s*\\|[^\\n]+\\|\\s*\\*\\*(LABOT|FALSE_POSITIVE|NELABOT|NEEDS_SOURCE_REVIEW)\\*\\*`, "m");
    if (re.test(md)) n++;
  }
  return n;
}

function main() {
  const beforePath = process.env.DA_A2_LOW29_BEFORE;
  const before = beforePath && fs.existsSync(beforePath) ? loadWords(beforePath) : null;
  const after = loadWords(DA);

  let deChanges = 0;
  if (before) {
    for (let i = 0; i < after.length; i++) {
      for (const f of ["de", "de_article", "de_plural", "level"]) {
        if (JSON.stringify(before[i]?.[f]) !== JSON.stringify(after[i]?.[f])) deChanges++;
      }
    }
  }

  const allowedPaths = new Set(CASES.map((c) => c.field));
  const low29CardIds = [...new Set(CASES.map((c) => c.cardId))];

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

  let unexpected = 0;
  if (before) {
    for (const cardId of low29CardIds) {
      const eb = findEntry(before, cardId);
      const ea = findEntry(after, cardId);
      if (!eb || !ea) continue;
      for (const d of collectDiffPaths(eb, ea, "")) {
        if (!allowedPaths.has(d)) unexpected++;
      }
    }
  }

  const reviewed = countReviewedDecisions();
  const stale = [];
  for (const c of CASES) {
    const entry = findEntry(after, c.cardId);
    if (accentStale(entry, c)) stale.push(c);
  }

  const mirror = fs.readFileSync(DA).equals(fs.readFileSync(WWW));
  const pass = reviewed === 29 && stale.length === 0 && deChanges === 0 && unexpected === 0 && mirror;
  const verdict = pass ? "**DA–DE A2 LOW29: CLOSED**" : "**DA–DE A2 LOW29: OPEN**";

  const md = [
    "# DA–DE A2 LOW29 narrow regression audit",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "",
    "| Metric | Target | Actual |",
    "|--------|--------|--------|",
    `| Reviewed | 29 | **${reviewed}** |`,
    `| LOW remaining | 0 | **${stale.length}** |`,
    `| DE changes | 0 | **${deChanges}** |`,
    `| Unexpected changes | 0 | **${unexpected}** |`,
    `| Mirror | PASS | **${mirror ? "PASS" : "FAIL"}** |`,
    "",
    `### Verdict: ${verdict}`,
    "",
  ];
  if (stale.length) {
    md.push("## Remaining stale accents", "");
    stale.forEach((c) => {
      const entry = findEntry(after, c.cardId);
      md.push(`- ${c.reg} \`${c.field}\` current=${JSON.stringify(getAt(entry, c.field))}`);
    });
  } else {
    md.push("_All 29 sectionAccent targets resolved._", "");
  }

  fs.writeFileSync(REPORT, md.join("\n"));
  console.log(
    JSON.stringify(
      { reviewed, lowRemaining: stale.length, deChanges, unexpected, mirror, pass, report: REPORT },
      null,
      2
    )
  );
  process.exit(pass ? 0 : 1);
}

main();
