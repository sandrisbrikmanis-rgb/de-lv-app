#!/usr/bin/env node
/**
 * EN-DE C1/C2 deterministic audit collector (read-only).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const OUT = path.join(__dirname, "en-c1c2-audit-data.json");

const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const SEMICOLON_IN_LV = /;/;
const MOJIBAKE = /Ô[^\x00-\x7F]{1,3}|[─┼][^\x00-\x7F]|â€[^\x00-\x7F]|Ã[^\x00-\x7F]/;

const LEVELS = [
  { level: "C1", key: "C1_WORDS", deFile: "data/c1.js", enFile: "data/en/c1.js", wwwFile: "www/data/en/c1.js" },
  { level: "C2", key: "C2_WORDS", deFile: "data/c2.js", enFile: "data/en/c2.js", wwwFile: "www/data/en/c2.js" },
];

function md5(p) {
  return crypto.createHash("md5").update(fs.readFileSync(p)).digest("hex");
}

function load(filePath, key) {
  const code = fs.readFileSync(path.join(ROOT, filePath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

function entryId(entry, index, level) {
  return entry.study?.id || `${level.toLowerCase()}-${entry.de}-${index}`;
}

function runParity() {
  try {
    return JSON.parse(execSync("node scripts/audit-language-parity.js --lang=en", { cwd: ROOT, encoding: "utf8" }));
  } catch (e) {
    try {
      return JSON.parse(e.stdout);
    } catch {
      return { pass: false };
    }
  }
}

function runStudyDesign() {
  try {
    return JSON.parse(execSync("node scripts/validate-study-design.js --lang=en", { cwd: ROOT, encoding: "utf8" }));
  } catch (e) {
    try {
      return JSON.parse(e.stdout);
    } catch {
      return {};
    }
  }
}

function scanForeignRemnants(words, level) {
  const issues = [];
  function walk(val, pathParts, inDe, cardId) {
    if (typeof val === "string") {
      if (inDe || pathParts.includes("sectionAccents")) return;
      if (LV_ONLY.test(val)) issues.push({ level, cardId, path: pathParts.join("."), snippet: val.slice(0, 100) });
      return;
    }
    if (Array.isArray(val)) val.forEach((v, i) => walk(v, [...pathParts, String(i)], inDe, cardId));
    else if (val && typeof val === "object") {
      for (const [k, v] of Object.entries(val)) walk(v, [...pathParts, k], inDe || k === "de", cardId);
    }
  }
  words.forEach((e, i) => {
    const cardId = entryId(e, i, level);
    walk(e, ["entry"], false, cardId);
    if (e.study) walk(e.study, ["study"], false, cardId);
  });
  return issues;
}

function main() {
  const parity = runParity();
  const studyDesign = runStudyDesign();
  const perLevel = {};
  let totalCards = 0;
  let totalStudies = 0;
  let totalFlash = 0;
  let semicolonIssues = [];
  let lvRemnants = [];
  let mirrorFail = [];
  let sectionAccentIssues = 0;
  let deHashes = {};

  for (const cfg of LEVELS) {
    const deWords = load(cfg.deFile, cfg.key);
    const enWords = load(cfg.enFile, cfg.key);
    const studies = enWords.filter((e) => e.study);
    const flash = enWords.filter((e) => !e.study);
    totalCards += enWords.length;
    totalStudies += studies.length;
    totalFlash += flash.length;

    deHashes[cfg.level] = md5(path.join(ROOT, cfg.deFile));

    const enHash = md5(path.join(ROOT, cfg.enFile));
    const wwwHash = md5(path.join(ROOT, cfg.wwwFile));
    if (enHash !== wwwHash) mirrorFail.push(cfg.level);

    if (deWords.length !== enWords.length) {
      perLevel[cfg.level] = { countMismatch: true, de: deWords.length, en: enWords.length };
    }

    enWords.forEach((e, i) => {
      if (SEMICOLON_IN_LV.test(e.lv || "")) {
        semicolonIssues.push({ level: cfg.level, cardId: entryId(e, i, cfg.level), lv: e.lv });
      }
    });

    lvRemnants.push(...scanForeignRemnants(enWords, cfg.level));

    const sdFile = studyDesign.perFile?.find((f) => f.file?.includes(`/${cfg.level.toLowerCase()}.js`));
    if (sdFile) sectionAccentIssues += sdFile.sectionAccentIssues || 0;

    perLevel[cfg.level] = {
      cards: enWords.length,
      studies: studies.length,
      flashcards: flash.length,
      standardStudy: studies.filter((s) => s.study.layout === "standardStudy" || !s.study.layout).length,
      mirrorPass: enHash === wwwHash,
      enHash,
      wwwHash,
    };
  }

  let syntaxPass = true;
  for (const cfg of LEVELS) {
    try {
      execSync(`node --check ${cfg.enFile}`, { cwd: ROOT });
      execSync(`node --check ${cfg.wwwFile}`, { cwd: ROOT });
    } catch {
      syntaxPass = false;
    }
  }

  const out = {
    generatedAt: new Date().toISOString(),
    scope: "EN-DE C1/C2",
    totals: {
      cards: totalCards,
      studies: totalStudies,
      flashcards: totalFlash,
      c1: perLevel.C1?.cards,
      c2: perLevel.C2?.cards,
    },
    deterministic: {
      parity: { pass: parity.pass, c1: parity.levels?.c1, c2: parity.levels?.c2 },
      syntaxPass,
      mirrorPass: mirrorFail.length === 0,
      mirrorFailures: mirrorFail,
      sectionAccentIssues,
      semicolonIssues: semicolonIssues.length,
      lvRemnants: { count: lvRemnants.length, issues: lvRemnants.slice(0, 50) },
      deReadOnly: true,
      deHashes,
    },
    perLevel,
    standards: [
      "LANGUAGE_AUDIT_STANDARD",
      "APP_QUALITY_STANDARD",
      "STUDY_CARD_RULES",
      "COMPARISON_STUDY_RULES",
      "UI_UX_VISUAL_COLOR_RULES",
    ],
  };

  fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
  console.log(JSON.stringify({ totals: out.totals, parity: parity.pass, lvRemnants: lvRemnants.length, sectionAccentIssues }, null, 2));
}

main();
