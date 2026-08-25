#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./audit-common");
const { getAt } = require("./da-a1-owner-path");
const { findEntry, readCurrent, loadWords, resolveEntry, runRetention } = require("./es-a1-a2-final-regression-retention");
const {
  convertLunaFindings,
  isCollectorFalsePositive,
} = require("./es-a1-a2-final-regression-deterministic");

const OWNER_JSON = path.join(ROOT, "reports/es-de-a1-a2-final-regression-owner-decisions.json");
const NO_OP_IDS = [
  "ES-A1A2-FINAL-0056",
  "ES-A1A2-FINAL-0414",
  "ES-A1A2-FINAL-0415",
  "ES-A1A2-FINAL-0508",
  "ES-A1A2-FINAL-0534",
];

function makeFinding(partial, seq) {
  return {
    id: `ES-A1A2-MICRO-${String(seq).padStart(4, "0")}`,
    severity: partial.severity || "VIDĒJA",
    category: partial.category || "SEMANTICS",
    level: partial.level,
    cardId: partial.cardId,
    de: partial.de || "",
    field: partial.field,
    current: partial.current,
    proposedNew: partial.proposedNew || "",
    validation: partial.validation || "REAL",
    ownerStatus: "PĀRSKATĪT",
    reason: partial.reason || "",
    source: partial.source || "deterministic",
  };
}

