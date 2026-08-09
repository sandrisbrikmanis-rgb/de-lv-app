#!/usr/bin/env node
/**
 * Apply EN-DE B2 SAFE repairs only (read-only gate output).
 * Usage: node reports/temp/apply-en-b2-safe-repairs.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const SAFE_JSON = path.join(ROOT, "reports", "temp", "en-b2-safe-repairs.json");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");
const APPLY_LOG = path.join(ROOT, "reports", "temp", "en-b2-safe-repair-apply-log.json");
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
  return String(fieldPath).replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
}

function getAt(root, fieldPath) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (const part of parts) {
    if (cur == null) return undefined;
    cur = cur[part];
  }
  return cur;
}

function setAt(root, fieldPath, value) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    if (cur[parts[i]] == null) return false;
    cur = cur[parts[i]];
  }
  cur[parts[parts.length - 1]] = value;
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
  const byDe = new Map();
  words.forEach((entry, index) => {
    const id = entryId(entry, index);
    byCardId.set(id, entry);
    byCardId.set(normalizeCardId(id), entry);
    if (entry.study?.id) {
      byStudyId.set(entry.study.id, entry);
      byStudyId.set(normalizeCardId(entry.study.id), entry);
    }
    if (entry.de) {
      if (!byDe.has(entry.de)) byDe.set(entry.de, entry);
    }
  });
  return { byCardId, byStudyId, byDe };
}

function findEntry(index, repair) {
  const ids = [repair.cardId, normalizeCardId(repair.cardId)];
  for (const id of ids) {
    if (index.byCardId.has(id)) return index.byCardId.get(id);
    if (index.byStudyId.has(id)) return index.byStudyId.get(id);
  }
  if (repair.deLemma && index.byDe.has(repair.deLemma)) return index.byDe.get(repair.deLemma);
  return null;
}

function resolveTarget(entry, fieldPath) {
  if (!fieldPath || fieldPath === "lv") return { root: entry, path: "lv" };
  if (fieldPath.startsWith("study.")) {
    if (!entry.study) return null;
    return { root: entry.study, path: fieldPath.slice("study.".length) };
  }
  return null;
}

function applyOne(entry, repair) {
  const target = resolveTarget(entry, repair.fieldPath);
  if (!target) return { status: "NOT_FOUND", reason: "unresolved_field" };

  const current = getAt(target.root, target.path);
  const expected = repair.expectedCurrentValue;
  const replacement = repair.replacementValue;

  if (current === undefined || current === null) {
    return { status: "NOT_FOUND", reason: "field_missing" };
  }
  if (typeof current !== "string") {
    return { status: "NOT_FOUND", reason: "not_string_field" };
  }
  if (current !== expected) {
    return { status: "STALE", reason: "current_mismatch", actual: current };
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
  return actual === repair.replacementValue;
}

function deReadOnlyCheck() {
  const deBefore = loadWords(DE_FILE);
  const deAfter = loadWords(DE_FILE);
  return JSON.stringify(deBefore) === JSON.stringify(deAfter);
}

function main() {
  const hashEnBefore = { data: md5(EN_FILE), www: md5(WWW_FILE) };
  const hashDeBefore = md5(DE_FILE);

  const safe = JSON.parse(fs.readFileSync(SAFE_JSON, "utf8"));
  const repairs = safe.repairs || [];
  const words = loadWords(EN_FILE);
  const index = buildIndex(words);

  const log = [];
  const counts = { APPLIED: 0, ALREADY: 0, STALE: 0, NOT_FOUND: 0, SKIP: 0 };
  const changedCards = new Set();

  for (const repair of repairs) {
    const entry = findEntry(index, repair);
    if (!entry) {
      counts.NOT_FOUND++;
      log.push({ ...repair, applyStatus: "NOT_FOUND", note: "card_not_found" });
      continue;
    }
    const result = applyOne(entry, repair);
    if (result.status === "APPLIED") counts.APPLIED++;
    else if (result.status === "STALE") counts.STALE++;
    else if (result.status === "SKIP") counts.SKIP++;
    else counts.NOT_FOUND++;
    if (result.status === "APPLIED") changedCards.add(repair.cardId);
    log.push({
      findingId: repair.findingId,
      cardId: repair.cardId,
      fieldPath: repair.fieldPath,
      applyStatus: result.status,
      note: result.reason || result.actual || "",
    });
  }

  let verified = 0;
  for (const repair of repairs) {
    const entry = findEntry(index, repair);
    if (!entry) continue;
    const logEntry = log.find((l) => l.findingId === repair.findingId);
    if (logEntry?.applyStatus === "APPLIED" && verifyApplied(entry, repair)) verified++;
  }

  if (!DRY_RUN && counts.APPLIED > 0) {
    writeB2(EN_FILE, words);
    writeB2(WWW_FILE, words);
  }

  const hashEnAfter = { data: md5(EN_FILE), www: md5(WWW_FILE) };
  const hashDeAfter = md5(DE_FILE);

  const out = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    planned: repairs.length,
    applied: counts.APPLIED,
    verified,
    stale: counts.STALE,
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

  if (counts.STALE > 0) {
    console.error(`STALE entries: ${counts.STALE} — not applied`);
  }
  if (!DRY_RUN && counts.APPLIED !== verified) {
    throw new Error(`Verification failed: applied ${counts.APPLIED} verified ${verified}`);
  }
}

main();
