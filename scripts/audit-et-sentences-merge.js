#!/usr/bin/env node
"use strict";
/**
 * Merge deterministic + Luna findings for DA-DE Sätze audit.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const COLLECT = path.join(ROOT, "reports/temp/et-sentences-audit-data.json");
const LUNA_DIR = path.join(ROOT, "reports/temp/et-sentences-luna");
const OUT = path.join(ROOT, "reports/temp/et-sentences-merged-audit.json");

const NON_FINDING_CATEGORIES = new Set([
  "SOURCE_DE_ISSUE",
  "NEEDS_SOURCE_REVIEW",
  "STYLE_ONLY",
  "FALSE_POSITIVE",
  "ACCEPTABLE_VARIANT",
]);

function normalizeFinding(f, source) {
  return {
    id: f.id || "",
    cardId: f.cardId,
    index: f.index ?? Number(String(f.cardId).replace("sentence-", "")),
    batch: f.batch || "",
    field: f.field || "lv",
    deContext: f.de || f.deContext || "",
    currentEt: f.daCurrent || f.currentEt || "",
    proposedEt: f.proposedEt || "",
    problem: f.problem || f.reason || "",
    rationale: f.reason || f.rationale || f.problem || "",
    severity: String(f.severity || "MEDIUM").toUpperCase(),
    category: String(f.category || "TRANSLATION").toUpperCase(),
    status: f.status === "LABOT" ? "LABOT" : "PENDING",
    source,
    candidate: Boolean(f.candidate),
  };
}

function main() {
  const collect = JSON.parse(fs.readFileSync(COLLECT, "utf8"));
  if (!fs.existsSync(LUNA_DIR)) {
    fs.mkdirSync(LUNA_DIR, { recursive: true });
  }
  const lunaFiles = fs
    .readdirSync(LUNA_DIR)
    .filter((f) => f.endsWith("-findings.json"))
    .sort();

  const lunaFindings = [];
  const lunaResults = [];
  let lunaSentencesAudited = 0;

  for (const file of lunaFiles) {
    const data = JSON.parse(fs.readFileSync(path.join(LUNA_DIR, file), "utf8"));
    lunaSentencesAudited += data.sentencesAudited || (data.results || []).length || 0;
    for (const f of data.findings || []) {
      if (NON_FINDING_CATEGORIES.has(String(f.category || "").toUpperCase())) continue;
      lunaFindings.push(normalizeFinding({ ...f, batch: data.batch }, "luna"));
    }
    for (const r of data.results || []) lunaResults.push(r);
  }

  const deterministic = (collect.findings || []).map((f) => normalizeFinding(f, "deterministic"));
  const byKey = new Map();

  for (const f of [...deterministic, ...lunaFindings]) {
    const key = `${f.cardId}|${f.field}|${normalizeText(f.problem)}`;
    if (!byKey.has(key) || f.source === "luna") byKey.set(key, f);
  }

  let merged = [...byKey.values()].sort((a, b) => a.index - b.index);
  merged = merged.map((f, i) => ({ ...f, id: `ET-SENT-${String(i + 1).padStart(4, "0")}` }));

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, NEEDS_SOURCE_REVIEW: 0 };
  merged.forEach((f) => {
    if (bySev[f.severity] !== undefined) bySev[f.severity] += 1;
    else bySev.MEDIUM += 1;
  });

  const payload = {
    generatedAt: new Date().toISOString(),
    meta: {
      ...collect.meta,
      sentencesAudited: collect.meta.sentencesAudited,
      lunaSentencesAudited,
      unprocessedSentences: Math.max(0, collect.meta.sentencesTotal - lunaSentencesAudited),
      completenessPass: lunaSentencesAudited >= collect.meta.sentencesTotal,
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
  console.log(JSON.stringify({ merged: merged.length, bySev, lunaSentencesAudited, out: OUT }, null, 2));
}

function normalizeText(s) {
  return String(s || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 80);
}

main();
