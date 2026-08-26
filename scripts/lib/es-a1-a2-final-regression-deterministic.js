#!/usr/bin/env node
"use strict";
/**
 * Deterministic candidates for ES-DE A1+A2 final linguistic regression.
 */
const { getAt } = require("./da-a1-owner-path");
const { findEntry, readCurrent } = require("./es-a1-a2-final-regression-retention");

const SEVERITY_MAP = {
  CRITICAL: "KRITISKA",
  HIGH: "AUGSTA",
  MEDIUM: "VIDĒJA",
  LOW: "ZEMA",
};

function mapSeverity(s) {
  const u = String(s || "VIDĒJA").toUpperCase();
  return SEVERITY_MAP[u] || (u === "KRITISKA" || u === "AUGSTA" || u === "VIDĒJA" || u === "ZEMA" ? u : "VIDĒJA");
}

function makeFinding(partial, seq) {
  return {
    id: `ES-A1A2-FINAL-${String(seq).padStart(4, "0")}`,
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

function isCollectorFalsePositive(issue) {
  const text = String(issue.text || "");
  const cat = issue.category || "";
  if (cat === "IT_REMNANT" && /\bpoco\b/i.test(text)) return true;
  if (cat === "IT_REMNANT" && issue.de && new RegExp(`\\b${issue.de.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(text)) {
    return true;
  }
  if (/\b(kurz|sein|zur|zum|kleiden|abfahren)\b/i.test(text) && cat === "IT_REMNANT") return true;
  return false;
}

function analyzeCollectorForeignRemnants(collectorData) {
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
  return { raw, falsePositives, real };
}

function runMicroTargets(wordsByLevel, seqStart) {
  const findings = [];
  let seq = seqStart;

  const add = (p) => {
    findings.push(makeFinding(p, seq++));
  };

  const abfahren = findEntry(wordsByLevel.a2, "a2-abfahren", "a2");
  if (abfahren) {
    const ex = abfahren.study?.examples?.[4];
    if (ex?.de === "Wir fahren die Strecke langsam ab." && ex.lv) {
      add({
        severity: "AUGSTA",
        category: "SEMANTICS",
        level: "A2",
        cardId: "a2-abfahren",
        de: abfahren.de,
        field: "study.examples[4].lv",
        current: ex.lv,
        proposedNew: "Recorremos el trayecto lentamente.",
        validation: "REAL",
        reason:
          "DE «Wir fahren die Strecke langsam ab» nozīmē lēni veikt maršrutu, nevis «poco a poco nos ponemos en marcha».",
        source: "micro_target",
      });
    }
  }

  const vor = findEntry(wordsByLevel.a1, "a1-vor", "a1");
  if (vor) {
    const ex = vor.study?.examples?.[3];
    if (ex?.de === "Nach dem Essen gehen wir spazieren." && /Antes de comer/i.test(ex.lv || "")) {
      add({
        severity: "AUGSTA",
        category: "SEMANTICS",
        level: "A1",
        cardId: "a1-vor",
        de: vor.de,
        field: "study.examples[3].lv",
        current: ex.lv,
        proposedNew: "Después de comer salimos a pasear.",
        validation: "REAL",
        reason: "«Nach dem Essen» = pēc ēšanas → despuēs de comer, nevis antes de comer.",
        source: "micro_target",
      });
    }
  }

  const vom = findEntry(wordsByLevel.a1, "a1-vom", "a1");
  if (vom) {
    const ex = vom.study?.examples?.find((e) => e.de === "Das ist vom Markt.");
    if (ex && /mercado/i.test(ex.lv) && !/del mercado|de el mercado/i.test(ex.lv)) {
      add({
        severity: "AUGSTA",
        category: "SEMANTICS",
        level: "A1",
        cardId: "a1-vom",
        de: vom.de,
        field: `study.examples[${vom.study.examples.indexOf(ex)}].lv`,
        current: ex.lv,
        proposedNew: "Es del mercado.",
        validation: "REAL",
        reason: "«vom Markt» izsaka izcelsmi no tirgus, nevis atrašanos tirgū.",
        source: "micro_target",
      });
    }
  }

  const zum = findEntry(wordsByLevel.a1, "a1-zum", "a1");
  if (zum) {
    const zur = zum.study?.comparison?.find((c) => c.word === "zur");
    if (zur?.meaning && /masculino|neutro/i.test(zur.meaning)) {
      add({
        severity: "AUGSTA",
        category: "PEDAGOGY",
        level: "A1",
        cardId: "a1-zum",
        de: "zur",
        field: "study.comparison[1].meaning",
        current: zur.meaning,
        proposedNew: "a / hacia (género femenino: zu der)",
        validation: "REAL",
        reason: "«zur» = zu der (femenino); skaidrojums kļūdaini norāda masculino/neutro.",
        source: "micro_target",
      });
    }
    if (zur?.example && /uz skolu|skolu/i.test(zur.example)) {
      add({
        severity: "VIDĒJA",
        category: "FOREIGN_REMNANT",
        level: "A1",
        cardId: "a1-zum",
        de: "zur",
        field: "study.comparison[1].example",
        current: zur.example,
        proposedNew: "zur Schule – a la escuela",
        validation: "REAL",
        reason: "Comparison piemērā palicis latvisks fragments «uz skolu».",
        source: "micro_target",
      });
    }
    const tip = zum.study?.tip;
    const tipText = Array.isArray(tip) ? tip.join(" ") : tip?.text || "";
    if (
      tipText &&
      !/zur\s*=\s*zu der|zu\s*\+\s*der\s*[→\-–>]\s*zur|zu der.*zur/i.test(tipText)
    ) {
      add({
        severity: "VIDĒJA",
        category: "PEDAGOGY",
        level: "A1",
        cardId: "a1-zum",
        de: "zur",
        field: Array.isArray(tip) ? "study.tip" : "study.tip.text",
        current: tipText,
        proposedNew: "",
        validation: "OWNER_REVIEW_REQUIRED",
        reason: "Pārbaudīt, vai tip skaidri norāda zur = zu der.",
        source: "micro_target",
      });
    }
  }

  const sein = findEntry(wordsByLevel.a1, "a1-sein", "a1");
  if (sein) {
    const imp = sein.study?.important?.[1];
    if (imp && /yo soy.*yo soy/i.test(imp)) {
      add({
        severity: "VIDĒJA",
        category: "PEDAGOGY",
        level: "A1",
        cardId: "a1-sein",
        de: sein.de,
        field: "study.important[1]",
        current: imp,
        proposedNew: "Ich bin es «yo soy/estoy», nevis «yo soy» divreiz.",
        validation: "OWNER_REVIEW_REQUIRED",
        reason: "Important teikums ir semantiski apjuksts (dubults «yo soy»).",
        source: "micro_target",
      });
    }
    const purple0 = getAt(sein, "study.sectionAccents.examples[1].lv.purple[0]");
    if (purple0 && /^esi$/i.test(String(purple0))) {
      add({
        severity: "VIDĒJA",
        category: "SECTION_ACCENTS",
        level: "A1",
        cardId: "a1-sein",
        de: sein.de,
        field: "study.sectionAccents.examples[1].lv.purple[0]",
        current: getAt(sein, "study.sectionAccents.examples[1].lv.purple[0]") || "esi",
        proposedNew: "cansado",
        validation: "REAL",
        reason: "sectionAccents fragments «esi» nav spāņu; jāatbilst «Estás cansado.»",
        source: "micro_target",
      });
    }
  }

  const kurz = findEntry(wordsByLevel.a2, "a2-kurz", "a2");
  if (kurz) {
    const imp = kurz.study?.important?.[1];
    const expected =
      "Al poco tiempo suele quedarse calvo; kurz significa corto o por poco tiempo.";
    if (imp && imp !== expected && /kurz more/i.test(imp)) {
      add({
        severity: "VIDĒJA",
        category: "SEMANTICS",
        level: "A2",
        cardId: "a2-kurz",
        de: kurz.de,
        field: "study.important[1]",
        current: imp,
        proposedNew: expected,
        validation: "REAL",
        reason: "«kurz more» avota defekts; pēc OWNER labojuma vēl jāpārbauda gala teksts.",
        source: "micro_target",
      });
    }
  }

  const newStudyDes = [
    "Besuch",
    "besuchen",
    "Fußball",
    "ganz",
    "gefallen",
    "Geschichte",
    "Geschwister",
    "Großeltern",
    "Hand",
    "hübsch",
  ];
  for (const de of newStudyDes) {
    const entry = wordsByLevel.a1.find((e) => e.de === de && e.study);
    if (!entry) {
      add({
        severity: "KRITISKA",
        category: "STRUCTURE",
        level: "A1",
        cardId: `a1-${de.toLowerCase()}`,
        de,
        field: "study",
        current: "(missing)",
        proposedNew: "",
        validation: "REAL",
        reason: `Jaunā A1 Study kartīte «${de}» nav atrasta.`,
        source: "micro_target",
      });
    }
  }

  return { findings, nextSeq: seq };
}

function validateLunaFinding(f) {
  const current = String(f.currentEs || f.current || "");
  const cat = String(f.category || "").toUpperCase();
  const reason = String(f.reason || "");

  if (NON_ERROR_CATEGORIES.has(cat)) {
    return { validation: "FALSE_POSITIVE", reason: `Luna category ${cat}` };
  }
  if (cat === "FOREIGN_REMNANT" && /\bpoco\b/i.test(current) && !/[āēīūģķļņ]/.test(current)) {
    return { validation: "FALSE_POSITIVE", reason: "Spānņu «poco»" };
  }
  if (cat === "FOREIGN_REMNANT" && f.de && new RegExp(`\\b${f.de}\\b`, "i").test(current)) {
    return { validation: "FALSE_POSITIVE", reason: "Vācu mācību termins kontekstā" };
  }
  if (cat === "STYLE_ONLY" || reason.toLowerCase().includes("style only")) {
    return { validation: "FALSE_POSITIVE", reason: "Stilistiska preference" };
  }
  if (cat === "PROJECT_CONVENTION") {
    return { validation: "FALSE_POSITIVE", reason: "Project convention" };
  }
  if (!f.proposedEs && !f.proposedNew) {
    return { validation: "OWNER_REVIEW_REQUIRED", reason: "Nav proposed fix" };
  }
  return { validation: "REAL", reason: reason || "Luna validated" };
}

const NON_ERROR_CATEGORIES = new Set([
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

function normalizeField(field) {
  if (field === "esText" || field === "esMain") return "lv";
  return field;
}

function normalizeCategory(category) {
  const cat = String(category || "TRANSLATION").toUpperCase();
  if (cat === "STUDY") return "STUDY_CONSISTENCY";
  if (cat === "NATURALNESS") return "TRANSLATION";
  return cat;
}

function convertLunaFindings(lunaFindings, seqStart) {
  const converted = [];
  const falsePositives = [];
  const reviewRequired = [];
  let seq = seqStart;

  for (const f of lunaFindings) {
    if (f.status === "PASS") continue;
    const v = validateLunaFinding(f);
    const item = makeFinding(
      {
        severity: mapSeverity(f.severity),
        category: normalizeCategory(f.category),
        level: f.level || (f.cardId?.startsWith("a2-") ? "A2" : "A1"),
        cardId: f.cardId,
        de: f.de,
        field: normalizeField(f.field),
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

function dedupeFindings(items) {
  const out = [];
  const seen = new Set();
  for (const f of items) {
    const key = `${f.cardId}|${f.field}|${f.current}|${f.validation}`;
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(f);
  }
  return out;
}

function mergeFindings(deterministic, lunaReal, lunaReview) {
  const all = dedupeFindings([
    ...deterministic.filter((f) => f.validation === "REAL" || f.validation === "OWNER_REVIEW_REQUIRED"),
    ...lunaReal,
    ...lunaReview,
  ]);
  return all.map((f, i) => ({ ...f, id: `ES-A1A2-FINAL-${String(i + 1).padStart(4, "0")}` }));
}

module.exports = {
  mapSeverity,
  analyzeCollectorForeignRemnants,
  runMicroTargets,
  convertLunaFindings,
  mergeFindings,
  validateLunaFinding,
  isCollectorFalsePositive,
};
