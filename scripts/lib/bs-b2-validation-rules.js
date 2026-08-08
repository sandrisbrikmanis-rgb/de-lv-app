/**
 * Deterministic validation rules for BS B2 audit findings triage.
 */

const EKAVISM_REPLACEMENTS = [
  [/\bvreme\b/gi, "vrijeme"],
  [/\buspeh\b/gi, "uspjeh"],
  [/\bdete\b/gi, "dijete"],
  [/\bmleko\b/gi, "mlijeko"],
  [/\blekar\b/gi, "liječnik"],
  [/\brešiti\b/gi, "riješiti"],
  [/\brešenje\b/gi, "rješenje"],
  [/\brešenja\b/gi, "rješenja"],
  [/\bnemački\b/gi, "njemački"],
  [/\bnemačkog\b/gi, "njemačkog"],
  [/\bsledeći\b/gi, "sljedeći"],
  [/\bsledećeg\b/gi, "sljedećeg"],
  [/\bovde\b/gi, "ovdje"],
  [/\blepo\b/gi, "lijepo"],
  [/\blepa\b/gi, "lijepa"],
  [/\blepotu\b/gi, "ljepotu"],
  [/\blepota\b/gi, "ljepota"],
  [/\bvredno\b/gi, "vrijedno"],
  [/\bvredan\b/gi, "vrijedan"],
  [/\bpreusmeriti\b/gi, "preusmjeriti"],
  [/\bpreusmeren\b/gi, "preusmjeren"],
  [/\bizbegavati\b/gi, "izbjegavati"],
  [/\bizbegavajući\b/gi, "izbjegavajući"],
  [/\bneizvestan\b/gi, "neizvjestan"],
  [/\bizumreti\b/gi, "izumrijeti"],
  [/\bizumreo\b/gi, "izumrio"],
  [/\bmesec\b/gi, "mjesec"],
  [/\bdetinjstvo\b/gi, "djetinjstvo"],
  [/\blečiti\b/gi, "liječiti"],
  [/\blečenje\b/gi, "liječenje"],
  [/\breč\b/gi, "riječ"],
  [/\breči\b/gi, "riječi"],
  [/\buspešan\b/gi, "uspješan"],
  [/\buspešno\b/gi, "uspješno"],
  [/\bneuspeh\b/gi, "neuspjeh"],
  [/\bsvet\b/gi, "svijet"],
  [/\bsvetlost\b/gi, "svjetlost"],
  [/\bdeca\b/gi, "djeca"],
  [/\bdecu\b/gi, "djecu"],
];

const EN_REMNANT_WORDS = /\b(Self-made|Weave|Weaver|Puppy|Knock off|Bush|Draining|Spellbinding|Wind cake|Outlet market|Break open|Rowan)\b/i;

function applyEkavismFix(text) {
  let out = String(text || "");
  for (const [pattern, replacement] of EKAVISM_REPLACEMENTS) {
    out = out.replace(pattern, replacement);
  }
  return out;
}

function normalizeForCompare(text) {
  return String(text || "").replace(/\s+/g, " ").trim().toLowerCase();
}

function textsEquivalent(a, b) {
  return normalizeForCompare(a) === normalizeForCompare(b);
}

function isEnglishRemnant(currentBs, reason) {
  if (!currentBs) return false;
  if (EN_REMNANT_WORDS.test(currentBs)) return true;
  if (reason && /englesk|english|ostao na engleskom|na engleskom/i.test(reason)) return true;
  return false;
}

function isEkavismFix(currentBs, proposedBs) {
  if (!currentBs || !proposedBs) return false;
  const auto = applyEkavismFix(currentBs);
  if (textsEquivalent(auto, proposedBs)) return true;
  let hasEkavic = false;
  for (const [pattern] of EKAVISM_REPLACEMENTS) {
    if (pattern.test(currentBs)) hasEkavic = true;
  }
  return hasEkavic && textsEquivalent(auto, proposedBs);
}

