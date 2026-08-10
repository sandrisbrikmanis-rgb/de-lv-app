#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");

const BLOCK_ANCHORS = [
  { block: 1, cardId: "c1-gewährleisten-1", expected: "To ensure", level: "C1" },
  { block: 2, cardId: "c1-Befangenheit-211", expected: "Self-consciousness • Embarrassment", level: "C1" },
  { block: 3, cardId: "c1-Haft-376", expected: "Detention • Imprisonment", level: "C1" },
  { block: 4, cardId: "c1-Segelflugsport-468", expected: "Gliding", level: "C1" },
  { block: 5, cardId: "c2-Lungenentzündung-52", expected: "Pneumonia", level: "C2" },
  { block: 6, cardId: "c2-Meisterschaftsspiel-177", expected: "Championship match", level: "C2" },
];

const NELABOT = [
  { cardId: "c1-Grenzverletzung-373", expected: "Border violation", level: "C1" },
  { cardId: "c1-Industrieanlage-395", expected: "Industrial complex", level: "C1" },
  { cardId: "c1-Produktionskosten-446", expected: "Cost of production", level: "C1" },
  { cardId: "c1-Rentenempfänger-458", expected: "Pensioner", level: "C1" },
  { cardId: "c2-unmissverständlich-3", expected: "Unmistakable", level: "C2" },
  { cardId: "c2-Geschenkgutschein-38", expected: "Gift card", level: "C2" },
  { cardId: "c2-Kassettenrecorder-43", expected: "Cassette tape recorder", level: "C2" },
  { cardId: "c2-Errungenschaft-117", expected: "Achievement • Benefit • Gain", level: "C2" },
];

