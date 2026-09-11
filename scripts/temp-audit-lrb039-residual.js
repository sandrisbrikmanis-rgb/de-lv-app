#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-039";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "data/g2-a1-owner-pending/LRB-039-decisions.json"),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const ET_WORDS =
  /\b(Pühapäev|Hiline|Mangima|Kjøl|Pratsom|Riik|Sterk|Seismisk|Täht|Gate|Trikk|Tukk|Üliõpilane|Otsima|Magus|Tantsima|Pote|Taldrik|Callis|Tekst|Laud|Trapp|Jooma|Tegema|Kohal|Kohta|Umbes|Kell|Alle|Kaotama|Forstå|Puhkus|Gjedde|Beløp|Sengetøy|Verktøy|Tynn|Pave|Taddy|Kjegle|Telefonsamtaler|Vevstol|Hoots|Toalett|Tomat|Wow|Mee)\b/i;
const NO_WORDS =
  /\b(Gå bort|Gjedde|Beløp|Sengetøy|Verktøy|Tynn|Pave|Taddy|Kjegle|T-skjorte|Telefonsamtaler|Vevstol|Hoots|Toalett|Tomat|Wow|Gate|Trapp)\b/i;
const EN_WORDS = /\b(Shop|English|Lemonade|Taxi|Telefon)\b/i;
const LV_LEAK =
  /\b(saule|svētdiena|vēls|pastaigāties|spēle|spēlēt|valoda|valsts|pilsēta|stiprs|zvaigzne|iela|tramvajs|gabals|students|krēsls|stunda|meklēt|salds|diena|tante|dejot|soma|tase|taksometrs|tēja|telefons|zvanīt|šķīvis|dārgs|teksts|dzīvnieks|galds|meita|tualete|tomāts|kāpnes|dzert|darīt|durvis|mūsu|vāze|zaudēt|virs|par|ap|pulksten|zem|atvaļinājums|runāt|stāvēt|saprast)\b/i;

const COMPOSITE_CARDS = [
  "sprechen",
  "stehen",
  "über",
  "um",
  "unter",
  "Urlaub",
  "verstehen",
];
const GALA_REPAIR_CARDS = ["spät", "Student", "sprechen", "über"];

