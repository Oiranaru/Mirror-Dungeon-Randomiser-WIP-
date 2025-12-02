// --- Random helpers ---
function shuffle(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

function getRandomItems(array, count) {
  return shuffle(array).slice(0, count);
}

function getRandomItem(array) {
  if (!array || array.length === 0) return null;
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// --- Data access with ownership (data.js provides these globals) ---
function getOwnedIdentitiesForSinner(sinnerId) {
  return identities.filter(function (idn) {
    return idn.sinnerId === sinnerId && isIdentityOwned(idn.id);
  });
}

function getOwnedEgosForSinner(sinnerId) {
  return egos.filter(function (ego) {
    return ego.sinnerId === sinnerId && isEgoOwned(ego.id);
  });
}

function randomizeSinners(numSinners) {
  const count = Math.min(numSinners, sinners.length);
  return getRandomItems(sinners, count);
}

function getSinnerOrderMap() {
  const map = {};
  for (let i = 0; i < sinners.length; i++) {
    const s = sinners[i];
    map[s.id] = i;
  }
  return map;
}

// Group EGOs by rank
function groupEgosByRankForSinner(sinnerId) {
  const sinnerEgos = getOwnedEgosForSinner(sinnerId);
  const groups = {};
  for (let i = 0; i < sinnerEgos.length; i++) {
    const ego = sinnerEgos[i];
    const rank = ego.rank || "UNKNOWN";
    if (!groups[rank]) {
      groups[rank] = [];
    }
    groups[rank].push(ego);
  }
  return groups;
}

// One Identity per Sinner, 1–4 EGOs per Sinner, max 1 EGO per rank
function randomizeSetupForSinners(chosenSinners, egosPerSinner) {
  const desiredSlots = Math.max(1, Math.min(4, egosPerSinner));
  // ...

  return chosenSinners.map(function (sinner) {
    // 1) Identity
    const availableIdentities = getOwnedIdentitiesForSinner(sinner.id);
    const chosenIdentity = getRandomItem(availableIdentities);

    // 2) EGOs
    const groups = groupEgosByRankForSinner(sinner.id);
    const allRanks = Object.keys(groups);
    const numRanksToUse = Math.min(desiredSlots, allRanks.length);
    const chosenRanks = getRandomItems(allRanks, numRanksToUse);

    const chosenEgos = [];
    for (let i = 0; i < chosenRanks.length; i++) {
      const rank = chosenRanks[i];
      const options = groups[rank];
      const picked = getRandomItem(options);
      if (picked) {
        chosenEgos.push(picked);
      }
    }

    return {
      sinner: sinner,
      identity: chosenIdentity,
      egos: chosenEgos
    };
  });
}

// --- Ownership persistence (localStorage) ---
function loadOwnershipFromStorage() {
  try {
    const savedIds = localStorage.getItem("ownedIdentities");
    const savedEgos = localStorage.getItem("ownedEgos");

    if (savedIds) {
      const arrIds = JSON.parse(savedIds);
      userOwnedIdentityIds = new Set(arrIds);
    }
    if (savedEgos) {
      const arrEgos = JSON.parse(savedEgos);
      userOwnedEgoIds = new Set(arrEgos);
    }
  } catch (err) {
    console.warn("Failed to load ownership from storage:", err);
  }
}

function saveOwnershipToStorage() {
  try {
    const idsArray = Array.from(userOwnedIdentityIds);
    const egosArray = Array.from(userOwnedEgoIds);
    localStorage.setItem("ownedIdentities", JSON.stringify(idsArray));
    localStorage.setItem("ownedEgos", JSON.stringify(egosArray));
  } catch (err) {
    console.warn("Failed to save ownership to storage:", err);
  }
}

function loadRunPresetsFromStorage() {
  try {
    const raw = localStorage.getItem("mirrorRunPresets");
    if (!raw) {
      savedRunPresets = [];
      return;
    }
    const parsed = JSON.parse(raw);
    savedRunPresets = Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    savedRunPresets = [];
  }
}

function saveRunPresetsToStorage() {
  try {
    localStorage.setItem("mirrorRunPresets", JSON.stringify(savedRunPresets));
  } catch (e) {
    // ignore
  }
}

function gatherCurrentRunSettings() {
  // true = using 1–11 Sinner limit; false = "all 12" mode
  const useNumLimit = !!(randomizeNumSinnersToggle && randomizeNumSinnersToggle.checked);
  const num = parseInt(numSinnersInput.value, 10) || 11;

  let egosPer = parseInt(egosPerSinnerInput.value, 10) || 3;
  if (egosPer < 1) egosPer = 1;
  if (egosPer > 4) egosPer = 4;

  const randomOrder = !!(randomizeOrderCheckbox && randomizeOrderCheckbox.checked);
  const egoRankFilterOn = !!(randomizeEgoRanksToggle && randomizeEgoRanksToggle.checked);
  const allowedRanks = getAllowedEgoRanks();

  const manualIds = getManuallySelectedSinners();
  const manualChoiceEnabled = !!(useManualSinnerSelection && useManualSinnerSelection.checked);

  // NEW: shop rule checkboxes
  const giftRuleEnabled =
    !!(enableGiftShopRuleCheckbox && enableGiftShopRuleCheckbox.checked);
  const giftNoReacquireEnabled =
    !!(enableGiftNoReacquireRuleCheckbox && enableGiftNoReacquireRuleCheckbox.checked);
  const randomiseSinnersEachShopEnabled =
    !!(enableRandomiseSinnersEachShopCheckbox && enableRandomiseSinnersEachShopCheckbox.checked);

  return {
    randomizeNumSinners: useNumLimit,
    numSinners: num,
    egosPerSinner: egosPer,
    randomizeOrder: randomOrder,
    egoRankFilterOn: egoRankFilterOn,
    allowedEgoRanks: allowedRanks,
    manualSinnerIds: manualIds,
    useManualSinnerSelection: manualChoiceEnabled,

    // NEW: stored as part of the preset
    giftRuleEnabled: giftRuleEnabled,
    giftNoReacquireEnabled: giftNoReacquireEnabled,
    randomiseSinnersEachShopEnabled: randomiseSinnersEachShopEnabled
  };
}

function applyRunSettingsPreset(settings) {
  if (!settings) return;

  // --- Number of Sinners toggle + value ---
  if (randomizeNumSinnersToggle) {
    randomizeNumSinnersToggle.checked = !!settings.randomizeNumSinners;
  }

  if (typeof settings.numSinners === "number" && numSinnersInput) {
    numSinnersInput.value = String(settings.numSinners);
  }

  // Make sure manual block / dropdown enabled/disabled correctly
  if (randomizeNumSinnersToggle) {
    randomizeNumSinnersToggle.dispatchEvent(new Event("change"));
  }

  // --- EGOs per Sinner ---
  if (typeof settings.egosPerSinner === "number" && egosPerSinnerInput) {
    egosPerSinnerInput.value = String(settings.egosPerSinner);
  }

  // --- Deployment order ---
  if (randomizeOrderCheckbox && typeof settings.randomizeOrder === "boolean") {
    randomizeOrderCheckbox.checked = settings.randomizeOrder;
  }

  // --- EGO rank filter toggle ---
  if (randomizeEgoRanksToggle) {
    randomizeEgoRanksToggle.checked = !!settings.egoRankFilterOn;
    randomizeEgoRanksToggle.dispatchEvent(new Event("change"));
  }

  // --- Manual Sinner selection list ---
  const manualIds = settings.manualSinnerIds || [];
  const manualBoxes = document.querySelectorAll(".manual-sinner-checkbox");
  manualBoxes.forEach(function (box) {
    box.checked = manualIds.indexOf(box.value) !== -1;
  });

  // --- EGO rank checkboxes ---
  const ranks = settings.allowedEgoRanks || [];
  const rankBoxes = document.querySelectorAll(
    "#egoRankFilterContainer input[type='checkbox'][data-ego-rank]"
  );
  rankBoxes.forEach(function (box) {
    if (box.disabled || !box.dataset.egoRank) return;
    box.checked =
      ranks.length === 0 ? true : ranks.indexOf(box.dataset.egoRank) !== -1;
  });

  // Manual selection master toggle
  if (useManualSinnerSelection && typeof settings.useManualSinnerSelection === "boolean") {
    useManualSinnerSelection.checked = settings.useManualSinnerSelection;
  }

  // --- NEW: shop rule checkboxes ---
  if (enableGiftShopRuleCheckbox && typeof settings.giftRuleEnabled === "boolean") {
    enableGiftShopRuleCheckbox.checked = settings.giftRuleEnabled;
  }

  if (enableGiftNoReacquireRuleCheckbox &&
      typeof settings.giftNoReacquireEnabled === "boolean") {
    enableGiftNoReacquireRuleCheckbox.checked = settings.giftNoReacquireEnabled;
  }

  if (enableRandomiseSinnersEachShopCheckbox &&
      typeof settings.randomiseSinnersEachShopEnabled === "boolean") {
    enableRandomiseSinnersEachShopCheckbox.checked =
      settings.randomiseSinnersEachShopEnabled;
  }

  // Keep dependent UI for gift rules correct (disabling second checkbox etc)
  updateGiftRuleDependents();

  // Final tidy-up for manual selection helper text & limits
  updateManualSinnerHelpText();
  enforceManualSinnerSelectionLimit();
}

function renderRunPresetsList() {
  const container = document.getElementById("savedRunPresetsContainer");
  if (!container) return;

  if (!savedRunPresets || savedRunPresets.length === 0) {
    container.textContent = "No presets saved yet.";
    return;
  }

  container.innerHTML = "";

  savedRunPresets.forEach(function (preset, index) {
    const row = document.createElement("div");
    row.className = "run-preset-row";

    const nameSpan = document.createElement("span");
    nameSpan.className = "run-preset-name";
    nameSpan.textContent = preset.name || ("Preset " + (index + 1));
    row.appendChild(nameSpan);

    const actions = document.createElement("div");
    actions.className = "run-preset-actions";

    // Rename
    const renameBtn = document.createElement("button");
    renameBtn.textContent = "Rename";
    renameBtn.className = "btn-secondary";
    renameBtn.addEventListener("click", function () {
      const currentName = preset.name || ("Preset " + (index + 1));
      const input = window.prompt("Rename this preset:", currentName);
      if (input === null) return; // cancelled

      const newName = input.trim();
      if (!newName) return;

      preset.name = newName;
      saveRunPresetsToStorage();
      renderRunPresetsList();
    });
    actions.appendChild(renameBtn);

    // Load
const loadBtn = document.createElement("button");
loadBtn.textContent = "Load";
loadBtn.className = "btn-secondary";
loadBtn.addEventListener("click", function () {
  const displayName = preset.name || ("Preset " + (index + 1));

  const confirmed = window.confirm(
    'Load run preset "' + displayName + '"?\n\n' +
    "This will overwrite your current run setup options."
  );
  if (!confirmed) return;

  // Apply settings to the run setup UI
  applyRunSettingsPreset(preset.settings);

  // Scroll back up to the Run setup section so the user can see the change
  const runSetupSection = document.getElementById("runSetupSection");
  if (runSetupSection && typeof runSetupSection.scrollIntoView === "function") {
    runSetupSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});
actions.appendChild(loadBtn);

    // Delete
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "btn-danger";
    deleteBtn.addEventListener("click", function () {
      const confirmed = window.confirm("Delete this run preset?");
      if (!confirmed) return;
      savedRunPresets.splice(index, 1);
      saveRunPresetsToStorage();
      renderRunPresetsList();
    });
    actions.appendChild(deleteBtn);

    row.appendChild(actions);
    container.appendChild(row);
  });
}

function passesKeywordFilter(entry) {
  // No keyword filters -> everything passes
  if (!entry || activeKeywordFilters.size === 0) {
    return true;
  }

  const kws = entry.keywords || [];
  if (!kws || kws.length === 0) {
    // If something somehow has no keywords, hide it when filters are active
    return false;
  }

  for (let i = 0; i < kws.length; i++) {
    const kw = (kws[i] || "").toLowerCase();
    if (activeKeywordFilters.has(kw)) {
      return true; // any match is enough
    }
  }

  return false;
}

function updateShopRuleBadges() {
  const row = document.getElementById("shopRuleBadges");
  const chipGift = document.getElementById("chipGiftRule");
  const chipNoRe = document.getElementById("chipNoReobtain");
  const chipSinners = document.getElementById("chipShopSinners");

  if (!row) return;

  const any =
    egoGiftRuleEnabled ||
    egoGiftNoReacquireRuleEnabled ||
    randomiseSinnersEachShopEnabled;

  row.classList.toggle("hidden", !any);

  if (chipGift) {
    chipGift.classList.toggle("hidden", !egoGiftRuleEnabled);
  }
  if (chipNoRe) {
    chipNoRe.classList.toggle(
      "hidden",
      !(egoGiftRuleEnabled && egoGiftNoReacquireRuleEnabled)
    );
  }
  if (chipSinners) {
    chipSinners.classList.toggle("hidden", !randomiseSinnersEachShopEnabled);
  }
}

function updateEgoGiftActiveFiltersText() {
  const el = document.getElementById("egoGiftActiveFiltersText");
  if (!el) return;

  if (activeGiftKeywordFilters.size === 0) {
    el.textContent = "No gift keyword filters active.";
  } else {
    const arr = Array.from(activeGiftKeywordFilters).map(function (k) {
      return k.charAt(0).toUpperCase() + k.slice(1);
    });
    el.textContent = "Active filters: " + arr.join(", ");
  }
}

function updateActiveKeywordFiltersDisplay() {
  const display = document.getElementById("activeKeywordFiltersDisplay");
  if (!display) return;

  if (activeKeywordFilters.size === 0) {
    display.textContent = "No keyword filters active";
  } else {
    const arr = Array.from(activeKeywordFilters).map(function (k) {
      return k.charAt(0).toUpperCase() + k.slice(1);
    });
    display.textContent = "Active keyword filters: " + arr.join(", ");
  }
}

function setupKeywordFilterCheckboxes() {
  const container = document.getElementById("keywordFilters");
  if (!container) return;

  const boxes = container.querySelectorAll("input[type='checkbox'][data-keyword]");
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    const kw = (box.dataset.keyword || "").toLowerCase();
    if (!kw) continue;

    box.addEventListener("change", function () {
      if (box.checked) {
        activeKeywordFilters.add(kw);
      } else {
        activeKeywordFilters.delete(kw);
      }
      updateActiveKeywordFiltersDisplay();
      buildOwnershipUI();
    });
  }
}

function giftMatchesFilters(gift) {
  if (!gift) return false;

  // Search text
  const search = egoGiftSearchInput
    ? egoGiftSearchInput.value.trim().toLowerCase()
    : "";
  if (search) {
    const name = (gift.name || "").toLowerCase();
    if (!name.includes(search)) {
      return false;
    }
  }

  // Keyword filters
  if (activeGiftKeywordFilters.size > 0) {
    const kws = (gift.keywords || []).map(function (k) {
      return (k || "").toLowerCase();
    });

    let anyMatch = false;
    for (const kw of kws) {
      if (activeGiftKeywordFilters.has(kw)) {
        anyMatch = true;
        break;
      }
    }
    if (!anyMatch) {
      return false;
    }
  }

  // Hide banned gifts from the "available" list; they are shown in a separate column
  if (bannedGiftIdsForRun.has(gift.id)) {
    return false;
  }

  return true;
}

// --- EGO Gift grouping helpers (by keyword) ---
const GIFT_KEYWORD_ORDER = [
  "burn",
  "bleed",
  "tremor",
  "sinking",
  "rupture",
  "poise",
  "charge",
  "slash",
  "blunt",
  "pierce",
  "keywordless"
];

function normaliseGiftKeyword(kw) {
  return (kw || "").toLowerCase();
}

function getPrimaryKeywordForGift(gift) {
  if (!gift) return "keywordless";

  const kws = Array.isArray(gift.keywords)
    ? gift.keywords.map(normaliseGiftKeyword)
    : [];

  if (kws.length === 0) {
    return "keywordless";
  }

  // Try to match one of our known categories in priority order
  for (let i = 0; i < GIFT_KEYWORD_ORDER.length - 1; i++) {
    const key = GIFT_KEYWORD_ORDER[i];
    if (kws.indexOf(key) !== -1) {
      return key;
    }
  }

  // Fallback: first keyword, or keywordless
  return kws[0] || "keywordless";
}

function getGiftKeywordLabel(keyword) {
  if (!keyword || keyword === "keywordless") return "Keywordless";
  return keyword.charAt(0).toUpperCase() + keyword.slice(1);
}

/**
 * Render a list of gifts into a container, grouped into collapsible
 * sections by primary keyword.
 * mode: "available" | "selected" | "banned"
 */
function renderGiftListGroupedByKeyword(container, gifts, mode) {
  if (!container) return;

  container.innerHTML = "";

  if (!gifts || gifts.length === 0) {
    const p = document.createElement("p");
    p.className = "small-note";
    p.textContent = "No EGO Gifts in this list.";
    container.appendChild(p);
    return;
  }

  // Group gifts by primary keyword
  const groups = {};
  for (let i = 0; i < gifts.length; i++) {
    const gift = gifts[i];
    const key = getPrimaryKeywordForGift(gift);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(gift);
  }

  GIFT_KEYWORD_ORDER.forEach(function (keyword) {
    const list = groups[keyword];
    if (!list || list.length === 0) return;

    list.sort(function (a, b) {
      return a.name.localeCompare(b.name);
    });

    const block = document.createElement("div");
    block.className = "gift-category-block";

    const header = document.createElement("div");
    header.className = "gift-category-header";

    const nameSpan = document.createElement("span");
    nameSpan.textContent =
      getGiftKeywordLabel(keyword) + " (" + list.length + ")";

    const toggleSpan = document.createElement("span");
    toggleSpan.className = "gift-category-toggle";
    toggleSpan.textContent = "[-]";

    header.appendChild(nameSpan);
    header.appendChild(toggleSpan);

    const body = document.createElement("div");
    body.className = "gift-category-body";

    list.forEach(function (gift) {
      if (mode === "banned") {
        // Non-clickable rows for banned gifts
        const row = document.createElement("div");
        row.className = "gift-row banned";

        if (gift.img) {
          const img = document.createElement("img");
          img.src = gift.img;
          img.alt = gift.name;
          img.className = "gift-icon";
          row.appendChild(img);
        }

        const textSpan = document.createElement("span");
        textSpan.className = "gift-name";
        textSpan.textContent = gift.name;
        row.appendChild(textSpan);

        body.appendChild(row);
      } else {
        // Clickable buttons for available / selected
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className =
          "gift-row" + (mode === "selected" ? " selected" : "");

        if (gift.img) {
          const img = document.createElement("img");
          img.src = gift.img;
          img.alt = gift.name;
          img.className = "gift-icon";
          btn.appendChild(img);
        }

        const textSpan = document.createElement("span");
        textSpan.className = "gift-name";
        textSpan.textContent = gift.name;
        btn.appendChild(textSpan);

        if (mode === "available") {
          btn.title = "Click to add to current floor";
          btn.addEventListener("click", function () {
            currentFloorGiftIds.add(gift.id);
            renderEgoGiftLists();
          });
        } else if (mode === "selected") {
          btn.title = "Click to remove from current floor";
          btn.addEventListener("click", function () {
            currentFloorGiftIds.delete(gift.id);
            renderEgoGiftLists();
          });
        }

        body.appendChild(btn);
      }
    });

    header.addEventListener("click", function () {
      const isHidden = body.classList.contains("hidden");
      if (isHidden) {
        body.classList.remove("hidden");
        toggleSpan.textContent = "[-]";
      } else {
        body.classList.add("hidden");
        toggleSpan.textContent = "[+]";
      }
    });

    block.appendChild(header);
    block.appendChild(body);
    container.appendChild(block);
  });
}

// Order to display gift keyword groups
const EGO_GIFT_KEYWORD_ORDER = [
  "burn",
  "bleed",
  "tremor",
  "sinking",
  "rupture",
  "poise",
  "charge",
  "slash",
  "blunt",
  "pierce",
  "keywordless"
];

function getPrimaryGiftKeyword(gift) {
  const kws = gift && gift.keywords ? gift.keywords : null;
  if (kws && kws.length > 0) {
    return (kws[0] || "").toLowerCase();
  }
  return "keywordless";
}

function getKeywordLabel(kw) {
  if (!kw) return "";
  if (kw === "keywordless") return "Keywordless";
  return kw.charAt(0).toUpperCase() + kw.slice(1);
}

// Same as giftMatchesFilters, but WITHOUT the banned / available logic.
// Used for the "selected" and "banned" columns.
function giftMatchesSearchAndKeywordFilters(gift) {
  if (!gift) return false;

  const search = egoGiftSearchInput
    ? egoGiftSearchInput.value.trim().toLowerCase()
    : "";
  if (search) {
    const name = (gift.name || "").toLowerCase();
    if (!name.includes(search)) {
      return false;
    }
  }

  if (activeGiftKeywordFilters.size > 0) {
    const kws = (gift.keywords || []).map(function (k) {
      return (k || "").toLowerCase();
    });

    let anyMatch = false;
    for (let i = 0; i < kws.length; i++) {
      if (activeGiftKeywordFilters.has(kws[i])) {
        anyMatch = true;
        break;
      }
    }
    if (!anyMatch) return false;
  }

  return true;
}

function renderEgoGiftLists() {
  if (!egoGiftAvailableList || !egoGiftSelectedList) return;

  egoGiftAvailableList.innerHTML = "";
  egoGiftSelectedList.innerHTML = "";
  if (egoGiftBannedList) {
    egoGiftBannedList.innerHTML = "";
  }

  if (!Array.isArray(egoGifts)) {
    return; // safety if data not loaded
  }

  const search = egoGiftSearchInput
    ? egoGiftSearchInput.value.trim().toLowerCase()
    : "";
  const hasSearch = !!search;

  // Build groups: available + banned, and a flat list for "selected this floor"
  const availableGroups = {};
  const bannedGroups = {};
  const selectedList = [];

  egoGifts.forEach(function (gift) {
    const primaryKeyword = getPrimaryGiftKeyword(gift);
    const isSelected = currentFloorGiftIds.has(gift.id);
    const isBanned = bannedGiftIdsForRun.has(gift.id);

    // Selected column: gifts you currently have on this floor
    if (isSelected && giftMatchesSearchAndKeywordFilters(gift)) {
      selectedList.push(gift);
    }

    // Banned column: previously sold gifts
    if (isBanned && giftMatchesSearchAndKeywordFilters(gift)) {
      if (!bannedGroups[primaryKeyword]) {
        bannedGroups[primaryKeyword] = [];
      }
      bannedGroups[primaryKeyword].push(gift);
    }

    // Available column: not selected, not banned, passes normal filters
    // (uses existing giftMatchesFilters, which already respects search,
    // keyword filters, and hides banned gifts)
    if (!isSelected && !isBanned && giftMatchesFilters(gift)) {
      if (!availableGroups[primaryKeyword]) {
        availableGroups[primaryKeyword] = [];
      }
      availableGroups[primaryKeyword].push(gift);
    }
  });

  // Helper to render keyword-grouped columns (Available / Banned)
  function renderGroupedColumn(targetEl, groups, columnKeyPrefix, clickHandler, extraRowClass) {
    EGO_GIFT_KEYWORD_ORDER.forEach(function (kw) {
      const gifts = groups[kw];
      if (!gifts || gifts.length === 0) return;

      gifts.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      });

      const stateKey = columnKeyPrefix + "|" + kw;

      // Decide expanded/collapsed state:
      // - First time (no entry in egoGiftGroupState): default to collapsed
      // - While searching: force open groups that have matches and remember that
      // - Otherwise: use whatever is stored in egoGiftGroupState
      let expanded;
      if (hasSearch) {
        expanded = true;
        egoGiftGroupState[stateKey] = true;
      } else if (Object.prototype.hasOwnProperty.call(egoGiftGroupState, stateKey)) {
        expanded = !!egoGiftGroupState[stateKey];
      } else {
        expanded = false; // default collapsed
        egoGiftGroupState[stateKey] = expanded;
      }

      const groupWrapper = document.createElement("div");
      groupWrapper.className = "ego-gift-group";

      const header = document.createElement("div");
      header.className = "ego-gift-group-header";

      const titleSpan = document.createElement("span");
      titleSpan.textContent = getKeywordLabel(kw) + " (" + gifts.length + ")";
      header.appendChild(titleSpan);

      const toggleSpan = document.createElement("span");
      toggleSpan.className = "ego-gift-group-toggle";
      toggleSpan.textContent = expanded ? "[-]" : "[+]";
      header.appendChild(toggleSpan);

      const body = document.createElement("div");
      body.className = "ego-gift-group-body";
      if (!expanded) {
        body.style.display = "none";
      }

      gifts.forEach(function (gift) {
        const row = document.createElement(clickHandler ? "button" : "div");
        if (clickHandler) {
          row.type = "button";
        }
        row.className = "gift-row" + (extraRowClass ? " " + extraRowClass : "");
        row.title = gift.name;

        if (gift.img) {
          const img = document.createElement("img");
          img.src = gift.img;
          img.alt = gift.name;
          img.className = "gift-icon";
          row.appendChild(img);
        }

        const label = document.createElement("span");
        label.textContent = gift.name;
        row.appendChild(label);

        if (clickHandler) {
          row.addEventListener("click", function () {
            clickHandler(gift);
          });
        }

        body.appendChild(row);
      });

      header.addEventListener("click", function () {
        const current = !!egoGiftGroupState[stateKey];
        const newVal = !current;
        egoGiftGroupState[stateKey] = newVal;
        body.style.display = newVal ? "" : "none";
        toggleSpan.textContent = newVal ? "[-]" : "[+]";
      });

      groupWrapper.appendChild(header);
      groupWrapper.appendChild(body);
      targetEl.appendChild(groupWrapper);
    });
  }

  // 1) Available EGO Gifts (clickable -> move to "current floor")
  renderGroupedColumn(
    egoGiftAvailableList,
    availableGroups,
    "avail",
    function (gift) {
      currentFloorGiftIds.add(gift.id);
      renderEgoGiftLists();
    },
    ""
  );

  // 2) Currently selected this floor (flat list, no groups)
  const selectedSorted = selectedList.sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });

  selectedSorted.forEach(function (gift) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "gift-row selected";
    btn.textContent = "";
    btn.title = "Click to remove from current floor";

    if (gift.img) {
      const img = document.createElement("img");
      img.src = gift.img;
      img.alt = gift.name;
      img.className = "gift-icon";
      btn.appendChild(img);
    }

    const label = document.createElement("span");
    label.textContent = gift.name;
    btn.appendChild(label);

    btn.addEventListener("click", function () {
      currentFloorGiftIds.delete(gift.id);
      renderEgoGiftLists();
    });

    egoGiftSelectedList.appendChild(btn);
  });

  // 3) Locked / previously sold this run (grouped, not clickable)
  if (egoGiftBannedList) {
    renderGroupedColumn(
      egoGiftBannedList,
      bannedGroups,
      "banned",
      null,
      "banned"
    );
  }
}

