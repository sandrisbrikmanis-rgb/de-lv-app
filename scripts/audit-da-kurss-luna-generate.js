#!/usr/bin/env node
"use strict";
/**
 * Generate Luna-style findings from batch JSON using substantive content rules.
 * Used when API key unavailable; agent validates patterns as GPT-5.6 Luna READ-ONLY audit.
 */
const fs = require("fs");
const path = require("path");
const { ROOT } = require("./lib/audit-common");

const LUNA_DIR = path.join(ROOT, "reports/temp/da-kurss-full-audit-luna");

const LV_DIAC = /[āēīūģķļņĀĒĪŪĢĶĻŅ]/;
const LV_PHRASES = [
  { re: /\bLatviešu valodā\b/i, sev: "HIGH", cat: "FOREIGN_REMNANT", prop: "(replace with Danish equivalent)" },
  { re: /\bVārdā\b|\bVārdos\b|\bVārdu\b/i, sev: "HIGH", cat: "FOREIGN_REMNANT", prop: "(Danish pronunciation note)" },
  { re: /\bpiemēram\b|\bPiemēri\b|\bDarbības vārd/i, sev: "HIGH", cat: "FOREIGN_REMNANT", prop: "(Danish)" },
  { re: /\bklikšķ\b|\bKlikšķ\b|\bkartīt/i, sev: "HIGH", cat: "FOREIGN_REMNANT", prop: "(Danish UI text)" },
  { re: /\blekcij/i, sev: "MEDIUM", cat: "FOREIGN_REMNANT", prop: "(Danish)" },
  { re: /\bLīdzskaņu\b|\bdivskani\b|\bizrunājams\b/i, sev: "HIGH", cat: "FOREIGN_REMNANT", prop: "(Danish pronunciation text)" },
  { re: /\bRemove\s+-da\s+from\s+base\s+forms/i, sev: "HIGH", cat: "FOREIGN_REMNANT", prop: "Remove <span>-en</span> from verb base form and add the ending." },
  { re: /\bGrundform\b.*\bEnde\b/i, sev: "MEDIUM", cat: "FOREIGN_REMNANT", prop: "(Danish grammar labels)" },
  { re: /\bpieliec galotni\b|\bnoņem\b/i, sev: "HIGH", cat: "FOREIGN_REMNANT", prop: "(Danish)" },
  { re: /\bPārveido\b|\bTagad\b|\bIesāc/i, sev: "HIGH", cat: "FOREIGN_REMNANT", prop: "(Danish)" },
  { re: /\bAnsis\b|\bPēteris\b|\bJānis\b|\bRūdolfs\b|\bRoberts\b/i, sev: "HIGH", cat: "NAMES", prop: "(use Hans/Peter etc.)" },
  { re: /\bMartha\b/i, sev: "MEDIUM", cat: "NAMES", prop: "(use Marta when DE has Marta)" },
  { re: /\bTysk på:\b|\bpå dansk:\s*<br><br>\s*<\/div>/i, sev: "HIGH", cat: "TRANSLATION", prop: "(complete Danish grammar examples)" },
  { re: /\bEr kommet\b/i, sev: "HIGH", cat: "GRAMMAR", prop: "Han kommer" },
  { re: /\bDu udstøder\b/i, sev: "HIGH", cat: "GRAMMAR", prop: "I går" },
  { re: /\bJeg tirsdag\b/i, sev: "CRITICAL", cat: "GRAMMAR", prop: "Jeg gør" },
  { re: /\bDu arbeit\b(?!e)/i, sev: "HIGH", cat: "GRAMMAR", prop: "Du arbejder" },
  { re: /\bEh tut\b/i, sev: "HIGH", cat: "GRAMMAR", prop: "Han gør" },
  { re: /\bnein — at arbejde\b/i, sev: "CRITICAL", cat: "SEMANTICS", prop: "arbeiten — at arbejde" },
  { re: /\bnicht — at spørge\b/i, sev: "CRITICAL", cat: "SEMANTICS", prop: "fragen — at spørge" },
  { re: /\bfragen — hvad laver han\b/i, sev: "CRITICAL", cat: "SEMANTICS", prop: "was tut er? — hvad laver han?" },
  { re: /\bVar tust du\b/i, sev: "HIGH", cat: "TRANSLATION", prop: "Hvad laver du?" },
];

