(function () {
  /**
   * Dzimto valodu / UI valodu reģistrs.
   * Šie kodi ir nativeLanguage vērtības, nevis targetLanguage.
   * Mērķa valoda (targetLanguage) šajā projektā vienmēr ir "de"
   * un tiek definēta AppLanguageContext.
   */
  const LANGUAGE_REGISTRY = [
    {
      code: "lv",
      nativeName: "Latviešu",
      nativeCode: "LV",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/lv/ui.js",
      dataManifestPath: "./languages/lv/data/manifest.js"
    },
    {
      code: "ru",
      nativeName: "Русский",
      nativeCode: "RU",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/ru/ui.js",
      dataManifestPath: "./languages/ru/data/manifest.js"
    },
    {
      code: "pl",
      nativeName: "Polski",
      nativeCode: "PL",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/pl/ui.js",
      dataManifestPath: "./languages/pl/data/manifest.js"
    },
    {
      code: "uk",
      nativeName: "Українська",
      nativeCode: "UK",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/uk/ui.js",
      dataManifestPath: "./languages/uk/data/manifest.js"
    },
    {
      code: "lt",
      nativeName: "Lietuvių",
      nativeCode: "LT",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/lt/ui.js",
      dataManifestPath: "./languages/lt/data/manifest.js"
    },
    {
      code: "et",
      nativeName: "Eesti",
      nativeCode: "ET",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/et/ui.js",
      dataManifestPath: "./languages/et/data/manifest.js"
    },
    {
      code: "ro",
      nativeName: "Română",
      nativeCode: "RO",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/ro/ui.js",
      dataManifestPath: "./languages/ro/data/manifest.js"
    },
    {
      code: "bg",
      nativeName: "Български",
      nativeCode: "BG",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/bg/ui.js",
      dataManifestPath: "./languages/bg/data/manifest.js"
    },
    {
      code: "gr",
      nativeName: "Ελληνικά",
      nativeCode: "GR",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/gr/ui.js",
      dataManifestPath: "./languages/gr/data/manifest.js"
    },
    {
      code: "tr",
      nativeName: "Türkçe",
      nativeCode: "TR",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/tr/ui.js",
      dataManifestPath: "./languages/tr/data/manifest.js"
    },
    {
      code: "sq",
      nativeName: "Shqip",
      nativeCode: "SQ",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/sq/ui.js",
      dataManifestPath: "./languages/sq/data/manifest.js"
    }
  ];

  const byCode = Object.fromEntries(LANGUAGE_REGISTRY.map((entry) => [entry.code, entry]));

  window.AppLanguageRegistry = {
    all() {
      return LANGUAGE_REGISTRY.slice();
    },
    active() {
      return LANGUAGE_REGISTRY.filter((entry) => entry.active);
    },
    get(code) {
      return byCode[code] || null;
    },
    isValid(code) {
      const entry = byCode[code];
      return Boolean(entry && entry.active);
    },
    defaultCode: "lv",
    storageKey: "appLanguage",
    role: "nativeLanguage"
  };
})();
