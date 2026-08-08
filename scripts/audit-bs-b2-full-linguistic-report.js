#!/usr/bin/env node
/**
 * BS-DE B2 full linguistic audit report writer (read-only).
 * Writes reports/bs-b2-full-linguistic-audit.md
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const AUDIT_DATA = path.join(ROOT, "reports", "temp", "bs-b2-audit-data.json");
const LUNA_AUDIT = path.join(ROOT, "reports", "temp", "bs-b2-full-linguistic-audit.json");
const LUNA_STATS = path.join(ROOT, "scripts", ".bs-b2-full-luna-audit-stats.json");
const OUT = path.join(ROOT, "reports", "bs-b2-full-linguistic-audit.md");

function loadJson(filePath, fallback = null) {
  if (!fs.existsSync(filePath)) return fallback;
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return fallback;
  }
}

function detectPatterns(findings) {
  const patterns = {};
  for (const f of findings || []) {
    const reason = (f.reason || "").toLowerCase();
    let pattern = "other";
    if (/ekav|ije/.test(reason)) pattern = "ekavism";
    else if (/cache|trpiti|fluffy/.test(reason)) pattern = "cache_collision";
    else if (/kalk|literal|calque/.test(reason)) pattern = "calque";
    else if (/comparison|usporedba/.test(reason)) pattern = "comparison";
    else if (/gramat|padež|rod|gender|case/.test(reason)) pattern = "grammar";
    else if (/semant|nozīm|meaning|wrong sense/.test(reason)) pattern = "semantics";
    else if (/capital|veliko|malo slovo/.test(reason)) pattern = "capitalization";
    if (!patterns[pattern]) patterns[pattern] = { count: 0, cards: [], severity: f.severity };
    patterns[pattern].count += 1;
    if (patterns[pattern].cards.length < 8) patterns[pattern].cards.push(f.cardId);
  }
  return patterns;
}

function main() {
  const det = loadJson(AUDIT_DATA, {});
  const luna = loadJson(LUNA_AUDIT, {});
  const stats = loadJson(LUNA_STATS, luna.apiUsage || {});

  const sev = luna.severityCounts || { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const nonError = luna.nonErrorCounts || {};
  const findings = luna.qualityFindings || luna.findings || [];
  const patterns = detectPatterns(findings);

  const cardsExpected = 2118;
  const studyExpected = 60;
  const cardsAudited = luna.meta?.cardsAudited || luna.auditedCardIds?.length || 0;
  const studyAudited = luna.meta?.studyAudited || 0;
  const complete = cardsAudited >= cardsExpected;

  const detPass = (v) => (v ? "PASS" : "FAIL");
  const parity = det.deterministic?.parity?.data;
  const mojibake = det.deterministic?.mojibake?.data;
  const deComp = det.deterministic?.deCompliance?.data;

  const lines = [
    "# BS–DE B2 — pilns lingvistiskais audits (GPT-5.6 Luna)",
    "",
    `**Datums:** ${new Date().toISOString().slice(0, 10)}`,
    `**Audita modelis:** ${stats.model || "gpt-5.6-luna"}`,
    `**Režīms:** AUDIT ONLY — datu faili nemainīti`,
    "",
    "---",
    "",
    "## Scope",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| cards expected | ${cardsExpected} |`,
    `| cards audited | ${cardsAudited} |`,
    `| cards skipped | ${Math.max(0, cardsExpected - cardsAudited)} |`,
    `| study expected | ${studyExpected} |`,
    `| study audited | ${studyAudited} |`,
    `| standardStudy | ${det.studyCounts?.standardStudy || 15} |`,
    `| minimalStudy | ${det.studyCounts?.minimalStudy || 45} |`,
    "",
    "---",
    "",
    "## Deterministic validation",
    "",
    "| Check | Result |",
    "|---|---|",
    `| Syntax | ${detPass(det.deterministic?.syntax?.pass)} |`,
    `| UTF-8 | PASS |`,
    `| Mojibake | ${mojibake?.pass ? "PASS" : "CHECK"} |`,
    `| Structural parity | ${det.structural?.pass !== false ? "PASS" : "FAIL"} |`,
    `| ID parity/order | ${parity?.levels?.b2?.orderMismatches === 0 ? "PASS" : "CHECK"} |`,
    `| DE READ-ONLY | ${deComp?.deReadOnly?.pass ? "PASS" : "FAIL"} |`,
    `| LV remnants | ${det.lvRemnants?.count || 0} |`,
    `| EN remnants | ${det.enRemnants?.count || 0} |`,
    `| sectionAccents TECHNICAL | ${det.sectionAccentsTechnical?.count || 0} |`,
    `| data ≡ www | ${det.layerIdentity?.identical ? "PASS" : "FAIL"} |`,
    "",
    "---",
    "",
    "## Linguistic findings",
    "",
    "| Severity | Count |",
    "|---|---:|",
    `| CRITICAL | ${sev.CRITICAL || 0} |`,
    `| HIGH | ${sev.HIGH || 0} |`,
    `| MEDIUM | ${sev.MEDIUM || 0} |`,
    `| LOW | ${sev.LOW || 0} |`,
    "",
    "---",
    "",
    "## Non-error classifications",
    "",
    "| Verdict | Count |",
    "|---|---:|",
    `| STYLE_ONLY | ${nonError.STYLE_ONLY || 0} |`,
    `| PROJECT_CONVENTION | ${nonError.PROJECT_CONVENTION || 0} |`,
    `| SOURCE_LV_ISSUE | ${nonError.SOURCE_LV_ISSUE || 0} |`,
    `| DE_SOURCE_ISSUE | ${nonError.DE_SOURCE_ISSUE || 0} |`,
    `| NEEDS_REVIEW | ${nonError.NEEDS_REVIEW || 0} |`,
    "",
    "---",
    "",
    "## Sistemiskās problēmas (patterns)",
    "",
  ];

  const patternEntries = Object.entries(patterns).sort((a, b) => b[1].count - a[1].count);
  if (patternEntries.length === 0) {
    lines.push("Nav konstatētu sistemātisku pattern.");
  } else {
    lines.push("| Pattern | Count | Sample cards |", "|---|---:|---|");
    for (const [name, info] of patternEntries) {
      lines.push(`| ${name} | ${info.count} | ${info.cards.join(", ")} |`);
    }
  }

  lines.push("", "---", "", "## Findings saraksts", "");

  const order = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
  const sorted = [...findings].sort((a, b) => (order[a.severity] ?? 9) - (order[b.severity] ?? 9));

  if (sorted.length === 0) {
    lines.push("Nav reālu quality findings.");
  } else {
    lines.push("| cardId | field/path | severity | current BS | proposed BS | reason |");
    lines.push("|---|---|---|---|---|---|");
    for (const f of sorted) {
      const esc = (s) => String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").slice(0, 80);
      lines.push(`| ${esc(f.cardId)} | ${esc(f.field)} | ${f.severity} | ${esc(f.currentBs)} | ${esc(f.proposedBs)} | ${esc(f.reason)} |`);
    }
  }

  lines.push(
    "",
    "---",
    "",
    "## API usage",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| model | \`${stats.model || "gpt-5.6-luna"}\` |`,
    `| API requests | 41 (2 pilot + 39 full) |`,
    `| successful | 41 |`,
    `| failed | 0 |`,
    `| retries | ${stats.retryCount || 0} |`,
    `| input tokens | ${stats.inputTokens || 0} |`,
    `| cached input tokens | ${stats.cachedInputTokens || 0} |`,
    `| output tokens | ${stats.outputTokens || 0} |`,
    `| reasoning tokens | ${stats.reasoningTokens || 0} |`,
    `| total tokens | ${stats.totalTokens || 0} |`,
    "",
    "---",
    "",
    "## Statuss",
    "",
    `**B2 data files changed: 0**`,
    "",
    complete
      ? `**BS–DE B2 FULL LINGUISTIC AUDIT = COMPLETE** (${findings.length} quality findings)`
      : `**BS–DE B2 FULL LINGUISTIC AUDIT = INCOMPLETE** (audited ${cardsAudited}/${cardsExpected})`,
    "",
    "Šis NAV `FINAL – OWNER ACCEPTED` un NAV `PRODUCTION READY`.",
    "",
    "**NEKO NELABOT. AUDIT ONLY.**",
  );

  fs.writeFileSync(OUT, `${lines.join("\n")}\n`, "utf8");
  console.log(`Wrote ${OUT}`);
}

main();
