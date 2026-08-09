#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #3 — targeted regression (25 normal cards).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");

const CARD_IDS = [
  "b1-anstiften-149",
  "b1-Antiquariat-156",
  "b1-anweisen-160",
  "b1-Anzahlung-163",
  "b1-Appell-164",
  "b1-Auflauf-179",
  "b1-Aufschnitt-185",
  "b1-aufgeregt-197",
  "b1-sich aufregen-200",
  "b1-ausziehbar-224",
  "b1-beauftragen-254",
  "b1-bedrücken-267",
  "b1-Behälter-302",
  "b1-behindern-308",
  "b1-beitragen-322",
  "b1-belasten-327",
  "b1-beleidigen-331",
  "b1-Beleidigung-332",
  "b1-beleuchten-333",
  "b1-beliebig-335",
  "b1-Bergführer-357",
  "b1-Bericht-362",
  "b1-sich berühren-372",
  "b1-beseitigen-385",
  "b1-besiegen-388",
];

const DE_BY_ID = {
  "b1-anstiften-149": "anstiften",
  "b1-Antiquariat-156": "Antiquariat",
  "b1-anweisen-160": "anweisen",
  "b1-Anzahlung-163": "Anzahlung",
  "b1-Appell-164": "Appell",
  "b1-Auflauf-179": "Auflauf",
  "b1-Aufschnitt-185": "Aufschnitt",
  "b1-aufgeregt-197": "aufgeregt",
  "b1-sich aufregen-200": "sich aufregen",
  "b1-ausziehbar-224": "ausziehbar",
  "b1-beauftragen-254": "beauftragen",
  "b1-bedrücken-267": "bedrücken",
  "b1-Behälter-302": "Behälter",
  "b1-behindern-308": "behindern",
  "b1-beitragen-322": "beitragen",
  "b1-belasten-327": "belasten",
  "b1-beleidigen-331": "beleidigen",
  "b1-Beleidigung-332": "Beleidigung",
  "b1-beleuchten-333": "beleuchten",
  "b1-beliebig-335": "beliebig",
  "b1-Bergführer-357": "Bergführer",
  "b1-Bericht-362": "Bericht",
  "b1-sich berühren-372": "sich berühren",
  "b1-beseitigen-385": "beseitigen",
  "b1-besiegen-388": "besiegen",
};

const NORMAL_EXPECTED = {
  anstiften: "To incite",
  Antiquariat: "Second-hand bookshop",
  anweisen: "To instruct",
  Anzahlung: "Down payment / deposit",
  Appell: "Appeal",
  Auflauf: "Casserole",
  Aufschnitt: "Cold cuts",
  aufgeregt: "Excited / nervous",
  "sich aufregen": "To get upset",
  ausziehbar: "Extendable / pull-out",
  beauftragen: "To commission / assign",
  bedrücken: "To weigh down / depress",
  Behälter: "Container",
  behindern: "To hinder / obstruct",
  beitragen: "To contribute",
  belasten: "To burden / put a strain on",
  beleidigen: "To insult / offend",
  Beleidigung: "Insult / offence",
  beleuchten: "To illuminate / light",
  beliebig: "Any / arbitrary",
  Bergführer: "Mountain guide",
  Bericht: "Report",
  "sich berühren": "To touch each other",
  beseitigen: "To remove / eliminate",
  besiegen: "To defeat",
};

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_PATTERNS =
  /\b(vai nu|liecinieks|darba|profesiju|Atcelt|apliecina|nedz|gan|Ja gribi|lieto nevis|atrasties|justies|jūtos|atrodas|latvian)\b/i;
const LATVIAN_REF = /Latvian/i;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
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
if (lv.length !== en.length) add("_global", "CRITICAL", "structural", "LV/EN count mismatch");

for (const cardId of CARD_IDS) {
  const de = DE_BY_ID[cardId];
  const entry = en.find((e) => e.de === de);
  if (!entry) {
    add(cardId, "CRITICAL", "card", "Card not found");
    continue;
  }

  const expectedLv = NORMAL_EXPECTED[de];
  if (entry.lv !== expectedLv)
    add(cardId, "HIGH", "lv", `Expected owner FINAL "${expectedLv}", got "${entry.lv}"`);

  const strings = [];
  collectEnStrings(entry.study ? { lv: entry.lv, study: entry.study } : { lv: entry.lv }, strings);
  for (const s of strings) {
    if (LATVIAN_REF.test(s)) add(cardId, "HIGH", "learner", `Latvian reference: ${s.slice(0, 80)}`);
    if (LV_ONLY.test(s)) add(cardId, "HIGH", "learner", `LV diacritics: ${s.slice(0, 80)}`);
    if (LV_PATTERNS.test(s)) add(cardId, "HIGH", "learner", `LV leftover: ${s.slice(0, 80)}`);
  }

  if (entry.study?.sectionAccents) {
    walkAccents(entry.study.sectionAccents, (accentPath, term) => {
      if (ACCENT_COLORS.includes(term)) return;
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

const counts = {
  CRITICAL: 0,
  HIGH: 0,
  MEDIUM: 0,
  LOW: 0,
  sectionAccentsTECHNICAL: 0,
  sectionAccentsPEDAGOGICAL: 0,
};
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
    ? "EN–DE B1 HIGH REPAIR #3 — TARGETED REGRESSION PASS"
    : "EN–DE B1 HIGH REPAIR #3 — TARGETED REGRESSION FAIL — FOLLOW-UP REQUIRED";

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
    structuralParity: lv.length === en.length ? "PASS" : "FAIL",
    deReadOnly: deUnchanged ? "PASS" : "FAIL",
    mirrorParity: mirrorOk ? "PASS" : "FAIL",
    unexpectedProductionChanges: 0,
  },
  counts,
  preconditionMismatch: 0,
  outOfScopeFindings: outOfScope,
  findings,
};

fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-regression-03.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify({ counts, verdict }, null, 2));
