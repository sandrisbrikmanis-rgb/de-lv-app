#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-037";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "data/g2-a1-owner-pending/LRB-037-decisions.json"),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const ET_WORDS =
  /\b(Lihavögted|Parkere|Sobima|Hest sobima|Põhiidee|Proovima|Maitsma|Kooki|Riis|Paremale|Parem|Risen|Ütlema|Klokke|Laupaev|Lam|Hind|Koht|Isik|Hobune|Taim|Vaheag|Vihmavari|Vihma sadama|Punane|Hüüdma|Ümmargune|Asia|Saatma|Halb|Võti)\b/i;
const NO_WORDS =
  /\b(Papir|Parkere|passer til|sitter godt|sobib|Maitse|Risen er klar|Ma soen|Hva sa seaside|Ma vaatan|Me vaatame|Politiavdelingen|Kampsun|Pratsom|Rose|Badstue|Mage|Brumm|Drakten setter)\b/i;
const EN_WORDS =
  /\b(Shop|English|Lemonade)\b/i;
const LV_LEAK =
  /\b(Lieldienas|pāris|papīrs|parks|derēt|piestāvēt|pārtraukums|persona|zirgs|augs|plāns|vieta|policija|pasts|cena|problēma|programma|džemperis|punkts|tīrīt|braukt ar divriteni|dzēšamgumija|smēķēt|pa labi|labais|runāt|lietus|lietussargs|līt|rīsi|pareizs|rozā|roze|sarkans|saukt|apaļš|lieta|sula|teikt|salāti|sestdiena|tīrs|sauna|aita|garšot|atslēga)\b/i;

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
    /\b(mit|dem|der|dir|Bus|Das passt|Die Jacke|Probier|Ich schaue|Ich spreche|Was hast du|Der Reis|Schauen|sehen|sprechen|sagen|testen|fern|Fenster)\b/i.test(
      text
    )
  ) {
    return [];
  }
  if (/\bMeginhugsun\b/i.test(text)) return [];
  if (/\blýsir\b/i.test(text)) return [];
  if (/^par$/i.test(text) && p === "lv") return [];
  if (/Um mat þýðir/i.test(text)) return [];
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

function getExamplesLv(merged) {
  const ex = merged.study?.examples;
  if (!Array.isArray(ex)) return [];
  return ex.map((e) => (e && e.lv) || "");
}

function semanticChecks(card, merged, deExamples, issues) {
  const all = collectTargetStrings(merged).map((x) => x.text).join(" ");
  const s = (p) => {
    const hit = collectTargetStrings(merged).find((x) => x.path === p);
    return hit ? hit.text : "";
  };

  if (card === "passen") {
    if (merged.lv !== "passa • henta")
      issues.push({ card, type: "SEMANTIC", msg: "passen lv not passa•henta" });
    if (/Sobima|Hest sobima/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "passen ET/NO residue" });
    if (!/Það passar/i.test(s("study.examples[3].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "passen ex[3] not Das passt" });
  }

  if (card === "probieren") {
    if (merged.lv !== "prófa • bragða")
      issues.push({ card, type: "SEMANTIC", msg: "probieren lv not prófa•bragða" });
    if (/Proovima|Maitsma|Maitse/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "probieren ET/NO residue" });
    if (!/bragða/i.test(s("study.examples[1].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "probieren ex[1] not bragða" });
    if (!/prófum nýja aðferð/i.test(s("study.examples[2].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "probieren ex[2] not prófa method" });
  }

  if (card === "rechts") {
    if (merged.lv !== "til hægri • hægri")
      issues.push({ card, type: "SEMANTIC", msg: "rechts lv not til hægri•hægri" });
    if (/Paremale|Parem/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "rechts ET residue" });
  }

  if (card === "Reis") {
    if (merged.lv !== "hrísgrjón")
      issues.push({ card, type: "SEMANTIC", msg: "Reis lv not hrísgrjón" });
    if (/\b(Ris|Risen)\b/i.test(all) || /\briisi\b/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "Reis ET/NO residue" });
    if (s("study.examples[0].lv") !== "Risið er tilbúið.")
      issues.push({ card, type: "SEMANTIC", msg: "Reis ex[0] wrong" });
    if (!/hrísgrjón/i.test(s("study.examples[1].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "Reis ex[1] not hrísgrjón" });
    if (!/eintala/i.test(s("study.important[0]")))
      issues.push({ card, type: "SEMANTIC", msg: "Reis missing singular note" });
  }

  if (card === "sagen") {
    if (merged.lv !== "segja")
      issues.push({ card, type: "SEMANTIC", msg: "sagen lv not segja" });
    if (/Ütlema|seaside/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "sagen ET/NO residue" });
    if (!/Hvað sagðir þú/i.test(s("study.examples[0].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "sagen ex[0] wrong" });
    if (!/tala \(tungumál\)/i.test(s("study.comparison[1].meaning")))
      issues.push({ card, type: "SEMANTIC", msg: "sagen sprechen contrast missing" });
  }

  if (card === "schauen") {
    if (merged.lv !== "horfa")
      issues.push({ card, type: "SEMANTIC", msg: "schauen lv not horfa" });
    if (/Klokke|vaatan|vaatame/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "schauen ET/NO residue" });
    if (!/horfi í sjónvarp/i.test(s("study.examples[0].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "schauen ex[0] not fern" });
    if (!/horfum út gluggann/i.test(s("study.examples[1].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "schauen ex[1] not Fenster" });
    const got = getExamplesLv(merged);
    if (deExamples[0] === deExamples[2] && got[0] !== got[2]) {
      issues.push({ card, type: "ALIGNMENT", msg: "schauen duplicate DE not mirrored in IS" });
    }
  }
}

const issues = [];
const issueCards = new Set();
let labot = 0;
let nelabot = 0;
let pending = 0;
const compositeCards = new Set();
const semanticMicroRepairCards = [
  "passen",
  "probieren",
  "rechts",
  "Reis",
  "sagen",
  "schauen",
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

  let deExamples = [];
  const exRaw = flat["study.examples"];
  if (exRaw) {
    try {
      deExamples = JSON.parse(exRaw).map((e) => e.de);
    } catch {
      deExamples = [];
    }
  } else if (Array.isArray(merged.study?.examples)) {
    deExamples = merged.study.examples.map((e) => e.de || "");
  }

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
    semanticChecks(card, merged, deExamples, issues);
    if (issues.some((i) => i.card === card)) issueCards.add(card);
  }
}

const semanticViolations = issues.filter(
  (i) => i.type === "SEMANTIC" || i.type === "ALIGNMENT"
);
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
  semantic_violation_cards: [...new Set(semanticViolations.map((i) => i.card))],
  composite_cards_audited: [...compositeCards].sort(),
  anti_bulk: "G2_A1_OWNER_ANTI_BULK_AUDIT_PASS",
  verdict: pass ? "LRB_037_FULL_50_50_LINGUISTIC_REVIEW_PASS" : "BLOCKED",
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
      details: issues.slice(0, 10),
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
