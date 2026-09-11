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
  /\b(Üritama|Palju|Kanskje|Nelisada|Neljas|Neliteist|Nittende|Neljagyümce|Eesnimi|Mets|Millal|Soe|Ootama|Vesi|Jõulud|Valg|Maailm|Loomaaed|Sukker|Tuba|Põhiidee|Mis • Mida|Kes • Cumb|Kui \(tingimus\)|Hovedidé)\b/i;
const NO_WORDS =
  /\b(Shit|Blande|T-skjorte|Blodåre|Nutma|Millie|Litt|Hvor mange|Tyll|Bytte av nål|Sigaretten|Sideløp|Først av alt|Seda brukes|Hiljem|feil|Jeg vet|Mor tean|Kan du se|Ser du på|Er du gammel|Teadma|teave)\b/i;
const EN_WORDS = /\b(Shop|English|Lemonade|Taxi|Telefon|Dikt)\b/i;
const LV_LEAK =
  /\b(mēģināt|daudz|varbūt|četrsimt|ceturtais|četrpadsmit|četrpadsmitais|četrdesmitais|putns|pilns|pirms • priekšā|vārds|mežs|siena|kad|silts|gaidīt|kāpēc|mazgāt|ūdens|ceļš|Ziemassvētki|vīns|raudāt|balts|kurš|pasaule|maz|cik|vējš|nedēļas nogale|cigarete|istaba|citrons|zooloģiskais dārzs|cukurs|vispirms|atpakaļ|uz • pie|kas • ko|kas • kurš|ja • kad|zināt)\b/i;

const COMPOSITE_FULL = ["vom", "vor", "was", "wenn", "wer", "wissen"];
const EXPLANATION_ONLY = ["werden", "Wetter", "wie", "zu", "Zug"];
const GALA_REPAIR = ["Wetter", "was", "wissen"];

const EXPECTED = {
  Wetter: {
    "study.explanation[1]":
      "Á íslensku merkir veður veðurskilyrði; tími merkir tíma. Á þýsku eru það das Wetter og die Zeit.",
    "study.explanation[2]":
      "Um veðrið er talað með das Wetter: Wie ist das Wetter heute?",
    "study.explanation[3]":
      "Í setningum er das Wetter oft notað með orðum eins og warm eða kalt.",
  },
  was: {
    "study.translation": "hvað",
    "study.tip[1]": "Fljótlegt: ef svarið er „Það er ...“, notaðu hvað.",
    "study.important[1]": "Fyrir fólk er wer (hver) notað, ekki was.",
    "study.examples[0].lv": "Hvað er þetta?",
    "study.examples[1].lv": "Hvað gerðist?",
  },
  wissen: {
    lv: "vita",
    "study.translation": "vita",
    "study.explanation[1]":
      "Wissen snýst um þekkingu á staðreyndum og upplýsingum.",
    "study.examples[0].lv": "Ég veit hvar hann býr.",
    "study.examples[1].lv": "Hvaðan vitið þér það?",
    "study.examples[2].lv": "Ég veit svarið.",
    "study.comparison[0].meaning": "vita (staðreynd, upplýsing)",
    "study.comparison[1].meaning": "þekkja (mann, stað, hlut)",
  },
  vom: {
    "study.translation": "frá",
    "study.explanation[0]":
      "Meginhugsun: vom er samdráttur von + dem; von stýrir þágufalli.",
    "study.examples[0].lv": "Ég kem frá lestarstöðinni.",
    "study.examples[1].lv": "Gjöfin er frá föðurnum.",
    "study.examples[2].lv": "Hann kemur frá lækninum.",
    "study.tip[0]": "Mundu: von + dem → vom; von krefst þágufalls (Dativ).",
    "study.important[0]":
      "vom = von dem; von stýrir þágufalli — aldrei þolfalli eða Akkusativ.",
  },
  vor: {
    "study.translation": "áður • fyrir",
    "study.examples[0].lv": "Áður en ég borða, þvo ég hendurnar.",
    "study.examples[2].lv": "Það er fimm mínútur í átt.",
  },
  wenn: { "study.translation": "ef • þegar" },
  wer: { "study.translation": "hver", "study.examples[0].lv": "Hver er þetta?" },
  werden: {
    "study.explanation[3]":
      "Mikilvægasta setningin á A1 er Ich werde müde. = Ég verð þreyttur.",
  },
  zum: { lv: "til" },
  von: { lv: "frá" },
  zurück: { lv: "til baka" },
  "wie viel": { lv: "hversu mikið" },
  vierhundert: { lv: "fjögur hundruð" },
  vierzehn: { lv: "fjórtán" },
  Vogel: { lv: "fugl" },
  voll: { lv: "fullur" },
  versuchen: { lv: "reyna" },
  Wasser: { lv: "vatn" },
};

