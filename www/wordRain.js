(function () {
  "use strict";

  const MIN_WIDTH = 1024;
  const WORD_COUNT = 36;
  const COOLDOWN_SIZE = 8;
  const WORD_MAX_WIDTH = 230;
  const BASIN_ZONE_WEIGHT = 0.48;
  const CORRIDOR_SIDE_MAX = 0.18;
  const CORRIDOR_SIDE_MIN = 0.12;
  const CARD_ZONE_GAP = 16;
  const BASIN_TOP_GAP = 24;
  const WORD_RAIN_CONFIG = {
    active_red: 0.40,
    problem_darkred: 0.30,
    unlearned_blue: 0.20,
    learned_green: 0.10
  };
  const BUCKET_KEYS = ["active_red", "problem_darkred", "unlearned_blue", "learned_green"];
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
  let zoneDeck = [];
  let zoneDeckKey = "";
  let wordPool = [];
  let lastSnapshot = null;
  let lastGroupKey = "";
  let lastLayoutWidth = 0;
  let lastLayoutHeight = 0;
  let cardObserver = null;
  let observedCard = null;
  const recentIds = [];

  function isWordRainEnabled() {
    const platform = window.Capacitor?.getPlatform?.();
    if (platform === "ios" || platform === "android") return false;
    if (document.body?.classList?.contains?.("is-home-screen")) return false;
    if (window.innerWidth < MIN_WIDTH) return false;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) return false;
    return true;
  }

  function normalizeText(value) {
    return String(value || "").trim();
  }

  function cardId(card) {
    return card.id ? `${card.level}:${card.id}` : `${card.level}:${card.de}:${card.lv}`;
  }

  function verbId(verb) {
    if (typeof window.__wordRainVerbId === "function") {
      return window.__wordRainVerbId(verb);
    }
    return "";
  }

  function idForCard(card, groupKey) {
    return groupKey === "verbs" ? verbId(card) : cardId(card);
  }

  function unwantedSet(snapshot) {
    return new Set(
      (snapshot.unwantedIds || [])
        .map((item) => (typeof item === "string" ? item : item && item.id))
        .filter(Boolean)
    );
  }

  function masteredSet(snapshot) {
    return new Set(
      (snapshot.masteredIds || [])
        .map((item) => (typeof item === "string" ? item : item && item.id))
        .filter(Boolean)
    );
  }

  function formatGermanWord(card) {
    const de = normalizeText(card && card.de);
    if (!de) return "";
    const article = normalizeText(card && card.de_article);
    if (article && !/^(der|die|das)$/i.test(de.split(/\s+/)[0] || "")) {
      return `${article} ${de}`;
    }
    return de;
  }

  function formatVerbText(verb) {
    const inf = (verb && verb.infinitiv && verb.infinitiv.de) || verb?.tagadne || "";
    return normalizeText(inf);
  }

  function collectGroupCards(group) {
    const cards = [];
    DATASETS.forEach((name) => {
      const dataset = window[name];
      if (!Array.isArray(dataset)) return;
      dataset.forEach((card) => {
        if (normalizeText(card && card.level) === group) {
          cards.push(card);
        }
      });
    });

    const seen = new Set();
    return cards
      .map((card) => ({
        id: card.id,
        de: normalizeText(card && card.de),
        de_article: normalizeText(card && card.de_article),
        lv: normalizeText(card && card.lv),
        level: normalizeText(card && card.level) || group
      }))
      .filter((card) => card.de && card.de.length <= 42)
      .filter((card) => {
        const id = cardId(card);
        if (seen.has(id)) return false;
        seen.add(id);
        return true;
      });
  }

  function collectVerbCards(snapshot) {
    const verbs = Array.isArray(window.VERB_ENTRIES) ? window.VERB_ENTRIES : [];
    const unwanted = unwantedSet(snapshot);
    const mastered = masteredSet(snapshot);

    return verbs.filter((verb) => {
      const id = verbId(verb);
      if (!id) return false;
      if (unwanted.has(id)) return false;
      if (mastered.has(id)) return false;
      const text = formatVerbText(verb);
      return text.length > 0 && text.length <= 42;
    });
  }

  function cardsForSnapshot(snapshot) {
    if (!snapshot) return [];
    if (snapshot.verbMode || snapshot.groupKey === "verbs") {
      return collectVerbCards(snapshot);
    }
    const unwanted = unwantedSet(snapshot);
    const mastered = masteredSet(snapshot);
    return collectGroupCards(snapshot.group).filter((card) => {
      const id = cardId(card);
      return !unwanted.has(id) && !mastered.has(id);
    });
  }

  function classifyCards(cards, snapshot) {
    const groupKey = snapshot.groupKey;
    const learnedIds = snapshot.learned?.[groupKey] || [];
    const learnedSet = new Set(learnedIds);
    const mastered = masteredSet(snapshot);
    const problemStats = snapshot.problemStats || {};

    return cards.map((card) => {
      const id = idForCard(card, groupKey);
      const stats = problemStats[id];
      let bucket = "unlearned_blue";

      if (mastered.has(id) || learnedSet.has(id)) {
        bucket = "learned_green";
      } else if (stats && ((typeof stats.errorLevel === "number" && stats.errorLevel > 0) || (stats.problematic === true && (stats.unknownCount || 0) >= 3))) {
        bucket = "problem_darkred";
      } else if (stats && (stats.unknownCount || 0) > 0) {
        bucket = "active_red";
      }

      const text = groupKey === "verbs" ? formatVerbText(card) : formatGermanWord(card);
      return {
        id: id || text,
        text: text || "Deutsch",
        bucket,
        status: bucket === "learned_green"
          ? "learned"
          : bucket === "problem_darkred"
            ? "problem_darkred"
            : bucket === "active_red"
              ? "active_red"
              : "unlearned_blue"
      };
    }).filter((word) => word.text);
  }

  function normalizeWeights(config, bucketSizes) {
    const nonBlueEmpty = bucketSizes.active_red === 0
      && bucketSizes.problem_darkred === 0
      && bucketSizes.learned_green === 0;

    if (nonBlueEmpty) {
      return { active_red: 0, problem_darkred: 0, unlearned_blue: 1, learned_green: 0 };
    }

    const weights = {};
    let total = 0;
    BUCKET_KEYS.forEach((key) => {
      weights[key] = bucketSizes[key] === 0 ? 0 : config[key];
      total += weights[key];
    });

    if (total === 0) {
      return { active_red: 0, problem_darkred: 0, unlearned_blue: 1, learned_green: 0 };
    }

    BUCKET_KEYS.forEach((key) => {
      weights[key] = weights[key] / total;
    });
    return weights;
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

  function buildWeightedPool(classified) {
    const buckets = {
      active_red: classified.filter((word) => word.bucket === "active_red"),
      problem_darkred: classified.filter((word) => word.bucket === "problem_darkred"),
      unlearned_blue: classified.filter((word) => word.bucket === "unlearned_blue"),
      learned_green: classified.filter((word) => word.bucket === "learned_green")
    };

    const bucketSizes = {
      active_red: buckets.active_red.length,
      problem_darkred: buckets.problem_darkred.length,
      unlearned_blue: buckets.unlearned_blue.length,
      learned_green: buckets.learned_green.length
    };

    const weights = normalizeWeights(WORD_RAIN_CONFIG, bucketSizes);
    const targets = {};
    BUCKET_KEYS.forEach((key) => {
      targets[key] = Math.round(weights[key] * WORD_COUNT);
    });

    let total = BUCKET_KEYS.reduce((sum, key) => sum + targets[key], 0);
    while (total > WORD_COUNT) {
      const key = BUCKET_KEYS.find((candidate) => targets[candidate] > 0);
      if (!key) break;
      targets[key] -= 1;
      total -= 1;
    }
    while (total < WORD_COUNT) {
      const key = BUCKET_KEYS.reduce((best, candidate) => {
        if (bucketSizes[candidate] === 0) return best;
        if (!best) return candidate;
        return weights[candidate] > weights[best] ? candidate : best;
      }, null);
      if (!key) break;
      targets[key] += 1;
      total += 1;
    }

    const pool = [];
    BUCKET_KEYS.forEach((key) => {
      pool.push(...takeBalanced(buckets[key], targets[key]));
    });

    const fallback = shuffle(classified.length ? classified : [{
      id: "fallback",
      text: "Deutsch",
      bucket: "unlearned_blue",
      status: "unlearned_blue"
    }]);

    let fallbackIndex = 0;
    while (pool.length < WORD_COUNT) {
      pool.push(fallback[fallbackIndex % fallback.length]);
      fallbackIndex += 1;
    }

    return shuffle(pool).slice(0, WORD_COUNT);
  }

  function chooseWord(words) {
    const source = words.length ? words : wordPool;
    if (!source.length) {
      return { id: "fallback", text: "Deutsch", status: "unlearned_blue" };
    }

    const eligible = source.filter((word) => !recentIds.includes(word.id));
    const pickFrom = eligible.length ? eligible : source;
    const pick = pickFrom[Math.floor(Math.random() * pickFrom.length)];
    recentIds.push(pick.id);
    if (recentIds.length > COOLDOWN_SIZE) recentIds.shift();
    return pick;
  }

  function statusClassName(status) {
    if (status === "learned") return "is-learned";
    if (status === "active_red") return "is-active-red";
    if (status === "problem_darkred") return "is-problem-dark";
    return "";
  }

  function getCardElement() {
    const screen = document.querySelector(".group-detail-screen");
    if (!screen || screen.hidden) return null;
    return screen.querySelector(":scope > .card");
  }

  function getCardRect() {
    const card = getCardElement();
    if (!card) return null;
    const rect = card.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return null;
    return rect;
  }

  function getControlsTop() {
    const screen = document.querySelector(".group-detail-screen");
    if (!screen || screen.hidden) return window.innerHeight;
    const controls = screen.querySelector(":scope > .controls");
    if (!controls) return window.innerHeight;
    const rect = controls.getBoundingClientRect();
    if (rect.top <= 0) return window.innerHeight;
    return rect.top;
  }

  function corridorWidths(viewportWidth, cardRect) {
    const minSide = viewportWidth * CORRIDOR_SIDE_MIN;
    const maxSide = viewportWidth * CORRIDOR_SIDE_MAX;

    if (!cardRect) {
      const fallback = Math.min(maxSide, Math.max(minSide, viewportWidth * 0.15));
      return { left: fallback, right: fallback };
    }

    const leftSpace = Math.max(0, cardRect.left - CARD_ZONE_GAP);
    const rightSpace = Math.max(0, viewportWidth - cardRect.right - CARD_ZONE_GAP);
    return {
      left: Math.max(72, Math.min(leftSpace, maxSide)),
      right: Math.max(72, Math.min(rightSpace, maxSide))
    };
  }

  function pushCorridorZones(zones, side, viewportWidth, viewportHeight, rowCount, weightShare, cardRect) {
    const rowHeight = viewportHeight / rowCount;
    const isLeft = side === "left";
    const corridor = corridorWidths(viewportWidth, cardRect);
    const corridorWidth = isLeft ? corridor.left : corridor.right;
    if (corridorWidth < 72) return;

    const xMin = isLeft ? 8 : Math.max(8, viewportWidth - corridorWidth);
    const xMax = isLeft
      ? Math.max(8, corridorWidth - WORD_MAX_WIDTH * 0.28)
      : Math.max(8, viewportWidth - 8 - WORD_MAX_WIDTH * 0.28);
    const zoneWeight = weightShare / rowCount;

    for (let row = 0; row < rowCount; row += 1) {
      const yMin = rowHeight * row + 10;
      const yMax = rowHeight * (row + 1) - 10;
      zones.push({
        type: isLeft ? "corridor-left" : "corridor-right",
        column: isLeft ? 0 : 1,
        row,
        weight: zoneWeight,
        cellHeight: rowHeight,
        xMin,
        xMax: Math.max(xMin, xMax),
        yMin,
        yMax: Math.max(yMin, yMax)
      });
    }
  }

  function pushBasinZones(zones, viewportWidth, viewportHeight, cardRect) {
    const basinTop = cardRect
      ? Math.min(viewportHeight - 72, cardRect.bottom + BASIN_TOP_GAP)
      : viewportHeight * 0.58;
    const basinBottom = Math.min(viewportHeight - 8, getControlsTop() - 8);
    const basinHeight = basinBottom - basinTop;
    if (basinHeight < 64 || basinTop >= basinBottom - 24) return;

    const rowCount = basinHeight >= 180 ? 2 : 1;
    const columnCount = viewportWidth >= 1800 ? 8 : 6;
    const cellWidth = viewportWidth / columnCount;
    const cellHeight = basinHeight / rowCount;
    const zoneWeight = BASIN_ZONE_WEIGHT / (rowCount * columnCount);

    for (let row = 0; row < rowCount; row += 1) {
      for (let column = 0; column < columnCount; column += 1) {
        const cellLeft = cellWidth * column;
        const cellTop = basinTop + cellHeight * row;
        const paddingX = Math.min(18, Math.max(8, cellWidth * 0.1));
        const paddingY = Math.min(16, Math.max(8, cellHeight * 0.12));
        zones.push({
          type: "basin",
          column,
          row,
          weight: zoneWeight,
          cellHeight,
          xMin: Math.max(8, cellLeft + paddingX),
          xMax: Math.max(8, cellLeft + cellWidth - paddingX - WORD_MAX_WIDTH * 0.28),
          yMin: cellTop + paddingY,
          yMax: Math.max(cellTop + paddingY, Math.min(cellTop + cellHeight - paddingY, basinBottom - paddingY))
        });
      }
    }
  }

  function createZones() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    const cardRect = getCardRect();
    const corridorShare = 1 - BASIN_ZONE_WEIGHT;
    const corridorRowCount = 4;
    const zones = [];

    pushCorridorZones(zones, "left", viewportWidth, viewportHeight, corridorRowCount, corridorShare * 0.5, cardRect);
    pushCorridorZones(zones, "right", viewportWidth, viewportHeight, corridorRowCount, corridorShare * 0.5, cardRect);
    pushBasinZones(zones, viewportWidth, viewportHeight, cardRect);

    if (!zones.length) {
      pushCorridorZones(zones, "left", viewportWidth, viewportHeight, corridorRowCount, 0.5, null);
      pushCorridorZones(zones, "right", viewportWidth, viewportHeight, corridorRowCount, 0.5, null);
    }

    return zones;
  }

  function zoneKey(zones) {
    const cardRect = getCardRect();
    const controlsTop = Math.round(getControlsTop());
    const cardKey = cardRect
      ? `${Math.round(cardRect.left)}:${Math.round(cardRect.top)}:${Math.round(cardRect.width)}:${Math.round(cardRect.height)}`
      : "none";
    return `${window.innerWidth}x${window.innerHeight}:${cardKey}:${controlsTop}:${zones.length}`;
  }

  function assignZonesToItems(zones, count) {
    if (!zones.length || count <= 0) return [];

    const weightedZones = zones.map((zone) => ({
      zone,
      target: 0,
      weight: zone.weight > 0 ? zone.weight : 1
    }));
    const totalWeight = weightedZones.reduce((sum, entry) => sum + entry.weight, 0);

    weightedZones.forEach((entry) => {
      entry.target = Math.round((entry.weight / totalWeight) * count);
    });

    let assigned = weightedZones.reduce((sum, entry) => sum + entry.target, 0);
    while (assigned > count) {
      const entry = weightedZones.find((candidate) => candidate.target > 0);
      if (!entry) break;
      entry.target -= 1;
      assigned -= 1;
    }
    while (assigned < count) {
      const entry = weightedZones.reduce((best, candidate) => {
        if (!best) return candidate;
        const bestRatio = best.target / best.weight;
        const candidateRatio = candidate.target / candidate.weight;
        return candidateRatio < bestRatio ? candidate : best;
      }, null);
      if (!entry) break;
      entry.target += 1;
      assigned += 1;
    }

    const assignments = [];
    weightedZones.forEach((entry) => {
      for (let index = 0; index < entry.target; index += 1) {
        assignments.push(entry.zone);
      }
    });
    return shuffle(assignments);
  }

  function rebuildZoneDeck(zones) {
    zoneDeck = shuffle(zones.map((zone, index) => index));
    zoneDeckKey = zoneKey(zones);
  }

  function chooseZone(zones) {
    if (!zones.length) {
      return {
        type: "grid",
        column: 0,
        row: 0,
        columnCount: 1,
        rowCount: 1,
        cellHeight: window.innerHeight,
        xMin: 12,
        xMax: Math.max(12, window.innerWidth - WORD_MAX_WIDTH - 12),
        yMin: 0,
        yMax: window.innerHeight
      };
    }
    if (!zoneDeck.length || zoneDeckKey !== zoneKey(zones)) {
      rebuildZoneDeck(zones);
    }
    const index = zoneDeck.pop();
    if (!zoneDeck.length) rebuildZoneDeck(zones);
    return zones[index] || zones[0];
  }

  function topResetY(item) {
    const cellHeight = item.zone && item.zone.cellHeight ? item.zone.cellHeight : window.innerHeight / 4;
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
    const statusClass = statusClassName(word.status);
    item.el.className = `word-rain-word${statusClass ? ` ${statusClass}` : ""} ${tier.className}`;
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

  function setupCardObserver() {
    const card = getCardElement();
    if (card === observedCard) return;

    if (cardObserver) {
      cardObserver.disconnect();
      cardObserver = null;
    }
    observedCard = card;

    if (!card || typeof ResizeObserver === "undefined") return;

    cardObserver = new ResizeObserver(() => scheduleRefresh(120));
    cardObserver.observe(card);

    const controls = card.parentElement?.querySelector(":scope > .controls");
    if (controls) cardObserver.observe(controls);
  }

  function buildItems(words) {
    const host = createLayer();
    if (items.length !== WORD_COUNT || host.children.length !== WORD_COUNT) {
      host.textContent = "";
      items = [];
      for (let index = 0; index < WORD_COUNT; index += 1) {
        const el = document.createElement("span");
        host.appendChild(el);
        items.push({
          el,
          x: 0,
          y: 0,
          xBase: 0,
          speed: 0,
          drift: 0,
          rotation: 0,
          size: 16,
          zoneBottom: window.innerHeight + 90,
          zoneType: "grid",
          column: 0,
          spacing: 150,
          zone: null,
          text: "",
          placed: false
        });
      }
    }

    setupCardObserver();
    const zones = createZones();
    const zoneAssignments = assignZonesToItems(zones, WORD_COUNT);
    items.forEach((item) => {
      item.placed = false;
    });
    items.forEach((item, index) => {
      resetItem(item, words, false, zoneAssignments[index] || chooseZone(zones));
    });
  }

  function applyItem(item) {
    item.el.style.transform = `translate3d(${Math.round(item.x)}px, ${Math.round(item.y)}px, 0) rotate(${item.rotation}deg)`;
  }

  function animate(timestamp) {
    if (!enabled) return;
    const delta = Math.min(64, timestamp - (lastTimestamp || timestamp)) / 1000;
    lastTimestamp = timestamp;

    items.forEach((item) => {
      item.y += item.speed * delta;
      item.x += item.drift * delta;
      if (item.y > item.zoneBottom) resetItem(item, wordPool, true, item.zone);
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

  function rebuildPool(snapshot) {
    const cards = cardsForSnapshot(snapshot);
    const classified = classifyCards(
      cards.length ? cards : [{ de: "Deutsch", lv: "vāciski", level: snapshot.group || "" }],
      snapshot
    );
    wordPool = buildWeightedPool(classified);
  }

  function start(snapshot) {
    if (!isWordRainEnabled()) {
      stop();
      return;
    }

    if (!snapshot) {
      stop();
      return;
    }

    lastSnapshot = snapshot;
    rebuildPool(snapshot);

    const groupChanged = snapshot.groupKey !== lastGroupKey;
    const widthChanged = window.innerWidth !== lastLayoutWidth;
    const heightChanged = window.innerHeight !== lastLayoutHeight;
    lastGroupKey = snapshot.groupKey;
    lastLayoutWidth = window.innerWidth;
    lastLayoutHeight = window.innerHeight;

    createLayer().hidden = false;
    setupCardObserver();
    if (groupChanged || !items.length || widthChanged || heightChanged) {
      buildItems(wordPool);
    }

    enabled = true;
    if (!animationFrame) animationFrame = window.requestAnimationFrame(animate);
  }

  function refresh(snapshot) {
    if (!isWordRainEnabled()) {
      stop();
      return;
    }
    start(snapshot || lastSnapshot);
  }

  function scheduleRefresh(delay) {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => refresh(lastSnapshot), delay);
  }

  window.wordRain = {
    sync(snapshot) {
      if (!snapshot) return;
      if (!isWordRainEnabled()) {
        stop();
        return;
      }

      const groupChanged = lastGroupKey && snapshot.groupKey !== lastGroupKey;
      lastSnapshot = snapshot;
      rebuildPool(snapshot);

      if (!enabled || groupChanged) {
        lastGroupKey = snapshot.groupKey;
        lastLayoutWidth = window.innerWidth;
        lastLayoutHeight = window.innerHeight;
        createLayer().hidden = false;
        setupCardObserver();
        buildItems(wordPool);
        enabled = true;
        if (!animationFrame) animationFrame = window.requestAnimationFrame(animate);
        return;
      }

      lastGroupKey = snapshot.groupKey;
    },
    refresh(snapshot) {
      refresh(snapshot);
    }
  };

  window.addEventListener("resize", () => scheduleRefresh(180));

  if (typeof window.syncWordRain === "function") {
    window.syncWordRain();
  }
})();
