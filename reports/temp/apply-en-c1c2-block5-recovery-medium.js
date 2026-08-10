#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const REPAIRS = path.join(__dirname, "en-c1c2-block5-recovery-medium-repairs.json");
const LOG = path.join(__dirname, "en-c1c2-block5-recovery-medium-apply-log.json");

const LEVELS = {
  C1: {
    key: "C1_WORDS",
    enData: path.join(ROOT, "data", "en", "c1.js"),
    enWww: path.join(ROOT, "www", "data", "en", "c1.js"),
    deData: path.join(ROOT, "data", "c1.js"),
    deWww: path.join(ROOT, "www", "data", "c1.js"),
    prefix: "c1",
  },
  C2: {
    key: "C2_WORDS",
    enData: path.join(ROOT, "data", "en", "c2.js"),
    enWww: path.join(ROOT, "www", "data", "en", "c2.js"),
    deData: path.join(ROOT, "data", "c2.js"),
    deWww: path.join(ROOT, "www", "data", "c2.js"),
    prefix: "c2",
  },
};

const NELABOT = {
  "c2-unmissverständlich-3": "Unmistakable",
  "c2-Geschenkgutschein-38": "Gift card",
  "c2-Kassettenrecorder-43": "Cassette tape recorder",
  "c2-Errungenschaft-117": "Achievement • Benefit • Gain",
};

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function loadWords(filePath, key) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function writeWords(filePath, key, data) {
  const json = JSON.stringify(data, null, 2);
  const constName = key;
  fs.writeFileSync(filePath, `const ${constName} = ${json};\n\nwindow.${constName} = ${constName};\n`, "utf8");
}

function entryId(entry, index, prefix) {
  return entry.study?.id || `${prefix}-${entry.de}-${index}`;
}

function parsePath(fieldPath) {
  return String(fieldPath)
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter(Boolean);
}

function getAt(root, fieldPath) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (const part of parts) {
    if (cur == null) return undefined;
    const key = /^\d+$/.test(part) ? parseInt(part, 10) : part;
    cur = cur[key];
  }
  return cur;
}

function setAt(root, fieldPath, value) {
  const parts = parsePath(fieldPath);
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = /^\d+$/.test(parts[i]) ? parseInt(parts[i], 10) : parts[i];
    if (cur[key] == null) return false;
    cur = cur[key];
  }
  const last = parts[parts.length - 1];
  const lastKey = /^\d+$/.test(last) ? parseInt(last, 10) : last;
  cur[lastKey] = value;
  return true;
}

function findEntry(words, cardId, prefix) {
  for (let i = 0; i < words.length; i++) {
    if (entryId(words[i], i, prefix) === cardId || words[i].study?.id === cardId) return words[i];
  }
  return null;
}

function resolveField(entry, fieldPath) {
  if (fieldPath === "lv" || fieldPath === "enText") return { root: entry, path: "lv" };
  if (fieldPath.startsWith("study.")) {
    return { root: entry.study, path: fieldPath.slice("study.".length) };
  }
  return null;
}

