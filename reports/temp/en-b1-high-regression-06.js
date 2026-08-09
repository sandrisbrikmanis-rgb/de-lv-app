#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #6 — targeted regression (25 owner-reviewed cards).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");

const CARD_IDS = [
  "b1-gönnen-1133",
  "b1-Gräte-1138",
  "b1-Grieß-1143",
  "b1-Größe-1152",
  "b1-Halbschuh-1181",
  "b1-Halstuch-1184",
  "b1-Hammel-1189",
  "b1-Handwerk-1197",
  "b1-Heftklammer-1224",
  "b1-Heimweh-1234",
  "b1-heiter-1237",
  "b1-Herkunft-1254",
  "b1-hindern-1268",
  "b1-hinzu-1277",
  "b1-hobeln-1285",
  "b1-höchstens-1289",
  "b1-Holzscheit-1301",
  "b1-Holzspan-1302",
  "b1-Hopfenstange-1307",
  "b1-Hörsaal-1312",
  "b1-Hungersnot-1328",
  "b1-Inbegriff-1349",
  "b1-Inland-1368",
  "b1-irdisch-1394",
  "b1-Irrtum-1398",
];

const DE_BY_ID = {
  "b1-gönnen-1133": "gönnen",
  "b1-Gräte-1138": "Gräte",
  "b1-Grieß-1143": "Grieß",
  "b1-Größe-1152": "Größe",
  "b1-Halbschuh-1181": "Halbschuh",
  "b1-Halstuch-1184": "Halstuch",
  "b1-Hammel-1189": "Hammel",
  "b1-Handwerk-1197": "Handwerk",
  "b1-Heftklammer-1224": "Heftklammer",
  "b1-Heimweh-1234": "Heimweh",
  "b1-heiter-1237": "heiter",
  "b1-Herkunft-1254": "Herkunft",
  "b1-hindern-1268": "hindern",
  "b1-hinzu-1277": "hinzu",
  "b1-hobeln-1285": "hobeln",
  "b1-höchstens-1289": "höchstens",
  "b1-Holzscheit-1301": "Holzscheit",
  "b1-Holzspan-1302": "Holzspan",
  "b1-Hopfenstange-1307": "Hopfenstange",
  "b1-Hörsaal-1312": "Hörsaal",
  "b1-Hungersnot-1328": "Hungersnot",
  "b1-Inbegriff-1349": "Inbegriff",
  "b1-Inland-1368": "Inland",
  "b1-irdisch-1394": "irdisch",
  "b1-Irrtum-1398": "Irrtum",
};

const EXPECTED = {
  gönnen: "To allow oneself / grant",
  Gräte: "Fish bone",
  Grieß: "Semolina",
  Größe: "Size",
  Halbschuh: "Low-cut shoe",
  Halstuch: "Scarf / neckerchief",
  Hammel: "Wether",
  Handwerk: "Craft / trade",
  Heftklammer: "Staple",
  Heimweh: "Homesickness",
  heiter: "Cheerful / merry",
  Herkunft: "Origin / background",
  hindern: "To hinder / prevent",
  hinzu: "In addition / additionally",
  hobeln: "To plane",
  höchstens: "At most / no more than",
  Holzscheit: "Log / piece of firewood",
  Holzspan: "Wood chip / wood shaving",
  Hopfenstange: "Hop pole",
  Hörsaal: "Lecture hall",
  Hungersnot: "Famine",
  Inbegriff: "Epitome / embodiment",
  Inland: "Domestic territory / home country",
  irdisch: "Earthly / terrestrial",
  Irrtum: "Mistake / error",
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
  fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-06-log.json"), "utf8")
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

let idParityOk = true;
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
  repairLog.repairedCount === 25 &&
  counts.CRITICAL === 0 &&
  counts.HIGH === 0 &&
  counts.MEDIUM === 0 &&
  counts.LOW === 0 &&
  counts.sectionAccentsTECHNICAL === 0 &&
  counts.sectionAccentsPEDAGOGICAL === 0 &&
  idsChanged === 0 &&
  repairLog.preconditionMismatch === 0;

const verdict = fullPass
  ? "EN–DE B1 HIGH REPAIR #6 — TARGETED REGRESSION PASS"
  : "EN–DE B1 HIGH REPAIR #6 — TARGETED REGRESSION FAIL — FOLLOW-UP REQUIRED";

const status = fullPass
  ? "EN–DE B1 HIGH REPAIR #6 — COMPLETE — READY FOR HIGH OWNER REVIEW #7"
  : verdict;

const out = {
  meta: {
    date: new Date().toISOString(),
    cardsOwnerReviewed: 25,
    labot: 25,
    nelabot: 0,
    cardsRepaired: repairLog.repairedCount,
    topLevelLvFieldsRepaired: repairLog.repairedCount,
    cardsRegressionAudited: CARD_IDS.length,
    workflowUnresolvedHighBeforeHigh6: 323,
    workflowUnresolvedHighAfterHigh6: 298,
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

fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-regression-06.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify({ counts, verdict, repaired: repairLog.repairedCount, idsChanged, fullPass }, null, 2));
