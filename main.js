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

// --- Build Ownership UI ---
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

    const title = document.createElement("h3");
    title.textContent = sinnerName;
    block.appendChild(title);

    // Identities
    const idsHeader = document.createElement("h4");
    idsHeader.textContent = "Identities";
    block.appendChild(idsHeader);

    if (identitiesForSinner.length === 0) {
      const noneText = document.createElement("p");
      noneText.textContent = "No identities defined.";
      block.appendChild(noneText);
    } else {
      for (let i = 0; i < identitiesForSinner.length; i++) {
        const idn = identitiesForSinner[i];
        const label = document.createElement("label");
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
        label.appendChild(document.createTextNode(" " + idn.name));
        block.appendChild(label);
      }
    }

    // EGOs
    const egosHeader = document.createElement("h4");
    egosHeader.textContent = "EGOs";
    block.appendChild(egosHeader);

    if (egosForSinner.length === 0) {
      const noneEgo = document.createElement("p");
      noneEgo.textContent = "No EGOs defined.";
      block.appendChild(noneEgo);
    } else {
      for (let j = 0; j < egosForSinner.length; j++) {
        const ego = egosForSinner[j];
        const labelEgo = document.createElement("label");
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
        labelEgo.appendChild(
          document.createTextNode(" [" + ego.rank + "] " + ego.name)
        );
        block.appendChild(labelEgo);
      }
    }

    container.appendChild(block);
  }
}

// --- Saved teams (presets) ---
let lastRunText = "";
let savedTeams = [];

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

const saveTeamNameInput = document.getElementById("saveTeamName");
const saveTeamBtn = document.getElementById("saveTeamBtn");
const clearTeamsBtn = document.getElementById("clearTeamsBtn");

// Load ownership and presets, then build UIs
loadOwnershipFromStorage();
buildOwnershipUI();
loadSavedTeamsFromStorage();
renderSavedTeamsList();

// Toggle show/hide for ownership list
if (toggleSettingsBtn && ownershipContainer) {
  toggleSettingsBtn.addEventListener("click", function () {
    ownershipContainer.classList.toggle("hidden");
  });
}

// Randomise button
if (randomizeRunBtn) {
  randomizeRunBtn.addEventListener("click", function () {
    const numSinnersValue = parseInt(numSinnersInput.value, 10) || 1;
    const egosPerSinnerValue = parseInt(egosPerSinnerInput.value, 10) || 1;
    const shouldRandomizeOrder = randomizeOrderCheckbox.checked;

        const chosenSinners = randomizeSinners(numSinnersValue);
    const setup = randomizeSetupForSinners(chosenSinners, egosPerSinnerValue);

    const orderMap = getSinnerOrderMap();
    let orderedSetup;

    if (shouldRandomizeOrder) {
      // Fully random deployment order (this is the actual deployment sequence)
      orderedSetup = shuffle(setup);
    } else {
      // Sort by canonical Sinner order (Yi Sang → Faust → Don → ...)
      orderedSetup = setup.slice(); // shallow copy
      orderedSetup.sort(function (a, b) {
        const indexA = orderMap[a.sinner.id] || 0;
        const indexB = orderMap[b.sinner.id] || 0;
        return indexA - indexB;
      });
    }

    const lines = orderedSetup.map(function (entry, index) {
      const sinnerName = entry.sinner.name;
      const identityName = entry.identity
        ? entry.identity.name
        : "(no Identity found - should not happen)";

      const egoLines = entry.egos.map(function (ego) {
        return "      [" + ego.rank + "] " + ego.name;
      });
      const egoBlock =
        egoLines.length > 0 ? egoLines.join("\n") : "      (no EGOs selected)";

      if (shouldRandomizeOrder) {
        const position = index + 1;
        const role = position <= 7 ? "On-field" : "Support";
        return (
          position +
          ". " +
          sinnerName +
          " [" +
          role +
          "]\n  Identity: " +
          identityName +
          "\n  EGOs:\n" +
          egoBlock +
          "\n"
        );
      } else {
        return (
          sinnerName +
          "\n  Identity: " +
          identityName +
          "\n  EGOs:\n" +
          egoBlock +
          "\n"
        );
      }
    });

    const outputText = lines.join("\n");
    runResultEl.textContent = outputText;
    lastRunText = outputText;
    if (typeof runResultEl.scrollIntoView === "function") {
      runResultEl.scrollIntoView({ behavior: "smooth", block: "start" });
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
