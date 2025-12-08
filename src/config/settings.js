
// =========================================
// 遊戲設定與平衡 (Game Configuration)
// =========================================

// 玩家初始設定
export const PLAYER_CONFIG = {
    INITIAL_HP: 50,
    MAX_ENERGY: 3,
    HAND_SIZE: 5,        // 每回合抽牌數
    MAX_HAND_SIZE: 10,   // 手牌上限（預留）
    INITIAL_DECK_SIZE: 16 // 起始牌庫大小 (每種八卦 x2)
};

// 八卦卡牌基礎數值 (Trigram Stats)
export const TRIGRAM_STATS = {
    0: { name: { zh: "地", en: "Earth" }, atk: 0, def: 8, heal: 0, icon: "☷" },
    1: { name: { zh: "雷", en: "Thunder" }, atk: 6, def: 0, heal: 0, icon: "☳" },
    2: { name: { zh: "水", en: "Water" }, atk: 3, def: 0, heal: 3, icon: "☵" },
    3: { name: { zh: "澤", en: "Lake" }, atk: 4, def: 0, heal: 2, icon: "☱" },
    4: { name: { zh: "山", en: "Mountain" }, atk: 0, def: 6, heal: 0, icon: "☶" },
    5: { name: { zh: "火", en: "Fire" }, atk: 10, def: 0, heal: 0, icon: "☲" },
    6: { name: { zh: "風", en: "Wind" }, atk: 4, def: 0, heal: 0, icon: "☴" },
    7: { name: { zh: "天", en: "Heaven" }, atk: 8, def: 0, heal: 0, icon: "☰" }
};

// 敵人資料 (Enemy Roster)
export const ENEMY_ROSTER = [
    {
        id: 'inner_demon',
        name: { zh: "心魔", en: "Inner Demon" },
        maxHp: 60,
        icon: "👹",
        aiPattern: 'balanced' // 60% atk, 30% def
    },
    {
        id: 'phantom',
        name: { zh: "幻影", en: "Phantom" },
        maxHp: 80,
        icon: "👻",
        aiPattern: 'aggressive' // 80% atk
    },
    {
        id: 'guardian',
        name: { zh: "守護者", en: "Guardian" },
        maxHp: 100,
        icon: "🗿",
        aiPattern: 'defensive' // high def
    },
    {
        id: 'dragon',
        name: { zh: "暗影龍", en: "Shadow Dragon" },
        maxHp: 120,
        icon: "🐉",
        aiPattern: 'boss' // mixed
    }
];

// 戰鬥獎勵設定 (預留)
export const REWARD_CONFIG = {
    CARD_CHOICES: 3,     // 勝利後三選一
    HEAL_ON_VICTORY: 0   // 勝利後回血量 (Roguelike 通常不回滿)
};
