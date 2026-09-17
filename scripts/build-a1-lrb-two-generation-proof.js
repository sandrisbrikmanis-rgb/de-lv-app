#!/usr/bin/env node
"use strict";

const { execSync, spawnSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const { ROOT } = require("./lib/audit-common");

function git(cmd) {
  try {
    return execSync(cmd, {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return null;
  }
}

function gitArgs(argv) {
  const r = spawnSync("git", argv, {
    cwd: ROOT,
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  if (r.status !== 0) return null;
  return (r.stdout || "").trim();
}

function sha256(buf) {
  return crypto.createHash("sha256").update(buf).digest("hex");
}

function batchId(n) {
  return `LRB-${String(n).padStart(3, "0")}`;
}

function branchesForBatch(n) {
  const nn = String(n).padStart(3, "0");
  const re = new RegExp(`cursor/lrb-${nn}-`, "i");
  const lines = (git("git branch -r") || "").split("\n");
  const found = lines
    .map((l) => l.trim())
    .filter((l) => re.test(l))
    .map((l) => (l.startsWith("origin/") ? l : `origin/${l}`));
  const fallback = [];
  if (n >= 1 && n <= 31) {
    fallback.push(
      `origin/cursor/lrb-${nn}-owner-authorization-bdda`,
      `origin/cursor/lrb-${nn}-gala-repair-bdda`
    );
  }
  if (n === 32) fallback.push("origin/cursor/lrb-032-owner-authorization-6530");
  if (n >= 33 && n <= 72) fallback.push(`origin/cursor/lrb-${nn}-owner-authorization-aa66`);
  return [...new Set([...found, ...fallback])].filter((b) => gitArgs(["rev-parse", b]));
}

function resolveRef(n) {
  const branches = branchesForBatch(n);
  let best = null;
  for (const b of branches) {
    const prefer =
      (b.includes("owner-authorization-aa66") ? 3 : 0) +
      (b.includes("owner-authorization-6530") ? 2 : 0) +
      (b.includes("owner-authorization-bdda") ? 1 : 0);
    if (!best || prefer > best.prefer) best = { ref: b, prefer };
  }
  return best?.ref || null;
}

function logForPath(ref, filePath) {
  const lines = gitArgs(["log", "--format=%H|%cI|%s", ref, "--", filePath]) || "";
  return lines
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const [sha, at, ...rest] = line.split("|");
      return { sha, at, subject: rest.join("|") };
    });
}

function fileAtCommit(commit, filePath) {
  return git(`git show ${commit}:${filePath}`);
}

function fileShaAt(commit, filePath) {
  const raw = fileAtCommit(commit, filePath);
  return raw ? sha256(raw) : null;
}

function parseAuthAt(commit, filePath) {
  const raw = fileAtCommit(commit, filePath);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function scopeFromAuth(auth, subject) {
  if (auth?.scope) return String(auth.scope).slice(0, 200);
  if (auth?.note) return String(auth.note).slice(0, 200);
  return subject ? String(subject).slice(0, 200) : "";
}

function tagCommit(c) {
  const s = c.subject;
  if (/Phase B|individual OWNER review/i.test(s)) return "PHASE_B";
  if (/review pending/i.test(s)) return "REVIEW_PENDING";
  if (
    (/OWNER authorization APPROVED|owner authorization APPROVED|owner authorization:|owner authorization \(/i.test(
      s
    ) ||
      /GPT-5\.6 Luna (owner authorization|FI review)/i.test(s) ||
      /GPT-5\.6 Luna linguistic review/i.test(s)) &&
    !/COPY-PASTE|copy\/paste|PDF reaudit/i.test(s)
  ) {
    return "OWNER_APPROVED";
  }
  if (/gala repair/i.test(s)) return "GALA_REPAIR";
  if (/COPY-PASTE|copy\/paste|FULL_50_50 copy/i.test(s)) return "COPY_PASTE";
  if (/PDF[- ]standard reaudit|PDF reaudit/i.test(s)) return "PDF_REAUDIT";
  if (/round[- ]2|round 3/i.test(s)) return "ROUND_2";
  if (/gala verdict|Gala FULL_50_50|LINGUISTIC.*PASS|LINGUISTICALLY_CLOSED/i.test(s)) return "GALA_PASS";
  if (/micro-repair|composite cards|fix \d+ composite/i.test(s)) return "MICRO_REPAIR";
  return "OTHER";
}

function mergeLogs(ref, batch) {
  const base = `reports/g2-a1-owner/batches-reviewed/${batch}`;
  const paths = [
    `${base}-decisions.csv`,
    `${base}-owner-authorization-proof.json`,
    `scripts/data/g2-a1-owner-pending/${batch}-decisions.json`,
  ];
  const bySha = new Map();
  for (const p of paths) {
    for (const c of logForPath(ref, p)) {
      const prev = bySha.get(c.sha);
      if (!prev) bySha.set(c.sha, { ...c, paths: [p], tags: [tagCommit(c)] });
      else {
        if (!prev.paths.includes(p)) prev.paths.push(p);
        prev.tags.push(tagCommit(c));
      }
    }
  }
  return [...bySha.values()].sort((a, b) => a.at.localeCompare(b.at));
}

function pickInitialCommit(chron) {
  const skip = (c) =>
    /repair engine|decisions builder|add FR repair|status-index headSha/i.test(c.subject);
  const candidates = chron.filter((c) => !skip(c));
  return (
    candidates.find((c) => c.tags.includes("PHASE_B")) ||
    candidates.find((c) => c.tags.includes("REVIEW_PENDING")) ||
    candidates.find((c) => c.tags.includes("OWNER_APPROVED")) ||
    candidates.find(
      (c) =>
        /FI review|owner authorization|owner prep|linguistic review/i.test(c.subject) &&
        !/PDF reaudit|COPY-PASTE|copy\/paste|round[- ]2|round 3/i.test(c.subject)
    ) ||
    candidates.find((c) => c.paths?.some((p) => p.endsWith("-decisions.csv"))) ||
    candidates[0] ||
    null
  );
}

function pickExpandedCommit(chron, initial) {
  const after = initial ? chron.filter((c) => c.at > initial.at) : chron;
  return (
    after.find((c) => c.tags.includes("GALA_REPAIR")) ||
    after.find((c) => c.tags.includes("COPY_PASTE")) ||
    after.find((c) => c.tags.includes("PDF_REAUDIT")) ||
    after.find((c) => c.tags.includes("ROUND_2")) ||
    after.filter((c) => c.tags.includes("GALA_PASS")).slice(-1)[0] ||
    null
  );
}

function snapshotGeneration(batch, commit, label) {
  if (!commit) return null;
  const decPath = `reports/g2-a1-owner/batches-reviewed/${batch}-decisions.csv`;
  const authPath = `reports/g2-a1-owner/batches-reviewed/${batch}-owner-authorization-proof.json`;
  const mapPath = `scripts/data/g2-a1-owner-pending/${batch}-decisions.json`;
  const auth = parseAuthAt(commit.sha, authPath);
  const copyPasteCommit = /COPY-PASTE|copy\/paste|FULL_50_50 copy/i.test(commit.subject)
    ? commit
    : null;
  const galaPass = /gala verdict|Gala FULL_50_50|LINGUISTIC.*PASS|LINGUISTICALLY_CLOSED/i.test(
    commit.subject
  )
    ? commit
    : null;
  return {
    label,
    commit_sha: commit.sha,
    commit_at: commit.at,
    commit_subject: commit.subject,
    scope: scopeFromAuth(auth, commit.subject),
    decisions_csv_sha256: fileShaAt(commit.sha, decPath),
    auth_proof_sha256: fileShaAt(commit.sha, authPath),
    mapping_json_sha256: fileShaAt(commit.sha, mapPath),
    copy_paste_commit: copyPasteCommit?.subject || null,
    gala_pass_commit: galaPass?.subject || null,
    paste_source: auth?.paste_source || null,
    full_composite_completeness: auth?.pdfGates?.full_composite_completeness || null,
    gala_repair_flag: Boolean(auth?.gala_repair),
  };
}

function classifyBatch(batch, ref, chron, initialSnap, expandedSnap, headSnap) {
  if (!ref) return { classification: "INSUFFICIENT_EVIDENCE", reason: "NO_BRANCH_REF" };
  if (!chron.length) return { classification: "INSUFFICIENT_EVIDENCE", reason: "EMPTY_GIT_LOG" };

  const hasPhaseB = chron.some((c) => c.tags.includes("PHASE_B"));
  const hasPending = chron.some((c) => c.tags.includes("REVIEW_PENDING"));
  const hasPaste = chron.some((c) => c.tags.includes("COPY_PASTE"));
  const hasGalaRepair = chron.some((c) => c.tags.includes("GALA_REPAIR"));
  const hasPdfReaudit = chron.some((c) => c.tags.includes("PDF_REAUDIT"));
  const galaPasses = chron.filter((c) => c.tags.includes("GALA_PASS"));

  if (!initialSnap && !expandedSnap) {
    return { classification: "INSUFFICIENT_EVIDENCE", reason: "NO_ANCHOR_COMMITS" };
  }

  const decInitial = initialSnap?.decisions_csv_sha256;
  const decExpanded =
    headSnap?.decisions_csv_sha256 || expandedSnap?.decisions_csv_sha256;
  const authInitial = initialSnap?.auth_proof_sha256;
  const authExpanded = headSnap?.auth_proof_sha256 || expandedSnap?.auth_proof_sha256;
  const stateDiff =
    (decInitial && decExpanded && decInitial !== decExpanded) ||
    (authInitial && authExpanded && authInitial !== authExpanded);
  const distinctAnchors =
    initialSnap &&
    expandedSnap &&
    initialSnap.commit_sha &&
    expandedSnap.commit_sha &&
    initialSnap.commit_sha !== expandedSnap.commit_sha;

  const strongTwoWave =
    (hasPhaseB && (hasGalaRepair || hasPaste || hasPdfReaudit)) ||
    (hasPending && hasPaste) ||
    (hasPdfReaudit && initialSnap && expandedSnap) ||
    (hasGalaRepair && initialSnap && expandedSnap && initialSnap.commit_sha !== expandedSnap.commit_sha);

  if (
    (strongTwoWave || (distinctAnchors && (hasPaste || hasGalaRepair || hasPdfReaudit))) &&
    stateDiff &&
    initialSnap &&
    expandedSnap
  ) {
    return {
      classification: "TWO_GENERATIONS_PROVEN",
      reason: "Distinct anchor commits and decisions/auth SHA delta (initial anchor vs branch head)",
    };
  }

  if ((strongTwoWave || distinctAnchors) && initialSnap && expandedSnap && !stateDiff) {
    return {
      classification: "SECOND_GENERATION_NOT_PROVEN",
      reason: "Two-wave commit pattern but decisions/auth SHA unchanged between initial anchor and head",
    };
  }

  if (
    (hasPaste || hasGalaRepair || galaPasses.length) &&
    !hasPhaseB &&
    !hasPending &&
    !hasPdfReaudit &&
    !initialSnap
  ) {
    if (chron.length === 1 || (hasPaste && !hasPending && !hasPhaseB)) {
      return {
        classification: "EXPANDED_ONLY",
        reason: "Only expanded full-card / paste lineage visible on branch (no prior generation commit)",
      };
    }
  }

  if (hasPhaseB && !hasGalaRepair && !hasPaste && !hasPdfReaudit) {
    return { classification: "INITIAL_ONLY", reason: "Phase B without later expanded pass on git" };
  }

  if (initialSnap && !expandedSnap) {
    return { classification: "INITIAL_ONLY", reason: "Initial anchor only" };
  }

  if (!initialSnap && expandedSnap) {
    return { classification: "EXPANDED_ONLY", reason: "Expanded anchor only" };
  }

  if (hasPdfReaudit && initialSnap && expandedSnap && stateDiff) {
    return {
      classification: "TWO_GENERATIONS_PROVEN",
      reason: "OWNER APPROVED then PDF-standard reaudit with SHA delta",
    };
  }

  const microWave =
    chron.some((c) => c.tags.includes("MICRO_REPAIR")) &&
    !hasPaste &&
    !hasGalaRepair &&
    !hasPending;
  if (
    microWave &&
    initialSnap &&
    headSnap &&
    stateDiff &&
    headSnap.full_composite_completeness === "PASS"
  ) {
    return {
      classification: "TWO_GENERATIONS_PROVEN",
      reason: "Initial OWNER closure then composite/PDF repair wave with distinct SHA and full-composite PASS",
    };
  }
  if (microWave) {
    return {
      classification: "SECOND_GENERATION_NOT_PROVEN",
      reason: "Micro-repair sequence without proven SHA delta or full-composite PASS at head",
    };
  }

  if (
    initialSnap &&
    headSnap &&
    stateDiff &&
    (hasPdfReaudit || headSnap.full_composite_completeness === "PASS" || headSnap.paste_source)
  ) {
    return {
      classification: "TWO_GENERATIONS_PROVEN",
      reason: "Distinct initial vs head OWNER/decisions state with expanded full-card markers at head",
    };
  }

  return { classification: "INSUFFICIENT_EVIDENCE", reason: "Ambiguous commit pattern" };
}

function analyzeBatch(n) {
  const batch = batchId(n);
  const ref = resolveRef(n);
  if (!ref) {
    return {
      batch_id: batch,
      branch: null,
      classification: "INSUFFICIENT_EVIDENCE",
      classification_reason: "NO_BRANCH_REF",
      initial: null,
      expanded: null,
      table: {
        LRB: batch,
        initial_commit: null,
        initial_scope: null,
        expanded_commit: null,
        expanded_scope: null,
        initial_sha: null,
        expanded_sha: null,
        classification: "INSUFFICIENT_EVIDENCE",
      },
    };
  }

  const chron = mergeLogs(ref, batch);
  const initialC = pickInitialCommit(chron);
  const expandedC = pickExpandedCommit(chron, initialC);
  const headSha = git(`git rev-parse ${ref}`);
  const headSnap = snapshotGeneration(batch, { sha: headSha, at: "", subject: "HEAD" }, "HEAD");
  const initialSnap = snapshotGeneration(batch, initialC, "INITIAL_REVIEW");
  const expandedSnap =
    snapshotGeneration(batch, expandedC, "EXPANDED_FULL_CARD_REVIEW") ||
    (headSnap?.paste_source || headSnap?.full_composite_completeness === "PASS"
      ? headSnap
      : null);

  const { classification, reason } = classifyBatch(
    batch,
    ref,
    chron,
    initialSnap,
    expandedSnap,
    headSnap
  );

  const table = {
    LRB: batch,
    initial_commit: initialSnap?.commit_sha?.slice(0, 12) || null,
    initial_scope: initialSnap?.scope || null,
    expanded_commit: (expandedSnap?.commit_sha || headSha)?.slice(0, 12) || null,
    expanded_scope: expandedSnap?.scope || headSnap?.scope || null,
    initial_sha: initialSnap?.decisions_csv_sha256?.slice(0, 16) || null,
    expanded_sha: (expandedSnap?.decisions_csv_sha256 || headSnap?.decisions_csv_sha256)?.slice(
      0,
      16
    ),
    classification,
  };

  return {
    batch_id: batch,
    branch: ref.replace(/^origin\//, ""),
    classification,
    classification_reason: reason,
    initial: initialSnap,
    expanded: expandedSnap,
    head: headSnap,
    git_commit_count: chron.length,
    git_tags_present: {
      phase_b: chron.some((c) => c.tags.includes("PHASE_B")),
      review_pending: chron.some((c) => c.tags.includes("REVIEW_PENDING")),
      copy_paste: chron.some((c) => c.tags.includes("COPY_PASTE")),
      gala_repair: chron.some((c) => c.tags.includes("GALA_REPAIR")),
      pdf_reaudit: chron.some((c) => c.tags.includes("PDF_REAUDIT")),
      gala_pass: chron.some((c) => c.tags.includes("GALA_PASS")),
    },
    table,
    chron_subjects: chron.map((c) => ({ at: c.at, sha: c.sha.slice(0, 12), subject: c.subject })),
  };
}

function buildNarrative(rows, proven, blocked) {
  const phaseB = rows.filter((r) => r.git_tags_present?.phase_b).map((r) => r.batch_id);
  const pendingPaste = rows.filter(
    (r) => r.git_tags_present?.review_pending && r.git_tags_present?.copy_paste
  );
  const pdfReaudit = rows.filter((r) => r.git_tags_present?.pdf_reaudit).map((r) => r.batch_id);

  return {
    why_A_group_only_001_007: [
      "Group A (EARLY_INITIAL_REVIEW) in A1-LRB-RE-REVIEW-BOUNDARY is defined only by an explicit git commit subject matching Phase B / individual OWNER review on decisions.csv or related paths.",
      `Mechanically tagged Phase B on batch branches: ${phaseB.join(", ") || "none"}.`,
      "LRB-008…020 lack Phase B commit text; their earlier OWNER work appears as OWNER authorization APPROVED, micro-repairs, or PDF-standard reaudit—not the Phase B label.",
      "LRB-021…040 use the pending→FULL_50_50 COPY-PASTE sequence without Phase B; that is a different two-generation pattern (not Group A).",
    ],
    where_initial_evidence_008_041: [
      "LRB-008…020: initial anchors are earliest OWNER authorization APPROVED / micro-repair closure commits on the batch branch (see per-batch chron_subjects).",
      `LRB-008…020 PDF-standard reaudit batches (second wave marker): ${pdfReaudit.join(", ") || "see JSON"}.`,
      `LRB-021…040: initial anchors are commits with subject 'review pending' before COPY-PASTE (${pendingPaste.length} batches with both tags).`,
      "LRB-041: initial anchor is review-pending or authorization before IS mop-up COPY-PASTE; expanded anchor is mop-up COPY-PASTE + gala IS mop-up closed.",
    ],
    final_IS_mop_up_meaning: [
      "LRB-041 proof scope text 'final IS mop-up' documents closure of the Icelandic (IS) language pool in the re-review wave, not a universal statement that every batch 001–040 had two git-visible generations.",
      "It is evidence that the sequential IS re-review mop-up ended at LRB-041; it does not by itself prove TWO_GENERATIONS_PROVEN for batches 008–040 without per-batch SHA/commit anchors.",
      "FI pool mop-up batches (e.g. LRB-052, LRB-055) are separate terminal markers and are outside LRB-001…041.",
    ],
    all_001_041_two_distinct_states: [
      proven.all_proven
        ? "All LRB-001…041 have distinct initial vs expanded decisions/auth SHA at chosen anchors."
        : `Not all batches have TWO_GENERATIONS_PROVEN: ${proven.count}/${proven.total} proven; see proven_subrange and per-batch classification.`,
    ],
  };
}

function main() {
  const rows = [];
  for (let n = 1; n <= 41; n += 1) rows.push(analyzeBatch(n));

  const provenRows = rows.filter((r) => r.classification === "TWO_GENERATIONS_PROVEN");
  const provenNums = provenRows.map((r) => parseInt(r.batch_id.replace("LRB-", ""), 10)).sort((a, b) => a - b);

  let provenSubrange = null;
  if (provenNums.length) {
    const min = provenNums[0];
    const max = provenNums[provenNums.length - 1];
    const gaps = [];
    for (let n = min; n <= max; n += 1) {
      if (!provenNums.includes(n)) gaps.push(batchId(n));
    }
    provenSubrange = {
      contiguous_from: batchId(min),
      contiguous_to: batchId(max),
      gaps_inside_span: gaps,
      proven_batches: provenRows.map((r) => r.batch_id),
      proven_count: provenRows.length,
    };
  }

  const allProven = provenRows.length === 41;
  const gate = allProven
    ? "A1_LRB_TWO_GENERATION_BOUNDARY_PASS"
    : "A1_LRB_TWO_GENERATION_BOUNDARY_BLOCKED";

  const byClass = {};
  for (const r of rows) {
    byClass[r.classification] = (byClass[r.classification] || 0) + 1;
  }

  const narrative = buildNarrative(rows, { all_proven: allProven, count: provenRows.length, total: 41 }, gate);

  const out = {
    generated_at: new Date().toISOString(),
    gate,
    gate_criteria: {
      pass_requires:
        "Every batch LRB-001…041 classified TWO_GENERATIONS_PROVEN with distinct decisions_csv and/or auth_proof SHA between INITIAL_REVIEW anchor and EXPANDED/HEAD anchor.",
      does_not_require:
        "Identical commit subject templates across all batches (Phase B vs pending→paste vs PDF reaudit are alternate proven patterns).",
      conflict_classifier_binding: "NOT_PERFORMED_IN_THIS_TASK",
    },
    RE_REVIEW_RANGE_CLAIM: "LRB-001…LRB-041",
    gate_note:
      gate === "A1_LRB_TWO_GENERATION_BOUNDARY_PASS"
        ? "All 41 batches have TWO_GENERATIONS_PROVEN with distinct SHA anchors."
        : "Cannot bind RE_REVIEW_RANGE to conflict classifier until two generations are proven for every batch in 001…041 (or OWNER accepts proven subrange).",
    classification_counts: byClass,
    proven_subrange: provenSubrange,
    batches_not_two_generations_proven: rows
      .filter((r) => r.classification !== "TWO_GENERATIONS_PROVEN")
      .map((r) => ({ batch_id: r.batch_id, classification: r.classification, reason: r.classification_reason })),
    narrative,
    summary_table: rows.map((r) => r.table),
    batches: rows,
  };

  const outDir = path.join(ROOT, "reports/g2-a1-owner/consolidation");
  fs.mkdirSync(outDir, { recursive: true });
  const jsonPath = path.join(outDir, "A1-LRB-TWO-GENERATION-PROOF.json");
  fs.writeFileSync(jsonPath, JSON.stringify(out, null, 2) + "\n");

  const md = buildMd(out);
  fs.writeFileSync(path.join(outDir, "A1-LRB-TWO-GENERATION-PROOF.md"), md);

  console.log(
    JSON.stringify(
      {
        gate: out.gate,
        classification_counts: out.classification_counts,
        proven_count: provenRows.length,
        proven_subrange: provenSubrange,
      },
      null,
      2
    )
  );
}

function buildMd(out) {
  const lines = [
    `# A1 LRB two-generation verification (LRB-001…041)`,
    ``,
    `Generated: ${out.generated_at}`,
    ``,
    `## Gate`,
    ``,
    `**${out.gate}**`,
    ``,
    out.gate_note,
    ``,
    `Claimed RE_REVIEW_RANGE (not bound to classifier in this task): \`${out.RE_REVIEW_RANGE_CLAIM}\``,
    ``,
    `### Classification counts`,
    ``,
    ...Object.entries(out.classification_counts).map(([k, v]) => `- ${k}: ${v}`),
    ``,
    `### Proven subrange`,
    ``,
    "```json",
    JSON.stringify(out.proven_subrange, null, 2),
    "```",
    ``,
    `## Narrative (OWNER questions)`,
    ``,
    `### Why Group A is only LRB-001…007`,
    ...out.narrative.why_A_group_only_001_007.map((x) => `- ${x}`),
    ``,
    `### Where initial-review evidence lives for LRB-008…041`,
    ...out.narrative.where_initial_evidence_008_041.map((x) => `- ${x}`),
    ``,
    `### What “final IS mop-up” proves`,
    ...out.narrative.final_IS_mop_up_meaning.map((x) => `- ${x}`),
    ``,
    `### Distinct OWNER/Gala states for all LRB-001…041?`,
    ...out.narrative.all_001_041_two_distinct_states.map((x) => `- ${x}`),
    ``,
    `## Summary table`,
    ``,
    `| LRB | initial_commit | initial_scope | expanded_commit | expanded_scope | initial_sha | expanded_sha | classification |`,
    `|-----|----------------|---------------|-----------------|----------------|-------------|--------------|----------------|`,
  ];

  for (const r of out.summary_table) {
    const esc = (s) => String(s || "").replace(/\|/g, "/").slice(0, 60);
    lines.push(
      `| ${r.LRB} | ${esc(r.initial_commit)} | ${esc(r.initial_scope)} | ${esc(r.expanded_commit)} | ${esc(r.expanded_scope)} | ${esc(r.initial_sha)} | ${esc(r.expanded_sha)} | ${r.classification} |`
    );
  }

  lines.push(
    ``,
    `## Batches not TWO_GENERATIONS_PROVEN`,
    ``,
    ...out.batches_not_two_generations_proven.map(
      (b) => `- **${b.batch_id}**: ${b.classification} — ${b.reason}`
    ),
    ``,
    `Full evidence: \`A1-LRB-TWO-GENERATION-PROOF.json\`.`,
    ``
  );
  return lines.join("\n");
}

if (require.main === module) main();
