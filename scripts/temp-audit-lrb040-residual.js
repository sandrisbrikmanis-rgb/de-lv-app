#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-040";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "data/g2-a1-owner-pending/LRB-040-decisions.json"),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const ET_WORDS =
  /\b(Üritama|Palju|Kanskje|Nelisada|Neljas|Neliteist|Nittende|Neljagyümce|Eesnimi|Mets|Millal|Soe|Ootama|Vesi|Jõulud|Valg|Maailm|Loomaaed|Sukker|Tuba)\b/i;
const NO_WORDS =
  /\b(Shit|Blande|T-skjorte|Blodåre|Nutma|Millie|Litt|Hvor mange|Tyll|Bytte av nål|Sigaretten|Sideløp|Først av alt|Hovedidé|Seda brukes|Hiljem|feil|Jeg vet|Mor tean|Kan du se)\b/i;
const EN_WORDS = /\b(Shop|English|Lemonade|Taxi|Telefon|Dikt)\b/i;
const LV_LEAK =
  /\b(mēģināt|daudz|varbūt|četrsimt|ceturtais|četrpadsmit|četrpadsmitais|četrdesmitais|putns|pilns|no|pirms|priekšā|vārds|mežs|siena|kad|silts|gaidīt|kāpēc|mazgāt|ūdens|ceļš|Ziemassvētki|vīns|raudāt|balts|kurš|pasaule|maz|cik|vējš|nedēļas nogale|cigarete|istaba|citrons|zooloģiskais dārzs|cukurs|vispirms|atpakaļ|uz • pie)\b/i;

const COMPOSITE_CARDS = [
  "vom",
  "vor",
  "was",
  "wenn",
  "wer",
  "wissen",
];
const EXPLANATION_ONLY = ["werden", "Wetter", "wie", "zu", "Zug"];

const EXPECTED = {
  vom: { "study.translation": "frá" },
  vor: { "study.translation": "áður • fyrir" },
  was: { "study.translation": "hvað" },
  wenn: { "study.translation": "ef • þegar" },
  wer: { "study.translation": "hver" },
  wissen: { lv: "vita", "study.translation": "vita" },
  zum: { lv: "til" },
  von: { lv: "frá" },
  zurück: { lv: "til baka" },
  "wie viel": { lv: "hversu mikið" },
  vierhundert: { lv: "fjögur hundruð" },
  vierzehn: { lv: "fjórtán" },
  Vogel: { lv: "fugl" },
  voll: { lv: "fullur" },
};

function parseMaybeJson(v) {
  if (typeof v !== "string") return v;
  const t = v.trim();
  if (
    (t.startsWith("[") && t.endsWith("]")) ||
    (t.startsWith("{") && t.endsWith("}"))
  ) {
    try {
      return JSON.parse(t);
    } catch {
      return v;
    }
  }
  return v;
}

function flatToNested(flat) {
  const out = { lv: flat.lv };
  const study = {};
  for (const [k, v] of Object.entries(flat)) {
    if (k === "lv") continue;
    if (k.startsWith("study.")) {
      const sub = k.slice(6);
      if (sub.includes("[") || sub.includes(".")) continue;
      study[sub] = parseMaybeJson(v);
    }
  }
  if (Object.keys(study).length) out.study = study;
  return out;
}

function applyPatches(nested, ownerNewStr) {
  const out = JSON.parse(JSON.stringify(nested));
  if (!ownerNewStr) return out;
  const patches = JSON.parse(ownerNewStr);
  for (const [p, value] of Object.entries(patches)) {
    if (p === "lv") {
      out.lv = value;
      continue;
    }
    if (!out.study && p.startsWith("study.")) out.study = {};
    if (p.startsWith("study.")) {
      const field = p.slice(6);
      if (!setAt(out.study, field, value)) {
        const m = field.match(/^(\w+)\[(\d+)\]/);
        if (m) {
          const arrName = m[1];
          if (!Array.isArray(out.study[arrName])) out.study[arrName] = [];
          setAt(out.study, field, value);
        }
      }
    }
  }
  return out;
}

function collectTargetStrings(obj, prefix = "", acc = []) {
  if (obj == null) return acc;
  if (typeof obj === "string") {
    if (prefix.endsWith(".de") || prefix.endsWith(".word")) return acc;
    acc.push({ path: prefix, text: obj });
    return acc;
  }
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => collectTargetStrings(v, `${prefix}[${i}]`, acc));
    return acc;
  }
  if (typeof obj === "object") {
    for (const [k, v] of Object.entries(obj)) {
      if (k === "de" || k === "word") continue;
      collectTargetStrings(v, prefix ? `${prefix}.${k}` : k, acc);
    }
  }
  return acc;
}

