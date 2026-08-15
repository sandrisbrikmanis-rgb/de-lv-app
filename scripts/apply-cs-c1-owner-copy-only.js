#!/usr/bin/env node
"use strict";
/**
 * CS-DE C1 — OWNER approved COPY-ONLY apply from cs-c1-owner-approved-master-repair.md
 * Usage: node scripts/apply-cs-c1-owner-copy-only.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..");
const MASTER = path.join(ROOT, "cs-c1-owner-approved-master-repair.md");
const FILES = [path.join(ROOT, "data/cs/c1.js"), path.join(ROOT, "www/data/cs/c1.js")];
const REPORT_MD = path.join(ROOT, "reports/cs-c1-owner-copy-only-apply.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/cs-c1-owner-copy-only-apply.json");
const EXPECTED_CARD_COUNT = 572;
const DE_FIELDS = ["de", "de_article", "de_plural"];

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.C1_WORDS;
}

function writeWords(filePath, words) {
  fs.writeFileSync(
    filePath,
    `const C1_WORDS = ${JSON.stringify(words, null, 2)};\n\nwindow.C1_WORDS = C1_WORDS;\n`,
    "utf8",
  );
}

function entryId(entry, index) {
  if (entry.study?.id) return entry.study.id;
  if (entry.id) return entry.id;
  if (entry.de) return `c1-${entry.de}-${index}`;
  return `c1-${index}`;
}

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
}

function deSnapshotHash(words) {
  const parts = words.map((e) =>
    JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null }),
  );
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function serializeDe(entry) {
  const o = {};
  for (const f of DE_FIELDS) o[f] = entry[f] ?? null;
  return JSON.stringify(o);
}

function normalizeField(field) {
  if (field === "csText") return "lv";
  return field;
}

function parseFieldPath(field) {
  const nf = normalizeField(field);
  const parts = [];
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(nf)) !== null) {
    parts.push(m[1] !== undefined ? m[1] : Number(m[2]));
  }
  return parts;
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
    if (cur[p] == null) return false;
    cur = cur[p];
  }
  const last = parts[parts.length - 1];
  if (cur == null || cur[last] === undefined) return false;
  cur[last] = value;
  return true;
}

function valueToString(val) {
  if (val === null || val === undefined) return "";
  if (typeof val === "object") return JSON.stringify(val);
  return String(val);
}

function valuesEqual(a, b) {
  if (typeof a === "object" || typeof b === "object") {
    return JSON.stringify(a) === JSON.stringify(b);
  }
  return String(a) === String(b);
}

function parseJsonish(str) {
  const s = str.trim();
  if (!s) return "";
  if (s.startsWith("[") || s.startsWith("{")) {
    try {
      return JSON.parse(s);
    } catch {
      /* fall through */
    }
  }
  const unescaped = s.replace(/\\\[/g, "[").replace(/\\\]/g, "]").replace(/\\"/g, '"');
  if (unescaped.startsWith("[") || unescaped.startsWith("{")) {
    try {
      return JSON.parse(unescaped);
    } catch {
      /* fall through */
    }
  }
  return s;
}

