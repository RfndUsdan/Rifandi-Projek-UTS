// =========================
//  DATA COMMANDER
// =========================
const commander = [
    {
        id: 1,
        name: "Ling",
        image: "./aset/commander/ling.png",
        type: "combat",
        ability1: "Showdown",
        desc_ability1: "Creates a Dueling Ring on the Chessboard...",
        ability2: "Transcendent Stance",
        desc_ability2: "After winning a duel, permanently gain 5% extra Physical Attack..."
    },
    {
        id: 2,
        name: "Aamon",
        image: "./aset/commander/aamon.png",
        type: "strategy",
        ability1: "Blade of Resonance",
        desc_ability1: "When a Hero reaches 2-Star, you'll get 1 Shard(s)...",
        ability2: "Skybreaker Blade",
        desc_ability2: "Gain 8 extra Gold each time a Mirror Device is created."
    },
    {
        id: 3,
        name: "Angela",
        image: "./aset/commander/angela.png",
        type: "survival",
        ability1: "Love's Protection",
        desc_ability1: "Select an allied hero to protect...",
        ability2: "Ripples of Love",
        desc_ability2: "Angela protects one extra hero with the highest Power."
    },
    {
        id: 4,
        name: "Fanny",
        image: "./aset/commander/fanny.png",
        type: "combat",
        ability1: "Blade Dancer",
        desc_ability1: "Fanny will spawn a Hero Launcher outside the battlefield...",
        ability2: "Heart of the Blade",
        desc_ability2: "The Hero Launcher only needs 9 rounds to complete construction..."
    },
    {
        id: 5,
        name: "Guinevere",
        image: "./aset/commander/guinevere.png",
        type: "resource",
        ability1: "Super Magic",
        desc_ability1: "When refreshing the Shop, there's a 14% chance...",
        ability2: "Mystic Evolution",
        desc_ability2: "Chance of finding free Hero(es) increases to 26%."
    },
    {
        id: 6,
        name: "Lancelot",
        image: "./aset/commander/lancelot.png",
        type: "resource",
        ability1: "Golden Legacy",
        desc_ability1: "No longer earns Interest...",
        ability2: "Golden Blade",
        desc_ability2: "Bonus Gold increases to 2/3/4."
    },
    {
        id: 7,
        name: "Lunox",
        image: "./aset/commander/lunox.png",
        type: "strategy",
        ability1: "Budding Blossom",
        desc_ability1: "Usable after Stage III...",
        ability2: "Dawn's Gift",
        desc_ability2: "Unlocks after Stage II."
    },
    {
        id: 8,
        name: "Lylia",
        image: "./aset/commander/lylia.png",
        type: "strategy",
        ability1: "Go, Tharz!",
        desc_ability1: "Can be used after Capacity reaches 8...",
        ability2: "Party Time!",
        desc_ability2: "Upon losing, grant 15% Hybrid ATK..."
    },
    {
        id: 9,
        name: "Nana",
        image: "./aset/commander/nana.png",
        type: "survival",
        ability1: "Molina's Blessing",
        desc_ability1: "Nana avoids her first death...",
        ability2: "Molina's Gift",
        desc_ability2: "Receive 4 Gold upon taking damage for the first time."
    },
    {
        id: 10,
        name: "Zilong",
        image: "./aset/commander/zilong.png",
        type: "combat",
        ability1: "Great Dragon Spear",
        desc_ability1: "Obtain the Great Dragon Spear at the start...",
        ability2: "Dragon's Roar",
        desc_ability2: "You can purchase 2 additional effect(s)..."
    },
    {
        id: 11,
        name: "Chou",
        image: "./aset/commander/chou.png",
        type: "resource",
        ability1: "Warrior's Honor",
        desc_ability1: "Gain 2 Gold after winning a round.",
        ability2: "Win or Lose",
        desc_ability2: "When you lose a Round, gain 3 Gold instead."
    },
    {
        id: 12,
        name: "Cyclops",
        image: "./aset/commander/cyclops.png",
        type: "resource",
        ability1: "Astral Blessing - Gold",
        desc_ability1: "When a player is eliminated, gain 12% Gold based on their Lineup value.",
        ability2: "Astral Blessing - Hero",
        desc_ability2: "Additionally gain 1 Hero(es) at their current Star level."
    },
    {
        id: 13,
        name: "Dyrroth",
        image: "./aset/commander/dyrroth.png",
        type: "strategy",
        ability1: "Abyssal Devourer",
        desc_ability1: "Dyrroth can devour a 1-Star hero every two rounds to transform it into a higher-quality hero. The quality (gold cost) remains the same when devouring 5-gold heroes.",
        ability2: "Abyssal Favor",
        desc_ability2: "Dyrroth gains 1 Commander EXP when a hero is devoured. After every two times a hero is devoured, the next devour grants two heroes of the same Synergy as the devoured one (or two random 5-gold heroes if a 5-gold hero was devoured)."
    },
    {
        id: 14,
        name: "Gusion",
        image: "./aset/commander/gusion.png",
        type: "strategy",
        ability1: "Light Sigil",
        desc_ability1: "When his skill is active, Gusion will summon a sigil that displays a random role synergy. You can move your hero to the sigil's area to gain additional synergies based on the role they appear in. The sigil will disappear after use and grants a 11 gold bonus.",
        ability2: "Sigil Resonance",
        desc_ability2: "After phase 2, the sigil can be used 1 more time."
    },
    {
        id: 15,
        name: "Johnson",
        image: "./aset/commander/johnson.png",
        type: "combat",
        ability1: "Johnny Go!!",
        desc_ability1: "Add a 3-Gold Johnny with a random Synergy from Johnson's Synergy Pool to your Shop.",
        ability2: "Transform!",
        desc_ability2: "When battle starts, Johnny charges toward the area with the most enemies, dealing Magic DMG equal to 12% of his Max HP to surrounding enemies."
    },
    {
        id: 16,
        name: "Kagura",
        image: "./aset/commander/kagura.png",
        type: "survival",
        ability1: "Shield Umbrella",
        desc_ability1: "Summon the Yin-Yang Umbrella on the chessboard. Every 10s after the battle begins, it grants ally Heroes with a Shield equal to 9% of their Max HP.",
        ability2: "Yin Yang Gathering",
        desc_ability2: "The Yin-Yang Umbrella's Shield increases to 18% of Max HP."
    },
    {
        id: 17,
        name: "Karina",
        image: "./aset/commander/karina.png",
        type: "combat",
        ability1: "Shadow Twinblades",
        desc_ability1: "Gain Shadow Twinblades at the start: When an enemy Hero adjacent to the carrier has HP below 15%, Karina executes the target.",
        ability2: "Twinblades Evolution",
        desc_ability2: "After Karina executes the target, the carrier's DMG is increased by 1%, up to 35%."
    },
    {
        id: 18,
        name: "Layla",
        image: "./aset/commander/layla.png",
        type: "combat",
        ability1: "Hologram: Malefic Gun",
        desc_ability1: "Layla generates a hologram on the Chessboard. The hologram will attack the nearest enemy Hero and deal 250/400/600/800 Physical DMG every 2s depending on the current stage.",
        ability2: "Hologram: Destruction Rush",
        desc_ability2: "Layla's hologram fires a laser that pierces through enemies, dealing 400/650/1000/1200 Physical DMG depending on the current stage."
    },
    {
        id: 19,
        name: "Lukas",
        image: "./aset/commander/lukas.png",
        type: "combat",
        ability1: "Unleash the Beast",
        desc_ability1: "A statue materializes on the battlefield. After 4s, it transforms into a Sacred Beast to unleash Shockwave Blast before vanishing. Shockwave Blast: Deals Physical DMG equal to 20% of target's Max HP to enemies in medium range and stuns them for 1s.",
        ability2: "Frenzy",
        desc_ability2: "Shockwave Blast's power increases to 45% of target's Max HP as Physical DMG, and stun duration increases to 1.5s. If the statue is destroyed within 4s, the Sacred Beast appears early to unleash its Wild Power before vanishing."
    },
    {
        id: 20,
        name: "Miya",
        image: "./aset/commander/miya.png",
        type: "combat",
        ability1: "Lunar Longbow",
        desc_ability1: "Bless an allied Hero. After they perform 8 Basic ATK(s), Miya rapidly fires arrows at enemies, each dealing Physical DMG equal to 12% of the target's Max HP.",
        ability2: "Moonshade Arrow",
        desc_ability2: "Miya fires additional split arrows, dealing Physical DMG equal to 8% of enemy's Max HP upon hit."
    },
    {
        id: 21,
        name: "Moskov",
        image: "./aset/commander/moskov.png",
        type: "strategy",
        ability1: "Power of Shadow",
        desc_ability1: "Place the designated 1-Gold, 2-Gold, 3-Gold, and 4-Gold Heroes into the Shadow Field to complete the ritual. The next Hero placed within gains 18% Hybrid ATK and 18% HP.",
        ability2: "Dark Star",
        desc_ability2: "Generates two additional 1-Star copies of the enhanced Hero."
    },
    {
        id: 22,
        name: "Paquito",
        image: "./aset/commander/paquito.png",
        type: "strategy",
        ability1: "Fist of Glory",
        desc_ability1: "Provides items in certain rounds that, when used on a 3 & 4 gold hero, grant two 1-star copies of that hero.",
        ability2: "Champ Stance",
        desc_ability2: "Provides items in certain rounds that, when used on a 5 gold hero, grant two 1-star copies of that hero."
    },
    {
        id: 23,
        name: "Popol & Kupa",
        image: "./aset/commander/popol.png",
        type: "resource",
        ability1: "Copy Trap",
        desc_ability1: "During the Preparation Stage, a Copy Trap will be generated on the battlefield. Enemy Heroes entering the trap will be copied to your Hero Slots.",
        ability2: "Hunter's Mark",
        desc_ability2: "1 extra Hero(es) can be copied per round."
    },
    {
        id: 24,
        name: "Vale",
        image: "./aset/commander/vale.png",
        type: "strategy",
        ability1: "Updraft",
        desc_ability1: "Select a Hero, then refresh the Shop to display Heroes that share at least one Synergy with the selected Hero, and also get 1 free Hero purchase from this refreshed Shop. Gain 1 skill charge(s) at the start of Rounds I-1 and III-1.",
        ability2: "Shifting Wind",
        desc_ability2: "Gain 1 additional use(s) at the start of Round III-1."
    },
    {
        id: 25,
        name: "Valir",
        image: "./aset/commander/valir.png",
        type: "strategy",
        ability1: "Go Go Selection",
        desc_ability1: "Allows the player to choose from Go Go Cards twice at the item rounds, offering more flexibility in strategy.",
        ability2: "Generous EXP",
        desc_ability2: "Provides additional Commander EXP (experience points) based on certain in-game actions or rounds. The additional EXP allows you to level up faster than opponents, increasing the number of heroes you can deploy on the board."
    },
    {
        id: 26,
        name: "Wanwan",
        image: "./aset/commander/wanwan.png",
        type: "combat",
        ability1: "Reinforcement",
        desc_ability1: "When more than half of the allied Heroes are killed, Wanwan attacks the nearest enemy Hero 12 times, dealing 250/400/500/650 Physical DMG depending on the current stage.",
        ability2: "Tiger's Pounce",
        desc_ability2: "Increase Wanwan's hits to 20 times."
    },
    {
        id: 27,
        name: "Yuzhong",
        image: "./aset/commander/yuzhong.png",
        type: "combat",
        ability1: "Soul Grip",
        desc_ability1: "ncreases the quality (rarity) of the Go Go Card options available in specific rounds (e.g., creep rounds II-3, III-3, etc.). This means players are more likely to get powerful purple or gold cards.",
        ability2: "Cursing Touch",
        desc_ability2: "When obtaining 'Black Dragon Treasures' from Go Go Cards, this skill prioritizes giving synergy crystals, items, or gold based on the synergy with the highest number of heroes you have on the chessboard."
    }
];


