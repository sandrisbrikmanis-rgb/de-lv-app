#!/usr/bin/env node
"use strict";
/**
 * Linguistic + technical verification of all LABOT NEW values.
 * Usage: node scripts/verify-es-kurss-lessons-labot-linguistic.js
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { ALL_SEMANTIC } = require("./lib/es-kurss-lessons-phonetic-standard");

const DECISIONS_JSON = path.join(ROOT, "reports/es-kurss-lessons-owner-decisions-filled.json");

const LV_PROSE =
  /\b(piemēram|Latviešu|Vārdā|Vārdu|vīr|vīriešu|sieviešu|kārta|izrunā|vārda|zilbes|Divskani|Pavēles|latviešu)\b/i;
const EN_GLOSS = /\s+—\s+(go|stand|we|not|quiet|many)\b|\s-\s(stand|go)\b/i;
const ARTICLE_EN = /\b(el|la)\s+article\b|\barticle\s+(definido|indefinido)\b/i;
const CORRUPT_PRON_PREFIX =
  /^(die Schüssel|das Zimmer|das Ufer)\s+—\s+(sp al|sch se|El diptongo)/i;

function stripPhoneticParens(text) {
  return String(text || "").replace(/\([^)]*\)/g, "");
}

function checkLabot(d) {
  const issues = [];
  const cur = String(d.current || "");
  const neu = String(d.new || "");

  if (!neu.trim()) issues.push("MISSING_NEW");
  if (neu === cur) issues.push("NEW_EQUALS_CURRENT");

  const prose = stripPhoneticParens(neu);
  if (LV_PROSE.test(prose)) issues.push("LV_PROSE_REMNANT");
  if (EN_GLOSS.test(neu)) issues.push("EN_GLOSS");
  if (ARTICLE_EN.test(neu)) issues.push("EN_ARTICLE_TERM");
  if (CORRUPT_PRON_PREFIX.test(neu)) issues.push("PRON_RULE_WITH_VOCAB_PREFIX");
  if (/\bletón\s+š\b/i.test(neu)) issues.push("MIXED_LV_REFERENCE");
  if (/→\s*-/.test(neu) || /letón:|alemán en:/i.test(neu)) issues.push("CORRUPT_PROPOSAL");

  // Vocabulary row with wrong gloss heuristics (DE headword vs gloss mismatch)
  const vocabMatch = neu.match(/^([a-zäöüßÄÖÜ\s]+)\s*\([^)]+\)\s*—\s*(.+)$/i);
  if (vocabMatch) {
    const de = String(d.deContext || "").toLowerCase();
    const gloss = vocabMatch[2].toLowerCase();
    if (de.includes("lied") && gloss.includes("jovencita")) issues.push("SEMANTIC_MISMATCH_LIED");
    if (de.includes("spiegel") && gloss.includes("escoba")) issues.push("SEMANTIC_MISMATCH_SPIEGEL");
    if (de.includes("feder") && /puntiagud/i.test(gloss)) issues.push("SEMANTIC_MISMATCH_FEDER");
  }

  if (d.path?.includes("Pronunciación") && /^\w+ \([^)]+\) — \w+/i.test(neu) && !/pronuncia|diptongo|se pronuncia/i.test(neu)) {
    issues.push("VOCAB_ROW_IN_PRONUNCIATION_SECTION");
  }

  return issues;
}

function main() {
  const data = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
  const labot = data.decisions.filter((d) => d.status === "LABOT");
  const ids = data.decisions.map((d) => d.id);
  const dup = ids.filter((id, i) => ids.indexOf(id) !== i);

  const flagged = [];
  for (const d of labot) {
    const issues = checkLabot(d);
    if (issues.length) flagged.push({ id: d.id, issues, new: String(d.new).slice(0, 100) });
  }

  const reviewedApplied = labot.filter((d) => ALL_SEMANTIC[d.id] && d.new === ALL_SEMANTIC[d.id]).length;

  const result = {
    labotTotal: labot.length,
    nelabotTotal: data.decisions.filter((d) => d.status === "NELABOT").length,
    labotMissingNew: labot.filter((d) => !d.new?.trim()).length,
    labotSameAsCurrent: labot.filter((d) => String(d.new) === String(d.current)).length,
    duplicateIds: [...new Set(dup)].length,
    linguisticIssues: flagged.length,
    phoneticStandardApplied: reviewedApplied,
    semanticFixesExpected: Object.keys(ALL_SEMANTIC).length,
    pass: flagged.length === 0 && dup.length === 0,
    flaggedSample: flagged.slice(0, 25),
    verdict:
      flagged.length === 0 && dup.length === 0
        ? `PASS — ${labot.length}/${labot.length} LABOT linguistically verified`
        : `FAIL — ${flagged.length} LABOT with linguistic issues`,
  };

  console.log(JSON.stringify(result, null, 2));
  if (!result.pass) process.exit(1);
}

if (require.main === module) main();

module.exports = { checkLabot };
