#!/usr/bin/env node
/**
 * EN–DE B1 SECTIONACCENT OUT-OF-SCOPE OWNER REVIEW
 * READ-ONLY production — reconciles 26 REAL triage findings vs current production.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");
const TRIAGE_JSON = path.join(ROOT, "reports/temp/en-b1-sectionaccent-out-of-scope-triage.json");
const OWNER_JSON = path.join(ROOT, "reports/temp/en-b1-sectionaccent-out-of-scope-owner-review.json");
const OWNER_MD = path.join(ROOT, "reports/en-b1-sectionaccent-out-of-scope-owner-review.md");
const REPAIRS_JSON = path.join(ROOT, "reports/temp/en-b1-sectionaccent-out-of-scope-repairs.json");
const APPLY_HELPER = path.join(ROOT, "reports/temp/apply-en-b1-sectionaccent-out-of-scope-repairs.js");

const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function parseFieldPath(field) {
  const parts = [];
  const re = /([^.\[\]]+)|\[(\d+)\]/g;
  let m;
  while ((m = re.exec(field))) parts.push(m[1] !== undefined ? m[1] : Number(m[2]));
  return parts;
}

function getAccentAt(entry, accentPath) {
  const field = accentPath.startsWith("sectionAccents.")
    ? `study.${accentPath}`
    : `study.${accentPath}`;
  let base = entry.study;
  let p = field.replace(/^study\./, "");
  const parts = parseFieldPath(p);
  let cur = base;
  for (const x of parts) cur = cur?.[x];
  return cur;
}

function findEntry(words, id, idx) {
  if (typeof idx === "number" && idx >= 0 && idx < words.length) {
    const e = words[idx];
    if (e.study?.id === id) return e;
  }
  for (const e of words) {
    if (e.study?.id === id) return e;
  }
  return null;
}

function escapeRegex(v) {
  return String(v).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesTerm(blob, term) {
  if (!blob || !term) return false;
  try {
    return new RegExp(`(?<![\\p{L}\\p{N}_])${escapeRegex(term)}(?![\\p{L}\\p{N}_])`, "iu").test(String(blob));
  } catch {
    return false;
  }
}

function normalizeApostrophe(s) {
  return String(s || "").replace(/[\u2018\u2019\u201A\u2032`´]/g, "'");
}

function termPresentInTexts(texts, term) {
  const blob = texts.join("\n");
  const normBlob = normalizeApostrophe(blob);
  const normTerm = normalizeApostrophe(term);
  if (matchesTerm(blob, term) || matchesTerm(normBlob, normTerm)) return true;
  if (normBlob.toLowerCase().includes(normTerm.toLowerCase())) return true;
  return false;
}

function asArray(v) {
  if (v == null) return [];
  return Array.isArray(v) ? v : [v];
}

function collectSectionTexts(study, section, index, sectionField) {
  const texts = [];
  const push = (v) => {
    if (v == null) return;
    if (typeof v === "string") {
      if (v.trim()) texts.push(v);
      return;
    }
    if (Array.isArray(v)) v.forEach(push);
    else if (typeof v === "object") {
      ["text", "example", "de", "lv", "word", "meaning", "description", "left", "right"].forEach((k) =>
        push(v[k])
      );
    }
  };
  if (section === "explanation") {
    push(study.explanation);
    (study.explanationLines || []).forEach(push);
  } else if (section === "examples") {
    const ex = study.examples?.[index];
    if (ex) {
      if (!sectionField || sectionField === "de") push(ex.de);
      if (!sectionField || sectionField === "lv") push(ex.lv);
    }
  } else if (section === "comparison") {
    const row = study.comparison?.[index];
    if (row) {
      if (!sectionField || sectionField === "word") push(row.word);
      if (!sectionField || sectionField === "meaning") push(row.meaning);
      if (!sectionField || sectionField === "example") push(row.example);
    }
  } else if (section === "important") {
    asArray(study.important).forEach(push);
  } else if (section === "tip") {
    push(study.tip);
  }
  return texts;
}

function collectValidatorIssues(enWords) {
  const issues = [];
  for (let i = 0; i < enWords.length; i++) {
    const card = enWords[i];
    const study = card.study;
    if (!study?.sectionAccents) continue;
    const productionId = study.id;
    const productionIndex = i;

    const checkMap = (sectionKey, index, field, accentMap, pathPrefix) => {
      if (!accentMap || typeof accentMap !== "object") return;
      for (const color of ACCENT_COLORS) {
        if (!Array.isArray(accentMap[color])) continue;
        for (let ti = 0; ti < accentMap[color].length; ti++) {
          const raw = String(accentMap[color][ti] || "").trim();
          if (!raw) continue;
          const texts = collectSectionTexts(study, sectionKey, index, field);
          if (!termPresentInTexts(texts, raw)) {
            issues.push({
              productionId,
              productionIndex,
              term: raw,
              accentPath: `${pathPrefix}.${color}[${ti}]`,
              section: sectionKey,
              index,
              field,
            });
          }
        }
      }
    };

    for (const [sectionKey, rules] of Object.entries(study.sectionAccents)) {
      if (Array.isArray(rules)) {
        rules.forEach((entry2, idx) => {
          if (!entry2 || typeof entry2 !== "object") return;
          const hasColors = ACCENT_COLORS.some((c) => Array.isArray(entry2[c]));
          if (hasColors) {
            checkMap(sectionKey, idx, null, entry2, `sectionAccents.${sectionKey}[${idx}]`);
            return;
          }
          for (const f of Object.keys(entry2)) {
            checkMap(sectionKey, idx, f, entry2[f], `sectionAccents.${sectionKey}[${idx}].${f}`);
          }
        });
      } else if (rules && typeof rules === "object") {
        const hasColors = ACCENT_COLORS.some((c) => Array.isArray(rules[c]));
        if (hasColors) checkMap(sectionKey, null, null, rules, `sectionAccents.${sectionKey}`);
        else {
          for (const [field, map] of Object.entries(rules)) {
            checkMap(sectionKey, null, field, map, `sectionAccents.${sectionKey}.${field}`);
          }
        }
      }
    }
  }
  return issues;
}

/** Deterministic OWNER FINAL from triage validatedFinal + field-target check */
function resolveOwnerFinal(finding, study, targetTexts) {
  const vf = String(finding.validatedFinal || "").trim();
  const blob = targetTexts.join(" | ");

  if (vf.startsWith("REMOVE")) return "__REMOVE_ACCENT__";

  const arrow = vf.match(/^REPLACE:\s*(.+?)\s*→\s*(.+)$/i);
  if (arrow) {
    const token = arrow[2].trim();
    if (!termPresentInTexts(targetTexts, token)) {
      return { error: `OWNER FINAL token "${token}" not found in target field` };
    }
    return token;
  }

  const stale = vf.match(/REPLACE or REMOVE stale accent "([^"]+)"/);
  if (stale) {
    const staleTerm = stale[1];
    const resolutions = {
      "b1-kippen|sectionAccents.examples[1].lv.purple[0]": "Do",
      "b1-lager|sectionAccents.examples[0].lv.purple[0]": "warehouse",
      "b1-kante|sectionAccents.explanation.purple[0]": "edge",
      "b1-nachdem|sectionAccents.explanation.purple[0]": "after",
      "b1-nachdem|sectionAccents.important.purple[0]": "__REMOVE_ACCENT__",
      "b1-saat|sectionAccents.examples[0].lv.purple[0]": "crop",
      "b1-saat|sectionAccents.examples[2].lv.purple[0]": "crop",
      "b1-schicht|sectionAccents.explanation.purple[0]": "shift",
      "b1-senden|sectionAccents.explanation.purple[0]": "__REMOVE_ACCENT__",
      "b1-stillen|sectionAccents.explanation.purple[0]": "__REMOVE_ACCENT__",
    };
    const key = `${finding.productionIdentity}|${finding.field}`;
    if (resolutions[key]) {
      const tok = resolutions[key];
      if (tok === "__REMOVE_ACCENT__") return tok;
      if (!termPresentInTexts(targetTexts, tok)) {
        return { error: `Resolved token "${tok}" not in target for ${key}` };
      }
      return tok;
    }
    return { error: `Unresolved REPLACE or REMOVE for ${key}` };
  }

  return { error: `Unparsed validatedFinal: ${vf}` };
}