function runClosureMicroTargets(wordsByLevel, seqStart) {
  const findings = [];
  let seq = seqStart;
  const add = (p) => findings.push(makeFinding(p, seq++));

  const abfahren = findEntry(wordsByLevel.a2, "a2-abfahren", "a2");
  const abEx = abfahren?.study?.examples?.find((e) => e.de === "Wir fahren die Strecke langsam ab.");
  if (!abEx || abEx.lv !== "Recorremos el trayecto lentamente.") {
    add({
      severity: "KRITISKA",
      category: "SEMANTICS",
      level: "A2",
      cardId: "a2-abfahren",
      de: "abfahren",
      field: "study.examples[4].lv",
      current: abEx?.lv || "(missing)",
      proposedNew: "Recorremos el trayecto lentamente.",
      validation: "REAL",
      reason: "Gala OWNER apply nav saglabājies a2-abfahren piemērs.",
      source: "closure_micro",
    });
  }

  const vor = findEntry(wordsByLevel.a1, "a1-vor", "a1");
  const vorEx = vor?.study?.examples?.find((e) => e.de === "Nach dem Essen gehen wir spazieren.");
  if (!vorEx || !/^Después de comer/i.test(vorEx.lv || "") || /Antes de comer/i.test(vorEx.lv || "")) {
    add({
      severity: "KRITISKA",
      category: "SEMANTICS",
      level: "A1",
      cardId: "a1-vor",
      de: "vor",
      field: "study.examples[3].lv",
      current: vorEx?.lv || "(missing)",
      proposedNew: "Después de comer salimos a pasear.",
      validation: "REAL",
      reason: "Nach dem Essen jābūt Después de comer, nevis Antes de comer.",
      source: "closure_micro",
    });
  }

  const vom = findEntry(wordsByLevel.a1, "a1-vom", "a1");
  const vomEx = vom?.study?.examples?.find((e) => e.de === "Das ist vom Markt.");
  if (!vomEx || vomEx.lv !== "Es del mercado.") {
    add({
      severity: "KRITISKA",
      category: "SEMANTICS",
      level: "A1",
      cardId: "a1-vom",
      de: "vom",
      field: "study.examples[4].lv",
      current: vomEx?.lv || "(missing)",
      proposedNew: "Es del mercado.",
      validation: "REAL",
      reason: "vom Markt jāizsaka izcelsme no tirgus.",
      source: "closure_micro",
    });
  }

  const zum = findEntry(wordsByLevel.a1, "a1-zum", "a1");
  const zur = zum?.study?.comparison?.find((c) => c.word === "zur");
  if (!zur || !/femenino|zu der/i.test(zur.meaning || "") || /uz skolu/i.test(zur.example || "")) {
    add({
      severity: "AUGSTA",
      category: "PEDAGOGY",
      level: "A1",
      cardId: "a1-zum",
      de: "zur",
      field: "study.comparison[1]",
      current: JSON.stringify(zur || {}),
      proposedNew: "a / hacia (género femenino: zu der); zur Schule – a la escuela",
      validation: "REAL",
      reason: "zur = zu der (femenino); nav uz skolu atlikuma.",
      source: "closure_micro",
    });
  }

  const sein = findEntry(wordsByLevel.a1, "a1-sein", "a1");
  const imp = sein?.study?.important?.[1];
  const expectedImp = "Ich bin significa «yo soy/estoy», no «yo ser/estar».";
  if (imp !== expectedImp) {
    add({
      severity: "AUGSTA",
      category: "TRANSLATION",
      level: "A1",
      cardId: "a1-sein",
      de: "sein",
      field: "study.important[1]",
      current: imp || "(missing)",
      proposedNew: expectedImp,
      validation: "REAL",
      reason: "Gala OWNER important[1] nav piemērots.",
      source: "closure_micro",
    });
  }
  const purple0 = getAt(sein, "study.sectionAccents.examples[1].lv.purple[0]");
  if (purple0 !== "cansado") {
    add({
      severity: "VIDĒJA",
      category: "SECTION_ACCENTS",
      level: "A1",
      cardId: "a1-sein",
      de: "sein",
      field: "study.sectionAccents.examples[1].lv.purple[0]",
      current: String(purple0),
      proposedNew: "cansado",
      validation: "REAL",
      reason: "stale esi nav izlabots.",
      source: "closure_micro",
    });
  }
  const tipPurple = getAt(sein, "study.sectionAccents.tip.left.purple");
  if (JSON.stringify(tipPurple) !== JSON.stringify(["yo soy/estoy", "tú eres/estás"])) {
    add({
      severity: "AUGSTA",
      category: "SECTION_ACCENTS",
      level: "A1",
      cardId: "a1-sein",
      de: "sein",
      field: "study.sectionAccents.tip.left.purple",
      current: JSON.stringify(tipPurple),
      proposedNew: '["yo soy/estoy", "tú eres/estás"]',
      validation: "REAL",
      reason: "a1-sein tip purple nav saglabāts.",
      source: "closure_micro",
    });
  }

  const kurz = findEntry(wordsByLevel.a2, "a2-kurz", "a2");
  const kurzImp = kurz?.study?.important?.[1];
  if (kurzImp && /kurz more/i.test(kurzImp)) {
    add({
      severity: "AUGSTA",
      category: "SEMANTICS",
      level: "A2",
      cardId: "a2-kurz",
      de: "kurz",
      field: "study.important[1]",
      current: kurzImp,
      proposedNew: "",
      validation: "REAL",
      reason: "kurz more avota defekts vēl nav novērsts.",
      source: "closure_micro",
    });
  }

  const kaum = findEntry(wordsByLevel.a2, "a2-kaum", "a2");
  const ex4 = kaum?.study?.examples?.[4];
  const ex5 = kaum?.study?.examples?.[5];
  if (!ex4 || ex4.lv !== "Es casi imposible.") {
    add({
      severity: "VIDĒJA",
      category: "ORTHOGRAPHY",
      level: "A2",
      cardId: "a2-kaum",
      de: "kaum",
      field: "study.examples[4].lv",
      current: ex4?.lv || "(missing)",
      proposedNew: "Es casi imposible.",
      validation: "REAL",
      reason: "a2-kaum examples[4] gala vērtība neatbilst.",
      source: "closure_micro",
    });
  }
  if (!ex5 || ex5.lv !== "Es difícil de creer.") {
    add({
      severity: "VIDĒJA",
      category: "ORTHOGRAPHY",
      level: "A2",
      cardId: "a2-kaum",
      de: "kaum",
      field: "study.examples[5].lv",
      current: ex5?.lv || "(missing)",
      proposedNew: "Es difícil de creer.",
      validation: "REAL",
      reason: "a2-kaum examples[5] gala vērtība neatbilst.",
      source: "closure_micro",
    });
  }
  if (kaum?.study?.examples?.[6]) {
    add({
      severity: "VIDĒJA",
      category: "STRUCTURE",
      level: "A2",
      cardId: "a2-kaum",
      de: "kaum",
      field: "study.examples[6]",
      current: JSON.stringify(kaum.study.examples[6]),
      proposedNew: "",
      validation: "REAL",
      reason: "a2-kaum examples[6] neeksistējošs indekss production.",
      source: "closure_micro",
    });
  }

  const study10 = [
    ["Besuch", "a1-besuch"],
    ["besuchen", "a1-besuchen"],
    ["Fußball", "a1-fussball-study"],
    ["ganz", "a1-ganz-study"],
    ["gefallen", "a1-gefallen-study"],
    ["Geschichte", "a1-geschichte-study"],
    ["Geschwister", "a1-geschwister-study"],
    ["Großeltern", "a1-grosseltern-study"],
    ["Hand", "a1-hand-study"],
    ["hübsch", "a1-huebsch"],
  ];
  for (const [de, id] of study10) {
    const entry = wordsByLevel.a1.find((e) => e.study?.id === id);
    if (!entry) {
      add({
        severity: "KRITISKA",
        category: "STRUCTURE",
        level: "A1",
        cardId: id,
        de,
        field: "study",
        current: "(missing)",
        proposedNew: "",
        validation: "REAL",
        reason: `Jaunā A1 Study kartīte «${de}» nav atrasta.`,
        source: "closure_micro",
      });
    }
  }

  return { findings, nextSeq: seq };
}

