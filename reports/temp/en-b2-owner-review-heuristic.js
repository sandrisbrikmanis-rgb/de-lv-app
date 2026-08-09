#!/usr/bin/env node
/**
 * Heuristic owner-review adjudication (independent rules, not Luna rubber-stamp).
 */
const LATVIAN_RE = /[āčēģīķļņšūžĀČĒĢĪĶĻŅŠŪŽ]/;
const LATVIAN_PHRASES = [
  /ko vieta/i,
  /programma sniedz/i,
  /bez sich/i,
  /nozīmē/i,
  /nozime/i,
  /galvenā doma/i,
  /sadalāms/i,
];

function hasForeignRemnant(text) {
  const t = String(text || "");
  if (LATVIAN_RE.test(t)) return true;
  return LATVIAN_PHRASES.some((re) => re.test(t));
}

function normalize(s) {
  return String(s || "")
    .toLowerCase()
    .replace(/emphasize/g, "emphasise")
    .replace(/organize/g, "organise")
    .replace(/favor/g, "favour")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function wordOverlap(a, b) {
  const wa = new Set(normalize(a).split(" ").filter((w) => w.length > 2));
  const wb = new Set(normalize(b).split(" ").filter((w) => w.length > 2));
  if (!wa.size || !wb.size) return 1;
  let inter = 0;
  for (const w of wa) if (wb.has(w)) inter++;
  return inter / Math.max(wa.size, wb.size);
}

function mapOriginalSeverity(sev) {
  const s = String(sev || "MEDIUM").toUpperCase();
  if (s === "WARNING") return "MEDIUM";
  return s;
}

function downgradeSeverity(sev, cap = "HIGH") {
  const order = ["CRITICAL", "HIGH", "MEDIUM", "LOW", "NONE"];
  const s = mapOriginalSeverity(sev);
  const si = order.indexOf(s);
  const ci = order.indexOf(cap);
  return order[Math.max(si, ci)] || "MEDIUM";
}

function isStyleOnly(reason, category) {
  const r = String(reason || "").toLowerCase();
  if (r.match(/wrong|incorrect|unrelated|does not mean|not synonymous|mislead|error|nonsens|foreign|latvian|remnant/))
    return false;
  return (
    r.match(
      /more natural|stylistic|preference|could also|alternative formulation|slightly more|clearer formulation|pedagogically similar|equally (valid|correct)|acceptable variant|british.*american|american.*british/,
    ) ||
    category === "STYLE_ONLY"
  );
}

function isDuplicateExampleIssue(reason, category) {
  const r = String(reason || "").toLowerCase();
  return (
    category === "STUDY" &&
    r.match(/duplicate|repeats?|repeated|varied wording|study practice|study value/)
  );
}

function isClearSemanticError(reason, category) {
  const r = String(reason || "").toLowerCase();
  const cat = String(category || "").toUpperCase();
  if (cat === "FOREIGN_REMNANT") return true;
  return (
    (cat === "SEMANTICS" || cat === "TRANSLATION" || cat === "COMPARISON") &&
    r.match(
      /unrelated|different word|does not mean|not synonymous|incorrect|wrong sense|no semantic|entirely different|opposite|not a normal meaning|not the relevant|misleading|erroneous|corrupt|nonsens/,
    )
  );
}

function isClearGrammarOrthography(reason, category) {
  const r = String(reason || "").toLowerCase();
  const cat = String(category || "").toUpperCase();
  if (cat === "ORTHOGRAPHY" || cat === "GRAMMAR") {
    return r.match(
      /capital|question mark|punctuation|spelling|grammar|pronoun i must|article|plural|tense|infinitive|missing/,
    );
  }
  return false;
}

function adjudicateHeuristic(finding, productionEn) {
  const currentEn = productionEn || finding.currentEn || "";
  const proposedEn = finding.proposedEn || "";
  const reason = finding.reason || "";
  const category = String(finding.category || "").toUpperCase();
  const originalSeverity = mapOriginalSeverity(finding.originalSeverity || finding.severity);

  if (hasForeignRemnant(currentEn)) {
    return {
      status: "FIX",
      validatedSeverity: originalSeverity === "LOW" ? "HIGH" : downgradeSeverity(originalSeverity, "HIGH"),
      recommendedEn: proposedEn || currentEn.replace(/Ko vieta\/programma sniedz:/i, "What the place/programme offers:"),
      reason: "Foreign-language remnant in EN learner field; must be English.",
      confidence: "high",
    };
  }

  if (isStyleOnly(reason, category)) {
    return {
      status: "KEEP",
      validatedSeverity: "NONE",
      recommendedEn: "",
      reason: "Current EN semantically correct; Luna proposal is stylistic preference only.",
      confidence: "high",
    };
  }

  if (normalize(currentEn) === normalize(proposedEn)) {
    return {
      status: "KEEP",
      validatedSeverity: "NONE",
      recommendedEn: "",
      reason: "Current EN already matches recommended wording (normalised).",
      confidence: "high",
    };
  }

  if (wordOverlap(currentEn, proposedEn) > 0.85 && !isClearSemanticError(reason, category)) {
    return {
      status: "KEEP",
      validatedSeverity: "NONE",
      recommendedEn: "",
      reason: "Current and proposed EN are near-equivalent; no material error.",
      confidence: "medium",
    };
  }

  if (isDuplicateExampleIssue(reason, category) && originalSeverity === "LOW") {
    return {
      status: "KEEP",
      validatedSeverity: "LOW",
      recommendedEn: "",
      reason: "Repeated study examples are acceptable for reinforcement; not a translation error.",
      confidence: "medium",
    };
  }

  if (category === "NATURALNESS" && originalSeverity === "LOW" && !isClearSemanticError(reason, category)) {
    return {
      status: "KEEP",
      validatedSeverity: "NONE",
      recommendedEn: "",
      reason: "Minor naturalness preference; current EN is grammatical and semantically adequate.",
      confidence: "medium",
    };
  }

  if (isClearSemanticError(reason, category)) {
    return {
      status: "FIX",
      validatedSeverity: originalSeverity,
      recommendedEn: proposedEn,
      reason: reason.slice(0, 160) || "Semantic mismatch with DE sense.",
      confidence: "high",
    };
  }

  if (isClearGrammarOrthography(reason, category)) {
    return {
      status: "FIX",
      validatedSeverity: originalSeverity === "HIGH" ? "MEDIUM" : originalSeverity,
      recommendedEn: proposedEn,
      reason: reason.slice(0, 160) || "Grammar/orthography correction needed.",
      confidence: "high",
    };
  }

  if (category === "GRAMMAR" || category === "ORTHOGRAPHY") {
    return {
      status: "FIX",
      validatedSeverity: downgradeSeverity(originalSeverity, "MEDIUM"),
      recommendedEn: proposedEn,
      reason: reason.slice(0, 160) || "Grammar/orthography issue confirmed.",
      confidence: "medium",
    };
  }

  if (category === "SEMANTICS" || category === "TRANSLATION") {
    const overlap = wordOverlap(currentEn, proposedEn);
    if (overlap < 0.45 || reason.match(/wrong|incorrect|not mean|unrelated/)) {
      return {
        status: "FIX",
        validatedSeverity: originalSeverity,
        recommendedEn: proposedEn,
        reason: reason.slice(0, 160) || "Translation does not match DE sense.",
        confidence: "medium",
      };
    }
    if (overlap > 0.55) {
      return {
        status: "KEEP",
        validatedSeverity: "NONE",
        recommendedEn: "",
        reason: "Synonymous or near-synonymous gloss; current EN acceptable for learners.",
        confidence: "medium",
      };
    }
    return {
      status: "NEEDS_OWNER_REVIEW",
      validatedSeverity: originalSeverity,
      recommendedEn: proposedEn,
      reason: "Multiple plausible EN glosses; owner should choose pedagogical standard.",
      confidence: "low",
      ownerQuestion: `Choose EN gloss for ${finding.de}: "${currentEn}" vs "${proposedEn}"`,
    };
  }

  if (category === "STUDY" && originalSeverity === "LOW") {
    return {
      status: "KEEP",
      validatedSeverity: "LOW",
      recommendedEn: "",
      reason: "Low-priority study wording preference; current EN pedagogically usable.",
      confidence: "medium",
    };
  }

  if (Number(finding.confidence) >= 0.98 && wordOverlap(currentEn, proposedEn) < 0.4) {
    return {
      status: "FIX",
      validatedSeverity: originalSeverity,
      recommendedEn: proposedEn,
      reason: reason.slice(0, 160) || "High-confidence Luna semantic mismatch validated.",
      confidence: "medium",
    };
  }

  return {
    status: "KEEP",
    validatedSeverity: "NONE",
    recommendedEn: "",
    reason: "No demonstrable error; Luna candidate treated as false positive.",
    confidence: "medium",
  };
}

module.exports = {
  adjudicateHeuristic,
  hasForeignRemnant,
  normalize,
  wordOverlap,
};
