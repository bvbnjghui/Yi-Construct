/**
 * HEX_DATA
 * Key: Binary Integer (0-63) calculated from Bottom Line (LSB) to Top Line (MSB).
 * Formula: LowerTrigramValue + (UpperTrigramValue * 8)
 * * Trigram Values:
 * Earth(0), Thunder(1), Water(2), Lake(3), Mountain(4), Fire(5), Wind(6), Heaven(7)
 */
export const HEX_DATA = {
    // --- Upper: Earth (坤 ☷) ---
    0: {
        name: { zh: "坤 (ㄎㄨㄣ)", en: "The Receptive" },
        element: { zh: "地 / 地", en: "Earth / Earth" },
        description: { zh: "厚德載物，順勢而為。", en: "Supreme success through gentle persistence." }
    },
    1: {
        name: { zh: "復 (ㄈㄨˋ)", en: "Return" },
        element: { zh: "地 / 雷", en: "Earth / Thunder" },
        description: { zh: "一陽來復，萬物重生。", en: "The turning point. Light returns." }
    },
    2: {
        name: { zh: "師 (ㄕ)", en: "The Army" },
        element: { zh: "地 / 水", en: "Earth / Water" },
        description: { zh: "行險而順，容民畜眾。", en: "Leadership and discipline are required." }
    },
    3: {
        name: { zh: "臨 (ㄌㄧㄣˊ)", en: "Approach" },
        element: { zh: "地 / 澤", en: "Earth / Lake" },
        description: { zh: "君子親臨，教思無窮。", en: "Great progress and success. Approach with care." }
    },
    4: {
        name: { zh: "謙 (ㄑㄧㄢ)", en: "Modesty" },
        element: { zh: "地 / 山", en: "Earth / Mountain" },
        description: { zh: "謙尊而光，卑而不可踰。", en: "The most auspicious hexagram. Humility brings success." }
    },
    5: {
        name: { zh: "明夷 (ㄇㄧㄥˊ ㄧˊ)", en: "Darkening of the Light" },
        element: { zh: "地 / 火", en: "Earth / Fire" },
        description: { zh: "內文明而外柔順，韜光養晦。", en: "One must hide their brilliance to survive difficult times." }
    },
    6: {
        name: { zh: "升 (ㄕㄥ)", en: "Pushing Upward" },
        element: { zh: "地 / 風", en: "Earth / Wind" },
        description: { zh: "積小成大，順風而上。", en: "Steady growth and advancement." }
    },
    7: {
        name: { zh: "泰 (ㄊㄞˋ)", en: "Peace" },
        element: { zh: "地 / 天", en: "Earth / Heaven" },
        description: { zh: "天地交而萬物通，吉。", en: "Harmony and prosperity. The small departs, the great arrives." }
    },

    // --- Upper: Thunder (震 ☳) ---
    8: {
        name: { zh: "豫 (ㄩˋ)", en: "Enthusiasm" },
        element: { zh: "雷 / 地", en: "Thunder / Earth" },
        description: { zh: "雷出地奮，利建侯行師。", en: "Motivation and preparation lead to success." }
    },
    9: {
        name: { zh: "震 (ㄓㄣˋ)", en: "The Arousing" },
        element: { zh: "雷 / 雷", en: "Thunder / Thunder" },
        description: { zh: "震驚百里，不喪匙鬯。", en: "Shock brings fear, but fear brings caution and order." }
    },
    10: {
        name: { zh: "解 (ㄒㄧㄝˋ)", en: "Deliverance" },
        element: { zh: "雷 / 水", en: "Thunder / Water" },
        description: { zh: "雷雨作，草木皆甲坼。", en: "Tension is released. Problems are solved." }
    },
    11: {
        name: { zh: "歸妹 (ㄍㄨㄟ ㄇㄟˋ)", en: "The Marrying Maiden" },
        element: { zh: "雷 / 澤", en: "Thunder / Lake" },
        description: { zh: "征凶，無攸利。", en: "Relationships or ventures based on impulse may fail." }
    },
    12: {
        name: { zh: "小過 (ㄒㄧㄠˇ ㄍㄨㄛˋ)", en: "Small Preponderance" },
        element: { zh: "雷 / 山", en: "Thunder / Mountain" },
        description: { zh: "可小事，不可大事。", en: "Attention to detail is needed. Don't fly too high." }
    },
    13: {
        name: { zh: "豐 (ㄈㄥ)", en: "Abundance" },
        element: { zh: "雷 / 火", en: "Thunder / Fire" },
        description: { zh: "日中則昃，月盈則食。", en: "Great abundance. Be like the sun at midday." }
    },
    14: {
        name: { zh: "恆 (ㄏㄥˊ)", en: "Duration" },
        element: { zh: "雷 / 風", en: "Thunder / Wind" },
        description: { zh: "雷風恆，君子以立不易方。", en: "Perseverance and consistency bring success." }
    },
    15: {
        name: { zh: "大壯 (ㄉㄚˋ ㄓㄨㄤˋ)", en: "Great Power" },
        element: { zh: "雷 / 天", en: "Thunder / Heaven" },
        description: { zh: "剛以動，故壯。", en: "Power is great, but must be used righteously." }
    },

    // --- Upper: Water (坎 ☵) ---
    16: {
        name: { zh: "比 (ㄅㄧˋ)", en: "Holding Together" },
        element: { zh: "水 / 地", en: "Water / Earth" },
        description: { zh: "親比之意，眾星拱月。", en: "Union and bonding. Find the right leader." }
    },
    17: {
        name: { zh: "屯 (ㄓㄨㄣ)", en: "Difficulty at the Beginning" },
        element: { zh: "水 / 雷", en: "Water / Thunder" },
        description: { zh: "萬事起頭難，勿輕舉妄動。", en: "Initial hardship. Growth is slow but sure." }
    },
    18: {
        name: { zh: "坎 (ㄎㄢˇ)", en: "The Abysmal (Water)" },
        element: { zh: "水 / 水", en: "Water / Water" },
        description: { zh: "習坎，有孚維心。", en: "Danger upon danger. Maintain faith in the heart." }
    },
    19: {
        name: { zh: "節 (ㄐㄧㄝˊ)", en: "Limitation" },
        element: { zh: "水 / 澤", en: "Water / Lake" },
        description: { zh: "澤上有水，節。", en: "Joyful limitation. Know when to stop." }
    },
    20: {
        name: { zh: "蹇 (ㄐㄧㄢˇ)", en: "Obstruction" },
        element: { zh: "水 / 山", en: "Water / Mountain" },
        description: { zh: "山上有水，進退兩難。", en: "Stop and reflect. Do not force progress." }
    },
    21: {
        name: { zh: "既濟 (ㄐㄧˋ ㄐㄧˋ)", en: "After Completion" },
        element: { zh: "水 / 火", en: "Water / Fire" },
        description: { zh: "水在火上，陰陽平衡。", en: "Perfect balance. Success, but decline may follow." }
    },
    22: {
        name: { zh: "井 (ㄐㄧㄥˇ)", en: "The Well" },
        element: { zh: "水 / 風", en: "Water / Wind" },
        description: { zh: "井養而不窮，改邑不改井。", en: "The source is constant. Nourish others." }
    },
    23: {
        name: { zh: "需 (ㄒㄩ)", en: "Waiting" },
        element: { zh: "水 / 天", en: "Water / Heaven" },
        description: { zh: "雲上於天，需。", en: "Wait for the right moment. Patience is power." }
    },

    // --- Upper: Lake (兌 ☱) ---
    24: {
        name: { zh: "萃 (ㄘㄨㄟˋ)", en: "Gathering Together" },
        element: { zh: "澤 / 地", en: "Lake / Earth" },
        description: { zh: "澤上於地，萬物群萃。", en: "Gathering of people and resources." }
    },
    25: {
        name: { zh: "隨 (ㄙㄨㄟˊ)", en: "Following" },
        element: { zh: "澤 / 雷", en: "Lake / Thunder" },
        description: { zh: "剛來而下柔，隨。", en: "Adapt to the situation. Follow the flow." }
    },
    26: {
        name: { zh: "困 (ㄎㄨㄣˋ)", en: "Oppression" },
        element: { zh: "澤 / 水", en: "Lake / Water" },
        description: { zh: "澤無水，困。", en: "Adversity tests character. Words are not believed." }
    },
    27: {
        name: { zh: "兌 (ㄉㄨㄟˋ)", en: "The Joyous" },
        element: { zh: "澤 / 澤", en: "Lake / Lake" },
        description: { zh: "麗澤兌，君子以朋友講習。", en: "True joy comes from within and sharing." }
    },
    28: {
        name: { zh: "咸 (ㄒㄧㄢˊ)", en: "Influence" },
        element: { zh: "澤 / 山", en: "Lake / Mountain" },
        description: { zh: "柔上而剛下，二氣感應。", en: "Mutual attraction and influence." }
    },
    29: {
        name: { zh: "革 (ㄍㄜˊ)", en: "Revolution" },
        element: { zh: "澤 / 火", en: "Lake / Fire" },
        description: { zh: "水火相息，變革之時。", en: "Change is necessary. Shed the old skin." }
    },
    30: {
        name: { zh: "大過 (ㄉㄚˋ ㄍㄨㄛˋ)", en: "Preponderance of the Great" },
        element: { zh: "澤 / 風", en: "Lake / Wind" },
        description: { zh: "澤滅木，壓力極大。", en: "The beam sags. Extraordinary measures are needed." }
    },
    31: {
        name: { zh: "夬 (ㄍㄨㄞˋ)", en: "Break-through" },
        element: { zh: "澤 / 天", en: "Lake / Heaven" },
        description: { zh: "決也，剛決柔也。", en: "Decisive action. Remove the final obstacle." }
    },

    // --- Upper: Mountain (艮 ☶) ---
    32: {
        name: { zh: "剝 (ㄅㄛ)", en: "Splitting Apart" },
        element: { zh: "山 / 地", en: "Mountain / Earth" },
        description: { zh: "五陰剝一陽，不利有攸往。", en: "Decay. The inferior prevails. Keep quiet." }
    },
    33: {
        name: { zh: "頤 (ㄧˊ)", en: "Nourishment" },
        element: { zh: "山 / 雷", en: "Mountain / Thunder" },
        description: { zh: "山下有雷，養正。", en: "Watch what you say and what you eat." }
    },
    34: {
        name: { zh: "蒙 (ㄇㄥˊ)", en: "Youthful Folly" },
        element: { zh: "山 / 水", en: "Mountain / Water" },
        description: { zh: "山下出泉，啟蒙。", en: "Education and guidance are needed." }
    },
    35: {
        name: { zh: "損 (ㄙㄨㄣˇ)", en: "Decrease" },
        element: { zh: "山 / 澤", en: "Mountain / Lake" },
        description: { zh: "損下益上，懲忿窒欲。", en: "Sacrifice for the greater good." }
    },
    36: {
        name: { zh: "艮 (ㄍㄣˋ)", en: "Keeping Still" },
        element: { zh: "山 / 山", en: "Mountain / Mountain" },
        description: { zh: "時止則止，時行則行。", en: "Stillness. Stop and rest to clear the mind." }
    },
    37: {
        name: { zh: "賁 (ㄅㄧˋ)", en: "Grace" },
        element: { zh: "山 / 火", en: "Mountain / Fire" },
        description: { zh: "山下有火，文飾。", en: "Beauty and form are important, but not everything." }
    },
    38: {
        name: { zh: "蠱 (ㄍㄨˇ)", en: "Work on Decay" },
        element: { zh: "山 / 風", en: "Mountain / Wind" },
        description: { zh: "剛上而柔下，整治腐敗。", en: "Repairing what has been spoiled." }
    },
    39: {
        name: { zh: "大畜 (ㄉㄚˋ ㄒㄩˋ)", en: "Great Taming" },
        element: { zh: "山 / 天", en: "Mountain / Heaven" },
        description: { zh: "剛健篤實，輝光日新。", en: "Restraint accumulates great power." }
    },

    // --- Upper: Fire (離 ☲) ---
    40: {
        name: { zh: "晉 (ㄐㄧㄣˋ)", en: "Progress" },
        element: { zh: "火 / 地", en: "Fire / Earth" },
        description: { zh: "順而麗乎大明。", en: "The sun rises over the earth. Rapid advance." }
    },
    41: {
        name: { zh: "噬嗑 (ㄕˋ ㄏㄜˊ)", en: "Biting Through" },
        element: { zh: "火 / 雷", en: "Fire / Thunder" },
        description: { zh: "雷電合而章，執法嚴明。", en: "Remove obstacles decisively like biting through." }
    },
    42: {
        name: { zh: "未濟 (ㄨㄟˋ ㄐㄧˋ)", en: "Before Completion" },
        element: { zh: "火 / 水", en: "Fire / Water" },
        description: { zh: "火在水上，雖不當位，充滿可能。", en: "Chaos creates potential. The cycle begins anew." }
    },
    43: {
        name: { zh: "睽 (ㄎㄨㄟˊ)", en: "Opposition" },
        element: { zh: "火 / 澤", en: "Fire / Lake" },
        description: { zh: "二女同居，其志不同行。", en: "Misunderstanding. Small matters can be achieved." }
    },
    44: {
        name: { zh: "旅 (ㄌㄩˇ)", en: "The Wanderer" },
        element: { zh: "火 / 山", en: "Fire / Mountain" },
        description: { zh: "山上有火，羈旅。", en: "Moving through strange lands. Be cautious." }
    },
    45: {
        name: { zh: "離 (ㄌㄧˊ)", en: "The Clinging (Fire)" },
        element: { zh: "火 / 火", en: "Fire / Fire" },
        description: { zh: "日月麗乎天，百穀草木麗乎土。", en: "Clinging to what is right. Clarity and light." }
    },
    46: {
        name: { zh: "鼎 (ㄉㄧㄥˇ)", en: "The Cauldron" },
        element: { zh: "火 / 風", en: "Fire / Wind" },
        description: { zh: "木上有火，烹飪以養賢。", en: "Transformation and spiritual nourishment." }
    },
    47: {
        name: { zh: "大有 (ㄉㄚˋ ㄧㄡˇ)", en: "Possession in Great Measure" },
        element: { zh: "火 / 天", en: "Fire / Heaven" },
        description: { zh: "火在天上，順天休命。", en: "Great success and wealth. Shine like the sun." }
    },

    // --- Upper: Wind (巽 ☴) ---
    48: {
        name: { zh: "觀 (ㄍㄨㄢ)", en: "Contemplation" },
        element: { zh: "風 / 地", en: "Wind / Earth" },
        description: { zh: "風行地上，觀民設教。", en: "Observe closely and lead by example." }
    },
    49: {
        name: { zh: "益 (ㄧˋ)", en: "Increase" },
        element: { zh: "風 / 雷", en: "Wind / Thunder" },
        description: { zh: "風雷益，君子以見善則遷。", en: "Gain through serving others." }
    },
    50: {
        name: { zh: "渙 (ㄏㄨㄢˋ)", en: "Dispersion" },
        element: { zh: "風 / 水", en: "Wind / Water" },
        description: { zh: "風行水上，化險為夷。", en: "Rigidity dissolves. Spread goodwill." }
    },
    51: {
        name: { zh: "中孚 (ㄓㄨㄥ ㄈㄨˊ)", en: "Inner Truth" },
        element: { zh: "風 / 澤", en: "Wind / Lake" },
        description: { zh: "澤上有風，信也。", en: "Sincerity connects everything." }
    },
    52: {
        name: { zh: "漸 (ㄐㄧㄢˋ)", en: "Development" },
        element: { zh: "風 / 山", en: "Wind / Mountain" },
        description: { zh: "山上有木，循序漸進。", en: "Slow and steady progress." }
    },
    53: {
        name: { zh: "家人 (ㄐㄧㄚ ㄖㄣˊ)", en: "The Family" },
        element: { zh: "風 / 火", en: "Wind / Fire" },
        description: { zh: "風自火出，言有物行有恆。", en: "Harmony begins in the home." }
    },
    54: {
        name: { zh: "巽 (ㄒㄩㄣˋ)", en: "The Gentle (Wind)" },
        element: { zh: "風 / 風", en: "Wind / Wind" },
        description: { zh: "隨風而入，柔皆順乎剛。", en: "Gentle penetration. Flexibility brings success." }
    },
    55: {
        name: { zh: "小畜 (ㄒㄧㄠˇ ㄒㄩˋ)", en: "Taming of the Small" },
        element: { zh: "風 / 天", en: "Wind / Heaven" },
        description: { zh: "密雲不雨，自我西郊。", en: "Temporary restraint. Clouds but no rain yet." }
    },

    // --- Upper: Heaven (乾 ☰) ---
    56: {
        name: { zh: "否 (ㄆㄧˇ)", en: "Stagnation" },
        element: { zh: "天 / 地", en: "Heaven / Earth" },
        description: { zh: "天地不交，否。", en: "Blocked communication. Stand by your principles." }
    },
    57: {
        name: { zh: "無妄 (ㄨˊ ㄨㄤˋ)", en: "Innocence" },
        element: { zh: "天 / 雷", en: "Heaven / Thunder" },
        description: { zh: "天下雷行，物與無妄。", en: "Action without ulterior motive." }
    },
    58: {
        name: { zh: "訟 (ㄙㄨㄥˋ)", en: "Conflict" },
        element: { zh: "天 / 水", en: "Heaven / Water" },
        description: { zh: "天與水違行，慎始。", en: "Conflict. Seek compromise, not victory." }
    },
    59: {
        name: { zh: "履 (ㄌㄩˇ)", en: "Treading" },
        element: { zh: "天 / 澤", en: "Heaven / Lake" },
        description: { zh: "如履虎尾，不咥人。", en: "Walking on the tiger's tail. Caution is required." }
    },
    60: {
        name: { zh: "遯 (ㄉㄨㄣˋ)", en: "Retreat" },
        element: { zh: "天 / 山", en: "Heaven / Mountain" },
        description: { zh: "天下有山，遠人以不惡。", en: "Retreat to preserve energy. Not cowardice." }
    },
    61: {
        name: { zh: "同人 (ㄊㄨㄥˊ ㄖㄣˊ)", en: "Fellowship" },
        element: { zh: "天 / 火", en: "Heaven / Fire" },
        description: { zh: "天與火，同人於野。", en: "Working together with others in harmony." }
    },
    62: {
        name: { zh: "姤 (ㄍㄡˋ)", en: "Coming to Meet" },
        element: { zh: "天 / 風", en: "Heaven / Wind" },
        description: { zh: "天下有風，勿用取女。", en: "A chance encounter. Be careful of temptation." }
    },
    63: {
        name: { zh: "乾 (ㄑㄧㄢˊ)", en: "The Creative" },
        element: { zh: "天 / 天", en: "Heaven / Heaven" },
        description: { zh: "天行健，自強不息。", en: "Pure creative energy. Perseverance." }
    }
};