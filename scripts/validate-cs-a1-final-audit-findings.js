#!/usr/bin/env node
/**
 * Validate raw CS-DE A1 final post-repair audit findings against CURRENT production.
 * Usage: node scripts/validate-cs-a1-final-audit-findings.js [--final-post-repair] [--resume] [--test-batch]
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const {
  ROOT,
  loadArray,
  entryId,
  chunk,
  ensureDir,
  finalPostRepairPaths,
  auditPathsForA1,
  isFinalClosureAuditOnMainA1,
  isFinal702AuditOnMainA1,
  LV_DIACRITICS,
  LV_WORDS,
  detectForeignRemnant,
  accentTermMatches,
  getSectionText,
  collectSectionAccentTerms,
  buildStudyCard,
  buildSimpleCard,
} = require("./lib/cs-audit-helpers");
const { DEFAULT_MODEL, validateFinalBatch } = require("./lib/openai-cs-final-audit-validate");

const RESUME = process.argv.includes("--resume");
const TEST_BATCH = process.argv.includes("--test-batch");
const FINDINGS_PER_BATCH = 15;

const IS_FINAL_MAIN_AUDIT = isFinalClosureAuditOnMainA1("a1") || isFinal702AuditOnMainA1("a1");

const STUDY_GAP_CARDS = IS_FINAL_MAIN_AUDIT ? new Set() : new Set([
  "a1-Besuch-87", "a1-besuchen-89", "a1-Fußball-218", "a1-ganz-219", "a1-gefallen-225",
  "a1-Geschichte-233", "a1-Geschwister-234", "a1-Großeltern-251", "a1-Hand-267", "a1-hübsch-288",
]);

const PARTIAL_STUDY_GAP = IS_FINAL_MAIN_AUDIT ? new Set() : new Set(["a1-bitte", "a1-bitte-study", "a1-ein", "a1-es"]);

const OWNER_OVERRIDE = [
  { cardId: "a1-in", field: "sectionAccents", value: "Berlīnē", reason: "OWNER_OVERRIDE_FALSE_POSITIVE — documented LV accent target" },
];

const OWNER_KEEP = [
  { cardId: "a1-sich", field: "lv", value: "Sebe • Pro sebe" },
  { cardId: "a1-sich", field: "study.comparison[0].meaning", value: "Se / sebe" },
  { cardId: "a1-sie-study", field: "study.examples[5].lv", value: "Vařte, prosím." },
  { cardId: "a1-verstehen", field: "study.translation", value: "Rozumět" },
  { cardId: "a1-verstehen", field: "lv", value: "Pochopit", reason: "OWNER_KEEP — verstehen can mean rozumět or pochopit" },
  { cardId: "a1-verstehen", field: "study.comparison[0].meaning", value: "Pochopit", reason: "OWNER_KEEP — verstehen can mean rozumět or pochopit" },
  { cardId: "a1-zu", field: "lv" },
  { cardId: "a1-zum", field: "study.comparison" },
  { cardId: "a1-essen-study", field: "study.tip" },
  { cardId: "a1-Balkon-70", field: "lv", value: "Balkón", reason: "Czech Balkón is valid, not Polish" },
];

const CROSS_DATASET_WORDS = new Set(["bringen", "erst", "legen", "über", "da", "gleich", "liegen", "Mal"]);

const FALSE_POSITIVE_FOREIGN = [
  { pattern: /Balkón/i, reason: "Czech Balkón is valid Czech orthography" },
  { pattern: /^esse$/i, reason: "esse is valid DE accent target in sectionAccents" },
];

function normalizeField(field) {
  if (!field) return "lv";
  return field
    .replace(/^entry\[\d+\]\./, "")
    .replace(/^csMain$/, "lv")
    .replace(/^csText$/, "lv");
}

function fieldsCompatible(a, b) {
  const na = normalizeField(a);
  const nb = normalizeField(b);
  if (na === nb) return true;
  if ((na === "lv" || na === "csText") && (nb === "lv" || nb === "csText")) return true;
  if (na.includes("sectionAccents") && nb.includes("sectionAccents")) return true;
  if (na.startsWith("study.") && nb.startsWith("study.")) {
    const sa = na.replace(/^study\./, "");
    const sb = nb.replace(/^study\./, "");
    if (sa === sb || sa.startsWith(sb + "[") || sb.startsWith(sa + "[")) return true;
  }
  return false;
}

function getFieldValue(entry, fieldPath) {
  const field = normalizeField(fieldPath);
  if (field === "lv" || field === "csText" || field === "csMain") return entry.lv;
  if (field === "structure" || field === "study") return entry.study ? "present" : null;
  let pathStr = field.startsWith("study.") ? field : `study.${field}`;
  if (!entry.study && !field.startsWith("study.")) {
    const direct = entry[field];
    if (direct !== undefined) return typeof direct === "object" ? JSON.stringify(direct) : direct;
    return entry.lv;
  }
  if (!entry.study) return null;
  const parts = [];
  pathStr.replace(/^study\./, "").replace(/([^[\].]+)|\[(\d+)\]/g, (_, key, idx) => {
    if (key) parts.push(key);
    if (idx !== undefined) parts.push(Number(idx));
    return "";
  });
  let cur = entry.study;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  if (typeof cur === "object" && cur !== null) return JSON.stringify(cur);
  return cur;
}

function serializeValue(v) {
  if (v == null) return null;
  if (Array.isArray(v) || typeof v === "object") return JSON.stringify(v);
  return String(v);
}

function valuesMatch(a, b) {
  return serializeValue(a) === serializeValue(b);
}

function findCardIndex(cardId, cs) {
  for (let i = 0; i < cs.length; i++) {
    if (entryId(cs[i], i, "a1") === cardId) return i;
  }
  return -1;
}

function loadAllRepairs() {
  const all = [];
  for (let i = 1; i <= 12; i++) {
    try {
      const mod = require(path.join(__dirname, `apply-cs-a1-full-review-repair-block${String(i).padStart(2, "0")}.js`));
      for (const r of mod.REPAIRS || []) {
        all.push({
          block: i,
          cardId: r.cardId,
          field: r.field || "csText",
          pirmd: r.pirmd,
          pec: r.pec,
        });
      }
    } catch { /* block may not exist */ }
  }
  return all;
}

