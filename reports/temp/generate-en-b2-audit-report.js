#!/usr/bin/env node
/**
 * EN-DE B2 full audit report generator (read-only).
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
      cols.map((c) => String(r[c] ?? "").replace(/\|/g, "\\|").replace(/\n/g, " ").slice(0, 200)).join(" | ") +
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

function buildFindings(level, auditData) {
  const findings = [];
  const seen = new Set();

  function add(row) {
    const key = `${row["Card ID"]}|${row.Field}|${row["Current EN"]}|${row.Severity}|${row.Type}`;
    if (seen.has(key)) return;
    seen.add(key);
    findings.push(row);
  }

  for (const iss of auditData.structural.issues) {
    if (iss.message?.includes("mirror")) {
      add({
        Level: "B2",
        Severity: "CRITICAL",
        Type: "mirror mismatch",
        "Card ID": "—",
        DE: "—",
        "Current EN": iss.message,
        "Recommended EN": "Sync data/en/b2.js to www/data/en/b2.js",
        Field: "file",
        Reason: iss.message,
      });
    }
    if (iss.message?.includes("count mismatch") || iss.message?.includes("Study count")) {
      add({
        Level: "B2",
        Severity: "CRITICAL",
        Type: "structural parity",
        "Card ID": "—",
        DE: "—",
        "Current EN": iss.message,
        "Recommended EN": "Restore parity with LV master data/b2.js",
        Field: "structure",
        Reason: iss.message,
      });
    }
    if (iss.de && iss.message?.includes("Missing fields")) {
      add({
        Level: "B2",
        Severity: iss.missing?.includes("study") ? "CRITICAL" : "HIGH",
        Type: "missing fields",
        "Card ID": iss.id,
        DE: iss.de,
        "Current EN": (iss.missing || []).join(", "),
        "Recommended EN": "Restore missing fields from LV master",
        Field: (iss.missing || []).join(", "),
        Reason: iss.message,
      });
    }
    if (iss.message?.includes("Order mismatch") || iss.message?.includes("Layout mismatch")) {
      add({
        Level: "B2",
        Severity: "CRITICAL",
        Type: "structural order/layout",
        "Card ID": iss.id || "—",
        DE: iss.de || "—",
        "Current EN": iss.message,
        "Recommended EN": "Align with LV master order/layout",
        Field: "structure",
        Reason: iss.message,
      });
    }
    if (iss.message?.includes("Duplicate study id")) {
      add({
        Level: "B2",
        Severity: "HIGH",
        Type: "duplicate study id",
        "Card ID": iss.id,
        DE: "—",
        "Current EN": iss.message,
        "Recommended EN": "Fix duplicate study.id",
        Field: "study.id",
        Reason: iss.message,
      });
    }
  }

  for (const iss of auditData.germanIntegrity.issues) {
    if (iss.field) {
      add({
        Level: "B2",
        Severity: "CRITICAL",
        Type: "DE read-only violation",
        "Card ID": iss.id,
        DE: iss.de,
        "Current EN": iss.enValue ?? "(missing)",
        "Recommended EN": iss.lvValue,
        Field: iss.field,
        Reason: `EN file differs from LV master on read-only German field ${iss.field}.`,
      });
    } else if (iss.message?.includes("Study German content differs")) {
      add({
        Level: "B2",
        Severity: "CRITICAL",
        Type: "DE read-only violation",
        "Card ID": iss.id,
        DE: iss.de,
        "Current EN": "(DE study content differs from LV)",
        "Recommended EN": "Restore DE study fields to match LV master exactly",
        Field: "study (DE fields)",
        Reason: "Study German content differs from LV master — DE must remain read-only.",
      });
    }
  }

  for (const iss of auditData.lvRemnants.issues) {
    add({
      Level: "B2",
      Severity: "HIGH",
      Type: iss.type === "latvian_reference" ? "LV leftover reference" : "LV leftover text",
      "Card ID": iss.id,
      DE: iss.de,
      "Current EN": iss.text,
      "Recommended EN": "Rewrite for English learners (remove Latvian references/words)",
      Field: iss.path,
      Reason:
        iss.type === "latvian_reference"
          ? "Study/main text references Latvian instead of English learner context."
          : "Latvian word or diacritics found in EN learner-language field.",
    });
  }

  for (const iss of auditData.otherLangRemnants.issues) {
    add({
      Level: "B2",
      Severity: "MEDIUM",
      Type: "other-language leftover",
      "Card ID": iss.id,
      DE: iss.de,
      "Current EN": iss.text,
      "Recommended EN": "Replace with English equivalent",
      Field: iss.path,
      Reason: `Non-English diacritics in EN field (${iss.type}).`,
    });
  }

  for (const iss of auditData.semicolons.issues) {
    const sev = iss.type === "semicolon_in_translation" ? "MEDIUM" : "LOW";
    add({
      Level: "B2",
      Severity: sev,
      Type: iss.type === "semicolon_in_translation" ? "semicolon in translation" : "semicolon in study pedagogy",
      "Card ID": iss.id,
      DE: iss.de,
      "Current EN": iss.text,
      "Recommended EN":
        iss.type === "semicolon_in_translation" ? "Use • separator per APP_QUALITY_STANDARD" : "Prefer bullets or separate sentences",
      Field: iss.path,
      Reason:
        iss.type === "semicolon_in_translation"
          ? "Semicolon in EN translation field (not allowed per APP_QUALITY_STANDARD §1)."
          : "Semicolon in study tip/important pedagogy text.",
    });
  }

  for (const iss of auditData.sectionAccents.issues) {
    if (iss.term) {
      const isLv = iss.message?.includes("LV remnant") || iss.message?.includes("Latvian");
      add({
        Level: "B2",
        Severity: isLv ? "HIGH" : iss.severity === "low" ? "LOW" : "MEDIUM",
        Type: isLv ? "LV leftover in sectionAccents" : iss.severity === "low" ? "sectionAccents casing mismatch" : "sectionAccents mismatch",
        "Card ID": iss.id,
        DE: iss.de,
        "Current EN": iss.term,
        "Recommended EN": isLv ? "Replace with exact English term from study section text" : "Align accent term with EN section text",
        Field: `study.sectionAccents (${iss.section || "accent"})`,
        Reason: iss.message,
      });
    } else if (iss.message?.includes("Missing sectionAccents")) {
      add({
        Level: "B2",
        Severity: "HIGH",
        Type: "missing sectionAccents",
        "Card ID": iss.id,
        DE: iss.de ?? "",
        "Current EN": "(missing)",
        "Recommended EN": "Add sectionAccents from LV with EN terms",
        Field: "study.sectionAccents",
        Reason: iss.message,
      });
    }
  }

  for (const iss of auditData.studyCards.issues) {
    add({
      Level: "B2",
      Severity: "HIGH",
      Type: "study structure",
      "Card ID": iss.id,
      DE: iss.de ?? "",
      "Current EN": iss.message,
      "Recommended EN": "Complete standardStudy content",
      Field: "study",
      Reason: iss.message,
    });
  }

  for (const item of auditData.studyObjectNoRenderable || []) {
    add({
      Level: "B2",
      Severity: "LOW",
      Type: "minimalStudy no renderable",
      "Card ID": `b2-${item.de}`,
      DE: item.de,
      "Current EN": `layout=${item.layout}`,
      "Recommended EN": "Documented minimalStudy — verify renderer accepts layout",
      Field: "study.layout",
      Reason: "validate-study-design reports studyObjectNoRenderable for minimalStudy cards (expected for some B2 minimal cards).",
    });
  }

  return findings;
}

function main() {
  const auditData = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/en-b2-audit-data.json"), "utf8"));
  const findings = buildFindings("b2", auditData);
  const sev = countSev(findings);
  const totalRepairable = findings.filter((f) => f.Severity !== "LOW" || f.Type !== "minimalStudy no renderable").length;
  const criticalHigh = sev.CRITICAL + sev.HIGH;
  const verdict =
    criticalHigh > 0
      ? "EN–DE B2 — REPAIRS REQUIRED"
      : sev.MEDIUM > 0
        ? "EN–DE B2 — MINOR REPAIRS RECOMMENDED"
        : "EN–DE B2 — STRUCTURAL AUDIT CLEAN (linguistic deep-dive optional)";

  const md = [
    "# EN–DE B2 Full Linguistic & Quality Audit",
    "",
    `**Audit date:** ${new Date().toISOString().slice(0, 10)}`,
    "**Mode:** READ-ONLY — no production data modified",
    "**Audited files:** `data/en/b2.js`, mirror `www/data/en/b2.js`",
    "**Master reference:** `data/b2.js` (LV–DE etalon / DE READ-ONLY source)",
    "**Standards:** LANGUAGE_AUDIT_STANDARD, APP_QUALITY_STANDARD, STUDY_CARD_RULES, COMPARISON_STUDY_RULES, UI_UX_VISUAL_COLOR_RULES",
    "",
    "---",
    "",
    "## Scope",
    "",
    `| Metric | Value |`,
    `| --- | ---: |`,
    `| Cards expected | **${auditData.meta.lvCount}** |`,
    `| Cards audited | **${auditData.meta.enCount}** |`,
    `| Study cards (LV master) | **${auditData.meta.lvStudyCount}** |`,
    `| Study cards (EN) | **${auditData.meta.enStudyCount}** |`,
    `| Normal flashcards | **${auditData.normalCards}** |`,
    `| standardStudy | **${auditData.standardStudy.count}** |`,
    `| minimalStudy | **${auditData.minimalStudy.count}** |`,
    `| comparisonStudy | **${auditData.comparisonStudy.count}** |`,
    "",
    "---",
    "",
    "## Severity summary",
    "",
    ...Object.entries(sev).map(([k, v]) => `- ${k}: **${v}**`),
    "",
    `**Total findings (incl. LOW/documentation):** **${findings.length}**`,
    "",
    "---",
    "",
    "## Deterministic validation",
    "",
    "| Check | Result |",
    "| --- | --- |",
    `| JavaScript syntax (node --check) | **${auditData.deterministic.syntax?.pass ? "PASS" : "FAIL"}** |`,
    `| data/en/b2.js ≡ www mirror | **${auditData.layerIdentity.identical ? "PASS" : "FAIL"}** |`,
    `| Record count vs LV master (2118) | **${auditData.structural.pass && auditData.meta.enCount === auditData.meta.lvCount ? "PASS" : "FAIL"}** |`,
    `| Study count parity (60/60) | **${auditData.meta.lvStudyCount === auditData.meta.enStudyCount ? "PASS" : "FAIL"}** |`,
    `| DE READ-ONLY (German fields) | **${auditData.germanIntegrity.pass ? "PASS" : "FAIL"}** (${auditData.germanIntegrity.issues.length} issues) |`,
    `| Structural parity (order/layout/fields) | **${auditData.structural.pass ? "PASS" : "FAIL"}** |`,
    `| Mojibake scan | **${auditData.deterministic.mojibake?.pass ? "PASS" : "FAIL"}** |`,
    `| audit-language-parity --lang=en (B2 row) | **${auditData.deterministic.parity?.pass ? "PASS" : "FAIL"}** |`,
    `| validate-study-design B2 sectionAccentIssues | **${auditData.deterministic.b2SectionAccentIssues}** (TECHNICAL) |`,
    `| validate-study-design studyObjectNoRenderable | **${(auditData.studyObjectNoRenderable || []).length}** (minimalStudy) |`,
    `| LV remnants in learner fields | **${auditData.lvRemnants.issues.length}** |`,
    `| Semicolons in translation fields | **${auditData.semicolons.issues.filter((i) => i.type === "semicolon_in_translation").length}** |`,
    `| sectionAccents heuristic issues | **${auditData.sectionAccents.issues.length}** |`,
    `| Main translation scan (OK/WARNING/ERROR) | **${auditData.mainTranslations.summary.OK}/${auditData.mainTranslations.summary.WARNING}/${auditData.mainTranslations.summary.ERROR}** |`,
    "",
    "---",
    "",
    "## Full findings list",
    "",
    mdTable(findings, ["Level", "Severity", "Type", "Card ID", "DE", "Current EN", "Recommended EN", "Field", "Reason"]),
    "",
    "---",
    "",
    "## Notes",
    "",
    "- EN dataset uses legacy field name `lv` for English learner-language text (project convention).",
    "- `minimalStudy` cards flagged as `studyObjectNoRenderable` by validate-study-design are documented as LOW severity — verify against renderer policy for B2 minimal cards.",
    "- Capitalization heuristic warnings on English fronts (e.g. \"To agree\") are not auto-listed unless flagged ERROR.",
    "- This audit is deterministic/heuristic per LANGUAGE_AUDIT_STANDARD §5; native-speaker linguistic sampling (~5%) is recommended separately for MEDIUM/LOW naturalness issues not caught by rules.",
    "",
    "---",
    "",
    "## GALA VERDICT",
    "",
    `### ${verdict}`,
    "",
    `**Findings listed:** **${findings.length}**`,
    "",
    criticalHigh > 0
      ? "Next step: OWNER REVIEW → DETERMINISTIC REPAIR → TARGETED REGRESSION AUDIT"
      : "Structural/deterministic layer PASS. Optional: Luna linguistic regression on study cards if deeper semantic audit required.",
    "",
    "---",
    "",
    "## Machine-readable artefacts",
    "",
    "- `reports/en-b2-full-audit.md`",
    "- `reports/temp/en-b2-audit-data.json`",
    "- `reports/temp/en-b2-findings-consolidated.json`",
    "- `reports/temp/en-b2-full-audit-collect.js`",
    "- `reports/temp/generate-en-b2-audit-report.js`",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(ROOT, "reports/en-b2-full-audit.md"), md);

  const consolidated = {
    generatedAt: new Date().toISOString(),
    level: "b2",
    totals: { findings: findings.length, ...sev },
    findings,
    verdict,
    deterministic: {
      structuralPass: auditData.structural.pass,
      germanIntegrityPass: auditData.germanIntegrity.pass,
      lvRemnants: auditData.lvRemnants.issues.length,
      sectionAccentTechnical: auditData.deterministic.b2SectionAccentIssues,
    },
  };
  fs.writeFileSync(path.join(ROOT, "reports/temp/en-b2-findings-consolidated.json"), JSON.stringify(consolidated, null, 2));

  console.log("Report written:", findings.length, "findings");
  console.log("SEVERITY", sev);
  console.log("VERDICT", verdict);
}

main();
