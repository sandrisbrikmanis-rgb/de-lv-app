#!/usr/bin/env node
"use strict";
const fs = require("fs");
const path = require("path");
const { loadCsv } = require("./lib/g2-a1-phase3/batch-001-csv");

const BATCH = "LRB-015";
const outPath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const basePath = path.join(__dirname, `data/g2-a1-owner-pending/${BATCH}-decisions.json`);
const { rows } = loadCsv(`reports/g2-a1-owner/batches-pending/${BATCH}-input.csv`);
const base = JSON.parse(fs.readFileSync(basePath, "utf8"));

const SICH_ID =
  "g2/a1/fi|sich|idx:547|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna";
const SCHWIMMEN_ID =
  "g2/a1/fi|schwimmen|idx:531|lv; study.explanation; study.examples; study.important|WRONG_TARGET_LANGUAGE|gpt-5.6-luna";
const SIE_CAP_ID =
  "g2/a1/fi|Sie|idx:550|lv; study.explanation; study.tip; study.important; study.examples|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna";
const SICHER_ID =
  "g2/a1/fi|sicher|idx:548|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna";
const SITZEN_ID =
  "g2/a1/fi|sitzen|idx:558|lv; study.explanation; study.tip; study.important|TARGET_LANGUAGE_CONTAMINATION|gpt-5.6-luna";
const SPRECHEN_ID =
  "g2/a1/fi|sprechen|idx:5|lv; study.translation; study.explanation; study.examples; study.tip; study.important|TARGET_LANGUAGE_MISMATCH|gpt-5.6-luna";

function patchComposite(id, patches) {
  const prior = JSON.parse(base[id].owner_new);
  return JSON.stringify({ ...prior, ...patches });
}

const PDF_REAUDIT_OVERRIDES = {
  [SICH_ID]: JSON.stringify({
    lv: "Itseään • Itselleen",
    "study.translation": "Itseään • Itselleen",
    "study.explanation[0]":
      "Pääajatus: sich on heijempronomeni — toiminta kohdistuu tekijään itseensä.",
    "study.explanation[1]":
      "Suomeksi käännetään usein itseään (akkusatiivi) tai itselleen (datiivi) kontekstin mukaan.",
    "study.explanation[2]":
      "Joissakin saksan verbeissä sich on pakollinen osa, esimerkiksi sich waschen.",
    "study.explanation[3]": "A1-tasolla: ich wasche mich, du wäschst dich, er wäscht sich.",
    "study.examples[0].lv": "Hän peseytyy.",
    "study.examples[1].lv": "Istun alas.",
    "study.examples[2].lv": "Hän iloitsee.",
    "study.examples[3].lv": "Pesen auton.",
    "study.important[0]": "sich ei ole itsenäinen substantiivi.",
    "study.important[1]": "Muoto muuttuu: ich → mich, du → dich, er/sie/es → sich.",
  }),
  [SCHWIMMEN_ID]: patchComposite(SCHWIMMEN_ID, {
    "study.explanation[3]":
      "A1-tasolla on tärkeää erottaa: schwimmen = uida, baden = kylpeä/uida huviksi.",
  }),
  [SIE_CAP_ID]: JSON.stringify({
    lv: "Te",
    "study.translation": "Te",
    "study.explanation[0]":
      "Pääajatus: Kohtelias puhuttelu — aina isolla S-kirjaimella. Suomeksi: te.",
    "study.explanation[1]":
      "Formaalinen Sie käyttää aina 3. persoonan monikon verbiä: Sie sind, Sie haben, Sie kochen.",
    "study.explanation[2]": "Pieni sie yksikössä tarkoittaa häntä (sie kocht = hän keittää).",
    "study.explanation[3]": "Pieni sie monikossa tarkoittaa heitä (sie kochen = he keittävät).",
    "study.explanation[4]":
      "Kohtelias Sie vaatii ison S-kirjaimen ja 3. persoonan monikon verbin.",
    "study.explanation[5]": "Erota: Sie kochen (te) vs sie kochen (he) vs sie kocht (hän).",
    "study.explanation[6]":
      "Esimerkkejä: Sie sind hier. = Olette täällä.; Sie haben Zeit. = Teillä on aikaa.",
    "study.tip[0]":
      "Kohtelias puhuttelu — aina isolla S. Suomeksi: te. Verbi 3. persoonan monikossa: Sie kochen.",
    "study.tip[1]": "Käytä Sie, kun konteksti on kohtelias te-puhuttelu.",
    "study.important[0]": "Kohtelias puhuttelu aina isolla S: Sie, ei sie.",
    "study.important[1]": "Hän: sie kocht. He: sie kochen. Te: Sie kochen (3. pers. monikko).",
    "study.important[2]": "Väärin: sie kocht (te) → Oikein: Sie kochen",
    "study.important[3]": "Väärin: Sie kocht (he) → Oikein: sie kochen",
    "study.examples[0].lv": "Keittäkää, olkaa hyvä.",
    "study.examples[1].lv": "Hän keittää.",
    "study.examples[2].lv": "Hän syö.",
    "study.examples[3].lv": "He keittävät.",
    "study.examples[4].lv": "He pelaavat jalkapalloa.",
    "study.examples[5].lv": "Keittäkää, olkaa hyvä.",
  }),
  [SICHER_ID]: patchComposite(SICHER_ID, {
    "study.explanation[0]":
      "Pääajatus: sicher tarkoittaa adjektiivina turvallista, adverbiaalisena varmasti.",
    "study.explanation[2]":
      "Vahvistuksena tai vakuutuksena lauseessa sicher = varmasti/tietysti (Das ist sicher wahr. = Se on varmasti totta.).",
    "study.explanation[3]": "Sicher! erillisenä vastauksena tarkoittaa tietysti!",
    "study.tip[1]": "Kun vakuutus tai vahvistus lauseessa → varmasti/tietysti.",
    "study.important[0]": "sicher = turvallinen (adjektiivi) TAI varmasti/tietysti (adverbi).",
  }),
  [SITZEN_ID]: JSON.stringify({
    lv: "Istua",
    "study.translation": "Istua",
    "study.explanation[0]": "Pääajatus: sitzen tarkoittaa istumista tuolilla tai penkillä.",
    "study.explanation[1]":
      "Sitzen kuvaa sitä, että joku istuu — esimerkiksi tuolissa tai penkillä.",
    "study.explanation[2]":
      "A1-tasolla tärkein merkitys on istua; välillä sitzen voi kuvata myös paikalla olemista.",
    "study.explanation[3]": "Muista erottaa: sitzen = istua, stehen = seistä, liegen = maata.",
    "study.tip.text":
      "Muista: kun istuu → sitzen; kun seisoo → stehen; kun makaa → liegen.",
    "study.important[0]": "sitzen kuvaa istumisasentoa.",
    "study.important[1]": "Istuutua (sich setzen) ≠ istua (sitzen).",
  }),
  [SPRECHEN_ID]: patchComposite(SPRECHEN_ID, {
    "study.examples[2].lv": "Hän puhuu opettajansa kanssa.",
  }),
};

