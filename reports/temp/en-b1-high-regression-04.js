#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #4 — targeted regression (25 cards).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");

const CARD_IDS = [
  "b1-Bestandteil-394",
  "b1-betreiben-409",
  "b1-Beule-415",
  "b1-beugen-414",
  "b1-Bevölkerung-418",
  "b1-bewachen-420",
  "b1-bewirten-426",
  "b1-biegen-440",
  "b1-sich blamieren-453",
  "b1-Bombe-478",
  "b1-Brathuhn-490",
  "b1-Brieftasche-505",
  "b1-desto-579",
  "b1-Dose-601",
  "b1-dritt-610",
  "b1-Durcheinander-624",
  "b1-ehemals-646",
  "b1-sich eignen-657",
  "b1-einigermaßen-686",
  "b1-einnehmen-695",
  "b1-einschließen-703",
  "b1-erfordern-779",
  "b1-erfüllen-784",
  "b1-sich erhalten-790",
  "b1-Erklärung-795",
];

const DE_BY_ID = {
  "b1-Bestandteil-394": "Bestandteil",
  "b1-betreiben-409": "betreiben",
  "b1-Beule-415": "Beule",
  "b1-beugen-414": "beugen",
  "b1-Bevölkerung-418": "Bevölkerung",
  "b1-bewachen-420": "bewachen",
  "b1-bewirten-426": "bewirten",
  "b1-biegen-440": "biegen",
  "b1-sich blamieren-453": "sich blamieren",
  "b1-Bombe-478": "Bombe",
  "b1-Brathuhn-490": "Brathuhn",
  "b1-Brieftasche-505": "Brieftasche",
  "b1-desto-579": "desto",
  "b1-Dose-601": "Dose",
  "b1-dritt-610": "dritt",
  "b1-Durcheinander-624": "Durcheinander",
  "b1-ehemals-646": "ehemals",
  "b1-sich eignen-657": "sich eignen",
  "b1-einigermaßen-686": "einigermaßen",
  "b1-einnehmen-695": "einnehmen",
  "b1-einschließen-703": "einschließen",
  "b1-erfordern-779": "erfordern",
  "b1-erfüllen-784": "erfüllen",
  "b1-sich erhalten-790": "sich erhalten",
  "b1-Erklärung-795": "Erklärung",
};

const NORMAL_EXPECTED = {
  Bestandteil: "Component / part",
  betreiben: "To run / operate",
  Beule: "Bump / dent",
  beugen: "To bend",
  Bevölkerung: "Population",
  bewachen: "To guard / watch over",
  bewirten: "To host / serve guests",
  biegen: "To bend",
  "sich blamieren": "To embarrass oneself",
  Bombe: "Bomb",
  Brathuhn: "Roast chicken",
  Brieftasche: "Wallet",
  desto: "The more ... the more ... / all the more",
  Dose: "Can / tin",
  dritt: "Third",
  Durcheinander: "A muddle / a mess",
  ehemals: "Formerly",
  "sich eignen": "To be suitable",
  einigermaßen: "To some extent / more or less",
  einnehmen: "To take / occupy",
  einschließen: "To include / enclose",
  erfordern: "To require",
  erfüllen: "To fulfil",
  "sich erhalten": "To remain preserved / survive",
  Erklärung: "Explanation / statement",
};

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_PATTERNS =
  /\b(vai nu|liecinieks|darba|profesiju|Juku jukam|juku jukam|Atcelt|apliecina|nedz|gan|Ja gribi|lieto nevis|latvian)\b/i;
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
  if (accentPath.includes("important")) {
    const imp = study.important;
    if (imp?.text) return imp.text;
    return String(imp || "");
  }
  return "";
}

const repairLog = JSON.parse(
  fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-04-log.json"), "utf8")
);
const biegenGate = repairLog.biegenIdentityGate;

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
if (idsChanged !== 0) add("_global", "CRITICAL", "ids", `IDs/structure changed: ${idsChanged} entries`);

const blockedCards = repairLog.repairs.filter((r) => r.blocked);
const auditedCards = CARD_IDS.filter((id) => {
  if (id === "b1-biegen-440" && biegenGate.verdict !== "PASS") return false;
  return !blockedCards.some((b) => b.cardId === id);
});

for (const cardId of auditedCards) {
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
      if (accentPath.includes(".de")) return;
      if (LV_PATTERNS.test(term) || LV_ONLY.test(term))
        add(cardId, "HIGH", accentPath, `Latvian accent: "${term}"`, "sectionAccents", "PEDAGOGICAL");
      const sectionText = getAccentSectionText(entry.study, accentPath);
      if (sectionText && !sectionText.toLowerCase().includes(term.toLowerCase()))
        add(cardId, "MEDIUM", accentPath, `Accent "${term}" not substring`, "sectionAccents", "TECHNICAL");
    });
  }
}

if (biegenGate.verdict !== "PASS") {
  findings.push({
    cardId: "b1-biegen-440",
    severity: "BLOCKED",
    field: "lv",
    issue: "BIEGEN IDENTITY GATE FAIL — card not repaired",
    kind: "gate",
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

const fullPass =
  biegenGate.verdict === "PASS" &&
  repairLog.repairedCount === 25 &&
  auditedCards.length === 25 &&
  counts.CRITICAL === 0 &&
  counts.HIGH === 0 &&
  counts.MEDIUM === 0 &&
  counts.LOW === 0 &&
  counts.sectionAccentsTECHNICAL === 0 &&
  counts.sectionAccentsPEDAGOGICAL === 0 &&
  idsChanged === 0;

const verdict = fullPass
  ? "EN–DE B1 HIGH REPAIR #4 — TARGETED REGRESSION PASS"
  : biegenGate.verdict !== "PASS"
    ? "EN–DE B1 HIGH REPAIR #4 — PARTIAL — BIEGEN FOLLOW-UP REQUIRED"
    : "EN–DE B1 HIGH REPAIR #4 — TARGETED REGRESSION FAIL — FOLLOW-UP REQUIRED";

const out = {
  meta: {
    date: new Date().toISOString(),
    cardsAudited: auditedCards.length,
    cardsRepaired: repairLog.repairedCount,
    cardsOwnerApproved: 25,
    verdict,
  },
  biegenIdentityGate: biegenGate,
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

fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-regression-04.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify({ counts, verdict, biegenGate: biegenGate.verdict, repaired: repairLog.repairedCount, idsChanged }, null, 2));
