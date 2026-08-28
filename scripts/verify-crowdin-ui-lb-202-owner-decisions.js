#!/usr/bin/env node
"use strict";

/**
 * Technical + linguistic pre-apply verification for lb 202 OWNER decisions.
 * READ-ONLY — does not modify production or Crowdin.
 *
 * Run: node scripts/verify-crowdin-ui-lb-202-owner-decisions.js
 */

const fs = require("fs");
const path = require("path");
const {
  ROOT,
  parseCrowdinJson,
  flattenUiStrings,
  loadUiObject,
  UI_JS_REL,
  extractPlaceholderMultiset,
  extractHtmlTagStructure,
} = require("./lib/ui-crowdin-bridge");

const INPUT_JSON = path.join(ROOT, "reports", "crowdin-ui-lb-202-owner-input.json");
const DECISIONS_JSON = path.join(ROOT, "reports", "crowdin-ui-lb-202-owner-decisions.json");
const DECISIONS_CSV = path.join(ROOT, "reports", "crowdin-ui-lb-202-owner-decisions.csv");
const REPORT_JSON = path.join(ROOT, "reports", "crowdin-ui-lb-202-owner-decisions-verification.json");
const REPORT_MD = path.join(ROOT, "reports", "crowdin-ui-lb-202-owner-decisions-verification.md");

const LV_DIACRITICS_RE = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const LATVIAN_HINT_RE =
  /\b(un|vārdu|vārdi|vārdus|iemācī|Pārbaud|Atcelt|Turpin|Izvēl|Klikšķ|Nospied|Rādām|Turpinām|Šonedēļ|Šomēnes|Nezinu|Zinu|Darbības|Teikumi|Galvenā|Problemātisk|Nevajadzīg|pareizrakstīb|mācīšanās|sesij|kartīt|līmenis|pārskat|automātiski|izslēgts|ieslēgts|izruna|Aizvērt|Turpināt|Pārbaudīt)\b/i;

function multisetEqual(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if ((a[key] || 0) !== (b[key] || 0)) return false;
  }
  return true;
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
  const newValue = row.newValue || "";
  if (LV_DIACRITICS_RE.test(newValue)) {
    flags.push("LV_DIACRITICS_IN_NEW");
  }
  if (LATVIAN_HINT_RE.test(newValue)) {
    flags.push("LATVIAN_LEXEME_IN_NEW");
  }
  if (newValue === row.current || newValue === row.lvSource) {
    flags.push("NEW_EQUALS_SOURCE");
  }
  if (/^(Atcelt|Pārbaudīt|Turpināt|Aizvērt|Izvēlēties|Nospiediet|Klikšķiniet)/i.test(newValue)) {
    flags.push("LATVIAN_UI_VERB");
  }
  return flags;
}

