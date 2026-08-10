#!/usr/bin/env node
/**
 * Global Teikumi / Sätze final main consolidation verification (read-only).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const MAIN_BEFORE = "53f83b3c859d77c14aee0c2edce99b185ce6d268";
const PRE_REPAIR_MAIN = "7eb0bcf14724b9f72c49dbd3e846acf0272665e8";

const CLOSED = {
  en: {
    authoritativeCommit: "53f83b3c859d77c14aee0c2edce99b185ce6d268",
    authoritativePR: "#390",
    baselineCards: 796,
    evidence: "reports/en-sentences-final-main-integration.md",
  },
  bs: {
    authoritativeCommit: "63d844bbdba9d88385ece553c7b3eb7f63b40f96",
    authoritativePR: null,
    baselineCards: 796,
    evidence: "reports/bs-language-final-status.md",
  },
};

const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
const ZWSP = /\u200B|\uFEFF/;
const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;

const OWNER_NELABOT = [
  "satze-27", "satze-82", "satze-116", "satze-134", "satze-137", "satze-142",
  "satze-212", "satze-216", "satze-217", "satze-263", "satze-264",
  "satze-471", "satze-483", "satze-626", "satze-705", "satze-725",
];

const SOURCE_LV_ISSUE = [
  "satze-242", "satze-379", "satze-414", "satze-556", "satze-559", "satze-562",
  "satze-651", "satze-660", "satze-673", "satze-674", "satze-727", "satze-760",
];

const HIGH_RISK = {
  "satze-239": "Keep your chin up!",
  "satze-242": "By nature. • Originally.",
  "satze-379": "Above all. • Especially.",
  "satze-414": "Without further ado. • Without difficulty.",
  "satze-443": "It's your turn.",
  "satze-444": "There's a draught.",
  "satze-562": "Winter is here. It has snowed.",
  "satze-569": "It is half past six.",
  "satze-599": "The train leaves at half past six.",
  "satze-614": "There's a draught, please close the window!",
  "satze-651": "Remind me tomorrow to write!",
  "satze-659": "It starts at half past seven.",
  "satze-660": "All the seats are sold out.",
  "satze-663": "Quickly, please! The curtain is about to go up!",
  "satze-703": "Can I buy it in installments?",
  "satze-727": "One loaf of bread, please, but not too crusty.",
  "satze-760": "When can I pick up the shoes?",
  "satze-762": "It's five minutes fast.",
  "satze-792": "Do I get the box for free?",
};

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function loadFromRef(ref, rel) {
  const code = execSync(`git show ${ref}:${rel}`, { cwd: ROOT, encoding: "utf8" });
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.SENTENCE_ENTRIES;
}

function hashFromRef(ref, rel) {
  const code = execSync(`git show ${ref}:${rel}`, { cwd: ROOT, encoding: "utf8" });
  return crypto.createHash("md5").update(code).digest("hex");
}

function discoverLanguages() {
  return fs
    .readdirSync(path.join(ROOT, "data"))
    .filter((d) => {
      const p = path.join(ROOT, "data", d, "sentences.js");
      return fs.existsSync(p) && fs.statSync(path.join(ROOT, "data", d)).isDirectory();
    })
    .sort();
}

function checkSyntax(rel) {
  try {
    execSync(`node --check ${rel}`, { cwd: ROOT, stdio: "pipe" });
    return true;
  } catch {
    return false;
  }
}

function auditLanguage(lang, lvRef, lvEntries) {
  const prod = `data/${lang}/sentences.js`;
  const mir = `www/data/${lang}/sentences.js`;
  const prodPath = path.join(ROOT, prod);
  const mirPath = path.join(ROOT, mir);
  const entries = load(prod);
  const prodHash = md5(prodPath);
  const mirHash = md5(mirPath);
  const mirrorPass = prodHash === mirHash;
  const syntaxPass = checkSyntax(prod) && checkSyntax(mir);

  let deMismatch = 0;
  let idOrderPass = true;
  let semicolonCount = 0;
  let mojibakeCount = 0;
  let zwspCount = 0;
  let placeholderCount = 0;
  let emptyNative = 0;

  const n = Math.min(entries.length, lvEntries.length);
  for (let i = 0; i < n; i++) {
    if (entries[i].de !== lvEntries[i].de) deMismatch++;
    const native = entries[i].lv || "";
    if (!native.trim()) emptyNative++;
    if (native.includes(";")) semicolonCount++;
    if (MOJIBAKE.test(native)) mojibakeCount++;
    if (ZWSP.test(native)) zwspCount++;
    if (/^(TODO|TBD|\.\.\.)$/i.test(native.split("•")[0].trim())) placeholderCount++;
  }
  if (entries.length !== lvEntries.length) idOrderPass = false;

  let authoritativeMatch = null;
  const closed = CLOSED[lang];
  if (closed) {
    const authHash = hashFromRef(closed.authoritativeCommit, prod);
    authoritativeMatch = authHash === prodHash;
  }

  return {
    language: lang,
    productionFile: prod,
    mirrorFile: mir,
    cards: entries.length,
    baselineCards: closed?.baselineCards ?? lvEntries.length,
    mirrorPass,
    syntaxPass,
    deMismatch,
    idOrderPass,
    semicolonCount,
    mojibakeCount,
    zwspCount,
    placeholderCount,
    emptyNative,
    productionHash: prodHash,
    authoritativeMatch,
    closedStatus: closed ? "CLOSED" : "NOT_CLOSED",
    pass:
      mirrorPass &&
      syntaxPass &&
      deMismatch === 0 &&
      idOrderPass &&
      entries.length === (closed?.baselineCards ?? lvEntries.length) &&
      semicolonCount === 0 &&
      mojibakeCount === 0 &&
      zwspCount === 0 &&
      placeholderCount === 0 &&
      emptyNative === 0 &&
      (closed ? authoritativeMatch === true : true),
  };
}

function auditEnRegression(lvEntries) {
  const en = load("data/en/sentences.js");
  const authEn = loadFromRef(MAIN_BEFORE, "data/en/sentences.js");
  const preEn = loadFromRef(PRE_REPAIR_MAIN, "data/en/sentences.js");
  const preLv = loadFromRef(PRE_REPAIR_MAIN, "data/sentences.js");
  const preDe = loadFromRef(PRE_REPAIR_MAIN, "data/sentences.js");
  const closureLv = loadFromRef(MAIN_BEFORE, "data/sentences.js");

  let ownerChangedCount = 0;
  let deReadOnly = true;
  let lvReadOnly = true;
  let semicolonCount = 0;
  let mojibakeCount = 0;
  let zwspCount = 0;
  let lvRemnantCount = 0;

  let closureRegression = true;
  for (let i = 0; i < en.length; i++) {
    if (en[i].lv !== authEn[i].lv) closureRegression = false;
    if (en[i].de !== preDe[i].de) deReadOnly = false;
    if (lvEntries[i].lv !== preLv[i].lv) lvReadOnly = false;
    if (preEn[i].lv !== en[i].lv) ownerChangedCount++;
    const text = en[i].lv || "";
    if (text.includes(";")) semicolonCount++;
    if (MOJIBAKE.test(text)) mojibakeCount++;
    if (ZWSP.test(text)) zwspCount++;
    if (LV_ONLY.test(text)) lvRemnantCount++;
  }

  const nelabotChecks = OWNER_NELABOT.map((id) => {
    const idx = Number(id.replace("satze-", ""));
    return {
      cardId: id,
      unchanged: preEn[idx].lv === en[idx].lv,
      closureUnchanged: authEn[idx].lv === en[idx].lv,
      en: en[idx].lv,
    };
  });

  const highRiskChecks = Object.entries(HIGH_RISK).map(([id, expected]) => {
    const idx = Number(id.replace("satze-", ""));
    const actual = en[idx].lv;
    return { cardId: id, expected, actual, pass: actual === expected };
  });

  const sourceLvIssueChecks = SOURCE_LV_ISSUE.map((id) => {
    const idx = Number(id.replace("satze-", ""));
    return {
      cardId: id,
      de: en[idx].de,
      lvSource: lvEntries[idx].lv,
      currentEn: en[idx].lv,
      lvUnchanged: preLv[idx].lv === lvEntries[idx].lv,
      closureLvUnchanged: closureLv[idx].lv === lvEntries[idx].lv,
    };
  });

  const highRiskPass = highRiskChecks.every((c) => c.pass);
  const nelabotPass = nelabotChecks.every((c) => c.unchanged);
  const sourceLvPass = sourceLvIssueChecks.every((c) => c.lvUnchanged && c.closureLvUnchanged);

  return {
    cards: en.length,
    closureRegression,
    preRepairMain: PRE_REPAIR_MAIN,
    closureMain: MAIN_BEFORE,
    ownerChangedCount,
    ownerChangedExpected: 232,
    nelabotCount: OWNER_NELABOT.length,
    nelabotPass,
    sourceLvIssueCount: SOURCE_LV_ISSUE.length,
    sourceLvPass,
    highRiskPass,
    highRiskTotal: highRiskChecks.length,
    highRiskPassed: highRiskChecks.filter((c) => c.pass).length,
    deReadOnly,
    lvReadOnly,
    semicolonCount,
    mojibakeCount,
    zwspCount,
    lvRemnantCount,
    nelabotChecks,
    highRiskChecks,
    sourceLvIssueChecks,
    pass:
      en.length === 796 &&
      closureRegression &&
      ownerChangedCount === 232 &&
      nelabotPass &&
      sourceLvPass &&
      highRiskPass &&
      deReadOnly &&
      lvReadOnly &&
      semicolonCount === 0 &&
      mojibakeCount === 0 &&
      zwspCount === 0,
  };
}

function diffAudit(mainBefore) {
  const head = execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim();
  const diff = execSync(`git diff --name-only ${mainBefore}..${head}`, { cwd: ROOT, encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(Boolean);

  const expectedPatterns = [
    /^data\/[a-z]+\/sentences\.js$/,
    /^www\/data\/[a-z]+\/sentences\.js$/,
    /^reports\/global-sentences-final-main-consolidation\.md$/,
    /^reports\/temp\/global-sentences-/,
    /^reports\/temp\/verify-global-sentences-final-main\.js$/,
  ];

  const classified = diff.map((f) => {
    let category = "UNEXPECTED";
    if (/^data\/[a-z]+\/sentences\.js$/.test(f)) category = "EXPECTED_SENTENCES_PRODUCTION";
    else if (/^www\/data\/[a-z]+\/sentences\.js$/.test(f)) category = "EXPECTED_SENTENCES_MIRROR";
    else if (f === "reports/global-sentences-final-main-consolidation.md") category = "EXPECTED_CLOSURE_DOC";
    else if (f.startsWith("reports/temp/global-sentences-")) category = "EXPECTED_AUDIT_REPORT";
    else if (f === "reports/temp/verify-global-sentences-final-main.js") category = "EXPECTED_AUDIT_REPORT";
    return { file: f, category };
  });

  const unexpected = classified.filter((c) => c.category === "UNEXPECTED");

  return {
    mainBefore,
    head,
    changedFiles: diff.length,
    classified,
    unexpectedCount: unexpected.length,
    unexpectedFiles: unexpected.map((c) => c.file),
    pass: unexpected.length === 0,
  };
}

function main() {
  const langs = discoverLanguages();
  const lv = load("data/sentences.js");
  const lvMirrorPass = md5(path.join(ROOT, "data/sentences.js")) === md5(path.join(ROOT, "www/data/sentences.js"));
  const lvSyntaxPass = checkSyntax("data/sentences.js") && checkSyntax("www/data/sentences.js");

  const datasets = langs.map((lang) => auditLanguage(lang, MAIN_BEFORE, lv));
  const enRegression = auditEnRegression(lv);

  const closedDatasets = datasets.filter((d) => d.closedStatus === "CLOSED");
  const closedRegressionPass = closedDatasets.every((d) => d.authoritativeMatch === true);

  const globalGates = {
    syntax: datasets.every((d) => d.syntaxPass) && lvSyntaxPass,
    mirror: datasets.every((d) => d.mirrorPass) && lvMirrorPass,
    idOrder: datasets.every((d) => d.idOrderPass),
    deParity: datasets.every((d) => d.deMismatch === 0),
    mojibake: datasets.every((d) => d.mojibakeCount === 0),
    zeroWidth: datasets.every((d) => d.zwspCount === 0),
    placeholders: datasets.every((d) => d.placeholderCount === 0),
    semicolonGate: datasets.every((d) => d.semicolonCount === 0),
    completedDatasetRegression: closedRegressionPass,
    unexpectedChanges: true,
  };

  const diff = diffAudit(MAIN_BEFORE);
  globalGates.unexpectedChanges = diff.pass;

  const allPass =
    datasets.every((d) => d.pass) &&
    enRegression.pass &&
    Object.values(globalGates).every(Boolean);

  const report = {
    generatedAt: new Date().toISOString(),
    mainBefore: MAIN_BEFORE,
    currentHead: execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
    datasetsFound: langs.length,
    lvSourceCards: lv.length,
    closedDatasets: closedDatasets.length,
    datasets,
    enRegression,
    globalGates,
    diffAudit: diff,
    verdict: allPass ? "GLOBAL TEIKUMI / SÄTZE — CONSOLIDATED ON MAIN" : "BLOCKED",
  };

  const outPath = path.join(ROOT, "reports/temp/global-sentences-final-main-verify.json");
  fs.writeFileSync(outPath, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  process.exit(allPass ? 0 : 1);
}

main();
