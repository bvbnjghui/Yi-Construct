import { HEX_DATA } from './data.js';

// Trigram Stats Definition
const TRIGRAM_STATS = {
    0: { name: { zh: "地", en: "Earth" }, atk: 0, def: 8, heal: 0, icon: "☷" },
    1: { name: { zh: "雷", en: "Thunder" }, atk: 6, def: 0, heal: 0, icon: "☳" },
    2: { name: { zh: "水", en: "Water" }, atk: 3, def: 0, heal: 3, icon: "☵" },
    3: { name: { zh: "澤", en: "Lake" }, atk: 4, def: 0, heal: 2, icon: "☱" },
    4: { name: { zh: "山", en: "Mountain" }, atk: 0, def: 6, heal: 0, icon: "☶" },
    5: { name: { zh: "火", en: "Fire" }, atk: 10, def: 0, heal: 0, icon: "☲" },
    6: { name: { zh: "風", en: "Wind" }, atk: 4, def: 0, heal: 0, icon: "☴" }, // Keeping simple for now
    7: { name: { zh: "天", en: "Heaven" }, atk: 8, def: 0, heal: 0, icon: "☰" }
};

export default function gameEngine() {
    return {
        lines: [],
        lang: 'zh',

        // Combat State
        gameState: 'menu', // 'menu', 'player_turn', 'enemy_turn', 'gameover', 'victory'
        showHelp: false,

        player: {
            hp: 50,
            maxHp: 50,
            block: 0,
            energy: 3 // Not used yet, but good for future
        },

        enemy: {
            name: { zh: "心魔", en: "Inner Demon" },
            hp: 60,
            maxHp: 60,
            intent: 'attack', // 'attack', 'defend', 'buff'
            intentVal: 0,
            icon: "👹"
        },

        combatLog: [],

        // Init
        init() {
            this.log("Welcome to Daoist Battler.");
        },

        // Actions
        startGame() {
            this.gameState = 'player_turn';
            this.player.hp = 50;
            this.player.maxHp = 50;
            this.player.block = 0;
            this.enemy.hp = 60;
            this.enemy.maxHp = 60;
            this.lines = [];
            this.combatLog = [];
            this.startTurn();
        },

        startTurn() {
            this.gameState = 'player_turn';
            this.player.block = 0; // Reset block
            this.generateEnemyIntent();
            this.log(this.lang === 'zh' ? "--- 玩家回合 ---" : "--- Player Turn ---");
        },

        generateEnemyIntent() {
            const rand = Math.random();
            if (rand < 0.6) {
                this.enemy.intent = 'attack';
                this.enemy.intentVal = Math.floor(Math.random() * 6) + 8; // 8-13 dmg
            } else if (rand < 0.9) {
                this.enemy.intent = 'defend'; // Self-heal or buff in future? For now just wait.
                this.enemy.intentVal = 0; // Placeholder
            } else {
                this.enemy.intent = 'attack_heavy';
                this.enemy.intentVal = 15;
            }
        },

        addLine(type) {
            if (this.gameState !== 'player_turn') return;
            if (this.lines.length >= 6) return;
            this.lines.push(type);
        },

        castHexagram() {
            if (this.lines.length !== 6) return;

            // 1. Calculate Stats
            const lowerVal = this.lines[0] + (this.lines[1] << 1) + (this.lines[2] << 2);
            const upperVal = this.lines[3] + (this.lines[4] << 1) + (this.lines[5] << 2);

            const lower = TRIGRAM_STATS[lowerVal];
            const upper = TRIGRAM_STATS[upperVal];

            let atk = lower.atk + upper.atk;
            let def = lower.def + upper.def;
            let heal = lower.heal + upper.heal;

            // Resonance Bonus
            let isResonance = false;
            if (lowerVal === upperVal) {
                atk = Math.floor(atk * 1.5);
                def = Math.floor(def * 1.5);
                heal = Math.floor(heal * 1.5);
                isResonance = true;
            }

            // 2. Apply Effects
            const hexVal = this.currentHexValue;
            const hexName = HEX_DATA[hexVal] ? HEX_DATA[hexVal].name[this.lang] : "Unknown";

            this.log(`${this.lang === 'zh' ? '施放' : 'Cast'}: ${hexName}!`);
            if (isResonance) this.log(this.lang === 'zh' ? ">> 共鳴加成! <<" : ">> RESONANCE! <<");

            if (atk > 0) {
                this.enemy.hp -= atk;
                this.log(`${this.lang === 'zh' ? '造成' : 'Dealt'} ${atk} ${this.lang === 'zh' ? '傷害' : 'DMG'}!`);
            }
            if (def > 0) {
                this.player.block += def;
                this.log(`${this.lang === 'zh' ? '獲得' : 'Gained'} ${def} ${this.lang === 'zh' ? '護盾' : 'Block'}!`);
            }
            if (heal > 0) {
                this.player.hp = Math.min(this.player.hp + heal, this.player.maxHp);
                this.log(`${this.lang === 'zh' ? '恢復' : 'Healed'} ${heal} HP!`);
            }

            // 3. Check Win
            if (this.enemy.hp <= 0) {
                this.enemy.hp = 0;
                this.gameState = 'victory';
                return;
            }

            // 4. End Turn
            this.lines = [];
            this.enemyTurn();
        },

        enemyTurn() {
            this.gameState = 'enemy_turn';
            setTimeout(() => {
                // Execute Intent
                if (this.enemy.intent.includes('attack')) {
                    let dmg = this.enemy.intentVal;
                    // Apply Block
                    if (this.player.block > 0) {
                        const blocked = Math.min(this.player.block, dmg);
                        this.player.block -= blocked;
                        dmg -= blocked;
                        this.log(`${this.lang === 'zh' ? '格擋了' : 'Blocked'} ${blocked} DMG.`);
                    }

                    if (dmg > 0) {
                        this.player.hp -= dmg;
                        this.log(`${this.lang === 'zh' ? '受到' : 'Took'} ${dmg} DMG!`);
                        // Shake effect trigger?
                    } else {
                        this.log(this.lang === 'zh' ? "完全防禦!" : "Fully Blocked!");
                    }
                } else {
                    this.log(this.lang === 'zh' ? "敵人正在觀察..." : "Enemy is observing...");
                }

                // Check Loss
                if (this.player.hp <= 0) {
                    this.player.hp = 0;
                    this.gameState = 'gameover';
                } else {
                    this.startTurn();
                }
            }, 1000); // 1s delay for dramatic effect
        },

        reset() {
            this.lines = [];
        },

        toggleLang() {
            this.lang = this.lang === 'zh' ? 'en' : 'zh';
        },

        toggleHelp() {
            this.showHelp = !this.showHelp;
        },

        backToMenu() {
            this.gameState = 'menu';
            this.lines = [];
        },

        log(msg) {
            this.combatLog.unshift(msg);
            if (this.combatLog.length > 5) this.combatLog.pop();
        },

        // Computed
        get currentHexValue() {
            return this.lines.reduce((acc, val, idx) => acc + (val << idx), 0);
        },

        get previewStats() {
            if (this.lines.length < 6) return null;

            const lowerVal = this.lines[0] + (this.lines[1] << 1) + (this.lines[2] << 2);
            const upperVal = this.lines[3] + (this.lines[4] << 1) + (this.lines[5] << 2);

            const lower = TRIGRAM_STATS[lowerVal];
            const upper = TRIGRAM_STATS[upperVal];

            let atk = lower.atk + upper.atk;
            let def = lower.def + upper.def;
            let heal = lower.heal + upper.heal;

            if (lowerVal === upperVal) {
                atk = Math.floor(atk * 1.5);
                def = Math.floor(def * 1.5);
                heal = Math.floor(heal * 1.5);
            }

            return { atk, def, heal, isResonance: lowerVal === upperVal };
        },

        get ui() {
            return {
                addYin: this.lang === 'zh' ? '陰' : 'Yin',
                addYang: this.lang === 'zh' ? '陽' : 'Yang',
                cast: this.lang === 'zh' ? '施法' : 'CAST',
                reset: this.lang === 'zh' ? '重置' : 'Reset',
                langBtn: this.lang === 'zh' ? 'English' : '中文',
                start: this.lang === 'zh' ? '開始戰鬥' : 'Start Combat',
                retry: this.lang === 'zh' ? '再試一次' : 'Retry',
                gameOver: this.lang === 'zh' ? '你被打敗了' : 'DEFEATED',
                victory: this.lang === 'zh' ? '勝利!' : 'VICTORY!',
                hp: 'HP',
                block: this.lang === 'zh' ? '護盾' : 'Block',
                howToPlay: this.lang === 'zh' ? '遊戲說明' : 'How to Play',
                backToMenu: this.lang === 'zh' ? '回到選單' : 'Menu',
                close: this.lang === 'zh' ? '關閉' : 'Close',
                helpTitle: this.lang === 'zh' ? '遊戲說明' : 'Instructions',
                helpContent: this.lang === 'zh'
                    ? [
                        "1. 構建六爻卦象來施放技能。",
                        "2. 每個卦由兩個八卦(上卦/下卦)組成。",
                        "3. 屬性: 火=攻擊, 地=防禦(護盾), 水=治療。",
                        "4. 共鳴: 如果上下卦相同 (例如乾為天)，效果 x1.5 倍！",
                        "5. 目標: 在被擊敗前打倒心魔。"
                    ]
                    : [
                        "1. Build Hexagrams to cast spells.",
                        "2. Each Hexagram has Lower & Upper Trigrams.",
                        "3. Stats: Fire=Atk, Earth=Def(Block), Water=Heal.",
                        "4. Resonance: If Lower == Upper, stats x1.5!",
                        "5. Goal: Defeat the Inner Demon."
                    ]
            };
        }
    };
}
