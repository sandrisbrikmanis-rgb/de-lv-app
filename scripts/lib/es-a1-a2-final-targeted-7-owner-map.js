#!/usr/bin/env node
"use strict";

const TARGETED_7_LINGUISTIC = [
  {
    id: "ES-A1A2-TARGETED7-0001",
    level: "A1",
    cardId: "a1-hand-study",
    de: "Mein Arm tut weh.",
    field: "study.examples[2].lv",
    current: "Me duele la mano.",
    new: "Me duele el brazo.",
    status: "LABOT",
    category: "SEMANTICS",
    reason: "Arm ir brazo, nevis mano.",
    kind: "linguistic",
  },
  {
    id: "ES-A1A2-TARGETED7-0002",
    level: "A1",
    cardId: "a1-kosten",
    de: "Ich bezahle die Rechnung.",
    field: "study.examples[4].lv",
    current: "La cuenta tiene un precio.",
    new: "Pago la cuenta.",
    status: "LABOT",
    category: "TRANSLATION",
    reason: "Ich bezahle die Rechnung → Pago la cuenta.",
    kind: "linguistic",
    accentField: "study.sectionAccents.examples[4].lv.purple[0]",
    accentCurrent: "pago",
    accentNew: "Pago",
  },
  {
    id: "ES-A1A2-TARGETED7-0003",
    level: "A1",
    cardId: "a1-morgen-study",
    de: "Morgen ist Montag.",
    field: "study.examples[3].lv",
    current: "El lunes por la mañana trabajo.",
    new: "Mañana es lunes.",
    status: "LABOT",
    category: "TRANSLATION",
    reason: "Morgen ist Montag → Mañana es lunes.",
    kind: "linguistic",
    accentField: "study.sectionAccents.examples[3].lv.purple[0]",
    accentCurrent: "mañana",
    accentNew: "Mañana",
  },
  {
    id: "ES-A1A2-TARGETED7-0004",
    level: "A2",
    cardId: "a2-becher",
    de: "Bitte wirf den Pappbecher weg.",
    field: "study.examples[2].lv",
    current: "Por favor, deseche el vaso de cartón.",
    new: "Por favor, desecha el vaso de cartón.",
    status: "LABOT",
    category: "GRAMMAR",
    reason: "wirf ir neformāls imperatīvs → desecha.",
    kind: "linguistic",
    accentField: "study.sectionAccents.examples[2].lv.purple[0]",
    accentCurrent: "por",
    accentNew: "Por",
  },
  {
    id: "ES-A1A2-TARGETED7-0005",
    level: "A2",
    cardId: "a2-schloss",
    de: "Der Schlüssel",
    field: "study.comparison[4].meaning",
    current: "la cerradura",
    new: "la llave",
    status: "LABOT",
    category: "SEMANTICS",
    reason: "Schlüssel ir atslēga (llave), nevis slēdzene (cerradura).",
    kind: "linguistic",
    accentField: "study.sectionAccents.comparison[4].meaning.purple",
    accentCurrent: ["la clave"],
    accentNew: ["la llave"],
  },
  {
    id: "ES-A1A2-TARGETED7-0006",
    level: "A2",
    cardId: "a2-absagen",
    de: "Er hat seine Teilnahme abgesagt.",
    field: "study.examples[2].lv",
    current: "Canceló la membresía.",
    new: "Canceló su participación.",
    status: "LABOT",
    category: "SEMANTICS",
    reason: "Teilnahme ir dalība (participación), nevis dalība (membresía).",
    kind: "linguistic",
    accentField: "study.sectionAccents.examples[2].lv.purple",
    accentCurrent: ["rechazó", "rechazó"],
    accentNew: ["Canceló", "participación"],
  },
  {
    id: "ES-A1A2-TARGETED7-0007",
    level: "A2",
    cardId: "a2-tafel",
    de: "Bitte wisch die Tafel ab.",
    field: "study.examples[1].lv",
    current: "Por favor, limpie la pizarra.",
    new: "Por favor, limpia la pizarra.",
    status: "LABOT",
    category: "GRAMMAR",
    reason: "wisch ir neformāls imperatīvs → limpia.",
    kind: "linguistic",
    accentField: "study.sectionAccents.examples[1].lv.purple[0]",
    accentCurrent: "por",
    accentNew: "Por",
  },
];

function expandApplyTargets() {
  const items = [];
  for (const row of TARGETED_7_LINGUISTIC) {
    items.push({
      id: `${row.id}-L`,
      parentId: row.id,
      level: row.level,
      cardId: row.cardId,
      de: row.de,
      field: row.field,
      current: row.current,
      new: row.new,
      status: row.status,
      category: row.category,
      reason: row.reason,
      kind: "linguistic",
    });
    if (row.accentField) {
      items.push({
        id: `${row.id}-A`,
        parentId: row.id,
        level: row.level,
        cardId: row.cardId,
        de: row.de,
        field: row.accentField,
        current: row.accentCurrent,
        new: row.accentNew,
        status: row.status,
        category: "SECTION_ACCENTS",
        reason: `Dependent sectionAccents for ${row.field}`,
        kind: "accent",
        linkedField: row.field,
        linkedNew: row.new,
      });
    }
  }
  return items;
}

function accentFragmentsInNew(accentNew, linkedNew) {
  const text = String(linkedNew);
  const parts = Array.isArray(accentNew) ? accentNew : [accentNew];
  return parts.every((p) => text.includes(String(p)));
}

function buildPayload(head) {
  const items = expandApplyTargets();
  return {
    repository: "sandrisbrikmanis-rgb/de-lv-app",
    pr: 664,
    branch: "cursor/es-de-a1-a2-owner-apply-001-200-3141",
    sourceHead: head,
    linguisticTargets: 7,
    accentTargets: 6,
    uniqueApplyTargets: items.length,
    status: "OWNER ACCEPTED",
    linguistic: TARGETED_7_LINGUISTIC,
    items,
  };
}

function buildViewMd(payload) {
  const lines = [
    "# ES–DE A1+A2 — final targeted 7 OWNER decisions",
    "",
    `**Source HEAD:** \`${payload.sourceHead}\``,
    `**Linguistic targets:** ${payload.linguisticTargets}`,
    `**Dependent accent targets:** ${payload.accentTargets}`,
    `**Unique apply targets:** ${payload.uniqueApplyTargets}`,
    "",
  ];
  for (const row of payload.linguistic) {
    lines.push(`## ${row.id}`, "");
    lines.push(`- Level: ${row.level}`);
    lines.push(`- Card ID: \`${row.cardId}\``);
    lines.push(`- DE: \`${row.de}\``);
    lines.push(`- Field: \`${row.field}\``);
    lines.push(`- CURRENT: \`${row.current}\``);
    lines.push(`- NEW: \`${row.new}\``);
    lines.push(`- Status: ${row.status}`);
    lines.push(`- Pamatojums: ${row.reason}`);
    if (row.accentField) {
      lines.push(`- Accent field: \`${row.accentField}\``);
      lines.push(`- Accent CURRENT: \`${JSON.stringify(row.accentCurrent)}\``);
      lines.push(`- Accent NEW: \`${JSON.stringify(row.accentNew)}\``);
    }
    lines.push("");
  }
  return lines.join("\n");
}

module.exports = {
  TARGETED_7_LINGUISTIC,
  expandApplyTargets,
  accentFragmentsInNew,
  buildPayload,
  buildViewMd,
};
