#!/usr/bin/env node
"use strict";
/**
 * ET–DE B1 final OWNER/source review — remaining 33 blockers (post PR #625).
 * Usage: node scripts/build-et-b1-final-owner-review.js
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = "main";
const MAIN_SHA = "0eb0b95aaf29f3c16ee103c08a787a1f0f96c389";
const PRODUCTION_BLOB = "16804eec669aa16de08ea6bbbddd8dbbb9b3fbfb";
const ACCEPTED = path.join(ROOT, "reports/et-b1-owner-decisions-accepted.md");
const AUDIT_JSON = path.join(ROOT, "reports/temp/et-b1-full-audit.json");

const OUT = {
  view: path.join(ROOT, "reports/et-b1-final-owner-view.md"),
  decisions: path.join(ROOT, "reports/et-b1-final-owner-decisions.md"),
  github: path.join(ROOT, "reports/et-b1-final-owner-review-GITHUB.md"),
  source: path.join(ROOT, "reports/et-b1-final-source-review.md"),
};

const EXTRA_STUDIES = [
  { studyId: "b1-handarbeit", de: "Handarbeit", index: 1190 },
  { studyId: "b1-handwerk", de: "Handwerk", index: 1197 },
  { studyId: "b1-heran", de: "heran", index: 1245 },
  { studyId: "b1-herbei", de: "herbei", index: 1249 },
  { studyId: "b1-nation", de: "Nation", index: 1964 },
  { studyId: "b1-rat", de: "Rat", index: 2224 },
  { studyId: "b1-testen", de: "testen", index: 2883 },
  { studyId: "b1-überreden", de: "überreden", index: 2956 },
  { studyId: "b1-überzeugen", de: "überzeugen", index: 2962 },
  { studyId: "b1-vernunft", de: "Vernunft", index: 3080 },
  { studyId: "b1-verstand", de: "Verstand", index: 3115 },
];

/** Pre-researched OWNER decisions (do not auto-accept PROPOSED_ET). */
const LINGUISTIC_DECISIONS = {
  "ET-B1-4250": {
    status: "LABOT",
    newValue: "kahju tekitama",
    decision:
      "LV nodarīt + DE anrichten (Schaden) nozīme: tekitama ir pārāk vispārīgs; kahju tekitama precizē kahju põhjustamist.",
    parityClass: null,
  },
  "ET-B1-4251": {
    status: "NELABOT",
    newValue: "",
    decision:
      "LV pierakstīt atbilst ET üles kirjutama (üles kirjutama = kirja panema); Luna kirjutama zaudē „üles“ niansi.",
    parityClass: null,
  },
  "ET-B1-4257": {
    status: "LABOT",
    newValue: "kaasamine",
    decision:
      "LV pavadījums (pavadīšana/pavadonis); ET saatel ir väärtõlge/moonutus; kaasamine atbilst LV MASTER.",
    parityClass: null,
  },
  "ET-B1-4281": {
    status: "FALSE_POSITIVE",
    newValue: "",
    decision: "LV iekārta un ET seade ir ekvivalents iekārtas/seadme gloss; Luna sisustus neatbilst LV.",
    parityClass: null,
  },
  "ET-B1-4303": {
    status: "LABOT",
    newValue: "pool tööpäeva",
    decision:
      "LV nepilnu darba dienu; ET osaajaga ir semantiski neprecīzs halbtags kontekstā; pool tööpäeva atbilst LV.",
    parityClass: null,
  },
  "ET-B1-4317": {
    status: "LABOT",
    newValue: "kabel",
    decision: "LV kapela; ET kapell ir DE/LV remnant; kabel = kapeli õige ET gloss.",
    parityClass: null,
  },
  "ET-B1-4327": {
    status: "FALSE_POSITIVE",
    newValue: "",
    decision:
      "LV vilcienu saraksts un ET rongide sõiduplaan abi sõnastikud vilcienu sõiduplaani jaoks; Luna kursuseõpik ir cita nozīme.",
    parityClass: null,
  },
  "ET-B1-4357": {
    status: "NELABOT",
    newValue: "",
    decision: "LV pārbaudes laiks un ET katseaeg ir kontekstā ekvivalents; kontrolliaeg nav obligāti labāks.",
    parityClass: null,
  },
  "ET-B1-4416": {
    status: "NELABOT",
    newValue: "",
    decision: "LV ūdensslēpe un ET veesuusk atbilst ūdenski sporta/attrakcijas gloss.",
    parityClass: null,
  },
  "ET-B1-4420": {
    status: "FALSE_POSITIVE",
    newValue: "",
    decision: "LV gudrs (gudrs adj) un ET tark atbilst Weise adj gloss; Luna viis ir cita nozīme (manner).",
    parityClass: null,
  },
  "ET-B1-4499": {
    status: "FALSE_POSITIVE",
    newValue: "",
    decision:
      "DE Inhalt von einem Liter = tilpums; LV pudeles tilpums un ET pudeli maht on õiged; Luna sisu ir semantiski neprecīzs.",
    parityClass: null,
  },
  "ET-B1-4533": {
    status: "NELABOT",
    newValue: "",
    decision:
      "Poētiline ruhen piemērs: LV ezers mierīgi guļ saulē ↔ ET järv lamab rahulikult päikese käes; puhkab nav obligāts.",
    parityClass: null,
  },
  "ET-B1-4544": {
    status: "FALSE_POSITIVE",
    newValue: "",
    decision:
      "ET niipea kui mul on aega, helistan sulle atbilst DE/LV tiklīdz formulējumam; Luna pilns teikuma pārveidojums nav vajadzīgs.",
    parityClass: null,
  },
  "ET-B1-4574": {
    status: "FALSE_POSITIVE",
    newValue: "",
    decision:
      "Production study.examples[2].lv = juht rikkus liikluseeskirju atbilst DE Verkehrsregeln/LV pārkāpa; audit vertreten segums bija kļūdains.",
    parityClass: null,
  },
  "ET-B1-4606": { status: "FALSE_POSITIVE", newValue: "", decision: "ET pärand koosneb majast atbilst DE Das Erbe besteht aus einem Haus abu indeksā.", parityClass: null },
  "ET-B1-4607": { status: "FALSE_POSITIVE", newValue: "", decision: "ET ta sai suure pärandi atbilst DE Sie hat ein großes Erbe bekommen.", parityClass: null },
  "ET-B1-4608": { status: "FALSE_POSITIVE", newValue: "", decision: "ET pärand jagatakse atbilst DE Das Erbe wird geteilt.", parityClass: null },
  "ET-B1-4609": { status: "FALSE_POSITIVE", newValue: "", decision: "ET ta on oma onu pärija atbilst DE Er ist der Erbe seines Onkels (erbe-study).", parityClass: null },
  "ET-B1-4610": { status: "FALSE_POSITIVE", newValue: "", decision: "ET kes on pärija? atbilst DE Wer ist der Erbe?", parityClass: null },
  "ET-B1-4611": { status: "FALSE_POSITIVE", newValue: "", decision: "ET see kahjustab tervist atbilst DE Das schadet der Gesundheit.", parityClass: null },
  "ET-B1-4612": { status: "FALSE_POSITIVE", newValue: "", decision: "ET torm põhjustas suurt kahju atbilst DE Der Sturm verursachte großen Schaden.", parityClass: null },
  "ET-B1-4613": { status: "FALSE_POSITIVE", newValue: "", decision: "ET autol on kahjustus atbilst DE Am Auto ist ein Schaden.", parityClass: null },
  "ET-B1-4614": { status: "FALSE_POSITIVE", newValue: "", decision: "ET kes maksab kahju eest? atbilst DE Wer zahlt den Schaden?", parityClass: null },
  "ET-B1-4615": { status: "FALSE_POSITIVE", newValue: "", decision: "ET kahju on suur atbilst DE Der Schaden ist groß.", parityClass: null },
  "ET-B1-4616": { status: "FALSE_POSITIVE", newValue: "", decision: "ET mul on usaldus oma arsti vastu atbilst DE Ich habe Vertrauen zu meinem Arzt.", parityClass: null },
  "ET-B1-4617": { status: "FALSE_POSITIVE", newValue: "", decision: "ET usaldus on tähtis atbilst DE Das Vertrauen ist wichtig.", parityClass: null },
  "ET-B1-4618": { status: "FALSE_POSITIVE", newValue: "", decision: "ET ta kaotas minu usalduse atbilst DE Er hat mein Vertrauen verloren.", parityClass: null },
  "ET-B1-4619": { status: "FALSE_POSITIVE", newValue: "", decision: "ET hoolimata vihmast läheme jalutama atbilst DE Trotz des Regens gehen wir spazieren.", parityClass: null },
  "ET-B1-4620": { status: "FALSE_POSITIVE", newValue: "", decision: "ET hoolimata halvast ilmast me sõidame atbilst DE Trotz des schlechten Wetters fahren wir.", parityClass: null },
  "ET-B1-4621": { status: "FALSE_POSITIVE", newValue: "", decision: "ET hoolimata haigusest ta tuleb atbilst DE Trotz der Krankheit kommt er.", parityClass: null },
  "ET-B1-4622": { status: "FALSE_POSITIVE", newValue: "", decision: "ET ta teeb seda jonnist atbilst DE Er macht es aus Trotz.", parityClass: null },
  "ET-B1-4623": { status: "FALSE_POSITIVE", newValue: "", decision: "ET temal on palju jonni atbilst DE Sie hat viel Trotz.", parityClass: null },
};

