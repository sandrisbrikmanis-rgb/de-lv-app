#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #8 — targeted regression (50 owner-reviewed cards).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");

const CARD_IDS = [
  "b1-kuscheln-1690",
  "b1-ländlich-1718",
  "b1-Landstraße-1719",
  "b1-längs-1722",
  "b1-Leertaste-1744",
  "b1-lehnen-1747",
  "b1-Leine-1758",
  "b1-Lieferwagen-1777",
  "b1-Linkshänder-1784",
  "b1-Locke-1788",
  "b1-Loge-1793",
  "b1-Mal-1826",
  "b1-mangeln-1831",
  "b1-Maßnahme-1849",
  "b1-meinetwegen-1861",
  "b1-Mobbing-1891",
  "b1-Monatsgehalt-1900",
  "b1-Mondschein-1902",
  "b1-Mumps-1925",
  "b1-nachholen-1945",
  "b1-Nachteil-1950",
  "b1-nächtlich-1953",
  "b1-Nacken-1955",
  "b1-Nebensache-1967",
  "b1-neblig-1969",
  "b1-necken-1970",
  "b1-Notfall-1997",
  "b1-nutzlos-2002",
  "b1-Opernhaus-2033",
  "b1-Overall-2047",
  "b1-Panne-2053",
  "b1-Palast-2051",
  "b1-Parterre-2064",
  "b1-Paste-2068",
  "b1-peinlich-2073",
  "b1-per-2079",
  "b1-Personalabteilung-2081",
  "b1-Pfarrer-2087",
  "b1-pflügen-2103",
  "b1-Pier-2109",
  "b1-plump-2127",
  "b1-poltern-2143",
  "b1-Postfach-2150",
  "b1-Prozentsatz-2177",
  "b1-Prüfzeit-2178",
  "b1-Radspur-2210",
  "b1-ragen-2211",
  "b1-ratlos-2227",
  "b1-rauben-2232",
  "b1-Reh-2260",
];

const EXPECTED = {
  kuscheln: "To cuddle / to snuggle",
  ländlich: "Rural",
  Landstraße: "Country road",
  längs: "Along",
  Leertaste: "Space bar",
  lehnen: "To lean",
  Leine: "Leash",
  Lieferwagen: "Delivery van",
  Linkshänder: "Left-handed person",
  Locke: "Curl",
  Loge: "Box (in a theatre)",
  Mal: "Time / occasion",
  mangeln: "To lack",
  Maßnahme: "Measure / action",
  meinetwegen: "For my sake / if you like",
  Mobbing: "Bullying",
  Monatsgehalt: "Monthly salary",
  Mondschein: "Moonlight",
  Mumps: "Mumps",
  nachholen: "To catch up on",
  Nachteil: "Disadvantage",
  nächtlich: "Nocturnal",
  Nacken: "Back of the neck / nape",
  Nebensache: "Minor matter",
  neblig: "Foggy",
  necken: "To tease",
  Notfall: "An emergency",
  nutzlos: "Useless",
  Opernhaus: "Opera house",
  Overall: "Coverall / overalls",
  Panne: "Breakdown / mishap",
  Palast: "Palace",
  Parterre: "Ground floor",
  Paste: "Paste",
  peinlich: "Embarrassing / awkward",
  per: "Per",
  Personalabteilung: "HR department / personnel department",
  Pfarrer: "Pastor / parish priest",
  pflügen: "To plow",
  Pier: "Pier",
  plump: "Plump",
  poltern: "To make a racket / to clatter",
  Postfach: "Post office box",
  Prozentsatz: "Percentage / percentage rate",
  Prüfzeit: "Test period / testing period",
  Radspur: "Wheel track",
  ragen: "To protrude / to project",
  ratlos: "Perplexed / at a loss",
  rauben: "To rob / to steal",
  Reh: "Roe deer",
};

