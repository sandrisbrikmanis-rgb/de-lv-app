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
  UI_LANGUAGES,
  CROWDIN_SOURCE_LANG,
  crowdinCodeFromRepoLang,
  parseCrowdinJson,
  flattenUiStrings,
  loadUiObject,
  UI_JS_REL,
} = require("./lib/ui-crowdin-bridge");
const {
  classifySameRow,
  reasonCategoryForIntentional,
} = require("./lib/crowdin-ui-untranslated-classify");

const REPORT_MD = path.join(ROOT, "reports", "crowdin-ui-intentional-same-lock-owner.md");
const REPORT_JSON = path.join(ROOT, "reports", "crowdin-ui-intentional-same-lock-owner.json");

function escapeTableCell(value) {
  return String(value).replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function langLabel(repoLang) {
  const crowdin = crowdinCodeFromRepoLang(repoLang);
  return crowdin !== repoLang ? `${repoLang} (Crowdin: \`${crowdin}\`)` : repoLang;
}

function collectIntentionalSameRows() {
  const lvFlat = parseCrowdinJson(
    fs.readFileSync(path.join(ROOT, "crowdin", "ui", `${CROWDIN_SOURCE_LANG}.json`), "utf8")
  );
  const lvKeys = Object.keys(lvFlat).sort();
  const rows = [];

  for (const lang of UI_LANGUAGES.filter((code) => code !== CROWDIN_SOURCE_LANG)) {
    const jsonFlat = parseCrowdinJson(
      fs.readFileSync(path.join(ROOT, "crowdin", "ui", `${lang}.json`), "utf8")
    );
    const uiFlat = flattenUiStrings(loadUiObject(UI_JS_REL(lang)).obj);

    for (const key of lvKeys) {
      if (jsonFlat[key] !== lvFlat[key]) continue;
      const [status, rationale] = classifySameRow(key, lvFlat[key]);
      if (status !== "INTENTIONAL_SAME") continue;

      const jsonCurrent = jsonFlat[key];
      const uiCurrent = uiFlat[key];
      rows.push({
        language: lang,
        key,
        lvSource: lvFlat[key],
        current: jsonCurrent,
        uiCurrent,
        ownerStatus: "NELABOT",
        crowdinLock: "YES",
        reasonCategory: reasonCategoryForIntentional(key, lvFlat[key], rationale),
        reason: rationale,
        jsonUiMatch: jsonCurrent === uiCurrent,
      });
    }
  }

  return rows;
}

function renderMarkdown(rows) {
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
    "**Avots:** `reports/crowdin-ui-untranslated-audit.md`  ",
    "**Mērķis:** bloķēt apzināti identiskas rindas pret nejaušu Auto-Translate  ",
    "**Apply:** **NĒ** — tikai OWNER mapping  ",
    "**Greek kartējums:** Crowdin `el` → repo `gr`",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| INTENTIONAL_SAME rindas | **${rows.length}** |`,
    `| OWNER_STATUS | **NELABOT** (${rows.length}/${rows.length}) |`,
    `| crowdin_lock | **YES** (${rows.length}/${rows.length}) |`,
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
    "- `OWNER_STATUS = NELABOT` — šīs rindas **nedrīkst** tulkot/atšķirt no LV avota.",
    "- `crowdin_lock = YES` — Crowdin/Auto-Translate šai atslēgai jāuzskata par aizsargātu.",
    "- `CURRENT` = faktiskā vērtība `crowdin/ui/{lang}.json` (un `languages/{lang}/ui.js`).",
    "- Apply šajā posmā **netiek veikts**.",
    "",
    "## Pilna tabula",
    "",
    "| language | key | LV source | CURRENT | OWNER_STATUS | crowdin_lock | reason_category | reason |",
    "|---|---|---|---|---|---|---|---|"
  );

  for (const row of rows) {
    lines.push(
      `| ${escapeTableCell(row.language)} | \`${escapeTableCell(row.key)}\` | ${escapeTableCell(row.lvSource)} | ${escapeTableCell(row.current)} | ${row.ownerStatus} | ${row.crowdinLock} | ${row.reasonCategory} | ${escapeTableCell(row.reason)} |`
    );
  }

  lines.push("");
  return `${lines.join("\n")}\n`;
}

function main() {
  const rows = collectIntentionalSameRows();
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
  fs.writeFileSync(REPORT_MD, renderMarkdown(rows), "utf8");
  fs.writeFileSync(
    REPORT_JSON,
    `${JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        total: rows.length,
        ownerStatus: "NELABOT",
        crowdinLock: "YES",
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
  console.log(JSON.stringify({ total: rows.length }, null, 2));
}

main();
