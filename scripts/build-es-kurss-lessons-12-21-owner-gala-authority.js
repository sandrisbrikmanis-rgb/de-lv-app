#!/usr/bin/env node
"use strict";
/**
 * Build consolidated authority for ES Kurss Lessons 12–21 OWNER gala COPY-ONLY apply.
 * Applies L17 LV2-0673 override and chooseCasePlural SHARED_UI consolidation.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/es-kurss-lessons-owner-apply-lib");

const EXPECTED_BASE = "0fe660d136136dd2d3a689f8c71b55242f9f5610";
const LESSON_RANGE = [12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
const EXPECTED_SOURCE_LABOT = {
  12: 16, 13: 36, 14: 24, 15: 17, 16: 37, 17: 14, 18: 19, 19: 17, 20: 20, 21: 13,
};
const EXPECTED_UNIQUE = {
  12: 15, 13: 35, 14: 23, 15: 16, 16: 36, 17: 13, 18: 18, 19: 16, 20: 19, 21: 12,
};

const LV2_0673_OVERRIDE = {
  id: "ES-KURSS-LESSONS-LV2-0673",
  file: "data/es/courseLessons.js",
  field: "COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[24].lv",
  path: "COURSE_LESSON_DATA.kurssLesson17.sections[5].cards[24].lv",
  current:
    "Un hermano va con su padre, con su madre, con su maestra, con su tío, con su tía, con su prima, con su prima.",
  new: "El hermano va con su padre, con su madre, con su maestro, con su tío, con su tía, con su primo y con su prima.",
  status: "LABOT",
  lessonNumber: 17,
  deContext:
    "Der Bruder geht mit dem Vater, mit der Mutter, mit dem Lehrer, mit dem Onkel, mit der Tante, mit dem Vetter, mit der Base.",
  overrideReason: "OWNER correction: restore LABOT with full NEW including con su tía",
};

const SHARED_UI_FIELD = "LANGUAGE_UI_STRINGS.kurss.exerciseMeta.chooseCasePlural";
const SHARED_UI_FILE = "languages/es/ui.js";
const SHARED_UI_CURRENT = "¡Pon la conjugación correcta y hazlo en plural!";
const SHARED_UI_NEW = "¡Pon la palabra en el caso correcto y forma el plural!";
const SHARED_UI_CANONICAL_ID = "ES-KURSS-LESSONS-LV2-0453";
const SHARED_UI_SOURCE_IDS = [
  "ES-KURSS-LESSONS-LV2-0453",
  "ES-KURSS-LESSONS-LV2-0527",
  "ES-KURSS-LESSONS-LV2-0584",
  "ES-KURSS-LESSONS-LV2-0611",
  "ES-KURSS-LESSONS-LV2-0652",
  "ES-KURSS-LESSONS-LV2-0675",
  "ES-KURSS-LESSONS-LV2-0711",
  "ES-KURSS-LESSONS-LV2-0749",
  "ES-KURSS-LESSONS-LV2-0795",
  "ES-KURSS-LESSONS-LV2-0817",
];

function parseLabotFromJson(md) {
  const m = md.match(/```json\r?\n([\s\S]*?)\r?\n```/);
  if (!m) throw new Error("Missing JSON LABOT block");
  return JSON.parse(m[1]).map((t) => ({
    id: t.auditId,
    file: t.file,
    field: t.field,
    path: t.path || t.field,
    current: t.current,
    new: t.new,
    status: "LABOT",
  }));
}

function parseRetainFromTable(md) {
  const rows = [];
  for (const line of md.split(/\r?\n/)) {
    if (!line.startsWith("| ES-KURSS-LESSONS-")) continue;
    const cols = line.split("|").map((c) => c.trim());
    if (cols.length < 8) continue;
    const status = (cols[6] || "").replace(/\*\*/g, "").trim();
    if (!["NELABOT", "FALSE_POSITIVE", "TECHNICAL_DEFER"].includes(status)) continue;
    rows.push({
      id: cols[1],
      file: cols[2] || "",
      field: cols[3] || "",
      current: cols[4] || "",
      status,
      reason: cols[7] || "",
      rebaseNelabot: /audita CURRENT nesakrīt/i.test(cols[7] || ""),
    });
  }
  return rows;
}

