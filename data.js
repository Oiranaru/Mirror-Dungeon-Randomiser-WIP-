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
    { id: "yi-sang-lcb", sinnerId: "yi-sang", name: "LCB Sinner", isBase: true, img: "img/IDs/yi-sang-lcb.png", keywords: ["sinking", "slash", "pierce"] },
    { id: "yi-sang-seven", sinnerId: "yi-sang", name: "Seven Assoc. South Section 6", img: "img/IDs/yi-sang-seven.png", keywords: ["rupture", "pierce", "blunt"]},
    { id: "yi-sang-molar", sinnerId: "yi-sang", name: "Molar Officer Fixer", img: "img/IDs/yi-sang-molar.png", keywords: ["tremor", "pierce", "blunt"]},
    { id: "yi-sang-pequod", sinnerId: "yi-sang", name: "The Pequod First Mate", img: "img/IDs/yi-sang-pequod.png", keywords: ["bleed", "poise", "pierce"]},
    { id: "yi-sang-dieci", sinnerId: "yi-sang", name: "Dieci Assoc. South Section 4", img: "img/IDs/yi-sang-dieci.png", keywords: ["sinking", "blunt", "pierce"]},
    { id: "yi-sang-lceego", sinnerId: "yi-sang", name: "LCE EGO: Lantern", img: "img/IDs/yi-sang-lceego.png", keywords: ["rupture", "blunt", "pierce"]},
    { id: "yi-sang-blade", sinnerId: "yi-sang", name: "Blade Lineage Salsu", img: "img/IDs/yi-sang-blade.png", keywords: ["slash", "poise"]},
    { id: "yi-sang-efflorescedego", sinnerId: "yi-sang", name: "Effloresced EGO: Spicebush", img: "img/IDs/yi-sang-efflorescedego.png", keywords: ["sinking", "tremor", "pierce", "blunt"]},
    { id: "yi-sang-wcorp", sinnerId: "yi-sang", name: "W.Corp L3 Cleanup Agent", img: "img/IDs/yi-sang-wcorp.png", keywords: ["rupture", "charge", "slash", "pierce"]},
    { id: "yi-sang-ring", sinnerId: "yi-sang", name: "The Ring Pointillist Student", img: "img/IDs/yi-sang-ring.png", keywords: ["bleed", "pierce"]},
    { id: "yi-sang-lobotomyego", sinnerId: "yi-sang", name: "Lobotomy EGO: Solemn Lament", img: "img/IDs/yi-sang-lobotomyego.png", keywords: ["sinking", "pierce"]},
    { id: "yi-sang-liu", sinnerId: "yi-sang", name: "Liu Assoc. South Section 3", img: "img/IDs/yi-sang-liu.png", keywords: ["burn", "slash"]},
    { id: "yi-sang-ncorpego", sinnerId: "yi-sang", name: "N Corp EGO: Fell Bullet", img: "img/IDs/yi-sang-ncorpego.png", keywords: ["bleed", "poise", "blunt", "pierce"]},
    { id: "yi-sang-heishou", sinnerId: "yi-sang", name: "Heishou Pack - Wu Branch Adept", img: "img/IDs/yi-sang-heishou.png", keywords: ["rupture", "tremor", "slash"]},
    // Add new Yi Sang IDs here
  ],

  "faust": [
    { id: "faust-lcb", sinnerId: "faust", name: "LCB Sinner", isBase: true, img: "img/IDs/faust-lcb.png", keywords: ["blunt", "pierce"]},
    { id: "faust-wcorp", sinnerId: "faust", name: "W Corp. L2 Cleanup Agent", img: "img/IDs/faust-wcorp.png", keywords: ["charge", "blunt"]},
    { id: "faust-lobotomycorp", sinnerId: "faust", name: "Lobotomy Corp. Remnant", img: "img/IDs/faust-lobotomycorp.png", keywords: ["poise", "rupture", "slash", "pierce"]},
    { id: "faust-zwei", sinnerId: "faust", name: "Zwei Assoc. South Section 4", img: "img/IDs/faust-zwei.png", keywords: ["pierce", "slash", ]},
    { id: "faust-wuthering", sinnerId: "faust", name: "Wuthering Heights Butler", img: "img/IDs/faust-wuthering.png", keywords: ["sinking", "slash", "blunt", ]},
    { id: "faust-ncorp", sinnerId: "faust", name: "The One Who Grips", img: "img/IDs/faust-ncorp.png", keywords: ["bleed", "pierce", "blunt", ]},
    { id: "faust-seven", sinnerId: "faust", name: "Seven Assoc. South Section 4", img: "img/IDs/faust-seven.png", keywords: ["rupture", "slash", ]},
    { id: "faust-lobotomyego", sinnerId: "faust", name: "Lobotomy EGO: Regret", img: "img/IDs/faust-lobotomyego.png", keywords: ["tremor", "blunt", ]},
    { id: "faust-blade", sinnerId: "faust", name: "Blade Lineage Salsu", img: "img/IDs/faust-blade.png", keywords: ["bleed", "poise", "slash", "pierce", ]},
    { id: "faust-multicrack", sinnerId: "faust", name: "MultiCrack Office Rep", img: "img/IDs/faust-multicrack.png", keywords: ["charge", "blunt", "slash", ]},
    { id: "faust-lceego", sinnerId: "faust", name: "LCE EGO: Ardor Blossom Star", img: "img/IDs/faust-lceego.png", keywords: ["burn", "blunt", ]},
    { id: "faust-heishou", sinnerId: "faust", name: "Heishou Pack - Mao Branch Adept", img: "img/IDs/faust-heishou.png", keywords: ["slash", "rupture", ]},
    { id: "faust-shi", sinnerId: "faust", name: "Shi Assoc. East Section 3", img: "img/IDs/faust-shi.png", keywords: ["bleed", "slash", "poise", ]},
    // Add new Faust IDs here
  ],

  "don-quixote": [
    { id: "don-quixote-lcb", sinnerId: "don-quixote", name: "LCB Sinner", isBase: true, img: "img/IDs/don-quixote-lcb.png", keywords: ["bleed", "pierce", ] },
    { id: "don-quixote-shi", sinnerId: "don-quixote", name: "Shi Assoc. South Section 5 Director", img: "img/IDs/don-quixote-shi.png", keywords: ["poise", "slash", ]},
    { id: "don-quixote-ncorp", sinnerId: "don-quixote", name: "N Corp. Mittelhammer", img: "img/IDs/don-quixote-ncorp.png", keywords: ["bleed", "tremor", "pierce", "blunt", ]},
    { id: "don-quixote-lobotomyego", sinnerId: "don-quixote", name: "Lobotomy EGO: Lantern", img: "img/IDs/don-quixote-lobotomyegolantern.png", keywords: ["pierce", "slash", "rupture", ]},
    { id: "don-quixote-blade", sinnerId: "don-quixote", name: "Blade Lineage Salsu", img: "img/IDs/don-quixote-blade.png", keywords: ["pierce", "slash", "poise", ]},
    { id: "don-quixote-wcorp", sinnerId: "don-quixote", name: "W Corp. L3 Cleanup Agent", img: "img/IDs/don-quixote-wcorp.png", keywords: ["pierce", "slash", "rupture", "charge", ]},
    { id: "don-quixote-cinq", sinnerId: "don-quixote", name: "Cinq Assoc. South Section 5 Director", img: "img/IDs/don-quixote-cinqsouth.png", keywords: ["pierce", ]},
    { id: "don-quixote-middle", sinnerId: "don-quixote", name: "The Middle Little Sister", img: "img/IDs/don-quixote-middle.png", keywords: ["blunt", "bleed", ]},
    { id: "don-quixote-tcorp", sinnerId: "don-quixote", name: "T.Corp. Class 3 Collection Staff", img: "img/IDs/don-quixote-tcorp.png", keywords: ["blunt", "slash", "tremor", ]},
    { id: "don-quixote-bloodfiend", sinnerId: "don-quixote", name: "The Manager of La Manchaland", img: "img/IDs/don-quixote-bloodfiend.png", keywords: ["bleed", "pierce", ]},
    { id: "don-quixote-cinq", sinnerId: "don-quixote", name: "Cinq Assoc. East Section 3", img: "img/IDs/don-quixote-cinqeast.png", keywords: ["burn", "poise", "pierce", ]},
    { id: "don-quixote-lobotomyego", sinnerId: "don-quixote", name: "Lobotomy EGO: In the Name of Love and Hate", img: "img/IDs/don-quixote-lobotomyegolovehate.png", keywords: ["sinking", "rupture", "charge", "blunt", ]},
    { id: "don-quixote-heishou", sinnerId: "don-quixote", name: "Heishou Pack - Wei Branch", img: "img/IDs/don-quixote-heishou.png", keywords: ["sinking", "rupture", "blunt", ]},
    // Add new Don IDs here
  ],

  "ryoshu": [
    { id: "ryoshu-lcb", sinnerId: "ryoshu", name: "LCB Sinner", isBase: true, img: "img/IDs/ryoshu-lcb.png", keywords: ["slash", "poise", ]},
    { id: "ryoshu-seven", sinnerId: "ryoshu", name: "Seven Assoc. South Section 6", img: "img/IDs/ryoshu-seven.png", keywords: ["rupture", "blunt", "slash", ]},
    { id: "ryoshu-lccb", sinnerId: "ryoshu", name: "LCCB Assistant Manager", img: "img/IDs/ryoshu-lccb.png", keywords: ["tremor", "rupture", "pierce", "blunt", ]},
    { id: "ryoshu-liu", sinnerId: "ryoshu", name: "Liu Assoc. South Section 4", img: "img/IDs/ryoshu-liu.png", keywords: ["burn", "pierce", "slash", ]},
    { id: "ryoshu-yurodivy", sinnerId: "ryoshu", name: "District 20 Yurodivy", img: "img/IDs/ryoshu-yurodivy.png", keywords: ["tremor", "blunt", "pierce", ]},
    { id: "ryoshu-kurokumo", sinnerId: "ryoshu", name: "Kurokumo Clan Wakashu", img: "img/IDs/ryoshu-kurokumo.png", keywords: ["bleed", "pierce", ]},
    { id: "ryoshu-chef", sinnerId: "ryoshu", name: "R.B. Chef de Cuisine", img: "img/IDs/ryoshu-chef.png", keywords: ["bleed", "pierce", "slash", ]},
    { id: "ryoshu-wcorp", sinnerId: "ryoshu", name: "W Corp. L3 Cleanup Agent", img: "img/IDs/ryoshu-wcorp.png", keywords: ["slash", "charge", ]},
    { id: "ryoshu-wuthering", sinnerId: "ryoshu", name: "Edgar Family Chief Butler", img: "img/IDs/ryoshu-wuthering.png", keywords: ["slash", "poise", ]},
    { id: "ryoshu-lobotomyego", sinnerId: "ryoshu", name: "Lobotomy EGO: Red Eyes & Penitence", img: "img/IDs/ryoshu-lobotomyego.png", keywords: ["bleed", "blunt", ]},
    { id: "ryoshu-heishou", sinnerId: "ryoshu", name: "Heishou Pack - Mao Branch", img: "img/IDs/ryoshu-heishou.png", keywords: ["rupture", "slash", ]},
    { id: "ryoshu-ncorpego", sinnerId: "ryoshu", name: "N Corp. EGO: Contempt, Awe", img: "img/IDs/ryoshu-ncorpego.png", keywords: ["bleed", "tremor", "pierce", ]},
    { id: "ryoshu-drifting", sinnerId: "Drifting Blade of Hongyuan", name: "", img: "img/IDs/ryoshu-drifting.png", keywords: ["pierce", "poise", "rupture", ], },
    // Add new Ryoshu IDs here
  ],

  "meursault": [
    { id: "meursault-lcb", sinnerId: "meursault", name: "LCB Sinner", isBase: true, img: "img/IDs/meursault-lcb.png", keywords: ["tremor", "blunt", ]},
    { id: "meursault-liu", sinnerId: "meursault", name: "Liu Assoc. South Section 6", img: "img/IDs/meursault-liu.png", keywords: ["burn", "pierce", "blunt", ]},
    { id: "meursault-rosespanner", sinnerId: "meursault", name: "Rosespanner Workshop Fixer", img: "img/IDs/meursault-rosespanner.png", keywords: ["tremor", "charge", "blunt", ]},
    { id: "meursault-middle", sinnerId: "meursault", name: "The Middle Little Brother", img: "img/IDs/meursault-middle.png", keywords: ["bleed", "blunt", ]},
    { id: "meursault-deadrabbit", sinnerId: "meursault", name: "Dead Rabbits Boss", img: "img/IDs/meursault-deadrabbit.png", keywords: ["rupture", "pierce", "blunt", ]},
    { id: "meursault-wcorp", sinnerId: "meursault", name: "W Corp. L2 Cleanup Agent", img: "img/IDs/meursault-wcorp.png", keywords: ["rupture", "slash", "charge", ]},
    { id: "meursault-ncorp", sinnerId: "meursault", name: "N Corp. Großhammer", img: "img/IDs/meursault-ncorp.png", keywords: ["bleed", "pierce", "blunt", ]},
    { id: "meursault-rcorp", sinnerId: "meursault", name: "R Corp. 4th Pack Rhino", img: "img/IDs/meursault-rcorp.png", keywords: ["bleed", "blunt", "slash", "charge", ]},
    { id: "meursault-blade", sinnerId: "meursault", name: "Blade Lineage Mentor", img: "img/IDs/meursault-blade.png", keywords: ["slash", "poise", ]},
    { id: "meursault-dieci", sinnerId: "meursault", name: "Dieci Assoc. South Section 4 Director", img: "img/IDs/meursault-dieci.png", keywords: ["sinking", "blunt", "pierce", ]},
    { id: "meursault-cinq", sinnerId: "meursault", name: "Cinq Assoc. West Section 3", img: "img/IDs/meursault-cinq.png", keywords: ["rupture", "pierce", "poise", ]},
    { id: "meursault-thumb", sinnerId: "meursault", name: "The Thumb East Capo IIIII", img: "img/IDs/meursault-thumb.png", keywords: ["burn", "tremor", "blunt", "slash", ]},
    { id: "meursault-bloodfiend", sinnerId: "meursault", name: "The Prince of La Manchaland", img: "img/IDs/meursault-bloodfiend.png", keywords: ["bleed", "rupture", "slash", ]},
    // Add new Meursault IDs here
  ],

  "hong-lu": [
    { id: "hong-lu-lcb", sinnerId: "hong-lu", name: "LCB Sinner", isBase: true, img: "img/IDs/hong-lu-lcb.png", keywords: ["sinking", "rupture", "blunt", "slash", ]},
    { id: "hong-lu-kurokumo", sinnerId: "hong-lu", name: "Kurokumo Clan Wakashu", img: "img/IDs/hong-lu-kurokumo.png", keywords: ["bleed", "slash", ]},
    { id: "hong-lu-liu", sinnerId: "hong-lu", name: "Liu Assoc. South Section 5", img: "img/IDs/hong-lu-liu.png", keywords: ["burn", "blunt", ]},
    { id: "hong-lu-wcorp", sinnerId: "hong-lu", name: "W Corp. L2 Cleanup Agent", img: "img/IDs/hong-lu-wcorp.png", keywords: ["rupture", "charge", "slash", "pierce", ]},
    { id: "hong-lu-hookoffice", sinnerId: "hong-lu", name: "Hook Office Fixer", img: "img/IDs/hong-lu-hookoffice.png", keywords: ["bleed", "pierce", ]},
    { id: "hong-lu-fanghuntoffice", sinnerId: "hong-lu", name: "Fanghunt Office Fixer", img: "img/IDs/hong-lu-fanghuntoffice.png", keywords: ["blunt", "rupture", ]},
    { id: "hong-lu-tingtang", sinnerId: "hong-lu", name: "Tingtang Gang Gangleader", img: "img/IDs/hong-lu-tingtang.png", keywords: ["bleed", "pierce", "slash", ]},
    { id: "hong-lu-kcorp", sinnerId: "hong-lu", name: "K Corp. Class 3 Excision Staff", img: "img/IDs/hong-lu-kcorp.png", keywords: ["rupture", "blunt", "slash", ]},
    { id: "hong-lu-dieci", sinnerId: "hong-lu", name: "Dieci Assoc. South Section 4", img: "img/IDs/hong-lu-dieci.png", keywords: ["sinking", "blunt", "slash", ]},
    { id: "hong-lu-yurodivy", sinnerId: "hong-lu", name: "District 20 Yurodivy", img: "img/IDs/hong-lu-yurodivy.png", keywords: ["tremor", "blunt", "pierce", ]},
    { id: "hong-lu-fullstop", sinnerId: "hong-lu", name: "Full-Stop Office Rep", img: "img/IDs/hong-lu-fullstop.png", keywords: ["poise", "slash", "pierce", ]},
    { id: "hong-lu-rcorp", sinnerId: "hong-lu", name: "R Corp. 4th Pack Reindeer", img: "img/IDs/hong-lu-rcorp.png", keywords: ["blunt", "sinking", "charge", ]},
    { id: "hong-lu-heishou", sinnerId: "hong-lu", name: "The Lord of Hongyuan", img: "img/IDs/hong-lu-heishou.png", keywords: ["slash", "rupture", ]},
    // Add new Hong Lu IDs here
  ],

  "heathcliff": [
    { id: "heathcliff-lcb", sinnerId: "heathcliff", name: "LCB Sinner", isBase: true, img: "img/IDs/heathcliff-lcb.png", keywords: ["tremor", "blunt", ]},
    { id: "heathcliff-shi", sinnerId: "heathcliff", name: "Shi Assoc. South Section 5", img: "img/IDs/heathcliff-shi.png", keywords: ["poise", "pierce", "slash", ]},
    { id: "heathcliff-ncorp", sinnerId: "heathcliff", name: "N Corp. Kleinhammer", img: "img/IDs/heathcliff-ncorp.png", keywords: ["bleed", "pierce", "blunt", ]},
    { id: "heathcliff-seven", sinnerId: "heathcliff", name: "Seven Assoc. South Section 4", img: "img/IDs/heathcliff-seven.png", keywords: ["pierce", "slash", "rupture", ]},
    { id: "heathcliff-multicrack", sinnerId: "heathcliff", name: "MultiCrack Office Fixer", img: "img/IDs/heathcliff-multicrack.png", keywords: ["blunt", "slash", "charge", ]},
    { id: "heathcliff-rcorp", sinnerId: "heathcliff", name: "R Corp. 4th Pack Rabbit", img: "img/IDs/heathcliff-rcorp.png", keywords: ["bleed", "rupture", "charge", "pierce", ]},
    { id: "heathcliff-lobotomyego", sinnerId: "heathcliff", name: "Lobotomy EGO: Sunshower", img: "img/IDs/heathcliff-lobotomyego.png", keywords: ["sinking", "rupture", "pierce", "blunt", ]},
    { id: "heathcliff-pequod", sinnerId: "heathcliff", name: "The Pequod Harpooneer", img: "img/IDs/heathcliff-pequod.png", keywords: ["bleed", "poise", "pierce", ]},
    { id: "heathcliff-oufi", sinnerId: "heathcliff", name: "Oufi Assoc. South Section 3", img: "img/IDs/heathcliff-oufi.png", keywords: ["tremor", "pierce", "slash", ]},
    { id: "heathcliff-wuthering", sinnerId: "heathcliff", name: "Wild Hunt", img: "img/IDs/heathcliff-wuthering.png", keywords: ["sinking", "blunt", "slash", ]},
    { id: "heathcliff-fullstop", sinnerId: "heathcliff", name: "Full-Stop Office Fixer", img: "img/IDs/heathcliff-fullstop.png", keywords: ["poise", "pierce", ]},
    { id: "heathcliff-kurokumo", sinnerId: "heathcliff", name: "Kurokumo Clan Wakashu", img: "img/IDs/heathcliff-kurokumo.png", keywords: ["bleed", "slash", ]},
    { id: "heathcliff-wcorp", sinnerId: "heathcliff", name: "W Corp. L4 Cleanup Agent", img: "img/IDs/heathcliff-wcorp.png", keywords: ["rupture", "charge", "blunt", ]},
    { id: "heathcliff-heishou", sinnerId: "heathcliff", name: "Heishou Pack - You Branch Adept", img: "img/IDs/heathcliff-heishou.png", keywords: ["burn", "rupture", "slash", ]},
    // Add new Heathcliff IDs here
  ],

  "ishmael": [
    { id: "ishmael-lcb", sinnerId: "ishmael", name: "LCB Sinner", isBase: true, img: "img/IDs/ishmael-lcb.png", keywords: ["tremor", "blunt", ]},
    { id: "ishmael-shi", sinnerId: "ishmael", name: "Shi Assoc. South Section 5", img: "img/IDs/ishmael-shi.png", keywords: ["poise", "pierce", "slash", ]},
    { id: "ishmael-lccb", sinnerId: "ishmael", name: "LCCB Assistant Manager", img: "img/IDs/ishmael-lccb.png", keywords: ["tremor", "rupture", "blunt", ]},
    { id: "ishmael-lobotomyego", sinnerId: "ishmael", name: "Lobotomy EGO: Sloshing", img: "img/IDs/ishmael-lobotomyego.png", keywords: ["tremor", "rupture", "blunt", ]},
    { id: "ishmael-wuthering", sinnerId: "ishmael", name: "Edgar Family Butler", img: "img/IDs/ishmael-wuthering.png", keywords: ["sinking", "poise", "blunt", "slash", ]},
    { id: "ishmael-rcorp", sinnerId: "ishmael", name: "R Corp. 4th Pack Reindeer", img: "img/IDs/ishmael-rcorp.png", keywords: ["sinking", "charge", "blunt", ]},
    { id: "ishmael-liu", sinnerId: "ishmael", name: "Liu Assoc. South Section 4", img: "img/IDs/ishmael-liu.png", keywords: ["burn", "blunt", ]},
    { id: "ishmael-molar", sinnerId: "ishmael", name: "Molar Boatworks Fixer", img: "img/IDs/ishmael-molar.png", keywords: ["sinking", "tremor", "pierce", ]},
    { id: "ishmael-pequod", sinnerId: "ishmael", name: "The Pequod Captain", img: "img/IDs/ishmael-pequod.png", keywords: ["bleed", "pierce", ]},
    { id: "ishmael-zwei", sinnerId: "ishmael", name: "Zwei Assoc. West Section 3", img: "img/IDs/ishmael-zwei.png", keywords: ["tremor", "blunt", ]},
    { id: "ishmael-kurokumo", sinnerId: "ishmael", name: "Kurokumo Clan Captain", img: "img/IDs/ishmael-kurokumo.png", keywords: ["bleed", "slash", ]},
    { id: "ishmael-heishou", sinnerId: "ishmael", name: "Family Hierarch Candidate", img: "img/IDs/ishmael-heishou.png", keywords: ["rupture", "poise", "blunt", "slash", ]},
    { id: "ishmael-jeongoffice", sinnerId: "ishmael", name: "Jeong's Office Rep", img: "img/IDs/ishmael-jeongoffice.png", keywords: ["tremor", "sinking", "slash", ]},
    // Add new Ishmael IDs here
  ],

  "rodion": [
    { id: "rodion-lcb", sinnerId: "rodion", name: "LCB Sinner", isBase: true, img: "img/IDs/rodion-lcb.png", keywords: ["bleed", "slash", ]},
    { id: "rodion-lccb", sinnerId: "rodion", name: "LCCB Assistant Manager", img: "img/IDs/rodion-lccb.png", keywords: ["blunt", ]},
    { id: "rodion-ncorp", sinnerId: "rodion", name: "N Corp. Mittelhammer", img: "img/IDs/rodion-ncorp.png", keywords: ["bleed", "pierce", "blunt", ]},
    { id: "rodion-zwei", sinnerId: "rodion", name: "Zwei Assoc. South Section 5", img: "img/IDs/rodion-zwei.png", keywords: ["blunt", "poise", ]},
    { id: "rodion-tcorp", sinnerId: "rodion", name: "T Corp. Class 2 Collection Staff", img: "img/IDs/rodion-tcorp.png", keywords: ["tremor", "blunt", ]},
    { id: "rodion-kurokumo", sinnerId: "rodion", name: "Kurokumo Clan Wakashu", img: "img/IDs/rodion-kurokumo.png", keywords: ["bleed", "poise", "slash", ]},
    { id: "rodion-rosespanner", sinnerId: "rodion", name: "Rosespanner Workshop Rep", img: "img/IDs/rodion-rosespanner.png", keywords: ["tremor", "charge", "pierce", "blunt", ]},
    { id: "rodion-dieci", sinnerId: "rodion", name: "Dieci Assoc. South Section 4", img: "img/IDs/rodion-dieci.png", keywords: ["blunt", "sinking", ]},
    { id: "rodion-liu", sinnerId: "rodion", name: "Liu Assoc. South Section 4 Director", img: "img/IDs/rodion-liu.png", keywords: ["burn", "pierce", "blunt", ]},
    { id: "rodion-devyat", sinnerId: "rodion", name: "Devyat' Assoc. North Section 3", img: "img/IDs/rodion-devyat.png", keywords: ["rupture", "slash", ]},
    { id: "rodion-bloodfiend", sinnerId: "rodion", name: "The Princess of La Manchaland", img: "img/IDs/rodion-bloodfiend.png", keywords: ["bleed", "pierce", "rupture", ]},
    { id: "rodion-heishou", sinnerId: "rodion", name: "Heishou Pack - Si Branch", img: "img/IDs/rodion-heishou.png", keywords: ["rupture", "poise", "pierce", "slash", ]},
    { id: "rodion-lobotomyego", sinnerId: "rodion", name: "Lobotomy EGO: The Sword Sharpened with Tears", img: "img/IDs/rodion-lobotomyego.png", keywords: ["sinking", "pierce", ]},
    // Add new Rodion IDs here
  ],

  "sinclair": [
    { id: "sinclair-lcb", sinnerId: "sinclair", name: "LCB Sinner", isBase: true, img: "img/IDs/sinclair-lcb.png", keywords: ["rupture", "slash", ]},
    { id: "sinclair-zweisouth", sinnerId: "sinclair", name: "Zwei Assoc. South Section 6", img: "img/IDs/sinclair-zweisouth.png", keywords: ["tremor", "blunt",]},
    { id: "sinclair-mariachi", sinnerId: "sinclair", name: "Los Mariachis Jefe", img: "img/IDs/sinclair-mariachi.png", keywords: ["sinking", "poise", "blunt",]},
    { id: "sinclair-lobotomyego", sinnerId: "sinclair", name: "Lobotomy EGO: Red Sheet", img: "img/IDs/sinclair-lobotomyego.png", keywords: ["rupture", "pierce", "blunt",]},
    { id: "sinclair-molar", sinnerId: "sinclair", name: "Molar Boatworks Fixer", img: "img/IDs/sinclair-molar.png", keywords: ["tremor", "pierce", "blunt",]},
    { id: "sinclair-zweiwest", sinnerId: "sinclair", name: "Zwei Assoc. West Section 3", img: "img/IDs/sinclair-zweiwest.png", keywords: ["tremor", "blunt", "slash", ]},
    { id: "sinclair-blade", sinnerId: "sinclair", name: "Blade Lineage Salsu", img: "img/IDs/sinclair-blade.png", keywords: ["bleed", "pierce", "slash", ]},
    { id: "sinclair-ncorp", sinnerId: "sinclair", name: "The One Who Shall Grip", img: "img/IDs/sinclair-ncorp.png", keywords: ["burn", "bleed", "blunt", ]},
    { id: "sinclair-cinq", sinnerId: "sinclair", name: "Cinq Assoc. South Section 4 Director", img: "img/IDs/sinclair-cinq.png", keywords: ["poise", "pierce", ]},
    { id: "sinclair-dawnoffice", sinnerId: "sinclair", name: "Dawn Office Fixer", img: "img/IDs/sinclair-dawnoffice.png", keywords: ["burn", "pierce", "slash", ]},
    { id: "sinclair-devyat", sinnerId: "sinclair", name: "Devyat' Assoc. North Section 3", img: "img/IDs/sinclair-devyat.png", keywords: ["rupture", "blunt", ]},
    { id: "sinclair-middle", sinnerId: "sinclair", name: "The Middle Little Brother", img: "img/IDs/sinclair-middle.png", keywords: ["bleed", "blunt", ]},
    { id: "sinclair-thumb", sinnerId: "sinclair", name: "The Thumb East Soldato II", img: "img/IDs/sinclair-thumb.png", keywords: ["burn", "bleed", "pierce", "slash", ]},
    { id: "sinclair-heishou", sinnerId: "sinclair", name: "Heishou Pack - You Branch", img: "img/IDs/sinclair-heishou.png", keywords: ["burn", "rupture", "slash", ]},
    // Add new Sinclair IDs here
  ],

  "outis": [
    { id: "outis-lcb", sinnerId: "outis", name: "LCB Sinner", isBase: true, img: "img/IDs/outis-lcb.png", keywords: ["rupture", "pierce", "slash", ]},
    { id: "outis-blade", sinnerId: "outis", name: "Blade Lineage Salsu", img: "img/IDs/outis-blade.png", keywords: ["poise", "pierce", "slash", ]},
    { id: "outis-gcorp", sinnerId: "outis", name: "G Corp. Head Manager", img: "img/IDs/outis-gcorp.png", keywords: ["sinking", "pierce", "blunt", ]},
    { id: "outis-cinq", sinnerId: "outis", name: "Cinq Assoc. South Section 4", img: "img/IDs/outis-cinq.png", keywords: ["poise", "pierce", ]},
    { id: "outis-ring", sinnerId: "outis", name: "The Ring Pointillist Student", img: "img/IDs/outis-ring.png", keywords: ["bleed", "pierce", ]},
    { id: "outis-seven", sinnerId: "outis", name: "Seven Assoc. South Section 6 Director", img: "img/IDs/outis-seven.png", keywords: ["rupture", "blunt", "slash", ]},
    { id: "outis-molar", sinnerId: "outis", name: "Molar Office Fixer", img: "img/IDs/outis-molar.png", keywords: ["tremor", "blunt", "slash", ]},
    { id: "outis-lobotomyego", sinnerId: "outis", name: "Lobotomy EGO: Magic Bullet", img: "img/IDs/outis-lobotomyego.png", keywords: ["burn", "pierce", "blunt", ]},
    { id: "outis-wuthering", sinnerId: "outis", name: "Wuthering Heights Chief Butler", img: "img/IDs/outis-wuthering.png", keywords: ["sinking", "blunt", ]},
    { id: "outis-wcorp", sinnerId: "outis", name: "W Corp. L3 Cleanup Captain", img: "img/IDs/outis-wcorp.png", keywords: ["rupture", "charge", "blunt", "slash", ]},
    { id: "outis-bloodfiend", sinnerId: "outis", name: "The Barber of La Manchaland", img: "img/IDs/outis-bloodfiend.png", keywords: ["bleed", "slash", ]},
    { id: "outis-heishou", sinnerId: "outis", name: "Heishou Pack - Mao Branch", img: "img/IDs/outis-heishou.png", keywords: ["rupture", "slash", ]},
    { id: "outis-tcorp", sinnerId: "outis", name: "T Corp. Class 3 VDCU Staff", img: "img/IDs/outis-tcorp.png", keywords: ["tremor", "blunt", ]},
    // Add new Outis IDs here
  ],

  "gregor": [
    { id: "gregor-lcb", sinnerId: "gregor", name: "LCB Sinner", isBase: true, img: "img/IDs/gregor-lcb.png", keywords: ["rupture", "pierce", "slash", ]},
    { id: "gregor-liu", sinnerId: "gregor", name: "Liu Assoc. South Section 6", img: "img/IDs/gregor-liu.png", keywords: ["burn", "blunt", ]},
    { id: "gregor-chef", sinnerId: "gregor", name: "R.B. Sous-chef", img: "img/IDs/gregor-chef.png", keywords: ["bleed", "blunt", "slash", ]},
    { id: "gregor-rosespanner", sinnerId: "gregor", name: "Rosespanner Workshop Fixer", img: "img/IDs/gregor-rosespanner.png", keywords: ["tremor", "rupture", "charge", "slash", "pierce", ]},
    { id: "gregor-kurokumo", sinnerId: "gregor", name: "Kurokumo Clan Captain", img: "img/IDs/gregor-kurokumo.png", keywords: ["bleed", "blunt", "slash", ]},
    { id: "gregor-gcorp", sinnerId: "gregor", name: "G Corp. Manager Corporal", img: "img/IDs/gregor-gcorp.png", keywords: ["rupture", "pierce", "slash", ]},
    { id: "gregor-zwei", sinnerId: "gregor", name: "Zwei Assoc. South Section 4", img: "img/IDs/gregor-zwei.png", keywords: ["slash", ]},
    { id: "gregor-twinhook", sinnerId: "gregor", name: "Twinhook Pirates First Mate", img: "img/IDs/gregor-twinhook.png", keywords: ["bleed", "poise", "pierce", ]},
    { id: "gregor-wuthering", sinnerId: "gregor", name: "Edgar Family Heir", img: "img/IDs/gregor-wuthering.png", keywords: ["sinking", "slash", ]},
    { id: "gregor-bloodfiend", sinnerId: "gregor", name: "The Priest of La Manchaland", img: "img/IDs/gregor-bloodfiend.png", keywords: ["bleed", "rupture", "blunt", ]},
    { id: "gregor-firefist", sinnerId: "gregor", name: "Firefist Office Survivor", img: "img/IDs/gregor-firefist.png", keywords: ["burn", "blunt", ]},
    { id: "gregor-heishou", sinnerId: "gregor", name: "Heishou Pack - Si Branch", img: "img/IDs/gregor-heishou.png", keywords: ["rupture", "poise", "pierce", "slash", ]},
    { id: "gregor-nightawls", sinnerId: "gregor", name: "Night Awls Capitano", img: "img/IDs/gregor-nightawls.png", keywords: ["bleed", "tremor", "pierce", ]},
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
      isBase: true,
      img: "img/EGOs/yi-sang-crow-zayin.png",
      keywords: []
    },
    {
      id: "yi-sang-bygone-zayin",
      sinnerId: "yi-sang",
      name: "Bygone Days",
      rank: "ZAYIN",
      img: "img/EGOs/yi-sang-bygone-zayin.png",
      keywords: ["sinking", ]
    },
    {
      id: "yi-sang-flame-teth",
      sinnerId: "yi-sang",
      name: "4th Match Flame",
      rank: "TETH",
      img: "img/EGOs/yi-sang-flame-teth.png",
      keywords: ["burn", ]
    },
    {
      id: "yi-sang-cairn-teth",
      sinnerId: "yi-sang",
      name: "Wishing Cairn",
      rank: "TETH",
      img: "img/EGOs/yi-sang-cairn-teth.png",
      keywords: []
    },
    {
      id: "yi-sang-dimension-he",
      sinnerId: "yi-sang",
      name: "Dimension Shredder",
      rank: "HE",
      img: "img/EGOs/yi-sang-dimension-he.png",
      keywords: ["rupture", "charge", ]
    },
    {
      id: "yi-sang-fell-he",
      sinnerId: "yi-sang",
      name: "Fell Bullet",
      rank: "HE",
      img: "img/EGOs/yi-sang-fell-he.png",
      keywords: ["bleed", ]
    },
    {
      id: "yi-sang-sunshower-waw",
      sinnerId: "yi-sang",
      name: "Sunshower",
      rank: "WAW",
      img: "img/EGOs/yi-sang-sunshower-waw.png",
      keywords: []
    },
  ],

  "faust": [
    {
      id: "faust-emitter-zayin",
      sinnerId: "faust",
      name: "Representation Emitter",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/faust-emitter-zayin.png",
      keywords: []
    },
    {
      id: "faust-hex-teth",
      sinnerId: "faust",
      name: "Hex Nail",
      rank: "TETH",
      img: "img/EGOs/faust-hex-teth.png",
      keywords: ["bleed", ]
    },
    {
      id: "faust-9:2-teth",
      sinnerId: "faust",
      name: "9:2",
      rank: "TETH",
      img: "img/EGOs/faust-9-2-teth.png",
      keywords: ["burn", ]
    },
    {
      id: "faust-lasso-teth",
      sinnerId: "faust",
      name: "Lasso",
      rank: "TETH",
      img: "img/EGOs/faust-lasso-teth.png",
      keywords: ["rupture", ]
    },
    {
      id: "faust-fluid-he",
      sinnerId: "faust",
      name: "Fluid Sac",
      rank: "HE",
      img: "img/EGOs/faust-fluid-he.png"
    },
    {
      id: "faust-telepole-he",
      sinnerId: "faust",
      name: "Telepole",
      rank: "HE",
      img: "img/EGOs/faust-telepole-he.png",
      keywords: ["charge", ]
    },
    {
      id: "faust-thoracalgia-he",
      sinnerId: "faust",
      name: "Thoracalgia",
      rank: "HE",
      img: "img/EGOs/faust-thoracalgia-he.png",
      keywords: ["poise", ]
    },
    {
      id: "faust-meltdown-he",
      sinnerId: "faust",
      name: "Command: Meltdown",
      rank: "HE",
      img: "img/EGOs/faust-meltdown-he.png",
      keywords: ["burn", "rupture", ]
    },
    {
      id: "faust-everlasting-waw",
      sinnerId: "faust",
      name: "Everlasting",
      rank: "WAW",
      img: "img/EGOs/faust-everlasting-waw.png",
      keywords: ["tremor", ]
    },
    // Add new Faust EGOs here
  ],

  "don-quixote": [
    {
      id: "don-quixote-sancho-zayin",
      sinnerId: "don-quixote",
      name: "La Sangre de Sancho",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/don-quixote-sancho-zayin.png",
      keywords: ["bleed", ]
    },
    {
      id: "don-quixote-stew-teth",
      sinnerId: "don-quixote",
      name: "Lifetime Stew",
      rank: "TETH",
      img: "img/EGOs/don-quixote-stew-teth.png",
      keywords: ["burn", ]
    },
    {
      id: "don-quixote-cairn-teth",
      sinnerId: "don-quixote",
      name: "Wishing Cairn",
      rank: "TETH",
      img: "img/EGOs/don-quixote-cairn-teth.png",
      keywords: ["bleed", "tremor", ]
    },
    {
      id: "don-quixote-electric-teth",
      sinnerId: "don-quixote",
      name: "Electric Screaming",
      rank: "TETH",
      img: "img/EGOs/don-quixote-electric-teth.png",
      keywords: ["charge", ]
    },
    {
      id: "don-quixote-fluid-he",
      sinnerId: "don-quixote",
      name: "Fluid Sac",
      rank: "HE",
      img: "img/EGOs/don-quixote-fluid-he.png",
      keywords: ["tremor", "sinking", ]
    },
    {
      id: "don-quixote-telepole-he",
      sinnerId: "don-quixote",
      name: "Telepole",
      rank: "HE",
      img: "img/EGOs/don-quixote-telepole-he.png",
      keywords: ["charge", ]
    },
    {
      id: "don-quixote-sheet-he",
      sinnerId: "don-quixote",
      name: "Red Sheet",
      rank: "HE",
      img: "img/EGOs/don-quixote-sheet-he.png",
      keywords: ["rupture", ]
    },
    {
      id: "don-quixote-mircalla-waw",
      sinnerId: "don-quixote",
      name: "Yearning-Mircalla",
      rank: "WAW",
      img: "img/EGOs/don-quixote-mircalla-waw.png",
      keywords: ["bleed", ]
    },
    {
      id: "don-quixote-lovehate-waw",
      sinnerId: "don-quixote",
      name: "In the Name of Love and Hate",
      rank: "WAW",
      img: "img/EGOs/don-quixote-lovehate-waw.png",
      keywords: ["rupture", "charge", ]
    },
    // Add new Don EGOs here
  ],

  "ryoshu": [
    {
      id: "ryoshu-forest-zayin",
      sinnerId: "ryoshu",
      name: "Forest for the Flames",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/ryoshu-forest-zayin.png",
      keywords: ["burn", ]
    },
    {
      id: "ryoshu-soda-zayin",
      sinnerId: "ryoshu",
      name: "Soda",
      rank: "ZAYIN",
      img: "img/EGOs/ryoshu-soda-zayin.png",
      keywords: ["sinking", ]
    },
    {
      id: "ryoshu-redeyes-teth",
      sinnerId: "ryoshu",
      name: "Red Eyes",
      rank: "TETH",
      img: "img/EGOs/ryoshu-redeyes-teth.png"
    },
    {
      id: "ryoshu-obsession-teth",
      sinnerId: "ryoshu",
      name: "Blind Obsession",
      rank: "TETH",
      img: "img/EGOs/ryoshu-obsession-teth.png",
      keywords: ["poise", "charge", ]
    },
    {
      id: "ryoshu-flame-he",
      sinnerId: "ryoshu",
      name: "4th Match Flame",
      rank: "HE",
      img: "img/EGOs/ryoshu-flame-he.png",
      keywords: ["burn", ]
    },
    {
      id: "ryoshu-redeyesopen-he",
      sinnerId: "ryoshu",
      name: "Red Eyes (Open)",
      rank: "HE",
      img: "img/EGOs/ryoshu-redeyesopen-he.png"
    },
    {
      id: "ryoshu-thoracalgia-he",
      sinnerId: "ryoshu",
      name: "Thoracalgia",
      rank: "HE",
      img: "img/EGOs/ryoshu-thoracalgia-he.png",
      keywords: ["poise", ]
    },
    {
      id: "ryoshu-contempt-waw",
      sinnerId: "ryoshu",
      name: "Contempt, Awe",
      rank: "WAW",
      img: "img/EGOs/ryoshu-contempt-waw.png",
      keywords: ["bleed", ]
    },
    // Add new Ryoshu EGOs here
  ],

  "meursault": [
    {
      id: "meursault-chains-zayin",
      sinnerId: "meursault",
      name: "Chains of Others",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/meursault-chains-zayin.png"
    },
    {
      id: "meursault-screwloose-teth",
      sinnerId: "meursault",
      name: "Screwloose Wallop",
      rank: "TETH",
      img: "img/EGOs/meursault-screwloose-teth.png"
    },
    {
      id: "meursault-regret-teth",
      sinnerId: "meursault",
      name: "Regret",
      rank: "TETH",
      img: "img/EGOs/meursault-regret-teth.png",
      keywords: ["tremor", ]
    },
    {
      id: "meursault-electric-teth",
      sinnerId: "meursault",
      name: "Electric Screaming",
      rank: "TETH",
      img: "img/EGOs/meursault-electric-teth.png",
      keywords: ["rupture", "charge", ]
    },
    {
      id: "meursault-pursuance-he",
      sinnerId: "meursault",
      name: "Pursuance",
      rank: "HE",
      img: "img/EGOs/meursault-pursuance-he.png",
      keywords: ["tremor", ]
    },
    {
      id: "meursault-capote-he",
      sinnerId: "meursault",
      name: "Capote",
      rank: "HE",
      img: "img/EGOs/meursault-capote-he.png",
      keywords: ["burn", "tremor", ]
    },
    {
      id: "meursault-mircalla-waw",
      sinnerId: "meursault",
      name: "Yearning-Mircalla",
      rank: "WAW",
      img: "img/EGOs/meursault-mircalla-waw.png",
      keywords: ["bleed", ]
    },
    {
      id: "meursault-crushbound-waw",
      sinnerId: "meursault",
      name: "Crushbound Past",
      rank: "WAW",
      img: "img/EGOs/meursault-crushbound-waw.png",
      keywords: ["tremor", ]
    },
    // Add new Meursault EGOs here
  ],

  "hong-lu": [
    {
      id: "hong-lu-illusion-zayin",
      sinnerId: "hong-lu",
      name: "Land of Illusion",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/hong-lu-illusion-zayin.png",
      keywords: ["sinking", ]
    },
    {
      id: "hong-lu-desire-teth",
      sinnerId: "hong-lu",
      name: "Roseate Desire",
      rank: "TETH",
      img: "img/EGOs/hong-lu-desire-teth.png"
    },
    {
      id: "hong-lu-soda-teth",
      sinnerId: "hong-lu",
      name: "Soda",
      rank: "TETH",
      img: "img/EGOs/hong-lu-soda-teth.png"
    },
    {
      id: "hong-lu-cavernous-teth",
      sinnerId: "hong-lu",
      name: "Cavernous Wailing",
      rank: "TETH",
      img: "img/EGOs/hong-lu-cavernous-teth.png",
      keyword: ["sinking", ]
    },
    {
      id: "hong-lu-lasso-teth",
      sinnerId: "hong-lu",
      name: "Lasso",
      rank: "TETH",
      img: "img/EGOs/hong-lu-lasso-teth.png",
      keywords: ["bleed", "rupture", ]
    },
    {
      id: "hong-lu-dimension-he",
      sinnerId: "hong-lu",
      name: "Dimension Shredder",
      rank: "HE",
      img: "img/EGOs/hong-lu-dimension-he.png",
      keywords: ["charge", ]
    },
    {
      id: "hong-lu-effervescent-he",
      sinnerId: "hong-lu",
      name: "Effervescent Corrosion",
      rank: "HE",
      img: "img/EGOs/hong-lu-effervescent-he.png",
      keywords: ["rupture", ]
    },
    {
      id: "hong-lu-oneself-he",
      sinnerId: "hong-lu",
      name: "To Remain Oneself",
      rank: "HE",
      img: "img/EGOs/hong-lu-oneself-he.png",
      keywords: ["sinking", "poise", ]
    },
    {
      id: "hong-lu-tarnished-waw",
      sinnerId: "hong-lu",
      name: "Tears of the Tarnished Blood",
      rank: "WAW",
      img: "img/EGOs/hong-lu-tarnished-waw.png"
    },
    // Add new Hong Lu EGOs here
  ],

  "heathcliff": [
    {
      id: "heathcliff-bodysack-zayin",
      sinnerId: "heathcliff",
      name: "Bodysack",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/heathcliff-bodysack-zayin.png"
    },
    {
      id: "heathcliff-holiday-zayin",
      sinnerId: "heathcliff",
      name: "Holiday",
      rank: "ZAYIN",
      img: "img/EGOs/heathcliff-holiday-zayin.png"
    },
    {
      id: "heathcliff-AEDD-teth",
      sinnerId: "heathcliff",
      name: "AEDD",
      rank: "TETH",
      img: "img/EGOs/heathcliff-AEDD-teth.png",
      keywords: ["bleed", ]
    },
    {
      id: "heathcliff-fell-teth",
      sinnerId: "heathcliff",
      name: "Fell Bullet",
      rank: "TETH",
      img: "img/EGOs/heathcliff-fell-teth.png",
      keywords: ["bleed", "sinking", ]
    },
    {
      id: "heathcliff-telepole-he",
      sinnerId: "heathcliff",
      name: "Telepole",
      rank: "HE",
      img: "img/EGOs/heathcliff-telepole-he.png",
      keywords: ["charge", ]
    },
    {
      id: "heathcliff-ya-he",
      sinnerId: "heathcliff",
      name: "Ya Sunyata Tad Rupam",
      rank: "HE",
      img: "img/EGOs/heathcliff-ya-he.png"
    },
    {
      id: "heathcliff-inertia-he",
      sinnerId: "heathcliff",
      name: "Asymmetrical Inertia",
      rank: "HE",
      img: "img/EGOs/heathcliff-inertia-he.png",
      keywords: ["tremor", ]
    },
    {
      id: "heathcliff-binds-waw",
      sinnerId: "heathcliff",
      name: "Binds",
      rank: "WAW",
      img: "img/EGOs/heathcliff-binds-waw.png",
      keywords: ["tremor", "sinking", ]
    },
    // Add new Heathcliff EGOs here
  ],

  "ishmael": [
    {
      id: "ishmael-snagharpoon-zayin",
      sinnerId: "ishmael",
      name: "Snagharpoon",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/ishmael-snagharpoon-zayin.png",
      keywords: ["tremor", ]
    },
    {
      id: "ishmael-maggot-zayin",
      sinnerId: "ishmael",
      name: "Hundred-Footed Death Maggot",
      rank: "ZAYIN",
      img: "img/EGOs/ishmael-maggot-zayin.png",
      keywords: ["sinking", "rupture", ]
    },
    {
      id: "ishmael-desire-teth",
      sinnerId: "ishmael",
      name: "Roseate Desire",
      rank: "TETH",
      img: "img/EGOs/ishmael-desire-teth.png"
    },
    {
      id: "ishmael-capote-teth",
      sinnerId: "ishmael",
      name: "Capote",
      rank: "TETH",
      img: "img/EGOs/ishmael-capote-teth.png",
      keywords: ["burn", ]
    },
    {
      id: "ishmael-bygone-teth",
      sinnerId: "ishmael",
      name: "Bygone Days",
      rank: "TETH",
      img: "img/EGOs/ishmael-bygone-teth.png",
      keywords: ["sinking", ]
    },
    {
      id: "ishmael-ardor-he",
      sinnerId: "ishmael",
      name: "Ardor Blossom Star",
      rank: "HE",
      img: "img/EGOs/ishmael-ardor-he.png",
      keywords: ["burn", ]
    },
    {
      id: "ishmael-wingbeat-he",
      sinnerId: "ishmael",
      name: "Wingbeat",
      rank: "HE",
      img: "img/EGOs/ishmael-wingbeat-he.png",
      keywords: ["bleed", ]
    },
    {
      id: "ishmael-christmas-he",
      sinnerId: "ishmael",
      name: "Christmas Nightmare",
      rank: "HE",
      img: "img/EGOs/ishmael-christmas-he.png",
      keywords: ["tremor", "sinking", ]
    },
    {
      id: "ishmael-tidal-he",
      sinnerId: "ishmael",
      name: "Tidal Elegy",
      rank: "HE",
      img: "img/EGOs/ishmael-tidal-he.png",
      keywords: ["tremor", "sinking", ]
    },
    {
      id: "ishmael-obsession-waw",
      sinnerId: "ishmael",
      name: "Blind Obsession",
      rank: "WAW",
      img: "img/EGOs/ishmael-obsession-waw.png",
      keywords: ["poise", "charge", ]
    },
    // Add new Ishmael EGOs here
  ],

  "rodion": [
    {
      id: "rodion-cast-zayin",
      sinnerId: "rodion",
      name: "What is Cast",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/rodion-cast-zayin.png",
      keywords: ["bleed", ] 
    },
    {
      id: "rodion-rime-teth",
      sinnerId: "rodion",
      name: "Rime Shank",
      rank: "TETH",
      img: "img/EGOs/rodion-rime-teth.png",
      keywords: ["tremor", "sinking", ]
    },
    {
      id: "rodion-effervescent-teth",
      sinnerId: "rodion",
      name: "Effervescent Corrosion",
      rank: "TETH",
      img: "img/EGOs/rodion-effervescent-teth.png",
      keywords: ["tremor", ]
    },
    {
      id: "rodion-flame-he",
      sinnerId: "rodion",
      name: "4th Match Flame",
      rank: "HE",
      img: "img/EGOs/rodion-flame-he.png",
      keywords: ["burn", ]
    },
    {
      id: "rodion-pursuance-he",
      sinnerId: "rodion",
      name: "Pursuance",
      rank: "HE",
      img: "img/EGOs/rodion-pursuance-he.png"
    },
    {
      id: "rodion-hex-he",
      sinnerId: "rodion",
      name: "Hex Nail",
      rank: "HE",
      img: "img/EGOs/rodion-hex-he.png",
      keywords: ["bleed", ]
    },
    {
      id: "rodion-sanguine-waw",
      sinnerId: "rodion",
      name: "Sanguine Desire",
      rank: "WAW",
      img: "img/EGOs/rodion-sanguine-waw.png",
      keywords: ["bleed", ]
    },
    {
      id: "rodion-indicants-waw",
      sinnerId: "rodion",
      name: "Indicant's Trial",
      rank: "WAW",
      img: "img/EGOs/rodion-indicants-waw.png",
      keywords: ["burn", ]
    },
    // Add new Rodion EGOs here
  ],

  "sinclair": [
    {
      id: "sinclair-branch-zayin",
      sinnerId: "sinclair",
      name: "Branch of Knowledge",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/sinclair-branch-zayin.png",
      keywords: ["rupture", ]
    },
    {
      id: "sinclair-cavernous-zayin",
      sinnerId: "sinclair",
      name: "Cavernous Wailing",
      rank: "ZAYIN",
      img: "img/EGOs/sinclair-cavernous-zayin.png"
    },
    {
      id: "sinclair-impending-teth",
      sinnerId: "sinclair",
      name: "Impending Day",
      rank: "TETH",
      img: "img/EGOs/sinclair-impending-teth.png"
    },
    {
      id: "sinclair-stew-teth",
      sinnerId: "sinclair",
      name: "Lifetime Stew",
      rank: "TETH",
      img: "img/EGOs/sinclair-stew-teth.png",
      keywords: ["burn", ]
    },
    {
      id: "sinclair-hex-teth",
      sinnerId: "sinclair",
      name: "Hex Nail",
      rank: "TETH",
      img: "img/EGOs/sinclair-hex-teth.png",
      keywords: ["bleed", ]
    },
    {
      id: "sinclair-lantern-he",
      sinnerId: "sinclair",
      name: "Lantern",
      rank: "HE",
      img: "img/EGOs/sinclair-lantern-he.png",
      keywords: ["rupture", ]
    },
    {
      id: "sinclair-9:2-he",
      sinnerId: "sinclair",
      name: "9:2",
      rank: "HE",
      img: "img/EGOs/sinclair-9-2-he.png",
      keywords: ["burn", ]
    },
    {
      id: "sinclair-tarnished-waw",
      sinnerId: "sinclair",
      name: "Tears of the Tarnished Blood",
      rank: "WAW",
      img: "img/EGOs/sinclair-tarnished-waw.png",
      keywords: ["rupture", ]
    },
    // Add new Sinclair EGOs here
  ],

  "outis": [
    {
      id: "outis-pathos-zayin",
      sinnerId: "outis",
      name: "To Pathos Mathos",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/outis-pathos-zayin.png",
      keywords: ["rupture", ]
    },
    {
      id: "outis-ya-teth",
      sinnerId: "outis",
      name: "Ya Sunyata Tad Rupam",
      rank: "TETH",
      img: "img/EGOs/outis-ya-teth.png"
    },
    {
      id: "outis-sunshower-teth",
      sinnerId: "outis",
      name: "Sunshower",
      rank: "TETH",
      img: "img/EGOs/outis-sunshower-teth.png",
      keywords: ["tremor", "sinking", ]
    },
    {
      id: "outis-ebony-he",
      sinnerId: "outis",
      name: "Ebony Stem",
      rank: "HE",
      img: "img/EGOs/outis-ebony-he.png",
      keywords: ["bleed", "rupture", ]
    },
    {
      id: "outis-holiday-he",
      sinnerId: "outis",
      name: "Holiday",
      rank: "HE",
      img: "img/EGOs/outis-holiday-he.png",
      keywords: ["tremor", ]
    },
    {
      id: "outis-dimension-he",
      sinnerId: "outis",
      name: "Dimension Shredder",
      rank: "HE",
      img: "img/EGOs/outis-dimension-he.png",
      keywords: ["charge", ]
    },
    {
      id: "outis-magic-he",
      sinnerId: "outis",
      name: "Magic Bullet",
      rank: "HE",
      img: "img/EGOs/outis-magic-he.png",
      keywords: ["burn", ]
    },
    {
      id: "outis-binds-waw",
      sinnerId: "outis",
      name: "Binds",
      rank: "WAW",
      img: "img/EGOs/outis-binds-waw.png",
      keywords: ["tremor", ]
    },
    // Add new Outis EGOs here
  ],

  "gregor": [
    {
      id: "gregor-suddenly-zayin",
      sinnerId: "gregor",
      name: "Suddenly, One Day",
      rank: "ZAYIN",
      isBase: true,
      img: "img/EGOs/gregor-suddenly-zayin.png"
    },
    {
      id: "gregor-legerdemain-zayin",
      sinnerId: "gregor",
      name: "Legerdemain",
      rank: "ZAYIN",
      img: "img/EGOs/gregor-legerdemain-zayin.png",
      keywords: ["tremor", ]
    },
    {
      id: "gregor-lantern-teth",
      sinnerId: "gregor",
      name: "Lantern",
      rank: "TETH",
      img: "img/EGOs/gregor-lantern-teth.png"
    },
    {
      id: "gregor-bygone-teth",
      sinnerId: "gregor",
      name: "Bygone Days",
      rank: "TETH",
      img: "img/EGOs/gregor-bygone-teth.png",
      keywords: ["sinking", ]
    },
    {
      id: "gregor-AEDD-he",
      sinnerId: "gregor",
      name: "AEDD",
      rank: "HE",
      img: "img/EGOs/gregor-AEDD-he.png",
      keywords: ["charge", ]
    },
    {
      id: "gregor-solemn-he",
      sinnerId: "gregor",
      name: "Solemn Lament",
      rank: "HE",
      img: "img/EGOs/gregor-solemn-he.png"
    },
    {
      id: "gregor-christmas-he",
      sinnerId: "gregor",
      name: "Christmas Nightmare",
      rank: "HE",
      img: "img/EGOs/gregor-christmas-he.png",
      keywords: ["tremor", "sinking", ]
    },
    {
      id: "gregor-garden-waw",
      sinnerId: "gregor",
      name: "Garden of Thorns",
      rank: "WAW",
      img: "img/EGOs/gregor-garden-waw.png"
    },
    {
      id: "gregor-unbrilliant-waw",
      sinnerId: "gregor",
      name: "Unbrilliant Glory",
      rank: "WAW",
      img: "img/EGOs/gregor-unbrilliant-waw.png",
      keywords: ["burn", "tremor", ]
    },
    // Add new Gregor EGOs here
  ]
};

