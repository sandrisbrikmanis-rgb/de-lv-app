#!/usr/bin/env node
/**
 * READ-ONLY helper: reconstruct PR #307 owner manual repairs and verify against audited main.
 * Does not modify production files.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const ROOT = path.resolve(__dirname, "../../");
const AUDITED_MAIN_SHA = "6099c38cb7b8868e3877de9dc02132e677bf938b";
const PR307_COMMIT = "3dd07d33e2b892ec23c69d9a454ec68fa844a600";
const PARENT_COMMIT = "7fcea6510b9aabf6d67314249a578e3ce503953b";
const B1_PATH = "data/bs/b1.js";

/** PR #307 field-level repairs reconstructed from git diff 7fcea651..3dd07d33 */
const PR307_REPAIRS = [
  {
    num: 1,
    id: "b1-aufwand",
    field: "study.examples[1].lv",
    deContext: "Das lohnt den Aufwand nicht.",
    before: "Nije vredno truda.",
    after: "Nije vrijedno truda.",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; ekavski→ijekavski (vrijedno)",
  },
  {
    num: 2,
    id: "b1-aussicht",
    field: "study.examples[0].lv",
    deContext: "Die Aussicht auf Erfolg ist gut.",
    before: "Šanse za uspeh su dobre.",
    after: "Šanse za uspjeh su dobre.",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; uspeh→uspjeh",
  },
  {
    num: 3,
    id: "b1-becken",
    field: "study.examples[1].lv",
    deContext: "Leg das Gemüse in das Becken.",
    before: "Stavite povrće u činiju.",
    after: "Stavi povrće u zdjelu.",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; basin/zdjela semantics",
  },
  {
    num: 4,
    id: "b1-bedeutend",
    field: "study.examples[1].lv",
    deContext: "Sie ist eine bedeutende Ärztin.",
    before: "Ona je istaknuti doktor.",
    after: "Ona je istaknuta doktorica.",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; gender agreement",
  },
  {
    num: 5,
    id: "b1-sich-bedienen",
    field: "study.examples[1].lv",
    deContext: "Er bedient sich moderner Technik.",
    before: "Koristi moderne tehnike.",
    after: "Koristi modernu tehniku.",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; tehnika as object",
  },
  {
    num: 6,
    id: "b1-sich-bemühen",
    field: "study.examples[0].lv",
    deContext: "Ich bemühe mich, pünktlich zu sein.",
    before: "Trudim se da stignem na vreme.",
    after: "Trudim se da stignem na vrijeme.",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; vreme→vrijeme",
  },
  {
    num: 7,
    id: "b1-beschwerde",
    field: "study.comparison[1].meaning",
    deContext: "die Klage (comparison word)",
    before: "Žalba / pritužba",
    after: "Tužba",
    evidence: "git diff 7fcea651..3dd07d33; PR #307 comparison fix; also SOURCE_LV_ISSUE in Group B",
    groupOverlap: "B",
  },
  {
    num: 8,
    id: "b1-dank-study",
    field: "study.examples[1].lv",
    deContext: "Herzlichen Dank!",
    before: "Hvala vam puno!",
    after: "Srdačno hvala!",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; matches LV sirsnīgs paldies",
  },
  {
    num: 9,
    id: "b1-dank-study",
    field: "study.comparison[4].meaning",
    deContext: "bedanken (sich) (comparison word)",
    before: "Zahvala",
    after: "Zahvaliti se",
    evidence: "git diff 7fcea651..3dd07d33; PR #307 comparison fix; also SOURCE_LV_ISSUE in Group B",
    groupOverlap: "B",
  },
  {
    num: 10,
    id: "b1-einsatz",
    field: "study.examples[2].lv",
    deContext: "Bei diesem Spiel ist der Einsatz zu hoch.",
    before: "Ulozi su previsoki u ovoj igri.",
    after: "Ulog je previsok u ovoj igri.",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; singular der Einsatz",
  },
  {
    num: 11,
    id: "b1-empfangen",
    field: "study.examples[1].lv",
    deContext: "Die Ministerin empfängt die Gäste im Rathaus.",
    before: "Ministar prima goste u gradskoj vijećnici.",
    after: "Ministrica prima goste u gradskoj vijećnici.",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; Ministerin→Ministrica",
  },
  {
    num: 12,
    id: "b1-festhalten",
    field: "study.examples[1].lv",
    deContext: "Sie hält das Kind fest.",
    before: "Ona čvrsto drži dete.",
    after: "Ona čvrsto drži dijete.",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; dete→dijete",
  },
  {
    num: 13,
    id: "b1-kommando",
    field: "study.examples[2].lv",
    deContext: "Das Kommando übernimmt die Leitung.",
    before: "Kontrolna jedinica preuzima kontrolu.",
    after: "Zapovjedna jedinica preuzima vodstvo.",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; Kommando/Leitung semantics",
  },
  {
    num: 14,
    id: "b1-kurs",
    field: "study.examples[0].lv",
    deContext: "Ich besuche einen Deutschkurs.",
    before: "Pohađala sam kurs nemačkog jezika.",
    after: "Pohađam kurs njemačkog jezika.",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; present tense + njemački",
  },
  {
    num: 15,
    id: "b1-lager",
    field: "study.examples[0].lv",
    deContext: "Die Waren liegen im Lager.",
    before: "Roba je na lageru.",
    after: "Roba je u skladištu.",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; warehouse not loanword lager",
  },
  {
    num: 16,
    id: "b1-trennen",
    field: "study.examples[2].lv",
    deContext: "Sie haben sich nach zehn Jahren getrennt.",
    before: "Razveli su se nakon deset godina.",
    after: "Rastali su se nakon deset godina.",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; sich trennen≠divorce",
  },
  {
    num: 17,
    id: "b1-vertrauen",
    field: "study.examples[0].lv",
    deContext: "Ich habe großes Vertrauen zu dir.",
    before: "Imam puno vjere u tebe.",
    after: "Imam veliko povjerenje u tebe.",
    evidence: "git diff 7fcea651..3dd07d33; PR #307; Vertrauen≠vjera(religion)",
  },
];

