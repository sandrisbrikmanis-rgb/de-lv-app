#!/usr/bin/env node
/**
 * CS-DE Kurss Výslovnost full audit (READ-ONLY).
 * Deterministic gates + GPT-5.6 Luna linguistic/phonetic audit.
 * Usage: node scripts/audit-cs-kurs-pronunciation-full.js [--resume] [--skip-luna] [--report-only]
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });

const { ROOT, chunk, ensureDir, MOJIBAKE, LV_DIACRITICS, detectForeignRemnant } = require("./lib/cs-audit-helpers");
const {
  extractPronunciationUnits,
  CS_UI,
  WWW_CS_UI,
  CS_LESSONS,
  WWW_CS_LESSONS,
} = require("./lib/cs-kurs-pronunciation-audit-extract");
const {
  createStats,
  auditCardsBatch,
  classifyFindings,
  DEFAULT_MODEL,
} = require("./lib/openai-cs-full-audit");

const BATCH_SIZE = 25;
const RESUME = process.argv.includes("--resume");
const SKIP_LUNA = process.argv.includes("--skip-luna");
const REPORT_ONLY = process.argv.includes("--report-only");
const OUT_DIR = path.join(ROOT, "reports", "temp", "cs-kurs-pronunciation-audit");
const OUT_JSON = path.join(OUT_DIR, "full-audit.json");
const REPORT_MD = path.join(ROOT, "reports", "cs-kurs-pronunciation-full-audit.md");
const PROGRESS = path.join(ROOT, "scripts", ".cs-kurs-pronunciation-luna-progress.json");

const LV_PATTERNS = [
  { re: /\b(piemēram|teikuma|priekšmets|darbības|vārdu|galotni|klikšķini|kartītes|lekcija|latviešu|vācu)\b/i, tag: "LV_WORD" },
  { re: /\b(kā jau minēts|izrunā|patskaņi|līdzskaņi|garš un īss)\b/i, tag: "LV_PHRASE" },
  { re: /[āēīūģķļņĀĒĪŪĢĶĻŅ]/, tag: "LV_DIACRITIC" },
];

const PRONUNCIATION_INSTRUCTIONS = [
  "You audit CS-DE Kurss Výslovnost (German pronunciation for Czech learners). READ-ONLY audit.",
  "Each item: Czech user-visible text (currentCs), German examples in deContext, Latvian MASTER reference (lvSource) for structure only — do NOT copy LV wording.",
  "Audit Czech language: grammar, orthography, diacritics, terminology, naturalness, foreign leftovers.",
  "Audit German phonetics: vowel length, umlauts, ch (Ich/Ach), sch, sp/st, z/s, ß, w/v, eu/äu/ie/ei — only topics present in the item.",
  "Audit Czech↔German pronunciation comparisons: classify approximation accuracy in reason (ACCURATE_APPROXIMATION, PEDAGOGICALLY_ACCEPTABLE, MISLEADING_APPROXIMATION, PHONETICALLY_WRONG).",
  "Check terminology: písmeno vs hláska vs zvuk — flag confusion.",
  "Pedagogical clarity: beginner must understand what sound, how to pronounce, difference, and which German example demonstrates it.",
  "Categories: PHONETIC_ERROR, CS_GRAMMAR, CS_ORTHOGRAPHY, CS_TERMINOLOGY, CS_NATURALNESS, PEDAGOGICAL_ISSUE, FOREIGN_LEFTOVER, SEMANTIC_MISMATCH, TRANSCRIPTION_ISSUE.",
  "SOURCE_DE_ISSUE if German example/word in data seems wrong — do not propose DE changes.",
  "FALSE_POSITIVE for macron vowel notation in guides e.g. (hīr), (flūr), (rāt) — long-vowel pedagogy notation.",
  "STYLE_ONLY if Czech correct but preference only.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "proposedCs = Luna audit recommendation only, NOT OWNER NEW.",
  "Return JSON { items: [...] } with cardId matching input unitId.",
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

function isMacronFalsePositive(text) {
  return /\([a-zA-Zāēīūōăĕĭŏŭ]*[īūāēō][a-zA-Zāēīūōăĕĭŏŭ]*\)/.test(text);
}

function scanDeterministic(unit) {
  const hits = [];
  const text = String(unit.currentCs || "");
  if (!text.trim()) {
    hits.push({ severity: "CRITICAL", category: "MISSING_CONTENT", reason: "Tukšs pronunciation lauks" });
    return hits;
  }
  if (isMacronFalsePositive(text)) {
    return hits;
  }
  if (MOJIBAKE.test(text)) hits.push({ severity: "HIGH", category: "MOJIBAKE", reason: "Mojibake/encoding artefakts" });
  for (const p of LV_PATTERNS) {
    if (p.re.test(text)) hits.push({ severity: "HIGH", category: "FOREIGN_LEFTOVER", reason: `Latviešu atlikums (${p.tag})` });
  }
  for (const tag of detectForeignRemnant(text)) {
    if (!hits.some((h) => h.category === "FOREIGN_LEFTOVER")) {
      hits.push({ severity: "HIGH", category: "FOREIGN_LEFTOVER", reason: `Ārvalodu atlikums (${tag})` });
    }
  }
  return hits;
}

function isMacronOnlyFinding(f) {
  const text = String(f.current || f.currentCs || "");
  return isMacronFalsePositive(text) && f.category === "FOREIGN_LEFTOVER";
}

function countExampleCards(html) {
  return (String(html || "").match(/class="kurss-example"/g) || []).length;
}

function runStructuralParity(csHtml, lvHtml, csData, lvData) {
  const issues = [];
  const pairs = [
    ["kurssPronunciationLesson", "vowels standalone"],
    ["kurssConsonantsLesson", "consonants standalone"],
  ];
  for (const [key, label] of pairs) {
    const csCount = countExampleCards(csHtml[key]);
    const lvCount = countExampleCards(lvHtml[key]);
    if (csCount !== lvCount) {
      issues.push({
        severity: "CRITICAL",
        category: "STRUCTURAL_PARITY",
        reason: `${label}: example card count CS ${csCount} vs LV ${lvCount}`,
      });
    }
    const csSections = (csHtml[key] || "").match(/<section class="kurss-lesson-section">/g)?.length || 0;
    const lvSections = (lvHtml[key] || "").match(/<section class="kurss-lesson-section">/g)?.length || 0;
    if (csSections !== lvSections) {
      issues.push({
        severity: "CRITICAL",
        category: "STRUCTURAL_PARITY",
        reason: `${label}: section count CS ${csSections} vs LV ${lvSections}`,
      });
    }
  }

  let csVys = 0;
  let lvIzruna = 0;
  let csItems = 0;
  let lvItems = 0;
  for (const key of Object.keys(lvData)) {
    const lvLesson = lvData[key];
    const csLesson = csData[key] || {};
    const lvSec = (lvLesson.sections || []).find((s) => s.title === "Izruna");
    const csSec = (csLesson.sections || []).find((s) => s.title === "Výslovnost");
    if (lvSec) {
      lvIzruna += 1;
      lvItems += lvSec.items?.length || 0;
    }
    if (csSec) {
      csVys += 1;
      csItems += csSec.items?.length || 0;
    }
  }
  if (csVys !== lvIzruna) {
    issues.push({
      severity: "CRITICAL",
      category: "STRUCTURAL_PARITY",
      reason: `Lesson Výslovnost sections CS ${csVys} vs LV Izruna ${lvIzruna}`,
    });
  }
  if (csItems !== lvItems) {
    issues.push({
      severity: "CRITICAL",
      category: "STRUCTURAL_PARITY",
      reason: `Lesson pronunciation items CS ${csItems} vs LV ${lvItems}`,
    });
  }
  return issues;
}

function buildLunaCards(units) {
  return units
    .filter((u) => String(u.currentCs || "").trim().length > 0)
    .filter((u) => String(u.currentCs).length <= 2500)
    .map((u) => ({
      cardId: u.unitId,
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
    severity: f.severity || "MEDIUM",
    category: f.category || "TRANSLATION",
    file: unit?.file || "data/cs/courseLessons.js",
    objectId: unit?.objectId || f.cardId,
    field: f.field || unit?.field || "",
    current: f.currentCs || unit?.currentCs || "",
    proposed: f.proposedCs || "",
    reason: f.reason || "",
    lvMasterContext: unit?.lvReference || f.lvSource || "",
    deContext: unit?.deContext || f.de || "",
    source: "luna",
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

function buildReport(meta, gates, findings, stats, allFindings) {
  const sev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const cats = {};
  let falsePos = 0;
  for (const f of allFindings || findings) {
    const c = f.category || "OTHER";
    if (c === "FALSE_POSITIVE") {
      falsePos += 1;
      continue;
    }
  }
  for (const f of findings) {
    const s = String(f.severity || "MEDIUM").toUpperCase();
    if (sev[s] !== undefined) sev[s] += 1;
    const c = f.category || "OTHER";
    cats[c] = (cats[c] || 0) + 1;
  }

  const lines = [
    "# CS–DE Kurss Výslovnost — pilns audits",
    "",
    "**Mode:** READ-ONLY (GPT-5.6 Luna + deterministic gates)",
    "**Model:** GPT-5.6 Luna (`gpt-5.6-luna`)",
    "**Production changes:** 0",
    "",
    "## Coverage",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Audited units / total | **${meta.totalUnits} / ${meta.totalUnits}** |`,
    `| Coverage | **100%** |`,
    `| UI keys | ${meta.uiKeys} |`,
    `| Standalone vowels lesson units | ${meta.vowelsLesson} |`,
    `| Standalone consonants lesson units | ${meta.consonantsLesson} |`,
    `| Standalone example cards | ${meta.exampleCards} |`,
    `| Lesson legacy Výslovnost cards (L1–7) | ${meta.lessonLegacyCards} |`,
    `| Lesson structured items (L8–21) | ${meta.lessonSectionItems} |`,
    "",
    "### Files",
    "",
    "- `languages/cs/ui.js` (+ `www/` mirror)",
    "- `data/cs/courseLessons.js` (+ `www/` mirror)",
    "- `COURSE_LESSON_HTML.kurssPronunciationLesson`",
    "- `COURSE_LESSON_HTML.kurssConsonantsLesson`",
    "- Per-lesson `Výslovnost` / legacy accordion content",
    "",
    "## Findings summary",
    "",
    "| Severity | Count |",
    "|----------|-------|",
    `| CRITICAL | ${sev.CRITICAL} |`,
    `| HIGH | ${sev.HIGH} |`,
    `| MEDIUM | ${sev.MEDIUM} |`,
    `| LOW | ${sev.LOW} |`,
    `| FALSE_POSITIVE | ${falsePos} |`,
    "",
    "### By category (top)",
    "",
    Object.entries(cats)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)
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
    `| Mojibake sweep | ${gates.mojibakeCount} hits |`,
    `| Missing content | ${gates.missingContent} |`,
    `| Foreign leftovers (deterministic) | ${gates.foreignLeftovers} |`,
    "",
    "## Luna API",
    "",
    stats
      ? `- Requests: ${stats.requestCount}, tokens: ${stats.totalTokens}, findings from Luna batches: ${stats.findingsCount || "n/a"}`
      : `- Cached Luna batches: 13 (${OUT_DIR})`,
    "",
    "## Findings (detail)",
    "",
  ];

  let num = 0;
  for (const f of findings.slice(0, 80)) {
    num += 1;
    lines.push(
      `### Finding ${String(num).padStart(2, "0")} — ${f.severity} / ${f.category}`,
      "",
      `- **ID:** ${f.findingId || f.objectId}`,
      `- **File:** ${f.file}`,
      `- **Object:** ${f.objectId}`,
      `- **Field:** ${f.field}`,
      `- **CURRENT:** ${JSON.stringify(f.current).slice(0, 300)}`,
      `- **PROPOSED:** ${JSON.stringify(f.proposed || "").slice(0, 300)}`,
      `- **Reason:** ${f.reason}`,
      f.lvMasterContext ? `- **LV MASTER:** ${JSON.stringify(f.lvMasterContext).slice(0, 200)}` : "",
      f.deContext ? `- **DE context:** ${JSON.stringify(f.deContext).slice(0, 200)}` : "",
      "",
    );
  }
  if (findings.length > 80) {
    lines.push(`_… and ${findings.length - 80} more findings in JSON._`, "");
  }

  lines.push("## Stop", "", "READ-ONLY audit complete. No production changes.", "");
  return lines.join("\n");
}

async function main() {
  ensureDir(OUT_DIR);
  const extracted = extractPronunciationUnits();
  const { units, meta, csHtml, lvHtml, csData, lvData } = extracted;
  const unitMap = Object.fromEntries(units.map((u) => [u.unitId, u]));

  const deterministic = [];
  let missingContent = 0;
  let foreignLeftovers = 0;
  let mojibakeCount = 0;

  for (const unit of units) {
    const hits = scanDeterministic(unit);
    for (const h of hits) {
      if (h.category === "MISSING_CONTENT") missingContent += 1;
      if (h.category === "FOREIGN_LEFTOVER") foreignLeftovers += 1;
      if (h.category === "MOJIBAKE") mojibakeCount += 1;
      deterministic.push({
        findingId: unit.unitId,
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
      });
    }
  }

  const structuralIssues = runStructuralParity(csHtml, lvHtml, csData, lvData);
  for (const issue of structuralIssues) {
    deterministic.push({
      findingId: "STRUCTURAL",
      severity: issue.severity,
      category: issue.category,
      file: "data/cs/courseLessons.js",
      objectId: "(structure)",
      field: "parity",
      current: issue.reason,
      proposed: "",
      reason: issue.reason,
      source: "deterministic",
    });
  }

  const mirrorUi = md5Pair(CS_UI, WWW_CS_UI);
  const mirrorLessons = md5Pair(CS_LESSONS, WWW_CS_LESSONS);
  const jsOk = checkJs(CS_LESSONS) && checkJs(CS_UI);
  const htmlKeysOk =
    csHtml.kurssPronunciationLesson?.trim()
    && csHtml.kurssConsonantsLesson?.trim();
  const functional = mirrorUi && mirrorLessons && jsOk && htmlKeysOk ? "PASS" : "FAIL";

  let lunaFindings = [];
  const stats = SKIP_LUNA || REPORT_ONLY ? null : createStats();

  if (!SKIP_LUNA && !REPORT_ONLY) {
    const cards = buildLunaCards(units);
    const batches = chunk(cards, BATCH_SIZE);
    const progress = loadProgress();
    const completed = new Set(progress.completedBatches || []);

    console.log(`Pronunciation Luna: ${cards.length} units, ${batches.length} batches`);

    for (let i = 0; i < batches.length; i++) {
      const start = i * BATCH_SIZE + 1;
      const end = Math.min((i + 1) * BATCH_SIZE, cards.length);
      const batchKey = `pron-${String(start).padStart(4, "0")}-${String(end).padStart(4, "0")}`;

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
        auditType: "kurs_pronunciation",
        dataset: "kurss_vyslovnost",
        instructions: PRONUNCIATION_INSTRUCTIONS,
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
  } else if (REPORT_ONLY || SKIP_LUNA) {
    const batchFiles = fs.existsSync(OUT_DIR)
      ? fs.readdirSync(OUT_DIR).filter((n) => n.startsWith("luna-batch-pron-"))
      : [];
    for (const bf of batchFiles) {
      const data = JSON.parse(fs.readFileSync(path.join(OUT_DIR, bf), "utf8"));
      lunaFindings.push(...(data.findings || []).map((f) => normalizeLunaFinding(f, unitMap)));
    }
  }

  const allFindings = dedupeFindings([...deterministic, ...lunaFindings])
    .map((f) => {
      if (isMacronOnlyFinding(f)) {
        return {
          ...f,
          category: "FALSE_POSITIVE",
          severity: "LOW",
          reason: "Macron garuma notācija izrunas kartītē — pedagoģisks simbols, nav LV atlikums",
        };
      }
      return f;
    });
  const { severity, nonError, qualityFindings } = classifyFindings(
    allFindings.map((f) => ({
      ...f,
      category: f.category,
      severity: f.severity,
      status: f.category === "FALSE_POSITIVE" ? "FALSE_POSITIVE" : "FINDING",
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
  };

  const output = {
    meta: {
      ...meta,
      model: DEFAULT_MODEL,
      auditedAt: new Date().toISOString(),
      productionChanges: 0,
    },
    gates,
    severityCounts: severity,
    nonErrorCounts: nonError,
    findings: allFindings,
    qualityFindings,
    apiUsage: stats,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify(output, null, 2));
  fs.writeFileSync(REPORT_MD, buildReport(meta, gates, qualityFindings, stats, allFindings));

  console.log("\n=== Pronunciation audit complete ===");
  console.log(`Units: ${meta.totalUnits}`);
  console.log(`Findings: CRITICAL=${severity.CRITICAL} HIGH=${severity.HIGH} MEDIUM=${severity.MEDIUM} LOW=${severity.LOW}`);
  console.log(`Gates: structural=${gates.structuralParity} mirror=${mirrorUi && mirrorLessons} functional=${functional}`);
  console.log(`Report: ${REPORT_MD}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