// Build Ownership Lists
function buildOwnershipUI() {
  const container = document.getElementById("ownershipContainer");
  if (!container) return;

  container.innerHTML = "";

  for (let s = 0; s < sinners.length; s++) {
    const sinner = sinners[s];
    const sinnerId = sinner.id;
    const sinnerName = sinner.name;

    const identitiesForSinner = sinnerIdentities[sinnerId] || [];
    const egosForSinner = sinnerEgos[sinnerId] || [];

    const block = document.createElement("div");
    block.className = "sinner-block";

    // --- HEADER (clickable, collapses/expands) ---
    const header = document.createElement("div");
    header.className = "sinner-header";

    const nameSpan = document.createElement("span");
    nameSpan.className = "sinner-header-name";
    nameSpan.textContent = sinnerName;

    const toggleSpan = document.createElement("span");
    toggleSpan.className = "sinner-header-toggle";
    toggleSpan.textContent = "[+]"; // collapsed by default

    header.appendChild(nameSpan);
    header.appendChild(toggleSpan);
    block.appendChild(header);

    // --- BODY (starts hidden, contains IDs & EGOs) ---
    const body = document.createElement("div");
    body.className = "sinner-body hidden";

    // Identities
    const idsHeader = document.createElement("h4");
    idsHeader.textContent = "Identities";
    body.appendChild(idsHeader);

    if (identitiesForSinner.length === 0) {
      const noneText = document.createElement("p");
      noneText.textContent = "No identities defined.";
      body.appendChild(noneText);
    } else {
      let anyIdShown = false;

      for (let i = 0; i < identitiesForSinner.length; i++) {
        const idn = identitiesForSinner[i];

        // Keyword filter
        if (!passesKeywordFilter(idn)) {
          continue;
        }
        anyIdShown = true;

        const label = document.createElement("label");
        label.className = "ownership-item";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.dataset.type = "identity";
        checkbox.dataset.id = idn.id;
        checkbox.checked = isIdentityOwned(idn.id);

        checkbox.addEventListener("change", function () {
          if (checkbox.checked) {
            userOwnedIdentityIds.add(idn.id);
          } else {
            if (!baseIdentityIds.has(idn.id)) {
              userOwnedIdentityIds.delete(idn.id);
            }
          }
          saveOwnershipToStorage();
        });

        label.appendChild(checkbox);

        if (idn.img) {
          const img = document.createElement("img");
          img.src = idn.img;
          img.alt = idn.name;
          label.appendChild(img);
        }

        const textSpan = document.createElement("span");
        textSpan.textContent = idn.name;
        label.appendChild(textSpan);

        body.appendChild(label);
      }

      if (!anyIdShown) {
        const noneMatch = document.createElement("p");
        noneMatch.textContent = "No identities match current keyword filters.";
        body.appendChild(noneMatch);
      }
    }

    // EGOs
    const egosHeader = document.createElement("h4");
    egosHeader.textContent = "EGOs";
    body.appendChild(egosHeader);

    if (egosForSinner.length === 0) {
      const noneEgo = document.createElement("p");
      noneEgo.textContent = "No EGOs defined.";
      body.appendChild(noneEgo);
    } else {
      let anyEgoShown = false;

      for (let j = 0; j < egosForSinner.length; j++) {
        const ego = egosForSinner[j];

        // Keyword filter
        if (!passesKeywordFilter(ego)) {
          continue;
        }
        anyEgoShown = true;

        const labelEgo = document.createElement("label");
        labelEgo.className = "ownership-item";

        const checkboxEgo = document.createElement("input");
        checkboxEgo.type = "checkbox";
        checkboxEgo.dataset.type = "ego";
        checkboxEgo.dataset.id = ego.id;
        checkboxEgo.checked = isEgoOwned(ego.id);

        checkboxEgo.addEventListener("change", function () {
          if (checkboxEgo.checked) {
            userOwnedEgoIds.add(ego.id);
          } else {
            if (!baseEgoIds.has(ego.id)) {
              userOwnedEgoIds.delete(ego.id);
            }
          }
          saveOwnershipToStorage();
        });

        labelEgo.appendChild(checkboxEgo);

        if (ego.img) {
          const imgEgo = document.createElement("img");
          imgEgo.src = ego.img;
          imgEgo.alt = ego.name;
          labelEgo.appendChild(imgEgo);
        }

        const textSpanEgo = document.createElement("span");
        textSpanEgo.textContent = "[" + ego.rank + "] " + ego.name;
        labelEgo.appendChild(textSpanEgo);

        body.appendChild(labelEgo);
      }

      if (!anyEgoShown) {
        const noneMatchEgo = document.createElement("p");
        noneMatchEgo.textContent = "No EGOs match current keyword filters.";
        body.appendChild(noneMatchEgo);
      }
    }

    block.appendChild(body);

    // Toggle collapse/expand on header click
    header.addEventListener("click", function () {
      const isHidden = body.classList.contains("hidden");
      if (isHidden) {
        body.classList.remove("hidden");
        toggleSpan.textContent = "[-]";
      } else {
        body.classList.add("hidden");
        toggleSpan.textContent = "[+]";
      }
    });

    container.appendChild(block);
  }
}

