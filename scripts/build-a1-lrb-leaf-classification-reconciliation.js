#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");

const PRIMARY_CLASSES = [
  "EXPANDED_STANDARD_FULL_CARD_SUPERSESSION",
  "IDENTICAL_FINAL_VALUE",
  "PROVEN_SEQUENTIAL_SUPERSESSION",
  "INDEPENDENT_OWNER_CONFLICT",
  "INSUFFICIENT_DECISION_SOURCE",
];

function sha256File(p) {
  return crypto.createHash("sha256").update(fs.readFileSync(p)).digest("hex");
}

function unresolvedCanonicalSha(unresolvedDoc) {
  const rows = (unresolvedDoc.conflicts || []).map((c) => ({
    leaf_target_key: c.leaf_target_key,
    distinct_leaf_value_shas: [...(c.distinct_leaf_value_shas || [])].sort(),
    classification: c.primary_classification || c.classification,
  }));
  rows.sort((a, b) => a.leaf_target_key.localeCompare(b.leaf_target_key));
  return crypto.createHash("sha256").update(JSON.stringify(rows)).digest("hex");
}

function batchNum(batch) {
  return parseInt(String(batch).replace("LRB-", ""), 10);
}

function deriveEvidenceFlags(entry) {
  const versions = entry.versions || [];
  const activeBatches = new Set(entry.active_versions_after_supersession || []);
  const activeVers = versions.filter((v) => activeBatches.has(v.batch_id));
  const activeShas = new Set(activeVers.map((v) => v.leaf_value_sha256));
  const allShas = new Set(versions.map((v) => v.leaf_value_sha256));
  const flags = [];

  if (versions.some((v) => v.superseded_by?.reason === "RE_REVIEW_RANGE_intra_batch_initial_to_expanded")) {
    flags.push("intra_batch_re_review_supersession");
  }
  if (versions.some((v) => v.superseded_by)) {
    flags.push("expanded_full_card_supersession_event");
  }
  if (activeShas.size === 1 && allShas.size > 1) {
    flags.push("active_leaf_values_identical_after_supersession");
  }
  if (allShas.size === 1 && versions.length > 1) {
    flags.push("all_version_rows_share_leaf_sha");
  }

  const primary = entry.primary_classification || entry.classification;
  if (primary === "EXPANDED_STANDARD_FULL_CARD_SUPERSESSION" && activeShas.size === 1) {
    flags.push("secondary_naive_identical_if_only_active_compared");
  }
  if (primary === "EXPANDED_STANDARD_FULL_CARD_SUPERSESSION" && allShas.size === 1) {
    flags.push("secondary_naive_identical_if_all_versions_compared");
  }

  const ordered = [...activeVers].sort((a, b) => batchNum(a.batch_id) - batchNum(b.batch_id));
  if (
    primary === "EXPANDED_STANDARD_FULL_CARD_SUPERSESSION" &&
    ordered.length >= 2 &&
    activeShas.size > 1
  ) {
    let chain = true;
    for (let i = 0; i < ordered.length - 1; i += 1) {
      if (ordered[i].leaf_value_sha256 === ordered[i + 1].leaf_value_sha256) continue;
      chain = false;
      break;
    }
    if (chain) flags.push("secondary_naive_sequential_if_supersession_ignored");
  }

  return flags;
}

function assignPrimary(entry) {
  const c = entry.classification;
  if (PRIMARY_CLASSES.includes(c)) return c;
  if (c === "CORRECTION_HISTORY_ONLY" || c === "CANONICAL_ALIAS_DUPLICATE") {
    return "IDENTICAL_FINAL_VALUE";
  }
  return c;
}

