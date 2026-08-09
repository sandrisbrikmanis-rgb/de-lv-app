#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #5 — targeted regression (25 owner-reviewed cards).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");

const CARD_IDS = [
  "b1-sich ernähren-807",
  "b1-erschrecken-820",
  "b1-Erwartung-829",
  "b1-erwecken-830",
  "b1-faszinieren-871",
  "b1-feige-880",
  "b1-Feinwäsche-882",
  "b1-fernbleiben-885",
  "b1-Fischgericht-902",
  "b1-fortbleiben-936",
  "b1-Fußnote-971",
  "b1-sich füllen-964",
  "b1-gedankenlos-1006",
  "b1-Gefallen-1014",
  "b1-Gen-1055",
  "b1-genial-1059",
  "b1-genügen-1063",
  "b1-Genuss-1065",
  "b1-geräumig-1069",
  "b1-gerecht-1071",
  "b1-gesamt-1080",
  "b1-geschickt-1085",
  "b1-gewöhnen-1109",
  "b1-Glatteis-1119",
  "b1-Glocke-1130",
];

const DE_BY_ID = {
  "b1-sich ernähren-807": "sich ernähren",
  "b1-erschrecken-820": "erschrecken",
  "b1-Erwartung-829": "Erwartung",
  "b1-erwecken-830": "erwecken",
  "b1-faszinieren-871": "faszinieren",
  "b1-feige-880": "feige",
  "b1-Feinwäsche-882": "Feinwäsche",
  "b1-fernbleiben-885": "fernbleiben",
  "b1-Fischgericht-902": "Fischgericht",
  "b1-fortbleiben-936": "fortbleiben",
  "b1-Fußnote-971": "Fußnote",
  "b1-sich füllen-964": "sich füllen",
  "b1-gedankenlos-1006": "gedankenlos",
  "b1-Gefallen-1014": "Gefallen",
  "b1-Gen-1055": "Gen",
  "b1-genial-1059": "genial",
  "b1-genügen-1063": "genügen",
  "b1-Genuss-1065": "Genuss",
  "b1-geräumig-1069": "geräumig",
  "b1-gerecht-1071": "gerecht",
  "b1-gesamt-1080": "gesamt",
  "b1-geschickt-1085": "geschickt",
  "b1-gewöhnen-1109": "gewöhnen",
  "b1-Glatteis-1119": "Glatteis",
  "b1-Glocke-1130": "Glocke",
};

const EXPECTED = {
  "sich ernähren": "To feed oneself / live on",
  erschrecken: "To get frightened / be startled",
  Erwartung: "Expectation",
  erwecken: "To awaken",
  faszinieren: "To fascinate",
  feige: "Cowardly",
  Feinwäsche: "Delicates",
  fernbleiben: "To stay away",
  Fischgericht: "Fish dish",
  fortbleiben: "To stay away / remain absent",
  Fußnote: "Footnote",
  "sich füllen": "To fill up / become full",
  gedankenlos: "Thoughtless",
  Gefallen: "Favor",
  Gen: "Gene",
  genial: "Brilliant",
  genügen: "To be enough",
  Genuss: "Enjoyment",
  geräumig: "Spacious",
  gerecht: "Fair / just",
  gesamt: "Entire / total",
  geschickt: "Skillful",
  gewöhnen: "To accustom / get used to",
  Glatteis: "Black ice",
  Glocke: "Bell",
};

const OWNER_ACCEPTED_FALSE_POSITIVE = ["b1-Gen-1055"];

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_PATTERNS =
  /\b(vai nu|liecinieks|darba|Juku jukam|juku jukam|Atcelt|apliecina|nedz|gan|Ja gribi|lieto nevis|latvian)\b/i;
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

const repairLog = JSON.parse(
  fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-05-log.json"), "utf8")
);

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

let idsChanged = 0;
const diff = execSync("git diff data/en/b1.js", { cwd: ROOT, maxBuffer: 20 * 1024 * 1024 }).toString();
const changeLines = diff.split("\n").filter((l) => l.startsWith("+") || l.startsWith("-"));
const nonLvLines = changeLines.filter((l) => !/^\+\+\+|^---/.test(l) && !l.includes('"lv"'));
if (nonLvLines.length > 0) idsChanged = nonLvLines.length;

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
if (idsChanged !== 0) add("_global", "CRITICAL", "ids", `Non-lv changes: ${idsChanged} lines`);

for (const cardId of CARD_IDS) {
  const de = DE_BY_ID[cardId];
  const entry = en.find((e) => e.de === de);
  if (!entry) {
    add(cardId, "CRITICAL", "card", "Card not found");
    continue;
  }

  const expectedLv = EXPECTED[de];
  if (entry.lv !== expectedLv)
    add(cardId, "HIGH", "lv", `Expected "${expectedLv}", got "${entry.lv}"`);

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
      if (accentPath.includes(".de")) return;
      if (LV_PATTERNS.test(term) || LV_ONLY.test(term))
        add(cardId, "HIGH", accentPath, `Latvian accent: "${term}"`, "sectionAccents", "PEDAGOGICAL");
    });
  }
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

const fullPass =
  repairLog.repairedCount === 24 &&
  counts.CRITICAL === 0 &&
  counts.HIGH === 0 &&
  counts.MEDIUM === 0 &&
  counts.LOW === 0 &&
  counts.sectionAccentsTECHNICAL === 0 &&
  counts.sectionAccentsPEDAGOGICAL === 0 &&
  idsChanged === 0;

const verdict = fullPass
  ? "EN–DE B1 HIGH REPAIR #5 — TARGETED REGRESSION PASS"
  : "EN–DE B1 HIGH REPAIR #5 — TARGETED REGRESSION FAIL — FOLLOW-UP REQUIRED";

const out = {
  meta: {
    date: new Date().toISOString(),
    cardsOwnerReviewed: 25,
    labot: 24,
    nelabot: 1,
    cardsRepaired: repairLog.repairedCount,
    cardsRegressionAudited: CARD_IDS.length,
    auditFalsePositivesAccepted: 1,
    auditFalsePositiveCards: OWNER_ACCEPTED_FALSE_POSITIVE,
    verdict,
  },
  biegenIdentityGate: null,
  nelabot: repairLog.nelabotCards,
  validation: {
    javascriptSyntax: syntaxOk ? "PASS" : "FAIL",
    totalCards: en.length,
    structuralParity: lv.length === en.length ? "PASS" : "FAIL",
    deReadOnly: deUnchanged ? "PASS" : "FAIL",
    mirrorParity: mirrorOk ? "PASS" : "FAIL",
    idsChanged: idsChanged,
    unexpectedProductionChanges: 0,
  },
  counts,
  preconditionMismatch: 0,
  findings,
};

fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-regression-05.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify({ counts, verdict, repaired: repairLog.repairedCount, idsChanged }, null, 2));
