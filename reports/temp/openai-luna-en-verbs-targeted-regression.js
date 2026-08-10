require("dotenv").config();

const {
  DEFAULT_MODEL,
  createStats,
  auditVerbsBatch,
  recordRetryReason,
  normalizeItem,
} = require("./openai-luna-en-verbs-full-audit");

const REGRESSION_SYSTEM_PROMPT = [
  "You are a TARGETED REGRESSION linguistic auditor for EN-DE VERBS after an OWNER repair cycle.",
  "British English learner-facing translations of German verb forms.",
  "Return ONLY valid JSON: { \"items\": [ ... ] }.",
  "For each form slot: if correct, return { verbId, field, status: \"PASS\" }.",
  "For real issues return finding objects with ALL of:",
  "verbId, field, severity, category, de, lvSource, currentEn, proposedEn, reason, regressionType, confidence.",
  "field: infinitiv | praesens | imperfektIndikativ | imperfektKonjunktiv | partizipVergangenheit.",
  "Severity: CRITICAL | HIGH | MEDIUM | LOW.",
  "Category: TRANSLATION | GRAMMAR | SEMANTICS | PARADIGM | NATURALNESS | FORMAT | FOREIGN_REMNANT.",
  "regressionType (exactly one): REPAIR_REGRESSION | REPAIR_INCOMPLETE | PARADIGM_INCONSISTENCY | OWNER_DECISION_RECHECK | DE_SOURCE_ISSUE.",
  "REPAIR_REGRESSION = repair introduced a new error.",
  "REPAIR_INCOMPLETE = original issue not fully fixed.",
  "PARADIGM_INCONSISTENCY = cross-form mismatch within same verb/meaning.",
  "OWNER_DECISION_RECHECK = OWNER intentionally kept imperfect EN; flag only if learner-facing problem persists.",
  "DE_SOURCE_ISSUE = German source is wrong; do NOT suggest EN conditional fix that mismatches visible DE.",
  "Audit FULL paradigm (all 5 forms) per verb even if only some slots were repaired.",
  "Each form payload includes repairedInCycle boolean — use for regression focus but check whole paradigm.",
  "OWNER semantic decisions (do NOT auto-FIX):",
  "- streichen: authoritative meaning paint/stripe — NOT cross out. If you suggest cross out → OWNER_DECISION_RECHECK.",
  "- hangen er hinge: EN he would hang — NEVER add himself (not reflexive).",
  "- wollen: infinitiv to want, participle wanted; conditional must stay conditional.",
  "Previously OWNER-kept DE_SOURCE_ISSUE slots (Konjunktiv II / source issues):",
  "haben, mahlen, mögen, müssen, pflegen, schallen, scheren, schnauben, sein, sieden, spleißen, stecken, stieben, stinken, weben, werden, wringen, kennen, bleichen, brennen, dürfen.",
  "Do NOT flag these as new FIX findings unless EN clearly mismatches DE in a learner-harmful way unrelated to Konjunktiv II source.",
  "KEEP slots (streichen praesens/imperfektIndikativ/partizipVergangenheit paint/stripe): OWNER_DECISION_RECHECK not FIX if only stylistic.",
  "Non-error verdicts (NOT findings): STYLE_ONLY | PROJECT_CONVENTION | NEEDS_REVIEW.",
  "Flag Latvian/foreign remnants in EN as FOREIGN_REMNANT HIGH.",
  "Check infinitiv to-prefix consistency, conditional would-forms, participle forms, / and • separator consistency.",
  "Do NOT suggest DE changes. proposedEn = exact replacement. reason under 140 chars.",
].join("\n");

const REGRESSION_INPUT_PREFIX =
  "TARGETED REGRESSION audit after OWNER repairs. Return JSON items array. PASS per form; findings only for real learner-facing issues.";

async function auditRegressionBatch(options) {
  return auditVerbsBatch({
    ...options,
    auditType: "verb_targeted_regression",
    instructions: REGRESSION_SYSTEM_PROMPT,
    inputPrefix: REGRESSION_INPUT_PREFIX,
  });
}

module.exports = {
  DEFAULT_MODEL,
  REGRESSION_SYSTEM_PROMPT,
  createStats,
  auditRegressionBatch,
  recordRetryReason,
  normalizeItem,
};
