(function () {
  const DEFAULT_FALLBACK_NATIVE = "lv";

  const DATASET_DEFINITIONS = {
    a1: { globalName: "A1_WORDS", lvPath: "./data/a1.js" },
    a2: { globalName: "A2_WORDS", lvPath: "./data/a2.js" },
    b1: { globalName: "B1_WORDS", lvPath: "./data/b1.js" },
    b2: { globalName: "B2_WORDS", lvPath: "./data/b2.js" },
    c1: { globalName: "C1_WORDS", lvPath: "./data/c1.js" },
    c2: { globalName: "C2_WORDS", lvPath: "./data/c2.js" },
    sentences: { globalName: "SENTENCES", lvPath: "./data/sentences.js" },
    verbs: { globalName: "VERBS", lvPath: "./data/verbs.js" },
    courseLessons: { globalName: "COURSE_LESSONS", lvPath: "./data/courseLessons.js" },
    dialogueIdMap: { globalName: "DIALOGUE_ID_MAP", lvPath: "./data/dialogueIdMap.js" },
    nounArticles: { globalName: "NOUN_ARTICLES", lvPath: "./data/nounArticles.js" }
  };

  function buildDatasetMap(nativeLanguage, useNativeFolder) {
    const paths = {};
    Object.entries(DATASET_DEFINITIONS).forEach(([dataset, def]) => {
      if (useNativeFolder && nativeLanguage !== DEFAULT_FALLBACK_NATIVE) {
        paths[dataset] = `./data/${nativeLanguage}/${dataset}.js`;
      } else if (nativeLanguage === DEFAULT_FALLBACK_NATIVE) {
        paths[dataset] = def.lvPath;
      } else {
        paths[dataset] = `./data/${nativeLanguage}/${dataset}.js`;
      }
    });
    return paths;
  }

  function buildFallbackDatasetMap() {
    const paths = {};
    Object.entries(DATASET_DEFINITIONS).forEach(([dataset, def]) => {
      paths[dataset] = def.lvPath;
    });
    return paths;
  }

  window.AppDatasetRegistry = {
    defaultFallbackNative: DEFAULT_FALLBACK_NATIVE,
    supportedDatasets() {
      return Object.keys(DATASET_DEFINITIONS);
    },
    isSupportedDataset(name) {
      return Object.prototype.hasOwnProperty.call(DATASET_DEFINITIONS, name);
    },
    getGlobalName(dataset) {
      return DATASET_DEFINITIONS[dataset]?.globalName || null;
    },
    getLvPath(dataset) {
      return DATASET_DEFINITIONS[dataset]?.lvPath || null;
    },
    getFallbackDatasetMap() {
      return buildFallbackDatasetMap();
    },
    buildManifest(nativeLanguage, options = {}) {
      const targetLanguage = options.targetLanguage || "de";
      const isPrimaryNative = nativeLanguage === DEFAULT_FALLBACK_NATIVE;
      const dataStatus = options.dataStatus || (isPrimaryNative ? "complete" : "fallback");
      return {
        nativeLanguage,
        targetLanguage,
        fallbackNativeLanguage: isPrimaryNative ? null : DEFAULT_FALLBACK_NATIVE,
        dataStatus,
        uiAvailable: true,
        code: nativeLanguage,
        datasets: buildDatasetMap(nativeLanguage, !isPrimaryNative),
        fallbackDatasets: isPrimaryNative ? null : buildFallbackDatasetMap()
      };
    }
  };
})();