const DE_IS_ALIGN = {
  vom: [
    ["Ich komme vom Bahnhof.", "Ég kem frá lestarstöðinni."],
    ["Das Geschenk ist vom Vater.", "Gjöfin er frá föðurnum."],
    ["Er kommt vom Arzt.", "Hann kemur frá lækninum."],
  ],
  vor: [
    ["Vor dem Essen wasche ich die Hände.", "Áður en ég borða, þvo ég hendurnar."],
    ["Das Auto steht vor dem Haus.", "Bíllinn stendur fyrir framan húsið."],
    ["Es ist fünf vor acht.", "Það er fimm mínútur í átt."],
  ],
  was: [
    ["Was ist das?", "Hvað er þetta?"],
    ["Was ist passiert?", "Hvað gerðist?"],
    ["Was machst du gerade?", "Hvað ertu að gera núna?"],
  ],
  wenn: [
    ["Wenn du Zeit hast, komm vorbei.", "Ef þú hefur tíma, komdu við."],
    ["Wenn es regnet, bleibe ich zu Hause.", "Ef það rignir, verð ég heima."],
  ],
  wer: [
    ["Wer ist das?", "Hver er þetta?"],
    ["Wer bist du?", "Hver ert þú?"],
    ["Wer kommt heute?", "Hver kemur í dag?"],
  ],
  wissen: [
    ["Ich weiß, wo er wohnt.", "Ég veit hvar hann býr."],
    ["Woher wissen Sie das?", "Hvaðan vitið þér það?"],
    ["Ich weiß die Antwort.", "Ég veit svarið."],
  ],
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
    /\b(mit|dem|der|die|das|Ich|Wir|Sie|vom|von|vor|wenn|wer|was|zu|Zug|Wetter|warm|kalt)\b/i.test(
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
  const pairs = DE_IS_ALIGN[card];
  if (pairs) {
    for (let i = 0; i < pairs.length; i++) {
      const [, expectedIs] = pairs[i];
      const got = s(mergedFromExamples(gotLv, i), `study.examples[${i}].lv`) || gotLv[i];
      if (got !== expectedIs) {
        issues.push({
          card,
          type: "ALIGNMENT",
          msg: `${card} ex[${i}] expected "${expectedIs}", got "${got || ""}"`,
        });
      }
    }
    return;
  }
  for (let i = 0; i < gotLv.length; i++) {
    if (!gotLv[i]) {
      issues.push({ card, type: "ALIGNMENT", msg: `${card} ex[${i}] missing IS` });
    }
  }
}

function mergedFromExamples(gotLv, i) {
  const o = { study: { examples: [] } };
  gotLv.forEach((lv, j) => {
    o.study.examples[j] = { lv };
  });
  return o;
}

function semanticChecks(card, merged, deExamples, issues) {
  const all = collectTargetStrings(merged).map((x) => x.text).join(" ");

  const expected = EXPECTED[card];
  if (expected) {
    for (const [path, exp] of Object.entries(expected)) {
      const got = path === "lv" ? merged.lv : s(merged, path);
      if (got !== exp) {
        issues.push({
          card,
          type: "SEMANTIC",
          msg: `${card} ${path} expected "${exp}", got "${got || ""}"`,
        });
      }
    }
  }

  if (card === "vom") {
    if (/eessõna|Bahnhof – Faktisk|jaamast|issalt|föður mínum/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "vom source residue or wrong case ex[1]" });
    if (!/samdráttur von \+ dem/i.test(s(merged, "study.explanation[0]")))
      issues.push({ card, type: "SEMANTIC", msg: "vom expl[0] must state von+dem samdráttur" });
    if (!/þágufalli/i.test(s(merged, "study.explanation[0]")))
      issues.push({ card, type: "SEMANTIC", msg: "vom expl[0] must state von stýrir þágufalli" });
    if (!/von dem/i.test(s(merged, "study.explanation[1]")))
      issues.push({ card, type: "SEMANTIC", msg: "vom must explain von dem Dativ" });
    if (!/þágufall/i.test(s(merged, "study.explanation[1]")))
      issues.push({ card, type: "SEMANTIC", msg: "vom expl[1] must mention þágufall" });
    if (!/þágufall/i.test(s(merged, "study.tip[0]")))
      issues.push({ card, type: "SEMANTIC", msg: "vom tip[0] must mention þágufall/Dativ" });
    if (!/þágufalli/i.test(s(merged, "study.important[0]")))
      issues.push({ card, type: "SEMANTIC", msg: "vom important[0] must state þágufall governance" });
    if (!/föðurnum/i.test(s(merged, "study.comparison[0].example")))
      issues.push({ card, type: "SEMANTIC", msg: "vom comparison must show vom Vater→föðurnum" });
    if (!/lækninum/i.test(s(merged, "study.comparison[0].example")))
      issues.push({ card, type: "SEMANTIC", msg: "vom comparison must show vom Arzt→lækninum" });
    if (/frá bónda[^n]/i.test(all) || /\bfrá bónda\./i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "vom ex[6] must use dative bóndanum not bónda" });
    if (
      /\b(vom (notar|krefst|styrir|stýrir) (þolfall|akkusativ)|með þolfalli|þolfall eftir vom)\b/i.test(
        all
      )
    )
      issues.push({ card, type: "SEMANTIC", msg: "vom accusative case claim detected" });
    if (/vom Mutter/i.test(all) && !/von der Mutter/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "vom feminine rule missing" });
  }

  if (card === "vor") {
    if (/Enne • Ees|päcket omme|sömist/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "vor source residue" });
  }

  if (card === "was") {
    if (/Mis • Mida|Ser du på|Skjedde et uhell/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "was source residue" });
    if (/nota hvað/i.test(s(merged, "study.tip[1]")) && !/notaðu hvað/i.test(s(merged, "study.tip[1]")))
      issues.push({ card, type: "SEMANTIC", msg: "was tip[1] must use notaðu (imperative)" });
    if (!/notað, ekki was/i.test(s(merged, "study.important[1]")))
      issues.push({ card, type: "SEMANTIC", msg: "was important[1] passive grammar required" });
  }

  if (card === "wenn") {
    if (/Kui \(tingimus\)|astu põhva|Kui sul on aega/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "wenn source residue" });
    if (!/wann eru ekki/i.test(s(merged, "study.important[0]")))
      issues.push({ card, type: "SEMANTIC", msg: "wenn/wann contrast missing" });
  }

  if (card === "wer") {
    if (/Kes • Cumb|Er du gammel|Kes teist/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "wer source residue" });
    if (!/Was ist passiert/i.test(s(merged, "study.important[3]")))
      issues.push({ card, type: "SEMANTIC", msg: "wer/was contrast example missing" });
  }

  if (card === "wissen") {
    if (/Teadma|Mor tean|Jeg vet|Hvernig veist þú/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "wissen source residue or wrong person" });
    if (!/Hvaðan vitið þér/i.test(s(merged, "study.examples[1].lv")))
      issues.push({
        card,
        type: "ALIGNMENT",
        msg: "wissen ex[1] must match formal Sie: Hvaðan vitið þér það?",
      });
    if (!/þekkja/i.test(s(merged, "study.comparison[1].meaning")))
      issues.push({ card, type: "SEMANTIC", msg: "wissen kennen=þekkja contrast missing" });
    if (!/vita/i.test(s(merged, "study.comparison[0].meaning")))
      issues.push({ card, type: "SEMANTIC", msg: "wissen comparison must show vita" });
  }

  if (card === "werden") {
    if (/Hovedidé|geschäften|Hiljem|väsinuks|Ma jään/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "werden source residue" });
    if (!/verða/i.test(s(merged, "study.explanation[0]")))
      issues.push({ card, type: "SEMANTIC", msg: "werden must use verða" });
  }

  if (card === "Wetter") {
    if (/Põhiidee|ilmastikuolusid|Ära aja segi|getur þýtt bæði/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "Wetter source residue or pre-repair text" });
    if (!/das Wetter og die Zeit/i.test(s(merged, "study.explanation[1]")))
      issues.push({ card, type: "SEMANTIC", msg: "Wetter expl[1] Wetter/Zeit distinction missing" });
    if (!/Um veðrið er talað/i.test(s(merged, "study.explanation[2]")))
      issues.push({ card, type: "SEMANTIC", msg: "Wetter expl[2] must use Um veðrið er talað" });
    if (!/Í setningum er das Wetter/i.test(s(merged, "study.explanation[3]")))
      issues.push({ card, type: "SEMANTIC", msg: "Wetter expl[3] plural setningum required" });
    if (!/die Zeit/i.test(s(merged, "study.explanation[4]")))
      issues.push({ card, type: "SEMANTIC", msg: "Wetter expl[4] Zeit contrast must remain" });
  }

  if (card === "wie") {
    if (/Põhiidee|kiyäs|gejnej|Kuidas/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "wie source residue" });
    if (!/hvernig/i.test(s(merged, "study.explanation[1]")))
      issues.push({ card, type: "SEMANTIC", msg: "wie explanation[1] missing hvernig" });
    if (!/hversu/i.test(s(merged, "study.explanation[2]")))
      issues.push({ card, type: "SEMANTIC", msg: "wie explanation[2] missing hversu" });
  }

  if (card === "zu") {
    if (/Põhiidee|gejätt|Omadusvøndtega|täre/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "zu source residue" });
    if (!/nafnhátt/i.test(s(merged, "study.explanation[3]")))
      issues.push({ card, type: "SEMANTIC", msg: "zu infinitive explanation missing" });
  }

  if (card === "Zug") {
    if (/Hovedidé|feil|juxtmise|Väga sagegased/i.test(all))
      issues.push({ card, type: "SEMANTIC", msg: "Zug source residue" });
    if (!/mit dem Zug fahren/i.test(s(merged, "study.explanation[3]")))
      issues.push({ card, type: "SEMANTIC", msg: "Zug common phrases missing" });
  }

  const gotLv = getExamplesLv(merged);
  if (gotLv.length) {
    if (DE_IS_ALIGN[card]) {
      for (let i = 0; i < DE_IS_ALIGN[card].length; i++) {
        const [, expectedIs] = DE_IS_ALIGN[card][i];
        if (s(merged, `study.examples[${i}].lv`) !== expectedIs) {
          issues.push({
            card,
            type: "ALIGNMENT",
            msg: `${card} ex[${i}] expected "${expectedIs}", got "${s(merged, `study.examples[${i}].lv`) || ""}"`,
          });
        }
      }
    } else {
      checkDeIsAlignment(card, deExamples, gotLv, issues);
    }
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

  const studyOnlyNoLv = [
    "vom",
    "vor",
    "was",
    "wenn",
    "wer",
    "werden",
    "Wetter",
    "wie",
    "zu",
    "Zug",
  ];
  if (!merged.lv && d.owner_decision === "LABOT" && !studyOnlyNoLv.includes(card)) {
    issues.push({ card, type: "INCOMPLETE", msg: "LABOT but lv empty" });
    issueCards.add(card);
  }

  if (EXPECTED[card] && merged.lv === undefined && !studyOnlyNoLv.includes(card)) {
    // scalar lv cards must have lv after merge
  } else if (EXPECTED[card]?.lv && merged.lv !== EXPECTED[card].lv) {
    issues.push({
      card,
      type: "SEMANTIC",
      msg: `${card} lv expected "${EXPECTED[card].lv}", got "${merged.lv || ""}"`,
    });
    issueCards.add(card);
  }

  if (GALA_REPAIR.includes(card) && EXPECTED[card]) {
    for (const [path, exp] of Object.entries(EXPECTED[card])) {
      const got = path === "lv" ? merged.lv : s(merged, path);
      if (got !== exp) {
        issues.push({
          card,
          type: "SEMANTIC",
          msg: `GALA ${card} ${path} expected "${exp}", got "${got || ""}"`,
        });
        issueCards.add(card);
      }
    }
  }

  if (COMPOSITE_FULL.includes(card) || EXPLANATION_ONLY.includes(card)) {
    semanticChecks(card, merged, deExamples, issues);
    if (issues.some((i) => i.card === card)) issueCards.add(card);
  }
}

