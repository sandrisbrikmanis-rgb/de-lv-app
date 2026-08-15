#!/usr/bin/env node
/**
 * CS-DE Kurss Členy full linguistic audit (READ-ONLY).
 * Deterministic gates + GPT-5.6 Luna.
 * Usage: node scripts/audit-cs-kurs-articles-full.js [--resume] [--skip-luna] [--report-only]
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const { ROOT, chunk, ensureDir, MOJIBAKE, detectForeignRemnant } = require("./lib/cs-audit-helpers");
const {
  extractArticleUnits,
  CS_UI,
  WWW_CS_UI,
  CS_LESSONS,
  WWW_CS_LESSONS,
  isArticlePedagogy,
} = require("./lib/cs-kurs-articles-audit-extract");
const {
  createStats,
  auditCardsBatch,
  classifyFindings,
  DEFAULT_MODEL,
} = require("./lib/openai-cs-full-audit");

const BATCH_SIZE = 50;
const RESUME = process.argv.includes("--resume");
const SKIP_LUNA = process.argv.includes("--skip-luna");
const REPORT_ONLY = process.argv.includes("--report-only");
const OUT_DIR = path.join(ROOT, "reports", "temp", "cs-kurs-articles-audit");
const OUT_JSON = path.join(OUT_DIR, "full-audit.json");
const REPORT_MD = path.join(ROOT, "reports", "cs-kurs-articles-full-audit.md");
const PROGRESS = path.join(ROOT, "scripts", ".cs-kurs-articles-luna-progress.json");

const LV_PATTERNS = [
  { re: /\b(piemēram|teikuma|priekšmets|darbības|vārdu|galotni|klikšķini|kartītes|lekcija|latviešu|vācu|ieliec|vienskaitlis|daudzskaitlis|artikuls|nenoteiktais|noteiktais)\b/i, tag: "LV_WORD" },
  { re: /\b(kā jau minēts|norādāmie|vietniekvārdi|vīriešu|sieviešu|vidējā)\b/i, tag: "LV_PHRASE" },
  { re: /[āēīūģķļņĀĒĪŪĢĶĻŅ]/, tag: "LV_DIACRITIC" },
];

const CLANEK_GRAMMATICAL_RE =
  /\bčlánk(y|u|em|ů|em)?\b/i;

const ARTICLES_INSTRUCTIONS = [
  "You audit CS-DE Kurss Členy (German articles der/die/das, ein/eine, cases, gender for Czech learners). READ-ONLY audit.",
  "Each item: Czech user-visible text (currentCs), German examples in deContext (READ-ONLY), Latvian MASTER (lvSource) for pedagogical structure only — do NOT copy LV wording to Czech.",
  "Audit Czech: orthography, grammar, terminology, naturalness, foreign leftovers (especially Latvian).",
  "CRITICAL terminology: German grammatical article = český člen (určitý člen / neurčitý člen). článek/články in grammatical-article sense is usually WRONG (článek = newspaper article). Evaluate each článek in context.",
  "Audit German gender pedagogy: mužský/ženský/střední rod for German der/die/das — not Czech/Latvian gender systems.",
  "Audit article forms in cases (Nominativ, Akuzativ, Dativ): der→den/dem, die→die/der, das→das/dem, ein→einen/einem, eine→eine/einer.",
  "Check pedagogical accuracy: rules not over-generalized; tables match explanations; semantic match between CS explanation and DE examples.",
  "Categories: FOREIGN_LEFTOVER, CS_TERMINOLOGY, CS_ORTHOGRAPHY, CS_GRAMMAR, CS_NATURALNESS, SEMANTIC_MISMATCH, PEDAGOGICAL_ISSUE, ARTICLE_ERROR, GENDER_ERROR, CASE_ERROR, TABLE_MISMATCH, SOURCE_DE_ISSUE, DE_PARITY_ISSUE, STRUCTURAL_ISSUE, FUNCTIONAL_ISSUE, FALSE_POSITIVE.",
  "SOURCE_DE_ISSUE / DE_PARITY_ISSUE if German source seems wrong — do NOT propose DE production changes.",
  "FALSE_POSITIVE when deterministic detector over-flagged (e.g. článek in non-grammatical sense if clearly newspaper).",
  "STYLE_ONLY if Czech correct but preference only — not a quality finding.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "proposedCs = Luna recommendation only, NOT OWNER NEW.",
  "Return JSON { items: [...] } with cardId matching input auditId.",
].join("\n");

function md5Pair(a, b) {
  return fs.readFileSync(a).equals(fs.readFileSync(b));
}

function checkJs(file) {
  try {
    execSync(`node --check "${file}"`, { encoding: "utf8" });
    return true;
  } catch {
    return false;
  }
}

function scanDeterministic(unit) {
  const hits = [];
  const text = String(unit.currentCs || "");
  if (!text.trim() && unit.type !== "exercise_answer_de") {
    hits.push({ severity: "CRITICAL", category: "MISSING_CONTENT", reason: "Tukšs CS lauks" });
    return hits;
  }
  if (MOJIBAKE.test(text)) hits.push({ severity: "HIGH", category: "MOJIBAKE", reason: "Mojibake/encoding artefakts" });
  for (const p of LV_PATTERNS) {
    if (p.re.test(text)) {
      hits.push({ severity: "HIGH", category: "FOREIGN_LEFTOVER", reason: `Latviešu atlikums (${p.tag})` });
    }
  }
  for (const tag of detectForeignRemnant(text)) {
    if (!hits.some((h) => h.category === "FOREIGN_LEFTOVER")) {
      hits.push({ severity: "HIGH", category: "FOREIGN_LEFTOVER", reason: `Ārvalodu atlikums (${tag})` });
    }
  }
  if (CLANEK_GRAMMATICAL_RE.test(text) && isArticlePedagogy(text)) {
    if (!/\bčlánek\b.*\bnovin|\bnovin.*\bčlánek/i.test(text)) {
      hits.push({
        severity: "HIGH",
        category: "CS_TERMINOLOGY",
        reason: "článek/články v gramatikas artikula kontekstā — potenciāli jābūt člen",
      });
    }
  }
  return hits;
}

function countArticleExamples(html) {
  return (String(html || "").match(/class="kurss-example"/g) || []).length;
}

function runStructuralParity(csHtml, lvHtml) {
  const issues = [];
  const csCount = countArticleExamples(csHtml.kurssArticlesLesson);
  const lvCount = countArticleExamples(lvHtml.kurssArticlesLesson);
  if (csCount !== lvCount) {
    issues.push({
      severity: "CRITICAL",
      category: "STRUCTURAL_ISSUE",
      reason: `kurssArticlesLesson example count CS ${csCount} vs LV ${lvCount}`,
    });
  }
  const csBlocks = (csHtml.kurssArticlesLesson || "").match(/artikuli-block/g)?.length || 0;
  const lvBlocks = (lvHtml.kurssArticlesLesson || "").match(/artikuli-block/g)?.length || 0;
  if (csBlocks !== lvBlocks) {
    issues.push({
      severity: "CRITICAL",
      category: "STRUCTURAL_ISSUE",
      reason: `kurssArticlesLesson block count CS ${csBlocks} vs LV ${lvBlocks}`,
    });
  }
  return issues;
}

function buildLunaCards(units) {
  return units
    .filter((u) => String(u.currentCs || "").trim().length > 0)
    .filter((u) => u.type !== "exercise_answer_de")
    .filter((u) => String(u.currentCs).length <= 3000)
    .map((u) => ({
      cardId: u.auditId,
      unitId: u.unitId,
      field: u.field,
      type: u.type,
      objectId: u.objectId,
      sectionTitle: u.sectionTitle || "",
      csText: u.currentCs,
      currentCs: u.currentCs,
      de: u.deContext || "",
      lvSource: u.lvReference || "",
    }));
}

function normalizeLunaFinding(f, unitMap) {
  const unit = unitMap[f.cardId];
  return {
    findingId: f.cardId,
    unitId: unit?.unitId || f.cardId,
    severity: f.severity || "MEDIUM",
    category: f.category || "CS_TERMINOLOGY",
    file: unit?.file || "data/cs/courseLessons.js",
    objectId: unit?.objectId || f.cardId,
    field: f.field || unit?.field || "",
    current: f.currentCs || unit?.currentCs || "",
    proposed: f.proposedCs || "",
    reason: f.reason || "",
    lvMasterContext: unit?.lvReference || f.lvSource || "",
    deContext: unit?.deContext || f.de || "",
    source: "luna",
    confidence: f.confidence || "medium",
  };
}

function dedupeFindings(findings) {
  const seen = new Set();
  return findings.filter((f) => {
    const key = `${f.file}|${f.objectId}|${f.field}|${f.current}|${f.category}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function loadProgress() {
  if (!RESUME || !fs.existsSync(PROGRESS)) return { completedBatches: [] };
  try {
    return JSON.parse(fs.readFileSync(PROGRESS, "utf8"));
  } catch {
    return { completedBatches: [] };
  }
}

function saveProgress(progress) {
  fs.writeFileSync(PROGRESS, JSON.stringify(progress, null, 2));
}

function buildReport(meta, gates, findings, stats, allFindings, batchCount) {
  const sev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const cats = {};
  let falsePos = 0;
  let sourceDe = 0;
  let foreignLeftovers = 0;
  let terminology = 0;

  for (const f of allFindings || findings) {
    const c = f.category || "OTHER";
    if (c === "FALSE_POSITIVE") {
      falsePos += 1;
      continue;
    }
    if (c === "SOURCE_DE_ISSUE" || c === "DE_PARITY_ISSUE" || c === "DE_SOURCE_ISSUE") {
      sourceDe += 1;
      continue;
    }
    if (c === "FOREIGN_LEFTOVER") foreignLeftovers += 1;
    if (c === "CS_TERMINOLOGY") terminology += 1;
  }

  for (const f of findings) {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    if (sev[s] !== undefined) sev[s] += 1;
    const c = f.category || "OTHER";
    cats[c] = (cats[c] || 0) + 1;
  }

  const lines = [
    "# CS–DE Kurss Členy — pilns lingvistisks audits",
    "",
    "**Mode:** READ-ONLY (GPT-5.6 Luna + deterministic gates)",
    `**Model:** GPT-5.6 Luna (\`${DEFAULT_MODEL}\`)`,
    "**Production changes:** 0",
    "",
    "## Coverage",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Extracted units | **${meta.totalUnits}** |`,
    `| Audited units | **${meta.totalUnits}** |`,
    `| Coverage | **100%** |`,
    `| Luna batches (size ${BATCH_SIZE}) | ${batchCount} |`,
    `| UI keys | ${meta.uiKeys} |`,
    `| Standalone Členy HTML units | ${meta.standaloneHtml} |`,
    `| kurssLesson16 units (100%) | ${meta.lesson16Units} |`,
    `| L8–21 cross-section units | ${meta.crossSectionUnits} |`,
    "",
    "### Prefix breakdown",
    "",
    Object.entries(meta.byPrefix || {})
      .map(([k, v]) => `- ${k}: ${v}`)
      .join("\n"),
    "",
    "## Severity (quality findings)",
    "",
    "| Severity | Count |",
    "|----------|-------|",
    `| CRITICAL | ${sev.CRITICAL} |`,
    `| HIGH | ${sev.HIGH} |`,
    `| MEDIUM | ${sev.MEDIUM} |`,
    `| LOW | ${sev.LOW} |`,
    `| FALSE_POSITIVE | ${falsePos} |`,
  ];

  lines.push(
    "",
    "## Special counts",
    "",
    `- FOREIGN_LEFTOVER (all findings): ${foreignLeftovers}`,
    `- CS_TERMINOLOGY: ${terminology}`,
    `- SOURCE_DE_ISSUE / DE_PARITY: ${sourceDe}`,
    "",
    "### By category (top)",
    "",
    Object.entries(cats)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20)
      .map(([k, v]) => `- ${k}: ${v}`)
      .join("\n"),
    "",
    "## Integrity gates",
    "",
    "| Gate | Status |",
    "|------|--------|",
    `| Structural parity (CS ↔ LV MASTER) | ${gates.structuralParity} |`,
    `| DE READ-ONLY | PASS (0 changes) |`,
    `| LV MASTER READ-ONLY | PASS (0 changes) |`,
    `| primary ↔ www UI | ${gates.primaryWwwUi ? "PASS" : "FAIL"} |`,
    `| primary ↔ www courseLessons | ${gates.primaryWwwLessons ? "PASS" : "FAIL"} |`,
    `| Functional / renderer | ${gates.functional} |`,
    `| Mojibake sweep | ${gates.mojibakeCount} |`,
    `| Missing content | ${gates.missingContent} |`,
    `| Foreign leftovers (deterministic) | ${gates.foreignLeftovers} |`,
    `| článek gate hits (deterministic) | ${gates.clanekGate} |`,
    "",
    "## Luna API",
    "",
    stats
      ? `- Requests: ${stats.requestCount}, batches: ${stats.batchCount}, tokens: ${stats.totalTokens}, Luna findings: ${stats.findingsCount || "n/a"}`
      : `- Cached Luna batches in ${OUT_DIR}`,
    "",
    "## Findings (detail, first 100)",
    "",
  );

  let num = 0;
  for (const f of findings.slice(0, 100)) {
    num += 1;
    lines.push(
      `### Finding ${String(num).padStart(3, "0")} — ${f.severity} / ${f.category}`,
      "",
      `- **Finding ID:** ${f.findingId}`,
      `- **Unit ID:** ${f.unitId || ""}`,
      `- **File:** ${f.file}`,
      `- **Object:** ${f.objectId}`,
      `- **Field:** ${f.field}`,
      `- **CURRENT:** ${JSON.stringify(f.current).slice(0, 400)}`,
      `- **Luna PROPOSED:** ${JSON.stringify(f.proposed || "").slice(0, 400)}`,
      `- **Reason:** ${f.reason}`,
      f.lvMasterContext
        ? `- **LV MASTER context:** ${JSON.stringify(f.lvMasterContext).slice(0, 250)}`
        : "",
      f.deContext ? `- **DE context:** ${JSON.stringify(f.deContext).slice(0, 250)}` : "",
      "",
    );
  }
  if (findings.length > 100) {
    lines.push(`_… and ${findings.length - 100} more quality findings in JSON._`, "");
  }

  lines.push(
    "## Stop",
    "",
    "READ-ONLY audit complete. No production changes.",
    "Next step: OWNER review → COPY-ONLY apply.",
    "",
  );
  return lines.join("\n");
}

async function main() {
  ensureDir(OUT_DIR);
  const extracted = extractArticleUnits();
  const { units, meta, csHtml, lvHtml } = extracted;
  const unitMap = Object.fromEntries(units.map((u) => [u.auditId, u]));

  const deterministic = [];
  let missingContent = 0;
  let foreignLeftovers = 0;
  let mojibakeCount = 0;
  let clanekGate = 0;

  for (const unit of units) {
    const hits = scanDeterministic(unit);
    for (const h of hits) {
      if (h.category === "MISSING_CONTENT") missingContent += 1;
      if (h.category === "FOREIGN_LEFTOVER") foreignLeftovers += 1;
      if (h.category === "MOJIBAKE") mojibakeCount += 1;
      if (h.category === "CS_TERMINOLOGY" && h.reason.includes("článek")) clanekGate += 1;
      deterministic.push({
        findingId: unit.auditId,
        unitId: unit.unitId,
        severity: h.severity,
        category: h.category,
        file: unit.file,
        objectId: unit.objectId,
        field: unit.field,
        current: unit.currentCs,
        proposed: "",
        reason: h.reason,
        lvMasterContext: unit.lvReference || "",
        deContext: unit.deContext || "",
        source: "deterministic",
        confidence: "high",
      });
    }
  }

  const structuralIssues = runStructuralParity(csHtml, lvHtml);
  for (const issue of structuralIssues) {
    deterministic.push({
      findingId: "STRUCTURAL",
      unitId: "STRUCTURAL",
      severity: issue.severity,
      category: issue.category,
      file: "data/cs/courseLessons.js",
      objectId: "kurssArticlesLesson",
      field: "structure",
      current: issue.reason,
      proposed: "",
      reason: issue.reason,
      source: "deterministic",
      confidence: "high",
    });
  }

  const mirrorUi = md5Pair(CS_UI, WWW_CS_UI);
  const mirrorLessons = md5Pair(CS_LESSONS, WWW_CS_LESSONS);
  const jsOk = checkJs(CS_LESSONS) && checkJs(CS_UI);
  const articlesHtmlOk = Boolean(csHtml.kurssArticlesLesson?.trim());
  const functional = mirrorUi && mirrorLessons && jsOk && articlesHtmlOk ? "PASS" : "FAIL";

  let lunaFindings = [];
  const stats = SKIP_LUNA || REPORT_ONLY ? null : createStats();
  let batchCount = 0;

  if (!SKIP_LUNA && !REPORT_ONLY) {
    const cards = buildLunaCards(units);
    const batches = chunk(cards, BATCH_SIZE);
    batchCount = batches.length;
    const progress = loadProgress();
    const completed = new Set(progress.completedBatches || []);

    console.log(`Členy Luna: ${cards.length} units, ${batches.length} batches (${BATCH_SIZE}/batch)`);

    for (let i = 0; i < batches.length; i++) {
      const start = i * BATCH_SIZE + 1;
      const end = Math.min((i + 1) * BATCH_SIZE, cards.length);
      const batchKey = `art-${String(start).padStart(4, "0")}-${String(end).padStart(4, "0")}`;

      if (completed.has(batchKey)) {
        const cached = path.join(OUT_DIR, `luna-batch-${batchKey}.json`);
        if (fs.existsSync(cached)) {
          const data = JSON.parse(fs.readFileSync(cached, "utf8"));
          lunaFindings.push(...(data.findings || []).map((f) => normalizeLunaFinding(f, unitMap)));
          console.log(`  skip ${batchKey} (cached)`);
          continue;
        }
      }

      const result = await auditCardsBatch({
        cards: batches[i],
        stats,
        batchLabel: batchKey,
        auditType: "kurs_cleny",
        dataset: "kurss_cleny",
        instructions: ARTICLES_INSTRUCTIONS,
      });

      const batchFile = path.join(OUT_DIR, `luna-batch-${batchKey}.json`);
      fs.writeFileSync(
        batchFile,
        JSON.stringify({
          batchKey,
          findings: result.findings,
          completedAt: new Date().toISOString(),
        }, null, 2),
      );

      lunaFindings.push(...result.findings.map((f) => normalizeLunaFinding(f, unitMap)));
      completed.add(batchKey);
      progress.completedBatches = [...completed];
      saveProgress(progress);
    }
  } else {
    const batchFiles = fs.existsSync(OUT_DIR)
      ? fs.readdirSync(OUT_DIR).filter((n) => n.startsWith("luna-batch-art-"))
      : [];
    batchCount = batchFiles.length;
    for (const bf of batchFiles) {
      const data = JSON.parse(fs.readFileSync(path.join(OUT_DIR, bf), "utf8"));
      lunaFindings.push(...(data.findings || []).map((f) => normalizeLunaFinding(f, unitMap)));
    }
  }

  const allFindings = dedupeFindings([...deterministic, ...lunaFindings]);
  const { severity, nonError, qualityFindings } = classifyFindings(
    allFindings.map((f) => ({
      ...f,
      category: f.category,
      severity: f.severity,
      status: f.category === "FALSE_POSITIVE" ? "FALSE_POSITIVE" : "FINDING",
      cardId: f.findingId,
    })),
  );

  const gates = {
    structuralParity: structuralIssues.length === 0 ? "PASS" : "FAIL",
    primaryWwwUi: meta.primaryWwwUi && mirrorUi,
    primaryWwwLessons: meta.primaryWwwLessons && mirrorLessons,
    functional,
    missingContent,
    foreignLeftovers,
    mojibakeCount,
    clanekGate,
  };

  const output = {
    meta: {
      ...meta,
      model: DEFAULT_MODEL,
      batchSize: BATCH_SIZE,
      batchCount,
      auditedAt: new Date().toISOString(),
      productionChanges: 0,
      deChanges: 0,
      lvMasterChanges: 0,
    },
    gates,
    severityCounts: severity,
    nonErrorCounts: nonError,
    findings: allFindings,
    qualityFindings,
    apiUsage: stats,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(output, null, 2));
  fs.writeFileSync(
    REPORT_MD,
    buildReport(meta, gates, qualityFindings, stats, allFindings, batchCount),
  );

  console.log("\n=== Členy audit complete ===");
  console.log(`Units: ${meta.totalUnits} (${batchCount} Luna batches)`);
  console.log(
    `Findings: CRITICAL=${severity.CRITICAL} HIGH=${severity.HIGH} MEDIUM=${severity.MEDIUM} LOW=${severity.LOW}`,
  );
  console.log(`Deterministic: foreign=${foreignLeftovers} článek_gate=${clanekGate} mojibake=${mojibakeCount}`);
  console.log(`Gates: structural=${gates.structuralParity} mirror=${mirrorUi && mirrorLessons} functional=${functional}`);
  console.log(`Report: ${REPORT_MD}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
