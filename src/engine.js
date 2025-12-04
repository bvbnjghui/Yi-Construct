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
            energy: 3,
            maxEnergy: 3
        },

        enemy: {
            name: { zh: "心魔", en: "Inner Demon" },
            hp: 60,
            maxHp: 60,
            intent: 'attack', // 'attack', 'defend', 'buff'
            intentVal: 0,
            icon: "👹"
        },

        // Deck Builder State
        deck: [],
        hand: [],
        discard: [],

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
            this.player.energy = 3;
            this.enemy.hp = 60;
            this.enemy.maxHp = 60;
            this.lines = [];
            this.combatLog = [];

            this.initDeck();
            this.shuffle(this.deck);
            this.hand = [];
            this.discard = [];
            this.drawCards(5);

            this.startTurn();
        },

        initDeck() {
            this.deck = [];
            let idCounter = 0;
            // 6 Yang (1), 6 Yin (0)
            for (let i = 0; i < 6; i++) {
                this.deck.push({ id: idCounter++, type: 1, cost: 1, name: { zh: '陽', en: 'Yang' } });
                this.deck.push({ id: idCounter++, type: 0, cost: 1, name: { zh: '陰', en: 'Yin' } });
            }
        },

        shuffle(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        },

        drawCards(count) {
            for (let i = 0; i < count; i++) {
                if (this.deck.length === 0) {
                    if (this.discard.length === 0) break; // No more cards
                    // Reshuffle discard into deck
                    this.deck = [...this.discard];
                    this.discard = [];
                    this.shuffle(this.deck);
                    this.log(this.lang === 'zh' ? ">> 洗牌 <<" : ">> Shuffle <<");
                }
                if (this.deck.length > 0) {
                    this.hand.push(this.deck.pop());
                }
            }
        },

        playCard(cardIndex) {
            if (this.gameState !== 'player_turn') return;

            const card = this.hand[cardIndex];

            // Check Energy
            if (this.player.energy < card.cost) {
                this.log(this.lang === 'zh' ? "氣不足!" : "Not enough Energy!");
                return;
            }

            // Check Stack Limit
            if (this.lines.length >= 6) {
                this.log(this.lang === 'zh' ? "卦象已滿!" : "Hexagram full!");
                return;
            }

            // Pay Cost
            this.player.energy -= card.cost;

            // Effect: Add Line
            this.lines.push(card.type);

            // Move to Discard
            this.hand.splice(cardIndex, 1);
            this.discard.push(card);
        },

        endTurn() {
            if (this.gameState !== 'player_turn') return;

            // Discard Hand
            while (this.hand.length > 0) {
                this.discard.push(this.hand.pop());
            }

            this.enemyTurn();
        },

        startTurn() {
            this.gameState = 'player_turn';
            this.player.block = 0; // Reset block
            this.player.energy = this.player.maxEnergy; // Reset Energy
            this.generateEnemyIntent();
            this.drawCards(5); // Draw new hand
            this.log(this.lang === 'zh' ? "--- 玩家回合 ---" : "--- Player Turn ---");
        },

        generateEnemyIntent() {
            const rand = Math.random();
            if (rand < 0.6) {
                this.enemy.intent = 'attack';
                this.enemy.intentVal = Math.floor(Math.random() * 6) + 8; // 8-13 dmg
            } else if (rand < 0.9) {
                this.enemy.intent = 'defend';
                this.enemy.intentVal = 0;
            } else {
                this.enemy.intent = 'attack_heavy';
                this.enemy.intentVal = 15;
            }
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

            // 4. Consume Stack
            this.lines = [];
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
            }, 1000);
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
                endTurn: this.lang === 'zh' ? '結束回合' : 'End Turn',
                deck: this.lang === 'zh' ? '牌庫' : 'Deck',
                discard: this.lang === 'zh' ? '棄牌' : 'Discard',
                helpTitle: this.lang === 'zh' ? '遊戲說明' : 'Instructions',
                helpContent: this.lang === 'zh'
                    ? [
                        "1. 從手牌打出陰陽爻 (消耗 1 氣)。",
                        "2. 構建六爻卦象來施放技能。",
                        "3. 每個卦由兩個八卦(上卦/下卦)組成。",
                        "4. 屬性: 火=攻擊, 地=防禦(護盾), 水=治療。",
                        "5. 共鳴: 如果上下卦相同 (例如乾為天)，效果 x1.5 倍！",
                        "6. 點擊 '結束回合' 補充手牌和氣。"
                    ]
                    : [
                        "1. Play Yin/Yang cards from hand (Cost 1 Energy).",
                        "2. Build Hexagrams to cast spells.",
                        "3. Each Hexagram has Lower & Upper Trigrams.",
                        "4. Stats: Fire=Atk, Earth=Def(Block), Water=Heal.",
                        "5. Resonance: If Lower == Upper, stats x1.5!",
                        "6. Click 'End Turn' to draw new cards and restore Energy."
                    ]
            };
        }
    };
}
