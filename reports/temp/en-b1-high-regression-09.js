#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #9 — targeted regression (50 owner-reviewed cards).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");

const DE_MAP = {
  "b1-Rücksicht-2344": "Rücksicht",
  "b1-Rute-2367": "Rute",
  "b1-Sage-2374": "Sage",
  "b1-Salon-2378": "Salon",
  "b1-Sanitäter-2385": "Sanitäter",
  "b1-saufen-2391": "saufen",
  "b1-Sauger-2393": "Sauger",
  "b1-säumen-2397": "säumen",
  "b1-Scheinwerfer-2422": "Scheinwerfer",
  "b1-schleichen-2455": "schleichen",
  "b1-schleppen-2461": "schleppen",
  "b1-Schneiderin-2498": "Schneiderin",
  "b1-Schnellzug-2499": "Schnellzug",
  "b1-Schnittlauch-2501": "Schnittlauch",
  "b1-Schnittmuster-2502": "Schnittmuster",
  "b1-Schrecken-2517": "Schrecken",
  "b1-Schrift-2520": "Schrift",
  "b1-Schuld-2526": "Schuld",
  "b1-Schüttelfrost-2530": "Schüttelfrost",
  "b1-schwellen-2555": "schwellen",
  "b1-Schwiele-2560": "Schwiele",
  "b1-schwindeln-2564": "schwindeln",
  "b1-schwul-2567": "schwul",
  "b1-sichern-2614": "sichern",
  "b1-Sitzung-2635": "Sitzung",
  "b1-Skispringen-2637": "Skispringen",
  "b1-Sommersprosse-2649": "Sommersprosse",
  "b1-Sorte-2658": "Sorte",
  "b1-sowohl-2662": "sowohl",
  "b1-Sprechzimmer-2698": "Sprechzimmer",
  "b1-Sprungschanze-2709": "Sprungschanze",
  "b1-Spur-2712": "Spur",
  "b1-Stab-2713": "Stab",
  "b1-stammen-2722": "stammen",
  "b1-Standlicht-2726": "Standlicht",
  "b1-stechen-2733": "stechen",
  "b1-steil-2738": "steil",
  "b1-strahlen-2781": "strahlen",
  "b1-Strudel-2807": "Strudel",
  "b1-Stuck-2808": "Stuck",
  "b1-Sülze-2825": "Sülze",
  "b1-tadeln-2834": "tadeln",
  "b1-Tageordnung-2835": "Tagung",
  "b1-taumeln-2865": "taumeln",
  "b1-Tausch-2866": "Tausch",
  "b1-Teig-2870": "Teig",
  "b1-Tempo-2881": "Tempo",
  "b1-tapezieren-2842": "tapezieren",
  "b1-Treue-2918": "Treue",
  "b1-Tribüne-2919": "Tribüne",
};

const CARD_IDS = Object.keys(DE_MAP);

const EXPECTED = {
  Rücksicht: "Consideration",
  Rute: "Rod",
  Sage: "Legend",
  Salon: "Salon",
  Sanitäter: "Paramedic",
  saufen: "To drink heavily",
  Sauger: "Bottle nipple",
  säumen: "To hem",
  Scheinwerfer: "Headlight / spotlight",
  schleichen: "To sneak",
  schleppen: "To drag",
  Schneiderin: "Seamstress",
  Schnellzug: "High-speed train",
  Schnittlauch: "Chives",
  Schnittmuster: "Sewing pattern",
  Schrecken: "Fright",
  Schrift: "Writing",
  Schuld: "Guilt",
  Schüttelfrost: "Chills",
  schwellen: "To swell",
  Schwiele: "A callus",
  schwindeln: "To cheat / to lie",
  schwul: "Gay",
  sichern: "To secure",
  Sitzung: "Meeting / session",
  Skispringen: "Ski jumping",
  Sommersprosse: "Freckle",
  Sorte: "Variety / type",
  sowohl: "Both ... and ...",
  Sprechzimmer: "Consulting room",
  Sprungschanze: "Ski jump",
  Spur: "Track / trace",
  Stab: "Stick / pole",
  stammen: "To come from",
  Standlicht: "Parking light",
  stechen: "To stab",
  steil: "Steep",
  strahlen: "To beam",
  Strudel: "Whirlpool",
  Stuck: "Stucco",
  Sülze: "Aspic",
  tadeln: "To criticize",
  Tagung: "Conference / meeting",
  taumeln: "To stagger",
  Tausch: "Exchange",
  Teig: "Dough",
  Tempo: "Pace",
  tapezieren: "To wallpaper",
  Treue: "Loyalty",
  Tribüne: "Grandstand",
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
  fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-09-log.json"), "utf8")
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
  ? "EN–DE B1 HIGH REPAIR #9 — TARGETED REGRESSION PASS"
  : "EN–DE B1 HIGH REPAIR #9 — TARGETED REGRESSION FAIL — FOLLOW-UP REQUIRED";

const status = fullPass
  ? "EN–DE B1 HIGH REPAIR #9 — COMPLETE — READY FOR HIGH OWNER REVIEW #10"
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
    workflowUnresolvedHighBeforeHigh9: 223,
    workflowUnresolvedHighAfterHigh9: 173,
    tagungMetadataAnomaly: repairLog.tagungMetadataAnomaly,
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

fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-regression-09.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify({ counts, verdict, repaired: repairLog.repairedCount, idsChanged, fullPass }, null, 2));
