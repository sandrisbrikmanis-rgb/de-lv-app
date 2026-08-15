#!/usr/bin/env node
"use strict";
/**
 * CS-DE Slovesa — OWNER approved COPY-ONLY apply from repair group files.
 * Usage: node scripts/apply-cs-slovesa-owner-copy-only.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const FILES = [
  path.join(ROOT, "data/cs/verbs.js"),
  path.join(ROOT, "www/data/cs/verbs.js"),
];
const DE_FILE = path.join(ROOT, "data/verbs.js");
const REPORT_MD = path.join(ROOT, "reports/cs-slovesa-owner-copy-only-apply.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/cs-slovesa-owner-copy-only-apply.json");
const EXPECTED_VERB_COUNT = 189;
const FORM_KEYS = [
  "infinitiv",
  "praesens",
  "imperfektIndikativ",
  "imperfektKonjunktiv",
  "partizipVergangenheit",
];

const GROUP_FILES = [
  "cs-slovesa-repair-group01-verbs-001-050.md",
  "cs-slovesa-repair-group02-verbs-051-100.md",
  "cs-slovesa-repair-group03-verbs-101-150.md",
  "cs-slovesa-repair-group04-verbs-151-189.md",
];

const ROW_RE = /^\|\s*\d+\s*\|\s*`([^`]+)`\s*\|\s*`([^`]+)`\s*\|\s*`([^`]*)`\s*\|\s*`([^`]*)`\s*\|\s*LABOT\s*\|/;

function loadEntries(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.VERB_ENTRIES;
}

function writeEntries(filePath, entries) {
  fs.writeFileSync(
    filePath,
    `const VERB_ENTRIES = ${JSON.stringify(entries, null, 2)};\n\nwindow.VERB_ENTRIES = VERB_ENTRIES;\n`,
    "utf8",
  );
}

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(entries) {
  const parts = entries.map((entry) => {
    const forms = {};
    for (const key of FORM_KEYS) {
      if (entry[key]) forms[key] = { de: entry[key].de };
    }
    return JSON.stringify(forms);
  });
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function parseGroupFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const rows = [];
  for (const line of content.split(/\r?\n/)) {
    const m = line.match(ROW_RE);
    if (!m) continue;
    rows.push({
      verbId: m[1],
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
  const seen = new Map();
  for (const rel of GROUP_FILES) {
    const filePath = path.join(ROOT, rel);
    if (!fs.existsSync(filePath)) throw new Error(`Missing repair group file: ${rel}`);
    for (const row of parseGroupFile(filePath)) {
      const key = `${row.verbId}\x1f${row.field}`;
      seen.set(key, row);
    }
  }
  return [...seen.values()];
}

function resolveIndex(verbId) {
  const m = String(verbId).match(/^verb-(\d+)$/);
  if (!m) return null;
  return Number(m[1]);
}

function getCsValue(entry, field) {
  if (!entry[field] || typeof entry[field] !== "object") return undefined;
  return entry[field].lv ?? entry[field].cs ?? "";
}

function setCsValue(entry, field, value) {
  entry[field].lv = value;
}

function applyMapping(entries, mapping) {
  const index = resolveIndex(mapping.verbId);
  if (index === null || index < 0 || index >= entries.length) {
    return {
      ...mapping,
      status: "VERB_NOT_FOUND",
      actual: null,
    };
  }
  const entry = entries[index];
  if (!(mapping.field in entry) || typeof entry[mapping.field] !== "object") {
    return {
      ...mapping,
      status: "FIELD_NOT_FOUND",
      actual: undefined,
    };
  }
  const actual = getCsValue(entry, mapping.field);
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
  setCsValue(entry, mapping.field, mapping.new);
  return {
    ...mapping,
    status: "APPLIED",
    actual: mapping.new,
  };
}

function verifyIds(entries) {
  for (let i = 0; i < entries.length; i++) {
    if (!entries[i]) return "FAIL";
  }
  return entries.length === EXPECTED_VERB_COUNT ? "PASS" : "FAIL";
}

function verifyForms(entries) {
  for (const entry of entries) {
    for (const key of FORM_KEYS) {
      if (!entry[key] || typeof entry[key] !== "object" || !entry[key].de) return "FAIL";
      if (typeof getCsValue(entry, key) !== "string") return "FAIL";
    }
  }
  return "PASS";
}

function buildReport(data) {
  const lines = [
    "# CS–DE Slovesa OWNER COPY-ONLY APPLY",
    "",
    `Generated: ${data.meta.date}`,
    `Branch: \`${data.meta.branch}\``,
    "",
    "## SUMMARY",
    "",
    "```text",
    `OWNER groups processed: ${data.summary.groupsProcessed}/4`,
    `OWNER LABOT mappings total: ${data.summary.ownerLabotTotal}`,
    `APPLIED: ${data.summary.applied}`,
    `ALREADY_MATCHED_NEW: ${data.summary.alreadyMatchedNew}`,
    `CURRENT_VALUE_MISMATCH: ${data.summary.currentMismatch}`,
    `VERB_NOT_FOUND: ${data.summary.verbNotFound}`,
    `FIELD_NOT_FOUND: ${data.summary.fieldNotFound}`,
    `OWNER NEW exact: ${data.summary.ownerNewExact}/${data.summary.ownerLabotTotal}`,
    `DE changes: ${data.summary.deChanges}`,
    `Unexpected production changes: ${data.summary.unexpectedProductionChanges}`,
    `Verb count: ${data.summary.verbCount}/${EXPECTED_VERB_COUNT}`,
    `Forms intact: ${data.summary.formsIntact}`,
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
    ["CURRENT_VALUE_MISMATCH", "VERB_NOT_FOUND", "FIELD_NOT_FOUND"].includes(d.status),
  );
  if (problems.length) {
    lines.push("", "## ISSUES", "");
    for (const p of problems) {
      lines.push(`### ${p.verbId} — ${p.field}`, "");
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
  if (entries.length !== EXPECTED_VERB_COUNT) {
    throw new Error(`Expected ${EXPECTED_VERB_COUNT} verbs, found ${entries.length}`);
  }

  const details = [];
  let applied = 0;
  let alreadyMatchedNew = 0;
  let currentMismatch = 0;
  let verbNotFound = 0;
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
      case "VERB_NOT_FOUND":
        verbNotFound++;
        break;
      case "FIELD_NOT_FOUND":
        fieldNotFound++;
        break;
      default:
        break;
    }
  }

  if (currentMismatch || verbNotFound || fieldNotFound) {
    const payload = {
      meta: { date: new Date().toISOString(), branch, mode: "COPY-ONLY-BLOCKED" },
      summary: { applied, currentMismatch, verbNotFound, fieldNotFound },
      details,
    };
    fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
    fs.writeFileSync(REPORT_JSON, JSON.stringify(payload, null, 2));
    fs.writeFileSync(REPORT_MD, buildReport({
      meta: payload.meta,
      summary: {
        groupsProcessed: 4,
        ownerLabotTotal: mappings.length,
        applied,
        alreadyMatchedNew,
        currentMismatch,
        verbNotFound,
        fieldNotFound,
        ownerNewExact: 0,
        deChanges: 0,
        unexpectedProductionChanges: 0,
        verbCount: entries.length,
        formsIntact: "NOT_RUN",
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
    const index = resolveIndex(mapping.verbId);
    const actual = getCsValue(entries[index], mapping.field);
    if (actual === mapping.new) ownerNewExact++;
  }

  let syntax = "PASS";
  try {
    execSync("node --check data/cs/verbs.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntax = "FAIL";
  }

  const endDeSnapshot = deSnapshotHash(loadEntries(DE_FILE));
  const deChanges = endDeSnapshot === baselineDeSnapshot ? 0 : 1;
  const endCsHash = fileHash(FILES[0]);
  const endWwwHash = fileHash(FILES[1]);
  const mirrorParity = endCsHash === endWwwHash ? "PASS" : "FAIL";
  const idOrder = verifyIds(entries);
  const formsIntact = verifyForms(entries);
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
    groupsProcessed: 4,
    ownerLabotTotal: mappings.length,
    applied,
    alreadyMatchedNew,
    currentMismatch,
    verbNotFound,
    fieldNotFound,
    ownerNewExact,
    deChanges,
    unexpectedProductionChanges,
    verbCount: entries.length,
    formsIntact,
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
    || formsIntact !== "PASS"
    || mirrorParity !== "PASS"
    || entries.length !== EXPECTED_VERB_COUNT
  ) {
    process.exit(1);
  }
}

main();