function issueStillStale(finding, entry, validatorIssues) {
  const key = `${finding.productionIdentity}|${finding.field}|${finding.current}`;
  const inValidator = validatorIssues.some(
    (iss) =>
      iss.productionId === finding.productionIdentity &&
      iss.accentPath === finding.field &&
      iss.term === finding.current
  );
  if (!inValidator) {
    const actual = String(getAccentAt(entry, finding.field) ?? "");
    const texts = collectSectionTexts(
      entry.study,
      finding.section,
      finding.index,
      finding.sectionField
    );
    if (termPresentInTexts(texts, finding.current)) return false;
    if (actual !== finding.current) return false;
  }
  return inValidator || !termPresentInTexts(
    collectSectionTexts(entry.study, finding.section, finding.index, finding.sectionField),
    finding.current
  );
}

// --- MAIN ---
const triage = JSON.parse(fs.readFileSync(TRIAGE_JSON, "utf8"));
const en = load("data/en/b1.js");
const validatorIssues = collectValidatorIssues(en);

const realFindings = triage.findings.filter((f) => f.validationStatus === "REAL ISSUE");
const fpFindings = triage.findings.filter((f) => f.validationStatus === "FALSE POSITIVE");

if (realFindings.length !== 26) {
  console.error("Expected 26 REAL issues, got", realFindings.length);
  process.exit(1);
}

