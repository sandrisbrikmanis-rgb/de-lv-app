#!/usr/bin/env node
/**
 * EN-DE B2 deterministic closure: Group 1 (49 APPLY) + remnant fixes + sectionAccents sync.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..", "..");
const EN_FILE = path.join(ROOT, "data", "en", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "en", "b2.js");
const DE_FILE = path.join(ROOT, "data", "b2.js");
const GROUP1_JSON = path.join(__dirname, "en-b2-owner-review-group-01.json");
const AUDIT_JSON = path.join(__dirname, "en-b2-consolidated-post-repair-audit.json");
const DRY_RUN = process.argv.includes("--dry-run");
const PASS2_ONLY = process.argv.includes("--pass2-only");

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
  for (const id of [cardId, normalizeCardId(cardId)]) {
    if (index.byCardId.has(id)) return index.byCardId.get(id);
    if (index.byStudyId.has(id)) return index.byStudyId.get(id);
  }
  return null;
}

function readField(entry, fieldPath) {
  const norm = normalizeFieldPath(fieldPath);
  if (norm === "lv") return entry.lv;
  if (norm.startsWith("study.") && entry.study) {
    return getAt(entry.study, norm.slice("study.".length));
  }
  return undefined;
}

function writeField(entry, fieldPath, value) {
  const norm = normalizeFieldPath(fieldPath);
  if (norm === "lv") {
    entry.lv = value;
    return true;
  }
  if (norm.startsWith("study.") && entry.study) {
    return setAt(entry.study, norm.slice("study.".length), value);
  }
  return false;
}

/** Deterministic kam?/ko? and known remnant fixes for EN learner strings. */
function fixRemnantText(text, context = {}) {
  if (typeof text !== "string") return text;
  let r = text;

  // fördern spelling (missing r)
  r = r.replace(/\bförden\b/g, "fördern");
  r = r.replace(/\bFörden\b/g, "Fördern");

  // Explanation sentence patterns
  r = r.replace(/requires the definite preposition/g, "requires the fixed preposition");
  r = r.replace(/an \+ kam\?/g, "an + dative");
  r = r.replace(/zu \+ kam\?/g, "zu + dative");
  r = r.replace(/mit \+ kam\?/g, "mit + dative");
  r = r.replace(/von \+ kam\?/g, "von + the dative");
  r = r.replace(/bei \+ kam\?/g, "bei + dative");
  r = r.replace(/aus \+ kam\?/g, "aus + dative");
  r = r.replace(/vor \+ kam\?/g, "vor + dative");
  r = r.replace(/auf \+ ko\?/g, "auf + accusative");
  r = r.replace(/über \+ ko\?/g, "über + the accusative");
  r = r.replace(/in \+ ko\?/g, "in + accusative");
  r = r.replace(/\+ kam\?/g, "+ dative");

  // whom?/what? Latvian-style question remnants
  r = r.replace(/vor \+ whom\?/g, "vor + dative");
  r = r.replace(/zu \+ whom\?/g, "zu + the dative");
  r = r.replace(/über \+ what\?/g, "über + the accusative");
  r = r.replace(/in \+ what\?/g, "in + the accusative");
  r = r.replace(/als \+ what\?/g, "als + the accusative");
  r = r.replace(/um \+ ko\?/g, "um + the accusative");
  r = r.replace(/als \+ ko\?/g, "als + the accusative");
  r = r.replace(/über \+ ko\?/g, "über + the accusative");

  // Normalize bracketed dative in explanations
  r = r.replace(/vor \+ \[dative\]/g, "vor + dative");
  r = r.replace(/aus \+ \[dative\]/g, "aus + the dative");

  // Per-card overrides to match already-correct explanation text
  if (context.cardId === "b2-sich-empfehlen" && context.field === "rektion" || context.field === "forms") {
    r = r.replace(/zu \+ dative/g, "zu + the dative");
  }
  if (context.cardId === "b2-sich-enthalten" && (context.field === "rektion" || context.field === "forms")) {
    r = r.replace(/von \+ dative/g, "von + the dative");
  }
  if (context.cardId === "b2-sich-versehen" && (context.field === "rektion" || context.field === "forms")) {
    r = r.replace(/mit \+ dative/g, "mit + the dative");
  }

  return r;
}

const ACCENT_TERM_MAP = {
  "mit + kam?": "mit + the dative",
  "von + kam?": "von + the dative",
  "zu + kam?": "zu + the dative",
  "bei + kam?": "bei + dative",
  "an + kam?": "an + dative",
  "aus + kam?": "aus + the dative",
  "vor + kam?": "vor + dative",
  "auf + ko?": "auf + accusative",
  "über + ko?": "über + the accusative",
  "in + ko?": "in + the accusative",
  "um + ko?": "um + the accusative",
  "als + ko?": "als + the accusative",
  "vor + whom?": "vor + dative",
  "zu + whom?": "zu + the dative",
  "über + what?": "über + the accusative",
  "in + what?": "in + the accusative",
  "als + what?": "als + the accusative",
  "Sich verschein": "sich versehen",
  "high water level": "high water levels",
  "mit + dative": "mit + the dative",
  "zu + dative": "zu + the dative",
};

