#!/usr/bin/env node
/**
 * READ-ONLY post-merge closure verification for EN-DE verbs on main.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const MAIN_BEFORE = "264cfd73b032e137e74104f5303f6abff7ea6310";
const PR_HEAD = "4ae22b0998e5b98c0a09a6746a59621a49bec195";

const FORMS = ["infinitiv", "praesens", "imperfektIndikativ", "imperfektKonjunktiv", "partizipVergangenheit"];

const OWNER_REPAIRS = [
  { index: 27, field: "imperfektKonjunktiv", expected: "knew" },
  { index: 34, field: "imperfektKonjunktiv", expected: "burned" },
  { index: 60, field: "imperfektIndikativ", expected: "had" },
  { index: 68, field: "imperfektIndikativ", expected: "he ordered • allowed" },
  { index: 80, field: "imperfektKonjunktiv", expected: "liked" },
  { index: 83, field: "partizipVergangenheit", expected: "named" },
  { index: 84, field: "partizipVergangenheit", expected: "whistled" },
  { index: 85, field: "imperfektKonjunktiv", expected: "cared for" },
  { index: 95, field: "partizipVergangenheit", expected: "flowed / coagulated" },
  { index: 98, field: "infinitiv", expected: "to drink heavily / to drink" },
  { index: 98, field: "praesens", expected: "he drinks heavily / he drinks" },
  { index: 98, field: "imperfektIndikativ", expected: "he drank heavily / he drank" },
  { index: 98, field: "imperfektKonjunktiv", expected: "he would drink heavily / he would drink" },
  { index: 105, field: "imperfektKonjunktiv", expected: "he would shear" },
  { index: 110, field: "infinitiv", expected: "to hit" },
  { index: 129, field: "imperfektKonjunktiv", expected: "he was" },
  { index: 156, field: "praesens", expected: "he chases" },
  { index: 156, field: "imperfektIndikativ", expected: "he chased" },
  { index: 156, field: "imperfektKonjunktiv", expected: "he would chase" },
];

const DOCUMENTED_DE_SOURCE_FOREIGN = new Set([
  "verb-60-haben|imperfektKonjunktiv",
  "verb-139-spleißen|imperfektKonjunktiv",
  "verb-167-weben|imperfektKonjunktiv",
]);

const FOREIGN_PATTERNS = [
  /\bpazina\b/i, /\bdega\b/i, /\bbija\b/i, /\bpatika\b/i, /\bkopa\b/i,
  /\bcirpa\b/i, /\bsavienoja\b/i, /\bauda\b/i, /\bnosaukts\b/i,
  /\bsvilpots\b/i, /\bsist\b/i,
];
const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const PLACEHOLDER = /\{\{|\}\}|TODO|TBD|FIXME|xxx/i;

function md5File(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function loadFromCode(code) {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.VERB_ENTRIES;
}

function loadFile(rel) {
  return loadFromCode(fs.readFileSync(path.join(ROOT, rel), "utf8"));
}

function gitShow(ref, file) {
  return execSync(`git show ${ref}:${file}`, { cwd: ROOT, encoding: "utf8", maxBuffer: 80 * 1024 * 1024 });
}

function verbEntryId(index, de) {
  const slug = String(de).trim().replace(/\s+/g, "-").replace(/[^\wäöüßÄÖÜ-]/gi, "");
  return `verb-${index}-${slug}`;
}

function main() {
  const report = {
    generatedAt: new Date().toISOString(),
    git: {
      integrationBranch: "cursor/en-verbs-targeted-regression-repair-6850",
      mainBefore: MAIN_BEFORE,
      pr402Head: PR_HEAD,
      mergeSha: PR_HEAD,
      mainAfter: execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
      originMain: execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim(),
      mergeType: "fast-forward",
      conflicts: 0,
      pr402Integrated: false,
    },
    dataset: { verbs: 0, formSlots: 0, ownerRepairsPresent: 0 },
    gates: {},
    regression: {},
    verdict: "",
  };

  report.git.pr402Integrated = report.git.mainAfter === PR_HEAD && report.git.originMain === PR_HEAD;

  const en = loadFile("data/en/verbs.js");
  const de = loadFile("data/verbs.js");
  const deBefore = loadFromCode(gitShow(MAIN_BEFORE, "data/verbs.js"));

  report.dataset.verbs = en.length;
  report.dataset.formSlots = 0;
  for (let i = 0; i < en.length; i++) {
    for (const f of FORMS) if (en[i][f]) report.dataset.formSlots++;
  }

  let ownerOk = 0;
  const ownerFails = [];
  for (const r of OWNER_REPAIRS) {
    const v = en[r.index][r.field].lv;
    if (v === r.expected) ownerOk++;
    else ownerFails.push({ index: r.index, field: r.field, expected: r.expected, actual: v });
  }
  report.dataset.ownerRepairsPresent = ownerOk;
  report.dataset.ownerRepairFails = ownerFails;
  report.dataset.preconditionMismatch = ownerFails.length;

  const schwimmenOk = en[124].imperfektIndikativ.lv === "he was swimming";
  const konnenOk = en[65].imperfektKonjunktiv.lv === "would be able to";

  report.gates.mirror = md5File(path.join(ROOT, "data/en/verbs.js")) === md5File(path.join(ROOT, "www/data/en/verbs.js"));
  report.gates.syntax = true;
  try {
    execSync("node --check data/en/verbs.js", { cwd: ROOT });
    execSync("node --check www/data/en/verbs.js", { cwd: ROOT });
  } catch {
    report.gates.syntax = false;
  }

  report.gates.structure = en.length === 189 && report.dataset.formSlots === 945;
  report.gates.idOrder = true;
  for (let i = 0; i < en.length; i++) {
    if (en[i].infinitiv.de !== de[i].infinitiv.de) report.gates.idOrder = false;
  }

  report.gates.deReadOnly = JSON.stringify(deBefore) === JSON.stringify(de);
  report.gates.deChanges = report.gates.deReadOnly ? 0 : 1;

  let mojibake = 0, placeholders = 0, emptyNative = 0;
  const foreignHits = [];
  for (let i = 0; i < en.length; i++) {
    const verbId = verbEntryId(i, en[i].infinitiv.de);
    for (const field of FORMS) {
      const val = en[i][field].lv || "";
      if (!val) { emptyNative++; foreignHits.push({ verbId, field, pattern: "EMPTY" }); }
      if (/[\uFFFD\u0000]/.test(val)) mojibake++;
      if (PLACEHOLDER.test(val)) placeholders++;
      if (LV_ONLY.test(val)) foreignHits.push({ verbId, field, currentEn: val, pattern: "LV_DIACRITICS" });
      for (const pat of FOREIGN_PATTERNS) {
        if (pat.test(val)) foreignHits.push({ verbId, field, currentEn: val, pattern: pat.source });
      }
    }
  }

  const unexpectedForeign = foreignHits.filter(
    (h) => h.pattern !== "EMPTY" && !DOCUMENTED_DE_SOURCE_FOREIGN.has(`${h.verbId}|${h.field}`)
  );

  report.gates.mojibake = mojibake;
  report.gates.placeholders = placeholders;
  report.gates.emptyNative = emptyNative;
  report.gates.foreignRemnantsTotal = foreignHits.length;
  report.gates.documentedDeSourceForeign = foreignHits.filter((h) =>
    DOCUMENTED_DE_SOURCE_FOREIGN.has(`${h.verbId}|${h.field}`)
  ).length;
  report.gates.unexpectedForeignRemnants = unexpectedForeign.length;
  report.gates.unexpectedForeign = unexpectedForeign;

  const diffStat = execSync(`git diff --name-only ${MAIN_BEFORE}..${PR_HEAD}`, { cwd: ROOT, encoding: "utf8" }).trim().split("\n").filter(Boolean);
  const allowedPrefixes = ["data/en/verbs.js", "www/data/en/verbs.js", "reports/"];
  const unexpectedProd = diffStat.filter((f) => !allowedPrefixes.some((p) => f === p || f.startsWith("reports/")));
  report.gates.unexpectedProductionChanges = unexpectedProd.length;
  report.gates.unexpectedProductionFiles = unexpectedProd;
  report.gates.ownerNelabot = { schwimmen: schwimmenOk, konnen: konnenOk };

  const microPath = path.join(ROOT, "reports/temp/en-verbs-targeted-regression-micro.json");
  if (fs.existsSync(microPath)) {
    const micro = JSON.parse(fs.readFileSync(microPath, "utf8"));
    report.regression = {
      validated: micro.validated?.counts || { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 },
      microPass: micro.microPass,
      authoritative: true,
      note: "Production unchanged since micro-regression at 4ae22b09",
    };
  }

  const allPass =
    report.git.pr402Integrated &&
    report.dataset.verbs === 189 &&
    report.dataset.formSlots === 945 &&
    report.dataset.ownerRepairsPresent === 19 &&
    report.dataset.preconditionMismatch === 0 &&
    report.gates.mirror &&
    report.gates.syntax &&
    report.gates.structure &&
    report.gates.idOrder &&
    report.gates.deReadOnly &&
    report.gates.mojibake === 0 &&
    report.gates.placeholders === 0 &&
    report.gates.emptyNative === 0 &&
    report.gates.unexpectedForeignRemnants === 0 &&
    report.gates.unexpectedProductionChanges === 0 &&
    schwimmenOk &&
    konnenOk &&
    report.regression.microPass === true;

  report.verdict = allPass
    ? "EN–DE DARBĪBAS VĀRDI — OWNER ACCEPTED / CLOSED ON MAIN"
    : "EN–DE DARBĪBAS VĀRDI — CLOSURE BLOCKED";

  fs.writeFileSync(path.join(ROOT, "reports/temp/en-verbs-final-main-closure.json"), JSON.stringify(report, null, 2));

  const md = [
    "# EN–DE Verbs — Final Main Closure",
    "",
    `**Generated:** ${report.generatedAt}`,
    "",
    "## Verdict",
    "",
    `**${report.verdict}**`,
    "",
    "## Git",
    "",
    "| Item | Value |",
    "| --- | --- |",
    `| Integration branch | \`cursor/en-verbs-targeted-regression-repair-6850\` |`,
    `| MAIN_BEFORE | \`${MAIN_BEFORE}\` |`,
    `| PR #402 HEAD | \`${PR_HEAD}\` |`,
    `| Merge SHA | \`${report.git.mergeSha}\` |`,
    `| MAIN_AFTER | \`${report.git.mainAfter}\` |`,
    `| origin/main | \`${report.git.originMain}\` |`,
    `| Merge type | fast-forward |`,
    `| Conflicts | 0 |`,
    "",
    "## Dataset",
    "",
    `verbs: ${report.dataset.verbs}/189 · form slots: ${report.dataset.formSlots}/945 · OWNER repairs present: ${report.dataset.ownerRepairsPresent}/19`,
    "",
    "## Gates",
    "",
    `mirror: ${report.gates.mirror ? "PASS" : "FAIL"} · syntax: ${report.gates.syntax ? "PASS" : "FAIL"} · structure: ${report.gates.structure ? "PASS" : "FAIL"} · ID/order: ${report.gates.idOrder ? "PASS" : "FAIL"} · DE READ-ONLY: ${report.gates.deReadOnly ? "PASS" : "FAIL"}`,
    "",
    `mojibake: ${report.gates.mojibake} · placeholders: ${report.gates.placeholders} · empty native: ${report.gates.emptyNative} · unexpected foreign: ${report.gates.unexpectedForeignRemnants}`,
    "",
    `PRECONDITION_MISMATCH: ${report.dataset.preconditionMismatch} · unexpected production changes: ${report.gates.unexpectedProductionChanges}`,
    "",
    "## Regression",
    "",
    `validated CRITICAL/HIGH/MEDIUM/LOW: ${report.regression.validated?.CRITICAL}/${report.regression.validated?.HIGH}/${report.regression.validated?.MEDIUM}/${report.regression.validated?.LOW} · microPass: ${report.regression.microPass ? "PASS" : "FAIL"}`,
    "",
  ].join("\n");

  fs.writeFileSync(path.join(ROOT, "reports/en-verbs-final-main-closure.md"), md);
  console.log(JSON.stringify({ verdict: report.verdict, gates: report.gates, dataset: report.dataset }, null, 2));
}

main();