function isContinuationLine(line) {
  if (!/^\s{8,}\S/.test(line)) return false;
  const trimmed = line.trim();
  if (/^[-=]{5,}$/.test(trimmed)) return false;
  if (/Card ID/i.test(line)) return false;
  if (/^\\?#/.test(trimmed)) return false;
  if (/^[-]{3,}\s+[-]{3,}/.test(trimmed)) return false;
  return true;
}

function splitBulletColumns(text) {
  const trimmed = text.replace(/\s+/g, " ").trim();
  const m = trimmed.match(/^(.+? • .+?)\s+(.+? • .+)$/);
  if (m) return { current: m[1].trim(), new: m[2].trim() };
  return null;
}

function splitCurrentNew(contentLines) {
  const currentParts = [];
  const newParts = [];
  let splitPos = null;

  for (let i = 0; i < contentLines.length; i++) {
    const line = contentLines[i];
    if (!line.trim()) continue;

    if (i === 0) {
      const m = line.match(/^\s*(.*?)\s{2,}(.*?)\s*$/);
      if (m) {
        const left = m[1].trim();
        const right = m[2].trim();
        if (left) currentParts.push(left);
        if (right) newParts.push(right);
        const leftStart = line.indexOf(left);
        if (leftStart >= 0 && right) {
          const rightStart = line.indexOf(right, leftStart + left.length);
          if (rightStart >= 0) splitPos = rightStart;
        }
        continue;
      }
    }

    if (splitPos != null && i > 0) {
      const left = line.slice(0, splitPos).trim();
      const right = line.slice(splitPos).trim();
      if (left) currentParts.push(left);
      if (right) newParts.push(right);
      continue;
    }

    const m = line.match(/^\s*(.*?)\s{2,}(.*?)\s*$/);
    if (m) {
      const left = m[1].trim();
      const right = m[2].trim();
      if (left) currentParts.push(left);
      if (right) newParts.push(right);
      continue;
    }

    const leading = (line.match(/^(\s*)/) || ["", ""])[1].length;
    const trimmed = line.trim();
    if (leading >= 40) newParts.push(trimmed);
    else currentParts.push(trimmed);
  }

  let current = currentParts.join(" ");
  let next = newParts.join(" ");
  if (!current || !next) {
    const bullet = splitBulletColumns(contentLines.join(" "));
    if (bullet) {
      current = bullet.current;
      next = bullet.new;
    }
  }
  return { current, new: next };
}

function parseMasterMappings(content) {
  const lines = content.split(/\r?\n/);
  let columns = null;
  const rows = [];
  let buf = [];

  function detectColumns(line) {
    if (!line.includes("CURRENT") || !line.includes("NEW") || !line.includes("Card ID")) return null;
    const currentIdx = line.indexOf("CURRENT");
    const newIdx = line.indexOf("NEW");
    const statusIdx = line.indexOf("Status");
    if (currentIdx < 0 || newIdx < 0 || statusIdx < 0 || newIdx <= currentIdx) return null;
    return { current: currentIdx, new: newIdx, status: statusIdx };
  }

  function extractColumns(line, cols) {
    return {
      current: line.slice(cols.current, cols.new).trim(),
      new: line.slice(cols.new, cols.status).trim(),
    };
  }

  function flush() {
    if (!buf.length || !columns) {
      buf = [];
      return;
    }
    const block = buf.join("\n");
    buf = [];
    const statusMatch = block.match(/\*\*(LABOT|NELABOT|FALSE_POSITIVE)\*\*/);
    if (!statusMatch) return;
    const status = statusMatch[1];
    const head = block.replace(/\*\*(LABOT|NELABOT|FALSE_POSITIVE)\*\*/, "");
    const idField = head.match(/`(c1-[^`]+)`\s+`([^`]+)`/);
    if (!idField) return;
    const cardId = idField[1];
    const field = idField[2];
    const currentParts = [];
    const newParts = [];
    for (const line of head.split("\n")) {
      if (!line.trim()) continue;
      const { current, new: next } = extractColumns(line, columns);
      if (current) currentParts.push(current);
      if (next) newParts.push(next);
    }
    rows.push({
      cardId,
      field,
      current: currentParts.join(" "),
      new: newParts.join(" "),
      status,
      rawContent: head,
    });
  }

  for (const line of lines) {
    const cols = detectColumns(line);
    if (cols) {
      flush();
      columns = cols;
      continue;
    }
    if (/^\s*#{1,6}\s/.test(line)) {
      flush();
      continue;
    }
    if (/^\s+\d+\s+`c1-/.test(line)) {
      flush();
      buf = [line];
    } else if (buf.length && isContinuationLine(line)) {
      buf.push(line);
    } else if (buf.length && /^\s*[-=]{5,}\s*$/.test(line.trim())) {
      flush();
    }
  }
  flush();
  return rows;
}

function refineMappingUsingProduction(row, entry) {
  const parts = parseFieldPath(row.field);
  const actual = getAt(entry, parts);
  if (actual === undefined) return row;
  if (valuesEqual(parseJsonish(row.current), actual)) return row;

  const actualForCompare = typeof actual === "object" ? JSON.stringify(actual) : String(actual);
  const flat = (row.rawContent || "").replace(/\s+/g, " ").trim();
  const flatActual = actualForCompare.replace(/\s+/g, " ").trim();

  let idx = flat.indexOf(flatActual);
  if (idx === -1 && typeof actual === "object") idx = flat.indexOf(actualForCompare);
  if (idx < 0) return row;

  let newText = flat.slice(idx + flatActual.length).trim();
  if (!newText && row.new) newText = row.new.replace(/\s+/g, " ").trim();

  const refined = {
    ...row,
    current: typeof actual === "object" ? actualForCompare : String(actual),
    new: newText || row.new,
  };

  if (typeof actual === "object" || String(row.new || "").trim().startsWith("[") || String(row.new || "").trim().startsWith("{")) {
    refined.new = parseJsonish(refined.new);
    if (typeof refined.new !== "object") refined.new = row.new;
  }

  return refined;
}

function refineMappings(rows, byId) {
  return rows.map((row) => {
    const rec = byId.get(row.cardId);
    if (!rec) return row;
    return refineMappingUsingProduction(row, rec.entry);
  });
}

function dedupeMappings(rows) {
  const raw = rows.length;
  const skipped = rows.filter((r) => r.status !== "LABOT").length;
  const labotRows = rows.filter((r) => r.status === "LABOT");
  const byKey = new Map();
  const conflicts = [];

  for (const row of labotRows) {
    const key = `${row.cardId}\x1f${row.field}`;
    if (!byKey.has(key)) {
      byKey.set(key, row);
      continue;
    }
    const prev = byKey.get(key);
    if (
      JSON.stringify(prev.new) !== JSON.stringify(row.new) ||
      JSON.stringify(prev.current) !== JSON.stringify(row.current)
    ) {
      conflicts.push({ cardId: row.cardId, field: row.field, existing: prev, incoming: row });
    }
  }

  const unique = [...byKey.values()].filter((row) => {
    const key = `${row.cardId}\x1f${row.field}`;
    const conflict = conflicts.find((c) => `${c.cardId}\x1f${c.field}` === key);
    return !conflict;
  });

  return { raw, skipped, labotRows: labotRows.length, unique, conflicts };
}

function buildCardIndex(words) {
  const byId = new Map();
  words.forEach((entry, index) => {
    byId.set(entryId(entry, index), { entry, index });
  });
  return byId;
}

function applyMapping(words, byId, mapping) {
  const { cardId, field, current, new: newVal } = mapping;
  const parts = parseFieldPath(field);
  const rec = byId.get(cardId);
  const result = {
    cardId,
    field,
    current,
    new: newVal,
    status: null,
    actual: null,
  };

  if (!rec) {
    result.status = "CARD_NOT_FOUND";
    return result;
  }

  const { entry } = rec;
  const actual = getAt(entry, parts);
  if (actual === undefined) {
    result.status = "FIELD_NOT_FOUND";
    return result;
  }

  const expectedCurrent = parseJsonish(current);
  const targetNew = parseJsonish(newVal);
  result.actual = actual;

  if (!valuesEqual(actual, expectedCurrent)) {
    result.status = "CURRENT_VALUE_MISMATCH";
    result.actualString = valueToString(actual);
    result.expectedString = valueToString(expectedCurrent);
    return result;
  }

  if (valuesEqual(actual, targetNew)) {
    result.status = "ALREADY_MATCHED_NEW";
    return result;
  }

  const ok = setAt(entry, parts, typeof targetNew === "object" ? JSON.parse(JSON.stringify(targetNew)) : targetNew);
  if (!ok) {
    result.status = "FIELD_NOT_FOUND";
    return result;
  }

  result.status = "APPLIED";
  return result;
}

function verifyPostApply(words, byId, mapping) {
  const parts = parseFieldPath(mapping.field);
  const rec = byId.get(mapping.cardId);
  if (!rec) return false;
  const actual = getAt(rec.entry, parts);
  const targetNew = parseJsonish(mapping.new);
  return valuesEqual(actual, targetNew);
}

function normalizeDiffPath(path) {
  return path.replace(/\.(\d+)(?=\.|$)/g, "[$1]");
}

function isAllowedChangePath(path, allowed) {
  for (const a of allowed) {
    if (path === a) return true;
    if (path.startsWith(`${a}[`) || path.startsWith(`${a}.`)) return true;
    const normA = normalizeDiffPath(a);
    if (path === normA || path.startsWith(`${normA}[`) || path.startsWith(`${normA}.`)) return true;
  }
  return false;
}

function collectUnexpectedChanges(before, after, allowedByCard) {
  const unexpected = [];
  for (let i = 0; i < before.length; i++) {
    const b = before[i];
    const a = after[i];
    const id = entryId(b, i);
    if (JSON.stringify(b) === JSON.stringify(a)) continue;
    const leafChanges = [];
    walkDiff(b, a, "", leafChanges);
    const allowed = allowedByCard.get(id) || new Set();
    for (const ch of leafChanges) {
      const normPath = normalizeDiffPath(ch.path);
      if (!isAllowedChangePath(ch.path, allowed) && !isAllowedChangePath(normPath, allowed)) {
        unexpected.push({ cardId: id, index: i, path: ch.path, before: ch.before, after: ch.after });
      }
    }
  }
  return unexpected;
}

function walkDiff(before, after, prefix, out) {
  if (JSON.stringify(before) === JSON.stringify(after)) return;
  const bObj = before !== null && typeof before === "object";
  const aObj = after !== null && typeof after === "object";
  if (!bObj || !aObj || Array.isArray(before) !== Array.isArray(after)) {
    out.push({ path: prefix || "(root)", before, after });
    return;
  }
  if (Array.isArray(before)) {
    const max = Math.max(before.length, after.length);
    for (let i = 0; i < max; i++) walkDiff(before[i], after[i], `${prefix}[${i}]`, out);
    return;
  }
  const keys = new Set([...Object.keys(before || {}), ...Object.keys(after || {})]);
  for (const key of keys) {
    const next = prefix ? `${prefix}.${key}` : key;
    walkDiff(before[key], after[key], next, out);
  }
}

function verifySyntax(filePath) {
  try {
    loadWords(filePath);
    return "PASS";
  } catch (e) {
    return `FAIL: ${e.message}`;
  }
}

function verifyIdOrder(words, baseline) {
  if (words.length !== baseline.length) return false;
  for (let i = 0; i < words.length; i++) {
    if (words[i].de !== baseline[i].de) return false;
    if (entryId(words[i], i) !== entryId(baseline[i], i)) return false;
  }
  return true;
}

function renderReport(stats, details) {
  const lines = [
    "# CS–DE C1 — OWNER COPY-ONLY Apply",
    "",
    `Generated: ${new Date().toISOString()}`,
    `Source: \`cs-c1-owner-approved-master-repair.md\``,
    "",
    "## Summary",
    "",
    "| Metric | Count |",
    "|--------|------:|",
    `| Raw mapping rows | ${stats.raw} |`,
    `| LABOT rows | ${stats.labotRows} |`,
    `| Unique LABOT mappings | ${stats.uniqueLabot} |`,
    `| APPLIED | ${stats.applied} |`,
    `| ALREADY_MATCHED_NEW | ${stats.alreadyMatchedNew} |`,
    `| CURRENT_VALUE_MISMATCH | ${stats.currentMismatch} |`,
    `| CARD_NOT_FOUND | ${stats.cardNotFound} |`,
    `| FIELD_NOT_FOUND | ${stats.fieldNotFound} |`,
    `| OWNER_MAPPING_CONFLICT | ${stats.conflicts} |`,
    `| SKIPPED NELABOT/FALSE_POSITIVE | ${stats.skipped} |`,
    "",
    "## Integrity",
    "",
    `| Check | Result |`,
    `|-------|--------|`,
    `| OWNER NEW exact | ${stats.ownerNewExact ? "PASS" : "FAIL"} |`,
    `| DE changes | ${stats.deChanges} |`,
    `| Unexpected changes | ${stats.unexpectedChanges} |`,
    `| Syntax | ${stats.syntax} |`,
    `| ID/order | ${stats.idOrder ? "PASS" : "FAIL"} |`,
    `| Card count | ${stats.cardCount}/${EXPECTED_CARD_COUNT} |`,
    `| Mirror/parity | ${stats.mirrorParity ? "PASS" : "FAIL"} |`,
    "",
  ];

  const problemStatuses = new Set([
    "CURRENT_VALUE_MISMATCH",
    "CARD_NOT_FOUND",
    "FIELD_NOT_FOUND",
    "OWNER_MAPPING_CONFLICT",
  ]);
  const problems = details.filter((d) => problemStatuses.has(d.status));
  if (problems.length) {
    lines.push("## Issues", "");
    for (const p of problems) {
      lines.push(`### ${p.cardId} — ${p.field}`, "");
      lines.push(`- Status: **${p.status}**`);
      if (p.current != null) lines.push(`- CURRENT: ${p.current}`);
      if (p.new != null) lines.push(`- NEW: ${p.new}`);
      if (p.actualString != null) lines.push(`- Actual production value: ${p.actualString}`);
      if (p.expectedString != null) lines.push(`- Expected CURRENT: ${p.expectedString}`);
      if (p.conflict) {
        lines.push(`- Conflict A NEW: ${p.conflict.existing.new}`);
        lines.push(`- Conflict B NEW: ${p.conflict.incoming.new}`);
      }
      lines.push("");
    }
  }

  return lines.join("\n");
}

function main() {
  if (!fs.existsSync(MASTER)) throw new Error(`Missing master file: ${MASTER}`);
  const content = fs.readFileSync(MASTER, "utf8");
  const parsedRows = parseMasterMappings(content);
  const { raw, skipped, labotRows, unique, conflicts } = dedupeMappings(parsedRows);

  const baseline = loadWords(FILES[0]);
  const baselineDeHash = deSnapshotHash(baseline);
  const baselineCopy = JSON.parse(JSON.stringify(baseline));
  const byId = buildCardIndex(baseline);

  const details = [];
  let applied = 0;
  let alreadyMatchedNew = 0;
  let currentMismatch = 0;
  let cardNotFound = 0;
  let fieldNotFound = 0;

  for (const conflict of conflicts) {
    details.push({
      cardId: conflict.cardId,
      field: conflict.field,
      status: "OWNER_MAPPING_CONFLICT",
      current: conflict.existing.current,
      new: conflict.existing.new,
      conflict,
    });
  }

  const conflictKeys = new Set(conflicts.map((c) => `${c.cardId}\x1f${c.field}`));

  for (const mapping of unique) {
    if (conflictKeys.has(`${mapping.cardId}\x1f${mapping.field}`)) continue;
    const result = applyMapping(baseline, byId, mapping);
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

  let ownerNewExact = true;
  for (const mapping of unique) {
    if (conflictKeys.has(`${mapping.cardId}\x1f${mapping.field}`)) continue;
    const detail = details.find((d) => d.cardId === mapping.cardId && d.field === mapping.field);
    if (!detail || !["APPLIED", "ALREADY_MATCHED_NEW"].includes(detail.status)) continue;
    if (!verifyPostApply(baseline, byId, mapping)) {
      ownerNewExact = false;
    }
  }

  const deAfter = deSnapshotHash(baseline);
  const deChanges = deAfter !== baselineDeHash ? 1 : 0;
  if (deChanges) throw new Error("FAIL — DE changes detected");

  const allowedByCard = new Map();
  for (const mapping of unique) {
    if (conflictKeys.has(`${mapping.cardId}\x1f${mapping.field}`)) continue;
    const normField = normalizeField(mapping.field);
    if (!allowedByCard.has(mapping.cardId)) allowedByCard.set(mapping.cardId, new Set());
    allowedByCard.get(mapping.cardId).add(normField);
  }
  const unexpected = collectUnexpectedChanges(baselineCopy, baseline, allowedByCard);

  if (unexpected.length) {
    console.error("Unexpected changes:", unexpected.slice(0, 10));
    throw new Error("Unexpected production changes detected");
  }
  if (!ownerNewExact) throw new Error("OWNER NEW exact validation failed");
  const cardCount = baseline.length;
  if (cardCount !== EXPECTED_CARD_COUNT) throw new Error(`Card count ${cardCount} != ${EXPECTED_CARD_COUNT}`);

  for (const file of FILES) writeWords(file, baseline);

  const mirrorParity = fileHash(FILES[0]) === fileHash(FILES[1]);
  const syntax = verifySyntax(FILES[0]);
  const idOrder = verifyIdOrder(baseline, baselineCopy);

  const stats = {
    raw,
    labotRows,
    uniqueLabot: unique.length - conflicts.length,
    applied,
    alreadyMatchedNew,
    currentMismatch,
    cardNotFound,
    fieldNotFound,
    conflicts: conflicts.length,
    skipped,
    ownerNewExact,
    deChanges: 0,
    unexpectedChanges: unexpected.length,
    syntax,
    idOrder,
    cardCount,
    mirrorParity,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify({ stats, details, unexpected }, null, 2));
  fs.writeFileSync(REPORT_MD, renderReport(stats, details));

  if (!mirrorParity) throw new Error("Mirror parity failed");
  if (!idOrder) throw new Error("ID/order failed");
  if (syntax !== "PASS") throw new Error(`Syntax failed: ${syntax}`);

  console.log(JSON.stringify(stats, null, 2));
}

if (require.main === module) {
  main();
} else {
  module.exports = {
    parseMasterMappings,
    parseFieldPath,
    getAt,
    parseJsonish,
    normalizeField,
    valuesEqual,
    loadOwnerLabotMappings(filePath) {
      const content = fs.readFileSync(filePath, "utf8");
      return parseMasterMappings(content).filter((r) => r.status === "LABOT");
    },
  };
}
