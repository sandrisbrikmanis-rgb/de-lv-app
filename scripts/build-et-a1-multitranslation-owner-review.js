#!/usr/bin/env node
"use strict";
/**
 * ET A1 multi-translation OWNER review (MASTER v1.12) — analysis only, no repair.
 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execSync } = require("child_process");
const { ROOT } = require("./lib/audit-common");

const AUDIT_JSON = path.join(ROOT, "reports/temp/et-a1-full-audit.json");
const OUT_VIEW = path.join(ROOT, "reports/et-a1-multitranslation-owner-view.md");
const OUT_DEC = path.join(ROOT, "reports/et-a1-multitranslation-owner-decisions.md");

const GLOSS = {
  juures: "at/near; beside (location)",
  "pinna küljes": "on the surface/side of something",
  "serva ääres": "at the edge/border",
  "-st": "directional suffix: out of / from inside (e.g. väljast)",
  välja: "outside; out",
  peale: "onto; on top (direction)",
  otsa: "toward the end/tip; onto (colloquial)",
  "kuhu?": "where? (direction question — not a translation)",
  külaskäik: "visit (social visit to a person)",
  külastus: "visit (to a place/event/institution)",
  visiit: "visit (formal/short visit)",
  külastama: "to visit (place/person)",
  "külla minema": "to go visit (someone's home)",
  tooma: "to bring (toward speaker/addressee)",
  viima: "to take/carry (away or to someone)",
  "umbmäärane artikkel": "indefinite article (ein)",
  üks: "one; a (single item)",
  mingi: "some; a certain",
  jää: "ice (frozen water)",
  jäätis: "ice cream",
  kõigepealt: "first of all; at first (sequence)",
  alles: "only just; not until (emphasis on lateness/small amount)",
  midagi: "something (unknown thing)",
  veidi: "a little; somewhat",
  teid: "you (plural, accusative — direct object)",
  teile: "you (plural, dative — to/for you)",
  sõitma: "to drive/travel by vehicle",
  vedama: "to transport/drive someone",
  "ära viima": "to take away; drive off",
  leidma: "to find (physical object)",
  arvama: "to think; believe; find (opinion)",
  naine: "woman",
  abikaasa: "spouse (wife in context of meine Frau)",
  jaoks: "for (recipient/purpose)",
  eest: "for (exchange/thanks/reason)",
  terve: "whole; entire",
  kogu: "whole; all",
  täiesti: "completely; quite",
  lugu: "story; tale",
  ajalugu: "history",
  kohe: "immediately; right away (time)",
  ühesugune: "the same; identical",
  hoidma: "to hold; keep",
  peatama: "to stop (vehicle/action)",
  kuulma: "to hear (passive perception)",
  kuulama: "to listen (active attention)",
  kena: "pretty; nice-looking",
  nägus: "handsome; good-looking",
  teie: "your (plural); you (plural possessive)",
  temale: "to her (dative of sie)",
  "sees (-s)": "inside; in (location suffix -s)",
  "kus?": "where? (location question)",
  sees: "inside",
  sisse: "into; in (direction)",
  sissepoole: "inward; toward inside",
  nüüd: "now (present moment)",
  praegu: "currently; at the moment",
  "mitte ükski": "not a single one; none (countable)",
  "mitte mingi": "not any; no (general negation)",
  saama: "can; to get/be able (possibility)",
  oskama: "to know how; can (skill)",
  riik: "country (nation/state)",
  maa: "land; countryside",
  pikk: "long (spatial or temporal)",
  kauakestev: "long-lasting; of long duration",
  jätma: "to leave; let remain",
  laskma: "to let; allow",
  jooksma: "to run",
  töötama: "to work; to be running (machine)",
  asuma: "to lie/be located (position)",
  lamama: "to lie down (horizontal)",
  vasakul: "on the left (location)",
  vasak: "left (direction/side)",
  tegema: "to do; make (general action)",
  valmistama: "to prepare; make/cook",
  maalima: "to paint (art)",
  värvima: "to paint/color; dye",
  mees: "man",
  "-sse": "directional suffix toward (to a place)",
  pärast: "after (time/sequence)",
  muidugi: "of course; naturally (affirmation)",
  loomulik: "natural; of course (adjective)",
  võtma: "to take",
  "kätte võtma": "to pick up; take in hand",
  ainult: "only",
  üksnes: "only; solely (emphatic)",
  või: "or (choice)",
  ehk: "or; perhaps (softer)",
  sobima: "to fit; be suitable",
  "hästi sobima": "to fit well; suit well",
  proovima: "to try; attempt",
  maitsma: "to taste; try food",
  paremale: "to the right (direction)",
  parem: "right (side/direction)",
  lehekülg: "page (of book/document)",
  külg: "side; edge",
  end: "oneself (reflexive accusative)",
  endale: "to oneself (reflexive dative)",
  kindel: "safe; certain; sure (adjective)",
  kindlasti: "certainly; surely (adverb)",
  "nemad / nad": "they (plural pronoun variants)",
  kohal: "above; over (spatial)",
  kohta: "about; regarding",
  umbes: "about; approximately (quantity)",
  kell: "at (o'clock); around (time)",
  enne: "before (time)",
  ees: "in front of; before (place)",
  mis: "what (subject/question)",
  mida: "what (object/question)",
  "kui (tingimus)": "if/when (conditional)",
  "kui (aeg)": "when (temporal/recurring)",
  kuidas: "how (manner question)",
  kui: "how; as (comparison/degree)",
  juurde: "toward; to (direction)",
  "aeg (hetk / ajavahemik)": "time (moment or period)",
  "üks kord": "once; one time",
  kord: "time (occurrence); once (in narrative)",
};

function loadProduction() {
  const code = fs.readFileSync(path.join(ROOT, "data/et/a1.js"), "utf8");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(code, ctx);
  return ctx.window.A1_WORDS;
}

function getFieldValue(entry, field) {
  if (field === "lv") return String(entry.lv || "");
  if (field === "study.translation") return String(entry.study?.translation || "");
  if (field === "study.title") return String(entry.study?.title || "");
  return "";
}

function studyText(entry) {
  const exp = entry?.study?.explanation;
  if (Array.isArray(exp)) return exp.join(" ");
  return String(exp || "");
}

function gloss(candidate) {
  const c = candidate.trim();
  if (GLOSS[c]) return GLOSS[c];
  if (c.endsWith("?")) return "question word (direction/manner) — not a stable main translation";
  if (c.startsWith("-")) return "grammatical suffix / bound morpheme, not a standalone word";
  return "Estonian target form — see semantic analysis";
}

function suitability(de, candidate, candidates, entry, field) {
  const c = candidate.trim();
  const study = studyText(entry).toLowerCase();
  const isStudy = entry.study && field.startsWith("study.");
  const isOrdinary = field === "lv";

  if (c.endsWith("?")) {
    return "Not suitable as main translation — interrogative fragment; belongs in Study or grammar note, not front card.";
  }
  if (c.startsWith("-") && c.length <= 4) {
    return "Weak as standalone main translation — grammatical ending/suffix; consider full word (e.g. välja) or Study explanation.";
  }
  if (c.includes("/")) {
    return "Contains slash variants — pick one normalized form for main translation.";
  }

  const primaryHints = {
    an: ["juures", "pinna küljes"],
    aus: ["välja", "-st"],
    aufs: ["peale"],
    Besuch: ["külastus", "külaskäik"],
    besuchen: ["külastama"],
    bringen: ["tooma"],
    ein: ["üks"],
    Eis: ["jää", "jäätis"],
    erst: ["kõigepealt", "alles"],
    etwas: ["midagi", "veidi"],
    euch: ["teid", "teile"],
    fahren: ["sõitma"],
    finden: ["leidma"],
    Frau: ["naine"],
    für: ["jaoks", "eest"],
    ganz: ["terve", "kogu", "täiesti"],
    Geschichte: ["lugu", "ajalugu"],
    gleich: ["kohe", "ühesugune"],
    halten: ["hoidma", "peatama"],
    hören: ["kuulma", "kuulama"],
    hübsch: ["kena", "nägus"],
    ihr: ["teie", "temale"],
    im: ["sees (-s)"],
    in: ["sees", "sisse"],
    ins: ["sisse"],
    jetzt: ["nüüd", "praegu"],
    kein: ["mitte ükski", "mitte mingi"],
    können: ["saama", "oskama"],
    Land: ["riik", "maa"],
    lang: ["pikk", "kauakestev"],
    lassen: ["jätma", "laskma"],
    laufen: ["jooksma", "tööötama"],
    liegen: ["asuma", "lamama"],
    links: ["vasakul", "vasak"],
    machen: ["tegema", "valmistama"],
    malen: ["maalima", "värvima"],
    Mann: ["mees"],
    nach: ["-sse", "pärast"],
    natürlich: ["muidugi", "loomulik"],
    nehmen: ["võtma"],
    nur: ["ainult", "üksnes"],
    oder: ["või", "ehk"],
    passen: ["sobima"],
    probieren: ["proovima", "maitsma"],
    rechts: ["paremale", "parem"],
    Seite: ["lehekülg", "külg"],
    sich: ["end", "endale"],
    sicher: ["kindel", "kindlasti"],
    sie: ["nemad / nad"],
    über: ["kohal", "kohta"],
    um: ["umbes", "kell"],
    vor: ["enne", "ees"],
    was: ["mis", "mida"],
    wenn: ["kui (tingimus)", "kui (aeg)"],
    wie: ["kuidas", "kui"],
    zu: ["-sse", "juurde"],
    zum: ["-sse", "juurde"],
    Zeit: ["aeg (hetk / ajavahemik)"],
    einmal: ["üks kord", "kord"],
  };

  const preferred = primaryHints[de] || [];
  if (preferred.includes(c)) {
    const rank = preferred.indexOf(c);
    if (rank === 0) {
      return "Strong candidate — aligns with primary A1 meaning and Study Põhiidee for this DE word.";
    }
    return "Valid secondary meaning — suitable in Study explanation; weaker as sole main translation at A1.";
  }

  if (study.includes(c.toLowerCase().slice(0, 4))) {
    return "Contextually valid — mentioned in Study explanation; evaluate if primary for this card scope.";
  }

  return isOrdinary
    ? "Evaluate against ordinary flashcard use — one practical meaning required on card front."
    : "Evaluate against Study Põhiidee — additional meanings may remain in explanation after OWNER picks one main form.";
}

function roleNote(de, candidate) {
  const c = candidate.trim();
  const roles = {
    jaoks: "Recipient/purpose: für dich = for you (beneficiary).",
    eest: "Exchange/reason: danke für = thanks for (gratitude/cause).",
    leidma: "Physical discovery of lost/missing objects.",
    arvama: "Opinion/judgment: ich finde... = I think/find that...",
    teid: "Direct object: Wir sehen euch.",
    teile: "Indirect object: Wir helfen euch.",
    "nemad / nad": "Plural subject pronoun — written variants of 'they'.",
  };
  if (roles[c]) return roles[c];
  if (c === "kuhu?" || c === "kus?") return "Interrogative — marks direction question, not a lexical translation.";
  if (c.startsWith("-")) return "Bound morpheme fused with place names (nach Berlin → Berliini-sse).";
  return `Estonian rendering of German «${de}» in one of its A1-level senses.`;
}

function recommend(de, candidates, entry, field) {
  const study = studyText(entry);
  const primaryMap = {
    an: "juures",
    aus: "välja",
    aufs: "peale",
    Besuch: "külastus",
    besuchen: "külastama",
    bringen: "tooma",
    ein: "üks",
    Eis: "jää",
    erst: "kõigepealt",
    etwas: "midagi",
    euch: "teid",
    fahren: "sõitma",
    finden: "leidma",
    Frau: "naine",
    für: "jaoks",
    ganz: "terve",
    Geschichte: "lugu",
    gleich: "kohe",
    halten: "hoidma",
    hören: "kuulma",
    hübsch: "kena",
    ihr: "teie",
    im: "sees (-s)",
    in: "sees",
    ins: "sisse",
    jetzt: "nüüd",
    kein: "mitte ükski",
    können: "oskama",
    Land: "riik",
    lang: "pikk",
    lassen: "jätma",
    laufen: "jooksma",
    liegen: "asuma",
    links: "vasakul",
    machen: "tegema",
    malen: "maalima",
    Mann: "mees",
    nach: "pärast",
    natürlich: "muidugi",
    nehmen: "võtma",
    nur: "ainult",
    oder: "või",
    passen: "sobima",
    probieren: "proovima",
    rechts: "paremale",
    Seite: "lehekülg",
    sich: "end",
    sicher: "kindlasti",
    sie: "nemad / nad",
    über: "kohal",
    um: "kell",
    vor: "enne",
    was: "mis",
    wenn: "kui (tingimus)",
    wie: "kuidas",
    zu: "juurde",
    zum: "juurde",
    Zeit: "aeg (hetk / ajavahemik)",
    einmal: "üks kord",
  };

  const rec = primaryMap[de];
  if (rec && candidates.includes(rec)) {
    return rec;
  }
  if (study.toLowerCase().includes("põhiidee")) {
    const first = candidates[0];
    return first;
  }
  return candidates[0];
}

function semanticAnalysis(de, candidates, entry, field) {
  const parts = candidates.map((c) => {
    const g = gloss(c);
    const role = roleNote(de, c);
    const suit = suitability(de, c, candidates, entry, field);
    return `**${c}** — ${g}. Role: ${role}. Suitability: ${suit}`;
  });
  const studyNote = entry.study
    ? "Study card: additional meanings may stay in explanation/examples after OWNER selects one main translation (MASTER v1.12 §1.1.12)."
    : "Ordinary flashcard: main translation must be one practical meaning on learner-facing field.";
  return `${parts.join(" ")} ${studyNote}`;
}

function escapePipe(s) {
  return String(s || "").replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
}

function build() {
  const masterDoc = fs.readFileSync(path.join(ROOT, "docs_and_rules/PROJECT_LANGUAGE_MASTER_STANDARD.md"), "utf8");
  const masterVer = (masterDoc.match(/\*\*Versija:\*\* ([\d.]+)/) || [])[1];
  const audit = JSON.parse(fs.readFileSync(AUDIT_JSON, "utf8"));
  const findings = audit.findings.filter((f) => f.category === "MULTIPLE_TRANSLATION" && f.validated);
  const words = loadProduction();

  const ids = findings.map((f) => f.auditId);
  const dup = ids.length !== new Set(ids).size;

  let currentMatch = 0;
  let missingPath = 0;
  const enriched = [];

  for (const f of findings) {
    const entry = words.find((w) => w.study?.id === f.cardId || w.de === f.de);
    if (!entry) {
      missingPath++;
      continue;
    }
    const live = getFieldValue(entry, f.field);
    if (live.trim() === String(f.currentEt || "").trim()) currentMatch++;
    else missingPath++;

    const candidates = f.candidates || [];
    const rec = recommend(f.de, candidates, entry, f.field);
    enriched.push({
      ...f,
      cardType: f.cardType || (entry.study ? entry.study.layout || "standardStudy" : "ordinary"),
      candidates,
      candidateAnalysis: candidates.map((c) => ({
        candidate: c,
        meaning: gloss(c),
        role: roleNote(f.de, c),
        suitable: suitability(f.de, c, candidates, entry, f.field),
      })),
      recommendedMain: rec,
      semanticAnalysis: semanticAnalysis(f.de, candidates, entry, f.field),
      studyContext: studyText(entry).slice(0, 400),
    });
  }

  const precheck = {
    masterVersion: masterVer,
    cards: audit.cardCount,
    sourceFindings: findings.length,
    currentMatch: currentMatch,
    missingPath,
    duplicateFindingId: dup ? 1 : 0,
    productionChanges: 0,
    deChanges: 0,
  };

  if (masterVer !== "1.12" || findings.length !== 59 || currentMatch !== 59 || missingPath !== 0 || dup) {
    console.error("PRECHECK FAIL", precheck);
    process.exit(1);
  }

  const generatedAt = new Date().toISOString();
  const originSha = execSync("git rev-parse origin/main", { cwd: ROOT, encoding: "utf8" }).trim();

  const view = [
    "# ET–DE A1 — Multi-translation OWNER VIEW (59)",
    "",
    `**Generated:** ${generatedAt}`,
    `**MASTER:** v1.12`,
    `**ORIGIN_MAIN_SHA:** \`${originSha}\``,
    `**MODE:** OWNER REVIEW — analysis only (no repair)`,
    `**SOURCE_FINDINGS:** 59`,
    `**CURRENT_MATCH:** ${currentMatch}/59`,
    "",
    "Per MASTER v1.12: one card = one main translation. `RECOMMENDED_MAIN_TRANSLATION` is auditor analysis only. `OWNER NEW` remains empty until OWNER decision.",
    "",
  ];

  for (const f of enriched) {
    view.push(`## ${f.auditId}`, "");
    view.push("| Field | Value |", "|---|---|");
    view.push(`| Card ID | ${f.cardId} |`);
    view.push(`| Card type | ${f.cardType} |`);
    view.push(`| Field/path | \`${f.field}\` |`);
    view.push(`| DE | ${f.de} |`);
    view.push(`| CURRENT | ${f.currentEt} |`);
    view.push(`| Status | OWNER_DECISION_REQUIRED |`);
    view.push("");
    view.push("### Detected candidates", "");
    for (const ca of f.candidateAnalysis) {
      view.push(
        `- **${ca.candidate}** — Meaning: ${ca.meaning}. Role/nuance: ${ca.role}. Main-translation suitability: ${ca.suitable}`,
      );
    }
    view.push("");
    view.push(`### RECOMMENDED_MAIN_TRANSLATION (analysis only)`, "", `→ **${f.recommendedMain}**`, "");
    if (f.studyContext) {
      view.push("### Study context (read-only)", "", f.studyContext, "");
    }
    view.push("### Semantic analysis", "", f.semanticAnalysis, "", "---", "");
  }

  const decHeader = [
    "# ET–DE A1 — Multi-translation OWNER DECISIONS (59)",
    "",
    `**Generated:** ${generatedAt}`,
    `**MASTER:** v1.12`,
    "",
    "| Audit ID | Card ID | Card type | Field/path | DE | CURRENT | Candidate 1 | Candidate 1 meaning | Candidate 2 | Candidate 2 meaning | Candidate 3+ | Semantic analysis | Recommended main translation | OWNER NEW | Status |",
    "|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|",
  ];

  const decRows = enriched.map((f) => {
    const c1 = f.candidateAnalysis[0];
    const c2 = f.candidateAnalysis[1];
    const c3plus = f.candidateAnalysis.slice(2)
      .map((c) => `${c.candidate} (${c.meaning})`)
      .join("; ");
    return `| ${f.auditId} | ${f.cardId} | ${f.cardType} | \`${f.field}\` | ${escapePipe(f.de)} | ${escapePipe(f.currentEt)} | ${escapePipe(c1?.candidate)} | ${escapePipe(c1?.meaning)} | ${escapePipe(c2?.candidate || "—")} | ${escapePipe(c2?.meaning || "—")} | ${escapePipe(c3plus || "—")} | ${escapePipe(f.semanticAnalysis.slice(0, 280))} | ${escapePipe(f.recommendedMain)} | | OWNER_DECISION_REQUIRED |`;
  });

  fs.writeFileSync(OUT_VIEW, view.join("\n"));
  fs.writeFileSync(OUT_DEC, decHeader.concat(decRows).join("\n") + "\n");

  const summary = {
    verdict: "ET_A1_MULTITRANSLATION_OWNER_REVIEW_READY",
    precheck,
    ownerArtifactCoverage: `${enriched.length}/${findings.length}`,
    ownerNewFilled: 0,
    ownerDecisionRequired: enriched.length,
    pending: 0,
  };
  console.log(JSON.stringify(summary, null, 2));
}

build();