// --- Identity selection for a Sinner (one per run) ---
function pickRandomIdentityForSinner(sinnerId) {
  const allIds = sinnerIdentities[sinnerId] || [];

  // Only identities the user owns
  const owned = allIds.filter(function (idn) {
    return isIdentityOwned(idn.id);
  });

  if (owned.length === 0) {
    // Fallback: base identity for that Sinner, if flagged
    const base = allIds.find(function (idn) { return idn.isBase; });
    if (base) return base;

    // Last-ditch fallback: first defined identity or null
    return allIds[0] || null;
  }

  const index = Math.floor(Math.random() * owned.length);
  return owned[index];
}

// --- EGO selection with rank filter & forced ZAYIN, max 1 per rank ---
function pickRandomEgosForSinner(sinnerId, egosPerSinner, allowedRanks) {
  const allEgos = sinnerEgos[sinnerId] || [];

  // Only EGOs the user owns
  const ownedEgos = allEgos.filter(function (ego) {
    return isEgoOwned(ego.id);
  });

  if (ownedEgos.length === 0) {
    return [];
  }

  const allowedRankSet = allowedRanks ? new Set(allowedRanks) : null;

  // Group owned EGOs by rank
  const egosByRank = {};
  for (let i = 0; i < ownedEgos.length; i++) {
    const ego = ownedEgos[i];
    const rank = ego.rank || "UNKNOWN";
    if (!egosByRank[rank]) {
      egosByRank[rank] = [];
    }
    egosByRank[rank].push(ego);
  }

  const result = [];
  const usedRanks = new Set();

  // 1) Always equip a ZAYIN if possible
  if (egosByRank["ZAYIN"] && egosByRank["ZAYIN"].length > 0) {
    const zList = egosByRank["ZAYIN"];

    if (allowedRankSet && !allowedRankSet.has("ZAYIN")) {
      // Rank filter ON and ZAYIN "not allowed":
      // still force a base ZAYIN (or the first ZAYIN) without randomising its rank.
      const baseZayin = zList.find(function (ego) { return ego.isBase; });
      result.push(baseZayin || zList[0]);
    } else {
      // ZAYIN can be randomised: pick a random ZAYIN
      const zIndex = Math.floor(Math.random() * zList.length);
      result.push(zList[zIndex]);
    }

    usedRanks.add("ZAYIN");
  }

  // If we only needed 1 EGO total, we're done
  if (result.length >= egosPerSinner) {
    return result;
  }

  // 2) Build a list of *other* ranks we can use
  let candidateRanks = Object.keys(egosByRank).filter(function (rank) {
    return rank !== "ZAYIN";
  });

  if (allowedRankSet) {
    candidateRanks = candidateRanks.filter(function (rank) {
      return allowedRankSet.has(rank);
    });
  }

  // Shuffle ranks so we pick a random subset of ranks
  candidateRanks = shuffle(candidateRanks);

  // 3) Pick at most one EGO per remaining rank
  for (let i = 0; i < candidateRanks.length && result.length < egosPerSinner; i++) {
    const rank = candidateRanks[i];
    if (usedRanks.has(rank)) {
      continue; // safety, though it shouldn't happen
    }

    const list = egosByRank[rank];
    if (!list || list.length === 0) {
      continue;
    }

    const idx = Math.floor(Math.random() * list.length);
    result.push(list[idx]);
    usedRanks.add(rank);
  }

  // Note: if there aren't enough distinct ranks owned, you'll get fewer
  // EGOs than requested – which matches in-game limitations.
  return result;
}

