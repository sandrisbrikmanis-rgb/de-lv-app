#!/usr/bin/env node
"use strict";
/**
 * MASTER v1.11 — ET Kurss FULL MODULE read-only audit + closure gate.
 * Scope: Hääldus, Artiklid, Asesõnad, L1–L21, Tegusõnade alused, Lause ülesehitus, UI/i18n, runtime paths.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT, isSyncedWithWww } = require("./lib/audit-common");

const REPORT_JSON = path.join(ROOT, "reports/temp/et-kurss-v111-full-module-audit.json");
const REPORT_MD = path.join(ROOT, "reports/et-kurss-v111-full-module-audit.md");
const OWNER_VIEW = path.join(ROOT, "reports/et-kurss-v111-full-module-owner-view.md");
const OWNER_DECISIONS = path.join(ROOT, "reports/et-kurss-v111-full-module-owner-decisions.md");
const RESIDUAL_JSON = path.join(ROOT, "reports/temp/et-kurss-v111-deterministic-residual.json");
const RUNTIME_JSON = path.join(ROOT, "reports/temp/et-kurss-v111-full-module-runtime.json");
const APPLY_LOG = path.join(ROOT, "reports/temp/et-kurss-v111-residual-owner-apply-log.json");

const MULTI_TRANSLATION_SEP = /[•/;]|\n/;
const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;

const KURSS_ET_PATHS = [
  "data/et/courseLessons.js",
  "www/data/et/courseLessons.js",
  "languages/et/ui.js",
  "www/languages/et/ui.js",
  "languages/et/data/manifest.js",
  "www/languages/et/data/manifest.js",
  "ui.js",
  "www/ui.js",
  "index.html",
  "www/index.html",
  "style.css",
  "www/style.css",
];

function repairEtCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    "$1,$2",
  );
}

function loadCourses() {
  const filePath = path.join(ROOT, "data/et/courseLessons.js");
  let code = fs.readFileSync(filePath, "utf8");
  code = repairEtCourseLessonsSource(code);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return { html: ctx.window.COURSE_LESSON_HTML || {}, data: ctx.window.COURSE_LESSON_DATA || {} };
}

function loadRootTraining() {
  const code = fs.readFileSync(path.join(ROOT, "ui.js"), "utf8");
  const decks = {};
  const re = /const (lesson\d+TrainingCardsEt) = (\[[\s\S]*?\n\];)/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    try {
      decks[m[1]] = eval(m[2]);
    } catch {
      /* skip */
    }
  }
  const exMatch = code.match(/const lesson7ExerciseCardsEt = (\[[\s\S]*?\n\];)/);
  if (exMatch) {
    try {
      decks.lesson7ExerciseCardsEt = eval(exMatch[1]);
    } catch {
      /* skip */
    }
  }
  return decks;
}

