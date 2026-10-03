#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { loadVerificationSnapshot } = require("./lib/g2-a1-production-current/card-translation-32lang-readiness");

const OUT_DIR = path.join(ROOT, "reports/g2-a1-production-current/card-translation-32lang-readiness");

function main() {
  const snap = loadVerificationSnapshot();
  if (!snap) {
    console.error("Missing card-translation-32lang-full-verification.json — run verify:g2-a1:card-translation-32lang-full");
    process.exit(1);
  }

  const lines = [];
  lines.push("# G2/A1 card translation readiness (32 languages)");
  lines.push("");
  lines.push(`- **Classification:** ${snap.classification}`);
  lines.push(`- **Ready:** ${snap.readyCount}/${snap.expectedCount}`);
  lines.push(`- **Next action:** ${snap.nextAction}`);
  lines.push(`- **Full A1 audit executed:** ${snap.fullA1AuditExecuted}`);
  lines.push(`- **Production modified (this PR / working tree):** ${snap.productionDataModified}`);
  if (snap.productionGit) {
    lines.push(
      `- **Inherited PR #842 production paths (main→#842 base, ${snap.productionGit.inheritedFromPr842?.pathCount || 0}):** ${
        snap.productionGit.inheritedFromPr842?.paths?.length
          ? snap.productionGit.inheritedFromPr842.paths.map((p) => `\`${p}\``).join(", ")
          : "(none)"
      }`,
    );
    lines.push(
      `- **PR #843-only production diff (#842…HEAD):** ${
        snap.productionGit.pr843ProductionPaths?.length
          ? snap.productionGit.pr843ProductionPaths.map((p) => `\`${p}\``).join(", ")
          : "(none)"
      }`,
    );
  }
  lines.push(`- **Batch blocker active:** ${snap.batchBlockerActive}`);
  lines.push("");
  lines.push("## Ready languages");
  lines.push(snap.readyLanguages.length ? snap.readyLanguages.map((l) => `- ${l}`).join("\n") : "- (none)");
  lines.push("");
  lines.push("## Remaining languages");
  lines.push(snap.notReadyLanguages.map((l) => `- ${l}`).join("\n"));
  lines.push("");
  lines.push("## Per language");
  for (const row of snap.languages || []) {
    lines.push(
      `### ${row.appLang} — ${row.cardTranslationReady ? "READY" : "NOT READY"} (targetOfficialValidation: ${row.targetOfficialValidation === true ? "true" : "false"})`,
    );
    lines.push(`- Collector: \`${row.collector?.collectorId}\` — ${row.collector?.bilingualSourceUrl || "n/a"}`);
    lines.push(`- TARGET validator: \`${row.targetValidator?.adapterId}\` — ${row.targetValidator?.masterSourceUrl || "n/a"}`);
    lines.push(
      `- Haus positive regression: ${row.positiveRegression?.pass ? "PASS" : "FAIL"} — verdict **${row.productionPilot?.verdict || "n/a"}**`,
    );
    if (row.productionPilot?.deSourceUrl) lines.push(`- DE URL: ${row.productionPilot.deSourceUrl}`);
    if (row.productionPilot?.bilingualSourceUrl) {
      lines.push(`- Dictionary: ${row.productionPilot.bilingualSourceUrl}`);
    }
    if (row.blockers?.length) {
      lines.push(`- Blockers: ${row.blockers.map((b) => b.code).join(", ")}`);
    }
    lines.push("");
  }

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, "card-translation-readiness-report.md"), `${lines.join("\n")}\n`);
  console.log(JSON.stringify({ ok: true, readyCount: snap.readyCount, path: "card-translation-readiness-report.md" }, null, 2));
}

main();
