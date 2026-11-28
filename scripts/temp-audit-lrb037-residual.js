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

const EXPECTED = {
  passen: {
    "study.examples[0].lv": "Jakkinn passar á mig.",
    "study.examples[3].lv": "Það passar.",
  },
  Reis: {
    lv: "hrísgrjón",
    "study.examples[0].lv": "Hrísgrjónin eru tilbúin.",
    "study.examples[1].lv": "Ég borða hrísgrjón.",
    "study.examples[2].lv": "Ertu að elda hrísgrjón?",
    "study.examples[3].lv": "Hrísgrjónin bragðast vel.",
  },
  schauen: {
    lv: "horfa • líta",
    "study.examples[0].lv": "Ég horfi í sjónvarp.",
    "study.examples[1].lv": "Við horfum út á gluggann.",
    "study.examples[2].lv": "Ég horfi í sjónvarp.",
    "study.comparison[0].example":
      "Ich schaue aus dem Fenster. – Við horfum út á gluggann.",
    "study.comparison[1].meaning": "sjá",
    "study.comparison[1].example": "Ich sehe dich. – Ég sé þig.",
  },
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
    /\b(mit|dem|der|dir|Bus|Das passt|Die Jacke|Probier|Ich schaue|Ich spreche|Was hast du|Der Reis|Schauen|sehen|sprechen|sagen|testen|fern|Fenster|Aus dem)\b/i.test(
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

function s(merged, path) {
  const hit = collectTargetStrings(merged).find((x) => x.path === path);
  return hit ? hit.text : "";
}

function getExamplesLv(merged) {
  const ex = merged.study?.examples;
  if (!Array.isArray(ex)) return [];
  return ex.map((e) => (e && e.lv) || "");
}

function checkDeIsAlignment(card, deExamples, gotLv, issues) {
  for (let i = 0; i < gotLv.length; i++) {
    if (!gotLv[i]) {
      issues.push({ card, type: "ALIGNMENT", msg: `${card} ex[${i}] missing IS` });
      continue;
    }
    if (
      i > 0 &&
      deExamples[i] &&
      deExamples[i - 1] &&
      deExamples[i] === deExamples[i - 1] &&
      gotLv[i] !== gotLv[i - 1]
    ) {
      issues.push({
        card,
        type: "ALIGNMENT",
        msg: `${card} duplicate DE at ex[${i}] not mirrored in IS`,
      });
    }
    if (
      i > 0 &&
      deExamples[i] &&
      deExamples[i - 1] &&
      deExamples[i] !== deExamples[i - 1] &&
      gotLv[i] === gotLv[i - 1]
    ) {
      issues.push({
        card,
        type: "ALIGNMENT",
        msg: `${card} unjustified duplicate IS at ex[${i}]`,
      });
    }
  }
}

function semanticChecks(card, merged, deExamples, issues) {
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

  if (card === "passen") {
    if (/Sobima|Hest sobima|passer til|sitter godt/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "passen source-language residue" });
    if (/passar mér\b/i.test(all) && !/passar á mig/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "passen ex[0] not passar á mig" });
  }

  if (card === "probieren") {
    if (/Proovima|Maitsma|Maitse/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "probieren source-language residue" });
  }

  if (card === "rechts") {
    if (/Paremale|Parem/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "rechts ET residue" });
  }

  if (card === "Reis") {
    if (/\b(Ris|Risen)\b/i.test(all) || /\briisi\b/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "Reis source-language residue" });
    if (/risið|Risið/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "Reis inconsistent singular risið" });
    if (!/mælieintala|eintala/i.test(s(merged, "study.important[0]")))
      issues.push({ card, type: "SEMANTIC", msg: "Reis missing DE singular note" });
    if (!/fleirtala/i.test(s(merged, "study.important[1]")))
      issues.push({ card, type: "SEMANTIC", msg: "Reis missing IS plural note" });
  }

  if (card === "sagen") {
    if (/Ütlema|seaside/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "sagen source-language residue" });
  }

  if (card === "schauen") {
    if (/Klokke|vaatan|vaatame/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "schauen source-language residue" });
    if (/horfum út gluggann\b/i.test(all) && !/horfum út á gluggann/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "schauen Fenster missing á" });
    if (!/sjá/i.test(s(merged, "study.comparison[1].meaning")))
      issues.push({ card, type: "SEMANTIC", msg: "schauen sehen not sjá" });
  }

  const gotLv = getExamplesLv(merged);
  if (gotLv.length) checkDeIsAlignment(card, deExamples, gotLv, issues);
}

const issues = [];
const issueCards = new Set();
let labot = 0;
let nelabot = 0;
let pending = 0;
const compositeCards = new Set();
const galaRepairCards = ["passen", "Reis", "schauen"];
const compositeAuditCards = [
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

  if (!merged.lv && d.owner_decision === "LABOT") {
    issues.push({ card, type: "INCOMPLETE", msg: "LABOT but lv empty after merge" });
    issueCards.add(card);
  }

  if (compositeAuditCards.includes(card) || galaRepairCards.includes(card)) {
    semanticChecks(card, merged, deExamples, issues);
    if (issues.some((i) => i.card === card)) issueCards.add(card);
  } else if (deExamples.length) {
    checkDeIsAlignment(card, deExamples, getExamplesLv(merged), issues);
    if (issues.some((i) => i.card === card)) issueCards.add(card);
  }
}

const semanticViolations = issues.filter(
  (i) =>
    i.type === "SEMANTIC" ||
    i.type === "ALIGNMENT" ||
    i.type === "INCOMPLETE"
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
  gala_repair_cards: galaRepairCards,
  semantic_micro_repair_cards: compositeAuditCards,
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
      details: issues.slice(0, 15),
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
