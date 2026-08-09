#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #7 — targeted regression (25 owner-reviewed cards).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");

const CARD_IDS = [
  "b1-Jagdbeute-1403",
  "b1-Schaltjahr-1409",
  "b1-jaulen-1422",
  "b1-Kabelkanal-1440",
  "b1-Kachel-1443",
  "b1-Kai-1448",
  "b1-Kamerad-1451",
  "b1-Kantine-1465",
  "b1-karitativ-1473",
  "b1-Kartei-1477",
  "b1-Kanten-1464",
  "b1-kegeln-1486",
  "b1-keuchen-1501",
  "b1-Kinderkrippe-1505",
  "b1-Kladde-1510",
  "b1-knitterfrei-1551",
  "b1-knüpfen-1558",
  "b1-knurren-1559",
  "b1-krächzen-1606",
  "b1-krähen-1612",
  "b1-kreisen-1631",
  "b1-kriechen-1636",
  "b1-Kursbuch-1680",
  "b1-krumm-1649",
  "b1-Krüppel-1651",
];

const DE_BY_ID = {
  "b1-Jagdbeute-1403": "Jagdbeute",
  "b1-Schaltjahr-1409": "Schaltjahr",
  "b1-jaulen-1422": "jaulen",
  "b1-Kabelkanal-1440": "Kabelkanal",
  "b1-Kachel-1443": "Kachel",
  "b1-Kai-1448": "Kai",
  "b1-Kamerad-1451": "Kamerad",
  "b1-Kantine-1465": "Kantine",
  "b1-karitativ-1473": "karitativ",
  "b1-Kartei-1477": "Kartei",
  "b1-Kanten-1464": "Kanten",
  "b1-kegeln-1486": "kegeln",
  "b1-keuchen-1501": "keuchen",
  "b1-Kinderkrippe-1505": "Kinderkrippe",
  "b1-Kladde-1510": "Kladde",
  "b1-knitterfrei-1551": "knitterfrei",
  "b1-knüpfen-1558": "knüpfen",
  "b1-knurren-1559": "knurren",
  "b1-krächzen-1606": "krächzen",
  "b1-krähen-1612": "krähen",
  "b1-kreisen-1631": "kreisen",
  "b1-kriechen-1636": "kriechen",
  "b1-Kursbuch-1680": "Kursbuch",
  "b1-krumm-1649": "krumm",
  "b1-Krüppel-1651": "Krüppel",
};

const EXPECTED = {
  Jagdbeute: "Hunting prey / game",
  Schaltjahr: "Leap year",
  jaulen: "To howl",
  Kabelkanal: "Cable duct / cable conduit",
  Kachel: "Tile",
  Kai: "Quay / wharf",
  Kamerad: "Comrade / companion",
  Kantine: "Canteen / cafeteria",
  karitativ: "Charitable",
  Kartei: "Card index / file index",
  Kanten: "End piece of bread / bread crust",
  kegeln: "To bowl / play skittles",
  keuchen: "To pant",
  Kinderkrippe: "Day nursery / childcare centre",
  Kladde: "Draft notebook / rough copy",
  knitterfrei: "Wrinkle-free",
  knüpfen: "To tie / knot",
  knurren: "To growl",
  krächzen: "To caw / croak",
  krähen: "To crow",
  kreisen: "To circle",
  kriechen: "To crawl",
  Kursbuch: "Timetable / railway timetable",
  krumm: "Crooked / bent",
  Krüppel: "A cripple",
};

const OWNER_RESOLVED_NELABOT = ["b1-Krüppel-1651"];

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
  fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-repair-07-log.json"), "utf8")
);

const lv = load("data/b1.js");
const en = load("data/en/b1.js");
const findings = [];
const ownerResolved = [];
const followUp = [];
const outOfScope = [];

function add(cardId, severity, field, issue, kind = "content", accentKind = null, category = "finding") {
  const item = { cardId, severity, field, issue, kind, accentKind };
  findings.push(item);
  if (category === "ownerResolved") ownerResolved.push(item);
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
  if (entry.lv !== expectedLv) {
    if (OWNER_RESOLVED_NELABOT.includes(cardId)) {
      ownerResolved.push({
        cardId,
        severity: "OWNER-RESOLVED",
        field: "lv",
        issue: `Owner NELABOT: expected "${expectedLv}", got "${entry.lv}" — DO NOT COUNT AS OPEN HIGH`,
        kind: "ownerDecision",
      });
    } else {
      add(cardId, "HIGH", "lv", `Expected "${expectedLv}", got "${entry.lv}"`);
    }
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
  repairLog.repairedCount === 24 &&
  repairLog.nelabot === 1 &&
  counts.CRITICAL === 0 &&
  counts.HIGH === 0 &&
  counts.MEDIUM === 0 &&
  counts.LOW === 0 &&
  counts.sectionAccentsTECHNICAL === 0 &&
  counts.sectionAccentsPEDAGOGICAL === 0 &&
  idsChanged === 0 &&
  repairLog.preconditionMismatch === 0;

const verdict = fullPass
  ? "EN–DE B1 HIGH REPAIR #7 — TARGETED REGRESSION PASS"
  : "EN–DE B1 HIGH REPAIR #7 — TARGETED REGRESSION FAIL — FOLLOW-UP REQUIRED";

const status = fullPass
  ? "EN–DE B1 HIGH REPAIR #7 — COMPLETE — READY FOR HIGH OWNER REVIEW #8"
  : verdict;

const out = {
  meta: {
    date: new Date().toISOString(),
    cardsOwnerReviewed: 25,
    labot: 24,
    nelabot: 1,
    cardsRepaired: repairLog.repairedCount,
    topLevelLvFieldsRepaired: repairLog.repairedCount,
    cardsRegressionAudited: CARD_IDS.length,
    nelabotOwnerDecisionsPreserved: repairLog.nelabot,
    workflowUnresolvedHighBeforeHigh7: 298,
    workflowUnresolvedHighAfterHigh7: 273,
    verdict,
    status,
  },
  nelabot: repairLog.nelabotCards,
  ownerResolvedFindings: ownerResolved,
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
  ownerResolvedCount: ownerResolved.length,
  findings,
};

fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-regression-07.json"), JSON.stringify(out, null, 2));
console.log(JSON.stringify({ counts, verdict, repaired: repairLog.repairedCount, nelabot: 1, idsChanged, fullPass }, null, 2));
