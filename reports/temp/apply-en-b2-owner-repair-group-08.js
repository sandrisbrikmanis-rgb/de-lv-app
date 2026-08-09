#!/usr/bin/env node
/**
 * Apply EN-DE B2 OWNER-decided Group 7 (items 351-400): 48 APPLY + 2 KEEP.
 * Usage: node reports/temp/apply-en-b2-owner-repair-group-08.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..", "..");
const REPAIRS_JSON = path.join(__dirname, "en-b2-owner-repair-group-08-repairs.json");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");
const APPLY_LOG = path.join(__dirname, "en-b2-owner-repair-group-08-apply-log.json");
const DRY_RUN = process.argv.includes("--dry-run");

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function loadWords(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function writeB2(filePath, data) {
  const json = JSON.stringify(data, null, 2);
  fs.writeFileSync(filePath, `const B2_WORDS = ${json};\n\nwindow.B2_WORDS = B2_WORDS;\n`, "utf8");
}

function normalizeFieldPath(fieldPath) {
  let p = String(fieldPath || "");
  if (p === "en") return "lv";
  if (p.startsWith("study.")) {
    p = p.replace(/\.examples\[(\d+)\]\.en\b/g, ".examples[$1].lv");
    p = p.replace(/\.examples\.(\d+)\.en\b/g, ".examples.$1.lv");
  }
  return p;
}

function parsePath(fieldPath) {
  return String(fieldPath)
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean);
}

function getAt(root, fieldPath) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (const part of parts) {
    if (cur == null) return undefined;
    const key = /^\d+$/.test(part) ? parseInt(part, 10) : part;
    cur = cur[key];
  }
  return cur;
}

function setAt(root, fieldPath, value) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = /^\d+$/.test(parts[i]) ? parseInt(parts[i], 10) : parts[i];
    if (cur[key] == null) return false;
    cur = cur[key];
  }
  const lastKey = /^\d+$/.test(parts[parts.length - 1])
    ? parseInt(parts[parts.length - 1], 10)
    : parts[parts.length - 1];
  cur[lastKey] = value;
  return true;
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function normalizeCardId(cardId) {
  return String(cardId || "")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ä/g, "ae")
    .replace(/ß/g, "ss");
}

function buildIndex(words) {
  const byCardId = new Map();
  const byStudyId = new Map();
  words.forEach((entry, index) => {
    const id = entryId(entry, index);
    byCardId.set(id, entry);
    byCardId.set(normalizeCardId(id), entry);
    if (entry.study?.id) {
      byStudyId.set(entry.study.id, entry);
      byStudyId.set(normalizeCardId(entry.study.id), entry);
    }
  });
  return { byCardId, byStudyId };
}

function findEntry(index, cardId) {
  const ids = [cardId, normalizeCardId(cardId)];
  for (const id of ids) {
    if (index.byCardId.has(id)) return index.byCardId.get(id);
    if (index.byStudyId.has(id)) return index.byStudyId.get(id);
  }
  return null;
}

function resolveTarget(entry, fieldPath) {
  const norm = normalizeFieldPath(fieldPath);
  if (!norm) return null;
  if (norm === "lv") {
    return { root: entry, path: "lv" };
  }
  if (norm.startsWith("study.")) {
    if (!entry.study) return null;
    const subPath = norm.slice("study.".length);
    return { root: entry.study, path: subPath };
  }
  return null;
}

function readValue(entry, fieldPath) {
  const target = resolveTarget(entry, fieldPath);
  if (!target) return { ok: false, reason: "unresolved_field" };
  const val = getAt(target.root, target.path);
  if (val === undefined || val === null) return { ok: false, reason: "field_missing" };
  if (typeof val !== "string") return { ok: false, reason: "not_string_field" };
  return { ok: true, value: val, target };
}

function applyOne(entry, decision) {
  const read = readValue(entry, decision.fieldPath);
  if (!read.ok) return { status: "NOT_FOUND", reason: read.reason };

  const current = read.value;
  const expected = decision.current;

  if (current !== expected) {
    return { status: "CURRENT_VALUE_MISMATCH", reason: "current_mismatch", actual: current };
  }

  if (decision.action === "KEEP") {
    return { status: "KEEP_VERIFIED" };
  }

  const replacement = decision.finalEn;
  if (!replacement || replacement === current) {
    return { status: "SKIP", reason: "empty_or_same_replacement" };
  }

  if (!DRY_RUN) setAt(read.target.root, read.target.path, replacement);
  return { status: "APPLIED" };
}

function verifyApplied(entry, decision) {
  if (decision.action === "KEEP") {
    const read = readValue(entry, decision.fieldPath);
    return read.ok && read.value === decision.current;
  }
  const read = readValue(entry, decision.fieldPath);
  return read.ok && read.value === decision.finalEn;
}

function main() {
  const hashDeBefore = md5(DE_FILE);
  const hashEnBefore = { data: md5(EN_FILE), www: md5(WWW_FILE) };

  const { decisions } = JSON.parse(fs.readFileSync(REPAIRS_JSON, "utf8"));
  const words = loadWords(EN_FILE);
  const index = buildIndex(words);

  const log = [];
  const counts = {
    APPLIED: 0,
    KEEP_VERIFIED: 0,
    CURRENT_VALUE_MISMATCH: 0,
    NOT_FOUND: 0,
    SKIP: 0,
  };
  const changedCards = new Set();

  for (const decision of decisions) {
    const entry = findEntry(index, decision.cardId);
    if (!entry) {
      counts.NOT_FOUND++;
      log.push({ ...decision, applyStatus: "NOT_FOUND", note: "card_not_found" });
      continue;
    }
    const result = applyOne(entry, decision);
    if (result.status === "APPLIED") {
      counts.APPLIED++;
      changedCards.add(decision.cardId);
    } else if (result.status === "KEEP_VERIFIED") {
      counts.KEEP_VERIFIED++;
    } else if (result.status === "CURRENT_VALUE_MISMATCH") {
      counts.CURRENT_VALUE_MISMATCH++;
    } else if (result.status === "SKIP") {
      counts.SKIP++;
    } else {
      counts.NOT_FOUND++;
    }
    log.push({
      seq: decision.seq,
      cardId: decision.cardId,
      fieldPath: decision.fieldPath,
      action: decision.action,
      expectedCurrent: decision.current,
      finalEn: decision.finalEn,
      applyStatus: result.status,
      note: result.reason || result.actual || "",
    });
  }

  let applyVerified = 0;
  let keepPreserved = 0;
  for (const decision of decisions) {
    const entry = findEntry(index, decision.cardId);
    if (!entry) continue;
    const logEntry = log.find((l) => l.seq === decision.seq);
    if (decision.action === "KEEP" && logEntry?.applyStatus === "KEEP_VERIFIED" && verifyApplied(entry, decision)) {
      keepPreserved++;
    }
    if (decision.action === "APPLY" && logEntry?.applyStatus === "APPLIED" && verifyApplied(entry, decision)) {
      applyVerified++;
    }
  }

  if (!DRY_RUN && counts.APPLIED > 0) {
    writeB2(EN_FILE, words);
    writeB2(WWW_FILE, words);
  }

  const hashDeAfter = md5(DE_FILE);
  const hashEnAfter = { data: md5(EN_FILE), www: md5(WWW_FILE) };

  const applyCount = decisions.filter((d) => d.action === "APPLY").length;
  const keepCount = decisions.filter((d) => d.action === "KEEP").length;

  const out = {
    generatedAt: new Date().toISOString(),
    group: "8",
    dryRun: DRY_RUN,
    reviewed: decisions.length,
    applyPlanned: applyCount,
    keepPlanned: keepCount,
    applied: counts.APPLIED,
    applyVerified,
    keepPreserved,
    totalVerified: applyVerified + keepPreserved,
    currentValueMismatch: counts.CURRENT_VALUE_MISMATCH,
    notFound: counts.NOT_FOUND,
    skip: counts.SKIP,
    changedCards: [...changedCards].sort(),
    hashEnBefore,
    hashEnAfter,
    hashDeBefore,
    hashDeAfter,
    deReadOnly: hashDeBefore === hashDeAfter,
    entries: log,
  };

  fs.writeFileSync(APPLY_LOG, JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));

  if (counts.CURRENT_VALUE_MISMATCH > 0) {
    console.error(`CURRENT_VALUE_MISMATCH: ${counts.CURRENT_VALUE_MISMATCH}`);
  }
  if (!DRY_RUN && applyVerified !== counts.APPLIED) {
    throw new Error(`Apply verification failed: applied ${counts.APPLIED} verified ${applyVerified}`);
  }
  if (!DRY_RUN && keepPreserved !== keepCount) {
    throw new Error(`KEEP preservation failed: expected ${keepCount} preserved ${keepPreserved}`);
  }
}

main();