function loadOwnerAppliedMap() {
  const owner = JSON.parse(fs.readFileSync(OWNER_JSON, "utf8"));
  const wordsByLevel = {
    a1: loadWords("data/es/a1.js", "A1_WORDS"),
    a2: loadWords("data/es/a2.js", "A2_WORDS"),
  };
  const map = new Map();
  for (const item of owner.items) {
    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    const actual = entry ? readCurrent(entry, item.field) : undefined;
    map.set(`${item.cardId}|${item.field}`, { ...item, applied: String(actual) === String(item.new) });
  }
  return map;
}

function mapSeverity(s) {
  const u = String(s || "VIDĒJA").toUpperCase();
  const map = { CRITICAL: "KRITISKA", HIGH: "AUGSTA", MEDIUM: "VIDĒJA", LOW: "ZEMA" };
  return map[u] || u;
}

function normalizeCategory(category) {
  const cat = String(category || "TRANSLATION").toUpperCase();
  if (cat === "STUDY") return "STUDY_CONSISTENCY";
  if (cat === "NATURALNESS") return "TRANSLATION";
  return cat;
}

function validateLunaFindingForClosure(f, ownerAppliedMap) {
  const current = String(f.currentEs || f.current || "");
  const cat = String(f.category || "").toUpperCase();
  const reason = String(f.reason || "");
  const proposed = String(f.proposedEs || f.proposedNew || "");
  const NON_ERROR = new Set([
    "SOURCE_LV_ISSUE",
    "SOURCE_DE_ISSUE",
    "DE_SOURCE_ISSUE",
    "NEEDS_OWNER_REVIEW",
    "NEEDS_REVIEW",
    "STYLE_ONLY",
    "PROJECT_CONVENTION",
    "FALSE_POSITIVE",
    "PASS",
  ]);

  if (NON_ERROR.has(cat)) return { validation: "FALSE_POSITIVE", reason: `Luna category ${cat}` };
  if (cat === "FOREIGN_REMNANT" && /\bpoco\b/i.test(current) && !/[āēīūģķļņ]/.test(current)) {
    return { validation: "FALSE_POSITIVE", reason: "Spānņu «poco»" };
  }
  if (cat === "FOREIGN_REMNANT" && f.de && new RegExp(`\\b${f.de}\\b`, "i").test(current)) {
    return { validation: "FALSE_POSITIVE", reason: "Vācu mācību termins kontekstā" };
  }
  if (reason.toLowerCase().includes("style only")) {
    return { validation: "FALSE_POSITIVE", reason: "Stilistiska preference" };
  }

  const field = f.field === "esText" || f.field === "esMain" ? "lv" : f.field;
  const ownerItem = ownerAppliedMap.get(`${f.cardId}|${field}`);
  if (ownerItem?.applied && proposed && proposed !== ownerItem.new) {
    return {
      validation: "OWNER_REVIEW_REQUIRED",
      reason: "Luna ieteikums atšķiras no piemērotā gala OWNER NEW",
    };
  }

  if (!proposed) return { validation: "OWNER_REVIEW_REQUIRED", reason: "Nav proposed fix" };
  if (current === proposed) return { validation: "FALSE_POSITIVE", reason: "CURRENT jau sakrīt ar proposed" };
  return { validation: "REAL", reason: reason || "Luna validated" };
}

function convertClosureLunaFindings(lunaFindings, seqStart, ownerAppliedMap) {
  const converted = [];
  const falsePositives = [];
  const reviewRequired = [];
  let seq = seqStart;

  for (const f of lunaFindings) {
    if (f.status === "PASS") continue;
    const v = validateLunaFindingForClosure(f, ownerAppliedMap);
    const field = f.field === "esText" || f.field === "esMain" ? "lv" : f.field;
    const item = makeFinding(
      {
        severity: mapSeverity(f.severity),
        category: normalizeCategory(f.category),
        level: f.level || (f.cardId?.startsWith("a2-") ? "A2" : "A1"),
        cardId: f.cardId,
        de: f.de,
        field,
        current: f.currentEs || f.current || "",
        proposedNew: f.proposedEs || f.proposedNew || "",
        validation: v.validation,
        reason: v.reason || f.reason,
        source: "luna",
      },
      seq++,
    );
    if (v.validation === "FALSE_POSITIVE") falsePositives.push(item);
    else if (v.validation === "OWNER_REVIEW_REQUIRED") reviewRequired.push(item);
    else converted.push(item);
  }
  return { findings: converted, falsePositives, reviewRequired, nextSeq: seq };
}