function buildRunSetupSinnerCheckboxes() {
  const manualContainer = document.getElementById("manualSinnerCheckboxes");
  if (!manualContainer) return;

  manualContainer.innerHTML = "";

  for (let i = 0; i < sinners.length; i++) {
    const sinner = sinners[i];

    // Manual selection (only active when "useManualSinnerSelection" is checked)
    const labelManual = document.createElement("label");
    labelManual.className = "sinner-select-item";

    const cbManual = document.createElement("input");
    cbManual.type = "checkbox";
    cbManual.value = sinner.id;
    cbManual.className = "manual-sinner-checkbox";
    cbManual.checked = false;
    cbManual.disabled = true;
    cbManual.addEventListener("change", function () {
      enforceManualSinnerSelectionLimit();
    });

    labelManual.appendChild(cbManual);
    labelManual.appendChild(document.createTextNode(sinner.name));

    manualContainer.appendChild(labelManual);
  }
}

function buildShopSinnerCheckboxes() {
  const container = document.getElementById("shopSinnerSelect");
  if (!container) return;

  container.innerHTML = "";

  for (let i = 0; i < sinners.length; i++) {
    const sinner = sinners[i];

    const label = document.createElement("label");
    label.className = "sinner-select-item";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.value = sinner.id;
    cb.className = "shop-sinner-checkbox";

    cb.addEventListener("change", function () {
      enforceShopSinnerSelectionLimit();
    });

    label.appendChild(cb);
    label.appendChild(document.createTextNode(sinner.name));

    container.appendChild(label);
  }

  enforceShopSinnerSelectionLimit();
}

function enforceShopSinnerSelectionLimit() {
  const boxes = document.querySelectorAll(".shop-sinner-checkbox");
  if (!boxes.length || !shopNumSinnersSelect) return;

  const limit = parseInt(shopNumSinnersSelect.value, 10) || 1;
  let checkedCount = 0;

  boxes.forEach(function (box) {
    if (box.checked) checkedCount++;
  });

  boxes.forEach(function (box) {
    if (box.checked) {
      box.disabled = false;
    } else {
      box.disabled = checkedCount >= limit;
    }
  });

  const limitText = document.getElementById("shopSinnerLimitText");
  if (limitText) {
    limitText.textContent = String(limit);
  }

    const hintEl = document.getElementById("shopSinnerHint");
  if (hintEl) {
    if (checkedCount === 0) {
      hintEl.textContent =
        " You haven't selected anyone – the randomiser will pick all " +
        limit +
        " Sinners at random.";
    } else if (checkedCount < limit) {
      hintEl.textContent =
        " You picked " +
        checkedCount +
        " Sinner(s); " +
        (limit - checkedCount) +
        " more will be chosen at random.";
    } else {
      hintEl.textContent =
        " All " + limit + " Sinners will be re-randomised as selected.";
    }
  }
}

function getManuallySelectedSinners() {
  const boxes = document.querySelectorAll(".manual-sinner-checkbox");
  const result = [];
  boxes.forEach(function (box) {
    if (box.checked) {
      result.push(box.value);
    }
  });
  return result;
}

// Shop: get manually selected Sinners (Yi Sang, Faust, etc.)
function getShopSelectedSinnerIds() {
  const boxes = document.querySelectorAll(".shop-sinner-checkbox");
  const ids = [];
  boxes.forEach(function (box) {
    if (box.checked) {
      ids.push(box.value);
    }
  });
  return ids;
}

function updateManualSinnerHelpText() {
  if (!manualSinnerHelpText || !numSinnersInput) return;
  const n = parseInt(numSinnersInput.value, 10) || 1;
  manualSinnerHelpText.textContent =
    "Select the " + n +
    " Sinners you wish to randomise (leave unchecked if you want the randomiser to pick the Sinners for you)";
}

function enforceManualSinnerSelectionLimit() {
  const boxes = document.querySelectorAll(".manual-sinner-checkbox");
  if (!boxes.length) return;

  const numLimitEnabled =
    randomizeNumSinnersToggle && randomizeNumSinnersToggle.checked;
  const manualModeOn =
    useManualSinnerSelection && useManualSinnerSelection.checked;

  // If manual mode is off or the count-limit toggle is off, disable all manual boxes
  if (!numLimitEnabled || !manualModeOn) {
    boxes.forEach(function (box) {
      box.disabled = true;
    });
    return;
  }

  const limit = parseInt(numSinnersInput.value, 10) || 1;
  let checkedCount = 0;

  boxes.forEach(function (box) {
    if (box.checked) checkedCount++;
  });

  boxes.forEach(function (box) {
    if (box.checked) {
      // Already selected boxes stay enabled
      box.disabled = false;
    } else {
      // Non-selected boxes become disabled once we reach the limit
      box.disabled = checkedCount >= limit;
    }
  });
}

