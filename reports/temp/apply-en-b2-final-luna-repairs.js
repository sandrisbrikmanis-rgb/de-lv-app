#!/usr/bin/env node
/**
 * Apply EN-DE B2 final Luna OWNER repairs: 51 APPLY + verify 8 NELABOT + 8 DE_AVOTA preserved.
 * Usage: node reports/temp/apply-en-b2-final-luna-repairs.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const REPAIRS_JSON = path.join(__dirname, "en-b2-final-luna-repairs.json");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");
const APPLY_LOG = path.join(__dirname, "en-b2-final-luna-repairs-apply-log.json");
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
  if (section === "important") {
    const imp = study.important;
    if (Array.isArray(imp)) return imp.join(" ");
    if (imp && typeof imp === "object") return [imp.text, imp.example].filter(Boolean).join(" ");
    return String(imp || "");
  }
  if (section === "comparison" && Array.isArray(study.comparison)) {
    const c = study.comparison[index];
    if (!c) return "";
    return [c.word, c.meaning, c.example].filter(Boolean).join(" ");
  }
  return "";
}

function walkAndSyncSectionAccents(study, log) {
  if (!study?.sectionAccents) return 0;
  let fixes = 0;
  const sa = study.sectionAccents;
  const cardId = study.id;

  function syncBlock(block, section, index) {
    if (!block || typeof block !== "object") return;
    const text = getTextForAccentSection(study, section, index);
    for (const color of Object.keys(block)) {
      const val = block[color];
      if (Array.isArray(val)) {
        for (let i = 0; i < val.length; i++) {
          const term = val[i];
          if (typeof term !== "string") continue;
          if (text && accentTermMatches(text, term)) continue;
          // drop orphan accent terms that no longer match
          if (!text || !accentTermMatches(text, term)) {
            const newTerm = term;
            if (!accentTermMatches(text, newTerm)) {
              // try to find term as substring loosely
              if (!text.toLowerCase().includes(term.toLowerCase().split(" ")[0])) {
                if (!DRY_RUN) val.splice(i, 1);
                log.push({ type: "sectionAccent_remove", cardId, section, index, color, term });
                fixes++;
                i--;
              }
            }
          }
        }
      } else if (typeof val === "object") {
        for (const [lang, sub] of Object.entries(val)) {
          if (sub && typeof sub === "object") {
            for (const c of Object.keys(sub)) {
              if (Array.isArray(sub[c])) {
                const subText =
                  lang === "lv" && section === "examples"
                    ? getTextForAccentSection(study, section, index)
                    : text;
                for (let i = 0; i < sub[c].length; i++) {
                  const term = sub[c][i];
                  if (typeof term !== "string") continue;
                  if (subText && accentTermMatches(subText, term)) continue;
                  if (!subText || !accentTermMatches(subText, term)) {
                    if (!DRY_RUN) sub[c].splice(i, 1);
                    log.push({ type: "sectionAccent_remove", cardId, section, index, color: `${lang}.${c}`, term });
                    fixes++;
                    i--;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  if (sa.explanation) syncBlock(sa.explanation, "explanation", 0);
  if (Array.isArray(sa.examples)) sa.examples.forEach((ex, idx) => syncBlock(ex, "examples", idx));
  if (Array.isArray(sa.important)) sa.important.forEach((imp, idx) => syncBlock(imp, "important", idx));
  else if (sa.important) syncBlock(sa.important, "important", 0);

  return fixes;
}

function syncSectionAccentsForCards(words, changedStudyIds, log) {
  let total = 0;
  for (const entry of words) {
    if (!entry.study?.id || !changedStudyIds.has(entry.study.id)) continue;
    total += walkAndSyncSectionAccents(entry.study, log);
  }
  return total;
}

function applyOne(entry, decision) {
  const read = readValue(entry, decision.fieldPath);
  if (!read.ok) return { status: "NOT_FOUND", reason: read.reason };

  const current = read.value;
  const expected = decision.current;

  if (current !== expected) {
    return { status: "CURRENT_VALUE_MISMATCH", reason: "current_mismatch", actual: current };
  }

  if (decision.action === "NELABOT" || decision.action === "DE_AVOTA") {
    return { status: "PRESERVE_VERIFIED" };
  }

  const replacement = decision.finalEn;
  if (!replacement || replacement === current) {
    return { status: "SKIP", reason: "empty_or_same_replacement" };
  }

  if (!DRY_RUN) setAt(read.target.root, read.target.path, replacement);
  return { status: "APPLIED" };
}

function verifyDecision(entry, decision) {
  const read = readValue(entry, decision.fieldPath);
  if (!read.ok) return false;
  if (decision.action === "APPLY") return read.value === decision.finalEn;
  return read.value === decision.current;
}

function parseStudyDesign() {
  try {
    const out = execSync("node scripts/validate-study-design.js --lang=en", {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 50 * 1024 * 1024,
    });
    return JSON.parse(out);
  } catch (e) {
    return JSON.parse(e.stdout || "{}");
  }
}

function structuralCounts(words) {
  const studies = words.filter((e) => e.study);
  return {
    cards: words.length,
    studies: studies.length,
    standardStudy: studies.filter((e) => e.study.layout === "standardStudy" || !e.study.layout).length,
    minimalStudy: studies.filter((e) => e.study.layout === "minimalStudy").length,
    flashcards: words.filter((e) => !e.study).length,
  };
}

function main() {
  const hashDeBefore = md5(DE_FILE);
  const hashEnBefore = { data: md5(EN_FILE), www: md5(WWW_FILE) };

  const { decisions } = JSON.parse(fs.readFileSync(REPAIRS_JSON, "utf8"));
  const words = loadWords(EN_FILE);
  const index = buildIndex(words);

  const log = [];
  const accentLog = [];
  const counts = {
    APPLIED: 0,
    PRESERVE_VERIFIED: 0,
    CURRENT_VALUE_MISMATCH: 0,
    NOT_FOUND: 0,
    SKIP: 0,
  };
  const changedCards = new Set();
  const changedStudyIds = new Set();

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
      if (entry.study?.id) changedStudyIds.add(entry.study.id);
    } else if (result.status === "PRESERVE_VERIFIED") {
      counts.PRESERVE_VERIFIED++;
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

  const sectionAccentFixes = syncSectionAccentsForCards(words, changedStudyIds, accentLog);

  let applyVerified = 0;
  let nelabotPreserved = 0;
  let deAvotaPreserved = 0;
  const applyDecisions = decisions.filter((d) => d.action === "APPLY");
  const nelabotDecisions = decisions.filter((d) => d.action === "NELABOT");
  const deAvotaDecisions = decisions.filter((d) => d.action === "DE_AVOTA");

  for (const decision of decisions) {
    const entry = findEntry(index, decision.cardId);
    if (!entry) continue;
    const logEntry = log.find((l) => l.seq === decision.seq);
    if (decision.action === "APPLY" && logEntry?.applyStatus === "APPLIED" && verifyDecision(entry, decision)) {
      applyVerified++;
    }
    if (decision.action === "NELABOT" && logEntry?.applyStatus === "PRESERVE_VERIFIED" && verifyDecision(entry, decision)) {
      nelabotPreserved++;
    }
    if (decision.action === "DE_AVOTA" && logEntry?.applyStatus === "PRESERVE_VERIFIED" && verifyDecision(entry, decision)) {
      deAvotaPreserved++;
    }
  }

  if (!DRY_RUN && counts.APPLIED > 0) {
    writeB2(EN_FILE, words);
    writeB2(WWW_FILE, words);
  }

  const hashDeAfter = md5(DE_FILE);
  const hashEnAfter = { data: md5(EN_FILE), www: md5(WWW_FILE) };

  let syntaxPass = true;
  try {
    execSync("node --check data/en/b2.js", { cwd: ROOT });
  } catch {
    syntaxPass = false;
  }

  let parityPass = true;
  try {
    parityPass = JSON.parse(
      execSync("node scripts/audit-language-parity.js --lang=en", { cwd: ROOT, encoding: "utf8" })
    ).pass;
  } catch {
    parityPass = false;
  }

  const studyDesign = parseStudyDesign();
  const b2 = studyDesign.perFile?.find((f) => f.file?.endsWith("/b2.js"));
  const structure = structuralCounts(words);

  const out = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    applyPlanned: applyDecisions.length,
    nelabotPlanned: nelabotDecisions.length,
    deAvotaPlanned: deAvotaDecisions.length,
    applied: counts.APPLIED,
    applyVerified,
    nelabotPreserved,
    deAvotaPreserved,
    currentValueMismatch: counts.CURRENT_VALUE_MISMATCH,
    notFound: counts.NOT_FOUND,
    skip: counts.SKIP,
    sectionAccentSync: sectionAccentFixes,
    changedCards: [...changedCards].sort(),
    changedStudyIds: [...changedStudyIds].sort(),
    hashEnBefore,
    hashEnAfter,
    hashDeBefore,
    hashDeAfter,
    deReadOnly: hashDeBefore === hashDeAfter,
    mirrorPass: hashEnAfter.data === hashEnAfter.www,
    syntaxPass,
    parityPass,
    sectionAccentIssues: b2?.sectionAccentIssues ?? -1,
    structure,
    entries: log,
    accentLog,
  };

  fs.writeFileSync(APPLY_LOG, JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));

  if (counts.CURRENT_VALUE_MISMATCH > 0) {
    console.error(`CURRENT_VALUE_MISMATCH: ${counts.CURRENT_VALUE_MISMATCH}`);
  }
  if (!DRY_RUN) {
    if (applyVerified !== applyDecisions.length) {
      throw new Error(`Apply verification failed: expected ${applyDecisions.length} verified ${applyVerified}`);
    }
    if (nelabotPreserved !== nelabotDecisions.length) {
      throw new Error(`NELABOT preservation failed: expected ${nelabotDecisions.length} preserved ${nelabotPreserved}`);
    }
    if (deAvotaPreserved !== deAvotaDecisions.length) {
      throw new Error(`DE_AVOTA preservation failed: expected ${deAvotaDecisions.length} preserved ${deAvotaPreserved}`);
    }
    if (!out.deReadOnly) throw new Error("DE was modified");
  }
}

main();
