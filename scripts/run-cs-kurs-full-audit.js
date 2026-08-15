#!/usr/bin/env node
/**
 * CS-DE Kurs full audit (READ-ONLY). Deterministic gates + heuristic linguistic sweep.
 * Usage: node scripts/run-cs-kurs-full-audit.js
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const {
  LV_DIACRITICS,
  LV_WORDS,
  PL_CHARS,
  MOJIBAKE,
  detectForeignRemnant,
} = require("./lib/cs-audit-helpers");
const { extractUnits, stripHtml, loadWindow } = require("./lib/cs-kurs-audit-extract");

const OUT_DIR = path.join(ROOT, "reports", "temp", "cs-kurs-audit");
const OUT_JSON = path.join(OUT_DIR, "full-audit.json");
const OUT_MD = path.join(ROOT, "reports", "cs-kurs-full-audit.md");

const LV_PATTERNS = [
  { re: /[āēīūģķļņĀĒĪŪĢĶĻŅ]/, tag: "LV_DIACRITIC" },
  { re: /\b(piemēram|teikuma|priekšmets|noliegums|darbības|vārdu|galotni|klikšķini|kartītes|lekcija|pārtulko|vingrinājums|latviešu|vācu)\b/i, tag: "LV_WORD" },
  { re: /\b(Lekcija|Pārtulko|Klikšķini|kartītes|vācu tulkojumu|nākamais klikšķis)\b/, tag: "LV_UI_STRING" },
  { re: /\b(Valūtas|latviešu|lotyš|łotew)\b/i, tag: "LV_REF" },
];

const EN_PATTERNS = [
  { re: /\b(In interrogative|for example|the verb comes|question word)\b/i, tag: "EN_GRAMMAR_NOTE" },
  { re: /\b(click the card|tap to reveal|Exercise)\b/i, tag: "EN_UI" },
];

const OTHER_LANG = [
  { re: /[ąęłńśźżĄĘŁŃŚŹŻ]/, tag: "PL_CHAR" },
  { re: /[а-яА-ЯёЁ]/, tag: "RU_CYRILLIC" },
  { re: /[\u0900-\u097F]/, tag: "DEVANAGARI" },
];

const CS_SUSPICIOUS = [
  { re: /\b(zemřít|Zemřít|Zemře)\b/, tag: "WRONG_CS_DIE_ARTICLE", reason: "„zemřít“ je české sloveso (umřít), ne článek „die“" },
  { re: /\bUMŘI\b/, tag: "GARBLED_DIE", reason: "„UMŘI“ není správný český ekvivalent německého DIE" },
  { re: /\bpiemēram\b/i, tag: "LV_IN_CS", reason: "Lotvisks „piemēram“ v českém textu" },
  { re: /\bcommst\b/i, tag: "TYPO_KOMMST", reason: "Chybný tvar „commst“ místo „kommst“ v české vrstvě" },
  { re: /\bnict\b/i, tag: "TYPO_NICHT", reason: "„nict“ místo německého „nicht“ nebo českého „ne“" },
];

function md5Pair(primary, mirror) {
  const a = fs.readFileSync(primary);
  const b = fs.readFileSync(mirror);
  return a.equals(b);
}

function checkJs(file) {
  try {
    execSync(`node --check "${file}"`, { encoding: "utf8" });
    return true;
  } catch {
    return false;
  }
}

function isPronunciationMacronFalsePositive(text) {
  // Long-vowel notation in Kurss (e.g. hīr, flūr) uses macrons — not Latvian leftovers.
  return /\([a-zA-Zāēīūōăĕĭŏŭ]*[īūāēō][a-zA-Zāēīūōăĕĭŏŭ]*\)/.test(text);
}

function scanCsText(text, ctx) {
  const hits = [];
  if (!text || typeof text !== "string") return hits;
  const sample = text.length > 800 ? text.slice(0, 800) : text;
  if (MOJIBAKE.test(text)) hits.push({ tag: "MOJIBAKE", severity: "HIGH" });
  const lvDiacriticHit = LV_DIACRITICS.test(sample);
  if (lvDiacriticHit && !isPronunciationMacronFalsePositive(sample)) {
    hits.push({ tag: "LV_DIACRITIC", severity: "HIGH" });
  }
  for (const p of LV_PATTERNS) {
    if (p.tag === "LV_DIACRITIC") continue;
    if (p.re.test(sample)) hits.push({ tag: p.tag, severity: "HIGH" });
  }
  for (const p of EN_PATTERNS) {
    if (p.re.test(sample)) hits.push({ tag: p.tag, severity: "MEDIUM" });
  }
  for (const p of OTHER_LANG) {
    if (p.re.test(sample)) hits.push({ tag: p.tag, severity: "HIGH" });
  }
  for (const p of CS_SUSPICIOUS) {
    if (p.re.test(sample)) hits.push({ tag: p.tag, severity: "HIGH", reason: p.reason });
  }
  const fr = detectForeignRemnant(sample);
  for (const f of fr) {
    if (!hits.some((h) => h.tag === f)) hits.push({ tag: f, severity: "HIGH" });
  }
  return hits;
}

function compareDe(csDe, lvDe, unit) {
  if (!lvDe && !csDe) return null;
  if (lvDe && csDe && lvDe.trim() === csDe.trim()) return null;
  return {
    unitId: unit.unitId,
    severity: "CRITICAL",
    status: "DE_PARITY_ISSUE",
    file: unit.file,
    lessonSection: unit.lessonKey || "",
    location: unit.field,
    field: "de/back",
    current: csDe || "(empty)",
    proposed: lvDe || "(LV MASTER)",
    reason: "CS DE pole neodpovídá LV MASTER DE obsahu",
  };
}

function runAudit() {
  const extracted = extractUnits();
  const { units, meta, lvData, csData, lvHtml, csHtml, lvTraining, csTraining } = extracted;
  let sectionCount = 0;
  for (const l of Object.values(lvData)) sectionCount += (l.sections || []).length;
  meta.sectionCount = sectionCount;

  const findings = [];
  let findingNum = 0;
  const seen = new Set();

  function addFinding(f) {
    const key = `${f.file}|${f.lessonSection}|${f.location}|${f.field}|${f.current}`;
    if (seen.has(key)) return;
    seen.add(key);
    findingNum += 1;
    findings.push({ num: findingNum, ...f });
  }

  // Mirror sync
  const files = [
    ["data/cs/courseLessons.js", "www/data/cs/courseLessons.js"],
    ["data/cs/courseTrainingCards.js", "www/data/cs/courseTrainingCards.js"],
  ];
  let mirrorPass = true;
  for (const [p, w] of files) {
    const pp = path.join(ROOT, p);
    const wp = path.join(ROOT, w);
    if (!md5Pair(pp, wp)) {
      mirrorPass = false;
      addFinding({
        severity: "CRITICAL",
        status: "STRUCTURAL_ISSUE",
        file: p,
        lessonSection: "(mirror)",
        location: "PRIMARY↔WWW",
        field: "file",
        current: "out of sync",
        proposed: "Synchronize mirror",
        reason: `${p} and ${w} are not identical`,
      });
    }
  }

  // JS syntax
  let jsPass = true;
  for (const f of ["data/cs/courseLessons.js", "data/cs/courseTrainingCards.js"]) {
    if (!checkJs(path.join(ROOT, f))) {
      jsPass = false;
      addFinding({
        severity: "CRITICAL",
        status: "FUNCTIONAL_ISSUE",
        file: f,
        lessonSection: "",
        location: "syntax",
        field: "JavaScript",
        current: "parse error",
        proposed: "Fix JS syntax",
        reason: `node --check failed for ${f}`,
      });
    }
  }

  // Structural lesson keys
  let structuralPass = true;
  const lvKeys = new Set([...Object.keys(lvData), ...Object.keys(lvHtml)]);
  const csKeys = new Set([...Object.keys(csData), ...Object.keys(csHtml)]);
  for (const k of lvKeys) {
    if (!csKeys.has(k)) {
      structuralPass = false;
      addFinding({
        severity: "CRITICAL",
        status: "STRUCTURAL_ISSUE",
        file: "data/cs/courseLessons.js",
        lessonSection: k,
        location: k,
        field: "lesson",
        current: "(missing)",
        proposed: "Add lesson matching LV MASTER",
        reason: `Missing Czech lesson/key ${k}`,
      });
    }
  }
  for (const k of csKeys) {
    if (!lvKeys.has(k)) {
      structuralPass = false;
      addFinding({
        severity: "HIGH",
        status: "STRUCTURAL_ISSUE",
        file: "data/cs/courseLessons.js",
        lessonSection: k,
        location: k,
        field: "lesson",
        current: k,
        proposed: "Remove or align with LV MASTER",
        reason: `Extra Czech lesson/key not in LV MASTER: ${k}`,
      });
    }
  }

  // Section / card counts per lesson
  let translateCount = 0;
  let exerciseCount = 0;
  let trainingCount = 0;

  for (const [lessonKey, lvLesson] of Object.entries(lvData)) {
    const csLesson = csData[lessonKey];
    if (!csLesson) continue;
    const lvSec = lvLesson.sections || [];
    const csSec = csLesson.sections || [];
    if (lvSec.length !== csSec.length) {
      structuralPass = false;
      addFinding({
        severity: "HIGH",
        status: "STRUCTURAL_ISSUE",
        file: "data/cs/courseLessons.js",
        lessonSection: lessonKey,
        location: "sections.length",
        field: "sections",
        current: String(csSec.length),
        proposed: String(lvSec.length),
        reason: `Section count mismatch LV=${lvSec.length} CS=${csSec.length}`,
      });
    }
    for (let si = 0; si < Math.min(lvSec.length, csSec.length); si++) {
      const lvCards = lvSec[si].cards || [];
      const csCards = csSec[si].cards || [];
      if (lvCards.length !== csCards.length) {
        structuralPass = false;
        addFinding({
          severity: "HIGH",
          status: "STRUCTURAL_ISSUE",
          file: "data/cs/courseLessons.js",
          lessonSection: lessonKey,
          location: `sections[${si}].cards`,
          field: "cards.length",
          current: String(csCards.length),
          proposed: String(lvCards.length),
          reason: `Card count mismatch in section ${si}: LV=${lvCards.length} CS=${csCards.length}`,
        });
      }
      const isEx = /übung|cvičení/i.test(csSec[si].title || "");
      if (isEx) exerciseCount += csCards.length;
      else if (csCards.length) translateCount += csCards.length;

      // DE parity on cards
      for (let ci = 0; ci < Math.min(lvCards.length, csCards.length); ci++) {
        const lvBack = lvCards[ci].de || lvCards[ci].answer || lvCards[ci].back || "";
        const csBack = csCards[ci].de || csCards[ci].answer || csCards[ci].back || "";
        const deIssue = compareDe(csBack, lvBack, {
          unitId: `${lessonKey}/section[${si}]/card[${ci}]`,
          file: "data/cs/courseLessons.js",
          lessonKey,
          field: `sections[${si}].cards[${ci}].back`,
        });
        if (deIssue) addFinding({
          ...deIssue,
          file: "data/cs/courseLessons.js",
          lessonSection: lessonKey,
          location: deIssue.location,
          field: "back",
          current: deIssue.current,
          proposed: deIssue.proposed,
        });
      }
    }
  }

  // Training card counts + DE parity
  for (let n = 1; n <= 6; n++) {
    const lvDeck = lvTraining[`lesson${n}TrainingCards`] || [];
    const csDeck = csTraining[`lesson${n}TrainingCardsCs`] || [];
    trainingCount += csDeck.length;
    if (lvDeck.length !== csDeck.length) {
      structuralPass = false;
      addFinding({
        severity: "HIGH",
        status: "STRUCTURAL_ISSUE",
        file: "data/cs/courseTrainingCards.js",
        lessonSection: `lesson${n}`,
        location: `lesson${n}TrainingCardsCs.length`,
        field: "trainingCards",
        current: String(csDeck.length),
        proposed: String(lvDeck.length),
        reason: `Training card count mismatch lesson ${n}`,
      });
    }
    for (let i = 0; i < Math.min(lvDeck.length, csDeck.length); i++) {
      const deIssue = compareDe(csDeck[i]?.back, lvDeck[i]?.back, {
        unitId: `training/lesson${n}/card[${i}]`,
        file: "data/cs/courseTrainingCards.js",
        lessonKey: `lesson${n}`,
        field: `lesson${n}TrainingCardsCs[${i}].back`,
      });
      if (deIssue) addFinding({
        ...deIssue,
        file: "data/cs/courseTrainingCards.js",
        lessonSection: `lesson${n}`,
        location: deIssue.location,
        field: "back",
        current: deIssue.current,
        proposed: deIssue.proposed,
      });
    }
  }

  const lvEx = lvTraining.lesson7ExerciseCards || [];
  const csEx = csTraining.lesson7ExerciseCardsCs || [];
  exerciseCount += csEx.length;
  if (lvEx.length !== csEx.length) {
    structuralPass = false;
    addFinding({
      severity: "HIGH",
      status: "STRUCTURAL_ISSUE",
      file: "data/cs/courseTrainingCards.js",
      lessonSection: "lesson7",
      location: "lesson7ExerciseCardsCs.length",
      field: "exerciseCards",
      current: String(csEx.length),
      proposed: String(lvEx.length),
      reason: "Lesson 7 exercise card count mismatch",
    });
  }

  let deParityPass = !findings.some((f) => f.status === "DE_PARITY_ISSUE");

  // Scan all units for CS text issues
  let lvLeftoverCount = 0;
  let enLeftoverCount = 0;
  let otherLeftoverCount = 0;

  for (const unit of units) {
    const texts = [];
    if (unit.currentCs) texts.push({ text: unit.currentCs, field: unit.field });
    if (unit.type === "legacyHtml") {
      texts.push({ text: stripHtml(unit.currentCs), field: "legacyHtml(stripped)" });
    }
    for (const { text, field } of texts) {
      if (!text || unit.field?.includes("back") || field === "back") continue;
      const hits = scanCsText(text, unit);
      for (const h of hits) {
        if (h.tag.startsWith("LV")) lvLeftoverCount++;
        else if (h.tag.startsWith("EN")) enLeftoverCount++;
        else if (["PL_CHAR", "SK_CHAR", "RU_CYRILLIC", "DEVANAGARI", "PL_LOWER"].includes(h.tag)) otherLeftoverCount++;
        const isLv = h.tag.startsWith("LV");
        addFinding({
          severity: h.severity || "MEDIUM",
          status: isLv ? "OWNER_REVIEW" : "OWNER_REVIEW",
          file: unit.file,
          lessonSection: unit.lessonKey || unit.unitId.split("/")[0],
          location: unit.unitId,
          field: field,
          current: text.length > 300 ? text.slice(0, 300) + "…" : text,
          proposed: "(OWNER: Czech replacement per LV MASTER meaning)",
          reason: h.reason || `Foreign/script issue: ${h.tag}`,
        });
      }
    }

    // Empty CS on user-visible fields
    if (
      unit.type !== "legacyHtml"
      && unit.type !== "fillExercise"
      && unit.type !== "multiStepExercise"
      && unit.type !== "conjugationExercise"
      && unit.type !== "imperativeExercise"
      && unit.type !== "promptTaskExercise"
      && ["translateCard", "trainingTranslate", "exerciseCard", "sectionItem", "metadata"].includes(unit.type)
      && !String(unit.currentCs || "").trim()
    ) {
      addFinding({
        severity: "CRITICAL",
        status: "STRUCTURAL_ISSUE",
        file: unit.file,
        lessonSection: unit.lessonKey || "",
        location: unit.unitId,
        field: unit.field,
        current: "(empty)",
        proposed: "(Czech content required)",
        reason: "Empty user-visible Czech text",
      });
    }

    // Empty DE answer on translate/training cards (not Fill exercises using answer field)
    if (
      unit.deAnswer !== undefined
      && unit.type !== "fillExercise"
      && unit.type !== "multiStepExercise"
      && unit.type !== "conjugationExercise"
      && unit.type !== "imperativeExercise"
      && unit.type !== "promptTaskExercise"
      && ["translateCard", "trainingTranslate", "exerciseCard"].includes(unit.type)
      && !String(unit.deAnswer || "").trim()
    ) {
      addFinding({
        severity: "CRITICAL",
        status: "DE_PARITY_ISSUE",
        file: unit.file,
        lessonSection: unit.lessonKey || "",
        location: unit.unitId,
        field: "back/de",
        current: "(empty)",
        proposed: unit.lvDeAnswer || "(from LV MASTER)",
        reason: "Missing expected DE answer on translate/exercise card",
      });
    }
  }

  // CS UI kurss strings
  const csUiPath = path.join(ROOT, "languages/cs/ui.js");
  if (fs.existsSync(csUiPath)) {
    const uiText = fs.readFileSync(csUiPath, "utf8");
    const kurssBlock = uiText.match(/"kurss":\s*\{[\s\S]*?\n  \}/);
    if (kurssBlock) {
      const hits = scanCsText(kurssBlock[0], { file: "languages/cs/ui.js" });
      for (const h of hits) {
        if (h.tag.startsWith("LV")) lvLeftoverCount++;
        addFinding({
          severity: "MEDIUM",
          status: "OWNER_REVIEW",
          file: "languages/cs/ui.js",
          lessonSection: "kurss UI",
          location: "kurss.*",
          field: "i18n",
          current: "(see kurss block)",
          proposed: "(Czech UI string)",
          reason: h.reason || h.tag,
        });
      }
    }
  }

  // Scan raw files for hardcoded LV in CS course files
  const rawCsLessons = fs.readFileSync(path.join(ROOT, "data/cs/courseLessons.js"), "utf8");
  const lvUiInCs = rawCsLessons.match(/Klikšķini|kartītes|Lekcija \d|pārtulkošanas|vingrinājuma/gi) || [];
  if (lvUiInCs.length) {
    lvLeftoverCount += lvUiInCs.length;
    addFinding({
      severity: "HIGH",
      status: "OWNER_REVIEW",
      file: "data/cs/courseLessons.js",
      lessonSection: "(embedded UI hints)",
      location: "legacyHtml/training hints",
      field: "aria-label / lesson1-training-hint",
      current: lvUiInCs.slice(0, 5).join("; "),
      proposed: "Czech UI hints (e.g. Klepněte na kartu…)",
      reason: "Latvian UI leftover strings in Czech course HTML",
    });
  }

  const severityCounts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  const statusCounts = {};
  for (const f of findings) {
    if (severityCounts[f.severity] !== undefined) severityCounts[f.severity]++;
    statusCounts[f.status] = (statusCounts[f.status] || 0) + 1;
  }

  const uniqueObjects = new Set(findings.map((f) => `${f.file}|${f.lessonSection}|${f.location}`));

  const gates = {
    structuralParity: structuralPass ? "PASS" : "FAIL",
    deReadOnlyParity: deParityPass ? "PASS" : "FAIL",
    csLinguisticQuality: severityCounts.CRITICAL === 0 && severityCounts.HIGH < 5 ? "FAIL" : "FAIL",
    pedagogicalParity: "FAIL",
    practiceTraining: structuralPass ? "PASS" : "FAIL",
    translateSystem: structuralPass ? "PASS" : "FAIL",
    uiI18n: lvLeftoverCount === 0 ? "PASS" : "FAIL",
    javascript: jsPass ? "PASS" : "FAIL",
    mojibakeUnicode: findings.some((f) => f.reason?.includes("MOJIBAKE")) ? "FAIL" : "PASS",
    lvLeftovers: `${findings.filter((f) => f.reason?.includes("LV") || f.reason?.includes("Latvian")).length} / ${lvLeftoverCount}`,
    enLeftovers: `${findings.filter((f) => f.reason?.includes("EN")).length} / ${enLeftoverCount}`,
    otherLeftovers: `${findings.filter((f) => /PL_|RU_|SK_|DEVANAGARI/.test(f.reason || "")).length} / ${otherLeftoverCount}`,
    primaryWwwSync: mirrorPass ? "PASS" : "FAIL",
    productionChanges: 0,
  };

  gates.csLinguisticQuality = (severityCounts.CRITICAL > 0 || severityCounts.HIGH > 10) ? "FAIL" : "PASS";
  gates.pedagogicalParity = findings.some((f) => f.reason?.includes("pedagog") || f.severity === "CRITICAL") ? "FAIL" : "PASS";

  const verdict =
    findings.length === 0
      ? "CS–DE KURS — AUDIT CLEAN"
      : "CS–DE KURS — OWNER REVIEW / REPAIRS REQUIRED";

  const audit = {
    meta: {
      date: new Date().toISOString(),
      mode: "READ-ONLY",
      productionFiles: [
        "data/cs/courseLessons.js",
        "www/data/cs/courseLessons.js",
        "data/cs/courseTrainingCards.js",
        "www/data/cs/courseTrainingCards.js",
        "languages/cs/ui.js",
      ],
      lvMasterFiles: ["data/courseLessons.js", "ui.js (lesson1-7 training cards)"],
      lessons: meta.lvLessonCount,
      sections: meta.sectionCount,
      sections: units.filter((u) => u.type === "sectionItem").length,
      translateCards: translateCount + trainingCount,
      exerciseCards: exerciseCount,
      auditedCsTextUnits: units.length,
      findingsCount: findings.length,
      uniqueAffectedObjects: uniqueObjects.size,
      sourceDeIssue: statusCounts.SOURCE_DE_ISSUE || 0,
      deParityIssue: statusCounts.DE_PARITY_ISSUE || 0,
      falsePositive: statusCounts.FALSE_POSITIVE || 0,
      ownerReview: statusCounts.OWNER_REVIEW || 0,
      severity: severityCounts,
      gates,
      verdict,
      linguisticModel: "deterministic + heuristic (no Luna API key)",
    },
    findings,
    unitsMeta: meta,
  };

  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(audit, null, 2));
  fs.writeFileSync(OUT_MD, buildMarkdown(audit));
  console.log(JSON.stringify(audit.meta, null, 2));
  return audit;
}

function buildMarkdown(audit) {
  const m = audit.meta;
  const lines = [];
  lines.push("# CS–DE KURS — FULL QUALITY AUDIT");
  lines.push("");
  lines.push("## CS–DE KURS — FULL AUDIT SUMMARY");
  lines.push("");
  lines.push("| Metrika | Vērtība |");
  lines.push("|---|---|");
  lines.push(`| Auditētie production faili | ${m.productionFiles.join(", ")} |`);
  lines.push(`| LV MASTER faili | ${m.lvMasterFiles.join(", ")} |`);
  lines.push(`| Lessons skaits | ${m.lessons} |`);
  lines.push(`| Sections skaits | ${m.sectionCount || "—"} |`);
  lines.push(`| Practice/training kartīšu skaits | ${m.translateCards} (translate/training) |`);
  lines.push(`| Exercise kartīšu skaits | ${m.exerciseCards} |`);
  lines.push(`| Translate vienības (lessons 8–21) | incl. in training count |`);
  lines.push(`| Auditēto CS teksta vienību skaits | ${m.auditedCsTextUnits} |`);
  lines.push(`| Findings skaits | ${m.findingsCount} |`);
  lines.push(`| Unique affected objects | ${m.uniqueAffectedObjects} |`);
  lines.push(`| SOURCE_DE_ISSUE | ${m.sourceDeIssue} |`);
  lines.push(`| DE_PARITY_ISSUE | ${m.deParityIssue} |`);
  lines.push(`| FALSE_POSITIVE | ${m.falsePositive} |`);
  lines.push(`| OWNER_REVIEW | ${m.ownerReview} |`);
  lines.push(`| CRITICAL | ${m.severity.CRITICAL} |`);
  lines.push(`| HIGH | ${m.severity.HIGH} |`);
  lines.push(`| MEDIUM | ${m.severity.MEDIUM} |`);
  lines.push(`| LOW | ${m.severity.LOW} |`);
  lines.push(`| Production changes | **${m.gates.productionChanges}** |`);
  lines.push(`| Linguistic audit | ${m.linguisticModel} |`);
  lines.push("");
  lines.push("## OBLIGĀTIE GATES");
  lines.push("");
  lines.push("| Gate | Rezultāts |");
  lines.push("|---|---|");
  lines.push(`| STRUCTURAL PARITY | **${m.gates.structuralParity}** |`);
  lines.push(`| DE READ-ONLY / PARITY | **${m.gates.deReadOnlyParity}** |`);
  lines.push(`| CS LINGUISTIC QUALITY | **${m.gates.csLinguisticQuality}** |`);
  lines.push(`| PEDAGOGICAL PARITY | **${m.gates.pedagogicalParity}** |`);
  lines.push(`| PRACTICE / TRAINING SYSTEM | **${m.gates.practiceTraining}** |`);
  lines.push(`| TRANSLATE SYSTEM | **${m.gates.translateSystem}** |`);
  lines.push(`| UI / i18n | **${m.gates.uiI18n}** |`);
  lines.push(`| JAVASCRIPT | **${m.gates.javascript}** |`);
  lines.push(`| MOJIBAKE / UNICODE | **${m.gates.mojibakeUnicode}** |`);
  lines.push(`| LV LEFTOVERS | **${m.gates.lvLeftovers}** |`);
  lines.push(`| EN LEFTOVERS | **${m.gates.enLeftovers}** |`);
  lines.push(`| OTHER-LANGUAGE LEFTOVERS | **${m.gates.otherLeftovers}** |`);
  lines.push(`| PRIMARY ↔ WWW SYNC | **${m.gates.primaryWwwSync}** |`);
  lines.push(`| PRODUCTION CHANGES | **${m.gates.productionChanges}** |`);
  lines.push("");
  lines.push(`## FINAL VERDICT: **${m.verdict}**`);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## FINDINGS TABLE");
  lines.push("");
  lines.push("| # | Severity | Status | File | Lesson/Section | ID/Location | Field | CURRENT | Proposed / Recommendation | Reason |");
  lines.push("| - | -------- | ------ | ---- | -------------- | ----------- | ----- | ------- | ------------------------- | ------ |");

  for (const f of audit.findings) {
    const cur = String(f.current || "").replace(/\|/g, "\\|").replace(/\n/g, " ");
    const prop = String(f.proposed || "").replace(/\|/g, "\\|");
    const reason = String(f.reason || "").replace(/\|/g, "\\|");
    lines.push(`| ${f.num} | ${f.severity} | ${f.status} | ${f.file} | ${f.lessonSection} | ${f.location} | ${f.field} | ${cur} | ${prop} | ${reason} |`);
  }

  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push("## GROUPING BY OBJECT (OWNER REVIEW)");
  lines.push("");

  const groups = {};
  for (const f of audit.findings) {
    const gk = `${f.file} :: ${f.lessonSection} :: ${f.location}`;
    if (!groups[gk]) groups[gk] = [];
    groups[gk].push(f);
  }
  for (const [gk, items] of Object.entries(groups)) {
    lines.push(`### ${gk}`);
    lines.push("");
    for (const f of items) {
      lines.push(`- **#${f.num}** [${f.severity}] ${f.status} — \`${f.field}\`: ${f.reason}`);
      lines.push(`  - CURRENT: ${String(f.current).slice(0, 200)}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

runAudit();
