#!/usr/bin/env node
/**
 * Verify EN-DE B2 final Luna repairs: unexpected changes, foreign remnants, formsLabel.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");
const REPAIRS_JSON = path.join(__dirname, "en-b2-final-luna-repairs.json");
const APPLY_LOG = path.join(__dirname, "en-b2-final-luna-repairs-apply-log.json");
const PRE_REPAIR_COMMIT = "526a2d4b";

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const KNOWN_PATTERNS = [/kam\?/i, /ko\?/i, /whom\?/i, /what\?/i, /\bförden\b/i, /bez sich/i, /Ko vieta/i, /Podnieka/i];

function loadFromCode(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function gitShow(commit, file) {
  return execSync(`git show ${commit}:${file}`, { cwd: ROOT, encoding: "utf8", maxBuffer: 50 * 1024 * 1024 });
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
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

function storagePath(fieldPath) {
  const norm = normalizeFieldPath(fieldPath);
  if (norm === "lv") return "lv";
  return norm;
}

function getAt(entry, storage) {
  if (storage === "lv") return entry.lv;
  if (storage.startsWith("study.") && entry.study) {
    const parts = storage.slice("study.".length).replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
    let cur = entry.study;
    for (const p of parts) {
      const k = /^\d+$/.test(p) ? parseInt(p, 10) : p;
      cur = cur?.[k];
    }
    return cur;
  }
  return undefined;
}

function walkEnChanges(entry, baseEntry, cardId, prefix, changes) {
  if (!entry && !baseEntry) return;
  if (typeof entry === "string" || typeof baseEntry === "string") {
    const a = entry ?? "";
    const b = baseEntry ?? "";
    if (a !== b) changes.push({ cardId, fieldPath: prefix, before: b, after: a });
    return;
  }
  if (Array.isArray(entry) || Array.isArray(baseEntry)) {
    const len = Math.max((entry || []).length, (baseEntry || []).length);
    for (let i = 0; i < len; i++) walkEnChanges(entry?.[i], baseEntry?.[i], cardId, `${prefix}[${i}]`, changes);
    return;
  }
  if (entry && typeof entry === "object") {
    const keys = new Set([...Object.keys(entry || {}), ...Object.keys(baseEntry || {})]);
    for (const k of keys) {
      if (["de", "de_article", "de_plural", "level"].includes(k)) continue;
      walkEnChanges(entry?.[k], baseEntry?.[k], cardId, prefix ? `${prefix}.${k}` : k, changes);
    }
  }
}

function scanForeign(words) {
  const findings = [];
  function walk(val, pathParts, inDe, cardId) {
    if (typeof val === "string") {
      if (inDe || pathParts.includes("sectionAccents")) return;
      for (const pat of KNOWN_PATTERNS) {
        if (pat.test(val)) {
          findings.push({ cardId, path: pathParts.join("."), snippet: val.slice(0, 120) });
          return;
        }
      }
      if (LV_ONLY.test(val)) findings.push({ cardId, path: pathParts.join("."), snippet: val.slice(0, 120) });
      return;
    }
    if (Array.isArray(val)) val.forEach((v, i) => walk(v, [...pathParts, String(i)], inDe, cardId));
    else if (val && typeof val === "object") {
      for (const [k, v] of Object.entries(val)) {
        walk(v, [...pathParts, k], inDe || k === "de", cardId);
      }
    }
  }
  for (const e of words) walk(e, [], false, e.study?.id || e.de);
  return findings;
}

function countFormsLabel(words) {
  let management = 0, government = 0, rection = 0;
  for (const e of words) {
    const fl = e.study?.formsLabel;
    if (!fl) continue;
    if (fl.includes("Management:")) management++;
    if (fl.includes("Government:")) government++;
    if (fl.includes("Rection:")) rection++;
  }
  return { management, government, rection };
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

const beforeEn = loadFromCode(gitShow(PRE_REPAIR_COMMIT, "data/en/b2.js"));
const afterEn = loadFromCode(fs.readFileSync(EN_FILE, "utf8"));
const deBefore = crypto.createHash("md5").update(gitShow(PRE_REPAIR_COMMIT, "data/b2.js")).digest("hex");
const deAfter = crypto.createHash("md5").update(fs.readFileSync(DE_FILE)).digest("hex");

const allChanges = [];
for (let i = 0; i < afterEn.length; i++) {
  walkEnChanges(afterEn[i], beforeEn[i], entryId(afterEn[i], i), "", allChanges);
}

const { decisions } = JSON.parse(fs.readFileSync(REPAIRS_JSON, "utf8"));
const expected = new Map();
for (const d of decisions) {
  if (d.action !== "APPLY") continue;
  const key = `${d.cardId}::${storagePath(d.fieldPath)}`;
  expected.set(key, { before: d.current, after: d.finalEn });
}

// sectionAccents sync on hoch/aendern
const sectionAccentKeys = new Set([
  "b2-hoch-study::study.sectionAccents.examples[1].lv.purple[0]",
  "b2-aendern::study.sectionAccents.examples[3].lv.purple[0]",
]);

const unexpected = [];
const matched = [];
for (const c of allChanges) {
  const key = `${c.cardId}::${c.fieldPath}`;
  const exp = expected.get(key);
  if (exp && exp.before === c.before && exp.after === c.after) {
    matched.push(c);
    continue;
  }
  if (sectionAccentKeys.has(key)) continue;
  if (c.fieldPath.includes("sectionAccents")) continue;
  unexpected.push(c);
}

const foreign = scanForeign(afterEn);
const formsLabel = countFormsLabel(afterEn);
const structure = structuralCounts(afterEn);

let sectionAccentIssues = -1;
try {
  const sd = JSON.parse(execSync("node scripts/validate-study-design.js --lang=en", { cwd: ROOT, encoding: "utf8" }));
  const b2 = sd.perFile?.find((f) => f.file?.endsWith("/b2.js"));
  sectionAccentIssues = b2?.sectionAccentIssues ?? -1;
} catch (e) {
  try {
    sectionAccentIssues = JSON.parse(e.stdout).perFile?.find((f) => f.file?.endsWith("/b2.js"))?.sectionAccentIssues;
  } catch {
    sectionAccentIssues = -1;
  }
}

const out = {
  generatedAt: new Date().toISOString(),
  preRepairCommit: PRE_REPAIR_COMMIT,
  totalEnChanges: allChanges.length,
  expectedApplyChanges: expected.size,
  matchedExpected: matched.length,
  unexpectedChanges: unexpected,
  unexpectedCount: unexpected.length,
  foreignRemnants: foreign.length,
  sectionAccentIssues,
  formsLabel,
  structure,
  deReadOnly: deBefore === deAfter,
  mirrorPass: crypto.createHash("md5").update(fs.readFileSync(EN_FILE)).digest("hex") ===
    crypto.createHash("md5").update(fs.readFileSync(path.join(ROOT, "www/data/en/b2.js"))).digest("hex"),
};

fs.writeFileSync(path.join(__dirname, "en-b2-final-luna-repairs-verify.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));
