/**
 * Merge Luna card findings + deterministic verdict pass; deduplicate repair candidates.
 */
const fs = require("fs");
const path = require("path");

function cardKey(id) {
  return String(id || "").toLowerCase();
}

function fieldKey(field) {
  return String(field || "").toLowerCase();
}

function textKey(text) {
  return String(text || "").slice(0, 80).toLowerCase().trim();
}

function normalizeMatchKey(f) {
  return `${cardKey(f.cardId || f["Card ID"])}|${fieldKey(f.field || f.Field)}|${textKey(f.currentEn || f["Current EN"])}`;
}

function lunaMatchesDeterministic(det, lunaF) {
  const sameCard = cardKey(det["Card ID"] || det.cardId) === cardKey(lunaF.cardId);
  if (!sameCard) return false;
  const detField = fieldKey(det.Field || det.field);
  const lunaField = fieldKey(lunaF.field);
  if (detField && lunaField) {
    if (detField === lunaField) return true;
    if (detField.includes(lunaField.split(".").pop()) || lunaField.includes(detField.split(".").pop())) {
      return true;
    }
  }
  const detText = textKey(det["Current EN"] || det.currentEn);
  const lunaText = textKey(lunaF.currentEn);
  if (detText && lunaText && (detText.includes(lunaText.slice(0, 40)) || lunaText.includes(detText.slice(0, 40)))) {
    return true;
  }
  return false;
}

function countSeverity(findings) {
  const severityCounts = { CRITICAL: 0, HIGH: 0, MEDIUM: 0, LOW: 0, WARNING: 0, "DE SOURCE ISSUE": 0 };
  for (const f of findings) {
    const sev = String(f.severity || f.Severity || "WARNING").toUpperCase();
    if (severityCounts[sev] !== undefined) severityCounts[sev]++;
    else severityCounts.WARNING++;
  }
  return severityCounts;
}

