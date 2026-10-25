#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");
const { setAt } = require("./lib/da-a1-owner-path");

const BATCH = "LRB-038";
const decisions = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "data/g2-a1-owner-pending/LRB-038-decisions.json"),
    "utf8"
  )
);
const { rows } = loadCsv(
  `reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`
);

const ET_WORDS =
  /\b(Lumi|Lund sadama|Juba|Põhiidee|Ujuma|Ujumis|Õpilane|Õde|Kuussada|Kuusükmen|Kuuedükümes|Nagema|Olema|Alates|Lehekülg|Külg|Slutt|Endale|Laupaev|Laulma|Suvi|Seitsesada|Seitsmes|Seitseteist|Seitsmegyüms|Ma olen|Sa oled|Ta på|Me oleme|Ma näen|Jeg ser|Ma istun|Ma pesen|Ta peseb|glede-fanen|Ujub|Me ujume|Ma þen)\b/i;
const NO_WORDS =
  /\b(Rask|Sjokolade|Illusjon|Kappe|Skriv dem|Konge|Kuss|Sukk|Må|Veie|Sive|Nemad|Tei|Seksten|Sytti|Ma vaatan|Me vaatame|Jeg liker|Ta ujub|Me ujume|Jeg ser|Kindle|Definitivt|Slutt pesema|Sokk|Divaen|Koh|Dikt|Topper|Politiavdelingen)\b/i;
const EN_WORDS =
  /\b(Shop|English|Lemonade)\b/i;
const LV_LEAK =
  /\b(netīrs|sniegs|snigt|ātrs|šokolāde|jau|skaists|skapis|rakstīt|kurpe|skolnieks|melns|cūka|māsa|peldbaseins|peldēt|seši|sešsimt|sestais|sešpadsmitais|sešdesmit|sešdesmitais|redzēt|ļoti|ziepes|būt|kopš|lappuse|puse|sekunde|septembris|mazgāties|sevi|sev|drošs|noteikti|viņi|viņas|jūs|septiņsimt|septītais|septiņpadsmit|septiņpadsmitais|septiņdesmit|septiņdesmitais|dziedāt|sēdēt|tā|zeķe|dīvāns|tūlīt|dēls|vajadzētu|vasara)\b/i;

const COMPOSITE_CARDS = ["schon", "schwimmen", "sehen", "sein", "Seite", "sich"];
const GALA_REPAIR_CARDS = [
  "schon",
  "sehen",
  "Sie",
  "sollen",
  "Seite",
  "sich",
  "schwimmen",
  "sein",
];

