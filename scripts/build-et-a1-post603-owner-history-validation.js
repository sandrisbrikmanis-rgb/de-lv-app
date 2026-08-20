#!/usr/bin/env node
"use strict";
/**
 * Post-#603 FULL_DISCOVERY finding history validation — cross-check audit findings vs full OWNER history.
 * Output: reports/et-a1-post603-owner-history-validation.md
 *         reports/temp/et-a1-post603-owner-history-validation.json
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const OUT_MD = path.join(ROOT, "reports", "et-a1-post603-owner-history-validation.md");
const OUT_JSON = path.join(ROOT, "reports/temp/et-a1-post603-owner-history-validation.json");
const AUDIT_JSON = path.join(ROOT, "reports/temp/et-a1-full-audit.json");
const BASELINE_MAIN = "53a6abb159b72e89eddad635cfee64b2a3528ad0";
const BASELINE_BLOB = "ae037d7ca01d1619304ab895687d7e10714f3458";

function normalizeField(f) {
  return String(f || "")
    .replace(/^study\./, "")
    .replace(/^entry\[\d]+\./, "")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}
function normVal(v) {
  return String(v || "").replace(/\s+/g, " ").trim();
}
function histKey(cardId, field) {
  return `${cardId}|${normalizeField(field)}`;
}

function parsePipeTable(md, source) {
  const rows = [];
  for (const line of md.split("\n")) {
    if (!line.startsWith("| ET-A1-")) continue;
    const cols = line.split("|").map((c) => c.trim()).filter(Boolean);
    if (cols.length < 8) continue;
    const [auditId, cardId, field, current, proposed, , , status, decision] = cols;
    if (!/^ET-A1-\d+$/.test(auditId)) continue;
    rows.push({
      auditId,
      cardId,
      field,
      current,
      proposed,
      ownerStatus: status,
      ownerDecision: decision || "",
      ownerNew: status.toUpperCase() === "LABOT" ? (decision || proposed) : "",
      source,
    });
  }
  return rows;
}

function parseStructuredAccepted(md, source) {
  const rows = [];
  for (const block of md.split(/^## ET-A1-/m).slice(1)) {
    const auditId = `ET-A1-${block.split("\n")[0].trim()}`;
    const get = (label) => {
      const m = block.match(new RegExp(`\\*\\*${label}:\\*\\* \`?([^\`\n]+)\`?`));
      return m ? m[1].trim() : "";
    };
    const statusM = block.match(/\*\*Statuss:\*\* \*\*([^*]+)\*\*/);
    const decM = block.match(/\*\*OWNER_DECISION:\*\* ([^\n]+)/);
    const ownerNew = get("NEW");
    rows.push({
      auditId,
      cardId: get("Card ID"),
      field: get("Field/path"),
      current: get("CURRENT"),
      proposed: ownerNew === "—" ? "" : ownerNew,
      ownerStatus: statusM ? statusM[1].trim() : "",
      ownerDecision: decM ? decM[1].trim() : "",
      ownerNew: ownerNew === "—" ? "" : ownerNew,
      source,
    });
  }
  return rows.filter((r) => r.cardId && r.field);
}