function findReplacementAccentTerm(text, term) {
  if (ACCENT_TERM_MAP[term]) return ACCENT_TERM_MAP[term];
  const fixed = fixRemnantText(term);
  if (text && accentTermMatches(text, fixed)) return fixed;

  if (!text) return term;

  const candidates = [
    "in + the accusative",
    "auf + the accusative",
    "über + the accusative",
    "um + the accusative",
    "als + the accusative",
    "von + the dative",
    "von + dative",
    "zu + the dative",
    "zu + dative",
    "mit + the dative",
    "mit + dative",
    "aus + the dative",
    "aus + dative",
    "vor + dative",
    "bei + dative",
    "the accusative",
    "the dative",
    "fördern",
  ];
  for (const c of candidates) {
    if (accentTermMatches(text, c)) return c;
  }
  return syncAccentTerm(term, null);
}

function syncAccentTerm(term, study) {
  if (ACCENT_TERM_MAP[term]) return ACCENT_TERM_MAP[term];
  return fixRemnantText(term, { cardId: study?.id });
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
          const newTerm = findReplacementAccentTerm(text, term);
          if (newTerm !== term) {
            if (!DRY_RUN) val[i] = newTerm;
            log.push({
              type: "sectionAccent",
              cardId,
              section,
              index,
              color,
              before: term,
              after: newTerm,
            });
            fixes++;
          }
        }
      } else if (typeof val === "object") {
        // nested de/lv blocks in examples
        for (const [lang, sub] of Object.entries(val)) {
          if (sub && typeof sub === "object") {
            for (const c of Object.keys(sub)) {
              if (Array.isArray(sub[c])) {
                const subText = lang === "lv" && section === "examples" ? getTextForAccentSection(study, section, index) : text;
                for (let i = 0; i < sub[c].length; i++) {
                  const term = sub[c][i];
                  if (typeof term !== "string") continue;
                  if (subText && accentTermMatches(subText, term)) continue;
                  const newTerm = findReplacementAccentTerm(text, term);
                  if (newTerm !== term) {
                    if (!DRY_RUN) sub[c][i] = newTerm;
                    log.push({
                      type: "sectionAccent",
                      cardId,
                      section,
                      index,
                      color: `${lang}.${c}`,
                      before: term,
                      after: newTerm,
                    });
                    fixes++;
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

function applyGroup1(index, log) {
  const data = JSON.parse(fs.readFileSync(GROUP1_JSON, "utf8"));
  const results = { applied: 0, keep: 0, mismatch: 0, notFound: 0 };

  for (const review of data.reviews || []) {
    const entry = findEntry(index, review.cardId);
    if (!entry) {
      results.notFound++;
      log.push({ phase: "group1", cardId: review.cardId, status: "NOT_FOUND" });
      continue;
    }

    if (review.recommendation === "KEEP") {
      const cur = readField(entry, review.fieldPath);
      if (cur === review.currentEn) results.keep++;
      log.push({ phase: "group1", cardId: review.cardId, fieldPath: review.fieldPath, status: "KEEP_VERIFIED" });
      continue;
    }

    const cur = readField(entry, review.fieldPath);
    if (cur !== review.currentEn) {
      results.mismatch++;
      log.push({
        phase: "group1",
        cardId: review.cardId,
        fieldPath: review.fieldPath,
        status: "CURRENT_VALUE_MISMATCH",
        expected: review.currentEn,
        actual: cur,
      });
      continue;
    }

    const finalEn = review.recommendedFinalEn;
    if (!DRY_RUN) writeField(entry, review.fieldPath, finalEn);
    results.applied++;
    log.push({
      phase: "group1",
      cardId: review.cardId,
      fieldPath: review.fieldPath,
      status: "APPLIED",
      before: cur,
      after: finalEn,
    });
  }
  return results;
}

function applyRemnants(index, log) {
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const findings = audit.foreignRemnants?.findings || [];
  const results = { resolved: 0, falsePositive: 0, needsReview: 0, notFound: 0 };

  for (const f of findings) {
    const entry = findEntry(index, f.cardId);
    if (!entry) {
      results.notFound++;
      log.push({ phase: "remnant", ...f, status: "NOT_FOUND" });
      continue;
    }

    const fieldPath = f.path.replace(/^study\./, "study.").replace(/^lv$/, "lv");
    // path from audit is like study.rektion or study.tip.1 - need to map to readField
    let fp = f.path;
    if (!fp.startsWith("study.") && fp !== "lv") fp = `study.${fp}`;

    const cur = readField(entry, fp);
    if (cur === undefined || cur === null) {
      // tip.1 might be array index
      const parts = f.path.split(".");
      if (parts[0] === "study" && entry.study) {
        const alt = getAt(entry.study, parts.slice(1).join("."));
        if (typeof alt === "string") {
          const fieldName = parts[parts.length - 1];
          const after = fixRemnantText(alt, { cardId: f.cardId, field: fieldName });
          if (after === alt) {
            results.falsePositive++;
            log.push({ phase: "remnant", ...f, status: "FALSE_POSITIVE", before: alt });
          } else {
            if (!DRY_RUN) setAt(entry.study, parts.slice(1).join("."), after);
            results.resolved++;
            log.push({ phase: "remnant", ...f, status: "RESOLVED", before: alt, after });
          }
          continue;
        }
      }
      results.needsReview++;
      log.push({ phase: "remnant", ...f, status: "NEEDS_REVIEW", reason: "field_not_found" });
      continue;
    }

    if (typeof cur !== "string") {
      results.needsReview++;
      log.push({ phase: "remnant", ...f, status: "NEEDS_REVIEW", reason: "not_string" });
      continue;
    }

    const fieldName = f.path.split(".").pop();
    const after = fixRemnantText(cur, { cardId: f.cardId, field: fieldName });

    if (after === cur && !/\bkam\?|\bko\?|förden|Förden/i.test(cur)) {
      results.falsePositive++;
      log.push({ phase: "remnant", ...f, status: "FALSE_POSITIVE", before: cur });
      continue;
    }

    if (after === cur) {
      results.needsReview++;
      log.push({ phase: "remnant", ...f, status: "NEEDS_REVIEW", before: cur });
      continue;
    }

    if (!DRY_RUN) writeField(entry, fp, after);
    results.resolved++;
    log.push({ phase: "remnant", ...f, status: "RESOLVED", before: cur, after });
  }
  return results;
}

function applyRemnantSweep(index, log) {
  const results = { resolved: 0 };

  function fixString(entry, holder, keyPath, value) {
    const cardId = entry.study?.id || entry.de;
    const field = keyPath.split(".").pop();
    const after = fixRemnantText(value, { cardId, field });
    if (after === value) return;
    if (!DRY_RUN) {
      if (keyPath === "lv") entry.lv = after;
      else if (entry.study) setAt(entry.study, keyPath.replace(/^study\./, ""), after);
    }
    results.resolved++;
    log.push({ phase: "remnantSweep", cardId, path: keyPath, before: value, after });
  }

  function walk(entry, obj, prefix, inDe) {
    if (typeof obj === "string") {
      if (!inDe && prefix) fixString(entry, null, prefix, obj);
      return;
    }
    if (Array.isArray(obj)) {
      obj.forEach((item, i) => walk(entry, item, `${prefix}[${i}]`, inDe));
      return;
    }
    if (obj && typeof obj === "object") {
      for (const [k, v] of Object.entries(obj)) {
        if (k === "sectionAccents" || k === "de" || k === "id" || k === "layout") continue;
        const p = prefix ? `${prefix}.${k}` : k;
        if (typeof v === "string") {
          if (!inDe && k !== "de") fixString(entry, null, p, v);
        } else walk(entry, v, p, inDe || k === "de");
      }
    }
  }

  const seen = new Set();
  for (const entry of index.byCardId.values()) {
    const id = entry.study?.id || entry.de;
    if (seen.has(id)) continue;
    seen.add(id);
    if (entry.lv) fixString(entry, null, "lv", entry.lv);
    if (entry.study) walk(entry, entry.study, "study", false);
  }
  return results;
}

function main() {
  const hashDeBefore = md5(DE_FILE);
  const hashEnBefore = { data: md5(EN_FILE), www: md5(WWW_FILE) };

  const words = loadWords(EN_FILE);
  const index = buildIndex(words);
  const log = [];

  const group1 = PASS2_ONLY ? { applied: 0, keep: 0, mismatch: 0, notFound: 0, skipped: true } : applyGroup1(index, log);
  const remnants = PASS2_ONLY ? { resolved: 0, falsePositive: 0, needsReview: 0, notFound: 0, skipped: true } : applyRemnants(index, log);
  const remnantSweep = applyRemnantSweep(index, log);

  let accentFixes = 0;
  for (const entry of words) {
    if (entry.study) accentFixes += walkAndSyncSectionAccents(entry.study, log);
  }
  // Second accent pass after text normalization
  for (const entry of words) {
    if (entry.study) accentFixes += walkAndSyncSectionAccents(entry.study, log);
  }

  if (!DRY_RUN) {
    writeB2(EN_FILE, words);
    writeB2(WWW_FILE, words);
  }

  const hashDeAfter = md5(DE_FILE);
  const hashEnAfter = { data: md5(EN_FILE), www: md5(WWW_FILE) };

  const out = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    group1,
    remnants,
    remnantSweep,
    sectionAccentFixes: accentFixes,
    deReadOnly: hashDeBefore === hashDeAfter,
    hashDeBefore,
    hashDeAfter,
    hashEnBefore,
    hashEnAfter,
    log,
  };

  const outPath = path.join(__dirname, "en-b2-deterministic-closure-apply-log.json");
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  console.log(JSON.stringify({ group1, remnants, sectionAccentFixes: accentFixes, deReadOnly: out.deReadOnly }, null, 2));
}

main();
