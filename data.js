// --- Base Sinners (fixed roster) ---
const sinners = [
  { id: "yi-sang", name: "Yi Sang" },
  { id: "faust", name: "Faust" },
  { id: "don-quixote", name: "Don Quixote" },
  { id: "ryoshu", name: "Ryoshu" },
  { id: "meursault", name: "Meursault" },
  { id: "hong-lu", name: "Hong Lu" },
  { id: "heathcliff", name: "Heathcliff" },
  { id: "ishmael", name: "Ishmael" },
  { id: "rodion", name: "Rodion" },
  { id: "sinclair", name: "Sinclair" },
  { id: "outis", name: "Outis" },
  { id: "gregor", name: "Gregor" }
];

// --- Identities per Sinner ---
// Each entry also includes sinnerId for safety.
const sinnerIdentities = {
  "yi-sang": [
    { id: "yi-sang-lcb", sinnerId: "yi-sang", name: "LCB Sinner", isBase: true },
    { id: "yi-sang-seven", sinnerId: "yi-sang", name: "Seven Assoc. South Section 6"},
    { id: "yi-sang-molar", sinnerId: "yi-sang", name: "Molar Officer Fixer"},
    { id: "yi-sang-pequod", sinnerId: "yi-sang", name: "The Pequod First Mate"},
    { id: "yi-sang-dieci", sinnerId: "yi-sang", name: "Dieci Assoc. South Section 4"},
    { id: "yi-sang-LCE EGO", sinnerId: "yi-sang", name: "LCE EGO: Lantern"},
    { id: "yi-sang-blade", sinnerId: "yi-sang", name: "Blade Lineage Salsu"},
    { id: "yi-sang-efflorescedego", sinnerId: "yi-sang", name: "Effloresced EGO: Spicebush"},
    { id: "yi-sang-wcorp", sinnerId: "yi-sang", name: "W.Corp L3 Cleanup Agent"},
    { id: "yi-sang-ring", sinnerId: "yi-sang", name: "The Ring Pointillist Student"},
    { id: "yi-sang-lobotomyego", sinnerId: "yi-sang", name: "Lobotomy EGO: Solemn Lament"},
    { id: "yi-sang-liu", sinnerId: "yi-sang", name: "Liu Assoc. South Section 3"},
    { id: "yi-sang-ncorpego", sinnerId: "yi-sang", name: "N Corp EGO: Fell Bullet"},
    { id: "yi-sang-heishou", sinnerId: "yi-sang", name: "Heishou Pack - Wu Branch Adept"},
    // Add new Yi Sang IDs here
  ],

  "faust": [
    { id: "faust-lcb", sinnerId: "faust", name: "LCB Sinner", isBase: true },
    { id: "faust-wcorp", sinnerId: "faust", name: "W Corp. L2 Cleanup Agent" },
    { id: "faust-lobotomycorp", sinnerId: "faust", name: "Lobotomy Corp. Remnant"},
    { id: "faust-zwei", sinnerId: "faust", name: "Zwei Assoc. South Section 4"},
    { id: "faust-wuthering", sinnerId: "faust", name: "Wuthering Heights Butler"},
    { id: "faust-ncorp", sinnerId: "faust", name: "The One Who Grips"},
    { id: "faust-seven", sinnerId: "faust", name: "Seven Assoc. South Section 4"},
    { id: "faust-lobotomyego", sinnerId: "faust", name: "Lobotomy EGO: Regret"},
    { id: "faust-blade", sinnerId: "faust", name: "Blade Lineage Salsu"},
    { id: "faust-multicrack", sinnerId: "faust", name: "MultiCrack Office Rep"},
    { id: "faust-lceego", sinnerId: "faust", name: "LCE EGO: Ardor Blossom Star"},
    { id: "faust-heishou", sinnerId: "faust", name: "Heishou Pack - Mao Branch Adept"},
    { id: "faust-shi", sinnerId: "faust", name: "Shi Assoc. East Section 3"},
    // Add new Faust IDs here
  ],

  "don-quixote": [
    { id: "don-quixote-lcb", sinnerId: "don-quixote", name: "LCB Sinner", isBase: true },
    { id: "don-quixote-shi", sinnerId: "don-quixote", name: "Shi Assoc. South Section 5 Director"},
    { id: "don-quixote-ncorp", sinnerId: "don-quixote", name: "N Corp. Mittelhammer"},
    { id: "don-quixote-lobotomyego", sinnerId: "don-quixote", name: "Lobotomy EGO: Lantern"},
    { id: "don-quixote-blade", sinnerId: "don-quixote", name: "Blade Lineage Salsu"},
    { id: "don-quixote-wcorp", sinnerId: "don-quixote", name: "W Corp. L3 Cleanup Agent"},
    { id: "don-quixote-cinq", sinnerId: "don-quixote", name: "Cinq Assoc. South Section 5 Director"},
    { id: "don-quixote-middle", sinnerId: "don-quixote", name: "The Middle Little Sister"},
    { id: "don-quixote-tcorp", sinnerId: "don-quixote", name: "T.Corp. Class 3 Collection Staff"},
    { id: "don-quixote-bloodfiend", sinnerId: "don-quixote", name: "The Manager of La Manchaland"},
    { id: "don-quixote-cinq", sinnerId: "don-quixote", name: "Cinq Assoc. East Section 3"},
    { id: "don-quixote-lobotomyego", sinnerId: "don-quixote", name: "Lobotomy EGO: In the Name of Love and Hate"},
    { id: "don-quixote-heishou", sinnerId: "don-quixote", name: "Heishou Pack - Wei Branch"},
    // Add new Don IDs here
  ],

  "ryoshu": [
    { id: "ryoshu-lcb", sinnerId: "ryoshu", name: "LCB Sinner", isBase: true },
    { id: "ryoshu-seven", sinnerId: "ryoshu", name: "Seven Assoc. South Section 6"},
    { id: "ryoshu-lccb", sinnerId: "ryoshu", name: "LCCB Assistant Manager"},
    { id: "ryoshu-liu", sinnerId: "ryoshu", name: "Liu Assoc. South Section 4"},
    { id: "ryoshu-yurodivy", sinnerId: "ryoshu", name: "District 20 Yurodivy"},
    { id: "ryoshu-kurokumo", sinnerId: "ryoshu", name: "Kurokumo Clan Wakashu"},
    { id: "ryoshu-chef", sinnerId: "ryoshu", name: "R.B. Chef de Cuisine"},
    { id: "ryoshu-wcorp", sinnerId: "ryoshu", name: "W Corp. L3 Cleanup Agent"},
    { id: "ryoshu-wuthering", sinnerId: "ryoshu", name: "Edgar Family Chief Butler"},
    { id: "ryoshu-lobotomyego", sinnerId: "ryoshu", name: "Lobotomy EGO: Red Eyes & Penitence"},
    { id: "ryoshu-heishou", sinnerId: "ryoshu", name: "Heishou Pack - Mao Branch"},
    { id: "ryoshu-ncorp", sinnerId: "ryoshu", name: "N Corp. EGO: Contempt, Awe"},
    // Add new Ryoshu IDs here
  ],

  "meursault": [
    { id: "meursault-lcb", sinnerId: "meursault", name: "LCB Sinner", isBase: true },
    { id: "meursault-liu", sinnerId: "meursault", name: "Liu Assoc. South Section 6"},
    { id: "meursault-rosespanner", sinnerId: "meursault", name: "Rosespanner Workshop Fixer"},
    { id: "meursault-middle", sinnerId: "meursault", name: "The Middle Little Brother"},
    { id: "meursault-deadrabbit", sinnerId: "meursault", name: "Dead Rabbits Boss"},
    { id: "meursault-wcorp", sinnerId: "meursault", name: "W Corp. L2 Cleanup Agent"},
    { id: "meursault-ncorp", sinnerId: "meursault", name: "N Corp. Großhammer"},
    { id: "meursault-rcorp", sinnerId: "meursault", name: "R Corp. 4th Pack Rhino"},
    { id: "meursault-blade", sinnerId: "meursault", name: "Blade Lineage Mentor"},
    { id: "meursault-dieci", sinnerId: "meursault", name: "Dieci Assoc. South Section 4 Director"},
    { id: "meursault-cinq", sinnerId: "meursault", name: "Cinq Assoc. West Section 3"},
    { id: "meursault-thumb", sinnerId: "meursault", name: "The Thumb East Capo IIIII"},
    { id: "meursault-bloodfiend", sinnerId: "meursault", name: "The Prince of La Manchaland"},
    // Add new Meursault IDs here
  ],

  "hong-lu": [
    { id: "hong-lu-lcb", sinnerId: "hong-lu", name: "LCB Sinner", isBase: true },
    { id: "hong-lu-kurokumo", sinnerId: "hong-lu", name: "Kurokumo Clan Wakashu"},
    { id: "hong-lu-liu", sinnerId: "hong-lu", name: "Liu Assoc. South Section 5"},
    { id: "hong-lu-wcorp", sinnerId: "hong-lu", name: "W Corp. L2 Cleanup Agent"},
    { id: "hong-lu-hookoffice", sinnerId: "hong-lu", name: "Hook Office Fixer"},
    { id: "hong-lu-fanghuntoffice", sinnerId: "hong-lu", name: "Fanghunt Office Fixer"},
    { id: "hong-lu-tingtang", sinnerId: "hong-lu", name: "Tingtang Gang Gangleader"},
    { id: "hong-lu-kcorp", sinnerId: "hong-lu", name: "K Corp. Class 3 Excision Staff"},
    { id: "hong-lu-dieci", sinnerId: "hong-lu", name: "Dieci Assoc. South Section 4"},
    { id: "hong-lu-yurodivy", sinnerId: "hong-lu", name: "District 20 Yurodivy"},
    { id: "hong-lu-fullstop", sinnerId: "hong-lu", name: "Full-Stop Office Rep"},
    { id: "hong-lu-rcorp", sinnerId: "hong-lu", name: "R Corp. 4th Pack Reindeer"},
    { id: "hong-lu-heishou", sinnerId: "hong-lu", name: "The Lord of Hongyuan"},
    // Add new Hong Lu IDs here
  ],

  "heathcliff": [
    { id: "heathcliff-lcb", sinnerId: "heathcliff", name: "LCB Sinner", isBase: true },
    { id: "heathcliff-shi", sinnerId: "heathcliff", name: "Shi Assoc. South Section 5"},
    { id: "heathcliff-ncorp", sinnerId: "heathcliff", name: "N Corp. Kleinhammer"},
    { id: "heathcliff-seven", sinnerId: "heathcliff", name: "Seven Assoc. South Section 4"},
    { id: "heathcliff-multicrack", sinnerId: "heathcliff", name: "MultiCrack Office Fixer"},
    { id: "heathcliff-rcorp", sinnerId: "heathcliff", name: "R Corp. 4th Pack Rabbit"},
    { id: "heathcliff-lobotomyego", sinnerId: "heathcliff", name: "Lobotomy EGO: Sunshower"},
    { id: "heathcliff-pequod", sinnerId: "heathcliff", name: "The Pequod Harpooneer"},
    { id: "heathcliff-oufi", sinnerId: "heathcliff", name: "Oufi Assoc. South Section 3"},
    { id: "heathcliff-wuthering", sinnerId: "heathcliff", name: "Wild Hunt"},
    { id: "heathcliff-fullstop", sinnerId: "heathcliff", name: "Full-Stop Office Fixer"},
    { id: "heathcliff-kurokumo", sinnerId: "heathcliff", name: "Kurokumo Clan Wakashu"},
    { id: "heathcliff-wcorp", sinnerId: "heathcliff", name: "W Corp. L4 Cleanup Agent"},
    { id: "heathcliff-heishou", sinnerId: "heathcliff", name: "Heishou Pack - You Branch Adept"},
    // Add new Heathcliff IDs here
  ],

  "ishmael": [
    { id: "ishmael-lcb", sinnerId: "ishmael", name: "LCB Sinner", isBase: true },
    { id: "ishmael-shi", sinnerId: "ishmael", name: "Shi Assoc. South Section 5"},
    { id: "ishmael-lccb", sinnerId: "ishmael", name: "LCCB Assistant Manager"},
    { id: "ishmael-lobotomyego", sinnerId: "ishmael", name: "Lobotomy EGO: Sloshing"},
    { id: "ishmael-wuthering", sinnerId: "ishmael", name: "Edgar Family Butler"},
    { id: "ishmael-rcorp", sinnerId: "ishmael", name: "R Corp. 4th Pack Reindeer"},
    { id: "ishmael-liu", sinnerId: "ishmael", name: "Liu Assoc. South Section 4"},
    { id: "ishmael-molar", sinnerId: "ishmael", name: "Molar Boatworks Fixer"},
    { id: "ishmael-pequod", sinnerId: "ishmael", name: "The Pequod Captain"},
    { id: "ishmael-zwei", sinnerId: "ishmael", name: "Zwei Assoc. West Section 3"},
    { id: "ishmael-kurokumo", sinnerId: "ishmael", name: "Kurokumo Clan Captain"},
    { id: "ishmael-heishou", sinnerId: "ishmael", name: "Family Hierarch Candidate"},
    { id: "ishmael-jeongoffice", sinnerId: "ishmael", name: "Jeong's Office Rep"},
    // Add new Ishmael IDs here
  ],

  "rodion": [
    { id: "rodion-lcb", sinnerId: "rodion", name: "LCB Sinner", isBase: true },
    { id: "rodion-lccb", sinnerId: "rodion", name: "LCCB Assistant Manager"},
    { id: "rodion-ncorp", sinnerId: "rodion", name: "N Corp. Mittelhammer"},
    { id: "rodion-zwei", sinnerId: "rodion", name: "Zwei Assoc. South Section 5"},
    { id: "rodion-tcorp", sinnerId: "rodion", name: "T Corp. Class 2 Collection Staff"},
    { id: "rodion-kurokumo", sinnerId: "rodion", name: "Kurokumo Clan Wakashu"},
    { id: "rodion-rosespanner", sinnerId: "rodion", name: "Rosespanner Workshop Rep"},
    { id: "rodion-dieci", sinnerId: "rodion", name: "Dieci Assoc. South Section 4"},
    { id: "rodion-liu", sinnerId: "rodion", name: "Liu Assoc. South Section 4 Director"},
    { id: "rodion-devyat", sinnerId: "rodion", name: "Devyat' Assoc. North Section 3"},
    { id: "rodion-bloodfiend", sinnerId: "rodion", name: "The Princess of La Manchaland"},
    { id: "rodion-heishou", sinnerId: "rodion", name: "Heishou Pack - Si Branch"},
    { id: "rodion-lobotomyego", sinnerId: "rodion", name: "Lobotomy EGO: The Sword Sharpened with Tears"},
    // Add new Rodion IDs here
  ],

  "sinclair": [
    { id: "sinclair-lcb", sinnerId: "sinclair", name: "LCB Sinner", isBase: true },
    { id: "sinclair-zwei", sinnerId: "sinclair", name: "Zwei Assoc. South Section 6"},
    { id: "sinclair-mariachi", sinnerId: "sinclair", name: "Los Mariachis Jefe"},
    { id: "sinclair-lobotomyego", sinnerId: "sinclair", name: "Lobotomy EGO: Red Sheet"},
    { id: "sinclair-molar", sinnerId: "sinclair", name: "Molar Boatworks Fixer"},
    { id: "sinclair-zwei", sinnerId: "sinclair", name: "Zwei Assoc. West Section 3"},
    { id: "sinclair-blade", sinnerId: "sinclair", name: "Blade Lineage Salsu"},
    { id: "sinclair-ncorp", sinnerId: "sinclair", name: "The One Who Shall Grip"},
    { id: "sinclair-cinq", sinnerId: "sinclair", name: "Cinq Assoc. South Section 4 Director"},
    { id: "sinclair-dawnoffice", sinnerId: "sinclair", name: "Dawn Office Fixer"},
    { id: "sinclair-devyat", sinnerId: "sinclair", name: "Devyat' Assoc. North Section 3"},
    { id: "sinclair-middle", sinnerId: "sinclair", name: "The Middle Little Brother"},
    { id: "sinclair-thumb", sinnerId: "sinclair", name: "The Thumb East Soldato II"},
    { id: "sinclair-heishou", sinnerId: "sinclair", name: "Heishou Pack - You Branch"},
    // Add new Sinclair IDs here
  ],

  "outis": [
    { id: "outis-lcb", sinnerId: "outis", name: "LCB Sinner", isBase: true },
    { id: "outis-blade", sinnerId: "outis", name: "Blade Lineage Salsu"},
    { id: "outis-gcorp", sinnerId: "outis", name: "G Corp. Head Manager"},
    { id: "outis-cinq", sinnerId: "outis", name: "Cinq Assoc. South Section 4"},
    { id: "outis-ring", sinnerId: "outis", name: "The Ring Pointillist Student"},
    { id: "outis-seven", sinnerId: "outis", name: "Seven Assoc. South Section 6 Director"},
    { id: "outis-molar", sinnerId: "outis", name: "Molar Office Fixer"},
    { id: "outis-lobotomyego", sinnerId: "outis", name: "Lobotomy EGO: Magic Bullet"},
    { id: "outis-wuthering", sinnerId: "outis", name: "Wuthering Heights Chief Butler"},
    { id: "outis-wcorp", sinnerId: "outis", name: "W Corp. L3 Cleanup Captain"},
    { id: "outis-bloodfiend", sinnerId: "outis", name: "The Barber of La Manchaland"},
    { id: "outis-heishou", sinnerId: "outis", name: "Heishou Pack - Mao Branch"},
    { id: "outis-tcorp", sinnerId: "outis", name: "T Corp. Class 3 VDCU Staff"},
    // Add new Outis IDs here
  ],

  "gregor": [
    { id: "gregor-lcb", sinnerId: "gregor", name: "LCB Sinner", isBase: true },
    { id: "gregor-liu", sinnerId: "gregor", name: "Liu Assoc. South Section 6"},
    { id: "gregor-chef", sinnerId: "gregor", name: "R.B. Sous-chef"},
    { id: "gregor-rosespanner", sinnerId: "gregor", name: "Rosespanner Workshop Fixer"},
    { id: "gregor-kurokumo", sinnerId: "gregor", name: "Kurokumo Clan Captain"},
    { id: "gregor-gcorp", sinnerId: "gregor", name: "G Corp. Manager Corporal"},
    { id: "gregor-zwei", sinnerId: "gregor", name: "Zwei Assoc. South Section 4"},
    { id: "gregor-twinhook", sinnerId: "gregor", name: "Twinhook Pirates First Mate"},
    { id: "gregor-wuthering", sinnerId: "gregor", name: "Edgar Family Heir"},
    { id: "gregor-bloodfiend", sinnerId: "gregor", name: "The Priest of La Manchaland"},
    { id: "gregor-firefist", sinnerId: "gregor", name: "Firefist Office Survivor"},
    { id: "gregor-heishou", sinnerId: "gregor", name: "Heishou Pack - Si Branch"},
    { id: "gregor-nightawls", sinnerId: "gregor", name: "Night Awls Capitano"},
    // Add new Gregor IDs here
  ]
};

