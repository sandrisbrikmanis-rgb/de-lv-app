#!/usr/bin/env node
"use strict";

function finalizeInventoryMetrics({
  inventoryObjectsExpected = 0,
  inventoryFieldsDiscovered = 0,
  inventoryFieldsMapped = 0,
  inventoryFieldsUnmapped = null,
  unmappedDetails = [],
  productionFile = null,
}) {
  const unmapped =
    inventoryFieldsUnmapped == null
      ? Math.max(0, inventoryFieldsDiscovered - inventoryFieldsMapped)
      : inventoryFieldsUnmapped;

  if (inventoryFieldsDiscovered !== inventoryFieldsMapped + unmapped) {
    throw new Error(
      `Inventory invariant failed: discovered(${inventoryFieldsDiscovered}) != mapped(${inventoryFieldsMapped}) + unmapped(${unmapped})`,
    );
  }

  const inventoryCoverage =
    inventoryObjectsExpected === 0 ? 1 : inventoryFieldsMapped / inventoryObjectsExpected;

  return {
    inventoryObjectsExpected,
    inventoryFieldsDiscovered,
    inventoryFieldsMapped,
    inventoryFieldsUnmapped: unmapped,
    inventoryCoverage,
    unmappedMainTranslationFields: unmapped,
    unmappedDetails,
    productionFile,
    pass:
      !(inventoryObjectsExpected > 0 && inventoryFieldsMapped === 0 && inventoryFieldsDiscovered === 0) &&
      unmapped === 0 &&
      inventoryFieldsDiscovered === inventoryFieldsMapped + unmapped,
  };
}

module.exports = { finalizeInventoryMetrics };
