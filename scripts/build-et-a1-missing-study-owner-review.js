#!/usr/bin/env node
"use strict";
/**
 * Build ET–DE A1 missing Study OWNER-PREP (10 cards) per PROJECT_LANGUAGE_MASTER_STANDARD.md §7.6.
 * LV MASTER = structure reference; OWNER supplies Estonian Study text (field `lv`).
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/et-a1-full-audit.json");
const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || execSync("git branch --show-current", { cwd: ROOT, encoding: "utf8" }).trim();
const PR_NUMBER = process.env.AUDIT_PR || "586";
const MAIN_BASE_SHA = process.env.MAIN_BASE_SHA || execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();

const MISSING_IDS = new Set([
  "ET-A1-0002",
  "ET-A1-0003",
  "ET-A1-0006",
  "ET-A1-0007",
  "ET-A1-0008",
  "ET-A1-0009",
  "ET-A1-0010",
  "ET-A1-0011",
  "ET-A1-0012",
  "ET-A1-0013",
]);

const OUT = {
  view: path.join(ROOT, "reports/et-a1-missing-study-owner-view.md"),
  decisions: path.join(ROOT, "reports/et-a1-missing-study-owner-decisions.md"),
  github: path.join(ROOT, "reports/et-a1-missing-study-owner-review-GITHUB.md"),
  skeleton: path.join(ROOT, "reports/temp/et-a1-missing-study-skeleton.json"),
};

function gh(relPath) {
  return `https://github.com/${REPO}/blob/${BRANCH}/${relPath}`;
}

function loadWords(rel) {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(ROOT, rel), "utf8"), ctx);
  return ctx.window.A1_WORDS;
}

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function bulletList(items) {
  if (!items || !items.length) return "—";
  return items.map((x) => `- ${x}`).join("\n");
}

function renderExamples(examples) {
  if (!examples?.length) return "—";
  return examples
    .map((ex, i) => `${i + 1}. DE: \`${ex.de}\`\n   LV: ${ex.lv}`)
    .join("\n");
}

function renderComparison(rows) {
  if (!rows?.length) return "—";
  return rows
    .map(
      (r, i) =>
        `${i + 1}. **${r.word}** — ${r.meaning}\n   Piem.: \`${r.example || "—"}\``,
    )
    .join("\n");
}

function renderTip(tip) {
  if (!tip) return "—";
  if (typeof tip === "string") return tip;
  if (Array.isArray(tip)) return bulletList(tip);
  if (typeof tip === "object" && tip.text) return tip.text;
  return JSON.stringify(tip);
}

function renderSectionAccents(sa) {
  if (!sa) return "_(nav — kopēt no LV pēc ET Study teksta)_";
  return `\`\`\`json\n${JSON.stringify(sa, null, 2)}\n\`\`\``;
}

function loadFindings() {
  if (!fs.existsSync(AUDIT_JSON)) {
    console.error(`Missing ${AUDIT_JSON}. Run: node scripts/run-et-a1-full-audit.js`);
    process.exit(1);
  }
  const all = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8")).findings || [];
  const missing = all.filter((f) => MISSING_IDS.has(f.findingId));
  if (missing.length !== 10) {
    console.error(`Expected 10 missing-study findings, got ${missing.length}`);
    process.exit(1);
  }
  return missing;
}

function lvStudyForFinding(f, lvWords) {
  const entry = lvWords.find((w) => w.de === f.de);
  return { entry, study: entry?.study || null };
}

function buildSkeleton(study) {
  const base = JSON.parse(JSON.stringify(study));
  base.translation = "[OWNER: ET translation]";
  base.explanation = base.explanation.map(() => "[OWNER: ET explanation line]");
  if (base.examples) {
    base.examples.forEach((ex) => {
      ex.lv = "[OWNER: ET example]";
    });
  }
  if (base.comparison) {
    base.comparison.forEach((row) => {
      row.meaning = "[OWNER: ET meaning]";
      if (row.example && row.example.includes(" – ")) {
        const dePart = row.example.split(" – ")[0];
        row.example = `${dePart} – [OWNER: ET example]`;
      }
    });
  }
  if (typeof base.tip === "object" && base.tip !== null) base.tip.text = "[OWNER: ET tip]";
  else if (Array.isArray(base.tip)) base.tip = ["[OWNER: ET tip line 1]", "[OWNER: ET tip line 2]"];
  else base.tip = "[OWNER: ET tip]";
  base.important = base.important.map(() => "[OWNER: ET important line]");
  return base;
}

function renderViewEntry(f, etWords, lvWords) {
  const etEntry = etWords.find((w) => w.de === f.de);
  const { study } = lvStudyForFinding(f, lvWords);
  if (!study) throw new Error(`No LV study for ${f.de}`);

  return [
    `## ${f.findingId} — ${f.cardId}`,
    "",
    `**Audit ID:** ${f.findingId}`,
    `**Card ID:** \`${f.cardId}\``,
    `**Field/path:** \`${f.cardId}.study\` (viss objekts)`,
    `**Production file:** \`data/et/a1.js\``,
    `**Severity:** ${f.severity}`,
    `**Category:** ${f.category || "STRUCTURE"}`,
    `**DE (read-only):** ${f.de}`,
    `**ET flashcard \`lv\` (esošais):** ${etEntry?.lv || "—"}`,
    `**CURRENT_ET:** (nav Study objekta)`,
    `**Problēma:** ${f.reason}`,
    "",
    "### LV MASTER Study (struktūras etalons — **nemainīt DE**, ET tekstu raksta OWNER)",
    "",
    `**study.id:** \`${study.id}\``,
    `**layout:** \`${study.layout}\``,
    `**translation (LV):** ${study.translation}`,
    "",
    "**explanation (LV):**",
    bulletList(study.explanation),
    "",
    "**examples (DE nemainīt; LV = struktūras atsauce):**",
    renderExamples(study.examples),
    "",
    study.comparison?.length ? "**comparison (DE nemainīt):**" : "",
    study.comparison?.length ? renderComparison(study.comparison) : "",
    study.comparison?.length ? "" : "",
    "**tip (LV):**",
    renderTip(study.tip),
    "",
    "**important (LV):**",
    bulletList(study.important),
    "",
    "**sectionAccents (kopēt no LV pēc ET Study teksta):**",
    renderSectionAccents(study.sectionAccents),
    "",
    "### OWNER uzdevums",
    "",
    "1. Sagatavo **pilnu ET Study objektu** ar tādu pašu struktūru (id, layout, DE piemēri, comparison.word u.c. nemainīt).",
    "2. Aizpildi visus ET laukus: `translation`, `explanation[]`, `examples[].lv`, `comparison[].meaning`, `comparison[].example` ET daļu, `tip`, `important[]`.",
    "3. **Nekopē LV tekstu** — tulkot estiski pēc LV/DE nozīmes (lauks joprojām saucas `lv`).",
    "4. Ieraksti lēmumu tabulā `et-a1-missing-study-owner-decisions.md` vai zemāk.",
    "",
    "**OWNER STATUS:** PENDING",
    "",
    "**OWNER_DECISION (pilns Study JSON vai lauku kopsavilkums):**",
    "",
    "```json",
    JSON.stringify(buildSkeleton(study), null, 2),
    "```",
    "",
    "---",
    "",
  ].join("\n");
}

function buildView(findings, etWords, lvWords) {
  const content = [
    "# ET–DE A1 — MISSING STUDY OWNER VIEW (10 kartītes)",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.1`,
    `**Auditors:** deterministika + GPT-5.6 Luna (READ-ONLY)`,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**WORK_BRANCH:** \`${BRANCH}\``,
    `**SCOPE:** Trūkstošie Study objekti (\`124/134 → 134\`)`,
    `**Findings:** **10** (ET-A1-0002, 0003, 0006–0013)`,
    "",
    "> **DE = STRICT READ-ONLY.** Production apply **vēl neveikt**.",
    "> LV MASTER Study = struktūras un DE etalons; OWNER piegādā **estisku** Study saturu.",
    "> Pēc OWNER lēmumiem — COPY-ONLY apply + sectionAccents sync + targeted regression.",
    "",
    "## Īsais saraksts",
    "",
    ...findings.map(
      (f) =>
        `- **${f.findingId}** \`${f.cardId}\` · DE: **${f.de}** · ET flashcard: ${etWords.find((w) => w.de === f.de)?.lv || "—"}`,
    ),
    "",
    ...findings.map((f) => renderViewEntry(f, etWords, lvWords)),
  ].join("\n");

  fs.writeFileSync(OUT.view, content);
}

function buildDecisions(findings, etWords, lvWords) {
  const lines = [
    "# ET–DE A1 — MISSING STUDY OWNER DECISIONS",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.1`,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**WORK_BRANCH:** \`${BRANCH}\``,
    `**Findings:** **10** · sākotnēji visi **PENDING**`,
    "",
    "Atļautie statusi: **LABOT** | **NELABOT** | **FALSE_POSITIVE** | **NEEDS_SOURCE_REVIEW**",
    "",
    "**DE = STRICT READ-ONLY.** Apply tikai pēc OWNER apstiprinājuma un `REPAIR_APPLY_SAFETY_STANDARD.md`.",
    "",
    "OWNER_DECISION: pilns Study JSON (vai precīzs lauku teksts) estiskā valodā. **Nekopēt LV tekstu.**",
    "",
    "| Audit ID | Card ID | DE | ET flashcard lv | LV study.id | CURRENT | Severity | OWNER STATUS | OWNER_DECISION | Piezīme |",
    "|----------|---------|-----|-----------------|-------------|---------|----------|--------------|----------------|---------|",
  ];

  for (const f of findings) {
    const etEntry = etWords.find((w) => w.de === f.de);
    const { study } = lvStudyForFinding(f, lvWords);
    lines.push(
      `| ${f.findingId} | ${escapePipe(f.cardId)} | ${escapePipe(f.de)} | ${escapePipe(etEntry?.lv)} | ${escapePipe(study?.id)} | (nav Study objekta) | ${f.severity} | PENDING | | |`,
    );
  }

  lines.push("");
  lines.push("## Detalizēti lauki (LABOT gadījumā — aizpildīt estiski)");
  lines.push("");
  for (const f of findings) {
    const { study } = lvStudyForFinding(f, lvWords);
    lines.push(`### ${f.findingId} — ${f.de} (\`${study?.id}\`)`);
    lines.push("");
    lines.push("| Lauks | OWNER ET teksts |");
    lines.push("|-------|-----------------|");
    lines.push("| translation | |");
    for (let i = 0; i < (study?.explanation?.length || 0); i++) {
      lines.push(`| explanation[${i}] | |`);
    }
    for (let i = 0; i < (study?.examples?.length || 0); i++) {
      lines.push(`| examples[${i}].lv (DE: ${escapePipe(study.examples[i].de)}) | |`);
    }
    if (study?.comparison) {
      for (let i = 0; i < study.comparison.length; i++) {
        lines.push(`| comparison[${i}].meaning (${escapePipe(study.comparison[i].word)}) | |`);
        lines.push(`| comparison[${i}].example ET daļa | |`);
      }
    }
    lines.push("| tip | |");
    for (let i = 0; i < (study?.important?.length || 0); i++) {
      lines.push(`| important[${i}] | |`);
    }
    lines.push("");
  }

  fs.writeFileSync(OUT.decisions, lines.join("\n"));
}

function buildGithub(findings) {
  const content = [
    "# ET–DE A1 — Missing Study GitHub atvēršanas indekss",
    "",
    `**Standard:** \`PROJECT_LANGUAGE_MASTER_STANDARD.md\` v1.1`,
    `**Branch:** \`${BRANCH}\``,
    `**MAIN_BASE_SHA:** \`${MAIN_BASE_SHA}\``,
    `**Audit PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    `**Scope:** **10** trūkstošie Study objekti · **STAGE RESULT:** NEEDS OWNER REVIEW`,
    "",
    "## Sākt šeit",
    "",
    "| Fails | Apraksts |",
    "|-------|----------|",
    `| [Missing Study OWNER VIEW](${gh("reports/et-a1-missing-study-owner-view.md")}) | 10 kartītes ar LV MASTER atsauci |`,
    `| [Missing Study OWNER DECISIONS](${gh("reports/et-a1-missing-study-owner-decisions.md")}) | Lēmumu tabula (PENDING) |`,
    `| [Pilns audits](${gh("reports/et-a1-full-audit.md")}) | 702/702 Luna · 216 findings |`,
    `| [Galvenais OWNER VIEW](${gh("reports/et-a1-owner-view.md")}) | Visi 216 findings |`,
    `| [Galvenais OWNER DECISIONS](${gh("reports/et-a1-owner-decisions.md")}) | Visi 216 findings |`,
    `| [Targeted regression](${gh("reports/et-a1-targeted-regression-audit.md")}) | 177 OWNER repairs PASS |`,
    `| [Apply safety standarts](${gh("docs_and_rules/REPAIR_APPLY_SAFETY_STANDARD.md")}) | Obligāts pirms apply |`,
    `| [MASTER standarts](${gh("docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md")}) | v1.1 |`,
    "",
    "## 10 trūkstošie Study objekti",
    "",
    "| Audit ID | Card ID | DE |",
    "|----------|---------|-----|",
    ...findings.map((f) => `| ${f.findingId} | \`${f.cardId}\` | ${f.de} |`),
    "",
    "## OWNER workflow",
    "",
    "1. Atver [Missing Study OWNER VIEW](" + gh("reports/et-a1-missing-study-owner-view.md") + ").",
    "2. Katram vārdam — pēc LV MASTER struktūras sagatavo **estisku** Study saturu.",
    "3. Aizpildi [Missing Study OWNER DECISIONS](" + gh("reports/et-a1-missing-study-owner-decisions.md") + ") (OWNER STATUS + OWNER_DECISION).",
    "4. Atgriez aizpildītu decisions failu — COPY-ONLY apply + sectionAccents sync + targeted regression.",
    "",
    "**Production changes = 0 · DE changes = 0** (līdz OWNER atgriešanai)",
    "",
  ].join("\n");

  fs.writeFileSync(OUT.github, content);
}

function buildSkeletonJson(findings, lvWords) {
  const items = findings.map((f) => {
    const { entry, study } = lvStudyForFinding(f, lvWords);
    return {
      findingId: f.findingId,
      cardId: f.cardId,
      de: f.de,
      etFlashcardLv: entry?.lv || null,
      action: "CREATE_STUDY",
      studyId: study.id,
      skeleton: buildSkeleton(study),
    };
  });
  fs.mkdirSync(path.dirname(OUT.skeleton), { recursive: true });
  fs.writeFileSync(OUT.skeleton, JSON.stringify(items, null, 2));
}

function main() {
  const findings = loadFindings();
  const lvWords = loadWords("data/a1.js");
  const etWords = loadWords("data/et/a1.js");

  buildView(findings, etWords, lvWords);
  buildDecisions(findings, etWords, lvWords);
  buildGithub(findings);
  buildSkeletonJson(findings, lvWords);

  console.log(
    JSON.stringify(
      {
        findings: findings.length,
        view: OUT.view,
        decisions: OUT.decisions,
        github: OUT.github,
        skeleton: OUT.skeleton,
      },
      null,
      2,
    ),
  );
}

main();