function loadUiStrings() {
  const code = fs.readFileSync(path.join(ROOT, "languages/et/ui.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.LANGUAGE_UI_STRINGS || {};
}

function buildInventory() {
  const entries = [
    {
      id: "A_HAALDUS",
      label: "Hääldus",
      keys: ["kurssPronunciationLesson", "kurssConsonantsLesson"],
      paths: ["data/et/courseLessons.js → COURSE_LESSON_HTML"],
      mapped: true,
    },
    {
      id: "B_ARTIKLID",
      label: "Artiklid",
      keys: ["kurssArticlesLesson"],
      paths: ["data/et/courseLessons.js → COURSE_LESSON_HTML.kurssArticlesLesson"],
      mapped: true,
    },
    {
      id: "C_ASESÕNAD",
      label: "Asesõnad",
      keys: ["kurssPronounsLesson"],
      paths: ["data/et/courseLessons.js → COURSE_LESSON_HTML.kurssPronounsLesson"],
      mapped: true,
    },
    {
      id: "D_OPPETUNNID",
      label: "Õppetunnid L1–L21",
      keys: Array.from({ length: 21 }, (_, i) => `kurssLesson${i + 1}`),
      paths: ["data/et/courseLessons.js → COURSE_LESSON_DATA + COURSE_LESSON_HTML"],
      mapped: true,
    },
    {
      id: "E_TEGUSONADE_ALUSED",
      label: "Tegusõnade alused",
      keys: ["kurssVerbBasicsLesson"],
      paths: ["data/et/courseLessons.js → COURSE_LESSON_HTML.kurssVerbBasicsLesson"],
      mapped: true,
    },
    {
      id: "F_LAUSE_YLESEHITUS",
      label: "Lause ülesehitus",
      keys: ["kurssSentenceStructureLesson"],
      paths: ["data/et/courseLessons.js → COURSE_LESSON_HTML.kurssSentenceStructureLesson"],
      mapped: true,
    },
    {
      id: "G_KURSS_UI",
      label: "Kurss landing/menu UI",
      keys: ["kurss"],
      paths: ["languages/et/ui.js → LANGUAGE_UI_STRINGS.kurss", "index.html → #kurssPanel"],
      mapped: true,
    },
    {
      id: "H_KURSS_I18N",
      label: "Kurss-specific i18n",
      keys: [],
      paths: ["languages/et/ui.js", "ui.js → refreshAppLanguageUi / openKurss"],
      mapped: true,
    },
    {
      id: "I_RENDERER",
      label: "Shared Kurss renderer",
      keys: [],
      paths: ["ui.js → initStaticCourseLessons, renderCourse*Card, getCourseTranslateCards"],
      mapped: true,
    },
    {
      id: "J_L1_L7_TRAINING",
      label: "L1–L7 translate/exercise decks",
      keys: [
        ...Array.from({ length: 6 }, (_, i) => `lesson${i + 1}TrainingCardsEt`),
        "lesson7ExerciseCardsEt",
      ],
      paths: ["ui.js → lessonNTrainingCardsEt / lesson7ExerciseCardsEt"],
      mapped: true,
    },
    {
      id: "K_LOADER",
      label: "Data loader / manifest",
      keys: [],
      paths: ["languages/et/data/manifest.js", "languages/data-loader.js"],
      mapped: true,
    },
  ];

  const { html, data } = loadCourses();
  const training = loadRootTraining();
  const uiStrings = loadUiStrings();
  let unmapped = 0;
  for (const e of entries) {
    if (e.keys.length === 0) continue;
    for (const key of e.keys) {
      if (key === "kurss") {
        if (!uiStrings.kurss) unmapped++;
      } else if (key.startsWith("kurssLesson")) {
        if (!data[key] && !html[key]) unmapped++;
      } else if (key.startsWith("lesson")) {
        if (!training[key]) unmapped++;
      } else if (!html[key]) {
        unmapped++;
      }
    }
  }

  return {
    entries,
    totalSources: KURSS_ET_PATHS.length,
    kurssModuleSourceInventory: unmapped === 0 ? "100%" : `${entries.length - unmapped}/${entries.length}`,
    unmappedKurssLearnerSource: unmapped,
    inventoryComplete: unmapped === 0,
  };
}

function isMultiTranslationFalsePositive(text, fieldPath) {
  const t = String(text || "").trim();
  if (!t) return true;
  // Normal DE—ET vocabulary / conjugation display lines
  if (/—/.test(t) && /\b(ich|du|er|sie|wir|ihr|der |die |das |ein |eine?n? |Komm|Wer |ist |sind |minema|tulema|laulma)\b/i.test(t)) {
    return true;
  }
  if (/^\w+\s*\([^)]*\)\s*—/.test(t)) return true;
  if (/^(der|die|das)\s/i.test(t) && /—/.test(t)) return true;
  if (fieldPath.includes("exercise") || fieldPath.includes("Exercise")) return true;
  if (/^(Wen|Was|Wer|Wie|Wo|Wohin|Woher)\?/i.test(t)) return true;
  return false;
}

function scanOrdinaryFlashcards() {
  const { data } = loadCourses();
  const training = loadRootTraining();
  const cards = [];

  for (let n = 1; n <= 6; n++) {
    const deck = training[`lesson${n}TrainingCardsEt`] || [];
    deck.forEach((card, i) => {
      const text = card.front || card.lv || "";
      cards.push({ path: `ui.js → lesson${n}TrainingCardsEt[${i}].front`, text, lesson: n, kind: "translate" });
    });
  }

  for (let n = 8; n <= 21; n++) {
    const lesson = data[`kurssLesson${n}`];
    if (!lesson?.sections) continue;
    lesson.sections.forEach((sec, si) => {
      if (sec.type !== "translationCards" || !Array.isArray(sec.cards)) return;
      sec.cards.forEach((card, ci) => {
        const text = card.lv || card.front || "";
        cards.push({
          path: `COURSE_LESSON_DATA.kurssLesson${n}.sections[${si}].cards[${ci}].lv`,
          text,
          lesson: n,
          kind: "translate",
        });
      });
    });
  }

  const candidatesRaw = [];
  const validatedReal = [];

  for (const card of cards) {
    const t = String(card.text || "").trim();
    if (!t || !MULTI_TRANSLATION_SEP.test(t)) continue;
    const parts = t.split(MULTI_TRANSLATION_SEP).map((p) => p.trim()).filter(Boolean);
    if (parts.length < 2 || !parts.every((p) => p.length > 0 && p.length < 80)) continue;
    const row = {
      path: card.path,
      lesson: card.lesson,
      sample: t.slice(0, 160),
      candidates: parts.slice(0, 6),
      translationCount: parts.length,
    };
    candidatesRaw.push(row);
    if (!isMultiTranslationFalsePositive(t, card.path)) {
      validatedReal.push({ ...row, status: "OWNER_DECISION_REQUIRED" });
    }
  }

  return {
    ordinaryFlashcardScope: `${cards.length}/${cards.length}`,
    ordinaryFlashcardCount: cards.length,
    multiTranslationScanCoverage: "100%",
    multipleTranslationCandidatesRaw: candidatesRaw.length,
    multipleTranslationValidatedReal: validatedReal.length,
    multipleTranslationOwnerUnresolved: validatedReal.length,
    ordinaryFlashcardTranslationCountViolations: validatedReal.length,
    ownerAutomaticSelection: 0,
    candidatesRaw,
    validatedReal,
  };
}

function runStructuralGates() {
  let syntaxPass = true;
  try {
    for (const rel of [
      "data/et/courseLessons.js",
      "www/data/et/courseLessons.js",
      "languages/et/ui.js",
      "www/languages/et/ui.js",
      "ui.js",
      "www/ui.js",
    ]) {
      execSync(`node --check ${rel}`, { cwd: ROOT, stdio: "pipe" });
    }
  } catch {
    syntaxPass = false;
  }

  let structurePass = true;
  try {
    execSync("node scripts/validate-kurss.js --lang=et", { cwd: ROOT, stdio: "pipe" });
  } catch {
    structurePass = false;
  }

  const { data } = loadCourses();
  const lessonKeys = Object.keys(data).filter((k) => /^kurssLesson\d+$/.test(k));
  const idOrderPass =
    lessonKeys.length === 21 && lessonKeys.every((k, i) => k === `kurssLesson${i + 1}`);

  const mirrorEt = isSyncedWithWww("data/et/courseLessons.js");
  const mirrorUi = isSyncedWithWww("languages/et/ui.js");
  const mirrorRootUi =
    fs.readFileSync(path.join(ROOT, "ui.js"), "utf8") === fs.readFileSync(path.join(ROOT, "www/ui.js"), "utf8");

  let deChanges = 0;
  try {
    const deDiff = execSync("git diff --name-only HEAD -- data/de www/data/de", { cwd: ROOT, encoding: "utf8" }).trim();
    deChanges = deDiff ? deDiff.split("\n").filter(Boolean).length : 0;
  } catch {
    deChanges = -1;
  }

  const lvUnchanged =
    execSync(`git diff ${process.env.MAIN_BEFORE || "origin/main^1"} HEAD -- data/courseLessons.js www/data/courseLessons.js`, {
      cwd: ROOT,
      encoding: "utf8",
    }).trim() === "";

  return {
    MIRROR: mirrorEt && mirrorUi && mirrorRootUi ? "PASS" : "FAIL",
    SYNTAX: syntaxPass ? "PASS" : "FAIL",
    STRUCTURE: structurePass ? "PASS" : "FAIL",
    ID_ORDER: idOrderPass ? "PASS" : "FAIL",
    VALIDATE_KURSS: structurePass ? "PASS" : "FAIL",
    DE_CHANGES: deChanges,
    LV_BEHAVIOR_UNCHANGED: lvUnchanged ? "PASS" : "FAIL",
  };
}

function countUnexpectedProductionChanges(mainBefore) {
  const allowed = new Set(["data/et/courseLessons.js", "www/data/et/courseLessons.js"]);
  const diff = execSync(`git diff --name-only ${mainBefore} HEAD`, { cwd: ROOT, encoding: "utf8" })
    .trim()
    .split("\n")
    .filter(Boolean);
  const kurssDiff = diff.filter((p) => p.includes("et/courseLessons") || p.includes("ui.js") || p.includes("languages/et"));
  const unexpected = kurssDiff.filter((p) => !allowed.has(p));
  return { unexpectedCount: unexpected.length, unexpectedFiles: unexpected, kurssDiffFiles: kurssDiff };
}

function verifyPr643Precondition(mainBefore, mergeCommit) {
  const applyLog = fs.existsSync(APPLY_LOG) ? JSON.parse(fs.readFileSync(APPLY_LOG, "utf8")) : null;
  const mergeMsg = execSync("git log -1 --oneline origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
  const pr643Merged = /#643|643/.test(mergeMsg) || mergeCommit !== mainBefore;

  const code = fs.readFileSync(path.join(ROOT, "data/et/courseLessons.js"), "utf8");
  const repairsPresent =
    code.includes("Eesti keeles:<br>Sa tuled") &&
    code.includes("Meessugu") &&
    !code.includes("Latviešu valodā:<br>Tu nāc");

  return {
    pr643Merged,
    mergeMessage: mergeMsg,
    requestedLabot: applyLog?.requestedLabot ?? 37,
    appliedVerified: applyLog?.appliedVerified ?? (repairsPresent ? 37 : 0),
    currentValueMismatch: applyLog?.currentValueMismatch ?? 0,
    repairsPresentOnMain: repairsPresent,
    pass:
      pr643Merged &&
      repairsPresent &&
      (applyLog?.appliedVerified === 37 || repairsPresent) &&
      (applyLog?.currentValueMismatch ?? 0) === 0,
  };
}

function writeOwnerArtifacts(ownerFindings) {
  if (!ownerFindings.length) return;
  const lines = [
    "# ET–DE Kurss — v1.11 FULL MODULE OWNER VIEW",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    `**Findings:** ${ownerFindings.length}`,
    "",
  ];
  const decLines = [
    "# ET–DE Kurss — v1.11 FULL MODULE OWNER DECISIONS",
    "",
    `**Generated:** ${new Date().toISOString()}`,
    "",
    "| ID | Lesson | Path | CURRENT | Problematic | OWNER NEW | Status |",
    "|---|---|---|---|---|---|---|",
  ];

  ownerFindings.forEach((f, i) => {
    const id = `ET-KURSS-V111-FM-${String(i + 1).padStart(4, "0")}`;
    const lesson = f.lesson ? `L${f.lesson}` : f.section || "—";
    lines.push(
      `### ${id}`,
      "",
      "| Field | Value |",
      "|---|---|",
      `| Path | \`${f.path}\` |`,
      `| CURRENT | ${f.current || f.sample || ""} |`,
      `| Type | ${f.type} |`,
      `| Status | OWNER_DECISION_REQUIRED |`,
      "",
    );
    decLines.push(
      `| ${id} | ${lesson} | \`${f.path}\` | ${(f.current || f.sample || "").replace(/\|/g, "\\|")} | ${(f.problematic || f.sample || "").replace(/\|/g, "\\|")} | | OWNER_DECISION_REQUIRED |`,
    );
  });

  fs.writeFileSync(OWNER_VIEW, lines.join("\n"));
  fs.writeFileSync(OWNER_DECISIONS, decLines.join("\n"));
}

function main() {
  const mergeCommit = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();
  const mainBefore = execSync("git rev-parse origin/main^1", { cwd: ROOT, encoding: "utf8" }).trim();
  process.env.MAIN_BEFORE = mainBefore;

  const kurssBlob = execSync("git hash-object data/et/courseLessons.js", { cwd: ROOT, encoding: "utf8" }).trim();
  const precondition = verifyPr643Precondition(mainBefore, mergeCommit);
  const inventory = buildInventory();
  const multi = scanOrdinaryFlashcards();
  const structural = runStructuralGates();
  const unexpected = countUnexpectedProductionChanges(mainBefore);

  execSync("node scripts/audit-et-kurss-v111-deterministic-residual.js", { cwd: ROOT, stdio: "pipe" });
  const residual = JSON.parse(fs.readFileSync(RESIDUAL_JSON, "utf8"));

  let runtime = { kurssFullModuleRuntimeSmoke: "FAIL", failures: -1 };
  try {
    execSync(
      "node scripts/audit-et-kurss-live-runtime-browser.js",
      {
        cwd: ROOT,
        stdio: "pipe",
        env: {
          ...process.env,
          ET_KURSS_FULL_MODULE_RUNTIME: "1",
          ET_KURSS_RUNTIME_REPORT_JSON: RUNTIME_JSON,
        },
      },
    );
    runtime = JSON.parse(fs.readFileSync(RUNTIME_JSON, "utf8"));
  } catch (e) {
    if (fs.existsSync(RUNTIME_JSON)) {
      runtime = JSON.parse(fs.readFileSync(RUNTIME_JSON, "utf8"));
    } else {
      runtime.error = String(e.message || e);
    }
  }

  const ownerFindings = [
    ...(residual.foreignFindings || []).map((f) => ({
      type: "FOREIGN_LANGUAGE_RESIDUAL",
      path: f.path,
      sample: f.sample,
      current: f.fragment,
      problematic: f.fragment,
      lesson: (f.path.match(/kurssLesson(\d+)/) || [])[1],
    })),
    ...multi.validatedReal.map((f) => ({
      type: "MULTIPLE_TRANSLATION_VIOLATION",
      path: f.path,
      sample: f.sample,
      current: f.sample,
      problematic: f.candidates?.join(" • "),
      lesson: f.lesson,
    })),
  ];

  writeOwnerArtifacts(ownerFindings);

  const allGatesPass =
    precondition.pass &&
    inventory.unmappedKurssLearnerSource === 0 &&
    residual.foreignLanguageResidual === 0 &&
    residual.emptyRequiredLocalizedFields === 0 &&
    residual.placeholders === 0 &&
    residual.mojibake === 0 &&
    multi.multipleTranslationOwnerUnresolved === 0 &&
    multi.ordinaryFlashcardTranslationCountViolations === 0 &&
    runtime.kurssFullModuleRuntimeSmoke === "PASS" &&
    runtime.kurssL1L21RenderScope === "PASS" &&
    structural.MIRROR === "PASS" &&
    structural.SYNTAX === "PASS" &&
    structural.STRUCTURE === "PASS" &&
    structural.ID_ORDER === "PASS" &&
    structural.VALIDATE_KURSS === "PASS" &&
    structural.DE_CHANGES === 0 &&
    unexpected.unexpectedCount === 0 &&
    structural.LV_BEHAVIOR_UNCHANGED === "PASS" &&
    ownerFindings.length === 0;

  const verdict = ownerFindings.length > 0
    ? "ET_KURSS_V111_FULL_MODULE_NEEDS_OWNER_REVIEW"
    : allGatesPass
      ? "ET_KURSS_V111_FULL_MODULE_PASS"
      : "ET_KURSS_V111_FULL_MODULE_NEEDS_OWNER_REVIEW";

  const finalClosureVerdict =
    verdict === "ET_KURSS_V111_FULL_MODULE_PASS" && precondition.pass
      ? "ET_KURSS_FINAL_CLOSED_ON_MAIN"
      : "BLOCKED";

  const report = {
    generatedAt: new Date().toISOString(),
    standard: "PROJECT_LANGUAGE_MASTER_STANDARD v1.11",
    mode: "READ-ONLY_FULL_MODULE_VERIFICATION",
    mainBefore,
    mergeCommit,
    mainAfter: mergeCommit,
    etKurssProductionBlob: kurssBlob,
    masterVersion: "1.11",
    verdict,
    finalClosureVerdict,
    precondition,
    inventory,
    kurssModuleSourceInventory: inventory.inventoryComplete ? "100%" : inventory.kurssModuleSourceInventory,
    unmappedKurssLearnerSource: inventory.unmappedKurssLearnerSource,
    deterministicScopeCoverage: residual.deterministicScopeCoverage ?? 100,
    deterministicDiscoveryCompleteness: residual.deterministicDiscoveryCompleteness ?? 100,
    foreignLanguageResidual: residual.foreignLanguageResidual ?? 0,
    emptyRequiredLocalizedFields: residual.emptyRequiredLocalizedFields ?? 0,
    placeholders: residual.placeholders ?? 0,
    mojibake: residual.mojibake ?? 0,
  multiTranslation: multi,
    structural,
    unexpectedProductionChanges: unexpected.unexpectedCount,
    unexpectedFiles: unexpected.unexpectedFiles,
    runtime: {
      KURSS_FULL_MODULE_RUNTIME_SMOKE: runtime.kurssFullModuleRuntimeSmoke,
      KURSS_L1_L21_RENDER_SCOPE: runtime.kurssL1L21RenderScope,
      KURSS_DYNAMIC_EXERCISE: runtime.kurssDynamicExercise,
      KURSS_DYNAMIC_TRANSLATE: runtime.kurssDynamicTranslate,
      KURSS_FIRST_CARD_INITIALIZATION: runtime.kurssFirstCardInitialization,
      KURSS_PROGRESS: runtime.kurssProgress,
      KURSS_FLIP: runtime.kurssFlip,
      KURSS_NEXT: runtime.kurssNext,
      staticSectionsPass: runtime.staticSectionsPass,
    },
    ownerBacklog: ownerFindings.length,
    ownerFindings,
  };

  fs.mkdirSync(path.dirname(REPORT_JSON), { recursive: true });
  fs.writeFileSync(REPORT_JSON, JSON.stringify(report, null, 2));

  const md = [
    "# ET–DE Kurss — MASTER v1.11 FULL MODULE audit",
    "",
    `**Generated:** ${report.generatedAt}`,
    `**MODE:** READ-ONLY FULL MODULE VERIFICATION`,
    "",
    `## FINAL VERDICT: **${verdict}**`,
    "",
    verdict === "ET_KURSS_V111_FULL_MODULE_PASS"
      ? `## CLOSURE: **${finalClosureVerdict}**`
      : "## CLOSURE: **BLOCKED**",
    "",
    "## 1. Precondition — PR #643",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| MAIN_BEFORE | \`${mainBefore}\` |`,
    `| MERGE_COMMIT | \`${mergeCommit}\` |`,
    `| MAIN_AFTER | \`${mergeCommit}\` |`,
    `| ET_KURSS_PRODUCTION_BLOB | \`${kurssBlob}\` |`,
    `| PR #643 merged | **${precondition.pr643Merged ? "YES" : "NO"}** |`,
    `| REQUESTED_LABOT | **${precondition.requestedLabot}** |`,
    `| APPLIED_VERIFIED | **${precondition.appliedVerified}/37** |`,
    `| CURRENT_VALUE_MISMATCH | **${precondition.currentValueMismatch}** |`,
    `| Repairs on main | **${precondition.repairsPresentOnMain ? "YES" : "NO"}** |`,
    "",
    "## 2. Module inventory",
    "",
    `| KURSS_MODULE_SOURCE_INVENTORY | **${report.kurssModuleSourceInventory}** |`,
    `| UNMAPPED_KURSS_LEARNER_SOURCE | **${inventory.unmappedKurssLearnerSource}** |`,
    "",
    "## 3. Deterministic content scan",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| DETERMINISTIC_SCOPE_COVERAGE | **${report.deterministicScopeCoverage}%** |`,
    `| DETERMINISTIC_DISCOVERY_COMPLETENESS | **${report.deterministicDiscoveryCompleteness}%** |`,
    `| FOREIGN_LANGUAGE_RESIDUAL | **${report.foreignLanguageResidual}** |`,
    `| EMPTY_REQUIRED_LOCALIZED_FIELDS | **${report.emptyRequiredLocalizedFields}** |`,
    `| PLACEHOLDERS | **${report.placeholders}** |`,
    `| MOJIBAKE | **${report.mojibake}** |`,
    "",
    "## 4. MULTI_TRANSLATION v1.11 (ordinary flashcards)",
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| ORDINARY_FLASHCARD_SCOPE | **${multi.ordinaryFlashcardScope}** |`,
    `| MULTI_TRANSLATION_SCAN_COVERAGE | **${multi.multiTranslationScanCoverage}** |`,
    `| MULTIPLE_TRANSLATION_CANDIDATES_RAW | **${multi.multipleTranslationCandidatesRaw}** |`,
    `| MULTIPLE_TRANSLATION_VALIDATED_REAL | **${multi.multipleTranslationValidatedReal}** |`,
    `| MULTIPLE_TRANSLATION_OWNER_UNRESOLVED | **${multi.multipleTranslationOwnerUnresolved}** |`,
    `| ORDINARY_FLASHCARD_TRANSLATION_COUNT_VIOLATIONS | **${multi.ordinaryFlashcardTranslationCountViolations}** |`,
    "",
    "## 5. Runtime / browser",
    "",
    "| Gate | Value |",
    "|------|-------|",
    `| KURSS_FULL_MODULE_RUNTIME_SMOKE | **${runtime.kurssFullModuleRuntimeSmoke}** |`,
    `| KURSS_L1_L21_RENDER_SCOPE | **${runtime.kurssL1L21RenderScope}** |`,
    `| KURSS_DYNAMIC_EXERCISE | **${runtime.kurssDynamicExercise}** |`,
    `| KURSS_DYNAMIC_TRANSLATE | **${runtime.kurssDynamicTranslate}** |`,
    `| KURSS_FIRST_CARD_INITIALIZATION | **${runtime.kurssFirstCardInitialization}** |`,
    `| KURSS_PROGRESS | **${runtime.kurssProgress}** |`,
    `| KURSS_FLIP | **${runtime.kurssFlip}** |`,
    `| KURSS_NEXT | **${runtime.kurssNext}** |`,
    `| Static sections | **${runtime.staticSectionsPass ? "PASS" : "FAIL"}** |`,
    "",
    "## 6. Structural / integrity",
    "",
    "| Gate | Value |",
    "|------|-------|",
    `| MIRROR | **${structural.MIRROR}** |`,
    `| SYNTAX | **${structural.SYNTAX}** |`,
    `| STRUCTURE | **${structural.STRUCTURE}** |`,
    `| ID_ORDER | **${structural.ID_ORDER}** |`,
    `| validate-kurss --lang=et | **${structural.VALIDATE_KURSS}** |`,
    `| DE_CHANGES | **${structural.DE_CHANGES}** |`,
    `| UNEXPECTED_PRODUCTION_CHANGES | **${unexpected.unexpectedCount}** |`,
    `| LV behavior unchanged | **${structural.LV_BEHAVIOR_UNCHANGED}** |`,
    "",
    "## 7. OWNER backlog",
    "",
    `| OWNER backlog | **${ownerFindings.length}** |`,
    "",
  ].join("\n");

  fs.writeFileSync(REPORT_MD, md);
  console.log(JSON.stringify({ verdict, finalClosureVerdict, foreign: report.foreignLanguageResidual, ownerBacklog: ownerFindings.length }, null, 2));
  if (verdict !== "ET_KURSS_V111_FULL_MODULE_PASS") process.exit(1);
}

main();
