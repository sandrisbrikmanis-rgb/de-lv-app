#!/usr/bin/env node
"use strict";
/**
 * ES-DE A1+A2 OWNER closure regression (read-only).
 * Verifies all 1208 Luna OWNER LABOT targets are applied in production.
 * Usage: node scripts/run-es-a1-a2-owner-closure-regression.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { getAt } = require("./lib/da-a1-owner-path");

const REPORT_MD = path.join(ROOT, "reports/es-de-a1-a2-owner-closure-regression.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/es-de-a1-a2-owner-closure-regression.json");
const LUNA_JSON = path.join(ROOT, "reports/es-a1-a2-linguistic-audit.json");

const LEGACY_ROW_RE =
  /^\s*\d+\s+`(ES-A1A2-LUNA-\d+)`\s+`([^`]+)`\s+`([^`]+)`\s+`([^`]+)`\s+`([^`]+)`\s+\*\*LABOT\*\*/;
const TABLE_ROW_RE =
  /^\|\s*\d+\s*\|\s*`(ES-A1A2-LUNA-\d+)`\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*\*\*LABOT\*\*\s*\|/;

function normalizeField(field) {
  const f = String(field || "").trim();
  if (f === "esText" || f === "esMain") return "lv";
  return f;
}

function discoverSources() {
  const reports = path.join(ROOT, "reports");
  const numbered = fs
    .readdirSync(reports)
    .filter((name) => /^es-de-a1-a2-owner-decisions-master-\d+-\d+\.md$/.test(name))
    .sort((a, b) => {
      const na = parseInt(a.match(/master-(\d+)/)[1], 10);
      const nb = parseInt(b.match(/master-(\d+)/)[1], 10);
      return na - nb;
    })
    .map((name) => path.join(reports, name));
  const remaining = path.join(reports, "es-de-a1-a2-owner-decisions-master-remaining-101.md");
  return fs.existsSync(remaining) ? [...numbered, remaining] : numbered;
}

function parseOwnerRows(filePath) {
  const md = fs.readFileSync(filePath, "utf8");
  const rows = [];
  for (const line of md.split("\n")) {
    let m = line.match(TABLE_ROW_RE);
    if (!m) m = line.match(LEGACY_ROW_RE);
    if (!m) continue;
    rows.push({
      auditId: m[1],
      cardId: m[2],
      field: normalizeField(m[3]),
      rawField: m[3],
      ownerNew: m[5],
      source: path.relative(ROOT, filePath),
    });
  }
  return rows;
}

function loadWords(rel, globalKey) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

const wordsByLevel = {
  a1: loadWords("data/es/a1.js", "A1_WORDS"),
  a2: loadWords("data/es/a2.js", "A2_WORDS"),
};

function findEntry(cardId) {
  const tryLevels = cardId.startsWith("a2-")
    ? ["a2"]
    : cardId.startsWith("a1-")
      ? ["a1"]
      : ["a2", "a1"];
  for (const level of tryLevels) {
    const words = wordsByLevel[level];
    const prefix = level;
    let entry = words.find((e) => e.study?.id === cardId);
    if (entry) return { level, entry };
    const idxMatch = cardId.match(/-(\d+)$/);
    if (idxMatch) {
      const idx = parseInt(idxMatch[1], 10);
      if (words[idx]) return { level, entry: words[idx] };
    }
    const deGuess = cardId
      .replace(new RegExp(`^${prefix}-`), "")
      .replace(/-study.*$/i, "")
      .replace(/-\d+$/, "");
    entry = words.find((e) => e.de === deGuess || e.de?.toLowerCase() === deGuess.toLowerCase());
    if (entry) return { level, entry };
  }
  return { level: null, entry: null };
}

function readCurrent(entry, field) {
  if (field === "lv") return entry.lv;
  if (field === "study.tip.text") {
    const tip = entry.study?.tip;
    if (!tip) return undefined;
    if (typeof tip === "string") return tip;
    if (Array.isArray(tip)) return undefined;
    return tip.text;
  }
  return getAt(entry, field);
}

