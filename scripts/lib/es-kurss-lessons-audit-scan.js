#!/usr/bin/env node
"use strict";
/** Shared deterministic scan helpers for ES Kurss Lessons audit. */
const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(piemēram|teikuma|priekšmets|darbības|vārd|Vārd|Latviešu|daudzskait|sieviešu|vīriešu|klikšķ|kartīt|izrunā|darbības|lietvār|pavēles|teikum|Lekcija|lekcij|Iesāc|Iesācējs|Iesācējiem|sieviešu|vīriešu|kārta|vīriešu|sieviešu)\b/i;
const LV_NAMES = /\b(Pēteris|Pētera|Jānis|Jāņa|Rūdolfs|Roberts|Ansis|Ansi)\b/;
const EN_PATTERNS =
  /\b(TODO|FIXME|PLACEHOLDER|Translation:|instead of|you are|meaning:|Click here|Lesson \d+| — go\b| — not\b| — quiet\b| — many\b)\b/i;
const ARTIFACT = /\b(LABOT|PENDING|NEEDS_SOURCE_REVIEW|FALSE_POSITIVE|NELABOT|PĀRSKATĪT)\b/i;
const PLACEHOLDER = /(\bTODO\b|\bTBD\b|^\.\.\.$|\(Context-specific|\(Natural Spanish)/i;
const ZERO_WIDTH = /[\u200B-\u200D\uFEFF]|​​/;
const MULTI_MEANING = /[•;/](?!\s*(?:der|die|das|ein|eine|und|oder|ich|du|er|sie|wir|ihr)\b)/;
const ARTICLE_EN = /\b(el|la|los|las|un|una)\s+article\b|\barticle\s+(definido|indefinido|dativo|acusativo|genitivo|plural)\b|\bEl article\b|\bel article\b/i;

function classifyForeign(text) {
  if (typeof text !== "string" || !text.trim()) return [];
  const reasons = [];
  if (LV_DIAC.test(text)) reasons.push("LV_DIAC");
  if (LV_WORDS.test(text)) reasons.push("LV_WORD");
  if (LV_NAMES.test(text)) reasons.push("LV_NAME");
  if (EN_PATTERNS.test(text)) reasons.push("EN");
  if (ARTIFACT.test(text)) reasons.push("OWNER_ARTIFACT");
  if (PLACEHOLDER.test(text)) reasons.push("PLACEHOLDER");
  if (ZERO_WIDTH.test(text)) reasons.push("ZERO_WIDTH");
  return reasons;
}

function isDeOnlyContext(text, deContext) {
  const t = String(text || "").trim();
  if (!t) return true;
  if (/^[\s"„"'«»\-–—:;,.!?0-9A-Za-zÄÖÜäöüß]+$/.test(t.replace(/<[^>]+>/g, " "))) {
    if (/^(ich|du|er|sie|wir|ihr|der |die |das |ein |eine?n? |Sie |Das |Der |Die |Was |Wen |Wer |Nein|Ja,)/i.test(t)) {
      return true;
    }
    if (deContext && t === deContext) return true;
  }
  return false;
}

function scanDeterministic(fields) {
  const findings = [];
  let fid = 0;
  function add(severity, f, category, problem, detail = {}) {
    fid++;
    findings.push({
      id: `ES-KURSS-LESSONS-DET-${String(fid).padStart(4, "0")}`,
      severity,
      lessonId: f.lessonId,
      lessonNumber: f.lessonNumber,
      path: f.path,
      field: f.field,
      fieldType: f.fieldType,
      category,
      problem,
      deContext: detail.deContext || f.deContext || "",
      esCurrent: detail.esCurrent || f.esCurrent || "",
      proposedEs: detail.proposedEs || "",
      reason: detail.reason || problem,
      source: "deterministic",
      cardId: f.id,
    });
  }
  for (const f of fields) {
    const text = String(f.esCurrent || "");
    if (!text.trim()) {
      if (f.fieldType !== "exerciseConjugation") {
        add("MEDIUM", f, "MISSING_CONTENT", "Tukšs learner-facing lauks");
      }
      continue;
    }
    if (isDeOnlyContext(text, f.deContext)) continue;
    const reasons = classifyForeign(text);
    if (reasons.length) {
      const sev = reasons.includes("LV_NAME") || reasons.includes("LV_DIAC") || reasons.includes("LV_WORD") ? "HIGH" : "MEDIUM";
      add(sev, f, "FOREIGN_REMNANT", `Foreign/script: ${reasons.join(", ")}`, {
        proposedEs: "(OWNER: Spanish replacement per DE/LV meaning)",
        reason: `Detected: ${reasons.join(", ")}`,
      });
    }
    if (ARTICLE_EN.test(text)) {
      add("HIGH", f, "ES_TERMINOLOGY", "English 'article' in Spanish grammar text (should be 'artículo')", {
        proposedEs: text.replace(/\barticle\b/gi, (m) => (m[0] === "A" ? "Artículo" : "artículo")),
        reason: "Grammar term 'article' should be Spanish 'artículo'",
      });
    }
    if (MULTI_MEANING.test(text) && !/der|die|das|und|oder/i.test(text)) {
      if (/[•;/]/.test(text) && text.split(/[•;/]/).filter((p) => p.trim().length > 2).length > 1) {
        add("MEDIUM", f, "MULTIPLE_TRANSLATIONS", "Vairāku nozīmju kandidāti vienā laukā (• / ;)", {
          proposedEs: "(OWNER_DECISION_REQUIRED: choose single main translation)",
          reason: "MASTER §1.1: MAIN_TRANSLATION_COUNT = 1",
        });
      }
    }
    if (/^Lekcija \d+$/i.test(text.trim()) && /title|uiTitle/i.test(f.fieldType)) {
      add("HIGH", f, "CONSISTENCY", "Latvian lesson title in ES metadata", {
        proposedEs: text.replace(/Lekcija/i, "Lección"),
        reason: "ui.js uses Lección N; metadata still has Latvian Lekcija N",
      });
    }
    if (/\bMartha\b/.test(text) && /\bMarta\b/i.test(f.deContext || "")) {
      add("MEDIUM", f, "NAMES", "Martha in ES where DE canonical is Marta", {
        proposedEs: text.replace(/\bMartha\b/g, "Marta"),
        reason: "DE canonical name Marta",
      });
    }
  }
  return findings;
}

function structureFindings(structIssues) {
  return structIssues.map((issue) => {
    const lessonNum = String(issue.lessonId || "").replace(/^lesson/i, "") || "00";
    return {
      id: `ES-KURSS-LESSONS-STR-L${lessonNum.padStart(2, "0")}`,
    severity: issue.severity,
    lessonId: issue.lessonId,
    path: issue.path,
    fieldType: "structure",
    category: "STRUCTURE",
    problem: issue.message,
    esCurrent: issue.esShape || "",
    proposedEs: "(align with LV MASTER structure)",
    reason: issue.message,
    source: "structure",
    };
  });
}

function countBySev(findings) {
  const bySev = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0 };
  for (const f of findings) {
    const s = f.severity || "MEDIUM";
    if (bySev[s] !== undefined) bySev[s]++;
    else bySev.MEDIUM++;
  }
  return bySev;
}

function countByCategory(findings) {
  const out = {};
  for (const f of findings) {
    const c = f.category || "UNKNOWN";
    out[c] = (out[c] || 0) + 1;
  }
  return out;
}

module.exports = {
  scanDeterministic,
  structureFindings,
  countBySev,
  countByCategory,
  classifyForeign,
  isDeOnlyContext,
};
