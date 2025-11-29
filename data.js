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
