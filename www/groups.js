const groups = ["A1", "A2", "B1", "B2", "C1", "C2", "Sätze"];

function groupDisplayLabel(group) {
  if (group === "Sätze") {
    if (window.AppI18n && typeof window.AppI18n.t === "function") {
      return window.AppI18n.t("groups.sentences");
    }
    return "Teikumi";
  }
  return group;
}

window.groups = groups;
window.groupDisplayLabel = groupDisplayLabel;