function getAllowedEgoRanks() {
  if (!randomizeEgoRanksToggle || !randomizeEgoRanksToggle.checked) {
    return null; // no restrictions
  }

  const container = document.getElementById("egoRankFilterContainer");
  if (!container) return null;

  const boxes = container.querySelectorAll("input[type='checkbox'][data-ego-rank]");
  const ranks = [];
  boxes.forEach(function (box) {
    if (box.disabled) return;
    if (box.checked && box.dataset.egoRank) {
      ranks.push(box.dataset.egoRank);
    }
  });

  if (ranks.length === 0) {
    return null;
  }

  return ranks;
}

// --- Saved teams (presets) ---
let lastRunText = "";
let savedTeams = [];
let activeKeywordFilters = new Set();        // already used for ID/EGO keyword filters
let savedRunPresets = [];                    // NEW: run setup presets
// Active run / shop rules
let runIsActive = false;
let egoGiftRuleEnabled = false;
let egoGiftNoReacquireRuleEnabled = false;
let randomiseSinnersEachShopEnabled = false;

// Track run settings so we can re-use them at each shop
let activeRunSettings = null;

// EGO Gift tracking for the current run
let currentFloorGiftIds = new Set();   // gifts currently held on this floor
let bannedGiftIdsForRun = new Set();   // gifts that cannot be re-obtained this run

// Separate keyword filters for EGO Gifts
let activeGiftKeywordFilters = new Set();

// Remember which keyword groups are expanded/collapsed in the UI
let egoGiftGroupState = {};  // key: "avail|burn", "banned|bleed", etc. -> true/false

function loadSavedTeamsFromStorage() {
  try {
    const raw = localStorage.getItem("savedTeams");
    if (raw) {
      savedTeams = JSON.parse(raw);
    } else {
      savedTeams = [];
    }
  } catch (err) {
    console.warn("Failed to load saved teams:", err);
    savedTeams = [];
  }
}

function saveSavedTeamsToStorage() {
  try {
    localStorage.setItem("savedTeams", JSON.stringify(savedTeams));
  } catch (err) {
    console.warn("Failed to save teams:", err);
  }
}

