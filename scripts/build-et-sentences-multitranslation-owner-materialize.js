#!/usr/bin/env node
"use strict";
/**
 * Materialize ET Teikumi multi-translation OWNER accepted decisions (120 LABOT).
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const REVIEW_JSON = path.join(ROOT, "reports/temp/et-sentences-multitranslation-owner-review.json");
const ACCEPTED = path.join(ROOT, "reports/et-teikumi-multitranslation-owner-decisions-accepted.md");
const UPLOAD = path.join(
  ROOT,
  "uploads/et-teikumi-multitranslation-owner-decisions-accepted_87a4.md",
);
const OUT = path.join(
  ROOT,
  "reports/et-sentences-multitranslation-owner-decisions-accepted-materialized.md",
);

const EXPLICIT_OVERRIDE_IDS = {
  "ET-SENT-MT-0004": "Räägi ära!",
  "ET-SENT-MT-0007": "Leida vastukaja.",
  "ET-SENT-MT-0008": "Sel puhul.",
  "ET-SENT-MT-0011": "Kahekesi.",
  "ET-SENT-MT-0012": "Edasi lükata.",
  "ET-SENT-MT-0013": "Untsu keerata.",
  "ET-SENT-MT-0015": "Ta taipab aeglaselt.",
  "ET-SENT-MT-0016": "Meelde jätta.",
  "ET-SENT-MT-0017": "Osutada abi.",
};

function escapePipe(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function parseExplicitOverrides(src) {
  const overrides = { ...EXPLICIT_OVERRIDE_IDS };
  for (const line of src.split("\n")) {
    if (!line.startsWith("| ET-SENT-MT-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 5) continue;
    const auditId = parts[1];
    if (!auditId.startsWith("ET-SENT-MT-")) continue;
    const ownerNew = (parts[4] || "").replace(/\*\*/g, "").trim();
    if (ownerNew) overrides[auditId] = ownerNew;
  }
  return overrides;
}

function isCompleteNaturalPhrase(s) {
  const t = String(s || "").trim();
  if (!t) return false;
  if (/[.!?…]$/.test(t)) return true;
  if (t.length <= 24 && !t.includes(",")) return true;
  return false;
}

function isPunctuationFragment(ownerNew, currentEt) {
  const o = String(ownerNew || "").trim();
  const c = String(currentEt || "").trim();
  if (!c.includes("•") && o !== c && o.length < c.length - 3) return true;
  if (c.includes("•")) {
    const alts = c.split("•").map((x) => x.trim());
    if (alts.includes(o) && isCompleteNaturalPhrase(o)) return false;
    if (!/[.!?…]$/.test(o) && alts.some((a) => a.length > o.length + 2)) return true;
  }
  return false;
}

function materializeOwnerNew(finding, overrides) {
  if (overrides[finding.auditId]) return overrides[finding.auditId];
  const current = String(finding.currentEt || "").trim();
  if (!current.includes("•")) return current;

  const alts = current.split("•").map((s) => s.trim()).filter(Boolean);
  const rec = String(finding.recommendedMain || "").trim();
  const exact = alts.find((a) => a === rec);
  if (exact && isCompleteNaturalPhrase(exact)) return exact;
  const containing = alts.find((a) => a.includes(rec) && isCompleteNaturalPhrase(a));
  if (containing) return containing;
  for (const a of alts) {
    if (isCompleteNaturalPhrase(a)) return a;
  }
  return alts[0];
}

function main() {
  if (!fs.existsSync(ACCEPTED) && fs.existsSync(UPLOAD)) {
    fs.mkdirSync(path.dirname(ACCEPTED), { recursive: true });
    fs.copyFileSync(UPLOAD, ACCEPTED);
  }

  const acceptedSrc = fs.readFileSync(ACCEPTED, "utf8");
  const overrides = parseExplicitOverrides(acceptedSrc);
  const review = JSON.parse(fs.readFileSync(REVIEW_JSON, "utf8"));
  const findings = review.findings || [];

  if (findings.length !== 120) {
    console.error(`Expected 120 findings, got ${findings.length}`);
    process.exit(1);
  }

  const rows = findings.map((f) => {
    const ownerNew = materializeOwnerNew(f, overrides);
    return {
      auditId: f.auditId,
      cardId: f.cardId,
      cardType: f.cardType || "ordinary",
      field: f.field,
      de: f.de,
      current: f.currentEt,
      ownerNew: String(ownerNew).trim(),
      status: "LABOT",
      override: overrides[f.auditId] && EXPLICIT_OVERRIDE_IDS[f.auditId] ? "OWNER_OVERRIDE" : "RULE",
    };
  });

  let punctuationFragments = 0;
  for (const r of rows) {
    if (isPunctuationFragment(r.ownerNew, r.current)) punctuationFragments++;
  }

  const explicitMatched = Object.keys(EXPLICIT_OVERRIDE_IDS).filter(
    (id) => rows.find((r) => r.auditId === id)?.ownerNew === EXPLICIT_OVERRIDE_IDS[id],
  ).length;

  const lines = [
    "# ET–DE Teikumi — Multi-translation OWNER DECISIONS ACCEPTED (materialized)",
    "",
    "**Authority:** `reports/et-teikumi-multitranslation-owner-decisions-accepted.md`",
    "**MASTER:** v1.12",
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "## Coverage",
    "",
    `- SOURCE_FINDINGS: **120**`,
    `- OWNER_DECISIONS: **120**`,
    `- OWNER_NEW_FILLED: **120/120**`,
    `- LABOT: **120**`,
    `- PUNCTUATION_FRAGMENT_OUTPUTS: **${punctuationFragments}**`,
    `- EXPLICIT_OWNER_OVERRIDES: **${explicitMatched}/${Object.keys(EXPLICIT_OVERRIDE_IDS).length}**`,
    "",
    "| Audit ID | Card ID | Card type | Field/path | DE | CURRENT | OWNER NEW | Status |",
    "|---|---|---|---|---|---|---|---|",
  ];

  for (const r of rows) {
    lines.push(
      `| ${r.auditId} | ${escapePipe(r.cardId)} | ${r.cardType} | \`${r.field}\` | ${escapePipe(r.de)} | ${escapePipe(r.current)} | ${escapePipe(r.ownerNew)} | LABOT |`,
    );
  }

  fs.writeFileSync(OUT, lines.join("\n") + "\n");

  const summary = {
    sourceFindings: 120,
    ownerDecisions: "120/120",
    labot: 120,
    punctuationFragmentOutputs: punctuationFragments,
    explicitOwnerOverrides: `${explicitMatched}/${Object.keys(EXPLICIT_OVERRIDE_IDS).length}`,
    out: OUT,
  };
  console.log(JSON.stringify(summary, null, 2));
  if (punctuationFragments !== 0 || rows.length !== 120) process.exit(1);
}

main();