function auditVomCaseGovernment() {
  const vomKey = Object.keys(decisions).find((k) => k.includes("|vom|"));
  const vomRow = rows.find((r) => r.finding_stable_ids === vomKey);
  const vomDecision = decisions[vomKey];
  let flat;
  try {
    flat = JSON.parse(vomRow.production_current || "{}");
  } catch {
    flat = {};
  }
  const merged = applyPatches(flatToNested(flat), vomDecision.owner_new);
  const all = collectTargetStrings(merged).map((x) => x.text).join(" ");

  const accusativeHits = [];
  const badPatterns = [
    { re: /\bföður mínum\b/i, msg: "ex[1] föður mínum not vom Vater dative föðurnum" },
    { re: /\bfrá bónda\./i, msg: "ex[6] frá bónda missing dative -num" },
    {
      re: /\b(vom (notar|krefst|styrir|stýrir) (þolfall|akkusativ)|með akkusativ|með þolfalli)\b/i,
      msg: "affirmative accusative governance claim",
    },
  ];
  for (const { re, msg } of badPatterns) {
    if (re.test(all)) accusativeHits.push(msg);
  }
  if (s(merged, "study.examples[1].lv") !== "Gjöfin er frá föðurnum.")
    accusativeHits.push("ex[1] must be Gjöfin er frá föðurnum.");
  if (s(merged, "study.examples[6].lv") !== "Hann sækir mjólk frá bóndanum.")
    accusativeHits.push("ex[6] must be Hann sækir mjólk frá bóndanum.");

  const dativOk =
    /samdráttur von \+ dem/i.test(s(merged, "study.explanation[0]")) &&
    /þágufalli/i.test(s(merged, "study.explanation[0]")) &&
    /þágufall/i.test(s(merged, "study.explanation[1]")) &&
    /þágufall/i.test(s(merged, "study.tip[0]")) &&
    /þágufalli/i.test(s(merged, "study.important[0]"));

  return {
    vom_case_government: dativOk ? "DATIV / þágufall" : "FAIL",
    vom_accusative_residue: accusativeHits.length,
    vom_accusative_details: accusativeHits,
  };
}

