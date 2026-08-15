#!/usr/bin/env node
"use strict";
/**
 * CS-DE C1 — 3 CURRENT_VALUE_MISMATCH micro-repair (dash reconciliation).
 * Usage: node scripts/apply-cs-c1-3-mismatch-micro-repair.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..");
const FILES = [path.join(ROOT, "data/cs/c1.js"), path.join(ROOT, "www/data/cs/c1.js")];
const REPORT_MD = path.join(ROOT, "reports/cs-c1-3-mismatch-micro-repair.md");
const REPORT_JSON = path.join(ROOT, "reports/temp/cs-c1-3-mismatch-micro-repair.json");
const EXPECTED_CARD_COUNT = 572;
const DE_FIELDS = ["de", "de_article", "de_plural"];

const MAPPINGS = [
  {
    cardId: "c1-wahlberechtigt",
    field: "study.explanation",
    current:
      "Hlavní myšlenka: wahlberechtig je přídavné jméno, které znamená, že osoba má právo účastnit se voleb – volit nebo kandidovat ve volbách. Složení: Wahl (volby) + behrechtig (oprávněný).",
    new:
      "Hlavní myšlenka: wahlberechtigt je přídavné jméno, které znamená, že osoba má právo volit. Složení: Wahl (volby) + berechtigt (oprávněný).",
  },
  {
    cardId: "c1-beabsichtigen",
    field: "study.explanation[5]",
    current: "Beabsichtigen znamená záměrně zamýšlet nebo plánovat akci – ne vztah, ale záměr.",
    new: "Beabsichtigen znamená zamýšlet nebo plánovat určitou činnost – jde o záměr, nikoli o vztah.",
  },
  {
    cardId: "c1-voraussetzen",
    field: "study.important[0]",
    current: "Voraussetzen je střední rod — předložka.",
    new: "Voraussetzen je sloveso znamenající „předpokládat“; vyjadřuje předpoklad.",
  },
];

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

function parseFieldPath(field) {
  const parts = [];
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(field)) !== null) {
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
    if (cur[parts[i]] == null) return false;
    cur = cur[parts[i]];
  }
  const last = parts[parts.length - 1];
  if (cur == null || cur[last] === undefined) return false;
  cur[last] = value;
  return true;
}

function deSnapshotHash(words) {
  const parts = words.map((e) =>
    JSON.stringify({ de: e.de, de_article: e.de_article ?? null, de_plural: e.de_plural ?? null }),
  );
  return crypto.createHash("sha256").update(parts.join("\n")).digest("hex");
}

function fileHash(filePath) {
  return crypto.createHash("sha256").update(fs.readFileSync(filePath)).digest("hex");
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

function renderReport(stats, details) {
  const lines = [
    "# CS–DE C1 — 3 CURRENT_VALUE_MISMATCH Micro-Repair",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "## Summary",
    "",
    "| Metric | Value |",
    "|--------|------:|",
    `| requested | ${stats.requested} |`,
    `| processed | ${stats.processed}/${stats.requested} |`,
    `| APPLIED | ${stats.applied} |`,
    `| CURRENT_VALUE_MISMATCH | ${stats.currentMismatch} |`,
    `| CARD_NOT_FOUND | ${stats.cardNotFound} |`,
    `| FIELD_NOT_FOUND | ${stats.fieldNotFound} |`,
    "",
    "## Integrity",
    "",
    "| Check | Result |",
    "|-------|--------|",
    `| OWNER NEW exact | ${stats.ownerNewExact}/${stats.requested} |`,
    `| DE changes | ${stats.deChanges} |`,
    `| Unexpected changes | ${stats.unexpectedChanges} |`,
    `| Syntax | ${stats.syntax} |`,
    `| ID/order | ${stats.idOrder ? "PASS" : "FAIL"} |`,
    `| Card count | ${stats.cardCount}/${EXPECTED_CARD_COUNT} |`,
    `| Mirror/parity | ${stats.mirrorParity ? "PASS" : "FAIL"} |`,
    "",
    "## Mappings",
    "",
  ];
  for (const d of details) {
    lines.push(`### ${d.cardId} — ${d.field}`, "");
    lines.push(`- Status: **${d.status}**`);
    lines.push(`- CURRENT: ${d.current}`);
    lines.push(`- NEW: ${d.new}`);
    if (d.actual != null) lines.push(`- Actual production before apply: ${d.actual}`);
    lines.push("");
  }
  return lines.join("\n");
}

function main() {
  const baseline = loadWords(FILES[0]);
  const baselineCopy = JSON.parse(JSON.stringify(baseline));
  const baselineDeHash = deSnapshotHash(baseline);
  const byId = new Map();
  baseline.forEach((entry, index) => byId.set(entryId(entry, index), { entry, index }));

  const details = [];
  let applied = 0;
  let currentMismatch = 0;
  let cardNotFound = 0;
  let fieldNotFound = 0;

  for (const mapping of MAPPINGS) {
    const rec = byId.get(mapping.cardId);
    const result = { ...mapping, status: null, actual: null };
    if (!rec) {
      result.status = "CARD_NOT_FOUND";
      cardNotFound++;
      details.push(result);
      continue;
    }
    const parts = parseFieldPath(mapping.field);
    const actual = getAt(rec.entry, parts);
    result.actual = actual;
    if (actual === undefined) {
      result.status = "FIELD_NOT_FOUND";
      fieldNotFound++;
      details.push(result);
      continue;
    }
    if (actual !== mapping.current) {
      result.status = "CURRENT_VALUE_MISMATCH";
      currentMismatch++;
      details.push(result);
      continue;
    }
    if (actual === mapping.new) {
      result.status = "ALREADY_MATCHED_NEW";
      details.push(result);
      continue;
    }
    if (!setAt(rec.entry, parts, mapping.new)) {
      result.status = "FIELD_NOT_FOUND";
      fieldNotFound++;
      details.push(result);
      continue;
    }
    result.status = "APPLIED";
    applied++;
    details.push(result);
  }

  const deAfter = deSnapshotHash(baseline);
  if (deAfter !== baselineDeHash) throw new Error("FAIL — DE changes detected");

  const allowedByCard = new Map();
  for (const m of MAPPINGS) {
    if (!allowedByCard.has(m.cardId)) allowedByCard.set(m.cardId, new Set());
    allowedByCard.get(m.cardId).add(m.field);
  }

  const unexpected = [];
  for (let i = 0; i < baseline.length; i++) {
    const b = baselineCopy[i];
    const a = baseline[i];
    const id = entryId(b, i);
    if (JSON.stringify(b) === JSON.stringify(a)) continue;
    const leafChanges = [];
    walkDiff(b, a, "", leafChanges);
    const allowed = allowedByCard.get(id) || new Set();
    for (const ch of leafChanges) {
      let ok = false;
      for (const field of allowed) {
        const norm = field.replace(/\.(\d+)(?=\.|$)/g, "[$1]");
        if (ch.path === field || ch.path === norm || ch.path.startsWith(`${field}.`) || ch.path.startsWith(`${norm}.`)) {
          ok = true;
          break;
        }
      }
      if (!ok) unexpected.push({ cardId: id, path: ch.path, before: ch.before, after: ch.after });
    }
  }

  let ownerNewExact = 0;
  for (const mapping of MAPPINGS) {
    const rec = byId.get(mapping.cardId);
    if (!rec) continue;
    const actual = getAt(rec.entry, parseFieldPath(mapping.field));
    if (actual === mapping.new) ownerNewExact++;
  }

  if (unexpected.length) throw new Error(`Unexpected changes: ${JSON.stringify(unexpected)}`);
  if (applied !== 3) throw new Error(`Expected 3 APPLIED, got ${applied}`);
  if (currentMismatch !== 0) throw new Error(`CURRENT_VALUE_MISMATCH must be 0, got ${currentMismatch}`);
  if (ownerNewExact !== 3) throw new Error(`OWNER NEW exact must be 3/3, got ${ownerNewExact}`);

  for (const file of FILES) writeWords(file, baseline);

  const syntax = (() => {
    try {
      loadWords(FILES[0]);
      return "PASS";
    } catch (e) {
      return `FAIL: ${e.message}`;
    }
  })();

  let idOrder = true;
  for (let i = 0; i < baseline.length; i++) {
    if (baseline[i].de !== baselineCopy[i].de || entryId(baseline[i], i) !== entryId(baselineCopy[i], i)) {
      idOrder = false;
      break;
    }
  }

  const stats = {
    requested: 3,
    processed: 3,
    applied,
    currentMismatch,
    cardNotFound,
    fieldNotFound,
    ownerNewExact,
    deChanges: 0,
    unexpectedChanges: unexpected.length,
    syntax,
    idOrder,
    cardCount: baseline.length,
    mirrorParity: fileHash(FILES[0]) === fileHash(FILES[1]),
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify({ stats, details, unexpected }, null, 2));
  fs.writeFileSync(REPORT_MD, renderReport(stats, details));

  console.log(JSON.stringify(stats, null, 2));
  if (stats.cardCount !== EXPECTED_CARD_COUNT) throw new Error("Card count mismatch");
  if (!stats.mirrorParity) throw new Error("Mirror parity failed");
  if (!stats.idOrder) throw new Error("ID/order failed");
  if (syntax !== "PASS") throw new Error(`Syntax failed: ${syntax}`);
}

main();