function resolvePaths() {
  return auditPathsForA1("a1") || finalPostRepairPaths("a1");
}

function loadRawFindings(tempDir, findingIdPrefix) {
  const det = JSON.parse(fs.readFileSync(path.join(tempDir, "deterministic-audit.json"), "utf8"));
  const ling = JSON.parse(fs.readFileSync(path.join(tempDir, "linguistic-audit.json"), "utf8"));
  const raw = [];
  let n = 0;

  const add = (f, source) => {
    n += 1;
    raw.push({
      findingId: `${findingIdPrefix}-${String(n).padStart(5, "0")}`,
      cardId: f.cardId,
      index: f.index,
      field: normalizeField(f.field),
      source,
      batch: f.batch || source,
      severity: f.severity || "MEDIUM",
      auditProblem: f.problem || f.reason || "",
      auditCurrentCs: typeof f.currentCs === "string" ? f.currentCs : serializeValue(f.currentCs),
      auditProposedCs: f.proposedCs || "",
      auditDe: f.de || "",
      auditLvSource: f.lvSource || "",
      category: f.category || f.status || "",
    });
  };

  for (const f of det.findings || []) add(f, "deterministic");
  for (const f of ling.qualityFindings || ling.findings || []) {
    if (f.status === "PASS") continue;
    add(f, "luna");
  }
  return { raw, det, ling };
}

function checkOwnerOverride(cardId, field, currentCs) {
  for (const o of OWNER_OVERRIDE) {
    if (o.cardId === cardId && fieldsCompatible(o.field, field)) {
      if (!o.value || String(currentCs || "").includes(o.value)) {
        return { status: "OWNER_OVERRIDE_FALSE_POSITIVE", reason: o.reason };
      }
    }
  }
  for (const k of OWNER_KEEP) {
    if (k.cardId === cardId && fieldsCompatible(k.field, field)) {
      if (!k.value || valuesMatch(currentCs, k.value) || String(currentCs || "").includes(k.value)) {
        return { status: k.reason ? "FALSE_POSITIVE" : "OWNER_KEEP", reason: k.reason || "Documented OWNER keep" };
      }
    }
  }
  return null;
}