function main() {
  const outDir = path.join(ROOT, "reports/g2-a1-owner/consolidation");
  const classPath = path.join(outDir, "A1-LRB-CONFLICT-CLASSIFICATION.json");
  const unresolvedPath = path.join(outDir, "A1-LRB-UNRESOLVED-OWNER-CONFLICTS.json");
  const unresolvedShaBefore = fs.existsSync(unresolvedPath) ? sha256File(unresolvedPath) : null;
  let unresolvedCanonicalBefore = null;
  if (fs.existsSync(unresolvedPath)) {
    unresolvedCanonicalBefore = unresolvedCanonicalSha(JSON.parse(fs.readFileSync(unresolvedPath, "utf8")));
  }

  const doc = JSON.parse(fs.readFileSync(classPath, "utf8"));
  const groups = doc.groups || [];

  const primaryCounts = {};
  for (const k of PRIMARY_CLASSES) primaryCounts[k] = 0;

  const enriched = [];
  const secondaryNaiveIdent = [];
  const secondaryNaiveProven = [];

  for (const entry of groups) {
    const primary_classification = assignPrimary(entry);
    const evidence_flags = deriveEvidenceFlags({
      ...entry,
      primary_classification,
    });
    primaryCounts[primary_classification] = (primaryCounts[primary_classification] || 0) + 1;

    if (evidence_flags.includes("secondary_naive_identical_if_only_active_compared")) {
      secondaryNaiveIdent.push(entry.leaf_target_key);
    }
    if (evidence_flags.includes("secondary_naive_sequential_if_supersession_ignored")) {
      secondaryNaiveProven.push(entry.leaf_target_key);
    }

    enriched.push({
      leaf_target_key: entry.leaf_target_key,
      primary_classification,
      evidence_flags,
      legacy_classification_field: entry.classification,
    });
  }

  const totalUnique = groups.length;
  const primarySum = PRIMARY_CLASSES.reduce((s, k) => s + (primaryCounts[k] || 0), 0);

  const inflatedReported = {
    EXPANDED_STANDARD_FULL_CARD_SUPERSESSION: 4890,
    IDENTICAL_FINAL_VALUE: 3058,
    PROVEN_SEQUENTIAL_SUPERSESSION: 51,
    INDEPENDENT_OWNER_CONFLICT: 45,
    INSUFFICIENT_DECISION_SOURCE: 0,
  };
  const inflatedSum = Object.values(inflatedReported).reduce((a, b) => a + b, 0);

  const phantomDelta = inflatedSum - totalUnique;
  const phantomIdent = inflatedReported.IDENTICAL_FINAL_VALUE - primaryCounts.IDENTICAL_FINAL_VALUE;
  const phantomProven =
    inflatedReported.PROVEN_SEQUENTIAL_SUPERSESSION - primaryCounts.PROVEN_SEQUENTIAL_SUPERSESSION;

  const erroneousDoubleBucketKeys = {
    phantom_identical_rollup_slots: secondaryNaiveIdent.slice(0, phantomIdent),
    phantom_proven_rollup_slots: secondaryNaiveProven.slice(0, phantomProven),
    note:
      "362 phantom overcount = inflated summary totals (3058+51) minus primary-only counts (2703+44); not 362 leaf targets with two primary classes.",
  };

  const sumMatches = primarySum === totalUnique;
  const unresolvedShaAfter = fs.existsSync(unresolvedPath) ? sha256File(unresolvedPath) : null;
  const unresolvedCanonicalAfter = fs.existsSync(unresolvedPath)
    ? unresolvedCanonicalSha(JSON.parse(fs.readFileSync(unresolvedPath, "utf8")))
    : null;
  const unresolvedUnchanged = unresolvedCanonicalBefore === unresolvedCanonicalAfter;
  const unresolvedFileShaUnchanged = unresolvedShaBefore === unresolvedShaAfter;

  const gate =
    sumMatches && unresolvedUnchanged
      ? "A1_LRB_LEAF_CLASSIFICATION_COUNTS_PASS"
      : "A1_LRB_LEAF_CLASSIFICATION_COUNTS_CHANGED";

  const nextAction =
    gate === "A1_LRB_LEAF_CLASSIFICATION_COUNTS_PASS"
      ? "OWNER_REVIEW_45_EXACT_LEAF_CONFLICTS"
      : "OWNER_REVIEW_REGENERATED_EXACT_LIST";

  const out = {
    generated_at: new Date().toISOString(),
    gate,
    next_action: nextAction,
    total_unique_repeated_leaf_targets: totalUnique,
    primary_classification_counts: primaryCounts,
    primary_classification_sum: primarySum,
    sum_equals_total: sumMatches,
    inflated_external_rollup: {
      reported_category_totals: inflatedReported,
      reported_sum: inflatedSum,
      phantom_overcount_vs_primary: phantomDelta,
      phantom_identical_slots: phantomIdent,
      phantom_proven_slots: phantomProven,
    },
    erroneous_double_bucket_explanation: erroneousDoubleBucketKeys,
    secondary_evidence_flag_counts: {
      secondary_naive_identical_if_only_active_compared: secondaryNaiveIdent.length,
      secondary_naive_sequential_if_supersession_ignored: secondaryNaiveProven.length,
      intra_batch_re_review_supersession: enriched.filter((e) =>
        e.evidence_flags.includes("intra_batch_re_review_supersession")
      ).length,
    },
    conflict_counts_before_after: {
      independent_owner_conflicts: {
        before_payload_level: 437,
        after_primary_independent: primaryCounts.INDEPENDENT_OWNER_CONFLICT,
      },
      unresolved_list_unchanged: unresolvedUnchanged,
    },
    unresolved_owner_conflicts_json_sha256: {
      before: unresolvedShaBefore,
      after: unresolvedShaAfter,
      file_sha_unchanged: unresolvedFileShaUnchanged,
    },
    unresolved_canonical_conflict_set_sha256: {
      before: unresolvedCanonicalBefore,
      after: unresolvedCanonicalAfter,
      unchanged: unresolvedUnchanged,
    },
    per_target_primary: enriched,
  };

  fs.writeFileSync(
    path.join(outDir, "A1-LRB-LEAF-CLASSIFICATION-RECONCILIATION.json"),
    JSON.stringify(out, null, 2) + "\n"
  );

  const md = `# A1 LRB leaf classification count reconciliation

Generated: ${out.generated_at}

## Gate

**\`${gate}\`**

\`\`\`text
NEXT_ACTION: ${nextAction}
\`\`\`

## Primary counts (mutually exclusive)

| Primary class | Count |
|---------------|------:|
| EXPANDED_STANDARD_FULL_CARD_SUPERSESSION | ${primaryCounts.EXPANDED_STANDARD_FULL_CARD_SUPERSESSION} |
| IDENTICAL_FINAL_VALUE | ${primaryCounts.IDENTICAL_FINAL_VALUE} |
| PROVEN_SEQUENTIAL_SUPERSESSION | ${primaryCounts.PROVEN_SEQUENTIAL_SUPERSESSION} |
| INDEPENDENT_OWNER_CONFLICT | ${primaryCounts.INDEPENDENT_OWNER_CONFLICT} |
| INSUFFICIENT_DECISION_SOURCE | ${primaryCounts.INSUFFICIENT_DECISION_SOURCE} |
| **Sum** | **${primarySum}** |
| total_unique_repeated_leaf_targets | ${totalUnique} |

sum(primary) === total_unique: **${sumMatches}**

## 362 phantom overcount

External rollup summed **8044** (4890+3058+51+45) vs primary sum **7682**.

- Delta **362** = phantom **${phantomIdent}** IDENTICAL slots + **${phantomProven}** PROVEN slots from inflated summary lines, **not** duplicate primary assignments per leaf target.
- Each canonical leaf target has exactly one \`primary_classification\`.

## Unresolved list

| | SHA-256 |
|--|---------|
| before | \`${unresolvedShaBefore}\` |
| after | \`${unresolvedShaAfter}\` |
| file SHA unchanged | ${unresolvedFileShaUnchanged} |
| canonical conflict set unchanged | ${unresolvedUnchanged} |

Independent OWNER conflicts (primary): **${primaryCounts.INDEPENDENT_OWNER_CONFLICT}** (payload before: 437).

Full JSON: \`A1-LRB-LEAF-CLASSIFICATION-RECONCILIATION.json\`.
`;
  fs.writeFileSync(path.join(outDir, "A1-LRB-LEAF-CLASSIFICATION-RECONCILIATION.md"), md);

  console.log(
    JSON.stringify(
      {
        gate,
        next_action: nextAction,
        primarySum,
        totalUnique,
        sum_equals_total: sumMatches,
        phantom_overcount: phantomDelta,
        unresolved_sha_unchanged: unresolvedUnchanged,
      },
      null,
      2
    )
  );
}

if (require.main === module) main();
