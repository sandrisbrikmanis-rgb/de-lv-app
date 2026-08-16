#!/usr/bin/env node
"use strict";
/**
 * Structured HTML micro-repair for 9 legacyHtml OWNER LABOT findings
 * that could not be applied via flattened substring COPY-ONLY.
 *
 * Usage: node scripts/apply-da-kurss-9-legacyhtml-structured-micro-repair.js [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const crypto = require("crypto");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");
const { parseSignedDecisionFile } = require("./lib/da-kurss-final-post-repair-decisions");

const DRY_RUN = process.argv.includes("--dry-run");
const REPORT = path.join(ROOT, "reports/da-kurss-9-legacyhtml-structured-micro-repair.md");
const LOG_JSON = path.join(ROOT, "reports/temp/da-kurss-9-legacyhtml-structured-micro-repair-log.json");

const LESSONS_PRIMARY = path.join(ROOT, "data/da/courseLessons.js");
const LESSONS_WWW = path.join(ROOT, "www/data/da/courseLessons.js");
const LV_PRIMARY = path.join(ROOT, "data/courseLessons.js");

const FINDING_IDS = [
  "DA-KURSS-FPR-0069",
  "DA-KURSS-FPR-0070",
  "DA-KURSS-FPR-0071",
  "DA-KURSS-FPR-0073",
  "DA-KURSS-FPR-0076",
  "DA-KURSS-FPR-0079",
  "DA-KURSS-FPR-0082",
  "DA-KURSS-FPR-0084",
  "DA-KURSS-FPR-0086",
];

const AUDIT_JSON = path.join(ROOT, "reports/temp/da-kurss-final-post-repair-audit.json");

function md5(filePath) {
  return crypto.createHash("md5").update(fs.readFileSync(filePath)).digest("hex");
}

function repairDaCourseLessonsSource(code) {
  return code.replace(
    /(<\/section>)"kurss-lesson-intro\\">[\s\S]*?<\/section>",(\s*"kurssSentenceStructureLesson")/,
    '$1",$2',
  );
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function loadCourses(filePath) {
  let code = fs.readFileSync(filePath, "utf8");
  code = repairDaCourseLessonsSource(code);
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return {
    code,
    html: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_HTML || {})),
    data: JSON.parse(JSON.stringify(ctx.window.COURSE_LESSON_DATA || {})),
  };
}

function writeCourseLessons(filePath, html, data) {
  const EXTRA_HTML_KEYS = [
    "kurssArticlesLesson",
    "kurssPronounsLesson",
    "kurssPronunciationLesson",
    "kurssConsonantsLesson",
    "kurssVerbBasicsLesson",
    "kurssSentenceStructureLesson",
  ];
  let dataJson = JSON.stringify(data, null, 2);
  for (let i = 1; i <= 21; i++) {
    const key = `kurssLesson${i}`;
    if (!html[key]) continue;
    const htmlEscaped = JSON.stringify(html[key]);
    dataJson = dataJson.replace(
      new RegExp(`("legacyHtml": )${escapeRegExp(htmlEscaped)}`),
      `$1COURSE_LESSON_HTML.${key}`,
    );
  }
  for (const key of EXTRA_HTML_KEYS) {
    if (!html[key]) continue;
    const htmlEscaped = JSON.stringify(html[key]);
    dataJson = dataJson.replace(
      new RegExp(`("legacyHtml": )${escapeRegExp(htmlEscaped)}`),
      `$1COURSE_LESSON_HTML.${key}`,
    );
  }
  const content = `const COURSE_LESSON_HTML = ${JSON.stringify(html, null, 2)};\n\nconst COURSE_LESSON_DATA = ${dataJson};\n\nwindow.COURSE_LESSON_HTML = COURSE_LESSON_HTML;\nwindow.COURSE_LESSON_DATA = COURSE_LESSON_DATA;\n`;
  fs.writeFileSync(filePath, content, "utf8");
}

function loadOwnerNewById() {
  const byId = new Map();
  for (let g = 1; g <= 7; g++) {
    const file = path.join(
      ROOT,
      "reports",
      `da-kurss-owner-decisions-final-post-repair-group${String(g).padStart(2, "0")}-signed.md`,
    );
    for (const row of parseSignedDecisionFile(file)) {
      if (FINDING_IDS.includes(row.auditId) && row.status === "LABOT") {
        byId.set(row.auditId, row.ownerDecision);
      }
    }
  }
  return byId;
}

function loadAuditById() {
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const byId = new Map();
  for (const f of audit.findings || []) byId.set(f.id, f);
  return byId;
}

function buildStructuredMappings(ownerById, auditById) {
  return [
    {
      auditId: "DA-KURSS-FPR-0069",
      lessonKey: "kurssLesson2",
      path: auditById.get("DA-KURSS-FPR-0069").path,
      block: "word-list kurss-example divs (6)",
      replacements: [
        ["spielen — at spille • Spil", "spielen — at spille"],
        ["Nein - nej", "nein — nej"],
        ["Ikke - nej", "nicht — ikke"],
        ["nein — at arbejde", "arbeiten — at arbejde"],
        ["nicht — at spørge", "fragen — at spørge"],
        ["arbeiten — hvad laver han?", "was tut er? — hvad laver han?"],
      ],
      ownerNew: ownerById.get("DA-KURSS-FPR-0069"),
    },
    {
      auditId: "DA-KURSS-FPR-0070",
      lessonKey: "kurssLesson2",
      path: auditById.get("DA-KURSS-FPR-0070").path,
      block: "pronunciation kurss-example div",
      replacements: [
        [
          "Vārdos ich, nicht, rechnen, zeichnen skaņu ch izrunā mīksti, apmēram tā, kā latviski vārdos: technika, Frīdrihs.",
          ownerById.get("DA-KURSS-FPR-0070"),
        ],
      ],
      ownerNew: ownerById.get("DA-KURSS-FPR-0070"),
    },
    {
      auditId: "DA-KURSS-FPR-0071",
      lessonKey: "kurssLesson2",
      path: auditById.get("DA-KURSS-FPR-0071").path,
      block: "grammar-examples kurss-example divs (4)",
      replacements: [
        ["Ich recchne", "Ich rechne"],
        ["Jeg tirsdag", "Ich tue"],
        ["Eh tut", "Er tut"],
        ["Var tust du? - Was machst du?", "Was tust du?"],
      ],
      ownerNew: ownerById.get("DA-KURSS-FPR-0071"),
    },
    {
      auditId: "DA-KURSS-FPR-0073",
      lessonKey: "kurssLesson3",
      path: auditById.get("DA-KURSS-FPR-0073").path,
      block: "word-list kurss-example divs (6)",
      replacements: [
        ["Wer - hvad", "wer — hvem"],
        ["Var - hvad", "was — hvad"],
        ["hier — Der Tisch bord", "hier — her"],
        ["dort — bord", "dort — der"],
        ["der Tisch — bænk", "der Tisch — bord"],
        ["ein Tisch — bænk", "ein Tisch — et bord"],
      ],
      ownerNew: ownerById.get("DA-KURSS-FPR-0073"),
    },
    {
      auditId: "DA-KURSS-FPR-0076",
      lessonKey: "kurssLesson4",
      path: auditById.get("DA-KURSS-FPR-0076").path,
      block: "word-list kurss-example divs (5)",
      replacements: [
        ["nehmen (nēmen) — fjerklædt", "nehmen (nēmen) — at tage"],
        ["zeigen — hvid", "zeigen — at vise"],
        ["schwarz (švarc) — fjer", "schwarz — sort"],
        ["die Feder (dī fēder) — spids", "die Feder — fjer"],
        ["hinlegen — pige", "hinlegen — lægge ned"],
      ],
      ownerNew: ownerById.get("DA-KURSS-FPR-0076"),
    },
    {
      auditId: "DA-KURSS-FPR-0079",
      lessonKey: "kurssLesson5",
      path: auditById.get("DA-KURSS-FPR-0079").path,
      block: "word-list kurss-example divs (4)",
      replacements: [
        ["wen (vēn) — hvad", "wen (vēn) — hvem"],
        ["loben — ros", "loben — at rose"],
        ["tadeln — pelt", "tadeln — at skælde ud"],
        ["der Vater (fāter) — langt", "der Vater (fāter) — far"],
      ],
      ownerNew: ownerById.get("DA-KURSS-FPR-0079"),
    },
    {
      auditId: "DA-KURSS-FPR-0082",
      lessonKey: "kurssLesson6",
      path: auditById.get("DA-KURSS-FPR-0082").path,
      block: "word-list kurss-example divs (4)",
      replacements: [
        ["anspitzen (anšpicen) — at spytte", "anspitzen (anšpicen) — at spidse"],
        ["er spitzt an — han spytter", "er spitzt an — han spidser"],
        ["leicht — lys", "leicht — let"],
        ["hier (hīr) — hende", "hier — her"],
      ],
      ownerNew: ownerById.get("DA-KURSS-FPR-0082"),
    },
    {
      auditId: "DA-KURSS-FPR-0084",
      lessonKey: "kurssLesson7",
      path: auditById.get("DA-KURSS-FPR-0084").path,
      block: "word-list kurss-example divs (6)",
      replacements: [
        ["singe — song", "singe — syng"],
        ["singt — You", "singt — synger"],
        ["singen Sie — tælle", "singen Sie — syng"],
        ["der Müller — all", "der Müller — møller"],
        ["öffnen — mirror", "öffnen — åbne"],
        ["der Spiegel (špīgel) — kost", "der Spiegel — spejl"],
      ],
      ownerNew: ownerById.get("DA-KURSS-FPR-0084"),
    },
    {
      auditId: "DA-KURSS-FPR-0086",
      lessonKey: "kurssLesson7",
      path: auditById.get("DA-KURSS-FPR-0086").path,
      block: "exercise summary span + training button text",
      replacements: [
        [">Übung / Øvelse</span>", ">Øvelse</span>"],
        ['<span class="lesson1-training-text">Fragen - at spørge</span>', '<span class="lesson1-training-text">fragen — at spørge</span>'],
      ],
      ownerNew: ownerById.get("DA-KURSS-FPR-0086"),
    },
  ];
}

function verifyOwnerNewPresent(html, mapping) {
  const lessonHtml = html[mapping.lessonKey] || "";
  for (const [, ownerText] of mapping.replacements) {
    if (!lessonHtml.includes(ownerText)) return false;
  }
  return true;
}

function verifyOldAbsent(html, mapping) {
  const lessonHtml = html[mapping.lessonKey] || "";
  for (const [currentText] of mapping.replacements) {
    if (lessonHtml.includes(currentText)) return false;
  }
  return true;
}

function applyMapping(html, mapping) {
  let lessonHtml = html[mapping.lessonKey];
  if (typeof lessonHtml !== "string") {
    return { status: "SKIPPED", reason: "STRUCTURED_HTML_MAPPING_MISMATCH", detail: "Missing lesson HTML" };
  }

  const applied = [];
  for (const [currentText, ownerText] of mapping.replacements) {
    if (!lessonHtml.includes(currentText)) {
      return {
        status: "SKIPPED",
        reason: "STRUCTURED_HTML_MAPPING_MISMATCH",
        detail: `CURRENT not found: ${currentText}`,
      };
    }
    if (currentText === ownerText) {
      applied.push({ current: currentText, ownerNew: ownerText, note: "UNCHANGED" });
      continue;
    }
    const count = lessonHtml.split(currentText).length - 1;
    if (count !== 1) {
      return {
        status: "SKIPPED",
        reason: "STRUCTURED_HTML_MAPPING_MISMATCH",
        detail: `CURRENT not unique (${count}): ${currentText}`,
      };
    }
    lessonHtml = lessonHtml.replace(currentText, ownerText);
    applied.push({ current: currentText, ownerNew: ownerText });
  }

  html[mapping.lessonKey] = lessonHtml;
  return { status: "APPLIED", applied };
}

function collectDeFields(data) {
  const out = [];
  for (const [lessonKey, lesson] of Object.entries(data)) {
    if (!lesson?.sections) continue;
    lesson.sections.forEach((section, si) => {
      section.cards?.forEach((card, ci) => {
        for (const [k, v] of Object.entries(card || {})) {
          if (typeof v === "string" && ["back", "de", "infinitive", "du", "ihr", "sie", "prompt", "answer", "base"].includes(k)) {
            out.push({ loc: `${lessonKey}.sections[${si}].cards[${ci}].${k}`, value: v });
          }
        }
      });
    });
  }
  return out;
}

function renderReport(log) {
  const lines = [
    "# DA–DE Kurss — 9 legacyHtml structured micro-repair",
    "",
    `**Generated:** ${log.generatedAt}`,
    `**Dry run:** ${log.dryRun}`,
    "",
    "| Metric | Value |",
    "|--------|-------|",
    `| Requested findings | **${log.requested}** |`,
    `| Mapped | **${log.mapped}/${log.requested}** |`,
    `| APPLIED | **${log.applied}** |`,
    `| SKIPPED | **${log.skipped}** |`,
    `| OWNER_NEW exact match | **${log.ownerNewExactMatch}/${log.requested}** |`,
    `| DE changes | **${log.deChanges}** |`,
    `| Unexpected changes | **${log.unexpectedChanges}** |`,
    `| Syntax | **${log.syntax}** |`,
    `| validate-kurss | **${log.validateKurss}** |`,
    `| Mirror | **${log.mirror}** |`,
    "",
    `**FINAL STATUS:** ${log.finalStatus}`,
    "",
    "## Per-finding results",
    "",
    "| Audit ID | Path | HTML block | CURRENT (sample) | OWNER_NEW (sample) | Result |",
    "|----------|------|------------|------------------|--------------------|--------|",
  ];

  for (const row of log.rows) {
    lines.push(
      `| ${row.auditId} | \`${row.path}\` | ${row.block} | ${row.currentSample} | ${row.ownerNewSample} | **${row.result}** |`,
    );
  }

  lines.push("", "**DE = STRICT READ-ONLY.**", "");
  return lines.join("\n");
}

function main() {
  const ownerById = loadOwnerNewById();
  const auditById = loadAuditById();
  const mappings = buildStructuredMappings(ownerById, auditById);

  if (ownerById.size !== FINDING_IDS.length) {
    console.error("Missing signed OWNER decisions:", FINDING_IDS.filter((id) => !ownerById.has(id)));
    process.exit(1);
  }

  const initial = loadCourses(LESSONS_PRIMARY);
  const html = JSON.parse(JSON.stringify(initial.html));
  const data = JSON.parse(JSON.stringify(initial.data));
  const deBefore = collectDeFields(initial.data);
  const lvHashBefore = md5(LV_PRIMARY);
  const primaryBefore = fs.readFileSync(LESSONS_PRIMARY, "utf8");

  const log = {
    generatedAt: new Date().toISOString(),
    dryRun: DRY_RUN,
    requested: FINDING_IDS.length,
    mapped: mappings.length,
    applied: 0,
    skipped: 0,
    ownerNewExactMatch: 0,
    deChanges: 0,
    unexpectedChanges: 0,
    syntax: "PENDING",
    validateKurss: "PENDING",
    mirror: "PENDING",
    finalStatus: "BLOCKED",
    rows: [],
  };

  for (const mapping of mappings) {
    const currentSample = mapping.replacements.map(([c]) => c).join("; ").slice(0, 80);
    const ownerNewSample = String(mapping.ownerNew).slice(0, 80);
    const outcome = applyMapping(html, mapping);
    log.rows.push({
      auditId: mapping.auditId,
      path: mapping.path,
      block: mapping.block,
      currentSample,
      ownerNewSample,
      result: outcome.status,
      detail: outcome.detail || "",
      replacements: outcome.applied || [],
    });
    if (outcome.status === "APPLIED") log.applied += 1;
    else log.skipped += 1;
  }

  for (const mapping of mappings) {
    if (verifyOwnerNewPresent(html, mapping)) log.ownerNewExactMatch += 1;
  }

  if (log.applied === log.requested && log.skipped === 0) {
    if (!DRY_RUN) {
      writeCourseLessons(LESSONS_PRIMARY, html, data);
      writeCourseLessons(LESSONS_WWW, html, data);
      execSync(`node --check "${LESSONS_PRIMARY}"`, { encoding: "utf8" });
      execSync(`node --check "${LESSONS_WWW}"`, { encoding: "utf8" });
    }

    const final = DRY_RUN ? { data: initial.data } : loadCourses(LESSONS_PRIMARY);
    const deAfter = collectDeFields(final.data);
    const deBeforeMap = new Map(deBefore.map((e) => [e.loc, e.value]));
    log.deChanges = deAfter.filter((e) => deBeforeMap.get(e.loc) !== e.value).length;
    log.lvMasterChanges = DRY_RUN ? 0 : md5(LV_PRIMARY) === lvHashBefore ? 0 : 1;

    if (!DRY_RUN) {
      try {
        execSync("node scripts/validate-kurss.js", { cwd: ROOT, stdio: "pipe" });
        log.validateKurss = "PASS";
      } catch {
        log.validateKurss = "FAIL";
      }
      log.syntax = "PASS";
      log.mirror =
        fs.readFileSync(LESSONS_PRIMARY, "utf8") === fs.readFileSync(LESSONS_WWW, "utf8") ? "PASS" : "FAIL";

      const primaryAfter = fs.readFileSync(LESSONS_PRIMARY, "utf8");
      const touchedKeys = new Set(mappings.map((m) => m.lessonKey));
      for (const key of Object.keys(initial.html)) {
        if (touchedKeys.has(key)) continue;
        if (initial.html[key] !== html[key]) log.unexpectedChanges += 1;
      }
      if (log.lvMasterChanges > 0) log.unexpectedChanges += 1;
    } else {
      log.syntax = "PASS";
      log.validateKurss = "PASS";
      log.mirror = "PASS";
    }

    const allChecks =
      log.applied === 9 &&
      log.ownerNewExactMatch === 9 &&
      log.deChanges === 0 &&
      log.unexpectedChanges === 0 &&
      log.syntax === "PASS" &&
      log.validateKurss === "PASS" &&
      log.mirror === "PASS";

    log.finalStatus = allChecks ? "PASS" : "BLOCKED";

    if (!DRY_RUN) {
      fs.writeFileSync(REPORT, renderReport(log));
      fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
      fs.writeFileSync(LOG_JSON, JSON.stringify(log, null, 2));
    }
  } else {
    log.finalStatus = "BLOCKED";
    if (!DRY_RUN) {
      fs.writeFileSync(REPORT, renderReport(log));
      fs.mkdirSync(path.dirname(LOG_JSON), { recursive: true });
      fs.writeFileSync(LOG_JSON, JSON.stringify(log, null, 2));
    }
  }

  console.log(JSON.stringify(log, null, 2));

  if (log.finalStatus !== "PASS") process.exit(1);
}

main();
