#!/usr/bin/env node
/**
 * Verify all 58 OWNER EN repairs + 9 NELABOT + DE read-only + technical checks.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");
const PRIOR_APPLY_LOG = path.join(__dirname, "en-b2-final-luna-repairs-apply-log.json");
const SUPPLEMENT_JSON = path.join(__dirname, "en-b2-final-owner-repairs-supplement.json");
const PRE_OWNER_COMMIT = "526a2d4b";
const OUT_JSON = path.join(__dirname, "en-b2-final-owner-repairs-verify.json");

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const KNOWN_PATTERNS = [/kam\?/i, /ko\?/i, /whom\?/i, /what\?/i, /\bförden\b/i, /bez sich/i];

function loadFromCode(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function gitShow(commit, file) {
  return execSync(`git show ${commit}:${file}`, { cwd: ROOT, encoding: "utf8", maxBuffer: 50 * 1024 * 1024 });
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

function normalizeCardId(cardId) {
  return String(cardId || "")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ä/g, "ae")
    .replace(/ß/g, "ss");
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function buildIndex(words) {
  const byId = new Map();
  words.forEach((entry, index) => {
    const id = entryId(entry, index);
    byId.set(id, entry);
    byId.set(normalizeCardId(id), entry);
    if (entry.study?.id) {
      byId.set(entry.study.id, entry);
      byId.set(normalizeCardId(entry.study.id), entry);
    }
  });
  return byId;
}

function findEntry(index, cardId) {
  for (const id of [cardId, normalizeCardId(cardId)]) {
    if (index.has(id)) return index.get(id);
  }
  return null;
}

function readValue(entry, fieldPath) {
  const norm = normalizeFieldPath(fieldPath);
  if (norm === "lv") return entry.lv;
  if (norm.startsWith("study.") && entry.study) {
    const parts = norm.slice("study.".length).replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
    let cur = entry.study;
    for (const p of parts) {
      const k = /^\d+$/.test(p) ? parseInt(p, 10) : p;
      cur = cur?.[k];
    }
    return cur;
  }
  return undefined;
}

function buildManifest58() {
  const prior = JSON.parse(fs.readFileSync(PRIOR_APPLY_LOG, "utf8"));
  const supplement = JSON.parse(fs.readFileSync(SUPPLEMENT_JSON, "utf8"));
  const manifest = [];
  for (const e of prior.entries) {
    if (e.action === "APPLY" && e.applyStatus === "APPLIED") {
      manifest.push({
        seq: e.seq,
        cardId: e.cardId,
        fieldPath: e.fieldPath,
        action: "APPLY",
        finalEn: e.finalEn,
      });
    }
  }
  for (const d of supplement.decisions) {
    if (d.action === "APPLY") manifest.push(d);
  }
  return manifest;
}

function walkEnChanges(entry, baseEntry, cardId, prefix, changes) {
  if (!entry && !baseEntry) return;
  if (typeof entry === "string" || typeof baseEntry === "string") {
    const a = entry ?? "";
    const b = baseEntry ?? "";
    if (a !== b && !prefix.includes("sectionAccents")) {
      changes.push({ cardId, fieldPath: prefix, before: b, after: a });
    }
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
          findings.push({ cardId, path: pathParts.join(".") });
          return;
        }
      }
      if (LV_ONLY.test(val)) findings.push({ cardId, path: pathParts.join(".") });
      return;
    }
    if (Array.isArray(val)) val.forEach((v, i) => walk(v, [...pathParts, String(i)], inDe, cardId));
    else if (val && typeof val === "object") {
      for (const [k, v] of Object.entries(val)) walk(v, [...pathParts, k], inDe || k === "de", cardId);
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

const manifest58 = buildManifest58();
const nelabot = JSON.parse(fs.readFileSync(SUPPLEMENT_JSON, "utf8")).decisions.filter((d) => d.action === "NELABOT");

const afterEn = loadFromCode(fs.readFileSync(EN_FILE, "utf8"));
const index = buildIndex(afterEn);

let verified58 = 0;
const verifyFails = [];
for (const m of manifest58) {
  const entry = findEntry(index, m.cardId);
  const val = entry ? readValue(entry, m.fieldPath) : undefined;
  if (val === m.finalEn) verified58++;
  else verifyFails.push({ ...m, actual: val });
}

let nelabotPreserved = 0;
const nelabotFails = [];
for (const n of nelabot) {
  const entry = findEntry(index, n.cardId);
  const val = entry ? readValue(entry, n.fieldPath) : undefined;
  if (val === n.current) nelabotPreserved++;
  else nelabotFails.push({ ...n, actual: val });
}

const deBefore = crypto.createHash("md5").update(gitShow(PRE_OWNER_COMMIT, "data/b2.js")).digest("hex");
const deAfter = crypto.createHash("md5").update(fs.readFileSync(DE_FILE)).digest("hex");

const beforeEn = loadFromCode(gitShow(PRE_OWNER_COMMIT, "data/en/b2.js"));
const allChanges = [];
for (let i = 0; i < afterEn.length; i++) {
  walkEnChanges(afterEn[i], beforeEn[i], entryId(afterEn[i], i), "", allChanges);
}

const expectedKeys = new Set(
  manifest58.map((m) => `${m.cardId}::${normalizeFieldPath(m.fieldPath)}`)
);
const unexpected = allChanges.filter((c) => {
  if (c.fieldPath.includes("sectionAccents")) return false;
  const key = `${c.cardId}::${c.fieldPath}`;
  return !expectedKeys.has(key);
});

const foreign = scanForeign(afterEn);
const formsLabel = countFormsLabel(afterEn);
const studies = afterEn.filter((e) => e.study);
const structure = {
  cards: afterEn.length,
  studies: studies.length,
  standardStudy: studies.filter((e) => e.study.layout === "standardStudy" || !e.study.layout).length,
  minimalStudy: studies.filter((e) => e.study.layout === "minimalStudy").length,
  flashcards: afterEn.filter((e) => !e.study).length,
};

let sectionAccentIssues = -1;
try {
  const sd = JSON.parse(execSync("node scripts/validate-study-design.js --lang=en", { cwd: ROOT, encoding: "utf8" }));
  sectionAccentIssues = sd.perFile?.find((f) => f.file?.endsWith("/b2.js"))?.sectionAccentIssues ?? -1;
} catch (e) {
  try {
    sectionAccentIssues = JSON.parse(e.stdout).perFile?.find((f) => f.file?.endsWith("/b2.js"))?.sectionAccentIssues;
  } catch {
    sectionAccentIssues = -1;
  }
}

const changedCardIds = [...new Set(manifest58.map((m) => m.cardId))].sort();

const out = {
  generatedAt: new Date().toISOString(),
  preOwnerCommit: PRE_OWNER_COMMIT,
  manifest58Count: manifest58.length,
  verified58,
  verifyFails,
  nelabotPlanned: nelabot.length,
  nelabotPreserved,
  nelabotFails,
  deReadOnly: deBefore === deAfter,
  deHashBefore: deBefore,
  deHashAfter: deAfter,
  unexpectedChanges: unexpected,
  unexpectedCount: unexpected.length,
  foreignRemnants: foreign.length,
  sectionAccentIssues,
  formsLabel,
  structure,
  changedCardIds,
  mirrorPass:
    crypto.createHash("md5").update(fs.readFileSync(EN_FILE)).digest("hex") ===
    crypto.createHash("md5").update(fs.readFileSync(path.join(ROOT, "www/data/en/b2.js"))).digest("hex"),
};

fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 2));
console.log(JSON.stringify(out, null, 2));