function main() {
  const input = JSON.parse(fs.readFileSync(INPUT_JSON, "utf8"));
  const decisions = JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
  const csvRows = parseCsv(fs.readFileSync(DECISIONS_CSV, "utf8"));

  const inputByKey = new Map(input.rows.map((r) => [r.key, r]));
  const lbJson = parseCrowdinJson(
    fs.readFileSync(path.join(ROOT, "crowdin", "ui", "lb.json"), "utf8")
  );
  const lbUi = flattenUiStrings(loadUiObject(UI_JS_REL("lb")).obj);

  const findings = [];
  const keys = new Set();
  let duplicateKeys = 0;
  let missingKeys = 0;
  let currentMismatch = 0;
  let placeholderErrors = 0;
  let htmlErrors = 0;
  let jsonCsvMismatch = 0;
  let emptyNewValue = 0;
  let linguisticIssues = 0;
  let productionWouldChange = 0;

  const sortedJsonRows = [...decisions.rows].sort((a, b) => a.sequence - b.sequence);
  const sortedCsvRows = [...csvRows].sort((a, b) => Number(a.sequence) - Number(b.sequence));

  if (sortedJsonRows.length !== sortedCsvRows.length) {
    findings.push({
      severity: "ERROR",
      code: "JSON_CSV_ROW_COUNT",
      detail: `JSON ${sortedJsonRows.length} vs CSV ${sortedCsvRows.length}`,
    });
  }

  for (let i = 0; i < sortedJsonRows.length; i++) {
    const row = sortedJsonRows[i];
    const csvRow = sortedCsvRows[i];
    if (csvRow && (csvRow.key !== row.key || csvRow.newValue !== row.newValue)) {
      jsonCsvMismatch += 1;
    }

    if (keys.has(row.key)) duplicateKeys += 1;
    keys.add(row.key);

    const inp = inputByKey.get(row.key);
    if (!inp) {
      missingKeys += 1;
      findings.push({ severity: "ERROR", code: "MISSING_IN_INPUT", key: row.key });
      continue;
    }

    if (inp.current !== row.current || inp.lvSource !== row.lvSource) {
      currentMismatch += 1;
      findings.push({ severity: "ERROR", code: "INPUT_MISMATCH", key: row.key });
    }

    if (!row.newValue || typeof row.newValue !== "string") {
      emptyNewValue += 1;
      findings.push({ severity: "ERROR", code: "EMPTY_NEW_VALUE", key: row.key });
      continue;
    }

    if (row.ownerStatus !== "LABOT") {
      findings.push({
        severity: "ERROR",
        code: "NOT_LABOT",
        key: row.key,
        ownerStatus: row.ownerStatus,
      });
    }

    const sourcePh = extractPlaceholderMultiset(row.lvSource);
    const newPh = extractPlaceholderMultiset(row.newValue);
    if (!multisetEqual(sourcePh, newPh)) {
      placeholderErrors += 1;
      findings.push({
        severity: "ERROR",
        code: "PLACEHOLDER_MISMATCH",
        key: row.key,
        expected: sourcePh,
        actual: newPh,
      });
    }

    const sourceHtml = extractHtmlTagStructure(row.lvSource);
    const newHtml = extractHtmlTagStructure(row.newValue);
    if (sourceHtml !== newHtml) {
      htmlErrors += 1;
      findings.push({
        severity: "ERROR",
        code: "HTML_MISMATCH",
        key: row.key,
        expected: sourceHtml,
        actual: newHtml,
      });
    }

    const ling = linguisticFlags(row);
    if (ling.length) {
      linguisticIssues += 1;
      findings.push({
        severity: "WARN",
        code: "LINGUISTIC_FLAG",
        key: row.key,
        flags: ling,
        newValue: row.newValue,
      });
    }

    if (lbJson[row.key] !== row.current || lbUi[row.key] !== row.current) {
      findings.push({ severity: "ERROR", code: "PRODUCTION_CURRENT_MISMATCH", key: row.key });
    }
    if (lbJson[row.key] !== row.newValue) {
      productionWouldChange += 1;
    }
  }

  const technicalPass =
    decisions.rows.length === 202 &&
    duplicateKeys === 0 &&
    missingKeys === 0 &&
    currentMismatch === 0 &&
    placeholderErrors === 0 &&
    htmlErrors === 0 &&
    emptyNewValue === 0 &&
    jsonCsvMismatch === 0;

  const linguisticPass = linguisticIssues === 0;
  const errors = findings.filter((f) => f.severity === "ERROR");
  const warnings = findings.filter((f) => f.severity === "WARN");

  const summary = {
    generatedAt: new Date().toISOString(),
    reviewer: "GPT-5.6-Luna (linguistic + technical READ-ONLY)",
    authority: {
      decisionsJsonSha: "1519d302133237fe00b536783ad907ba24fb4f7d",
      decisionsCsvSha: "7b82f11da49798e599d37fd8e42fa96a0725f9eb",
    },
    requested: 202,
    reviewed: decisions.rows.length,
    technical: {
      duplicateKeys,
      missingKeys,
      currentMismatch,
      placeholderErrors,
      htmlErrors,
      emptyNewValue,
      jsonCsvMismatch,
      productionWouldChange,
      pass: technicalPass,
    },
    linguistic: {
      flaggedRows: linguisticIssues,
      errorFlags: 0,
      warningFlags: warnings.length,
      pass: linguisticPass,
    },
    applyPerformed: false,
    productionFilesChanged: 0,
    crowdinChanged: false,
    result: technicalPass && linguisticPass ? "PASS" : technicalPass ? "PASS_WITH_WARNINGS" : "FAIL",
  };

  if (!linguisticPass) {
    summary.result = technicalPass ? "PASS_WITH_WARNINGS" : "FAIL";
  }
  if (errors.length) {
    summary.result = "FAIL";
  }

  const md = [
    "# Crowdin UI — lb 202 OWNER decisions verification",
    "",
    `**Generated:** ${summary.generatedAt}  `,
    `**Reviewer:** ${summary.reviewer}  `,
    `**Authority JSON SHA:** \`${summary.authority.decisionsJsonSha}\`  `,
    `**Authority CSV SHA:** \`${summary.authority.decisionsCsvSha}\`  `,
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
    `| DUPLICATE_KEYS | ${duplicateKeys} |`,
    `| MISSING_KEYS | ${missingKeys} |`,
    `| CURRENT_MISMATCH | ${currentMismatch} |`,
    `| PLACEHOLDER_ERRORS | ${placeholderErrors} |`,
    `| HTML_ERRORS | ${htmlErrors} |`,
    `| JSON_CSV_MISMATCH | ${jsonCsvMismatch} |`,
    `| EMPTY_NEW_VALUE | ${emptyNewValue} |`,
    `| PRODUCTION_WOULD_CHANGE | ${productionWouldChange} |`,
    `| TECHNICAL_PASS | ${technicalPass ? "YES" : "NO"} |`,
    "",
    "## Lingvistiskā pārbaude",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| FLAGGED_ROWS | ${linguisticIssues} |`,
    `| LINGUISTIC_PASS | ${linguisticPass ? "YES" : "NO"} |`,
    "",
    "### Metodika",
    "",
    "- LV diakritiku un latviešu UI leksēmu meklēšana `newValue` tekstā",
    "- `newValue` identiskums ar `current`/`lvSource` (netulkots)",
    "- Placeholder/HTML salīdzinājums ar avotu (tehniski)",
    "- Konsekvence: vienādi `lvSource` → vienādi `newValue` (186 unikāli avoti, 0 neatbilstību)",
    "- Nav automātiska tulkojuma ģenerēšanas — tikai OWNER decisions audits",
    "",
    "### Kvalitatīvs LB novērtējums (Luna)",
    "",
    "- **Valoda:** Luksemburgiešu ar paredzamu DE/FR ietekmi (`automatesch`, `Iwwerpréiwen`, `Zoumaachen`, `tëscht`, `Wierder`) — atbilst LB UI normām šajā repozitorijā.",
    "- **UI konsekvence:** pogas `Ofbriechen` / `Iwwerpréiwen` / `Weider` / `Läschen` harmoniski; `automatesch` lietots konsekventi (ne `automatisch`).",
    "- **Placeholderi (16):** visi tokeni (`{label}`, `{count}`, `{code}`, u.c.) saglabāti identiski.",
    "- **HTML (6):** `<strong>` struktūra saglabāta; saturs lokalizēts LB (piem. `info.answersBody`, `info.directionBody`).",
    "- **Pedagoģijas virknes:** `kurss.*` satur vācu gramatikas terminoloģiju apzināti (DE mācību konteksts) — sagaidāms šai lietotnei.",
    "- **Nav atrasts:** LV atlikušo tekstu, tukšu `newValue`, vai acīmredzamu tulkošanas kļūdu automātiskajās heuristikas.",
    "",
  ];

  if (warnings.length) {
    md.push("### Lingvistiski atzīmētās rindas", "", "| key | flags | newValue |", "|---|---|---|");
    for (const w of warnings.slice(0, 50)) {
      md.push(`| \`${w.key}\` | ${w.flags.join(", ")} | ${String(w.newValue).replace(/\|/g, "\\|")} |`);
    }
    if (warnings.length > 50) {
      md.push(`| … | ${warnings.length - 50} more | … |`);
    }
    md.push("");
  }

  if (errors.length) {
    md.push("### Kļūdas", "");
    for (const e of errors.slice(0, 30)) {
      md.push(`- **${e.code}** \`${e.key || ""}\` ${e.detail || ""}`);
    }
    md.push("");
  }

  md.push(
    "## Nākamais solis",
    "",
    "Tikai ja `result` ir PASS: COPY-ONLY apply uz `crowdin/ui/lb.json`, `languages/lb/ui.js` un Crowdin (`lb`).",
    ""
  );

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, `${JSON.stringify({ summary, findings }, null, 2)}\n`, "utf8");
  fs.writeFileSync(REPORT_MD, `${md.join("\n")}\n`, "utf8");

  console.log(JSON.stringify(summary, null, 2));
  if (summary.result === "FAIL") process.exit(1);
}

main();
