#!/usr/bin/env node
"use strict";

const { resolveEntry, readCurrent } = require("./es-a1-a2-final-regression-retention");
const { hasForeignRemnant } = require("./es-foreign-remnant-validate");

const OWNER_OVERRIDES = {
  "ES-A1A2-MICRO-0221": {
    new: "Él salta sobre el caballo.",
    status: "LABOT",
    reason: "Er springt aufs Pferd. izsaka uzlēkšanu zirgam, nevis vienkārši jāšanu.",
  },
  "ES-A1A2-MICRO-0222": {
    new: "en el • dentro del (¿dónde?)",
    status: "LABOT",
    reason: "OWNER: salīdzinājuma nozīme precizēta kā en el / dentro del.",
  },
  "ES-A1A2-MICRO-0223": {
    new: "hacia dentro, ¿adónde? (según el contexto)",
    status: "LABOT",
    reason: "OWNER: ¿dónde? → ¿adónde? kustības kontekstā.",
  },
  "ES-A1A2-MICRO-0224": {
    new: "hacia dentro, ¿adónde? (según el contexto)",
    status: "LABOT",
    reason: "OWNER: ¿dónde? → ¿adónde? kustības kontekstā.",
  },
  "ES-A1A2-MICRO-0225": {
    new: "¡Hasta mañana!",
    status: "LABOT",
    reason: "OWNER: pietrūkst sākuma ¡ pie Bis morgen! tulkojuma.",
  },
  "ES-A1A2-MICRO-0226": {
    new: "¡Hasta mañana!",
    status: "LABOT",
    reason: "OWNER: paredzēts Bis morgen! tulkojums.",
    prerequisiteDe: "Bis morgen!",
    exampleIndex: 4,
  },
  "ES-A1A2-MICRO-0227": {
    new: "Es por la mañana.",
    status: "LABOT",
    reason: "OWNER: rīta nozīmes precizējums.",
    prerequisiteMorning: true,
    exampleIndex: 4,
  },
  "ES-A1A2-MICRO-0228": {
    new: "Yo como arroz.",
    status: "LABOT",
    reason: "OWNER: teikuma beigās trūkst punkta.",
  },
  "ES-A1A2-MICRO-0229": {
    new: "Por favor, cocinen.",
    status: "LABOT",
    reason: "Vācu Sie šajā piemērā ir formāls imperatīvs, nevis «viņi».",
    prerequisiteDe: "Sie kochen, bitte.",
    exampleIndex: 5,
  },
  "ES-A1A2-MICRO-0230": {
    new: "Canceló la membresía.",
    status: "LABOT",
    reason: "OWNER: absagen = atcelt, nevis noraidīt.",
  },
  "ES-A1A2-MICRO-0231": {
    new: "El camarero fue muy amable.",
    status: "LABOT",
    reason: "OWNER: teikuma sākuma lielais burts.",
  },
  "ES-A1A2-MICRO-0232": {
    new: "campo / tema / especialidad",
    status: "LABOT",
    reason: "OWNER: Fach = specialitāte, nevis industrija.",
  },
  "ES-A1A2-MICRO-0233": {
    new: "La tapa está bien ajustada.",
    status: "LABOT",
    reason: "OWNER: fest = cieši piegriezts.",
  },
  "ES-A1A2-MICRO-0234": {
    new: "Ella se peina con un peine.",
    status: "LABOT",
    reason: "OWNER: atgriezeniskais darbības vārds.",
  },
  "ES-A1A2-MICRO-0235": {
    new: "El césped es verde.",
    status: "LABOT",
    reason: "OWNER: Rasen = zāliene (césped).",
  },
  "ES-A1A2-MICRO-0236": {
    new: "Es difícil llevar el libro.",
    status: "LABOT",
    reason: "OWNER: schwer = grūti, nevis smags.",
  },
  "ES-A1A2-MICRO-0237": {
    new: "Me duele en este punto.",
    status: "LABOT",
    reason: "Saglabā an dieser Stelle konkrētās vietas nozīmi dabiskā spāņu valodā.",
  },
  "ES-A1A2-MICRO-0238": {
    new: "Por favor, limpie la pizarra.",
    status: "LABOT",
    reason: "OWNER: Tafel = tāfele (pizarra).",
  },
  "ES-A1A2-MICRO-0239": {
    new: "Vacaciones del trabajo.",
    status: "LABOT",
    reason: "OWNER: teikuma sākuma lielais burts.",
  },
  "ES-A1A2-MICRO-0240": {
    new: "El auto es caro.",
    status: "NELABOT",
    classification: "FALSE_POSITIVE",
    reason:
      "DE piemērs ir Das Auto ist teuer.; CURRENT ir precīzs un pareizs tulkojums. El auto vale mucho. mainītu nozīmi un izdzēstu teuer salīdzinājumu.",
  },
};

