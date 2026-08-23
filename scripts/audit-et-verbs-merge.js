#!/usr/bin/env node
"use strict";
/**
 * Merge deterministic + Luna findings for ET–DE Verbs audit.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const COLLECT = path.join(ROOT, "reports/temp/et-verbs-audit-data.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/et-verbs-luna");
const OUT = path.join(ROOT, "reports/temp/et-verbs-merged-audit.json");

const NON_FINDING = new Set(["SOURCE_DE_ISSUE", "STYLE_ONLY", "FALSE_POSITIVE", "ACCEPTABLE_VARIANT"]);

function normalizeText(s) {
  return String(s || "").replace(/\s+/g, " ").trim().slice(0, 80);
}

function normalizeFinding(f, source) {
  return {
    id: f.id || "",
    cardId: f.cardId,
    index: f.index ?? Number(String(f.cardId).replace("verb-", "")),
    batch: f.batch || "",
    field: f.field || "infinitiv.lv",
    deContext: f.de || f.deContext || f.deCurrent || "",
    currentEt: f.etCurrent || f.currentEt || "",
    proposedEt: f.proposedEt || (f.severity === "NEEDS_SOURCE_REVIEW" ? "—" : ""),
    problem: f.problem || f.reason || "",
    rationale: f.reason || f.rationale || f.problem || "",
    severity: String(f.severity || "MEDIUM").toUpperCase(),
    category: String(f.category || "TRANSLATION").toUpperCase(),
    status: f.status === "NEEDS_SOURCE_REVIEW" ? "NEEDS_SOURCE_REVIEW" : "PENDING",
    source,
    candidate: Boolean(f.candidate),
  };
}

function main() {
  const collect = JSON.parse(fs.readFileSync(COLLECT, "utf8"));
  const lunaFiles = fs.existsSync(LUNA_DIR)
    ? fs.readdirSync(LUNA_DIR).filter((f) => f.endsWith("-findings.json")).sort()
    : [];

  const lunaFindings = [];
  let lunaVerbsAudited = 0;
  let lunaFormsAudited = 0;

  for (const file of lunaFiles) {
    const data = JSON.parse(fs.readFileSync(path.join(LUNA_DIR, file), "utf8"));
    lunaVerbsAudited += data.verbsAudited || 0;
    lunaFormsAudited += data.formsAudited || data.verbFormsAudited || 0;
    for (const f of data.findings || []) {
      const cat = String(f.category || "").toUpperCase();
      if (NON_FINDING.has(cat)) continue;
      if (String(f.status || "").toUpperCase() === "PASS") continue;
      lunaFindings.push(normalizeFinding({ ...f, batch: data.batch }, "luna"));
    }
  }

  const deterministic = (collect.findings || []).map((f) => normalizeFinding(f, "deterministic"));
  const byKey = new Map();
  for (const f of [...deterministic, ...lunaFindings]) {
    const key = `${f.cardId}|${f.field}|${normalizeText(f.problem)}`;
    if (!byKey.has(key) || f.source === "luna") byKey.set(key, f);
  }

  let merged = [...byKey.values()].sort((a, b) => a.index - b.index || a.field.localeCompare(b.field));
  merged = merged.map((f, i) => ({ ...f, id: `ET-VERB-${String(i + 1).padStart(4, "0")}` }));

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, NEEDS_SOURCE_REVIEW: 0 };
  merged.forEach((f) => {
    if (bySev[f.severity] !== undefined) bySev[f.severity] += 1;
    else bySev.MEDIUM += 1;
  });

  const payload = {
    generatedAt: new Date().toISOString(),
    meta: {
      ...collect.meta,
      lunaVerbsAudited,
      lunaFormsAudited,
      unprocessedVerbs: Math.max(0, collect.meta.verbsTotal - lunaVerbsAudited),
      unprocessedForms: Math.max(0, collect.meta.verbFormsTotal - lunaFormsAudited),
      completenessPass:
        lunaVerbsAudited >= collect.meta.verbsTotal && lunaFormsAudited >= collect.meta.verbFormsTotal,
      rawCandidates: collect.rawCandidates + lunaFindings.length,
      validatedRealFindings: merged.length,
      falsePositives: collect.falsePositives?.length || 0,
    },
    structural: collect.structural,
    bySeverity: bySev,
    findings: merged,
    falsePositives: collect.falsePositives || [],
    lunaBatchCount: lunaFiles.length,
  };

  fs.writeFileSync(OUT, JSON.stringify(payload, null, 2));
  console.log(JSON.stringify({ merged: merged.length, bySev, lunaVerbsAudited, lunaFormsAudited, out: OUT }, null, 2));
}

main();
