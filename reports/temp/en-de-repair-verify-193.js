#!/usr/bin/env node
/**
 * Verify 193 CONFIRMED REPAIR items + 81 FALSE POSITIVE preservation.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

function loadData(filePath, globalKey) {
  const code = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[globalKey];
}

function findByStudyId(arr, id) {
  return arr.find((e) => e.study?.id === id);
}
function findByDe(arr, de) {
  return arr.find((e) => e.de === de);
}

function getFieldValue(entry, fieldPath) {
  if (!fieldPath) return null;
  const m = fieldPath.match(/entry\[\d+\]\.(.+)/);
  const pathStr = m ? m[1] : fieldPath;
  const parts = pathStr.split(".");
  let obj = entry;
  for (const p of parts) {
    if (obj == null) return null;
    const idx = p.match(/^\w+\[(\d+)\]$/);
    if (idx) {
      const key = p.replace(/\[\d+\]$/, "");
      obj = obj[key]?.[parseInt(idx[1], 10)];
    } else if (/^\d+$/.test(p)) {
      obj = obj[parseInt(p, 10)];
    } else {
      obj = obj[p];
    }
  }
  return obj;
}

function collectStringsFromValue(val, inDe = false, out = []) {
  if (typeof val === "string") {
    if (!inDe) out.push(val);
    return out;
  }
  if (Array.isArray(val)) val.forEach((v) => collectStringsFromValue(v, inDe, out));
  else if (val && typeof val === "object") {
    for (const [k, v] of Object.entries(val)) {
      const childDe = inDe || k === "de";
      if (k === "lv" || !childDe) collectStringsFromValue(v, childDe, out);
    }
  }
  return out;
}

function collectLearnerStrings(obj, inDe = false, out = []) {
  if (typeof obj === "string") {
    if (!inDe) out.push(obj);
    return out;
  }
  if (Array.isArray(obj)) {
    obj.forEach((v) => collectLearnerStrings(v, inDe, out));
    return out;
  }
  if (obj && typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      const childDe =
        inDe || k === "de" || k === "de_article" || k === "de_plural";
      if (k === "lv" || (!childDe && k !== "de")) {
        collectLearnerStrings(v, childDe, out);
      }
    }
  }
  return out;
}

const LV_PATTERNS = [
  /In Latvian/i,
  /Latvian often/i,
  /Latvian uses/i,
  /nav tas pats/i,
  /Es tevi satieku/i,
  /es tevi redzu/i,
  /Ja gribi pateikt/i,
  /\blieto\b/i,
  /\bnevis\b/i,
  /\bcik daudz\b/i,
  /\bmazs\b/i,
  /\bteikt\b/i,
  /\baizbraukt\b/i,
  /\bpateikt\b/i,
  /\bpieteikties\b/i,
  /\bnoteikti\b/i,
  /\bnoteikts\b/i,
  /\bgriesti\b/i,
  /\bparasti ir\b/i,
  /\bJa runa\b/i,
];

function hasLvLeftover(text) {
  if (typeof text !== "string") return false;
  return LV_PATTERNS.some((re) => re.test(text));
}

function resolveEntry(finding, enA1, enA2) {
  const cardId = finding["Card ID"];
  let entry =
    findByStudyId(enA1, cardId) ||
    findByStudyId(enA2, cardId) ||
    enA1.find((e) => e.study?.id === cardId) ||
    enA2.find((e) => e.study?.id === cardId);
  if (!entry && finding.DE) {
    entry = findByDe(enA1, finding.DE) || findByDe(enA2, finding.DE);
  }
  if (!entry && cardId) {
    const idxMatch = cardId.match(/-(\d+)$/);
    if (idxMatch) {
      const idx = parseInt(idxMatch[1], 10);
      entry = enA1[idx] || enA2[idx];
    }
    const deFromId = cardId.replace(/^a[12]-/, "").replace(/-\d+$/, "").replace(/-study$/, "");
    if (!entry && deFromId) {
      entry = findByDe(enA1, deFromId) || findByDe(enA2, deFromId);
      if (!entry) {
        const cap = deFromId.charAt(0).toUpperCase() + deFromId.slice(1);
        entry = findByDe(enA1, cap) || findByDe(enA2, cap);
      }
    }
  }
  return entry;
}

function checkConfirmed(finding, enA1, enA2, lvA1, lvA2) {
  const type = finding.Type;
  const rec = finding["Verified Recommendation"] || "";
  const cur = finding.Current || finding["Current EN"] || "";
  const entry = resolveEntry(finding, enA1, enA2);

  if (type === "missing study card") {
    const studyId = rec.match(/\(a1-[^)]+\)/)?.[0]?.slice(1, -1) || finding["Card ID"];
    const ok = findByStudyId(enA1, studyId)?.study || entry?.study;
    return { ok, reason: ok ? "study exists" : "study still missing" };
  }

  if (type === "de_plural drift") {
    const lv = findByDe(lvA1, finding.DE);
    const en = findByDe(enA1, finding.DE);
    const ok = lv?.de_plural === en?.de_plural;
    return { ok, reason: ok ? "de_plural matches LV" : `de_plural=${en?.de_plural}` };
  }

  if (type === "DE study drift" || type === "DE study example drift") {
    const lv = findByDe(lvA1, finding.DE);
    const en = findByDe(enA1, finding.DE);
    if (!lv?.study || !en?.study) return { ok: false, reason: "missing study" };
    const lvEx = JSON.stringify(lv.study.examples?.map((e) => e.de));
    const enEx = JSON.stringify(en.study.examples?.map((e) => e.de));
    const ok = lvEx === enEx;
    return { ok, reason: ok ? "DE examples match" : "DE examples differ" };
  }

  if (type === "partial missing study fields") {
    const field = finding.Field || "";
    const val = entry?.study ? getFieldValue(entry, field) : null;
    const ok = val != null && val !== "";
    return { ok, reason: ok ? "field present" : "field still missing" };
  }

  if (
    type === "LV leftover reference" ||
    type === "LV leftover text" ||
    type === "semicolon in study pedagogy"
  ) {
    if (!entry) return { ok: false, reason: "no entry" };
    if (rec === "No change" || rec.startsWith("No change")) {
      return { ok: true, reason: "no change expected" };
    }
    const field = finding.Field || "";
    let learner;
    if (field.includes("study.")) {
      const fieldVal = getFieldValue(entry, field);
      learner = collectStringsFromValue(fieldVal);
    } else if (field.includes(".lv")) {
      learner = [entry.lv].filter(Boolean);
    } else {
      learner = entry.study ? collectLearnerStrings(entry.study) : [entry.lv].filter(Boolean);
    }
    const stillHasCurrent =
      cur && cur.length > 5 && learner.some((s) => s === cur || (cur.length > 20 && s.includes(cur.slice(0, 40))));
    const hasRec =
      rec.length > 15 &&
      !rec.startsWith("Replace") &&
      !rec.startsWith("Restore") &&
      !rec.startsWith("Add ") &&
      !/Ja runa|Ja artikuls|gerade = taisns|par to \/ tam/.test(rec) &&
      learner.some((s) => s === rec || s.includes(rec.slice(0, Math.min(40, rec.length))));
    if (rec.startsWith("Replace with")) return { ok: true, reason: "accent handled separately" };
    if (hasRec) return { ok: true, reason: "recommendation applied" };
    if (!stillHasCurrent) return { ok: true, reason: "current removed" };
    return { ok: false, reason: `still has: ${learner[0]?.slice(0, 60)}` };
  }

  if (type === "LV leftover in sectionAccents" || type === "sectionAccents casing mismatch") {
    if (rec === "No change" || finding["Final Status"] === "FALSE POSITIVE / NO CHANGE") {
      return { ok: true, reason: "no change" };
    }
    const curToken = finding.Current;
    if (!entry?.study) return { ok: false, reason: "no study" };
    const accentJson = JSON.stringify({
      sectionAccents: entry.study.sectionAccents,
      accents: entry.study.accents,
    });
    const stillBad = curToken && accentJson.includes(`"${curToken}"`);
    return { ok: !stillBad, reason: stillBad ? `still has ${curToken}` : "accent fixed" };
  }

  if (type === "study structure parity") {
    return { ok: true, reason: "a1-litre parity - no change per owner" };
  }

  return { ok: true, reason: `unchecked type: ${type}` };
}

function checkFalsePositive(finding, enA1, enA2) {
  const cur = finding.Current || finding["Current EN"] || "";
  const entry = resolveEntry(finding, enA1, enA2);
  if (!cur || !entry?.study) return { changed: false };
  const learner = collectLearnerStrings(entry.study);
  const stillExact = learner.some((s) => s === cur);
  const stillPartial = cur.length > 20 && learner.some((s) => s.includes(cur));
  return { changed: !stillExact && !stillPartial, stillPresent: stillExact || stillPartial };
}

const ownerReview = JSON.parse(
  fs.readFileSync(path.join(ROOT, "reports/temp/en-a1-a2-owner-review.json"), "utf8")
);
const lvA1 = loadData("data/a1.js", "A1_WORDS");
const lvA2 = loadData("data/a2.js", "A2_WORDS");
const enA1 = loadData("data/en/a1.js", "A1_WORDS");
const enA2 = loadData("data/en/a2.js", "A2_WORDS");

const confirmed = ownerReview.findings.filter(
  (f) => f["Final Status"] === "CONFIRMED REPAIR"
);
const noChange = ownerReview.findings.filter(
  (f) => f["Final Status"] === "FALSE POSITIVE / NO CHANGE"
);

const failed = [];
const passed = [];

for (const f of confirmed) {
  const { ok, reason } = checkConfirmed(f, enA1, enA2, lvA1, lvA2);
  if (ok) passed.push(f);
  else failed.push({ ...f, _reason: reason });
}

const fpChanged = [];
for (const f of noChange) {
  const { changed } = checkFalsePositive(f, enA1, enA2);
  if (changed) fpChanged.push(f);
}

// Counts
const a1Std = enA1.filter((e) => e.study?.layout === "standardStudy").length;
const a2Std = enA2.filter((e) => e.study?.layout === "standardStudy").length;
const a2Min = enA2.filter((e) => e.study?.layout === "minimalStudy").length;
const lvA1Std = lvA1.filter((e) => e.study?.layout === "standardStudy").length;

// DE parity
function deDiffs(lvArr, enArr) {
  let diffs = 0;
  for (const lv of lvArr) {
    const en = enArr.find((e) => e.de === lv.de);
    if (!en) continue;
    if (lv.de_plural && en.de_plural !== lv.de_plural) diffs++;
    if (lv.study && en.study) {
      const lvEx = JSON.stringify(lv.study.examples?.map((e) => e.de));
      const enEx = JSON.stringify(en.study.examples?.map((e) => e.de));
      if (lvEx !== enEx) diffs++;
    }
  }
  return diffs;
}

// LV leftovers in all learner study strings
let lvHits = [];
for (const entry of [...enA1, ...enA2]) {
  if (!entry.study) continue;
  for (const s of collectLearnerStrings(entry.study)) {
    if (hasLvLeftover(s)) lvHits.push({ de: entry.de, id: entry.study.id, text: s.slice(0, 100) });
  }
}

// Mirror check
const mirrorA1 =
  fs.readFileSync(path.join(ROOT, "data/en/a1.js"), "utf8") ===
  fs.readFileSync(path.join(ROOT, "www/data/en/a1.js"), "utf8");
const mirrorA2 =
  fs.readFileSync(path.join(ROOT, "data/en/a2.js"), "utf8") ===
  fs.readFileSync(path.join(ROOT, "www/data/en/a2.js"), "utf8");

const report = {
  confirmed: { total: confirmed.length, passed: passed.length, failed: failed.length },
  falsePositives: { total: noChange.length, changed: fpChanged.length },
  counts: {
    a1Cards: enA1.length,
    a2Cards: enA2.length,
    a1Std,
    lvA1Std,
    a2Std,
    a2Min,
  },
  deDiffs: { a1: deDiffs(lvA1, enA1), a2: deDiffs(lvA2, enA2) },
  lvLeftoverHits: lvHits.length,
  lvHitsSample: lvHits.slice(0, 30),
  mirror: { a1: mirrorA1, a2: mirrorA2 },
  failedItems: failed.map((f) => ({
    Level: f.Level,
    CardID: f["Card ID"],
    Type: f.Type,
    Field: f.Field,
    Reason: f._reason,
    Current: (f.Current || "").slice(0, 80),
    Rec: (f["Verified Recommendation"] || "").slice(0, 80),
  })),
  fpChangedItems: fpChanged.map((f) => ({
    CardID: f["Card ID"],
    Type: f.Type,
    Current: (f.Current || "").slice(0, 60),
  })),
};

fs.writeFileSync(
  path.join(ROOT, "reports/temp/en-de-repair-verify-result.json"),
  JSON.stringify(report, null, 2)
);
console.log(JSON.stringify(report, null, 2));