function renderSavedTeamsList() {
  const listEl = document.getElementById("savedTeamsList");
  if (!listEl) return;

  listEl.innerHTML = "";

  if (savedTeams.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No saved teams yet.";
    listEl.appendChild(p);
    return;
  }

  for (let i = 0; i < savedTeams.length; i++) {
    const team = savedTeams[i];

    const card = document.createElement("div");
    card.className = "saved-team-card";

    const header = document.createElement("div");
    header.className = "saved-team-header";

    const titleWrapper = document.createElement("div");
    const nameSpan = document.createElement("span");
    nameSpan.className = "saved-team-name";
    nameSpan.textContent = team.name || "Unnamed team";

    const metaSpan = document.createElement("span");
    metaSpan.className = "saved-team-meta";
    if (team.savedAt) {
      metaSpan.textContent = "Saved: " + new Date(team.savedAt).toLocaleString();
    }

    titleWrapper.appendChild(nameSpan);
    if (team.savedAt) {
      titleWrapper.appendChild(document.createElement("br"));
      titleWrapper.appendChild(metaSpan);
    }

    const actions = document.createElement("div");
    actions.className = "saved-team-actions";

    const viewBtn = document.createElement("button");
    viewBtn.textContent = "View";
    viewBtn.addEventListener("click", function () {
      const runResultElLocal = document.getElementById("runResult");
      if (runResultElLocal) {
        runResultElLocal.textContent = team.text;
        lastRunText = team.text;
        if (typeof runResultElLocal.scrollIntoView === "function") {
          runResultElLocal.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      const confirmed = window.confirm(
        'Delete team "' + (team.name || "Unnamed team") + '"?'
      );
      if (!confirmed) {
        return;
      }
      savedTeams.splice(i, 1);
      saveSavedTeamsToStorage();
      renderSavedTeamsList();
    });

    actions.appendChild(viewBtn);
    actions.appendChild(deleteBtn);

    header.appendChild(titleWrapper);
    header.appendChild(actions);

    card.appendChild(header);
    listEl.appendChild(card);
  }
}

function clearOwnershipSearchHighlights() {
  const highlighted = document.querySelectorAll(
    "#ownershipContainer .ownership-item.search-hit"
  );
  for (let i = 0; i < highlighted.length; i++) {
    highlighted[i].classList.remove("search-hit");
  }
}

function applyOwnershipSearch() {
  if (!ownershipSearchInput) return;

  const rawQuery = ownershipSearchInput.value.trim().toLowerCase();
  clearOwnershipSearchHighlights();

  if (!rawQuery) {
    return;
  }

  // Split query into words: "solemn yi sang" -> ["solemn", "yi", "sang"]
  const terms = rawQuery.split(/\s+/).filter(function (t) {
    return t.length > 0;
  });

  // Make sure the ownership list is visible
  if (ownershipContainer && ownershipContainer.classList.contains("hidden")) {
    ownershipContainer.classList.remove("hidden");
  }

  const items = document.querySelectorAll("#ownershipContainer .ownership-item");
  let firstMatch = null;

  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // Get the sinner name from the header
    let sinnerNameText = "";
    const sinnerBlock = item.closest(".sinner-block");
    if (sinnerBlock) {
      const headerName = sinnerBlock.querySelector(".sinner-header-name");
      if (headerName) {
        sinnerNameText = headerName.textContent || "";
      }
    }

    // Combine sinner name + item text
    const combinedText =
      (sinnerNameText + " " + item.textContent).toLowerCase();

    // Check that *all* search terms are present
    let matches = true;
    for (let t = 0; t < terms.length; t++) {
      if (combinedText.indexOf(terms[t]) === -1) {
        matches = false;
        break;
      }
    }

    if (matches) {
      item.classList.add("search-hit");
      if (!firstMatch) {
        firstMatch = item;
      }
    }
  }

  if (firstMatch) {
    // Expand its sinner block
    const sinnerBlock = firstMatch.closest(".sinner-block");
    if (sinnerBlock) {
      const body = sinnerBlock.querySelector(".sinner-body");
      const toggleSpan = sinnerBlock.querySelector(".sinner-header-toggle");
      if (body && body.classList.contains("hidden")) {
        body.classList.remove("hidden");
        if (toggleSpan) {
          toggleSpan.textContent = "[-]";
        }
      }
    }

    if (typeof firstMatch.scrollIntoView === "function") {
      firstMatch.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }
}

function updateActiveKeywordFiltersDisplay() {
  const display = document.getElementById("activeKeywordFiltersDisplay");
  if (!display) return;

  if (activeKeywordFilters.size === 0) {
    display.textContent = "No keyword filters active";
  } else {
    const arr = Array.from(activeKeywordFilters).map(function (k) {
      return k.charAt(0).toUpperCase() + k.slice(1);
    });
    display.textContent = "Active keyword filters: " + arr.join(", ");
  }
}

function setupKeywordFilterCheckboxes() {
  const container = document.getElementById("keywordFilters");
  if (!container) return;

  const boxes = container.querySelectorAll("input[type='checkbox'][data-keyword]");
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    const kw = (box.dataset.keyword || "").toLowerCase();
    if (!kw) continue;

    box.addEventListener("change", function () {
      if (box.checked) {
        activeKeywordFilters.add(kw);
      } else {
        activeKeywordFilters.delete(kw);
      }
      updateActiveKeywordFiltersDisplay();
      buildOwnershipUI();
    });
  }
}

// --- Hook up to the page ---
const runResultEl = document.getElementById("runResult");
const randomizeRunBtn = document.getElementById("randomizeRunBtn");
const numSinnersInput = document.getElementById("numSinners");
const egosPerSinnerInput = document.getElementById("egosPerSinner");
const randomizeOrderCheckbox = document.getElementById("randomizeOrder");
const toggleSettingsBtn = document.getElementById("toggleSettings");
const ownershipContainer = document.getElementById("ownershipContainer");
const copyResultBtn = document.getElementById("copyResultBtn");
const resetOwnershipBtn = document.getElementById("resetOwnershipBtn");
const selectAllIdsBtn = document.getElementById("selectAllIdsBtn");
const selectAllEgosBtn = document.getElementById("selectAllEgosBtn");
const selectAllOwnershipBtn = document.getElementById("selectAllOwnershipBtn");
const expandAllSinnersBtn = document.getElementById("expandAllSinnersBtn");
const collapseAllSinnersBtn = document.getElementById("collapseAllSinnersBtn");

// NEW: run setup toggles
const randomizeNumSinnersToggle = document.getElementById("randomizeNumSinnersToggle");
const randomizeEgoRanksToggle = document.getElementById("randomizeEgoRanksToggle");

// NEW: shop rule toggles in Run setup
const enableGiftShopRuleCheckbox = document.getElementById("enableGiftShopRule");
const enableGiftNoReacquireRuleCheckbox = document.getElementById("enableGiftNoReacquireRule");
const enableRandomiseSinnersEachShopCheckbox =
  document.getElementById("enableRandomiseSinnersEachShop");

// NEW: Shop / EGO Gift tools section
const shopToolsSection = document.getElementById("shopToolsSection");
const egoGiftTools = document.getElementById("egoGiftTools");
const shopSinnerTools = document.getElementById("shopSinnerTools");

const egoGiftSearchInput = document.getElementById("egoGiftSearchInput");
const egoGiftClearSearchBtn = document.getElementById("egoGiftClearSearchBtn");
const egoGiftKeywordFiltersContainer = document.getElementById("egoGiftKeywordFilters");
const egoGiftAvailableList = document.getElementById("egoGiftAvailableList");
const egoGiftSelectedList = document.getElementById("egoGiftSelectedList");
const egoGiftBannedList = document.getElementById("egoGiftBannedList");
const shopReachedBtn = document.getElementById("shopReachedBtn");
const shopReachedSinnerOnlyBtn = document.getElementById("shopReachedSinnerOnlyBtn");
const runCompletedBtn = document.getElementById("runCompletedBtn");
const navShopToolsBtn = document.getElementById("navShopTools");
const sideNavButtons = document.querySelectorAll(".side-nav-button[data-target]");

// Shop Sinner controls
const shopRandomNumToggle = document.getElementById("shopRandomNumToggle");
const shopNumSinnersSelect = document.getElementById("shopNumSinners");
const randomizeShopSinnersBtn = document.getElementById("randomizeShopSinnersBtn");

// Side nav buttons: smooth-scroll to their target sections
if (sideNavButtons && sideNavButtons.length) {
  sideNavButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const targetId = btn.getAttribute("data-target");
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target && typeof target.scrollIntoView === "function") {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

// EGO Gift keyword filters
if (egoGiftKeywordFiltersContainer) {
  const boxes = egoGiftKeywordFiltersContainer.querySelectorAll(
    "input[type='checkbox'][data-gift-keyword]"
  );
    boxes.forEach(function (box) {
    const kw = (box.dataset.giftKeyword || "").toLowerCase();
    if (!kw) return;

    box.addEventListener("change", function () {
      if (box.checked) {
        activeGiftKeywordFilters.add(kw);
      } else {
        activeGiftKeywordFilters.delete(kw);
      }
      updateEgoGiftActiveFiltersText();
      renderEgoGiftLists();
    });
  });

  // Initial text
  updateEgoGiftActiveFiltersText();
}

// Gift search
if (egoGiftSearchInput) {
  egoGiftSearchInput.addEventListener("input", function () {
    renderEgoGiftLists();
  });
}

if (egoGiftClearSearchBtn) {
  egoGiftClearSearchBtn.addEventListener("click", function () {
    if (egoGiftSearchInput) {
      egoGiftSearchInput.value = "";
    }
    renderEgoGiftLists();
  });
}

// Gift shop rule: enable/disable "no re-obtain" checkbox
function updateGiftRuleDependents() {
  // Safety: if elements aren't found, do nothing
  if (!enableGiftShopRuleCheckbox || !enableGiftNoReacquireRuleCheckbox) {
    return;
  }

  const enabled = !!enableGiftShopRuleCheckbox.checked;

  // Enable / disable the second rule
  enableGiftNoReacquireRuleCheckbox.disabled = !enabled;

  // If we turned the main rule OFF, also untick the second
  if (!enabled) {
    enableGiftNoReacquireRuleCheckbox.checked = false;
  }

  // Optional: toggle a "disabled" style on the label
  const giftNoReacquireLabel = document.getElementById("giftNoReacquireLabel");
  if (giftNoReacquireLabel) {
    giftNoReacquireLabel.classList.toggle("disabled", !enabled);
  }
}

// Attach listener if the first checkbox exists
if (enableGiftShopRuleCheckbox) {
  enableGiftShopRuleCheckbox.addEventListener("change", updateGiftRuleDependents);
}

// Set initial state on page load
updateGiftRuleDependents();

// NEW: manual Sinner selection
const useManualSinnerSelection = document.getElementById("useManualSinnerSelection");
const manualSinnerHelpText = document.getElementById("manualSinnerHelpText");

// NEW: run preset elements
const saveRunPresetBtn = document.getElementById("saveRunPresetBtn");
const runPresetNameInput = document.getElementById("runPresetNameInput");
const clearRunPresetsBtn = document.getElementById("clearRunPresetsBtn");

if (saveRunPresetBtn) {
  saveRunPresetBtn.addEventListener("click", function () {
    const settings = gatherCurrentRunSettings();
    if (!settings) return;

    // Try the "Preset name" input first
    let name = runPresetNameInput && runPresetNameInput.value.trim();

    // If it's empty, ask the user now
    if (!name) {
      const defaultName = "Preset " + (savedRunPresets.length + 1);
      const input = window.prompt(
        "Enter a name for this run preset:",
        defaultName
      );

      // Cancel → do nothing
      if (input === null) {
        return;
      }

      name = input.trim() || defaultName;
    }

    savedRunPresets.push({
      name: name,
      settings: settings
    });

    saveRunPresetsToStorage();
    renderRunPresetsList();

    if (runPresetNameInput) {
      runPresetNameInput.value = "";
    }

    window.alert('Saved run preset: "' + name + '".');
  });
}

if (clearRunPresetsBtn) {
  clearRunPresetsBtn.addEventListener("click", function () {
    const confirmed = window.confirm("Clear ALL run presets?");
    if (!confirmed) return;
    savedRunPresets = [];
    saveRunPresetsToStorage();
    renderRunPresetsList();
  });
}

// NEW: keyword filter elements (existing feature)
const toggleKeywordFiltersBtn = document.getElementById("toggleKeywordFiltersBtn");
const clearKeywordFiltersBtn = document.getElementById("clearKeywordFiltersBtn");

// Search elements...
const ownershipSearchInput = document.getElementById("ownershipSearchInput");
const ownershipSearchBtn = document.getElementById("ownershipSearchBtn");
const ownershipClearSearchBtn = document.getElementById("ownershipClearSearchBtn");

// Saved teams elements...
const saveTeamNameInput = document.getElementById("saveTeamName");
const saveTeamBtn = document.getElementById("saveTeamBtn");
const clearTeamsBtn = document.getElementById("clearTeamsBtn");


// Select ALL IDs
if (selectAllIdsBtn) {
  selectAllIdsBtn.addEventListener("click", function () {
    const confirmed = window.confirm("Mark ALL Identities as owned?");
    if (!confirmed) return;

    userOwnedIdentityIds = new Set(
      identities.map(function (idn) { return idn.id; })
    );

    saveOwnershipToStorage();
    buildOwnershipUI();
    alert("All IDs have been marked as owned.");
  });
}

// Select ALL EGOs
if (selectAllEgosBtn) {
  selectAllEgosBtn.addEventListener("click", function () {
    const confirmed = window.confirm("Mark ALL EGOs as owned?");
    if (!confirmed) return;

    userOwnedEgoIds = new Set(
      egos.map(function (ego) { return ego.id; })
    );

    saveOwnershipToStorage();
    buildOwnershipUI();
    alert("All EGOs have been marked as owned.");
  });
}

// Select ALL IDs + EGOs
if (selectAllOwnershipBtn) {
  selectAllOwnershipBtn.addEventListener("click", function () {
    const confirmed = window.confirm("Mark ALL IDs and EGOs as owned?");
    if (!confirmed) return;

    userOwnedIdentityIds = new Set(
      identities.map(function (idn) { return idn.id; })
    );
    userOwnedEgoIds = new Set(
      egos.map(function (ego) { return ego.id; })
    );

    saveOwnershipToStorage();
    buildOwnershipUI();
    alert("All IDs and EGOs have been marked as owned.");
  });
}

// Load ownership and presets, then build UIs
loadOwnershipFromStorage();
buildOwnershipUI();
loadSavedTeamsFromStorage();
renderSavedTeamsList();
setupKeywordFilterCheckboxes();
updateActiveKeywordFiltersDisplay();
loadRunPresetsFromStorage();
renderRunPresetsList();

// Toggle show/hide for keyword filter list
if (toggleKeywordFiltersBtn) {
  const keywordFiltersContainer = document.getElementById("keywordFilters");
  toggleKeywordFiltersBtn.addEventListener("click", function () {
    if (!keywordFiltersContainer) return;
    keywordFiltersContainer.classList.toggle("hidden");
  });
}

// Clear all keyword filters
if (clearKeywordFiltersBtn) {
  clearKeywordFiltersBtn.addEventListener("click", function () {
    const container = document.getElementById("keywordFilters");
    if (container) {
      const boxes = container.querySelectorAll("input[type='checkbox'][data-keyword]");
      for (let i = 0; i < boxes.length; i++) {
        boxes[i].checked = false;
      }
    }

    activeKeywordFilters.clear();
    updateActiveKeywordFiltersDisplay();
    buildOwnershipUI();
  });
}

// Toggle show/hide for ownership list
if (toggleSettingsBtn && ownershipContainer) {
  toggleSettingsBtn.addEventListener("click", function () {
    const isHidden = ownershipContainer.classList.contains("hidden");

    if (isHidden) {
      // Currently hidden -> show it
      ownershipContainer.classList.remove("hidden");
    } else {
      // Currently visible -> hide it AND collapse all sinner sections
      const bodies = ownershipContainer.querySelectorAll(".sinner-body");
      const toggles = ownershipContainer.querySelectorAll(".sinner-header-toggle");

      for (let i = 0; i < bodies.length; i++) {
        bodies[i].classList.add("hidden");
      }
      for (let j = 0; j < toggles.length; j++) {
        toggles[j].textContent = "[+]";
      }

      ownershipContainer.classList.add("hidden");
    }
  });
}

if (expandAllSinnersBtn) {
  expandAllSinnersBtn.addEventListener("click", function () {
    if (ownershipContainer) {
      ownershipContainer.classList.remove("hidden");
    }
    const blocks = document.querySelectorAll("#ownershipContainer .sinner-block");
    blocks.forEach(function (block) {
      const body = block.querySelector(".sinner-body");
      const toggleSpan = block.querySelector(".sinner-header-toggle");
      if (body && body.classList.contains("hidden")) {
        body.classList.remove("hidden");
      }
      if (toggleSpan) {
        toggleSpan.textContent = "[-]";
      }
    });
  });
}

if (collapseAllSinnersBtn) {
  collapseAllSinnersBtn.addEventListener("click", function () {
    const bodies = document.querySelectorAll("#ownershipContainer .sinner-body");
    const toggles = document.querySelectorAll("#ownershipContainer .sinner-header-toggle");
    bodies.forEach(function (body) {
      body.classList.add("hidden");
    });
    toggles.forEach(function (toggle) {
      toggle.textContent = "[+]";
    });
  });
}

// Search buttons
if (ownershipSearchBtn) {
  ownershipSearchBtn.addEventListener("click", function () {
    applyOwnershipSearch();
  });
}

if (ownershipClearSearchBtn) {
  ownershipClearSearchBtn.addEventListener("click", function () {
    if (ownershipSearchInput) {
      ownershipSearchInput.value = "";
    }
    clearOwnershipSearchHighlights();
  });
}

if (ownershipSearchInput) {
  ownershipSearchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      applyOwnershipSearch();
    }
  });
}

