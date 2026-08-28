#!/usr/bin/env node
"use strict";

/**
 * Generate INTENTIONAL_SAME Crowdin lock OWNER mapping (READ-ONLY, no apply).
 *
 * Run: node scripts/build-crowdin-ui-intentional-same-lock-owner.js
 */

const fs = require("fs");
const path = require("path");
const {
  ROOT,
  crowdinCodeFromRepoLang,
} = require("./lib/ui-crowdin-bridge");
const {
  BASELINE_AUDIT_COMMIT,
  computeDelta,
  collectIntentionalSameRows,
  enrichLockRows,
  rowId,
} = require("./lib/crowdin-ui-intentional-lock-core");

const REPORT_MD = path.join(ROOT, "reports", "crowdin-ui-intentional-same-lock-owner.md");
const REPORT_JSON = path.join(ROOT, "reports", "crowdin-ui-intentional-same-lock-owner.json");

function escapeTableCell(value) {
  return String(value).replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function langLabel(repoLang) {
  const crowdin = crowdinCodeFromRepoLang(repoLang);
  return crowdin !== repoLang ? `${repoLang} (Crowdin: \`${crowdin}\`)` : repoLang;
}

function renderMarkdown(rows, delta) {
  const byLang = {};
  const byCategory = {};
  const ownerReviewRequired = rows.filter((row) => row.ownerReviewRequired === "YES").length;
  const nelabotCandidates = rows.filter((row) => row.ownerStatus === "NELABOT_CANDIDATE").length;

  for (const row of rows) {
    byLang[row.language] = (byLang[row.language] || 0) + 1;
    byCategory[row.reasonCategory] = (byCategory[row.reasonCategory] || 0) + 1;
  }

  const lines = [
    "# Crowdin UI — INTENTIONAL_SAME bloķēšanas saraksts (OWNER)",
    "",
    `**Datums:** ${new Date().toISOString().slice(0, 10)}  `,
    "**Avots:** `reports/crowdin-ui-untranslated-audit.md` + delta `reports/crowdin-ui-intentional-same-lock-delta.md`  ",
    "**Mērķis:** OWNER nodoms bloķēt apzināti identiskas rindas (Crowdin aizsardzība vēl PENDING)  ",
    "**Apply:** **NĒ** — tikai OWNER mapping  ",
    "**Greek kartējums:** Crowdin `el` → repo `gr`",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| BASELINE INTENTIONAL_SAME (\`${BASELINE_AUDIT_COMMIT}\`) | **${delta.baselineCount}** |`,
    `| CANDIDATES (pašreiz) | **${rows.length}** |`,
    `| DELTA (jauni kandidāti) | **${delta.added.length}** |`,
    `| NELABOT_CANDIDATE (baseline) | **${nelabotCandidates}** |`,
    `| OWNER_REVIEW_REQUIRED (delta) | **${ownerReviewRequired}** |`,
    `| crowdin_lock (OWNER nodoms) | **${rows.length}/${rows.length}** |`,
    `| lock_enforced | **NO** (${rows.length}/${rows.length}) |`,
    `| crowdin_protection | **PENDING** (${rows.length}/${rows.length}) |`,
    `| JSON ↔ ui.js neatbilstības | **${rows.filter((row) => !row.jsonUiMatch).length}** |`,
    "",
    "### Pēc reason kategorijas",
    "",
    "| reason_category | Skaits |",
    "|---|---:|",
  ];

  for (const [category, count] of Object.entries(byCategory).sort((a, b) => b[1] - a[1])) {
    lines.push(`| ${category} | ${count} |`);
  }

  lines.push("", "### Pēc valodas", "", "| Valoda | Skaits |", "|---|---:|");
  for (const [lang, count] of Object.entries(byLang).sort((a, b) => b[1] - a[1])) {
    lines.push(`| ${langLabel(lang)} | ${count} |`);
  }

  lines.push(
    "",
    "## Lēmumu noteikumi",
    "",
    "- `crowdin_lock = YES` — **OWNER nodoms** aizsargāt rindu (vēl nav Crowdin enforcement).",
    "- `lock_enforced = NO` — faktiskā Crowdin bloķēšana nav aktivizēta.",
    "- `crowdin_protection = PENDING` — gaida OWNER apstiprinājumu un Crowdin apply.",
    "- `OWNER_STATUS = NELABOT_CANDIDATE` — baseline 170 rindas (pirms delta).",
    "- `OWNER_STATUS = OWNER_REVIEW_REQUIRED` — delta 22 rindas; **nedrīkst** automātiski apstiprināt kā `NELABOT`.",
    "- `CURRENT` = faktiskā vērtība `crowdin/ui/{lang}.json` (un `languages/{lang}/ui.js`).",
    "- Apply šajā posmā **netiek veikts**.",
    "",
    "## Pilna tabula",
    "",
    "| language | key | LV source | CURRENT | OWNER_STATUS | OWNER_REVIEW_REQUIRED | crowdin_lock | lock_enforced | crowdin_protection | reason_category | reason |",
    "|---|---|---|---|---|---|---|---|---|---|---|"
  );

  for (const row of rows) {
    lines.push(
      `| ${escapeTableCell(row.language)} | \`${escapeTableCell(row.key)}\` | ${escapeTableCell(row.lvSource)} | ${escapeTableCell(row.current)} | ${row.ownerStatus} | ${row.ownerReviewRequired} | ${row.crowdinLock} | ${row.lockEnforced} | ${row.crowdinProtection} | ${row.reasonCategory} | ${escapeTableCell(row.reason)} |`
    );
  }

  lines.push("");
  return `${lines.join("\n")}\n`;
}

function main() {
  const delta = computeDelta(BASELINE_AUDIT_COMMIT);
  const currentRows = collectIntentionalSameRows("HEAD");
  const deltaIds = new Set(delta.added.map((row) => rowId(row.language, row.key)));
  const rows = enrichLockRows(currentRows, deltaIds);

  if (!rows.length) {
    console.error("No INTENTIONAL_SAME rows found");
    process.exit(1);
  }

  const mismatches = rows.filter((row) => !row.jsonUiMatch);
  if (mismatches.length) {
    console.error(`JSON/ui.js mismatch on ${mismatches.length} INTENTIONAL_SAME row(s)`);
    for (const row of mismatches.slice(0, 5)) {
      console.error(`  ${row.language} ${row.key}`);
    }
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(REPORT_MD), { recursive: true });
  fs.writeFileSync(REPORT_MD, renderMarkdown(rows, delta), "utf8");
  fs.writeFileSync(
    REPORT_JSON,
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        baselineCommit: BASELINE_AUDIT_COMMIT,
        baselineCount: delta.baselineCount,
        total: rows.length,
        deltaCount: delta.added.length,
        ownerReviewRequired: rows.filter((row) => row.ownerReviewRequired === "YES").length,
        nelabotCandidates: rows.filter((row) => row.ownerStatus === "NELABOT_CANDIDATE").length,
        crowdinLock: "YES",
        lockEnforced: "NO",
        crowdinProtection: "PENDING",
        apply: false,
        rows,
      },
      null,
      2
    )}\n`,
    "utf8"
  );

  console.log(`Wrote ${REPORT_MD}`);
  console.log(`Wrote ${REPORT_JSON}`);
  console.log(
    JSON.stringify(
      {
        baseline: delta.baselineCount,
        candidates: rows.length,
        delta: delta.added.length,
        ownerReviewRequired: rows.filter((row) => row.ownerReviewRequired === "YES").length,
        nelabotCandidates: rows.filter((row) => row.ownerStatus === "NELABOT_CANDIDATE").length,
      },
      null,
      2
    )
  );
}

main();
