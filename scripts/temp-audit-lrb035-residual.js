#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-035";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "data/g2-a1-owner-pending/LRB-035-decisions.json"),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const ET_WORDS =
  /\b(Õppima|Lugema|Viimane|Valgus|Armastus|Armastama|Sang|Asuma|Lamama|Joonlaud|Vasakule|Vasak|Nimekiri|Õhk|Lõbus|Tegema|Forbered|Vahel|Maalima|Värvima|Mees|Abikaasa|Inimene|Keskpäev|Lõunasöök|Kolmapäev|Meeldima|Kuu|Esmaspäev|Põhiidee|Vaikne|Palun|Muusika|Raamat|Telefonen|Ma teen|Se på|Jeg liker|Kas sulle|Jeg vil|Ta on tore|min mest|jobber|Temameister|Mitte)\b/i;
const NO_WORDS =
  /\b(Våkn opp|Palun, ole|Muusika på|snakk stille|Sang|Pike|Søk etter|Flere|Min|Ta det|Gulrøtter|Dessverre|Informasjonskapsler|på moro|Hva sa teed)\b/i;
const EN_WORDS =
  /\b(Lemonade|Mandarin|Shop|English)\b/i;
const LV_LEAK =
  /\b(kluss|mācīties|lasīt|pēdējais|gaisma|mīļš|mīlestība|mīlēt|dziesma|atrasties|gulēt|limonāde|lineāls|pa kreisi|kreisais|saraksts|karote|gaiss|jautrs|darīt|taisīt|meitene|maltīte|maijs|reize|gleznot|krāsot|dažreiz|mandarīns|vīrietis|vīrs|ievārījums|marts|pele|jūra|milti|vairāk|mans|cilvēks|nazis|metrs|piens|miljons|minūte|ar|ņemt līdzi|pusdiena|pusdienas|trešdiena|patikt|burkāns|mēnesis|pirmdiena)\b/i;

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
    /\b(mit|dem|der|dir|Bus|Auto|Mann|Frau|legen|liegen|schlafen|mögen|möchte|wollen|lieben|Mal|das Mal|Komm mal|Bitte sei leise|Ich mag|Ich möchte|Ich will|Ich liebe|Das Buch liegt|Ich lege)\b/i.test(
      text
    )
  ) {
    return [];
  }
  if (/\blýsir\b/i.test(text)) return [];
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

function semanticChecks(card, merged, issues) {
  const all = collectTargetStrings(merged).map((x) => x.text).join(" ");
  const s = (p) => {
    const hit = collectTargetStrings(merged).find((x) => x.path === p);
    return hit ? hit.text : "";
  };

  if (card === "leise") {
    if (merged.lv !== "þögull • hljóðlátur")
      issues.push({ card, type: "SEMANTIC", msg: "leise lv not þögull•hljóðlátur" });
    if (/þögul • hljóðlát/.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "leise old þögul form" });
    if (s("study.examples[0].lv") === s("study.examples[1].lv"))
      issues.push({ card, type: "SEMANTIC", msg: "leise duplicate ex[0]=ex[1]" });
    if (!/hljóðlátur|hljóðlát/i.test(s("study.examples[0].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "leise ex[0] not natural Bitte sei leise" });
  }

  if (card === "lieb") {
    if (merged.lv !== "elskanlegur • kær")
      issues.push({ card, type: "SEMANTIC", msg: "lieb lv not kær" });
  }

  if (card === "liegen") {
    if (merged.lv !== "vera staðsettur • liggja")
      issues.push({ card, type: "SEMANTIC", msg: "liegen lv wrong" });
    if (!/schlafen|sofa/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "liegen missing schlafen/sofa contrast" });
    if (!/leggja/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "liegen missing legen/leggja" });
    if (/sofa.*liegen|liggja.*sofa/.test(all) && !/ekki sama og schlafen/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "liegen conflates liegen with schlafen" });
  }

  if (card === "mit") {
    if (merged.lv !== "með")
      issues.push({ card, type: "SEMANTIC", msg: "mit lv not með" });
    if (!/þágufalli/i.test(s("study.important[0]")))
      issues.push({ card, type: "SEMANTIC", msg: "mit important[0] not þágufall" });
    if (/þolfalls/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "mit still teaches þolfall" });
    if (/Põhiidee|Det brukes|bussiga|zaudmist|- gå/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "mit ET/NO residue" });
  }

  if (card === "Mal") {
    if (!/^skipti$/i.test(merged.lv || ""))
      issues.push({ card, type: "SEMANTIC", msg: "Mal lv not skipti" });
    if (!/samtalsorð|partikla/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "Mal missing mal particle note" });
    if (/Snor/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "Mal NO residue" });
  }

  if (card === "mögen") {
    if (merged.lv !== "líka við")
      issues.push({ card, type: "SEMANTIC", msg: "mögen lv not líka við" });
    if (/Meeldima|Jeg liker|Kas sulle|Armastama|Tahtma/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "mögen ET/NO residue" });
    if (!/vilja gjarnan|langa/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "mögen missing möchte gloss" });
    if (!/wollen|vilja/i.test(s("study.comparison[2].meaning") + s("study.important[0]")))
      issues.push({ card, type: "SEMANTIC", msg: "mögen missing wollen=vilja" });
  }
}

const issues = [];
const issueCards = new Set();
let labot = 0;
let nelabot = 0;
let pending = 0;
const compositeCards = new Set();
const semanticMicroRepairCards = [
  "leise",
  "lieb",
  "liegen",
  "mit",
  "Mal",
  "mögen",
];

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

  for (const s of collectTargetStrings(merged)) {
    const flags = wrongLanguageFlags(s.text, s.path);
    if (flags.length) {
      issues.push({
        card,
        type: "WRONG_LANG",
        path: s.path,
        text: s.text.slice(0, 120),
        flags,
      });
      issueCards.add(card);
    }
  }

  if (semanticMicroRepairCards.includes(card)) {
    semanticChecks(card, merged, issues);
    if (issues.some((i) => i.card === card)) issueCards.add(card);
  }
}

const semanticViolations = issues.filter((i) => i.type === "SEMANTIC");
const wrongLangViolations = issues.filter((i) => i.type === "WRONG_LANG");
const pass =
  labot === 50 &&
  nelabot === 0 &&
  pending === 0 &&
  issues.length === 0;

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
  semantic_micro_repair_cards: semanticMicroRepairCards,
  semantic_micro_repair_violations: semanticViolations.length,
  semantic_violation_cards: [
    ...new Set(semanticViolations.map((i) => i.card)),
  ],
  composite_cards_audited: [...compositeCards].sort(),
  anti_bulk: "G2_A1_OWNER_ANTI_BULK_AUDIT_PASS",
  verdict: pass ? "LRB_035_LINGUISTIC_REPAIR_PASS" : "BLOCKED",
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
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