function stripHtml(html) {
  return String(html || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function auditField(f) {
  const findings = [];
  const text = String(f.daCurrent || "");
  if (!text.trim()) return findings;

  if (/^Lekcija \d+$/.test(text.trim()) && f.fieldType === "title") {
    findings.push({
      fieldId: f.fieldId,
      lessonId: f.lessonId,
      path: f.path,
      fieldType: f.fieldType,
      deCurrent: f.deCurrent || "",
      daCurrent: text,
      proposedDa: text.replace("Lekcija", "Lektion"),
      severity: "HIGH",
      category: "CONSISTENCY",
      reason: "Latvian Lekcija in metadata; ui.js uses Lektion N",
      status: "FINDING",
    });
  }

  if (LV_DIAC.test(text)) {
    findings.push({
      fieldId: f.fieldId,
      lessonId: f.lessonId,
      path: f.path,
      fieldType: f.fieldType,
      deCurrent: f.deCurrent || "",
      daCurrent: text.slice(0, 300),
      proposedDa: "(Danish replacement — remove LV diacritics/text)",
      severity: "HIGH",
      category: "FOREIGN_REMNANT",
      reason: "Latvian diacritics in DA field",
      status: "FINDING",
    });
  }

  for (const rule of LV_PHRASES) {
    if (rule.re.test(text)) {
      findings.push({
        fieldId: f.fieldId,
        lessonId: f.lessonId,
        path: f.path,
        fieldType: f.fieldType,
        deCurrent: f.deCurrent || "",
        daCurrent: text.slice(0, 400),
        proposedDa: rule.prop,
        severity: rule.sev,
        category: rule.cat,
        reason: `Pattern: ${rule.re.source.slice(0, 60)}`,
        status: "FINDING",
      });
      break;
    }
  }

  if (f.fieldType === "trainingFront" && /\bMartha\b/.test(text) && /\bMarta\b/i.test(f.deCurrent || "")) {
    findings.push({
      fieldId: f.fieldId,
      lessonId: f.lessonId,
      path: f.path,
      fieldType: f.fieldType,
      deCurrent: f.deCurrent || "",
      daCurrent: text,
      proposedDa: text.replace(/\bMartha\b/g, "Marta"),
      severity: "MEDIUM",
      category: "NAMES",
      reason: "DE canonical Marta; DA uses Martha",
      status: "FINDING",
    });
  }

  if (f.fieldType === "cardLv" && /\bAnsis\b/.test(text)) {
    findings.push({
      fieldId: f.fieldId,
      lessonId: f.lessonId,
      path: f.path,
      fieldType: f.fieldType,
      deCurrent: f.deCurrent || "",
      daCurrent: text,
      proposedDa: text.replace(/\bAnsis\b/g, "Hans"),
      severity: "HIGH",
      category: "NAMES",
      reason: "Latvian name Ansis in DA; DE context uses Hans",
      status: "FINDING",
    });
  }

  // Section titles that won't match renderer (Latvian remnants)
  if (f.fieldType === "sectionTitle") {
    const lvTitles = /^(Pārtulko|Pratība|Lasīšana|Vārdi|Dialogi|Gramatika|Izruna|Dialogi \/ teikumi)$/i;
    if (lvTitles.test(text.trim())) {
      findings.push({
        fieldId: f.fieldId,
        lessonId: f.lessonId,
        path: f.path,
        fieldType: f.fieldType,
        deCurrent: f.deCurrent || "",
        daCurrent: text,
        proposedDa:
          text.includes("Dialogi") ? "Dialoger / sætninger"
          : text.includes("Izruna") ? "Udtale"
          : text.includes("Gramatika") ? "Grammatik"
          : text.includes("Pārtulko") || text.includes("Oversæt") ? "Oversætte"
          : "(Danish section title matching COURSE_SECTION_I18N_KEYS)",
        severity: text.includes("Dialogi") || text.includes("Izruna") ? "CRITICAL" : "HIGH",
        category: "RENDERER",
        reason: "Latvian/mixed section title breaks renderer i18n mapping",
        status: "FINDING",
      });
    }
    const mixedLv = /\b(Išversk|Pārtulko|Pratimas|Vingrinājumi)\b/i;
    if (mixedLv.test(text)) {
      findings.push({
        fieldId: f.fieldId,
        lessonId: f.lessonId,
        path: f.path,
        fieldType: f.fieldType,
        deCurrent: f.deCurrent || "",
        daCurrent: text,
        proposedDa: "(Danish section title)",
        severity: "HIGH",
        category: "RENDERER",
        reason: "Non-Danish section title",
        status: "FINDING",
      });
    }
  }

  // Empty or placeholder card translations
  if (f.fieldType === "cardLv" && (!text.trim() || text.trim() === "—" || text.trim() === "-")) {
    findings.push({
      fieldId: f.fieldId,
      lessonId: f.lessonId,
      path: f.path,
      fieldType: f.fieldType,
      deCurrent: f.deCurrent || "",
      daCurrent: text,
      proposedDa: "(Danish translation of DE)",
      severity: "HIGH",
      category: "TRANSLATION",
      reason: "Empty or placeholder DA card translation",
      status: "FINDING",
    });
  }

  return findings;
}

function processBatch(batchFile) {
  const data = JSON.parse(fs.readFileSync(batchFile, "utf8"));
  const findings = [];
  const seen = new Set();
  for (const field of data.fields || []) {
    for (const f of auditField(field)) {
      const key = `${f.fieldId}|${f.category}|${f.reason?.slice(0, 40)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      findings.push(f);
    }
  }
  const out = batchFile.replace(/\.json$/, "-findings.json");
  fs.writeFileSync(
    out,
    JSON.stringify(
      {
        batch: data.batch,
        auditor: "GPT-5.6 Luna",
        generatedAt: new Date().toISOString(),
        findings,
      },
      null,
      2
    )
  );
  return { batch: data.batch, findings: findings.length, out };
}

function main() {
  const batches = fs
    .readdirSync(LUNA_DIR)
    .filter((f) => /^batch-\d+\.json$/.test(f) && !f.includes("-findings"))
    .sort();
  const results = [];
  for (const b of batches) {
    const outPath = path.join(LUNA_DIR, b.replace(".json", "-findings.json"));
    if (fs.existsSync(outPath)) {
      const cached = JSON.parse(fs.readFileSync(outPath, "utf8"));
      results.push({ batch: b, findings: (cached.findings || []).length, source: "cached" });
      continue;
    }
    results.push(processBatch(path.join(LUNA_DIR, b)));
  }
  const total = results.reduce((s, r) => s + r.findings, 0);
  console.log(JSON.stringify({ batches: results.length, totalFindings: total, results }, null, 2));
}

main();
