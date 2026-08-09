#!/usr/bin/env node
/** EN-DE B1 CRITICAL micro-regression #1 — b1-fressen + b1-verfolgen sectionAccents cleanup */
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

function collectEnStrings(obj, out = [], skipAccents = true) {
  if (typeof obj === "string") out.push(obj);
  else if (Array.isArray(obj)) obj.forEach((x) => collectEnStrings(x, out, skipAccents));
  else if (obj && typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === "de" || (skipAccents && k === "sectionAccents")) continue;
      collectEnStrings(v, out, skipAccents);
    }
  }
  return out;
}

function accentTargets(accents) {
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

const lv = load("data/b1.js");
const en = load("data/en/b1.js");
const findings = [];

function add(sev, card, field, issue, kind = "content", accentKind = null) {
  findings.push({ severity: sev, cardId: card, field, issue, kind, accentKind });
}

const fressen = en.find((e) => e.de === "fressen");
const verfolgen = en.find((e) => e.study?.id === "b1-verfolgen");

const fExp =
  "fressen is the usual verb for animals eating. When used about people, it is rude or disparaging and can mean “gobble” or “wolf down”.";

// b1-fressen content
if (fressen.lv !== "Eat (of animals)") add("CRITICAL", "b1-fressen", "lv", "lv mismatch");
if (fressen.study.translation !== "Eat (of animals)") add("CRITICAL", "b1-fressen", "study.translation", "translation mismatch");
if (fressen.study.explanation !== fExp) add("CRITICAL", "b1-fressen", "study.explanation", "explanation changed unexpectedly");
if (fressen.study.comparison[0].meaning !== "Eat (of animals) / gobble") add("HIGH", "b1-fressen", "comparison[0].meaning", "comparison mismatch");
if (fressen.study.comparison[1].meaning !== "To eat (of people)") add("HIGH", "b1-fressen", "comparison[1].meaning", "comparison mismatch");

const fText = collectEnStrings({ lv: fressen.lv, study: fressen.study }).join(" ").toLowerCase();
if (fText.includes("tomorrow")) add("CRITICAL", "b1-fressen", "content", "tomorrow in learner-visible text");
if (/latvian|in latvian|rīt|rupji|sekot/.test(fText)) add("HIGH", "b1-fressen", "content", "Latvian leftover in content");

for (const t of accentTargets(fressen.study.sectionAccents)) {
  if (/tomorrow/i.test(t.text))
    add("MEDIUM", "b1-fressen", t.path, "stale tomorrow accent", "sectionAccents", "PEDAGOGICAL");
  if (/sekot|rīt|rupji|latvian/i.test(t.text))
    add("MEDIUM", "b1-fressen", t.path, "Latvian in sectionAccents", "sectionAccents", "PEDAGOGICAL");
}

const explPurple = fressen.study.sectionAccents.explanation?.purple || [];
for (const target of explPurple) {
  if (!fExp.toLowerCase().includes(target.toLowerCase()))
    add("MEDIUM", "b1-fressen", "sectionAccents.explanation.purple", `target "${target}" not in explanation`, "sectionAccents", "TECHNICAL");
}

// b1-verfolgen content
const vExp = "Main idea: verfolgen means to follow, chase, or pursue. The meaning becomes stronger when the object is a person.";
if (verfolgen.study.explanation !== vExp) add("CRITICAL", "b1-verfolgen", "study.explanation", "explanation mismatch");
const vText = collectEnStrings({ lv: verfolgen.lv, study: verfolgen.study }).join(" ");
if (/verförchen|verschreibung|persehen/.test(vText)) add("CRITICAL", "b1-verfolgen", "content", "corrupt German in EN");
if (/sekot|latvian|rīt/.test(vText.toLowerCase())) add("HIGH", "b1-verfolgen", "content", "Latvian in content");

const folgenMeaning = verfolgen.study.comparison[1].meaning;
for (const t of accentTargets(verfolgen.study.sectionAccents)) {
  if (/sekot|rīt|latvian/i.test(t.text))
    add("MEDIUM", "b1-verfolgen", t.path, "Latvian in sectionAccents", "sectionAccents", "PEDAGOGICAL");
  if (t.path.includes("comparison[1].meaning") && t.text && !folgenMeaning.toLowerCase().includes(t.text.toLowerCase()))
    add("MEDIUM", "b1-verfolgen", t.path, `target "${t.text}" not in comparison[1].meaning`, "sectionAccents", "TECHNICAL");
}

const totals = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, sectionAccentsTECHNICAL: 0, sectionAccentsPEDAGOGICAL: 0 };
for (const f of findings) {
  if (f.kind === "sectionAccents") {
    if (f.accentKind === "TECHNICAL") totals.sectionAccentsTECHNICAL++;
    else totals.sectionAccentsPEDAGOGICAL++;
  } else if (totals[f.severity] !== undefined) totals[f.severity]++;
}

const allZero =
  totals.CRITICAL === 0 &&
  totals.HIGH === 0 &&
  totals.MEDIUM === 0 &&
  totals.LOW === 0 &&
  totals.sectionAccentsTECHNICAL === 0 &&
  totals.sectionAccentsPEDAGOGICAL === 0;

const verdict = allZero
  ? "EN–DE B1 CRITICAL MICRO-REGRESSION #1 — PASS"
  : "EN–DE B1 CRITICAL MICRO-REGRESSION #1 — FAIL — FOLLOW-UP REQUIRED";

const criticalCycleClosed = allZero ? "EN–DE B1 CRITICAL CYCLE — CLOSED" : null;

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
  cardsAudited: 2,
  fixes: {
    "b1-fressen": "sectionAccents.explanation.purple → animals eating, gobble, wolf down",
    "b1-verfolgen": "sectionAccents.comparison[1].meaning.purple → follow",
  },
  findings,
  totals,
  verdict,
  criticalCycleClosed,
  validation,
};

fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-critical-micro-regression-1.json"), JSON.stringify(output, null, 2));

const md = [
  "# EN–DE B1 CRITICAL Micro-Regression #1",
  "",
  `**Generated:** ${output.generatedAt}`,
  "",
  "## Fixes applied",
  "",
  "- **b1-fressen** `sectionAccents.explanation.purple`: `animals eating`, `gobble`, `wolf down`",
  "- **b1-verfolgen** `sectionAccents.comparison[1].meaning.purple`: `follow`",
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
  findings.length ? findings.map((f) => `- ${f.severity} ${f.cardId} ${f.field}: ${f.issue}`).join("\n") : "_(none)_",
  "",
  "## FINAL VERDICT",
  "",
  `## ${verdict}`,
  "",
  criticalCycleClosed ? `## ${criticalCycleClosed}` : "",
].join("\n");

fs.writeFileSync(path.join(ROOT, "reports/en-b1-critical-micro-regression-1.md"), md);
console.log(JSON.stringify({ verdict, totals, criticalCycleClosed, findings: findings.length }, null, 2));