function targetKey(t) {
  return `${t.file}|${t.field}`;
}

function buildAuthorityMd(authority) {
  const lines = [
    "# ES Kurss — Lecciones 12–21 OWNER gala consolidated authority",
    "",
    `**Base SHA:** \`${authority.baseSha}\``,
    `**Source OWNER LABOT decisions:** ${authority.summary.sourceOwnerLabot}`,
    `**Superseded shared duplicates:** ${authority.summary.supersededSharedDuplicates}`,
    `**Unique production targets:** ${authority.summary.uniqueProductionTargets}`,
    "",
    "## OWNER corrections applied in authority",
    "",
    "### L17 LV2-0673",
    "- Restored `LABOT` (was `NELABOT` in gala)",
    `- NEW includes \`con su tía\``,
    "",
    "### Shared UI `chooseCasePlural`",
    `- Canonical ID: \`${SHARED_UI_CANONICAL_ID}\``,
    `- Canonical NEW: \`${SHARED_UI_NEW}\``,
    `- Source IDs: ${SHARED_UI_SOURCE_IDS.length}`,
    `- Superseded: ${authority.summary.supersededSharedDuplicates}`,
    "",
    "## Per-lesson unique targets",
    "",
    "| Lesson | Source LABOT | Unique (lesson-only) |",
    "|--------|-------------:|---------------------:|",
  ];
  for (const n of LESSON_RANGE) {
    const pl = authority.summary.perLesson[n];
    lines.push(`| ${n} | ${pl.sourceLabot} | ${pl.uniqueLessonOnly} |`);
  }
  lines.push(`| Shared UI | 10 (sources) | 1 |`);
  lines.push(`| **Total** | **${authority.summary.sourceOwnerLabot}** | **${authority.summary.uniqueProductionTargets}** |`);
  lines.push("");
  lines.push("## Unique production targets (deduplicated)");
  lines.push("");
  for (const t of authority.uniqueProductionTargets) {
    lines.push(`- \`${t.id}\` — \`${t.file}\` — \`${t.field}\``);
  }
  return lines.join("\n");
}