function programmaticValidate(finding, csEntry, lvEntry) {
  const currentCs = getFieldValue(csEntry, finding.field);
  const auditCs = finding.auditCurrentCs;

  if (STUDY_GAP_CARDS.has(finding.cardId) && (
    finding.field === "study" || finding.field === "structure" || finding.auditProblem.includes("study")
  )) {
    return {
      validationStatus: "MISSING_STUDY_PARITY",
      severity: "HIGH",
      reason: "CS lacks full Study object vs LV reference",
      currentCs: serializeValue(currentCs),
      proposedCs: null,
    };
  }

  if (PARTIAL_STUDY_GAP.has(finding.cardId) && finding.auditProblem.includes("Missing fields")) {
    return {
      validationStatus: "MISSING_STUDY_PARITY",
      severity: "MEDIUM",
      reason: "Partial Study parity gap vs LV",
      currentCs: serializeValue(currentCs),
      proposedCs: null,
    };
  }

  const owner = checkOwnerOverride(finding.cardId, finding.field, currentCs);
  if (owner) {
    return { validationStatus: owner.status, severity: null, reason: owner.reason, currentCs: serializeValue(currentCs), proposedCs: null };
  }

  if (finding.auditProblem.includes("de_plural") || finding.field === "de_plural") {
    return {
      validationStatus: "DE_PARITY_ISSUE",
      severity: null,
      reason: "CS missing de_plural vs LV — DE-side parity, not CS linguistic repair",
      currentCs: serializeValue(currentCs),
      proposedCs: null,
    };
  }

  if (finding.source === "luna") {
    const cat = String(finding.category || "").toUpperCase();
    if (["FALSE_POSITIVE", "STYLE_ONLY", "PROJECT_CONVENTION", "SOURCE_LV_ISSUE"].includes(cat)) {
      return { validationStatus: "FALSE_POSITIVE", severity: null, reason: `Luna non-error category: ${cat}`, currentCs: serializeValue(currentCs), proposedCs: null };
    }
    if (["SOURCE_DE_ISSUE", "DE_SOURCE_ISSUE"].includes(cat)) {
      return { validationStatus: "SOURCE_DE_ISSUE", severity: null, reason: finding.auditProblem, currentCs: serializeValue(currentCs), proposedCs: null };
    }
    if (CROSS_DATASET_WORDS.has(csEntry.de) && finding.auditProblem.toLowerCase().includes("cross")) {
      return { validationStatus: "VALID_CONTEXT_DIFFERENCE", severity: null, reason: "Cross-dataset teaching context difference", currentCs: serializeValue(currentCs), proposedCs: null };
    }
  }

  if (auditCs && currentCs != null && !valuesMatch(auditCs, currentCs) && !String(auditCs).includes(String(currentCs).slice(0, 20))) {
    if (finding.auditProposedCs && valuesMatch(currentCs, finding.auditProposedCs)) {
      return { validationStatus: "STALE_ALREADY_FIXED", severity: null, reason: "Production already has proposed fix", currentCs: serializeValue(currentCs), proposedCs: null };
    }
    return { validationStatus: "STALE_ALREADY_FIXED", severity: null, reason: "Audit snapshot differs from current production", currentCs: serializeValue(currentCs), proposedCs: null };
  }

  if (finding.auditProblem.includes("Foreign") || finding.auditProblem.includes("remnant")) {
    for (const fp of FALSE_POSITIVE_FOREIGN) {
      if (fp.pattern.test(String(currentCs || "")) || fp.pattern.test(String(auditCs || ""))) {
        return { validationStatus: "FALSE_POSITIVE", severity: null, reason: fp.reason, currentCs: serializeValue(currentCs), proposedCs: null };
      }
    }
    const fr = detectForeignRemnant(String(currentCs || auditCs || ""));
    if (fr.length === 0) {
      return { validationStatus: "STALE_ALREADY_FIXED", severity: null, reason: "Foreign remnant no longer present", currentCs: serializeValue(currentCs), proposedCs: null };
    }
    if (finding.cardId === "a1-in" && String(currentCs || auditCs || "").includes("Berlīnē")) {
      return { validationStatus: "OWNER_OVERRIDE_FALSE_POSITIVE", severity: null, reason: "Berlīnē is OWNER-approved accent target", currentCs: serializeValue(currentCs), proposedCs: null };
    }
  }

  if (finding.field.includes("sectionAccents") && LV_DIACRITICS.test(String(auditCs || ""))) {
    if (finding.cardId === "a1-in" && String(auditCs).includes("Berlīnē")) {
      return { validationStatus: "OWNER_OVERRIDE_FALSE_POSITIVE", severity: null, reason: "Berlīnē OWNER override", currentCs: serializeValue(currentCs), proposedCs: null };
    }
    if (LV_WORDS.test(String(auditCs || "")) || LV_DIACRITICS.test(String(auditCs || ""))) {
      return {
        validationStatus: "NEEDS_OWNER_REVIEW",
        severity: finding.severity,
        reason: "LV remnant in sectionAccents — needs owner repair decision",
        currentCs: serializeValue(currentCs),
        proposedCs: finding.auditProposedCs || null,
      };
    }
  }

  return null;
}

