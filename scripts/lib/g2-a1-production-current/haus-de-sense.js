#!/usr/bin/env node
"use strict";

/** Canonical DE sense scope for the Haus A1 card (das Haus = house/māja, not Gebäude or Zuhause). */
const HAUS_DE_SENSE_NOTE =
  "HOUSE / MĀJA sense — German `das Haus`; not `das Gebäude` (ēka/building) and not abstract `das Zuhause` (mājas/home).";

const LEGACY_HAUS_DE_SENSE_PATTERNS = [
  /Building\/dwelling sense \(das Haus\)[^]*?unless entry proves otherwise/g,
  /Building\/dwelling \(DE das Haus\)/g,
  /māja\/ēka/g,
  /TARGET building\/dwelling sense/g,
  /DE «Haus» dwelling sense/g,
  /for DE dwelling sense/g,
];

module.exports = {
  HAUS_DE_SENSE_NOTE,
  LEGACY_HAUS_DE_SENSE_PATTERNS,
};
