#!/usr/bin/env node
"use strict";

/**
 * Explain INTENTIONAL_SAME baseline (170) vs current candidates (192).
 * Generates reports/crowdin-ui-intentional-same-lock-delta.md
 */

const fs = require("fs");
const path = require("path");
const {
  ROOT,
  computeDelta,
  BASELINE_AUDIT_COMMIT,
} = require("./lib/crowdin-ui-intentional-lock-core");

const REPORT_MD = path.join(ROOT, "reports", "crowdin-ui-intentional-same-lock-delta.md");

function escapeCell(value) {
  return String(value).replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function main() {
  const delta = computeDelta(BASELINE_AUDIT_COMMIT);
  const lines = [
    "# Crowdin UI — INTENTIONAL_SAME delta (170 → 192)",
    "",
    `**Datums:** ${new Date().toISOString().slice(0, 10)}  `,
    `**Baseline audits commits:** \`${BASELINE_AUDIT_COMMIT}\` (pirms placeholder remonta)  `,
    "**Pašreizējais stāvoklis:** HEAD (pēc placeholder remonta `ceaae08d`)  ",
    "**Apply:** **NĒ**",
    "",
    "## Kopsavilkums",
    "",
    "| Metrika | Vērtība |",
    "|---|---:|",
    `| BASELINE INTENTIONAL_SAME | **${delta.baselineCount}** |`,
    `| CANDIDATES (pašreiz) | **${delta.currentCount}** |`,
    `| DELTA (jauni kandidāti) | **${delta.added.length}** |`,
    `| Noņemti no baseline | **${delta.removed.length}** |`,
    "",
    "## Delta iemesls (kopējais)",
    "",
    "Visas **22** jaunās rindas radās, jo placeholder remonts (`ceaae08d`) atjaunoja tehniskos `{...}` tokenus,",
    "un `CURRENT` kļuva **identisks** `LV_SOURCE`. Baseline auditā šīs rindas bija `target !== LV`",
    "(vai ar nepareiziem placeholderiem), tāpēc tās **neietilpa** 170 `INTENTIONAL_SAME` kopā.",
    "",
    "**Svarīgi:** šīs 22 rindas **nedrīkst** automātiski apstiprināt kā `NELABOT` — katrai `OWNER_REVIEW_REQUIRED = YES`.",
    "",
    "## Delta tabula (22 rindas)",
    "",
    "| language | key | LV_SOURCE | CURRENT | iepriekšējais statuss | jaunais statuss | statusa maiņas iemesls | OWNER_REVIEW_REQUIRED |",
    "|---|---|---|---|---|---|---|---|",
  ];

  for (const row of delta.added) {
    lines.push(
      `| ${escapeCell(row.language)} | \`${escapeCell(row.key)}\` | ${escapeCell(row.lvSource)} | ${escapeCell(row.current)} | ${row.previousStatus} | ${row.newStatus} | ${escapeCell(row.statusChangeReason)} | YES |`
    );
  }

  if (delta.added.length) {
    lines.push("", "### Baseline CURRENT (pirms remonta)", "");
    for (const row of delta.added) {
      lines.push(
        `- **${row.language}** \`${row.key}\`: \`${escapeCell(row.baselineCurrent)}\` → \`${escapeCell(row.current)}\``
      );
    }
  }

  if (delta.removed.length) {
    lines.push("", "## Noņemtas rindas (baseline → pašreiz)", "");
    for (const row of delta.removed) {
      lines.push(`- ${row.language} \`${row.key}\``);
    }
  }

  lines.push("");
  fs.writeFileSync(REPORT_MD, `${lines.join("\n")}\n`, "utf8");
  console.log(`Wrote ${REPORT_MD}`);
  console.log(
    JSON.stringify(
      {
        baseline: delta.baselineCount,
        candidates: delta.currentCount,
        delta: delta.added.length,
        removed: delta.removed.length,
      },
      null,
      2
    )
  );
}

main();