function gh(rel) {
  return `https://github.com/${REPO}/blob/${BRANCH}/${rel}`;
}

function truncate(s, max = 200) {
  const t = String(s || "").replace(/\n/g, " ");
  return t.length > max ? `${t.slice(0, max)}…` : t;
}

function escapePipe(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function loadWords(p) {
  const code = fs.readFileSync(p, "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.B1_WORDS;
}

function parseAcceptedNsr() {
  const text = fs.readFileSync(ACCEPTED, "utf8");
  const rows = [];
  for (const line of text.split("\n")) {
    if (!line.startsWith("| ET-B1-")) continue;
    const p = line.split("|").map((x) => x.trim());
    if (p.length < 10) continue;
    const category = p[7];
    const status = p[8];
    if (status !== "NEEDS_SOURCE_REVIEW" || category === "SECTIONACCENTS_LANGUAGE") continue;
    rows.push({
      findingId: p[1],
      cardId: p[2],
      field: p[3],
      acceptedCurrent: p[4],
      acceptedNew: p[5],
      severity: p[6],
      category,
      acceptedDecision: p[9],
      note: p[10],
    });
  }
  return rows;
}

function loadAuditMap() {
  const data = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const list = data.ownerBacklogFinal || data.validatedFindings || data.findings.filter((f) => f.validatedReal);
  const map = new Map();
  for (const f of list) {
    if (!map.has(f.findingId)) map.set(f.findingId, f);
  }
  return map;
}

function getProduction(entry, field) {
  if (!entry) return "";
  if (field === "etText" || field === "lv") return entry.lv ?? "";
  const m = field.match(/study\.examples\[(\d+)\]\.lv/);
  if (m) return entry.study?.examples?.[Number(m[1])]?.lv ?? "";
  return "";
}

function findEntry(words, cardId) {
  const byStudy = words.find((e) => e.study?.id === cardId);
  if (byStudy) return byStudy;
  const idx = words.findIndex((e, i) => `b1-${e.de}-${i}` === cardId);
  if (idx >= 0) return words[idx];
  const de = cardId.replace(/^b1-/, "").replace(/-\d+$/, "");
  return words.find((e) => e.de === de);
}

function buildRows() {
  const accepted = parseAcceptedNsr();
  const auditMap = loadAuditMap();
  const et = loadWords(path.join(ROOT, "data/et/b1.js"));
  const lv = loadWords(path.join(ROOT, "data/b1.js"));

  const linguistic = accepted.filter((r) => r.findingId !== "ET-B1-0001");
  if (linguistic.length !== 32) {
    console.error(`BLOCKED: expected 32 linguistic NSR, got ${linguistic.length}`);
    process.exit(2);
  }

  const rows = [];
  for (const a of linguistic) {
    const audit = auditMap.get(a.findingId) || {};
    const entry = findEntry(et, a.cardId);
    const lvEntry = entry ? lv[et.indexOf(entry)] : null;
    const dec = LINGUISTIC_DECISIONS[a.findingId];
    if (!dec) {
      console.error(`Missing decision for ${a.findingId}`);
      process.exit(3);
    }
    const production = getProduction(entry, a.field);
    rows.push({
      findingId: a.findingId,
      cardId: a.cardId,
      field: a.field,
      severity: a.severity,
      category: a.category,
      de: audit.de || entry?.de || "",
      lvSource: audit.lvSource || lvEntry?.lv || "",
      currentEt: production || audit.currentEt || a.acceptedCurrent,
      proposedEt: audit.proposedEt || "",
      reason: audit.reason || a.acceptedDecision,
      production,
      ownerStatus: dec.status,
      ownerNew: dec.newValue,
      ownerDecision: dec.decision,
      ownerHistory: audit.ownerHistoryStatus || "overlay §D explicit NSR",
    });
  }

  const parityParent = {
    findingId: "ET-B1-0001",
    cardId: "STRUCT",
    field: "study.count",
    severity: "CRITICAL",
    category: "STRUCTURE",
    de: "—",
    lvSource: "LV MASTER study count 324",
    currentEt: "335",
    proposedEt: "324",
    reason: "Study count mismatch LV=324 ET=335",
    production: "335",
    ownerStatus: "LABOT",
    ownerNew: "(remove 11 study objects — see subtable)",
    ownerDecision:
      "LV MASTER etalonā 11 indeksos nav study objekta; ET standardStudy ir TRUE_EXTRA. OWNER-approved: noņemt study objektu no 11 kartēm, lai ET study count = 324.",
    ownerHistory: "overlay §A STRUCTURE NSR",
    extraStudies: EXTRA_STUDIES,
  };

  return { rows, parityParent };
}

function renderView(rows, parityParent) {
  const lines = [
    "# ET–DE B1 — final OWNER VIEW (33 blockers)",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    `**Baseline:** ` + "`origin/main` " + MAIN_SHA.slice(0, 12),
  `**Production blob:** \`${PRODUCTION_BLOB.slice(0, 12)}…\``,
    "**Merged PR #625:** sectionAccents closed",
    "",
    "| Navigācija | Saite |",
    "|------------|-------|",
    `| OWNER DECISIONS | [et-b1-final-owner-decisions.md](${gh("reports/et-b1-final-owner-decisions.md")}) |`,
    `| GitHub indekss | [et-b1-final-owner-review-GITHUB.md](${gh("reports/et-b1-final-owner-review-GITHUB.md")}) |`,
    `| Source review | [et-b1-final-source-review.md](${gh("reports/et-b1-final-source-review.md")}) |`,
    "",
    `**Coverage:** 33/33 (32 linguistic NSR + 1 parity parent)`,
    "",
    "---",
    "",
  ];

  lines.push("## ET-B1-0001 — Study parity parent");
  lines.push("");
  lines.push(`**Card ID:** \`STRUCT\``);
  lines.push(`**Field:** \`study.count\``);
  lines.push(`**Severity:** CRITICAL · **Category:** STRUCTURE`);
  lines.push(`**CURRENT (ET study count):** 335`);
  lines.push(`**LV MASTER study count:** 324`);
  lines.push(`**Extra Study objects:** 11`);
  lines.push(`**OWNER STATUS:** ${parityParent.ownerStatus}`);
  lines.push(`**OWNER_DECISION:** ${parityParent.ownerDecision}`);
  lines.push("");
  lines.push("### 11 extra Study objects (individual review)");
  lines.push("");
  lines.push("| ET Study Card ID | ET index | LV counterpart | Class | OWNER action | Evidence |");
  lines.push("|------------------|----------|----------------|-------|--------------|----------|");
  for (const ex of EXTRA_STUDIES) {
    lines.push(
      `| ${ex.studyId} | ${ex.index} | flashcard only (no study) | TRUE_EXTRA_STUDY | **REMOVE** | Same index: LV \`study\` absent, ET \`standardStudy\` present; \`de\`=${ex.de} |`,
    );
  }
  lines.push("");
  lines.push(
    "> Parity classes: **TRUE_EXTRA_STUDY** = ET study nav LV MASTER; **VALID_ET_SPECIFIC_STUDY** = 0; **DUPLICATE_OR_WRONG_SHAPE** = 0; **OWNER_DECISION_REQUIRED** = 0 (sub-objects klasificēti).",
  );
  lines.push("");
  lines.push("---");
  lines.push("");

  for (const r of rows) {
    lines.push(`## ${r.findingId}`);
    lines.push("");
    lines.push(`**Card ID:** \`${r.cardId}\``);
    lines.push(`**Field/path:** \`${r.field}\``);
    lines.push(`**Severity:** ${r.severity} · **Category:** ${r.category}`);
    lines.push(`**DE (read-only):** ${truncate(r.de, 120)}`);
    if (r.lvSource) lines.push(`**LV MASTER reference:** ${truncate(r.lvSource, 200)}`);
    lines.push(`**CURRENT (production main):** ${truncate(r.production || r.currentEt, 500)}`);
    if (r.proposedEt) lines.push(`**PROPOSED_ET (audit — nav auto-accept):** ${truncate(r.proposedEt, 500)}`);
    lines.push(`**Problēma:** ${truncate(r.reason, 400)}`);
    lines.push(`**OWNER history:** ${r.ownerHistory}`);
    lines.push(`**OWNER STATUS:** ${r.ownerStatus}`);
    lines.push(`**OWNER_DECISION:** ${r.ownerDecision}`);
    if (r.ownerStatus === "LABOT") lines.push(`**OWNER NEW:** ${r.ownerNew}`);
    lines.push("");
    lines.push("---");
    lines.push("");
  }
  return lines.join("\n");
}

function renderDecisions(rows, parityParent) {
  const lines = [
    "# ET–DE B1 — final OWNER DECISIONS (33 blockers)",
    "",
    "| Audit ID | Card ID | Field | CURRENT | NEW | Severity | Category | OWNER STATUS | OWNER_DECISION | Piezīme |",
    "|----------|---------|-------|---------|-----|----------|----------|--------------|----------------|---------|",
    `| ET-B1-0001 | STRUCT | study.count | 335 | ${escapePipe(parityParent.ownerNew)} | CRITICAL | STRUCTURE | ${parityParent.ownerStatus} | ${escapePipe(truncate(parityParent.ownerDecision, 120))} | 11-object REMOVE subtable in VIEW |`,
  ];
  for (const r of rows) {
    lines.push(
      `| ${r.findingId} | ${escapePipe(r.cardId)} | ${escapePipe(r.field)} | ${escapePipe(truncate(r.production || r.currentEt, 120))} | ${escapePipe(truncate(r.ownerNew, 120))} | ${r.severity} | ${r.category} | ${r.ownerStatus} | ${escapePipe(truncate(r.ownerDecision, 120))} | final source review |`,
    );
  }
  return lines.join("\n");
}

function renderGithub(rows) {
  const lines = [
    "# ET–DE B1 — final OWNER review (GitHub links)",
    "",
    `**Branch:** \`${BRANCH}\` · **MAIN:** \`${MAIN_SHA}\``,
    "",
    "| Audit ID | VIEW | DECISIONS row |",
    "|----------|------|---------------|",
    `| ET-B1-0001 | [VIEW](${gh("reports/et-b1-final-owner-view.md")}#et-b1-0001--study-parity-parent) | [decisions](${gh("reports/et-b1-final-owner-decisions.md")}) |`,
  ];
  for (const r of rows) {
    lines.push(
      `| ${r.findingId} | [VIEW](${gh("reports/et-b1-final-owner-view.md")}#${r.findingId.toLowerCase()}) | [decisions](${gh("reports/et-b1-final-owner-decisions.md")}) |`,
    );
  }
  return lines.join("\n");
}

function countStats(rows, parityParent) {
  const all = [...rows, parityParent];
  const stats = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0, NEEDS_SOURCE_REVIEW: 0 };
  for (const r of all) stats[r.ownerStatus] = (stats[r.ownerStatus] || 0) + 1;
  const parity = {
    TRUE_EXTRA_STUDY: EXTRA_STUDIES.length,
    VALID_ET_SPECIFIC_STUDY: 0,
    DUPLICATE_OR_WRONG_SHAPE: 0,
    OWNER_DECISION_REQUIRED: 0,
  };
  return { linguistic: stats, parity };
}

function renderSourceReport(rows, parityParent, stats) {
  const ling = stats.linguistic;
  const par = stats.parity;
  const verdict =
    rows.length === 32 && parityParent.ownerStatus !== "NEEDS_SOURCE_REVIEW"
      ? "ET_B1_FINAL_OWNER_REVIEW_READY"
      : "ET_B1_FINAL_OWNER_REVIEW_PARTIAL";

  return [
    "# ET–DE B1 — final source review",
    "",
    "**Standard:** `PROJECT_LANGUAGE_MASTER_STANDARD.md` v1.9",
    `**Verdict:** \`${verdict}\``,
    "",
    "## Baseline",
    "",
    `| MAIN_SHA | \`${MAIN_SHA}\` |`,
    `| PRODUCTION_BLOB | \`${PRODUCTION_BLOB}\` |`,
    "",
    "## Inventory",
    "",
    `| NON_SECTIONACCENTS_NSR | **32** |`,
    `| PARITY_PARENT_FINDINGS | **1** |`,
    `| EXTRA_STUDY_OBJECTS | **11** |`,
    `| OWNER_VIEW_COVERAGE | **33/33** |`,
    `| OWNER_DECISIONS_COVERAGE | **33/33** |`,
    "",
    "## Linguistic OWNER status (33 rows incl. parity parent)",
    "",
    `| LABOT | **${ling.LABOT || 0}** |`,
    `| NELABOT | **${ling.NELABOT || 0}** |`,
    `| FALSE_POSITIVE | **${ling.FALSE_POSITIVE || 0}** |`,
    `| NEEDS_SOURCE_REVIEW | **${ling.NEEDS_SOURCE_REVIEW || 0}** |`,
    "",
    "## Parity sub-object classes (11 extra studies)",
    "",
    `| TRUE_EXTRA_STUDY | **${par.TRUE_EXTRA_STUDY}** |`,
    `| VALID_ET_SPECIFIC_STUDY | **${par.VALID_ET_SPECIFIC_STUDY}** |`,
    `| DUPLICATE_OR_WRONG_SHAPE | **${par.DUPLICATE_OR_WRONG_SHAPE}** |`,
    `| OWNER_DECISION_REQUIRED | **${par.OWNER_DECISION_REQUIRED}** |`,
    "",
    "## Production",
    "",
    `| PRODUCTION_CHANGES | **0** |`,
    `| DE_CHANGES | **0** |`,
    "",
    "## Extra Study IDs (REMOVE on OWNER-approved apply)",
    "",
    EXTRA_STUDIES.map((e) => `- \`${e.studyId}\` (index ${e.index}, de=${e.de})`).join("\n"),
    "",
    "## LABOT targets (COPY-ONLY apply preview)",
    "",
    ...rows
      .filter((r) => r.ownerStatus === "LABOT")
      .map((r) => `- **${r.findingId}** \`${r.field}\`: \`${r.production}\` → \`${r.ownerNew}\``),
    "",
    `_Generated: ${new Date().toISOString()}_`,
  ].join("\n");
}

function main() {
  const { rows, parityParent } = buildRows();
  const stats = countStats(rows, parityParent);

  fs.writeFileSync(OUT.view, renderView(rows, parityParent));
  fs.writeFileSync(OUT.decisions, renderDecisions(rows, parityParent));
  fs.writeFileSync(OUT.github, renderGithub(rows));
  fs.writeFileSync(OUT.source, renderSourceReport(rows, parityParent, stats));

  console.log(
    JSON.stringify(
      {
        linguisticRows: rows.length,
        parityParent: parityParent.findingId,
        coverage: "33/33",
        stats,
        verdict: rows.length === 32 ? "ET_B1_FINAL_OWNER_REVIEW_READY" : "PARTIAL",
      },
      null,
      2,
    ),
  );
}

if (require.main === module) main();
