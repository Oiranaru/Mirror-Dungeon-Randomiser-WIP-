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

// One Identity per Sinner, 1–5 EGOs per Sinner, max 1 EGO per rank
function randomizeSetupForSinners(chosenSinners, egosPerSinner) {
  const desiredSlots = Math.max(1, Math.min(5, egosPerSinner));

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
  const egosPer = parseInt(egosPerSinnerInput.value, 10) || 3;
  const randomOrder = !!(randomizeOrderCheckbox && randomizeOrderCheckbox.checked);
  const egoRankFilterOn = !!(randomizeEgoRanksToggle && randomizeEgoRanksToggle.checked);
  const allowedRanks = getAllowedEgoRanks();
  const manualIds = getManuallySelectedSinners();
  const manualChoiceEnabled = !!(useManualSinnerSelection && useManualSinnerSelection.checked);

  return {
    randomizeNumSinners: useNumLimit,
    numSinners: num,
    egosPerSinner: egosPer,
    randomizeOrder: randomOrder,
    egoRankFilterOn: egoRankFilterOn,
    allowedEgoRanks: allowedRanks,
    manualSinnerIds: manualIds,
    useManualSinnerSelection: manualChoiceEnabled
  };
}

function applyRunSettingsPreset(settings) {
  if (!settings) return;

  if (randomizeNumSinnersToggle) {
    randomizeNumSinnersToggle.checked = !!settings.randomizeNumSinners;
  }

  if (typeof settings.numSinners === "number" && numSinnersInput) {
    numSinnersInput.value = String(settings.numSinners);
  }

  if (randomizeNumSinnersToggle) {
    randomizeNumSinnersToggle.dispatchEvent(new Event("change"));
  }

  if (typeof settings.egosPerSinner === "number" && egosPerSinnerInput) {
    egosPerSinnerInput.value = String(settings.egosPerSinner);
  }

  if (randomizeOrderCheckbox && typeof settings.randomizeOrder === "boolean") {
    randomizeOrderCheckbox.checked = settings.randomizeOrder;
  }

  if (randomizeEgoRanksToggle) {
    randomizeEgoRanksToggle.checked = !!settings.egoRankFilterOn;
    randomizeEgoRanksToggle.dispatchEvent(new Event("change"));
  }

  const manualIds = settings.manualSinnerIds || [];
  const manualBoxes = document.querySelectorAll(".manual-sinner-checkbox");
  manualBoxes.forEach(function (box) {
    box.checked = manualIds.indexOf(box.value) !== -1;
  });

  const ranks = settings.allowedEgoRanks || [];
  const rankBoxes = document.querySelectorAll(
    "#egoRankFilterContainer input[type='checkbox'][data-ego-rank]"
  );
  rankBoxes.forEach(function (box) {
    if (box.disabled || !box.dataset.egoRank) return;
    box.checked = ranks.length === 0 ? true : ranks.indexOf(box.dataset.egoRank) !== -1;
  });

  if (useManualSinnerSelection && typeof settings.useManualSinnerSelection === "boolean") {
    useManualSinnerSelection.checked = settings.useManualSinnerSelection;
  }

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
    row.className = "saved-team-row"; // reuse your existing styling

    const nameSpan = document.createElement("span");
    nameSpan.textContent = preset.name || ("Preset " + (index + 1));
    row.appendChild(nameSpan);

    const loadBtn = document.createElement("button");
    loadBtn.textContent = "Load";
    loadBtn.addEventListener("click", function () {
      applyRunSettingsPreset(preset.settings);
    });
    row.appendChild(loadBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", function () {
      const confirmed = window.confirm("Delete this run preset?");
      if (!confirmed) return;
      savedRunPresets.splice(index, 1);
      saveRunPresetsToStorage();
      renderRunPresetsList();
    });
    row.appendChild(deleteBtn);

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