// Build sinner selection checkboxes at startup
buildRunSetupSinnerCheckboxes();

// Initialise label + disabled state
updateManualSinnerHelpText();
enforceManualSinnerSelectionLimit();

// Build shop Sinner checkboxes (for per-shop identity rerolls)
buildShopSinnerCheckboxes();

if (shopNumSinnersSelect) {
  shopNumSinnersSelect.addEventListener("change", function () {
    enforceShopSinnerSelectionLimit();
  });
}

// React when "select specific Sinners" is toggled
if (useManualSinnerSelection) {
  useManualSinnerSelection.addEventListener("change", function () {
    enforceManualSinnerSelectionLimit();
  });
}

// React when the 1–11 dropdown changes
if (numSinnersInput) {
  numSinnersInput.addEventListener("change", function () {
    updateManualSinnerHelpText();
    enforceManualSinnerSelectionLimit();
  });
}

// Number of Sinners toggle: limit on/off
if (randomizeNumSinnersToggle) {
  const manualBlock = document.getElementById("manualSinnerSelect");

  function updateNumSinnersMode() {
    const enabled = randomizeNumSinnersToggle.checked;

    if (numSinnersInput) {
      numSinnersInput.disabled = !enabled;
    }
    if (manualBlock) {
      manualBlock.classList.toggle("hidden", !enabled);
    }

    if (!enabled && useManualSinnerSelection) {
      useManualSinnerSelection.checked = false;
    }

    updateManualSinnerHelpText();
    enforceManualSinnerSelectionLimit();
  }

  randomizeNumSinnersToggle.addEventListener("change", updateNumSinnersMode);
  updateNumSinnersMode(); // initial
}

// EGO rank filter toggle
if (randomizeEgoRanksToggle) {
  const egoRankContainer = document.getElementById("egoRankFilterContainer");

  function updateEgoRankMode() {
    if (!egoRankContainer) return;
    egoRankContainer.classList.toggle("hidden", !randomizeEgoRanksToggle.checked);
  }

  randomizeEgoRanksToggle.addEventListener("change", updateEgoRankMode);
  updateEgoRankMode(); // initial
}

function setRunSetupEnabled(enabled) {
  const runSetupSection = document.getElementById("runSetupSection");
  const runSetupControls = document.getElementById("runSetupControls");
  if (!runSetupSection) return;

  const controls = runSetupSection.querySelectorAll("input, select, button");
  controls.forEach(function (el) {
    // Don't disable the copy-result button
    if (el.id === "copyResultBtn") return;
    // Shop tools live in another section, so safe.
    el.disabled = !enabled;
  });

  if (runSetupControls) {
    runSetupControls.classList.toggle("collapsed", !enabled);
  }

  const badge = document.getElementById("runLockedBadge");
  if (badge) {
    badge.classList.toggle("hidden", enabled);
  }
}

// Build text for "Randomise Sinners for current shop"
// - shopCount: 1, 2 or 3 (from the dropdown)
// - preselectedIds: array of sinner IDs the user checked in the shop UI
function buildShopRerollResultText(shopCount, preselectedIds) {
  const n = Math.max(1, Math.min(3, shopCount || 1));

  // All Sinner IDs we can choose from
  const allSinnerIds = sinners.map(function (s) { return s.id; });

  const chosenIdSet = new Set();

  // 1) Add manually selected Sinners first (up to n)
  (preselectedIds || []).forEach(function (id) {
    if (chosenIdSet.size >= n) return;
    if (allSinnerIds.indexOf(id) !== -1) {
      chosenIdSet.add(id);
    }
  });

  // 2) Top up with random Sinners until we reach n
  const remainingIds = allSinnerIds.filter(function (id) {
    return !chosenIdSet.has(id);
  });

  const needed = n - chosenIdSet.size;
  if (needed > 0 && remainingIds.length > 0) {
    const extra = getRandomItems(remainingIds, Math.min(needed, remainingIds.length));
    extra.forEach(function (id) {
      chosenIdSet.add(id);
    });
  }

  const finalIds = Array.from(chosenIdSet);

  // Keep display order stable (in the order we picked them)
  const orderIndex = {};
  finalIds.forEach(function (id, idx) { orderIndex[id] = idx; });

  const chosenSinners = sinners
    .filter(function (s) { return finalIds.indexOf(s.id) !== -1; })
    .sort(function (a, b) {
      return orderIndex[a.id] - orderIndex[b.id];
    });

  const lines = [];
  lines.push("Shop reroll – new Identities for this shop:");
  lines.push("");

  chosenSinners.forEach(function (sinner) {
    const identity = pickRandomIdentityForSinner(sinner.id);
    const identityName = identity && identity.name ? identity.name : "None";
    lines.push(sinner.name + ": " + identityName);
  });

  return lines.join("\n");
}

function buildRunResultTextFromSettings(settings, omitEgos) {
  if (!settings) return "";

  const randomNum = !!settings.randomizeNumSinners;
  const egosPerSinner = settings.egosPerSinner || 3;
  const randomizeOrder = !!settings.randomizeOrder;
  const allowedRanks = settings.allowedEgoRanks || null;
  const omitEgosFlag = !!omitEgos;

  let chosenSinnerIds;

  if (!randomNum) {
    const manual = settings.manualSinnerIds || [];
    chosenSinnerIds = manual.length > 0
      ? manual.slice()
      : sinners.map(function (s) { return s.id; });
  } else {
    let pool = settings.randomPoolIds && settings.randomPoolIds.length > 0
      ? settings.randomPoolIds.slice()
      : sinners.map(function (s) { return s.id; });

    let num = settings.numSinners || 12;
    if (num > pool.length) num = pool.length;

    const shuffledPool = shuffle(pool);
    chosenSinnerIds = shuffledPool.slice(0, num);
  }

  const chosenSinners = sinners.filter(function (s) {
    return chosenSinnerIds.indexOf(s.id) !== -1;
  });

  let orderedSinners = chosenSinners.slice();
  if (randomizeOrder && orderedSinners.length > 1) {
    orderedSinners = shuffle(orderedSinners);
  }

  const lines = [];
  const rankOrder = ["ZAYIN", "TETH", "HE", "WAW", "ALEPH"];

  for (let index = 0; index < orderedSinners.length; index++) {
    const sinner = orderedSinners[index];
    const sinnerId = sinner.id;

    const identity = pickRandomIdentityForSinner(sinnerId);
    const egos = omitEgosFlag
      ? []
      : pickRandomEgosForSinner(sinnerId, egosPerSinner, allowedRanks);

    const identityName = identity && identity.name ? identity.name : "None";

    const slot = index + 1;
    const showOrderInfo = randomizeOrder;
    const headerPrefix = showOrderInfo ? (slot + ". ") : "";
    const roleSuffix = showOrderInfo ? (slot <= 7 ? " (on-field)" : " (support)") : "";

    // Header line: with or without numbering
    lines.push(headerPrefix + sinner.name + roleSuffix);

    // Identity line
    lines.push("  Identity: " + identityName);

    // EGOs block only if we’re not omitting EGOs
    if (!omitEgosFlag) {
      lines.push("  EGOs:");
      if (!egos || egos.length === 0) {
        lines.push("    (No EGOs selected)");
      } else {
        const sortedEgos = egos.slice().sort(function (a, b) {
          const ai = rankOrder.indexOf(a.rank);
          const bi = rankOrder.indexOf(b.rank);
          const aRankIndex = ai === -1 ? 999 : ai;
          const bRankIndex = bi === -1 ? 999 : bi;
          if (aRankIndex !== bRankIndex) {
            return aRankIndex - bRankIndex;
          }
          return a.name.localeCompare(b.name);
        });

        sortedEgos.forEach(function (ego) {
          lines.push("    [" + ego.rank + "] " + ego.name);
        });
      }
    }

    // Blank line between Sinners
    lines.push("");
  }

  return lines.join("\n");
}

