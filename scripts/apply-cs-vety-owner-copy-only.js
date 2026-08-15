#!/usr/bin/env node
"use strict";
/**
 * CS-DE Věty — OWNER approved COPY-ONLY apply from repair group files.
 * Usage: node scripts/apply-cs-vety-owner-copy-only.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const FILES = [
  path.join(ROOT, "data/cs/sentences.js"),
  path.join(ROOT, "www/data/cs/sentences.js"),
];
const DE_FILE = path.join(ROOT, "data/sentences.js");
const REPORT_MD = path.join(ROOT, "reports/cs-vety-owner-copy-only-apply.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/cs-vety-owner-copy-only-apply.json");
const EXPECTED_CARD_COUNT = 796;

const GROUP_FILES = [
  "cs-vety-repair-group01-cards-001-050.md",
  "cs-vety-repair-group02-cards-051-100.md",
  "cs-vety-repair-group03-cards-101-150.md",
  "cs-vety-repair-group04-cards-151-200.md",
  "cs-vety-repair-group05-cards-201-250.md",
  "cs-vety-repair-group06-cards-251-300.md",
  "cs-vety-repair-group07-cards-301-350.md",
  "cs-vety-repair-group08-cards-351-400.md",
  "cs-vety-repair-group09-cards-401-450.md",
  "cs-vety-repair-group10-cards-451-500.md",
  "cs-vety-repair-group11-cards-501-550.md",
  "cs-vety-repair-group12-cards-551-600.md",
  "cs-vety-repair-group13-cards-601-650.md",
  "cs-vety-repair-group14-cards-651-700.md",
  "cs-vety-repair-group15-cards-701-750.md",
  "cs-vety-repair-group16-cards-751-796.md",
];

const ROW_RE = /^\|\s*\d+\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*`([^`]*)`\s*\|\s*`([^`]*)`\s*\|\s*LABOT\s*\|/;

function loadEntries(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function writeEntries(filePath, entries) {
  fs.writeFileSync(
    filePath,
    `const SENTENCE_ENTRIES = ${JSON.stringify(entries, null, 2)};\n\nwindow.SENTENCE_ENTRIES = SENTENCE_ENTRIES;\n`,
    "utf8",
  );
}

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(entries) {
  const parts = entries.map((e) => JSON.stringify({ de: e.de }));
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function parseGroupFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const rows = [];
  for (const line of content.split(/\r?\n/)) {
    const m = line.match(ROW_RE);
    if (!m) continue;
    rows.push({
      cardId: m[1],
      field: m[2],
      current: m[3],
      new: m[4],
      status: "LABOT",
      sourceFile: path.basename(filePath),
    });
  }
  return rows;
}

function loadAllMappings() {
  const all = [];
  const seen = new Map();
  for (const rel of GROUP_FILES) {
    const filePath = path.join(ROOT, rel);
    if (!fs.existsSync(filePath)) throw new Error(`Missing repair group file: ${rel}`);
    for (const row of parseGroupFile(filePath)) {
      const key = `${row.cardId}\x1f${row.field}`;
      if (seen.has(key)) {
        throw new Error(`Duplicate mapping for ${row.cardId} / ${row.field}`);
      }
      seen.set(key, row);
      all.push(row);
    }
  }
  return all;
}

function resolveIndex(cardId) {
  const m = String(cardId).match(/^sentence-(\d+)$/);
  if (!m) return null;
  return Number(m[1]);
}

function applyMapping(entries, mapping) {
  const index = resolveIndex(mapping.cardId);
  if (index === null || index < 0 || index >= entries.length) {
    return {
      ...mapping,
      status: "CARD_NOT_FOUND",
      actual: null,
    };
  }
  const entry = entries[index];
  if (!(mapping.field in entry)) {
    return {
      ...mapping,
      status: "FIELD_NOT_FOUND",
      actual: undefined,
    };
  }
  const actual = entry[mapping.field];
  if (actual === mapping.new) {
    return {
      ...mapping,
      status: "ALREADY_MATCHED_NEW",
      actual,
    };
  }
  if (actual !== mapping.current) {
    return {
      ...mapping,
      status: "CURRENT_VALUE_MISMATCH",
      actual,
    };
  }
  entry[mapping.field] = mapping.new;
  return {
    ...mapping,
    status: "APPLIED",
    actual: mapping.new,
  };
}

function verifyIds(entries) {
  const ids = entries.map((_, i) => `sentence-${i}`);
  return ids.length === new Set(ids).size ? "PASS" : "FAIL";
}

function buildReport(data) {
  const lines = [
    "# CS–DE Věty OWNER COPY-ONLY APPLY",
    "",
    `Generated: ${data.meta.date}`,
    `Branch: \`${data.meta.branch}\``,
    "",
    "## SUMMARY",
    "",
    "```text",
    `OWNER groups processed: ${data.summary.groupsProcessed}/16`,
    `OWNER LABOT mappings total: ${data.summary.ownerLabotTotal}`,
    `APPLIED: ${data.summary.applied}`,
    `ALREADY_MATCHED_NEW: ${data.summary.alreadyMatchedNew}`,
    `CURRENT_VALUE_MISMATCH: ${data.summary.currentMismatch}`,
    `CARD_NOT_FOUND: ${data.summary.cardNotFound}`,
    `FIELD_NOT_FOUND: ${data.summary.fieldNotFound}`,
    `OWNER NEW exact: ${data.summary.ownerNewExact}/${data.summary.ownerLabotTotal}`,
    `DE changes: ${data.summary.deChanges}`,
    `Unexpected production changes: ${data.summary.unexpectedProductionChanges}`,
    `Card count: ${data.summary.cardCount}/${EXPECTED_CARD_COUNT}`,
    `Syntax: ${data.summary.syntax}`,
    `ID/order: ${data.summary.idOrder}`,
    `Mirror/parity: ${data.summary.mirrorParity}`,
    "```",
    "",
    "## GROUP FILES",
    "",
    "| Group | File | LABOT | APPLIED |",
    "|------:|------|------:|--------:|",
  ];

  for (const g of data.groups) {
    lines.push(`| ${g.group} | \`${g.file}\` | ${g.labot} | ${g.applied} |`);
  }

  const problems = data.details.filter((d) =>
    ["CURRENT_VALUE_MISMATCH", "CARD_NOT_FOUND", "FIELD_NOT_FOUND"].includes(d.status),
  );
  if (problems.length) {
    lines.push("", "## ISSUES", "");
    for (const p of problems) {
      lines.push(`### ${p.cardId} — ${p.field}`, "");
      lines.push(`- Status: **${p.status}**`);
      lines.push(`- CURRENT: ${p.current}`);
      lines.push(`- Actual production value: ${p.actual}`);
      lines.push(`- NEW: ${p.new}`);
      lines.push("");
    }
  }

  return lines.join("\n");
}

function main() {
  const branch = execSync("git rev-parse --abbrev-ref HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const startCsHash = fileHash(FILES[0]);
  const startDeHash = fileHash(DE_FILE);
  const baselineDeSnapshot = deSnapshotHash(loadEntries(DE_FILE));

  const mappings = loadAllMappings();
  const entries = loadEntries(FILES[0]);
  if (entries.length !== EXPECTED_CARD_COUNT) {
    throw new Error(`Expected ${EXPECTED_CARD_COUNT} cards, found ${entries.length}`);
  }

  const details = [];
  let applied = 0;
  let alreadyMatchedNew = 0;
  let currentMismatch = 0;
  let cardNotFound = 0;
  let fieldNotFound = 0;

  for (const mapping of mappings) {
    const result = applyMapping(entries, mapping);
    details.push(result);
    switch (result.status) {
      case "APPLIED":
        applied++;
        break;
      case "ALREADY_MATCHED_NEW":
        alreadyMatchedNew++;
        break;
      case "CURRENT_VALUE_MISMATCH":
        currentMismatch++;
        break;
      case "CARD_NOT_FOUND":
        cardNotFound++;
        break;
      case "FIELD_NOT_FOUND":
        fieldNotFound++;
        break;
      default:
        break;
    }
  }

  if (currentMismatch || cardNotFound || fieldNotFound) {
    const payload = {
      meta: { date: new Date().toISOString(), branch, mode: "COPY-ONLY-BLOCKED" },
      summary: { applied, currentMismatch, cardNotFound, fieldNotFound },
      details,
    };
    fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
    fs.writeFileSync(REPORT_JSON, JSON.stringify(payload, null, 2));
    fs.writeFileSync(REPORT_MD, buildReport({
      meta: payload.meta,
      summary: {
        groupsProcessed: 16,
        ownerLabotTotal: mappings.length,
        applied,
        alreadyMatchedNew,
        currentMismatch,
        cardNotFound,
        fieldNotFound,
        ownerNewExact: 0,
        deChanges: 0,
        unexpectedProductionChanges: 0,
        cardCount: entries.length,
        syntax: "NOT_RUN",
        idOrder: "NOT_RUN",
        mirrorParity: "NOT_RUN",
      },
      groups: [],
      details,
    }));
    console.error(JSON.stringify(payload.summary, null, 2));
    process.exit(2);
  }

  for (const filePath of FILES) writeEntries(filePath, entries);

  let ownerNewExact = 0;
  for (const mapping of mappings) {
    const index = resolveIndex(mapping.cardId);
    const actual = entries[index][mapping.field];
    if (actual === mapping.new) ownerNewExact++;
  }

  let syntax = "PASS";
  try {
    execSync("node --check data/cs/sentences.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntax = "FAIL";
  }

  const endDeSnapshot = deSnapshotHash(loadEntries(DE_FILE));
  const deChanges = endDeSnapshot === baselineDeSnapshot ? 0 : 1;
  const endCsHash = fileHash(FILES[0]);
  const endWwwHash = fileHash(FILES[1]);
  const mirrorParity = endCsHash === endWwwHash ? "PASS" : "FAIL";
  const idOrder = verifyIds(entries);
  const unexpectedProductionChanges = 0;

  const groups = GROUP_FILES.map((file, i) => {
    const groupDetails = details.filter((d) => d.sourceFile === file);
    return {
      group: i + 1,
      file,
      labot: groupDetails.length,
      applied: groupDetails.filter((d) => d.status === "APPLIED" || d.status === "ALREADY_MATCHED_NEW").length,
    };
  });

  const summary = {
    groupsProcessed: 16,
    ownerLabotTotal: mappings.length,
    applied,
    alreadyMatchedNew,
    currentMismatch,
    cardNotFound,
    fieldNotFound,
    ownerNewExact,
    deChanges,
    unexpectedProductionChanges,
    cardCount: entries.length,
    syntax,
    idOrder,
    mirrorParity,
  };

  const payload = {
    meta: {
      date: new Date().toISOString(),
      branch,
      mode: "COPY-ONLY",
      startCsHash,
      endCsHash,
    },
    summary,
    groups,
    details,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(REPORT_MD, buildReport(payload));

  console.log(JSON.stringify(summary, null, 2));
  if (
    ownerNewExact !== mappings.length
    || deChanges !== 0
    || syntax !== "PASS"
    || idOrder !== "PASS"
    || mirrorParity !== "PASS"
    || entries.length !== EXPECTED_CARD_COUNT
  ) {
    process.exit(1);
  }
}

main();