const MEDIUM = [
  { cardId: "c1-beabsichtigen", field: "study.examples[1].lv", expected: "What do you intend to achieve with this measure?" },
  { cardId: "c1-unterstellen", field: "study.examples[4].lv", expected: "To accuse unjustly • To impute" },
];

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function load(file, key) {
  const code = fs.readFileSync(path.join(ROOT, file), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function entryId(e, i, lv) {
  return e.study?.id || `${lv.toLowerCase()}-${e.de}-${i}`;
}

function getAt(root, fieldPath) {
  const parts = String(fieldPath).replace(/\[(\d+)\]/g, ".$1").split(".").filter(Boolean);
  let cur = root;
  for (const p of parts) {
    if (cur == null) return undefined;
    cur = cur[/^\d+$/.test(p) ? parseInt(p, 10) : p];
  }
  return cur;
}

function findEntry(words, cardId, prefix) {
  for (let i = 0; i < words.length; i++) {
    if (entryId(words[i], i, prefix) === cardId || words[i].study?.id === cardId) return words[i];
  }
  return null;
}

function main() {
  const out = { pass: true, checks: [] };
  const add = (name, pass, detail) => {
    out.checks.push({ name, pass, detail });
    if (!pass) out.pass = false;
  };

  const c1En = load("data/en/c1.js", "C1_WORDS");
  const c1Lv = load("data/c1.js", "C1_WORDS");
  const c2En = load("data/en/c2.js", "C2_WORDS");
  const c2Lv = load("data/c2.js", "C2_WORDS");

  add("C1 count", c1En.length === 572, `${c1En.length}/572`);
  add("C2 count", c2En.length === 219, `${c2En.length}/219`);
  add("C1 language parity", c1En.length === c1Lv.length, `${c1En.length}/${c1Lv.length}`);
  add("C2 language parity", c2En.length === c2Lv.length, `${c2En.length}/${c2Lv.length}`);
  add("C1 mirror", md5(path.join(ROOT, "data/en/c1.js")) === md5(path.join(ROOT, "www/data/en/c1.js")), "PASS");
  add("C2 mirror", md5(path.join(ROOT, "data/en/c2.js")) === md5(path.join(ROOT, "www/data/en/c2.js")), "PASS");

  try {
    execSync("node --check data/en/c1.js && node --check www/data/en/c1.js", { cwd: ROOT });
    add("C1 syntax", true, "PASS");
  } catch {
    add("C1 syntax", false, "FAIL");
  }
  try {
    execSync("node --check data/en/c2.js && node --check www/data/en/c2.js", { cwd: ROOT });
    add("C2 syntax", true, "PASS");
  } catch {
    add("C2 syntax", false, "FAIL");
  }

  const deBefore = {
    c1: md5(path.join(ROOT, "data/c1.js")),
    c2: md5(path.join(ROOT, "data/c2.js")),
  };
  add("DE READ-ONLY C1", deBefore.c1 === md5(path.join(ROOT, "data/c1.js")), "PASS");
  add("DE READ-ONLY C2", deBefore.c2 === md5(path.join(ROOT, "data/c2.js")), "PASS");

  const blocks = BLOCK_ANCHORS.map((a) => {
    const words = a.level === "C1" ? c1En : c2En;
    const prefix = a.level === "C1" ? "c1" : "c2";
    let lv = null;
    for (let i = 0; i < words.length; i++) {
      if (entryId(words[i], i, a.level) === a.cardId) lv = words[i].lv;
    }
    return { block: a.block, pass: lv === a.expected, cardId: a.cardId };
  });
  add("Repair blocks 6/6", blocks.every((b) => b.pass), blocks.filter((b) => b.pass).length + "/6");

  const nelabot = NELABOT.map((n) => {
    const words = n.level === "C1" ? c1En : c2En;
    const prefix = n.level === "C1" ? "c1" : "c2";
    const e = findEntry(words, n.cardId, prefix);
    return { cardId: n.cardId, pass: e?.lv === n.expected };
  });
  add("OWNER NELABOT 8/8", nelabot.every((n) => n.pass), nelabot.filter((n) => n.pass).length + "/8");

  const medium = MEDIUM.map((m) => {
    const e = findEntry(c1En, m.cardId, "c1");
    const v = getAt(e?.study, m.field.replace("study.", ""));
    return { cardId: m.cardId, pass: v === m.expected };
  });
  add("MEDIUM micro 2/2", medium.every((m) => m.pass), medium.filter((m) => m.pass).length + "/2");

  // diff vs main for repaired scope
  execSync("git fetch origin main", { cwd: ROOT });
  const mainC1 = execSync("git show origin/main:data/en/c1.js", { cwd: ROOT, encoding: "utf8", maxBuffer: 80 * 1024 * 1024 });
  const mainC2 = execSync("git show origin/main:data/en/c2.js", { cwd: ROOT, encoding: "utf8", maxBuffer: 80 * 1024 * 1024 });
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(mainC1, ctx);
  const mainC1Words = ctx.window.C1_WORDS;
  vm.runInContext(mainC2, ctx);
  const mainC2Words = ctx.window.C2_WORDS;

  let fieldChanges = 0;
  const cards = new Set();
  function diffWalk(a, b, cardId, prefix, p) {
    if (typeof a === "string" && typeof b === "string" && a !== b) {
      fieldChanges++;
      cards.add(cardId);
    } else if (Array.isArray(a) && Array.isArray(b)) {
      for (let i = 0; i < Math.max(a.length, b.length); i++) diffWalk(a[i], b[i], cardId, prefix, `${p}[${i}]`);
    } else if (a && b && typeof a === "object" && typeof b === "object") {
      for (const k of new Set([...Object.keys(a), ...Object.keys(b)])) {
        if (k === "sectionAccents") continue;
        diffWalk(a[k], b[k], cardId, prefix, p ? `${p}.${k}` : k);
      }
    }
  }
  for (let i = 0; i < c1En.length; i++) {
    const id = entryId(c1En[i], i, "C1");
    if (JSON.stringify(c1En[i]) !== JSON.stringify(mainC1Words[i])) {
      if (c1En[i].lv !== mainC1Words[i].lv) {
        fieldChanges++;
        cards.add(id);
      }
      if (c1En[i].study && mainC1Words[i].study) diffWalk(c1En[i].study, mainC1Words[i].study, id, "c1", "study");
    }
  }
  for (let i = 0; i < c2En.length; i++) {
    const id = entryId(c2En[i], i, "C2");
    if (c2En[i].lv !== mainC2Words[i].lv) {
      fieldChanges++;
      cards.add(id);
    }
    if (c2En[i].study && mainC2Words[i].study) diffWalk(c2En[i].study, mainC2Words[i].study, id, "c2", "study");
  }
  add("Repaired cards 285/285", cards.size === 285, `${cards.size}/285`);
  add("Changed fields 310/310", fieldChanges === 310, `${fieldChanges}/310`);

  const closure = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/en-c1c2-final-285-targeted-regression.json"), "utf8"));
  add("Closure CRITICAL/HIGH/MEDIUM/LOW 0", closure.severityCounts.CRITICAL === 0 && closure.severityCounts.HIGH === 0 && closure.severityCounts.MEDIUM === 0 && closure.severityCounts.LOW === 0, "0/0/0/0");

  const prodDiff = execSync("git diff --name-only origin/main -- data/en www/data/en data/c1 data/c2 www/data/c1 www/data/c2", { cwd: ROOT, encoding: "utf8" }).trim().split("\n").filter(Boolean);
  const unexpectedProd = prodDiff.filter((f) => !f.match(/^data\/en\/c[12]\.js$|^www\/data\/en\/c[12]\.js$/));
  add("Unexpected production changes", unexpectedProd.length === 0, unexpectedProd.join(",") || "0");

  out.blocks = blocks;
  out.nelabot = nelabot;
  out.medium = medium;
  out.fieldChanges = fieldChanges;
  out.uniqueCards = cards.size;

  const logPath = path.join(ROOT, "reports/temp/en-c1c2-final-main-integration-verify.json");
  fs.writeFileSync(logPath, JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));
  if (!out.pass) process.exit(1);
}

main();