function main() {
  const sourceLabotDecisions = [];
  const retainTargets = [];
  const sources = [];
  const perLesson = {};

  for (const n of LESSON_RANGE) {
    const pad = String(n).padStart(2, "0");
    const rel = `reports/es-kurss-lekcija-${pad}-owner-gala-lemumi.md`;
    sources.push(`es-kurss-lekcija-${pad}-owner-gala-lemumi.md`);
    const md = fs.readFileSync(path.join(ROOT, rel), "utf8");
    const labot = parseLabotFromJson(md).map((t) => ({ ...t, lessonNumber: n }));
    const retain = parseRetainFromTable(md).filter((r) => r.id !== LV2_0673_OVERRIDE.id);

    let lessonSource = labot;
    if (n === 17) {
      lessonSource = [...labot, { ...LV2_0673_OVERRIDE }];
    }

    if (lessonSource.length !== EXPECTED_SOURCE_LABOT[n]) {
      throw new Error(`Lesson ${n}: expected ${EXPECTED_SOURCE_LABOT[n]} source LABOT, got ${lessonSource.length}`);
    }

    sourceLabotDecisions.push(...lessonSource);
    retainTargets.push(...retain);
    perLesson[n] = { sourceLabot: lessonSource.length, nelabot: retain.filter((r) => r.status === "NELABOT").length };
  }

  if (sourceLabotDecisions.length !== 213) {
    throw new Error(`Expected 213 source LABOT, found ${sourceLabotDecisions.length}`);
  }

  for (const t of sourceLabotDecisions) {
    if (!SHARED_UI_SOURCE_IDS.includes(t.id)) continue;
    if (t.id === SHARED_UI_CANONICAL_ID) {
      t.new = SHARED_UI_NEW;
      t.current = SHARED_UI_CURRENT;
      t.scope = "SHARED_UI";
      t.sourceOwnerIds = [...SHARED_UI_SOURCE_IDS];
      t.status = "LABOT";
    } else {
      t.status = "SUPERSEDED_SHARED_TARGET";
      t.supersededBy = SHARED_UI_CANONICAL_ID;
      t.scope = "SHARED_UI";
      t.sourceOwnerIds = [...SHARED_UI_SOURCE_IDS];
    }
  }

  const applyCandidates = sourceLabotDecisions.filter((t) => t.status === "LABOT");
  const uniqueProductionTargets = applyCandidates.sort(
    (a, b) => (a.lessonNumber || 99) - (b.lessonNumber || 99) || String(a.id).localeCompare(String(b.id)),
  );

  if (uniqueProductionTargets.length !== 204) {
    throw new Error(`Expected 204 unique targets, found ${uniqueProductionTargets.length}`);
  }

  const dedupedByField = new Map();
  for (const t of uniqueProductionTargets) {
    const key = targetKey(t);
    if (!dedupedByField.has(key)) dedupedByField.set(key, []);
    dedupedByField.get(key).push(t.id);
  }

  for (const n of LESSON_RANGE) {
    const lessonOnly = uniqueProductionTargets.filter(
      (t) => t.lessonNumber === n && t.field !== SHARED_UI_FIELD,
    ).length;
    perLesson[n].uniqueLessonOnly = lessonOnly;
    if (lessonOnly !== EXPECTED_UNIQUE[n]) {
      throw new Error(`Lesson ${n}: expected ${EXPECTED_UNIQUE[n]} unique, got ${lessonOnly}`);
    }
  }

  const sharedCount = uniqueProductionTargets.filter((t) => t.field === SHARED_UI_FIELD).length;
  if (sharedCount !== 1) throw new Error(`Expected 1 shared UI target, got ${sharedCount}`);

  const authority = {
    schemaVersion: 1,
    title: "ES Kurss — Lecciones 12–21 OWNER gala consolidated authority (COPY-ONLY apply)",
    baseSha: EXPECTED_BASE,
    sources,
    overrides: {
      lv20673: LV2_0673_OVERRIDE,
      chooseCasePlural: {
        canonicalId: SHARED_UI_CANONICAL_ID,
        file: SHARED_UI_FILE,
        field: SHARED_UI_FIELD,
        current: SHARED_UI_CURRENT,
        new: SHARED_UI_NEW,
        scope: "SHARED_UI",
        sourceOwnerIds: SHARED_UI_SOURCE_IDS,
        supersededIds: SHARED_UI_SOURCE_IDS.filter((id) => id !== SHARED_UI_CANONICAL_ID),
      },
    },
    summary: {
      lessons: LESSON_RANGE,
      sourceOwnerLabot: 213,
      supersededSharedDuplicates: 9,
      uniqueProductionTargets: 204,
      uniqueProductionFields: dedupedByField.size,
      perLesson,
      retain: {
        nelabot: retainTargets.filter((r) => r.status === "NELABOT").length,
        falsePositive: retainTargets.filter((r) => r.status === "FALSE_POSITIVE").length,
        technicalDefer: retainTargets.filter((r) => r.status === "TECHNICAL_DEFER").length,
      },
    },
    sourceLabotDecisions,
    uniqueProductionTargets,
    sharedUiCanonicalTargets: uniqueProductionTargets.filter((t) => t.scope === "SHARED_UI"),
    retainTargets,
    dedupedFieldMap: Object.fromEntries([...dedupedByField].map(([k, ids]) => [k, ids])),
  };

  const jsonOut = path.join(ROOT, "reports/es-kurss-lessons-12-21-owner-gala-authority.json");
  const mdOut = path.join(ROOT, "reports/es-kurss-lessons-12-21-owner-gala-authority.md");
  fs.writeFileSync(jsonOut, JSON.stringify(authority, null, 2) + "\n");
  fs.writeFileSync(mdOut, buildAuthorityMd(authority) + "\n");
  console.log(JSON.stringify({ jsonOut, sourceLabot: 213, unique: 204, superseded: 9 }, null, 2));
}

if (require.main === module) main();
