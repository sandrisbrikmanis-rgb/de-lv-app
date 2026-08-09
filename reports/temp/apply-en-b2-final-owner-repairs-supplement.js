#!/usr/bin/env node
/**
 * Apply 7 additional OWNER EN repairs (52-58) + verify 9 NELABOT preserved.
 * Prior 51 repairs already in production — not re-applied here.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..", "..");
const REPAIRS_JSON = path.join(__dirname, "en-b2-final-owner-repairs-supplement.json");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");
const APPLY_LOG = path.join(__dirname, "en-b2-final-owner-repairs-supplement-apply-log.json");
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
  if (p === "en" || p === "enMain" || p === "enText") return "lv";
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
  for (const id of [cardId, normalizeCardId(cardId)]) {
    if (index.byCardId.has(id)) return index.byCardId.get(id);
    if (index.byStudyId.has(id)) return index.byStudyId.get(id);
  }
  return null;
}

function resolveTarget(entry, fieldPath) {
  const norm = normalizeFieldPath(fieldPath);
  if (!norm) return null;
  if (norm === "lv") return { root: entry, path: "lv" };
  if (norm.startsWith("study.")) {
    if (!entry.study) return null;
    return { root: entry.study, path: norm.slice("study.".length) };
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

function accentTermMatches(text, term) {
  if (!text || !term) return false;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escaped}(?![\\p{L}\\p{N}_])`, "iu").test(text);
  } catch {
    return text.toLowerCase().includes(term.toLowerCase());
  }
}

function getTextForAccentSection(study, section, index) {
  if (section === "explanation" && study.explanation) {
    return Array.isArray(study.explanation) ? study.explanation.join(" ") : String(study.explanation);
  }
  if (section === "examples" && Array.isArray(study.examples)) {
    const ex = study.examples[index];
    if (!ex) return "";
    return [ex.de, ex.lv].filter(Boolean).join(" ");
  }
  return "";
}

function syncSectionAccentsForCard(study, log) {
  if (!study?.sectionAccents?.examples) return 0;
  let fixes = 0;
  const sa = study.sectionAccents.examples;
  for (let idx = 0; idx < sa.length; idx++) {
    const block = sa[idx];
    if (!block?.lv) continue;
    const text = getTextForAccentSection(study, "examples", idx);
    for (const color of Object.keys(block.lv)) {
      const arr = block.lv[color];
      if (!Array.isArray(arr)) continue;
      for (let i = 0; i < arr.length; i++) {
        const term = arr[i];
        if (typeof term !== "string") continue;
        if (text && accentTermMatches(text, term)) continue;
        if (!text.toLowerCase().includes(term.toLowerCase().split(" ")[0])) {
          if (!DRY_RUN) arr.splice(i, 1);
          log.push({ cardId: study.id, index: idx, term, action: "remove_orphan" });
          fixes++;
          i--;
        }
      }
    }
  }
  return fixes;
}

function applyOne(entry, decision) {
  const read = readValue(entry, decision.fieldPath);
  if (!read.ok) return { status: "NOT_FOUND", reason: read.reason };
  if (read.value !== decision.current) {
    return { status: "CURRENT_VALUE_MISMATCH", actual: read.value };
  }
  if (decision.action === "NELABOT") return { status: "PRESERVE_VERIFIED" };
  if (!decision.finalEn || decision.finalEn === read.value) return { status: "SKIP" };
  if (!DRY_RUN) setAt(read.target.root, read.target.path, decision.finalEn);
  return { status: "APPLIED" };
}

function verifyFinal(entry, decision) {
  const read = readValue(entry, decision.fieldPath);
  if (!read.ok) return false;
  if (decision.action === "APPLY") return read.value === decision.finalEn;
  return read.value === decision.current;
}

function main() {
  const hashDeBefore = md5(DE_FILE);
  const { decisions } = JSON.parse(fs.readFileSync(REPAIRS_JSON, "utf8"));
  const words = loadWords(EN_FILE);
  const index = buildIndex(words);
  const log = [];
  const accentLog = [];
  const changedStudyIds = new Set();
  const counts = { APPLIED: 0, PRESERVE_VERIFIED: 0, CURRENT_VALUE_MISMATCH: 0, NOT_FOUND: 0, SKIP: 0 };

  for (const decision of decisions) {
    const entry = findEntry(index, decision.cardId);
    if (!entry) {
      counts.NOT_FOUND++;
      log.push({ ...decision, applyStatus: "NOT_FOUND" });
      continue;
    }
    const result = applyOne(entry, decision);
    if (result.status === "APPLIED") {
      counts.APPLIED++;
      if (entry.study?.id) changedStudyIds.add(entry.study.id);
    } else if (result.status === "PRESERVE_VERIFIED") counts.PRESERVE_VERIFIED++;
    else if (result.status === "CURRENT_VALUE_MISMATCH") counts.CURRENT_VALUE_MISMATCH++;
    else if (result.status === "SKIP") counts.SKIP++;
    else counts.NOT_FOUND++;
    log.push({ ...decision, applyStatus: result.status, note: result.reason || result.actual || "" });
  }

  let sectionAccentFixes = 0;
  for (const entry of words) {
    if (entry.study?.id && changedStudyIds.has(entry.study.id)) {
      sectionAccentFixes += syncSectionAccentsForCard(entry.study, accentLog);
    }
  }

  const applyDecisions = decisions.filter((d) => d.action === "APPLY");
  const nelabotDecisions = decisions.filter((d) => d.action === "NELABOT");
  let applyVerified = 0;
  let nelabotPreserved = 0;
  for (const decision of decisions) {
    const entry = findEntry(index, decision.cardId);
    if (!entry) continue;
    const le = log.find((l) => l.seq === decision.seq);
    if (decision.action === "APPLY" && le?.applyStatus === "APPLIED" && verifyFinal(entry, decision)) applyVerified++;
    if (decision.action === "NELABOT" && le?.applyStatus === "PRESERVE_VERIFIED" && verifyFinal(entry, decision)) nelabotPreserved++;
  }

  if (!DRY_RUN && counts.APPLIED > 0) {
    writeB2(EN_FILE, words);
    writeB2(WWW_FILE, words);
  }

  const out = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    supplementApplyPlanned: applyDecisions.length,
    nelabotPlanned: nelabotDecisions.length,
    applied: counts.APPLIED,
    applyVerified,
    nelabotPreserved,
    currentValueMismatch: counts.CURRENT_VALUE_MISMATCH,
    sectionAccentFixes,
    hashDeBefore,
    hashDeAfter: md5(DE_FILE),
    deReadOnly: hashDeBefore === md5(DE_FILE),
    entries: log,
    accentLog,
  };

  fs.writeFileSync(APPLY_LOG, JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));

  if (!DRY_RUN && applyVerified !== applyDecisions.length) {
    throw new Error(`Supplement verify failed: ${applyVerified}/${applyDecisions.length}`);
  }
  if (!DRY_RUN && nelabotPreserved !== nelabotDecisions.length) {
    throw new Error(`NELABOT failed: ${nelabotPreserved}/${nelabotDecisions.length}`);
  }
  if (!DRY_RUN && !out.deReadOnly) throw new Error("DE modified");
}

main();