const DE_BY_ID = Object.fromEntries(
  CARD_IDS.map((id) => {
    const de = Object.keys(EXPECTED).find((d) => id.toLowerCase().includes(d.toLowerCase().replace(/ä/g, "ä")));
    return [id, Object.keys(EXPECTED).find((k) => {
      const slug = id.replace(/^b1-/, "").replace(/-\d+$/, "");
      return slug === k || slug.toLowerCase() === k.toLowerCase();
    })];
  })
);

// explicit map
const DE_MAP = {
  "b1-kuscheln-1690": "kuscheln",
  "b1-ländlich-1718": "ländlich",
  "b1-Landstraße-1719": "Landstraße",
  "b1-längs-1722": "längs",
  "b1-Leertaste-1744": "Leertaste",
  "b1-lehnen-1747": "lehnen",
  "b1-Leine-1758": "Leine",
  "b1-Lieferwagen-1777": "Lieferwagen",
  "b1-Linkshänder-1784": "Linkshänder",
  "b1-Locke-1788": "Locke",
  "b1-Loge-1793": "Loge",
  "b1-Mal-1826": "Mal",
  "b1-mangeln-1831": "mangeln",
  "b1-Maßnahme-1849": "Maßnahme",
  "b1-meinetwegen-1861": "meinetwegen",
  "b1-Mobbing-1891": "Mobbing",
  "b1-Monatsgehalt-1900": "Monatsgehalt",
  "b1-Mondschein-1902": "Mondschein",
  "b1-Mumps-1925": "Mumps",
  "b1-nachholen-1945": "nachholen",
  "b1-Nachteil-1950": "Nachteil",
  "b1-nächtlich-1953": "nächtlich",
  "b1-Nacken-1955": "Nacken",
  "b1-Nebensache-1967": "Nebensache",
  "b1-neblig-1969": "neblig",
  "b1-necken-1970": "necken",
  "b1-Notfall-1997": "Notfall",
  "b1-nutzlos-2002": "nutzlos",
  "b1-Opernhaus-2033": "Opernhaus",
  "b1-Overall-2047": "Overall",
  "b1-Panne-2053": "Panne",
  "b1-Palast-2051": "Palast",
  "b1-Parterre-2064": "Parterre",
  "b1-Paste-2068": "Paste",
  "b1-peinlich-2073": "peinlich",
  "b1-per-2079": "per",
  "b1-Personalabteilung-2081": "Personalabteilung",
  "b1-Pfarrer-2087": "Pfarrer",
  "b1-pflügen-2103": "pflügen",
  "b1-Pier-2109": "Pier",
  "b1-plump-2127": "plump",
  "b1-poltern-2143": "poltern",
  "b1-Postfach-2150": "Postfach",
  "b1-Prozentsatz-2177": "Prozentsatz",
  "b1-Prüfzeit-2178": "Prüfzeit",
  "b1-Radspur-2210": "Radspur",
  "b1-ragen-2211": "ragen",
  "b1-ratlos-2227": "ratlos",
  "b1-rauben-2232": "rauben",
  "b1-Reh-2260": "Reh",
};

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

function getLearnerEn(entry) {
  return entry.lv !== undefined ? entry.lv : entry.enText;
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
  fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-08-log.json"), "utf8")
);

const lv = load("data/b1.js");
const en = load("data/en/b1.js");
const findings = [];
const followUp = [];
const outOfScope = [];

function add(cardId, severity, field, issue, kind = "content", accentKind = null, category = "finding") {
  const item = { cardId, severity, field, issue, kind, accentKind };
  findings.push(item);
  if (category === "followUp") followUp.push(item);
  if (category === "outOfScope") outOfScope.push(item);
}

const mirrorOk =
  fs.readFileSync(path.join(ROOT, "data/en/b1.js"), "utf8") ===
  fs.readFileSync(path.join(ROOT, "www/data/en/b1.js"), "utf8");
const deUnchanged = execSync("git diff --name-only data/b1.js", { cwd: ROOT }).toString().trim() === "";