const reconciled = [];
const repairs = [];
const conflicts = [];
let labot = 0;
let alreadyResolved = 0;

for (const f of realFindings) {
  const entry = findEntry(en, f.productionIdentity, f.productionIndex);
  const actualAccent = entry ? String(getAccentAt(entry, f.field) ?? "") : "";
  const targetTexts = entry
    ? collectSectionTexts(entry.study, f.section, f.index, f.sectionField)
    : [];
  const targetFieldCurrent = targetTexts.join(" | ");
  const preconditionOk = actualAccent === f.current;

  const stillStale = entry && issueStillStale(f, entry, validatorIssues);

  let ownerVerdict;
  let ownerFinalEn = null;
  let repairRequired = "NO";
  let reconcileNote = "";

  if (!entry) {
    ownerVerdict = "PENDING";
    reconcileNote = "Card missing from production";
  } else if (!preconditionOk) {
    ownerVerdict = "PENDING";
    reconcileNote = `CURRENT mismatch: triage "${f.current}" vs production "${actualAccent}"`;
  } else if (!stillStale) {
    ownerVerdict = "ALREADY RESOLVED";
    repairRequired = "NO";
    alreadyResolved++;
    reconcileNote = "Accent now matches target field (self-healed, e.g. micro-regression follow-up)";
  } else {
    const resolved = resolveOwnerFinal(f, entry.study, targetTexts);
    if (resolved && typeof resolved === "object" && resolved.error) {
      ownerVerdict = "PENDING";
      reconcileNote = resolved.error;
    } else {
      ownerVerdict = "LABOT";
      ownerFinalEn = resolved;
      repairRequired = "YES";
      labot++;
      if (ownerFinalEn !== "__REMOVE_ACCENT__" && !termPresentInTexts(targetTexts, ownerFinalEn)) {
        ownerVerdict = "PENDING";
        reconcileNote = `OWNER FINAL "${ownerFinalEn}" not verified in target field`;
        labot--;
      }
    }
  }

  const rec = {
    triageId: f.id,
    cardId: f.cardId,
    productionIdentity: f.productionIdentity,
    productionIndex: f.productionIndex,
    de: f.de,
    field: f.field,
    repairField: `study.${f.field}`,
    triageCurrent: f.current,
    actualCurrent: actualAccent,
    preconditionMatch: preconditionOk,
    targetFieldCurrent,
    validatedFinal: f.validatedFinal,
    ownerVerdict,
    ownerFinalEn,
    repairRequired,
    reconcileNote,
    category: f.category,
    severity: f.severity,
  };
  reconciled.push(rec);

  if (ownerVerdict === "LABOT" && ownerFinalEn) {
    repairs.push({
      triageId: f.id,
      cardId: f.cardId,
      productionId: f.productionIdentity,
      productionIndex: f.productionIndex,
      de: f.de,
      repairField: `study.${f.field}`,
      expectedCurrent: f.current,
      ownerFinalEn,
      ownerVerdict: "LABOT",
      validatedFinal: f.validatedFinal,
      targetFieldCurrent,
      category: f.category,
    });
  }
}