function loadHistory() {
  const byKey = new Map();
  const all = [];
  const add = (row) => {
    all.push(row);
    const k = histKey(row.cardId, row.field);
    if (!byKey.has(k)) byKey.set(k, []);
    byKey.get(k).push(row);
  };

  const localSources = [
    ["reports/et-a1-owner-decisions-accepted.md", parsePipeTable],
    ["reports/et-a1-owner-decisions-accepted-v17.md", parsePipeTable],
    ["reports/et-a1-owner-decisions-accepted-v17-full.md", parseStructuredAccepted],
    ["reports/et-a1-owner-decisions-accepted-v17-apply.md", parsePipeTable],
    ["reports/et-a1-owner-decisions-accepted-pr603-full.md", parseStructuredAccepted],
    ["reports/et-a1-owner-decisions-accepted-pr603-apply.md", parsePipeTable],
    ["reports/et-a1-owner-source-resolution-bitte-tip.md", parsePipeTable],
  ];
  for (const [rel, parser] of localSources) {
    const p = path.join(ROOT, rel);
    if (!fs.existsSync(p)) continue;
    for (const row of parser(fs.readFileSync(p, "utf8"), rel)) add(row);
  }

  for (const ref of [
    "origin/cursor/et-de-a1-full-audit-ba9e:reports/et-a1-owner-accepted-all.md",
    "origin/cursor/et-de-a1-full-audit-ba9e:reports/et-a1-missing-study-owner-decisions-accepted.md",
  ]) {
    try {
      const text = execSync(`git show ${ref}`, { cwd: ROOT, encoding: "utf8", stdio: "pipe" });
      for (const row of parsePipeTable(text, ref)) add(row);
    } catch {
      /* optional git source */
    }
  }
  return { byKey, all, sourcesLoaded: [...new Set(all.map((r) => r.source))] };
}

