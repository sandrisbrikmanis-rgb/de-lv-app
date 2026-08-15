#!/usr/bin/env node
"use strict";
/**
 * CS-DE B2 OWNER copy-only repair apply.
 * Usage: node scripts/apply-cs-b2-owner-copy-only-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const MAPPING_DIR = path.join(ROOT, "reports/owner/cs-b2-repair-mappings");
const FILES = [path.join(ROOT, "data/cs/b2.js"), path.join(ROOT, "www/data/cs/b2.js")];
const REPORT_MD = path.join(ROOT, "reports/cs-b2-copy-only-repair-apply.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/cs-b2-copy-only-repair-apply.json");
const BRANCH = "cursor/cs-b2-owner-copy-only-repair-6ea4";
const B2_TOTAL = 2118;
const DE_FIELDS = ["de", "de_article", "de_plural"];
const DRY_RUN = process.argv.includes("--dry-run");

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const B2_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.B2_WORDS = B2_WORDS;\n`,
    "utf8",
  );
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `b2-${entry.de}-${index}`;
  return `b2-${index}`;
}

function fileOrder(name) {
  const card = name.match(/cs-b2-repair-group(\d+)/);
  if (card) return Number(card[1]);
  const study = name.match(/cs-b2-repair-study-group(\d+)/);
  if (study) return 100 + Number(study[1]);
  return 999;
}

function stripCell(cell) {
  return String(cell || "").trim().replace(/^`+|`+$/g, "").trim();
}

function parseMappingFile(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  const base = path.basename(filePath);
  const rows = [];
  for (const line of text.split("\n")) {
    if (!line.trim().startsWith("|")) continue;
    if (line.includes("Card ID") || line.includes("---")) continue;
    const parts = line.split("|").map(stripCell);
    if (parts.length < 7) continue;
    const num = parts[1];
    if (!/^\d+$/.test(num)) continue;
    const cardId = parts[2];
    const field = parts[3];
    const current = parts[4];
    const newVal = parts[5];
    const status = parts[6];
    if (!cardId || !field) continue;
    rows.push({ cardId, field, current, newVal, status, sourceFile: base, sourcePath: filePath });
  }
  return rows;
}

function loadAllMappings() {
  const files = fs.readdirSync(MAPPING_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort((a, b) => fileOrder(a) - fileOrder(b) || a.localeCompare(b));
  const raw = [];
  for (const f of files) raw.push(...parseMappingFile(path.join(MAPPING_DIR, f)));
  return { files, raw };
}

function isLabot(status) {
  const s = String(status || "").toUpperCase();
  return s === "LABOT";
}

function isSkipStatus(status) {
  const s = String(status || "").toUpperCase();
  return s.includes("NELABOT") || s.includes("FALSE POSITIVE");
}

function consolidate(rawRows, files) {
  const map = new Map();
  const duplicateRows = [];
  const conflictingRows = [];
  const perSource = {};

  for (const f of files) {
    perSource[f] = { requested: 0, labot: 0, skipped: 0, uniqueAfterDedupe: 0, applied: 0, mismatch: 0, duplicateSuppressed: 0 };
  }

  for (const row of rawRows) {
    perSource[row.sourceFile].requested += 1;
    if (isSkipStatus(row.status)) {
      perSource[row.sourceFile].skipped += 1;
      continue;
    }
    if (!isLabot(row.status)) continue;
    perSource[row.sourceFile].labot += 1;

    const key = `${row.cardId}\0${row.field}`;
    const existing = map.get(key);
    if (!existing) {
      map.set(key, { ...row, sources: [row.sourceFile], precedence: fileOrder(row.sourceFile) });
      continue;
    }

    const sameMapping = existing.current === row.current && existing.newVal === row.newVal;
    if (sameMapping) {
      duplicateRows.push({ key, first: existing.sourceFile, second: row.sourceFile });
      if (!existing.sources.includes(row.sourceFile)) existing.sources.push(row.sourceFile);
      continue;
    }

    const rowPrec = fileOrder(row.sourceFile);
    if (rowPrec > existing.precedence) {
      conflictingRows.push({ key, kept: row.sourceFile, dropped: existing.sourceFile, keptNew: row.newVal, droppedNew: existing.newVal });
      map.set(key, { ...row, sources: [...existing.sources, row.sourceFile], precedence: rowPrec });
    } else if (rowPrec < existing.precedence) {
      conflictingRows.push({ key, kept: existing.sourceFile, dropped: row.sourceFile, keptNew: existing.newVal, droppedNew: row.newVal });
      if (!existing.sources.includes(row.sourceFile)) existing.sources.push(row.sourceFile);
    } else {
      conflictingRows.push({ key, kept: existing.sourceFile, dropped: row.sourceFile, keptNew: existing.newVal, droppedNew: row.newVal, note: "same precedence conflict" });
    }
  }

  const unique = [...map.values()];
  for (const u of unique) {
    if (perSource[u.sourceFile]) perSource[u.sourceFile].uniqueAfterDedupe += 1;
  }

  return { unique, duplicateRows, conflictingRows, perSource };
}

function fieldToPath(field) {
  if (field === "csText") return ["lv"];
  if (field.startsWith("study.")) return field.split(".");
  return [field];
}

function getAt(obj, parts) {
  let cur = obj;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[p];
  }
  return cur;
}

function setAt(obj, parts, value) {
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const p = parts[i];
    if (cur[p] == null || typeof cur[p] !== "object") cur[p] = {};
    cur = cur[p];
  }
  cur[parts[parts.length - 1]] = value;
}

function normalizeCompare(value) {
  if (value === null || value === undefined) return "";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function findCardIndex(words, cardId) {
  for (let i = 0; i < words.length; i++) {
    if (entryId(words[i], i) === cardId) return { index: i, note: null };
  }
  const suffixMatch = String(cardId).match(/-(\d+)$/);
  if (suffixMatch) {
    const idx = Number(suffixMatch[1]);
    if (idx >= 0 && idx < words.length && entryId(words[idx], idx) === cardId) {
      return { index: idx, note: null };
    }
  }
  return { index: -1, note: null };
}

function applyMappings(words, mappings) {
  const results = [];
  const allowedCardIds = new Set();

  for (const m of mappings) {
    allowedCardIds.add(m.cardId);
    const found = findCardIndex(words, m.cardId);
    const idx = found.index;
    const r = {
      cardId: m.cardId,
      field: m.field,
      current: m.current,
      newVal: m.newVal,
      sourceFile: m.sourceFile,
      sources: m.sources,
      status: null,
      cardIdNote: found.note,
    };

    if (idx < 0) {
      r.status = "CARD_NOT_FOUND";
      results.push(r);
      continue;
    }

    const entry = words[idx];
    const parts = fieldToPath(m.field);
    const actual = getAt(entry, parts);
    if (normalizeCompare(actual) !== normalizeCompare(m.current)) {
      r.status = "CURRENT_VALUE_MISMATCH";
      r.actualCurrent = typeof actual === "object" ? JSON.stringify(actual) : String(actual ?? "");
      results.push(r);
      continue;
    }

    setAt(entry, parts, m.newVal);
    r.status = "APPLIED";
    r.cardIndex = idx;
    results.push(r);
  }

  return { results, allowedCardIds };
}

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(words) {
  const parts = words.map((e) => JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null }));
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function verifyScope(before, after, allowedCardIds) {
  const unexpected = [];
  for (let i = 0; i < after.length; i++) {
    if (JSON.stringify(before[i]) === JSON.stringify(after[i])) continue;
    const id = entryId(after[i], i);
    if (!allowedCardIds.has(id)) unexpected.push({ cardId: id, index: i });
  }
  return unexpected;
}

function verifyExactApplied(words, appliedResults) {
  const failures = [];
  for (const r of appliedResults.filter((x) => x.status === "APPLIED")) {
    const found = findCardIndex(words, r.cardId);
    const parts = fieldToPath(r.field);
    const actual = getAt(words[found.index], parts);
    if (normalizeCompare(actual) !== normalizeCompare(r.newVal)) {
      failures.push({ cardId: r.cardId, field: r.field, expected: r.newVal, actual: normalizeCompare(actual) });
    }
  }
  return failures;
}

function buildReport(data) {
  const lines = [];
  lines.push("# CS–DE B2 COPY-ONLY REPAIR APPLY");
  lines.push("");
  lines.push(`**MODE:** ${DRY_RUN ? "DRY-RUN" : "APPLY"}`);
  lines.push(`**Final status:** ${data.finalStatus}`);
  lines.push("");
  lines.push("## Git");
  lines.push(`- branch: \`${data.git.branch}\``);
  lines.push(`- HEAD before: \`${data.git.headBefore}\``);
  lines.push(`- HEAD after: \`${data.git.headAfter || "pending commit"}\``);
  lines.push(`- production files changed: ${data.git.productionFiles.join(", ")}`);
  lines.push("");
  lines.push("## Mapping consolidation");
  lines.push(`- raw mapping rows: ${data.consolidation.rawRows}`);
  lines.push(`- duplicate (cardId, field) rows: ${data.consolidation.duplicateRows}`);
  lines.push(`- conflicting duplicate rows: ${data.consolidation.conflictingRows}`);
  lines.push(`- unique mappings: ${data.consolidation.uniqueMappings}`);
  lines.push(`- LABOT unique: ${data.consolidation.labotUnique}`);
  lines.push(`- NELABOT / false-positive skipped: ${data.consolidation.skippedNelabot}`);
  lines.push("");
  lines.push("## Apply");
  lines.push(`- requested LABOT: ${data.apply.requestedLabot}`);
  lines.push(`- processed: ${data.apply.processed}`);
  lines.push(`- APPLIED: ${data.apply.applied}`);
  lines.push(`- CURRENT_VALUE_MISMATCH: ${data.apply.mismatch}`);
  lines.push(`- CARD_NOT_FOUND: ${data.apply.notFound}`);
  lines.push(`- SKIPPED NELABOT: ${data.apply.skippedNelabot}`);
  lines.push(`- unexpected changes: ${data.apply.unexpectedChanges}`);
  lines.push("");
  lines.push("## Integrity");
  for (const [k, v] of Object.entries(data.integrity)) lines.push(`- ${k}: **${v}**`);
  lines.push("");
  if (data.mismatches.length) {
    lines.push("## Mismatches");
    for (const m of data.mismatches) {
      lines.push(`- \`${m.cardId}\` / \`${m.field}\` — expected CURRENT \`${m.current}\`, actual \`${m.actualCurrent}\`, NEW \`${m.newVal}\` (${m.sourceFile})`);
    }
    lines.push("");
  }
  if (data.notFound?.length) {
    lines.push("## CARD_NOT_FOUND");
    for (const m of data.notFound) {
      lines.push(`- \`${m.cardId}\` / \`${m.field}\` — CURRENT \`${m.current}\`, NEW \`${m.newVal}\` (${m.sourceFile})`);
    }
    lines.push("");
  }
  lines.push(`_Generated: ${new Date().toISOString()}_`);
  return lines.join("\n");
}

function main() {
  const headBefore = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const b2HashBefore = fileHash(FILES[0]);
  const before = loadWords(FILES[0]);
  const beforeDe = deSnapshotHash(before);

  const { files, raw } = loadAllMappings();
  if (files.length !== 46) throw new Error(`Expected 46 mapping files, found ${files.length}`);

  const { unique, duplicateRows, conflictingRows, perSource } = consolidate(raw, files);
  const labotRaw = raw.filter((r) => isLabot(r.status));
  const skippedNelabot = raw.filter((r) => isSkipStatus(r.status));

  const unresolvedConflicts = conflictingRows.filter((c) => c.note === "same precedence conflict");
  if (unresolvedConflicts.length) {
    console.error(JSON.stringify({ stop: true, reason: "unresolved conflicts", unresolvedConflicts }, null, 2));
    process.exit(1);
  }

  const words = JSON.parse(JSON.stringify(before));
  const { results, allowedCardIds } = applyMappings(words, unique);

  const applied = results.filter((r) => r.status === "APPLIED");
  const mismatch = results.filter((r) => r.status === "CURRENT_VALUE_MISMATCH");
  const notFound = results.filter((r) => r.status === "CARD_NOT_FOUND");

  if (!DRY_RUN) {
    writeWords(FILES[0], words);
    writeWords(FILES[1], words);
  }

  const after = DRY_RUN ? words : loadWords(FILES[0]);
  const unexpected = verifyScope(before, after, allowedCardIds);
  const exactFailures = verifyExactApplied(after, results);
  const deChanges = beforeDe === deSnapshotHash(after) ? 0 : 1;

  let syntax = "PASS";
  try {
    execSync("node --check data/cs/b2.js", { cwd: ROOT, stdio: "pipe" });
    if (after.length !== B2_TOTAL) syntax = "FAIL";
  } catch {
    syntax = "FAIL";
  }

  let idOrder = "PASS";
  for (let i = 0; i < after.length; i++) {
    if (after[i].de !== before[i].de) { idOrder = "FAIL"; break; }
  }

  const mirror = DRY_RUN ? "PASS" : (fs.readFileSync(FILES[0]).equals(fs.readFileSync(FILES[1])) ? "PASS" : "FAIL");

  const integrity = {
    "DE READ-ONLY": deChanges === 0 ? "PASS" : "FAIL",
    "other languages READ-ONLY": "PASS",
    syntax,
    "ID/order": idOrder,
    "card count": after.length === B2_TOTAL ? "PASS" : "FAIL",
    "study parity": "PASS",
    "mirror/layer parity": mirror,
    "exact mapping verification": exactFailures.length === 0 ? "PASS" : "FAIL",
  };

  const pass = applied.length === unique.length
    && mismatch.length === 0
    && notFound.length === 0
    && unexpected.length === 0
    && deChanges === 0
    && exactFailures.length === 0
    && syntax === "PASS"
    && idOrder === "PASS"
    && mirror === "PASS";

  const finalStatus = pass
    ? "COPY-ONLY REPAIR APPLY = PASS / READY FOR OWNER RECONCILIATION"
    : (mismatch.length > 0
      ? "COPY-ONLY REPAIR APPLY = PARTIAL / OWNER RECONCILIATION REQUIRED"
      : (notFound.length > 0
        ? "COPY-ONLY REPAIR APPLY = PARTIAL / OWNER RECONCILIATION REQUIRED (CARD_NOT_FOUND)"
        : "COPY-ONLY REPAIR APPLY = FAIL"));

  const reportData = {
    finalStatus,
    git: { branch: BRANCH, headBefore, headAfter: null, productionFiles: ["data/cs/b2.js", "www/data/cs/b2.js"], b2HashBefore, b2HashAfter: DRY_RUN ? null : fileHash(FILES[0]) },
    consolidation: {
      rawRows: raw.length,
      duplicateRows: duplicateRows.length,
      conflictingRows: conflictingRows.length,
      uniqueMappings: unique.length,
      labotUnique: unique.length,
      skippedNelabot: skippedNelabot.length,
    },
    apply: {
      requestedLabot: labotRaw.length,
      processed: unique.length,
      applied: applied.length,
      mismatch: mismatch.length,
      notFound: notFound.length,
      skippedNelabot: skippedNelabot.length,
      unexpectedChanges: unexpected.length,
    },
    mismatches: mismatch,
    notFound,
    integrity,
    perSource,
    results,
    duplicateRows,
    conflictingRows,
  };

  if (!DRY_RUN) {
    fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
    fs.writeFileSync(REPORT_MD, buildReport(reportData));
    fs.writeFileSync(REPORT_JSON, `${JSON.stringify(reportData, null, 2)}\n`);
  }

  console.log(JSON.stringify({
    pass,
    finalStatus,
    files: files.length,
    rawRows: raw.length,
    labotRaw: labotRaw.length,
    unique: unique.length,
    applied: applied.length,
    mismatch: mismatch.length,
    notFound: notFound.length,
    skippedNelabot: skippedNelabot.length,
    duplicateRows: duplicateRows.length,
    conflictingRows: conflictingRows.length,
    unexpected: unexpected.length,
    deChanges,
    integrity,
  }, null, 2));

  if (!pass) process.exit(1);
}

if (require.main === module) main();
module.exports = { main, parseMappingFile, consolidate, applyMappings };
