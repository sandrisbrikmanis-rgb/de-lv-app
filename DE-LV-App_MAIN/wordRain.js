(function () {
  "use strict";

  const MIN_WIDTH = 1024;
  const WORD_COUNT = 62;
  const WORD_MAX_WIDTH = 230;
  const SAFE_GAP = 28;
  const STORAGE_KEYS = {
    learned: "deLvFlashcardsProgress",
    problemStats: "deLvFlashcardsProblemStats",
    mastered: "deLvFlashcardsMastered100"
  };
  const DATASETS = [
    "A1_WORDS",
    "A2_WORDS",
    "B1_WORDS",
    "B2_WORDS",
    "C1_WORDS",
    "C2_WORDS",
    "SENTENCE_ENTRIES"
  ];

  let layer = null;
  let items = [];
  let animationFrame = null;
  let lastTimestamp = 0;
  let enabled = false;
  let resizeTimer = null;
  let activeGroupObserver = null;
  let activeGroupClickTimer = null;
  let zoneDeck = [];
  let zoneDeckKey = "";
  let columnDeck = [];
  let columnDeckKey = "";

  function parseStorage(key, fallback) {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function normalizeText(value) {
    return String(value || "").trim();
  }

  function cardId(card) {
    const de = normalizeText(card && card.de);
    const lv = normalizeText(card && card.lv);
    const level = normalizeText(card && card.level);
    return `${level}:${de}:${lv}`;
  }

  function sessionId(card) {
    return `${normalizeText(card && card.level)}:${cardId(card)}`;
  }

  function collectVerbCards() {
    const verbs = Array.isArray(window.VERB_ENTRIES) ? window.VERB_ENTRIES : [];
    const cards = [];
    verbs.forEach((entry) => {
      ["infinitiv", "praesens", "imperfektIndikativ", "imperfektKonjunktiv", "partizipVergangenheit"].forEach((key) => {
        const form = entry && entry[key];
        if (form && form.de) {
          cards.push({ de: form.de, lv: form.lv || "", level: "Darbības vārdi" });
        }
      });
    });
    return cards;
  }

  function collectCards() {
    const cards = [];
    DATASETS.forEach((name) => {
      const dataset = window[name];
      if (Array.isArray(dataset)) cards.push(...dataset);
    });
    cards.push(...collectVerbCards());

    const seen = new Set();
    return cards
      .map((card) => ({
        de: normalizeText(card && card.de),
        lv: normalizeText(card && card.lv),
        level: normalizeText(card && card.level) || ""
      }))
      .filter((card) => card.de && card.de.length <= 42)
      .filter((card) => {
        const id = cardId(card);
        if (seen.has(id)) return false;
        seen.add(id);
        return true;
      });
  }

  function activeGroupLabel() {
    const activeText = document.getElementById("activeGroup")?.textContent || "";
    const match = activeText.match(/[—–-]\s*(.+)$/);
    return match ? match[1].trim() : "";
  }

  function currentGroupCards(cards) {
    const activeLabel = activeGroupLabel();
    if (!activeLabel) return cards;
    const normalized = activeLabel === "Teikumi" ? "Sätze" : activeLabel;
    const filtered = cards.filter((card) => card.level === normalized);
    return filtered.length ? filtered : cards;
  }

  function classifyCards(cards) {
    const learned = parseStorage(STORAGE_KEYS.learned, {});
    const problemStats = parseStorage(STORAGE_KEYS.problemStats, {});
    const mastered = new Set(
      parseStorage(STORAGE_KEYS.mastered, [])
        .map((item) => (typeof item === "string" ? item : item && item.id))
        .filter(Boolean)
    );

    return cards.map((card) => {
      const id = cardId(card);
      const learnedIds = learned[card.level] || [];
      const isLearned = mastered.has(id) || learnedIds.includes(sessionId(card)) || learnedIds.includes(id);
      const isProblem = problemStats[id] && problemStats[id].problematic === true;
      return {
        id,
        text: card.de,
        status: isProblem ? "problem" : isLearned ? "learned" : "default"
      };
    });
  }

  function randomBetween(min, max) {
    return min + Math.random() * (max - min);
  }

  function shuffle(array) {
    const copy = array.slice();
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  }

  function takeBalanced(bucket, amount) {
    if (!bucket.length || amount <= 0) return [];
    const shuffled = shuffle(bucket);
    const result = [];
    for (let index = 0; index < amount; index += 1) {
      result.push(shuffled[index % shuffled.length]);
    }
    return result;
  }

  function buildBalancedWords(classified) {
    const buckets = {
      learned: classified.filter((word) => word.status === "learned"),
      problem: classified.filter((word) => word.status === "problem"),
      default: classified.filter((word) => word.status === "default")
    };
    const target = Math.floor(WORD_COUNT / 3);
    const pool = [
      ...takeBalanced(buckets.learned, target),
      ...takeBalanced(buckets.problem, target),
      ...takeBalanced(buckets.default, target)
    ];
    const fallback = shuffle(classified.length ? classified : [{ text: "Deutsch", status: "default" }]);
    let fallbackIndex = 0;

    while (pool.length < WORD_COUNT) {
      pool.push(fallback[fallbackIndex % fallback.length]);
      fallbackIndex += 1;
    }

    return shuffle(pool).slice(0, WORD_COUNT);
  }

  function chooseWord(words) {
    return words[Math.floor(Math.random() * words.length)] || { text: "Deutsch", status: "default" };
  }

  function columnCountForWidth(width) {
    return width >= 1800 ? 10 : 9;
  }

  function createZones() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const columnCount = columnCountForWidth(width);
    const rowCount = Math.max(5, Math.min(7, Math.ceil(WORD_COUNT / columnCount)));
    const cellWidth = width / columnCount;
    const cellHeight = height / rowCount;
    const zones = [];

    for (let row = 0; row < rowCount; row += 1) {
      for (let column = 0; column < columnCount; column += 1) {
        const cellLeft = cellWidth * column;
        const cellTop = cellHeight * row;
        const paddingX = Math.min(22, Math.max(8, cellWidth * 0.12));
        const paddingY = Math.min(28, Math.max(10, cellHeight * 0.12));
        zones.push({
          type: "grid",
          column,
          row,
          columnCount,
          rowCount,
          cellHeight,
          xMin: Math.max(8, cellLeft + paddingX),
          xMax: Math.max(8, cellLeft + cellWidth - paddingX - WORD_MAX_WIDTH * 0.28),
          yMin: cellTop + paddingY,
          yMax: cellTop + cellHeight - paddingY
        });
      }
    }

    return zones;
  }

  function zoneKey(zones) {
    return `${window.innerWidth}x${window.innerHeight}:${zones.length}`;
  }

  function rebuildZoneDeck(zones) {
    zoneDeck = shuffle(zones.map((zone, index) => index));
    zoneDeckKey = zoneKey(zones);
  }

  function chooseZone(zones) {
    if (!zones.length) {
      return { type: "grid", column: 0, row: 0, columnCount: 1, rowCount: 1, cellHeight: window.innerHeight, xMin: 12, xMax: Math.max(12, window.innerWidth - WORD_MAX_WIDTH - 12), yMin: 0, yMax: window.innerHeight };
    }
    if (!zoneDeck.length || zoneDeckKey !== zoneKey(zones)) {
      rebuildZoneDeck(zones);
    }
    const index = zoneDeck.pop();
    if (!zoneDeck.length) rebuildZoneDeck(zones);
    return zones[index] || zones[0];
  }

  function rebuildColumnDeck(zones) {
    columnDeck = shuffle(zones.map((zone, zoneIndex) => ({ zoneIndex, row: zone.row })));
    columnDeckKey = zoneKey(zones);
  }

  function takeColumnSlot(zones, index) {
    if (!columnDeck.length || columnDeckKey !== zoneKey(zones)) {
      rebuildColumnDeck(zones);
    }
    return columnDeck[index % columnDeck.length] || { zoneIndex: 0, row: index };
  }

  function topResetY(item) {
    const cellHeight = item.zone && item.zone.cellHeight ? item.zone.cellHeight : window.innerHeight / 7;
    return randomBetween(-cellHeight, -30);
  }

  function estimateWordBox(text, size, x, y) {
    const width = Math.min(window.innerWidth - 16, Math.max(42, normalizeText(text).length * size * 0.62));
    const height = Math.max(22, size * 1.35);
    return {
      left: x - 28,
      right: x + width + 28,
      top: y - 22,
      bottom: y + height + 22
    };
  }

  function boxesOverlap(a, b) {
    return a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
  }

  function collidesWithPlacedItems(candidate, item) {
    return items.some((other) => {
      if (other === item || !other.placed) return false;
      return boxesOverlap(candidate, estimateWordBox(other.text, other.size, other.x, other.y));
    });
  }

  function randomPositionInZone(zone, fromTop, item) {
    return {
      x: randomBetween(zone.xMin, Math.max(zone.xMin, zone.xMax)),
      y: fromTop ? topResetY(item) : randomBetween(zone.yMin, Math.max(zone.yMin, zone.yMax))
    };
  }

  function findSafePosition(zone, word, size, item, fromTop) {
    let fallback = randomPositionInZone(zone, fromTop, item);
    let fallbackScore = Number.NEGATIVE_INFINITY;

    for (let attempt = 0; attempt < 96; attempt += 1) {
      const position = randomPositionInZone(zone, fromTop, item);
      const box = estimateWordBox(word.text, size, position.x, position.y);
      if (!collidesWithPlacedItems(box, item)) return position;

      const score = items.reduce((closest, other) => {
        if (other === item || !other.placed) return closest;
        const dx = Math.abs(position.x - other.x);
        const dy = Math.abs(position.y - other.y);
        return Math.min(closest, dx + dy);
      }, Number.POSITIVE_INFINITY);

      if (score <= fallbackScore) continue;
      fallback = position;
      fallbackScore = score;
    }

    return fallback;
  }
  function randomVisualTier() {
    const roll = Math.random();
    if (roll < 0.1) {
      return { className: "is-hot", opacityMin: 1, opacityMax: 1 };
    }
    if (roll < 0.3) {
      return { className: "is-bright", opacityMin: 1, opacityMax: 1 };
    }
    return { className: "is-normal", opacityMin: 1, opacityMax: 1 };
  }

  function resetItem(item, words, fromTop, zoneOverride) {
    const word = chooseWord(words);
    const zone = zoneOverride || item.zone || chooseZone(createZones());
    const tier = randomVisualTier();
    const size = randomBetween(20.8, 26);
    const position = findSafePosition(zone, word, size, item, fromTop);
    item.zone = zone;
    item.zoneType = zone.type;
    item.column = zone.column || 0;
    item.spacing = zone.cellHeight || 150;
    item.zoneBottom = window.innerHeight + item.spacing * 0.35;
    item.xBase = position.x;
    item.x = item.xBase;
    item.y = position.y;
    item.speed = 26;
    item.drift = 0;
    item.rotation = randomBetween(-12, 12);
    item.size = size;
    item.text = word.text;
    item.placed = true;
    item.el.textContent = word.text;
    item.el.className = `word-rain-word is-${word.status} ${tier.className}`;
    item.el.style.fontSize = `${item.size}px`;
    item.el.style.opacity = String(randomBetween(tier.opacityMin, tier.opacityMax));
  }

  function createLayer() {
    if (layer) return layer;
    layer = document.createElement("div");
    layer.className = "word-rain";
    layer.setAttribute("aria-hidden", "true");
    document.body.prepend(layer);
    return layer;
  }

  function buildItems(words) {
    const host = createLayer();
    if (items.length !== WORD_COUNT || host.children.length !== WORD_COUNT) {
      host.textContent = "";
      items = [];
      for (let index = 0; index < WORD_COUNT; index += 1) {
        const el = document.createElement("span");
        host.appendChild(el);
        items.push({ el, x: 0, y: 0, xBase: 0, speed: 0, drift: 0, rotation: 0, size: 16, zoneBottom: window.innerHeight + 90, zoneType: "grid", column: 0, spacing: 150, zone: null, text: "", placed: false });
      }
    }

    const zones = createZones();
    rebuildColumnDeck(zones);
    items.forEach((item) => {
      item.placed = false;
    });
    items.forEach((item, index) => {
      const slot = takeColumnSlot(zones, index);
      resetItem(item, words, false, zones[slot.zoneIndex] || zones[0], slot.row);
    });
  }

  function applyItem(item) {
    item.el.style.transform = `translate3d(${Math.round(item.x)}px, ${Math.round(item.y)}px, 0) rotate(${item.rotation}deg)`;
  }

  function animate(timestamp) {
    if (!enabled) return;
    const delta = Math.min(64, timestamp - (lastTimestamp || timestamp)) / 1000;
    lastTimestamp = timestamp;
    const words = window.__wordRainWords || [];

    items.forEach((item) => {
      item.y += item.speed * delta;
      item.x += item.drift * delta;
      if (item.y > item.zoneBottom) resetItem(item, words, true);
      applyItem(item);
    });

    animationFrame = window.requestAnimationFrame(animate);
  }

  function stop() {
    enabled = false;
    if (animationFrame) window.cancelAnimationFrame(animationFrame);
    animationFrame = null;
    lastTimestamp = 0;
    if (layer) layer.hidden = true;
  }

  function start() {
    if (window.innerWidth < MIN_WIDTH) {
      stop();
      return;
    }

    const cards = currentGroupCards(collectCards());
    const classified = classifyCards(cards.length ? cards : [{ de: "Deutsch", lv: "vāciski", level: "" }]);
    const words = buildBalancedWords(classified);
    window.__wordRainWords = words;

    createLayer().hidden = false;
    buildItems(words);
    enabled = true;
    if (!animationFrame) animationFrame = window.requestAnimationFrame(animate);
  }

  function refresh() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      stop();
      return;
    }
    start();
  }

  function scheduleRefresh(delay) {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(refresh, delay);
  }

  function watchActiveGroup() {
    const activeGroup = document.getElementById("activeGroup");
    if (activeGroup && !activeGroupObserver) {
      activeGroupObserver = new MutationObserver(() => scheduleRefresh(120));
      activeGroupObserver.observe(activeGroup, { childList: true, characterData: true, subtree: true });
    }

    document.addEventListener("click", (event) => {
      if (event.target && event.target.closest("button")) {
        window.clearTimeout(activeGroupClickTimer);
        activeGroupClickTimer = window.setTimeout(refresh, 180);
      }
    });
  }

  window.addEventListener("load", () => {
    watchActiveGroup();
    refresh();
  }, { once: true });

  window.addEventListener("resize", () => scheduleRefresh(180));
  window.addEventListener("storage", refresh);
})();