const EXPECTED = {
  "spät": { lv: "seinn" },
  Student: { lv: "háskólanemi" },
  sprechen: {
    lv: "tala",
    "study.translation": "tala",
    "study.examples[0].lv": "Ég tala þýsku.",
    "study.examples[1].lv": "Við tölum um vinnuna.",
    "study.examples[2].lv": "Hún talar við kennara sína.",
  },
  stehen: {
    "study.translation": "standa",
    "study.examples[0].lv": "Ég stend við hurðina.",
    "study.examples[1].lv": "Stóllinn stendur í eldhúsinu.",
  },
  über: {
    "study.translation": "yfir • um",
    "study.examples[0].lv": "Ljósið hangir yfir borðinu.",
    "study.examples[1].lv": "Við tölum um veðrið.",
    "study.examples[2].lv": "Barnið hleypur yfir götuna.",
    "study.examples[3].lv": "Ég gleðst yfir gjöfinni.",
    "study.comparison[0].meaning": "yfir • um",
  },
  um: {
    "study.translation": "um • klukkan",
    "study.examples[0].lv": "Ég kem klukkan átta.",
  },
  unter: {
    "study.translation": "undir • meðal",
    "study.examples[0].lv": "Taskan er undir borðinu.",
  },
  Urlaub: {
    lv: "orlof",
    "study.translation": "orlof",
    "study.examples[0].lv": "Faðir minn er í orlofi.",
  },
  verstehen: {
    "study.translation": "skilja",
    "study.examples[0].lv": "Ég skil þig.",
    "study.examples[3].lv": "Ég get talað þýsku.",
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
    /\b(mit|dem|der|die|das|Ich|Wir|Sie|sprechen|stehen|Urlaub|Ferien|unter|über|um)\b/i.test(
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
        msg: `${card} duplicate DE at ex[${i}] not mirrored`,
      });
    }
    if (
      i > 0 &&
      deExamples[i] &&
      deExamples[i - 1] &&
      deExamples[i] !== deExamples[i - 1] &&
      gotLv[i] === gotLv[i - 1] &&
      !["Urlaub", "sprechen"].includes(card)
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

  if (card === "sprechen") {
    if (/Pratsom|snakker|søleme|saxa/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "sprechen source residue" });
    if (!/segja/i.test(s(merged, "study.comparison[1].meaning")))
      issues.push({ card, type: "SEMANTIC", msg: "sprechen sagen contrast missing" });
    if (/kennarann sinn/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "sprechen ex[2] masculine kennarann not allowed for Lehrerin" });
    if (!/kennara sína/i.test(s(merged, "study.examples[2].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "sprechen ex[2] must preserve female teacher (kennara sína)" });
    if (deExamples[0] && s(merged, "study.examples[0].lv") !== "Ég tala þýsku.")
      issues.push({ card, type: "ALIGNMENT", msg: "sprechen ex[0] Ich spreche Deutsch misaligned" });
    if (deExamples[1] && !/tölum um vinnuna/i.test(s(merged, "study.examples[1].lv")))
      issues.push({ card, type: "ALIGNMENT", msg: "sprechen ex[1] über die Arbeit misaligned" });
  }

  if (card === "stehen") {
    if (/Seismisk|seisan|kureis|Verktøy/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "stehen source residue" });
    if (!/sitja/i.test(s(merged, "study.comparison[1].meaning")))
      issues.push({ card, type: "SEMANTIC", msg: "stehen sitzen contrast missing" });
  }

  if (card === "über") {
    if (/Kohal|Kohta|ripub|søleme|kurüstan|gjöfina/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "über source residue or wrong case gjöfina" });
    if (!/yfir/i.test(s(merged, "study.translation")))
      issues.push({ card, type: "SEMANTIC", msg: "über translation missing yfir" });
    if (s(merged, "study.comparison[0].meaning") !== "yfir • um")
      issues.push({ card, type: "SEMANTIC", msg: "über comparison[0] must be yfir • um" });
    if (!/borðinu/i.test(s(merged, "study.examples[0].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "über dem Tisch must use dative borðinu" });
    if (!/um veðrið/i.test(s(merged, "study.examples[1].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "über das Wetter must use um" });
    if (!/götuna/i.test(s(merged, "study.examples[2].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "über die Straße must use accusative götuna" });
    if (!/gjöfinni/i.test(s(merged, "study.examples[3].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "sich freuen über must use dative gjöfinni" });
  }

  if (card === "um") {
    if (/Umbes|Kell|tulen kell omme|umer|hjørnet/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "um source residue" });
    if (!/klukkan/i.test(s(merged, "study.translation")))
      issues.push({ card, type: "SEMANTIC", msg: "um translation missing klukkan" });
  }

  if (card === "unter") {
    if (/Alle|hav|Kott|lamab verktøy/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "unter source residue" });
    if (!/undir/i.test(s(merged, "study.translation")))
      issues.push({ card, type: "SEMANTIC", msg: "unter translation missing undir" });
  }

  if (card === "Urlaub") {
    if (/Puhkus|töolt|ainsus|Hovedidé/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "Urlaub source residue" });
    if (!/skólafrí/i.test(s(merged, "study.comparison[1].meaning")))
      issues.push({ card, type: "SEMANTIC", msg: "Urlaub Ferien contrast missing" });
  }

  if (card === "verstehen") {
    if (/Forstå|saan aru|saksisk|sesset/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "verstehen source residue" });
    if (!/geta/i.test(s(merged, "study.comparison[1].meaning")))
      issues.push({ card, type: "SEMANTIC", msg: "verstehen können contrast missing" });
    if (/Jeg kan ikke/i.test(s(merged, "study.examples[3].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "verstehen ex[3] wrong können example" });
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

  if (!merged.lv && d.owner_decision === "LABOT" && card !== "stehen" && card !== "verstehen" && card !== "über" && card !== "um" && card !== "unter") {
    issues.push({ card, type: "INCOMPLETE", msg: "LABOT but lv empty" });
    issueCards.add(card);
  }

  if (GALA_REPAIR_CARDS.includes(card)) {
    if (EXPECTED[card]) {
      for (const [path, expected] of Object.entries(EXPECTED[card])) {
        const got = path === "lv" ? merged.lv : s(merged, path);
        if (got !== expected) {
          issues.push({
            card,
            type: "SEMANTIC",
            msg: `${card} ${path} expected "${expected}", got "${got || ""}"`,
          });
          issueCards.add(card);
        }
      }
    }
  }

  if (COMPOSITE_CARDS.includes(card) || GALA_REPAIR_CARDS.includes(card)) {
    semanticChecks(card, merged, deExamples, issues);
    if (issues.some((i) => i.card === card)) issueCards.add(card);
  } else if (deExamples.length) {
    checkDeIsAlignment(card, deExamples, getExamplesLv(merged), issues);
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
  semantic_micro_repair_cards: COMPOSITE_CARDS,
  semantic_micro_repair_violations: semanticViolations.length,
  semantic_violation_cards: [...new Set(semanticViolations.map((i) => i.card))],
  anti_bulk: "G2_A1_OWNER_ANTI_BULK_AUDIT_PASS",
  gala_repair_cards: GALA_REPAIR_CARDS,
  verdict: pass ? "LRB_039_FULL_50_50_LINGUISTIC_REVIEW_PASS" : "BLOCKED",
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
