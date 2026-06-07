const groups = ["A1", "A2", "B1", "B2", "C1", "C2", "Sätze"];

function groupDisplayLabel(group) {
  return group === "Sätze" ? "Teikumi" : group;
}

window.groups = groups;
window.groupDisplayLabel = groupDisplayLabel;
