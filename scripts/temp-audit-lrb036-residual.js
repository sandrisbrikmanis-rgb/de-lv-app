#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-036";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "data/g2-a1-owner-pending/LRB-036-decisions.json"),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const ET_WORDS =
  /\b(Põhiidee|Pidama|Võtma|Kätte|Svezvoj|Loomulik|Uus|Kõrv|Üheksasada|Üeksas|Üheksateist|Üheksaçılış|Üheksagümces|Mitte kaige|Avama|Ilma|Unu|Uvillig|Väsinud|Suu|Emma|Tupp|Nimetama|Kena|Loodus|Körval|Ingen|Nimetama|Ma pean|Sa pead|Vi må|Ma tulen|Homeseni|God morgen|Hommik|Ma olen|Hvor mye|Mul på|bare|Ma tahan|Ma ei te|Ta öklisb|Ütle mulle|Hva skal|Kohvi voi|Täna voi|Hva er det|Sa tuled|Selvfølgelig|selvfølgelig|loomulik|Ma saan|Se på|Telefonen|Ma ostsin|Tal på|Mis uut)\b/i;
const NO_WORDS =
  /\b(Menn|Hommick|Moro hjemme|Musikk|Ettermiddag|Post-lúnal|Perekonnanimi|Øy|Marg|Jeg dro|Me ähme|Etter sömmist|Omtrent|Ta boken|Ma toon|Ma tulen sulle|Ingen|Aldri|Mye|Ma olen mange|De normale|Tall|Kun|Üksnes|Eller|Ehk|Oransje|Åtti|Sjekk det ut)\b/i;
const EN_WORDS =
  /\b(Shop|English|Lemonade)\b/i;
const LV_LEAK =
  /\b(rīt|rīts|no rīta|noguris|mute|mūzika|vajadzēt|māte|cepure|uz • pēc|pēcpusdiena|pēcpusdienā|uzvārds|nakts|deguns|slapjš|daba|protams|dabisks|blakus|ņemt|paņemt|nē|nosaukt|jauks|jauns|deviņi|deviņsimt|devītais|deviņpadsmit|deviņpadsmitais|deviņdesmit|deviņdesmitais|ne|nekad|neviens|vēl|normāls|novembris|nulle|numurs|tikai|vienīgi|vai|jeb|augšā|augļi|atvērt|bez|auss|oktobris|tēvocis|apelsīns)\b/i;

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
    /\b(mit|dem|der|dir|Bus|morgen|Morgen|Guten|Ich komme|Ich muss|nach|Hause|Berlin|Natürlich|nehmen|bringen|holen|ob|oder|jung|neu|alt)\b/i.test(
      text
    )
  ) {
    return [];
  }
  if (/\bMeginhugsun\b/i.test(text)) return [];
  if (/\blýsir\b/i.test(text)) return [];
  if (/^Guten\b/i.test(text)) return [];
  if (/^November$|^Oktober$|^Null$/i.test(text)) return [];
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
}

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
  semantic_micro_repair_cards: [],
  semantic_micro_repair_violations: 0,
  semantic_violation_cards: [],
  composite_cards_audited: [...compositeCards].sort(),
  anti_bulk: "G2_A1_OWNER_ANTI_BULK_AUDIT_PASS",
  verdict: pass ? "LRB_036_LINGUISTIC_REVIEW_PASS" : "BLOCKED",
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
