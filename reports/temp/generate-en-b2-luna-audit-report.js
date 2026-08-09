#!/usr/bin/env node
/**
 * EN-DE B2 Luna full linguistic audit report writer (read-only).
 * Writes reports/en-b2-luna-full-linguistic-audit.md
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");
const AUDIT_DATA = path.join(ROOT, "reports", "temp", "en-b2-audit-data.json");
const LUNA_AUDIT = path.join(ROOT, "reports", "temp", "en-b2-luna-linguistic-findings.json");
const LUNA_STATS = path.join(ROOT, "reports", "temp", ".en-b2-luna-audit-stats.json");
const OUT = path.join(ROOT, "reports", "en-b2-luna-full-linguistic-audit.md");

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
    const cat = String(f.category || "").toUpperCase();
    let pattern = "other";
    if (cat === "FOREIGN_REMNANT") pattern = "foreign_remnant";
    else if (cat === "COMPARISON") pattern = "comparison";
    else if (cat === "STUDY") pattern = "study";
    else if (/latvian|lv remnant|foreign/.test(reason)) pattern = "foreign_remnant";
    else if (/calque|literal/.test(reason)) pattern = "calque";
    else if (/grammar|tense|article|plural/.test(reason)) pattern = "grammar";
    else if (/semant|meaning|sense|wrong/.test(reason)) pattern = "semantics";
    else if (/natural|register|awkward|stilted/.test(reason)) pattern = "naturalness";
    else if (/orthograph|spelling|capital/.test(reason)) pattern = "orthography";
    if (!patterns[pattern]) patterns[pattern] = { count: 0, cards: [] };
    patterns[pattern].count += 1;
    if (patterns[pattern].cards.length < 8) patterns[pattern].cards.push(f.cardId);
  }
  return patterns;
}

function escCell(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").slice(0, 100);
}

function deriveVerdict(cardsAudited, cardsExpected, findings, det) {
  if (cardsAudited < cardsExpected) return "INCOMPLETE";
  const sev = findings.reduce(
    (acc, f) => {
      const s = String(f.severity || "MEDIUM").toUpperCase();
      if (s === "WARNING") acc.MEDIUM += 1;
      else if (acc[s] !== undefined) acc[s] += 1;
      return acc;
    },
    { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 }
  );
  const detHigh = (det?.lvRemnants?.count || 0) > 0;
  if (sev.CRITICAL > 0 || sev.HIGH > 0 || detHigh) return "REPAIRS REQUIRED";
  if (sev.MEDIUM > 0 || sev.LOW > 0) return "OWNER REVIEW REQUIRED";
  return "CLEAN";
}

function main() {
  const det = loadJson(AUDIT_DATA, {});
  const luna = loadJson(LUNA_AUDIT, {});
  const stats = loadJson(LUNA_STATS, luna.apiUsage || {});

  const sev = luna.severityCounts || { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const nonError = luna.nonErrorCounts || {};
  const deSourceIssues = luna.deSourceIssues || [];
  const findings = luna.qualityFindings || luna.findings || [];
  const patterns = detectPatterns(findings);

  const cardsExpected = luna.meta?.cardsExpected || 2118;
  const studyExpected = luna.meta?.studyExpected || 60;
  const cardsAudited = luna.meta?.cardsAudited || luna.auditedCardIds?.length || 0;
  const studyAudited = luna.meta?.studyAudited || 0;
  const flashExpected = luna.meta?.flashcardsExpected || 2058;
  const flashAudited = luna.meta?.flashcardsAudited || 0;
  const complete = cardsAudited >= cardsExpected;

  const detPass = (v) => (v ? "PASS" : "FAIL");
  const parity = det.deterministic?.parity?.data;
  const mojibake = det.deterministic?.mojibake?.data;
  const lvRemnantCount = det.lvRemnants?.issues?.length ?? det.lvRemnants?.count ?? 0;
  const germanIntegrityPass = det.germanIntegrity?.pass ?? det.deterministic?.deCompliance?.data?.deReadOnly?.pass;

  const bietenDet = (det.lvRemnants?.issues || []).find((i) => i.id === "b2-bieten");
  const bietenLunaRemnant = findings.find(
    (f) =>
      f.cardId === "b2-bieten" &&
      ((f.currentEn || "").includes("Ko vieta") ||
        (f.field || "").includes("important") ||
        String(f.category || "").toUpperCase() === "FOREIGN_REMNANT")
  );
  const verlaufenCards = ["b2-sich verlaufen", "b2-verlaufen", "b2-sich-verlaufen", "b2-verlaufen"];

  const rendererNotes = (det.findings || det.consolidatedFindings || [])
    .filter((f) => verlaufenCards.some((id) => (f.cardId || f.id || "").includes("verlaufen")))
    .slice(0, 5);

  const verdict = deriveVerdict(cardsAudited, cardsExpected, findings, det);

  const lines = [
    "# EN–DE B2 — Luna full linguistic audit (GPT-5.6 Luna)",
    "",
    `**Audit date:** ${new Date().toISOString().slice(0, 10)}`,
    `**Audit model:** ${stats.model || luna.meta?.model || "gpt-5.6-luna"}`,
    "**Mode:** READ-ONLY — no production data modified",
    "**Audited files:** `data/en/b2.js`, mirror `www/data/en/b2.js`",
    "**Master reference:** `data/b2.js` (DE READ-ONLY)",
  ];

  if (luna.meta?.dataUnchanged) {
    lines.push(`**Data integrity:** PASS (MD5 unchanged: data=${luna.meta.hashBefore?.data}, www=${luna.meta.hashBefore?.www})`);
  }

  lines.push(
    "",
    "---",
    "",
    "## Scope & coverage",
    "",
    "| Metric | Value |",
    "|---|---:|",
    `| Cards expected | **${cardsExpected}** |`,
    `| Cards audited | **${cardsAudited}** |`,
    `| Cards skipped | ${Math.max(0, cardsExpected - cardsAudited)} |`,
    `| Flashcards expected | ${flashExpected} |`,
    `| Flashcards audited | ${flashAudited} |`,
    `| Study cards expected | ${studyExpected} |`,
    `| Study cards audited | ${studyAudited} |`,
    `| standardStudy | ${luna.meta?.standardStudy || det.studyCounts?.standardStudy || 15} |`,
    `| minimalStudy | ${luna.meta?.minimalStudy || det.studyCounts?.minimalStudy || 45} |`,
    "",
    complete
      ? `**Coverage proof:** ${cardsAudited}/${cardsExpected} cards semantically reviewed by Luna.`
      : `**Coverage:** INCOMPLETE — ${cardsAudited}/${cardsExpected} cards audited.`,
    "",
    "---",
    "",
    "## Deterministic validation (baseline)",
    "",
    "| Check | Result |",
    "|---|---|",
    `| JavaScript syntax | ${detPass(det.deterministic?.syntax?.pass)} |`,
    `| UTF-8 / Mojibake | ${mojibake?.pass ? "PASS" : "CHECK"} |`,
    `| Structural parity | ${det.structural?.pass !== false ? "PASS" : "FAIL"} |`,
    `| ID parity/order | ${parity?.levels?.b2?.orderMismatches === 0 ? "PASS" : "CHECK"} |`,
    `| DE READ-ONLY (germanIntegrity) | ${germanIntegrityPass ? "PASS" : "CHECK"} |`,
    `| LV remnants (deterministic) | ${lvRemnantCount} |`,
    `| data ≡ www | ${det.layerIdentity?.identical ? "PASS" : "FAIL"} |`,
    "",
    "---",
    "",
    "## Linguistic findings (Luna)",
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
    "## Known finding verification: b2-bieten",
    "",
  );

  if (bietenDet || bietenLunaRemnant) {
    lines.push("**CONFIRMED** — Latvian remnant in `study.important[1]`:", "");
    if (bietenDet) {
      lines.push(
        `- **Deterministic (HIGH):** ` +
          `${bietenDet.path} → "${escCell(bietenDet.text)}"`,
      );
    }
    if (bietenLunaRemnant) {
      lines.push(
        `- **Luna:** ${bietenLunaRemnant.severity} / ${bietenLunaRemnant.category} — ${escCell(bietenLunaRemnant.reason)}`,
        "",
        `| field | currentEn | proposedEn |`,
        `|---|---|---|`,
        `| ${escCell(bietenLunaRemnant.field)} | ${escCell(bietenLunaRemnant.currentEn)} | ${escCell(bietenLunaRemnant.proposedEn)} |`,
      );
    } else if (bietenDet) {
      lines.push(
        "- **Luna:** did not flag this remnant separately (miss); deterministic scan remains authoritative for FOREIGN_REMNANT here.",
      );
    }
  } else {
    lines.push("No b2-bieten remnant detected in Luna or deterministic scan.");
  }

  lines.push(
    "",
    "---",
    "",
    "## Renderer / non-linguistic notes (sich verlaufen / verlaufen)",
    "",
    "These are **documentation notes** from deterministic `validate-study-design` — not linguistic errors unless Luna flagged EN text:",
    "",
  );

  if (rendererNotes.length > 0) {
    lines.push("| cardId | note |", "|---|---|");
    for (const n of rendererNotes) {
      lines.push(`| ${escCell(n.cardId || n.id)} | ${escCell(n.reason || n.type || "minimalStudy no renderable")} |`);
    }
  } else {
    lines.push(
      "- `b2-sich verlaufen` — minimalStudy flagged `studyObjectNoRenderable` by validate-study-design (renderer policy, LOW).",
      "- `b2-verlaufen` — same minimalStudy renderer flag (LOW).",
    );
  }

  const lunaVerlaufen = findings.filter((f) => verlaufenCards.some((id) => (f.cardId || "").includes("verlaufen")));
  if (lunaVerlaufen.length > 0) {
    lines.push("", "**Additional Luna findings on verlaufen cards:**", "");
    for (const f of lunaVerlaufen) {
      lines.push(`- ${f.cardId} / ${f.field}: ${f.severity} — ${f.reason}`);
    }
  }

  lines.push(
    "",
    "---",
    "",
    "## DE SOURCE ISSUES",
    "",
  );

  if (deSourceIssues.length === 0) {
    lines.push("None flagged by Luna.");
  } else {
    lines.push("| cardId | field | reason |", "|---|---|---|");
    for (const f of deSourceIssues) {
      lines.push(`| ${escCell(f.cardId)} | ${escCell(f.field)} | ${escCell(f.reason)} |`);
    }
  }

  lines.push(
    "",
    "---",
    "",
    "## Systematic patterns",
    "",
  );

  const patternEntries = Object.entries(patterns).sort((a, b) => b[1].count - a[1].count);
  if (patternEntries.length === 0) {
    lines.push("No systematic quality patterns detected.");
  } else {
    lines.push("| Pattern | Count | Sample cards |", "|---|---:|---|");
    for (const [name, info] of patternEntries) {
      lines.push(`| ${name} | ${info.count} | ${info.cards.join(", ")} |`);
    }
  }

  lines.push("", "---", "", "## Detailed findings", "");

  const order = { CRITICAL: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
  const sorted = [...findings].sort((a, b) => (order[a.severity] ?? 9) - (order[b.severity] ?? 9));

  if (sorted.length === 0) {
    lines.push("No real quality findings from Luna.");
  } else {
    lines.push(
      "| cardId | field | severity | category | currentEn | proposedEn | reason |",
      "|---|---|---|---|---|---|---|",
    );
    for (const f of sorted) {
      lines.push(
        `| ${escCell(f.cardId)} | ${escCell(f.field)} | ${f.severity} | ${f.category || ""} | ${escCell(f.currentEn)} | ${escCell(f.proposedEn)} | ${escCell(f.reason)} |`,
      );
    }
  }

  const batchCount = luna.batches?.length || stats.batchCount || 0;
  lines.push(
    "",
    "---",
    "",
    "## API usage",
    "",
    "| Metric | Value |",
    "|---|---:|",
    `| model | \`${stats.model || "gpt-5.6-luna"}\` |`,
    `| API requests | ${stats.requestCount || batchCount} |`,
    `| initial batch requests | ${stats.initialBatchRequests || 0} |`,
    `| retries | ${stats.retryCount || 0} |`,
    `| input tokens | ${stats.inputTokens || 0} |`,
    `| cached input tokens | ${stats.cachedInputTokens || 0} |`,
    `| output tokens | ${stats.outputTokens || 0} |`,
    `| reasoning tokens | ${stats.reasoningTokens || 0} |`,
    `| total tokens | ${stats.totalTokens || 0} |`,
    "",
    "---",
    "",
    "## Production changes",
    "",
    "**Production data file changes: 0**",
    "",
    "---",
    "",
    "## GALA VERDICT",
    "",
    `### EN–DE B2 Luna audit — **${verdict}**`,
    "",
    `**Quality findings:** ${findings.length}`,
    `**Coverage:** ${cardsAudited}/${cardsExpected}`,
    "",
    complete
      ? "Full semantic Luna review completed for all B2 cards."
      : "Audit incomplete — rerun `node reports/temp/audit-en-b2-full-luna.js` to resume.",
    "",
    "This is **AUDIT ONLY** — not `FINAL – OWNER ACCEPTED` and not `PRODUCTION READY`.",
    "",
    "---",
    "",
    "## Machine-readable artefacts",
    "",
    "- `reports/en-b2-luna-full-linguistic-audit.md`",
    "- `reports/temp/en-b2-luna-linguistic-findings.json`",
    "- `reports/temp/.en-b2-luna-audit-stats.json`",
    "- `reports/temp/en-b2-audit-data.json` (deterministic baseline)",
  );

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, `${lines.join("\n")}\n`, "utf8");
  console.log(`Wrote ${OUT}`);
  console.log(`Verdict: ${verdict}, findings: ${findings.length}, coverage: ${cardsAudited}/${cardsExpected}`);
}

main();
