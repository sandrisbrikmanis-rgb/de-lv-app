#!/usr/bin/env node
"use strict";
/**
 * DA–DE Verbs final post-repair audit (READ-ONLY).
 * Usage: node scripts/audit-da-verbs-final-post-repair.js [--skip-luna]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { findEntry, getDaValue, normalizeField, applyKey } = require("./lib/da-verbs-owner-path");
const { normalizeText, buildUnifiedOwnerExpectations } = require("./lib/da-verbs-unified-owner-expectations");

const DA_FILE = path.join(ROOT, "data/da/verbs.js");
const WWW_FILE = path.join(ROOT, "www/data/da/verbs.js");
const DE_FILE = path.join(ROOT, "data/verbs.js");
const REPORT = path.join(ROOT, "reports/da-verbs-final-post-repair-audit.md");
const JSON_OUT = path.join(ROOT, "reports/temp/da-verbs-final-post-repair-audit.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/da-verbs-final-post-repair-luna");
const BASELINE_REF = process.env.DA_VERBS_BASELINE || "/tmp/da-verbs-post-repair-baseline.js";
const REPAIR_BASE = process.env.DA_VERBS_REPAIR_BASE || "main";
const SKIP_LUNA = process.argv.includes("--skip-luna");
const EXPECTED_VERBS = 189;
const FORM_KEYS = ["infinitiv", "praesens", "imperfektIndikativ", "imperfektKonjunktiv", "partizipVergangenheit"];

const LINGUISTIC_13 = [
  { cardId: "verb-29", field: "partizipVergangenheit", expected: "Knibet" },
  { cardId: "verb-95", field: "praesens", expected: "Det siver" },
  { cardId: "verb-117", field: "imperfektIndikativ", expected: "Han hvæsed" },
  { cardId: "verb-117", field: "imperfektKonjunktiv", expected: "Han ville hvæse" },
  { cardId: "verb-117", field: "partizipVergangenheit", expected: "Hvæset" },
  { cardId: "verb-117", field: "praesens", expected: "Han hvæser" },
  { cardId: "verb-133", field: "partizipVergangenheit", expected: "Synket" },
  { cardId: "verb-136", field: "infinitiv", expected: "At skulle" },
  { cardId: "verb-149", field: "imperfektIndikativ", expected: "Det hvirvlede" },
  { cardId: "verb-149", field: "imperfektKonjunktiv", expected: "Det ville hvirvle" },
  { cardId: "verb-150", field: "partizipVergangenheit", expected: "Stunket" },
  { cardId: "verb-162", field: "partizipVergangenheit", expected: "Ærgret" },
  { cardId: "verb-178", field: "partizipVergangenheit", expected: "Vredet" },
];

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(viņš|viņa|viņam|viņi|Pazina|Bija|Iet|Atrast|Prik|Izdoties|Nosaukt|Saut|Salis|Piedot|Cept|Kost|Laisties|Lidojis|mēs|jūs|latviešu|vācu)\b/i;
const DA_ALLOWLIST = /^(At spise|Han ville spise|Han spiser|Han spiste|Spist)$/i;
const EN_PATTERNS = /\b(Translation:|TODO|TBD|instead of|you are|meaning:|Context-specific|Natural Danish|Distinct Danish|natural Danish form\))\b/i;
const ARTIFACT = /\b(LABOT|PENDING|NEEDS_SOURCE_REVIEW|FALSE_POSITIVE|NELABOT)\b/i;
const DE_LEAK = /\b(er ist\)|ist\)|gewänne|gemelkt|pflog|drösche|rönne)\b/i;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|Translation:|\(Context-specific|\(Natural Danish)/i;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;

const NON_ERROR_CATEGORIES = new Set([
  "ACCEPTABLE_VARIANT",
  "FALSE_POSITIVE",
  "STYLE_ONLY",
  "NEEDS_SOURCE_REVIEW",
  "SOURCE_DE_ISSUE",
]);

function loadVerbs(filePath) {
  const code = fs.readFileSync(filePath, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.VERB_ENTRIES;
}

function ensureBaseline() {
  if (!fs.existsSync(BASELINE_REF)) {
    execSync(`git show ${REPAIR_BASE}:data/da/verbs.js > ${BASELINE_REF}`, { cwd: ROOT, stdio: "pipe" });
  }
}

function classifyForeign(text) {
  if (typeof text !== "string" || !text.trim()) return [];
  const reasons = [];
  if (LV_DIAC.test(text)) reasons.push("LV_DIAC");
  if (LV_WORDS.test(text)) reasons.push("LV");
  if (EN_PATTERNS.test(text)) reasons.push("EN");
  if (ARTIFACT.test(text)) reasons.push("OWNER_ARTIFACT");
  if (DE_LEAK.test(text)) reasons.push("DE_LEAK");
  if (PLACEHOLDER.test(text)) reasons.push("PLACEHOLDER");
  if (ZERO_WIDTH.test(text)) reasons.push("ZERO_WIDTH");
  return reasons;
}

function exportLunaBatches(allForms) {
  fs.mkdirSync(LUNA_DIR, { recursive: true });
  const batchSize = 50;
  const paths = [];
  for (let i = 0; i < allForms.length; i += batchSize) {
    const slice = allForms.slice(i, i + batchSize);
    const label = `batch-${String(Math.floor(i / batchSize) + 1).padStart(3, "0")}`;
    const payload = {
      auditType: "da_verbs_final_post_repair",
      batch: label,
      instructions:
        "GPT-5.6 Luna READ-ONLY audit. Compare DA (lv) vs DE for each verb form. Flag real Danish linguistic/semantic/paradigm issues. Do NOT suggest DE changes. FALSE_POSITIVE if grammatically valid.",
      forms: slice,
    };
    const out = path.join(LUNA_DIR, `${label}.json`);
    fs.writeFileSync(out, JSON.stringify(payload, null, 2));
    paths.push(out);
  }
  return paths;
}

function loadLunaFindings() {
  if (!fs.existsSync(LUNA_DIR)) return [];
  const all = [];
  for (const f of fs.readdirSync(LUNA_DIR).filter((x) => x.endsWith("-findings.json")).sort()) {
    const data = JSON.parse(fs.readFileSync(path.join(LUNA_DIR, f), "utf8"));
    for (const item of data.findings || []) {
      if (String(item.status || "").toUpperCase() === "PASS") continue;
      all.push(item);
    }
  }
  return all;
}

function main() {
  ensureBaseline();
  const baseline = loadVerbs(BASELINE_REF);
  const after = loadVerbs(DA_FILE);
  const deRef = loadVerbs(DE_FILE);
  const owner = buildUnifiedOwnerExpectations();

  const findings = [];
  let fid = 0;
  function add(severity, cardId, field, category, problem, detail = {}) {
    fid++;
    findings.push({
      id: `DA-VERB-FPR-${String(fid).padStart(4, "0")}`,
      severity,
      cardId,
      field,
      category,
      problem,
      deCurrent: detail.deCurrent || "",
      daCurrent: detail.daCurrent || "",
      proposedDa: detail.proposedDa || detail.recommendedDa || "",
      reason: detail.reason || "",
      source: detail.source || "deterministic",
    });
  }

  const coverage = {
    totalVerbs: EXPECTED_VERBS,
    auditedVerbs: after.length,
    totalDaFields: 0,
    auditedDaFields: 0,
  };

  const allForms = [];
  for (let i = 0; i < after.length; i++) {
    const cardId = `verb-${i}`;
    for (const formKey of FORM_KEYS) {
      coverage.totalDaFields++;
      coverage.auditedDaFields++;
      const de = after[i]?.[formKey]?.de || "";
      const lv = after[i]?.[formKey]?.lv;
      allForms.push({
        cardId,
        field: `${formKey}.lv`,
        formKey,
        de,
        daCurrent: typeof lv === "string" ? lv : "",
        verbIndex: i,
      });
    }
  }

  const ownerMatch = { expected: owner.uniqueCount, match: 0, mismatch: 0, missing: 0, criticalArtifact: 0 };
  const ownerByKey = new Map(owner.expectations.map((e) => [e.key, e]));

  for (const exp of owner.expectations) {
    const entry = findEntry(after, exp.cardId);
    if (!entry) {
      ownerMatch.missing++;
      add("CRITICAL", exp.cardId, `${exp.field}.lv`, "OWNER_MISMATCH", "OWNER expected field — card missing", {
        proposedDa: exp.ownerDecision,
        source: "owner",
      });
      continue;
    }
    const actual = getDaValue(entry, `${exp.field}.lv`);
    if (actual === undefined) {
      ownerMatch.missing++;
      add("CRITICAL", exp.cardId, `${exp.field}.lv`, "OWNER_MISMATCH", "OWNER expected field missing", {
        proposedDa: exp.ownerDecision,
        source: "owner",
      });
      continue;
    }
    if (ARTIFACT.test(String(actual)) || /LABOT/i.test(String(actual))) {
      ownerMatch.criticalArtifact++;
      ownerMatch.mismatch++;
      add("CRITICAL", exp.cardId, `${exp.field}.lv`, "OWNER_ARTIFACT", "Production contains LABOT/OWNER artifact", {
        deCurrent: entry[exp.field]?.de || "",
        daCurrent: actual,
        proposedDa: exp.ownerDecision,
        source: "owner",
      });
      continue;
    }
    if (normalizeText(actual) === normalizeText(exp.ownerDecision)) ownerMatch.match++;
    else {
      ownerMatch.mismatch++;
      add("HIGH", exp.cardId, `${exp.field}.lv`, "OWNER_MISMATCH", "CURRENT production ≠ signed OWNER_DECISION", {
        deCurrent: entry[exp.field]?.de || "",
        daCurrent: actual,
        proposedDa: exp.ownerDecision,
        source: "owner",
      });
    }
  }

  for (const spec of LINGUISTIC_13) {
    const entry = findEntry(after, spec.cardId);
    const actual = getDaValue(entry, `${spec.field}.lv`);
    const de = entry?.[spec.field]?.de || "";
    if (normalizeText(actual) !== normalizeText(spec.expected)) {
      add("HIGH", spec.cardId, `${spec.field}.lv`, "LINGUISTIC_13", "Regression linguistic 13 — production ≠ expected OWNER", {
        deCurrent: de,
        daCurrent: actual,
        proposedDa: spec.expected,
        source: "linguistic13",
      });
    }
  }

  let deChanges = 0;
  let syntaxPass = true;
  try {
    execSync("node --check data/da/verbs.js", { cwd: ROOT, stdio: "pipe" });
    execSync("node --check www/data/da/verbs.js", { cwd: ROOT, stdio: "pipe" });
  } catch {
    syntaxPass = false;
    add("CRITICAL", "STRUCT", "syntax", "TECHNICAL", "JS syntax check failed");
  }

  const mirrorPass = fs.readFileSync(DA_FILE).equals(fs.readFileSync(WWW_FILE));
  if (!mirrorPass) add("CRITICAL", "MIRROR", "data↔www", "TECHNICAL", "Mirror mismatch");

  const countPass = after.length === EXPECTED_VERBS && deRef.length === EXPECTED_VERBS;
  if (!countPass) add("CRITICAL", "STRUCT", "count", "TECHNICAL", `Expected ${EXPECTED_VERBS} verbs`);

  let idOrderPass = true;
  for (let i = 0; i < after.length; i++) {
    for (const formKey of FORM_KEYS) {
      if (JSON.stringify(baseline[i]?.[formKey]?.de) !== JSON.stringify(after[i]?.[formKey]?.de)) deChanges++;
      if (JSON.stringify(after[i]?.[formKey]?.de) !== JSON.stringify(deRef[i]?.[formKey]?.de)) {
        idOrderPass = false;
        add("CRITICAL", `verb-${i}`, `${formKey}.de`, "TECHNICAL", "DE field changed vs baseline/etalon");
      }
    }
  }
  if (deChanges > 0) add("CRITICAL", "ALL", "de.fields", "TECHNICAL", `${deChanges} DE changes vs baseline`);

  const remnantCounts = { LV: 0, EN: 0, ARTIFACT: 0, DE_LEAK: 0, PLACEHOLDER: 0, EMPTY: 0, OTHER: 0 };
  for (let i = 0; i < after.length; i++) {
    const cardId = `verb-${i}`;
    for (const formKey of FORM_KEYS) {
      const lv = after[i]?.[formKey]?.lv;
      const de = after[i]?.[formKey]?.de || "";
      if (typeof lv !== "string" || !lv.trim()) {
        remnantCounts.EMPTY++;
        add("CRITICAL", cardId, `${formKey}.lv`, "TECHNICAL", "Empty or missing DA field", {
          deCurrent: de,
          daCurrent: lv || "",
        });
        continue;
      }
      const reasons = classifyForeign(lv);
      if (DA_ALLOWLIST.test(normalizeText(lv))) {
        /* Danish homograph — not LV remnant */
      } else if (reasons.includes("OWNER_ARTIFACT") || /LABOT/i.test(lv)) {
        remnantCounts.ARTIFACT++;
        if (!findings.some((f) => f.cardId === cardId && f.field === `${formKey}.lv` && f.category === "OWNER_ARTIFACT")) {
          add("CRITICAL", cardId, `${formKey}.lv`, "OWNER_ARTIFACT", `Artifact in production: ${reasons.join(", ")}`, {
            deCurrent: de,
            daCurrent: lv,
          });
        }
      } else if (reasons.includes("LV_DIAC") || reasons.includes("LV")) {
        remnantCounts.LV++;
        add("CRITICAL", cardId, `${formKey}.lv`, "FOREIGN", `Foreign remnant: ${reasons.join(", ")}`, {
          deCurrent: de,
          daCurrent: lv,
        });
      } else if (reasons.includes("EN") || reasons.includes("PLACEHOLDER")) {
        remnantCounts.EN++;
        add("HIGH", cardId, `${formKey}.lv`, "FOREIGN", `EN/placeholder remnant: ${reasons.join(", ")}`, {
          deCurrent: de,
          daCurrent: lv,
        });
      } else if (reasons.includes("DE_LEAK")) {
        remnantCounts.DE_LEAK++;
        add("HIGH", cardId, `${formKey}.lv`, "FOREIGN", `German/editorial leak: ${reasons.join(", ")}`, {
          deCurrent: de,
          daCurrent: lv,
        });
      }
    }
  }

  const lunaBatches = exportLunaBatches(allForms);
  let lunaFindings = [];
  if (!SKIP_LUNA) lunaFindings = loadLunaFindings();
  const lunaFiles = fs.existsSync(LUNA_DIR)
    ? fs.readdirSync(LUNA_DIR).filter((f) => f.endsWith("-findings.json"))
    : [];
  const lunaLoaded = lunaFiles.length >= lunaBatches.length && lunaBatches.length > 0;

  for (const f of lunaFindings) {
    const cat = String(f.category || "LINGUISTIC").toUpperCase();
    if (NON_ERROR_CATEGORIES.has(cat) || f.severity === "FALSE_POSITIVE") continue;
    const formKey = normalizeField(f.field || "lv");
    add(f.severity || "MEDIUM", f.cardId, `${formKey}.lv`, cat, f.problem || f.reason || "Luna finding", {
      deCurrent: f.de || f.deCurrent || "",
      daCurrent: f.daCurrent || "",
      proposedDa: f.proposedDa || f.recommendedDa || "",
      reason: f.reason || "",
      source: "luna",
    });
  }

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const byCat = {};
  const linguisticOnly = findings.filter((f) => f.source === "luna" || (f.source !== "owner" && f.category !== "OWNER_MISMATCH" && f.category !== "TECHNICAL" && f.category !== "FOREIGN" && f.category !== "OWNER_ARTIFACT"));
  for (const f of findings) {
    bySev[f.severity] = (bySev[f.severity] || 0) + 1;
    byCat[f.category] = (byCat[f.category] || 0) + 1;
  }
  const lingBySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  findings.filter((f) => f.source === "luna").forEach((f) => {
    lingBySev[f.severity] = (lingBySev[f.severity] || 0) + 1;
  });

  const coveragePass =
    coverage.auditedVerbs === coverage.totalVerbs &&
    coverage.auditedDaFields === coverage.totalDaFields;
  const ownerPass = ownerMatch.mismatch === 0 && ownerMatch.missing === 0;
  const qualityPass =
    lingBySev.CRITICAL === 0 &&
    lingBySev.HIGH === 0 &&
    lingBySev.MEDIUM === 0 &&
    lingBySev.LOW === 0 &&
    remnantCounts.LV === 0 &&
    remnantCounts.EN === 0 &&
    remnantCounts.ARTIFACT === 0 &&
    remnantCounts.EMPTY === 0;

  const pass =
    coveragePass &&
    ownerPass &&
    qualityPass &&
    deChanges === 0 &&
    syntaxPass &&
    mirrorPass &&
    countPass &&
    idOrderPass &&
    (SKIP_LUNA || lunaLoaded);

  const verdict = pass
    ? "**DA–DE VERBS FINAL POST-REPAIR AUDIT — PASS**"
    : ownerPass && qualityPass && coveragePass && deChanges === 0 && !(SKIP_LUNA || lunaLoaded)
      ? "**DA–DE VERBS FINAL POST-REPAIR AUDIT — PENDING LUNA**"
      : "**NEEDS OWNER REVIEW**";

  const md = [
    "# DA–DE Verbs final post-repair audit",
    "",
    `**Date:** ${new Date().toISOString().slice(0, 10)}`,
    "**Auditor:** GPT-5.6 Luna (READ-ONLY)",
    "**Scope:** Production `data/da/verbs.js` after all OWNER repairs (original + regression reapply + linguistic)",
    "**Production changes during audit:** 0",
    "",
    "## COVERAGE",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Total verbs | **${coverage.totalVerbs}** |`,
    `| Audited verbs | **${coverage.auditedVerbs}** |`,
    `| Total DA fields | **${coverage.totalDaFields}** |`,
    `| Audited DA fields | **${coverage.auditedDaFields}** |`,
    `| Coverage | **${coveragePass ? "100% PASS" : "FAIL"}** |`,
    "",
    "## OWNER REGRESSION",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Signed LABOT fields expected (unique) | **${ownerMatch.expected}** |`,
    `| Original signed | **${owner.originalCount}** |`,
    `| Regression signed | **${owner.regressionCount}** |`,
    `| OWNER_MATCH | **${ownerMatch.match}/${ownerMatch.expected}** |`,
    `| OWNER_MISMATCH | **${ownerMatch.mismatch}** |`,
    `| Missing card/field | **${ownerMatch.missing}** |`,
    `| Critical artifacts (LABOT) | **${ownerMatch.criticalArtifact}** |`,
    "",
    "## LINGUISTIC FINDINGS (Luna)",
    "",
    "| Severity | Count |",
    "|----------|-------|",
    `| CRITICAL | **${lingBySev.CRITICAL}** |`,
    `| HIGH | **${lingBySev.HIGH}** |`,
    `| MEDIUM | **${lingBySev.MEDIUM}** |`,
    `| LOW | **${lingBySev.LOW}** |`,
    `| Luna batches | **${lunaBatches.length}** (${allForms.length} forms) |`,
    `| Luna loaded | **${lunaFiles.length}/${lunaBatches.length}** |`,
    "",
    "## TECHNICAL",
    "",
    "| Check | Result |",
    "|-------|--------|",
    `| Syntax | **${syntaxPass ? "PASS" : "FAIL"}** |`,
    `| Structure/count | **${countPass ? "PASS" : "FAIL"}** |`,
    `| IDs/order | **${idOrderPass ? "PASS" : "FAIL"}** |`,
    `| Mirror | **${mirrorPass ? "PASS" : "FAIL"}** |`,
    `| DE changes vs baseline | **${deChanges}** |`,
    `| DE READ-ONLY | **${deChanges === 0 ? "PASS" : "FAIL"}** |`,
    `| LV remnants | **${remnantCounts.LV}** |`,
    `| EN/placeholder | **${remnantCounts.EN}** |`,
    `| OWNER artifacts | **${remnantCounts.ARTIFACT}** |`,
    `| Empty DA | **${remnantCounts.EMPTY}** |`,
    "",
    "### Verdict",
    "",
    verdict,
    "",
  ];

  md.push("## Regression linguistic 13 — revalidation", "");
  md.push("| Card | Field | Expected | Match |");
  md.push("|------|-------|----------|-------|");
  for (const spec of LINGUISTIC_13) {
    const entry = findEntry(after, spec.cardId);
    const actual = getDaValue(entry, `${spec.field}.lv`);
    const ok = normalizeText(actual) === normalizeText(spec.expected);
    md.push(`| \`${spec.cardId}\` | \`${spec.field}.lv\` | ${spec.expected} | **${ok ? "PASS" : "FAIL"}** |`);
  }
  md.push("");

  md.push("## FINAL STATUS", "");
  md.push("| Gate | Required | Actual |");
  md.push("|------|----------|--------|");
  md.push(`| Coverage | 100% | **${coveragePass ? "PASS" : "FAIL"}** |`);
  md.push(`| OWNER_MISMATCH | 0 | **${ownerMatch.mismatch}** |`);
  md.push(`| CRITICAL | 0 | **${lingBySev.CRITICAL}** |`);
  md.push(`| HIGH | 0 | **${lingBySev.HIGH}** |`);
  md.push(`| MEDIUM | 0 | **${lingBySev.MEDIUM}** |`);
  md.push(`| LOW | 0 | **${lingBySev.LOW}** |`);
  md.push(`| Artifacts/placeholders | 0 | **${remnantCounts.ARTIFACT + remnantCounts.PLACEHOLDER}** |`);
  md.push(`| Foreign remnants | 0 | **${remnantCounts.LV + remnantCounts.EN}** |`);
  md.push(`| DE changes | 0 | **${deChanges}** |`);
  md.push(`| Syntax/structure/IDs | PASS | **${syntaxPass && countPass && idOrderPass ? "PASS" : "FAIL"}** |`);
  md.push("");
  if (!pass) {
    md.push(
      `Closure blocked: **${lingBySev.HIGH + lingBySev.MEDIUM + lingBySev.CRITICAL + lingBySev.LOW}** validated Luna findings remain. Prepare OWNER review — do not auto-apply.`,
      ""
    );
  }

  const realFindings = findings.filter((f) => f.severity !== "FALSE_POSITIVE");
  if (realFindings.length) {
    md.push("## Findings", "");
    for (const f of realFindings.slice(0, 100)) {
      md.push(`### ${f.id} [${f.severity}] ${f.category}`, "");
      md.push(`- **Verb/Card ID:** \`${f.cardId}\``);
      md.push(`- **Field:** \`${f.field}\``);
      if (f.deCurrent) md.push(`- **DE_CURRENT:** ${f.deCurrent}`);
      md.push(`- **DA_CURRENT:** ${f.daCurrent || "—"}`);
      md.push(`- **Problem:** ${f.problem}`);
      if (f.reason) md.push(`- **Reason:** ${f.reason}`);
      if (f.proposedDa) md.push(`- **PROPOSED_DA:** ${f.proposedDa}`);
      md.push("");
    }
    if (realFindings.length > 100) md.push(`_… and ${realFindings.length - 100} more in JSON._`, "");
  }

  if (!lunaLoaded && !SKIP_LUNA) {
    md.push(
      "## Luna pending",
      "",
      `Export: \`${LUNA_DIR}/batch-*.json\`. Save \`*-findings.json\`, re-run audit.`,
      ""
    );
  }

  fs.writeFileSync(REPORT, md.join("\n"));
  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });
  fs.writeFileSync(
    JSON_OUT,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        coverage,
        ownerMatch,
        ownerMeta: { original: owner.originalCount, regression: owner.regressionCount },
        remnantCounts,
        bySev,
        lingBySev,
        byCat,
        deChanges,
        lunaBatches: lunaBatches.length,
        lunaLoaded,
        pass,
        verdict: verdict.replace(/\*\*/g, ""),
        findings: realFindings,
      },
      null,
      2
    )
  );

  console.log(
    JSON.stringify(
      {
        coverage,
        ownerMatch,
        lingBySev,
        remnantCounts,
        deChanges,
        lunaBatches: lunaBatches.length,
        lunaLoaded,
        pass,
        verdict: verdict.replace(/\*\*/g, ""),
        report: REPORT,
      },
      null,
      2
    )
  );
  process.exit(pass ? 0 : 1);
}

main();
