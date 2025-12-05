import { HEX_DATA } from './data.js';

// Trigram Stats Definition
const TRIGRAM_STATS = {
    0: { name: { zh: "地", en: "Earth" }, atk: 0, def: 8, heal: 0, icon: "☷" },
    1: { name: { zh: "雷", en: "Thunder" }, atk: 6, def: 0, heal: 0, icon: "☳" },
    2: { name: { zh: "水", en: "Water" }, atk: 3, def: 0, heal: 3, icon: "☵" },
    3: { name: { zh: "澤", en: "Lake" }, atk: 4, def: 0, heal: 2, icon: "☱" },
    4: { name: { zh: "山", en: "Mountain" }, atk: 0, def: 6, heal: 0, icon: "☶" },
    5: { name: { zh: "火", en: "Fire" }, atk: 10, def: 0, heal: 0, icon: "☲" },
    6: { name: { zh: "風", en: "Wind" }, atk: 4, def: 0, heal: 0, icon: "☴" },
    7: { name: { zh: "天", en: "Heaven" }, atk: 8, def: 0, heal: 0, icon: "☰" }
};

// Enemy Roster Definition
const ENEMY_ROSTER = [
    {
        name: { zh: "心魔", en: "Inner Demon" },
        maxHp: 60,
        icon: "👹",
        aiPattern: 'balanced' // 60% attack, 30% defend, 10% heavy
    },
    {
        name: { zh: "幻影", en: "Phantom" },
        maxHp: 80,
        icon: "👻",
        aiPattern: 'aggressive' // 80% attack, 10% defend, 10% heavy
    },
    {
        name: { zh: "守護者", en: "Guardian" },
        maxHp: 100,
        icon: "🗿",
        aiPattern: 'defensive' // 40% attack, 50% defend, 10% heavy
    },
    {
        name: { zh: "暗影龍", en: "Shadow Dragon" },
        maxHp: 120,
        icon: "🐉",
        aiPattern: 'boss' // 50% attack, 20% defend, 30% heavy
    }
];

// 生成變爻卡池（56 張）
function generateChangingCardsPool() {
    const pool = [];
    let id = 1000;

    // 動爻組合（相對位置 0, 1, 2）
    const combinations = [
        // 1 個動爻
        { lines: [0], name: { zh: '初', en: '①' } },
        { lines: [1], name: { zh: '二', en: '②' } },
        { lines: [2], name: { zh: '三', en: '③' } },
        // 2 個動爻
        { lines: [0, 1], name: { zh: '初二', en: '①②' } },
        { lines: [0, 2], name: { zh: '初三', en: '①③' } },
        { lines: [1, 2], name: { zh: '二三', en: '②③' } },
        // 3 個動爻
        { lines: [0, 1, 2], name: { zh: '初二三', en: '①②③' } }
    ];

    for (let type = 0; type < 8; type++) {
        const baseStats = TRIGRAM_STATS[type];

        for (const combo of combinations) {
            pool.push({
                id: id++,
                type,
                cost: 1,
                name: {
                    zh: `${baseStats.name.zh} ${combo.name.zh}爻動`,
                    en: `${baseStats.name.en} ${combo.name.en}`
                },
                icon: baseStats.icon,
                stats: baseStats,
                changingLines: combo.lines,
                isChanging: true
            });
        }
    }

    return pool;
}

const CHANGING_CARDS_POOL = generateChangingCardsPool();

