#!/usr/bin/env node
"use strict";
/**
 * Prepare es-a1-a2-linguistic-audit.json for GitHub viewing.
 * Full Luna artifact (~2.4 MB) exceeds GitHub inline limit (~1 MB).
 * Produces:
 *   reports/es-a1-a2-linguistic-audit.json          — GitHub-viewable (meta + qualityFindings)
 *   reports/temp/es-a1-a2-linguistic-audit-full.json — complete raw archive
 *   reports/es-a1-a2-linguistic-audit-GITHUB.md     — clickable index
 */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const REPO = "sandrisbrikmanis-rgb/de-lv-app";
const BRANCH = process.env.WORK_BRANCH || execSync("git branch --show-current", { cwd: ROOT, encoding: "utf8" }).trim();
const PR_NUMBER = process.env.AUDIT_PR || "663";
const GROUP_SIZE = 400;

const SOURCE = path.join(ROOT, "reports/temp/es-a1-a2-linguistic-audit.json");
const FULL_OUT = path.join(ROOT, "reports/temp/es-a1-a2-linguistic-audit-full.json");
const SLIM_OUT = path.join(ROOT, "reports/es-a1-a2-linguistic-audit.json");
const INDEX_OUT = path.join(ROOT, "reports/es-a1-a2-linguistic-audit-GITHUB.md");
const GROUP_PREFIX = "es-a1-a2-linguistic-audit-findings";

function gh(relPath) {
  return `https://github.com/${REPO}/blob/${BRANCH}/${relPath}`;
}

function bytesOf(obj) {
  return Buffer.byteLength(JSON.stringify(obj, null, 2), "utf8");
}

function writeJson(relPath, data) {
  const abs = path.join(ROOT, relPath);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, JSON.stringify(data, null, 2), "utf8");
  return { relPath, bytes: fs.statSync(abs).size };
}

function cleanStaleGroups() {
  const dir = path.join(ROOT, "reports");
  for (const name of fs.readdirSync(dir)) {
    if (new RegExp(`^${GROUP_PREFIX}-\\d+\\.json$`).test(name)) {
      fs.unlinkSync(path.join(dir, name));
    }
  }
}

function buildFindingGroups(findings) {
  const groups = [];
  const groupCount = Math.ceil(findings.length / GROUP_SIZE);
  for (let i = 0; i < groupCount; i++) {
    const id = String(i + 1).padStart(2, "0");
    const start = i * GROUP_SIZE + 1;
    const end = Math.min((i + 1) * GROUP_SIZE, findings.length);
    const slice = findings.slice(i * GROUP_SIZE, (i + 1) * GROUP_SIZE);
    const relPath = `reports/${GROUP_PREFIX}-${id}.json`;
    const payload = {
      meta: {
        dataset: "es-a1-a2",
        part: `${id}/${String(groupCount).padStart(2, "0")}`,
        findingRange: `${start}-${end}`,
        count: slice.length,
        totalFindings: findings.length,
      },
      qualityFindings: slice,
    };
    const written = writeJson(relPath, payload);
    groups.push({ id, start, end, count: slice.length, ...written });
  }
  return groups;
}

function buildIndex(slim, groups, sizes) {
  const meta = slim.meta || {};
  const groupRows = groups
    .map((g) => `| ${g.start}–${g.end} | ${g.count} | [${path.basename(g.relPath)}](${gh(g.relPath)}) | ${(g.bytes / 1024).toFixed(0)} KB |`)
    .join("\n");

  const content = [
    "# ES–DE A1+A2 — Luna lingvistiskā audita GitHub indekss",
    "",
    `**Model:** GPT-5.6 Luna · **Branch:** \`${BRANCH}\``,
    `**PR:** [#${PR_NUMBER}](https://github.com/${REPO}/pull/${PR_NUMBER})`,
    `**Coverage:** **${meta.cardsAudited || "?"}/${meta.cardsExpected || "2342"}** (${meta.coverage || "100%"})`,
    `**Quality findings:** **${slim.qualityFindings?.length || meta.qualityFindingsCount || groups.reduce((s, g) => s + g.count, 0)}**`,
    "",
    "> Pilns Luna artifacts (`allResults`, `batches`, `findings`) ir **~2.4 MB** — GitHub to neparāda inline. Izmanto zemāk esošos failus.",
    "",
    "## Sākt šeit",
    "",
    "| Fails | Apraksts | Izmērs |",
    "|-------|----------|--------|",
    `| [es-a1-a2-linguistic-audit.json](${gh("reports/es-a1-a2-linguistic-audit.json")}) | **Galvenais** — meta + visi qualityFindings | ${(sizes.slim / 1024).toFixed(0)} KB |`,
    `| [es-de-a1-a2-full-audit.md](${gh("reports/es-de-a1-a2-full-audit.md")}) | Pilns audita ziņojums (deterministisks + Luna) | — |`,
    `| [es-a1-a2-linguistic-audit-full.json](${gh("reports/temp/es-a1-a2-linguistic-audit-full.json")}) | Pilns raw arhīvs (tikai Raw / lejupielāde) | ${(sizes.full / 1024).toFixed(0)} KB |`,
    "",
    "## Quality findings grupas (ja vajag mazākus failus)",
    "",
    "| Findings | Skaits | JSON | Izmērs |",
    "|----------|--------|------|--------|",
    groupRows,
    "",
    "## Smagums",
    "",
    "```json",
    JSON.stringify(slim.severityCounts || {}, null, 2),
    "```",
    "",
    "**Production changes = 0 · DE changes = 0**",
    "",
  ].join("\n");

  fs.writeFileSync(INDEX_OUT, content, "utf8");
}

function main() {
  if (!fs.existsSync(SOURCE)) {
    console.error(`Missing ${SOURCE}`);
    process.exit(1);
  }

  const full = JSON.parse(fs.readFileSync(SOURCE, "utf8"));
  const qualityFindings = full.qualityFindings || [];

  // Archive full artifact under explicit -full name
  if (!fs.existsSync(FULL_OUT) || fs.statSync(SOURCE).mtimeMs >= fs.statSync(FULL_OUT).mtimeMs) {
    fs.copyFileSync(SOURCE, FULL_OUT);
  }

  const slim = {
    meta: {
      ...full.meta,
      githubView: "slim-quality-findings",
      fullArchive: "reports/temp/es-a1-a2-linguistic-audit-full.json",
      qualityFindingsCount: qualityFindings.length,
    },
    severityCounts: full.severityCounts,
    nonErrorCounts: full.nonErrorCounts,
    apiUsage: full.apiUsage,
    qualityFindings,
  };

  writeJson("reports/es-a1-a2-linguistic-audit.json", slim);
  const slimBytes = fs.statSync(SLIM_OUT).size;
  const fullBytes = fs.statSync(FULL_OUT).size;

  if (slimBytes > 950 * 1024) {
    console.warn(`WARNING: slim JSON is ${(slimBytes / 1024).toFixed(0)} KB — may exceed GitHub inline limit`);
  }

  cleanStaleGroups();
  const groups = buildFindingGroups(qualityFindings);
  buildIndex(slim, groups, { slim: slimBytes, full: fullBytes });

  console.log(
    JSON.stringify(
      {
        slimOut: SLIM_OUT,
        slimKB: Math.round(slimBytes / 1024),
        fullOut: FULL_OUT,
        fullKB: Math.round(fullBytes / 1024),
        qualityFindings: qualityFindings.length,
        groups: groups.length,
        index: INDEX_OUT,
        githubViewable: slimBytes < 1024 * 1024,
      },
      null,
      2,
    ),
  );
}

main();
