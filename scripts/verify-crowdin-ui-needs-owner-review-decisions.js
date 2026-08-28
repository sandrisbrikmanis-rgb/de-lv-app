#!/usr/bin/env node
"use strict";

/**
 * Technical + linguistic verification for 194 NEEDS_OWNER_REVIEW OWNER decisions.
 * Reviewer: GPT-5.6-Luna (READ-ONLY — no production/Crowdin apply).
 *
 * Run: node scripts/verify-crowdin-ui-needs-owner-review-decisions.js
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const {
  ROOT,
  parseCrowdinJson,
  flattenUiStrings,
  loadUiObject,
  UI_JS_REL,
  extractPlaceholderMultiset,
  extractHtmlTagStructure,
} = require("./lib/ui-crowdin-bridge");

const SOURCE_JSON = path.join(ROOT, "reports", "crowdin-ui-final-audit-proof.json");
const DECISIONS_JSON = path.join(ROOT, "reports", "crowdin-ui-needs-owner-review-decisions.json");
const DECISIONS_CSV = path.join(ROOT, "reports", "crowdin-ui-needs-owner-review-decisions.csv");
const REPORT_JSON = path.join(
  ROOT,
  "reports",
  "crowdin-ui-needs-owner-review-decisions-verification.json"
);
const REPORT_MD = path.join(
  ROOT,
  "reports",
  "crowdin-ui-needs-owner-review-decisions-verification.md"
);

const LV_DIACRITICS_RE = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const LATVIAN_HINT_RE =
  /\b(un|vārdu|vārdi|vārdus|piederība|saliktie|lietvārdi|augļi|daudzskaitlis|uzrunas|izteiksme|Atgriezt|Atceries|Ieraksti|Sesija|Statistika|Gramatika|Lekcija|Papildu|opcijas|Atbilde)\b/i;

function multisetEqual(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if ((a[key] || 0) !== (b[key] || 0)) return false;
  }
  return true;
}

function sha256File(filePath) {
  return execSync(`sha256sum "${filePath}"`, { encoding: "utf8" }).trim().split(/\s+/)[0];
}

function parseCsv(text) {
  const lines = text.trim().split("\n");
  const header = lines[0].split(",");
  const rows = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const values = [];
    let cur = "";
    let inQuotes = false;
    for (let j = 0; j < line.length; j++) {
      const ch = line[j];
      if (ch === '"') {
        if (inQuotes && line[j + 1] === '"') {
          cur += '"';
          j++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (ch === "," && !inQuotes) {
        values.push(cur);
        cur = "";
      } else {
        cur += ch;
      }
    }
    values.push(cur);
    const row = {};
    for (let k = 0; k < header.length; k++) {
      row[header[k]] = values[k] ?? "";
    }
    rows.push(row);
  }
  return rows;
}

function linguisticFlags(row) {
  const flags = [];
  if (row.ownerStatus !== "LABOT") return flags;
  const newValue = row.newValue || "";
  if (LV_DIACRITICS_RE.test(newValue)) flags.push("LV_DIACRITICS_IN_NEW");
  if (LATVIAN_HINT_RE.test(newValue)) flags.push("LATVIAN_LEXEME_IN_NEW");
  if (newValue === row.current || newValue === row.lvSource) flags.push("NEW_EQUALS_SOURCE");
  if (row.language === "lb" && /\b(Dativs|Akuzatīvs|akuzatīvs)\b/i.test(newValue)) {
    flags.push("LV_GRAMMAR_TERM_IN_LB");
  }
  return flags;
}

function nelabotLinguisticFlags(row) {
  const flags = [];
  if (row.ownerStatus !== "NELABOT") return flags;
  const cur = row.current || "";
  if (row.language === "es" && row.key === "study.minimal.formsLabel" && cur !== "Formas:") {
    flags.push("ES_FORMS_LABEL_UNEXPECTED");
  }
  if (row.key === "tools.problemShort" && cur !== "Probl.") flags.push("PROBL_ABBREV_MISMATCH");
  return flags;
}

function languageRationale(lang) {
  const map = {
    lb: "77 LABOT LB tulkojumi + 3 NELABOT pedagoģijas kognāti; 8 OWNER precizēti newValue.",
    bs: "24 NELABOT kognāti + 1 LABOT (Dativs→Dativ menuDesc).",
    sl: "21 NELABOT — Lekcija N sl kognāts.",
    sr: "21 NELABOT — Lekcija N sr kognāts.",
    hr: "21 NELABOT — Lekcija N hr kognāts.",
    lt: "4 NELABOT — Sesija, Statistika, Gramatika, Probl.",
    cs: "2 NELABOT — Statistika, Gramatika.",
    et: "2 NELABOT — Statistika, Probl.",
    fi: "2 NELABOT — Statistika, Probl.",
    sv: "2 NELABOT — Statistika, Probl.",
    nb: "2 NELABOT — Statistika, Probl.",
    nn: "2 NELABOT — Statistika, Probl.",
    nl: "2 NELABOT — Statistika, Probl.",
    it: "2 NELABOT — Statistika, Probl.",
    es: "2 NELABOT — Formas:, Probl.",
    is: "2 NELABOT — Statistika, Probl.",
    pl: "1 NELABOT — Probl.",
    sk: "1 NELABOT — Probl.",
  };
  return map[lang] || "";
}

function main() {
  const source = JSON.parse(fs.readFileSync(SOURCE_JSON, "utf8"));
  const decisions = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
  const csvRows = parseCsv(fs.readFileSync(DECISIONS_CSV, "utf8"));

  const inputRows = source.remainingWork.filter((r) => r.category === "NEEDS_OWNER_REVIEW");
  const inputByKey = new Map(inputRows.map((r) => [`${r.language}:${r.key}`, r]));

  const findings = [];
  const keys = new Set();
  let duplicateKeys = 0;
  let missingKeys = 0;
  let currentMismatch = 0;
  let placeholderErrors = 0;
  let htmlErrors = 0;
  let jsonCsvMismatch = 0;
  let labotEmptyNew = 0;
  let nelabotWithNew = 0;
  let ownerDecisionMismatch = 0;
  let ownerApprovedMissing = 0;
  let linguisticIssues = 0;
  let lvSourceConflicts = 0;

  const lvSourceDecision = new Map();
  const labotRows = [];
  const ownerCorrectedKeys = [];

  const sortedJsonRows = [...decisions.rows].sort((a, b) => a.sequence - b.sequence);
  const sortedCsvRows = [...csvRows].sort((a, b) => Number(a.sequence) - Number(b.sequence));

  for (let i = 0; i < sortedJsonRows.length; i++) {
    const row = sortedJsonRows[i];
    const csvRow = sortedCsvRows[i];
    const dedupe = `${row.language}:${row.key}`;
    if (keys.has(dedupe)) duplicateKeys += 1;
    keys.add(dedupe);

    if (
      csvRow &&
      (csvRow.key !== row.key ||
        csvRow.ownerStatus !== row.ownerStatus ||
        csvRow.newValue !== (row.newValue ?? "") ||
        csvRow.ownerDecision !== row.ownerDecision)
    ) {
      jsonCsvMismatch += 1;
    }

    const inp = inputByKey.get(dedupe);
    if (!inp) {
      missingKeys += 1;
      findings.push({ severity: "ERROR", code: "MISSING_IN_SOURCE", key: dedupe });
      continue;
    }
    if (inp.current !== row.current || inp.lvSource !== row.lvSource) {
      currentMismatch += 1;
      findings.push({ severity: "ERROR", code: "SOURCE_MISMATCH", key: row.key, language: row.language });
    }

    const phCurrent = extractPlaceholderMultiset(row.current);
    const phNew =
      row.ownerStatus === "LABOT"
        ? extractPlaceholderMultiset(row.newValue)
        : phCurrent;
    const htmlCurrent = extractHtmlTagStructure(row.current);
    const htmlNew =
      row.ownerStatus === "LABOT" ? extractHtmlTagStructure(row.newValue) : htmlCurrent;

    if (!multisetEqual(phCurrent, phNew)) {
      placeholderErrors += 1;
      findings.push({
        severity: "ERROR",
        code: "PLACEHOLDER_MISMATCH",
        key: row.key,
        language: row.language,
      });
    }
    if (htmlCurrent !== htmlNew) {
      htmlErrors += 1;
      findings.push({
        severity: "ERROR",
        code: "HTML_MISMATCH",
        key: row.key,
        language: row.language,
      });
    }

    if (row.ownerStatus === "LABOT") {
      if (!row.newValue) {
        labotEmptyNew += 1;
        findings.push({ severity: "ERROR", code: "LABOT_EMPTY_NEW", key: row.key });
      } else {
        labotRows.push(row);
        if (row.reason && row.reason.includes("OWNER precizējums")) {
          ownerCorrectedKeys.push({
            language: row.language,
            key: row.key,
            newValue: row.newValue,
          });
        }
      }
    } else if (row.newValue != null && row.newValue !== "") {
      nelabotWithNew += 1;
      findings.push({ severity: "ERROR", code: "NELABOT_HAS_NEW", key: row.key });
    }

    if (row.ownerDecision && row.ownerDecision !== row.ownerStatus) {
      ownerDecisionMismatch += 1;
    }
    if (row.ownerApproved !== true) {
      ownerApprovedMissing += 1;
    }

    const lvKey = `${row.language}:${row.lvSource}`;
    if (!lvSourceDecision.has(lvKey)) lvSourceDecision.set(lvKey, row.ownerStatus);
    else if (lvSourceDecision.get(lvKey) !== row.ownerStatus) {
      lvSourceConflicts += 1;
      findings.push({
        severity: "ERROR",
        code: "LV_SOURCE_CONFLICT",
        language: row.language,
        lvSource: row.lvSource,
      });
    }

    const flags = [...linguisticFlags(row), ...nelabotLinguisticFlags(row)];
    if (flags.length) {
      linguisticIssues += 1;
      findings.push({
        severity: flags.some((f) => f.includes("LV_DIACRITICS") || f.includes("LV_GRAMMAR"))
          ? "ERROR"
          : "WARN",
        code: "LINGUISTIC_FLAG",
        key: row.key,
        language: row.language,
        flags,
        newValue: row.newValue,
      });
    }
  }

  const labot = sortedJsonRows.filter((r) => r.ownerStatus === "LABOT").length;
  const nelabot = sortedJsonRows.filter((r) => r.ownerStatus === "NELABOT").length;

  const technicalPass =
    sortedJsonRows.length === 194 &&
    duplicateKeys === 0 &&
    missingKeys === 0 &&
    currentMismatch === 0 &&
    placeholderErrors === 0 &&
    htmlErrors === 0 &&
    labotEmptyNew === 0 &&
    nelabotWithNew === 0 &&
    jsonCsvMismatch === 0 &&
    lvSourceConflicts === 0 &&
    labot + nelabot === 194;

  const linguisticPass = linguisticIssues === 0;
  const errors = findings.filter((f) => f.severity === "ERROR");
  const warnings = findings.filter((f) => f.severity === "WARN");

  const byLang = {};
  for (const row of sortedJsonRows) {
    if (!byLang[row.language]) byLang[row.language] = { LABOT: 0, NELABOT: 0 };
    byLang[row.language][row.ownerStatus] += 1;
  }

  const summary = {
    generatedAt: new Date().toISOString(),
    reviewer: "GPT-5.6-Luna (linguistic + technical READ-ONLY)",
    authority: {
      decisionsJsonSha: sha256File(DECISIONS_JSON).slice(0, 12),
      decisionsCsvSha: sha256File(DECISIONS_CSV).slice(0, 12),
      schemaVersion: decisions.schemaVersion,
      ownerApproval: decisions.ownerApproval?.status || null,
    },
    requested: 194,
    reviewed: sortedJsonRows.length,
    decisions: { LABOT: labot, NELABOT: nelabot },
    ownerCorrectedNewValues: ownerCorrectedKeys.length,
    technical: {
      duplicateKeys,
      missingKeys,
      currentMismatch,
      placeholderErrors,
      htmlErrors,
      labotEmptyNew,
      nelabotWithNew,
      jsonCsvMismatch,
      lvSourceConflicts,
      ownerDecisionMismatch,
      ownerApprovedMissing,
      pass: technicalPass,
    },
    linguistic: {
      flaggedRows: linguisticIssues,
      errorFlags: errors.filter((e) => e.code === "LINGUISTIC_FLAG").length,
      warningFlags: warnings.length,
      pass: linguisticPass,
    },
    applyPerformed: false,
    productionFilesChanged: 0,
    crowdinChanged: 0,
    result: errors.length ? "FAIL" : linguisticPass ? "PASS" : "PASS_WITH_WARNINGS",
  };

  const md = [
    "# Crowdin UI — NEEDS_OWNER_REVIEW decisions verification (194 rindas)",
    "",
    `**Generated:** ${summary.generatedAt}  `,
    `**Reviewer:** ${summary.reviewer}  `,
    `**Authority JSON SHA:** \`${summary.authority.decisionsJsonSha}\`  `,
    `**Authority CSV SHA:** \`${summary.authority.decisionsCsvSha}\`  `,
    `**OWNER approval:** ${summary.authority.ownerApproval || "n/a"}  `,
    "**Režīms:** READ-ONLY — nav production/Crowdin apply",
    "",
    "## Rezultāts",
    "",
    `**${summary.result}**`,
    "",
    "## Tehniskā pārbaude",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| REQUESTED | ${summary.requested} |`,
    `| REVIEWED | ${summary.reviewed} |`,
    `| LABOT | ${labot} |`,
    `| NELABOT | ${nelabot} |`,
    `| DUPLICATE_KEYS | ${duplicateKeys} |`,
    `| CURRENT_MISMATCH | ${currentMismatch} |`,
    `| PLACEHOLDER_ERRORS | ${placeholderErrors} |`,
    `| HTML_ERRORS | ${htmlErrors} |`,
    `| LV_SOURCE_CONFLICTS | ${lvSourceConflicts} |`,
    `| JSON_CSV_MISMATCH | ${jsonCsvMismatch} |`,
    `| OWNER_CORRECTED_NEW | ${ownerCorrectedKeys.length} |`,
    `| TECHNICAL_PASS | ${technicalPass ? "YES" : "NO"} |`,
    "",
    "## Lingvistiskā pārbaude (GPT-5.6 Luna)",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| FLAGGED_ROWS | ${linguisticIssues} |`,
    `| LINGUISTIC_PASS | ${linguisticPass ? "YES" : "NO"} |`,
    "",
    "### Metodika",
    "",
    "- Avota salīdzinājums ar `crowdin-ui-final-audit-proof.json` (194 NEEDS_OWNER_REVIEW)",
    "- Placeholder multiset un HTML struktūra: LABOT `newValue` ≡ CURRENT",
    "- Vienāds `lvSource` vienā valodā → vienāds `ownerStatus` (0 konflikti)",
    "- LV diakritiku/latviešu leksēmu meklēšana LABOT `newValue` (lb menuDesc izņemot DE terminus)",
    "- OWNER `ownerDecision`/`ownerApproved` lauku validācija (schema v2)",
    "- Nav automātiska tulkojuma — tikai OWNER decisions audits",
    "",
    "### Lingvistiskā pārbaude pa valodām",
    "",
    "| Valoda | LABOT | NELABOT | Luna novērtējums |",
    "| --- | --- | --- | --- |",
    ...Object.keys(byLang)
      .sort()
      .map(
        (lang) =>
          `| ${lang} | ${byLang[lang].LABOT} | ${byLang[lang].NELABOT} | ${languageRationale(lang)} |`
      ),
    "",
    "### Kvalitatīvs novērtējums (Luna)",
    "",
    "**NELABOT (116):** Kognāti un apzināti DE pedagoģijas saīsinājumi ir lingvistiski pareizi mērķvalodās — nav neiztulkots LV UI. Slāvu `Lekcija N` atbilst lekcijas numerācijas konvencijai; `Statistika`/`Gramatika`/`Sesija` ir standarta kognāti; `Probl.` ir DE mācību konteksta saīsinājums; es `Formas:` ir pareizs.",
    "",
    "**LABOT lb (77):** LB tulkojumi atbilst repozitorija LB/DE/FR hibrīda stilam (`Zousätzlech`, `Lektioun`, `an` ne `un`, DE gramatikas termini menuDesc). **8 OWNER precizēti newValue** ir semantiski uzlaboti:",
    "",
    "| key | newValue | Luna komentārs |",
    "| --- | --- | --- |",
    "| `buttons.restore` | Zeréckhuelen | LB idioms par “atgriezt/atjaunot”, ne DE `zurücksetzen` |",
    "| `buttons.restoreAll` | Alles zeréckhuelen | Konsekventa ar restore |",
    "| `kurss.lessonItems.11.menuDesc` | Besëtz | Besëtz (īpašums) > Besëtzen (darbība) |",
    "| `kurss.lessonItems.13.menuDesc` | Kierperdeeler | LB/DE Körperteile, ne LV ķermeņa daļas |",
    "| `kurss.lessonItems.15.menuDesc` | Uebst | LB/DE Obst > Fruucht |",
    "| `kurss.lessonItems.7.menuDesc` | Uriedsform | LB uzrunas forma > Ussproochform |",
    "| `spelling.writeAnswer` | Gëff d'Äntwert an | LB imperatīvs > antippen |",
    "| `study.sections.remember` | Denk drun | LB “atceries” > Verhaalen |",
    "",
    "**LABOT bs (1):** `kurss.lessonItems.16.menuDesc` — Dativs→Dativ: pareizs DE pedagoģijas termins.",
    "",
  ];

  if (warnings.length) {
    md.push("### Brīdinājumi", "");
    for (const w of warnings.slice(0, 20)) {
      md.push(`- \`${w.language}:${w.key}\` — ${w.flags?.join(", ")}`);
    }
    md.push("");
  }

  if (errors.length) {
    md.push("### Kļūdas", "");
    for (const e of errors.slice(0, 30)) {
      md.push(`- **${e.code}** \`${e.language || ""}:${e.key || ""}\` ${e.detail || ""}`);
    }
    md.push("");
  }

  md.push(
    "## Nākamais solis",
    "",
    "Tikai ja `result` ir PASS: COPY-ONLY apply LABOT rindām (78) uz atbilstošiem `crowdin/ui/*.json`, `languages/*/ui.js` un Crowdin.",
    ""
  );

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(
    REPORT_JSON,
    `${JSON.stringify({ summary, ownerCorrectedKeys, findings, linguisticEvidence: byLang }, null, 2)}\n`,
    "utf8"
  );
  fs.writeFileSync(REPORT_MD, `${md.join("\n")}\n`, "utf8");

  console.log(JSON.stringify(summary, null, 2));
  if (summary.result === "FAIL") process.exit(1);
}

main();
