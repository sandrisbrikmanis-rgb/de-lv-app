#!/usr/bin/env node
"use strict";
/**
 * Build DA Kurss section-pack OWNER apply map from da-kurss-owner-decisions-{slug}.md files.
 * Usage: node scripts/build-da-kurss-section-owner-apply-map.js [--decisions-dir /path]
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { normalizeOwnerPath } = require("./lib/da-kurss-owner-path");
const {
  groupFieldsBySection,
  parseDecisionFile,
  parseArrowReplacement,
  parseQuotedHtmlReplace,
  normalizeDashVariants,
  sectionDecisionPath,
  listSectionSlugs,
  pronounHtmlFinding,
} = require("./lib/da-kurss-section-pack");

const OUT_JSON = path.join(ROOT, "reports/temp/da-kurss-section-owner-apply-map.json");

function getDecisionsDir() {
  const idx = process.argv.indexOf("--decisions-dir");
  if (idx >= 0 && process.argv[idx + 1]) return process.argv[idx + 1];
  return path.join(ROOT, "reports");
}

function buildApplyEntry(slug, field, row) {
  const base = {
    sectionSlug: slug,
    findingNum: row.findingNum,
    path: field.path,
    normalizedPath: normalizeOwnerPath(field.path),
    daCurrent: field.daCurrent ?? "",
    ownerNew: row.ownerNew,
    deCurrent: field.deCurrent || "",
    sourceFile: `da-kurss-owner-decisions-${slug}.md`,
    fieldType: field.fieldType,
    lessonId: field.lessonId,
  };

  if (slug === "04-pronouns" && row.findingNum === 1) {
    return null;
  }

  const arrow = parseArrowReplacement(row.ownerNew);
  if (arrow && /kurssPronounsLesson/.test(field.path || "")) {
    const from = normalizeDashVariants(arrow.from);
    const to = normalizeDashVariants(arrow.to);
    return {
      ...base,
      applyMode: "htmlSubstring",
      htmlKey: "kurssPronounsLesson",
      fragmentFrom: from,
      fragmentTo: to,
      ownerNew: to,
    };
  }

  if (slug === "03-articles") {
    const quoted = parseQuotedHtmlReplace(row.ownerNew);
    if (quoted) {
      return {
        ...base,
        applyMode: "htmlSubstring",
        htmlKey: "kurssArticlesLesson",
        fragmentFrom: quoted.from,
        fragmentTo: quoted.to,
        ownerNew: quoted.to,
      };
    }
  }

  return { ...base, applyMode: "field" };
}

function main() {
  const decisionsDir = getDecisionsDir();
  const grouped = groupFieldsBySection();
  const statuses = { LABOT: 0, NELABOT: 0, FALSE_POSITIVE: 0, NEEDS_SOURCE_REVIEW: 0, OTHER: 0 };
  const skipped = [];
  const apply = [];
  const missingFiles = [];

  for (const slug of listSectionSlugs()) {
    const decisionFile = sectionDecisionPath(slug, decisionsDir);
    if (!fs.existsSync(decisionFile)) {
      missingFiles.push(slug);
      continue;
    }

    const rows = parseDecisionFile(decisionFile);
    const fields = grouped[slug] || [];

    for (const row of rows) {
      statuses[row.status] = (statuses[row.status] || 0) + 1;
      if (row.status !== "LABOT") continue;
      if (!row.ownerNew) {
        skipped.push({ slug, ...row, reason: "EMPTY_OWNER_NEW" });
        continue;
      }

      let field = fields[row.findingNum - 1];
      if (!field && slug === "04-pronouns") {
        field = pronounHtmlFinding(row.findingNum);
      }
      if (!field) {
        skipped.push({ slug, ...row, reason: "FIELD_NOT_FOUND" });
        continue;
      }

      const entry = buildApplyEntry(slug, field, row);
      if (!entry) {
        skipped.push({ slug, ...row, reason: "META_INSTRUCTION_ONLY" });
        continue;
      }

      if (entry.applyMode === "field" && /^Nominativ bloka/i.test(entry.ownerNew)) {
        skipped.push({ slug, ...row, reason: "META_HTML_INSTRUCTION" });
        continue;
      }

      apply.push(entry);
    }
  }

  apply.sort((a, b) => {
    if (a.sectionSlug !== b.sectionSlug) return a.sectionSlug.localeCompare(b.sectionSlug);
    return a.findingNum - b.findingNum;
  });

  const out = {
    generatedAt: new Date().toISOString(),
    decisionsDir,
    missingFiles,
    ownerMappingsTotal: statuses.LABOT || 0,
    applyCount: apply.length,
    skipped,
    statusCounts: statuses,
    apply,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 2), "utf8");
  console.log(
    JSON.stringify(
      {
        decisionsDir,
        missingFiles: missingFiles.length,
        ownerMappingsTotal: out.ownerMappingsTotal,
        applyCount: out.applyCount,
        skipped: out.skipped.length,
        statusCounts: out.statusCounts,
        out: OUT_JSON,
      },
      null,
      2,
    ),
  );
}

main();