// =========================
//  DATA ITEMS
// =========================
const items = [
    { id: 1, name: "Berseker Fury", image: "./aset/item/Berserker_Fury.jpg", type: "physical", desc: "Increases Critical Damage..." },
    { id: 2, name: "Blade of Despair", image: "./aset/item/Blade_of_Despair.jpg", type: "physical", desc: "Instantly finishes off enemies..." },
    { id: 3, name: "Demon Hunter Sword", image: "./aset/item/Demon_Hunter_Sword.jpg", type: "physical", desc: "Highly effective for defeating Tanks..." },
    { id: 4, name: "Golden Staff", image: "./aset/item/Golden_Staff.jpg", type: "physical", desc: "Continuously increases Attack Speed..." },
    { id: 5, name: "Haas Claws", image: "./aset/item/Haas_Claws.jpg", type: "physical", desc: "Grants additional Lifesteal..." },
    { id: 6, name: "Sea Halberd", image: "./aset/item/Sea_Halberd.jpg", type: "physical", desc: "Counters Lifesteal..." },
    { id: 7, name: "War Axe", image: "./aset/item/War_Axe.jpg", type: "physical", desc: "Provides Spell Vamp..." },
    { id: 8, name: "Enchanted Talisman", image: "./aset/item/Enchanted_Talisman.jpg", type: "magic", desc: "Restores Mana..." },
    { id: 9, name: "Feather of Heaven", image: "./aset/item/Feather_of_Heaven.jpg", type: "magic", desc: "Grants additional Lifesteal..." },
    { id: 10, name: "Glowing Wand", image: "./aset/item/Glowing_Wand.jpg", type: "magic", desc: "Deals continuous magic damage..." },
    { id: 11, name: "Holy Crystal", image: "./aset/item/Holy_Crystal.jpg", type: "magic", desc: "Increases magic damage by 25%" },
    { id: 12, name: "Ice Queen Wand", image: "./aset/item/Ice_Queen_Wand.jpg", type: "magic", desc: "Provides Spell Vamp..." },
    { id: 13, name: "Winter Crown", image: "./aset/item/Winter_Crown.jpg", type: "magic", desc: "Grants immunity when HP is low..." },
    { id: 14, name: "Antique Cuirass", image: "./aset/item/Antique_Cuirass.jpg", type: "defend", desc: "When Damaged, Reduce enemies’ Hybrid Attack." },
    { id: 15, name: "Blade Armor", image: "./aset/item/Blade_Armor.jpg", type: "defend", desc: "When taking damage, reflect a portion of damage back to the enemy." },
    { id: 16, name: "Brute Force Breastplate", image: "./aset/item/Brute_Force_Breastplate.jpg", type: "defend", desc: "Increase Hybrid Damage dealt and increase Control Duration resistance." },
    { id: 17, name: "Dominance Ice", image: "./aset/item/Dominance_Ice.jpg", type: "defend", desc: "Decrease enemies’ Attack Speed and Increase Mana Regen when attacked." },
    { id: 18, name: "Guardian Helmet", image: "./aset/item/Guardian_Helmet.jpg", type: "defend", desc: "Regens HP every second." },
    { id: 19, name: "Immortality", image: "./aset/item/Immortality.jpg", type: "defend", desc: "Revives at 40% HP after falling in battle." },
    { id: 20, name: "Oracle", image: "./aset/item/Oracle.jpg", type: "defend", desc: "At Battle Start, Allies at the same row gain Hybrid DEF"},
    { id: 21, name: "Aegis", image: "./aset/item/Aegis.jpg", type: "special", desc: "Grants Shield to hero and surrounding allies at battle start."},
    { id: 22, name: "Inspire", image: "./aset/item/Inspire.jpg", type: "special", desc: "Increase Attack Speed."},
    { id: 23, name: "Purify", image: "./aset/item/Purify.jpg", type: "special", desc: "Grants Control immunity."},
    { id: 24, name: "Retribution", image: "./aset/item/Retribution.jpg", type: "special", desc: "Gain effects based on the amount of enemies killed."},
    { id: 25, name: "Revitalize", image: "./aset/item/Revitalize.jpg", type: "special", desc: "Summon a healing zone when HP reached 50%"}
    
 
];

