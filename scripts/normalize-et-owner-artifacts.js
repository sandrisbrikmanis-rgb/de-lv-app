#!/usr/bin/env node
"use strict";
/**
 * Normalize ET OWNER-PREP artifacts (PR #622 C1/C2+Teikumi, PR #628 B2).
 * READ-ONLY production — no Luna, no FULL_DISCOVERY rerun.
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  loadSentences,
  loadC1,
  loadC2,
  loadB2,
  resolveC1C2Current,
  resolveSentenceCurrent,
  resolveB2Current,
  productionFileForLevel,
  findC1C2Entry,
  fixDaTemplateText,
  dedupSectionAccentsFindings,
  isSectionAccentsCharArtifact,
} = require("./lib/et-owner-production-resolve");

const SCOPE = process.argv.includes("--b2-only")
  ? "b2"
  : process.argv.includes("--c1c2-only")
    ? "c1c2"
    : process.argv.includes("--sentences-only")
      ? "sentences"
      : "all";

function enrichC1C2Findings(findings) {
  const c1 = loadC1();
  const c2 = loadC2();
  return findings.map((f) => {
    const prod = resolveC1C2Current(f.cardId, f.field, c1, c2);
    const hit = findC1C2Entry(f.cardId, c1, c2);
    const prodFile = hit ? productionFileForLevel(hit.level) : "data/et/c1.js";
    return {
      ...f,
      productionFile: prodFile,
      currentEt: prod || f.currentEt || "",
      reason: fixDaTemplateText(f.reason),
      proposedEt: f.proposedEt,
    };
  });
}

function enrichSentencesFindings(findings) {
  const sentences = loadSentences();
  return findings.map((f) => ({
    ...f,
    currentEt: resolveSentenceCurrent(f.cardId, f.field || "lv", sentences) || f.currentEt || "",
    problem: fixDaTemplateText(f.problem),
    rationale: fixDaTemplateText(f.rationale || f.problem),
  }));
}

function enrichB2Findings(findings) {
  const b2 = loadB2();
  return findings.map((f) => {
    const prod = resolveB2Current(f.cardId, f.field, b2);
    let currentEt = prod || f.currentEt || "";
    if (/sectionAccents/i.test(f.field) && typeof prod === "string" && prod.startsWith("{")) {
      currentEt = prod;
    }
    return {
      ...f,
      productionFile: "data/et/b2.js",
      currentEt,
      reason: fixDaTemplateText(f.reason),
    };
  });
}

function normalizeC1C2() {
  const auditPath = path.join(ROOT, "reports/temp/et-c1c2-full-audit.json");
  const data = JSON.parse(fs.readFileSync(auditPath, "utf8"));
  let backlog = data.ownerBacklogFinal || data.validatedFindings || [];
  backlog = enrichC1C2Findings(backlog);
  data.ownerBacklogFinal = backlog;
  data.validatedFindings = backlog;
  fs.writeFileSync(auditPath, JSON.stringify(data, null, 2));
  fs.writeFileSync(path.join(ROOT, "reports/et-c1c2-full-audit.json"), JSON.stringify(data, null, 2));
  process.env.AUDIT_PR = "622";
  execSync("node scripts/build-et-c1c2-owner-review.js", { cwd: ROOT, stdio: "inherit" });
  return { count: backlog.length, sectionAccentsRaw: 0, sectionAccentsDeduped: 0 };
}

function normalizeSentences() {
  const mergedPath = path.join(ROOT, "reports/temp/et-sentences-merged-audit.json");
  const data = JSON.parse(fs.readFileSync(mergedPath, "utf8"));
  const findings = enrichSentencesFindings(
    (data.findings || []).filter((f) => f.status !== "FALSE_POSITIVE"),
  );
  data.findings = findings;
  fs.writeFileSync(mergedPath, JSON.stringify(data, null, 2));
  process.env.GITHUB_BRANCH = "cursor/et-de-c1c2-teikumi-full-audit-4a7c";
  process.env.GITHUB_PR = "622";
  execSync("node scripts/build-et-sentences-owner-review.js", { cwd: ROOT, stdio: "inherit" });
  execSync("node scripts/build-et-sentences-github-index.js", { cwd: ROOT, stdio: "inherit" });
  // MASTER monolithic owner-view alias
  fs.copyFileSync(
    path.join(ROOT, "reports/et-sentences-owner-review.md"),
    path.join(ROOT, "reports/et-sentences-owner-view.md"),
  );
  return { count: findings.length };
}

function normalizeB2() {
  const auditPath = path.join(ROOT, "reports/temp/et-b2-full-audit.json");
  if (!fs.existsSync(auditPath)) {
    console.error("Missing", auditPath);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(auditPath, "utf8"));
  let backlog = data.ownerBacklogFinal || data.validatedFindings || [];
  const rawSec = backlog.filter((f) => isSectionAccentsCharArtifact(f)).length;
  backlog = enrichB2Findings(backlog);
  backlog = dedupSectionAccentsFindings(backlog, "ET-B2");
  const dedupedSec = backlog.filter((f) => /sectionAccents/i.test(f.field || "")).length;
  data.ownerBacklogFinal = backlog;
  data.validatedFindings = backlog;
  data.meta = data.meta || {};
  data.meta.ownerArtifactNormalization = {
    date: new Date().toISOString(),
    sectionAccentsRawCharFindings: rawSec,
    sectionAccentsDedupedOwnerTargets: dedupedSec,
    note: "OWNER backlog normalized; raw discovery registry unchanged.",
  };
  fs.writeFileSync(auditPath, JSON.stringify(data, null, 2));
  fs.writeFileSync(path.join(ROOT, "reports/et-b2-full-audit.json"), JSON.stringify(data, null, 2));
  process.env.AUDIT_PR = "628";
  execSync("node scripts/build-et-b2-owner-review.js", { cwd: ROOT, stdio: "inherit" });
  execSync("node scripts/build-et-b2-github-index.js", { cwd: ROOT, stdio: "inherit" });
  return { count: backlog.length, sectionAccentsRaw: rawSec, sectionAccentsDeduped: dedupedSec };
}

function main() {
  const results = {};
  if (SCOPE === "all" || SCOPE === "c1c2") results.c1c2 = normalizeC1C2();
  if (SCOPE === "all" || SCOPE === "sentences") results.sentences = normalizeSentences();
  if (SCOPE === "b2") {
    console.log("B2 normalization must run on cursor/et-de-b2-full-audit-4a7c branch");
    process.exit(1);
  }
  console.log(JSON.stringify({ verdict: "OWNER_ARTIFACTS_NORMALIZED", results }, null, 2));
}

main();
