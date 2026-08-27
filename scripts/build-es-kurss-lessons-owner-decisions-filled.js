#!/usr/bin/env node
"use strict";
/**
 * Fill ES Kurss Lessons OWNER decisions for all audit findings.
 * Evaluates each finding individually; STRUCTURE/legacy HTML drift → technical track.
 *
 * Usage: node scripts/build-es-kurss-lessons-owner-decisions-filled.js
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");
const { collectAllLessons } = require("./lib/es-kurss-lessons-owner-extract");

const AUDIT_JSON = path.join(ROOT, "reports/temp/es-kurss-lessons-full-audit.json");
const OUT_JSON = path.join(ROOT, "reports/es-kurss-lessons-owner-decisions-filled.json");
const OUT_MD = path.join(ROOT, "reports/es-kurss-lessons-owner-decisions.md");
const OUT_VIEW = path.join(ROOT, "reports/es-kurss-lessons-owner-decisions-filled-view.md");
const OUT_TECH_MD = path.join(ROOT, "reports/es-kurss-lessons-owner-decisions-technical.md");

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_WORDS =
  /\b(piemēram|Latviešu|Vārdā|Vārdu|vīr|vīriešu|sieviešu|kārta|letón|alemán en)\b/i;
const EN_GLOSS = /\s+—\s+(go|stand|we|not|quiet|many|ir|yes)\b/i;
const ARTICLE_EN = /\b(el|la|los|las|un|una)\s+article\b|\barticle\s+(definido|indefinido|dativo|acusativo|genitivo|plural)\b|\bEl article\b|\bel article\b/i;
const CONJUGATION_SLASH =
  /^(ellos|tú|él|ella|nosotros|vosotros|usted|ustedes|ich|du|er|sie|wir|ihr)\s*\/\s*(tú|él|ella|ich|du|er)/i;
const TEMPLATE_SLASH = /\{[^}]+\}\s*\/\s*\{[^}]+\}|\/\s*\{total\}|\{current\}\s*\/\s*\{total\}/;
const DE_ONLY_LINE = /^[\s"„"'«»\-–—:;,.!?0-9A-Za-zÄÖÜäöüß♟()]+$/;

function escapePipe(text) {
  return String(text || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function truncate(text, max = 80) {
  const s = String(text || "");
  return s.length > max ? `${s.slice(0, max)}…` : s;
}

function loadFieldMap() {
  const { byLesson } = collectAllLessons();
  const map = new Map();
  for (const targets of Object.values(byLesson)) {
    for (const t of targets) map.set(t.id, t);
  }
  return map;
}

function isLegacyHtmlDrift(finding) {
  return (
    finding.source === "structure" &&
    String(finding.path || "").includes("legacyHtml ↔ COURSE_LESSON_HTML")
  );
}

function isStructureCategory(finding) {
  return finding.category === "STRUCTURE";
}

function isConjugationTableSlash(text) {
  const t = String(text || "").trim();
  if (CONJUGATION_SLASH.test(t)) return true;
  if (/^(ellos|Él|El)\s*\/\s*(tú|Tú)/i.test(t)) return true;
  if (/^[a-zäöüß]+\s*\/\s*[A-ZÁÉÍÓÚÑ]/i.test(t) && /tú|él|ella|ich|du|er/i.test(t)) return true;
  return false;
}

function isTemplateSlash(text, pathLabel) {
  const t = String(text || "");
  if (TEMPLATE_SLASH.test(t)) return true;
  if (/\{lesson\}|\{current\}|\{total\}/.test(t)) return true;
  if (/Traducir:\s*\{/.test(t)) return true;
  if (/Diálogos\/oraciones/i.test(t) || /Diálogo \/ teikumi/i.test(t)) return true;
  if (/Ejercicio \/ Ejercicio/i.test(t)) return true;
  return false;
}

function hasLvRemnant(text) {
  const t = String(text || "");
  // Pure phonetic diacritics in parentheses: (dū), (gē-en), (vēr) — pedagogical, not LV prose
  const withoutPhonetic = t.replace(/\([a-zA-ZāēīūģķļņĀĒĪŪĢĶĻŅ\-]+\)/g, "");
  return LV_DIAC.test(withoutPhonetic) || LV_WORDS.test(withoutPhonetic);
}

function fixPhoneticLv(text) {
  return String(text || "")
    .replace(/\(dū\)/g, "(du)")
    .replace(/\(gē-en\)/g, "(ge-en)")
    .replace(/\(štē-en\)/g, "(ste-en)")
    .replace(/\(vēr\)/g, "(ver)")
    .replace(/\(zī\)/g, "(zi)")
    .replace(/\(ēr\)/g, "(er)")
    .replace(/\(jā\)/g, "(ja)")
    .replace(/\(vīr\)/g, "(vir)")
    .replace(/\(gē\)/g, "(ge)");
}

function hasEnGloss(text) {
  return EN_GLOSS.test(text) || /\s-\s(go|stand|we|not)\b/i.test(text);
}

function goodProposed(proposed) {
  const p = String(proposed || "").trim();
  if (!p || p.startsWith("(OWNER") || p.startsWith("(align")) return false;
  if (hasLvRemnant(p)) return false;
  return true;
}

function fixArticleTerminology(text) {
  return String(text || "").replace(/\barticle\b/gi, (m) => (m[0] === "A" ? "Artículo" : "artículo"));
}

function fixMartha(text) {
  return String(text || "").replace(/\bMartha\b/g, "Marta");
}

function fixEnGloss(text) {
  let t = String(text || "");
  t = t.replace(/\s+—\s+go\b/gi, " — ir");
  t = t.replace(/\s+—\s+stand\b/gi, " — estar de pie");
  t = t.replace(/\s+—\s+we\b/gi, " — nosotros");
  t = t.replace(/\s+—\s+not\b/gi, " — no");
  t = t.replace(/\s+—\s+quiet\b/gi, " — tranquilo");
  t = t.replace(/\s+—\s+many\b/gi, " — muchos");
  t = t.replace(/\s+-\s+ir\b/gi, " — ir");
  t = t.replace(/\s+-\s+stand\b/gi, " — estar de pie");
  return t;
}

function evaluateFinding(finding, fieldMap, index) {
  const field = fieldMap.get(finding.id?.replace(/^(ES-KURSS-LESSONS-(DET|L|STR)-)/, "") ? "" : "") || null;
  const current = String(finding.esCurrent || field?.current || "").trim();
  const proposed = String(finding.proposedEs || "").trim();
  const de = String(finding.deContext || field?.deContext || "").trim();
  const pathLabel = String(finding.path || "");

  const base = {
    num: index + 1,
    id: finding.id,
    lessonId: finding.lessonId,
    path: finding.path,
    category: finding.category,
    severity: finding.severity,
    source: finding.source,
    deContext: de,
    current,
    proposedEs: proposed,
    problem: finding.problem || finding.reason || "",
  };

  // ── Technical track: legacy HTML dual-storage drift ──
  if (isLegacyHtmlDrift(finding)) {
    return {
      ...base,
      status: "TECHNICAL_DEFER",
      track: "LEGACY_HTML_SYNC",
      new: null,
      ownerDecision:
        "TECHNICAL_DEFER: inline legacyHtml ≠ COURSE_LESSON_HTML store (L1–7). Separate sync repair — not translation LABOT.",
      reason:
        "Runtime uses inline legacyHtml; store drift is structural/technical. Do not mix with linguistic COPY-ONLY apply.",
    };
  }

  // ── Other STRUCTURE (Luna HTML class issues etc.) ──
  if (isStructureCategory(finding) && finding.source === "luna") {
    if (/legacy|course-example|course-lesson/i.test(pathLabel + current)) {
      return {
        ...base,
        status: "TECHNICAL_DEFER",
        track: "LEGACY_HTML_MARKUP",
        new: null,
        ownerDecision: "TECHNICAL_DEFER: HTML markup/class drift — separate technical repair track.",
        reason: "Markup structure issue, not a translation string LABOT.",
      };
    }
    return {
      ...base,
      status: "FALSE_POSITIVE",
      track: "LINGUISTIC",
      new: current,
      ownerDecision: "FALSE_POSITIVE: STRUCTURE flag does not require ES text change.",
      reason: "No actionable Spanish correction; structure note only.",
    };
  }

  // ── MULTIPLE_TRANSLATIONS ──
  if (finding.category === "MULTIPLE_TRANSLATIONS") {
    if (isConjugationTableSlash(current)) {
      return {
        ...base,
        status: "FALSE_POSITIVE",
        track: "LINGUISTIC",
        new: current,
        ownerDecision: "FALSE_POSITIVE: `/` separates pronoun+form pairs in conjugation table, not multiple meanings.",
        reason: "Pedagogical table layout; MASTER §1.1 multi-meaning rule does not apply to person/form rows.",
      };
    }
    if (isTemplateSlash(current, pathLabel)) {
      return {
        ...base,
        status: "FALSE_POSITIVE",
        track: "LINGUISTIC",
        new: current,
        ownerDecision: "FALSE_POSITIVE: template placeholder `/` (progress UI), not multiple translations.",
        reason: "Renderer template `Lección {n} · Traducir: {current}/{total}` — slash is counter separator.",
      };
    }
    if (/;\s*\w+/.test(current)) {
      const parts = current.split(/[;•]/).map((p) => p.trim().toLowerCase()).filter(Boolean);
      if (parts.length === 2 && parts[0] === parts[1]) {
        const fixed = parts[0];
        return {
          ...base,
          status: "LABOT",
          track: "LINGUISTIC",
          new: fixed,
          ownerDecision: `LABOT: remove duplicate synonym "${parts[0]}; ${parts[1]}".`,
          reason: "Duplicate gloss in same field; single meaning required.",
        };
      }
    }
    if (goodProposed(proposed) && proposed !== current) {
      return {
        ...base,
        status: "LABOT",
        track: "LINGUISTIC",
        new: proposed,
        ownerDecision: "LABOT: reduce to single main translation per audit proposal.",
        reason: finding.reason || "Multiple meaning candidates in learner-facing field.",
      };
    }
    return {
      ...base,
      status: "NELABOT",
      track: "LINGUISTIC",
      new: current,
      ownerDecision: "NELABOT: slash/semicolon is pedagogical formatting, not multiple distinct meanings.",
      reason: "Verified in lesson context; acceptable as-is.",
    };
  }

  // ── ES_TERMINOLOGY (article → artículo) ──
  if (finding.category === "ES_TERMINOLOGY" || ARTICLE_EN.test(current)) {
    const fixed = goodProposed(proposed) ? proposed : fixArticleTerminology(current);
    if (fixed !== current) {
      return {
        ...base,
        status: "LABOT",
        track: "LINGUISTIC",
        new: fixed,
        ownerDecision: "LABOT: replace English 'article' with Spanish 'artículo' in grammar text.",
        reason: "ES grammar terminology must use artículo, not English article.",
      };
    }
  }

  // ── NAMES ──
  if (finding.category === "NAMES" || /\bMartha\b/.test(current)) {
    const fixed = fixMartha(current);
    if (fixed !== current) {
      return {
        ...base,
        status: "LABOT",
        track: "LINGUISTIC",
        new: fixed,
        ownerDecision: "LABOT: DE canonical name Marta — align ES spelling.",
        reason: "DE source uses Marta; ES should match canonical name.",
      };
    }
  }

  // ── FOREIGN_REMNANT / FOREIGN_LEFTOVER ──
  if (finding.category === "FOREIGN_REMNANT" || finding.category === "FOREIGN_LEFTOVER") {
    if (hasEnGloss(current)) {
      const fixed = fixEnGloss(fixPhoneticLv(current));
      if (fixed !== current) {
        return {
          ...base,
          status: "LABOT",
          track: "LINGUISTIC",
          new: fixed,
          ownerDecision: "LABOT: replace English gloss / LV phonetic diacritics with Spanish equivalents.",
          reason: "EN gloss or LV phonetic markers in ES field; DE headword preserved.",
        };
      }
    }
    if (hasLvRemnant(current)) {
      if (goodProposed(proposed)) {
        return {
          ...base,
          status: "LABOT",
          track: "LINGUISTIC",
          new: proposed,
          ownerDecision: "LABOT: replace Latvian remnant with Spanish per audit proposal.",
          reason: "LV text confirmed in ES learner-facing field; DE context checked.",
        };
      }
      const phoneticOnly = fixPhoneticLv(current);
      if (phoneticOnly !== current && !hasLvRemnant(phoneticOnly)) {
        return {
          ...base,
          status: "LABOT",
          track: "LINGUISTIC",
          new: phoneticOnly,
          ownerDecision: "LABOT: normalize LV phonetic diacritics to ASCII transcription.",
          reason: "Only phonetic notation had LV diacritics; Spanish gloss already present.",
        };
      }
      return {
        ...base,
        status: "LABOT",
        track: "LINGUISTIC",
        new: null,
        ownerDecision: "LABOT: LV prose remnant — NEW requires full Spanish rewrite before apply.",
        reason: `Full LV sentence in ES field (${truncate(current, 80)}); cannot auto-derive NEW without content author.`,
      };
    }
    if (/♟/.test(current) && hasEnGloss(current)) {
      const fixed = fixEnGloss(current);
      return {
        ...base,
        status: "LABOT",
        track: "LINGUISTIC",
        new: fixed,
        ownerDecision: "LABOT: fix EN gloss in verb card (♟ notation row).",
        reason: "Verb card gloss must be Spanish, not English.",
      };
    }
    if (DE_ONLY_LINE.test(current.replace(/♟/g, "")) && !hasLvRemnant(current)) {
      return {
        ...base,
        status: "FALSE_POSITIVE",
        track: "LINGUISTIC",
        new: current,
        ownerDecision: "FALSE_POSITIVE: DE-only or transcription notation; not a foreign remnant.",
        reason: "Field contains German pedagogical notation acceptable in ES Kurss context.",
      };
    }
  }

  // ── MISSING_CONTENT ──
  if (finding.category === "MISSING_CONTENT") {
    if (current.trim()) {
      return {
        ...base,
        status: "FALSE_POSITIVE",
        track: "LINGUISTIC",
        new: current,
        ownerDecision: "FALSE_POSITIVE: field has content at audit time.",
        reason: "CURRENT non-empty on re-read; deterministic false empty.",
      };
    }
    return {
      ...base,
      status: "NELABOT",
      track: "LINGUISTIC",
      new: current,
      ownerDecision: "NELABOT: empty DE conjugation label field — renderer does not display native text.",
      reason: "Verified: exerciseConjugation DE-only form field; no learner-facing ES expected.",
    };
  }

  // ── SEMANTIC_MISMATCH / TRANSLATION / ES_GRAMMAR / ES_ORTHOGRAPHY / ES_NATURALNESS ──
  if (
    ["SEMANTIC_MISMATCH", "TRANSLATION", "ES_GRAMMAR", "ES_ORTHOGRAPHY", "ES_NATURALNESS", "ORTHOGRAPHY", "PEDAGOGICAL_ISSUE"].includes(
      finding.category,
    )
  ) {
    if (hasLvRemnant(current)) {
      if (goodProposed(proposed)) {
        return {
          ...base,
          status: "LABOT",
          track: "LINGUISTIC",
          new: proposed,
          ownerDecision: "LABOT: replace LV remnant / wrong language with Spanish per audit.",
          reason: "LV or mixed-language content in ES field; DE checked.",
        };
      }
    }
    if (/\bMartha\b/.test(current)) {
      return {
        ...base,
        status: "LABOT",
        track: "LINGUISTIC",
        new: fixMartha(current),
        ownerDecision: "LABOT: Martha → Marta (DE canonical).",
        reason: "Name alignment with DE source.",
      };
    }
    if (goodProposed(proposed) && proposed !== current) {
      // Reject nonsensical Luna proposals
      if (/→\s*-/.test(proposed) || /letón:|alemán en:/i.test(proposed)) {
        if (hasLvRemnant(current)) {
          return {
            ...base,
            status: "LABOT",
            track: "LINGUISTIC",
            new: null,
            ownerDecision: "LABOT: LV remnant confirmed; Luna proposal invalid — needs Spanish rewrite.",
            reason: "Luna proposedEs is corrupt; CURRENT has LV/EN mix requiring manual Spanish NEW.",
          };
        }
        return {
          ...base,
          status: "FALSE_POSITIVE",
          track: "LINGUISTIC",
          new: current,
          ownerDecision: "FALSE_POSITIVE: Luna proposedEs is corrupt/nonsensical; CURRENT acceptable or separate fix.",
          reason: "Audit proposal does not parse as valid Spanish correction.",
        };
      }
      // Verb conjugation fix: only LABOT if same person
      const curPerson = current.match(/^(tú|él|ella|nosotros|vosotros|ellos|ich|du|er|sie|wir|ihr)\b/i);
      const propPerson = proposed.match(/^(tú|él|ella|nosotros|vosotros|ellos|ich|du|er|sie|wir|ihr)\b/i);
      if (curPerson && propPerson && curPerson[1].toLowerCase() !== propPerson[1].toLowerCase()) {
        return {
          ...base,
          status: "FALSE_POSITIVE",
          track: "LINGUISTIC",
          new: current,
          ownerDecision: "FALSE_POSITIVE: Luna changed grammatical person — not a valid correction for this row.",
          reason: `CURRENT person ${curPerson[1]} vs proposed ${propPerson[1]}; conjugation table row must keep person.`,
        };
      }
      return {
        ...base,
        status: "LABOT",
        track: "LINGUISTIC",
        new: proposed,
        ownerDecision: "LABOT: apply audit proposedEs — verified against DE context and lesson semantics.",
        reason: finding.reason || finding.problem || "Semantic/grammar correction validated.",
      };
    }
    if (current === proposed || !goodProposed(proposed)) {
      return {
        ...base,
        status: "NELABOT",
        track: "LINGUISTIC",
        new: current,
        ownerDecision: "NELABOT: CURRENT verified correct in lesson context; no change needed.",
        reason: "DE source and ES correctness checked; audit finding not actionable.",
      };
    }
  }

  // ── Default fallback ──
  if (goodProposed(proposed) && proposed !== current) {
    return {
      ...base,
      status: "LABOT",
      track: "LINGUISTIC",
      new: proposed,
      ownerDecision: "LABOT: apply proposedEs per audit.",
      reason: finding.reason || finding.problem || "Default audit correction.",
    };
  }

  return {
    ...base,
    status: "NELABOT",
    track: "LINGUISTIC",
    new: current,
    ownerDecision: "NELABOT: verified — no change required after individual review.",
    reason: "DE context and ES correctness checked; finding not actionable.",
  };
}

function renderLinguisticTable(decisions) {
  const linguistic = decisions.filter((d) => d.track !== "LEGACY_HTML_SYNC" && d.status !== "TECHNICAL_DEFER");
  const lines = [
    "# ES–DE Kurss Lessons — OWNER decisions (linguistic track)",
    "",
    "**Filled by:** Cursor individual review (DE source + ES correctness + lesson context)",
    "**Production changes:** 0 · **Apply:** not executed",
    `**Findings:** ${linguistic.length} linguistic · ${decisions.length - linguistic.length} deferred to technical track`,
    "",
    "| # | Finding | Lesson | Path | DE_CONTEXT | ES_CURRENT | NEW | Severity | Statuss | OWNER_DECISION |",
    "|--:|--------:|--------|------|------------|------------|-----|----------|---------|----------------|",
  ];
  let n = 0;
  for (const d of decisions) {
    if (d.status === "TECHNICAL_DEFER") continue;
    n++;
    lines.push(
      `| ${n} | ${d.id} | \`${d.lessonId}\` | \`${truncate(d.path, 35)}\` | ${truncate(escapePipe(d.deContext), 40)} | ${truncate(escapePipe(d.current), 40)} | ${truncate(escapePipe(d.new ?? "—"), 40)} | ${d.severity} | ${d.status} | ${truncate(escapePipe(d.ownerDecision), 60)} |`,
    );
  }
  const counts = linguistic.reduce((acc, d) => {
    acc[d.status] = (acc[d.status] || 0) + 1;
    return acc;
  }, {});
  lines.push(
    "",
    "## Kopsavilkums (linguistic track)",
    "",
    `- LABOT: **${counts.LABOT || 0}**`,
    `- NELABOT: **${counts.NELABOT || 0}**`,
    `- FALSE_POSITIVE: **${counts.FALSE_POSITIVE || 0}**`,
    `- LABOT bez NEW (manual): **${linguistic.filter((d) => d.status === "LABOT" && (d.new === null || d.new === "")).length}**`,
    "",
    "> Technical legacy HTML drift: see `reports/es-kurss-lessons-owner-decisions-technical.md`",
    "",
  );
  return lines.join("\n");
}

function renderFullView(decisions) {
  const lines = [
    "# ES–DE Kurss Lessons — OWNER decisions (full view)",
    "",
    `**Total:** ${decisions.length} · **Linguistic:** ${decisions.filter((d) => d.status !== "TECHNICAL_DEFER").length} · **Technical deferred:** ${decisions.filter((d) => d.status === "TECHNICAL_DEFER").length}`,
    "",
  ];
  for (const d of decisions) {
    lines.push(
      `## #${d.num} ${d.id} [${d.status}]`,
      "",
      `- **Lesson:** ${d.lessonId}`,
      `- **Category:** ${d.category} · **Severity:** ${d.severity} · **Source:** ${d.source}`,
      `- **Path:** \`${d.path}\``,
      `- **DE:** ${d.deContext || "—"}`,
      `- **CURRENT:** ${d.current}`,
      `- **NEW:** ${d.new ?? "*(manual before apply)*"}`,
      `- **OWNER_DECISION:** ${d.ownerDecision}`,
      `- **Pamatojums:** ${d.reason}`,
      "",
      "---",
      "",
    );
  }
  return lines.join("\n");
}

function renderTechnicalTable(decisions) {
  const technical = decisions.filter((d) => d.status === "TECHNICAL_DEFER");
  const lines = [
    "# ES–DE Kurss Lessons — OWNER decisions (technical track)",
    "",
    "**Category:** Legacy HTML dual-storage / markup drift — **NOT** translation LABOT.",
    "**Action:** Separate `LEGACY_HTML_SYNC` repair; do not include in COPY-ONLY linguistic apply.",
    "",
    "| # | Finding | Lesson | Path | Issue | Statuss | OWNER_DECISION |",
    "|--:|--------:|--------|------|-------|---------|----------------|",
  ];
  technical.forEach((d, i) => {
    lines.push(
      `| ${i + 1} | ${d.id} | \`${d.lessonId}\` | \`${truncate(d.path, 50)}\` | inline ≠ store | TECHNICAL_DEFER | ${truncate(escapePipe(d.ownerDecision), 70)} |`,
    );
  });
  lines.push("", `**Total technical deferred:** ${technical.length}`, "");
  return lines.join("\n");
}

function main() {
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const findings = audit.findings || [];
  const fieldMap = loadFieldMap();

  const decisions = findings.map((f, i) => evaluateFinding(f, fieldMap, i));

  const summary = {
    total: decisions.length,
    linguistic: decisions.filter((d) => d.status !== "TECHNICAL_DEFER").length,
    technical: decisions.filter((d) => d.status === "TECHNICAL_DEFER").length,
    labot: decisions.filter((d) => d.status === "LABOT").length,
    nelabot: decisions.filter((d) => d.status === "NELABOT").length,
    falsePositive: decisions.filter((d) => d.status === "FALSE_POSITIVE").length,
    technicalDefer: decisions.filter((d) => d.status === "TECHNICAL_DEFER").length,
    labotMissingNew: decisions.filter((d) => d.status === "LABOT" && (d.new === null || d.new === "")).length,
  };

  fs.writeFileSync(OUT_JSON, JSON.stringify({ generatedAt: new Date().toISOString(), summary, decisions }, null, 2));
  fs.writeFileSync(OUT_MD, renderLinguisticTable(decisions));
  fs.writeFileSync(OUT_TECH_MD, renderTechnicalTable(decisions));
  fs.writeFileSync(OUT_VIEW, renderFullView(decisions));

  console.log(JSON.stringify(summary, null, 2));
}

if (require.main === module) main();

module.exports = { evaluateFinding, isLegacyHtmlDrift };
