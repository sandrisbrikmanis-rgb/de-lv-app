#!/usr/bin/env node
"use strict";

/**
 * Apply OWNER INTENTIONAL_SAME decisions:
 *   - 27 LABOT → write newValue to crowdin/ui JSON + languages/{lang}/ui.js
 *   - 165 NELABOT → confirm lock manifest (Crowdin enforcement still PENDING)
 *
 * Run: node scripts/apply-crowdin-ui-intentional-same-owner.js --apply
 */

const fs = require("fs");
const path = require("path");
const {
  ROOT,
  parseCrowdinJson,
  flattenUiStrings,
  loadUiObject,
  UI_JS_REL,
  applySurgicalCrowdinPatch,
  extractPlaceholderMultiset,
  extractHtmlTagStructure,
  crowdinCodeFromRepoLang,
} = require("./lib/ui-crowdin-bridge");
const {
  LOCK_MANIFEST_JSON,
  BASELINE_AUDIT_COMMIT,
  computeDelta,
} = require("./lib/crowdin-ui-intentional-lock-core");

const DECISIONS_JSON = path.join(ROOT, "reports", "crowdin-ui-intentional-same-owner-decisions.json");
const DECISIONS_CSV = path.join(ROOT, "reports", "crowdin-ui-intentional-same-owner-decisions.csv");
const APPLY_MD = path.join(ROOT, "reports", "crowdin-ui-intentional-same-owner-apply.md");
const LOCK_MD = path.join(ROOT, "reports", "crowdin-ui-intentional-same-lock-owner.md");

function escapeTableCell(value) {
  return String(value).replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function langLabel(repoLang) {
  const crowdin = crowdinCodeFromRepoLang(repoLang);
  return crowdin !== repoLang ? `${repoLang} (Crowdin: \`${crowdin}\`)` : repoLang;
}

function multisetEqual(a, b) {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if ((a[key] || 0) !== (b[key] || 0)) return false;
  }
  return true;
}

function loadDecisions() {
  if (!fs.existsSync(DECISIONS_JSON)) {
    throw new Error(`Missing OWNER decisions: ${DECISIONS_JSON}`);
  }
  return JSON.parse(fs.readFileSync(DECISIONS_JSON, "utf8"));
}

function applyLabot(labotRows) {
  const changedFiles = new Set();
  let appliedVerified = 0;
  let failed = 0;
  const failures = [];

  const byLang = new Map();
  for (const row of labotRows) {
    if (!byLang.has(row.language)) byLang.set(row.language, []);
    byLang.get(row.language).push(row);
  }

  for (const [lang, langRows] of [...byLang.entries()].sort()) {
    const jsonPath = path.join(ROOT, "crowdin", "ui", `${lang}.json`);
    const jsonFlat = parseCrowdinJson(fs.readFileSync(jsonPath, "utf8"));
    const rel = UI_JS_REL(lang);
    const { filePath, code, obj } = loadUiObject(rel);
    const uiFlat = flattenUiStrings(obj);

    for (const row of langRows) {
      if (jsonFlat[row.key] !== row.current || uiFlat[row.key] !== row.current) {
        failed += 1;
        failures.push(`${lang} ${row.key}: CURRENT mismatch before apply`);
      }
    }

    for (const row of langRows) {
      jsonFlat[row.key] = row.newValue;
    }

    const sortedJson = {};
    for (const key of Object.keys(jsonFlat).sort()) sortedJson[key] = jsonFlat[key];
    fs.writeFileSync(jsonPath, `${JSON.stringify(sortedJson, null, 2)}\n`, "utf8");
    changedFiles.add(path.relative(ROOT, jsonPath));

    const patchFlat = {};
    for (const row of langRows) patchFlat[row.key] = row.newValue;
    const patch = applySurgicalCrowdinPatch(code, uiFlat, patchFlat);
    if (patch.changed) {
      fs.writeFileSync(filePath, patch.content, "utf8");
      changedFiles.add(path.relative(ROOT, rel));
    }

    const reparsedJson = parseCrowdinJson(fs.readFileSync(jsonPath, "utf8"));
    const reparsedUi = flattenUiStrings(loadUiObject(rel).obj);
    for (const row of langRows) {
      if (reparsedJson[row.key] !== row.newValue || reparsedUi[row.key] !== row.newValue) {
        failed += 1;
        failures.push(`${lang} ${row.key}: apply verify failed`);
        continue;
      }
      if (
        !multisetEqual(
          extractPlaceholderMultiset(row.lvSource),
          extractPlaceholderMultiset(reparsedJson[row.key])
        )
      ) {
        failed += 1;
        failures.push(`${lang} ${row.key}: placeholder mismatch after apply`);
        continue;
      }
      if (extractHtmlTagStructure(row.lvSource) !== extractHtmlTagStructure(reparsedJson[row.key])) {
        failed += 1;
        failures.push(`${lang} ${row.key}: HTML mismatch after apply`);
        continue;
      }
      appliedVerified += 1;
    }
  }

  return { appliedVerified, failed, failures, changedFiles: [...changedFiles].sort() };
}