// Randomise button
if (randomizeRunBtn) {
  randomizeRunBtn.addEventListener("click", function () {
    // Gather settings from the UI
    const settings = gatherCurrentRunSettings();

    // Do we have any special shop rules?
    const wantsGiftRule = !!(enableGiftShopRuleCheckbox && enableGiftShopRuleCheckbox.checked);
    const wantsNoReobtain = !!(enableGiftNoReacquireRuleCheckbox && enableGiftNoReacquireRuleCheckbox.checked);
    const wantsRandomiseEachShop =
      !!(enableRandomiseSinnersEachShopCheckbox && enableRandomiseSinnersEachShopCheckbox.checked);

    const applyShopRules = wantsGiftRule || wantsRandomiseEachShop;

    if (applyShopRules) {
      const confirmMsg =
        "You enabled shop-related rules.\n\n" +
        "- Run setup will be locked until you press \"Run completed\".\n" +
        "- EGO Gifts and (optionally) Sinner re-randomisation will be tracked below.\n\n" +
        "Start the run with these settings?";
      const ok = window.confirm(confirmMsg);
      if (!ok) {
        return;
      }
    }

    // Build and show the run result text
    const resultText = buildRunResultTextFromSettings(settings);
    runResultEl.textContent = resultText;
    lastRunText = resultText;

    if (saveRunPresetBtn) {
      saveRunPresetBtn.classList.remove("hidden");
    }

    // If no special rules, we are done.
    if (!applyShopRules) {
      runIsActive = false;
      activeRunSettings = null;
      return;
    }

    // From here on, a tracked run is active
    runIsActive = true;
    activeRunSettings = settings;

    egoGiftRuleEnabled = wantsGiftRule;
    egoGiftNoReacquireRuleEnabled = wantsGiftRule && wantsNoReobtain;
    randomiseSinnersEachShopEnabled = wantsRandomiseEachShop;
        // Update the summary chips in the shop tools header
    updateShopRuleBadges();

    // Reset per-run gift state
    currentFloorGiftIds.clear();
    bannedGiftIdsForRun.clear();
    activeGiftKeywordFilters.clear();

           // --- Shop UI layout depending on which rules are active ---

    // Show the whole shop tools section whenever *any* shop rule is on
    if (shopToolsSection) {
      shopToolsSection.classList.remove("hidden");
    }

    // Show "Shop tools" in the side nav only while a shop-rule run is active
    if (navShopToolsBtn) {
      navShopToolsBtn.classList.remove("hidden");
    }

    // EGO Gift panel only makes sense when the gift rule is enabled
    if (egoGiftTools) {
      egoGiftTools.classList.toggle("hidden", !egoGiftRuleEnabled);
    }

    // "Shop reached – sell all current EGO Gifts" button: only when gift rule is on
    if (shopReachedBtn) {
      shopReachedBtn.classList.toggle("hidden", !egoGiftRuleEnabled);
    }

    // Sinner-only "Shop reached – show Sinner randomise UI" button:
    // shown when we're re-rolling Sinners at shops BUT not using the gift rule
    const sinnerOnlyVisible = randomiseSinnersEachShopEnabled && !egoGiftRuleEnabled;
    if (shopReachedSinnerOnlyBtn) {
      shopReachedSinnerOnlyBtn.classList.toggle("hidden", !sinnerOnlyVisible);
    }

    // Sinner re-randomiser panel always starts hidden/locked for each shop
    if (shopSinnerTools) {
      shopSinnerTools.classList.add("hidden");
    }
    if (shopNumSinnersSelect) {
      shopNumSinnersSelect.disabled = true;
    }
    if (randomizeShopSinnersBtn) {
      randomizeShopSinnersBtn.disabled = true;
    }

    // Initialise gift lists only if the gift panel is actually in use
    if (egoGiftRuleEnabled) {
      renderEgoGiftLists();
    }

    // Lock the Run setup so the configuration can't be changed mid-run
    setRunSetupEnabled(false);

    // Scroll to the shop tools so the user sees them
    if (shopToolsSection && typeof shopToolsSection.scrollIntoView === "function") {
      shopToolsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

// Shared "shop reached" handler used by BOTH buttons
function onShopReachedClick() {
  if (!runIsActive) {
    window.alert("There is no active run to apply this to.");
    return;
  }
  if (!egoGiftRuleEnabled && !randomiseSinnersEachShopEnabled) {
    window.alert("No shop-related rules were enabled for this run.");
    return;
  }

  // Different message depending on whether the EGO Gift rule is on
  let msg;
  if (egoGiftRuleEnabled) {
    const hadGifts = currentFloorGiftIds.size > 0;
    msg = hadGifts
      ? "Mark shop as reached and sell ALL currently selected EGO Gifts?"
      : "Mark shop as reached? (You currently have no gifts selected.)";
  } else {
    // Sinner-only rule
    msg = "Mark shop as reached and unlock the Sinner re-randomiser UI for this shop?";
  }

  const ok = window.confirm(msg);
  if (!ok) return;

  // ----- EGO Gift handling -----
  if (egoGiftRuleEnabled) {
    if (egoGiftRuleEnabled && egoGiftNoReacquireRuleEnabled) {
      // Permanently lock sold gifts for this run
      currentFloorGiftIds.forEach(function (id) {
        bannedGiftIdsForRun.add(id);
      });
    }

    currentFloorGiftIds.clear();
    // Only re-render the gift lists if the gift rule is actually on
    renderEgoGiftLists();
  }

  // ----- Sinner re-randomiser handling (this is where your 1/2/3 logic stays) -----
  if (randomiseSinnersEachShopEnabled && shopSinnerTools) {
    shopSinnerTools.classList.remove("hidden");

    if (shopNumSinnersSelect) {
      shopNumSinnersSelect.disabled = false;
    }

    // Reset which Sinners are selected for this new shop
    const shopBoxes = document.querySelectorAll(".shop-sinner-checkbox");
    shopBoxes.forEach(function (box) {
      box.checked = false;
      box.disabled = false;
    });

    // Re-apply the 1/2/3-Sinner limit for this shop
    enforceShopSinnerSelectionLimit();

    if (randomizeShopSinnersBtn) {
      randomizeShopSinnersBtn.disabled = false;
    }
  }
}

// Attach BOTH buttons to this handler
if (shopReachedBtn) {
  shopReachedBtn.addEventListener("click", onShopReachedClick);
}
if (shopReachedSinnerOnlyBtn) {
  shopReachedSinnerOnlyBtn.addEventListener("click", onShopReachedClick);
}

if (randomizeShopSinnersBtn) {
  randomizeShopSinnersBtn.addEventListener("click", function () {
    if (!runIsActive || !randomiseSinnersEachShopEnabled || !activeRunSettings) {
      window.alert(
        'No active run with "Randomise Sinners at each Shop" enabled.'
      );
      return;
    }

    // How many Sinners to change (1, 2 or 3)
    const countSelect = document.getElementById("shopNumSinners");
    const shopCount = countSelect
      ? parseInt(countSelect.value, 10) || 1
      : 1;

    // Sinners manually chosen by the user
    const manualIds = getShopSelectedSinnerIds();

    const confirmMsg =
      "Randomise Identities for up to " + shopCount + " Sinners?\n\n" +
      "- You manually selected " + manualIds.length + " Sinner(s).\n" +
      "- Any remaining slots up to " + shopCount +
      " will be filled with random Sinners.";
    const ok = window.confirm(confirmMsg);
    if (!ok) return;

    // Build text: top up with random Sinners if needed
    const resultText = buildShopRerollResultText(shopCount, manualIds);
    runResultEl.textContent = resultText;
    lastRunText = resultText;

    // Scroll back up to the result box so the player sees it
    if (typeof runResultEl.scrollIntoView === "function") {
      runResultEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Lock shop Sinner tools until next "Shop reached"
    const shopBoxes = document.querySelectorAll(".shop-sinner-checkbox");
    shopBoxes.forEach(function (box) {
      box.disabled = true;
    });
    if (shopNumSinnersSelect) {
      shopNumSinnersSelect.disabled = true;
    }
    randomizeShopSinnersBtn.disabled = true;
  });
}

if (runCompletedBtn) {
  runCompletedBtn.addEventListener("click", function () {
    if (!runIsActive) {
      window.alert("There is no active run to complete.");
      return;
    }

    const ok = window.confirm(
      "Mark this run as completed and unlock the Run setup?\n" +
      "All EGO Gift tracking and shop-specific data will be cleared."
    );
    if (!ok) return;

        runIsActive = false;
    activeRunSettings = null;
    egoGiftRuleEnabled = false;
    egoGiftNoReacquireRuleEnabled = false;
    randomiseSinnersEachShopEnabled = false;

    currentFloorGiftIds.clear();
    bannedGiftIdsForRun.clear();
    activeGiftKeywordFilters.clear();

    updateShopRuleBadges();

    if (shopToolsSection) {
      shopToolsSection.classList.add("hidden");
    }
if (shopReachedSinnerOnlyBtn) {
  shopReachedSinnerOnlyBtn.classList.add("hidden");
}
    if (navShopToolsBtn) {
      navShopToolsBtn.classList.add("hidden");
    }

    // Re-enable the Run setup
    setRunSetupEnabled(true);
  });
}

// Copy result button
if (copyResultBtn) {
  copyResultBtn.addEventListener("click", function () {
    const text = lastRunText && lastRunText.trim()
      ? lastRunText
      : (runResultEl ? runResultEl.textContent : "");

    if (!text || text.trim() === "") {
      alert("There's no result to copy yet.");
      return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () {
          alert("Result copied to clipboard.");
        },
        function () {
          alert("Failed to copy. You can still select and copy manually.");
        }
      );
    } else {
      // Fallback for older browsers
      const temp = document.createElement("textarea");
      temp.value = text;
      document.body.appendChild(temp);
      temp.select();
      try {
        document.execCommand("copy");
        alert("Result copied to clipboard.");
      } catch (e) {
        alert("Failed to copy. You can still select and copy manually.");
      }
      document.body.removeChild(temp);
    }
  });
}

// Reset ownership to base-only
if (resetOwnershipBtn) {
  resetOwnershipBtn.addEventListener("click", function () {
    const confirmed = window.confirm(
      "Reset owned Identities and EGOs to base-only (LCB + base ZAYIN)?"
    );
    if (!confirmed) {
      return;
    }

    // Clear user-owned sets; base sets still count as owned
    userOwnedIdentityIds = new Set();
    userOwnedEgoIds = new Set();

    saveOwnershipToStorage();
    buildOwnershipUI();
    alert("Ownership reset to base-only.");
  });
}

// Save current team button (with confirm)
if (saveTeamBtn) {
  saveTeamBtn.addEventListener("click", function () {
    if (!lastRunText || lastRunText.trim() === "") {
      alert("No team to save yet. Click 'Randomise Run' first.");
      return;
    }

    const nameInput = saveTeamNameInput ? saveTeamNameInput.value.trim() : "";
    const name = nameInput || "Team " + (savedTeams.length + 1);

    const confirmed = window.confirm('Save team as "' + name + '"?');
    if (!confirmed) {
      return;
    }

    const team = {
      name: name,
      text: lastRunText,
      savedAt: Date.now()
    };

    savedTeams.push(team);
    saveSavedTeamsToStorage();
    renderSavedTeamsList();

    if (saveTeamNameInput) {
      saveTeamNameInput.value = "";
    }
  });
}

// Clear all saved teams
if (clearTeamsBtn) {
  clearTeamsBtn.addEventListener("click", function () {
    if (savedTeams.length === 0) {
      alert("There are no saved teams to clear.");
      return;
    }

    const confirmed = window.confirm("Clear ALL saved teams?");
    if (!confirmed) {
      return;
    }

    savedTeams = [];
    saveSavedTeamsToStorage();
    renderSavedTeamsList();
  });
}
