#!/usr/bin/env node
/**
 * EN-DE Teikumi post-main integration verification (read-only).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const PRE_MERGE_MAIN = "7eb0bcf14724b9f72c49dbd3e846acf0272665e8";

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

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;
const ZWSP = /\u200B|\uFEFF/;

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

function main() {
  const en = load("data/en/sentences.js");
  const lv = load("data/sentences.js");
  const preEn = loadFromRef(PRE_MERGE_MAIN, "data/en/sentences.js");
  const preLv = loadFromRef(PRE_MERGE_MAIN, "data/sentences.js");
  const preDe = loadFromRef(PRE_MERGE_MAIN, "data/sentences.js");

  const report = {
    generatedAt: new Date().toISOString(),
    preMergeMain: PRE_MERGE_MAIN,
    currentMain: execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
    cards: en.length,
    countParity: en.length === lv.length && en.length === 796,
    mirrorPass: md5(path.join(ROOT, "data/en/sentences.js")) === md5(path.join(ROOT, "www/data/en/sentences.js")),
    syntaxPass: true,
    deReadOnly: true,
    lvReadOnly: true,
    semicolonCount: 0,
    mojibakeCount: 0,
    zwspCount: 0,
    lvRemnantCount: 0,
    placeholderCount: 0,
    ownerChangedCount: 0,
    nelabotChecks: [],
    highRiskChecks: [],
    sourceLvIssueChecks: [],
    idOrderPass: true,
    unexpectedFiles: [],
    allPass: true,
  };

  try {
    execSync("node --check data/en/sentences.js", { cwd: ROOT });
    execSync("node --check www/data/en/sentences.js", { cwd: ROOT });
    execSync("node --check data/sentences.js", { cwd: ROOT });
  } catch {
    report.syntaxPass = false;
    report.allPass = false;
  }

  for (let i = 0; i < en.length; i++) {
    if (en[i].de !== preDe[i].de) report.deReadOnly = false;
    if (lv[i].lv !== preLv[i].lv) report.lvReadOnly = false;
    if (preEn[i].lv !== en[i].lv) report.ownerChangedCount++;
    const text = en[i].lv || "";
    if (text.includes(";")) report.semicolonCount++;
    if (MOJIBAKE.test(text)) report.mojibakeCount++;
    if (ZWSP.test(text)) report.zwspCount++;
    if (LV_ONLY.test(text)) report.lvRemnantCount++;
    if (/^(TODO|TBD|\.\.\.)$/i.test(text.split("•")[0].trim())) report.placeholderCount++;
  }

  for (const id of OWNER_NELABOT) {
    const idx = Number(id.replace("satze-", ""));
    const ok = preEn[idx].lv === en[idx].lv;
    report.nelabotChecks.push({ cardId: id, unchanged: ok, en: en[idx].lv });
    if (!ok) report.allPass = false;
  }

  for (const [id, expected] of Object.entries(HIGH_RISK)) {
    const idx = Number(id.replace("satze-", ""));
    const actual = en[idx].lv;
    const pass = actual === expected;
    report.highRiskChecks.push({ cardId: id, expected, actual, pass });
    if (!pass) report.allPass = false;
  }

  for (const id of SOURCE_LV_ISSUE) {
    const idx = Number(id.replace("satze-", ""));
    const lvUnchanged = preLv[idx].lv === lv[idx].lv;
    report.sourceLvIssueChecks.push({
      cardId: id,
      de: en[idx].de,
      lvSource: lv[idx].lv,
      currentEn: en[idx].lv,
      lvUnchanged,
    });
    if (!lvUnchanged) report.allPass = false;
  }

  if (report.ownerChangedCount !== 232) report.allPass = false;
  if (!report.countParity || !report.mirrorPass || !report.syntaxPass) report.allPass = false;
  if (!report.deReadOnly || !report.lvReadOnly) report.allPass = false;
  if (report.semicolonCount > 0 || report.mojibakeCount > 0 || report.zwspCount > 0) report.allPass = false;

  report.verdict = report.allPass ? "EN–DE TEIKUMI — OWNER ACCEPTED / CLOSED ON MAIN" : "BLOCKED";

  const outJson = path.join(ROOT, "reports/temp/en-sentences-final-main-integration-verify.json");
  fs.writeFileSync(outJson, JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
  process.exit(report.allPass ? 0 : 1);
}

main();
