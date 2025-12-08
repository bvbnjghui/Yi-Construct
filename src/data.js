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
        name: { zh: "坤", en: "The Receptive" },
        element: { zh: "地 / 地", en: "Earth / Earth" },
        oracle: { zh: "厚德載物，順勢而為。", en: "Supreme success through gentle persistence." },
        interpretation: { zh: "象徵大地般的包容與順從。建議以柔順的態度應對，順應自然規律而行，不要強求。如同大地承載萬物，以寬厚的德行待人處事，必能獲得成功。", en: "Symbolizes the receptive nature of earth. Approach with gentleness and follow natural laws without forcing. Like the earth carrying all things, treat others with generous virtue to achieve success." }
    },
    1: {
        name: { zh: "復", en: "Return" },
        element: { zh: "地 / 雷", en: "Earth / Thunder" },
        oracle: { zh: "一陽來復，萬物重生。", en: "The turning point. Light returns." },
        interpretation: { zh: "象徵陽氣回歸，萬物復甦的時刻。經歷低潮後，好運即將重新降臨。此時應把握機會重新出發，改正過去的錯誤，迎接新的開始。", en: "Symbolizes the return of yang energy and revival of all things. After experiencing a low point, good fortune is about to return. Seize the opportunity to start anew and correct past mistakes." }
    },
    2: {
        name: { zh: "師", en: "The Army" },
        element: { zh: "地 / 水", en: "Earth / Water" },
        oracle: { zh: "行險而順，容民畜眾。", en: "Leadership and discipline are required." },
        interpretation: { zh: "象徵軍隊的紀律與組織。面對困難需要有領導力和嚴明的紀律，團結眾人之力才能克服險阻。行事要有策略，不可魯莽行動。", en: "Symbolizes military discipline and organization. Facing difficulties requires leadership and strict discipline. Unite the strength of many to overcome obstacles. Act strategically, not rashly." }
    },
    3: {
        name: { zh: "臨", en: "Approach" },
        element: { zh: "地 / 澤", en: "Earth / Lake" },
        oracle: { zh: "君子親臨，教思無窮。", en: "Great progress and success. Approach with care." },
        interpretation: { zh: "象徵君主親臨民間，關懷百姓。此時運勢漸佳，適合主動接近他人，建立良好關係。但要保持謙遜謹慎的態度，不可驕傲自滿。", en: "Symbolizes a ruler approaching the people with care. Fortune is improving, suitable for proactively approaching others and building good relationships. Maintain a humble and cautious attitude." }
    },
    4: {
        name: { zh: "謙", en: "Modesty" },
        element: { zh: "地 / 山", en: "Earth / Mountain" },
        oracle: { zh: "謙尊而光，卑而不可踰。", en: "The most auspicious hexagram. Humility brings success." },
        interpretation: { zh: "象徵謙虛的美德。這是最吉利的卦象之一。保持謙遜低調的態度，不炫耀自己的才能，反而能獲得他人的尊重和支持，最終取得成功。", en: "Symbolizes the virtue of modesty. One of the most auspicious hexagrams. Maintain a humble and low-key attitude without flaunting your talents, and you will gain respect and support from others." }
    },
    5: {
        name: { zh: "明夷", en: "Darkening of the Light" },
        element: { zh: "地 / 火", en: "Earth / Fire" },
        oracle: { zh: "內文明而外柔順，韜光養晦。", en: "One must hide their brilliance to survive difficult times." },
        interpretation: { zh: "象徵光明被掩蓋的困境。處於艱難時期，應該韜光養晦，隱藏自己的才華和鋒芒，等待時機。內心保持清明，外表順從環境，以求自保。", en: "Symbolizes a time when light is obscured. During difficult times, hide your talents and wait for the right moment. Keep your mind clear while appearing compliant." }
    },
    6: {
        name: { zh: "升", en: "Pushing Upward" },
        element: { zh: "地 / 風", en: "Earth / Wind" },
        oracle: { zh: "積小成大，順風而上。", en: "Steady growth and advancement." },
        interpretation: { zh: "象徵如樹木般穩步向上成長。運勢逐漸上升，適合積極進取。但要循序漸進，不可急躁，一步一腳印地累積實力，終能達到目標。", en: "Symbolizes steady upward growth like a tree. Fortune is rising, suitable for active progress. Advance step by step without haste to reach your goal." }
    },
    7: {
        name: { zh: "泰", en: "Peace" },
        element: { zh: "地 / 天", en: "Earth / Heaven" },
        oracle: { zh: "天地交而萬物通，吉。", en: "Harmony and prosperity. The small departs, the great arrives." },
        interpretation: { zh: "象徵天地交泰，萬物通達的吉祥之象。此時運勢極佳，諸事順利，人際和諧。天地陰陽調和，小人離去，君子得志，是非常吉利的時期。", en: "Symbolizes heaven and earth in harmony, all things flourish. Excellent fortune, smooth affairs, harmonious relationships. Very auspicious period." }
    },

    // --- Upper: Thunder (震 ☳) ---
    8: {
        name: { zh: "豫", en: "Enthusiasm" },
        element: { zh: "雷 / 地", en: "Thunder / Earth" },
        oracle: { zh: "雷出地奮，利建侯行師。", en: "Motivation and preparation lead to success." },
        interpretation: { zh: "象徵喜悅和準備充分的狀態。保持積極樂觀的心態，提前做好準備，就能順利推進事業。適合建立團隊、發動群眾，眾人齊心協力必能成功。", en: "Symbolizes joy and preparedness. Maintain optimism, prepare well, and you can advance smoothly. Suitable for building teams and mobilizing people." }
    },
    9: {
        name: { zh: "震", en: "The Arousing" },
        element: { zh: "雷 / 雷", en: "Thunder / Thunder" },
        oracle: { zh: "震驚百里，不喪匙鬯。", en: "Shock brings fear, but fear brings caution and order." },
        interpretation: { zh: "象徵雷聲震動，帶來驚恐但也帶來警醒。突如其來的變故雖然令人害怕，但能讓人保持警覺和謹慎。經歷震撼後反而能建立更好的秩序。", en: "Symbolizes thunder's shock bringing both fear and awakening. Sudden changes are frightening but keep you alert. After the shock, better order emerges." }
    },
    10: {
        name: { zh: "解", en: "Deliverance" },
        element: { zh: "雷 / 水", en: "Thunder / Water" },
        oracle: { zh: "雷雨作，草木皆甲坼。", en: "Tension is released. Problems are solved." },
        interpretation: { zh: "象徵困境得到解除，如雷雨過後萬物甦醒。長期的壓力和問題終於得到解決，心情舒暢。此時應該寬恕他人，放下過去的恩怨，重新開始。", en: "Symbolizes relief from difficulties, like nature awakening after a storm. Long-standing pressures are resolved. Forgive others and start anew." }
    },
    11: {
        name: { zh: "歸妹", en: "The Marrying Maiden" },
        element: { zh: "雷 / 澤", en: "Thunder / Lake" },
        oracle: { zh: "征凶，無攸利。", en: "Relationships or ventures based on impulse may fail." },
        interpretation: { zh: "象徵衝動的結合，缺乏穩固的基礎。基於一時衝動或慾望而建立的關係或事業，往往難以長久。應該三思而後行，不要被表面的誘惑所迷惑。", en: "Symbolizes impulsive unions lacking solid foundation. Relationships or ventures based on impulse rarely last. Think carefully before acting." }
    },
    12: {
        name: { zh: "小過", en: "Small Preponderance" },
        element: { zh: "雷 / 山", en: "Thunder / Mountain" },
        oracle: { zh: "可小事，不可大事。", en: "Attention to detail is needed. Don't fly too high." },
        interpretation: { zh: "象徵小事可為，大事不宜。此時應該注重細節，處理日常小事，不要有太大的野心或計劃。如飛鳥不宜飛得太高，保持低調謙遜才是上策。", en: "Symbolizes suitability for small matters, not large ones. Focus on details and daily affairs. Avoid grand ambitions. Stay humble and low-key." }
    },
    13: {
        name: { zh: "豐", en: "Abundance" },
        element: { zh: "雷 / 火", en: "Thunder / Fire" },
        oracle: { zh: "日中則昃，月盈則食。", en: "Great abundance. Be like the sun at midday." },
        interpretation: { zh: "象徵豐盛繁榮的巔峰時期。如同正午的太陽，光芒萬丈。但要記住盛極必衰的道理，在最輝煌的時候更要保持謙虛謹慎，居安思危。", en: "Symbolizes peak prosperity and abundance. Like the midday sun at its brightest. Remember that what peaks must decline. Stay humble even in glory." }
    },
    14: {
        name: { zh: "恆", en: "Duration" },
        element: { zh: "雷 / 風", en: "Thunder / Wind" },
        oracle: { zh: "雷風恆，君子以立不易方。", en: "Perseverance and consistency bring success." },
        interpretation: { zh: "象徵恆久不變的堅持。成功需要持之以恆，不能三心二意。如同雷風相隨，保持一貫的原則和方向，長期堅持必能有所成就。", en: "Symbolizes enduring perseverance. Success requires consistency, not wavering. Like thunder and wind together, maintain steady principles and direction." }
    },
    15: {
        name: { zh: "大壯", en: "Great Power" },
        element: { zh: "雷 / 天", en: "Thunder / Heaven" },
        oracle: { zh: "剛以動，故壯。", en: "Power is great, but must be used righteously." },
        interpretation: { zh: "象徵強大的力量和旺盛的氣勢。此時實力雄厚，充滿活力，但要注意不可濫用力量。強大的力量必須用在正道上，才能真正發揮作用。", en: "Symbolizes great power and vigorous energy. Strength is abundant, but must not be abused. Use power righteously to be truly effective." }
    },

    // --- Upper: Water (坎 ☵) ---
    16: {
        name: { zh: "比", en: "Holding Together" },
        element: { zh: "水 / 地", en: "Water / Earth" },
        oracle: { zh: "親比之意，眾星拱月。", en: "Union and bonding. Find the right leader." },
        interpretation: { zh: "象徵親密團結，如眾星拱月。此時應該尋求志同道合的夥伴，建立緊密的合作關係。選對領導者或團隊非常重要，團結一致才能成功。", en: "Symbolizes close unity, like stars surrounding the moon. Seek like-minded partners and build close cooperation. Choose the right leader or team." }
    },
    17: {
        name: { zh: "屯", en: "Difficulty at the Beginning" },
        element: { zh: "水 / 雷", en: "Water / Thunder" },
        oracle: { zh: "萬事起頭難，勿輕舉妄動。", en: "Initial hardship. Growth is slow but sure." },
        interpretation: { zh: "象徵萬事起頭難的困境。新事物剛開始時總是艱難重重，如同種子破土而出。此時不要輕舉妄動，要耐心等待，慢慢積累力量，終能突破困境。", en: "Symbolizes difficulty at the beginning. New things always face hardships, like a seed breaking through soil. Be patient and accumulate strength." }
    },
    18: {
        name: { zh: "坎", en: "The Abysmal (Water)" },
        element: { zh: "水 / 水", en: "Water / Water" },
        oracle: { zh: "習坎，有孚維心。", en: "Danger upon danger. Maintain faith in the heart." },
        interpretation: { zh: "象徵重重險阻，危機四伏。面對一個又一個的困難，但不能放棄。要保持內心的誠信和堅定，如水一樣靈活應對，終能穿越險境。", en: "Symbolizes repeated dangers and crises. Face difficulties one after another without giving up. Maintain inner faith and adapt flexibly like water." }
    },
    19: {
        name: { zh: "節", en: "Limitation" },
        element: { zh: "水 / 澤", en: "Water / Lake" },
        oracle: { zh: "澤上有水，節。", en: "Joyful limitation. Know when to stop." },
        interpretation: { zh: "象徵適度節制的智慧。如同湖水有岸，凡事都要有節制和分寸。懂得適可而止，不過度追求，反而能保持長久的快樂和成功。", en: "Symbolizes the wisdom of moderation. Like a lake with shores, everything needs limits. Know when to stop and avoid excess for lasting happiness." }
    },
    20: {
        name: { zh: "蹇", en: "Obstruction" },
        element: { zh: "水 / 山", en: "Water / Mountain" },
        oracle: { zh: "山上有水，進退兩難。", en: "Stop and reflect. Do not force progress." },
        interpretation: { zh: "象徵前進困難，進退兩難的處境。如同山上有水，前路受阻。此時不宜強行前進，應該停下來反思，等待時機，或者尋求他人的幫助。", en: "Symbolizes difficulty in advancing, stuck between progress and retreat. Like water on a mountain, the path is blocked. Stop, reflect, and wait or seek help." }
    },
    21: {
        name: { zh: "既濟", en: "After Completion" },
        element: { zh: "水 / 火", en: "Water / Fire" },
        oracle: { zh: "水在火上，陰陽平衡。", en: "Perfect balance. Success, but decline may follow." },
        interpretation: { zh: "象徵事情已經完成，達到完美平衡的狀態。水火相濟，陰陽調和。但要警惕，完美之後可能就是衰退的開始，必須保持警覺，防患於未然。", en: "Symbolizes completion and perfect balance. Water and fire in harmony, yin and yang balanced. But beware, after perfection may come decline. Stay vigilant." }
    },
    22: {
        name: { zh: "井", en: "The Well" },
        element: { zh: "水 / 風", en: "Water / Wind" },
        oracle: { zh: "井養而不窮，改邑不改井。", en: "The source is constant. Nourish others." },
        interpretation: { zh: "象徵如井水般恆久不變的資源。無論環境如何改變，井水始終在那裡滋養眾人。應該像井水一樣，持續提供價值，幫助他人，這樣才能長久。", en: "Symbolizes an unchanging resource like well water. Regardless of changes, the well continues to nourish. Provide consistent value and help others." }
    },
    23: {
        name: { zh: "需", en: "Waiting" },
        element: { zh: "水 / 天", en: "Water / Heaven" },
        oracle: { zh: "雲上於天，需。", en: "Wait for the right moment. Patience is power." },
        interpretation: { zh: "象徵耐心等待的智慧。如同雲聚於天，雨水尚未降下。此時不要急躁，要有耐心等待最佳時機。在等待中充實自己，時機成熟時自然能成功。", en: "Symbolizes the wisdom of patient waiting. Like clouds gathering in the sky before rain. Don't rush, wait for the right moment while preparing yourself." }
    },

    // --- Upper: Lake (兌 ☱) ---
    24: {
        name: { zh: "萃", en: "Gathering Together" },
        element: { zh: "澤 / 地", en: "Lake / Earth" },
        oracle: { zh: "澤上於地，萬物群萃。", en: "Gathering of people and resources." },
        interpretation: { zh: "象徵人員和資源的聚集。如同湖水匯聚於大地，此時適合召集人才，整合資源。團結眾人的力量，共同完成大事業。", en: "Symbolizes gathering of people and resources. Like water collecting on earth, suitable for assembling talents and integrating resources for great undertakings." }
    },
    25: {
        name: { zh: "隨", en: "Following" },
        element: { zh: "澤 / 雷", en: "Lake / Thunder" },
        oracle: { zh: "剛來而下柔，隨。", en: "Adapt to the situation. Follow the flow." },
        interpretation: { zh: "象徵順應形勢，隨機應變。剛強的力量願意屈居柔順之下，這是智慧的表現。適應環境的變化，跟隨時勢的潮流，才能獲得成功。", en: "Symbolizes adapting to circumstances. Strength willingly yields to gentleness, showing wisdom. Adapt to changes and follow the trend to succeed." }
    },
    26: {
        name: { zh: "困", en: "Oppression" },
        element: { zh: "澤 / 水", en: "Lake / Water" },
        oracle: { zh: "澤無水，困。", en: "Adversity tests character. Words are not believed." },
        interpretation: { zh: "象徵陷入困境，如同湖中無水。處於逆境時，說話可能不被相信，行動受到限制。但困境能考驗人的品格，堅持正道，終能脫困。", en: "Symbolizes being trapped in adversity, like a lake without water. In difficult times, words may not be believed. But adversity tests character; persist in righteousness." }
    },
    27: {
        name: { zh: "兌", en: "The Joyous" },
        element: { zh: "澤 / 澤", en: "Lake / Lake" },
        oracle: { zh: "麗澤兌，君子以朋友講習。", en: "True joy comes from within and sharing." },
        interpretation: { zh: "象徵真誠的喜悅和交流。如同兩湖相連，朋友之間互相學習討論。真正的快樂來自內心，並且能與他人分享，這樣的喜悅才能長久。", en: "Symbolizes genuine joy and communication. Like two lakes connected, friends learn and discuss together. True happiness comes from within and is shared." }
    },
    28: {
        name: { zh: "咸", en: "Influence" },
        element: { zh: "澤 / 山", en: "Lake / Mountain" },
        oracle: { zh: "柔上而剛下，二氣感應。", en: "Mutual attraction and influence." },
        interpretation: { zh: "象徵相互感應和吸引。柔順在上，剛健在下，兩種力量互相感應。如同男女之間的吸引，真誠的感情能產生強大的影響力。", en: "Symbolizes mutual attraction and response. Gentleness above, strength below, two forces interact. Like attraction between people, sincere feelings create powerful influence." }
    },
    29: {
        name: { zh: "革", en: "Revolution" },
        element: { zh: "澤 / 火", en: "Lake / Fire" },
        oracle: { zh: "水火相息，變革之時。", en: "Change is necessary. Shed the old skin." },
        interpretation: { zh: "象徵變革和革新的時刻。水火相剋，舊的秩序必須改變。當舊的方式已經不再適用，就需要勇敢地進行改革，脫去舊皮，迎接新生。", en: "Symbolizes revolution and renewal. Water and fire clash, old order must change. When old ways no longer work, courageously reform and embrace renewal." }
    },
    30: {
        name: { zh: "大過", en: "Preponderance of the Great" },
        element: { zh: "澤 / 風", en: "Lake / Wind" },
        oracle: { zh: "澤滅木，壓力極大。", en: "The beam sags. Extraordinary measures are needed." },
        interpretation: { zh: "象徵承受極大的壓力。如同湖水淹沒樹木，棟樑彎曲。面對超出尋常的困難，需要採取非常手段。但要謹慎行事，不可魯莽。", en: "Symbolizes bearing extreme pressure. Like water overwhelming trees, the beam bends. Facing extraordinary difficulties requires extraordinary measures, but act cautiously." }
    },
    31: {
        name: { zh: "夬", en: "Break-through" },
        element: { zh: "澤 / 天", en: "Lake / Heaven" },
        oracle: { zh: "決也，剛決柔也。", en: "Decisive action. Remove the final obstacle." },
        interpretation: { zh: "象徵果斷決裂的時刻。剛強決斷柔弱，如同洪水決堤。面對最後的障礙，要果斷行動，不可猶豫。但要注意方式，避免過於激烈。", en: "Symbolizes decisive breakthrough. Strength decisively overcomes weakness, like a flood breaking through. Face the final obstacle decisively, but avoid being too forceful." }
    },

    // --- Upper: Mountain (艮 ☶) ---
    32: {
        name: { zh: "剝", en: "Splitting Apart" },
        element: { zh: "山 / 地", en: "Mountain / Earth" },
        oracle: { zh: "五陰剝一陽，不利有攸往。", en: "Decay. The inferior prevails. Keep quiet." },
        interpretation: { zh: "象徵衰敗剝落的時期。五陰剝一陽，小人得勢，君子受困。此時不宜有所作為，應該保持低調，靜待時機，保存實力。", en: "Symbolizes a period of decay. Five yin strip away one yang, inferior people prevail. Keep a low profile, wait for the right time, and preserve strength." }
    },
    33: {
        name: { zh: "頤", en: "Nourishment" },
        element: { zh: "山 / 雷", en: "Mountain / Thunder" },
        oracle: { zh: "山下有雷，養正。", en: "Watch what you say and what you eat." },
        interpretation: { zh: "象徵滋養和修養。如同嘴巴的形狀，要注意言語和飲食。謹慎自己說的話和吃的東西，培養正確的品德，才能真正滋養身心。", en: "Symbolizes nourishment and cultivation. Like the shape of a mouth, watch your words and diet. Be careful what you say and eat to truly nourish body and mind." }
    },
    34: {
        name: { zh: "蒙", en: "Youthful Folly" },
        element: { zh: "山 / 水", en: "Mountain / Water" },
        oracle: { zh: "山下出泉，啟蒙。", en: "Education and guidance are needed." },
        interpretation: { zh: "象徵年少無知，需要啟蒙教育。如同山下湧出泉水，蒙昧的心靈需要引導。虛心接受教育和指導，才能開啟智慧，走向成熟。", en: "Symbolizes youthful ignorance needing education. Like a spring emerging from the mountain, the ignorant mind needs guidance. Accept education humbly to gain wisdom." }
    },
    35: {
        name: { zh: "損", en: "Decrease" },
        element: { zh: "山 / 澤", en: "Mountain / Lake" },
        oracle: { zh: "損下益上，懲忿窒欲。", en: "Sacrifice for the greater good." },
        interpretation: { zh: "象徵減損自己，成就他人。下面減少以增益上面，這是一種犧牲。控制憤怒和慾望，減少私利，為了更大的目標而付出，最終會有回報。", en: "Symbolizes decreasing oneself to benefit others. Reduce below to increase above, a form of sacrifice. Control anger and desire, reduce self-interest for greater goals." }
    },
    36: {
        name: { zh: "艮", en: "Keeping Still" },
        element: { zh: "山 / 山", en: "Mountain / Mountain" },
        oracle: { zh: "時止則止，時行則行。", en: "Stillness. Stop and rest to clear the mind." },
        interpretation: { zh: "象徵靜止和休息的智慧。如同山一樣穩定不動。該停止的時候就停止，該行動的時候就行動。適時的休息能讓心靈清明，為下一步做好準備。", en: "Symbolizes the wisdom of stillness. Like a mountain, stable and unmoved. Stop when it's time to stop, act when it's time to act. Rest clears the mind." }
    },
    37: {
        name: { zh: "賁", en: "Grace" },
        element: { zh: "山 / 火", en: "Mountain / Fire" },
        oracle: { zh: "山下有火，文飾。", en: "Beauty and form are important, but not everything." },
        interpretation: { zh: "象徵文飾和美化。如同山下有火，照亮山的輪廓。外在的美和形式很重要，但不能只注重表面，內在的實質才是根本。", en: "Symbolizes decoration and beautification. Like fire under a mountain illuminating its contours. External beauty matters, but inner substance is fundamental." }
    },
    38: {
        name: { zh: "蠱", en: "Work on Decay" },
        element: { zh: "山 / 風", en: "Mountain / Wind" },
        oracle: { zh: "剛上而柔下，整治腐敗。", en: "Repairing what has been spoiled." },
        interpretation: { zh: "象徵腐敗需要整治。剛健在上，柔順在下，事物已經敗壞。要勇於面對問題，修復已經損壞的事物，清理腐敗，重建秩序。", en: "Symbolizes corruption needing correction. Strength above, gentleness below, things have decayed. Face problems bravely, repair what's damaged, clean up corruption." }
    },
    39: {
        name: { zh: "大畜", en: "Great Taming" },
        element: { zh: "山 / 天", en: "Mountain / Heaven" },
        oracle: { zh: "剛健篤實，輝光日新。", en: "Restraint accumulates great power." },
        interpretation: { zh: "象徵積蓄強大的力量。如同山能止住天，剛健的力量被約束而積累。通過自我約束和修養，不斷積累實力，最終能釋放巨大的能量。", en: "Symbolizes accumulating great power. Like a mountain stopping heaven, strength is restrained and accumulated. Through self-discipline, build power for eventual release." }
    },

    // --- Upper: Fire (離 ☲) ---
    40: {
        name: { zh: "晉", en: "Progress" },
        element: { zh: "火 / 地", en: "Fire / Earth" },
        oracle: { zh: "順而麗乎大明。", en: "The sun rises over the earth. Rapid advance." },
        interpretation: { zh: "象徵快速進步和晉升。如同太陽升起照耀大地，光明顯現。此時運勢上升，適合積極進取，展現自己的才能，必能獲得認可和提升。", en: "Symbolizes rapid progress and advancement. Like the sun rising over the earth, light appears. Fortune is rising, suitable for active advancement and showing your talents." }
    },
    41: {
        name: { zh: "噬嗑", en: "Biting Through" },
        element: { zh: "火 / 雷", en: "Fire / Thunder" },
        oracle: { zh: "雷電合而章，執法嚴明。", en: "Remove obstacles decisively like biting through." },
        interpretation: { zh: "象徵咬碎障礙，執法嚴明。雷電交加，威力強大。面對阻礙要果斷清除，如同咬碎硬物。執行法律或規則時要公正嚴明，不可姑息。", en: "Symbolizes biting through obstacles with strict enforcement. Thunder and lightning combined are powerful. Remove obstacles decisively, enforce rules fairly." }
    },
    42: {
        name: { zh: "未濟", en: "Before Completion" },
        element: { zh: "火 / 水", en: "Fire / Water" },
        oracle: { zh: "火在水上，雖不當位，充滿可能。", en: "Chaos creates potential. The cycle begins anew." },
        interpretation: { zh: "象徵事情尚未完成，充滿可能性。火在水上，位置不當，看似混亂。但這也意味著新的循環即將開始，充滿無限的潛力和機會。", en: "Symbolizes incompletion full of possibilities. Fire over water seems chaotic, but a new cycle begins with infinite potential and opportunities." }
    },
    43: {
        name: { zh: "睽", en: "Opposition" },
        element: { zh: "火 / 澤", en: "Fire / Lake" },
        oracle: { zh: "二女同居，其志不同行。", en: "Misunderstanding. Small matters can be achieved." },
        interpretation: { zh: "象徵意見不合，方向相反。如同兩個女子同住，志向不同。存在誤解和對立，但小事仍可完成。要尋求理解，在差異中找到共同點。", en: "Symbolizes disagreement and opposition. Like two women living together with different goals. Misunderstandings exist, but small matters can still be accomplished." }
    },
    44: {
        name: { zh: "旅", en: "The Wanderer" },
        element: { zh: "火 / 山", en: "Fire / Mountain" },
        oracle: { zh: "山上有火，羈旅。", en: "Moving through strange lands. Be cautious." },
        interpretation: { zh: "象徵旅行在外，居無定所。如同山上有火，不能長久。身處異鄉或陌生環境，要謹慎小心，保持謙遜，不要過於張揚。", en: "Symbolizes traveling abroad without a fixed home. Like fire on a mountain, cannot last long. In strange places, be cautious, humble, and not ostentatious." }
    },
    45: {
        name: { zh: "離", en: "The Clinging (Fire)" },
        element: { zh: "火 / 火", en: "Fire / Fire" },
        oracle: { zh: "日月麗乎天，百穀草木麗乎土。", en: "Clinging to what is right. Clarity and light." },
        interpretation: { zh: "象徵依附和光明。如同日月附麗於天，萬物附麗於大地。要依附於正確的事物，保持內心的光明和清晰，照亮自己也照亮他人。", en: "Symbolizes clinging and illumination. Like sun and moon clinging to heaven, all things to earth. Cling to what is right, maintain inner clarity and light." }
    },
    46: {
        name: { zh: "鼎", en: "The Cauldron" },
        element: { zh: "火 / 風", en: "Fire / Wind" },
        oracle: { zh: "木上有火，烹飪以養賢。", en: "Transformation and spiritual nourishment." },
        interpretation: { zh: "象徵烹飪和轉化。木上有火，如同鼎器烹煮食物。通過學習和修煉，轉化自己，提升精神境界。也象徵培養賢才，滋養社會。", en: "Symbolizes cooking and transformation. Fire over wood like a cauldron cooking. Through learning and cultivation, transform yourself and elevate spiritually." }
    },
    47: {
        name: { zh: "大有", en: "Possession in Great Measure" },
        element: { zh: "火 / 天", en: "Fire / Heaven" },
        oracle: { zh: "火在天上，順天休命。", en: "Great success and wealth. Shine like the sun." },
        interpretation: { zh: "象徵擁有巨大的財富和成功。火在天上，如同太陽照耀萬物。運勢極佳，事業興旺，但要記得順應天命，謙虛待人，才能長久。", en: "Symbolizes great wealth and success. Fire in heaven like the sun illuminating all. Excellent fortune, but remember to follow heaven's will and stay humble." }
    },

    // --- Upper: Wind (巽 ☴) ---
    48: {
        name: { zh: "觀", en: "Contemplation" },
        element: { zh: "風 / 地", en: "Wind / Earth" },
        oracle: { zh: "風行地上，觀民設教。", en: "Observe closely and lead by example." },
        interpretation: { zh: "象徵觀察和示範。風行於地上，無處不至。要仔細觀察民情，了解實際情況。同時以身作則，用行動來教育和影響他人。", en: "Symbolizes observation and example. Wind moves over earth, reaching everywhere. Observe carefully and lead by example through actions." }
    },
    49: {
        name: { zh: "益", en: "Increase" },
        element: { zh: "風 / 雷", en: "Wind / Thunder" },
        oracle: { zh: "風雷益，君子以見善則遷。", en: "Gain through serving others." },
        interpretation: { zh: "象徵增益和成長。風雷相助，力量倍增。通過服務他人、幫助他人而獲得成長。見到善事就學習，不斷改進自己，這樣才能真正受益。", en: "Symbolizes increase and growth. Wind and thunder assist each other, power multiplies. Grow through serving others, learn from good deeds." }
    },
    50: {
        name: { zh: "渙", en: "Dispersion" },
        element: { zh: "風 / 水", en: "Wind / Water" },
        oracle: { zh: "風行水上，化險為夷。", en: "Rigidity dissolves. Spread goodwill." },
        interpretation: { zh: "象徵消散和化解。風行於水上，波浪散開。僵化的局面得以化解，危險轉為平安。要散播善意和恩惠，讓美好的事物傳播開來。", en: "Symbolizes dispersion and dissolution. Wind over water, waves scatter. Rigid situations dissolve, danger becomes safety. Spread goodwill." }
    },
    51: {
        name: { zh: "中孚", en: "Inner Truth" },
        element: { zh: "風 / 澤", en: "Wind / Lake" },
        oracle: { zh: "澤上有風，信也。", en: "Sincerity connects everything." },
        interpretation: { zh: "象徵內心的誠信。風行於澤上，誠信之象。真誠能感動一切，連接萬物。保持內心的真誠和信用，就能影響他人，獲得信任。", en: "Symbolizes inner sincerity. Wind over lake, image of trust. Sincerity moves everything and connects all. Maintain inner truth to influence others." }
    },
    52: {
        name: { zh: "漸", en: "Development" },
        element: { zh: "風 / 山", en: "Wind / Mountain" },
        oracle: { zh: "山上有木，循序漸進。", en: "Slow and steady progress." },
        interpretation: { zh: "象徵循序漸進的發展。如同樹木在山上慢慢生長。不要急於求成，按部就班地前進，穩紮穩打，最終必能達到目標。", en: "Symbolizes gradual development. Like trees growing slowly on a mountain. Don't rush, advance step by step steadily to reach your goal." }
    },
    53: {
        name: { zh: "家人", en: "The Family" },
        element: { zh: "風 / 火", en: "Wind / Fire" },
        oracle: { zh: "風自火出，言有物行有恆。", en: "Harmony begins in the home." },
        interpretation: { zh: "象徵家庭和諧。風從火出，言行一致。和諧始於家庭，說話要有內容，行為要有恆心。先把家庭關係處理好，才能處理好外面的事務。", en: "Symbolizes family harmony. Wind from fire, words match deeds. Harmony begins at home, speak with substance, act with consistency." }
    },
    54: {
        name: { zh: "巽", en: "The Gentle (Wind)" },
        element: { zh: "風 / 風", en: "Wind / Wind" },
        oracle: { zh: "隨風而入，柔皆順乎剛。", en: "Gentle penetration. Flexibility brings success." },
        interpretation: { zh: "象徵柔順和滲透。風無孔不入，柔順卻有力。保持靈活和謙遜，以柔克剛，溫和地影響他人，反而能達到目的。", en: "Symbolizes gentleness and penetration. Wind penetrates everywhere, gentle yet powerful. Stay flexible and humble, overcome strength with softness." }
    },
    55: {
        name: { zh: "小畜", en: "Taming of the Small" },
        element: { zh: "風 / 天", en: "Wind / Heaven" },
        oracle: { zh: "密雲不雨，自我西郊。", en: "Temporary restraint. Clouds but no rain yet." },
        interpretation: { zh: "象徵小有積蓄，暫時受阻。如同密雲不雨，雨水尚未降下。力量還不夠強大，需要繼續積累。暫時的約束是為了將來更大的發展。", en: "Symbolizes small accumulation and temporary obstruction. Like dense clouds without rain. Power is insufficient, continue accumulating for future development." }
    },

    // --- Upper: Heaven (乾 ☰) ---
    56: {
        name: { zh: "否", en: "Stagnation" },
        element: { zh: "天 / 地", en: "Heaven / Earth" },
        oracle: { zh: "天地不交，否。", en: "Blocked communication. Stand by your principles." },
        interpretation: { zh: "象徵閉塞不通。天地不交，陰陽隔絕。溝通受阻，小人得勢，君子受困。此時要堅守原則，保持品德，等待時機轉變。", en: "Symbolizes obstruction. Heaven and earth don't communicate, yin and yang separated. Communication blocked, stand by principles and wait for change." }
    },
    57: {
        name: { zh: "無妄", en: "Innocence" },
        element: { zh: "天 / 雷", en: "Heaven / Thunder" },
        oracle: { zh: "天下雷行，物與無妄。", en: "Action without ulterior motive." },
        interpretation: { zh: "象徵真誠無妄，順應天道。天下雷行，萬物自然。行動要出於真心，不帶私心雜念。順應自然規律，不刻意造作，才能獲得成功。", en: "Symbolizes innocence and following the way of heaven. Thunder under heaven, all things natural. Act from the heart without ulterior motives." }
    },
    58: {
        name: { zh: "訟", en: "Conflict" },
        element: { zh: "天 / 水", en: "Heaven / Water" },
        oracle: { zh: "天與水違行，慎始。", en: "Conflict. Seek compromise, not victory." },
        interpretation: { zh: "象徵爭訟和衝突。天與水背道而馳，意見相左。面對衝突要謹慎處理，尋求妥協而非勝利。在事情開始時就要小心，避免爭端擴大。", en: "Symbolizes litigation and conflict. Heaven and water move in opposite directions. Handle conflicts carefully, seek compromise not victory." }
    },
    59: {
        name: { zh: "履", en: "Treading" },
        element: { zh: "天 / 澤", en: "Heaven / Lake" },
        oracle: { zh: "如履虎尾，不咥人。", en: "Walking on the tiger's tail. Caution is required." },
        interpretation: { zh: "象徵小心謹慎地行走。如同踩在老虎尾巴上，危險但不被咬。處於危險的環境中，要特別謹慎小心，保持禮節和分寸，才能平安度過。", en: "Symbolizes treading carefully. Like stepping on a tiger's tail, dangerous but not bitten. In dangerous situations, be extremely cautious and maintain propriety." }
    },
    60: {
        name: { zh: "遯", en: "Retreat" },
        element: { zh: "天 / 山", en: "Heaven / Mountain" },
        oracle: { zh: "天下有山，遠人以不惡。", en: "Retreat to preserve energy. Not cowardice." },
        interpretation: { zh: "象徵明智的退避。天下有山，君子遠離小人。適時的退讓不是懦弱，而是保存實力的智慧。遠離不好的環境和人，以待時機。", en: "Symbolizes wise retreat. Mountain under heaven, the wise distance themselves from the inferior. Timely retreat is wisdom, not cowardice." }
    },
    61: {
        name: { zh: "同人", en: "Fellowship" },
        element: { zh: "天 / 火", en: "Heaven / Fire" },
        oracle: { zh: "天與火，同人於野。", en: "Working together with others in harmony." },
        interpretation: { zh: "象徵與人和諧共處。天與火同行，志同道合。在廣闊的天地間與他人合作，以公心對待眾人，建立和諧的團隊關係。", en: "Symbolizes fellowship with others. Heaven and fire together, like-minded. Cooperate with others in the vast world with a public spirit." }
    },
    62: {
        name: { zh: "姤", en: "Coming to Meet" },
        element: { zh: "天 / 風", en: "Heaven / Wind" },
        oracle: { zh: "天下有風，勿用取女。", en: "A chance encounter. Be careful of temptation." },
        interpretation: { zh: "象徵偶然的相遇。天下有風，不期而遇。面對突如其來的機會或誘惑，要保持警覺，不要被表面現象迷惑，謹慎判斷。", en: "Symbolizes chance encounters. Wind under heaven, unexpected meeting. Face sudden opportunities or temptations with vigilance and careful judgment." }
    },
    63: {
        name: { zh: "乾", en: "The Creative" },
        element: { zh: "天 / 天", en: "Heaven / Heaven" },
        oracle: { zh: "天行健，自強不息。", en: "Pure creative energy. Perseverance." },
        interpretation: { zh: "象徵純陽之氣，創造之力。天行健，君子以自強不息。擁有強大的創造力和行動力，但要持續努力，永不停歇，才能成就偉大的事業。", en: "Symbolizes pure yang energy and creative power. Heaven's movement is vigorous, the superior person strives continuously. Possess great creativity but must persevere constantly." }
    }
};