function findingNum(id) {
  const m = String(id).match(/ES-A1A2-LUNA-(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

function main() {
  const sources = discoverSources();
  const parsed = [];
  for (const src of sources) parsed.push(...parseOwnerRows(src));

  const byAuditId = new Map();
  for (const row of parsed) {
    const n = findingNum(row.auditId);
    if (!byAuditId.has(row.auditId) || row.source.includes("remaining")) {
      byAuditId.set(row.auditId, row);
    }
  }
  const ownerRows = [...byAuditId.values()].sort((a, b) => findingNum(a.auditId) - findingNum(b.auditId));

  const applied = [];
  const notApplied = [];
  const cardNotFound = [];

  for (const row of ownerRows) {
    const { entry } = findEntry(row.cardId);
    if (!entry) {
      cardNotFound.push(row);
      continue;
    }
    const actual = readCurrent(entry, row.field);
    if (String(actual) === String(row.ownerNew)) {
      applied.push(row);
    } else {
      notApplied.push({ ...row, actual: actual === undefined ? "(undefined)" : actual });
    }
  }

  let deterministic = null;
  try {
    execSync("node scripts/audit-es-a1-a2-collect.js", { cwd: ROOT, stdio: "pipe" });
    deterministic = JSON.parse(
      fs.readFileSync(path.join(ROOT, "reports/temp/es-de-a1-a2-audit-data.json"), "utf8"),
    );
  } catch (e) {
    deterministic = { error: String(e.message || e) };
  }

  const lunaMeta = fs.existsSync(LUNA_JSON)
    ? JSON.parse(fs.readFileSync(LUNA_JSON, "utf8")).meta
    : null;

  const det = deterministic?.summary || {};
  const detIssues = det.foreignRemnants ?? null;

  const verdict =
    notApplied.length === 0 && cardNotFound.length === 0 && ownerRows.length === 1208
      ? "PASS — ALL 1208 OWNER TARGETS APPLIED"
      : "FAIL";

  const summary = {
    head: execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
    ownerSources: sources.length,
    ownerTargets: ownerRows.length,
    expectedTargets: 1208,
    appliedVerified: applied.length,
    notApplied: notApplied.length,
    cardNotFound: cardNotFound.length,
    deterministic: det,
    lunaQualityFindings: lunaMeta?.qualityFindingsCount || 1208,
    verdict,
  };

  const lines = [
    "# ES–DE A1+A2 — OWNER closure regression",
    "",
    `**HEAD:** \`${summary.head}\``,
    "**DE:** STRICT READ-ONLY",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---------|---------|",
    `| OWNER avoti | **${summary.ownerSources}** |`,
    `| OWNER targets (unikāli) | **${summary.ownerTargets}** / ${summary.expectedTargets} |`,
    `| **APPLIED_VERIFIED** | **${summary.appliedVerified}** |`,
    `| NOT_APPLIED | **${summary.notApplied}** |`,
    `| CARD_NOT_FOUND | **${summary.cardNotFound}** |`,
    `| Deterministiskie LV atlikumi | **${summary.deterministic.foreignRemnants ?? "N/A"}** |`,
    `| Trūkstošie A1 Study | **${summary.deterministic.missingStudyTotal ?? "N/A"}** |`,
    `| Mirror | **${summary.deterministic.mirrorPass ?? "N/A"}** |`,
    "",
    `## FINAL VERDICT: **${summary.verdict}**`,
    "",
  ];

  if (notApplied.length) {
    lines.push("## NOT_APPLIED", "");
    for (const r of notApplied.slice(0, 50)) {
      lines.push(
        `- ${r.auditId} \`${r.cardId}\` \`${r.field}\` expected \`${r.ownerNew}\` got \`${r.actual}\``,
      );
    }
    if (notApplied.length > 50) lines.push(`- … un vēl ${notApplied.length - 50}`);
    lines.push("");
  }

  if (cardNotFound.length) {
    lines.push("## CARD_NOT_FOUND", "");
    for (const r of cardNotFound) {
      lines.push(`- ${r.auditId} \`${r.cardId}\``);
    }
    lines.push("");
  }

  if (ownerRows.length !== 1208) {
    lines.push("## COVERAGE GAP", "");
    lines.push(`- Expected 1208 unique OWNER targets, found **${ownerRows.length}**`);
    lines.push("");
  }

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify({ summary, notApplied, cardNotFound, deterministic: deterministic?.summary || deterministic?.totals }, null, 2));
  fs.writeFileSync(REPORT_MD, lines.join("\n"));
  console.log(JSON.stringify(summary, null, 2));

  if (verdict.startsWith("FAIL")) process.exit(1);
}

main();
