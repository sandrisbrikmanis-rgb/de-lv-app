#!/usr/bin/env node
/** EN-DE B1 CRITICAL micro-regression #2 — b1-fressen sectionAccents final */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function collectEnStrings(obj, out = []) {
  if (typeof obj === "string") out.push(obj);
  else if (Array.isArray(obj)) obj.forEach((x) => collectEnStrings(x, out));
  else if (obj && typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === "de" || k === "sectionAccents") continue;
      collectEnStrings(v, out);
    }
  }
  return out;
}

function accentTargets(accents, sectionTexts) {
  const targets = [];
  function walk(node, p) {
    if (!node) return;
    if (typeof node === "string") targets.push({ path: p, text: node });
    else if (Array.isArray(node)) node.forEach((v, i) => walk(v, `${p}[${i}]`));
    else if (typeof node === "object")
      for (const [k, v] of Object.entries(node)) walk(v, p ? `${p}.${k}` : k);
  }
  walk(accents, "sectionAccents");
  return targets;
}

function sectionTextForPath(study, accentPath) {
  const tipText = study.tip?.leftBlocks?.[0]?.text;
  const tipStr = typeof tipText === "string" ? tipText : "";
  const expl = study.explanation || "";
  if (accentPath.includes("explanation")) return expl;
  if (accentPath.includes("tip")) return tipStr;
  if (accentPath.includes("important")) return study.important?.text || "";
  if (accentPath.includes("examples[")) {
    const m = accentPath.match(/examples\[(\d+)\]/);
    if (m) {
      const ex = study.examples?.[Number(m[1])];
      if (accentPath.includes(".de.")) return ex?.de || "";
      return ex?.lv || "";
    }
  }
  if (accentPath.includes("comparison[")) {
    const m = accentPath.match(/comparison\[(\d+)\]/);
    if (m) {
      const row = study.comparison?.[Number(m[1])];
      if (accentPath.includes(".meaning")) return row?.meaning || "";
      if (accentPath.includes(".word")) return row?.word || "";
      if (accentPath.includes(".example")) return row?.example || "";
    }
  }
  return "";
}

const lv = load("data/b1.js");
const en = load("data/en/b1.js");
const findings = [];

function add(sev, field, issue, kind = "content", accentKind = null) {
  findings.push({ severity: sev, field, issue, kind, accentKind });
}

const fressen = en.find((e) => e.de === "fressen");
const fExp =
  "fressen is the usual verb for animals eating. When used about people, it is rude or disparaging and can mean “gobble” or “wolf down”.";
const tipExpected = "Animal frisst, man isst. For a person, fressen is intentionally rude.";

if (fressen.lv !== "Eat (of animals)") add("CRITICAL", "lv", "lv mismatch");
if (fressen.study.translation !== "Eat (of animals)") add("CRITICAL", "study.translation", "translation mismatch");
if (fressen.study.explanation !== fExp) add("CRITICAL", "study.explanation", "explanation mismatch");
if (fressen.study.comparison[0].meaning !== "Eat (of animals) / gobble") add("HIGH", "comparison[0].meaning", "comparison mismatch");
if (fressen.study.comparison[1].meaning !== "To eat (of people)") add("HIGH", "comparison[1].meaning", "comparison mismatch");
if (fressen.study.tip.leftBlocks[0].text !== tipExpected) add("CRITICAL", "study.tip", "tip text was modified");

const content = collectEnStrings({ lv: fressen.lv, study: fressen.study }).join(" ").toLowerCase();
if (content.includes("tomorrow")) add("CRITICAL", "content", "tomorrow leftover");
if (/rupji|rīt|sekot|latvian/.test(content)) add("HIGH", "content", "Latvian leftover in content");

for (const t of accentTargets(fressen.study.sectionAccents)) {
  if (/rupji|rīt|sekot|latvian/i.test(t.text))
    add("MEDIUM", t.path, `Latvian/stale token "${t.text}"`, "sectionAccents", "PEDAGOGICAL");
  if (/tomorrow/i.test(t.text))
    add("MEDIUM", t.path, `stale tomorrow "${t.text}"`, "sectionAccents", "PEDAGOGICAL");

  const section = sectionTextForPath(fressen.study, t.path);
  if (section && !section.toLowerCase().includes(t.text.toLowerCase()))
    add("MEDIUM", t.path, `target "${t.text}" not in section text`, "sectionAccents", "TECHNICAL");
}

const totals = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, sectionAccentsTECHNICAL: 0, sectionAccentsPEDAGOGICAL: 0 };
for (const f of findings) {
  if (f.kind === "sectionAccents") {
    if (f.accentKind === "TECHNICAL") totals.sectionAccentsTECHNICAL++;
    else totals.sectionAccentsPEDAGOGICAL++;
  } else if (totals[f.severity] !== undefined) totals[f.severity]++;
}

const allZero = Object.values(totals).every((n) => n === 0);
const verdict = allZero
  ? "EN–DE B1 CRITICAL MICRO-REGRESSION #2 — PASS"
  : "EN–DE B1 CRITICAL MICRO-REGRESSION #2 — FAIL — FOLLOW-UP REQUIRED";
const cycleClosed = allZero ? "EN–DE B1 CRITICAL CYCLE — CLOSED — READY FOR HIGH OWNER REVIEW" : null;

const validation = {
  javascriptSyntax: true,
  totalCards: en.length,
  structuralParity: en.length === lv.length && en.length === 3367,
  orderParity: lv.every((e, i) => e.de === en[i].de),
  idParity: lv.every((e, i) => (e.study?.id || null) === (en[i].study?.id || null)),
  deReadOnly: lv.every((e, i) => e.de === en[i].de),
  mirrorParity:
    fs.readFileSync(path.join(ROOT, "data/en/b1.js"), "utf8") ===
    fs.readFileSync(path.join(ROOT, "www/data/en/b1.js"), "utf8"),
};

const output = {
  generatedAt: new Date().toISOString(),
  card: "b1-fressen",
  accentFix: { old: "rupji", new: "rude", tipText: tipExpected },
  findings,
  totals,
  verdict,
  criticalCycleClosed: cycleClosed,
  validation,
};

fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-critical-micro-regression-2.json"), JSON.stringify(output, null, 2));

const md = [
  "# EN–DE B1 CRITICAL Micro-Regression #2",
  "",
  `**Generated:** ${output.generatedAt}`,
  "",
  "## Accent fix",
  "",
  "- Old: `rupji`",
  "- New: `rude`",
  `- Tip text (unchanged): ${tipExpected}`,
  "",
  "## Totals",
  "",
  `- CRITICAL: **${totals.CRITICAL}**`,
  `- HIGH: **${totals.HIGH}**`,
  `- MEDIUM: **${totals.MEDIUM}**`,
  `- LOW: **${totals.LOW}**`,
  `- sectionAccents TECHNICAL: **${totals.sectionAccentsTECHNICAL}**`,
  `- sectionAccents PEDAGOGICAL: **${totals.sectionAccentsPEDAGOGICAL}**`,
  "",
  "## Findings",
  "",
  findings.length ? findings.map((f) => `- ${f.severity} ${f.field}: ${f.issue}`).join("\n") : "_(none)_",
  "",
  "## FINAL VERDICT",
  "",
  `## ${verdict}`,
  "",
  cycleClosed ? `## ${cycleClosed}` : "",
].join("\n");

fs.writeFileSync(path.join(ROOT, "reports/en-b1-critical-micro-regression-2.md"), md);
console.log(JSON.stringify({ verdict, totals, cycleClosed }, null, 2));