// --- EGO selection with rank filter & forced ZAYIN ---
function pickRandomEgosForSinner(sinnerId, egosPerSinner, allowedRanks) {
  const allEgos = sinnerEgos[sinnerId] || [];
  const ownedEgos = allEgos.filter(function (ego) {
    return isEgoOwned(ego.id);
  });

  if (ownedEgos.length === 0) {
    return [];
  }

  const allowedRankSet = allowedRanks ? new Set(allowedRanks) : null;

  const zayins = ownedEgos.filter(function (ego) {
    return ego.rank === "ZAYIN";
  });
  const others = ownedEgos.filter(function (ego) {
    return ego.rank !== "ZAYIN";
  });

  const result = [];

  // Always equip a ZAYIN
  if (zayins.length > 0) {
    if (allowedRankSet && !allowedRankSet.has("ZAYIN")) {
      // Rank filtering ON, but ZAYIN not allowed:
      // force base ZAYIN (or any ZAYIN) without randomising it.
      const baseZayin = zayins.find(function (ego) { return ego.isBase; });
      result.push(baseZayin || zayins[0]);
    } else {
      // Either no filtering, or ZAYIN is allowed -> random ZAYIN
      const randIndex = Math.floor(Math.random() * zayins.length);
      result.push(zayins[randIndex]);
    }
  }

  if (result.length >= egosPerSinner) {
    return result;
  }

  const usedRanks = new Set(result.map(function (ego) { return ego.rank; }));

  const candidateOthers = others.filter(function (ego) {
    if (allowedRankSet && !allowedRankSet.has(ego.rank)) {
      return false;
    }
    if (usedRanks.has(ego.rank)) {
      return false;
    }
    return true;
  });

  // shuffle candidateOthers
  const shuffled = candidateOthers.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = shuffled[i];
    shuffled[i] = shuffled[j];
    shuffled[j] = tmp;
  }

  for (let i = 0; i < shuffled.length && result.length < egosPerSinner; i++) {
    result.push(shuffled[i]);
    usedRanks.add(shuffled[i].rank);
  }

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

// NEW: run setup toggles
const randomizeNumSinnersToggle = document.getElementById("randomizeNumSinnersToggle");
const randomizeEgoRanksToggle = document.getElementById("randomizeEgoRanksToggle");

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
    const name = (runPresetNameInput && runPresetNameInput.value.trim())
      ? runPresetNameInput.value.trim()
      : "Preset " + (savedRunPresets.length + 1);

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

// Randomise button
if (randomizeRunBtn) {
  randomizeRunBtn.addEventListener("click", function () {
    const numLimitEnabled = !!(randomizeNumSinnersToggle && randomizeNumSinnersToggle.checked);
    const egosPerSinner = parseInt(egosPerSinnerInput.value, 10) || 3;
    const randomizeOrder = !!(randomizeOrderCheckbox && randomizeOrderCheckbox.checked);
    const allowedRanks = getAllowedEgoRanks();

    let chosenSinnerIds = [];
    const allSinnerIds = sinners.map(function (s) { return s.id; });

    if (!numLimitEnabled) {
      // "All 12" mode: just use everyone
      chosenSinnerIds = allSinnerIds.slice();
    } else {
      // Limited 1–11 Sinner mode
      let num = parseInt(numSinnersInput.value, 10) || 1;

      if (useManualSinnerSelection && useManualSinnerSelection.checked) {
        // Player chooses exactly which Sinners
        chosenSinnerIds = getManuallySelectedSinners();

        if (chosenSinnerIds.length === 0) {
          window.alert(
            "You enabled manual Sinner selection but haven't chosen anyone yet.\n" +
            "Either pick " + num + " Sinners or untick the manual selection option."
          );
          return;
        }

        if (chosenSinnerIds.length !== num) {
          window.alert(
            "You set the run to use " + num + " Sinners, but you selected " +
            chosenSinnerIds.length + ".\nPlease make these match."
          );
          return;
        }
      } else {
        // Let the randomiser pick which Sinners (from all 12)
        if (num > allSinnerIds.length) {
          num = allSinnerIds.length;
        }

        const shuffled = allSinnerIds.slice();
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const tmp = shuffled[i];
          shuffled[i] = shuffled[j];
          shuffled[j] = tmp;
        }
        chosenSinnerIds = shuffled.slice(0, num);
      }
    }

    const chosenSinners = sinners.filter(function (s) {
      return chosenSinnerIds.indexOf(s.id) !== -1;
    });

    let orderedSinners = chosenSinners.slice();
    if (randomizeOrder && orderedSinners.length > 1) {
      const sh = orderedSinners.slice();
      for (let i = sh.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = sh[i];
        sh[i] = sh[j];
        sh[j] = tmp;
      }
      orderedSinners = sh;
    }

    const lines = [];

    for (let index = 0; index < orderedSinners.length; index++) {
      const sinner = orderedSinners[index];
      const sinnerId = sinner.id;

      const identity = pickRandomIdentityForSinner(sinnerId);
      const egos = pickRandomEgosForSinner(sinnerId, egosPerSinner, allowedRanks);

      const egoText = egos.map(function (ego) {
        return "[" + ego.rank + "] " + ego.name;
      }).join(", ");

      const slot = index + 1;
      const role = (slot <= 7 ? "(on-field)" : "(support)");

      lines.push(
        slot + ". " + sinner.name + " " + role +
        " – " + identity.name +
        (egoText ? " – EGOs: " + egoText : "")
      );
    }

    const resultText = lines.join("\n");
    runResultEl.textContent = resultText;
    lastRunText = resultText;

    // Show the "Save preset" button now that we have a concrete configuration
    if (saveRunPresetBtn) {
      saveRunPresetBtn.classList.remove("hidden");
    }
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