// --- EGOs per Sinner ---
// rank: "ZAYIN" | "TETH" | "HE" | "WAW" | "ALEPH"
const sinnerEgos = {
  "yi-sang": [
    {
      id: "yi-sang-crow-zayin",
      sinnerId: "yi-sang",
      name: "Crow's Eye View",
      rank: "ZAYIN",
      isBase: true
    },
    {
      id: "yi-sang-bygone-zayin",
      sinnerId: "yi-sang",
      name: "Bygone Days",
      rank: "ZAYIN",
    },
    {
      id: "yi-sang-flame-teth",
      sinnerId: "yi-sang",
      name: "4th Match Flame",
      rank: "TETH",
    },
    {
      id: "yi-sang-cairn-teth",
      sinnerId: "yi-sang",
      name: "Wishing Cairn",
      rank: "TETH",
    },
    {
      id: "yi-sang-dimension-he",
      sinnerId: "yi-sang",
      name: "Dimension Shredder",
      rank: "HE",
    },
    {
      id: "yi-sang-fell-he",
      sinnerId: "yi-sang",
      name: "Fell Bullet",
      rank: "HE",
    },
    {
      id: "yi-sang-sunshower-waw",
      sinnerId: "yi-sang",
      name: "Sunshower",
      rank: "WAW",
    },
  ],

  "faust": [
    {
      id: "faust-emitter-zayin",
      sinnerId: "faust",
      name: "Representation Emitter",
      rank: "ZAYIN",
      isBase: true
    },
    {
      id: "faust-hex-teth",
      sinnerId: "faust",
      name: "Hex Nail",
      rank: "TETH",
    },
    {
      id: "faust-9:2-teth",
      sinnerId: "faust",
      name: "9:2",
      rank: "TETH",
    },
    {
      id: "faust-lasso-teth",
      sinnerId: "faust",
      name: "Lasso",
      rank: "TETH",
    },
    {
      id: "faust-fluid-he",
      sinnerId: "faust",
      name: "Fluid Sac",
      rank: "HE",
    },
    {
      id: "faust-telepole-he",
      sinnerId: "faust",
      name: "Telepole",
      rank: "HE",
    },
    {
      id: "faust-thoracalgia-he",
      sinnerId: "faust",
      name: "Thoracalgia",
      rank: "HE",
    },
    {
      id: "faust-meltdown-he",
      sinnerId: "faust",
      name: "Command: Meltdown",
      rank: "HE",
    },
    {
      id: "faust-everlasting-waw",
      sinnerId: "faust",
      name: "Everlasting",
      rank: "WAW",
    },
    // Add new Faust EGOs here
  ],

  "don-quixote": [
    {
      id: "don-sancho-zayin",
      sinnerId: "don-quixote",
      name: "La Sangre de Sancho",
      rank: "ZAYIN",
      isBase: true
    },
    {
      id: "don-quixote-stew-teth",
      sinnerId: "don-quixote",
      name: "Lifetime Stew",
      rank: "TETH",
    },
    {
      id: "don-quixote-cairn-teth",
      sinnerId: "don-quixote",
      name: "Wishing Cairn",
      rank: "TETH",
    },
    {
      id: "don-quixote-electric-teth",
      sinnerId: "don-quixote",
      name: "Electric Screaming",
      rank: "TETH",
    },
    {
      id: "don-quixote-fluid-he",
      sinnerId: "don-quixote",
      name: "Fluid Sac",
      rank: "HE",
    },
    {
      id: "don-quixote-telepole-he",
      sinnerId: "don-quixote",
      name: "Telepole",
      rank: "HE",
    },
    {
      id: "don-quixote-sheet-he",
      sinnerId: "don-quixote",
      name: "Red Sheet",
      rank: "HE",
    },
    {
      id: "don-quixote-mircalla-waw",
      sinnerId: "don-quixote",
      name: "Yearning-Mircalla",
      rank: "WAW",
    },
    {
      id: "don-quixote-lovehate-waw",
      sinnerId: "don-quixote",
      name: "In the Name of Love and Hate",
      rank: "WAW",
    },
    // Add new Don EGOs here
  ],

  "ryoshu": [
    {
      id: "ryoshu-forest-zayin",
      sinnerId: "ryoshu",
      name: "Forest for the Flames",
      rank: "ZAYIN",
      isBase: true
    },
    {
      id: "ryoshu-soda-zayin",
      sinnerId: "ryoshu",
      name: "Soda",
      rank: "ZAYIN",
    },
    {
      id: "ryoshu-redeyes-teth",
      sinnerId: "ryoshu",
      name: "Red Eyes",
      rank: "TETH",
    },
    {
      id: "ryoshu-obsession-teth",
      sinnerId: "ryoshu",
      name: "Blind Obsession",
      rank: "TETH",
    },
    {
      id: "ryoshu-flame-he",
      sinnerId: "ryoshu",
      name: "4th Match Flame",
      rank: "HE",
    },
    {
      id: "ryoshu-redeyes-he",
      sinnerId: "ryoshu",
      name: "Red Eyes (Open)",
      rank: "HE",
    },
    {
      id: "ryoshu-thoracalgia-he",
      sinnerId: "ryoshu",
      name: "Thoracalgia",
      rank: "HE",
    },
    {
      id: "ryoshu-contempt-waw",
      sinnerId: "ryoshu",
      name: "Contempt, Awe",
      rank: "WAW",
    },
    // Add new Ryoshu EGOs here
  ],

  "meursault": [
    {
      id: "meursault-chains-zayin",
      sinnerId: "meursault",
      name: "Chains of Others",
      rank: "ZAYIN",
      isBase: true
    },
    {
      id: "meursault-screwloose-teth",
      sinnerId: "meursault",
      name: "Screwloose Wallop",
      rank: "TETH",
    },
    {
      id: "meursault-regret-teth",
      sinnerId: "meursault",
      name: "Regret",
      rank: "TETH",
    },
    {
      id: "meursault-electric-teth",
      sinnerId: "meursault",
      name: "Electric Screaming",
      rank: "TETH",
    },
    {
      id: "meursault-pursuance-he",
      sinnerId: "meursault",
      name: "Pursuance",
      rank: "HE",
    },
    {
      id: "meursault-capote-he",
      sinnerId: "meursault",
      name: "Capote",
      rank: "HE",
    },
    {
      id: "meursault-mircalla-waw",
      sinnerId: "meursault",
      name: "Yearning-Mircalla",
      rank: "WAW",
    },
    {
      id: "meursault-crushbound-waw",
      sinnerId: "meursault",
      name: "Crushbound Past",
      rank: "WAW",
    },
    // Add new Meursault EGOs here
  ],

  "hong-lu": [
    {
      id: "hong-lu-illusion-zayin",
      sinnerId: "hong-lu",
      name: "Land of Illusion",
      rank: "ZAYIN",
      isBase: true
    },
    {
      id: "hong-lu-desire-teth",
      sinnerId: "hong-lu",
      name: "Roseate Desire",
      rank: "TETH",
    },
    {
      id: "hong-lu-soda-teth",
      sinnerId: "hong-lu",
      name: "Soda",
      rank: "TETH",
    },
    {
      id: "hong-lu-cavernous-teth",
      sinnerId: "hong-lu",
      name: "Cavernous Wailing",
      rank: "TETH",
    },
    {
      id: "hong-lu-lasso-teth",
      sinnerId: "hong-lu",
      name: "Lasso",
      rank: "TETH",
    },
    {
      id: "hong-lu-dimension-he",
      sinnerId: "hong-lu",
      name: "Dimension Shredder",
      rank: "HE",
    },
    {
      id: "hong-lu-effervescent-he",
      sinnerId: "hong-lu",
      name: "Effervescent Corrosion",
      rank: "HE",
    },
    {
      id: "hong-lu-oneself-he",
      sinnerId: "hong-lu",
      name: "To Remain Oneself",
      rank: "HE",
    },
    {
      id: "hong-lu-tarnished-waw",
      sinnerId: "hong-lu",
      name: "Tears of the Tarnished Blood",
      rank: "WAW",
    },
    // Add new Hong Lu EGOs here
  ],

  "heathcliff": [
    {
      id: "heathcliff-bodysack-zayin",
      sinnerId: "heathcliff",
      name: "Bodysack",
      rank: "ZAYIN",
      isBase: true
    },
    {
      id: "heathcliff-holiday-zayin",
      sinnerId: "heathcliff",
      name: "Holiday",
      rank: "ZAYIN",
    },
    {
      id: "heathcliff-AEDD-teth",
      sinnerId: "heathcliff",
      name: "AEDD",
      rank: "TETH",
    },
    {
      id: "heathcliff-fell-teth",
      sinnerId: "heathcliff",
      name: "Fell Bullet",
      rank: "TETH",
    },
    {
      id: "heathcliff-telepole-he",
      sinnerId: "heathcliff",
      name: "Telepole",
      rank: "HE",
    },
    {
      id: "heathcliff-ya-he",
      sinnerId: "heathcliff",
      name: "Ya Sunyata Tad Rupam",
      rank: "HE",
    },
    {
      id: "heathcliff-inertia-he",
      sinnerId: "heathcliff",
      name: "Asymmetrical Inertia",
      rank: "HE",
    },
    {
      id: "heathcliff-binds-waw",
      sinnerId: "heathcliff",
      name: "Binds",
      rank: "WAW",
    },
    // Add new Heathcliff EGOs here
  ],

  "ishmael": [
    {
      id: "ishmael-snagharpoon-zayin",
      sinnerId: "ishmael",
      name: "Snagharpoon",
      rank: "ZAYIN",
      isBase: true
    },
    {
      id: "ishmael-maggot-zayin",
      sinnerId: "ishmael",
      name: "Hundred-Footed Death Maggot",
      rank: "ZAYIN",
    },
    {
      id: "ishmael-desire-teth",
      sinnerId: "ishmael",
      name: "Roseate Desire",
      rank: "TETH",
    },
    {
      id: "ishmael-capote-teth",
      sinnerId: "ishmael",
      name: "Capote",
      rank: "TETH",
    },
    {
      id: "ishmael-bygone-teth",
      sinnerId: "ishmael",
      name: "Bygone Days",
      rank: "TETH",
    },
    {
      id: "ishmael-ardor-he",
      sinnerId: "ishmael",
      name: "Ardor Blossom Star",
      rank: "HE",
    },
    {
      id: "ishmael-wingbeat-he",
      sinnerId: "ishmael",
      name: "Wingbeat",
      rank: "HE",
    },
    {
      id: "ishmael-christmas-he",
      sinnerId: "ishmael",
      name: "Christmas Nightmare",
      rank: "HE",
    },
    {
      id: "ishmael-tidal-he",
      sinnerId: "ishmael",
      name: "Tidal Elegy",
      rank: "HE",
    },
    {
      id: "ishmael-obsession-waw",
      sinnerId: "ishmael",
      name: "Blind Obsession",
      rank: "WAW",
    },
    // Add new Ishmael EGOs here
  ],

  "rodion": [
    {
      id: "rodion-cast-zayin",
      sinnerId: "rodion",
      name: "What is Cast",
      rank: "ZAYIN",
      isBase: true
    },
    {
      id: "rodion-rime-teth",
      sinnerId: "rodion",
      name: "Rime Shank",
      rank: "TETH",
    },
    {
      id: "rodion-effervescent-teth",
      sinnerId: "rodion",
      name: "Effervescent Corrosion",
      rank: "TETH",
    },
    {
      id: "rodion-flame-he",
      sinnerId: "rodion",
      name: "4th Match Flame",
      rank: "HE",
    },
    {
      id: "rodion-pursuance-he",
      sinnerId: "rodion",
      name: "Pursuance",
      rank: "HE",
    },
    {
      id: "rodion-hex-he",
      sinnerId: "rodion",
      name: "Hex Nail",
      rank: "HE",
    },
    {
      id: "rodion-sanguine-waw",
      sinnerId: "rodion",
      name: "Sanguine Desire",
      rank: "WAW",
    },
    {
      id: "rodion-indicants-waw",
      sinnerId: "rodion",
      name: "Indicant's Trial",
      rank: "WAW",
    },
    // Add new Rodion EGOs here
  ],

  "sinclair": [
    {
      id: "sinclair-branch-zayin",
      sinnerId: "sinclair",
      name: "Branch of Knowledge",
      rank: "ZAYIN",
      isBase: true
    },
    {
      id: "sinclair-cavernous-zayin",
      sinnerId: "sinclair",
      name: "Cavernous Wailing",
      rank: "ZAYIN",
    },
    {
      id: "sinclair-impending-teth",
      sinnerId: "sinclair",
      name: "Impending Day",
      rank: "TETH",
    },
    {
      id: "sinclair-stew-teth",
      sinnerId: "sinclair",
      name: "Lifetime Stew",
      rank: "TETH",
    },
    {
      id: "sinclair-hex-teth",
      sinnerId: "sinclair",
      name: "Hex Nail",
      rank: "TETH",
    },
    {
      id: "sinclair-lantern-he",
      sinnerId: "sinclair",
      name: "Lantern",
      rank: "HE",
    },
    {
      id: "sinclair-9:2-he",
      sinnerId: "sinclair",
      name: "9:2",
      rank: "HE",
    },
    {
      id: "sinclair-tarnished-waw",
      sinnerId: "sinclair",
      name: "Tears of the Tarnished Blood",
      rank: "WAW",
    },
    // Add new Sinclair EGOs here
  ],

  "outis": [
    {
      id: "outis-pathos-zayin",
      sinnerId: "outis",
      name: "To Pathos Mathos",
      rank: "ZAYIN",
      isBase: true
    },
    {
      id: "outis-ya-teth",
      sinnerId: "outis",
      name: "Ya Sunyata Tad Rupam",
      rank: "TETH",
    },
    {
      id: "outis-sunshower-teth",
      sinnerId: "outis",
      name: "Sunshower",
      rank: "TETH",
    },
    {
      id: "outis-ebony-he",
      sinnerId: "outis",
      name: "Ebony Stem",
      rank: "HE",
    },
    {
      id: "outis-holiday-he",
      sinnerId: "outis",
      name: "Holiday",
      rank: "HE",
    },
    {
      id: "outis-dimension-he",
      sinnerId: "outis",
      name: "Dimension Shredder",
      rank: "HE",
    },
    {
      id: "outis-magic-he",
      sinnerId: "outis",
      name: "Magic Bullet",
      rank: "HE",
    },
    {
      id: "outis-binds-waw",
      sinnerId: "outis",
      name: "Binds",
      rank: "WAW",
    },
    // Add new Outis EGOs here
  ],

  "gregor": [
    {
      id: "gregor-suddenly-zayin",
      sinnerId: "gregor",
      name: "Suddenly, One Day",
      rank: "ZAYIN",
      isBase: true
    },
    {
      id: "gregor-legerdemain-zayin",
      sinnerId: "gregor",
      name: "Legerdemain",
      rank: "ZAYIN",
    },
    {
      id: "gregor-lantern-teth",
      sinnerId: "gregor",
      name: "Lantern",
      rank: "TETH",
    },
    {
      id: "gregor-bygone-teth",
      sinnerId: "gregor",
      name: "Bygone Days",
      rank: "TETH",
    },
    {
      id: "gregor-AEDD-he",
      sinnerId: "gregor",
      name: "AEDD",
      rank: "HE",
    },
    {
      id: "gregor-solemn-he",
      sinnerId: "gregor",
      name: "Solemn Lament",
      rank: "HE",
    },
    {
      id: "gregor-christmas-he",
      sinnerId: "gregor",
      name: "Christmas Nightmare",
      rank: "HE",
    },
    {
      id: "gregor-garden-waw",
      sinnerId: "gregor",
      name: "Garden of Thorns",
      rank: "WAW",
    },
    {
      id: "gregor-unbrilliant-waw",
      sinnerId: "gregor",
      name: "Unbrilliant Glory",
      rank: "WAW",
    },
    // Add new Gregor EGOs here
  ]
};

// --- Flatten per-Sinner data into global arrays ---
const identities = Object.values(sinnerIdentities).reduce(
  (acc, arr) => acc.concat(arr),
  []
);
const egos = Object.values(sinnerEgos).reduce(
  (acc, arr) => acc.concat(arr),
  []
);

// --- Base IDs/EGOs (always owned) ---
const baseIdentityIds = new Set(
  identities.filter((idn) => idn.isBase).map((idn) => idn.id)
);
const baseEgoIds = new Set(
  egos.filter((ego) => ego.isBase).map((ego) => ego.id)
);

// --- Owned sets (to be replaced by Settings UI later) ---
let userOwnedIdentityIds = new Set(identities.map((idn) => idn.id));
let userOwnedEgoIds = new Set(egos.map((ego) => ego.id));

// --- Ownership check helpers ---
function isIdentityOwned(id) {
  return baseIdentityIds.has(id) || userOwnedIdentityIds.has(id);
}

function isEgoOwned(id) {
  return baseEgoIds.has(id) || userOwnedEgoIds.has(id);
}
