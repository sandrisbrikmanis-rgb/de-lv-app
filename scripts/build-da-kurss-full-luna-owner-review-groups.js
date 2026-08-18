#!/usr/bin/env node
"use strict";
/**
 * Build DA–DE Kurss full Luna audit OWNER review + decisions groups (A1/B1 workflow).
 * Usage: node scripts/build-da-kurss-full-luna-owner-review-groups.js
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/da-kurss-full-audit.json");
const REPORTS = path.join(ROOT, "reports");
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.OWNER_REVIEW_BRANCH || "main";
const AUDITOR = "GPT-5.6 Luna";
const AUDIT_REPORT = "da-kurss-full-audit.md";

const GROUP_META = {
  "01-structure-lesson7": {
    title: "Lektion 7 — exercise card struktūra",
    file: "data/da/courseTrainingCards.js",
  },
  "02-static-html": {
    title: "Statiskie HTML paneļi (6)",
    file: "data/da/courseLessons.js",
  },
  "03-lessons-01-07": {
    title: "Lekcijas 1–7 (legacyHtml + saturs)",
    file: "data/da/courseLessons.js",
  },
  "04-lessons-08-21-misc": {
    title: "Lekcijas 8–21, training, UI",
    file: "data/da/courseLessons.js + training + ui",
  },
};

function truncate(text, max = 400) {
  const s = String(text || "").replace(/\s+/g, " ").trim();
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function productionFile(f, meta) {
  const p = f.path || "";
  if (p.startsWith("LANGUAGE_UI_STRINGS") || f.lessonId === "ui") return "languages/da/ui.js";
  if (/TrainingCardsDa|ExerciseCardsDa/.test(p)) return "data/da/courseTrainingCards.js";
  return meta.file.split(" + ")[0];
}

function groupForFinding(f) {
  if (f.category === "STRUCTURE" || /^lesson7ExerciseCardsDa/.test(f.path || "")) {
    return "01-structure-lesson7";
  }
  if (/^kurss/.test(f.lessonId || "") || (f.path || "").includes("COURSE_LESSON_HTML")) {
    return "02-static-html";
  }
  if (/^lesson[1-7]$/.test(f.lessonId || "") || /^lesson[1-7]Training/.test(f.path || "")) {
    return "03-lessons-01-07";
  }
  return "04-lessons-08-21-misc";
}

function loadFindings() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}. Run: node scripts/audit-da-kurss-full.js`);
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  return (data.findings || []).filter(
    (f) =>
      f.severity !== "PASS" &&
      f.category !== "PASS" &&
      f.category !== "FALSE_POSITIVE" &&
      String(f.severity || "").toUpperCase() !== "PASS",
  );
}

function reviewFindingBlock(f, index, slug) {
  const meta = GROUP_META[slug];
  const auditId = `DA-KURSS-LUNA-${slug.toUpperCase().replace(/-/g, "")}-${String(index).padStart(3, "0")}`;

  return `## Finding ${index}

**Audit ID:** ${auditId}
**Source audit ID:** \`${f.id}\`
**Lesson/ID:** \`${f.lessonId}\`
**ID / path:** \`${f.path}\`
**DE (read-only):** ${truncate(f.deCurrent || "—", 200)}
**Severity:** ${f.severity}
**Category:** ${f.category}
**Field:** \`${f.fieldType || "text"}\`
**Production file:** \`${productionFile(f, meta)}\`
**CURRENT_DA:** ${truncate(f.daCurrent, 500)}
**PROPOSED_DA:** ${truncate(f.proposedDa, 500)}
**Problēma:** ${f.problem || f.reason || "—"}
**Audita pamatojums:** ${truncate(f.reason || f.problem, 300)}
**Avots:** ${AUDITOR} (\`reports/${AUDIT_REPORT}\`) · ${f.source || "audit"}

**OWNER_DECISION:**

---
`;
}

function writeGroup(slug, findings) {
  const meta = GROUP_META[slug];
  const reviewName = `da-kurss-full-luna-owner-review-${slug}.md`;
  const decisionsName = `da-kurss-full-luna-owner-decisions-${slug}.md`;

  const reviewHeader = `# DA–DE Kurss — OWNER review — ${meta.title}

Avots: \`reports/${AUDIT_REPORT}\` · \`reports/temp/da-kurss-full-audit.json\`
Findings: **1–${findings.length}** (${findings.length} ieraksti)
Auditors: **${AUDITOR}** (READ-ONLY)

> **PROPOSED_DA** ir Luna ieteikums — **nav** OWNER apstiprināts. Ieraksti pareizo dāņu tekstu laukā **OWNER_DECISION** (vai atgriez \`${decisionsName}\` tabulu).
> **DE lauki nemainīt.** Labojam tikai DA.
> **Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW

`;

  const reviewBody = findings.map((f, i) => reviewFindingBlock(f, i + 1, slug)).join("\n");
  fs.writeFileSync(path.join(REPORTS, reviewName), reviewHeader + reviewBody);

  const tableRows = findings
    .map(
      (f, i) =>
        `| ${i + 1} | \`${f.lessonId}\` | \`${String(f.path).replace(/\|/g, "\\|")}\` | PENDING | |`,
    )
    .join("\n");

  const pasteBlock = findings.map((_, i) => `${i + 1}\tPENDING\t`).join("\n");

  const decisionsBody = `# DA–DE Kurss — OWNER decisions — ${meta.title}

Avots: \`reports/${reviewName}\`
Findings: **1–${findings.length}** (${findings.length} ieraksti)

**DE = STRICT READ-ONLY.** Aizpildi tabulu pēc ChatGPT/OWNER pārbaudes.

**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW

| Finding | Lesson/ID | Path | Statuss | OWNER_DECISION |
|---:|---|---|---|---|
${tableRows}

---

## Copy/paste — atgriešanai agentam

Formāts: \`Finding<TAB>Statuss<TAB>OWNER_DECISION\`

\`\`\`text
${pasteBlock}
\`\`\`
`;

  fs.writeFileSync(path.join(REPORTS, decisionsName), decisionsBody);

  return { slug, title: meta.title, reviewName, decisionsName, count: findings.length };
}

function ghLink(file) {
  return `https://github.com/${REPO}/blob/${BRANCH}/reports/${file}`;
}

function main() {
  const findings = loadFindings();
  const grouped = {};
  for (const f of findings) {
    const slug = groupForFinding(f);
    if (!grouped[slug]) grouped[slug] = [];
    grouped[slug].push(f);
  }

  const order = Object.keys(GROUP_META);
  const written = [];
  for (const slug of order) {
    const list = grouped[slug] || [];
    if (!list.length) continue;
    written.push(writeGroup(slug, list));
  }

  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, NEEDS_SOURCE_REVIEW: 0 };
  for (const f of findings) {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    if (bySev[s] !== undefined) bySev[s]++;
  }

  const indexLines = [
    "# DA–DE Kurss — full Luna audit — OWNER review — indekss",
    "",
    `Avots: [da-kurss-full-audit.md](da-kurss-full-audit.md) · **${findings.length} findings** (bez PASS/FALSE_POSITIVE)`,
    "",
    "Tas pats **Copy-Only** workflow kā A1/A2/B1 un section-pack:",
    "",
    "1. Atver **review** failu grupai.",
    "2. ChatGPT/OWNER aizpilda **OWNER_DECISION** (vai **decisions** tabulu / copy-paste bloku).",
    "3. Atgriez aizpildītos failus — es veicu COPY-ONLY labojumus.",
    "",
    "**Statuss:** LABOT | FALSE_POSITIVE | NELABOT | NEEDS_SOURCE_REVIEW",
    "",
    "## Severity (kopā)",
    "",
    `| CRITICAL | HIGH | MEDIUM | LOW | NEEDS_SOURCE_REVIEW |`,
    `|----------|------|--------|-----|---------------------|`,
    `| ${bySev.CRITICAL || 0} | ${bySev.HIGH || 0} | ${bySev.MEDIUM || 0} | ${bySev.LOW || 0} | ${bySev.NEEDS_SOURCE_REVIEW || 0} |`,
    "",
    "## Grupas",
    "",
    "| # | Grupa | Findings | Review | Decisions |",
    "|---|-------|----------|--------|-----------|",
  ];

  written.forEach((row, i) => {
    indexLines.push(
      `| ${i + 1} | ${row.title} | ${row.count} | [review](${ghLink(row.reviewName)}) | [decisions](${ghLink(row.decisionsName)}) |`,
    );
  });

  indexLines.push(
    "",
    `## Vienots fails (visi ${findings.length})`,
    "",
    `- [da-kurss-owner-review.md](da-kurss-owner-review.md)`,
    `- [da-kurss-owner-decisions.md](da-kurss-owner-decisions.md)`,
    "",
    "## Apply (pēc OWNER)",
    "",
    "```bash",
    "node scripts/build-da-kurss-full-luna-owner-apply-map.js",
    "node scripts/apply-da-kurss-full-luna-owner-repair.js",
    "```",
    "",
    "**DE nemainīt.** Mirror: `www/data/da/` + `www/languages/da/`.",
  );

  fs.writeFileSync(path.join(REPORTS, "da-kurss-full-luna-owner-review-INDEX.md"), indexLines.join("\n"));

  fs.writeFileSync(
    path.join(REPORTS, "da-kurss-full-luna-owner-review-README.md"),
    `# DA–DE Kurss — full Luna OWNER review — README

Findings: **${findings.length}** (no full audit JSON, bez PASS)

Skatīt [da-kurss-full-luna-owner-review-INDEX.md](./da-kurss-full-luna-owner-review-INDEX.md)

## Grupas

| Slug | Saturs |
|------|--------|
| \`01-structure-lesson7\` | 16 — lesson7ExerciseCardsDa .lv struktūra |
| \`02-static-html\` | 9 — 6 statiskie paneļi |
| \`03-lessons-01-07\` | 29 — lekcijas 1–7 legacyHtml/saturs |
| \`04-lessons-08-21-misc\` | 13 — lekcijas 8–21, training, UI |

Regenerēt: \`node scripts/build-da-kurss-full-luna-owner-review-groups.js\`
`,
  );

  console.log(
    JSON.stringify(
      {
        findings: findings.length,
        groups: written.length,
        bySev,
        written: written.map((w) => ({ slug: w.slug, count: w.count })),
      },
      null,
      2,
    ),
  );
}

main();