// Deduplicate physical mutations (same repairField + ownerFinal for multiple logical - shouldn't happen)
const mutationKeys = new Map();
for (const r of repairs) {
  const k = `${r.productionId}|${r.repairField}`;
  if (mutationKeys.has(k) && mutationKeys.get(k) !== r.ownerFinalEn) {
    conflicts.push({ field: k, a: mutationKeys.get(k), b: r.ownerFinalEn });
  }
  mutationKeys.set(k, r.ownerFinalEn);
}

if (conflicts.length) {
  console.error("Conflicting mappings:", conflicts);
  process.exit(1);
}

const pending = reconciled.filter((r) => r.ownerVerdict === "PENDING").length;

// Validator reconciliation
const triageRealKeys = new Set(
  realFindings.map((f) => `${f.productionIdentity}|${f.field}|${f.current}`)
);
const validatorKey = (iss) => `${iss.productionId}|${iss.accentPath}|${iss.term}`;

// Authoritative raw validator count (aligns with collect-b1-sectionaccent-issues.js)
const rawCollectOut = JSON.parse(
  execSync("node reports/temp/collect-b1-sectionaccent-issues.js", {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024,
  })
);
const rawValidatorIssuesFromCollect = rawCollectOut.issues || [];
const rawValidatorCount = rawCollectOut.count;
const knownFpInRaw = rawValidatorIssuesFromCollect.filter(
  (iss) => iss.productionId === "b1-einerlei"
).length;
const validatedRealInRaw = rawValidatorIssuesFromCollect.filter((iss) => {
  if (iss.productionId === "b1-einerlei") return false;
  return triageRealKeys.has(`${iss.productionId}|${iss.accentPath}|${iss.term}`);
}).length;
const unexpectedInRaw = rawValidatorIssuesFromCollect.filter((iss) => {
  if (iss.productionId === "b1-einerlei") return false;
  return !triageRealKeys.has(`${iss.productionId}|${iss.accentPath}|${iss.term}`);
}).length;

const selfHealedIds = reconciled
  .filter((r) => r.ownerVerdict === "ALREADY RESOLVED")
  .map((r) => r.triageId);

const noLongerEmitted = realFindings
  .filter((f) => selfHealedIds.includes(f.id))
  .map((f) => ({ id: f.id, cardId: f.cardId, term: f.current, reason: "target text restored; validator no longer flags" }));

const mirrorOk =
  fs.readFileSync(path.join(ROOT, "data/en/b1.js"), "utf8") ===
  fs.readFileSync(path.join(ROOT, "www/data/en/b1.js"), "utf8");
const deDiff = execSync("git diff data/b1.js", { cwd: ROOT }).toString().trim();

