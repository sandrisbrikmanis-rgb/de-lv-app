#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const { ROOT } = require("../audit-common");
const {
  CONTENT_LANGUAGES,
  TARGET_LANGUAGES,
  G2_LEVELS,
} = require("../content-crowdin-bridge/constants");
const { runBaselineGate } = require("./baseline-gate");
const { expectedStructuralCollector } = require("./discovery-scope");
const { gitProductionDiffAgainstBaseline } = require("./git-baseline");
const { collectG2Structural, collectG1SentencesStructural, collectG1VerbsStructural, collectG1TrainingStructural, collectG3CourseLessonsStructural } = require("./collectors/structural");
const { collectG2DeCompliance } = require("./collectors/de-compliance");
const { collectG2MultiTranslation, collectG1SentencesMultiTranslation } = require("./collectors/multi-translation");
const { collectMojibake, collectMirrorSync } = require("./collectors/mojibake-mirror");
const { collectG2ForeignRemnants } = require("./collectors/remnants");

const G1_DATASETS = ["sentences", "verbs", "training"];
const G3_DATASETS = ["courseLessons"];

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function parseLangsArg(value) {
  if (!value || value === "all") return [...TARGET_LANGUAGES];
  return value.split(",").map((s) => s.trim()).filter(Boolean);
}

function parseDatasetsArg(group, value) {
  if (!value || value === "all") {
    if (group === "g2") return [...G2_LEVELS];
    if (group === "g1") return [...G1_DATASETS];
    if (group === "g3") return [...G3_DATASETS];
    return [];
  }
  return value.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
}

function g2Files(lang, level) {
  const rel = lang === "lv" ? `data/${level}.js` : `data/${lang}/${level}.js`;
  return [rel];
}

function g1Files(lang, dataset) {
  if (dataset === "training") {
    return lang === "lv" ? [] : [`data/${lang}/courseTrainingCards.js`];
  }
  const rel = lang === "lv" ? `data/${dataset}.js` : `data/${lang}/${dataset}.js`;
  return [rel];
}

function g3Files(lang) {
  const rel = lang === "lv" ? "data/courseLessons.js" : `data/${lang}/courseLessons.js`;
  return [rel];
}

function collectForScope({ group, dataset, lang }) {
  const findings = [];
  const stats = {};
  const idPrefix = `DISC-${group.toUpperCase()}-${dataset.toUpperCase()}-${lang.toUpperCase()}`;

  if (group === "g2") {
    const structural = collectG2Structural({ lang, level: dataset, idPrefix });
    findings.push(...structural.findings);
    Object.assign(stats, structural.stats);

    if (lang !== "lv") {
      const de = collectG2DeCompliance({ lang, level: dataset, idPrefix });
      findings.push(...de.findings);
      stats.deMismatches = de.stats.mismatches;

      const multi = collectG2MultiTranslation({ lang, level: dataset, idPrefix });
      findings.push(...multi.findings);
      stats.multiTranslationRaw = multi.stats.candidatesRaw;

      const rem = collectG2ForeignRemnants({ lang, level: dataset, idPrefix });
      findings.push(...rem.findings);
      stats.remnantCandidates = rem.stats.hits;
    }

    const files = g2Files(lang, dataset);
    const moji = collectMojibake({ lang, files, idPrefix, group: "g2", dataset });
    findings.push(...moji.findings);
    const mirror = collectMirrorSync({ lang, files, idPrefix, group: "g2", dataset });
    findings.push(...mirror.findings);
  }

  if (group === "g1" && dataset === "sentences") {
    const structural = collectG1SentencesStructural({ lang, idPrefix });
    findings.push(...structural.findings);
    Object.assign(stats, structural.stats);
    if (lang !== "lv") {
      const multi = collectG1SentencesMultiTranslation({ lang, idPrefix });
      findings.push(...multi.findings);
      stats.multiTranslationRaw = multi.stats.candidatesRaw;
      const files = g1Files(lang, dataset);
      const moji = collectMojibake({ lang, files, idPrefix, group: "g1", dataset });
      findings.push(...moji.findings);
      const mirror = collectMirrorSync({ lang, files, idPrefix, group: "g1", dataset });
      findings.push(...mirror.findings);
    }
  }

  if (group === "g1" && dataset === "verbs") {
    const structural = collectG1VerbsStructural({ lang, idPrefix });
    findings.push(...structural.findings);
    Object.assign(stats, structural.stats);
    if (lang !== "lv") {
      const files = g1Files(lang, dataset);
      const moji = collectMojibake({ lang, files, idPrefix, group: "g1", dataset });
      findings.push(...moji.findings);
      const mirror = collectMirrorSync({ lang, files, idPrefix, group: "g1", dataset });
      findings.push(...mirror.findings);
    }
  }

  if (group === "g1" && dataset === "training") {
    const structural = collectG1TrainingStructural({ lang, idPrefix });
    findings.push(...structural.findings);
    Object.assign(stats, structural.stats);
    if (lang !== "lv" && g1Files(lang, dataset).length) {
      const files = g1Files(lang, dataset);
      const moji = collectMojibake({ lang, files, idPrefix, group: "g1", dataset });
      findings.push(...moji.findings);
      const mirror = collectMirrorSync({ lang, files, idPrefix, group: "g1", dataset });
      findings.push(...mirror.findings);
    }
  }

  if (group === "g3") {
    const structural = collectG3CourseLessonsStructural({ lang, idPrefix });
    findings.push(...structural.findings);
    Object.assign(stats, structural.stats);
    if (lang !== "lv") {
      const files = g3Files(lang);
      const moji = collectMojibake({ lang, files, idPrefix, group: "g3", dataset });
      findings.push(...moji.findings);
      const mirror = collectMirrorSync({ lang, files, idPrefix, group: "g3", dataset });
      findings.push(...mirror.findings);
    }
  }

  return { findings, stats };
}

