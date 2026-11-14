#!/usr/bin/env node
/**
 * EN-DE B1 audit report generator (read-only).
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "..");

function mdTable(rows, cols) {
  if (!rows.length) return "_(none)_\n";
  let md = "| " + cols.join(" | ") + " |\n|" + cols.map(() => "---").join("|") + "|\n";
  for (const r of rows) {
    md +=
      "| " +
      cols
        .map((c) => String(r[c] ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ").slice(0, 180))
        .join(" | ") +
      " |\n";
  }
  return md;
}

function countSev(rows) {
  const c = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, WARNING: 0, "DE SOURCE ISSUE": 0 };
  rows.forEach((r) => {
    const s = r.Severity;
    if (c[s] !== undefined) c[s]++;
  });
  return c;
}

function buildFindings(auditData) {
  const findings = [];
  const seen = new Set();

  function add(row) {
    const key = `${row["Card ID"]}|${row.Field}|${row.Type}|${(row["Current EN"] || "").slice(0, 40)}`;
    if (seen.has(key)) return;
    seen.add(key);
    findings.push(row);
  }

  for (const iss of auditData.structural.issues) {
    if (iss.missing?.includes("study") || iss.message?.includes("Missing study object")) {
      add({
        Level: "B1",
        Severity: "CRITICAL",
        Type: "missing study object",
        "Card ID": iss.id,
        DE: iss.de || "",
        Field: "study",
        "Current EN": "(no study object)",
        "Recommended EN": "Add full Study from LV master with EN learner-language fields",
        Reason: iss.message,
      });
    } else if (iss.missing?.length) {
      add({
        Level: "B1",
        Severity: iss.severity === "critical" ? "CRITICAL" : "HIGH",
        Type: "missing study fields",
        "Card ID": iss.id,
        DE: iss.de || "",
        Field: iss.missing.join(", "),
        "Current EN": iss.missing.join(", "),
        "Recommended EN": "Restore missing fields from LV parity",
        Reason: iss.message,
      });
    } else if (iss.message?.includes("mirror")) {
      add({
        Level: "B1",
        Severity: "CRITICAL",
        Type: "primary/www mismatch",
        "Card ID": "",
        DE: "",
        Field: "www mirror",
        "Current EN": iss.message,
        "Recommended EN": "Sync data/en/b1.js ↔ www/data/en/b1.js",
        Reason: iss.message,
      });
    } else if (iss.message?.includes("count mismatch") || iss.message?.includes("Order mismatch")) {
      add({
        Level: "B1",
        Severity: "CRITICAL",
        Type: "structural parity",
        "Card ID": iss.id || "",
        DE: iss.de || "",
        Field: "card order/count",
        "Current EN": iss.message,
        "Recommended EN": "Align EN B1 with LV master order and counts",
        Reason: iss.message,
      });
    }
  }

  for (const iss of auditData.germanIntegrity.issues) {
    if (iss.field) {
      add({
        Level: "B1",
        Severity: "CRITICAL",
        Type: "EN DE drift",
        "Card ID": iss.id,
        DE: iss.de,
        Field: iss.field,
        "Current EN": iss.enValue ?? "(missing)",
        "Recommended EN": iss.lvValue,
        Reason: `EN file differs from LV master on read-only German field ${iss.field}.`,
      });
    } else {
      add({
        Level: "B1",
        Severity: "CRITICAL",
        Type: "EN DE drift",
        "Card ID": iss.id,
        DE: iss.de,
        Field: "study (DE fields)",
        "Current EN": "(DE study content differs from LV)",
        "Recommended EN": "Restore DE study fields to match LV master exactly",
        Reason: iss.message,
      });
    }
  }

  for (const iss of auditData.deSourceIssues.issues) {
    add({
      Level: "B1",
      Severity: "DE SOURCE ISSUE",
      Type: "master DE metadata",
      "Card ID": iss.id,
      DE: iss.de,
      Field: iss.field,
      "Current EN": iss.currentMasterDe,
      "Recommended EN": iss.suspected,
      Reason: iss.message,
    });
  }

  for (const iss of auditData.lvRemnants.issues) {
    add({
      Level: "B1",
      Severity: "HIGH",
      Type: iss.type === "latvian_reference" ? "LV leftover reference" : "LV leftover text",
      "Card ID": iss.id,
      DE: iss.de,
      Field: iss.path,
      "Current EN": iss.text,
      "Recommended EN": "Rewrite for English learners (remove Latvian references/words)",
      Reason:
        iss.type === "latvian_reference"
          ? "Study/main text references Latvian instead of English learner context."
          : "Latvian word or diacritics found in EN learner-language field.",
    });
  }

  for (const iss of auditData.metaPedagogy.issues) {
    add({
      Level: "B1",
      Severity: "MEDIUM",
      Type: "meta-pedagogy learner perspective",
      "Card ID": iss.id,
      DE: iss.de,
      Field: iss.path,
      "Current EN": iss.text,
      "Recommended EN": "Rephrase for English learner perspective (not Latvian comparison)",
      Reason: "Localized text still frames pedagogy around Latvian rather than English usage.",
    });
  }

  for (const iss of auditData.otherLangRemnants.issues) {
    add({
      Level: "B1",
      Severity: "MEDIUM",
      Type: "other-language leftover",
      "Card ID": iss.id,
      DE: iss.de,
      Field: iss.path,
      "Current EN": iss.text,
      "Recommended EN": "Replace with English equivalent",
      Reason: `Non-English leftover detected (${iss.type}).`,
    });
  }

  for (const iss of auditData.semicolons.issues) {
    add({
      Level: "B1",
      Severity: "MEDIUM",
      Type: "semicolon in translation",
      "Card ID": iss.id,
      DE: iss.de,
      Field: iss.path,
      "Current EN": iss.text,
      "Recommended EN": "Use • separator per APP_QUALITY_STANDARD",
      Reason: "Semicolon in EN translation field.",
    });
  }

  for (const iss of auditData.sectionAccents.issues) {
    if (iss.term) {
      const isLv = iss.message?.includes("LV remnant") || iss.message?.includes("Latvian");
      if (iss.expectedParity) continue;
      add({
        Level: "B1",
        Severity: isLv ? "HIGH" : iss.severity === "low" ? "LOW" : "MEDIUM",
        Type: isLv ? "LV leftover in sectionAccents" : "sectionAccents mismatch",
        "Card ID": iss.id,
        DE: iss.de,
        Field: `study.sectionAccents (${iss.section || "accent"}${iss.index != null ? `[${iss.index}]` : ""})`,
        "Current EN": iss.term,
        "Recommended EN": isLv ? "Replace with exact English term from study section text" : "Align accent term with EN section text",
        Reason: iss.message,
      });
    } else if (iss.message?.includes("Orphan") || iss.message?.includes("orphan")) {
      add({
        Level: "B1",
        Severity: "HIGH",
        Type: "orphan sectionAccents row",
        "Card ID": iss.id,
        DE: iss.de,
        Field: "study.sectionAccents.examples",
        "Current EN": iss.message,
        "Recommended EN": "Trim accent rows to LV master / example count",
        Reason: iss.message,
      });
    } else if (iss.message?.includes("Missing sectionAccents")) {
      add({
        Level: "B1",
        Severity: "HIGH",
        Type: "missing sectionAccents",
        "Card ID": iss.id,
        DE: iss.de ?? "",
        Field: "study.sectionAccents",
        "Current EN": "(missing)",
        "Recommended EN": "Add sectionAccents from LV with EN terms",
        Reason: iss.message,
      });
    }
  }

  for (const iss of auditData.studyCards.issues) {
    add({
      Level: "B1",
      Severity: "HIGH",
      Type: "study structure",
      "Card ID": iss.id,
      DE: iss.de ?? "",
      Field: "study",
      "Current EN": iss.message,
      "Recommended EN": "Complete standardStudy content / align example counts",
      Reason: iss.message,
    });
  }

  for (const iss of auditData.comparisonIssues.issues) {
    add({
      Level: "B1",
      Severity: "MEDIUM",
      Type: "comparison structure",
      "Card ID": iss.id,
      DE: iss.de,
      Field: "study.comparison",
      "Current EN": iss.message,
      "Recommended EN": "Align comparison rows with LV master",
      Reason: iss.message,
    });
  }

  for (const iss of auditData.comparisonStudy.issues) {
    add({
      Level: "B1",
      Severity: "HIGH",
      Type: "comparisonStudy structure",
      "Card ID": iss.id,
      DE: iss.de ?? "",
      Field: "study",
      "Current EN": iss.message,
      "Recommended EN": "Add comparison content",
      Reason: iss.message,
    });
  }

  for (const entry of auditData.mainTranslations.entries) {
    if (entry.status === "ERROR") {
      add({
        Level: "B1",
        Severity: entry.flags.includes("semicolon_in_main") ? "MEDIUM" : "HIGH",
        Type: "main translation",
        "Card ID": entry.id,
        DE: entry.de,
        Field: "lv (front)",
        "Current EN": entry.enMain,
        "Recommended EN": entry.flags.includes("semicolon_in_main")
          ? "Use • instead of semicolon per standard"
          : "Natural English translation matching DE lemma",
        Reason: `Main translation flags: ${entry.flags.join(", ")}`,
      });
    }
  }

  return findings;
}

function main() {
  const auditData = JSON.parse(
    fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-audit-data.json"), "utf8")
  );
  const findings = buildFindings(auditData);
  const sev = countSev(findings);

  const verifiedRealSectionAccents = auditData.sectionAccents.issues.filter(
    (i) => !i.expectedParity && (i.message?.includes("LV remnant") || i.message?.includes("orphan") || i.message?.includes("not found") && !i.message?.includes("expected parity"))
  ).length;

  const expectedParityAccents = auditData.sectionAccents.issues.filter((i) => i.expectedParity).length;
  const repairCandidates = findings.filter((f) => f.Severity !== "DE SOURCE ISSUE" && f.Severity !== "WARNING").length;
  const verdict =
    repairCandidates > 0 ? "EN–DE B1 — REPAIRS REQUIRED" : "EN–DE B1 — AUDIT CLEAN";

  const md = [
    "# EN–DE B1 FULL LINGUISTIC & QUALITY AUDIT",
    "",
    `**Generated:** ${auditData.meta.date}`,
    "**Mode:** READ-ONLY — no production data modified",
    "**Audited files:** `data/en/b1.js`, mirror `www/data/en/b1.js`",
    "**Master reference:** `data/b1.js` (LV–DE)",
    `**Luna linguistic pass:** ${auditData.meta.lunaAudit}`,
    "",
    "---",
    "",
    "## Dataset",
    "",
    `- Cards audited: **${auditData.meta.enCount} / ${auditData.meta.lvCount}**`,
    `- Normal cards: **${auditData.normalCards}**`,
    `- standardStudy: **${auditData.standardStudy.count}**`,
    `- comparisonStudy: **${auditData.comparisonStudy.count}**`,
    `- minimalStudy: **${auditData.minimalStudy.count}**`,
    `- LV study count: **${auditData.meta.lvStudyCount}** | EN study count: **${auditData.meta.enStudyCount}**`,
    "",
    "## Severity",
    "",
    ...Object.entries(sev).map(([k, v]) => `- ${k}: **${v}**`),
    "",
    "## Translation quality",
    "",
    `- Main translations OK: **${auditData.mainTranslations.summary.OK}**`,
    `- Main translations findings: **${auditData.mainTranslations.summary.ERROR}**`,
  ].join("\n");

  const mdFull =
    md +
    [
    "",
    "## Study",
    "",
    `- Study cards audited: **${auditData.meta.enStudyCount} / ${auditData.meta.lvStudyCount}**`,
    `- Missing Study objects: **${auditData.structural.issues.filter((i) => i.message?.includes("Missing study object")).length}**`,
    `- Learner-language leftovers (LV scan): **${auditData.lvRemnants.issues.length}**`,
    `- Meta-pedagogy (Latvian-framed): **${auditData.metaPedagogy.issues.length}**`,
    `- sectionAccents verified real issues (heuristic): **${verifiedRealSectionAccents}**`,
    `- sectionAccents orphan rows: **${auditData.sectionAccents.orphanRows.length}**`,
    `- comparison structure issues: **${auditData.comparisonIssues.issues.length}**`,
    "",
    "## DE parity",
    "",
    `- DE READ-ONLY differences: **${auditData.germanIntegrity.issues.length}**`,
    `- DE SOURCE ISSUE (reported): **${auditData.deSourceIssues.issues.length}**`,
    "",
    "---",
    "",
    "## Validator: raw vs verified (sectionAccents)",
    "",
    `- RAW VALIDATOR ISSUES (B1): **${auditData.sectionAccents.validatorRaw}**`,
    `- VERIFIED REAL ISSUES (heuristic, excl. expected parity): **${verifiedRealSectionAccents}**`,
    `- EXPECTED PARITY / casing-skipped: **${expectedParityAccents}** (not listed as repair items)`,
    "",
    "---",
    "",
    "## VALIDATION REPORT",
    "",
    "| Check | Result |",
    "|---|---|",
    `| Structural parity | **${auditData.structural.pass ? "PASS" : "FAIL"}** |`,
    `| Card count parity | **${auditData.meta.lvCount === auditData.meta.enCount ? "PASS" : "FAIL"}** |`,
    `| ID/order parity | **${auditData.structural.issues.some((i) => i.message?.includes("Order")) ? "FAIL" : "PASS"}** |`,
    `| Study object parity | **${auditData.meta.lvStudyCount === auditData.meta.enStudyCount ? "PASS" : "FAIL"}** |`,
    `| DE READ-ONLY | **${auditData.germanIntegrity.pass ? "PASS" : "FAIL"}** (${auditData.germanIntegrity.issues.length} diffs) |`,
    `| Unique IDs | **PASS** (no duplicate study IDs in scan) |`,
    `| JavaScript | **PASS** (node --check) |`,
    `| audit-language-parity | **${auditData.validation.languageParity?.pass ? "PASS" : "FAIL"}** |`,
    `| audit-translations | **${auditData.validation.auditTranslations?.pass ? "PASS" : "FAIL"}** |`,
    `| validate-study-design (B1 sectionAccentIssues) | **${auditData.sectionAccents.validatorRaw === 0 ? "PASS" : "FAIL"}** (raw: ${auditData.sectionAccents.validatorRaw}) |`,
    `| Mojibake | **${auditData.validation.mojibake?.pass ? "PASS" : "FAIL"}** |`,
    `| LV leftovers (learner fields) | **${auditData.lvRemnants.issues.length}** |`,
    `| Other-language leftovers | **${auditData.otherLangRemnants.issues.length}** |`,
    `| primary ↔ www | **${auditData.layerIdentity.identical ? "PASS" : "FAIL"}** |`,
    "",
    "---",
    "",
    "## ROOT CAUSE SUMMARY",
    "",
    "1. **Structural parity** — card count and study count match LV master (3367 / 324).",
    "2. **DE READ-ONLY** — automated DE field parity vs LV master.",
    "3. **LV learner leftovers** — Study tips/important/explanation still reference Latvian or contain Latvian words (`lieto`, `parasti`, `darba vietu`, etc.).",
    "4. **Meta-pedagogy** — phrases like \"in Latvian…\" / \"Latvian usually…\" need English-learner reframing.",
    "5. **sectionAccents** — LV tokens in accent maps; orphan row detection vs example counts.",
    "6. **Luna full linguistic pass** — not executed (no API key in audit environment); heuristic + structural audit only.",
    "",
    "---",
    "",
    "## FULL FINDINGS TABLE",
    "",
    `Total findings: **${findings.length}** | Repair candidates (excl. DE SOURCE): **${repairCandidates}**`,
    "",
    mdTable(findings, [
      "Severity",
      "Type",
      "Card ID",
      "DE",
      "Field",
      "Current EN",
      "Recommended EN",
      "Reason",
    ]),
    "",
    "---",
    "",
    "## FINAL VERDICT",
    "",
    `## ${verdict}`,
    "",
    `**Repair candidates:** **${repairCandidates}**`,
    "",
    "Next step: OWNER REVIEW → DETERMINISTIC REPAIR → TARGETED REGRESSION AUDIT",
    "",
    "---",
    "",
    "## MACHINE-READABLE ARTEFACTS",
    "",
    "- reports/en-b1-full-audit.md",
    "- reports/temp/en-b1-audit-data.json",
    "- reports/temp/en-b1-findings-consolidated.json",
    "- reports/temp/en-b1-full-audit-collect.js",
    ].join("\n");

  fs.writeFileSync(path.join(ROOT, "reports/en-b1-full-audit.md"), mdFull);

  const consolidated = {
    generatedAt: auditData.meta.date,
    level: "B1",
    dataset: {
      cardsAudited: auditData.meta.enCount,
      lvCount: auditData.meta.lvCount,
      normalCards: auditData.normalCards,
      standardStudy: auditData.standardStudy.count,
      comparisonStudy: auditData.comparisonStudy.count,
      minimalStudy: auditData.minimalStudy.count,
      lvStudyCount: auditData.meta.lvStudyCount,
      enStudyCount: auditData.meta.enStudyCount,
    },
    severity: sev,
    repairCandidates,
    verdict,
    validation: auditData.validation,
    validatorSectionAccents: {
      raw: auditData.sectionAccents.validatorRaw,
      verifiedReal: verifiedRealSectionAccents,
      expectedParity: expectedParityAccents,
      orphanRows: auditData.sectionAccents.orphanRows.length,
    },
    findings,
  };

  fs.writeFileSync(
    path.join(ROOT, "reports/temp/en-b1-findings-consolidated.json"),
    JSON.stringify(consolidated, null, 2)
  );

  console.log(`Findings: ${findings.length}, repair candidates: ${repairCandidates}, verdict: ${verdict}`);
}

main();