const tierlistData = [
    {
        tier: "S",
        items: [
            { id: 5,  name: "Guinevere", image: "./aset/commander/guinevere.png" },
            { id: 23, name: "Popol & Kupa", image: "./aset/commander/popol.png" },
            { id: 27, name: "Yuzhong", image: "./aset/commander/yuzhong.png" },
            { id: 25, name: "Valir", image: "./aset/commander/valir.png" },
            { id: 11, name: "Chou", image: "./aset/commander/chou.png" },
            { id: 14, name: "Gusion", image: "./aset/commander/gusion.png" },
            { id: 7,  name: "Lunox", image: "./aset/commander/lunox.png" }
        ]
    },
    {
        tier: "A",
        items: [
            { id: 2,  name: "Aamon", image: "./aset/commander/aamon.png" },
            { id: 4,  name: "Fanny", image: "./aset/commander/fanny.png" },
            { id: 18, name: "Layla", image: "./aset/commander/layla.png" },
            { id: 17, name: "Karina", image: "./aset/commander/karina.png" },
            { id: 13, name: "Dyrroth", image: "./aset/commander/dyrroth.png" },
            { id: 22, name: "Paquito", image: "./aset/commander/paquito.png" },
            { id: 9,  name: "Nana", image: "./aset/commander/nana.png" }
        ]
    },
    {
        tier: "B",
        items: [
            { id: 6,  name: "Lancelot", image: "./aset/commander/lancelot.png" },
            { id: 20, name: "Miya", image: "./aset/commander/miya.png" },
            { id: 10, name: "Zilong", image: "./aset/commander/zilong.png" },
            { id: 8,  name: "Lylia", image: "./aset/commander/lylia.png" },
            { id: 24, name: "Vale", image: "./aset/commander/vale.png" },
            { id: 12, name: "Cyclops", image: "./aset/commander/cyclops.png" },
            { id: 15, name: "Johnson", image: "./aset/commander/johnson.png" },
            { id: 1,  name: "Ling", image: "./aset/commander/ling.png" }
        ]
    },
    {
        tier: "C",
        items: [
            { id: 16, name: "Kagura", image: "./aset/commander/kagura.png" },
            { id: 26, name: "Wanwan", image: "./aset/commander/wanwan.png" },
            { id: 19, name: "Lukas", image: "./aset/commander/lukas.png" },
            { id: 21, name: "Moskov", image: "./aset/commander/moskov.png" },
            { id: 3,  name: "Angela", image: "./aset/commander/angela.png" }
        ]
    },
];

