#!/usr/bin/env node
"use strict";
/**
 * DA–DE Kurss final integration reconciliation verifier (READ-ONLY production check).
 * Usage: node scripts/verify-da-kurss-final-integration.js [--json-out=path]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  getAt,
  classifyTarget,
  uiRelativePath,
  resolveLessonsRoot,
  normalizeCompare,
  getLegacyHtml,
} = require("./lib/da-kurss-owner-path");
const { compareStructureWithLvMaster } = require("./lib/da-kurss-audit-collect");

const MAP_47 = path.join(ROOT, "reports/temp/da-kurss-full-luna-owner-apply-map.json");
const MAP_41 = path.join(ROOT, "reports/temp/da-kurss-owner-apply-map-integration-41.json");
const NSR_LOG = path.join(ROOT, "reports/temp/da-kurss-needs-source-review-apply-log.json");
const LV_MASTER = path.join(ROOT, "data/courseLessons.js");
const BASE_REF = process.env.DA_KURSS_INTEGRATION_BASE || "bd02b6f7";

const jsonOutArg = process.argv.find((a) => a.startsWith("--json-out="));
const JSON_OUT = jsonOutArg ? jsonOutArg.split("=")[1] : path.join(ROOT, "reports/temp/da-kurss-final-integration-verify.json");

function repairDaCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    '$1",$2',
  );
}

function loadProduction() {
  const lessonsCode = repairDaCourseLessonsSource(fs.readFileSync(path.join(ROOT, "data/da/courseLessons.js"), "utf8"));
  const ctxL = { window: {} };
  vm.runInNewContext(lessonsCode, ctxL);
  const trainingCode = fs.readFileSync(path.join(ROOT, "data/da/courseTrainingCards.js"), "utf8");
  const ctxT = { window: {} };
  vm.runInNewContext(trainingCode, ctxT);
  const uiCode = fs.readFileSync(path.join(ROOT, "languages/da/ui.js"), "utf8");
  const ctxU = { window: {} };
  vm.runInNewContext(uiCode, ctxU);
  const training = {};
  for (const key of Object.keys(ctxT.window)) {
    if (key.endsWith("Da") || key === "lesson7ExerciseCardsDa") training[key] = ctxT.window[key];
  }
  return {
    data: ctxL.window.COURSE_LESSON_DATA || {},
    html: ctxL.window.COURSE_LESSON_HTML || {},
    training,
    ui: ctxU.window.LANGUAGE_UI_STRINGS || {},
  };
}

function targetKey(entry) {
  return `${entry.path || entry.normalizedPath}|${entry.applyMode || "field"}`;
}

function readActual(entry, prod) {
  const { data, html, training, ui } = prod;
  if (entry.applyMode === "htmlSubstring" || entry.applyMode === "htmlMultiSubstring") {
    if (entry.htmlKey) return html[entry.htmlKey];
    if (entry.lessonKey) return getLegacyHtml(data, html, entry.lessonKey);
    return undefined;
  }
  if (entry.applyMode === "addTrainingField") {
    const deck = training[entry.trainingDeck] || [];
    return deck[entry.cardIndex]?.[entry.fieldName];
  }
  const target = classifyTarget(entry.path || entry.normalizedPath);
  if (target === "ui") return getAt(ui, uiRelativePath(entry.path || entry.normalizedPath));
  if (target === "training") return getAt(training, entry.normalizedPath || entry.path);
  if (target === "lessons") {
    const p = entry.normalizedPath || entry.path;
    const { root, relPath } = resolveLessonsRoot(p, data, html);
    return getAt(root, relPath);
  }
  return undefined;
}

function verifySet(label, mapPath, prod) {
  const map = JSON.parse(fs.readFileSync(mapPath, "utf8"));
  const apply = map.apply || [];
  const present = [];
  const missing = [];
  const mismatch = [];
  for (const entry of apply) {
    const actual = readActual(entry, prod);
    const expected = entry.ownerNew;
    const rec = {
      set: label,
      findingNum: entry.findingNum,
      auditId: entry.auditId || entry.findingId,
      path: entry.path || entry.normalizedPath,
      expected,
      actual: actual ?? null,
      applyMode: entry.applyMode || "field",
    };
    if (actual == null || actual === "" || actual === "missing") {
      if (entry.applyMode === "addTrainingField" && (entry.daCurrent === "missing" || !entry.daCurrent)) {
        missing.push(rec);
      } else if (actual == null || actual === "") {
        missing.push(rec);
      } else {
        missing.push(rec);
      }
      continue;
    }
    if (normalizeCompare(actual) === normalizeCompare(expected)) {
      present.push(rec);
    } else if (entry.applyMode === "htmlSubstring") {
      const full = readActual({ ...entry, applyMode: "htmlSubstring" }, prod);
      if (typeof full === "string" && full.includes(expected)) present.push({ ...rec, note: "html_contains_fragment" });
      else mismatch.push(rec);
    } else if (entry.applyMode === "htmlMultiSubstring") {
      const full = readActual({ ...entry, applyMode: "htmlMultiSubstring" }, prod);
      const ok = (entry.replacements || []).every((r) => typeof full === "string" && full.includes(r.to));
      if (ok) present.push({ ...rec, note: "html_multi_applied" });
      else mismatch.push(rec);
    } else {
      mismatch.push(rec);
    }
  }
  return { requested: apply.length, present, missing, mismatch, apply };
}

function verifyLesson7(prod) {
  const deck = prod.training.lesson7ExerciseCardsDa || [];
  const rows = [];
  for (let i = 0; i < 16; i++) {
    const card = deck[i] || {};
    rows.push({ index: i, infinitive: card.infinitive || "", lv: card.lv || null, pass: !!card.lv });
  }
  const count = rows.filter((r) => r.pass).length;
  return { expected: 16, actual: count, pass: count === 16, rows };
}

function verifyNsr62(prod) {
  if (!fs.existsSync(NSR_LOG)) return { pass: false, reason: "NSR apply log missing" };
  const log = JSON.parse(fs.readFileSync(NSR_LOG, "utf8"));
  const html = prod.html.kurssSentenceStructureLesson || "";
  const checks = [];
  for (const item of log.applied || []) {
    for (const pair of item.replacements || []) {
      checks.push({
        from: pair.from,
        to: pair.to,
        toPresent: html.includes(pair.to),
        fromAbsent: !html.includes(pair.from),
        pass: html.includes(pair.to) && !html.includes(pair.from),
      });
    }
  }
  return { pass: checks.length > 0 && checks.every((c) => c.pass), checks };
}

function mirrorCheck() {
  const pairs = [
    ["data/da/courseLessons.js", "www/data/da/courseLessons.js"],
    ["data/da/courseTrainingCards.js", "www/data/da/courseTrainingCards.js"],
    ["languages/da/ui.js", "www/languages/da/ui.js"],
  ];
  const rows = pairs.map(([a, b]) => ({
    pair: `${a} ↔ ${b}`,
    pass: fs.readFileSync(path.join(ROOT, a), "utf8") === fs.readFileSync(path.join(ROOT, b), "utf8"),
  }));
  return { pass: rows.every((r) => r.pass), rows };
}

function deSnapshot(prod) {
  const out = [];
  const isDe = (k, v) =>
    typeof v === "string" &&
    v.trim() &&
    !["front", "lv", "title", "subtitle", "intro"].includes(k) &&
    ["back", "de", "infinitive", "du", "ihr", "sie", "prompt", "answer", "base"].includes(k);
  for (const [lessonKey, lesson] of Object.entries(prod.data)) {
    lesson.sections?.forEach((section, si) => {
      section.cards?.forEach((card, ci) => {
        for (const [k, v] of Object.entries(card || {})) {
          if (isDe(k, v)) out.push(`${lessonKey}.sections[${si}].cards[${ci}].${k}:${v}`);
        }
      });
    });
  }
  for (const [deckKey, deck] of Object.entries(prod.training)) {
    deck.forEach((card, i) => {
      for (const k of ["back", "infinitive", "du", "ihr", "sie"]) {
        if (card?.[k]) out.push(`${deckKey}[${i}].${k}:${card[k]}`);
      }
    });
  }
  return out.sort().join("\n");
}

function gitShowDeSnapshot(ref) {
  const prod = loadProductionFromGitRef(ref);
  return deSnapshot(prod);
}

function loadProductionFromGitRef(ref) {
  const lessonsCode = repairDaCourseLessonsSource(
    execSync(`git show ${ref}:data/da/courseLessons.js`, { cwd: ROOT, encoding: "utf8" }),
  );
  const ctxL = { window: {} };
  vm.runInNewContext(lessonsCode, ctxL);
  const trainingCode = execSync(`git show ${ref}:data/da/courseTrainingCards.js`, { cwd: ROOT, encoding: "utf8" });
  const ctxT = { window: {} };
  vm.runInNewContext(trainingCode, ctxT);
  const uiCode = execSync(`git show ${ref}:languages/da/ui.js`, { cwd: ROOT, encoding: "utf8" });
  const ctxU = { window: {} };
  vm.runInNewContext(uiCode, ctxU);
  const training = {};
  for (const key of Object.keys(ctxT.window)) {
    if (String(key).includes("Training") || key === "lesson7ExerciseCardsDa") training[key] = ctxT.window[key];
  }
  return {
    data: ctxL.window.COURSE_LESSON_DATA || {},
    html: ctxL.window.COURSE_LESSON_HTML || {},
    training,
    ui: ctxU.window.LANGUAGE_UI_STRINGS || {},
  };
}

function overlapAnalysis(map47, map41) {
  const keys47 = new Map((map47.apply || []).map((e) => [targetKey(e), e]));
  const keys41 = new Map((map41.apply || []).map((e) => [targetKey(e), e]));
  const overlaps = [];
  for (const [k, e41] of keys41) {
    if (keys47.has(k)) {
      const e47 = keys47.get(k);
      overlaps.push({
        key: k,
        path: e41.path,
        ownerNew47: e47.ownerNew,
        ownerNew41: e41.ownerNew,
        sameValue: normalizeCompare(e47.ownerNew) === normalizeCompare(e41.ownerNew),
      });
    }
  }
  const unique47 = (map47.apply || []).filter((e) => !keys41.has(targetKey(e))).length;
  const unique41 = (map41.apply || []).filter((e) => !keys47.has(targetKey(e))).length;
  return {
    source47: (map47.apply || []).length,
    source41: (map41.apply || []).length,
    overlaps: overlaps.length,
    overlapConflicts: overlaps.filter((o) => !o.sameValue),
    unique47,
    unique41,
    uniqueTargetsEstimate: unique47 + unique41 + overlaps.filter((o) => o.sameValue).length,
    overlapDetails: overlaps,
  };
}

function runSyntax() {
  const files = [
    "data/da/courseLessons.js",
    "data/da/courseTrainingCards.js",
    "languages/da/ui.js",
    "www/data/da/courseLessons.js",
    "www/data/da/courseTrainingCards.js",
    "www/languages/da/ui.js",
  ];
  const rows = files.map((f) => {
    try {
      execSync(`node --check ${f}`, { cwd: ROOT, stdio: "pipe" });
      return { file: f, pass: true };
    } catch (e) {
      return { file: f, pass: false, error: String(e.message || e).slice(0, 120) };
    }
  });
  return { pass: rows.every((r) => r.pass), rows };
}

function runValidateKurss() {
  try {
    execSync("node scripts/validate-kurss.js --lang=da", { cwd: ROOT, stdio: "pipe" });
    return { pass: true };
  } catch (e) {
    return { pass: false, output: String(e.stdout || e.stderr || e.message).slice(0, 500) };
  }
}

function unexpectedProductionDiff(baseRef) {
  const files = [
    "data/da/courseLessons.js",
    "data/da/courseTrainingCards.js",
    "languages/da/ui.js",
  ];
  const rows = [];
  for (const f of files) {
    const base = execSync(`git show ${baseRef}:${f}`, { cwd: ROOT, encoding: "utf8" });
    const cur = fs.readFileSync(path.join(ROOT, f), "utf8");
    rows.push({ file: f, changed: base !== cur, deltaLines: cur.split("\n").length - base.split("\n").length });
  }
  return rows;
}

function main() {
  const prod = loadProduction();
  const set47 = verifySet("47-luna", MAP_47, prod);
  const set41 = verifySet("41-monolithic", MAP_41, prod);
  const lesson7 = verifyLesson7(prod);
  const nsr62 = verifyNsr62(prod);
  const mirror = mirrorCheck();
  const structure = compareStructureWithLvMaster();
  const syntax = runSyntax();
  const validateKurss = runValidateKurss();
  const map47 = JSON.parse(fs.readFileSync(MAP_47, "utf8"));
  const map41 = JSON.parse(fs.readFileSync(MAP_41, "utf8"));
  const overlaps = overlapAnalysis(map47, map41);

  const deBase = gitShowDeSnapshot(BASE_REF);
  const deCurrent = deSnapshot(prod);
  const deChanges = deBase === deCurrent ? 0 : "NONZERO";
  const lvHashBefore = crypto.createHash("md5").update(fs.readFileSync(LV_MASTER)).digest("hex");
  const lvHashNow = crypto.createHash("md5").update(execSync(`git show ${BASE_REF}:${path.relative(ROOT, LV_MASTER)}`, { cwd: ROOT })).digest("hex");
  const lvMasterChanges = lvHashBefore === lvHashNow ? 0 : 1;

  const pass47 = set47.missing.length === 0 && set47.mismatch.length === 0;
  const pass41 = set41.missing.length === 0 && set41.mismatch.length === 0;
  const gatesPass =
    syntax.pass &&
    validateKurss.pass &&
    structure.pass &&
    mirror.pass &&
    lesson7.pass &&
    deChanges === 0 &&
    lvMasterChanges === 0 &&
    nsr62.pass;

  const blockedReasons = [];
  if (!pass47) blockedReasons.push(`47-set: ${set47.present.length}/${set47.requested} present, ${set47.missing.length} missing, ${set47.mismatch.length} mismatch`);
  if (!pass41) blockedReasons.push(`41-set: ${set41.present.length}/${set41.requested} present, ${set41.missing.length} missing, ${set41.mismatch.length} mismatch`);
  if (!lesson7.pass) blockedReasons.push(`lesson7: ${lesson7.actual}/${lesson7.expected} .lv`);
  if (deChanges !== 0) blockedReasons.push("DE changes detected vs base");
  if (lvMasterChanges !== 0) blockedReasons.push("LV MASTER hash changed vs base");
  if (!mirror.pass) blockedReasons.push("mirror FAIL");
  if (!syntax.pass) blockedReasons.push("syntax FAIL");
  if (!validateKurss.pass) blockedReasons.push("validate-kurss FAIL");
  if (!structure.pass) blockedReasons.push(`structure FAIL (${structure.issueCount} issues)`);
  if (!nsr62.pass) blockedReasons.push("NSR finding 62 not verified");
  if (overlaps.overlapConflicts.length) blockedReasons.push(`${overlaps.overlapConflicts.length} OWNER overlap conflicts (same target, different ownerNew)`);

  const verdict =
    pass47 && pass41 && lesson7.pass && deChanges === 0 && lvMasterChanges === 0 && gatesPass && overlaps.overlapConflicts.length === 0
      ? "READY_FOR_FINAL_AUDIT"
      : "BLOCKED";

  const out = {
    generatedAt: new Date().toISOString(),
    integrationBranch: execSync("git branch --show-current", { cwd: ROOT, encoding: "utf8" }).trim(),
    headSha: execSync("git rev-parse HEAD", { cwd: ROOT, encoding: "utf8" }).trim(),
    commonBase: BASE_REF,
    set47: {
      requested: set47.requested,
      present: set47.present.length,
      missing: set47.missing,
      mismatch: set47.mismatch,
      pass: pass47,
    },
    set41: {
      requested: set41.requested,
      present: set41.present.length,
      missing: set41.missing,
      mismatch: set41.mismatch,
      pass: pass41,
    },
    overlaps,
    lesson7,
    nsr62,
    safety: { deChanges, lvMasterChanges, unexpectedDiff: unexpectedProductionDiff(BASE_REF) },
    technical: {
      syntax,
      validateKurss,
      structure: { pass: structure.pass, issueCount: structure.issueCount, issues: structure.issues },
      mirror,
    },
    blockedReasons,
    finalVerdict: verdict,
  };

  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.writeFileSync(JSON_OUT, JSON.stringify(out, null, 2));
  console.log(JSON.stringify({ finalVerdict: verdict, set47: `${set47.present.length}/${set47.requested}`, set41: `${set41.present.length}/${set41.requested}`, lesson7: `${lesson7.actual}/${lesson7.expected}`, overlaps: overlaps.overlapConflicts.length, blockedReasons }, null, 2));
  process.exit(verdict === "READY_FOR_FINAL_AUDIT" ? 0 : 1);
}

main();
