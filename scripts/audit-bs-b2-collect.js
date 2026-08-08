#!/usr/bin/env node
/**
 * BS-DE B2 deterministic audit collector (read-only).
 * Writes reports/temp/bs-b2-audit-data.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const LV_FILE = path.join(ROOT, "data", "b2.js");
const BS_FILE = path.join(ROOT, "data", "bs", "b2.js");
const WWW_FILE = path.join(ROOT, "www", "data", "bs", "b2.js");
const OUT = path.join(ROOT, "reports", "temp", "bs-b2-audit-data.json");

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const EN_WORDS = /\b(Fluffy|the|and|with|from|into|about|your|their|this|that|have|been|were|will|would|could|should)\b/i;
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
const EKAVISM = /\b(vreme|uspeh|dete|mleko|lekar|rešiti|rešenje|nemački|sledeći|ovde|lepo|vredno)\b/i;

function hasTechnicalArtifact(text) {
  return text.includes("[object Object]")
    || text.includes("```")
    || /^(Translation|Tulkojums):/im.test(text)
    || /\bTODO\b|\bTBD\b/.test(text)
    || text.trim() === "..."
    || text === "undefined"
    || text === "null";
}

function load(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B2_WORDS;
}

function entryId(entry, index) {
  return entry.study?.id || `b2-${entry.de}-${index}`;
}

function walkStrings(value, visitor, ctx = { path: "", parentKey: "", inDe: false }) {
  if (value === null || value === undefined) return;
  if (typeof value === "string") {
    visitor(value, ctx);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, i) => walkStrings(item, visitor, { ...ctx, path: `${ctx.path}[${i}]` }));
    return;
  }
  if (typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      const inDe = ctx.inDe || key === "de" || key === "de_article" || key === "de_plural";
      walkStrings(child, visitor, {
        path: ctx.path ? `${ctx.path}.${key}` : key,
        parentKey: key,
        inDe,
      });
    }
  }
}

function runExternalCheck(cmd, parseJson = false) {
  try {
    const out = execSync(cmd, { encoding: "utf8", stdio: ["pipe", "pipe", "pipe"] });
    if (parseJson) return { pass: true, data: JSON.parse(out) };
    return { pass: true, data: out.trim() };
  } catch (error) {
    if (parseJson) {
      try {
        return { pass: false, data: JSON.parse(error.stdout || "{}") };
      } catch {
        return { pass: false, data: null, error: error.message };
      }
    }
    return { pass: false, error: error.message };
  }
}

function main() {
  const lv = load(LV_FILE);
  const bs = load(BS_FILE);
  const data = {
    meta: {
      date: new Date().toISOString(),
      lvFile: "data/b2.js",
      bsFile: "data/bs/b2.js",
      wwwFile: "www/data/bs/b2.js",
      lvCount: lv.length,
      bsCount: bs.length,
    },
    deterministic: {},
    structural: { issues: [], pass: true },
    germanIntegrity: { issues: [], pass: true },
    technical: { issues: [], pass: true },
    lvRemnants: { issues: [], pass: true, count: 0 },
    enRemnants: { issues: [], pass: true, count: 0 },
    ekavismCandidates: { issues: [], count: 0 },
    sectionAccentsTechnical: { issues: [], pass: true, count: 0 },
    studyCounts: { standardStudy: 0, minimalStudy: 0, total: 0 },
  };

  // External checks
  data.deterministic.syntax = runExternalCheck("node --check data/bs/b2.js");
  data.deterministic.mirror = runExternalCheck("diff -q data/bs/b2.js www/data/bs/b2.js");
  data.deterministic.deCompliance = runExternalCheck("node scripts/verify-bs-de-compliance.js", true);
  data.deterministic.parity = runExternalCheck("node scripts/audit-language-parity.js --lang=bs", true);
  data.deterministic.mojibake = runExternalCheck("node scripts/audit-mojibake.js --lang=bs", true);
  const studyDesign = runExternalCheck("node scripts/validate-study-design.js --lang=bs", true);
  data.deterministic.studyDesign = studyDesign;
  const b2Study = studyDesign.data?.perFile?.find((f) => f.file.includes("b2.js"));
  data.sectionAccentsTechnical.count = b2Study?.sectionAccentIssues || 0;
  data.sectionAccentsTechnical.pass = (b2Study?.sectionAccentIssues || 0) === 0;

  data.layerIdentity = {
    pass: fs.readFileSync(BS_FILE).equals(fs.readFileSync(WWW_FILE)),
    identical: fs.readFileSync(BS_FILE).equals(fs.readFileSync(WWW_FILE)),
  };

  if (lv.length !== bs.length) {
    data.structural.pass = false;
    data.structural.issues.push({ severity: "critical", message: `Count mismatch LV=${lv.length} BS=${bs.length}` });
  }

  const ids = new Set();
  for (let i = 0; i < Math.min(lv.length, bs.length); i++) {
    const lvE = lv[i];
    const bsE = bs[i];
    const id = entryId(bsE, i);

    if (lvE.de !== bsE.de) {
      data.structural.pass = false;
      data.structural.issues.push({ severity: "critical", id, message: `Order mismatch at ${i}: ${lvE.de}` });
    }

    if (bsE.study?.id) {
      if (ids.has(bsE.study.id)) {
        data.structural.pass = false;
        data.structural.issues.push({ severity: "high", id, message: `Duplicate id ${bsE.study.id}` });
      }
      ids.add(bsE.study.id);
    }

    const lvLayout = lvE.study?.layout || (lvE.study ? "standardStudy" : null);
    const bsLayout = bsE.study?.layout || (bsE.study ? "standardStudy" : null);
    if (lvLayout !== bsLayout) {
      data.structural.pass = false;
      data.structural.issues.push({ severity: "high", id, de: bsE.de, message: `Layout mismatch ${lvLayout} vs ${bsLayout}` });
    }

    if (bsE.study) {
      data.studyCounts.total += 1;
      if (bsE.study.layout === "minimalStudy") data.studyCounts.minimalStudy += 1;
      else data.studyCounts.standardStudy += 1;
    }

    for (const field of ["de", "de_article", "de_plural", "level"]) {
      if (lvE[field] !== bsE[field]) {
        data.germanIntegrity.pass = false;
        data.germanIntegrity.issues.push({ severity: "critical", id, field, lvValue: lvE[field], bsValue: bsE[field] });
      }
    }

    walkStrings(bsE, (text, ctx) => {
      if (ctx.inDe || ctx.parentKey === "de" || ctx.parentKey === "de_article" || ctx.parentKey === "de_plural") return;
      if (!text.trim()) {
        if (["lv", "translation"].includes(ctx.parentKey)) {
          data.technical.pass = false;
          data.technical.issues.push({ severity: "high", id, path: ctx.path, message: "Empty required field" });
        }
        return;
      }
      if (MOJIBAKE.test(text) || hasTechnicalArtifact(text)) {
        data.technical.pass = false;
        data.technical.issues.push({ severity: "critical", id, path: ctx.path, text: text.slice(0, 120) });
      }
      if (LV_ONLY.test(text)) {
        data.lvRemnants.pass = false;
        data.lvRemnants.issues.push({ severity: "critical", id, path: ctx.path, text: text.slice(0, 200) });
      }
      if (EN_WORDS.test(text) && (ctx.parentKey === "lv" || ctx.path.includes(".lv"))) {
        data.enRemnants.pass = false;
        data.enRemnants.issues.push({ severity: "high", id, path: ctx.path, text: text.slice(0, 120) });
      }
      if (EKAVISM.test(text)) {
        data.ekavismCandidates.issues.push({ severity: "warning", id, path: ctx.path, text: text.slice(0, 120) });
      }
    }, { path: `entry[${i}]`, parentKey: "", inDe: false });
  }

  data.lvRemnants.count = data.lvRemnants.issues.length;
  data.enRemnants.count = data.enRemnants.issues.length;
  data.ekavismCandidates.count = data.ekavismCandidates.issues.length;
  data.meta.lvStudyCount = lv.filter((e) => e.study).length;
  data.meta.bsStudyCount = bs.filter((e) => e.study).length;

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(data, null, 2));
  console.log(`Wrote ${OUT}`);
  console.log(JSON.stringify({
    lvCount: data.meta.lvCount,
    bsCount: data.meta.bsCount,
    study: data.studyCounts,
    lvRemnants: data.lvRemnants.count,
    enRemnants: data.enRemnants.count,
    ekavismCandidates: data.ekavismCandidates.count,
    sectionAccentsTechnical: data.sectionAccentsTechnical.count,
    structuralPass: data.structural.pass,
  }, null, 2));
}

main();