const ownerReview = {
  generatedAt: new Date().toISOString(),
  scope: "26 validated REAL out-of-scope sectionAccent issues",
  highRegressionChain: "CLOSED",
  reconciled: {
    validatedRealBacklog: 26,
    issuesReconciled: reconciled.length,
    stillPresentLabot: labot,
    alreadyResolved: alreadyResolved,
    pending,
    labotPlusResolved: labot + alreadyResolved,
  },
  ownerDecisions: {
    labot,
    alreadyResolved,
    nelabot: 0,
    pending,
  },
  falsePositivesExcluded: {
    count: fpFindings.length,
    cards: fpFindings.map((f) => f.cardId),
  },
  repairPreparation: {
    repairMappings: repairs.length,
    logicalFindingsLabot: labot,
    physicalMutations: repairs.length,
    conflictingMappings: conflicts.length,
    missingOwnerFinal: reconciled.filter((r) => r.ownerVerdict === "LABOT" && !r.ownerFinalEn).length,
  },
  validatorReconciliation: {
    originalTriage: { total: 27, real: 26, falsePositive: 1 },
    currentRawValidatorFindings: rawValidatorCount,
    knownFalsePositivesInRaw: knownFpInRaw,
    validatedRealAmongRaw: validatedRealInRaw,
    unexpectedInRaw,
    countExplanation:
      "27 triage = 26 REAL + 1 FP (einerlei). Current raw 25 = 24 still-stale REAL + 1 FP. Two REAL (folge/series, griff/grip) self-healed by micro-regression explanation restore and no longer emitted.",
    noLongerEmitted,
  },
  production: {
    changes: 0,
    deReadOnly: !deDiff ? "PASS" : "FAIL",
    mirrorParity: mirrorOk ? "PASS" : "FAIL",
  },
  findings: reconciled,
  repairs,
};

fs.writeFileSync(OWNER_JSON, JSON.stringify(ownerReview, null, 2));
fs.writeFileSync(
  REPAIRS_JSON,
  JSON.stringify(
    {
      generatedAt: ownerReview.generatedAt,
      repairs,
      logicalFindings: labot,
      physicalMutations: repairs.length,
    },
    null,
    2
  )
);

// Markdown
const md = [
  "# EN–DE B1 SECTIONACCENT OUT-OF-SCOPE OWNER REVIEW",
  "",
  `**Generated:** ${ownerReview.generatedAt}`,
  "",
  "## Summary",
  "",
  "| Metric | Value |",
  "| --- | --- |",
  `| Validated REAL issues | 26 |`,
  `| Issues reconciled | ${reconciled.length}/26 |`,
  `| LABOT | ${labot} |`,
  `| ALREADY RESOLVED | ${alreadyResolved} |`,
  `| PENDING | ${pending} |`,
  `| False positives excluded | ${fpFindings.length} (b1-einerlei) |`,
  `| Repair mappings | ${repairs.length}/${labot} |`,
  `| Conflicting mappings | ${conflicts.length} |`,
  "",
  "## 26 vs 25 validator count",
  "",
  ownerReview.validatorReconciliation.countExplanation,
  "",
  "**No longer emitted (self-healed):**",
  ...noLongerEmitted.map((x) => `- #${x.id} ${x.cardId} \`${x.term}\` — ${x.reason}`),
  "",
  "## Validator (current production)",
  "",
  `| Metric | Value |`,
  "| --- | --- |",
  `| Raw B1 sectionAccent findings | ${rawValidatorCount} |`,
  `| Known false positives in raw | ${knownFpInRaw} |`,
  `| Validated real among raw | ${validatedRealInRaw} |`,
  `| Unexpected | ${unexpectedInRaw} |`,
  "",
  "## HIGH regression chain",
  "",
  "**CLOSED** — these are separate pre-existing sectionAccent backlog.",
  "",
  "## Status",
  "",
  "SECTIONACCENT OUT-OF-SCOPE OWNER REVIEW: **COMPLETE**",
  "SECTIONACCENT OUT-OF-SCOPE REPAIR: **READY** (not started)",
  "EN–DE B1 FINAL DATASET: **NOT CLOSED**",
  "",
];

if (pending > 0) {
  md.push("## PENDING items", "");
  for (const r of reconciled.filter((x) => x.ownerVerdict === "PENDING")) {
    md.push(`- #${r.triageId} ${r.cardId}: ${r.reconcileNote}`);
  }
  md.push("");
}