const PDF_NOTES = {
  sich:
    "PDF reaudit: lv/study.translation Itseään • Itselleen (reflexive FI); aligned headword/explanation/examples",
  schwimmen: "PDF reaudit: study.explanation[3] uidä → uida",
  Sie:
    "PDF reaudit: formal Sie uses 3rd person plural verb (Sie sind/haben/kochen); removed usein monikon verbin kanssa",
  sicher: "PDF reaudit: Sicher! = tietysti only; removed luultavasti from exclamation sense",
  sitzen: "PDF reaudit: natural FI explanations; sitzen=istua vs stehen/liegen contrast preserved",
  sprechen: "PDF reaudit: opettajattarensa → opettajansa (DE has keine Geschlechtsmarkierung)",
};

function normalizeVal(v) {
  const t = String(v || "").trim();
  if (t.startsWith("{") || t.startsWith("[")) {
    try {
      return JSON.stringify(JSON.parse(t));
    } catch {
      return t;
    }
  }
  return t;
}

function noteFor(id, target, prod) {
  const card = id.match(/\|([^|]+)\|/)?.[1] || id;
  const pdfNote = PDF_NOTES[card];
  if (pdfNote) return `FI ${card} ${pdfNote}. DE untouched.`;
  const prior = base[id]?.owner_note;
  if (prior) return prior;
  if (prod === target) return `FI ${card} PDF reaudit: production already correct; NELABOT. DE untouched.`;
  return `FI ${card} PDF reaudit: unchanged from prior review. DE untouched.`;
}

const TARGET_FI = {};
for (const row of rows) {
  const id = row.finding_stable_ids;
  if (PDF_REAUDIT_OVERRIDES[id] !== undefined) TARGET_FI[id] = PDF_REAUDIT_OVERRIDES[id];
  else if (base[id]?.owner_decision === "LABOT" && base[id].owner_new) TARGET_FI[id] = base[id].owner_new;
  else TARGET_FI[id] = String(row.production_current || "").trim();
}

const decisions = {};
let labotCount = 0;
let nelabotCount = 0;
for (const row of rows) {
  const id = row.finding_stable_ids;
  const target = TARGET_FI[id];
  const prod = normalizeVal(row.production_current);
  const normTarget = normalizeVal(target);
  const needsChange = prod !== normTarget;
  if (needsChange) {
    labotCount++;
    decisions[id] = {
      owner_status: "DECIDED",
      owner_decision: "LABOT",
      owner_new: target,
      owner_note: noteFor(id, normTarget, prod),
    };
  } else {
    nelabotCount++;
    decisions[id] = {
      owner_status: "DECIDED",
      owner_decision: "NELABOT",
      owner_new: "",
      owner_note: noteFor(id, normTarget, prod),
    };
  }
}

if (Object.keys(decisions).length !== 50) {
  console.error("Expected 50");
  process.exit(1);
}
fs.writeFileSync(outPath, `${JSON.stringify(decisions, null, 2)}\n`);
console.log(
  JSON.stringify(
    { total: 50, labot: labotCount, nelabot: nelabotCount, pending: 0, pdf_reaudit: true },
    null,
    2
  )
);