function rebuildLockFromNelabot(nelabotRows, delta) {
  const rows = nelabotRows.map((row) => {
    const jsonFlat = parseCrowdinJson(
      fs.readFileSync(path.join(ROOT, "crowdin", "ui", `${row.language}.json`), "utf8")
    );
    const uiFlat = flattenUiStrings(loadUiObject(UI_JS_REL(row.language)).obj);
    return {
      language: row.language,
      key: row.key,
      lvSource: row.lvSource,
      current: jsonFlat[row.key],
      uiCurrent: uiFlat[row.key],
      ownerStatus: "NELABOT",
      ownerReviewRequired: "NO",
      crowdinLock: "YES",
      lockEnforced: "NO",
      crowdinProtection: "PENDING",
      reasonCategory: row.reasonCategory,
      reason: row.ownerReason,
      jsonUiMatch: jsonFlat[row.key] === uiFlat[row.key],
      baselineIncluded: row.sourceManifestStatus !== "OWNER_REVIEW_REQUIRED",
    };
  });

  const byLang = {};
  const byCategory = {};
  for (const row of rows) {
    byLang[row.language] = (byLang[row.language] || 0) + 1;
    byCategory[row.reasonCategory] = (byCategory[row.reasonCategory] || 0) + 1;
  }

  const lines = [
    "# Crowdin UI — INTENTIONAL_SAME bloķēšanas saraksts (OWNER)",
    "",
    `**Datums:** ${new Date().toISOString().slice(0, 10)}  `,
    "**Avots:** `reports/crowdin-ui-intentional-same-owner-decisions.json` (OWNER apply)  ",
    "**Mērķis:** OWNER apstiprinātas NELABOT rindas (Crowdin aizsardzība vēl PENDING)  ",
    "**Apply:** **JĀ** — 27 LABOT ierakstīti production; 165 NELABOT apstiprināti  ",
    "**Greek kartējums:** Crowdin `el` → repo `gr`",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| BASELINE INTENTIONAL_SAME (\`${BASELINE_AUDIT_COMMIT}\`) | **${delta.baselineCount}** |`,
    `| OWNER reviewed | **192** |`,
    `| OWNER NELABOT (lock) | **${rows.length}** |`,
    `| OWNER LABOT (applied) | **27** |`,
    `| OWNER_REVIEW_REQUIRED | **0** |`,
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
    "- `OWNER_STATUS = NELABOT` — OWNER apstiprināts; vērtību **nedrīkst** mainīt.",
    "- `crowdin_lock = YES` — OWNER nodoms aizsargāt rindu (vēl nav Crowdin enforcement).",
    "- `lock_enforced = NO` — faktiskā Crowdin bloķēšana nav aktivizēta.",
    "- `crowdin_protection = PENDING` — gaida Crowdin apply.",
    "- 27 `LABOT` rindas **izņemtas** no lock saraksta pēc production apply.",
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
  fs.writeFileSync(LOCK_MD, `${lines.join("\n")}\n`, "utf8");
  fs.writeFileSync(
    LOCK_MANIFEST_JSON,
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        baselineCommit: BASELINE_AUDIT_COMMIT,
        baselineCount: delta.baselineCount,
        total: rows.length,
        deltaCount: delta.added.length,
        ownerReviewRequired: 0,
        ownerConfirmed: rows.length,
        nelabotCandidates: 0,
        appliedLabot: 27,
        crowdinLock: "YES",
        lockEnforced: "NO",
        crowdinProtection: "PENDING",
        apply: true,
        rows,
      },
      null,
      2
    )}\n`,
    "utf8"
  );

  return rows;
}

function renderApplyReport(decisions, applySummary, lockRows) {
  const labot = decisions.rows.filter((row) => row.ownerStatus === "LABOT");
  const lines = [
    "# Crowdin UI — INTENTIONAL_SAME OWNER apply",
    "",
    `**Datums:** ${new Date().toISOString().slice(0, 10)}  `,
    "**Avots:** `reports/crowdin-ui-intentional-same-owner-decisions.json`  ",
    "**Apply:** **JĀ**",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    "| OWNER reviewed | **192** |",
    "| NELABOT (lock confirmed) | **165** |",
    "| LABOT (applied) | **27** |",
    `| APPLIED_VERIFIED | **${applySummary.appliedVerified}** |`,
    `| FAILED | **${applySummary.failed}** |`,
    `| OWNER_REVIEW_REQUIRED | **0** |`,
    `| lock_enforced | **NO** |`,
    `| crowdin_protection | **PENDING** |`,
    "",
    "## LABOT applied",
    "",
    "| language | key | CURRENT (pirms) | NEW (pēc) |",
    "|---|---|---|---|",
  ];
  for (const row of labot) {
    lines.push(
      `| ${row.language} | \`${row.key}\` | ${escapeTableCell(row.current)} | ${escapeTableCell(row.newValue)} |`
    );
  }
  lines.push(
    "",
    "## Changed files",
    "",
    ...applySummary.changedFiles.map((file) => `- \`${file}\``),
    "",
    `Lock manifest rows after apply: **${lockRows.length}** NELABOT.`,
    ""
  );
  return `${lines.join("\n")}\n`;
}