// --- EGO Gifts ---
// Each gift: unique id, display name, optional image, and keywords (burn, bleed, etc.)
const egoGifts = [
  { id: "gift-hellterfly", name: "Hellterfly's Dream", img: "img/gifts/gift-hellterfly.webp", keywords: ["burn", ] },
  { id: "gift-perversion", name: "Perversion", img: "img/gifts/gift-perversion.webp", keywords: ["keywordless", ] },
  { id: "gift-ashes", name: "Ashes to Ashes", img: "img/gifts/gift-ashes.webp", keywords: ["burn", ] },
  { id: "gift-phlebotomy", name: "Phlebotomy Pack", img: "img/gifts/gift-phlebotomy.webp", keywords: ["keywordless", ] },
  { id: "gift-wound", name: "Wound Clerid", img: "img/gifts/gift-wound.webp", keywords: ["bleed", ] },
  { id: "gift-coffee", name: "Coffee and Cranes", img: "img/gifts/gift-coffee.webp", keywords: ["keywordless", ] },
  { id: "gift-eclipse", name: "Eclipse of Scarlet Moths", img: "img/gifts/gift-eclipse.webp", keywords: ["keywordless", ] },
  { id: "gift-grimy", name: "Grimy Stake", img: "img/gifts/gift-grimy.webp", keywords: ["bleed", ] },
  { id: "gift-fiery", name: "Fiery Down", img: "img/gifts/gift-fiery.webp", keywords: ["burn", ] },
  { id: "gift-bloody", name: "Bloody Gadget", img: "img/gifts/gift-bloody.webp", keywords: ["keywordless", ] },
  { id: "gift-sunshower", name: "Sunshower", img: "img/gifts/gift-sunshower.webp", keywords: ["keywordless", ] },
  { id: "gift-today", name: "Today's Expression", img: "img/gifts/gift-today.webp", keywords: ["blunt", ] },
  { id: "gift-bundle", name: "Talisman Bundle", img: "img/gifts/gift-bundle.webp", keywords: ["rupture", ] },
  { id: "gift-rustycoin", name: "Rusty Commemorative Coin", img: "img/gifts/gift-rustycoin.webp", keywords: ["keywordless", ] },
  { id: "gift-bloodsweattears", name: "Blood, Sweat and Tears", img: "img/gifts/gift-bloodsweattears.webp", keywords: ["tremor", ] },
  { id: "gift-greenspirit", name: "Green Spirit", img: "img/gifts/gift-greenspirit.webp", keywords: ["tremor", ] },
  { id: "gift-lithograph", name: "Lithograph", img: "img/gifts/gift-lithograph.webp", keywords: ["keywordless", ] },
  { id: "gift-crownroses", name: "Crown of Roses", img: "img/gifts/gift-crownroses.webp", keywords: ["rupture", ] },
  { id: "gift-stickymuck", name: "Sticky Muck", img: "img/gifts/gift-stickymuck.webp", keywords: ["pierce"] },
  { id: "gift-whitegossypium", name: "White Gossypium", img: "img/gifts/gift-whitegossypium.webp", keywords: ["bleed"] },
  { id: "gift-lighter", name: "Blue Zippo Lighter", img: "img/gifts/gift-lighter.webp", keywords: ["keywordless"] },
  { id: "gift-phantom", name: "Phantom Pain", img: "img/gifts/gift-phantom.png", keywords: ["keywordless"] },
  { id: "gift-thunderbranch", name: "Thunderbranch", img: "img/gifts/gift-thunderbranch.webp", keywords: ["rupture"] },
  { id: "gift-eyeball", name: "Melted Eyeball", img: "img/gifts/gift-eyeball.webp", keywords: ["tremor"] },
  { id: "gift-coat", name: "Grey Coat", img: "img/gifts/gift-coat.webp", keywords: ["keywordless"] },
  { id: "gift-tattoo", name: "Late-bloomer's Tattoo", img: "img/gifts/gift-tattoo.webp", keywords: ["keywordless"] },
  { id: "gift-loweststar", name: "Lowest Star", img: "img/gifts/gift-loweststar.webp", keywords: ["blunt"] },
  { id: "gift-prejudice", name: "Prejudice", img: "img/gifts/gift-prejudice.webp", keywords: ["keywordless"] },
  { id: "gift-littleplushie", name: "Little and To-be-Naughty Plushie", img: "img/gifts/gift-littleplushie.png", keywords: ["bleed", ] },
  { id: "gift-gatheringskulls", name: "Gahtering Skulls", img: "img/gifts/gift-gatheringskulls.png", keywords: ["pierce", ] },
  { id: "gift-nixie", name: "Nixie Divergence", img: "img/gifts/gift-nixie.png", keywords: ["tremor", ] },
  { id: "gift-dreamsheep", name: "Dreaming Electric Sheep", img: "img/gifts/gift-dreamsheep.png", keywords: ["slash", ] },
  { id: "gift-standardbattery", name: "Standard-duty Battery", img: "img/gifts/gift-standardbattery.png", keywords: ["rupture", ] },
  { id: "gift-circuit", name: "Pinpoint Logic Circuit", img: "img/gifts/gift-circuit.png", keywords: ["burn", ] },
  { id: "gift-voodoo", name: "Voodoo Doll", img: "img/gifts/gift-voodoo.png", keywords: ["keywordless", ] },
  { id: "gift-carmilla", name: "Carmilla", img: "img/gifts/gift-carmilla.png", keywords: ["keywordless", ] },
  { id: "gift-flask", name: "Child within a Flask", img: "img/gifts/gift-flask.png", keywords: ["keywordless", ] },
  { id: "gift-illusory", name: "Illusory Hunt", img: "img/gifts/gift-illusory.png", keywords: ["keywordless", ] },
  { id: "gift-homeward", name: "Homeward", img: "img/gifts/gift-homeward.png", keywords: ["keywordless", ] },
  { id: "gift-fortune", name: "Tommorow's Fortune", img: "img/gifts/gift-fortune.png", keywords: ["keywordless", ] },
  { id: "gift-redorder", name: "Red Order", img: "img/gifts/gift-redorder.png", keywords: ["sinking", ] },
  { id: "gift-wires", name: "Smokes and Wires", img: "img/gifts/gift-wires.png", keywords: ["bleed", ] },
  { id: "gift-card", name: "Employee Card", img: "img/gifts/gift-card.png", keywords: ["charge", ] },
  { id: "gift-bracelet", name: "Oscillating Bracelet", img: "img/gifts/gift-bracelet.png", keywords: ["tremor", ] },
  { id: "gift-glimpse", name: "Glimpse of Flames", img: "img/gifts/gift-glimpse.png", keywords: ["burn", ] },
  { id: "gift-cigarette", name: "Cigarette Holder", img: "img/gifts/gift-cigarette.png", keywords: ["poise", ] },
  { id: "gift-lasso", name: "Barbed Lasso", img: "img/gifts/gift-lasso.png", keywords: ["rupture", ] },
  { id: "gift-cutting", name: "Rusted Cutting Knife", img: "img/gifts/gift-cutting.png", keywords: ["bleed", ] },
  { id: "gift-thorny", name: "Thorny Path", img: "img/gifts/gift-thorny.png", keywords: ["sinking", ] },
  { id: "gift-redgossypium", name: "Red-stained Gossypium", img: "img/gifts/gift-redgossypium.png", keywords: ["bleed", ] },
  { id: "gift-stonetomb", name: "Stone Tomb", img: "img/gifts/gift-stonetomb.png", keywords: ["poise"] },
  { id: "gift-portable", name: "Portable Battery Socket", img: "img/gifts/gift-portable.png", keywords: ["charge"] },
  { id: "gift-dust", name: "Dust to Dust", img: "img/gifts/gift-dust.png", keywords: ["burn"] },
  { id: "gift-melted", name: "Melted Spring", img: "img/gifts/gift-melted.png", keywords: ["sinking"] },
  { id: "gift-downpour", name: "Downpour", img: "img/gifts/gift-downpour.png", keywords: ["tremor"] },
  { id: "gift-clover", name: "Four-leaf Clover", img: "img/gifts/gift-clover.png", keywords: ["poise"] },
  { id: "gift-goggles", name: "Nightvision Goggles", img: "img/gifts/gift-goggles.png", keywords: ["charge"] },
  { id: "gift-disk", name: "Disk Fragment", img: "img/gifts/gift-disk.png", keywords: ["keywordless"] },
  { id: "gift-midwinter", name: "Midwinter Nightmare", img: "img/gifts/gift-midwinter.png", keywords: ["sinking"] },
  { id: "gift-thrill", name: "Thrill", img: "img/gifts/gift-thrill.png", keywords: ["sinking"] },
  { id: "gift-skeletal", name: "Skeletal Crumbs", img: "img/gifts/gift-skeletal.png", keywords: ["sinking"] },
  { id: "gift-cv", name: "Curriculum Vitae", img: "img/gifts/gift-cv.png", keywords: ["charge"] },
  { id: "gift-pendant", name: "Pendant of Nostalgia", img: "img/gifts/gift-pendant.png", keywords: ["poise"] },
  { id: "gift-revolver", name: "Broken Revolver", img: "img/gifts/gift-revolver.png", keywords: ["rupture"] },
  { id: "gift-artistic", name: "Artistic Sense", img: "img/gifts/gift-artistic.png", keywords: ["sinking"] },
  { id: "gift-nebulizer", name: "Nebulizer", img: "img/gifts/gift-nebulizer.png", keywords: ["poise"] },
  { id: "gift-special", name: "Special Contract", img: "img/gifts/gift-special.png", keywords: ["keywordless"] },
  { id: "gift-grand", name: "Grand Welcome", img: "img/gifts/gift-grand.png", keywords: ["keywordless"] },
  { id: "gift-wrist", name: "Wrist Guards", img: "img/gifts/gift-wrist.png", keywords: ["charge"] },
  { id: "gift-clear", name: "Clear Mirror, Calm Water", img: "img/gifts/gift-clear.png", keywords: ["poise"] },
  { id: "gift-charred", name: "Charred Disk", img: "img/gifts/gift-charred.png", keywords: ["burn"] },
  { id: "gift-lightning", name: "Lightning Rod", img: "img/gifts/gift-lightning.webp", keywords: ["charge"] },
  { id: "gift-endorphin", name: "Endorphin Kit", img: "img/gifts/gift-endorphin.webp", keywords: ["poise"] },
  { id: "gift-headless", name: "Headless Portrait", img: "img/gifts/gift-headless.webp", keywords: ["sinking"] },
  { id: "gift-chargegloves", name: "Charge-type Gloves", img: "img/gifts/gift-chargegloves.webp", keywords: ["charge"] },
  { id: "gift-firstaid", name: "First-aid Kit", img: "img/gifts/gift-firstaid.webp", keywords: ["keywordless"] },
  { id: "gift-painkiller", name: "Painkiller", img: "img/gifts/gift-painkiller.webp", keywords: ["keywordless"] },
  { id: "gift-hammer", name: "Voracious Hammer", img: "img/gifts/gift-hammer.webp", keywords: ["keywordless"] },
  { id: "gift-goldenurn", name: "Golden Urn", img: "img/gifts/gift-goldenurn.webp", keywords: ["keywordless"] },
  { id: "gift-milepost", name: "Milepost of Survival", img: "img/gifts/gift-milepost.webp", keywords: ["keywordless"] },
  { id: "gift-faith", name: "Faith", img: "img/gifts/gift-faith.webp", keywords: ["keywordless"] },
  { id: "gift-relationship", name: "Piece of Relationship", img: "img/gifts/gift-relationship.webp", keywords: ["keywordless"] },
  { id: "gift-lunar", name: "Lunar Memory", img: "img/gifts/gift-lunar.webp", keywords: ["keywordless"] },
  { id: "gift-effigy", name: "Ancient Effigy", img: "img/gifts/gift-effigy.webp", keywords: ["keywordless"] },
  { id: "gift-nda", name: "Non-disclosure Agreement", img: "img/gifts/gift-nda.webp", keywords: ["keywordless"] },
  { id: "gift-reverberation", name: "Reverberation", img: "img/gifts/gift-reverberation.webp", keywords: ["tremor"] },
  { id: "gift-intellect", name: "Burning Intellect", img: "img/gifts/gift-intellect.webp", keywords: [] },
  { id: "gift-soothe", name: "Soothe the Dead", img: "img/gifts/gift-soothe.webp", keywords: ["burn", ] },
  { id: "gift-muzzle", name: "Rusted Muzzle", img: "img/gifts/gift-muzzle.webp", keywords: ["bleed"] },
  { id: "gift-bloodymist", name: "Bloody Mist", img: "img/gifts/gift-bloodymist.webp", keywords: ["bleed"] },
  { id: "gift-bell", name: "", img: "img/gifts/gift-bell.webp", keywords: ["tremor"] },
  { id: "gift-coupled", name: "Coupled Oscillation", img: "img/gifts/gift-coupled.png", keywords: ["tremor"] },
  { id: "gift-fluorescent", name: "Fluorescent Lamp", img: "img/gifts/gift-fluorescent.webp", keywords: ["rupture"] },
  { id: "gift-enrapturing", name: "Enrapturing Trance", img: "img/gifts/gift-enrapturing.webp", keywords: ["rupture"] },
  { id: "gift-brokencompass", name: "Broken Compass", img: "img/gifts/gift-brokencompass.webp", keywords: ["sinking"] },
  { id: "gift-sheetmusic", name: "Black Sheet Music", img: "img/gifts/gift-sheetmusic.webp", keywords: ["sinking"] },
  { id: "gift-horseshoe", name: "Ornamental Horseshoe", img: "img/gifts/gift-horseshoe.webp", keywords: ["poise"] },
  { id: "gift-lucky", name: "Lucky Pouch", img: "img/gifts/gift-lucky.webp", keywords: ["poise"] },
  { id: "gift-material", name: "Material Interference Force Field", img: "img/gifts/gift-material.webp", keywords: ["charge"] },
  { id: "gift-t1perpetual", name: "T-1 Perpetual Motion Machine", img: "img/gifts/gift-t1perpetual.webp", keywords: ["charge"] },
  { id: "gift-paraffin", name: "Melted Paraffin", img: "img/gifts/gift-paraffin.webp", keywords: ["burn"] },
  { id: "gift-polarization", name: "Polarization", img: "img/gifts/gift-polarization.webp", keywords: ["burn"] },
  { id: "gift-painstifled", name: "Pain of Stifled Rage", img: "img/gifts/gift-painstifled.webp", keywords: ["burn"] },
  { id: "gift-ardent", name: "Ardent Flower", img: "img/gifts/gift-ardent.webp", keywords: ["burn"] },
  { id: "gift-fragmenthellfire", name: "Fragment of Hellfire", img: "img/gifts/gift-fragmenthellfire.webp", keywords: ["burn"] },
  { id: "gift-arrested", name: "Arrested Hymn", img: "img/gifts/gift-arrested.webp", keywords: ["bleed"] },
  { id: "gift-tangled", name: "Tangled Bundle", img: "img/gifts/gift-tangled.png", keywords: ["bleed"] },
  { id: "gift-awe", name: "Awe", img: "img/gifts/gift-awe.webp", keywords: ["bleed"] },
  { id: "gift-respite", name: "Respite", img: "img/gifts/gift-respite.webp", keywords: ["bleed"] },
  { id: "gift-fragmentallurement", name: "Fragment of Allurement", img: "img/gifts/gift-fragmentallurement.webp", keywords: ["bleed"] },
  { id: "gift-vial", name: "Bio-venom Vial", img: "img/gifts/gift-vial.webp", keywords: ["tremor"] },
  { id: "gift-venomous", name: "Venomous Skin", img: "img/gifts/gift-venomous.webp", keywords: ["tremor"] },
  { id: "gift-liquor", name: "Sour Liquor Aroma", img: "img/gifts/gift-liquor.webp", keywords: ["tremor"] },
  { id: "gift-tactile", name: "Mirror Tactile Synaesthesia", img: "img/gifts/gift-tactile.webp", keywords: ["tremor"] },
  { id: "gift-clockwork", name: "Clockwork Spring", img: "img/gifts/gift-clockwork.webp", keywords: ["tremor"] },
  { id: "gift-fragmentinertia", name: "Fragment of Inertia", img: "img/gifts/gift-fragmentinertia.webp", keywords: ["tremor"] },
  { id: "gift-gunpowder", name: "Smoking Gunpowder", img: "img/gifts/gift-gunpowder.webp", keywords: ["rupture"] },
  { id: "gift-stake", name: "Bone Stake", img: "img/gifts/gift-stake.webp", keywords: ["rupture"] },
  { id: "gift-umbrella", name: "Ragged Umbrella", img: "img/gifts/gift-umbrella.webp", keywords: ["rupture"] },
  { id: "gift-deathseeker", name: "Deathseeker", img: "img/gifts/gift-deathseeker.webp", keywords: ["rupture"] },
  { id: "gift-fragmentdesire", name: "Fragment of Desire", img: "img/gifts/gift-fragmentdesire.webp", keywords: ["rupture"] },
  { id: "gift-eldtree", name: "Eldtree Snare", img: "img/gifts/gift-eldtree.webp", keywords: ["sinking"] },
  { id: "gift-rags", name: "Rags", img: "img/gifts/gift-rags.webp", keywords: ["sinking"] },
  { id: "gift-grandeur", name: "Grandeur", img: "img/gifts/gift-grandeur.webp", keywords: ["sinking"] },
  { id: "gift-distant", name: "Distant Star", img: "img/gifts/gift-distant.webp", keywords: ["sinking"] },
  { id: "gift-fragmentdecay", name: "Fragment of Decay", img: "img/gifts/gift-fragmentdecay.webp", keywords: ["sinking"] },
  { id: "gift-devil", name: "Devil's Share", img: "img/gifts/gift-devil.webp", keywords: ["poise"] },
  { id: "gift-elytra", name: "Emerald Elytra", img: "img/gifts/gift-elytra.webp", keywords: ["poise"] },
  { id: "gift-doll", name: "Old Wooden Doll", img: "img/gifts/gift-doll.webp", keywords: ["poise"] },
  { id: "gift-finifugality", name: "Finifugality", img: "img/gifts/gift-finifugality.webp", keywords: ["poise"] },
  { id: "gift-fragmentconceit", name: "Fragment of Conceit", img: "img/gifts/gift-fragmentconceit.webp", keywords: ["poise"] },
  { id: "gift-ups", name: "UPS System", img: "img/gifts/gift-ups.webp", keywords: ["charge"] },
  { id: "gift-uncapped", name: "Uncapped Defibrilator", img: "img/gifts/gift-uncapped.webp", keywords: ["charge"] },
  { id: "gift-flashlight", name: "Patrolling Flashlight", img: "img/gifts/gift-flashlight.webp", keywords: ["charge"] },
  { id: "gift-imitative", name: "Imitative Generator", img: "img/gifts/gift-imitative.webp", keywords: ["charge"] },
  { id: "gift-fragmentfriction", name: "Fragment of Friction", img: "img/gifts/gift-fragmentfriction.webp", keywords: ["charge"] },
  { id: "gift-scalpel", name: "Scalpel", img: "img/gifts/gift-scalpel.webp", keywords: ["slash"] },
  { id: "gift-accord", name: "Deceptive Accord", img: "img/gifts/gift-accord.webp", keywords: ["slash"] },
  { id: "gift-scissors", name: "Tailored Scissors", img: "img/gifts/gift-scissors.webp", keywords: ["slash"] },
  { id: "gift-resolution", name: "Resolution", img: "img/gifts/gift-resolution.webp", keywords: ["slash"] },
  { id: "gift-sentencing", name: "Gift of Sentencing", img: "img/gifts/gift-sentencing.webp", keywords: ["slash"] },
  { id: "gift-sundered", name: "Sundered Memory", img: "img/gifts/gift-sundered.webp", keywords: ["slash"] },
  { id: "gift-carpenter", name: "Carpenter's Nail", img: "img/gifts/gift-carpenter.webp", keywords: ["pierce"] },
  { id: "gift-blessing", name: "Once, A Blessing", img: "img/gifts/gift-blessing.webp", keywords: ["pierce"] },
  { id: "gift-bandolier", name: "Torn Bandolier", img: "img/gifts/gift-bandolier.webp", keywords: ["pierce"] },
  { id: "gift-keenbranch", name: "Keenbranch", img: "img/gifts/gift-keenbranch.webp", keywords: ["pierce"] },
  { id: "gift-punctured", name: "Punctured Memory", img: "img/gifts/gift-punctured.webp", keywords: ["pierce"] },
  { id: "gift-burial", name: "Burial Curse", img: "img/gifts/gift-burial.webp", keywords: ["blunt"] },
  { id: "gift-compression", name: "Compression Bandage", img: "img/gifts/gift-compression.webp", keywords: ["blunt"] },
  { id: "gift-bridle", name: "Temporal Bridle", img: "img/gifts/gift-bridle.webp", keywords: ["blunt"] },
  { id: "gift-clasped", name: "Clasped Sculpture", img: "img/gifts/gift-clasped.webp", keywords: ["blunt"] },
  { id: "gift-crushed", name: "Crushed Memory", img: "img/gifts/gift-crushed.webp", keywords: ["blunt"] },
  { id: "gift-oracle", name: "Oracle", img: "img/gifts/gift-oracle.webp", keywords: ["keywordless"] },
  { id: "gift-imposed", name: "Imposed Weight", img: "img/gifts/gift-imposed.webp", keywords: ["keywordless"] },
  { id: "gift-stewpot", name: "Decamillennial Stewpot", img: "img/gifts/gift-stewpot.webp", keywords: ["burn"] },
  { id: "gift-hearthflame", name: "Decamillennial Hearthflame", img: "img/gifts/gift-hearthflame.webp", keywords: ["burn"] },
  { id: "gift-cookbook", name: "Secret Cookbook", img: "img/gifts/gift-cookbook.webp", keywords: ["burn"] },
  { id: "gift-purloined", name: "Purloined Flame", img: "img/gifts/gift-purloined.webp", keywords: ["burn"] },
  { id: "gift-millarca", name: "Millarca", img: "img/gifts/gift-millarca.webp", keywords: ["bleed"] },
  { id: "gift-ruptured", name: "Ruptured Blood Sac", img: "img/gifts/gift-ruptured.webp", keywords: ["bleed"] },
  { id: "gift-devotion", name: "Devotion", img: "img/gifts/gift-devotion.webp", keywords: ["bleed"] },
  { id: "gift-shock", name: "Haemorrhagic Shock", img: "img/gifts/gift-shock.webp", keywords: ["bleed"] },
  { id: "gift-gemstone", name: "Gemstone Oscillator", img: "img/gifts/gift-gemstone.webp", keywords: ["keywordless"] },
  { id: "gift-wobbling", name: "Wobbling Keg", img: "img/gifts/gift-wobbling.webp", keywords: ["tremor"] },
  { id: "gift-interlocked", name: "Interlocked Cogs", img: "img/gifts/gift-interlocked.webp", keywords: ["tremor"] },
  { id: "gift-epicenter", name: "Epicenter", img: "img/gifts/gift-epicenter.webp", keywords: ["tremor"] },
  { id: "gift-omnibell", name: "Omnivibro-octovecti-bell", img: "img/gifts/gift-omnibell.webp", keywords: ["tremor"] },
  { id: "gift-shard", name: "Shard of Apocalypse", img: "img/gifts/gift-shard.webp", keywords: ["rupture"] },
  { id: "gift-thornyrope", name: "Thorny Rope Cuffs", img: "img/gifts/gift-thornyrope.webp", keywords: ["rupture"] },
  { id: "gift-eerie", name: "Eerie Effigy", img: "img/gifts/gift-eerie.webp", keywords: ["rupture"] },
  { id: "gift-ruin", name: "Ruin", img: "img/gifts/gift-ruin.webp", keywords: ["rupture"] },
  { id: "gift-cantabile", name: "Cantabile", img: "img/gifts/gift-cantabile.webp", keywords: ["sinking"] },
  { id: "gift-overcoat", name: "Faded Overcoat", img: "img/gifts/gift-overcoat.webp", keywords: ["sinking"] },
  { id: "gift-tangledbones", name: "Tangled Bones", img: "img/gifts/gift-tangledbones.webp", keywords: ["sinking"] },
  { id: "gift-surging", name: "Surging Globe", img: "img/gifts/gift-surging.webp", keywords: ["sinking"] },
  { id: "gift-wave", name: "Impending Wave", img: "img/gifts/gift-wave.webp", keywords: ["sinking"] },
  { id: "gift-recollection", name: "Recollection of a Certain Day", img: "img/gifts/gift-recollection.webp", keywords: ["poise"] },
  { id: "gift-angel", name: "Angel's Cut", img: "img/gifts/gift-angel.webp", keywords: ["poise"] },
  { id: "gift-reminiscence", name: "Reminiscence", img: "img/gifts/gift-reminiscence.webp", keywords: ["poise"] },
  { id: "gift-cask", name: "Cask Spirits", img: "img/gifts/gift-cask.webp", keywords: ["poise"] },
  { id: "gift-telepole", name: "Miniature Telepole", img: "img/gifts/gift-telepole.webp", keywords: ["charge"] },
  { id: "gift-bolt", name: "T-IB Octagonal Bolt", img: "img/gifts/gift-bolt.webp", keywords: ["charge"] },
  { id: "gift-insulator", name: "Insulator", img: "img/gifts/gift-insulator.webp", keywords: ["charge"] },
  { id: "gift-perpetual", name: "T-5 Perpetual Motion Machine", img: "img/gifts/gift-perpetual.webp", keywords: ["charge"] },
  { id: "gift-rebate", name: "Rebate Token", img: "img/gifts/gift-rebate.webp", keywords: ["keywordless"] },
  { id: "gift-pamphlet", name: "New Release Pamphlet", img: "img/gifts/gift-pamphlet.webp", keywords: ["keywordless"] },
  { id: "gift-catalogue", name: "Special Catalogue", img: "img/gifts/gift-catalogue.webp", keywords: ["keywordless"] },
  { id: "gift-discount", name: "Pre-order Discount", img: "img/gifts/gift-discount.webp", keywords: ["keywordless"] },
  { id: "gift-merch", name: "Renewed Merch", img: "img/gifts/gift-merch.webp", keywords: ["keywordless"] },
  { id: "gift-guide", name: "Trial Plan Guide", img: "img/gifts/gift-guide.webp", keywords: ["keywordless"] },
  { id: "gift-prestige", name: "Prestige Card", img: "img/gifts/gift-prestige.webp", keywords: ["keywordless"] },
  { id: "gift-layered", name: "Layered Bandages", img: "img/gifts/gift-layered.webp", keywords: ["bleed"] },
  { id: "gift-overused", name: "Overused Whetstone", img: "img/gifts/gift-overused.webp", keywords: ["slash"] },
  { id: "gift-short", name: "Short Cane Sword", img: "img/gifts/gift-short.webp", keywords: ["slash"] },
  { id: "gift-gourd", name: "Cloudpattern Gourd Bottle", img: "img/gifts/gift-gourd.png", keywords: ["slash"] },
  { id: "gift-greatsword", name: "Broken Greatsword", img: "img/gifts/gift-greatsword.webp", keywords: ["slash"] },
  { id: "gift-shoes", name: "High-tensity Shoes", img: "img/gifts/gift-shoes.webp", keywords: ["pierce"] },
  { id: "gift-plume", name: "Plume of Proof", img: "img/gifts/gift-plume.webp", keywords: ["pierce"] },
  { id: "gift-hems", name: "Torn Hems", img: "img/gifts/gift-hems.webp", keywords: ["pierce"] },
  { id: "gift-manual", name: "Dueling Manual Book 3", img: "img/gifts/gift-manual.webp", keywords: ["pierce"] },
  { id: "gift-recycle", name: "Dimensional Recycle Bin", img: "img/gifts/gift-recycle.webp", keywords: ["blunt"] },
  { id: "gift-flashcards", name: "Pocket Flashcards", img: "img/gifts/gift-flashcards.webp", keywords: ["blunt"] },
  { id: "gift-dimensional", name: "Dimensional Perception Modifier", img: "img/gifts/gift-dimensional.webp", keywords: ["blunt"] },
  { id: "gift-vengeance", name: "The Book of Vengeance", img: "img/gifts/gift-vengeance.webp", keywords: ["blunt"] },
  { id: "gift-starshard", name: "Blue Starshard", img: "img/gifts/gift-starshard.webp", keywords: ["sinking"] },
  { id: "gift-wbflask", name: "WB Flask", img: "img/gifts/gift-wbflask.webp", keywords: ["bleed"] },
  { id: "gift-sanguine", name: "Sanguine Fragrance Descends", img: "img/gifts/gift-sanguine.webp", keywords: ["bleed"] },
  { id: "gift-family", name: "The Family's Resentment", img: "img/gifts/gift-family.webp", keywords: ["bleed"] },
  { id: "gift-capo", name: "For the Capo", img: "img/gifts/gift-capo.webp", keywords: ["tremor"] },
  { id: "gift-middle", name: "Rules of the Middle", img: "img/gifts/gift-middle.webp", keywords: ["blunt"] },
  { id: "gift-kkomi", name: "Kkomi's Mini-Gift", img: "img/gifts/gift-kkomi.webp", keywords: ["keywordless"] },
  { id: "gift-certain", name: "A Certain Philosophy", img: "img/gifts/gift-certain.webp", keywords: ["keywordless"] },
  { id: "gift-wealth", name: "Wealth", img: "img/gifts/gift-wealth.webp", keywords: ["keywordless"] },
  { id: "gift-ebony", name: "Ebony Brooch", img: "img/gifts/gift-ebony.webp", keywords: ["rupture"] },
  { id: "gift-maggots", name: "Contained Maggots", img: "img/gifts/gift-maggots.webp", keywords: ["bleed"] },
  { id: "gift-madeorder", name: "Made-to-Order", img: "img/gifts/gift-madeorder.webp", keywords: ["tremor"] },
  { id: "gift-haunted", name: "Haunted Shoes", img: "img/gifts/gift-haunted.webp", keywords: ["sinking"] },
  { id: "gift-frozen", name: "Frozen Cries", img: "img/gifts/gift-frozen.webp", keywords: ["sinking"] },
  { id: "gift-hoarfrost", name: "Hoarfrost Footprint", img: "img/gifts/gift-hoarfrost.webp", keywords: ["sinking"] },
  { id: "gift-scriptures", name: "Nagel und Hammer Scriptures", img: "img/gifts/gift-scriptures.webp", keywords: ["bleed"] },
  { id: "gift-mane", name: "Blood-red Mane", img: "img/gifts/gift-mane.webp", keywords: ["keywordless"] },
  { id: "gift-squalidity", name: "Squalidity", img: "img/gifts/gift-squalidity.webp", keywords: ["bleed"] },
  { id: "gift-wholeness", name: "Wholeness", img: "img/gifts/gift-wholeness.webp", keywords: ["bleed"] },
  { id: "gift-spicebush", name: "Spicebush Branch", img: "img/gifts/gift-spicebush.webp", keywords: ["keywordless"] },
  { id: "gift-kaleidoscope", name: "Kaleidoscope", img: "img/gifts/gift-kaleidoscope.webp", keywords: ["keywordless"] },
  { id: "gift-glasses", name: "Broken Glasses", img: "img/gifts/gift-glasses.webp", keywords: ["keywordless"] },
  { id: "gift-letter", name: "Unmailed Letter", img: "img/gifts/gift-letter.webp", keywords: ["rupture"] },
  { id: "gift-town", name: "Town-protecting Harpoon", img: "img/gifts/gift-town.webp", keywords: ["keywordless"] },
  { id: "gift-heart", name: "Cetacean Heart", img: "img/gifts/gift-heart.webp", keywords: ["poise"] },
  { id: "gift-prosthetic", name: "Harpoon Prosthetic Leg", img: "img/gifts/gift-prosthetic.webp", keywords: ["poise"] },
  { id: "gift-lamp", name: "Guiding Gas Lamp", img: "img/gifts/gift-lamp.webp", keywords: ["poise"] },
  { id: "gift-violin", name: "Broken Violin", img: "img/gifts/gift-violin.webp", keywords: ["keywordless"] },
  { id: "gift-manor", name: "Manor-shaped Music Box", img: "img/gifts/gift-manor.webp", keywords: ["sinking"] },
  { id: "gift-butler", name: "Chief Butler's Secret Arts", img: "img/gifts/gift-butler.webp", keywords: ["keywordless"] },
  { id: "gift-mirror", name: "Handheld Mirror", img: "img/gifts/gift-mirror.webp", keywords: ["tremor"] },
  { id: "gift-binding", name: "Butler Style Binding Arts", img: "img/gifts/gift-binding.webp", keywords: ["keywordless"] },
  { id: "gift-refraction", name: "Refraction Glass Pod", img: "img/gifts/gift-refraction.webp", keywords: ["sinking"] },
  { id: "gift-allday", name: "La Manchaland All-day Pass", img: "img/gifts/gift-allday.webp", keywords: ["bleed"] },
  { id: "gift-token", name: "Token of Victory", img: "img/gifts/gift-token.webp", keywords: ["bleed"] },
  { id: "gift-devouring", name: "Devouring Cube", img: "img/gifts/gift-devouring.webp", keywords: ["keywordless"] },
  { id: "gift-mask", name: "Mask of the Parade", img: "img/gifts/gift-mask.webp", keywords: ["bleed"] },
  { id: "gift-hot", name: "Hot 'n Juicy Drumstick", img: "img/gifts/gift-hot.webp", keywords: ["burn"] },
  { id: "gift-dry", name: "Dry-to-the-Bone Breast", img: "img/gifts/gift-dry.webp", keywords: ["rupture"] },
  { id: "gift-tango", name: "Tango Marinade", img: "img/gifts/gift-tango.webp", keywords: ["keywordless"] },
  { id: "gift-contaminated", name: "Contaminated Needle & Thread", img: "img/gifts/gift-contaminated.webp", keywords: ["bleed"] },
  { id: "gift-needle", name: "Sharp Needle & Thread", img: "img/gifts/gift-needle.webp", keywords: ["keywordless"] },
  { id: "gift-spanner", name: "Oil-gunked Spanner", img: "img/gifts/gift-spanner.webp", keywords: ["tremor"] },
  { id: "gift-scrap", name: "Twinkling Scrap", img: "img/gifts/gift-scrap.webp", keywords: ["keywordless"] },
  { id: "gift-crab", name: "Trash Crab Brain Wine", img: "img/gifts/gift-crab.webp", keywords: ["rupture"] },
  { id: "gift-hat", name: "Pom-pom Hat", img: "img/gifts/gift-hat.webp", keywords: ["poise"] },
  { id: "gift-sack", name: "Huge Gift Sack", img: "img/gifts/gift-sack.webp", keywords: ["poise"] },
  { id: "gift-sad", name: "Sad Plushie", img: "img/gifts/gift-sad.webp", keywords: ["keywordless"] },
  { id: "gift-ledger", name: "Black Ledger", img: "img/gifts/gift-ledger.webp", keywords: ["keywordless"] },
  { id: "gift-hilt", name: "Rusted Hilt", img: "img/gifts/gift-hilt.webp", keywords: ["slash"] },
  { id: "gift-fractured", name: "Fractured Blade", img: "img/gifts/gift-fractured.webp", keywords: ["bleed"] },
  { id: "gift-brokenblade", name: "Broken Blade", img: "img/gifts/gift-brokenblade.webp", keywords: ["poise"] },
  { id: "gift-redtassel", name: "Red Tassel", img: "img/gifts/gift-redtassel.webp", keywords: ["slash"] },
  { id: "gift-sublimity", name: "Sublimity", img: "img/gifts/gift-sublimity.webp", keywords: ["slash"] },
  { id: "gift-unbending", name: "Unbending", img: "img/gifts/gift-unbending.webp", keywords: ["slash"] },
  { id: "gift-bamboo", name: "Ragged Bamboo Hat", img: "img/gifts/gift-bamboo.webp", keywords: ["poise"] },
  { id: "gift-robe", name: "Old Dopo Robe", img: "img/gifts/gift-robe.webp", keywords: ["slash"] },
  { id: "gift-silver", name: "Silver Watch Case", img: "img/gifts/gift-silver.webp", keywords: ["tremor"] },
  { id: "gift-faded", name: "Faded Watch Case", img: "img/gifts/gift-faded.webp", keywords: ["tremor"] },
  { id: "gift-warning", name: "Warning Notice", img: "img/gifts/gift-warning.webp", keywords: ["keywordless"] },
  { id: "gift-etched", name: "Etched Clock Hands", img: "img/gifts/gift-etched.webp", keywords: ["tremor"] },
  { id: "gift-rusted", name: "Rusted Clock Hands", img: "img/gifts/gift-rusted.webp", keywords: ["tremor"] },
  { id: "gift-chalice", name: "Chalice of Trickle-down", img: "img/gifts/gift-chalice.webp", keywords: ["tremor"] },
  { id: "gift-prepaid", name: "Prepaid Time Receipt", img: "img/gifts/gift-prepaid.webp", keywords: ["keywordless"] },
  { id: "gift-pocket", name: "Pocket Watch: Type L", img: "img/gifts/gift-pocket.webp", keywords: ["tremor"] },
  { id: "gift-pockete", name: "Pocket Watch: Type E", img: "img/gifts/gift-pockete.webp", keywords: ["tremor"] },
  { id: "gift-pockety", name: "Pocket Watch: Type Y", img: "img/gifts/gift-pockety.webp", keywords: ["tremor"] },
  { id: "gift-pocketp", name: "Pocket Watch: Type P", img: "img/gifts/gift-pocketp.webp", keywords: ["tremor"] },
  { id: "gift-economy", name: "Economy Class Discount Voucher", img: "img/gifts/gift-economy.webp", keywords: ["keywordless"] },
  { id: "gift-canned", name: "Canned Ice Cream", img: "img/gifts/gift-canned.webp", keywords: ["keywordless"] },
  { id: "gift-dagger", name: "E-Type Dimensional Dagger", img: "img/gifts/gift-dagger.png", keywords: ["charge"] },
  { id: "gift-portablebattery", name: "Portable Barrier Battery", img: "img/gifts/gift-portablebattery.webp", keywords: ["charge"] },
  { id: "gift-bio", name: "Bioregenerative Battery", img: "img/gifts/gift-bio.webp", keywords: ["charge"] },
  { id: "gift-cardio", name: "Cardiovascular Reactive Module", img: "img/gifts/gift-cardio.webp", keywords: ["charge"] },
  { id: "gift-joint", name: "Prosthetic Joint Servos", img: "img/gifts/gift-joint.webp", keywords: ["charge"] },
  { id: "gift-crystallised", name: "Crystallized Blood", img: "img/gifts/gift-crystallised.webp", keywords: ["bleed"] },
  { id: "gift-automated", name: "Automated Joints", img: "img/gifts/gift-automated.webp", keywords: ["charge"] },
  { id: "gift-overcharged", name: "Overcharged Battery", img: "img/gifts/gift-overcharged.webp", keywords: ["charge"] },
  { id: "gift-servos", name: "Perpetual Generator Servos", img: "img/gifts/gift-servos.webp", keywords: ["charge"] },
  { id: "gift-hearts", name: "Hearts-powered Jewel", img: "img/gifts/gift-hearts.webp", keywords: ["charge"] },
  { id: "gift-filial", name: "Filial Love", img: "img/gifts/gift-filial.webp", keywords: ["bleed"] },
  { id: "gift-misaligned", name: "Misaligned Transistor", img: "img/gifts/gift-misaligned.png", keywords: ["charge"] },
  { id: "gift-mental", name: "Mental Corruption Boosting Gas", img: "img/gifts/gift-mental.webp", keywords: ["sinking"] },
  { id: "gift-leaked", name: "Leaked Enkephalin", img: "img/gifts/gift-leaked.webp", keywords: ["sinking"] },
  { id: "gift-hardship", name: "Hardship", img: "img/gifts/gift-hardship.webp", keywords: ["keywordless"] },
  { id: "gift-crown", name: "Crown of Thorns", img: "img/gifts/gift-crown.webp", keywords: ["keywordless"] },
  { id: "gift-rest", name: "Rest", img: "img/gifts/gift-rest.webp", keywords: ["sinking"] },
  { id: "gift-snake", name: "Snake Slough", img: "img/gifts/gift-snake.webp", keywords: ["keywordless"] },
  { id: "gift-halo", name: "False Halo", img: "img/gifts/gift-halo.webp", keywords: ["keywordless"] },
  { id: "gift-metronome", name: "Metronome", img: "img/gifts/gift-metronome.webp", keywords: ["keywordless"] },
  { id: "gift-bridlebridle", name: "Bridle", img: "img/gifts/gift-bridlebridle.webp", keywords: ["keywordless"] },
  { id: "gift-contempt", name: "Contempt of the Gaze of Contempt", img: "img/gifts/gift-contempt.webp", keywords: ["keywordless"] },
  { id: "gift-unhatched", name: "Unhatched Embers", img: "img/gifts/gift-unhatched.webp", keywords: ["burn"] },
  { id: "gift-plug", name: "Anti-Ovine Grounding Plug", img: "img/gifts/gift-plug.webp", keywords: ["keywordless"] },
  { id: "gift-king", name: "Vestiges of the King", img: "img/gifts/gift-king.webp", keywords: ["keywordless"] },
  { id: "gift-lantern", name: "Snuffed Lantern", img: "img/gifts/gift-lantern.webp", keywords: ["tremor"] },
  { id: "gift-candlestick", name: "Snuffed Candlestick", img: "img/gifts/gift-candlestick.webp", keywords: ["keywordless"] },
  { id: "gift-shadow", name: "Shadow Monster", img: "img/gifts/gift-shadow.webp", keywords: ["tremor"] },
  { id: "gift-box", name: "Packaging Box", img: "img/gifts/gift-box.webp", keywords: ["keywordless"] },
  { id: "gift-ribbon", name: "Packaging Ribbon", img: "img/gifts/gift-ribbon.webp", keywords: ["keywordless"] },
  { id: "gift-gift", name: "Gift", img: "img/gifts/gift-gift.webp", keywords: ["keywordless"] },
  { id: "gift-jolly", name: "Jolly Plushie", img: "img/gifts/gift-jolly.webp", keywords: ["poise"] },
  { id: "gift-contract", name: "Implicit Contract Renewal", img: "img/gifts/gift-contract.webp", keywords: ["keywordless"] },
  { id: "gift-pipe", name: "Darkflame Smoking Pipe", img: "img/gifts/gift-pipe.webp", keywords: ["pierce"] },
  { id: "gift-equalizer", name: "Equalizer", img: "img/gifts/gift-equalizer.webp", keywords: ["pierce"] },
  { id: "gift-swift", name: "Swift Command", img: "img/gifts/gift-swift.webp", keywords: ["keywordless"] },
  { id: "gift-gear", name: "Gear Shrapnel", img: "img/gifts/gift-gear.webp", keywords: ["poise"] },
  { id: "gift-cqc", name: "CQC Manual", img: "img/gifts/gift-cqc.webp", keywords: ["poise"] },
  { id: "gift-gloves", name: "Combustion Gloves", img: "img/gifts/gift-gloves.webp", keywords: ["burn"] },
  { id: "gift-boots", name: "Spiked Combat Boots", img: "img/gifts/gift-boots.webp", keywords: ["rupture"] },
  { id: "gift-reignition", name: "Re-ignition Plug", img: "img/gifts/gift-reignition.webp", keywords: ["burn"] },
  { id: "gift-enhancer", name: "Enhancer Mk.4", img: "img/gifts/gift-enhancer.webp", keywords: ["rupture"] },
  { id: "gift-embers", name: "Embers", img: "img/gifts/gift-embers.webp", keywords: ["burn"] },
  { id: "gift-twigs", name: "Twigs", img: "img/gifts/gift-twigs.webp", keywords: ["rupture"] },
  { id: "gift-regular", name: "Regular Operational Gear", img: "img/gifts/gift-regular.webp", keywords: ["keywordless"] },
  { id: "gift-operation", name: "Operation Authorization Card", img: "img/gifts/gift-operation.webp", keywords: ["keywordless"] },
  { id: "gift-highrisk", name: "High-risk Operational Gear", img: "img/gifts/gift-highrisk.webp", keywords: ["keywordless"] },
  { id: "gift-hardwood", name: "Hardwood Liquor Cup", img: "img/gifts/gift-hardwood.webp", keywords: ["keywordless"] },
  { id: "gift-worn", name: "Worn Hilt", img: "img/gifts/gift-worn.webp", keywords: ["slash"] },
  { id: "gift-resplendence", name: "Resplendence", img: "img/gifts/gift-resplendence.webp", keywords: ["bleed"] },
  { id: "gift-cultivation", name: "Cultivation", img: "img/gifts/gift-cultivation.webp", keywords: ["slash"] },
  { id: "gift-swarmcloud", name: "Swarmcloud", img: "img/gifts/gift-swarmcloud.webp", keywords: ["slash"] },
  { id: "gift-enhtattoo", name: "Enh. Tattoo - The Middle", img: "img/gifts/gift-enhtattoo.webp", keywords: ["blunt"] },
  { id: "gift-talisman", name: "Strange Glyph Talisman", img: "img/gifts/gift-talisman.webp", keywords: ["rupture"] },
  { id: "gift-harestride", name: "Harestride", img: "img/gifts/gift-harestride.webp", keywords: ["rupture"] },
  { id: "gift-chains", name: "Chains of Loyalty", img: "img/gifts/gift-chains.webp", keywords: ["blunt"] },
  { id: "gift-glyphs", name: "Strange Glyph Inscriptions", img: "img/gifts/gift-glyphs.webp", keywords: ["rupture"] },
  { id: "gift-bamboohat", name: "Shadow Bamboo Hat", img: "img/gifts/gift-bamboohat.webp", keywords: ["slash"] },
  { id: "gift-everlasting", name: "Everlasting Chains of Bond", img: "img/gifts/gift-everlasting.webp", keywords: ["blunt"] },
  { id: "gift-glass", name: "Glyph of Glass Shards", img: "img/gifts/gift-glass.webp", keywords: ["rupture"] },
  { id: "gift-swishing", name: "Swishing Fuel Tank", img: "img/gifts/gift-swishing.webp", keywords: ["keywordless"] },
  { id: "gift-drop", name: "A Drop", img: "img/gifts/gift-drop.webp", keywords: ["bleed"] },
  { id: "gift-sorrowful", name: "Sorrowful Exhale", img: "img/gifts/gift-sorrowful.webp", keywords: ["poise"] },
  { id: "gift-cannon", name: "Shatterbound Cannon", img: "img/gifts/gift-cannon.webp", keywords: ["keywordless"] },
  { id: "gift-thorn", name: "Coveting Thorn", img: "img/gifts/gift-thorn.webp", keywords: ["bleed"] },
  { id: "gift-tenacity", name: "Tenacity Bolus", img: "img/gifts/gift-tenacity.webp", keywords: ["keywordless"] },
  { id: "gift-axe", name: "Lightning Axe", img: "img/gifts/gift-axe.webp", keywords: ["charge"] },
  { id: "gift-flower", name: "Flower in the Mirror", img: "img/gifts/gift-flower.webp", keywords: ["rupture"] },
  { id: "gift-moon", name: "Moon in the Water", img: "img/gifts/gift-moon.webp", keywords: ["poise"] },
  { id: "gift-ashen", name: "Ashen Constellation's Blessing", img: "img/gifts/gift-ashen.webp", keywords: ["keywordless"] },
  { id: "gift-unchosen", name: "The Unchosen", img: "img/gifts/gift-unchosen.webp", keywords: ["sinking"] },
  { id: "gift-tears", name: "Sword Sharpened with Tears", img: "img/gifts/gift-tears.webp", keywords: ["sinking"] },
  { id: "gift-magical", name: "Magical Girl's Lovely Gift", img: "img/gifts/gift-magical.webp", keywords: ["charge"] },
  { id: "gift-spent", name: "Spent Use, Forming Hate", img: "img/gifts/gift-spent.webp", keywords: ["charge"] },
  { id: "gift-trauma", name: "Trauma Shield", img: "img/gifts/gift-trauma.webp", keywords: ["keywordless"] },
  { id: "gift-value", name: "Value Disposal", img: "img/gifts/gift-value.webp", keywords: ["keywordless"] },
  { id: "gift-time", name: "Interlinked Time", img: "img/gifts/gift-time.webp", keywords: ["tremor"] },
  { id: "gift-emergency", name: "Emergency Investigator Badge", img: "img/gifts/gift-emergency.webp", keywords: ["keywordless"] },
  { id: "gift-override", name: "Entanglement Override Sequencer", img: "img/gifts/gift-override.webp", keywords: ["tremor"] },
  { id: "gift-accelerator", name: "Microprecision Time Accelerator", img: "img/gifts/gift-accelerator.webp", keywords: ["tremor"] },
  { id: "gift-barding", name: "Blackiron Barding", img: "img/gifts/gift-barding.webp", keywords: ["tremor"] },
  { id: "gift-bloodflame", name: "Bloodflame Sword", img: "img/gifts/gift-bloodflame.webp", keywords: ["burn"] },
  { id: "gift-cloth", name: "Red Cloth that Closes the Heart", img: "img/gifts/gift-cloth.webp", keywords: ["slash"] },
  { id: "gift-wine", name: "Shaoxing Wine", img: "img/gifts/gift-wine.webp", keywords: ["keywordless"] },
  { id: "gift-zhi", name: "Virtue - Zhi", img: "img/gifts/gift-zhi.webp", keywords: ["rupture"] },
  { id: "gift-yong", name: "Virtue - Yong", img: "img/gifts/gift-yong.webp", keywords: ["rupture"] },
  { id: "gift-ren", name: "Virtue - Ren", img: "img/gifts/gift-ren.webp", keywords: ["rupture"] },
  { id: "gift-cultivationcut", name: "Cultivation: Cut, File, Carve, Polish", img: "img/gifts/gift-cultivationcut.webp", keywords: ["rupture"] },
  { id: "gift-bloodyflesh", name: "Bloody Flesh, Fleshy Blood", img: "img/gifts/gift-bloodyflesh.webp", keywords: ["bleed"] },
  { id: "gift-hardblood", name: "Hardblood Glaive", img: "img/gifts/gift-hardblood.webp", keywords: ["bleed"] },
  { id: "gift-wcorp", name: "W Corp. Standard Issue Cap", img: "img/gifts/gift-wcorp.webp", keywords: ["charge"] },
  { id: "gift-discarded", name: "Discarded Dimensional Gauntlet", img: "img/gifts/gift-discarded.webp", keywords: ["charge"] },
  { id: "gift-cleanup", name: "Cleanup Agent Gear Set C", img: "img/gifts/gift-cleanup.webp", keywords: ["charge"] },

  // ...keep adding new gifts here...
];

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

