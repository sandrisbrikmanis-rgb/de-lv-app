/**
 * Mandatory OWNER decisions and related confirmed remnants for ES-DE A1+A2 foreign remnants.
 * These override Luna second-round output — do not reinterpret.
 */

const MANDATORY_OWNER_DECISIONS = {
  "ES-A1A2-FOREIGN-0054": {
    new: "yo soy/estoy",
    action: "REPLACE",
    status: "LABOT",
    classification: "LV_REMNANT",
    validationResult: "CORRECTED",
    reason: "Akcentam precīzi jāatbilst redzamajam tip tekstam ich bin = yo soy/estoy.",
  },
  "ES-A1A2-FOREIGN-0055": {
    new: "poco",
    action: "KEEP",
    status: "NELABOT",
    classification: "FALSE_POSITIVE",
    validationResult: "CONFIRMED",
    reason: "poco ir pareizs spāņu vārds un korekts wenig tulkojums.",
  },
  "ES-A1A2-FOREIGN-0062": {
    new: "Poco a poco nos ponemos en marcha por este camino.",
    action: "KEEP",
    status: "NELABOT",
    classification: "FALSE_POSITIVE",
    validationResult: "CONFIRMED",
    reason:
      "poco ir spāņu vārds, nevis itāļu atlikums. Iespējamā semantiskā neatbilstība ar DE piemēru jānodod pilnajai lingvistiskajai regresijai.",
  },
  "ES-A1A2-FOREIGN-0063": {
    new: "poco",
    action: "KEEP",
    status: "NELABOT",
    classification: "FALSE_POSITIVE",
    validationResult: "CONFIRMED",
    reason: "poco ir pareizs spāņu fragments akcentam Poco a poco…",
  },
  "ES-A1A2-FOREIGN-0064": {
    new: "poco",
    action: "KEEP",
    status: "NELABOT",
    classification: "FALSE_POSITIVE",
    validationResult: "CONFIRMED",
    reason: "poco ir pareizs spāņu fragments akcentam Poco a poco…",
  },
  "ES-A1A2-FOREIGN-0065": {
    new: "poco",
    action: "KEEP",
    status: "NELABOT",
    classification: "FALSE_POSITIVE",
    validationResult: "CONFIRMED",
    reason: "poco ir pareizs spāņu fragments akcentam Poco a poco…",
  },
  "ES-A1A2-FOREIGN-0356": {
    new: "Al poco tiempo suele quedarse calvo; kurz significa corto o por poco tiempo.",
    action: "REPLACE",
    status: "LABOT",
    classification: "FOREIGN_REMNANT",
    validationResult: "CORRECTED",
    reason: "poco ir korekts spāņu vārds, bet kurz more ir avota defekts. Saglabāt vācu terminu kurz un izlabot spāņu teikumu.",
  },
};

const RELATED_CONFIRMED_REMNANTS = [
  {
    id: "ES-A1A2-FOREIGN-RELATED-0001",
    category: "LV_REMNANT",
    level: "A1",
    cardId: "a1-sein",
    de: "sein",
    field: "study.sectionAccents.tip.left.purple[1]",
    current: "tu esi",
    new: "tú eres/estás",
    action: "REPLACE",
    status: "LABOT",
    classification: "RELATED_CONFIRMED_REMNANT",
    validationResult: "CONFIRMED",
    reason: "Obligāts papildu atlikums: akcentam jāatbilst tip tekstam du bist = tú eres/estás.",
  },
];

const MANDATORY_IDS = new Set(Object.keys(MANDATORY_OWNER_DECISIONS));

module.exports = {
  MANDATORY_OWNER_DECISIONS,
  MANDATORY_IDS,
  RELATED_CONFIRMED_REMNANTS,
};
