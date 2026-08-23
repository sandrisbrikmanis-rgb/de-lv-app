#!/usr/bin/env node
"use strict";
/**
 * ET–DE Verbs full audit collector (READ-ONLY).
 * Usage: node scripts/audit-et-verbs-collect.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const DE_FILE = path.join(ROOT, "data/verbs.js");
const DA_FILE = path.join(ROOT, "data/et/verbs.js");
const WWW_FILE = path.join(ROOT, "www/data/et/verbs.js");
const OUT = path.join(ROOT, "reports/temp/et-verbs-audit-data.json");
const BATCH_DIR = path.join(ROOT, "reports/temp/et-verbs-audit-batches");
const EXPECTED_VERBS = 189;
const FORM_KEYS = ["infinitiv", "praesens", "imperfektIndikativ", "imperfektKonjunktiv", "partizipVergangenheit"];
const BATCH_SIZE = 50;

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(viņš|viņa|viņam|viņi|es |tu |mēs|jūs|latviešu|vācu|cept|kož|pavēl|sākt|iz-|sākts|pavēlēts|ceps|cepa|ceptu)\b/i;
const EN_PATTERNS = /\b(Translation:|TODO|TBD|instead of|you are|meaning:|to bake|to command)\b/i;
const CS_PATTERNS = /\b(přelož|použij|sloveso|podstatné)\b/i;
const PL_PATTERNS = /\b(przetłumacz|czasownik)\b/i;
const BS_PATTERNS = /\b(prijevod|glagol)\b/i;
const ET_LT_PATTERNS = /\b(tõlgi|žodis|daiktavardis)\b/i;
const RU_UA_PATTERNS = /\b(перевед|переклад|глагол)\b/i;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;
const MOJIBAKE = /â€|Ã.|Ô./;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|Translation:|Pārskatīti:)/;

function loadVerbs(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.VERB_ENTRIES;
}

function verbId(index) {
  return `verb-${index}`;
}

function batchLabel(start, end) {
  return `batch-${String(start).padStart(3, "0")}-${String(end).padStart(3, "0")}`;
}

function normalizeText(text) {
  return String(text ?? "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function classifyForeign(text) {
  if (typeof text !== "string" || !text.trim()) return [];
  const reasons = [];
  if (LV_DIAC.test(text)) reasons.push("LV_DIAC");
  if (LV_WORDS.test(text)) reasons.push("LV");
  if (EN_PATTERNS.test(text)) reasons.push("EN");
  if (CS_PATTERNS.test(text)) reasons.push("CS");
  if (PL_PATTERNS.test(text)) reasons.push("PL");
  if (BS_PATTERNS.test(text)) reasons.push("BS");
  if (ET_LT_PATTERNS.test(text)) reasons.push("ET_LT");
  if (RU_UA_PATTERNS.test(text)) reasons.push("RU_UA");
  if (ZERO_WIDTH.test(text)) reasons.push("ZERO_WIDTH");
  if (MOJIBAKE.test(text)) reasons.push("MOJIBAKE");
  if (PLACEHOLDER.test(text)) reasons.push("PLACEHOLDER");
  return reasons;
}

function addFinding(data, f) {
  const key = `${f.cardId}|${f.field}|${normalizeText(f.currentEt)}|${f.problem}`;
  if (data._seen.has(key)) return;
  data._seen.add(key);
  data.findings.push(f);
  data.rawCandidates += 1;
}

function main() {
  const deRef = loadVerbs(DE_FILE);
  const da = loadVerbs(DA_FILE);
  const www = loadVerbs(WWW_FILE);

  const data = {
    meta: {
      date: new Date().toISOString().slice(0, 10),
      auditor: "GPT-5.6 Luna",
      mode: "READ-ONLY",
      section: "Darbības vārdi / Verbs",
      deFile: "data/verbs.js",
      daFile: "data/et/verbs.js",
      wwwFile: "www/data/et/verbs.js",
      verbsTotal: EXPECTED_VERBS,
      verbFormsTotal: EXPECTED_VERBS * FORM_KEYS.length,
      verbsAudited: 0,
      verbFormsAudited: 0,
      batchSize: BATCH_SIZE,
      batchCount: Math.ceil(EXPECTED_VERBS / BATCH_SIZE),
      productionChanges: 0,
      deChanges: 0,
    },
    structural: { syntaxPass: false, mirrorPass: false, countPass: false, deIntegrityPass: false, idOrderPass: false, issues: [] },
    batches: [],
    findings: [],
    falsePositives: [],
    rawCandidates: 0,
    verbs: [],
    _seen: new Set(),
  };

  let syntaxPass = false;
  try {
    execSync("node --check data/et/verbs.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/et/verbs.js", { cwd: ROOT, stdio: "pipe" });
    syntaxPass = true;
  } catch {
    data.structural.issues.push({ severity: "CRITICAL", problem: "JS syntax check failed" });
  }
  data.structural.syntaxPass = syntaxPass;

  const mirrorPass = fs.readFileSync(DA_FILE).equals(fs.readFileSync(WWW_FILE));
  data.structural.mirrorPass = mirrorPass;
  if (!mirrorPass) data.structural.issues.push({ severity: "CRITICAL", problem: "data/et/verbs.js ≠ www mirror" });

  const countPass = deRef.length === da.length && da.length === EXPECTED_VERBS;
  data.structural.countPass = countPass;
  if (!countPass) {
    data.structural.issues.push({
      severity: "CRITICAL",
      problem: `Count mismatch: DE=${deRef.length}, DA=${da.length}, expected=${EXPECTED_VERBS}`,
    });
  }

  let deIntegrityPass = true;
  const infinitivDaMap = new Map();

  for (let i = 0; i < da.length; i++) {
    const entry = da[i];
    const deEntry = deRef[i];
    const cardId = verbId(i);
    const batchStart = Math.floor(i / BATCH_SIZE) * BATCH_SIZE + 1;
    const batchEnd = Math.min(batchStart + BATCH_SIZE - 1, da.length);
    const batch = batchLabel(batchStart, batchEnd);
    const infinitivDe = entry.infinitiv?.de || "";
    const infinitivDa = entry.infinitiv?.lv || "";

    for (const formKey of FORM_KEYS) {
      const deForm = deEntry?.[formKey]?.de;
      const daForm = entry?.[formKey];
      if (!daForm || typeof daForm !== "object") {
        addFinding(data, {
          cardId,
          index: i,
          batch,
          field: formKey,
          deContext: infinitivDe,
          currentEt: "",
          proposedEt: "(missing form object)",
          problem: `Missing form object: ${formKey}`,
          rationale: "Every verb must have all conjugation forms",
          severity: "CRITICAL",
          status: "PENDING",
        });
        continue;
      }
      if (daForm.de !== deForm) {
        deIntegrityPass = false;
        addFinding(data, {
          cardId,
          index: i,
          batch,
          field: `${formKey}.de`,
          deContext: deForm,
          currentEt: daForm.de,
          proposedEt: deForm,
          problem: "DE form mismatch vs etalon (order/integrity)",
          rationale: "DE = STRICT READ-ONLY",
          severity: "CRITICAL",
          status: "NEEDS_SOURCE_REVIEW",
        });
      }
    }

    const verbPayload = {
      cardId,
      index: i,
      batch,
      infinitivDe,
      infinitivDa,
      forms: FORM_KEYS.map((formKey) => ({
        field: formKey,
        de: entry[formKey]?.de || "",
        daCurrent: entry[formKey]?.lv || "",
      })),
    };
    data.verbs.push(verbPayload);
    data.meta.verbFormsAudited += FORM_KEYS.length;

    for (const formKey of FORM_KEYS) {
      const deVal = entry[formKey]?.de || "";
      const daVal = entry[formKey]?.lv || "";
      const field = `${formKey}.lv`;

      if (!daVal.trim()) {
        addFinding(data, {
          cardId,
          index: i,
          batch,
          field,
          deContext: deVal,
          currentEt: daVal,
          proposedEt: "(Estonian translation needed)",
          problem: "Empty Estonian translation",
          rationale: "Every verb form must have ET text",
          severity: "CRITICAL",
          status: "PENDING",
        });
      }

      const foreign = classifyForeign(daVal);
      if (foreign.some((r) => ["LV", "LV_DIAC", "EN", "CS", "PL", "BS", "ET_LT", "RU_UA"].includes(r))) {
        addFinding(data, {
          cardId,
          index: i,
          batch,
          field,
          deContext: deVal,
          currentEt: daVal,
          proposedEt: "(Natural Estonian)",
          problem: `Foreign remnant: ${foreign.join(", ")}`,
          rationale: "ET must be natural Estonian without foreign fragments",
          severity: "HIGH",
          status: "PENDING",
          candidate: true,
        });
      }

      if (/[•]/.test(daVal) || /\s\/\s/.test(daVal)) {
        addFinding(data, {
          cardId,
          index: i,
          batch,
          field,
          deContext: deVal,
          currentEt: daVal,
          proposedEt: "(Single natural Estonian form)",
          problem: "Multi-variant translation chain (• or /)",
          rationale: "Verb card is not a dictionary; keep one teaching form",
          severity: formKey === "infinitiv" ? "MEDIUM" : "HIGH",
          status: "PENDING",
          candidate: true,
        });
      }

      if (formKey === "partizipVergangenheit" && /\b(iz-|sākts|pavēlēts|izcepts|sakosts)\b/i.test(daVal)) {
        addFinding(data, {
          cardId,
          index: i,
          batch,
          field,
          deContext: deVal,
          currentEt: daVal,
          proposedEt: "(Estonian past participle)",
          problem: "Possible LV-style participle remnant in Partizip II field",
          rationale: "Partizip II should use Estonian participle forms",
          severity: "HIGH",
          status: "PENDING",
          candidate: true,
        });
      }

      if (
        (formKey === "praesens" || formKey === "imperfektIndikativ") &&
        deVal.toLowerCase().startsWith("er ") &&
        !/^ta\s/i.test(daVal.trim()) &&
        !/^(ma|me|sa|nad)\s/i.test(daVal.trim())
      ) {
        addFinding(data, {
          cardId,
          index: i,
          batch,
          field,
          deContext: deVal,
          currentEt: daVal,
          proposedEt: "(Natural Estonian: ta …)",
          problem: "Unnatural ET word order for person form",
          rationale: "Estonian er-forms typically use ta + verb (e.g. ta küpsetab)",
          severity: "MEDIUM",
          status: "PENDING",
          candidate: true,
        });
      }
    }

    if (infinitivDe.startsWith("sich ") || infinitivDe.includes(" sich")) {
      const reflexiveDa = infinitivDa.toLowerCase();
      if (!reflexiveDa.includes("end") && !reflexiveDa.includes("ennast")) {
        addFinding(data, {
          cardId,
          index: i,
          batch,
          field: "infinitiv.lv",
          deContext: infinitivDe,
          currentEt: infinitivDa,
          proposedEt: "(Estonian with reflexive end/ennast)",
          problem: "Reflexive DE verb (sich) without reflexive marker in ET infinitiv",
          rationale: "Reflexive verbs need reflexive meaning preserved",
          severity: "HIGH",
          status: "PENDING",
          candidate: true,
        });
      }
    }

    const normInf = normalizeText(infinitivDa.split(/[•/]/)[0]);
    if (normInf && infinitivDaMap.has(normInf)) {
      const other = infinitivDaMap.get(normInf);
      if (other.infinitivDe !== infinitivDe) {
        addFinding(data, {
          cardId,
          index: i,
          batch,
          field: "infinitiv.lv",
          deContext: infinitivDe,
          currentEt: infinitivDa,
          proposedEt: "(Distinct Estonian for this verb)",
          problem: `Duplicate infinitiv ET shared with ${other.cardId} (DE: ${other.infinitivDe})`,
          rationale: "Different German verbs should not share identical ET infinitiv",
          severity: "MEDIUM",
          status: "PENDING",
          candidate: true,
        });
      }
    } else if (normInf) {
      infinitivDaMap.set(normInf, { cardId, infinitivDe });
    }
  }

  data.structural.deIntegrityPass = deIntegrityPass;
  data.structural.idOrderPass = deIntegrityPass;
  data.meta.verbsAudited = data.verbs.length;

  data.findings.forEach((f, idx) => {
    if (!f.id) f.id = `ET-VERB-${String(idx + 1).padStart(4, "0")}`;
  });

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.mkdirSync(BATCH_DIR, { recursive: true });

  for (let b = 0; b < data.meta.batchCount; b++) {
    const start = b * BATCH_SIZE;
    const end = Math.min(start + BATCH_SIZE, da.length);
    const batchVerbs = data.verbs.slice(start, end);
    const label = batchLabel(start + 1, end);
    const batchFile = path.join(BATCH_DIR, `${label}.json`);
    fs.writeFileSync(
      batchFile,
      JSON.stringify({ batch: label, startIndex: start, endIndex: end - 1, count: batchVerbs.length, verbs: batchVerbs }, null, 2)
    );
    data.batches.push({ batch: label, file: batchFile, count: batchVerbs.length, start, end: end - 1 });
  }

  delete data._seen;
  fs.writeFileSync(OUT, JSON.stringify(data, null, 2));

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  data.findings.forEach((f) => {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
  });

  console.log(
    JSON.stringify(
      {
        verbsTotal: data.meta.verbsTotal,
        verbFormsTotal: data.meta.verbFormsTotal,
        verbsAudited: data.meta.verbsAudited,
        verbFormsAudited: data.meta.verbFormsAudited,
        batchCount: data.meta.batchCount,
        rawCandidates: data.rawCandidates,
        findings: data.findings.length,
        bySev,
        structural: data.structural,
        out: OUT,
      },
      null,
      2
    )
  );
}

main();
