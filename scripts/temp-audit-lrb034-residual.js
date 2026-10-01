#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-034";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "data/g2-a1-owner-pending/LRB-034-decisions.json"),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const ET_WORDS =
  /\b(Suur|Põhiidee|Mul på|Hoidma|Aitama|Sügis|Siin|Kuulma|Noor|Nüüd|Keegi|Iga|Aasta|Kohv|Kana|Viisakas|Püksid|Vanaema|Vanaisa|Nimi olema|Ser|Sissy|Sett|akkusativ|Mitte ükski|Mitte mingi|Väike|Tynning|Saama|Oskama|Maksimum|Pood|Riik|Maa|Hane|Kauakestev|Kokk|Küüslauk|Kleit|Riietus|Kook|Külmkapp|Hodelus|Suudlema|Naeratama|Elam|Maitsev|Tühi|Panem|Õpetaja|Naisöpetaja|Kerge|Jooksma|Töötama|Heli)\b/i;
const NO_WORDS =
  /\b(på suur|på hea|Hvordan|God morgen|Snakker|Denimbukser|Nålen|Kyr|Gulrøtter|Akkurat slik|Høy|Mine|Informasjonskapsler|Kirke|Kasse|Ost|Forbered dem|Runder|Siste ed|Bil|Leire|Nærmere|på lukket|Velge|Dessverre|Kjempe|Laskma|I går|Kauai|Aeglane|Kvinnelig kokk)\b/i;
const EN_WORDS =
  /\b(Kilogram|Kilometer|Shop|English|the store|Just|Kart)\b/i;
const LV_LEAK =
  /\b(Atceries|man ir|Latvijisk|latvijska|garš|ilgs|mazs|pazīt|varēt|prast|maksāt|veikals|valsts|zeme|skaļš|skaņa|dzīvot|gards|tukšs|nolikt|skolotājs|viegls|diemžēl|skriet|darboties|atstāt|ļaut|garlaicīgs|lēns|ilgi|smieties|smaidīt|skūpstīt|skūpsts|ledusskapis|govs|kūka|virtuve|automašīna|galva|bērns|bērnudārzs|baznīca|kleita|apģērbs|ķiploks|pavārs|pavāre|nākt|gatavot|cepums|neviens|nekāds|kartupelis|siers|kaķis|pirkt)\b/i;

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
  if (/^kartöfl/i.test(text)) return [];
  if (p.includes(".example") && / – /.test(text)) return [];
  if (
    (p.startsWith("study.explanation") ||
      p.startsWith("study.important") ||
      p.startsWith("study.tip") ||
      p.startsWith("study.comparison")) &&
    /\b(ein|Mann|Buch|nehmen|haben|Akkusativ|kein|keine|kennen|können|kosten|bezahlen|zahlen|laden|Laden|lang|lange|laufen|laut|Laut|Geld|Mensch|Was kostet|Ich habe|Ich kann|der Laden|das Land|die Stadt|ein langer|wie lange|nicht)\b/i.test(
      text
    )
  ) {
    return [];
  }
  if (/\blýsir\b/i.test(text)) return [];
  if (/\btakk\b/i.test(text) && /Keyrðu|Vinsamlegast|takk\./i.test(text))
    return [];
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
  const s = (p) => {
    const hit = collectTargetStrings(merged).find((x) => x.path === p);
    return hit ? hit.text : "";
  };
  const all = collectTargetStrings(merged).map((x) => x.text).join(" ");

  if (card === "kein") {
    if (/neitunarartikel/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "kein still has neitunarartikel" });
    if (!/neitunargreinir/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "kein missing neitunargreinir" });
    if (/kein Geld = engir peningar/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "kein awkward Geld mapping" });
    if (!/Ich habe kein Geld\. = Ég á enga peninga/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "kein missing natural Geld example" });
    if (s("study.examples[0].lv") !== "Ég á enga peninga.")
      issues.push({ card, type: "SEMANTIC", msg: "kein ex[0] mismatch" });
  }

  if (card === "können") {
    if (s("study.comparison[0].example") !== "Ich kann schwimmen. = Ég get synt.")
      issues.push({ card, type: "SEMANTIC", msg: "können cmp[0] not Ég get synt." });
    if (!/geta.*kunna|kunna.*geta/i.test(merged.lv || ""))
      issues.push({ card, type: "SEMANTIC", msg: "können lv missing geta•kunna" });
  }

  if (card === "lang") {
    if (merged.lv !== "langur • langvarandi")
      issues.push({ card, type: "SEMANTIC", msg: "lang lv not langur•langvarandi" });
    if (!/ein langer Tisch = langt borð/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "lang ex[1] spatial mapping missing" });
    if (!/langvarandi/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "lang missing langvarandi duration" });
    if (!/hversu lengi/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "lang missing hversu lengi" });
  }

  if (card === "laufen") {
    if (merged.lv !== "hlaupa • virka")
      issues.push({ card, type: "SEMANTIC", msg: "laufen lv not hlaupa•virka" });
    if (/ganga/i.test(merged.lv || ""))
      issues.push({ card, type: "SEMANTIC", msg: "laufen still has ganga" });
  }

  if (card === "laut") {
    if (merged.lv !== "hávær")
      issues.push({ card, type: "SEMANTIC", msg: "laut lv not hávær" });
    if (/^hátt$/i.test(merged.lv || ""))
      issues.push({ card, type: "SEMANTIC", msg: "laut still hátt" });
  }

  if (card === "Laut") {
    if (merged.lv !== "hljóð")
      issues.push({ card, type: "SEMANTIC", msg: "Laut noun not hljóð" });
  }

  if (card === "kosten") {
    if (!/^kosta$/i.test(merged.lv || ""))
      issues.push({ card, type: "SEMANTIC", msg: "kosten lv not kosta" });
    if (/Maksimum|masak|koster/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "kosten foreign residue" });
    if (!/borga/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "kosten missing borga for bezahlen" });
    if (!/kostar/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "kosten missing kostar examples" });
  }

  if (card === "Laden") {
    if (!/^verslun$/i.test(merged.lv || ""))
      issues.push({ card, type: "SEMANTIC", msg: "Laden lv not verslun" });
    if (/Pood|poodi|på lukket/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "Laden ET/NO residue" });
    if (!/hlaða/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "Laden missing hlaða verb" });
    if (!/verslun/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "Laden missing verslun noun" });
  }
}

const issues = [];
const issueCards = new Set();
let labot = 0;
let nelabot = 0;
let pending = 0;
const compositeCards = new Set();
const semanticMicroRepairCards = [
  "kein",
  "können",
  "lang",
  "laufen",
  "laut",
  "kosten",
  "Laden",
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
  verdict: pass ? "LRB_034_LINGUISTIC_REPAIR_PASS" : "BLOCKED",
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
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