function finalizeEnB1LunaFindings(options) {
  const {
    lunaCardFindings = [],
    deterministicVerdicts = [],
    deterministicFindings = [],
    coverage,
    model,
    stats,
    generatedAt,
  } = options;

  const verdictByFindingId = new Map();
  for (const v of deterministicVerdicts) {
    if (v.findingId) verdictByFindingId.set(v.findingId, v);
    else if (v.cardId && v.field) verdictByFindingId.set(`${v.cardId}|${v.field}`, v);
  }

  const deterministicReview = [];
  let lunaConfirmed = 0;
  let lunaRejected = 0;
  let deSourceFromDet = 0;
  let ownerDecision = 0;

  for (let i = 0; i < deterministicFindings.length; i++) {
    const det = deterministicFindings[i];
    const findingId = `det-${i}`;
    const verdictRow =
      verdictByFindingId.get(findingId) ||
      verdictByFindingId.get(`${det["Card ID"]}|${det.Field}`) ||
      null;
    const lunaMatch = lunaCardFindings.find((lf) => lunaMatchesDeterministic(det, lf));

    let verdict =
      verdictRow?.lunaVerdict ||
      verdictRow?.verdict ||
      (lunaMatch?.severity === "DE SOURCE ISSUE" ? "DE_SOURCE_ISSUE" : null) ||
      (lunaMatch ? "CONFIRMED" : null) ||
      (String(det.Severity).toUpperCase() === "WARNING" ? "OWNER_DECISION" : "REJECTED_FALSE_POSITIVE");

    if (verdict === "CONFIRMED") lunaConfirmed++;
    else if (verdict === "REJECTED_FALSE_POSITIVE") lunaRejected++;
    else if (verdict === "DE_SOURCE_ISSUE") deSourceFromDet++;
    else if (verdict === "OWNER_DECISION") ownerDecision++;

    deterministicReview.push({
      findingId,
      cardId: det["Card ID"],
      cardType: det.layout || "study",
      field: det.Field,
      currentEn: det["Current EN"],
      deSource: det.DE,
      issueType: det.Type,
      severity: verdictRow?.severity || lunaMatch?.severity || det.Severity,
      lunaVerdict: verdict,
      explanation: verdictRow?.reason || lunaMatch?.reason || det.Reason,
      recommendedEn: verdictRow?.recommendedEn || lunaMatch?.recommendedEn || det["Recommended EN"],
      sourceClassification: "existing deterministic",
      sectionAccentsImpact: (det.Field || "").includes("sectionAccents"),
      sectionAccentsKind: verdictRow?.sectionAccentsKind || lunaMatch?.sectionAccentsKind || null,
      provenance: {
        deterministic: true,
        lunaCardMatch: Boolean(lunaMatch),
        lunaVerdictPass: Boolean(verdictRow),
      },
    });
  }

  const newLunaFindings = [];
  const seen = new Set(deterministicReview.map((d) => normalizeMatchKey(d)));

  for (const f of lunaCardFindings) {
    const dup = deterministicFindings.some((d) => lunaMatchesDeterministic(d, f));
    const key = normalizeMatchKey(f);
    if (dup || seen.has(key)) continue;
    seen.add(key);
    newLunaFindings.push({
      ...f,
      sourceClassification: "new Luna finding",
      lunaVerdict: f.severity === "DE SOURCE ISSUE" ? "DE_SOURCE_ISSUE" : "CONFIRMED",
    });
  }

  const repairCandidates = [];
  for (const d of deterministicReview) {
    if (d.lunaVerdict === "CONFIRMED" && d.severity !== "WARNING" && d.severity !== "DE SOURCE ISSUE") {
      repairCandidates.push({ ...d, dedupeKey: normalizeMatchKey(d) });
    }
  }
  for (const f of newLunaFindings) {
    if (f.severity !== "WARNING" && f.severity !== "DE SOURCE ISSUE") {
      repairCandidates.push({ ...f, dedupeKey: normalizeMatchKey(f) });
    }
  }

  const sectionAccentsTechnical = [...lunaCardFindings, ...deterministicReview]
    .filter((f) => f.sectionAccentsKind === "TECHNICAL" || f.sectionAccentsKind === "technical").length;
  const sectionAccentsPedagogical = [...lunaCardFindings, ...deterministicReview]
    .filter((f) => f.sectionAccentsKind === "PEDAGOGICAL" || f.sectionAccentsKind === "pedagogical").length;

  const allForSeverity = [
    ...repairCandidates,
    ...deterministicReview.filter((d) => d.lunaVerdict === "DE_SOURCE_ISSUE"),
    ...newLunaFindings.filter((f) => f.severity === "DE SOURCE ISSUE"),
  ];

  return {
    status: "EXECUTED",
    model,
    generatedAt,
    coverage,
    findings: lunaCardFindings,
    deterministicReview,
    newLunaFindings,
    repairCandidates,
    summary: {
      existingDeterministic: deterministicFindings.length,
      lunaConfirmed,
      lunaRejected,
      newLunaFindings: newLunaFindings.length,
      deduplicatedRepairCandidates: repairCandidates.length,
      deSourceIssues:
        deSourceFromDet +
        newLunaFindings.filter((f) => f.lunaVerdict === "DE_SOURCE_ISSUE").length +
        deterministicReview.filter((d) => d.lunaVerdict === "DE_SOURCE_ISSUE").length,
      ownerDecision,
      sectionAccentsTechnical,
      sectionAccentsPedagogical,
    },
    severityCounts: countSeverity(allForSeverity),
    stats,
  };
}

module.exports = {
  finalizeEnB1LunaFindings,
  lunaMatchesDeterministic,
  normalizeMatchKey,
};

if (require.main === module) {
  const ROOT = path.join(__dirname, "..", "..");
  const luna = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-luna-findings.json"), "utf8"));
  const det = JSON.parse(fs.readFileSync(path.join(ROOT, "reports/temp/en-b1-findings-consolidated.json"), "utf8"));
  const out = finalizeEnB1LunaFindings({
    lunaCardFindings: luna.findings || [],
    deterministicVerdicts: luna.deterministicVerdicts || [],
    deterministicFindings: det.findings || [],
    coverage: luna.coverage,
    model: luna.model,
    stats: luna.stats,
    generatedAt: luna.generatedAt,
  });
  fs.writeFileSync(path.join(ROOT, "reports/temp/en-b1-luna-findings.json"), JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out.summary, null, 2));
}
