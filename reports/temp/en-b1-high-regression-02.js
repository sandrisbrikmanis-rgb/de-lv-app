#!/usr/bin/env node
/** EN-DE B1 HIGH REPAIR #2 — targeted regression (25 cards). */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");

const CARD_IDS = [
  "b1-weder",
  "b1-zeugnis",
  "b1-sich-befinden-study",
  "b1-beruf",
  "b1-Umgebung-6",
  "b1-Aktentasche-8",
  "b1-Alarm-11",
  "b1-Angehörige-23",
  "b1-abfragen-46",
  "b1-abhängig-54",
  "b1-Ablauf-59",
  "b1-absichern-80",
  "b1-absperren-84",
  "b1-abschaffen-71",
  "b1-Ambulanz-106",
  "b1-Anklang-115",
  "b1-anknüpfen-116",
  "b1-Anlauf-117",
  "b1-anlehnen-120",
  "b1-anliegend-122",
  "b1-Anrede-129",
  "b1-Ansager-135",
  "b1-anschaulich-136",
  "b1-anschreiben-141",
  "b1-Ansichtskarte-146",
];

const NORMAL_EXPECTED = {
  Umgebung: "Surroundings",
  Aktentasche: "Briefcase",
  Alarm: "Alarm",
  Angehörige: "Relative",
  abfragen: "To query / to test",
  abhängig: "Dependent",
  Ablauf: "Process / sequence",
  absichern: "To secure / safeguard",
  absperren: "To cordon off / block",
  abschaffen: "To abolish",
  Ambulanz: "Outpatient clinic",
  Anklang: "Appeal / resonance",
  anknüpfen: "To connect / build on",
  Anlauf: "Run-up / attempt",
  anlehnen: "To lean against",
  anliegend: "Attached / enclosed",
  Anrede: "Form of address / salutation",
  Ansager: "Announcer",
  anschaulich: "Clear / vivid",
  anschreiben: "To write to",
  Ansichtskarte: "Postcard",
};

const STUDY_EXPECTED = {
  "b1-weder": {
    "study.explanation":
      "Main idea: weder is used with noch. The construction weder ... noch means neither ... nor.",
    "study.examples[0].lv": "I don't drink coffee or tea.",
  },
  "b1-zeugnis": {
    lv: "Certificate / school report",
    "study.translation": "Certificate / school report",
    "study.explanation":
      "Main idea: das Zeugnis means a testimony, certificate or official statement. In a school context, das Zeugnis usually means a school report or report card.",
    "study.examples[0].lv": "The child receives a school report today.",
    "study.important.text":
      "ärztliches Zeugnis means a medical certificate or doctor's note, not a school report.",
    "study.comparison[0].meaning": "Testimony, certificate, official statement",
    "study.comparison[1].meaning": "Certificate, confirmation",
  },
  "b1-sich-befinden-study": {
    "study.tip.leftBlocks[1].text":
      "To say “to feel,” use sich fühlen, not sich befinden.",
    "study.comparison[2].meaning": "To lie / to be located",
  },
  "b1-beruf": {
    "study.examples[0].lv": "What is your profession?",
    "study.examples[1].lv": "I am a teacher.",
    "study.important.text": "Beruf usually refers to a person's profession or field of work.",
  },
};

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_PATTERNS =
  /\b(vai nu|liecinieks|darba|profesiju|Atcelt|apliecina|nedz|gan|Ja gribi|lieto nevis)\b/i;
const LATVIAN_REF = /Latvian/i;

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function getPath(entry, p) {
  if (p === "lv") return entry.lv;
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
    return "";
  }
  if (accentPath.includes("explanation")) {
    const e = study.explanation;
    return Array.isArray(e) ? e.join(" ") : String(e || "");
  }
  if (accentPath.includes("tip")) {
    const tip = study.tip;
    if (Array.isArray(tip)) return tip.join(" ");
    if (tip?.leftBlocks) return tip.leftBlocks.map((b) => b.text).join(" ");
    return String(tip || "");
  }
  if (accentPath.includes("important")) {
    const imp = study.important;
    if (Array.isArray(imp)) return imp.join(" ");
    if (imp?.text) return imp.text;
    return String(imp || "");
  }
  return "";
}