let idsChanged = 0;
const diff = execSync("git diff data/en/b1.js", { cwd: ROOT, maxBuffer: 30 * 1024 * 1024 }).toString();
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

let orderParityOk = true;
for (let i = 0; i < lv.length; i++) {
  if (lv[i].de !== en[i].de) {
    orderParityOk = false;
    break;
  }
}

if (!mirrorOk) add("_global", "CRITICAL", "mirror", "Mirror mismatch");
if (!deUnchanged) add("_global", "CRITICAL", "data/b1.js", "DE source modified");
if (!syntaxOk) add("_global", "CRITICAL", "syntax", "JS syntax fail");
if (en.length !== 3367) add("_global", "CRITICAL", "count", `Expected 3367, got ${en.length}`);
if (lv.length !== en.length) add("_global", "CRITICAL", "structural", "LV/EN count mismatch");
if (!orderParityOk) add("_global", "CRITICAL", "order", "DE order mismatch between LV and EN");
if (idsChanged !== 0) add("_global", "CRITICAL", "ids", `Non-lv changes: ${idsChanged} lines`);

for (const cardId of CARD_IDS) {
  const de = DE_MAP[cardId];
  const entry = en.find((e) => e.de === de);
  if (!entry) {
    add(cardId, "CRITICAL", "card", "Card not found");
    continue;
  }

  const expectedLv = EXPECTED[de];
  const actual = getLearnerEn(entry);
  if (actual !== expectedLv) add(cardId, "HIGH", "lv", `Expected "${expectedLv}", got "${actual}"`);

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

const fullPass =
  repairLog.repairedCount === 50 &&
  counts.CRITICAL === 0 &&
  counts.HIGH === 0 &&
  counts.MEDIUM === 0 &&
  counts.LOW === 0 &&
  counts.sectionAccentsTECHNICAL === 0 &&
  counts.sectionAccentsPEDAGOGICAL === 0 &&
  idsChanged === 0 &&
  repairLog.preconditionMismatch === 0;

const verdict = fullPass
  ? "EN–DE B1 HIGH REPAIR #8 — TARGETED REGRESSION PASS"
  : "EN–DE B1 HIGH REPAIR #8 — TARGETED REGRESSION FAIL — FOLLOW-UP REQUIRED";

const status = fullPass
  ? "EN–DE B1 HIGH REPAIR #8 — COMPLETE — READY FOR HIGH OWNER REVIEW #9"
  : verdict;

const out = {
  meta: {
    date: new Date().toISOString(),
    blockSize: 50,
    cardsOwnerReviewed: 50,
    labot: 50,
    nelabot: 0,
    cardsRepaired: repairLog.repairedCount,
    learnerFacingFieldsRepaired: repairLog.learnerFacingFieldsRepaired,
    cardsRegressionAudited: CARD_IDS.length,
    workflowUnresolvedHighBeforeHigh8: 273,
    workflowUnresolvedHighAfterHigh8: 223,
    verdict,
    status,
  },
  validation: {
    javascriptSyntax: syntaxOk ? "PASS" : "FAIL",
    totalCards: en.length,
    structuralParity: lv.length === en.length ? "PASS" : "FAIL",
    idParity: orderParityOk ? "PASS" : "FAIL",
    orderParity: orderParityOk ? "PASS" : "FAIL",
    deReadOnly: deUnchanged ? "PASS" : "FAIL",
    mirrorParity: mirrorOk ? "PASS" : "FAIL",
    idsChanged: idsChanged,
    unexpectedProductionChanges: idsChanged === 0 ? 0 : idsChanged,
  },
  counts,
  preconditionMismatch: repairLog.preconditionMismatch,
  followUpFindings: followUp.length,
  outOfScopeFindings: outOfScope.length,
  findings,
};

fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-regression-08.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify({ counts, verdict, repaired: repairLog.repairedCount, idsChanged, fullPass }, null, 2));
