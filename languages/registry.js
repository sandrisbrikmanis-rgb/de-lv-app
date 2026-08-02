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
    },
    {
      code: "mk",
      nativeName: "Македонски",
      nativeCode: "MK",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/mk/ui.js",
      dataManifestPath: "./languages/mk/data/manifest.js"
    },
    {
      code: "sl",
      nativeName: "Slovenski",
      nativeCode: "SL",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/sl/ui.js",
      dataManifestPath: "./languages/sl/data/manifest.js"
    },
    {
      code: "bs",
      nativeName: "Bosanski",
      nativeCode: "BS",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/bs/ui.js",
      dataManifestPath: "./languages/bs/data/manifest.js"
    },
    {
      code: "sr",
      nativeName: "Srpski",
      nativeCode: "SR",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/sr/ui.js",
      dataManifestPath: "./languages/sr/data/manifest.js"
    },
    {
      code: "hr",
      nativeName: "Hrvatski",
      nativeCode: "HR",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/hr/ui.js",
      dataManifestPath: "./languages/hr/data/manifest.js"
    },
    {
      code: "sk",
      nativeName: "Slovenčina",
      nativeCode: "SK",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/sk/ui.js",
      dataManifestPath: "./languages/sk/data/manifest.js"
    },
    {
      code: "cs",
      nativeName: "Čeština",
      nativeCode: "CS",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/cs/ui.js",
      dataManifestPath: "./languages/cs/data/manifest.js"
    },
    {
      code: "fi",
      nativeName: "Suomi",
      nativeCode: "FI",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/fi/ui.js",
      dataManifestPath: "./languages/fi/data/manifest.js"
    },
    {
      code: "sv",
      nativeName: "Svenska",
      nativeCode: "SV",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/sv/ui.js",
      dataManifestPath: "./languages/sv/data/manifest.js"
    },
    {
      code: "nb",
      nativeName: "Norsk Bokmål",
      nativeCode: "NB",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/nb/ui.js",
      dataManifestPath: "./languages/nb/data/manifest.js"
    },
    {
      code: "nn",
      nativeName: "Norsk nynorsk",
      nativeCode: "NN",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/nn/ui.js",
      dataManifestPath: "./languages/nn/data/manifest.js"
    },
    {
      code: "da",
      nativeName: "Dansk",
      nativeCode: "DA",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/da/ui.js",
      dataManifestPath: "./languages/da/data/manifest.js"
    },
    {
      code: "nl",
      nativeName: "Nederlands",
      nativeCode: "NL",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/nl/ui.js",
      dataManifestPath: "./languages/nl/data/manifest.js"
    },
    {
      code: "lb",
      nativeName: "Lëtzebuergesch",
      nativeCode: "LB",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/lb/ui.js",
      dataManifestPath: "./languages/lb/data/manifest.js"
    },
    {
      code: "fr",
      nativeName: "Français",
      nativeCode: "FR",
      active: true,
      uiAvailable: true,
      dataStatus: "complete",
      hasStudyData: true,
      uiPath: "./languages/fr/ui.js",
      dataManifestPath: "./languages/fr/data/manifest.js"
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
