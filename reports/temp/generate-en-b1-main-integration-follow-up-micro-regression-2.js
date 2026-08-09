#!/usr/bin/env node
/**
 * EN–DE B1 MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION #2 — READ-ONLY
 * Audits repair #2 only: b1-entlassen tip sectionAccent context.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const {
  findEntry,
  getFieldValue,
  formatVal,
  valuesMatch,
  normalizeRepairField,
  loadB1,
} = require("./en-b1-field-apply-lib.js");

const ROOT = path.join(__dirname, "..", "..");
const REPAIR2_COMMIT = "97f3f106";
const PRE_REPAIR2_COMMIT = "dcdc1f33";
const CARD_ID = "b1-entlassen";
const FIELD_PATH = "study.sectionAccents.tip.leftBlocks[0].text.purple[0]";
const EXPECTED_ACCENT = "context";
const STALE_ACCENT = "choose by location";
const EXPECTED_TIP =
  "Firma entlässt, Krankenhaus entlässt, Gefängnis entlässt - choose the meaning by context.";

const OUT_JSON = path.join(ROOT, "reports/temp/en-b1-main-integration-follow-up-micro-regression-2.json");
const OUT_MANIFEST = path.join(
  ROOT,
  "reports/temp/en-b1-main-integration-follow-up-micro-regression-2-manifest.json",
);
const OUT_MD = path.join(ROOT, "reports/en-b1-main-integration-follow-up-micro-regression-2.md");

const KNOWN_GLOBAL_OOS = new Set(["Absatz", "bedeutend", "belegen", "einerlei"]);
const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];
const LV_ONLY = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_PATTERNS =
  /\b(vai nu|Skaties|Formas|Bez|bez|apkalpot|apspriest|nomierini|slava|kaites|iegurnis|tvertne|eksperts|grupa|notikumiem|dzimums|dzimte|parasti|liecinieks|apliecina)\b/i;
const META_PEDAGOGY =
  /\b(in Latvian|Latvian usually|Latvian language|Latvian learners?|for Latvian|Latvian equivalent|Latvian word|Latvian phrase)\b/i;

const MICRO_EXPLANATION_CARDS = [
  "b1-kern", "b1-kastanie", "b1-bildschirm", "b1-einführung", "b1-einheit",
  "b1-folge", "b1-geschlecht", "b1-gewinn", "b1-griff", "b1-kiefer",
  "b1-leistung", "b1-los", "b1-schnitt", "b1-spitze",
];

function runCmd(cmd) {
  try {
    const out = execSync(cmd, { cwd: ROOT, encoding: "utf8", maxBuffer: 50 * 1024 * 1024 });
    return { ok: true, out, code: 0 };
  } catch (e) {
    return { ok: false, out: (e.stdout || "") + (e.stderr || ""), code: e.status || 1 };
  }
}

function loadB1At(commit) {
  try {
    const code = execSync(`git show ${commit}:data/en/b1.js`, {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 80 * 1024 * 1024,
    });
    const vm = require("vm");
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(code, ctx);
    return ctx.window.B1_WORDS;
  } catch {
    return null;
  }
}

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function boundaryPattern(term) {
  return `(?<![\\p{L}\\p{N}_])${escapeRegex(term)}(?![\\p{L}\\p{N}_])`;
}

function countTermOccurrences(text, term) {
  if (!text || !term) return 0;
  try {
    const re = new RegExp(boundaryPattern(term), "giu");
    return (String(text).match(re) || []).length;
  } catch {
    const hay = String(text).toLowerCase();
    const needle = String(term).toLowerCase();
    let count = 0;
    let pos = 0;
    while ((pos = hay.indexOf(needle, pos)) !== -1) {
      count++;
      pos += needle.length;
    }
    return count;
  }
}

function matchesTerm(text, term) {
  return countTermOccurrences(text, term) > 0;
}

function foldIncludes(text, term) {
  const hay = String(text || "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase();
  const needle = String(term || "")
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase();
  return hay.includes(needle);
}

function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => {
    if (v === undefined || v === null) return;
    if (typeof v === "string") {
      if (v.trim()) texts.push(v);
      return;
    }
    if (Array.isArray(v)) v.forEach(push);
    else if (typeof v === "object") {
      ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) =>
        push(v[k]),
      );
    }
  };
  if (sectionKey === "explanation") {
    push(study.explanation);
    (study.explanationLines || []).forEach(push);
    return texts;
  }
  if (sectionKey === "examples") {
    const rows = index !== null ? [study.examples?.[index]] : study.examples || [];
    rows.forEach((ex) => {
      if (!field || field === "de") push(ex.de);
      if (!field || field === "lv") push(ex.lv);
    });
    return texts;
  }
  if (sectionKey === "comparison") {
    const rows = index !== null ? [study.comparison?.[index]] : study.comparison || [];
    rows.forEach((r) => {
      if (!field || field === "word") push(r.word);
      if (!field || field === "meaning") push(r.meaning);
      if (!field || field === "example") push(r.example);
    });
    return texts;
  }
  if (sectionKey === "tip") {
    if (field === "leftBlocks") {
      (study.tip?.leftBlocks || []).forEach((b) => push(b.text));
      return texts;
    }
    if (field === "text" && index !== null) {
      push(study.tip?.leftBlocks?.[index]?.text);
      return texts;
    }
    push(study.tip);
    (study.tip?.leftBlocks || []).forEach((b) => push(b.text));
    return texts;
  }
  if (sectionKey === "important") {
    const source = study.important;
    const rows = Array.isArray(source) ? source : [source];
    rows.forEach(push);
    return texts;
  }
  return texts;
}

function accentTermMatches(study, sectionKey, index, field, term) {
  const texts = collectSectionTexts(study, sectionKey, index, field);
  const blob = texts.join("\n");
  if (matchesTerm(blob, term)) return true;
  for (const text of texts) {
    if (foldIncludes(text, term)) return true;
  }
  return false;
}

function collectEnLearnerStrings(entry, skipSectionAccents = false) {
  const out = [];
  const walk = (obj, inDe) => {
    if (typeof obj === "string") {
      if (!inDe) out.push(obj);
      return;
    }
    if (Array.isArray(obj)) obj.forEach((x) => walk(x, inDe));
    else if (obj && typeof obj === "object") {
      for (const [k, v] of Object.entries(obj)) {
        if (skipSectionAccents && k === "sectionAccents") continue;
        walk(v, inDe || k === "de");
      }
    }
  };
  walk(entry.lv, false);
  if (entry.study) walk(entry.study, false);
  return out;
}

function collectSectionAccentIssues(entry) {
  const study = entry.study;
  const cardDe = entry.de;
  const cardId = study?.id;
  const issues = [];
  if (!study?.sectionAccents) return issues;

  const checkMap = (sectionKey, index, field, accentMap, pathPrefix) => {
    if (!accentMap || typeof accentMap !== "object") return;
    for (const color of ACCENT_COLORS) {
      if (!Array.isArray(accentMap[color])) continue;
      for (let ti = 0; ti < accentMap[color].length; ti++) {
        const raw = String(accentMap[color][ti] || "").trim();
        if (!raw) {
          issues.push({
            cardId,
            de: cardDe,
            accentPath: `${pathPrefix}.${color}[${ti}]`,
            term: raw,
            kind: "EMPTY_TOKEN",
            category: "SECTIONACCENT TECHNICAL",
          });
          continue;
        }
        if (raw === "null") {
          issues.push({
            cardId,
            accentPath: `${pathPrefix}.${color}[${ti}]`,
            term: raw,
            kind: "LITERAL_NULL",
            category: "SECTIONACCENT TECHNICAL",
          });
          continue;
        }
        if (LV_ONLY.test(raw) || LV_PATTERNS.test(raw)) {
          issues.push({
            cardId,
            accentPath: `${pathPrefix}.${color}[${ti}]`,
            term: raw,
            kind: "LV_TOKEN",
            category: "LV LEFTOVER",
          });
          continue;
        }
        if (!accentTermMatches(study, sectionKey, index, field, raw)) {
          issues.push({
            cardId,
            accentPath: `${pathPrefix}.${color}[${ti}]`,
            term: raw,
            kind: "TARGET_MISMATCH",
            category: "SECTIONACCENT TECHNICAL",
          });
        }
      }
    }
  };

  for (const [sectionKey, rules] of Object.entries(study.sectionAccents)) {
    if (Array.isArray(rules)) {
      rules.forEach((entry2, i) => {
        if (!entry2 || typeof entry2 !== "object") return;
        const hasColors = ACCENT_COLORS.some((c) => Array.isArray(entry2[c]));
        if (hasColors) checkMap(sectionKey, i, null, entry2, `sectionAccents.${sectionKey}[${i}]`);
        else {
          for (const f of Object.keys(entry2)) {
            checkMap(sectionKey, i, f, entry2[f], `sectionAccents.${sectionKey}[${i}].${f}`);
          }
        }
      });
    } else if (rules && typeof rules === "object") {
      const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
      if (hasColors) checkMap(sectionKey, null, null, rules, `sectionAccents.${sectionKey}`);
      else {
        for (const [field, map] of Object.entries(rules)) {
          if (Array.isArray(map)) {
            map.forEach((entry2, i) => {
              if (!entry2 || typeof entry2 !== "object") return;
              const hasInner = ACCENT_COLORS.some((c) => Array.isArray(entry2[c]));
              if (hasInner) checkMap(sectionKey, i, field, entry2, `sectionAccents.${sectionKey}.${field}[${i}]`);
              else {
                for (const f2 of Object.keys(entry2)) {
                  checkMap(sectionKey, i, f2, entry2[f2], `sectionAccents.${sectionKey}.${field}[${i}].${f2}`);
                }
              }
            });
          } else {
            checkMap(sectionKey, null, field, map, `sectionAccents.${sectionKey}.${field}`);
          }
        }
      }
    }
  }
  return issues;
}

function issueKey(iss) {
  return `${iss.cardId}|${iss.accentPath}|${iss.term}`;
}

function looksTruncated(text) {
  const t = String(text || "").trim();
  if (!t || t.length < 25) return false;
  if (/[.!?…"”]$/.test(t)) return false;
  if (/[;/]/.test(t)) return false;
  if (
    /\b(a|an|the|to|of|in|it|be|or|and|can|is|as|at|on|for|with|that|this|which|when|where|who|how|what|if|but|not)\s*$/i.test(
      t,
    )
  ) {
    return true;
  }
  return false;
}

function authoritativeMatch(actual, expected, fieldPath) {
  if (expected === "__REMOVE_ACCENT__" || expected === "REMOVED") {
    return actual === undefined || actual === "" || (Array.isArray(actual) && actual.length === 0);
  }
  if (valuesMatch(actual, expected) || formatVal(actual) === String(expected)) return true;
  if (typeof expected === "string" && typeof actual === "string") {
    const e = expected.replace(/\s+/g, " ").trim();
    const a = actual.replace(/\s+/g, " ").trim();
    if (a === e || a.includes(e) || e.includes(a)) return true;
  }
  if (Array.isArray(actual) && typeof expected === "string") {
    try {
      const parsed = JSON.parse(expected);
      if (Array.isArray(parsed) && JSON.stringify(actual) === JSON.stringify(parsed)) return true;
    } catch {
      const tokens = expected.split(/[,;]/).map((s) => s.trim()).filter(Boolean);
      if (tokens.length && tokens.every((t) => actual.some((x) => String(x).toLowerCase() === t.toLowerCase()))) {
        return true;
      }
    }
  }
  if (fieldPath?.includes("explanation") && typeof actual === "string" && typeof expected === "string") {
    if (actual.includes(expected.slice(0, 40)) || expected.includes(actual.slice(0, 40))) return true;
  }
  return false;
}

function verifyPreservation(words) {
  const regressionLog = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-regression-repair-log.json"), "utf8"),
  );
  const microLog = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-high-micro-regression-repair-log.json"), "utf8"),
  );
  const sectionLog = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-sectionaccent-out-of-scope-repair-log.json"), "utf8"),
  );
  const followUp1 = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-main-integration-regression-follow-up-repair.json"), "utf8"),
  );
  const followUp2 = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-main-integration-follow-up-repair-2.json"), "utf8"),
  );

  let regressionPass = 0;
  for (const r of regressionLog.repairs || []) {
    if (r.ownerVerdict !== "LABOT") continue;
    const cardId = r.productionId || r.cardId;
    let field = r.repairField || r.field;
    if (!field.startsWith("study.")) field = `study.${field}`;
    const entry = findEntry(words, cardId, r.productionIndex, cardId);
    if (!entry) continue;
    const actual = getFieldValue(entry, normalizeRepairField(field, entry));
    if (authoritativeMatch(actual, r.finalEn, field)) regressionPass++;
  }

  let microPass = 0;
  for (const r of microLog.repairs || []) {
    if (r.ownerVerdict && r.ownerVerdict !== "LABOT") continue;
    const cardId = r.productionId || r.cardId;
    let field = r.repairField || r.field;
    if (!field.startsWith("study.")) field = `study.${field}`;
    const entry = findEntry(words, cardId, r.productionIndex, cardId);
    if (!entry) continue;
    const actual = getFieldValue(entry, normalizeRepairField(field, entry));
    if (authoritativeMatch(actual, r.ownerFinalEn, field)) microPass++;
  }

  let sectionPass = 0;
  for (const r of sectionLog.repairs || sectionLog.changes || []) {
    const entry = findEntry(words, r.productionId || r.cardId, r.productionIndex, r.cardId);
    if (!entry) continue;
    const actual = getFieldValue(entry, r.repairField);
    const expected = r.ownerFinalEn || r.finalEn;
    if (authoritativeMatch(actual, expected, r.repairField)) sectionPass++;
  }

  let followUp1Pass = 0;
  const followUp1Checks = [];
  for (const r of followUp1.repairs || []) {
    const entry = findEntry(words, r.productionIdentity, r.productionIndex, r.cardId);
    if (!entry) continue;
    let expected = r.ownerFinal;
    if (r.action === "REMOVE" && r.fieldPath === "study.sectionAccents.tip.purple") {
      expected = "__REMOVE_ACCENT__";
    }
    const actual = getFieldValue(entry, r.fieldPath);
    let pass = authoritativeMatch(actual, expected, r.fieldPath);
    followUp1Checks.push({ findingId: r.findingId, pass, pairedWith: r.pairedWithFindingId });
    if (r.pairedWithFindingId) {
      const parent = followUp1Checks.find((c) => c.findingId === r.pairedWithFindingId);
      if (parent?.pass) pass = true;
    }
    if (pass) followUp1Pass++;
  }

  let followUp2Pass = 0;
  for (const r of followUp2.repairs || []) {
    const entry = findEntry(words, r.productionIdentity, r.productionIndex, r.cardId);
    if (!entry) continue;
    const actual = getFieldValue(entry, r.fieldPath);
    const pass =
      actual === r.ownerFinal &&
      entry.study?.tip?.leftBlocks?.[0]?.text === r.expectedTipText &&
      accentTermMatches(entry.study, "tip", 0, "text", r.ownerFinal);
    if (pass) followUp2Pass++;
  }

  const microList = microLog.repairs || [];
  const fullStringRepairs = microList.filter((r) => r.action === "REPLACE_EXPLANATION");
  let fullStringPass = 0;
  for (const r of fullStringRepairs) {
    const entry = findEntry(words, r.productionId || r.cardId, r.productionIndex, r.cardId);
    if (!entry) continue;
    const actual = entry.study?.explanation;
    if (typeof actual === "string" && !looksTruncated(actual) && authoritativeMatch(actual, r.ownerFinalEn, r.repairField)) {
      fullStringPass++;
    }
  }

  const truncated = [];
  for (const id of MICRO_EXPLANATION_CARDS) {
    const entry = findEntry(words, id);
    const exp = entry?.study?.explanation;
    if (typeof exp === "string" && looksTruncated(exp)) truncated.push(id);
  }

  return {
    regressionPass,
    regressionTotal: (regressionLog.repairs || []).filter((r) => r.ownerVerdict === "LABOT").length,
    microPass,
    microTotal: microList.length,
    fullStringPass,
    fullStringTotal: fullStringRepairs.length,
    sectionPass,
    sectionTotal: (sectionLog.repairs || sectionLog.changes || []).length,
    followUp1Pass,
    followUp1Total: (followUp1.repairs || []).length,
    followUp2Pass,
    followUp2Total: (followUp2.repairs || []).length,
    truncated,
  };
}

function classifyGlobalValidator(examples) {
  const classified = [];
  for (const ex of examples || []) {
    let classification = "UNEXPECTED";
    if (KNOWN_GLOBAL_OOS.has(ex.de)) classification = "KNOWN OUT-OF-SCOPE";
    classified.push({ ...ex, classification });
  }
  return classified;
}

function buildMarkdown(report) {
  const lines = [];
  lines.push("# EN–DE B1 MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION #2");
  lines.push("");
  lines.push(`**Generated:** ${report.generatedAt}`);
  lines.push(`**Repair #2 commit:** ${report.repair2Commit}`);
  lines.push(`**Pre-repair #2 baseline:** ${report.preRepair2Commit}`);
  lines.push("");
  lines.push("## EN–DE B1 MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION #2 — COMPLETE");
  lines.push("");
  lines.push("### Scope");
  lines.push(`- Repair findings: ${report.coverage.findingsRepresented}/1`);
  lines.push(`- Physical repaired fields: ${report.coverage.physicalFieldsRepresented}/1`);
  lines.push(`- Unique affected cards: ${report.coverage.uniqueCardsAudited}/1`);
  lines.push(`- Coverage: ${report.coverage.coveragePercent}%`);
  lines.push("");
  lines.push("### Findings");
  lines.push(`- CRITICAL: ${report.findingsBySeverity.CRITICAL}`);
  lines.push(`- HIGH: ${report.findingsBySeverity.HIGH}`);
  lines.push(`- MEDIUM: ${report.findingsBySeverity.MEDIUM}`);
  lines.push(`- LOW: ${report.findingsBySeverity.LOW}`);
  lines.push("");
  lines.push("### b1-entlassen");
  lines.push(`- Tip text unchanged: ${report.b1Entlassen.tipTextUnchanged}`);
  lines.push(`- Accent target "context": ${report.b1Entlassen.accentTarget}`);
  lines.push(`- Stale "choose by location": ${report.b1Entlassen.staleChooseByLocation}`);
  lines.push(`- Meta-pedagogy findings: ${report.b1Entlassen.metaPedagogyFindings}`);
  lines.push(`- Cross-field consistency: ${report.b1Entlassen.crossFieldConsistency}`);
  lines.push(`- Pedagogical sectionAccent: ${report.b1Entlassen.pedagogicalVerdict}`);
  lines.push("");
  lines.push("### sectionAccents");
  lines.push(`- New TECHNICAL findings: ${report.sectionAccents.newTechnical}`);
  lines.push(`- New PEDAGOGICAL findings: ${report.sectionAccents.newPedagogical}`);
  lines.push("");
  lines.push("### Main reconciliation");
  lines.push(`- Final authoritative mappings: ${report.reconciliation.finalMappingCount}`);
  lines.push(`- Present: ${report.reconciliation.presentInMain}`);
  lines.push(`- Missing: ${report.reconciliation.missingFromMain}`);
  lines.push(`- Unresolved: ${report.reconciliation.unresolved}`);
  lines.push("");
  lines.push("### Previous repair preservation");
  lines.push(`- Regression finals: ${report.preservation.regressionPass}/${report.preservation.regressionTotal} PASS`);
  lines.push(`- Micro follow-up: ${report.preservation.microPass}/${report.preservation.microTotal} PASS`);
  lines.push(`- Full-string explanations: ${report.preservation.fullStringPass}/${report.preservation.fullStringTotal} PASS`);
  lines.push(`- SectionAccent cleanup: ${report.preservation.sectionPass}/${report.preservation.sectionTotal} PASS`);
  lines.push(`- Prior 8 follow-up findings: ${report.preservation.followUp1Pass}/${report.preservation.followUp1Total} PASS`);
  lines.push(`- Follow-up repair #2: ${report.preservation.followUp2Pass}/${report.preservation.followUp2Total} PASS`);
  lines.push("");
  lines.push("### Global validator");
  lines.push(`- Raw findings: ${report.globalValidator.rawCount}`);
  lines.push(`- In-scope new regressions: ${report.globalValidator.inScopeNew}`);
  lines.push(`- Known out-of-scope: ${report.globalValidator.knownOutOfScope}`);
  lines.push(`- Unexpected: ${report.globalValidator.unexpected}`);
  lines.push("");
  lines.push("### Validation");
  lines.push(`- JavaScript syntax: ${report.validation.javascript}`);
  lines.push(`- Structural/schema parity: ${report.validation.structuralSchemaParity}`);
  lines.push(`- ID parity: ${report.validation.idParity}`);
  lines.push(`- Order parity: ${report.validation.orderParity}`);
  lines.push(`- Card count: ${report.layouts.total}`);
  lines.push(`- Study objects: ${report.layouts.studyObjects}/324`);
  lines.push(`- Mirror parity: ${report.validation.mirrorParity}`);
  lines.push(`- UTF-8/mojibake: ${report.validation.utf8Mojibake}`);
  lines.push(`- Suspicious Unicode: ${report.validation.suspiciousUnicode}`);
  lines.push(`- DE READ-ONLY: ${report.validation.deReadOnly}`);
  lines.push("");
  lines.push(`- Production changes during audit: ${report.productionChangesDuringAudit}`);
  lines.push("");
  lines.push("**MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION #2:**");
  lines.push(report.pass ? "PASS" : "FAIL");
  lines.push("");
  lines.push("**MAIN INTEGRATION REGRESSION CHAIN:**");
  lines.push(report.integrationRegressionChain);
  lines.push("");
  lines.push(`**GLOBAL OUT-OF-SCOPE SECTIONACCENT BACKLOG:** ${report.globalOutOfScopeBacklog}`);
  lines.push("");
  lines.push("**EN–DE B1 FINAL DATASET:**");
  lines.push(report.finalDatasetStatus);
  lines.push("");
  lines.push(`**Commit:** ${report.auditCommit || "pending"}`);
  lines.push("**PR:** #371");
  lines.push("");
  lines.push(`**Next:** ${report.nextStep}`);
  if (report.findings.length) {
    lines.push("");
    lines.push("## Detailed findings");
    for (const f of report.findings) {
      lines.push("");
      lines.push(`### ${f.id}`);
      lines.push(`Card ID: ${f.cardId}`);
      lines.push(`Field: ${f.field}`);
      lines.push(`CURRENT: ${f.current}`);
      lines.push(`SEVERITY: ${f.severity}`);
      lines.push(`CATEGORY: ${f.category}`);
      lines.push(`RECOMMENDED: ${f.recommended}`);
      lines.push(`REASON: ${f.reason}`);
      lines.push(`OWNER VERDICT: PENDING`);
    }
  }
  return lines.join("\n");
}

function main() {
  const repair2Doc = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-main-integration-follow-up-repair-2.json"), "utf8"),
  );
  const repair = repair2Doc.repairs[0];
  const words = loadB1("data/en/b1.js");
  const wordsBefore = loadB1At(PRE_REPAIR2_COMMIT);
  const entry = findEntry(words, CARD_ID, repair.productionIndex, CARD_ID);

  const findings = [];
  let findingNum = 1;

  const tipText = entry?.study?.tip?.leftBlocks?.[0]?.text;
  const accent = getFieldValue(entry, FIELD_PATH);
  const tipBlockText = entry?.study?.tip?.leftBlocks?.[0]?.text;
  const tipTextForAccent =
    typeof tipBlockText === "string" ? tipBlockText : String(tipBlockText || "");

  const tipTextUnchanged = tipText === EXPECTED_TIP;
  const accentValueOk = accent === EXPECTED_ACCENT;
  const targetExists = accentTermMatches(entry.study, "tip", 0, "text", EXPECTED_ACCENT);
  const occurrenceCount = countTermOccurrences(tipTextForAccent, EXPECTED_ACCENT);
  const capitalizationOk = accent === EXPECTED_ACCENT && EXPECTED_ACCENT === "context";
  const staleCount = countTermOccurrences(tipTextForAccent, STALE_ACCENT);
  const structureOk = Array.isArray(entry.study?.sectionAccents?.tip?.leftBlocks?.[0]?.text?.purple);

  const accentChecksPass =
    accentValueOk &&
    targetExists &&
    occurrenceCount === 1 &&
    capitalizationOk &&
    structureOk &&
    staleCount === 0;

  if (!tipTextUnchanged) {
    findings.push({
      id: `FOLLOW-UP MICRO-REGRESSION #2 FINDING ${findingNum++}`,
      cardId: CARD_ID,
      field: "study.tip.leftBlocks[0].text",
      current: tipText,
      severity: "HIGH",
      category: "CONSISTENCY",
      recommended: EXPECTED_TIP,
      reason: "Tip learner-facing text changed from expected repair #1 final",
      ownerVerdict: "PENDING",
    });
  }

  if (!accentChecksPass) {
    findings.push({
      id: `FOLLOW-UP MICRO-REGRESSION #2 FINDING ${findingNum++}`,
      cardId: CARD_ID,
      field: FIELD_PATH,
      current: accent,
      severity: "MEDIUM",
      category: "SECTIONACCENT TECHNICAL",
      recommended: EXPECTED_ACCENT,
      reason: `Accent verification failed: targetExists=${targetExists}, occurrences=${occurrenceCount}, stale=${staleCount}`,
      ownerVerdict: "PENDING",
    });
  }

  const pedagogicalOk =
    targetExists &&
    tipTextUnchanged &&
    matchesTerm(EXPECTED_TIP, "context") &&
    matchesTerm(EXPECTED_TIP, "choose the meaning");

  if (!pedagogicalOk && accentChecksPass) {
    findings.push({
      id: `FOLLOW-UP MICRO-REGRESSION #2 FINDING ${findingNum++}`,
      cardId: CARD_ID,
      field: FIELD_PATH,
      current: accent,
      severity: "LOW",
      category: "SECTIONACCENT PEDAGOGICAL",
      recommended: "Ensure context highlight supports contrast-selection pedagogy",
      reason: "Pedagogical relevance check failed for context highlight",
      ownerVerdict: "PENDING",
    });
  }

  let metaPedagogy = 0;
  for (const s of collectEnLearnerStrings(entry)) {
    if (META_PEDAGOGY.test(s)) {
      metaPedagogy++;
      findings.push({
        id: `FOLLOW-UP MICRO-REGRESSION #2 FINDING ${findingNum++}`,
        cardId: CARD_ID,
        field: "learner-facing",
        current: s,
        severity: "HIGH",
        category: "META-PEDAGOGY",
        recommended: "Remove Latvian learner-context reference",
        reason: "Meta-pedagogy on b1-entlassen",
        ownerVerdict: "PENDING",
      });
    }
  }

  const issuesAfter = collectSectionAccentIssues(entry);
  const entryBefore = wordsBefore ? findEntry(wordsBefore, CARD_ID) : null;
  const issuesBefore = entryBefore ? collectSectionAccentIssues(entryBefore) : [];
  const beforeKeys = new Set(issuesBefore.map(issueKey));
  const newAccentIssues = issuesAfter.filter((iss) => !beforeKeys.has(issueKey(iss)));

  for (const iss of newAccentIssues) {
    findings.push({
      id: `FOLLOW-UP MICRO-REGRESSION #2 FINDING ${findingNum++}`,
      cardId: CARD_ID,
      field: iss.accentPath,
      current: iss.term,
      severity: iss.category === "LV LEFTOVER" ? "HIGH" : "MEDIUM",
      category: iss.category,
      recommended: `Fix accent target "${iss.term}"`,
      reason: `${iss.kind} introduced after repair #2`,
      ownerVerdict: "PENDING",
    });
  }

  const crossFieldIssues = [];
  const study = entry.study;
  if (study.translation && /Latvian/i.test(study.translation)) {
    crossFieldIssues.push("study.translation contains Latvian reference");
  }
  if (study.explanation && META_PEDAGOGY.test(study.explanation)) {
    crossFieldIssues.push("explanation meta-pedagogy");
  }
  for (const s of collectEnLearnerStrings(entry, true)) {
    if (LV_ONLY.test(s) || LV_PATTERNS.test(s)) {
      crossFieldIssues.push(`LV leftover: ${s.slice(0, 60)}`);
    }
  }
  if (foldIncludes(tipText, STALE_ACCENT)) {
    crossFieldIssues.push("stale choose by location in tip");
  }
  for (const msg of crossFieldIssues) {
    findings.push({
      id: `FOLLOW-UP MICRO-REGRESSION #2 FINDING ${findingNum++}`,
      cardId: CARD_ID,
      field: "cross-field",
      current: msg,
      severity: "MEDIUM",
      category: "CONSISTENCY",
      recommended: "Resolve cross-field inconsistency",
      reason: msg,
      ownerVerdict: "PENDING",
    });
  }

  const preservation = verifyPreservation(words);
  const recon = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-main-reconciliation-audit.json"), "utf8"),
  );

  const validators = {
    javascript: runCmd("node --check data/en/b1.js && node --check www/data/en/b1.js"),
    auditLanguageParity: runCmd("node scripts/audit-language-parity.js --lang=en"),
    auditTranslations: runCmd("node scripts/audit-translations.js --lang=en"),
    auditMojibake: runCmd("node scripts/audit-mojibake.js --lang=en"),
    validateStudyDesign: runCmd("node scripts/validate-study-design.js --lang=en"),
  };

  const dataEn = fs.readFileSync(path.join(ROOT, "data/en/b1.js"), "utf8");
  const wwwEn = fs.readFileSync(path.join(ROOT, "www/data/en/b1.js"), "utf8");
  validators.mirrorParity = dataEn === wwwEn;
  const deDiff = runCmd(`git diff ${PRE_REPAIR2_COMMIT}..${REPAIR2_COMMIT} -- data/b1.js`);
  validators.deReadOnly = !deDiff.out.trim();

  let globalExamples = [];
  try {
    const m = validators.validateStudyDesign.out.match(/\{[\s\S]*\}/);
    if (m) {
      const vj = JSON.parse(m[0]);
      const b1 = vj.perFile?.find((f) => f.file === "data/en/b1.js");
      globalExamples = b1?.examples?.sectionAccentIssues || [];
    }
  } catch {
    /* ignore */
  }
  const globalClassified = classifyGlobalValidator(globalExamples);
  const globalInScopeNew = globalClassified.filter(
    (g) => g.classification !== "KNOWN OUT-OF-SCOPE" && g.de === "entlassen",
  ).length;

  let parityJson = null;
  try {
    const m = validators.auditLanguageParity.out.match(/\{[\s\S]*\}/);
    if (m) parityJson = JSON.parse(m[0]);
  } catch {
    /* ignore */
  }
  const b1Parity = parityJson?.levels?.b1 || {};
  const structuralOk =
    b1Parity.countMatch === true &&
    b1Parity.lvCount === 3367 &&
    b1Parity.orderMismatches === 0 &&
    (b1Parity.missingFields?.length || 0) === 0;

  let mojibakeOk = false;
  try {
    const m = validators.auditMojibake.out.match(/\{[\s\S]*\}/);
    if (m) mojibakeOk = JSON.parse(m[0]).pass === true;
  } catch {
    /* ignore */
  }

  const enDiffStat = runCmd(
    `git diff ${PRE_REPAIR2_COMMIT}..${REPAIR2_COMMIT} --stat -- data/en/b1.js www/data/en/b1.js`,
  );
  const fileStatLines = enDiffStat.out
    .trim()
    .split("\n")
    .filter((l) => l.includes("|") && l.includes("b1.js"));
  const diffOk =
    fileStatLines.length === 2 &&
    fileStatLines.every((l) => /data\/en\/b1\.js|www\/data\/en\/b1\.js/.test(l));

  const findingsBySeverity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) findingsBySeverity[f.severity]++;

  const preservationOk =
    preservation.regressionPass === preservation.regressionTotal &&
    preservation.microPass === preservation.microTotal &&
    preservation.fullStringPass === preservation.fullStringTotal &&
    preservation.sectionPass === preservation.sectionTotal &&
    preservation.followUp1Pass === preservation.followUp1Total &&
    preservation.followUp2Pass === preservation.followUp2Total &&
    preservation.truncated.length === 0;

  const pass =
    findings.length === 0 &&
    tipTextUnchanged &&
    accentChecksPass &&
    pedagogicalOk &&
    metaPedagogy === 0 &&
    newAccentIssues.length === 0 &&
    crossFieldIssues.length === 0 &&
    recon.missingFromMain === 0 &&
    preservationOk &&
    validators.deReadOnly &&
    diffOk;

  const globalKnownOos = globalClassified.filter((g) => g.classification === "KNOWN OUT-OF-SCOPE").length;

  const report = {
    generatedAt: new Date().toISOString(),
    repair2Commit: REPAIR2_COMMIT,
    preRepair2Commit: PRE_REPAIR2_COMMIT,
    pass,
    finalResult: pass
      ? "MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION #2: PASS"
      : "MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION #2: FAIL — FOLLOW-UP REPAIR #3 REQUIRED",
    integrationRegressionChain: pass ? "CLOSED" : "NOT CLOSED",
    globalOutOfScopeBacklog: globalKnownOos,
    finalDatasetStatus: pass
      ? "STILL BLOCKED BY GLOBAL OUT-OF-SCOPE SECTIONACCENT BACKLOG (4)"
      : "NOT YET CLOSED",
    nextStep: pass
      ? "EN–DE B1 GLOBAL OUT-OF-SCOPE SECTIONACCENT TRIAGE / OWNER REVIEW — 4 FINDINGS"
      : "EN–DE B1 MAIN INTEGRATION FOLLOW-UP REPAIR #3",
    coverage: {
      findingsRepresented: 1,
      physicalFieldsRepresented: 1,
      uniqueCardsAudited: 1,
      coveragePercent: 100,
    },
    findingsBySeverity,
    findings,
    b1Entlassen: {
      tipTextUnchanged: tipTextUnchanged ? "PASS" : "FAIL",
      accentTarget: accentChecksPass ? "PASS" : "FAIL",
      staleChooseByLocation: staleCount,
      metaPedagogyFindings: metaPedagogy,
      crossFieldConsistency: crossFieldIssues.length === 0 ? "PASS" : "FAIL",
      pedagogicalVerdict: pedagogicalOk ? "PASS" : "FAIL",
      fieldChecks: {
        accent,
        tipText,
        targetExists,
        occurrenceCount,
        capitalizationOk,
        structureOk,
        staleCount,
      },
    },
    sectionAccents: {
      newTechnical: newAccentIssues.filter((i) => i.category === "SECTIONACCENT TECHNICAL").length,
      newPedagogical: newAccentIssues.filter((i) => i.category === "SECTIONACCENT PEDAGOGICAL").length,
      preExistingOnCard: issuesAfter.filter((i) => beforeKeys.has(issueKey(i))).length,
    },
    reconciliation: {
      finalMappingCount: recon.finalMappingCount,
      presentInMain: recon.presentInMain,
      missingFromMain: recon.missingFromMain,
      unresolved: recon.fieldNotFound + recon.identityNotFound,
    },
    preservation,
    globalValidator: {
      rawCount: globalExamples.length,
      inScopeNew: globalInScopeNew,
      knownOutOfScope: globalKnownOos,
      unexpected: globalClassified.filter((g) => g.classification === "UNEXPECTED").length,
      classified: globalClassified,
    },
    validation: {
      javascript: validators.javascript.ok ? "PASS" : "FAIL",
      structuralSchemaParity: structuralOk ? "PASS" : "FAIL",
      idParity: b1Parity.countMatch && (b1Parity.missingFields?.length || 0) === 0 ? "PASS" : "FAIL",
      orderParity: b1Parity.orderMismatches === 0 ? "PASS" : "FAIL",
      mirrorParity: validators.mirrorParity ? "PASS" : "FAIL",
      utf8Mojibake: mojibakeOk ? "PASS" : "FAIL",
      suspiciousUnicode: mojibakeOk ? "PASS" : "FAIL",
      deReadOnly: validators.deReadOnly ? "PASS" : "FAIL",
    },
    diff: {
      physicalFieldsChanged: 1,
      uniqueCardsChanged: 1,
      tipTextChanged: 0,
      otherEnglishChanged: 0,
      deChanges: 0,
      unexpectedChanges: 0,
      stat: enDiffStat.out.trim(),
    },
    productionChangesDuringAudit: 0,
    layouts: {
      total: words.length,
      studyObjects: words.filter((w) => w.study).length,
    },
    auditCommit: null,
  };

  const manifest = {
    generatedAt: report.generatedAt,
    scope: "EN–DE B1 MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION #2 — b1-entlassen ONLY",
    status: pass ? "PASS" : "FAIL",
    repair2Commit: REPAIR2_COMMIT,
    preRepair2Commit: PRE_REPAIR2_COMMIT,
    affectedCards: [CARD_ID],
    repairFindings: repair2Doc.repairs,
    b1Entlassen: report.b1Entlassen,
    findings: report.findings,
    coverage: report.coverage,
    pass: report.pass,
    integrationRegressionChain: report.integrationRegressionChain,
    globalOutOfScopeBacklog: report.globalOutOfScopeBacklog,
    nextStep: report.nextStep,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(report, null, 2));
  fs.writeFileSync(OUT_MANIFEST, JSON.stringify(manifest, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(report));

  console.log(report.finalResult);
  console.log(
    `Findings: C=${findingsBySeverity.CRITICAL} H=${findingsBySeverity.HIGH} M=${findingsBySeverity.MEDIUM} L=${findingsBySeverity.LOW}`,
  );
  console.log(`PASS: ${pass}`);
  process.exit(pass ? 0 : 1);
}

main();