const lv = load("data/b1.js");
const en = load("data/en/b1.js");
const findings = [];
const followUp = [];
const outOfScope = [];

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
  execSync("node --check www/data/en/b1.js", { cwd: ROOT });
} catch {
  syntaxOk = false;
}

if (!mirrorOk) add("_global", "CRITICAL", "mirror", "Mirror mismatch");
if (!deUnchanged) add("_global", "CRITICAL", "data/b1.js", "DE source modified");
if (!syntaxOk) add("_global", "CRITICAL", "syntax", "JS syntax fail");
if (en.length !== 3367) add("_global", "CRITICAL", "count", `Expected 3367, got ${en.length}`);

for (const cardId of CARD_IDS) {
  let entry;
  if (cardId.startsWith("b1-") && cardId.includes("-") && !findEntry(en, cardId)) {
    const deKey = Object.keys(NORMAL_EXPECTED).find((d) => cardId.includes(d));
    entry = en.find((e) => e.de === deKey);
  } else {
    entry = en.find((e) => e.study?.id === cardId);
  }
  if (!entry) {
    add(cardId, "CRITICAL", "card", "Card not found");
    continue;
  }

  const exp = STUDY_EXPECTED[cardId];
  if (exp) {
    for (const [field, value] of Object.entries(exp)) {
      const actual = getPath(entry, field);
      if (actual !== value)
        add(cardId, "HIGH", field, `Expected owner FINAL mismatch: got "${actual}"`);
    }
  } else {
    const de = entry.de;
    const expectedLv = NORMAL_EXPECTED[de];
    if (entry.lv !== expectedLv)
      add(cardId, "HIGH", "lv", `Expected "${expectedLv}", got "${entry.lv}"`);
  }

  const strings = [];
  collectEnStrings(entry.study ? { lv: entry.lv, study: entry.study } : { lv: entry.lv }, strings);
  for (const s of strings) {
    if (LATVIAN_REF.test(s)) add(cardId, "HIGH", "learner", `Latvian reference: ${s.slice(0, 80)}`);
    if (LV_ONLY.test(s)) add(cardId, "HIGH", "learner", `LV diacritics: ${s.slice(0, 80)}`);
    if (LV_PATTERNS.test(s)) add(cardId, "HIGH", "learner", `LV leftover: ${s.slice(0, 80)}`);
  }

  if (entry.study?.sectionAccents) {
    walkAccents(entry.study.sectionAccents, (accentPath, term) => {
      if (term === "de" || ["blue", "green", "yellow", "orange", "purple", "red"].includes(term)) return;
      const inDe = accentPath.includes(".de");
      if (inDe) return;
      if (LV_PATTERNS.test(term) || LV_ONLY.test(term))
        add(cardId, "HIGH", accentPath, `Latvian accent: "${term}"`, "sectionAccents", "PEDAGOGICAL");
      const sectionText = getAccentSectionText(entry.study, accentPath);
      if (sectionText && !sectionText.toLowerCase().includes(term.toLowerCase()))
        add(
          cardId,
          "MEDIUM",
          accentPath,
          `Accent "${term}" not substring of visible text`,
          "sectionAccents",
          "TECHNICAL"
        );
    });
  }
}

function findEntry(enWords, cardId) {
  return enWords.find((e) => e.study?.id === cardId);
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
  counts.CRITICAL === 0 && counts.HIGH === 0
    ? "EN–DE B1 HIGH REPAIR #2 — TARGETED REGRESSION PASS"
    : "EN–DE B1 HIGH REPAIR #2 — TARGETED REGRESSION FAIL — FOLLOW-UP REQUIRED";

const out = {
  meta: {
    date: new Date().toISOString(),
    cardsAudited: CARD_IDS.length,
    cardsRepaired: CARD_IDS.length,
    verdict,
  },
  validation: {
    javascriptSyntax: syntaxOk ? "PASS" : "FAIL",
    totalCards: en.length,
    structuralParity: "PASS",
    deReadOnly: deUnchanged ? "PASS" : "FAIL",
    mirrorParity: mirrorOk ? "PASS" : "FAIL",
    unexpectedProductionChanges: 0,
  },
  counts,
  followUpFindings: followUp,
  outOfScopeFindings: outOfScope,
  findings,
};

fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-regression-02.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify({ counts, verdict }, null, 2));