function main() {
  if (!process.argv.includes("--apply")) {
    console.error("Refusing to write production without --apply");
    process.exit(1);
  }

  const decisions = loadDecisions();
  if (decisions.summary.reviewed !== 192) {
    console.error(`Expected 192 reviewed rows, got ${decisions.summary.reviewed}`);
    process.exit(1);
  }

  const labot = decisions.rows.filter((row) => row.ownerStatus === "LABOT");
  const nelabot = decisions.rows.filter((row) => row.ownerStatus === "NELABOT");
  if (labot.length !== 27 || nelabot.length !== 165) {
    console.error(`Expected 27 LABOT + 165 NELABOT, got ${labot.length} + ${nelabot.length}`);
    process.exit(1);
  }

  const applySummary = applyLabot(labot);
  if (applySummary.failed) {
    console.error(applySummary.failures.join("\n"));
    process.exit(1);
  }

  const delta = computeDelta(BASELINE_AUDIT_COMMIT);
  const lockRows = rebuildLockFromNelabot(nelabot, delta);
  const mismatches = lockRows.filter((row) => !row.jsonUiMatch || row.current !== row.lvSource);
  if (mismatches.length) {
    console.error(`Lock rebuild mismatch: ${mismatches.length}`);
    process.exit(1);
  }

  fs.writeFileSync(APPLY_MD, renderApplyReport(decisions, applySummary, lockRows), "utf8");
  console.log(`Wrote ${APPLY_MD}`);
  console.log(`Wrote ${LOCK_MD}`);
  console.log(`Wrote ${LOCK_MANIFEST_JSON}`);
  console.log(
    JSON.stringify(
      {
        reviewed: 192,
        labotApplied: applySummary.appliedVerified,
        nelabotLocked: lockRows.length,
        ownerReviewRequired: 0,
        changedFiles: applySummary.changedFiles.length,
      },
      null,
      2
    )
  );
}

main();
