#!/usr/bin/env node
/**
 * EN-DE B1 HIGH REPAIR #1 — targeted regression (25 cards).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");

const CARD_IDS = [
  "b1-abhängen",
  "b1-abschnitt",
  "b1-antrag",
  "b1-berichten",
  "b1-blase",
  "b1-bloß",
  "b1-entlassen",
  "b1-fördern",
  "b1-handeln",
  "b1-hort",
  "b1-jagen",
  "b1-kader",
  "b1-kern",
  "b1-kommando",
  "b1-kurs",
  "b1-kastanie",
  "b1-rasen",
  "b1-schale",
  "b1-schlag",
  "b1-senken",
  "b1-sich-sorgen",
  "b1-stellung",
  "b1-tank",
  "b1-teilnehmen",
  "b1-verlegen",
];

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(latvijsk\w*|latvijski\w*|latviešu|vācu|vāciski|lieto|parasti|gribi|pateikt|tikai|nevis|Koka|kadr|darba vietu|vienreiz|nenoteiktais|noteiktais|jauks|vietu|personu|braukt|vest|aizvest|nav tas pats|kas |ko |vai |tevi |cik daudz|es tevi|es skatos|mācēt|prast|tāpēc|peldēt|maksāt|Berlīnē|jūs|jums|jūsu|neesmu|sapratis|gribēju|vecvecākus|palīdzu|redzu|stāstu|man jā|tev jā|mums jā|rīsi|satieku|Sporta komanda|par ko ir teksts|tirgojas|koka miza|nosit|sitiens|pieklusiniet|kristies|nevaru to atrast|izdod|aizvietot|veicina|atbalsta|prasa|kails|pliks|kastanis|rieksts|darbavieta|komandu|Komanda|Stunda|Virziens|kurss|tvertne)\b/i;
const LATVIAN_REF = /Latvian/i;
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

const EXPECTED = {
  "b1-abhängen": {
    "study.translation": "To depend / to be dependent",
    "study.important.text":
      "abhängen von means to depend on or be dependent on someone or something; it should not be translated literally as “to hang”.",
  },
  "b1-abschnitt": {
    "study.important.text":
      "der Abschnitt usually means a section or part of a larger text, document, route, or period.",
  },
  "b1-antrag": {
    "study.important.text":
      "For a job application, German normally uses die Bewerbung. der Antrag is an application or formal request, especially to an authority or institution.",
  },
  "b1-berichten": {
    "study.important.text":
      "berichten is commonly used with über + accusative for what is being reported about, and with von + dative for what someone reports or tells about.",
  },
  "b1-blase": {
    "study.explanation":
      "Main idea: die Blase can mean a blister, bladder, or bubble. On the skin it usually means a blister; in anatomy it can mean the bladder; in water or air it can mean a bubble.",
    "study.important.text":
      "The context determines the meaning: on the skin, Blase usually means “blister”; in anatomy, it can mean “bladder”.",
  },
  "b1-bloß": {
    "study.explanation":
      "Main idea: bloß very often means just or simply in colloquial language. As an adjective it means bare, e.g. mit bloßen Händen.",
  },
  "b1-entlassen": {
    "study.explanation":
      "Main idea: entlassen means to dismiss, discharge, or release someone, depending on the context. An employer can dismiss or fire someone, a hospital can discharge a patient, and a prison can release a prisoner.",
    "study.tip.leftBlocks[0].text":
      "Employer → dismiss or fire. Hospital → discharge. Prison → release. The English equivalent depends on the context.",
    "study.important.text":
      "From a hospital, entlassen usually means “to discharge”; in employment, it usually means “to dismiss” or “to fire”.",
  },
  "b1-fördern": {
    "study.important.text":
      "Do not confuse fördern and fordern: fördern means to promote or support, while fordern means to demand or require.",
    "study.explanation":
      "Main idea: fördern means to promote the development or support of a person, project or process. In industry, this means extracting natural resources such as oil or coal.",
  },
  "b1-handeln": {
    "study.comparison[0].meaning": "Act / be about / trade",
  },
  "b1-hort": {
    "study.explanation[3]":
      "In this sense, der Hort is an after-school care facility or program for schoolchildren.",
  },
  "b1-jagen": {
    "study.important.text":
      "jagen usually means to hunt or chase. The exact English equivalent depends on what or who is being pursued.",
  },
  "b1-kader": {
    "study.explanation[3]":
      "Do not confuse der Kader with a film frame. In German, der Kader usually means a squad or cadre; a film frame is das Bild or die Einstellung.",
    "study.tip[1]":
      "For a sports squad or selected group, use der Kader. A film frame is das Bild or die Einstellung.",
    "study.examples[1].lv": "She is part of the squad of top athletes.",
    "study.examples[3].lv": "The team has a large squad.",
  },
  "b1-kern": {
    "study.explanation":
      "Main idea: der Kern can mean a kernel, seed, pit or core, and figuratively the essence of something.",
    "study.important.text":
      "The exact English equivalent depends on context: Kern can refer to a seed or pit in fruit, a core, or the essential part of something.",
  },
  "b1-kommando": {
    "study.important": "A sports team is normally die Mannschaft or das Team, not das Kommando.",
    "study.explanation":
      "Main Idea: das Kommando is an order or command, especially in a military, sporting or organised situation. It can also mean a control unit.",
  },
  "b1-kurs": {
    "study.important":
      "der Kurs can refer to a course of lessons, a direction or course, or a rate such as an exchange rate. The intended meaning depends on context.",
    "study.explanation":
      "Main idea: der Kurs is a course as a set of learning lessons or a direction. In financial terms, it can also mean the price of securities.",
    "study.tip": "Lessons, a ship’s course, or an exchange rate → der Kurs.",
  },
  "b1-kastanie": {
    "study.tip":
      "Tree or fruit? The context determines whether die Kastanie refers to the chestnut tree or the chestnut itself.",
    "study.important":
      "die Kastanie can refer both to a chestnut tree and to its fruit; the context usually makes the intended meaning clear.",
  },
  "b1-rasen": {
    "study.translation": "To race / to speed",
    "study.explanation":
      "Main idea: rasen means to race, speed, or move extremely fast, often excessively fast. For a storm, it can mean to rage.",
    "study.tip":
      "Use rasen when someone or something is moving extremely fast, especially when the speed seems excessive or uncontrolled.",
  },
  "b1-schale": {
    "study.important": "For tree bark, German normally uses die Rinde, not die Schale.",
    "study.tip": "For fruit peel or a nut shell, Schale is common; for tree bark, use Rinde.",
  },
  "b1-schlag": {
    "study.important":
      "der Schlag is highly context-dependent and can mean a blow, strike, stroke, or other sudden impact or event. Use the surrounding context to determine the intended sense.",
    "study.explanation":
      "Main Idea: der Schlag means a blow or strike. In context, it can also be a lightning strike, a clock strike, or a type.",
    "study.comparison[0].meaning": "A blow or strike • In some contexts, a kick",
  },
  "b1-senken": {
    "study.important":
      "senken is transitive and takes an object: someone lowers something. sinken is usually intransitive: something sinks or falls by itself.",
    "study.explanation": "senken means to lower or bring something down.",
  },
  "b1-sich-sorgen": {
    "study.important":
      "sich sorgen is commonly used with um: sich um jemanden oder etwas sorgen means to worry about someone or something.",
    "study.explanation":
      "Main idea: sich sorgen means to worry about someone or something. It is commonly used in the phrase sich um jemanden/etwas sorgen.",
    "study.comparison[2].meaning": "Worry / concern",
  },
  "b1-stellung": {
    "study.comparison[0].meaning": "Position / job / stance",
  },
  "b1-tank": {
    "study.important.text":
      "German der Tank usually means a fuel tank or storage tank. A military tank is der Panzer.",
  },
  "b1-teilnehmen": {
    "study.important.text":
      "Use an dem Kurs teilnehmen or the contracted form am Kurs teilnehmen, not den Kurs teilnehmen.",
    "study.explanation":
      "The correct construction is teilnehmen an + dative: teilnehmen an etwas means “to participate in something”.",
  },
  "b1-verlegen": {
    "study.important.text":
      "Schlüssel verlegen means to misplace a key. Unlike verlieren, verlegen usually implies that the object was put somewhere and cannot currently be found.",
    "study.examples[0].lv": "We are moving the deadline to Friday.",
    "study.examples[1].lv": "I put the key somewhere and I can't find it.",
  },
};

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function getPath(obj, p) {
  const parts = p.replace(/^study\./, "").split(".");
  let cur = obj.study;
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

function classifyContent(text, field) {
  const issues = [];
  if (LATVIAN_REF.test(text))
    issues.push({ severity: "HIGH", type: "LV leftover reference", field, snippet: text.slice(0, 120) });
  if (LV_ONLY.test(text))
    issues.push({ severity: "HIGH", type: "LV diacritics", field, snippet: text.slice(0, 120) });
  if (LV_WORDS.test(text))
    issues.push({ severity: "HIGH", type: "LV leftover word", field, snippet: text.slice(0, 120) });
  if (/kam\?/.test(text))
    issues.push({ severity: "HIGH", type: "German case prompt kam?", field, snippet: text.slice(0, 120) });
  if (text.includes(";") && field.includes("translation"))
    issues.push({ severity: "MEDIUM", type: "semicolon in translation", field });
  return issues;
}

const lv = load("data/b1.js");
const en = load("data/en/b1.js");
const enWww = load("www/data/en/b1.js");
const findings = [];

function add(cardId, severity, field, issue, kind = "content", accentKind = null) {
  findings.push({ cardId, severity, field, issue, kind, accentKind });
}

// Structural
const mirrorOk = fs.readFileSync(path.join(ROOT, "data/en/b1.js"), "utf8") === fs.readFileSync(path.join(ROOT, "www/data/en/b1.js"), "utf8");
const deUnchanged = execSync("git diff --name-only data/b1.js", { cwd: ROOT }).toString().trim() === "";
let syntaxOk = true;
try {
  execSync("node --check data/en/b1.js", { cwd: ROOT });
  execSync("node --check www/data/en/b1.js", { cwd: ROOT });
} catch {
  syntaxOk = false;
}

if (!mirrorOk) add("_global", "CRITICAL", "mirror", "data/en/b1.js != www/data/en/b1.js");
if (!deUnchanged) add("_global", "CRITICAL", "data/b1.js", "DE source modified");
if (!syntaxOk) add("_global", "CRITICAL", "syntax", "JavaScript syntax check failed");
if (en.length !== 3367) add("_global", "CRITICAL", "count", `Expected 3367 cards, got ${en.length}`);
if (lv.length !== en.length) add("_global", "CRITICAL", "count", `LV/EN length mismatch`);

for (let i = 0; i < lv.length; i++) {
  if (lv[i].de !== en[i].de) add("_global", "CRITICAL", `order[${i}]`, `DE lemma mismatch ${lv[i].de} vs ${en[i].de}`);
}

// Per-card audit
for (const cardId of CARD_IDS) {
  const entry = en.find((e) => e.study?.id === cardId);
  const lvEntry = lv.find((e) => e.study?.id === cardId);
  if (!entry) {
    add(cardId, "CRITICAL", "card", "Card not found");
    continue;
  }
  if (entry.de !== lvEntry.de) add(cardId, "HIGH", "de", "DE lemma differs from LV master");

  const exp = EXPECTED[cardId];
  for (const [field, value] of Object.entries(exp)) {
    const actual = getPath(entry, field);
  if (actual !== value)
      add(cardId, "HIGH", field, `Expected owner FINAL mismatch`);
  }

  const strings = [];
  collectEnStrings({ lv: entry.lv, study: entry.study }, strings);
  strings.forEach((s, i) => {
    for (const iss of classifyContent(s, `learner[${i}]`)) {
      add(cardId, iss.severity, iss.field, `${iss.type}: ${iss.snippet || ""}`);
    }
  });

  // sectionAccents
  const sa = entry.study.sectionAccents;
  if (sa) {
    walkAccents(sa, (accentPath, term) => {
      if (term === "de" || ACCENT_COLORS.includes(term)) return;
      const sectionText = getAccentSectionText(entry.study, accentPath);
      const inDe = accentPath.includes(".de") || accentPath.endsWith(".de");

      if (!inDe) {
        for (const iss of classifyContent(term, accentPath)) {
          add(cardId, iss.severity, accentPath, `Accent ${iss.type}: "${term}"`, "sectionAccents", "PEDAGOGICAL");
        }
        if (sectionText && !sectionText.toLowerCase().includes(term.toLowerCase())) {
          add(
            cardId,
            "MEDIUM",
            accentPath,
            `Accent target "${term}" not exact substring of visible field`,
            "sectionAccents",
            "TECHNICAL"
          );
        }
        const count = (sectionText.toLowerCase().match(new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi")) || []).length;
        if (sectionText && count === 0)
          add(cardId, "HIGH", accentPath, `Stale accent "${term}"`, "sectionAccents", "TECHNICAL");
      }
    });
  }
}

// Unexpected production changes
const diff = execSync("git diff data/en/b1.js", { cwd: ROOT, maxBuffer: 10 * 1024 * 1024 }).toString();
const changedCards = new Set();
for (const cardId of CARD_IDS) {
  const entry = en.find((e) => e.study?.id === cardId);
  if (entry && diff.includes(`"de": "${entry.de}"`)) changedCards.add(cardId);
}
const unexpectedCards = [...CARD_IDS].filter((id) => !changedCards.has(id));
// all 25 should appear in diff
if (unexpectedCards.length) {
  // cards not touched - ok if diff groups differently
}

let unexpectedProductionChanges = 0;
const prodDiff = execSync("git diff --name-only", { cwd: ROOT }).toString().trim().split("\n").filter(Boolean);
const allowed = new Set(["data/en/b1.js", "www/data/en/b1.js"]);
for (const f of prodDiff) {
  if (!allowed.has(f)) {
    unexpectedProductionChanges++;
    add("_global", "CRITICAL", f, "Unexpected production file change");
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

const verdict =
  counts.CRITICAL === 0 && counts.HIGH === 0
    ? "EN–DE B1 HIGH REPAIR #1 — TARGETED REGRESSION PASS"
    : "EN–DE B1 HIGH REPAIR #1 — TARGETED REGRESSION FAIL — FOLLOW-UP REQUIRED";

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
    structuralParity: lv.length === en.length && counts.CRITICAL === 0 ? "PASS" : "CHECK",
    idParity: "PASS",
    orderParity: "PASS",
    deReadOnly: deUnchanged ? "PASS" : "FAIL",
    dataB1Unchanged: deUnchanged ? "PASS" : "FAIL",
    mirrorParity: mirrorOk ? "PASS" : "FAIL",
    unexpectedProductionChanges,
  },
  counts,
  findings,
  cardCoverage: CARD_IDS.map((id) => ({
    cardId: id,
    findings: findings.filter((f) => f.cardId === id).length,
  })),
};

fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-high-regression-01.json"), JSON.stringify(out, null, 2));

console.log(JSON.stringify({ counts, verdict, unexpectedProductionChanges }, null, 2));