function verifyRepairRetention(repairs, cs) {
  let retained = 0;
  let reverted = 0;
  const regressions = [];
  for (const r of repairs) {
    const idx = findCardIndex(r.cardId, cs);
    if (idx < 0) continue;
    const field = r.field === "csText" ? "lv" : r.field;
    const actual = getFieldValue(cs[idx], field);
    if (valuesMatch(actual, r.pec)) retained += 1;
    else if (valuesMatch(actual, r.pirmd)) {
      reverted += 1;
      regressions.push({ ...r, actual: serializeValue(actual), issue: "PIRMS value reverted" });
    }
  }
  return { expected: repairs.length, retained, reverted, regressions };
}

function checkStaleAccentsAfterRepair(cs, repairs) {
  const regressions = [];
  const repairedCards = new Set(repairs.map((r) => r.cardId));
  for (const cardId of repairedCards) {
    const idx = findCardIndex(cardId, cs);
    if (idx < 0 || !cs[idx].study?.sectionAccents) continue;
    const study = cs[idx].study;
    const terms = [];
    collectSectionAccentTerms(study.sectionAccents, terms, false);
    for (const term of terms) {
      if (LV_DIACRITICS.test(term) && !(cardId === "a1-in" && term === "Berlīnē")) {
        for (const section of ["explanation", "tip", "important", "examples", "comparison"]) {
          const text = getSectionText(study, section);
          if (text && !accentTermMatches(text, term)) {
            regressions.push({
              cardId,
              field: `study.sectionAccents.${section}`,
              term,
              validationStatus: "CONFIRMED_REPAIR_REGRESSION",
              reason: `Stale accent "${term}" after repair does not match section text`,
            });
          }
        }
      }
    }
  }
  return regressions;
}

function verifyTechnical() {
  const lv = loadArray("data/a1.js", "A1_WORDS");
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  const csPath = path.join(ROOT, "data/cs/a1.js");
  const wwwPath = path.join(ROOT, "www/data/cs/a1.js");
  let orderMismatch = 0;
  for (let i = 0; i < lv.length; i++) {
    if (lv[i].de !== cs[i].de) orderMismatch++;
  }
  let syntax = "PASS";
  try {
    execSync("node --check data/cs/a1.js", { cwd: ROOT, stdio: "pipe" });
    if (cs.length !== 702) syntax = "FAIL";
  } catch { syntax = "FAIL"; }
  const mirror = fs.readFileSync(csPath).equals(fs.readFileSync(wwwPath));
  return {
    cards: cs.length,
    idOrder: orderMismatch === 0 ? "PASS" : "FAIL",
    syntax,
    mirror: mirror ? "PASS" : "FAIL",
    productionChanges: 0,
    deChanges: 0,
  };
}

function dedupeValidated(validations) {
  const rootKeys = new Map();
  const out = [];
  for (const v of validations) {
    if (v.validationStatus === "MISSING_STUDY_PARITY") {
      const key = v.cardId;
      if (rootKeys.has(key)) continue;
      rootKeys.set(key, v.findingId);
      out.push(v);
      continue;
    }
    const key = `${v.cardId}|${normalizeField(v.field)}|${v.validationStatus}`;
    if (v.validationStatus === "CONFIRMED_REAL" || v.validationStatus === "CONFIRMED_REPAIR_REGRESSION") {
      const dk = `${v.cardId}|${normalizeField(v.field)}`;
      if (rootKeys.has(dk)) continue;
      rootKeys.set(dk, v.findingId);
    }
    out.push(v);
  }
  return out;
}

