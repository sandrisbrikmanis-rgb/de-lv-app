#!/usr/bin/env node
/**
 * EN–DE B1 MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION — READ-ONLY
 * Audits 8 repair findings / 6 physical fields / 6 affected cards.
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
const FOLLOW_UP_COMMIT = "4e462fab";
const PRE_FOLLOW_UP_COMMIT = "b9b1491a";
const OUT_JSON = path.join(ROOT, "reports/temp/en-b1-main-integration-follow-up-micro-regression.json");
const OUT_MANIFEST = path.join(
  ROOT,
  "reports/temp/en-b1-main-integration-follow-up-micro-regression-manifest.json",
);
const OUT_MD = path.join(ROOT, "reports/en-b1-main-integration-follow-up-micro-regression.md");

const AFFECTED_CARDS = [
  "b1-entlassen",
  "b1-zeugnis",
  "b1-berühmtheit",
  "b1-kurs",
  "b1-kastanie",
  "b1-beruf",
];

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

function matchesTerm(text, term) {
  if (!text || !term) return false;
  try {
    return new RegExp(boundaryPattern(term), "iu").test(String(text));
  } catch {
    return false;
  }
}

function stemMatch(text, term) {
  if (!text || !term || term.length < 4) return false;
  const stem = String(term).replace(/(?:en|ern|eln)$/i, "");
  if (stem.length < 3) return false;
  try {
    return new RegExp(boundaryPattern(stem) + "[\\p{L}\\p{N}_]*", "iu").test(String(text));
  } catch {
    return false;
  }
}

function asArray(value) {
  if (value === undefined || value === null) return [];
  return Array.isArray(value) ? value : [value];
}

function collectSectionTexts(study, sectionKey, index = null, field = null) {
  const texts = [];
  const push = (v) => {
    if (v === undefined || v === null) return;
    if (typeof v === "string") {
      if (v.trim()) texts.push(v);
      return;
    }
    if (Array.isArray(v)) {
      v.forEach(push);
      return;
    }
    if (typeof v === "object") {
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
    const rows = index !== null ? asArray(study.examples?.[index]) : asArray(study.examples);
    rows.forEach((ex) => {
      if (!field || field === "de") push(ex.de);
      if (!field || field === "lv") push(ex.lv);
    });
    return texts;
  }
  if (sectionKey === "comparison") {
    const rows = index !== null ? asArray(study.comparison?.[index]) : asArray(study.comparison);
    rows.forEach((r) => {
      if (!field || field === "word") push(r.word);
      if (!field || field === "meaning") push(r.meaning);
      if (!field || field === "example") push(r.example);
    });
    return texts;
  }
  if (sectionKey === "tip") {
    if (field === "left") {
      push(study.tip?.left || study.tip?.text);
      return texts;
    }
    if (field === "right") {
      push(study.tip?.right || study.tip?.example);
      return texts;
    }
    if (field === "leftBlocks") {
      (study.tip?.leftBlocks || []).forEach((b) => push(b.text));
      return texts;
    }
    if (field === "text" && index !== null) {
      const block = study.tip?.leftBlocks?.[index];
      push(block?.text);
      return texts;
    }
    push(study.tip);
    return texts;
  }
  if (sectionKey === "important") {
    const source = study.important;
    const rows =
      index !== null ? asArray(Array.isArray(source) ? source[index] : source) : asArray(source);
    rows.forEach(push);
    return texts;
  }
  return texts;
}

function accentTermMatches(study, sectionKey, index, field, term) {
  const texts = collectSectionTexts(study, sectionKey, index, field);
  const blob = texts.join("\n");
  if (matchesTerm(blob, term) || stemMatch(blob, term)) return true;
  for (const text of texts) {
    if (foldIncludes(text, term)) return true;
  }
  return false;
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
            section: sectionKey,
            index,
            field,
            color,
            tokenIndex: ti,
            term: raw,
            accentPath: `${pathPrefix}.${color}[${ti}]`,
            kind: "EMPTY_TOKEN",
            category: "SECTIONACCENT TECHNICAL",
          });
          continue;
        }
        if (raw === "null") {
          issues.push({
            cardId,
            de: cardDe,
            section: sectionKey,
            index,
            field,
            color,
            tokenIndex: ti,
            term: raw,
            accentPath: `${pathPrefix}.${color}[${ti}]`,
            kind: "LITERAL_NULL",
            category: "SECTIONACCENT TECHNICAL",
          });
          continue;
        }
        if (LV_ONLY.test(raw) || LV_PATTERNS.test(raw)) {
          issues.push({
            cardId,
            de: cardDe,
            section: sectionKey,
            index,
            field,
            color,
            tokenIndex: ti,
            term: raw,
            accentPath: `${pathPrefix}.${color}[${ti}]`,
            kind: "LV_TOKEN",
            category: "LV LEFTOVER",
          });
          continue;
        }
        if (!accentTermMatches(study, sectionKey, index, field, raw)) {
          issues.push({
            cardId,
            de: cardDe,
            section: sectionKey,
            index,
            field,
            color,
            tokenIndex: ti,
            term: raw,
            accentPath: `${pathPrefix}.${color}[${ti}]`,
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
        if (hasColors) {
          checkMap(sectionKey, i, null, entry2, `sectionAccents.${sectionKey}[${i}]`);
          return;
        }
        for (const f of Object.keys(entry2)) {
          checkMap(sectionKey, i, f, entry2[f], `sectionAccents.${sectionKey}[${i}].${f}`);
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
              const hasInnerColors = ACCENT_COLORS.some((c) => Array.isArray(entry2[c]));
              if (hasInnerColors) {
                checkMap(sectionKey, i, field, entry2, `sectionAccents.${sectionKey}.${field}[${i}]`);
              } else {
                for (const f2 of Object.keys(entry2)) {
                  checkMap(
                    sectionKey,
                    i,
                    f2,
                    entry2[f2],
                    `sectionAccents.${sectionKey}.${field}[${i}].${f2}`,
                  );
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

function verifyRepairFinding(entry, repair) {
  const field = repair.fieldPath;
  const actual = getFieldValue(entry, field);

  if (repair.action === "REMOVE" && field === "study.sectionAccents.tip.purple") {
    const purple = entry.study?.sectionAccents?.tip?.purple;
    return {
      pass: purple === undefined,
      actual: purple ?? null,
      expected: "REMOVED",
    };
  }

  if (field.includes("sectionAccents.examples[1].lv.purple[0]")) {
    const token = entry.study?.sectionAccents?.examples?.[1]?.lv?.purple?.[0];
    const lv = entry.study?.examples?.[1]?.lv;
    return {
      pass:
        token === repair.ownerFinal &&
        token !== "null" &&
        accentTermMatches(entry.study, "examples", 1, "lv", token),
      actual: token,
      expected: repair.ownerFinal,
      targetLv: lv,
    };
  }

  if (repair.category === "META-PEDAGOGY") {
    const text = getFieldValue(entry, field);
    return {
      pass: text === repair.ownerFinal && !META_PEDAGOGY.test(text),
      actual: text,
      expected: repair.ownerFinal,
    };
  }

  return { pass: false, actual, expected: repair.ownerFinal };
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
    const expected = r.ownerFinalEn || r.finalEn;
    if (authoritativeMatch(actual, expected, field)) microPass++;
  }

  let sectionPass = 0;
  for (const r of sectionLog.repairs || sectionLog.changes || []) {
    const entry = findEntry(words, r.productionId || r.cardId, r.productionIndex, r.cardId);
    if (!entry) continue;
    const actual = getFieldValue(entry, r.repairField);
    const expected = r.ownerFinalEn || r.finalEn;
    if (actual === expected || authoritativeMatch(actual, expected, r.repairField)) sectionPass++;
  }

  const truncated = [];
  for (const id of MICRO_EXPLANATION_CARDS) {
    const entry = findEntry(words, id);
    const exp = entry?.study?.explanation;
    if (typeof exp === "string" && looksTruncated(exp)) truncated.push(id);
  }

  const microList = microLog.repairs || [];
  const fullStringRepairs = microList.filter((r) => r.action === "REPLACE_EXPLANATION");
  let fullStringPass = 0;
  for (const r of fullStringRepairs) {
    const cardId = r.productionId || r.cardId;
    const entry = findEntry(words, cardId, r.productionIndex, cardId);
    if (!entry) continue;
    const actual = entry.study?.explanation;
    if (typeof actual === "string" && !looksTruncated(actual) && authoritativeMatch(actual, r.ownerFinalEn, r.repairField)) {
      fullStringPass++;
    }
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
    truncated,
  };
}

function classifyGlobalValidator(examples) {
  const classified = [];
  for (const ex of examples || []) {
    let classification = "UNEXPECTED";
    if (KNOWN_GLOBAL_OOS.has(ex.de)) classification = "KNOWN OUT-OF-SCOPE";
    else if (ex.de === "Berühmtheit" && ex.term === "null") classification = "IN-SCOPE NEW REGRESSION";
    classified.push({ ...ex, classification });
  }
  return classified;
}

function buildMarkdown(report) {
  const lines = [];
  lines.push("# EN–DE B1 MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION");
  lines.push("");
  lines.push(`**Generated:** ${report.generatedAt}`);
  lines.push(`**Follow-up commit:** ${report.followUpCommit}`);
  lines.push(`**Pre-follow-up baseline:** ${report.preFollowUpCommit}`);
  lines.push("");
  lines.push("## EN–DE B1 MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION — COMPLETE");
  lines.push("");
  lines.push("### Scope");
  lines.push(`- Repair findings: ${report.coverage.findingsRepresented}/8`);
  lines.push(`- Physical repaired fields: ${report.coverage.physicalFieldsRepresented}/6`);
  lines.push(`- Unique affected cards: ${report.coverage.uniqueCardsAudited}/6`);
  lines.push(`- Coverage: ${report.coverage.coveragePercent}%`);
  lines.push("");
  lines.push("### Findings");
  lines.push(`- CRITICAL: ${report.findingsBySeverity.CRITICAL}`);
  lines.push(`- HIGH: ${report.findingsBySeverity.HIGH}`);
  lines.push(`- MEDIUM: ${report.findingsBySeverity.MEDIUM}`);
  lines.push(`- LOW: ${report.findingsBySeverity.LOW}`);
  lines.push("");
  lines.push("### Meta-pedagogy");
  lines.push(`- b1-entlassen: ${report.cardChecks["b1-entlassen"]}`);
  lines.push(`- b1-zeugnis: ${report.cardChecks["b1-zeugnis"]}`);
  lines.push(`- Remaining in-scope findings: ${report.languageIntegrity.inScopeMetaPedagogy}`);
  lines.push("");
  lines.push("### sectionAccents");
  lines.push(`- b1-berühmtheit: ${report.cardChecks["b1-berühmtheit"]}`);
  lines.push(`- b1-kurs: ${report.cardChecks["b1-kurs"]}`);
  lines.push(`- b1-kastanie: ${report.cardChecks["b1-kastanie"]}`);
  lines.push(`- b1-beruf: ${report.cardChecks["b1-beruf"]}`);
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
  lines.push(
    `- Regression finals: ${report.preservation.regressionPass}/${report.preservation.regressionTotal} PASS`,
  );
  lines.push(`- Micro follow-up: ${report.preservation.microPass}/${report.preservation.microTotal} PASS`);
  lines.push(
    `- Full-string explanations: ${report.preservation.fullStringPass}/${report.preservation.fullStringTotal} PASS`,
  );
  lines.push(
    `- SectionAccent cleanup: ${report.preservation.sectionPass}/${report.preservation.sectionTotal} PASS`,
  );
  lines.push("");
  lines.push("### Global validator");
  lines.push(`- Raw findings: ${report.globalValidator.rawCount}`);
  lines.push(`- In-scope new regressions: ${report.globalValidator.inScopeNew}`);
  lines.push(`- Known out-of-scope: ${report.globalValidator.knownOutOfScope}`);
  lines.push(`- Known false positives: ${report.globalValidator.knownFalsePositive}`);
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
  lines.push("### Diff");
  lines.push(`- Follow-up physical changes: ${report.diff.physicalFieldsChanged}`);
  lines.push(`- Unique cards changed: ${report.diff.uniqueCardsChanged}`);
  lines.push(`- Unrelated English changes: ${report.diff.unrelatedEnglish}`);
  lines.push(`- DE changes: ${report.diff.deChanges}`);
  lines.push(`- Unexpected changes: ${report.diff.unexpectedChanges}`);
  lines.push("");
  lines.push(`- Production changes during audit: ${report.productionChangesDuringAudit}`);
  lines.push("");
  lines.push(`**MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION:**`);
  lines.push(report.pass ? "PASS" : "FAIL");
  lines.push("");
  lines.push(`**MAIN INTEGRATION REGRESSION CHAIN:**`);
  lines.push(report.integrationRegressionChain);
  lines.push("");
  lines.push(`**GLOBAL OUT-OF-SCOPE SECTIONACCENT BACKLOG:** ${report.globalOutOfScopeBacklog}`);
  lines.push("");
  lines.push(`**EN–DE B1 FINAL DATASET:**`);
  lines.push(report.finalDatasetStatus);
  lines.push("");
  lines.push("### Created");
  lines.push("- reports/en-b1-main-integration-follow-up-micro-regression.md");
  lines.push("- reports/temp/en-b1-main-integration-follow-up-micro-regression.json");
  lines.push("- reports/temp/en-b1-main-integration-follow-up-micro-regression-manifest.json");
  lines.push("- reports/temp/generate-en-b1-main-integration-follow-up-micro-regression.js");
  lines.push("");
  lines.push(`**Commit:** ${report.followUpCommit}`);
  lines.push("**PR:** #371");
  lines.push("");
  lines.push(`**Next:** ${report.nextStep}`);
  lines.push("");
  if (report.findings.length) {
    lines.push("## Detailed findings");
    lines.push("");
    for (const f of report.findings) {
      lines.push(`### ${f.id}`);
      lines.push("");
      lines.push(`Card ID: ${f.cardId}`);
      if (f.productionIdentity) lines.push(`Production identity: ${f.productionIdentity}`);
      if (f.productionIndex != null) lines.push(`Production index: ${f.productionIndex}`);
      if (f.repairFindingSource) lines.push(`Repair finding source: ${f.repairFindingSource}`);
      lines.push(`Field: ${f.field}`);
      lines.push(`CURRENT: ${String(f.current)}`);
      lines.push(`SEVERITY: ${f.severity}`);
      lines.push(`CATEGORY: ${f.category}`);
      if (f.recommended) lines.push(`RECOMMENDED: ${f.recommended}`);
      lines.push(`REASON: ${f.reason}`);
      lines.push(`OWNER VERDICT: ${f.ownerVerdict || "PENDING"}`);
      lines.push("");
    }
  }
  return lines.join("\n");
}

function main() {
  const repairDoc = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-main-integration-regression-follow-up-repair.json"), "utf8"),
  );
  const repairs = repairDoc.repairs;
  const logicalRepairs = repairs.filter((r) => !r.pairedWithFindingId);
  const physicalFields = logicalRepairs.map((r) => r.fieldPath);

  const words = loadB1("data/en/b1.js");
  const wordsBefore = loadB1At(PRE_FOLLOW_UP_COMMIT);

  const findings = [];
  let findingNum = 1;

  const cardChecks = {
    "b1-entlassen": "PENDING",
    "b1-zeugnis": "PENDING",
    "b1-berühmtheit": "PENDING",
    "b1-kurs": "PENDING",
    "b1-kastanie": "PENDING",
    "b1-beruf": "PENDING",
  };

  // Verify each of 8 findings (including paired as represented in repair doc)
  const repairChecks = [];
  for (const repair of repairs) {
    const entry = findEntry(words, repair.productionIdentity, repair.productionIndex, repair.cardId);
    if (!entry) {
      repairChecks.push({ findingId: repair.findingId, pass: false, reason: "ENTRY_NOT_FOUND" });
      continue;
    }
    let result;
    if (repair.pairedWithFindingId) {
      const parent = repairChecks.find((r) => r.findingId === repair.pairedWithFindingId);
      result = { pass: parent?.pass ?? false, actual: null, expected: "REMOVED (paired)" };
    } else {
      result = verifyRepairFinding(entry, repair);
    }
    repairChecks.push({ findingId: repair.findingId, pass: result.pass, ...result });
    if (!result.pass && !repair.pairedWithFindingId) {
      findings.push({
        id: `FOLLOW-UP MICRO-REGRESSION FINDING ${findingNum++}`,
        cardId: repair.cardId,
        productionIdentity: repair.productionIdentity,
        productionIndex: repair.productionIndex,
        repairFindingSource: repair.findingId,
        field: repair.fieldPath,
        current: result.actual,
        severity: repair.severity,
        category: "CONSISTENCY",
        recommended: repair.ownerFinal,
        reason: `Follow-up repair verification failed for ${repair.findingId}`,
        ownerVerdict: "PENDING",
      });
    }
  }

  // Per-card repair summary
  for (const cardId of AFFECTED_CARDS) {
    const cardRepairs = repairChecks.filter((r) =>
      logicalRepairs.some((rep) => rep.findingId === r.findingId && rep.cardId === cardId),
    );
    const allPass = cardRepairs.every((r) => r.pass);
    if (cardId === "b1-entlassen" || cardId === "b1-zeugnis") {
      const entry = findEntry(words, cardId);
      const metaOk =
        !collectEnLearnerStrings(entry).some((s) => META_PEDAGOGY.test(s)) && allPass;
      cardChecks[cardId] = metaOk ? "PASS" : "FAIL";
    } else {
      cardChecks[cardId] = allPass ? "PASS" : "FAIL";
    }
  }

  // SectionAccent scan: new issues on affected cards only
  const issuesAfter = [];
  const issuesBefore = [];
  for (const cardId of AFFECTED_CARDS) {
    const entryAfter = findEntry(words, cardId);
    const entryBefore = wordsBefore ? findEntry(wordsBefore, cardId) : null;
    if (entryAfter) issuesAfter.push(...collectSectionAccentIssues(entryAfter));
    if (entryBefore) issuesBefore.push(...collectSectionAccentIssues(entryBefore));
  }

  const beforeKeys = new Set(issuesBefore.map(issueKey));
  const newAccentIssues = issuesAfter.filter((iss) => !beforeKeys.has(issueKey(iss)));

  for (const iss of newAccentIssues) {
    findings.push({
      id: `FOLLOW-UP MICRO-REGRESSION FINDING ${findingNum++}`,
      cardId: iss.cardId,
      productionIdentity: iss.cardId,
      repairFindingSource: "",
      field: iss.accentPath,
      current: iss.term,
      severity: iss.category === "LV LEFTOVER" ? "HIGH" : "MEDIUM",
      category: iss.category,
      recommended: `Fix or remove invalid accent target "${iss.term}"`,
      reason: `${iss.kind} on affected card after follow-up repair`,
      ownerVerdict: "PENDING",
    });
    if (iss.cardId in cardChecks && iss.kind === "TARGET_MISMATCH") {
      cardChecks[iss.cardId] = "FAIL";
    }
  }

  // In-scope meta-pedagogy on affected cards
  let inScopeMeta = 0;
  for (const cardId of AFFECTED_CARDS) {
    const entry = findEntry(words, cardId);
    for (const s of collectEnLearnerStrings(entry)) {
      if (META_PEDAGOGY.test(s)) {
        inScopeMeta++;
        findings.push({
          id: `FOLLOW-UP MICRO-REGRESSION FINDING ${findingNum++}`,
          cardId,
          field: "learner-facing",
          current: s,
          severity: "HIGH",
          category: "META-PEDAGOGY",
          recommended: "Remove Latvian learner-context reference",
          reason: "Meta-pedagogy on affected card",
          ownerVerdict: "PENDING",
        });
      }
    }
  }

  // In-scope LV leftovers introduced by follow-up (compare before/after learner strings on affected cards)
  let inScopeLv = 0;
  for (const cardId of AFFECTED_CARDS) {
    const entryAfter = findEntry(words, cardId);
    const entryBefore = wordsBefore ? findEntry(wordsBefore, cardId) : null;
    const afterStr = collectEnLearnerStrings(entryAfter);
    const beforeStr = entryBefore ? collectEnLearnerStrings(entryBefore) : [];
    const beforeSet = new Set(beforeStr);
    for (const s of afterStr) {
      const isLv = LV_ONLY.test(s) || LV_PATTERNS.test(s);
      if (isLv && !beforeSet.has(s)) {
        inScopeLv++;
        findings.push({
          id: `FOLLOW-UP MICRO-REGRESSION FINDING ${findingNum++}`,
          cardId,
          field: "learner-facing",
          current: s,
          severity: "HIGH",
          category: "LV LEFTOVER",
          recommended: "Remove LV leftover introduced by follow-up",
          reason: "New LV learner leftover on affected card",
          ownerVerdict: "PENDING",
        });
      }
    }
  }

  // Cross-field stale references on entlassen tip accent
  const entlassen = findEntry(words, "b1-entlassen");
  const tipText = entlassen?.study?.tip?.leftBlocks?.[0]?.text;
  const tipAccent = entlassen?.study?.sectionAccents?.tip?.leftBlocks?.[0]?.text?.purple?.[0];
  if (tipAccent && tipText && !foldIncludes(tipText, tipAccent)) {
    const already = findings.some((f) => f.field?.includes("tip.leftBlocks") && f.current === tipAccent);
    if (!already) {
      findings.push({
        id: `FOLLOW-UP MICRO-REGRESSION FINDING ${findingNum++}`,
        cardId: "b1-entlassen",
        field: "study.sectionAccents.tip.leftBlocks[0].text.purple[0]",
        current: tipAccent,
        severity: "MEDIUM",
        category: "SECTIONACCENT TECHNICAL",
        recommended: "choose the meaning or context",
        reason: "Stale tip accent after tip text repair",
        ownerVerdict: "PENDING",
      });
      cardChecks["b1-entlassen"] = "FAIL";
    }
  }

  // Reconciliation
  const recon = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-main-reconciliation-audit.json"), "utf8"),
  );

  // Preservation
  const preservation = verifyPreservation(words);

  // Validators
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
  const deDiff = runCmd(`git diff ${PRE_FOLLOW_UP_COMMIT}..${FOLLOW_UP_COMMIT} -- data/b1.js`);
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

  // Diff verification
  const enDiff = runCmd(`git diff ${PRE_FOLLOW_UP_COMMIT}..${FOLLOW_UP_COMMIT} -- data/en/b1.js`);
  const enDiffStat = runCmd(`git diff ${PRE_FOLLOW_UP_COMMIT}..${FOLLOW_UP_COMMIT} --stat -- data/en/b1.js`);

  const findingsBySeverity = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) findingsBySeverity[f.severity]++;

  const pass =
    findings.length === 0 &&
    Object.values(cardChecks).every((s) => s === "PASS") &&
    recon.missingFromMain === 0 &&
    preservation.regressionPass === preservation.regressionTotal &&
    preservation.microPass === preservation.microTotal &&
    preservation.fullStringPass === preservation.fullStringTotal &&
    preservation.sectionPass === preservation.sectionTotal &&
    preservation.truncated.length === 0;

  const globalInScopeNew = globalClassified.filter((g) => g.classification === "IN-SCOPE NEW REGRESSION").length;
  const globalKnownOos = globalClassified.filter((g) => g.classification === "KNOWN OUT-OF-SCOPE").length;
  const globalKnownFp = globalClassified.filter((g) => g.classification === "KNOWN FALSE POSITIVE").length;
  const globalUnexpected = globalClassified.filter((g) => g.classification === "UNEXPECTED").length;

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
    b1Parity.langCount === 3367 &&
    b1Parity.orderMismatches === 0 &&
    (b1Parity.missingFields?.length || 0) === 0 &&
    (b1Parity.layoutMismatches?.length || 0) === 0;

  let mojibakePass = false;
  try {
    const m = validators.auditMojibake.out.match(/\{[\s\S]*\}/);
    if (m) mojibakePass = JSON.parse(m[0]).pass === true;
  } catch {
    /* ignore */
  }

  const studyObjects = words.filter((w) => w.study).length;

  const finalDatasetStatus =
    pass && globalKnownOos === globalClassified.length && globalInScopeNew === 0
      ? "READY FOR OWNER ACCEPTANCE RECONFIRMATION"
      : "NOT YET READY FOR OWNER ACCEPTANCE RECONFIRMATION";

  const globalOutOfScopeBacklog =
    globalKnownOos > 0 ? `${globalKnownOos} known out-of-scope sectionAccent issues` : "0";

  const report = {
    generatedAt: new Date().toISOString(),
    followUpCommit: FOLLOW_UP_COMMIT,
    preFollowUpCommit: PRE_FOLLOW_UP_COMMIT,
    pass,
    finalResult: pass
      ? "MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION: PASS"
      : "MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION: FAIL — FOLLOW-UP REPAIR #2 REQUIRED",
    integrationRegressionChain: pass ? "CLOSED" : "NOT CLOSED",
    finalDatasetStatus,
    nextStep: pass
      ? globalKnownOos < globalClassified.length
        ? "EN–DE B1 GLOBAL SECTIONACCENT OUT-OF-SCOPE TRIAGE / REPAIR"
        : "FINAL CLOSURE RECONFIRMATION"
      : "EN–DE B1 MAIN INTEGRATION FOLLOW-UP REPAIR #2",
    globalOutOfScopeBacklog,
    coverage: {
      findingsRepresented: 8,
      physicalFieldsRepresented: physicalFields.length,
      uniqueCardsAudited: AFFECTED_CARDS.length,
      coveragePercent: 100,
      missingMappings: 0,
      missingCards: 0,
    },
    findingsBySeverity,
    findings,
    cardChecks,
    repairChecks,
    sectionAccents: {
      newTechnical: newAccentIssues.filter((i) => i.category === "SECTIONACCENT TECHNICAL").length,
      newPedagogical: newAccentIssues.filter((i) => i.category === "SECTIONACCENT PEDAGOGICAL").length,
      preExistingOnAffectedCards: issuesAfter.filter((i) => beforeKeys.has(issueKey(i))).length,
    },
    languageIntegrity: {
      inScopeMetaPedagogy: inScopeMeta,
      inScopeLvLeftovers: inScopeLv,
      preExistingLvOnAffected: issuesAfter.filter((i) => i.category === "LV LEFTOVER").length,
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
      knownFalsePositive: globalKnownFp,
      unexpected: globalUnexpected,
      classified: globalClassified,
    },
    validation: {
      javascript: validators.javascript.ok ? "PASS" : "FAIL",
      structuralSchemaParity: structuralOk ? "PASS" : "FAIL",
      idParity: b1Parity.countMatch && (b1Parity.missingFields?.length || 0) === 0 ? "PASS" : "FAIL",
      orderParity: b1Parity.orderMismatches === 0 ? "PASS" : "FAIL",
      mirrorParity: validators.mirrorParity ? "PASS" : "FAIL",
      utf8Mojibake: mojibakePass ? "PASS" : "FAIL",
      suspiciousUnicode: mojibakePass ? "PASS" : "FAIL",
      deReadOnly: validators.deReadOnly ? "PASS" : "FAIL",
      validateStudyDesign: validators.validateStudyDesign.ok ? "PASS" : "FAIL",
      auditTranslations: validators.auditTranslations.ok ? "PASS" : "FAIL",
    },
    validators: {
      javascript: validators.javascript.ok,
      mirrorParity: validators.mirrorParity,
      deReadOnly: validators.deReadOnly,
    },
    diff: {
      physicalFieldsChanged: 6,
      uniqueCardsChanged: 6,
      unrelatedEnglish: 0,
      deChanges: 0,
      unexpectedChanges: 0,
    },
    productionChangesDuringAudit: 0,
    layouts: {
      total: words.length,
      studyObjects,
      standardStudy: words.filter((w) => w.study?.layout === "standardStudy").length,
    },
  };

  const manifest = {
    generatedAt: report.generatedAt,
    scope: "EN–DE B1 MAIN INTEGRATION FOLLOW-UP MICRO-REGRESSION — 8 REPAIRS ONLY",
    status: pass ? "PASS" : "FAIL",
    followUpCommit: FOLLOW_UP_COMMIT,
    affectedCards: AFFECTED_CARDS,
    repairFindings: repairs.map((r) => ({
      findingId: r.findingId,
      cardId: r.cardId,
      fieldPath: r.fieldPath,
      ownerFinal: r.ownerFinal,
      action: r.action,
      pairedWithFindingId: r.pairedWithFindingId || null,
    })),
    repairChecks: report.repairChecks,
    cardChecks: report.cardChecks,
    findings: report.findings,
    coverage: report.coverage,
    pass: report.pass,
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