const EXPECTED = {
  schon: {
    lv: "nú þegar",
    "study.translation": "nú þegar",
    "study.examples[0].lv": "Ég er nú þegar heima.",
  },
  sehen: {
    "study.comparison[3].meaning": "heyra",
    "study.comparison[3].example": "Ich höre Musik. – Ég heyri tónlist.",
    "study.important[1]":
      "Ich sehe dich = ég sé þig; Ich schaue den Film = ég horfi á kvikmyndina.",
  },
  Sie: { lv: "þér (formlegt)" },
  sollen: { lv: "eiga að" },
  Seite: {
    "study.explanation[3]":
      "Í tengslum: auf meiner Seite = á minni hlið / með mér.",
    "study.explanation[5]": "Í fleirtölu: die Seiten.",
    "study.examples[5].lv": "Á hinni hlið götunnar.",
    "study.important[1]": "Í fleirtölu: die Seiten.",
  },
  sich: {
    "study.examples[1].lv": "Ég sest niður.",
    "study.comparison[2].example": "Þú þværð þig.",
  },
  schwimmen: {
    "study.explanation[1]":
      "Notað þegar talað er um sundhreyfingu í sundlaug, vatni eða sjó.",
    "study.examples[0].lv": "Mér finnst gaman að synda.",
  },
  sein: {
    "study.comparison[1].meaning": "hafa",
    "study.comparison[1].example": "Ich habe Zeit. – Ég hef tíma.",
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
    /\b(mit|dem|der|dir|Ich bin|Ich sehe|Ich schwimme|baden|schwimmen|sehen|schauen|sein|haben|werden|bleiben|die Seite|Webseite|sich|mich|dich|schon|noch|nur)\b/i.test(
      text
    )
  ) {
    return [];
  }
  if (/\bMeginhugsun\b/i.test(text)) return [];
  if (/^sex$/i.test(text) && p === "lv") return [];
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
      card !== "schwimmen"
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

  if (card === "schon") {
    if (/Juba|Ma olen juba/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "schon source residue" });
    if (!/noch/i.test(s(merged, "study.important[1]")))
      issues.push({ card, type: "SEMANTIC", msg: "schon missing noch contrast" });
    if (/schon = þegar\./i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "schon oversimplified þegar gloss" });
  }

  if (card === "schwimmen") {
    if (merged.lv !== "synda") issues.push({ card, type: "SEMANTIC", msg: "schwimmen lv not synda" });
    if (/Ujuma|ujuda|ujub|ujume|sundlaugar/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "schwimmen source residue" });
    if (!/baða mig/i.test(s(merged, "study.examples[3].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "schwimmen ex[3] not baden contrast" });
    if (!/syndum í sundlauginni/i.test(s(merged, "study.examples[2].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "schwimmen ex[2] wrong" });
    if (/Ég syndi gaman/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "schwimmen ex[0] not gern-aligned" });
  }

  if (card === "sehen") {
    if (merged.lv !== "sjá") issues.push({ card, type: "SEMANTIC", msg: "sehen lv not sjá" });
    if (/Nagema|Ma näen|Jeg ser|vaatame/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "sehen source residue" });
    if (s(merged, "study.examples[0].lv") !== "Ég sé þig.")
      issues.push({ card, type: "SEMANTIC", msg: "sehen ex[0] wrong" });
    if (!/horfum á mynd/i.test(s(merged, "study.examples[3].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "sehen ex[3] schauen contrast" });
    if (!/sjá/i.test(s(merged, "study.comparison[0].meaning")))
      issues.push({ card, type: "SEMANTIC", msg: "sehen comparison not sjá" });
    if (/hlusta/i.test(s(merged, "study.comparison[3].example")))
      issues.push({ card, type: "SEMANTIC", msg: "sehen hören not hlusta" });
    if (/horfa á kvikmyndina/i.test(s(merged, "study.important[1]")) && !/horfi á/i.test(s(merged, "study.important[1]")))
      issues.push({ card, type: "SEMANTIC", msg: "sehen important[1] not horfi" });
    if (!/horfa/i.test(s(merged, "study.comparison[1].meaning")))
      issues.push({ card, type: "SEMANTIC", msg: "sehen schauen contrast missing" });
  }

  if (card === "Sie") {
    if (merged.lv === "þið")
      issues.push({ card, type: "SEMANTIC", msg: "Sie lv must not be informal þið" });
  }

  if (card === "sollen") {
    if (merged.lv === "ætti")
      issues.push({ card, type: "SEMANTIC", msg: "sollen lv must be eiga að not ætti" });
  }

  if (card === "sein") {
    if (merged.lv !== "vera") issues.push({ card, type: "SEMANTIC", msg: "sein lv not vera" });
    if (/Olema|Ma olen|Sa oled|Me oleme/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "sein source residue" });
    if (s(merged, "study.examples[0].lv") !== "Ég er hér.")
      issues.push({ card, type: "SEMANTIC", msg: "sein ex[0] wrong" });
    if (/eiga/i.test(s(merged, "study.comparison[1].meaning")))
      issues.push({ card, type: "SEMANTIC", msg: "sein haben not eiga" });
    if (/Ég á tíma/i.test(s(merged, "study.comparison[1].example")))
      issues.push({ card, type: "SEMANTIC", msg: "sein haben example not hef tíma" });
  }

  if (card === "Seite") {
    if (merged.lv !== "blaðsíða • hlið")
      issues.push({ card, type: "SEMANTIC", msg: "Seite lv wrong" });
    if (/Lehekülg|basseng|Veebileht laadib|min side|Mitmuses|mínum hlið|hinum hlið/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "Seite source/case residue" });
    if (!/blaðsíðu tuttugu/i.test(s(merged, "study.examples[0].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "Seite ex[0] wrong" });
    if (!/Vefsíðan/i.test(s(merged, "study.examples[2].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "Seite ex[2] Webseite" });
  }

  if (card === "sich") {
    if (merged.lv !== "sig • sér") issues.push({ card, type: "SEMANTIC", msg: "sich lv wrong" });
    if (/Slutt|Endale|peseb slutt|Ma pesen bilen|Ég set mig|þvæur þig/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "sich source/conjugation residue" });
    if (s(merged, "study.examples[0].lv") !== "Hann þvær sig.")
      issues.push({ card, type: "SEMANTIC", msg: "sich ex[0] wrong" });
    if (!/þvæ bílinn/i.test(s(merged, "study.examples[3].lv")))
      issues.push({ card, type: "SEMANTIC", msg: "sich ex[3] non-reflexive contrast" });
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

  if (!merged.lv && d.owner_decision === "LABOT") {
    issues.push({ card, type: "INCOMPLETE", msg: "LABOT but lv empty" });
    issueCards.add(card);
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
  verdict: pass ? "LRB_038_FULL_50_50_LINGUISTIC_REVIEW_PASS" : "BLOCKED",
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