function normalizeField(field) {
  if (field === "esText" || field === "esMain") return "lv";
  return field;
}

function stringifyValue(value) {
  if (value === undefined || value === null) return String(value);
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function walkStringPaths(value, prefix, out) {
  if (typeof value === "string") {
    out.push({ path: prefix, value });
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      walkStringPaths(item, `${prefix}[${index}]`, out);
    });
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      const next = prefix ? `${prefix}.${key}` : key;
      walkStringPaths(child, next, out);
    }
  }
}

function findPathsByValue(entry, target) {
  const paths = [];
  walkStringPaths(entry.lv, "lv", paths);
  if (entry.study) walkStringPaths(entry.study, "study", paths);
  return paths.filter((p) => p.value === target).map((p) => p.path);
}

function resolveProductionField(entry, finding) {
  const normalized = normalizeField(finding.field);
  const direct = readCurrent(entry, normalized);
  if (stringifyValue(direct) === finding.current) {
    return { field: normalized, current: finding.current, resolvedBy: "direct" };
  }

  const matches = findPathsByValue(entry, finding.current);
  if (matches.length === 1) {
    return { field: matches[0], current: finding.current, resolvedBy: "value_search" };
  }
  if (matches.length > 1) {
    return {
      error: "OWNER_CONFLICT",
      reason: `Multiple production paths for CURRENT: ${matches.join(", ")}`,
      matches,
    };
  }
  return {
    error: "CURRENT_MISMATCH",
    reason: `CURRENT not found at ${normalized}; production=${stringifyValue(direct)}`,
    field: normalized,
    production: stringifyValue(direct),
  };
}

function severityRank(severity) {
  const order = { KRITISKA: 4, AUGSTA: 3, VIDĒJA: 2, ZEMA: 1 };
  return order[severity] || 0;
}

function checkPrerequisite(findingId, entry, override) {
  if (!override || override.status === "NELABOT") return { blocked: false };

  const examples = entry?.study?.examples || [];
  const idx = override.exampleIndex;
  const ex = idx !== undefined ? examples[idx] : null;

  if (findingId === "ES-A1A2-MICRO-0226") {
    if (!ex) {
      return { blocked: true, reason: "DE piemērs study.examples[4] nav atrasts." };
    }
    if (ex.de !== "Bis morgen!") {
      return {
        blocked: true,
        reason: `Prerequisite FAIL: DE piemērs ir «${ex.de}», nevis «Bis morgen!». CURRENT «${ex.lv}» atbilst Guten Morgen!`,
      };
    }
    return { blocked: false };
  }

  if (findingId === "ES-A1A2-MICRO-0227") {
    if (!ex) {
      return { blocked: true, reason: "DE piemērs study.examples[4] nav atrasts." };
    }
    if (ex.de === "Guten Morgen!") {
      return {
        blocked: true,
        reason: `Prerequisite FAIL: DE piemērs ir «Guten Morgen!» (sveiciens), nevis rīta laika izteiksme; NEW «Es por la mañana.» neatbilst DE nozīmei.`,
      };
    }
    return { blocked: false };
  }

  if (findingId === "ES-A1A2-MICRO-0229") {
    if (!ex) {
      return { blocked: true, reason: "DE piemērs study.examples[5] nav atrasts." };
    }
    if (ex.de !== "Sie kochen, bitte.") {
      return {
        blocked: true,
        reason: `Prerequisite FAIL: DE piemērs ir «${ex.de}», nevis «Sie kochen, bitte.»`,
      };
    }
    return { blocked: false };
  }

  return { blocked: false };
}

