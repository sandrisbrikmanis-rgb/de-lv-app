#!/usr/bin/env node
/**
 * EN-DE B1 CRITICAL targeted regression #1 — 4 cards after repair follow-up.
 */
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

function textContainsAny(text, tokens) {
  const t = String(text).toLowerCase();
  return tokens.filter((x) => t.includes(x.toLowerCase()));
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

function accentInSection(sectionText, target) {
  if (!sectionText) return false;
  const s = Array.isArray(sectionText) ? sectionText.join(" ") : String(sectionText);
  return s.toLowerCase().includes(target.toLowerCase());
}

const lv = load("data/b1.js");
const en = load("data/en/b1.js");
const enWww = load("www/data/en/b1.js");

const findings = [];
function add(sev, card, field, issue, kind = "content") {
  findings.push({ severity: sev, cardId: card, field, issue, kind });
}

const baum = en.find((e) => e.de === "Baumstumpf");
const lvBaum = lv.find((e) => e.de === "Baumstumpf");
const fressen = en.find((e) => e.de === "fressen");
const lvFressen = lv.find((e) => e.de === "fressen");
const tau2 = en.find((e) => e.study?.id === "b1-tau-2");
const lvTau2 = lv.find((e) => e.study?.id === "b1-tau-2");
const verfolgen = en.find((e) => e.study?.id === "b1-verfolgen");
const lvVerfolgen = lv.find((e) => e.study?.id === "b1-verfolgen");

const cardResults = [];

function auditCard(meta, entry, lvEntry) {
  const id = meta.id || meta.lemma;
  const cardFindings = findings.filter((f) => f.cardId === id || f.cardId === meta.lemma);

  // DE read-only for this card
  if (entry.de !== lvEntry.de) add("HIGH", id, "de", "DE lemma mismatch vs LV master");

  const result = {
    cardId: id,
    lemma: meta.lemma,
    pass: true,
    remainingCRITICAL: 0,
    remainingHIGH: 0,
    remainingMEDIUM: 0,
    remainingLOW: 0,
    sectionAccentsTECHNICAL: 0,
    sectionAccentsPEDAGOGICAL: 0,
  };

  for (const f of findings) {
    if (f.cardId !== id && f.cardId !== meta.lemma) continue;
    if (f.kind === "sectionAccents") {
      if (f.accentKind === "TECHNICAL") result.sectionAccentsTECHNICAL++;
      else result.sectionAccentsPEDAGOGICAL++;
      continue;
    }
    const sev = f.severity;
    if (sev === "CRITICAL") result.remainingCRITICAL++;
    else if (sev === "HIGH") result.remainingHIGH++;
    else if (sev === "MEDIUM") result.remainingMEDIUM++;
    else if (sev === "LOW") result.remainingLOW++;
    if (sev === "CRITICAL" || sev === "HIGH") result.pass = false;
  }

  cardResults.push(result);
  return result;
}

// --- Baumstumpf ---
if (baum.lv !== "Tree stump") add("CRITICAL", "Baumstumpf", "lv", `Expected "Tree stump", got "${baum.lv}"`);
if (baum.lv.includes(";")) add("HIGH", "Baumstumpf", "lv", "Semicolon in main translation");
if (textContainsAny(baum.lv, ["Strain"]).length) add("CRITICAL", "Baumstumpf", "lv", "Still contains Strain");

// --- fressen ---
const fExp =
  "fressen is the usual verb for animals eating. When used about people, it is rude or disparaging and can mean “gobble” or “wolf down”.";
if (fressen.lv !== "Eat (of animals)")
  add("CRITICAL", "b1-fressen", "lv", `Top-level lv expected "Eat (of animals)", got "${fressen.lv}"`);
if (fressen.study.translation !== "Eat (of animals)")
  add("CRITICAL", "b1-fressen", "study.translation", "Mismatch study.translation");
if (fressen.study.explanation !== fExp) add("CRITICAL", "b1-fressen", "study.explanation", "Explanation text mismatch");
if (fressen.study.comparison[0].meaning !== "Eat (of animals) / gobble")
  add("HIGH", "b1-fressen", "study.comparison[0].meaning", "comparison[0].meaning mismatch");
if (fressen.study.comparison[1].meaning !== "To eat (of people)")
  add("HIGH", "b1-fressen", "study.comparison[1].meaning", "comparison[1].meaning mismatch");
if (fressen.lv !== fressen.study.translation)
  add("CRITICAL", "b1-fressen", "lv/study.translation", "Top-level lv contradicts study.translation");

const fressenEn = collectEnStrings({ lv: fressen.lv, study: { ...fressen.study, sectionAccents: undefined } });
const fressenText = fressenEn.join(" ");
if (textContainsAny(fressenText, ["Tomorrow", "tomorrow"]).length)
  add("CRITICAL", "b1-fressen", "learner-visible", "Contains Tomorrow/tomorrow leftover");
if (textContainsAny(fressenText, ["latvian", "in latvian"]).length)
  add("HIGH", "b1-fressen", "learner-visible", "Latvian leftover reference");

// sectionAccents fressen
const fAcc = accentTargets(fressen.study.sectionAccents);
for (const t of fAcc) {
  if (textContainsAny(t.text, ["tomorrow", "Tomorrow"]).length) {
    findings.push({
      severity: "MEDIUM",
      cardId: "b1-fressen",
      field: t.path,
      issue: `sectionAccents targets stale "tomorrow" not in explanation`,
      kind: "sectionAccents",
      accentKind: "PEDAGOGICAL",
    });
  }
  if (textContainsAny(t.text, ["latvian", "sekot", "rīt"]).length) {
    findings.push({
      severity: "MEDIUM",
      cardId: "b1-fressen",
      field: t.path,
      issue: "sectionAccents LV/other-language token",
      kind: "sectionAccents",
      accentKind: "PEDAGOGICAL",
    });
  }
}

// --- tau-2 ---
const tauExpTail = "Der Tau, on the other hand, means dew and is used only in the singular.";
if (!tau2.study.explanation.includes(tauExpTail))
  add("CRITICAL", "b1-tau-2", "study.explanation", "Missing correct der Tau dew explanation");
if (tau2.study.examples[1].lv !== "The ropes are tied tightly.")
  add("HIGH", "b1-tau-2", "study.examples[1].lv", "examples[1].lv mismatch");
if (tau2.study.tip.leftBlocks[0].text !== "For tying up a ship and for ropes — das Tau. For dew on the grass — der Tau.")
  add("HIGH", "b1-tau-2", "study.tip.leftBlocks[0].text", "tip text mismatch");

const tauEn = collectEnStrings({ lv: tau2.lv, study: { ...tau2.study, sectionAccents: undefined } }).join(" ");
if (textContainsAny(tauEn, [" race", "race and"]).length)
  add("CRITICAL", "b1-tau-2", "learner-visible", "Contains race (wrong der Tau meaning)");
if (textContainsAny(tauEn, ["tows are", "The tows"]).length)
  add("HIGH", "b1-tau-2", "learner-visible", "tows used where ropes expected");

// --- verfolgen ---
const vExp = "Main idea: verfolgen means to follow, chase, or pursue. The meaning becomes stronger when the object is a person.";
if (verfolgen.study.explanation !== vExp)
  add("CRITICAL", "b1-verfolgen", "study.explanation", "explanation mismatch");
if (verfolgen.study.tip.leftBlocks[0].text !== "You can follow the news; you can chase or pursue a person: verfolgen.")
  add("HIGH", "b1-verfolgen", "study.tip.leftBlocks[0].text", "tip mismatch");
if (verfolgen.study.important.text !== "verfolgen with a person often means to chase rather than to follow calmly.")
  add("HIGH", "b1-verfolgen", "study.important.text", "important mismatch");

const vEn = collectEnStrings({ lv: verfolgen.lv, study: { ...verfolgen.study, sectionAccents: undefined } }).join(" ");
if (textContainsAny(vEn, ["verförchen", "verschreibung", "persehen"]).length)
  add("CRITICAL", "b1-verfolgen", "learner-visible", "Corrupt German term in EN fields");

for (const t of accentTargets(verfolgen.study.sectionAccents)) {
  if (textContainsAny(t.text, ["sekot", "latvian"]).length) {
    findings.push({
      severity: "MEDIUM",
      cardId: "b1-verfolgen",
      field: t.path,
      issue: `sectionAccents contains Latvian token "${t.text}"`,
      kind: "sectionAccents",
      accentKind: "PEDAGOGICAL",
    });
  }
}

auditCard({ id: "Baumstumpf", lemma: "Baumstumpf" }, baum, lvBaum);
auditCard({ id: "b1-fressen", lemma: "fressen" }, fressen, lvFressen);
auditCard({ id: "b1-tau-2", lemma: "Tau" }, tau2, lvTau2);
auditCard({ id: "b1-verfolgen", lemma: "verfolgen" }, verfolgen, lvVerfolgen);

// Re-count per card after all findings
for (const r of cardResults) {
  r.remainingCRITICAL = 0;
  r.remainingHIGH = 0;
  r.remainingMEDIUM = 0;
  r.remainingLOW = 0;
  r.sectionAccentsTECHNICAL = 0;
  r.sectionAccentsPEDAGOGICAL = 0;
  r.pass = true;
  for (const f of findings) {
    const match =
      f.cardId === r.cardId || f.cardId === r.lemma || (r.cardId === "Baumstumpf" && f.cardId === "Baumstumpf");
    if (!match) continue;
    if (f.kind === "sectionAccents") {
      if (f.accentKind === "TECHNICAL") r.sectionAccentsTECHNICAL++;
      else r.sectionAccentsPEDAGOGICAL++;
      continue;
    }
    if (f.severity === "CRITICAL") r.remainingCRITICAL++;
    else if (f.severity === "HIGH") r.remainingHIGH++;
    else if (f.severity === "MEDIUM") r.remainingMEDIUM++;
    else if (f.severity === "LOW") r.remainingLOW++;
    if (f.severity === "CRITICAL" || f.severity === "HIGH") r.pass = false;
  }
}

const totals = {
  CRITICAL: 0,
  HIGH: 0,
  MEDIUM: 0,
  LOW: 0,
  sectionAccentsTECHNICAL: 0,
  sectionAccentsPEDAGOGICAL: 0,
};
for (const f of findings) {
  if (f.kind === "sectionAccents") {
    if (f.accentKind === "TECHNICAL") totals.sectionAccentsTECHNICAL++;
    else totals.sectionAccentsPEDAGOGICAL++;
  } else if (totals[f.severity] !== undefined) totals[f.severity]++;
}

const contentCriticalHigh = totals.CRITICAL + totals.HIGH;
const verdict =
  contentCriticalHigh === 0
    ? "EN–DE B1 CRITICAL TARGETED REGRESSION #1 — PASS"
    : "EN–DE B1 CRITICAL TARGETED REGRESSION #1 — FAIL — FOLLOW-UP REQUIRED";

const validation = {
  javascriptSyntax: true,
  totalCards: en.length,
  structuralParity: en.length === lv.length && en.length === 3367,
  orderParity: lv.every((e, i) => e.de === en[i].de),
  idParity: true,
  deReadOnly: true,
  mirrorParity: fs.readFileSync(path.join(ROOT, "data/en/b1.js"), "utf8") ===
    fs.readFileSync(path.join(ROOT, "www/data/en/b1.js"), "utf8"),
};

for (let i = 0; i < lv.length; i++) {
  if (lv[i].de !== en[i].de) validation.deReadOnly = false;
  const ls = lv[i].study?.id;
  const es = en[i].study?.id;
  if (ls !== es) validation.idParity = false;
}

const output = {
  generatedAt: new Date().toISOString(),
  scope: "EN-DE B1 CRITICAL targeted regression #1",
  cardsAudited: 4,
  followUpRepair: {
    card: "b1-fressen",
    field: "lv",
    expected: "Eat (of animals)",
    actual: fressen.lv,
    status: fressen.lv === "Eat (of animals)" ? "COMPLETE" : "FAIL",
  },
  cardResults,
  findings,
  totals,
  verdict,
  validation,
};

fs.writeFileSync(
  path.join(ROOT, "reports/temp/en-b1-critical-regression-1.json"),
  JSON.stringify(output, null, 2)
);

const md = [
  "# EN–DE B1 CRITICAL Targeted Regression #1",
  "",
  `**Generated:** ${output.generatedAt}`,
  "",
  "## Follow-up repair",
  "",
  `- **b1-fressen** top-level \`lv\`: **${output.followUpRepair.status}** → \`${output.followUpRepair.actual}\``,
  "",
  "## Per-card results",
  "",
  "| Card | PASS/FAIL | CRITICAL | HIGH | MEDIUM | LOW | sectionAccents TECH | sectionAccents PED |",
  "|---|---|---|---|---|---|---|---|",
  ...cardResults.map(
    (r) =>
      `| ${r.cardId} | ${r.pass ? "PASS" : "FAIL"} | ${r.remainingCRITICAL} | ${r.remainingHIGH} | ${r.remainingMEDIUM} | ${r.remainingLOW} | ${r.sectionAccentsTECHNICAL} | ${r.sectionAccentsPEDAGOGICAL} |`
  ),
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
  findings.length
    ? findings.map((f) => `- **${f.severity}** ${f.cardId} ${f.field}: ${f.issue}`).join("\n")
    : "_(none)_",
  "",
  "## FINAL VERDICT",
  "",
  `## ${verdict}`,
  "",
].join("\n");

fs.writeFileSync(path.join(ROOT, "reports/en-b1-critical-regression-1.md"), md);
console.log(JSON.stringify({ verdict, totals, followUp: output.followUpRepair, cardResults }, null, 2));
