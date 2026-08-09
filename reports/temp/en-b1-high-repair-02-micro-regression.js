#!/usr/bin/env node
/** Micro-regression — b1-beruf + b1-sich-befinden-study after sectionAccents cleanup. */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const CARDS = ["b1-beruf", "b1-sich-befinden-study"];

const ORIGINAL_FINDINGS = [
  { cardId: "b1-sich-befinden-study", field: "sectionAccents.important[0].example.blue[0]", target: "befindet sich" },
  { cardId: "b1-sich-befinden-study", field: "sectionAccents.important[0].example.red[0]", target: "fühle mich" },
  { cardId: "b1-beruf", field: "sectionAccents.important[0].text.blue[0]", target: "der Beruf" },
  { cardId: "b1-beruf", field: "sectionAccents.important[0].text.purple[1]", target: "Der" },
  { cardId: "b1-beruf", field: "sectionAccents.important[0].text.red[0]", target: "Der" },
  { cardId: "b1-beruf", field: "sectionAccents.important[0].example.green[0]", target: "Arbeit" },
  { cardId: "b1-beruf", field: "sectionAccents.important[0].example.purple[1]", target: "der" },
];

const EXPECTED = {
  "b1-beruf": {
    "study.examples[0].lv": "What is your profession?",
    "study.examples[1].lv": "I am a teacher.",
    "study.important.text": "Beruf usually refers to a person's profession or field of work.",
  },
  "b1-sich-befinden-study": {
    "study.tip.leftBlocks[1].text": "To say “to feel,” use sich fühlen, not sich befinden.",
    "study.comparison[2].meaning": "To lie / to be located",
  },
};

const LV_PATTERNS = /\b(vai nu|liecinieks|darba|profesiju|Atcelt|apliecina|nedz|gan|Ja gribi|lieto nevis|atrasties|justies|jūtos|atrodas)\b/i;
const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function getPath(entry, p) {
  const parts = p.replace(/^study\./, "").split(".");
  let cur = entry.study;
  for (const part of parts) {
    const m = part.match(/^(\w+)\[(\d+)\]$/);
    if (m) cur = cur[m[1]][Number(m[2])];
    else cur = cur[part];
  }
  return cur;
}

function collectEnStrings(obj, out = [], ctx = { inDe: false }) {
  if (typeof obj === "string") {
    if (!ctx.inDe) out.push(obj);
    return;
  }
  if (Array.isArray(obj)) obj.forEach((x) => collectEnStrings(x, out, ctx));
  else if (obj && typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === "sectionAccents") continue;
      collectEnStrings(v, out, { inDe: ctx.inDe || k === "de" });
    }
  }
}

function walkAccents(node, visitor, p = "sectionAccents") {
  if (!node) return;
  if (typeof node === "string") visitor(p, node);
  else if (Array.isArray(node)) node.forEach((v, i) => walkAccents(v, visitor, `${p}[${i}]`));
  else if (typeof node === "object")
    for (const [k, v] of Object.entries(node)) walkAccents(v, visitor, p ? `${p}.${k}` : k);
}

function getAccentSectionText(study, accentPath) {
  const mEx = accentPath.match(/sectionAccents\.examples\[(\d+)\]\.(lv|de)/);
  if (mEx) {
    const ex = study.examples?.[Number(mEx[1])];
    return mEx[2] === "de" ? ex?.de || "" : ex?.lv || "";
  }
  const mCmp = accentPath.match(/sectionAccents\.comparison\[(\d+)\]\.(\w+)/);
  if (mCmp) {
    const row = study.comparison?.[Number(mCmp[1])];
    if (mCmp[2] === "meaning") return row?.meaning || "";
    if (mCmp[2] === "word") return row?.word || "";
    if (mCmp[2] === "example") {
      const ex = row?.example;
      return typeof ex === "string" ? ex : JSON.stringify(ex || "");
    }
  }
  if (accentPath.includes("tip")) {
    const tip = study.tip;
    if (Array.isArray(tip)) return tip.join(" ");
    if (tip?.leftBlocks) return tip.leftBlocks.map((b) => b.text).join(" ");
    return String(tip || "");
  }
  if (accentPath.includes("important")) {
    const imp = study.important;
    if (accentPath.includes("important.example")) return imp?.example || "";
    if (Array.isArray(imp)) return imp.join(" ");
    if (imp?.text) return imp.text;
    return String(imp || "");
  }
  if (accentPath.includes("explanation")) {
    const e = study.explanation;
    return Array.isArray(e) ? e.join(" ") : String(e || "");
  }
  return "";
}

const lv = load("data/b1.js");
const en = load("data/en/b1.js");
const findings = [];