export default function gameEngine() {
    return {
        lines: [],
        lang: 'zh',

        // Combat State
        gameState: 'menu', // 'menu', 'player_turn', 'enemy_turn', 'selection', 'reward', 'gameover', 'victory'
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

        // Enemy Progression
        currentEnemyIndex: 0,
        maxEnemies: ENEMY_ROSTER.length,

        // Deck Builder State
        deck: [],
        hand: [],
        discard: [],

        // Selection State
        selectionOptions: [],
        pendingHexagram: null,

        // 變爻系統狀態
        rewardCards: [],
        transformationData: { changingPositions: [] },  // 初始化為空對象而非 null
        selectionPhase: null,  // 'original' | 'transformed'
        bonusMultiplier: 1.0,
        playedCardsThisTurn: [],

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
            this.currentEnemyIndex = 0;
            this.lines = [];
            this.combatLog = [];

            this.initDeck();
            this.shuffle(this.deck);
            this.hand = [];
            this.discard = [];
            this.drawCards(5);

            this.loadEnemy(0);
            this.startTurn();
        },

        loadEnemy(index) {
            const enemyData = ENEMY_ROSTER[index];
            this.enemy.name = enemyData.name;
            this.enemy.maxHp = enemyData.maxHp;
            this.enemy.hp = enemyData.maxHp;
            this.enemy.icon = enemyData.icon;
            this.enemy.aiPattern = enemyData.aiPattern;
            this.currentEnemyIndex = index;
        },

        initDeck() {
            this.deck = [];
            let idCounter = 0;
            // 8 Trigrams, 2 copies each = 16 cards
            for (let type = 0; type < 8; type++) {
                const stats = TRIGRAM_STATS[type];
                for (let i = 0; i < 2; i++) {
                    this.deck.push({
                        id: idCounter++,
                        type: type,
                        cost: 1,
                        name: stats.name,
                        icon: stats.icon,
                        stats: stats
                    });
                }
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

            // Check Stack Limit (Max 6 lines)
            if (this.lines.length > 3) {
                this.log(this.lang === 'zh' ? "卦象將滿!" : "Hexagram full!");
                return;
            }

            // Pay Cost
            this.player.energy -= card.cost;

            // Effect: Add 3 Lines (Trigram)
            const type = card.type;
            const l1 = type & 1;
            const l2 = (type >> 1) & 1;
            const l3 = (type >> 2) & 1;

            this.lines.push(l1, l2, l3);

            // Move to Discard
            this.hand.splice(cardIndex, 1);
            this.discard.push(card);

            // 追蹤打出的卡牌（包含變爻資訊）
            this.playedCardsThisTurn.push(card);
        },

        undoLastCard() {
            if (this.gameState !== 'player_turn') return;
            if (this.lines.length < 3) return; // Need at least 3 lines to undo
            if (this.discard.length === 0) return; // Need a card in discard

            // Remove last 3 lines
            this.lines.splice(-3, 3);

            // Move last card from discard back to hand
            const card = this.discard.pop();
            this.hand.push(card);

            // Refund energy
            this.player.energy = Math.min(this.player.energy + card.cost, this.player.maxEnergy);

            // 移除追蹤的卡牌
            this.playedCardsThisTurn.pop();

            this.log(this.lang === 'zh' ? "撤回卡牌" : "Card undone");
        },

        // 計算變卦
        calculateTransformation(lines, playedCards) {
            // 收集所有動爻的絕對位置（0-5）
            const changingPositions = [];

            playedCards.forEach((card, cardIndex) => {
                if (card.isChanging) {
                    // 將相對位置轉換為絕對位置
                    const offset = cardIndex * 3;
                    card.changingLines.forEach(relativePos => {
                        const absolutePos = offset + relativePos;
                        changingPositions.push(absolutePos);
                    });
                }
            });

            if (changingPositions.length === 0) {
                return { hasTransformation: false };
            }

            // 計算本卦
            const originalHex = lines.reduce((acc, val, idx) => acc + (val << idx), 0);

            // 計算變卦（反轉動爻）
            const transformedLines = [...lines];
            changingPositions.forEach(pos => {
                transformedLines[pos] = 1 - transformedLines[pos];
            });
            const transformedHex = transformedLines.reduce((acc, val, idx) => acc + (val << idx), 0);

            // 計算權重
            const count = changingPositions.length;
            let originalWeight, transformedWeight;

            if (count <= 2) {
                originalWeight = 1.0;
                transformedWeight = 0.0;
            } else if (count === 3) {
                originalWeight = 0.5;
                transformedWeight = 0.5;
            } else if (count <= 5) {
                originalWeight = 0.2;
                transformedWeight = 0.8;
            } else {
                originalWeight = 0.0;
                transformedWeight = 1.0;
            }

            return {
                hasTransformation: true,
                originalHex,
                transformedHex,
                transformedLines,
                changingPositions,
                originalWeight,
                transformedWeight
            };
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
            const pattern = this.enemy.aiPattern || 'balanced';

            let attackChance, defendChance, heavyChance;

            switch (pattern) {
                case 'aggressive':
                    attackChance = 0.8;
                    defendChance = 0.9;
                    break;
                case 'defensive':
                    attackChance = 0.4;
                    defendChance = 0.9;
                    break;
                case 'boss':
                    attackChance = 0.5;
                    defendChance = 0.7;
                    break;
                default: // balanced
                    attackChance = 0.6;
                    defendChance = 0.9;
            }

            if (rand < attackChance) {
                this.enemy.intent = 'attack';
                this.enemy.intentVal = Math.floor(Math.random() * 6) + 8; // 8-13 dmg
            } else if (rand < defendChance) {
                this.enemy.intent = 'defend';
                this.enemy.intentVal = 0;
            } else {
                this.enemy.intent = 'attack_heavy';
                this.enemy.intentVal = 15;
            }
        },

        castHexagram() {
            if (this.lines.length !== 6) return;

            // 只使用最後 2 張卡來計算變卦（當前的卦象）
            const currentHexagramCards = this.playedCardsThisTurn.slice(-2);

            // 計算變卦資訊
            const transformation = this.calculateTransformation(
                this.lines,
                currentHexagramCards
            );

            // 計算本卦屬性
            const lowerVal = this.lines[0] + (this.lines[1] << 1) + (this.lines[2] << 2);
            const upperVal = this.lines[3] + (this.lines[4] << 1) + (this.lines[5] << 2);
            const lower = TRIGRAM_STATS[lowerVal];
            const upper = TRIGRAM_STATS[upperVal];
            const originalAtk = lower.atk + upper.atk;
            const originalDef = lower.def + upper.def;
            const originalHeal = lower.heal + upper.heal;

            let finalAtk, finalDef, finalHeal;

            if (transformation.hasTransformation) {
                // 計算變卦屬性
                const tLines = transformation.transformedLines;
                const tLowerVal = tLines[0] + (tLines[1] << 1) + (tLines[2] << 2);
                const tUpperVal = tLines[3] + (tLines[4] << 1) + (tLines[5] << 2);
                const tLower = TRIGRAM_STATS[tLowerVal];
                const tUpper = TRIGRAM_STATS[tUpperVal];
                const transformedAtk = tLower.atk + tUpper.atk;
                const transformedDef = tLower.def + tUpper.def;
                const transformedHeal = tLower.heal + tUpper.heal;

                // 加權計算
                finalAtk = Math.floor(
                    originalAtk * transformation.originalWeight +
                    transformedAtk * transformation.transformedWeight
                );
                finalDef = Math.floor(
                    originalDef * transformation.originalWeight +
                    transformedDef * transformation.transformedWeight
                );
                finalHeal = Math.floor(
                    originalHeal * transformation.originalWeight +
                    transformedHeal * transformation.transformedWeight
                );

                // 儲存資訊 - 保存本卦和變卦
                this.pendingHexagram = {
                    hexVal: transformation.originalHex,  // 本卦
                    transformedHexVal: transformation.transformedHex,  // 變卦
                    atk: finalAtk,
                    def: finalDef,
                    heal: finalHeal,
                    changingCount: transformation.changingPositions.length
                };

                this.transformationData = transformation;
                this.selectionPhase = 'original';  // 先測驗本卦
                this.bonusMultiplier = 1.0;
            } else {
                // 無變卦
                this.pendingHexagram = {
                    hexVal: this.currentHexValue,
                    atk: originalAtk,
                    def: originalDef,
                    heal: originalHeal,
                    changingCount: 0
                };
            }

            this.startSelection();
        },

        startSelection() {
            let hexVal;

            // 根據測驗階段選擇正確的卦象
            if (this.selectionPhase === 'transformed') {
                hexVal = this.pendingHexagram.transformedHexVal;
            } else {
                hexVal = this.pendingHexagram.hexVal;
            }

            const correctHex = HEX_DATA[hexVal];

            // Generate 3 random incorrect options
            const allHexIds = Object.keys(HEX_DATA).map(Number);
            const incorrectIds = allHexIds.filter(id => id !== hexVal);

            // Shuffle and pick 3
            this.shuffle(incorrectIds);
            const randomIncorrect = incorrectIds.slice(0, 3);

            // Build options array
            const options = [
                { id: hexVal, name: correctHex.name, description: correctHex.description, isCorrect: true },
                ...randomIncorrect.map(id => ({
                    id,
                    name: HEX_DATA[id].name,
                    description: HEX_DATA[id].description,
                    isCorrect: false
                }))
            ];

            // Shuffle options
            this.shuffle(options);
            this.selectionOptions = options;

            // Change state
            this.gameState = 'selection';
        },

        confirmSelection(optionIndex) {
            const selected = this.selectionOptions[optionIndex];

            // 無變爻的情況（hasTransformation 為 false 或不存在）
            if (!this.transformationData.hasTransformation) {
                // 單次測驗
                const bonus = selected.isCorrect ? 1.5 : 1.0;
                this.executeHexagram(
                    this.pendingHexagram.atk,
                    this.pendingHexagram.def,
                    this.pendingHexagram.heal,
                    bonus,
                    selected.name
                );
                return;
            }

            // 有變爻的雙重測驗
            if (this.selectionPhase === 'original') {
                // 本卦測驗
                if (selected.isCorrect) {
                    this.bonusMultiplier = 1.5;
                }

                // 進入變卦測驗
                this.selectionPhase = 'transformed';
                this.startSelection();
            } else if (this.selectionPhase === 'transformed') {
                // 變卦測驗
                if (selected.isCorrect) {
                    this.bonusMultiplier *= 1.5;
                }

                // 施放法術
                this.executeHexagram(
                    this.pendingHexagram.atk,
                    this.pendingHexagram.def,
                    this.pendingHexagram.heal,
                    this.bonusMultiplier,
                    selected.name
                );
            }
        },

        executeHexagram(atk, def, heal, bonus, hexName) {
            // 應用加成
            const finalAtk = Math.floor(atk * bonus);
            const finalDef = Math.floor(def * bonus);
            const finalHeal = Math.floor(heal * bonus);

            // 日誌
            this.log(`${this.lang === 'zh' ? '施放' : 'Cast'}: ${hexName[this.lang]}!`);

            if (this.pendingHexagram.changingCount > 0) {
                this.log(`${this.pendingHexagram.changingCount} ${this.lang === 'zh' ? '爻動' : 'changing line(s)'}`);
            }

            if (bonus >= 2.25) {
                this.log(this.lang === 'zh' ? ">> 雙重正確！超級加成！<<" : ">> DOUBLE CORRECT! SUPER BONUS! <<");
            } else if (bonus >= 1.5) {
                this.log(this.lang === 'zh' ? ">> 正確！加成！<<" : ">> CORRECT! BONUS! <<");
            }

            // Apply Effects
            if (finalAtk > 0) {
                this.enemy.hp -= finalAtk;
                this.log(`${this.lang === 'zh' ? '造成' : 'Dealt'} ${finalAtk} ${this.lang === 'zh' ? '傷害' : 'DMG'}!`);
            }
            if (finalDef > 0) {
                this.player.block += finalDef;
                this.log(`${this.lang === 'zh' ? '獲得' : 'Gained'} ${finalDef} ${this.lang === 'zh' ? '護盾' : 'Block'}!`);
            }
            if (finalHeal > 0) {
                this.player.hp = Math.min(this.player.hp + finalHeal, this.player.maxHp);
                this.log(`${this.lang === 'zh' ? '恢復' : 'Healed'} ${finalHeal} HP!`);
            }

            // Check Win
            if (this.enemy.hp <= 0) {
                this.enemy.hp = 0;
                this.generateRewardCards();
                return;
            }

            // Consume Stack
            this.lines = [];
            this.playedCardsThisTurn = [];
            this.transformationData = { changingPositions: [] };  // 重置為空對象
            this.selectionPhase = null;
            this.bonusMultiplier = 1.0;
            this.pendingHexagram = null;
            this.selectionOptions = [];
            this.gameState = 'player_turn';
        },

        // 獎勵系統
        generateRewardCards() {
            const shuffled = [...CHANGING_CARDS_POOL].sort(() => Math.random() - 0.5);
            this.rewardCards = shuffled.slice(0, 3);
            this.gameState = 'reward';
        },

        addCardToDeck(cardIndex) {
            const card = this.rewardCards[cardIndex];
            this.deck.push({ ...card, id: Date.now() + Math.random() });
            this.rewardCards = [];
            this.continueToNextEnemy();
        },

        skipReward() {
            this.rewardCards = [];
            this.continueToNextEnemy();
        },

        continueToNextEnemy() {
            // Check if there are more enemies
            if (this.currentEnemyIndex + 1 < this.maxEnemies) {
                // Load next enemy
                this.loadEnemy(this.currentEnemyIndex + 1);

                // Reset combat state
                this.lines = [];
                this.hand = [];
                this.discard = [];
                this.player.block = 0;
                this.player.energy = this.player.maxEnergy;

                // Draw new hand
                this.drawCards(5);

                // Log transition
                this.log(this.lang === 'zh'
                    ? `--- 敵人 ${this.currentEnemyIndex + 1}/${this.maxEnemies} ---`
                    : `--- Enemy ${this.currentEnemyIndex + 1}/${this.maxEnemies} ---`);

                // Start new turn
                this.startTurn();
            } else {
                // All enemies defeated - victory!
                this.gameState = 'victory';
            }
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
                        "1. 從手牌打出八卦卡（消耗 1 氣）。",
                        "2. 每個八卦包含三爻，兩張卡組成一個六爻卦。",
                        "3. 六爻完成後，識別正確的卦象可獲得 1.5 倍加成！",
                        "4. 屬性：火=攻擊, 地=防禦(護盾), 水=治療。",
                        "5. 點擊「撤回」可移除最後打出的卡牌。",
                        "6. 點擊「結束回合」補充手牌和氣。"
                    ]
                    : [
                        "1. Play Trigram cards from hand (Cost 1 Energy).",
                        "2. Each Trigram has 3 lines. 2 Cards = 1 Hexagram.",
                        "3. After 6 lines, identify the correct Hexagram for 1.5x bonus!",
                        "4. Stats: Fire=Atk, Earth=Def(Block), Water=Heal.",
                        "5. Click 'Undo' to remove the last played card.",
                        "6. Click 'End Turn' to draw new cards and restore Energy."
                    ]
            };
        }
    };
}