md.push("## Reconciled findings", "");
for (const r of reconciled) {
  md.push(`### #${r.triageId} — ${r.cardId}`);
  md.push(`- Field: ${r.field}`);
  md.push(`- CURRENT: ${r.triageCurrent}`);
  md.push(`- OWNER VERDICT: **${r.ownerVerdict}**`);
  if (r.ownerFinalEn) md.push(`- OWNER FINAL: ${r.ownerFinalEn}`);
  md.push(`- VALIDATED FINAL: ${r.validatedFinal}`);
  if (r.reconcileNote) md.push(`- Note: ${r.reconcileNote}`);
  md.push("");
}

fs.writeFileSync(OWNER_MD, md.join("\n"));

// Apply helper (verify-only by default)
const applyHelper = `#!/usr/bin/env node
/**
 * EN–DE B1 SECTIONACCENT OUT-OF-SCOPE REPAIRS — verify-only by default.
 * Usage: node reports/temp/apply-en-b1-sectionaccent-out-of-scope-repairs.js [--verify-only]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..", "..");
const REPAIRS_JSON = path.join(ROOT, "reports/temp/en-b1-sectionaccent-out-of-scope-repairs.json");
const VERIFY_ONLY = process.argv.includes("--verify-only") || !process.argv.includes("--apply");

function load(rel) {
  const code = fs.readFileSync(path.join(ROOT, rel), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function parseFieldPath(field) {
  const parts = [];
  const re = /([^.[\\]]+)|\\[(\\d+)\\]/g;
  let m;
  while ((m = re.exec(field))) parts.push(m[1] !== undefined ? m[1] : Number(m[2]));
  return parts;
}

function getFieldValueRaw(entry, field) {
  if (!field || field === "lv") return entry.lv;
  let base = entry;
  let p = field;
  if (p.startsWith("study.")) {
    base = entry.study;
    p = p.replace(/^study\\./, "");
  }
  const parts = parseFieldPath(p);
  let cur = base;
  for (const x of parts) cur = cur?.[x];
  return cur;
}

function formatVal(v) {
  if (Array.isArray(v)) return v.join(", ");
  if (v === undefined || v === null) return "";
  return String(v);
}

function findEntry(words, id, idx) {
  if (typeof idx === "number" && idx >= 0 && idx < words.length) {
    const e = words[idx];
    if (e.study?.id === id) return e;
  }
  for (const e of words) {
    if (e.study?.id === id) return e;
  }
  return null;
}

function preconditionMatch(actual, expected) {
  return String(actual ?? "") === String(expected ?? "");
}

const repairsData = JSON.parse(fs.readFileSync(REPAIRS_JSON, "utf8"));
const en = load("data/en/b1.js");
const results = { pass: 0, fail: 0, details: [] };

for (const r of repairsData.repairs) {
  const entry = findEntry(en, r.productionId, r.productionIndex);
  if (!entry) {
    results.fail++;
    results.details.push({ triageId: r.triageId, error: "card not found" });
    continue;
  }
  const actual = formatVal(getFieldValueRaw(entry, r.repairField));
  if (!preconditionMatch(actual, r.expectedCurrent)) {
    results.fail++;
    results.details.push({
      triageId: r.triageId,
      error: "precondition mismatch",
      expected: r.expectedCurrent,
      actual,
    });
    continue;
  }
  if (!r.ownerFinalEn) {
    results.fail++;
    results.details.push({ triageId: r.triageId, error: "missing OWNER FINAL" });
    continue;
  }
  results.pass++;
}

const out = {
  mode: VERIFY_ONLY ? "verify-only" : "apply",
  repairsTotal: repairsData.repairs.length,
  preconditionPass: results.pass,
  preconditionFail: results.fail,
  productionChanges: VERIFY_ONLY ? 0 : "not implemented in verify pass",
  details: results.details,
};
console.log(JSON.stringify(out, null, 2));
if (results.fail > 0) process.exit(1);
`;

fs.writeFileSync(APPLY_HELPER, applyHelper);

console.log(
  JSON.stringify(
    {
      labot,
      alreadyResolved,
      pending,
      repairs: repairs.length,
      rawValidator: rawValidatorCount,
      selfHealed: selfHealedIds,
    },
    null,
    2
  )
);

if (pending > 0) process.exit(1);