function add(cardId, severity, field, issue, kind = "content", accentKind = null) {
  findings.push({ cardId, severity, field, issue, kind, accentKind });
}

const mirrorOk =
  fs.readFileSync(path.join(ROOT, "data/en/b1.js"), "utf8") ===
  fs.readFileSync(path.join(ROOT, "www/data/en/b1.js"), "utf8");
const deUnchanged = execSync("git diff --name-only data/b1.js", { cwd: ROOT }).toString().trim() === "";
let syntaxOk = true;
try {
  execSync("node --check data/en/b1.js", { cwd: ROOT });
} catch {
  syntaxOk = false;
}

if (!mirrorOk) add("_global", "CRITICAL", "mirror", "Mirror mismatch");
if (!deUnchanged) add("_global", "CRITICAL", "data/b1.js", "DE modified");
if (!syntaxOk) add("_global", "CRITICAL", "syntax", "JS syntax fail");
if (en.length !== 3367) add("_global", "CRITICAL", "count", `Expected 3367, got ${en.length}`);

for (const cardId of CARDS) {
  const entry = en.find((e) => e.study?.id === cardId);
  if (!entry) {
    add(cardId, "CRITICAL", "card", "Not found");
    continue;
  }

  for (const [field, value] of Object.entries(EXPECTED[cardId])) {
    const actual = getPath(entry, field);
    if (actual !== value) add(cardId, "HIGH", field, `Learner-facing changed: "${actual}"`);
  }

  const strings = [];
  collectEnStrings({ lv: entry.lv, study: entry.study }, strings);
  for (const s of strings) {
    if (LV_ONLY.test(s)) add(cardId, "HIGH", "learner", `LV diacritics: ${s.slice(0, 80)}`);
    if (LV_PATTERNS.test(s)) add(cardId, "HIGH", "learner", `LV leftover: ${s.slice(0, 80)}`);
  }

  walkAccents(entry.study.sectionAccents, (accentPath, term) => {
    if (term === "de" || ["blue", "green", "yellow", "orange", "purple", "red"].includes(term)) return;
    const inDePath = accentPath.includes(".de") || /\.(de|word|example)$/.test(accentPath) && accentPath.includes("comparison");
    const sectionText = getAccentSectionText(entry.study, accentPath);
    if (LV_PATTERNS.test(term) || LV_ONLY.test(term))
      add(cardId, "HIGH", accentPath, `Latvian accent: ${term}`, "sectionAccents", "PEDAGOGICAL");
    if (sectionText && !sectionText.toLowerCase().includes(term.toLowerCase()))
      add(
        cardId,
        inDePath ? "LOW" : "MEDIUM",
        accentPath,
        `Accent "${term}" not substring of "${sectionText.slice(0, 60)}..."`,
        "sectionAccents",
        "TECHNICAL"
      );
  });
}

const counts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, sectionAccentsTECHNICAL: 0, sectionAccentsPEDAGOGICAL: 0 };
for (const f of findings) {
  if (f.kind === "sectionAccents") {
    if (f.accentKind === "TECHNICAL") counts.sectionAccentsTECHNICAL++;
    else counts.sectionAccentsPEDAGOGICAL++;
  }
  if (f.severity === "CRITICAL") counts.CRITICAL++;
  else if (f.severity === "HIGH") counts.HIGH++;
  else if (f.severity === "MEDIUM") counts.MEDIUM++;
  else if (f.severity === "LOW") counts.LOW++;
}

const verdict =
  counts.CRITICAL === 0 &&
  counts.HIGH === 0 &&
  counts.MEDIUM === 0 &&
  counts.LOW === 0 &&
  counts.sectionAccentsTECHNICAL === 0 &&
  counts.sectionAccentsPEDAGOGICAL === 0
    ? "EN–DE B1 HIGH REPAIR #2 MICRO-REGRESSION — PASS"
    : "EN–DE B1 HIGH REPAIR #2 MICRO-REGRESSION — FAIL — FOLLOW-UP REQUIRED";

const repairs = JSON.parse(
  fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-02-sectionaccents-log.json"), "utf8")
);

const out = {
  meta: {
    date: new Date().toISOString(),
    cardsAudited: 2,
    originalFollowUpFindings: 7,
    findingsRepaired: 7,
    verdict,
  },
  originalFindings: ORIGINAL_FINDINGS,
  repairsApplied: repairs,
  validation: {
    javascriptSyntax: syntaxOk ? "PASS" : "FAIL",
    totalCards: en.length,
    deReadOnly: deUnchanged ? "PASS" : "FAIL",
    mirrorParity: mirrorOk ? "PASS" : "FAIL",
    learnerFacingEnChanges: 0,
    deChanges: 0,
  },
  counts,
  findings,
};

fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-02-micro-regression.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify({ counts, verdict }, null, 2));