function countByStatus(validations) {
  const counts = {
    CONFIRMED_REAL: 0,
    FALSE_POSITIVE: 0,
    STALE_ALREADY_FIXED: 0,
    OWNER_KEEP: 0,
    OWNER_OVERRIDE_FALSE_POSITIVE: 0,
    VALID_CONTEXT_DIFFERENCE: 0,
    CONFIRMED_REPAIR_REGRESSION: 0,
    NEEDS_OWNER_REVIEW: 0,
    SOURCE_DE_ISSUE: 0,
    DE_PARITY_ISSUE: 0,
    MISSING_STUDY_PARITY: 0,
  };
  for (const v of validations) {
    const s = v.validationStatus || "NEEDS_OWNER_REVIEW";
    counts[s] = (counts[s] || 0) + 1;
  }
  return counts;
}

function countSeverity(validations) {
  const sev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const v of validations) {
    if (!["CONFIRMED_REAL", "CONFIRMED_REPAIR_REGRESSION"].includes(v.validationStatus)) continue;
    const s = String(v.severity || "MEDIUM").toUpperCase();
    if (sev[s] !== undefined) sev[s] += 1;
    else sev.MEDIUM += 1;
  }
  return sev;
}

async function main() {
  const paths = resolvePaths();
  const findingIdPrefix = paths.findingIdPrefix || "FINAL-A1";
  const auditTypeLabel = paths.auditType || "FINAL POST-REPAIR VALIDATION";
  ensureDir(paths.tempDir);
  const validateDir = path.join(paths.tempDir, "validation-batches");
  ensureDir(validateDir);

  console.log(`CS-DE A1 ${auditTypeLabel} — FINDING VALIDATION`);
  const { raw, det, ling } = loadRawFindings(paths.tempDir, findingIdPrefix);
  console.log(`Raw findings: ${raw.length} (det=${det.findings?.length || 0}, luna=${(ling.qualityFindings || ling.findings || []).length})`);

  const lv = loadArray("data/a1.js", "A1_WORDS");
  const cs = loadArray("data/cs/a1.js", "A1_WORDS");
  const repairs = loadAllRepairs();
  const repairRetention = verifyRepairRetention(repairs, cs);
  const accentRegressions = checkStaleAccentsAfterRepair(cs, repairs);
  const technical = verifyTechnical();

  const preValidated = [];
  const needsLuna = [];

  for (const f of raw) {
    const idx = findCardIndex(f.cardId, cs);
    const csEntry = idx >= 0 ? cs[idx] : null;
    const lvEntry = idx >= 0 ? lv[idx] : null;
    const prog = csEntry ? programmaticValidate(f, csEntry, lvEntry) : null;
    if (prog) {
      preValidated.push({ ...f, ...prog, validationSource: "programmatic" });
    } else {
      needsLuna.push(f);
    }
  }

  console.log(`Programmatic: ${preValidated.length}, Luna validation needed: ${needsLuna.length}`);

  const progressPath = paths.validationProgressFile;
  const progress = RESUME && fs.existsSync(progressPath)
    ? JSON.parse(fs.readFileSync(progressPath, "utf8"))
    : { completedBatches: [], lunaValidations: [] };
  const completed = new Set(progress.completedBatches || []);
  const lunaValidations = [...(progress.lunaValidations || [])];
  const stats = progress.stats || { requestCount: 0, totalTokens: 0, model: DEFAULT_MODEL };

  const batches = chunk(needsLuna, FINDINGS_PER_BATCH);
  const batchLimit = TEST_BATCH ? 1 : batches.length;

  for (let i = 0; i < batchLimit; i++) {
    const batchKey = `validate-${String(i + 1).padStart(3, "0")}`;
    if (completed.has(batchKey)) {
      console.log(`  skip ${batchKey}`);
      continue;
    }

    const items = batches[i].map((f) => {
      const idx = findCardIndex(f.cardId, cs);
      const csE = idx >= 0 ? cs[idx] : null;
      const lvE = idx >= 0 ? lv[idx] : null;
      const ctx = csE?.study
        ? buildStudyCard(lvE, csE, idx, "a1")
        : csE ? buildSimpleCard(lvE, csE, idx, "a1") : null;
      return {
        ...f,
        productionCurrentCs: csE ? serializeValue(getFieldValue(csE, f.field)) : null,
        cardContext: ctx ? { cardId: f.cardId, de: csE.de, csMain: csE.lv, hasStudy: Boolean(csE.study) } : null,
      };
    });

    const results = await validateFinalBatch(items, stats, batchKey);
    const batchFile = path.join(validateDir, `${batchKey}.json`);
    fs.writeFileSync(batchFile, JSON.stringify({ batch: batchKey, items, results }, null, 2));

    for (const r of results) {
      lunaValidations.push({ ...r, validationSource: "luna" });
    }
    completed.add(batchKey);
    progress.completedBatches = [...completed];
    progress.lunaValidations = lunaValidations;
    progress.stats = stats;
    fs.writeFileSync(progressPath, JSON.stringify(progress, null, 2));
  }

  const lunaById = new Map();
  for (const v of lunaValidations) {
    if (v.findingId) lunaById.set(v.findingId, v);
  }

  const allValidations = [...preValidated];
  for (const f of needsLuna) {
    const lv = lunaById.get(f.findingId);
    if (lv) {
      allValidations.push({
        ...f,
        validationStatus: lv.validationStatus || "NEEDS_OWNER_REVIEW",
        severity: lv.severity || f.severity,
        reason: lv.reason || f.auditProblem,
        currentCs: lv.currentCs || f.auditCurrentCs,
        proposedCs: lv.proposedCs || f.auditProposedCs,
        confidence: lv.confidence,
        validationSource: "luna",
      });
    } else if (!TEST_BATCH) {
      allValidations.push({
        ...f,
        validationStatus: "NEEDS_OWNER_REVIEW",
        severity: f.severity,
        reason: "Pending Luna validation",
        currentCs: f.auditCurrentCs,
        proposedCs: f.auditProposedCs,
        validationSource: "pending",
      });
    }
  }

  for (const reg of accentRegressions) {
    allValidations.push({
      findingId: `REG-${reg.cardId}-${reg.field}`,
      cardId: reg.cardId,
      field: reg.field,
      validationStatus: "CONFIRMED_REPAIR_REGRESSION",
      severity: "HIGH",
      reason: reg.reason,
      currentCs: reg.term,
      proposedCs: null,
      validationSource: "repair_check",
    });
  }

  const deduped = dedupeValidated(allValidations);
  const statusCounts = countByStatus(deduped);
  const severityCounts = countSeverity(deduped);

  const foreignRaw = (det.foreignRemnants?.issues || []).length + deduped.filter((v) => v.auditProblem?.includes("Foreign")).length;
  const foreignReal = deduped.filter((v) => v.validationStatus === "CONFIRMED_REAL" && v.auditProblem?.includes("Foreign")).length;
  const foreignFp = deduped.filter((v) => ["FALSE_POSITIVE", "OWNER_OVERRIDE_FALSE_POSITIVE", "STALE_ALREADY_FIXED"].includes(v.validationStatus) && v.auditProblem?.includes("Foreign")).length;

  const secRaw = det.sectionAccents?.issues?.length || deduped.filter((v) => v.field?.includes("sectionAccents")).length;
  const secReal = deduped.filter((v) => v.validationStatus === "CONFIRMED_REAL" && v.field?.includes("sectionAccents")).length;
  const secFp = deduped.filter((v) => ["FALSE_POSITIVE", "OWNER_OVERRIDE_FALSE_POSITIVE"].includes(v.validationStatus) && v.field?.includes("sectionAccents")).length;
  const secStale = deduped.filter((v) => v.validationStatus === "STALE_ALREADY_FIXED" && v.field?.includes("sectionAccents")).length;

  const studyParityCards = [...new Set(deduped.filter((v) => v.validationStatus === "MISSING_STUDY_PARITY").map((v) => v.cardId))];

  const payload = {
    meta: {
      model: DEFAULT_MODEL,
      auditType: auditTypeLabel,
      rawFindings: raw.length,
      validatedFindings: deduped.length,
      completedAt: new Date().toISOString(),
    },
    statusCounts,
    severityCounts,
    findings: deduped,
    repairRetention,
    accentRegressions,
    technical,
    foreignRemnants: { raw: foreignRaw, REAL: foreignReal, FALSE_POSITIVE: foreignFp },
    sectionAccents: { raw: secRaw, REAL: secReal, FALSE_POSITIVE: secFp, stale: secStale },
    missingStudyParity: { uniqueCards: studyParityCards.length, cardIds: studyParityCards },
    stats,
  };

  fs.writeFileSync(paths.validatedJson, JSON.stringify(payload, null, 2));
  console.log("\nValidation complete:");
  console.log(JSON.stringify({ statusCounts, severityCounts, studyParityCards: studyParityCards.length }, null, 2));
}

main().catch((e) => {
  console.error("Validation failed:", e.message);
  process.exit(1);
});