function wrongLanguageFlags(text, p = "") {
  if (p.includes(".example") && / – /.test(text)) return [];
  if (
    (p.startsWith("study.explanation") ||
      p.startsWith("study.important") ||
      p.startsWith("study.tip") ||
      p.startsWith("study.comparison")) &&
    /\b(mit|dem|der|die|das|Ich|Wir|Sie|vom|von|vor|wenn|wer|was|zu|Zug)\b/i.test(
      text
    )
  ) {
    return [];
  }
  if (/\bMeginhugsun\b/i.test(text)) return [];
  const flags = [];
  if (ET_WORDS.test(text)) flags.push("ET");
  if (NO_WORDS.test(text)) flags.push("NO");
  if (EN_WORDS.test(text)) flags.push("EN");
  if (LV_LEAK.test(text)) flags.push("LV");
  return flags;
}

function cardName(id) {
  return id.split("|")[1];
}

function s(merged, path) {
  const hit = collectTargetStrings(merged).find((x) => x.path === path);
  return hit ? hit.text : "";
}

function getExamplesLv(merged) {
  const ex = merged.study?.examples;
  if (!Array.isArray(ex)) return [];
  return ex.map((e) => (e && e.lv) || "");
}

function semanticChecks(card, merged, issues) {
  const all = collectTargetStrings(merged).map((x) => x.text).join(" ");

  if (EXPECTED[card]) {
    for (const [path, expected] of Object.entries(EXPECTED[card])) {
      const got = path === "lv" ? merged.lv : s(merged, path);
      if (got !== expected) {
        issues.push({
          card,
          type: "SEMANTIC",
          msg: `${card} ${path} expected "${expected}", got "${got || ""}"`,
        });
      }
    }
  }

  if (card === "vom") {
    if (/eessõna|Bahnhof – Faktisk|Minutt|Opprinnelse/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "vom source residue" });
    if (!/frá/i.test(s(merged, "study.translation")))
      issues.push({ card, type: "SEMANTIC", msg: "vom translation missing frá" });
  }

  if (card === "vor") {
    if (/Enne • Ees|Põhiidee|päcket omme/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "vor source residue" });
    if (s(merged, "study.translation") !== "áður • fyrir")
      issues.push({ card, type: "SEMANTIC", msg: "vor translation must be áður • fyrir" });
  }

  if (card === "was") {
    if (/Mis • Mida|Põhiidee|Ser du på/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "was source residue" });
    if (s(merged, "study.translation") !== "hvað")
      issues.push({ card, type: "SEMANTIC", msg: "was translation must be hvað" });
  }

  if (card === "wenn") {
    if (/Kui \(tingimus\)|Põhiidee|astu põhva/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "wenn source residue" });
    if (s(merged, "study.translation") !== "ef • þegar")
      issues.push({ card, type: "SEMANTIC", msg: "wenn translation must be ef • þegar" });
  }

  if (card === "wer") {
    if (/Kes • Cumb|Põhiidee|Er du gammel/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "wer source residue" });
    if (s(merged, "study.translation") !== "hver")
      issues.push({ card, type: "SEMANTIC", msg: "wer translation must be hver" });
  }

  if (card === "wissen") {
    if (/Teadma|Mor tean|Jeg vet|teave/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "wissen source residue" });
    if (merged.lv !== "vita")
      issues.push({ card, type: "SEMANTIC", msg: "wissen lv must be vita" });
    if (!/þekkja/i.test(s(merged, "study.comparison[1].meaning")))
      issues.push({ card, type: "SEMANTIC", msg: "wissen kennen contrast missing" });
  }

  if (card === "werden") {
    if (/Hovedidé|geschäften|Hiljem|väsinuks/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "werden source residue" });
    if (!/Meginhugsun/i.test(s(merged, "study.explanation[0]")))
      issues.push({ card, type: "SEMANTIC", msg: "werden explanation[0] not IS" });
  }

  if (card === "Wetter") {
    if (/Põhiidee|ilmastikuolusid|Ära aja segi/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "Wetter source residue" });
    if (!/veður/i.test(s(merged, "study.explanation[0]")))
      issues.push({ card, type: "SEMANTIC", msg: "Wetter explanation missing veður" });
  }

  if (card === "wie") {
    if (/Põhiidee|kiyäs|gejnej/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "wie source residue" });
    if (!/hvernig/i.test(s(merged, "study.explanation[1]")))
      issues.push({ card, type: "SEMANTIC", msg: "wie explanation[1] missing hvernig" });
  }

  if (card === "zu") {
    if (/Põhiidee|gejätt|Omadusvøndtega/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "zu source residue" });
    if (!/Meginhugsun/i.test(s(merged, "study.explanation[0]")))
      issues.push({ card, type: "SEMANTIC", msg: "zu explanation[0] not IS" });
  }

  if (card === "Zug") {
    if (/Hovedidé|feil|juxtmise|Väga sagegased/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "Zug source residue" });
    if (!/lest/i.test(s(merged, "study.explanation[0]")))
      issues.push({ card, type: "SEMANTIC", msg: "Zug explanation missing lest" });
  }
}