function buildOwnerDecisions({ regression, wordsByLevel, head }) {
  const reviewItems = regression.items.filter(
    (f) => f.validation === "REAL" || f.validation === "OWNER_REVIEW_REQUIRED",
  );

  const prepared = [];
  const errors = [];
  const blockedDecisions = [];

  for (const finding of reviewItems) {
    const { entry } = resolveEntry(wordsByLevel, finding.cardId);
    if (!entry) {
      errors.push({ id: finding.id, error: "CARD_NOT_FOUND", cardId: finding.cardId });
      continue;
    }

    const override = OWNER_OVERRIDES[finding.id];
    let field = normalizeField(finding.field);
    let current = finding.current;
    let newValue =
      finding.validation === "OWNER_REVIEW_REQUIRED" && override
        ? override.new
        : finding.proposedNew;
    let category = finding.category;
    let reason =
      finding.validation === "OWNER_REVIEW_REQUIRED" && override
        ? override.reason
        : finding.reason || "";
    let status =
      finding.validation === "OWNER_REVIEW_REQUIRED" && override
        ? override.status
        : "LABOT";
    let classification = override?.classification;

    const resolved = resolveProductionField(entry, { ...finding, field });
    if (resolved.error) {
      errors.push({ id: finding.id, ...resolved });
      continue;
    }
    field = resolved.field;
    current = resolved.current;

    if (override?.status === "NELABOT") {
      newValue = current;
    }

    if (status === "LABOT") {
      const prereq = checkPrerequisite(finding.id, entry, override);
      if (prereq.blocked) {
        status = "BLOCKED";
        reason = `${reason} | ${prereq.reason}`;
        blockedDecisions.push({ id: finding.id, ...prereq });
      }
    }

    if (status === "LABOT" && current === newValue) {
      errors.push({ id: finding.id, error: "NO_OP_LABOT", current, new: newValue });
      continue;
    }
    if (status === "LABOT" && (!newValue || String(newValue).trim() === "")) {
      errors.push({ id: finding.id, error: "EMPTY_NEW" });
      continue;
    }
    if (status === "NELABOT" && current !== newValue) {
      errors.push({ id: finding.id, error: "NELABOT_CURRENT_NEW_MISMATCH" });
      continue;
    }

    prepared.push({
      sourceFindingIds: [finding.id],
      severity: finding.severity,
      category,
      level: finding.level,
      cardId: finding.cardId,
      de: finding.de || entry.de || "",
      field,
      current,
      new: newValue,
      status,
      classification,
      reason,
      resolvedBy: resolved.resolvedBy,
    });
  }

  const groups = new Map();
  for (const item of prepared) {
    const key = `${item.level}|${item.cardId}|${item.field}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }

  const decisions = [];
  const consolidatedDuplicates = [];

  for (const [key, group] of groups.entries()) {
    const news = [...new Set(group.map((g) => g.new))];
    const statuses = [...new Set(group.map((g) => g.status))];
    if (news.length > 1 || statuses.length > 1) {
      errors.push({
        error: "OWNER_CONFLICT",
        key,
        sourceFindingIds: group.flatMap((g) => g.sourceFindingIds),
        proposals: news,
        statuses,
      });
      continue;
    }

    const merged = {
      ...group[0],
      sourceFindingIds: group.flatMap((g) => g.sourceFindingIds),
      severity: group.reduce(
        (best, g) => (severityRank(g.severity) > severityRank(best) ? g.severity : best),
        group[0].severity,
      ),
      reason: group.map((g) => g.reason).filter(Boolean).join(" | "),
    };

    if (group.length > 1) {
      consolidatedDuplicates.push({ key, count: group.length, ids: merged.sourceFindingIds });
    }
    decisions.push(merged);
  }

  decisions.sort((a, b) => a.sourceFindingIds[0].localeCompare(b.sourceFindingIds[0]));

  const applyTargets = decisions
    .filter((d) => d.status === "LABOT")
    .map((item, index) => ({
      id: `ES-A1A2-MICRO-OWNER-${String(index + 1).padStart(4, "0")}`,
      ...item,
    }));

  const allDecisions = decisions.map((item, index) => ({
    id: `ES-A1A2-MICRO-OWNER-${String(index + 1).padStart(4, "0")}`,
    ...item,
  }));

  const payload = {
    repository: "sandrisbrikmanis-rgb/de-lv-app",
    pr: 664,
    branch: "cursor/es-de-a1-a2-owner-apply-001-200-3141",
    sourceHead: head,
    reviewFindings: reviewItems.length,
    labotFindings: prepared.filter((p) => p.status === "LABOT").length,
    nelabotFindings: prepared.filter((p) => p.status === "NELABOT").length,
    blockedFindings: prepared.filter((p) => p.status === "BLOCKED").length,
    uniqueOwnerTargets: applyTargets.length,
    consolidatedDuplicates: consolidatedDuplicates.reduce((n, d) => n + (d.count - 1), 0),
    status: errors.length || blockedDecisions.length ? "BLOCKED" : "OWNER ACCEPTED",
    decisions: allDecisions,
    items: applyTargets,
    blockedDecisions,
    errors,
    consolidatedDuplicateGroups: consolidatedDuplicates,
  };

  return payload;
}

function validateOwnerDecisions({ regression, payload, wordsByLevel, syntaxPass, mirrorPass }) {
  const errors = [];
  const reviewItems = regression.items.filter(
    (f) => f.validation === "REAL" || f.validation === "OWNER_REVIEW_REQUIRED",
  );
  const reviewIds = new Set(reviewItems.map((f) => f.id));
  const covered = new Set(payload.decisions.flatMap((d) => d.sourceFindingIds));

  const realCount = reviewItems.filter((f) => f.validation === "REAL").length;
  const ownerCount = reviewItems.filter((f) => f.validation === "OWNER_REVIEW_REQUIRED").length;

  if (realCount !== 220) errors.push(`REAL count ${realCount} !== 220`);
  if (ownerCount !== 20) errors.push(`OWNER_REVIEW_REQUIRED count ${ownerCount} !== 20`);
  if (payload.reviewFindings !== 240) errors.push(`reviewFindings ${payload.reviewFindings} !== 240`);
  if (covered.size !== 240) errors.push(`source finding coverage ${covered.size}/240`);
  for (const id of reviewIds) {
    if (!covered.has(id)) errors.push(`missing source finding ${id}`);
  }

  const labotDecisions = payload.decisions.filter((d) => d.status === "LABOT");
  const nelabotDecisions = payload.decisions.filter((d) => d.status === "NELABOT");
  const blockedDecisions = payload.decisions.filter((d) => d.status === "BLOCKED");

  if (labotDecisions.length + nelabotDecisions.length + blockedDecisions.length !== 240) {
    errors.push(`decision count ${payload.decisions.length} !== 240`);
  }

  const seen = new Set();
  let currentExact = 0;
  let emptyNew = 0;
  let sameNew = 0;
  let deTargets = 0;
  let nelabotCurrentNew = 0;

  for (const item of payload.items) {
    const key = `${item.level}|${item.cardId}|${item.field}`;
    if (seen.has(key)) errors.push(`duplicate apply target ${key}`);
    seen.add(key);

    if (item.status !== "LABOT") errors.push(`${item.id}: apply target status !== LABOT`);

    if (item.field.startsWith("de") || item.field.includes(".de")) deTargets += 1;

    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    if (!entry) {
      errors.push(`${item.id}: card not found`);
      continue;
    }
    const actual = readCurrent(entry, item.field);
    if (stringifyValue(actual) === item.current) currentExact += 1;
    else errors.push(`${item.id}: CURRENT mismatch production (${item.field})`);

    if (!item.new || String(item.new).trim() === "") {
      emptyNew += 1;
      errors.push(`${item.id}: empty NEW`);
    }
    if (item.current === item.new) {
      sameNew += 1;
      errors.push(`${item.id}: CURRENT === NEW`);
    }
    if (hasForeignRemnant(String(item.new))) {
      errors.push(`${item.id}: foreign remnant in NEW`);
    }
  }

  for (const item of nelabotDecisions) {
    if (item.current !== item.new) nelabotCurrentNew += 1;
    if (item.current === item.new) {
      // expected for NELABOT
    } else {
      errors.push(`${item.id}: NELABOT but current !== new`);
    }
  }

  for (const item of blockedDecisions) {
    const { entry } = resolveEntry(wordsByLevel, item.cardId);
    if (!entry) errors.push(`${item.id}: blocked card not found`);
  }

  if (payload.errors?.length) errors.push(...payload.errors.map((e) => JSON.stringify(e)));

  const dupKeys = new Set();
  const allKeys = payload.decisions.map((d) => `${d.level}|${d.cardId}|${d.field}`);
  for (const k of allKeys) {
    if (dupKeys.has(k)) errors.push(`duplicate decision key ${k}`);
    dupKeys.add(k);
  }

  const hasBlocked = blockedDecisions.length > 0;
  const verdict = errors.length
    ? "FAIL"
    : hasBlocked
      ? "BLOCKED"
      : "READY FOR FINAL MICRO COPY-ONLY APPLY";

  return {
    errors,
    verdict,
    metrics: {
      realFindings: realCount,
      ownerReviewRequired: ownerCount,
      reviewCoverage: `${covered.size}/240`,
      labotFindings: labotDecisions.length,
      nelabotFindings: nelabotDecisions.length,
      blockedFindings: blockedDecisions.length,
      uniqueLabotTargets: payload.items.length,
      consolidatedDuplicates: payload.consolidatedDuplicates,
      ownerConflict: payload.errors?.filter((e) => e.error === "OWNER_CONFLICT").length || 0,
      currentExactMatchPct: payload.items.length ? (currentExact / payload.items.length) * 100 : 0,
      deTargets,
      emptyNewLabot: emptyNew,
      sameNewLabot: sameNew,
      nelabotCurrentNewMismatch: nelabotCurrentNew,
      syntaxPass,
      mirrorPass,
      productionChanges: 0,
    },
  };
}

function buildViewMd(payload) {
  const lines = [
    "# ES–DE A1+A2 — final micro-regression OWNER decisions",
    "",
    `**Source HEAD:** \`${payload.sourceHead}\``,
    `**Review findings:** ${payload.reviewFindings}`,
    `**LABOT findings:** ${payload.labotFindings}`,
    `**NELABOT findings:** ${payload.nelabotFindings}`,
    `**BLOCKED findings:** ${payload.blockedFindings}`,
    `**Unique LABOT apply targets:** ${payload.uniqueOwnerTargets}`,
    `**Status:** ${payload.status}`,
    "",
  ];

  for (const item of payload.decisions) {
    lines.push(`## ${item.id}`, "");
    lines.push(`- Source Finding IDs: ${item.sourceFindingIds.map((id) => `\`${id}\``).join(", ")}`);
    lines.push(`- Severity: ${item.severity}`);
    lines.push(`- Category: ${item.category}`);
    lines.push(`- Level: ${item.level}`);
    lines.push(`- Card ID: \`${item.cardId}\``);
    lines.push(`- DE: \`${item.de}\``);
    lines.push(`- Field/path: \`${item.field}\``);
    lines.push(`- CURRENT: \`${item.current}\``);
    lines.push(`- NEW: \`${item.new}\``);
    lines.push(`- Status: ${item.status}`);
    if (item.classification) lines.push(`- Classification: ${item.classification}`);
    lines.push(`- Pamatojums: ${item.reason}`);
    lines.push("");
  }
  return lines.join("\n");
}

