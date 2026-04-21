# 🎮 Quiz Battle Royale - Python Programming Game

A fun, interactive group activity game for learning Python programming concepts!

## 🎯 Game Features

### Core Gameplay

- **Turn-based Q&A format** with mystery card selection
- **3 difficulty levels**: Easy (100pts), Medium (200pts), Hard (300pts)
- **Timed questions**: 30s/40s/50s based on difficulty
- **2-6 teams** competing for the highest score
- **60 Python questions** covering:
  - Operations (arithmetic, logical, bitwise)
  - Conditional Statements (if/elif/else, ternary)
  - Loops (for, while, break, continue)
  - Classes (OOP, inheritance, methods)

### Power-Ups System

Each team gets 3 random power-ups:

**Offensive:**

- ⏰ **Time Freeze** - Reduce target team's time by 15s
- 💰 **Point Stealer** - Steal 50% of target's points
- 💣 **Point Bomb** - All teams lose 100pts except you
- 🔥 **Sabotage** - Cut target's time in half

**Defensive:**

- 🛡️ **Shield** - Protect from attacks for 2 rounds

**Boost:**

- ⭐ **Double Down** - Next correct answer worth 2x
- 🎯 **Multiplier Madness** - Next 3 answers worth 3x
- 🔄 **Swap Question** - Get new question (same difficulty)
- ✂️ **50/50** - Remove 2 wrong answers
- 💡 **Lifeline** - Reveal answer (50% points)

### Special Features

- **Streak Bonus**: Get 3 or more correct answers in a row to activate a 2x point multiplier!
  - The streak counter increases with each correct answer
  - Once you reach 3 correct answers, ALL subsequent correct answers get doubled
  - The streak resets to 0 if you answer incorrectly
  - The 🔥x2 badge appears on your team card when the streak bonus is active
  - Streak bonus stacks with other multipliers (Double Down, Multiplier Madness)
  - Example: Easy question (100pts) with streak = 200pts, Medium (200pts) = 400pts
- **Visual Effects**: Flashing animations when power-ups are used
- **Active Effects Display**: See which teams have buffs/debuffs
- **Randomized Questions**: Different questions each game

## 🚀 How to Run

1. **Install dependencies** (if not already done):

   ```bash
   cd client
   npm install
   ```

2. **Start the development server**:

   ```bash
   npm start
   ```

3. **Open your browser**:
   Navigate to `http://localhost:4200`

## 🎮 How to Play

### Setup Phase

1. Choose number of teams (2-6)
2. Choose number of rounds (5, 7, or 10)
3. Enter team names
4. Click "Start Game"

### Game Phase

1. Current team selects a mystery card from the 5x3 grid
2. Card reveals difficulty and points
3. Question appears with timer
4. Team selects answer (A/B/C/D)
5. Submit answer before time runs out
6. See if correct and earn points
7. Next team's turn

### Power-Up Usage

- Click power-up button during your turn
- For offensive power-ups, select target team
- Power-up takes effect immediately or on target's next turn

### Winning

- Game ends after all rounds complete
- Team with highest score wins!
- Play again to try different strategies

## 🎨 Visual Indicators

- **Active Team**: Highlighted with colored border and scale effect
- **Timer Warning**: Red and blinking when < 10 seconds
- **Streak Bonus**: 🔥x2 badge when 3+ correct in a row
- **Active Effects**: Icons show buffs/debuffs on each team
- **Difficulty Colors**:
  - 🟢 Easy = Green
  - 🟠 Medium = Orange
  - 🔴 Hard = Red

## 📱 Responsive Design

Works great on:

- Desktop computers
- Tablets
- Large screens/projectors for group viewing

## 🎓 Educational Value

Perfect for:

- Python programming classes
- Coding bootcamps
- Study groups
- Team building activities
- Competitive learning environments

## 🛠️ Technical Stack

- **Framework**: Angular 20
- **Language**: TypeScript
- **Styling**: CSS3 with animations
- **State Management**: Angular Signals
- **No backend required** - runs entirely in browser

## 🎉 Tips for Best Experience

1. **Use a projector** for group viewing
2. **Encourage discussion** before answering
3. **Use power-ups strategically** - timing is everything!
4. **Mix difficulty levels** - don't always pick easy!
5. **Learn from explanations** - read them after each question

Enjoy the game! 🚀