const APPLY_LOG = path.join(ROOT, "reports/temp/es-a1-a2-final-regression-owner-apply-log.json");

function runRetentionWithSuperseded(wordsByLevel) {
  const retention = runRetention(wordsByLevel);
  const owner = JSON.parse(fs.readFileSync(OWNER_JSON, "utf8"));
  const ownerByField = new Map(owner.items.map((i) => [`${i.level}|${i.cardId}|${i.field}`, i]));

  let foreignById = new Map();
  try {
    const foreign = JSON.parse(
      fs.readFileSync(path.join(ROOT, "reports/es-de-a1-a2-foreign-remnants-owner-decisions-final.json"), "utf8"),
    );
    foreignById = new Map(foreign.items.map((i) => [i.id, i]));
  } catch {
    /* optional */
  }

  const superseded = [];
  const enrich = (fail, kind) => ({ ...fail, kind, cardId: fail.cardId || foreignById.get(fail.id)?.cardId, field: fail.field || foreignById.get(fail.id)?.field, level: fail.level || foreignById.get(fail.id)?.level });

  const fails = [
    ...retention.luna1208.fail.map((f) => enrich(f, "luna1208")),
    ...retention.foreignLabot.fail.map((f) => enrich(f, "foreignLabot")),
    ...retention.foreignNelabot.fail.map((f) => enrich(f, "foreignNelabot")),
  ];

  for (const fail of fails) {
    if (!fail.cardId || !fail.field) continue;
    const ownerItem = ownerByField.get(`${fail.level}|${fail.cardId}|${fail.field}`) ||
      [...ownerByField.values()].find((i) => i.cardId === fail.cardId && i.field === fail.field);
    if (!ownerItem) continue;
    const { entry } = resolveEntry(wordsByLevel, fail.cardId);
    const actual = readCurrent(entry, ownerItem.field);
    if (String(actual) === String(ownerItem.new)) {
      superseded.push({ ...fail, ownerId: ownerItem.id, status: "SUPERSEDED_BY_FINAL_OWNER" });
    }
  }

  const applyLog = fs.existsSync(APPLY_LOG) ? JSON.parse(fs.readFileSync(APPLY_LOG, "utf8")) : null;
  const applyVerified = applyLog?.summary?.appliedVerified || 0;

  const foreignLabotSup = new Set(superseded.filter((s) => foreignById.get(s.id)?.status === "LABOT").map((s) => s.id));
  const foreignNelabotSup = new Set(superseded.filter((s) => foreignById.get(s.id)?.status === "NELABOT").map((s) => s.id));

  return {
    retention,
    superseded,
    applyVerified,
    lunaEffective: retention.luna1208.ok + superseded.filter((s) => s.kind === "luna1208").length,
    foreignLabotEffective: retention.foreignLabot.ok + foreignLabotSup.size,
    foreignNelabotEffective: retention.foreignNelabot.ok + foreignNelabotSup.size,
  };
}

function verifyNoOp(wordsByLevel, regressionJson) {
  const results = [];
  for (const id of NO_OP_IDS) {
    const finding = regressionJson.items.find((f) => f.id === id);
    const { entry } = resolveEntry(wordsByLevel, finding.cardId);
    const field = finding.field === "esText" || finding.field === "esMain" ? "lv" : finding.field;
    const actual = readCurrent(entry, field);
    results.push({ id, retained: String(actual) === String(finding.current), actual, expected: finding.current });
  }
  return results;
}

function analyzeCollector(collectorData) {
  const raw = [];
  const falsePositives = [];
  const real = [];
  for (const lvl of collectorData.levels || []) {
    for (const issue of lvl.foreignRemnants?.issues || []) {
      raw.push({ ...issue, level: lvl.level?.toUpperCase() || "A1" });
      if (isCollectorFalsePositive(issue)) falsePositives.push(issue);
      else real.push(issue);
    }
  }
  return { raw: raw.length, falsePositives: falsePositives.length, real: real.length, unresolved: real.length, items: real };
}

function mergeValidatedFindings(deterministic, lunaConverted) {
  const all = [...deterministic, ...lunaConverted.findings, ...lunaConverted.reviewRequired];
  const out = [];
  const seen = new Set();
  for (const f of all) {
    const key = `${f.cardId}|${f.field}|${f.current}|${f.validation}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(f);
  }
  return out.map((f, i) => ({ ...f, id: `ES-A1A2-MICRO-${String(i + 1).padStart(4, "0")}` }));
}

module.exports = {
  runClosureMicroTargets,
  runRetentionWithSuperseded,
  verifyNoOp,
  analyzeCollector,
  convertClosureLunaFindings,
  loadOwnerAppliedMap,
  mergeValidatedFindings,
  NO_OP_IDS,
};
