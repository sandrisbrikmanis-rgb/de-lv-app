#!/usr/bin/env node
/**
 * ET-DE A1 audit report generator (read-only). Writes reports/temp/et-a1-findings-consolidated.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { ROOT } = require("./lib/audit-common");

const LV_FILE = path.join(ROOT, "data", "a1.js");
const ET_FILE = path.join(ROOT, "data", "et", "a1.js");
const AUDIT_DATA = path.join(ROOT, "reports", "temp", "et-a1-audit-data.json");
const OUT = path.join(ROOT, "reports", "temp", "et-a1-findings-consolidated.json");

const LV_DIACRITICS = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS = /^(mazs|teikt|iet|lietus|laiks|reiz|pie|uz|viss)$/i;
const ENGLISH_ACCENT = /^(At|To|The|And|Or|In|On)$/;

function load(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function walkAccents(obj, visitor, ctx = { path: "", inDe: false }) {
  if (typeof obj === "string") {
    visitor(obj, ctx);
    return;
  }
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => walkAccents(item, visitor, { ...ctx, path: `${ctx.path}[${i}]` }));
    return;
  }
  if (obj && typeof obj === "object") {
    for (const [key, val] of Object.entries(obj)) {
      walkAccents(val, visitor, {
        path: ctx.path ? `${ctx.path}.${key}` : key,
        inDe: ctx.inDe || key === "de",
      });
    }
  }
}

function getSectionText(study, section) {
  if (section === "explanation") {
    const e = study.explanation;
    if (Array.isArray(e)) return e.join(" ");
    return String(e || "");
  }
  if (section === "tip") {
    const tip = study.tip;
    if (Array.isArray(tip)) return tip.map((t) => (typeof t === "object" ? [t.text, t.example].filter(Boolean).join(" ") : t)).join(" ");
    if (tip && typeof tip === "object") return [tip.text, tip.example].filter(Boolean).join(" ");
    return String(tip || "");
  }
  if (section === "important") {
    const imp = study.important;
    if (Array.isArray(imp)) return imp.map((t) => (typeof t === "object" ? [t.text, t.example].filter(Boolean).join(" ") : t)).join(" ");
    if (imp && typeof imp === "object") return [imp.text, imp.example].filter(Boolean).join(" ");
    return String(imp || "");
  }
  if (section === "examples" && Array.isArray(study.examples)) {
    return study.examples.map((ex) => ex.lv).filter(Boolean).join(" ");
  }
  if (section === "comparison" && Array.isArray(study.comparison)) {
    return study.comparison.map((c) => [c.meaning, c.example].filter(Boolean).join(" ")).join(" ");
  }
  return "";
}

function boundaryMatch(text, term) {
  if (!text || !term) return false;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escaped}(?![\\p{L}\\p{N}_])`, "iu").test(text);
  } catch {
    return text.toLowerCase().includes(term.toLowerCase());
  }
}

function main() {
  const lv = load(LV_FILE);
  const et = load(ET_FILE);
  const auditData = JSON.parse(fs.readFileSync(AUDIT_DATA, "utf8"));

  const findings = [];
  const seen = new Set();

  function add(f) {
    const key = `${f.id}|${f.field}|${f.existingBsText}|${f.severity}`;
    if (seen.has(key)) return;
    seen.add(key);
    findings.push({ ...f, file: "data/et/a1.js" });
  }

  // LV remnants in sectionAccents
  for (const entry of et) {
    if (!entry.study?.sectionAccents) continue;
    const id = entry.study.id;
    const lvEntry = lv.find((e) => e.study?.id === id);
    walkAccents(entry.study.sectionAccents, (term, ctx) => {
      if (ctx.inDe) return;
      if (LV_DIACRITICS.test(term) || LV_WORDS.test(term)) {
        add({
          id,
          field: `study.sectionAccents.${ctx.path}`,
          status: "ERROR",
          severity: "high",
          existingBsText: term,
          lvEtalon: "(LV term in sectionAccents — should be Estonian)",
          deContext: entry.de,
          justification: `Latvian remnant "${term}" in sectionAccents; ET section text uses Estonian, accents must match ET text.`,
          recommendedFix: `Replace with the exact Estonian term from the corresponding ET study section (e.g. mali, reći, trčati, vrijeme, jednom).`,
          standardPoint: "§11 sectionAccents — no LV words in accents",
        });
      }
      if (ENGLISH_ACCENT.test(term)) {
        add({
          id,
          field: `study.sectionAccents.${ctx.path}`,
          status: "ERROR",
          severity: "high",
          existingBsText: term,
          lvEtalon: lvEntry ? JSON.stringify(lvEntry.study?.sectionAccents).slice(0, 120) : "",
          deContext: entry.de,
          justification: `English remnant "${term}" in sectionAccents instead of Estonian translation term.`,
          recommendedFix: `Replace with Estonian terms from examples (e.g. na, uz, kod) matching the ET lv field text.`,
          standardPoint: "§11 sectionAccents — ET translations in accents",
        });
      }
    });
  }

  // Accent term not in text — dedupe by card+term
  const accentByCard = new Map();
  for (const iss of auditData.sectionAccents.issues) {
    if (LV_WORDS.test(iss.term) || ENGLISH_ACCENT.test(iss.term)) continue;
    const key = `${iss.id}::${iss.term}`;
    if (accentByCard.has(key)) continue;
    const entry = et.find((e) => e.study?.id === iss.id);
    if (!entry) continue;
    const text = getSectionText(entry.study, iss.section);
    const caseInsensitive = boundaryMatch(text, iss.term) || new RegExp(iss.term, "i").test(text);
    if (caseInsensitive) {
      add({
        id: iss.id,
        field: `study.sectionAccents (${iss.section})`,
        status: "WARNING",
        severity: "low",
        existingBsText: iss.term,
        lvEtalon: "—",
        deContext: entry.de,
        justification: `Accent term "${iss.term}" not found with case-sensitive boundary match; likely capitalization mismatch (term exists with different casing in ET text).`,
        recommendedFix: `Align accent term casing with ET section text, or adjust ET text to match accent.`,
        standardPoint: "§11 sectionAccents — term must exist in section text",
      });
    } else {
      add({
        id: iss.id,
        field: `study.sectionAccents (${iss.section})`,
        status: "ERROR",
        severity: "medium",
        existingBsText: iss.term,
        lvEtalon: "—",
        deContext: entry.de,
        justification: `Accent term "${iss.term}" not found in ET ${iss.section} text.`,
        recommendedFix: `Update accent term to match exact word in ET section text, or fix ET text.`,
        standardPoint: "§11 sectionAccents — term must exist in section text",
      });
    }
  }

  // Main translation WARNING
  const warn = auditData.mainTranslations.entries.find((e) => e.status === "WARNING");
  if (warn) {
    add({
      id: warn.id,
      field: "lv (main translation)",
      status: "WARNING",
      severity: "low",
      existingBsText: warn.etMain,
      lvEtalon: warn.lvGloss,
      deContext: warn.de,
      justification: "Capitalized main translation flagged by heuristic; Božić is correct as proper noun/holiday name in Estonian.",
      recommendedFix: "No change needed.",
      standardPoint: "§7 main translation — capitalization",
    });
  }

  // False positive: a1-liter
  // (documented in report, not added as finding)

  const counts = { critical: 0, high: 0, medium: 0, low: 0, warning: 0 };
  for (const f of findings) {
    if (f.status === "WARNING") counts.warning++;
    else if (f.severity === "critical") counts.critical++;
    else if (f.severity === "high") counts.high++;
    else if (f.severity === "medium") counts.medium++;
    else counts.low++;
  }

  const out = {
    generatedAt: new Date().toISOString(),
    totals: {
      entries: et.length,
      studyCards: et.filter((e) => e.study).length,
      findings: findings.length,
      ...counts,
    },
    mainTranslations: auditData.mainTranslations.summary,
    structuralPass: auditData.structural.pass,
    germanIntegrityPass: auditData.germanIntegrity.pass,
    technicalPass: auditData.technical.pass,
    lvRemnantsMainPass: auditData.lvRemnants.pass,
    layerIdentityPass: auditData.layerIdentity.pass,
    findings,
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out.totals, null, 2));
  console.log(`Wrote ${OUT}`);
}

main();
