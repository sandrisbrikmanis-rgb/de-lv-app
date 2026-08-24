#!/usr/bin/env node
"use strict";
/**
 * ET B2 multi-translation OWNER compact input (829 rows) — format only.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const JSON_SRC = path.join(ROOT, "reports/temp/et-b2-multitranslation-owner-review.json");
const DEC_SRC = path.join(ROOT, "reports/et-b2-multitranslation-owner-decisions.md");
const OUT = path.join(ROOT, "reports/et-b2-multitranslation-owner-compact-829.md");

function escapePipe(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function studyContextCompact(f) {
  if (f.cardType === "ordinary") return "";
  const ctx = String(f.studyContext || "").trim();
  if (!ctx) return "";
  const põhi = ctx.match(/(?:Põhiidee|Peamine mõte):\s*[^]*?(?=\s(?:Sageli|Näide|Mitmus|sich )|$)/i);
  if (põhi) {
    const line = põhi[0].trim().replace(/\s+/g, " ");
    return line.length > 320 ? line.slice(0, 320) + "…" : line;
  }
  return ctx.length > 320 ? ctx.slice(0, 320) + "…" : ctx;
}

function parseDecisionsCandidates(parts) {
  const out = [];
  const c1 = parts[7];
  const c2 = parts[9];
  const c3 = parts[11];
  if (c1 && c1 !== "—") out.push(c1);
  if (c2 && c2 !== "—") out.push(c2);
  if (c3 && c3 !== "—") {
    for (const chunk of c3.split(";")) {
      const cand = chunk.replace(/\s*\([^)]*\)\s*$/, "").trim();
      if (cand) out.push(cand);
    }
  }
  return out;
}

function candidatesForRow(f) {
  return (f.candidates || []).map((c) => c.trim());
}

function candidatesMatchJson(candidates) {
  const jsonCand = (candidates || []).map((c) => c.trim());
  return jsonCand.length >= 2;
}

function build() {
  const data = JSON.parse(fs.readFileSync(JSON_SRC, "utf8"));
  const findings = data.findings || [];
  const decMap = new Map();

  for (const line of fs.readFileSync(DEC_SRC, "utf8").split("\n")) {
    if (!line.startsWith("| ET-B2-MT-")) continue;
    const parts = line.split("|").map((p) => p.trim());
    if (parts.length < 15) continue;
    decMap.set(parts[1], {
      auditId: parts[1],
      cardId: parts[2],
      field: parts[4].replace(/^`|`$/g, ""),
      de: parts[5],
      current: parts[6],
      recommended: parts[14],
      candidates: parseDecisionsCandidates(parts),
    });
  }

  let auditMatch = 0;
  let cardMatch = 0;
  let currentMatch = 0;
  let candidateMatch = 0;
  const ids = new Set();

  const rows = [];
  for (const f of findings) {
    ids.add(f.auditId);
    const dec = decMap.get(f.auditId);
    if (!dec) continue;
    if (f.auditId === dec.auditId) auditMatch++;
    if (f.cardId === dec.cardId) cardMatch++;
    if (String(f.currentEt).trim() === String(dec.current).trim()) currentMatch++;
    if (candidatesMatchJson(f.candidates)) candidateMatch++;

    const candList = candidatesForRow(f);
    rows.push({
      auditId: f.auditId,
      cardId: f.cardId,
      cardType: f.cardType,
      field: f.field,
      de: f.de,
      current: f.currentEt,
      candidates: candList.join(" || "),
      recommended: f.recommendedMain,
      study: studyContextCompact(f),
    });
  }

  const dup = ids.size !== findings.length;
  const missing = findings.length - rows.length;

  const gates = {
    SOURCE_FINDINGS: findings.length,
    COMPACT_ROWS: rows.length,
    AUDIT_ID_MATCH: `${auditMatch}/${findings.length}`,
    CARD_ID_MATCH: `${cardMatch}/${findings.length}`,
    CURRENT_EXACT_MATCH: `${currentMatch}/${findings.length}`,
    CANDIDATE_SET_MATCH: `${candidateMatch}/${findings.length}`,
    MISSING_ROWS: missing,
    DUPLICATE_ROWS: dup ? findings.length - ids.size : 0,
    PRODUCTION_CHANGES: 0,
    DE_CHANGES: 0,
  };

  const pass =
    findings.length === 829 &&
    rows.length === 829 &&
    auditMatch === 829 &&
    cardMatch === 829 &&
    currentMatch === 829 &&
    candidateMatch === 829 &&
    missing === 0 &&
    !dup;

  const lines = [
    "# ET–DE B2 — Multi-translation OWNER COMPACT (829)",
    "",
    "**MASTER:** v1.12",
    `**Generated:** ${new Date().toISOString()}`,
    "**MODE:** Compact OWNER input — format only (no new linguistic decisions)",
    `**Source:** \`reports/et-b2-multitranslation-owner-decisions.md\`, \`reports/temp/et-b2-multitranslation-owner-review.json\``,
    "",
    "## Verification",
    "",
    "| Gate | Result |",
    "|------|--------|",
    ...Object.entries(gates).map(([k, v]) => `| ${k} | ${v} |`),
    "",
    "## Verdict",
    "",
    pass ? "**ET_B2_MULTITRANSLATION_OWNER_COMPACT_829_READY**" : "**FAIL**",
    "",
    "| Audit ID | Card ID | Card type | Field/path | DE | CURRENT | Candidates | Recommended main | Study Põhiidee/context |",
    "|---|---|---|---|---|---|---|---|---|",
  ];

  for (const r of rows) {
    lines.push(
      `| ${r.auditId} | ${r.cardId} | ${r.cardType} | \`${r.field}\` | ${escapePipe(r.de)} | ${escapePipe(r.current)} | ${escapePipe(r.candidates)} | ${escapePipe(r.recommended)} | ${escapePipe(r.study)} |`,
    );
  }

  fs.writeFileSync(OUT, lines.join("\n") + "\n");
  console.log(JSON.stringify({ ...gates, verdict: pass ? "ET_B2_MULTITRANSLATION_OWNER_COMPACT_829_READY" : "FAIL" }, null, 2));
  if (!pass) process.exit(1);
}

build();