function classifyDeterministic(finding) {
  const { cardId, field, currentBs, proposedBs, reason } = finding;

  if (field === "study.formsLabel" && currentBs === "Menadžment:") {
    return {
      verdict: "FIX",
      validatedSeverity: "MEDIUM",
      validationMethod: "deterministic",
      correctedText: proposedBs || "Rekcija:",
      shortReason: "formsLabel must label grammatical rection, not management",
      confidence: "high",
      pattern: "formsLabel",
    };
  }

  if (
    (cardId === "b2-sich-abfinden" || cardId === "b2-sich-versoehnen")
    && field === "study.translation"
    && currentBs === "Trpiti"
  ) {
    return {
      verdict: "FIX",
      validatedSeverity: "HIGH",
      validationMethod: "deterministic",
      correctedText: proposedBs || "Pomiriti se s",
      shortReason: "Cache collision: Trpiti (endure) wrong for reconcile",
      confidence: "high",
      pattern: "cache_collision",
    };
  }

  if (isEnglishRemnant(currentBs, reason)) {
    return {
      verdict: "FIX",
      validatedSeverity: "HIGH",
      validationMethod: "deterministic",
      correctedText: proposedBs,
      shortReason: reason || "English remnant in BS user-visible field",
      confidence: "high",
      pattern: "en_remnant",
    };
  }

  if (isEkavismFix(currentBs, proposedBs)) {
    return {
      verdict: "FIX",
      validatedSeverity: "MEDIUM",
      validationMethod: "deterministic",
      correctedText: proposedBs,
      shortReason: reason || "Ekavism should use ijekavica in Bosnian standard",
      confidence: "high",
      pattern: "ekavism",
    };
  }

  if (
    (field === "study.rektion" || field === "study.forms")
    && currentBs === proposedBs
    && /\bmit \+ kam\?\b/.test(currentBs || "")
  ) {
    return {
      verdict: "PROJECT_CONVENTION",
      validatedSeverity: null,
      validationMethod: "deterministic",
      correctedText: null,
      shortReason: "German rection notation follows LV/DE pedagogical convention",
      confidence: "high",
      pattern: "grammar",
    };
  }

  if (
    (field === "study.rektion" || field === "study.forms")
    && /\bkam\?\b/.test(currentBs || "")
    && reason
    && /latvijsk/i.test(reason)
  ) {
    return {
      verdict: "KEEP",
      validatedSeverity: null,
      validationMethod: "deterministic",
      correctedText: null,
      shortReason: "kam? is standard pedagogical notation in rection fields",
      confidence: "medium",
      pattern: "grammar",
    };
  }

  return null;
}

function inferPattern(finding) {
  const reason = (finding.reason || "").toLowerCase();
  const field = finding.field || "";
  if (field === "study.formsLabel") return "formsLabel";
  if (/trpiti|cache|collision/i.test(`${reason}${finding.cardId}`)) return "cache_collision";
  if (/englesk|english/i.test(reason)) return "en_remnant";
  if (/ekav|ijekav/i.test(reason)) return "ekavism";
  if (/gramat|padež|rod|infinitiv|capital/i.test(reason)) return "grammar";
  if (/comparison|usporedba/i.test(reason) || field.includes("comparison")) return "semantic";
  if (field.startsWith("study.")) return "semantic";
  return "semantic";
}

function groupForLuna(findings) {
  const groups = { semantics: [], grammar: [], study: [], other: [] };
  for (const f of findings) {
    const p = inferPattern(f);
    if (p === "grammar") groups.grammar.push(f);
    else if (f.field?.startsWith("study.")) groups.study.push(f);
    else groups.semantics.push(f);
  }
  return groups;
}

module.exports = {
  EKAVISM_REPLACEMENTS,
  applyEkavismFix,
  classifyDeterministic,
  inferPattern,
  groupForLuna,
  isEkavismFix,
  isEnglishRemnant,
};