/**
 * READ-ONLY discovery for configured groups/datasets/langs.
 */
function runContentDiscovery(options = {}) {
  const groups = options.groups || ["g2"];
  const langs = options.langs || ["et"];
  const datasetsByGroup = options.datasetsByGroup || { g2: ["a1"] };

  const baseline = runBaselineGate();
  const findings = [];
  const summary = [];

  if (baseline.verdict === "BLOCKED") {
    return {
      baseline,
      baselineVerdict: baseline.verdict,
      originMainSha: baseline.originMainSha,
      masterVersion: baseline.masterStandardVersion,
      generatedAt: baseline.generatedAt,
      mode: "READ_ONLY",
      productionChanges: 0,
      scope: { groups, langs: langs.length, datasetsByGroup },
      summary: [],
      blockers: baseline.blockers,
      findings: [],
      verdict: "BLOCKED_BASELINE",
      status: "PHASE_0_IN_PROGRESS",
    };
  }

  for (const group of groups) {
    const datasets = datasetsByGroup[group] || [];
    for (const dataset of datasets) {
      for (const lang of langs) {
        const { findings: scoped, stats } = collectForScope({ group, dataset, lang });
        findings.push(...scoped);

        const critical = scoped.filter((f) => f.severity === "CRITICAL").length;
        const high = scoped.filter((f) => f.severity === "HIGH").length;

        summary.push({
          group,
          dataset,
          lang,
          scopeKey: `${group}/${dataset}/${lang}`,
          scopeExecuted: true,
          structuralCollector:
            stats.structuralCollector || expectedStructuralCollector(group, dataset),
          applicability: stats.applicability || "APPLICABLE",
          note: stats.note || null,
          ...stats,
          findings: scoped.length,
          critical,
          high,
          verdict: scoped.length === 0 ? "PASS" : "NEEDS_OWNER_REVIEW",
        });
      }
    }
  }

  return {
    baseline,
    baselineVerdict: baseline.verdict,
    originMainSha: baseline.originMainSha,
    masterVersion: baseline.masterStandardVersion,
    generatedAt: baseline.generatedAt,
    mode: "READ_ONLY",
    productionChanges: 0,
    scope: { groups, langs: langs.length, datasetsByGroup },
    summary,
    blockers: baseline.blockers,
    findings,
    verdict: findings.length === 0 ? "PASS" : "NEEDS_OWNER_REVIEW",
    status: "PHASE_0_IN_PROGRESS",
  };
}

function writeDiscoveryReports(matrix, options = {}) {
  const outJson = options.outJson || path.join(ROOT, "reports", "content-discovery-matrix.json");
  const outMd = options.outMd || path.join(ROOT, "reports", "content-discovery-READONLY.md");
  ensureDir(path.dirname(outJson));
  fs.writeFileSync(outJson, `${JSON.stringify(matrix, null, 2)}\n`, "utf8");

  const lines = [
    "# Content discovery — READ-ONLY (Phase 0)",
    "",
    `**Status:** ${matrix.status || "PHASE_0_IN_PROGRESS"}`,
    `**Generated:** ${matrix.generatedAt}`,
    `**MASTER:** ${matrix.masterVersion}`,
    `**ORIGIN_MAIN_SHA:** \`${matrix.originMainSha}\``,
    `**Baseline:** ${matrix.baselineVerdict}`,
    `**Mode:** ${matrix.mode}`,
    `**Production changes:** ${matrix.productionChanges}`,
    `**Verdict:** ${matrix.verdict}`,
  ];

  const closure = matrix.baseline;
  if (closure?.unmergedClosureCountRaw != null) {
    lines.push(
      `**Unmerged closure (raw):** ${closure.unmergedClosureCountRaw}`,
      `**Active D1 blockers:** ${closure.activeUnmergedClosureCount ?? 0}`,
      `**Unresolved OWNER review:** ${closure.unresolvedOwnerReviewCount ?? closure.needsOwnerReviewCount ?? 0}`,
      `**OWNER decisions applied:** ${closure.ownerDecisionsApplied ?? 0}`,
    );
    if (closure.classificationReportMd) {
      lines.push(`**Classification report:** \`${path.basename(closure.classificationReportMd)}\``);
    }
  }

  lines.push(
    "",
    "## Summary",
    "",
    "| Group | Dataset | Lang | Findings | Critical | High | Verdict |",
    "|-------|---------|------|----------|----------|------|---------|",
  );

  for (const row of matrix.summary) {
    lines.push(
      `| ${row.group} | ${row.dataset} | ${row.lang} | ${row.findings} | ${row.critical} | ${row.high} | ${row.verdict} |`,
    );
  }

  lines.push("", "## Notes", "", "- READ-ONLY discovery — no apply.", "- Findings are candidates for OWNER review, not auto-fixes.", "");

  fs.writeFileSync(outMd, `${lines.join("\n")}\n`, "utf8");
  return { outJson, outMd };
}

function gitProductionDiff(originMainSha) {
  return gitProductionDiffAgainstBaseline(originMainSha);
}

module.exports = {
  runContentDiscovery,
  writeDiscoveryReports,
  parseLangsArg,
  parseDatasetsArg,
  collectForScope,
  gitProductionDiff,
  G1_DATASETS,
  G3_DATASETS,
};