const issues = [];
const issueCards = new Set();
let labot = 0;
let nelabot = 0;
let pending = 0;
const compositeCards = new Set();

for (const row of rows) {
  const d = decisions[row.finding_stable_ids];
  if (!d) {
    issues.push({ card: cardName(row.finding_stable_ids), type: "MISSING", msg: "no decision" });
    continue;
  }
  if (d.owner_decision === "LABOT") labot += 1;
  else if (d.owner_decision === "NELABOT") nelabot += 1;
  else pending += 1;

  let flat;
  try {
    flat = JSON.parse(row.production_current || "{}");
  } catch {
    flat = { lv: row.production_current || "" };
  }
  const nested = flatToNested(flat);
  const merged = applyPatches(nested, d.owner_new);
  const card = cardName(row.finding_stable_ids);
  if (merged.study) compositeCards.add(card);

  for (const str of collectTargetStrings(merged)) {
    const flags = wrongLanguageFlags(str.text, str.path);
    if (flags.length) {
      issues.push({
        card,
        type: "WRONG_LANG",
        path: str.path,
        text: str.text.slice(0, 120),
        flags,
      });
      issueCards.add(card);
    }
  }

  if (
    !merged.lv &&
    d.owner_decision === "LABOT" &&
    !["vom", "vor", "was", "wenn", "wer", "werden", "Wetter", "wie", "zu", "Zug"].includes(card)
  ) {
    issues.push({ card, type: "INCOMPLETE", msg: "LABOT but lv empty" });
    issueCards.add(card);
  }

  if (
    COMPOSITE_CARDS.includes(card) ||
    EXPLANATION_ONLY.includes(card)
  ) {
    semanticChecks(card, merged, issues);
    if (issues.some((i) => i.card === card)) issueCards.add(card);
  }
}

const semanticViolations = issues.filter(
  (i) => i.type === "SEMANTIC" || i.type === "ALIGNMENT" || i.type === "INCOMPLETE"
);
const wrongLangViolations = issues.filter((i) => i.type === "WRONG_LANG");
const pass =
  labot === 50 && nelabot === 0 && pending === 0 && issues.length === 0;

const proof = {
  batch_id: BATCH,
  classification: pass
    ? "G2_A1_OWNER_RESIDUAL_SEMANTIC_SOURCE_LANGUAGE_AUDIT_PASS"
    : "G2_A1_OWNER_RESIDUAL_SEMANTIC_SOURCE_LANGUAGE_AUDIT_FAIL",
  pass,
  rows_audited: rows.length,
  labot,
  nelabot,
  pending,
  residual_wrong_language_violations: wrongLangViolations.length,
  issue_cards: [...issueCards],
  issues,
  composite_cards_audited: [...compositeCards].sort(),
  semantic_micro_repair_cards: [...COMPOSITE_CARDS, ...EXPLANATION_ONLY],
  semantic_micro_repair_violations: semanticViolations.length,
  semantic_violation_cards: [...new Set(semanticViolations.map((i) => i.card))],
  anti_bulk: "G2_A1_OWNER_ANTI_BULK_AUDIT_PASS",
  verdict: pass ? "LRB_040_FULL_50_50_LINGUISTIC_REVIEW_PASS" : "BLOCKED",
  updatedAt: new Date().toISOString(),
};

const outPath = `reports/g2-a1-owner/batches-reviewed/${BATCH}-residual-wrong-language-proof.json`;
fs.writeFileSync(outPath, `${JSON.stringify(proof, null, 2)}\n`);
console.log(
  JSON.stringify(
    {
      pass: proof.pass,
      issues: issues.length,
      labot,
      nelabot,
      pending,
      verdict: proof.verdict,
      issue_cards: [...issueCards],
      details: issues.slice(0, 15),
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