function buildSummaryMd(payload, validation) {
  const m = validation.metrics;
  const lines = [
    "# ES–DE A1+A2 — final micro-regression OWNER decisions summary",
    "",
    `**Source HEAD:** \`${payload.sourceHead}\``,
    `**Branch:** \`${payload.branch}\``,
    `**PR:** #${payload.pr}`,
    "",
    "| Metrika | Rezultāts |",
    "|---------|----------:|",
    `| Review findings | **${payload.reviewFindings}** |`,
    `| REAL findings | **${m.realFindings}** |`,
    `| OWNER_REVIEW_REQUIRED resolved | **${m.ownerReviewRequired}** |`,
    `| Review coverage | **${m.reviewCoverage}** |`,
    `| LABOT findings | **${m.labotFindings}** |`,
    `| NELABOT findings | **${m.nelabotFindings}** |`,
    `| BLOCKED findings | **${m.blockedFindings}** |`,
    `| Unique LABOT apply targets | **${m.uniqueLabotTargets}** |`,
    `| Consolidated duplicates | **${m.consolidatedDuplicates}** |`,
    `| OWNER_CONFLICT | **${m.ownerConflict}** |`,
    `| CURRENT exact match (LABOT) | **${m.currentExactMatchPct.toFixed(0)}%** |`,
    `| Empty NEW (LABOT) | **${m.emptyNewLabot}** |`,
    `| CURRENT === NEW (LABOT) | **${m.sameNewLabot}** |`,
    `| DE targets | **${m.deTargets}** |`,
    `| Production changes | **${m.productionChanges}** |`,
    `| Mirror | **${m.mirrorPass ? "PASS" : "FAIL"}** |`,
    `| Syntax | **${m.syntaxPass ? "PASS" : "FAIL"}** |`,
    "",
  ];

  if (payload.blockedDecisions?.length) {
    lines.push("## BLOCKED items", "");
    for (const b of payload.blockedDecisions) {
      lines.push(`- \`${b.id}\`: ${b.reason}`);
    }
    lines.push("");
  }

  lines.push(`## FINAL VERDICT: **${validation.verdict}**`, "");

  if (validation.errors.length) {
    lines.push("## Validation errors", "");
    for (const e of validation.errors.slice(0, 30)) lines.push(`- ${e}`);
    if (validation.errors.length > 30) {
      lines.push(`- ... and ${validation.errors.length - 30} more`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

module.exports = {
  buildOwnerDecisions,
  validateOwnerDecisions,
  buildViewMd,
  buildSummaryMd,
  OWNER_OVERRIDES,
};