function loadB1AtSha(sha) {
  const tmp = path.join(ROOT, "reports/temp/.b1-snapshot.js");
  execSync(`git show ${sha}:${B1_PATH} > "${tmp}"`, {
    cwd: ROOT,
    maxBuffer: 64 * 1024 * 1024,
  });
  const raw = fs.readFileSync(tmp, "utf8");
  global.window = global.window || {};
  const fn = new Function(`${raw}\nreturn B1_WORDS;`);
  return fn();
}

function getByPath(obj, fieldPath) {
  const m = fieldPath.match(/^study\.(.+)$/);
  if (!m) return undefined;
  const rest = m[1];
  const tokens = [];
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let match;
  while ((match = re.exec(rest)) !== null) {
    if (match[1]) tokens.push(match[1]);
    else tokens.push(Number(match[2]));
  }
  let cur = obj.study;
  for (const t of tokens) cur = cur?.[t];
  return cur;
}

function classifyRepair(repair, currentMain) {
  if (currentMain === repair.after) return "CONFIRMED_MATCH";
  if (currentMain === repair.before) return "CONFIRMED_MISSING";
  return "STILL_UNRESOLVED";
}

function main() {
  const words = loadB1AtSha(AUDITED_MAIN_SHA);
  const results = PR307_REPAIRS.map((repair) => {
    const entry = words.find((w) => w.study?.id === repair.id);
    const currentMain = entry ? getByPath(entry, repair.field) : null;
    const status = entry ? classifyRepair(repair, currentMain) : "STILL_UNRESOLVED";
    return {
      ...repair,
      file: B1_PATH,
      currentMain,
      status,
      sourceOfExpected: `PR #307 commit ${PR307_COMMIT} (parent ${PARENT_COMMIT})`,
    };
  });

  const summary = {
    auditedMainSha: AUDITED_MAIN_SHA,
    pr307Commit: PR307_COMMIT,
    parentCommit: PARENT_COMMIT,
    groupA: {
      itemsChecked: 17,
      confirmedMatch: results.filter((r) => r.status === "CONFIRMED_MATCH").length,
      confirmedMissing: results.filter((r) => r.status === "CONFIRMED_MISSING").length,
      confirmedSuperseded: results.filter((r) => r.status === "CONFIRMED_SUPERSEDED").length,
      stillUnresolved: results.filter((r) => r.status === "STILL_UNRESOLVED").length,
    },
    skippedOwnerManual: ["b1-antrag", "b1-lösen", "b1-einfallen", "b1-vertrauen-study"],
    postPr307B1Changes: execSync(
      `git log ${PR307_COMMIT}..${AUDITED_MAIN_SHA} --oneline -- ${B1_PATH}`,
      { cwd: ROOT, encoding: "utf8" }
    ).trim(),
  };

  const out = { summary, repairs: results };
  const outPath = path.join(ROOT, "reports/temp/bs-b1-19-unresolved-owner-review.json");
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2) + "\n");
  console.log(JSON.stringify(summary, null, 2));
  console.log(`Written ${outPath}`);
}

main();
