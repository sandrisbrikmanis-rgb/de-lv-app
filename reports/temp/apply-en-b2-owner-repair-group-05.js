#!/usr/bin/env node
/**
 * Apply EN-DE B2 OWNER-approved repairs Group 5 (items 201-250).
 * Usage: node reports/temp/apply-en-b2-owner-repair-group-05.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..", "..");
const REPAIRS_JSON = path.join(__dirname, "en-b2-owner-repair-group-05-repairs.json");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");
const APPLY_LOG = path.join(__dirname, "en-b2-owner-repair-group-05-apply-log.json");
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
  if (!fieldPath) return null;
  if (fieldPath === "lv" || fieldPath === "en") {
    return { root: entry, path: "lv" };
  }
  if (fieldPath.startsWith("study.")) {
    if (!entry.study) return null;
    const subPath = fieldPath.slice("study.".length);
    return { root: entry.study, path: subPath };
  }
  return null;
}

function applyOne(entry, repair) {
  const target = resolveTarget(entry, repair.fieldPath);
  if (!target) return { status: "NOT_FOUND", reason: "unresolved_field" };

  const current = getAt(target.root, target.path);
  const expected = repair.current;
  const replacement = repair.finalEn;

  if (current === undefined || current === null) {
    return { status: "NOT_FOUND", reason: "field_missing" };
  }
  if (typeof current !== "string") {
    return { status: "NOT_FOUND", reason: "not_string_field" };
  }
  if (current !== expected) {
    return { status: "CURRENT_VALUE_MISMATCH", reason: "current_mismatch", actual: current };
  }
  if (!replacement || replacement === current) {
    return { status: "SKIP", reason: "empty_or_same_replacement" };
  }

  if (!DRY_RUN) setAt(target.root, target.path, replacement);
  return { status: "APPLIED" };
}

function verifyApplied(entry, repair) {
  const target = resolveTarget(entry, repair.fieldPath);
  if (!target) return false;
  const actual = getAt(target.root, target.path);
  return actual === repair.finalEn;
}

function main() {
  const hashDeBefore = md5(DE_FILE);
  const hashEnBefore = { data: md5(EN_FILE), www: md5(WWW_FILE) };

  const { repairs } = JSON.parse(fs.readFileSync(REPAIRS_JSON, "utf8"));
  const words = loadWords(EN_FILE);
  const index = buildIndex(words);

  const log = [];
  const counts = {
    APPLIED: 0,
    CURRENT_VALUE_MISMATCH: 0,
    NOT_FOUND: 0,
    SKIP: 0,
  };
  const changedCards = new Set();

  for (const repair of repairs) {
    const entry = findEntry(index, repair.cardId);
    if (!entry) {
      counts.NOT_FOUND++;
      log.push({ ...repair, applyStatus: "NOT_FOUND", note: "card_not_found" });
      continue;
    }
    const result = applyOne(entry, repair);
    if (result.status === "APPLIED") {
      counts.APPLIED++;
      changedCards.add(repair.cardId);
    } else if (result.status === "CURRENT_VALUE_MISMATCH") {
      counts.CURRENT_VALUE_MISMATCH++;
    } else if (result.status === "SKIP") {
      counts.SKIP++;
    } else {
      counts.NOT_FOUND++;
    }
    log.push({
      seq: repair.seq,
      cardId: repair.cardId,
      fieldPath: repair.fieldPath,
      expectedCurrent: repair.current,
      finalEn: repair.finalEn,
      applyStatus: result.status,
      note: result.reason || result.actual || "",
    });
  }

  let verified = 0;
  for (const repair of repairs) {
    const entry = findEntry(index, repair.cardId);
    if (!entry) continue;
    const logEntry = log.find((l) => l.seq === repair.seq);
    if (logEntry?.applyStatus === "APPLIED" && verifyApplied(entry, repair)) verified++;
  }

  if (!DRY_RUN && counts.APPLIED > 0) {
    writeB2(EN_FILE, words);
    writeB2(WWW_FILE, words);
  }

  const hashDeAfter = md5(DE_FILE);
  const hashEnAfter = { data: md5(EN_FILE), www: md5(WWW_FILE) };

  const out = {
    generatedAt: new Date().toISOString(),
    group: "5",
    dryRun: DRY_RUN,
    approved: repairs.length,
    attempted: repairs.length - counts.NOT_FOUND,
    applied: counts.APPLIED,
    verified,
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
  if (!DRY_RUN && counts.APPLIED !== verified) {
    throw new Error(`Verification failed: applied ${counts.APPLIED} verified ${verified}`);
  }
}

main();