function loadProduction() {
  const raw = fs.readFileSync(path.join(ROOT, "data/et/a1.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(raw, ctx);
  return ctx.window.A1_WORDS;
}

function prodValue(words, cardId, field) {
  const card = words.find((w) => w.study?.id === cardId);
  if (!card?.study) return null;
  let cur = card.study;
  const f = field.replace(/^study\./, "");
  for (const p of f.split(".")) {
    const m = p.match(/(\w+)\[(\d+)\]/);
    if (m) cur = cur[m[1]][+m[2]];
    else cur = cur[p];
  }
  return typeof cur === "string" ? cur : JSON.stringify(cur);
}

function findHistory(byKey, cardId, field) {
  const exact = byKey.get(histKey(cardId, field)) || [];
  if (exact.length) {
    const priority = (s) =>
      s.includes("v17-full") ? 0 : s.includes("v17") ? 1 : s.includes("accepted.md") ? 2 : 3;
    return [...exact].sort((a, b) => priority(a.source) - priority(b.source))[0];
  }
  const nf = normalizeField(field);
  let best = null;
  for (const [k, rows] of byKey) {
    if (!k.startsWith(`${cardId}|`)) continue;
    const kf = k.split("|")[1];
    if (kf === nf || kf.includes(nf) || nf.includes(kf)) {
      const row = rows[0];
      if (!best || row.source.includes("v17-full")) best = row;
    }
  }
  return best;
}

function classify(finding, hist, production) {
  const pr603Current = normVal(finding.currentEt);
  const pr603Proposed = normVal(finding.proposedEt);
  const productionNorm = normVal(production);
  const auditCurrentStale = productionNorm && pr603Current && productionNorm !== pr603Current;

  if (!hist) {
    return {
      classification: "NEW_VALIDATED_REAL_FINDING",
      evidence: "Nav iepriekšēja OWNER lēmuma šim Card ID + Field/path.",
      previousOwnerStatus: null,
      previousOwnerDecision: null,
      previousOwnerNew: null,
      previousSource: null,
      previousAuditId: null,
      production,
      auditCurrentStale,
    };
  }

  const st = String(hist.ownerStatus || "").toUpperCase();
  const ownerNew = normVal(hist.ownerNew || hist.proposed);
  const ownerCurrent = normVal(hist.current);
  const base = {
    previousOwnerStatus: hist.ownerStatus,
    previousOwnerDecision: hist.ownerDecision,
    previousOwnerNew: hist.ownerNew || (st === "NELABOT" ? "—" : hist.proposed),
    previousSource: hist.source,
    previousAuditId: hist.auditId,
    production,
    auditCurrentStale,
  };

  if (st === "NELABOT" || st === "FALSE_POSITIVE") {
    const keep = ownerCurrent || productionNorm;
    if (productionNorm === keep) {
      return {
        ...base,
        classification: "OWNER_DECISION_CONFIRMED",
        evidence: `${st} (#${hist.auditId}, ${hist.source}): saglabāt CURRENT. Production="${productionNorm}". Luna atkārto noraidīto PROPOSED.`,
      };
    }
    return {
      ...base,
      classification: "REPAIR_REGRESSION",
      evidence: `${st} (#${hist.auditId}) prasīja saglabāt "${keep}", bet production="${productionNorm}".`,
    };
  }

  if (st === "LABOT") {
    if (productionNorm === ownerNew) {
      const staleNote = auditCurrentStale
        ? ` PR603 audit CURRENT ("${pr603Current}") ir novecojis; production jau atbilst OWNER NEW.`
        : "";
      return {
        ...base,
        classification: "OWNER_DECISION_CONFIRMED",
        evidence: `LABOT (#${hist.auditId}, ${hist.source}): OWNER NEW="${ownerNew}" = production.${staleNote} Luna PROPOSED konfliktē ar OWNER vai atkārto jau piemēroto.`,
      };
    }
    if (productionNorm === ownerCurrent) {
      return {
        ...base,
        classification: "REPAIR_REGRESSION",
        evidence: `OWNER LABOT (#${hist.auditId}) NEW="${ownerNew}" nav piemērots. Production="${productionNorm}" = vecais CURRENT.`,
      };
    }
    return {
      ...base,
      classification: "OWNER_DECISION_REOPEN_REQUIRED",
      evidence: `OWNER LABOT (#${hist.auditId}) bet production="${productionNorm}" ≠ NEW="${ownerNew}" un ≠ CURRENT="${ownerCurrent}".`,
    };
  }

  if (st === "NEEDS_SOURCE_REVIEW") {
    return {
      ...base,
      classification: "NEW_VALIDATED_REAL_FINDING",
      evidence: `Iepriekš NEEDS_SOURCE_REVIEW (#${hist.auditId}) — nav galīga OWNER lēmuma šim laukam.`,
    };
  }

  return {
    ...base,
    classification: "NEW_VALIDATED_REAL_FINDING",
    evidence: `History status ${hist.ownerStatus} (#${hist.auditId}) — nav automātiska CONFIRMED.`,
  };
}

function buildMarkdown(payload) {
  const c = payload.summary;
  const n = payload.matrix.length;
  const lines = [
    "# ET–DE A1 — post-#603 OWNER HISTORY VALIDATION",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.7",
    `**Baseline MAIN SHA:** \`${BASELINE_MAIN}\``,
    `**Dataset blob:** \`${BASELINE_BLOB}\``,
    "**Production changes:** 0",
    "**DE:** STRICT READ-ONLY",
    "",
    "## Summary counts",
    "",
    `| Metric | Count |`,
    `|--------|------:|`,
    `| **RAW_AUDIT_FINDINGS** | **${c.RAW_AUDIT_FINDINGS}** |`,
    `| **OWNER_DECISION_CONFIRMED** | **${c.OWNER_DECISION_CONFIRMED}** |`,
    `| **OWNER_DECISION_REOPEN_REQUIRED** | **${c.OWNER_DECISION_REOPEN_REQUIRED}** |`,
    `| **REPAIR_REGRESSION** | **${c.REPAIR_REGRESSION}** |`,
    `| **NEW_VALIDATED_REAL_FINDINGS** | **${c.NEW_VALIDATED_REAL_FINDINGS}** |`,
    `| **FALSE_POSITIVE** | **${c.FALSE_POSITIVE}** |`,
    "",
    `## FINAL VERDICT: **${payload.finalVerdict}**`,
    "",
    "### History sources loaded",
    "",
    ...payload.historySourcesLoaded.map((s) => `- \`${s}\``),
    "",
    `## ${n}/${n} validation matrix`,
    "",
    "| Audit ID | Card ID | Field/path | CURRENT (audit) | Audit proposed | Prev OWNER status | Prev OWNER decision | Prev OWNER NEW | Current production | Classification | Evidence / reason |",
    "|----------|---------|------------|-----------------|----------------|-------------------|---------------------|----------------|--------------------|----------------|-------------------|",
  ];

  for (const r of payload.matrix) {
    const esc = (v) => String(v ?? "—").replace(/\|/g, "\\|").replace(/\n/g, " ");
    lines.push(
      `| ${r.auditId} | ${r.cardId} | ${esc(r.field)} | ${esc(r.current)} | ${esc(r.auditProposed)} | ${esc(r.previousOwnerStatus)} | ${esc(r.previousOwnerDecision?.slice(0, 60))} | ${esc(r.previousOwnerNew)} | ${esc(r.production)} | **${r.classification}** | ${esc(r.evidence)} |`,
    );
  }

  lines.push("");
  lines.push("## Action gate");
  lines.push("");
  if (payload.finalVerdict === "OWNER_HISTORY_VALIDATED") {
    lines.push(`- **${c.OWNER_DECISION_CONFIRMED}** findingi ir OWNER_DECISION_CONFIRMED → **izslēgt** no jaunā OWNER backlog.`);
    lines.push(`- **${c.NEW_VALIDATED_REAL_FINDINGS}** findingi ir patiesi NEW → tikai tie iekļaujami jaunajā OWNER VIEW/DECISIONS.`);
    lines.push("- Nav REPAIR_REGRESSION vai REOPEN → production nav jālabo pirms OWNER review.");
  } else {
    lines.push("- OWNER_HISTORY_GATE_FAIL — nav atļauts COPY-ONLY repair bez atkārtotas klasifikācijas.");
  }
  lines.push("");
  return lines.join("\n");
}

function main() {
  const history = loadHistory();
  const words = loadProduction();
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  let findings = (audit.validatedFindings || []).filter((f) => f.validatedReal !== false);
  if (!findings.length) {
    findings = (audit.findings || []).filter((f) => f.validatedReal);
  }

  const matrix = findings.map((f) => {
    const production = prodValue(words, f.cardId, f.field);
    const hist = findHistory(history.byKey, f.cardId, f.field);
    const result = classify(f, hist, production);
    return {
      auditId: f.findingId,
      cardId: f.cardId,
      field: f.field,
      current: f.currentEt,
      auditProposed: f.proposedEt,
      severity: f.severity,
      category: f.category,
      ...result,
    };
  });

  const summary = {
    RAW_AUDIT_FINDINGS: matrix.length,
    OWNER_DECISION_CONFIRMED: 0,
    OWNER_DECISION_REOPEN_REQUIRED: 0,
    REPAIR_REGRESSION: 0,
    NEW_VALIDATED_REAL_FINDINGS: 0,
    FALSE_POSITIVE: 0,
  };
  for (const r of matrix) summary[r.classification === "NEW_VALIDATED_REAL_FINDING" ? "NEW_VALIDATED_REAL_FINDINGS" : r.classification]++;

  const finalVerdict =
    matrix.length > 0 && summary.REPAIR_REGRESSION === 0 && summary.OWNER_DECISION_REOPEN_REQUIRED === 0
      ? "OWNER_HISTORY_VALIDATED"
      : "OWNER_HISTORY_GATE_FAIL";

  const payload = {
    meta: {
      date: new Date().toISOString().slice(0, 10),
      standard: "PROJECT_LANGUAGE_MASTER_STANDARD.md v1.7",
      baselineMainSha: BASELINE_MAIN,
      baselineBlob: BASELINE_BLOB,
      productionChanges: 0,
      deReadOnly: true,
    },
    summary,
    finalVerdict,
    historySourcesLoaded: history.sourcesLoaded,
    historyEntriesTotal: history.all.length,
    matrix,
    confirmedAuditIds: matrix.filter((r) => r.classification === "OWNER_DECISION_CONFIRMED").map((r) => r.auditId),
    newBacklogAuditIds: matrix.filter((r) => r.classification === "NEW_VALIDATED_REAL_FINDING").map((r) => r.auditId),
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(payload, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(payload));
  console.log(JSON.stringify({ finalVerdict, summary, confirmed: payload.confirmedAuditIds, newBacklog: payload.newBacklogAuditIds }, null, 2));
}

main();
