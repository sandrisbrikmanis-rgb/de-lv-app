#!/usr/bin/env node
"use strict";
/**
 * Build authority JSON for ES Kurss Lessons 2–11 OWNER gala COPY-ONLY apply.
 * Parses LABOT from JSON blocks and retain targets from markdown tables.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/es-kurss-lessons-owner-apply-lib");

const EXPECTED_BASE = "0fe660d136136dd2d3a689f8c71b55242f9f5610";
const LESSON_RANGE = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const EXPECTED_LABOT = {
  2: 11, 3: 17, 4: 27, 5: 10, 6: 14, 7: 11, 8: 14, 9: 23, 10: 7, 11: 20,
};

function parseLabotFromJson(md) {
  const m = md.match(/```json\r?\n([\s\S]*?)\r?\n```/);
  if (!m) throw new Error("Missing JSON LABOT block");
  const arr = JSON.parse(m[1]);
  return arr.map((t) => ({
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
  const lines = md.split(/\r?\n/);
  for (const line of lines) {
    if (!line.startsWith("| ES-KURSS-LESSONS-")) continue;
    const cols = line.split("|").map((c) => c.trim());
    // | id | file | field | current | new | status | reason |
    if (cols.length < 8) continue;
    const id = cols[1];
    const file = cols[2];
    const field = cols[3];
    const current = cols[4];
    const statusRaw = cols[6] || "";
    const reason = cols[7] || "";
    const status = statusRaw.replace(/\*\*/g, "").trim();
    if (!["NELABOT", "FALSE_POSITIVE", "TECHNICAL_DEFER"].includes(status)) continue;
    rows.push({
      id,
      file: file || "",
      field: field || "",
      current: current || "",
      status,
      rebaseNelabot: /audita CURRENT nesakrīt/i.test(reason),
    });
  }
  return rows;
}

function main() {
  const labotTargets = [];
  const retainTargets = [];
  const perLesson = {};
  const sources = [];

  for (const n of LESSON_RANGE) {
    const pad = String(n).padStart(2, "0");
    const rel = `reports/es-kurss-lekcija-${pad}-owner-gala-lemumi.md`;
    const filePath = path.join(ROOT, rel);
    const md = fs.readFileSync(filePath, "utf8");
    sources.push(`es-kurss-lekcija-${pad}-owner-gala-lemumi.md`);

    const labot = parseLabotFromJson(md);
    const retain = parseRetainFromTable(md);
    const expected = EXPECTED_LABOT[n];
    if (labot.length !== expected) {
      throw new Error(`Lesson ${n}: expected ${expected} LABOT, found ${labot.length}`);
    }
    labotTargets.push(...labot.map((t) => ({ ...t, lessonNumber: n })));
    retainTargets.push(...retain);
    perLesson[n] = {
      labot: labot.length,
      nelabot: retain.filter((r) => r.status === "NELABOT").length,
      falsePositive: retain.filter((r) => r.status === "FALSE_POSITIVE").length,
      technicalDefer: retain.filter((r) => r.status === "TECHNICAL_DEFER").length,
      rebaseNelabot: retain.filter((r) => r.rebaseNelabot).length,
    };
  }

  if (labotTargets.length !== 154) {
    throw new Error(`Expected 154 total LABOT, found ${labotTargets.length}`);
  }

  const rebaseNelabot = retainTargets.filter((r) => r.rebaseNelabot);
  if (rebaseNelabot.length !== 123) {
    throw new Error(`Expected 123 rebase NELABOT, found ${rebaseNelabot.length}`);
  }

  const authority = {
    schemaVersion: 1,
    title: "ES Kurss — Lecciones 2–11 OWNER gala authority (COPY-ONLY apply)",
    baseSha: EXPECTED_BASE,
    sources,
    summary: {
      lessons: LESSON_RANGE,
      totalLabot: 154,
      perLesson,
      retain: {
        nelabot: retainTargets.filter((r) => r.status === "NELABOT").length,
        falsePositive: retainTargets.filter((r) => r.status === "FALSE_POSITIVE").length,
        technicalDefer: retainTargets.filter((r) => r.status === "TECHNICAL_DEFER").length,
        rebaseNelabot: rebaseNelabot.length,
      },
    },
    labotTargets,
    retainTargets,
    rebaseNelabotIds: rebaseNelabot.map((r) => r.id),
  };

  const out = path.join(ROOT, "reports/es-kurss-lessons-02-11-owner-gala-authority.json");
  fs.writeFileSync(out, JSON.stringify(authority, null, 2) + "\n");
  console.log(JSON.stringify({ out, labot: labotTargets.length, rebaseNelabot: rebaseNelabot.length }, null, 2));
}

if (require.main === module) main();