// --- Dev helpers: generate templates for new IDs / EGOs in the console ---
// These do NOT change your data automatically – they just print a ready-to-paste snippet.

function devIdentityTemplate(sinnerId, shortId) {
  // Example: sinnerId = "ryoshu", shortId = "newid"
  // -> id "ryoshu-newid", img "img/IDs/ryoshu-newid.png"
  const id = `${sinnerId}-${shortId}`;

  const snippet = `
{
  id: "${id}",
  sinnerId: "${sinnerId}",
  name: "???",
  img: "img/IDs/${id}.png",
  keywords: [/* e.g. "bleed", "slash" */],
},`;

  console.log(snippet);
}

function devEgoTemplate(sinnerId, shortId, rank) {
  // Example: sinnerId = "yi-sang", shortId = "dimension", rank = "HE"
  // -> id "yi-sang-dimension-he", img "img/EGOs/yi-sang-dimension-he.png"
  const rankUpper = rank.toUpperCase();
  const id = `${sinnerId}-${shortId}-${rankUpper.toLowerCase()}`;

  const snippet = `
{
  id: "${id}",
  sinnerId: "${sinnerId}",
  name: "???",
  rank: "${rankUpper}",
  img: "img/EGOs/${id}.png",
  keywords: [/* e.g. "rupture", "charge" */],
},`;

  console.log(snippet);
}
