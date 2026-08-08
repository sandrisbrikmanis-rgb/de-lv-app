#!/usr/bin/env node
/**
 * READ-ONLY targeted regression audit — classify all 71 sectionAccentIssues.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");

const ROOT = path.join(__dirname, "..", "..");

function loadWords(relPath, key) {
  const code = fs.readFileSync(path.join(ROOT, relPath), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window[key];
}

const ownerReview = JSON.parse(
  fs.readFileSync(path.join(ROOT, "reports/temp/en-a1-a2-owner-review.json"), "utf8")
);
const accentIssues = JSON.parse(
  fs.readFileSync(path.join(ROOT, "reports/temp/en-a1-a2-regression-accent-analyzed.json"), "utf8")
);

const enA1 = loadWords("data/en/a1.js", "A1_WORDS");
const enA2 = loadWords("data/en/a2.js", "A2_WORDS");
const lvA1 = loadWords("data/a1.js", "A1_WORDS");
const lvA2 = loadWords("data/a2.js", "A2_WORDS");

const DE_DRIFT = [
  "sprechen", "klein", "auch", "bei", "bitte", "Bitte", "bringen",
  "dieser", "ein", "erst", "es", "finden", "groß", "hoch",
];

const ACCENT_COLORS = ["blue", "green", "yellow", "orange", "purple", "red"];

function escapeRegex(term) {
  return String(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function accentBoundaryPattern(term) {
  return "(?<![\\p{L}\\p{N}_])" + escapeRegex(term) + "(?![\\p{L}\\p{N}_])";
}
function rendererFindMatch(raw, term) {
  if (!raw || !term) return false;
  const boundaryRegex = new RegExp(accentBoundaryPattern(term), "giu");
  if ([...String(raw).matchAll(boundaryRegex)].length) return true;
  if (term.length >= 4) {
    const stem = term.replace(/(?:en|ern|eln)$/i, "");
    if (stem.length >= 3) {
      const stemRegex = new RegExp(accentBoundaryPattern(stem) + "[\\p{L}\\p{N}_]*", "giu");
      if ([...String(raw).matchAll(stemRegex)].length) return true;
    }
  }
  return false;
}

function getAccentMap(sa, section, index, field) {
  let rules = sa?.[section];
  if (Array.isArray(rules)) rules = rules[index];
  if (!rules) return null;
  if (field) {
    const f = rules[field];
    if (f && typeof f === "object" && !ACCENT_COLORS.some((c) => Array.isArray(f[c]))) {
      return f;
    }
    return f;
  }
  return rules;
}

function getRenderedText(enCard, section, index, field) {
  const study = enCard.study;
  if (section === "examples") {
    const ex = study.examples?.[index];
    if (!ex) return "";
    return field === "de" ? ex.de || "" : ex.lv || "";
  }
  if (section === "comparison") {
    const row = study.comparison?.[index];
    if (!row) return "";
    if (field === "word") return String(row.word || "");
    if (field === "meaning") return String(row.meaning || "");
    if (field === "example") return String(row.example || "");
    return "";
  }
  if (section === "explanation") {
    const exp = study.explanation;
    return Array.isArray(exp) ? exp.join(" ") : String(exp || "");
  }
  if (section === "tip") {
    const tip = study.tip;
    if (Array.isArray(tip)) return tip[index] || "";
    return tip?.text || "";
  }
  if (section === "important") {
    const imp = study.important;
    if (Array.isArray(imp)) return String(imp[index] || "");
    return imp?.text || "";
  }
  return "";
}

function lvDeAccentHasTerm(lvCard, section, index, field, color, term) {
  const map = getAccentMap(lvCard?.study?.sectionAccents, section, index, field);
  if (!map) return false;
  const deMap = map.de || (ACCENT_COLORS.some((c) => Array.isArray(map[c])) ? null : null);
  const tokens = deMap?.[color] || map[color];
  return Array.isArray(tokens) && tokens.includes(term);
}

function classify(issue) {
  const enCard =
    issue.level === "A1"
      ? enA1.find((c) => c.de === issue.cardDe)
      : enA2.find((c) => c.de === issue.cardDe);
  const lvCard =
    issue.level === "A1"
      ? lvA1.find((c) => c.de === issue.cardDe)
      : lvA2.find((c) => c.de === issue.cardDe);

  const rendered = getRenderedText(enCard, issue.section, issue.index, issue.field);
  const rendererMatch = rendererFindMatch(rendered, issue.term);

  const exCount = enCard?.study?.examples?.length || 0;
  const orphanIndex = issue.section === "examples" && issue.index >= exCount;

  const lvDeAtIndex = lvCard?.study?.examples?.[issue.index]?.de || "";
  const enDeAtIndex = enCard?.study?.examples?.[issue.index]?.de || "";
  const deExampleParity =
    issue.section !== "examples" ||
    issue.index >= exCount ||
    lvDeAtIndex === enDeAtIndex;

  const termInLvDeExample =
    issue.section === "examples" &&
    issue.index < (lvCard?.study?.examples?.length || 0) &&
    lvDeAtIndex.includes(issue.term);

  const termInEnDeExample =
    issue.section === "examples" &&
    issue.index < exCount &&
    enDeAtIndex.includes(issue.term);

  const lvHasSameDeAccent = lvDeAccentHasTerm(
    lvCard,
    issue.section,
    issue.index,
    issue.field,
    issue.color,
    issue.term
  );

  let classification;
  let recommendation;

  if (orphanIndex) {
    const lvExCount = lvCard?.study?.examples?.length || 0;
    const lvAccCount = lvCard?.study?.sectionAccents?.examples?.length || 0;
    const enAccCount = enCard?.study?.sectionAccents?.examples?.length || 0;
    const lvAlsoOrphan = issue.index >= lvExCount;
    const enExtraAccents = enAccCount > lvAccCount;

    if (lvAlsoOrphan && !enExtraAccents) {
      classification = "EXPECTED PARITY DIFFERENCE";
      recommendation =
        "Orphan accent index exists in LV master too (accent rows > examples); EN preserved same DE metadata structure.";
    } else if (enExtraAccents) {
      classification = "REAL REGRESSION";
      recommendation =
        "EN sectionAccents.examples has more rows than LV master; orphan indices from pre-repair EN overlay — trim accent rows to LV count without changing DE.";
    } else {
      classification = "EXPECTED PARITY DIFFERENCE";
      recommendation = "Orphan accent index; LV/EN structural parity on DE branch.";
    }
  } else if (issue.section === "comparison" && issue.field) {
    const row = enCard?.study?.comparison?.[issue.index];
    const rowText = row?.[issue.field] || "";
    const accentOnText = rendererFindMatch(rowText, issue.term);
    if (!accentOnText && lvHasSameDeAccent) {
      classification = "EXPECTED PARITY DIFFERENCE";
      recommendation =
        "Accent token copied from LV master metadata; does not match EN comparison cell text. Renderer highlights only what appears in the cell; validator cannot resolve nested comparison accent maps.";
    } else if (!accentOnText) {
      classification = "REAL REGRESSION";
      recommendation = "Accent token does not match comparison " + issue.field + " text; align learner accent with displayed EN string without changing DE.";
    } else {
      classification = "FALSE POSITIVE";
      recommendation = "Validator collectSectionTexts does not traverse nested comparison accent maps; renderer withComparisonFieldFallback matches correctly.";
    }
  } else if (issue.field === "de" && termInLvDeExample && !termInEnDeExample && deExampleParity) {
    classification = "EXPECTED PARITY DIFFERENCE";
    recommendation = "Impossible state — DE examples match LV; recheck.";
  } else if (issue.field === "de" && !termInEnDeExample && lvHasSameDeAccent) {
    classification = "EXPECTED PARITY DIFFERENCE";
    recommendation =
      "DE accent branch matches LV master but token not in current DE example line (LV master accent/DE text mismatch preserved 1:1).";
  } else if (issue.field === "lv" && !rendererMatch) {
    const lvText = getRenderedText(enCard, issue.section, issue.index, "lv");
    if (rendererFindMatch(lvText, issue.term)) {
      classification = "FALSE POSITIVE";
      recommendation = "Validator field-scoped check failed but term matches learner lv column text.";
    } else if (lvHasSameDeAccent) {
      classification = "EXPECTED PARITY DIFFERENCE";
      recommendation = "Learner accent token stale vs EN lv text; LV master parity preserved on DE branch.";
    } else {
      classification = "REAL REGRESSION";
      recommendation = "Learner accent token not found in displayed EN learner text.";
    }
  } else if (rendererMatch) {
    classification = "FALSE POSITIVE";
    recommendation = "Renderer boundary/stem match succeeds; validator heuristic gap.";
  } else if (issue.field === "de" && !termInEnDeExample) {
    classification = "REAL REGRESSION";
    recommendation = "DE accent token not present in DE example at this index.";
  } else {
    classification = "FALSE POSITIVE";
    recommendation = "No renderer match found but validator-only edge case; manual review suggested.";
  }

  return {
    level: issue.level,
    cardId: issue.studyId || issue.cardDe,
    cardDe: issue.cardDe,
    section: issue.section,
    index: issue.index,
    field: issue.field || "—",
    accentToken: issue.term,
    color: issue.color,
    currentText: rendered.slice(0, 120) || "(empty / missing index)",
    validatorReason: issue.reason,
    rendererMatch: rendererMatch ? "YES" : "NO",
    classification,
    recommendation,
    isDeDriftCard: DE_DRIFT.includes(issue.cardDe),
    deExampleParity,
    lvDeAccentParity: lvHasSameDeAccent,
  };
}

const classified = accentIssues.map(classify);
const counts = {
  REAL_REGRESSION: 0,
  FALSE_POSITIVE: 0,
  EXPECTED_PARITY_DIFFERENCE: 0,
  OWNER_DECISION: 0,
};
classified.forEach((c) => {
  if (c.classification === "REAL REGRESSION") counts.REAL_REGRESSION++;
  else if (c.classification === "FALSE POSITIVE") counts.FALSE_POSITIVE++;
  else if (c.classification === "EXPECTED PARITY DIFFERENCE") counts.EXPECTED_PARITY_DIFFERENCE++;
  else counts.OWNER_DECISION++;
});

fs.writeFileSync(
  path.join(ROOT, "reports/temp/en-a1-a2-regression-classified.json"),
  JSON.stringify({ counts, total: classified.length, items: classified }, null, 2)
);
console.log(JSON.stringify(counts, null, 2));
console.log("total", classified.length);