function main() {
  const deHashesBefore = {};
  for (const [lvl, cfg] of Object.entries(LEVELS)) {
    deHashesBefore[lvl] = { data: md5(cfg.deData), www: md5(cfg.deWww) };
  }

  const cfg = JSON.parse(fs.readFileSync(REPAIRS, "utf8"));
  const words = {
    C1: loadWords(LEVELS.C1.enData, LEVELS.C1.key),
    C2: loadWords(LEVELS.C2.enData, LEVELS.C2.key),
  };

  const log = {
    applied: 0,
    alreadyApplied: 0,
    mismatch: [],
    notFound: [],
    results: [],
    nelabot: [],
    medium: { applied: 0, alreadyApplied: 0, mismatch: [] },
    block5: { applied: 0, alreadyApplied: 0, mismatch: [] },
  };

  for (const r of cfg.fieldRepairs) {
    const lvlCfg = LEVELS[r.level];
    const prefix = lvlCfg.prefix;
    const entry = findEntry(words[r.level], r.cardId, prefix);
    if (!entry) {
      log.notFound.push({ cardId: r.cardId, fieldPath: r.fieldPath, phase: r.phase });
      log.results.push({ cardId: r.cardId, fieldPath: r.fieldPath, phase: r.phase, status: "NOT_FOUND" });
      continue;
    }
    const target = resolveField(entry, r.fieldPath);
    if (!target || !target.root) {
      log.mismatch.push({ cardId: r.cardId, fieldPath: r.fieldPath, reason: "unresolved_field", phase: r.phase });
      log.results.push({ cardId: r.cardId, fieldPath: r.fieldPath, phase: r.phase, status: "FIELD_NOT_FOUND" });
      continue;
    }
    const actual = getAt(target.root, target.path);
    let status;
    if (actual === r.before) {
      setAt(target.root, target.path, r.after);
      log.applied++;
      status = "APPLIED";
      if (r.phase === "block5") log.block5.applied++;
      else log.medium.applied++;
    } else if (actual === r.after) {
      log.alreadyApplied++;
      status = "ALREADY_APPLIED";
      if (r.phase === "block5") log.block5.alreadyApplied++;
      else log.medium.alreadyApplied++;
    } else {
      log.mismatch.push({ cardId: r.cardId, fieldPath: r.fieldPath, expected: r.before, actual, phase: r.phase });
      status = "MISMATCH";
      if (r.phase === "block5") log.block5.mismatch.push({ cardId: r.cardId, fieldPath: r.fieldPath, expected: r.before, actual });
      else log.medium.mismatch.push({ cardId: r.cardId, fieldPath: r.fieldPath, expected: r.before, actual });
    }
    log.results.push({ cardId: r.cardId, fieldPath: r.fieldPath, phase: r.phase, status });
  }

  if (log.applied > 0) {
    writeWords(LEVELS.C1.enData, LEVELS.C1.key, words.C1);
    writeWords(LEVELS.C1.enWww, LEVELS.C1.key, words.C1);
    writeWords(LEVELS.C2.enData, LEVELS.C2.key, words.C2);
    writeWords(LEVELS.C2.enWww, LEVELS.C2.key, words.C2);
  }

  // NELABOT check
  for (const [cardId, expectedEn] of Object.entries(NELABOT)) {
    const entry = findEntry(words.C2, cardId, "c2");
    const current = entry?.lv;
    log.nelabot.push({ cardId, expectedEn, currentEn: current, preserved: current === expectedEn });
  }

  let syntaxPass = true;
  try {
    execSync("node --check data/en/c1.js", { cwd: ROOT });
    execSync("node --check www/data/en/c1.js", { cwd: ROOT });
    execSync("node --check data/en/c2.js", { cwd: ROOT });
    execSync("node --check www/data/en/c2.js", { cwd: ROOT });
  } catch {
    syntaxPass = false;
  }

  const block5Cards = new Set(cfg.fieldRepairs.filter((r) => r.phase === "block5").map((r) => r.cardId));
  const cardsFound = [...block5Cards].filter((id) => {
    const lvl = id.startsWith("c1-") ? "C1" : "C2";
    return findEntry(words[lvl], id, LEVELS[lvl].prefix);
  }).length;

  const out = {
    block5CardsTargeted: block5Cards.size,
    block5CardsFound: cardsFound,
    block5Applied: log.block5.applied,
    block5AlreadyApplied: log.block5.alreadyApplied,
    block5Mismatch: log.block5.mismatch.length,
    mediumTargeted: 2,
    mediumApplied: log.medium.applied,
    mediumAlreadyApplied: log.medium.alreadyApplied,
    mediumMismatch: log.medium.mismatch.length,
    mismatchDetails: log.mismatch,
    nelabotPreserved: log.nelabot.filter((n) => n.preserved).length,
    nelabotDetails: log.nelabot,
    mirrorC1: md5(LEVELS.C1.enData) === md5(LEVELS.C1.enWww),
    mirrorC2: md5(LEVELS.C2.enData) === md5(LEVELS.C2.enWww),
    deReadOnly:
      md5(LEVELS.C1.deData) === deHashesBefore.C1.data &&
      md5(LEVELS.C1.deWww) === deHashesBefore.C1.www &&
      md5(LEVELS.C2.deData) === deHashesBefore.C2.data &&
      md5(LEVELS.C2.deWww) === deHashesBefore.C2.www,
    syntaxPass,
    results: log.results,
  };

  fs.writeFileSync(LOG, JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));
  if (log.mismatch.length > 0 || cardsFound < block5Cards.size) process.exit(1);
}

main();