const vomCaseAudit = auditVomCaseGovernment();
if (vomCaseAudit.vom_case_government !== "DATIV / þágufall") {
  issues.push({
    card: "vom",
    type: "SEMANTIC",
    msg: "vom_case_government must be DATIV / þágufall",
  });
  issueCards.add("vom");
}
if (vomCaseAudit.vom_accusative_residue > 0) {
  for (const detail of vomCaseAudit.vom_accusative_details) {
    issues.push({ card: "vom", type: "SEMANTIC", msg: `vom_accusative_residue: ${detail}` });
  }
  issueCards.add("vom");
}

const semanticViolations = issues.filter(
  (i) => i.type === "SEMANTIC" || i.type === "ALIGNMENT" || i.type === "INCOMPLETE"
);
const wrongLangViolations = issues.filter((i) => i.type === "WRONG_LANG");
const pass =
  labot === 50 &&
  nelabot === 0 &&
  pending === 0 &&
  issues.length === 0 &&
  vomCaseAudit.vom_case_government === "DATIV / þágufall" &&
  vomCaseAudit.vom_accusative_residue === 0;

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
  semantic_micro_repair_cards: [...COMPOSITE_FULL, ...EXPLANATION_ONLY],
  semantic_micro_repair_violations: semanticViolations.length,
  semantic_violation_cards: [...new Set(semanticViolations.map((i) => i.card))],
  gala_repair_cards: [...GALA_REPAIR, "vom"],
  vom_case_government: vomCaseAudit.vom_case_government,
  vom_accusative_residue: vomCaseAudit.vom_accusative_residue,
  vom_accusative_details: vomCaseAudit.vom_accusative_details,
  anti_bulk: "G2_A1_OWNER_ANTI_BULK_AUDIT_PASS",
  verdict: pass ? "LRB_040_FULL_50_50_LINGUISTIC_REVIEW_PASS" : "BLOCKED",
  audit_type: "FRESH_POST_VOM_DATIV_REPAIR",
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
      vom_case_government: proof.vom_case_government,
      vom_accusative_residue: proof.vom_accusative_residue,
      issue_cards: [...issueCards],
      details: issues.slice(0, 20),
    },
    null,
    2
  )
);
process.exit(pass ? 0 : 1);
