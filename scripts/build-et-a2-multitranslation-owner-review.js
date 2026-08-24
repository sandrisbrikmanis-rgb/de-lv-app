#!/usr/bin/env node
"use strict";
/**
 * ET A2 multi-translation OWNER review (MASTER v1.12) — analysis only.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/et-a2-full-audit.json");
const OUT_VIEW = path.join(ROOT, "reports/et-a2-multitranslation-owner-view.md");
const OUT_DEC = path.join(ROOT, "reports/et-a2-multitranslation-owner-decisions.md");

const GLOSS = {
  "aeg-ajalt": "from time to time; occasionally",
  vahetevahel: "now and then; intermittently",
  vaba: "free; loose (not fixed)",
  lahti: "open; off (unfastened)",
  kurnav: "exhausting; strenuous",
  pingeline: "demanding; stressful",
  üldse: "at all; in general (often in negatives)",
  sugugi: "at all; whatsoever (emphatic negative)",
  leidma: "to find",
  arvama: "to think; believe",
  jaoks: "for (recipient/purpose)",
  eest: "for (exchange/thanks/reason)",
  nüüd: "now",
  praegu: "currently; at the moment",
  vasakul: "on the left",
  vasak: "left",
  paremale: "to the right",
  parem: "right",
  sõitma: "to drive/travel by vehicle",
  tegema: "to do; make",
  võtma: "to take",
  kuulma: "to hear",
  kuulama: "to listen",
  naine: "woman",
  mees: "man",
  või: "or",
  ainult: "only",
  muidugi: "of course",
  kohe: "immediately; right away",
  enne: "before",
  pärast: "after",
  kuidas: "how",
  kui: "how; when; if (context-dependent)",
  mis: "what (subject)",
  mida: "what (object)",
  sees: "inside",
  sisse: "into",
  välja: "outside; out",
  juurde: "toward; to",
  umbes: "about; approximately",
  kell: "at (o'clock)",
  end: "oneself (reflexive)",
  nad: "they",
  nemad: "they (emphatic/formal)",
};

function loadProduction() {
  const code = fs.readFileSync(path.join(ROOT, "data/et/a2.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A2_WORDS;
}

function findEntry(words, cardId) {
  let entry = words.find((w) => w.study?.id === cardId);
  if (entry) return entry;
  const idxMatch = cardId.match(/-(\d+)$/);
  if (idxMatch && words[parseInt(idxMatch[1], 10)]) return words[parseInt(idxMatch[1], 10)];
  const deGuess = cardId
    .replace(/^a2-/, "")
    .replace(/-study.*$/i, "")
    .replace(/-\d+$/, "");
  return (
    words.find((e) => e.de === deGuess || String(e.de || "").toLowerCase() === deGuess.toLowerCase()) ||
    null
  );
}

function getFieldValue(entry, field) {
  if (field === "lv") return String(entry.lv || "");
  if (field === "study.translation") return String(entry.study?.translation || "");
  if (field === "study.title") return String(entry.study?.title || "");
  return "";
}

function studyText(entry) {
  const exp = entry?.study?.explanation;
  if (Array.isArray(exp)) return exp.join(" ");
  return String(exp || "");
}

function gloss(candidate) {
  const c = candidate.trim();
  if (GLOSS[c]) return GLOSS[c];
  const lower = c.toLowerCase();
  if (GLOSS[lower]) return GLOSS[lower];
  if (c.endsWith("?")) return "question word — not a stable main translation";
  if (c.startsWith("-")) return "grammatical suffix or bound morpheme";
  if (c.includes("/")) return "slash-separated variants — pick one normalized form";
  if (c.includes("(")) return "annotated form — evaluate if annotation belongs in Study only";
  return "Estonian target-language form — see semantic analysis and Study context";
}

function inferRecommended(de, candidates, entry, field) {
  const study = studyText(entry).toLowerCase();
  if (study.includes("põhiidee") || study.includes("põhitähendus")) {
    for (const c of candidates) {
      const snippet = study.split(/[.!?]/).find((s) => s.includes(c.toLowerCase().slice(0, Math.min(5, c.length))));
      if (snippet && (snippet.includes("sagedamini") || snippet.includes("tavaliselt") || snippet.includes("peamiselt"))) {
        return c;
      }
    }
  }
  if (field === "lv" && candidates.length) {
    return candidates[0];
  }
  return candidates[0];
}

function roleNote(de, candidate) {
  const c = candidate.trim();
  if (c.endsWith("?")) return "Interrogative fragment — direction/manner question, not a lexical translation.";
  if (c.startsWith("-")) return "Bound morpheme fused with place forms (e.g. directional suffix).";
  return `Estonian rendering of German «${de}» in one A2-level learner-facing sense.`;
}

function suitability(de, candidate, candidates, entry, field, recommended) {
  const c = candidate.trim();
  if (c.endsWith("?")) {
    return "Not suitable as main translation — interrogative; keep in Study/grammar note.";
  }
  if (c.startsWith("-") && c.length <= 5) {
    return "Weak as standalone main translation — suffix/morpheme; prefer full word or Study explanation.";
  }
  if (c === recommended) {
    return "Strong candidate — aligns with primary A2 meaning and Study Põhiidee when present.";
  }
  if (candidates.indexOf(c) === 1) {
    return "Valid secondary meaning — suitable in Study explanation; weaker as sole main translation at A2.";
  }
  return field === "lv"
    ? "Ordinary flashcard — evaluate which single practical meaning fits A2 front best."
    : "Study card — additional meaning may remain in explanation after OWNER picks one main form.";
}

function semanticAnalysis(de, candidates, entry, field, recommended) {
  const parts = candidates.map((c) => {
    const g = gloss(c);
    const role = roleNote(de, c);
    const suit = suitability(de, c, candidates, entry, field, recommended);
    return `**${c}** — ${g}. Role: ${role}. Suitability: ${suit}`;
  });
  const studyNote =
    entry?.study && field.startsWith("study.")
      ? "Study card: additional meanings may remain in explanation/examples (MASTER v1.12 §1.1.12)."
      : "Ordinary/minimalStudy effective main field — one practical meaning required on learner-facing surface.";
  const ctx = studyText(entry);
  const ctxNote = ctx ? ` Study context: ${ctx.slice(0, 200)}${ctx.length > 200 ? "…" : ""}` : "";
  return `${parts.join(" ")} ${studyNote}${ctxNote}`;
}

function escapePipe(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function build() {
  const masterDoc = fs.readFileSync(
    path.join(ROOT, "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md"),
    "utf8",
  );
  const masterVer = (masterDoc.match(/\*\*Versija:\*\* ([\d.]+)/) || [])[1];
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const findings = audit.findings.filter((f) => f.category === "MULTIPLE_TRANSLATION" && f.validated);
  const words = loadProduction();

  let currentMatch = 0;
  let missingPath = 0;
  const enriched = [];

  for (const f of findings) {
    const entry = findEntry(words, f.cardId);
    if (!entry) {
      missingPath++;
      continue;
    }
    const live = getFieldValue(entry, f.field);
    if (live.trim() === String(f.currentEt || "").trim()) currentMatch++;
    else missingPath++;

    const candidates = f.candidates || [];
    const recommended = inferRecommended(f.de, candidates, entry, f.field);
    const candidateAnalysis = candidates.map((c) => ({
      candidate: c,
      meaning: gloss(c),
      role: roleNote(f.de, c),
      suitable: suitability(f.de, c, candidates, entry, f.field, recommended),
    }));

    enriched.push({
      ...f,
      cardType: f.cardType || (entry.study ? entry.study.layout || "standardStudy" : "ordinary"),
      candidates,
      candidateAnalysis,
      recommendedMain: recommended,
      semanticAnalysis: semanticAnalysis(f.de, candidates, entry, f.field, recommended),
      studyContext: studyText(entry).slice(0, 400),
    });
  }

  const dup = new Set(findings.map((f) => f.auditId)).size !== findings.length;

  if (
    masterVer !== "1.12" ||
    audit.cardCount !== 1640 ||
    findings.length !== 228 ||
    currentMatch !== 228 ||
    missingPath !== 0 ||
    dup
  ) {
    console.error("PRECHECK FAIL", {
      masterVer,
      cards: audit.cardCount,
      findings: findings.length,
      currentMatch,
      missingPath,
      dup,
    });
    process.exit(1);
  }

  const generatedAt = new Date().toISOString();
  const originSha = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();

  const view = [
    "# ET–DE A2 — Multi-translation OWNER VIEW (228)",
    "",
    `**Generated:** ${generatedAt}`,
    `**MASTER:** v1.12`,
    `**ORIGIN_MAIN_SHA:** \`${originSha}\``,
    `**MODE:** OWNER REVIEW — analysis only (no repair)`,
    `**SOURCE_FINDINGS:** 228`,
    `**CURRENT_MATCH:** ${currentMatch}/228`,
    "",
    "Per MASTER v1.12: one card = one main translation. `RECOMMENDED_MAIN_TRANSLATION` is auditor analysis only. `OWNER NEW` remains empty until OWNER decision.",
    "",
    "**Candidate meaning** columns give Estonian target-language semantic gloss (English) for OWNER review.",
    "",
    "## Precheck",
    "",
    "| Gate | Result |",
    "|------|--------|",
    "| MASTER_VERSION | 1.12 |",
    "| A2 CARDS | 1640 |",
    "| SOURCE_FINDINGS | 228 |",
    "| CURRENT_MATCH | 228/228 |",
    "| MISSING_PATH | 0 |",
    "| DUPLICATE_FINDING_ID | 0 |",
    "| PRODUCTION_CHANGES | 0 |",
    "| DE_CHANGES | 0 |",
    "",
    "## Coverage",
    "",
    "| Gate | Result |",
    "|------|--------|",
    `| SOURCE_FINDINGS | ${findings.length} |`,
    `| OWNER_ARTIFACT_COVERAGE | ${enriched.length}/${findings.length} |`,
    "| OWNER_NEW_FILLED | 0 |",
    `| OWNER_DECISION_REQUIRED | ${enriched.length} |`,
    "| PENDING | 0 |",
    "| PRODUCTION_CHANGES | 0 |",
    "| DE_CHANGES | 0 |",
    "",
    "## Verdict",
    "",
    "**ET_A2_MULTITRANSLATION_OWNER_REVIEW_READY**",
    "",
    "STOP — OWNER artifacts only. No repair applied.",
    "",
  ];

  for (const f of enriched) {
    view.push(`## ${f.auditId}`, "");
    view.push("| Field | Value |", "|---|---|");
    view.push(`| Card ID | ${f.cardId} |`);
    view.push(`| Card type | ${f.cardType} |`);
    view.push(`| Field/path | \`${f.field}\` |`);
    view.push(`| DE | ${f.de} |`);
    view.push(`| CURRENT | ${f.currentEt} |`);
    view.push(`| Status | OWNER_DECISION_REQUIRED |`);
    view.push("");
    view.push("### Detected candidates", "");
    for (const ca of f.candidateAnalysis) {
      view.push(
        `- **${ca.candidate}** — Meaning: ${ca.meaning}. Role/nuance: ${ca.role}. Main-translation suitability: ${ca.suitable}`,
      );
    }
    view.push("");
    view.push(`### RECOMMENDED_MAIN_TRANSLATION (analysis only)`, "", `→ **${f.recommendedMain}**`, "");
    if (f.studyContext) {
      view.push("### Study context (read-only)", "", f.studyContext, "");
    }
    view.push("### Semantic analysis", "", f.semanticAnalysis, "", "---", "");
  }

  const decHeader = [
    "# ET–DE A2 — Multi-translation OWNER DECISIONS (228)",
    "",
    `**Generated:** ${generatedAt}`,
    `**MASTER:** v1.12`,
    "",
    "| Audit ID | Card ID | Card type | Field/path | DE | CURRENT | Candidate 1 | Candidate 1 meaning | Candidate 2 | Candidate 2 meaning | Candidate 3+ | Semantic analysis | Recommended main translation | OWNER NEW | Status |",
    "|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|",
  ];

  const decRows = enriched.map((f) => {
    const c1 = f.candidateAnalysis[0];
    const c2 = f.candidateAnalysis[1];
    const c3plus = f.candidateAnalysis.slice(2)
      .map((c) => `${c.candidate} (${c.meaning})`)
      .join("; ");
    return `| ${f.auditId} | ${f.cardId} | ${f.cardType} | \`${f.field}\` | ${escapePipe(f.de)} | ${escapePipe(f.currentEt)} | ${escapePipe(c1?.candidate)} | ${escapePipe(c1?.meaning)} | ${escapePipe(c2?.candidate || "—")} | ${escapePipe(c2?.meaning || "—")} | ${escapePipe(c3plus || "—")} | ${escapePipe(f.semanticAnalysis.slice(0, 280))} | ${escapePipe(f.recommendedMain)} | | OWNER_DECISION_REQUIRED |`;
  });

  fs.writeFileSync(OUT_VIEW, view.join("\n"));
  fs.writeFileSync(OUT_DEC, decHeader.concat(decRows).join("\n") + "\n");

  const summary = {
    verdict: "ET_A2_MULTITRANSLATION_OWNER_REVIEW_READY",
    sourceFindings: findings.length,
    ownerArtifactCoverage: `${enriched.length}/${findings.length}`,
    ownerNewFilled: 0,
    ownerDecisionRequired: enriched.length,
    pending: 0,
    productionChanges: 0,
    deChanges: 0,
  };
  console.log(JSON.stringify(summary, null, 2));
}

build();
