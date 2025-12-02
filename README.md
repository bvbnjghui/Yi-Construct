# ☯️ Yi-Construct: Daoist Battler

**Yi-Construct** is a Roguelike Deckbuilder game built with **Alpine.js** and **Tailwind CSS**, inspired by *Slay the Spire* and the ancient Chinese classic *I Ching (Book of Changes)*.

Players assume the role of a Daoist cultivator fighting against their "Inner Demon" (心魔) by constructing Hexagrams (六爻) to cast powerful spells.

![Game Screenshot](https://via.placeholder.com/800x450?text=Daoist+Battler+Gameplay)

## ✨ Features

*   **Hexagram Spellcasting**: Construct spells line by line (Yin/Yang).
*   **Trigram Stats System**:
    *   **🔥 Fire (Li)**: Attack Damage.
    *   **⛰️ Mountain (Gen)**: Defense (Block).
    *   **💧 Water (Kan)**: Healing.
    *   **⚡ Thunder (Zhen)**: Attack.
    *   **☁️ Heaven (Qian)**: High Attack.
    *   **🌍 Earth (Kun)**: High Defense.
*   **Resonance Mechanic**: If the Upper Trigram matches the Lower Trigram (e.g., Heaven over Heaven), all stats are multiplied by **1.5x**!
*   **Turn-Based Combat**: Strategic battles with enemy intent display (Attack/Defend).
*   **Bilingual Support**: Fully localized in English and Traditional Chinese (繁體中文).

## 🚀 How to Run

This project uses vanilla HTML/JS and requires no build step. However, due to ES Module imports, it must be served via a local web server.

### Prerequisites
*   Python (pre-installed on most systems) OR Node.js

### Steps
1.  Clone or download the repository.
2.  Open a terminal in the project folder.
3.  Run a local server:
    *   **Python**: `py -m http.server` (or `python3 -m http.server`)
    *   **Node**: `npx serve`
4.  Open your browser and go to `http://localhost:8000` (or the port shown in your terminal).

## 🎮 How to Play

1.  **Start Game**: Click "Start Combat" (開始戰鬥).
2.  **Check Enemy Intent**: Look at the icon above the enemy.
    *   ⚔️ = Attacking (Use Defense!)
    *   🛡️ = Defending (Use Attack!)
3.  **Construct Hexagram**:
    *   Click **Yin (--)** or **Yang (—)** buttons to build a Hexagram from bottom to top.
    *   You need exactly **6 lines** to cast a spell.
4.  **Preview Stats**: Watch the preview box to see the calculated ATK/DEF/HEAL values.
5.  **Cast Spell**: Click **CAST** to unleash your magic!
6.  **Win Condition**: Reduce the Enemy HP to 0 before you die.

## 🛠️ Tech Stack

*   **Core Logic**: [Alpine.js](https://alpinejs.dev/) (Lightweight reactive framework)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/) (Utility-first CSS)
*   **Icons**: Standard Unicode Emojis

## 📂 Project Structure

```
Yi-Construct/
├── index.html          # Main Game UI
├── src/
│   ├── engine.js       # Game Logic & State Management
│   └── data.js         # Hexagram Data Definitions
└── README.md           # Documentation
```

---
*Created by Antigravity*
